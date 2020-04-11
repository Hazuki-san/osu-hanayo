package main

import (
	"database/sql"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/osuthailand/api/common"
)

// TODO: replace with simple ResponseInfo containing userid
type profileData struct {
	baseTemplateData
	UserID int
}

func userProfile(c *gin.Context) {
	var (
		userID     int
		username   string
		privileges uint64
	)

	ctx := getContext(c)

	u := c.Param("user")
	if _, err := strconv.Atoi(u); err != nil {
		err := db.QueryRow("SELECT id, username, privileges FROM users WHERE username = ? AND "+ctx.OnlyUserPublic()+" LIMIT 1", u).Scan(&userID, &username, &privileges)
		if err != nil && err != sql.ErrNoRows {
			c.Error(err)
		}
	} else {
		err := db.QueryRow(`SELECT id, username, privileges FROM users WHERE id = ? AND `+ctx.OnlyUserPublic()+` LIMIT 1`, u).Scan(&userID, &username, &privileges)
		switch {
		case err == nil:
		case err == sql.ErrNoRows:
			err := db.QueryRow(`SELECT id, username, privileges FROM users WHERE username = ? AND `+ctx.OnlyUserPublic()+` LIMIT 1`, u).Scan(&userID, &username, &privileges)
			if err != nil && err != sql.ErrNoRows {
				c.Error(err)
			}
		default:
			c.Error(err)
		}
	}

	data := new(profileData)
	data.UserID = userID

	defer resp(c, 200, "profile.html", data)

	if data.UserID == 0 {
		data.TitleBar = "player info "
		data.Messages = append(data.Messages, neutralMessage{T(c, `<div class='header-v4'> <div class='header-v4__container header-v4__container--main'> <div class='header-v4__bg-container'> <div class='header-v4__bg '></div></div><div class='header-v4__content'> <div class='header-v4__row header-v4__row--title'> <div class='header-v4__icon'></div><div class='header-v4__title'> player info </div></div></div></div></div><div class='osu-page osu-page--generic'> <h1>User not found! ;_;</h1> <p>There are a few possible reasons for this:</p><ul> <li>They may have changed their username. </li><li>The account may be temporarily unavailable due to security or abuse issues. </li><li>You may have made a typo! </li></ul></div></div><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div><div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button type="button" class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button type="button" class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button type="button" class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="js-pswp-buttons"></div><div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button type="button" class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button type="button" class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div>
		<footer class="no-print footer">
    		<div class="footer__row"> <a class="footer__link" href="https://osu.ppy.sh/legal/terms"> Terms </a> <a class="footer__link" href="https://osu.ppy.sh/legal/privacy"> Privacy </a> <a class="footer__link" href="https://osu.ppy.sh/legal/copyright"> Copyright (DMCA) </a> <a class="footer__link" href="https://twitter.com/osustatus"> Server Status </a> <a class="footer__link" href="https://github.com/osuthailand"> Source Code </a> </div>
    		<div class="footer__row">
        <center>
        	2016-2020 Ripple&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2018-2020 osu!Ainu&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2007-2020 ppy Pty Ltd&nbsp;&nbsp;&nbsp;&nbsp;<br>Ainu is not affiliated with ppy Pty Ltd in any way.&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;"osu!" is a trademark of ppy Pty Ltd.
        </center>
    </div>
    <div class="js-sync-height--target" data-sync-height-id="permanent-fixed-footer"></div>
</footer>`)})
		return
	}

	if common.UserPrivileges(privileges)&common.UserPrivilegeDonor > 0 {
		var profileBackground struct {
			Type  int
			Value string
		}
		db.Get(&profileBackground, "SELECT type, value FROM profile_backgrounds WHERE uid = ?", data.UserID)
		switch profileBackground.Type {
		case 1:
			data.KyutGrill = "/static/profbackgrounds/" + profileBackground.Value
			data.KyutGrillAbsolute = true
		case 2:
			data.SolidColour = profileBackground.Value
		}
	}

	data.TitleBar = T(c, "%s's profile", username)
	data.DisableHH = true
	data.Scripts = append(data.Scripts, "/static/profile.js")
}

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
		data.Messages = append(data.Messages, neutralMessage{T(c, `<div class='header-v4'> <div class='header-v4__container header-v4__container--main'> <div class='header-v4__bg-container'> <div class='header-v4__bg '></div></div><div class='header-v4__content'> <div class='header-v4__row header-v4__row--title'> <div class='header-v4__icon'></div><div class='header-v4__title'> player info </div></div></div></div></div><div class='osu-page osu-page--generic'> <h1>User not found! ;_;</h1> <p>There are a few possible reasons for this:</p><ul> <li>They may have changed their username. </li><li>The account may be temporarily unavailable due to security or abuse issues. </li><li>You may have made a typo! </li></ul></div></div> <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><!-- Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). --> <div class="pswp__bg"></div><div class="pswp__scroll-wrap"><!-- Container that holds slides. PhotoSwipe keeps only 3 of them in the DOM to save memory. Don't modify these 3 pswp__item elements, data is added later on. --> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button type="button" class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button type="button" class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button type="button" class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="js-pswp-buttons"></div><div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button type="button" class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button type="button" class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div><footer class="no-print footer"> <div class="footer__row"> <a class="footer__link" href="https://osu.ppy.sh/legal/terms"> Terms </a> <a class="footer__link" href="https://osu.ppy.sh/legal/privacy"> Privacy </a> <a class="footer__link" href="https://osu.ppy.sh/legal/copyright"> Copyright (DMCA) </a> <a class="footer__link" href="https://twitter.com/osustatus"> Server Status </a> <a class="footer__link" href="https://github.com/ppy"> Source Code </a> </div><div class="footer__row">ppy powered 2007-2020</div><div class="js-sync-height--target" data-sync-height-id="permanent-fixed-footer"></div></footer> <div class="fixed-bar js-fixed-element js-fixed-bottom-bar js-sticky-footer--fixed-bar" > <div class="js-permanent-fixed-footer js-sync-height--reference" data-sync-height-target="permanent-fixed-footer" > </div></div><audio class="js-audio" preload="auto"></audio> <script data-turbolinks-eval="always"> var csrf="pNjNm5TG6i0RoMAC37bv2aTNzdzTBmhBF5Iu2QBh"; var canonicalUrl=""; var reloadUrl="";</script><script class="js-current-user"> var currentUser={}; // self-destruct to avoid rerun by turbolinks $('.js-current-user').remove();</script><div id="js-usercard__loading-template" class="hidden"> <div class="js-react--user-card"></div></div><div class="loading-overlay js-loading-overlay"> <div class="loading-overlay__container"> <div class="loading-overlay__follow-point loading-overlay__follow-point--1"> › </div><div class="loading-overlay__circle loading-overlay__circle--1 loading-overlay__circle--approach" ></div><div class="loading-overlay__circle loading-overlay__circle--1 loading-overlay__circle--hit" ></div><div class="loading-overlay__follow-point loading-overlay__follow-point--2"> › </div><div class="loading-overlay__circle loading-overlay__circle--2 loading-overlay__circle--approach" ></div><div class="loading-overlay__circle loading-overlay__circle--2 loading-overlay__circle--hit" ></div><div class="loading-overlay__follow-point loading-overlay__follow-point--3"> › </div><div class="loading-overlay__circle loading-overlay__circle--3 loading-overlay__circle--approach" ></div><div class="loading-overlay__circle loading-overlay__circle--3 loading-overlay__circle--hit" ></div><div class="loading-overlay__follow-point loading-overlay__follow-point--4"> › </div><div class="loading-overlay__circle loading-overlay__circle--4 loading-overlay__circle--approach" ></div><div class="loading-overlay__circle loading-overlay__circle--4 loading-overlay__circle--hit" ></div></div></div><div id="popup-container"> <div class="alert alert-dismissable popup-clone col-md-6 col-md-offset-3 text-center" style="display: none"> <button type="button" data-dismiss="alert" class="close"><i class="fas fa-times"></i></button> <span class="popup-text"></span> </div><div class="empty-popup empty-popup--clone" style="display: none"> <div class="popup-content"></div></div></div><script id="json-route-section" type="application/json">{"action":"show","controller":"users_controller","namespace":"main","section":"user"}</script> <div class="js-user-verification modal fade" tabindex="-1"> <div class="modal-dialog modal-dialog--full"> <div class="user-verification-popup"> <div class="osu-layout__row"> <div class="user-verification-popup__modal"> <div class="js-user-verification--box user-verification-popup__box"> </div></div></div></div></div></div>`)})
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

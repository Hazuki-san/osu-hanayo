(window.webpackJsonp = window.webpackJsonp || []).push([
 [1], {
  "+3o9": function(t, e) {
   (function() {
    this.InputHandler = function() {
     function t() {}
     return t.CANCEL = "cancel", t.SUBMIT = "submit", t.KEY_ENTER = 13, t.KEY_ESC = 27, t.textarea = function(e) {
      return function(i) {
       var n;
       return i.keyCode === t.KEY_ESC ? n = t.CANCEL : i.keyCode === t.KEY_ENTER && !i.shiftKey && osu.isDesktop() && (i.preventDefault(), n = t.SUBMIT), "function" == typeof e ? e(n, i) : void 0
      }
     }, t
    }()
   }).call(window)
  },
  "+U5f": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.UserVerification = function() {
     function e() {
      this.showOnLoad = t(this.showOnLoad, this), this.showOnError = t(this.showOnError, this), this.show = t(this.show, this), this.success = t(this.success, this), this.setModal = t(this.setModal, this), this.setMessage = t(this.setMessage, this), this.reposition = t(this.reposition, this), this.reissue = t(this.reissue, this), this.prepareForRequest = t(this.prepareForRequest, this), this.isActive = t(this.isActive, this), this.float = t(this.float, this), this.error = t(this.error, this), this.autoSubmit = t(this.autoSubmit, this), this.$modal = t(this.$modal, this), addEventListener("turbolinks:load", this.setModal), $(document).on("ajax:error", this.showOnError), $(document).on("turbolinks:load", this.showOnLoad), $(document).on("input", ".js-user-verification--input", this.autoSubmit), $(document).on("click", ".js-user-verification--reissue", this.reissue), $.subscribe("user-verification:success", this.success), $(window).on("throttled-resize throttled-scroll", this.reposition), this.clickAfterVerification = null, this.inputBox = document.getElementsByClassName("js-user-verification--input"), this.message = document.getElementsByClassName("js-user-verification--message"), this.messageSpinner = document.getElementsByClassName("js-user-verification--message-spinner"), this.messageText = document.getElementsByClassName("js-user-verification--message-text"), this.reference = document.getElementsByClassName("js-user-verification--reference")
     }
     return e.prototype.$modal = function() {
      return $(".js-user-verification")
     }, e.prototype.autoSubmit = function(t) {
      var e, i, n, s;
      if (e = (s = this.inputBox[0]).value.replace(/\s/g, ""), n = s.dataset.lastKey, i = parseInt(s.dataset.verificationKeyLength, 10), 0 === e.length && this.setMessage(), i === e.length && e !== n) return s.dataset.lastKey = e, this.prepareForRequest("verifying"), this.request = $.post(laroute.route("account.verify"), {
       verification_key: e
      }).done(this.success).fail(this.error)
     }, e.prototype.isVerificationPage = function() {
      return null != document.querySelector(".js-user-verification--on-load")
     }, e.prototype.error = function(t) {
      return this.setMessage(osu.xhrErrorMessage(t))
     }, e.prototype.float = function(t, e, i) {
      return null == e && (e = this.modal), t ? (e.classList.add("js-user-verification--center"), e.style.paddingTop = null) : (e.classList.remove("js-user-verification--center"), e.style.paddingTop = i + "px")
     }, e.prototype.isActive = function() {
      var t;
      return null != (t = this.modal) ? t.classList.contains("js-user-verification--active") : void 0
     }, e.prototype.prepareForRequest = function(t) {
      var e;
      return null != (e = this.request) && e.abort(), this.setMessage(osu.trans("user_verification.box." + t), !0)
     }, e.prototype.reissue = function(t) {
      return t.preventDefault(), this.prepareForRequest("issuing"), this.request = $.post(laroute.route("account.reissue-code")).done((e = this, function(t) {
       return e.setMessage(t.message)
      })).fail(this.error);
      var e
     }, e.prototype.reposition = function() {
      var t, e;
      if (this.isActive()) return osu.isMobile() ? this.float(!0, this.modal) : (e = null != (t = this.reference[0]) ? t.getBoundingClientRect().bottom : void 0, this.float(e < 0, this.modal, e))
     }, e.prototype.setMessage = function(t, e) {
      if (null == e && (e = !1), null != t && 0 !== t.length) return this.messageText[0].textContent = t, Fade.toggle(this.messageSpinner[0], e), Fade.in(this.message[0]);
      Fade.out(this.message[0])
     }, e.prototype.setModal = function() {
      return this.modal = document.querySelector(".js-user-verification")
     }, e.prototype.success = function() {
      var t;
      if (this.isActive()) return this.$modal().modal("hide"), this.modal.classList.remove("js-user-verification--active"), t = this.clickAfterVerification, this.clickAfterVerification = null, this.setMessage(), this.inputBox[0].value = "", this.inputBox[0].dataset.lastKey = "", this.isVerificationPage() ? osu.reloadPage() : null != t ? osu.executeAction(t) : void 0
     }, e.prototype.show = function(t, e) {
      return this.clickAfterVerification = t, null != e && $(".js-user-verification--box").html(e), this.$modal().modal({
       backdrop: "static",
       keyboard: !1,
       show: !0
      }).addClass("js-user-verification--active"), this.reposition()
     }, e.prototype.showOnError = function(t, e) {
      var i, n;
      return n = t.target, 401 === e.status && "verify" === (null != (i = e.responseJSON) ? i.authentication : void 0) && (this.show(n, e.responseJSON.box), !0)
     }, e.prototype.showOnLoad = function() {
      if (this.isVerificationPage()) return this.show()
     }, e
    }()
   }).call(window)
  },
  0: function(t, e, i) {
   i("hjjs"), t.exports = i("zzf1")
  },
  "0Sjo": function(t, e) {
   (function() {
    var t, e = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    t = "beatmap-discussions-chart", this.BeatmapDiscussionsChart = function() {
     function i(i, n) {
      var s;
      this.length = n, this.resize = e(this.resize, this), this.positionPoints = e(this.positionPoints, this), this.drawXAxis = e(this.drawXAxis, this), this.drawAreas = e(this.drawAreas, this), this.setWrapperSize = e(this.setWrapperSize, this), this.setSvgSize = e(this.setSvgSize, this), this.setAxisSize = e(this.setAxisSize, this), this.setScales = e(this.setScales, this), this.setDimensions = e(this.setDimensions, this), this.loadData = e(this.loadData, this), this.id = Math.floor(1e3 * Math.random()), this.dimensions = {
       chartHeight: 120,
       totalHeight: 150,
       xAxisHeight: 2,
       barTop: 0,
       targetAreaWidth: 10
      }, this.dimensions.labelHeight = this.dimensions.totalHeight - this.dimensions.chartHeight, this.dimensions.labelTop = this.dimensions.totalHeight - this.dimensions.labelHeight, this.dimensions.iconTop = this.dimensions.labelTop + this.dimensions.labelHeight / 2, this.dimensions.barHeight = this.dimensions.chartHeight - this.dimensions.barTop, this.dimensions.xAxisTop = this.dimensions.chartHeight - this.dimensions.xAxisHeight, this.dimensions.targetAreaHeight = this.dimensions.barHeight + this.dimensions.labelHeight, this.margins = {
       top: 0,
       right: 40,
       bottom: 0,
       left: 40
      }, this.scaleX = d3.scaleLinear().domain([0, this.length]).nice(), this.area = d3.select(i).append("div").classed(t, !0), this.svg = this.area.append("svg"), (s = this.svg.append("defs").append("linearGradient").attr("id", "bar-gradient-" + this.id).attr("gradientUnits", "userSpaceOnUse").attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", "100%")).append("stop").classed(t + "__bar-gradient " + t + "__bar-gradient--start", !0).attr("offset", "30%"), s.append("stop").classed(t + "__bar-gradient", !0).attr("offset", "80%"), this.svgWrapper = this.svg.append("g").classed(t + "__wrapper", !0), this.svgChartArea = this.svgWrapper.append("rect").attr("x", -this.margins.left).attr("y", 0).attr("height", this.dimensions.chartHeight).classed(t + "__chart-area", !0), this.svgLabelArea = this.svgWrapper.append("rect").attr("x", -this.margins.left).attr("y", this.dimensions.labelTop).attr("height", this.dimensions.labelHeight).classed(t + "__label-area", !0), this.svgXAxis = this.svgWrapper.append("rect").attr("x", -this.margins.left).attr("y", this.dimensions.xAxisTop).attr("height", this.dimensions.xAxisHeight).classed(t + "__axis " + t + "__axis--x", !0), this.svgPointsContainer = this.svgWrapper.append("g"), this.xAxis = d3.axisBottom().ticks(0).tickSizeOuter(0)
     }
     return i.prototype.loadData = function(e) {
      var i;
      return this.data = _.orderBy(e, "timestamp"), this.svgPoints = this.svgPointsContainer.selectAll("." + t + "__point").data(this.data, (function(t) {
       return t.id
      })), (i = this.svgPoints.enter().append("a").classed(t + "__point", !0)).append("line").classed(t + "__bar", !0).attr("x1", 0).attr("x2", 0).attr("y1", this.dimensions.barTop).attr("y2", this.dimensions.barTop + this.dimensions.barHeight).attr("stroke", "url(#bar-gradient-" + this.id + ")"), i.append("rect").classed(t + "__target-area", !0).attr("x", -this.dimensions.targetAreaWidth / 2).attr("width", this.dimensions.targetAreaWidth).attr("y", this.dimensions.barTop).attr("height", this.dimensions.targetAreaHeight), i.append("text").classed(t + "__icon", !0).style("text-anchor", "middle").attr("y", this.dimensions.iconTop), this.svgPoints.exit().remove(), this.svgPoints = i.merge(this.svgPoints), this.svgPoints.attr("xlink:href", (function(t) {
       return BeatmapDiscussionHelper.url({
        discussion: t
       })
      })).attr("class", (function(e) {
       var i, n;
       return n = e.resolved ? "resolved" : _.kebabCase(e.message_type), i = "js-beatmap-discussion--jump " + t + "__point " + t + "__point--" + n, null != e.deleted_at && (i += " " + t + "__point--deleted"), i
      })).attr("title", (function(t) {
       return BeatmapDiscussionHelper.formatTimestamp(t.timestamp)
      })).attr("data-tooltip-position", "bottom center").attr("data-tooltip-modifiers", "extra-padding"), this.svgPoints.select("." + t + "__icon > tspan").remove(), this.svgPoints.select("." + t + "__icon").append("tspan").attr("class", (function(t) {
       var e;
       return e = t.resolved ? "resolved" : _.camelCase(t.message_type), BeatmapDiscussionHelper.messageType.iconText[e][0]
      })).html((function(t) {
       var e;
       return e = t.resolved ? "resolved" : _.camelCase(t.message_type), BeatmapDiscussionHelper.messageType.iconText[e][1]
      })), this.resize()
     }, i.prototype.setDimensions = function() {
      var t;
      return t = this.area.node().getBoundingClientRect(), this.width = t.width - (this.margins.left + this.margins.right), this.height = t.height - (this.margins.top + this.margins.bottom)
     }, i.prototype.setScales = function() {
      return this.scaleX.range([0, this.width])
     }, i.prototype.setAxisSize = function() {
      return this.xAxis.scale(this.scaleX)
     }, i.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.width + (this.margins.left + this.margins.right)).attr("height", this.height + (this.margins.top + this.margins.bottom))
     }, i.prototype.setWrapperSize = function() {
      return this.svgWrapper.attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")")
     }, i.prototype.drawAreas = function() {
      var t;
      return t = this.width + (this.margins.left + this.margins.right), this.svgChartArea.attr("width", t), this.svgLabelArea.attr("width", t)
     }, i.prototype.drawXAxis = function() {
      return this.svgXAxis.attr("width", this.width + (this.margins.left + this.margins.right))
     }, i.prototype.positionPoints = function() {
      return this.svgPoints.attr("transform", (t = this, function(e) {
       return "translate(" + Math.round(t.scaleX(e.timestamp)) + ", 0)"
      }));
      var t
     }, i.prototype.resize = function() {
      return this.setDimensions(), this.setScales(), this.setSvgSize(), this.setWrapperSize(), this.setAxisSize(), this.drawXAxis(), this.drawAreas(), this.positionPoints()
     }, i
    }()
   }).call(window)
  },
  "0tzJ": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.BeatmapsetDownloadObserver = function() {
     function e() {
      this.showPopup = t(this.showPopup, this), this.createPopup = t(this.createPopup, this), this.loadAndShowPopup = t(this.loadAndShowPopup, this), this.quotaCheck = t(this.quotaCheck, this), $(document).on("click mouseup", ".js-beatmapset-download-link", this.quotaCheck)
     }
     return e.prototype.targetSelector = ".support-osu-popup", e.prototype.container = "#popup-container", e.prototype.wrapperClass = "empty-popup", e.prototype.quotaCheck = function(t) {
      var e;
      if (!("undefined" != typeof currentUser && null !== currentUser && currentUser.is_supporter || "mouseup" === t.type && 2 !== t.which)) return $.ajax(laroute.route("download-quota-check")).done((e = this, function(t) {
       var i;
       if (20 === (i = t.quota_used) || i > 0 && i % 50 == 0) return e.loadAndShowPopup
      }))
     }, e.prototype.loadAndShowPopup = function() {
      return 0 === $(this.targetSelector).length ? $.get(laroute.route("support-osu-popup"), (t = this, function(e) {
       return t.createPopup(e), t.showPopup()
      })) : this.showPopup();
      var t
     }, e.prototype.createPopup = function(t) {
      var e;
      if (void 0 !== t) return (e = $("." + this.wrapperClass + "--clone").clone()).removeClass(this.wrapperClass + "--clone"), e.find(".popup-content").html(t), e.find(".support-osu-popup__close-button").on("click", (function(t) {
       return t.preventDefault(), e.fadeOut(), Blackout.hide()
      })), e.appendTo($(this.container))
     }, e.prototype.showPopup = function() {
      var t;
      return "function" == typeof(t = document.activeElement).blur && t.blur(), Blackout.show(), $(this.targetSelector).parents("." + this.wrapperClass).fadeIn()
     }, e
    }()
   }).call(window)
  },
  "2uEk": function(t, e) {
   (function() {
    var t, e = function(t, e) {
      return function() {
       return t.apply(e, arguments)
      }
     },
     i = {}.hasOwnProperty;
    t = "line-chart", this.LineChart = function() {
     function n(n, s) {
      var r, o, a, u, l, c, h, d, p;
      for (c in this.options = null != s ? s : {}, this.resize = e(this.resize, this), this.onHover = e(this.onHover, this), this.lookupIndexFromX = e(this.lookupIndexFromX, this), this.hoverStart = e(this.hoverStart, this), this.hoverReset = e(this.hoverReset, this), this.hoverEnd = e(this.hoverEnd, this), this.drawLine = e(this.drawLine, this), this.drawAxes = e(this.drawAxes, this), this.setWrapperSize = e(this.setWrapperSize, this), this.setSvgSize = e(this.setSvgSize, this), this.setLineSize = e(this.setLineSize, this), this.setAxesSize = e(this.setAxesSize, this), this.setScalesRange = e(this.setScalesRange, this), this.setDimensions = e(this.setDimensions, this), this.loadData = e(this.loadData, this), this.margins = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 60
       }, _.assign(this.margins, this.options.margins), this.id = Math.floor(1e3 * Math.random()), null == (r = this.options).scales && (r.scales = {}), null == (o = this.options.scales).x && (o.x = d3.scaleTime()), null == (a = this.options.scales).y && (a.y = d3.scaleLinear()), null == (u = this.options).circleLine && (u.circleLine = !1), null == (l = this.options).axisLabels && (l.axisLabels = !0), this.area = d3.select(n).classed(osu.classWithModifiers(t, this.options.modifiers), !0), this.svg = this.area.append("svg"), this.svgWrapper = this.svg.append("g").classed(t + "__wrapper", !0), this.options.axisLabels && (this.svgXAxis = this.svgWrapper.append("g").classed(t + "__axis " + t + "__axis--x", !0), this.svgYAxis = this.svgWrapper.append("g").classed(t + "__axis " + t + "__axis--y", !0)), this.svgLine = this.svgWrapper.append("path").classed(t + "__line", !0), this.hoverArea = this.area.append("div").classed(t + "__hover-area", !0).on("mouseout", this.hoverEnd).on("mousemove", this.onHover).on("drag", this.onHover), h = this.margins) i.call(h, c) && (p = h[c], this.hoverArea.style(c, p + "px"));
      this.hover = this.hoverArea.append("div").classed(t + "__hover", !0).attr("data-visibility", "hidden"), this.options.circleLine && (this.hoverLine = this.hover.append("div").classed(t + "__hover-line", !0)), this.hoverCircle = this.hover.append("div").classed(t + "__hover-circle", !0), this.hoverInfoBox = this.hover.append("div").classed(t + "__hover-info-box", !0).attr("data-float", "left"), this.hoverInfoBoxX = this.hoverInfoBox.append("div").classed(t + "__hover-info-box-text " + t + "__hover-info-box-text--x", !0), this.hoverInfoBoxY = this.hoverInfoBox.append("div").classed(t + "__hover-info-box-text " + t + "__hover-info-box-text--y", !0), this.options.axisLabels && (this.xAxis = d3.axisBottom().tickSizeOuter(0).tickPadding(5), this.yAxis = d3.axisLeft().ticks(4)), this.line = d3.line().curve(null != (d = this.options.curve) ? d : d3.curveMonotoneX)
     }
     return n.prototype.loadData = function(t) {
      return this.data = t, this.svgLine.datum(t), this.resize()
     }, n.prototype.setDimensions = function() {
      var t;
      return (t = this.area.node().getBoundingClientRect()).width > 0 && t.height > 0 && (this.width = t.width - (this.margins.left + this.margins.right), this.height = t.height - (this.margins.top + this.margins.bottom), !0)
     }, n.prototype.setScalesRange = function() {
      var t, e;
      return this.options.scales.x.range([0, this.width]).domain((null != (t = this.options.domains) ? t.x : void 0) || d3.extent(this.data, (function(t) {
       return t.x
      }))), this.options.scales.y.range([this.height, 0]).domain((null != (e = this.options.domains) ? e.y : void 0) || d3.extent(this.data, (function(t) {
       return t.y
      })))
     }, n.prototype.setAxesSize = function() {
      var t, e, i, n;
      if (this.options.axisLabels) return this.xAxis.scale(this.options.scales.x).tickSizeInner(-this.height).ticks(null != (e = null != (i = this.options.ticks) ? i.x : void 0) ? e : 15).tickFormat(this.options.formats.x).tickValues(null != (t = this.options.tickValues) ? t.x : void 0), this.yAxis.scale(this.options.scales.y).tickSizeInner(-this.width).tickFormat(this.options.formats.y).tickValues(null != (n = this.options.tickValues) ? n.y : void 0)
     }, n.prototype.setLineSize = function() {
      return this.line.x((t = this, function(e) {
       return t.options.scales.x(e.x)
      })).y(function(t) {
       return function(e) {
        return t.options.scales.y(e.y)
       }
      }(this));
      var t
     }, n.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.width + (this.margins.left + this.margins.right)).attr("height", this.height + (this.margins.top + this.margins.bottom))
     }, n.prototype.setWrapperSize = function() {
      return this.svgWrapper.attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")")
     }, n.prototype.drawAxes = function() {
      if (this.options.axisLabels) return this.svgXAxis.transition().attr("transform", "translate(0, " + this.height + ")").call(this.xAxis), this.svgYAxis.transition().call(this.yAxis), this.svgXAxis.selectAll(".tick line").classed(t + "__tick-line " + t + "__tick-line--default", !0), this.svgYAxis.selectAll(".tick line").classed(t + "__tick-line " + t + "__tick-line--default", !0), this.svgXAxis.selectAll(".domain").classed("u-hidden", !0), this.svgYAxis.selectAll(".domain").classed("u-hidden", !0), this.svgXAxis.selectAll("text").style("text-anchor", "start").attr("transform", "rotate(45) translate(5, 0)").classed(t + "__tick-text " + t + "__tick-text--strong", !0), this.svgYAxis.selectAll("text").classed(t + "__tick-text", !0)
     }, n.prototype.drawLine = function() {
      return this.svgLine.transition().attr("d", this.line)
     }, n.prototype.hoverEnd = function() {
      return Fade.out(this.hover.node())
     }, n.prototype.hoverReset = function() {
      var t, e;
      return e = this, (t = function(t, i) {
       var n, s, r, o, a;
       for (a = [], s = 0, r = (o = [e.hoverLine, e.hoverCircle]).length; s < r; s++) n = o[s], a.push(n.style(t, i));
       return a
      })("transition", "none"), this.hoverEnd(), t("transform", null), Timeout.set(0, (function() {
       return t("transition", null)
      }))
     }, n.prototype.hoverStart = function() {
      return Fade.in(this.hover.node())
     }, n.prototype.lookupIndexFromX = function(t) {
      return d3.bisector((function(t) {
       return t.x
      })).left(this.data, t)
     }, n.prototype.onHover = function() {
      var t, e, i, n, s, r, o, a, u, l, c;
      if (l = this.options.scales.x.invert(d3.mouse(this.hoverArea.node())[0]), (i = this.lookupIndexFromX(l)) && this.data[i - 1] && this.data[i] && (this.hoverStart(), Timeout.clear(this._autoEndHover), osu.isMobile() && (this._autoEndHover = Timeout.set(3e3, this.hoverEnd)), e = l - this.data[i - 1].x <= this.data[i].x - l ? this.data[i - 1] : this.data[i], t = ["x", "y"].map((c = this, function(t) {
        return Math.round(c.options.scales[t](e[t])) + "px"
       })), this.hoverLine.style("transform", "translateX(" + t[0] + ")"), this.hoverCircle.style("transform", "translate(" + t.join(",") + ")"), this.hoverInfoBoxX.html((null != (r = null != (o = this.options.infoBoxFormats) ? o.x : void 0) ? r : this.options.formats.x)(e.x)), this.hoverInfoBoxY.html((null != (a = null != (u = this.options.infoBoxFormats) ? u.y : void 0) ? a : this.options.formats.y)(e.y)), null != (s = d3.event.clientX)))
       if (n = this.hoverInfoBox.node().getBoundingClientRect(), "right" === this.hoverInfoBox.attr("data-float")) {
        if (s > n.left) return this.hoverInfoBox.attr("data-float", "left")
       } else if (s < n.right) return this.hoverInfoBox.attr("data-float", "right")
     }, n.prototype.resize = function() {
      if (this.setDimensions()) return this.setScalesRange(), this.setSvgSize(), this.setWrapperSize(), this.setAxesSize(), this.setLineSize(), this.drawAxes(), this.drawLine(), this.hoverReset()
     }, n
    }()
   }).call(window)
  },
  "38ot": function(t, e) {
   (function() {
    var t;
    t = document.getElementsByClassName("js-fixed-element"), $(document).on("shown.bs.modal", ".modal", (function(t) {
     if (!osu.isIos) return $(t.target).find(".modal-af").focus()
    })), $(document).on("hidden.bs.modal", ".modal", (function() {
     return $(".modal-backdrop").remove(), $("body, .js-fixed-element").css({
      paddingRight: ""
     })
    })), $(document).on("show.bs.modal", ".modal", (function() {
     var e, i, n, s, r, o, a, u;
     for (Timeout.set(10, (function() {
       return $(".modal-backdrop").trigger("bsTransitionEnd")
      })), e = [], n = s = 0, o = t.length; s < o; n = ++s) i = t[n], e[n] = i.getBoundingClientRect(), e[n].skip = "fixed" !== getComputedStyle(i).position;
     for (u = [], n = r = 0, a = t.length; r < a; n = ++r) i = t[n], e[n].skip || (i.style.left = e[n].left + "px", u.push(i.style.width = e[n].width + "px"));
     return u
    })), $(document).on("shown.bs.modal", ".modal", (function() {
     var e, i, n, s, r, o, a, u, l;
     for (a = $("body").css("padding-right"), l = [], i = n = 0, r = t.length; n < r; i = ++n) e = t[i], l[i] = "fixed" !== getComputedStyle(e).position;
     for (u = [], i = s = 0, o = t.length; s < o; i = ++s) e = t[i], l[i] || (e.style.paddingRight = a, e.style.left = "", u.push(e.style.width = ""));
     return u
    }))
   }).call(window)
  },
  "3hzo": function(t, e, i) {
   "use strict";
   var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
      __proto__: []
     }
     instanceof Array && function(t, e) {
      t.__proto__ = e
     } || function(t, e) {
      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
     },
     function(t, e) {
      function i() {
       this.constructor = t
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
     }),
    r = this && this.__assign || Object.assign || function(t) {
     for (var e, i = 1, n = arguments.length; i < n; i++)
      for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
     return t
    },
    o = this && this.__rest || function(t, e) {
     var i = {};
     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
     if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var s = 0;
      for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && (i[n[s]] = t[n[s]])
     }
     return i
    };
   e.__esModule = !0;
   var a = i("cDcd"),
    u = i("rf6O"),
    l = i("K4RX"),
    c = i("EDjT"),
    h = function(t) {
     function e() {
      var e = null !== t && t.apply(this, arguments) || this;
      return e.state = {
       lineHeight: null
      }, e.textarea = e.props.innerRef || a.createRef(), e.onResize = function(t) {
       e.props.onResize && e.props.onResize(t)
      }, e.updateLineHeight = function() {
       e.textarea.current && e.setState({
        lineHeight: c(e.textarea.current)
       })
      }, e.onChange = function(t) {
       var i = e.props.onChange;
       e.currentValue = t.currentTarget.value, i && i(t)
      }, e
     }
     return s(e, t), e.prototype.componentDidMount = function() {
      var t = this,
       e = this.props,
       i = e.maxRows,
       n = e.async;
      "number" == typeof i && this.updateLineHeight(), "number" == typeof i || n ? setTimeout((function() {
       return t.textarea.current && l(t.textarea.current)
      })) : this.textarea.current && l(this.textarea.current), this.textarea.current && this.textarea.current.addEventListener("autosize:resized", this.onResize)
     }, e.prototype.componentWillUnmount = function() {
      this.textarea.current && (this.textarea.current.removeEventListener("autosize:resized", this.onResize), l.destroy(this.textarea.current))
     }, e.prototype.render = function() {
      var t = this.props,
       e = (t.onResize, t.maxRows),
       i = (t.onChange, t.style),
       n = (t.innerRef, t.children),
       s = o(t, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]),
       u = this.state.lineHeight,
       l = e && u ? u * e : null;
      return a.createElement("textarea", r({}, s, {
       onChange: this.onChange,
       style: l ? r({}, i, {
        maxHeight: l
       }) : i,
       ref: this.textarea
      }), n)
     }, e.prototype.componentDidUpdate = function() {
      this.textarea.current && l.update(this.textarea.current)
     }, e.defaultProps = {
      rows: 1,
      async: !1
     }, e.propTypes = {
      rows: u.number,
      maxRows: u.number,
      onResize: u.func,
      innerRef: u.object,
      async: u.bool
     }, e
    }(a.Component);
   e.TextareaAutosize = a.forwardRef((function(t, e) {
    return a.createElement(h, r({}, t, {
     innerRef: e
    }))
   }))
  },
  "5ASV": function(t, e) {
   (function() {
    this.StoreCart = function() {
     function t() {}
     return t.setEnabled = function(t) {
      return $(".js-store-add-to-cart").prop("disabled", !t), $("#product-form").data("disabled", !t)
     }, t
    }()
   }).call(window)
  },
  "5hXa": function(t, e) {
   (function() {
    $(document).on("keypress", ".js-auto-submit", (function(t) {
     if (13 === t.which) return t.preventDefault(), $(t.target).trigger("change")
    })), $(document).on("change", ".js-auto-submit", (function(t) {
     var e;
     if ((e = $(t.target)).val() !== e.data("last-submitted-value")) return e.data("last-submitted-value", e.val()), e.parents("form").submit()
    })), $(document).on("keypress", ".content-editable-submit", (function(t) {
     if (13 === t.which) return t.preventDefault(), $(t.target).trigger("blur")
    })), $(document).on("blur", ".content-editable-submit", (function(t) {
     var e, i, n;
     if ((i = $(t.target)).html() !== i.data("last-submitted-value")) return i.data("last-submitted-value", i.html()), e = i.parents("form"), (n = $(document.createElement("input"))).attr("type", "hidden"), n.attr("name", i.attr("data-name")), n.attr("value", i.html()), e.append(n), e.submit(), n.remove()
    })), $(document).on("turbolinks:load", (function() {
     return $(".content-editable-submit").each((function(t, e) {
      var i;
      return (i = $(e)).data("last-submitted-value", i.html())
     }))
    })), $(document).on("click", "#popup-container, #overlay", (function(t) {
     var e;
     return $("#overlay").fadeOut(), (e = $(t.target).closest(".popup-active")).fadeOut(null, e.remove)
    })), $(document).on("turbolinks:load", (function() {
     return $("[value=_disabled]").attr("disabled", !0)
    })), $(document).on("click", ".clickable-row", (function(t) {
     var e, i, n;
     if (n = t.target, !osu.isClickable(n)) return (i = t.currentTarget).classList.contains("clickable-row-link") ? i.click() : null != (e = i.getElementsByClassName("clickable-row-link")[0]) ? e.click() : void 0
    })), $(document).on("keydown", ".js-quick-submit", (function(t) {
     if ((t.ctrlKey || t.metaKey) && 13 === t.keyCode) return t.preventDefault(), $(t.target).closest("form").submit()
    })), $(document).on("ajax:beforeSend", (function(t) {
     var e, i, n, s, r, o;
     if ((i = t.target)._submitting) return !1;
     for (i._submitting = !0, i._ujsSubmitDisabled = [], o = [], n = 0, s = (r = i.querySelectorAll(".js-ujs-submit-disable")).length; n < s; n++)(e = r[n]).disabled || ("1" === e.dataset.blurOnSubmitDisable && e.blur(), e.disabled = !0, o.push(i._ujsSubmitDisabled.push(e)));
     return o
    })), $(document).on("ajax:complete", (function(t) {
     var e, i, n;
     for ((i = t.target)._submitting = !1, n = []; e = i._ujsSubmitDisabled.pop();) n.push(e.disabled = !1);
     return n
    }))
   }).call(window)
  },
  "679Q": function(t, e, i) {
   (function(t, e) {
    ! function(t, i) {
     "use strict";
     if (!t.setImmediate) {
      var n, s, r, o, a, u = 1,
       l = {},
       c = !1,
       h = t.document,
       d = Object.getPrototypeOf && Object.getPrototypeOf(t);
      d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? n = function(t) {
       e.nextTick((function() {
        f(t)
       }))
      } : function() {
       if (t.postMessage && !t.importScripts) {
        var e = !0,
         i = t.onmessage;
        return t.onmessage = function() {
         e = !1
        }, t.postMessage("", "*"), t.onmessage = i, e
       }
      }() ? (o = "setImmediate$" + Math.random() + "$", a = function(e) {
       e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(o) && f(+e.data.slice(o.length))
      }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), n = function(e) {
       t.postMessage(o + e, "*")
      }) : t.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function(t) {
       f(t.data)
      }, n = function(t) {
       r.port2.postMessage(t)
      }) : h && "onreadystatechange" in h.createElement("script") ? (s = h.documentElement, n = function(t) {
       var e = h.createElement("script");
       e.onreadystatechange = function() {
        f(t), e.onreadystatechange = null, s.removeChild(e), e = null
       }, s.appendChild(e)
      }) : n = function(t) {
       setTimeout(f, 0, t)
      }, d.setImmediate = function(t) {
       "function" != typeof t && (t = new Function("" + t));
       for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
       var s = {
        callback: t,
        args: e
       };
       return l[u] = s, n(u), u++
      }, d.clearImmediate = p
     }

     function p(t) {
      delete l[t]
     }

     function f(t) {
      if (c) setTimeout(f, 0, t);
      else {
       var e = l[t];
       if (e) {
        c = !0;
        try {
         ! function(t) {
          var e = t.callback,
           n = t.args;
          switch (n.length) {
           case 0:
            e();
            break;
           case 1:
            e(n[0]);
            break;
           case 2:
            e(n[0], n[1]);
            break;
           case 3:
            e(n[0], n[1], n[2]);
            break;
           default:
            e.apply(i, n)
          }
         }(e)
        } finally {
         p(t), c = !1
        }
       }
      }
     }
    }("undefined" == typeof self ? void 0 === t ? this : t : self)
   }).call(this, i("btiA"), i("2YuA"))
  },
  "6FbF": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.CheckboxValidation = function() {
     function e() {
      this.validate = t(this.validate, this), $(document).on("change", ".js-checkbox-validation", this.validate)
     }
     return e.prototype.validate = function(t) {
      var e, i, n, s, r, o, a, u;
      if (null == (e = t.currentTarget)._checkboxValidationCache && (e._checkboxValidationCache = JSON.parse(t.currentTarget.dataset.checkboxValidation)), a = t.target.name, null != (s = t.currentTarget._checkboxValidationCache[a])) {
       for (i = t.currentTarget.querySelectorAll("[name='" + a + "']"), u = t.currentTarget.getElementsByClassName("js-checkbox-validation--submit")[0], n = 0, r = 0, o = i.length; r < o; r++) i[r].checked && (n += 1);
       return u.disabled = n < s.min || n > s.max
      }
     }, e
    }()
   }).call(window)
  },
  "6Laf": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.OsuLayzr = function() {
     function e() {
      this.reinit = t(this.reinit, this), this.init = t(this.init, this), this.observer = new MutationObserver(this.reinit), $(document).on("turbolinks:load", this.init)
     }
     return e.prototype.init = function() {
      return null == this.layzr && (this.layzr = Layzr()), this.reinit(), this.observer.observe(document.body, {
       childList: !0,
       subtree: !0
      })
     }, e.prototype.reinit = function() {
      return this.layzr.update().check().handlers(!0)
     }, e
    }()
   }).call(window)
  },
  "6TQG": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumTopicReply = function() {
     function e(e) {
      this.forum = e.forum, this.forumPostPreview = e.forumPostPreview, this.stickyFooter = e.stickyFooter, this.toggleStick = t(this.toggleStick, this), this.toggleDeactivate = t(this.toggleDeactivate, this), this.toggle = t(this.toggle, this), this.stickOrUnstick = t(this.stickOrUnstick, this), this.posted = t(this.posted, this), this.inputChange = t(this.inputChange, this), this.enableFlash = t(this.enableFlash, this), this.deactivate = t(this.deactivate, this), this.activateWithReply = t(this.activateWithReply, this), this.activate = t(this.activate, this), this.setState = t(this.setState, this), this.getState = t(this.getState, this), this.deleteState = t(this.deleteState, this), this.available = t(this.available, this), this.initialize = t(this.initialize, this), this.container = document.getElementsByClassName("js-forum-topic-reply--container"), this.box = document.getElementsByClassName("js-forum-topic-reply"), this.block = document.getElementsByClassName("js-forum-topic-reply--block"), this.input = document.getElementsByClassName("js-forum-topic-reply--input"), this.toggleButtons = document.getElementsByClassName("js-forum-topic-reply--toggle"), this.fixedBar = document.getElementsByClassName("js-sticky-footer--fixed-bar"), $(document).on("ajax:success", ".js-forum-topic-reply", this.posted), $(document).on("click", ".js-forum-topic-reply--deactivate", this.toggleDeactivate), $(document).on("click", ".js-forum-topic-reply--toggle", this.toggle), $(document).on("ajax:success", ".js-forum-topic-reply--quote", this.activateWithReply), $(document).on("focus", ".js-forum-topic-reply--input", this.activate), $(document).on("input change", ".js-forum-topic-reply--input", _.debounce(this.inputChange, 500)), $.subscribe("stickyFooter", this.stickOrUnstick), $(document).on("turbolinks:load", this.initialize)
     }
     return e.prototype.marker = function() {
      return document.querySelector('.js-sticky-footer[data-sticky-footer-target="forum-topic-reply"]')
     }, e.prototype.$input = function() {
      return $(".js-forum-topic-reply--input")
     }, e.prototype.initialize = function() {
      if (this.available()) return this.deleteState("sticking"), this.input[0].value = this.getState("text") || "", "1" === this.getState("active") ? this.activate() : void 0
     }, e.prototype.available = function() {
      return this.block.length
     }, e.prototype.deleteState = function(t) {
      return localStorage.removeItem("forum-topic-reply--" + document.location.pathname + "--" + t)
     }, e.prototype.getState = function(t) {
      return localStorage.getItem("forum-topic-reply--" + document.location.pathname + "--" + t)
     }, e.prototype.setState = function(t, e) {
      return localStorage.setItem("forum-topic-reply--" + document.location.pathname + "--" + t, e)
     }, e.prototype.activate = function() {
      var t, e, i, n;
      for (this.setState("active", "1"), this.stickyFooter.markerEnable(this.marker()), $.publish("stickyFooter:check"), t = 0, e = (i = this.toggleButtons).length; t < e; t++) i[t].classList.add("js-activated");
      return "1" !== this.getState("sticking") && null != currentUser.id && this.enableFlash(), Timeout.set(0, (n = this, function() {
       return n.input[0].focus()
      }))
     }, e.prototype.activateWithReply = function(t, e) {
      var i, n;
      return e += "\n", (n = (i = this.$input()).val()) && (e = n + "\n\n" + e), i.val(e), this.inputChange(), i[0].selectionStart = e.length, this.activate()
     }, e.prototype.deactivate = function() {
      var t, e, i, n, s;
      for (this.stickyFooter.markerDisable(this.marker()), this.setState("active", "0"), $.publish("stickyFooter:check"), this.disableFlash(), s = [], e = 0, i = (n = this.toggleButtons).length; e < i; e++) t = n[e], s.push(t.classList.remove("js-activated"));
      return s
     }, e.prototype.disableFlash = function() {
      return $(".js-forum-topic-reply").removeClass("js-forum-topic-reply-flash")
     }, e.prototype.enableFlash = function() {
      return $(".js-forum-topic-reply").addClass("js-forum-topic-reply-flash"), Timeout.set(500, this.disableFlash)
     }, e.prototype.inputChange = function() {
      return this.setState("text", this.input[0].value)
     }, e.prototype.posted = function(t, e) {
      var i, n;
      return n = this.input[0], this.deactivate(), n.value = "", this.setState("text", ""), this.forumPostPreview.hidePreview({
       target: n
      }), i = $(e), this.forum.postPosition(i[0]) - 1 !== this.forum.postPosition(this.forum.endPost()) || "1" === t.target.dataset.forceReload ? osu.navigate(i.find(".js-post-url").attr("href")) : (this.forum.setTotalPosts(this.forum.totalPosts() + 1), this.forum.endPost().insertAdjacentHTML("afterend", e), osu.pageChange(), this.forum.endPost().scrollIntoView())
     }, e.prototype.stickOrUnstick = function(t, e) {
      var i;
      return i = osu.isDesktop() ? "forum-topic-reply" === e : "1" === this.getState("active"), this.toggleStick(i)
     }, e.prototype.toggle = function() {
      return "1" === this.getState("active") ? this.deactivate() : this.activate()
     }, e.prototype.toggleDeactivate = function(t) {
      return t.stopPropagation(), this.deactivate()
     }, e.prototype.toggleStick = function(t) {
      var e, i, n, s, r;
      if (s = "1" === this.getState("sticking"), document.body.style.overflow = !t || osu.isDesktop() ? "" : "hidden", t !== s) return i = this.box[0], t ? (this.setState("sticking", "1"), i.dataset.state = "stick", r = this.fixedBar[0]) : (this.deleteState("sticking"), null != i.dataset.state && delete i.dataset.state, r = this.container[0]), n = (e = this.$input()).is(":focus"), r.insertBefore(i, r.firstChild), n && e.focus(), osu.pageChange()
     }, e
    }()
   }).call(window)
  },
  "6Z8S": function(t, e) {
   (function() {
    var t;
    t = $({}), $.subscribe = t.on.bind(t), $.unsubscribe = t.off.bind(t), $.publish = t.trigger.bind(t)
   }).call(window)
  },
  "7mzp": function(t, e) {
   (function() {
    this.Timeago = function() {
     var t;
     this.observer = new MutationObserver((function(t) {
      if ($.fn.timeago) return t.forEach((function(t) {
       var e;
       return (e = $(t.addedNodes)).find(".timeago").add(e.filter(".timeago")).timeago()
      }))
     })), $(document).on("turbolinks:load", (t = this, function() {
      return $(".timeago").timeago(), t.observer.observe(document.body, {
       childList: !0,
       subtree: !0
      })
     }))
    }
   }).call(window)
  },
  "8DVv": function(t, e) {
   (function() {
    $(document).on("ajax:before", (function() {
     return LoadingOverlay.show(), $(document).one("ajax:complete.ujsHideLoadingOverlay", LoadingOverlay.hide)
    })), $(document).on("ajax:success", (function(t, e) {
     var i, n;
     return n = function() {
      if (!_.isEmpty(null != e ? e.message : void 0)) return osu.popup(e.message, "success")
     }, "1" === t.target.getAttribute("data-reload-on-success") ? (i = "1" === t.target.getAttribute("data-reload-reset-scroll"), $(document).one("turbolinks:load", n), osu.reloadPage(!i)) : n()
    })), $(document).on("ajax:error", (function(t, e) {
     if ("1" !== t.target.dataset.skipAjaxErrorPopup && 401 !== e.status) return osu.ajaxError(e)
    }))
   }).call(window)
  },
  "9put": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.TooltipDefault = function() {
     function e() {
      this.timeagoTip = t(this.timeagoTip, this), this.rollback = t(this.rollback, this), this.autoAddTooltip = t(this.autoAddTooltip, this), this.onMouseOver = t(this.onMouseOver, this), $(document).on("mouseover touchstart", "[title]:not(iframe)", this.onMouseOver), $(document).on("mouseenter touchstart", ".u-ellipsis-overflow, .u-ellipsis-overflow-desktop", this.autoAddTooltip), $(document).on("turbolinks:before-cache", this.rollback)
     }
     return e.prototype.onMouseOver = function(t) {
      var e, i, n, s, r, o, a, u;
      if (u = (s = t.currentTarget).getAttribute("title"), s.removeAttribute("title"), 0 !== _.size(u)) {
       if (e = s.classList.contains("timeago") || s.classList.contains("js-tooltip-time") ? this.timeagoTip(s, u) : $("<span>").text(u), !s._tooltip) return s._tooltip = !0, i = null != (a = s.dataset.tooltipPosition) ? a : "top center", r = function() {
        switch (i) {
         case "top center":
          return "bottom center";
         case "left center":
          return "right center";
         case "right center":
          return "left center";
         case "bottom center":
          return "top center"
        }
       }(), n = "qtip tooltip-default", "fixed" === s.dataset.tooltipFloat && (n += " tooltip-default--fixed"), null != s.dataset.tooltipModifiers && (n += " tooltip-default--" + s.dataset.tooltipModifiers), o = {
        overwrite: !1,
        content: e,
        position: {
         my: r,
         at: i,
         viewport: $(window)
        },
        show: {
         event: t.type,
         ready: !0
        },
        hide: {
         event: "click mouseleave"
        },
        style: {
         classes: n,
         tip: {
          width: 10,
          height: 8
         }
        }
       }, "touchstart" === t.type && (o.hide = {
        inactive: 3e3
       }), s.dataset.tooltipPinPosition && (o.position.effect = !1), s.dataset.tooltipHideEvents && (o.hide.event = s.dataset.tooltipHideEvents), s.dataset.origTitle = u, $(s).qtip(o, t);
       $(s).qtip("set", {
        "content.text": e
       })
      }
     }, e.prototype.autoAddTooltip = function(t) {
      var e, i, n;
      return n = t.currentTarget, i = (e = $(n)).qtip("api"), n.offsetWidth < n.scrollWidth ? i ? i.enable() : (e.attr("title", e.text()), e.trigger("mouseover")) : null != i ? i.disable() : void 0
     }, e.prototype.remove = function(t) {
      if (t._tooltip) return $(t).qtip("destroy", !0), t._tooltip = !1, null == t.getAttribute("title") && t.setAttribute("title", t.dataset.origTitle), delete t.dataset.origTitle
     }, e.prototype.rollback = function() {
      var t, e, i, n, s;
      for ($(".qtip").remove(), s = [], e = 0, i = (n = document.querySelectorAll("[data-orig-title]")).length; e < i; e++) t = n[e], s.push(t.setAttribute("title", t.dataset.origTitle));
      return s
     }, e.prototype.timeagoTip = function(t, e) {
      var i, n, s, r, o, a;
      return a = null != (s = null != (r = t.getAttribute("datetime")) ? r : e) ? s : t.textContent, o = moment(a), i = $("<strong>").text(o.format("LL")), n = $("<span>").addClass("tooltip-default__time").text(o.format("LTS") + " " + this.tzString(o)), $("<span>").append(i).append(" ").append(n)
     }, e.prototype.tzString = function(t) {
      var e;
      return "UTC" + ((e = t.utcOffset()) % 60 == 0 ? (e >= 0 ? "+" : "") + e / 60 : t.format("Z"))
     }, e
    }()
   }).call(window)
  },
  BzC5: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Gallery = function() {
     function e() {
      this.switchPreview = t(this.switchPreview, this), this.thumbBoundsFn = t(this.thumbBoundsFn, this), this.open = t(this.open, this), this.initiateOpen = t(this.initiateOpen, this), this.container = document.getElementsByClassName("pswp"), $(document).on("click", ".js-gallery", this.initiateOpen), $(document).on("click", ".js-gallery-thumbnail", this.switchPreview), $(document).on("turbolinks:before-cache", (function() {
       return $(".js-gallery--container").remove()
      }))
     }
     return e.prototype.initiateOpen = function(t) {
      var e, i, n;
      if (!(e = $(t.currentTarget)).parents("a").length) return t.preventDefault(), n = parseInt(e.attr("data-index"), 10), i = e.attr("data-gallery-id"), this.open({
       galleryId: i,
       index: n
      })
     }, e.prototype.open = function(t) {
      var e, i, n, s;
      return i = t.galleryId, n = t.index, (e = this.container[0].cloneNode(!0)).classList.add("js-gallery--container"), document.body.appendChild(e), s = new PhotoSwipe(e, PhotoSwipeUI_Default, this.data(i), {
       showHideOpacity: !0,
       getThumbBoundsFn: this.thumbBoundsFn(i),
       index: n,
       history: !1,
       timeToIdle: null
      }), _.startsWith(i, "contest-") && new _exported.GalleryContest(e, s), s.init(), $(document).one("gallery:close", (function() {
       try {
        return s.close()
       } catch (t) {}
      }))
     }, e.prototype.data = function(t) {
      var e, i, n, s, r, o, a;
      for (o = [], i = 0, n = (s = document.querySelectorAll(".js-gallery[data-gallery-id='" + t + "']")).length; i < n; i++) a = null != (r = (e = s[i]).getAttribute("data-src")) ? r : e.getAttribute("href"), o.push({
       element: e,
       msrc: a,
       src: a,
       w: parseInt(e.getAttribute("data-width"), 10),
       h: parseInt(e.getAttribute("data-height"), 10)
      });
      return o
     }, e.prototype.thumbBoundsFn = function(t) {
      return function(e) {
       var i, n, s, r, o, a, u;
       return u = (i = $(".js-gallery[data-gallery-id='" + t + "'][data-index='" + e + "']")).offset(), a = [i.width(), i.height()], n = [u.left + a[0] / 2, u.top + a[1] / 2], s = [parseInt(i.attr("data-width"), 10), parseInt(i.attr("data-height"), 10)], r = Math.max(a[0] / s[0], a[1] / s[1]), o = s.map((function(t) {
        return t * r
       })), {
        x: n[0] - o[0] / 2,
        y: n[1] - o[1] / 2,
        w: o[0]
       }
      }
     }, e.prototype.switchPreview = function(t) {
      var e, i, n, s, r, o, a, u, l, c;
      for (t.preventDefault(), n = (u = $(t.currentTarget)[0].dataset).galleryId, s = u.index, i = $(".js-gallery[data-gallery-id='" + n + "']"), e = $(".js-gallery-thumbnail[data-gallery-id='" + n + "']"), c = [], r = 0, o = (l = _.zip(e, i)).length; r < o; r++) s === (a = l[r])[0].dataset.index ? (a[0].classList.add("js-gallery-thumbnail--active"), c.push(Fade.in(a[1]))) : (a[0].classList.remove("js-gallery-thumbnail--active"), c.push(Fade.out(a[1])));
      return c
     }, e
    }()
   }).call(window)
  },
  CFbt: function(t, e) {
   (function() {
    var t;
    t = function(t, e, i) {
     var n, s, r, o, a, u;
     return null == i && (i = ""), r = (n = $(t.target).parents("form").find("[name=body], .js-bbcode-body")).val(), a = (s = n[0]).selectionStart, o = s.selectionEnd, (u = [r.substring(0, a), r.substring(a, o), r.substring(o)])[0] = u[0] + e, u[2] = i + u[2], a === o ? (n.val(u[0] + u[2]), s.selectionStart = u[0].length, s.selectionEnd = s.selectionStart) : (n.val(u[0] + u[1] + u[2]), s.selectionStart = a, s.selectionEnd = u[0].length + u[1].length + i.length), n.trigger("bbcode:inserted").trigger("input").focus()
    }, [
     ["bold", "[b]", "[/b]"],
     ["heading", "[heading]", "[/heading]"],
     ["image", "[img]", "[/img]"],
     ["italic", "[i]", "[/i]"],
     ["link", "[url]", "[/url]"],
     ["list", "[list]\n[*]", "[/list]"],
     ["list-numbered", "[list=1]\n[*]", "[/list]"],
     ["strikethrough", "[s]", "[/s]"],
     ["underline", "[u]", "[/u]"],
     ["spoilerbox", "[box=]", "[/box]"]
    ].forEach((function(e) {
     var i, n, s;
     return i = e[0], s = e[1], n = e[2], $(document).on("click", ".js-bbcode-btn--" + i, (function(e) {
      return t(e, s, n)
     }))
    })), $(document).on("turbolinks:load", (function() {
     return $(".js-bbcode-btn--size").val("")
    })), $(document).on("change", ".js-bbcode-btn--size", (function(e) {
     var i, n;
     return i = $(e.target), n = parseInt(i.val(), 10), i.val(""), t(e, "[size=" + n + "]", "[/size]")
    }))
   }).call(window)
  },
  Dzhp: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.UserLogin = function() {
     function e() {
      this.showToContinue = t(this.showToContinue, this), this.showOnLoad = t(this.showOnLoad, this), this.showOnError = t(this.showOnError, this), this.showOnClick = t(this.showOnClick, this), this.show = t(this.show, this), this.reset = t(this.reset, this), this.refreshToken = t(this.refreshToken, this), this.loginSuccess = t(this.loginSuccess, this), this.loginError = t(this.loginError, this), this.clickAfterLogin = null, $(document).on("ajax:success", ".js-login-form", this.loginSuccess), $(document).on("ajax:error", ".js-login-form", this.loginError), $(document).on("submit", ".js-login-form", this.clearError), $(document).on("input", ".js-login-form-input", this.clearError), $(document).on("click", ".js-user-link", this.showOnClick), $(document).on("click", ".js-login-required--click", this.showToContinue), $(document).on("ajax:before", ".js-login-required--click", (function() {
       return null != currentUser.id
      })), $(document).on("ajax:error", this.showOnError), $(document).on("turbolinks:load", this.showOnLoad), $.subscribe("nav:popup:hidden", this.reset)
     }
     return e.prototype.clearError = function(t) {
      return $(".js-login-form--error").text("")
     }, e.prototype.loginError = function(t, e) {
      return t.preventDefault(), t.stopPropagation(), $(".js-login-form--error").text(osu.xhrErrorMessage(e))
     }, e.prototype.loginSuccess = function(t, e) {
      var i;
      return i = this.clickAfterLogin, this.clickAfterLogin = null, this.refreshToken(), $.publish("user:update", e.user), Timeout.set(0, (function() {
       var t;
       return null != (t = $(".js-user-login--menu")[0]) && t.click(), $(".js-user-header").replaceWith(e.header), $(".js-user-header-popup").html(e.header_popup), osu.executeAction(i)
      }))
     }, e.prototype.refreshToken = function() {
      var t;
      return t = Cookies.get("XSRF-TOKEN"), $('[name="_token"]').attr("value", t), $('[name="csrf-token"]').attr("content", t)
     }, e.prototype.reset = function() {
      return this.clickAfterLogin = null
     }, e.prototype.show = function(t) {
      return this.clickAfterLogin = t, Timeout.set(0, (function() {
       return $(document).trigger("gallery:close"), $(".js-user-login--menu")[0].click()
      }))
     }, e.prototype.showOnClick = function(t) {
      return t.preventDefault(), this.show()
     }, e.prototype.showOnError = function(t, e) {
      var i;
      return 401 === e.status && "basic" === (null != (i = e.responseJSON) ? i.authentication : void 0) && (null != currentUser.id ? osu.reloadPage() : this.show(t.target), !0)
     }, e.prototype.showOnLoad = function() {
      if (null != window.showLoginModal) return window.showLoginModal = null, this.show()
     }, e.prototype.showToContinue = function(t) {
      var e;
      if (null == currentUser.id) return t.preventDefault(), Timeout.set(0, (e = this, function() {
       return e.show(t.target)
      }))
     }, e
    }()
   }).call(window)
  },
  "E+Th": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.FancyChart = function() {
     function e(e, i) {
      var n, s, r, o;
      this.options = null != i ? i : {}, this.lookupIndexFromX = t(this.lookupIndexFromX, this), this.hoverRefresh = t(this.hoverRefresh, this), this.hoverEnd = t(this.hoverEnd, this), this.resize = t(this.resize, this), this.recalc = t(this.recalc, this), this.reveal = t(this.reveal, this), this.drawLine = t(this.drawLine, this), this.setWrapperSize = t(this.setWrapperSize, this), this.setSvgSize = t(this.setSvgSize, this), this.setLineSize = t(this.setLineSize, this), this.setScalesRange = t(this.setScalesRange, this), this.setHoverAreaSize = t(this.setHoverAreaSize, this), this.setDimensions = t(this.setDimensions, this), this.loadData = t(this.loadData, this), this.hide = t(this.hide, this), null == (n = this.options).scales && (n.scales = {}), null == (s = this.options.scales).x && (s.x = d3.scaleLinear()), null == (r = this.options.scales).y && (r.y = d3.scaleLinear()), this.margins = {
       top: 25,
       right: 20,
       bottom: 10,
       left: 0
      }, this.area = d3.select(e), this.area.selectAll(".fancy-graph").remove(), this.svg = this.area.append("svg").classed("fancy-graph", !0), this.svgWrapper = this.svg.append("g"), this.svgLine = this.svgWrapper.append("path").classed("fancy-graph__line", !0).attr("opacity", 0), this.line = d3.line().curve(d3.curveMonotoneX), this.svgEndCircle = this.svgWrapper.append("circle").classed("fancy-graph__circle", !0).attr("r", 2).attr("opacity", 0), this.svgHoverArea = this.svg.append("rect").classed("fancy-graph__hover-area", !0).on("mouseout", this.hoverEnd).on("mousemove", this.hoverRefresh).on("drag", this.hoverRefresh), this.svgHoverMark = this.svgWrapper.append("circle").classed("fancy-graph__circle", !0).attr("data-visibility", "hidden").attr("r", 2), o = osu.parseJson(e.dataset.src), this.loadData(o)
     }
     return e.prototype.hide = function() {
      return this.svgEndCircle.attr("opacity", 0), this.svgLine.attr("opacity", 0)
     }, e.prototype.loadData = function(t) {
      if (!_.isEqual(t, this.data)) return this.data = null != t ? t : [], this.svgLine.datum(this.data), this.reveal()
     }, e.prototype.setDimensions = function() {
      var t;
      return t = this.area.node().getBoundingClientRect(), this.width = t.width - (this.margins.left + this.margins.right), this.height = t.height - (this.margins.top + this.margins.bottom)
     }, e.prototype.setHoverAreaSize = function() {
      return this.svgHoverArea.attr("width", this.width + (this.margins.left + this.margins.right)).attr("height", this.height + (this.margins.top + this.margins.bottom))
     }, e.prototype.setScalesRange = function() {
      var t, e, i, n;
      return this.options.scales.x.range([0, this.width]).domain(null != (t = null != (e = this.options.domains) ? e.x : void 0) ? t : d3.extent(this.data, (function(t) {
       return t.x
      }))), this.options.scales.y.range([this.height, 0]).domain(null != (i = null != (n = this.options.domains) ? n.y : void 0) ? i : d3.extent(this.data, (function(t) {
       return t.y
      })))
     }, e.prototype.setLineSize = function() {
      var t, e;
      if (this.line.x((e = this, function(t) {
        return e.options.scales.x(t.x)
       })).y(function(t) {
        return function(e) {
         return t.options.scales.y(e.y)
        }
       }(this)), null != (t = _.last(this.data))) return this.svgEndCircle.attr("transform", "translate(" + this.options.scales.x(t.x) + ", " + this.options.scales.y(t.y) + ")")
     }, e.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.width + (this.margins.left + this.margins.right)).attr("height", this.height + (this.margins.top + this.margins.bottom))
     }, e.prototype.setWrapperSize = function() {
      return this.svgWrapper.attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")")
     }, e.prototype.drawLine = function() {
      return this.svgLine.attr("stroke-dasharray", 0).attr("d", this.line)
     }, e.prototype.reveal = function() {
      var t;
      return null == this.data[0] ? this.hide() : (this.recalc(), this.svgLine.attr("d", this.line), t = this.svgLine.node().getTotalLength(), this.svgEndCircle.attr("opacity", 0), this.svgLine.attr("stroke-dasharray", t).attr("stroke-dashoffset", t).transition().delay(400).duration(1e3).ease(d3.easeSinOut).attr("stroke-dashoffset", 0).attr("opacity", 1), this.svgEndCircle.transition().delay(1300).duration(300).ease(d3.easeSinOut).attr("opacity", 1))
     }, e.prototype.recalc = function() {
      return this.setDimensions(), this.setScalesRange(), this.setSvgSize(), this.setWrapperSize(), this.setLineSize(), this.setHoverAreaSize()
     }, e.prototype.resize = function() {
      return this.recalc(), this.drawLine()
     }, e.prototype.hoverEnd = function() {
      return Fade.out(this.svgHoverMark.node()), $.publish("fancy-chart:hover-" + this.options.hoverId + ":end")
     }, e.prototype.hoverRefresh = function() {
      var t, e, i, n, s;
      if (null != this.options.hoverId && null != this.data[0] && (n = this.options.scales.x.invert(d3.mouse(this.svgHoverArea.node())[0] - this.margins.left), null != (i = this.lookupIndexFromX(n)))) return Fade.in(this.svgHoverMark.node()), Timeout.clear(this._hoverTimeout), this._hoverTimeout = Timeout.set(3e3, this.hoverEnd), e = 0 === i ? this.data[0] : i >= this.data.length ? _.last(this.data) : n - this.data[i - 1].x <= this.data[i].x - n ? this.data[i - 1] : this.data[i], t = ["x", "y"].map((s = this, function(t) {
       return s.options.scales[t](e[t])
      })), this.svgHoverMark.attr("transform", "translate(" + t.join(", ") + ")"), $.publish("fancy-chart:hover-" + this.options.hoverId + ":refresh", {
       data: e
      })
     }, e.prototype.lookupIndexFromX = function(t) {
      return d3.bisector((function(t) {
       return t.x
      })).left(this.data, t)
     }, e
    }()
   }).call(window)
  },
  "E/7X": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Forum = function() {
     function e() {
      this.jumpToSubmit = t(this.jumpToSubmit, this), this.showMore = t(this.showMore, this), this.postUrlClick = t(this.postUrlClick, this), this.initialScrollTo = t(this.initialScrollTo, this), this.toggleDeleted = t(this.toggleDeleted, this), this.scrollTo = t(this.scrollTo, this), this.keyboardNavigation = t(this.keyboardNavigation, this), this.jumpTo = t(this.jumpTo, this), this.refreshCounter = t(this.refreshCounter, this), this.refreshLoadMoreLinks = t(this.refreshLoadMoreLinks, this), this.lastPostLoaded = t(this.lastPostLoaded, this), this.firstPostLoaded = t(this.firstPostLoaded, this), this.endPost = t(this.endPost, this), this.setCounter = t(this.setCounter, this), this.setTotalPosts = t(this.setTotalPosts, this), this.showDeleted = t(this.showDeleted, this), this.totalPosts = t(this.totalPosts, this), this.postPosition = t(this.postPosition, this), this.boot = t(this.boot, this), this._totalPostsDiv = document.getElementsByClassName("js-forum__total-count"), this._deletedPostsDiv = document.getElementsByClassName("js-forum__deleted-count"), this._firstPostDiv = document.getElementsByClassName("js-forum__topic-first-post-id"), this._userCanModerateDiv = document.getElementsByClassName("js-forum__topic-user-can-moderate"), this._postsCounter = document.getElementsByClassName("js-forum__posts-counter"), this._postsProgress = document.getElementsByClassName("js-forum__posts-progress"), this.posts = document.getElementsByClassName("js-forum-post"), this.loadMoreLinks = document.getElementsByClassName("js-forum-posts-show-more"), this.maxPosts = 250, $(document).on("turbolinks:load osu:page:change", this.boot), $(window).on("throttled-scroll", this.refreshCounter), $(document).on("click", ".js-forum-posts-show-more", this.showMore), $(document).on("click", ".js-post-url", this.postUrlClick), $(document).on("submit", ".js-forum-posts-jump-to", this.jumpToSubmit), $(document).on("keyup", this.keyboardNavigation), $(document).on("click", ".js-forum-topic-moderate--toggle-deleted", this.toggleDeleted)
     }
     return e.prototype.boot = function() {
      return this.refreshCounter(), this.refreshLoadMoreLinks(), this.initialScrollTo()
     }, e.prototype.userCanModerate = function() {
      return "1" === this._userCanModerateDiv[0].getAttribute("data-user-can-moderate")
     }, e.prototype.postPosition = function(t) {
      return parseInt(t.getAttribute("data-post-position"), 10)
     }, e.prototype.firstPostId = function() {
      return parseInt(this._firstPostDiv[0].getAttribute("data-first-post-id"), 10)
     }, e.prototype.postId = function(t) {
      return parseInt(t.getAttribute("data-post-id"), 10)
     }, e.prototype.totalPosts = function() {
      return 0 === this._totalPostsDiv.length ? null : parseInt(this._totalPostsDiv[0].dataset.total, 10)
     }, e.prototype.showDeleted = function() {
      var t;
      if (null != (t = document.querySelector(".js-forum-topic-moderate--toggle-deleted"))) return "1" === t.dataset.showDeleted
     }, e.prototype.setTotalPosts = function(t) {
      return $(this._totalPostsDiv).text(osu.formatNumber(t)).attr("data-total", t)
     }, e.prototype.deletedPosts = function() {
      return 0 === this._deletedPostsDiv.length ? null : parseInt(this._deletedPostsDiv[0].dataset.total, 10)
     }, e.prototype.setDeletedPosts = function(t) {
      return $(this._deletedPostsDiv).text(osu.formatNumber(t)).attr("data-total", t)
     }, e.prototype.setCounter = function(t) {
      return this.currentPostPosition = this.postPosition(t), this.currentPostPosition > this.totalPosts() && this.setTotalPosts(this.currentPostPosition), window.reloadUrl = this.postUrlN(this.currentPostPosition), this._postsCounter[0].textContent = osu.formatNumber(this.currentPostPosition), this._postsProgress[0].style.width = 100 * this.currentPostPosition / this.totalPosts() + "%"
     }, e.prototype.endPost = function() {
      return this.posts[this.posts.length - 1]
     }, e.prototype.firstPostLoaded = function() {
      return this.postId(this.posts[0]) === this.firstPostId()
     }, e.prototype.lastPostLoaded = function() {
      return this.postPosition(this.endPost()) === this.totalPosts()
     }, e.prototype.refreshLoadMoreLinks = function() {
      var t, e;
      if (this.loadMoreLinks.length) return t = this.firstPostLoaded(), $(".js-header--main").toggleClass("hidden", !t), $(".js-header--alt").toggleClass("hidden", t), e = this.lastPostLoaded(), $(".js-forum__posts-show-more--next").toggleClass("hidden", e), this.userCanModerate() || $(".js-post-delete-toggle").hide(), e ? $(this.endPost()).find(".js-post-delete-toggle").css({
       display: ""
      }) : void 0
     }, e.prototype.refreshCounter = function() {
      var t, e, i, n, s, r;
      if (0 !== this._postsCounter.length) {
       if (t = null, osu.bottomPage()) t = this.posts[this.posts.length - 1];
       else
        for (e = 0, i = (r = this.posts).length; e < i && (s = (n = r[e]).getBoundingClientRect().top, Math.floor(window.stickyHeader.scrollOffset(s)) <= 0); e++) t = n;
       return null == t && (t = this.posts[0]), this.setCounter(t)
      }
     }, e.prototype.jumpTo = function(t) {
      var e;
      return t = parseInt(t, 10), !!isFinite(t) && (t = Math.max(t, 1), t = Math.min(t, this.totalPosts()), e = $(".js-forum-post[data-post-position='" + t + "']"), this._postsCounter[0].textContent = osu.formatNumber(t), e.length ? this.scrollTo(e.attr("data-post-id")) : Turbolinks.visit(this.postUrlN(t)), !0)
     }, e.prototype.keyboardNavigation = function(t) {
      var e;
      if (!osu.isInputElement(t.target) && this._postsCounter.length) {
       t.preventDefault(), e = function() {
        switch (t.which) {
         case 37:
          return this.currentPostPosition - 1;
         case 39:
          return this.currentPostPosition + 1
        }
       }.call(this);
       try {
        return this.jumpTo(e)
       } catch (t) {}
      }
     }, e.prototype.scrollTo = function(t) {
      var e, i;
      if (e = document.querySelector(".js-forum-post[data-post-id='" + t + "']")) return 0 !== (i = 1 === this.postPosition(e) ? 0 : $(e).offset().top) && (i = window.stickyHeader.scrollOffset(i)), window.scrollTo(window.pageXOffset, i), this.highlightPost(e)
     }, e.prototype.highlightPost = function(t) {
      return $(".js-forum-post--highlighted").removeClass("js-forum-post--highlighted"), $(t).addClass("js-forum-post--highlighted")
     }, e.prototype.toggleDeleted = function() {
      return Turbolinks.visit(osu.updateQueryString(this.postUrlN(this.currentPostPosition), {
       with_deleted: +!this.showDeleted()
      }))
     }, e.prototype.initialScrollTo = function() {
      if ("" === location.hash && null != window.postJumpTo && 0 !== window.postJumpTo) return this.scrollTo(window.postJumpTo), window.postJumpTo = 0
     }, e.prototype.postUrlClick = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target).closest(".js-forum-post").attr("data-post-id"), this.scrollTo(e)
     }, e.prototype.postUrlN = function(t) {
      var e;
      return e = document.location.pathname + "?n=" + t, !1 === this.showDeleted() && (e += "&with_deleted=0"), e
     }, e.prototype.showMore = function(t) {
      var e, i, n, s, r;
      if (t.preventDefault(), !t.currentTarget.classList.contains("js-disabled")) return e = $(t.currentTarget), n = e.data("mode"), s = {
       start: null,
       end: null,
       skip_layout: 1,
       with_deleted: +this.showDeleted()
      }, "previous" === n ? (i = $(".js-forum-post").first(), s.end = i.data("post-id") - 1) : (i = $(".js-forum-post").last(), s.start = i.data("post-id") + 1), e.addClass("js-disabled"), $.get(window.canonicalUrl, s).done((r = this, function(t) {
       var s, o, a, u, l, c, h, d, p, f, m, g;
       if (d = (h = i[0]).getBoundingClientRect().top, "previous" === n ? (e.after(t), m = r.maxPosts, f = r.posts.length) : (e.before(t), m = 0, f = r.posts.length - r.maxPosts), m < f)
        for (u = r.posts[0].parentNode, o = 0, a = (c = _.slice(r.posts, m, f)).length; o < a; o++) l = c[o], u.removeChild(l);
       return r.refreshLoadMoreLinks(), g = window.pageXOffset, s = h.getBoundingClientRect().top, p = window.pageYOffset + s - d, window.scrollTo(g, p), osu.pageChange(), e.attr("data-failed", "0")
      })).always((function() {
       return e.removeClass("js-disabled")
      })).fail((function() {
       return e.attr("data-failed", "1")
      }))
     }, e.prototype.jumpToSubmit = function(t) {
      if (t.preventDefault(), LoadingOverlay.hide(), this.jumpTo($(t.target).find('[name="n"]').val())) return $.publish("forum:topic:jumpTo")
     }, e
    }()
   }).call(window)
  },
  EDjT: function(t, e, i) {
   var n = i("T580");
   t.exports = function(t) {
    var e = n(t, "line-height"),
     i = parseFloat(e, 10);
    if (e === i + "") {
     var s = t.style.lineHeight;
     t.style.lineHeight = e + "em", e = n(t, "line-height"), i = parseFloat(e, 10), s ? t.style.lineHeight = s : delete t.style.lineHeight
    }
    if (-1 !== e.indexOf("pt") ? (i *= 4, i /= 3) : -1 !== e.indexOf("mm") ? (i *= 96, i /= 25.4) : -1 !== e.indexOf("cm") ? (i *= 96, i /= 2.54) : -1 !== e.indexOf("in") ? i *= 96 : -1 !== e.indexOf("pc") && (i *= 16), i = Math.round(i), "normal" === e) {
     var r = t.nodeName,
      o = document.createElement(r);
     o.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && o.setAttribute("rows", "1");
     var a = n(t, "font-size");
     o.style.fontSize = a, o.style.padding = "0px", o.style.border = "0px";
     var u = document.body;
     u.appendChild(o), i = o.offsetHeight, u.removeChild(o)
    }
    return i
   }
  },
  EVQW: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.TwitchPlayer = function() {
     function e(e) {
      this.turbolinksReload = e, this.openPlayer = t(this.openPlayer, this), this.noCookieDiv = t(this.noCookieDiv, this), this.start = t(this.start, this), this.startAll = t(this.startAll, this), this.initializeEmbed = t(this.initializeEmbed, this), this.playerDivs = document.getElementsByClassName("js-twitch-player"), addEventListener("turbolinks:load", this.startAll)
     }
     return e.prototype.initializeEmbed = function() {
      return this.turbolinksReload.load("https://player.twitch.tv/js/embed/v1.js", this.startAll)
     }, e.prototype.startAll = function() {
      var t, e, i, n, s;
      if (0 !== this.playerDivs.length) {
       if ("undefined" == typeof Twitch || null === Twitch) return this.initializeEmbed();
       for (s = [], e = 0, i = (n = this.playerDivs).length; e < i; e++) t = n[e], s.push(this.start(t));
       return s
      }
     }, e.prototype.start = function(t) {
      var e, i;
      if (!t.dataset.twitchPlayerStarted) return t.dataset.twitchPlayerStarted = !0, e = {
       width: "100%",
       height: "100%",
       channel: t.dataset.channel
      }, new Twitch.Player(t.id, e).addEventListener(Twitch.Player.PLAY, (i = this, function() {
       return i.openPlayer(t)
      }))
     }, e.prototype.noCookieDiv = function(t) {
      return document.querySelector(".js-twitch-player--no-cookie[data-player-id='" + t + "']")
     }, e.prototype.openPlayer = function(t) {
      if (t.classList.contains("hidden")) return t.classList.remove("hidden"), Fade.out(this.noCookieDiv(t.id))
     }, e
    }()
   }).call(window)
  },
  EhQP: function(t, e) {
   (function() {
    this.StoreSupporterTagPrice = function() {
     function t(t) {
      this._price = t
     }
     return t.durationToPrice = function(t) {
      switch (t = +t, !1) {
       case !(t >= 12):
        return Math.ceil(t / 12 * 26);
       case 10 !== t:
        return 24;
       case 9 !== t:
        return 22;
       case 8 !== t:
        return 20;
       case 6 !== t:
        return 16;
       case 4 !== t:
        return 12;
       case 2 !== t:
        return 8;
       case 1 !== t:
        return 4
      }
     }, t.prototype.price = function() {
      return this._price
     }, t.prototype.duration = function() {
      return null != this._duration ? this._duration : this._duration = function() {
       switch (!1) {
        case !(this._price >= 26):
         return Math.floor(this._price / 26 * 12);
        case !(this._price >= 24):
         return 10;
        case !(this._price >= 22):
         return 9;
        case !(this._price >= 20):
         return 8;
        case !(this._price >= 16):
         return 6;
        case !(this._price >= 12):
         return 4;
        case !(this._price >= 8):
         return 2;
        case !(this._price >= 4):
         return 1;
        default:
         return 0
       }
      }.call(this)
     }, t.prototype.pricePerMonth = function() {
      return osu.formatNumber(this._price / this.duration(), 2)
     }, t.prototype.discount = function() {
      var t;
      return this.duration() >= 12 ? 46 : (t = 100 * (1 - this._price / this.duration() / 4), Math.max(0, Math.round(t, 0)))
     }, t.prototype.discountText = function() {
      return osu.trans("store.discount", {
       percent: this.discount()
      })
     }, t.prototype.durationInYears = function() {
      return {
       years: Math.floor(this.duration() / 12),
       months: Math.floor(this.duration() % 12)
      }
     }, t.prototype.durationText = function() {
      var t, e;
      return e = [], (t = this.durationInYears()).years > 0 && e.push(osu.transChoice("common.count.years", t.years)), t.months > 0 && e.push(osu.transChoice("common.count.months", t.months)), e.join(", ")
     }, t
    }()
   }).call(window)
  },
  FLFi: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ChangelogChartLoader = function() {
     function e() {
      this.resize = t(this.resize, this), this.initialize = t(this.initialize, this), $(window).on("throttled-resize", this.resize), $(document).on("turbolinks:load", this.initialize)
     }
     return e.prototype.container = document.getElementsByClassName("js-changelog-chart"), e.prototype.initialize = function() {
      if (null != this.container[0]) return this.container[0]._chart = new ChangelogChart(this.container[0]), this.container[0]._chart.loadData()
     }, e.prototype.resize = function() {
      var t;
      return null != (t = this.container[0]) ? t._chart.resize() : void 0
     }, e
    }()
   }).call(window)
  },
  FcZw: function(t, e) {
   (function() {
    var t, e, i;
    e = document.getElementsByClassName("js-loading-overlay"), i = function() {
     if (0 !== e.length) return e[0].classList.add("loading-overlay--visible")
    }, i = _.debounce(i, 5e3, {
     maxWait: 5e3
    }), t = function() {
     if (0 !== e.length) return i.cancel(), e[0].classList.remove("loading-overlay--visible")
    }, this.LoadingOverlay = {
     show: i,
     hide: t
    }
   }).call(window)
  },
  GXtz: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.OsuAudio = function() {
     function e() {
      var e;
      this.urlSet = t(this.urlSet, this), this.urlGet = t(this.urlGet, this), this.stop = t(this.stop, this), this.publish = t(this.publish, this), this.playing = t(this.playing, this), this.player = t(this.player, this), this.play = t(this.play, this), this._player = document.getElementsByClassName("js-audio"), $(document).on("click", ".js-audio--play", this.play), $(document).on("turbolinks:load", (e = this, function() {
       return e.player().addEventListener("playing", e.playing), e.player().addEventListener("ended", e.stop), e.player().volume = .45
      }))
     }
     return e.prototype.play = function(t) {
      var e, i;
      return t.preventDefault(), (i = t.currentTarget.dataset.audioUrl) === this.urlGet() ? this.stop() : (this.urlSet(i), this.publish("initializing"), null != (e = this.player().play()) ? e.catch((function(t) {
       if ("AbortError" !== t.name && "NotSupportedError" !== t.name) throw t
      })) : void 0)
     }, e.prototype.player = function() {
      return this._player[0]
     }, e.prototype.playing = function() {
      return this.publish("playing")
     }, e.prototype.publish = function(t) {
      return $.publish("osuAudio:" + t, {
       url: this.urlGet(),
       player: this.player()
      })
     }, e.prototype.stop = function() {
      return this.player().pause(), this.player().currentTime = 0, this.urlSet(""), this.publish("ended")
     }, e.prototype.urlGet = function() {
      return this.player().getAttribute("src")
     }, e.prototype.urlSet = function(t) {
      return this.player().setAttribute("src", t)
     }, e
    }()
   }).call(window)
  },
  "Go/u": function(t, e) {
   (function() {
    var t, e, i;
    i = function() {
     return StoreCart.setEnabled(!1), $("#username-check-price").text("")
    }, t = function() {
     var t, e;
     return t = $("#username-check-status"), e = $(".js-username-change-input").val(), $.post(laroute.route("users.check-username-availability"), {
      username: e
     }).done((function(e) {
      if (e.username === $(".js-username-change-input").val()) return e.available ? ($(".js-store-add-to-cart").attr("disabled", !1), $("#username-check-price").text(e.costString), $("#username-form-price").val(e.cost), $("#product-form").data("disabled", !1)) : i(), t.html(e.message), t.toggleClass("green-dark", e.available), t.toggleClass("pink-dark", !e.available)
     })).fail((function(t) {
      if (401 === t.status) return osu.popup(osu.trans("errors.logged_out"), "danger")
     }))
    }, e = _.debounce(t, 300), $(document).on("input", ".js-username-change-input", (function(t) {
     var n, s, r;
     return s = t.currentTarget, n = $("#username-check-status"), r = s.value, n.removeClass("green-dark"), n.removeClass("pink-dark"), i(), 0 === r.length ? n.text(osu.trans("store.username_change.check")) : (n.text(osu.trans("store.username_change.checking", {
      username: r
     })), e())
    })), $(document).on("turbolinks:load", (function() {
     if (0 !== $(".js-username-change-input").length) return i()
    }))
   }).call(window)
  },
  GwZD: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.RadarChart = function() {
     function e(e, i) {
      var n, s;
      this.options = null != i ? i : {}, this.resize = t(this.resize, this), this.loadData = t(this.loadData, this), this.margins = {
       top: 30,
       right: 30,
       bottom: 0,
       left: 30
      }, (n = this.options).scale || (n.scale = d3.scaleLinear()), this.area = d3.select(e), this.svg = this.area.append("svg"), this.angleStep = 2 * Math.PI / this.options.axes, this.svgWrapper = this.svg.append("g"), s = this.svgWrapper.append("g"), this.circles = function() {
       var t, e, i;
       for (i = [], t = 0, e = this.options.ticks - 1; 0 <= e ? t <= e : t >= e; 0 <= e ? ++t : --t) i.push(s.append("circle").classed(this.options.className + "__circle", !0));
       return i
      }.call(this), this.axes = function() {
       var t, e, i;
       for (i = [], t = 0, e = this.options.axes - 1; 0 <= e ? t <= e : t >= e; 0 <= e ? ++t : --t) s = this.svgWrapper.append("g"), i.push({
        axis: s.append("line").classed(this.options.className + "__axis", !0),
        dots: function() {
         var t, e, i;
         for (i = [], t = 0, e = this.options.dots - 1; 0 <= e ? t <= e : t >= e; 0 <= e ? ++t : --t) i.push(s.append("circle").classed(this.options.className + "__dot", !0));
         return i
        }.call(this),
        label: s.append("text").classed(this.options.className + "__label", !0)
       });
       return i
      }.call(this), this.centerDot = this.svgWrapper.append("circle").classed(this.options.className + "__dot", !0), this.selectedArea = this.svgWrapper.append("path").classed(this.options.className + "__area", !0), this.pointsGroup = this.svgWrapper.append("g")
     }
     return e.prototype.loadData = function(t) {
      return this.values = t, this.resize(!0)
     }, e.prototype.setDimensions = function() {
      var t;
      return t = this.area.node().getBoundingClientRect().width, this.options.maxWidth && t > this.options.maxWidth && (t = this.options.maxWidth), this.diameter = t - (this.margins.left + this.margins.right), this.radius = this.diameter / 2, this.dotRadius = t / 200, this.center = {
       x: this.radius,
       y: this.radius
      }
     }, e.prototype.setScalesRange = function() {
      return this.options.scale.range([0, this.radius]).domain(this.options.domain)
     }, e.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.diameter + (this.margins.left + this.margins.right)).attr("height", this.diameter + (this.margins.top + this.margins.bottom))
     }, e.prototype.setWrapperSize = function() {
      return this.svgWrapper.attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")")
     }, e.prototype.setCirclesSize = function() {
      var t, e, i, n, s;
      for (i = this.radius / this.options.ticks, t = e = 0, n = (s = this.circles).length; e < n; t = ++e) s[t].attr("cx", this.center.x).attr("cy", this.center.y).attr("r", i * (t + 1));
      return this.centerDot.attr("cx", this.center.x).attr("cy", this.center.y).attr("r", this.dotRadius)
     }, e.prototype.setAxesSize = function() {
      var t, e, i, n, s, r, o, a, u, l, c, h, d, p, f, m, g, v, y, b, w, k;
      for (this.angleStep = 2 * Math.PI / this.options.axes, t = Math.PI / 2, a = this.radius / this.options.dots, v = this.center.x, w = this.center.y, y = this.center.x, k = this.center.y - this.radius, m = [], n = r = 0, u = (c = this.axes).length; r < u; n = ++r) {
       for ((e = c[n]).axis.attr("x1", v).attr("y1", w).attr("x2", y).attr("y2", k), y = (h = this._rotatePoint(v, w, y, k, this.angleStep))[0], k = h[1], s = o = 0, l = (d = e.dots).length; o < l; s = ++o) i = d[s], g = (p = this._extendPoint(this.center.x, this.center.y, a * (s + 1), t))[0], b = p[1], i.attr("cx", g).attr("cy", b).attr("r", this.dotRadius);
       g = (f = this._extendPoint(this.center.x, this.center.y, this.radius + 10, t))[0], b = f[1], e.label.attr("x", g).attr("y", b).attr("text-anchor", g > this.center.x ? "start" : g < this.center.x ? "end" : "middle").text(this.values[n].label), m.push(t += this.angleStep)
      }
      return m
     }, e.prototype.calculatePoints = function() {
      return this.data = this.values.map((t = this, function(e, i) {
       var n, s, r;
       return s = t.options.scale(e.value), n = Math.PI / 2 + t.angleStep * i, {
        x: (r = t._extendPoint(t.center.x, t.center.y, s, n))[0],
        y: r[1]
       }
      }));
      var t
     }, e.prototype.drawArea = function(t) {
      var e, i;
      return i = d3.line().x((function(t) {
       return t.x
      })).y((function(t) {
       return t.y
      })).interpolate("linear-closed"), e = this.selectedArea, t && (e = e.transition()), e.attr("d", i(this.data))
     }, e.prototype._extendPoint = function(t, e, i, n) {
      var s;
      return s = Math.sin(n), [t + i * Math.cos(n), e - i * s]
     }, e.prototype._rotatePoint = function(t, e, i, n, s) {
      var r, o;
      return o = Math.sin(s), [t + ((i -= t) * (r = Math.cos(s)) + (n -= e) * o), e + (n * r - i * o)]
     }, e.prototype.resize = function(t) {
      return this.setDimensions(), this.setScalesRange(), this.setSvgSize(), this.setWrapperSize(), this.setCirclesSize(), this.setAxesSize(), this.calculatePoints(), this.drawArea(t)
     }, e
    }()
   }).call(window)
  },
  HRtH: function(t, e) {
   (function() {
    $(document).on("ajax:success", ".js-logout-link", (function() {
     return localStorage.clear(), osu.reloadPage()
    }))
   }).call(window)
  },
  HZVD: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.StatusChart = function() {
     function e(e, i) {
      var n, s, r, o;
      this.set = t(this.set, this), this.ratio = 2 * Math.PI, o = $(e).width(), n = $(e).height(), s = (r = Math.min(o, n) / 2) / 4.7 * 4, this.defaultArc = d3.arc().innerRadius(s).outerRadius(r).startAngle(0), this.svg = d3.select(e).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 " + Math.min(o, n) + " " + Math.min(o, n)).attr("preserveAspectRatio", "xMinYMin").append("g").attr("transform", "translate(" + Math.min(o, n) / 2 + ", " + Math.min(o, n) / 2 + ")"), this.text = this.svg.append("text").text(i).attr("dy", -8).classed("status-chart__text", !0), this.percentage = this.svg.append("text").attr("dy", 20).classed("status-chart__text status-chart__text--percentage", !0), this.background = this.svg.append("path").datum({
       endAngle: this.ratio
      }).classed("status-chart__background", !0).attr("d", this.defaultArc), this.upArc = this.svg.append("path").datum({
       endAngle: 0
      }).classed("status-chart__up-arc", !0).attr("d", this.defaultArc), this.downArc = this.svg.append("path").datum({
       endAngle: 0
      }).classed("status-chart__down-arc", !0).attr("d", this.defaultArc)
     }
     return e.prototype.parse = function(t) {
      return this.ratio * t / 100
     }, e.prototype.set = function(t) {
      var e, i;
      return i = this, e = function(t, e) {
       return t.attrTween("d", (function(t) {
        var n;
        return n = d3.interpolate(t.endAngle, e),
         function(e) {
          return t.endAngle = n(e), i.percentage.text(Math.round(t.endAngle / i.ratio * 100) + "%"), i.defaultArc(t)
         }
       }))
      }, this.downArc.transition().duration(750).call(e, -this.parse(t.down)), this.upArc.transition().duration(750).call(e, this.parse(t.up))
     }, e
    }()
   }).call(window)
  },
  IBdx: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.TooltipBeatmap = function() {
     function e() {
      this.onMouseOver = t(this.onMouseOver, this), $(document).on("mouseover touchstart", ".js-beatmap-tooltip", this.onMouseOver)
     }
     return e.prototype.tmpl = _.template('<div class="tooltip-beatmap__text tooltip-beatmap__text--title"><%- beatmapTitle %></div><div class="tooltip-beatmap__text tooltip-beatmap__text--<%- difficulty %>"><%- stars %> <i class="fas fa-star" aria-hidden="true"></i></div>'), e.prototype.onMouseOver = function(t) {
      var e, i, n, s, r;
      if (null != (n = t.currentTarget).dataset.beatmapTitle) {
       if (i = this.tmpl(n.dataset), !n._tooltip) return e = null != (r = n.dataset.tooltipPosition) ? r : "top center", s = {
        overwrite: !1,
        content: i,
        position: {
         my: function() {
          switch (e) {
           case "top center":
            return "bottom center";
           case "left center":
            return "right center";
           case "right center":
            return "left center"
          }
         }(),
         at: e,
         viewport: $(window)
        },
        show: {
         event: t.type,
         ready: !0
        },
        hide: {
         event: "click mouseleave"
        },
        style: {
         classes: "qtip tooltip-beatmap",
         tip: {
          width: 10,
          height: 9
         }
        }
       }, "touchstart" === t.type && (s.hide = {
        inactive: 3e3
       }), $(n).qtip(s, t), n._tooltip = !0;
       $(n).qtip("set", {
        "content.text": i
       })
      }
     }, e
    }()
   }).call(window)
  },
  ICEo: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumTopicPostJump = function() {
     function e(e) {
      this.forum = e, this.start = t(this.start, this), this.keyup = t(this.keyup, this), this.end = t(this.end, this), $(document).on("click", ".js-forum-topic-post-jump--cover", this.start), $(document).on("blur", ".js-forum-topic-post-jump--input", this.end), $(document).on("keyup", ".js-forum-topic-post-jump--input", this.keyup), $.subscribe("forum:topic:jumpTo", this.end)
     }
     return e.prototype.end = function() {
      return $(".js-forum-topic-post-jump--container").removeClass("forum-topic-nav__item--focus"), $(".js-forum-topic-post-jump--cover").show(), $(".js-forum-topic-post-jump--counter").show(), $(".js-forum-topic-post-jump--input").hide()
     }, e.prototype.keyup = function(t) {
      var e, i, n;
      if (27 !== t.keyCode) {
       if (i = (n = (e = t.currentTarget).value).replace(/\D/g, ""), n !== i) return e.value = i
      } else $(t.currentTarget).blur()
     }, e.prototype.start = function() {
      var t;
      return $(".js-forum-topic-post-jump--container").addClass("forum-topic-nav__item--focus"), $(".js-forum-topic-post-jump--cover").hide(), $(".js-forum-topic-post-jump--counter").hide(), (t = $(".js-forum-topic-post-jump--input").val(this.forum.currentPostPosition).show().focus())[0].selectionStart = 0, t[0].selectionEnd = t.val().length
     }, e
    }()
   }).call(window)
  },
  JER7: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumPostsSeek = function() {
     function e(e) {
      this.forum = e, this.setPostPosition = t(this.setPostPosition, this), this.reset = t(this.reset, this), this.jump = t(this.jump, this), this.click = t(this.click, this), this.move = t(this.move, this), this.hideTooltip = t(this.hideTooltip, this), this.tooltip = document.getElementsByClassName("js-forum-posts-seek--tooltip"), this.tooltipNumber = document.getElementsByClassName("js-forum-posts-seek-tooltip-number"), this.seekbar = document.getElementsByClassName("js-forum__posts-seek"), $(document).on("mousemove", ".js-forum__posts-seek", this.move), $(document).on("mouseleave", ".js-forum__posts-seek", this.hideTooltip), $(document).on("click", ".js-forum__posts-seek", this.click), $(document).on("click", ".js-forum-posts-seek--jump", this.jump), addEventListener("turbolinks:before-cache", this.reset)
     }
     return e.prototype.hideTooltip = function() {
      if (0 !== this.tooltip.length) return Fade.out(this.tooltip[0])
     }, e.prototype.move = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.setPostPosition(t.clientX), Fade.in(this.tooltip[0]), Timeout.clear(this._autohide), this._autohide = Timeout.set(1e3, this.hideTooltip)
     }, e.prototype.click = function() {
      return this.forum.jumpTo(this.postPosition)
     }, e.prototype.jump = function(t) {
      var e, i, n, s, r, o, a, u;
      return t.preventDefault(), i = this.forum.currentPostPosition, u = this.forum.totalPosts(), e = $(t.currentTarget), s = e.attr("data-jump-target"), a = function() {
       switch (s) {
        case "first":
         return 1;
        case "last":
         return u;
        case "previous":
         return n = i - 10, o = this.forum.postPosition(this.forum.posts[0]), Math.max(n, o);
        case "next":
         return n = i + 10, r = this.forum.postPosition(this.forum.endPost()), Math.min(n, r)
       }
      }.call(this), e.blur(), this.forum.jumpTo(a)
     }, e.prototype.reset = function() {
      return Timeout.clear(this._autohide), this.hideTooltip()
     }, e.prototype.setPostPosition = function(t) {
      var e, i, n;
      return e = t / this.seekbar[0].offsetWidth, n = this.forum.totalPosts(), i = Math.ceil(e * this.forum.totalPosts()), i = Math.min(i, n), this.postPosition = Math.max(i, 1), this.tooltip[0].style.transform = "translateX(" + t + "px)", this.tooltipNumber[0].textContent = this.postPosition
     }, e
    }()
   }).call(window)
  },
  JXhK: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.StoreSupporterTag = function() {
     function e(e) {
      var i;
      this.updateUserInteraction = t(this.updateUserInteraction, this), this.updateTargetId = t(this.updateTargetId, this), this.updateSearchResult = t(this.updateSearchResult, this), this.updateCostDisplay = t(this.updateCostDisplay, this), this.onInput = t(this.onInput, this), this.onSliderValueChanged = t(this.onSliderValueChanged, this), this.calculate = t(this.calculate, this), this.getUser = t(this.getUser, this), this.initializeUsernameInput = t(this.initializeUsernameInput, this), this.initializeSliderPresets = t(this.initializeSliderPresets, this), this.initializeSlider = t(this.initializeSlider, this), this.debouncedGetUser = _.debounce(this.getUser, 300), this.el = e, this.searching = !1, this.priceElement = this.el.querySelector(".js-price"), this.durationElement = this.el.querySelector(".js-duration"), this.discountElement = this.el.querySelector(".js-discount"), this.slider = this.el.querySelector(".js-slider"), this.sliderPresets = this.el.querySelectorAll(".js-slider-preset"), this.targetIdElement = this.el.querySelector('input[name="item[extra_data][target_id]"]'), this.usernameInput = this.el.querySelector(".js-username-input"), this.reactElement = this.el.querySelector(".js-react--user-card-store"), this.user = JSON.parse(this.reactElement.dataset.user), $(document).on("turbolinks:before-cache.store-supporter-tag", (i = this, function() {
       return i.reactElement.dataset.user = JSON.stringify(i.user), $(document).off(".store-supporter-tag")
      })), this.cost = this.calculate(this.initializeSlider().slider("value")), this.initializeSliderPresets(), this.initializeUsernameInput(), this.updateCostDisplay(), this.updateSearchResult()
     }
     return e.prototype.RESOLUTION = 8, e.prototype.MIN_VALUE = 4, e.prototype.MAX_VALUE = 52, e.initialize = function() {
      var t, i, n, s, r;
      for (r = [], i = 0, n = (s = document.getElementsByClassName("js-store-supporter-tag")).length; i < n; i++) t = s[i], r.push(new e(t));
      return r
     }, e.prototype.initializeSlider = function() {
      var t;
      return $(this.slider).find(".ui-slider-range").remove(), $(this.slider).slider({
       range: "min",
       value: null != (t = this.slider.dataset.lastValue) ? t : this.sliderValue(this.MIN_VALUE),
       min: this.sliderValue(this.MIN_VALUE),
       max: this.sliderValue(this.MAX_VALUE),
       step: 1,
       animate: !0,
       slide: this.onSliderValueChanged,
       change: this.onSliderValueChanged
      })
     }, e.prototype.initializeSliderPresets = function() {
      return $(this.sliderPresets).on("click", (t = this, function(e) {
       var i, n;
       if (n = e.currentTarget, i = StoreSupporterTagPrice.durationToPrice(n.dataset.months)) return $(t.slider).slider("value", t.sliderValue(i))
      }));
      var t
     }, e.prototype.initializeUsernameInput = function() {
      return $(this.usernameInput).on("input", this.onInput)
     }, e.prototype.getUser = function(t) {
      return t ? $.ajax({
       data: {
        username: t
       },
       dataType: "json",
       type: "POST",
       url: laroute.route("users.check-username-exists")
      }).done((e = this, function(t) {
       return e.user = t
      })).fail((function(t) {
       if (401 === t.status) return osu.popup(osu.trans("errors.logged_out"), "danger")
      })).always(function(t) {
       return function() {
        return t.searching = !1, t.updateSearchResult()
       }
      }(this)) : (this.user = window.currentUser, this.searching = !1, void this.updateSearchResult());
      var e
     }, e.prototype.calculate = function(t) {
      return new StoreSupporterTagPrice(Math.floor(t / this.RESOLUTION))
     }, e.prototype.onSliderValueChanged = function(t, e) {
      return this.slider.dataset.lastValue = e.value, this.cost = this.calculate(e.value), this.updateCostDisplay()
     }, e.prototype.onInput = function(t) {
      return this.searching || (this.searching = !0, this.user = null, this.updateSearchResult()), this.debouncedGetUser(t.currentTarget.value)
     }, e.prototype.sliderValue = function(t) {
      return t * this.RESOLUTION
     }, e.prototype.updateCostDisplay = function() {
      var t, e, i, n, s;
      for (this.el.querySelector('input[name="item[cost]"]').value = this.cost.price(), this.priceElement.textContent = "USD " + this.cost.price(), this.durationElement.textContent = this.cost.durationText(), this.discountElement.textContent = this.cost.discountText(), s = [], e = 0, i = (n = this.sliderPresets).length; e < i; e++) t = n[e], s.push(this.updateSliderPreset(t, this.cost));
      return s
     }, e.prototype.updateSearchResult = function() {
      return $.publish("store-supporter-tag:update-user", this.user), this.updateTargetId(), this.updateUserInteraction()
     }, e.prototype.updateSliderPreset = function(t, e) {
      return $(t).toggleClass("js-slider-preset--active", e.duration() >= +t.dataset.months)
     }, e.prototype.updateTargetId = function() {
      var t;
      return this.targetIdElement.value = null != (t = this.user) ? t.id : void 0
     }, e.prototype.updateUserInteraction = function() {
      var t, e;
      return t = null != (null != (e = this.user) ? e.id : void 0) && Number.isFinite(this.user.id) && this.user.id > 0, StoreCart.setEnabled(t), $(this.el).toggleClass("js-store--disabled", !t), $(".js-slider").slider({
       disabled: !t
      })
     }, e
    }()
   }).call(window)
  },
  JYmG: function(t, e) {
   (function() {
    this.ThrottledWindowEvents = function() {
     function t() {
      this.throttle("resize"), this.throttle("scroll")
     }
     return t.prototype.throttle = function(t) {
      var e, i;
      return i = !1, e = function() {
       if (!i) return i = !0, requestAnimationFrame((function() {
        return window.dispatchEvent(new CustomEvent("throttled-" + t)), i = !1
       }))
      }, window.addEventListener(t, e)
     }, t
    }()
   }).call(window)
  },
  Jfng: function(t, e, i) {
   (function(t) {
    var n = void 0 !== t && t || "undefined" != typeof self && self || window,
     s = Function.prototype.apply;

    function r(t, e) {
     this._id = t, this._clearFn = e
    }
    e.setTimeout = function() {
     return new r(s.call(setTimeout, n, arguments), clearTimeout)
    }, e.setInterval = function() {
     return new r(s.call(setInterval, n, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
     t && t.close()
    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
     this._clearFn.call(n, this._id)
    }, e.enroll = function(t, e) {
     clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function(t) {
     clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function(t) {
     clearTimeout(t._idleTimeoutId);
     var e = t._idleTimeout;
     e >= 0 && (t._idleTimeoutId = setTimeout((function() {
      t._onTimeout && t._onTimeout()
     }), e))
    }, i("679Q"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
   }).call(this, i("btiA"))
  },
  K1Kf: function(t, e) {
   (function() {
    var t;
    $(document).on("click", "#new-address-switch a", (function(t) {
     var e, i;
     return t.preventDefault(), i = $(t.target), e = $("#new-address-form"), i.is(":visible") ? (i.siblings("button").show(), i.hide(), e.find("input").first().focus()) : (i.siblings("button").hide(), i.show()), e.slideToggle()
    })), t = function() {
     return $(".js-checkout-confirmation-step").filter(":checked")
    }, $(document).on("turbolinks:load", t), $(document).on("change", ".js-checkout-confirmation-step", t), $(document).on("turbolinks:load", (function() {
     if (!(parseInt($(".js-store-item-quantity").val(), 10) > 0)) return $(".js-store-add-to-cart").hide()
    })), $(document).on("turbolinks:load", (function() {
     return $("#product-form").submit((function(t) {
      return !$(t.target).data("disabled")
     }))
    }))
   }).call(window)
  },
  K4RX: function(t, e, i) {
   var n, s;
   void 0 === (s = "function" == typeof(n = function(t, e) {
    "use strict";
    var i, n, s = "function" == typeof Map ? new Map : (i = [], n = [], {
      has: function(t) {
       return i.indexOf(t) > -1
      },
      get: function(t) {
       return n[i.indexOf(t)]
      },
      set: function(t, e) {
       -1 === i.indexOf(t) && (i.push(t), n.push(e))
      },
      delete: function(t) {
       var e = i.indexOf(t);
       e > -1 && (i.splice(e, 1), n.splice(e, 1))
      }
     }),
     r = function(t) {
      return new Event(t, {
       bubbles: !0
      })
     };
    try {
     new Event("test")
    } catch (t) {
     r = function(t) {
      var e = document.createEvent("Event");
      return e.initEvent(t, !0, !1), e
     }
    }

    function o(t) {
     var e = s.get(t);
     e && e.destroy()
    }

    function a(t) {
     var e = s.get(t);
     e && e.update()
    }
    var u = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((u = function(t) {
     return t
    }).destroy = function(t) {
     return t
    }, u.update = function(t) {
     return t
    }) : ((u = function(t, e) {
     return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
      return function(t) {
       if (t && t.nodeName && "TEXTAREA" === t.nodeName && !s.has(t)) {
        var e, i = null,
         n = null,
         o = null,
         a = function() {
          t.clientWidth !== n && h()
         },
         u = function(e) {
          window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", u, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach((function(i) {
           t.style[i] = e[i]
          })), s.delete(t)
         }.bind(t, {
          height: t.style.height,
          resize: t.style.resize,
          overflowY: t.style.overflowY,
          overflowX: t.style.overflowX,
          wordWrap: t.style.wordWrap
         });
        t.addEventListener("autosize:destroy", u, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", s.set(t, {
         destroy: u,
         update: h
        }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), i = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(i) && (i = 0), h()
       }

       function l(e) {
        var i = t.style.width;
        t.style.width = "0px", t.offsetWidth, t.style.width = i, t.style.overflowY = e
       }

       function c() {
        if (0 !== t.scrollHeight) {
         var e = function(t) {
           for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
            node: t.parentNode,
            scrollTop: t.parentNode.scrollTop
           }), t = t.parentNode;
           return e
          }(t),
          s = document.documentElement && document.documentElement.scrollTop;
         t.style.height = "", t.style.height = t.scrollHeight + i + "px", n = t.clientWidth, e.forEach((function(t) {
          t.node.scrollTop = t.scrollTop
         })), s && (document.documentElement.scrollTop = s)
        }
       }

       function h() {
        c();
        var e = Math.round(parseFloat(t.style.height)),
         i = window.getComputedStyle(t, null),
         n = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : t.offsetHeight;
        if (n < e ? "hidden" === i.overflowY && (l("scroll"), c(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== i.overflowY && (l("hidden"), c(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== n) {
         o = n;
         var s = r("autosize:resized");
         try {
          t.dispatchEvent(s)
         } catch (t) {}
        }
       }
      }(t)
     })), t
    }).destroy = function(t) {
     return t && Array.prototype.forEach.call(t.length ? t : [t], o), t
    }, u.update = function(t) {
     return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
    }), e.default = u, t.exports = e.default
   }) ? n.apply(e, [t, e]) : n) || (t.exports = s)
  },
  Kd0U: function(t, e) {
   (function() {
    var t = function(t, e) {
      return function() {
       return t.apply(e, arguments)
      }
     },
     e = {}.hasOwnProperty;
    this.FormError = function() {
     function i() {
      this.setOneError = t(this.setOneError, this), this.setError = t(this.setError, this), this.showError = t(this.showError, this), this.flattenData = t(this.flattenData, this), this.clearError = t(this.clearError, this), $(document).on("ajax:error", ".js-form-error", this.showError), $(document).on("ajax:success", ".js-form-error", this.clearError)
     }
     return i.prototype.clearError = function(t) {
      return this.setError(t.target)
     }, i.prototype.flattenData = function(t, i) {
      var n, s, r, o, a, u, l, c;
      for (a in null == i && (i = []), n = {}, t)
       if (e.call(t, a))
        if (c = t[a], Array.isArray(c)) {
         for (s = "", r = o = 0, u = i.length; o < u; r = ++o) l = i[r], s += 0 === r ? l : "[" + l + "]";
         n[s += "" === s ? a : "[" + a + "]"] = c
        } else c instanceof Object && _.merge(n, this.flattenData(c, i.concat(a)));
      return n
     }, i.prototype.showError = function(t, e) {
      var i, n;
      return null == (i = null != (n = e.responseJSON) ? n.form_error : void 0) ? osu.ajaxError(e) : this.setError(t.target, this.flattenData(i))
     }, i.prototype.setError = function(t, e) {
      return null == e && (e = {}), $(t).find("[name]").each((i = this, function(t, n) {
       return i.setOneError(n, e[n.name])
      }));
      var i
     }, i.prototype.setOneError = function(t, e) {
      var i;
      return null == e && (e = []), i = e.length > 0 ? "error" : "", $(t).closest("label, .js-form-error--field").attr("data-form-error-state", i).find(".js-form-error--error").text(e.join(" "))
     }, i
    }()
   }).call(window)
  },
  L6Lm: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.LandingGraph = function() {
     function e() {
      this.resize = t(this.resize, this), this.initialize = t(this.initialize, this), $(window).on("throttled-resize", this.resize), $(document).on("turbolinks:load", this.initialize)
     }
     return e.prototype.container = document.getElementsByClassName("js-landing-graph"), e.prototype.initialize = function() {
      var t;
      if (null != this.container[0]) return null != (t = this.container[0])._chart ? t._chart : t._chart = new LandingUserStats
     }, e.prototype.resize = function() {
      var t;
      if (null != this.container[0]) return null != (t = this.container[0]._chart) ? t.resize() : void 0
     }, e
    }()
   }).call(window)
  },
  LQV2: function(t, e, i) {
   "use strict";
   e.__esModule = !0;
   var n = i("3hzo");
   e.default = n.TextareaAutosize
  },
  LgLm: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Search = function() {
     function e() {
      this.restoreFocus = t(this.restoreFocus, this), this.searchingToggle = t(this.searchingToggle, this), this.submit = t(this.submit, this), this.submitForm = t(this.submitForm, this), this.submitInput = t(this.submitInput, this), this.maybeSubmitInput = t(this.maybeSubmitInput, this), this.forumPostReset = t(this.forumPostReset, this), this.debouncedSubmitInput = _.debounce(this.submitInput, 500), $(document).on("click", ".js-search--forum-options-reset", this.forumPostReset), $(document).on("input", ".js-search--input", this.debouncedSubmitInput), $(document).on("keydown", ".js-search--input", this.maybeSubmitInput), $(document).on("submit", ".js-search", this.submitForm), addEventListener("turbolinks:load", this.restoreFocus)
     }
     return e.prototype.forumPostReset = function() {
      var t;
      return (t = $(".js-search")).find("[name=username], [name=forum_id]").val(""), t.find("[name=forum_children]").prop("checked", !1)
     }, e.prototype.maybeSubmitInput = function(t) {
      if (13 === t.keyCode) return t.preventDefault(), this.submitInput(t)
     }, e.prototype.submitInput = function(t) {
      var e, i, n;
      if ("" !== (n = (e = t.currentTarget).value.trim()) && n !== (null != (i = e.dataset.searchCurrent) ? i.trim() : void 0)) return e.dataset.searchCurrent = n, this.submit()
     }, e.prototype.submitForm = function(t) {
      return t.preventDefault(), this.submit()
     }, e.prototype.submit = function() {
      var t, e;
      return this.searchingToggle(!0), t = $(".js-search").serialize(), $(document).one("turbolinks:before-cache", (e = this, function() {
       return e.activeElement = document.activeElement, e.searchingToggle(!1)
      })), Turbolinks.visit("?" + t)
     }, e.prototype.searchingToggle = function(t) {
      return $(".js-search--header").toggleClass("js-search--searching", t)
     }, e.prototype.restoreFocus = function() {
      var t;
      return null != (t = this.activeElement) && t.focus(), this.activeElement = null
     }, e
    }()
   }).call(window)
  },
  MRAD: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.PostPreview = function() {
     function e() {
      var e;
      this.loadPreview = t(this.loadPreview, this), this.debouncedLoadPreview = _.debounce(this.loadPreview, 500), $(document).on("input", ".js-post-preview--auto", (e = this, function(t) {
       return e.debouncedLoadPreview(t.currentTarget)
      }))
     }
     return e.prototype.loadPreview = function(t) {
      var e, i, n, s, r, o;
      if (e = $(t).closest("form"), s = t.value, r = (i = e.find(".js-post-preview--preview"))[0], n = e.find(".js-post-preview--box"), null != r)
       if (null != (o = r._xhr) && o.abort(), "" !== s) {
        if (i.attr("data-raw") !== s) return r._xhr = $.post(laroute.route("bbcode-preview"), {
         text: s
        }).done((function(t) {
         return i.html(t), i.attr("data-raw", s), n.removeClass("hidden"), osu.pageChange()
        }));
        n.removeClass("hidden")
       } else n.addClass("hidden")
     }, e
    }()
   }).call(window)
  },
  MWnb: function(t, e) {
   (function() {
    var t = function(t, e) {
      return function() {
       return t.apply(e, arguments)
      }
     },
     e = {}.hasOwnProperty;
    this.StackedBarChart = function() {
     function i(e, i) {
      var n, s, r, o, a, u, l;
      for (this.options = null != i ? i : {}, this.resize = t(this.resize, this), this.margins = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
       }, null == (n = this.options).scales && (n.scales = {}), null == (s = this.options.scales).x && (s.x = d3.scaleLinear()), null == (r = this.options.scales).y && (r.y = d3.scaleLinear()), o = "stacked-bar-chart", a = 0, u = (l = this.options.modifiers).length; a < u; a++) o += " stacked-bar-chart--" + l[a];
      this.area = d3.select(e), this.svg = this.area.append("svg").attr("class", o), this.svgWrapper = this.svg.append("g")
     }
     return i.prototype.loadData = function(t) {
      var i, n, s, r, o, a;
      for (s in this.data = [], t)
       if (e.call(t, s))
        for (o in r = t[s]) e.call(r, o) && (a = r[o], null == (i = this.data)[o] && (i[o] = []), n = _.last(this.data[o]), this.data[o].push({
         type: s,
         value: a,
         height: null != n ? n.value + n.height : 0
        }));
      return this.max = d3.max(_.map(this.data, (function(t) {
       return _.sumBy(t, "value")
      }))), this.resize()
     }, i.prototype.setDimensions = function() {
      var t;
      return t = this.area.node().getBoundingClientRect(), this.width = t.width - (this.margins.left + this.margins.right), this.height = t.height - (this.margins.top + this.margins.bottom)
     }, i.prototype.setScalesRange = function() {
      return this.options.scales.x.range([0, this.width]).domain([0, this.data.length]), this.options.scales.y.range([0, this.height]).domain([0, this.max])
     }, i.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.width + (this.margins.left + this.margins.right)).attr("height", this.height + (this.margins.top + this.margins.bottom))
     }, i.prototype.setWrapperSize = function() {
      return this.svgWrapper.attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")")
     }, i.prototype.drawBars = function() {
      var t, e, i;
      return (e = this.svgWrapper.selectAll("g").data(this.data)).enter().append("g"), e.attr("transform", (i = this, function(t, e) {
       return "translate(" + i.options.scales.x(e) + ", 0)"
      })), (t = e.selectAll(".stacked-bar-chart__bar").data((function(t) {
       return t
      }))).enter().append("rect").attr("class", (function(t) {
       return "stacked-bar-chart__bar stacked-bar-chart__bar--" + t.type
      })), t.transition().attr("y", function(t) {
       return function(e) {
        return t.height - t.options.scales.y(e.value + e.height)
       }
      }(this)).attr("height", function(t) {
       return function(e) {
        return t.options.scales.y(e.value)
       }
      }(this)).attr("width", this.options.scales.x(1)), t.exit().remove(), e.exit().remove()
     }, i.prototype.resize = function() {
      return this.setDimensions(), this.setScalesRange(), this.setSvgSize(), this.setWrapperSize(), this.drawBars()
     }, i
    }()
   }).call(window)
  },
  "Nqw+": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.AccountEditAvatar = function() {
     function e() {
      this.rollback = t(this.rollback, this), this.overlayStart = t(this.overlayStart, this), this.overlayLeave = t(this.overlayLeave, this), this.overlayHover = t(this.overlayHover, this), this.overlayEnter = t(this.overlayEnter, this), this.overlayEnd = t(this.overlayEnd, this), this.initialize = t(this.initialize, this), $(document).on("turbolinks:load", this.initialize), $(document).on("turbolinks:before-cache", this.rollback), $.subscribe("dragenterGlobal", this.overlayStart), $.subscribe("dragendGlobal", this.overlayEnd), $(document).on("dragenter", ".js-account-edit-avatar", this.overlayEnter), $(document).on("dragover", ".js-account-edit-avatar", this.overlayHover), this.main = document.getElementsByClassName("js-account-edit-avatar")
     }
     return e.prototype.$button = function() {
      return $(".js-account-edit-avatar__button")
     }, e.prototype.initialize = function() {
      var t;
      if (null != this.main[0]) return this.isAvailable = !0, this.$main = $(this.main), this.$button().fileupload({
       url: laroute.route("account.avatar"),
       dataType: "json",
       dropZone: this.$main,
       submit: (t = this, function() {
        return t.main[0].classList.add("js-account-edit-avatar--saving"), $.publish("dragendGlobal")
       }),
       done: function(t, e) {
        return $.publish("user:update", e.result)
       },
       fail: osu.fileuploadFailCallback(this.$button),
       complete: function(t) {
        return function() {
         return t.main[0].classList.remove("js-account-edit-avatar--saving")
        }
       }(this)
      })
     }, e.prototype.overlayEnd = function() {
      if (this.isAvailable) return this.main[0].classList.remove("js-account-edit-avatar--start")
     }, e.prototype.overlayEnter = function() {
      return null != this.dragging ? this.dragging : this.dragging = !0
     }, e.prototype.overlayHover = function() {
      if (this.dragging) return this.main[0].classList.add("js-account-edit-avatar--hover"), Timeout.clear(this.overlayLeaveTimeout), this.overlayLeaveTimeout = Timeout.set(100, this.overlayLeave)
     }, e.prototype.overlayLeave = function() {
      return this.dragging = null, this.main[0].classList.remove("js-account-edit-avatar--hover")
     }, e.prototype.overlayStart = function() {
      if (this.isAvailable) return this.main[0].classList.add("js-account-edit-avatar--start")
     }, e.prototype.rollback = function() {
      if (this.isAvailable) return this.isAvailable = !1, this.$button().fileupload("destroy")
     }, e
    }()
   }).call(window)
  },
  "Ny+b": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.TurbolinksUjs = function() {
     function e() {
      this.record = t(this.record, this), this.abort = t(this.abort, this), this.xhr = [], $(document).on("ajax:beforeSend", this.record), $(document).on("turbolinks:before-cache", this.abort)
     }
     return e.prototype.abort = function() {
      var t, e;
      for (t = []; e = this.xhr.pop();) t.push(null != e ? e.abort() : void 0);
      return t
     }, e.prototype.record = function(t, e) {
      return this.xhr.push(e)
     }, e
    }()
   }).call(window)
  },
  NzAu: function(t, e) {
   t.exports = ReactDOMFactories
  },
  Os89: function(t, e) {
   (function() {
    $(document).on("click", ".js-spoilerbox__link", (function(t) {
     return t.preventDefault(), $(t.target).closest(".js-spoilerbox").toggleClass("js-spoilerbox--open"), osu.pageChange()
    }))
   }).call(window)
  },
  PBOi: function(t, e) {
   (function() {
    var t = function(t, e) {
      return function() {
       return t.apply(e, arguments)
      }
     },
     e = {}.hasOwnProperty;
    this.ChangelogChart = function() {
     function i(e) {
      var i;
      this.resize = t(this.resize, this), this.positionTooltip = t(this.positionTooltip, this), this.moveTooltip = t(this.moveTooltip, this), this.hideTooltip = t(this.hideTooltip, this), this.showTooltip = t(this.showTooltip, this), this.options = {
       scales: {
        x: d3.scaleTime(),
        y: d3.scaleLinear(),
        class: d3.scaleOrdinal()
       }
      }, this.area = d3.select(e), this.area.classed("changelog-chart", !0), this.svg = this.area.append("svg"), this.svgWrapper = this.svg.append("g"), this.areaFunction = d3.area().curve(d3.curveMonotoneX).x((i = this, function(t) {
       return i.options.scales.x(t.data.date)
      })).y1(function(t) {
       return function(e) {
        return t.options.scales.y(e[1])
       }
      }(this)).y0(function(t) {
       return function(e, i) {
        return t.options.scales.y(e[0])
       }
      }(this)), this.hoverArea = this.svg.append("rect").classed("changelog-chart__hover-area", !0).on("mouseout", this.hideTooltip).on("mousemove", this.moveTooltip), this.tooltipArea = this.area.append("div").classed("changelog-chart__tooltip-area", !0), this.tooltipContainer = this.tooltipArea.append("div").classed("changelog-chart__tooltip-container", !0).attr("data-visibility", "hidden"), this.tooltipContainer.append("div").classed("changelog-chart__tooltip-line", !0), this.tooltip = this.tooltipContainer.append("div").classed("changelog-chart__tooltip", !0), this.tooltipName = this.tooltip.append("div"), this.tooltipUserCount = this.tooltip.append("div").classed("changelog-chart__text changelog-chart__text--user-count", !0), this.tooltipDate = this.tooltip.append("div").classed("changelog-chart__text changelog-chart__text--date", !0), this.tooltipContainer.append("div").classed("changelog-chart__tooltip-line", !0), this.tooltipLine = this.tooltipContainer.selectAll(".changelog-chart__tooltip-line")
     }
     return i.prototype.loadData = function() {
      var t, e, i, n;
      return this.config = osu.parseJson("json-chart-config"), t = (i = this.normalizeData(this.config.build_history)).data, e = i.hasData, n = d3.stack().keys(this.config.order).value((function(t, e) {
       return null != t[e] ? t[e].normalized : 0
      })), this.data = n(t), this.hasData = null != this.config.build_history && this.config.build_history.length > 0 && e, this.resize()
     }, i.prototype.setDimensions = function() {
      var t;
      return t = this.area.node().getBoundingClientRect(), this.width = t.width, this.height = t.height
     }, i.prototype.setSvgSize = function() {
      return this.svg.attr("width", this.width).attr("height", this.height)
     }, i.prototype.setHoverAreaSize = function() {
      return this.hoverArea.attr("width", this.width).attr("height", this.height)
     }, i.prototype.setScalesRange = function() {
      var t, e, i;
      return this.options.scales.x.range([0, this.width]).domain([null != (t = _.first(this.data[0])) ? t.data.date : void 0, null != (e = _.last(this.data[0])) ? e.data.date : void 0]), this.options.scales.y.range([0, this.height]).domain([0, 1]), this.options.scales.class.range(_.map(this.config.order, (i = this, function(t, e) {
       return null != i.config.stream_name ? i.config.stream_name + "-build-" + e % 7 : _.kebabCase(t)
      }))).domain(this.config.order)
     }, i.prototype.drawLines = function() {
      return this.svgWrapper.selectAll("g").data(this.data).enter().append("path").attr("class", (t = this, function(e) {
       return "changelog-chart__area changelog-chart__area--" + t.options.scales.class(e.key)
      })).attr("d", this.areaFunction);
      var t
     }, i.prototype.showTooltip = function() {
      return Fade.in(this.tooltipContainer.node())
     }, i.prototype.hideTooltip = function() {
      return Fade.out(this.tooltipContainer.node())
     }, i.prototype.moveTooltip = function() {
      var t;
      return t = d3.mouse(this.hoverArea.node()), this.x = this.options.scales.x.invert(t[0]), this.y = t[1] / this.height, this.showTooltip(), Timeout.clear(this._autoHideTooltip), this._autoHideTooltip = Timeout.set(3e3, this.hideTooltip), this.positionTooltip()
     }, i.prototype.positionTooltip = function() {
      var t, e, i, n, s, r, o, a, u, l, c, h, d, p, f;
      if (p = this.x, f = this.y, u = d3.bisector((function(t) {
        return t.data.date
       })).left(this.data[0], p)) {
       for (s = r = 0, a = (l = this.data).length; r < a; s = ++r)
        if (f <= (n = l[s])[u][1] && null != n[u].data[n.key]) {
         i = s, e = n.key, o = this.options.scales.class(e);
         break
        } return t = this.options.scales.x(p), this.tooltipName.attr("class", "changelog-chart__text changelog-chart__text--name changelog-chart__text--" + o).text(e), this.tooltipUserCount.text(osu.formatNumber(this.data[i][u].data[e].user_count)), this.tooltipDate.text(this.data[i][u].data.date_formatted), h = (d = t - (c = this.tooltip.node().getBoundingClientRect().width) / 2) < 0 ? 0 : d + c > this.width ? this.width - c : d, this.tooltip.style("transform", "translateX(" + h + "px)"), this.tooltipLine.style("transform", "translateX(" + t + "px)")
      }
     }, i.prototype.resize = function() {
      if (this.area.classed("hidden", !this.hasData), this.hasData) return this.setDimensions(), this.setScalesRange(), this.setSvgSize(), this.setHoverAreaSize(), this.drawLines(), this.positionTooltip()
     }, i.prototype.normalizeData = function(t) {
      var i, n, s, r, o, a, u, l, c;
      return o = null, n = null, {
       data: function() {
        var h, d, p, f;
        for (u in f = [], p = _.groupBy(t, "created_at"))
         if (e.call(p, u)) {
          for (c = p[u], 0 === (a = _.sumBy(c, "user_count")) ? (null != o && (i = _.find(c, {
            label: o
           })), null == i && (i = _.last(c), o = i.label), i.user_count = 1, a = 1) : null == n && (n = !0), s = moment(c[0].created_at), r = {
            created_at: u,
            date: s.toDate(),
            date_formatted: s.format("YYYY/MM/DD")
           }, h = 0, d = c.length; h < d; h++)(l = c[h]).normalized = l.user_count / a, r[l.label] = l;
          f.push(r)
         } return f
       }(),
       hasData: n
      }
     }, i
    }()
   }).call(window)
  },
  Q9e0: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.StickyFooter = function() {
     function e() {
      this.stickOrUnstick = t(this.stickOrUnstick, this), this.stickMarker = document.getElementsByClassName("js-sticky-footer"), this.permanentFixedFooter = document.getElementsByClassName("js-permanent-fixed-footer"), $(window).on("throttled-scroll throttled-resize", this.stickOrUnstick), $.subscribe("stickyFooter:check", this.stickOrUnstick), $(document).on("turbolinks:load osu:page:change", this.stickOrUnstick)
     }
     return e.prototype.stickOrUnstick = function() {
      var t, e, i, n, s;
      if (0 !== this.stickMarker.length) {
       for (t = window.innerHeight - this.permanentFixedFooter[0].offsetHeight, e = 0, i = (s = this.stickMarker).length; e < i; e++)
        if ("1" !== (n = s[e]).getAttribute("data-sticky-footer-disabled") && n.getBoundingClientRect().top >= t) return void $.publish("stickyFooter", n.getAttribute("data-sticky-footer-target"));
       return $.publish("stickyFooter")
      }
     }, e.prototype.markerCheckEnabled = function(t) {
      return "1" === t.getAttribute("data-sticky-footer-disabled")
     }, e.prototype.markerDisable = function(t) {
      return t.setAttribute("data-sticky-footer-disabled", "1")
     }, e.prototype.markerEnable = function(t) {
      return t.setAttribute("data-sticky-footer-disabled", "")
     }, e
    }()
   }).call(window)
  },
  RgQJ: function(t, e) {
   (function() {
    this.BeatmapsetPageHash = function() {
     function t() {}
     return t.parse = function(t) {
      var e, i, n;
      return {
       playmode: "" !== (i = (n = t.slice(1).split("/"))[0]) ? i : void 0,
       beatmapId: null != (e = n[1]) ? parseInt(e, 10) : void 0
      }
     }, t.generate = function(t) {
      var e, i;
      return e = t.beatmap, i = t.mode, null != e ? "#" + e.mode + "/" + e.id : "#" + i
     }, t
    }()
   }).call(window)
  },
  T580: function(t, e) {
   t.exports = function(t, e, i) {
    return ((i = window.getComputedStyle) ? i(t) : t.currentStyle)[e.replace(/-(\w)/gi, (function(t, e) {
     return e.toUpperCase()
    }))]
   }
  },
  TgbU: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.AccountEdit = function() {
     function e() {
      this.update = t(this.update, this), this.abortUpdate = t(this.abortUpdate, this), this.saving = t(this.saving, this), this.saved = t(this.saved, this), this.clearState = t(this.clearState, this), this.ajaxSaved = t(this.ajaxSaved, this), this.ajaxSaving = t(this.ajaxSaving, this), this.ajaxError = t(this.ajaxError, this), this.initializeUpdate = t(this.initializeUpdate, this), $(document).on("input change", ".js-account-edit", this.initializeUpdate), $(document).on("ajax:error", ".js-account-edit", this.ajaxError), $(document).on("ajax:send", ".js-account-edit", this.ajaxSaving), $(document).on("ajax:success", ".js-account-edit", this.ajaxSaved)
     }
     return e.prototype.initializeUpdate = function(t) {
      var e;
      if ("1" === (e = t.currentTarget).dataset.accountEditAutoSubmit) return this.abortUpdate(e), this.saving(e), null == e.debouncedUpdate && (e.debouncedUpdate = _.debounce(this.update, 1e3)), e.debouncedUpdate(e)
     }, e.prototype.ajaxError = function(t) {
      return this.clearState(t.currentTarget)
     }, e.prototype.ajaxSaving = function(t) {
      return this.saving(t.currentTarget)
     }, e.prototype.ajaxSaved = function(t) {
      return this.saved(t.currentTarget)
     }, e.prototype.clearState = function(t) {
      return t.dataset.accountEditState = ""
     }, e.prototype.getValue = function(t) {
      var e, i, n, s, r, o, a;
      if ("array" === t.dataset.accountEditType)
       for (r = null, a = [""], i = 0, s = (o = t.querySelectorAll("input")).length; i < s; i++)(e = o[i]).checked && a.push(e.value);
      else r = t.dataset.lastValue, a = "checkbox" === (n = t.querySelector(".js-account-edit__input")).type ? n.checked : n.value.trim();
      return {
       value: a,
       prevValue: r
      }
     }, e.prototype.saved = function(t) {
      return t.dataset.accountEditState = "saved", t.savedTimeout = Timeout.set(3e3, (e = this, function() {
       return e.clearState(t)
      }));
      var e
     }, e.prototype.saving = function(t) {
      return t.dataset.accountEditState = "saving"
     }, e.prototype.abortUpdate = function(t) {
      var e;
      return Timeout.clear(t.savedTimeout), null != (e = t.updating) && e.abort(), this.clearState(t)
     }, e.prototype.update = function(t) {
      var e, i, n, s, r, o, a, u, l, c;
      return (l = (r = this.getValue(t)).value) === (s = r.prevValue) ? this.clearState(t) : (t.dataset.lastValue = l, u = null != (o = t.dataset.url) ? o : laroute.route("account.update"), i = t.querySelector(".js-account-edit__input"), e = null != (a = t.dataset.field) ? a : i.name, t.updating = $.ajax(u, {
       method: "PUT",
       data: (n = {}, n["" + e] = l, n)
      }).done((c = this, function() {
       return c.saved(t), $(t).trigger("ajax:success")
      })).fail(function(e) {
       return function(i, n) {
        if ("abort" !== n) return t.lastValue = s, e.clearState(t), $(t).trigger("ajax:error", [i, n])
       }
      }(this)))
     }, e
    }()
   }).call(window)
  },
  U4GN: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Nav2 = function() {
     function e(e) {
      this.clickMenu = e, this.showMenuBg = t(this.showMenuBg, this), this.loginBoxVisible = t(this.loginBoxVisible, this), this.autoMobileNav = t(this.autoMobileNav, this), this.autoCenterPopup = t(this.autoCenterPopup, this), this.menuBg = document.getElementsByClassName("js-nav2--menu-bg"), $.subscribe("click-menu:current", this.autoCenterPopup), $.subscribe("click-menu:current", this.autoMobileNav), $.subscribe("menu:current", this.showMenuBg)
     }
     return e.prototype.autoCenterPopup = function(t, e) {
      var i, n, s, r, o, a, u, l, c, h, d;
      for (h = e.target, this.currentMenu = h, $(window).off("throttled-resize.nav2-center-popup"), r = 0, o = (l = document.querySelectorAll(".js-nav2--centered-popup")).length; r < o; r++) null != (i = (u = l[r]).closest(".js-click-menu")) && (i.dataset.clickMenuId === this.currentMenu ? (u.classList.remove("hidden"), n = u, a = document.querySelector(".js-click-menu[data-click-menu-target='" + this.currentMenu + "']")) : u.classList.add("hidden"));
      if (null != n) return d = this, s = function() {
       return d.centerPopup(n, a)
      }, $(window).on("throttled-resize.nav2-center-popup", s), this.loginBoxVisible() && osu.pageChangeImmediate(), s(), null != (c = n.querySelector(".js-nav2--autofocus")) ? c.focus() : void 0
     }, e.prototype.autoMobileNav = function(t, e) {
      var i, n, s, r;
      return i = e.previousTree, n = e.target, s = e.tree, "mobile-menu" === n && (this.clickMenu.show("mobile-nav"), Timeout.set(0, (r = this, function() {
       return $(r.clickMenu.menu("mobile-menu")).finish().slideDown(150)
      }))), -1 !== s.indexOf("mobile-menu") ? Blackout.show() : -1 !== i.indexOf("mobile-menu") ? (Blackout.hide(), Timeout.set(0, function(t) {
       return function() {
        return $(t.clickMenu.menu("mobile-menu")).finish().slideUp(150)
       }
      }(this))) : void 0
     }, e.prototype.centerPopup = function(t, e) {
      var i, n, s, r, o, a, u, l, c, h, d, p;
      return l = t.getBoundingClientRect(), s = t.parentElement.getBoundingClientRect(), p = e.getBoundingClientRect(), i = document.body.getBoundingClientRect().width - 5, d = p.width / 2, r = l.width / 2, n = (u = (o = s.left) + (a = p.left + d - o - r)) < 0 ? -1 * p.left : (h = u + l.width, (c = Math.round(h - i)) > 0 ? a - c : a), n = Math.floor(n), t.style.transform = "translateX(" + n + "px)"
     }, e.prototype.loginBoxVisible = function() {
      return "nav2-login-box" === this.currentMenu
     }, e.prototype.showMenuBg = function(t, e) {
      var i;
      return i = _.startsWith(e, "nav2-menu-popup-"), Fade.toggle(this.menuBg[0], i)
     }, e
    }()
   }).call(window)
  },
  UaOV: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.NavButton = function() {
     function e() {
      this.hideOrShow = t(this.hideOrShow, this), this.load = t(this.load, this), this.containers = document.getElementsByClassName("js-nav-button--container"), this.items = document.getElementsByClassName("js-nav-button--item"), this.main = document.getElementsByClassName("js-nav-button"), addEventListener("turbolinks:load", this.load)
     }
     return e.prototype.load = function() {
      var t, e, i, n;
      if (this.listening || (this.listening = !0, $(window).on("throttled-resize", this.hideOrShow)), 0 !== this.main.length) {
       for (this.itemWidth = this.items[0].offsetWidth, this.defaultWidth = 0, e = 0, i = (n = this.containers).length; e < i; e++) t = n[e], this.defaultWidth += t.offsetWidth;
       return this.hideOrShow()
      }
     }, e.prototype.hideOrShow = function() {
      var t, e, i, n, s, r, o, a, u;
      if (0 !== this.main.length) {
       for (t = this.main[0].offsetWidth, e = this.defaultWidth, n = 0, r = (a = this.items).length; n < r; n++) a[n].classList.remove("hidden");
       if (t < e)
        for (s = 0, o = (u = this.items).length; s < o; s++)
         if (i = u[s], e -= this.itemWidth, i.classList.add("hidden"), t >= e) return
      }
     }, e
    }()
   }).call(window)
  },
  VAqo: function(t, e) {
   (function() {
    var t, e = {}.hasOwnProperty;
    t = function(t) {
     var e;
     return e = parseInt(t, 10), _.isFinite(e) ? e : null
    }, this.BeatmapsetFilter = function() {
     function i() {}
     return i.castFromString = {
      mode: t,
      genre: t,
      language: t
     }, i.charToKey = {
      c: "general",
      m: "mode",
      s: "status",
      g: "genre",
      l: "language",
      e: "extra",
      r: "rank",
      played: "played",
      q: "query",
      sort: "sort"
     }, i.filtersFromUrl = function(t) {
      var i, n, s, r, o, a;
      for (i in r = new URL(t).searchParams, n = {}, o = this.charToKey) e.call(o, i) && (s = o[i], null != (a = r.get(i)) && 0 !== a.length && (this.castFromString[s] && (a = this.castFromString[s](a)), n[s] = a));
      return n
     }, i.keyToChar = function() {
      return null != this._keyToChar ? this._keyToChar : this._keyToChar = _.invert(this.charToKey)
     }, i.defaults = {
      general: "",
      extra: "",
      genre: null,
      language: null,
      mode: null,
      played: "any",
      query: "",
      rank: "",
      status: "leaderboard"
     }, i.expand = ["genre", "language", "extra", "rank", "played"], i.fillDefaults = function(t) {
      var e, n, s, r, o, a;
      for (a = {}, e = 0, s = (r = i.keys).length; e < s; e++) a[n = r[e]] = null != (o = t[n]) ? o : i.getDefault(t, n);
      return a
     }, i.getDefault = function(t, e) {
      var n, s;
      return i.defaults.hasOwnProperty(e) ? i.defaults[e] : "sort" === e ? (null != (n = t.query) ? n.trim().length : void 0) > 0 ? "relevance_desc" : "pending" === (s = t.status) || "graveyard" === s || "mine" === s ? "updated_desc" : "ranked_desc" : void 0
     }, i.getDefaults = function(t) {
      var e, n, s, r, o;
      for (o = {}, e = 0, s = (r = i.keys).length; e < s; e++) o[n = r[e]] = i.getDefault(t, n);
      return o
     }, i.keys = ["general", "extra", "genre", "language", "mode", "played", "query", "rank", "sort", "status"], i.queryParamsFromFilters = function(t) {
      var i, n, s;
      if (null == currentUser.id) return {};
      for (n in i = {}, t) e.call(t, n) && null != (s = t[n]) && this.getDefault(t, n) !== s && (i[this.keyToChar()[n]] = s);
      return i
     }, i.supporterRequired = function(t) {
      return _.reject(["played", "rank"], (e = this, function(i) {
       return _.isEmpty(t[i]) || t[i] === e.getDefault(t, i)
      }));
      var e
     }, i
    }()
   }).call(window)
  },
  WHzX: function(t, e) {
   (function() {
    this.Timeout = function() {
     function t() {}
     return t.clear = function(t) {
      return clearTimeout(t)
     }, t.set = function(t, e) {
      return setTimeout(e, t)
     }, t
    }()
   }).call(window)
  },
  WK7C: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.LandingUserStats = function() {
     function e() {
      var e;
      this.resize = t(this.resize, this), this.loadData = t(this.loadData, this), this.margin = {
       top: 40,
       right: 0,
       bottom: 0,
       left: 0
      }, this.peakR = 5, this.svgContainerOuter = d3.select(".js-landing-graph"), this.svgContainerOuter.selectAll("svg").remove(), this.svgContainerInner = this.svgContainerOuter.append("svg").attr("class", "landing-graph"), this.svg = this.svgContainerInner.append("g").attr("transform", "translate(" + this.margin.left + ", " + (this.margin.top + 1) + ")"), this.svgArea = this.svg.append("path").attr("class", "landing-graph__area"), this.svgPeakText = this.svg.append("text").attr("class", "landing-graph__text").attr("y", 2 * -this.peakR), this.svgPeakCircle = this.svg.append("circle").attr("class", "landing-graph__circle").attr("cy", 0).attr("r", this.peakR), this.scaleX = d3.scaleLinear(), this.scaleY = d3.scaleTime(), this.area = d3.area().curve(d3.curveBasis).x((e = this, function(t) {
       return e.scaleX(t.x)
      })).y0(function(t) {
       return function() {
        return t.height
       }
      }(this)).y1(function(t) {
       return function(e) {
        return t.scaleY(e.y)
       }
      }(this)), this.loadData(), this.resize()
     }
     return e.prototype.loadData = function() {
      if (this.data = osu.parseJson("json-stats"), !_.isEmpty(this.data)) return this.maxElem = _.maxBy(this.data, (function(t) {
       return t.y
      })), this.scaleX.domain(d3.extent(this.data, (function(t) {
       return t.x
      }))), this.scaleY.domain([0, d3.max(this.data, (function(t) {
       return t.y
      }))]), this.svgPeakText.text(osu.trans("home.landing.peak", {
       count: osu.formatNumber(this.maxElem.y)
      })), this.peakTextLength = this.svgPeakText.node().getComputedTextLength()
     }, e.prototype.resize = function() {
      var t;
      if (!_.isEmpty(this.data)) return this.width = parseInt(this.svgContainerOuter.style("width")) - this.margin.left - this.margin.right, this.height = parseInt(this.svgContainerOuter.style("height")) - this.margin.top - this.margin.bottom, this.scaleX.range([0, this.width]), this.scaleY.range([this.height, 0]), this.svgContainerInner.attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom), this.svgArea.datum(this.data).attr("d", this.area), this.svgPeakCircle.attr("cx", this.scaleX(this.maxElem.x)), this.svgPeakText.attr("x", (t = this, function() {
       var e;
       return e = t.scaleX(t.maxElem.x) + 2 * t.peakR, t.peakTextLength + e > t.width ? t.scaleX(t.maxElem.x) - (t.peakTextLength + 2 * t.peakR) : e
      }))
     }, e
    }()
   }).call(window)
  },
  XZkR: function(t, e) {
   (function() {
    $.ajaxPrefilter((function(t) {
     if (t.crossDomain) return t.contents.script = !1
    }))
   }).call(window)
  },
  Y4VH: function(t, e) {
   (function() {
    this.Hits = function() {
     function t() {}
     return t.generate = function(t) {
      var e, i;
      return i = t.score, {
       header: (e = "mania" === t.playmode ? ["count_geki", "count_300", "count_katu", "count_100", "count_50"] : ["count_300", "count_100", "count_50"]).map((function(t) {
        return osu.trans("common.score_count." + t)
       })).join("/"),
       values: e.map((function(t) {
        return osu.formatNumber(i.statistics[t])
       })).join("/")
      }
     }, t
    }()
   }).call(window)
  },
  YEnZ: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.BeatmapPack = function() {
     function e(e) {
      var i;
      this.slideDown = t(this.slideDown, this), this.close = t(this.close, this), this.open = t(this.open, this), this.onClick = t(this.onClick, this), this.el = e, this.packId = e.dataset.packId, this.packBody = this.el.querySelector(".js-accordion__item-body"), this.expander = this.el.querySelector(".js-accordion__item-header"), this.busy = !1, this.isCurrent = this.el.classList.contains("js-accordion__item--expanded"), $(".js-accordion").on("beatmappack:clicked", this.onClick), $(this.expander).on("click", (i = this, function(t) {
       return t.preventDefault(), $(i.el).trigger("beatmappack:clicked", i.packId)
      }))
     }
     return e.initialize = function() {
      var t, i, n, s, r;
      for (r = [], i = 0, n = (s = document.querySelectorAll(".js-beatmap-pack")).length; i < n; i++) t = s[i], r.push(new e(t));
      return r
     }, e.prototype.onClick = function(t, e) {
      return t.stopPropagation(), this.isCurrent || this.packId !== e ? this.close() : this.open()
     }, e.prototype.open = function() {
      var t, e;
      if (this.isCurrent = !0, !this.busy) return this.nextFrame((e = this, function() {
       return $(e.el).addClass("js-accordion__item--expanded")
      })), null != (t = this.packBody.innerHTML) && t.length ? this.isCurrent ? this.slideDown() : void 0 : (this.busy = !0, this.getBeatmapPackItem(this.packId).done(function(t) {
       return function(e) {
        return t.nextFrame((function() {
         if (t.packBody.innerHTML = e, t.isCurrent) return t.slideDown()
        }))
       }
      }(this)).fail(osu.ajaxError).always(function(t) {
       return function() {
        return t.busy = !1
       }
      }(this)))
     }, e.prototype.close = function() {
      var t;
      if (this.isCurrent) return this.isCurrent = !1, this.nextFrame((t = this, function() {
       return t.packBody.style.height = "0", $(t.el).removeClass("js-accordion__item--expanded")
      }))
     }, e.prototype.getBeatmapPackItem = function(t) {
      return $.get(laroute.route("packs.raw", {
       pack: t
      }))
     }, e.prototype.slideDown = function() {
      var t, e;
      return this.packBody.style.height = "", t = this.packBody.getBoundingClientRect(), this.packBody.style.height = "0", this.nextFrame((e = this, function() {
       return e.packBody.style.height = t.height + "px"
      }))
     }, e.prototype.nextFrame = function(t) {
      return window.requestAnimationFrame(t)
     }, e
    }()
   }).call(window)
  },
  YLtl: function(t, e) {
   t.exports = _
  },
  aP1p: function(t, e) {
   (function() {
    var t = {}.hasOwnProperty;
    this.BeatmapHelper = function() {
     function e() {}
     return e.default = function(t) {
      var i, n, s, r, o, a, u, l;
      if (n = t.group, s = t.items, a = t.mode, null != s) return null != (l = _.findLast(s, (function(t) {
       return null == t.deleted_at && !t.convert
      }))) ? l : _.last(s);
      if (null != n)
       for (r = 0, o = (u = null != a ? [a] : e.modes).length; r < o; r++)
        if (a = u[r], null != (i = e.default({
          items: n[a]
         }))) return i
     }, e.find = function(t) {
      var i, n, s, r, o, a, u;
      for (i = t.group, n = t.id, r = 0, o = (u = null != (a = t.mode) ? [a] : e.modes).length; r < o; r++)
       if (a = u[r], null != (s = _.find(i[a], {
         id: n
        }))) return s
     }, e.getDiffRating = function(t) {
      return t < 2 ? "easy" : t < 2.7 ? "normal" : t < 4 ? "hard" : t < 5.3 ? "insane" : t < 6.5 ? "expert" : "expert-plus"
     }, e.group = function(i) {
      var n, s, r;
      for (r in n = _.groupBy(i, "mode")) t.call(n, r) && (s = n[r], n[r] = e.sort(s));
      return n
     }, e.modes = ["osu", "taiko", "fruits", "mania"], e.sort = function(t) {
      return "mania" === t[0].mode ? _.orderBy(t, ["convert", "cs", "difficulty_rating"], ["desc", "asc", "asc"]) : _.orderBy(t, ["convert", "difficulty_rating"], ["desc", "asc"])
     }, e
    }()
   }).call(window)
  },
  auMk: function(t, e) {
   (function() {
    this.Polyfills = function() {
     function t() {
      this.customEvent(), this.localStorage(), this.mathTrunc(), this.composedPath()
     }
     return t.prototype.composedPath = function() {
      if ("function" != typeof Event.prototype.composedPath) return Event.prototype.composedPath = function() {
       var t, e;
       for (e = this.target, t = []; null != e.parentNode;) t.push(e), e = e.parentNode;
       return t.push(document, window), t
      }
     }, t.prototype.customEvent = function() {
      var t;
      if ("function" != typeof CustomEvent) return (t = function(t, e) {
       var i;
       return null == e && (e = {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
       }), (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
      }).prototype = window.Event.prototype, window.CustomEvent = t
     }, t.prototype.localStorage = function() {
      var t;
      try {
       return window.localStorage.setItem("_test", "1"), window.localStorage.removeItem("_test")
      } catch (e) {
       return t = new DumbStorage, window.localStorage = t, window.localStorage.__proto__ = t
      }
     }, t.prototype.mathTrunc = function() {
      return null != Math.trunc ? Math.trunc : Math.trunc = function(t) {
       return t - t % 1
      }
     }, t
    }()
   }).call(window)
  },
  byFe: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumAutoClick = function() {
     function e() {
      var e;
      this.previousClick = t(this.previousClick, this), this.onScroll = t(this.onScroll, this), this.nextClick = t(this.nextClick, this), this._triggerDistance = 1200, this.nextLink = document.getElementsByClassName("js-forum__posts-show-more--next"), this.previousLink = document.getElementsByClassName("js-forum__posts-show-more--previous"), $(window).on("throttled-scroll", _.throttle(this.onScroll, 1e3)), $(document).on("turbolinks:load osu:page:change", (e = this, function() {
       return Timeout.set(1e3, e.onScroll)
      }))
     }
     return e.prototype.commonClick = function(t) {
      if (0 !== t.getBoundingClientRect().height && "1" !== t.getAttribute("data-failed")) return t.click()
     }, e.prototype.nextClick = function() {
      if (0 !== this.nextLink.length && !(this.nextLink[0].getBoundingClientRect().top > document.documentElement.clientHeight + this._triggerDistance)) return this.commonClick(this.nextLink[0])
     }, e.prototype.onScroll = function() {
      return this.previousClick(), this.nextClick()
     }, e.prototype.previousClick = function() {
      if (0 !== this.previousLink.length && !(this.previousLink[0].getBoundingClientRect().top < -this._triggerDistance)) return this.commonClick(this.previousLink[0])
     }, e
    }()
   }).call(window)
  },
  cDcd: function(t, e) {
   t.exports = React
  },
  dbKQ: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.StatusMap = function() {
     function e(e) {
      this.update = t(this.update, this), this.circleSize = 8, this.svg = d3.select(e).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 1350 637").attr("preserveAspectRatio", "xMinYMin"), this.svg.append("svg:image").attr("xlink:href", "/images/backgrounds/world_map.svg").attr("width", 1350).attr("height", 597).attr("x", 0).attr("y", 20)
     }
     return e.prototype.update = function(t) {
      var e, i, n, s;
      for (this.svg.selectAll("circle").remove(), this.svg.selectAll("text").remove(), n = [], e = 0, i = t.length; e < i; e++) s = t[e], this.svg.append("circle").attr("r", this.circleSize).attr("cx", s.x).attr("cy", s.y).classed("status-map__circle status-map__circle--" + s.state, !0), this.svg.append("circle").attr("r", this.circleSize).attr("cx", s.x).attr("cy", s.y).classed("status-map__circle status-map__circle--" + s.state, !0).on("mouseover", function(t) {
       return function() {
        var e;
        return (e = d3.select(d3.event.target)).transition().duration(1e3).attr("r", t.circleSize + 20).style("opacity", 0).on("end", (function() {
         return e.attr("r", t.circleSize).style("opacity", 1)
        }))
       }
      }(this)), this.svg.append("text").text(s.name).attr("x", s.x).attr("y", s.y - 40).classed("status-map__text", !0), n.push(this.svg.append("text").text(s.players + " players " + ("down" === s.state ? "offline" : "online")).attr("x", s.x).attr("y", s.y - 20).classed("status-map__text", !0));
      return n
     }, e
    }()
   }).call(window)
  },
  exjS: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.DumbStorage = function() {
     function e() {
      this.setItem = t(this.setItem, this), this.removeItem = t(this.removeItem, this), this.getItem = t(this.getItem, this), this.clear = t(this.clear, this), this._data = {}
     }
     return e.prototype.clear = function() {
      return this._data = {}
     }, e.prototype.getItem = function(t) {
      return this._data.hasOwnProperty(t) ? this._data[t] : null
     }, e.prototype.removeItem = function(t) {
      return delete this._data[t]
     }, e.prototype.setItem = function(t, e) {
      return this._data[t] = String(e)
     }, e
    }()
   }).call(window)
  },
  faye: function(t, e) {
   t.exports = ReactDOM
  },
  gfK4: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.SyncHeight = function() {
     function e() {
      this.sync = t(this.sync, this), this.onResize = t(this.onResize, this), this.observe = t(this.observe, this), this.targets = document.getElementsByClassName("js-sync-height--target"), this.references = document.getElementsByClassName("js-sync-height--reference"), $(document).on("turbolinks:load osu:page:change", this.sync), $(window).on("throttled-resize", this.sync), this.observe()
     }
     return e.prototype.observe = function() {
      var t;
      return t = {
       attributes: !0,
       subtree: !0
      }, this.observer = new MutationObserver(this.onResize), this.observer.observe(document, t)
     }, e.prototype.onResize = function(t) {
      var e, i;
      for (e = 0, i = t.length; e < i; e++)
       if ("TEXTAREA" === t[e].target.tagName) return this.sync()
     }, e.prototype.sync = function() {
      var t, e, i, n, s, r, o, a, u, l, c;
      for (e = {}, i = 0, s = (o = this.references).length; i < s; i++) e[(u = o[i]).getAttribute("data-sync-height-target")] = u.offsetHeight;
      for (l = [], n = 0, r = (a = this.targets).length; n < r; n++) null != (t = e[(c = a[n]).getAttribute("data-sync-height-id")]) ? l.push(c.style.minHeight = t + "px") : l.push(void 0);
      return l
     }, e
    }()
   }).call(window)
  },
  hTA1: function(t, e) {
   (function() {
    var t;
    null == this.polyfills && (this.polyfills = new Polyfills), Turbolinks.setProgressBarDelay(0), Lang.setLocale(this.currentLocale), jQuery.timeago.settings.allowFuture = !0, $(document).on("turbolinks:request-start", LoadingOverlay.show), $(document).on("turbolinks:request-end", LoadingOverlay.hide), $(document).on("submit", "form", (function(t) {
     if ("0" !== t.currentTarget.dataset.loadingOverlay) return LoadingOverlay.show()
    })), $(document).on("turbolinks:load", (function() {
     return BeatmapPack.initialize(), StoreSupporterTag.initialize(), StoreCheckout.initialize()
    })), null == this.currentUserObserver && (this.currentUserObserver = new CurrentUserObserver), null == this.throttledWindowEvents && (this.throttledWindowEvents = new ThrottledWindowEvents), null == this.syncHeight && (this.syncHeight = new SyncHeight), null == this.stickyHeader && (this.stickyHeader = new StickyHeader), null == this.accountEdit && (this.accountEdit = new AccountEdit), null == this.accountEditAvatar && (this.accountEditAvatar = new AccountEditAvatar), null == this.accountEditBlocklist && (this.accountEditBlocklist = new AccountEditBlocklist), null == this.beatmapsetDownloadObserver && (this.beatmapsetDownloadObserver = new BeatmapsetDownloadObserver), null == this.changelogChartLoader && (this.changelogChartLoader = new ChangelogChartLoader), null == this.checkboxValidation && (this.checkboxValidation = new CheckboxValidation), null == this.clickMenu && (this.clickMenu = new _exported.ClickMenu), null == this.fancyGraph && (this.fancyGraph = new FancyGraph), null == this.formClear && (this.formClear = new FormClear), null == this.formError && (this.formError = new FormError), null == this.formPlaceholderHide && (this.formPlaceholderHide = new FormPlaceholderHide), null == this.formToggle && (this.formToggle = new FormToggle), null == this.forum && (this.forum = new Forum), null == this.forumAutoClick && (this.forumAutoClick = new ForumAutoClick), null == this.forumCover && (this.forumCover = new ForumCover), null == this.forumPoll && (this.forumPoll = new _exported.ForumPoll(this)), null == this.forumPostPreview && (this.forumPostPreview = new ForumPostPreview), null == this.forumTopicTitle && (this.forumTopicTitle = new ForumTopicTitle), null == this.forumTopicWatchAjax && (this.forumTopicWatchAjax = new ForumTopicWatchAjax), null == this.gallery && (this.gallery = new Gallery), null == this.globalDrag && (this.globalDrag = new GlobalDrag), null == this.landingGraph && (this.landingGraph = new LandingGraph), null == this.menu && (this.menu = new Menu), null == this.mobileToggle && (this.mobileToggle = new _exported.MobileToggle), null == this.navButton && (this.navButton = new NavButton), null == this.osuAudio && (this.osuAudio = new OsuAudio), null == this.osuLayzr && (this.osuLayzr = new OsuLayzr), null == this.postPreview && (this.postPreview = new PostPreview), null == this.scale && (this.scale = new Scale), null == this.search && (this.search = new Search), null == this.stickyFooter && (this.stickyFooter = new StickyFooter), null == this.timeago && (this.timeago = new Timeago), null == this.tooltipBeatmap && (this.tooltipBeatmap = new TooltipBeatmap), null == this.tooltipDefault && (this.tooltipDefault = new TooltipDefault), null == this.turbolinksReload && (this.turbolinksReload = new _exported.TurbolinksReload), null == this.userLogin && (this.userLogin = new UserLogin), null == this.userVerification && (this.userVerification = new UserVerification), null == this.formConfirmation && (this.formConfirmation = new FormConfirmation(this.formError)), null == this.forumPostsSeek && (this.forumPostsSeek = new ForumPostsSeek(this.forum)), null == this.forumTopicPostJump && (this.forumTopicPostJump = new ForumTopicPostJump(this.forum)), null == this.forumTopicReply && (this.forumTopicReply = new ForumTopicReply({
     forum: this.forum,
     forumPostPreview: this.forumPostPreview,
     stickyFooter: this.stickyFooter
    })), null == this.nav2 && (this.nav2 = new Nav2(this.clickMenu)), null == this.osuEnchant && (this.osuEnchant = new _exported.Enchant(this, this.turbolinksReload)), null == this.twitchPlayer && (this.twitchPlayer = new TwitchPlayer(this.turbolinksReload)), _exported.WindowVHPatcher.init(window), $(document).on("change", ".js-url-selector", (function(t) {
     return osu.navigate(t.target.value, "1" === t.target.dataset.keepScroll)
    })), $(document).on("keydown", (function(t) {
     if (27 === t.keyCode) return $.publish("key:esc")
    })), t = document.location.protocol + "//" + document.location.host, document.location.port && (t += ":" + document.location.port), t += "/", $.expr[":"].internal = function(e, i, n, s) {
     var r;
     return (r = $(e).attr("href") || "").substring(0, t.length) === t || -1 === r.indexOf(":")
    }
   }).call(window)
  },
  hjjs: function(t, e, i) {
   "use strict";
   i.r(e), i("XZkR"), i("Nqw+"), i("vqYE"), i("TgbU"), i("y0Iw"), i("0Sjo"), i("aP1p"), i("YEnZ"), i("0tzJ"), i("VAqo"), i("RgQJ"), i("oWhP"), i("FLFi"), i("PBOi"), i("6FbF"), i("wuZa"), i("exjS"), i("E+Th"), i("pAZq"), i("xHv7"), i("sWOL"), i("Kd0U"), i("pVrk"), i("t+h0"), i("byFe"), i("jepR"), i("orKb"), i("JER7"), i("ICEo"), i("6TQG"), i("pt+B"), i("o5lo"), i("E/7X"), i("BzC5"), i("tTWz"), i("Y4VH"), i("+3o9"), i("L6Lm"), i("WK7C"), i("2uEk"), i("FcZw"), i("icRW"), i("UaOV"), i("U4GN"), i("GXtz"), i("6Laf"), i("auMk"), i("MRAD"), i("GwZD"), i("upGs"), i("LgLm"), i("MWnb"), i("HZVD"), i("dbKQ"), i("Q9e0"), i("lPUA"), i("5ASV"), i("EhQP"), i("JXhK"), i("gfK4"), i("JYmG"), i("7mzp"), i("WHzX"), i("IBdx"), i("9put"), i("Ny+b"), i("EVQW"), i("Dzhp"), i("+U5f"), i("6Z8S"), i("yP+D"), i("kAex"), i("Os89"), i("K1Kf"), i("Go/u"), i("CFbt"), i("rEDz"), i("8DVv"), i("38ot"), i("HRtH"), i("5hXa"), i("snad"), i("sebX");
   const n = {
    in: t => {
     var e;
     null === (e = t) || void 0 === e || e.setAttribute("data-visibility", "visible")
    },
    isVisible: t => {
     var e;
     return "hidden" !== (null === (e = t) || void 0 === e ? void 0 : e.getAttribute("data-visibility"))
    },
    out: t => {
     var e;
     null === (e = t) || void 0 === e || e.setAttribute("data-visibility", "hidden")
    },
    toggle: (t, e) => {
     null != t && ((e = null != e ? e : !n.isVisible(t)) ? n.in(t) : n.out(t))
    }
   };
   var s = n;
   const r = "//platform.enchant.com";
   var o = i("0h6b");
   const a = "js-mobile-toggle--active";
   var u = function() {
     function t() {}
     return t.fetchApprovalLink = function(t) {
      return new Promise((function(e, i) {
       return $.post(laroute.route("payments.paypal.create"), {
        order_id: t
       }).done(e).fail((function(t) {
        return i({
         xhr: t
        })
       }))
      }))
     }, t
    }(),
    l = function() {
     function t() {}
     return t.promiseInit = function(e) {
      return Promise.all([t.fetchToken(e), t.fetchScript()]).then((function(i) {
       var n, s;
       return s = i[0], n = t.optionsWithToken(s), t.onXsollaReady(e), XPayStationWidget.init(n)
      }))
     }, t.fetchScript = function() {
      return new Promise((function(t, e) {
       if (!window.turbolinksReload.load("https://static.xsolla.com/embed/paystation/1.0.7/widget.min.js", t)) return t()
      }))
     }, t.fetchToken = function(t) {
      return new Promise((function(e, i) {
       return $.post(Object(o.route)("payments.xsolla.token"), {
        orderNumber: t
       }).done((function(t) {
        return 32 !== t.length ? i({
         message: "wrong token length"
        }) : e(t)
       })).fail((function(t) {
        return i({
         xhr: t
        })
       }))
      }))
     }, t.optionsWithToken = function(t) {
      return {
       access_token: t,
       sandbox: !1
      }
     }, t.onXsollaReady = function(t) {
      var e;
      return e = !1, XPayStationWidget.on(XPayStationWidget.eventTypes.STATUS_DONE, (function() {
       return e = !0
      })), XPayStationWidget.on(XPayStationWidget.eventTypes.CLOSE, (function() {
       if (e) return LoadingOverlay.show(), LoadingOverlay.show.flush(), window.location = Object(o.route)("payments.xsolla.completed", {
        foreignInvoice: t
       })
      }))
     }, t
    }(),
    c = function() {
     function t() {}
     return t.CHECKOUT_SELECTOR = ".js-store-checkout-button", t.initialize = function() {
      var e, i, n, s, r, o, a;
      for (n = {}, i = 0, s = (a = document.querySelectorAll(t.CHECKOUT_SELECTOR)).length; i < s; i++) switch (e = a[i], o = e.dataset.provider, r = e.dataset.orderNumber, o) {
       case "centili":
        n.centili = Promise.resolve();
        break;
       case "free":
        n.free = Promise.resolve();
        break;
       case "paypal":
        n.paypal = Promise.resolve();
        break;
       case "xsolla":
        n.xsolla = l.promiseInit(r)
      }
      return $(t.CHECKOUT_SELECTOR).on("click.checkout", (function(e) {
       var i, s, r;
       if (s = e.target.dataset, i = s.orderId, null != (o = s.provider)) return LoadingOverlay.show(), LoadingOverlay.show.flush(), null != (r = n[o]) ? r.then((function() {
        return window.osu.promisify($.post(laroute.route("store.checkout.store"), {
         provider: o,
         orderId: i
        }))
       })).then((function() {
        return t.startPayment(e.target.dataset)
       })).catch(t.handleError) : void 0
      }))
     }, t.startPayment = function(t) {
      var e, i, n;
      switch (e = t.orderId, i = t.provider, n = t.url, i) {
       case "centili":
        return new Promise((function(t) {
         return window.location.href = n
        }));
       case "free":
        return window.osu.promisify($.post(laroute.route("store.checkout.store", {
         orderId: e,
         provider: i
        })));
       case "paypal":
        return u.fetchApprovalLink(e).then((function(t) {
         return window.location.href = t
        }));
       case "xsolla":
        return new Promise((function(t) {
         return XPayStationWidget.open(), LoadingOverlay.hide(), t()
        }))
      }
     }, t.handleError = function(t) {
      var e;
      if (LoadingOverlay.hide(), !t.getResponseHeader || (e = t.getResponseHeader("Content-Type"), !_.startsWith(e, "application/javascript"))) return osu.ajaxError(null != t ? t.xhr : void 0)
     }, t
    }(),
    h = i("srfr"),
    d = i("LQV2"),
    p = i.n(d),
    f = i("cDcd"),
    m = i("faye");
   class g extends f.PureComponent {
    constructor(t) {
     super(t), this.eventId = `gallery-contest-${osu.uuid()}`, this.mainRef = f.createRef(), this.buttonState = () => {
      const t = this.button();
      return null != t && null != t.dataset.contestVoteMeta ? JSON.parse(t.dataset.contestVoteMeta) : {}
     }, this.buttonTitle = () => {
      if (!this.state.isLoading && !this.state.button.votingOver) return this.state.button.isSelected ? osu.trans("contest.voting.button.remove") : this.state.button.hasVote ? osu.trans("contest.voting.button.add") : osu.trans("contest.voting.button.used_up")
     }, this.isDisabled = () => this.state.isLoading || this.state.button.votingOver || !this.state.button.isSelected && !this.state.button.hasVote, this.loadingEnd = () => {
      this.setState({
       isLoading: !1
      }), this.syncState()
     }, this.loadingStart = () => {
      this.setState({
       isLoading: !0
      })
     }, this.mainClass = () => {
      let t = "pswp__button pswp__button--contest-vote js-gallery-extra";
      return this.state.button.isSelected && (t += " pswp__button--contest-vote-active"), this.isDisabled() && (t += " pswp__button--disabled"), t
     }, this.resetTooltip = () => {
      const t = this.mainRef.current;
      null != t && tooltipDefault.remove(t)
     }, this.syncState = () => {
      this.setState({
       button: this.buttonState()
      })
     }, this.vote = () => {
      if (this.isDisabled()) return;
      const t = this.button();
      null != t && t.click()
     }, this.state = {
      button: this.buttonState(),
      isLoading: !1
     }
    }
    componentDidMount() {
     $.subscribe(`contest:vote:click.${this.eventId}`, this.loadingStart), $.subscribe(`contest:vote:end.${this.eventId}`, this.loadingEnd), this.props.pswp.listen("afterChange", this.syncState)
    }
    componentDidUpdate() {
     this.resetTooltip()
    }
    componentWillUnmount() {
     $.unsubscribe(`.${this.eventId}`)
    }
    render() {
     return f.createElement("button", {
      ref: this.mainRef,
      className: this.mainClass(),
      onClick: this.vote,
      title: this.buttonTitle()
     }, f.createElement("span", {
      className: this.iconClass()
     }))
    }
    button() {
     if (null == this.props.pswp.currItem) return;
     const t = this.props.pswp.currItem.element.dataset.buttonId;
     return document.querySelector(`.js-contest-vote-button[data-button-id='${t}']`)
    }
    iconClass() {
     return this.state.isLoading ? "fas fa-sync fa-spin" : "fas fa-star"
    }
   }
   class v {
    constructor(t) {
     this.window = t, $(this.window).on("throttled-resize.windowVHPatch", this.handleResize), this.handleResize()
    }
    static init(t) {
     return null != this.instance ? this.instance : (this.instance = new v(t), this.instance)
    }
    handleResize() {
     const t = .01 * this.window.innerHeight;
     null !== this.window.document.documentElement && this.window.document.documentElement.style.setProperty("--vh", `${t}px`)
    }
   }
   const y = "js-extra-script";
   var b = i("bucr");
   null == window.Promise && (window.Promise = h.a), window.Fade = s, window._exported = {
    ClickMenu: class {
     constructor() {
      this.current = null, this.close = () => {
       this.show()
      }, this.hide = t => {
       0 === t.button && (osu.popupShowing() || null != this.current && ($(t.target).closest(".js-click-menu").length > 0 || this.show()))
      }, this.restoreSaved = () => {
       this.show(document.body.dataset.clickMenuCurrent)
      }, this.saveCurrent = () => {
       null == this.current ? delete document.body.dataset.clickMenuCurrent : document.body.dataset.clickMenuCurrent = this.current
      }, this.show = t => {
       var e, i, n;
       const r = this.tree();
       this.current = t;
       const o = this.tree(),
        a = document.querySelectorAll(".js-click-menu[data-click-menu-id]");
       let u = null,
        l = !1;
       for (const h of a) {
        if (!(h instanceof HTMLElement)) continue;
        const t = h.dataset.clickMenuId;
        null == t || -1 === o.indexOf(t) ? (s.out(h), h.classList.remove("js-click-menu--active"), null === (e = this.menuLink(t)) || void 0 === e || e.classList.remove("js-click-menu--active")) : (s.in(h), h.classList.add("js-click-menu--active"), null === (i = this.menuLink(t)) || void 0 === i || i.classList.add("js-click-menu--active"), l = !0, t === this.current && (u = h))
       }
       l || (this.current = null), $.publish("click-menu:current", {
        previousTree: r,
        target: this.current,
        tree: o
       });
       const c = null === (n = u) || void 0 === n ? void 0 : n.querySelector(".js-click-menu--autofocus");
       c instanceof HTMLElement && c.focus()
      }, this.toggle = t => {
       const e = t.currentTarget,
        i = this.tree();
       t.preventDefault(), t.stopPropagation();
       const n = e.dataset.clickMenuTarget;
       let s = n;
       if (null != n) {
        const t = i.indexOf(n); - 1 !== t && (s = i[t + 1])
       }
       this.show(s)
      }, this.tree = () => {
       if (null == this.current) return [];
       let t = this.current;
       const e = [t];
       for (; null != (t = this.closestMenuId(this.menuLink(t)));) e.push(t);
       return e
      }, $(document).on("click", ".js-click-menu--close", this.close), $(document).on("click", ".js-click-menu[data-click-menu-target]", this.toggle), $(document).on("click", this.hide), document.addEventListener("turbolinks:load", this.restoreSaved), document.addEventListener("turbolinks:before-cache", this.saveCurrent)
     }
     closestMenuId(t) {
      if (null != t) return $(t).parents("[data-click-menu-id]").attr("data-click-menu-id")
     }
     menu(t) {
      return document.querySelector(`.js-click-menu[data-click-menu-id${null==t?"":`='${t}'`}]`)
     }
     menuLink(t) {
      return document.querySelector(`.js-click-menu[data-click-menu-target${null==t?"":`='${t}'`}]`)
     }
    },
    Enchant: class {
     constructor(t, e) {
      this.window = t, this.turbolinksReload = e, this.load = () => {
       null != document.querySelector(".enchant-help-center") && (this.window.enchant = [], this.turbolinksReload.load(r))
      }, this.showMessageWindow = t => {
       t.preventDefault(), null != this.window.enchant && null != this.window.enchant.messenger && "function" == typeof this.window.enchant.messenger.open && this.window.enchant.messenger.open()
      }, this.unload = () => {
       this.turbolinksReload.forget(r), $('#enchant-messenger-main, #enchant-messenger-launcher, iframe[src^="https://enchantwidgets-"]').remove(), document.querySelectorAll("style").forEach(t => {
        const e = t.textContent;
        null != e && e.match(/#enchant-/) && $(t).remove()
       })
      }, $(document).on("turbolinks:load", this.load), $(document).on("turbolinks:before-cache", this.unload), $(document).on("click", ".js-enchant--show", this.showMessageWindow)
     }
    },
    ForumPoll: class {
     constructor(t) {
      this.switchEdit = t => {
       const e = $(t.target).parents(".js-forum-poll--container");
       if ("1" === e.attr("data-edit")) {
        e.attr("data-edit", "0");
        const i = $(t.target).closest("form")[0];
        null != i && i.reset()
       } else e.attr("data-edit", "1")
      }, this.switchPage = t => {
       const e = t.currentTarget;
       if (!(e instanceof HTMLElement)) return;
       const i = e.dataset.targetPage;
       "string" == typeof i && $(t.target).parents(".js-forum-poll--container").attr("data-page", i)
      }, $(t.document).on("click", ".js-forum-poll--switch-page", this.switchPage), $(t.document).on("click", ".js-forum-poll--switch-edit", this.switchEdit)
     }
    },
    GalleryContest: class {
     constructor(t, e) {
      this.destroy = () => {
       Object(m.unmountComponentAtNode)(this.root), $(document).off(`.${this.eventId}`)
      }, this.root = t.querySelector(".js-pswp-buttons"), Object(m.render)(Object(f.createElement)(g, {
       pswp: e
      }), this.root), this.eventId = `gallery-contest-${osu.uuid()}`, $(document).on(`turbolinks:before-cache.${this.eventId}`, this.destroy), e.listen("destroy", this.destroy)
     }
    },
    MobileToggle: class {
     constructor() {
      this.toggle = t => {
       const e = t.currentTarget;
       if (!(e instanceof HTMLElement)) return;
       const i = e.dataset.mobileToggleTarget;
       if (null == i) return;
       const n = document.querySelector(`.js-mobile-toggle[data-mobile-toggle-id=${i}]`);
       if (!(n instanceof HTMLElement)) return;
       const s = !e.classList.contains(a);
       e.classList.toggle(a, s), n.classList.toggle("hidden-xs", !s)
      }, $(document).on("click", ".js-mobile-toggle", this.toggle)
     }
    },
    OsuUrlHelper: b.a,
    TurbolinksReload: class {
     constructor() {
      this.loaded = {}, this.cleanup = () => {
       $(`.${y}`).remove()
      }, this.forget = t => {
       delete this.loaded[t]
      }, this.load = (t, e) => {
       if (this.loaded[t]) return;
       const i = document.createElement("script");
       return i.classList.add(y), i.onload = () => {
        null != i.parentElement && (i.parentElement.removeChild(i), null != e && e())
       }, i.src = t, document.body.appendChild(i), this.loaded[t] = !0
      }, document.addEventListener("turbolinks:before-cache", this.cleanup)
     }
    },
    WindowVHPatcher: v
   }, null == window.laroute && (window.laroute = o), window._styles = {
    header: {
     height: 90,
     heightSticky: 50,
     heightMobile: 50
    }
   }, window.StoreCheckout = c, window.TextareaAutosize = p.a, i("hTA1");
   var w = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    },
    k = {}.hasOwnProperty,
    x = function() {
     function t(t) {
      this.components = null != t ? t : {}, this.scrollOnNewVisit = w(this.scrollOnNewVisit, this), this.registerPersistent = w(this.registerPersistent, this), this.register = w(this.register, this), this.onWindowScroll = w(this.onWindowScroll, this), this.onLoad = w(this.onLoad, this), this.onBeforeVisit = w(this.onBeforeVisit, this), this.onBeforeCache = w(this.onBeforeCache, this), this.destroyPersisted = w(this.destroyPersisted, this), this.destroy = w(this.destroy, this), this.deleteLoadedMarker = w(this.deleteLoadedMarker, this), this.boot = w(this.boot, this), this.allTargets = w(this.allTargets, this), this.documentReady = !1, this.targets = [], this.newVisit = !0, this.scrolled = !1, $(document).on("turbolinks:before-cache", this.onBeforeCache), $(document).on("turbolinks:before-visit", this.onBeforeVisit), $(document).on("turbolinks:load", this.onLoad)
     }
     return t.prototype.allTargets = function(t) {
      var e, i, n, s, r;
      for (i in s = [], n = this.components) k.call(n, i) && (e = n[i], s.push(function() {
       var n, s, o, a;
       for (a = [], n = 0, s = (o = e.targets).length; n < s; n++) r = o[n], a.push(t({
        name: i,
        component: e,
        target: r
       }));
       return a
      }()));
      return s
     }, t.prototype.boot = function() {
      var t;
      if (this.documentReady) return this.allTargets((t = this, function(e) {
       var i, n;
       if (n = e.target, i = e.component, "1" !== n.dataset.reactTurbolinksLoaded) return n.dataset.reactTurbolinksLoaded = "1", t.targets.push(n), m.render(f.createElement(i.element, i.propsFunction(n)), n)
      }))
     }, t.prototype.deleteLoadedMarker = function() {
      return this.allTargets((function(t) {
       var e;
       if (null != (e = t.target).dataset.reactTurbolinksLoaded) return delete e.dataset.reactTurbolinksLoaded
      }))
     }, t.prototype.destroy = function() {
      return this.allTargets((function(t) {
       var e, i;
       if (i = t.target, e = t.component, "1" === i.dataset.reactTurbolinksLoaded && !e.persistent) return m.unmountComponentAtNode(i)
      }))
     }, t.prototype.destroyPersisted = function() {
      var t, e;
      for (t = []; e = this.targets.pop();) t.push(m.unmountComponentAtNode(e));
      return t
     }, t.prototype.onBeforeCache = function() {
      return Timeout.clear(this.scrollTimeout), this.documentReady = !1, this.destroy()
     }, t.prototype.onBeforeVisit = function() {
      return this.newVisit = !0
     }, t.prototype.onLoad = function() {
      return this.scrolled = !1, $(window).off("scroll", this.onWindowScroll), $(window).on("scroll", this.onWindowScroll), Timeout.set(1, (t = this, function() {
       return t.deleteLoadedMarker(), t.destroyPersisted(), t.documentReady = !0, t.boot(), t.scrollTimeout = Timeout.set(100, t.scrollOnNewVisit)
      }));
      var t
     }, t.prototype.onWindowScroll = function() {
      return this.scrolled = this.scrolled || 0 !== window.scrollX || 0 !== window.scrollY
     }, t.prototype.register = function(t, e, i) {
      return null == i && (i = function() {}), this.registerPersistent(t, e, !1, i)
     }, t.prototype.registerPersistent = function(t, e, i, n) {
      if (null == i && (i = !0), null == n && (n = function() {}), !this.components[t]) return this.components[t] = {
       loaded: !1,
       persistent: i,
       targets: document.getElementsByClassName("js-react--" + t),
       element: e,
       propsFunction: n
      }, this.boot()
     }, t.prototype.scrollOnNewVisit = function() {
      var t, e, i;
      if ($(window).off("scroll", this.onWindowScroll), t = this.newVisit, this.newVisit = !1, t && !this.scrolled && "" !== (i = document.location.hash.substr(1))) return null != (e = document.getElementById(i)) ? e.scrollIntoView() : void 0
     }, t
    }(),
    S = i("q3z+"),
    E = i("jbZF"),
    j = i("cF9b"),
    T = i("f4vq");
   let C = class extends f.Component {
    render() {
     return this.props.worker.isActive() ? f.createElement("span", {
      className: this.mainClass()
     }, f.createElement("i", {
      className: "fas fa-comment-alt"
     }), f.createElement("span", {
      className: "notification-icon__count"
     }, this.unreadCountDisplay())) : null
    }
    mainClass() {
     let t = "notification-icon";
     return this.unreadCount() > 0 && (t += " notification-icon--glow"), "mobile" === this.props.type && (t += " notification-icon--mobile"), t
    }
    unreadCount() {
     return T.a.dataStore.notificationStore.unreadStacks.getOrCreateType({
      objectType: "channel"
     }).total
    }
    unreadCountDisplay() {
     return this.props.worker.hasData ? osu.formatNumber(this.unreadCount()) : "..."
    }
   };
   var P, L = C = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    }([j.d], C),
    A = i("2LKk"),
    M = i("w9NC"),
    O = i("NzAu"),
    I = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    },
    D = {}.hasOwnProperty;
   f.createElement, P = "countdown-timer";
   var N = function(t) {
     function e(t) {
      var i;
      this.render = I(this.render, this), this.updateTimer = I(this.updateTimer, this), e.__super__.constructor.call(this, t), i = moment(this.props.deadline), this.state = {
       deadline: i,
       diff: Math.max(i.diff(), 0)
      }
     }
     return function(t, e) {
      for (var i in e) D.call(e, i) && (t[i] = e[i]);

      function n() {
       this.constructor = t
      }
      n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype
     }(e, t), e.prototype.componentDidMount = function() {
      return this.timer = setInterval(this.updateTimer, 1e3)
     }, e.prototype.componentWillUnmount = function() {
      return clearInterval(this.timer)
     }, e.prototype.updateTimer = function() {
      var t;
      return 0 === (t = Math.max(this.state.deadline.diff(), 0)) && clearInterval(this.timer), this.setState({
       diff: t
      })
     }, e.prototype.render = function() {
      var t, e, i, n;
      return t = this.state.diff / 1e3, i = {
       days: Math.floor(t / 86400),
       hours: Math.floor(t / 3600 % 24),
       minutes: Math.floor(t / 60 % 60),
       seconds: Math.floor(t % 60)
      }, Object(O.div)({
       className: P
      }, Object(O.div)({
       className: P + "__header"
      }, osu.trans("common.time.remaining") + ":"), function() {
       var t;
       for (e in t = [], i) n = i[e], t.push(Object(O.div)({
        key: e,
        className: P + "__field"
       }, Object(O.div)({
        className: P + "__digit"
       }, n < 10 ? "0" + n : n), Object(O.div)({
        className: P + "__label"
       }, osu.trans("common.countdown." + e))));
       return t
      }())
     }, e
    }(f.Component),
    z = i("FVE9"),
    R = i("YLtl"),
    B = i("XFVs"),
    F = i("Ncbg");
   let U = class extends f.Component {
    render() {
     return this.props.worker.isActive() ? f.createElement("span", {
      className: this.mainClass()
     }, f.createElement("i", {
      className: "fas fa-inbox"
     }), f.createElement("span", {
      className: "notification-icon__count"
     }, this.unreadCount())) : null
    }
    mainClass() {
     let t = "notification-icon";
     return this.props.worker.unreadCount > 0 && (t += " notification-icon--glow"), "mobile" === this.props.type && (t += " notification-icon--mobile"), t
    }
    unreadCount() {
     return this.props.worker.hasData ? osu.formatNumber(this.props.worker.unreadCount) : "..."
    }
   };
   var W = U = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    }([j.d], U),
    q = i("JlDh"),
    H = i("h/Ip"),
    V = i("6QPw"),
    X = i("FiYg"),
    G = i("9zVE"),
    J = i("KMrT");
   let K = class extends f.Component {
    constructor() {
     super(...arguments), this.links = q.a.map(t => {
      const e = t.type;
      return {
       title: osu.trans(`notifications.filters.${null!=e?e:"_"}`),
       data: {
        "data-type": e
       },
       type: e
      }
     }), this.state = {
      hasError: !1
     }, this.controller = new X.a(T.a.dataStore.notificationStore, {
      isWidget: !0
     }, null), this.handleFilterClick = t => {
      var e;
      const i = null != (e = t.currentTarget.dataset.type) ? e : null;
      this.controller.navigateTo(i)
     }, this.handleMarkAsRead = () => {
      this.controller.type.markTypeAsRead()
     }, this.handleShowMore = () => {
      this.controller.loadMore()
     }, this.renderFilter = t => {
      const e = T.a.dataStore.notificationStore.unreadStacks.getOrCreateType({
        objectType: t.type
       }),
       i = t.type === this.controller.currentFilter;
      if (null !== e.name && e.isEmpty && !i) return null;
      const n = {
        "data-type": t.type
       },
       s = i ? ["active"] : [];
      return f.createElement("button", Object.assign({
       className: osu.classWithModifiers("notification-popup__filter", s),
       key: t.title,
       onClick: this.handleFilterClick
      }, n), f.createElement("span", {
       className: "notification-popup__filter-count"
      }, e.total), f.createElement("span", null, t.title))
     }
    }
    static getDerivedStateFromError(t) {
     return console.error(t), {
      hasError: !0
     }
    }
    render() {
     var t;
     const e = `notification-popup u-fancy-scrollbar ${t=this.props.extraClasses,null!=t?t:""}`;
     return f.createElement(H.a.Provider, {
      value: {
       isWidget: !0
      }
     }, f.createElement("div", {
      className: e
     }, f.createElement("div", {
      className: "notification-popup__scroll-container"
     }, this.renderFilters(), f.createElement("div", {
      className: "notification-popup__filters"
     }, this.renderHistoryLink(), this.renderMarkAsReadButton()), this.renderLegacyPm(), f.createElement("div", {
      className: "notification-stacks"
     }, this.renderStacks(), this.renderShowMore()))))
    }
    renderFilters() {
     return f.createElement("div", {
      className: "notification-popup__filters"
     }, this.links.map(this.renderFilter))
    }
    renderHistoryLink() {
     return f.createElement("a", {
      className: "notification-popup__filter",
      href: Object(o.route)("notifications.index")
     }, osu.trans("notifications.see_all"))
    }
    renderLegacyPm() {
     if (null == this.controller.currentFilter) return f.createElement(V.a, null)
    }
    renderMarkAsReadButton() {
     var t;
     const e = this.controller.type;
     return e.isEmpty ? null : f.createElement(G.a, {
      isMarkingAsRead: e.isMarkingAsRead,
      onMarkAsRead: this.handleMarkAsRead,
      text: osu.trans("notifications.mark_read", {
       type: osu.trans(`notifications.filters.${t=e.name,null!=t?t:"_"}`)
      })
     })
    }
    renderShowMore() {
     var t, e;
     const i = this.controller.type;
     return f.createElement(F.a, {
      callback: this.handleShowMore,
      hasMore: null === (t = i) || void 0 === t ? void 0 : t.hasMore,
      loading: null === (e = i) || void 0 === e ? void 0 : e.isLoading,
      modifiers: ["notification-group", "notification-list"]
     })
    }
    renderStacks() {
     if (this.state.hasError) return;
     const t = [];
     for (const e of this.controller.stacks) e.hasVisibleNotifications && t.push(f.createElement(J.a, {
      key: e.id,
      stack: e
     }));
     if (0 === t.length) {
      const t = null == this.controller.currentFilter ? "notifications.all_read" : "notifications.none";
      return f.createElement("p", {
       key: "empty",
       className: "notification-popup__empty"
      }, osu.trans(t))
     }
     return t
    }
   };
   var Y = K = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    }([j.d], K),
    Q = i("WLnA"),
    Z = i("EaLk"),
    tt = i("uW+8"),
    et = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    };
   const it = t => "logout" === t.event,
    nt = t => "new" === t.event,
    st = t => "read" === t.event,
    rt = t => "verified" === t.event;
   class ot {
    constructor() {
     this.hasData = !1, this.hasMore = !0, this.userId = null, this.active = !1, this.store = T.a.dataStore.notificationStore.unreadStacks, this.timeout = {}, this.xhr = {}, this.xhrLoadingState = {}, this.boot = () => {
      this.active = null != this.userId, this.active && this.startWebSocket()
     }, this.connectWebSocket = () => {
      if (!this.active || null == this.endpoint || null != this.ws) return;
      Timeout.clear(this.timeout.connectWebSocket);
      const t = document.querySelector("meta[name=csrf-token]");
      if (null == t) return;
      const e = t.getAttribute("content");
      this.ws = new WebSocket(`${this.endpoint}?csrf=${e}`), this.ws.addEventListener("open", () => {
       this.hasData ? this.refresh() : this.loadMore()
      }), this.ws.addEventListener("close", this.reconnectWebSocket), this.ws.addEventListener("message", this.handleNewEvent)
     }, this.delayedRetryInitialLoadMore = () => {
      this.active && !this.hasData && (this.timeout.loadMore = Timeout.set(1e4, this.loadMore))
     }, this.destroy = () => {
      this.active = !1, this.hasData = !1, this.store.flushStore(), Object(R.forEach)(this.xhr, t => t.abort()), Object(R.forEach)(this.timeout, t => Timeout.clear(t)), null != this.ws && (this.ws.close(), this.ws = null)
     }, this.handleNewEvent = t => {
      let e;
      try {
       e = JSON.parse(t.data)
      } catch (e) {
       return void console.debug("Failed parsing data:", t.data)
      }
      if (it(e)) this.destroy();
      else if (nt(e)) Object(Q.a)(new tt.b(e.data));
      else if (st(e)) {
       const t = new Date(e.data.timestamp);
       null != this.firstLoadedAt && t > this.firstLoadedAt && Object(Q.a)(tt.c.fromJson(e))
      } else rt(e) && (this.hasData || this.loadMore(), $.publish("user-verification:success"))
     }, this.isActive = () => this.active, this.loadBundle = t => {
      Object(Q.a)(new tt.a(t, {
       isWidget: !0
      })), this.hasData = !0, null == this.firstLoadedAt && (this.firstLoadedAt = new Date(t.timestamp))
     }, this.loadMore = () => {
      this.active && this.hasMore && !this.isPendingXhr("loadMore") && (Timeout.clear(this.timeout.loadMore), this.xhrLoadingState.loadMore = !0, this.xhr.loadMore = $.ajax({
       url: Object(o.route)("notifications.index", {
        unread: 1
       }),
       dataType: "json"
      }).always(Object(Z.d)(() => {
       this.xhrLoadingState.loadMore = !1
      })).done(this.loadBundle).fail(Object(Z.d)(t => {
       null != t.responseJSON && "verification" === t.responseJSON.error || this.delayedRetryInitialLoadMore()
      })))
     }, this.reconnectWebSocket = () => {
      this.active && (this.timeout.connectWebSocket = Timeout.set(Object(R.random)(5e3, 2e4), Object(Z.d)(() => {
       this.ws = null, this.connectWebSocket()
      })))
     }, this.refresh = () => {}, this.setUserId = t => {
      t !== this.userId && (this.active && this.destroy(), this.userId = t, this.boot())
     }, this.startWebSocket = () => null != this.endpoint ? this.connectWebSocket() : this.isPendingXhr("startWebSocket") ? void 0 : (Timeout.clear(this.timeout.startWebSocket), this.xhr.startWebSocket = $.get(Object(o.route)("notifications.endpoint")).done(Object(Z.d)(t => {
      this.endpoint = t.url, this.connectWebSocket()
     })).fail(Object(Z.d)(() => {
      this.timeout.startWebSocket = Timeout.set(1e4, this.startWebSocket)
     }))), this.isPendingXhr = t => !0 === this.xhrLoadingState[t]
    }
    get loadingMore() {
     return this.isPendingXhr("loadMore")
    }
    get refreshing() {
     return this.isPendingXhr("refresh")
    }
    get unreadCount() {
     return this.store.totalWithPm
    }
   }
   et([Z.l], ot.prototype, "hasData", void 0), et([Z.l], ot.prototype, "hasMore", void 0), et([Z.l], ot.prototype, "active", void 0), et([Z.l], ot.prototype, "xhrLoadingState", void 0), et([Z.e], ot.prototype, "loadingMore", null), et([Z.e], ot.prototype, "refreshing", null), et([Z.e], ot.prototype, "unreadCount", null), et([Z.d], ot.prototype, "connectWebSocket", void 0), et([Z.d], ot.prototype, "delayedRetryInitialLoadMore", void 0), et([Z.d], ot.prototype, "destroy", void 0), et([Z.d], ot.prototype, "handleNewEvent", void 0), et([Z.d], ot.prototype, "loadBundle", void 0), et([Z.d], ot.prototype, "loadMore", void 0), et([Z.d], ot.prototype, "reconnectWebSocket", void 0), et([Z.d], ot.prototype, "refresh", void 0), et([Z.d], ot.prototype, "setUserId", void 0), et([Z.d], ot.prototype, "startWebSocket", void 0);
   var at = i("SYfz"),
    ut = i("mk7q"),
    lt = i("NW+U");

   function ct({
    beatmapset: t,
    modifiers: e = []
   }) {
    const i = Object(o.route)("beatmapsets.show", {
     beatmapset: t.id
    });
    return f.createElement("a", {
     className: osu.classWithModifiers("beatmapset-search-card", e),
     href: i
    }, f.createElement("div", {
     className: "beatmapset-search-card__cover-container"
    }, f.createElement(lt.a, {
     className: "beatmapset-search-card__cover",
     src: t.covers.list
    })), f.createElement("div", {
     className: "beatmapset-search-card__details"
    }, f.createElement("div", {
     className: "beatmapset-search-card__title"
    }, `${t.title} `, f.createElement("span", {
     className: "beatmapset-search-card__title-artist"
    }, osu.trans("users.show.extra.beatmaps.by_artist", {
     artist: t.artist
    }))), f.createElement("div", {
     className: "beatmapset-search-card__extra"
    }, osu.trans("beatmapsets.show.details.mapped_by", {
     mapper: t.creator
    }))))
   }
   var ht = i("If6E"),
    dt = i("VefT"),
    pt = i("4cxI");

   function ft({
    user: t,
    modifiers: e = []
   }) {
    const i = Object(o.route)("users.show", {
     user: t.id
    });
    return f.createElement("div", {
     className: `${osu.classWithModifiers("user-search-card",e)} clickable-row`
    }, f.createElement("a", {
     className: "user-search-card__avatar-container",
     href: i
    }, f.createElement("div", {
     className: "avatar avatar--full",
     style: {
      backgroundImage: osu.urlPresence(t.avatar_url)
     }
    })), f.createElement("div", {
     className: "user-search-card__details"
    }, f.createElement("div", {
     className: "user-search-card__col  user-search-card__col--flag"
    }, f.createElement(ht.a, {
     country: t.country,
     modifiers: ["inline"]
    })), f.createElement("a", {
     className: "user-search-card__col user-search-card__col--username clickable-row-link",
     href: i
    }, t.username), t.is_supporter ? f.createElement("div", {
     className: "user-search-card__col user-search-card__col--icon"
    }, f.createElement(dt.a, {
     level: t.support_level,
     modifiers: ["quick-search"]
    })) : null, null != t.group_badge && f.createElement("div", {
     className: "user-search-card__col user-search-card__col--icon"
    }, f.createElement(pt.a, {
     badge: t.group_badge
    })), f.createElement("div", {
     className: "user-search-card__col user-search-card__col--icon"
    }, f.createElement(z.a, {
     userId: t.id,
     modifiers: ["quick-search"]
    }))))
   }
   const mt = ["forum_post", "wiki_page"];
   let gt = class extends f.Component {
    constructor() {
     super(...arguments), this.inputRef = f.createRef(), this.focus = () => {
      var t;
      null != this.inputRef.current && (this.inputRef.current.selectionStart = 0, this.inputRef.current.selectionEnd = this.inputRef.current.value.length, this.props.worker.selectNone(), null === (t = this.inputRef.current) || void 0 === t || t.focus())
     }, this.onInputKeyDown = t => {
      const e = t.key;
      "Enter" === e && (this.props.worker.debouncedSearch.flush(), this.navigateToSelected()), "ArrowUp" !== e && "ArrowDown" !== e || this.props.worker.cycleSelectedItem("ArrowDown" === e ? 1 : -1)
     }, this.onMouseLeave = t => {
      this.props.worker.selectNone()
     }, this.selectBeatmapsetOthers = () => this.selectBox("beatmapset_others"), this.selectUserOthers = () => this.selectBox("user_others"), this.updateQuery = t => {
      this.props.worker.updateQuery(t.currentTarget.value)
     }
    }
    render() {
     let t = osu.classWithModifiers("quick-search", this.props.modifiers);
     return t += " u-fancy-scrollbar", f.createElement("div", {
      className: t
     }, f.createElement("div", {
      className: "quick-search-input"
     }, f.createElement("div", {
      className: "quick-search-input__field"
     }, f.createElement("span", {
      className: "quick-search-input__icon"
     }, this.props.worker.searching ? f.createElement(at.a, null) : f.createElement("span", {
      className: "fas fa-search"
     })), f.createElement("input", {
      className: "quick-search-input__input js-click-menu--autofocus",
      ref: this.inputRef,
      placeholder: osu.trans("home.search.placeholder"),
      value: this.props.worker.query,
      onChange: this.updateQuery,
      onKeyDown: this.onInputKeyDown
     })), null != this.props.onClose && f.createElement("button", {
      type: "button",
      className: "btn-osu-big btn-osu-big--quick-search-close",
      onClick: this.props.onClose
     }, osu.trans("common.buttons.close"))), this.renderResult())
    }
    boxIsActive(t, e) {
     var i;
     const n = this.props.worker;
     return n.currentSection === t && (null === (i = n.selected) || void 0 === i ? void 0 : i.index) === e
    }
    count(t) {
     return null === this.props.worker.searchResult ? 0 : this.props.worker.searchResult[t].total
    }
    navigateToSelected() {
     const t = this.props.worker.selectedURL;
     t && osu.navigate(t, !1)
    }
    renderBeatmapsets() {
     return null == this.props.worker.searchResult ? null : f.createElement("div", {
      className: "quick-search-items"
     }, this.props.worker.searchResult.beatmapset.beatmapsets.map((t, e) => f.createElement("div", {
      key: t.id,
      className: "quick-search-items__item",
      onMouseEnter: () => this.selectBox("beatmapset", e),
      onMouseLeave: this.onMouseLeave
     }, f.createElement(ct, {
      beatmapset: t,
      modifiers: this.boxIsActive("beatmapset", e) ? ["active"] : []
     }))), f.createElement("div", {
      className: "quick-search-items__item",
      onMouseEnter: this.selectBeatmapsetOthers,
      onMouseLeave: this.onMouseLeave
     }, this.renderResultLink("beatmapset", this.boxIsActive("beatmapset_others", 0))))
    }
    renderMoreOtherResultLink() {
     const t = mt.filter(t => this.count(t) > 0);
     return 0 === t.length ? null : f.createElement("div", {
      className: "quick-search-items"
     }, t.map((t, e) => f.createElement("div", {
      key: t,
      className: "quick-search-items__item",
      onMouseEnter: () => this.selectBox("others", e),
      onMouseLeave: this.onMouseLeave
     }, this.renderResultLink(t, this.boxIsActive("others", e)))))
    }
    renderNoMoreOtherResultLink() {
     const t = mt.filter(t => 0 === this.count(t));
     return 0 === t.length ? null : f.createElement("div", {
      className: "quick-search-items quick-search-items--empty"
     }, t.map(t => f.createElement("div", {
      key: t,
      className: "quick-search-items__item"
     }, osu.trans("quick_search.result.empty_for", {
      modes: osu.trans(`quick_search.mode.${t}`)
     }))))
    }
    renderOthers() {
     return 0 === this.count("forum_post") && 0 === this.count("wiki_page") ? f.createElement("span", {
      className: "quick-search-items quick-search-items--empty"
     }, osu.trans("quick_search.result.empty_for", {
      modes: osu.transArray([osu.trans("quick_search.mode.forum_post"), osu.trans("quick_search.mode.wiki_page")])
     })) : f.createElement(f.Fragment, null, this.renderMoreOtherResultLink(), this.renderNoMoreOtherResultLink())
    }
    renderResult() {
     return null == this.props.worker.searchResult ? null : f.createElement("div", {
      className: "quick-search-result"
     }, f.createElement("div", {
      className: "quick-search-result__item"
     }, this.renderTitle("user"), this.renderUsers()), f.createElement("div", {
      className: "quick-search-result__item"
     }, this.renderTitle("beatmapset"), this.renderBeatmapsets()), f.createElement("div", {
      className: "quick-search-result__item"
     }, this.renderTitle("other"), this.renderOthers()))
    }
    renderResultLink(t, e = !1) {
     let i = "quick_search.result.";
     return i += mt.includes(t) ? "title" : "more", f.createElement("a", {
      href: Object(o.route)("search", {
       mode: t,
       query: this.props.worker.query
      }),
      className: osu.classWithModifiers("search-result-more", e ? ["active"] : [])
     }, f.createElement("div", {
      className: "search-result-more__content"
     }, osu.trans(i, {
      mode: osu.trans(`quick_search.mode.${t}`)
     }), f.createElement("span", {
      className: "search-result-more__count"
     }, osu.formatNumber(this.count(t)))), f.createElement("div", {
      className: "search-result-more__arrow"
     }, f.createElement("span", {
      className: "fas fa-angle-right"
     })))
    }
    renderTitle(t) {
     return f.createElement("h2", {
      className: "title"
     }, f.createElement(ut.a, {
      pattern: osu.trans("quick_search.result.title"),
      mappings: {
       ":mode": f.createElement("strong", {
        key: "mode"
       }, osu.trans(`quick_search.mode.${t}`))
      }
     }))
    }
    renderUsers() {
     return null == this.props.worker.searchResult ? null : 0 === this.count("user") ? f.createElement("span", {
      className: "quick-search-items quick-search-items--empty"
     }, osu.trans("quick_search.result.empty", {
      mode: osu.trans("quick_search.mode.beatmapset")
     })) : f.createElement("div", {
      className: "quick-search-items"
     }, this.props.worker.searchResult.user.users.map((t, e) => f.createElement("div", {
      key: t.id,
      className: "quick-search-items__item",
      onMouseEnter: () => this.selectBox("user", e),
      onMouseLeave: this.onMouseLeave
     }, f.createElement(ft, {
      user: t,
      modifiers: this.boxIsActive("user", e) ? ["active"] : []
     }))), this.count("user") > this.props.worker.searchResult.user.users.length ? f.createElement("div", {
      className: "quick-search-items__item",
      onMouseEnter: this.selectUserOthers,
      onMouseLeave: this.onMouseLeave
     }, this.renderResultLink("user", this.boxIsActive("user_others", 0))) : null)
    }
    selectBox(t, e = 0) {
     this.props.worker.setSelected(t, e)
    }
   };
   var vt = gt = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    }([j.d], gt),
    yt = i("txhI");
   let bt = class extends f.Component {
    constructor() {
     super(...arguments), this.formRef = f.createRef(), this.searchPath = Object(o.route)("search", null, !1), this.state = {
      open: !1
     }, this.toggle = t => {
      null != t && t.preventDefault(), null != currentUser.id && (this.isSearchPage ? $(".js-search--input").focus() : this.setState({
       open: !this.state.open
      }))
     }
    }
    get isSearchPage() {
     return document.location.pathname === this.searchPath
    }
    componentDidUpdate(t, e) {
     var i;
     !e.open && this.state.open && (null === (i = this.formRef.current) || void 0 === i || i.focus())
    }
    render() {
     let t = "nav2__menu-link-main nav2__menu-link-main--search js-login-required--click";
     return (this.state.open || document.location.pathname === Object(o.route)("search", null, !1)) && (t += " u-section--bg-normal"), f.createElement(f.Fragment, null, f.createElement("a", {
      className: t,
      href: Object(o.route)("search"),
      onClick: this.toggle
     }, f.createElement("span", {
      className: "fas fa-search"
     })), this.renderModal())
    }
    renderModal() {
     return !this.state.open || this.isSearchPage ? null : f.createElement(yt.a, {
      visible: !0,
      onClose: this.toggle
     }, f.createElement(vt, {
      worker: this.props.worker,
      onClose: this.toggle,
      ref: this.formRef
     }))
    }
   };
   var wt = bt = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    }([j.d], bt),
    kt = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    };
   const _t = ["user", "user_others", "beatmapset", "beatmapset_others", "others"],
    xt = ["forum_post", "wiki_page"];
   class St {
    constructor() {
     this.debouncedSearch = Object(R.debounce)(this.search, 500), this.query = "", this.searching = !1, this.searchResult = null, this.selected = null, this.xhr = null
    }
    cycleSelectedItem(t) {
     let e;
     if (this.selected)(e = Object.assign({}, this.selected)).index += t;
     else if (t > 0) e = {
      section: 0,
      index: 0
     };
     else {
      const t = _t.length - 1,
       i = _t[t];
      e = {
       section: t,
       index: this.sectionLength(i) - 1
      }
     }
     if (e.index < 0 || e.index >= this.sectionLength(_t[e.section])) {
      let i = e.section;
      do {
       if ((i = (i + t) % _t.length) < 0 && (i = _t.length + i), i === e.section) return
      } while (0 === this.sectionLength(_t[i]));
      e = {
       index: t > 0 ? 0 : this.sectionLength(_t[i]) - 1,
       section: i
      }
     }
     this.selected = e
    }
    get currentSection() {
     if (this.selected) return _t[this.selected.section]
    }
    get selectedURL() {
     var t, e;
     const i = this.searchResult;
     if (this.selected && i) switch (_t[this.selected.section]) {
      case "user":
       const n = null === (t = i.user.users[this.selected.index]) || void 0 === t ? void 0 : t.id;
       return n ? Object(o.route)("users.show", {
        user: n
       }) : void 0;
      case "user_others":
       return Object(o.route)("search", {
        mode: "user",
        query: this.query
       });
      case "beatmapset":
       const s = null === (e = i.beatmapset.beatmapsets[this.selected.index]) || void 0 === e ? void 0 : e.id;
       return s ? Object(o.route)("beatmapsets.show", {
        beatmapset: s
       }) : void 0;
      case "beatmapset_others":
       return Object(o.route)("search", {
        mode: "beatmapset",
        query: this.query
       });
      case "others":
       const r = xt.filter(t => i[t].total > 0)[this.selected.index];
       return Object(o.route)("search", {
        mode: r,
        query: this.query
       })
     }
    }
    search() {
     0 !== this.query.length ? (this.searching = !0, this.xhr = $.get(Object(o.route)("quick-search"), {
      query: this.query
     }).done(Object(Z.d)(t => {
      this.searchResult = t, this.selected = null
     })).always(Object(Z.d)(() => {
      this.searching = !1
     }))) : this.reset()
    }
    selectNone() {
     this.selected = null
    }
    setSelected(t, e) {
     this.selected = {
      section: _t.indexOf(t),
      index: e
     }
    }
    updateQuery(t) {
     this.query = t, this.selected = null, this.debouncedSearch()
    }
    reset() {
     this.debouncedSearch.cancel(), null != this.xhr && this.xhr.abort(), this.searching = !1, this.searchResult = null, this.selected = null
    }
    sectionLength(t) {
     const e = this.searchResult;
     if (!e) return 0;
     switch (t) {
      case "user":
       return e.user.users.length;
      case "user_others":
       return e.user.total > e.user.users.length ? 1 : 0;
      case "beatmapset":
       return e.beatmapset.beatmapsets.length;
      case "beatmapset_others":
       return 1;
      case "others":
       return xt.filter(t => e[t].total > 0).length
     }
     return 0
    }
   }
   kt([Z.l], St.prototype, "query", void 0), kt([Z.l], St.prototype, "searching", void 0), kt([Z.l], St.prototype, "searchResult", void 0), kt([Z.l], St.prototype, "selected", void 0), kt([Z.d], St.prototype, "cycleSelectedItem", null), kt([Z.e], St.prototype, "currentSection", null), kt([Z.e], St.prototype, "selectedURL", null), kt([Z.d], St.prototype, "search", null), kt([Z.d], St.prototype, "selectNone", null), kt([Z.d], St.prototype, "setSelected", null), kt([Z.d], St.prototype, "updateQuery", null), kt([Z.d], St.prototype, "reset", null);
   var Et = i("MeXQ"),
    jt = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    },
    Tt = {}.hasOwnProperty,
    Ct = function(t) {
     function e() {
      return this.onItemSelected = jt(this.onItemSelected, this), this.renderItem = jt(this.renderItem, this), this.render = jt(this.render, this), e.__super__.constructor.apply(this, arguments)
     }
     return function(t, e) {
      for (var i in e) Tt.call(e, i) && (t[i] = e[i]);

      function n() {
       this.constructor = t
      }
      n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype
     }(e, t), e.prototype.render = function() {
      return Object(f.createElement)(Et.a, {
       bn: "spotlight-select-options",
       renderItem: this.renderItem,
       onItemSelected: this.onItemSelected,
       options: this.props.options,
       selected: this.props.selected
      })
     }, e.prototype.renderItem = function(t) {
      var e, i, n, s;
      return i = t.cssClasses, e = t.children, n = t.item, s = t.onClick, Object(O.a)({
       children: e,
       className: i,
       href: this.href(null != n ? n.id : void 0),
       key: null != n ? n.id : void 0,
       onClick: s
      })
     }, e.prototype.href = function(t) {
      return window.osu.updateQueryString(null, {
       spotlight: t
      })
     }, e.prototype.onItemSelected = function(t) {
      return Turbolinks.visit(this.href(t.id))
     }, e
    }(f.PureComponent),
    $t = i("XPyy");
   class Pt extends f.PureComponent {
    constructor() {
     super(...arguments), this.state = {
      user: this.props.user
     }, this.setUser = (t, e) => {
      this.setState({
       user: e
      })
     }
    }
    componentDidMount() {
     $.subscribe("store-supporter-tag:update-user.user-card-store", this.setUser)
    }
    componentWillUnmount() {
     $.unsubscribe(".user-card-store")
    }
    render() {
     return f.createElement($t.a, {
      user: this.state.user
     })
    }
   }
   var Lt = i("ZG74"),
    At = i("LhsB");
   const Mt = "qtip--user-card";
   let Ot, It = !1;

   function Dt() {
    It = !1, Ot = null
   }

   function Nt() {
    It = !0
   }

   function zt() {
    It = !1
   }

   function Rt(t) {
    if (null != Ot) return;
    if (osu.isMobile()) return;
    const e = t.currentTarget,
     i = osu.presence(e.dataset.userId);
    if (null != i && !R.find(currentUser.blocks, {
      target_id: parseInt(i, 10)
     })) {
     if (null == e._tooltip) return function(t) {
      const e = t.dataset.userId;
      t._tooltip = e;
      const i = $("#js-usercard__loading-template").children().clone()[0];
      i.classList.remove("js-react--user-card"), i.classList.add("js-react--user-card-tooltip"), delete i.dataset.reactTurbolinksLoaded, i.dataset.lookup = e, $(t).qtip(function(t) {
       return {
        content: {
         text: t
        },
        events: {
         render: reactTurbolinks.boot,
         show: Ut
        },
        hide: {
         delay: 220,
         effect: Ft,
         fixed: !0
        },
        position: {
         adjust: {
          scroll: !1
         },
         at: "right center",
         my: "left center",
         viewport: $(window)
        },
        show: {
         delay: 200,
         effect: Bt,
         ready: !0
        },
        style: {
         classes: Mt,
         def: !1,
         tip: !1
        }
       }
      }(i))
     }(e);
     if (e._tooltip !== e.dataset.userId) {
      const t = $(e).qtip("api");
      null != t && (null != t.tooltip && Object(m.unmountComponentAtNode)(t.tooltip.find(".js-react--user-card-tooltip")[0]), t.destroy(), delete e._tooltip)
     }
    }
   }

   function Bt() {
    $(this).fadeTo(110, 1)
   }

   function Ft() {
    $(this).fadeTo(110, 0)
   }

   function Ut(t, e) {
    if (null != Ot || osu.isMobile()) return t.preventDefault();
    const i = e.target[0];
    i._tooltip !== i.dataset.userId && (t.preventDefault(), $(i).trigger("mouseover"))
   }
   class Wt extends f.PureComponent {
    constructor() {
     super(...arguments), this.contextActiveKeyDidChange = Lt.c.bind(this), this.state = {}, this.activeKeyDidChange = t => {
      Ot = t, this.contextActiveKeyDidChange(t), null != t || It || $(`.${Mt}`).qtip("hide")
     }
    }
    componentDidMount() {
     this.getUser().then(t => {
      this.setState({
       user: t
      })
     })
    }
    getUser() {
     const t = Object(o.route)("users.card", {
      user: this.props.lookup
     });
     return $.ajax({
      dataType: "json",
      type: "GET",
      url: t
     })
    }
    render() {
     const t = this.state.activeKey === this.props.lookup;
     return f.createElement(At.a.Provider, {
      value: this.props.container
     }, f.createElement(Lt.a.Provider, {
      value: {
       activeKeyDidChange: this.activeKeyDidChange
      }
     }, f.createElement(Lt.b.Provider, {
      value: this.props.lookup
     }, f.createElement($t.a, {
      activated: t,
      user: this.state.user
     }))))
    }
   }
   var qt = i("ed4P"),
    Ht = function(t, e, i, n) {
     var s, r = arguments.length,
      o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
     if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
     else
      for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
     return r > 3 && o && Object.defineProperty(e, i, o), o
    };
   class Vt {
    constructor() {
     this.selectedIndex = -1, this.shouldShowSuggestions = !1, this.suggestions = [], this.debouncedFetchSuggestions = Object(R.debounce)(this.fetchSuggestions, 200), this.query = ""
    }
    get isSuggestionsVisible() {
     return this.shouldShowSuggestions && this.suggestions.length > 0
    }
    get selectedItem() {
     return this.suggestions[this.selectedIndex]
    }
    get displayText() {
     return null == this.selectedItem ? this.query : this.selectedItem.title
    }
    cancel() {
     var t;
     null === (t = this.xhr) || void 0 === t || t.abort(), this.debouncedFetchSuggestions.cancel()
    }
    search() {
     const t = this.displayText.trim();
     t.length && Turbolinks.visit(Object(o.route)("search", {
      mode: "wiki_page",
      query: t
     }))
    }
    selectIndex(t) {
     return t < -1 ? this.selectIndex(this.suggestions.length - 1) : t >= this.suggestions.length ? this.selectIndex(-1) : (this.selectedIndex = t, void(this.shouldShowSuggestions = !0))
    }
    shiftSelectedIndex(t) {
     this.selectIndex(this.selectedIndex + t)
    }
    unselect(t) {
     this.selectIndex(-1), this.shouldShowSuggestions = this.shouldShowSuggestions && !t
    }
    updateQuery(t) {
     var e;
     const i = t.trim(),
      n = this.query.trim();
     this.query = t, this.selectedIndex = -1, n !== i && (null === (e = this.xhr) || void 0 === e || e.abort(), i.length > 1 ? this.debouncedFetchSuggestions() : this.suggestions.length = 0)
    }
    fetchSuggestions() {
     this.xhr = $.getJSON(Object(o.route)("wiki-suggestions"), {
      query: this.query.trim()
     }).done(Object(Z.d)(t => {
      null != t && (this.suggestions = Object(Z.l)(t), this.shouldShowSuggestions = !0)
     }))
    }
   }
   Ht([Z.l], Vt.prototype, "selectedIndex", void 0), Ht([Z.l], Vt.prototype, "shouldShowSuggestions", void 0), Ht([Z.l], Vt.prototype, "suggestions", void 0), Ht([Z.l], Vt.prototype, "query", void 0), Ht([Z.e], Vt.prototype, "isSuggestionsVisible", null), Ht([Z.e], Vt.prototype, "selectedItem", null), Ht([Z.e], Vt.prototype, "displayText", null), Ht([Z.d], Vt.prototype, "cancel", null), Ht([Z.d], Vt.prototype, "search", null), Ht([Z.d], Vt.prototype, "selectIndex", null), Ht([Z.d], Vt.prototype, "shiftSelectedIndex", null), Ht([Z.d], Vt.prototype, "unselect", null), Ht([Z.d], Vt.prototype, "updateQuery", null), Ht([Z.d], Vt.prototype, "fetchSuggestions", null);
   let Xt = class extends f.Component {
    constructor() {
     super(...arguments), this.controller = new Vt, this.keepSelectionInView = !1, this.ref = f.createRef(), this.handleChange = t => {
      this.controller.updateQuery(t.target.value)
     }, this.handleEsc = t => {
      "Escape" === t.key && this.controller.unselect(!0)
     }, this.handleKeyDown = t => {
      const e = t.key;
      "Enter" === e ? null == this.controller.selectedItem ? this.handleSearch() : osu.navigate(Object(o.route)("wiki.show", {
       page: this.controller.selectedItem.path
      })) : "ArrowUp" !== e && "ArrowDown" !== e || (this.keepSelectionInView = !0, this.controller.shiftSelectedIndex("ArrowDown" === e ? 1 : -1))
     }, this.handleMouseDown = t => {
      null != this.ref.current && (t.composedPath().includes(this.ref.current) || this.controller.unselect(!0))
     }, this.handleMouseLeave = () => {
      this.controller.unselect(!1)
     }, this.handleSearch = () => {
      this.controller.search()
     }
    }
    componentDidMount() {
     document.addEventListener("keydown", this.handleEsc), document.addEventListener("mousedown", this.handleMouseDown)
    }
    componentDidUpdate() {
     var t;
     this.keepSelectionInView && (null === (t = $(".wiki-search__suggestion--active")[0]) || void 0 === t || t.scrollIntoView({
      inline: "nearest",
      block: "nearest"
     }), this.keepSelectionInView = !1)
    }
    componentWillUnmount() {
     document.removeEventListener("keydown", this.handleEsc), document.removeEventListener("mousedown", this.handleMouseDown), this.controller.cancel()
    }
    render() {
     return f.createElement("div", {
      className: "wiki-search"
     }, f.createElement("div", {
      className: "wiki-search__bar"
     }, f.createElement("input", {
      autoFocus: !0,
      className: "wiki-search__input",
      value: this.controller.displayText,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
      placeholder: osu.trans("common.input.search")
     }), f.createElement("button", {
      className: "wiki-search__button",
      onClick: this.handleSearch
     }, f.createElement("i", {
      className: "fa fa-search"
     }))), this.renderSuggestions())
    }
    renderSuggestions() {
     return this.controller.isSuggestionsVisible ? f.createElement("div", {
      ref: this.ref,
      className: "wiki-search__suggestions u-fancy-scrollbar",
      onMouseLeave: this.handleMouseLeave
     }, this.controller.suggestions.map((t, e) => {
      const i = Object(o.route)("wiki.show", {
       page: t.path
      });
      return f.createElement("a", {
       className: osu.classWithModifiers("wiki-search__suggestion", this.controller.selectedIndex === e ? ["active"] : []),
       href: i,
       key: e,
       onMouseEnter: () => {
        this.keepSelectionInView = !1, this.controller.selectIndex(e)
       }
      }, f.createElement("span", {
       dangerouslySetInnerHTML: {
        __html: t.highlight
       }
      }))
     })) : null
    }
   };
   var Gt, Jt, Kt;
   Xt = function(t, e, i, n) {
    var s, r = arguments.length,
     o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
    else
     for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
    return r > 3 && o && Object.defineProperty(e, i, o), o
   }([j.d], Xt), null == window.reactTurbolinks && (window.reactTurbolinks = new x), reactTurbolinks.register("countdownTimer", N, (function(t) {
    return {
     deadline: t.dataset.deadline
    }
   })), reactTurbolinks.register("friendButton", z.a, (function(t) {
    return {
     container: t,
     userId: parseInt(t.dataset.target)
    }
   })), reactTurbolinks.register("blockButton", E.a, (function(t) {
    return {
     container: t,
     userId: parseInt(t.dataset.target)
    }
   })), reactTurbolinks.register("beatmapset-panel", S.a, (function(t) {
    return JSON.parse(t.dataset.beatmapsetPanel)
   })), reactTurbolinks.register("spotlight-select-options", Ct, (function() {
    return osu.parseJson("json-spotlight-select-options")
   })), reactTurbolinks.register("comments", M.a, (function(t) {
    var e;
    return (e = JSON.parse(t.dataset.props)).component = A.a, e
   })), Gt = new ot, Kt = function() {
    return Gt.setUserId(currentUser.id)
   }, $(document).ready(Kt), $.subscribe("user:update", Kt), reactTurbolinks.registerPersistent("chat-icon", L, !0, (function(t) {
    var e, i;
    return (e = null != (i = function() {
     try {
      return JSON.parse(t.dataset.chatIcon)
     } catch (t) {}
    }()) ? i : {}).worker = Gt, e
   })), reactTurbolinks.registerPersistent("notification-icon", W, !0, (function(t) {
    var e, i;
    return (e = null != (i = function() {
     try {
      return JSON.parse(t.dataset.notificationIcon)
     } catch (t) {}
    }()) ? i : {}).worker = Gt, e
   })), reactTurbolinks.registerPersistent("notification-widget", Y, !0, (function(t) {
    try {
     return JSON.parse(t.dataset.notificationWidget)
    } catch (t) {}
   })), Jt = new St, reactTurbolinks.registerPersistent("quick-search", vt, !0, (function(t) {
    return {
     worker: Jt
    }
   })), reactTurbolinks.registerPersistent("quick-search-button", wt, !0, (function() {
    return {
     worker: Jt
    }
   })), reactTurbolinks.register("user-card", $t.a, (function(t) {
    return {
     modifiers: function() {
      try {
       return JSON.parse(t.dataset.modifiers)
      } catch (t) {}
     }(),
     user: function() {
      try {
       return JSON.parse(t.dataset.user)
      } catch (t) {}
     }()
    }
   })), reactTurbolinks.register("user-card-store", Pt, (function(t) {
    return {
     container: t,
     user: JSON.parse(t.dataset.user)
    }
   })), reactTurbolinks.register("user-card-tooltip", Wt, (function(t) {
    return {
     container: t,
     lookup: t.dataset.lookup
    }
   })), $(document).ready((function() {
    $(document).on("mouseover", ".js-usercard", Rt), $(document).on("mouseenter", ".js-react--user-card-tooltip", Nt), $(document).on("mouseleave", ".js-react--user-card-tooltip", zt), $(document).on("turbolinks:before-cache", Dt)
   })), reactTurbolinks.register("user-cards", qt.a, (function(t) {
    return {
     modifiers: function() {
      try {
       return JSON.parse(t.dataset.modifiers)
      } catch (t) {}
     }(),
     users: function() {
      try {
       return JSON.parse(t.dataset.users)
      } catch (t) {}
     }()
    }
   })), reactTurbolinks.register("wiki-search", Xt), reactTurbolinks.register("landing-news", (function({
    posts: t
   }) {
    return f.createElement("div", {
     className: "landing-news"
    }, t.length > 0 && f.createElement(f.Fragment, null, f.createElement("div", {
     className: "landing-news__posts"
    }, f.createElement(B.a, {
     post: t[0],
     modifiers: ["landing", "hover"]
    })), f.createElement("div", {
     className: "landing-news__posts"
    }, R.slice(t, 1).map((t, e) => f.createElement(B.a, {
     post: t,
     modifiers: ["landing", "hover"],
     key: e
    }))), f.createElement("div", {
     className: "landing-news__link"
    }, f.createElement(F.a, {
     hasMore: !0,
     loading: !1,
     modifiers: ["no-icon"],
     label: osu.trans("home.landing.see_more_news"),
     url: Object(o.route)("news.index")
    }))))
   }), (function(t) {
    return {
     posts: osu.parseJson("json-posts")
    }
   }))
  },
  icRW: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Menu = function() {
     function e() {
      this.refresh = t(this.refresh, this), this.hideMenu = t(this.hideMenu, this), this.onMouseLeave = t(this.onMouseLeave, this), this.onMouseEnter = t(this.onMouseEnter, this), this.onTouchStart = t(this.onTouchStart, this), this.onGlobalTouchstart = t(this.onGlobalTouchstart, this), this.currentTree = t(this.currentTree, this), this.defaultMenu = t(this.defaultMenu, this), this.menuTimeout = 150, $(document).on("touchstart", ".js-menu", this.onTouchStart), $(document).on("mouseenter", ".js-menu", this.onMouseEnter), $(document).on("mouseleave", ".js-menu", this.onMouseLeave), $(document).on("touchstart", this.onGlobalTouchstart), $(document).on("turbolinks:load", this.refresh)
     }
     return e.prototype.$menuLink = function(t) {
      return $(".js-menu[data-menu-target" + (t ? "='" + t + "'" : "") + "]")
     }, e.prototype.closestMenuId = function(t) {
      return t.closest("[data-menu-id]").attr("data-menu-id")
     }, e.prototype.defaultMenu = function() {
      var t, e;
      return null != (t = document.querySelector('.js-menu[data-menu-default="1"]')) && null != (e = t.dataset) ? e.menuTarget : void 0
     }, e.prototype.parentsMenuId = function(t) {
      return t.parents("[data-menu-id]").attr("data-menu-id")
     }, e.prototype.currentTree = function() {
      var t, e;
      if (!this.currentMenu) return [];
      for (t = [e = this.currentMenu]; e = this.closestMenuId(this.$menuLink(e));) t.push(e);
      return t
     }, e.prototype.onGlobalTouchstart = function(t) {
      var e;
      if (this.currentMenu) {
       for (e = t.target; e;) {
        if (e.classList.contains("js-menu")) return;
        e = e.parentElement
       }
       return this.hideMenu()
      }
     }, e.prototype.onTouchStart = function(t) {
      var e, i, n, s, r, o;
      if (i = t.currentTarget, null != (s = i.dataset.menuTarget)) return e = $(s), t.preventDefault(), r = parseInt(null != (n = i.dataset.menuShowDelay) ? n : this.menuTimeout, 10), Timeout.clear(this.refreshTimeout), this.refreshTimeout = Timeout.set(r, (o = this, function() {
       return o.currentMenu = o.currentMenu === s ? o.closestMenuId(e) : s, o.refresh()
      }))
     }, e.prototype.onMouseEnter = function(t) {
      var e, i, n, s;
      return e = t.currentTarget, n = parseInt(null != (i = e.dataset.menuShowDelay) ? i : this.menuTimeout, 10), Timeout.clear(this.refreshTimeout), this.refreshTimeout = Timeout.set(n, (s = this, function() {
       return s.currentMenu = e.dataset.menuTarget, null == s.currentMenu && (s.currentMenu = s.closestMenuId($(e))), s.refresh()
      }))
     }, e.prototype.onMouseLeave = function(t) {
      var e, i;
      return e = $(t.currentTarget), Timeout.clear(this.refreshTimeout), this.refreshTimeout = Timeout.set(this.menuTimeout, (i = this, function() {
       return i.currentMenu = i.parentsMenuId(e), i.refresh()
      }))
     }, e.prototype.hideMenu = function() {
      return Timeout.clear(this.refreshTimeout), this.refreshTimeout = Timeout.set(this.menuTimeout, (t = this, function() {
       return t.currentMenu = null, t.refresh()
      }));
      var t
     }, e.prototype.refresh = function() {
      var t, e, i, n, s, r, o;
      for (null == this.currentMenu && (this.currentMenu = this.defaultMenu()), r = document.querySelectorAll(".js-menu[data-menu-id]"), t = this.currentTree(), $.publish("menu:current", this.currentMenu), o = [], e = 0, i = r.length; e < i; e++) s = (n = r[e]).getAttribute("data-menu-id"), -1 === t.indexOf(s) ? (Fade.out(n), o.push(this.$menuLink(s).removeClass("js-menu--active"))) : (Fade.in(n), this.$menuLink(s).addClass("js-menu--active"), o.push($(n).trigger("menu:showing")));
      return o
     }, e
    }()
   }).call(window)
  },
  jepR: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumCover = function() {
     function e() {
      var e;
      this.refresh = t(this.refresh, this), this.remove = t(this.remove, this), this.updateOptions = t(this.updateOptions, this), this.update = t(this.update, this), this.setOverlay = t(this.setOverlay, this), this.initFileupload = t(this.initFileupload, this), this.isModalOpen = t(this.isModalOpen, this), this.hasCoverEditor = t(this.hasCoverEditor, this), this.hasCover = t(this.hasCover, this), this.checkModal = t(this.checkModal, this), this.$uploadButton = t(this.$uploadButton, this), this.header = document.getElementsByClassName("js-forum-cover--header"), this.uploadButton = document.getElementsByClassName("js-forum-cover--upload-button"), this.removeButton = document.getElementsByClassName("js-forum-cover--remove-button"), this.overlay = document.getElementsByClassName("js-forum-cover--overlay"), this.loading = document.getElementsByClassName("js-forum-cover--loading"), this.modal = document.getElementsByClassName("js-forum-cover--modal"), $.subscribe("click-menu:current", this.checkModal), $(document).on("click", ".js-forum-cover--remove-button", this.remove), $.subscribe("dragenterGlobal", (e = this, function() {
       return e.setOverlay("active")
      })), $.subscribe("dragendGlobal", function(t) {
       return function() {
        return t.setOverlay("hidden")
       }
      }(this)), $(document).on("dragenter", ".js-forum-cover--overlay", function(t) {
       return function() {
        return t.setOverlay("hover")
       }
      }(this)), $(document).on("dragleave", ".js-forum-cover--overlay", function(t) {
       return function() {
        return t.setOverlay("active")
       }
      }(this)), $(document).on("turbolinks:load", this.refresh)
     }
     return e.prototype.$uploadButton = function() {
      return $(this.uploadButton[0])
     }, e.prototype.checkModal = function(t, e) {
      if ("forum-cover-edit" === e.target) return this.initFileupload()
     }, e.prototype.hasCover = function() {
      return "post" !== this.uploadButton[0].dataset.customMethod
     }, e.prototype.hasCoverEditor = function() {
      return this.uploadButton.length > 0
     }, e.prototype.isModalOpen = function(t) {
      var e;
      return !!this.hasCoverEditor() && "hidden" !== (null != (e = this.modal[0]) ? e.dataset.visibility : void 0)
     }, e.prototype.initFileupload = function() {
      var t, e;
      if (this.isModalOpen() && !this.uploadButton[0]._initialized) return this.uploadButton[0]._initialized = !0, t = $(".js-forum-cover--modal"), this.$uploadButton().fileupload({
       method: "POST",
       paramName: "cover_file",
       dataType: "json",
       dropZone: t,
       submit: (e = this, function() {
        return e.uploadButton[0].dataset.state = "loading"
       }),
       done: function(t) {
        return function(e, i) {
         return t.update(i.result)
        }
       }(this),
       fail: osu.fileuploadFailCallback(this.$uploadButton),
       complete: function(t) {
        return function(e, i) {
         return t.uploadButton[0].dataset.state = ""
        }
       }(this)
      }), this.updateOptions()
     }, e.prototype.setOverlay = function(t) {
      if (this.hasCoverEditor() && t !== this.overlay[0].getAttribute("data-state")) return this.overlay[0].setAttribute("data-state", t)
     }, e.prototype.update = function(t) {
      return $(".js-forum-cover--input").val(t.id), this.uploadButton[0].dataset.url = t.url, this.uploadButton[0].dataset.customMethod = t.method, this.uploadButton[0].dataset.fileUrl = t.fileUrl || "", this.updateOptions(), this.refresh()
     }, e.prototype.updateOptions = function() {
      if (this.uploadButton[0]._initialized) return this.$uploadButton().fileupload("option", {
       url: this.uploadButton[0].dataset.url,
       formData: {
        _method: this.uploadButton[0].dataset.customMethod
       }
      })
     }, e.prototype.remove = function(t) {
      var e;
      if (t.preventDefault(), this.hasCover() && confirm(t.currentTarget.dataset.destroyConfirm)) return this.removeButton[0].dataset.state = "loading", $.ajax({
       url: this.uploadButton[0].dataset.url,
       method: "delete"
      }).done((e = this, function(t) {
       return e.update(t)
      })).always(function(t) {
       return function() {
        return t.removeButton[0].dataset.state = ""
       }
      }(this))
     }, e.prototype.refresh = function() {
      var t, e;
      if (this.hasCoverEditor()) return t = this.uploadButton[0].dataset.fileUrl || this.uploadButton[0].dataset.defaultFileUrl, $(this.header).css({
       backgroundImage: null != (e = osu.urlPresence(t)) ? e : ""
      }), this.removeButton[0].disabled = !this.hasCover(), this.initFileupload()
     }, e
    }()
   }).call(window)
  },
  kAex: function(t, e) {
   (function() {
    var t;
    t = document.getElementsByClassName("js-navbar-mobile--top-icon"), $(document).on("show.bs.collapse", ".js-navbar-mobile--menu", (function() {
     return Fade.out(t[0])
    })), $(document).on("hide.bs.collapse", ".js-navbar-mobile--menu", (function() {
     return Fade.in(t[0])
    }))
   }).call(window)
  },
  lPUA: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.StickyHeader = function() {
     function e() {
      var e;
      this.stickOrUnstick = t(this.stickOrUnstick, this), this.shouldStick = t(this.shouldStick, this), this.shouldPin = t(this.shouldPin, this), this.setVisible = t(this.setVisible, this), this.pin = t(this.pin, this), this.onScroll = t(this.onScroll, this), this.header = document.getElementsByClassName("js-pinned-header"), this.marker = document.getElementsByClassName("js-sticky-header"), this.pinnedSticky = document.getElementsByClassName("js-pinned-header-sticky"), this.stickyBreadcrumbs = document.getElementsByClassName("js-sticky-header-breadcrumbs"), this.stickyContent = document.getElementsByClassName("js-sticky-header-content"), $(window).on("throttled-scroll", this.onScroll), $(document).on("turbolinks:load osu:page:change", (e = this, function() {
       return Timeout.set(0, e.onScroll)
      })), $(window).on("throttled-resize", this.stickOrUnstick)
     }
     return e.prototype.breadcrumbsElement = function() {
      return this.stickyBreadcrumbs[0]
     }, e.prototype.contentElement = function() {
      return this.stickyContent[0]
     }, e.prototype.headerHeight = function() {
      var t;
      return t = window._styles.header, osu.isMobile() ? t.heightMobile : t.heightSticky
     }, e.prototype.onScroll = function() {
      return this.pin(), this.stickOrUnstick()
     }, e.prototype.pin = function() {
      if (null != this.header[0]) return this.shouldPin() ? document.body.classList.add("js-header-is-pinned") : document.body.classList.remove("js-header-is-pinned")
     }, e.prototype.scrollOffset = function(t) {
      var e;
      return e = null != this.pinnedSticky[0] ? this.pinnedSticky[0].getBoundingClientRect().height : 0, Math.max(0, t - this.headerHeight() - e)
     }, e.prototype.setVisible = function(t) {
      return Fade.toggle(this.pinnedSticky[0], t), $(document).trigger("sticky-header:sticking", [t])
     }, e.prototype.shouldPin = function(t) {
      return null == t && (t = window.pageYOffset), t > 30 || this.shouldStick()
     }, e.prototype.shouldStick = function() {
      if (this.marker.length > 0 && null != this.pinnedSticky[0]) return this.marker[0].getBoundingClientRect().top < this.headerHeight() + this.pinnedSticky[0].getBoundingClientRect().height
     }, e.prototype.stickOrUnstick = function() {
      var t;
      if (null != (t = this.shouldStick())) return this.setVisible(t)
     }, e
    }()
   }).call(window)
  },
  nP95: function(t, e, i) {
   "use strict";
   e.a = function(t) {
    var e = this.constructor;
    return this.then((function(i) {
     return e.resolve(t()).then((function() {
      return i
     }))
    }), (function(i) {
     return e.resolve(t()).then((function() {
      return e.reject(i)
     }))
    }))
   }
  },
  o5lo: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumTopicWatchAjax = function() {
     function e() {
      this.shouldContinue = t(this.shouldContinue, this), this.loading = t(this.loading, this), this.fail = t(this.fail, this), this.done = t(this.done, this), this.abortAll = t(this.abortAll, this), $(document).on("ajax:before", ".js-forum-topic-watch-ajax", this.shouldContinue), $(document).on("ajax:send", ".js-forum-topic-watch-ajax", this.loading), $(document).on("ajax:error", ".js-forum-topic-watch-ajax", this.fail), $(document).on("ajax:success", ".js-forum-topic-watch-ajax", this.done), this.xhr = [], this.unknownState = !1
     }
     return e.prototype.abortAll = function() {
      var t, e;
      for (t = []; null != (e = this.xhr.pop());) t.push(e.abort());
      return t
     }, e.prototype.done = function() {
      return this.unknownState = !1
     }, e.prototype.fail = function(t, e, i) {
      var n;
      n = t.currentTarget, "abort" === i && (n.dataset.skipAjaxErrorPopup = "1"), n.classList.remove("js-forum-topic-watch-ajax--loading"), n.disabled = !1
     }, e.prototype.loading = function(t, e) {
      var i;
      this.unknownState = !0, this.abortAll(), this.xhr.push(e), LoadingOverlay.hide(), (i = t.currentTarget).dataset.skipAjaxErrorPopup = "0", i.classList.add("js-forum-topic-watch-ajax--loading"), i.disabled = !0
     }, e.prototype.shouldContinue = function(t) {
      return this.unknownState || "1" !== t.currentTarget.dataset.forumTopicWatchAjaxIsActive
     }, e
    }()
   }).call(window)
  },
  oWhP: function(t, e) {
   (function() {
    this.Blackout = function() {
     function t() {}
     return t.el = document.getElementsByClassName("js-blackout"), t.hide = function() {
      return t.toggle(!1)
     }, t.show = function() {
      return t.toggle(!0)
     }, t.toggle = function(e, i) {
      var n;
      if (null != (n = t.el[0])) return e && null != i || (i = null), n.style.opacity = i, Fade.toggle(n, e)
     }, t
    }()
   }).call(window)
  },
  orKb: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumPostPreview = function() {
     function e() {
      this.hidePreview = t(this.hidePreview, this), this.showPreview = t(this.showPreview, this), this.fetchPreview = t(this.fetchPreview, this), $(document).on("click", ".js-forum-post-preview--show", this.fetchPreview), $(document).on("click", ".js-forum-post-preview--hide", this.hidePreview)
     }
     return e.prototype.fetchPreview = function(t) {
      var e, i, n, s;
      if (i = $(t.target).parents(".js-forum-post-preview--form"), n = i.find(".js-forum-post-preview--preview"), e = i.find(".js-forum-post-preview--body"), s = e.val(), e.attr("data-last-text"), "preview" !== i.attr("data-state") && osu.present(s)) {
       var r;
       if (s !== e.attr("data-last-text")) return i.attr("data-state", "loading-preview"), $.ajax({
        url: laroute.route("bbcode-preview"),
        method: "POST",
        data: {
         text: s
        }
       }).done((r = this, function(i) {
        return e.attr("data-last-text", s), n.html(i), osu.pageChange(), r.showPreview(t)
       }));
       this.showPreview(t)
      }
     }, e.prototype.showPreview = function(t) {
      return $(t.target).parents(".js-forum-post-preview--form").attr("data-state", "preview"), osu.pageChange()
     }, e.prototype.hidePreview = function(t) {
      var e;
      return (e = $(t.target).parents(".js-forum-post-preview--form")).attr("data-state", "write"), osu.pageChange(), e.find(".js-forum-post-preview--body").focus()
     }, e
    }()
   }).call(window)
  },
  pAZq: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.FancyGraph = function() {
     function e() {
      this.resize = t(this.resize, this), this.initialize = t(this.initialize, this), $(window).on("throttled-resize", this.resize), $(document).on("turbolinks:load", this.initialize)
     }
     return e.prototype.container = document.getElementsByClassName("js-fancy-graph"), e.prototype.initialize = function() {
      var t;
      if (null != this.container[0]) return null != (t = this.container[0])._chart ? t._chart : t._chart = new FancyChart(this.container[0])
     }, e.prototype.resize = function() {
      var t;
      if (null != this.container[0]) return null != (t = this.container[0]._chart) ? t.resize() : void 0
     }, e
    }()
   }).call(window)
  },
  pVrk: function(t, e) {
   (function() {
    this.FormPlaceholderHide = function() {
     function t() {
      $(document).on("focus", ".js-form-placeholder-hide", this.onFocus), $(document).on("blur", ".js-form-placeholder-hide", this.onBlur)
     }
     return t.prototype.onBlur = function(t) {
      if (t.target._origPlaceholder) return t.target.setAttribute("placeholder", t.target._origPlaceholder), t.target._origPlaceholder = null
     }, t.prototype.onFocus = function(t) {
      return t.target._origPlaceholder = t.target.getAttribute("placeholder"), t.target.setAttribute("placeholder", "")
     }, t
    }()
   }).call(window)
  },
  "pt+B": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.ForumTopicTitle = function() {
     function e() {
      this.save = t(this.save, this), this.onKeyup = t(this.onKeyup, this), this.onInput = t(this.onInput, this), this.editShow = t(this.editShow, this), this.cancel = t(this.cancel, this), this.abort = t(this.abort, this), this.input = document.getElementsByClassName("js-forum-topic-title--input"), this.saveButton = document.getElementsByClassName("js-forum-topic-title--save"), this.title = document.getElementsByClassName("js-forum-topic-title--title"), this.toggleables = document.getElementsByClassName("js-forum-topic-title--toggleable"), addEventListener("turbolinks:before-cache", this.abort), $(document).on("click", ".js-forum-topic-title--edit-start", this.editShow), $(document).on("click", ".js-forum-topic-title--save", this.save), $(document).on("keyup", ".js-forum-topic-title--input", this.onKeyup), $(document).on("click", ".js-forum-topic-title--cancel", this.cancel), $(document).on("input", ".js-forum-topic-title--input", this.onInput)
     }
     return e.prototype.abort = function() {
      var t;
      return null != (t = this.xhr) ? t.abort() : void 0
     }, e.prototype.cancel = function() {
      return this.abort(), $(this.toggleables).removeAttr("data-title-edit"), this.input[0].value = this.input[0].defaultValue
     }, e.prototype.editShow = function() {
      return $(this.toggleables).attr("data-title-edit", 1), this.input[0].selectionStart = this.input[0].value.length, this.input[0].focus()
     }, e.prototype.onInput = function() {
      return this.saveButton[0].disabled = !osu.present(this.input[0].value)
     }, e.prototype.onKeyup = function(t) {
      switch (t.keyCode) {
       case 13:
        return this.save();
       case 27:
        return this.cancel()
      }
     }, e.prototype.save = function() {
      var t, e, i, n;
      if (e = (t = this.input[0]).value, null != osu.presence(e)) return e === t.defaultValue ? this.cancel() : (t.disabled = !0, this.saveButton[0].disabled = !0, this.abort(), this.xhr = $.ajax(t.dataset.url, {
       method: "PUT",
       data: (i = {}, i["" + t.name] = e, i)
      }).done((function() {
       return osu.reloadPage()
      })).fail((n = this, function(e) {
       return t.disabled = !1, n.saveButton[0].disabled = !1, osu.emitAjaxError()(e)
      })))
     }, e
    }()
   }).call(window)
  },
  rEDz: function(t, e) {
   (function() {
    $(document).on("ajax:success", ".js-edit-post-start", (function(t, e, i, n) {
     var s;
     return $(t.target).trigger("ajax:complete", [n, i]), (s = $(t.target).parents(".js-forum-post-edit--container")).attr("data-original-post", s.html()).html(e).find("[name=body]").focus(), osu.pageChange()
    })), $(document).on("click", ".js-edit-post-cancel", (function(t) {
     var e;
     return t.preventDefault(), (e = $(t.target).parents(".js-forum-post-edit--container")).html(e.attr("data-original-post")).attr("data-original-post", null), osu.pageChange()
    })), $(document).on("ajax:success", ".js-forum-post-edit", (function(t, e, i, n) {
     return $(t.target).trigger("ajax:complete", [n, i]).parents(".js-forum-post").replaceWith(e), osu.pageChange()
    }))
   }).call(window)
  },
  rf6O: function(t, e) {
   t.exports = PropTypes
  },
  sWOL: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.FormConfirmation = function() {
     function e(e) {
      this.formError = e, this.onInput = t(this.onInput, this), this.boot = t(this.boot, this), $(document).on("input", ".js-form-confirmation", this.onInput)
     }
     return e.prototype.boot = function(t) {
      var e, i, n;
      if (null == t.formConfirmation) return i = {}, _.endsWith(t.name, "_confirmation") || _.endsWith(t.name, "_confirmation]") ? (n = t.name.replace(/_confirmation(]?)$/, "$1"), i.confirmation = t, i.main = $(t).closest("form").find("[name='" + n + "']")[0]) : (e = t.name.replace(/(]?)$/, "_confirmation$1"), i.main = t, i.confirmation = $(t).closest("form").find("[name='" + e + "']")[0]), i.main.formConfirmation = i, i.confirmation.formConfirmation = i
     }, e.prototype.onInput = function(t) {
      var e, i, n, s;
      return e = t.currentTarget, this.boot(e), s = (i = e.formConfirmation).main.value, n = i.confirmation.value, 0 === s.length || 0 === n.length ? this.formError.setOneError(i.confirmation, []) : s === n ? this.formError.setOneError(i.confirmation, []) : this.formError.setOneError(i.confirmation, [osu.trans("model_validation.wrong_confirmation")])
     }, e
    }()
   }).call(window)
  },
  sebX: function(t, e) {
   Lang._origGetPluralForm = Lang._getPluralForm, Lang._getPluralForm = t => {
    const e = Lang.locale;
    "pt-br" === e && (Lang.locale = "pt");
    const i = Lang._origGetPluralForm(t);
    return Lang.locale = e, i
   }
  },
  snad: function(t, e) {
   (function() {
    $(document).on("click", 'a[href^="#"]', (function(t) {
     var e, i, n, s;
     if ("collapse" !== (i = t.currentTarget).dataset.toggle && (e = i.href, "" !== (s = decodeURIComponent(e.slice(e.indexOf("#") + 1))) && null != (n = document.getElementById(s)))) return t.preventDefault(), location.href !== e && Turbolinks.controller.advanceHistory(e), n.scrollIntoView()
    })), Turbolinks.HttpRequest.prototype.requestLoaded = function() {
     return this.endRequest((t = this, function() {
      var e, i;
      return 200 <= (e = t.xhr.status) && e < 300 || 401 === (i = t.xhr.status) || 403 === i || 404 === i || 500 === i ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
     }));
     var t
    }, Turbolinks.Controller.prototype.advanceHistory = function(t) {
     var e, i;
     if (t !== document.location.href) return i = this.view.getSnapshot(), e = this.lastRenderedLocation, this.cache.put(e, i.clone()), this.lastRenderedLocation = Turbolinks.Location.wrap(t), this.pushHistoryWithLocationAndRestorationIdentifier(t, Turbolinks.uuid())
    }, Turbolinks.Snapshot.prototype.hasAnchor = function() {
     return !0
    }, Turbolinks.Controller.prototype.locationIsVisitable = function(t) {
     return t.isPrefixedBy(this.view.getRootLocation()) && _exported.OsuUrlHelper.isInternal(t) && _exported.OsuUrlHelper.isHTML(t)
    }
   }).call(window)
  },
  srfr: function(t, e, i) {
   "use strict";
   (function(t) {
    var n = i("nP95"),
     s = setTimeout;

    function r(t) {
     return Boolean(t && void 0 !== t.length)
    }

    function o() {}

    function a(t) {
     if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
     if ("function" != typeof t) throw new TypeError("not a function");
     this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(t, this)
    }

    function u(t, e) {
     for (; 3 === t._state;) t = t._value;
     0 !== t._state ? (t._handled = !0, a._immediateFn((function() {
      var i = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null !== i) {
       var n;
       try {
        n = i(t._value)
       } catch (t) {
        return void c(e.promise, t)
       }
       l(e.promise, n)
      } else(1 === t._state ? l : c)(e.promise, t._value)
     }))) : t._deferreds.push(e)
    }

    function l(t, e) {
     try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
      if (e && ("object" == typeof e || "function" == typeof e)) {
       var i = e.then;
       if (e instanceof a) return t._state = 3, t._value = e, void h(t);
       if ("function" == typeof i) return void p((n = i, s = e, function() {
        n.apply(s, arguments)
       }), t)
      }
      t._state = 1, t._value = e, h(t)
     } catch (e) {
      c(t, e)
     }
     var n, s
    }

    function c(t, e) {
     t._state = 2, t._value = e, h(t)
    }

    function h(t) {
     2 === t._state && 0 === t._deferreds.length && a._immediateFn((function() {
      t._handled || a._unhandledRejectionFn(t._value)
     }));
     for (var e = 0, i = t._deferreds.length; e < i; e++) u(t, t._deferreds[e]);
     t._deferreds = null
    }

    function d(t, e, i) {
     this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
    }

    function p(t, e) {
     var i = !1;
     try {
      t((function(t) {
       i || (i = !0, l(e, t))
      }), (function(t) {
       i || (i = !0, c(e, t))
      }))
     } catch (t) {
      if (i) return;
      i = !0, c(e, t)
     }
    }
    a.prototype.catch = function(t) {
     return this.then(null, t)
    }, a.prototype.then = function(t, e) {
     var i = new this.constructor(o);
     return u(this, new d(t, e, i)), i
    }, a.prototype.finally = n.a, a.all = function(t) {
     return new a((function(e, i) {
      if (!r(t)) return i(new TypeError("Promise.all accepts an array"));
      var n = Array.prototype.slice.call(t);
      if (0 === n.length) return e([]);
      var s = n.length;

      function o(t, r) {
       try {
        if (r && ("object" == typeof r || "function" == typeof r)) {
         var a = r.then;
         if ("function" == typeof a) return void a.call(r, (function(e) {
          o(t, e)
         }), i)
        }
        n[t] = r, 0 == --s && e(n)
       } catch (t) {
        i(t)
       }
      }
      for (var a = 0; a < n.length; a++) o(a, n[a])
     }))
    }, a.resolve = function(t) {
     return t && "object" == typeof t && t.constructor === a ? t : new a((function(e) {
      e(t)
     }))
    }, a.reject = function(t) {
     return new a((function(e, i) {
      i(t)
     }))
    }, a.race = function(t) {
     return new a((function(e, i) {
      if (!r(t)) return i(new TypeError("Promise.race accepts an array"));
      for (var n = 0, s = t.length; n < s; n++) a.resolve(t[n]).then(e, i)
     }))
    }, a._immediateFn = "function" == typeof t && function(e) {
     t(e)
    } || function(t) {
     s(t, 0)
    }, a._unhandledRejectionFn = function(t) {
     "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    }, e.a = a
   }).call(this, i("Jfng").setImmediate)
  },
  "t+h0": function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.FormToggle = function() {
     function e() {
      this.sync = t(this.sync, this), this.onChange = t(this.onChange, this), addEventListener("turbolinks:load", this.sync), $(document).on("change", ".js-form-toggle--input", this.onChange)
     }
     return e.prototype.onChange = function(t) {
      return this.toggle(t.currentTarget)
     }, e.prototype.sync = function() {
      var t, e, i, n, s;
      for (s = [], t = 0, n = (i = document.getElementsByClassName("js-form-toggle--input")).length; t < n; t++) e = i[t], s.push(this.toggle(e));
      return s
     }, e.prototype.toggle = function(t) {
      var e, i;
      return i = t.dataset.formToggleId, e = t.checked ? "Down" : "Up", $(".js-form-toggle--form[data-form-toggle-id='" + i + "']").stop()["slide" + e]()
     }, e
    }()
   }).call(window)
  },
  tTWz: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.GlobalDrag = function() {
     function e() {
      this.dragend = t(this.dragend, this), this.dragenter = t(this.dragenter, this), $(document).on("dragenter", this.dragenter), $(document).on("dragover", this.dragend)
     }
     return e.prototype.dragenter = function() {
      if (!this.dragging) return this.dragging = !0, $.publish("dragenterGlobal")
     }, e.prototype.dragend = function(t) {
      var e, i;
      if (this.dragging) return i = this, e = function() {
       return i.dragging = !1, $.publish("dragendGlobal")
      }, Timeout.clear(this.dragendTimer), this.dragendTimer = Timeout.set(100, e)
     }, e
    }()
   }).call(window)
  },
  upGs: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.Scale = function() {
     function e() {
      this.resizeAll = t(this.resizeAll, this), this.resize = t(this.resize, this), this.readParentSize = t(this.readParentSize, this), this.els = document.getElementsByClassName("js-scale"), $(document).on("turbolinks:load", this.resizeAll), $(window).on("throttled-resize", this.resizeAll)
     }
     return e.prototype.readParentSize = function(t) {
      return t.parentSize = t.parentElement.getBoundingClientRect()
     }, e.prototype.resize = function(t) {
      var e, i, n;
      switch (i = t.parentSize, t.dataset.scale) {
       case "ws":
        i.width / i.height > 16 / 9 ? e = 9 / 16 * (n = i.width) : n = 16 / 9 * (e = i.height)
      }
      if (null != e && null != n) return t.style.height = e + "px", t.style.width = n + "px"
     }, e.prototype.resizeAll = function() {
      var t, e, i, n, s, r, o, a;
      for (e = 0, n = (r = this.els).length; e < n; e++) t = r[e], this.readParentSize(t);
      for (a = [], i = 0, s = (o = this.els).length; i < s; i++) t = o[i], a.push(this.resize(t));
      return a
     }, e
    }()
   }).call(window)
  },
  vqYE: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.AccountEditBlocklist = function() {
     function e() {
      this.toggle = t(this.toggle, this), this.updateBlockCount = t(this.updateBlockCount, this), $(document).on("click", this.jsClass, this.toggle), $.subscribe("user:update", this.updateBlockCount)
     }
     return e.prototype.element = "block-list__content", e.prototype.jsClass = ".js-account-edit-blocklist", e.prototype.updateBlockCount = function() {
      var t, e;
      if (null != currentUser.id) return $(this.jsClass + "-count").text(osu.trans("users.blocks.blocked_count", {
       count: null != (t = null != (e = currentUser.blocks) ? e.length : void 0) ? t : 0
      }))
     }, e.prototype.toggle = function(t) {
      var e;
      return t.preventDefault(), $("." + this.element).toggleClass("hidden"), e = $("." + this.element).hasClass("hidden") ? osu.trans("common.buttons.show") : osu.trans("common.buttons.hide"), $(this.jsClass).text(e)
     }, e
    }()
   }).call(window)
  },
  wuZa: function(t, e) {
   (function() {
    var t = function(t, e) {
     return function() {
      return t.apply(e, arguments)
     }
    };
    this.CurrentUserObserver = function() {
     function e() {
      this.setData = t(this.setData, this), 
      this.setCovers = t(this.setCovers, this), 
      this.setAvatars = t(this.setAvatars, this), 
      this.reinit = t(this.reinit, this), 
      this.covers = document.getElementsByClassName("js-current-user-cover"), 
      this.avatars = document.getElementsByClassName("js-current-user-avatar")
     }
     return e.prototype.reinit = function() {
      return this.setAvatars(), this.setCovers(), this.setSentryUser()
     }, e.prototype.setAvatars = function(t) {
      var e, i, n, s, r;
      for (null == t && (t = this.avatars),
        (e = osu.urlPresence("https://a.ainu.pw/" + "userid")), 
        r = [],
        n = 0,
        s = t.length; n < s; n++) i = t[n],
        r.push(i.style.backgroundImage = e);
      return r
     }, e.prototype.setCovers = function(t) {
      var e, i, n, s, r;
      for (null == t && (t = this.covers),
        (e = osu.urlPresence("https://osu.ppy.sh/images/headers/profile-covers/c2.jpg")),
        r = [],
        n = 0,
        s = t.length; n < s; n++) i = t[n],
        r.push(i.style.backgroundImage = e);
      return r
     }, e.prototype.setData = function(t, e) {
      return window.currentUser = e, this.reinit()
     }, e.prototype.setSentryUser = function() {
      if ("undefined" != typeof Sentry && null !== Sentry) return Sentry.configureScope((function(t) {
       return t.setUser({
        id: currentUser.id,
        username: currentUser.username
       })
      }))
     }, e
    }()
   }).call(window)
  },
  wy2R: function(t, e) {
   t.exports = moment
  },
  xHv7: function(t, e) {
   (function() {
    this.FormClear = function() {
     function t() {
      $(document).on("ajax:success", ".js-form-clear", this.clear)
     }
     return t.prototype.clear = function(t) {
      return t.currentTarget.reset()
     }, t
    }()
   }).call(window)
  },
  y0Iw: function(t, e) {
   (function() {
    this.BeatmapDiscussionHelper = function() {
     function t() {}
     return t.DEFAULT_BEATMAP_ID = "-", t.DEFAULT_MODE = "timeline", t.DEFAULT_FILTER = "total", t.MAX_MESSAGE_PREVIEW_LENGTH = 100, t.MAX_LENGTH_TIMELINE = 750, t.MODES = ["events", "general", "generalAll", "timeline", "reviews"], t.FILTERS = ["deleted", "hype", "mapperNotes", "mine", "pending", "praises", "resolved", "total"], t.canModeratePosts = function(t) {
      return null == t && (t = currentUser), t.is_admin || t.is_moderator
     }, t.discussionLinkify = function(e) {
      var i, n;
      return n = new URL(window.location), i = t.urlParse(n.href), e.replace(osu.urlRegex, (function(e, s, r) {
       var o, a, u, l;
       return (l = new URL(e)).host === n.host && null != (null != (u = t.urlParse(l.href, null, {
        forceDiscussionId: !0
       })) ? u.discussionId : void 0) && (null != i && i.beatmapsetId === u.beatmapsetId ? (a = "#" + u.discussionId, o = 'class="js-beatmap-discussion--jump"') : a = u.beatmapsetId + "#" + u.discussionId), null == a && (a = r), "<a href='" + e + "' rel='nofollow' " + (null != o ? o : "") + ">" + (null != a ? a : e) + "</a>"
      }))
     }, t.discussionMode = function(t) {
      return "review" === t.message_type ? "reviews" : null != t.beatmap_id ? null != t.timestamp ? "timeline" : "general" : "generalAll"
     }, t.format = function(e, i) {
      var n, s, r, o, a, u, l;
      for (null == i && (i = {}), s = "beatmapset-discussion-message", e = (e = _.escape(e)).trim(), e = t.discussionLinkify(e), e = t.linkTimestamp(e, [s + "__timestamp"]), (null == (a = i.newlines) || a) && (e = e.split("\n").map((function(t) {
        return t.trim()
       })).join("<br>").replace(/(?:<br>){2,}/g, "<br><br>")), n = s, r = 0, o = (l = null != (u = i.modifiers) ? u : []).length; r < o; r++) n += " " + s + "--" + l[r];
      return "<div class='" + n + "'>" + e + "</div>"
     }, t.formatTimestamp = function(t) {
      var e, i, n;
      if (null != t) return i = t % 1e3, n = Math.floor(t / 1e3) % 60, e = Math.floor(t / 1e3 / 60), _.padStart(e, 2, 0) + ":" + _.padStart(n, 2, 0) + "." + _.padStart(i, 3, 0)
     }, t.linkTimestamp = function(t, e) {
      return null == e && (e = []), t.replace(/\b((\d{2}):(\d{2})[:.](\d{3})( \([\d,|]+\)|\b))/g, (function(t, i, n, s, r, o) {
       return osu.link(_exported.OsuUrlHelper.openBeatmapEditor(n + ":" + s + ":" + r + (null != o ? o : "")), i, {
        classNames: e
       })
      }))
     }, t.messageType = {
      icon: {
       hype: "fas fa-bullhorn",
       mapperNote: "far fa-sticky-note",
       praise: "fas fa-heart",
       problem: "fas fa-exclamation-circle",
       review: "fas fa-tasks",
       suggestion: "far fa-circle"
      },
      iconText: {
       mapperNote: ["far", "&#xf249;"],
       praise: ["fas", "&#xf004;"],
       problem: ["fas", "&#xf06a;"],
       resolved: ["far", "&#xf058;"],
       suggestion: ["far", "&#xf111;"]
      }
     }, t.previewMessage = function(e) {
      return e.length > t.MAX_MESSAGE_PREVIEW_LENGTH ? _.chain(e).truncate({
       length: t.MAX_MESSAGE_PREVIEW_LENGTH
      }).escape().value() : t.format(e, {
       newlines: !1
      })
     }, t.stateFromDiscussion = function(e) {
      var i;
      return null == e ? {} : {
       discussionId: e.id,
       beatmapsetId: e.beatmapset_id,
       beatmapId: null != (i = e.beatmap_id) ? i : t.DEFAULT_BEATMAP_ID,
       mode: t.discussionMode(e)
      }
     }, t.url = function(e, i) {
      var n, s, r, o, a, u, l, c, h, d, p, f, m, g;
      return null == e && (e = {}), null == i && (i = !1), r = (p = i ? _.assign(t.urlParse(), e) : e).beatmapsetId, s = p.beatmapId, n = p.beatmap, h = p.mode, c = p.filter, a = p.discussionId, l = p.discussions, o = p.discussion, g = p.user, d = {}, null != n && (r = n.beatmapset_id, s = n.id), d.beatmapset = r, d.mode = null != h ? h : t.DEFAULT_MODE, d.beatmap = null == s || "events" === (f = d.mode) || "generalAll" === f || "reviews" === f ? t.DEFAULT_BEATMAP_ID : s, null != c && c !== t.DEFAULT_FILTER && "events" !== d.mode && (d.filter = c), null != o && (a = o.id), null != a && (null == o && null != l && (o = _.find(l, {
       id: a
      })), null != o && (null != o && (u = t.stateFromDiscussion(o)), d.beatmapset = u.beatmapsetId, d.beatmap = u.beatmapId, d.mode = u.mode)), (m = new URL(laroute.route("beatmapsets.discussion", d))).hash = null != a ? m.hash = "/" + a : "", null != g ? m.searchParams.set("user", g) : m.searchParams.delete("user"), m.toString()
     }, t.urlParse = function(e, i, n) {
      var s, r, o, a, u, l, c, h, d, p, f;
      if (null == n && (n = {}), null == n.forceDiscussionId && (n.forceDiscussionId = !1), (d = (f = new URL(null != e ? e : document.location.href)).pathname.split(/\/+/))[0], c = d[1], r = d[2], h = d[3], s = d[4], l = d[5], u = d[6], "beatmapsets" === c && "discussion" === h) return r = parseInt(r, 10), s = parseInt(s, 10), p = {
       beatmapsetId: isFinite(r) ? r : void 0,
       beatmapId: isFinite(s) ? s : void 0,
       mode: _.includes(t.MODES, l) ? l : t.DEFAULT_MODE,
       filter: _.includes(t.FILTERS, u) ? u : t.DEFAULT_FILTER,
       user: null != f.searchParams.get("user") ? parseInt(f.searchParams.get("user"), 10) : void 0
      }, "/" === f.hash[1] && (a = parseInt(f.hash.slice(2), 10), isFinite(a) && (null != i ? (o = _.find(i, {
       id: a
      }), _.assign(p, t.stateFromDiscussion(o))) : n.forceDiscussionId && (p.discussionId = a))), p
     }, t.validMessageLength = function(e, i) {
      return (null != e ? e.length : void 0) > 0 && (!i || e.length <= t.MAX_LENGTH_TIMELINE)
     }, t
    }()
   }).call(window)
  },
  "yP+D": function(t, e) {
   (function() {
    var t = {}.hasOwnProperty;
    this.osu = {
     isIos: /iPad|iPhone|iPod/.test(navigator.platform),
     urlRegex: /(https?:\/\/((?:(?:[a-z0-9]\.|[a-z0-9][a-z0-9-]*[a-z0-9]\.)*[a-z][a-z0-9-]*[a-z0-9](?::\d+)?)(?:(?:(?:\/+(?:[a-z0-9$_\.\+!\*',;:@&=-]|%[0-9a-f]{2})*)*(?:\?(?:[a-z0-9$_\.\+!\*',;:@&=-]|%[0-9a-f]{2})*)?)?(?:#(?:[a-z0-9$_\.\+!\*',;:@&=\/?-]|%[0-9a-f]{2})*)?)?))/gi,
     bottomPage: function() {
      return 0 === osu.bottomPageDistance()
     },
     bottomPageDistance: function() {
      var t, e, i;
      return (t = null != (e = null != (i = document.documentElement) ? i : document.body.parent) ? e : document.body).scrollHeight - t.scrollTop - t.clientHeight
     },
     classWithModifiers: function(t, e) {
      var i, n, s, r;
      if (r = t, null != e)
       for (i = 0, n = e.length; i < n; i++) null != (s = e[i]) && (r += " " + t + "--" + s);
      return r
     },
     currentUserIsFriendsWith: function(t) {
      return _.find(currentUser.friends, {
       target_id: t
      })
     },
     executeAction: function(t) {
      if (null != t) return "1" === t.dataset.isFileupload ? $(t).trigger("fileuploadRetry") : t.submit ? $(t).submit() : t.click ? t.click() : void 0;
      osu.reloadPage()
     },
     groupColour: function(t) {
      var e;
      return {
       "--group-colour": null != (e = null != t ? t.colour : void 0) ? e : "initial"
      }
     },
     setHash: function(t) {
      var e;
      if (e = location.href.replace(/#.*/, ""), (e += t) !== location.href) return history.replaceState(history.state, null, e)
     },
     ajaxError: function(t) {
      if (!userLogin.showOnError({}, t) && !userVerification.showOnError({}, t)) return osu.popup(osu.xhrErrorMessage(t), "danger")
     },
     emitAjaxError: function(t) {
      return null == t && (t = document.body),
       function(e, i, n) {
        return $(t).trigger("ajax:error", [e, i, n])
       }
     },
     fileuploadFailCallback: function(t) {
      return function(e, i) {
       var n, s;
       return null == (s = (n = t())[0].dataset).isFileupload && (s.isFileupload = "1"), n.off("fileuploadRetry").one("fileuploadRetry", (function() {
        return i.submit()
       })), osu.emitAjaxError(n[0])(i.jqXHR)
      }
     },
     pageChange: function() {
      return Timeout.set(0, osu.pageChangeImmediate)
     },
     pageChangeImmediate: function() {
      return $(document).trigger("osu:page:change")
     },
     parseJson: function(t, e) {
      var i, n;
      if (null == e && (e = !1), null != (i = document.getElementById(t))) return n = JSON.parse(i.text), e && i.remove(), n
     },
     storeJson: function(t, e) {
      var i, n;
      return n = JSON.stringify(e), null == (i = document.getElementById(t)) && ((i = document.createElement("script")).id = t, i.type = "application/json", document.body.appendChild(i)), i.text = n
     },
     jsonClone: function(t) {
      return JSON.parse(JSON.stringify(null != t ? t : null))
     },
     isInputElement: function(t) {
      var e;
      return "INPUT" === (e = t.tagName) || "SELECT" === e || "TEXTAREA" === e || t.isContentEditable
     },
     isClickable: function(t) {
      var e;
      return !(!osu.isInputElement(t) && "A" !== (e = t.tagName) && "BUTTON" !== e) || !!t.parentNode && osu.isClickable(t.parentNode)
     },
     isDesktop: function() {
      return window.matchMedia("(min-width: 900px)").matches
     },
     isMobile: function() {
      return !osu.isDesktop()
     },
     focus: function(t) {
      var e;
      return t = $(t)[0], osu.isIos ? (e = t.style.fontSize, t.style.fontSize = "16px", t.focus(), t.style.fontSize = e) : t.focus()
     },
     src2x: function(t) {
      return {
       src: t,
       srcSet: t + " 1x, " + (null != t ? t.replace(/(\.[^.]+)$/, "@2x$1") : void 0) + " 2x"
      }
     },
     link: function(t, e, i) {
      var n;
      return null == i && (i = {}), (n = document.createElement("a")).setAttribute("href", t), i.isRemote && n.setAttribute("data-remote", !0), i.classNames && (n.className = i.classNames.join(" ")), n.textContent = e, i.props && _.each(i.props, (function(t, e) {
       return n.setAttribute(e, t)
      })), n.outerHTML
     },
     linkify: function(t, e) {
      return null == e && (e = !1), t.replace(osu.urlRegex, '<a href="$1" rel="nofollow noreferrer"' + (e ? ' target="_blank"' : "") + ">$2</a>")
     },
     timeago: function(t) {
      var e;
      return (e = document.createElement("time")).classList.add("timeago"), e.setAttribute("datetime", t), e.textContent = t, e.outerHTML
     },
     formatBytes: function(t, e) {
      var i, n;
      return null == e && (e = 2), n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], t < 1e3 ? t + " B" : (i = Math.floor(Math.log(t) / Math.log(1e3)), osu.formatNumber(t / Math.pow(1e3, i), e) + " " + n[i])
     },
     formatNumber: function(t, e, i, n) {
      return null == t ? null : (null == i && (i = {}), null != e && (i.minimumFractionDigits = e, i.maximumFractionDigits = e), t.toLocaleString(null != n ? n : currentLocale, i))
     },
     formatNumberSuffixed: function(t, e, i) {
      var n, s, r;
      return null == i && (i = {}), r = ["", "k", "m", "b", "t"], n = function(t) {
       return null == i && (i = {}), null != e && (i.minimumFractionDigits = e, i.maximumFractionDigits = e), t.toLocaleString("en", i)
      }, t < 1e3 ? "" + n(t) : (s = Math.min(r.length - 1, Math.floor(Math.log(t) / Math.log(1e3))), "" + n(t / Math.pow(1e3, s)) + r[s])
     },
     reloadPage: function(t) {
      var e;
      return null == t && (t = !0), $(document).off(".ujsHideLoadingOverlay"), Turbolinks.clearCache(), e = _.isEmpty(window.reloadUrl) ? location.href : window.reloadUrl, window.reloadUrl = null, osu.navigate(e, t, {
       action: "replace"
      })
     },
     urlPresence: function(t) {
      return osu.present(t) ? "url(" + t + ")" : null
     },
     navigate: function(t, e, i) {
      var n, s;
      return n = null != (s = (null != i ? i : {}).action) ? s : "advance", e && osu.keepScrollOnLoad(), Turbolinks.visit(t, {
       action: n
      })
     },
     keepScrollOnLoad: function() {
      var t;
      return t = [window.pageXOffset, window.pageYOffset], $(document).one("turbolinks:load", (function() {
       return window.scrollTo(t[0], t[1])
      }))
     },
     popup: function(t, e) {
      var i, n, s, r;
      return null == e && (e = "info"), n = $("#popup-container"), r = function() {
       return i.click()
      }, (i = $(".popup-clone").clone()).addClass("alert-" + e + " popup-active").removeClass("popup-clone"), i.find(".popup-text").html(t), "warning" === e || "danger" === e ? $("#overlay").off("click.close-alert").one("click.close-alert", r).fadeIn() : Timeout.set(5e3, r), "function" == typeof(s = document.activeElement).blur && s.blur(), i.appendTo(n).fadeIn()
     },
     popupShowing: function() {
      return $("#overlay").is(":visible")
     },
     presence: function(t) {
      return osu.present(t) ? t : null
     },
     present: function(t) {
      return null != t && "" !== t
     },
     promisify: function(t) {
      return new Promise((function(e, i) {
       return t.done(e).fail(i)
      }))
     },
     trans: function(t, e, i) {
      return null == e && (e = {}), osu.transExists(t, i) || (i = fallbackLocale), Lang.get(t, e, i)
     },
     transArray: function(t, e) {
      switch (null == e && (e = "common.array_and"), t.length) {
       case 0:
        return "";
       case 1:
        return "" + t[0];
       case 2:
        return t.join(osu.trans(e + ".two_words_connector"));
       default:
        return "" + t.slice(0, -1).join(osu.trans(e + ".words_connector")) + osu.trans(e + ".last_word_connector") + _.last(t)
      }
     },
     transChoice: function(t, e, i, n) {
      var s, r, o;
      return null == i && (i = {}), null == n && (n = currentLocale), (r = n === fallbackLocale) || osu.transExists(t, n) ? (n !== (s = Lang.getLocale()) && Lang.setLocale(n), i.count_delimited = osu.formatNumber(e, null, null, n), o = Lang.choice(t, e, i, n), null != s && Lang.setLocale(s), r || null != o ? o : (delete i.count_delimited, delete i.count, osu.transChoice(t, e, i, fallbackLocale))) : osu.transChoice(t, e, i, fallbackLocale)
     },
     transExists: function(t, e) {
      var i;
      return i = Lang.get(t, null, e), osu.present(i) && i !== t
     },
     uuid: function() {
      return Turbolinks.uuid()
     },
     updateQueryString: function(e, i) {
      var n, s, r;
      for (n in s = new URL(null != e ? e : window.location.href, document.location.origin), i) t.call(i, n) && (r = i[n], s.searchParams.set(n, r));
      return s.href
     },
     xhrErrorMessage: function(e) {
      var i, n, s, r, o, a, u, l;
      if (null != (l = null != e && null != (a = e.responseJSON) ? a.validation_error : void 0)) {
       for (i in n = [], l) t.call(l, i) && (r = l[i], n = n.concat(r));
       o = n.join(", ") + "."
      }
      return null == o && (o = null != e && null != (u = e.responseJSON) ? u.error : void 0), null != o && "" !== o || (s = "errors.codes.http-" + (null != e ? e.status : void 0), (o = osu.trans(s)) === s && (o = osu.trans("errors.unknown"))), o
     }
    }
   }).call(window)
  },
  zzf1: function(t, e) {}
 },
 [
  [0, 0]
 ]
]);
//# sourceMappingURL=app.js.map
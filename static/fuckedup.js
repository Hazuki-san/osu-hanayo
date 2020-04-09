function(e, t, n, i) {
    "use strict";
    var t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    e.api = e.fn.api = function(n) {
        var o, r = e(e.isFunction(this) ? t : this),
            a = r.selector || "",
            s = (new Date).getTime(),
            l = [],
            c = arguments[0],
            u = "string" == typeof c,
            d = [].slice.call(arguments, 1);
        return r.each(function() {
            var r, f, p, g, h, m, v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                b = v.namespace,
                y = v.metadata,
                x = v.selector,
                w = v.error,
                C = v.className,
                k = "." + b,
                T = "module-" + b,
                S = e(this),
                A = S.closest(x.form),
                E = v.stateContext ? e(v.stateContext) : S,
                j = this,
                D = E[0],
                R = S.data(T);
            m = {
                initialize: function() {
                    u || m.bind.events(), m.instantiate()
                },
                instantiate: function() {
                    m.verbose("Storing instance of module", m), R = m, S.data(T, R)
                },
                destroy: function() {
                    m.verbose("Destroying previous module for", j), S.removeData(T).off(k)
                },
                bind: {
                    events: function() {
                        var e = m.get.event();
                        e ? (m.verbose("Attaching API events to element", e), S.on(e + k, m.event.trigger)) : "now" == v.on && (m.debug("Querying API endpoint immediately"), m.query())
                    }
                },
                decode: {
                    json: function(e) {
                        if (e !== i && "string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }
                },
                read: {
                    cachedResponse: function(e) {
                        var n;
                        return t.Storage === i ? void m.error(w.noStorage) : (n = sessionStorage.getItem(e), m.debug("Using cached response", e, n), n = m.decode.json(n))
                    }
                },
                write: {
                    cachedResponse: function(n, o) {
                        return o && "" === o ? void m.debug("Response empty, not caching", o) : t.Storage === i ? void m.error(w.noStorage) : (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), void m.verbose("Storing cached response for url", n, o))
                    }
                },
                query: function() {
                    if (m.is.disabled()) return void m.debug("Element is disabled API request aborted");
                    if (m.is.loading()) {
                        if (!v.interruptRequests) return void m.debug("Cancelling request, previous request is still pending");
                        m.debug("Interrupting previous request"), m.abort()
                    }
                    return v.defaultData && e.extend(!0, v.urlData, m.get.defaultData()), v.serializeForm && (v.data = m.add.formData(v.data)), f = m.get.settings(), !1 === f ? (m.cancelled = !0, void m.error(w.beforeSend)) : (m.cancelled = !1, p = m.get.templatedURL(), p || m.is.mocked() ? (p = m.add.urlData(p), p || m.is.mocked() ? (f.url = v.base + p, r = e.extend(!0, {}, v, {
                        type: v.method || v.type,
                        data: g,
                        url: v.base + p,
                        beforeSend: v.beforeXHR,
                        success: function() {},
                        failure: function() {},
                        complete: function() {}
                    }), m.debug("Querying URL", r.url), m.verbose("Using AJAX settings", r), "local" === v.cache && m.read.cachedResponse(p) ? (m.debug("Response returned from local cache"), m.request = m.create.request(), void m.request.resolveWith(D, [m.read.cachedResponse(p)])) : void(v.throttle ? v.throttleFirstRequest || m.timer ? (m.debug("Throttling request", v.throttle), clearTimeout(m.timer), m.timer = setTimeout(function() {
                        m.timer && delete m.timer, m.debug("Sending throttled request", g, r.method), m.send.request()
                    }, v.throttle)) : (m.debug("Sending request", g, r.method), m.send.request(), m.timer = setTimeout(function() {}, v.throttle)) : (m.debug("Sending request", g, r.method), m.send.request()))) : void 0) : void m.error(w.missingURL))
                },
                should: {
                    removeError: function() {
                        return !0 === v.hideError || "auto" === v.hideError && !m.is.form()
                    }
                },
                is: {
                    disabled: function() {
                        return S.filter(x.disabled).length > 0
                    },
                    expectingJSON: function() {
                        return "json" === v.dataType || "jsonp" === v.dataType
                    },
                    form: function() {
                        return S.is("form") || E.is("form")
                    },
                    mocked: function() {
                        return v.mockResponse || v.mockResponseAsync || v.response || v.responseAsync
                    },
                    input: function() {
                        return S.is("input")
                    },
                    loading: function() {
                        return !!m.request && "pending" == m.request.state()
                    },
                    abortedRequest: function(e) {
                        return e && e.readyState !== i && 0 === e.readyState ? (m.verbose("XHR request determined to be aborted"), !0) : (m.verbose("XHR request was not aborted"), !1)
                    },
                    validResponse: function(t) {
                        return m.is.expectingJSON() && e.isFunction(v.successTest) ? (m.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (m.debug("Response passed success test", t), !0) : (m.debug("Response failed success test", t), !1)) : (m.verbose("Response is not JSON, skipping validation", v.successTest, t), !0)
                    }
                },
                was: {
                    cancelled: function() {
                        return m.cancelled || !1
                    },
                    succesful: function() {
                        return m.request && "resolved" == m.request.state()
                    },
                    failure: function() {
                        return m.request && "rejected" == m.request.state()
                    },
                    complete: function() {
                        return m.request && ("resolved" == m.request.state() || "rejected" == m.request.state())
                    }
                },
                add: {
                    urlData: function(t, n) {
                        var o, r;
                        return t && (o = t.match(v.regExp.required), r = t.match(v.regExp.optional), n = n || v.urlData, o && (m.debug("Looking for required URL variables", o), e.each(o, function(o, r) {
                            var a = -1 !== r.indexOf("$") ? r.substr(2, r.length - 3) : r.substr(1, r.length - 2),
                                s = e.isPlainObject(n) && n[a] !== i ? n[a] : S.data(a) !== i ? S.data(a) : E.data(a) !== i ? E.data(a) : n[a];
                            return s === i ? (m.error(w.requiredParameter, a, t), t = !1, !1) : (m.verbose("Found required variable", a, s), s = v.encodeParameters ? m.get.urlEncodedValue(s) : s, void(t = t.replace(r, s)))
                        })), r && (m.debug("Looking for optional URL variables", o), e.each(r, function(o, r) {
                            var a = -1 !== r.indexOf("$") ? r.substr(3, r.length - 4) : r.substr(2, r.length - 3),
                                s = e.isPlainObject(n) && n[a] !== i ? n[a] : S.data(a) !== i ? S.data(a) : E.data(a) !== i ? E.data(a) : n[a];
                            s !== i ? (m.verbose("Optional variable Found", a, s), t = t.replace(r, s)) : (m.verbose("Optional variable not found", a), t = -1 !== t.indexOf("/" + r) ? t.replace("/" + r, "") : t.replace(r, ""))
                        }))), t
                    },
                    formData: function(t) {
                        var n, o = e.fn.serializeObject !== i,
                            r = o ? A.serializeObject() : A.serialize();
                        return t = t || v.data, n = e.isPlainObject(t), n ? o ? (m.debug("Extending existing data with form data", t, r), t = e.extend(!0, {}, t, r)) : (m.error(w.missingSerialize), m.debug("Cant extend data. Replacing data with form data", t, r), t = r) : (m.debug("Adding form data", r), t = r), t
                    }
                },
                send: {
                    request: function() {
                        m.set.loading(), m.request = m.create.request(), m.is.mocked() ? m.mockedXHR = m.create.mockedXHR() : m.xhr = m.create.xhr(), v.onRequest.call(D, m.request, m.xhr)
                    }
                },
                event: {
                    trigger: function(e) {
                        m.query(), "submit" != e.type && "click" != e.type || e.preventDefault()
                    },
                    xhr: {
                        always: function() {},
                        done: function(t, n, i) {
                            var o = this,
                                r = (new Date).getTime() - h,
                                a = v.loadingDuration - r,
                                s = !!e.isFunction(v.onResponse) && (m.is.expectingJSON() ? v.onResponse.call(o, e.extend(!0, {}, t)) : v.onResponse.call(o, t));
                            a = a > 0 ? a : 0, s && (m.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), a > 0 && m.debug("Response completed early delaying state change by", a), setTimeout(function() {
                                m.is.validResponse(t) ? m.request.resolveWith(o, [t, i]) : m.request.rejectWith(o, [i, "invalid"])
                            }, a)
                        },
                        fail: function(e, t, n) {
                            var i = this,
                                o = (new Date).getTime() - h,
                                r = v.loadingDuration - o;
                            r = r > 0 ? r : 0, r > 0 && m.debug("Response completed early delaying state change by", r), setTimeout(function() {
                                m.is.abortedRequest(e) ? m.request.rejectWith(i, [e, "aborted", n]) : m.request.rejectWith(i, [e, "error", t, n])
                            }, r)
                        }
                    },
                    request: {
                        done: function(e, t) {
                            m.debug("Successful API Response", e), "local" === v.cache && p && (m.write.cachedResponse(p, e), m.debug("Saving server response locally", m.cache)), v.onSuccess.call(D, e, S, t)
                        },
                        complete: function(e, t) {
                            var n, i;
                            m.was.succesful() ? (i = e, n = t) : (n = e, i = m.get.responseFromXHR(n)), m.remove.loading(), v.onComplete.call(D, i, S, n)
                        },
                        fail: function(e, t, n) {
                            var o = m.get.responseFromXHR(e),
                                a = m.get.errorFromRequest(o, t, n);
                            return "aborted" == t ? (m.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(D, t, S, e),
                                !0) : ("invalid" == t ? m.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (m.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && m.error(w.statusMessage + n, r.url), v.onError.call(D, a, S, e)), v.errorDuration && "aborted" !== t && (m.debug("Adding error state"), m.set.error(), m.should.removeError() && setTimeout(m.remove.error, v.errorDuration)), m.debug("API Request failed", a, e), void v.onFailure.call(D, o, S, e))
                        }
                    }
                },
                create: {
                    request: function() {
                        return e.Deferred().always(m.event.request.complete).done(m.event.request.done).fail(m.event.request.fail)
                    },
                    mockedXHR: function() {
                        var t, n, i, o = v.mockResponse || v.response,
                            r = v.mockResponseAsync || v.responseAsync;
                        return i = e.Deferred().always(m.event.xhr.complete).done(m.event.xhr.done).fail(m.event.xhr.fail), o ? (e.isFunction(o) ? (m.debug("Using specified synchronous callback", o), n = o.call(D, f)) : (m.debug("Using settings specified response", o), n = o), i.resolveWith(D, [n, !1, {
                            responseText: n
                        }])) : e.isFunction(r) && (t = function(e) {
                            m.debug("Async callback returned response", e), e ? i.resolveWith(D, [e, !1, {
                                responseText: e
                            }]) : i.rejectWith(D, [{
                                responseText: e
                            }, !1, !1])
                        }, m.debug("Using specified async response callback", r), r.call(D, f, t)), i
                    },
                    xhr: function() {
                        var t;
                        return t = e.ajax(r).always(m.event.xhr.always).done(m.event.xhr.done).fail(m.event.xhr.fail), m.verbose("Created server request", t, r), t
                    }
                },
                set: {
                    error: function() {
                        m.verbose("Adding error state to element", E), E.addClass(C.error)
                    },
                    loading: function() {
                        m.verbose("Adding loading state to element", E), E.addClass(C.loading), h = (new Date).getTime()
                    }
                },
                remove: {
                    error: function() {
                        m.verbose("Removing error state from element", E), E.removeClass(C.error)
                    },
                    loading: function() {
                        m.verbose("Removing loading state from element", E), E.removeClass(C.loading)
                    }
                },
                get: {
                    responseFromXHR: function(t) {
                        return !!e.isPlainObject(t) && (m.is.expectingJSON() ? m.decode.json(t.responseText) : t.responseText)
                    },
                    errorFromRequest: function(t, n, o) {
                        return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o
                    },
                    request: function() {
                        return m.request || !1
                    },
                    xhr: function() {
                        return m.xhr || !1
                    },
                    settings: function() {
                        var t;
                        return t = v.beforeSend.call(D, v), t && (t.success !== i && (m.debug("Legacy success callback detected", t), m.error(w.legacyParameters, t.success), t.onSuccess = t.success), t.failure !== i && (m.debug("Legacy failure callback detected", t), m.error(w.legacyParameters, t.failure), t.onFailure = t.failure), t.complete !== i && (m.debug("Legacy complete callback detected", t), m.error(w.legacyParameters, t.complete), t.onComplete = t.complete)), t === i && m.error(w.noReturnedValue), !1 === t ? t : t !== i ? e.extend(!0, {}, t) : e.extend(!0, {}, v)
                    },
                    urlEncodedValue: function(e) {
                        var n = t.decodeURIComponent(e),
                            i = t.encodeURIComponent(e);
                        return n !== e ? (m.debug("URL value is already encoded, avoiding double encoding", e), e) : (m.verbose("Encoding value using encodeURIComponent", e, i), i)
                    },
                    defaultData: function() {
                        var t = {};
                        return e.isWindow(j) || (m.is.input() ? t.value = S.val() : m.is.form() || (t.text = S.text())), t
                    },
                    event: function() {
                        return e.isWindow(j) || "now" == v.on ? (m.debug("API called without element, no events attached"), !1) : "auto" == v.on ? S.is("input") ? j.oninput !== i ? "input" : j.onpropertychange !== i ? "propertychange" : "keyup" : S.is("form") ? "submit" : "click" : v.on
                    },
                    templatedURL: function(e) {
                        if (e = e || S.data(y.action) || v.action || !1, p = S.data(y.url) || v.url || !1) return m.debug("Using specified url", p), p;
                        if (e) {
                            if (m.debug("Looking up url for action", e, v.api), v.api[e] === i && !m.is.mocked()) return void m.error(w.missingAction, v.action, v.api);
                            p = v.api[e]
                        } else m.is.form() && (p = S.attr("action") || E.attr("action") || !1, m.debug("No url or action specified, defaulting to form action", p));
                        return p
                    }
                },
                abort: function() {
                    var e = m.get.xhr();
                    e && "resolved" !== e.state() && (m.debug("Cancelling API request"), e.abort())
                },
                reset: function() {
                    m.remove.error(), m.remove.loading()
                },
                setting: function(t, n) {
                    if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);
                    else {
                        if (n === i) return v[t];
                        e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, m, t);
                    else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                },
                debug: function() {
                    !v.silent && v.debug && (v.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), m.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !v.silent && v.verbose && v.debug && (v.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), m.verbose.apply(console, arguments)))
                },
                error: function() {
                    v.silent || (m.error = Function.prototype.bind.call(console.error, console, v.name + ":"), m.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        v.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                    },
                    display: function() {
                        var t = v.name + ":",
                            n = 0;
                        s = !1, clearTimeout(m.performance.timer), e.each(l, function(e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), l = []
                    }
                },
                invoke: function(t, n, r) {
                    var a, s, l, c = R;
                    return n = n || d, r = j || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
                        var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(c[r]) && n != a) c = c[r];
                        else {
                            if (c[r] !== i) return s = c[r], !1;
                            if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (m.error(w.method, t), !1);
                            c = c[o]
                        }
                    })), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                }
            }, u ? (R === i && m.initialize(), m.invoke(c)) : (R !== i && R.invoke("destroy"), m.initialize())
        }), o !== i ? o : this
    }, e.api.settings = {
        name: "API",
        namespace: "api",
        debug: !1,
        verbose: !1,
        performance: !0,
        api: {},
        cache: !0,
        interruptRequests: !0,
        on: "auto",
        stateContext: !1,
        loadingDuration: 0,
        hideError: "auto",
        errorDuration: 2e3,
        encodeParameters: !0,
        action: !1,
        url: !1,
        base: "",
        urlData: {},
        defaultData: !0,
        serializeForm: !1,
        throttle: 0,
        throttleFirstRequest: !0,
        method: "get",
        data: {},
        dataType: "json",
        mockResponse: !1,
        mockResponseAsync: !1,
        response: !1,
        responseAsync: !1,
        beforeSend: function(e) {
            return e
        },
        beforeXHR: function(e) {},
        onRequest: function(e, t) {},
        onResponse: !1,
        onSuccess: function(e, t) {},
        onComplete: function(e, t) {},
        onFailure: function(e, t) {},
        onError: function(e, t) {},
        onAbort: function(e, t) {},
        successTest: !1,
        error: {
            beforeSend: "The before send function has aborted the request",
            error: "There was an error with your request",
            exitConditions: "API Request Aborted. Exit conditions met",
            JSONParse: "JSON could not be parsed during error handling",
            legacyParameters: "You are using legacy API success callback names",
            method: "The method you called is not defined",
            missingAction: "API action used but no url was defined",
            missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
            missingURL: "No URL specified for api event",
            noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
            noStorage: "Caching responses locally requires session storage",
            parseError: "There was an error parsing your request",
            requiredParameter: "Missing a required URL parameter: ",
            statusMessage: "Server gave an error: ",
            timeout: "Your request timed out"
        },
        regExp: {
            required: /\{\$*[A-z0-9]+\}/g,
            optional: /\{\/\$*[A-z0-9]+\}/g
        },
        className: {
            loading: "loading",
            error: "error"
        },
        selector: {
            disabled: ".disabled",
            form: "form"
        },
        metadata: {
            action: "action",
            url: "url"
        }
    }
}(jQuery, window, document);
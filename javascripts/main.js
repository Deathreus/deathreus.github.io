var _wAMD;
! function () {
    if (!_wAMD || !_wAMD.requirejs) {
        _wAMD ? t = _wAMD : _wAMD = {};
        var e, t, n;
        ! function (i) {
            function r(e, t) {
                return _.call(e, t)
            }

            function o(e, t) {
                var n, i, r, o, s, a, l, c, u, h, d = t && t.split("/"),
                    f = y.map,
                    p = f && f["*"] || {};
                if (e && "." === e.charAt(0))
                    if (t) {
                        for (d = d.slice(0, d.length - 1), e = d.concat(e.split("/")), c = 0; c < e.length; c += 1)
                            if (h = e[c], "." === h) e.splice(c, 1), c -= 1;
                            else if (".." === h) {
                            if (1 === c && (".." === e[2] || ".." === e[0])) break;
                            c > 0 && (e.splice(c - 1, 2), c -= 2)
                        }
                        e = e.join("/")
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                if ((d || p) && f) {
                    for (n = e.split("/"), c = n.length; c > 0; c -= 1) {
                        if (i = n.slice(0, c).join("/"), d)
                            for (u = d.length; u > 0; u -= 1)
                                if (r = f[d.slice(0, u).join("/")], r && (r = r[i])) {
                                    o = r, s = c;
                                    break
                                } if (o) break;
                        !a && p && p[i] && (a = p[i], l = c)
                    }!o && a && (o = a, s = l), o && (n.splice(0, s, o), e = n.join("/"))
                }
                return e
            }

            function s(e, t) {
                return function () {
                    return f.apply(i, b.call(arguments, 0).concat([e, t]))
                }
            }

            function a(e) {
                return function (t) {
                    return o(t, e)
                }
            }

            function l(e) {
                return function (t) {
                    m[e] = t
                }
            }

            function c(e) {
                if (r(v, e)) {
                    var t = v[e];
                    delete v[e], w[e] = !0, d.apply(i, t)
                }
                if (!r(m, e) && !r(w, e)) throw new Error("No " + e);
                return m[e]
            }

            function u(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function h(e) {
                return function () {
                    return y && y.config && y.config[e] || {}
                }
            }
            var d, f, p, g, m = {},
                v = {},
                y = {},
                w = {},
                _ = Object.prototype.hasOwnProperty,
                b = [].slice;
            p = function (e, t) {
                var n, i = u(e),
                    r = i[0];
                return e = i[1], r && (r = o(r, t), n = c(r)), r ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), i = u(e), r = i[0], e = i[1], r && (n = c(r))), {
                    f: r ? r + "!" + e : e,
                    n: e,
                    pr: r,
                    p: n
                }
            }, g = {
                require: function (e) {
                    return s(e)
                },
                exports: function (e) {
                    var t = m[e];
                    return "undefined" != typeof t ? t : m[e] = {}
                },
                module: function (e) {
                    return {
                        id: e,
                        uri: "",
                        exports: m[e],
                        config: h(e)
                    }
                }
            }, d = function (e, t, n, o) {
                var a, u, h, d, f, y, _ = [];
                if (o = o || e, "function" == typeof n) {
                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
                        if (d = p(t[f], o), u = d.f, "require" === u) _[f] = g.require(e);
                        else if ("exports" === u) _[f] = g.exports(e), y = !0;
                    else if ("module" === u) a = _[f] = g.module(e);
                    else if (r(m, u) || r(v, u) || r(w, u)) _[f] = c(u);
                    else {
                        if (!d.p) throw new Error(e + " missing " + u);
                        d.p.load(d.n, s(o, !0), l(u), {}), _[f] = m[u]
                    }
                    h = n.apply(m[e], _), e && (a && a.exports !== i && a.exports !== m[e] ? m[e] = a.exports : h === i && y || (m[e] = h))
                } else e && (m[e] = n)
            }, e = t = f = function (e, t, n, r, o) {
                return "string" == typeof e ? g[e] ? g[e](t) : c(p(e, t).f) : (e.splice || (y = e, t.splice ? (e = t, t = n, n = null) : e = i), t = t || function () {}, "function" == typeof n && (n = r, r = o), r ? d(i, e, t, n) : setTimeout(function () {
                    d(i, e, t, n)
                }, 4), f)
            }, f.config = function (e) {
                return y = e, y.deps && f(y.deps, y.callback), f
            }, n = function (e, t, n) {
                t.splice || (n = t, t = []), r(m, e) || r(v, e) || (v[e] = [e, t, n])
            }, n.amd = {
                jQuery: !0
            }
        }(), _wAMD.requirejs = e, _wAMD.require = t, _wAMD.define = n
    }
}(), _wAMD.define("vendor/almond", function () {}),
    function () {
        function e(e, t) {
            o > 0 && 0 >= s ? e() : t ? a.unshift(e) : a.push(e)
        }

        function t() {
            var e = Array.prototype.slice.apply(arguments);
            if (1 === e.length && "string" == typeof e[0]);
            else {
                var t;
                "function" == typeof e[e.length - 1] && (t = e.pop()), o++, s++, e.push(function () {
                    var e;
                    if (t && (e = t.apply(this, arguments)), s--, o > 0 && 0 >= s)
                        for (; a.length;) a.shift()();
                    return e
                })
            }
            return f.apply(this, e)
        }

        function n() {
            window.define = l, window.require = c, window.requirejs = u
        }

        function i() {
            Weebly.jQuery.noConflict(!0), window.jQuery = window.jQuery || Weebly.jQuery
        }

        function r() {
            n(), i()
        }
        _W = Weebly = window.Weebly || {}, _W.utl = _W.utl || function (e) {
            return _W.failedTls = _W.failedTls || [], _W.failedTls.push(e), e
        }, _W.ftl = _W.ftl || function (e) {
            return _W.failedFtls = _W.failedFtls || [], _W.failedFtls.push(e), ""
        }, _W.utl = _W.utl || function (e) {
            return _W.failedUtls = _W.failedUtls || [], _W.failedUtls.push(e), ""
        }, _W.stl = _W.stl || function (e) {
            return _W.failedStls = _W.failedStls || [], _W.failedStls.push(e), ""
        };
        var o = 0,
            s = 0,
            a = [];
        Weebly.ready = e;
        var l = window.define,
            c = window.require,
            u = window.requirejs,
            h = window._wAMD || {},
            d = h.define || window.define,
            f = h.require || window.require,
            p = h.requirejs || window.requirejs;
        window.define = h.define = d, window.require = h.require = t, window.requirejs = h.requirejs = p, Weebly.relinquishAMD = n, Weebly.jQuery = jQuery, Weebly.relinquishJQuery = i;
        var g = jQuery.fn.ready;
        jQuery.fn.ready = function () {
            var t = this,
                n = arguments;
            return e(function () {
                g.apply(t, n)
            }), t
        }, Weebly.relinquish = r, Weebly.setCookie = function (e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var r = "expires=" + i.toUTCString();
            document.cookie = e + "=" + t + "; " + r
        }, Weebly.clearCookie = function (e) {
            setCookie(e, "", -1)
        }, Weebly.getCookie = function (e) {
            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var r = n[i];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return ""
        }
    }(), window.console || (window.console = {}), window.console.log || (window.console.log = function () {}, window.console.warn = window.console.log, window.console.info = window.console.log, window.console.error = window.console.log), _wAMD.define("init", function () {}),
    function () {
        function e(e) {
            function t(t, n, i, r, o, s) {
                for (; o >= 0 && s > o; o += e) {
                    var a = r ? r[o] : o;
                    i = n(i, t[a], a, t)
                }
                return i
            }
            return function (n, i, r, o) {
                i = w(i, o, 4);
                var s = !S(n) && y.keys(n),
                    a = (s || n).length,
                    l = e > 0 ? 0 : a - 1;
                return arguments.length < 3 && (r = n[s ? s[l] : l], l += e), t(n, i, r, s, l, a)
            }
        }

        function t(e) {
            return function (t, n, i) {
                n = _(n, i);
                for (var r = C(t), o = e > 0 ? 0 : r - 1; o >= 0 && r > o; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function n(e, t, n) {
            return function (i, r, o) {
                var s = 0,
                    a = C(i);
                if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (n && o && a) return o = n(i, r), i[o] === r ? o : -1;
                if (r !== r) return o = t(u.call(i, s, a), y.isNaN), o >= 0 ? o + s : -1;
                for (o = e > 0 ? s : a - 1; o >= 0 && a > o; o += e)
                    if (i[o] === r) return o;
                return -1
            }
        }

        function i(e, t) {
            var n = E.length,
                i = e.constructor,
                r = y.isFunction(i) && i.prototype || a,
                o = "constructor";
            for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) o = E[n], o in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o)
        }
        var r = this,
            o = r._,
            s = Array.prototype,
            a = Object.prototype,
            l = Function.prototype,
            c = s.push,
            u = s.slice,
            h = a.toString,
            d = a.hasOwnProperty,
            f = Array.isArray,
            p = Object.keys,
            g = l.bind,
            m = Object.create,
            v = function () {},
            y = function (e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
        var w = function (e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function (n, i, r) {
                            return e.call(t, n, i, r)
                        };
                    case 4:
                        return function (n, i, r, o) {
                            return e.call(t, n, i, r, o)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            },
            _ = function (e, t, n) {
                return null == e ? y.identity : y.isFunction(e) ? w(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function (e, t) {
            return _(e, t, 1 / 0)
        };
        var b = function (e, t) {
                return function (n) {
                    var i = arguments.length;
                    if (2 > i || null == n) return n;
                    for (var r = 1; i > r; r++)
                        for (var o = arguments[r], s = e(o), a = s.length, l = 0; a > l; l++) {
                            var c = s[l];
                            t && void 0 !== n[c] || (n[c] = o[c])
                        }
                    return n
                }
            },
            k = function (e) {
                if (!y.isObject(e)) return {};
                if (m) return m(e);
                v.prototype = e;
                var t = new v;
                return v.prototype = null, t
            },
            x = function (e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            },
            M = Math.pow(2, 53) - 1,
            C = x("length"),
            S = function (e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && M >= t
            };
        y.each = y.forEach = function (e, t, n) {
            t = w(t, n);
            var i, r;
            if (S(e))
                for (i = 0, r = e.length; r > i; i++) t(e[i], i, e);
            else {
                var o = y.keys(e);
                for (i = 0, r = o.length; r > i; i++) t(e[o[i]], o[i], e)
            }
            return e
        }, y.map = y.collect = function (e, t, n) {
            t = _(t, n);
            for (var i = !S(e) && y.keys(e), r = (i || e).length, o = Array(r), s = 0; r > s; s++) {
                var a = i ? i[s] : s;
                o[s] = t(e[a], a, e)
            }
            return o
        }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function (e, t, n) {
            var i;
            return i = S(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== i && -1 !== i ? e[i] : void 0
        }, y.filter = y.select = function (e, t, n) {
            var i = [];
            return t = _(t, n), y.each(e, function (e, n, r) {
                t(e, n, r) && i.push(e)
            }), i
        }, y.reject = function (e, t, n) {
            return y.filter(e, y.negate(_(t)), n)
        }, y.every = y.all = function (e, t, n) {
            t = _(t, n);
            for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; r > o; o++) {
                var s = i ? i[o] : o;
                if (!t(e[s], s, e)) return !1
            }
            return !0
        }, y.some = y.any = function (e, t, n) {
            t = _(t, n);
            for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; r > o; o++) {
                var s = i ? i[o] : o;
                if (t(e[s], s, e)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function (e, t, n, i) {
            return S(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0
        }, y.invoke = function (e, t) {
            var n = u.call(arguments, 2),
                i = y.isFunction(t);
            return y.map(e, function (e) {
                var r = i ? t : e[t];
                return null == r ? r : r.apply(e, n)
            })
        }, y.pluck = function (e, t) {
            return y.map(e, y.property(t))
        }, y.where = function (e, t) {
            return y.filter(e, y.matcher(t))
        }, y.findWhere = function (e, t) {
            return y.find(e, y.matcher(t))
        }, y.max = function (e, t, n) {
            var i, r, o = -(1 / 0),
                s = -(1 / 0);
            if (null == t && null != e) {
                e = S(e) ? e : y.values(e);
                for (var a = 0, l = e.length; l > a; a++) i = e[a], i > o && (o = i)
            } else t = _(t, n), y.each(e, function (e, n, i) {
                r = t(e, n, i), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = e, s = r)
            });
            return o
        }, y.min = function (e, t, n) {
            var i, r, o = 1 / 0,
                s = 1 / 0;
            if (null == t && null != e) {
                e = S(e) ? e : y.values(e);
                for (var a = 0, l = e.length; l > a; a++) i = e[a], o > i && (o = i)
            } else t = _(t, n), y.each(e, function (e, n, i) {
                r = t(e, n, i), (s > r || r === 1 / 0 && o === 1 / 0) && (o = e, s = r)
            });
            return o
        }, y.shuffle = function (e) {
            for (var t, n = S(e) ? e : y.values(e), i = n.length, r = Array(i), o = 0; i > o; o++) t = y.random(0, o), t !== o && (r[o] = r[t]), r[t] = n[o];
            return r
        }, y.sample = function (e, t, n) {
            return null == t || n ? (S(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
        }, y.sortBy = function (e, t, n) {
            return t = _(t, n), y.pluck(y.map(e, function (e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function (e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var R = function (e) {
            return function (t, n, i) {
                var r = {};
                return n = _(n, i), y.each(t, function (i, o) {
                    var s = n(i, o, t);
                    e(r, i, s)
                }), r
            }
        };
        y.groupBy = R(function (e, t, n) {
            y.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), y.indexBy = R(function (e, t, n) {
            e[n] = t
        }), y.countBy = R(function (e, t, n) {
            y.has(e, n) ? e[n]++ : e[n] = 1
        }), y.toArray = function (e) {
            return e ? y.isArray(e) ? u.call(e) : S(e) ? y.map(e, y.identity) : y.values(e) : []
        }, y.size = function (e) {
            return null == e ? 0 : S(e) ? e.length : y.keys(e).length
        }, y.partition = function (e, t, n) {
            t = _(t, n);
            var i = [],
                r = [];
            return y.each(e, function (e, n, o) {
                (t(e, n, o) ? i : r).push(e)
            }), [i, r]
        }, y.first = y.head = y.take = function (e, t, n) {
            return null != e ? null == t || n ? e[0] : y.initial(e, e.length - t) : void 0
        }, y.initial = function (e, t, n) {
            return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, y.last = function (e, t, n) {
            return null != e ? null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t)) : void 0
        }, y.rest = y.tail = y.drop = function (e, t, n) {
            return u.call(e, null == t || n ? 1 : t)
        }, y.compact = function (e) {
            return y.filter(e, y.identity)
        };
        var D = function (e, t, n, i) {
            for (var r = [], o = 0, s = i || 0, a = C(e); a > s; s++) {
                var l = e[s];
                if (S(l) && (y.isArray(l) || y.isArguments(l))) {
                    t || (l = D(l, t, n));
                    var c = 0,
                        u = l.length;
                    for (r.length += u; u > c;) r[o++] = l[c++]
                } else n || (r[o++] = l)
            }
            return r
        };
        y.flatten = function (e, t) {
            return D(e, t, !1)
        }, y.without = function (e) {
            return y.difference(e, u.call(arguments, 1))
        }, y.uniq = y.unique = function (e, t, n, i) {
            y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = _(n, i));
            for (var r = [], o = [], s = 0, a = C(e); a > s; s++) {
                var l = e[s],
                    c = n ? n(l, s, e) : l;
                t ? (s && o === c || r.push(l), o = c) : n ? y.contains(o, c) || (o.push(c), r.push(l)) : y.contains(r, l) || r.push(l)
            }
            return r
        }, y.union = function () {
            return y.uniq(D(arguments, !0, !0))
        }, y.intersection = function (e) {
            for (var t = [], n = arguments.length, i = 0, r = C(e); r > i; i++) {
                var o = e[i];
                if (!y.contains(t, o)) {
                    for (var s = 1; n > s && y.contains(arguments[s], o); s++);
                    s === n && t.push(o)
                }
            }
            return t
        }, y.difference = function (e) {
            var t = D(arguments, !0, !0, 1);
            return y.filter(e, function (e) {
                return !y.contains(t, e)
            })
        }, y.zip = function () {
            return y.unzip(arguments)
        }, y.unzip = function (e) {
            for (var t = e && y.max(e, C).length || 0, n = Array(t), i = 0; t > i; i++) n[i] = y.pluck(e, i);
            return n
        }, y.object = function (e, t) {
            for (var n = {}, i = 0, r = C(e); r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function (e, t, n, i) {
            n = _(n, i, 1);
            for (var r = n(t), o = 0, s = C(e); s > o;) {
                var a = Math.floor((o + s) / 2);
                n(e[a]) < r ? o = a + 1 : s = a
            }
            return o
        }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function (e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; i > o; o++, e += n) r[o] = e;
            return r
        };
        var T = function (e, t, n, i, r) {
            if (!(i instanceof t)) return e.apply(n, r);
            var o = k(e.prototype),
                s = e.apply(o, r);
            return y.isObject(s) ? s : o
        };
        y.bind = function (e, t) {
            if (g && e.bind === g) return g.apply(e, u.call(arguments, 1));
            if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = u.call(arguments, 2),
                i = function () {
                    return T(e, i, t, this, n.concat(u.call(arguments)))
                };
            return i
        }, y.partial = function (e) {
            var t = u.call(arguments, 1),
                n = function () {
                    for (var i = 0, r = t.length, o = Array(r), s = 0; r > s; s++) o[s] = t[s] === y ? arguments[i++] : t[s];
                    for (; i < arguments.length;) o.push(arguments[i++]);
                    return T(e, n, this, this, o)
                };
            return n
        }, y.bindAll = function (e) {
            var t, n, i = arguments.length;
            if (1 >= i) throw new Error("bindAll must be passed function names");
            for (t = 1; i > t; t++) n = arguments[t], e[n] = y.bind(e[n], e);
            return e
        }, y.memoize = function (e, t) {
            var n = function (i) {
                var r = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : i);
                return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
            };
            return n.cache = {}, n
        }, y.delay = function (e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function (e, t, n) {
            var i, r, o, s = null,
                a = 0;
            n || (n = {});
            var l = function () {
                a = n.leading === !1 ? 0 : y.now(), s = null, o = e.apply(i, r), s || (i = r = null)
            };
            return function () {
                var c = y.now();
                a || n.leading !== !1 || (a = c);
                var u = t - (c - a);
                return i = this, r = arguments, 0 >= u || u > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, u)), o
            }
        }, y.debounce = function (e, t, n) {
            var i, r, o, s, a, l = function () {
                var c = y.now() - s;
                t > c && c >= 0 ? i = setTimeout(l, t - c) : (i = null, n || (a = e.apply(o, r), i || (o = r = null)))
            };
            return function () {
                o = this, r = arguments, s = y.now();
                var c = n && !i;
                return i || (i = setTimeout(l, t)), c && (a = e.apply(o, r), o = r = null), a
            }
        }, y.wrap = function (e, t) {
            return y.partial(t, e)
        }, y.negate = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }, y.compose = function () {
            var e = arguments,
                t = e.length - 1;
            return function () {
                for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                return i
            }
        }, y.after = function (e, t) {
            return function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, y.before = function (e, t) {
            var n;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
            }
        }, y.once = y.partial(y.before, 2);
        var A = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            E = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function (e) {
            if (!y.isObject(e)) return [];
            if (p) return p(e);
            var t = [];
            for (var n in e) y.has(e, n) && t.push(n);
            return A && i(e, t), t
        }, y.allKeys = function (e) {
            if (!y.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return A && i(e, t), t
        }, y.values = function (e) {
            for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
            return i
        }, y.mapObject = function (e, t, n) {
            t = _(t, n);
            for (var i, r = y.keys(e), o = r.length, s = {}, a = 0; o > a; a++) i = r[a], s[i] = t(e[i], i, e);
            return s
        }, y.pairs = function (e) {
            for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, y.invert = function (e) {
            for (var t = {}, n = y.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
            return t
        }, y.functions = y.methods = function (e) {
            var t = [];
            for (var n in e) y.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, y.extend = b(y.allKeys), y.extendOwn = y.assign = b(y.keys), y.findKey = function (e, t, n) {
            t = _(t, n);
            for (var i, r = y.keys(e), o = 0, s = r.length; s > o; o++)
                if (i = r[o], t(e[i], i, e)) return i
        }, y.pick = function (e, t, n) {
            var i, r, o = {},
                s = e;
            if (null == s) return o;
            y.isFunction(t) ? (r = y.allKeys(s), i = w(t, n)) : (r = D(arguments, !1, !1, 1), i = function (e, t, n) {
                return t in n
            }, s = Object(s));
            for (var a = 0, l = r.length; l > a; a++) {
                var c = r[a],
                    u = s[c];
                i(u, c, s) && (o[c] = u)
            }
            return o
        }, y.omit = function (e, t, n) {
            if (y.isFunction(t)) t = y.negate(t);
            else {
                var i = y.map(D(arguments, !1, !1, 1), String);
                t = function (e, t) {
                    return !y.contains(i, t)
                }
            }
            return y.pick(e, t, n)
        }, y.defaults = b(y.allKeys, !0), y.create = function (e, t) {
            var n = k(e);
            return t && y.extendOwn(n, t), n
        }, y.clone = function (e) {
            return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
        }, y.tap = function (e, t) {
            return t(e), e
        }, y.isMatch = function (e, t) {
            var n = y.keys(t),
                i = n.length;
            if (null == e) return !i;
            for (var r = Object(e), o = 0; i > o; o++) {
                var s = n[o];
                if (t[s] !== r[s] || !(s in r)) return !1
            }
            return !0
        };
        var P = function (e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
            var r = h.call(e);
            if (r !== h.call(t)) return !1;
            switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === r;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var s = e.constructor,
                    a = t.constructor;
                if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], i = i || [];
            for (var l = n.length; l--;)
                if (n[l] === e) return i[l] === t;
            if (n.push(e), i.push(t), o) {
                if (l = e.length, l !== t.length) return !1;
                for (; l--;)
                    if (!P(e[l], t[l], n, i)) return !1
            } else {
                var c, u = y.keys(e);
                if (l = u.length, y.keys(t).length !== l) return !1;
                for (; l--;)
                    if (c = u[l], !y.has(t, c) || !P(e[c], t[c], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        };
        y.isEqual = function (e, t) {
            return P(e, t)
        }, y.isEmpty = function (e) {
            return null == e ? !0 : S(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
        }, y.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, y.isArray = f || function (e) {
            return "[object Array]" === h.call(e)
        }, y.isObject = function (e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
            y["is" + e] = function (t) {
                return h.call(t) === "[object " + e + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function (e) {
            return y.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function (e) {
            return "function" == typeof e || !1
        }), y.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, y.isNaN = function (e) {
            return y.isNumber(e) && e !== +e
        }, y.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" === h.call(e)
        }, y.isNull = function (e) {
            return null === e
        }, y.isUndefined = function (e) {
            return void 0 === e
        }, y.has = function (e, t) {
            return null != e && d.call(e, t)
        }, y.noConflict = function () {
            return r._ = o, this
        }, y.identity = function (e) {
            return e
        }, y.constant = function (e) {
            return function () {
                return e
            }
        }, y.noop = function () {}, y.property = x, y.propertyOf = function (e) {
            return null == e ? function () {} : function (t) {
                return e[t]
            }
        }, y.matcher = y.matches = function (e) {
            return e = y.extendOwn({}, e),
                function (t) {
                    return y.isMatch(t, e)
                }
        }, y.times = function (e, t, n) {
            var i = Array(Math.max(0, e));
            t = w(t, n, 1);
            for (var r = 0; e > r; r++) i[r] = t(r);
            return i
        }, y.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, y.now = Date.now || function () {
            return (new Date).getTime()
        };
        var O = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            F = y.invert(O),
            j = function (e) {
                var t = function (t) {
                        return e[t]
                    },
                    n = "(?:" + y.keys(e).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function (e) {
                    return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
                }
            };
        y.escape = j(O), y.unescape = j(F), y.result = function (e, t, n) {
            var i = null == e ? void 0 : e[t];
            return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i
        };
        var I = 0;
        y.uniqueId = function (e) {
            var t = ++I + "";
            return e ? e + t : t
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var W = /(.)^/,
            q = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            z = /\\|'|\r|\n|\u2028|\u2029/g,
            H = function (e) {
                return "\\" + q[e]
            };
        y.template = function (e, t, n) {
            !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
            var i = RegExp([(t.escape || W).source, (t.interpolate || W).source, (t.evaluate || W).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            e.replace(i, function (t, n, i, s, a) {
                return o += e.slice(r, a).replace(z, H), r = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var s = new Function(t.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            var l = function (e) {
                    return s.call(this, e, y)
                },
                c = t.variable || "obj";
            return l.source = "function(" + c + "){\n" + o + "}", l
        }, y.chain = function (e) {
            var t = y(e);
            return t._chain = !0, t
        };
        var N = function (e, t) {
            return e._chain ? y(t).chain() : t
        };
        y.mixin = function (e) {
            y.each(y.functions(e), function (t) {
                var n = y[t] = e[t];
                y.prototype[t] = function () {
                    var e = [this._wrapped];
                    return c.apply(e, arguments), N(this, n.apply(y, e))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = s[e];
            y.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], N(this, n)
            }
        }), y.each(["concat", "join", "slice"], function (e) {
            var t = s[e];
            y.prototype[e] = function () {
                return N(this, t.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function () {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function () {
            return "" + this._wrapped
        }, "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("underscore", [], function () {
            return y
        })
    }.call(this), _wAMD.define("jquery", [], function () {
        return "undefined" != typeof Weebly ? Weebly.jQuery : window.jQuery
    }),
    function (e) {
        ! function (e, t) {
            "object" == typeof exports && exports ? module.exports = t : "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("mustache-vendor", t) : e.Mustache = t
        }(this, function () {
            function e(e, t) {
                return y.call(e, t)
            }

            function t(t) {
                return !e(p, t)
            }

            function n(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function i(e) {
                return String(e).replace(/[&<>"'\/]/g, function (e) {
                    return b[e]
                })
            }

            function r(e) {
                this.string = e, this.tail = e, this.pos = 0
            }

            function o(e, t) {
                this.view = e, this.parent = t, this._cache = {}
            }

            function s() {
                this.clearCache()
            }

            function a(e, t, n, i) {
                for (var r, o, s, l = "", c = 0, u = e.length; u > c; ++c) switch (r = e[c], o = r[1], r[0]) {
                    case "#":
                        if (s = n.lookup(o), "object" == typeof s)
                            if (_(s))
                                for (var d = 0, f = s.length; f > d; ++d) l += a(r[4], t, n.push(s[d]), i);
                            else s && (l += a(r[4], t, n.push(s), i));
                        else if ("function" == typeof s) {
                            var p = null == i ? null : i.slice(r[3], r[5]);
                            s = s.call(n.view, p, function (e) {
                                return t.render(e, n)
                            }), null != s && (l += s)
                        } else s && (l += a(r[4], t, n, i));
                        break;
                    case "^":
                        s = n.lookup(o), (!s || _(s) && 0 === s.length) && (l += a(r[4], t, n, i));
                        break;
                    case ">":
                        s = t.getPartial(o), "function" == typeof s && (l += s(n));
                        break;
                    case "&":
                        s = n.lookup(o), null != s && (l += s);
                        break;
                    case "name":
                        s = n.lookup(o), null != s && (l += h.escape(s));
                        break;
                    case "text":
                        l += o
                }
                return l
            }

            function l(e) {
                for (var t, n = [], i = n, r = [], o = 0, s = e.length; s > o; ++o) switch (t = e[o], t[0]) {
                    case "#":
                    case "^":
                        r.push(t), i.push(t), i = t[4] = [];
                        break;
                    case "/":
                        var a = r.pop();
                        a[5] = t[2], i = r.length > 0 ? r[r.length - 1][4] : n;
                        break;
                    default:
                        i.push(t)
                }
                return n
            }

            function c(e) {
                for (var t, n, i = [], r = 0, o = e.length; o > r; ++r) t = e[r], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (n = t, i.push(t)));
                return i
            }

            function u(e) {
                return [new RegExp(n(e[0]) + "\\s*"), new RegExp("\\s*" + n(e[1]))]
            }
            var h = {};
            h.name = "mustache.js", h.version = "0.7.2", h.tags = ["{{", "}}"], h.Scanner = r, h.Context = o, h.Writer = s;
            var d = /\s*/,
                f = /\s+/,
                p = /\S/,
                g = /\s*=/,
                m = /\s*\}/,
                v = /#|\^|\/|>|\{|&|=|!/,
                y = RegExp.prototype.test,
                w = Object.prototype.toString,
                _ = Array.isArray || function (e) {
                    return "[object Array]" === w.call(e)
                },
                b = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                };
            h.escape = i, r.prototype.eos = function () {
                return "" === this.tail
            }, r.prototype.scan = function (e) {
                var t = this.tail.match(e);
                return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length), this.pos += t[0].length, t[0]) : ""
            }, r.prototype.scanUntil = function (e) {
                var t, n = this.tail.search(e);
                switch (n) {
                    case -1:
                        t = this.tail, this.pos += this.tail.length, this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, n), this.tail = this.tail.substring(n), this.pos += n
                }
                return t
            }, o.make = function (e) {
                return e instanceof o ? e : new o(e)
            }, o.prototype.push = function (e) {
                return new o(e, this)
            }, o.prototype.lookup = function (e) {
                var t = this._cache[e];
                if (!t) {
                    if ("." == e) t = this.view;
                    else
                        for (var n = this; n;) {
                            if (e.indexOf(".") > 0) {
                                t = n.view;
                                for (var i = e.split("."), r = 0; t && r < i.length;) t = t[i[r++]]
                            } else t = n.view[e];
                            if (null != t) break;
                            n = n.parent
                        }
                    this._cache[e] = t
                }
                return "function" == typeof t && (t = t.call(this.view)), t
            }, s.prototype.clearCache = function () {
                this._cache = {}, this._partialCache = {}
            }, s.prototype.compile = function (e, t) {
                var n = this._cache[e];
                if (!n) {
                    var i = h.parse(e, t);
                    n = this._cache[e] = this.compileTokens(i, e)
                }
                return n
            }, s.prototype.compilePartial = function (e, t, n) {
                var i = this.compile(t, n);
                return this._partialCache[e] = i, i
            }, s.prototype.getPartial = function (e) {
                return e in this._partialCache || !this._loadPartial || this.compilePartial(e, this._loadPartial(e)), this._partialCache[e]
            }, s.prototype.compileTokens = function (e, t) {
                var n = this;
                return function (i, r) {
                    if (r)
                        if ("function" == typeof r) n._loadPartial = r;
                        else
                            for (var s in r) n.compilePartial(s, r[s]);
                    return a(e, n, o.make(i), t)
                }
            }, s.prototype.render = function (e, t, n) {
                return this.compile(e)(t, n)
            }, h.parse = function (e, i) {
                function o() {
                    if (C && !S)
                        for (; M.length;) delete x[M.pop()];
                    else M = [];
                    C = !1, S = !1
                }
                if (e = e || "", i = i || h.tags, "string" == typeof i && (i = i.split(f)), 2 !== i.length) throw new Error("Invalid tags: " + i.join(", "));
                for (var s, a, p, y, w, _ = u(i), b = new r(e), k = [], x = [], M = [], C = !1, S = !1; !b.eos();) {
                    if (s = b.pos, p = b.scanUntil(_[0]))
                        for (var R = 0, D = p.length; D > R; ++R) y = p.charAt(R), t(y) ? M.push(x.length) : S = !0, x.push(["text", y, s, s + 1]), s += 1, "\n" == y && o();
                    if (!b.scan(_[0])) break;
                    if (C = !0, a = b.scan(v) || "name", b.scan(d), "=" === a ? (p = b.scanUntil(g), b.scan(g), b.scanUntil(_[1])) : "{" === a ? (p = b.scanUntil(new RegExp("\\s*" + n("}" + i[1]))), b.scan(m), b.scanUntil(_[1]), a = "&") : p = b.scanUntil(_[1]), !b.scan(_[1])) throw new Error("Unclosed tag at " + b.pos);
                    if (w = [a, p, s, b.pos], x.push(w), "#" === a || "^" === a) k.push(w);
                    else if ("/" === a) {
                        if (0 === k.length) throw new Error('Unopened section "' + p + '" at ' + s);
                        var T = k.pop();
                        if (T[1] !== p) throw new Error('Unclosed section "' + T[1] + '" at ' + s)
                    } else if ("name" === a || "{" === a || "&" === a) S = !0;
                    else if ("=" === a) {
                        if (i = p.split(f), 2 !== i.length) throw new Error("Invalid tags at " + s + ": " + i.join(", "));
                        _ = u(i)
                    }
                }
                var T = k.pop();
                if (T) throw new Error('Unclosed section "' + T[1] + '" at ' + b.pos);
                return x = c(x), l(x)
            };
            var k = new s;
            return h.clearCache = function () {
                return k.clearCache()
            }, h.compile = function (e, t) {
                return k.compile(e, t)
            }, h.compilePartial = function (e, t, n) {
                return k.compilePartial(e, t, n)
            }, h.compileTokens = function (e, t) {
                return k.compileTokens(e, t)
            }, h.render = function (e, t, n) {
                return k.render(e, t, n)
            }, h.to_html = function (e, t, n, i) {
                var r = h.render(e, t, n);
                return "function" != typeof i ? r : void i(r)
            }, h
        }()), e.mustache = function (e, t, n) {
            return Mustache.render(e, t, n)
        }, e.fn.mustache = function (t, n) {
            return e(this).map(function (i, r) {
                var o = e.trim(e(r).html()),
                    s = e.mustache(o, t, n);
                return e(s).get()
            })
        }
    }(jQuery),
    function (e) {
        function t(e, t, n) {
            switch (arguments.length) {
                case 2:
                    return null != e ? e : t;
                case 3:
                    return null != e ? e : null != t ? t : n;
                default:
                    throw new Error("Implement me")
            }
        }

        function n() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function i(e) {
            ve.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function r(e, t) {
            var n = !0;
            return h(function () {
                return n && (i(e), n = !1), t.apply(this, arguments)
            }, t)
        }

        function o(e, t) {
            ft[e] || (i(t), ft[e] = !0)
        }

        function s(e, t) {
            return function (n) {
                return p(e.call(this, n), t)
            }
        }

        function a(e, t) {
            return function (n) {
                return this.localeData().ordinal(e.call(this, n), t)
            }
        }

        function l() {}

        function c(e, t) {
            t !== !1 && A(e), d(this, e), this._d = new Date(+e._d)
        }

        function u(e) {
            var t = x(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                o = t.week || 0,
                s = t.day || 0,
                a = t.hour || 0,
                l = t.minute || 0,
                c = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * c + 6e4 * l + 36e5 * a, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ve.localeData(), this._bubble()
        }

        function h(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
        }

        function d(e, t) {
            var n, i, r;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Ee.length > 0)
                for (n in Ee) i = Ee[n], r = t[i], "undefined" != typeof r && (e[i] = r);
            return e
        }

        function f(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function p(e, t, n) {
            for (var i = "" + Math.abs(e), r = e >= 0; i.length < t;) i = "0" + i;
            return (r ? n ? "+" : "" : "-") + i
        }

        function g(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function m(e, t) {
            var n;
            return t = j(t, e), e.isBefore(t) ? n = g(e, t) : (n = g(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function v(e, t) {
            return function (n, i) {
                var r, s;
                return null === i || isNaN(+i) || (o(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, r = ve.duration(n, i), y(this, r, e), this
            }
        }

        function y(e, t, n, i) {
            var r = t._milliseconds,
                o = t._days,
                s = t._months;
            i = null == i ? !0 : i, r && e._d.setTime(+e._d + r * n), o && he(e, "Date", ue(e, "Date") + o * n), s && ce(e, ue(e, "Month") + s * n), i && ve.updateOffset(e, o || s)
        }

        function w(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function _(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }

        function b(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                s = 0;
            for (i = 0; r > i; i++)(n && e[i] !== t[i] || !n && C(e[i]) !== C(t[i])) && s++;
            return s + o
        }

        function k(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = st[e] || at[t] || t
            }
            return e
        }

        function x(e) {
            var t, n, i = {};
            for (n in e) e.hasOwnProperty(n) && (t = k(n), t && (i[t] = e[n]));
            return i
        }

        function M(t) {
            var n, i;
            if (0 === t.indexOf("week")) n = 7, i = "day";
            else {
                if (0 !== t.indexOf("month")) return;
                n = 12, i = "month"
            }
            ve[t] = function (r, o) {
                var s, a, l = ve._locale[t],
                    c = [];
                if ("number" == typeof r && (o = r, r = e), a = function (e) {
                        var t = ve().utc().set(i, e);
                        return l.call(ve._locale, t, r || "")
                    }, null != o) return a(o);
                for (s = 0; n > s; s++) c.push(a(s));
                return c
            }
        }

        function C(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function S(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function R(e, t, n) {
            return oe(ve([e, 11, 31 + t - n]), t, n).week
        }

        function D(e) {
            return T(e) ? 366 : 365
        }

        function T(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function A(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[Me] < 0 || e._a[Me] > 11 ? Me : e._a[Ce] < 1 || e._a[Ce] > S(e._a[xe], e._a[Me]) ? Ce : e._a[Se] < 0 || e._a[Se] > 23 ? Se : e._a[Re] < 0 || e._a[Re] > 59 ? Re : e._a[De] < 0 || e._a[De] > 59 ? De : e._a[Te] < 0 || e._a[Te] > 999 ? Te : -1, e._pf._overflowDayOfYear && (xe > t || t > Ce) && (t = Ce), e._pf.overflow = t)
        }

        function E(e) {
            return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
        }

        function P(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function O(e) {
            for (var t, n, i, r, o = 0; o < e.length;) {
                for (r = P(e[o]).split("-"), t = r.length, n = P(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = F(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && b(r, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }

        function F(e) {
            var t = null;
            if (!Ae[e] && Pe) try {
                t = ve.locale(), require("./locale/" + e), ve.locale(t)
            } catch (n) {}
            return Ae[e]
        }

        function j(e, t) {
            return t._isUTC ? ve(e).zone(t._offset || 0) : ve(e).local()
        }

        function I(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function W(e) {
            var t, n, i = e.match(Ie);
            for (t = 0, n = i.length; n > t; t++) dt[i[t]] ? i[t] = dt[i[t]] : i[t] = I(i[t]);
            return function (r) {
                var o = "";
                for (t = 0; n > t; t++) o += i[t] instanceof Function ? i[t].call(r, e) : i[t];
                return o
            }
        }

        function q(e, t) {
            return e.isValid() ? (t = z(t, e.localeData()), lt[t] || (lt[t] = W(t)), lt[t](e)) : e.localeData().invalidDate()
        }

        function z(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (We.lastIndex = 0; i >= 0 && We.test(e);) e = e.replace(We, n), We.lastIndex = 0, i -= 1;
            return e
        }

        function H(e, t) {
            var n, i = t._strict;
            switch (e) {
                case "Q":
                    return Ge;
                case "DDDD":
                    return Je;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return i ? Ke : He;
                case "Y":
                case "G":
                case "g":
                    return Xe;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return i ? Ze : Ne;
                case "S":
                    if (i) return Ge;
                case "SS":
                    if (i) return Qe;
                case "SSS":
                    if (i) return Je;
                case "DDD":
                    return ze;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Ye;
                case "a":
                case "A":
                    return t._locale._meridiemParse;
                case "X":
                    return Ue;
                case "Z":
                case "ZZ":
                    return Be;
                case "T":
                    return Ve;
                case "SSSS":
                    return Le;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return i ? Qe : qe;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return qe;
                case "Do":
                    return $e;
                default:
                    return n = new RegExp(Q(G(e.replace("\\", "")), "i"))
            }
        }

        function N(e) {
            e = e || "";
            var t = e.match(Be) || [],
                n = t[t.length - 1] || [],
                i = (n + "").match(rt) || ["-", 0, 0],
                r = +(60 * i[1]) + C(i[2]);
            return "+" === i[0] ? -r : r
        }

        function L(e, t, n) {
            var i, r = n._a;
            switch (e) {
                case "Q":
                    null != t && (r[Me] = 3 * (C(t) - 1));
                    break;
                case "M":
                case "MM":
                    null != t && (r[Me] = C(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    i = n._locale.monthsParse(t), null != i ? r[Me] = i : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (r[Ce] = C(t));
                    break;
                case "Do":
                    null != t && (r[Ce] = C(parseInt(t, 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = C(t));
                    break;
                case "YY":
                    r[xe] = ve.parseTwoDigitYear(t);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    r[xe] = C(t);
                    break;
                case "a":
                case "A":
                    n._isPm = n._locale.isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    r[Se] = C(t);
                    break;
                case "m":
                case "mm":
                    r[Re] = C(t);
                    break;
                case "s":
                case "ss":
                    r[De] = C(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    r[Te] = C(1e3 * ("0." + t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = N(t);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = C(t));
                    break;
                case "gg":
                case "GG":
                    n._w = n._w || {}, n._w[e] = ve.parseTwoDigitYear(t)
            }
        }

        function Y(e) {
            var n, i, r, o, s, a, l;
            n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, a = 4, i = t(n.GG, e._a[xe], oe(ve(), 1, 4).year), r = t(n.W, 1), o = t(n.E, 1)) : (s = e._locale._week.dow, a = e._locale._week.doy, i = t(n.gg, e._a[xe], oe(ve(), s, a).year), r = t(n.w, 1), null != n.d ? (o = n.d, s > o && ++r) : o = null != n.e ? n.e + s : s), l = se(i, r, o, a, s), e._a[xe] = l.year, e._dayOfYear = l.dayOfYear
        }

        function B(e) {
            var n, i, r, o, s = [];
            if (!e._d) {
                for (r = U(e), e._w && null == e._a[Ce] && null == e._a[Me] && Y(e), e._dayOfYear && (o = t(e._a[xe], r[xe]), e._dayOfYear > D(o) && (e._pf._overflowDayOfYear = !0), i = te(o, 0, e._dayOfYear), e._a[Me] = i.getUTCMonth(), e._a[Ce] = i.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = s[n] = r[n];
                for (; 7 > n; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                e._d = (e._useUTC ? te : ee).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm)
            }
        }

        function V(e) {
            var t;
            e._d || (t = x(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], B(e))
        }

        function U(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function $(e) {
            if (e._f === ve.ISO_8601) return void K(e);
            e._a = [], e._pf.empty = !0;
            var t, n, i, r, o, s = "" + e._i,
                a = s.length,
                l = 0;
            for (i = z(e._f, e._locale).match(Ie) || [], t = 0; t < i.length; t++) r = i[t], n = (s.match(H(r, e)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && e._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), l += n.length), dt[r] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(r), L(r, n, e)) : e._strict && !n && e._pf.unusedTokens.push(r);
            e._pf.charsLeftOver = a - l, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[Se] < 12 && (e._a[Se] += 12), e._isPm === !1 && 12 === e._a[Se] && (e._a[Se] = 0), B(e), A(e)
        }

        function G(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
                return t || n || i || r
            })
        }

        function Q(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function J(e) {
            var t, i, r, o, s;
            if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(NaN));
            for (o = 0; o < e._f.length; o++) s = 0, t = d({}, e), t._pf = n(), t._f = e._f[o], $(t), E(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == r || r > s) && (r = s, i = t));
            h(e, i || t)
        }

        function K(e) {
            var t, n, i = e._i,
                r = et.exec(i);
            if (r) {
                for (e._pf.iso = !0, t = 0, n = nt.length; n > t; t++)
                    if (nt[t][1].exec(i)) {
                        e._f = nt[t][0] + (r[6] || " ");
                        break
                    } for (t = 0, n = it.length; n > t; t++)
                    if (it[t][1].exec(i)) {
                        e._f += it[t][0];
                        break
                    } i.match(Be) && (e._f += "Z"), $(e)
            } else e._isValid = !1
        }

        function Z(e) {
            K(e), e._isValid === !1 && (delete e._isValid, ve.createFromInputFallback(e))
        }

        function X(t) {
            var n, i = t._i;
            i === e ? t._d = new Date : _(i) ? t._d = new Date(+i) : null !== (n = Oe.exec(i)) ? t._d = new Date(+n[1]) : "string" == typeof i ? Z(t) : w(i) ? (t._a = i.slice(0), B(t)) : "object" == typeof i ? V(t) : "number" == typeof i ? t._d = new Date(i) : ve.createFromInputFallback(t)
        }

        function ee(e, t, n, i, r, o, s) {
            var a = new Date(e, t, n, i, r, o, s);
            return 1970 > e && a.setFullYear(e), a
        }

        function te(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e), t
        }

        function ne(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) {
                    if (e = t.weekdaysParse(e), "number" != typeof e) return null
                } else e = parseInt(e, 10);
            return e
        }

        function ie(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }

        function re(e, t, n) {
            var i = ve.duration(e).abs(),
                r = ke(i.as("s")),
                o = ke(i.as("m")),
                s = ke(i.as("h")),
                a = ke(i.as("d")),
                l = ke(i.as("M")),
                c = ke(i.as("y")),
                u = r < ct.s && ["s", r] || 1 === o && ["m"] || o < ct.m && ["mm", o] || 1 === s && ["h"] || s < ct.h && ["hh", s] || 1 === a && ["d"] || a < ct.d && ["dd", a] || 1 === l && ["M"] || l < ct.M && ["MM", l] || 1 === c && ["y"] || ["yy", c];
            return u[2] = t, u[3] = +e > 0, u[4] = n, ie.apply({}, u)
        }

        function oe(e, t, n) {
            var i, r = n - t,
                o = n - e.day();
            return o > r && (o -= 7), r - 7 > o && (o += 7), i = ve(e).add(o, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function se(e, t, n, i, r) {
            var o, s, a = te(e, 0, 1).getUTCDay();
            return a = 0 === a ? 7 : a, n = null != n ? n : r, o = r - a + (a > i ? 7 : 0) - (r > a ? 7 : 0), s = 7 * (t - 1) + (n - r) + o + 1, {
                year: s > 0 ? e : e - 1,
                dayOfYear: s > 0 ? s : D(e - 1) + s
            }
        }

        function ae(t) {
            var n = t._i,
                i = t._f;
            return t._locale = t._locale || ve.localeData(t._l), null === n || i === e && "" === n ? ve.invalid({
                nullInput: !0
            }) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), ve.isMoment(n) ? new c(n, !0) : (i ? w(i) ? J(t) : $(t) : X(t), new c(t)))
        }

        function le(e, t) {
            var n, i;
            if (1 === t.length && w(t[0]) && (t = t[0]), !t.length) return ve();
            for (n = t[0], i = 1; i < t.length; ++i) t[i][e](n) && (n = t[i]);
            return n
        }

        function ce(e, t) {
            var n;
            return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), S(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
        }

        function ue(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function he(e, t, n) {
            return "Month" === t ? ce(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function de(e, t) {
            return function (n) {
                return null != n ? (he(this, e, n), ve.updateOffset(this, t), this) : ue(this, e)
            }
        }

        function fe(e) {
            return 400 * e / 146097
        }

        function pe(e) {
            return 146097 * e / 400
        }

        function ge(e) {
            ve.duration.fn[e] = function () {
                return this._data[e]
            }
        }

        function me(e) {
            "undefined" == typeof ender && (ye = be.moment, e ? be.moment = r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ve) : be.moment = ve)
        }
        for (var ve, ye, we, _e = "2.8.1", be = "undefined" != typeof global ? global : this, ke = Math.round, xe = 0, Me = 1, Ce = 2, Se = 3, Re = 4, De = 5, Te = 6, Ae = {}, Ee = [], Pe = "undefined" != typeof module && module.exports, Oe = /^\/?Date\((\-?\d+)/i, Fe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, je = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ie = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, We = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, qe = /\d\d?/, ze = /\d{1,3}/, He = /\d{1,4}/, Ne = /[+\-]?\d{1,6}/, Le = /\d+/, Ye = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Be = /Z|[\+\-]\d\d:?\d\d/gi, Ve = /T/i, Ue = /[\+\-]?\d+(\.\d{1,3})?/, $e = /\d{1,2}/, Ge = /\d/, Qe = /\d\d/, Je = /\d{3}/, Ke = /\d{4}/, Ze = /[+-]?\d{6}/, Xe = /[+-]?\d+/, et = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tt = "YYYY-MM-DDTHH:mm:ssZ", nt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], it = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], rt = /([\+\-]|\d\d)/gi, ot = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), st = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, at = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, lt = {}, ct = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, ut = "DDD w W M D d".split(" "), ht = "M D H h m s w W".split(" "), dt = {
                M: function () {
                    return this.month() + 1
                },
                MMM: function (e) {
                    return this.localeData().monthsShort(this, e)
                },
                MMMM: function (e) {
                    return this.localeData().months(this, e)
                },
                D: function () {
                    return this.date()
                },
                DDD: function () {
                    return this.dayOfYear()
                },
                d: function () {
                    return this.day()
                },
                dd: function (e) {
                    return this.localeData().weekdaysMin(this, e)
                },
                ddd: function (e) {
                    return this.localeData().weekdaysShort(this, e)
                },
                dddd: function (e) {
                    return this.localeData().weekdays(this, e)
                },
                w: function () {
                    return this.week()
                },
                W: function () {
                    return this.isoWeek()
                },
                YY: function () {
                    return p(this.year() % 100, 2)
                },
                YYYY: function () {
                    return p(this.year(), 4)
                },
                YYYYY: function () {
                    return p(this.year(), 5)
                },
                YYYYYY: function () {
                    var e = this.year(),
                        t = e >= 0 ? "+" : "-";
                    return t + p(Math.abs(e), 6)
                },
                gg: function () {
                    return p(this.weekYear() % 100, 2)
                },
                gggg: function () {
                    return p(this.weekYear(), 4)
                },
                ggggg: function () {
                    return p(this.weekYear(), 5)
                },
                GG: function () {
                    return p(this.isoWeekYear() % 100, 2)
                },
                GGGG: function () {
                    return p(this.isoWeekYear(), 4)
                },
                GGGGG: function () {
                    return p(this.isoWeekYear(), 5)
                },
                e: function () {
                    return this.weekday()
                },
                E: function () {
                    return this.isoWeekday()
                },
                a: function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function () {
                    return this.hours()
                },
                h: function () {
                    return this.hours() % 12 || 12
                },
                m: function () {
                    return this.minutes()
                },
                s: function () {
                    return this.seconds()
                },
                S: function () {
                    return C(this.milliseconds() / 100)
                },
                SS: function () {
                    return p(C(this.milliseconds() / 10), 2)
                },
                SSS: function () {
                    return p(this.milliseconds(), 3)
                },
                SSSS: function () {
                    return p(this.milliseconds(), 3)
                },
                Z: function () {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + p(C(e / 60), 2) + ":" + p(C(e) % 60, 2)
                },
                ZZ: function () {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + p(C(e / 60), 2) + p(C(e) % 60, 2)
                },
                z: function () {
                    return this.zoneAbbr()
                },
                zz: function () {
                    return this.zoneName()
                },
                X: function () {
                    return this.unix()
                },
                Q: function () {
                    return this.quarter()
                }
            }, ft = {}, pt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; ut.length;) we = ut.pop(), dt[we + "o"] = a(dt[we], we);
        for (; ht.length;) we = ht.pop(), dt[we + we] = s(dt[we], 2);
        dt.DDDD = s(dt.DDD, 3), h(l.prototype, {
            set: function (e) {
                var t, n;
                for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function (e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function (e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function (e) {
                var t, n, i;
                for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                    if (this._monthsParse[t] || (n = ve.utc([2e3, t]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function (e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function (e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function (e) {
                return this._weekdaysMin[e.day()]
            },
            weekdaysParse: function (e) {
                var t, n, i;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                    if (this._weekdaysParse[t] || (n = ve([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function (e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            isPM: function (e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function (e, t) {
                var n = this._calendar[e];
                return "function" == typeof n ? n.apply(t) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function (e, t, n, i) {
                var r = this._relativeTime[n];
                return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
            },
            pastFuture: function (e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function (e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            preparse: function (e) {
                return e
            },
            postformat: function (e) {
                return e
            },
            week: function (e) {
                return oe(e, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function () {
                return this._invalidDate
            }
        }), ve = function (t, i, r, o) {
            var s;
            return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = i, s._l = r, s._strict = o, s._isUTC = !1, s._pf = n(), ae(s)
        }, ve.suppressDeprecationWarnings = !1, ve.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
            e._d = new Date(e._i)
        }), ve.min = function () {
            var e = [].slice.call(arguments, 0);
            return le("isBefore", e)
        }, ve.max = function () {
            var e = [].slice.call(arguments, 0);
            return le("isAfter", e)
        }, ve.utc = function (t, i, r, o) {
            var s;
            return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = r, s._i = t, s._f = i, s._strict = o, s._pf = n(), ae(s).utc()
        }, ve.unix = function (e) {
            return ve(1e3 * e)
        }, ve.duration = function (e, t) {
            var n, i, r, o, s = e,
                a = null;
            return ve.isDuration(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = Fe.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: 0,
                d: C(a[Ce]) * n,
                h: C(a[Se]) * n,
                m: C(a[Re]) * n,
                s: C(a[De]) * n,
                ms: C(a[Te]) * n
            }) : (a = je.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = function (e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * n
            }, s = {
                y: r(a[2]),
                M: r(a[3]),
                d: r(a[4]),
                h: r(a[5]),
                m: r(a[6]),
                s: r(a[7]),
                w: r(a[8])
            }) : "object" == typeof s && ("from" in s || "to" in s) && (o = m(ve(s.from), ve(s.to)), s = {}, s.ms = o.milliseconds, s.M = o.months), i = new u(s), ve.isDuration(e) && e.hasOwnProperty("_locale") && (i._locale = e._locale), i
        }, ve.version = _e, ve.defaultFormat = tt, ve.ISO_8601 = function () {}, ve.momentProperties = Ee, ve.updateOffset = function () {}, ve.relativeTimeThreshold = function (t, n) {
            return ct[t] === e ? !1 : n === e ? ct[t] : (ct[t] = n, !0)
        }, ve.lang = r("moment.lang is deprecated. Use moment.locale instead.", function (e, t) {
            return ve.locale(e, t)
        }), ve.locale = function (e, t) {
            var n;
            return e && (n = "undefined" != typeof t ? ve.defineLocale(e, t) : ve.localeData(e), n && (ve.duration._locale = ve._locale = n)), ve._locale._abbr
        }, ve.defineLocale = function (e, t) {
            return null !== t ? (t.abbr = e, Ae[e] || (Ae[e] = new l), Ae[e].set(t), ve.locale(e), Ae[e]) : (delete Ae[e], null)
        }, ve.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function (e) {
            return ve.localeData(e)
        }), ve.localeData = function (e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ve._locale;
            if (!w(e)) {
                if (t = F(e)) return t;
                e = [e]
            }
            return O(e)
        }, ve.isMoment = function (e) {
            return e instanceof c || null != e && e.hasOwnProperty("_isAMomentObject")
        }, ve.isDuration = function (e) {
            return e instanceof u
        };
        for (we = pt.length - 1; we >= 0; --we) M(pt[we]);
        ve.normalizeUnits = function (e) {
            return k(e)
        }, ve.invalid = function (e) {
            var t = ve.utc(NaN);
            return null != e ? h(t._pf, e) : t._pf.userInvalidated = !0, t
        }, ve.parseZone = function () {
            return ve.apply(null, arguments).parseZone()
        }, ve.parseTwoDigitYear = function (e) {
            return C(e) + (C(e) > 68 ? 1900 : 2e3)
        }, h(ve.fn = c.prototype, {
            clone: function () {
                return ve(this)
            },
            valueOf: function () {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function () {
                return Math.floor(+this / 1e3)
            },
            toString: function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function () {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function () {
                var e = ve(this).utc();
                return 0 < e.year() && e.year() <= 9999 ? q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function () {
                return E(this)
            },
            isDSTShifted: function () {
                return this._a ? this.isValid() && b(this._a, (this._isUTC ? ve.utc(this._a) : ve(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function () {
                return h({}, this._pf)
            },
            invalidAt: function () {
                return this._pf.overflow
            },
            utc: function (e) {
                return this.zone(0, e)
            },
            local: function (e) {
                return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._d.getTimezoneOffset(), "m")), this
            },
            format: function (e) {
                var t = q(this, e || ve.defaultFormat);
                return this.localeData().postformat(t)
            },
            add: v(1, "add"),
            subtract: v(-1, "subtract"),
            diff: function (e, t, n) {
                var i, r, o = j(e, this),
                    s = 6e4 * (this.zone() - o.zone());
                return t = k(t), "year" === t || "month" === t ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), r = 12 * (this.year() - o.year()) + (this.month() - o.month()), r += (this - ve(this).startOf("month") - (o - ve(o).startOf("month"))) / i, r -= 6e4 * (this.zone() - ve(this).startOf("month").zone() - (o.zone() - ve(o).startOf("month").zone())) / i, "year" === t && (r /= 12)) : (i = this - o, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? r : f(r)
            },
            from: function (e, t) {
                return ve.duration({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t)
            },
            fromNow: function (e) {
                return this.from(ve(), e)
            },
            calendar: function (e) {
                var t = e || ve(),
                    n = j(t, this).startOf("day"),
                    i = this.diff(n, "days", !0),
                    r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(r, this))
            },
            isLeapYear: function () {
                return T(this.year())
            },
            isDST: function () {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function (e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = ne(e, this.localeData()), this.add(e - t, "d")) : t
            },
            month: de("Month", !0),
            startOf: function (e) {
                switch (e = k(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function (e) {
                return e = k(e), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
            },
            isAfter: function (e, t) {
                return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +ve(e).startOf(t)
            },
            isBefore: function (e, t) {
                return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +ve(e).startOf(t)
            },
            isSame: function (e, t) {
                return t = t || "ms", +this.clone().startOf(t) === +j(e, this).startOf(t)
            },
            min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (e) {
                return e = ve.apply(null, arguments), this > e ? this : e
            }),
            max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (e) {
                return e = ve.apply(null, arguments), e > this ? this : e
            }),
            zone: function (e, t) {
                var n, i = this._offset || 0;
                return null == e ? this._isUTC ? i : this._d.getTimezoneOffset() : ("string" == typeof e && (e = N(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._d.getTimezoneOffset()), this._offset = e, this._isUTC = !0, null != n && this.subtract(n, "m"), i !== e && (!t || this._changeInProgress ? y(this, ve.duration(i - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ve.updateOffset(this, !0), this._changeInProgress = null)), this)
            },
            zoneAbbr: function () {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function () {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function (e) {
                return e = e ? ve(e).zone() : 0, (this.zone() - e) % 60 === 0
            },
            daysInMonth: function () {
                return S(this.year(), this.month())
            },
            dayOfYear: function (e) {
                var t = ke((ve(this).startOf("day") - ve(this).startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            },
            quarter: function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            },
            weekYear: function (e) {
                var t = oe(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == e ? t : this.add(e - t, "y")
            },
            isoWeekYear: function (e) {
                var t = oe(this, 1, 4).year;
                return null == e ? t : this.add(e - t, "y")
            },
            week: function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            isoWeek: function (e) {
                var t = oe(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            weekday: function (e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            },
            isoWeekday: function (e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            },
            isoWeeksInYear: function () {
                return R(this.year(), 1, 4)
            },
            weeksInYear: function () {
                var e = this.localeData()._week;
                return R(this.year(), e.dow, e.doy)
            },
            get: function (e) {
                return e = k(e), this[e]()
            },
            set: function (e, t) {
                return e = k(e), "function" == typeof this[e] && this[e](t), this
            },
            locale: function (t) {
                return t === e ? this._locale._abbr : (this._locale = ve.localeData(t), this)
            },
            lang: r("moment().lang() is deprecated. Use moment().localeData() instead.", function (t) {
                return t === e ? this.localeData() : (this._locale = ve.localeData(t), this)
            }),
            localeData: function () {
                return this._locale
            }
        }), ve.fn.millisecond = ve.fn.milliseconds = de("Milliseconds", !1), ve.fn.second = ve.fn.seconds = de("Seconds", !1), ve.fn.minute = ve.fn.minutes = de("Minutes", !1), ve.fn.hour = ve.fn.hours = de("Hours", !0), ve.fn.date = de("Date", !0), ve.fn.dates = r("dates accessor is deprecated. Use date instead.", de("Date", !0)), ve.fn.year = de("FullYear", !0), ve.fn.years = r("years accessor is deprecated. Use year instead.", de("FullYear", !0)), ve.fn.days = ve.fn.day, ve.fn.months = ve.fn.month, ve.fn.weeks = ve.fn.week, ve.fn.isoWeeks = ve.fn.isoWeek, ve.fn.quarters = ve.fn.quarter, ve.fn.toJSON = ve.fn.toISOString, h(ve.duration.fn = u.prototype, {
            _bubble: function () {
                var e, t, n, i = this._milliseconds,
                    r = this._days,
                    o = this._months,
                    s = this._data,
                    a = 0;
                s.milliseconds = i % 1e3, e = f(i / 1e3), s.seconds = e % 60, t = f(e / 60), s.minutes = t % 60, n = f(t / 60), s.hours = n % 24, r += f(n / 24), a = f(fe(r)), r -= f(pe(a)), o += f(r / 30), r %= 30, a += f(o / 12), o %= 12, s.days = r, s.months = o, s.years = a
            },
            abs: function () {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function () {
                return f(this.days() / 7)
            },
            valueOf: function () {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
            },
            humanize: function (e) {
                var t = re(this, !e, this.localeData());
                return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
            },
            add: function (e, t) {
                var n = ve.duration(e, t);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function (e, t) {
                var n = ve.duration(e, t);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function (e) {
                return e = k(e), this[e.toLowerCase() + "s"]()
            },
            as: function (e) {
                var t, n;
                if (e = k(e), t = this._days + this._milliseconds / 864e5, "month" === e || "year" === e) return n = this._months + 12 * fe(t), "month" === e ? n : n / 12;
                switch (t += pe(this._months / 12), e) {
                    case "week":
                        return t / 7;
                    case "day":
                        return t;
                    case "hour":
                        return 24 * t;
                    case "minute":
                        return 24 * t * 60;
                    case "second":
                        return 24 * t * 60 * 60;
                    case "millisecond":
                        return 24 * t * 60 * 60 * 1e3;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            },
            lang: ve.fn.lang,
            locale: ve.fn.locale,
            toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
                return this.toISOString()
            }),
            toISOString: function () {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    i = Math.abs(this.hours()),
                    r = Math.abs(this.minutes()),
                    o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || r || o ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (o ? o + "S" : "") : "P0D"
            },
            localeData: function () {
                return this._locale
            }
        });
        for (we in ot) ot.hasOwnProperty(we) && ge(we.toLowerCase());
        ve.duration.fn.asMilliseconds = function () {
            return this.as("ms")
        }, ve.duration.fn.asSeconds = function () {
            return this.as("s")
        }, ve.duration.fn.asMinutes = function () {
            return this.as("m")
        }, ve.duration.fn.asHours = function () {
            return this.as("h")
        }, ve.duration.fn.asDays = function () {
            return this.as("d")
        }, ve.duration.fn.asWeeks = function () {
            return this.as("weeks")
        }, ve.duration.fn.asMonths = function () {
            return this.as("M")
        }, ve.duration.fn.asYears = function () {
            return this.as("y")
        }, ve.locale("en", {
            ordinal: function (e) {
                var t = e % 10,
                    n = 1 === C(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), Pe ? module.exports = ve : "function" == typeof _wAMD.define && _wAMD.define.amd ? (_wAMD.define("moment", ["require", "exports", "module"], function (e, t, n) {
            return n.config && n.config() && n.config().noGlobal === !0 && (be.moment = ye), ve
        }), me(!0)) : me()
    }.call(this), _wAMD.define("mustache", ["jquery", "mustache-vendor", "moment"], function (e, t, n) {
        window.Mustache = t;
        var i = "undefined" != typeof Weebly ? Weebly.AdminType : "",
            r = {
                date: "MMMM D, YYYY",
                shortDate: "M/D/YY",
                longDate: "M/D/YYYY",
                time: "h:mm a"
            },
            o = function (e) {
                return function (t, i) {
                    var o = i(t),
                        s = n.unix(o);
                    return s.format(r[e])
                }
            },
            s = {
                expireCookie: function (e) {
                    document.cookie = e + "=; expires=Thu, 18 Dec 2000 12:00:00 UTC"
                },
                setCookie: function (e, t) {
                    s.expireCookie(e), document.cookie = e + "=" + t + "; path=/; domain=" + window.location.hostname
                }
            },
            a = {
                buildTime: "undefined" != typeof buildTime ? buildTime : null,
                ASSETS_BASE: "undefined" != typeof ASSETS_BASE ? ASSETS_BASE : null,
                tl: function () {
                    return function (e, t) {
                        return t(_W.utl(e))
                    }
                },
                ftl: function () {
                    return function (e, t) {
                        return t(_W.stl(e))
                    }
                },
                esc_attr: function () {
                    return function (e, t) {
                        return _.escape(t(e))
                    }
                },
                fmt: {
                    date: function () {
                        return o("date")
                    },
                    shortDate: function () {
                        return o("shortDate")
                    },
                    longDate: function () {
                        return o("longDate")
                    },
                    time: function () {
                        return o("time")
                    }
                },
                isWeeblyAdmin: function () {
                    return "weebly" === i
                },
                td: function () {
                    return function (e, t) {
                        var i = ["d", "j", "m", "n", "y", "Y", "a", "A", "g", "h", "G", "H", "i", "s"],
                            r = ["DD", "D", "MM", "M", "YY", "YYYY", "a", "A", "hh", "h", "HH", "H", "mm", "ss"];
                        _.each(i, function (t, n) {
                            e = e.replace(t, r[n])
                        });
                        var o = e.split(/\|/),
                            s = o[0],
                            a = t("{{" + o[1] + "}}"),
                            l = n(a).format(s);
                        return l
                    }
                },
                csrf_input: function () {
                    var e = window.csrfToken;
                    return e || (e = Math.random().toString(36).substring(2), s.setCookie("_csrf", e)), "<input type='hidden' name='_csrf' value='" + e + "' />"
                }
            };
        t.origRender = t.render, t.render = function (n, i) {
            return i = e.extend({}, i, a), t.origRender.apply(this, arguments)
        };
        var l = t.Writer.prototype;
        return l.origCompile = l.compile, l.compile = function (t) {
            var n = l.origCompile.apply(this, [t]);
            return function (t) {
                var i = Array.prototype.slice.call(arguments);
                return i[0] = e.extend(i[0] || {}, a), n.apply(this, i)
            }
        }, t
    }), _wAMD.define("polyfill/string", [], function () {
        String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
            return t = t || 0, this.substr(t, e.length) === e
        })
    }), _wAMD.define("polyfill/all", ["polyfill/string"], function () {
        return {}
    }),
    function (e, t, n) {
        function i(e) {
            return e.match(/\D+$/)
        }

        function r(e, t, n, i) {
            if ("d" != n && h(e)) {
                var r = v.exec(t),
                    o = "auto" === e.css(n) ? 0 : e.css(n),
                    s = "string" == typeof o ? u(o) : o,
                    a = ("string" == typeof t ? u(t) : t, i === !0 ? 0 : s),
                    l = e.is(":hidden"),
                    c = e.translation();
                if ("left" == n && (a = parseInt(s, 10) + c.x), "right" == n && (a = parseInt(s, 10) + c.x), "top" == n && (a = parseInt(s, 10) + c.y), "bottom" == n && (a = parseInt(s, 10) + c.y), r || "show" != t ? r || "hide" != t || (a = 0) : (a = 1, l && e.css({
                        display: "block",
                        opacity: 0
                    })), r) {
                    var d = parseFloat(r[2]);
                    return r[1] && (d = ("-=" === r[1] ? -1 : 1) * d + parseInt(a, 10)), d
                }
                return a
            }
        }

        function o(e, t, n) {
            return (n === !0 || E === !0 && n !== !1) && A ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px," + t + "px)"
        }

        function s(t, n, i, r, o, s, l, h) {
            var d = t.data(b),
                f = d && !c(d) ? d : e.extend(!0, {}, w),
                g = o,
                m = e.inArray(n, p) > -1;
            if (m) {
                var v = f.meta,
                    y = u(t.css(n)) || 0,
                    _ = n + "_o";
                g = o - y, v[n] = g, v[_] = "auto" == t.css(n) ? 0 + g : y + g || 0, f.meta = v, l && 0 === g && (g = 0 - v[_], v[n] = g, v[_] = 0)
            }
            return t.data(b, a(t, f, n, i, r, g, s, l, h))
        }

        function a(e, t, n, i, r, s, a, l, c) {
            var u = !1,
                h = a === !0 && l === !0;
            t = t || {}, t.original || (t.original = {}, u = !0), t.properties = t.properties || {}, t.secondary = t.secondary || {};
            for (var d = t.meta, f = t.original, p = t.properties, m = t.secondary, v = g.length - 1; v >= 0; v--) {
                var y = g[v] + "transition-property",
                    w = g[v] + "transition-duration",
                    _ = g[v] + "transition-timing-function";
                n = h ? g[v] + "transform" : n, u && (f[y] = e.css(y) || "", f[w] = e.css(w) || "", f[_] = e.css(_) || ""), m[n] = h ? o(d.left, d.top, c) : s, p[y] = (p[y] ? p[y] + "," : "") + n, p[w] = (p[w] ? p[w] + "," : "") + i + "ms", p[_] = (p[_] ? p[_] + "," : "") + r
            }
            return t
        }

        function l(e) {
            for (var t in e)
                if (!("width" != t && "height" != t || "show" != e[t] && "hide" != e[t] && "toggle" != e[t])) return !0;
            return !1
        }

        function c(e) {
            for (var t in e) return !1;
            return !0
        }

        function u(e) {
            return parseFloat(e.replace(i(e), ""))
        }

        function h(e) {
            var t = !0;
            return e.each(function (e, n) {
                return t = t && n.ownerDocument
            }), t
        }

        function d(t, n, i) {
            if (!h(i)) return !1;
            var r = e.inArray(t, f) > -1;
            return "width" != t && "height" != t && "opacity" != t || parseFloat(n) !== parseFloat(i.css(t)) || (r = !1), r
        }
        var f = ["top", "right", "bottom", "left", "opacity", "height", "width"],
            p = ["top", "right", "bottom", "left"],
            g = ["-webkit-", "-moz-", "-o-", ""],
            m = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
            v = /^([+-]=)?([\d+-.]+)(.*)$/,
            y = /([A-Z])/g,
            w = {
                secondary: {},
                meta: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            _ = "px",
            b = "jQe",
            k = "cubic-bezier(",
            x = ")",
            M = null,
            C = !1,
            S = document.body || document.documentElement,
            R = S.style,
            D = "webkitTransitionEnd oTransitionEnd transitionend",
            T = void 0 !== R.WebkitTransition || void 0 !== R.MozTransition || void 0 !== R.OTransition || void 0 !== R.transition,
            A = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
            E = A;
        e.expr && e.expr.filters && (M = e.expr.filters.animated, e.expr.filters.animated = function (t) {
            return e(t).data("events") && e(t).data("events")[D] ? !0 : M.call(this, t)
        }), e.extend({
            toggle3DByDefault: function () {
                return E = !E
            },
            toggleDisabledByDefault: function () {
                return C = !C
            }
        }), e.fn.translation = function () {
            if (!this[0]) return null;
            var e = this[0],
                t = window.getComputedStyle(e, null),
                n = {
                    x: 0,
                    y: 0
                };
            if (t)
                for (var i = g.length - 1; i >= 0; i--) {
                    var r = t.getPropertyValue(g[i] + "transform");
                    if (r && /matrix/i.test(r)) {
                        var o = r.replace(/^matrix\(/i, "").split(/, |\)$/g);
                        n = {
                            x: parseInt(o[4], 10),
                            y: parseInt(o[5], 10)
                        };
                        break
                    }
                }
            return n
        }, e.fn.animate = function (n, i, o, a) {
            n = n || {};
            var u = !("undefined" != typeof n.bottom || "undefined" != typeof n.right),
                h = e.speed(i, o, a),
                f = this,
                v = 0,
                y = function () {
                    v--, 0 === v && "function" == typeof h.complete && h.complete.apply(f, arguments)
                },
                w = "undefined" != typeof n.avoidCSSTransitions ? n.avoidCSSTransitions : C;
            return w === !0 || !T || c(n) || l(n) || h.duration <= 0 || e.fn.animate.defaults.avoidTransforms === !0 && n.avoidTransforms !== !1 ? t.apply(this, arguments) : this[h.queue === !0 ? "queue" : "each"](function () {
                var i = e(this),
                    o = e.extend({}, h),
                    a = function (t) {
                        var r = i.data(b) || {
                                original: {}
                            },
                            o = {};
                        if (2 == t.eventPhase) {
                            if (n.leaveTransforms !== !0) {
                                for (var s = g.length - 1; s >= 0; s--) o[g[s] + "transform"] = "";
                                if (u && "undefined" != typeof r.meta)
                                    for (var a, l = 0; a = p[l]; ++l) o[a] = r.meta[a + "_o"] + _,
                                        e(this).css(a, o[a])
                            }
                            i.unbind(D).css(r.original).css(o).data(b, null), "hide" === n.opacity && i.css({
                                display: "none",
                                opacity: ""
                            }), y.call(this)
                        }
                    },
                    l = {
                        bounce: k + "0.0, 0.35, .5, 1.3" + x,
                        linear: "linear",
                        swing: "ease-in-out",
                        easeInQuad: k + "0.550, 0.085, 0.680, 0.530" + x,
                        easeInCubic: k + "0.550, 0.055, 0.675, 0.190" + x,
                        easeInQuart: k + "0.895, 0.030, 0.685, 0.220" + x,
                        easeInQuint: k + "0.755, 0.050, 0.855, 0.060" + x,
                        easeInSine: k + "0.470, 0.000, 0.745, 0.715" + x,
                        easeInExpo: k + "0.950, 0.050, 0.795, 0.035" + x,
                        easeInCirc: k + "0.600, 0.040, 0.980, 0.335" + x,
                        easeInBack: k + "0.600, -0.280, 0.735, 0.045" + x,
                        easeOutQuad: k + "0.250, 0.460, 0.450, 0.940" + x,
                        easeOutCubic: k + "0.215, 0.610, 0.355, 1.000" + x,
                        easeOutQuart: k + "0.165, 0.840, 0.440, 1.000" + x,
                        easeOutQuint: k + "0.230, 1.000, 0.320, 1.000" + x,
                        easeOutSine: k + "0.390, 0.575, 0.565, 1.000" + x,
                        easeOutExpo: k + "0.190, 1.000, 0.220, 1.000" + x,
                        easeOutCirc: k + "0.075, 0.820, 0.165, 1.000" + x,
                        easeOutBack: k + "0.175, 0.885, 0.320, 1.275" + x,
                        easeInOutQuad: k + "0.455, 0.030, 0.515, 0.955" + x,
                        easeInOutCubic: k + "0.645, 0.045, 0.355, 1.000" + x,
                        easeInOutQuart: k + "0.770, 0.000, 0.175, 1.000" + x,
                        easeInOutQuint: k + "0.860, 0.000, 0.070, 1.000" + x,
                        easeInOutSine: k + "0.445, 0.050, 0.550, 0.950" + x,
                        easeInOutExpo: k + "1.000, 0.000, 0.000, 1.000" + x,
                        easeInOutCirc: k + "0.785, 0.135, 0.150, 0.860" + x,
                        easeInOutBack: k + "0.680, -0.550, 0.265, 1.550" + x
                    },
                    f = {},
                    w = l[o.easing || "swing"] ? l[o.easing || "swing"] : o.easing || "swing";
                for (var M in n)
                    if (-1 === e.inArray(M, m)) {
                        var C = e.inArray(M, p) > -1,
                            S = r(i, n[M], M, C && n.avoidTransforms !== !0);
                        n.avoidTransforms !== !0 && d(M, S, i) ? s(i, M, o.duration, w, C && n.avoidTransforms === !0 ? S + _ : S, C && n.avoidTransforms !== !0, u, n.useTranslate3d) : f[M] = n[M]
                    } i.unbind(D);
                var R = i.data(b);
                if (!R || c(R) || c(R.secondary)) o.queue = !1;
                else {
                    v++, i.css(R.properties);
                    var T = R.secondary;
                    setTimeout(function () {
                        i.bind(D, a).css(T)
                    })
                }
                return c(f) || (v++, t.apply(i, [f, {
                    duration: o.duration,
                    easing: e.easing[o.easing] ? o.easing : e.easing.swing ? "swing" : "linear",
                    complete: y,
                    queue: o.queue
                }])), !0
            })
        }, e.fn.animate.defaults = {}, e.fn.stop = function (t, i, r) {
            return T ? (t && this.queue([]), this.each(function () {
                var o = e(this),
                    s = o.data(b);
                if (s && !c(s)) {
                    var a, l = {};
                    if (i) {
                        if (l = s.secondary, !r && void 0 !== typeof s.meta.left_o || void 0 !== typeof s.meta.top_o)
                            for (l.left = void 0 !== typeof s.meta.left_o ? s.meta.left_o : "auto", l.top = void 0 !== typeof s.meta.top_o ? s.meta.top_o : "auto", a = g.length - 1; a >= 0; a--) l[g[a] + "transform"] = ""
                    } else if (!c(s.secondary)) {
                        var u = window.getComputedStyle(o[0], null);
                        if (u)
                            for (var h in s.secondary)
                                if (s.secondary.hasOwnProperty(h) && (h = h.replace(y, "-$1").toLowerCase(), l[h] = u.getPropertyValue(h), !r && /matrix/i.test(l[h]))) {
                                    var d = l[h].replace(/^matrix\(/i, "").split(/, |\)$/g);
                                    for (l.left = parseFloat(d[4]) + parseFloat(o.css("left")) + _ || "auto", l.top = parseFloat(d[5]) + parseFloat(o.css("top")) + _ || "auto", a = g.length - 1; a >= 0; a--) l[g[a] + "transform"] = ""
                                }
                    }
                    o.unbind(D), o.css(s.original).css(l).data(b, null)
                } else n.apply(o, [t, i])
            }), this) : n.apply(this, [t, i])
        }, RegExp(" AppleWebKit/").test(navigator.userAgent) && RegExp(" Mobile/").test(navigator.userAgent) || e.toggleDisabledByDefault()
    }(jQuery, jQuery.fn.animate, jQuery.fn.stop), _wAMD.define("legacy/jquery.animate", function () {}),
    function (e) {
        e.fn.up = function (e) {
            return this.eq(0).parent().closest(e || "*")
        }, e.fn.down = function (e) {
            return e ? this.eq(0).find(e || "*").eq(0) : this.eq(0).children(":first")
        };
        var t = 1;
        e.fn.identify = function () {
            var n = this.attr("id");
            if (!n && this.length) {
                do n = "anonymous_element_" + t++; while (e("#" + n).length);
                this.attr("id", n)
            }
            return n
        }, e.fn.placeholder = function () {
            if (!("placeholder" in document.createElement("input"))) {
                var t, n;
                this.each(function (i, r) {
                    n = r.getAttribute("placeholder"), n && "input" === r.nodeName.toLowerCase() && (t = e(r).on({
                        focus: function (t) {
                            r.value === n && (e(r).removeClass("wsite-placeholder"), r.value = "")
                        },
                        blur: function (e) {
                            r.value.length || (r.value = n, r.className += " wsite-placeholder")
                        }
                    }), r.className += " wsite-placeholder", r.value = n)
                })
            }
        }, e.extend({
            isValidSelector: function (t) {
                try {
                    e(t)
                } catch (n) {
                    return !1
                }
                return !0
            }
        }), document.observe || (document.observe = function (t, n) {
            "dom:loaded" == t && e(document).ready(n)
        })
    }(Weebly.jQuery), Weebly.evalJSON = function (json) {
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        cx.test(json) && (json = json.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        try {
            return eval("(" + json + ")")
        } catch (e) {}
        throw new SyntaxError("Badly formed JSON string: " + json)
    }, _wAMD.define("legacy/jquery_utils", function () {}), _wAMD.define("jquery-ui/effect", ["jquery"], function (e) {
        ! function (t, n) {
            var i = "ui-effects-";
            t.effects = {
                    effect: {}
                },
                function (e, t) {
                    function n(e, t, n) {
                        var i = h[t.type] || {};
                        return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : i.max < e ? i.max : e)
                    }

                    function i(t) {
                        var n = c(),
                            i = n._rgba = [];
                        return t = t.toLowerCase(), p(l, function (e, r) {
                            var o, s = r.re.exec(t),
                                a = s && r.parse(s),
                                l = r.space || "rgba";
                            return a ? (o = n[l](a), n[u[l].cache] = o[u[l].cache], i = n._rgba = o._rgba, !1) : void 0
                        }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, o.transparent), n) : o[t]
                    }

                    function r(e, t, n) {
                        return n = (n + 1) % 1, 1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
                    }
                    var o, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                        a = /^([\-+])=\s*(\d+\.?\d*)/,
                        l = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function (e) {
                                return [e[1], e[2], e[3], e[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function (e) {
                                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function (e) {
                                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function (e) {
                                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function (e) {
                                return [e[1], e[2] / 100, e[3] / 100, e[4]]
                            }
                        }],
                        c = e.Color = function (t, n, i, r) {
                            return new e.Color.fn.parse(t, n, i, r)
                        },
                        u = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        h = {
                            "byte": {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        d = c.support = {},
                        f = e("<p>")[0],
                        p = e.each;
                    f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(u, function (e, t) {
                        t.cache = "_" + e, t.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }), c.fn = e.extend(c.prototype, {
                        parse: function (r, s, a, l) {
                            if (r === t) return this._rgba = [null, null, null, null], this;
                            (r.jquery || r.nodeType) && (r = e(r).css(s), s = t);
                            var h = this,
                                d = e.type(r),
                                f = this._rgba = [];
                            return s !== t && (r = [r, s, a, l], d = "array"), "string" === d ? this.parse(i(r) || o._default) : "array" === d ? (p(u.rgba.props, function (e, t) {
                                f[t.idx] = n(r[t.idx], t)
                            }), this) : "object" === d ? (r instanceof c ? p(u, function (e, t) {
                                r[t.cache] && (h[t.cache] = r[t.cache].slice())
                            }) : p(u, function (t, i) {
                                var o = i.cache;
                                p(i.props, function (e, t) {
                                    if (!h[o] && i.to) {
                                        if ("alpha" === e || null == r[e]) return;
                                        h[o] = i.to(h._rgba)
                                    }
                                    h[o][t.idx] = n(r[e], t, !0)
                                }), h[o] && e.inArray(null, h[o].slice(0, 3)) < 0 && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])))
                            }), this) : void 0
                        },
                        is: function (e) {
                            var t = c(e),
                                n = !0,
                                i = this;
                            return p(u, function (e, r) {
                                var o, s = t[r.cache];
                                return s && (o = i[r.cache] || r.to && r.to(i._rgba) || [], p(r.props, function (e, t) {
                                    return null != s[t.idx] ? n = s[t.idx] === o[t.idx] : void 0
                                })), n
                            }), n
                        },
                        _space: function () {
                            var e = [],
                                t = this;
                            return p(u, function (n, i) {
                                t[i.cache] && e.push(n)
                            }), e.pop()
                        },
                        transition: function (e, t) {
                            var i = c(e),
                                r = i._space(),
                                o = u[r],
                                s = 0 === this.alpha() ? c("transparent") : this,
                                a = s[o.cache] || o.to(s._rgba),
                                l = a.slice();
                            return i = i[o.cache], p(o.props, function (e, r) {
                                var o = r.idx,
                                    s = a[o],
                                    c = i[o],
                                    u = h[r.type] || {};
                                null !== c && (null === s ? l[o] = c : (u.mod && (c - s > u.mod / 2 ? s += u.mod : s - c > u.mod / 2 && (s -= u.mod)), l[o] = n((c - s) * t + s, r)))
                            }), this[r](l)
                        },
                        blend: function (t) {
                            if (1 === this._rgba[3]) return this;
                            var n = this._rgba.slice(),
                                i = n.pop(),
                                r = c(t)._rgba;
                            return c(e.map(n, function (e, t) {
                                return (1 - i) * r[t] + i * e
                            }))
                        },
                        toRgbaString: function () {
                            var t = "rgba(",
                                n = e.map(this._rgba, function (e, t) {
                                    return null == e ? t > 2 ? 1 : 0 : e
                                });
                            return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                        },
                        toHslaString: function () {
                            var t = "hsla(",
                                n = e.map(this.hsla(), function (e, t) {
                                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                                });
                            return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                        },
                        toHexString: function (t) {
                            var n = this._rgba.slice(),
                                i = n.pop();
                            return t && n.push(~~(255 * i)), "#" + e.map(n, function (e) {
                                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                            }).join("")
                        },
                        toString: function () {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }), c.fn.parse.prototype = c.fn, u.hsla.to = function (e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t, n, i = e[0] / 255,
                            r = e[1] / 255,
                            o = e[2] / 255,
                            s = e[3],
                            a = Math.max(i, r, o),
                            l = Math.min(i, r, o),
                            c = a - l,
                            u = a + l,
                            h = .5 * u;
                        return t = l === a ? 0 : i === a ? 60 * (r - o) / c + 360 : r === a ? 60 * (o - i) / c + 120 : 60 * (i - r) / c + 240, n = 0 === c ? 0 : .5 >= h ? c / u : c / (2 - u), [Math.round(t) % 360, n, h, null == s ? 1 : s]
                    }, u.hsla.from = function (e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t = e[0] / 360,
                            n = e[1],
                            i = e[2],
                            o = e[3],
                            s = .5 >= i ? i * (1 + n) : i + n - i * n,
                            a = 2 * i - s;
                        return [Math.round(255 * r(a, s, t + 1 / 3)), Math.round(255 * r(a, s, t)), Math.round(255 * r(a, s, t - 1 / 3)), o]
                    }, p(u, function (i, r) {
                        var o = r.props,
                            s = r.cache,
                            l = r.to,
                            u = r.from;
                        c.fn[i] = function (i) {
                            if (l && !this[s] && (this[s] = l(this._rgba)), i === t) return this[s].slice();
                            var r, a = e.type(i),
                                h = "array" === a || "object" === a ? i : arguments,
                                d = this[s].slice();
                            return p(o, function (e, t) {
                                var i = h["object" === a ? e : t.idx];
                                null == i && (i = d[t.idx]), d[t.idx] = n(i, t)
                            }), u ? (r = c(u(d)), r[s] = d, r) : c(d)
                        }, p(o, function (t, n) {
                            c.fn[t] || (c.fn[t] = function (r) {
                                var o, s = e.type(r),
                                    l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i,
                                    c = this[l](),
                                    u = c[n.idx];
                                return "undefined" === s ? u : ("function" === s && (r = r.call(this, u), s = e.type(r)), null == r && n.empty ? this : ("string" === s && (o = a.exec(r), o && (r = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[n.idx] = r, this[l](c)))
                            })
                        })
                    }), c.hook = function (t) {
                        var n = t.split(" ");
                        p(n, function (t, n) {
                            e.cssHooks[n] = {
                                set: function (t, r) {
                                    var o, s, a = "";
                                    if ("transparent" !== r && ("string" !== e.type(r) || (o = i(r)))) {
                                        if (r = c(o || r), !d.rgba && 1 !== r._rgba[3]) {
                                            for (s = "backgroundColor" === n ? t.parentNode : t;
                                                ("" === a || "transparent" === a) && s && s.style;) try {
                                                a = e.css(s, "backgroundColor"), s = s.parentNode
                                            } catch (l) {}
                                            r = r.blend(a && "transparent" !== a ? a : "_default")
                                        }
                                        r = r.toRgbaString()
                                    }
                                    try {
                                        t.style[n] = r
                                    } catch (l) {}
                                }
                            }, e.fx.step[n] = function (t) {
                                t.colorInit || (t.start = c(t.elem, n), t.end = c(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                            }
                        })
                    }, c.hook(s), e.cssHooks.borderColor = {
                        expand: function (e) {
                            var t = {};
                            return p(["Top", "Right", "Bottom", "Left"], function (n, i) {
                                t["border" + i + "Color"] = e
                            }), t
                        }
                    }, o = e.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(e),
                function () {
                    function i(e) {
                        var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                            o = {};
                        if (r && r.length && r[0] && r[r[0]])
                            for (i = r.length; i--;) n = r[i], "string" == typeof r[n] && (o[t.camelCase(n)] = r[n]);
                        else
                            for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
                        return o
                    }

                    function r(e, n) {
                        var i, r, o = {};
                        for (i in n) r = n[i], e[i] !== r && (s[i] || (t.fx.step[i] || !isNaN(parseFloat(r))) && (o[i] = r));
                        return o
                    }
                    var o = ["add", "remove", "toggle"],
                        s = {
                            border: 1,
                            borderBottom: 1,
                            borderColor: 1,
                            borderLeft: 1,
                            borderRight: 1,
                            borderTop: 1,
                            borderWidth: 1,
                            margin: 1,
                            padding: 1
                        };
                    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (n, i) {
                        t.fx.step[i] = function (t) {
                            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (e.style(t.elem, i, t.end), t.setAttr = !0)
                        }
                    }), t.fn.addBack || (t.fn.addBack = function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }), t.effects.animateClass = function (e, n, s, a) {
                        var l = t.speed(n, s, a);
                        return this.queue(function () {
                            var n, s = t(this),
                                a = s.attr("class") || "",
                                c = l.children ? s.find("*").addBack() : s;
                            c = c.map(function () {
                                var e = t(this);
                                return {
                                    el: e,
                                    start: i(this)
                                }
                            }), n = function () {
                                t.each(o, function (t, n) {
                                    e[n] && s[n + "Class"](e[n])
                                })
                            }, n(), c = c.map(function () {
                                return this.end = i(this.el[0]), this.diff = r(this.start, this.end), this
                            }), s.attr("class", a), c = c.map(function () {
                                var e = this,
                                    n = t.Deferred(),
                                    i = t.extend({}, l, {
                                        queue: !1,
                                        complete: function () {
                                            n.resolve(e)
                                        }
                                    });
                                return this.el.animate(this.diff, i), n.promise()
                            }), t.when.apply(t, c.get()).done(function () {
                                n(), t.each(arguments, function () {
                                    var e = this.el;
                                    t.each(this.diff, function (t) {
                                        e.css(t, "")
                                    })
                                }), l.complete.call(s[0])
                            })
                        })
                    }, t.fn.extend({
                        addClass: function (e) {
                            return function (n, i, r, o) {
                                return i ? t.effects.animateClass.call(this, {
                                    add: n
                                }, i, r, o) : e.apply(this, arguments)
                            }
                        }(t.fn.addClass),
                        removeClass: function (e) {
                            return function (n, i, r, o) {
                                return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                    remove: n
                                }, i, r, o) : e.apply(this, arguments)
                            }
                        }(t.fn.removeClass),
                        toggleClass: function (e) {
                            return function (i, r, o, s, a) {
                                return "boolean" == typeof r || r === n ? o ? t.effects.animateClass.call(this, r ? {
                                    add: i
                                } : {
                                    remove: i
                                }, o, s, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                    toggle: i
                                }, r, o, s)
                            }
                        }(t.fn.toggleClass),
                        switchClass: function (e, n, i, r, o) {
                            return t.effects.animateClass.call(this, {
                                add: n,
                                remove: e
                            }, i, r, o)
                        }
                    })
                }(),
                function () {
                    function e(e, n, i, r) {
                        return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                            effect: e
                        }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = r || n.complete, e
                    }

                    function r(e) {
                        return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                    }
                    t.extend(t.effects, {
                        version: "1.10.2",
                        save: function (e, t) {
                            for (var n = 0; n < t.length; n++) null !== t[n] && e.data(i + t[n], e[0].style[t[n]])
                        },
                        restore: function (e, t) {
                            var r, o;
                            for (o = 0; o < t.length; o++) null !== t[o] && (r = e.data(i + t[o]), r === n && (r = ""), e.css(t[o], r))
                        },
                        setMode: function (e, t) {
                            return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                        },
                        getBaseline: function (e, t) {
                            var n, i;
                            switch (e[0]) {
                                case "top":
                                    n = 0;
                                    break;
                                case "middle":
                                    n = .5;
                                    break;
                                case "bottom":
                                    n = 1;
                                    break;
                                default:
                                    n = e[0] / t.height
                            }
                            switch (e[1]) {
                                case "left":
                                    i = 0;
                                    break;
                                case "center":
                                    i = .5;
                                    break;
                                case "right":
                                    i = 1;
                                    break;
                                default:
                                    i = e[1] / t.width
                            }
                            return {
                                x: i,
                                y: n
                            }
                        },
                        createWrapper: function (e) {
                            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                            var n = {
                                    width: e.outerWidth(!0),
                                    height: e.outerHeight(!0),
                                    "float": e.css("float")
                                },
                                i = t("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                r = {
                                    width: e.width(),
                                    height: e.height()
                                },
                                o = document.activeElement;
                            try {
                                o.id
                            } catch (s) {
                                o = document.body
                            }
                            return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                                position: "relative"
                            }), e.css({
                                position: "relative"
                            })) : (t.extend(n, {
                                position: e.css("position"),
                                zIndex: e.css("z-index")
                            }), t.each(["top", "left", "bottom", "right"], function (t, i) {
                                n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                            }), e.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })), e.css(r), i.css(n).show()
                        },
                        removeWrapper: function (e) {
                            var n = document.activeElement;
                            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                        },
                        setTransition: function (e, n, i, r) {
                            return r = r || {}, t.each(n, function (t, n) {
                                var o = e.cssUnit(n);
                                o[0] > 0 && (r[n] = o[0] * i + o[1])
                            }), r
                        }
                    }), t.fn.extend({
                        effect: function () {
                            function n(e) {
                                function n() {
                                    t.isFunction(o) && o.call(r[0]), t.isFunction(e) && e()
                                }
                                var r = t(this),
                                    o = i.complete,
                                    a = i.mode;
                                (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : s.call(r[0], i, n)
                            }
                            var i = e.apply(this, arguments),
                                r = i.mode,
                                o = i.queue,
                                s = t.effects.effect[i.effect];
                            return t.fx.off || !s ? r ? this[r](i.duration, i.complete) : this.each(function () {
                                i.complete && i.complete.call(this)
                            }) : o === !1 ? this.each(n) : this.queue(o || "fx", n)
                        },
                        show: function (t) {
                            return function (n) {
                                if (r(n)) return t.apply(this, arguments);
                                var i = e.apply(this, arguments);
                                return i.mode = "show", this.effect.call(this, i)
                            }
                        }(t.fn.show),
                        hide: function (t) {
                            return function (n) {
                                if (r(n)) return t.apply(this, arguments);
                                var i = e.apply(this, arguments);
                                return i.mode = "hide", this.effect.call(this, i)
                            }
                        }(t.fn.hide),
                        toggle: function (t) {
                            return function (n) {
                                if (r(n) || "boolean" == typeof n) return t.apply(this, arguments);
                                var i = e.apply(this, arguments);
                                return i.mode = "toggle", this.effect.call(this, i)
                            }
                        }(t.fn.toggle),
                        cssUnit: function (e) {
                            var n = this.css(e),
                                i = [];
                            return t.each(["em", "px", "%", "pt"], function (e, t) {
                                n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                            }), i
                        }
                    })
                }(),
                function () {
                    var e = {};
                    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
                        e[n] = function (e) {
                            return Math.pow(e, t + 2)
                        }
                    }), t.extend(e, {
                        Sine: function (e) {
                            return 1 - Math.cos(e * Math.PI / 2)
                        },
                        Circ: function (e) {
                            return 1 - Math.sqrt(1 - e * e)
                        },
                        Elastic: function (e) {
                            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function (e) {
                            return e * e * (3 * e - 2)
                        },
                        Bounce: function (e) {
                            for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                        }
                    }), t.each(e, function (e, n) {
                        t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function (e) {
                            return 1 - n(1 - e)
                        }, t.easing["easeInOut" + e] = function (e) {
                            return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                        }
                    })
                }()
        }(e)
    }), _wAMD.define("jquery-ui/effect-highlight", ["jquery", "./effect"], function (e) {
        ! function (e, t) {
            e.effects.effect.highlight = function (t, n) {
                var i = e(this),
                    r = ["backgroundImage", "backgroundColor", "opacity"],
                    o = e.effects.setMode(i, t.mode || "show"),
                    s = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" === o && (s.opacity = 0), e.effects.save(i, r), i.show().css({
                    backgroundImage: "none",
                    backgroundColor: t.color || "#ffff99"
                }).animate(s, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        "hide" === o && i.hide(), e.effects.restore(i, r), n()
                    }
                })
            }
        }(e)
    }), _wAMD.define("jquery-ui/effect-fade", ["jquery", "./effect"], function (e) {
        ! function (e, t) {
            e.effects.effect.fade = function (t, n) {
                var i = e(this),
                    r = e.effects.setMode(i, t.mode || "toggle");
                i.animate({
                    opacity: r
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: n
                })
            }
        }(e)
    }), _wAMD.define("util/effect-slide-custom", ["jquery", "jquery-ui/effect"], function (e) {
        ! function (e, t) {
            e.effects.effect.slide = function (t, n) {
                var i, r = e(this),
                    o = ["position", "top", "bottom", "left", "right", "width", "height"],
                    s = e.effects.setMode(r, t.mode || "show"),
                    a = "show" === s,
                    l = t.direction || "left",
                    c = "up" === l || "down" === l ? "top" : "left",
                    u = "up" === l || "left" === l,
                    h = {};
                e.effects.save(r, o), r.show();
                var d = t.wrapper;
                d ? (d = e(d).show(), /relative|absolute/.test(r.css("position")) || r.css("position", "relative")) : d = e.effects.createWrapper(r), d.css("overflow", "hidden");
                var i = t.distance || ("top" == c ? r.height() ? r.outerHeight(!0) : d.height() : r.width() ? r.outerWidth(!0) : d.width());
                a && r.css(c, u ? isNaN(i) ? "-" + i : -i : i), h[c] = (a ? u ? "+=" : "-=" : u ? "-=" : "+=") + i, r.animate(h, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        "hide" === s && r.hide(), e.effects.restore(r, o), t.wrapper ? (d.css("overflow", ""), "hide" == s && d.hide()) : e.effects.removeWrapper(r), n()
                    }
                })
            }
        }(e)
    }),
    function (e, t) {
        if ("function" == typeof _wAMD.define && _wAMD.define.amd) _wAMD.define("backbone", ["underscore", "jquery", "exports"], function (n, i, r) {
            e.Backbone = t(e, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function (e, t, n, i) {
        var r = e.Backbone,
            o = [],
            s = (o.push, o.slice);
        o.splice;
        t.VERSION = "1.1.2", t.$ = i, t.noConflict = function () {
            return e.Backbone = r, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var a = t.Events = {
                on: function (e, t, n) {
                    if (!c(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function (e, t, i) {
                    if (!c(this, "once", e, [t, i]) || !t) return this;
                    var r = this,
                        o = n.once(function () {
                            r.off(e, o), t.apply(this, arguments)
                        });
                    return o._callback = t, this.on(e, o, i)
                },
                off: function (e, t, i) {
                    var r, o, s, a, l, u, h, d;
                    if (!this._events || !c(this, "off", e, [t, i])) return this;
                    if (!e && !t && !i) return this._events = void 0, this;
                    for (a = e ? [e] : n.keys(this._events), l = 0, u = a.length; u > l; l++)
                        if (e = a[l], s = this._events[e]) {
                            if (this._events[e] = r = [], t || i)
                                for (h = 0, d = s.length; d > h; h++) o = s[h], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[e]
                        } return this
                },
                trigger: function (e) {
                    if (!this._events) return this;
                    var t = s.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        i = this._events.all;
                    return n && u(n, t), i && u(i, arguments), this
                },
                stopListening: function (e, t, i) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var o = !t && !i;
                    i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
                    for (var s in r) e = r[s], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[s];
                    return this
                }
            },
            l = /\s+/,
            c = function (e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (l.test(n)) {
                    for (var o = n.split(l), s = 0, a = o.length; a > s; s++) e[t].apply(e, [o[s]].concat(i));
                    return !1
                }
                return !0
            },
            u = function (e, t) {
                var n, i = -1,
                    r = e.length,
                    o = t[0],
                    s = t[1],
                    a = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s);
                        return;
                    case 3:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s, a);
                        return;
                    default:
                        for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                        return
                }
            },
            h = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(h, function (e, t) {
            a[t] = function (t, i, r) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    s = t._listenId || (t._listenId = n.uniqueId("l"));
                return o[s] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
            }
        }), a.bind = a.on, a.unbind = a.off, n.extend(t, a);
        var d = t.Model = function (e, t) {
            var i = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(d.prototype, a, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function (e) {
                return n.clone(this.attributes)
            },
            sync: function () {
                return t.sync.apply(this, arguments)
            },
            get: function (e) {
                return this.attributes[e]
            },
            escape: function (e) {
                return n.escape(this.get(e))
            },
            has: function (e) {
                return null != this.get(e)
            },
            set: function (e, t, i) {
                var r, o, s, a, l, c, u, h;
                if (null == e) return this;
                if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                s = i.unset, l = i.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), h = this.attributes, u = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (r in o) t = o[r], n.isEqual(h[r], t) || a.push(r), n.isEqual(u[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete h[r] : h[r] = t;
                if (!l) {
                    a.length && (this._pending = i);
                    for (var d = 0, f = a.length; f > d; d++) this.trigger("change:" + a[d], this, h[a[d]], i)
                }
                if (c) return this;
                if (!l)
                    for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function (e) {
                var t = {};
                for (var i in this.attributes) t[i] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function (e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function (e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, i = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                return i
            },
            previous: function (e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function () {
                return n.clone(this._previousAttributes)
            },
            fetch: function (e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    i = e.success;
                return e.success = function (n) {
                    return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                }, W(this, e), this.sync("read", this, e)
            },
            save: function (e, t, i) {
                var r, o, s, a = this.attributes;
                if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                        validate: !0
                    }, i), r && !i.wait) {
                    if (!this.set(r, i)) return !1
                } else if (!this._validate(r, i)) return !1;
                r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    c = i.success;
                return i.success = function (e) {
                    l.attributes = a;
                    var t = l.parse(e, i);
                    return i.wait && (t = n.extend(r || {}, t)), n.isObject(t) && !l.set(t, i) ? !1 : (c && c(l, e, i), void l.trigger("sync", l, e, i))
                }, W(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
            },
            destroy: function (e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    i = e.success,
                    r = function () {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (e.success = function (n) {
                        (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    }, this.isNew()) return e.success(), !1;
                W(this, e);
                var o = this.sync("delete", this, e);
                return e.wait || r(), o
            },
            url: function () {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || I();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function (e, t) {
                return e
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return !this.has(this.idAttribute)
            },
            isValid: function (e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function (e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var i = this.validationError = this.validate(e, t) || null;
                return i ? (this.trigger("invalid", this, i, n.extend(t, {
                    validationError: i
                })), !1) : !0
            }
        });
        var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(f, function (e) {
            d.prototype[e] = function () {
                var t = s.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var p = t.Collection = function (e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            m = {
                add: !0,
                remove: !1
            };
        n.extend(p.prototype, a, {
            model: d,
            initialize: function () {},
            toJSON: function (e) {
                return this.map(function (t) {
                    return t.toJSON(e)
                })
            },
            sync: function () {
                return t.sync.apply(this, arguments)
            },
            add: function (e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, m))
            },
            remove: function (e, t) {
                var i = !n.isArray(e);
                e = i ? [e] : n.clone(e), t || (t = {});
                var r, o, s, a;
                for (r = 0, o = e.length; o > r; r++) a = e[r] = this.get(e[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                return i ? e[0] : e
            },
            set: function (e, t) {
                t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                var i = !n.isArray(e);
                e = i ? e ? [e] : [] : n.clone(e);
                var r, o, s, a, l, c, u, h = t.at,
                    f = this.model,
                    p = this.comparator && null == h && t.sort !== !1,
                    m = n.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    w = {},
                    _ = t.add,
                    b = t.merge,
                    k = t.remove,
                    x = !p && _ && k ? [] : !1;
                for (r = 0, o = e.length; o > r; r++) {
                    if (l = e[r] || {}, s = l instanceof d ? a = l : l[f.prototype.idAttribute || "id"], c = this.get(s)) k && (w[c.cid] = !0), b && (l = l === a ? a.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), p && !u && c.hasChanged(m) && (u = !0)), e[r] = c;
                    else if (_) {
                        if (a = e[r] = this._prepareModel(l, t), !a) continue;
                        v.push(a), this._addReference(a, t)
                    }
                    a = c || a, !x || !a.isNew() && w[a.id] || x.push(a), w[a.id] = !0
                }
                if (k) {
                    for (r = 0, o = this.length; o > r; ++r) w[(a = this.models[r]).cid] || y.push(a);
                    y.length && this.remove(y, t)
                }
                if (v.length || x && x.length)
                    if (p && (u = !0), this.length += v.length, null != h)
                        for (r = 0, o = v.length; o > r; r++) this.models.splice(h + r, 0, v[r]);
                    else {
                        x && (this.models.length = 0);
                        var M = x || v;
                        for (r = 0, o = M.length; o > r; r++) this.models.push(M[r])
                    } if (u && this.sort({
                        silent: !0
                    }), !t.silent) {
                    for (r = 0, o = v.length; o > r; r++)(a = v[r]).trigger("add", a, this, t);
                    (u || x && x.length) && this.trigger("sort", this, t)
                }
                return i ? e[0] : e
            },
            reset: function (e, t) {
                t || (t = {});
                for (var i = 0, r = this.models.length; r > i; i++) this._removeReference(this.models[i], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function (e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function (e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function (e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function (e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function () {
                return s.apply(this.models, arguments)
            },
            get: function (e) {
                return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0
            },
            at: function (e) {
                return this.models[e]
            },
            where: function (e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function (e) {
                return this.where(e, !0)
            },
            sort: function (e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function (e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function (e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    i = this;
                return e.success = function (n) {
                    var r = e.reset ? "reset" : "set";
                    i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                }, W(this, e), this.sync("read", this, e)
            },
            create: function (e, t) {
                if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var i = this,
                    r = t.success;
                return t.success = function (e, n) {
                    t.wait && i.add(e, t), r && r(e, n, t)
                }, e.save(null, t), e
            },
            parse: function (e, t) {
                return e
            },
            clone: function () {
                return new this.constructor(this.models)
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (e, t) {
                if (e instanceof d) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var i = new this.model(e, t);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
            },
            _addReference: function (e, t) {
                this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function (e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (e, t, n, i) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(v, function (e) {
            p.prototype[e] = function () {
                var t = s.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function (e) {
            p.prototype[e] = function (t, i) {
                var r = n.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
                return n[e](this.models, r, i)
            }
        });
        var w = t.View = function (e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            _ = /^(\S+)\s*(.*)$/,
            b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(w.prototype, a, {
            tagName: "div",
            $: function (e) {
                return this.$el.find(e)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function (e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function (e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var i = e[t];
                    if (n.isFunction(i) || (i = this[e[t]]), i) {
                        var r = t.match(_),
                            o = r[1],
                            s = r[2];
                        i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                    }
                }
                return this
            },
            undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function () {
                if (this.el) this.setElement(n.result(this, "el"), !1);
                else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(i, !1)
                }
            }
        }), t.sync = function (e, i, r) {
            var o = x[e];
            n.defaults(r || (r = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var s = {
                type: o,
                dataType: "json"
            };
            if (r.url || (s.url = n.result(i, "url") || I()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                    model: s.data
                } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                s.type = "POST", r.emulateJSON && (s.data._method = o);
                var a = r.beforeSend;
                r.beforeSend = function (e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === s.type || r.emulateJSON || (s.processData = !1), "PATCH" === s.type && k && (s.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = r.xhr = t.ajax(n.extend(s, r));
            return i.trigger("request", i, l, r), l
        };
        var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            x = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function () {
            return t.$.ajax.apply(t.$, arguments)
        };
        var M = t.Router = function (e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            C = /\((.*?)\)/g,
            S = /(\(\?)?:\w+/g,
            R = /\*\w+/g,
            D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(M.prototype, a, {
            initialize: function () {},
            route: function (e, i, r) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var o = this;
                return t.history.route(e, function (n) {
                    var s = o._extractParameters(e, n);
                    o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s)
                }), this
            },
            execute: function (e, t) {
                e && e.apply(this, t)
            },
            navigate: function (e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function (e) {
                return e = e.replace(D, "\\$&").replace(C, "(?:$1)?").replace(S, function (e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(R, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function (e, t) {
                var i = e.exec(t).slice(1);
                return n.map(i, function (e, t) {
                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var T = t.History = function () {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            A = /^[#\/]|\s+$/g,
            E = /^\/+|\/+$/g,
            P = /msie [\w.]+/,
            O = /\/$/,
            F = /#.*$/;
        T.started = !1, n.extend(T.prototype, a, {
            interval: 50,
            atRoot: function () {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function (e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function (e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(O, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(A, "")
            },
            start: function (e) {
                if (T.started) throw new Error("Backbone.history has already been started");
                T.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    r = document.documentMode,
                    o = P.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                if (this.root = ("/" + this.root + "/").replace(E, "/"), o && this._wantsHashChange) {
                    var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var a = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function () {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), T.started = !1
            },
            route: function (e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function (e) {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
            },
            loadUrl: function (e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function (t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            },
            navigate: function (e, t) {
                if (!T.started) return !1;
                t && t !== !0 || (t = {
                    trigger: !!t
                });
                var n = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(F, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function (e, t, n) {
                if (n) {
                    var i = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(i + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new T;
        var j = function (e, t) {
            var i, r = this;
            i = e && n.has(e, "constructor") ? e.constructor : function () {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var o = function () {
                this.constructor = i
            };
            return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        d.extend = p.extend = M.extend = w.extend = T.extend = j;
        var I = function () {
                throw new Error('A "url" property or function must be specified')
            },
            W = function (e, t) {
                var n = t.error;
                t.error = function (i) {
                    n && n(e, i, t), e.trigger("error", e, i, t)
                }
            };
        return t
    }), _wAMD.define("util/platform/elements/PlatformElement", ["backbone"], function (e) {
        var t = e.View.prototype,
            n = e.View.extend({
                initialize: function (e) {
                    t.initialize.apply(this, arguments)
                },
                render: function () {
                    window.inEditor && window.inEditor() && require("editor-site-shared/relay").request("page:navigate")
                },
                remove: function () {
                    t.remove.apply(this, arguments)
                },
                setElement: function () {
                    t.setElement.apply(this, arguments)
                },
                delegateEvents: function () {
                    t.delegateEvents.apply(this, arguments)
                },
                undelegateEvents: function () {
                    t.undelegateEvents.apply(this, arguments)
                }
            });
        return n
    }), _wAMD.define("config", ["require", "exports", "module"], function (e, t, n) {
        return {
            chromeless: !1,
            content_field_js_render: !1,
            defaultPlaceholderText: _W.stl("javascript.editor.config_1"),
            areaDefaultPlaceholderText: {
                phone: _W.stl("javascript.editor.config_2"),
                headline: _W.stl("javascript.editor.config_3"),
                "headline-paragraph": _W.stl("javascript.editor.config_4")
            }
        }
    }), _wAMD.define("util/platform/elements/PlatformElementSettings", ["jquery", "config", "backbone"], function (e, t, n) {
        var i = n.Model.extend({
            save: function (n, i, r) {
                var o = this,
                    s = this.attributes;
                if (null == n || "object" == typeof n ? (s = n, r = i) : (s = {})[n] = i, s && !this.set(s, r)) return !1;
                if (window.inEditor && window.inEditor() && !t.chromeless) return _W.Editor.RPC.PlatformElementInstance.updateSettings(o.page_element_id, o.toJSON());
                var a = new e.Deferred;
                return a.resolve({
                    success: !1,
                    message: "You cannot update settings outside of the editor."
                }), a.promise()
            }
        });
        return i
    }),
    function (e) {
        function t() {
            "placeholder" in document.createElement("input") || e(this).find("input[placeholder]").placeholder()
        }
        var n = function () {
            var t = function () {
                var t = e(".wsite-view-link-full"),
                    n = e(".wsite-view-link-mobile"),
                    i = window.location.href || "";
                i += i.indexOf("?") > -1 ? "&" : "?", t.attr("href", i + "view=full"), n.attr("href", i + "view=mobile")
            };
            t();
            var n = window.History;
            n && n.enabled && History.Adapter.bind(window, "statechange", t)
        };
        e(document).ready(n), e(document).ready(t)
    }(Weebly.jQuery),
    function () {
        var e = window.STYLE_PREFIX || "weebly",
            t = function () {
                for (var t = 0; t < document.styleSheets.length; t++) try {
                    if (document.styleSheets[t].title == e + "-theme-css") {
                        var n = document.styleSheets[t],
                            i = n.cssRules || n.rules;
                        return i && i.length > 0
                    }
                } catch (r) {}
                return !1
            },
            n = function (e) {
                if (t()) e();
                else var n = setInterval(function () {
                    t() && (clearInterval(n), e())
                }, 200)
            };
        window.whenThemeCSSLoaded || (window.whenThemeCSSLoaded = n), window.isThemeCSSLoaded || (window.isThemeCSSLoaded = t)
    }(), _wAMD.define("site/published/general", function () {}),
    function (e) {
        window.blogCommentDisplayForm = function (t, n, i) {
            var r = e("#" + n),
                o = r.data("isReplyFormOpen") || !1,
                s = r.prev(".reply-comment").find("span").first(),
                a = _W.stl("javascript.site.comments_1");
            if (!r.data("locked")) {
                r.data("locked", !0);
                var l = r.data("replyText");
                l || (l = s.html(), r.data("replyText", l));
                var c = e("#" + n + " iframe");
                return c.length || (c = e('<iframe src="' + t + '" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'), e("#" + n + " > div > div").first().append(c)), o ? (s.html(l), r.data("isReplyFormOpen", !1), r.down().hide("slide", {
                    wrapper: r,
                    direction: "up",
                    duration: 1e3,
                    complete: function () {
                        r.data("locked", !1)
                    }
                })) : (s.html(a), r.data("isReplyFormOpen", !0), r.down().show("slide", {
                    wrapper: r,
                    direction: "up",
                    duration: 1e3,
                    complete: function () {
                        r.data("locked", !1)
                    }
                })), !1
            }
        }
    }(Weebly.jQuery), _wAMD.define("site/published/comments", function () {}), _wAMD.define("site/published/formFieldInstructions", ["jquery", "underscore"], function (e, t) {
        var n = !1,
            i = !1,
            r = {
                createFieldInstructions: function (t) {
                    var n = e('<div class="instructions-container">').html(t),
                        i = e('<span class="wsite-instructions-container-caret"/>');
                    return n.append(i), e("body").append(n), n
                },
                setupFieldInstructions: function (t, o) {
                    var s = e(t);
                    if (s.html()) {
                        if (!n) {
                            var a = window.getComputedStyle(document.body);
                            i = "hidden" === a.getPropertyValue("overflow") || "hidden" === a.getPropertyValue("overflow-y") || "hidden" === a.getPropertyValue("overflow-x"), n = !0
                        }
                        null == o && (o = "wsite");
                        var l = s.parents("." + o + "-form-field");
                        l.data("form-instruction", {
                            instructions: r.createFieldInstructions(t.innerHTML)
                        }), r.createHelpIcon(l)
                    }
                },
                createHelpIcon: function (t) {
                    var n = t.data("form-instruction"),
                        r = n.instructions,
                        o = e('<span class="wsite-instructions-help"/>');
                    t.find(".wsite-form-label").append(o);
                    var s = function (n) {
                            "touchstart" === n.type && e.contains(t[0], n.target) || (r.hide(), e(document).off(".formfieldinstructions"))
                        },
                        a = function () {
                            var t = r.find(".wsite-instructions-container-caret"),
                                n = window.getComputedStyle(t[0], ":before").getPropertyValue("border-width");
                            n = parseInt(n, 10) || 10;
                            var a = o.offset(),
                                l = o.outerWidth(),
                                c = o.outerHeight(),
                                u = (r.offset(), r.outerWidth()),
                                h = r.outerHeight(),
                                d = a.top - h - (n + 5),
                                f = l + a.left - 2 * n - n / 2;
                            f + u > document.body.clientWidth && (f = f - u + l + 2 * n + n / 2, 0 > f && (f = 10)), r.removeClass("caret-top caret-bottom");
                            var p;
                            p = i ? 0 > d : d < e(document.body).scrollTop(), p ? (d = d + c + h + (2 * n + 10), r.addClass("caret-top")) : r.addClass("caret-bottom"), r.css({
                                top: d,
                                left: f
                            }).show().find(".wsite-instructions-container-caret").css({
                                left: a.left - f + n / 2
                            }), setTimeout(function () {
                                e(document).on({
                                    "touchmove.formfieldinstructions": s,
                                    "touchstart.formfieldinstructions": s
                                })
                            }, 250)
                        };
                    o.on({
                        mouseover: a,
                        mouseout: s,
                        touchstart: function (e) {
                            e.preventDefault(), a()
                        }
                    })
                }
            };
        return r
    }), _wAMD.define("site/published/form", ["jquery", "site/published/formFieldInstructions"], function (e, t) {
        ! function (n) {
            function i() {
                if (window.location.href.match(/posted=(.*)$/)) {
                    var t = e.parseJSON(decodeURIComponent(window.location.href.match(/posted=(.*)$/)[1].replace(/\+/g, " ")));
                    e("form").each(function (n, i) {
                        var r = e(i);
                        e.each(t, function (t, n) {
                            "object" == typeof n ? e.each(n, function (e, n) {
                                r.find("input").each(function (i, r) {
                                    (r.name.replace(/_u\d*/, "") == t + "[" + e + "]" || r.name == t + "[" + e + "]") && ("checkbox" === r.type ? r.checked = 1 : r.value = n)
                                })
                            }) : r.find("input,textarea,select,button").each(function (e, o) {
                                if (o.name.replace(/_u\d*/, "") == t || o.name == t) {
                                    var s = o.name;
                                    i[s][0] && "radio" === i[s][0].type ? r.find("radio[name=" + s + "]").each(function (e, t) {
                                        t.value == n && (t.checked = !0)
                                    }) : o.value = n
                                }
                            })
                        })
                    })
                }
                if (window.location.href.match(/form-errors=(.*?)&/) && window.location.href.match(/ucfid%22%3A%22(.*?)%/)) {
                    var n = window.location.href.match(/form\-errors=(.*?)&/)[1].split(","),
                        i = window.location.href.match(/ucfid%22%3A%22(.*?)%/)[1],
                        r = e("#form-" + i);
                    e.each(n, function (t, n) {
                        n = decodeURIComponent(n), r.find("input,textarea,select,button").each(function (t, i) {
                            (i.name.replace(/_u\d*/, "") == n || i.name.replace(/.*_u/, "_u") == n || i.name.replace(/\[.*\]$/, "") == n) && e(i).addClass("form-input-error").up("." + l + "-form-field").addClass("form-field-error")
                        })
                    }), e("#" + i + "-form-parent").after("<div>Please correct the highlighted fields</div>")
                }
                if (window.location.href.match(/success\=1/) && window.location.href.match(/ucfid\=(.*)/)) {
                    var i = window.location.href.match(/ucfid\=(.*?)&/)[1],
                        r = e("#form-" + i),
                        o = "Your data was successfully submitted.",
                        s = window.location.href.match(/text=(.*?)&/);
                    s && (o = a(decodeURIComponent(s[1].replace(/\+/g, " ")))), r.html("<div>" + o + "</div>")
                }
            }

            function r() {
                function t(t) {
                    var i = t.origin == location.protocol + location.port + "//" + location.hostname;
                    if (!i) {
                        if (!_W.resellerSite || !_W.configDomain) return;
                        var r = t.origin == location.protocol + location.port + "//" + _W.configDomain;
                        if (!r) return
                    }
                    var o = n.evalJSON(t.data);
                    switch (o.action) {
                        case "finished":
                            var s = o.data.ucfid,
                                a = e("#form-" + s);
                            a.hide();
                            var c = e("#" + s + "-msg");
                            return c.length || (c = e('<div id="' + s + '-msg"/>').insertAfter(a)), c.html(o.data.message), c.effect("highlight", {}, 2e3), void e("body").animate({
                                scrollTop: c.offset().top
                            }, {
                                easing: "easeOutQuart",
                                duration: 2e3
                            });
                        case "redirect":
                            return void(window.location = o.data.location);
                        case "error":
                            var u = o.data["error-fields"],
                                s = o.data.ucfid,
                                a = e("#form-" + s);
                            a.find("input,textarea,select,button").filter(".form-input-error").each(function (t, n) {
                                e(n).removeClass("form-input-error").up("." + l + "-form-field").removeClass("form-field-error")
                            }), e.each(u, function (t, n) {
                                a.find("input,textarea,select,button").each(function (t, i) {
                                    (i.name.replace(/_u\d*/, "") == n || i.name.replace(/.*_u/, "_u") == n || i.name.replace(/\[.*\]$/, "") == n) && e(i).addClass("form-input-error").up("." + l + "-form-field").addClass("form-field-error")
                                })
                            });
                            var c = e("#" + s + "-msg");
                            return c.length || (c = e('<div id="' + s + '-msg"/>').insertAfter(a)), void c.html(o.data.message)
                    }
                }
                e("form").each(function (n, i) {
                    var r = e(i),
                        o = r.attr("action") || "";
                    if (o.match(/formSubmit\.php$/)) {
                        1 != _W.resellerSite ? o = o.replace(/(.*)\/formSubmit\.php$/, window.location.protocol + "//" + window.location.host + "/ajax/apps/formSubmitAjax.php") : (o = o.replace("formSubmit.php", "formSubmitAjax.php"), o.startsWith("http:") && "https:" == window.location.protocol && (o = o.replace("http:", "https:")), e("<input>").attr({
                            type: "hidden",
                            id: "formLocation",
                            name: "formLocation",
                            value: window.location.host
                        }).appendTo(r)), r.attr("action", o), r.attr("accept-charset", "UTF-8");
                        var s = r.attr("id") + "-target-" + Date.now(),
                            a = e('<iframe name="' + s + '"/>').hide().attr("id", s).insertAfter(r),
                            l = a[0];
                        r.attr("target", l.id), window.postMessage || a.on("load", function () {
                            try {
                                var e = (l.contentDocument || l.contentWindow.document).location.href,
                                    n = (l.contentDocument || l.contentWindow.document).body.firstChild.nodeValue;
                                "about:blank" != e && t({
                                    data: n,
                                    source: l.contentWindow
                                })
                            } catch (i) {}
                        })
                    }
                }), window.postMessage && e(window).on("message", function (e) {
                    try {
                        t(e.originalEvent)
                    } catch (n) {}
                })
            }

            function o() {
                e("." + l + "-form-instructions").each(function (e, n) {
                    t.setupFieldInstructions(n, l)
                })
            }

            function s() {
                e("input[name=" + l + "_approved]").val("approved"), e(document).off("mousedown", s).off("keydown", s)
            }

            function a(e) {
                var t = document.createElement("div"),
                    n = document.createTextNode(e);
                return t.appendChild(n), t.innerHTML
            }
            var l = window.STYLE_PREFIX || "weebly";
            e(document).ready(i).ready(o).ready(r).on("mousedown", s).on("keydown", s)
        }(Weebly)
    }),
    function (e) {
        function t() {
            e("#wsite-header-search-form").on("click", "span.wsite-search-button", function (t) {
                e(t.delegateTarget).submit()
            }).on("submit", function (e) {
                return -1 === document.body.className.indexOf("wsite-page-weebly/apps/preview")
            }), e("form.wsite-search-element-form").on("click", "span.wsite-search-element-submit", function (t) {
                e(t.delegateTarget).submit()
            }).on("submit", function () {
                return -1 === document.body.className.indexOf("wsite-page-weebly/apps/preview")
            })
        }
        e(document).ready(t)
    }(Weebly.jQuery), _wAMD.define("site/published/search", function () {}), _wAMD.define("site/published/core", ["polyfill/all", "jquery", "legacy/jquery.animate", "legacy/jquery_utils", "jquery-ui/effect", "jquery-ui/effect-highlight", "jquery-ui/effect-fade", "util/effect-slide-custom", "util/platform/elements/PlatformElement", "util/platform/elements/PlatformElementSettings", "site/published/general", "site/published/comments", "site/published/form", "site/published/search", "underscore", "mustache"], function () {}),
    function (e) {
        if ("object" == typeof exports) module.exports = e(require("underscore"), require("backbone"));
        else if ("function" == typeof define && define.amd) _wAMD.define("backbone-pageable", ["underscore", "backbone"], e);
        else if ("undefined" != typeof _ && "undefined" != typeof Backbone) {
            var t = Backbone.PageableCollection,
                n = e(_, Backbone);
            Backbone.PageableCollection.noConflict = function () {
                return Backbone.PageableCollection = t, n
            }
        }
    }(function (e, t) {
        function n(t, n) {
            if (!e.isNumber(t) || e.isNaN(t) || !e.isFinite(t) || ~~t !== t) throw new TypeError("`" + n + "` must be a finite integer");
            return t
        }

        function i(e) {
            for (var t, n, i, r, o = {}, s = decodeURIComponent, a = e.split("&"), l = 0, c = a.length; c > l; l++) {
                var u = a[l];
                t = u.split("="), n = t[0], i = t[1] || !0, n = s(n), i = s(i), r = o[n], p(r) ? r.push(i) : r ? o[n] = [r, i] : o[n] = i
            }
            return o
        }

        function r(e, t, n) {
            var i = e._events[t];
            if (i && i.length) {
                var r = i[i.length - 1],
                    o = r.callback;
                r.callback = function () {
                    try {
                        o.apply(this, arguments), n()
                    } catch (e) {
                        throw e
                    } finally {
                        r.callback = o
                    }
                }
            } else n()
        }
        var o = e.extend,
            s = e.omit,
            a = e.clone,
            l = e.each,
            c = e.pick,
            u = e.contains,
            h = e.isEmpty,
            d = e.pairs,
            f = e.invert,
            p = e.isArray,
            g = e.isFunction,
            m = e.isObject,
            v = e.keys,
            y = e.isUndefined,
            w = e.result,
            _ = Math.ceil,
            b = Math.floor,
            k = Math.max,
            x = t.Collection.prototype,
            M = /[\s'"]/g,
            C = /[<>\s'"]/g,
            S = t.PageableCollection = t.Collection.extend({
                state: {
                    firstPage: 1,
                    lastPage: null,
                    currentPage: null,
                    pageSize: 25,
                    totalPages: null,
                    totalRecords: null,
                    sortKey: null,
                    order: -1
                },
                mode: "server",
                queryParams: {
                    currentPage: "page",
                    pageSize: "per_page",
                    totalPages: "total_pages",
                    totalRecords: "total_entries",
                    sortKey: "sort_by",
                    order: "order",
                    directions: {
                        "-1": "asc",
                        1: "desc"
                    }
                },
                constructor: function (e, t) {
                    x.constructor.apply(this, arguments), t = t || {};
                    var n = this.mode = t.mode || this.mode || R.mode,
                        i = o({}, R.queryParams, this.queryParams, t.queryParams || {});
                    i.directions = o({}, R.queryParams.directions, this.queryParams.directions, i.directions || {}), this.queryParams = i;
                    var r = this.state = o({}, R.state, this.state, t.state || {});
                    r.currentPage = null == r.currentPage ? r.firstPage : r.currentPage, p(e) || (e = e ? [e] : []), "server" == n || null != r.totalRecords || h(e) || (r.totalRecords = e.length), this.switchMode(n, o({
                        fetch: !1,
                        resetState: !1,
                        models: e
                    }, t));
                    var s = t.comparator;
                    if (r.sortKey && !s && this.setSorting(r.sortKey, r.order, t), "server" != n) {
                        var l = this.fullCollection;
                        s && t.full && (this.comparator = null, l.comparator = s), t.full && l.sort(), e && !h(e) && (this.reset([].slice.call(e), o({
                            silent: !0
                        }, t)), this.getPage(r.currentPage), e.splice.apply(e, [0, e.length].concat(this.models)))
                    }
                    this._initState = a(this.state)
                },
                _makeFullCollection: function (e, n) {
                    var i, r, o, s = ["url", "model", "sync", "comparator"],
                        a = this.constructor.prototype,
                        l = {};
                    for (i = 0, r = s.length; r > i; i++) o = s[i], y(a[o]) || (l[o] = a[o]);
                    var c = new(t.Collection.extend(l))(e, n);
                    for (i = 0, r = s.length; r > i; i++) o = s[i], this[o] !== a[o] && (c[o] = this[o]);
                    return c
                },
                _makeCollectionEventHandler: function (e, t) {
                    return function (n, i, s, c) {
                        var u = e._handlers;
                        l(v(u), function (n) {
                            var i = u[n];
                            e.off(n, i), t.off(n, i)
                        });
                        var h = a(e.state),
                            d = h.firstPage,
                            f = 0 === d ? h.currentPage : h.currentPage - 1,
                            p = h.pageSize,
                            g = f * p,
                            m = g + p;
                        if ("add" == n) {
                            var w, b, k, x, c = c || {};
                            if (s == t) b = t.indexOf(i), b >= g && m > b && (x = e, w = k = b - g);
                            else {
                                w = e.indexOf(i), b = g + w, x = t;
                                var k = y(c.at) ? b : c.at + g
                            }
                            if (c.onRemove || (++h.totalRecords, delete c.onRemove), e.state = e._checkState(h), x) {
                                x.add(i, o({}, c || {}, {
                                    at: k
                                }));
                                var M = w >= p ? i : !y(c.at) && m > k && e.length > p ? e.at(p) : null;
                                M && r(s, n, function () {
                                    e.remove(M, {
                                        onAdd: !0
                                    })
                                })
                            }
                        }
                        if ("remove" == n)
                            if (c.onAdd) delete c.onAdd;
                            else {
                                if (--h.totalRecords) {
                                    var C = h.totalPages = _(h.totalRecords / p);
                                    h.lastPage = 0 === d ? C - 1 : C || d, h.currentPage > C && (h.currentPage = h.lastPage)
                                } else h.totalRecords = null, h.totalPages = null;
                                e.state = e._checkState(h);
                                var S, R = c.index;
                                s == e ? ((S = t.at(m)) && r(e, n, function () {
                                    e.push(S, {
                                        onRemove: !0
                                    })
                                }), t.remove(i)) : R >= g && m > R && ((S = t.at(m - 1)) && r(e, n, function () {
                                    e.push(S, {
                                        onRemove: !0
                                    })
                                }), e.remove(i))
                            } if ("reset" == n)
                            if (c = s, s = i, s == e && null == c.from && null == c.to) {
                                var D = t.models.slice(0, g),
                                    T = t.models.slice(g + e.models.length);
                                t.reset(D.concat(e.models).concat(T), c)
                            } else s == t && ((h.totalRecords = t.models.length) || (h.totalRecords = null, h.totalPages = null), "client" == e.mode && (h.lastPage = h.currentPage = h.firstPage), e.state = e._checkState(h), e.reset(t.models.slice(g, m), o({}, c, {
                                parse: !1
                            })));
                        "sort" == n && (c = s, s = i, s === t && e.reset(t.models.slice(g, m), o({}, c, {
                            parse: !1
                        }))), l(v(u), function (n) {
                            var i = u[n];
                            l([e, t], function (e) {
                                e.on(n, i);
                                var t = e._events[n] || [];
                                t.unshift(t.pop())
                            })
                        })
                    }
                },
                _checkState: function (e) {
                    var t = this.mode,
                        i = this.links,
                        r = e.totalRecords,
                        o = e.pageSize,
                        s = e.currentPage,
                        a = e.firstPage,
                        l = e.totalPages;
                    if (null != r && null != o && null != s && null != a && ("infinite" == t ? i : !0)) {
                        if (r = n(r, "totalRecords"), o = n(o, "pageSize"), s = n(s, "currentPage"), a = n(a, "firstPage"), 1 > o) throw new RangeError("`pageSize` must be >= 1");
                        if (l = e.totalPages = _(r / o), 0 > a || a > 1) throw new RangeError("`firstPage must be 0 or 1`");
                        if (e.lastPage = 0 === a ? k(0, l - 1) : l || a, "infinite" == t) {
                            if (!i[s + ""]) throw new RangeError("No link found for page " + s)
                        } else if (a > s || l > 0 && (a ? s > l : s >= l)) throw new RangeError("`currentPage` must be firstPage <= currentPage " + (a ? ">" : ">=") + " totalPages if " + a + "-based. Got " + s + ".")
                    }
                    return e
                },
                setPageSize: function (e, t) {
                    e = n(e, "pageSize"), t = t || {
                        first: !1
                    };
                    var i = this.state,
                        r = _(i.totalRecords / e),
                        a = r ? k(i.firstPage, b(r * (i.firstPage ? i.currentPage : i.currentPage + 1) / i.totalPages)) : i.firstPage;
                    return i = this.state = this._checkState(o({}, i, {
                        pageSize: e,
                        currentPage: t.first ? i.firstPage : a,
                        totalPages: r
                    })), this.getPage(i.currentPage, s(t, ["first"]))
                },
                switchMode: function (t, n) {
                    if (!u(["server", "client", "infinite"], t)) throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
                    n = n || {
                        fetch: !0,
                        resetState: !0
                    };
                    var i = this.state = n.resetState ? a(this._initState) : this._checkState(o({}, this.state));
                    this.mode = t;
                    var r, c = this,
                        h = this.fullCollection,
                        d = this._handlers = this._handlers || {};
                    if ("server" == t || h) "server" == t && h && (l(v(d), function (e) {
                        r = d[e], c.off(e, r), h.off(e, r)
                    }), delete this._handlers, this._fullComparator = h.comparator, delete this.fullCollection);
                    else {
                        h = this._makeFullCollection(n.models || [], n), h.pageableCollection = this, this.fullCollection = h;
                        var f = this._makeCollectionEventHandler(this, h);
                        l(["add", "remove", "reset", "sort"], function (t) {
                            d[t] = r = e.bind(f, {}, t), c.on(t, r), h.on(t, r)
                        }), h.comparator = this._fullComparator
                    }
                    if ("infinite" == t)
                        for (var p = this.links = {}, g = i.firstPage, m = _(i.totalRecords / i.pageSize), y = 0 === g ? k(0, m - 1) : m || g, w = i.firstPage; y >= w; w++) p[w] = this.url;
                    else this.links && delete this.links;
                    return n.fetch ? this.fetch(s(n, "fetch", "resetState")) : this
                },
                hasPrevious: function () {
                    var e = this.state,
                        t = e.currentPage;
                    return "infinite" != this.mode ? t > e.firstPage : !!this.links[t - 1]
                },
                hasNext: function () {
                    var e = this.state,
                        t = this.state.currentPage;
                    return "infinite" != this.mode ? t < e.lastPage : !!this.links[t + 1]
                },
                getFirstPage: function (e) {
                    return this.getPage("first", e)
                },
                getPreviousPage: function (e) {
                    return this.getPage("prev", e)
                },
                getNextPage: function (e) {
                    return this.getPage("next", e)
                },
                getLastPage: function (e) {
                    return this.getPage("last", e)
                },
                getPage: function (e, t) {
                    var i = this.mode,
                        r = this.fullCollection;
                    t = t || {
                        fetch: !1
                    };
                    var a = this.state,
                        l = a.firstPage,
                        c = a.currentPage,
                        u = a.lastPage,
                        d = a.pageSize,
                        f = e;
                    switch (e) {
                        case "first":
                            f = l;
                            break;
                        case "prev":
                            f = c - 1;
                            break;
                        case "next":
                            f = c + 1;
                            break;
                        case "last":
                            f = u;
                            break;
                        default:
                            f = n(e, "index")
                    }
                    this.state = this._checkState(o({}, a, {
                        currentPage: f
                    })), t.from = c, t.to = f;
                    var p = (0 === l ? f : f - 1) * d,
                        g = r && r.length ? r.models.slice(p, p + d) : [];
                    return "client" != i && ("infinite" != i || h(g)) || t.fetch ? ("infinite" == i && (t.url = this.links[f]), this.fetch(s(t, "fetch"))) : (this.reset(g, s(t, "fetch")), this)
                },
                getPageByOffset: function (e, t) {
                    if (0 > e) throw new RangeError("`offset must be > 0`");
                    e = n(e);
                    var i = b(e / this.state.pageSize);
                    return 0 !== this.state.firstPage && i++, i > this.state.lastPage && (i = this.state.lastPage), this.getPage(i, t)
                },
                sync: function (e, n, i) {
                    var r = this;
                    if ("infinite" == r.mode) {
                        var s = i.success,
                            a = r.state.currentPage;
                        i.success = function (e, t, n) {
                            var l = r.links,
                                c = r.parseLinks(e, o({
                                    xhr: n
                                }, i));
                            c.first && (l[r.state.firstPage] = c.first), c.prev && (l[a - 1] = c.prev), c.next && (l[a + 1] = c.next), s && s(e, t, n)
                        }
                    }
                    return (x.sync || t.sync).call(r, e, n, i)
                },
                parseLinks: function (e, t) {
                    var n = {},
                        i = t.xhr.getResponseHeader("Link");
                    if (i) {
                        var r = ["first", "prev", "next"];
                        l(i.split(","), function (e) {
                            var t = e.split(";"),
                                i = t[0].replace(C, ""),
                                o = t.slice(1);
                            l(o, function (e) {
                                var t = e.split("="),
                                    o = t[0].replace(M, ""),
                                    s = t[1].replace(M, "");
                                "rel" == o && u(r, s) && (n[s] = i)
                            })
                        })
                    }
                    return n
                },
                parse: function (e, t) {
                    var n = this.parseState(e, a(this.queryParams), a(this.state), t);
                    return n && (this.state = this._checkState(o({}, this.state, n))), this.parseRecords(e, t)
                },
                parseState: function (t, n, i, r) {
                    if (t && 2 === t.length && m(t[0]) && p(t[1])) {
                        var o = a(i),
                            c = t[0];
                        return l(d(s(n, "directions")), function (t) {
                            var n = t[0],
                                i = t[1],
                                r = c[i];
                            y(r) || e.isNull(r) || (o[n] = c[i])
                        }), c.order && (o.order = 1 * f(n.directions)[c.order]), o
                    }
                },
                parseRecords: function (e, t) {
                    return e && 2 === e.length && m(e[0]) && p(e[1]) ? e[1] : e
                },
                fetch: function (e) {
                    e = e || {};
                    var t = this._checkState(this.state),
                        n = this.mode;
                    "infinite" != n || e.url || (e.url = this.links[t.currentPage]);
                    var r = e.data || {},
                        l = w(e, "url") || w(this, "url") || "",
                        u = l.indexOf("?"); - 1 != u && (o(r, i(l.slice(u + 1))), l = l.slice(0, u)), e.url = l, e.data = r;
                    var h, f, p, m, _ = "client" == this.mode ? c(this.queryParams, "sortKey", "order") : s(c(this.queryParams, v(R.queryParams)), "directions"),
                        b = d(_),
                        k = a(this);
                    for (h = 0; h < b.length; h++) f = b[h], p = f[0], m = f[1], m = g(m) ? m.call(k) : m, null != t[p] && null != m && (r[m] = t[p]);
                    t.sortKey && t.order ? r[_.order] = this.queryParams.directions[t.order + ""] : t.sortKey || delete r[_.order];
                    var M = d(s(this.queryParams, v(R.queryParams)));
                    for (h = 0; h < M.length; h++) f = M[h], m = f[1], m = g(m) ? m.call(k) : m, null != m && (r[f[0]] = m);
                    if ("server" != n) {
                        var C = this,
                            S = this.fullCollection,
                            D = e.success;
                        return e.success = function (t, i, r) {
                            r = r || {}, y(e.silent) ? delete r.silent : r.silent = e.silent;
                            var s = t.models;
                            "client" == n ? S.reset(s, r) : (S.add(s, o({
                                at: S.length
                            }, o(r, {
                                parse: !1
                            }))), C.trigger("reset", C, r)), D && D(t, i, r)
                        }, x.fetch.call(this, o({}, e, {
                            silent: !0
                        }))
                    }
                    return x.fetch.call(this, e)
                },
                _makeComparator: function (e, t, n) {
                    var i = this.state;
                    return e = e || i.sortKey, t = t || i.order, e && t ? (n || (n = function (e, t) {
                        return e.get(t)
                    }), function (i, r) {
                        var o, s = n(i, e),
                            a = n(r, e);
                        return 1 === t && (o = s, s = a, a = o), s === a ? 0 : a > s ? -1 : 1
                    }) : void 0
                },
                setSorting: function (t, n, i) {
                    var r = this.state;
                    r.sortKey = t, r.order = n = n || r.order;
                    var s = this.fullCollection,
                        a = !1,
                        l = !1;
                    t || (a = l = !0);
                    var c = this.mode;
                    i = o({
                        side: "client" == c ? c : "server",
                        full: !0
                    }, i);
                    var u = this._makeComparator(t, n, i.sortValue),
                        h = i.full,
                        d = i.side;
                    return "client" == d ? h ? (s && (s.comparator = u), a = !0) : (this.comparator = u, l = !0) : "server" != d || h || (this.comparator = u), a && (this.comparator = null), l && s && (s.comparator = null), this.fetchOptions = e.extend({}, this.fetchOptions, {
                        sort: [{
                            property: t,
                            direction: n > 0 ? "ASC" : "DESC"
                        }]
                    }), this
                }
            }),
            R = S.prototype;
        return S
    }),
    function (e) {
        "object" == typeof exports ? module.exports = e(require("backbone"), require("underscore")) : "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone-validation", ["backbone", "underscore"], e)
    }(function (e, t) {
        return e.Validation = function (t) {
            var n = {
                    forceUpdate: !1,
                    selector: "name",
                    labelFormatter: "sentenceCase",
                    valid: Function.prototype,
                    invalid: Function.prototype
                },
                i = {
                    formatLabel: function (e, t) {
                        return c[n.labelFormatter](e, t)
                    },
                    format: function () {
                        var e = Array.prototype.slice.call(arguments),
                            t = e.shift();
                        return t.replace(/\{(\d+)\}/g, function (t, n) {
                            return "undefined" != typeof e[n] ? e[n] : t
                        })
                    }
                },
                r = function (n, i, o) {
                    return i = i || {}, o = o || "", t.each(n, function (t, s) {
                        n.hasOwnProperty(s) && (t && "object" == typeof t && !(t instanceof Array || t instanceof Date || t instanceof RegExp || t instanceof e.Model || t instanceof e.Collection) ? r(t, i, o + s + ".") : i[o + s] = t)
                    }), i
                },
                o = function () {
                    var e = function (e) {
                            return t.reduce(t.keys(t.result(e, "validation") || {}), function (e, t) {
                                return e[t] = void 0, e
                            }, {})
                        },
                        o = function (e, n) {
                            var i = e.validation ? t.result(e, "validation")[n] || {} : {};
                            return (t.isFunction(i) || t.isString(i)) && (i = {
                                fn: i
                            }), t.isArray(i) || (i = [i]), t.reduce(i, function (e, n) {
                                return t.each(t.without(t.keys(n), "msg"), function (t) {
                                    e.push({
                                        fn: u[t],
                                        val: n[t],
                                        msg: n.msg
                                    })
                                }), e
                            }, [])
                        },
                        a = function (e, n, r, s) {
                            return t.reduce(o(e, n), function (o, a) {
                                var l = t.extend({}, i, u),
                                    c = a.fn.call(l, r, n, a.val, e, s);
                                return c === !1 || o === !1 ? !1 : c && !o ? t.result(a, "msg") || c : o
                            }, "")
                        },
                        l = function (e, n) {
                            var i, o = {},
                                s = !0,
                                l = t.clone(n),
                                c = r(n);
                            return t.each(c, function (t, n) {
                                i = a(e, n, t, l), i && (o[n] = i, s = !1)
                            }), {
                                invalidAttrs: o,
                                isValid: s
                            }
                        },
                        c = function (n, i) {
                            return {
                                preValidate: function (e, n) {
                                    var i, r = this,
                                        o = {};
                                    return t.isObject(e) ? (t.each(e, function (e, t) {
                                        i = r.preValidate(t, e), i && (o[t] = i)
                                    }), t.isEmpty(o) ? void 0 : o) : a(this, e, n, t.extend({}, this.attributes))
                                },
                                isValid: function (e) {
                                    var n = r(this.attributes);
                                    return t.isString(e) ? !a(this, e, n[e], t.extend({}, this.attributes)) : t.isArray(e) ? t.reduce(e, function (e, i) {
                                        return e && !a(this, i, n[i], t.extend({}, this.attributes))
                                    }, !0, this) : (e === !0 && this.validate(), this.validation ? this._isValid : !0)
                                },
                                validate: function (o, s) {
                                    var a = this,
                                        c = !o,
                                        u = t.extend({}, i, s),
                                        h = e(a),
                                        d = t.extend({}, h, a.attributes, o),
                                        f = r(o || d),
                                        p = l(a, d);
                                    return a._isValid = p.isValid, t.each(h, function (e, t) {
                                        var i = p.invalidAttrs.hasOwnProperty(t);
                                        i || u.valid(n, t, u.selector)
                                    }), t.each(h, function (e, t) {
                                        var i = p.invalidAttrs.hasOwnProperty(t),
                                            r = f.hasOwnProperty(t);
                                        i && (r || c) && u.invalid(n, t, p.invalidAttrs[t], u.selector)
                                    }), t.defer(function () {
                                        a.trigger("validated", a._isValid, a, p.invalidAttrs), a.trigger("validated:" + (a._isValid ? "valid" : "invalid"), a, p.invalidAttrs)
                                    }), !u.forceUpdate && t.intersection(t.keys(p.invalidAttrs), t.keys(f)).length > 0 ? p.invalidAttrs : void 0
                                }
                            }
                        },
                        h = function (e, n, i) {
                            t.extend(n, c(e, i))
                        },
                        d = function (e) {
                            delete e.validate, delete e.preValidate, delete e.isValid
                        },
                        f = function (e) {
                            h(this.view, e, this.options)
                        },
                        p = function (e) {
                            d(e)
                        };
                    return {
                        version: "0.9.1",
                        configure: function (e) {
                            t.extend(n, e)
                        },
                        bind: function (e, i) {
                            i = t.extend({}, n, s, i);
                            var r = i.model || e.model,
                                o = i.collection || e.collection;
                            if ("undefined" == typeof r && "undefined" == typeof o) throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                            r ? h(e, r, i) : o && (o.each(function (t) {
                                h(e, t, i)
                            }), o.bind("add", f, {
                                view: e,
                                options: i
                            }), o.bind("remove", p))
                        },
                        unbind: function (e, n) {
                            n = t.extend({}, n);
                            var i = n.model || e.model,
                                r = n.collection || e.collection;
                            i ? d(i) : r && (r.each(function (e) {
                                d(e)
                            }), r.unbind("add", f), r.unbind("remove", p))
                        },
                        mixin: c(null, n)
                    }
                }(),
                s = o.callbacks = {
                    valid: function (e, t, n) {
                        e.$("[" + n + '~="' + t + '"]').removeClass("invalid").removeAttr("data-error")
                    },
                    invalid: function (e, t, n, i) {
                        e.$("[" + i + '~="' + t + '"]').addClass("invalid").attr("data-error", n)
                    }
                },
                a = o.patterns = {
                    digits: /^\d+$/,
                    number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
                    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                    url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
                    domain: /^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z]{2,6}$/
                },
                l = o.messages = {
                    required: "{0} is required",
                    acceptance: "{0} must be accepted",
                    min: "{0} must be greater than or equal to {1}",
                    max: "{0} must be less than or equal to {1}",
                    range: "{0} must be between {1} and {2}",
                    length: "{0} must be {1} characters",
                    minLength: "{0} must be at least {1} characters",
                    maxLength: "{0} must be at most {1} characters",
                    rangeLength: "{0} must be between {1} and {2} characters",
                    oneOf: "{0} must be one of: {1}",
                    equalTo: "{0} must be the same as {1}",
                    digits: "{0} must only contain digits",
                    number: "{0} must be a number",
                    "int": "{0} must be a whole number",
                    email: "{0} must be a valid email",
                    url: "{0} must be a valid url",
                    domain: "{0} must be a valid domain",
                    inlinePattern: "{0} is invalid"
                },
                c = o.labelFormatters = {
                    none: function (e) {
                        return e
                    },
                    sentenceCase: function (e) {
                        return e.replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
                            return 0 === t ? e.toUpperCase() : " " + e.toLowerCase()
                        }).replace(/_/g, " ")
                    },
                    label: function (e, t) {
                        return t.labels && t.labels[e] || c.sentenceCase(e, t)
                    }
                },
                u = o.validators = function () {
                    var e = String.prototype.trim ? function (e) {
                            return null === e ? "" : String.prototype.trim.call(e)
                        } : function (e) {
                            var t = /^\s+/,
                                n = /\s+$/;
                            return null === e ? "" : e.toString().replace(t, "").replace(n, "")
                        },
                        n = function (e) {
                            return t.isNumber(e) || t.isString(e) && e.match(a.number)
                        },
                        i = function (n) {
                            return !(t.isNull(n) || t.isUndefined(n) || t.isString(n) && "" === e(n) || t.isArray(n) && t.isEmpty(n))
                        };
                    return {
                        fn: function (e, n, i, r, o) {
                            return t.isString(i) && (i = r[i]), i.call(r, e, n, o)
                        },
                        required: function (e, n, r, o, s) {
                            var a = t.isFunction(r) ? r.call(o, e, n, s) : r;
                            return a || i(e) ? a && !i(e) ? this.format(l.required, this.formatLabel(n, o)) : void 0 : !1
                        },
                        acceptance: function (e, n, i, r) {
                            return "true" === e || t.isBoolean(e) && e !== !1 ? void 0 : this.format(l.acceptance, this.formatLabel(n, r))
                        },
                        min: function (e, t, i, r) {
                            return !n(e) || i > e ? this.format(l.min, this.formatLabel(t, r), i) : void 0
                        },
                        max: function (e, t, i, r) {
                            return !n(e) || e > i ? this.format(l.max, this.formatLabel(t, r), i) : void 0
                        },
                        range: function (e, t, i, r) {
                            return !n(e) || e < i[0] || e > i[1] ? this.format(l.range, this.formatLabel(t, r), i[0], i[1]) : void 0
                        },
                        length: function (e, n, i, r) {
                            return t.isString(e) && e.length === i ? void 0 : this.format(l.length, this.formatLabel(n, r), i)
                        },
                        minLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length < i ? this.format(l.minLength, this.formatLabel(n, r), i) : void 0
                        },
                        maxLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length > i ? this.format(l.maxLength, this.formatLabel(n, r), i) : void 0
                        },
                        rangeLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length < i[0] || e.length > i[1] ? this.format(l.rangeLength, this.formatLabel(n, r), i[0], i[1]) : void 0
                        },
                        oneOf: function (e, n, i, r) {
                            return t.include(i, e) ? void 0 : this.format(l.oneOf, this.formatLabel(n, r), i.join(", "))
                        },
                        equalTo: function (e, t, n, i, r) {
                            return e !== r[n] ? this.format(l.equalTo, this.formatLabel(t, i), this.formatLabel(n, i)) : void 0
                        },
                        pattern: function (e, t, n, r) {
                            return i(e) && e.toString().match(a[n] || n) ? void 0 : this.format(l[n] || l.inlinePattern, this.formatLabel(t, r), n)
                        },
                        url: function (e, t, n, i) {
                            return a.url.test(e) ? void 0 : this.format(l.url, this.formatLabel(t, i))
                        },
                        domain: function (e, t, n, i) {
                            return a.domain.test(e) ? void 0 : this.format(l.domain, this.formatLabel(t, i))
                        },
                        email: function (e, t, n, i) {
                            return a.email.test(e) ? void 0 : this.format(l.email, this.formatLabel(t, i))
                        },
                        number: function (e, t, n, i) {
                            return isNaN(parseFloat(e)) || !isFinite(e) ? this.format(l.number, this.formatLabel(t, i)) : void 0
                        },
                        "int": function (e, t, n, i) {
                            return e % 1 !== 0 ? this.format(l["int"], this.formatLabel(t, i)) : void 0
                        }
                    }
                }();
            return t.each(u, function (e, n) {
                u[n] = t.bind(u[n], t.extend({}, i, u))
            }), o
        }(t), e.Validation
    }),
    function (e, t) {
        "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("backbone-relational", ["exports", "backbone", "underscore"], t) : "undefined" != typeof exports ? t(exports, require("backbone"), require("underscore")) : t(e, e.Backbone, e._)
    }(this, function (e, t, n) {
        t.Relational = {
            showWarnings: !0
        }, t.Semaphore = {
            _class: "Backbone.Semaphore",
            _permitsAvailable: null,
            _permitsUsed: 0,
            acquire: function () {
                if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable) throw new Error("Max permits acquired");
                this._permitsUsed++
            },
            release: function () {
                if (0 === this._permitsUsed) throw new Error("All permits released");
                this._permitsUsed--
            },
            isLocked: function () {
                return this._permitsUsed > 0
            },
            setAvailablePermits: function (e) {
                if (this._permitsUsed > e) throw new Error("Available permits cannot be less than used permits");
                this._permitsAvailable = e
            }
        }, t.BlockingQueue = function () {
            this._queue = []
        }, n.extend(t.BlockingQueue.prototype, t.Semaphore, {
            _class: "Backbone.BlockingQueue",
            _queue: null,
            add: function (e) {
                this.isBlocked() ? this._queue.push(e) : e()
            },
            process: function () {
                var e = this._queue;
                for (this._queue = []; e && e.length;) e.shift()()
            },
            block: function () {
                this.acquire()
            },
            unblock: function () {
                this.release(), this.isBlocked() || this.process()
            },
            isBlocked: function () {
                return this.isLocked()
            }
        }), t.Relational.eventQueue = new t.BlockingQueue, t.Store = function () {
            this._collections = [], this._reverseRelations = [], this._orphanRelations = [], this._subModels = [], this._modelScopes = [e]
        }, n.extend(t.Store.prototype, t.Events, {
            _class: "Backbone.Store",
            initializeRelation: function (e, i, r) {
                var o = n.isString(i.type) ? t[i.type] || this.getObjectByName(i.type) : i.type;
                o && o.prototype instanceof t.Relation ? new o(e, i, r) : t.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; missing or invalid relation type!", i)
            },
            addModelScope: function (e) {
                this._modelScopes.push(e)
            },
            removeModelScope: function (e) {
                this._modelScopes = n.without(this._modelScopes, e)
            },
            addSubModels: function (e, t) {
                this._subModels.push({
                    superModelType: t,
                    subModels: e
                })
            },
            setupSuperModel: function (e) {
                n.find(this._subModels, function (t) {
                    return n.each(t.subModels || [], function (n, i) {
                        var r = this.getObjectByName(n);
                        return e === r ? (t.superModelType._subModels[i] = e, e._superModel = t.superModelType, e._subModelTypeValue = i, e._subModelTypeAttribute = t.superModelType.prototype.subModelTypeAttribute, !0) : void 0
                    }, this)
                }, this)
            },
            addReverseRelation: function (e) {
                var t = n.any(this._reverseRelations, function (t) {
                    return n.all(e || [], function (e, n) {
                        return e === t[n]
                    })
                });
                !t && e.model && e.type && (this._reverseRelations.push(e), this._addRelation(e.model, e), this.retroFitRelation(e))
            },
            addOrphanRelation: function (e) {
                var t = n.any(this._orphanRelations, function (t) {
                    return n.all(e || [], function (e, n) {
                        return e === t[n]
                    })
                });
                !t && e.model && e.type && this._orphanRelations.push(e)
            },
            processOrphanRelations: function () {
                n.each(this._orphanRelations.slice(0), function (e) {
                    var i = t.Relational.store.getObjectByName(e.relatedModel);
                    i && (this.initializeRelation(null, e), this._orphanRelations = n.without(this._orphanRelations, e))
                }, this)
            },
            _addRelation: function (e, t) {
                e.prototype.relations || (e.prototype.relations = []), e.prototype.relations.push(t), n.each(e._subModels || [], function (e) {
                    this._addRelation(e, t)
                }, this)
            },
            retroFitRelation: function (e) {
                var t = this.getCollection(e.model, !1);
                t && t.each(function (t) {
                    t instanceof e.model && new e.type(t, e)
                }, this)
            },
            getCollection: function (e, i) {
                e instanceof t.RelationalModel && (e = e.constructor);
                for (var r = e; r._superModel;) r = r._superModel;
                var o = n.find(this._collections, function (e) {
                    return e.model === r
                });
                return o || i === !1 || (o = this._createCollection(r)), o
            },
            getObjectByName: function (e) {
                var t = e.split("."),
                    i = null;
                return n.find(this._modelScopes, function (e) {
                    return i = n.reduce(t || [], function (e, t) {
                        return e ? e[t] : void 0
                    }, e), i && i !== e ? !0 : void 0
                }, this), i
            },
            _createCollection: function (e) {
                var n;
                return e instanceof t.RelationalModel && (e = e.constructor), e.prototype instanceof t.RelationalModel && (n = new t.Collection, n.model = e, this._collections.push(n)), n
            },
            resolveIdForItem: function (e, i) {
                var r = n.isString(i) || n.isNumber(i) ? i : null;
                return null === r && (i instanceof t.RelationalModel ? r = i.id : n.isObject(i) && (r = e.prototype._getNewId(i))), r || 0 === r || (r = null), r
            },
            find: function (e, t) {
                var n = this.resolveIdForItem(e, t),
                    i = this.getCollection(e);
                if (i) {
                    var r = i.get(n);
                    if (r instanceof e) return r
                }
                return null
            },
            register: function (e) {
                var t = this.getCollection(e);
                if (t) {
                    var n = e.collection;
                    t.add(e), e.collection = n
                }
            },
            checkId: function (e, n) {
                var i = this.getCollection(e),
                    r = i && i.get(n);
                if (r && e !== r) throw t.Relational.showWarnings && "undefined" != typeof console && console.warn("Duplicate id! Old RelationalModel=%o, new RelationalModel=%o", r, e), new Error("Cannot instantiate more than one Backbone.RelationalModel with the same id per type!")
            },
            update: function (e) {
                var t = this.getCollection(e);
                t.contains(e) || this.register(e), t._onModelEvent("change:" + e.idAttribute, e, t), e.trigger("relational:change:id", e, t)
            },
            unregister: function (e) {
                var i, r;
                e instanceof t.Model ? (i = this.getCollection(e), r = [e]) : e instanceof t.Collection ? (i = this.getCollection(e.model), r = n.clone(e.models)) : (i = this.getCollection(e), r = n.clone(i.models)), n.each(r, function (e) {
                    this.stopListening(e), n.invoke(e.getRelations(), "stopListening")
                }, this), n.contains(this._collections, e) ? i.reset([]) : n.each(r, function (e) {
                    i.get(e) ? i.remove(e) : i.trigger("relational:remove", e, i)
                }, this)
            },
            reset: function () {
                this.stopListening(), n.each(this._collections, function (e) {
                    this.unregister(e)
                }, this), this._collections = [], this._subModels = [], this._modelScopes = [e]
            }
        }), t.Relational.store = new t.Store, t.Relation = function (e, i, r) {
            if (this.instance = e, i = n.isObject(i) ? i : {}, this.reverseRelation = n.defaults(i.reverseRelation || {}, this.options.reverseRelation), this.options = n.defaults(i, this.options, t.Relation.prototype.options), this.reverseRelation.type = n.isString(this.reverseRelation.type) ? t[this.reverseRelation.type] || t.Relational.store.getObjectByName(this.reverseRelation.type) : this.reverseRelation.type, this.key = this.options.key, this.keySource = this.options.keySource || this.key, this.keyDestination = this.options.keyDestination || this.keySource || this.key, this.model = this.options.model || this.instance.constructor, this.relatedModel = this.options.relatedModel, !n.isFunction(this.relatedModel) || this.relatedModel.prototype instanceof t.RelationalModel || (this.relatedModel = n.result(this, "relatedModel")), n.isString(this.relatedModel) && (this.relatedModel = t.Relational.store.getObjectByName(this.relatedModel)), this.checkPreconditions() && (!this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key && t.Relational.store.addReverseRelation(n.defaults({
                    isAutoRelation: !0,
                    model: this.relatedModel,
                    relatedModel: this.model,
                    reverseRelation: this.options
                }, this.reverseRelation)), e)) {
                var o = this.keySource;
                o !== this.key && "object" == typeof this.instance.get(this.key) && (o = this.key), this.setKeyContents(this.instance.get(o)), this.relatedCollection = t.Relational.store.getCollection(this.relatedModel), this.keySource !== this.key && delete this.instance.attributes[this.keySource], this.instance._relations[this.key] = this, this.initialize(r), this.options.autoFetch && this.instance.fetchRelated(this.key, n.isObject(this.options.autoFetch) ? this.options.autoFetch : {}), this.listenTo(this.instance, "destroy", this.destroy).listenTo(this.relatedCollection, "relational:add relational:change:id", this.tryAddRelated).listenTo(this.relatedCollection, "relational:remove", this.removeRelated)
            }
        }, t.Relation.extend = t.Model.extend, n.extend(t.Relation.prototype, t.Events, t.Semaphore, {
            _class: "Backbone.Relation",
            options: {
                createModels: !0,
                includeInJSON: !0,
                isAutoRelation: !1,
                autoFetch: !1,
                parse: !1
            },
            instance: null,
            key: null,
            keyContents: null,
            relatedModel: null,
            relatedCollection: null,
            reverseRelation: null,
            related: null,
            checkPreconditions: function () {
                var e = this.instance,
                    i = this.key,
                    r = this.model,
                    o = this.relatedModel,
                    s = t.Relational.showWarnings && "undefined" != typeof console;
                if (!r || !i || !o) return s && console.warn("Relation=%o: missing model, key or relatedModel (%o, %o, %o).", this, r, i, o), !1;
                if (!(r.prototype instanceof t.RelationalModel)) return s && console.warn("Relation=%o: model does not inherit from Backbone.RelationalModel (%o).", this, e), !1;
                if (!(o.prototype instanceof t.RelationalModel)) return s && console.warn("Relation=%o: relatedModel does not inherit from Backbone.RelationalModel (%o).", this, o), !1;
                if (this instanceof t.HasMany && this.reverseRelation.type === t.HasMany) return s && console.warn("Relation=%o: relation is a HasMany, and the reverseRelation is HasMany as well.", this), !1;
                if (e && n.keys(e._relations).length) {
                    var a = n.find(e._relations, function (e) {
                        return e.key === i
                    }, this);
                    if (a) return s && console.warn("Cannot create relation=%o on %o for model=%o: already taken by relation=%o.", this, i, e, a), !1
                }
                return !0
            },
            setRelated: function (e) {
                this.related = e, this.instance.attributes[this.key] = e
            },
            _isReverseRelation: function (e) {
                return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key
            },
            getReverseRelations: function (e) {
                var t = [],
                    i = n.isUndefined(e) ? this.related && (this.related.models || [this.related]) : [e];
                return n.each(i || [], function (e) {
                    n.each(e.getRelations() || [], function (e) {
                        this._isReverseRelation(e) && t.push(e)
                    }, this)
                }, this), t
            },
            destroy: function () {
                this.stopListening(), this instanceof t.HasOne ? this.setRelated(null) : this instanceof t.HasMany && this.setRelated(this._prepareCollection()), n.each(this.getReverseRelations(), function (e) {
                    e.removeRelated(this.instance)
                }, this)
            }
        }), t.HasOne = t.Relation.extend({
            _class: "Backbone.HasOne",
            options: {
                reverseRelation: {
                    type: "HasMany"
                }
            },
            initialize: function (e) {
                this.listenTo(this.instance, "relational:change:" + this.key, this.onChange);
                var t = this.findRelated(e);
                this.setRelated(t), n.each(this.getReverseRelations(), function (t) {
                    t.addRelated(this.instance, e)
                }, this)
            },
            findRelated: function (e) {
                var t = null;
                if (e = n.defaults({
                        parse: this.options.parse
                    }, e), this.keyContents instanceof this.relatedModel) t = this.keyContents;
                else if (this.keyContents || 0 === this.keyContents) {
                    var i = n.defaults({
                        create: this.options.createModels
                    }, e);
                    t = this.relatedModel.findOrCreate(this.keyContents, i)
                }
                return t && (this.keyId = null), t
            },
            setKeyContents: function (e) {
                this.keyContents = e, this.keyId = t.Relational.store.resolveIdForItem(this.relatedModel, this.keyContents)
            },
            onChange: function (e, i, r) {
                if (!this.isLocked()) {
                    this.acquire(), r = r ? n.clone(r) : {};
                    var o = n.isUndefined(r.__related),
                        s = o ? this.related : r.__related;
                    if (o) {
                        this.setKeyContents(i);
                        var a = this.findRelated(r);
                        this.setRelated(a)
                    }
                    if (s && this.related !== s && n.each(this.getReverseRelations(s), function (e) {
                            e.removeRelated(this.instance, null, r)
                        }, this), n.each(this.getReverseRelations(), function (e) {
                            e.addRelated(this.instance, r)
                        }, this), !r.silent && this.related !== s) {
                        var l = this;
                        this.changed = !0, t.Relational.eventQueue.add(function () {
                            l.instance.trigger("change:" + l.key, l.instance, l.related, r, !0), l.changed = !1
                        })
                    }
                    this.release()
                }
            },
            tryAddRelated: function (e, t, n) {
                !this.keyId && 0 !== this.keyId || e.id !== this.keyId || (this.addRelated(e, n), this.keyId = null)
            },
            addRelated: function (e, t) {
                var i = this;
                e.queue(function () {
                    if (e !== i.related) {
                        var r = i.related || null;
                        i.setRelated(e), i.onChange(i.instance, e, n.defaults({
                            __related: r
                        }, t))
                    }
                })
            },
            removeRelated: function (e, t, i) {
                if (this.related && e === this.related) {
                    var r = this.related || null;
                    this.setRelated(null), this.onChange(this.instance, e, n.defaults({
                        __related: r
                    }, i))
                }
            }
        }), t.HasMany = t.Relation.extend({
            _class: "Backbone.HasMany",
            collectionType: null,
            options: {
                reverseRelation: {
                    type: "HasOne"
                },
                collectionType: t.Collection,
                collectionKey: !0,
                collectionOptions: {}
            },
            initialize: function (e) {
                if (this.listenTo(this.instance, "relational:change:" + this.key, this.onChange), this.collectionType = this.options.collectionType, !n.isFunction(this.collectionType) || this.collectionType === t.Collection || this.collectionType.prototype instanceof t.Collection || (this.collectionType = n.result(this, "collectionType")), n.isString(this.collectionType)) {
                    var i = this.collectionType;
                    this.collectionType = t.Relational.store.getObjectByName(this.collectionType)
                }
                if (this.collectionType || (i && t.Relational.showWarnings && "undefined" != typeof console && console.warn("`collectionType` of " + i + " not found, using Backbone.Collection in its place."), this.collectionType = t.Collection), this.collectionType !== t.Collection && !(this.collectionType.prototype instanceof t.Collection)) throw new Error("`collectionType` must inherit from Backbone.Collection");
                var r = this.findRelated(e);
                this.setRelated(r)
            },
            _prepareCollection: function (e) {
                if (this.related && this.stopListening(this.related), !(e && e instanceof t.Collection)) {
                    var i = n.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance) : this.options.collectionOptions;
                    e = new this.collectionType(null, i)
                }
                if (e.model = this.relatedModel, this.options.collectionKey) {
                    var r = this.options.collectionKey === !0 ? this.options.reverseRelation.key : this.options.collectionKey;
                    e[r] && e[r] !== this.instance ? t.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; collectionKey=%s already exists on collection=%o", this, r, this.options.collectionKey) : r && (e[r] = this.instance)
                }
                return this.listenTo(e, "relational:add", this.handleAddition).listenTo(e, "relational:remove", this.handleRemoval).listenTo(e, "relational:reset", this.handleReset), e
            },
            findRelated: function (e) {
                var i = null;
                if (e = n.defaults({
                        parse: this.options.parse
                    }, e), this.keyContents instanceof t.Collection) this._prepareCollection(this.keyContents), i = this.keyContents;
                else {
                    var r = [];
                    n.each(this.keyContents, function (t) {
                        if (t instanceof this.relatedModel) var i = t;
                        else i = this.relatedModel.findOrCreate(t, n.extend({
                            merge: !0
                        }, e, {
                            create: this.options.createModels
                        }));
                        i && r.push(i)
                    }, this), i = this.related instanceof t.Collection ? this.related : this._prepareCollection(), i.set(r, n.defaults({
                        merge: !1,
                        parse: !1
                    }, e))
                }
                return this.keyIds = n.difference(this.keyIds, n.pluck(i.models, "id")), i
            },
            setKeyContents: function (e) {
                this.keyContents = e instanceof t.Collection ? e : null, this.keyIds = [], this.keyContents || !e && 0 !== e || (this.keyContents = n.isArray(e) ? e : [e], n.each(this.keyContents, function (e) {
                    var n = t.Relational.store.resolveIdForItem(this.relatedModel, e);
                    (n || 0 === n) && this.keyIds.push(n)
                }, this))
            },
            onChange: function (e, i, r) {
                r = r ? n.clone(r) : {}, this.setKeyContents(i), this.changed = !1;
                var o = this.findRelated(r);
                if (this.setRelated(o), !r.silent) {
                    var s = this;
                    t.Relational.eventQueue.add(function () {
                        s.changed && (s.instance.trigger("change:" + s.key, s.instance, s.related, r, !0), s.changed = !1)
                    })
                }
            },
            handleAddition: function (e, i, r) {
                r = r ? n.clone(r) : {}, this.changed = !0, n.each(this.getReverseRelations(e), function (e) {
                    e.addRelated(this.instance, r)
                }, this);
                var o = this;
                !r.silent && t.Relational.eventQueue.add(function () {
                    o.instance.trigger("add:" + o.key, e, o.related, r)
                })
            },
            handleRemoval: function (e, i, r) {
                r = r ? n.clone(r) : {}, this.changed = !0, n.each(this.getReverseRelations(e), function (e) {
                    e.removeRelated(this.instance, null, r)
                }, this);
                var o = this;
                !r.silent && t.Relational.eventQueue.add(function () {
                    o.instance.trigger("remove:" + o.key, e, o.related, r)
                })
            },
            handleReset: function (e, i) {
                var r = this;
                i = i ? n.clone(i) : {}, !i.silent && t.Relational.eventQueue.add(function () {
                    r.instance.trigger("reset:" + r.key, r.related, i)
                })
            },
            tryAddRelated: function (e, t, i) {
                var r = n.contains(this.keyIds, e.id);
                r && (this.addRelated(e, i), this.keyIds = n.without(this.keyIds, e.id))
            },
            addRelated: function (e, t) {
                var i = this;
                e.queue(function () {
                    i.related && !i.related.get(e) && i.related.add(e, n.defaults({
                        parse: !1
                    }, t))
                })
            },
            removeRelated: function (e, t, n) {
                this.related.get(e) && this.related.remove(e, n)
            }
        }), t.RelationalModel = t.Model.extend({
            _class: "Backbone.RelationalModel",
            relations: null,
            _relations: null,
            _isInitialized: !1,
            _deferProcessing: !1,
            _queue: null,
            _attributeChangeFired: !1,
            subModelTypeAttribute: "type",
            subModelTypes: null,
            keydefs: {},
            compoundKeyDelim: "-",
            constructor: function (e, i) {
                if (i && i.collection) {
                    var r = this,
                        o = this.collection = i.collection;
                    delete i.collection, this._deferProcessing = !0;
                    var s = function (e) {
                        e === r && (r._deferProcessing = !1, r.processQueue(), o.off("relational:add", s))
                    };
                    o.on("relational:add", s), n.defer(function () {
                        s(r)
                    })
                }
                t.Relational.store.processOrphanRelations(), t.Relational.store.listenTo(this, "relational:unregister", t.Relational.store.unregister), this._queue = new t.BlockingQueue, this._queue.block(), t.Relational.eventQueue.block();
                try {
                    t.Model.apply(this, arguments)
                } finally {
                    t.Relational.eventQueue.unblock()
                }
                this.createSavepoint(), this.on("sync", this.createSavepoint, this)
            },
            createSavepoint: function () {
                return this.savepoint = JSON.parse(JSON.stringify(this)), this
            },
            rollback: function (e) {
                e = e || {}, this.set(this.savepoint), this.changed = [], e.silent || this.trigger("rollback", this, e)
            },
            commit: function (e) {
                e = e || {};
                var i = this,
                    r = i.isNew(),
                    o = [],
                    s = [];
                return (r || i.hasChangedDeepSinceSavepoint()) && (r || n.each(i.relations, function (t) {
                    if (t.includeInJSON && (o.push(t), t.includeInJSON = !1, !t.isAutoRelation)) {
                        var n = i.get(t.key);
                        s.push(n.commit(e))
                    }
                }), s.push(i.save(null, e)), n.each(o, function (e) {
                    e.includeInJSON = !0
                }), e.silent || i.trigger("commit", i, e)), t.$.when.apply(t.$, s)
            },
            hasChangedDeepSinceSavepoint: function () {
                return !n.isEqual(this.toJSON(), this.savepoint)
            },
            trigger: function (e) {
                if (e.length > 5 && 0 === e.indexOf("change")) {
                    var n = this,
                        i = arguments;
                    t.Relational.eventQueue.add(function () {
                        if (n._isInitialized) {
                            var r = !0;
                            if ("change" === e) r = n.hasChanged() || n._attributeChangeFired, n._attributeChangeFired = !1;
                            else {
                                var o = e.slice(7),
                                    s = n.getRelation(o);
                                s ? (r = i[4] === !0, r ? n.changed[o] = i[2] : s.changed || delete n.changed[o]) : r && (n._attributeChangeFired = !0)
                            }
                            r && t.Model.prototype.trigger.apply(n, i)
                        }
                    })
                } else "destroy" === e ? (t.Model.prototype.trigger.apply(this, arguments), t.Relational.store.unregister(this)) : t.Model.prototype.trigger.apply(this, arguments);
                return this
            },
            initializeRelations: function (e) {
                this.acquire(), this._relations = {}, n.each(this.relations || [], function (n) {
                    t.Relational.store.initializeRelation(this, n, e)
                }, this), this._isInitialized = !0, this.release(), this.processQueue()
            },
            updateRelations: function (e, t) {
                this._isInitialized && !this.isLocked() && n.each(this._relations, function (n) {
                    if (!e || n.keySource in e || n.key in e) {
                        var i = this.attributes[n.keySource] || this.attributes[n.key],
                            r = e && (e[n.keySource] || e[n.key]);
                        (n.related !== i || null === i && null === r) && this.trigger("relational:change:" + n.key, this, i, t || {})
                    }
                    n.keySource !== n.key && delete this.attributes[n.keySource]
                }, this)
            },
            queue: function (e) {
                this._queue.add(e)
            },
            processQueue: function () {
                this._isInitialized && !this._deferProcessing && this._queue.isBlocked() && this._queue.unblock()
            },
            getRelation: function (e) {
                return this._relations[e]
            },
            getRelations: function () {
                return n.values(this._relations)
            },
            fetchRelated: function (e, i, r) {
                i = n.extend({
                    update: !0,
                    remove: !1
                }, i);
                var o, s, a = [],
                    l = this.getRelation(e),
                    c = l && (l.keyIds && l.keyIds.slice(0) || (l.keyId || 0 === l.keyId ? [l.keyId] : []));
                if (r && (o = l.related instanceof t.Collection ? l.related.models : [l.related], n.each(o, function (e) {
                        (e.id || 0 === e.id) && c.push(e.id)
                    })), c && c.length) {
                    var u = [];
                    if (o = n.map(c, function (e) {
                            var t = l.relatedModel.findModel(e);
                            if (!t) {
                                var n = {};
                                n[l.relatedModel.prototype.idAttribute] = e, t = l.relatedModel.findOrCreate(n, i), u.push(t)
                            }
                            return t
                        }, this), l.related instanceof t.Collection && n.isFunction(l.related.url) && (s = l.related.url(o)), s && s !== l.related.url()) {
                        var h = n.defaults({
                            error: function () {
                                var e = arguments;
                                n.each(u, function (t) {
                                    t.trigger("destroy", t, t.collection, i), i.error && i.error.apply(t, e)
                                })
                            },
                            url: s
                        }, i);
                        a = [l.related.fetch(h)]
                    } else a = n.map(o, function (e) {
                        var t = n.defaults({
                            error: function () {
                                n.contains(u, e) && (e.trigger("destroy", e, e.collection, i), i.error && i.error.apply(e, arguments))
                            }
                        }, i);
                        return e.fetch(t)
                    }, this)
                }
                return a
            },
            get: function (e) {
                var i = t.Model.prototype.get.call(this, e);
                if (!this.dotNotation || -1 === e.indexOf(".")) return i;
                var r = e.split("."),
                    o = n.reduce(r, function (e, i) {
                        if (!n.isNull(e) && !n.isUndefined(e)) {
                            if (e instanceof t.Model) return t.Model.prototype.get.call(e, i);
                            if (e instanceof t.Collection) return t.Collection.prototype.at.call(e, i);
                            throw new Error("Attribute must be an instanceof Backbone.Model or Backbone.Collection. Is: " + e + ", currentSplit: " + i)
                        }
                    }, this);
                if (void 0 !== i && void 0 !== o) throw new Error("Ambiguous result for '" + e + "'. direct result: " + i + ", dotNotation: " + o);
                return i || o
            },
            _getNewId: function (e) {
                var t, n = this,
                    i = null,
                    r = "",
                    o = !1,
                    s = n.keydefs.PRIMARY;
                return s && (s.forEach(function (i, s) {
                    t = e[i] || n.attributes && n.attributes[i], t || 0 === t ? r += (r ? n.compoundKeyDelim : "") + (e[i] || n.attributes && n.attributes[i]) : o = !0
                }), o || (i = r)), i || (i = e && n.idAttribute in e && e[n.idAttribute]), i
            },
            set: function (e, i, r) {
                t.Relational.eventQueue.block();
                var o;
                n.isObject(e) || null == e ? (o = e, r = i) : (o = {}, o[e] = i);
                try {
                    var s = this.id,
                        a = this._getNewId(o);
                    t.Relational.store.checkId(this, a);
                    var l = t.Model.prototype.set.apply(this, arguments);
                    a && (this.id = a), this._isInitialized || this.isLocked() ? a && a !== s && t.Relational.store.update(this) : (this.constructor.initializeModelHierarchy(), (a || 0 === a) && t.Relational.store.register(this), this.initializeRelations(r)), o && this.updateRelations(o, r)
                } finally {
                    t.Relational.eventQueue.unblock()
                }
                return l
            },
            clone: function () {
                var e = n.clone(this.attributes);
                return n.isUndefined(e[this.idAttribute]) || (e[this.idAttribute] = null), n.each(this.getRelations(), function (t) {
                    delete e[t.key]
                }), new this.constructor(e)
            },
            toJSON: function (e) {
                if (this.isLocked()) return this.id;
                this.acquire();
                var i = t.Model.prototype.toJSON.call(this, e);
                return !this.constructor._superModel || this.constructor._subModelTypeAttribute in i || (i[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue), n.each(this._relations, function (r) {
                    var o = i[r.key],
                        s = r.options.includeInJSON,
                        a = null;
                    s === !0 ? o && n.isFunction(o.toJSON) && (a = o.toJSON(e)) : n.isString(s) ? (o instanceof t.Collection ? a = o.pluck(s) : o instanceof t.Model && (a = o.get(s)), s === r.relatedModel.prototype.idAttribute && (r instanceof t.HasMany ? a = a.concat(r.keyIds) : r instanceof t.HasOne && (a = a || r.keyId, a || n.isObject(r.keyContents) || (a = r.keyContents || null)))) : n.isArray(s) ? o instanceof t.Collection ? (a = [], o.each(function (e) {
                        var t = {};
                        n.each(s, function (n) {
                            t[n] = e.get(n)
                        }), a.push(t)
                    })) : o instanceof t.Model && (a = {}, n.each(s, function (e) {
                        a[e] = o.get(e)
                    })) : delete i[r.key], s && (i[r.keyDestination] = a), r.keyDestination !== r.key && delete i[r.key]
                }), this.release(), i
            }
        }, {
            setup: function (e) {
                return this.prototype.relations = (this.prototype.relations || []).slice(0), this._subModels = {}, this._superModel = null, this.prototype.hasOwnProperty("subModelTypes") ? t.Relational.store.addSubModels(this.prototype.subModelTypes, this) : this.prototype.subModelTypes = null, n.each(this.prototype.relations || [], function (e) {
                    if (e.model || (e.model = this), e.reverseRelation && e.model === this) {
                        var i = !0;
                        if (n.isString(e.relatedModel)) {
                            var r = t.Relational.store.getObjectByName(e.relatedModel);
                            i = r && r.prototype instanceof t.RelationalModel
                        }
                        i ? t.Relational.store.initializeRelation(null, e) : n.isString(e.relatedModel) && t.Relational.store.addOrphanRelation(e)
                    }
                }, this), this
            },
            build: function (e, t) {
                this.initializeModelHierarchy();
                var n = this._findSubModelType(this, e) || this;
                return new n(e, t)
            },
            _findSubModelType: function (e, t) {
                if (e._subModels && e.prototype.subModelTypeAttribute in t) {
                    var n = t[e.prototype.subModelTypeAttribute],
                        i = e._subModels[n];
                    if (i) return i;
                    for (n in e._subModels)
                        if (i = this._findSubModelType(e._subModels[n], t)) return i
                }
                return null
            },
            initializeModelHierarchy: function () {
                if (this.inheritRelations(), this.prototype.subModelTypes) {
                    var e = n.keys(this._subModels),
                        i = n.omit(this.prototype.subModelTypes, e);
                    n.each(i, function (e) {
                        var n = t.Relational.store.getObjectByName(e);
                        n && n.initializeModelHierarchy()
                    })
                }
            },
            inheritRelations: function () {
                if (n.isUndefined(this._superModel) || n.isNull(this._superModel))
                    if (t.Relational.store.setupSuperModel(this), this._superModel) {
                        if (this._superModel.inheritRelations(), this._superModel.prototype.relations) {
                            var e = n.filter(this._superModel.prototype.relations || [], function (e) {
                                return !n.any(this.prototype.relations || [], function (t) {
                                    return e.relatedModel === t.relatedModel && e.key === t.key
                                }, this)
                            }, this);
                            this.prototype.relations = e.concat(this.prototype.relations)
                        }
                    } else this._superModel = !1
            },
            findOrCreate: function (e, t) {
                t || (t = {});
                var i = n.isObject(e) && t.parse && this.prototype.parse ? this.prototype.parse(n.clone(e)) : e,
                    r = this.findModel(i);
                return n.isObject(e) && (r && t.merge !== !1 ? (delete t.collection, delete t.url, r.set(i, t)) : r || t.create === !1 || (r = this.build(e, t))), r
            },
            find: function (e, t) {
                return t || (t = {}), t.create = !1, this.findOrCreate(e, t)
            },
            findModel: function (e) {
                return t.Relational.store.find(this, e)
            }
        }), n.extend(t.RelationalModel.prototype, t.Semaphore);
        var i = t.Collection.prototype.__initialize = t.Collection.prototype.initialize;
        t.Collection.prototype.initialize = function (e, t) {
            i.apply(this, arguments), this.createSavepoint(), this.on("sync", this.createSavepoint, this)
        }, t.Collection.prototype.createSavepoint = function () {
            return this._added = [], this._removed = [], this
        }, t.Collection.prototype.rollback = function (e) {
            return e = e || {}, this.add(this._removed, {
                silent: !0
            }), n.each(this.models, function (e) {
                e.rollback()
            }), this.remove(this._added, {
                silent: !0
            }), this.createSavepoint(), e.silent || this.trigger("rollback", this, e), this
        }, t.Collection.prototype.hasChangedDeepSinceSavepoint = function () {
            return this._removed.length || this._added.length ? !0 : !!n.find(this.models, function (e) {
                return e.hasChangedDeepSinceSavepoint()
            })
        }, t.Collection.prototype.commit = function (e) {
            var i = [];
            return this.hasChangedDeepSinceSavepoint() && (e = e || {}, n.each(this._removed, function (e) {
                i.push(e.destroy())
            }), n.each(this.models, function (e) {
                i.push(e.commit())
            }), this.createSavepoint(), e.silent || this.trigger("commit", this, e)), t.$.when.apply(t.$, i)
        }, t.Collection.prototype._class = "Backbone.Collection", t.Collection.prototype.__prepareModel = t.Collection.prototype._prepareModel, t.Collection.prototype._prepareModel = function (e, i) {
            var r;
            return e instanceof t.Model ? (e.collection || (e.collection = this), r = e) : (i = i ? n.clone(i) : {}, i.collection = this, r = "undefined" != typeof this.model.findOrCreate ? this.model.findOrCreate(e, i) : new this.model(e, i), r && r.validationError && (this.trigger("invalid", this, e, i), r = !1)), r
        };
        var r = t.Collection.prototype.__set = t.Collection.prototype.set;
        t.Collection.prototype.set = function (e, i) {
            if (!(this.model.prototype instanceof t.RelationalModel)) return r.apply(this, arguments);
            i && i.parse && (e = this.parse(e, i));
            var o = !n.isArray(e),
                s = [],
                a = [];
            e = o ? e ? [e] : [] : n.clone(e), n.each(e, function (e) {
                e instanceof t.Model || (e = t.Collection.prototype._prepareModel.call(this, e, i)), e && (a.push(e), this.get(e) || this.get(e.cid) ? null != e.id && (this._byId[e.id] = e) : s.push(e))
            }, this), a = o ? a.length ? a[0] : null : a;
            var l = r.call(this, a, n.defaults({
                parse: !1
            }, i));
            return n.each(s, function (e) {
                (this.get(e) || this.get(e.cid)) && this.trigger("relational:add", e, this, i)
            }, this), l
        };
        var o = t.Collection.prototype.__get = t.Collection.prototype.get;
        t.Collection.prototype.get = function (e) {
            if (!(this.model.prototype instanceof t.RelationalModel)) return o.apply(this, arguments);
            if (null != e) {
                var n = t.Relational.store.resolveIdForItem(this.model, e);
                return this._byId[null != n ? n : e.cid || e]
            }
        };
        var s = t.Collection.prototype.__add = t.Collection.prototype.add;
        t.Collection.prototype.add = function (e, i) {
            if (!(this.model.prototype instanceof t.RelationalModel)) return s.apply(this, arguments);
            var r = s.call(this, e, n.defaults(i || {}, {
                add: !0,
                merge: !1,
                remove: !1
            }));
            return this._added = this._added.concat(r), r
        };
        var a = t.Collection.prototype.__remove = t.Collection.prototype.remove;
        t.Collection.prototype.remove = function (e, i) {
            if (!(this.model.prototype instanceof t.RelationalModel)) return this._removed = this._removed.concat(e), a.apply(this, arguments);
            var r = !n.isArray(e),
                o = [];
            e = r ? e ? [e] : [] : n.clone(e), i || (i = {}), n.each(e, function (e) {
                e = this.get(e) || e && this.get(e.cid), e && o.push(e)
            }, this);
            var s = a.call(this, r ? o.length ? o[0] : null : o, i);
            return n.each(o, function (e) {
                this.trigger("relational:remove", e, this, i)
            }, this), this._removed = this._removed.concat(o), s
        };
        var l = t.Collection.prototype.__reset = t.Collection.prototype.reset;
        t.Collection.prototype.reset = function (e, i) {
            i = n.extend({
                merge: !0
            }, i);
            var r = l.call(this, e, i);
            return this._added = [], this._removed = [], this.model.prototype instanceof t.RelationalModel && this.trigger("relational:reset", this, i), this.createSavepoint(), r
        };
        var c = t.Collection.prototype.__sort = t.Collection.prototype.sort;
        t.Collection.prototype.sort = function (e) {
            var n = c.call(this, e);
            return this.model.prototype instanceof t.RelationalModel && this.trigger("relational:reset", this, e), n
        };
        var u = t.Collection.prototype.__trigger = t.Collection.prototype.trigger;
        t.Collection.prototype.trigger = function (e) {
            if (!(this.model.prototype instanceof t.RelationalModel)) return u.apply(this, arguments);
            if ("add" === e || "remove" === e || "reset" === e || "sort" === e) {
                var i = this,
                    r = arguments;
                n.isObject(r[3]) && (r = n.toArray(r), r[3] = n.clone(r[3])), t.Relational.eventQueue.add(function () {
                    u.apply(i, r)
                })
            } else u.apply(this, arguments);
            return this
        }, t.RelationalModel.extend = function (e, n) {
            var i = t.Model.extend.apply(this, arguments);
            return i.setup(this), i
        }
    }),
    function (e, t) {
        if ("object" == typeof exports) {
            var n = require("underscore"),
                i = require("backbone");
            module.exports = t(n, i)
        } else "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone.wreqr", ["underscore", "backbone"], t)
    }(this, function (e, t) {
        return t.Wreqr = function (e, t, n) {
            var i = {};
            return i.Handlers = function (e, t) {
                var n = function (e) {
                    this.options = e, this._wreqrHandlers = {}, t.isFunction(this.initialize) && this.initialize(e)
                };
                return n.extend = e.Model.extend, t.extend(n.prototype, e.Events, {
                    setHandlers: function (e) {
                        t.each(e, function (e, n) {
                            var i = null;
                            t.isObject(e) && !t.isFunction(e) && (i = e.context, e = e.callback), this.setHandler(n, e, i)
                        }, this)
                    },
                    setHandler: function (e, t, n) {
                        var i = {
                            callback: t,
                            context: n
                        };
                        this._wreqrHandlers[e] = i, this.trigger("handler:add", e, t, n)
                    },
                    hasHandler: function (e) {
                        return !!this._wreqrHandlers[e]
                    },
                    getHandler: function (e) {
                        var t = this._wreqrHandlers[e];
                        if (!t) throw new Error("Handler not found for '" + e + "'");
                        return function () {
                            var e = Array.prototype.slice.apply(arguments);
                            return t.callback.apply(t.context, e)
                        }
                    },
                    removeHandler: function (e) {
                        delete this._wreqrHandlers[e]
                    },
                    removeAllHandlers: function () {
                        this._wreqrHandlers = {}
                    }
                }), n
            }(e, n), i.CommandStorage = function () {
                var t = function (e) {
                    this.options = e, this._commands = {}, n.isFunction(this.initialize) && this.initialize(e)
                };
                return n.extend(t.prototype, e.Events, {
                    getCommands: function (e) {
                        var t = this._commands[e];
                        return t || (t = {
                            command: e,
                            instances: []
                        }, this._commands[e] = t), t
                    },
                    addCommand: function (e, t) {
                        var n = this.getCommands(e);
                        n.instances.push(t)
                    },
                    clearCommands: function (e) {
                        var t = this.getCommands(e);
                        t.instances = []
                    }
                }), t
            }(), i.Commands = function (e) {
                return e.Handlers.extend({
                    storageType: e.CommandStorage,
                    constructor: function (t) {
                        this.options = t || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                        var n = Array.prototype.slice.call(arguments);
                        e.Handlers.prototype.constructor.apply(this, n)
                    },
                    execute: function (e, t) {
                        e = arguments[0], t = Array.prototype.slice.call(arguments, 1), this.hasHandler(e) ? this.getHandler(e).apply(this, t) : this.storage.addCommand(e, t)
                    },
                    _executeCommands: function (e, t, i) {
                        var r = this.storage.getCommands(e);
                        n.each(r.instances, function (e) {
                            t.apply(i, e)
                        }), this.storage.clearCommands(e)
                    },
                    _initializeStorage: function (e) {
                        var t, i = e.storageType || this.storageType;
                        t = n.isFunction(i) ? new i : i, this.storage = t
                    }
                })
            }(i), i.RequestResponse = function (e) {
                return e.Handlers.extend({
                    request: function () {
                        var e = arguments[0],
                            t = Array.prototype.slice.call(arguments, 1);
                        return this.getHandler(e).apply(this, t)
                    }
                })
            }(i), i.EventAggregator = function (e, t) {
                var n = function () {};
                return n.extend = e.Model.extend, t.extend(n.prototype, e.Events), n
            }(e, n), i
        }(t, t.Marionette, e), t.Wreqr
    }),
    function (e, t) {
        if ("object" == typeof exports) {
            var n = require("underscore"),
                i = require("backbone");
            module.exports = t(n, i)
        } else "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone.babysitter", ["underscore", "backbone"], t)
    }(this, function (e, t) {
        "option strict";
        return t.ChildViewContainer = function (e, t) {
            var n = function (e) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), t.each(e, this.add, this)
            };
            t.extend(n.prototype, {
                add: function (e, t) {
                    var n = e.cid;
                    return this._views[n] = e, e.model && (this._indexByModel[e.model.cid] = n), t && (this._indexByCustom[t] = n), this._updateLength(), this
                },
                findByModel: function (e) {
                    return this.findByModelCid(e.cid)
                },
                findByModelCid: function (e) {
                    var t = this._indexByModel[e];
                    return this.findByCid(t)
                },
                findByCustom: function (e) {
                    var t = this._indexByCustom[e];
                    return this.findByCid(t)
                },
                findByIndex: function (e) {
                    return t.values(this._views)[e]
                },
                findByCid: function (e) {
                    return this._views[e]
                },
                remove: function (e) {
                    var n = e.cid;
                    return e.model && delete this._indexByModel[e.model.cid], t.any(this._indexByCustom, function (e, t) {
                        return e === n ? (delete this._indexByCustom[t], !0) : void 0
                    }, this), delete this._views[n], this._updateLength(), this
                },
                call: function (e) {
                    this.apply(e, t.tail(arguments))
                },
                apply: function (e, n) {
                    t.each(this._views, function (i) {
                        t.isFunction(i[e]) && i[e].apply(i, n || [])
                    })
                },
                _updateLength: function () {
                    this.length = t.size(this._views)
                }
            });
            var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            return t.each(i, function (e) {
                n.prototype[e] = function () {
                    var n = t.values(this._views),
                        i = [n].concat(t.toArray(arguments));
                    return t[e].apply(t, i)
                }
            }), n
        }(t, e), t.ChildViewContainer
    }),
    function (e, t) {
        if ("object" == typeof exports) {
            var n = require("underscore"),
                i = require("backbone"),
                r = require("backbone.wreqr"),
                o = require("backbone.babysitter");
            module.exports = t(n, i, r, o)
        } else "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone-marionette-vendor", ["underscore", "backbone", "backbone.wreqr", "backbone.babysitter"], t)
    }(this, function (e, t) {
        (function (e, t, n) {
            function i(e, t) {
                var n = new Error(e);
                throw n.name = t || "Error", n
            }
            var r = {};
            t.Marionette = r, r.$ = t.$;
            var o = Array.prototype.slice;
            return r.extend = t.Model.extend, r.getOption = function (e, t) {
                    if (e && t) {
                        var n;
                        return n = e.options && t in e.options && void 0 !== e.options[t] ? e.options[t] : e[t]
                    }
                }, r.normalizeMethods = function (e) {
                    var t, i = {};
                    return n.each(e, function (e, r) {
                        t = e, n.isFunction(t) || (t = this[t]), t && (i[r] = t)
                    }, this), i
                }, r.normalizeUIKeys = function (e, t) {
                    return "undefined" != typeof e ? (n.each(n.keys(e), function (n) {
                        var i = /@ui.[a-zA-Z_$0-9]*/g;
                        n.match(i) && (e[n.replace(i, function (e) {
                            return t[e.slice(4)]
                        })] = e[n], delete e[n])
                    }), e) : void 0
                }, r.triggerMethod = function () {
                    function e(e, t, n) {
                        return n.toUpperCase()
                    }
                    var t = /(^|:)(\w)/gi,
                        i = function (i) {
                            var r = "on" + i.replace(t, e),
                                o = this[r];
                            return n.isFunction(this.trigger) && this.trigger.apply(this, arguments), n.isFunction(o) ? o.apply(this, n.tail(arguments)) : void 0
                        };
                    return i
                }(), r.MonitorDOMRefresh = function (e) {
                    function t(e) {
                        e._isShown = !0, r(e)
                    }

                    function i(e) {
                        e._isRendered = !0, r(e)
                    }

                    function r(e) {
                        e._isShown && e._isRendered && o(e) && n.isFunction(e.triggerMethod) && e.triggerMethod("dom:refresh")
                    }

                    function o(t) {
                        return e.contains(t.el)
                    }
                    return function (e) {
                        e.listenTo(e, "show", function () {
                            t(e)
                        }), e.listenTo(e, "render", function () {
                            i(e)
                        })
                    }
                }(document.documentElement),
                function (e) {
                    function t(e, t, r, o) {
                        var s = o.split(/\s+/);
                        n.each(s, function (n) {
                            var o = e[n];
                            o || i("Method '" + n + "' was configured as an event handler, but does not exist."), e.listenTo(t, r, o)
                        })
                    }

                    function r(e, t, n, i) {
                        e.listenTo(t, n, i)
                    }

                    function o(e, t, i, r) {
                        var o = r.split(/\s+/);
                        n.each(o, function (n) {
                            var r = e[n];
                            e.stopListening(t, i, r)
                        })
                    }

                    function s(e, t, n, i) {
                        e.stopListening(t, n, i)
                    }

                    function a(e, t, i, r, o) {
                        t && i && (n.isFunction(i) && (i = i.call(e)), n.each(i, function (i, s) {
                            n.isFunction(i) ? r(e, t, s, i) : o(e, t, s, i)
                        }))
                    }
                    e.bindEntityEvents = function (e, n, i) {
                        a(e, n, i, r, t)
                    }, e.unbindEntityEvents = function (e, t, n) {
                        a(e, t, n, s, o)
                    }
                }(r), r.Callbacks = function () {
                    this._deferred = r.$.Deferred(), this._callbacks = []
                }, n.extend(r.Callbacks.prototype, {
                    add: function (e, t) {
                        this._callbacks.push({
                            cb: e,
                            ctx: t
                        }), this._deferred.done(function (n, i) {
                            t && (n = t), e.call(n, i)
                        })
                    },
                    run: function (e, t) {
                        this._deferred.resolve(t, e)
                    },
                    reset: function () {
                        var e = this._callbacks;
                        this._deferred = r.$.Deferred(), this._callbacks = [], n.each(e, function (e) {
                            this.add(e.cb, e.ctx)
                        }, this)
                    }
                }), r.Controller = function (e) {
                    this.triggerMethod = r.triggerMethod, this.options = e || {}, n.isFunction(this.initialize) && this.initialize(this.options)
                }, r.Controller.extend = r.extend, n.extend(r.Controller.prototype, t.Events, {
                    close: function () {
                        this.stopListening();
                        var e = Array.prototype.slice.call(arguments);
                        this.triggerMethod.apply(this, ["close"].concat(e)), this.unbind()
                    }
                }), r.Region = function (e) {
                    if (this.options = e || {}, this.el = r.getOption(this, "el"), this.el || i("An 'el' must be specified for a region.", "NoElError"), this.initialize) {
                        var t = Array.prototype.slice.apply(arguments);
                        this.initialize.apply(this, t)
                    }
                }, n.extend(r.Region, {
                    buildRegion: function (e, t) {
                        var r = n.isString(e),
                            o = n.isString(e.selector),
                            s = n.isUndefined(e.regionType),
                            a = n.isFunction(e);
                        a || r || o || i("Region must be specified as a Region type, a selector string or an object with selector property");
                        var l, c;
                        r && (l = e), e.selector && (l = e.selector, delete e.selector), a && (c = e), !a && s && (c = t), e.regionType && (c = e.regionType, delete e.regionType), (r || a) && (e = {}), e.el = l;
                        var u = new c(e);
                        return e.parentEl && (u.getEl = function (t) {
                            var i = e.parentEl;
                            return n.isFunction(i) && (i = i()), i.find(t)
                        }), u
                    }
                }), n.extend(r.Region.prototype, t.Events, {
                    show: function (e) {
                        this.ensureEl();
                        var t = e.isClosed || n.isUndefined(e.$el),
                            i = e !== this.currentView;
                        i && this.close(), e.render(), r.triggerMethod.call(this, "before:show", e), r.triggerMethod.call(e, "before:show"), (i || t) && this.open(e), this.currentView = e, r.triggerMethod.call(this, "show", e), r.triggerMethod.call(e, "show")
                    },
                    ensureEl: function () {
                        this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
                    },
                    getEl: function (e) {
                        return r.$(e)
                    },
                    open: function (e) {
                        this.$el.empty().append(e.el)
                    },
                    close: function () {
                        var e = this.currentView;
                        e && !e.isClosed && (e.close ? e.close() : e.remove && e.remove(), r.triggerMethod.call(this, "close", e), delete this.currentView)
                    },
                    attachView: function (e) {
                        this.currentView = e
                    },
                    reset: function () {
                        this.close(), delete this.$el
                    }
                }), r.Region.extend = r.extend, r.RegionManager = function (e) {
                    var t = e.Controller.extend({
                            constructor: function (t) {
                                this._regions = {}, e.Controller.prototype.constructor.call(this, t)
                            },
                            addRegions: function (e, t) {
                                var i = {};
                                return n.each(e, function (e, r) {
                                    n.isString(e) && (e = {
                                        selector: e
                                    }), e.selector && (e = n.defaults({}, e, t));
                                    var o = this.addRegion(r, e);
                                    i[r] = o
                                }, this), i
                            },
                            addRegion: function (t, i) {
                                var r, o = n.isObject(i),
                                    s = n.isString(i),
                                    a = !!i.selector;
                                return r = s || o && a ? e.Region.buildRegion(i, e.Region) : n.isFunction(i) ? e.Region.buildRegion(i, e.Region) : i, this._store(t, r), this.triggerMethod("region:add", t, r), r
                            },
                            get: function (e) {
                                return this._regions[e]
                            },
                            removeRegion: function (e) {
                                var t = this._regions[e];
                                this._remove(e, t)
                            },
                            removeRegions: function () {
                                n.each(this._regions, function (e, t) {
                                    this._remove(t, e)
                                }, this)
                            },
                            closeRegions: function () {
                                n.each(this._regions, function (e, t) {
                                    e.close()
                                }, this)
                            },
                            close: function () {
                                this.removeRegions(), e.Controller.prototype.close.apply(this, arguments)
                            },
                            _store: function (e, t) {
                                this._regions[e] = t, this._setLength()
                            },
                            _remove: function (e, t) {
                                t.close(), delete this._regions[e], this._setLength(), this.triggerMethod("region:remove", e, t)
                            },
                            _setLength: function () {
                                this.length = n.size(this._regions)
                            }
                        }),
                        i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                    return n.each(i, function (e) {
                        t.prototype[e] = function () {
                            var t = n.values(this._regions),
                                i = [t].concat(n.toArray(arguments));
                            return n[e].apply(n, i)
                        }
                    }), t
                }(r), r.TemplateCache = function (e) {
                    this.templateId = e
                }, n.extend(r.TemplateCache, {
                    templateCaches: {},
                    get: function (e) {
                        var t = this.templateCaches[e];
                        return t || (t = new r.TemplateCache(e), this.templateCaches[e] = t), t.load()
                    },
                    clear: function () {
                        var e, t = o.call(arguments),
                            n = t.length;
                        if (n > 0)
                            for (e = 0; n > e; e++) delete this.templateCaches[t[e]];
                        else this.templateCaches = {}
                    }
                }), n.extend(r.TemplateCache.prototype, {
                    load: function () {
                        if (this.compiledTemplate) return this.compiledTemplate;
                        var e = this.loadTemplate(this.templateId);
                        return this.compiledTemplate = this.compileTemplate(e), this.compiledTemplate
                    },
                    loadTemplate: function (e) {
                        var t = r.$(e).html();
                        return t && 0 !== t.length || i("Could not find template: '" + e + "'", "NoTemplateError"), t
                    },
                    compileTemplate: function (e) {
                        return n.template(e)
                    }
                }), r.Renderer = {
                    render: function (e, t) {
                        e || i("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
                        var n;
                        return (n = "function" == typeof e ? e : r.TemplateCache.get(e))(t)
                    }
                }, r.View = t.View.extend({
                    constructor: function (e) {
                        n.bindAll(this, "render"), n.isObject(this.behaviors) && new r.Behaviors(this), this.options = n.extend({}, n.result(this, "options"), n.isFunction(e) ? e.call(this) : e), this.events = this.normalizeUIKeys(n.result(this, "events")), t.View.prototype.constructor.apply(this, arguments), r.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled)
                    },
                    triggerMethod: r.triggerMethod,
                    normalizeMethods: r.normalizeMethods,
                    getTemplate: function () {
                        return r.getOption(this, "template")
                    },
                    mixinTemplateHelpers: function (e) {
                        e = e || {};
                        var t = r.getOption(this, "templateHelpers");
                        return n.isFunction(t) && (t = t.call(this)), n.extend(e, t)
                    },
                    normalizeUIKeys: function (e) {
                        var t = n.result(this, "ui");
                        return r.normalizeUIKeys(e, t)
                    },
                    configureTriggers: function () {
                        if (this.triggers) {
                            var e = {},
                                t = this.normalizeUIKeys(n.result(this, "triggers"));
                            return n.each(t, function (t, i) {
                                var r = n.isObject(t),
                                    o = r ? t.event : t;
                                e[i] = function (e) {
                                    if (e) {
                                        var n = e.preventDefault,
                                            i = e.stopPropagation,
                                            s = r ? t.preventDefault : n,
                                            a = r ? t.stopPropagation : i;
                                        s && n && n.apply(e), a && i && i.apply(e)
                                    }
                                    var l = {
                                        view: this,
                                        model: this.model,
                                        collection: this.collection
                                    };
                                    this.triggerMethod(o, l)
                                }
                            }, this), e
                        }
                    },
                    delegateEvents: function (e) {
                        this._delegateDOMEvents(e), r.bindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.bindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
                    },
                    _delegateDOMEvents: function (e) {
                        e = e || this.events, n.isFunction(e) && (e = e.call(this));
                        var i = {},
                            r = n.result(this, "behaviorEvents") || {},
                            o = this.configureTriggers();
                        n.extend(i, r, e, o), t.View.prototype.delegateEvents.call(this, i)
                    },
                    undelegateEvents: function () {
                        var e = Array.prototype.slice.call(arguments);
                        t.View.prototype.undelegateEvents.apply(this, e), r.unbindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.unbindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
                    },
                    onShowCalled: function () {},
                    close: function () {
                        if (!this.isClosed) {
                            var e = Array.prototype.slice.call(arguments),
                                t = this.triggerMethod.apply(this, ["before:close"].concat(e));
                            t !== !1 && (this.isClosed = !0, this.triggerMethod.apply(this, ["close"].concat(e)), this.unbindUIElements(), this.remove())
                        }
                    },
                    bindUIElements: function () {
                        if (this.ui) {
                            this._uiBindings || (this._uiBindings = this.ui);
                            var e = n.result(this, "_uiBindings");
                            this.ui = {}, n.each(n.keys(e), function (t) {
                                var n = e[t];
                                this.ui[t] = this.$(n)
                            }, this)
                        }
                    },
                    unbindUIElements: function () {
                        this.ui && this._uiBindings && (n.each(this.ui, function (e, t) {
                            delete this.ui[t]
                        }, this), this.ui = this._uiBindings, delete this._uiBindings)
                    }
                }), r.ItemView = r.View.extend({
                    constructor: function () {
                        r.View.prototype.constructor.apply(this, arguments)
                    },
                    serializeData: function () {
                        var e = {};
                        return this.model ? e = this.model.toJSON() : this.collection && (e = {
                            items: this.collection.toJSON()
                        }), e
                    },
                    render: function () {
                        this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
                        var e = this.serializeData();
                        e = this.mixinTemplateHelpers(e);
                        var t = this.getTemplate(),
                            n = r.Renderer.render(t, e);
                        return this.$el.html(n), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
                    },
                    close: function () {
                        this.isClosed || (this.triggerMethod("item:before:close"), r.View.prototype.close.apply(this, arguments), this.triggerMethod("item:closed"))
                    }
                }), r.CollectionView = r.View.extend({
                    itemViewEventPrefix: "itemview",
                    constructor: function (e) {
                        this._initChildViewStorage(), r.View.prototype.constructor.apply(this, arguments), this._initialEvents(), this.initRenderBuffer()
                    },
                    initRenderBuffer: function () {
                        this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
                    },
                    startBuffering: function () {
                        this.initRenderBuffer(), this.isBuffering = !0
                    },
                    endBuffering: function () {
                        this.isBuffering = !1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
                    },
                    _triggerShowBufferedChildren: function () {
                        this._isShown && (n.each(this._bufferedChildren, function (e) {
                            r.triggerMethod.call(e, "show")
                        }), this._bufferedChildren = [])
                    },
                    _initialEvents: function () {
                        this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this.render))
                    },
                    addChildView: function (e, t, n) {
                        this.closeEmptyView();
                        var i = this.getItemView(e),
                            r = this.collection.indexOf(e);
                        this.addItemView(e, i, r)
                    },
                    onShowCalled: function () {
                        this.children.each(function (e) {
                            r.triggerMethod.call(e, "show")
                        })
                    },
                    triggerBeforeRender: function () {
                        this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
                    },
                    triggerRendered: function () {
                        this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
                    },
                    render: function () {
                        return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
                    },
                    _renderChildren: function () {
                        this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : this.showCollection(), this.endBuffering()
                    },
                    showCollection: function () {
                        var e;
                        this.collection.each(function (t, n) {
                            e = this.getItemView(t), this.addItemView(t, e, n)
                        }, this)
                    },
                    showEmptyView: function () {
                        var e = this.getEmptyView();
                        if (e && !this._showingEmptyView) {
                            this._showingEmptyView = !0;
                            var n = new t.Model;
                            this.addItemView(n, e, 0)
                        }
                    },
                    closeEmptyView: function () {
                        this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
                    },
                    getEmptyView: function () {
                        return r.getOption(this, "emptyView")
                    },
                    getItemView: function (e) {
                        var t = r.getOption(this, "itemView");
                        return t || i("An `itemView` must be specified", "NoItemViewError"), t
                    },
                    addItemView: function (e, t, i) {
                        var o = r.getOption(this, "itemViewOptions");
                        n.isFunction(o) && (o = o.call(this, e, i));
                        var s = this.buildItemView(e, t, o);
                        return this.addChildViewEventForwarding(s), this.triggerMethod("before:item:added", s), this.children.add(s), this.renderItemView(s, i), this._isShown && !this.isBuffering && r.triggerMethod.call(s, "show"), this.triggerMethod("after:item:added", s), s
                    },
                    addChildViewEventForwarding: function (e) {
                        var t = r.getOption(this, "itemViewEventPrefix");
                        this.listenTo(e, "all", function () {
                            var i = o.call(arguments),
                                s = i[0],
                                a = this.normalizeMethods(this.getItemEvents());
                            i[0] = t + ":" + s, i.splice(1, 0, e), "undefined" != typeof a && n.isFunction(a[s]) && a[s].apply(this, i), r.triggerMethod.apply(this, i)
                        }, this)
                    },
                    getItemEvents: function () {
                        return n.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
                    },
                    renderItemView: function (e, t) {
                        e.render(), this.appendHtml(this, e, t)
                    },
                    buildItemView: function (e, t, i) {
                        var r = n.extend({
                            model: e
                        }, i);
                        return new t(r)
                    },
                    removeItemView: function (e) {
                        var t = this.children.findByModel(e);
                        this.removeChildView(t), this.checkEmpty()
                    },
                    removeChildView: function (e) {
                        e && (this.stopListening(e), e.close ? e.close() : e.remove && e.remove(), this.children.remove(e)), this.triggerMethod("item:removed", e)
                    },
                    isEmpty: function (e) {
                        return !this.collection || 0 === this.collection.length
                    },
                    checkEmpty: function () {
                        this.isEmpty(this.collection) && this.showEmptyView()
                    },
                    appendBuffer: function (e, t) {
                        e.$el.append(t)
                    },
                    appendHtml: function (e, t, n) {
                        e.isBuffering ? (e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t)) : e.$el.append(t.el)
                    },
                    _initChildViewStorage: function () {
                        this.children = new t.ChildViewContainer
                    },
                    close: function () {
                        this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), r.View.prototype.close.apply(this, arguments))
                    },
                    closeChildren: function () {
                        this.children.each(function (e) {
                            this.removeChildView(e)
                        }, this), this.checkEmpty()
                    }
                }), r.CompositeView = r.CollectionView.extend({
                    constructor: function () {
                        r.CollectionView.prototype.constructor.apply(this, arguments)
                    },
                    _initialEvents: function () {
                        this.once("render", function () {
                            this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this._renderChildren))
                        })
                    },
                    getItemView: function (e) {
                        var t = r.getOption(this, "itemView") || this.constructor;
                        return t || i("An `itemView` must be specified", "NoItemViewError"), t
                    },
                    serializeData: function () {
                        var e = {};
                        return this.model && (e = this.model.toJSON()), e
                    },
                    render: function () {
                        this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
                        var e = this.renderModel();
                        return this.$el.html(e), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
                    },
                    _renderChildren: function () {
                        this.isRendered && (this.triggerMethod("composite:collection:before:render"), r.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
                    },
                    renderModel: function () {
                        var e = {};
                        e = this.serializeData(), e = this.mixinTemplateHelpers(e);
                        var t = this.getTemplate();
                        return r.Renderer.render(t, e)
                    },
                    appendBuffer: function (e, t) {
                        var n = this.getItemViewContainer(e);
                        n.append(t)
                    },
                    appendHtml: function (e, t, n) {
                        if (e.isBuffering) e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t);
                        else {
                            var i = this.getItemViewContainer(e);
                            i.append(t.el)
                        }
                    },
                    getItemViewContainer: function (e) {
                        if ("$itemViewContainer" in e) return e.$itemViewContainer;
                        var t, o = r.getOption(e, "itemViewContainer");
                        if (o) {
                            var s = n.isFunction(o) ? o.call(this) : o;
                            t = e.$(s), t.length <= 0 && i("The specified `itemViewContainer` was not found: " + e.itemViewContainer, "ItemViewContainerMissingError")
                        } else t = e.$el;
                        return e.$itemViewContainer = t, t
                    },
                    resetItemViewContainer: function () {
                        this.$itemViewContainer && delete this.$itemViewContainer
                    }
                }), r.Layout = r.ItemView.extend({
                    regionType: r.Region,
                    constructor: function (e) {
                        e = e || {}, this._firstRender = !0, this._initializeRegions(e), r.ItemView.prototype.constructor.call(this, e)
                    },
                    render: function () {
                        return this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions(), r.ItemView.prototype.render.apply(this, arguments)
                    },
                    close: function () {
                        this.isClosed || (this.regionManager.close(), r.ItemView.prototype.close.apply(this, arguments))
                    },
                    addRegion: function (e, t) {
                        var n = {};
                        return n[e] = t, this._buildRegions(n)[e]
                    },
                    addRegions: function (e) {
                        return this.regions = n.extend({}, this.regions, e), this._buildRegions(e)
                    },
                    removeRegion: function (e) {
                        return delete this.regions[e], this.regionManager.removeRegion(e)
                    },
                    _buildRegions: function (e) {
                        var t = this,
                            n = {
                                regionType: r.getOption(this, "regionType"),
                                parentEl: function () {
                                    return t.$el
                                }
                            };
                        return this.regionManager.addRegions(e, n)
                    },
                    _initializeRegions: function (e) {
                        var t;
                        this._initRegionManager(), t = n.isFunction(this.regions) ? this.regions(e) : this.regions || {}, this.addRegions(t)
                    },
                    _reInitializeRegions: function () {
                        this.regionManager.closeRegions(), this.regionManager.each(function (e) {
                            e.reset()
                        })
                    },
                    _initRegionManager: function () {
                        this.regionManager = new r.RegionManager, this.listenTo(this.regionManager, "region:add", function (e, t) {
                            this[e] = t, this.trigger("region:add", e, t)
                        }), this.listenTo(this.regionManager, "region:remove", function (e, t) {
                            delete this[e], this.trigger("region:remove", e, t)
                        })
                    }
                }), r.Behavior = function (e, t) {
                    function n(t, n) {
                        this.view = n, this.defaults = e.result(this, "defaults") || {}, this.options = e.extend({}, this.defaults, t), this.$ = function () {
                            return this.view.$.apply(this.view, arguments)
                        }, this.initialize.apply(this, arguments)
                    }
                    return e.extend(n.prototype, {
                        initialize: function () {},
                        triggerMethod: r.triggerMethod
                    }), e.extend(n, {
                        extend: t.View.extend
                    }), n
                }(n, t), r.Behaviors = function (e, t) {
                    function n(e) {
                        this.behaviors = n.parseBehaviors(e, e.behaviors), n.wrap(e, this.behaviors, ["bindUIElements", "unbindUIElements", "delegateEvents", "undelegateEvents", "onShow", "onClose", "behaviorEvents", "triggerMethod", "setElement"])
                    }
                    var i = {
                        setElement: function (e, n) {
                            e.apply(this, t.tail(arguments, 2)), t.each(n, function (e) {
                                e.$el = this.$el
                            }, this)
                        },
                        onShow: function (n, i) {
                            var r = t.tail(arguments, 2);
                            t.each(i, function (t) {
                                e.triggerMethod.apply(t, ["show"].concat(r))
                            }), t.isFunction(n) && n.apply(this, r)
                        },
                        onClose: function (n, i) {
                            var r = t.tail(arguments, 2);
                            t.each(i, function (t) {
                                e.triggerMethod.apply(t, ["close"].concat(r))
                            }), t.isFunction(n) && n.apply(this, r)
                        },
                        bindUIElements: function (e, n) {
                            e.apply(this), t.invoke(n, e)
                        },
                        unbindUIElements: function (e, n) {
                            e.apply(this), t.invoke(n, e)
                        },
                        triggerMethod: function (e, n) {
                            var i = t.tail(arguments, 2);
                            e.apply(this, i), t.each(n, function (t) {
                                e.apply(t, i)
                            })
                        },
                        delegateEvents: function (n, i) {
                            var r = t.tail(arguments, 2);
                            n.apply(this, r), t.each(i, function (t) {
                                e.bindEntityEvents(this, this.model, e.getOption(t, "modelEvents")), e.bindEntityEvents(this, this.collection, e.getOption(t, "collectionEvents"))
                            }, this)
                        },
                        undelegateEvents: function (n, i) {
                            var r = t.tail(arguments, 2);
                            n.apply(this, r), t.each(i, function (t) {
                                e.unbindEntityEvents(this, this.model, e.getOption(t, "modelEvents")), e.unbindEntityEvents(this, this.collection, e.getOption(t, "collectionEvents"))
                            }, this)
                        },
                        behaviorEvents: function (n, i) {
                            var r = {},
                                o = t.result(this, "ui");
                            return t.each(i, function (n, i) {
                                var s = {},
                                    a = t.result(n, "events") || {},
                                    l = t.result(n, "ui"),
                                    c = t.extend({}, o, l);
                                a = e.normalizeUIKeys(a, c), t.each(t.keys(a), function (e) {
                                    var r = new Array(i + 2).join(" "),
                                        o = e + r,
                                        l = t.isFunction(a[e]) ? a[e] : n[a[e]];
                                    s[o] = t.bind(l, n)
                                }), r = t.extend(r, s)
                            }), r
                        }
                    };
                    return t.extend(n, {
                        behaviorsLookup: function () {
                            throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")
                        },
                        getBehaviorClass: function (e, i) {
                            return e.behaviorClass ? e.behaviorClass : t.isFunction(n.behaviorsLookup) ? n.behaviorsLookup.apply(this, arguments)[i] : n.behaviorsLookup[i]
                        },
                        parseBehaviors: function (e, i) {
                            return t.map(i, function (t, i) {
                                var r = n.getBehaviorClass(t, i);
                                return new r(t, e)
                            })
                        },
                        wrap: function (e, n, r) {
                            t.each(r, function (r) {
                                e[r] = t.partial(i[r], e[r], n)
                            })
                        }
                    }), n
                }(r, n), r.AppRouter = t.Router.extend({
                    constructor: function (e) {
                        t.Router.prototype.constructor.apply(this, arguments), this.options = e || {};
                        var n = r.getOption(this, "appRoutes"),
                            i = this._getController();
                        this.processAppRoutes(i, n)
                    },
                    appRoute: function (e, t) {
                        var n = this._getController();
                        this._addAppRoute(n, e, t)
                    },
                    processAppRoutes: function (e, t) {
                        if (t) {
                            var i = n.keys(t).reverse();
                            n.each(i, function (n) {
                                this._addAppRoute(e, n, t[n])
                            }, this)
                        }
                    },
                    _getController: function () {
                        return r.getOption(this, "controller")
                    },
                    _addAppRoute: function (e, t, r) {
                        var o = e[r];
                        o || i("Method '" + r + "' was not found on the controller"), this.route(t, r, n.bind(o, e))
                    }
                }), r.Application = function (e) {
                    this._initRegionManager(), this._initCallbacks = new r.Callbacks, this.vent = new t.Wreqr.EventAggregator, this.commands = new t.Wreqr.Commands, this.reqres = new t.Wreqr.RequestResponse, this.submodules = {}, n.extend(this, e), this.triggerMethod = r.triggerMethod
                }, n.extend(r.Application.prototype, t.Events, {
                    execute: function () {
                        this.commands.execute.apply(this.commands, arguments)
                    },
                    request: function () {
                        return this.reqres.request.apply(this.reqres, arguments)
                    },
                    addInitializer: function (e) {
                        this._initCallbacks.add(e)
                    },
                    start: function (e) {
                        this.triggerMethod("initialize:before", e), this._initCallbacks.run(e, this), this.triggerMethod("initialize:after", e), this.triggerMethod("start", e)
                    },
                    addRegions: function (e) {
                        return this._regionManager.addRegions(e)
                    },
                    closeRegions: function () {
                        this._regionManager.closeRegions()
                    },
                    removeRegion: function (e) {
                        this._regionManager.removeRegion(e)
                    },
                    getRegion: function (e) {
                        return this._regionManager.get(e)
                    },
                    module: function (e, t) {
                        var n = r.Module.getClass(t),
                            i = o.call(arguments);
                        return i.unshift(this), n.create.apply(n, i)
                    },
                    _initRegionManager: function () {
                        this._regionManager = new r.RegionManager, this.listenTo(this._regionManager, "region:add", function (e, t) {
                            this[e] = t
                        }), this.listenTo(this._regionManager, "region:remove", function (e, t) {
                            delete this[e]
                        })
                    }
                }), r.Application.extend = r.extend, r.Module = function (e, t, i) {
                    this.moduleName = e, this.options = n.extend({}, this.options, i), this.initialize = i.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = t, this.startWithParent = !0, this.triggerMethod = r.triggerMethod, n.isFunction(this.initialize) && this.initialize(this.options, e, t)
                }, r.Module.extend = r.extend, n.extend(r.Module.prototype, t.Events, {
                    initialize: function () {},
                    addInitializer: function (e) {
                        this._initializerCallbacks.add(e)
                    },
                    addFinalizer: function (e) {
                        this._finalizerCallbacks.add(e)
                    },
                    start: function (e) {
                        this._isInitialized || (n.each(this.submodules, function (t) {
                            t.startWithParent && t.start(e)
                        }), this.triggerMethod("before:start", e), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.triggerMethod("start", e))
                    },
                    stop: function () {
                        this._isInitialized && (this._isInitialized = !1, r.triggerMethod.call(this, "before:stop"), n.each(this.submodules, function (e) {
                            e.stop()
                        }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), r.triggerMethod.call(this, "stop"))
                    },
                    addDefinition: function (e, t) {
                        this._runModuleDefinition(e, t)
                    },
                    _runModuleDefinition: function (e, i) {
                        if (e) {
                            var o = n.flatten([this, this.app, t, r, r.$, n, i]);
                            e.apply(this, o)
                        }
                    },
                    _setupInitializersAndFinalizers: function () {
                        this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks
                    }
                }), n.extend(r.Module, {
                    create: function (e, t, i) {
                        var r = e,
                            s = o.call(arguments);
                        s.splice(0, 3), t = t.split(".");
                        var a = t.length,
                            l = [];
                        return l[a - 1] = i, n.each(t, function (t, n) {
                            var o = r;
                            r = this._getModule(o, t, e, i), this._addModuleDefinition(o, r, l[n], s)
                        }, this), r
                    },
                    _getModule: function (e, t, i, r, o) {
                        var s = n.extend({}, r),
                            a = this.getClass(r),
                            l = e[t];
                        return l || (l = new a(t, i, s), e[t] = l, e.submodules[t] = l), l
                    },
                    getClass: function (e) {
                        var t = r.Module;
                        return e ? e.prototype instanceof t ? e : e.moduleClass || t : t
                    },
                    _addModuleDefinition: function (e, t, n, i) {
                        var r = this._getDefine(n),
                            o = this._getStartWithParent(n, t);
                        r && t.addDefinition(r, i), this._addStartWithParent(e, t, o)
                    },
                    _getStartWithParent: function (e, t) {
                        var i;
                        return n.isFunction(e) && e.prototype instanceof r.Module ? (i = t.constructor.prototype.startWithParent, n.isUndefined(i) ? !0 : i) : n.isObject(e) ? (i = e.startWithParent, n.isUndefined(i) ? !0 : i) : !0
                    },
                    _getDefine: function (e) {
                        return !n.isFunction(e) || e.prototype instanceof r.Module ? n.isObject(e) ? e.define : null : e
                    },
                    _addStartWithParent: function (e, t, n) {
                        t.startWithParent = t.startWithParent && n, t.startWithParent && !t.startWithParentIsConfigured && (t.startWithParentIsConfigured = !0, e.addInitializer(function (e) {
                            t.startWithParent && t.start(e)
                        }))
                    }
                }), r
        })(this, t, e);
        return t.Marionette
    }), _wAMD.define("backbone-marionette", ["mustache", "backbone-marionette-vendor"], function (e, t) {
        return t.Renderer.render = function (t, n) {
            if (!t) {
                var i = new Error("Cannot render the template since it's false, null or undefined.");
                throw i.name = "TemplateNotFoundError", i
            }
            return "function" == typeof t ? t(n) : e.render(t, n)
        }, t
    }), _wAMD.define("util/backbone-prevent", ["jquery", "underscore", "backbone"], function (e, t, n) {
        n.preventClose = function (i) {
            var r = this;
            if (!this.defer) {
                if (this.defer = e.Deferred(), n.preventClose.preventer) {
                    var o = n.preventClose.preventer();
                    o && o.promise ? this.defer = o : o ? this.defer.resolve() : this.defer.reject(), this.defer.fail(function () {
                        delete n.preventClose.preventer
                    })
                } else this.defer.reject();
                this.defer.always(function () {
                    t.defer(function () {
                        delete r.defer
                    })
                })
            }
            this.defer.fail(function () {
                i()
            })
        }, n.preventClose.ifModelChanged = function (n, i) {
            if (!n.hasChangedDeepSinceSavepoint()) return !1;
            var r = e.Deferred();
            return i ? i(function () {
                r.reject()
            }, function () {
                r.resolve()
            }) : t.defer(function () {
                confirm("Are you sure? You'll lose your current changes.") ? r.reject() : r.resolve()
            }), r.promise()
        };
        var i = n.View.prototype.constructor;
        n.View.prototype.constructor = function () {
            i.apply(this, arguments), this.preventClose && (n.preventClose.preventer = t.bind(this.preventClose, this))
        }
    }), jsonrpc = {}, jsonrpc.CallStack = function (e, t, n, i) {
        this._counter = 0, this._enterFn = e, this._exitFn = n, this._enterScope = t, this._exitScope = i
    }, jsonrpc.CallStack.prototype = {
        enter: function () {
            this._counter = this._counter < 0 ? 1 : this._counter + 1, 1 === this._counter && this._enterFn.apply(this._enterScope, arguments)
        },
        exit: function (e) {
            this._counter -= 1, 0 === this._counter && this._exitFn.apply(this._exitScope, arguments)
        }
    }, jsonrpc.DelayedTask = function (e, t, n) {
        this._fn = e || function () {}, this._scope = t || void 0, this._args = n || [], this._id = null
    }, jsonrpc.Observable = function () {
        this._listeners = []
    }, jsonrpc.Observable.prototype = {
        bind: function (e, t) {
            var n = {
                fn: e,
                scope: t || this
            };
            return this._listeners.push(n), n
        },
        unbind: function (e) {
            var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        },
        trigger: function () {
            var e;
            for (e = 0; e < this._listeners.length; e += 1) this._listeners[e].fn.apply(this._listeners[e].scope, arguments)
        }
    }, jsonrpc.DelayedTask.prototype = {
        delay: function (e, t, n, i) {
            var r = this;
            this._fn = t || this._fn, this._scope = n || this._scope, this._args = i || this._args, this.cancel(), this._id = window.setInterval(function () {
                window.clearInterval(r._id), r._id = null, r._fn.apply(r._scope, r._args)
            }, e)
        },
        cancel: function () {
            this._id && (window.clearInterval(this._id), this._id = null)
        }
    }, jsonrpc.JsonRpc = function (e) {
        var t = e.split("/");
        this._url = e, this._end = t[t.length - 2], this.loading = new jsonrpc.Observable, this.loaded = new jsonrpc.Observable, this.unhandledFailure = new jsonrpc.Observable, this._loadingState = new jsonrpc.CallStack(this.loading.trigger, this.loading, this.loaded.trigger, this.loaded), this._requests = [], this._batchingMilliseconds = 10, this._delayedTask = new jsonrpc.DelayedTask
    }, jsonrpc.JsonRpc.prototype = {
        setBatchingMilliseconds: function (e) {
            this._batchingMilliseconds = e
        },
        call: function () {
            var e = this._getParams.apply(this, arguments);
            this._loadingState.enter(), e.standalone ? this._sendRequests([e]) : (this._requests.push(e), this._batchingMilliseconds ? this._delayedTask.delay(this._batchingMilliseconds, this._sendRequests, this) : this._sendRequests())
        },
        _sendRequests: function (e) {
            function t(t, i, o) {
                var s;
                if (t) s = r._isArray(i) ? i : [i];
                else
                    for (s = [], n = 0; n < e.length; n += 1) s[n] = {
                        id: n,
                        error: {
                            message: i
                        }
                    };
                r._handleResponses(e, s, o)
            }
            var n, i, r = this,
                o = [],
                s = [],
                a = [],
                l = [],
                c = !0;
            for ("undefined" == typeof e && (e = r._requests, r._requests = []), n = 0; n < e.length; n += 1) e[n].request.id = n, e[n].secure ? (l.push(e[n].request.method), s.push(e[n].request)) : (a.push(e[n].request.method), o.push(e[n].request));
            o.length > 0 && (1 === o.length && (o = o[0]), i = r._url + (c ? "?" + this._end + "[" + a.join() + "]" : ""), r._doJsonPost(i, o, t)), s.length > 0 && (1 === s.length && (s = s[0]), i = r._url + (c ? "?" + this._end + "[" + l.join() + "]" : ""), r._doJsonpGet(i, s, t))
        },
        _handleResponses: function (e, t, n) {
            var i, r, o;
            for (i = 0; i < t.length; i += 1) r = t[i], o = e[r.id], this._handleResponse(o, r, n)
        },
        _handleResponse: function (e, t, n) {
            var i = !t.error,
                r = i ? t.result : t.error.message;
            this._loadingState.exit(), i ? e.success.call(e.scope, r, n) : e.failure.call(e.scope, r, n), e.callback.call(e.scope, i, r, n)
        },
        _getParams: function () {
            var e = this,
                t = Array.prototype.slice.call(arguments),
                n = {
                    request: {
                        jsonrpc: "2.0",
                        method: t.shift()
                    }
                };
            for (n.request.params = []; t.length > 1 && !this._isFunction(t[0]);) n.request.params.push(t.shift());
            return this._isFunction(t[0]) ? (n.success = t[0], n.scope = t[1]) : (n.success = t[0].success, n.failure = t[0].failure, n.callback = t[0].callback, n.scope = t[0].scope, n.secure = !!t[0].secure, n.standalone = !!t[0].standalone), n.success = n.success || function () {}, n.failure = n.failure || function () {
                e.unhandledFailure.trigger.apply(e.unhandledFailure, arguments)
            }, n.callback = n.callback || function () {}, n
        },
        _isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        _isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.apply(e)
        },
        _beforeSend: function (e) {},
        _doJsonPost: function (e, t, n) {
            var i = Weebly.jQuery || require("jquery"),
                r = i.ajax({
                    type: "POST",
                    url: e,
                    cache: !1,
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json",
                    beforeSend: this._beforeSend,
                    data: JSON.stringify(t),
                    headers: {
                        "x-wtok": Weebly.RequestToken
                    }
                }).done(function (e) {
                    var t = r.getResponseHeader("Content-Type");
                    200 !== r.status ? n(!1, 'Expected HTTP response "200 OK", found "' + r.status + " " + r.statusText + '"', r) : 0 !== t.indexOf("application/json") ? n(!1, 'Expected JSON encoded response, found "' + t + '"', r) : n(!0, e, r)
                }).fail(function () {
                    n(!1, "HTTP request failed", r)
                })
        },
        _doJsonpGet: function (e, t, n) {
            e = "https://" + _W.securePrefix + e;
            var i = Weebly.jQuery || require("jquery"),
                r = i.ajax({
                    type: "GET",
                    url: e,
                    cache: !1,
                    jsonpCallback: "WJsonp",
                    dataType: "jsonp",
                    beforeSend: this._beforeSend,
                    data: t,
                    headers: {
                        "x-wtok": Weebly.RequestToken
                    }
                }).done(function (e) {
                    n(!0, e, r)
                }).fail(function () {
                    n(!1, "HTTP request failed", r)
                })
        }
    }, _wAMD.define("vendor/jsonrpc", function (e) {
        return function () {
            var t;
            return t || e.jsonrpc
        }
    }(this)),
    function (e, t) {
        "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("util/backbone-rpc", ["underscore", "backbone", "vendor/jsonrpc"], t) : t(e._, e.Backbone)
    }(this, function (e, t, n) {
        var i = t.sync;
        e.extend(t, {
            sync: function (n, r, o) {
                if (!r.rpc) return i.apply(t, arguments);
                var s;
                switch (n) {
                    case "delete":
                        n = "destroy";
                    case "create":
                    case "update":
                    case "patch":
                        s = o.attrs || r.toJSON(o);
                        break;
                    case "read":
                        if (r.rpc && "read" == n) {
                            o = e.extend({}, e.omit(o, "data"), o.data), s = e.extend({
                                filter: []
                            }, o);
                            var a = r.keydefs || r.model.prototype.keydefs;
                            if (a.PRIMARY)
                                for (var l = 0; l < a.PRIMARY.length; l++) {
                                    var c = a.PRIMARY[l];
                                    void 0 == r.get(c) || e.findWhere(s.filter, {
                                        property: c
                                    }) || s.filter.push({
                                        property: c,
                                        value: r.get(c)
                                    })
                                }
                        }
                        break;
                    default:
                        console.warn(n + " params not defined for this model ", r), s = o.attrs || r.toJSON()
                }
                if (r.rpc[n]) {
                    var u = r.rpc[n](s);
                    return u.done(function (e) {
                        return e.success === !1 ? o.error(e) : o.success(e)
                    }), u.fail(function (e) {
                        return o.error(e)
                    }), u
                }
                console.warn(n + " not defined for this model ", r)
            }
        })
    }),
    function (e) {
        e.ns = function (e, t) {
            for (var t = t || window, n = e.split("."), i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                "string" != typeof o ? t = o : (t[o] || (t[o] = {}), t = t[o])
            }
            return t
        }, e.setup_rpc = function (t) {
            var n = e.ns(t.namespace),
                i = new jsonrpc.JsonRpc(t.url),
                r = e.jQuery || require("jquery"),
                o = function (e, t, n, o, s) {
                    return function () {
                        var o = Array.prototype.slice.call(arguments);
                        if (o.length < t) return void console.error("Wrong number of args for " + e);
                        n = !!n, o.unshift(e);
                        var a = r.Deferred();
                        return o.push({
                            success: a.resolve,
                            failure: a.reject,
                            scope: a,
                            secure: n,
                            standalone: s
                        }), i.call.apply(i, o), a
                    }
                };
            for (var s in t.actions)
                if (t.actions.hasOwnProperty(s))
                    for (var a = e.ns(s, n), l = t.actions[s] || [], c = 0; c < l.length; c++) {
                        var u = l[c];
                        a[u.name] = o(s + "::" + u.name, u.len, u.secure, u.multiple, u.standalone)
                    }
        }, e.setup_model_rpc = function (t) {
            var n = e.ns(t.rpc_namespace),
                i = e.ns(t.model_namespace),
                r = e.ns(t.collection_namespace),
                o = e.ns(t.bootstrap_namespace);
            _.extend(i, t.models), _.extend(r, t.collections), _.extend(o, t.bootstrap);
            for (var s in r) n[s] && (r[s].rpc = n[s]);
            for (var s in i)
                if (n[s]) {
                    i[s].rpc = n[s];
                    var a = i[s].relations;
                    if (a)
                        for (var l = 0; l < a.length; l++) {
                            var c = a[l];
                            r[c.relatedModel] && (c.collectionType = c.relatedModel + "Collection")
                        }
                }
        }
    }(window.Weebly || {}), _wAMD.define("backbone-all", ["backbone", "backbone-pageable", "backbone-validation", "backbone-relational", "backbone-marionette", "util/backbone-prevent", "util/backbone-rpc"], function (e) {
        var t = {},
            n = e.RelationalModel.extend;
        return e.Relational.store.addModelScope(t), e.RelationalModel.extend = function (e, i) {
            var r = n.apply(this, arguments),
                o = e._class;
            return o && (o = o.split("."), o = o[o.length - 1], t[o] = r), r
        }, e.Wreqr.Handlers.prototype.removeHandlers = function (e) {
            for (var t = 0; t < e.length; t++) this.removeHandler(e[t])
        }, e
    }), _wAMD.define("site/published/app", ["backbone-all"], function (e) {
        var t = new e.Marionette.Application;
        return t.addRegions({
            contentRegion: "#wsite-content"
        }), t
    }), _wAMD.define("editor/page-manager/entities/Defaults", ["underscore"], function (e) {
        var t = {
            "for": function (t) {
                var n = ["blog", "link", "store", "category", "product"],
                    i = e.contains(n, t) ? this[t] : this.page;
                return i.layout = i.layout || getDefaultPageType(currentThemeData, Weebly.view.isMobileView), i
            },
            page: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_2"),
                kind: "page"
            },
            link: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_3"),
                kind: "page",
                extlink: "http://"
            },
            blog: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_4"),
                kind: "blog"
            },
            store: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_5"),
                kind: "store",
                layout: "no-header",
                store_page_kind: "category",
                store_page_kind_id: "1"
            },
            category: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_6"),
                kind: "store",
                layout: "no-header",
                store_page_kind: "category"
            },
            product: {
                title: _W.stl("javascript.editor.page-manager.entities.Defaults_7"),
                kind: "store",
                layout: "no-header",
                store_page_kind: "product"
            }
        };
        return t
    }), _wAMD.define("editor/page-manager/entities/PageHash", ["underscore"], function (e) {
        var t = {
            initialize: function (e) {
                return this.length = 0, this.items = {}, e.length > 0 && this.flatten(e), this
            },
            flatten: function (e) {
                var t = this;
                e.each(function (e) {
                    t.add(e), t.flatten(e.get("children"))
                })
            },
            toJSON: function () {
                return hash = {}, e.each(this.items, function (e) {
                    hash[e.id] = e.toJSON()
                }), hash
            },
            get: function (e) {
                return this.items[e]
            },
            add: function (e) {
                this.items[e.id] || (this.length += 1, this.items[e.id] = e)
            },
            remove: function (e) {
                this.length -= 1, delete this.items[e.id]
            },
            each: function (t) {
                return e.each(this.items, function (e, n) {
                    t.call(null, e, n)
                }), this
            },
            some: function (t) {
                return e.some(this.items, function (e, n) {
                    return t.call(null, e, n)
                })
            },
            map: function (t) {
                return e.map(this.items, function (e, n) {
                    return t.call(null, e, n)
                })
            },
            find: function (t) {
                return e.find(this.items, function (e, n) {
                    return t.call(null, e, n)
                })
            }
        };
        return t
    }), _wAMD.define("analytics-js/js/sender", ["underscore"], function (e) {
        var t = {
                GALib: "//www.google-analytics.com/analytics.js",
                SPLib: "//d383nfj8voyf25.cloudfront.net/2.5.3/sp.js",
                SPEndpoint: "ec.weebly.com",
                GATrackerName: "_w",
                SPTrackerName: "_w"
            },
            n = function (n) {
                e.extend(this, t, {
                    GAID: null,
                    SPID: null,
                    uidFn: function () {
                        return null
                    },
                    contextFn: function () {
                        return null
                    },
                    cookieDomain: document.location.hostname,
                    GAColumnMapping: {},
                    dontRecord: !1
                }, n), this.gaCommerceLoaded = !1, this.hasUID = !1, this.lastPageView = null, this.trackers = {
                    GA: "ga",
                    SP: "_wsp"
                }, this.initialize()
            };
        return e.extend(n.prototype, {
            trackEvent: function (e, t, n, i) {
                i = i || {};
                var r = i.contexts || {};
                i.model && (r.context_changeset = this.modelChangelog(i.model)), r = this.buildContext(r), this.identify(), this.dontRecord || (this.trackers.GA && window[this.trackers.GA](this.GATrackerName + ".send", "event", e, t, n, r.GA), this.trackers.SP && window[this.trackers.SP]("trackStructEvent:" + this.SPTrackerName, e, t, n, null, null, r.SP))
            },
            pageView: function (e, t, n) {
                this.identify(), n = this.buildContext(n), t = t || document.title;
                var i = e || window.location.pathname + window.location.hash;
                this.lastPageView !== i && (this.dontRecord || (this.trackers.GA && (e && (n.GA.page = e), window[this.trackers.GA](this.GATrackerName + ".send", "pageview", n.GA)), this.trackers.SP && (e && window[this.trackers.SP]("setCustomUrl:" + this.SPTrackerName, e), window[this.trackers.SP]("trackPageView:" + this.SPTrackerName, t, n.SP)), this.lastPageView = i))
            },
            trackPurchase: function (t, n) {
                !this.gaCommerceLoaded && this.trackers.GA && (window[this.trackers.GA](this.GATrackerName + ".require", "ec"), this.gaCommerceLoaded = !0), this.identify();
                var i = this.buildContext();
                this.dontRecord || (this.trackers.GA && (window[this.trackers.GA](this.GATrackerName + ".set", "&cu", t.currency), e.each(n, function (e) {
                    window[this.trackers.GA](this.GATrackerName + ".ec:addProduct", {
                        id: e.id,
                        name: e.name,
                        price: e.price,
                        quantity: e.quantity || 1
                    })
                }, this), window[this.trackers.GA](this.GATrackerName + ".ec:setAction", "purchase", {
                    id: t.id,
                    revenue: t.total,
                    tax: t.tax
                }), window[this.trackers.GA](this.GATrackerName + ".send", "event", "billing", "purchase")), this.trackers.SP && (window[this.trackers.SP]("addTrans:" + this.SPTrackerName, t.id, null, t.total, t.shipping || "0.00", t.city || null, t.state || null, t.country, t.currency, i.SP), e.each(n, function (e) {
                    window[this.trackers.SP]("addItem:" + this.SPTrackerName, t.id, e.id, e.name, null, e.price, e.quantity || 1)
                }, this), window[this.trackers.SP]("trackTrans:" + this.SPTrackerName)))
            },
            buildContext: function (t) {
                var n = this.contextFn() || {};
                e.isObject(t) && (n = e.extendOwn({}, n, t));
                var i = e.flatten(e.values(n), !0),
                    r = {};
                return e.each(n, function (t, n) {
                    e.isObject(t) && e.each(t.data, function (t, i) {
                        i = n + ":" + i, e.has(this.GAColumnMapping, i) && (i = this.GAColumnMapping[i], r[i] = t)
                    }, this)
                }, this), {
                    GA: r,
                    SP: i
                }
            },
            initialize: function () {
                var t = function (e) {
                    var t = document.createElement("script");
                    t.async = 1, t.src = e;
                    var n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(t, n)
                };
                if (this.GAID) {
                    var n = window.GoogleAnalyticsObject = window.GoogleAnalyticsObject || this.trackers.GA;
                    this.trackers.GA = n, void 0 === window[n] && (window[n] = function () {
                        (window[n].q = window[n].q || []).push(arguments)
                    }, window[n].l = +new Date, t(this.GALib)), window[this.trackers.GA]("create", {
                        trackingId: this.GAID,
                        name: this.GATrackerName,
                        cookieDomain: this.cookieDomain
                    })
                } else this.trackers.GA = null;
                if (this.SPID)
                    if (e.isFunction(window[this.trackers.SP])) window[this.trackers.SP]("newTracker", this.SPTrackerName, this.SPEndpoint, {
                        appId: this.SPID,
                        cookieDomain: this.cookieDomain,
                        post: !0,
                        contexts: {
                            webPage: !0,
                            gaCookies: !0
                        }
                    });
                    else {
                        var i = this.trackers.SP;
                        window.GlobalSnowplowNamespace = window.GlobalSnowplowNamespace || [], window.GlobalSnowplowNamespace.push(this.trackers.SP), window[i] = function () {
                            (window[i].q = window[i].q || []).push(arguments)
                        }, window[this.trackers.SP]("newTracker", this.SPTrackerName, this.SPEndpoint, {
                            appId: this.SPID,
                            cookieDomain: this.cookieDomain,
                            post: !0,
                            contexts: {
                                webPage: !0,
                                gaCookies: !0
                            }
                        }), t(this.SPLib)
                    }
                else this.trackers.SP = null
            },
            identify: function (e) {
                (!this.HasUID || e) && (e || (e = this.uidFn()), e && (this.HasUID = !0, this.trackers.GA && window[this.trackers.GA](this.GATrackerName + ".set", "&uid", e), this.trackers.SP && window[this.trackers.SP]("setUserId:" + this.SPTrackerName, e)))
            },
            wrapData: function (e, t, n) {
                return {
                    schema: "iglu:com.weebly/" + e + "/jsonschema/" + t,
                    data: n
                }
            },
            modelChangelog: function (t) {
                var n = t.changedAttributes(),
                    i = e.map(n, function (e, n) {
                        var i = t.previous(n);
                        return "" === e && (e = null), "" === i && (i = null), e == i ? null : this.wrapData("context_changeset", "2-0-0", {
                            key: n,
                            to: e,
                            from: i
                        })
                    }, this);
                return i = e.filter(i, e.isObject)
            }
        }), n
    }), _wAMD.define("analytics/Tracking", ["jquery", "underscore", "analytics-js/js/sender"], function (e, t, n) {
        if (window._W && window._W.Tracking) return window._W.Tracking;
        var i, r = "UA-70991823-1",
            o = {
                "context_base:mode": "dimension1",
                "context_base:site_id": "dimension2",
                "context_site:page_id": "dimension3"
            },
            s = ["headerGroup", "carbonHomepageV2Group", "accessPageGroup", "featuresLandingPages"],
            a = "1-0-1",
            l = function (e, t) {
                var n, i = t.length;
                for (n = 0;
                    "object" == typeof e && i > n; n++) e = e[t[n]];
                return e
            },
            c = function (e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var n = e[t];
                        (null === n || void 0 === n || "number" == typeof n && isNaN(n)) && delete e[t]
                    }
            },
            u = document.location.hostname;
        (i = u.match(/\.weebly\.(net|com)$/)) && (u = i[0]);
        var h = function (e) {
                return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
            },
            d = -1 != document.cookie.indexOf("force-automated-segment"),
            f = new n({
                GAID: r,
                SPID: "w1",
                GAColumnMapping: o,
                cookieDoomain: u,
                dontRecord: d,
                uidFn: function () {
                    var e = h("wuid");
                    return !e && _W.Permissions instanceof Object && (e = _W.Permissions.true_user_id), !e && window._wctx instanceof Object && (e = window._wctx.user_id), e || (e = window.userID), e
                },
                trackLegacyPageView: function () {
                    for (var e = ["send", "pageview"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                    window.ga.apply(window, e)
                },
                contextFn: function () {
                    var e = {},
                        n = this.wrapData("context_base", "1-0-0", {
                            domain: document.domain,
                            language: l(_W, ["userLang"]),
                            mode: "unknown",
                            location: window.location.pathname
                        });
                    e.context_base = n;
                    var i = {};
                    if (_W.LANDING) n.data.mode = "landing", t.isObject(window.abTracking) && t.each(s, function (e) {
                        t.has(window.abTracking, e) && (i[e] = window.abTracking[e])
                    }, this);
                    else if (_W.Home instanceof Object) n.data.mode = "userhome";
                    else if (_W.EDITOR) {
                        n.data.mode = "editor";
                        var r = null;
                        _W.Location instanceof Object && (r = _W.Location.custom_domain ? _W.Location.custom_domain : _W.Location.weebly_subdomain + ".weebly.com");
                        var o = this.wrapData("context_site", "1-0-2", {
                            site_id: (window.currentSite || l(_W, ["initMainData", "currentSite"])) + "",
                            site_level: l(_W, ["Restrictions", "level"]),
                            published: !!l(_W, ["Restrictions", "published"]),
                            is_trial: !!l(_W, ["Restrictions", "is_trial"]),
                            domain: r,
                            theme: window.currentTheme || l(_W, ["initMainData", "currentTheme"]),
                            source: window.source,
                            owner_id: window.com_userID ? parseInt(window.com_userID, 10) : null
                        });
                        e.context_site = o;
                        var u = _W.pageContext || {};
                        try {
                            if (u.pageID || l(_W, ["initMainData", "pageid"])) {
                                var d = this.wrapData("context_site_page", "1-0-0", {
                                    page_id: u.pageID || l(_W, ["initMainData", "pageid", 1]),
                                    site_id: window.currentSite || l(_W, ["initMainData", "currentSite"]),
                                    kind: u.kind
                                });
                                if ("undefined" == typeof u.kind && "undefined" != typeof l(_W, ["initialRight"])) {
                                    var f = t.map(l(_W, ["initialRight"]), function (e) {
                                        return e.id === l(d, ["data", "page_id"]) ? l(e, ["kind"]) : void 0
                                    }).compact();
                                    f.length > 0 && (d.data.kind = f.first())
                                }
                                e.context_site_page = d
                            }
                        } catch (p) {}
                    } else if (window._wctx instanceof Object) {
                        n.data.mode = "purchasepage";
                        var g = {
                            site_id: window._wctx.site_id ? window._wctx.site_id + "" : null,
                            page_state: window._wctx.page_state,
                            service_id: window._wctx.service_id,
                            user_service_id: window._wctx.user_service_id,
                            refer: window._wctx.refer,
                            type: window._wctx.type,
                            required_level: parseInt(window._wctx.desired_level),
                            selected_level: parseInt(window._wctx.selected_level),
                            recurring_period: parseInt(window._wctx.recurring_period),
                            restriction_id: window._wctx.restriction_id,
                            referer_cookie: h("referer")
                        };
                        c(g), e.context_purchasepage = this.wrapData("context_purchasepage", "1-0-0", g)
                    } else if (window.Bootstrap instanceof Object) {
                        n.data.mode = "onboarding";
                        var o = this.wrapData("context_site", "1-0-0", {
                            site_id: l(window.Bootstrap, ["siteId"]) + "",
                            site_level: l(_W, ["Restrictions", "level"]),
                            published: !1,
                            is_trial: !1
                        });
                        e.context_site = o
                    }
                    return t.size(i) > 0 && (e.context_ab = this.wrapData("context_ab", a, i)), e
                }
            });
        return window._W = window._W || {}, window._W.Tracking = f, f
    }), _wAMD.define("editor/page-manager/entities/Pages", ["jquery", "underscore", "backbone-all", "./Defaults", "./PageHash", "analytics/Tracking"], function (e, t, n, i, r, o) {
        var s = n.Model.extend({
                defaults: function (e) {
                    return this.isNew() && e ? i["for"](e) : {}
                },
                initialize: function (e) {
                    e = e || {}, this.set(this.defaults(e.page_kind)), this.set("page_kind", this.normalizedKind()), this.initChildren(), this.on("change", function () {
                        var e = t.keys(this.changedAttributes()),
                            n = ["title", "hidden", "pwprotected", "membership_required", "nav_menu"],
                            i = t.intersection(n, e).length > 0;
                        i && this.trigger("changed", this);
                        var r = ["title", "hidden", "layout", "store_page_kind_id"],
                            o = t.intersection(r, e).length > 0;
                        o && this.trigger("page:go", this)
                    }, this), this.on("add", function () {
                        o.trackEvent("page", "add", this.get("page_kind"))
                    }, this), this.on("destroy", function () {
                        o.trackEvent("page", "delete", this.get("page_kind"))
                    }, this), this.listenTo(this.get("children"), {
                        changed: function (e) {
                            this.trigger("changed", e)
                        },
                        "page:go": function (e) {
                            this.trigger("page:go", e)
                        },
                        removed: function (e) {
                            this.trigger("removed", e)
                        }
                    }), this.on("change", this.onModelChange)
                },
                onModelChange: function () {
                    var e = t.keys(this.changedAttributes()),
                        n = ["title", "hidden", "pwprotected", "membership_required"],
                        i = t.intersection(n, e).length > 0;
                    i && this.trigger("changed", this);
                    var r = ["title", "hidden", "layout"],
                        o = t.intersection(r, e).length > 0;
                    o && this.trigger("page:go", this)
                },
                initChildren: function () {
                    var e = this.get("children");
                    e instanceof a == !1 && this.set("children", new a(e, {
                        subcollection: !0
                    }))
                },
                isCommercePage: function () {
                    return t.contains(["store", "category", "product"], this.get("page_kind"))
                },
                hasCommerceModel: function (e) {
                    return this.hasCategory(e) || this.hasProduct(e)
                },
                hasProduct: function (e) {
                    return this.get("store_page_kind_id") == e.get("site_product_id")
                },
                hasCategory: function (e) {
                    return this.get("store_page_kind_id") == e.get("site_category_id")
                },
                commerceCleanup: function () {
                    var e = this;
                    Weebly.Editor.RPC.Page.cleanupCommercePage(e.id).done(function () {
                        e.set({
                            hidden: 1,
                            kind: "page",
                            page_kind: "page",
                            store_page_kind: null,
                            store_page_kind_id: null
                        })
                    })
                },
                normalizedKind: function () {
                    var e = this.get("kind"),
                        t = e;
                    return this.get("extlink") ? t = "link" : "store" == e && (t = this.get("store_page_kind"), "category" == t && 1 == this.get("store_page_kind_id") && (t = "store")), t
                },
                unescapedAttr: function (t) {
                    var n = this.get(t);
                    return e("<div/>").html(n).text()
                },
                sync: function (e, n, i) {
                    var r = n.hasChanged("store_page_kind_id");
                    n.collection && n.set("order", n.collection.indexOf(n) + 1), Weebly.Editor.RPC.Page.savePage(currentSite, n.id, n.attributes).then(function (e) {
                        var i = t.object(t.map(e, function (e, t) {
                                return "0" === e && (e = 0), "1" === e && (e = 1), [t, e]
                            })),
                            o = n.isNew(),
                            s = o ? "save" : "sync";
                        return n.set(i), n.trigger(s, n), r && n.trigger("page:go", n), n
                    })
                },
                destroy: function (e) {
                    return this.trigger("destroy", this, this.collection, this.collection.indexOf(this)), Weebly.Editor.RPC.Page.removePage(currentSite, this.id)
                },
                copy: function () {
                    var e = this,
                        n = Weebly.Editor.RPC.Page.copyPage(currentSite, e.id);
                    return n.then(function (n) {
                        var i = t.extend(e.toJSON(), {
                            id: n.page_id,
                            children: []
                        });
                        return new s(i)
                    })
                },
                toJSON: function (e) {
                    var n = t.clone(this.attributes);
                    return n.children = this.get("children").toJSON(), n
                }
            }),
            a = n.Collection.extend({
                model: s,
                initialize: function (e, t) {
                    t = t || {}, t.subcollection || this.on({
                        "save add": function (e) {
                            e.isNew() || this.getHash().add(e)
                        },
                        removed: function (e) {
                            this.getHash().remove(e)
                        }
                    }, this), this.on("destroy", this.relocateChildren, this)
                },
                saveHierarchy: function (e) {
                    return this.mirrorHierarchy(e), Weebly.Editor.RPC.Page.saveHierarchy(currentSite, e)
                },
                mirrorHierarchy: function (e) {
                    function n(e, r) {
                        var o = 1;
                        t.each(r, function (t) {
                            var r = i.get(t.id);
                            r.collection.remove(r, {
                                silent: !0
                            }), e.add(r, {
                                silent: !0
                            }), r.set("order", o++), n(r.get("children"), t.children)
                        })
                    }
                    var i = this.getHash();
                    n(this, e)
                },
                relocateChildren: function (e, t, n) {
                    for (var i = e.get("children"), r = i.at(0); r;) i.remove(r), t.add(r, {
                        at: n++
                    }), r = i.at(0);
                    this.trigger("removed", e)
                },
                onSitePasswordChange: function (e, t) {
                    var n = this.getHash();
                    if (!t) return void n.each(function (e) {
                        e.set("pwprotected", 0)
                    });
                    var i = n.find(function (e) {
                        return e.get("pwprotected")
                    });
                    e || i || n.each(function (e) {
                        e.set("pwprotected", 1)
                    })
                },
                reset: function (e, t) {
                    delete this.pageHash, n.Collection.prototype.reset.call(this, e, t)
                },
                getHash: function () {
                    return this.pageHash = this.pageHash || r.initialize(this), this.pageHash
                },
                getPage: function (e) {
                    return this.getHash().get(e)
                },
                getHomepage: function () {
                    return this.at(0)
                },
                cleanupCommercePages: function (e) {
                    this.getHash().each(function (t) {
                        t.isCommercePage() && t.hasCommerceModel(e) && t.commerceCleanup()
                    })
                }
            });
        return {
            PageModel: s,
            PageCollection: a
        }
    }), _wAMD.define("editor/page-manager/pages", ["./entities/Pages"], function (e) {
        var t = function () {
            return new e.PageCollection(Weebly.initialRight)
        };
        return t()
    }), ! function (e) {
        var t = function (e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function (t, n, i) {
                var r, o, s, a, l;
                for (this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, s = this.options.trigger.split(" "), l = s.length; l--;) a = s[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (r = "hover" == a ? "mouseenter" : "focus", o = "hover" == a ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
                this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function (t) {
                return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function (t) {
                var n, i = e.fn[this.type].defaults,
                    r = {};
                return this._options && e.each(this._options, function (e, t) {
                    i[e] != t && (r[e] = t)
                }, this), n = e(t.currentTarget)[this.type](r).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", void(this.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show))) : n.show()
            },
            leave: function (t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", void(this.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide))) : n.hide()
            },
            show: function () {
                var t, n, i, r, o, s, a = e.Event("tooltipshow");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                    switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), i = t[0].offsetWidth, r = t[0].offsetHeight, o) {
                        case "bottom":
                            s = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "top":
                            s = {
                                top: n.top - r,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "left":
                            s = {
                                top: n.top + n.height / 2 - r / 2,
                                left: n.left - i
                            };
                            break;
                        case "right":
                            s = {
                                top: n.top + n.height / 2 - r / 2,
                                left: n.left + n.width
                            }
                    }
                    this.applyPlacement(s, o), this.$element.trigger("shown")
                }
            },
            applyPlacement: function (e, t) {
                var n, i, r, o, s = this.tip(),
                    a = s[0].offsetWidth,
                    l = s[0].offsetHeight;
                s.offset(e).addClass(t).addClass("in"), n = s[0].offsetWidth, i = s[0].offsetHeight, "top" == t && i != l && (e.top = e.top + l - i, o = !0), "bottom" == t || "top" == t ? (r = 0, e.left < 0 && (r = -2 * e.left, e.left = 0, s.offset(e), n = s[0].offsetWidth, i = s[0].offsetHeight), this.replaceArrow(r - a + n, n, "left")) : this.replaceArrow(i - l, i, "top"), o && s.offset(e)
            },
            replaceArrow: function (e, t, n) {
                this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
            },
            setContent: function () {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            },
            hide: function () {
                function t() {
                    var t = setTimeout(function () {
                        n.off(e.support.transition.end).detach()
                    }, 500);
                    n.one(e.support.transition.end, function () {
                        clearTimeout(t), n.detach()
                    })
                }
                var n = this.tip(),
                    i = e.Event("tooltiphide");
                return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(), this.$element.trigger("hidden"), this)
            },
            fixTitle: function () {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            },
            hasContent: function () {
                return this.getTitle()
            },
            getPosition: function () {
                var t = this.$element[0];
                return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function () {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
            },
            tip: function () {
                return this.$tip = this.$tip || e(this.options.template)
            },
            arrow: function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function () {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function () {
                this.enabled = !0
            },
            disable: function () {
                this.enabled = !1
            },
            toggleEnabled: function () {
                this.enabled = !this.enabled
            },
            toggle: function (t) {
                var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
                n.tip().hasClass("in") ? n.hide() : n.show()
            },
            destroy: function () {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var n = e.fn.tooltip;
        e.fn.tooltip = function (n) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("tooltip"),
                    o = "object" == typeof n && n;
                r || i.data("tooltip", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, e.fn.tooltip.noConflict = function () {
            return e.fn.tooltip = n, this
        }
    }(window.jQuery), ! function (e) {
        var t = function (e, t) {
            this.init("popover", e, t)
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function () {
                var e = this.tip(),
                    t = this.getTitle(),
                    n = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
            },
            hasContent: function () {
                return this.getTitle() || this.getContent()
            },
            getContent: function () {
                var e, t = this.$element,
                    n = this.options;
                return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content")
            },
            tip: function () {
                return this.$tip || (this.$tip = e(this.options.template)), this.$tip
            },
            destroy: function () {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var n = e.fn.popover;
        e.fn.popover = function (n) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("popover"),
                    o = "object" == typeof n && n;
                r || i.data("popover", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.fn.popover.noConflict = function () {
            return e.fn.popover = n, this
        }
    }(window.jQuery), _wAMD.define("vendor/bootstrap/popover", function () {}),
    function (e) {
        function t() {
            return T() ? (E || (E = W("editor-site-shared/relay"), P = W("site/editor/relay-constants")), !0) : !1
        }

        function n(e) {
            var t = e.closest("." + L);
            return t.length ? t : e.parent()
        }

        function i(e) {
            var t = e.find("." + B);
            return t.length ? t : e.find("a").first()
        }

        function r(e) {
            var t = e.find("." + Y);
            return t.length ? t : (t = e.find("." + H), t.length ? t : e.find("li"))
        }

        function o(e) {
            var t = e.closest("." + V);
            return t.length ? t : e.parent()
        }

        function s(e) {
            return e.find("." + V).first()
        }

        function a(e) {
            var t = e.find("." + $);
            return t.length ? t : e.find("li")
        }

        function l(e) {
            var t = e.find("." + G);
            return t.length ? t : e.find("a")
        }

        function c(t) {
            if (window.navFlyoutMenu) {
                var n = window.currentPage || j,
                    o = window.navFlyoutMenu.getMainList(),
                    a = o.children(),
                    c = e("body").find("#" + ne),
                    u = e("body").find("#" + X),
                    h = I && I.hasCustomMembership,
                    f = I && I.hasCustomMinicart,
                    p = a.filter(function () {
                        return !!e(this).find("#" + X).length
                    });
                p.length || (p = void 0);
                var g, m, w = window.getCartCount(),
                    _ = window.location.host,
                    b = window.location.pathname,
                    k = window._W.stl("javascript.cartText") + " (<span id='" + te + "'></span>)";
                _.indexOf(".checkout.weebly.com") > -1 || _.indexOf(".checkout.editmysite.com") > -1 || b.indexOf("store/checkout") > -1 || "object" == typeof Weebly && Weebly.EDITOR && !Weebly.COMMERCE_ENABLED || "object" != typeof Weebly || !Weebly.Commerce || "boolean" != typeof Weebly.Commerce.hasCart || "object" == typeof Weebly && Weebly.Commerce && Weebly.Commerce.hasCart === !1 ? p && (p.remove(), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()) : (p || (f ? (u.html(k), p = void 0) : p = x(k), g = f ? u : i(p), g.attr("id", X).css("position", "relative"), T() && (m = W("config"), m.chromeless || (g = f ? u.parent() : d(p), g.attr("data-content", window._W.utl("javascript.editor.cartNotification")).popover({
                    trigger: "hover",
                    placement: "bottom",
                    container: "#_editor-ui",
                    delay: {
                        show: 500,
                        hide: 100
                    }
                }))), g = f ? u.parent() : d(p), g.addClass(ee).css("position", "relative"), A = f ? u : p, window.reportCartNavElement(), f || (o.append(p), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames())), e("#" + te).text(w));
                var C;
                p && f ? C = null : p && (C = d(p));
                var R = a.filter(function () {
                    return !!e(this).find("#" + ne).length
                });
                R.length || (R = void 0);
                var D = Weebly.allowMemberRegistration ? window._W.stl("html.weebly.libraries.flyout_menus_jq_7") : window._W.stl("html.weebly.libraries.flyout_menus_jq_8"),
                    E = W("editor/page-manager/pages"),
                    P = E.some(function (e) {
                        return e.get("membership_required")
                    }),
                    F = T() && (P || Weebly.allowMemberRegistration || Weebly.memberCount > 0 || Weebly.groupCount > 0) && Weebly.showMemberLoginLink,
                    q = window._W && _W.showLogin;
                if (!F && !q || R ? F || q || !R || (R.remove(), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()) : (R = x(D), T() ? R.attr("id", "pgmember-login") : R.attr("id", "member-login"), i(R).attr("id", ne), h || (p && !f ? R.insertBefore(p) : o.append(R)), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()), T() && R) {
                    m = W("config");
                    var z = i(R);
                    z = c.length ? c : z, c.length && z.text(D), m.chromeless || z.attr("data-content", window._W.utl("html.weebly.libraries.flyout_menus_jq_5")).popover({
                        trigger: "hover",
                        placement: "bottom",
                        container: "body",
                        delay: {
                            show: 500,
                            hide: 100
                        }
                    })
                }
                if (!window.DISABLE_NAV_MORE) {
                    var L = O.clone(!0, !0),
                        Y = a.filter(function () {
                            return !!e(this).find("#" + K).length
                        });
                    Y.length || (Y = void 0);
                    var B = !1;
                    Y && (Y.hide(), B = !0);
                    var U;
                    if (B)
                        if (U = d(Y), U[0]._flyoutmenu_destroy) U = U[0]._flyoutmenu_destroy(!0);
                        else {
                            var $ = r(U)[0];
                            $._flyoutmenu_destroy && (U = $._flyoutmenu_destroy(!0))
                        } var G, J, ie, re, oe = [],
                        se = [],
                        ae = !1,
                        le = null;
                    for (ie = 0; ie < t.length; ie++) re = y(t[ie].id, o), re && (re.show(), oe.push(re));
                    for (p && oe.push(p), R && oe.push(R), ie = 0; ie < oe.length; ie++) {
                        re = oe[ie];
                        var ce = d(re),
                            ue = v(ce);
                        if (ie) {
                            if (1 == ie) G = Math.abs(ue[0].top - se[0][0].top) > Math.abs(ue[0].left - se[0][0].left), G && (J = ce.closest(".wsite-nav-vertical"), J.length && (le = J.offset().top + (parseInt(J.css("padding-top"), 10) || 0) + J.height()));
                            else if (G) {
                                if (null !== le && ue[1].top > le) {
                                    ae = !0;
                                    break
                                }
                            } else if (Math.abs(ue[0].top - se[ie - 1][0].top) > 5) {
                                ae = !0;
                                break
                            }
                        } else;
                        se.push(ue)
                    }
                    var he, de, fe, pe = [];
                    if (e("body").toggleClass("wsite-nav-condensed", !!ae), ae) {
                        Y ? Y.show() : (Y = L, i(Y).attr("id", K).css("position", "relative").on("click", !1), R && !h ? Y.insertBefore(R) : p && !f ? Y.insertBefore(p) : o.append(Y));
                        var ge = d(Y).addClass(Z).css("position", "relative"),
                            me = d(oe[0]),
                            ve = null;
                        R && !h && (ve = d(R));
                        var ye = C || ve || ge,
                            we = oe.length - 1;
                        for (p && we--, R && we--, ie = we; ie >= 0; ie--) {
                            var _e = v(me),
                                be = v(ye);
                            if (!(G && be[1].top > le || !G && Math.abs(_e[0].top - be[0].top) > 5)) break;
                            oe[ie].hide(), pe.unshift(ie)
                        }
                        if (0 === pe.length) Y.remove(), e("body").removeClass("wsite-nav-condensed");
                        else if (pe.length == t.length) {
                            for (ie = 0; ie < pe.length; ie++) {
                                var ke = y(t[pe[ie]].id, o);
                                ke && ke.show()
                            }
                            Y.remove(), e("body").removeClass("wsite-nav-condensed")
                        } else {
                            for (var xe, E = W("editor/page-manager/pages"), Me = [], Ce = 0; Ce < pe.length; Ce++) {
                                he = t[pe[Ce]], E.length && (he = E.getPage(he.id).toJSON()), he = e.extend({}, he), he.title_html = he.title, he.membership_required = he["membership-required"], T() && (he.url = "page://" + he.id);
                                var Se = y(he.id, o);
                                Se && (xe = d(Se)[0]._get_sublist()), !xe && U && (xe = !!U.find("#" + N + he.id + " ." + V).length), xe && (he.has_children = !0, he.children = !1), Me.push(he)
                            }
                            var Re = e(M(S("navigation/flyout/list") || S("menu/submenu-main"), {
                                children: Me
                            }));
                            T() && window.processNavLinks(Re), l(Re).each(function () {
                                var r = e(this).closest("[id]"),
                                    a = r.attr("id");
                                if (a) {
                                    a = a.replace(/[^\d]/g, "");
                                    var l;
                                    if (e.each(t, function () {
                                            return this.id === a ? (l = this, !1) : void 0
                                        }), l) {
                                        if (r.is("span." + H) && (r = r.children(), r.unwrap()), de = N + l.id, r.attr("id", de), de.replace(/[^\d]/g, "") == n && r.addClass(Q), fe = i(r), !l.onclick) {
                                            var c = l.url;
                                            if (window.IS_ARCHIVE || c.match(/^http:\/\//)) fe.attr("href", c);
                                            else {
                                                var u = e(e.map(oe, function (e) {
                                                        return e.get()
                                                    })),
                                                    h = i(u.filter("[id*=" + a + "]")),
                                                    f = h.attr("href"),
                                                    p = h.data("membership-required");
                                                f ? fe.attr("href", f) : fe.attr("href", "/" + c), "number" == typeof p && fe.attr("data-membership-required", "" + p)
                                            }
                                            l.target && fe.attr("target", l.target)
                                        }
                                        var g, m = y(l.id, o);
                                        m && (g = d(m)[0]._flyoutmenu_destroy()), !g && U && (g = s(U.find("#" + N + l.id)), g.length || (g = void 0)), g && s(r).replaceWith(g)
                                    }
                                }
                            }), ge.append(Re), window.navFlyoutMenu.addItem(ge)
                        }
                    }
                    if (U)
                        for (ie = 0; ie < pe[0]; ie++) {
                            he = t[ie];
                            var De = y(he.id, o),
                                Te = U.find("#" + N + he.id + " ." + V + ":first");
                            Te.length && (De[0]._flyoutmenu_destroy && De[0]._flyoutmenu_destroy(), De.append(Te), window.navFlyoutMenu.addItem(De))
                        }
                    window.navFlyoutMenu.writeOrderingClassNames()
                }
            }
        }

        function u(e, t, n) {
            var i = e.closest("." + L);
            i.length || (i = e.parent(), i.hasClass(H) && (i = i.parent()));
            var r = h(i, t, n);
            if (r.length >= 2) {
                var o = r.eq(0).offset(),
                    s = r.eq(1).offset(),
                    a = Math.abs(o.left - s.left) - Math.abs(o.top - s.top);
                if (0 !== a) return 0 > a
            }
            return !m(e)
        }

        function h(t, n, i) {
            var r = t.find("." + Y);
            if (r.length) return r;
            var r = t.find("." + H);
            if (r.length) return r;
            var o = [];
            return t.children().each(function (t, r) {
                var s = e(r);
                if (!n || s.hasClass(H) || s.hasClass(Z) || r.id.match(/^pg/) || i && r.id == i) {
                    var a = d(s);
                    a.length && o.push(a[0])
                }
            }), e(o)
        }

        function d(e) {
            if (e.hasClass(H)) {
                var t = e.find("." + Y).first();
                e = t.length ? t : e.children().first()
            }
            return e.hasClass(L) ? void 0 : e
        }

        function f(e) {
            return r(e).add(a(e))
        }

        function p(e) {
            var t = e.closest("." + H).siblings().find("." + Y + ":first-child");
            return t.length ? t : e.parent().hasClass(H) ? e.parent().siblings().children(":first-child") : e.siblings()
        }

        function g(e) {
            var t = e.find("." + U).first();
            if (t.length) return t;
            if (t = e.closest("." + $ + ", ." + Y).find("." + U).first(), t.length) return t;
            if (t = e.find("ul").first(), !t.length) {
                var n = e.next();
                n.hasClass(L) && (t = n.children().first())
            }
            return t.length ? t : void 0
        }

        function m(e) {
            return !e.closest("." + U).length
        }

        function v(e) {
            var t = e.is("a") ? e : e.find("a"),
                n = e.offset(),
                i = {
                    top: n.top + e[0].offsetHeight,
                    left: n.left + e[0].offsetWidth
                };
            if (!t) return [n, i];
            var r, o, s = t.offset(),
                a = {
                    top: s.top + t[0].offsetHeight,
                    left: s.left + t[0].offsetWidth
                };
            return Math.abs(n.left - i.left) < 10 ? (r = s, o = a) : (r = {
                top: Math.min(n.top, s.top),
                left: Math.min(n.left, s.left)
            }, o = {
                top: Math.max(i.top, a.top),
                left: Math.max(i.left, a.left)
            }), [r, o]
        }

        function y(t, n) {
            var i = e("#pg" + t, n);
            return !i.length && F && (i = e("#" + F, n)), i.length ? i : void 0
        }

        function w() {
            if (T()) {
                for (var e = 0; e < document.styleSheets.length; e++) try {
                    if (document.styleSheets[e].title == q + "-theme-css") {
                        var t = document.styleSheets[e],
                            n = t.cssRules || t.rules;
                        return n && n.length > 0
                    }
                } catch (i) {}
                return !1
            }
            return !0
        }

        function b(e) {
            if (w()) e();
            else var t = setInterval(function () {
                w() && (clearInterval(t), e())
            }, 200)
        }

        function k() {
            return x(window._W.stl("html.weebly.libraries.flyout_menus_jq_6"))
        }

        function x(t) {
            return e(M(C(), {
                title_html: t,
                url: "#",
                has_children: !1
            }))
        }

        function M(e, t) {
            var n = W("mustache");
            return n.render(e, t, R())
        }

        function C() {
            return re || (re = S("navigation/item") || S("menu/item")), re
        }

        function S(e) {
            return R()[e]
        }

        function R() {
            return ie || {}
        }

        function D(e) {
            ie = _.extend({}, objectify(e))
        }

        function T() {
            return window.inEditor && window.inEditor()
        }
        window.getCartCount = function () {
            var e = T() ? 0 : "-";
            return e
        };
        var A = null;
        window.getCartNavElement = function () {
            return A
        }, window.reportCartNavElement = function () {};
        var E, P, O, F, j, I, W = window._wAMD && window._wAMD.require || window.require,
            q = window.STYLE_PREFIX || "weebly",
            z = 300,
            H = q + "-nav-handle",
            N = q + "-nav-",
            L = q + "-menu-default",
            Y = q + "-menu-item-wrap",
            B = q + "-menu-item",
            V = q + "-menu-wrap",
            U = q + "-menu",
            $ = q + "-menu-subitem-wrap",
            G = q + "-menu-subitem",
            Q = q + "-nav-current",
            J = q + "-menus",
            K = q + "-nav-more-a",
            Z = q + "-nav-more",
            X = q + "-nav-cart-a",
            ee = q + "-nav-cart",
            te = q + "-nav-cart-num",
            ne = q + "-nav-login-a";
        window.initPublishedFlyoutMenus = function (t, i, r, o, s, a, l) {
            if (j = i, I = l, D(a), O = k(), t.length > 0) {
                var u = function () {
                    F = o;
                    var i = e("<div>", {
                            id: J
                        }).appendTo("body"),
                        r = y(t[0].id);
                    r && (window.navFlyoutMenu = new window.FlyoutMenu(n(r), {
                        relocate: i,
                        aLiId: o
                    }), c(t))
                };
                s ? u() : b(u)
            }
            window.refreshPublishedFlyoutMenus = function () {
                c(t)
            }, e(".wsite-logo img").on("load", window.refreshPublishedFlyoutMenus), e(window).on("load", window.refreshPublishedFlyoutMenus)
        }, window.flyoutMenusRefreshable = !0, window.initEditorFlyoutMenus = function (t, i) {
            F = t, I = i, D(i.templates), b(function () {
                function i() {
                    var e = getTopLevelSummary();
                    if (e.length > 0) {
                        var i = y(e[0].id);
                        if (i) {
                            var r = n(i);
                            r.is("table,tbody,thead,tr") ? window.navFlyoutMenu = null : (window.navFlyoutMenu = new window.FlyoutMenu(r, {
                                relocate: "#" + J,
                                aLiId: t
                            }), O = k(), c(e))
                        } else window.navFlyoutMenu = null
                    }
                }
                if (e.browser.webkit) {
                    var r = e("span." + H);
                    r.hide(), setTimeout(function () {
                        r.show(), i()
                    }, 0)
                } else i()
            })
        }, window.refreshNavCondense = function (e) {
            "object" == typeof e && _.extend(window.Weebly, e), !window.navFlyoutMenu || Weebly.view && Weebly.view.isMobileView || c(getTopLevelSummary())
        }, window.disableFlyouts = !1, window.FlyoutMenu = function (n, r) {
            function s(n) {
                function s(e) {
                    w && M && e.preventDefault()
                }

                function c() {
                    return window.disableFlyouts ? !1 : (m.mouseoverItems.push(n), R++, S = !0, void(C || M || x && (n.data("hasChildren", !0), p(n).each(function (e, t) {
                        t._flyoutmenu_contract && t._flyoutmenu_contract()
                    }), f(), n.data("isExpanded", !0))))
                }

                function h() {
                    if (window.disableFlyouts) return !1;
                    if (S = !1, C) {
                        var e = R;
                        setTimeout(function () {
                            R == e && C && !M && (y(), n.data("isExpanded", !1))
                        }, _)
                    }
                }

                function d() {
                    return window.disableFlyouts ? !1 : void R++
                }

                function f() {
                    M = !0;
                    var i = {
                            wrapper: k,
                            duration: z,
                            complete: function () {
                                if (M = !1, C = !0, S ? (n[0]._flyoutmenu_contract = y, n[0]._flyoutmenu_hide = function () {
                                        M = !1, C = !1, S = !1, n[0]._flyoutmenu_contract = null, n[0]._flyoutmenu_hide = null, k.hide()
                                    }) : y(), t()) {
                                    var i = e(this),
                                        r = i.offset();
                                    E.trigger(P.EVENTS.SUBNAV_SHOWN, {
                                        top: r.top,
                                        left: r.left,
                                        width: i.outerWidth(),
                                        height: i.outerHeight()
                                    })
                                }
                            }
                        },
                        o = v(n);
                    k.css("left", -1e4), k.show();
                    var s = k.offsetParent(),
                        a = s.is("body") ? {
                            top: 0,
                            left: 0
                        } : s.offset();
                    k.hide(), x.show();
                    var l;
                    if (u(n, !0, r.aLiId)) D = !1, k.css("top", -a.top + o[0].top), l = k.outerWidth(), o[1].left + l > e("body").outerWidth() ? (T = !1, k.css("left", -a.left + o[0].left - l), i.direction = "right", x.show("slide", i)) : (T = !0, k.css("left", -a.left + o[1].left), i.direction = "left", x.show("slide", i));
                    else {
                        D = !0, k.css("top", -a.top + o[1].top), l = k.outerWidth();
                        var c = k.outerHeight();
                        o[0].left + l > e("body").outerWidth() ? k.css("left", -a.left + o[1].left - l) : k.css("left", -a.left + o[0].left);
                        var h;
                        if (n.parentsUntil("body").filter(function () {
                                return "fixed" === e(this).css("position")
                            }).length > 0) {
                            var d = e(window);
                            h = d.height() + d.scrollTop()
                        } else h = e(document).height();
                        var f = parseInt(k.css("top"), 10) - c - n.outerHeight();
                        o[1].top + c > h && f > 0 ? (k.css("top", f + "px"), i.direction = "down", A = !0) : (i.direction = "up", A = !1), x.show("slide", i)
                    }
                }

                function y(e) {
                    if (!window.disableFlyouts && n.parent().length) {
                        e && (S = !1), M = !0, n[0]._flyoutmenu_contract = null, n[0]._flyoutmenu_hide = null;
                        var i = {
                            wrapper: k,
                            duration: z,
                            complete: function () {
                                M = !1, C = !1, S && f(), t() && E.trigger(P.EVENTS.SUBNAV_HIDDEN)
                            }
                        };
                        D ? (A ? i.direction = "down" : i.direction = "up", x.hide("slide", i)) : T ? (i.direction = "left", x.hide("slide", i)) : (i.direction = "right", x.hide("slide", i))
                    }
                }
                n.css("position", "relative"), i(n).add(l(n)).css("position", "relative");
                var k, x, M = !1,
                    C = !1,
                    S = !1,
                    R = 0,
                    D = !1,
                    T = !1,
                    A = !1;
                x = g(n), x && (k = o(x), k.css("position", "absolute"), k.hide(), b ? (k.on("mouseover", c), k.on("mouseout", h), k.on("click", function (e) {
                    s(e)
                })) : (k.on("mouseover", d), k.on("click", function (e) {
                    s(e)
                }))), n.on("mouseover", c), n.on("mouseout", h), n.on("click", function (e) {
                    s(e)
                }), n[0]._flyoutmenu_destroy = function (e) {
                    if (n.off("mouseover", c), n.off("mouseout", h), n.off("click", s), k) {
                        b ? (k.off("mouseover", c), k.off("mouseout", h), k.off("click", s)) : (k.off("mouseover", d), k.off("click", s)), a(k).each(function () {
                            this._flyoutmenu_destroy()
                        }), e && k.detach();
                        var t = k;
                        return k = null, x = null, t
                    }
                }, n[0]._get_sublist = function () {
                    return x
                }
            }

            function c() {
                var t = 1;
                h(n).each(function () {
                    this.className = this.className.replace(new RegExp(N + "\\d+"), "");
                    var n = e(this);
                    "none" != n.css("display") && (n.addClass(N + t), t++)
                })
            }
            var m = this;
            m.mouseoverItems = [], n = e(n), r = r || {};
            var y, w = "ontouchstart" in window,
                _ = 1e3 * (r.delay || .5),
                b = r.relocate ? e(r.relocate) : !1;
            this.contract = function () {
                y.each(function (e, t) {
                    t._flyoutmenu_contract && t._flyoutmenu_contract(!0)
                })
            }, this.hideSubmenus = function () {
                y.each(function (e, t) {
                    t._flyoutmenu_hide && t._flyoutmenu_hide()
                })
            }, this.destroy = function () {
                y.each(function (e, t) {
                    t._flyoutmenu_destroy && t._flyoutmenu_destroy()
                })
            }, this.addItem = function (t) {
                t = e(t);
                var n = d(t);
                if (n.length) {
                    s(n);
                    var i = g(n);
                    i && a(i).each(function () {
                        s(e(this))
                    }), b && i && b.append(o(i)), y = y.add(n), c()
                }
            }, this.removeItem = function (t) {
                t = e(t);
                var n = d(t);
                n.length && (n[0]._flyoutmenu_destroy && n[0]._flyoutmenu_destroy(!0), n.remove(), y = y.not(n), c())
            }, this.getMainList = function () {
                return n
            }, this.writeOrderingClassNames = c, y = f(n), y.each(function () {
                s(e(this))
            }), c(), b && h(n).each(function (t, n) {
                var i = g(e(n));
                i && b.append(o(i))
            })
        }, window.whenThemeCSSLoaded || (window.whenThemeCSSLoaded = b), Weebly.Menus = {
            inVerticalList: u
        };
        var ie, re;
        window.objectify = function (e) {
            return _.isEmpty(e) ? {} : e
        }
    }(Weebly.jQuery), _wAMD.define("legacy/flyout_menus_jq", ["editor/page-manager/pages", "util/effect-slide-custom", "vendor/bootstrap/popover", "mustache"], function () {}),
    function (e) {
        e(document).ready(function () {
            e("a[rel=lightbox]").removeAttr("rel").add('a[rel^="lightbox["]').addClass("w-fancybox"), e.fn.fancybox && (e(".w-fancybox").fancybox({
                prevEffect: "none",
                nextEffect: "none",
                padding: 10,
                helpers: {
                    title: {
                        type: "inside"
                    },
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                }
            }), window.lightboxLoaded = !0)
        })
    }(Weebly.jQuery), _wAMD.define("site/published/fancybox", function () {}),
    function (e, t, n, i) {
        var r = n(e),
            o = n(t),
            s = n.fancybox = function () {
                s.open.apply(this, arguments)
            },
            a = null,
            l = t.createTouch !== i,
            c = function (e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            u = function (e) {
                return e && "string" === n.type(e)
            },
            h = function (e) {
                return u(e) && e.indexOf("%") > 0
            },
            d = function (e) {
                return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
            },
            f = function (e, t) {
                var n = parseInt(e, 10);
                return t && h(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
            },
            p = function (e, t) {
                return f(e, t) + "px"
            };
        n.extend(s, {
            version: "2.1.0",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !l,
                autoCenter: !l,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (n.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: {
                        closeClick: !0,
                        speedOut: 200,
                        showEarly: !0,
                        css: {}
                    },
                    title: {
                        type: "float"
                    }
                },
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function (e, t) {
                return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function (r, o) {
                    var a, l, h, d, f, p, g, m = {};
                    "object" === n.type(o) && (o.nodeType && (o = n(o)), c(o) ? (m = {
                        href: o.attr("href"),
                        title: o.attr("title"),
                        isDom: !0,
                        element: o
                    }, n.metadata && n.extend(!0, m, o.metadata())) : m = o), a = t.href || m.href || (u(o) ? o : null), l = t.title !== i ? t.title : m.title || "", h = t.content || m.content, d = h ? "html" : t.type || m.type, !d && m.isDom && (d = o.data("fancybox-type"), d || (f = o.prop("class").match(/fancybox\.(\w+)/), d = f ? f[1] : null)), u(a) && (d || (s.isImage(a) ? d = "image" : s.isSWF(a) ? d = "swf" : "#" === a.charAt(0) ? d = "inline" : u(o) && (d = "html", h = o)), "ajax" === d && (p = a.split(/\s+/, 2), a = p.shift(), g = p.shift())), h || ("inline" === d ? a ? h = n(u(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : m.isDom && (h = o) : "html" === d ? h = a : d || a || !m.isDom || (d = "inline", h = o)), n.extend(m, {
                        href: a,
                        type: d,
                        content: h,
                        title: l,
                        selector: g
                    }), e[r] = m
                }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
            },
            cancel: function () {
                var e = s.coming;
                e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0).trigger("onReset").remove(), s.current || s.trigger("afterClose"), s.coming = null)
            },
            close: function (e) {
                s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), "fixed" === s.wrap.css("position") && s.wrap.css(s._getPosition(!0)), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut()))
            },
            play: function (e) {
                var t = function () {
                        clearTimeout(s.player.timer)
                    },
                    i = function () {
                        t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                    },
                    r = function () {
                        t(), n("body").unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                    },
                    o = function () {
                        s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, n("body").bind({
                            "afterShow.player onUpdate.player": i,
                            "onCancel.player beforeClose.player": r,
                            "beforeLoad.player": t
                        }), i(), s.trigger("onPlayStart"))
                    };
                e === !0 || !s.player.isActive && e !== !1 ? o() : r()
            },
            next: function (e) {
                var t = s.current;
                t && (u(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
            },
            prev: function (e) {
                var t = s.current;
                t && (u(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function (e, t, n) {
                var r = s.current;
                r && (e = f(e), s.direction = t || r.direction[e >= r.index ? "next" : "prev"], s.router = n || "jumpto", r.loop && (0 > e && (e = r.group.length + e % r.group.length), e %= r.group.length), r.group[e] !== i && (s.cancel(), s._start(e)))
            },
            reposition: function (e, t) {
                var n;
                s.isOpen && (n = s._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.wrap.stop(!0, !0).animate(n, 200)) : s.wrap.css(n))
            },
            update: function (e) {
                var t = e && e.type,
                    n = !t || "orientationchange" === t;
                n && (clearTimeout(a), a = null), s.isOpen && !a && ((n || l) && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), a = setTimeout(function () {
                    var n = s.current;
                    n && (s.wrap.removeClass("fancybox-tmp"), "scroll" !== t && s._setDimension(), "scroll" === t && n.canShrink || s.reposition(e), s.trigger("onUpdate"), a = null)
                }, l ? 500 : n ? 20 : 300))
            },
            toggle: function (e) {
                s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, s.update())
            },
            hideLoading: function () {
                o.unbind("keypress.fb"), n("#fancybox-loading").remove()
            },
            showLoading: function () {
                var e, t;
                s.hideLoading(), o.bind("keypress.fb", function (e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
                }), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), s.defaults.fixed || (t = s.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function () {
                var t = s.current ? s.current.locked : !1,
                    n = {
                        x: r.scrollLeft(),
                        y: r.scrollTop()
                    };
                return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : r.width(), n.h = l && e.innerHeight ? e.innerHeight : r.height()), n
            },
            unbindEvents: function () {
                s.wrap && c(s.wrap) && s.wrap.unbind(".fb"), o.unbind(".fb"), r.unbind(".fb")
            },
            bindEvents: function () {
                var e, t = s.current;
                t && (r.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && o.bind("keydown.fb", function (r) {
                    var o = r.which || r.keyCode,
                        a = r.target || r.srcElement;
                    r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || a && (a.type || n(a).is("[contenteditable]")) || n.each(e, function (e, a) {
                        return t.group.length > 1 && a[o] !== i ? (s[e](a[o]), r.preventDefault(), !1) : n.inArray(o, a) > -1 ? (s[e](), r.preventDefault(), !1) : void 0
                    })
                }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function (e, i, r, o) {
                    for (var a = e.target || null, l = n(a), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = d(l[0]), l = n(l).parent();
                    0 === i || c || s.group.length > 1 && !t.canShrink && (o > 0 || r > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > r) && s.next(0 > o ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function (e, t) {
                var i, r = t || s.coming || s.current;
                if (r) {
                    if (n.isFunction(r[e]) && (i = r[e].apply(r, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                    "onCancel" !== e || s.isOpened || (s.isActive = !1), r.helpers && n.each(r.helpers, function (t, i) {
                        i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](i, r)
                    }), n.event.trigger(e + ".fb")
                }
            },
            isImage: function (e) {
                return u(e) && e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)
            },
            isSWF: function (e) {
                return u(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function (e) {
                var t, i, r, o, a, c = {};
                if (e = f(e), t = s.group[e] || null, !t) return !1;
                if (c = n.extend(!0, {}, s.opts, t), o = c.margin, a = c.padding, "number" === n.type(o) && (c.margin = [o, o, o, o]), "number" === n.type(a) && (c.padding = [a, a, a, a]), c.modal && n.extend(!0, c, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), c.autoSize && (c.autoWidth = c.autoHeight = !0), "auto" === c.width && (c.autoWidth = !0), "auto" === c.height && (c.autoHeight = !0), c.group = s.group, c.index = e, s.coming = c, !1 === s.trigger("beforeLoad")) return void(s.coming = null);
                if (r = c.type, i = c.href, !r) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
                if (s.isActive = !0, ("image" === r || "swf" === r) && (c.autoHeight = c.autoWidth = !1, c.scrolling = "visible"), "image" === r && (c.aspectRatio = !0), "iframe" === r && l && (c.scrolling = "scroll"), c.wrap = n(c.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + c.wrapCSS).appendTo(c.parent), n.extend(c, {
                        skin: n(".fancybox-skin", c.wrap),
                        outer: n(".fancybox-outer", c.wrap),
                        inner: n(".fancybox-inner", c.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                        c.skin.css("padding" + t, p(c.padding[e]))
                    }), s.trigger("onReady"), "inline" === r || "html" === r) {
                    if (!c.content || !c.content.length) return s._error("content")
                } else if (!i) return s._error("href");
                "image" === r ? s._loadImage() : "ajax" === r ? s._loadAjax() : "iframe" === r ? s._loadIframe() : s._afterLoad()
            },
            _error: function (e) {
                n.extend(s.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: s.coming.tpl.error
                }), s._afterLoad()
            },
            _loadImage: function () {
                var e = s.imgPreload = new Image;
                e.onload = function () {
                    this.onload = this.onerror = null, s.coming.width = this.width, s.coming.height = this.height, s._afterLoad()
                }, e.onerror = function () {
                    this.onload = this.onerror = null, s._error("image")
                }, e.src = s.coming.href, e.complete !== i && e.complete || s.showLoading()
            },
            _loadAjax: function () {
                var e = s.coming;
                s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                    url: e.href,
                    error: function (e, t) {
                        s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                    },
                    success: function (t, n) {
                        "success" === n && (e.content = t, s._afterLoad())
                    }
                }))
            },
            _loadIframe: function () {
                var e = s.coming,
                    t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
                n(e.wrap).bind("onReset", function () {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (s.showLoading(), t.one("load", function () {
                    n(this).data("ready", 1), l || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
            },
            _preloadImages: function () {
                var e, t, n = s.group,
                    i = s.current,
                    r = n.length,
                    o = i.preload ? Math.min(i.preload, r - 1) : 0;
                for (t = 1; o >= t; t += 1) e = n[(i.index + t) % r], "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function () {
                var e, t, i, r, o, a, l = s.coming,
                    u = s.current,
                    h = "fancybox-placeholder";
                if (s.hideLoading(), l && s.isActive !== !1) {
                    if (!1 === s.trigger("afterLoad", l, u)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                    switch (u && (s.trigger("beforeChange", u), u.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(), "fixed" === u.wrap.css("position") && u.wrap.css(s._getPosition(!0))), s.unbindEvents(), e = l, t = l.content, i = l.type, r = l.scrolling, n.extend(s, {
                        wrap: e.wrap,
                        skin: e.skin,
                        outer: e.outer,
                        inner: e.inner,
                        current: e,
                        previous: u
                    }), o = e.href, i) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? t = n("<div>").html(t).find(e.selector) : c(t) && (t.data(h) || t.data(h, n('<div class="' + h + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                                n(this).find(t).length && t.hide().replaceAll(t.data(h)).data(h, !1)
                            }));
                            break;
                        case "image":
                            t = e.tpl.image.replace("{href}", o);
                            break;
                        case "swf":
                            t = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", n.each(e.swf, function (e, n) {
                                t += '<param name="' + e + '" value="' + n + '"></param>', a += " " + e + '="' + n + '"'
                            }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                    }
                    c(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), s._setDimension(), e.wrap.removeClass("fancybox-tmp"), e.pos = n.extend({}, e.dim, s._getPosition(!0)), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? u.prevMethod && s.transitions[u.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
                }
            },
            _setDimension: function () {
                var e, t, i, r, o, a, l, c, u, d, g, m, v, y, w, _ = s.getViewport(),
                    b = 0,
                    k = !1,
                    x = !1,
                    M = s.wrap,
                    C = s.skin,
                    S = s.inner,
                    R = s.current,
                    D = R.width,
                    T = R.height,
                    A = R.minWidth,
                    E = R.minHeight,
                    P = R.maxWidth,
                    O = R.maxHeight,
                    F = R.scrolling,
                    j = R.scrollOutside ? R.scrollbarWidth : 0,
                    I = R.margin,
                    W = I[1] + I[3],
                    q = I[0] + I[2];
                if (M.add(C).add(S).width("auto").height("auto"), e = C.outerWidth(!0) - C.width(), t = C.outerHeight(!0) - C.height(), i = W + e, r = q + t, o = h(D) ? (_.w - i) * f(D) / 100 : D, a = h(T) ? (_.h - r) * f(T) / 100 : T, "iframe" === R.type) {
                    if (y = R.content, R.autoHeight && 1 === y.data("ready")) try {
                        y[0].contentWindow.document.location && (S.width(o).height(9999), w = y.contents().find("body"), j && w.css("overflow-x", "hidden"), a = w.height())
                    } catch (z) {}
                } else(R.autoWidth || R.autoHeight) && (S.addClass("fancybox-tmp"), R.autoWidth || S.width(o), R.autoHeight || S.height(a), R.autoWidth && (o = S.width()), R.autoHeight && (a = S.height()), S.removeClass("fancybox-tmp"));
                if (D = f(o), T = f(a), u = o / a, A = f(h(A) ? f(A, "w") - i : A), P = f(h(P) ? f(P, "w") - i : P), E = f(h(E) ? f(E, "h") - r : E), O = f(h(O) ? f(O, "h") - r : O), l = P, c = O, m = _.w - W, v = _.h - q, R.aspectRatio ? (D > P && (D = P, T = D / u), T > O && (T = O, D = T * u), A > D && (D = A, T = D / u), E > T && (T = E, D = T * u)) : (D = Math.max(A, Math.min(D, P)), T = Math.max(E, Math.min(T, O))), R.fitToView)
                    if (P = Math.min(_.w - i, P), O = Math.min(_.h - r, O), S.width(f(D)).height(f(T)), M.width(f(D + e)), d = M.width(), g = M.height(), R.aspectRatio)
                        for (;
                            (d > m || g > v) && D > A && T > E && !(b++ > 19);) T = Math.max(E, Math.min(O, T - 10)), D = T * u, A > D && (D = A, T = D / u), D > P && (D = P, T = D / u), S.width(f(D)).height(f(T)), M.width(f(D + e)), d = M.width(), g = M.height();
                    else D = Math.max(A, Math.min(D, D - (d - m))), T = Math.max(E, Math.min(T, T - (g - v)));
                j && "auto" === F && a > T && m > D + e + j && (D += j), S.width(f(D)).height(f(T)), M.width(f(D + e)), d = M.width(), g = M.height(), k = (d > m || g > v) && D > A && T > E, x = R.aspectRatio ? l > D && c > T && o > D && a > T : (l > D || c > T) && (o > D || a > T), n.extend(R, {
                    dim: {
                        width: p(d),
                        height: p(g)
                    },
                    origWidth: o,
                    origHeight: a,
                    canShrink: k,
                    canExpand: x,
                    wPadding: e,
                    hPadding: t,
                    wrapSpace: g - C.outerHeight(!0),
                    skinSpace: C.height() - T
                }), !y && R.autoHeight && T > E && O > T && !x && S.height("auto")
            },
            _getPosition: function (e) {
                var t = s.current,
                    n = s.getViewport(),
                    i = t.margin,
                    r = s.wrap.width() + i[1] + i[3],
                    o = s.wrap.height() + i[0] + i[2],
                    a = {
                        position: "absolute",
                        top: i[0],
                        left: i[3]
                    };
                return t.autoCenter && t.fixed && !e && o <= n.h && r <= n.w ? a.position = "fixed" : t.locked || (a.top += n.y, a.left += n.x), a.top = p(Math.max(a.top, a.top + (n.h - o) * t.topRatio)), a.left = p(Math.max(a.left, a.left + (n.w - r) * t.leftRatio)), a
            },
            _afterZoomIn: function () {
                var e = s.current;
                e && (s.isOpen = s.isOpened = !0, s.wrap.addClass("fancybox-opened").css("overflow", "visible"), s.reposition(), (e.closeClick || e.nextClick) && s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                    n(t.target).is("a") || n(t.target).parent().is("a") || s[e.closeClick ? "close" : "next"]()
                }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", s.close), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
            },
            _afterZoomOut: function () {
                var e = s.current;
                n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), n.extend(s, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), s.trigger("afterClose", e)
            }
        }), s.transitions = {
            getOrigPosition: function () {
                var e = s.current,
                    t = e.element,
                    n = e.orig,
                    i = {},
                    r = 50,
                    o = 50,
                    a = e.hPadding,
                    l = e.wPadding,
                    u = s.getViewport();
                return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), c(n) ? (i = n.offset(), n.is("img") && (r = n.outerWidth(), o = n.outerHeight())) : (i.top = u.y + (u.h - o) * e.topRatio, i.left = u.x + (u.w - r) * e.leftRatio), e.locked && (i.top -= u.y, i.left -= u.x), i = {
                    top: p(i.top - a * e.topRatio),
                    left: p(i.left - l * e.leftRatio),
                    width: p(r + l),
                    height: p(o + a)
                }
            },
            step: function (e, t) {
                var n, i, r, o = t.prop,
                    a = s.current,
                    l = a.wrapSpace,
                    c = a.skinSpace;
                ("width" === o || "height" === o) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === o ? a.wPadding : a.hPadding, r = e - i, s.skin[o](f("width" === o ? r : r - l * n)), s.inner[o](f("width" === o ? r : r - l * n - c * n)))
            },
            zoomIn: function () {
                var e = s.current,
                    t = e.pos,
                    i = e.openEffect,
                    r = "elastic" === i,
                    o = n.extend({
                        opacity: 1
                    }, t);
                delete o.position, r ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(o, {
                    duration: "none" === i ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: r ? this.step : null,
                    complete: s._afterZoomIn
                })
            },
            zoomOut: function () {
                var e = s.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    i = {
                        opacity: .1
                    };
                n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: n ? this.step : null,
                    complete: s._afterZoomOut
                })
            },
            changeIn: function () {
                var e, t = s.current,
                    n = t.nextEffect,
                    i = t.pos,
                    r = {
                        opacity: 1
                    },
                    o = s.direction,
                    a = 200;
                i.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[e] = p(f(i[e]) - a), r[e] = "+=" + a + "px") : (i[e] = p(f(i[e]) + a), r[e] = "-=" + a + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(r, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: s._afterZoomIn
                })
            },
            changeOut: function () {
                var e = s.previous,
                    t = e.prevEffect,
                    i = {
                        opacity: .1
                    },
                    r = s.direction,
                    o = 200;
                "elastic" === t && (i["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=" + o + "px"), e.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function () {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, s.helpers.overlay = {
            overlay: null,
            update: function () {
                var e, i = "100%";
                this.overlay.width(i).height("100%"), n.browser.msie ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > r.width() && (i = o.width()), this.overlay.width(i).height(o.height())
            },
            onReady: function (e, i) {
                n(".fancybox-overlay").stop(!0, !0), this.overlay || n.extend(this, {
                    overlay: n('<div class="fancybox-overlay"></div>').appendTo(i.parent),
                    margin: o.height() > r.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1,
                    el: n(t.all && !t.querySelector ? "html" : "body")
                }), i.fixed && !l && (this.overlay.addClass("fancybox-overlay-fixed"), i.autoCenter && (this.overlay.append(i.wrap), i.locked = this.overlay)), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function (e, t) {
                var i = this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);
                e.closeClick && i.bind("click.fb", function (e) {
                    n(e.target).hasClass("fancybox-overlay") && s.close()
                }), t.fixed && !l ? t.locked && (this.el.addClass("fancybox-lock"), this.margin !== !1 && n("body").css("margin-right", f(this.margin) + t.scrollbarWidth)) : this.update(), i.show()
            },
            onUpdate: function (e, t) {
                (!t.fixed || l) && this.update()
            },
            afterClose: function (e) {
                var t = this,
                    i = e.speedOut || 0;
                t.overlay && !s.isActive && t.overlay.fadeOut(i || 0, function () {
                    n("body").css("margin-right", t.margin), t.el.removeClass("fancybox-lock"), t.overlay.remove(), t.overlay = null
                })
            }
        }, s.helpers.title = {
            beforeShow: function (e) {
                var t, i, r = s.current.title,
                    o = e.type;
                if (u(r) && "" !== n.trim(r)) {
                    switch (t = n('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + r + "</div>"), o) {
                        case "inside":
                            i = s.skin;
                            break;
                        case "outside":
                            i = s.wrap;
                            break;
                        case "over":
                            i = s.inner;
                            break;
                        default:
                            i = s.skin, t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    "top" === e.position ? t.prependTo(i) : t.appendTo(i)
                }
            }
        }, n.fn.fancybox = function (e) {
            var t, i = n(this),
                r = this.selector || "",
                a = function (o) {
                    var a, l, c = n(this).blur(),
                        u = t;
                    o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || c.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = c.attr(a), l || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = r.length ? n(r) : i, c = c.filter("[" + a + '="' + l + '"]'), u = c.index(this)), e.index = u, s.open(c, e) !== !1 && o.preventDefault())
                };
            return e = e || {}, t = e.index || 0, r && e.live !== !1 ? o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this
        }, o.ready(function () {
            n.scrollbarWidth === i && (n.scrollbarWidth = function () {
                    var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        i = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), i
                }), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
                    var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                        t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(), t
                }()),
                n.extend(s.defaults, {
                    scrollbarWidth: n.scrollbarWidth(),
                    fixed: n.support.fixedPosition,
                    parent: n("body")
                })
        })
    }(window, document, jQuery),
    function (e) {
        var t = e.fancybox;
        t.helpers.thumbs = {
            wrap: null,
            list: null,
            width: 0,
            source: function (t) {
                var n;
                return t.element && (n = e(t.element).find("img").attr("src")), !n && "image" === t.type && t.href && (n = t.href), n
            },
            init: function (t, n) {
                var i, r = this,
                    o = t.width || 50,
                    s = t.height || 50,
                    a = t.source || this.source;
                i = "";
                for (var l = 0; l < n.group.length; l++) i += '<li><a style="width:' + o + "px;height:" + s + 'px;" href="javascript:jQuery.fancybox.jumpto(' + l + ');"></a></li>';
                this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position || "bottom").appendTo("body"), this.list = e("<ul>" + i + "</ul>").appendTo(this.wrap), e.each(n.group, function (t) {
                    var i = a(n.group[t]);
                    i && e("<img />").load(function () {
                        var n, i, a, l = this.width,
                            c = this.height;
                        r.list && l && c && (n = l / o, i = c / s, a = r.list.children().eq(t).find("a"), n >= 1 && i >= 1 && (n > i ? (l = Math.floor(l / i), c = s) : (l = o, c = Math.floor(c / n))), e(this).css({
                            width: l,
                            height: c,
                            top: Math.floor(s / 2 - c / 2),
                            left: Math.floor(o / 2 - l / 2)
                        }), a.width(o).height(s), e(this).hide().appendTo(a).fadeIn(300))
                    }).attr("src", i)
                }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (n.group.length + 1)).css("left", Math.floor(.5 * e(window).width() - (n.index * this.width + .5 * this.width)))
            },
            beforeLoad: function (e, t) {
                return t.group.length < 2 ? void(t.helpers.thumbs = !1) : void(t.margin["top" === e.position ? 0 : 2] += (e.height || 50) + 15)
            },
            afterShow: function (e, t) {
                this.list ? this.onUpdate(e, t) : this.init(e, t), this.list.children().removeClass("active").eq(t.index).addClass("active")
            },
            onUpdate: function (t, n) {
                this.list && this.list.stop(!0).animate({
                    left: Math.floor(.5 * e(window).width() - (n.index * this.width + .5 * this.width))
                }, 150)
            },
            beforeClose: function () {
                this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
            }
        }
    }(jQuery), _wAMD.define("legacy/fancybox/fancybox", function () {}), _wAMD.require(["underscore", "mustache", "site/published/core", "site/published/app", "util/platform/elements/PlatformElement", "backbone", "legacy/flyout_menus_jq", "site/published/fancybox", "legacy/fancybox/fancybox"], function (e, t, n, i, r, o) {
        if (i.start(), window.PlatformElement = r, e.each(_W.templates, function (e, n) {
                t.compilePartial(n, e)
            }), _W.events = {}, e.extend(_W.events, o.Events), document.createEvent && document.addEventListener) {
            var s = document.createEvent("Event");
            s.initEvent("appReady", !0, !1), document.dispatchEvent(s), document.documentElement.appReady = 1
        } else 0 === document.documentElement.appReady ? document.documentElement.appReady++ : document.documentElement.appReady = 1
    }), _wAMD.define("site/published/main", function () {}), _wAMD.define("site/main", function () {});
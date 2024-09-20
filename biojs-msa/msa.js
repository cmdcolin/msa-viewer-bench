!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports
    var i = (n[r] = { exports: {}, id: r, loaded: !1 })
    return t[r].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports
  }
  var n = {}
  return (e.m = t), (e.c = n), (e.p = ''), e(0)
})([
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (t && t.__esModule) return t
      var e = {}
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return (e['default'] = t), e
    }
    var i = n(105),
      o = r(i)
    n(145)
    var s = o['default']
    for (var a in o) o.hasOwnProperty(a) && (s[a] = o[a])
    window && (window.msa = s), (t.exports = s)
  },
  function (t, e, n) {
    'use strict'
    ;(t.exports.Model = n(42)),
      (t.exports.Collection = n(55)),
      (t.exports.Events = n(11)),
      (t.exports.extend = n(15))
  },
  function (t, e, n) {
    'use strict'
    var r = n(10),
      i = n(11),
      o = n(15),
      s = n(5),
      a = function (t) {
        ;(this.cid = r.uniqueId('view')),
          t || (t = {}),
          r.extend(this, r.pick(t, l)),
          this._ensureElement(),
          this.initialize.apply(this, arguments)
      },
      u = /^(\S+)\s*(.*)$/,
      l = [
        'model',
        'collection',
        'el',
        'id',
        'attributes',
        'className',
        'tagName',
        'events',
      ]
    r.extend(a.prototype, i, {
      tagName: 'div',
      $: function (t) {
        return this.$el.find(t)
      },
      initialize: function () {},
      render: function () {
        return this
      },
      remove: function () {
        return this._removeElement(), this.stopListening(), this
      },
      _removeElement: function () {
        this.$el.remove()
      },
      setElement: function (t) {
        return (
          this.undelegateEvents(),
          this._setElement(t),
          this.delegateEvents(),
          this
        )
      },
      _setElement: function (t) {
        ;(this.$el = t instanceof s ? t : s(t)), (this.el = this.$el[0])
      },
      delegateEvents: function (t) {
        if (!t && !(t = r.result(this, 'events'))) return this
        this.undelegateEvents()
        for (var e in t) {
          var n = t[e]
          if ((r.isFunction(n) || (n = this[t[e]]), n)) {
            var i = e.match(u)
            this.delegate(i[1], i[2], r.bind(n, this))
          }
        }
        return this
      },
      delegate: function (t, e, n) {
        this.$el.on(t + '.delegateEvents' + this.cid, e, n)
      },
      undelegateEvents: function () {
        return this.$el && this.$el.off('.delegateEvents' + this.cid), this
      },
      undelegate: function (t, e, n) {
        this.$el.off(t + '.delegateEvents' + this.cid, e, n)
      },
      _createElement: function (t) {
        return document.createElement(t)
      },
      _ensureElement: function () {
        if (this.el) this.setElement(r.result(this, 'el'))
        else {
          var t = r.extend({}, r.result(this, 'attributes'))
          this.id && (t.id = r.result(this, 'id')),
            this.className && (t['class'] = r.result(this, 'className')),
            this.setElement(this._createElement(r.result(this, 'tagName'))),
            this._setAttributes(t)
        }
      },
      _setAttributes: function (t) {
        this.$el.attr(t)
      },
    }),
      (a.extend = o),
      (t.exports = a)
  },
  function (t, e, n) {
    var r
    ;(function (t, i) {
      'use strict'
      var o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            }
      ;(function () {
        function s(t, e) {
          return t.set(e[0], e[1]), t
        }
        function a(t, e) {
          return t.add(e), t
        }
        function u(t, e, n) {
          switch (n.length) {
            case 0:
              return t.call(e)
            case 1:
              return t.call(e, n[0])
            case 2:
              return t.call(e, n[0], n[1])
            case 3:
              return t.call(e, n[0], n[1], n[2])
          }
          return t.apply(e, n)
        }
        function l(t, e, n, r) {
          for (var i = -1, o = t ? t.length : 0; ++i < o; ) {
            var s = t[i]
            e(r, s, n(s), t)
          }
          return r
        }
        function c(t, e) {
          for (
            var n = -1, r = t ? t.length : 0;
            ++n < r && e(t[n], n, t) !== !1;

          );
          return t
        }
        function h(t, e) {
          for (var n = t ? t.length : 0; n-- && e(t[n], n, t) !== !1; );
          return t
        }
        function f(t, e) {
          for (var n = -1, r = t ? t.length : 0; ++n < r; )
            if (!e(t[n], n, t)) return !1
          return !0
        }
        function d(t, e) {
          for (var n = -1, r = t ? t.length : 0, i = 0, o = []; ++n < r; ) {
            var s = t[n]
            e(s, n, t) && (o[i++] = s)
          }
          return o
        }
        function g(t, e) {
          return !!(t ? t.length : 0) && S(t, e, 0) > -1
        }
        function p(t, e, n) {
          for (var r = -1, i = t ? t.length : 0; ++r < i; )
            if (n(e, t[r])) return !0
          return !1
        }
        function m(t, e) {
          for (var n = -1, r = t ? t.length : 0, i = Array(r); ++n < r; )
            i[n] = e(t[n], n, t)
          return i
        }
        function v(t, e) {
          for (var n = -1, r = e.length, i = t.length; ++n < r; )
            t[i + n] = e[n]
          return t
        }
        function _(t, e, n, r) {
          var i = -1,
            o = t ? t.length : 0
          for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t)
          return n
        }
        function y(t, e, n, r) {
          var i = t ? t.length : 0
          for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t)
          return n
        }
        function b(t, e) {
          for (var n = -1, r = t ? t.length : 0; ++n < r; )
            if (e(t[n], n, t)) return !0
          return !1
        }
        function x(t, e, n) {
          var r
          return (
            n(t, function (t, n, i) {
              if (e(t, n, i)) return (r = n), !1
            }),
            r
          )
        }
        function w(t, e, n, r) {
          for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (e(t[o], o, t)) return o
          return -1
        }
        function S(t, e, n) {
          if (e !== e) return H(t, n)
          for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r
          return -1
        }
        function k(t, e, n, r) {
          for (var i = n - 1, o = t.length; ++i < o; ) if (r(t[i], e)) return i
          return -1
        }
        function C(t, e) {
          var n = t ? t.length : 0
          return n ? M(t, e) / n : jt
        }
        function z(t, e, n, r, i) {
          return (
            i(t, function (t, i, o) {
              n = r ? ((r = !1), t) : e(n, t, i, o)
            }),
            n
          )
        }
        function j(t, e) {
          var n = t.length
          for (t.sort(e); n--; ) t[n] = t[n].value
          return t
        }
        function M(t, e) {
          for (var n, r = -1, i = t.length; ++r < i; ) {
            var o = e(t[r])
            o !== Q && (n = n === Q ? o : n + o)
          }
          return n
        }
        function E(t, e) {
          for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
          return r
        }
        function O(t, e) {
          return m(e, function (e) {
            return [e, t[e]]
          })
        }
        function A(t) {
          return function (e) {
            return t(e)
          }
        }
        function T(t, e) {
          return m(e, function (e) {
            return t[e]
          })
        }
        function L(t, e) {
          return t.has(e)
        }
        function R(t, e) {
          for (var n = -1, r = t.length; ++n < r && S(e, t[n], 0) > -1; );
          return n
        }
        function q(t, e) {
          for (var n = t.length; n-- && S(e, t[n], 0) > -1; );
          return n
        }
        function N(t) {
          return t && t.Object === Object ? t : null
        }
        function I(t, e) {
          for (var n = t.length, r = 0; n--; ) t[n] === e && r++
          return r
        }
        function P(t) {
          return On[t]
        }
        function W(t) {
          return An[t]
        }
        function F(t) {
          return '\\' + Ln[t]
        }
        function B(t, e) {
          return null == t ? Q : t[e]
        }
        function H(t, e, n) {
          for (var r = t.length, i = e + (n ? 1 : -1); n ? i-- : ++i < r; ) {
            var o = t[i]
            if (o !== o) return i
          }
          return -1
        }
        function D(t) {
          var e = !1
          if (null != t && 'function' != typeof t.toString)
            try {
              e = !!(t + '')
            } catch (n) {}
          return e
        }
        function U(t) {
          for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
          return n
        }
        function V(t) {
          var e = -1,
            n = Array(t.size)
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t]
            }),
            n
          )
        }
        function $(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
            var s = t[n]
            ;(s !== e && s !== it) || ((t[n] = it), (o[i++] = n))
          }
          return o
        }
        function G(t) {
          var e = -1,
            n = Array(t.size)
          return (
            t.forEach(function (t) {
              n[++e] = t
            }),
            n
          )
        }
        function X(t) {
          var e = -1,
            n = Array(t.size)
          return (
            t.forEach(function (t) {
              n[++e] = [t, t]
            }),
            n
          )
        }
        function Z(t) {
          if (!t || !kn.test(t)) return t.length
          for (var e = (wn.lastIndex = 0); wn.test(t); ) e++
          return e
        }
        function K(t) {
          return t.match(wn)
        }
        function Y(t) {
          return Tn[t]
        }
        function J(t) {
          function e(t) {
            if (ya(t) && !vh(t) && !(t instanceof i)) {
              if (t instanceof r) return t
              if (Ol.call(t, '__wrapped__')) return fo(t)
            }
            return new r(t)
          }
          function n() {}
          function r(t, e) {
            ;(this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!e),
              (this.__index__ = 0),
              (this.__values__ = Q)
          }
          function i(t) {
            ;(this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = Mt),
              (this.__views__ = [])
          }
          function N() {
            var t = new i(this.__wrapped__)
            return (
              (t.__actions__ = ri(this.__actions__)),
              (t.__dir__ = this.__dir__),
              (t.__filtered__ = this.__filtered__),
              (t.__iteratees__ = ri(this.__iteratees__)),
              (t.__takeCount__ = this.__takeCount__),
              (t.__views__ = ri(this.__views__)),
              t
            )
          }
          function Ne() {
            if (this.__filtered__) {
              var t = new i(this)
              ;(t.__dir__ = -1), (t.__filtered__ = !0)
            } else (t = this.clone()), (t.__dir__ *= -1)
            return t
          }
          function Ie() {
            var t = this.__wrapped__.value(),
              e = this.__dir__,
              n = vh(t),
              r = e < 0,
              i = n ? t.length : 0,
              o = Di(0, i, this.__views__),
              s = o.start,
              a = o.end,
              u = a - s,
              l = r ? a : s - 1,
              c = this.__iteratees__,
              h = c.length,
              f = 0,
              d = tc(u, this.__takeCount__)
            if (!n || i < et || (i == u && d == u))
              return Pr(t, this.__actions__)
            var g = []
            t: for (; u-- && f < d; ) {
              l += e
              for (var p = -1, m = t[l]; ++p < h; ) {
                var v = c[p],
                  _ = v.iteratee,
                  y = v.type,
                  b = _(m)
                if (y == wt) m = b
                else if (!b) {
                  if (y == xt) continue t
                  break t
                }
              }
              g[f++] = m
            }
            return g
          }
          function Pe(t) {
            var e = -1,
              n = t ? t.length : 0
            for (this.clear(); ++e < n; ) {
              var r = t[e]
              this.set(r[0], r[1])
            }
          }
          function We() {
            this.__data__ = hc ? hc(null) : {}
          }
          function Fe(t) {
            return this.has(t) && delete this.__data__[t]
          }
          function Be(t) {
            var e = this.__data__
            if (hc) {
              var n = e[t]
              return n === rt ? Q : n
            }
            return Ol.call(e, t) ? e[t] : Q
          }
          function He(t) {
            var e = this.__data__
            return hc ? e[t] !== Q : Ol.call(e, t)
          }
          function De(t, e) {
            return (this.__data__[t] = hc && e === Q ? rt : e), this
          }
          function Ue(t) {
            var e = -1,
              n = t ? t.length : 0
            for (this.clear(); ++e < n; ) {
              var r = t[e]
              this.set(r[0], r[1])
            }
          }
          function Ve() {
            this.__data__ = []
          }
          function $e(t) {
            var e = this.__data__,
              n = pn(e, t)
            return !(
              n < 0 || (n == e.length - 1 ? e.pop() : Vl.call(e, n, 1), 0)
            )
          }
          function Ge(t) {
            var e = this.__data__,
              n = pn(e, t)
            return n < 0 ? Q : e[n][1]
          }
          function Xe(t) {
            return pn(this.__data__, t) > -1
          }
          function Ze(t, e) {
            var n = this.__data__,
              r = pn(n, t)
            return r < 0 ? n.push([t, e]) : (n[r][1] = e), this
          }
          function Ke(t) {
            var e = -1,
              n = t ? t.length : 0
            for (this.clear(); ++e < n; ) {
              var r = t[e]
              this.set(r[0], r[1])
            }
          }
          function Ye() {
            this.__data__ = {
              hash: new Pe(),
              map: new (ac || Ue)(),
              string: new Pe(),
            }
          }
          function Je(t) {
            return Ii(this, t)['delete'](t)
          }
          function Qe(t) {
            return Ii(this, t).get(t)
          }
          function tn(t) {
            return Ii(this, t).has(t)
          }
          function en(t, e) {
            return Ii(this, t).set(t, e), this
          }
          function nn(t) {
            var e = -1,
              n = t ? t.length : 0
            for (this.__data__ = new Ke(); ++e < n; ) this.add(t[e])
          }
          function rn(t) {
            return this.__data__.set(t, rt), this
          }
          function on(t) {
            return this.__data__.has(t)
          }
          function sn(t) {
            this.__data__ = new Ue(t)
          }
          function an() {
            this.__data__ = new Ue()
          }
          function un(t) {
            return this.__data__['delete'](t)
          }
          function ln(t) {
            return this.__data__.get(t)
          }
          function cn(t) {
            return this.__data__.has(t)
          }
          function hn(t, e) {
            var n = this.__data__
            return (
              n instanceof Ue &&
                n.__data__.length == et &&
                (n = this.__data__ = new Ke(n.__data__)),
              n.set(t, e),
              this
            )
          }
          function fn(t, e, n, r) {
            return t === Q || (na(t, Cl[n]) && !Ol.call(r, n)) ? e : t
          }
          function dn(t, e, n) {
            ;((n === Q || na(t[e], n)) &&
              ('number' != typeof e || n !== Q || e in t)) ||
              (t[e] = n)
          }
          function gn(t, e, n) {
            var r = t[e]
            ;(Ol.call(t, e) && na(r, n) && (n !== Q || e in t)) || (t[e] = n)
          }
          function pn(t, e) {
            for (var n = t.length; n--; ) if (na(t[n][0], e)) return n
            return -1
          }
          function mn(t, e, n, r) {
            return (
              Sc(t, function (t, i, o) {
                e(r, t, n(t), o)
              }),
              r
            )
          }
          function vn(t, e) {
            return t && ii(e, iu(e), t)
          }
          function _n(t, e) {
            for (
              var n = -1, r = null == t, i = e.length, o = Array(i);
              ++n < i;

            )
              o[n] = r ? Q : eu(t, e[n])
            return o
          }
          function yn(t, e, n) {
            return (
              t === t &&
                (n !== Q && (t = t <= n ? t : n),
                e !== Q && (t = t >= e ? t : e)),
              t
            )
          }
          function wn(t, e, n, r, i, o, s) {
            var a
            if ((r && (a = o ? r(t, i, o, s) : r(t)), a !== Q)) return a
            if (!_a(t)) return t
            var u = vh(t)
            if (u) {
              if (((a = Vi(t)), !e)) return ri(t, a)
            } else {
              var l = Hi(t),
                h = l == Nt || l == It
              if (_h(t)) return Vr(t, e)
              if (l == Ft || l == At || (h && !o)) {
                if (D(t)) return o ? t : {}
                if (((a = $i(h ? {} : t)), !e)) return oi(t, vn(a, t))
              } else {
                if (!En[l]) return o ? t : {}
                a = Gi(t, l, wn, e)
              }
            }
            s || (s = new sn())
            var f = s.get(t)
            if (f) return f
            if ((s.set(t, a), !u)) var d = n ? Ti(t) : iu(t)
            return (
              c(d || t, function (i, o) {
                d && ((o = i), (i = t[o])), gn(a, o, wn(i, e, n, r, o, t, s))
              }),
              a
            )
          }
          function On(t) {
            var e = iu(t),
              n = e.length
            return function (r) {
              if (null == r) return !n
              for (var i = n; i--; ) {
                var o = e[i],
                  s = t[o],
                  a = r[o]
                if ((a === Q && !(o in Object(r))) || !s(a)) return !1
              }
              return !0
            }
          }
          function An(t) {
            return _a(t) ? Dl(t) : {}
          }
          function Tn(t, e, n) {
            if ('function' != typeof t) throw new Sl(nt)
            return $l(function () {
              t.apply(Q, n)
            }, e)
          }
          function Ln(t, e, n, r) {
            var i = -1,
              o = g,
              s = !0,
              a = t.length,
              u = [],
              l = e.length
            if (!a) return u
            n && (e = m(e, A(n))),
              r
                ? ((o = p), (s = !1))
                : e.length >= et && ((o = L), (s = !1), (e = new nn(e)))
            t: for (; ++i < a; ) {
              var c = t[i],
                h = n ? n(c) : c
              if (((c = r || 0 !== c ? c : 0), s && h === h)) {
                for (var f = l; f--; ) if (e[f] === h) continue t
                u.push(c)
              } else o(e, h, r) || u.push(c)
            }
            return u
          }
          function Nn(t, e) {
            var n = !0
            return (
              Sc(t, function (t, r, i) {
                return (n = !!e(t, r, i))
              }),
              n
            )
          }
          function In(t, e, n) {
            for (var r = -1, i = t.length; ++r < i; ) {
              var o = t[r],
                s = e(o)
              if (null != s && (a === Q ? s === s && !La(s) : n(s, a)))
                var a = s,
                  u = o
            }
            return u
          }
          function Wn(t, e, n, r) {
            var i = t.length
            for (
              n = Fa(n),
                n < 0 && (n = -n > i ? 0 : i + n),
                r = r === Q || r > i ? i : Fa(r),
                r < 0 && (r += i),
                r = n > r ? 0 : Ba(r);
              n < r;

            )
              t[n++] = e
            return t
          }
          function Fn(t, e) {
            var n = []
            return (
              Sc(t, function (t, r, i) {
                e(t, r, i) && n.push(t)
              }),
              n
            )
          }
          function Bn(t, e, n, r, i) {
            var o = -1,
              s = t.length
            for (n || (n = Zi), i || (i = []); ++o < s; ) {
              var a = t[o]
              e > 0 && n(a)
                ? e > 1
                  ? Bn(a, e - 1, n, r, i)
                  : v(i, a)
                : r || (i[i.length] = a)
            }
            return i
          }
          function Un(t, e) {
            return t && Cc(t, e, iu)
          }
          function Vn(t, e) {
            return t && zc(t, e, iu)
          }
          function $n(t, e) {
            return d(e, function (e) {
              return pa(t[e])
            })
          }
          function Gn(t, e) {
            e = Qi(e, t) ? [e] : Dr(e)
            for (var n = 0, r = e.length; null != t && n < r; )
              t = t[co(e[n++])]
            return n && n == r ? t : Q
          }
          function Xn(t, e, n) {
            var r = e(t)
            return vh(t) ? r : v(r, n(t))
          }
          function Zn(t, e) {
            return t > e
          }
          function Kn(t, e) {
            return (
              null != t &&
              (Ol.call(t, e) ||
                ('object' == ('undefined' == typeof t ? 'undefined' : o(t)) &&
                  e in t &&
                  null === Fi(t)))
            )
          }
          function Yn(t, e) {
            return null != t && e in Object(t)
          }
          function Jn(t, e, n) {
            return t >= tc(e, n) && t < Ql(e, n)
          }
          function Qn(t, e, n) {
            for (
              var r = n ? p : g,
                i = t[0].length,
                o = t.length,
                s = o,
                a = Array(o),
                u = 1 / 0,
                l = [];
              s--;

            ) {
              var c = t[s]
              s && e && (c = m(c, A(e))),
                (u = tc(c.length, u)),
                (a[s] =
                  !n && (e || (i >= 120 && c.length >= 120))
                    ? new nn(s && c)
                    : Q)
            }
            c = t[0]
            var h = -1,
              f = a[0]
            t: for (; ++h < i && l.length < u; ) {
              var d = c[h],
                v = e ? e(d) : d
              if (((d = n || 0 !== d ? d : 0), !(f ? L(f, v) : r(l, v, n)))) {
                for (s = o; --s; ) {
                  var _ = a[s]
                  if (!(_ ? L(_, v) : r(t[s], v, n))) continue t
                }
                f && f.push(v), l.push(d)
              }
            }
            return l
          }
          function tr(t, e, n, r) {
            return (
              Un(t, function (t, i, o) {
                e(r, n(t), i, o)
              }),
              r
            )
          }
          function er(t, e, n) {
            Qi(e, t) || ((e = Dr(e)), (t = uo(t, e)), (e = To(e)))
            var r = null == t ? t : t[co(e)]
            return null == r ? Q : u(r, t, n)
          }
          function nr(t, e, n, r, i) {
            return (
              t === e ||
              (null == t || null == e || (!_a(t) && !ya(e))
                ? t !== t && e !== e
                : rr(t, e, nr, n, r, i))
            )
          }
          function rr(t, e, n, r, i, o) {
            var s = vh(t),
              a = vh(e),
              u = Tt,
              l = Tt
            s || ((u = Hi(t)), (u = u == At ? Ft : u)),
              a || ((l = Hi(e)), (l = l == At ? Ft : l))
            var c = u == Ft && !D(t),
              h = l == Ft && !D(e),
              f = u == l
            if (f && !c)
              return (
                o || (o = new sn()),
                s || Ra(t) ? Ei(t, e, n, r, i, o) : Oi(t, e, u, n, r, i, o)
              )
            if (!(i & mt)) {
              var d = c && Ol.call(t, '__wrapped__'),
                g = h && Ol.call(e, '__wrapped__')
              if (d || g) {
                var p = d ? t.value() : t,
                  m = g ? e.value() : e
                return o || (o = new sn()), n(p, m, r, i, o)
              }
            }
            return !!f && (o || (o = new sn()), Ai(t, e, n, r, i, o))
          }
          function ir(t, e, n, r) {
            var i = n.length,
              o = i,
              s = !r
            if (null == t) return !o
            for (t = Object(t); i--; ) {
              var a = n[i]
              if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
            }
            for (; ++i < o; ) {
              a = n[i]
              var u = a[0],
                l = t[u],
                c = a[1]
              if (s && a[2]) {
                if (l === Q && !(u in t)) return !1
              } else {
                var h = new sn()
                if (r) var f = r(l, c, u, t, e, h)
                if (!(f === Q ? nr(c, l, r, pt | mt, h) : f)) return !1
              }
            }
            return !0
          }
          function or(t) {
            return !(!_a(t) || no(t)) && (pa(t) || D(t) ? ql : Oe).test(ho(t))
          }
          function sr(t) {
            return 'function' == typeof t
              ? t
              : null == t
                ? Gu
                : 'object' == ('undefined' == typeof t ? 'undefined' : o(t))
                  ? vh(t)
                    ? fr(t[0], t[1])
                    : hr(t)
                  : el(t)
          }
          function ar(t) {
            return Jl(Object(t))
          }
          function ur(t) {
            t = null == t ? t : Object(t)
            var e = []
            for (var n in t) e.push(n)
            return e
          }
          function lr(t, e) {
            return t < e
          }
          function cr(t, e) {
            var n = -1,
              r = oa(t) ? Array(t.length) : []
            return (
              Sc(t, function (t, i, o) {
                r[++n] = e(t, i, o)
              }),
              r
            )
          }
          function hr(t) {
            var e = Pi(t)
            return 1 == e.length && e[0][2]
              ? oo(e[0][0], e[0][1])
              : function (n) {
                  return n === t || ir(n, t, e)
                }
          }
          function fr(t, e) {
            return Qi(t) && io(e)
              ? oo(co(t), e)
              : function (n) {
                  var r = eu(n, t)
                  return r === Q && r === e ? ru(n, t) : nr(e, r, Q, pt | mt)
                }
          }
          function dr(t, e, n, r, i) {
            if (t !== e) {
              if (!vh(e) && !Ra(e)) var o = ou(e)
              c(o || e, function (s, a) {
                if ((o && ((a = s), (s = e[a])), _a(s)))
                  i || (i = new sn()), gr(t, e, a, n, dr, r, i)
                else {
                  var u = r ? r(t[a], s, a + '', t, e, i) : Q
                  u === Q && (u = s), dn(t, a, u)
                }
              })
            }
          }
          function gr(t, e, n, r, i, o, s) {
            var a = t[n],
              u = e[n],
              l = s.get(u)
            if (l) return void dn(t, n, l)
            var c = o ? o(a, u, n + '', t, e, s) : Q,
              h = c === Q
            h &&
              ((c = u),
              vh(u) || Ra(u)
                ? vh(a)
                  ? (c = a)
                  : sa(a)
                    ? (c = ri(a))
                    : ((h = !1), (c = wn(u, !0)))
                : Ma(u) || ra(u)
                  ? ra(a)
                    ? (c = Da(a))
                    : !_a(a) || (r && pa(a))
                      ? ((h = !1), (c = wn(u, !0)))
                      : (c = a)
                  : (h = !1)),
              s.set(u, c),
              h && i(c, u, r, o, s),
              s['delete'](u),
              dn(t, n, c)
          }
          function pr(t, e) {
            var n = t.length
            if (n) return (e += e < 0 ? n : 0), Yi(e, n) ? t[e] : Q
          }
          function mr(t, e, n) {
            var r = -1
            return (
              (e = m(e.length ? e : [Gu], A(Ni()))),
              j(
                cr(t, function (t, n, i) {
                  return {
                    criteria: m(e, function (e) {
                      return e(t)
                    }),
                    index: ++r,
                    value: t,
                  }
                }),
                function (t, e) {
                  return ti(t, e, n)
                },
              )
            )
          }
          function vr(t, e) {
            return (
              (t = Object(t)),
              _(
                e,
                function (e, n) {
                  return n in t && (e[n] = t[n]), e
                },
                {},
              )
            )
          }
          function _r(t, e) {
            for (var n = -1, r = Li(t), i = r.length, o = {}; ++n < i; ) {
              var s = r[n],
                a = t[s]
              e(a, s) && (o[s] = a)
            }
            return o
          }
          function yr(t) {
            return function (e) {
              return null == e ? Q : e[t]
            }
          }
          function br(t) {
            return function (e) {
              return Gn(e, t)
            }
          }
          function xr(t, e, n, r) {
            var i = r ? k : S,
              o = -1,
              s = e.length,
              a = t
            for (t === e && (e = ri(e)), n && (a = m(t, A(n))); ++o < s; )
              for (
                var u = 0, l = e[o], c = n ? n(l) : l;
                (u = i(a, c, u, r)) > -1;

              )
                a !== t && Vl.call(a, u, 1), Vl.call(t, u, 1)
            return t
          }
          function wr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--; ) {
              var i = e[n]
              if (n == r || i !== o) {
                var o = i
                if (Yi(i)) Vl.call(t, i, 1)
                else if (Qi(i, t)) delete t[co(i)]
                else {
                  var s = Dr(i),
                    a = uo(t, s)
                  null != a && delete a[co(To(s))]
                }
              }
            }
            return t
          }
          function Sr(t, e) {
            return t + Xl(nc() * (e - t + 1))
          }
          function kr(t, e, n, r) {
            for (
              var i = -1, o = Ql(Gl((e - t) / (n || 1)), 0), s = Array(o);
              o--;

            )
              (s[r ? o : ++i] = t), (t += n)
            return s
          }
          function Cr(t, e) {
            var n = ''
            if (!t || e < 1 || e > Ct) return n
            do e % 2 && (n += t), (e = Xl(e / 2)), e && (t += t)
            while (e)
            return n
          }
          function zr(t, e, n, r) {
            e = Qi(e, t) ? [e] : Dr(e)
            for (
              var i = -1, o = e.length, s = o - 1, a = t;
              null != a && ++i < o;

            ) {
              var u = co(e[i])
              if (_a(a)) {
                var l = n
                if (i != s) {
                  var c = a[u]
                  ;(l = r ? r(c, u, a) : Q),
                    l === Q && (l = null == c ? (Yi(e[i + 1]) ? [] : {}) : c)
                }
                gn(a, u, l)
              }
              a = a[u]
            }
            return t
          }
          function jr(t, e, n) {
            var r = -1,
              i = t.length
            e < 0 && (e = -e > i ? 0 : i + e),
              (n = n > i ? i : n),
              n < 0 && (n += i),
              (i = e > n ? 0 : (n - e) >>> 0),
              (e >>>= 0)
            for (var o = Array(i); ++r < i; ) o[r] = t[r + e]
            return o
          }
          function Mr(t, e) {
            var n
            return (
              Sc(t, function (t, r, i) {
                return (n = e(t, r, i)), !n
              }),
              !!n
            )
          }
          function Er(t, e, n) {
            var r = 0,
              i = t ? t.length : r
            if ('number' == typeof e && e === e && i <= Ot) {
              for (; r < i; ) {
                var o = (r + i) >>> 1,
                  s = t[o]
                null !== s && !La(s) && (n ? s <= e : s < e)
                  ? (r = o + 1)
                  : (i = o)
              }
              return i
            }
            return Or(t, e, Gu, n)
          }
          function Or(t, e, n, r) {
            e = n(e)
            for (
              var i = 0,
                o = t ? t.length : 0,
                s = e !== e,
                a = null === e,
                u = La(e),
                l = e === Q;
              i < o;

            ) {
              var c = Xl((i + o) / 2),
                h = n(t[c]),
                f = h !== Q,
                d = null === h,
                g = h === h,
                p = La(h)
              if (s) var m = r || g
              else
                m = l
                  ? g && (r || f)
                  : a
                    ? g && f && (r || !d)
                    : u
                      ? g && f && !d && (r || !p)
                      : !d && !p && (r ? h <= e : h < e)
              m ? (i = c + 1) : (o = c)
            }
            return tc(o, Et)
          }
          function Ar(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
              var s = t[n],
                a = e ? e(s) : s
              if (!n || !na(a, u)) {
                var u = a
                o[i++] = 0 === s ? 0 : s
              }
            }
            return o
          }
          function Tr(t) {
            return 'number' == typeof t ? t : La(t) ? jt : +t
          }
          function Lr(t) {
            if ('string' == typeof t) return t
            if (La(t)) return wc ? wc.call(t) : ''
            var e = t + ''
            return '0' == e && 1 / t == -kt ? '-0' : e
          }
          function Rr(t, e, n) {
            var r = -1,
              i = g,
              o = t.length,
              s = !0,
              a = [],
              u = a
            if (n) (s = !1), (i = p)
            else if (o >= et) {
              var l = e ? null : Mc(t)
              if (l) return G(l)
              ;(s = !1), (i = L), (u = new nn())
            } else u = e ? [] : a
            t: for (; ++r < o; ) {
              var c = t[r],
                h = e ? e(c) : c
              if (((c = n || 0 !== c ? c : 0), s && h === h)) {
                for (var f = u.length; f--; ) if (u[f] === h) continue t
                e && u.push(h), a.push(c)
              } else i(u, h, n) || (u !== a && u.push(h), a.push(c))
            }
            return a
          }
          function qr(t, e) {
            ;(e = Qi(e, t) ? [e] : Dr(e)), (t = uo(t, e))
            var n = co(To(e))
            return !(null != t && Kn(t, n)) || delete t[n]
          }
          function Nr(t, e, n, r) {
            return zr(t, e, n(Gn(t, e)), r)
          }
          function Ir(t, e, n, r) {
            for (
              var i = t.length, o = r ? i : -1;
              (r ? o-- : ++o < i) && e(t[o], o, t);

            );
            return n
              ? jr(t, r ? 0 : o, r ? o + 1 : i)
              : jr(t, r ? o + 1 : 0, r ? i : o)
          }
          function Pr(t, e) {
            var n = t
            return (
              n instanceof i && (n = n.value()),
              _(
                e,
                function (t, e) {
                  return e.func.apply(e.thisArg, v([t], e.args))
                },
                n,
              )
            )
          }
          function Wr(t, e, n) {
            for (var r = -1, i = t.length; ++r < i; )
              var o = o ? v(Ln(o, t[r], e, n), Ln(t[r], o, e, n)) : t[r]
            return o && o.length ? Rr(o, e, n) : []
          }
          function Fr(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, s = {}; ++r < i; ) {
              var a = r < o ? e[r] : Q
              n(s, t[r], a)
            }
            return s
          }
          function Br(t) {
            return sa(t) ? t : []
          }
          function Hr(t) {
            return 'function' == typeof t ? t : Gu
          }
          function Dr(t) {
            return vh(t) ? t : Rc(t)
          }
          function Ur(t, e, n) {
            var r = t.length
            return (n = n === Q ? r : n), !e && n >= r ? t : jr(t, e, n)
          }
          function Vr(t, e) {
            if (e) return t.slice()
            var n = new t.constructor(t.length)
            return t.copy(n), n
          }
          function $r(t) {
            var e = new t.constructor(t.byteLength)
            return new Wl(e).set(new Wl(t)), e
          }
          function Gr(t, e) {
            var n = e ? $r(t.buffer) : t.buffer
            return new t.constructor(n, t.byteOffset, t.byteLength)
          }
          function Xr(t, e, n) {
            return _(e ? n(V(t), !0) : V(t), s, new t.constructor())
          }
          function Zr(t) {
            var e = new t.constructor(t.source, ze.exec(t))
            return (e.lastIndex = t.lastIndex), e
          }
          function Kr(t, e, n) {
            return _(e ? n(G(t), !0) : G(t), a, new t.constructor())
          }
          function Yr(t) {
            return xc ? Object(xc.call(t)) : {}
          }
          function Jr(t, e) {
            var n = e ? $r(t.buffer) : t.buffer
            return new t.constructor(n, t.byteOffset, t.length)
          }
          function Qr(t, e) {
            if (t !== e) {
              var n = t !== Q,
                r = null === t,
                i = t === t,
                o = La(t),
                s = e !== Q,
                a = null === e,
                u = e === e,
                l = La(e)
              if (
                (!a && !l && !o && t > e) ||
                (o && s && u && !a && !l) ||
                (r && s && u) ||
                (!n && u) ||
                !i
              )
                return 1
              if (
                (!r && !o && !l && t < e) ||
                (l && n && i && !r && !o) ||
                (a && n && i) ||
                (!s && i) ||
                !u
              )
                return -1
            }
            return 0
          }
          function ti(t, e, n) {
            for (
              var r = -1,
                i = t.criteria,
                o = e.criteria,
                s = i.length,
                a = n.length;
              ++r < s;

            ) {
              var u = Qr(i[r], o[r])
              if (u) return r >= a ? u : u * ('desc' == n[r] ? -1 : 1)
            }
            return t.index - e.index
          }
          function ei(t, e, n, r) {
            for (
              var i = -1,
                o = t.length,
                s = n.length,
                a = -1,
                u = e.length,
                l = Ql(o - s, 0),
                c = Array(u + l),
                h = !r;
              ++a < u;

            )
              c[a] = e[a]
            for (; ++i < s; ) (h || i < o) && (c[n[i]] = t[i])
            for (; l--; ) c[a++] = t[i++]
            return c
          }
          function ni(t, e, n, r) {
            for (
              var i = -1,
                o = t.length,
                s = -1,
                a = n.length,
                u = -1,
                l = e.length,
                c = Ql(o - a, 0),
                h = Array(c + l),
                f = !r;
              ++i < c;

            )
              h[i] = t[i]
            for (var d = i; ++u < l; ) h[d + u] = e[u]
            for (; ++s < a; ) (f || i < o) && (h[d + n[s]] = t[i++])
            return h
          }
          function ri(t, e) {
            var n = -1,
              r = t.length
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n]
            return e
          }
          function ii(t, e, n, r) {
            n || (n = {})
            for (var i = -1, o = e.length; ++i < o; ) {
              var s = e[i]
              gn(n, s, r ? r(n[s], t[s], s, n, t) : t[s])
            }
            return n
          }
          function oi(t, e) {
            return ii(t, Bi(t), e)
          }
          function si(t, e) {
            return function (n, r) {
              var i = vh(n) ? l : mn,
                o = e ? e() : {}
              return i(n, t, Ni(r), o)
            }
          }
          function ai(t) {
            return $s(function (e, n) {
              var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : Q,
                s = i > 2 ? n[2] : Q
              for (
                o = t.length > 3 && 'function' == typeof o ? (i--, o) : Q,
                  s && Ji(n[0], n[1], s) && ((o = i < 3 ? Q : o), (i = 1)),
                  e = Object(e);
                ++r < i;

              ) {
                var a = n[r]
                a && t(e, a, r, o)
              }
              return e
            })
          }
          function ui(t, e) {
            return function (n, r) {
              if (null == n) return n
              if (!oa(n)) return t(n, r)
              for (
                var i = n.length, o = e ? i : -1, s = Object(n);
                (e ? o-- : ++o < i) && r(s[o], o, s) !== !1;

              );
              return n
            }
          }
          function li(t) {
            return function (e, n, r) {
              for (var i = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
                var u = s[t ? a : ++i]
                if (n(o[u], u, o) === !1) break
              }
              return e
            }
          }
          function ci(t, e, n) {
            function r() {
              return (this && this !== Hn && this instanceof r ? o : t).apply(
                i ? n : this,
                arguments,
              )
            }
            var i = e & ot,
              o = di(t)
            return r
          }
          function hi(t) {
            return function (e) {
              e = Va(e)
              var n = kn.test(e) ? K(e) : Q,
                r = n ? n[0] : e.charAt(0),
                i = n ? Ur(n, 1).join('') : e.slice(1)
              return r[t]() + i
            }
          }
          function fi(t) {
            return function (e) {
              return _(Du(Su(e).replace(bn, '')), t, '')
            }
          }
          function di(t) {
            return function () {
              var e = arguments
              switch (e.length) {
                case 0:
                  return new t()
                case 1:
                  return new t(e[0])
                case 2:
                  return new t(e[0], e[1])
                case 3:
                  return new t(e[0], e[1], e[2])
                case 4:
                  return new t(e[0], e[1], e[2], e[3])
                case 5:
                  return new t(e[0], e[1], e[2], e[3], e[4])
                case 6:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5])
                case 7:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
              }
              var n = An(t.prototype),
                r = t.apply(n, e)
              return _a(r) ? r : n
            }
          }
          function gi(t, e, n) {
            function r() {
              for (
                var o = arguments.length, s = Array(o), a = o, l = qi(r);
                a--;

              )
                s[a] = arguments[a]
              var c = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : $(s, l)
              return (
                (o -= c.length),
                o < n
                  ? Ci(t, e, vi, r.placeholder, Q, s, c, Q, Q, n - o)
                  : u(this && this !== Hn && this instanceof r ? i : t, this, s)
              )
            }
            var i = di(t)
            return r
          }
          function pi(t) {
            return function (e, n, r) {
              var i = Object(e)
              if (((n = Ni(n, 3)), !oa(e))) var o = iu(e)
              var s = t(
                o || e,
                function (t, e) {
                  return o && ((e = t), (t = i[e])), n(t, e, i)
                },
                r,
              )
              return s > -1 ? e[o ? o[s] : s] : Q
            }
          }
          function mi(t) {
            return $s(function (e) {
              e = Bn(e, 1)
              var n = e.length,
                i = n,
                o = r.prototype.thru
              for (t && e.reverse(); i--; ) {
                var s = e[i]
                if ('function' != typeof s) throw new Sl(nt)
                if (o && !a && 'wrapper' == Ri(s)) var a = new r([], !0)
              }
              for (i = a ? i : n; ++i < n; ) {
                s = e[i]
                var u = Ri(s),
                  l = 'wrapper' == u ? Ec(s) : Q
                a =
                  l &&
                  eo(l[0]) &&
                  l[1] == (ft | ut | ct | dt) &&
                  !l[4].length &&
                  1 == l[9]
                    ? a[Ri(l[0])].apply(a, l[3])
                    : 1 == s.length && eo(s)
                      ? a[u]()
                      : a.thru(s)
              }
              return function () {
                var t = arguments,
                  r = t[0]
                if (a && 1 == t.length && vh(r) && r.length >= et)
                  return a.plant(r).value()
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                  o = e[i].call(this, o)
                return o
              }
            })
          }
          function vi(t, e, n, r, i, o, s, a, u, l) {
            function c() {
              for (var v = arguments.length, _ = Array(v), y = v; y--; )
                _[y] = arguments[y]
              if (g)
                var b = qi(c),
                  x = I(_, b)
              if (
                (r && (_ = ei(_, r, i, g)),
                o && (_ = ni(_, o, s, g)),
                (v -= x),
                g && v < l)
              ) {
                var w = $(_, b)
                return Ci(t, e, vi, c.placeholder, n, _, w, a, u, l - v)
              }
              var S = f ? n : this,
                k = d ? S[t] : t
              return (
                (v = _.length),
                a ? (_ = lo(_, a)) : p && v > 1 && _.reverse(),
                h && u < v && (_.length = u),
                this && this !== Hn && this instanceof c && (k = m || di(k)),
                k.apply(S, _)
              )
            }
            var h = e & ft,
              f = e & ot,
              d = e & st,
              g = e & (ut | lt),
              p = e & gt,
              m = d ? Q : di(t)
            return c
          }
          function _i(t, e) {
            return function (n, r) {
              return tr(n, t, e(r), {})
            }
          }
          function yi(t) {
            return function (e, n) {
              var r
              if (e === Q && n === Q) return 0
              if ((e !== Q && (r = e), n !== Q)) {
                if (r === Q) return n
                'string' == typeof e || 'string' == typeof n
                  ? ((e = Lr(e)), (n = Lr(n)))
                  : ((e = Tr(e)), (n = Tr(n))),
                  (r = t(e, n))
              }
              return r
            }
          }
          function bi(t) {
            return $s(function (e) {
              return (
                (e =
                  1 == e.length && vh(e[0])
                    ? m(e[0], A(Ni()))
                    : m(Bn(e, 1, Ki), A(Ni()))),
                $s(function (n) {
                  var r = this
                  return t(e, function (t) {
                    return u(t, r, n)
                  })
                })
              )
            })
          }
          function xi(t, e) {
            e = e === Q ? ' ' : Lr(e)
            var n = e.length
            if (n < 2) return n ? Cr(e, t) : e
            var r = Cr(e, Gl(t / Z(e)))
            return kn.test(e) ? Ur(K(r), 0, t).join('') : r.slice(0, t)
          }
          function wi(t, e, n, r) {
            function i() {
              for (
                var e = -1,
                  a = arguments.length,
                  l = -1,
                  c = r.length,
                  h = Array(c + a),
                  f = this && this !== Hn && this instanceof i ? s : t;
                ++l < c;

              )
                h[l] = r[l]
              for (; a--; ) h[l++] = arguments[++e]
              return u(f, o ? n : this, h)
            }
            var o = e & ot,
              s = di(t)
            return i
          }
          function Si(t) {
            return function (e, n, r) {
              return (
                r && 'number' != typeof r && Ji(e, n, r) && (n = r = Q),
                (e = Ha(e)),
                (e = e === e ? e : 0),
                n === Q ? ((n = e), (e = 0)) : (n = Ha(n) || 0),
                (r = r === Q ? (e < n ? 1 : -1) : Ha(r) || 0),
                kr(e, n, r, t)
              )
            }
          }
          function ki(t) {
            return function (e, n) {
              return (
                ('string' == typeof e && 'string' == typeof n) ||
                  ((e = Ha(e)), (n = Ha(n))),
                t(e, n)
              )
            }
          }
          function Ci(t, e, n, r, i, o, s, a, u, l) {
            var c = e & ut,
              h = c ? s : Q,
              f = c ? Q : s,
              d = c ? o : Q,
              g = c ? Q : o
            ;(e |= c ? ct : ht),
              (e &= ~(c ? ht : ct)),
              e & at || (e &= ~(ot | st))
            var p = [t, e, i, d, h, g, f, a, u, l],
              m = n.apply(Q, p)
            return eo(t) && Lc(m, p), (m.placeholder = r), m
          }
          function zi(t) {
            var e = xl[t]
            return function (t, n) {
              if (((t = Ha(t)), (n = tc(Fa(n), 292)))) {
                var r = (Va(t) + 'e').split('e')
                return (
                  (r = (Va(e(r[0] + 'e' + (+r[1] + n))) + 'e').split('e')),
                  +(r[0] + 'e' + (+r[1] - n))
                )
              }
              return e(t)
            }
          }
          function ji(t) {
            return function (e) {
              var n = Hi(e)
              return n == Pt ? V(e) : n == Dt ? X(e) : O(e, t(e))
            }
          }
          function Mi(t, e, n, r, i, o, s, a) {
            var u = e & st
            if (!u && 'function' != typeof t) throw new Sl(nt)
            var l = r ? r.length : 0
            if (
              (l || ((e &= ~(ct | ht)), (r = i = Q)),
              (s = s === Q ? s : Ql(Fa(s), 0)),
              (a = a === Q ? a : Fa(a)),
              (l -= i ? i.length : 0),
              e & ht)
            ) {
              var c = r,
                h = i
              r = i = Q
            }
            var f = u ? Q : Ec(t),
              d = [t, e, n, r, i, c, h, o, s, a]
            if (
              (f && so(d, f),
              (t = d[0]),
              (e = d[1]),
              (n = d[2]),
              (r = d[3]),
              (i = d[4]),
              (a = d[9] = null == d[9] ? (u ? 0 : t.length) : Ql(d[9] - l, 0)),
              !a && e & (ut | lt) && (e &= ~(ut | lt)),
              e && e != ot)
            )
              g =
                e == ut || e == lt
                  ? gi(t, e, a)
                  : (e != ct && e != (ot | ct)) || i.length
                    ? vi.apply(Q, d)
                    : wi(t, e, n, r)
            else var g = ci(t, e, n)
            return (f ? jc : Lc)(g, d)
          }
          function Ei(t, e, n, r, i, o) {
            var s = i & mt,
              a = t.length,
              u = e.length
            if (a != u && !(s && u > a)) return !1
            var l = o.get(t)
            if (l) return l == e
            var c = -1,
              h = !0,
              f = i & pt ? new nn() : Q
            for (o.set(t, e); ++c < a; ) {
              var d = t[c],
                g = e[c]
              if (r) var p = s ? r(g, d, c, e, t, o) : r(d, g, c, t, e, o)
              if (p !== Q) {
                if (p) continue
                h = !1
                break
              }
              if (f) {
                if (
                  !b(e, function (t, e) {
                    if (!f.has(e) && (d === t || n(d, t, r, i, o)))
                      return f.add(e)
                  })
                ) {
                  h = !1
                  break
                }
              } else if (d !== g && !n(d, g, r, i, o)) {
                h = !1
                break
              }
            }
            return o['delete'](t), h
          }
          function Oi(t, e, n, r, i, o, s) {
            switch (n) {
              case Zt:
                if (
                  t.byteLength != e.byteLength ||
                  t.byteOffset != e.byteOffset
                )
                  return !1
                ;(t = t.buffer), (e = e.buffer)
              case Xt:
                return !(
                  t.byteLength != e.byteLength || !r(new Wl(t), new Wl(e))
                )
              case Lt:
              case Rt:
                return +t == +e
              case qt:
                return t.name == e.name && t.message == e.message
              case Wt:
                return t != +t ? e != +e : t == +e
              case Ht:
              case Ut:
                return t == e + ''
              case Pt:
                var a = V
              case Dt:
                var u = o & mt
                if ((a || (a = G), t.size != e.size && !u)) return !1
                var l = s.get(t)
                return l
                  ? l == e
                  : ((o |= pt), s.set(t, e), Ei(a(t), a(e), r, i, o, s))
              case Vt:
                if (xc) return xc.call(t) == xc.call(e)
            }
            return !1
          }
          function Ai(t, e, n, r, i, o) {
            var s = i & mt,
              a = iu(t),
              u = a.length
            if (u != iu(e).length && !s) return !1
            for (var l = u; l--; ) {
              var c = a[l]
              if (!(s ? c in e : Kn(e, c))) return !1
            }
            var h = o.get(t)
            if (h) return h == e
            var f = !0
            o.set(t, e)
            for (var d = s; ++l < u; ) {
              c = a[l]
              var g = t[c],
                p = e[c]
              if (r) var m = s ? r(p, g, c, e, t, o) : r(g, p, c, t, e, o)
              if (!(m === Q ? g === p || n(g, p, r, i, o) : m)) {
                f = !1
                break
              }
              d || (d = 'constructor' == c)
            }
            if (f && !d) {
              var v = t.constructor,
                _ = e.constructor
              v != _ &&
                'constructor' in t &&
                'constructor' in e &&
                !(
                  'function' == typeof v &&
                  v instanceof v &&
                  'function' == typeof _ &&
                  _ instanceof _
                ) &&
                (f = !1)
            }
            return o['delete'](t), f
          }
          function Ti(t) {
            return Xn(t, iu, Bi)
          }
          function Li(t) {
            return Xn(t, ou, Ac)
          }
          function Ri(t) {
            for (
              var e = t.name + '', n = gc[e], r = Ol.call(gc, e) ? n.length : 0;
              r--;

            ) {
              var i = n[r],
                o = i.func
              if (null == o || o == t) return i.name
            }
            return e
          }
          function qi(t) {
            return (Ol.call(e, 'placeholder') ? e : t).placeholder
          }
          function Ni() {
            var t = e.iteratee || Xu
            return (
              (t = t === Xu ? sr : t),
              arguments.length ? t(arguments[0], arguments[1]) : t
            )
          }
          function Ii(t, e) {
            var n = t.__data__
            return to(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map
          }
          function Pi(t) {
            for (var e = iu(t), n = e.length; n--; ) {
              var r = e[n],
                i = t[r]
              e[n] = [r, i, io(i)]
            }
            return e
          }
          function Wi(t, e) {
            var n = B(t, e)
            return or(n) ? n : Q
          }
          function Fi(t) {
            return Zl(Object(t))
          }
          function Bi(t) {
            return Bl(Object(t))
          }
          function Hi(t) {
            return Ll.call(t)
          }
          function Di(t, e, n) {
            for (var r = -1, i = n.length; ++r < i; ) {
              var o = n[r],
                s = o.size
              switch (o.type) {
                case 'drop':
                  t += s
                  break
                case 'dropRight':
                  e -= s
                  break
                case 'take':
                  e = tc(e, t + s)
                  break
                case 'takeRight':
                  t = Ql(t, e - s)
              }
            }
            return { start: t, end: e }
          }
          function Ui(t, e, n) {
            e = Qi(e, t) ? [e] : Dr(e)
            for (var r, i = -1, o = e.length; ++i < o; ) {
              var s = co(e[i])
              if (!(r = null != t && n(t, s))) break
              t = t[s]
            }
            if (r) return r
            var o = t ? t.length : 0
            return !!o && va(o) && Yi(s, o) && (vh(t) || Ta(t) || ra(t))
          }
          function Vi(t) {
            var e = t.length,
              n = t.constructor(e)
            return (
              e &&
                'string' == typeof t[0] &&
                Ol.call(t, 'index') &&
                ((n.index = t.index), (n.input = t.input)),
              n
            )
          }
          function $i(t) {
            return 'function' != typeof t.constructor || ro(t) ? {} : An(Fi(t))
          }
          function Gi(t, e, n, r) {
            var i = t.constructor
            switch (e) {
              case Xt:
                return $r(t)
              case Lt:
              case Rt:
                return new i(+t)
              case Zt:
                return Gr(t, r)
              case Kt:
              case Yt:
              case Jt:
              case Qt:
              case te:
              case ee:
              case ne:
              case re:
              case ie:
                return Jr(t, r)
              case Pt:
                return Xr(t, r, n)
              case Wt:
              case Ut:
                return new i(t)
              case Ht:
                return Zr(t)
              case Dt:
                return Kr(t, r, n)
              case Vt:
                return Yr(t)
            }
          }
          function Xi(t) {
            var e = t ? t.length : Q
            return va(e) && (vh(t) || Ta(t) || ra(t)) ? E(e, String) : null
          }
          function Zi(t) {
            return vh(t) || ra(t)
          }
          function Ki(t) {
            return vh(t) && !(2 == t.length && !pa(t[0]))
          }
          function Yi(t, e) {
            return (
              (e = null == e ? Ct : e),
              !!e &&
                ('number' == typeof t || Te.test(t)) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
            )
          }
          function Ji(t, e, n) {
            if (!_a(n)) return !1
            var r = 'undefined' == typeof e ? 'undefined' : o(e)
            return (
              !!('number' == r
                ? oa(n) && Yi(e, n.length)
                : 'string' == r && e in n) && na(n[e], t)
            )
          }
          function Qi(t, e) {
            if (vh(t)) return !1
            var n = 'undefined' == typeof t ? 'undefined' : o(t)
            return (
              !(
                'number' != n &&
                'symbol' != n &&
                'boolean' != n &&
                null != t &&
                !La(t)
              ) ||
              me.test(t) ||
              !pe.test(t) ||
              (null != e && t in Object(e))
            )
          }
          function to(t) {
            var e = 'undefined' == typeof t ? 'undefined' : o(t)
            return 'string' == e ||
              'number' == e ||
              'symbol' == e ||
              'boolean' == e
              ? '__proto__' !== t
              : null === t
          }
          function eo(t) {
            var n = Ri(t),
              r = e[n]
            if ('function' != typeof r || !(n in i.prototype)) return !1
            if (t === r) return !0
            var o = Ec(r)
            return !!o && t === o[0]
          }
          function no(t) {
            return !!Ml && Ml in t
          }
          function ro(t) {
            var e = t && t.constructor
            return t === (('function' == typeof e && e.prototype) || Cl)
          }
          function io(t) {
            return t === t && !_a(t)
          }
          function oo(t, e) {
            return function (n) {
              return null != n && n[t] === e && (e !== Q || t in Object(n))
            }
          }
          function so(t, e) {
            var n = t[1],
              r = e[1],
              i = n | r,
              o = i < (ot | st | ft),
              s =
                (r == ft && n == ut) ||
                (r == ft && n == dt && t[7].length <= e[8]) ||
                (r == (ft | dt) && e[7].length <= e[8] && n == ut)
            if (!o && !s) return t
            r & ot && ((t[2] = e[2]), (i |= n & ot ? 0 : at))
            var a = e[3]
            if (a) {
              var u = t[3]
              ;(t[3] = u ? ei(u, a, e[4]) : a), (t[4] = u ? $(t[3], it) : e[4])
            }
            return (
              (a = e[5]),
              a &&
                ((u = t[5]),
                (t[5] = u ? ni(u, a, e[6]) : a),
                (t[6] = u ? $(t[5], it) : e[6])),
              (a = e[7]),
              a && (t[7] = a),
              r & ft && (t[8] = null == t[8] ? e[8] : tc(t[8], e[8])),
              null == t[9] && (t[9] = e[9]),
              (t[0] = e[0]),
              (t[1] = i),
              t
            )
          }
          function ao(t, e, n, r, i, o) {
            return _a(t) && _a(e) && dr(t, e, Q, ao, o.set(e, t)), t
          }
          function uo(t, e) {
            return 1 == e.length ? t : Gn(t, jr(e, 0, -1))
          }
          function lo(t, e) {
            for (var n = t.length, r = tc(e.length, n), i = ri(t); r--; ) {
              var o = e[r]
              t[r] = Yi(o, n) ? i[o] : Q
            }
            return t
          }
          function co(t) {
            if ('string' == typeof t || La(t)) return t
            var e = t + ''
            return '0' == e && 1 / t == -kt ? '-0' : e
          }
          function ho(t) {
            if (null != t) {
              try {
                return El.call(t)
              } catch (e) {}
              try {
                return t + ''
              } catch (e) {}
            }
            return ''
          }
          function fo(t) {
            if (t instanceof i) return t.clone()
            var e = new r(t.__wrapped__, t.__chain__)
            return (
              (e.__actions__ = ri(t.__actions__)),
              (e.__index__ = t.__index__),
              (e.__values__ = t.__values__),
              e
            )
          }
          function go(t, e, n) {
            e = (n ? Ji(t, e, n) : e === Q) ? 1 : Ql(Fa(e), 0)
            var r = t ? t.length : 0
            if (!r || e < 1) return []
            for (var i = 0, o = 0, s = Array(Gl(r / e)); i < r; )
              s[o++] = jr(t, i, (i += e))
            return s
          }
          function po(t) {
            for (var e = -1, n = t ? t.length : 0, r = 0, i = []; ++e < n; ) {
              var o = t[e]
              o && (i[r++] = o)
            }
            return i
          }
          function mo() {
            for (
              var t = arguments.length,
                e = Array(t ? t - 1 : 0),
                n = arguments[0],
                r = t;
              r--;

            )
              e[r - 1] = arguments[r]
            return t ? v(vh(n) ? ri(n) : [n], Bn(e, 1)) : []
          }
          function vo(t, e, n) {
            var r = t ? t.length : 0
            return r
              ? ((e = n || e === Q ? 1 : Fa(e)), jr(t, e < 0 ? 0 : e, r))
              : []
          }
          function _o(t, e, n) {
            var r = t ? t.length : 0
            return r
              ? ((e = n || e === Q ? 1 : Fa(e)),
                (e = r - e),
                jr(t, 0, e < 0 ? 0 : e))
              : []
          }
          function yo(t, e) {
            return t && t.length ? Ir(t, Ni(e, 3), !0, !0) : []
          }
          function bo(t, e) {
            return t && t.length ? Ir(t, Ni(e, 3), !0) : []
          }
          function xo(t, e, n, r) {
            var i = t ? t.length : 0
            return i
              ? (n && 'number' != typeof n && Ji(t, e, n) && ((n = 0), (r = i)),
                Wn(t, e, n, r))
              : []
          }
          function wo(t, e, n) {
            var r = t ? t.length : 0
            if (!r) return -1
            var i = null == n ? 0 : Fa(n)
            return i < 0 && (i = Ql(r + i, 0)), w(t, Ni(e, 3), i)
          }
          function So(t, e, n) {
            var r = t ? t.length : 0
            if (!r) return -1
            var i = r - 1
            return (
              n !== Q &&
                ((i = Fa(n)), (i = n < 0 ? Ql(r + i, 0) : tc(i, r - 1))),
              w(t, Ni(e, 3), i, !0)
            )
          }
          function ko(t) {
            return (t ? t.length : 0) ? Bn(t, 1) : []
          }
          function Co(t) {
            return (t ? t.length : 0) ? Bn(t, kt) : []
          }
          function zo(t, e) {
            return (t ? t.length : 0)
              ? ((e = e === Q ? 1 : Fa(e)), Bn(t, e))
              : []
          }
          function jo(t) {
            for (var e = -1, n = t ? t.length : 0, r = {}; ++e < n; ) {
              var i = t[e]
              r[i[0]] = i[1]
            }
            return r
          }
          function Mo(t) {
            return t && t.length ? t[0] : Q
          }
          function Eo(t, e, n) {
            var r = t ? t.length : 0
            if (!r) return -1
            var i = null == n ? 0 : Fa(n)
            return i < 0 && (i = Ql(r + i, 0)), S(t, e, i)
          }
          function Oo(t) {
            return _o(t, 1)
          }
          function Ao(t, e) {
            return t ? Yl.call(t, e) : ''
          }
          function To(t) {
            var e = t ? t.length : 0
            return e ? t[e - 1] : Q
          }
          function Lo(t, e, n) {
            var r = t ? t.length : 0
            if (!r) return -1
            var i = r
            if (
              (n !== Q &&
                ((i = Fa(n)), (i = (i < 0 ? Ql(r + i, 0) : tc(i, r - 1)) + 1)),
              e !== e)
            )
              return H(t, i - 1, !0)
            for (; i--; ) if (t[i] === e) return i
            return -1
          }
          function Ro(t, e) {
            return t && t.length ? pr(t, Fa(e)) : Q
          }
          function qo(t, e) {
            return t && t.length && e && e.length ? xr(t, e) : t
          }
          function No(t, e, n) {
            return t && t.length && e && e.length ? xr(t, e, Ni(n)) : t
          }
          function Io(t, e, n) {
            return t && t.length && e && e.length ? xr(t, e, Q, n) : t
          }
          function Po(t, e) {
            var n = []
            if (!t || !t.length) return n
            var r = -1,
              i = [],
              o = t.length
            for (e = Ni(e, 3); ++r < o; ) {
              var s = t[r]
              e(s, r, t) && (n.push(s), i.push(r))
            }
            return wr(t, i), n
          }
          function Wo(t) {
            return t ? ic.call(t) : t
          }
          function Fo(t, e, n) {
            var r = t ? t.length : 0
            return r
              ? (n && 'number' != typeof n && Ji(t, e, n)
                  ? ((e = 0), (n = r))
                  : ((e = null == e ? 0 : Fa(e)), (n = n === Q ? r : Fa(n))),
                jr(t, e, n))
              : []
          }
          function Bo(t, e) {
            return Er(t, e)
          }
          function Ho(t, e, n) {
            return Or(t, e, Ni(n))
          }
          function Do(t, e) {
            var n = t ? t.length : 0
            if (n) {
              var r = Er(t, e)
              if (r < n && na(t[r], e)) return r
            }
            return -1
          }
          function Uo(t, e) {
            return Er(t, e, !0)
          }
          function Vo(t, e, n) {
            return Or(t, e, Ni(n), !0)
          }
          function $o(t, e) {
            if (t ? t.length : 0) {
              var n = Er(t, e, !0) - 1
              if (na(t[n], e)) return n
            }
            return -1
          }
          function Go(t) {
            return t && t.length ? Ar(t) : []
          }
          function Xo(t, e) {
            return t && t.length ? Ar(t, Ni(e)) : []
          }
          function Zo(t) {
            return vo(t, 1)
          }
          function Ko(t, e, n) {
            return t && t.length
              ? ((e = n || e === Q ? 1 : Fa(e)), jr(t, 0, e < 0 ? 0 : e))
              : []
          }
          function Yo(t, e, n) {
            var r = t ? t.length : 0
            return r
              ? ((e = n || e === Q ? 1 : Fa(e)),
                (e = r - e),
                jr(t, e < 0 ? 0 : e, r))
              : []
          }
          function Jo(t, e) {
            return t && t.length ? Ir(t, Ni(e, 3), !1, !0) : []
          }
          function Qo(t, e) {
            return t && t.length ? Ir(t, Ni(e, 3)) : []
          }
          function ts(t) {
            return t && t.length ? Rr(t) : []
          }
          function es(t, e) {
            return t && t.length ? Rr(t, Ni(e)) : []
          }
          function ns(t, e) {
            return t && t.length ? Rr(t, Q, e) : []
          }
          function rs(t) {
            if (!t || !t.length) return []
            var e = 0
            return (
              (t = d(t, function (t) {
                if (sa(t)) return (e = Ql(t.length, e)), !0
              })),
              E(e, function (e) {
                return m(t, yr(e))
              })
            )
          }
          function is(t, e) {
            if (!t || !t.length) return []
            var n = rs(t)
            return null == e
              ? n
              : m(n, function (t) {
                  return u(e, Q, t)
                })
          }
          function os(t, e) {
            return Fr(t || [], e || [], gn)
          }
          function ss(t, e) {
            return Fr(t || [], e || [], zr)
          }
          function as(t) {
            var n = e(t)
            return (n.__chain__ = !0), n
          }
          function us(t, e) {
            return e(t), t
          }
          function ls(t, e) {
            return e(t)
          }
          function cs() {
            return as(this)
          }
          function hs() {
            return new r(this.value(), this.__chain__)
          }
          function fs() {
            this.__values__ === Q && (this.__values__ = Pa(this.value()))
            var t = this.__index__ >= this.__values__.length
            return { done: t, value: t ? Q : this.__values__[this.__index__++] }
          }
          function ds() {
            return this
          }
          function gs(t) {
            for (var e, r = this; r instanceof n; ) {
              var i = fo(r)
              ;(i.__index__ = 0),
                (i.__values__ = Q),
                e ? (o.__wrapped__ = i) : (e = i)
              var o = i
              r = r.__wrapped__
            }
            return (o.__wrapped__ = t), e
          }
          function ps() {
            var t = this.__wrapped__
            if (t instanceof i) {
              var e = t
              return (
                this.__actions__.length && (e = new i(this)),
                (e = e.reverse()),
                e.__actions__.push({ func: ls, args: [Wo], thisArg: Q }),
                new r(e, this.__chain__)
              )
            }
            return this.thru(Wo)
          }
          function ms() {
            return Pr(this.__wrapped__, this.__actions__)
          }
          function vs(t, e, n) {
            var r = vh(t) ? f : Nn
            return n && Ji(t, e, n) && (e = Q), r(t, Ni(e, 3))
          }
          function _s(t, e) {
            return (vh(t) ? d : Fn)(t, Ni(e, 3))
          }
          function ys(t, e) {
            return Bn(Cs(t, e), 1)
          }
          function bs(t, e) {
            return Bn(Cs(t, e), kt)
          }
          function xs(t, e, n) {
            return (n = n === Q ? 1 : Fa(n)), Bn(Cs(t, e), n)
          }
          function ws(t, e) {
            return (vh(t) ? c : Sc)(t, Ni(e, 3))
          }
          function Ss(t, e) {
            return (vh(t) ? h : kc)(t, Ni(e, 3))
          }
          function ks(t, e, n, r) {
            ;(t = oa(t) ? t : vu(t)), (n = n && !r ? Fa(n) : 0)
            var i = t.length
            return (
              n < 0 && (n = Ql(i + n, 0)),
              Ta(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && S(t, e, n) > -1
            )
          }
          function Cs(t, e) {
            return (vh(t) ? m : cr)(t, Ni(e, 3))
          }
          function zs(t, e, n, r) {
            return null == t
              ? []
              : (vh(e) || (e = null == e ? [] : [e]),
                (n = r ? Q : n),
                vh(n) || (n = null == n ? [] : [n]),
                mr(t, e, n))
          }
          function js(t, e, n) {
            var r = vh(t) ? _ : z,
              i = arguments.length < 3
            return r(t, Ni(e, 4), n, i, Sc)
          }
          function Ms(t, e, n) {
            var r = vh(t) ? y : z,
              i = arguments.length < 3
            return r(t, Ni(e, 4), n, i, kc)
          }
          function Es(t, e) {
            var n = vh(t) ? d : Fn
            return (
              (e = Ni(e, 3)),
              n(t, function (t, n, r) {
                return !e(t, n, r)
              })
            )
          }
          function Os(t) {
            var e = oa(t) ? t : vu(t),
              n = e.length
            return n > 0 ? e[Sr(0, n - 1)] : Q
          }
          function As(t, e, n) {
            var r = -1,
              i = Pa(t),
              o = i.length,
              s = o - 1
            for (
              e = (n ? Ji(t, e, n) : e === Q) ? 1 : yn(Fa(e), 0, o);
              ++r < e;

            ) {
              var a = Sr(r, s),
                u = i[a]
              ;(i[a] = i[r]), (i[r] = u)
            }
            return (i.length = e), i
          }
          function Ts(t) {
            return As(t, Mt)
          }
          function Ls(t) {
            if (null == t) return 0
            if (oa(t)) {
              var e = t.length
              return e && Ta(t) ? Z(t) : e
            }
            if (ya(t)) {
              var n = Hi(t)
              if (n == Pt || n == Dt) return t.size
            }
            return iu(t).length
          }
          function Rs(t, e, n) {
            var r = vh(t) ? b : Mr
            return n && Ji(t, e, n) && (e = Q), r(t, Ni(e, 3))
          }
          function qs() {
            return yl.now()
          }
          function Ns(t, e) {
            if ('function' != typeof e) throw new Sl(nt)
            return (
              (t = Fa(t)),
              function () {
                if (--t < 1) return e.apply(this, arguments)
              }
            )
          }
          function Is(t, e, n) {
            return (
              (e = n ? Q : e),
              (e = t && null == e ? t.length : e),
              Mi(t, ft, Q, Q, Q, Q, e)
            )
          }
          function Ps(t, e) {
            var n
            if ('function' != typeof e) throw new Sl(nt)
            return (
              (t = Fa(t)),
              function () {
                return (
                  --t > 0 && (n = e.apply(this, arguments)),
                  t <= 1 && (e = Q),
                  n
                )
              }
            )
          }
          function Ws(t, e, n) {
            e = n ? Q : e
            var r = Mi(t, ut, Q, Q, Q, Q, Q, e)
            return (r.placeholder = Ws.placeholder), r
          }
          function Fs(t, e, n) {
            e = n ? Q : e
            var r = Mi(t, lt, Q, Q, Q, Q, Q, e)
            return (r.placeholder = Fs.placeholder), r
          }
          function Bs(t, e, n) {
            function r(e) {
              var n = f,
                r = d
              return (f = d = Q), (_ = e), (p = t.apply(r, n))
            }
            function i(t) {
              return (_ = t), (m = $l(a, e)), y ? r(t) : p
            }
            function o(t) {
              var n = t - v,
                r = t - _,
                i = e - n
              return b ? tc(i, g - r) : i
            }
            function s(t) {
              var n = t - v,
                r = t - _
              return v === Q || n >= e || n < 0 || (b && r >= g)
            }
            function a() {
              var t = qs()
              return s(t) ? u(t) : void (m = $l(a, o(t)))
            }
            function u(t) {
              return (m = Q), x && f ? r(t) : ((f = d = Q), p)
            }
            function l() {
              ;(_ = 0), (f = v = d = m = Q)
            }
            function c() {
              return m === Q ? p : u(qs())
            }
            function h() {
              var t = qs(),
                n = s(t)
              if (((f = arguments), (d = this), (v = t), n)) {
                if (m === Q) return i(v)
                if (b) return (m = $l(a, e)), r(v)
              }
              return m === Q && (m = $l(a, e)), p
            }
            var f,
              d,
              g,
              p,
              m,
              v,
              _ = 0,
              y = !1,
              b = !1,
              x = !0
            if ('function' != typeof t) throw new Sl(nt)
            return (
              (e = Ha(e) || 0),
              _a(n) &&
                ((y = !!n.leading),
                (b = 'maxWait' in n),
                (g = b ? Ql(Ha(n.maxWait) || 0, e) : g),
                (x = 'trailing' in n ? !!n.trailing : x)),
              (h.cancel = l),
              (h.flush = c),
              h
            )
          }
          function Hs(t) {
            return Mi(t, gt)
          }
          function Ds(t, e) {
            if ('function' != typeof t || (e && 'function' != typeof e))
              throw new Sl(nt)
            var n = function r() {
              var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache
              if (o.has(i)) return o.get(i)
              var s = t.apply(this, n)
              return (r.cache = o.set(i, s)), s
            }
            return (n.cache = new (Ds.Cache || Ke)()), n
          }
          function Us(t) {
            if ('function' != typeof t) throw new Sl(nt)
            return function () {
              return !t.apply(this, arguments)
            }
          }
          function Vs(t) {
            return Ps(2, t)
          }
          function $s(t, e) {
            if ('function' != typeof t) throw new Sl(nt)
            return (
              (e = Ql(e === Q ? t.length - 1 : Fa(e), 0)),
              function () {
                for (
                  var n = arguments,
                    r = -1,
                    i = Ql(n.length - e, 0),
                    o = Array(i);
                  ++r < i;

                )
                  o[r] = n[e + r]
                switch (e) {
                  case 0:
                    return t.call(this, o)
                  case 1:
                    return t.call(this, n[0], o)
                  case 2:
                    return t.call(this, n[0], n[1], o)
                }
                var s = Array(e + 1)
                for (r = -1; ++r < e; ) s[r] = n[r]
                return (s[e] = o), u(t, this, s)
              }
            )
          }
          function Gs(t, e) {
            if ('function' != typeof t) throw new Sl(nt)
            return (
              (e = e === Q ? 0 : Ql(Fa(e), 0)),
              $s(function (n) {
                var r = n[e],
                  i = Ur(n, 0, e)
                return r && v(i, r), u(t, this, i)
              })
            )
          }
          function Xs(t, e, n) {
            var r = !0,
              i = !0
            if ('function' != typeof t) throw new Sl(nt)
            return (
              _a(n) &&
                ((r = 'leading' in n ? !!n.leading : r),
                (i = 'trailing' in n ? !!n.trailing : i)),
              Bs(t, e, { leading: r, maxWait: e, trailing: i })
            )
          }
          function Zs(t) {
            return Is(t, 1)
          }
          function Ks(t, e) {
            return (e = null == e ? Gu : e), fh(e, t)
          }
          function Ys() {
            if (!arguments.length) return []
            var t = arguments[0]
            return vh(t) ? t : [t]
          }
          function Js(t) {
            return wn(t, !1, !0)
          }
          function Qs(t, e) {
            return wn(t, !1, !0, e)
          }
          function ta(t) {
            return wn(t, !0, !0)
          }
          function ea(t, e) {
            return wn(t, !0, !0, e)
          }
          function na(t, e) {
            return t === e || (t !== t && e !== e)
          }
          function ra(t) {
            return (
              sa(t) &&
              Ol.call(t, 'callee') &&
              (!Ul.call(t, 'callee') || Ll.call(t) == At)
            )
          }
          function ia(t) {
            return ya(t) && Ll.call(t) == Xt
          }
          function oa(t) {
            return null != t && va(Oc(t)) && !pa(t)
          }
          function sa(t) {
            return ya(t) && oa(t)
          }
          function aa(t) {
            return t === !0 || t === !1 || (ya(t) && Ll.call(t) == Lt)
          }
          function ua(t) {
            return ya(t) && Ll.call(t) == Rt
          }
          function la(t) {
            return !!t && 1 === t.nodeType && ya(t) && !Ma(t)
          }
          function ca(t) {
            if (oa(t) && (vh(t) || Ta(t) || pa(t.splice) || ra(t) || _h(t)))
              return !t.length
            if (ya(t)) {
              var e = Hi(t)
              if (e == Pt || e == Dt) return !t.size
            }
            for (var n in t) if (Ol.call(t, n)) return !1
            return !(dc && iu(t).length)
          }
          function ha(t, e) {
            return nr(t, e)
          }
          function fa(t, e, n) {
            n = 'function' == typeof n ? n : Q
            var r = n ? n(t, e) : Q
            return r === Q ? nr(t, e, n) : !!r
          }
          function da(t) {
            return (
              !!ya(t) &&
              (Ll.call(t) == qt ||
                ('string' == typeof t.message && 'string' == typeof t.name))
            )
          }
          function ga(t) {
            return 'number' == typeof t && Kl(t)
          }
          function pa(t) {
            var e = _a(t) ? Ll.call(t) : ''
            return e == Nt || e == It
          }
          function ma(t) {
            return 'number' == typeof t && t == Fa(t)
          }
          function va(t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Ct
          }
          function _a(t) {
            var e = 'undefined' == typeof t ? 'undefined' : o(t)
            return !!t && ('object' == e || 'function' == e)
          }
          function ya(t) {
            return (
              !!t && 'object' == ('undefined' == typeof t ? 'undefined' : o(t))
            )
          }
          function ba(t) {
            return ya(t) && Hi(t) == Pt
          }
          function xa(t, e) {
            return t === e || ir(t, e, Pi(e))
          }
          function wa(t, e, n) {
            return (n = 'function' == typeof n ? n : Q), ir(t, e, Pi(e), n)
          }
          function Sa(t) {
            return ja(t) && t != +t
          }
          function ka(t) {
            if (Tc(t))
              throw new bl(
                'This method is not supported with `core-js`. Try https://github.com/es-shims.',
              )
            return or(t)
          }
          function Ca(t) {
            return null === t
          }
          function za(t) {
            return null == t
          }
          function ja(t) {
            return 'number' == typeof t || (ya(t) && Ll.call(t) == Wt)
          }
          function Ma(t) {
            if (!ya(t) || Ll.call(t) != Ft || D(t)) return !1
            var e = Fi(t)
            if (null === e) return !0
            var n = Ol.call(e, 'constructor') && e.constructor
            return 'function' == typeof n && n instanceof n && El.call(n) == Tl
          }
          function Ea(t) {
            return _a(t) && Ll.call(t) == Ht
          }
          function Oa(t) {
            return ma(t) && t >= -Ct && t <= Ct
          }
          function Aa(t) {
            return ya(t) && Hi(t) == Dt
          }
          function Ta(t) {
            return 'string' == typeof t || (!vh(t) && ya(t) && Ll.call(t) == Ut)
          }
          function La(t) {
            return (
              'symbol' == ('undefined' == typeof t ? 'undefined' : o(t)) ||
              (ya(t) && Ll.call(t) == Vt)
            )
          }
          function Ra(t) {
            return ya(t) && va(t.length) && !!Mn[Ll.call(t)]
          }
          function qa(t) {
            return t === Q
          }
          function Na(t) {
            return ya(t) && Hi(t) == $t
          }
          function Ia(t) {
            return ya(t) && Ll.call(t) == Gt
          }
          function Pa(t) {
            if (!t) return []
            if (oa(t)) return Ta(t) ? K(t) : ri(t)
            if (Hl && t[Hl]) return U(t[Hl]())
            var e = Hi(t)
            return (e == Pt ? V : e == Dt ? G : vu)(t)
          }
          function Wa(t) {
            return t
              ? ((t = Ha(t)),
                t === kt || t === -kt ? (t < 0 ? -1 : 1) * zt : t === t ? t : 0)
              : 0 === t
                ? t
                : 0
          }
          function Fa(t) {
            var e = Wa(t),
              n = e % 1
            return e === e ? (n ? e - n : e) : 0
          }
          function Ba(t) {
            return t ? yn(Fa(t), 0, Mt) : 0
          }
          function Ha(t) {
            if ('number' == typeof t) return t
            if (La(t)) return jt
            if (_a(t)) {
              var e = pa(t.valueOf) ? t.valueOf() : t
              t = _a(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = t.replace(be, '')
            var n = Ee.test(t)
            return n || Ae.test(t)
              ? qn(t.slice(2), n ? 2 : 8)
              : Me.test(t)
                ? jt
                : +t
          }
          function Da(t) {
            return ii(t, ou(t))
          }
          function Ua(t) {
            return yn(Fa(t), -Ct, Ct)
          }
          function Va(t) {
            return null == t ? '' : Lr(t)
          }
          function $a(t, e) {
            var n = An(t)
            return e ? vn(n, e) : n
          }
          function Ga(t, e) {
            return x(t, Ni(e, 3), Un)
          }
          function Xa(t, e) {
            return x(t, Ni(e, 3), Vn)
          }
          function Za(t, e) {
            return null == t ? t : Cc(t, Ni(e, 3), ou)
          }
          function Ka(t, e) {
            return null == t ? t : zc(t, Ni(e, 3), ou)
          }
          function Ya(t, e) {
            return t && Un(t, Ni(e, 3))
          }
          function Ja(t, e) {
            return t && Vn(t, Ni(e, 3))
          }
          function Qa(t) {
            return null == t ? [] : $n(t, iu(t))
          }
          function tu(t) {
            return null == t ? [] : $n(t, ou(t))
          }
          function eu(t, e, n) {
            var r = null == t ? Q : Gn(t, e)
            return r === Q ? n : r
          }
          function nu(t, e) {
            return null != t && Ui(t, e, Kn)
          }
          function ru(t, e) {
            return null != t && Ui(t, e, Yn)
          }
          function iu(t) {
            var e = ro(t)
            if (!e && !oa(t)) return ar(t)
            var n = Xi(t),
              r = !!n,
              i = n || [],
              o = i.length
            for (var s in t)
              !Kn(t, s) ||
                (r && ('length' == s || Yi(s, o))) ||
                (e && 'constructor' == s) ||
                i.push(s)
            return i
          }
          function ou(t) {
            for (
              var e = -1,
                n = ro(t),
                r = ur(t),
                i = r.length,
                o = Xi(t),
                s = !!o,
                a = o || [],
                u = a.length;
              ++e < i;

            ) {
              var l = r[e]
              ;(s && ('length' == l || Yi(l, u))) ||
                ('constructor' == l && (n || !Ol.call(t, l))) ||
                a.push(l)
            }
            return a
          }
          function su(t, e) {
            var n = {}
            return (
              (e = Ni(e, 3)),
              Un(t, function (t, r, i) {
                n[e(t, r, i)] = t
              }),
              n
            )
          }
          function au(t, e) {
            var n = {}
            return (
              (e = Ni(e, 3)),
              Un(t, function (t, r, i) {
                n[r] = e(t, r, i)
              }),
              n
            )
          }
          function uu(t, e) {
            return (
              (e = Ni(e)),
              _r(t, function (t, n) {
                return !e(t, n)
              })
            )
          }
          function lu(t, e) {
            return null == t ? {} : _r(t, Ni(e))
          }
          function cu(t, e, n) {
            e = Qi(e, t) ? [e] : Dr(e)
            var r = -1,
              i = e.length
            for (i || ((t = Q), (i = 1)); ++r < i; ) {
              var o = null == t ? Q : t[co(e[r])]
              o === Q && ((r = i), (o = n)), (t = pa(o) ? o.call(t) : o)
            }
            return t
          }
          function hu(t, e, n) {
            return null == t ? t : zr(t, e, n)
          }
          function fu(t, e, n, r) {
            return (
              (r = 'function' == typeof r ? r : Q),
              null == t ? t : zr(t, e, n, r)
            )
          }
          function du(t, e, n) {
            var r = vh(t) || Ra(t)
            if (((e = Ni(e, 4)), null == n))
              if (r || _a(t)) {
                var i = t.constructor
                n = r ? (vh(t) ? new i() : []) : pa(i) ? An(Fi(t)) : {}
              } else n = {}
            return (
              (r ? c : Un)(t, function (t, r, i) {
                return e(n, t, r, i)
              }),
              n
            )
          }
          function gu(t, e) {
            return null == t || qr(t, e)
          }
          function pu(t, e, n) {
            return null == t ? t : Nr(t, e, Hr(n))
          }
          function mu(t, e, n, r) {
            return (
              (r = 'function' == typeof r ? r : Q),
              null == t ? t : Nr(t, e, Hr(n), r)
            )
          }
          function vu(t) {
            return t ? T(t, iu(t)) : []
          }
          function _u(t) {
            return null == t ? [] : T(t, ou(t))
          }
          function yu(t, e, n) {
            return (
              n === Q && ((n = e), (e = Q)),
              n !== Q && ((n = Ha(n)), (n = n === n ? n : 0)),
              e !== Q && ((e = Ha(e)), (e = e === e ? e : 0)),
              yn(Ha(t), e, n)
            )
          }
          function bu(t, e, n) {
            return (
              (e = Ha(e) || 0),
              n === Q ? ((n = e), (e = 0)) : (n = Ha(n) || 0),
              (t = Ha(t)),
              Jn(t, e, n)
            )
          }
          function xu(t, e, n) {
            if (
              (n && 'boolean' != typeof n && Ji(t, e, n) && (e = n = Q),
              n === Q &&
                ('boolean' == typeof e
                  ? ((n = e), (e = Q))
                  : 'boolean' == typeof t && ((n = t), (t = Q))),
              t === Q && e === Q
                ? ((t = 0), (e = 1))
                : ((t = Ha(t) || 0),
                  e === Q ? ((e = t), (t = 0)) : (e = Ha(e) || 0)),
              t > e)
            ) {
              var r = t
              ;(t = e), (e = r)
            }
            if (n || t % 1 || e % 1) {
              var i = nc()
              return tc(t + i * (e - t + Rn('1e-' + ((i + '').length - 1))), e)
            }
            return Sr(t, e)
          }
          function wu(t) {
            return Uh(Va(t).toLowerCase())
          }
          function Su(t) {
            return (t = Va(t)), t && t.replace(Le, P).replace(xn, '')
          }
          function ku(t, e, n) {
            ;(t = Va(t)), (e = Lr(e))
            var r = t.length
            return (
              (n = n === Q ? r : yn(Fa(n), 0, r)),
              (n -= e.length),
              n >= 0 && t.indexOf(e, n) == n
            )
          }
          function Cu(t) {
            return (t = Va(t)), t && he.test(t) ? t.replace(le, W) : t
          }
          function zu(t) {
            return (t = Va(t)), t && ye.test(t) ? t.replace(_e, '\\$&') : t
          }
          function ju(t, e, n) {
            ;(t = Va(t)), (e = Fa(e))
            var r = e ? Z(t) : 0
            if (!e || r >= e) return t
            var i = (e - r) / 2
            return xi(Xl(i), n) + t + xi(Gl(i), n)
          }
          function Mu(t, e, n) {
            ;(t = Va(t)), (e = Fa(e))
            var r = e ? Z(t) : 0
            return e && r < e ? t + xi(e - r, n) : t
          }
          function Eu(t, e, n) {
            ;(t = Va(t)), (e = Fa(e))
            var r = e ? Z(t) : 0
            return e && r < e ? xi(e - r, n) + t : t
          }
          function Ou(t, e, n) {
            return (
              n || null == e ? (e = 0) : e && (e = +e),
              (t = Va(t).replace(be, '')),
              ec(t, e || (je.test(t) ? 16 : 10))
            )
          }
          function Au(t, e, n) {
            return (e = (n ? Ji(t, e, n) : e === Q) ? 1 : Fa(e)), Cr(Va(t), e)
          }
          function Tu() {
            var t = arguments,
              e = Va(t[0])
            return t.length < 3 ? e : rc.call(e, t[1], t[2])
          }
          function Lu(t, e, n) {
            return (
              n && 'number' != typeof n && Ji(t, e, n) && (e = n = Q),
              (n = n === Q ? Mt : n >>> 0)
                ? ((t = Va(t)),
                  t &&
                  ('string' == typeof e || (null != e && !Ea(e))) &&
                  ((e = Lr(e)), '' == e && kn.test(t))
                    ? Ur(K(t), 0, n)
                    : oc.call(t, e, n))
                : []
            )
          }
          function Ru(t, e, n) {
            return (
              (t = Va(t)),
              (n = yn(Fa(n), 0, t.length)),
              t.lastIndexOf(Lr(e), n) == n
            )
          }
          function qu(t, n, r) {
            var i = e.templateSettings
            r && Ji(t, n, r) && (n = Q), (t = Va(t)), (n = Sh({}, n, i, fn))
            var o,
              s,
              a = Sh({}, n.imports, i.imports, fn),
              u = iu(a),
              l = T(a, u),
              c = 0,
              h = n.interpolate || Re,
              f = "__p += '",
              d = wl(
                (n.escape || Re).source +
                  '|' +
                  h.source +
                  '|' +
                  (h === ge ? Ce : Re).source +
                  '|' +
                  (n.evaluate || Re).source +
                  '|$',
                'g',
              ),
              g =
                '//# sourceURL=' +
                ('sourceURL' in n
                  ? n.sourceURL
                  : 'lodash.templateSources[' + ++jn + ']') +
                '\n'
            t.replace(d, function (e, n, r, i, a, u) {
              return (
                r || (r = i),
                (f += t.slice(c, u).replace(qe, F)),
                n && ((o = !0), (f += "' +\n__e(" + n + ") +\n'")),
                a && ((s = !0), (f += "';\n" + a + ";\n__p += '")),
                r &&
                  (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                (c = u + e.length),
                e
              )
            }),
              (f += "';\n")
            var p = n.variable
            p || (f = 'with (obj) {\n' + f + '\n}\n'),
              (f = (s ? f.replace(oe, '') : f)
                .replace(se, '$1')
                .replace(ae, '$1;')),
              (f =
                'function(' +
                (p || 'obj') +
                ') {\n' +
                (p ? '' : 'obj || (obj = {});\n') +
                "var __t, __p = ''" +
                (o ? ', __e = _.escape' : '') +
                (s
                  ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                  : ';\n') +
                f +
                'return __p\n}')
            var m = Vh(function () {
              return Function(u, g + 'return ' + f).apply(Q, l)
            })
            if (((m.source = f), da(m))) throw m
            return m
          }
          function Nu(t) {
            return Va(t).toLowerCase()
          }
          function Iu(t) {
            return Va(t).toUpperCase()
          }
          function Pu(t, e, n) {
            if (((t = Va(t)), t && (n || e === Q))) return t.replace(be, '')
            if (!t || !(e = Lr(e))) return t
            var r = K(t),
              i = K(e)
            return Ur(r, R(r, i), q(r, i) + 1).join('')
          }
          function Wu(t, e, n) {
            if (((t = Va(t)), t && (n || e === Q))) return t.replace(we, '')
            if (!t || !(e = Lr(e))) return t
            var r = K(t)
            return Ur(r, 0, q(r, K(e)) + 1).join('')
          }
          function Fu(t, e, n) {
            if (((t = Va(t)), t && (n || e === Q))) return t.replace(xe, '')
            if (!t || !(e = Lr(e))) return t
            var r = K(t)
            return Ur(r, R(r, K(e))).join('')
          }
          function Bu(t, e) {
            var n = vt,
              r = _t
            if (_a(e)) {
              var i = 'separator' in e ? e.separator : i
              ;(n = 'length' in e ? Fa(e.length) : n),
                (r = 'omission' in e ? Lr(e.omission) : r)
            }
            t = Va(t)
            var o = t.length
            if (kn.test(t)) {
              var s = K(t)
              o = s.length
            }
            if (n >= o) return t
            var a = n - Z(r)
            if (a < 1) return r
            var u = s ? Ur(s, 0, a).join('') : t.slice(0, a)
            if (i === Q) return u + r
            if ((s && (a += u.length - a), Ea(i))) {
              if (t.slice(a).search(i)) {
                var l,
                  c = u
                for (
                  i.global || (i = wl(i.source, Va(ze.exec(i)) + 'g')),
                    i.lastIndex = 0;
                  (l = i.exec(c));

                )
                  var h = l.index
                u = u.slice(0, h === Q ? a : h)
              }
            } else if (t.indexOf(Lr(i), a) != a) {
              var f = u.lastIndexOf(i)
              f > -1 && (u = u.slice(0, f))
            }
            return u + r
          }
          function Hu(t) {
            return (t = Va(t)), t && ce.test(t) ? t.replace(ue, Y) : t
          }
          function Du(t, e, n) {
            return (
              (t = Va(t)),
              (e = n ? Q : e),
              e === Q && (e = Cn.test(t) ? Sn : Se),
              t.match(e) || []
            )
          }
          function Uu(t) {
            var e = t ? t.length : 0,
              n = Ni()
            return (
              (t = e
                ? m(t, function (t) {
                    if ('function' != typeof t[1]) throw new Sl(nt)
                    return [n(t[0]), t[1]]
                  })
                : []),
              $s(function (n) {
                for (var r = -1; ++r < e; ) {
                  var i = t[r]
                  if (u(i[0], this, n)) return u(i[1], this, n)
                }
              })
            )
          }
          function Vu(t) {
            return On(wn(t, !0))
          }
          function $u(t) {
            return function () {
              return t
            }
          }
          function Gu(t) {
            return t
          }
          function Xu(t) {
            return sr('function' == typeof t ? t : wn(t, !0))
          }
          function Zu(t) {
            return hr(wn(t, !0))
          }
          function Ku(t, e) {
            return fr(t, wn(e, !0))
          }
          function Yu(t, e, n) {
            var r = iu(e),
              i = $n(e, r)
            null != n ||
              (_a(e) && (i.length || !r.length)) ||
              ((n = e), (e = t), (t = this), (i = $n(e, iu(e))))
            var o = !(_a(n) && 'chain' in n && !n.chain),
              s = pa(t)
            return (
              c(i, function (n) {
                var r = e[n]
                ;(t[n] = r),
                  s &&
                    (t.prototype[n] = function () {
                      var e = this.__chain__
                      if (o || e) {
                        var n = t(this.__wrapped__)
                        return (
                          (n.__actions__ = ri(this.__actions__)).push({
                            func: r,
                            args: arguments,
                            thisArg: t,
                          }),
                          (n.__chain__ = e),
                          n
                        )
                      }
                      return r.apply(t, v([this.value()], arguments))
                    })
              }),
              t
            )
          }
          function Ju() {
            return Hn._ === this && (Hn._ = Rl), this
          }
          function Qu() {}
          function tl(t) {
            return (
              (t = Fa(t)),
              $s(function (e) {
                return pr(e, t)
              })
            )
          }
          function el(t) {
            return Qi(t) ? yr(co(t)) : br(t)
          }
          function nl(t) {
            return function (e) {
              return null == t ? Q : Gn(t, e)
            }
          }
          function rl() {
            return []
          }
          function il() {
            return !1
          }
          function ol() {
            return {}
          }
          function sl() {
            return ''
          }
          function al() {
            return !0
          }
          function ul(t, e) {
            if (((t = Fa(t)), t < 1 || t > Ct)) return []
            var n = Mt,
              r = tc(t, Mt)
            ;(e = Ni(e)), (t -= Mt)
            for (var i = E(r, e); ++n < t; ) e(n)
            return i
          }
          function ll(t) {
            return vh(t) ? m(t, co) : La(t) ? [t] : ri(Rc(t))
          }
          function cl(t) {
            var e = ++Al
            return Va(t) + e
          }
          function hl(t) {
            return t && t.length ? In(t, Gu, Zn) : Q
          }
          function fl(t, e) {
            return t && t.length ? In(t, Ni(e), Zn) : Q
          }
          function dl(t) {
            return C(t, Gu)
          }
          function gl(t, e) {
            return C(t, Ni(e))
          }
          function pl(t) {
            return t && t.length ? In(t, Gu, lr) : Q
          }
          function ml(t, e) {
            return t && t.length ? In(t, Ni(e), lr) : Q
          }
          function vl(t) {
            return t && t.length ? M(t, Gu) : 0
          }
          function _l(t, e) {
            return t && t.length ? M(t, Ni(e)) : 0
          }
          t = t ? Dn.defaults({}, t, Dn.pick(Hn, zn)) : Hn
          var yl = t.Date,
            bl = t.Error,
            xl = t.Math,
            wl = t.RegExp,
            Sl = t.TypeError,
            kl = t.Array.prototype,
            Cl = t.Object.prototype,
            zl = t.String.prototype,
            jl = t['__core-js_shared__'],
            Ml = (function () {
              var t = /[^.]+$/.exec((jl && jl.keys && jl.keys.IE_PROTO) || '')
              return t ? 'Symbol(src)_1.' + t : ''
            })(),
            El = t.Function.prototype.toString,
            Ol = Cl.hasOwnProperty,
            Al = 0,
            Tl = El.call(Object),
            Ll = Cl.toString,
            Rl = Hn._,
            ql = wl(
              '^' +
                El.call(Ol)
                  .replace(_e, '\\$&')
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?',
                  ) +
                '$',
            ),
            Nl = Pn ? t.Buffer : Q,
            Il = t.Reflect,
            Pl = t.Symbol,
            Wl = t.Uint8Array,
            Fl = Il ? Il.enumerate : Q,
            Bl = Object.getOwnPropertySymbols,
            Hl = 'symbol' == o((Hl = Pl && Pl.iterator)) ? Hl : Q,
            Dl = Object.create,
            Ul = Cl.propertyIsEnumerable,
            Vl = kl.splice,
            $l = function (e, n) {
              return t.setTimeout.call(Hn, e, n)
            },
            Gl = xl.ceil,
            Xl = xl.floor,
            Zl = Object.getPrototypeOf,
            Kl = t.isFinite,
            Yl = kl.join,
            Jl = Object.keys,
            Ql = xl.max,
            tc = xl.min,
            ec = t.parseInt,
            nc = xl.random,
            rc = zl.replace,
            ic = kl.reverse,
            oc = zl.split,
            sc = Wi(t, 'DataView'),
            ac = Wi(t, 'Map'),
            uc = Wi(t, 'Promise'),
            lc = Wi(t, 'Set'),
            cc = Wi(t, 'WeakMap'),
            hc = Wi(Object, 'create'),
            fc = cc && new cc(),
            dc = !Ul.call({ valueOf: 1 }, 'valueOf'),
            gc = {},
            pc = ho(sc),
            mc = ho(ac),
            vc = ho(uc),
            _c = ho(lc),
            yc = ho(cc),
            bc = Pl ? Pl.prototype : Q,
            xc = bc ? bc.valueOf : Q,
            wc = bc ? bc.toString : Q
          ;(e.templateSettings = {
            escape: fe,
            evaluate: de,
            interpolate: ge,
            variable: '',
            imports: { _: e },
          }),
            (e.prototype = n.prototype),
            (e.prototype.constructor = e),
            (r.prototype = An(n.prototype)),
            (r.prototype.constructor = r),
            (i.prototype = An(n.prototype)),
            (i.prototype.constructor = i),
            (Pe.prototype.clear = We),
            (Pe.prototype['delete'] = Fe),
            (Pe.prototype.get = Be),
            (Pe.prototype.has = He),
            (Pe.prototype.set = De),
            (Ue.prototype.clear = Ve),
            (Ue.prototype['delete'] = $e),
            (Ue.prototype.get = Ge),
            (Ue.prototype.has = Xe),
            (Ue.prototype.set = Ze),
            (Ke.prototype.clear = Ye),
            (Ke.prototype['delete'] = Je),
            (Ke.prototype.get = Qe),
            (Ke.prototype.has = tn),
            (Ke.prototype.set = en),
            (nn.prototype.add = nn.prototype.push = rn),
            (nn.prototype.has = on),
            (sn.prototype.clear = an),
            (sn.prototype['delete'] = un),
            (sn.prototype.get = ln),
            (sn.prototype.has = cn),
            (sn.prototype.set = hn)
          var Sc = ui(Un),
            kc = ui(Vn, !0),
            Cc = li(),
            zc = li(!0)
          Fl &&
            !Ul.call({ valueOf: 1 }, 'valueOf') &&
            (ur = function (t) {
              return U(Fl(t))
            })
          var jc = fc
              ? function (t, e) {
                  return fc.set(t, e), t
                }
              : Gu,
            Mc =
              lc && 1 / G(new lc([, -0]))[1] == kt
                ? function (t) {
                    return new lc(t)
                  }
                : Qu,
            Ec = fc
              ? function (t) {
                  return fc.get(t)
                }
              : Qu,
            Oc = yr('length')
          Bl || (Bi = rl)
          var Ac = Bl
            ? function (t) {
                for (var e = []; t; ) v(e, Bi(t)), (t = Fi(t))
                return e
              }
            : Bi
          ;((sc && Hi(new sc(new ArrayBuffer(1))) != Zt) ||
            (ac && Hi(new ac()) != Pt) ||
            (uc && Hi(uc.resolve()) != Bt) ||
            (lc && Hi(new lc()) != Dt) ||
            (cc && Hi(new cc()) != $t)) &&
            (Hi = function (t) {
              var e = Ll.call(t),
                n = e == Ft ? t.constructor : Q,
                r = n ? ho(n) : Q
              if (r)
                switch (r) {
                  case pc:
                    return Zt
                  case mc:
                    return Pt
                  case vc:
                    return Bt
                  case _c:
                    return Dt
                  case yc:
                    return $t
                }
              return e
            })
          var Tc = jl ? pa : il,
            Lc = (function () {
              var t = 0,
                e = 0
              return function (n, r) {
                var i = qs(),
                  o = bt - (i - e)
                if (((e = i), o > 0)) {
                  if (++t >= yt) return n
                } else t = 0
                return jc(n, r)
              }
            })(),
            Rc = Ds(function (t) {
              var e = []
              return (
                Va(t).replace(ve, function (t, n, r, i) {
                  e.push(r ? i.replace(ke, '$1') : n || t)
                }),
                e
              )
            }),
            qc = $s(function (t, e) {
              return sa(t) ? Ln(t, Bn(e, 1, sa, !0)) : []
            }),
            Nc = $s(function (t, e) {
              var n = To(e)
              return (
                sa(n) && (n = Q), sa(t) ? Ln(t, Bn(e, 1, sa, !0), Ni(n)) : []
              )
            }),
            Ic = $s(function (t, e) {
              var n = To(e)
              return (
                sa(n) && (n = Q), sa(t) ? Ln(t, Bn(e, 1, sa, !0), Q, n) : []
              )
            }),
            Pc = $s(function (t) {
              var e = m(t, Br)
              return e.length && e[0] === t[0] ? Qn(e) : []
            }),
            Wc = $s(function (t) {
              var e = To(t),
                n = m(t, Br)
              return (
                e === To(n) ? (e = Q) : n.pop(),
                n.length && n[0] === t[0] ? Qn(n, Ni(e)) : []
              )
            }),
            Fc = $s(function (t) {
              var e = To(t),
                n = m(t, Br)
              return (
                e === To(n) ? (e = Q) : n.pop(),
                n.length && n[0] === t[0] ? Qn(n, Q, e) : []
              )
            }),
            Bc = $s(qo),
            Hc = $s(function (t, e) {
              e = Bn(e, 1)
              var n = t ? t.length : 0,
                r = _n(t, e)
              return (
                wr(
                  t,
                  m(e, function (t) {
                    return Yi(t, n) ? +t : t
                  }).sort(Qr),
                ),
                r
              )
            }),
            Dc = $s(function (t) {
              return Rr(Bn(t, 1, sa, !0))
            }),
            Uc = $s(function (t) {
              var e = To(t)
              return sa(e) && (e = Q), Rr(Bn(t, 1, sa, !0), Ni(e))
            }),
            Vc = $s(function (t) {
              var e = To(t)
              return sa(e) && (e = Q), Rr(Bn(t, 1, sa, !0), Q, e)
            }),
            $c = $s(function (t, e) {
              return sa(t) ? Ln(t, e) : []
            }),
            Gc = $s(function (t) {
              return Wr(d(t, sa))
            }),
            Xc = $s(function (t) {
              var e = To(t)
              return sa(e) && (e = Q), Wr(d(t, sa), Ni(e))
            }),
            Zc = $s(function (t) {
              var e = To(t)
              return sa(e) && (e = Q), Wr(d(t, sa), Q, e)
            }),
            Kc = $s(rs),
            Yc = $s(function (t) {
              var e = t.length,
                n = e > 1 ? t[e - 1] : Q
              return (n = 'function' == typeof n ? (t.pop(), n) : Q), is(t, n)
            }),
            Jc = $s(function (t) {
              t = Bn(t, 1)
              var e = t.length,
                n = e ? t[0] : 0,
                o = this.__wrapped__,
                s = function (e) {
                  return _n(e, t)
                }
              return !(e > 1 || this.__actions__.length) &&
                o instanceof i &&
                Yi(n)
                ? ((o = o.slice(n, +n + (e ? 1 : 0))),
                  o.__actions__.push({ func: ls, args: [s], thisArg: Q }),
                  new r(o, this.__chain__).thru(function (t) {
                    return e && !t.length && t.push(Q), t
                  }))
                : this.thru(s)
            }),
            Qc = si(function (t, e, n) {
              Ol.call(t, n) ? ++t[n] : (t[n] = 1)
            }),
            th = pi(wo),
            eh = pi(So),
            nh = si(function (t, e, n) {
              Ol.call(t, n) ? t[n].push(e) : (t[n] = [e])
            }),
            rh = $s(function (t, e, n) {
              var r = -1,
                i = 'function' == typeof e,
                o = Qi(e),
                s = oa(t) ? Array(t.length) : []
              return (
                Sc(t, function (t) {
                  var a = i ? e : o && null != t ? t[e] : Q
                  s[++r] = a ? u(a, t, n) : er(t, e, n)
                }),
                s
              )
            }),
            ih = si(function (t, e, n) {
              t[n] = e
            }),
            oh = si(
              function (t, e, n) {
                t[n ? 0 : 1].push(e)
              },
              function () {
                return [[], []]
              },
            ),
            sh = $s(function (t, e) {
              if (null == t) return []
              var n = e.length
              return (
                n > 1 && Ji(t, e[0], e[1])
                  ? (e = [])
                  : n > 2 && Ji(e[0], e[1], e[2]) && (e = [e[0]]),
                (e = 1 == e.length && vh(e[0]) ? e[0] : Bn(e, 1, Ki)),
                mr(t, e, [])
              )
            }),
            ah = $s(function (t, e, n) {
              var r = ot
              if (n.length) {
                var i = $(n, qi(ah))
                r |= ct
              }
              return Mi(t, r, e, n, i)
            }),
            uh = $s(function (t, e, n) {
              var r = ot | st
              if (n.length) {
                var i = $(n, qi(uh))
                r |= ct
              }
              return Mi(e, r, t, n, i)
            }),
            lh = $s(function (t, e) {
              return Tn(t, 1, e)
            }),
            ch = $s(function (t, e, n) {
              return Tn(t, Ha(e) || 0, n)
            })
          Ds.Cache = Ke
          var hh = $s(function (t, e) {
              e =
                1 == e.length && vh(e[0])
                  ? m(e[0], A(Ni()))
                  : m(Bn(e, 1, Ki), A(Ni()))
              var n = e.length
              return $s(function (r) {
                for (var i = -1, o = tc(r.length, n); ++i < o; )
                  r[i] = e[i].call(this, r[i])
                return u(t, this, r)
              })
            }),
            fh = $s(function (t, e) {
              return Mi(t, ct, Q, e, $(e, qi(fh)))
            }),
            dh = $s(function (t, e) {
              return Mi(t, ht, Q, e, $(e, qi(dh)))
            }),
            gh = $s(function (t, e) {
              return Mi(t, dt, Q, Q, Q, Bn(e, 1))
            }),
            ph = ki(Zn),
            mh = ki(function (t, e) {
              return t >= e
            }),
            vh = Array.isArray,
            _h = Nl
              ? function (t) {
                  return t instanceof Nl
                }
              : il,
            yh = ki(lr),
            bh = ki(function (t, e) {
              return t <= e
            }),
            xh = ai(function (t, e) {
              if (dc || ro(e) || oa(e)) return void ii(e, iu(e), t)
              for (var n in e) Ol.call(e, n) && gn(t, n, e[n])
            }),
            wh = ai(function (t, e) {
              if (dc || ro(e) || oa(e)) return void ii(e, ou(e), t)
              for (var n in e) gn(t, n, e[n])
            }),
            Sh = ai(function (t, e, n, r) {
              ii(e, ou(e), t, r)
            }),
            kh = ai(function (t, e, n, r) {
              ii(e, iu(e), t, r)
            }),
            Ch = $s(function (t, e) {
              return _n(t, Bn(e, 1))
            }),
            zh = $s(function (t) {
              return t.push(Q, fn), u(Sh, Q, t)
            }),
            jh = $s(function (t) {
              return t.push(Q, ao), u(Th, Q, t)
            }),
            Mh = _i(function (t, e, n) {
              t[e] = n
            }, $u(Gu)),
            Eh = _i(function (t, e, n) {
              Ol.call(t, e) ? t[e].push(n) : (t[e] = [n])
            }, Ni),
            Oh = $s(er),
            Ah = ai(function (t, e, n) {
              dr(t, e, n)
            }),
            Th = ai(function (t, e, n, r) {
              dr(t, e, n, r)
            }),
            Lh = $s(function (t, e) {
              return null == t
                ? {}
                : ((e = m(Bn(e, 1), co)), vr(t, Ln(Li(t), e)))
            }),
            Rh = $s(function (t, e) {
              return null == t ? {} : vr(t, m(Bn(e, 1), co))
            }),
            qh = ji(iu),
            Nh = ji(ou),
            Ih = fi(function (t, e, n) {
              return (e = e.toLowerCase()), t + (n ? wu(e) : e)
            }),
            Ph = fi(function (t, e, n) {
              return t + (n ? '-' : '') + e.toLowerCase()
            }),
            Wh = fi(function (t, e, n) {
              return t + (n ? ' ' : '') + e.toLowerCase()
            }),
            Fh = hi('toLowerCase'),
            Bh = fi(function (t, e, n) {
              return t + (n ? '_' : '') + e.toLowerCase()
            }),
            Hh = fi(function (t, e, n) {
              return t + (n ? ' ' : '') + Uh(e)
            }),
            Dh = fi(function (t, e, n) {
              return t + (n ? ' ' : '') + e.toUpperCase()
            }),
            Uh = hi('toUpperCase'),
            Vh = $s(function (t, e) {
              try {
                return u(t, Q, e)
              } catch (n) {
                return da(n) ? n : new bl(n)
              }
            }),
            $h = $s(function (t, e) {
              return (
                c(Bn(e, 1), function (e) {
                  ;(e = co(e)), (t[e] = ah(t[e], t))
                }),
                t
              )
            }),
            Gh = mi(),
            Xh = mi(!0),
            Zh = $s(function (t, e) {
              return function (n) {
                return er(n, t, e)
              }
            }),
            Kh = $s(function (t, e) {
              return function (n) {
                return er(t, n, e)
              }
            }),
            Yh = bi(m),
            Jh = bi(f),
            Qh = bi(b),
            tf = Si(),
            ef = Si(!0),
            nf = yi(function (t, e) {
              return t + e
            }),
            rf = zi('ceil'),
            of = yi(function (t, e) {
              return t / e
            }),
            sf = zi('floor'),
            af = yi(function (t, e) {
              return t * e
            }),
            uf = zi('round'),
            lf = yi(function (t, e) {
              return t - e
            })
          return (
            (e.after = Ns),
            (e.ary = Is),
            (e.assign = xh),
            (e.assignIn = wh),
            (e.assignInWith = Sh),
            (e.assignWith = kh),
            (e.at = Ch),
            (e.before = Ps),
            (e.bind = ah),
            (e.bindAll = $h),
            (e.bindKey = uh),
            (e.castArray = Ys),
            (e.chain = as),
            (e.chunk = go),
            (e.compact = po),
            (e.concat = mo),
            (e.cond = Uu),
            (e.conforms = Vu),
            (e.constant = $u),
            (e.countBy = Qc),
            (e.create = $a),
            (e.curry = Ws),
            (e.curryRight = Fs),
            (e.debounce = Bs),
            (e.defaults = zh),
            (e.defaultsDeep = jh),
            (e.defer = lh),
            (e.delay = ch),
            (e.difference = qc),
            (e.differenceBy = Nc),
            (e.differenceWith = Ic),
            (e.drop = vo),
            (e.dropRight = _o),
            (e.dropRightWhile = yo),
            (e.dropWhile = bo),
            (e.fill = xo),
            (e.filter = _s),
            (e.flatMap = ys),
            (e.flatMapDeep = bs),
            (e.flatMapDepth = xs),
            (e.flatten = ko),
            (e.flattenDeep = Co),
            (e.flattenDepth = zo),
            (e.flip = Hs),
            (e.flow = Gh),
            (e.flowRight = Xh),
            (e.fromPairs = jo),
            (e.functions = Qa),
            (e.functionsIn = tu),
            (e.groupBy = nh),
            (e.initial = Oo),
            (e.intersection = Pc),
            (e.intersectionBy = Wc),
            (e.intersectionWith = Fc),
            (e.invert = Mh),
            (e.invertBy = Eh),
            (e.invokeMap = rh),
            (e.iteratee = Xu),
            (e.keyBy = ih),
            (e.keys = iu),
            (e.keysIn = ou),
            (e.map = Cs),
            (e.mapKeys = su),
            (e.mapValues = au),
            (e.matches = Zu),
            (e.matchesProperty = Ku),
            (e.memoize = Ds),
            (e.merge = Ah),
            (e.mergeWith = Th),
            (e.method = Zh),
            (e.methodOf = Kh),
            (e.mixin = Yu),
            (e.negate = Us),
            (e.nthArg = tl),
            (e.omit = Lh),
            (e.omitBy = uu),
            (e.once = Vs),
            (e.orderBy = zs),
            (e.over = Yh),
            (e.overArgs = hh),
            (e.overEvery = Jh),
            (e.overSome = Qh),
            (e.partial = fh),
            (e.partialRight = dh),
            (e.partition = oh),
            (e.pick = Rh),
            (e.pickBy = lu),
            (e.property = el),
            (e.propertyOf = nl),
            (e.pull = Bc),
            (e.pullAll = qo),
            (e.pullAllBy = No),
            (e.pullAllWith = Io),
            (e.pullAt = Hc),
            (e.range = tf),
            (e.rangeRight = ef),
            (e.rearg = gh),
            (e.reject = Es),
            (e.remove = Po),
            (e.rest = $s),
            (e.reverse = Wo),
            (e.sampleSize = As),
            (e.set = hu),
            (e.setWith = fu),
            (e.shuffle = Ts),
            (e.slice = Fo),
            (e.sortBy = sh),
            (e.sortedUniq = Go),
            (e.sortedUniqBy = Xo),
            (e.split = Lu),
            (e.spread = Gs),
            (e.tail = Zo),
            (e.take = Ko),
            (e.takeRight = Yo),
            (e.takeRightWhile = Jo),
            (e.takeWhile = Qo),
            (e.tap = us),
            (e.throttle = Xs),
            (e.thru = ls),
            (e.toArray = Pa),
            (e.toPairs = qh),
            (e.toPairsIn = Nh),
            (e.toPath = ll),
            (e.toPlainObject = Da),
            (e.transform = du),
            (e.unary = Zs),
            (e.union = Dc),
            (e.unionBy = Uc),
            (e.unionWith = Vc),
            (e.uniq = ts),
            (e.uniqBy = es),
            (e.uniqWith = ns),
            (e.unset = gu),
            (e.unzip = rs),
            (e.unzipWith = is),
            (e.update = pu),
            (e.updateWith = mu),
            (e.values = vu),
            (e.valuesIn = _u),
            (e.without = $c),
            (e.words = Du),
            (e.wrap = Ks),
            (e.xor = Gc),
            (e.xorBy = Xc),
            (e.xorWith = Zc),
            (e.zip = Kc),
            (e.zipObject = os),
            (e.zipObjectDeep = ss),
            (e.zipWith = Yc),
            (e.entries = qh),
            (e.entriesIn = Nh),
            (e.extend = wh),
            (e.extendWith = Sh),
            Yu(e, e),
            (e.add = nf),
            (e.attempt = Vh),
            (e.camelCase = Ih),
            (e.capitalize = wu),
            (e.ceil = rf),
            (e.clamp = yu),
            (e.clone = Js),
            (e.cloneDeep = ta),
            (e.cloneDeepWith = ea),
            (e.cloneWith = Qs),
            (e.deburr = Su),
            (e.divide = of),
            (e.endsWith = ku),
            (e.eq = na),
            (e.escape = Cu),
            (e.escapeRegExp = zu),
            (e.every = vs),
            (e.find = th),
            (e.findIndex = wo),
            (e.findKey = Ga),
            (e.findLast = eh),
            (e.findLastIndex = So),
            (e.findLastKey = Xa),
            (e.floor = sf),
            (e.forEach = ws),
            (e.forEachRight = Ss),
            (e.forIn = Za),
            (e.forInRight = Ka),
            (e.forOwn = Ya),
            (e.forOwnRight = Ja),
            (e.get = eu),
            (e.gt = ph),
            (e.gte = mh),
            (e.has = nu),
            (e.hasIn = ru),
            (e.head = Mo),
            (e.identity = Gu),
            (e.includes = ks),
            (e.indexOf = Eo),
            (e.inRange = bu),
            (e.invoke = Oh),
            (e.isArguments = ra),
            (e.isArray = vh),
            (e.isArrayBuffer = ia),
            (e.isArrayLike = oa),
            (e.isArrayLikeObject = sa),
            (e.isBoolean = aa),
            (e.isBuffer = _h),
            (e.isDate = ua),
            (e.isElement = la),
            (e.isEmpty = ca),
            (e.isEqual = ha),
            (e.isEqualWith = fa),
            (e.isError = da),
            (e.isFinite = ga),
            (e.isFunction = pa),
            (e.isInteger = ma),
            (e.isLength = va),
            (e.isMap = ba),
            (e.isMatch = xa),
            (e.isMatchWith = wa),
            (e.isNaN = Sa),
            (e.isNative = ka),
            (e.isNil = za),
            (e.isNull = Ca),
            (e.isNumber = ja),
            (e.isObject = _a),
            (e.isObjectLike = ya),
            (e.isPlainObject = Ma),
            (e.isRegExp = Ea),
            (e.isSafeInteger = Oa),
            (e.isSet = Aa),
            (e.isString = Ta),
            (e.isSymbol = La),
            (e.isTypedArray = Ra),
            (e.isUndefined = qa),
            (e.isWeakMap = Na),
            (e.isWeakSet = Ia),
            (e.join = Ao),
            (e.kebabCase = Ph),
            (e.last = To),
            (e.lastIndexOf = Lo),
            (e.lowerCase = Wh),
            (e.lowerFirst = Fh),
            (e.lt = yh),
            (e.lte = bh),
            (e.max = hl),
            (e.maxBy = fl),
            (e.mean = dl),
            (e.meanBy = gl),
            (e.min = pl),
            (e.minBy = ml),
            (e.stubArray = rl),
            (e.stubFalse = il),
            (e.stubObject = ol),
            (e.stubString = sl),
            (e.stubTrue = al),
            (e.multiply = af),
            (e.nth = Ro),
            (e.noConflict = Ju),
            (e.noop = Qu),
            (e.now = qs),
            (e.pad = ju),
            (e.padEnd = Mu),
            (e.padStart = Eu),
            (e.parseInt = Ou),
            (e.random = xu),
            (e.reduce = js),
            (e.reduceRight = Ms),
            (e.repeat = Au),
            (e.replace = Tu),
            (e.result = cu),
            (e.round = uf),
            (e.runInContext = J),
            (e.sample = Os),
            (e.size = Ls),
            (e.snakeCase = Bh),
            (e.some = Rs),
            (e.sortedIndex = Bo),
            (e.sortedIndexBy = Ho),
            (e.sortedIndexOf = Do),
            (e.sortedLastIndex = Uo),
            (e.sortedLastIndexBy = Vo),
            (e.sortedLastIndexOf = $o),
            (e.startCase = Hh),
            (e.startsWith = Ru),
            (e.subtract = lf),
            (e.sum = vl),
            (e.sumBy = _l),
            (e.template = qu),
            (e.times = ul),
            (e.toFinite = Wa),
            (e.toInteger = Fa),
            (e.toLength = Ba),
            (e.toLower = Nu),
            (e.toNumber = Ha),
            (e.toSafeInteger = Ua),
            (e.toString = Va),
            (e.toUpper = Iu),
            (e.trim = Pu),
            (e.trimEnd = Wu),
            (e.trimStart = Fu),
            (e.truncate = Bu),
            (e.unescape = Hu),
            (e.uniqueId = cl),
            (e.upperCase = Dh),
            (e.upperFirst = Uh),
            (e.each = ws),
            (e.eachRight = Ss),
            (e.first = Mo),
            Yu(
              e,
              (function () {
                var t = {}
                return (
                  Un(e, function (n, r) {
                    Ol.call(e.prototype, r) || (t[r] = n)
                  }),
                  t
                )
              })(),
              { chain: !1 },
            ),
            (e.VERSION = tt),
            c(
              [
                'bind',
                'bindKey',
                'curry',
                'curryRight',
                'partial',
                'partialRight',
              ],
              function (t) {
                e[t].placeholder = e
              },
            ),
            c(['drop', 'take'], function (t, e) {
              ;(i.prototype[t] = function (n) {
                var r = this.__filtered__
                if (r && !e) return new i(this)
                n = n === Q ? 1 : Ql(Fa(n), 0)
                var o = this.clone()
                return (
                  r
                    ? (o.__takeCount__ = tc(n, o.__takeCount__))
                    : o.__views__.push({
                        size: tc(n, Mt),
                        type: t + (o.__dir__ < 0 ? 'Right' : ''),
                      }),
                  o
                )
              }),
                (i.prototype[t + 'Right'] = function (e) {
                  return this.reverse()[t](e).reverse()
                })
            }),
            c(['filter', 'map', 'takeWhile'], function (t, e) {
              var n = e + 1,
                r = n == xt || n == St
              i.prototype[t] = function (t) {
                var e = this.clone()
                return (
                  e.__iteratees__.push({ iteratee: Ni(t, 3), type: n }),
                  (e.__filtered__ = e.__filtered__ || r),
                  e
                )
              }
            }),
            c(['head', 'last'], function (t, e) {
              var n = 'take' + (e ? 'Right' : '')
              i.prototype[t] = function () {
                return this[n](1).value()[0]
              }
            }),
            c(['initial', 'tail'], function (t, e) {
              var n = 'drop' + (e ? '' : 'Right')
              i.prototype[t] = function () {
                return this.__filtered__ ? new i(this) : this[n](1)
              }
            }),
            (i.prototype.compact = function () {
              return this.filter(Gu)
            }),
            (i.prototype.find = function (t) {
              return this.filter(t).head()
            }),
            (i.prototype.findLast = function (t) {
              return this.reverse().find(t)
            }),
            (i.prototype.invokeMap = $s(function (t, e) {
              return 'function' == typeof t
                ? new i(this)
                : this.map(function (n) {
                    return er(n, t, e)
                  })
            })),
            (i.prototype.reject = function (t) {
              return (
                (t = Ni(t, 3)),
                this.filter(function (e) {
                  return !t(e)
                })
              )
            }),
            (i.prototype.slice = function (t, e) {
              t = Fa(t)
              var n = this
              return n.__filtered__ && (t > 0 || e < 0)
                ? new i(n)
                : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                  e !== Q &&
                    ((e = Fa(e)),
                    (n = e < 0 ? n.dropRight(-e) : n.take(e - t))),
                  n)
            }),
            (i.prototype.takeRightWhile = function (t) {
              return this.reverse().takeWhile(t).reverse()
            }),
            (i.prototype.toArray = function () {
              return this.take(Mt)
            }),
            Un(i.prototype, function (t, n) {
              var o = /^(?:filter|find|map|reject)|While$/.test(n),
                s = /^(?:head|last)$/.test(n),
                a = e[s ? 'take' + ('last' == n ? 'Right' : '') : n],
                u = s || /^find/.test(n)
              a &&
                (e.prototype[n] = function () {
                  var n = this.__wrapped__,
                    l = s ? [1] : arguments,
                    c = n instanceof i,
                    h = l[0],
                    f = c || vh(n),
                    d = function (t) {
                      var n = a.apply(e, v([t], l))
                      return s && g ? n[0] : n
                    }
                  f &&
                    o &&
                    'function' == typeof h &&
                    1 != h.length &&
                    (c = f = !1)
                  var g = this.__chain__,
                    p = !!this.__actions__.length,
                    m = u && !g,
                    _ = c && !p
                  if (!u && f) {
                    n = _ ? n : new i(this)
                    var y = t.apply(n, l)
                    return (
                      y.__actions__.push({ func: ls, args: [d], thisArg: Q }),
                      new r(y, g)
                    )
                  }
                  return m && _
                    ? t.apply(this, l)
                    : ((y = this.thru(d)),
                      m ? (s ? y.value()[0] : y.value()) : y)
                })
            }),
            c(
              ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
              function (t) {
                var n = kl[t],
                  r = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                  i = /^(?:pop|shift)$/.test(t)
                e.prototype[t] = function () {
                  var t = arguments
                  if (i && !this.__chain__) {
                    var e = this.value()
                    return n.apply(vh(e) ? e : [], t)
                  }
                  return this[r](function (e) {
                    return n.apply(vh(e) ? e : [], t)
                  })
                }
              },
            ),
            Un(i.prototype, function (t, n) {
              var r = e[n]
              if (r) {
                var i = r.name + ''
                ;(gc[i] || (gc[i] = [])).push({ name: n, func: r })
              }
            }),
            (gc[vi(Q, st).name] = [{ name: 'wrapper', func: Q }]),
            (i.prototype.clone = N),
            (i.prototype.reverse = Ne),
            (i.prototype.value = Ie),
            (e.prototype.at = Jc),
            (e.prototype.chain = cs),
            (e.prototype.commit = hs),
            (e.prototype.next = fs),
            (e.prototype.plant = gs),
            (e.prototype.reverse = ps),
            (e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = ms),
            Hl && (e.prototype[Hl] = ds),
            e
          )
        }
        var Q,
          tt = '4.13.1',
          et = 200,
          nt = 'Expected a function',
          rt = '__lodash_hash_undefined__',
          it = '__lodash_placeholder__',
          ot = 1,
          st = 2,
          at = 4,
          ut = 8,
          lt = 16,
          ct = 32,
          ht = 64,
          ft = 128,
          dt = 256,
          gt = 512,
          pt = 1,
          mt = 2,
          vt = 30,
          _t = '...',
          yt = 150,
          bt = 16,
          xt = 1,
          wt = 2,
          St = 3,
          kt = 1 / 0,
          Ct = 9007199254740991,
          zt = 1.7976931348623157e308,
          jt = NaN,
          Mt = 4294967295,
          Et = Mt - 1,
          Ot = Mt >>> 1,
          At = '[object Arguments]',
          Tt = '[object Array]',
          Lt = '[object Boolean]',
          Rt = '[object Date]',
          qt = '[object Error]',
          Nt = '[object Function]',
          It = '[object GeneratorFunction]',
          Pt = '[object Map]',
          Wt = '[object Number]',
          Ft = '[object Object]',
          Bt = '[object Promise]',
          Ht = '[object RegExp]',
          Dt = '[object Set]',
          Ut = '[object String]',
          Vt = '[object Symbol]',
          $t = '[object WeakMap]',
          Gt = '[object WeakSet]',
          Xt = '[object ArrayBuffer]',
          Zt = '[object DataView]',
          Kt = '[object Float32Array]',
          Yt = '[object Float64Array]',
          Jt = '[object Int8Array]',
          Qt = '[object Int16Array]',
          te = '[object Int32Array]',
          ee = '[object Uint8Array]',
          ne = '[object Uint8ClampedArray]',
          re = '[object Uint16Array]',
          ie = '[object Uint32Array]',
          oe = /\b__p \+= '';/g,
          se = /\b(__p \+=) '' \+/g,
          ae = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          ue = /&(?:amp|lt|gt|quot|#39|#96);/g,
          le = /[&<>"'`]/g,
          ce = RegExp(ue.source),
          he = RegExp(le.source),
          fe = /<%-([\s\S]+?)%>/g,
          de = /<%([\s\S]+?)%>/g,
          ge = /<%=([\s\S]+?)%>/g,
          pe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          me = /^\w*$/,
          ve =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,
          _e = /[\\^$.*+?()[\]{}|]/g,
          ye = RegExp(_e.source),
          be = /^\s+|\s+$/g,
          xe = /^\s+/,
          we = /\s+$/,
          Se = /[a-zA-Z0-9]+/g,
          ke = /\\(\\)?/g,
          Ce = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          ze = /\w*$/,
          je = /^0x/i,
          Me = /^[-+]0x[0-9a-f]+$/i,
          Ee = /^0b[01]+$/i,
          Oe = /^\[object .+?Constructor\]$/,
          Ae = /^0o[0-7]+$/i,
          Te = /^(?:0|[1-9]\d*)$/,
          Le = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
          Re = /($^)/,
          qe = /['\n\r\u2028\u2029\\]/g,
          Ne = '\\ud800-\\udfff',
          Ie = '\\u0300-\\u036f\\ufe20-\\ufe23',
          Pe = '\\u20d0-\\u20f0',
          We = '\\u2700-\\u27bf',
          Fe = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          Be = '\\xac\\xb1\\xd7\\xf7',
          He = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          De = '\\u2000-\\u206f',
          Ue =
            ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          Ve = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          $e = '\\ufe0e\\ufe0f',
          Ge = Be + He + De + Ue,
          Xe = "['’]",
          Ze = '[' + Ne + ']',
          Ke = '[' + Ge + ']',
          Ye = '[' + Ie + Pe + ']',
          Je = '\\d+',
          Qe = '[' + We + ']',
          tn = '[' + Fe + ']',
          en = '[^' + Ne + Ge + Je + We + Fe + Ve + ']',
          nn = '\\ud83c[\\udffb-\\udfff]',
          rn = '(?:' + Ye + '|' + nn + ')',
          on = '[^' + Ne + ']',
          sn = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          an = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          un = '[' + Ve + ']',
          ln = '\\u200d',
          cn = '(?:' + tn + '|' + en + ')',
          hn = '(?:' + un + '|' + en + ')',
          fn = '(?:' + Xe + '(?:d|ll|m|re|s|t|ve))?',
          dn = '(?:' + Xe + '(?:D|LL|M|RE|S|T|VE))?',
          gn = rn + '?',
          pn = '[' + $e + ']?',
          mn =
            '(?:' + ln + '(?:' + [on, sn, an].join('|') + ')' + pn + gn + ')*',
          vn = pn + gn + mn,
          _n = '(?:' + [Qe, sn, an].join('|') + ')' + vn,
          yn = '(?:' + [on + Ye + '?', Ye, sn, an, Ze].join('|') + ')',
          bn = RegExp(Xe, 'g'),
          xn = RegExp(Ye, 'g'),
          wn = RegExp(nn + '(?=' + nn + ')|' + yn + vn, 'g'),
          Sn = RegExp(
            [
              un + '?' + tn + '+' + fn + '(?=' + [Ke, un, '$'].join('|') + ')',
              hn + '+' + dn + '(?=' + [Ke, un + cn, '$'].join('|') + ')',
              un + '?' + cn + '+' + fn,
              un + '+' + dn,
              Je,
              _n,
            ].join('|'),
            'g',
          ),
          kn = RegExp('[' + ln + Ne + Ie + Pe + $e + ']'),
          Cn =
            /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          zn = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'Reflect',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          jn = -1,
          Mn = {}
        ;(Mn[Kt] =
          Mn[Yt] =
          Mn[Jt] =
          Mn[Qt] =
          Mn[te] =
          Mn[ee] =
          Mn[ne] =
          Mn[re] =
          Mn[ie] =
            !0),
          (Mn[At] =
            Mn[Tt] =
            Mn[Xt] =
            Mn[Lt] =
            Mn[Zt] =
            Mn[Rt] =
            Mn[qt] =
            Mn[Nt] =
            Mn[Pt] =
            Mn[Wt] =
            Mn[Ft] =
            Mn[Ht] =
            Mn[Dt] =
            Mn[Ut] =
            Mn[$t] =
              !1)
        var En = {}
        ;(En[At] =
          En[Tt] =
          En[Xt] =
          En[Zt] =
          En[Lt] =
          En[Rt] =
          En[Kt] =
          En[Yt] =
          En[Jt] =
          En[Qt] =
          En[te] =
          En[Pt] =
          En[Wt] =
          En[Ft] =
          En[Ht] =
          En[Dt] =
          En[Ut] =
          En[Vt] =
          En[ee] =
          En[ne] =
          En[re] =
          En[ie] =
            !0),
          (En[qt] = En[Nt] = En[$t] = !1)
        var On = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
          },
          An = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&#96;',
          },
          Tn = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
            '&#96;': '`',
          },
          Ln = {
            '\\': '\\',
            "'": "'",
            '\n': 'n',
            '\r': 'r',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          Rn = parseFloat,
          qn = parseInt,
          Nn = 'object' == o(e) && e,
          In = Nn && 'object' == o(t) && t,
          Pn = In && In.exports === Nn,
          Wn = N(
            'object' == ('undefined' == typeof i ? 'undefined' : o(i)) && i,
          ),
          Fn = N(
            'object' == ('undefined' == typeof self ? 'undefined' : o(self)) &&
              self,
          ),
          Bn = N('object' == o(this) && this),
          Hn = Wn || Fn || Bn || Function('return this')(),
          Dn = J()
        ;((Fn || {})._ = Dn),
          'object' == o(n(53)) && n(53)
            ? ((r = function () {
                return Dn
              }.call(e, n, e, t)),
              !(r !== Q && (t.exports = r)))
            : In
              ? (((In.exports = Dn)._ = Dn), (Nn._ = Dn))
              : (Hn._ = Dn)
      }).call(void 0)
    }).call(
      e,
      n(23)(t),
      (function () {
        return this
      })(),
    )
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      var e = t.parentNode,
        n = t.nextSibling
      return (
        e.removeChild(t),
        function () {
          n ? e.insertBefore(t, n) : e.appendChild(t)
        }
      )
    }
    var i,
      o = n(10),
      s = n(2),
      a = function (t) {
        for (var e; (e = t.lastChild); ) t.removeChild(e)
      }
    t.exports = i = s.extend({
      renderSubviews: function () {
        var t = this.el,
          e = void 0 != t.parentNode
        if (e) var n = r(t)
        a(t)
        for (
          var i,
            s,
            u = document.createDocumentFragment(),
            l = this._views(),
            c = o.sortBy(l, function (t) {
              return t.ordering
            }),
            h = 0;
          h < c.length;
          h++
        )
          (i = c[h]), i.render(), (s = i.el), null != s && u.appendChild(s)
        return t.appendChild(u), e && n(), t
      },
      addView: function (t, e) {
        var n = this._views()
        if (null == e) throw 'Invalid plugin. '
        return null == e.ordering && (e.ordering = t), (n[t] = e)
      },
      removeViews: function () {
        var t,
          e,
          n = this._views()
        for (e in n)
          (t = n[e]),
            t.undelegateEvents(),
            t.unbind(),
            null != t.removeViews && t.removeViews(),
            t.remove()
        return (this.views = {})
      },
      removeView: function (t) {
        var e = this._views()
        return e[t].remove(), delete e[t]
      },
      getView: function (t) {
        return this._views()[t]
      },
      remove: function () {
        return this.removeViews(), s.prototype.remove.apply(this)
      },
      _views: function () {
        return null == this.views && (this.views = {}), this.views
      },
    })
  },
  function (t, e, n) {
    var r
    ;(function (t) {
      'use strict'
      var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            } /*!
       * jBone v1.2.0 - 2016-04-13 - Library for DOM manipulation
       *
       * http://jbone.js.org
       *
       * Copyright 2016 Alexey Kupriyanenko
       * Released under the MIT license.
       */
      !(function (o) {
        function s(t) {
          var e = t.length,
            n = 'undefined' == typeof t ? 'undefined' : i(t)
          return (
            !y(n) &&
            t !== o &&
            (!(1 !== t.nodeType || !e) ||
              b(n) ||
              0 === e ||
              ('number' == typeof e && e > 0 && e - 1 in t))
          )
        }
        function a(t, e) {
          var n, r
          ;(this.originalEvent = t),
            (r = function (t, e) {
              'preventDefault' === t
                ? (this[t] = function () {
                    return (this.defaultPrevented = !0), e[t]()
                  })
                : 'stopImmediatePropagation' === t
                  ? (this[t] = function () {
                      return (this.immediatePropagationStopped = !0), e[t]()
                    })
                  : y(e[t])
                    ? (this[t] = function () {
                        return e[t]()
                      })
                    : (this[t] = e[t])
            })
          for (n in t) (t[n] || 'function' == typeof t[n]) && r.call(this, n, t)
          x.extend(this, e, {
            isImmediatePropagationStopped: function () {
              return !!this.immediatePropagationStopped
            },
          })
        }
        var u,
          l = o.$,
          c = o.jBone,
          h = /^<(\w+)\s*\/?>$/,
          f = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
          d = [].slice,
          g = [].splice,
          p = Object.keys,
          m = document,
          v = function (t) {
            return 'string' == typeof t
          },
          _ = function (t) {
            return t instanceof Object
          },
          y = function (t) {
            return '[object Function]' === {}.toString.call(t)
          },
          b = function (t) {
            return Array.isArray(t)
          },
          x = function (t, e) {
            return new u.init(t, e)
          }
        ;(x.noConflict = function () {
          return (o.$ = l), (o.jBone = c), x
        }),
          (u =
            x.fn =
            x.prototype =
              {
                init: function (t, e) {
                  var n, r, i, o
                  if (!t) return this
                  if (v(t)) {
                    if ((r = h.exec(t)))
                      return (
                        (this[0] = m.createElement(r[1])),
                        (this.length = 1),
                        _(e) && this.attr(e),
                        this
                      )
                    if ((r = f.exec(t)) && r[1]) {
                      for (
                        o = m.createDocumentFragment(),
                          i = m.createElement('div'),
                          i.innerHTML = t;
                        i.lastChild;

                      )
                        o.appendChild(i.firstChild)
                      return (n = d.call(o.childNodes)), x.merge(this, n)
                    }
                    if (x.isElement(e)) return x(e).find(t)
                    try {
                      return (n = m.querySelectorAll(t)), x.merge(this, n)
                    } catch (s) {
                      return this
                    }
                  }
                  return t.nodeType
                    ? ((this[0] = t), (this.length = 1), this)
                    : y(t)
                      ? t()
                      : t instanceof x
                        ? t
                        : x.makeArray(t, this)
                },
                pop: [].pop,
                push: [].push,
                reverse: [].reverse,
                shift: [].shift,
                sort: [].sort,
                splice: [].splice,
                slice: [].slice,
                indexOf: [].indexOf,
                forEach: [].forEach,
                unshift: [].unshift,
                concat: [].concat,
                join: [].join,
                every: [].every,
                some: [].some,
                filter: [].filter,
                map: [].map,
                reduce: [].reduce,
                reduceRight: [].reduceRight,
                length: 0,
              }),
          (u.constructor = x),
          (u.init.prototype = u),
          (x.setId = function (t) {
            var e = t.jid
            t === o
              ? (e = 'window')
              : void 0 === t.jid && (t.jid = e = ++x._cache.jid),
              x._cache.events[e] || (x._cache.events[e] = {})
          }),
          (x.getData = function (t) {
            t = t instanceof x ? t[0] : t
            var e = t === o ? 'window' : t.jid
            return { jid: e, events: x._cache.events[e] }
          }),
          (x.isElement = function (t) {
            return (t && t instanceof x) || t instanceof HTMLElement || v(t)
          }),
          (x._cache = { events: {}, jid: 0 }),
          (u.pushStack = function (t) {
            return x.merge(this.constructor(), t)
          }),
          (x.merge = function (t, e) {
            for (var n = e.length, r = t.length, i = 0; i < n; ) t[r++] = e[i++]
            return (t.length = r), t
          }),
          (x.contains = function (t, e) {
            return t.contains(e)
          }),
          (x.extend = function (t) {
            var e
            return (
              g.call(arguments, 1).forEach(function (n) {
                if (((e = t), n)) for (var r in n) e[r] = n[r]
              }),
              t
            )
          }),
          (x.makeArray = function (t, e) {
            var n = e || []
            return (
              null !== t && (s(t) ? x.merge(n, v(t) ? [t] : t) : n.push(t)), n
            )
          }),
          (x.unique = function (t) {
            if (null == t) return []
            for (var e = [], n = 0, r = t.length; n < r; n++) {
              var i = t[n]
              e.indexOf(i) < 0 && e.push(i)
            }
            return e
          }),
          (x.Event = function (t, e) {
            var n, r
            return (
              t.type && !e && ((e = t), (t = t.type)),
              (n = t.split('.').splice(1).join('.')),
              (r = t.split('.')[0]),
              (t = m.createEvent('Event')),
              t.initEvent(r, !0, !0),
              x.extend(
                t,
                {
                  namespace: n,
                  isDefaultPrevented: function () {
                    return t.defaultPrevented
                  },
                },
                e,
              )
            )
          }),
          (x.event = {
            add: function (t, e, n, r, i) {
              x.setId(t)
              var o,
                s,
                a,
                u = function (e) {
                  x.event.dispatch.call(t, e)
                },
                l = x.getData(t).events
              for (e = e.split(' '), s = e.length; s--; )
                (a = e[s]),
                  (o = a.split('.')[0]),
                  (l[o] = l[o] || []),
                  l[o].length
                    ? (u = l[o][0].fn)
                    : t.addEventListener && t.addEventListener(o, u, !1),
                  l[o].push({
                    namespace: a.split('.').splice(1).join('.'),
                    fn: u,
                    selector: i,
                    data: r,
                    originfn: n,
                  })
            },
            remove: function (t, e, n, r) {
              var i,
                o,
                s = function (t, e, r, i, o) {
                  var s
                  ;((n && o.originfn === n) || !n) && (s = o.fn),
                    t[e][r].fn === s &&
                      (t[e].splice(r, 1),
                      t[e].length || i.removeEventListener(e, s))
                },
                a = x.getData(t).events
              if (a)
                return !e && a
                  ? p(a).forEach(function (e) {
                      for (o = a[e], i = o.length; i--; ) s(a, e, i, t, o[i])
                    })
                  : void e.split(' ').forEach(function (e) {
                      var n,
                        u = e.split('.')[0],
                        l = e.split('.').splice(1).join('.')
                      if (a[u])
                        for (o = a[u], i = o.length; i--; )
                          (n = o[i]),
                            (!l || (l && n.namespace === l)) &&
                              (!r || (r && n.selector === r)) &&
                              s(a, u, i, t, n)
                      else
                        l &&
                          p(a).forEach(function (e) {
                            for (o = a[e], i = o.length; i--; )
                              (n = o[i]),
                                n.namespace.split('.')[0] === l.split('.')[0] &&
                                  s(a, e, i, t, n)
                          })
                    })
            },
            trigger: function (t, e) {
              var n = []
              v(e)
                ? (n = e.split(' ').map(function (t) {
                    return x.Event(t)
                  }))
                : ((e = e instanceof Event ? e : x.Event(e)), (n = [e])),
                n.forEach(function (e) {
                  e.type && t.dispatchEvent && t.dispatchEvent(e)
                })
            },
            dispatch: function (t) {
              for (
                var e,
                  n,
                  r,
                  i,
                  o,
                  s = 0,
                  u = 0,
                  l = this,
                  c = x.getData(l).events[t.type],
                  h = c.length,
                  f = [],
                  d = [];
                s < h;
                s++
              )
                f.push(c[s])
              for (
                s = 0, h = f.length;
                s < h &&
                ~c.indexOf(f[s]) &&
                (!i || !i.isImmediatePropagationStopped());
                s++
              )
                if (
                  ((n = null),
                  (o = {}),
                  (r = f[s]),
                  r.data && (o.data = r.data),
                  r.selector)
                ) {
                  if (
                    (~(d = x(l).find(r.selector)).indexOf(t.target) &&
                      (n = t.target)) ||
                    (l !== t.target && l.contains(t.target))
                  ) {
                    if (!n)
                      for (e = d.length, u = 0; u < e; u++)
                        d[u] && d[u].contains(t.target) && (n = d[u])
                    if (!n) continue
                    ;(o.currentTarget = n),
                      (i = new a(t, o)),
                      (t.namespace && t.namespace !== r.namespace) ||
                        r.originfn.call(n, i)
                  }
                } else
                  (i = new a(t, o)),
                    (t.namespace && t.namespace !== r.namespace) ||
                      r.originfn.call(l, i)
            },
          }),
          (u.on = function (t, e, n, r) {
            var i = this.length,
              o = 0
            if (
              (null == n && null == r
                ? ((r = e), (n = e = void 0))
                : null == r &&
                  ('string' == typeof e
                    ? ((r = n), (n = void 0))
                    : ((r = n), (n = e), (e = void 0))),
              !r)
            )
              return this
            for (; o < i; o++) x.event.add(this[o], t, r, n, e)
            return this
          }),
          (u.one = function (t) {
            var e,
              n = arguments,
              r = 0,
              i = this.length,
              o = d.call(n, 1, n.length - 1),
              s = d.call(n, -1)[0]
            for (
              e = function (e) {
                var n = x(e)
                t.split(' ').forEach(function (t) {
                  var r = function i(r) {
                    n.off(t, i), s.call(e, r)
                  }
                  n.on.apply(n, [t].concat(o, r))
                })
              };
              r < i;
              r++
            )
              e(this[r])
            return this
          }),
          (u.trigger = function (t) {
            var e = 0,
              n = this.length
            if (!t) return this
            for (; e < n; e++) x.event.trigger(this[e], t)
            return this
          }),
          (u.off = function (t, e, n) {
            var r = 0,
              i = this.length
            for (y(e) && ((n = e), (e = void 0)); r < i; r++)
              x.event.remove(this[r], t, n, e)
            return this
          }),
          (u.find = function (t) {
            for (
              var e = [],
                n = 0,
                r = this.length,
                i = function (n) {
                  y(n.querySelectorAll) &&
                    [].forEach.call(n.querySelectorAll(t), function (t) {
                      e.push(t)
                    })
                };
              n < r;
              n++
            )
              i(this[n])
            return x(e)
          }),
          (u.get = function (t) {
            return null != t
              ? t < 0
                ? this[t + this.length]
                : this[t]
              : d.call(this)
          }),
          (u.eq = function (t) {
            return x(this[t])
          }),
          (u.parent = function () {
            for (var t, e = [], n = 0, r = this.length; n < r; n++)
              !~e.indexOf((t = this[n].parentElement)) && t && e.push(t)
            return x(e)
          }),
          (u.toArray = function () {
            return d.call(this)
          }),
          (u.is = function () {
            var t = arguments
            return this.some(function (e) {
              return e.tagName.toLowerCase() === t[0]
            })
          }),
          (u.has = function () {
            var t = arguments
            return this.some(function (e) {
              return e.querySelectorAll(t[0]).length
            })
          }),
          (u.add = function (t, e) {
            return this.pushStack(x.unique(x.merge(this.get(), x(t, e))))
          }),
          (u.attr = function (t, e) {
            var n,
              r = arguments,
              i = 0,
              o = this.length
            if (v(t) && 1 === r.length)
              return this[0] && this[0].getAttribute(t)
            for (
              2 === r.length
                ? (n = function (n) {
                    n.setAttribute(t, e)
                  })
                : _(t) &&
                  (n = function (e) {
                    p(t).forEach(function (n) {
                      e.setAttribute(n, t[n])
                    })
                  });
              i < o;
              i++
            )
              n(this[i])
            return this
          }),
          (u.removeAttr = function (t) {
            for (var e = 0, n = this.length; e < n; e++)
              this[e].removeAttribute(t)
            return this
          }),
          (u.val = function (t) {
            var e = 0,
              n = this.length
            if (0 === arguments.length) return this[0] && this[0].value
            for (; e < n; e++) this[e].value = t
            return this
          }),
          (u.css = function (t, e) {
            var n,
              r = arguments,
              i = 0,
              s = this.length
            if (v(t) && 1 === r.length)
              return this[0] && o.getComputedStyle(this[0])[t]
            for (
              2 === r.length
                ? (n = function (n) {
                    n.style[t] = e
                  })
                : _(t) &&
                  (n = function (e) {
                    p(t).forEach(function (n) {
                      e.style[n] = t[n]
                    })
                  });
              i < s;
              i++
            )
              n(this[i])
            return this
          }),
          (u.data = function (t, e) {
            var n,
              r = arguments,
              i = {},
              o = 0,
              s = this.length,
              a = function (t, e, n) {
                _(n)
                  ? ((t.jdata = t.jdata || {}), (t.jdata[e] = n))
                  : (t.dataset[e] = n)
              },
              u = function (t) {
                return 'true' === t || ('false' !== t && t)
              }
            if (0 === r.length)
              return (
                this[0].jdata && (i = this[0].jdata),
                p(this[0].dataset).forEach(function (t) {
                  i[t] = u(this[0].dataset[t])
                }, this),
                i
              )
            if (1 === r.length && v(t))
              return (
                this[0] &&
                u(this[0].dataset[t] || (this[0].jdata && this[0].jdata[t]))
              )
            for (
              1 === r.length && _(t)
                ? (n = function (e) {
                    p(t).forEach(function (n) {
                      a(e, n, t[n])
                    })
                  })
                : 2 === r.length &&
                  (n = function (n) {
                    a(n, t, e)
                  });
              o < s;
              o++
            )
              n(this[o])
            return this
          }),
          (u.removeData = function (t) {
            for (var e, n, r = 0, i = this.length; r < i; r++)
              if (((e = this[r].jdata), (n = this[r].dataset), t))
                e && e[t] && delete e[t], delete n[t]
              else {
                for (t in e) delete e[t]
                for (t in n) delete n[t]
              }
            return this
          }),
          (u.addClass = function (t) {
            for (
              var e = 0,
                n = 0,
                r = this.length,
                i = t ? t.trim().split(/\s+/) : [];
              e < r;
              e++
            )
              for (n = 0, n = 0; n < i.length; n++) this[e].classList.add(i[n])
            return this
          }),
          (u.removeClass = function (t) {
            for (
              var e = 0,
                n = 0,
                r = this.length,
                i = t ? t.trim().split(/\s+/) : [];
              e < r;
              e++
            )
              for (n = 0, n = 0; n < i.length; n++)
                this[e].classList.remove(i[n])
            return this
          }),
          (u.toggleClass = function (t, e) {
            var n = 0,
              r = this.length,
              i = 'toggle'
            if (((e === !0 && (i = 'add')) || (e === !1 && (i = 'remove')), t))
              for (; n < r; n++) this[n].classList[i](t)
            return this
          }),
          (u.hasClass = function (t) {
            var e = 0,
              n = this.length
            if (t)
              for (; e < n; e++) if (this[e].classList.contains(t)) return !0
            return !1
          }),
          (u.html = function (t) {
            var e,
              n = arguments
            return 1 === n.length && void 0 !== t
              ? this.empty().append(t)
              : 0 === n.length && (e = this[0])
                ? e.innerHTML
                : this
          }),
          (u.append = function (t) {
            var e,
              n = 0,
              r = this.length
            for (
              v(t) && f.exec(t)
                ? (t = x(t))
                : _(t) || (t = document.createTextNode(t)),
                t = t instanceof x ? t : x(t),
                e = function (e, n) {
                  t.forEach(function (t) {
                    n ? e.appendChild(t.cloneNode(!0)) : e.appendChild(t)
                  })
                };
              n < r;
              n++
            )
              e(this[n], n)
            return this
          }),
          (u.appendTo = function (t) {
            return x(t).append(this), this
          }),
          (u.empty = function () {
            for (var t, e = 0, n = this.length; e < n; e++)
              for (t = this[e]; t.lastChild; ) t.removeChild(t.lastChild)
            return this
          }),
          (u.remove = function () {
            var t,
              e = 0,
              n = this.length
            for (this.off(); e < n; e++)
              (t = this[e]),
                delete t.jdata,
                t.parentNode && t.parentNode.removeChild(t)
            return this
          }),
          'object' === i(t) && t && 'object' === i(t.exports)
            ? (t.exports = x)
            : ((r = function () {
                return x
              }.call(e, n, e, t)),
              !(void 0 !== r && (t.exports = r)),
              (o.jBone = o.$ = x))
      })(window)
    }).call(e, n(23)(t))
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(85),
      i = r.extend({
        buildDOM: function () {
          return (
            this.on('new:node', this.buildNode),
            this.on('new:button', this.buildButton),
            this.on('new:menu', this.buildMenu),
            r.prototype.buildDOM.call(this)
          )
        },
        buildNode: function (t) {
          if (null != this.g)
            return (t.style.lineHeight =
              this.g.menuconfig.get('menuItemLineHeight'))
        },
        buildButton: function (t) {
          if (null != this.g)
            return (
              (t.style.fontSize = this.g.menuconfig.get('menuFontsize')),
              (t.style.marginLeft = this.g.menuconfig.get('menuMarginLeft')),
              (t.style.padding = this.g.menuconfig.get('menuPadding'))
            )
        },
        buildMenu: function (t) {
          if (null != this.g)
            return (t.style.fontSize =
              this.g.menuconfig.get('menuItemFontsize'))
        },
      })
    e['default'] = i
  },
  function (t, e) {
    'use strict'
    var n = {}
    ;(n.removeToInsertLater = function (t) {
      var e, n
      return (
        (n = t.parentNode),
        (e = t.nextSibling),
        n.removeChild(t),
        function () {
          e ? n.insertBefore(t, e) : n.appendChild(t)
        }
      )
    }),
      (n.removeAllChilds = function (t) {
        var e
        for (e = 0; t.firstChild; ) e++, t.removeChild(t.firstChild)
      }),
      (t.exports = n)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.columnsel = e.rowsel = e.possel = e.sel = void 0)
    var r = n(3),
      i = n(1).Model,
      o = i.extend({ defaults: { type: 'super' } }),
      s = o.extend({
        defaults: (0, r.extend)({}, o.prototype.defaults, {
          type: 'row',
          seqId: '',
        }),
        inRow: function (t) {
          return t === this.get('seqId')
        },
        inColumn: function (t) {
          return !0
        },
        getLength: function () {
          return 1
        },
      }),
      a = o.extend({
        defaults: (0, r.extend)({}, o.prototype.defaults, {
          type: 'column',
          xStart: -1,
          xEnd: -1,
        }),
        inRow: function () {
          return !0
        },
        inColumn: function (t) {
          return xStart <= t && t <= xEnd
        },
        getLength: function () {
          return xEnd - xStart
        },
      }),
      u = s.extend(
        (0, r.extend)(
          {},
          (0, r.pick)(a, 'inColumn'),
          (0, r.pick)(a, 'getLength'),
          {
            defaults: (0, r.extend)(
              {},
              a.prototype.defaults,
              s.prototype.defaults,
              { type: 'pos' },
            ),
          },
        ),
      )
    ;(e.sel = o), (e.possel = u), (e.rowsel = s), (e.columnsel = a)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(8),
      i = n(3),
      o = n(1).Collection,
      s = o.extend({
        model: r.sel,
        initialize: function (t, e) {
          if ('undefined' != typeof e && null !== e)
            return (
              (this.g = e.g),
              this.listenTo(this.g, 'residue:click', function (t) {
                return this._handleE(
                  t.evt,
                  new r.possel({
                    xStart: t.rowPos,
                    xEnd: t.rowPos,
                    seqId: t.seqId,
                  }),
                )
              }),
              this.listenTo(this.g, 'row:click', function (t) {
                return this._handleE(t.evt, new r.rowsel({ seqId: t.seqId }))
              }),
              this.listenTo(this.g, 'column:click', function (t) {
                return this._handleE(
                  t.evt,
                  new r.columnsel({
                    xStart: t.rowPos,
                    xEnd: t.rowPos + t.stepSize - 1,
                  }),
                )
              })
            )
        },
        getSelForRow: function (t) {
          return this.filter(function (e) {
            return e.inRow(t)
          })
        },
        getSelForColumns: function (t) {
          return this.filter(function (e) {
            return e.inColumn(t)
          })
        },
        addJSON: function (t) {
          return this.add(this._fromJSON(t))
        },
        _fromJSON: function (t) {
          switch (t.type) {
            case 'column':
              return new r.columnsel(t)
            case 'row':
              return new r.rowsel(t)
            case 'pos':
              return new r.possel(t)
          }
        },
        resetJSON: function (t) {
          return (t = t.map(this._fromJSON)), this.reset(t)
        },
        getBlocksForRow: function (t, e) {
          for (
            var n,
              r = this.filter(function (e) {
                return e.inRow(t)
              }),
              i = [],
              o = function (t, n) {
                var n = r[t]
                return 'row' === n.attributes.type
                  ? ((i = (function () {
                      var t = [],
                        n = 0
                      if (0 <= e) for (; n <= e; ) t.push(n++)
                      else for (; n >= e; ) t.push(n--)
                      return t
                    })()),
                    'break')
                  : void (i = i.concat(
                      (function () {
                        var t = [],
                          e = n.attributes.xStart
                        if (n.attributes.xStart <= n.attributes.xEnd)
                          for (; e <= n.attributes.xEnd; ) t.push(e++)
                        else for (; e >= n.attributes.xEnd; ) t.push(e--)
                        return t
                      })(),
                    ))
              },
              s = 0;
            s < r.length && 'break' !== o(s, n);
            s++
          );
          return i
        },
        getAllColumnBlocks: function (t) {
          var e = (t.maxLen, t.withPos, []),
            n = void 0
          n = t.withPos
            ? this.filter(function (t) {
                return null != t.get('xStart')
              })
            : this.filter(function (t) {
                return 'column' === t.get('type')
              })
          for (
            var r,
              o = function (t, r) {
                var r = n[t]
                e = e.concat(
                  (function () {
                    var t = [],
                      e = r.attributes.xStart
                    if (r.attributes.xStart <= r.attributes.xEnd)
                      for (; e <= r.attributes.xEnd; ) t.push(e++)
                    else for (; e >= r.attributes.xEnd; ) t.push(e--)
                    return t
                  })(),
                )
              },
              s = 0;
            s < n.length;
            s++
          )
            o(s, r)
          return (e = (0, i.uniq)(e))
        },
        invertRow: function (t) {
          var e = this.where({ type: 'row' })
          e = e.map(function (t) {
            return t.attributes.seqId
          })
          for (
            var n,
              o = (0, i.filter)(t, function (t) {
                return !(e.indexOf(t) >= 0)
              }),
              s = [],
              a = 0;
            a < o.length;
            a++
          ) {
            var n = o[a]
            s.push(new r.rowsel({ seqId: n }))
          }
          return this.reset(s)
        },
        invertCol: function (t) {
          var e = this.where({ type: 'column' }).reduce(function (t, e) {
              return t.concat(
                (function () {
                  var t = [],
                    n = e.attributes.xStart
                  if (e.attributes.xStart <= e.attributes.xEnd)
                    for (; n <= e.attributes.xEnd; ) t.push(n++)
                  else for (; n >= e.attributes.xEnd; ) t.push(n--)
                  return t
                })(),
              )
            }, []),
            n = (0, i.filter)(t, function (t) {
              return !(e.indexOf(t) >= 0)
            })
          if (0 !== n.length) {
            for (var o, s = [], a = n[0], u = a, l = 0; l < n.length; l++)
              (o = n[l]),
                u + 1 === o
                  ? (u = o)
                  : (s.push(new r.columnsel({ xStart: a, xEnd: u })),
                    (a = u = o))
            return (
              a !== u &&
                s.push(new r.columnsel({ xStart: a, xEnd: n[n.length - 1] })),
              this.reset(s)
            )
          }
        },
        _handleE: function (t, e) {
          return t.ctrlKey || t.metaKey ? this.add(e) : this.reset([e])
        },
        _reduceColumns: function () {
          return this.each(function (t, e, n) {
            for (
              var r = (0, i.filter)(n, function (t) {
                  return 'column' === t.get('type')
                }),
                o = t.get('xStart'),
                s = t.get('xEnd'),
                a = (0, i.filter)(r, function (t) {
                  return t.get('xEnd') === o - 1
                }),
                u = 0;
              u < a.length;
              u++
            )
              a[u].set('xEnd', o)
            for (
              var l = (0, i.filter)(r, function (t) {
                  return t.get('xStart') === s + 1
                }),
                c = 0;
              c < l.length;
              c++
            )
              l[c].set('xStart', s)
            if (a.length > 0 || l.length > 0) return t.collection.remove(t)
          })
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    var r,
      i,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            }
    ;(function () {
      function n(t) {
        function e(e, n, r, i, o, s) {
          for (; o >= 0 && o < s; o += t) {
            var a = i ? i[o] : o
            r = n(r, e[a], a, e)
          }
          return r
        }
        return function (n, r, i, o) {
          r = k(r, o, 4)
          var s = !A(n) && S.keys(n),
            a = (s || n).length,
            u = t > 0 ? 0 : a - 1
          return (
            arguments.length < 3 && ((i = n[s ? s[u] : u]), (u += t)),
            e(n, r, i, s, u, a)
          )
        }
      }
      function s(t) {
        return function (e, n, r) {
          n = C(n, r)
          for (var i = O(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
            if (n(e[o], o, e)) return o
          return -1
        }
      }
      function a(t, e, n) {
        return function (r, i, o) {
          var s = 0,
            a = O(r)
          if ('number' == typeof o)
            t > 0
              ? (s = o >= 0 ? o : Math.max(o + a, s))
              : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1)
          else if (n && o && a) return (o = n(r, i)), r[o] === i ? o : -1
          if (i !== i)
            return (o = e(p.call(r, s, a), S.isNaN)), o >= 0 ? o + s : -1
          for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
            if (r[o] === i) return o
          return -1
        }
      }
      function u(t, e) {
        var n = N.length,
          r = t.constructor,
          i = (S.isFunction(r) && r.prototype) || f,
          o = 'constructor'
        for (S.has(t, o) && !S.contains(e, o) && e.push(o); n--; )
          (o = N[n]), o in t && t[o] !== i[o] && !S.contains(e, o) && e.push(o)
      }
      var l = this,
        c = l._,
        h = Array.prototype,
        f = Object.prototype,
        d = Function.prototype,
        g = h.push,
        p = h.slice,
        m = f.toString,
        v = f.hasOwnProperty,
        _ = Array.isArray,
        y = Object.keys,
        b = d.bind,
        x = Object.create,
        w = function () {},
        S = function G(t) {
          return t instanceof G
            ? t
            : this instanceof G
              ? void (this._wrapped = t)
              : new G(t)
        }
      'undefined' != typeof t && t.exports && (e = t.exports = S),
        (e._ = S),
        (S.VERSION = '1.8.3')
      var k = function (t, e, n) {
          if (void 0 === e) return t
          switch (null == n ? 3 : n) {
            case 1:
              return function (n) {
                return t.call(e, n)
              }
            case 2:
              return function (n, r) {
                return t.call(e, n, r)
              }
            case 3:
              return function (n, r, i) {
                return t.call(e, n, r, i)
              }
            case 4:
              return function (n, r, i, o) {
                return t.call(e, n, r, i, o)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        },
        C = function (t, e, n) {
          return null == t
            ? S.identity
            : S.isFunction(t)
              ? k(t, e, n)
              : S.isObject(t)
                ? S.matcher(t)
                : S.property(t)
        }
      S.iteratee = function (t, e) {
        return C(t, e, 1 / 0)
      }
      var z = function (t, e) {
          return function (n) {
            var r = arguments.length
            if (r < 2 || null == n) return n
            for (var i = 1; i < r; i++)
              for (
                var o = arguments[i], s = t(o), a = s.length, u = 0;
                u < a;
                u++
              ) {
                var l = s[u]
                ;(e && void 0 !== n[l]) || (n[l] = o[l])
              }
            return n
          }
        },
        j = function (t) {
          if (!S.isObject(t)) return {}
          if (x) return x(t)
          w.prototype = t
          var e = new w()
          return (w.prototype = null), e
        },
        M = function (t) {
          return function (e) {
            return null == e ? void 0 : e[t]
          }
        },
        E = Math.pow(2, 53) - 1,
        O = M('length'),
        A = function (t) {
          var e = O(t)
          return 'number' == typeof e && e >= 0 && e <= E
        }
      ;(S.each = S.forEach =
        function (t, e, n) {
          e = k(e, n)
          var r, i
          if (A(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t)
          else {
            var o = S.keys(t)
            for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
          }
          return t
        }),
        (S.map = S.collect =
          function (t, e, n) {
            e = C(e, n)
            for (
              var r = !A(t) && S.keys(t),
                i = (r || t).length,
                o = Array(i),
                s = 0;
              s < i;
              s++
            ) {
              var a = r ? r[s] : s
              o[s] = e(t[a], a, t)
            }
            return o
          }),
        (S.reduce = S.foldl = S.inject = n(1)),
        (S.reduceRight = S.foldr = n(-1)),
        (S.find = S.detect =
          function (t, e, n) {
            var r
            if (
              ((r = A(t) ? S.findIndex(t, e, n) : S.findKey(t, e, n)),
              void 0 !== r && r !== -1)
            )
              return t[r]
          }),
        (S.filter = S.select =
          function (t, e, n) {
            var r = []
            return (
              (e = C(e, n)),
              S.each(t, function (t, n, i) {
                e(t, n, i) && r.push(t)
              }),
              r
            )
          }),
        (S.reject = function (t, e, n) {
          return S.filter(t, S.negate(C(e)), n)
        }),
        (S.every = S.all =
          function (t, e, n) {
            e = C(e, n)
            for (
              var r = !A(t) && S.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o
              if (!e(t[s], s, t)) return !1
            }
            return !0
          }),
        (S.some = S.any =
          function (t, e, n) {
            e = C(e, n)
            for (
              var r = !A(t) && S.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o
              if (e(t[s], s, t)) return !0
            }
            return !1
          }),
        (S.contains =
          S.includes =
          S.include =
            function (t, e, n, r) {
              return (
                A(t) || (t = S.values(t)),
                ('number' != typeof n || r) && (n = 0),
                S.indexOf(t, e, n) >= 0
              )
            }),
        (S.invoke = function (t, e) {
          var n = p.call(arguments, 2),
            r = S.isFunction(e)
          return S.map(t, function (t) {
            var i = r ? e : t[e]
            return null == i ? i : i.apply(t, n)
          })
        }),
        (S.pluck = function (t, e) {
          return S.map(t, S.property(e))
        }),
        (S.where = function (t, e) {
          return S.filter(t, S.matcher(e))
        }),
        (S.findWhere = function (t, e) {
          return S.find(t, S.matcher(e))
        }),
        (S.max = function (t, e, n) {
          var r,
            i,
            o = -(1 / 0),
            s = -(1 / 0)
          if (null == e && null != t) {
            t = A(t) ? t : S.values(t)
            for (var a = 0, u = t.length; a < u; a++)
              (r = t[a]), r > o && (o = r)
          } else
            (e = C(e, n)),
              S.each(t, function (t, n, r) {
                ;(i = e(t, n, r)),
                  (i > s || (i === -(1 / 0) && o === -(1 / 0))) &&
                    ((o = t), (s = i))
              })
          return o
        }),
        (S.min = function (t, e, n) {
          var r,
            i,
            o = 1 / 0,
            s = 1 / 0
          if (null == e && null != t) {
            t = A(t) ? t : S.values(t)
            for (var a = 0, u = t.length; a < u; a++)
              (r = t[a]), r < o && (o = r)
          } else
            (e = C(e, n)),
              S.each(t, function (t, n, r) {
                ;(i = e(t, n, r)),
                  (i < s || (i === 1 / 0 && o === 1 / 0)) && ((o = t), (s = i))
              })
          return o
        }),
        (S.shuffle = function (t) {
          for (
            var e,
              n = A(t) ? t : S.values(t),
              r = n.length,
              i = Array(r),
              o = 0;
            o < r;
            o++
          )
            (e = S.random(0, o)), e !== o && (i[o] = i[e]), (i[e] = n[o])
          return i
        }),
        (S.sample = function (t, e, n) {
          return null == e || n
            ? (A(t) || (t = S.values(t)), t[S.random(t.length - 1)])
            : S.shuffle(t).slice(0, Math.max(0, e))
        }),
        (S.sortBy = function (t, e, n) {
          return (
            (e = C(e, n)),
            S.pluck(
              S.map(t, function (t, n, r) {
                return { value: t, index: n, criteria: e(t, n, r) }
              }).sort(function (t, e) {
                var n = t.criteria,
                  r = e.criteria
                if (n !== r) {
                  if (n > r || void 0 === n) return 1
                  if (n < r || void 0 === r) return -1
                }
                return t.index - e.index
              }),
              'value',
            )
          )
        })
      var T = function (t) {
        return function (e, n, r) {
          var i = {}
          return (
            (n = C(n, r)),
            S.each(e, function (r, o) {
              t(i, r, n(r, o, e))
            }),
            i
          )
        }
      }
      ;(S.groupBy = T(function (t, e, n) {
        S.has(t, n) ? t[n].push(e) : (t[n] = [e])
      })),
        (S.indexBy = T(function (t, e, n) {
          t[n] = e
        })),
        (S.countBy = T(function (t, e, n) {
          S.has(t, n) ? t[n]++ : (t[n] = 1)
        })),
        (S.toArray = function (t) {
          return t
            ? S.isArray(t)
              ? p.call(t)
              : A(t)
                ? S.map(t, S.identity)
                : S.values(t)
            : []
        }),
        (S.size = function (t) {
          return null == t ? 0 : A(t) ? t.length : S.keys(t).length
        }),
        (S.partition = function (t, e, n) {
          e = C(e, n)
          var r = [],
            i = []
          return (
            S.each(t, function (t, n, o) {
              ;(e(t, n, o) ? r : i).push(t)
            }),
            [r, i]
          )
        }),
        (S.first =
          S.head =
          S.take =
            function (t, e, n) {
              if (null != t)
                return null == e || n ? t[0] : S.initial(t, t.length - e)
            }),
        (S.initial = function (t, e, n) {
          return p.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }),
        (S.last = function (t, e, n) {
          if (null != t)
            return null == e || n
              ? t[t.length - 1]
              : S.rest(t, Math.max(0, t.length - e))
        }),
        (S.rest =
          S.tail =
          S.drop =
            function (t, e, n) {
              return p.call(t, null == e || n ? 1 : e)
            }),
        (S.compact = function (t) {
          return S.filter(t, S.identity)
        })
      var L = function X(t, e, n, r) {
        for (var i = [], o = 0, s = r || 0, a = O(t); s < a; s++) {
          var u = t[s]
          if (A(u) && (S.isArray(u) || S.isArguments(u))) {
            e || (u = X(u, e, n))
            var l = 0,
              c = u.length
            for (i.length += c; l < c; ) i[o++] = u[l++]
          } else n || (i[o++] = u)
        }
        return i
      }
      ;(S.flatten = function (t, e) {
        return L(t, e, !1)
      }),
        (S.without = function (t) {
          return S.difference(t, p.call(arguments, 1))
        }),
        (S.uniq = S.unique =
          function (t, e, n, r) {
            S.isBoolean(e) || ((r = n), (n = e), (e = !1)),
              null != n && (n = C(n, r))
            for (var i = [], o = [], s = 0, a = O(t); s < a; s++) {
              var u = t[s],
                l = n ? n(u, s, t) : u
              e
                ? ((s && o === l) || i.push(u), (o = l))
                : n
                  ? S.contains(o, l) || (o.push(l), i.push(u))
                  : S.contains(i, u) || i.push(u)
            }
            return i
          }),
        (S.union = function () {
          return S.uniq(L(arguments, !0, !0))
        }),
        (S.intersection = function (t) {
          for (var e = [], n = arguments.length, r = 0, i = O(t); r < i; r++) {
            var o = t[r]
            if (!S.contains(e, o)) {
              for (var s = 1; s < n && S.contains(arguments[s], o); s++);
              s === n && e.push(o)
            }
          }
          return e
        }),
        (S.difference = function (t) {
          var e = L(arguments, !0, !0, 1)
          return S.filter(t, function (t) {
            return !S.contains(e, t)
          })
        }),
        (S.zip = function () {
          return S.unzip(arguments)
        }),
        (S.unzip = function (t) {
          for (
            var e = (t && S.max(t, O).length) || 0, n = Array(e), r = 0;
            r < e;
            r++
          )
            n[r] = S.pluck(t, r)
          return n
        }),
        (S.object = function (t, e) {
          for (var n = {}, r = 0, i = O(t); r < i; r++)
            e ? (n[t[r]] = e[r]) : (n[t[r][0]] = t[r][1])
          return n
        }),
        (S.findIndex = s(1)),
        (S.findLastIndex = s(-1)),
        (S.sortedIndex = function (t, e, n, r) {
          n = C(n, r, 1)
          for (var i = n(e), o = 0, s = O(t); o < s; ) {
            var a = Math.floor((o + s) / 2)
            n(t[a]) < i ? (o = a + 1) : (s = a)
          }
          return o
        }),
        (S.indexOf = a(1, S.findIndex, S.sortedIndex)),
        (S.lastIndexOf = a(-1, S.findLastIndex)),
        (S.range = function (t, e, n) {
          null == e && ((e = t || 0), (t = 0)), (n = n || 1)
          for (
            var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0;
            o < r;
            o++, t += n
          )
            i[o] = t
          return i
        })
      var R = function (t, e, n, r, i) {
        if (!(r instanceof e)) return t.apply(n, i)
        var o = j(t.prototype),
          s = t.apply(o, i)
        return S.isObject(s) ? s : o
      }
      ;(S.bind = function (t, e) {
        if (b && t.bind === b) return b.apply(t, p.call(arguments, 1))
        if (!S.isFunction(t))
          throw new TypeError('Bind must be called on a function')
        var n = p.call(arguments, 2)
        return function r() {
          return R(t, r, e, this, n.concat(p.call(arguments)))
        }
      }),
        (S.partial = function (t) {
          var e = p.call(arguments, 1)
          return function n() {
            for (var r = 0, i = e.length, o = Array(i), s = 0; s < i; s++)
              o[s] = e[s] === S ? arguments[r++] : e[s]
            for (; r < arguments.length; ) o.push(arguments[r++])
            return R(t, n, this, this, o)
          }
        }),
        (S.bindAll = function (t) {
          var e,
            n,
            r = arguments.length
          if (r <= 1) throw new Error('bindAll must be passed function names')
          for (e = 1; e < r; e++) (n = arguments[e]), (t[n] = S.bind(t[n], t))
          return t
        }),
        (S.memoize = function (t, e) {
          var n = function r(n) {
            var i = r.cache,
              o = '' + (e ? e.apply(this, arguments) : n)
            return S.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
          }
          return (n.cache = {}), n
        }),
        (S.delay = function (t, e) {
          var n = p.call(arguments, 2)
          return setTimeout(function () {
            return t.apply(null, n)
          }, e)
        }),
        (S.defer = S.partial(S.delay, S, 1)),
        (S.throttle = function (t, e, n) {
          var r,
            i,
            o,
            s = null,
            a = 0
          n || (n = {})
          var u = function () {
            ;(a = n.leading === !1 ? 0 : S.now()),
              (s = null),
              (o = t.apply(r, i)),
              s || (r = i = null)
          }
          return function () {
            var l = S.now()
            a || n.leading !== !1 || (a = l)
            var c = e - (l - a)
            return (
              (r = this),
              (i = arguments),
              c <= 0 || c > e
                ? (s && (clearTimeout(s), (s = null)),
                  (a = l),
                  (o = t.apply(r, i)),
                  s || (r = i = null))
                : s || n.trailing === !1 || (s = setTimeout(u, c)),
              o
            )
          }
        }),
        (S.debounce = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u = function l() {
              var u = S.now() - s
              u < e && u >= 0
                ? (r = setTimeout(l, e - u))
                : ((r = null), n || ((a = t.apply(o, i)), r || (o = i = null)))
            }
          return function () {
            ;(o = this), (i = arguments), (s = S.now())
            var l = n && !r
            return (
              r || (r = setTimeout(u, e)),
              l && ((a = t.apply(o, i)), (o = i = null)),
              a
            )
          }
        }),
        (S.wrap = function (t, e) {
          return S.partial(e, t)
        }),
        (S.negate = function (t) {
          return function () {
            return !t.apply(this, arguments)
          }
        }),
        (S.compose = function () {
          var t = arguments,
            e = t.length - 1
          return function () {
            for (var n = e, r = t[e].apply(this, arguments); n--; )
              r = t[n].call(this, r)
            return r
          }
        }),
        (S.after = function (t, e) {
          return function () {
            if (--t < 1) return e.apply(this, arguments)
          }
        }),
        (S.before = function (t, e) {
          var n
          return function () {
            return (
              --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
            )
          }
        }),
        (S.once = S.partial(S.before, 2))
      var q = !{ toString: null }.propertyIsEnumerable('toString'),
        N = [
          'valueOf',
          'isPrototypeOf',
          'toString',
          'propertyIsEnumerable',
          'hasOwnProperty',
          'toLocaleString',
        ]
      ;(S.keys = function (t) {
        if (!S.isObject(t)) return []
        if (y) return y(t)
        var e = []
        for (var n in t) S.has(t, n) && e.push(n)
        return q && u(t, e), e
      }),
        (S.allKeys = function (t) {
          if (!S.isObject(t)) return []
          var e = []
          for (var n in t) e.push(n)
          return q && u(t, e), e
        }),
        (S.values = function (t) {
          for (var e = S.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
            r[i] = t[e[i]]
          return r
        }),
        (S.mapObject = function (t, e, n) {
          e = C(e, n)
          for (var r, i = S.keys(t), o = i.length, s = {}, a = 0; a < o; a++)
            (r = i[a]), (s[r] = e(t[r], r, t))
          return s
        }),
        (S.pairs = function (t) {
          for (var e = S.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
            r[i] = [e[i], t[e[i]]]
          return r
        }),
        (S.invert = function (t) {
          for (var e = {}, n = S.keys(t), r = 0, i = n.length; r < i; r++)
            e[t[n[r]]] = n[r]
          return e
        }),
        (S.functions = S.methods =
          function (t) {
            var e = []
            for (var n in t) S.isFunction(t[n]) && e.push(n)
            return e.sort()
          }),
        (S.extend = z(S.allKeys)),
        (S.extendOwn = S.assign = z(S.keys)),
        (S.findKey = function (t, e, n) {
          e = C(e, n)
          for (var r, i = S.keys(t), o = 0, s = i.length; o < s; o++)
            if (((r = i[o]), e(t[r], r, t))) return r
        }),
        (S.pick = function (t, e, n) {
          var r,
            i,
            o = {},
            s = t
          if (null == s) return o
          S.isFunction(e)
            ? ((i = S.allKeys(s)), (r = k(e, n)))
            : ((i = L(arguments, !1, !1, 1)),
              (r = function (t, e, n) {
                return e in n
              }),
              (s = Object(s)))
          for (var a = 0, u = i.length; a < u; a++) {
            var l = i[a],
              c = s[l]
            r(c, l, s) && (o[l] = c)
          }
          return o
        }),
        (S.omit = function (t, e, n) {
          if (S.isFunction(e)) e = S.negate(e)
          else {
            var r = S.map(L(arguments, !1, !1, 1), String)
            e = function (t, e) {
              return !S.contains(r, e)
            }
          }
          return S.pick(t, e, n)
        }),
        (S.defaults = z(S.allKeys, !0)),
        (S.create = function (t, e) {
          var n = j(t)
          return e && S.extendOwn(n, e), n
        }),
        (S.clone = function (t) {
          return S.isObject(t)
            ? S.isArray(t)
              ? t.slice()
              : S.extend({}, t)
            : t
        }),
        (S.tap = function (t, e) {
          return e(t), t
        }),
        (S.isMatch = function (t, e) {
          var n = S.keys(e),
            r = n.length
          if (null == t) return !r
          for (var i = Object(t), o = 0; o < r; o++) {
            var s = n[o]
            if (e[s] !== i[s] || !(s in i)) return !1
          }
          return !0
        })
      var I = function Z(t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t === 1 / e
        if (null == t || null == e) return t === e
        t instanceof S && (t = t._wrapped), e instanceof S && (e = e._wrapped)
        var i = m.call(t)
        if (i !== m.call(e)) return !1
        switch (i) {
          case '[object RegExp]':
          case '[object String]':
            return '' + t == '' + e
          case '[object Number]':
            return +t !== +t
              ? +e !== +e
              : 0 === +t
                ? 1 / +t === 1 / e
                : +t === +e
          case '[object Date]':
          case '[object Boolean]':
            return +t === +e
        }
        var s = '[object Array]' === i
        if (!s) {
          if (
            'object' != ('undefined' == typeof t ? 'undefined' : o(t)) ||
            'object' != ('undefined' == typeof e ? 'undefined' : o(e))
          )
            return !1
          var a = t.constructor,
            u = e.constructor
          if (
            a !== u &&
            !(
              S.isFunction(a) &&
              a instanceof a &&
              S.isFunction(u) &&
              u instanceof u
            ) &&
            'constructor' in t &&
            'constructor' in e
          )
            return !1
        }
        ;(n = n || []), (r = r || [])
        for (var l = n.length; l--; ) if (n[l] === t) return r[l] === e
        if ((n.push(t), r.push(e), s)) {
          if (((l = t.length), l !== e.length)) return !1
          for (; l--; ) if (!Z(t[l], e[l], n, r)) return !1
        } else {
          var c,
            h = S.keys(t)
          if (((l = h.length), S.keys(e).length !== l)) return !1
          for (; l--; )
            if (((c = h[l]), !S.has(e, c) || !Z(t[c], e[c], n, r))) return !1
        }
        return n.pop(), r.pop(), !0
      }
      ;(S.isEqual = function (t, e) {
        return I(t, e)
      }),
        (S.isEmpty = function (t) {
          return (
            null == t ||
            (A(t) && (S.isArray(t) || S.isString(t) || S.isArguments(t))
              ? 0 === t.length
              : 0 === S.keys(t).length)
          )
        }),
        (S.isElement = function (t) {
          return !(!t || 1 !== t.nodeType)
        }),
        (S.isArray =
          _ ||
          function (t) {
            return '[object Array]' === m.call(t)
          }),
        (S.isObject = function (t) {
          var e = 'undefined' == typeof t ? 'undefined' : o(t)
          return 'function' === e || ('object' === e && !!t)
        }),
        S.each(
          [
            'Arguments',
            'Function',
            'String',
            'Number',
            'Date',
            'RegExp',
            'Error',
          ],
          function (t) {
            S['is' + t] = function (e) {
              return m.call(e) === '[object ' + t + ']'
            }
          },
        ),
        S.isArguments(arguments) ||
          (S.isArguments = function (t) {
            return S.has(t, 'callee')
          }),
        'function' != typeof /./ &&
          'object' !=
            ('undefined' == typeof Int8Array ? 'undefined' : o(Int8Array)) &&
          (S.isFunction = function (t) {
            return 'function' == typeof t || !1
          }),
        (S.isFinite = function (t) {
          return isFinite(t) && !isNaN(parseFloat(t))
        }),
        (S.isNaN = function (t) {
          return S.isNumber(t) && t !== +t
        }),
        (S.isBoolean = function (t) {
          return t === !0 || t === !1 || '[object Boolean]' === m.call(t)
        }),
        (S.isNull = function (t) {
          return null === t
        }),
        (S.isUndefined = function (t) {
          return void 0 === t
        }),
        (S.has = function (t, e) {
          return null != t && v.call(t, e)
        }),
        (S.noConflict = function () {
          return (l._ = c), this
        }),
        (S.identity = function (t) {
          return t
        }),
        (S.constant = function (t) {
          return function () {
            return t
          }
        }),
        (S.noop = function () {}),
        (S.property = M),
        (S.propertyOf = function (t) {
          return null == t
            ? function () {}
            : function (e) {
                return t[e]
              }
        }),
        (S.matcher = S.matches =
          function (t) {
            return (
              (t = S.extendOwn({}, t)),
              function (e) {
                return S.isMatch(e, t)
              }
            )
          }),
        (S.times = function (t, e, n) {
          var r = Array(Math.max(0, t))
          e = k(e, n, 1)
          for (var i = 0; i < t; i++) r[i] = e(i)
          return r
        }),
        (S.random = function (t, e) {
          return (
            null == e && ((e = t), (t = 0)),
            t + Math.floor(Math.random() * (e - t + 1))
          )
        }),
        (S.now =
          Date.now ||
          function () {
            return new Date().getTime()
          })
      var P = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
        },
        W = S.invert(P),
        F = function (t) {
          var e = function (e) {
              return t[e]
            },
            n = '(?:' + S.keys(t).join('|') + ')',
            r = RegExp(n),
            i = RegExp(n, 'g')
          return function (t) {
            return (
              (t = null == t ? '' : '' + t), r.test(t) ? t.replace(i, e) : t
            )
          }
        }
      ;(S.escape = F(P)),
        (S.unescape = F(W)),
        (S.result = function (t, e, n) {
          var r = null == t ? void 0 : t[e]
          return void 0 === r && (r = n), S.isFunction(r) ? r.call(t) : r
        })
      var B = 0
      ;(S.uniqueId = function (t) {
        var e = ++B + ''
        return t ? t + e : e
      }),
        (S.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        })
      var H = /(.)^/,
        D = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029',
        },
        U = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (t) {
          return '\\' + D[t]
        }
      ;(S.template = function (t, e, n) {
        !e && n && (e = n), (e = S.defaults({}, e, S.templateSettings))
        var r = RegExp(
            [
              (e.escape || H).source,
              (e.interpolate || H).source,
              (e.evaluate || H).source,
            ].join('|') + '|$',
            'g',
          ),
          i = 0,
          o = "__p+='"
        t.replace(r, function (e, n, r, s, a) {
          return (
            (o += t.slice(i, a).replace(U, V)),
            (i = a + e.length),
            n
              ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
              : r
                ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : s && (o += "';\n" + s + "\n__p+='"),
            e
          )
        }),
          (o += "';\n"),
          e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
          (o =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            o +
            'return __p;\n')
        try {
          var s = new Function(e.variable || 'obj', '_', o)
        } catch (a) {
          throw ((a.source = o), a)
        }
        var u = function (t) {
            return s.call(this, t, S)
          },
          l = e.variable || 'obj'
        return (u.source = 'function(' + l + '){\n' + o + '}'), u
      }),
        (S.chain = function (t) {
          var e = S(t)
          return (e._chain = !0), e
        })
      var $ = function (t, e) {
        return t._chain ? S(e).chain() : e
      }
      ;(S.mixin = function (t) {
        S.each(S.functions(t), function (e) {
          var n = (S[e] = t[e])
          S.prototype[e] = function () {
            var t = [this._wrapped]
            return g.apply(t, arguments), $(this, n.apply(S, t))
          }
        })
      }),
        S.mixin(S),
        S.each(
          ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
          function (t) {
            var e = h[t]
            S.prototype[t] = function () {
              var n = this._wrapped
              return (
                e.apply(n, arguments),
                ('shift' !== t && 'splice' !== t) ||
                  0 !== n.length ||
                  delete n[0],
                $(this, n)
              )
            }
          },
        ),
        S.each(['concat', 'join', 'slice'], function (t) {
          var e = h[t]
          S.prototype[t] = function () {
            return $(this, e.apply(this._wrapped, arguments))
          }
        }),
        (S.prototype.value = function () {
          return this._wrapped
        }),
        (S.prototype.valueOf = S.prototype.toJSON = S.prototype.value),
        (S.prototype.toString = function () {
          return '' + this._wrapped
        }),
        (r = []),
        (i = function () {
          return S
        }.apply(e, r)),
        !(void 0 !== i && (t.exports = i))
    }).call(void 0)
  },
  function (t, e, n) {
    'use strict'
    t.exports = n(54)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.version =
        e.xhr =
        e.seqs =
        e.parser =
        e.newick =
        e.matrix =
        e.gff =
        e.fasta =
        e.clustal =
          void 0)
    var i = n(56),
      o = r(i),
      s = n(57),
      a = r(s),
      u = n(58),
      l = r(u),
      c = n(60),
      h = r(c),
      f = n(62),
      d = r(f),
      g = n(13),
      p = r(g),
      m = n(25),
      v = r(m)
    ;(e.clustal = o['default']),
      (e.fasta = a['default']),
      (e.gff = l['default']),
      (e.matrix = h['default']),
      (e.newick = d['default']),
      (e.parser = p['default']),
      (e.seqs = v['default'])
    var _ = n(24)
    e.xhr = _
    var y = 'imported'
    'undefined' != typeof IO_VERSION && (y = IO_VERSION), (e.version = y)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            },
      i = n(24),
      o = {}
    ;(e['default'] = o),
      (o.read = function (t, e) {
        var n = (function (t) {
          return function (n, r, i) {
            return o._onRetrieval(n, i, e, t)
          }
        })(this)
        return 'undefined' == typeof e
          ? new Promise(function (r, o) {
              ;(e = function (t, e) {
                t ? o(t) : r(e)
              }),
                i(t, n)
            })
          : i(t, n)
      }),
      (o._onRetrieval = function (t, e, n, r) {
        var i = void 0
        return 'undefined' != typeof t && (i = r.parse(e)), n.call(r, t, i)
      }),
      (o.extend = function (t, e) {
        return extend(o, t, e)
      }),
      (o.mixin = function (t) {
        var e = ['read']
        return (
          'object' !== ('undefined' == typeof t ? 'undefined' : r(t)) &&
            (t = t.prototype),
          e.forEach(function (e) {
            t[e] = o[e]
          }, this),
          t
        )
      })
  },
  function (t, e) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = 'http://www.w3.org/2000/svg',
      r = function (t, e) {
        for (var n in e) {
          var r = e[n]
          t.setAttributeNS(null, n, r)
        }
        return t
      },
      i = function (t) {
        var e = document.createElementNS(n, 'svg')
        return (
          e.setAttribute('width', t.width),
          e.setAttribute('height', t.height),
          e
        )
      },
      o = function (t) {
        return r(document.createElementNS(n, 'rect'), t)
      },
      s = function (t) {
        return r(document.createElementNS(n, 'line'), t)
      },
      a = function (t) {
        return r(document.createElementNS(n, 'polygon'), t)
      }
    ;(e.base = i), (e.line = s), (e.rect = o), (e.polygon = a)
  },
  function (t, e, n) {
    var r,
      i,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            }
    !(function (s) {
      'object' === o(e)
        ? (t.exports = s())
        : ((r = s),
          (i = 'function' == typeof r ? r.call(e, n, e, t) : r),
          !(void 0 !== i && (t.exports = i)))
    })(function () {
      'use strict'
      var t = {
        has: function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        },
        extend: function (t) {
          for (var e = 1; e < arguments.length; ++e) {
            var n = arguments[e]
            if (n) for (var r in n) t[r] = n[r]
          }
          return t
        },
      }
      return function (e, n) {
        var r,
          i = this
        ;(r =
          e && t.has(e, 'constructor')
            ? e.constructor
            : function () {
                return i.apply(this, arguments)
              }),
          t.extend(r, i, n)
        var o = function () {
          this.constructor = r
        }
        return (
          (o.prototype = i.prototype),
          (r.prototype = new o()),
          e && t.extend(r.prototype, e),
          (r.__super__ = i.prototype),
          r
        )
      }
    })
  },
  function (t, e, n) {
    'use strict'
    var r = n(11)
    ;(r.onAll = function (t, e) {
      return this.on('all', t, e), this
    }),
      (r.oldMixin = r.mixin),
      (r.mixin = function (t) {
        r.oldMixin(t)
        for (var e = ['onAll'], n = 0; n < e.length; n++) {
          var i = e[n]
          t[i] = this[i]
        }
        return t
      }),
      (t.exports = r)
  },
  function (t, e, n) {
    ;(function (t) {
      'use strict'
      var e = {}
      ;(e.d = e.defaultValue =
        function (t, e) {
          return void 0 === t ? ('function' == typeof t ? e() : e) : t
        }),
        (e.id = function (t) {
          return document.getElementById(t)
        }),
        (e.mk = function (t) {
          return document.createElement(t)
        }),
        void 0 !== t && void 0 !== t.exports && (t.exports = e)
    }).call(e, n(23)(t))
  },
  function (t, e) {
    'use strict'
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      })(),
      i = (function () {
        function t() {
          n(this, t)
        }
        return (
          r(t, null, [
            {
              key: 'randomInt',
              value: function (t, e) {
                if ('undefined' == typeof e || null === e) {
                  var n = [0, t]
                  ;(t = n[0]), (e = n[1])
                }
                if (t > e) {
                  var r = [e, t]
                  ;(t = r[0]), (e = r[1])
                }
                return Math.floor(Math.random() * (e - t + 1) + t)
              },
            },
            {
              key: 'uniqueId',
              value: function () {
                for (
                  var t =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? 8
                        : arguments[0],
                    e = '';
                  e.length < t;

                )
                  e += Math.random().toString(36).substr(2)
                return e.substr(0, t)
              },
            },
            {
              key: 'getRandomInt',
              value: function (t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
              },
            },
          ]),
          t
        )
      })()
    e['default'] = i
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(12),
      i = n(3),
      o = n(79),
      s = n(80),
      a = {
        openInJalview: function (t, e) {
          '.' === t.charAt(0) &&
            (t =
              document.URL.substr(0, document.URL.lastIndexOf('/')) + '/' + t),
            t.indexOf('http') < 0 &&
              (t = 'http://' + window.location.hostname + t),
            (t = encodeURIComponent(t))
          var n = 'http://www.jalview.org/services/launchApp?open=' + t
          return (n += '&colour=' + e), window.open(n, '_blank')
        },
        publishWeb: function (t, e) {
          var n = r.fasta.write(t.seqs.toJSON())
          return (
            (n = encodeURIComponent(n)),
            (0, r.xhr)(
              {
                method: 'POST',
                body: 'sprunge=' + n,
                uri: 'http://sprunge.biojs.net',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              },
              function (t, n, r) {
                return e(r.trim())
              },
            )
          )
        },
        shareLink: function (t, e) {
          var n = t.g.config.get('importURL'),
            r = 'http://msa.biojs.net/app/?seq=',
            i = function (t) {
              var n = r + t
              if (e) return e(n)
            }
          return n ? i(n) : a.publishWeb(t, i)
        },
        saveAsFile: function (t, e) {
          var n = r.fasta.write(t.seqs.toJSON())
          return s(new Blob([n], { type: 'text/plain' }), e)
        },
        saveSelection: function (t, e) {
          var n = t.g.selcol.pluck('seqId')
          if (n.length > 0) {
            n = t.seqs.filter(function (t) {
              return n.indexOf(t.get('id')) >= 0
            })
            for (
              var i = n.length - 1, o = 0;
              0 < i ? o <= i : o >= i;
              0 < i ? o++ : o--
            )
              n[o] = n[o].toJSON()
          } else (n = t.seqs.toJSON()), console.warn('no selection found')
          var a = r.fasta.write(n)
          return s(new Blob([a], { type: 'text/plain' }), e)
        },
        saveAnnots: function (t, e) {
          var n = t.seqs.map(function (t) {
            if (((n = t.get('features')), 0 !== n.length)) {
              var e = t.get('name')
              return (
                n.each(function (t) {
                  return t.set('seqname', e)
                }),
                n.toJSON()
              )
            }
          })
          n = (0, i.flatten)((0, i.compact)(n))
          var o = r.gff.exportLines(n)
          return s(new Blob([o], { type: 'text/plain' }), e)
        },
        saveAsImg: function (t, e) {
          var n = t.getView('stage').getView('body').getView('seqblock').el
          if ('undefined' != typeof n && null !== n)
            return s(o(n.toDataURL('image/png')), e, 'image/png')
        },
      }
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = (function () {
        function t(t, e) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(r = (s = a.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (u) {
            ;(i = !0), (o = u)
          } finally {
            try {
              !r && a['return'] && a['return']()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function (e, n) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e)) return t(e, n)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          )
        }
      })(),
      o = n(3),
      s = n(12),
      a = n(39),
      u = r(a),
      l = function (t) {
        return (this.msa = t), this
      },
      c = {
        guessFileFromText: function (t, e) {
          if ('undefined' == typeof t || null === t)
            return console.warn('invalid file format'), ['', 'error']
          switch ((0, u['default'])(t, e)) {
            case 'clustal':
              var n = s.clustal,
                r = 'seqs'
              break
            case 'fasta':
              ;(n = s.fasta), (r = 'seqs')
              break
            case 'newick':
              r = 'newick'
              break
            case 'gff':
              ;(n = s.gff), (r = 'features')
              break
            default:
              alert(
                'Unknown file format. Please contact us on Github for help.',
              )
          }
          return [n, r]
        },
        parseText: function (t, e) {
          var n = this.guessFileFromText(t, e),
            r = i(n, 2),
            o = r[0],
            s = r[1]
          return 'seqs' === s
            ? [o.parse(t), s]
            : 'features' === s
              ? [o.parseSeqs(t), s]
              : [t, s]
        },
        importFiles: function (t) {
          var e = this
          return (function () {
            for (
              var n = [], r = t.length - 1, i = 0;
              0 < r ? i <= r : i >= r;
              0 < r ? i++ : i--
            ) {
              var o = t[i],
                s = new FileReader()
              ;(s.onload = function (t) {
                return e.importFile(t.target.result)
              }),
                n.push(s.readAsText(o))
            }
            return n
          })()
        },
        importFile: function (t, e) {
          var n = this
          ;(e = e || {}), (e.name = t.name)
          var r,
            o = this.parseText(t, e),
            s = i(o, 2),
            a = s[0],
            u = s[1]
          return 'error' === u
            ? (alert('An error happened'), 'error')
            : ('seqs' === u
                ? (this.msa.seqs.reset(a),
                  this.msa.g.config.set('url', 'userimport'),
                  this.msa.g.trigger('url:userImport'))
                : 'features' === u
                  ? this.msa.seqs.addFeatures(a)
                  : 'newick' === u
                    ? this.msa.u.tree.loadTree(function () {
                        return n.msa.u.tree.showTree(t)
                      })
                    : alert('Unknown file!'),
              (r = t.name))
        },
        importURL: function (t, e) {
          var n = this
          return (
            (t = this.msa.u.proxy.corsURL(t)),
            this.msa.g.config.set('url', t),
            (0, s.xhr)({ url: t, timeout: 0 }, function (r, i, o) {
              return r
                ? console.error(r)
                : 'error' !== n.importFile(o, { url: t })
                  ? (n.msa.g.trigger('import:url', t), e ? e() : void 0)
                  : void 0
            })
          )
        },
      }
    ;(0, o.extend)(l.prototype, c), (e['default'] = l)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(17),
      i = {
        loadScript: function (t, e) {
          var n = r.mk('script')
          return (
            (n.type = 'text/javascript'),
            (n.src = t),
            (n.async = !0),
            (n.onload = n.onreadystatechange =
              function () {
                if (
                  !(t || (this.readyState && 'complete' !== this.readyState))
                ) {
                  var t = !0
                  return e()
                }
              }),
            document.getElementsByTagName('script')[0].parentNode.appendChild(n)
          )
        },
        joinCb: function (t, e, n) {
          e = e || 1
          var r = 0,
            i = function (t, e) {
              return 'undefined' == typeof t || null === t
                ? o()
                : function () {
                    var n
                    return (
                      (n = 'apply'),
                      t.indexOf(n) >= 0 && t.apply(e, arguments),
                      o()
                    )
                  }
            },
            o = function () {
              if ((r++, r === e)) return t.call(n)
            }
          return i
        },
      }
    e['default'] = i
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(3),
      i = function (t) {
        return (this.g = t.g), this
      },
      o = {
        corsURL: function (t) {
          return document.URL.indexOf('localhost') >= 0 && '/' === t[0]
            ? t
            : '.' === t.charAt(0) || '/' === t.charAt(0)
              ? t
              : (this.g.config.get('importProxyStripHttp') &&
                  ((t = t.replace('http://', '')),
                  (t = t.replace('https://', ''))),
                (t = this.g.config.get('importProxy') + t))
        },
      }
    ;(0, r.extend)(i.prototype, o), (e['default'] = i)
  },
  function (t, e) {
    'use strict'
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          (t.children = []),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t, e) {
      for (var n = 0; n < t.length; n++) e(t[n])
    }
    function i(t) {
      for (var e in t) if (t.hasOwnProperty(e)) return !1
      return !0
    }
    function o(t, e, n) {
      var r = t
      return (
        h(e)
          ? ((n = e), 'string' == typeof t && (r = { uri: t }))
          : (r = d(e, { uri: t })),
        (r.callback = n),
        r
      )
    }
    function s(t, e, n) {
      return (e = o(t, e, n)), a(e)
    }
    function a(t) {
      function e() {
        4 === h.readyState && o()
      }
      function n() {
        var t = void 0
        if (((t = h.response ? h.response : h.responseText || u(h)), x))
          try {
            t = JSON.parse(t)
          } catch (e) {}
        return t
      }
      function r(t) {
        clearTimeout(p),
          t instanceof Error ||
            (t = new Error('' + (t || 'Unknown XMLHttpRequest Error'))),
          (t.statusCode = 0),
          a(t, c),
          (a = l)
      }
      function o() {
        if (!g) {
          var e
          clearTimeout(p),
            (e =
              t.useXDR && void 0 === h.status
                ? 200
                : 1223 === h.status
                  ? 204
                  : h.status)
          var r = c,
            i = null
          0 !== e
            ? ((r = {
                body: n(),
                statusCode: e,
                method: v,
                headers: {},
                url: m,
                rawRequest: h,
              }),
              h.getAllResponseHeaders &&
                (r.headers = f(h.getAllResponseHeaders())))
            : (i = new Error('Internal XMLHttpRequest Error')),
            a(i, r, r.body),
            (a = l)
        }
      }
      var a = t.callback
      if ('undefined' == typeof a) throw new Error('callback argument missing')
      var c = {
          body: void 0,
          headers: {},
          statusCode: 0,
          method: v,
          url: m,
          rawRequest: h,
        },
        h = t.xhr || null
      h ||
        (h =
          t.cors || t.useXDR ? new s.XDomainRequest() : new s.XMLHttpRequest())
      var d,
        g,
        p,
        m = (h.url = t.uri || t.url),
        v = (h.method = t.method || 'GET'),
        _ = t.body || t.data || null,
        y = (h.headers = t.headers || {}),
        b = !!t.sync,
        x = !1
      if (
        ('json' in t &&
          ((x = !0),
          y.accept || y.Accept || (y.Accept = 'application/json'),
          'GET' !== v &&
            'HEAD' !== v &&
            (y['content-type'] ||
              y['Content-Type'] ||
              (y['Content-Type'] = 'application/json'),
            (_ = JSON.stringify(t.json)))),
        (h.onreadystatechange = e),
        (h.onload = o),
        (h.onerror = r),
        (h.onprogress = function () {}),
        (h.ontimeout = r),
        h.open(v, m, !b, t.username, t.password),
        b || (h.withCredentials = !!t.withCredentials),
        !b &&
          t.timeout > 0 &&
          (p = setTimeout(function () {
            ;(g = !0), h.abort('timeout')
            var t = new Error('XMLHttpRequest timeout')
            ;(t.code = 'ETIMEDOUT'), r(t)
          }, t.timeout)),
        h.setRequestHeader)
      )
        for (d in y) y.hasOwnProperty(d) && h.setRequestHeader(d, y[d])
      else if (t.headers && !i(t.headers))
        throw new Error('Headers cannot be set on an XDomainRequest object')
      return (
        'responseType' in t && (h.responseType = t.responseType),
        'beforeSend' in t &&
          'function' == typeof t.beforeSend &&
          t.beforeSend(h),
        h.send(_),
        h
      )
    }
    function u(t) {
      if ('document' === t.responseType) return t.responseXML
      var e =
        204 === t.status &&
        t.responseXML &&
        'parsererror' === t.responseXML.documentElement.nodeName
      return '' !== t.responseType || e ? null : t.responseXML
    }
    function l() {}
    var c = n(83),
      h = n(47),
      f = n(104),
      d = n(142)
    ;(t.exports = s),
      (s.XMLHttpRequest = c.XMLHttpRequest || l),
      (s.XDomainRequest =
        'withCredentials' in new s.XMLHttpRequest()
          ? s.XMLHttpRequest
          : c.XDomainRequest),
      r(['get', 'put', 'post', 'patch', 'head', 'delete'], function (t) {
        s['delete' === t ? 'del' : t] = function (e, n, r) {
          return (n = o(e, n, r)), (n.method = t.toUpperCase()), a(n)
        }
      })
  },
  function (t, e) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = {}
    ;(e['default'] = n),
      (n.getMeta = function (t) {
        var e,
          n,
          r = !1,
          i = !1,
          o = {},
          s = {},
          a = t.split(' ')
        if (
          (a.length >= 1 ? ((r = a.shift()), (i = a.join(' '))) : (r = t), r)
        ) {
          var u = r.split('|')
          for (e = u.pop(), s.en = e; 0 != u.length; ) {
            var l = u.shift(),
              c = u.shift()
            o[l] = c
          }
        } else e = r
        if (i) {
          var h = i.split('=')
          if (h.length > 1) {
            var f, d
            h.length - 1,
              h.forEach(function (t) {
                t = t.trim()
                var e,
                  r = t.split(' ')
                r.length > 1 ? ((d = r.pop()), (e = r.join(' '))) : (e = t),
                  f ? (s[f.toLowerCase()] = e) : (n = e),
                  (f = d)
              })
          } else n = h.shift()
        }
        var g = { name: e, ids: o, details: s }
        return n && (g.desc = n), g
      })
    var r = {
      sp: { link: 'http://www.uniprot.org/%s', name: 'Uniprot' },
      tr: { link: 'http://www.uniprot.org/%s', name: 'Trembl' },
      gb: { link: 'http://www.ncbi.nlm.nih.gov/nuccore/%s', name: 'Genbank' },
      pdb: {
        link: 'http://www.rcsb.org/pdb/explore/explore.do?structureId=%s',
        name: 'PDB',
      },
    }
    ;(n.buildLinks = function (t) {
      var e = {}
      return (
        (t = t || {}),
        Object.keys(t).forEach(function (n) {
          if (n in r) {
            var i = r[n],
              o = i.link.replace('%s', t[n])
            e[i.name] = o
          }
        }),
        e
      )
    }),
      (n.contains = function (t, e) {
        return ''.indexOf.call(t, e, 0) !== -1
      }),
      (n.splitNChars = function (t, e) {
        var n, r
        e = e || 80
        var i = []
        for (n = 0, r = t.length - 1; n <= r; n += e) i.push(t.substr(n, e))
        return i
      }),
      (n.reverse = function (t) {
        return t.split('').reverse().join('')
      }),
      (n.complement = function (t) {
        var e = t + '',
          n = [
            [/g/g, '0'],
            [/c/g, '1'],
            [/0/g, 'c'],
            [/1/g, 'g'],
            [/G/g, '0'],
            [/C/g, '1'],
            [/0/g, 'C'],
            [/1/g, 'G'],
            [/a/g, '0'],
            [/t/g, '1'],
            [/0/g, 't'],
            [/1/g, 'a'],
            [/A/g, '0'],
            [/T/g, '1'],
            [/0/g, 'T'],
            [/1/g, 'A'],
          ]
        for (var r in n) e = e.replace(n[r][0], n[r][1])
        return e
      }),
      (n.reverseComplement = function (t) {
        return n.reverse(n.complement(t))
      }),
      (n.model = function (t, e, n) {
        ;(this.seq = t), (this.name = e), (this.id = n), (this.ids = {})
      })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    n(84),
      (t.exports = r =
        i.extend({
          constructor: function (t, e) {
            return (this.g = e.g), i.apply(this, arguments), this
          },
          defaults: {
            currentSize: 5,
            step: 1,
            originalSize: !1,
            scaleCategories: [
              { columnWidth: 1, markerStepSize: 20, stepSize: 0 },
              { columnWidth: 3, markerStepSize: 20, stepSize: 0 },
              { columnWidth: 5, markerStepSize: 10, stepSize: 0 },
              { columnWidth: 9, markerStepSize: 5, stepSize: 1 },
              { columnWidth: 15, markerStepSize: 2, stepSize: 1 },
              { columnWidth: 20, markerStepSize: 1, stepSize: 1 },
              { columnWidth: 30, markerStepSize: 1, stepSize: 1 },
              { columnWidth: 45, markerStepSize: 1, stepSize: 1 },
            ],
          },
          initialize: function (t) {
            var e = this.get('scaleCategories'),
              n =
                this.g.zoomer.get('columnWidth') ||
                this._getScaleInfo().columnWidth,
              r = _.find(e, { columnWidth: n })
            if (!r) {
              var i = this._insertScaleCategory(n)
              ;(r = e[i]), this.set('currentSize', i + 1)
            }
            var o = this.get('currentSize')
            return this.set('originalSize', o), this.setSize(o), this
          },
          _insertScaleCategory: function (t) {
            var e = this.get('scaleCategories'),
              n = _.findLastIndex(e, function (e) {
                return e.columnWidth < t
              }),
              r = e[n],
              i = n + 1,
              o = {
                columnWidth: t,
                markerStepSize: r.markerStepSize,
                stepSize: r.markerStepSize,
              }
            return e.splice(i, 0, o), this.set('scaleCategories', e), i
          },
          getSizeRange: function () {
            return [1, this.get('scaleCategories').length]
          },
          bigger: function () {
            return this.setSize(this.get('currentSize') + this.get('step'))
          },
          smaller: function () {
            return this.setSize(this.get('currentSize') - this.get('step'))
          },
          reset: function () {
            return this.setSize(this.get('originalSize'))
          },
          setSize: function (t) {
            var e = this.getSizeRange()
            ;(t = parseInt(t)),
              (t = t < e[0] ? e[0] : t > e[1] ? e[1] : t),
              this.set('currentSize', t)
            var n = this._getScaleInfo()
            return (
              this.g.zoomer.set({
                columnWidth: n.columnWidth,
                stepSize: n.stepSize,
                markerStepSize: n.markerStepSize,
              }),
              this
            )
          },
          getSize: function () {
            return this.get('currentSize')
          },
          _getScaleInfo: function () {
            var t = this.getSize(),
              e = this.get('scaleCategories')
            return t > 0 && t <= e.length
              ? e[t - 1]
              : void console.error('out of bounds')
          },
        }))
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(93),
      o = n(1).Model
    t.exports = r = o.extend({
      defaults: {
        scheme: 'taylor',
        colorBackground: !0,
        showLowerCase: !0,
        opacity: 0.6,
      },
      initialize: function (t, e, n) {
        return (
          (this.colors = new i({
            seqs: e,
            conservation: function () {
              return n.scale(n.conservation())
            },
          })),
          n.on(
            'reset',
            function () {
              if ('dyn' === this.getSelectedScheme().type) {
                var t
                if (((t = 'reset'), this.getSelectedScheme().indexOf(t) >= 0))
                  return this.getSelectedScheme().reset()
              }
            },
            this,
          )
        )
      },
      addStaticScheme: function (t, e) {
        return this.colors.addStaticScheme(t, e)
      },
      addDynScheme: function (t, e) {
        return this.colors.addDynScheme(t, e)
      },
      getScheme: function (t) {
        return this.colors.getScheme(t)
      },
      getSelectedScheme: function () {
        return this.colors.getScheme(this.get('scheme'))
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({
      initialize: function (t, e) {
        return (
          null == this.get('hidden') && this.set('hidden', []), (this.stats = e)
        )
      },
      calcHiddenColumns: function (t) {
        for (var e, n = this.get('hidden'), r = t, i = 0; i < n.length; i++)
          (e = n[i]), e <= r && r++
        return r - t
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({
      defaults: {
        registerMouseHover: !1,
        registerMouseClicks: !0,
        importProxy: 'https://cors-anywhere.herokuapp.com/',
        importProxyStripHttp: !0,
        eventBus: !0,
        alphabetSize: 20,
        dropImport: !1,
        debug: !1,
        hasRef: !1,
        bootstrapMenu: !1,
        manualRendering: !1,
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(21),
      o = n(1).Model
    t.exports = r = o.extend({
      initialize: function (t) {
        return (this.g = t)
      },
      development: {
        'msa-tnt': '/node_modules/msa-tnt/build/bundle.js',
        'biojs-io-newick':
          '/node_modules/biojs-io-newick/build/biojs-io-newick.min.js',
      },
      loadPackage: function (t, e) {
        try {
          return e(n(146)(t))
        } catch (r) {
          return i['default'].loadScript(this._pkgURL(t), e)
        }
      },
      loadPackages: function (t, e) {
        var n = this,
          r = i['default'].joinCb(function () {
            return e()
          }, t.length)
        return t.forEach(function (t) {
          return n.loadPackage(t, r)
        })
      },
      _pkgURL: function (t) {
        if (this.g.config.get('debug')) var e = this.development[t]
        else e = 'http://wzrd.in/bundle/' + t + '@latest'
        return e
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({ defaults: { searchText: '' } })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({
      defaults: {
        searchBox: -10,
        overviewBox: 30,
        headerBox: -1,
        alignmentBody: 0,
        scaleSlider: 50,
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({
      defaults: {
        sequences: !0,
        markers: !0,
        metacell: !1,
        conserv: !1,
        overviewbox: !1,
        seqlogo: !1,
        gapHeader: !1,
        leftHeader: !0,
        scaleslider: !1,
        labels: !0,
        labelName: !0,
        labelId: !0,
        labelPartition: !1,
        labelCheckbox: !1,
        metaGaps: !0,
        metaIdentity: !0,
        metaLinks: !0,
      },
      constructor: function (t, e) {
        return this.calcDefaults(e.model), i.apply(this, arguments)
      },
      initialize: function () {
        return (
          this.listenTo(
            this,
            'change:metaLinks change:metaIdentity change:metaGaps',
            function () {
              return this.trigger('change:metacell')
            },
            this,
          ),
          this.listenTo(
            this,
            'change:labelName change:labelId change:labelPartition change:labelCheckbox',
            function () {
              return this.trigger('change:labels')
            },
            this,
          ),
          this.listenTo(
            this,
            'change:markers change:conserv change:seqlogo change:gapHeader',
            function () {
              return this.trigger('change:header')
            },
            this,
          )
        )
      },
      calcDefaults: function (t) {
        if (t.length > 0) {
          var e = t.at(0),
            n = e.get('ids')
          if (void 0 !== n && 0 === Object.keys(n).length)
            return (this.defaults.metaLinks = !1)
        }
      },
    })
  },
  function (t, e, n) {
    'use strict'
    var r,
      i = n(1).Model
    t.exports = r = i.extend({
      constructor: function (t, e) {
        return (
          this.calcDefaults(e.model),
          i.apply(this, arguments),
          (this.g = e.g),
          this.listenTo(
            this,
            'change:labelIdLength change:labelNameLength change:labelPartLength change:labelCheckLength',
            function () {
              return this.trigger('change:labelWidth', this.getLabelWidth())
            },
            this,
          ),
          this.listenTo(
            this,
            'change:metaLinksWidth change:metaIdentWidth change:metaGapWidth',
            function () {
              return this.trigger('change:metaWidth', this.getMetaWidth())
            },
            this,
          ),
          this
        )
      },
      defaults: {
        alignmentWidth: 'auto',
        alignmentHeight: 225,
        columnWidth: 15,
        rowHeight: 15,
        autoResize: !0,
        labelIdLength: 20,
        labelNameLength: 100,
        labelPartLength: 15,
        labelCheckLength: 15,
        labelFontsize: 13,
        labelLineHeight: '13px',
        markerFontsize: '10px',
        stepSize: 1,
        markerStepSize: 2,
        markerHeight: 20,
        residueFont: '13',
        canvasEventScale: 1,
        minLetterDrawSize: 11,
        boxRectHeight: 2,
        boxRectWidth: 2,
        overviewboxPaddingTop: 10,
        metaGapWidth: 35,
        metaIdentWidth: 40,
        _alignmentScrollLeft: 0,
        _alignmentScrollTop: 0,
      },
      calcDefaults: function (t) {
        return (
          t.getMaxLength() < 200 &&
            t.length < 30 &&
            (this.defaults.boxRectWidth = this.defaults.boxRectHeight = 5),
          this
        )
      },
      getAlignmentWidth: function (t) {
        return this.get('autoResize') && void 0 !== t
          ? this.get('columnWidth') * t
          : void 0 === this.get('alignmentWidth') ||
              'auto' === this.get('alignmentWidth') ||
              0 === this.get('alignmentWidth')
            ? this._adjustWidth()
            : this.get('alignmentWidth')
      },
      setLeftOffset: function (t) {
        var e = t
        return (
          (e = Math.max(0, e)),
          (e -= this.g.columns.calcHiddenColumns(e)),
          this.set('_alignmentScrollLeft', e * this.get('columnWidth'))
        )
      },
      setTopOffset: function (t) {
        for (
          var e = Math.max(0, t - 1), n = 0, r = 0;
          0 < e ? r <= e : r >= e;
          0 < e ? r++ : r--
        )
          n += this.model.at(r).attributes.height || 1
        return this.set('_alignmentScrollTop', n * this.get('rowHeight'))
      },
      getLeftBlockWidth: function () {
        var t = 0
        return (
          this.g.vis.get('labels') && (t += this.getLabelWidth()),
          this.g.vis.get('metacell') && (t += this.getMetaWidth()),
          t
        )
      },
      getMetaWidth: function () {
        var t = 0
        return (
          this.g.vis.get('metaGaps') && (t += this.get('metaGapWidth')),
          this.g.vis.get('metaIdentity') && (t += this.get('metaIdentWidth')),
          this.g.vis.get('metaLinks') && (t += this.get('metaLinksWidth')),
          t
        )
      },
      getLabelWidth: function () {
        var t = 0
        return (
          this.g.vis.get('labelName') && (t += this.get('labelNameLength')),
          this.g.vis.get('labelId') && (t += this.get('labelIdLength')),
          this.g.vis.get('labelPartition') &&
            (t += this.get('labelPartLength')),
          this.g.vis.get('labelCheckbox') &&
            (t += this.get('labelCheckLength')),
          t
        )
      },
      _adjustWidth: function () {
        if (void 0 !== this.el && void 0 !== this.model) {
          if (
            null != this.el.parentNode &&
            0 !== this.el.parentNode.offsetWidth
          )
            var t = this.el.parentNode.offsetWidth
          else t = document.body.clientWidth - 35
          var e = t - this.getLeftBlockWidth(),
            n = this.getAlignmentWidth(
              this.model.getMaxLength() - this.g.columns.get('hidden').length,
            ),
            r = Math.min(e, n)
          return (
            (r =
              Math.floor(r / this.get('columnWidth')) *
              this.get('columnWidth')),
            (this.attributes.alignmentWidth = r)
          )
        }
      },
      autoResize: function () {
        if (this.get('autoResize'))
          return this._adjustWidth(this.el, this.model)
      },
      autoHeight: function (t) {
        var e = this.getMaxAlignmentHeight()
        return (
          void 0 !== t && t > 0 && (e = Math.min(e, t)),
          this.set('alignmentHeight', e)
        )
      },
      setEl: function (t, e) {
        return (this.el = t), (this.model = e)
      },
      _checkScrolling: function (t, e) {
        var n = t[0],
          r = t[1]
        return (
          this.set('_alignmentScrollLeft', n, e),
          this.set('_alignmentScrollTop', r, e)
        )
      },
      getMaxAlignmentHeight: function () {
        var t = 0
        return (
          this.model.each(function (e) {
            return (t += e.attributes.height || 1)
          }),
          t * this.get('rowHeight')
        )
      },
      getMaxAlignmentWidth: function () {
        return this.model.getMaxLength() * this.get('columnWidth')
      },
    })
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(3),
      o = n(51),
      s = r(o),
      a = n(1).Collection,
      u = a.extend({
        model: s['default'],
        constructor: function () {
          return (
            (this.startOnCache = []),
            this.on(
              'all',
              function () {
                return (this.startOnCache = [])
              },
              this,
            ),
            a.apply(this, arguments)
          )
        },
        startOn: function (t) {
          return (
            null == this.startOnCache[t] &&
              (this.startOnCache[t] = this.where({ xStart: t })),
            this.startOnCache[t]
          )
        },
        contains: function (t) {
          return this.reduce(function (e, n) {
            return n || e.contains(t)
          }, !1)
        },
        getFeatureOnRow: function (t, e) {
          return this.filter(function (n) {
            return (
              n.get('row') === t && n.get('xStart') <= e && e <= n.get('xEnd')
            )
          })
        },
        assignRows: function () {
          var t = this.max(function (t) {
              return t.get('xEnd')
            }).attributes.xEnd,
            e = (function () {
              for (
                var e = [], n = 0;
                0 < t ? n <= t : n >= t;
                0 < t ? n++ : n--
              )
                e.push(0)
              return e
            })()
          return (
            this.each(function (t) {
              for (
                var n = 0, r = t.get('xStart'), i = t.get('xEnd'), o = r;
                r < i ? o <= i : o >= i;
                r < i ? o++ : o--
              )
                e[o] > n && (n = e[o]), e[o]++
              return t.set('row', n)
            }),
            (0, i.max)(e)
          )
        },
        getCurrentHeight: function () {
          return (
            this.max(function (t) {
              return t.get('row')
            }).attributes.row + 1
          )
        },
        getMinRows: function () {
          var t = this.max(function (t) {
              return t.get('xEnd')
            }).attributes.xEnd,
            e = (function () {
              for (
                var e = [], n = 0;
                0 < t ? n <= t : n >= t;
                0 < t ? n++ : n--
              )
                e.push(0)
              return e
            })()
          return (
            this.each(function (t) {
              return (function () {
                for (
                  var n = [], r = t.get('xStart'), i = t.get('xEnd'), o = r;
                  r < i ? o <= i : o >= i;
                  r < i ? o++ : o++
                )
                  n.push(e[o]++)
                return n
              })()
            }),
            (0, i.max)(e)
          )
        },
      })
    e['default'] = u
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(37),
      o = r(i),
      s = n(35),
      a = r(s),
      u = n(1).Collection,
      l = u.extend({
        model: o['default'],
        constructor: function (t, e) {
          var n = this
          return (
            u.apply(this, arguments),
            (this.g = e),
            this.on(
              'add reset remove',
              function () {
                return (n.lengthCache = null), n._bindSeqsWithFeatures()
              },
              this,
            ),
            this.on('reset', function () {
              return n._autoSetRefSeq()
            }),
            this._autoSetRefSeq(),
            (this.lengthCache = null),
            (this.features = {}),
            this
          )
        },
        getMaxLength: function () {
          return 0 === this.models.length
            ? 0
            : (null === this.lengthCache &&
                (this.lengthCache = this.max(function (t) {
                  return t.get('seq').length
                }).get('seq').length),
              this.lengthCache)
        },
        prev: function (t, e) {
          var n = this.indexOf(t) - 1
          return n < 0 && e && (n = this.length - 1), this.at(n)
        },
        next: function (t, e) {
          var n = this.indexOf(t) + 1
          return n === this.length && e && (n = 0), this.at(n)
        },
        calcHiddenSeqs: function (t) {
          for (var e = t, n = 0; 0 < e ? n <= e : n >= e; 0 < e ? n++ : n--)
            this.at(n).get('hidden') && e++
          return e - t
        },
        addFeatures: function (t) {
          var e = this
          if (null != t.config) {
            var n = t
            ;(t = t.seqs),
              null != n.config.colors &&
                !(function () {
                  var e = n.config.colors
                  _.each(t, function (t) {
                    return _.each(t, function (t) {
                      if (null != e[t.feature])
                        return (t.fillColor = e[t.feature])
                    })
                  })
                })()
          }
          return (
            _.isEmpty(this.features)
              ? (this.features = t)
              : _.each(t, function (t, n) {
                  return e.features.hasOwnProperty(n)
                    ? (e.features[n] = _.union(e.features[n], t))
                    : (e.features[n] = t)
                }),
            this._bindSeqsWithFeatures()
          )
        },
        _bindSeqWithFeatures: function (t) {
          var e = this.features[t.attributes.name]
          e &&
            ((t.attributes.features = new a['default'](e)),
            t.attributes.features.assignRows(),
            (t.attributes.height =
              t.attributes.features.getCurrentHeight() + 1))
        },
        _bindSeqsWithFeatures: function () {
          var t = this
          return this.each(function (e) {
            return t._bindSeqWithFeatures(e)
          })
        },
        removeAllFeatures: function () {
          return delete this.features
        },
        _autoSetRefSeq: function () {
          if (this.length > 0) return this.at(0).set('ref', !0)
        },
        setRef: function (t) {
          var e = this.get(t)
          return (
            this.each(function (n) {
              if (t.cid)
                return e.cid === n.cid ? n.set('ref', !0) : n.set('ref', !1)
            }),
            this.g.config.set('hasRef', !0),
            this.trigger('change:reference', t)
          )
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(35),
      o = r(i),
      s = n(1).Model,
      a = s.extend({
        defaults: { name: '', id: '', seq: '', height: 1, ref: !1 },
        initialize: function () {
          if ((this.set('grey', []), null == this.get('features')))
            return this.set('features', new o['default']())
        },
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.exporter = e.file = e.seqgen = e.proxy = e.bmath = void 0)
    var i = n(18),
      o = r(i),
      s = n(22),
      a = r(s),
      u = n(40),
      l = r(u),
      c = n(20),
      h = r(c),
      f = n(19),
      d = r(f)
    ;(e.bmath = o['default']),
      (e.proxy = a['default']),
      (e.seqgen = l['default']),
      (e.file = h['default']),
      (e.exporter = d['default'])
  },
  function (t, e) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e['default'] = function (t, e) {
        for (
          var n = e.name || e.url || '',
            r = n.split('.'),
            i = r[r.length - 1] || '',
            o = 0;
          o < s.length;
          o++
        ) {
          var a = s[o](t, i)
          if (a) return a
        }
        return 'unknown'
      })
    var n = function (t, e) {
        return (
          ('CLUSTAL' === t.substring(0, 7) || 'clustal' == e || 'aln' == e) &&
          'clustal'
        )
      },
      r = function (t, e) {
        return (
          ('>' === t.substring(0, 1) || 'fasta' == e || 'fa' == e) && 'fasta'
        )
      },
      i = function (t, e) {
        return ('(' === t.substring(0, 1) || 'nwk' == e) && 'newick'
      },
      o = function (t, e) {
        if (t.length <= 10) return !1
        var n = t.split('\n')
        return n[0].indexOf('gff') >= 0 || e.indexOf('gff') >= 0
          ? 'gff'
          : n[0].indexOf('#') < 0 && 2 === n[0].split('\t').length && 'gff'
      },
      s = [n, r, i, o]
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(18),
      o = r(i),
      s = n(65).seq,
      a = n(49),
      u = {
        _generateSequence: function (t) {
          for (
            var e = '', n = t - 1, r = 0;
            0 < n ? r <= n : r >= n;
            0 < n ? r++ : r--
          )
            e += u.getRandomChar()
          return e
        },
        getDummySequences: function (t, e) {
          var n = []
          ;('undefined' != typeof t && null !== t) ||
            (t = o['default'].getRandomInt(3, 5)),
            ('undefined' != typeof e && null !== e) ||
              (e = o['default'].getRandomInt(50, 200))
          for (var r = 1; 1 < t ? r <= t : r >= t; 1 < t ? r++ : r--)
            n.push(new s(u._generateSequence(e), 'seq' + r, 'r' + r))
          return n
        },
        getRandomChar: function (t) {
          var e = t || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          return e.charAt(Math.floor(Math.random() * e.length))
        },
        genConservedSequences: function (t, e, n) {
          var r = []
          ;('undefined' != typeof t && null !== t) ||
            (t = o['default'].getRandomInt(3, 5)),
            ('undefined' != typeof e && null !== e) ||
              (e = o['default'].getRandomInt(50, 200)),
            (n = n || 'ACDEFGHIKLMNPQRSTVWY---')
          for (var i = 1; 1 < t ? i <= t : i >= t; 1 < t ? i++ : i--)
            r[i - 1] = ''
          for (
            var l = 0.2, c = 1, h = e - 1, f = 0;
            0 < h ? f <= h : f >= h;
            0 < h ? f++ : f--
          ) {
            f % 3 === 0 && (c = o['default'].getRandomInt(50, 100) / 100)
            for (
              var d = [], g = t - 1, p = 0;
              0 < g ? p <= g : p >= g;
              0 < g ? p++ : p--
            ) {
              for (var m = 0, v = void 0; m < 100; ) {
                v = u.getRandomChar(n)
                var _ = a(d)
                if (
                  (_.addSeq(v),
                  m++,
                  Math.abs(c - _.scale(_.conservation())[0]) < l)
                )
                  break
              }
              ;(r[p] += v), d.push(v)
            }
          }
          for (var y = [], b = 1; 1 < t ? b <= t : b >= t; 1 < t ? b++ : b--)
            y.push(new s(r[b - 1], 'seq' + b, 'r' + b))
          return y
        },
      }
    e['default'] = u
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(3),
      o = n(36),
      s =
        (r(o),
        function (t) {
          return (this.msa = t), this
        }),
      a = {
        loadTree: function (t) {
          return this.msa.g['package'].loadPackages(
            ['msa-tnt', 'biojs-io-newick'],
            t,
          )
        },
        showTree: function (t) {
          function e(t) {
            if (null != t.children)
              t.children.forEach(function (t) {
                return e(t)
              })
            else {
              var n = u.filter(function (e) {
                return e.name === t.name
              })[0]
              null != n &&
                ('number' == typeof n.id
                  ? ((n.ids = ['s' + (n.id + 1)]), (t.name = 's' + (n.id + 1)))
                  : (t.name = n.id))
            }
          }
          var r = window.require('biojs-io-newick'),
            i = window.require('msa-tnt')
          if ('string' == typeof t) var o = r.parse_newick(t)
          else o = t
          var s,
            a = new i.selections()
          0 === this.msa.el.getElementsByClassName('tnt_groupDiv').length
            ? ((s = document.createElement('div')), this.msa.el.appendChild(s))
            : ((s =
                this.msa.el.getElementsByClassName('tnt_groupDiv')[0]
                  .parentNode),
              (s.innerHTML = ''))
          var u = this.msa.seqs.toJSON()
          e(o)
          var l = i.app({ seqs: u, tree: o })
          return (
            new i.adapters.tree({ model: l, el: s, sel: a }),
            new i.adapters.msa({ model: l, sel: a, msa: this.msa }),
            l.models.forEach(function (t) {
              return (
                delete t.collection,
                Object.setPrototypeOf(t, n(1).Model.prototype)
              )
            }),
            this.msa.seqs.reset(l.models),
            console.log(this.msa.seqs)
          )
        },
        require: (function (t) {
          function e(e) {
            return t.apply(this, arguments)
          }
          return (
            (e.toString = function () {
              return t.toString()
            }),
            e
          )
        })(function (t) {
          return n(147)(t)
        }),
      }
    ;(0, i.extend)(s.prototype, a), (e['default'] = s)
  },
  function (t, e, n) {
    'use strict'
    var r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            },
      i = n(11),
      o = n(15),
      s = n(10),
      a = function (t, e) {
        var n = t || {}
        e || (e = {}),
          (this.cid = s.uniqueId('c')),
          (this.attributes = {}),
          e.collection && (this.collection = e.collection),
          e.parse && (n = this.parse(n, e) || {}),
          (n = s.defaults({}, n, s.result(this, 'defaults'))),
          this.set(n, e),
          (this.changed = {}),
          this.initialize.apply(this, arguments)
      }
    s.extend(a.prototype, i, {
      changed: null,
      validationError: null,
      idAttribute: 'id',
      initialize: function () {},
      toJSON: function (t) {
        return s.clone(this.attributes)
      },
      sync: function () {
        return Backbone.sync.apply(this, arguments)
      },
      get: function (t) {
        return this.attributes[t]
      },
      escape: function (t) {
        return s.escape(this.get(t))
      },
      has: function (t) {
        return null != this.get(t)
      },
      set: function (t, e, n) {
        var i, o, a, u, l, c, h, f
        if (null == t) return this
        if (
          ('object' === ('undefined' == typeof t ? 'undefined' : r(t))
            ? ((o = t), (n = e))
            : ((o = {})[t] = e),
          n || (n = {}),
          !this._validate(o, n))
        )
          return !1
        ;(a = n.unset),
          (l = n.silent),
          (u = []),
          (c = this._changing),
          (this._changing = !0),
          c ||
            ((this._previousAttributes = s.clone(this.attributes)),
            (this.changed = {})),
          (f = this.attributes),
          (h = this._previousAttributes),
          this.idAttribute in o && (this.id = o[this.idAttribute])
        for (i in o)
          (e = o[i]),
            s.isEqual(f[i], e) || u.push(i),
            s.isEqual(h[i], e) ? delete this.changed[i] : (this.changed[i] = e),
            a ? delete f[i] : (f[i] = e)
        if (!l) {
          u.length && (this._pending = n)
          for (var d = 0, g = u.length; d < g; d++)
            this.trigger('change:' + u[d], this, f[u[d]], n)
        }
        if (c) return this
        if (!l)
          for (; this._pending; )
            (n = this._pending),
              (this._pending = !1),
              this.trigger('change', this, n)
        return (this._pending = !1), (this._changing = !1), this
      },
      unset: function (t, e) {
        return this.set(t, void 0, s.extend({}, e, { unset: !0 }))
      },
      clear: function (t) {
        var e = {}
        for (var n in this.attributes) e[n] = void 0
        return this.set(e, s.extend({}, t, { unset: !0 }))
      },
      hasChanged: function (t) {
        return null == t ? !s.isEmpty(this.changed) : s.has(this.changed, t)
      },
      changedAttributes: function (t) {
        if (!t) return !!this.hasChanged() && s.clone(this.changed)
        var e,
          n = !1,
          r = this._changing ? this._previousAttributes : this.attributes
        for (var i in t) s.isEqual(r[i], (e = t[i])) || ((n || (n = {}))[i] = e)
        return n
      },
      previous: function (t) {
        return null != t && this._previousAttributes
          ? this._previousAttributes[t]
          : null
      },
      previousAttributes: function () {
        return s.clone(this._previousAttributes)
      },
      fetch: function (t) {
        ;(t = t ? s.clone(t) : {}), void 0 === t.parse && (t.parse = !0)
        var e = this,
          n = t.success
        return (
          (t.success = function (r) {
            return (
              !!e.set(e.parse(r, t), t) &&
              (n && n(e, r, t), void e.trigger('sync', e, r, t))
            )
          }),
          wrapError(this, t),
          this.sync('read', this, t)
        )
      },
      save: function (t, e, n) {
        var i,
          o,
          a,
          u = this.attributes
        if (
          (null == t ||
          'object' === ('undefined' == typeof t ? 'undefined' : r(t))
            ? ((i = t), (n = e))
            : ((i = {})[t] = e),
          (n = s.extend({ validate: !0 }, n)),
          i && !n.wait)
        ) {
          if (!this.set(i, n)) return !1
        } else if (!this._validate(i, n)) return !1
        i && n.wait && (this.attributes = s.extend({}, u, i)),
          void 0 === n.parse && (n.parse = !0)
        var l = this,
          c = n.success
        return (
          (n.success = function (t) {
            l.attributes = u
            var e = l.parse(t, n)
            return (
              n.wait && (e = s.extend(i || {}, e)),
              !(s.isObject(e) && !l.set(e, n)) &&
                (c && c(l, t, n), void l.trigger('sync', l, t, n))
            )
          }),
          wrapError(this, n),
          (o = this.isNew() ? 'create' : n.patch ? 'patch' : 'update'),
          'patch' !== o || n.attrs || (n.attrs = i),
          (a = this.sync(o, this, n)),
          i && n.wait && (this.attributes = u),
          a
        )
      },
      destroy: function l(t) {
        t = t ? s.clone(t) : {}
        var e = this,
          n = t.success,
          l = function () {
            e.stopListening(), e.trigger('destroy', e, e.collection, t)
          }
        if (
          ((t.success = function (r) {
            ;(t.wait || e.isNew()) && l(),
              n && n(e, r, t),
              e.isNew() || e.trigger('sync', e, r, t)
          }),
          this.isNew())
        )
          return t.success(), !1
        wrapError(this, t)
        var r = this.sync('delete', this, t)
        return t.wait || l(), r
      },
      url: function () {
        var t =
          s.result(this, 'urlRoot') ||
          s.result(this.collection, 'url') ||
          urlError()
        return this.isNew()
          ? t
          : t.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id)
      },
      parse: function (t, e) {
        return t
      },
      clone: function () {
        return new this.constructor(this.attributes)
      },
      isNew: function () {
        return !this.has(this.idAttribute)
      },
      isValid: function (t) {
        return this._validate({}, s.extend(t || {}, { validate: !0 }))
      },
      _validate: function (t, e) {
        if (!e.validate || !this.validate) return !0
        t = s.extend({}, this.attributes, t)
        var n = (this.validationError = this.validate(t, e) || null)
        return (
          !n ||
          (this.trigger(
            'invalid',
            this,
            n,
            s.extend(e, { validationError: n }),
          ),
          !1)
        )
      },
    })
    var u = [
      'keys',
      'values',
      'pairs',
      'invert',
      'pick',
      'omit',
      'chain',
      'isEmpty',
    ]
    s.each(u, function (t) {
      s[t] &&
        (a.prototype[t] = function () {
          var e = slice.call(arguments)
          return e.unshift(this.attributes), s[t].apply(s, e)
        })
    }),
      (a.extend = o),
      (t.exports = a)
  },
  function (t, e) {
    'use strict'
    function n(t) {
      var e = {}
      return (
        t.split(';').forEach(function (t) {
          var n, r, i
          t.indexOf('=') > 0
            ? ((n = t.split('=')), (r = n[0]), (i = n[1]), (e[r] = i))
            : t.indexOf(' ') > 0 &&
              ((n = t.split(' ')),
              (r = n[0]),
              (i = n[1].replace(/"/g, '')),
              (e[r] = i))
        }),
        e
      )
    }
    function r(t) {
      var e = t.toString(16)
      return 1 === e.length ? '0' + e : e
    }
    function i(t, e, n) {
      return 3 === t.length ? i(t[0], t[1], t[2]) : '#' + r(t) + r(e) + r(n)
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.extractKeys = n),
      (e.rgbToHex = i),
      (e['default'] = { extractKeys: n, rgbToHex: i })
  },
  function (t, e) {
    'use strict'
    t.exports = function (t, e, n) {
      t.beginPath(),
        t.moveTo(0, e),
        t.lineTo(n, e),
        (t.lineWidth = 1),
        (t.strokeStyle = '#999999'),
        t.stroke()
    }
  },
  function (t, e) {
    'use strict'
    t.exports = function (t, e, n, r, i, o, s) {
      ;(t.font = o + 'px Arial'),
        (t.textAlign = s ? 'right' : 'center'),
        (t.fillStyle = '#666666'),
        t.fillText(i, e + r / 2, n)
    }
  },
  function (t, e) {
    'use strict'
    t.exports = function (t, e, n, r, i) {
      ;(i = i || '#999999'),
        t.beginPath(),
        t.moveTo(e, n),
        t.lineTo(e, n + r),
        (t.lineWidth = 1),
        (t.strokeStyle = i),
        t.stroke()
    }
  },
  function (t, e) {
    'use strict'
    function n(t) {
      var e = r.call(t)
      return (
        '[object Function]' === e ||
        ('function' == typeof t && '[object RegExp]' !== e) ||
        ('undefined' != typeof window &&
          (t === window.setTimeout ||
            t === window.alert ||
            t === window.confirm ||
            t === window.prompt))
      )
    }
    t.exports = n
    var r = Object.prototype.toString
  },
  function (t, e) {
    'use strict'
    var n
    t.exports = n = {
      rel: function (t) {
        var e, n, r, i
        return (
          (e = t.offsetX),
          (n = t.offsetY),
          void 0 == e &&
          ((r = i.getBoundingClientRect()),
          (i = t.target || t.srcElement),
          void 0 == e && ((e = t.clientX - r.left), (n = t.clientY - r.top)),
          void 0 == e &&
            ((e = t.pageX - i.offsetLeft), (n = t.pageY - i.offsetTop)),
          void 0 == e)
            ? void console.log(t, 'no mouse event defined. your browser sucks')
            : [e, n]
        )
      },
      abs: function (t) {
        var e, n
        return (
          (e = t.pageX),
          (n = t.pageY),
          void 0 == e && ((e = t.layerX), (n = t.layerY)),
          void 0 == e && ((e = t.clientX), (n = t.clientY)),
          void 0 == e && ((e = t.x), (n = t.y)),
          [e, n]
        )
      },
      wheelDelta: function (t) {
        var e
        return (
          (e = [t.deltaX, t.deltaY]),
          void 0 == e[0] && t.mozMovementX && (e = [0, t.mozMovementX]),
          isNaN(e[0]) && (e[0] = 0),
          isNaN(e[1]) && (e[1] = 0),
          e
        )
      },
    }
  },
  function (t, e, n) {
    'use strict'
    var r = n(10),
      i = function s(t, e) {
        if (!this || this.constructor !== s) return new s(t)
        if (void 0 === t || 'string' == typeof t)
          throw new TypeError('you need to give the seq stat an array')
        this.resetSeqs(t),
          (this.alphabetSize = 4),
          (this._useBackground = !1),
          (this.useGaps = !1),
          (this.ignoredChars = ['-', '*']),
          r.extend(this, e)
      }
    ;(i.prototype.addSeq = function (t) {
      this.seqs.push(t), this._reset()
    }),
      (i.prototype.removeSeq = function (t) {
        'number' == typeof t
          ? this.seqs.splice(t, 1)
          : r.each(
              this.seqs,
              function (e, n) {
                t === e && this.seqs.splice(n, 1)
              }.bind(this),
            ),
          this._reset()
      }),
      (i.prototype.addSeqs = function (t) {
        t.forEach(
          function (t) {
            this.addSeq(t)
          }.bind(this),
        )
      }),
      (i.prototype.resetSeqs = function (t) {
        if (((this.seqs = []), (!t) instanceof Array || '_byId' in t)) {
          this.mseqs = t
          var e = function () {
            var t = this.mseqs.pluck('seq')
            this.resetSeqs(t)
          }
          t.on('add change reset ', e, this), e.call(this)
        } else this.addSeqs(t), this._reset(), this.trigger('reset')
      })
    var o = ['consensus', 'frequency', 'maxLength', 'ic', 'gaps']
    ;(i.prototype._reset = function () {
      for (var t = 0; t < o.length; t++) this['_' + o[t]] = void 0
      ;(this._identity = void 0), (this._background = void 0)
    }),
      (i.prototype.setBackground = function (t) {
        ;(this._useBackground = t), this._reset()
      }),
      (i.prototype.useBackground = function () {
        this.setBackground(!0)
      }),
      (i.prototype.setDNA = function () {
        this.alphabetSize = 4
      }),
      (i.prototype.setProtein = function () {
        this.alphabetSize = 20
      }),
      o.forEach(function (t) {
        i.prototype[t] = function () {
          return (
            void 0 === this['_' + t] && (this['_' + t] = this[t + 'Calc']()),
            this['_' + t]
          )
        }
      }),
      (i.prototype.identity = function (t) {
        var e
        return (
          (void 0 === this._identity || t) &&
            ((e = this.identityCalc(t)), (this._identity = void 0)),
          this._identity || e
        )
      }),
      (i.prototype.background = function () {
        return void 0 !== this.bg
          ? this.bg
          : (void 0 === this._background && this.backgroundCalc(),
            this._background)
      }),
      (i.prototype.frequencyCalc = function (t) {
        var e, n
        ;(e = new Array(this.maxLength())), (n = new Array(this.seqs.length))
        var i = this.ignoredChars
        return (
          void 0 !== t && t.all && (i = []),
          r.each(this.seqs, function (t) {
            r.each(t, function (t, r) {
              i.indexOf(t) >= 0 ||
                (void 0 === e[r] && (e[r] = {}),
                void 0 === e[r][t] && (e[r][t] = 0),
                e[r][t]++,
                void 0 === n[r] && (n[r] = 0),
                n[r]++)
            })
          }),
          r.each(e, function (t, i) {
            return r.each(t, function (t, r) {
              return (e[i][r] = t / n[i])
            })
          }),
          (this._frequency = e),
          e
        )
      }),
      (i.prototype.backgroundCalc = function () {
        var t = {},
          e = 0
        return (
          r.each(this.seqs, function (n) {
            r.each(n, function (n) {
              return void 0 === t[n] && (t[n] = 0), t[n]++, e++
            })
          }),
          (t = r.mapValues(t, function (t) {
            return t / e
          })),
          (this._background = t),
          t
        )
      }),
      (i.prototype.icCalc = function () {
        var t = this.frequency()
        if (this._useBackground) var e = this.background()
        var n = this.ignoredChars,
          i = this._useBackground,
          o = r.map(t, function (t) {
            return r.reduce(
              t,
              function (t, r, o) {
                return n.indexOf(o) >= 0
                  ? t
                  : (i && (r /= e[o]), t - r * (Math.log(r) / Math.log(2)))
              },
              0,
            )
          })
        return (this._ic = o), o
      }),
      (i.prototype.conservation = function (t) {
        var e = this.ic(),
          n = this.gaps(),
          i = this
        t = t || this.alphabetSize
        var o = Math.log(t) / Math.log(2),
          s = 0
        return r.map(e, function (t) {
          var e = o - t
          return i.useGaps && (e *= 1 - n[s++]), e
        })
      }),
      (i.prototype.conservResidue = function (t) {
        var e,
          n = t ? t.alphabetSize : void 0,
          i = this.ignoredChars
        e =
          void 0 !== t && t.scaled
            ? this.scale(this.conservation(n))
            : this.conservation(n)
        var o,
          s = this.frequency()
        return r.map(s, function (t, n) {
          o = r.reject(r.keys(t), function (t) {
            return i.indexOf(t) >= 0
          })
          var s = {}
          return (
            r.each(o, function (r) {
              s[r] = t[r] * e[n]
            }),
            s
          )
        })
      }),
      (i.prototype.conservResidue2 = function (t) {
        var e = this.frequency(),
          n = this.conservation(t),
          i = this.background()
        return r.map(e, function (t, o) {
          return r.map(
            t,
            function (t) {
              var s = r.reduce(
                e[o],
                function (t, e) {
                  return t + e / i[o]
                },
                0,
              )
              return (t / i[o] / s) * n[o]
            },
            0,
          )
        })
      }),
      (i.prototype.scale = function (t, e) {
        e = e || this.alphabetSize
        var n = Math.log(e) / Math.log(2)
        return r.map(t, function (t) {
          return t / n
        })
      }),
      (i.prototype.maxLengthCalc = function () {
        return 0 === this.seqs.length
          ? 0
          : r.max(this.seqs, function (t) {
              return t.length
            }).length
      }),
      (i.prototype.consensusCalc = function () {
        var t = new Array(this.maxLength())
        return (
          r.each(this.seqs, function (e) {
            r.each(e, function (e, n) {
              void 0 === t[n] && (t[n] = {}),
                void 0 === t[n][e] && (t[n][e] = 0),
                t[n][e]++
            })
          }),
          (this._consensus = r.reduce(
            t,
            function (t, e) {
              var n
              return (
                (n = r.keys(e)),
                (t += r.max(n, function (t) {
                  return e[t]
                }))
              )
            },
            '',
          )),
          this._consensus
        )
      }),
      (i.prototype.identityCalc = function (t) {
        var e = t || this.consensus()
        return (
          (this._identity = this.seqs.map(function (t) {
            for (var n = 0, r = 0, i = 0; i < t.length; i++)
              '-' !== t[i] && '-' !== e[i] && (r++, t[i] === e[i] && n++)
            return n / r
          })),
          this._identity
        )
      }),
      (i.prototype.gapsCalc = function () {
        var t = this.maxLength()
        if (t <= 1 || 'undefined' == typeof t) return []
        var e = new Array(this.maxLength())
        return (
          r.each(this.seqs, function (t) {
            r.each(t, function (t, n) {
              void 0 === e[n] && (e[n] = { g: 0, t: 0 }),
                (t = '-' === t ? 'g' : 't'),
                e[n][t]++
            })
          }),
          (this._gaps = r.map(e, function (t) {
            return t.g / (t.g + t.t)
          })),
          this._gaps
        )
      }),
      r.mixin({
        mapValues: function (t, e) {
          return r.object(r.keys(t), r.map(t, e))
        },
      }),
      n(16).mixin(i.prototype),
      (t.exports = i)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(9)
    Object.defineProperty(e, 'SelectionManager', {
      enumerable: !0,
      get: function () {
        return r.SelectionManager
      },
    })
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(1).Model,
      i = r.extend({
        defaults: {
          xStart: -1,
          xEnd: -1,
          height: -1,
          text: '',
          fillColor: 'red',
          fillOpacity: 0.5,
          type: 'rectangle',
          borderSize: 1,
          borderColor: 'black',
          borderOpacity: 0.5,
          validate: !0,
          row: 0,
        },
        initialize: function (t) {
          if (
            (null != t.start && this.set('xStart', t.start - 1),
            null != t.end && this.set('xEnd', t.end - 1),
            null != t.attributes &&
              (null != t.attributes.Name && this.set('text', t.attributes.Name),
              null != t.attributes.Color &&
                this.set('fillColor', t.attributes.Color)),
            this.attributes.xEnd < this.attributes.xStart &&
              console.warn('invalid feature range for', this.attributes),
            !_.isNumber(this.attributes.xStart) ||
              !_.isNumber(this.attributes.xEnd))
          )
            return (
              console.warn('please provide numeric feature ranges', t),
              this.set('xStart', parseInt(this.attributes.xStart)),
              this.set('xEnd', parseInt(this.attributes.xEnd))
            )
        },
        validate: function () {
          if (isNaN(this.attributes.xStart || isNaN(this.attributes.xEnd)))
            return 'features need integer start and end.'
        },
        contains: function (t) {
          return this.attributes.xStart <= t && t <= this.attributes.xEnd
        },
      })
    e['default'] = i
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(37)
    Object.defineProperty(e, 'seq', {
      enumerable: !0,
      get: function () {
        return r(i)['default']
      },
    })
    var o = n(36)
    Object.defineProperty(e, 'seqcol', {
      enumerable: !0,
      get: function () {
        return r(o)['default']
      },
    })
    var s = n(51)
    Object.defineProperty(e, 'feature', {
      enumerable: !0,
      get: function () {
        return r(s)['default']
      },
    })
    var a = n(35)
    Object.defineProperty(e, 'featurecol', {
      enumerable: !0,
      get: function () {
        return r(a)['default']
      },
    })
  },
  function (t, e) {
    ;(function (e) {
      t.exports = e
    }).call(e, {})
  },
  function (t, e, n) {
    'use strict'
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol
              ? 'symbol'
              : typeof t
          }
    !(function () {
      function n() {
        return {
          keys:
            Object.keys ||
            function (t) {
              if (
                ('object' !== ('undefined' == typeof t ? 'undefined' : r(t)) &&
                  'function' != typeof t) ||
                null === t
              )
                throw new TypeError('keys() called on a non-object')
              var e,
                n = []
              for (e in t) t.hasOwnProperty(e) && (n[n.length] = e)
              return n
            },
          uniqueId: function (t) {
            var e = ++u + ''
            return t ? t + e : e
          },
          has: function (t, e) {
            return s.call(t, e)
          },
          each: function (t, e, n) {
            if (null != t)
              if (o && t.forEach === o) t.forEach(e, n)
              else if (t.length === +t.length)
                for (var r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t)
              else for (var s in t) this.has(t, s) && e.call(n, t[s], s, t)
          },
          once: function (t) {
            var e,
              n = !1
            return function () {
              return n
                ? e
                : ((n = !0), (e = t.apply(this, arguments)), (t = null), e)
            }
          },
        }
      }
      var i,
        o = Array.prototype.forEach,
        s = Object.prototype.hasOwnProperty,
        a = Array.prototype.slice,
        u = 0,
        l = n()
      i = {
        on: function (t, e, n) {
          return h(this, 'on', t, [e, n]) && e
            ? (this._events || (this._events = {}),
              (this._events[t] || (this._events[t] = [])).push({
                callback: e,
                context: n,
                ctx: n || this,
              }),
              this)
            : this
        },
        once: function g(t, e, n) {
          if (!h(this, 'once', t, [e, n]) || !e) return this
          var r = this,
            g = l.once(function () {
              r.off(t, g), e.apply(this, arguments)
            })
          return (g._callback = e), this.on(t, g, n)
        },
        off: function (t, e, n) {
          var r, i, o, s, a, u, c, f
          if (!this._events || !h(this, 'off', t, [e, n])) return this
          if (!t && !e && !n) return (this._events = {}), this
          for (
            s = t ? [t] : l.keys(this._events), a = 0, u = s.length;
            a < u;
            a++
          )
            if (((t = s[a]), (o = this._events[t]))) {
              if (((this._events[t] = r = []), e || n))
                for (c = 0, f = o.length; c < f; c++)
                  (i = o[c]),
                    ((e && e !== i.callback && e !== i.callback._callback) ||
                      (n && n !== i.context)) &&
                      r.push(i)
              r.length || delete this._events[t]
            }
          return this
        },
        trigger: function (t) {
          if (!this._events) return this
          var e = a.call(arguments, 1)
          if (!h(this, 'trigger', t, e)) return this
          var n = this._events[t],
            r = this._events.all
          return n && f(n, e), r && f(r, arguments), this
        },
        stopListening: function (t, e, n) {
          var i = this._listeners
          if (!i) return this
          var o = !e && !n
          'object' === ('undefined' == typeof e ? 'undefined' : r(e)) &&
            (n = this),
            t && ((i = {})[t._listenerId] = t)
          for (var s in i) i[s].off(e, n, this), o && delete this._listeners[s]
          return this
        },
      }
      var c = /\s+/,
        h = function (t, e, n, i) {
          if (!n) return !0
          if ('object' === ('undefined' == typeof n ? 'undefined' : r(n))) {
            for (var o in n) t[e].apply(t, [o, n[o]].concat(i))
            return !1
          }
          if (c.test(n)) {
            for (var s = n.split(c), a = 0, u = s.length; a < u; a++)
              t[e].apply(t, [s[a]].concat(i))
            return !1
          }
          return !0
        },
        f = function (t, e) {
          var n,
            r = -1,
            i = t.length,
            o = e[0],
            s = e[1],
            a = e[2]
          switch (e.length) {
            case 0:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx)
              return
            case 1:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o)
              return
            case 2:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, s)
              return
            case 3:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, s, a)
              return
            default:
              for (; ++r < i; ) (n = t[r]).callback.apply(n.ctx, e)
          }
        },
        d = { listenTo: 'on', listenToOnce: 'once' }
      l.each(d, function (t, e) {
        i[e] = function (e, n, i) {
          return (
            ((this._listeners || (this._listeners = {}))[
              e._listenerId || (e._listenerId = l.uniqueId('l'))
            ] = e),
            'object' === ('undefined' == typeof n ? 'undefined' : r(n)) &&
              (i = this),
            e[t](n, i, this),
            this
          )
        }
      }),
        (i.bind = i.on),
        (i.unbind = i.off),
        (i.mixin = function (t) {
          var e = [
            'on',
            'once',
            'off',
            'trigger',
            'stopListening',
            'listenTo',
            'listenToOnce',
            'bind',
            'unbind',
          ]
          return (
            l.each(
              e,
              function (e) {
                t[e] = this[e]
              },
              this,
            ),
            t
          )
        }),
        'undefined' != typeof t && t.exports && (e = t.exports = i),
        (e.BackboneEvents = i)
    })(void 0)
  },
  function (t, e, n) {
    'use strict'
    var r = n(11),
      i = n(15),
      o = n(10),
      s = n(42),
      a = [],
      u = a.slice,
      l = function (t, e) {
        e || (e = {}),
          e.model && (this.model = e.model),
          void 0 !== e.comparator && (this.comparator = e.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          t && this.reset(t, o.extend({ silent: !0 }, e))
      },
      c = { add: !0, remove: !0, merge: !0 },
      h = { add: !0, remove: !1 }
    o.extend(l.prototype, r, {
      model: s,
      initialize: function () {},
      toJSON: function (t) {
        return this.map(function (e) {
          return e.toJSON(t)
        })
      },
      sync: function () {
        return Backbone.sync.apply(this, arguments)
      },
      add: function (t, e) {
        return this.set(t, o.extend({ merge: !1 }, e, h))
      },
      remove: function (t, e) {
        var n = !o.isArray(t)
        ;(t = n ? [t] : o.clone(t)), e || (e = {})
        for (var r = 0, i = t.length; r < i; r++) {
          var s = (t[r] = this.get(t[r]))
          if (s) {
            var a = this.modelId(s.attributes)
            null != a && delete this._byId[a], delete this._byId[s.cid]
            var u = this.indexOf(s)
            this.models.splice(u, 1),
              this.length--,
              e.silent || ((e.index = u), s.trigger('remove', s, this, e)),
              this._removeReference(s, e)
          }
        }
        return n ? t[0] : t
      },
      set: function (t, e) {
        ;(e = o.defaults({}, e, c)), e.parse && (t = this.parse(t, e))
        var n = !o.isArray(t)
        t = n ? (t ? [t] : []) : t.slice()
        for (
          var r,
            i,
            s,
            a,
            u,
            l = e.at,
            h = this.comparator && null == l && e.sort !== !1,
            f = o.isString(this.comparator) ? this.comparator : null,
            d = [],
            g = [],
            p = {},
            m = e.add,
            v = e.merge,
            _ = e.remove,
            y = !(h || !m || !_) && [],
            b = 0,
            x = t.length;
          b < x;
          b++
        ) {
          if (((s = t[b]), (a = this.get(s))))
            _ && (p[a.cid] = !0),
              v &&
                s !== a &&
                ((s = this._isModel(s) ? s.attributes : s),
                e.parse && (s = a.parse(s, e)),
                a.set(s, e),
                h && !u && a.hasChanged(f) && (u = !0)),
              (t[b] = a)
          else if (m) {
            if (((i = t[b] = this._prepareModel(s, e)), !i)) continue
            d.push(i), this._addReference(i, e)
          }
          ;(i = a || i),
            i &&
              ((r = this.modelId(i.attributes)),
              !y || (!i.isNew() && p[r]) || y.push(i),
              (p[r] = !0))
        }
        if (_) {
          for (var b = 0, x = this.length; b < x; b++)
            p[(i = this.models[b]).cid] || g.push(i)
          g.length && this.remove(g, e)
        }
        if (d.length || (y && y.length))
          if ((h && (u = !0), (this.length += d.length), null != l))
            for (var b = 0, x = d.length; b < x; b++)
              this.models.splice(l + b, 0, d[b])
          else {
            y && (this.models.length = 0)
            for (var w = y || d, b = 0, x = w.length; b < x; b++)
              this.models.push(w[b])
          }
        if ((u && this.sort({ silent: !0 }), !e.silent)) {
          for (
            var S = null != l ? o.clone(e) : e, b = 0, x = d.length;
            b < x;
            b++
          )
            null != l && (S.index = l + b),
              (i = d[b]).trigger('add', i, this, S)
          ;(u || (y && y.length)) && this.trigger('sort', this, e)
        }
        return n ? t[0] : t
      },
      reset: function (t, e) {
        e || (e = {})
        for (var n = 0, r = this.models.length; n < r; n++)
          this._removeReference(this.models[n], e)
        return (
          (e.previousModels = this.models),
          this._reset(),
          (t = this.add(t, o.extend({ silent: !0 }, e))),
          e.silent || this.trigger('reset', this, e),
          t
        )
      },
      push: function (t, e) {
        return this.add(t, o.extend({ at: this.length }, e))
      },
      pop: function (t) {
        var e = this.at(this.length - 1)
        return this.remove(e, t), e
      },
      unshift: function (t, e) {
        return this.add(t, o.extend({ at: 0 }, e))
      },
      shift: function (t) {
        var e = this.at(0)
        return this.remove(e, t), e
      },
      slice: function () {
        return u.apply(this.models, arguments)
      },
      get: function (t) {
        if (null != t) {
          var e = this.modelId(this._isModel(t) ? t.attributes : t)
          return this._byId[t] || this._byId[e] || this._byId[t.cid]
        }
      },
      at: function (t) {
        return t < 0 && (t += this.length), this.models[t]
      },
      where: function (t, e) {
        return o.isEmpty(t)
          ? e
            ? void 0
            : []
          : this[e ? 'find' : 'filter'](function (e) {
              for (var n in t) if (t[n] !== e.get(n)) return !1
              return !0
            })
      },
      findWhere: function (t) {
        return this.where(t, !0)
      },
      sort: function (t) {
        if (!this.comparator)
          throw new Error('Cannot sort a set without a comparator')
        return (
          t || (t = {}),
          o.isString(this.comparator) || 1 === this.comparator.length
            ? (this.models = this.sortBy(this.comparator, this))
            : this.models.sort(o.bind(this.comparator, this)),
          t.silent || this.trigger('sort', this, t),
          this
        )
      },
      pluck: function (t) {
        return o.invoke(this.models, 'get', t)
      },
      fetch: function (t) {
        ;(t = t ? o.clone(t) : {}), void 0 === t.parse && (t.parse = !0)
        var e = t.success,
          n = this
        return (
          (t.success = function (r) {
            n[t.reset ? 'reset' : 'set'](r, t),
              e && e(n, r, t),
              n.trigger('sync', n, r, t)
          }),
          wrapError(this, t),
          this.sync('read', this, t)
        )
      },
      create: function (t, e) {
        if (((e = e ? o.clone(e) : {}), !(t = this._prepareModel(t, e))))
          return !1
        e.wait || this.add(t, e)
        var n = this,
          r = e.success
        return (
          (e.success = function (t, i) {
            e.wait && n.add(t, e), r && r(t, i, e)
          }),
          t.save(null, e),
          t
        )
      },
      parse: function (t, e) {
        return t
      },
      clone: function () {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator,
        })
      },
      modelId: function (t) {
        return t[this.model.prototype.idAttribute || 'id']
      },
      _reset: function () {
        ;(this.length = 0), (this.models = []), (this._byId = {})
      },
      _prepareModel: function (t, e) {
        if (this._isModel(t)) return t.collection || (t.collection = this), t
        ;(e = e ? o.clone(e) : {}), (e.collection = this)
        var n = new this.model(t, e)
        return n.validationError
          ? (this.trigger('invalid', this, n.validationError, e), !1)
          : n
      },
      _isModel: function (t) {
        return t instanceof s
      },
      _addReference: function (t, e) {
        this._byId[t.cid] = t
        var n = this.modelId(t.attributes)
        null != n && (this._byId[n] = t), t.on('all', this._onModelEvent, this)
      },
      _removeReference: function (t, e) {
        this === t.collection && delete t.collection,
          t.off('all', this._onModelEvent, this)
      },
      _onModelEvent: function (t, e, n, r) {
        if (('add' !== t && 'remove' !== t) || n === this) {
          if (('destroy' === t && this.remove(e, r), 'change' === t)) {
            var i = this.modelId(e.previousAttributes()),
              o = this.modelId(e.attributes)
            i !== o &&
              (null != i && delete this._byId[i],
              null != o && (this._byId[o] = e))
          }
          this.trigger.apply(this, arguments)
        }
      },
    })
    var f = [
      'forEach',
      'each',
      'map',
      'collect',
      'reduce',
      'foldl',
      'inject',
      'reduceRight',
      'foldr',
      'find',
      'detect',
      'filter',
      'select',
      'reject',
      'every',
      'all',
      'some',
      'any',
      'include',
      'contains',
      'invoke',
      'max',
      'min',
      'toArray',
      'size',
      'first',
      'head',
      'take',
      'initial',
      'rest',
      'tail',
      'drop',
      'last',
      'without',
      'difference',
      'indexOf',
      'shuffle',
      'lastIndexOf',
      'isEmpty',
      'chain',
      'sample',
      'partition',
    ]
    o.each(f, function (t) {
      o[t] &&
        (l.prototype[t] = function () {
          var e = u.call(arguments)
          return e.unshift(this.models), o[t].apply(o, e)
        })
    })
    var d = ['groupBy', 'countBy', 'sortBy', 'indexBy']
    o.each(d, function (t) {
      o[t] &&
        (l.prototype[t] = function (e, n) {
          var r = o.isFunction(e)
            ? e
            : function (t) {
                return t.get(e)
              }
          return o[t](this.models, r, n)
        })
    }),
      (l.extend = i),
      (t.exports = l)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(13),
      o = r(i),
      s = n(25),
      a = r(s),
      u = void 0
    ;(e['default'] = u =
      {
        parse: function (t) {
          var e = []
          if ('[object Array]' === Object.prototype.toString.call(t)) var n = t
          else var n = t.split('\n')
          if (n[0].slice(0, 6) === !1) throw new Error('Invalid CLUSTAL Header')
          for (var r = 0, i = 1, o = 0; r < n.length; ) {
            r++
            var s = n[r]
            if (null != s && 0 !== s.length)
              if (0 !== s.trim().length) {
                if (!a['default'].contains(s, '*')) {
                  1 === i && ((o = 0), (i = 0))
                  var u = /^(?:\s*)(\S+)(?:\s+)(\S+)(?:\s*)(\d*)(?:\s*|$)/g,
                    l = u.exec(s)
                  if (null != l) {
                    var c = l[1].trim(),
                      h = l[2].trim()
                    if (o >= e.length) {
                      var f = a['default'].getMeta(c.trim())
                      c = f.name
                      var d = new a['default'].model(h, c, o)
                      ;(d.ids = f.ids || {}), (d.details = f.details || {})
                      var g = Object.keys(d.ids)
                      g.length > 0 && (d.id = d.ids[g[0]]), e.push(d)
                    } else e[o].seq += h
                    o++
                  } else console.log('parse error', s)
                }
              } else i = 1
            else i = 1
          }
          return e
        },
      }),
      o['default'].mixin(u)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(25),
      o = r(i),
      s = n(64),
      a = r(s),
      u = n(13),
      l = r(u),
      c = void 0
    ;(e['default'] = c =
      {
        getMeta: o['default'].getMeta,
        extend: function (t) {
          var e = (0, a['default'])(c)
          return (c.getMeta = t), e
        },
        parse: function (t) {
          var e = []
          if (!t || 0 === t.length) return []
          '[object Array]' !== Object.prototype.toString.call(t) &&
            (t = t.split('\n'))
          for (var n = c, r = n.getMeta, i = 0; i < t.length; i++) {
            var s = t[i]
            if ('>' === s[0] || ';' === s[0]) {
              var a = s.slice(1).trim(),
                u = r(a.trim())
              a = u.name
              var l = u.id || e.length,
                h = new o['default'].model('', u.name, l)
              ;(h.ids = u.ids || {}), (h.details = u.details || {}), e.push(h)
            } else h.seq += s
          }
          return e
        },
        write: function (t, e) {
          for (var n = '', r = 0; r < t.length; r++) {
            var i = t[r]
            null != e && (i = e(i)),
              (n += '>' + i.name + '\n'),
              (n += o['default'].splitNChars(i.seq, 80).join('\n')),
              (n += '\n')
          }
          return n
        },
      }),
      l['default'].mixin(c)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(13),
      o = r(i),
      s = n(43),
      a = r(s),
      u = n(59),
      l = r(u),
      c = function () {}
    o['default'].mixin(c),
      (e['default'] = c),
      (c.parseLines = function (t) {
        var e = t.split('\n'),
          n = {},
          r = []
        n.type = c._guessType(e)
        var i = 0
        if ('jalview' === n.type) {
          var o = l['default'].readHeader(e)
          ;(i = o.offset), (n.colors = o.colors), (r = o.features)
        }
        for (var s = i; s < e.length; s++) {
          var a = e[s]
          0 !== a.length &&
            '#' !== a[0] &&
            ((a = c.parseLine(a)), void 0 !== a && r.push(a))
        }
        return { features: r, config: n }
      }),
      (c._guessType = function (t) {
        return '##gff-version 3' === t[0].substring(0, 15)
          ? 'gff3'
          : t[0].indexOf('#') < 0 && 2 === t[0].split('\t').length
            ? 'jalview'
            : 'gff3'
      }),
      (c.parseSeqs = c.parse =
        function (t) {
          var e = c.parseLines(t),
            n = {}
          return (
            e.features.forEach(function (t) {
              var e = t.seqname
              void 0 === n[e] && (n[e] = []), delete t.seqname, n[e].push(t)
            }),
            delete e.features,
            (e.seqs = n),
            e
          )
        }),
      (c.parseLine = function (t) {
        var e = {},
          n = t.split(/\s+/)
        if (1 !== n.length) {
          ;(e.seqname = n[0]),
            (e.source = n[1]),
            (e.feature = n[2]),
            (e.start = parseInt(n[3])),
            (e.end = parseInt(n[4])),
            (e.score = n[5]),
            (e.strand = n[6]),
            (e.frame = n[7])
          var r = n.slice(8).join(' ')
          return (
            Object.keys(e).forEach(function (t) {
              'string' == typeof e[t] && (e[t] = e[t].trim()),
                '.' === e[t] && (e[t] = void 0)
            }),
            e.score && (e.score = parseFloat(e.score)),
            e.frame && (e.frame = parseInt(e.frame)),
            (e.attributes = a['default'].extractKeys(r)),
            e
          )
        }
      }),
      (c.exportLine = function (t) {
        var e = Object.keys(t.attributes)
            .map(function (e) {
              return e + '=' + t.attributes[e]
            })
            .join(';'),
          n = [
            t.seqname,
            t.source,
            t.feature,
            t.start,
            t.end,
            t.score,
            t.strand,
            t.frame,
            e,
          ]
        return (
          (n = n.map(function (t) {
            return void 0 === t ? '.' : t
          })),
          n.join('\t')
        )
      }),
      (c.exportLines = function (t) {
        return '##gff-version 3\n' + t.map(c.exportLine).join('\n')
      }),
      (c.exportSeqs = c['export'] =
        function (t) {
          var e = [],
            n = function (t) {
              ;(t.seqname = r), e.push(t)
            }
          for (var r in t) t[r].forEach(n)
          return c.exportLines(e)
        }),
      (c.utils = a['default'])
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(43),
      i = {}
    ;(e['default'] = i),
      (i.readHeader = function (t) {
        for (var e, n = {}, r = 0, o = []; r < t.length; r++) {
          var s = t[r]
          if (s.indexOf('#') >= 0) break
          var a = s.split(/\t/),
            u = a[0].trim()
          if ('GFF' === u) break
          if (2 === a.length)
            if ('startgroup' === u) e = a[1].trim()
            else {
              if ('endgroup' === u) {
                e = ''
                continue
              }
              n[a[0]] = i.parseColor(a[1])
            }
          else if (a.length >= 5) {
            var l = i.parseLine(a)
            e && (l.attributes.Parent = e), o.push(l)
          }
        }
        return { offset: r, colors: n, features: o }
      }),
      (i.parseColor = function (t) {
        return t.indexOf(',') >= 0
          ? (0, r.rgbToHex)(
              t.split(',').map(function (t) {
                return parseInt(t)
              }),
            )
          : 6 === t.length && parseInt(t.charAt(0), 16) <= 16 && 'bisque' !== t
            ? '#' + t
            : t
      }),
      (i.parseLine = function (t) {
        var e = { attributes: {} }
        return (
          (e.attributes.Name = t[0].trim()),
          (e.seqname = t[1].trim()),
          (e.start = parseInt(t[3])),
          (e.end = parseInt(t[4])),
          (e.feature = t[5].trim()),
          'ID_NOT_SPECIFIED' === e.seqname && (e.seqname = t[2].trim()),
          e
        )
      })
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    var i = n(13),
      o = r(i),
      s = function a(t) {
        return this.constructor != a
          ? new a(t)
          : ((this.matrix = {}),
            (this.parsingOrder = []),
            void 0 != t && this.parse(t),
            this)
      }
    o['default'].mixin(s),
      (t.exports = s),
      (s.prototype.parse = function (t) {
        return (
          t.split('\n').forEach(
            function (t) {
              this.parseLine(t)
            }.bind(this),
          ),
          this.buildMatrix(),
          this.matrix
        )
      }),
      (s.read = function (t, e) {
        return new s().read(t, e)
      }),
      (s.parse = function (t) {
        return new s().parse(t)
      }),
      (s.prototype.parseLine = function (t) {
        var e = t.charAt(0)
        if ('#' !== e) {
          this.parsingOrder.push(e)
          for (
            var n = t.substring(1),
              r = n
                .split(/\s+/)
                .filter(function (t) {
                  return t.length > 0
                })
                .map(function (t) {
                  return parseInt(t)
                }),
              i = {},
              o = 0;
            o < r.length;
            o++
          )
            i[this.parsingOrder[o]] = r[o]
          this.matrix[e] = i
        }
      }),
      (s.prototype['export'] = function () {
        return s['export'](this.matrix)
      }),
      (s['export'] = function (t) {
        var e = [],
          n = 1
        'matrix' in t && (t = t.matrix)
        for (var r in t) {
          for (var i = r, o = Object.keys(t[r]), s = 0; s < n; s++)
            i += '\t' + t[r][o[s]]
          e.push(i), n++
        }
        return e.join('\n')
      }),
      (s.prototype.buildMatrix = function () {
        for (var t = this.parsingOrder.length - 1; t >= 0; t--) {
          var e = this.parsingOrder[t],
            n = this.matrix[e]
          for (var r in n) this.matrix[r][e] = n[r]
        }
      })
  },
  function (t, e) {
    'use strict'
    function n(t) {
      for (
        var e = [], n = {}, i = t.split(/\s*(;|\(|\)|\[|\]|,|:|=)\s*/), o = 0;
        o < i.length;
        o++
      ) {
        var s = i[o],
          a = void 0
        switch (s) {
          case '(':
            ;(a = {}), (n.children = [a]), e.push(n), (n = a)
            break
          case ',':
            ;(a = {}), e[e.length - 1].children.push(a), (n = a)
            break
          case ')':
            n = e.pop()
            break
          case ':':
            break
          default:
            var u = i[o - 1]
            if (')' == u || '(' == u || ',' == u) n.name = s
            else if (':' == u)
              'undefined' == typeof s ? 'undefined' : r(s),
                isNaN(s) || (n.branch_length = parseFloat(s))
            else if ('=' == u) {
              var l = i[o - 2]
              switch (l) {
                case 'D':
                  n.duplication = s
                  break
                case 'G':
                  n.gene_id = s
                  break
                case 'T':
                  n.taxon_id = s
              }
            }
        }
      }
      return n
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol
              ? 'symbol'
              : typeof t
          }
    e['default'] = n
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseNhx = e.parse = void 0)
    var i = n(63),
      o = r(i),
      s = n(61),
      a = r(s),
      u = {}
    ;(u.parse = o['default']),
      (u.parseNhx = a['default']),
      (e['default'] = u),
      (e.parse = o['default']),
      (e.parseNhx = a['default'])
  },
  function (t, e) {
    'use strict'
    function n(t) {
      for (
        var e = [], n = {}, r = t.split(/\s*(;|\(|\)|,|:)\s*/), i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i],
          s = void 0
        switch (o) {
          case '(':
            ;(s = {}), (n.children = [s]), e.push(n), (n = s)
            break
          case ',':
            ;(s = {}), e[e.length - 1].children.push(s), (n = s)
            break
          case ')':
            n = e.pop()
            break
          case ':':
            break
          default:
            var a = r[i - 1]
            ')' == a || '(' == a || ',' == a
              ? (n.name = o)
              : ':' == a && (n.branch_length = parseFloat(o))
        }
      }
      return n
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), (e['default'] = n)
  },
  function (t, e) {
    'use strict'
    function n(t, e, n) {
      for (
        var r = [], i = t < e, o = n ? (i ? e + 1 : e - 1) : e, s = t;
        i ? s < o : s > o;
        i ? s++ : s--
      )
        r.push(s)
      return r
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e['default'] = function (t) {
        t = t || {}
        for (var e = n(0, arguments.length, !1), r = 0; r < e.length; r++) {
          var i = e[r]
          if (arguments[i])
            for (var o = 0; o < arguments[i].length; o++) {
              var s = arguments[i][o]
              arguments[i].hasOwnProperty(s) && (t[s] = arguments[i][s])
            }
        }
        return t
      })
  },
  function (t, e, n) {
    'use strict'
    t.exports.seq = n(66)
  },
  function (t, e) {
    'use strict'
    t.exports = function (t, e, n) {
      ;(this.seq = t), (this.name = e), (this.id = n), (this.meta = {})
    }
  },
  function (t, e, n) {
    'use strict'
    t.exports = n(73)
  },
  function (t, e) {
    'use strict'
    t.exports = {
      render_x_axis_label: function () {
        var t = 'Model Position'
        this.display_ali_map && (t = 'Alignment Column'),
          this.called_on.find('.logo_xaxis').remove(),
          this.called_on.prepend(
            '<div class="logo_xaxis" class="centered" style="margin-left:40px"><p class="xaxis_text" style="width:10em;margin:1em auto">' +
              t +
              '</p></div>',
          )
      },
      render_y_axis_label: function () {
        this.dom_element
          .parent()
          .before(
            '<canvas class="logo_yaxis" height="' +
              this.options.height +
              '" width="55"></canvas>',
          )
        var t = this.called_on.find('.logo_yaxis'),
          e =
            (Math.abs(this.data.max_height),
            isNaN(this.data.min_height_obs)
              ? 0
              : parseInt(this.data.min_height_obs, 10),
            null),
          n = 'Information Content (bits)'
        ;(e = t[0].getContext('2d')),
          e.beginPath(),
          e.moveTo(55, 1),
          e.lineTo(40, 1),
          e.moveTo(55, this.info_content_height),
          e.lineTo(40, this.info_content_height),
          e.moveTo(55, this.info_content_height / 2),
          e.lineTo(40, this.info_content_height / 2),
          (e.lineWidth = 1),
          (e.strokeStyle = '#666666'),
          e.stroke(),
          (e.fillStyle = '#666666'),
          (e.textAlign = 'right'),
          (e.font = 'bold 10px Arial'),
          (e.textBaseline = 'top'),
          e.fillText(parseFloat(this.data.max_height).toFixed(1), 38, 0),
          (e.textBaseline = 'middle'),
          e.fillText(
            parseFloat(this.data.max_height / 2).toFixed(1),
            38,
            this.info_content_height / 2,
          ),
          e.fillText('0', 38, this.info_content_height),
          'score' === this.data.height_calc && (n = 'Score (bits)'),
          e.save(),
          e.translate(5, this.height / 2 - 20),
          e.rotate(-Math.PI / 2),
          (e.textAlign = 'center'),
          (e.font = 'normal 12px Arial'),
          e.fillText(n, 1, 0),
          e.restore(),
          e.fillText('occupancy', 55, this.info_content_height + 7),
          this.show_inserts &&
            (e.fillText('ins. prob.', 50, 280),
            e.fillText('ins. len.', 46, 296))
      },
    }
  },
  function (t, e) {
    'use strict'
    var n = null
    t.exports = function () {
      if (!n) {
        var t = document.createElement('canvas')
        n = !(!t.getContext || !t.getContext('2d'))
      }
      return n
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#FF9966',
      C: '#009999',
      D: '#FF0000',
      E: '#CC0033',
      F: '#00FF00',
      G: '#f2f20c',
      H: '#660033',
      I: '#CC9933',
      K: '#663300',
      L: '#FF9933',
      M: '#CC99CC',
      N: '#336666',
      P: '#0099FF',
      Q: '#6666CC',
      R: '#990000',
      S: '#0000FF',
      T: '#00FFFF',
      V: '#FFCC33',
      W: '#66CC66',
      Y: '#006600',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#cbf751',
      C: '#5ec0cc',
      G: '#ffdf59',
      T: '#b51f16',
      U: '#b51f16',
    }
  },
  function (t, e, n) {
    'use strict'
    var r = n(5)
    t.exports = function (t, e, n) {
      t
        .find('.logo_settings_switch, .logo_settings .close')
        .on('click', function (t) {
          t.preventDefault(), r('.logo_settings').toggle()
        }),
        t.find('.logo_reset').on('click', function (t) {
          t.preventDefault(), e.changeZoom({ target: e.default_zoom })
        }),
        t.find('.logo_change').on('click', function (t) {
          t.preventDefault()
        }),
        t.find('.logo_zoomin').on('click', function (t) {
          t.preventDefault(), e.changeZoom({ distance: 0.1, direction: '+' })
        }),
        t.find('.logo_zoomout').on('click', function (t) {
          t.preventDefault(), e.changeZoom({ distance: 0.1, direction: '-' })
        }),
        t.find('.logo_scale').on('change', function (t) {
          e.toggleScale(this.value)
        }),
        t.find('.logo_color').on('change', function (t) {
          e.toggleColorscheme(this.value)
        }),
        t.find('.logo_ali_map').on('change', function (t) {
          e.toggleAliMap(this.value)
        }),
        t.find('.logo_position').on('change', function () {
          this.value.match(/^\d+$/m) && e.scrollToColumn(this.value, 1)
        }),
        n.on('dblclick', function (n) {
          console.log('dblclick', e),
            (offset = e.logo_graphic.offset()),
            (x = parseInt(n.pageX - offset.left, 10)),
            (window_position = n.pageX - t.parent().offset().left),
            (col = e.columnFromCoordinates(x)),
            console.log('col', col),
            (current = e.zoom),
            current < 1
              ? e.changeZoom({
                  target: 1,
                  offset: window_position,
                  column: col,
                })
              : e.changeZoom({
                  target: 0.3,
                  offset: window_position,
                  column: col,
                })
        }),
        r(document).on(t.attr('id') + '.scrolledTo', function (t, n, r, i) {
          e.render({ target: n })
        }),
        r(document).on('keydown', function (t) {
          t.ctrlKey ||
            ((61 !== t.which && 107 !== t.which) ||
              ((zoom += 0.1), e.changeZoom({ distance: 0.1, direction: '+' })),
            (109 !== t.which && 0 !== t.which) ||
              ((zoom -= 0.1), e.changeZoom({ distance: 0.1, direction: '-' })))
        })
    }
  },
  function (t, e, n) {
    'use strict'
    _ = n(10)
    var r = n(69),
      i = n(76),
      o = n(75),
      s = n(2),
      a = n(68),
      u = n(72),
      l = n(74),
      c = n(5)
    t.exports = s.extend({
      options: {
        xaxis: !0,
        yaxis: !0,
        height: 300,
        column_width: 34,
        debug: !0,
        scale_height_enabled: !0,
        scaled_max: !0,
        zoom_buttons: !0,
        colorscheme: 'default',
        data: void 0,
        start: 1,
        end: void 0,
        zoom: 0.4,
        colors: void 0,
        divider: !1,
        show_probs: !1,
        divider_step: 5,
        show_divider: !1,
        border: !1,
        settings: !1,
        scroller: !0,
        positionMarker: !0,
      },
      loadDefault: function (t) {
        ;(this.data = t.data),
          (this.display_ali_map = 0),
          (this.alphabet = t.data.alphabet || 'dna'),
          (this.start = t.start),
          (this.zoom = parseFloat(t.zoom) || 0.4),
          (this.default_zoom = this.zoom),
          (this.column_width = t.column_width),
          (this.height = t.height),
          (this.canvas_width = 5e3),
          (this.scale_height_enabled = t.scale_height_enabled),
          (this.scrollme = null),
          (this.previous_target = 0),
          (this.rendered = []),
          (this.previous_zoom = 0),
          void 0 == this.data.max_height &&
            (this.data.max_height = this.calcMaxHeight(this.data.heightArr)),
          (this.data.insert_probs && this.data.delete_probs) ||
            (this.options.show_probs = !1),
          t.scaled_max
            ? (this.data.max_height =
                t.data.max_height_obs || this.data.max_height || 2)
            : (this.data.max_height =
                t.data.max_height_theory || this.data.max_height || 2),
          t.colors
            ? this.changeColors(t.colors)
            : 'aa' === this.alphabet
              ? ((this.aa_colors = n(70)), this.changeColors(this.aa_colors))
              : ((this.dna_colors = n(71)), this.changeColors(this.dna_colors))
      },
      initialize: function (t) {
        if (!r())
          return void (this.el.textContent =
            "Your browser doesn't support canvas.")
        void 0 == t.data && (this.el.textContent = 'No data added.'),
          _.extend(this.options, t)
        var e = this.options
        if (
          (this.loadDefault(e),
          this.options.show_probs
            ? this.data.processing &&
              /^observed|weighted/.test(this.data.processing)
              ? ((this.show_inserts = 0),
                (this.info_content_height = this.height - 14))
              : ((this.show_inserts = 1),
                (this.info_content_height = this.height - 44))
            : (this.info_content_height = this.height),
          (this.$el = c(this.el)),
          this.initDivs(),
          this.options.settings)
        ) {
          var n = l(this, e)
          this.$el.append(n)
        }
        u(this.$el, this, this.logo_graphic)
      },
      initDivs: function () {
        var t = h('div')
        ;(t.className = 'logo_graphic'), (this.logo_graphic = c(t))
        var e = h('div')
        if (
          ((e.className = 'logo_container'),
          (e.style.height = this.height),
          (this.container = c(e)),
          this.container.append(t),
          this.$el.append(e),
          this.options.divider)
        ) {
          var n = h('div')
          ;(n.className = 'logo_divider'), this.$el.append(n)
        }
        ;(this.dom_element = c(t)),
          (this.called_on = this.$el),
          this.options.xaxis && a.render_x_axis_label.call(this),
          this.options.yaxis
            ? a.render_y_axis_label.call(this)
            : (this.container[0].style.marginLeft = '0px')
      },
      render: function () {
        return i.call(this), this
      },
      changeColors: function (t) {
        ;(this.colors = t),
          void 0 != t && void 0 != t.type && (this.colorscheme = 'dynamic'),
          this.buildAlphabet()
      },
      buildAlphabet: function () {
        this.letters = {}
        var t = this.colors
        if ('dynamic' == this.colorscheme) {
          var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
          ;(t = {}),
            e.forEach(function (e) {
              t[e] = ''
            })
        }
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var r = { color: t[n] }
            this.letters[n] = new o(n, r)
          }
      },
      toggleColorscheme: function (t) {
        var e = this.currentColumn()
        t
          ? 'default' === t
            ? (this.colorscheme = 'default')
            : (this.colorscheme = 'consensus')
          : 'default' === this.colorscheme
            ? (this.colorscheme = 'consensus')
            : (this.colorscheme = 'default'),
          (this.rendered = []),
          this.scrollme.reflow(),
          this.scrollToColumn(e + 1),
          this.scrollToColumn(e)
      },
      toggleScale: function (t) {
        var e = this.currentColumn()
        t
          ? 'obs' === t
            ? (this.data.max_height = this.data.max_height_obs)
            : (this.data.max_height = this.data.max_height_theory)
          : this.data.max_height === this.data.max_height_obs
            ? (this.data.max_height = this.data.max_height_theory)
            : (this.data.max_height = this.data.max_height_obs),
          (this.rendered = []),
          this.logoYAxis && this.logoYAxis.remove(),
          a.render_y_axis_label.call(this),
          this.scrollme.reflow(),
          this.scrollToColumn(e + 1),
          this.scrollToColumn(e)
      },
      toggleAliMap: function (t) {
        var e = this.currentColumn()
        t
          ? 'model' === t
            ? (this.display_ali_map = 0)
            : (this.display_ali_map = 1)
          : 1 === this.display_ali_map
            ? (this.display_ali_map = 0)
            : (this.display_ali_map = 1),
          a.render_x_axis_label(this),
          (this.rendered = []),
          this.scrollme.reflow(),
          this.scrollToColumn(e + 1),
          this.scrollToColumn(e)
      },
      currentColumn: function () {
        var t = this.scrollme.scroller.getValues().left,
          e = this.column_width * this.zoom,
          n = t / e,
          r = this.container.width() / e / 2
        return Math.ceil(n + r)
      },
      changeZoom: function (t) {
        var e = 0.3,
          n = null
        if (
          (t.target
            ? (e = t.target)
            : t.distance &&
              ((e = (parseFloat(this.zoom) - parseFloat(t.distance)).toFixed(
                1,
              )),
              '+' === t.direction &&
                (e = (parseFloat(this.zoom) + parseFloat(t.distance)).toFixed(
                  1,
                ))),
          e > 1 ? (e = 1) : e < 0.1 && (e = 0.1),
          (n = (this.logo_graphic.width() * e) / this.zoom),
          n > this.container.width())
        )
          if (t.column) {
            ;(this.zoom = e),
              this.render({ zoom: this.zoom }),
              this.scrollme.reflow()
            var r = this.coordinatesFromColumn(t.column)
            this.scrollme.scroller.scrollTo(r - t.offset)
          } else {
            var i = this.currentColumn()
            ;(this.zoom = e),
              this.render({ zoom: this.zoom }),
              this.scrollme.reflow(),
              this.scrollToColumn(i)
          }
        return this.zoom
      },
      columnFromCoordinates: function (t) {
        return Math.ceil(t / (this.column_width * this.zoom))
      },
      coordinatesFromColumn: function (t) {
        return (
          (t - 1) * (this.column_width * this.zoom) +
          (this.column_width * this.zoom) / 2
        )
      },
      scrollToColumn: function (t, e) {
        var n = this.logo_container.width() / 2,
          r = this.coordinatesFromColumn(t)
        this.scrollme.scroller.scrollTo(r - n, 0, e)
      },
      calcMaxHeight: function (t) {
        return t.reduce(function (t, e) {
          var n = 0
          for (var r in e) n += e[r]
          return n > t ? n : t
        }, 0)
      },
    })
    var h = function (t) {
      return document.createElement(t)
    }
  },
  function (t, e, n) {
    'use strict'
    var r = n(5)
    t.exports = function (t, e) {
      var n = r(
          '<form class="logo_form"><fieldset><label for="position">Column number</label><input type="text" name="position" class="logo_position"></input><button class="button logo_change">Go</button></fieldset></form>',
        ),
        i = r('<div class="logo_settings"></div>')
      if (
        (i.append('<span class="close">x</span>'),
        t.scale_height_enabled &&
          t.data.max_height_obs < t.data.max_height_theory)
      ) {
        var o = '',
          s = '',
          a = '',
          u = ''
        t.data.max_height_obs === t.data.max_height
          ? (o = 'checked')
          : (s = 'checked')
      }
      var l =
        '<fieldset><legend>Scale</legend><label><input type="radio" name="scale" class="logo_scale" value="obs" ' +
        o +
        '/>Maximum Observed ' +
        u +
        '</label></br><label><input type="radio" name="scale" class="logo_scale" value="theory" ' +
        s +
        '/>Maximum Theoretical ' +
        a +
        '</label></fieldset>'
      if (
        (i.append(l),
        'score' !== t.data.height_calc &&
          'aa' === t.data.alphabet &&
          t.data.probs_arr)
      ) {
        var c = null,
          h = null,
          f = '',
          d = ''
        'default' === t.colorscheme ? (c = 'checked') : (h = 'checked'),
          e.help &&
            ((f =
              '<a class="help" href="/help#colors_default" title="Each letter receives its own color."><span aria-hidden="true" data-icon="?"></span><span class="reader-text">help</span></a>'),
            (d =
              '<a class="help" href="/help#colors_consensus" title="Letters are colored as in Clustalx and Jalview, with colors depending on composition of the column."><span aria-hidden="true" data-icon="?"></span><span class="reader-text">help</span></a>'))
        var g =
          '<fieldset><legend>Color Scheme</legend><label><input type="radio" name="color" class="logo_color" value="default" ' +
          c +
          '/>Default ' +
          f +
          '</label></br><label><input type="radio" name="color" class="logo_color" value="consensus" ' +
          h +
          '/>Consensus Colors ' +
          d +
          '</label></fieldset>'
        i.append(g)
      }
      if (t.data.ali_map) {
        var p = null,
          m = null,
          v = '',
          _ = ''
        0 === t.display_ali_map ? (p = 'checked') : (m = 'checked'),
          e.help &&
            ((v =
              '<a class="help" href="/help#coords_model" title="The coordinates along the top of the plot show the model position."><span aria-hidden="true" data-icon="?"></span><span class="reader-text">help</span></a>'),
            (_ =
              '<a class="help" href="/help#coords_ali" title="The coordinates along the top of the plot show the column in the alignment associated with the model"><span aria-hidden="true" data-icon="?"></span><span class="reader-text">help</span></a>'))
        var y =
          '<fieldset><legend>Coordinates</legend><label><input type="radio" name="coords" class="logo_ali_map" value="model" ' +
          p +
          '/>Model ' +
          v +
          '</label></br><label><input type="radio" name="coords" class="logo_ali_map" value="alignment" ' +
          m +
          '/>Alignment ' +
          _ +
          '</label></fieldset>'
        i.append(y)
      }
      var b = r('<div class="logo_controls"></div>')
      return (
        t.zoom_enabled &&
          b.append(
            '<button class="logo_zoomout button">-</button><button class="logo_zoomin button">+</button>',
          ),
        i.children().length > 0 &&
          (b.append(
            '<button class="logo_settings_switch button">Settings</button>',
          ),
          b.append(i)),
        n.append(b),
        n
      )
    }
  },
  function (t, e) {
    'use strict'
    t.exports = function (t, e) {
      ;(e = e || {}),
        (this.value = t),
        (this.width = parseInt(e.width, 10) || 100),
        'W' === this.value && (this.width += (30 * this.width) / 100),
        (this.height = parseInt(e.height, 10) || 100),
        (this.color = e.color || '#000000'),
        (this.fontSize = e.fontSize || 138),
        (this.scaled = function () {}),
        (this.draw = function (t, e, n, r, i, o) {
          var s = e / this.height,
            a = n / this.width,
            u = t.font
          t.transform(a, 0, 0, s, r, i),
            (t.fillStyle = o || this.color),
            (t.textAlign = 'center'),
            (t.font = 'bold ' + this.fontSize + 'px Arial'),
            t.fillText(this.value, 0, 0),
            t.setTransform(1, 0, 0, 1, 0, 0),
            (t.fillStyle = '#000000'),
            (t.font = u)
        })
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t, e, n, r, i) {
      var o = s(t).find('#canv_' + r)
      return (
        o.length ||
          (s(t).append(
            '<canvas class="canvas_logo" id="canv_' +
              r +
              '"  height="' +
              e +
              '" width="' +
              n +
              '" style="left:' +
              i * r +
              'px"></canvas>',
          ),
          (o = s(t).find('#canv_' + r))),
        s(o).attr('width', n).attr('height', e),
        o[0]
      )
    }
    var i = n(78),
      o = n(77),
      s = n(5)
    t.exports = function (t) {
      if (this.data) {
        t = t || {}
        var e = t.zoom || this.zoom,
          n = t.target || 1,
          s = (t.scaled || null, this.dom_element.parent().attr('width')),
          a = 1,
          u = null,
          l = null,
          c = 0
        if (
          ((this.previous_target = n),
          t.start && (this.start = t.start),
          t.end && (this.end = t.end),
          e <= 0.1 ? (e = 0.1) : e >= 1 && (e = 1),
          (this.zoom = e),
          (u = this.end || this.data.heightArr.length),
          (l = this.start || 1),
          (u = u > this.data.heightArr.length ? this.data.heightArr.length : u),
          (u = u < l ? l : u),
          (l = l > u ? u : l),
          (l = l > 1 ? l : 1),
          (this.y = this.height - 20),
          (this.max_width = this.column_width * (u - l + 1)),
          s > this.max_width && ((e = 1), (this.zoom_enabled = !1)),
          (this.zoom = e),
          (this.zoomed_column = this.column_width * e),
          (this.total_width = this.zoomed_column * (u - l + 1)),
          e < 1)
        )
          for (
            ;
            this.total_width < s &&
            ((this.zoom += 0.1),
            (this.zoomed_column = this.column_width * this.zoom),
            (this.total_width = this.zoomed_column * (u - l + 1)),
            (this.zoom_enabled = !1),
            !(e >= 1));

          );
        n > this.total_width && (n = this.total_width),
          this.dom_element
            .attr({ width: this.total_width + 'px' })
            .css({ width: this.total_width + 'px' }),
          (this.canvas_width = this.total_width)
        var h = Math.ceil(this.total_width / this.canvas_width)
        for (
          this.columns_per_canvas = Math.ceil(
            this.canvas_width / this.zoomed_column,
          ),
            this.previous_zoom !== this.zoom &&
              (this.dom_element.find('canvas').remove(),
              (this.previous_zoom = this.zoom),
              (this.rendered = [])),
            this.canvases = [],
            this.contexts = [],
            c = 0;
          c < h;
          c++
        ) {
          var f = this.columns_per_canvas * c + l,
            d = f + this.columns_per_canvas - 1
          d > u && (d = u)
          var g = (d - f + 1) * this.zoomed_column
          g > a && (a = g)
          var p = a * c,
            m = p + g
          if (n < m + m / 2 && n > p - p / 2)
            if (
              ((this.canvases[c] = r(this.dom_element, this.height, g, c, a)),
              (this.contexts[c] = this.canvases[c].getContext('2d')),
              this.contexts[c].setTransform(1, 0, 0, 1, 0, 0),
              this.contexts[c].clearRect(0, 0, g, this.height),
              (this.contexts[c].fillStyle = '#ffffff'),
              this.contexts[c].fillRect(0, 0, m, this.height),
              this.zoomed_column > 12)
            ) {
              var v = parseInt(10 * e, 10)
              ;(v = v > 10 ? 10 : v),
                this.debug && o.call(this, f, d, c, 1),
                i.call(this, f, d, c, v)
            } else o.call(this, f, d, c)
        }
        !this.scrollme &&
          this.options.scroller &&
          (this.scrollme = new EasyScroller(this.dom_element[0], {
            scrollingX: 1,
            scrollingY: 0,
            eventTarget: this.called_on,
          })),
          1 !== n && this.scrollme.reflow()
      }
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t, e, n, r, i, o, s, a) {
      var u = '#ffffff'
      a
        ? (i > 0.1
            ? (u = '#d7301f')
            : i > 0.05
              ? (u = '#fc8d59')
              : i > 0.03 && (u = '#fdcc8a'),
          (t.fillStyle = u),
          t.fillRect(e, n + 15, r, 10),
          (u = '#ffffff'),
          o > 9
            ? (u = '#d7301f')
            : o > 7
              ? (u = '#fc8d59')
              : o > 4 && (u = '#fdcc8a'),
          (t.fillStyle = u),
          t.fillRect(e, n + 30, r, 10))
        : (n += 30),
        (u = '#ffffff'),
        s < 0.75
          ? (u = '#2171b5')
          : s < 0.85
            ? (u = '#6baed6')
            : s < 0.95 && (u = '#bdd7e7'),
        (t.fillStyle = u),
        t.fillRect(e, n, r, 10)
    }
    var i = n(44),
      o = n(46),
      s = n(45)
    t.exports = function (t, e, n, a) {
      var u = 0,
        l = t,
        c = null,
        h = 0,
        f = Math.abs(this.data.max_height),
        d = Math.abs(this.data.min_height_obs),
        g = f + d,
        p = Math.round((100 * Math.abs(this.data.max_height)) / g),
        m = Math.round((this.info_content_height * p) / 100),
        v = (this.info_content_height - m, 10)
      for (h = t; h <= e; h++) {
        if (this.data.mmline && 1 === this.data.mmline[h - 1])
          (this.contexts[n].fillStyle = '#cccccc'),
            this.contexts[n].fillRect(
              u,
              10,
              this.zoomed_column,
              this.height - 40,
            )
        else {
          var _ = this.data.heightArr[h - 1],
            y = 0,
            b = (_.length, 0)
          for (var b in _) {
            var x = [b, _[b]]
            if (x[1] > 0.01) {
              var w = parseFloat(x[1]) / this.data.max_height,
                S = u,
                k = (this.info_content_height - 2) * w,
                C = this.info_content_height - 2 - y - k,
                z = null
              ;(z =
                'dynamic' === this.colorscheme
                  ? this.colors.getColor(x[0], { pos: h - 1 })
                  : 'consensus' === this.colorscheme
                    ? this.cmap[h - 1][x[0]] || '#7a7a7a'
                    : this.colors[x[0]]),
                a
                  ? ((this.contexts[n].strokeStyle = z),
                    this.contexts[n].strokeRect(S, C, this.zoomed_column, k))
                  : ((this.contexts[n].fillStyle = z),
                    this.contexts[n].fillRect(S, C, this.zoomed_column, k)),
                (y += k)
            }
          }
        }
        this.zoom < 0.2 ? (v = 20) : this.zoom < 0.3 && (v = 10),
          this.options.positionMarker &&
            h % v === 0 &&
            (this.options.show_probs &&
              o(
                this.contexts[n],
                u + this.zoomed_column,
                this.height - 30,
                parseFloat(this.height),
                '#dddddd',
              ),
            o(this.contexts[n], u + this.zoomed_column, 0, 5),
            (c = this.display_ali_map ? this.data.ali_map[h - 1] : l),
            s(this.contexts[n], u - 2, 10, this.zoomed_column, c, 10, !0)),
          this.options.show_probs &&
            r(
              this.contexts[n],
              u,
              this.height - 42,
              this.zoomed_column,
              this.data.insert_probs[h - 1],
              this.data.insert_lengths[h - 1],
              this.data.delete_probs[h - 1],
              this.show_inserts,
            ),
          this.options.show_probs &&
            (this.show_inserts
              ? i(this.contexts[n], this.height - 45, this.total_width)
              : i(this.contexts[n], this.height - 15, this.total_width)),
          this.options.border && i(this.contexts[n], 0, this.total_width),
          (u += this.zoomed_column),
          l++
      }
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t, e, n, r, o, s, a) {
      var u = n - 4,
        l = '#ffffff',
        c = '#555555'
      a && (u = n - 35),
        o < 0.75
          ? ((l = '#2171b5'), (c = '#ffffff'))
          : o < 0.85
            ? (l = '#6baed6')
            : o < 0.95 && (l = '#bdd7e7'),
        i(t, e, u, o, s, r, l, c)
    }
    function i(t, e, n, r, i, o, s, a) {
      ;(t.font = i + 'px Arial'),
        (t.fillStyle = s),
        t.fillRect(e, n - 10, o, 14),
        (t.textAlign = 'center'),
        (t.fillStyle = a),
        t.fillText(r, e + o / 2, n)
    }
    function o(t, e) {
      var n = e.ralign ? e.x + t.zoomed_column : e.x,
        r = e.ralign ? e.x + 2 : e.x
      l(t.contexts[e.context_num], n, t.height - 30, -30 - t.height, '#dddddd'),
        l(t.contexts[e.context_num], n, 0, 5),
        c(
          t.contexts[e.context_num],
          r,
          10,
          t.zoomed_column,
          e.column_num,
          e.fontsize,
          e.ralign,
        )
    }
    function s(t, e, n, r, o, s) {
      var a = n - 20,
        u = '#ffffff',
        c = '#555555'
      o > 0.1
        ? ((u = '#d7301f'), (c = '#ffffff'))
        : o > 0.05
          ? (u = '#fc8d59')
          : o > 0.03 && (u = '#fdcc8a'),
        i(t, e, a, o, s, r, u, c),
        o > 0.03 && l(t, e + r, n - 30, -30 - n, u)
    }
    function a(t, e, n, r, o, s) {
      var a = '#ffffff',
        u = '#555555'
      o > 9
        ? ((a = '#d7301f'), (u = '#ffffff'))
        : o > 7
          ? (a = '#fc8d59')
          : o > 4 && (a = '#fdcc8a'),
        i(t, e, n, o, s, r, a, u)
    }
    var u = n(44),
      l = n(46),
      c = n(45)
    t.exports = function (t, e, n, i) {
      var c = 0,
        h = t,
        f = null,
        d = 0,
        g = Math.abs(this.data.max_height),
        p = isNaN(this.data.min_height_obs)
          ? 0
          : parseInt(this.data.min_height_obs, 10),
        m = g + Math.abs(p),
        v = Math.round((100 * Math.abs(this.data.max_height)) / m),
        _ = Math.round((this.info_content_height * v) / 100),
        y = this.info_content_height - _
      for (
        _ / this.info_content_height,
          y / this.info_content_height,
          e + 3 <= this.end && (e += 3),
          d = t;
        d <= e;
        d++
      ) {
        if (this.data.mmline && 1 === this.data.mmline[d - 1])
          (this.contexts[n].fillStyle = '#cccccc'),
            this.contexts[n].fillRect(
              c,
              10,
              this.zoomed_column,
              this.height - 40,
            )
        else {
          var b = this.data.heightArr[d - 1],
            x = []
          if (b) {
            var w = 0,
              S = (b.length, 0),
              k = null
            for (var S in b) {
              var C = b[S],
                z = [S, C],
                j = c + this.zoomed_column / 2,
                M = null
              if (z[1] > 0.01) {
                M = parseFloat(z[1]) / this.data.max_height
                var E = this.info_content_height - 2 - w,
                  O = (this.info_content_height - 2) * M
                ;(x[S] = [O, this.zoomed_column, j, E]), (w += O)
              }
            }
            for (var S in b)
              x[S] &&
                this.letters[S] &&
                ((k =
                  'dynamic' === this.colorscheme
                    ? this.colors.getColor(S, { pos: d - 1 })
                    : 'consensus' === this.colorscheme
                      ? this.cmap[d - 1][S] || '#7a7a7a'
                      : null),
                this.letters[S].draw(
                  this.contexts[n],
                  x[S][0],
                  x[S][1],
                  x[S][2],
                  x[S][3],
                  k,
                ))
          }
        }
        ;(f = this.display_ali_map ? this.data.ali_map[d - 1] : h),
          this.options.show_divider &&
            (this.zoom < 0.7
              ? d % this.options.divider_step === 0 &&
                o(this, {
                  context_num: n,
                  x: c,
                  fontsize: 10,
                  column_num: f,
                  ralign: !0,
                })
              : o(this, { context_num: n, x: c, fontsize: i, column_num: f })),
          this.options.show_probs &&
            (r(
              this.contexts[n],
              c,
              this.height,
              this.zoomed_column,
              this.data.delete_probs[d - 1],
              i,
              this.show_inserts,
            ),
            l(this.contexts[n], c, this.height - 15, 5),
            this.show_inserts &&
              (s(
                this.contexts[n],
                c,
                this.height,
                this.zoomed_column,
                this.data.insert_probs[d - 1],
                i,
              ),
              a(
                this.contexts[n],
                c,
                this.height - 5,
                this.zoomed_column,
                this.data.insert_lengths[d - 1],
                i,
              ),
              l(this.contexts[n], c, this.height - 45, 5),
              l(this.contexts[n], c, this.height - 30, 5))),
          (c += this.zoomed_column),
          h++
      }
      this.options.show_probs &&
        (this.show_inserts &&
          (u(this.contexts[n], this.height - 30, this.total_width),
          u(this.contexts[n], this.height - 45, this.total_width)),
        u(this.contexts[n], this.height - 15, this.total_width)),
        this.options.border && u(this.contexts[n], 0, this.total_width)
    }
  },
  function (t, e) {
    'use strict'
    var n = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype,
      r =
        window.Blob &&
        (function () {
          try {
            return Boolean(new Blob())
          } catch (t) {
            return !1
          }
        })(),
      i =
        r &&
        window.Uint8Array &&
        (function () {
          try {
            return 100 === new Blob([new Uint8Array(100)]).size
          } catch (t) {
            return !1
          }
        })(),
      o =
        window.BlobBuilder ||
        window.WebKitBlobBuilder ||
        window.MozBlobBuilder ||
        window.MSBlobBuilder,
      s =
        (r || o) &&
        window.atob &&
        window.ArrayBuffer &&
        window.Uint8Array &&
        function (t) {
          var e, n, s, a, u, l
          for (
            e =
              t.split(',')[0].indexOf('base64') >= 0
                ? atob(t.split(',')[1])
                : decodeURIComponent(t.split(',')[1]),
              n = new ArrayBuffer(e.length),
              s = new Uint8Array(n),
              a = 0;
            a < e.length;
            a += 1
          )
            s[a] = e.charCodeAt(a)
          return (
            (u = t.split(',')[0].split(':')[1].split(';')[0]),
            r
              ? new Blob([i ? s : n], { type: u })
              : ((l = new o()), l.append(n), l.getBlob(u))
          )
        }
    window.HTMLCanvasElement &&
      !n.toBlob &&
      (n.mozGetAsFile
        ? (n.toBlob = function (t, e, r) {
            t(
              r && n.toDataURL && s
                ? s(this.toDataURL(e, r))
                : this.mozGetAsFile('blob', e),
            )
          })
        : n.toDataURL &&
          s &&
          (n.toBlob = function (t, e, n) {
            t(s(this.toDataURL(e, n)))
          })),
      (t.exports = s)
  },
  function (t, e, n) {
    ;(function (t) {
      'use strict' /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
      var e =
          e ||
          ('undefined' != typeof navigator &&
            navigator.msSaveOrOpenBlob &&
            navigator.msSaveOrOpenBlob.bind(navigator)) ||
          (function (t) {
            if (
              'undefined' == typeof navigator ||
              !/MSIE [1-9]\./.test(navigator.userAgent)
            ) {
              var e = t.document,
                n = function () {
                  return t.URL || t.webkitURL || t
                },
                r = e.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                i = !t.externalHost && 'download' in r,
                o = function (n) {
                  var r = e.createEvent('MouseEvents')
                  r.initMouseEvent(
                    'click',
                    !0,
                    !1,
                    t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null,
                  ),
                    n.dispatchEvent(r)
                },
                s = t.webkitRequestFileSystem,
                a = t.requestFileSystem || s || t.mozRequestFileSystem,
                u = function (e) {
                  ;(t.setImmediate || t.setTimeout)(function () {
                    throw e
                  }, 0)
                },
                l = 'application/octet-stream',
                c = 0,
                h = [],
                f = function () {
                  for (var t = h.length; t--; ) {
                    var e = h[t]
                    'string' == typeof e ? n().revokeObjectURL(e) : e.remove()
                  }
                  h.length = 0
                },
                d = function (t, e, n) {
                  e = [].concat(e)
                  for (var r = e.length; r--; ) {
                    var i = t['on' + e[r]]
                    if ('function' == typeof i)
                      try {
                        i.call(t, n || t)
                      } catch (o) {
                        u(o)
                      }
                  }
                },
                g = function (e, u) {
                  var f,
                    g,
                    p,
                    m = this,
                    v = e.type,
                    _ = !1,
                    y = function () {
                      var t = n().createObjectURL(e)
                      return h.push(t), t
                    },
                    b = function () {
                      d(m, 'writestart progress write writeend'.split(' '))
                    },
                    x = function () {
                      ;(!_ && f) || (f = y(e)),
                        g ? (g.location.href = f) : window.open(f, '_blank'),
                        (m.readyState = m.DONE),
                        b()
                    },
                    w = function (t) {
                      return function () {
                        if (m.readyState !== m.DONE)
                          return t.apply(this, arguments)
                      }
                    },
                    S = { create: !0, exclusive: !1 }
                  return (
                    (m.readyState = m.INIT),
                    u || (u = 'download'),
                    i
                      ? ((f = y(e)),
                        (r.href = f),
                        (r.download = u),
                        o(r),
                        (m.readyState = m.DONE),
                        void b())
                      : (t.chrome &&
                          v &&
                          v !== l &&
                          ((p = e.slice || e.webkitSlice),
                          (e = p.call(e, 0, e.size, l)),
                          (_ = !0)),
                        s && 'download' !== u && (u += '.download'),
                        (v === l || s) && (g = t),
                        a
                          ? ((c += e.size),
                            void a(
                              t.TEMPORARY,
                              c,
                              w(function (t) {
                                t.root.getDirectory(
                                  'saved',
                                  S,
                                  w(function (t) {
                                    var n = function () {
                                      t.getFile(
                                        u,
                                        S,
                                        w(function (t) {
                                          t.createWriter(
                                            w(function (n) {
                                              ;(n.onwriteend = function (e) {
                                                ;(g.location.href = t.toURL()),
                                                  h.push(t),
                                                  (m.readyState = m.DONE),
                                                  d(m, 'writeend', e)
                                              }),
                                                (n.onerror = function () {
                                                  var t = n.error
                                                  t.code !== t.ABORT_ERR && x()
                                                }),
                                                'writestart progress write abort'
                                                  .split(' ')
                                                  .forEach(function (t) {
                                                    n['on' + t] = m['on' + t]
                                                  }),
                                                n.write(e),
                                                (m.abort = function () {
                                                  n.abort(),
                                                    (m.readyState = m.DONE)
                                                }),
                                                (m.readyState = m.WRITING)
                                            }),
                                            x,
                                          )
                                        }),
                                        x,
                                      )
                                    }
                                    t.getFile(
                                      u,
                                      { create: !1 },
                                      w(function (t) {
                                        t.remove(), n()
                                      }),
                                      w(function (t) {
                                        t.code === t.NOT_FOUND_ERR ? n() : x()
                                      }),
                                    )
                                  }),
                                  x,
                                )
                              }),
                              x,
                            ))
                          : void x())
                  )
                },
                p = g.prototype,
                m = function (t, e) {
                  return new g(t, e)
                }
              return (
                (p.abort = function () {
                  var t = this
                  ;(t.readyState = t.DONE), d(t, 'abort')
                }),
                (p.readyState = p.INIT = 0),
                (p.WRITING = 1),
                (p.DONE = 2),
                (p.error =
                  p.onwritestart =
                  p.onprogress =
                  p.onwrite =
                  p.onabort =
                  p.onerror =
                  p.onwriteend =
                    null),
                t.addEventListener('unload', f, !1),
                (m.unload = function () {
                  f(), t.removeEventListener('unload', f, !1)
                }),
                m
              )
            }
          })(
            ('undefined' != typeof self && self) ||
              ('undefined' != typeof window && window) ||
              (void 0).content,
          ),
        n = window.define
      'undefined' == typeof n &&
        'undefined' != typeof window.almond &&
        'define' in window.almond &&
        (n = window.almond.define),
        'undefined' != typeof t && null !== t
          ? (t.exports = e)
          : 'undefined' != typeof n &&
            null !== n &&
            null != n.amd &&
            n('saveAs', [], function () {
              return e
            })
    }).call(e, n(23)(t))
  },
  function (t, e) {
    'use strict'
    t.exports = function () {
      var t = []
      return (
        (t.toString = function () {
          for (var t = [], e = 0; e < this.length; e++) {
            var n = this[e]
            n[2] ? t.push('@media ' + n[2] + '{' + n[1] + '}') : t.push(n[1])
          }
          return t.join('')
        }),
        (t.i = function (e, n) {
          'string' == typeof e && (e = [[null, e, '']])
          for (var r = {}, i = 0; i < this.length; i++) {
            var o = this[i][0]
            'number' == typeof o && (r[o] = !0)
          }
          for (i = 0; i < e.length; i++) {
            var s = e[i]
            ;('number' == typeof s[0] && r[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = '(' + s[2] + ') and (' + n + ')'),
              t.push(s))
          }
        }),
        t
      )
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t, e, n) {
      if (!a(e)) throw new TypeError('iterator must be a function')
      arguments.length < 3 && (n = this),
        '[object Array]' === u.call(t)
          ? i(t, e, n)
          : 'string' == typeof t
            ? o(t, e, n)
            : s(t, e, n)
    }
    function i(t, e, n) {
      for (var r = 0, i = t.length; r < i; r++)
        l.call(t, r) && e.call(n, t[r], r, t)
    }
    function o(t, e, n) {
      for (var r = 0, i = t.length; r < i; r++) e.call(n, t.charAt(r), r, t)
    }
    function s(t, e, n) {
      for (var r in t) l.call(t, r) && e.call(n, t[r], r, t)
    }
    var a = n(47)
    t.exports = r
    var u = Object.prototype.toString,
      l = Object.prototype.hasOwnProperty
  },
  function (t, e) {
    ;(function (e) {
      'use strict'
      'undefined' != typeof window
        ? (t.exports = window)
        : 'undefined' != typeof e
          ? (t.exports = e)
          : 'undefined' != typeof self
            ? (t.exports = self)
            : (t.exports = {})
    }).call(
      e,
      (function () {
        return this
      })(),
    )
  },
  function (t, e, n) {
    'use strict'
    !(function (n) {
      function r(t, e) {
        if (!(this instanceof r)) return new r(t, e)
        ;(this.domain = []),
          (this.range = []),
          Array.isArray(t) && (this.domain = t),
          Array.isArray(e) && (this.range = e)
        var n = function (t) {
          if ('number' != typeof t) return null
          var e = this.domain[0],
            n = this.domain[1],
            r = this.range[0],
            i = this.range[1]
          return (
            'number' !== r && 'number' != typeof i && ((r = e), (i = n)),
            r + ((i - r) / (n - e)) * (t - e)
          )
        }.bind(this)
        return (
          (n.domain = function (t) {
            return Array.isArray(t) && (this.domain = t), n
          }.bind(this)),
          (n.range = function (t) {
            return Array.isArray(t) && (this.range = t), n
          }.bind(this)),
          n
        )
      }
      'undefined' != typeof t && t.exports && (e = t.exports = r),
        (e.LinearScale = r)
    })(void 0)
  },
  function (t, e, n) {
    'use strict'
    t.exports = n(86)
  },
  function (t, e, n) {
    'use strict'
    var r, i, o
    ;(i = n(5)),
      (o = n(2)),
      (t.exports = r =
        o.extend({
          initialize: function (t) {
            ;(this._nodes = []),
              (this.name = t.name || ''),
              (this.el.className += 'smenubar')
          },
          render: function () {
            for (var t = this.el.firstChild; t; )
              this.el.removeChild(t), (t = this.el.firstChild)
            this.el.appendChild(this.buildDOM())
          },
          setName: function (t) {
            this.name = t
          },
          addNode: function (t, e, n) {
            var r
            null != n && (r = n.style),
              null == this._nodes && (this._nodes = []),
              this._nodes.push({ label: t, callback: e, style: r })
          },
          getNode: function (t) {
            var e = void 0
            return (
              this._nodes.forEach(function (n) {
                n.label === t && (e = n)
              }),
              e
            )
          },
          modifyNode: function (t, e, n) {
            var r = this.getNode(t)
            ;(r.callback = e || r.callback),
              (n = n || {}),
              (r.style = n.style || r.style)
          },
          renameNode: function (t, e) {
            var n = this.getNode(t)
            n.label = e || n.label
          },
          removeNode: function (t) {
            var e = this.getNode(t)
            this._nodes.splice(this._nodes.indexOf(e), 1)
          },
          removeAllNodes: function () {
            this._nodes = []
          },
          buildDOM: function () {
            var t = document.createElement('span')
            return (
              t.appendChild(
                this._buildM({ nodes: this._nodes, name: this.name }),
              ),
              t
            )
          },
          _buildM: function (t) {
            var e,
              n,
              r,
              o,
              s,
              a,
              u,
              l = t.nodes,
              c = t.name,
              h = document.createElement('div')
            ;(h.className = 'smenu-dropdown smenu-dropdown-tip'),
              (h.style.display = 'none')
            var f = document.createElement('ul')
            f.className = 'smenu-dropdown-menu'
            for (var d = 0, g = l.length; d < g; d++) {
              ;(s = l[d]),
                (o = document.createElement('li')),
                (o.textContent = s.label),
                (u = s.style)
              for (r in u) (a = u[r]), (o.style[r] = a)
              o.addEventListener('click', s.callback),
                this.trigger('new:node', o),
                f.appendChild(o)
            }
            return (
              this.trigger('new:menu', f),
              h.appendChild(f),
              (e = document.createElement('a')),
              (e.textContent = c),
              (e.className = 'smenubar_alink'),
              this.trigger('new:button', e),
              i(e).on(
                'click',
                (function (t) {
                  return function (n) {
                    return (
                      t._showMenu(n, h, e),
                      window.setTimeout(function () {
                        return i(document.body).one('click', function (t) {
                          return (h.style.display = 'none')
                        })
                      }, 5)
                    )
                  }
                })(this),
              ),
              (n = document.createDocumentFragment()),
              n.appendChild(h),
              n.appendChild(e),
              n
            )
          },
          _showMenu: function (t, e, n) {
            var r
            ;(e.style.display = 'block'),
              (e.style.position = 'absolute'),
              (r = n.getBoundingClientRect()),
              (e.style.left = r.left + 'px'),
              (e.style.top = r.top + n.offsetHeight + 'px')
          },
        }))
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#00a35c',
      R: '#00fc03',
      N: '#00eb14',
      D: '#00eb14',
      C: '#0000ff',
      Q: '#00f10e',
      E: '#00f10e',
      G: '#009d62',
      H: '#00d52a',
      I: '#0054ab',
      L: '#007b84',
      K: '#00ff00',
      M: '#009768',
      F: '#008778',
      P: '#00e01f',
      S: '#00d52a',
      T: '#00db24',
      W: '#00a857',
      Y: '#00e619',
      V: '#005fa0',
      B: '#00eb14',
      X: '#00b649',
      Z: '#00f10e',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#BBBBBB',
      B: 'grey',
      C: 'yellow',
      D: 'red',
      E: 'red',
      F: 'magenta',
      G: 'brown',
      H: '#00FFFF',
      I: '#BBBBBB',
      J: '#fff',
      K: '#00FFFF',
      L: '#BBBBBB',
      M: '#BBBBBB',
      N: 'green',
      O: '#fff',
      P: 'brown',
      Q: 'green',
      R: '#00FFFF',
      S: 'green',
      T: 'green',
      U: '#fff',
      V: '#BBBBBB',
      W: 'magenta',
      X: 'grey',
      Y: 'magenta',
      Z: 'grey',
      Gap: 'grey',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: 'orange',
      B: '#fff',
      C: 'green',
      D: 'red',
      E: 'red',
      F: 'blue',
      G: 'orange',
      H: 'red',
      I: 'green',
      J: '#fff',
      K: 'red',
      L: 'green',
      M: 'green',
      N: '#fff',
      O: '#fff',
      P: 'orange',
      Q: '#fff',
      R: 'red',
      S: 'orange',
      T: 'orange',
      U: '#fff',
      V: 'green',
      W: 'blue',
      X: '#fff',
      Y: 'blue',
      Z: '#fff',
      Gap: '#fff',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#80a0f0',
      R: '#f01505',
      N: '#00ff00',
      D: '#c048c0',
      C: '#f08080',
      Q: '#00ff00',
      E: '#c048c0',
      G: '#f09048',
      H: '#15a4a4',
      I: '#80a0f0',
      L: '#80a0f0',
      K: '#f01505',
      M: '#80a0f0',
      F: '#80a0f0',
      P: '#ffff00',
      S: '#00ff00',
      T: '#00ff00',
      W: '#80a0f0',
      Y: '#15a4a4',
      V: '#80a0f0',
      B: '#fff',
      X: '#fff',
      Z: '#fff',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#e718e7',
      R: '#6f906f',
      N: '#1be41b',
      D: '#778877',
      C: '#23dc23',
      Q: '#926d92',
      E: '#ff00ff',
      G: '#00ff00',
      H: '#758a75',
      I: '#8a758a',
      L: '#ae51ae',
      K: '#a05fa0',
      M: '#ef10ef',
      F: '#986798',
      P: '#00ff00',
      S: '#36c936',
      T: '#47b847',
      W: '#8a758a',
      Y: '#21de21',
      V: '#857a85',
      B: '#49b649',
      X: '#758a75',
      Z: '#c936c9',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#ad0052',
      B: '#0c00f3',
      C: '#c2003d',
      D: '#0c00f3',
      E: '#0c00f3',
      F: '#cb0034',
      G: '#6a0095',
      H: '#1500ea',
      I: '#ff0000',
      J: '#fff',
      K: '#0000ff',
      L: '#ea0015',
      M: '#b0004f',
      N: '#0c00f3',
      O: '#fff',
      P: '#4600b9',
      Q: '#0c00f3',
      R: '#0000ff',
      S: '#5e00a1',
      T: '#61009e',
      U: '#fff',
      V: '#f60009',
      W: '#5b00a4',
      X: '#680097',
      Y: '#4f00b0',
      Z: '#0c00f3',
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (
        null == t ||
        'object' != ('undefined' == typeof t ? 'undefined' : i(t))
      )
        return t
      var e = t.constructor()
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      return e
    }
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            },
      o = n(99),
      s = o.stat,
      a = o.dyn,
      u = n(87),
      l = n(88),
      c = n(89),
      h = n(90),
      f = n(91),
      d = n(92),
      g = n(94),
      p = n(95),
      m = n(96),
      v = n(98),
      _ = n(100),
      y = n(101),
      b = n(102),
      x = n(103),
      w = {
        buried: u,
        buried_index: u,
        cinema: l,
        clustal2: h,
        clustal: c,
        helix: f,
        helix_propensity: f,
        hydro: d,
        lesk: g,
        mae: p,
        nucleotide: m,
        purine: v,
        purine_pyrimidine: v,
        strand: _,
        strand_propensity: _,
        taylor: y,
        turn: b,
        turn_propensity: b,
        zappo: x,
      },
      S = n(97),
      k = { pid: S },
      C = function (t) {
        ;(this.maps = r(w)), (this.dyn = r(k)), (this.opt = t)
      }
    ;(t.exports = C),
      (C.getScheme = function (t) {
        return w[t]
      }),
      (C.prototype.getScheme = function (t) {
        var e = this.maps[t]
        return void 0 === e && ((e = {}), void 0 != this.dyn[t])
          ? new a(this.dyn[t], this.opt)
          : new s(e)
      }),
      (C.prototype.addStaticScheme = function (t, e) {
        this.maps[t] = e
      }),
      (C.prototype.addDynScheme = function (t, e) {
        this.dyn[t] = e
      })
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: ' orange',
      B: ' #fff',
      C: ' green',
      D: ' red',
      E: ' red',
      F: ' green',
      G: ' orange',
      H: ' magenta',
      I: ' green',
      J: ' #fff',
      K: ' red',
      L: ' green',
      M: ' green',
      N: ' magenta',
      O: ' #fff',
      P: ' green',
      Q: ' magenta',
      R: ' red',
      S: ' orange',
      T: ' orange',
      U: ' #fff',
      V: ' green',
      W: ' green',
      X: ' #fff',
      Y: ' green',
      Z: ' #fff',
      Gap: ' #fff',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: ' #77dd88',
      B: ' #fff',
      C: ' #99ee66',
      D: ' #55bb33',
      E: ' #55bb33',
      F: ' #9999ff',
      G: ' #77dd88',
      H: ' #5555ff',
      I: ' #66bbff',
      J: ' #fff',
      K: ' #ffcc77',
      L: ' #66bbff',
      M: ' #66bbff',
      N: ' #55bb33',
      O: ' #fff',
      P: ' #eeaaaa',
      Q: ' #55bb33',
      R: ' #ffcc77',
      S: ' #ff4455',
      T: ' #ff4455',
      U: ' #fff',
      V: ' #66bbff',
      W: ' #9999ff',
      X: ' #fff',
      Y: ' #9999ff',
      Z: ' #fff',
      Gap: ' #fff',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: ' #64F73F',
      C: ' #FFB340',
      G: ' #EB413C',
      T: ' #3C88EE',
      U: ' #3C88EE',
    }
  },
  function (t, e) {
    'use strict'
    var n
    ;(t.exports = n = {}),
      (n.init = function () {
        this.cons = this.opt.conservation()
      }),
      (n.run = function (t, e) {
        var n = this.cons[e.pos]
        return n > 0.8
          ? '#6464ff'
          : n > 0.6
            ? '#9da5ff'
            : n > 0.4
              ? '#cccccc'
              : '#ffffff'
      })
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: ' #FF83FA',
      C: ' #40E0D0',
      G: ' #FF83FA',
      R: ' #FF83FA',
      T: ' #40E0D0',
      U: ' #40E0D0',
      Y: ' #40E0D0',
    }
  },
  function (t, e) {
    'use strict'
    var n = function (t) {
        ;(this.defaultColor = '#ffffff'),
          (this.type = 'static'),
          (this.map = t),
          (this.getColor = function (t) {
            return void 0 !== this.map[t] ? this.map[t] : this.defaultColor
          })
      },
      r = function (t, e) {
        ;(this.type = 'dyn'),
          (this.opt = e),
          void 0 !== t.init
            ? (t.init.call(this),
              (this.getColor = t.run),
              (this.reset = t.init))
            : (this.getColor = t)
      }
    ;(t.exports.stat = n), (t.exports.dyn = r)
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#5858a7',
      R: '#6b6b94',
      N: '#64649b',
      D: '#2121de',
      C: '#9d9d62',
      Q: '#8c8c73',
      E: '#0000ff',
      G: '#4949b6',
      H: '#60609f',
      I: '#ecec13',
      L: '#b2b24d',
      K: '#4747b8',
      M: '#82827d',
      F: '#c2c23d',
      P: '#2323dc',
      S: '#4949b6',
      T: '#9d9d62',
      W: '#c0c03f',
      Y: '#d3d32c',
      V: '#ffff00',
      B: '#4343bc',
      X: '#797986',
      Z: '#4747b8',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#ccff00',
      R: '#0000ff',
      N: '#cc00ff',
      D: '#ff0000',
      C: '#ffff00',
      Q: '#ff00cc',
      E: '#ff0066',
      G: '#ff9900',
      H: '#0066ff',
      I: '#66ff00',
      L: '#33ff00',
      K: '#6600ff',
      M: '#00ff00',
      F: '#00ff66',
      P: '#ffcc00',
      S: '#ff3300',
      T: '#ff6600',
      W: '#00ccff',
      Y: '#00ffcc',
      V: '#99ff00',
      B: '#fff',
      X: '#fff',
      Z: '#fff',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#2cd3d3',
      R: '#708f8f',
      N: '#ff0000',
      D: '#e81717',
      C: '#a85757',
      Q: '#3fc0c0',
      E: '#778888',
      G: '#ff0000',
      H: '#708f8f',
      I: '#00ffff',
      L: '#1ce3e3',
      K: '#7e8181',
      M: '#1ee1e1',
      F: '#1ee1e1',
      P: '#f60909',
      S: '#e11e1e',
      T: '#738c8c',
      W: '#738c8c',
      Y: '#9d6262',
      V: '#07f8f8',
      B: '#f30c0c',
      X: '#7c8383',
      Z: '#5ba4a4',
    }
  },
  function (t, e) {
    'use strict'
    t.exports = {
      A: '#ffafaf',
      R: '#6464ff',
      N: '#00ff00',
      D: '#ff0000',
      C: '#ffff00',
      Q: '#00ff00',
      E: '#ff0000',
      G: '#ff00ff',
      H: '#6464ff',
      I: '#ffafaf',
      L: '#ffafaf',
      K: '#6464ff',
      M: '#ffafaf',
      F: '#ffc800',
      P: '#ff00ff',
      S: '#00ff00',
      T: '#00ff00',
      W: '#ffc800',
      Y: '#ffc800',
      V: '#ffafaf',
      B: '#fff',
      X: '#fff',
      Z: '#fff',
    }
  },
  function (t, e, n) {
    'use strict'
    var r = n(141),
      i = n(82),
      o = function (t) {
        return '[object Array]' === Object.prototype.toString.call(t)
      }
    t.exports = function (t) {
      if (!t) return {}
      var e = {}
      return (
        i(r(t).split('\n'), function (t) {
          var n = t.indexOf(':'),
            i = r(t.slice(0, n)).toLowerCase(),
            s = r(t.slice(n + 1))
          'undefined' == typeof e[i]
            ? (e[i] = s)
            : o(e[i])
              ? e[i].push(s)
              : (e[i] = [e[i], s])
        }),
        e
      )
    }
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (t && t.__esModule) return t
      var e = {}
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return (e['default'] = t), e
    }
    function i(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.version =
        e.io =
        e.$ =
        e.boneView =
        e.view =
        e.selcol =
        e.selection =
        e.utils =
        e.menu =
        e.model =
        e.msa =
          void 0)
    var o = n(8)
    Object.defineProperty(e, 'selection', {
      enumerable: !0,
      get: function () {
        return i(o)['default']
      },
    })
    var s = n(9)
    Object.defineProperty(e, 'selcol', {
      enumerable: !0,
      get: function () {
        return i(s)['default']
      },
    })
    var a = n(2)
    Object.defineProperty(e, 'view', {
      enumerable: !0,
      get: function () {
        return i(a)['default']
      },
    })
    var u = n(4)
    Object.defineProperty(e, 'boneView', {
      enumerable: !0,
      get: function () {
        return i(u)['default']
      },
    })
    var l = n(5)
    Object.defineProperty(e, '$', {
      enumerable: !0,
      get: function () {
        return i(l)['default']
      },
    })
    var c = n(119),
      h = i(c),
      f = n(52),
      d = r(f),
      g = n(107),
      p = r(g),
      m = n(38),
      v = r(m),
      _ = n(12),
      y = function () {
        var t = function (t) {
          return h['default'].apply(this, t)
        }
        return (t.prototype = h['default'].prototype), new t(arguments)
      }
    ;(e['default'] = y),
      (e.msa = h['default']),
      (e.model = d),
      (e.menu = p),
      (e.utils = v)
    var b = { xhr: n(24), fasta: _.fasta, clustal: _.clustal, gff: _.gff }
    e.io = b
    var x = 'imported'
    ;(x = '1.0.3'), (e.version = x)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(115),
      o = r(i),
      s = n(113),
      a = r(s),
      u = n(117),
      l = r(u),
      c = n(118),
      h = r(c),
      f = n(109),
      d = r(f),
      g = n(116),
      p = r(g),
      m = n(112),
      v = r(m),
      _ = n(111),
      y = r(_),
      b = n(114),
      x = r(b),
      w = n(110),
      S = r(w),
      k = n(108),
      C = r(k),
      z = n(4),
      j = z.extend({
        initialize: function (t) {
          if (!t.msa)
            throw new Error('No msa instance provided. Please provide .msa')
          if (
            ((this.msa = t.msa),
            (this.msa.g.menuconfig = new C['default'](t.menu)),
            this.addView(
              '10_import',
              new o['default']({
                model: this.msa.seqs,
                g: this.msa.g,
                msa: this.msa,
              }),
            ),
            this.addView(
              '15_ordering',
              new p['default']({ model: this.msa.seqs, g: this.msa.g }),
            ),
            this.addView(
              '20_filter',
              new a['default']({ model: this.msa.seqs, g: this.msa.g }),
            ),
            this.addView(
              '30_selection',
              new l['default']({ model: this.msa.seqs, g: this.msa.g }),
            ),
            this.addView(
              '40_vis',
              new h['default']({ model: this.msa.seqs, g: this.msa.g }),
            ),
            this.addView(
              '50_color',
              new d['default']({ model: this.msa.seqs, g: this.msa.g }),
            ),
            this.addView(
              '70_extra',
              new v['default']({
                model: this.msa.seqs,
                g: this.msa.g,
                msa: this.msa,
              }),
            ),
            this.addView(
              '80_export',
              new y['default']({
                model: this.msa.seqs,
                g: this.msa.g,
                msa: this.msa,
              }),
            ),
            this.addView('90_help', new x['default']({ g: this.msa.g })),
            this.msa.g.config.get('debug'))
          )
            return this.addView('95_debug', new S['default']({ g: this.msa.g }))
        },
        render: function () {
          return (
            this.renderSubviews(),
            this.el.setAttribute('class', 'smenubar'),
            this.el.appendChild(document.createElement('p'))
          )
        },
      })
    e['default'] = j
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(106)
    Object.defineProperty(e, 'defaultmenu', {
      enumerable: !0,
      get: function () {
        return r(i)['default']
      },
    })
    var o = n(6)
    Object.defineProperty(e, 'menubuilder', {
      enumerable: !0,
      get: function () {
        return r(o)['default']
      },
    })
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(1).Model,
      i = r.extend({
        constructor: function (t, e) {
          return 'small' == t && (t = this.small), r.apply(this, [t])
        },
        small: { menuFontsize: '12px' },
        defaults: {
          menuFontsize: '14px',
          menuItemFontsize: '14px',
          menuItemLineHeight: '14px',
          menuMarginLeft: '3px',
          menuPadding: '3px 4px 3px 4px',
        },
      })
    e['default'] = i
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(7),
      a = o['default'].extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.el.style.display = 'inline-block'),
            this.listenTo(this.g.colorscheme, 'change', function () {
              return this.render()
            })
          )
        },
        render: function () {
          var t = this.setName('Color scheme')
          this.removeAllNodes()
          for (var e, n = this.getColorschemes(), r = 0; r < n.length; r++)
            (e = n[r]), this.addScheme(t, e)
          return (
            this.grey(t),
            s.removeAllChilds(this.el),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
        addScheme: function (t, e) {
          var n = this,
            r = {}
          return (
            this.g.colorscheme.get('scheme') === e.id &&
              (r.backgroundColor = '#77ED80'),
            this.addNode(
              e.name,
              function () {
                n.g.colorscheme.set('scheme', e.id)
              },
              { style: r },
            )
          )
        },
        getColorschemes: function () {
          var t = []
          return (
            t.push({ name: 'Taylor', id: 'taylor' }),
            t.push({ name: 'Buried', id: 'buried' }),
            t.push({ name: 'Cinema', id: 'cinema' }),
            t.push({ name: 'Clustal', id: 'clustal' }),
            t.push({ name: 'Clustal2', id: 'clustal2' }),
            t.push({ name: 'Helix', id: 'helix' }),
            t.push({ name: 'Hydrophobicity', id: 'hydro' }),
            t.push({ name: 'Lesk', id: 'lesk' }),
            t.push({ name: 'MAE', id: 'mae' }),
            t.push({ name: 'Nucleotide', id: 'nucleotide' }),
            t.push({ name: 'Purine', id: 'purine' }),
            t.push({ name: 'PID', id: 'pid' }),
            t.push({ name: 'Strand', id: 'strand' }),
            t.push({ name: 'Turn', id: 'turn' }),
            t.push({ name: 'Zappo', id: 'zappo' }),
            t.push({ name: 'No color', id: 'foo' }),
            t
          )
        },
        grey: function (t) {},
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = o['default'].extend({
        initialize: function (t) {
          return (this.g = t.g), (this.el.style.display = 'inline-block')
        },
        render: function () {
          var t = this
          return (
            this.setName('Debug'),
            this.addNode('Get the code', function () {
              return window.open('https://github.com/wilzbach/msa')
            }),
            this.addNode('Toggle mouseover events', function () {
              return (
                t.g.config.set(
                  'registerMouseHover',
                  !t.g.config.get('registerMouseHover'),
                ),
                t.g.onAll(function () {
                  return console.log(arguments)
                })
              )
            }),
            this.addNode('Minimized width', function () {
              return t.g.zoomer.set('alignmentWidth', 600)
            }),
            this.addNode('Minimized height', function () {
              return t.g.zoomer.set('alignmentHeight', 120)
            }),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(19),
      a = r(s),
      u = n(12),
      l = (u.fasta.write, '↪'),
      c = o['default'].extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.msa = t.msa),
            (this.el.style.display = 'inline-block')
          )
        },
        render: function () {
          var t = this
          return (
            this.setName('Export'),
            this.addNode('Share view (URL)' + l, function () {
              return a['default'].shareLink(t.msa, function (t) {
                return window.open(t, '_blank')
              })
            }),
            this.addNode('View in Jalview', function () {
              var e = t.g.config.get('url')
              return 'undefined' == typeof e || null === e
                ? alert("Sequence weren't imported via an URL")
                : e.indexOf('localhost')
                  ? a['default'].publishWeb(t.msa, function (e) {
                      return a['default'].openInJalview(
                        e,
                        t.g.colorscheme.get('scheme'),
                      )
                    })
                  : a['default'].openInJalview(e, t.g.colorscheme.get('scheme'))
            }),
            this.addNode('Export alignment (FASTA)', function () {
              return a['default'].saveAsFile(t.msa, 'all.fasta')
            }),
            this.addNode('Export alignment (URL)', function () {
              return a['default'].publishWeb(t.msa, function (t) {
                return window.open(t, '_blank')
              })
            }),
            this.addNode('Export selected sequences (FASTA)', function () {
              return a['default'].saveSelection(t.msa, 'selection.fasta')
            }),
            this.addNode('Export features (GFF)', function () {
              return a['default'].saveAnnots(t.msa, 'features.gff3')
            }),
            this.addNode('Export MSA image (PNG)', function () {
              return a['default'].saveAsImg(t.msa, 'biojs-msa.png')
            }),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = c
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(37),
      a = r(s),
      u = n(21),
      l =
        (r(u),
        n(24),
        o['default'].extend({
          initialize: function (t) {
            return (
              (this.g = t.g),
              (this.el.style.display = 'inline-block'),
              (this.msa = t.msa)
            )
          },
          render: function () {
            var t = this
            this.setName('Extras')
            var e = this.g.stats
            return (
              this.msa,
              this.addNode('Add consensus seq', function () {
                var n = e.consensus(),
                  r = new a['default']({ seq: n, id: '0c', name: 'Consenus' })
                return (
                  t.model.add(r),
                  t.model.setRef(r),
                  (t.model.comparator = function (t) {
                    return !t.get('ref')
                  }),
                  t.model.sort()
                )
              }),
              this.addNode('Jump to a column', function () {
                var e = prompt('Column', '20')
                return e < 0 || e > t.model.getMaxLength() || isNaN(e)
                  ? void alert('invalid column')
                  : t.g.zoomer.setLeftOffset(e)
              }),
              this.el.appendChild(this.buildDOM()),
              this
            )
          },
        }))
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = o['default'].extend({
        initialize: function (t) {
          return (this.g = t.g), (this.el.style.display = 'inline-block')
        },
        render: function () {
          var t = this
          return (
            this.setName('Filter'),
            this.addNode('Hide columns by threshold', function (e) {
              var n = prompt('Enter threshold (in percent)', 20)
              n /= 100
              for (
                var r = t.model.getMaxLength(),
                  i = [],
                  o = t.g.stats.scale(t.g.stats.conservation()),
                  s = r - 1,
                  a = 0;
                0 < s ? a <= s : a >= s;
                0 < s ? a++ : a--
              )
                o[a] < n && i.push(a)
              return t.g.columns.set('hidden', i)
            }),
            this.addNode('Hide columns by selection', function () {
              var e = t.g.columns.get('hidden'),
                n = e.concat(
                  t.g.selcol.getAllColumnBlocks({
                    maxLen: t.model.getMaxLength(),
                    withPos: !0,
                  }),
                )
              return t.g.selcol.reset([]), t.g.columns.set('hidden', n)
            }),
            this.addNode('Hide columns by gaps', function () {
              var e = prompt('Enter threshold (in percent)', 20)
              e /= 100
              for (
                var n = t.model.getMaxLength(), r = [], i = n - 1, o = 0;
                0 < i ? o <= i : o >= i;
                0 < i ? o++ : o--
              ) {
                var s = 0,
                  a = 0
                t.model.each(function (t) {
                  return '-' === t.get('seq')[o] && s++, a++
                }),
                  s / a > e && r.push(o)
              }
              return t.g.columns.set('hidden', r)
            }),
            this.addNode('Hide seqs by identity', function () {
              var e = prompt('Enter threshold (in percent)', 20)
              return (
                (e /= 100),
                t.model.each(function (t) {
                  if (t.get('identity') < e) return t.set('hidden', !0)
                })
              )
            }),
            this.addNode('Hide seqs by selection', function () {
              var e = t.g.selcol.where({ type: 'row' }),
                n = e.map(function (t) {
                  return t.get('seqId')
                })
              return (
                t.g.selcol.reset([]),
                t.model.each(function (t) {
                  if (n.indexOf(t.get('id')) >= 0) return t.set('hidden', !0)
                })
              )
            }),
            this.addNode('Hide seqs by gaps', function () {
              var e = prompt('Enter threshold (in percent)', 40)
              return t.model.each(function (t, n) {
                if (
                  t.get('seq').reduce(function (t, e) {
                    return '-' === e ? ++t : void 0
                  }, 0) > e
                )
                  return t.set('hidden', !0)
              })
            }),
            this.addNode('Reset', function () {
              return (
                t.g.columns.set('hidden', []),
                t.model.each(function (t) {
                  if (t.get('hidden')) return t.set('hidden', !1)
                })
              )
            }),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = o['default'].extend({
        initialize: function (t) {
          return (this.g = t.g)
        },
        render: function () {
          return (
            this.setName('Help'),
            this.addNode('About the project', function () {
              return window.open('https://github.com/wilzbach/msa')
            }),
            this.addNode('Report issues', function () {
              return window.open('https://github.com/wilzbach/msa/issues')
            }),
            this.addNode('User manual', function () {
              return window.open(
                'https://github.com/wilzbach/msa/wiki/User-manual',
              )
            }),
            (this.el.style.display = 'inline-block'),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(17),
      a = o['default'].extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.el.style.display = 'inline-block'),
            (this.msa = t.msa)
          )
        },
        render: function () {
          var t = this,
            e = this.msa,
            n = s.mk('input')
          ;(n.type = 'file'),
            (n.style.display = 'none'),
            (n.multiple = !0),
            n.addEventListener('change', function () {
              var t = n.files || []
              return e.u.file.importFiles(t)
            }),
            this.el.appendChild(n)
          var r = '(Fasta, Clustal, GFF, Jalview features, Newick)'
          return (
            this.setName('Import'),
            this.addNode('URL', function (e) {
              var n = prompt(
                'URL ' + r,
                'http://rostlab.org/~goldberg/clustalw2-I20140818-215249-0556-53699878-pg.clustalw',
              )
              if (n.length > 5) return t.msa.u.file.importURL(n, function () {})
            }),
            this.addNode('From file ' + r, function () {
              return n.click()
            }),
            this.addNode('Drag & Drop', function () {
              return alert('Yep. Just drag & drop your file ' + r)
            }),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(7),
      a = '↑',
      u = '↓',
      l = o['default'].extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.order = 'ID'),
            (this.el.style.display = 'inline-block')
          )
        },
        setOrder: function (t) {
          return (this.order = t), this.render()
        },
        render: function () {
          this.setName('Sorting'), this.removeAllNodes()
          for (var t, e = this.getComparators(), n = 0; n < e.length; n++)
            (t = e[n]), this._addNode(t)
          var r = this.buildDOM()
          return s.removeAllChilds(this.el), this.el.appendChild(r), this
        },
        _addNode: function (t) {
          var e = this,
            n = t.text,
            r = {}
          return (
            n === this.order && (r.backgroundColor = '#77ED80'),
            this.addNode(
              n,
              function () {
                return (
                  null != t.precode && t.precode(),
                  (e.model.comparator = t.comparator),
                  e.model.sort(),
                  e.setOrder(t.text)
                )
              },
              { style: r },
            )
          )
        },
        getComparators: function () {
          var t = this,
            e = []
          e.push({ text: 'ID ' + a, comparator: 'id' }),
            e.push({
              text: 'ID ' + u,
              comparator: function (t, e) {
                return -('' + t.get('id')).localeCompare('' + e.get('id'), [], {
                  numeric: !0,
                })
              },
            }),
            e.push({ text: 'Label ' + a, comparator: 'name' }),
            e.push({
              text: 'Label ' + u,
              comparator: function (t, e) {
                return -t.get('name').localeCompare(e.get('name'))
              },
            }),
            e.push({ text: 'Seq ' + a, comparator: 'seq' }),
            e.push({
              text: 'Seq ' + u,
              comparator: function (t, e) {
                return -t.get('seq').localeCompare(e.get('seq'))
              },
            })
          var n = function () {
              return (t.ident = t.g.stats.identity())
            },
            r = function () {
              return (
                (t.gaps = {}),
                t.model.each(function (e) {
                  var n = e.attributes.seq
                  return (t.gaps[e.id] =
                    (n.reduce(function (t, e) {
                      return '-' === e ? ++t : void 0
                    }),
                    0 / n.length))
                })
              )
            }
          return (
            e.push({
              text: 'Identity ' + a,
              comparator: function (e, n) {
                var r = t.ident[e.id] - t.ident[n.id]
                return r > 0 ? 1 : r < 0 ? -1 : 0
              },
              precode: n,
            }),
            e.push({
              text: 'Identity ' + u,
              comparator: function (e, n) {
                var r = t.ident[e.id] - t.ident[n.id]
                return r > 0 ? -1 : r < 0 ? 1 : 0
              },
              precode: n,
            }),
            e.push({
              text: 'Gaps ' + a,
              comparator: function (e, n) {
                var r = t.gaps[e.id] - t.gaps[n.id]
                return r > 0 ? 1 : r < 0 ? -1 : 0
              },
              precode: r,
            }),
            e.push({
              text: 'Gaps ' + u,
              comparator: function (e, n) {
                var r = t.gaps[e.id] - t.gaps[n.id]
                return r < 0 ? 1 : r > 0 ? -1 : 0
              },
              precode: r,
            }),
            e.push({
              text: 'Consensus to top',
              comparator: function (t) {
                return !t.get('ref')
              },
            }),
            e
          )
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = o['default'].extend({
        initialize: function (t) {
          return (this.g = t.g), (this.el.style.display = 'inline-block')
        },
        render: function () {
          var t = this
          return (
            this.setName('Selection'),
            this.addNode('Find Motif (supports RegEx)', function () {
              var e = prompt('your search', 'D')
              return t.g.user.set('searchText', e)
            }),
            this.addNode('Invert columns', function () {
              return t.g.selcol.invertCol(
                (function () {
                  var e = [],
                    n = t.model.getMaxLength(),
                    r = 0
                  if (0 <= n) for (; r <= n; ) e.push(r++)
                  else for (; r >= n; ) e.push(r--)
                  return e
                })(),
              )
            }),
            this.addNode('Invert rows', function () {
              return t.g.selcol.invertRow(t.model.pluck('id'))
            }),
            this.addNode('Reset', function () {
              return t.g.selcol.reset()
            }),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(6),
      o = r(i),
      s = n(7),
      a = o['default'].extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.el.style.display = 'inline-block'),
            this.listenTo(this.g.vis, 'change', this.render)
          )
        },
        render: function () {
          var t = this
          this.removeAllNodes(), this.setName('Vis.elements')
          for (var e, n = this.getVisElements(), r = 0; r < n.length; r++)
            (e = n[r]), this._addVisEl(e)
          return (
            this.addNode('Reset', function () {
              return (
                t.g.vis.set('labels', !0),
                t.g.vis.set('sequences', !0),
                t.g.vis.set('metacell', !0),
                t.g.vis.set('conserv', !0),
                t.g.vis.set('labelId', !0),
                t.g.vis.set('labelName', !0),
                t.g.vis.set('labelCheckbox', !1),
                t.g.vis.set('seqlogo', !1),
                t.g.vis.set('gapHeader', !1),
                t.g.vis.set('leftHeader', !0),
                t.g.vis.set('metaGaps', !0),
                t.g.vis.set('metaIdentity', !0),
                t.g.vis.set('metaLinks', !0)
              )
            }),
            s.removeAllChilds(this.el),
            this.el.appendChild(this.buildDOM()),
            this
          )
        },
        _addVisEl: function (t) {
          var e = this,
            n = {}
          if (this.g.vis.get(t.id)) {
            var r = 'Hide '
            n.color = 'red'
          } else (r = 'Show '), (n.color = 'green')
          return this.addNode(
            r + t.name,
            function () {
              return e.g.vis.set(t.id, !e.g.vis.get(t.id))
            },
            { style: n },
          )
        },
        getVisElements: function () {
          var t = []
          return (
            t.push({ name: 'residues indices', id: 'markers' }),
            t.push({ name: 'ID/Label', id: 'labels' }),
            t.push({ name: 'meta info (Gaps/Ident)', id: 'metacell' }),
            t.push({ name: 'overview panel', id: 'overviewbox' }),
            t.push({ name: 'sequence logo', id: 'seqlogo' }),
            t.push({ name: 'gap weights', id: 'gapHeader' }),
            t.push({ name: 'conservation weights', id: 'conserv' }),
            t.push({ name: 'scale slider', id: 'scaleslider' }),
            t.push({ name: 'Label', id: 'labelName' }),
            t.push({ name: 'ID', id: 'labelId' }),
            t.push({ name: 'gaps %', id: 'metaGaps' }),
            t.push({ name: 'identity score', id: 'metaIdentity' }),
            t
          )
        },
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(36),
      o = r(i),
      s = n(27),
      a = r(s),
      u = n(28),
      l = r(u),
      c = n(29),
      h = r(c),
      f = n(30),
      d = r(f),
      g = n(9),
      p = r(g),
      m = n(31),
      v = r(m),
      _ = n(33),
      y = r(_),
      b = n(32),
      x = r(b),
      w = n(34),
      S = r(w),
      k = n(26),
      C = r(k),
      z = n(124),
      j = r(z),
      M = n(20),
      E = r(M),
      O = n(41),
      A = r(O),
      T = n(22),
      L = r(T),
      R = n(4),
      q = n(16),
      N = n(49),
      I = n(5),
      P = R.extend({
        initialize: function (t) {
          var e = this
          if (
            (('undefined' != typeof t && null !== t) || (t = {}),
            null == t.colorscheme && (t.colorscheme = {}),
            null == t.columns && (t.columns = {}),
            null == t.conf && (t.conf = {}),
            null == t.vis && (t.vis = {}),
            null == t.visorder && (t.visorder = {}),
            null == t.zoomer && (t.zoomer = {}),
            null == t.conserv && (t.conserv = {}),
            null == t.scale && (t.scale = {}),
            (this.g = q.mixin({})),
            (this.seqs = this.g.seqs = new o['default'](t.seqs, this.g)),
            (this.g.config = new h['default'](t.conf)),
            (this.g['package'] = new d['default'](this.g)),
            (this.g.selcol = new p['default']([], { g: this.g })),
            (this.g.user = new v['default']()),
            (this.g.vis = new y['default'](t.vis, { model: this.seqs })),
            (this.g.visorder = new x['default'](t.visorder)),
            (this.g.zoomer = new S['default'](t.zoomer, {
              g: this.g,
              model: this.seqs,
            })),
            (this.g.scale = new C['default'](t.scale, { g: this.g })),
            (this.g.conservationConfig = t.conserv),
            'localhost' === window.location.hostname &&
              this.g.config.set('debug', !0),
            this._loadSeqs(t),
            (this.u = {}),
            (this.u.file = new E['default'](this)),
            (this.u.proxy = new L['default']({ g: this.g })),
            (this.u.tree = new A['default'](this)),
            this.g.config.get('eventBus') === !0 && this.startEventBus(),
            this.g.config.get('dropImport'))
          ) {
            var n = { dragover: this.dragOver, drop: this.dropFile }
            this.delegateEvents(n)
          }
          return (
            t.importURL &&
              this.u.file.importURL(t.importURL, function () {
                return e.render()
              }),
            t.bootstrapMenu &&
              (t.menu && (this.menuConfig = t.menu),
              this.g.config.set('bootstrapMenu', !0)),
            this.draw(),
            this.m()
          )
        },
        _loadSeqs: function (t) {
          var e = this.seqs.pluck('seq')
          return (
            (this.g.stats = new N(this.seqs, { useGaps: !0 })),
            (this.g.stats.alphabetSize = this.g.config.get('alphabetSize')),
            (this.g.columns = new l['default'](t.columns, this.g.stats)),
            (this.g.colorscheme = new a['default'](
              t.colorscheme,
              e,
              this.g.stats,
            )),
            this.g.zoomer.setEl(this.el, this.seqs)
          )
        },
        importURL: function () {
          return this.u.file.importURL.apply(this.u.file, arguments)
        },
        m: function W() {
          var W = {}
          return (
            (W.model = n(52)),
            (W.selection = n(8)),
            (W.selcol = n(9)),
            (W.view = n(2)),
            (W.boneView = n(4)),
            (this.m = W)
          )
        },
        draw: function () {
          var t = this
          if (
            (this.removeViews(),
            this.addView(
              'stage',
              new j['default']({ model: this.seqs, g: this.g }),
            ),
            this.$el.addClass('biojs_msa_div'),
            this.g.config.get('bootstrapMenu'))
          ) {
            var e = document.createElement('div'),
              n = document.createElement('div')
            this.el.parentNode
              ? (this.el.parentNode.replaceChild(n, this.el),
                n.appendChild(e),
                n.appendChild(this.el))
              : (n.appendChild(e), n.appendChild(this.el))
            var r = {
              el: e,
              msa: this,
            }
            this.menuConfig && (r.menu = this.menuConfig),
              new msa.menu.defaultmenu(r).render()
          }
          return I(window).on('resize', function (e) {
            var n = function () {
              return this.g.zoomer.autoResize()
            }
            return setTimeout(n.bind(t), 5)
          })
        },
        dragOver: function (t) {
          return t.preventDefault(), (t.target.className = 'hover'), !1
        },
        dropFile: function (t) {
          t.preventDefault()
          var e = t.target.files || t.dataTransfer.files
          return this.u.file.importFiles(e), !1
        },
        startEventBus: function () {
          var t = this,
            e = [
              'config',
              'columns',
              'colorscheme',
              'selcol',
              'vis',
              'visorder',
              'zoomer',
            ]
          return (function () {
            for (var n, r = [], i = 0; i < e.length; i++)
              (n = e[i]), r.push(t._proxyToG(n))
            return r
          })()
        },
        _proxyToG: function (t) {
          return this.listenTo(this.g[t], 'all', function (e, n, r, i) {
            if ('change' !== e)
              return 'undefined' != typeof i && null !== i
                ? this.g.trigger(t + ':' + e, r, n, i)
                : this.g.trigger(t + ':' + e, r, n)
          })
        },
        render: function () {
          return (
            void 0 === this.seqs || 0 === this.seqs.length,
            this.renderSubviews(),
            this.g.vis.set('loaded', !0),
            this
          )
        },
      })
    e['default'] = P
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(128),
      o = r(i),
      s = n(137),
      a = r(s),
      u = n(4),
      l = u.extend({
        initialize: function (t) {
          this.g = t.g
          var e = new a['default']({ model: this.model, g: this.g })
          if (
            ((e.ordering = -1),
            this.addView('labelblock', e),
            this.g.vis.get('sequences'))
          ) {
            var n = new o['default']({ model: this.model, g: this.g })
            ;(n.ordering = 0), this.addView('seqblock', n)
          }
          return (
            this.listenTo(
              this.g.zoomer,
              'change:alignmentHeight',
              this.adjustHeight,
            ),
            this.listenTo(
              this.g.zoomer,
              'change:alignmentWidth',
              this.adjustWidth,
            ),
            this.listenTo(this.g.columns, 'change:hidden', this.adjustHeight),
            this
          )
        },
        render: function () {
          return (
            this.renderSubviews(),
            (this.el.className = 'biojs_msa_albody'),
            (this.el.style.whiteSpace = 'nowrap'),
            this.adjustHeight(),
            this.adjustWidth(),
            this
          )
        },
        adjustHeight: function () {
          return 'auto' === this.g.zoomer.get('alignmentHeight')
            ? (this.el.style.height =
                this.g.zoomer.get('rowHeight') * this.model.length + 5)
            : (this.el.style.height = this.g.zoomer.get('alignmentHeight'))
        },
        adjustWidth: function () {
          return (this.el.style.width = this.getWidth())
        },
        getWidth: function () {
          var t = 0
          return (
            (t += this.g.zoomer.getLeftBlockWidth()),
            this.g.vis.get('sequences') &&
              (t += this.g.zoomer.get('alignmentWidth')),
            t
          )
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(8),
      i = n(2),
      o = n(48),
      s = n(5),
      a = i.extend({
        className: 'biojs_msa_overviewbox',
        tagName: 'canvas',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(
              this.g.zoomer,
              'change:boxRectWidth change:boxRectHeight change:overviewboxPaddingTop',
              this.rerender,
            ),
            this.listenTo(this.g.selcol, 'add reset change', this.rerender),
            this.listenTo(this.g.columns, 'change:hidden', this.rerender),
            this.listenTo(
              this.g.colorscheme,
              'change:showLowerCase',
              this.rerender,
            ),
            this.listenTo(this.model, 'change', _.debounce(this.rerender, 5)),
            (this.color = this.g.colorscheme.getSelectedScheme()),
            this.listenTo(this.g.colorscheme, 'change:scheme', function () {
              return (
                (this.color = this.g.colorscheme.getSelectedScheme()),
                this.rerender()
              )
            }),
            (this.dragStart = [])
          )
        },
        events: { click: '_onclick', mousedown: '_onmousedown' },
        rerender: function () {
          if (!this.g.config.get('manualRendering')) return this.render()
        },
        render: function () {
          this._createCanvas(),
            (this.el.textContent = 'overview'),
            (this.el.style.marginTop = this.g.zoomer.get(
              'overviewboxPaddingTop',
            )),
            (this.ctx.fillStyle = '#999999'),
            this.ctx.fillRect(0, 0, this.el.width, this.el.height)
          for (
            var t = this.g.zoomer.get('boxRectWidth'),
              e = this.g.zoomer.get('boxRectHeight'),
              n = this.g.columns.get('hidden'),
              r = this.g.colorscheme.get('showLowerCase'),
              i = -e,
              o = this.model.length,
              s = 0;
            s < o;
            s++
          )
            if (this.model.at(s)) {
              var a = this.model.at(s).get('seq'),
                u = 0
              if (((i += e), this.model.at(s).get('hidden')))
                (this.ctx.fillStyle = 'grey'),
                  this.ctx.fillRect(0, i, a.length * t, e)
              else
                for (var l = 0; l < a.length; l++) {
                  var c = a[l]
                  r && (c = c.toUpperCase())
                  var h = this.color.getColor(c, { pos: l })
                  n.indexOf(l) >= 0 && (h = 'grey'),
                    'undefined' != typeof h &&
                      null !== h &&
                      ((this.ctx.fillStyle = h), this.ctx.fillRect(u, i, t, e)),
                    (u += t)
                }
            }
          return this._drawSelection()
        },
        _drawSelection: function () {
          var t = this
          if (!(this.dragStart.length > 0) || this.prolongSelection) {
            var e = this.g.zoomer.get('boxRectWidth'),
              n = this.g.zoomer.get('boxRectHeight'),
              r = n * this.model.length
            ;(this.ctx.fillStyle = '#666666'), (this.ctx.globalAlpha = 0.9)
            for (
              var i = this.g.selcol.length,
                o = function (i) {
                  var o = t.g.selcol.at(i)
                  if (!o) return 'continue'
                  var s = void 0,
                    a = void 0
                  'column' === o.get('type')
                    ? t.ctx.fillRect(
                        e * o.get('xStart'),
                        0,
                        e * (o.get('xEnd') - o.get('xStart') + 1),
                        r,
                      )
                    : 'row' === o.get('type')
                      ? ((s = t.model.filter(function (t) {
                          return t.get('id') === o.get('seqId')
                        })[0]),
                        (a = t.model.indexOf(s)),
                        t.ctx.fillRect(0, n * a, e * s.get('seq').length, n))
                      : 'pos' === o.get('type') &&
                        ((s = t.model.filter(function (t) {
                          return t.get('id') === o.get('seqId')
                        })[0]),
                        (a = t.model.indexOf(s)),
                        t.ctx.fillRect(
                          e * o.get('xStart'),
                          n * a,
                          e * (o.get('xEnd') - o.get('xStart') + 1),
                          n,
                        ))
                },
                s = 0;
              s < i;
              s++
            )
              o(s)
            return (this.ctx.globalAlpha = 1)
          }
        },
        _onclick: function (t) {
          return this.g.trigger('meta:click', {
            seqId: this.model.get('id', { evt: t }),
          })
        },
        _onmousemove: function (t) {
          if (0 !== this.dragStart.length) {
            this.render(),
              (this.ctx.fillStyle = '#666666'),
              (this.ctx.globalAlpha = 0.9)
            var e = this._calcSelection(o.abs(t))
            return (
              this.ctx.fillRect(
                e[0][0],
                e[1][0],
                e[0][1] - e[0][0],
                e[1][1] - e[1][0],
              ),
              t.preventDefault(),
              t.stopPropagation()
            )
          }
        },
        _onmousedown: function (t) {
          var e = this
          return (
            (this.dragStart = o.abs(t)),
            (this.dragStartRel = o.rel(t)),
            t.ctrlKey || t.metaKey
              ? (this.prolongSelection = !0)
              : (this.prolongSelection = !1),
            s(document.body).on('mousemove.overmove', function (t) {
              return e._onmousemove(t)
            }),
            s(document.body).on('mouseup.overup', function (t) {
              return e._onmouseup(t)
            }),
            this.dragStart
          )
        },
        _calcSelection: function (t) {
          for (
            var e = [t[0] - this.dragStart[0], t[1] - this.dragStart[1]], n = 0;
            n <= 1;
            n++
          )
            e[n] = this.dragStartRel[n] + e[n]
          for (
            var r = [
                [this.dragStartRel[0], e[0]],
                [this.dragStartRel[1], e[1]],
              ],
              i = 0;
            i <= 1;
            i++
          )
            r[i][1] < r[i][0] && (r[i] = [r[i][1], r[i][0]]),
              (r[i][0] = Math.max(r[i][0], 0))
          return r
        },
        _endSelection: function (t) {
          if (
            (s(document.body).off('.overmove'),
            s(document.body).off('.overup'),
            0 !== this.dragStart.length)
          ) {
            for (var e = this._calcSelection(t), n = 0; n <= 1; n++)
              e[0][n] = Math.floor(e[0][n] / this.g.zoomer.get('boxRectWidth'))
            for (var n = 0; n <= 1; n++)
              e[1][n] = Math.floor(e[1][n] / this.g.zoomer.get('boxRectHeight'))
            ;(e[0][1] = Math.min(this.model.getMaxLength() - 1, e[0][1])),
              (e[1][1] = Math.min(this.model.length - 1, e[1][1]))
            for (var i = [], o = e[1][0]; o <= e[1][1]; o++) {
              var a = {
                seqId: this.model.at(o).get('id'),
                xStart: e[0][0],
                xEnd: e[0][1],
              }
              i.push(new r.possel(a))
            }
            return (
              (this.dragStart = []),
              this.prolongSelection
                ? this.g.selcol.add(i)
                : this.g.selcol.reset(i),
              this.g.zoomer.setLeftOffset(e[0][0]),
              this.g.zoomer.setTopOffset(e[1][0])
            )
          }
        },
        _onmouseup: function (t) {
          return this._endSelection(o.abs(t))
        },
        _onmouseout: function (t) {
          return this._endSelection(o.abs(t))
        },
        _createCanvas: function () {
          var t = this.g.zoomer.get('boxRectWidth'),
            e = this.g.zoomer.get('boxRectHeight')
          return (
            (this.el.height = this.model.length * e),
            (this.el.width = this.model.getMaxLength() * t),
            (this.ctx = this.el.getContext('2d')),
            (this.el.style.overflow = 'auto'),
            (this.el.style.cursor = 'crosshair')
          )
        },
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(3),
      i = n(2),
      o = n(5),
      s = i.extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(this.g.zoomer, 'change:columnWidth', this.render),
            (this.toggleClass = 'msa-hide'),
            (this.isVisible = !0),
            this
          )
        },
        attributes: { class: 'biojs_msa_scale' },
        events: {
          'change input': 'updateSlider',
          'click button.msa-btn-close': 'hide',
          'click button.msa-btn-open': 'show',
          'click button[data-action]': 'clickButton',
        },
        template: (0, r.template)(
          '\t<div class="msa-scale-minimised">\t  <button class="btn msa-btn msa-btn-open">Zoom</button>\t</div>\t<div class="msa-scale-maximised">\t  <button class="btn msa-btn msa-btn-close" style="float:right">&times; close</button>\t  <div>\t  <input type="range" \t    data-provide="slider" \t    min="<%= min %>" \t    max="<%= max %>" \t    step="<%= step %>" \t    value="<%= value %>" \t  >\t  </div>\t  <div class="btngroup msa-btngroup">\t    <button class="btn msa-btn" data-action="smaller"><span class="glyphicon-zoom-out"></span>-</button>\t    <button class="btn msa-btn" data-action="bigger"><span class="glyphicon-zoom-in"></span>+</button>\t    <button class="btn msa-btn" data-action="reset"><span class="glyphicon-repeat"></span>reset</button>\t  </div>\t</div>\t',
        ),
        render: function () {
          var t = this.model.getSizeRange(),
            e = {
              value: this.model.getSize(),
              min: t[0],
              max: t[1],
              step: this.model.step || 1,
            }
          return (
            this.$el.html(this.template(e)),
            this.isVisible ? this.show() : this.hide(),
            this
          )
        },
        updateSlider: function (t) {
          var e = t.target,
            n = parseInt(o(e).val())
          this.model.setSize(n)
        },
        clickButton: function (t) {
          var e = t.target,
            n = o(e).data('action')
          return (
            this.model[n],
            'function' == typeof this.model[n] && this.model[n](),
            this
          )
        },
        hide: function () {
          ;(this.isVisible = !1),
            this.$el.find('.msa-scale-minimised').removeClass(this.toggleClass),
            this.$el.find('.msa-scale-maximised').addClass(this.toggleClass)
        },
        show: function () {
          ;(this.isVisible = !1),
            this.$el.find('.msa-scale-minimised').addClass(this.toggleClass),
            this.$el.find('.msa-scale-maximised').removeClass(this.toggleClass)
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(8),
      i = n(4),
      o = n(17),
      s =
        (n(7),
        i.extend({
          initialize: function (t) {
            return (
              (this.g = t.g),
              this.listenTo(this.g.user, 'change:searchText', function (t, e) {
                return this.search(e), this.render()
              }),
              (this.sel = []),
              (this.selPos = 0)
            )
          },
          events: { scroll: '_sendScrollEvent' },
          render: function () {
            this.renderSubviews(),
              (this.el.className = 'biojs_msa_searchresult')
            var t = this.g.user.get('searchText')
            return (
              'undefined' != typeof t &&
                null !== t &&
                t.length > 0 &&
                (0 === this.sel.length
                  ? (this.el.textContent = 'no selection found')
                  : ((this.resultBox = o.mk('div')),
                    (this.resultBox.className = 'biojs_msa_searchresult_ovbox'),
                    this.updateResult(),
                    this.el.appendChild(this.resultBox),
                    this.el.appendChild(this.buildBtns()))),
              this
            )
          },
          updateResult: function () {
            var t = 'search pattern: ' + this.g.user.get('searchText')
            t += ', selection: ' + (this.selPos + 1)
            var e = this.sel[this.selPos]
            return (
              (t += ' ('),
              (t += e.get('xStart') + ' - ' + e.get('xEnd')),
              (t += ', id: ' + e.get('seqId')),
              (t += ')'),
              (this.resultBox.textContent = t)
            )
          },
          buildBtns: function () {
            var t = this,
              e = o.mk('button')
            ;(e.textContent = 'Prev'),
              e.addEventListener('click', function () {
                return t.moveSel(-1)
              })
            var n = o.mk('button')
            ;(n.textContent = 'Next'),
              n.addEventListener('click', function () {
                return t.moveSel(1)
              })
            var r = o.mk('button')
            ;(r.textContent = 'All'),
              r.addEventListener('click', function () {
                return t.g.selcol.reset(t.sel)
              })
            var i = o.mk('div')
            return (
              i.appendChild(e),
              i.appendChild(n),
              i.appendChild(r),
              (i.className = 'biojs_msa_searchresult_row'),
              i
            )
          },
          moveSel: function (t) {
            var e = this.selPos + t
            return e < 0 || e >= this.sel.length
              ? -1
              : (this.focus(e), (this.selPos = e), this.updateResult())
          },
          focus: function (t) {
            var e = this.sel[t],
              n = e.get('xStart')
            return this.g.zoomer.setLeftOffset(n), this.g.selcol.reset([e])
          },
          search: function a(t) {
            var e,
              a = new RegExp(t, 'gi'),
              n = [],
              i = (e = 100042)
            return (
              this.model.each(function (t) {
                var e = t.get('seq')
                return (function () {
                  for (var o, s = []; (o = a.exec(e)); ) {
                    var u = o.index,
                      l = {
                        xStart: u,
                        xEnd: u + o[0].length - 1,
                        seqId: t.get('id'),
                      }
                    n.push(new r.possel(l)), s.push((i = Math.min(u, i)))
                  }
                  return s
                })()
              }),
              this.g.selcol.reset(n),
              i === e && (i = 0),
              this.g.zoomer.setLeftOffset(i),
              (this.sel = n)
            )
          },
        }))
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(3),
      o = n(120),
      s = r(o),
      a = n(132),
      u = r(a),
      l = n(121),
      c = r(l),
      h = n(123),
      f = r(h),
      d = n(122),
      g = r(d),
      p = n(4),
      m = p.extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.draw(),
            this.listenTo(this.g.stats, 'reset', function () {
              return this.rerender()
            }),
            this.listenTo(
              this.model,
              'change:hidden',
              (0, i.debounce)(this.rerender, 10),
            ),
            this.listenTo(this.model, 'sort', this.rerender),
            this.listenTo(this.model, 'add', function () {
              return console.log('seq add')
            }),
            this.listenTo(this.g.vis, 'change:sequences', this.rerender),
            this.listenTo(this.g.vis, 'change:overviewbox', this.rerender),
            this.listenTo(this.g.visorder, 'change', this.rerender),
            this.listenTo(this.g.zoomer, 'change:columnWidth', this.rerender),
            this.listenTo(this.g.vis, 'change:scaleslider', this.rerender),
            this
          )
        },
        draw: function () {
          if ((this.removeViews(), this.g.vis.get('overviewbox'))) {
            var t = new c['default']({ model: this.model, g: this.g })
            ;(t.ordering = this.g.visorder.get('overviewBox')),
              this.addView('overviewBox', t)
          }
          var e = new u['default']({ model: this.model, g: this.g })
          ;(e.ordering = this.g.visorder.get('headerBox')),
            this.addView('headerBox', e)
          var n = new f['default']({ model: this.model, g: this.g })
          ;(n.ordering = this.g.visorder.get('searchBox')),
            this.addView('searchbox', n)
          var r = new s['default']({ model: this.model, g: this.g })
          if (
            ((r.ordering = this.g.visorder.get('alignmentBody')),
            this.addView('body', r),
            this.g.vis.get('scaleslider'))
          ) {
            var i = new g['default']({ model: this.g.scale, g: this.g })
            ;(i.ordering = this.g.visorder.get('scaleSlider')),
              this.addView('scaleSlider', i)
          }
          return this
        },
        render: function (t) {
          return (
            this.renderSubviews(), (this.el.className = 'biojs_msa_stage'), this
          )
        },
        rerender: function () {
          if (!this.g.config.get('manualRendering'))
            return this.draw(), this.render()
        },
      })
    e['default'] = m
  },
  function (t, e, n) {
    'use strict'
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      })(),
      o =
        (n(16),
        (function () {
          function t(e) {
            r(this, t),
              (this.g = e),
              (this.cache = {}),
              (this.cacheHeight = 0),
              (this.cacheWidth = 0)
          }
          return (
            i(t, [
              {
                key: 'getFontTile',
                value: function (t, e, n) {
                  return (
                    (e === this.cacheWidth && n === this.cacheHeight) ||
                      ((this.cacheHeight = n),
                      (this.cacheWidth = e),
                      (this.cache = {})),
                    void 0 === this.cache[t] && this.createTile(t, e, n),
                    this.cache[t]
                  )
                },
              },
              {
                key: 'createTile',
                value: function (t, e, n) {
                  var r = (this.cache[t] = document.createElement('canvas'))
                  return (
                    (r.width = e),
                    (r.height = n),
                    (this.ctx = r.getContext('2d')),
                    (this.ctx.font =
                      this.g.zoomer.get('residueFont') + 'px mono'),
                    (this.ctx.textBaseline = 'middle'),
                    (this.ctx.textAlign = 'center'),
                    this.ctx.fillText(t, e / 2, n / 2, e)
                  )
                },
              },
            ]),
            t
          )
        })())
    e['default'] = o
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(3),
      i = n(16),
      o = {
        setMaxScrollHeight: function () {
          return (this.maxScrollHeight =
            this.g.zoomer.getMaxAlignmentHeight() -
            this.g.zoomer.get('alignmentHeight'))
        },
        setMaxScrollWidth: function () {
          return (this.maxScrollWidth =
            this.g.zoomer.getMaxAlignmentWidth() -
            this.g.zoomer.getAlignmentWidth())
        },
      },
      s = function (t, e) {
        return (
          (this.g = t),
          (this.model = e),
          (this.maxScrollWidth = 0),
          (this.maxScrollHeight = 0),
          this.setMaxScrollHeight(),
          this.setMaxScrollWidth(),
          this.listenTo(
            this.g.zoomer,
            'change:rowHeight',
            this.setMaxScrollHeight,
          ),
          this.listenTo(
            this.g.zoomer,
            'change:columnWidth',
            this.setMaxScrollWidth,
          ),
          this.listenTo(
            this.g.zoomer,
            'change:alignmentWidth',
            this.setMaxScrollWidth,
          ),
          this.listenTo(
            this.g.zoomer,
            'change:alignmentHeight',
            this.setMaxScrollHeight,
          ),
          this.listenTo(
            this.model,
            'add change reset',
            function () {
              return this.setMaxScrollHeight(), this.setMaxScrollWidth()
            },
            this,
          ),
          this
        )
      }
    ;(0, r.extend)(s.prototype, o), i.mixin(s.prototype), (e['default'] = s)
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(3),
      i = function (t, e) {
        return (this.g = t), (this.ctx = e), this
      }
    _.extend(i.prototype, {
      _getSelection: function (t) {
        var e = t.get('seq').length,
          n = [],
          i = this.g.selcol.getSelForRow(t.get('id')),
          o = (0, r.find)(i, function (t) {
            return 'row' === t.get('type')
          })
        if ('undefined' != typeof o && null !== o)
          for (var s = e - 1, a = 0; a <= s; a++) n.push(a)
        else if (i.length > 0)
          for (var u, l = 0; l < i.length; l++) {
            u = i[l]
            for (var c = u.get('xStart'), h = u.get('xEnd'), f = c; f <= h; f++)
              n.push(f)
          }
        return n
      },
      _appendSelection: function (t) {
        var e = this,
          n = t.model.get('seq'),
          r = this._getSelection(t.model),
          i = this._getPrevNextSelection(t.model),
          o = i[0],
          s = i[1]
        if (
          (this.g.zoomer.get('columnWidth'),
          this.g.zoomer.get('rowHeight'),
          0 !== r.length)
        ) {
          var a = 0
          return (function () {
            for (
              var i = [],
                u = n.length - 1,
                l = function (n) {
                  i.push(
                    (function () {
                      if (t.hidden.indexOf(n) >= 0) return a++
                      var i = n - a
                      return r.indexOf(n) >= 0 &&
                        (0 === i || r.indexOf(n - 1) < 0)
                        ? e._renderSelection({
                            n: n,
                            k: i,
                            selection: r,
                            mPrevSel: o,
                            mNextSel: s,
                            xZero: t.xZero,
                            yZero: t.yZero,
                            model: t.model,
                          })
                        : void 0
                    })(),
                  )
                },
                c = 0;
              0 < u ? c <= u : c >= u;
              0 < u ? c++ : c--
            )
              l(c)
            return i
          })()
        }
      },
      _renderSelection: function (t) {
        for (
          var e = t.xZero,
            n = t.yZero,
            r = t.n,
            i = t.k,
            o = t.selection,
            s = t.mPrevSel,
            a = t.mNextSel,
            u = 0,
            l = t.model.get('seq').length - 1,
            c = r;
          (r < l ? c <= l : c >= l) && o.indexOf(c) >= 0;
          r < l ? c++ : c--
        )
          u++
        var h = this.g.zoomer.get('columnWidth'),
          f = this.g.zoomer.get('rowHeight'),
          d = h * u + 1,
          g = this.g.columns.get('hidden')
        this.ctx.beginPath()
        var p = this.ctx.lineWidth
        this.ctx.lineWidth = 3
        var m = this.ctx.strokeStyle
        ;(this.ctx.strokeStyle = '#FF0000'), (e += i * h)
        for (
          var v = 0, _ = u - 1, y = 0;
          0 < _ ? y <= _ : y >= _;
          0 < _ ? y++ : y--
        ) {
          var b = r + y
          g.indexOf(b) >= 0 ||
            (('undefined' != typeof s && null !== s && s.indexOf(b) >= 0) ||
              (this.ctx.moveTo(e + v, n), this.ctx.lineTo(v + h + e, n)),
            ('undefined' != typeof a && null !== a && a.indexOf(b) >= 0) ||
              (this.ctx.moveTo(v + e, f + n),
              this.ctx.lineTo(v + h + e, f + n)),
            (v += h))
        }
        return (
          this.ctx.moveTo(e, n),
          this.ctx.lineTo(e, f + n),
          this.ctx.moveTo(e + d, n),
          this.ctx.lineTo(e + d, f + n),
          this.ctx.stroke(),
          (this.ctx.strokeStyle = m),
          (this.ctx.lineWidth = p)
        )
      },
      _getPrevNextSelection: function (t) {
        var e = t.collection.prev(t),
          n = t.collection.next(t),
          r = void 0,
          i = void 0
        return (
          'undefined' != typeof e && null !== e && (r = this._getSelection(e)),
          'undefined' != typeof n && null !== n && (i = this._getSelection(n)),
          [r, i]
        )
      },
    }),
      (e['default'] = i)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = (function () {
        function t(t, e) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(r = (s = a.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (u) {
            ;(i = !0), (o = u)
          } finally {
            try {
              !r && a['return'] && a['return']()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function (e, n) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e)) return t(e, n)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          )
        }
      })(),
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            },
      s = n(3),
      a = n(125),
      u = r(a),
      l = n(127),
      c = r(l),
      h = n(129),
      f = r(h),
      d = n(126),
      g = r(d),
      p = n(4),
      m = n(48),
      v = n(5),
      y = p.extend({
        tagName: 'canvas',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(
              this.g.zoomer,
              'change:_alignmentScrollLeft change:_alignmentScrollTop',
              function (t, e, n) {
                if (
                  null ==
                    ('undefined' != typeof n && null !== n
                      ? n.origin
                      : void 0) ||
                  'canvasseq' !== n.origin
                )
                  return this.render()
              },
            ),
            this.listenTo(this.g.columns, 'change:hidden', this.render),
            this.listenTo(
              this.g.zoomer,
              'change:alignmentWidth change:alignmentHeight',
              this.render,
            ),
            this.listenTo(this.g.colorscheme, 'change', this.render),
            this.listenTo(this.g.selcol, 'reset add', this.render),
            this.listenTo(this.model, 'reset add', this.render),
            (this.el.style.display = 'inline-block'),
            (this.el.style.overflowX = 'hidden'),
            (this.el.style.overflowY = 'hidden'),
            (this.el.className = 'biojs_msa_seqblock'),
            (this.ctx = this.el.getContext('2d')),
            (this.cache = new u['default'](this.g)),
            (this.coordsCache = new g['default'](this.g, this.model)),
            this.listenTo(this.g.zoomer, 'change:residueFont', function () {
              return (this.cache = new u['default'](this.g)), this.render()
            }),
            (this.sel = new c['default'](this.g, this.ctx)),
            this._setColor(),
            (this.throttleTime = 0),
            (this.throttleCounts = 0),
            null != document.documentElement.style.webkitAppearance
              ? (this.throttledDraw = function () {
                  var t = +new Date()
                  if (
                    (this.draw(),
                    (this.throttleTime += +new Date() - t),
                    this.throttleCounts++,
                    this.throttleCounts > 15)
                  )
                    return (
                      Math.ceil(this.throttleTime / this.throttleCounts),
                      (this.throttledDraw = this.draw)
                    )
                })
              : (this.throttledDraw = (0, s.throttle)(this.throttledDraw, 30)),
            this.manageEvents()
          )
        },
        throttledDraw: function () {
          var t = +new Date()
          if (
            (this.draw(),
            (this.throttleTime += +new Date() - t),
            this.throttleCounts++,
            this.throttleCounts > 15)
          ) {
            var e = Math.ceil(this.throttleTime / this.throttleCounts)
            return (
              (e *= 1.2),
              (e = Math.max(20, e)),
              (this.throttledDraw = _.throttle(this.draw, e))
            )
          }
        },
        manageEvents: function () {
          var t = {}
          return (
            (t.mousedown = '_onmousedown'),
            (t.touchstart = '_ontouchstart'),
            this.g.config.get('registerMouseClicks') &&
              (t.dblclick = '_onclick'),
            this.g.config.get('registerMouseHover') &&
              ((t.mousein = '_onmousein'), (t.mouseout = '_onmouseout')),
            (t.mousewheel = '_onmousewheel'),
            (t.DOMMouseScroll = '_onmousewheel'),
            this.delegateEvents(t),
            this.listenTo(
              this.g.config,
              'change:registerMouseHover',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.config,
              'change:registerMouseClick',
              this.manageEvents,
            ),
            (this.dragStart = [])
          )
        },
        _setColor: function () {
          return (this.color = this.g.colorscheme.getSelectedScheme())
        },
        draw: function () {
          if (
            ((this.el.width = this.el.width),
            null != this.seqDrawer && this.model.length > 0)
          )
            return (
              this.seqDrawer.drawLetters(),
              this.seqDrawer.drawRows(this.sel._appendSelection, this.sel),
              this.seqDrawer.drawRows(this.drawFeatures, this)
            )
        },
        drawFeatures: function (t) {
          var e = this,
            n = this.g.zoomer.get('columnWidth'),
            r = this.g.zoomer.get('rowHeight')
          if (t.model.attributes.height > 1) {
            var i = (function () {
              var i = e.ctx
              return (
                t.model.attributes.features.each(function (e) {
                  i.fillStyle = e.attributes.fillColor || 'red'
                  var o = e.attributes.xEnd - e.attributes.xStart + 1,
                    s = (e.attributes.row + 1) * r
                  return i.fillRect(
                    e.attributes.xStart * n + t.xZero,
                    s + t.yZero,
                    n * o,
                    r,
                  )
                }),
                (i.fillStyle = 'black'),
                (i.font = e.g.zoomer.get('residueFont') + 'px mono'),
                (i.textBaseline = 'middle'),
                (i.textAlign = 'center'),
                {
                  v: t.model.attributes.features.each(function (e) {
                    var o = e.attributes.xEnd - e.attributes.xStart + 1,
                      s = (e.attributes.row + 1) * r
                    return i.fillText(
                      e.attributes.text,
                      t.xZero + e.attributes.xStart * n + (o / 2) * n,
                      t.yZero + 0.5 * r + s,
                    )
                  }),
                }
              )
            })()
            if ('object' === ('undefined' == typeof i ? 'undefined' : o(i)))
              return i.v
          }
        },
        render: function () {
          return (
            this.el.setAttribute(
              'height',
              this.g.zoomer.get('alignmentHeight') + 'px',
            ),
            this.el.setAttribute(
              'width',
              this.g.zoomer.getAlignmentWidth() + 'px',
            ),
            this.g.zoomer._checkScrolling(
              this._checkScrolling([
                this.g.zoomer.get('_alignmentScrollLeft'),
                this.g.zoomer.get('_alignmentScrollTop'),
              ]),
              { header: 'canvasseq' },
            ),
            this._setColor(),
            (this.seqDrawer = new f['default'](this.g, this.ctx, this.model, {
              width: this.el.width,
              height: this.el.height,
              color: this.color,
              cache: this.cache,
            })),
            this.throttledDraw(),
            this
          )
        },
        _onmousemove: function (t, e) {
          if (0 !== this.dragStart.length) {
            var n = m.abs(t),
              r = [n[0] - this.dragStart[0], n[1] - this.dragStart[1]],
              i = this.g.zoomer.get('canvasEventScale')
            e && (i = 3)
            for (var o = 0; o <= 1; o++) r[o] = r[o] * i
            for (
              var s = [
                  this.dragStartScroll[0] - r[0],
                  this.dragStartScroll[1] - r[1],
                ],
                a = 0;
              a <= 1;
              a++
            )
              s[a] = Math.round(s[a])
            var u = this._checkScrolling(s)
            this.g.zoomer._checkScrolling(u, { origin: 'canvasseq' })
            for (var l = 0; l <= 1; l++)
              u[l] !== s[l] &&
                (0 === u[l]
                  ? ((this.dragStart[l] = n[l]), (this.dragStartScroll[l] = 0))
                  : (this.dragStart[l] = n[l] - u[l]))
            return (
              this.throttledDraw(),
              null != t.preventDefault
                ? (t.preventDefault(), t.stopPropagation())
                : void 0
            )
          }
        },
        _ontouchmove: function (t) {
          return (
            this._onmousemove(t.changedTouches[0], !0),
            t.preventDefault(),
            t.stopPropagation()
          )
        },
        _onmousedown: function (t) {
          var e = this
          return (
            (this.dragStart = m.abs(t)),
            (this.dragStartScroll = [
              this.g.zoomer.get('_alignmentScrollLeft'),
              this.g.zoomer.get('_alignmentScrollTop'),
            ]),
            v(document.body).on('mousemove.overmove', function (t) {
              return e._onmousemove(t)
            }),
            v(document.body).on('mouseup.overup', function () {
              return e._cleanup()
            }),
            t.preventDefault()
          )
        },
        _ontouchstart: function (t) {
          var e = this
          return (
            (this.dragStart = m.abs(t.changedTouches[0])),
            (this.dragStartScroll = [
              this.g.zoomer.get('_alignmentScrollLeft'),
              this.g.zoomer.get('_alignmentScrollTop'),
            ]),
            v(document.body).on('touchmove.overtmove', function (t) {
              return e._ontouchmove(t)
            }),
            v(document.body).on(
              'touchend.overtend touchleave.overtleave touchcancel.overtcanel',
              function (t) {
                return e._touchCleanup(t)
              },
            )
          )
        },
        _onmousewinout: function (t) {
          if (t.toElement === document.body.parentNode) return this._cleanup()
        },
        _cleanup: function () {
          return (
            (this.dragStart = []),
            v(document.body).off('.overmove'),
            v(document.body).off('.overup'),
            v(document.body).off('.overout')
          )
        },
        _touchCleanup: function (t) {
          return (
            t.changedTouches.length > 0 &&
              this._onmousemove(t.changedTouches[0], !0),
            (this.dragStart = []),
            v(document.body).off('.overtmove'),
            v(document.body).off('.overtend'),
            v(document.body).off('.overtleave'),
            v(document.body).off('.overtcancel')
          )
        },
        _onmousewheel: function (t) {
          var e = m.wheelDelta(t)
          return (
            this.g.zoomer.set(
              '_alignmentScrollLeft',
              this.g.zoomer.get('_alignmentScrollLeft') + e[0],
            ),
            this.g.zoomer.set(
              '_alignmentScrollTop',
              this.g.zoomer.get('_alignmentScrollTop') + e[1],
            ),
            t.preventDefault()
          )
        },
        _onclick: function (t) {
          var e = this._getClickPos(t)
          return (
            'undefined' != typeof e &&
              null !== e &&
              (null != e.feature
                ? this.g.trigger('feature:click', e)
                : this.g.trigger('residue:click', e)),
            this.throttledDraw()
          )
        },
        _onmousein: function (t) {
          var e = this._getClickPos(t)
          return (
            'undefined' != typeof e &&
              null !== e &&
              (null != e.feature
                ? this.g.trigger('feature:mousein', e)
                : this.g.trigger('residue:mousein', e)),
            this.throttledDraw()
          )
        },
        _onmouseout: function (t) {
          var e = this._getClickPos(t)
          return (
            'undefined' != typeof e &&
              null !== e &&
              (null != e.feature
                ? this.g.trigger('feature:mouseout', e)
                : this.g.trigger('residue:mouseout', e)),
            this.throttledDraw()
          )
        },
        _getClickPos: function (t) {
          var e = m.rel(t)
          e[0] += this.g.zoomer.get('_alignmentScrollLeft')
          var n = Math.floor(e[0] / this.g.zoomer.get('columnWidth')),
            r = this.seqDrawer._getSeqForYClick(e[1]),
            o = i(r, 2),
            s = o[0],
            a = o[1]
          ;(n += this.g.columns.calcHiddenColumns(n)),
            (s += this.model.calcHiddenSeqs(s)),
            (n = Math.max(0, n)),
            (s = Math.max(0, s))
          var u = this.model.at(s).get('id')
          if (!(a > 0)) return { seqId: u, rowPos: n, evt: t }
          var l = this.model
            .at(s)
            .get('features')
            .getFeatureOnRow(a - 1, n)
          return 0 !== l.length
            ? { seqId: u, feature: l[0], rowPos: n, evt: t }
            : void 0
        },
        _checkScrolling: function (t) {
          for (
            var e = [
                this.coordsCache.maxScrollWidth,
                this.coordsCache.maxScrollHeight,
              ],
              n = 0;
            n <= 1;
            n++
          )
            t[n] > e[n] && (t[n] = e[n]), t[n] < 0 && (t[n] = 0)
          return t
        },
      })
    e['default'] = y
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = (function () {
        function t(t, e) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(r = (s = a.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (u) {
            ;(i = !0), (o = u)
          } finally {
            try {
              !r && a['return'] && a['return']()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function (e, n) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e)) return t(e, n)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          )
        }
      })(),
      i = n(3),
      o = {
        updateConfig: function () {
          ;(this.rectWidth = this.g.zoomer.get('columnWidth')),
            (this.rectHeight = this.g.zoomer.get('rowHeight'))
        },
        drawLetters: function () {
          return (
            this.updateConfig(),
            (this.ctx.globalAlpha = this.g.colorscheme.get('opacity')),
            this.drawSeqs(function (t) {
              return this.drawSeq(t, this._drawRect)
            }),
            (this.ctx.globalAlpha = 1),
            this.rectWidth >= this.g.zoomer.get('minLetterDrawSize') &&
              this.drawSeqs(function (t) {
                return this.drawSeq(t, this._drawLetter)
              }),
            this
          )
        },
        drawSeqs: function (t, e) {
          var n = this.g.columns.get('hidden')
          e = e || this
          for (
            var i = this.getStartSeq(), o = r(i, 2), s = o[0], a = o[1], u = s;
            u < this.model.length;
            u++
          ) {
            var l = this.model.at(u)
            if (
              !l.get('hidden') &&
              (t.call(e, { model: l, yPos: a, y: u, hidden: n }),
              (a += (l.attributes.height || 1) * this.rectHeight),
              a > this.height)
            )
              break
          }
        },
        drawRows: function (t, e) {
          return this.drawSeqs(function (n) {
            return this.drawRow(n, t, e)
          })
        },
        drawRow: function (t, e, n) {
          var r = this.g.zoomer.get('columnWidth'),
            i = Math.max(
              0,
              Math.abs(
                Math.ceil(-this.g.zoomer.get('_alignmentScrollLeft') / r),
              ),
            ),
            o = -Math.abs(-this.g.zoomer.get('_alignmentScrollLeft') % r),
            s = o - i * r,
            a = t.yPos
          return e.call(n, {
            model: t.model,
            xZero: s,
            yZero: a,
            hidden: t.hidden,
          })
        },
        getStartSeq: function () {
          for (
            var t =
                Math.max(
                  0,
                  Math.floor(
                    this.g.zoomer.get('_alignmentScrollTop') / this.rectHeight,
                  ),
                ) + 1,
              e = 0,
              n = 0;
            e < t && n < this.model.length;

          )
            (e += this.model.at(n).attributes.height || 1), n++
          return [
            n - 1,
            -Math.max(
              0,
              this.g.zoomer.get('_alignmentScrollTop') -
                e * this.rectHeight +
                (this.model.at(n - 1).attributes.height || 1) * this.rectHeight,
            ),
          ]
        },
        _getSeqForYClick: function (t) {
          for (
            var e = this.getStartSeq(),
              n = r(e, 2),
              i = n[0],
              o = n[1],
              s = o % this.rectHeight,
              a = Math.max(0, Math.floor((t - s) / this.rectHeight)) + 1,
              u = 0,
              l = i;
            u < a && l < this.model.length;

          )
            (u += this.model.at(l).attributes.height || 1), l++
          return [
            l - 1,
            Math.max(
              0,
              Math.floor(t / this.rectHeight) -
                u +
                (this.model.at(l - 1).get('height') || 1),
            ),
          ]
        },
        drawSeq: function (t, e) {
          for (
            var n = t.model.get('seq'),
              r = t.yPos,
              i = this.rectWidth,
              o = this.rectHeight,
              s = Math.max(
                0,
                Math.abs(
                  Math.ceil(-this.g.zoomer.get('_alignmentScrollLeft') / i),
                ),
              ),
              a = -Math.abs(-this.g.zoomer.get('_alignmentScrollLeft') % i),
              u = { rectWidth: i, rectHeight: o, yPos: r, y: t.y },
              l = this.width,
              c = s;
            c < n.length;
            c++
          ) {
            var h = n[c]
            if (
              ((h = h.toUpperCase()),
              (u.x = c),
              (u.c = h),
              (u.xPos = a),
              t.hidden.indexOf(c) < 0 && (e(this, u), (a += i), a > l))
            )
              break
          }
        },
        _drawRect: function (t, e) {
          var n = t.color.getColor(e.c, { pos: e.x, y: e.y })
          if ('undefined' != typeof n && null !== n)
            return (
              (t.ctx.fillStyle = n),
              t.ctx.fillRect(e.xPos, e.yPos, e.rectWidth, e.rectHeight)
            )
        },
        _drawLetter: function (t, e) {
          return t.ctx.drawImage(
            t.cache.getFontTile(e.c, e.rectWidth, e.rectHeight),
            e.xPos,
            e.yPos,
            e.rectWidth,
            e.rectHeight,
          )
        },
      },
      s = function (t, e, n, r) {
        return (
          (this.g = t),
          (this.ctx = e),
          (this.model = n),
          (this.width = r.width),
          (this.height = r.height),
          (this.color = r.color),
          (this.cache = r.cache),
          (this.rectHeight = this.g.zoomer.get('rowHeight')),
          (this.rectWidth = this.g.zoomer.get('columnWidth')),
          this
        )
      }
    ;(0, i.extend)(s.prototype, o), (e['default'] = s)
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (t && t.__esModule) return t
      var e = {}
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return (e['default'] = t), e
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol
                ? 'symbol'
                : typeof t
            },
      o = n(14),
      s = r(o),
      a = n(2),
      u = n(7),
      l = a.extend({
        className: 'biojs_msa_conserv',
        initialize: function (t) {
          ;(this.g = t.g),
            this.listenTo(
              this.g.zoomer,
              'change:stepSize change:labelWidth change:columnWidth',
              this.render,
            ),
            this.listenTo(
              this.g.vis,
              'change:labels change:metacell',
              this.render,
            ),
            this.listenTo(this.g.columns, 'change:scaling', this.render),
            this.listenTo(this.g.stats, 'reset', this.render)
          var e = _.extend(
            {},
            {
              fillColor: ['#660', '#ff0'],
              strokeColor: '#330',
              maxHeight: 20,
              rectStyler: function (t, e) {
                return t
              },
            },
            this.g.conservationConfig,
          )
          return (
            (this.fillColor = e.fillColor),
            (this.strokeColor = e.strokeColor),
            (this.maxHeight = e.maxHeight),
            (this.rectStyler = e.rectStyler),
            this.manageEvents()
          )
        },
        colorer: function c(t) {
          var e = this,
            c = function () {
              return 'none'
            }
          if ('string' == typeof t)
            c = function () {
              return t
            }
          else if (Array.isArray(t)) {
            2 != t.length &&
              console.error(
                'ERROR: colorRange array should have exactly two elements',
                t,
              )
            var n = 'undefined' != typeof d3 && !!d3.scale,
              r = 'undefined' != typeof d3_scale
            n || r
              ? !(function () {
                  var r = n ? d3.scale.linear() : d3_scale.scaleLinear(),
                    i = r.domain([0, e.maxHeight]).range(t)
                  c = function (t) {
                    return i(t.height)
                  }
                })()
              : (console.warn(
                  'providing a [min/max] range as input requires d3 to be included - only using the first color',
                ),
                (c = function (e) {
                  return t[0]
                }))
          } else
            console.warn(
              "expected colorRange to be '#rgb' or ['#rgb', '#rgb']",
              t,
              '(' + ('undefined' == typeof t ? 'undefined' : i(t)) + ')',
            )
          return c
        },
        render: function () {
          var t = this.g.stats.scale(this.g.stats.conservation())
          u.removeAllChilds(this.el)
          var e = this.model.getMaxLength(),
            n = this.g.zoomer.get('columnWidth'),
            r = this.maxHeight,
            i = n * (e - this.g.columns.get('hidden').length),
            o = s.base({ height: r, width: i })
          ;(o.style.display = 'inline-block'), (o.style.cursor = 'pointer')
          for (
            var a = (this.rectData, this.colorer(this.fillColor)),
              l = this.colorer(this.strokeColor),
              c = this.rectStyler,
              h = this.g.zoomer.get('stepSize'),
              f = this.g.columns.get('hidden'),
              d = 0,
              g = 0;
            g < e;

          )
            if (f.indexOf(g) >= 0) g += h
            else {
              i = n * h
              for (
                var p = 0, m = h - 1, v = 0;
                0 < m ? v <= m : v >= m;
                0 < m ? v++ : v--
              )
                p += t[g]
              var _ = r * (p / h),
                y = {
                  x: d,
                  y: r - _,
                  maxheight: r,
                  width: i - n / 4,
                  height: _,
                  rowPos: g,
                },
                b = s.rect(y)
              ;(b.style.stroke = l(y)),
                (b.style.fill = a(y)),
                'function' == typeof c && c(b, y),
                (b.rowPos = g),
                o.appendChild(b),
                (d += i),
                (g += h)
            }
          return this.el.appendChild(o), this
        },
        _onclick: function (t) {
          var e = this,
            n = t.target.rowPos,
            r = this.g.zoomer.get('stepSize')
          return (function () {
            for (
              var i = [], o = r - 1, s = 0;
              0 < o ? s <= o : s >= o;
              0 < o ? s++ : s--
            )
              i.push(e.g.trigger('bar:click', { rowPos: n + s, evt: t }))
            return i
          })()
        },
        manageEvents: function () {
          var t = {}
          return (
            this.g.config.get('registerMouseClicks') && (t.click = '_onclick'),
            this.g.config.get('registerMouseHover') &&
              ((t.mousein = '_onmousein'), (t.mouseout = '_onmouseout')),
            this.delegateEvents(t),
            this.listenTo(
              this.g.config,
              'change:registerMouseHover',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.config,
              'change:registerMouseClick',
              this.manageEvents,
            )
          )
        },
        _onmousein: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos)
          return this.g.trigger('bar:mousein', { rowPos: e, evt: t })
        },
        _onmouseout: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos)
          return this.g.trigger('bar:mouseout', { rowPos: e, evt: t })
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (t && t.__esModule) return t
      var e = {}
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return (e['default'] = t), e
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(14),
      o = r(i),
      s = n(2),
      a = n(7),
      u = s.extend({
        className: 'biojs_msa_gapview',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(
              this.g.zoomer,
              'change:stepSize change:labelWidth change:columnWidth',
              this.render,
            ),
            this.listenTo(
              this.g.vis,
              'change:labels change:metacell',
              this.render,
            ),
            this.listenTo(this.g.columns, 'change:scaling', this.render),
            this.listenTo(this.model, 'reset', this.render),
            this.manageEvents()
          )
        },
        render: function () {
          var t = this.g.stats.gaps()
          a.removeAllChilds(this.el)
          var e = this.model.getMaxLength(),
            n = this.g.zoomer.get('columnWidth'),
            r = 20,
            i = n * (e - this.g.columns.get('hidden').length),
            s = o.base({ height: r, width: i })
          ;(s.style.display = 'inline-block'), (s.style.cursor = 'pointer')
          for (
            var u = this.g.zoomer.get('stepSize'),
              l = this.g.columns.get('hidden'),
              c = 0,
              h = 0;
            h < e;

          )
            if (l.indexOf(h) >= 0) h += u
            else {
              i = n * u
              for (
                var f = 0, d = u - 1, g = 0;
                0 < d ? g <= d : g >= d;
                0 < d ? g++ : g--
              )
                f += t[h]
              var p = r * (f / u),
                m = o.rect({
                  x: c,
                  y: r - p,
                  width: i - n / 4,
                  height: p,
                  style: 'stroke:red;stroke-width:1;',
                })
              ;(m.rowPos = h), s.appendChild(m), (c += i), (h += u)
            }
          return this.el.appendChild(s), this
        },
        _onclick: function (t) {
          var e = this,
            n = t.target.rowPos,
            r = this.g.zoomer.get('stepSize')
          return (function () {
            for (
              var i = [], o = r - 1, s = 0;
              0 < o ? s <= o : s >= o;
              0 < o ? s++ : s--
            )
              i.push(e.g.trigger('gap:click', { rowPos: n + s, evt: t }))
            return i
          })()
        },
        manageEvents: function () {
          var t = {}
          return (
            this.g.config.get('registerMouseClicks') && (t.click = '_onclick'),
            this.g.config.get('registerMouseHover') &&
              ((t.mousein = '_onmousein'), (t.mouseout = '_onmouseout')),
            this.delegateEvents(t),
            this.listenTo(
              this.g.config,
              'change:registerMouseHover',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.config,
              'change:registerMouseClick',
              this.manageEvents,
            )
          )
        },
        _onmousein: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos)
          return this.g.trigger('gap:mousein', { rowPos: e, evt: t })
        },
        _onmouseout: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos)
          return this.g.trigger('gap:mouseout', { rowPos: e, evt: t })
        },
      })
    e['default'] = u
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(133),
      o = r(i),
      s = n(135),
      a = r(s),
      u = n(4),
      l = u.extend({
        initialize: function (t) {
          var e = this
          return (
            (this.g = t.g),
            this.draw(),
            this.listenTo(
              this.g.vis,
              'change:labels change:metacell change:leftHeader',
              function () {
                return e.draw(), e.render()
              },
            )
          )
        },
        draw: function () {
          if (
            (this.removeViews(),
            this.g.vis.get('leftHeader') &&
              (this.g.vis.get('labels') || this.g.vis.get('metacell')))
          ) {
            var t = new o['default']({ model: this.model, g: this.g })
            ;(t.ordering = -50), this.addView('lHeader', t)
          }
          var e = new a['default']({ model: this.model, g: this.g })
          return (e.ordering = 0), this.addView('rHeader', e)
        },
        render: function () {
          return this.renderSubviews(), (this.el.className = 'biojs_msa_header')
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(17),
      i = n(2),
      o = n(7),
      s = i.extend({
        className: 'biojs_msa_headers',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(
              this.g.vis,
              'change:metacell change:labels',
              this.render,
            ),
            this.listenTo(
              this.g.zoomer,
              'change:labelWidth change:metaWidth',
              this.render,
            )
          )
        },
        render: function () {
          o.removeAllChilds(this.el)
          var t = 0
          return (
            (t += this.g.zoomer.getLeftBlockWidth()),
            (this.el.style.width = t + 'px'),
            this.g.vis.get('labels') && this.el.appendChild(this.labelDOM()),
            this.g.vis.get('metacell') && this.el.appendChild(this.metaDOM()),
            (this.el.style.display = 'inline-block'),
            (this.el.style.fontSize = this.g.zoomer.get('markerFontsize')),
            this
          )
        },
        labelDOM: function () {
          var t = r.mk('div')
          if (
            ((t.style.width = this.g.zoomer.getLabelWidth()),
            (t.style.display = 'inline-block'),
            this.g.vis.get('labelCheckbox') &&
              t.appendChild(this.addEl('.', 10)),
            this.g.vis.get('labelId') &&
              t.appendChild(
                this.addEl('ID', this.g.zoomer.get('labelIdLength')),
              ),
            this.g.vis.get('labelPartition') &&
              t.appendChild(this.addEl('part', 15)),
            this.g.vis.get('labelName'))
          ) {
            var e = this.addEl('Label')
            t.appendChild(e)
          }
          return t
        },
        addEl: function (t, e) {
          var n = document.createElement('span')
          return (
            (n.textContent = t),
            'undefined' != typeof e && null !== e && (n.style.width = e + 'px'),
            (n.style.display = 'inline-block'),
            n
          )
        },
        metaDOM: function () {
          var t = r.mk('div')
          return (
            (t.style.width = this.g.zoomer.getMetaWidth()),
            (t.style.display = 'inline-block'),
            this.g.vis.get('metaGaps') &&
              t.appendChild(
                this.addEl('Gaps', this.g.zoomer.get('metaGapWidth')),
              ),
            this.g.vis.get('metaIdentity') &&
              t.appendChild(
                this.addEl('Ident', this.g.zoomer.get('metaIdentWidth')),
              ),
            t
          )
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      if (t && t.__esModule) return t
      var e = {}
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return (e['default'] = t), e
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(14),
      o = r(i),
      s = n(2),
      a = n(7),
      u = n(5),
      l = s.extend({
        className: 'biojs_msa_marker',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(
              this.g.zoomer,
              'change:stepSize change:labelWidth change:columnWidth change:markerStepSize change:markerFontsize',
              this.render,
            ),
            this.listenTo(
              this.g.vis,
              'change:labels change:metacell',
              this.render,
            ),
            this.manageEvents()
          )
        },
        render: function () {
          a.removeAllChilds(this.el)
          var t = this.g.zoomer.get('markerFontsize'),
            e = this.g.zoomer.get('columnWidth'),
            n = this.g.zoomer.get('stepSize'),
            r = this.g.zoomer.get('markerStepSize'),
            i = this.g.columns.get('hidden')
          this.el.style.fontSize = t
          for (
            var o = document.createElement('span'),
              s = 0,
              u = this.model.getMaxLength(),
              s = 0;
            s < u;
            s++
          )
            if (i.indexOf(s) >= 0) this.markerHidden(l, s, n), (s += n)
            else {
              var l = document.createElement('span')
              ;(l.className = 'msa-col-header'),
                (l.style.width = e + 'px'),
                (l.style.display = 'inline-block'),
                (s + 1) % r === 0
                  ? (l.textContent = s + 1)
                  : (s + 1) % n === 0
                    ? (l.textContent = '.')
                    : (l.textContent = ' '),
                (l.rowPos = s),
                o.appendChild(l)
            }
          return this.el.appendChild(o), this
        },
        markerHidden: function (t, e, n) {
          for (
            var r = this,
              i = this.g.columns.get('hidden').slice(0),
              s = Math.max(0, e - n),
              a = !0,
              l = s;
            s < e ? l <= e : l >= e;
            s < e ? l++ : l--
          )
            a &= i.indexOf(l) >= 0
          if (!a) {
            for (
              var c = this.model.getMaxLength(), h = 0, f = -1, e = e;
              (e < c ? e <= c : e >= c) &&
              (f >= 0 || (f = i.indexOf(e)), i.indexOf(e) >= 0);
              e < c ? e++ : e--
            )
              h++
            var d = o.base({ height: 10, width: 10 })
            d.style.position = 'relative'
            var g = o.polygon({
              points: '0,0 5,5 10,0',
              style: 'fill:lime;stroke:purple;stroke-width:1',
            })
            return (
              u(g).on('click', function (t) {
                return i.splice(f, h), r.g.columns.set('hidden', i)
              }),
              d.appendChild(g),
              t.appendChild(d),
              d
            )
          }
        },
        manageEvents: function () {
          var t = {}
          return (
            this.g.config.get('registerMouseClicks') && (t.click = '_onclick'),
            this.g.config.get('registerMouseHover') &&
              ((t.mousein = '_onmousein'), (t.mouseout = '_onmouseout')),
            this.delegateEvents(t),
            this.listenTo(
              this.g.config,
              'change:registerMouseHover',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.config,
              'change:registerMouseClick',
              this.manageEvents,
            )
          )
        },
        _onclick: function (t) {
          var e = t.target.rowPos,
            n = this.g.zoomer.get('stepSize')
          return this.g.trigger('column:click', {
            rowPos: e,
            stepSize: n,
            evt: t,
          })
        },
        _onmousein: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos),
            n = this.g.zoomer.get('stepSize')
          return this.g.trigger('column:mousein', {
            rowPos: e,
            stepSize: n,
            evt: t,
          })
        },
        _onmouseout: function (t) {
          var e = this.g.zoomer.get('stepSize' * t.rowPos),
            n = this.g.zoomer.get('stepSize')
          return this.g.trigger('column:mouseout', {
            rowPos: e,
            stepSize: n,
            evt: t,
          })
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(134),
      o = r(i),
      s = n(130),
      a = r(s),
      u = n(136),
      l = r(u),
      c = n(131),
      h = r(c),
      f = n(4),
      d = f.extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            (this.blockEvents = !1),
            this.listenTo(this.g.vis, 'change:header', function () {
              return this.draw(), this.render()
            }),
            this.listenTo(this.g.vis, 'change', this._setSpacer),
            this.listenTo(
              this.g.zoomer,
              'change:alignmentWidth',
              this._setWidth,
            ),
            this.listenTo(
              this.g.zoomer,
              'change:_alignmentScrollLeft',
              this._adjustScrollingLeft,
            ),
            this.listenTo(this.g.columns, 'change:hidden', function () {
              return this.draw(), this.render()
            }),
            this.draw(),
            this.g.vis.once('change:loaded', this._adjustScrollingLeft, this)
          )
        },
        events: { scroll: '_sendScrollEvent' },
        draw: function () {
          if ((this.removeViews(), this.g.vis.get('conserv'))) {
            var t = new a['default']({ model: this.model, g: this.g })
            ;(t.ordering = -20), this.addView('conserv', t)
          }
          if (this.g.vis.get('markers')) {
            var e = new o['default']({ model: this.model, g: this.g })
            ;(e.ordering = -10), this.addView('marker', e)
          }
          if (this.g.vis.get('seqlogo')) {
            var n = new l['default']({ model: this.model, g: this.g })
            ;(n.ordering = -30), this.addView('seqlogo', n)
          }
          if (this.g.vis.get('gapHeader')) {
            var r = new h['default']({ model: this.model, g: this.g })
            return (r.ordering = -25), this.addView('gapview', r)
          }
        },
        render: function () {
          return (
            this.renderSubviews(),
            this._setSpacer(),
            (this.el.className = 'biojs_msa_rheader'),
            (this.el.style.overflowX = 'auto'),
            (this.el.style.display = 'inline-block'),
            this._setWidth(),
            this._adjustScrollingLeft(),
            this
          )
        },
        _sendScrollEvent: function () {
          return (
            this.blockEvents ||
              this.g.zoomer.set('_alignmentScrollLeft', this.el.scrollLeft, {
                origin: 'header',
              }),
            (this.blockEvents = !1)
          )
        },
        _adjustScrollingLeft: function (t, e, n) {
          if (
            null ==
              ('undefined' != typeof n && null !== n ? n.origin : void 0) ||
            'header' !== n.origin
          ) {
            var r = this.g.zoomer.get('_alignmentScrollLeft')
            return (this.blockEvents = !0), (this.el.scrollLeft = r)
          }
        },
        _setSpacer: function () {
          return (this.el.style.marginLeft = this._getLabelWidth() + 'px')
        },
        _getLabelWidth: function () {
          var t = 0
          return (
            this.g.vis.get('leftHeader') ||
              (t += this.g.zoomer.getLeftBlockWidth()),
            t
          )
        },
        _setWidth: function () {
          return (this.el.style.width =
            this.g.zoomer.getAlignmentWidth() + 'px')
        },
      })
    e['default'] = d
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(67),
      i = n(2),
      o = n(7),
      s = i.extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(this.g.zoomer, 'change:alignmentWidth', this.render),
            this.listenTo(this.g.colorscheme, 'change', function () {
              var t = this.g.colorscheme.getSelectedScheme()
              return this.seqlogo.changeColors(t), this.render()
            }),
            this.listenTo(this.g.zoomer, 'change:columnWidth', function () {
              return (
                (this.seqlogo.column_width = this.g.zoomer.get('columnWidth')),
                this.render()
              )
            }),
            this.listenTo(this.g.stats, 'reset', function () {
              return this.draw(), this.render()
            }),
            this.draw()
          )
        },
        draw: function () {
          o.removeAllChilds(this.el)
          var t = this.g.stats.conservResidue({ scaled: !0 })
          t = _.map(t, function (t) {
            return _.pick(t, function (t, e) {
              return '-' !== e
            })
          })
          var e = { alphabet: 'aa', heightArr: t },
            n = this.g.colorscheme.getSelectedScheme()
          return (this.seqlogo = new r({
            model: this.model,
            g: this.g,
            data: e,
            yaxis: !1,
            scroller: !1,
            xaxis: !1,
            height: 100,
            column_width: this.g.zoomer.get('columnWidth'),
            positionMarker: !1,
            zoom: 1,
            el: this.el,
            colors: n,
          }))
        },
        render: function () {
          return this.seqlogo.render()
        },
      })
    e['default'] = s
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(138),
      o = r(i),
      s = n(4),
      a = s.extend({
        initialize: function (t) {
          var e = this
          return (
            (this.g = t.g),
            this.draw(),
            this.listenTo(
              this.g.zoomer,
              'change:_alignmentScrollTop',
              this._adjustScrollingTop,
            ),
            this.g.vis.once('change:loaded', this._adjustScrollingTop, this),
            this.listenTo(
              this.g.zoomer,
              'change:alignmentHeight',
              this._setHeight,
            ),
            this.listenTo(this.model, 'change:reference', this.draw),
            this.listenTo(this.model, 'reset add remove', function () {
              return e.draw(), e.render()
            })
          )
        },
        draw: function () {
          this.removeViews()
          for (var t = 0; t < this.model.length; t++)
            if (!this.model.at(t).get('hidden')) {
              var e = new o['default']({ model: this.model.at(t), g: this.g })
              ;(e.ordering = t), this.addView('row_' + t, e)
            }
        },
        events: { scroll: '_sendScrollEvent' },
        _sendScrollEvent: function () {
          return this.g.zoomer.set('_alignmentScrollTop', this.el.scrollTop, {
            origin: 'label',
          })
        },
        _adjustScrollingTop: function () {
          return (this.el.scrollTop = this.g.zoomer.get('_alignmentScrollTop'))
        },
        render: function () {
          return (
            this.renderSubviews(),
            (this.el.className = 'biojs_msa_labelblock'),
            (this.el.style.display = 'inline-block'),
            (this.el.style.verticalAlign = 'top'),
            (this.el.style.overflowY = 'auto'),
            (this.el.style.overflowX = 'hidden'),
            (this.el.style.fontSize =
              this.g.zoomer.get('labelFontsize') + 'px'),
            (this.el.style.lineHeight =
              '' + this.g.zoomer.get('labelLineHeight')),
            this._setHeight(),
            this
          )
        },
        _setHeight: function () {
          return (this.el.style.height =
            this.g.zoomer.get('alignmentHeight') + 'px')
        },
      })
    e['default'] = a
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(139),
      o = r(i),
      s = n(140),
      a = r(s),
      u = n(4),
      l = u.extend({
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.draw(),
            this.listenTo(this.g.vis, 'change:labels', this.drawR),
            this.listenTo(this.g.vis, 'change:metacell', this.drawR),
            this.listenTo(this.g.zoomer, 'change:rowHeight', function () {
              return (this.el.style.height =
                this.g.zoomer.get('rowHeight') + 'px')
            }),
            this.listenTo(this.g.selcol, 'change reset add', this.setSelection)
          )
        },
        draw: function () {
          if (
            (this.removeViews(),
            this.g.vis.get('labels') &&
              this.addView(
                'labels',
                new o['default']({ model: this.model, g: this.g }),
              ),
            this.g.vis.get('metacell'))
          ) {
            var t = new a['default']({ model: this.model, g: this.g })
            return this.addView('metacell', t)
          }
        },
        drawR: function () {
          return this.draw(), this.render()
        },
        render: function () {
          return (
            this.renderSubviews(),
            this.el.setAttribute('class', 'biojs_msa_labelrow'),
            (this.el.style.height =
              this.g.zoomer.get('rowHeight') *
                (this.model.attributes.height || 1) +
              'px'),
            this.setSelection(),
            this
          )
        },
        setSelection: function () {
          return this.g.selcol.getSelForRow(this.model.id).length > 0
            ? (this.el.style.fontWeight = 'bold')
            : (this.el.style.fontWeight = 'normal')
        },
      })
    e['default'] = l
  },
  function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(2),
      i = n(7),
      o = r.extend({
        initialize: function (t) {
          return (this.seq = t.seq), (this.g = t.g), this.manageEvents()
        },
        manageEvents: function () {
          var t = {}
          return (
            this.g.config.get('registerMouseClicks') && (t.click = '_onclick'),
            this.g.config.get('registerMouseHover') &&
              ((t.mousein = '_onmousein'), (t.mouseout = '_onmouseout')),
            this.delegateEvents(t),
            this.listenTo(
              this.g.config,
              'change:registerMouseHover',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.config,
              'change:registerMouseClick',
              this.manageEvents,
            ),
            this.listenTo(
              this.g.vis,
              'change:labelName change:labelId change:labelPartition change:labelCheckbox',
              this.render,
            ),
            this.listenTo(
              this.g.zoomer,
              'change:labelIdLength change:labelNameLength change:labelPartLength change:labelCheckLength',
              this.render,
            ),
            this.listenTo(
              this.g.zoomer,
              'change:labelFontSize change:labelLineHeight change:labelWidth change:rowHeight',
              this.render,
            )
          )
        },
        render: function () {
          if (
            (i.removeAllChilds(this.el),
            (this.el.style.width = this.g.zoomer.getLabelWidth() + 'px'),
            this.el.setAttribute('class', 'biojs_msa_labels'),
            this.g.vis.get('labelCheckbox'))
          ) {
            var t = document.createElement('input')
            t.setAttribute('type', 'checkbox'),
              (t.value = this.model.get('id')),
              (t.name = 'seq'),
              (t.style.width = this.g.zoomer.get('labelCheckLength') + 'px'),
              this.el.appendChild(t)
          }
          if (this.g.vis.get('labelId')) {
            var e = document.createElement('span'),
              n = this.model.get('id')
            isNaN(n) || n++,
              (e.textContent = n),
              (e.style.width = this.g.zoomer.get('labelIdLength') + 'px'),
              (e.style.display = 'inline-block'),
              this.el.appendChild(e)
          }
          if (this.g.vis.get('labelPartition')) {
            var r = document.createElement('span')
            ;(r.style.width = this.g.zoomer.get('labelPartLength') + 'px'),
              (r.textContent = this.model.get('partition')),
              (r.style.display = 'inline-block'),
              this.el.appendChild(e),
              this.el.appendChild(r)
          }
          if (this.g.vis.get('labelName')) {
            var o = document.createElement('span')
            ;(o.textContent = this.model.get('name')),
              this.model.get('ref') &&
                this.g.config.get('hasRef') &&
                (o.style.fontWeight = 'bold'),
              (o.style.width = this.g.zoomer.get('labelNameLength') + 'px'),
              this.el.appendChild(o)
          }
          return (
            (this.el.style.overflow = scroll),
            (this.el.style.fontSize =
              this.g.zoomer.get('labelFontsize') + 'px'),
            this
          )
        },
        _onclick: function (t) {
          var e = this.model.get('id')
          return this.g.trigger('row:click', { seqId: e, evt: t })
        },
        _onmousein: function (t) {
          var e = this.model.get('id')
          return this.g.trigger('row:mouseout', { seqId: e, evt: t })
        },
        _onmouseout: function (t) {
          var e = this.model.get('id')
          return this.g.trigger('row:mouseout', { seqId: e, evt: t })
        },
      })
    e['default'] = o
  },
  function (t, e, n) {
    'use strict'
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var i = n(12),
      o = n(6),
      s = r(o),
      a = n(3),
      u = n(2),
      l = n(7),
      c = u.extend({
        className: 'biojs_msa_metaview',
        initialize: function (t) {
          return (
            (this.g = t.g),
            this.listenTo(this.g.vis, 'change:metacell', this.render),
            this.listenTo(this.g.zoomer, 'change:metaWidth', this.render)
          )
        },
        events: {
          click: '_onclick',
          mousein: '_onmousein',
          mouseout: '_onmouseout',
        },
        render: function () {
          l.removeAllChilds(this.el), (this.el.style.display = 'inline-block')
          var t = this.g.zoomer.getMetaWidth()
          if (
            ((this.el.style.width = t - 10),
            (this.el.style.paddingRight = 5),
            (this.el.style.paddingLeft = 5),
            (this.el.style.fontSize =
              this.g.zoomer.get('labelFontsize') - 2 + 'px'),
            this.g.vis.get('metaGaps'))
          ) {
            var e = this.model.get('seq'),
              n = (0, a.reduce)(
                e,
                function (t, e) {
                  return '-' === e ? ++t : void 0
                },
                0,
              )
            n = ((100 * n) / e.length).toFixed(0) + '%'
            var r = document.createElement('span')
            ;(r.textContent = n),
              (r.style.display = 'inline-block'),
              (r.style.width = 35),
              this.el.appendChild(r)
          }
          if (this.g.vis.get('metaIdentity')) {
            var o = this.g.stats.identity()[this.model.id],
              u = document.createElement('span')
            this.model.get('ref') && this.g.config.get('hasRef')
              ? (u.textContent = 'ref.')
              : 'undefined' != typeof o &&
                null !== o &&
                (u.textContent = o.toFixed(2)),
              (u.style.display = 'inline-block'),
              (u.style.width = 40),
              this.el.appendChild(u)
          }
          if (this.g.vis.get('metaLinks') && this.model.attributes.ids) {
            var c = i.seqs.buildLinks(this.model.attributes.ids)
            if (Object.keys(c).length > 0) {
              var h = new s['default']({ name: '↗' })
              c.forEach(function (t, e) {
                return h.addNode(e, function (e) {
                  return window.open(t)
                })
              })
              var f = h.buildDOM()
              return (f.style.cursor = 'pointer'), this.el.appendChild(f)
            }
          }
        },
        _onclick: function (t) {
          return this.g.trigger('meta:click', {
            seqId: this.model.get('id', { evt: t }),
          })
        },
        _onmousein: function (t) {
          return this.g.trigger('meta:mousein', {
            seqId: this.model.get('id', { evt: t }),
          })
        },
        _onmouseout: function (t) {
          return this.g.trigger('meta:mouseout', {
            seqId: this.model.get('id', { evt: t }),
          })
        },
      })
    e['default'] = c
  },
  function (t, e) {
    'use strict'
    function n(t) {
      return t.replace(/^\s*|\s*$/g, '')
    }
    ;(e = t.exports = n),
      (e.left = function (t) {
        return t.replace(/^\s*/, '')
      }),
      (e.right = function (t) {
        return t.replace(/\s*$/, '')
      })
  },
  function (t, e) {
    'use strict'
    function n() {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var n = arguments[e]
        for (var i in n) r.call(n, i) && (t[i] = n[i])
      }
      return t
    }
    t.exports = n
    var r = Object.prototype.hasOwnProperty
  },
  function (t, e, n) {
    ;(e = t.exports = n(81)()),
      e.push([
        t.id,
        ".biojs_msa_stage{cursor:default;line-height:normal;font-family:Helvetica}.biojs_msa_seqblock{cursor:move}.biojs_msa_layer{display:block;white-space:nowrap}.biojs_msa_labels{color:#000;display:inline-block;cursor:pointer;vertical-align:middle;overflow:hidden;text-overflow:clip}.biojs_msa_header,.biojs_msa_labels{white-space:nowrap;text-align:left}.biojs_msa_labelrow:before{content:'';display:inline-block;width:0;height:100%;vertical-align:middle}.biojs_msa_labelrow{height:100%}.biojs_msa_labelblock::-webkit-scrollbar,.biojs_msa_rheader::-webkit-scrollbar{//:none;width:7px;height:7px}.biojs_msa_labelblock::-webkit-scrollbar-thumb,.biojs_msa_rheader::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);box-shadow:0 0 1px hsla(0,0%,100%,.5)}.biojs_msa_marker{color:#999;white-space:nowrap}.biojs_msa_marker .msa-col-header{cursor:pointer;text-align:center}.biojs_msa_marker .msa-col-header:hover{color:red}.smenubar .smenubar_alink{background:#3498db;background-image:-webkit-linear-gradient(top,#3498db,#2980b9);background-image:linear-gradient(180deg,#3498db,#2980b9);border-radius:28px;font-family:Arial;color:#fff;padding:3px 10px;margin-left:10px;text-decoration:none}.smenubar{display:inline-block}.smenubar .smenubar_alink:hover{cursor:pointer}.smenu-dropdown{position:absolute;z-index:9999999;display:none}.smenu-dropdown .smenu-dropdown-menu,.smenu-dropdown .smenu-dropdown-panel{min-width:160px;max-width:360px;list-style:none;background:#fff;border:1px solid #ddd;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);overflow:visible;padding:4px 0;margin:0}.smenu-dropdown .smenu-dropdown-panel{padding:10px}.smenu-dropdown.smenu-dropdown-scroll .smenu-dropdown-menu,.smenu-dropdown.smenu-dropdown-scroll .smenu-dropdown-panel{max-height:358px;overflow:auto}.smenu-dropdown .smenu-dropdown-menu LI{list-style:none;padding:0;margin:0;line-height:18px}.smenu-dropdown .smenu-dropdown-menu LABEL,.smenu-dropdown .smenu-dropdown-menu LI{display:block;color:#555;text-decoration:none;line-height:18px;padding:3px 15px;white-space:nowrap}.smenu-dropdown .smenu-dropdown-menu LABEL:hover,.smenu-dropdown .smenu-dropdown-menu LI:hover{background-color:#08c;color:#fff;cursor:pointer}.smenu-dropdown .smenu-dropdown-menu .smenu-dropdown-divider{font-size:1px;border-top:1px solid #e5e5e5;padding:0;margin:5px 0}.biojs_msa_div{position:relative}.biojs_msa_scale{position:absolute;bottom:0;right:0;background-color:#fff;box-shadow:0 2px 3px #999;border-radius:3px;margin:5px 0 0 auto;padding:5px;text-align:center}.biojs_msa_scale .msa-btngroup{margin:5px auto 0}.biojs_msa_scale [type=range]{cursor:pointer}.biojs_msa_scale .msa-btn-close{text-align:right;font-size:.8em;padding:2px}.biojs_msa_scale .msa-btn-open{background-color:#fff}.biojs_msa_scale .msa-hide{display:none}.msa-btn{cursor:pointer;font-size:1.1em;display:inline-block;padding:2px 8px;margin-bottom:0;border:1px solid transparent;border-radius:4px;box-sizing:border-box}.msa-btn:hover{background-color:#ddd}",
        '',
      ])
  },
  function (t, e, n) {
    function r(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = d[r.id]
        if (i) {
          i.refs++
          for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o])
          for (; o < r.parts.length; o++) i.parts.push(l(r.parts[o], e))
        } else {
          for (var s = [], o = 0; o < r.parts.length; o++)
            s.push(l(r.parts[o], e))
          d[r.id] = { id: r.id, refs: 1, parts: s }
        }
      }
    }
    function i(t) {
      for (var e = [], n = {}, r = 0; r < t.length; r++) {
        var i = t[r],
          o = i[0],
          s = i[1],
          a = i[2],
          u = i[3],
          l = { css: s, media: a, sourceMap: u }
        n[o] ? n[o].parts.push(l) : e.push((n[o] = { id: o, parts: [l] }))
      }
      return e
    }
    function o(t, e) {
      var n = m(),
        r = y[y.length - 1]
      if ('top' === t.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(e, r.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          y.push(e)
      else {
        if ('bottom' !== t.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.",
          )
        n.appendChild(e)
      }
    }
    function s(t) {
      t.parentNode.removeChild(t)
      var e = y.indexOf(t)
      e >= 0 && y.splice(e, 1)
    }
    function a(t) {
      var e = document.createElement('style')
      return (e.type = 'text/css'), o(t, e), e
    }
    function u(t) {
      var e = document.createElement('link')
      return (e.rel = 'stylesheet'), o(t, e), e
    }
    function l(t, e) {
      var n, r, i
      if (e.singleton) {
        var o = _++
        ;(n = v || (v = a(e))),
          (r = c.bind(null, n, o, !1)),
          (i = c.bind(null, n, o, !0))
      } else
        t.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = u(e)),
            (r = f.bind(null, n)),
            (i = function () {
              s(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = a(e)),
            (r = h.bind(null, n)),
            (i = function () {
              s(n)
            }))
      return (
        r(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return
            r((t = e))
          } else i()
        }
      )
    }
    function c(t, e, n, r) {
      var i = n ? '' : r.css
      if (t.styleSheet) t.styleSheet.cssText = b(e, i)
      else {
        var o = document.createTextNode(i),
          s = t.childNodes
        s[e] && t.removeChild(s[e]),
          s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
      }
    }
    function h(t, e) {
      var n = e.css,
        r = e.media
      if ((r && t.setAttribute('media', r), t.styleSheet))
        t.styleSheet.cssText = n
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild)
        t.appendChild(document.createTextNode(n))
      }
    }
    function f(t, e) {
      var n = e.css,
        r = e.sourceMap
      r &&
        (n +=
          '\n/*# sourceMappingURL=data:application/json;base64,' +
          btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
          ' */')
      var i = new Blob([n], { type: 'text/css' }),
        o = t.href
      ;(t.href = URL.createObjectURL(i)), o && URL.revokeObjectURL(o)
    }
    var d = {},
      g = function (t) {
        var e
        return function () {
          return 'undefined' == typeof e && (e = t.apply(this, arguments)), e
        }
      },
      p = g(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      }),
      m = g(function () {
        return document.head || document.getElementsByTagName('head')[0]
      }),
      v = null,
      _ = 0,
      y = []
    t.exports = function (t, e) {
      ;(e = e || {}),
        'undefined' == typeof e.singleton && (e.singleton = p()),
        'undefined' == typeof e.insertAt && (e.insertAt = 'bottom')
      var n = i(t)
      return (
        r(n, e),
        function (t) {
          for (var o = [], s = 0; s < n.length; s++) {
            var a = n[s],
              u = d[a.id]
            u.refs--, o.push(u)
          }
          t && r(i(t), e)
          for (var s = 0; s < o.length; s++) {
            var u = o[s]
            if (0 === u.refs) {
              for (var l = 0; l < u.parts.length; l++) u.parts[l]()
              delete d[u.id]
            }
          }
        }
      )
    }
    var b = (function () {
      var t = []
      return function (e, n) {
        return (t[e] = n), t.filter(Boolean).join('\n')
      }
    })()
  },
  function (t, e, n) {
    var r = n(143)
    'string' == typeof r && (r = [[t.id, r, '']]),
      n(144)(r, {}),
      r.locals && (t.exports = r.locals)
  },
  function (t, e, n) {
    function r(t) {
      return n(i(t))
    }
    function i(t) {
      return (
        o[t] ||
        (function () {
          throw new Error("Cannot find module '" + t + "'.")
        })()
      )
    }
    var o = {
      './StageScale': 26,
      './StageScale.js': 26,
      './colorscheme': 27,
      './colorscheme.js': 27,
      './columns': 28,
      './columns.js': 28,
      './config': 29,
      './config.js': 29,
      './package': 30,
      './package.js': 30,
      './selection/Selection': 8,
      './selection/Selection.js': 8,
      './selection/SelectionCol': 9,
      './selection/SelectionCol.js': 9,
      './selection/index': 50,
      './selection/index.js': 50,
      './user': 31,
      './user.js': 31,
      './visOrdering': 32,
      './visOrdering.js': 32,
      './visibility': 33,
      './visibility.js': 33,
      './zoomer': 34,
      './zoomer.js': 34,
    }
    ;(r.keys = function () {
      return Object.keys(o)
    }),
      (r.resolve = i),
      (t.exports = r),
      (r.id = 146)
  },
  function (t, e, n) {
    function r(t) {
      return n(i(t))
    }
    function i(t) {
      return (
        o[t] ||
        (function () {
          throw new Error("Cannot find module '" + t + "'.")
        })()
      )
    }
    var o = {
      './bmath': 18,
      './bmath.js': 18,
      './exporter': 19,
      './exporter.js': 19,
      './file': 20,
      './file.js': 20,
      './index': 38,
      './index.js': 38,
      './loader': 21,
      './loader.js': 21,
      './proxy': 22,
      './proxy.js': 22,
      './recognize': 39,
      './recognize.js': 39,
      './seqgen': 40,
      './seqgen.js': 40,
      './svg': 14,
      './svg.js': 14,
      './tree': 41,
      './tree.js': 41,
    }
    ;(r.keys = function () {
      return Object.keys(o)
    }),
      (r.resolve = i),
      (t.exports = r),
      (r.id = 147)
  },
])
//# sourceMappingURL=msa.js.map

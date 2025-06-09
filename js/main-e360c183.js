(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll("link[rel=\"modulepreload\"]")) s(r);
  new MutationObserver(r => {
    for (const n of r) {
      if (n.type === "childList") {
        for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
      }
    }
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? n.credentials = "include"
        : r.crossOrigin === "anonymous"
        ? n.credentials = "omit"
        : n.credentials = "same-origin",
      n;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".loader").classList.remove("hidden"),
    document.body.style.overflow = "hidden",
    setTimeout(function() {
      document.querySelector(".loader").classList.add("hidden"), document.body.style.overflow = "";
    }, 2e3);
});
document.addEventListener("DOMContentLoaded", function() {
  const i = document.getElementById("menu-toggle"),
    e = document.getElementById("mobile-menu"),
    t = document.getElementById("menu-icon"),
    s = document.getElementById("close-icon"),
    r = document.querySelectorAll(".dropdown-btn"),
    n = document.getElementById("showSearch"),
    a = document.getElementById("searchBar"),
    l = document.getElementById("closeSearch");
  function o() {
    e.classList.toggle("translate-x-full"),
      e.classList.toggle("open"),
      t.classList.toggle("hidden"),
      s.classList.toggle("hidden"),
      document.body.classList.toggle("overflow-hidden");
  }
  i.addEventListener("click", o),
    r.forEach(c => {
      c.addEventListener("click", function(u) {
        u.preventDefault();
        const f = this.nextElementSibling, h = this.querySelector("i");
        f.classList.contains("opacity-0")
          ? (f.classList.remove("opacity-0", "max-h-0", "overflow-hidden", "-translate-y-4", "py-0"),
            f.classList.add("opacity-100", "max-h-[500px]", "translate-y-0", "py-2"),
            h.classList.remove("ri-add-line"),
            h.classList.add("ri-subtract-fill"))
          : (f.classList.add("opacity-0", "max-h-0", "overflow-hidden", "-translate-y-4", "py-0"),
            f.classList.remove("opacity-100", "max-h-[500px]", "translate-y-0", "py-2"),
            h.classList.add("ri-add-line"),
            h.classList.remove("ri-subtract-fill"));
      });
    }),
    document.addEventListener("click", function(c) {
      !e.contains(c.target) && !i.contains(c.target)
        && (e.classList.add("translate-x-full"),
          e.classList.remove("open"),
          t.classList.remove("hidden"),
          s.classList.add("hidden"),
          document.body.classList.remove("overflow-hidden"));
    }),
    window.addEventListener("resize", function() {
      window.innerWidth >= 1024
        && (e.classList.add("translate-x-full"),
          t.classList.remove("hidden"),
          s.classList.add("hidden"),
          document.body.classList.remove("overflow-hidden"));
    }),
    a && n && l && (a.addEventListener("click", () => {
      n.classList.remove("translate-y-full");
    }),
      l.addEventListener("click", () => {
        n.classList.add("translate-y-full");
      }));
});
const Re = document.getElementById("searchBar"),
  We = document.getElementById("closeSearch"),
  ce = document.getElementById("showSearch");
Re.addEventListener("click", () => {
  ce.classList.remove("translate-y-full"), ce.classList.add("translate-y-0"), document.body.style.overflow = "hidden";
});
We.addEventListener("click", () => {
  ce.classList.remove("translate-y-0"), ce.classList.add("translate-y-full"), document.body.style.overflow = "";
});
var Ye = typeof globalThis < "u"
  ? globalThis
  : typeof window < "u"
  ? window
  : typeof global < "u"
  ? global
  : typeof self < "u"
  ? self
  : {};
function Xe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ge = { exports: {} };
(function(i, e) {
  (function(t, s) {
    i.exports = s();
  })(Ye, function() {
    return function(t) {
      function s(n) {
        if (r[n]) return r[n].exports;
        var a = r[n] = { exports: {}, id: n, loaded: !1 };
        return t[n].call(a.exports, a, a.exports, s), a.loaded = !0, a.exports;
      }
      var r = {};
      return s.m = t, s.c = r, s.p = "dist/", s(0);
    }([
      function(t, s, r) {
        function n(T) {
          return T && T.__esModule ? T : { default: T };
        }
        var a = Object.assign || function(T) {
            for (var I = 1; I < arguments.length; I++) {
              var z = arguments[I];
              for (var q in z) Object.prototype.hasOwnProperty.call(z, q) && (T[q] = z[q]);
            }
            return T;
          },
          l = r(1),
          o = (n(l), r(6)),
          c = n(o),
          u = r(7),
          f = n(u),
          h = r(8),
          p = n(h),
          g = r(9),
          b = n(g),
          E = r(10),
          d = n(E),
          m = r(11),
          v = n(m),
          x = r(14),
          M = n(x),
          L = [],
          G = !1,
          C = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          O = function() {
            var T = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (T && (G = !0), G) return L = (0, v.default)(L, C), (0, d.default)(L, C.once), L;
          },
          P = function() {
            L = (0, M.default)(), O();
          },
          y = function() {
            L.forEach(function(T, I) {
              T.node.removeAttribute("data-aos"),
                T.node.removeAttribute("data-aos-easing"),
                T.node.removeAttribute("data-aos-duration"),
                T.node.removeAttribute("data-aos-delay");
            });
          },
          w = function(T) {
            return T === !0 || T === "mobile" && b.default.mobile() || T === "phone" && b.default.phone()
              || T === "tablet" && b.default.tablet() || typeof T == "function" && T() === !0;
          },
          S = function(T) {
            C = a(C, T), L = (0, M.default)();
            var I = document.all && !window.atob;
            return w(C.disable) || I ? y() : (C.disableMutationObserver || p.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
              C.disableMutationObserver = !0),
              document.querySelector("body").setAttribute("data-aos-easing", C.easing),
              document.querySelector("body").setAttribute("data-aos-duration", C.duration),
              document.querySelector("body").setAttribute("data-aos-delay", C.delay),
              C.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1
                ? O(!0)
                : C.startEvent === "load"
                ? window.addEventListener(C.startEvent, function() {
                  O(!0);
                })
                : document.addEventListener(C.startEvent, function() {
                  O(!0);
                }),
              window.addEventListener("resize", (0, f.default)(O, C.debounceDelay, !0)),
              window.addEventListener("orientationchange", (0, f.default)(O, C.debounceDelay, !0)),
              window.addEventListener(
                "scroll",
                (0, c.default)(function() {
                  (0, d.default)(L, C.once);
                }, C.throttleDelay),
              ),
              C.disableMutationObserver || p.default.ready("[data-aos]", P),
              L);
          };
        t.exports = { init: S, refresh: O, refreshHard: P };
      },
      function(t, s) {},
      ,
      ,
      ,
      ,
      function(t, s) {
        (function(r) {
          function n(w, S, T) {
            function I(k) {
              var _ = H, ee = X;
              return H = X = void 0, Q = k, $ = w.apply(ee, _);
            }
            function z(k) {
              return Q = k, B = setTimeout(W, S), Z ? I(k) : $;
            }
            function q(k) {
              var _ = k - N, ee = k - Q, Ie = S - _;
              return J ? P(Ie, K - ee) : Ie;
            }
            function R(k) {
              var _ = k - N, ee = k - Q;
              return N === void 0 || _ >= S || _ < 0 || J && ee >= K;
            }
            function W() {
              var k = y();
              return R(k) ? ie(k) : void (B = setTimeout(W, q(k)));
            }
            function ie(k) {
              return B = void 0, A && H ? I(k) : (H = X = void 0, $);
            }
            function re() {
              B !== void 0 && clearTimeout(B),
                Q = 0,
                H =
                  N =
                  X =
                  B =
                    void 0;
            }
            function se() {
              return B === void 0 ? $ : ie(y());
            }
            function Y() {
              var k = y(), _ = R(k);
              if (H = arguments, X = this, N = k, _) {
                if (B === void 0) return z(N);
                if (J) return B = setTimeout(W, S), I(N);
              }
              return B === void 0 && (B = setTimeout(W, S)), $;
            }
            var H, X, K, $, B, N, Q = 0, Z = !1, J = !1, A = !0;
            if (typeof w != "function") throw new TypeError(h);
            return S = u(S) || 0,
              l(T)
              && (Z = !!T.leading,
                J = "maxWait" in T,
                K = J ? O(u(T.maxWait) || 0, S) : K,
                A = "trailing" in T ? !!T.trailing : A),
              Y.cancel = re,
              Y.flush = se,
              Y;
          }
          function a(w, S, T) {
            var I = !0, z = !0;
            if (typeof w != "function") throw new TypeError(h);
            return l(T) && (I = "leading" in T ? !!T.leading : I, z = "trailing" in T ? !!T.trailing : z),
              n(w, S, { leading: I, maxWait: S, trailing: z });
          }
          function l(w) {
            var S = typeof w > "u" ? "undefined" : f(w);
            return !!w && (S == "object" || S == "function");
          }
          function o(w) {
            return !!w && (typeof w > "u" ? "undefined" : f(w)) == "object";
          }
          function c(w) {
            return (typeof w > "u" ? "undefined" : f(w)) == "symbol" || o(w) && C.call(w) == g;
          }
          function u(w) {
            if (typeof w == "number") return w;
            if (c(w)) return p;
            if (l(w)) {
              var S = typeof w.valueOf == "function" ? w.valueOf() : w;
              w = l(S) ? S + "" : S;
            }
            if (typeof w != "string") return w === 0 ? w : +w;
            w = w.replace(b, "");
            var T = d.test(w);
            return T || m.test(w) ? v(w.slice(2), T ? 2 : 8) : E.test(w) ? p : +w;
          }
          var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function(w) {
                return typeof w;
              }
              : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype
                  ? "symbol"
                  : typeof w;
              },
            h = "Expected a function",
            p = NaN,
            g = "[object Symbol]",
            b = /^\s+|\s+$/g,
            E = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            v = parseInt,
            x = (typeof r > "u" ? "undefined" : f(r)) == "object" && r && r.Object === Object && r,
            M = (typeof self > "u" ? "undefined" : f(self)) == "object" && self && self.Object === Object && self,
            L = x || M || Function("return this")(),
            G = Object.prototype,
            C = G.toString,
            O = Math.max,
            P = Math.min,
            y = function() {
              return L.Date.now();
            };
          t.exports = a;
        }).call(
          s,
          function() {
            return this;
          }(),
        );
      },
      function(t, s) {
        (function(r) {
          function n(y, w, S) {
            function T(A) {
              var k = Y, _ = H;
              return Y = H = void 0, N = A, K = y.apply(_, k);
            }
            function I(A) {
              return N = A, $ = setTimeout(R, w), Q ? T(A) : K;
            }
            function z(A) {
              var k = A - B, _ = A - N, ee = w - k;
              return Z ? O(ee, X - _) : ee;
            }
            function q(A) {
              var k = A - B, _ = A - N;
              return B === void 0 || k >= w || k < 0 || Z && _ >= X;
            }
            function R() {
              var A = P();
              return q(A) ? W(A) : void ($ = setTimeout(R, z(A)));
            }
            function W(A) {
              return $ = void 0, J && Y ? T(A) : (Y = H = void 0, K);
            }
            function ie() {
              $ !== void 0 && clearTimeout($),
                N = 0,
                Y =
                  B =
                  H =
                  $ =
                    void 0;
            }
            function re() {
              return $ === void 0 ? K : W(P());
            }
            function se() {
              var A = P(), k = q(A);
              if (Y = arguments, H = this, B = A, k) {
                if ($ === void 0) return I(B);
                if (Z) return $ = setTimeout(R, w), T(B);
              }
              return $ === void 0 && ($ = setTimeout(R, w)), K;
            }
            var Y, H, X, K, $, B, N = 0, Q = !1, Z = !1, J = !0;
            if (typeof y != "function") throw new TypeError(f);
            return w = c(w) || 0,
              a(S)
              && (Q = !!S.leading,
                Z = "maxWait" in S,
                X = Z ? C(c(S.maxWait) || 0, w) : X,
                J = "trailing" in S ? !!S.trailing : J),
              se.cancel = ie,
              se.flush = re,
              se;
          }
          function a(y) {
            var w = typeof y > "u" ? "undefined" : u(y);
            return !!y && (w == "object" || w == "function");
          }
          function l(y) {
            return !!y && (typeof y > "u" ? "undefined" : u(y)) == "object";
          }
          function o(y) {
            return (typeof y > "u" ? "undefined" : u(y)) == "symbol" || l(y) && G.call(y) == p;
          }
          function c(y) {
            if (typeof y == "number") return y;
            if (o(y)) return h;
            if (a(y)) {
              var w = typeof y.valueOf == "function" ? y.valueOf() : y;
              y = a(w) ? w + "" : w;
            }
            if (typeof y != "string") return y === 0 ? y : +y;
            y = y.replace(g, "");
            var S = E.test(y);
            return S || d.test(y) ? m(y.slice(2), S ? 2 : 8) : b.test(y) ? h : +y;
          }
          var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function(y) {
                return typeof y;
              }
              : function(y) {
                return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              },
            f = "Expected a function",
            h = NaN,
            p = "[object Symbol]",
            g = /^\s+|\s+$/g,
            b = /^[-+]0x[0-9a-f]+$/i,
            E = /^0b[01]+$/i,
            d = /^0o[0-7]+$/i,
            m = parseInt,
            v = (typeof r > "u" ? "undefined" : u(r)) == "object" && r && r.Object === Object && r,
            x = (typeof self > "u" ? "undefined" : u(self)) == "object" && self && self.Object === Object && self,
            M = v || x || Function("return this")(),
            L = Object.prototype,
            G = L.toString,
            C = Math.max,
            O = Math.min,
            P = function() {
              return M.Date.now();
            };
          t.exports = n;
        }).call(
          s,
          function() {
            return this;
          }(),
        );
      },
      function(t, s) {
        function r(u) {
          var f = void 0, h = void 0;
          for (f = 0; f < u.length; f += 1) {
            if (h = u[f], h.dataset && h.dataset.aos || h.children && r(h.children)) return !0;
          }
          return !1;
        }
        function n() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function a() {
          return !!n();
        }
        function l(u, f) {
          var h = window.document, p = n(), g = new p(o);
          c = f, g.observe(h.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
        }
        function o(u) {
          u && u.forEach(function(f) {
            var h = Array.prototype.slice.call(f.addedNodes),
              p = Array.prototype.slice.call(f.removedNodes),
              g = h.concat(p);
            if (r(g)) return c();
          });
        }
        Object.defineProperty(s, "__esModule", { value: !0 });
        var c = function() {};
        s.default = { isSupported: a, ready: l };
      },
      function(t, s) {
        function r(h, p) {
          if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
        }
        function n() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(s, "__esModule", { value: !0 });
        var a = function() {
            function h(p, g) {
              for (var b = 0; b < g.length; b++) {
                var E = g[b];
                E.enumerable = E.enumerable || !1,
                  E.configurable = !0,
                  "value" in E && (E.writable = !0),
                  Object.defineProperty(p, E.key, E);
              }
            }
            return function(p, g, b) {
              return g && h(p.prototype, g), b && h(p, b), p;
            };
          }(),
          l =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          o =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          u =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          f = function() {
            function h() {
              r(this, h);
            }
            return a(h, [{
              key: "phone",
              value: function() {
                var p = n();
                return !(!l.test(p) && !o.test(p.substr(0, 4)));
              },
            }, {
              key: "mobile",
              value: function() {
                var p = n();
                return !(!c.test(p) && !u.test(p.substr(0, 4)));
              },
            }, {
              key: "tablet",
              value: function() {
                return this.mobile() && !this.phone();
              },
            }]),
              h;
          }();
        s.default = new f();
      },
      function(t, s) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var r = function(a, l, o) {
            var c = a.node.getAttribute("data-aos-once");
            l > a.position
              ? a.node.classList.add("aos-animate")
              : typeof c < "u" && (c === "false" || !o && c !== "true") && a.node.classList.remove("aos-animate");
          },
          n = function(a, l) {
            var o = window.pageYOffset, c = window.innerHeight;
            a.forEach(function(u, f) {
              r(u, c + o, l);
            });
          };
        s.default = n;
      },
      function(t, s, r) {
        function n(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(s, "__esModule", { value: !0 });
        var a = r(12),
          l = n(a),
          o = function(c, u) {
            return c.forEach(function(f, h) {
              f.node.classList.add("aos-init"), f.position = (0, l.default)(f.node, u.offset);
            }),
              c;
          };
        s.default = o;
      },
      function(t, s, r) {
        function n(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(s, "__esModule", { value: !0 });
        var a = r(13),
          l = n(a),
          o = function(c, u) {
            var f = 0,
              h = 0,
              p = window.innerHeight,
              g = {
                offset: c.getAttribute("data-aos-offset"),
                anchor: c.getAttribute("data-aos-anchor"),
                anchorPlacement: c.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              g.offset && !isNaN(g.offset) && (h = parseInt(g.offset)),
                g.anchor && document.querySelectorAll(g.anchor) && (c = document.querySelectorAll(g.anchor)[0]),
                f = (0, l.default)(c).top,
                g.anchorPlacement
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                f += c.offsetHeight / 2;
                break;
              case "bottom-bottom":
                f += c.offsetHeight;
                break;
              case "top-center":
                f += p / 2;
                break;
              case "bottom-center":
                f += p / 2 + c.offsetHeight;
                break;
              case "center-center":
                f += p / 2 + c.offsetHeight / 2;
                break;
              case "top-top":
                f += p;
                break;
              case "bottom-top":
                f += c.offsetHeight + p;
                break;
              case "center-top":
                f += c.offsetHeight / 2 + p;
            }
            return g.anchorPlacement || g.offset || isNaN(u) || (h = u), f + h;
          };
        s.default = o;
      },
      function(t, s) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var r = function(n) {
          for (
            var a = 0, l = 0; n && !isNaN(n.offsetLeft) && !isNaN(n.offsetTop);
          ) {
            a += n.offsetLeft - (n.tagName != "BODY" ? n.scrollLeft : 0),
              l += n.offsetTop - (n.tagName != "BODY" ? n.scrollTop : 0),
              n = n.offsetParent;
          }
          return { top: l, left: a };
        };
        s.default = r;
      },
      function(t, s) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var r = function(n) {
          return n = n || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(n, function(a) {
              return { node: a };
            });
        };
        s.default = r;
      },
    ]);
  });
})(Ge);
var Ke = Ge.exports;
const Ue = Xe(Ke);
function Oe(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
}
function Le(i, e) {
  i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t => {
      typeof i[t] > "u" ? i[t] = e[t] : Oe(e[t]) && Oe(i[t]) && Object.keys(e[t]).length > 0 && Le(i[t], e[t]);
    });
}
const Ve = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function ne() {
  const i = typeof document < "u" ? document : {};
  return Le(i, Ve), i;
}
const Je = {
  document: Ve,
  navigator: { userAgent: "" },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  },
};
function j() {
  const i = typeof window < "u" ? window : {};
  return Le(i, Je), i;
}
function Qe(i) {
  return i === void 0 && (i = ""), i.trim().split(" ").filter(e => !!e.trim());
}
function Ze(i) {
  const e = i;
  Object.keys(e).forEach(t => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function Pe(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e);
}
function fe() {
  return Date.now();
}
function et(i) {
  const e = j();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t;
}
function tt(i, e) {
  e === void 0 && (e = "x");
  const t = j();
  let s, r, n;
  const a = et(i);
  return t.WebKitCSSMatrix
    ? (r = a.transform || a.webkitTransform,
      r.split(",").length > 6 && (r = r.split(", ").map(l => l.replace(",", ".")).join(", ")),
      n = new t.WebKitCSSMatrix(r === "none" ? "" : r))
    : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform
      || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
      s = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])),
    r || 0;
}
function oe(i) {
  return typeof i == "object" && i !== null && i.constructor
    && Object.prototype.toString.call(i).slice(8, -1) === "Object";
}
function it(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? i instanceof HTMLElement
    : i && (i.nodeType === 1 || i.nodeType === 11);
}
function F() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (s != null && !it(s)) {
      const r = Object.keys(Object(s)).filter(n => e.indexOf(n) < 0);
      for (let n = 0, a = r.length; n < a; n += 1) {
        const l = r[n], o = Object.getOwnPropertyDescriptor(s, l);
        o !== void 0 && o.enumerable
          && (oe(i[l]) && oe(s[l])
            ? s[l].__swiper__ ? i[l] = s[l] : F(i[l], s[l])
            : !oe(i[l]) && oe(s[l])
            ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : F(i[l], s[l]))
            : i[l] = s[l]);
      }
    }
  }
  return i;
}
function le(i, e, t) {
  i.style.setProperty(e, t);
}
function $e(i) {
  let { swiper: e, targetPosition: t, side: s } = i;
  const r = j(), n = -e.translate;
  let a = null, l;
  const o = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > n ? "next" : "prev",
    u = (h, p) => c === "next" && h >= p || c === "prev" && h <= p,
    f = () => {
      l = new Date().getTime(), a === null && (a = l);
      const h = Math.max(Math.min((l - a) / o, 1), 0), p = .5 - Math.cos(h * Math.PI) / 2;
      let g = n + p * (t - n);
      if (u(g, t) && (g = t), e.wrapperEl.scrollTo({ [s]: g }), u(g, t)) {
        e.wrapperEl.style.overflow = "hidden",
          e.wrapperEl.style.scrollSnapType = "",
          setTimeout(() => {
            e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [s]: g });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(f);
    };
  f();
}
function U(i, e) {
  return e === void 0 && (e = ""), [...i.children].filter(t => t.matches(e));
}
function ue(i) {
  try {
    console.warn(i);
    return;
  } catch {}
}
function pe(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : Qe(e)), t;
}
function st(i, e) {
  const t = [];
  for (; i.previousElementSibling;) {
    const s = i.previousElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s;
  }
  return t;
}
function nt(i, e) {
  const t = [];
  for (; i.nextElementSibling;) {
    const s = i.nextElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s;
  }
  return t;
}
function te(i, e) {
  return j().getComputedStyle(i, null).getPropertyValue(e);
}
function me(i) {
  let e = i, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
    return t;
  }
}
function _e(i, e) {
  const t = [];
  let s = i.parentElement;
  for (; s;) e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
  return t;
}
function Me(i, e, t) {
  const s = j();
  return t
    ? i[e === "width" ? "offsetWidth" : "offsetHeight"]
      + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top"))
      + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
    : i.offsetWidth;
}
function V(i) {
  return (Array.isArray(i) ? i : [i]).filter(e => !!e);
}
let ve;
function rt() {
  const i = j(), e = ne();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch),
  };
}
function Ne() {
  return ve || (ve = rt()), ve;
}
let we;
function at(i) {
  let { userAgent: e } = i === void 0 ? {} : i;
  const t = Ne(),
    s = j(),
    r = s.navigator.platform,
    n = e || s.navigator.userAgent,
    a = { ios: !1, android: !1 },
    l = s.screen.width,
    o = s.screen.height,
    c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = n.match(/(iPad).*OS\s([\d_]+)/);
  const f = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = r === "Win32";
  let g = r === "MacIntel";
  const b = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return !u && g && t.touch && b.indexOf(`${l}x${o}`) >= 0
    && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1),
    c && !p && (a.os = "android", a.android = !0),
    (u || h || f) && (a.os = "ios", a.ios = !0),
    a;
}
function Fe(i) {
  return i === void 0 && (i = {}), we || (we = at(i)), we;
}
let be;
function ot() {
  const i = j(), e = Fe();
  let t = !1;
  function s() {
    const l = i.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (s()) {
    const l = String(i.navigator.userAgent);
    if (l.includes("Version/")) {
      const [o, c] = l.split("Version/")[1].split(" ")[0].split(".").map(u => Number(u));
      t = o < 16 || o === 16 && c < 2;
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), n = s(), a = n || r && e.ios;
  return { isSafari: t || n, needPerspectiveFix: t, need3dFix: a, isWebView: r };
}
function lt() {
  return be || (be = ot()), be;
}
function dt(i) {
  let { swiper: e, on: t, emit: s } = i;
  const r = j();
  let n = null, a = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    o = () => {
      !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f => {
        a = r.requestAnimationFrame(() => {
          const { width: h, height: p } = e;
          let g = h, b = p;
          f.forEach(E => {
            let { contentBoxSize: d, contentRect: m, target: v } = E;
            v && v !== e.el || (g = m ? m.width : (d[0] || d).inlineSize, b = m ? m.height : (d[0] || d).blockSize);
          }), (g !== h || b !== p) && l();
        });
      }),
        n.observe(e.el));
    },
    c = () => {
      a && r.cancelAnimationFrame(a), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
    },
    u = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      o();
      return;
    }
    r.addEventListener("resize", l), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      c(), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", u);
    });
}
function ct(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const n = [],
    a = j(),
    l = function(u, f) {
      f === void 0 && (f = {});
      const h = a.MutationObserver || a.WebkitMutationObserver,
        p = new h(g => {
          if (e.__preventObserver__) return;
          if (g.length === 1) {
            r("observerUpdate", g[0]);
            return;
          }
          const b = function() {
            r("observerUpdate", g[0]);
          };
          a.requestAnimationFrame ? a.requestAnimationFrame(b) : a.setTimeout(b, 0);
        });
      p.observe(u, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }), n.push(p);
    },
    o = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = _e(e.hostEl);
          for (let f = 0; f < u.length; f += 1) l(u[f]);
        }
        l(e.hostEl, { childList: e.params.observeSlideChildren }), l(e.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      n.forEach(u => {
        u.disconnect();
      }), n.splice(0, n.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), s("init", o), s("destroy", c);
}
var ft = {
  on(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const r = t ? "unshift" : "push";
    return i.split(" ").forEach(n => {
      s.eventsListeners[n] || (s.eventsListeners[n] = []), s.eventsListeners[n][r](e);
    }),
      s;
  },
  once(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function r() {
      s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
      e.apply(s, a);
    }
    return r.__emitterProxy = e, s.on(i, r, t);
  },
  onAny(i, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
    const s = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
      typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((r, n) => {
        (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[s].splice(n, 1);
      });
    }),
      t;
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
    let e, t, s;
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
    return typeof n[0] == "string" || Array.isArray(n[0])
      ? (e = n[0], t = n.slice(1, n.length), s = i)
      : (e = n[0].events, t = n[0].data, s = n[0].context || i),
      t.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach(o => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(c => {
          c.apply(s, [o, ...t]);
        }),
          i.eventsListeners && i.eventsListeners[o] && i.eventsListeners[o].forEach(c => {
            c.apply(s, t);
          });
      }),
      i;
  },
};
function ut() {
  const i = this;
  let e, t;
  const s = i.el;
  typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical())
    && (e = e - parseInt(te(s, "padding-left") || 0, 10) - parseInt(te(s, "padding-right") || 0, 10),
      t = t - parseInt(te(s, "padding-top") || 0, 10) - parseInt(te(s, "padding-bottom") || 0, 10),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
}
function pt() {
  const i = this;
  function e(P, y) {
    return parseFloat(P.getPropertyValue(i.getDirectionLabel(y)) || 0);
  }
  const t = i.params,
    { wrapperEl: s, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: l } = i,
    o = i.virtual && t.virtual.enabled,
    c = o ? i.virtual.slides.length : i.slides.length,
    u = U(r, `.${i.params.slideClass}, swiper-slide`),
    f = o ? i.virtual.slides.length : u.length;
  let h = [];
  const p = [], g = [];
  let b = t.slidesOffsetBefore;
  typeof b == "function" && (b = t.slidesOffsetBefore.call(i));
  let E = t.slidesOffsetAfter;
  typeof E == "function" && (E = t.slidesOffsetAfter.call(i));
  const d = i.snapGrid.length, m = i.slidesGrid.length;
  let v = t.spaceBetween, x = -b, M = 0, L = 0;
  if (typeof n > "u") return;
  typeof v == "string" && v.indexOf("%") >= 0
    ? v = parseFloat(v.replace("%", "")) / 100 * n
    : typeof v == "string" && (v = parseFloat(v)),
    i.virtualSize = -v,
    u.forEach(P => {
      a ? P.style.marginLeft = "" : P.style.marginRight = "", P.style.marginBottom = "", P.style.marginTop = "";
    }),
    t.centeredSlides && t.cssMode
    && (le(s, "--swiper-centered-offset-before", ""), le(s, "--swiper-centered-offset-after", ""));
  const G = t.grid && t.grid.rows > 1 && i.grid;
  G ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
  let C;
  const O = t.slidesPerView === "auto" && t.breakpoints
    && Object.keys(t.breakpoints).filter(P => typeof t.breakpoints[P].slidesPerView < "u").length > 0;
  for (let P = 0; P < f; P += 1) {
    C = 0;
    let y;
    if (u[P] && (y = u[P]), G && i.grid.updateSlide(P, y, u), !(u[P] && te(y, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        O && (u[P].style[i.getDirectionLabel("width")] = "");
        const w = getComputedStyle(y), S = y.style.transform, T = y.style.webkitTransform;
        if (S && (y.style.transform = "none"), T && (y.style.webkitTransform = "none"), t.roundLengths) {
          C = i.isHorizontal() ? Me(y, "width", !0) : Me(y, "height", !0);
        } else {
          const I = e(w, "width"),
            z = e(w, "padding-left"),
            q = e(w, "padding-right"),
            R = e(w, "margin-left"),
            W = e(w, "margin-right"),
            ie = w.getPropertyValue("box-sizing");
          if (ie && ie === "border-box") C = I + R + W;
          else {
            const { clientWidth: re, offsetWidth: se } = y;
            C = I + z + q + R + W + (se - re);
          }
        }
        S && (y.style.transform = S), T && (y.style.webkitTransform = T), t.roundLengths && (C = Math.floor(C));
      } else {C = (n - (t.slidesPerView - 1) * v) / t.slidesPerView,
          t.roundLengths && (C = Math.floor(C)),
          u[P] && (u[P].style[i.getDirectionLabel("width")] = `${C}px`);}
      u[P] && (u[P].swiperSlideSize = C),
        g.push(C),
        t.centeredSlides
          ? (x = x + C / 2 + M / 2 + v,
            M === 0 && P !== 0 && (x = x - n / 2 - v),
            P === 0 && (x = x - n / 2 - v),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            t.roundLengths && (x = Math.floor(x)),
            L % t.slidesPerGroup === 0 && h.push(x),
            p.push(x))
          : (t.roundLengths && (x = Math.floor(x)),
            (L - Math.min(i.params.slidesPerGroupSkip, L)) % i.params.slidesPerGroup === 0 && h.push(x),
            p.push(x),
            x = x + C + v),
        i.virtualSize += C + v,
        M = C,
        L += 1;
    }
  }
  if (
    i.virtualSize = Math.max(i.virtualSize, n) + E,
      a && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + v}px`),
      t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + v}px`),
      G && i.grid.updateWrapperSize(C, h),
      !t.centeredSlides
  ) {
    const P = [];
    for (let y = 0; y < h.length; y += 1) {
      let w = h[y];
      t.roundLengths && (w = Math.floor(w)), h[y] <= i.virtualSize - n && P.push(w);
    }
    h = P, Math.floor(i.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(i.virtualSize - n);
  }
  if (o && t.loop) {
    const P = g[0] + v;
    if (t.slidesPerGroup > 1) {
      const y = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
        w = P * t.slidesPerGroup;
      for (let S = 0; S < y; S += 1) h.push(h[h.length - 1] + w);
    }
    for (let y = 0; y < i.virtual.slidesBefore + i.virtual.slidesAfter; y += 1) {
      t.slidesPerGroup === 1 && h.push(h[h.length - 1] + P), p.push(p[p.length - 1] + P), i.virtualSize += P;
    }
  }
  if (h.length === 0 && (h = [0]), v !== 0) {
    const P = i.isHorizontal() && a ? "marginLeft" : i.getDirectionLabel("marginRight");
    u.filter((y, w) => !t.cssMode || t.loop ? !0 : w !== u.length - 1).forEach(y => {
      y.style[P] = `${v}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let P = 0;
    g.forEach(w => {
      P += w + (v || 0);
    }), P -= v;
    const y = P - n;
    h = h.map(w => w <= 0 ? -b : w > y ? y + E : w);
  }
  if (t.centerInsufficientSlides) {
    let P = 0;
    g.forEach(w => {
      P += w + (v || 0);
    }), P -= v;
    const y = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (P + y < n) {
      const w = (n - P - y) / 2;
      h.forEach((S, T) => {
        h[T] = S - w;
      }),
        p.forEach((S, T) => {
          p[T] = S + w;
        });
    }
  }
  if (
    Object.assign(i, { slides: u, snapGrid: h, slidesGrid: p, slidesSizesGrid: g }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds
  ) {
    le(s, "--swiper-centered-offset-before", `${-h[0]}px`),
      le(s, "--swiper-centered-offset-after", `${i.size / 2 - g[g.length - 1] / 2}px`);
    const P = -i.snapGrid[0], y = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map(w => w + P), i.slidesGrid = i.slidesGrid.map(w => w + y);
  }
  if (
    f !== c && i.emit("slidesLengthChange"),
      h.length !== d && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")),
      p.length !== m && i.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && i.updateSlidesOffset(),
      i.emit("slidesUpdated"),
      !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade")
  ) {
    const P = `${t.containerModifierClass}backface-hidden`, y = i.el.classList.contains(P);
    f <= t.maxBackfaceHiddenSlides ? y || i.el.classList.add(P) : y && i.el.classList.remove(P);
  }
}
function mt(i) {
  const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
  let r = 0, n;
  typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
  const a = l => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1) {
    if (e.params.centeredSlides) {
      (e.visibleSlides || []).forEach(l => {
        t.push(l);
      });
    } else {for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n;
        if (l > e.slides.length && !s) break;
        t.push(a(l));
      }}
  } else t.push(a(e.activeIndex));
  for (n = 0; n < t.length; n += 1) {
    if (typeof t[n] < "u") {
      const l = t[n].offsetHeight;
      r = l > r ? l : r;
    }
  }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function ht() {
  const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1) {
    e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
  }
}
const ke = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function gt(i) {
  i === void 0 && (i = this && this.translate || 0);
  const e = this, t = e.params, { slides: s, rtlTranslate: r, snapGrid: n } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let a = -i;
  r && (a = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = t.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? l = parseFloat(l.replace("%", "")) / 100 * e.size
    : typeof l == "string" && (l = parseFloat(l));
  for (let o = 0; o < s.length; o += 1) {
    const c = s[o];
    let u = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= s[0].swiperSlideOffset);
    const f = (a + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      h = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      p = -(a - u),
      g = p + e.slidesSizesGrid[o],
      b = p >= 0 && p <= e.size - e.slidesSizesGrid[o],
      E = p >= 0 && p < e.size - 1 || g > 1 && g <= e.size || p <= 0 && g >= e.size;
    E && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(o)),
      ke(c, E, t.slideVisibleClass),
      ke(c, b, t.slideFullyVisibleClass),
      c.progress = r ? -f : f,
      c.originalProgress = r ? -h : h;
  }
}
function vt(i) {
  const e = this;
  if (typeof i > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    i = e && e.translate && e.translate * u || 0;
  }
  const t = e.params, s = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = e;
  const o = n, c = a;
  if (s === 0) r = 0, n = !0, a = !0;
  else {
    r = (i - e.minTranslate()) / s;
    const u = Math.abs(i - e.minTranslate()) < 1, f = Math.abs(i - e.maxTranslate()) < 1;
    n = u || r <= 0, a = f || r >= 1, u && (r = 0), f && (r = 1);
  }
  if (t.loop) {
    const u = e.getSlideIndexByData(0),
      f = e.getSlideIndexByData(e.slides.length - 1),
      h = e.slidesGrid[u],
      p = e.slidesGrid[f],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      b = Math.abs(i);
    b >= h ? l = (b - h) / g : l = (b + g - p) / g, l > 1 && (l -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: l, isBeginning: n, isEnd: a }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    n && !o && e.emit("reachBeginning toEdge"),
    a && !c && e.emit("reachEnd toEdge"),
    (o && !n || c && !a) && e.emit("fromEdge"),
    e.emit("progress", r);
}
const ye = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function wt() {
  const i = this,
    { slides: e, params: t, slidesEl: s, activeIndex: r } = i,
    n = i.virtual && t.virtual.enabled,
    a = i.grid && t.grid && t.grid.rows > 1,
    l = f => U(s, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
  let o, c, u;
  if (n) {
    if (t.loop) {
      let f = r - i.virtual.slidesBefore;
      f < 0 && (f = i.virtual.slides.length + f),
        f >= i.virtual.slides.length && (f -= i.virtual.slides.length),
        o = l(`[data-swiper-slide-index="${f}"]`);
    } else o = l(`[data-swiper-slide-index="${r}"]`);
  } else {a
      ? (o = e.filter(f => f.column === r)[0],
        u = e.filter(f => f.column === r + 1)[0],
        c = e.filter(f => f.column === r - 1)[0])
      : o = e[r];}
  o
  && (a
    || (u = nt(o, `.${t.slideClass}, swiper-slide`)[0],
      t.loop && !u && (u = e[0]),
      c = st(o, `.${t.slideClass}, swiper-slide`)[0],
      t.loop && !c === 0 && (c = e[e.length - 1]))),
    e.forEach(f => {
      ye(f, f === o, t.slideActiveClass), ye(f, f === u, t.slideNextClass), ye(f, f === c, t.slidePrevClass);
    }),
    i.emitSlidesClasses();
}
const de = (i, e) => {
    if (!i || i.destroyed || !i.params) return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
    if (s) {
      let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !r && i.isElement
      && (s.shadowRoot
        ? r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`)
        : requestAnimationFrame(() => {
          s.shadowRoot && (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), r && r.remove());
        })), r && r.remove();
    }
  },
  Se = (i, e) => {
    if (!i.slides[e]) return;
    const t = i.slides[e].querySelector("[loading=\"lazy\"]");
    t && t.removeAttribute("loading");
  },
  Ce = i => {
    if (!i || i.destroyed || !i.params) return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
      r = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const a = r, l = [a - e];
      l.push(...Array.from({ length: e }).map((o, c) => a + s + c)),
        i.slides.forEach((o, c) => {
          l.includes(o.column) && Se(i, c);
        });
      return;
    }
    const n = r + s - 1;
    if (i.params.rewind || i.params.loop) {
      for (let a = r - e; a <= n + e; a += 1) {
        const l = (a % t + t) % t;
        (l < r || l > n) && Se(i, l);
      }
    } else {for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1) {
        a !== r && (a > n || a < r) && Se(i, a);
      }}
  };
function bt(i) {
  const { slidesGrid: e, params: t } = i, s = i.rtlTranslate ? i.translate : -i.translate;
  let r;
  for (let n = 0; n < e.length; n += 1) {
    typeof e[n + 1] < "u"
      ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : s >= e[n] && s < e[n + 1] && (r = n + 1)
      : s >= e[n] && (r = n);
  }
  return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function yt(i) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: r, activeIndex: n, realIndex: a, snapIndex: l } = e;
  let o = i, c;
  const u = p => {
    let g = p - e.virtual.slidesBefore;
    return g < 0 && (g = e.virtual.slides.length + g),
      g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
      g;
  };
  if (typeof o > "u" && (o = bt(e)), s.indexOf(t) >= 0) c = s.indexOf(t);
  else {
    const p = Math.min(r.slidesPerGroupSkip, o);
    c = p + Math.floor((o - p) / r.slidesPerGroup);
  }
  if (c >= s.length && (c = s.length - 1), o === n && !e.params.loop) {
    c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (o === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = u(o);
    return;
  }
  const f = e.grid && r.grid && r.grid.rows > 1;
  let h;
  if (e.virtual && r.virtual.enabled && r.loop) h = u(o);
  else if (f) {
    const p = e.slides.filter(b => b.column === o)[0];
    let g = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(e.slides.indexOf(p), 0)), h = Math.floor(g / r.grid.rows);
  } else if (e.slides[o]) {
    const p = e.slides[o].getAttribute("data-swiper-slide-index");
    p ? h = parseInt(p, 10) : h = o;
  } else h = o;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: a,
    realIndex: h,
    previousIndex: n,
    activeIndex: o,
  }),
    e.initialized && Ce(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function St(i, e) {
  const t = this, s = t.params;
  let r = i.closest(`.${s.slideClass}, swiper-slide`);
  !r && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(l => {
    !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l);
  });
  let n = !1, a;
  if (r) {
    for (let l = 0; l < t.slides.length; l += 1) {
      if (t.slides[l] === r) {
        n = !0, a = l;
        break;
      }
    }
  }
  if (r && n) {
    t.clickedSlide = r,
      t.virtual && t.params.virtual.enabled
        ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10)
        : t.clickedIndex = a;
  } else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var xt = {
  updateSize: ut,
  updateSlides: pt,
  updateAutoHeight: mt,
  updateSlidesOffset: ht,
  updateSlidesProgress: gt,
  updateProgress: vt,
  updateSlidesClasses: wt,
  updateActiveIndex: yt,
  updateClickedSlide: St,
};
function Tt(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const e = this, { params: t, rtlTranslate: s, translate: r, wrapperEl: n } = e;
  if (t.virtualTranslate) return s ? -r : r;
  if (t.cssMode) return r;
  let a = tt(n, i);
  return a += e.cssOverflowAdjustment(), s && (a = -a), a || 0;
}
function Et(i, e) {
  const t = this, { rtlTranslate: s, params: r, wrapperEl: n, progress: a } = t;
  let l = 0, o = 0;
  const c = 0;
  t.isHorizontal() ? l = s ? -i : i : o = i,
    r.roundLengths && (l = Math.floor(l), o = Math.floor(o)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? l : o,
    r.cssMode
      ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -o
      : r.virtualTranslate
        || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(),
          n.style.transform = `translate3d(${l}px, ${o}px, ${c}px)`);
  let u;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? u = 0 : u = (i - t.minTranslate()) / f,
    u !== a && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e);
}
function Pt() {
  return -this.snapGrid[0];
}
function Mt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ct(i, e, t, s, r) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
  const n = this, { params: a, wrapperEl: l } = n;
  if (n.animating && a.preventInteractionOnTransition) return !1;
  const o = n.minTranslate(), c = n.maxTranslate();
  let u;
  if (s && i > o ? u = o : s && i < c ? u = c : u = i, n.updateProgress(u), a.cssMode) {
    const f = n.isHorizontal();
    if (e === 0) l[f ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!n.support.smoothScroll) return $e({ swiper: n, targetPosition: -u, side: f ? "left" : "top" }), !0;
      l.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return e === 0
    ? (n.setTransition(0), n.setTranslate(u), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
    : (n.setTransition(e),
      n.setTranslate(u),
      t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
      n.animating || (n.animating = !0,
        n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(h) {
          !n || n.destroyed
            || h.target === this
              && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                n.onTranslateToWrapperTransitionEnd = null,
                delete n.onTranslateToWrapperTransitionEnd,
                n.animating = !1,
                t && n.emit("transitionEnd"));
        }),
        n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0;
}
var Lt = { getTranslate: Tt, setTranslate: Et, minTranslate: Pt, maxTranslate: Mt, translateTo: Ct };
function It(i, e) {
  const t = this;
  t.params.cssMode
  || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e);
}
function je(i) {
  let { swiper: e, runCallbacks: t, direction: s, step: r } = i;
  const { activeIndex: n, previousIndex: a } = e;
  let l = s;
  if (l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), e.emit(`transition${r}`), t && n !== a) {
    if (l === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
  }
}
function Ot(i, e) {
  i === void 0 && (i = !0);
  const t = this, { params: s } = t;
  s.cssMode || (s.autoHeight && t.updateAutoHeight(), je({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
}
function kt(i, e) {
  i === void 0 && (i = !0);
  const t = this, { params: s } = t;
  t.animating = !1, !s.cssMode && (t.setTransition(0), je({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
}
var At = { setTransition: It, transitionStart: Ot, transitionEnd: kt };
function zt(i, e, t, s, r) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const n = this;
  let a = i;
  a < 0 && (a = 0);
  const {
    params: l,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: f,
    rtlTranslate: h,
    wrapperEl: p,
    enabled: g,
  } = n;
  if (!g && !s && !r || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
  typeof e > "u" && (e = n.params.speed);
  const b = Math.min(n.params.slidesPerGroupSkip, a);
  let E = b + Math.floor((a - b) / n.params.slidesPerGroup);
  E >= o.length && (E = o.length - 1);
  const d = -o[E];
  if (l.normalizeSlideIndex) {
    for (let v = 0; v < c.length; v += 1) {
      const x = -Math.floor(d * 100), M = Math.floor(c[v] * 100), L = Math.floor(c[v + 1] * 100);
      typeof c[v + 1] < "u"
        ? x >= M && x < L - (L - M) / 2 ? a = v : x >= M && x < L && (a = v + 1)
        : x >= M && (a = v);
    }
  }
  if (
    n.initialized && a !== f
    && (!n.allowSlideNext && (h ? d > n.translate && d > n.minTranslate() : d < n.translate && d < n.minTranslate())
      || !n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (f || 0) !== a)
  ) return !1;
  a !== (u || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(d);
  let m;
  if (a > f ? m = "next" : a < f ? m = "prev" : m = "reset", h && -d === n.translate || !h && d === n.translate) {
    return n.updateActiveIndex(a),
      l.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      l.effect !== "slide" && n.setTranslate(d),
      m !== "reset" && (n.transitionStart(t, m), n.transitionEnd(t, m)),
      !1;
  }
  if (l.cssMode) {
    const v = n.isHorizontal(), x = h ? d : -d;
    if (e === 0) {
      const M = n.virtual && n.params.virtual.enabled;
      M && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0),
        M && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(() => {
              p[v ? "scrollLeft" : "scrollTop"] = x;
            }))
          : p[v ? "scrollLeft" : "scrollTop"] = x,
        M && requestAnimationFrame(() => {
          n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
        });
    } else {
      if (!n.support.smoothScroll) return $e({ swiper: n, targetPosition: x, side: v ? "left" : "top" }), !0;
      p.scrollTo({ [v ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return n.setTransition(e),
    n.setTranslate(d),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, s),
    n.transitionStart(t, m),
    e === 0 ? n.transitionEnd(t, m) : n.animating || (n.animating = !0,
      n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(x) {
        !n || n.destroyed
          || x.target === this
            && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
              n.onSlideToWrapperTransitionEnd = null,
              delete n.onSlideToWrapperTransitionEnd,
              n.transitionEnd(t, m));
      }),
      n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0;
}
function Bt(i, e, t, s) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const r = this;
  if (r.destroyed) return;
  typeof e > "u" && (e = r.params.speed);
  const n = r.grid && r.params.grid && r.params.grid.rows > 1;
  let a = i;
  if (r.params.loop) {
    if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
    else {
      let l;
      if (n) {
        const h = a * r.params.grid.rows;
        l = r.slides.filter(p => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else l = r.getSlideIndexByData(a);
      const o = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, { centeredSlides: c } = r.params;
      let u = r.params.slidesPerView;
      u === "auto"
        ? u = r.slidesPerViewDynamic()
        : (u = Math.ceil(parseFloat(r.params.slidesPerView, 10)), c && u % 2 === 0 && (u = u + 1));
      let f = o - l < u;
      if (c && (f = f || l < Math.ceil(u / 2)), s && c && r.params.slidesPerView !== "auto" && !n && (f = !1), f) {
        const h = c
          ? l < r.activeIndex ? "prev" : "next"
          : l - r.activeIndex - 1 < r.params.slidesPerView
          ? "next"
          : "prev";
        r.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? l + 1 : l - o + 1,
          slideRealIndex: h === "next" ? r.realIndex : void 0,
        });
      }
      if (n) {
        const h = a * r.params.grid.rows;
        a = r.slides.filter(p => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else a = r.getSlideIndexByData(a);
    }
  }
  return requestAnimationFrame(() => {
    r.slideTo(a, e, t, s);
  }),
    r;
}
function Dt(i, e, t) {
  e === void 0 && (e = !0);
  const s = this, { enabled: r, params: n, animating: a } = s;
  if (!r || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  let l = n.slidesPerGroup;
  n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto
    && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l, c = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (a && !c && n.loopPreventsSliding) return !1;
    if (
      s.loopFix({ direction: "next" }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && n.cssMode
    ) {
      return requestAnimationFrame(() => {
        s.slideTo(s.activeIndex + o, i, e, t);
      }),
        !0;
    }
  }
  return n.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + o, i, e, t);
}
function Gt(i, e, t) {
  e === void 0 && (e = !0);
  const s = this, { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: c } = s;
  if (!o || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  const u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const f = l ? s.translate : -s.translate;
  function h(d) {
    return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
  }
  const p = h(f), g = n.map(d => h(d));
  let b = n[g.indexOf(p) - 1];
  if (typeof b > "u" && r.cssMode) {
    let d;
    n.forEach((m, v) => {
      p >= m && (d = v);
    }), typeof d < "u" && (b = n[d > 0 ? d - 1 : d]);
  }
  let E = 0;
  if (
    typeof b < "u"
    && (E = a.indexOf(b),
      E < 0 && (E = s.activeIndex - 1),
      r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto
      && (E = E - s.slidesPerViewDynamic("previous", !0) + 1, E = Math.max(E, 0))), r.rewind && s.isBeginning
  ) {
    const d = s.params.virtual && s.params.virtual.enabled && s.virtual
      ? s.virtual.slides.length - 1
      : s.slides.length - 1;
    return s.slideTo(d, i, e, t);
  } else if (r.loop && s.activeIndex === 0 && r.cssMode) {
    return requestAnimationFrame(() => {
      s.slideTo(E, i, e, t);
    }),
      !0;
  }
  return s.slideTo(E, i, e, t);
}
function Vt(i, e, t) {
  e === void 0 && (e = !0);
  const s = this;
  if (!s.destroyed) return typeof i > "u" && (i = s.params.speed), s.slideTo(s.activeIndex, i, e, t);
}
function $t(i, e, t, s) {
  e === void 0 && (e = !0), s === void 0 && (s = .5);
  const r = this;
  if (r.destroyed) return;
  typeof i > "u" && (i = r.params.speed);
  let n = r.activeIndex;
  const a = Math.min(r.params.slidesPerGroupSkip, n),
    l = a + Math.floor((n - a) / r.params.slidesPerGroup),
    o = r.rtlTranslate ? r.translate : -r.translate;
  if (o >= r.snapGrid[l]) {
    const c = r.snapGrid[l], u = r.snapGrid[l + 1];
    o - c > (u - c) * s && (n += r.params.slidesPerGroup);
  } else {
    const c = r.snapGrid[l - 1], u = r.snapGrid[l];
    o - c <= (u - c) * s && (n -= r.params.slidesPerGroup);
  }
  return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, i, e, t);
}
function _t() {
  const i = this;
  if (i.destroyed) return;
  const { params: e, slidesEl: t } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let r = i.clickedIndex, n;
  const a = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating) return;
    n = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
      e.centeredSlides
        ? r < i.loopedSlides - s / 2 || r > i.slides.length - i.loopedSlides + s / 2
          ? (i.loopFix(),
            r = i.getSlideIndex(U(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
            Pe(() => {
              i.slideTo(r);
            }))
          : i.slideTo(r)
        : r > i.slides.length - s
        ? (i.loopFix(),
          r = i.getSlideIndex(U(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
          Pe(() => {
            i.slideTo(r);
          }))
        : i.slideTo(r);
  } else i.slideTo(r);
}
var Nt = {
  slideTo: zt,
  slideToLoop: Bt,
  slideNext: Dt,
  slidePrev: Gt,
  slideReset: Vt,
  slideToClosest: $t,
  slideToClickedSlide: _t,
};
function Ft(i) {
  const e = this, { params: t, slidesEl: s } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const r = () => {
      U(s, `.${t.slideClass}, swiper-slide`).forEach((f, h) => {
        f.setAttribute("data-swiper-slide-index", h);
      });
    },
    n = e.grid && t.grid && t.grid.rows > 1,
    a = t.slidesPerGroup * (n ? t.grid.rows : 1),
    l = e.slides.length % a !== 0,
    o = n && e.slides.length % t.grid.rows !== 0,
    c = u => {
      for (let f = 0; f < u; f += 1) {
        const h = e.isElement ? pe("swiper-slide", [t.slideBlankClass]) : pe("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(h);
      }
    };
  if (l) {
    if (t.loopAddBlankSlides) {
      const u = a - e.slides.length % a;
      c(u), e.recalcSlides(), e.updateSlides();
    } else {ue(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );}
    r();
  } else if (o) {
    if (t.loopAddBlankSlides) {
      const u = t.grid.rows - e.slides.length % t.grid.rows;
      c(u), e.recalcSlides(), e.updateSlides();
    } else {ue(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );}
    r();
  } else r();
  e.loopFix({ slideRealIndex: i, direction: t.centeredSlides ? void 0 : "next" });
}
function jt(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: n,
    byController: a,
    byMousewheel: l,
  } = i === void 0 ? {} : i;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const { slides: c, allowSlidePrev: u, allowSlideNext: f, slidesEl: h, params: p } = o, { centeredSlides: g } = p;
  if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) {
    t
    && (!p.centeredSlides && o.snapIndex === 0
      ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
      : p.centeredSlides && o.snapIndex < p.slidesPerView
      ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
      : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      o.allowSlidePrev = u,
      o.allowSlideNext = f,
      o.emit("loopFix");
    return;
  }
  let b = p.slidesPerView;
  b === "auto"
    ? b = o.slidesPerViewDynamic()
    : (b = Math.ceil(parseFloat(p.slidesPerView, 10)), g && b % 2 === 0 && (b = b + 1));
  const E = p.slidesPerGroupAuto ? b : p.slidesPerGroup;
  let d = E;
  d % E !== 0 && (d += E - d % E), d += p.loopAdditionalSlides, o.loopedSlides = d;
  const m = o.grid && p.grid && p.grid.rows > 1;
  c.length < b + d
    ? ue(
      "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
    )
    : m && p.grid.fill === "row" && ue("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const v = [], x = [];
  let M = o.activeIndex;
  typeof n > "u" ? n = o.getSlideIndex(c.filter(S => S.classList.contains(p.slideActiveClass))[0]) : M = n;
  const L = s === "next" || !s, G = s === "prev" || !s;
  let C = 0, O = 0;
  const P = m ? Math.ceil(c.length / p.grid.rows) : c.length,
    w = (m ? c[n].column : n) + (g && typeof r > "u" ? -b / 2 + .5 : 0);
  if (w < d) {
    C = Math.max(d - w, E);
    for (let S = 0; S < d - w; S += 1) {
      const T = S - Math.floor(S / P) * P;
      if (m) {
        const I = P - T - 1;
        for (let z = c.length - 1; z >= 0; z -= 1) c[z].column === I && v.push(z);
      } else v.push(P - T - 1);
    }
  } else if (w + b > P - d) {
    O = Math.max(w - (P - d * 2), E);
    for (let S = 0; S < O; S += 1) {
      const T = S - Math.floor(S / P) * P;
      m
        ? c.forEach((I, z) => {
          I.column === T && x.push(z);
        })
        : x.push(T);
    }
  }
  if (
    o.__preventObserver__ = !0,
      requestAnimationFrame(() => {
        o.__preventObserver__ = !1;
      }),
      G && v.forEach(S => {
        c[S].swiperLoopMoveDOM = !0, h.prepend(c[S]), c[S].swiperLoopMoveDOM = !1;
      }),
      L && x.forEach(S => {
        c[S].swiperLoopMoveDOM = !0, h.append(c[S]), c[S].swiperLoopMoveDOM = !1;
      }),
      o.recalcSlides(),
      p.slidesPerView === "auto"
        ? o.updateSlides()
        : m && (v.length > 0 && G || x.length > 0 && L) && o.slides.forEach((S, T) => {
          o.grid.updateSlide(T, S, o.slides);
        }),
      p.watchSlidesProgress && o.updateSlidesOffset(),
      t
  ) {
    if (v.length > 0 && G) {
      if (typeof e > "u") {
        const S = o.slidesGrid[M], I = o.slidesGrid[M + C] - S;
        l
          ? o.setTranslate(o.translate - I)
          : (o.slideTo(M + Math.ceil(C), 0, !1, !0),
            r
            && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - I,
              o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - I));
      } else if (r) {
        const S = m ? v.length / p.grid.rows : v.length;
        o.slideTo(o.activeIndex + S, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
      }
    } else if (x.length > 0 && L) {
      if (typeof e > "u") {
        const S = o.slidesGrid[M], I = o.slidesGrid[M - O] - S;
        l
          ? o.setTranslate(o.translate - I)
          : (o.slideTo(M - O, 0, !1, !0),
            r
            && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - I,
              o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - I));
      } else {
        const S = m ? x.length / p.grid.rows : x.length;
        o.slideTo(o.activeIndex - S, 0, !1, !0);
      }
    }
  }
  if (o.allowSlidePrev = u, o.allowSlideNext = f, o.controller && o.controller.control && !a) {
    const S = { slideRealIndex: e, direction: s, setTranslate: r, activeSlideIndex: n, byController: !0 };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach(T => {
        !T.destroyed && T.params.loop
          && T.loopFix({ ...S, slideTo: T.params.slidesPerView === p.slidesPerView ? t : !1 });
      })
      : o.controller.control instanceof o.constructor && o.controller.control.params.loop
        && o.controller.control.loopFix({
          ...S,
          slideTo: o.controller.control.params.slidesPerView === p.slidesPerView ? t : !1,
        });
  }
  o.emit("loopFix");
}
function Ht() {
  const i = this, { params: e, slidesEl: t } = i;
  if (!e.loop || i.virtual && i.params.virtual.enabled) return;
  i.recalcSlides();
  const s = [];
  i.slides.forEach(r => {
    const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
    s[n] = r;
  }),
    i.slides.forEach(r => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach(r => {
      t.append(r);
    }),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0);
}
var qt = { loopCreate: Ft, loopFix: jt, loopDestroy: Ht };
function Rt(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
}
function Wt() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode
    || (i.isElement && (i.__preventObserver__ = !0),
      i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
      i.isElement && requestAnimationFrame(() => {
        i.__preventObserver__ = !1;
      }));
}
var Yt = { setGrabCursor: Rt, unsetGrabCursor: Wt };
function Xt(i, e) {
  e === void 0 && (e = this);
  function t(s) {
    if (!s || s === ne() || s === j()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const r = s.closest(i);
    return !r && !s.getRootNode ? null : r || t(s.getRootNode().host);
  }
  return t(e);
}
function Ae(i, e, t) {
  const s = j(), { params: r } = i, n = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
  return n && (t <= a || t >= s.innerWidth - a) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function Kt(i) {
  const e = this, t = ne();
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  const r = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return;
    r.pointerId = s.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    Ae(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: a, enabled: l } = e;
  if (!l || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition) return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let o = s.target;
  if (
    n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(o) || "which" in s && s.which === 3
    || "button" in s && s.button > 0 || r.isTouched && r.isMoved
  ) return;
  const c = !!n.noSwipingClass && n.noSwipingClass !== "", u = s.composedPath ? s.composedPath() : s.path;
  c && s.target && s.target.shadowRoot && u && (o = u[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, h = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (h ? Xt(f, o) : o.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
  a.currentX = s.pageX, a.currentY = s.pageY;
  const p = a.currentX, g = a.currentY;
  if (!Ae(e, s, p)) return;
  Object.assign(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    a.startX = p,
    a.startY = g,
    r.touchStartTime = fe(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
  let b = !0;
  o.matches(r.focusableElements) && (b = !1, o.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== o && t.activeElement.blur();
  const E = b && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || E) && !o.isContentEditable && s.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s);
}
function Ut(i) {
  const e = ne(), t = this, s = t.touchEventsData, { params: r, touches: n, rtlTranslate: a, enabled: l } = t;
  if (!l || !r.simulateTouch && i.pointerType === "mouse") return;
  let o = i;
  if (
    o.originalEvent && (o = o.originalEvent),
      o.type === "pointermove" && (s.touchId !== null || o.pointerId !== s.pointerId)
  ) return;
  let c;
  if (o.type === "touchmove") {
    if (c = [...o.changedTouches].filter(L => L.identifier === s.touchId)[0], !c || c.identifier !== s.touchId) {
      return;
    }
  } else c = o;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o);
    return;
  }
  const u = c.pageX, f = c.pageY;
  if (o.preventedByNestedSwiper) {
    n.startX = u, n.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    o.target.matches(s.focusableElements) || (t.allowClick = !1),
      s.isTouched && (Object.assign(n, { startX: u, startY: f, currentX: u, currentY: f }), s.touchStartTime = fe());
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else if (
      u < n.startX && t.translate <= t.maxTranslate() || u > n.startX && t.translate >= t.minTranslate()
    ) return;
  }
  if (e.activeElement && o.target === e.activeElement && o.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", o),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = u,
    n.currentY = f;
  const h = n.currentX - n.startX, p = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + p ** 2) < t.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let L;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX
      ? s.isScrolling = !1
      : h * h + p * p >= 25
        && (L = Math.atan2(Math.abs(p), Math.abs(h)) * 180 / Math.PI,
          s.isScrolling = t.isHorizontal() ? L > r.touchAngle : 90 - L > r.touchAngle);
  }
  if (
    s.isScrolling && t.emit("touchMoveOpposite", o),
      typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
      s.isScrolling || o.type === "touchmove" && s.preventTouchMoveFromPointerMove
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  t.allowClick = !1,
    !r.cssMode && o.cancelable && o.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && o.stopPropagation();
  let g = t.isHorizontal() ? h : p, b = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement && (g = Math.abs(g) * (a ? 1 : -1), b = Math.abs(b) * (a ? 1 : -1)),
    n.diff = g,
    g *= r.touchRatio,
    a && (g = -g, b = -b);
  const E = t.touchesDirection;
  t.swipeDirection = g > 0 ? "prev" : "next", t.touchesDirection = b > 0 ? "prev" : "next";
  const d = t.params.loop && !r.cssMode,
    m = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (
      d && m && t.loopFix({ direction: t.swipeDirection }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating
    ) {
      const L = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      t.wrapperEl.dispatchEvent(L);
    }
    s.allowMomentumBounce = !1,
      r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
      t.emit("sliderFirstMove", o);
  }
  let v;
  if (
    new Date().getTime(), s.isMoved && s.allowThresholdMove && E !== t.touchesDirection && d && m && Math.abs(g) >= 1
  ) {
    Object.assign(n, { startX: u, startY: f, currentX: u, currentY: f, startTranslate: s.currentTranslate }),
      s.loopSwapReset = !0,
      s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", o), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
  let x = !0, M = r.resistanceRatio;
  if (
    r.touchReleaseOnEdges && (M = 0),
      g > 0
        ? (d && m && !v && s.allowThresholdMove
          && s.currentTranslate
            > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate())
          && t.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
          s.currentTranslate > t.minTranslate()
          && (x = !1,
            r.resistance
            && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** M)))
        : g < 0 && (d && m && !v && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides
              ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
              : t.maxTranslate())
          && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length
              - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
          s.currentTranslate < t.maxTranslate()
          && (x = !1,
            r.resistance
            && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** M))),
      x && (o.preventedByNestedSwiper = !0),
      !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate
      && (s.currentTranslate = s.startTranslate),
      !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate
      && (s.currentTranslate = s.startTranslate),
      !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
      r.threshold > 0
  ) {
    if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0,
          n.startX = n.currentX,
          n.startY = n.currentY,
          s.currentTranslate = s.startTranslate,
          n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  }
  !r.followFinger || r.cssMode
    || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress)
      && (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
      t.updateProgress(s.currentTranslate),
      t.setTranslate(s.currentTranslate));
}
function Jt(i) {
  const e = this, t = e.touchEventsData;
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  let r;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (r = [...s.changedTouches].filter(M => M.identifier === t.touchId)[0], !r || r.identifier !== t.touchId) {
      return;
    }
  } else {
    if (t.touchId !== null || s.pointerId !== t.pointerId) return;
    r = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type)
    && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))
  ) return;
  t.pointerId = null, t.touchId = null;
  const { params: a, touches: l, rtlTranslate: o, slidesGrid: c, enabled: u } = e;
  if (!u || !a.simulateTouch && s.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0)
    && e.setGrabCursor(!1);
  const f = fe(), h = f - t.touchStartTime;
  if (e.allowClick) {
    const M = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(M && M[0] || s.target, M),
      e.emit("tap click", s),
      h < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
  }
  if (
    t.lastClickTime = fe(),
      Pe(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset
      || t.currentTranslate === t.startTranslate && !t.loopSwapReset
  ) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let p;
  if (a.followFinger ? p = o ? e.translate : -e.translate : p = -t.currentTranslate, a.cssMode) return;
  if (a.freeMode && a.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const g = p >= -e.maxTranslate() && !e.params.loop;
  let b = 0, E = e.slidesSizesGrid[0];
  for (let M = 0; M < c.length; M += M < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const L = M < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof c[M + L] < "u"
      ? (g || p >= c[M] && p < c[M + L]) && (b = M, E = c[M + L] - c[M])
      : (g || p >= c[M]) && (b = M, E = c[c.length - 1] - c[c.length - 2]);
  }
  let d = null, m = null;
  a.rewind
    && (e.isBeginning
      ? m = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1
      : e.isEnd && (d = 0));
  const v = (p - c[b]) / E, x = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (h > a.longSwipesMs) {
    if (!a.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (v >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? d : b + x) : e.slideTo(b)),
      e.swipeDirection === "prev"
      && (v > 1 - a.longSwipesRatio
        ? e.slideTo(b + x)
        : m !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
        ? e.slideTo(m)
        : e.slideTo(b));
  } else {
    if (!a.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl ? e.slideTo(b + x) : e.slideTo(b)
      : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : b + x),
        e.swipeDirection === "prev" && e.slideTo(m !== null ? m : b));
  }
}
function ze() {
  const i = this, { params: e, el: t } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = i, a = i.virtual && i.params.virtual.enabled;
  i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
  const l = a && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l
    ? i.slideTo(i.slides.length - 1, 0, !1, !0)
    : i.params.loop && !a
    ? i.slideToLoop(i.realIndex, 0, !1, !0)
    : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused
    && (clearTimeout(i.autoplay.resizeTimeout),
      i.autoplay.resizeTimeout = setTimeout(() => {
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
      }, 500)),
    i.allowSlidePrev = r,
    i.allowSlideNext = s,
    i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow();
}
function Qt(i) {
  const e = this;
  e.enabled
    && (e.allowClick
      || (e.params.preventClicks && i.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
}
function Zt() {
  const i = this, { wrapperEl: e, rtlTranslate: t, enabled: s } = i;
  if (!s) return;
  i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
  let r;
  const n = i.maxTranslate() - i.minTranslate();
  n === 0 ? r = 0 : r = (i.translate - i.minTranslate()) / n,
    r !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1);
}
function ei(i) {
  const e = this;
  de(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function ti() {
  const i = this;
  i.documentTouchHandlerProceeded
    || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const He = (i, e) => {
  const t = ne(),
    { params: s, el: r, wrapperEl: n, device: a } = i,
    l = !!s.nested,
    o = e === "on" ? "addEventListener" : "removeEventListener",
    c = e;
  t[o]("touchstart", i.onDocumentTouchStart, { passive: !1, capture: l }),
    r[o]("touchstart", i.onTouchStart, { passive: !1 }),
    r[o]("pointerdown", i.onTouchStart, { passive: !1 }),
    t[o]("touchmove", i.onTouchMove, { passive: !1, capture: l }),
    t[o]("pointermove", i.onTouchMove, { passive: !1, capture: l }),
    t[o]("touchend", i.onTouchEnd, { passive: !0 }),
    t[o]("pointerup", i.onTouchEnd, { passive: !0 }),
    t[o]("pointercancel", i.onTouchEnd, { passive: !0 }),
    t[o]("touchcancel", i.onTouchEnd, { passive: !0 }),
    t[o]("pointerout", i.onTouchEnd, { passive: !0 }),
    t[o]("pointerleave", i.onTouchEnd, { passive: !0 }),
    t[o]("contextmenu", i.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) && r[o]("click", i.onClick, !0),
    s.cssMode && n[o]("scroll", i.onScroll),
    s.updateOnWindowResize
      ? i[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ze, !0)
      : i[c]("observerUpdate", ze, !0),
    r[o]("load", i.onLoad, { capture: !0 });
};
function ii() {
  const i = this, { params: e } = i;
  i.onTouchStart = Kt.bind(i),
    i.onTouchMove = Ut.bind(i),
    i.onTouchEnd = Jt.bind(i),
    i.onDocumentTouchStart = ti.bind(i),
    e.cssMode && (i.onScroll = Zt.bind(i)),
    i.onClick = Qt.bind(i),
    i.onLoad = ei.bind(i),
    He(i, "on");
}
function si() {
  He(this, "off");
}
var ni = { attachEvents: ii, detachEvents: si };
const Be = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function ri() {
  const i = this, { realIndex: e, initialized: t, params: s, el: r } = i, n = s.breakpoints;
  if (!n || n && Object.keys(n).length === 0) return;
  const a = i.getBreakpoint(n, i.params.breakpointsBase, i.el);
  if (!a || i.currentBreakpoint === a) return;
  const o = (a in n ? n[a] : void 0) || i.originalParams,
    c = Be(i, s),
    u = Be(i, o),
    f = i.params.grabCursor,
    h = o.grabCursor,
    p = s.enabled;
  c && !u
    ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
      i.emitContainerClasses())
    : !c && u
      && (r.classList.add(`${s.containerModifierClass}grid`),
        (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && s.grid.fill === "column")
        && r.classList.add(`${s.containerModifierClass}grid-column`),
        i.emitContainerClasses()),
    f && !h ? i.unsetGrabCursor() : !f && h && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(v => {
      if (typeof o[v] > "u") return;
      const x = s[v] && s[v].enabled, M = o[v] && o[v].enabled;
      x && !M && i[v].disable(), !x && M && i[v].enable();
    });
  const g = o.direction && o.direction !== s.direction,
    b = s.loop && (o.slidesPerView !== s.slidesPerView || g),
    E = s.loop;
  g && t && i.changeDirection(), F(i.params, o);
  const d = i.params.enabled, m = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev,
  }),
    p && !d ? i.disable() : !p && d && i.enable(),
    i.currentBreakpoint = a,
    i.emit("_beforeBreakpoint", o),
    t
    && (b
      ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides())
      : !E && m
      ? (i.loopCreate(e), i.updateSlides())
      : E && !m && i.loopDestroy()),
    i.emit("breakpoint", o);
}
function ai(i, e, t) {
  if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
  let s = !1;
  const r = j(),
    n = e === "window" ? r.innerHeight : t.clientHeight,
    a = Object.keys(i).map(l => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const o = parseFloat(l.substr(1));
        return { value: n * o, point: l };
      }
      return { value: l, point: l };
    });
  a.sort((l, o) => parseInt(l.value, 10) - parseInt(o.value, 10));
  for (let l = 0; l < a.length; l += 1) {
    const { point: o, value: c } = a[l];
    e === "window" ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = o) : c <= t.clientWidth && (s = o);
  }
  return s || "max";
}
var oi = { setBreakpoint: ri, getBreakpoint: ai };
function li(i, e) {
  const t = [];
  return i.forEach(s => {
    typeof s == "object"
      ? Object.keys(s).forEach(r => {
        s[r] && t.push(e + r);
      })
      : typeof s == "string" && t.push(e + s);
  }),
    t;
}
function di() {
  const i = this,
    { classNames: e, params: t, rtl: s, el: r, device: n } = i,
    a = li([
      "initialized",
      t.direction,
      { "free-mode": i.params.freeMode && t.freeMode.enabled },
      { autoheight: t.autoHeight },
      { rtl: s },
      { grid: t.grid && t.grid.rows > 1 },
      { "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column" },
      { android: n.android },
      { ios: n.ios },
      { "css-mode": t.cssMode },
      { centered: t.cssMode && t.centeredSlides },
      { "watch-progress": t.watchSlidesProgress },
    ], t.containerModifierClass);
  e.push(...a), r.classList.add(...e), i.emitContainerClasses();
}
function ci() {
  const i = this, { el: e, classNames: t } = i;
  e.classList.remove(...t), i.emitContainerClasses();
}
var fi = { addClasses: di, removeClasses: ci };
function ui() {
  const i = this, { isLocked: e, params: t } = i, { slidesOffsetBefore: s } = t;
  if (s) {
    const r = i.slides.length - 1, n = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
    i.isLocked = i.size > n;
  } else i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var pi = { checkOverflow: ui },
  De = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function mi(i, e) {
  return function(s) {
    s === void 0 && (s = {});
    const r = Object.keys(s)[0], n = s[r];
    if (typeof n != "object" || n === null) {
      F(e, s);
      return;
    }
    if (
      i[r] === !0 && (i[r] = { enabled: !0 }),
        r === "navigation" && i[r] && i[r].enabled && !i[r].prevEl && !i[r].nextEl && (i[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && i[r] && i[r].enabled && !i[r].el && (i[r].auto = !0),
        !(r in i && "enabled" in n)
    ) {
      F(e, s);
      return;
    }
    typeof i[r] == "object" && !("enabled" in i[r]) && (i[r].enabled = !0), i[r] || (i[r] = { enabled: !1 }), F(e, s);
  };
}
const xe = {
    eventsEmitter: ft,
    update: xt,
    translate: Lt,
    transition: At,
    slide: Nt,
    loop: qt,
    grabCursor: Yt,
    events: ni,
    breakpoints: oi,
    checkOverflow: pi,
    classes: fi,
  },
  Te = {};
class D {
  constructor() {
    let e, t;
    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
    r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? t = r[0]
      : [e, t] = r,
      t || (t = {}),
      t = F({}, t),
      e && !t.el && (t.el = e);
    const a = ne();
    if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
      const u = [];
      return a.querySelectorAll(t.el).forEach(f => {
        const h = F({}, t, { el: f });
        u.push(new D(h));
      }),
        u;
    }
    const l = this;
    l.__swiper__ = !0,
      l.support = Ne(),
      l.device = Fe({ userAgent: t.userAgent }),
      l.browser = lt(),
      l.eventsListeners = {},
      l.eventsAnyListeners = [],
      l.modules = [...l.__modules__],
      t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const o = {};
    l.modules.forEach(u => {
      u({
        params: t,
        swiper: l,
        extendParams: mi(t, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const c = F({}, De, o);
    return l.params = F({}, c, Te, t),
      l.originalParams = F({}, l.params),
      l.passedParams = F({}, t),
      l.params && l.params.on && Object.keys(l.params.on).forEach(u => {
        l.on(u, l.params.on[u]);
      }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l;
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom",
      }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: s } = this, r = U(t, `.${s.slideClass}, swiper-slide`), n = me(r[0]);
    return me(e) - n;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, { slidesEl: t, params: s } = e;
    e.slides = U(t, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = s.minTranslate(), a = (s.maxTranslate() - r) * e + r;
    s.translateTo(a, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter(s =>
      s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0
    );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0)
        .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach(s => {
      const r = e.getSlideClasses(s);
      t.push({ slideEl: s, classNames: r }), e.emit("_slideClass", s, r);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const s = this, { params: r, slides: n, slidesGrid: a, slidesSizesGrid: l, size: o, activeIndex: c } = s;
    let u = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let f = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0, h;
      for (let p = c + 1; p < n.length; p += 1) {
        n[p] && !h && (f += Math.ceil(n[p].swiperSlideSize), u += 1, f > o && (h = !0));
      }
      for (let p = c - 1; p >= 0; p -= 1) n[p] && !h && (f += n[p].swiperSlideSize, u += 1, f > o && (h = !0));
    } else if (e === "current") {
      for (let f = c + 1; f < n.length; f += 1) (t ? a[f] + l[f] - a[c] < o : a[f] - a[c] < o) && (u += 1);
    } else for (let f = c - 1; f >= 0; f -= 1) a[c] - a[f] < o && (u += 1);
    return u;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll("[loading=\"lazy\"]")].forEach(a => {
        a.complete && de(e, a);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const a = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let n;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const a = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        n = e.slideTo(a.length - 1, 0, !1, !0);
      } else n = e.slideTo(e.activeIndex, 0, !1, !0);
      n || r();
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const s = this, r = s.params.direction;
    return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r || e !== "horizontal" && e !== "vertical"
      || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(n => {
          e === "vertical" ? n.style.width = "" : n.style.height = "";
        }),
        s.emit("changeDirection"),
        t && s.update()),
      s;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
      t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl")
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
    s.swiper = t,
      s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase()
      && (t.isElement = !0);
    const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() => s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : U(s, r())[0])();
    return !a && t.params.createElements
      && (a = pe("div", t.params.wrapperClass),
        s.append(a),
        U(s, `.${t.params.slideClass}`).forEach(l => {
          a.append(l);
        })),
      Object.assign(t, {
        el: s,
        wrapperEl: a,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || te(s, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal"
          && (s.dir.toLowerCase() === "rtl" || te(s, "direction") === "rtl"),
        wrongRTL: te(a, "display") === "-webkit-box",
      }),
      !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
        : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
      t.params.loop && t.loopCreate(),
      t.attachEvents();
    const r = [...t.el.querySelectorAll("[loading=\"lazy\"]")];
    return t.isElement && r.push(...t.hostEl.querySelectorAll("[loading=\"lazy\"]")),
      r.forEach(n => {
        n.complete ? de(t, n) : n.addEventListener("load", a => {
          de(t, a.target);
        });
      }),
      Ce(t),
      t.initialized = !0,
      Ce(t),
      t.emit("init"),
      t.emit("afterInit"),
      t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const s = this, { params: r, el: n, wrapperEl: a, slides: l } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
      s.initialized = !1,
      s.detachEvents(),
      r.loop && s.loopDestroy(),
      t && (s.removeClasses(),
        n.removeAttribute("style"),
        a.removeAttribute("style"),
        l && l.length && l.forEach(o => {
          o.classList.remove(
            r.slideVisibleClass,
            r.slideFullyVisibleClass,
            r.slideActiveClass,
            r.slideNextClass,
            r.slidePrevClass,
          ),
            o.removeAttribute("style"),
            o.removeAttribute("data-swiper-slide-index");
        })),
      s.emit("destroy"),
      Object.keys(s.eventsListeners).forEach(o => {
        s.off(o);
      }),
      e !== !1 && (s.el.swiper = null, Ze(s)),
      s.destroyed = !0),
      null;
  }
  static extendDefaults(e) {
    F(Te, e);
  }
  static get extendedDefaults() {
    return Te;
  }
  static get defaults() {
    return De;
  }
  static installModule(e) {
    D.prototype.__modules__ || (D.prototype.__modules__ = []);
    const t = D.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach(t => D.installModule(t)), D) : (D.installModule(e), D);
  }
}
Object.keys(xe).forEach(i => {
  Object.keys(xe[i]).forEach(e => {
    D.prototype[e] = xe[i][e];
  });
});
D.use([dt, ct]);
function qe(i, e, t, s) {
  return i.params.createElements && Object.keys(s).forEach(r => {
    if (!t[r] && t.auto === !0) {
      let n = U(i.el, `.${s[r]}`)[0];
      n || (n = pe("div", s[r]), n.className = s[r], i.el.append(n)), t[r] = n, e[r] = n;
    }
  }),
    t;
}
function ge(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    e.navigation = { nextEl: null, prevEl: null };
  function n(g) {
    let b;
    return g && typeof g == "string" && e.isElement && (b = e.el.querySelector(g), b)
      ? b
      : (g
        && (typeof g == "string" && (b = [...document.querySelectorAll(g)]),
          e.params.uniqueNavElements && typeof g == "string" && b && b.length > 1
            && e.el.querySelectorAll(g).length === 1
            ? b = e.el.querySelector(g)
            : b && b.length === 1 && (b = b[0])),
        g && !b ? g : b);
  }
  function a(g, b) {
    const E = e.params.navigation;
    g = V(g),
      g.forEach(d => {
        d
          && (d.classList[b ? "add" : "remove"](...E.disabledClass.split(" ")),
            d.tagName === "BUTTON" && (d.disabled = b),
            e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](E.lockClass));
      });
  }
  function l() {
    const { nextEl: g, prevEl: b } = e.navigation;
    if (e.params.loop) {
      a(b, !1), a(g, !1);
      return;
    }
    a(b, e.isBeginning && !e.params.rewind), a(g, e.isEnd && !e.params.rewind);
  }
  function o(g) {
    g.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r("navigationPrev"));
  }
  function c(g) {
    g.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r("navigationNext"));
  }
  function u() {
    const g = e.params.navigation;
    if (
      e.params.navigation = qe(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
      }), !(g.nextEl || g.prevEl)
    ) return;
    let b = n(g.nextEl), E = n(g.prevEl);
    Object.assign(e.navigation, { nextEl: b, prevEl: E }), b = V(b), E = V(E);
    const d = (m, v) => {
      m && m.addEventListener("click", v === "next" ? c : o),
        !e.enabled && m && m.classList.add(...g.lockClass.split(" "));
    };
    b.forEach(m => d(m, "next")), E.forEach(m => d(m, "prev"));
  }
  function f() {
    let { nextEl: g, prevEl: b } = e.navigation;
    g = V(g), b = V(b);
    const E = (d, m) => {
      d.removeEventListener("click", m === "next" ? c : o),
        d.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    g.forEach(d => E(d, "next")), b.forEach(d => E(d, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? p() : (u(), l());
  }),
    s("toEdge fromEdge lock unlock", () => {
      l();
    }),
    s("destroy", () => {
      f();
    }),
    s("enable disable", () => {
      let { nextEl: g, prevEl: b } = e.navigation;
      if (g = V(g), b = V(b), e.enabled) {
        l();
        return;
      }
      [...g, ...b].filter(E => !!E).forEach(E => E.classList.add(e.params.navigation.lockClass));
    }),
    s("click", (g, b) => {
      let { nextEl: E, prevEl: d } = e.navigation;
      E = V(E), d = V(d);
      const m = b.target;
      if (e.params.navigation.hideOnClick && !d.includes(m) && !E.includes(m)) {
        if (
          e.pagination && e.params.pagination && e.params.pagination.clickable
          && (e.pagination.el === m || e.pagination.el.contains(m))
        ) return;
        let v;
        E.length
          ? v = E[0].classList.contains(e.params.navigation.hiddenClass)
          : d.length && (v = d[0].classList.contains(e.params.navigation.hiddenClass)),
          r(v === !0 ? "navigationShow" : "navigationHide"),
          [...E, ...d].filter(x => !!x).forEach(x => x.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
  const h = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), u(), l();
    },
    p = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
    };
  Object.assign(e.navigation, { enable: h, disable: p, update: l, init: u, destroy: f });
}
function ae(i) {
  return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function he(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const n = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: d => d,
      formatFractionTotal: d => d,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`,
    },
  }),
    e.pagination = { el: null, bullets: [] };
  let a, l = 0;
  function o() {
    return !e.params.pagination.el || !e.pagination.el
      || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function c(d, m) {
    const { bulletActiveClass: v } = e.params.pagination;
    d
      && (d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`],
        d
        && (d.classList.add(`${v}-${m}`),
          d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`],
          d && d.classList.add(`${v}-${m}-${m}`)));
  }
  function u(d) {
    const m = d.target.closest(ae(e.params.pagination.bulletClass));
    if (!m) return;
    d.preventDefault();
    const v = me(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === v) return;
      e.slideToLoop(v);
    } else e.slideTo(v);
  }
  function f() {
    const d = e.rtl, m = e.params.pagination;
    if (o()) return;
    let v = e.pagination.el;
    v = V(v);
    let x, M;
    const L = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      G = e.params.loop ? Math.ceil(L / e.params.slidesPerGroup) : e.snapGrid.length;
    if (
      e.params.loop
        ? (M = e.previousRealIndex || 0,
          x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex)
        : typeof e.snapIndex < "u"
        ? (x = e.snapIndex, M = e.previousSnapIndex)
        : (M = e.previousIndex || 0, x = e.activeIndex || 0),
        m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0
    ) {
      const C = e.pagination.bullets;
      let O, P, y;
      if (
        m.dynamicBullets && (a = Me(C[0], e.isHorizontal() ? "width" : "height", !0),
          v.forEach(w => {
            w.style[e.isHorizontal() ? "width" : "height"] = `${a * (m.dynamicMainBullets + 4)}px`;
          }),
          m.dynamicMainBullets > 1 && M !== void 0
          && (l += x - (M || 0), l > m.dynamicMainBullets - 1 ? l = m.dynamicMainBullets - 1 : l < 0 && (l = 0)),
          O = Math.max(x - l, 0),
          P = O + (Math.min(C.length, m.dynamicMainBullets) - 1),
          y = (P + O) / 2),
          C.forEach(w => {
            const S = [
              ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(T => `${m.bulletActiveClass}${T}`),
            ].map(T => typeof T == "string" && T.includes(" ") ? T.split(" ") : T).flat();
            w.classList.remove(...S);
          }),
          v.length > 1
      ) {
        C.forEach(w => {
          const S = me(w);
          S === x
            ? w.classList.add(...m.bulletActiveClass.split(" "))
            : e.isElement && w.setAttribute("part", "bullet"),
            m.dynamicBullets
            && (S >= O && S <= P && w.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              S === O && c(w, "prev"),
              S === P && c(w, "next"));
        });
      } else {
        const w = C[x];
        if (
          w && w.classList.add(...m.bulletActiveClass.split(" ")),
            e.isElement && C.forEach((S, T) => {
              S.setAttribute("part", T === x ? "bullet-active" : "bullet");
            }),
            m.dynamicBullets
        ) {
          const S = C[O], T = C[P];
          for (let I = O; I <= P; I += 1) C[I] && C[I].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          c(S, "prev"), c(T, "next");
        }
      }
      if (m.dynamicBullets) {
        const w = Math.min(C.length, m.dynamicMainBullets + 4), S = (a * w - a) / 2 - y * a, T = d ? "right" : "left";
        C.forEach(I => {
          I.style[e.isHorizontal() ? T : "top"] = `${S}px`;
        });
      }
    }
    v.forEach((C, O) => {
      if (
        m.type === "fraction" && (C.querySelectorAll(ae(m.currentClass)).forEach(P => {
          P.textContent = m.formatFractionCurrent(x + 1);
        }),
          C.querySelectorAll(ae(m.totalClass)).forEach(P => {
            P.textContent = m.formatFractionTotal(G);
          })), m.type === "progressbar"
      ) {
        let P;
        m.progressbarOpposite
          ? P = e.isHorizontal() ? "vertical" : "horizontal"
          : P = e.isHorizontal() ? "horizontal" : "vertical";
        const y = (x + 1) / G;
        let w = 1, S = 1;
        P === "horizontal" ? w = y : S = y,
          C.querySelectorAll(ae(m.progressbarFillClass)).forEach(T => {
            T.style.transform = `translate3d(0,0,0) scaleX(${w}) scaleY(${S})`,
              T.style.transitionDuration = `${e.params.speed}ms`;
          });
      }
      m.type === "custom" && m.renderCustom
        ? (C.innerHTML = m.renderCustom(e, x + 1, G), O === 0 && r("paginationRender", C))
        : (O === 0 && r("paginationRender", C), r("paginationUpdate", C)),
        e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function h() {
    const d = e.params.pagination;
    if (o()) return;
    const m = e.virtual && e.params.virtual.enabled
      ? e.virtual.slides.length
      : e.grid && e.params.grid.rows > 1
      ? e.slides.length / Math.ceil(e.params.grid.rows)
      : e.slides.length;
    let v = e.pagination.el;
    v = V(v);
    let x = "";
    if (d.type === "bullets") {
      let M = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && M > m && (M = m);
      for (let L = 0; L < M; L += 1) {
        d.renderBullet
          ? x += d.renderBullet.call(e, L, d.bulletClass)
          : x += `<${d.bulletElement} ${
            e.isElement ? "part=\"bullet\"" : ""
          } class="${d.bulletClass}"></${d.bulletElement}>`;
      }
    }
    d.type === "fraction"
    && (d.renderFraction
      ? x = d.renderFraction.call(e, d.currentClass, d.totalClass)
      : x = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),
      d.type === "progressbar"
      && (d.renderProgressbar
        ? x = d.renderProgressbar.call(e, d.progressbarFillClass)
        : x = `<span class="${d.progressbarFillClass}"></span>`),
      e.pagination.bullets = [],
      v.forEach(M => {
        d.type !== "custom" && (M.innerHTML = x || ""),
          d.type === "bullets" && e.pagination.bullets.push(...M.querySelectorAll(ae(d.bulletClass)));
      }),
      d.type !== "custom" && r("paginationRender", v[0]);
  }
  function p() {
    e.params.pagination = qe(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const d = e.params.pagination;
    if (!d.el) return;
    let m;
    typeof d.el == "string" && e.isElement && (m = e.el.querySelector(d.el)),
      !m && typeof d.el == "string" && (m = [...document.querySelectorAll(d.el)]),
      m || (m = d.el),
      !(!m || m.length === 0)
      && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(m) && m.length > 1
        && (m = [...e.el.querySelectorAll(d.el)],
          m.length > 1 && (m = m.filter(v => _e(v, ".swiper")[0] === e.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(e.pagination, { el: m }),
        m = V(m),
        m.forEach(v => {
          d.type === "bullets" && d.clickable && v.classList.add(...(d.clickableClass || "").split(" ")),
            v.classList.add(d.modifierClass + d.type),
            v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === "bullets" && d.dynamicBullets
            && (v.classList.add(`${d.modifierClass}${d.type}-dynamic`),
              l = 0,
              d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" && d.progressbarOpposite && v.classList.add(d.progressbarOppositeClass),
            d.clickable && v.addEventListener("click", u),
            e.enabled || v.classList.add(d.lockClass);
        }));
  }
  function g() {
    const d = e.params.pagination;
    if (o()) return;
    let m = e.pagination.el;
    m && (m = V(m),
      m.forEach(v => {
        v.classList.remove(d.hiddenClass),
          v.classList.remove(d.modifierClass + d.type),
          v.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
          d.clickable
          && (v.classList.remove(...(d.clickableClass || "").split(" ")), v.removeEventListener("click", u));
      })),
      e.pagination.bullets && e.pagination.bullets.forEach(v => v.classList.remove(...d.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const d = e.params.pagination;
    let { el: m } = e.pagination;
    m = V(m),
      m.forEach(v => {
        v.classList.remove(d.horizontalClass, d.verticalClass),
          v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
      });
  }),
    s("init", () => {
      e.params.pagination.enabled === !1 ? E() : (p(), h(), f());
    }),
    s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && f();
    }),
    s("snapIndexChange", () => {
      f();
    }),
    s("snapGridLengthChange", () => {
      h(), f();
    }),
    s("destroy", () => {
      g();
    }),
    s("enable disable", () => {
      let { el: d } = e.pagination;
      d && (d = V(d), d.forEach(m => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }),
    s("lock unlock", () => {
      f();
    }),
    s("click", (d, m) => {
      const v = m.target, x = V(e.pagination.el);
      if (
        e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0
        && !v.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation
          && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl)
        ) return;
        const M = x[0].classList.contains(e.params.pagination.hiddenClass);
        r(M === !0 ? "paginationShow" : "paginationHide"),
          x.forEach(L => L.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: d } = e.pagination;
      d && (d = V(d), d.forEach(m => m.classList.remove(e.params.pagination.paginationDisabledClass))), p(), h(), f();
    },
    E = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: d } = e.pagination;
      d && (d = V(d), d.forEach(m => m.classList.add(e.params.pagination.paginationDisabledClass))), g();
    };
  Object.assign(e.pagination, { enable: b, disable: E, render: h, update: f, init: p, destroy: g });
}
new D(".blog-slider", {
  spaceBetween: 30,
  speed: 1500,
  loop: !1,
  autoplay: { delay: 200, disableOnInteraction: !1 },
  breakpoints: {
    1024: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    0: { slidesPerView: 1, spaceBetween: 20 },
  },
  spaceBetween: 20,
  modules: [he],
  pagination: { el: ".swiper-pagination", clickable: !0 },
});
new D(".coaching-slider", {
  spaceBetween: 30,
  speed: 1500,
  loop: !1,
  autoplay: { delay: 1500, disableOnInteraction: !1 },
  breakpoints: { 1024: { slidesPerView: 3 }, 640: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
  modules: [ge],
  navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
});
new D(".countryFlag-slider", {
  spaceBetween: 30,
  speed: 1500,
  loop: !1,
  autoplay: { delay: 1500, disableOnInteraction: !1 },
  breakpoints: {
    1199: { slidesPerView: 4 },
    991: { slidesPerView: 3 },
    767: { slidesPerView: 2 },
    650: { slidesPerView: 2 },
    575: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
  modules: [ge],
  navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
});
new D(".testimonial-slider", {
  spaceBetween: 30,
  speed: 1500,
  loop: !1,
  autoplay: { delay: 1500, disableOnInteraction: !1 },
  breakpoints: { 1024: { slidesPerView: 3 }, 640: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
  modules: [ge],
  navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
});
new D(".homeSlider", {
  spaceBetween: 30,
  speed: 1500,
  loop: !1,
  autoplay: { delay: 200, disableOnInteraction: !1 },
  slidesPerView: 1,
  modules: [he],
  pagination: { el: ".swiper-pagination", clickable: !0 },
});
document.addEventListener("DOMContentLoaded", function() {
  new D(".service-slider", {
    spaceBetween: 30,
    speed: 1500,
    loop: !1,
    autoplay: { delay: 200, disableOnInteraction: !1 },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      0: { slidesPerView: 1, spaceBetween: 20 },
    },
    spaceBetween: 20,
    modules: [he],
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
    new D(".team2-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: !1,
      autoplay: { delay: 200, disableOnInteraction: !1 },
      breakpoints: {
        1440: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
        535: { slidesPerView: 2, spaceBetween: 15 },
        0: { slidesPerView: 1, spaceBetween: 20 },
      },
      spaceBetween: 20,
      modules: [he],
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
    new D(".feedback-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: !1,
      autoplay: { delay: 1500, disableOnInteraction: !1 },
      breakpoints: { 1024: { slidesPerView: 1 }, 640: { slidesPerView: 1 }, 0: { slidesPerView: 1 } },
      modules: [ge],
      navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
    }),
    setTimeout(() => {
      AOS.init({ once: !0, duration: 700, offset: 100 }), window.dispatchEvent(new Event("resize")), AOS.refresh();
    }, 500);
});
Ue.init();
var Ee = document.getElementById("to-top-button");
Ee && (window.onscroll = function() {
  document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
    ? Ee.classList.remove("hidden")
    : Ee.classList.add("hidden");
},
  window.goToTop = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

window.FontAwesomeKitConfig = {
  asyncLoading: { enabled: true },
  autoA11y: { enabled: true },
  baseUrl: "https://ka-f.fontawesome.com",
  baseUrlKit: "https://kit.fontawesome.com",
  detectConflictsUntil: null,
  iconUploads: {},
  id: 98048931,
  license: "free",
  method: "css",
  minify: { enabled: true },
  token: "b99e675b6e",
  v4FontFaceShim: { enabled: false },
  v4shim: { enabled: false },
  version: "5.15.1",
};
!(function (t) {
  "function" == typeof define && define.amd ? define("kit-loader", t) : t();
})(function () {
  "use strict";
  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(e);
  }
  function e(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function n(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      e &&
        (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function o(t) {
    for (var o = 1; o < arguments.length; o++) {
      var r = null != arguments[o] ? arguments[o] : {};
      o % 2
        ? n(Object(r), !0).forEach(function (n) {
            e(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : n(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function r(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if (
          !(
            Symbol.iterator in Object(t) ||
            "[object Arguments]" === Object.prototype.toString.call(t)
          )
        )
          return;
        var n = [],
          o = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var c, a = t[Symbol.iterator]();
            !(o = (c = a.next()).done) &&
            (n.push(c.value), !e || n.length !== e);
            o = !0
          );
        } catch (t) {
          (r = !0), (i = t);
        } finally {
          try {
            o || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
        return n;
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  function i(t, e) {
    var n = (e && e.addOn) || "",
      o = (e && e.baseFilename) || t.license + n,
      r = e && e.minify ? ".min" : "",
      i = (e && e.fileSuffix) || t.method,
      c = (e && e.subdir) || t.method;
    return (
      t.baseUrl +
      "/releases/" +
      ("latest" === t.version ? "latest" : "v".concat(t.version)) +
      "/" +
      c +
      "/" +
      o +
      r +
      "." +
      i
    );
  }
  function c(t) {
    return t.baseUrlKit + "/" + t.token + "/" + t.id + "/kit-upload.css";
  }
  function a(t, e) {
    var n = e || ["fa"],
      o = "." + Array.prototype.join.call(n, ",."),
      r = t.querySelectorAll(o);
    Array.prototype.forEach.call(r, function (e) {
      var n = e.getAttribute("title");
      e.setAttribute("aria-hidden", "true");
      var o =
        !e.nextElementSibling ||
        !e.nextElementSibling.classList.contains("sr-only");
      if (n && o) {
        var r = t.createElement("span");
        (r.innerHTML = n),
          r.classList.add("sr-only"),
          e.parentNode.insertBefore(r, e.nextSibling);
      }
    });
  }
  var u,
    f = function () {},
    s =
      "undefined" != typeof global &&
      void 0 !== global.process &&
      "function" == typeof global.process.emit,
    d = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
    l = [];
  function h() {
    for (var t = 0; t < l.length; t++) l[t][0](l[t][1]);
    (l = []), (u = !1);
  }
  function m(t, e) {
    l.push([t, e]), u || ((u = !0), d(h, 0));
  }
  function p(t) {
    var e = t.owner,
      n = e._state,
      o = e._data,
      r = t[n],
      i = t.then;
    if ("function" == typeof r) {
      n = "fulfilled";
      try {
        o = r(o);
      } catch (t) {
        g(i, t);
      }
    }
    v(i, o) || ("fulfilled" === n && y(i, o), "rejected" === n && g(i, o));
  }
  function v(e, n) {
    var o;
    try {
      if (e === n)
        throw new TypeError(
          "A promises callback cannot return that same promise."
        );
      if (n && ("function" == typeof n || "object" === t(n))) {
        var r = n.then;
        if ("function" == typeof r)
          return (
            r.call(
              n,
              function (t) {
                o || ((o = !0), n === t ? b(e, t) : y(e, t));
              },
              function (t) {
                o || ((o = !0), g(e, t));
              }
            ),
            !0
          );
      }
    } catch (t) {
      return o || g(e, t), !0;
    }
    return !1;
  }
  function y(t, e) {
    (t !== e && v(t, e)) || b(t, e);
  }
  function b(t, e) {
    "pending" === t._state && ((t._state = "settled"), (t._data = e), m(A, t));
  }
  function g(t, e) {
    "pending" === t._state && ((t._state = "settled"), (t._data = e), m(O, t));
  }
  function w(t) {
    t._then = t._then.forEach(p);
  }
  function A(t) {
    (t._state = "fulfilled"), w(t);
  }
  function O(t) {
    (t._state = "rejected"),
      w(t),
      !t._handled && s && global.process.emit("unhandledRejection", t._data, t);
  }
  function j(t) {
    global.process.emit("rejectionHandled", t);
  }
  function S(t) {
    if ("function" != typeof t)
      throw new TypeError("Promise resolver " + t + " is not a function");
    if (this instanceof S == !1)
      throw new TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    (this._then = []),
      (function (t, e) {
        function n(t) {
          g(e, t);
        }
        try {
          t(function (t) {
            y(e, t);
          }, n);
        } catch (t) {
          n(t);
        }
      })(t, this);
  }
  (S.prototype = {
    constructor: S,
    _state: "pending",
    _then: null,
    _data: void 0,
    _handled: !1,
    then: function (t, e) {
      var n = {
        owner: this,
        then: new this.constructor(f),
        fulfilled: t,
        rejected: e,
      };
      return (
        (!e && !t) ||
          this._handled ||
          ((this._handled = !0), "rejected" === this._state && s && m(j, this)),
        "fulfilled" === this._state || "rejected" === this._state
          ? m(p, n)
          : this._then.push(n),
        n.then
      );
    },
    catch: function (t) {
      return this.then(null, t);
    },
  }),
    (S.all = function (t) {
      if (!Array.isArray(t))
        throw new TypeError("You must pass an array to Promise.all().");
      return new S(function (e, n) {
        var o = [],
          r = 0;
        function i(t) {
          return (
            r++,
            function (n) {
              (o[t] = n), --r || e(o);
            }
          );
        }
        for (var c, a = 0; a < t.length; a++)
          (c = t[a]) && "function" == typeof c.then
            ? c.then(i(a), n)
            : (o[a] = c);
        r || e(o);
      });
    }),
    (S.race = function (t) {
      if (!Array.isArray(t))
        throw new TypeError("You must pass an array to Promise.race().");
      return new S(function (e, n) {
        for (var o, r = 0; r < t.length; r++)
          (o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o);
      });
    }),
    (S.resolve = function (e) {
      return e && "object" === t(e) && e.constructor === S
        ? e
        : new S(function (t) {
            t(e);
          });
    }),
    (S.reject = function (t) {
      return new S(function (e, n) {
        n(t);
      });
    });
  var E = "function" == typeof Promise ? Promise : S;
  function _(t, n) {
    var o = n.fetch,
      r = n.XMLHttpRequest,
      i = n.token;
    return new E(function (n, c) {
      if ("function" == typeof o)
        o(t, {
          mode: "cors",
          cache: "default",
          headers: new Headers(e({}, "fa-kit-token", i)),
        })
          .then(function (t) {
            if (t.ok) return t.text();
            throw new Error("");
          })
          .then(function (t) {
            n(t);
          })
          .catch(c);
      else if ("function" == typeof r) {
        var a = new r();
        a.addEventListener("loadend", function () {
          this.responseText ? n(this.responseText) : c(new Error(""));
        });
        ["abort", "error", "timeout"].map(function (t) {
          a.addEventListener(t, function () {
            c(new Error(""));
          });
        }),
          a.open("GET", t),
          a.setRequestHeader("fa-kit-token", i),
          a.send();
      } else {
        c(new Error(""));
      }
    });
  }
  function F(t, e, n) {
    var o = t;
    return (
      [
        [
          /(url\("?)\.\.\/\.\.\/\.\./g,
          function (t, n) {
            return "".concat(n).concat(e);
          },
        ],
        [
          /(url\("?)\.\.\/webfonts/g,
          function (t, o) {
            return "".concat(o).concat(e, "/releases/v").concat(n, "/webfonts");
          },
        ],
        [
          /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
          function (t, n) {
            return "".concat(n).concat(e);
          },
        ],
      ].forEach(function (t) {
        var e = r(t, 2),
          n = e[0],
          i = e[1];
        o = o.replace(n, i);
      }),
      o
    );
  }
  function P(t, e) {
    var n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : function () {},
      r = e.document || r,
      u = a.bind(a, r, ["fa", "fab", "fas", "far", "fal", "fad", "fak"]),
      f = Object.keys(t.iconUploads || {}).length > 0;
    t.autoA11y.enabled && n(u);
    var s = [{ id: "fa-main", addOn: void 0 }];
    t.v4shim.enabled && s.push({ id: "fa-v4-shims", addOn: "-v4-shims" }),
      t.v4FontFaceShim.enabled &&
        s.push({ id: "fa-v4-font-face", addOn: "-v4-font-face" }),
      f && s.push({ id: "fa-kit-upload", customCss: !0 });
    var d = s.map(function (n) {
      return new E(function (r, a) {
        _(
          n.customCss
            ? c(t)
            : i(t, { addOn: n.addOn, minify: t.minify.enabled }),
          e
        )
          .then(function (i) {
            r(
              k(
                i,
                o({}, e, {
                  baseUrl: t.baseUrl,
                  version: t.version,
                  id: n.id,
                  contentFilter: function (t, e) {
                    return F(t, e.baseUrl, e.version);
                  },
                })
              )
            );
          })
          .catch(a);
      });
    });
    return E.all(d);
  }
  function k(t, e) {
    var n =
        e.contentFilter ||
        function (t, e) {
          return t;
        },
      o = document.createElement("style"),
      r = document.createTextNode(n(t, e));
    return (
      o.appendChild(r),
      (o.media = "all"),
      e.id && o.setAttribute("id", e.id),
      e &&
        e.detectingConflicts &&
        e.detectionIgnoreAttr &&
        o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
      o
    );
  }
  function C(t, e) {
    (e.autoA11y = t.autoA11y.enabled),
      "pro" === t.license &&
        ((e.autoFetchSvg = !0),
        (e.fetchSvgFrom =
          t.baseUrl +
          "/releases/" +
          ("latest" === t.version ? "latest" : "v".concat(t.version)) +
          "/svgs"),
        (e.fetchUploadedSvgFrom = t.uploadsUrl));
    var n = [];
    return (
      t.v4shim.enabled &&
        n.push(
          new E(function (n, r) {
            _(i(t, { addOn: "-v4-shims", minify: t.minify.enabled }), e)
              .then(function (t) {
                n(T(t, o({}, e, { id: "fa-v4-shims" })));
              })
              .catch(r);
          })
        ),
      n.push(
        new E(function (n, r) {
          _(i(t, { minify: t.minify.enabled }), e)
            .then(function (t) {
              var r = T(t, o({}, e, { id: "fa-main" }));
              n(
                (function (t, e) {
                  var n =
                      e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0,
                    o = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
                  void 0 !== o &&
                    t.setAttribute("data-auto-a11y", o ? "true" : "false");
                  n &&
                    (t.setAttributeNode(
                      document.createAttribute("data-auto-fetch-svg")
                    ),
                    t.setAttribute("data-fetch-svg-from", e.fetchSvgFrom),
                    t.setAttribute(
                      "data-fetch-uploaded-svg-from",
                      e.fetchUploadedSvgFrom
                    ));
                  return t;
                })(r, e)
              );
            })
            .catch(r);
        })
      ),
      E.all(n)
    );
  }
  function T(t, e) {
    var n = document.createElement("SCRIPT"),
      o = document.createTextNode(t);
    return (
      n.appendChild(o),
      (n.referrerPolicy = "strict-origin"),
      e.id && n.setAttribute("id", e.id),
      e &&
        e.detectingConflicts &&
        e.detectionIgnoreAttr &&
        n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
      n
    );
  }
  function L(t) {
    var e,
      n = [],
      o = document,
      r = o.documentElement.doScroll,
      i = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
    i ||
      o.addEventListener(
        "DOMContentLoaded",
        (e = function () {
          for (
            o.removeEventListener("DOMContentLoaded", e), i = 1;
            (e = n.shift());

          )
            e();
        })
      ),
      i ? setTimeout(t, 0) : n.push(t);
  }
  function x(t) {
    "undefined" != typeof MutationObserver &&
      new MutationObserver(t).observe(document, { childList: !0, subtree: !0 });
  }
  try {
    if (window.FontAwesomeKitConfig) {
      var I = window.FontAwesomeKitConfig,
        U = {
          detectingConflicts:
            I.detectConflictsUntil &&
            new Date() <= new Date(I.detectConflictsUntil),
          detectionIgnoreAttr: "data-fa-detection-ignore",
          fetch: window.fetch,
          token: I.token,
          XMLHttpRequest: window.XMLHttpRequest,
          document: document,
        },
        D = document.currentScript,
        M = D ? D.parentElement : document.head;
      (function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "js" === t.method
          ? C(t, e)
          : "css" === t.method
          ? P(t, e, function (t) {
              L(t), x(t);
            })
          : void 0;
      })(I, U)
        .then(function (t) {
          t.map(function (t) {
            try {
              M.insertBefore(t, D ? D.nextSibling : null);
            } catch (e) {
              M.appendChild(t);
            }
          }),
            U.detectingConflicts &&
              D &&
              L(function () {
                D.setAttributeNode(
                  document.createAttribute(U.detectionIgnoreAttr)
                );
                var t = (function (t, e) {
                  var n = document.createElement("script");
                  return (
                    e &&
                      e.detectionIgnoreAttr &&
                      n.setAttributeNode(
                        document.createAttribute(e.detectionIgnoreAttr)
                      ),
                    (n.src = i(t, {
                      baseFilename: "conflict-detection",
                      fileSuffix: "js",
                      subdir: "js",
                      minify: t.minify.enabled,
                    })),
                    n
                  );
                })(I, U);
                document.body.appendChild(t);
              });
        })
        .catch(function (t) {
          console.error("".concat("Font Awesome Kit:", " ").concat(t));
        });
    }
  } catch (t) {
    console.error("".concat("Font Awesome Kit:", " ").concat(t));
  }
});

!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (n.vhCheck = t());
})(this, function () {
  "use strict";
  function e() {
    var n,
      t,
      i =
        (((n = document.createElement("div")).style.cssText =
          "position: fixed; top: 0; height: 100vh; pointer-events: none;"),
        document.documentElement.insertBefore(
          n,
          document.documentElement.firstChild
        ),
        n),
      r = window.innerHeight,
      u = i.offsetHeight,
      f = u - r;
    return (
      (t = i),
      document.documentElement.removeChild(t),
      { vh: u, windowHeight: r, offset: f, isNeeded: 0 !== f, value: 0 }
    );
  }
  function i() {}
  function o() {
    var n = e();
    return (n.value = n.offset), n;
  }
  function s(n) {
    return "string" == typeof n && 0 < n.length;
  }
  function h(n, t) {
    f.push({ eventName: n, callback: t });
    window.addEventListener(n, t, !!u && { passive: !0 });
  }
  function v() {
    f.forEach(function (n) {
      window.removeEventListener(n.eventName, n.callback);
    });
    f = [];
  }
  function c(n, t) {
    document.documentElement.style.setProperty("--" + n, t.value + "px");
  }
  function l(n, i) {
    return t({}, n, { unbind: v, recompute: i.method });
  }
  var t = function () {
      return (t =
        Object.assign ||
        function (n) {
          for (var r, i, t = 1, u = arguments.length; t < u; t++)
            for (i in (r = arguments[t]))
              Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
          return n;
        }).apply(this, arguments);
    },
    a = Object.freeze({
      noop: i,
      computeDifference: o,
      redefineVhUnit: function () {
        var n = e();
        return (n.value = 0.01 * n.windowHeight), n;
      },
    }),
    r = Object.freeze({
      cssVarName: "vh-offset",
      redefineVh: !1,
      method: o,
      force: !1,
      bind: !0,
      updateOnTouch: !1,
      onUpdate: i,
    }),
    u = !1,
    f = [],
    n;
  try {
    n = Object.defineProperty({}, "passive", {
      get: function () {
        u = !0;
      },
    });
    window.addEventListener("test", n, n);
    window.removeEventListener("test", n, n);
  } catch (o) {
    u = !1;
  }
  return function (n) {
    function e() {
      window.requestAnimationFrame(function () {
        var n = u.method();
        c(u.cssVarName, n);
        u.onUpdate(l(n, u));
      });
    }
    var u = Object.freeze(
        (function (n) {
          if (s(n)) return t({}, r, { cssVarName: n });
          if ("object" != typeof n) return r;
          var f,
            u = {
              force: !0 === n.force,
              bind: !1 !== n.bind,
              updateOnTouch: !0 === n.updateOnTouch,
              onUpdate:
                ((f = n.onUpdate), "function" == typeof f ? n.onUpdate : i),
            },
            e = !0 === n.redefineVh;
          return (
            (u.method = a[e ? "redefineVhUnit" : "computeDifference"]),
            (u.cssVarName = s(n.cssVarName)
              ? n.cssVarName
              : e
              ? "vh"
              : r.cssVarName),
            u
          );
        })(n)
      ),
      f = l(u.method(), u);
    return !f.isNeeded && !u.force
      ? f
      : (c(u.cssVarName, f), u.onUpdate(f), !u.bind)
      ? f
      : (f.unbind(),
        h("orientationchange", e),
        u.updateOnTouch && h("touchmove", e),
        f);
  };
});

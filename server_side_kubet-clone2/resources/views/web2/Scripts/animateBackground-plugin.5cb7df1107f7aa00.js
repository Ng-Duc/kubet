(function (n) {
  function r(n) {
    n = n.replace(/left|top/g, "0px");
    n = n.replace(/right|bottom/g, "100%");
    n = n.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
    var t = n.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
    return [parseFloat(t[1], 10), t[2], parseFloat(t[3], 10), t[4]];
  }
  var t, i;
  (document.defaultView && document.defaultView.getComputedStyle) ||
    ((t = jQuery.curCSS),
    (jQuery.curCSS = function (n, i, r) {
      if (
        (i === "background-position" && (i = "backgroundPosition"),
        i !== "backgroundPosition" || !n.currentStyle || n.currentStyle[i])
      )
        return t.apply(this, arguments);
      var u = n.style;
      return !r && u && u[i]
        ? u[i]
        : t(n, "backgroundPositionX", r) + " " + t(n, "backgroundPositionY", r);
    }));
  i = n.fn.animate;
  n.fn.animate = function (n) {
    return (
      "background-position" in n &&
        ((n.backgroundPosition = n["background-position"]),
        delete n["background-position"]),
      "backgroundPosition" in n &&
        (n.backgroundPosition = "(" + n.backgroundPosition + ")"),
      i.apply(this, arguments)
    );
  };
  n.fx.step.backgroundPosition = function (t) {
    var i, u, f;
    t.bgPosReady ||
      ((i = n.css(t.elem, "backgroundPosition")),
      i || (i = "0px 0px"),
      (i = r(i)),
      (t.start = [i[0], i[2]]),
      (u = r(t.end)),
      (t.end = [u[0], u[2]]),
      (t.unit = [u[1], u[3]]),
      (t.bgPosReady = !0));
    f = [];
    f[0] = (t.end[0] - t.start[0]) * t.pos + t.start[0] + t.unit[0];
    f[1] = (t.end[1] - t.start[1]) * t.pos + t.start[1] + t.unit[1];
    t.elem.style.backgroundPosition = f[0] + " " + f[1];
  };
})(jQuery);

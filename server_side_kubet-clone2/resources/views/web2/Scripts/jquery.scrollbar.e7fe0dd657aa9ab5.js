function scrollBarIsIOS() {
  var n = navigator.userAgent;
  return (
    !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ||
    (n.indexOf("Macintosh") > -1 &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2)
  );
}
(function (n, t) {
  typeof define == "function" && define.amd
    ? define(["jquery"], t)
    : t(n.jQuery);
})(this, function (n) {
  "use strict";
  function f(i) {
    if (t.webkit && !i) return { height: 0, width: 0 };
    if (!t.data.outer) {
      var r = {
        border: "none",
        "box-sizing": "content-box",
        height: "200px",
        margin: "0",
        padding: "0",
        width: "200px",
      };
      t.data.inner = n("<div>").css(n.extend({}, r));
      t.data.outer = n("<div>")
        .css(
          n.extend(
            {
              left: "-1000px",
              overflow: "scroll",
              position: "absolute",
              top: "-1000px",
            },
            r
          )
        )
        .append(t.data.inner)
        .appendTo("body");
    }
    return (
      t.data.outer.scrollLeft(1e3).scrollTop(1e3),
      {
        height: Math.ceil(
          t.data.outer.offset().top - t.data.inner.offset().top || 0
        ),
        width: Math.ceil(
          t.data.outer.offset().left - t.data.inner.offset().left || 0
        ),
      }
    );
  }
  function h() {
    var n = f(!0);
    return !(n.height || n.width);
  }
  function e(n) {
    var t = n.originalEvent;
    return t.axis && t.axis === t.HORIZONTAL_AXIS
      ? !1
      : t.wheelDeltaX
      ? !1
      : !0;
  }
  var s = !1,
    t = {
      data: { index: 0, name: "scrollbar" },
      macosx: /mac/i.test(navigator.platform),
      mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(
        navigator.userAgent
      ),
      overlay: null,
      scroll: null,
      scrolls: [],
      webkit:
        /webkit/i.test(navigator.userAgent) &&
        !/edge\/\d+/i.test(navigator.userAgent),
    },
    r,
    u,
    o,
    i;
  t.scrolls.add = function (n) {
    this.remove(n).push(n);
  };
  t.scrolls.remove = function (t) {
    while (n.inArray(t, this) >= 0) this.splice(n.inArray(t, this), 1);
    return this;
  };
  r = {
    autoScrollSize: !0,
    autoUpdate: !0,
    debug: !1,
    disableBodyScroll: !1,
    duration: 200,
    ignoreMobile: !1,
    ignoreOverlay: !1,
    scrollStep: 30,
    showArrows: !1,
    stepScrolling: !0,
    scrollx: null,
    scrolly: null,
    onDestroy: null,
    onInit: null,
    onScroll: null,
    onUpdate: null,
  };
  u = function (u) {
    t.scroll ||
      ((t.overlay = h()),
      (t.scroll = f()),
      i(),
      n(window).resize(function () {
        var r = !1,
          n;
        t.scroll &&
          (t.scroll.height || t.scroll.width) &&
          ((n = f()),
          (n.height !== t.scroll.height || n.width !== t.scroll.width) &&
            ((t.scroll = n), (r = !0)));
        i(r);
      }));
    this.container = u;
    this.namespace = ".scrollbar_" + t.data.index++;
    this.options = n.extend({}, r, window.jQueryScrollbarOptions || {});
    this.scrollTo = null;
    this.scrollx = {};
    this.scrolly = {};
    u.data(t.data.name, this);
    t.scrolls.add(this);
  };
  u.prototype = {
    destroy: function () {
      if (this.wrapper) {
        this.container.removeData(t.data.name);
        t.scrolls.remove(this);
        var i = this.container.scrollLeft(),
          r = this.container.scrollTop();
        this.container
          .insertBefore(this.wrapper)
          .css({ height: "", margin: "", "max-height": "" })
          .removeClass(
            "scroll-content scroll-scrollx_visible scroll-scrolly_visible"
          )
          .off(this.namespace)
          .scrollLeft(i)
          .scrollTop(r);
        this.scrollx.scroll
          .removeClass("scroll-scrollx_visible")
          .find("div")
          .andSelf()
          .off(this.namespace);
        this.scrolly.scroll
          .removeClass("scroll-scrolly_visible")
          .find("div")
          .andSelf()
          .off(this.namespace);
        this.wrapper.remove();
        n(document).add("body").off(this.namespace);
        n.isFunction(this.options.onDestroy) &&
          this.options.onDestroy.apply(this, [this.container]);
      }
    },
    init: function (i) {
      var o = this,
        r = this.container,
        c = this.containerWrapper || r,
        s = this.namespace,
        f = n.extend(this.options, i || {}),
        u = { x: this.scrollx, y: this.scrolly },
        h = this.wrapper,
        a = { scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop() },
        l;
      if (
        (t.mobile && f.ignoreMobile) ||
        (t.overlay && f.ignoreOverlay) ||
        (t.macosx && !t.webkit)
      )
        return !1;
      if (h)
        c.css({
          height: "auto",
          "margin-right": t.scroll.width * -1 + "px",
          "max-height": "",
        });
      else {
        this.wrapper = h = n("<div>")
          .addClass("scroll-wrapper")
          .addClass(r.attr("class"))
          .css(
            "position",
            r.css("position") == "absolute" ? "absolute" : "relative"
          )
          .insertBefore(r)
          .append(r);
        r.is("textarea") &&
          ((this.containerWrapper = c = n("<div>").insertBefore(r).append(r)),
          h.addClass("scroll-textarea"));
        c.addClass("scroll-content").css({
          height: "auto",
          "margin-right": t.scroll.width * -1 + "px",
          "max-height": "",
        });
        r.on("scroll" + s, function () {
          n.isFunction(f.onScroll) &&
            f.onScroll.call(
              o,
              {
                maxScroll: u.y.maxScrollOffset,
                scroll: r.scrollTop(),
                size: u.y.size,
                visible: u.y.visible,
              },
              {
                maxScroll: u.x.maxScrollOffset,
                scroll: r.scrollLeft(),
                size: u.x.size,
                visible: u.x.visible,
              }
            );
          u.x.isVisible &&
            u.x.scroll.bar.css("left", r.scrollLeft() * u.x.kx + "px");
          u.y.isVisible &&
            u.y.scroll.bar.css("top", r.scrollTop() * u.y.kx + "px");
        });
        h.on("scroll" + s, function () {
          h.scrollTop(0).scrollLeft(0);
        });
        if (f.disableBodyScroll) {
          l = function (n) {
            e(n)
              ? u.y.isVisible && u.y.mousewheel(n)
              : u.x.isVisible && u.x.mousewheel(n);
          };
          h.on("MozMousePixelScroll" + s, l);
          h.on("mousewheel" + s, l);
          if (t.mobile)
            h.on("touchstart" + s, function (t) {
              var i =
                  (t.originalEvent.touches && t.originalEvent.touches[0]) || t,
                u = { pageX: i.pageX, pageY: i.pageY },
                f = { left: r.scrollLeft(), top: r.scrollTop() };
              n(document).on("touchmove" + s, function (n) {
                var t =
                  (n.originalEvent.targetTouches &&
                    n.originalEvent.targetTouches[0]) ||
                  n;
                r.scrollLeft(f.left + u.pageX - t.pageX);
                r.scrollTop(f.top + u.pageY - t.pageY);
                n.preventDefault();
              });
              n(document).on("touchend" + s, function () {
                n(document).off(s);
              });
            });
        }
        n.isFunction(f.onInit) && f.onInit.apply(this, [r]);
      }
      n.each(u, function (t, i) {
        var v = null,
          l = 1,
          c = t === "x" ? "scrollLeft" : "scrollTop",
          a = f.scrollStep,
          y = function () {
            var n = r[c]();
            r[c](n + a);
            l == 1 && n + a >= h && (n = r[c]());
            l == -1 && n + a <= h && (n = r[c]());
            r[c]() == n && v && v();
          },
          h = 0;
        if (!i.scroll) {
          i.scroll = o._getScroll(f["scroll" + t]).addClass("scroll-" + t);
          f.showArrows && i.scroll.addClass("scroll-element_arrows_visible");
          i.mousewheel = function (n) {
            if (!i.isVisible || (t === "x" && e(n))) return !0;
            if (t === "y" && !e(n)) return u.x.mousewheel(n), !0;
            var f = n.originalEvent.wheelDelta * -1 || n.originalEvent.detail,
              s = i.size - i.visible - i.offset;
            return (
              ((f > 0 && h < s) || (f < 0 && h > 0)) &&
                ((h = h + f),
                h < 0 && (h = 0),
                h > s && (h = s),
                (o.scrollTo = o.scrollTo || {}),
                (o.scrollTo[c] = h),
                setTimeout(function () {
                  o.scrollTo &&
                    (r.stop().animate(o.scrollTo, 240, "linear", function () {
                      h = r[c]();
                    }),
                    (o.scrollTo = null));
                }, 1)),
              n.preventDefault(),
              !1
            );
          };
          i.scroll
            .on("MozMousePixelScroll" + s, i.mousewheel)
            .on("mousewheel" + s, i.mousewheel)
            .on("mouseenter" + s, function () {
              h = r[c]();
            });
          i.scroll
            .find(".scroll-arrow, .scroll-element_track")
            .on("mousedown" + s, function (u) {
              if (u.which != 1) return !0;
              l = 1;
              var e = {
                  eventOffset: u[t === "x" ? "pageX" : "pageY"],
                  maxScrollValue: i.size - i.visible - i.offset,
                  scrollbarOffset:
                    i.scroll.bar.offset()[t === "x" ? "left" : "top"],
                  scrollbarSize:
                    i.scroll.bar[t === "x" ? "outerWidth" : "outerHeight"](),
                },
                s = 0,
                p = 0;
              return (
                n(this).hasClass("scroll-arrow")
                  ? ((l = n(this).hasClass("scroll-arrow_more") ? 1 : -1),
                    (a = f.scrollStep * l),
                    (h = l > 0 ? e.maxScrollValue : 0))
                  : ((l =
                      e.eventOffset > e.scrollbarOffset + e.scrollbarSize
                        ? 1
                        : e.eventOffset < e.scrollbarOffset
                        ? -1
                        : 0),
                    (a = Math.round(i.visible * 0.75) * l),
                    (h =
                      e.eventOffset -
                      e.scrollbarOffset -
                      (f.stepScrolling
                        ? l == 1
                          ? e.scrollbarSize
                          : 0
                        : Math.round(e.scrollbarSize / 2))),
                    (h = r[c]() + h / i.kx)),
                (o.scrollTo = o.scrollTo || {}),
                (o.scrollTo[c] = f.stepScrolling ? r[c]() + a : h),
                f.stepScrolling &&
                  ((v = function () {
                    h = r[c]();
                    clearInterval(p);
                    clearTimeout(s);
                    s = 0;
                    p = 0;
                  }),
                  (s = setTimeout(function () {
                    p = setInterval(y, 40);
                  }, f.duration + 100))),
                setTimeout(function () {
                  o.scrollTo &&
                    (r.animate(o.scrollTo, f.duration), (o.scrollTo = null));
                }, 1),
                o._handleMouseDown(v, u)
              );
            });
          i.scroll.bar.on("mousedown" + s, function (u) {
            if (u.which != 1) return !0;
            var f = u[t === "x" ? "pageX" : "pageY"],
              e = r[c]();
            i.scroll.addClass("scroll-draggable");
            n(document).on("mousemove" + s, function (n) {
              var u = parseInt(
                (n[t === "x" ? "pageX" : "pageY"] - f) / i.kx,
                10
              );
              r[c](e + u);
            });
            return o._handleMouseDown(function () {
              i.scroll.removeClass("scroll-draggable");
              h = r[c]();
            }, u);
          });
        }
      });
      n.each(u, function (n, t) {
        var i = "scroll-scroll" + n + "_visible",
          r = n == "x" ? u.y : u.x;
        t.scroll.removeClass(i);
        r.scroll.removeClass(i);
        c.removeClass(i);
      });
      n.each(u, function (t, i) {
        n.extend(
          i,
          t == "x"
            ? {
                offset: parseInt(r.css("left"), 10) || 0,
                size: r.prop("scrollWidth"),
                visible: h.width(),
              }
            : {
                offset: parseInt(r.css("top"), 10) || 0,
                size: r.prop("scrollHeight"),
                visible: h.height(),
              }
        );
      });
      this._updateScroll("x", this.scrollx);
      this._updateScroll("y", this.scrolly);
      n.isFunction(f.onUpdate) && f.onUpdate.apply(this, [r]);
      n.each(u, function (n, t) {
        var e = n === "x" ? "left" : "top",
          o = n === "x" ? "outerWidth" : "outerHeight",
          h = n === "x" ? "width" : "height",
          c = parseInt(r.css(e), 10) || 0,
          i = t.size,
          u = t.visible + c,
          s = t.scroll.size[o]() + (parseInt(t.scroll.size.css(e), 10) || 0);
        f.autoScrollSize &&
          ((t.scrollbarSize = parseInt((s * u) / i, 10)),
          t.scroll.bar.css(h, t.scrollbarSize + "px"));
        t.scrollbarSize = t.scroll.bar[o]();
        t.kx = (s - t.scrollbarSize) / (i - u) || 1;
        t.maxScrollOffset = i - u;
      });
      r.scrollLeft(a.scrollLeft).scrollTop(a.scrollTop).trigger("scroll");
    },
    _getScroll: function (t) {
      var i = {
        advanced:
          '<div class="scroll-element"><div class="scroll-element_corner"></div><div class="scroll-arrow scroll-arrow_less"></div><div class="scroll-arrow scroll-arrow_more"></div><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_inner-wrapper"><div class="scroll-element_inner scroll-element_track"><div class="scroll-element_inner-bottom"></div></div></div><div class="scroll-bar"><div class="scroll-bar_body"><div class="scroll-bar_body-inner"></div></div><div class="scroll-bar_bottom"></div><div class="scroll-bar_center"></div></div></div></div>',
        simple:
          '<div class="scroll-element"><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_track"></div><div class="scroll-bar"></div></div></div>',
      };
      return (
        i[t] && (t = i[t]),
        t || (t = i.simple),
        (t = typeof t == "string" ? n(t).appendTo(this.wrapper) : n(t)),
        n.extend(t, {
          bar: t.find(".scroll-bar"),
          size: t.find(".scroll-element_size"),
          track: t.find(".scroll-element_track"),
        }),
        t
      );
    },
    _handleMouseDown: function (t, i) {
      var r = this.namespace;
      n(document).on("blur" + r, function () {
        n(document).add("body").off(r);
        t && t();
      });
      n(document).on("dragstart" + r, function (n) {
        return n.preventDefault(), !1;
      });
      n(document).on("mouseup" + r, function () {
        n(document).add("body").off(r);
        t && t();
      });
      n("body").on("selectstart" + r, function (n) {
        return n.preventDefault(), !1;
      });
      return i && i.preventDefault(), !1;
    },
    _updateScroll: function (i, r) {
      var u = this.container,
        o = this.containerWrapper || u,
        f = "scroll-scroll" + i + "_visible",
        e = i === "x" ? this.scrolly : this.scrollx,
        l = parseInt(this.container.css(i === "x" ? "left" : "top"), 10) || 0,
        s = this.wrapper,
        c = r.size,
        h = r.visible + l;
      r.isVisible = c - h > 1;
      r.isVisible
        ? (r.scroll.addClass(f), e.scroll.addClass(f), o.addClass(f))
        : (r.scroll.removeClass(f), e.scroll.removeClass(f), o.removeClass(f));
      i === "y" &&
        (u.is("textarea") || c < h
          ? o.css({ height: h + t.scroll.height + "px", "max-height": "none" })
          : o.css({ "max-height": h + "px" }));
      (r.size != u.prop("scrollWidth") ||
        e.size != u.prop("scrollHeight") ||
        r.visible != s.width() ||
        e.visible != s.height() ||
        r.offset != (parseInt(u.css("left"), 10) || 0) ||
        e.offset != (parseInt(u.css("top"), 10) || 0)) &&
        (n.extend(this.scrollx, {
          offset: parseInt(u.css("left"), 10) || 0,
          size: u.prop("scrollWidth"),
          visible: s.width(),
        }),
        n.extend(this.scrolly, {
          offset: parseInt(u.css("top"), 10) || 0,
          size: this.container.prop("scrollHeight"),
          visible: s.height(),
        }),
        this._updateScroll(i === "x" ? "y" : "x", e));
    },
  };
  o = u;
  n.fn.scrollbar = function (i, r) {
    return (
      typeof i != "string" && ((r = i), (i = "init")),
      typeof r == "undefined" && (r = []),
      n.isArray(r) || (r = [r]),
      this.not("body, .scroll-wrapper").each(function () {
        var f = n(this),
          u = f.data(t.data.name);
        (u || i === "init") && (u || (u = new o(f)), u[i] && u[i].apply(u, r));
      }),
      this
    );
  };
  n.fn.scrollbar.options = r;
  i = (function () {
    var n = 0,
      r = 0;
    return function (u) {
      for (var o, c, f, e, l, a, h = 0; h < t.scrolls.length; h++)
        (f = t.scrolls[h]),
          (o = f.container),
          (c = f.options),
          (e = f.wrapper),
          (l = f.scrollx),
          (a = f.scrolly),
          (u ||
            (c.autoUpdate &&
              e &&
              e.is(":visible") &&
              (o.prop("scrollWidth") != l.size ||
                o.prop("scrollHeight") != a.size ||
                e.width() != l.visible ||
                e.height() != a.visible))) &&
            (f.init(),
            c.debug &&
              (window.console &&
                console.log(
                  {
                    scrollHeight: o.prop("scrollHeight") + ":" + f.scrolly.size,
                    scrollWidth: o.prop("scrollWidth") + ":" + f.scrollx.size,
                    visibleHeight: e.height() + ":" + f.scrolly.visible,
                    visibleWidth: e.width() + ":" + f.scrollx.visible,
                  },
                  !0
                ),
              r++));
      s && r > 10
        ? (window.console && console.log("Scroll updates exceed 10"),
          (i = function () {}))
        : (clearTimeout(n), (n = setTimeout(i, 300)));
    };
  })();
  window.angular &&
    (function (n) {
      n.module("jQueryScrollbar", [])
        .provider("jQueryScrollbar", function () {
          var t = r;
          return {
            setOptions: function (i) {
              n.extend(t, i);
            },
            $get: function () {
              return { options: n.copy(t) };
            },
          };
        })
        .directive("jqueryScrollbar", [
          "jQueryScrollbar",
          "$parse",
          function (n, t) {
            return {
              restrict: "AC",
              link: function (i, r, u) {
                var f = t(u.jqueryScrollbar),
                  e = f(i);
                r.scrollbar(e || n.options).on("$destroy", function () {
                  r.scrollbar("destroy");
                });
              },
            };
          },
        ]);
    })(window.angular);
});
$(document).ready(function () {
  let n = !1;
  $(document).on("touchdown touchmove click", function () {
    n = scrollBarIsIOS();
  });
  let t = 0;
  $(".scrollBody > .scrollbar-macosx").scroll(function () {
    if ($(this).scrollTop() > 100)
      $(".rightBtn").addClass("scrollX").removeAttr("style");
    else {
      const i = $(this).scrollLeft(),
        r = t - i == 0 && n ? 220 : i;
      $(".rightBtn")
        .removeClass("scrollX")
        .css({ left: r + $(this).width() - $(".rightBtn").width() });
      t = i;
    }
  });
});
jQuery(document).ready(function () {
  jQuery(".scrollbar-macosx").scrollbar();
});

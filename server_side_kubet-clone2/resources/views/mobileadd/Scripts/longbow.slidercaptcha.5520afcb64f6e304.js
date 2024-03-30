(function (n) {
  "use strict";
  function f(t) {
    return this.each(function () {
      var r = n(this),
        i = r.data("lgb.SliderCaptcha"),
        f = typeof t == "object" && t;
      (!i || /reset/.test(t)) &&
        (i || r.data("lgb.SliderCaptcha", (i = new u(this, f))),
        typeof t == "string" && i[t]());
    });
  }
  var u = function (t, i) {
    this.$element = n(t);
    this.options = n.extend({}, u.DEFAULTS, i);
    this.$element.css({
      position: "relative",
      width: this.options.width + "px",
      margin: "0 auto",
    });
    this.init();
  };
  u.VERSION = "1.0";
  u.Author = "argo@163.com";
  u.DEFAULTS = {
    loadingText: "正在加载中...",
    failedText: "再试一次",
    barText: "向右滑动填充拼图",
    failLoadText: "加载失败",
    repeatIcon: "fa fa-repeat",
    maxLoadCount: 3,
    sourceX: 0,
    verify: function (t, i) {
      var r = !1;
      return (
        n.ajax({
          url: i,
          data: JSON.stringify(t),
          async: !1,
          cache: !1,
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          success: function (n) {
            r = n;
          },
        }),
        r
      );
    },
    remoteUrl: null,
  };
  n.fn.sliderCaptcha = f;
  n.fn.sliderCaptcha.Constructor = u;
  var t = new Image(),
    i = new Image(),
    r = u.prototype;
  r.init = function () {
    this.initDOM();
    this.initImg();
    this.bindEvents();
  };
  r.initDOM = function () {
    var t = function (n, t) {
        var i = document.createElement(n);
        return (i.className = t), i;
      },
      a = function (n, t) {
        var i = document.createElement("canvas");
        return (i.width = n), (i.height = t), i;
      },
      u = a(this.options.width - 2, this.options.height),
      f = u.cloneNode(!0),
      i = t("div", "sliderContainer"),
      c = t("i", "refreshIcon " + this.options.repeatIcon),
      e = t("div", "sliderMask"),
      v = t("div", "sliderbg"),
      o = t("div", "slider"),
      l = t("i", "fa sliderIcon"),
      s = t("span", "sliderText"),
      r,
      h;
    f.className = "block";
    s.innerHTML = this.options.barText;
    r = this.$element;
    r.append(n(u));
    r.append(n(c));
    r.append(n(f));
    o.appendChild(l);
    e.appendChild(o);
    i.appendChild(v);
    i.appendChild(e);
    i.appendChild(s);
    r.append(n(i));
    h = {
      canvas: u,
      block: f,
      sliderContainer: n(i),
      refreshIcon: c,
      slider: o,
      sliderMask: e,
      sliderIcon: l,
      text: n(s),
      canvasCtx: u.getContext("2d"),
      blockCtx: f.getContext("2d"),
    };
    n.isFunction(Object.assign) ? Object.assign(this, h) : n.extend(this, h);
  };
  r.initImg = function () {
    var r = this,
      f = window.navigator.userAgent.indexOf("Trident") > -1,
      u = 0;
    t.onload = function () {
      r.canvasCtx.fill();
      r.canvasCtx.drawImage(t, 0, 0, r.options.width - 2, r.options.height);
      r.block.width = i.width;
      r.blockCtx.fillStyle = "rgba(255, 255, 255, 0)";
      r.blockCtx.drawImage(i, 0, 0, i.width - 2, r.options.height - 2);
      r.text.text(r.text.attr("data-text"));
    };
    t.onerror = function () {
      if (
        (u++,
        window.location.protocol === "file:" &&
          ((u = r.options.maxLoadCount),
          console.error(
            "can't load pic resource file from File protocal. Please try http or https"
          )),
        u >= r.options.maxLoadCount)
      ) {
        r.text.text(r.options.failLoadText).addClass("text-danger");
        return;
      }
      t.src = r.options.localImages();
    };
    t.setSrc = function () {
      u = 0;
      r.text.removeClass("text-danger");
      n.ajax({
        url: r.options.setSrc(),
        cache: !1,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
      }).done(function (r) {
        isNE(r.Slider) ||
          isNE(r.Background) ||
          (n("#captcha,#captcha2").hide(),
          n.fn.alert(webRes.Font_Djzx_14 + "！", function () {
            location.reload();
          }));
        r.Slider != null && r.Slider != ""
          ? ((t.src = r.Background),
            (i.src = r.Slider),
            i.addEventListener("load", t.onload, !1))
          : (n("#loginCaptcha").is(":visible")
              ? (n("#loginCaptcha,#loginCaptcha2").hide(),
                n("#loginCaptchaImg").attr("src", r.Background),
                n("#txtLoginCaptcha").val(""))
              : (n("#captcha,#captcha2").hide(),
                n("#captchaImg").attr("src", r.Background),
                n("#txtCaptcha").val("")),
            n(".captchaNumber").show(),
            n("#captchaModal").removeClass("isSlider"),
            n(".btn_confirm_captcha").attr("disabled", "disabled"));
      });
    };
    t.initsetSrc = function () {
      var n;
      u = 0;
      r.text.removeClass("text-danger");
      n = r.options.initsetSrc();
      t.src = n.Background;
      i.src = n.Slider;
      i.addEventListener("load", t.onload, !1);
    };
    t.initsetSrc();
    this.text.attr("data-text", this.options.barText);
    this.text.text(this.options.loadingText);
    this.img = t;
  };
  r.clean = function () {
    this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.blockCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.block.width = this.options.width;
  };
  r.bindEvents = function () {
    var t = this;
    this.$element.on("selectstart", function () {
      return !1;
    });
    n(this.refreshIcon).on("click", function () {
      t.text.text(t.options.barText);
      t.reset();
      n.isFunction(t.options.onRefresh) && t.options.onRefresh.call(t.$element);
    });
    var s,
      h,
      e = [],
      o = !1,
      c = function (n) {
        t.text.hasClass("text-danger") ||
          ((s = n.clientX || n.touches[0].clientX),
          (h = n.clientY || n.touches[0].clientY),
          (o = !0),
          (e.length = 0));
      },
      r,
      l = 0,
      u = function (n) {
        var c, f, a;
        if ((n.preventDefault(), !o)) return !1;
        var v = n.clientX || n.touches[0].clientX,
          y = n.clientY || n.touches[0].clientY,
          u = v - s,
          p = y - h;
        if (u < 0 || u + 40 > t.options.width) return !1;
        t.slider.style.left = u - 1 + "px";
        c = 310;
        t.options.width > 450 && i.width > 55 && (c = 320);
        r =
          t.options.width > 200 && t.options.width < 220
            ? 2 * u * (u / 350)
            : t.options.width > 260 && t.options.width <= 280
            ? 2 * u * (u / 470)
            : t.options.width > 280 && t.options.width < 300
            ? 2 * u * (u / 500)
            : t.options.width > 500
            ? 2 * u * (u / 1050)
            : 2 * u * (u / 540);
        location.pathname.toLocaleLowerCase().indexOf("n_add1") > -1 &&
          (r = r * 1.1);
        l = r;
        f = (r / 267) * (c - i.width);
        a = ((t.options.width - 45) / 267) * (c - i.width);
        f > a ? (f = a) : f < 0 && (f = 0);
        t.block.style.left = f + "px";
        t.sliderContainer.addClass("sliderContainer_active");
        t.sliderMask.style.width = u + 20 + "px";
        e.push(Math.round(p));
      },
      f = function (r) {
        var f, u, h;
        if (!o) return !1;
        if (((o = !1), (f = r.clientX || r.changedTouches[0].clientX), f === s))
          return t.sliderContainer.removeClass("sliderContainer_active"), !1;
        u = 310;
        t.options.width > 450 && i.width > 55 && (u = 320);
        e.splice(0, 0, Math.floor((l / 267) * (u - i.width)));
        t.trail = e;
        h = t.verify();
        h.verified
          ? (t.sliderContainer.addClass("sliderContainer_success"),
            n.isFunction(t.options.onSuccess) &&
              t.options.onSuccess.call(t.$element))
          : (t.sliderContainer.addClass("sliderContainer_fail"),
            n.isFunction(t.options.onFail) && t.options.onFail.call(t.$element),
            setTimeout(function () {
              t.text.text(t.options.failedText);
              t.reset();
            }, 1e3));
        t.sliderContainer.removeClass("sliderContainer_active");
      };
    this.slider.addEventListener("mousedown", c, { passive: !1 });
    this.slider.addEventListener("touchstart", c, { passive: !1 });
    IsMobile()
      ? (document.getElementById("captcha") != null &&
          (document
            .getElementById("captcha")
            .addEventListener("mousemove", u, { passive: !1 }),
          document
            .getElementById("captcha")
            .addEventListener("touchmove", u, { passive: !1 }),
          document
            .getElementById("captcha")
            .addEventListener("mouseup", f, { passive: !1 }),
          document
            .getElementById("captcha")
            .addEventListener("touchend", f, { passive: !1 }),
          document
            .getElementById("captcha")
            .addEventListener("mousedown", function () {
              return !1;
            }),
          document
            .getElementById("captcha")
            .addEventListener("touchstart", function () {
              return !1;
            }),
          document
            .getElementById("captcha")
            .addEventListener("swipe", function () {
              return !1;
            })),
        document.getElementById("loginCaptcha") != null &&
          (document
            .getElementById("loginCaptcha")
            .addEventListener("mousemove", u, { passive: !1 }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("touchmove", u, { passive: !1 }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("mouseup", f, { passive: !1 }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("touchend", f, { passive: !1 }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("mousedown", function () {
              return !1;
            }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("touchstart", function () {
              return !1;
            }),
          document
            .getElementById("loginCaptcha")
            .addEventListener("swipe", function () {
              return !1;
            })))
      : (document.addEventListener("mousemove", u, { passive: !1 }),
        document.addEventListener("touchmove", u, { passive: !1 }),
        document.addEventListener("mouseup", f, { passive: !1 }),
        document.addEventListener("touchend", f, { passive: !1 }),
        document.addEventListener("mousedown", function () {
          return !1;
        }),
        document.addEventListener("touchstart", function () {
          return !1;
        }),
        document.addEventListener("swipe", function () {
          return !1;
        }));
  };
  r.verify = function () {
    var n = this.trail,
      o = parseInt(this.block.style.left),
      t = !1;
    if (this.options.remoteUrl !== null)
      t = this.options.verify(n, this.options.remoteUrl);
    else {
      var i = function (n, t) {
          return n + t;
        },
        r = function (n) {
          return n * n;
        },
        u = n.reduce(i) / n.length,
        f = n.map(function (n) {
          return n - u;
        }),
        e = Math.sqrt(f.map(r).reduce(i) / n.length);
      t = e !== 0;
    }
    return { spliced: !1, verified: t };
  };
  r.reset = function () {
    this.sliderContainer.removeClass(
      "sliderContainer_fail sliderContainer_success"
    );
    this.slider.style.left = 0;
    this.block.style.left = 0;
    this.sliderMask.style.width = 0;
    this.clean();
    this.text.attr("data-text", this.text.text());
    this.text.text(this.options.loadingText);
    this.img.setSrc();
  };
  r.resetWithText = function () {
    this.sliderContainer.removeClass(
      "sliderContainer_fail sliderContainer_success"
    );
    this.slider.style.left = 0;
    this.block.style.left = 0;
    this.sliderMask.style.width = 0;
    this.clean();
    this.text.attr("data-text", this.options.barText);
    this.text.text(this.options.loadingText);
    this.img.setSrc();
  };
})(jQuery);

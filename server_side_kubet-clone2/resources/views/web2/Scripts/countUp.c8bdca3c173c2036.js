var __assign =
    (this && this.__assign) ||
    function () {
      return (
        (__assign =
          Object.assign ||
          function (n) {
            for (var t, r, i = 1, u = arguments.length; i < u; i++) {
              t = arguments[i];
              for (r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }),
        __assign.apply(this, arguments)
      );
    },
  CountUp = (function () {
    function n(n, t, i) {
      var r = this;
      this.endVal = t;
      this.options = i;
      this.version = "2.3.2";
      this.defaults = {
        startVal: 0,
        decimalPlaces: 0,
        duration: 2,
        useEasing: !0,
        useGrouping: !0,
        smartEasingThreshold: 999,
        smartEasingAmount: 333,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
        enableScrollSpy: !1,
        scrollSpyDelay: 200,
        scrollSpyOnce: !1,
      };
      this.finalEndVal = null;
      this.useEasing = !0;
      this.countDown = !1;
      this.error = "";
      this.startVal = 0;
      this.paused = !0;
      this.once = !1;
      this.count = function (n) {
        var t, i;
        r.startTime || (r.startTime = n);
        t = n - r.startTime;
        r.remaining = r.duration - t;
        r.frameVal = r.useEasing
          ? r.countDown
            ? r.startVal - r.easingFn(t, 0, r.startVal - r.endVal, r.duration)
            : r.easingFn(t, r.startVal, r.endVal - r.startVal, r.duration)
          : r.startVal + (r.endVal - r.startVal) * (t / r.duration);
        i = r.countDown ? r.frameVal < r.endVal : r.frameVal > r.endVal;
        r.frameVal = i ? r.endVal : r.frameVal;
        r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces));
        r.printValue(r.frameVal);
        t < r.duration
          ? (r.rAF = requestAnimationFrame(r.count))
          : r.finalEndVal !== null
          ? r.update(r.finalEndVal)
          : r.callback && r.callback();
      };
      this.formatNumber = function (n) {
        var h = n < 0 ? "-" : "",
          o,
          t,
          f,
          i,
          e,
          u,
          s;
        if (
          ((o = Math.abs(n).toFixed(r.options.decimalPlaces)),
          (o += ""),
          (e = o.split(".")),
          (t = e[0]),
          (f = e.length > 1 ? r.options.decimal + e[1] : ""),
          r.options.useGrouping)
        ) {
          for (i = "", u = 0, s = t.length; u < s; ++u)
            u !== 0 && u % 3 == 0 && (i = r.options.separator + i),
              (i = t[s - u - 1] + i);
          t = i;
        }
        return (
          r.options.numerals &&
            r.options.numerals.length &&
            ((t = t.replace(/[0-9]/g, function (n) {
              return r.options.numerals[+n];
            })),
            (f = f.replace(/[0-9]/g, function (n) {
              return r.options.numerals[+n];
            }))),
          h + r.options.prefix + t + f + r.options.suffix
        );
      };
      this.easeOutExpo = function (n, t, i, r) {
        return (i * (-Math.pow(2, (-10 * n) / r) + 1) * 1024) / 1023 + t;
      };
      this.options = __assign(__assign({}, this.defaults), i);
      this.formattingFn = this.options.formattingFn
        ? this.options.formattingFn
        : this.formatNumber;
      this.easingFn = this.options.easingFn
        ? this.options.easingFn
        : this.easeOutExpo;
      this.startVal = this.validateValue(this.options.startVal);
      this.frameVal = this.startVal;
      this.endVal = this.validateValue(t);
      this.options.decimalPlaces = Math.max(0 || this.options.decimalPlaces);
      this.resetDuration();
      this.options.separator = String(this.options.separator);
      this.useEasing = this.options.useEasing;
      this.options.separator === "" && (this.options.useGrouping = !1);
      this.el = typeof n == "string" ? document.getElementById(n) : n;
      this.el
        ? this.printValue(this.startVal)
        : (this.error = "[CountUp] target is null or undefined");
      typeof window != "undefined" &&
        this.options.enableScrollSpy &&
        (this.error
          ? console.error(this.error, n)
          : ((window.onScrollFns = window.onScrollFns || []),
            window.onScrollFns.push(function () {
              return r.handleScroll(r);
            }),
            (window.onscroll = function () {
              window.onScrollFns.forEach(function (n) {
                return n();
              });
            }),
            this.handleScroll(this)));
    }
    return (
      (n.prototype.handleScroll = function (n) {
        if (n && window && !n.once) {
          var r = window.innerHeight + window.scrollY,
            i = n.el.getBoundingClientRect(),
            t = i.top + i.height + window.pageYOffset;
          t < r && t > window.scrollY && n.paused
            ? ((n.paused = !1),
              setTimeout(function () {
                return n.start();
              }, n.options.scrollSpyDelay),
              n.options.scrollSpyOnce && (n.once = !0))
            : window.scrollY > t && !n.paused && n.reset();
        }
      }),
      (n.prototype.determineDirectionAndSmartEasing = function () {
        var n = this.finalEndVal ? this.finalEndVal : this.endVal,
          t,
          i;
        this.countDown = this.startVal > n;
        t = n - this.startVal;
        Math.abs(t) > this.options.smartEasingThreshold &&
        this.options.useEasing
          ? ((this.finalEndVal = n),
            (i = this.countDown ? 1 : -1),
            (this.endVal = n + i * this.options.smartEasingAmount),
            (this.duration = this.duration / 2))
          : ((this.endVal = n), (this.finalEndVal = null));
        this.useEasing =
          this.finalEndVal !== null ? !1 : this.options.useEasing;
      }),
      (n.prototype.start = function (n) {
        this.error ||
          ((this.callback = n),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (n.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF);
        this.paused = !this.paused;
      }),
      (n.prototype.reset = function () {
        cancelAnimationFrame(this.rAF);
        this.paused = !0;
        this.resetDuration();
        this.startVal = this.validateValue(this.options.startVal);
        this.frameVal = this.startVal;
        this.printValue(this.startVal);
      }),
      (n.prototype.update = function (n) {
        (cancelAnimationFrame(this.rAF),
        (this.startTime = null),
        (this.endVal = this.validateValue(n)),
        this.endVal !== this.frameVal) &&
          ((this.startVal = this.frameVal),
          this.finalEndVal == null && this.resetDuration(),
          (this.finalEndVal = null),
          this.determineDirectionAndSmartEasing(),
          (this.rAF = requestAnimationFrame(this.count)));
      }),
      (n.prototype.printValue = function (n) {
        var t = this.formattingFn(n),
          i;
        this.el.tagName === "INPUT"
          ? ((i = this.el), (i.value = t))
          : this.el.tagName === "text" || this.el.tagName === "tspan"
          ? (this.el.textContent = t)
          : (this.el.innerHTML = t);
      }),
      (n.prototype.ensureNumber = function (n) {
        return typeof n == "number" && !isNaN(n);
      }),
      (n.prototype.validateValue = function (n) {
        var t = Number(n);
        return this.ensureNumber(t)
          ? t
          : ((this.error = "[CountUp] invalid start or end value: ".concat(n)),
            null);
      }),
      (n.prototype.resetDuration = function () {
        this.startTime = null;
        this.duration = Number(this.options.duration) * 1e3;
        this.remaining = this.duration;
      }),
      n
    );
  })();

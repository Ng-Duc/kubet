function QR8bitByte(n) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = n;
}
function QRCode(n, t) {
  this.typeNumber = n;
  this.errorCorrectLevel = t;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}
function QRPolynomial(n, t) {
  var i, r;
  if (void 0 == n.length) throw new Error(n.length + "/" + t);
  for (i = 0; i < n.length && 0 == n[i]; ) i++;
  for (this.num = new Array(n.length - i + t), r = 0; r < n.length - i; r++)
    this.num[r] = n[r + i];
}
function QRRSBlock(n, t) {
  this.totalCount = n;
  this.dataCount = t;
}
function QRBitBuffer() {
  this.buffer = [];
  this.length = 0;
}
var QRMode, QRErrorCorrectLevel, QRMaskPattern, QRUtil, QRMath, i;
for (
  (function (n) {
    n.fn.qrcode = function (t) {
      var i, r;
      return (
        "string" == typeof t && (t = { text: t }),
        (t = n.extend(
          {},
          {
            render: "canvas",
            width: 256,
            height: 256,
            imgWidth: t.width / 2.5,
            imgHeight: t.height / 2.5,
            typeNumber: -1,
            correctLevel: QRErrorCorrectLevel.H,
            background: "#ffffff",
            foreground: "#000000",
          },
          t
        )),
        (i = function () {
          var f,
            e,
            o,
            u,
            s,
            n,
            i,
            h,
            c,
            r = new QRCode(t.typeNumber, t.correctLevel);
          for (
            r.addData(t.text),
              r.make(),
              f = document.createElement("canvas"),
              f.width = t.width,
              f.height = t.height,
              e = f.getContext("2d"),
              t.src &&
                ((o = new Image()),
                (o.src = t.src),
                (o.onload = function () {
                  e.drawImage(
                    o,
                    (t.width - t.imgWidth) / 2,
                    (t.height - t.imgHeight) / 2,
                    t.imgWidth,
                    t.imgHeight
                  );
                })),
              u = t.width / r.getModuleCount(),
              s = t.height / r.getModuleCount(),
              n = 0;
            n < r.getModuleCount();
            n++
          )
            for (i = 0; i < r.getModuleCount(); i++)
              (e.fillStyle = r.isDark(n, i) ? t.foreground : t.background),
                (h = Math.ceil((i + 1) * u) - Math.floor(i * u)),
                (c = Math.ceil((n + 1) * u) - Math.floor(n * u)),
                e.fillRect(Math.round(i * u), Math.round(n * s), h, c);
          return f;
        }),
        (r = function () {
          var f,
            e,
            o,
            r,
            s,
            u,
            i = new QRCode(t.typeNumber, t.correctLevel);
          for (
            i.addData(t.text),
              i.make(),
              f = n("<table></table>")
                .css("width", t.width + "px")
                .css("height", t.height + "px")
                .css("border", "0px")
                .css("border-collapse", "collapse")
                .css("background-color", t.background),
              e = t.width / i.getModuleCount(),
              o = t.height / i.getModuleCount(),
              r = 0;
            r < i.getModuleCount();
            r++
          )
            for (
              s = n("<tr></tr>")
                .css("height", o + "px")
                .appendTo(f),
                u = 0;
              u < i.getModuleCount();
              u++
            )
              n("<td></td>")
                .css("width", e + "px")
                .css(
                  "background-color",
                  i.isDark(r, u) ? t.foreground : t.background
                )
                .appendTo(s);
          return f;
        }),
        this.each(function () {
          var u = "canvas" == t.render ? i() : r();
          n(u).appendTo(this);
        })
      );
    };
  })(jQuery),
    QR8bitByte.prototype = {
      getLength: function () {
        return this.data.length;
      },
      write: function (n) {
        for (var t = 0; t < this.data.length; t++)
          n.put(this.data.charCodeAt(t), 8);
      },
    },
    QRCode.prototype = {
      addData: function (n) {
        var t = new QR8bitByte(n);
        this.dataList.push(t);
        this.dataCache = null;
      },
      isDark: function (n, t) {
        if (0 > n || this.moduleCount <= n || 0 > t || this.moduleCount <= t)
          throw new Error(n + "," + t);
        return this.modules[n][t];
      },
      getModuleCount: function () {
        return this.moduleCount;
      },
      make: function () {
        var t, u, i, f, n, r;
        if (this.typeNumber < 1) {
          for (t = 1, t = 1; 40 > t; t++) {
            for (
              u = QRRSBlock.getRSBlocks(t, this.errorCorrectLevel),
                i = new QRBitBuffer(),
                f = 0,
                n = 0;
              n < u.length;
              n++
            )
              f += u[n].dataCount;
            for (n = 0; n < this.dataList.length; n++)
              (r = this.dataList[n]),
                i.put(r.mode, 4),
                i.put(r.getLength(), QRUtil.getLengthInBits(r.mode, t)),
                r.write(i);
            if (i.getLengthInBits() <= 8 * f) break;
          }
          this.typeNumber = t;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      },
      makeImpl: function (n, t) {
        var i, r;
        for (
          this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount),
            i = 0;
          i < this.moduleCount;
          i++
        )
          for (
            this.modules[i] = new Array(this.moduleCount), r = 0;
            r < this.moduleCount;
            r++
          )
            this.modules[i][r] = null;
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(n, t);
        this.typeNumber >= 7 && this.setupTypeNumber(n);
        null == this.dataCache &&
          (this.dataCache = QRCode.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList
          ));
        this.mapData(this.dataCache, t);
      },
      setupPositionProbePattern: function (n, t) {
        for (var r, i = -1; 7 >= i; i++)
          if (!(-1 >= n + i || this.moduleCount <= n + i))
            for (r = -1; 7 >= r; r++)
              -1 >= t + r ||
                this.moduleCount <= t + r ||
                (this.modules[n + i][t + r] =
                  (i >= 0 && 6 >= i && (0 == r || 6 == r)) ||
                  (r >= 0 && 6 >= r && (0 == i || 6 == i)) ||
                  (i >= 2 && 4 >= i && r >= 2 && 4 >= r)
                    ? !0
                    : !1);
      },
      getBestMaskPattern: function () {
        for (var t, i = 0, r = 0, n = 0; 8 > n; n++)
          this.makeImpl(!0, n),
            (t = QRUtil.getLostPoint(this)),
            (0 == n || i > t) && ((i = t), (r = n));
        return r;
      },
      createMovieClip: function (n, t, i) {
        var u,
          e,
          o,
          s,
          h,
          r = n.createEmptyMovieClip(t, i),
          f = 1;
        for (this.make(), u = 0; u < this.modules.length; u++)
          for (e = u * f, o = 0; o < this.modules[u].length; o++)
            (s = o * f),
              (h = this.modules[u][o]),
              h &&
                (r.beginFill(0, 100),
                r.moveTo(s, e),
                r.lineTo(s + f, e),
                r.lineTo(s + f, e + f),
                r.lineTo(s, e + f),
                r.endFill());
        return r;
      },
      setupTimingPattern: function () {
        for (var t, n = 8; n < this.moduleCount - 8; n++)
          null == this.modules[n][6] && (this.modules[n][6] = 0 == n % 2);
        for (t = 8; t < this.moduleCount - 8; t++)
          null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2);
      },
      setupPositionAdjustPattern: function () {
        for (
          var r,
            f,
            e,
            n,
            t,
            u = QRUtil.getPatternPosition(this.typeNumber),
            i = 0;
          i < u.length;
          i++
        )
          for (r = 0; r < u.length; r++)
            if (((f = u[i]), (e = u[r]), null == this.modules[f][e]))
              for (n = -2; 2 >= n; n++)
                for (t = -2; 2 >= t; t++)
                  this.modules[f + n][e + t] =
                    -2 == n || 2 == n || -2 == t || 2 == t || (0 == n && 0 == t)
                      ? !0
                      : !1;
      },
      setupTypeNumber: function (n) {
        for (
          var i, r = QRUtil.getBCHTypeNumber(this.typeNumber), t = 0;
          18 > t;
          t++
        )
          (i = !n && 1 == (1 & (r >> t))),
            (this.modules[Math.floor(t / 3)][(t % 3) + this.moduleCount - 11] =
              i);
        for (t = 0; 18 > t; t++)
          (i = !n && 1 == (1 & (r >> t))),
            (this.modules[(t % 3) + this.moduleCount - 11][Math.floor(t / 3)] =
              i);
      },
      setupTypeInfo: function (n, t) {
        for (
          var r,
            f = (this.errorCorrectLevel << 3) | t,
            u = QRUtil.getBCHTypeInfo(f),
            i = 0;
          15 > i;
          i++
        )
          (r = !n && 1 == (1 & (u >> i))),
            6 > i
              ? (this.modules[i][8] = r)
              : 8 > i
              ? (this.modules[i + 1][8] = r)
              : (this.modules[this.moduleCount - 15 + i][8] = r);
        for (i = 0; 15 > i; i++)
          (r = !n && 1 == (1 & (u >> i))),
            8 > i
              ? (this.modules[8][this.moduleCount - i - 1] = r)
              : 9 > i
              ? (this.modules[8][15 - i] = r)
              : (this.modules[8][14 - i] = r);
        this.modules[this.moduleCount - 8][8] = !n;
      },
      mapData: function (n, t) {
        for (
          var u,
            f,
            h,
            e = -1,
            r = this.moduleCount - 1,
            o = 7,
            s = 0,
            i = this.moduleCount - 1;
          i > 0;
          i -= 2
        )
          for (6 == i && i--; ; ) {
            for (u = 0; 2 > u; u++)
              null == this.modules[r][i - u] &&
                ((f = !1),
                s < n.length && (f = 1 == (1 & (n[s] >>> o))),
                (h = QRUtil.getMask(t, r, i - u)),
                h && (f = !f),
                (this.modules[r][i - u] = f),
                o--,
                -1 == o && (s++, (o = 7)));
            if (((r += e), 0 > r || this.moduleCount <= r)) {
              r -= e;
              e = -e;
              break;
            }
          }
      },
    },
    QRCode.PAD0 = 236,
    QRCode.PAD1 = 17,
    QRCode.createData = function (n, t, i) {
      for (
        var e, f, o = QRRSBlock.getRSBlocks(n, t), r = new QRBitBuffer(), u = 0;
        u < i.length;
        u++
      )
        (e = i[u]),
          r.put(e.mode, 4),
          r.put(e.getLength(), QRUtil.getLengthInBits(e.mode, n)),
          e.write(r);
      for (f = 0, u = 0; u < o.length; u++) f += o[u].dataCount;
      if (r.getLengthInBits() > 8 * f)
        throw new Error(
          "code length overflow. (" + r.getLengthInBits() + ">" + 8 * f + ")"
        );
      for (
        r.getLengthInBits() + 4 <= 8 * f && r.put(0, 4);
        0 != r.getLengthInBits() % 8;

      )
        r.putBit(!1);
      for (;;) {
        if (r.getLengthInBits() >= 8 * f) break;
        if ((r.put(QRCode.PAD0, 8), r.getLengthInBits() >= 8 * f)) break;
        r.put(QRCode.PAD1, 8);
      }
      return QRCode.createBytes(r, o);
    },
    QRCode.createBytes = function (n, t) {
      for (
        var e,
          h,
          i,
          o,
          w,
          c,
          l,
          a,
          s,
          v,
          b = 0,
          y = 0,
          p = 0,
          u = new Array(t.length),
          f = new Array(t.length),
          r = 0;
        r < t.length;
        r++
      ) {
        for (
          e = t[r].dataCount,
            h = t[r].totalCount - e,
            y = Math.max(y, e),
            p = Math.max(p, h),
            u[r] = new Array(e),
            i = 0;
          i < u[r].length;
          i++
        )
          u[r][i] = 255 & n.buffer[i + b];
        for (
          b += e,
            o = QRUtil.getErrorCorrectPolynomial(h),
            w = new QRPolynomial(u[r], o.getLength() - 1),
            c = w.mod(o),
            f[r] = new Array(o.getLength() - 1),
            i = 0;
          i < f[r].length;
          i++
        )
          (l = i + c.getLength() - f[r].length),
            (f[r][i] = l >= 0 ? c.get(l) : 0);
      }
      for (a = 0, i = 0; i < t.length; i++) a += t[i].totalCount;
      for (s = new Array(a), v = 0, i = 0; y > i; i++)
        for (r = 0; r < t.length; r++) i < u[r].length && (s[v++] = u[r][i]);
      for (i = 0; p > i; i++)
        for (r = 0; r < t.length; r++) i < f[r].length && (s[v++] = f[r][i]);
      return s;
    },
    QRMode = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    },
    QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 },
    QRMaskPattern = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7,
    },
    QRUtil = {
      PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170],
      ],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (n) {
        for (
          var t = n << 10;
          QRUtil.getBCHDigit(t) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;

        )
          t ^=
            QRUtil.G15 <<
            (QRUtil.getBCHDigit(t) - QRUtil.getBCHDigit(QRUtil.G15));
        return ((n << 10) | t) ^ QRUtil.G15_MASK;
      },
      getBCHTypeNumber: function (n) {
        for (
          var t = n << 12;
          QRUtil.getBCHDigit(t) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;

        )
          t ^=
            QRUtil.G18 <<
            (QRUtil.getBCHDigit(t) - QRUtil.getBCHDigit(QRUtil.G18));
        return (n << 12) | t;
      },
      getBCHDigit: function (n) {
        for (var t = 0; 0 != n; ) t++, (n >>>= 1);
        return t;
      },
      getPatternPosition: function (n) {
        return QRUtil.PATTERN_POSITION_TABLE[n - 1];
      },
      getMask: function (n, t, i) {
        switch (n) {
          case QRMaskPattern.PATTERN000:
            return 0 == (t + i) % 2;
          case QRMaskPattern.PATTERN001:
            return 0 == t % 2;
          case QRMaskPattern.PATTERN010:
            return 0 == i % 3;
          case QRMaskPattern.PATTERN011:
            return 0 == (t + i) % 3;
          case QRMaskPattern.PATTERN100:
            return 0 == (Math.floor(t / 2) + Math.floor(i / 3)) % 2;
          case QRMaskPattern.PATTERN101:
            return 0 == ((t * i) % 2) + ((t * i) % 3);
          case QRMaskPattern.PATTERN110:
            return 0 == (((t * i) % 2) + ((t * i) % 3)) % 2;
          case QRMaskPattern.PATTERN111:
            return 0 == (((t * i) % 3) + ((t + i) % 2)) % 2;
          default:
            throw new Error("bad maskPattern:" + n);
        }
      },
      getErrorCorrectPolynomial: function (n) {
        for (var i = new QRPolynomial([1], 0), t = 0; n > t; t++)
          i = i.multiply(new QRPolynomial([1, QRMath.gexp(t)], 0));
        return i;
      },
      getLengthInBits: function (n, t) {
        if (t >= 1 && 10 > t)
          switch (n) {
            case QRMode.MODE_NUMBER:
              return 10;
            case QRMode.MODE_ALPHA_NUM:
              return 9;
            case QRMode.MODE_8BIT_BYTE:
              return 8;
            case QRMode.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + n);
          }
        else if (27 > t)
          switch (n) {
            case QRMode.MODE_NUMBER:
              return 12;
            case QRMode.MODE_ALPHA_NUM:
              return 11;
            case QRMode.MODE_8BIT_BYTE:
              return 16;
            case QRMode.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + n);
          }
        else {
          if (!(41 > t)) throw new Error("type:" + t);
          switch (n) {
            case QRMode.MODE_NUMBER:
              return 14;
            case QRMode.MODE_ALPHA_NUM:
              return 13;
            case QRMode.MODE_8BIT_BYTE:
              return 16;
            case QRMode.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + n);
          }
        }
      },
      getLostPoint: function (n) {
        for (
          var i, s, c, u, f, e, h, l, r = n.getModuleCount(), o = 0, t = 0;
          r > t;
          t++
        )
          for (i = 0; r > i; i++) {
            for (s = 0, c = n.isDark(t, i), u = -1; 1 >= u; u++)
              if (!(0 > t + u || t + u >= r))
                for (f = -1; 1 >= f; f++)
                  0 > i + f ||
                    i + f >= r ||
                    ((0 != u || 0 != f) && c == n.isDark(t + u, i + f) && s++);
            s > 5 && (o += 3 + s - 5);
          }
        for (t = 0; r - 1 > t; t++)
          for (i = 0; r - 1 > i; i++)
            (e = 0),
              n.isDark(t, i) && e++,
              n.isDark(t + 1, i) && e++,
              n.isDark(t, i + 1) && e++,
              n.isDark(t + 1, i + 1) && e++,
              (0 == e || 4 == e) && (o += 3);
        for (t = 0; r > t; t++)
          for (i = 0; r - 6 > i; i++)
            n.isDark(t, i) &&
              !n.isDark(t, i + 1) &&
              n.isDark(t, i + 2) &&
              n.isDark(t, i + 3) &&
              n.isDark(t, i + 4) &&
              !n.isDark(t, i + 5) &&
              n.isDark(t, i + 6) &&
              (o += 40);
        for (i = 0; r > i; i++)
          for (t = 0; r - 6 > t; t++)
            n.isDark(t, i) &&
              !n.isDark(t + 1, i) &&
              n.isDark(t + 2, i) &&
              n.isDark(t + 3, i) &&
              n.isDark(t + 4, i) &&
              !n.isDark(t + 5, i) &&
              n.isDark(t + 6, i) &&
              (o += 40);
        for (h = 0, i = 0; r > i; i++)
          for (t = 0; r > t; t++) n.isDark(t, i) && h++;
        return (l = Math.abs((100 * h) / r / r - 50) / 5), o + 10 * l;
      },
    },
    QRMath = {
      glog: function (n) {
        if (1 > n) throw new Error("glog(" + n + ")");
        return QRMath.LOG_TABLE[n];
      },
      gexp: function (n) {
        for (; 0 > n; ) n += 255;
        for (; n >= 256; ) n -= 255;
        return QRMath.EXP_TABLE[n];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256),
    },
    i = 0;
  8 > i;
  i++
)
  QRMath.EXP_TABLE[i] = 1 << i;
for (i = 8; 256 > i; i++)
  QRMath.EXP_TABLE[i] =
    QRMath.EXP_TABLE[i - 4] ^
    QRMath.EXP_TABLE[i - 5] ^
    QRMath.EXP_TABLE[i - 6] ^
    QRMath.EXP_TABLE[i - 8];
for (i = 0; 255 > i; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
  get: function (n) {
    return this.num[n];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (n) {
    for (
      var i, r = new Array(this.getLength() + n.getLength() - 1), t = 0;
      t < this.getLength();
      t++
    )
      for (i = 0; i < n.getLength(); i++)
        r[t + i] ^= QRMath.gexp(
          QRMath.glog(this.get(t)) + QRMath.glog(n.get(i))
        );
    return new QRPolynomial(r, 0);
  },
  mod: function (n) {
    var r, i, t;
    if (this.getLength() - n.getLength() < 0) return this;
    for (
      r = QRMath.glog(this.get(0)) - QRMath.glog(n.get(0)),
        i = new Array(this.getLength()),
        t = 0;
      t < this.getLength();
      t++
    )
      i[t] = this.get(t);
    for (t = 0; t < n.getLength(); t++)
      i[t] ^= QRMath.gexp(QRMath.glog(n.get(t)) + r);
    return new QRPolynomial(i, 0).mod(n);
  },
};
QRRSBlock.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
QRRSBlock.getRSBlocks = function (n, t) {
  var e,
    u,
    i,
    o,
    s,
    h,
    f,
    r = QRRSBlock.getRsBlockTable(n, t);
  if (void 0 == r)
    throw new Error(
      "bad rs block @ typeNumber:" + n + "/errorCorrectLevel:" + t
    );
  for (e = r.length / 3, u = [], i = 0; e > i; i++)
    for (
      o = r[3 * i + 0], s = r[3 * i + 1], h = r[3 * i + 2], f = 0;
      o > f;
      f++
    )
      u.push(new QRRSBlock(s, h));
  return u;
};
QRRSBlock.getRsBlockTable = function (n, t) {
  switch (t) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (n - 1) + 0];
    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (n - 1) + 1];
    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (n - 1) + 2];
    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (n - 1) + 3];
    default:
      return void 0;
  }
};
QRBitBuffer.prototype = {
  get: function (n) {
    var t = Math.floor(n / 8);
    return 1 == (1 & (this.buffer[t] >>> (7 - (n % 8))));
  },
  put: function (n, t) {
    for (var i = 0; t > i; i++) this.putBit(1 == (1 & (n >>> (t - i - 1))));
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (n) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0);
    n && (this.buffer[t] |= 128 >>> this.length % 8);
    this.length++;
  },
};

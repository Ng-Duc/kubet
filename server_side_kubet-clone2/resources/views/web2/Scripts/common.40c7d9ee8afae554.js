function fnHyzxShowDialog(n, t, i, r) {
  n != "C" && $(".spanTitle").text(t);
  n == "A" && $(".font4").text(i);
  n == "B" && isNN(r) && $(".spanText").html(r);
  $("#mask").show();
  $(".headTop").hide();
  $("#DivDialog" + n).show();
}
function isNN(n) {
  var t = n == undefined || n == "undefined";
  return !t;
}
function isLocalStorageSupported() {
  var n = "test",
    t = window.sessionStorage;
  try {
    return t.setItem(n, "1"), t.removeItem(n), !0;
  } catch (i) {
    return !1;
  }
}
function SetHMACMD5(n) {
  n = isNE(n) ? n.toLowerCase() : "";
  var t = hex_md5(n);
  return hex_hmac_md5(t, n);
}
function inviteFriendAction(n) {
  n == 1 && $("#btnClaim").removeAttr("onclick");
  $.ajax({
    url: "/LoadData/ReferralCheck.ashx",
    data: { type: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      n.respond == "logout"
        ? $.fn.alert(webRes.Font_BubbleAlert, function () {
            IsMobile() || window.close();
          })
        : n.respond == "history"
        ? IsMobile()
          ? fnBack("/Mobile/Aspx/M_ReferralHistory.aspx?action=2")
          : openNewWindowAutoHeightName("/Aspx/ReferralHistory.aspx", 800, 581)
        : $.fn.alert(n.respond, function () {
            location.reload();
          });
    },
  });
}
function copy(n) {
  var t = $("<textarea />");
  t.val(n).css({ width: "1px", height: "1px" }).appendTo("body");
  t.select();
  document.execCommand("copy");
  t.remove();
}
function spanPwdEye(n) {
  var r = $(n.previousElementSibling).attr("id"),
    t,
    i;
  $("#" + r)
    .parent(".pwON")
    .toggleClass("off");
  t = document.getElementById(r);
  $("#" + r)
    .parent(".pwON")
    .hasClass("off")
    ? ((t.type = "password"),
      t.value &&
        ((i = myBrowser()),
        $(this).css("font-family", "Arial"),
        i == "Chrome"
          ? (t.style.fontSize = "20px")
          : i == "FF"
          ? (t.style.fontSize = "12px")
          : i == "IE" && (t.style.fontSize = "12px")))
    : ((t.type = "text"), t.value && (t.style.fontSize = ""));
}
$(function () {
  jQuery.fn.extend({
    _loadingIndex: 0,
    alert: function (n, t, i, r, u, f, e, o = true, s = false) {
      var a = !0,
        h = i,
        v = r,
        l = location.pathname.toLowerCase(),
        w,
        b;
      i || (typeof webRes != "undefined" && (h = webRes.Font_Info));
      r || (typeof webRes != "undefined" && (v = webRes.Font_OK));
      var k = isNE(u) ? u : 0.46,
        y = isNE(f) ? f : 0,
        d = isNE(s) && s == !0 ? !0 : !1,
        p = $(this),
        g = IsYn
          ? "<div class='layer-content-inner yn-fontsize'>"
          : "<div class='layer-content-inner'>",
        c = $(window).width() * 0.7 > 288 ? 288 : $(window).width() * 0.7;
      return (
        h == webRes.Font_Attention
          ? (c = 300)
          : h == webRes.Font_ImportMsg1 || (IsYn && h == webRes.Font_Info)
          ? (c = 330)
          : h == "添加銀行帳號"
          ? (c = 370)
          : h == "代碼繳費資訊"
          ? (c = 400)
          : h == "Thêm tài khoản" && (c = 408),
        (h == "添加銀行帳號" ||
          h == webRes.Font_ForgotPwd ||
          h == webRes.Font_Attention ||
          h == "Thêm tài khoản hoặc thẻ") &&
          (y = 1),
        n.includes(webRes.Font_BanksMsg1) && (c = 330),
        $(".voucherTw").length > 0 && (c = 320),
        (w = [
          webRes.Font_Czzq_f_storeSet,
          webRes.Font_Czzq_34,
          webRes.Font_Czzq_f_isOnlineState,
          webRes.Font_Czzq_f_zfbState,
          webRes.Font_Czzq_f_weChatState,
        ]),
        (b = ["czzq_1", "quickpassdeposit"]),
        (w.includes(n) || b.findIndex((n) => l.indexOf(n)) > -1) && (a = !1),
        layer.alert(
          g + n + "</div>",
          {
            shade: k,
            title: "<div class='layer-title-inner'>" + h + "</div>",
            anim: -1,
            isOutAnim: !1,
            resize: !1,
            shadeClose: !1,
            btn: v,
            time: 0,
            offset: "auto",
            closeBtn: y,
            skin: "cashSkin cashSkinPC",
            maxWidth: c,
            move: !1,
            success: function (n, t) {
              var u, i, r;
              if (
                (n
                  .find(".layui-layer-btn>.layui-layer-btn0")
                  .attr("href", "javascript:;")
                  .focus(),
                d
                  ? ((u = $(window).width() * 0.7),
                    layer.style(t, {
                      "max-width": u,
                      "min-width": c,
                      width: "max-content",
                    }),
                    $(".layui-layer-content").css("max-height", "250px"))
                  : layer.style(t, { "max-width": c }),
                o && l.indexOf("cnfverifypassword") == -1 && a)
              ) {
                var f =
                    l.indexOf("add2") > -1 &&
                    window.parent.$("iframe").height() > 0
                      ? window.parent.$("iframe").height()
                      : $("#form1").height(),
                  i = f > window.innerHeight ? window.innerHeight : f,
                  r = (i - $("#layui-layer" + t).outerHeight()) / 2;
                layer.style(t, { top: r });
              }
              h == "代碼繳費資訊" &&
                ((i =
                  $("#form1").height() > window.innerHeight
                    ? window.innerHeight
                    : $("#form1").height()),
                (r = (i - $("#layui-layer" + t).outerHeight()) / 2),
                layer.style(t, { top: r }));
              h == "Thêm tài khoản" &&
                $(".layui-layer-content").css({ margin: "0px 30px 0px 30px" });
            },
            cancel: function () {
              e ? e() : t && t();
            },
          },
          function (n) {
            t && t();
            layer.close(n);
            p && p.focus();
          }
        )
      );
    },
    confirm: function (n, t, i, r, u, f, e) {
      var o = r,
        c = u,
        l = f,
        a = 0,
        h = isNE(e) && e == !0 ? !0 : !1,
        s,
        v;
      return (
        r || r == 0 || (typeof webRes != "undefined" && (o = webRes.Font_Info)),
        ((o != null && o.indexOf(webRes.Font_CheckDetails) > -1) || e == !0) &&
          (a = 1),
        u || (typeof webRes != "undefined" && (c = webRes.Font_OK)),
        f || (typeof webRes != "undefined" && (l = webRes.Font_Cancel)),
        (s = $(window).width() * 0.7 > 288 ? 288 : $(window).width() * 0.7),
        o != null &&
        (o.indexOf(webRes.Font_CheckDetails) > -1 ||
          o == webRes.Font_UploadDetails)
          ? (s = 400)
          : IsYn && h == !0
          ? (s = 360)
          : o == "Nạp tiền nhanh" || (IsYn && o == webRes.Font_Info)
          ? (s = 330)
          : (o == "臨櫃儲值提交" ||
              o == "快速儲值提交" ||
              o == "专属支付宝提交") &&
            (s = 300),
        (v = IsYn
          ? "<div class='layer-content-inner yn-fontsize'>"
          : "<div class='layer-content-inner'>"),
        layer.confirm(
          v + n + "</div>",
          {
            shade: 0.46,
            anim: -1,
            isOutAnim: !1,
            resize: !1,
            shadeClose: !1,
            title: o,
            move: !1,
            btn: [l, c],
            time: 0,
            closeBtn: a,
            skin: "cashSkin cashSkinConfirm cashSkinPC",
            maxWidth: s,
            success: function (n, t) {
              if (
                (n
                  .find(".layui-layer-btn>.layui-layer-btn1")
                  .attr("href", "javascript:;")
                  .focus(),
                layer.style(t, { "max-width": s }),
                h == !0)
              ) {
                $(".layui-layer-content").css("max-height", "250px");
                var i =
                    $("#form1").height() > window.innerHeight
                      ? window.innerHeight
                      : $("#form1").height(),
                  r = (i - $("#layui-layer" + t).outerHeight()) / 2;
                layer.style(t, { top: r });
                $(".layui-layer-btn0").addClass("Ldeep");
                $(".layui-layer-btn1").addClass("Rdeep");
              }
            },
            cancel: function (n) {
              layer.close(n);
              h == !0 && t && t();
            },
            end: function (n) {
              layer.close(n);
            },
          },
          function (n) {
            layer.close(n);
            i && i();
          },
          function (n) {
            layer.close(n);
            t && t();
          }
        )
      );
    },
    loading: function (n) {
      var t = $(this),
        i,
        u,
        r;
      !t || t.size() <= 0
        ? n
          ? (this._loadingIndex = layer.msg(n, {
              icon: 16,
              shade: 0.01,
              time: 0,
              skin: "layui-layer-dialog-loading",
            }))
          : layer.load(2)
        : ((i = $("<div>")),
          i.addClass("localloading"),
          (u = Math.max.apply(
            null,
            $.map($("body *"), function (n) {
              if ($(n).css("position") != "static")
                return parseInt($(n).css("z-index")) || 1;
            })
          )),
          (r = t.css("position")),
          i.css({
            position: r && r == "fixed" ? r : "absolute",
            top: t.offset().top,
            left: t.offset().left,
            width: t.outerWidth(),
            height: t.outerHeight(),
            background: "rgba(0,0,0,.1)",
            "background-image": "url(/images/loading.gif)",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index": u + 1,
          }),
          $("body").append(i));
    },
    closeloading: function () {
      var n = $(this);
      !n || n.size() <= 0
        ? (this._loadingIndex > 0 &&
            (layer.close(this._loadingIndex), (this._loadingIndex = 0)),
          layer.closeAll("loading"))
        : $("div.localloading").remove();
    },
    close: function (n) {
      layer.close(n);
    },
    show2: function () {
      $(this).css("display", "inline-block");
    },
    open: function (n, t, i, r, u, f, e, o, s) {
      var h = {
        title: n,
        type: 2,
        content: null,
        area: [i + "px", r + "px"],
        shade: 0.46,
        anim: 2,
        skin: "cashSkin cashSkinPC IELoadPage",
        closeBtn: 1,
        resize: !1,
        moveOut: !1,
        end: function () {
          f && f();
        },
        success: function (u, f) {
          if (n == webRes.Font_ForgotPwd || n == "首次AstroPay提款需验证手机")
            (r = "auto"),
              layer.style(f, { "max-width": i, height: r }),
              $(".layui-layer-content").css({ padding: "0" });
          else if (
            t == "#divPass" ||
            t == "#divSubmitVerify" ||
            t == "#divCheckID"
          ) {
            var o =
                $("#form1").height() > window.innerHeight
                  ? window.innerHeight
                  : $("#form1").height(),
              s = (o - $("#layui-layer" + f).outerHeight()) / 2;
            layer.style(f, { "max-width": i, height: r, top: s });
            $(".layui-layer-content").css({ padding: "0", height: "233px" });
          } else
            n == webRes.Font_ComplantBox_2 ||
            n == webRes.Font_Hdfw ||
            t == "#divSubmitVoucher"
              ? (layer.style(f, { "max-width": i, height: r }),
                $(".layui-layer-content").css({ padding: "0", height: "auto" }))
              : t == "#divIdCard" &&
                layer.style(f, { "max-width": i, height: r });
          u.removeClass("IELoadPage");
          e && e(u, f);
        },
      };
      return (
        t == "#divPass" && (h.shade = o),
        i == "auto" && (h.area[0] = i),
        r == "auto" && (h.area[1] = r),
        t.indexOf("/") < 0
          ? ((h.type = 1), (h.content = $(t)))
          : ((h.type = 2), (h.content = [t, u])),
        (h.closeBtn = s == null || s == undefined ? 1 : s),
        layer.open(h)
      );
    },
    selectBox: function (n, t) {
      var e = n && n.search;
      if (
        ($(this).each(function () {
          var u = $(this),
            f,
            o;
          if (!u.data("selectBox")) {
            u.data("selectBox", "1");
            var i = u.children("span"),
              t = u.children(".option_box"),
              r = null;
            if (e) {
              r = $("<input>");
              r.attr("placeholder", n.placeholder ? n.placeholder : "").attr(
                "type",
                "text"
              );
              i.append(r);
              r.on("input keyup", function (n) {
                var f =
                    n || window.event || arguments.callee.caller.arguments[0],
                  u;
                if (
                  f &&
                  f.keyCode == 13 &&
                  location.href.indexOf("ComplantBox.aspx") == -1
                ) {
                  r.blur();
                  t.slideUp(200);
                  return;
                }
                u = $(this).val();
                t.children("a").removeClass("active");
                i.data("value", "");
                t.children("a").each(function () {
                  var n = $(this);
                  $.trim(n.text().toLowerCase()).indexOf(u.toLowerCase()) > -1
                    ? (n.show(),
                      $.trim(n.text().toLowerCase()) == u.toLowerCase() &&
                        (n.addClass("active"),
                        i.data("value", n.data("value")),
                        n.data("value")
                          ? i.removeClass("empty")
                          : i.addClass("empty"),
                        r.val(n.text())))
                    : n.hide();
                });
                u.length > 0 &&
                t.children("a:not([style*='display: none'])").length < 1
                  ? t.hide()
                  : f.type != "input" && t.slideDown(200);
              });
            }
            (n && n.maxlength && t.height(n.maxlength * 35)) ||
              t.height(
                t.children("a").size() > 6 ? 210 : t.children("a").size() * 35
              );
            u.on("click", function () {
              u.css("border-color", "");
              r && r.focus();
              r && t.children("a").show();
              var n = r && r.val();
              if (n === null || n == "") {
                t.slideToggle(200);
                return;
              }
              t.children("a").removeClass("active");
              i.data("value", "");
              t.children("a").each(function () {
                var t = $(this);
                $.trim(t.text().toLowerCase()).indexOf(n.toLowerCase()) > -1
                  ? (t.show(),
                    $.trim(t.text().toLowerCase()) == n.toLowerCase() &&
                      (t.addClass("active"),
                      i.data("value", t.data("value")),
                      t.data("value")
                        ? i.removeClass("empty")
                        : i.addClass("empty"),
                      r.val(t.text())))
                  : t.hide();
              });
              t.children("a:not([style*='display: none'])").length < 1
                ? t.hide()
                : t.slideToggle(0);
            });
            t.children("a").on("click", function () {
              var n = $(this);
              n.siblings("a").removeClass("active");
              n.addClass("active");
              i.data("value", n.data("value"));
              n.data("value") ? i.removeClass("empty") : i.addClass("empty");
              r == null ? i.text(n.text()) : r.val(n.text());
            });
            f = t.children("a.active");
            f.size() > 0 &&
              ((o = $(this)),
              i.data("value", f.data("value")),
              r == null ? i.text(f.text()) : r.val(f.text()),
              o.data("value") ? i.removeClass("empty") : i.addClass("empty"));
            $(document).on("click", function (n) {
              n.target.id != u.attr("id") &&
                $(n.target)
                  .parents("#" + u.attr("id"))
                  .size() <= 0 &&
                t.hide();
            });
          }
        }),
        n == "getValue")
      )
        return $(this).children("span").data("value");
      if (n == "setValue") {
        var r = $(this).children("span"),
          u = $(this).children(".option_box"),
          f = r.children("input"),
          i = u.children("a[data-value='" + t + "']");
        i.size() > 0 &&
          (u.children("a").removeClass("active"),
          r.data("value", t),
          f.size() > 0 ? f.val(i.text()) : r.text(i.text()),
          i.addClass("active"));
      }
      if (n == "getText")
        return $(this).find("span>input").size() > 0
          ? $(this).find("span>input").val()
          : $(this).children("span").data("text");
      n == "focus" &&
        ($(this).css("border-color", "rgb(93, 143, 217)"),
        $(this).find("span>input") && $(this).find("span>input").focus());
    },
    initPage: function (n) {
      var t = 0,
        h = n.totalCount || 0,
        c = n.pageSize || 10,
        i = n.currentIndex || 1,
        u = n.pagebox || $("#page-box"),
        r = n.pageHide || 10,
        e = n.type || 1,
        o = n.pageHideBtn || 0,
        s,
        f;
      if (((t = Math.ceil(h / c)), u.empty(), t <= 1)) return !1;
      s = function () {
        var n = "<div class='page-div'>",
          s,
          f;
        for (
          e == 1 &&
            (i > 1
              ? ((n += "<a class='bgblue home' data-index='1'></a>"),
                (n += "<a class='bgblue up' data-index='" + (i - 1) + "'></a>"))
              : ((n += "<span class='bgblue home'></span>"),
                (n += "<span class='bgblue up'></span>"))),
            s = Math.ceil(i / r),
            n += "<div class='pagesNum'>",
            i > r &&
              (n +=
                o == 0
                  ? "<a data-index='" + (s - 1) * r + "'>...</a>"
                  : "<a style='text-decoration:none;cursor:default;'>...</a>"),
            f = (s - 1) * r + 1;
          f <= s * r;
          f++
        )
          f == i
            ? (n += "<span class='active'>" + f + "</span>")
            : f <= t && (n += "<a data-index='" + f + "'>" + f + "</a>");
        t > s * r &&
          s * r < t &&
          (n +=
            o == 0
              ? "<a data-index='" + (s * r + 1) + "'>...</a>"
              : "<a style='text-decoration:none;cursor:default;'>...</a>");
        n += "</div>";
        e == 1 &&
          (i < t
            ? ((n +=
                "<a class='bgblue next' data-index='" + (i + 1) + "'></a>"),
              (n += "<a class='bgblue last' data-index='" + t + "'></a>"))
            : ((n += "<span class='bgblue next'></span>"),
              (n += "<span class='bgblue last'></span>")));
        n += "</div>";
        u.html(n);
      };
      f = function () {
        s();
        u.find("a")
          .off("click")
          .on("click", function () {
            var t = $(this).data("index");
            i = t;
            t && n.callback && n.callback.call({ render: f }, t);
          });
        u.find(".search-input").on("keyup", function () {
          this.value = this.value.replace(/\D/g, "");
          this.value > t
            ? (this.value = t)
            : this.value == "" && (this.value = 1);
        });
      };
      f();
    },
    addCache: function (n, t) {
      isLocalStorageSupported()
        ? window.localStorage.setItem(n, t)
        : $.cookie(n, t, { path: "/" });
    },
    getCache: function (n) {
      return isLocalStorageSupported()
        ? window.localStorage.getItem(n)
        : $.cookie(n);
    },
    copy: function () {
      var n = $(window).width() * 0.46 > 195 ? 195 : $(window).width() * 0.46;
      return layer.msg(
        '<div style="text-align:center;margin-bottom:10px;line-height:0;"><img class=\'copySuccess\' src="/Scripts/layer/theme/default/icon_checkGreen.svg"></div><div>' +
          webRes.Font_Czzq_25 +
          "</div>",
        {
          shade: 0.46,
          anim: 0,
          isOutAnim: !1,
          resize: !1,
          shadeClose: !0,
          move: !1,
          time: 2e3,
          skin: "cashSkin cashSkinCopy cashSkinPC",
          maxWidth: n,
          success: function (t, i) {
            layer.style(i, { "max-width": n });
            $(".layui-layer-content").css({ margin: 0, padding: "20px 10px" });
          },
          end: function (n) {
            layer.close(n);
          },
        },
        function (n) {
          layer.close(n);
        },
        function (n) {
          layer.close(n);
        }
      );
    },
    success: function (n, t, i = 2e3, r) {
      var u = $(window).width() * 0.46 > 195 ? 195 : $(window).width() * 0.46;
      return (
        r && (u = r),
        layer.msg(
          '<div style="text-align:center;margin-bottom:10px;line-height:0;"><img class=\'copySuccess\' src="/Scripts/layer/theme/default/icon_checkGreen.svg"></div><div>' +
            n +
            "</div>",
          {
            shade: 0.46,
            anim: 0,
            isOutAnim: !1,
            resize: !1,
            shadeClose: !0,
            move: !1,
            time: i,
            skin: "cashSkin cashSkinCopy cashSkinPC",
            maxWidth: u,
            success: function (n, t) {
              layer.style(t, { "max-width": u });
              $(".layui-layer-content").css({
                margin: 0,
                padding: "20px 10px",
              });
            },
            end: function () {
              layer.closeAll();
              t && t();
            },
          },
          function () {
            layer.closeAll();
          },
          function () {
            layer.closeAll();
          }
        )
      );
    },
  });
  window.alertTip = function (n, t, i, r, u, f) {
    $.fn.alert(n, t, i, r, u, f);
  };
  window.confirmTip = function (n, t, i, r, u, f) {
    $.fn.confirm(n, t, i, r, u, f);
  };
});
(jQuery.cookie = function (n, t, i) {
  var f, r, e, o, u, s;
  if (typeof t != "undefined") {
    i = i || {};
    t === null && ((t = ""), (i.expires = -1));
    f = "";
    i.expires &&
      (typeof i.expires == "number" || i.expires.toUTCString) &&
      (typeof i.expires == "number"
        ? ((r = new Date()), r.setTime(r.getTime() + i.expires * 864e5))
        : (r = i.expires),
      (f = "; expires=" + r.toUTCString()));
    var h = i.path ? "; path=" + i.path : "",
      c = i.domain ? "; domain=" + i.domain : "",
      l = i.secure ? "; secure" : "";
    document.cookie = [n, "=", encodeURIComponent(t), f, h, c, l].join("");
  } else {
    if (((e = null), document.cookie && document.cookie != ""))
      for (o = document.cookie.split(";"), u = 0; u < o.length; u++)
        if (
          ((s = jQuery.trim(o[u])), s.substring(0, n.length + 1) == n + "=")
        ) {
          e = decodeURIComponent(s.substring(n.length + 1));
          break;
        }
    return e;
  }
}),
  (function (n) {
    (jQuery.browser = jQuery.browser || {}).mobile =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        n
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        n.substr(0, 4)
      );
  })(navigator.userAgent || navigator.vendor || window.opera);

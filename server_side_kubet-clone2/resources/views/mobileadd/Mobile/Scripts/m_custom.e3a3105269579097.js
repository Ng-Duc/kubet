function fnOut() {
  $.fn.isApp()
    ? (window.location.href = "about:WebOut")
    : isNativeAppNew
    ? sendLogoutAPP(MapLogin[2])
    : fnBack(OutUrl);
}
function fnMain() {
  fnBack(MainUrl);
}
function fnEnd() {
  fnBack(EndUrl);
}
function Msg(n) {
  $(".error_login_t").text(n);
  $(".error_login_t").show();
}
function GetAppDownload(n, t, i) {
  if (t) {
    var r = GetTextLanguage(
      "確認下載" + n + " APP？",
      "确认下载" + n + " APP？",
      "Xác nhận tải APP " + n + "？"
    );
    $.fn.confirm(r, function () {
      i == 1 ? fnBack(t) : fnOpenNew(t);
    });
  } else
    msg1(
      GetTextLanguage(
        "暫不提供下載",
        "暂不提供下载",
        "Sẽ không cung cấp được tải về"
      )
    );
}
function eventCheck(n, t) {
  var r, f, e, u, i;
  n
    ? n === "focus"
      ? (timer && clearInterval(timer),
        (r =
          $(t).parents(".popup_In").size() > 0 ||
          $(".layui-layer-page").size() > 0),
        !r &&
          $("body").height() < $(window).height() * 1.5 &&
          ((f = 1.5),
          location.pathname === "/Mobile/Aspx/M_Deposit_StoreBank_yn.aspx" &&
            (f = 1.2),
          $("body").append(
            "<div class='bottom_seat' style='width:100%;height:" +
              $(window).height() * f +
              "px'></div>"
          )),
        $("#win_warning").addClass("hide"),
        IsHuaWei() && $("#main-content").addClass("hide"),
        $(t).attr("scroll-id") == "txtCaptcha" ||
        $(t).attr("scroll-id") == "txtLoginCaptcha"
          ? ((u = 170),
            (i = typeof t == "number" ? t : $(t).offset().top - u),
            (e =
              window.innerWidth <= 330 && window.innerHeight <= 540
                ? 0.2
                : 0.3),
            (i = i - i * e),
            i > 0 && $("html,body").animate({ scrollTop: i }, 0),
            !IsIOS() &&
              window.innerWidth <= 330 &&
              window.innerHeight <= 540 &&
              (navigator.userAgent.indexOf("Firefox") > 0 &&
              window.location.pathname
                .toLocaleLowerCase()
                .indexOf("login.aspx") > 0
                ? $(".slidercaptcha").css("margin-top", "-30%")
                : $(".slidercaptcha").css("top", "20%")))
          : $("#txtCaptcha").is(":focus") &&
            r &&
            ((u = 170),
            (i = typeof t == "number" ? t : $(t).offset().top - u),
            !IsIOS() &&
              window.innerWidth <= 330 &&
              window.innerHeight <= 540 &&
              navigator.userAgent.indexOf("Firefox") > 0 &&
              i > 0 &&
              $(".mask").animate({ scrollTop: i }, 300)),
        setTimeout(function () {
          var i, u, n;
          windowInnerHeight = window.innerHeight;
          isScroll &&
            ((i = $(window).scrollTop()),
            $("body").hasClass("login_body")
              ? ((u = $("#scroller").height()),
                (n = 0),
                windowInnerHeight > u &&
                !$("#txtCaptcha,#txtLoginCaptcha").is(":focus")
                  ? ((n = $("img.logo_text").offset().top - 10),
                    scrollTop(n, 300))
                  : ((n =
                      $("img.logo_text").offset().top +
                      $(".logo_text").outerHeight()),
                    !$("#txtLoginCaptcha").is(":focus") &&
                      i <= n &&
                      scrollTop(n, 300)))
              : r || scrollTop(t, 300));
          (IsUC() && IsIOS()) ||
            (clearInterval(timer),
            (timer = setInterval(function () {
              eventCheck(!1);
            }, 100)));
        }, 500))
      : n === "blur" && elmentBlur()
    : window.innerHeight > windowInnerHeight && (IsIOS() || elmentBlur());
}
function fnLoginAdd(n, i, r) {
  if (n === "" || i === "") {
    Msg(webRes.Font_AccountPwdCannotEmpty);
    return;
  }
  var u = IsMobile() ? window.screen.width + "*" + window.screen.height : "",
    f = { txtUser: n, txtPassword: SetHMACMD5(i), screenSize: u, t: t };
  $.ajax({
    url: "/LoadData/Registered.ashx",
    dataType: "json",
    data: f,
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function (n) {
      n.status == 400 &&
        ($.cookie("force_upgrade", 0), fnLoginOperate(n.responseJSON, r));
    },
    success: function (n) {
      $.cookie("force_upgrade", 0);
      fnLoginOperate(n, r);
    },
  });
}
function fnLoginData(n) {
  var r =
      $.cookie("embed") && $.cookie("embed") == "true" && $.cookie("verify"),
    t,
    i;
  r && !n
    ? window.setTimeout(function () {
        window.location.href = $.cookie("CookieBackApp");
      }, 10)
    : (SendAppMessage("close"),
      (t = IsTXT
        ? $.trim($("#txtAccounts").val())
        : $.trim($("#ddlAccounts").val())),
      (i = $.trim($("#txtPassword").val())),
      fnLoginAdd(t, i, n));
}
function fnLogin(n) {
  setTimeout(function () {
    var u = $("#txtUser").val().replace(/\s+/g, "") || txtUser.value,
      i = $.trim($("#txtPassword").val()) || txtPassword.value,
      f,
      e;
    if ((isNE(u) && isNE(i)) || n != "touchstart") {
      if (u === "" || i === "") {
        Msg(webRes.Font_AccountPwdCannotEmpty);
        return;
      }
      if (i.length < 6) {
        Msg(webRes.Font_add_msg23);
        return;
      }
      if (!flagLogin) {
        flagLogin = !0;
        f = "";
        e = "";
        n == "isForce" && ((f = !0), (e = !1));
        var o = IsMobile()
            ? window.screen.width + "*" + window.screen.height
            : "",
          s = {
            txtUser: u,
            txtPassword: SetHMACMD5(i),
            isPopup: f,
            isContainPhone: e,
            screenSize: o,
            t: t,
          },
          r = $("#btnLogin").val();
        $("#btnLogin")
          .val(r + "...")
          .attr("disabled", !0);
        $.ajax({
          url: "/LoadData/Pd.ashx",
          dataType: "json",
          data: s,
          type: "post",
          cache: !1,
          timeout: 15e3,
          error: function (n) {
            $("#btnLogin").val(r).removeAttr("disabled");
            flagLogin = !1;
            n.status == 599 || n.status == 429
              ? ($("#txtPassword").val("").blur(),
                $.fn.alert(
                  webRes.Font_SigninFrequently +
                    "！！<br>" +
                    n.responseText.replace("blocked ", "")
                ))
              : n.status == 400 &&
                ($("#btnLogin").val(r).removeAttr("disabled"),
                (flagLogin = !1),
                fnLoginOperate(n.responseJSON));
          },
          success: function (n) {
            $("#btnLogin").val(r).removeAttr("disabled");
            flagLogin = !1;
            fnLoginOperate(n);
          },
        });
      }
    }
  }, 0);
}
function fnLoginSimplePopup() {
  close_pop();
  var t = open_pop({
      type: 3,
      title: webRes.Font_UserLogin,
      userPlaceholder: webRes.Font_AccountFont + " / " + webRes.Font_add_msg44,
      pwdPlaceHolder: webRes.Font_Pwd,
      login: webRes.Font_Login,
      register: webRes.Font_Register,
      callback: function () {},
      closeback: function () {
        close_pop();
      },
    }),
    n = ".mask_pop_" + t + ".login_verify ";
  $(n + ".btn_close").click(function () {
    close_pop();
    $("body").css({ width: "", height: "", overflow: "", position: "" });
    layer.closeAll();
  });
  $(n + "#txtAccountsVerify, " + n + "#txtPasswordVerify").on(
    "focus",
    function (n) {
      setTimeout(function () {
        var t = $(window).scrollTop(),
          r = $(n.target).offset().top,
          i = r - t - 39.5;
        i < 0 &&
          n.target.id == $(":focus").attr("id") &&
          setTimeout(function () {
            $(window).scrollTop(t - Math.abs(i));
          }, 200);
      }, 500);
    }
  );
  $(n + "#txtAccountsVerify").on("blur", function () {
    checkRegeditUser2(this, 5);
    checkExtraLayerInput();
    fn_txtAccountsVerify();
  });
  $(n + "#txtPasswordVerify").on("blur", function () {
    checkRegeditUser2(this, 5);
    checkExtraLayerInput();
    fn_txtPasswordVerify();
  });
  $(n + "#txtAccountsVerify," + n + "#txtPasswordVerify").on(
    "keyup",
    function () {
      layer.closeAll();
      checkExtraLayerInput();
    }
  );
  $(".keyboard-mask").css("width", $(".keyboard-mask").parent().width());
  $(".caretMask:after").css("margin-bottom", "1%");
  callback && callback();
}
function fnLoginExtraLayer(n, t) {
  close_pop();
  var r = open_pop({
      type: 4,
      title: webRes.Font_UserLogin,
      oktext: webRes.Font_Login,
      placeholderLogin: n
        ? IsYn
          ? webRes.Font_AccountFont + " / " + webRes.Font_add_msg44
          : webRes.Font_AccountsAndPhoneNew
        : IsYn
        ? webRes.Font_AccountFont
        : webRes.Font_add_jh_msg10,
      placeholderPass: IsYn ? webRes.Font_Pwd : webRes.Font_add_jh_msg12,
      placeholderPhone: webRes.Font_ForgotPass_5,
      autoclose: !1,
      callback: function () {},
      cancelback: function () {
        close_pop(r);
      },
    }),
    i = ".mask_pop_" + r + ".login_verify ";
  $(i + ".btn_close").click(function () {
    close_pop();
    $("body").css({ width: "", height: "", overflow: "", position: "" });
    layer.closeAll();
  });
  $(i + "#txtAccountsVerify, " + i + "#txtPasswordVerify").on(
    "focus",
    function (n) {
      setTimeout(function () {
        var t = $(window).scrollTop(),
          r = $(n.target).offset().top,
          i = r - t - 39.5;
        i < 0 &&
          n.target.id == $(":focus").attr("id") &&
          setTimeout(function () {
            $(window).scrollTop(t - Math.abs(i));
          }, 200);
      }, 500);
    }
  );
  $(i + "#txtAccountsVerify").on("blur", function () {
    checkRegeditUser2(this, 5);
    checkExtraLayerInput();
    fn_txtAccountsVerify();
  });
  $(i + "#txtPasswordVerify").on("blur", function () {
    checkRegeditUser2(this, 5);
    checkExtraLayerInput();
    fn_txtPasswordVerify();
  });
  $(i + "#txtCaptcha").on("blur keyup input", function (n) {
    n.type == "keyup" && layer.closeAll();
    checkRegeditUser2(this, 5);
    $(this).val().length > 4 && (this.value = this.value.substr(0, 4));
    checkExtraLayerInput();
    (n.type == "blur" || (n.type == "keyup" && n.keyCode == 13)) &&
      fn_txtCaptcha();
    $(this).val().length == 4
      ? $(".btn_confirm_captcha").removeAttr("disabled")
      : $(".btn_confirm_captcha").attr("disabled", "disabled");
  });
  $(i + "#txtAccountsVerify," + i + "#txtPasswordVerify").on(
    "keyup",
    function () {
      layer.closeAll();
      checkExtraLayerInput();
    }
  );
  $(i + "#txtPhoneVerify").keyboard({
    type: "number",
    blur: function () {
      checkExtraLayerInput();
      fn_txtPhoneVerify(!1) ||
        $("#txtPhoneVerify").val() == "" ||
        ($(":focus").blur(),
        $("#txtPhoneVerify + .keyboard-mask").click(),
        fn_txtPhoneVerify(),
        $("#txtPhoneVerify")
          .parent()
          .find(".caretMask")
          .css("display", "inline-flex"),
        $("#txtPhoneVerify").parent().find(".Rclose").show());
    },
    changeValue: function () {
      layer.closeAll();
      checkExtraLayerInput();
    },
    click: function () {},
    boardDisplay: function () {
      return ($("#txtAccountsVerify").val() == "" ||
        fn_txtAccountsVerify(!1)) &&
        ($("#txtPasswordVerify").val() == "" || fn_txtPasswordVerify(!1))
        ? !0
        : !1;
    },
  });
  $(".refresh-button").click(function () {
    getCaptchaNumber();
  });
  $(".btn_confirm_captcha").click(function () {
    verifyCaptchaNumber();
  });
  n
    ? setTimeout(function () {
        $("#txtPhoneVerify").parent().addClass("hidden");
      }, 0)
    : $("#txtAccountsVerify").attr("maxlength", "10");
  captchaCount = 0;
  InitCaptcha();
  $(".keyboard-mask").css("width", $(".keyboard-mask").parent().width());
  $(".caretMask:after").css("margin-bottom", "1%");
  t && t();
}
function verifyExtraLayer() {
  fn_txtAccountsVerify(!1) &&
    fn_txtPasswordVerify(!1) &&
    fn_txtPhoneVerify(!1) &&
    loginExtraLayer();
}
function checkExtraLayerInput(n = false) {
  return fn_txtAccountsVerify(!1) &&
    fn_txtPasswordVerify(n) &&
    fn_txtPhoneVerify(!1) &&
    captchaCount
    ? ($(".w100.right").removeAttr("disabled"), !0)
    : ($(".w100.right").attr("disabled", "disabled"), !1);
}
function InitCaptcha() {
  var n = getCaptchaSize();
  $.ajax({
    url: "/LoadData/Captcha.ashx?type=1&w=" + n[0] + "&h=" + n[1],
    async: !1,
    cache: !1,
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    error: function () {
      $(".captchaNumber").hide();
      $.fn.alert(webRes.Font_Djzx_14, function () {
        location.reload();
      });
    },
    success: function (n) {
      isNE(n.Slider) || isNE(n.Background)
        ? n.Slider != null && n.Slider != ""
          ? sliderCaptcha(n)
          : ($(".captchaNumber").show(),
            $("#captchaImg").attr("src", n.Background))
        : ($(".captchaNumber").hide(),
          $.fn.alert(webRes.Font_Djzx_14 + "！", function () {
            location.reload();
          }));
    },
  });
}
function sliderCaptcha(n) {
  $(".captchaNumber").hide();
  var t = getCaptchaSize();
  $("#captcha").sliderCaptcha({
    width: t[0],
    height: t[1],
    sliderL: 42,
    sliderR: 9,
    offset: 5,
    loadingText: webRes.Font_CaptchaMsg3,
    failedText: webRes.Font_CaptchaMsg4,
    barText: webRes.Font_CaptchaMsg2,
    failLoadText: webRes.Font_CaptchaMsg5,
    repeatIcon: "fa fa-redo",
    setSrc: function () {
      return (
        $("#captcha2").hide(),
        (captchaCount = 0),
        checkExtraLayerInput(!0),
        "/LoadData/Captcha.ashx?type=1&w=" + t[0] + "&h=" + t[1]
      );
    },
    initsetSrc: function () {
      return n;
    },
    onSuccess: function () {
      $(".captchaNumber").is(":hidden") &&
        ($("#captcha2").show(),
        setTimeout(function () {
          $("#captcha").removeClass("sliderContainer_active");
        }, 500),
        (captchaCount = 1),
        checkExtraLayerInput(!0));
    },
    remoteUrl: "/LoadData/Captcha.ashx?type=2&w=" + t[0] + "&h=" + t[1],
    verify: function (n, t) {
      $("#txtPhoneVerify + .keyboard-mask + .num_keyboard").hasClass("show") &&
        fn_txtPhoneVerify() &&
        ($("#txtPhoneVerify + .keyboard-mask + .num_keyboard").removeClass(
          "show"
        ),
        $(".caretMask").hide());
      var i = !1,
        r = "";
      return (
        $.ajax({
          url: t,
          data: JSON.stringify(n),
          async: !1,
          cache: !1,
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          success: function (n) {
            n.Background != null && n.Background != ""
              ? (r = n.Background)
              : (i = n);
          },
        }),
        r.length > 0
          ? ($("#captcha,#captcha2").hide(),
            $(".captchaNumber").show(),
            $("#captchaImg").attr("src", r),
            $("#txtCaptcha").val(""),
            $(".w100.right,.btn_confirm_captcha").attr("disabled", "disabled"),
            (i = !0))
          : i === !1 && $("#captcha2").hide(),
        (captchaCount = 0),
        i
      );
    },
  });
}
function getCaptchaNumber() {
  if (flagGetCaptcha) return !1;
  flagGetCaptcha = !0;
  $("#txtCaptcha").val("").attr("disabled", !1);
  $(".btn_confirm_captcha").hasClass("success") &&
    $(".btn_confirm_captcha")
      .removeClass("success")
      .val(webRes.Font_SetVoicePass_Msg7);
  $(".btn_confirm_captcha").attr("disabled", "disabled");
  $(".captcha_error").css("visibility", "hidden");
  layer.closeAll();
  var n = getCaptchaSize();
  $.ajax({
    url: "/LoadData/Captcha.ashx?type=1&w=" + n[0] + "&h=" + n[1],
    async: !1,
    cache: !1,
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    error: function () {
      flagGetCaptcha = !1;
    },
    success: function (n) {
      isNE(n.Slider) ||
        isNE(n.Background) ||
        ($(".captchaNumber").hide(),
        $.fn.alert(webRes.Font_Djzx_14 + "！", function () {
          location.reload();
        }));
      n.Slider != null && n.Slider != ""
        ? ($("#captcha").show(),
          sliderCaptcha(n),
          $("#captcha").sliderCaptcha("reset"))
        : $("#captchaImg").attr("src", n.Background);
      flagGetCaptcha = !1;
    },
  });
}
function verifyCaptchaNumber() {
  if (flagVerify) return !1;
  flagVerify = !0;
  var n = getCaptchaSize();
  $.ajax({
    url: "/LoadData/Captcha.ashx?type=2&w=" + n[0] + "&h=" + n[1],
    async: !1,
    cache: !1,
    type: "get",
    contentType: "application/json",
    dataType: "json",
    data: { captcha: $("#txtCaptcha").val() },
    error: function () {
      flagVerify = !1;
    },
    success: function (n) {
      n.Slider != null && n.Slider != ""
        ? ($("#captcha").show(),
          sliderCaptcha(n),
          $("#captcha").sliderCaptcha("reset"),
          $(".captcha_error").css("visibility", "hidden"))
        : n == !0
        ? ((captchaCount = 1),
          $("#txtCaptcha").attr("disabled", "disabled"),
          $(".btn_confirm_captcha")
            .attr("disabled", "disabled")
            .val("")
            .addClass("success"),
          $(".captcha_error").css("visibility", "hidden"))
        : n == !1 &&
          ((captchaCount = 0),
          fnFocus("#txtCaptcha"),
          $(".captcha_error").css("visibility", "visible"),
          $("#txtCaptcha").val(""),
          $(".btn_confirm_captcha").attr("disabled", "disabled"));
      flagVerify = !1;
      checkExtraLayerInput(!0);
    },
  });
}
function loginExtraLayer() {
  setTimeout(function () {
    var f, e;
    if (
      ($(".caretMask").text(""),
      $(".caretMask").hide(),
      $(".Rclose").hide(),
      checkExtraLayerInput())
    ) {
      var u =
          $("#txtAccountsVerify").val().replace(/\s+/g, "") ||
          txtAccountsVerify.value,
        n = $.trim($("#txtPasswordVerify").val()) || txtPasswordVerify.value,
        i = $.trim($("#txtPhoneVerify").val()),
        r = !$("#txtPhoneVerify").parent().hasClass("hidden");
      if (u == "" || n == "") $.fn.alert(webRes.Font_AccountPwdCannotEmpty);
      else if (r && i == "")
        $.fn.alert(webRes.Font_Mobile + webRes.Font_NotEmpty);
      else {
        if (r && !checkPhoneNumber(i, !0))
          return (
            (layerTipsIndex1 = layerTips(webRes.Font_sjgeyz, "txtPhoneVerify")),
            !1
          );
        f = IsMobile() ? window.screen.width + "*" + window.screen.height : "";
        e = {
          txtUser: u,
          txtPassword: SetHMACMD5(n),
          txtPhone: i,
          isPopup: !0,
          isContainPhone: r,
          screenSize: f,
          t: t,
        };
        flagLogin = !0;
        $.ajax({
          url: "/LoadData/Pd.ashx",
          dataType: "json",
          data: e,
          type: "post",
          cache: !1,
          timeout: 15e3,
          error: function (n) {
            flagLogin = !1;
            $(".btn_confirm_captcha")
              .removeClass("success")
              .val(webRes.Font_SetVoicePass_Msg7);
            n.status == 599 || n.status == 429
              ? ($(".captchaNumber").is(":visible")
                  ? ($(".refresh-button").bind("click", getCaptchaNumber),
                    $("#txtCaptcha").removeAttr("disabled"),
                    $(".refresh-button").click())
                  : ($("#captcha2").hide(),
                    $("#captcha").sliderCaptcha("resetWithText")),
                $("#txtPasswordVerify").val(""),
                $("#txtPhoneVerify").val(""),
                $(
                  "#txtPhoneVerify + .keyboard-mask + .num_keyboard"
                ).removeClass("show"),
                $(".w100.right").attr("disabled", "disabled"),
                (captchaCount = 0),
                $.fn.alert(
                  webRes.Font_SigninFrequently +
                    "！！<br>" +
                    n.responseText.replace("blocked ", "")
                ))
              : n.status == 400 &&
                ($(".captchaNumber").is(":hidden") && $("#captcha2").hide(),
                (flagLogin = !1),
                n.responseJSON.stus && n.responseJSON.stus == "11"
                  ? location.reload()
                  : n.responseJSON.stus != "7"
                  ? ($(".captchaNumber").is(":hidden") && $("#captcha2").hide(),
                    $(".error_login_t extralayer").text(n.responseJSON.msg),
                    $(".error_login_t extralayer").show(),
                    $(".captchaNumber").is(":visible")
                      ? ($(".refresh-button").bind("click", getCaptchaNumber),
                        $("#txtCaptcha").removeAttr("disabled"),
                        $(".refresh-button").click())
                      : $("#captcha").sliderCaptcha("resetWithText"),
                    $("#txtPasswordVerify").val(""),
                    $("#txtPhoneVerify").val(""),
                    $(
                      "#txtPhoneVerify + .keyboard-mask + .num_keyboard"
                    ).removeClass("show"),
                    $(".w100.right").attr("disabled", "disabled"),
                    (captchaCount = 0),
                    n.responseJSON.msg == webRes.Font_pdtxt3_AccountsEnterIsZero
                      ? ($("#txtAccountsVerify").val(""),
                        $.fn.confirm(
                          n.responseJSON.msg,
                          function () {
                            close_pop();
                            location.href = "/Mobile/Aspx/N_Kfzx.aspx";
                          },
                          null,
                          webRes.Font_Info,
                          webRes.Font_Czzq_14,
                          webRes.Font_Cancel
                        ))
                      : $.fn.alert(n.responseJSON.msg, function () {
                          n.responseJSON.msg == webRes.Font_LoginError &&
                            $("#txtAccountsVerify").val("");
                          n.responseJSON.stus == undefined
                            ? $(".login_verify .btn_close").click()
                            : (n.responseJSON.stus == "6" ||
                                n.responseJSON.stus == "9") &&
                              (n.responseJSON.stus == "6" &&
                                $("#txtAccountsVerify").val(""),
                              $("#txtPhoneVerify")
                                .parent()
                                .removeClass("hidden"),
                              $("#txtAccountsVerify").attr("maxlength", "10"),
                              $("#txtAccountsVerify").attr(
                                "placeholder",
                                IsYn
                                  ? webRes.Font_AccountFont
                                  : webRes.Font_add_jh_msg10
                              ));
                        }))
                  : ($(".captchaNumber").is(":visible")
                      ? ($(".refresh-button").bind("click", getCaptchaNumber),
                        $("#txtCaptcha").removeAttr("disabled"),
                        $(".refresh-button").click())
                      : ($("#captcha2").hide(),
                        $("#captcha").sliderCaptcha("resetWithText")),
                    (captchaCount = 0),
                    $("#txtPhoneVerify").parent().removeClass("hidden"),
                    $("#txtAccountsVerify").attr("maxlength", "10"),
                    $("#txtAccountsVerify").attr(
                      "placeholder",
                      IsYn ? webRes.Font_AccountFont : webRes.Font_add_jh_msg10
                    ),
                    $("#txtAccountsVerify").val("").focus(),
                    $("#txtPasswordVerify").val("")));
          },
          success: function (t) {
            $(".captchaNumber").is(":hidden") && $("#captcha2").hide();
            flagLogin = !1;
            t.stus === "0"
              ? fnLoginOperate(t)
              : t.stus && t.stus == "-2"
              ? fnSetVoicePass(t, n)
              : t.stus && t.stus == "11"
              ? location.reload()
              : t.StatusCode == 404
              ? ((window.top.document.title = "404"),
                layer.open({
                  title: !1,
                  type: 2,
                  content: ["/404.html", "no"],
                  area: ["100%", "100%"],
                  shade: 0.8,
                  shift: 2,
                  closeBtn: 0,
                  moveOut: !0,
                  fix: !1,
                }))
              : t.stus != "7"
              ? ($(".captchaNumber").is(":hidden") && $("#captcha2").hide(),
                $(".error_login_t extralayer").text(t.msg),
                $(".error_login_t extralayer").show(),
                $(".captchaNumber").is(":visible")
                  ? ($(".refresh-button").bind("click", getCaptchaNumber),
                    $("#txtCaptcha").removeAttr("disabled"),
                    $(".refresh-button").click())
                  : $("#captcha").sliderCaptcha("resetWithText"),
                $("#txtPasswordVerify").val(""),
                $("#txtPhoneVerify").val(""),
                $(
                  "#txtPhoneVerify + .keyboard-mask + .num_keyboard"
                ).removeClass("show"),
                $(".w100.right").attr("disabled", "disabled"),
                (captchaCount = 0),
                t.msg == webRes.Font_pdtxt3_AccountsEnterIsZero
                  ? ($("#txtAccountsVerify").val(""),
                    $.fn.confirm(
                      t.msg,
                      function () {
                        close_pop();
                        location.href = "/Mobile/Aspx/N_Kfzx.aspx";
                      },
                      null,
                      webRes.Font_Info,
                      webRes.Font_Czzq_14,
                      webRes.Font_Cancel
                    ))
                  : $.fn.alert(t.msg, function () {
                      t.msg == webRes.Font_LoginError &&
                        $("#txtAccountsVerify").val("");
                      t.stus == undefined
                        ? $(".login_verify .btn_close").click()
                        : (t.stus == "6" || t.stus == "9") &&
                          (t.stus == "6" && $("#txtAccountsVerify").val(""),
                          $("#txtPhoneVerify").parent().removeClass("hidden"),
                          $("#txtAccountsVerify").attr("maxlength", "10"),
                          $("#txtAccountsVerify").attr(
                            "placeholder",
                            IsYn
                              ? webRes.Font_AccountFont
                              : webRes.Font_add_jh_msg10
                          ));
                    }))
              : ($(".captchaNumber").is(":visible")
                  ? ($(".refresh-button").bind("click", getCaptchaNumber),
                    $("#txtCaptcha").removeAttr("disabled"),
                    $(".refresh-button").click())
                  : ($("#captcha2").hide(),
                    $("#captcha").sliderCaptcha("resetWithText")),
                (captchaCount = 0),
                $("#txtPhoneVerify").parent().removeClass("hidden"),
                $("#txtAccountsVerify").attr("maxlength", "10"),
                $("#txtAccountsVerify").attr(
                  "placeholder",
                  IsYn ? webRes.Font_AccountFont : webRes.Font_add_jh_msg10
                ),
                $("#txtAccountsVerify").val("").focus(),
                $("#txtPasswordVerify").val(""));
          },
        });
      }
    }
  }, 0);
}
function showTip(n) {
  n
    ? $("#txtimg").css({ "background-position": "0 -48px" })
    : $("#txtimg").css({ "background-position": "0 -70px" });
  $("#txtPassword_tip").show();
}
function fn_txtAccountsVerify() {
  var n = $.trim($("#txtAccountsVerify").val())
    .replace(/[^\a-\z\A-\Z0-9]/g, "")
    .toUpperCase();
  return n == "" ? !1 : !0;
}
function fn_txtPasswordVerify(n) {
  n = typeof n == "undefined" ? !0 : n;
  var t = "txtPasswordVerify",
    i = $.trim($("#txtPasswordVerify").val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase(),
    r = i.length >= 6;
  return r
    ? (layer.close(layerTipsIndex1), !0)
    : (i !== "" &&
        n &&
        (fnFocus("#txtPasswordVerify"),
        setTimeout(function () {
          $("#" + t).length > 0 &&
            (layerTipsIndex1 = layerTips(webRes.Font_txtPasswordVerifyBlur, t));
        }, 400)),
      !1);
}
function fn_txtPhoneVerify(n) {
  if ($("#txtPhoneVerify").parent().hasClass("hidden")) return !0;
  n = typeof n == "undefined" ? !0 : n;
  var t = "txtPhoneVerify",
    i = $.trim($("#txtPhoneVerify").val());
  return checkPhoneNumber(i, !0)
    ? (layer.close(layerTipsIndex1), !0)
    : (i !== "" &&
        n &&
        setTimeout(function () {
          $("#" + t).length > 0 &&
            (layerTipsIndex1 = layerTips(webRes.Font_sjgeyz, t));
        }, 0),
      !1);
}
function fn_txtCaptcha(n) {
  n = typeof n == "undefined" ? !0 : n;
  var t = "txtCaptcha",
    i = $.trim($("#txtCaptcha").val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase(),
    r = i.length == 4;
  return r
    ? (layer.close(layerTipsIndex1), !0)
    : (i !== "" &&
        n &&
        (fnFocus("#txtCaptcha"),
        setTimeout(function () {
          $("#" + t).length > 0 &&
            (layerTipsIndex1 = layerTips(webRes.Font_Captcha_Validate, t));
        }, 400)),
      !1);
}
function fnLoginOperate(n, t) {
  var i, r, u;
  n.stus && n.stus == "0"
    ? ($.cookie("app_close", null),
      isNE(t) ||
        (IsCn
          ? $.cookie("force_upgrade", null, { path: "/Mobile/Aspx" })
          : $.cookie("force_upgrade", null)),
      $.cookie("icwN2", 0, { path: "/" }),
      isNE(t) ? fnBack(t) : location.reload(),
      $.fn.addCache("isReadDwMessage", "0"),
      $.fn.addCache("temp_announcement", ""),
      sessionStorage.getItem("btn_AVactiv") == "1"
        ? sessionStorage.setItem("btn_AVactiv", n.account)
        : (sessionStorage.removeItem("btn_AVactiv"),
          sessionStorage.removeItem("btn_AVactivPos")),
      (i = sessionStorage.getItem("btn_AVactivPos")),
      i != null &&
        ((i = i.split(",")),
        i.length == 2 &&
          sessionStorage.setItem("btn_AVactivPos", i + "," + n.account)))
    : n.stus && n.stus == "1"
    ? fnEnd()
    : n.stus === "6" || n.stus === "7"
    ? ((r = $("#txtUser").val()),
      (u = $("#txtPassword").val()),
      fnLoginExtraLayer(!1, function () {}))
    : n.stus === "9" || n.stus == "10"
    ? ((r = $("#txtUser").val()),
      (u = $("#txtPassword").val()),
      fnLoginExtraLayer(!0, function () {}))
    : n.stus === "11"
    ? location.reload()
    : n.stus && n.stus == "-2"
    ? fnSetVoicePass(n, $.trim($("#txtPassword").val()) || txtPassword.value)
    : n.StatusCode == 404
    ? ((window.top.document.title = "404"),
      layer.open({
        title: !1,
        type: 2,
        content: ["/404.html", "no"],
        area: ["100%", "100%"],
        shade: 0.8,
        shift: 2,
        closeBtn: 0,
        moveOut: !0,
        fix: !1,
      }))
    : (n.msg.indexOf(webRes.Font_SigninFrequently) > -1
        ? $.fn.alert(n.msg)
        : n.msg.indexOf(webRes.Font_pdtxt3_AccountsEnterIsZero) > -1
        ? ($("#txtUser").val(""),
          $("#txtPassword").val(""),
          $.fn.confirm(
            n.msg,
            function () {
              close_pop();
              location.href = "/Mobile/Aspx/N_Kfzx.aspx";
            },
            null,
            webRes.Font_Info,
            webRes.Font_Czzq_14,
            webRes.Font_Cancel
          ))
        : Msg(n.msg),
      IsIOS()
        ? ($("#txtPassword").val(""),
          n.stus && n.stus === "-1" && $("#txtUser").val(""))
        : ($("#txtPassword").val(""),
          n.msg.indexOf(webRes.Font_pdtxt3_AccountsEnterIsZero) == -1 &&
            $("#txtPassword").focus(),
          n.stus && n.stus === "-1" && $("#txtUser").val("").focus()));
}
function fnSetVoicePass(n, t) {
  var f = n.account + "|" + SetHMACMD5(t),
    i = document.createElement("form"),
    r,
    u;
  i.style.visibility = "hidden";
  i.method = "POST";
  i.action = "N_SetVoicePass.aspx";
  r = document.createElement("input");
  r.name = "data";
  r.value = f;
  i.appendChild(r);
  u = document.createElement("input");
  u.name = "isShowVP";
  u.value = n.isShowVP;
  i.appendChild(u);
  document.body.appendChild(i);
  i.submit();
}
function layerframe(n, t, i, r, u) {
  layer.open({
    type: 2,
    title: n,
    content: [t, "no"],
    shade: 0,
    shift: -1,
    closeBtn: u,
    area: [i + "px", r + "px"],
    end: function () {
      fnTxtPass();
    },
  });
}
function GetLogined() {
  tio = window.clearInterval(tio);
  tio = window.setInterval("M_createXmlObjLog()", time1);
  M_createXmlObj();
  var n = getPageInfo().ptype;
  tio2 = window.clearInterval(tio2);
  tio2 = window.setInterval(
    "fnPoints(" + n + ")",
    getPageInfo().isGamePage ? time4 : time3
  );
  $(".icon_inforMoney div").html("loading..");
  location.search.toLowerCase().indexOf("autotransfer=") < 0 && fnPoints(n);
  M_fnPlatformSet();
}
function M_fnPlatformSet() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "34" },
    type: "get",
    cache: !1,
    timeout: 15e3,
    dataType: "json",
    success: function (n) {
      var i, t;
      n !== "" &&
        ((OpenSport = n.f_data3.f_isJsSportOpen),
        ShowFiveLink(n.f_data3, !1),
        ShowFiveLink(n.f_data4, !0),
        n.f_data3 != "" &&
          n.f_data4 != "" &&
          (n.f_data3.f_isKTalkOpen == "0"
            ? $("#ktalk").show().addClass("off")
            : n.f_data3.f_isKTalkOpen == "1"
            ? $("#ktalk").show().removeClass("off")
            : $("#ktalk").hide(),
          n.f_data4.f_isKTalkOpen == "0"
            ? (isNE(n.f_data4.f_isKTalkOpen_str)
                ? ((i =
                    ' <span style="color:red;">' +
                    n.f_data4.f_isKTalkOpen_str
                      .replace("南", "tháng")
                      .replace("越", "ngày") +
                    "</span>"),
                  (t =
                    "javascript:fnTipCss('#ktalk2','" +
                    webRes.Font_Platform_Time.replace(
                      "{0}",
                      webRes.Font_KTalkAccounts
                    ).replace("{1}", i) +
                    "',3,1);"))
                : (t =
                    "javascript:fnTipCss('#ktalk2','" +
                    webRes.Font_Maintain +
                    "！',3,1);"),
              fnSetOnclick("ktalk", t))
            : n.f_data4.f_isKTalkOpen == "1"
            ? ((t = "openIM()"), fnSetOnclick("ktalk", t))
            : $("#ktalk").hide()));
    },
  });
}
function M_createXmlObjLog() {
  var n = CheckFormIos();
  $.ajax({
    url: "../LoadData/M_Send.ashx",
    data: { checkTypeL: "1" },
    type: "get",
    timeout: 15e3,
    cache: !1,
    dataType: "json",
    error: function () {},
    success: function (n) {
      fnTypeLogined(n);
    },
  });
}
function M_createXmlObj() {
  var n = CheckFormIos();
  isFirst1 !== !0 || (n && !IsIOS()) || IsBNGlobby() || loading();
  $.ajax({
    url: "../LoadData/M_Send.ashx",
    data: { checkTypeL: "2" },
    type: "get",
    timeout: 15e3,
    cache: !1,
    dataType: "json",
    error: function () {},
    success: function (n) {
      var i;
      isFirst1 !== !0 ||
        IsBNGlobby() ||
        (setTimeout(function () {
          closeloading();
        }, 500),
        (isFirst1 = !1));
      fnTypeLogined(n);
      n.s_f_mutualStatus == 2 && $("#liMemchange").remove();
      var f = n.s_f_centerStatus,
        t = n.s_f_maintainMsg.split("|"),
        u = n.s_isRN === 1,
        e = n.s_isRN1 === 1,
        r = n.s_isAttach === 1;
      if (
        ((s_isMajorF = n.s_isMajorF),
        f === 0 &&
          (n.s_isMajorF ||
            (closeOrOpenMenu("#aHyzx", GetArrayIndex(t, 3, webRes.Font_Hy)),
            closeOrOpenMenu(
              "#aKscz",
              GetArrayIndex(t, 0, webRes.Font_DepositNotOpen + "！！")
            ),
            closeOrOpenMenu(
              "#aKscz2",
              GetArrayIndex(t, 1, webRes.Font_DrawNotOpen)
            ),
            closeOrOpenMenu(
              "#aFooterDW",
              webRes.Font_DepositAndDrawSysMaintain
            )),
          $("#aHyzx>img,#aFooterDW>img").attr(
            "src",
            "/Mobile/images/main/icon_maintain.svg"
          ),
          $("#aKscz,#aKscz2,#aHyzx,#aFooterDW").addClass("off")),
        closeOrOpenMenu("#aTraderec", "", function () {
          fnBack("/Mobile/Aspx/M_TradeRec.aspx?mtrc=unfinished");
        }),
        f !== 0 || n.s_isMajorF)
      ) {
        if (
          (fnSetDWMenu("btn_footer_DW"),
          fnSetMenu("btn_footer_menu", "btn_header_menu"),
          n.s_f_depositStatusZ === 0 &&
            n.s_isMajorF &&
            ($("#aKscz").addClass("off"), $("#hyzx_deposit").addClass("off")),
          n.s_f_depositStatusZ !== 0 || n.s_isMajorF)
        )
          if (
            (IsIOS() || navigator.userAgent.indexOf("Firefox") <= -1) &&
            n.f_isFulfillUpload
          ) {
            $("#aKscz").on("click", function () {
              checkUploadCallback(function () {
                checkFunction("D");
              });
            });
            $("#hyzx_deposit").removeClass("off");
            $("#hyzx_deposit")
              .removeAttr("onclick")
              .attr("onclick", "OpenUploadIC()");
          } else if (
            r ||
            n.s_f_ishow === 2 ||
            (n.s_f_depositStatus === 0 && n.s_f_ishow === 0)
          )
            $("#aKscz").addClass("off"),
              $("#hyzx_deposit").addClass("off"),
              $("#hyzx_deposit").removeAttr("onclick"),
              n.f_isUpload && !n.f_isCheckUpload
                ? closeOrOpenMenu(
                    "#aKscz",
                    GetArrayIndex(
                      "",
                      0,
                      webRes.Font_UploadIdCard_DepositMsg + "！"
                    )
                  )
                : n.s_f_ishow === 2 ||
                  r ||
                  (n.s_f_depositStatus === 0 &&
                    n.s_isMajorF &&
                    n.s_f_ishow != 0)
                ? closeOrOpenMenu(
                    "#aKscz",
                    GetArrayIndex("", 0, webRes.Font_DepositSysMaintain + "！")
                  )
                : closeOrOpenMenu(
                    "#aKscz",
                    GetArrayIndex("", 0, webRes.Font_DepositSysMaintain)
                  );
          else if (n.s_f_photoState !== 0 && u)
            if (IsTw && n.s_f_ishow === 3)
              $("#aKscz").addClass("off"),
                closeOrOpenMenu(
                  "#aKscz",
                  GetArrayIndex("", 0, webRes.Font_DepositCheck)
                ),
                $("#hyzx_deposit").addClass("off"),
                $("#hyzx_deposit").attr("onclick", "").unbind("click");
            else if (IsCn && n.s_f_ishow === 3)
              $("#aKscz").addClass("off"),
                closeOrOpenMenu(
                  "#aKscz",
                  GetArrayIndex("", 0, webRes.Font_DepositCheck)
                ),
                $("#hyzx_deposit").addClass("off"),
                $("#hyzx_deposit").attr("onclick", "").unbind("click");
            else if (n.s_f_depositStatus === 0) {
              $("#aKscz").addClass("off");
              $("#hyzx_deposit").addClass("off");
              $("#hyzx_deposit").removeAttr("onclick");
              $("#aKscz").on("click", function () {
                checkFunction("D");
              });
            } else
              closeOrOpenMenu("#aKscz", "", function () {
                fnBack("/Mobile/Aspx/M_Deposit.aspx");
              });
          else
            closeOrOpenMenu("#aKscz", "", layerframeAdd2),
              $("#hyzx_deposit").attr("onclick", "layerframeAdd2()");
        else
          $("#aKscz").addClass("off"),
            $("#hyzx_deposit").addClass("off"),
            $("#hyzx_deposit").removeAttr("onclick"),
            closeOrOpenMenu(
              "#aKscz",
              GetArrayIndex(
                t,
                0,
                webRes.Font_DepositSysMaintain.replace(/\\n/g, "") + "！！！"
              )
            );
        if (
          (n.s_f_withdrawalOpenZ === 0 &&
            n.s_isMajorF &&
            ($("#aKscz2").addClass("off"),
            $("#hyzx_withdrawal").addClass("off")),
          n.s_f_withdrawalOpenZ !== 0 || n.s_isMajorF)
        )
          if (
            (IsIOS() || navigator.userAgent.indexOf("Firefox") <= -1) &&
            n.f_isFulfillUpload == !0
          )
            $("#aKscz2").on("click", function () {
              checkUploadCallback(function () {
                checkFunction("W");
              });
            });
          else if (
            n.s_f_withdrawalOpen === 0 &&
            n.s_isMajorF &&
            (n.s_f_ishow === 0 || n.s_f_ishow === 2 || n.s_f_ishow === 3)
          )
            $("#aKscz2").addClass("off"),
              $("#hyzx_withdrawal").addClass("off"),
              $("#hyzx_withdrawal").removeAttr("onclick"),
              closeOrOpenMenu(
                "#aKscz2",
                GetArrayIndex("", 1, webRes.Font_DrawNotOpen)
              );
          else if (
            r ||
            (n.s_f_ishow === 2 && !e) ||
            (n.s_f_withdrawalOpen === 0 && n.s_isMajorF)
          )
            $("#aKscz2").addClass("off"),
              $("#hyzx_withdrawal").addClass("off"),
              $("#hyzx_withdrawal").removeAttr("onclick"),
              closeOrOpenMenu(
                "#aKscz2",
                GetArrayIndex("", 1, webRes.Font_DrawNotOpen + "！")
              );
          else if (n.s_f_photoState !== 0 && u)
            if (n.s_f_withdrawalOpen === 0)
              $("#aKscz2").addClass("off"),
                closeOrOpenMenu(
                  "#aKscz2",
                  GetArrayIndex("", 1, webRes.Font_DrawNotOpen)
                ),
                $("#hyzx_withdrawal").addClass("off"),
                $("#hyzx_withdrawal").removeAttr("onclick");
            else
              $("#aKscz2").on("click", function () {
                checkFunction("W");
              });
          else
            closeOrOpenMenu("#aKscz2", "", layerframeAdd2),
              $("#hyzx_withdrawal").attr("onclick", "layerframeAdd2()");
        else
          $("#aKscz2").addClass("off"),
            $("#hyzx_withdrawal").addClass("off"),
            $("#hyzx_withdrawal").removeAttr("onclick"),
            closeOrOpenMenu(
              "#aKscz2",
              GetArrayIndex(
                t,
                1,
                webRes.Font_DrawSysMaintain.replace(/\\n/g, "")
              )
            );
        n.s_f_depositStatusZ === 0 &&
          n.s_f_withdrawalOpenZ === 0 &&
          n.s_myPurse === 0 &&
          ($("#aFooterDW").addClass("off"),
          n.s_isMajorF ||
            closeOrOpenMenu(
              "#aFooterDW",
              webRes.Font_DepositWithdrawTransferMaintain
            ));
      }
      if (r) $("li#liChgbank,li#liMemchange").remove();
      else if (!u || n.s_f_photoState === 0)
        $("li#liChgbank,li#liMemchange,li#liChgData")
          .removeAttr("onclick")
          .off("click")
          .on("click", function () {
            layerframeAdd2();
          });
      if (
        ((i = getPageInfo()),
        (s_myPurse = n.s_myPurse),
        s_myPurse !== 1 &&
          ($("#aMypurse>img").attr(
            "src",
            "/Mobile/images/main/icon_maintain.svg"
          ),
          $("#aMypurse").addClass("off"),
          $("#aMypurse2").addClass("off"),
          $("#hyzx_transfer").addClass("off"),
          i.isGamePage && $("#aMypurse").addClass("gamepurse"),
          !n.s_isMajorF &&
            ($("#hyzx_transfer").removeAttr("onclick"),
            (s_myPurse_str = GetArrayIndex(
              t,
              2,
              webRes.Font_TransferMaintenanceMsg1
            )),
            closeOrOpenMenu(
              "#aMypurse",
              GetArrayIndex(t, 2, webRes.Font_MypurseNotOpen)
            ),
            closeOrOpenMenu(
              "#aMypurse2",
              GetArrayIndex(t, 2, webRes.Font_MypurseNotOpen)
            ),
            i.isGamePage)))
      ) {
        $("#aMypurse").addClass("gamepurse");
        $("#aMypurse").on("click", function () {
          $("#main-footer > a").removeClass("active");
          $(".footer_DW_open").removeClass("on");
          $(".btn_footer_DW ").removeClass("on");
          $("body")
            .css("-webkit-overflow-scrolling", "touch")
            .css("overflow") == "hidden" &&
            $("body")
              .css("-webkit-overflow-scrolling", "touch")
              .css("overflow", "auto");
        });
      }
      (s_myPurse === 1 || n.s_isMajorF) &&
        (closeOrOpenMenu("#aMypurse", "", function () {
          if (i.isGamePage) {
            $(window).scrollTop(-30);
            $("body").css("overflow", "hidden");
            var n = platformData[i.gameId];
            n.IsOpenOut = !0;
            n.IsOpenIn = !0;
            n.myPurse = s_isMajorF ? 1 : s_myPurse;
            n.myPurse_str = s_myPurse_str;
            n.transType = "game";
            open_myPurse(n, function () {
              fnPoints(i.ptype);
            });
            $("#main-footer > a").removeClass("active");
            s_myPurse !== 1 ||
              n.s_isMajorF ||
              ($("#aMypurse").addClass("on active"),
              $("#aMypurse div")
                .first()
                .css({ "background-position": "bottom" }));
          } else fnBack("/Mobile/Aspx/M_Mypurse.aspx");
        }),
        closeOrOpenMenu("#aMypurse2", "", function () {
          fnBack("/Mobile/Aspx/M_Mypurse.aspx");
        }));
      GetPdOther(n);
      isMSendLoaded = !0;
    },
  });
}
function CheckPlatformTransfer() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "37" },
    cache: !1,
    timeout: 15e3,
    error: function (n) {
      console.log(n.responseText);
    },
    success: function (n) {
      n === "False"
        ? fnBack("/Mobile/Aspx/M_Mypurse.aspx")
        : $.fn.alert(webRes.Font_MypurseNotOpen, function () {
            fnBack("/Mobile/Aspx/M_Index.aspx");
          });
    },
  });
}
function fnTypeLogined(n) {
  var h = CheckFormIos(),
    o = n.s_typeLogined,
    t,
    r,
    u,
    i,
    f,
    s,
    e;
  if (
    (o !== 0 &&
      ($.cookie("embed") && $.cookie("embed") == "true"
        ? window.setTimeout(function () {
            window.location.href = $.cookie("CookieBackApp");
          }, 10)
        : ((t = MapLogin[o]),
          isNativeAppNew
            ? (t == "" && (t = MapLogin[2]), sendLogoutAPP(t))
            : t == webRes.Font_AccountLocked
            ? $.fn.confirm(
                t,
                function () {
                  close_pop();
                  location.href = "/Mobile/Aspx/N_Kfzx.aspx";
                },
                null,
                webRes.Font_Info,
                webRes.Font_Czzq_14,
                webRes.Font_Cancel
              )
            : t !== ""
            ? $.fn.msg(t, !1, function () {
                fnOut();
              })
            : fnOut())),
    n.s_noReadMsgCount > 0 || n.s_noReadAnnouceCount > 0
      ? ($(".icon_inforMail").addClass("haveMsg"),
        $(".btn_bell").addClass("on"))
      : ($(".icon_inforMail").removeClass("haveMsg"),
        $(".btn_bell").removeClass("on")),
    typeof n.f_isAutoTrnRedDot != "undefined" &&
      typeof n.f_isSharedAppRedDot != "undefined" &&
      ((r = n.f_isAutoTrnRedDot),
      (u = n.f_isSharedAppRedDot),
      (r && u) || $("#aHYZX").addClass("on"),
      r ||
        (IsTest
          ? $("#hyzx_AutoTransfer").addClass("redC")
          : $(".autotrn").addClass("redC")),
      u ||
        (IsTest
          ? $("#hyzx_ShareAPP").addClass("redC")
          : $(".shared,.dwnload").addClass("redC"))),
    (i = $.fn.getCache("impt") || "0"),
    n.s_ImportantId && !i.includes(n.s_ImportantId))
  ) {
    if (
      n.s_Important &&
      n.s_Important.length > 0 &&
      $("#win_warning").size() > 0
    ) {
      if (
        ($("#win_warning").removeClass("hidden"),
        (f = n.s_Important.replace("&lt;", "<").replace("&gt;", ">")),
        $("#win_warning_span").html(f),
        (s = f.replace(/<(?!br\s*\/?)[^>]+>/g, "").split("<br>")),
        s.filter((n) => n.length > 0).length > 1 &&
          $(".win_warning_content").css({
            "margin-left": "0",
            "margin-right": "0",
          }),
        $("#win_warning_title").html(n.s_ImportantTitle),
        (e = $("#win_warning_span").find("a")),
        e.length > 0)
      )
        e.on("click", function () {
          if (i != "0") {
            var t = i.split("|");
            t.push(n.s_ImportantId);
            $.fn.addCache("impt", t.join("|"));
          } else $.fn.addCache("impt", n.s_ImportantId);
        });
      $("#win_warning")
        .find(".btn_close_black")
        .off("click")
        .on("click", function () {
          if (i != "0") {
            var t = i.split("|");
            t.push(n.s_ImportantId);
            $.fn.addCache("impt", t.join("|"));
          } else $.fn.addCache("impt", n.s_ImportantId);
          $("#win_warning").fadeOut("300", function () {
            $("#win_warning").remove();
          });
        });
    }
  } else $("#win_warning").remove();
}
function sendLogoutAPP(n) {
  typeof webkit != "undefined" &&
  window.webkit &&
  window.webkit.messageHandlers &&
  window.webkit.messageHandlers.logout
    ? window.webkit.messageHandlers.logout.postMessage(n)
    : typeof JBS != "undefined" && JBS.logout(n);
}
function layerframeAdd2() {
  fnBack("/Mobile/Aspx/M_Add2.aspx?embed=" + $.cookie("embed"));
}
function GetArrayIndex(n, t, i) {
  return n.length >= t + 1 && n[t] !== "" ? n[t] : i;
}
function fnArraySetTip(n) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  $.each(n, function (n, t) {
    t.message = t.message == null ? "" : t.message;
    t.id = t.id == null ? "" : t.id;
    t.link == null
      ? IsLoginVerifyShowPhone
        ? fnSetOnclick(
            t.id +
              ",.liveGame>div:not(.liveGame_B,.liveGame_C),.liveGame_B>div,.liveGame_C>div",
            "fnLoginExtraLayer(false)"
          )
        : IsHideUsernamePassword
        ? fnSetOnclick(
            t.id +
              ",.liveGame>div:not(.liveGame_B,.liveGame_C),.liveGame_B>div,.liveGame_C>div",
            "fnLoginExtraLayer(true)"
          )
        : fnSetOnclick(
            t.id +
              ",.liveGame>div:not(.liveGame_B,.liveGame_C),.liveGame_B>div,.liveGame_C>div",
            'javascript:open_pop({ type: 3, title: "' +
              webRes.Font_UserLogin +
              '", userPlaceholder: "' +
              webRes.Font_AccountFont +
              " / " +
              webRes.Font_add_msg44 +
              '", pwdPlaceHolder: "' +
              webRes.Font_Pwd +
              '", login: "' +
              webRes.Font_Login +
              '", register: "' +
              webRes.Font_Register +
              '" })'
          )
      : fnSetOnclick(t.id, "location.href='" + t.link + "'");
  });
}
function HideFiveLink() {
  var n = [
    { message: webRes.Font_BubbleAlert, id: "aTraderec" },
    { message: webRes.Font_BubbleAlert, id: "aMypurse" },
    { message: webRes.Font_BubbleAlert, id: "aFooterDW" },
    { message: webRes.Font_BubbleAlert, id: "aHyzx" },
    { message: webRes.Font_BubbleAlert, id: "aKu" },
    { message: webRes.Font_BubbleAlert, id: "a3DChess" },
    { message: webRes.Font_BubbleAlert, id: "aTvpd", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "smLive", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "aNbb" },
    { message: webRes.Font_BubbleAlert, id: "aHYZX" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_3d" },
    { message: webRes.Font_BubbleAlert, id: "aColor" },
    { message: webRes.Font_BubbleAlert, id: "livegamedg" },
    { message: webRes.Font_BubbleAlert, id: "livegamewm" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_ftg" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_ds", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "sportGame_nbb2" },
    { message: webRes.Font_BubbleAlert, id: "sportGame_jiuzhou" },
    { message: webRes.Font_BubbleAlert, id: "sportGame_pin" },
    { message: webRes.Font_BubbleAlert, id: "lotogame_color" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_3dfish" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_dsfish" },
    {
      message: webRes.Font_BubbleAlert,
      id: "slotGame_ksfish",
      place: IsTw ? 1 : null,
    },
    { message: webRes.Font_BubbleAlert, id: "chessgame_3D" },
    { message: webRes.Font_BubbleAlert, id: "sportGame_ob", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "livegameob", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "esport_obv1", place: 1 },
    { message: webRes.Font_BubbleAlert, id: "livegameku" },
    { message: webRes.Font_BubbleAlert, id: "slotGame_obfish" },
    { id: "aboutSponsor", link: "/Mobile/Aspx/N_SponsorRecord.aspx" },
    { id: "login", needLogin: 1 },
  ];
  IsCn &&
    (n.push({ message: webRes.Font_BubbleAlert, id: "lotogame_vr" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_cq9" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_dt" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "chessgame_ky" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "soltGame_kyfish" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_cq9fish" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "sportGame_nbb" }));
  IsTw ||
    (n.push({ message: webRes.Font_BubbleAlert, id: "livegameevo" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "livegameag" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "livegamebbin" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "livegameaes",
      place: IsCn ? 1 : 3,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "sportGame_sb" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "sportGame_ag",
      place: IsYn ? 1 : 3,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "soltGame_agfish" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "sportGame_cmd",
      place: IsCn ? 1 : 3,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "sportGame_ai" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "bbinball", place: 1 }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_pg" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ka" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "slotGame_bng",
      place: IsCn ? 1 : null,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ps", place: 1 }),
    n.push({ message: webRes.Font_BubbleAlert, id: "chessgame_lc", place: 1 }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "slotGame_ksfish",
      place: IsYn ? 1 : null,
    }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "slotGame_kafish",
      place: null,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "esport_imv1" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "esport_sbesportv1" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "soltGame_lcfish",
      place: 1,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "livegamexg" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_fc" }));
  (IsTw || IsYn) &&
    (n.push({ message: webRes.Font_BubbleAlert, id: "aColor" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "livegamesa", place: 1 }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_bng" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "sportGame_nbb" }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ftg", place: 1 }));
  IsTw &&
    (n.push({
      message: webRes.Font_BubbleAlert,
      id: "livegamehg",
      place: IsTw ? 1 : null,
    }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "lotogame_wg",
      place: IsTw ? 1 : null,
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ps", place: 1 }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ds", place: 3 }));
  IsYn &&
    (n.push({ message: webRes.Font_BubbleAlert, id: "aku" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "lotogame_color.btn_GLlotoKU",
    }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "sportGame_nbb.btn_GLsportKU",
    }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "slotGame_3d.btn_GLslot3D",
    }),
    n.push({ message: webRes.Font_BubbleAlert, id: "slotGame_ps", place: 3 }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "soltGame_AGVNFish",
      place: 3,
    }));
  IsYn ||
    (n.push({ message: webRes.Font_BubbleAlert, id: "livegameab" }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "livegameog",
      place: IsTw ? 1 : null,
    }),
    n.push({
      message: webRes.Font_BubbleAlert,
      id: "slotGame_3d.btn_GLslot3D",
    }));
  fnArraySetTip(n);
}
function ShowFiveLink(n, t) {
  $.each(n, function (i, r) {
    if (i.indexOf("_str") == -1) {
      var u = platformData[i];
      $.isEmptyObject(u) ||
        u.disabled ||
        setPlatform(
          u,
          r,
          n[i + "_str"],
          t,
          n[i + "_maintainTime"],
          n[i + "_showType"]
        );
    }
  });
}
function fnGet_layerCss(n, t, i, r) {
  t == 0
    ? fnSetHref(n, "layerCss('" + i + "', " + r + ");")
    : t == 1 && fnSetOnclick2(n, "layerCss('" + i + "', " + r + ");");
}
function fnGet_layerCss2(n, t, i) {
  t == 0
    ? fnSetHref(n, "fnGetTip2('" + i + "', '" + n + "');")
    : t == 1 && fnSetOnclick2(n, "fnGetTip2('" + i + "', '" + n + "');");
}
function fnPoints(n) {
  $.ajax({
    url: "/LoadData/Platinfo.ashx",
    data: { platinfoType: n },
    type: "get",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      n !== "" && $(".icon_inforMoney div").html(n);
    },
  });
}
function GetPdOther(n) {
  var t = n.ModelOther,
    i;
  isNE(t.s_Tvpd)
    ? ((i = 1),
      t.s_Tvpd.indexOf(webRes.Font_FreeVideoMaintain_Mobile) > 0 &&
        ((i = 0), closeMaintain("#aTvpd", !1, 0, null, 2)),
      t.s_isMajorF
        ? fnSetOnclick("aTvpd", "fnBack('/Aspx/Tvpd.aspx?mobile=1')")
        : fnSetOnclick(
            "aTvpd",
            IsYn ? t.s_Tvpd.replace(" đang", "<br/>đang") : t.s_Tvpd
          ))
    : fnSetOnclick("aTvpd", "fnBack('/Aspx/Tvpd.aspx?mobile=1')");
  fnSetOnclick("aboutSponsor", "fnBack('N_SponsorRecord.aspx')");
}
function fnComplantBox() {
  var n = $("#ddlAttitude"),
    t = $("#ddlWaiterName"),
    i = $("#txtContent"),
    u =
      fnCheckWaiterName() &&
      fnTXTEmpty(t.val(), Font_WaiterNoEmpty, t) &&
      fnTXTEmpty(n.val(), Font_AttitudeNoEmpty, n) &&
      fnTXTEmpty(i.val(), Font_ContentNoEmpty, i),
    r;
  u &&
    !flagComplantBox &&
    ((flagComplantBox = !0),
    (r = {
      ddlAttitude: n.val(),
      ddlWaiterName: t.val(),
      txtContent: encodeURIComponent(i.val()),
    }),
    loading(),
    $.ajax({
      url: "../LoadData/M_ComplantBox.ashx",
      data: r,
      type: "post",
      cache: !1,
      timeout: 15e3,
      error: function () {
        closeloading();
        flagComplantBox = !1;
      },
      success: function (n) {
        closeloading();
        flagComplantBox = !1;
        var t = n.split("$");
        t.length == 2
          ? t[0] == "ok" &&
            $.fn.msg(t[1], !1, function () {
              fnBack(MemberUrl);
            })
          : $.fn.msg(t[0]);
      },
    }));
}
function submitGame(n) {
  if (flagGame) return !1;
  flagGame = !0;
  loading();
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: 15, _type: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      closeloading();
      flagGame = !1;
      IsTest
        ? $.fn.msg(
            GetTextLanguage(
              "網路異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          )
        : $.fn.msg(
            GetTextLanguage(
              "網絡異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          );
    },
    success: function (t) {
      closeloading();
      var i = t.split("|");
      i[0] == "1"
        ? $.fn.confirm(i[1], function () {
            InsertInfo(n, 1);
          })
        : $.fn.msg(t);
      flagGame = !1;
    },
  });
}
function InsertInfo(n, t) {
  if (flagInsertInfo) return !1;
  flagInsertInfo = !0;
  loading();
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: "15", _type: n, insert: t },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      closeloading();
      flagInsertInfo = !1;
    },
    success: function (n) {
      closeloading();
      var t = n.split("|");
      t[0] == "1" ? $.fn.msg(t[1], "M_Zhzx3.aspx") : $.fn.msg(t[0]);
      flagInsertInfo = !1;
    },
  });
}
function submitGame0(n) {
  if (flagGame0) return !1;
  flagGame0 = !0;
  loading();
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      closeloading();
      flagGame0 = !1;
      IsTest
        ? $.fn.msg(
            GetTextLanguage(
              "網路異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          )
        : $.fn.msg(
            GetTextLanguage(
              "網絡異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          );
    },
    success: function (t) {
      if (
        (closeloading(),
        t.indexOf("logout|") > -1 && MapLogin[t.split("|")[1]] != "")
      ) {
        var i = MapLogin[t.split("|")[1]];
        isNativeAppNew
          ? sendLogoutAPP(i)
          : $.fn.msg(i, !1, function () {
              fnOut();
            });
      } else
        n == 17
          ? t == "ok"
            ? fnBack("M_CardReader.aspx")
            : $.fn.msg(t)
          : $.fn.msg(t);
      flagGame0 = !1;
    },
  });
}
function submitGame17() {
  var n, t, o;
  ErrorText = "";
  var e = $("#Name"),
    i = $("#Phone"),
    r = $("#ddlCity"),
    u = $("#ddlCityArea"),
    f = $("#address"),
    s = $("#zipCode"),
    h = r.val() + "-" + u.val() + "-" + $.trim(f.val()),
    c = $("#remark").val(),
    l =
      (r.val() == "" ? r : null) ||
      (u.val() == "" ? u : null) ||
      ($.trim(f.val()) == "" ? f : null),
    a = (r.val() || "") && (u.val() || "") && ($.trim(f.val()) || "");
  if (
    (ReturnTXTEmptyFalse_jh($.trim(e.val()), "姓名", e),
    ReturnTXTEmptyFalse_jh($.trim(i.val()), "手機號碼", i),
    ReturnTXTEmptyFalse_jh(a, "收貨地址", l),
    ErrorText != "")
  )
    return (
      $.fn.msg(ErrorText + webRes.Font_NotEmpty, !1, function () {
        var n = 0;
        $("input:text,select").each(function () {
          if (
            $(this).val().trim() === "" &&
            n == 0 &&
            $(this).attr("id") != "zipCode"
          ) {
            $(this).keyboard("show");
            $(this).css("border", "1px solid #4b84e0");
            var t = $(this).attr("id");
            setTimeout(function () {
              $("#" + t).css("border", "");
            }, 3e3);
            n = 1;
          }
        });
      }),
      !1
    );
  if (!checkPhoneNumber($.trim(i.val()))) {
    $("#Phone").alert(webRes.Font_sjgeyz, function () {
      setTimeout(function () {
        $("#Phone").keyboard("show");
        $("#Phone").parent().find(".Rclose").show();
        $("#Phone").blur();
      }, 10);
    });
    return;
  }
  if (!flagGame17) {
    for (
      flagGame17 = !0,
        loading(),
        n = [$.trim(e.val()), $.trim(i.val()), h, s.val(), c],
        t = 0;
      t < n.length;
      t++
    )
      n[t] = n[t].replace("|", "");
    o = { type: 17, insert: "1", strs: n.join("|") };
    $.ajax({
      url: "/LoadData/index_Game28.ashx",
      data: o,
      type: "post",
      cache: !1,
      timeout: 15e3,
      error: function () {
        closeloading();
        flagGame17 = !1;
      },
      success: function (n) {
        var t, i;
        closeloading();
        t = n.split("|");
        t[0] == "ok"
          ? $.fn.msg(t[1], "N_Hdzq.aspx")
          : t[0] == "logout"
          ? ((i = MapLogin[t[1]]),
            i == "" && (i = MapLogin[2]),
            sendLogoutAPP(i))
          : $.fn.msg(n);
        flagGame17 = !1;
      },
    });
  }
}
function fnCheckID() {
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "IdCardCheck", isIndex: "0" },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      n == "0"
        ? $.fn.msg(
            "很抱歉！您的身份证号输入错误已达3次，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！"
          )
        : n == "1"
        ? showIdCardCheck(realname)
        : n == "2"
        ? $.fn.msg("你不符合此活动资格！")
        : n == "3"
        ? $.fn.msg("请登录后进行身份验证！")
        : n == "4"
        ? $.fn.msg("您已完成身份证验证！")
        : n == "6" &&
          fnBack("M_Add2.aspx?action=1&embed=" + $.cookie("embed") + "&init=1");
    },
  });
}
function ForgotPwdSubmit() {
  var r = parseInt($.trim($("#ddlType").val())) + 1,
    n = $("#txtAccount"),
    t = $.trim(n.val()),
    i = $.trim($("#txtUser").val()),
    u = $("#hid_isVoicePass").val(),
    f = $("#hid_forgotType").val();
  if (r == 1) {
    $.fn.msg(webRes.Font_selectPass + "！");
    return;
  }
  if (isSize("#txtUser") && i == "") {
    $.fn.alert(webRes.Font_add_jh_msg10 + webRes.Font_NotEmpty);
    return;
  }
  if (t == "") {
    $.fn.alert(webRes.Font_add_msg44 + webRes.Font_NotEmpty, function () {
      n.keyboard("show");
    });
    return;
  }
  $("#hid_phone").val(t);
  $("#hid_user").val(i);
  callphotoForgot();
}
function callphotoForgot() {
  var n = parseInt($.trim($("#ddlType").val())) + 1;
  if (n == 1) {
    $.fn.msg(webRes.Font_selectPass + "！");
    return;
  }
  loading();
  $.ajax({
    url: "https://api.ku1119.com/api/register",
    type: "post",
    data: {
      type: n,
      photo: $("#hid_phone").val(),
      user: $("#hid_user").val(),
      sort1: sort1,
      reply: isContactCSFlag ? "1" : "0",
    },
    cache: !1,
    timeout: 15e3,
    error: function () {
      closeloading();
    },
    success: function (t) {
      var i, r;
      if ((closeloading(), (i = t.split("|")), i.length == 2 && i[0] == "3"))
        $.fn.alert(i[1]),
          $(".divMsg, .divMsg2").children().attr("disabled", !0),
          hideMsgBox(),
          IsYn && $(".Rclose").css("margin-right", "5%");
      else if (t == "0" || t == "1" || t == "2")
        showMsgBox(),
          (waitP2 = IsTest ? 10 : 60),
          $("#SecondSendCode").text(waitP2),
          (tioP2 = window.clearInterval(tioP2)),
          (tioP2 = window.setInterval("timeGoP2()", 1e3)),
          showMsgP2(2),
          disableForgotPwInput();
      else if (t.indexOf(webRes.Font_ReplyServicePhone) > -1)
        countReply++,
          (r = n == 2 ? 18 : n == 3 ? 17 : 19),
          fnAutoCheckReply(
            r,
            function () {
              codeForgotFlag = !0;
              $("#forgotPwdSendOut").prop("disabled", !1);
              $("#txtAccount").click();
              verifyMsgBox();
              $.fn.success(webRes.Font_VerifyOK);
            },
            $("#hid_phone").val()
          ),
          $.fn.alert(t),
          (isContactCSFlag = !0),
          countReply >= 3 &&
            ($(".divMsg #btnContactCS").prop("disabled", !0),
            $(".divMsg2 #btnContactCS").prop("disabled", !0));
      else if (t.indexOf(webRes.Font_LockedContactCS) > -1)
        $.fn.confirm(
          t,
          function () {
            close_pop();
            location.href = "/Mobile/Aspx/N_Kfzx.aspx";
          },
          function () {
            fnMain();
          },
          webRes.Font_Info,
          webRes.Font_Czzq_14,
          webRes.Font_Cancel
        );
      else if (t == "8")
        (codeForgotFlag = !0),
          $("#forgotPwdSendOut").prop("disabled", !1),
          $("#txtAccount").click(),
          verifyMsgBox(),
          $.fn.success(webRes.Font_VerifyOK);
      else if (t != "") {
        $.fn.alert(t);
        return;
      }
    },
  });
}
function callphotoForgotSubmit() {
  var t, n;
  if ((loading(), (t = parseInt($.trim($("#ddlType").val())) + 1), t == 1)) {
    $.fn.msg(webRes.Font_selectPass + "！");
    return;
  }
  if (((n = $.trim($("#txtPhoneCode").val())), n == "")) {
    parent.$.fn.alert(webRes.Font_phoneCode6);
    return;
  }
  if (!checkcode(n)) {
    parent.$.fn.alert(webRes.Font_PhoneCodeLen5);
    return;
  }
  flagCodeP2 ||
    ((flagCodeP2 = !0),
    $.ajax({
      url: "/LoadData/AddCheckNum.ashx",
      type: "post",
      data: { type: t, photocode: n, phone: $("#hid_phone").val() },
      cache: !1,
      timeout: 15e3,
      dataType: "json",
      error: function () {
        closeloading();
        submitFlag = !1;
        flagCodeP2 = !1;
      },
      success: function (n) {
        closeloading();
        flagCodeP2 = !1;
        n.state == 10
          ? ((codeForgotFlag = !0),
            $("#forgotPwdSendOut").prop("disabled", !1),
            $("#txtAccount").click(),
            verifyMsgBox(),
            $.fn.success(webRes.Font_VerifyOK))
          : ($.fn.alert(n.msg), $("#txtPhoneCode").val(""), clearMsgBox());
      },
    }));
}
function showForgotPwdStep2() {
  var n = parseInt($("#ddlType").val()) + 1;
  if (n == 1) {
    $.fn.msg(webRes.Font_selectPass + "！");
    return;
  }
  codeForgotFlag && fnForgotPwdStep.showStep(2, n);
}
function fnPwdSendOut() {
  if (!submitFlag) {
    var n = parseInt($.trim($("#ddlType").val())) + 1,
      t = $("#txtPassword"),
      r = $("#txtPassword2"),
      i = $("#txtVoicePass"),
      u = $("#txtVoicePass2"),
      f = $.trim(t.val()),
      o = $.trim(r.val()),
      e = $.trim(i.val()),
      s = $.trim(u.val());
    if (n == 1) {
      $.fn.alert(webRes.Font_selectPass + "！");
      return;
    }
    if (f == "" && (n === 2 || n === 4)) {
      t.msg(webRes.Font_ForgotPass_10);
      return;
    }
    if (f.toUpperCase() != o.toUpperCase() && (n === 2 || n === 4)) {
      t.val("").msg(webRes.Font_sStr2_PassNotRulePass);
      r.val("");
      return;
    }
    if (e == "" && (n === 3 || n === 4)) {
      i.msg(webRes.Font_ForgotPass_11_New);
      return;
    }
    if (e.toUpperCase() != s.toUpperCase() && (n === 3 || n === 4)) {
      i.val("").msg(webRes.Font_sStr2_PassNotRuleDi_New);
      u.val("");
      return;
    }
    if (!pdPass(f) && (n === 2 || n === 4)) {
      t.val("").msg(webRes.Font_sStr2_PassNotRule1);
      r.val("");
      return;
    }
    if (!pdPass(e) && (n === 3 || n === 4)) {
      i.val("").msg(webRes.Font_sStr2_PassNotRule2_New);
      u.val("");
      return;
    }
    if (f.toUpperCase() == e.toUpperCase() && n === 4) {
      t.val("").msg(webRes.Font_Hyzlxg_Pass1_New);
      r.val("");
      i.val("");
      u.val("");
      return;
    }
    submitFlag = !0;
    loading();
    $.ajax({
      url: "/LoadData/AddCheckNum.ashx",
      type: "post",
      data: {
        type: n,
        pass: f,
        pass2: o,
        vpass: e,
        vpass2: s,
        phone: $("#hid_phone").val(),
        submit: "1",
      },
      cache: !1,
      timeout: 15e3,
      dataType: "json",
      error: function (n) {
        $.ajax({
          url: "/LoadData/WriteLog.ashx",
          data: {
            type: "1",
            error: n.status,
            phone: $("#hid_phone").val(),
            pw: btoa(f),
            pw2: btoa(o),
            ppw: btoa(e),
            ppw2: btoa(s),
          },
        });
        closeloading();
        submitFlag = !1;
      },
      success: function (n) {
        if (((submitFlag = !1), closeloading(), n.state != 10)) {
          n.state == 3
            ? $.fn.alert(n.msg, function () {
                $code.parent().find(".caretMask").text("");
                $code.parent().find(".Rclose").hide();
                $code.val("");
                $code.keyboard("show");
              })
            : n.msg == webRes.Font_Hyzlxg_Pass1 ||
              n.msg == webRes.Font_SimplePass
            ? (t.val("").msg(n.msg), r.val(""), i.val(""), u.val(""))
            : n.msg == webRes.Font_Hyzlxg_Pass2_New ||
              n.msg == webRes.Font_Hyzlxg_Pass3 ||
              n.state == 7
            ? (t.val("").msg(n.msg), r.val(""))
            : n.msg == webRes.Font_Hyzlxg_Pass4_New ||
              n.msg == webRes.Font_Hyzlxg_Pass5_New ||
              n.state == 8
            ? (i.val("").msg(n.msg), u.val(""))
            : n.msg == webRes.Font_phoneCode5
            ? ($.fn.alert(n.msg), fnForgotPwdStep.showStep(1))
            : $.fn.alert(n.msg);
          return;
        }
        $.fn.alert(webRes.Font_PwdModified, function () {
          var t = window.location.href.toLowerCase(),
            n;
          t.indexOf("type=forgotvoice") > 0
            ? ((n = isNE(document.referrer) ? document.referrer : MainUrl),
              t.indexOf("hyzx=1") > -1 &&
                n.indexOf("hyzx=1") == -1 &&
                (n += n.indexOf("?") > -1 ? "&hyzx=1" : "?hyzx=1"),
              fnBack(n))
            : fnOut();
        });
      },
    });
  }
}
function disableForgotPwInput(n = true) {
  n
    ? ($("#ddlType").attr("disabled", !0),
      $("#txtUser").attr("disabled", !0),
      $("#txtAccount").attr("disabled", !0))
    : ($("#ddlType").attr("disabled", !1),
      $("#txtUser").attr("disabled", !1),
      $("#txtAccount").attr("disabled", !1));
}
function fnTabPageReset(n) {
  $("#pageindex").val(1);
  $("#pagecount").val(0);
  $(n).hide();
  $(n + " input[type='button']:first").attr("disabled", !0);
  $(n + " input[type='button']:last").removeAttr("disabled");
}
function isIndex() {
  return $(".GameList_L").size() > 0;
}
function PassengerChannel(n) {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "27", type: n },
    type: "get",
    cache: !1,
    timeout: 15e3,
    success: function (t) {
      if (t == "noLogin") $.fn.msg(webRes.Font_Platform3);
      else if (t == "ok") {
        if (n == "2") fnBack("/Mobile/Aspx/M_ComplantBox.aspx");
        else if (n == "3") {
          var i = "M_PersonalMail.aspx?action=2";
          location.search.toLowerCase().indexOf("active=1") > -1
            ? (i += "&active=1")
            : location.search.toLowerCase().indexOf("active=2") > -1
            ? (i += "&active=2")
            : location.search.toLowerCase().indexOf("back=1") > -1
            ? (i += "&back=1")
            : location.search.toLowerCase().indexOf("back=2") > -1 &&
              (i += "&back=2");
          fnBack(i);
        }
      } else $.fn.msg(t);
    },
  });
}
function layerIdCard(n) {
  layer.open({
    type: 1,
    title: webRes.Font_Info,
    content: $("#divIdCard"),
    area: ["354px", "250px"],
    shift: -1,
    shade: 0.5,
    end: function () {
      layerframeAddClose();
    },
  });
  $("#txtConfirm1").attr("placeholder", "您的真实户名为：" + n);
  fnIsIeM() || $("#txtConfirm1").focus();
}
function IsAdd2() {
  return $(".join_members").size() > 0;
}
function IsBNGlobby() {
  return $("#bnglobby,#fastTrans").size() > 0;
}
function fnTXTEmptyRange(n, t) {
  var i = [];
  return (
    $("#" + t + " option").each(function () {
      i.push($(this).val());
    }),
    $.inArray(n, i) > -1
  );
}
function checkBank() {
  setTimeout(function () {
    var n, f;
    if (typeof isChecking == "undefined" || isChecking != !0) {
      layer.closeAll();
      var r = [
          "ccb",
          "icbc",
          "abchina",
          "bankcomm",
          "cmbchina",
          "pingan",
          "boc",
          "psbc",
          "cebbank",
          "spdb",
          "hxb",
          "cgbchina",
          "ecitic",
          "cib",
          "cmbc",
          "bob",
          "bos",
          "hfb",
          "cbhb",
          "gzcb",
          "czcb",
        ],
        t,
        i =
          '<div class="RMBbank" id="RMBbank"><div class="RMBbank_scroll">{0}</div></div>',
        u = "";
      $.each(r, function (n) {
        t = n % 2 == 0 ? "w50L" : "w50R";
        u += '<div class="' + t + " RMBbank_list " + r[n] + ' "></div>';
      });
      i = i.replace("{0}", u);
      open_pop({
        type: 1,
        title:
          '支持的银行<br/><span class="yellow">(仅接受"62"开头之卡号)</span>',
        content: i,
        oktext: "确认",
        autoclose: !1,
        closeback: function () {
          n && window.clearInterval(n);
          IsTest &&
            (close_pop(),
            $("#btn_bankID").keyboard("show"),
            $("#txtBankCard").keyboard("show"),
            $("#txtRemittanceCard").keyboard("show"),
            $("#btn_bankID,#txtBankCard").val(""));
        },
        callback: function () {
          n && window.clearInterval(n);
          close_pop();
          $("#btn_bankID").keyboard("show");
          $("#txtBankCard").keyboard("show");
          $("#txtRemittanceCard").keyboard("show");
          $("#btn_bankID,#txtBankCard").val("");
        },
      });
      $(".deposit_submit_text").css("margin", "2px 0px 0px 0px");
      $(".popup_T").addClass("popup_Bank");
      $("#btn_ok").remove();
      f = new iScroll("RMBbank", {
        click: !0,
        scrollbarClass: "myScrollbar",
        bounce: !1,
      });
      n = setInterval(function () {
        f.refresh();
      }, 1e3);
    }
  }, 500);
}
function checkRegisterOpen() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "36" },
    type: "get",
    cache: !1,
    timeout: 15e3,
    success: function (n) {
      if (n == "False")
        $.fn.alert(webRes.Font_RegisterCloseMsg, function () {
          fnMain();
        });
      else {
        var t = "/Mobile/Aspx/N_Add1.aspx";
        window.location.search.indexOf("ref") > -1 &&
          (t = t.concat("?ref=", window.location.search.substring(5)));
        fnBack(t);
      }
    },
  });
}
function checkFunction(n) {
  checkFunctionFlag ||
    ((checkFunctionFlag = !0),
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      data: { checkType: "12" },
      type: "get",
      dataType: "json",
      cache: !1,
      timeout: 15e3,
      success: function (t) {
        n === "D"
          ? setDeposit(t.f_data3)
          : n === "W"
          ? setWithdraw(t.f_data3)
          : n === "M" && setMember(t.f_data3);
        checkFunctionFlag = !1;
      },
    }));
}
function setDeposit(n) {
  n.s_isRegistered &&
  (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1))
    ? layerframeAdd2()
    : n.s_f_ishow === 3
    ? $(".footer_DW_open").hasClass("on") &&
      fnTipCss("#aKscz", webRes.Font_RegisterOK4, 3, 1, "46%")
    : n.f_isUpload
    ? $(".footer_DW_open").hasClass("on") &&
      fnTipCss("#aKscz", webRes.Font_UploadIdCard_DepositMsg, 3, 1, "46%")
    : $(".footer_DW_open").hasClass("on") &&
      fnTipCss("#aKscz", webRes.Font_DepositNotOpen, 3, 1, "46%");
}
function setWithdraw(n) {
  n.s_isRegistered &&
  (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1)) &&
  IsYn
    ? layerframeAdd2()
    : fnBack("/Mobile/Aspx/M_WithDraw_" + webRes.Font_Lan + ".aspx");
}
function setMember(n) {
  n.s_isRegistered &&
  (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1)) &&
  IsYn
    ? layerframeAdd2()
    : fnBack("/Mobile/Aspx/M_ChgData.aspx");
}
function openIM() {
  openIMFlag ||
    ((openIMFlag = !0),
    $.ajax({
      url: "/LoadData/InstantMessaging.ashx",
      type: "get",
      cache: !1,
      timeout: 15e3,
      success: function (n) {
        var t, i, r;
        if (((n = JSON.parse(n)), isNE(n) && isNE(n.code)))
          if (n.code == "0")
            if (
              ((fastIM = !1),
              (autourlIM = n.url.split("|")),
              (responseIM = n.msg),
              autourlIM.length < 2)
            )
              redirectIM(0);
            else
              for (
                $("body").append("<div id=imgIM></div>"), t = 0;
                t < autourlIM.length;
                t++
              )
                $("#imgIM").append("<div></div>"),
                  (i = autourlIM[t] + "/s/100kb?sjs=" + Math.random()),
                  (r =
                    "<img src=" +
                    i +
                    "  width=1 height=1 onLoad=redirectIM(" +
                    t +
                    ") style='display:none'>"),
                  $("#imgIM>div").eq(t).html(r);
          else
            n.code == "1"
              ? fnTipCss("#ktalk2", n.msg, 3, 1)
              : n.code == "2" && layerframeAdd2();
        openIMFlag = !1;
      },
    }));
}
function redirectIM(n) {
  fastIM ||
    ((fastIM = !0),
    (urlIM = autourlIM[n] + responseIM),
    typeof JBS != "undefined"
      ? JBS.openKuIm()
      : typeof webkit != "undefined" &&
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.openKuIm
      ? window.webkit.messageHandlers.openKuIm.postMessage(null)
      : openKuImWindow(!1));
}
function openNewKuIm() {
  openKuImWindow(!0);
}
function openKuImWindow(n) {
  n
    ? window.open(
        "/game/IMIndex.aspx?u=" + encodeURIComponent(urlIM),
        "IMWindow"
      )
    : fnBack(urlIM);
}
function OpenUploadIC() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "55" },
    timeout: 15e3,
    success: function (n) {
      IsTw ? showUploadImg(n == "1") : IsYn && showUploadImgYn(n == "1");
      $("#aFooterDW").hasClass("active") &&
        $(".footer_DW_open").hasClass("on") &&
        $("#aFooterDW").click();
    },
  });
}
function showUploadImg(n = false) {
  var u =
      "<div class='initContent' id='initContent'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\" style='margin-left:2px'>" +
      webRes.Font_UploadIdCard_Card +
      "（ " +
      webRes.Font_UploadIdCard_Front +
      ' ）</div><a class="btnUpload">' +
      webRes.Font_Moneychange_uploadMsg +
      "</a></a ></div></div>",
    f =
      "<div class='initContent cameraOnly' id='initContent'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\" style='margin-left:2px'>" +
      webRes.Font_UploadIdCard_Card +
      "（ " +
      webRes.Font_UploadIdCard_Front +
      " ）</div><a class='btnUpload camera_w'>" +
      webRes.Font_CapturePhoto +
      "</a></a></div></div>",
    e =
      "<div class='initContent' id='selectContent' style='display:none'><div class='upimgBox_Mobile'><a class='camera'>" +
      webRes.Font_CapturePhoto +
      "</a><a class='gallery'>" +
      webRes.Font_CameraAlbum +
      "</a></div><div class='inputDnD'><input class='form-control-file' type='file' id='fileUpload' onchange='readUrl()' accept='image/*' capture='camera'/><input class='form-control-file' type='file' id='fileUpload2' onchange='readUrl2()' accept='image/png,image/jpeg,image/jpg'/></div></div>",
    t =
      "<div class='uploadingContent' id='uploadingContent'><div class='textB'>" +
      webRes.Font_Uploading +
      "</div><div class='w3-border progressBox'><div class='w3-grey progressBar' style='width: 70%;'></div></div></div>",
    i =
      "<div class='resultContent' id='imgContent'><div class='uploadImgDiv'><img class='resultImg' id='resultImg' src=''/><canvas id='canvas' height=1000px width=1000px style='max-width:1000px;max-height:1000px;display:none'></canvas></div><a class=\"btnUpload innerBtn " +
      (n ? "" : "camera_w") +
      "\" id='btnUpload'>" +
      (n ? webRes.Font_Moneychange_uploadMsg : webRes.Font_CapturePhoto) +
      "</a></div>",
    r = "";
  if (
    ((r = n
      ? "<div class='uploadCardTitle'>" +
        webRes.Font_UploadIdCardTitle +
        "</div><div class='border' style='border:1px solid #747474;height:180px;border-radius:10px;margin-top:15px;'>" +
        u +
        e +
        t +
        i +
        "</div>"
      : "<div class='uploadCardTitle'>" +
        webRes.Font_UploadIdCardTitle2 +
        "</div><div class='border' style='border:1px solid #747474;height:180px;border-radius:10px;margin-top:15px;'><div style='position:relative;height:100%;float:left;'><input class='form-control-file cameraOnly' type='file' id='fileUpload' onchange='readUrl()' accept='image/*' capture='camera'/></div>" +
        f +
        t +
        i +
        "</div>"),
    $.fn.confirm(
      "<div class='uploadDialog'>" +
        r +
        "<div class='textError'>檔案不得大於10MB</div></div>",
      function () {},
      "",
      webRes.Font_Info,
      webRes.Font_Moneychange_confirmMsg,
      webRes.Font_Cancel,
      "uploadIC"
    ),
    $(".layui-layer-btn1").addClass("blue").css("padding", "12px 0px"),
    $(".layui-layer-btn1").attr("disabled", "disabled"),
    $(".layui-layer-btn0,.layui-layer-btn1.blue")
      .unbind("click")
      .css("padding", "12px 0px"),
    n)
  ) {
    $("#initContent").bind("click", function () {
      $(this).hide();
      $("#selectContent").show();
    });
    $(".btnUpload").on("click", function () {
      $(".border").css("border", "1px solid #747474");
      $(".textError").css("display", "none");
    });
    $("#btnUpload").bind("click", function () {
      $("#imgContent").hide();
      $("#selectContent").show();
      $(".layui-layer-btn1").attr("disabled", "disabled");
    });
  }
  $(".layui-layer-btn0").bind("click", function () {
    IsAdd2
      ? $.cookie("embed") && $.cookie("embed") == "true"
        ? window.setTimeout(function () {
            window.location.href = $.cookie("CookieBackApp");
          }, 10)
        : gameLobby != ""
        ? fnBackPage()
        : fnMain()
      : layer.closeAll();
  });
  $(".icon_close_upload").bind("click", function () {
    IsAdd2
      ? $.cookie("embed") && $.cookie("embed") == "true"
        ? window.setTimeout(function () {
            window.location.href = $.cookie("CookieBackApp");
          }, 10)
        : gameLobby != ""
        ? fnBackPage()
        : fnMain()
      : layer.closeAll();
  });
  $(".layui-layer-btn1").bind("click", function () {
    var t = $("#resultImg").attr("src"),
      n;
    $("#imgContent").css("display", "none");
    $("#uploadingContent").css("display", "block");
    $(".resultContent").css("display", "none");
    $(".uploadingContent").css("display", "block");
    $(".layui-layer-btn1").attr("disabled", "disabled");
    n = {
      base64_1: t,
      base64_2: "",
      type: "submit",
      photoType1: photoType,
      photoType2: "",
    };
    $.ajax({
      url: "../../Aspx/UploadIC.aspx",
      data: n,
      type: "post",
      cache: !1,
      error: function (t) {
        t.status == "999"
          ? $.ajax({
              url: "../../Aspx/UploadIC.aspx",
              data: {
                type: "sendError",
                fileSize: fileSize1 + fileSize2,
                size:
                  new TextEncoder().encode(JSON.stringify(n)).length / 1e6 +
                  " M",
              },
              type: "post",
              cache: !1,
              error: function () {
                $.fn.alert(
                  "<div style='text-align:center'>" +
                    webRes.Font_UploadFail +
                    "</div>",
                  function () {
                    OpenUploadIC();
                  }
                );
              },
              success: function () {
                $.fn.alert(
                  "<div style='text-align:center'>" +
                    webRes.Font_UploadFail +
                    "</div>",
                  function () {
                    OpenUploadIC();
                  }
                );
              },
            })
          : $.fn.alert(
              "<div style='text-align:center'>" +
                webRes.Font_UploadFail +
                "</div>",
              function () {
                OpenUploadIC();
              }
            );
      },
      success: function (n) {
        if (n.StatusCode == "200") {
          var t = IsTw
            ? "<div style='text-align:center'>"
            : "<div style='text-align:left'>";
          $.fn.alert(
            t + webRes.Font_UploadIdCard_Success + "</div>",
            function () {
              IsAdd2
                ? $.cookie("embed") && $.cookie("embed") == "true"
                  ? window.setTimeout(function () {
                      window.location.href = $.cookie("CookieBackApp");
                    }, 10)
                  : gameLobby != ""
                  ? fnBackPage()
                  : fnMain()
                : (layer.closeAll(), location.reload());
            }
          );
        } else
          $.fn.alert(
            "<div style='text-align:center'>" +
              webRes.Font_UploadFail +
              "</div>",
            function () {
              OpenUploadIC();
            }
          );
      },
    });
  });
}
function showUploadImgYn(n = false) {
  var e =
      "<div class='initContent' id='initContent'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\">" +
      webRes.Font_UploadIdCard_Card +
      " ( " +
      webRes.Font_UploadIdCard_Front +
      ' )</div><a class="btnUpload btn1">' +
      webRes.Font_Moneychange_uploadMsg +
      "</a></a ></div></div>",
    o =
      "<div class='initContent cameraOnly' id='initContent'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\">" +
      webRes.Font_UploadIdCard_Card +
      "（ " +
      webRes.Font_UploadIdCard_Front +
      " ）</div><a class='btnUpload camera_w'>" +
      webRes.Font_CapturePhoto +
      "</a></a></div></div>",
    s =
      "<div class='initContent' id='selectContent' style='display:none'><div class='upimgBox_Mobile'><a class='camera'>" +
      webRes.Font_CapturePhoto +
      "</a><a class='gallery'>Thư viện ảnh</a></div><div class='inputDnD'><input class='form-control-file' type='file' id='fileUpload' onchange='readUrl()' accept='image/*' capture='camera'/><input class='form-control-file' type='file' id='fileUpload2' onchange='readUrl2()' accept='image/png,image/jpeg,image/jpg'/></div></div>",
    i =
      "<div class='uploadingContent' id='uploadingContent'><div class='textB'>" +
      webRes.Font_Uploading +
      "</div><div class='w3-border progressBox'><div class='w3-grey progressBar' style='width: 70%;'></div></div></div>",
    r =
      "<div class='resultContent' id='imgContent'><div class='uploadImgDiv' style='display:flex;'><img class='resultImg' id='resultImg' src=''/><canvas id='canvas' height=1000px width=1000px style='max-width:1000px;max-height:1000px;display:none'></canvas></div><a class=\"btnUpload " +
      (n ? "" : "camera_w") +
      "\" id='btnUpload' style='bottom:unset;'>" +
      (n ? webRes.Font_Moneychange_uploadMsg : webRes.Font_CapturePhoto) +
      "</a></div>",
    h =
      "<div class='initContent' id='initContent2'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\">" +
      webRes.Font_UploadIdCard_Card +
      " ( " +
      webRes.Font_UploadIdCard_Back +
      ' )</div><a class="btnUpload btn2">' +
      webRes.Font_Moneychange_uploadMsg +
      "</a></a ></div></div>",
    c =
      "<div class='initContent cameraOnly' id='initContent2'><div class='dragImageDiv'><a class=\"imageUp\"><div class=\"drag_image\">" +
      webRes.Font_UploadIdCard_Card +
      "（ " +
      webRes.Font_UploadIdCard_Back +
      " ）</div><a class='btnUpload camera_w btn2'>" +
      webRes.Font_CapturePhoto +
      "</a></a></div></div>",
    l =
      "<div class='initContent' id='selectContent2' style='display:none'><div class='upimgBox_Mobile'><a class='camera'>" +
      webRes.Font_CapturePhoto +
      "</a><a class='gallery'>Thư viện ảnh</a></div><div class='inputDnD'><input class='form-control-file' type='file' id='fileUpload3' onchange='readUrl3()' accept='image/*' capture='camera'/><input class='form-control-file' type='file' id='fileUpload4' onchange='readUrl4()' accept='image/png,image/jpeg,image/jpg'/></div></div>",
    u =
      "<div class='uploadingContent' id='uploadingContent2'><div class='textB'>" +
      webRes.Font_Uploading +
      "</div><div class='w3-border progressBox'><div class='w3-grey progressBar' style='width: 70%;'></div></div></div>",
    f =
      "<div class='resultContent' id='imgContent2'><div class='uploadImgDiv' style='display:flex;'><img class='resultImg' id='resultImg2' src=''/><canvas id='canvas2' height=1000px width=1000px style='max-width:1000px;max-height:1000px;display:none'></canvas></div><a class=\"btnUpload " +
      (n ? "" : "camera_w") +
      "\" id='btnUpload2' style='bottom:unset;'>" +
      (n ? webRes.Font_Moneychange_uploadMsg : webRes.Font_CapturePhoto) +
      "</a></div>",
    t = "";
  if (
    (n
      ? ((t =
          "<div style='font-size:16px;text-align:center'></div><div class='uploadDiv one'>" +
          e +
          s +
          i +
          r +
          "</div>"),
        IsYn && (t += "<div class='uploadDiv two'>" + h + l + u + f + "</div>"))
      : ((t =
          "<div style='font-size:16px;text-align:center'></div><div class='uploadDiv one'><input class='form-control-file cameraOnly' type='file' id='fileUpload' onchange='readUrl()' accept='image/*' capture='camera'/>" +
          o +
          i +
          r +
          "</div>"),
        IsYn &&
          (t +=
            "<div class='uploadDiv two'><input class='form-control-file cameraOnly' type='file' id='fileUpload3' onchange='readUrl3()' accept='image/*' capture='camera'/>" +
            c +
            u +
            f +
            "</div>")),
    $.fn.confirm(
      "<div>" +
        t +
        "<div class='textError'>Tệp ảnh không thể lớn hơn 10MB</div></div>",
      function () {},
      "",
      "<div class='uploadTitle'>" + webRes.Font_Info + "</div>",
      webRes.Font_Moneychange_confirmMsg,
      null,
      "uploadImage"
    ),
    $(".layui-layer-shade").unbind("touchmove"),
    $(".layui-layer-btn1").addClass("blue").css("padding", "8px 0px"),
    $(".layui-layer-btn1").attr("disabled", "disabled"),
    $(".layui-layer-btn0,.layui-layer-btn1.blue")
      .unbind("click")
      .css("padding", "8px 0px"),
    $(".layui-layer-shade")
      .css("-webkit-overflow-scrolling", "initial")
      .css("overflow", "hidden"),
    n)
  ) {
    $("#initContent").bind("click", function () {
      $(this).hide();
      $("#selectContent").show();
    });
    $("#initContent2").bind("click", function () {
      $(this).hide();
      $("#selectContent2").show();
    });
    $(".btn1").on("click", function () {
      $(".one").removeClass("borderYN");
      $(".textError").css(
        "display",
        $(".two").hasClass("borderYN") ? "block" : "none"
      );
    });
    $(".btn2").on("click", function () {
      $(".two").removeClass("borderYN");
      $(".textError").css(
        "display",
        $(".one").hasClass("borderYN") ? "block" : "none"
      );
    });
    $("#btnUpload").bind("click", function () {
      picIsUploaded1 = !1;
      $("#imgContent").hide();
      $("#selectContent").show();
      $(".layui-layer-btn1").addClass("blue");
      $(".layui-layer-btn1").attr("disabled", "disabled");
    });
    $("#btnUpload2").bind("click", function () {
      picIsUploaded2 = !1;
      $("#imgContent2").hide();
      $("#selectContent2").show();
      $(".layui-layer-btn1").addClass("blue");
      $(".layui-layer-btn1").attr("disabled", "disabled");
    });
  }
  $(".layui-layer-btn0").bind("click", function () {
    IsAdd2
      ? $.cookie("embed") && $.cookie("embed") == "true"
        ? window.setTimeout(function () {
            window.location.href = $.cookie("CookieBackApp");
          }, 10)
        : gameLobby != ""
        ? fnBackPage()
        : fnMain()
      : layer.closeAll();
  });
  $(".icon_close_upload").bind("click", function () {
    IsAdd2
      ? $.cookie("embed") && $.cookie("embed") == "true"
        ? window.setTimeout(function () {
            window.location.href = $.cookie("CookieBackApp");
          }, 10)
        : gameLobby != ""
        ? fnBackPage()
        : fnMain()
      : layer.closeAll();
  });
  $(".layui-layer-btn1").bind("click", function () {
    var t = $("#resultImg").attr("src"),
      i = $("#resultImg2").attr("src"),
      n;
    t &&
      ($("#imgContent").css("display", "none"),
      $("#uploadingContent").css("display", "block"));
    i &&
      ($("#imgContent2").css("display", "none"),
      $("#uploadingContent2").css("display", "block"));
    $(".resultContent").css("display", "none");
    $(".uploadingContent").css("display", "block");
    $(".layui-layer-btn1").attr("disabled", "disabled");
    n = {
      base64_1: t,
      base64_2: i,
      type: "submit",
      photoType1: photoType,
      photoType2: photoType2,
    };
    $.ajax({
      url: "../../Aspx/UploadIC.aspx",
      data: n,
      type: "post",
      cache: !1,
      error: function (t) {
        t.status == "999"
          ? $.ajax({
              url: "../../Aspx/UploadIC.aspx",
              data: {
                type: "sendError",
                fileSize: fileSize1 + fileSize2,
                size:
                  new TextEncoder().encode(JSON.stringify(n)).length / 1e6 +
                  " M",
              },
              type: "post",
              cache: !1,
              error: function () {
                $.fn.alert(
                  "<div style='text-align:center'>" +
                    webRes.Font_UploadFail +
                    "</div>",
                  function () {
                    OpenUploadIC();
                  }
                );
              },
              success: function () {
                $.fn.alert(
                  "<div style='text-align:center'>" +
                    webRes.Font_UploadFail +
                    "</div>",
                  function () {
                    OpenUploadIC();
                  }
                );
              },
            })
          : $.fn.alert(
              "<div style='text-align:center'>" +
                webRes.Font_UploadFail +
                "</div>",
              function () {
                OpenUploadIC();
              }
            );
      },
      success: function (n) {
        n.StatusCode == "200"
          ? $.fn.alert(
              "<div style='text-align:center'>" +
                webRes.Font_UploadIdCard_Success +
                "</div>",
              function () {
                IsAdd2
                  ? $.cookie("embed") && $.cookie("embed") == "true"
                    ? window.setTimeout(function () {
                        window.location.href = $.cookie("CookieBackApp");
                      }, 10)
                    : gameLobby != ""
                    ? fnBackPage()
                    : fnMain()
                  : (layer.closeAll(), location.reload());
              }
            )
          : n.StatusDescription != ""
          ? $.fn.alert(
              "<div style='text-align:center'>" +
                n.StatusDescription +
                "</div>",
              function () {
                fnBackPage();
              }
            )
          : $.fn.alert(
              "<div style='text-align:center'>" +
                webRes.Font_UploadFail +
                "</div>",
              function () {
                OpenUploadIC();
              }
            );
      },
    });
  });
}
function uploadImg() {
  $(".uploadInputBox").hide();
  var n = $("#resultImg").attr("src"),
    t = $("#resultImg2").attr("src");
  n &&
    ($("#imgContent").css("display", "none"),
    $("#uploadingContent").css("display", "block"));
  t &&
    ($("#imgContent2").css("display", "none"),
    $("#uploadingContent2").css("display", "block"));
  $.ajax({
    url: "../Aspx/UploadIC.aspx",
    data: {
      base64_1: n,
      base64_2: t,
      type: "submit",
      photoType1: photoType,
      photoType2: photoType2,
    },
    type: "post",
    cache: !1,
    error: function (n) {
      n.status == "999"
        ? $.ajax({
            url: "../../Aspx/UploadIC.aspx",
            data: { type: "sendError", fileSize: fileSize1 + fileSize2 },
            type: "post",
            cache: !1,
            error: function () {
              $.fn.alert(
                "<div style='text-align:center'>" +
                  webRes.Font_UploadFail +
                  "</div>",
                function () {
                  location.reload();
                }
              );
            },
            success: function () {
              $.fn.alert(
                "<div style='text-align:center'>" +
                  webRes.Font_UploadFail +
                  "</div>",
                function () {
                  location.reload();
                }
              );
            },
          })
        : $.fn.alert(
            "<div style='text-align:center'>" +
              webRes.Font_UploadFail +
              "</div>",
            function () {
              location.reload();
            }
          );
    },
    success: function (n) {
      n.StatusCode == "200"
        ? $.fn.alert(
            "<div style='text-align:center'>" +
              webRes.Font_UploadIdCard_Success +
              "</div>",
            function () {
              layerframeAddClose();
            }
          )
        : $.fn.alert(
            "<div style='text-align:center'>" +
              webRes.Font_UploadFail +
              "</div>",
            function () {
              location.reload();
            }
          );
      return;
    },
  });
}
function readUrl() {
  var n = new Image(),
    t = document.getElementById("fileUpload").files[0],
    r = new FileReader(),
    i;
  if (
    t != null &&
    (t.name.toLowerCase().split(".").pop() == "jpg" ||
      t.name.toLowerCase().split(".").pop() == "png" ||
      t.name.toLowerCase().split(".").pop() == "jpeg")
  ) {
    if (
      ($("#initContent").css("display", "none"),
      $("#selectContent").css("display", "none"),
      $("#imgContent").css("display", "none"),
      $("#uploadingContent").css("display", "block"),
      (photoType = 1),
      (fileSize1 = t.size / 1e6),
      fileSize1 > 10)
    ) {
      $("#fileUpload")[0].value = "";
      $("#resultImg").attr("src", "");
      $("#initContent").css("display", "block");
      $("#uploadingContent").css("display", "none");
      $(".textError").css("display", "block");
      IsYn
        ? $(".one").addClass("borderYN")
        : $(".border").css("border", "1px solid rgb(255 0 0)");
      return;
    }
    fileSize1 > 5 && (photoType = 2);
    i = Math.round(((IsYn ? 2.1 : 4.2) / fileSize1) * 100) / 100;
    i > 0.9 && (i = 0.9);
    r.addEventListener(
      "load",
      function () {
        n.src = r.result;
        n.onload = function () {
          var t = new Image();
          t.src = r.result;
          t.onload = function () {
            EXIF.getData(t, function () {
              var u = document.getElementById("canvas"),
                f = u.getContext("2d"),
                r = document.createElement("canvas"),
                e = r.getContext("2d"),
                s,
                o;
              r.width = t.width;
              r.height = t.height;
              s = EXIF.getTag(this, "Orientation");
              switch (s) {
                case 3:
                  r.width > r.height
                    ? ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(-1, 0, 0, -1, u.width, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 6:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, 1, -1, 0, u.width, 0),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 8:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, -1, 1, 0, 0, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                default:
                  u.width = r.width;
                  u.height = r.height;
                  e.drawImage(n, 0, 0, r.width, r.height);
                  f.drawImage(
                    r,
                    0,
                    0,
                    r.width,
                    r.height,
                    0,
                    0,
                    u.width,
                    u.height
                  );
              }
              o = null;
              do
                (o = u.toDataURL("image/jpeg", i)),
                  (i = Math.round((i / 1.5) * 100) / 100);
              while (o.length / 1e6 > 2.1 && i > 0.01);
              $("#resultImg").attr("src", o);
              $("#uploadingContent").css("display", "none");
              $("#imgContent").css("display", "block");
              $("#imgContent .drag_image")
                .css("padding-top", "0px")
                .css("height", "59%")
                .css("display", "flex")
                .css("background", "none")
                .css("margin-top", "20px");
              IsYn
                ? ((picIsUploaded1 = !0),
                  picIsUploaded1 &&
                    picIsUploaded2 &&
                    $(".layui-layer-btn1").removeAttr("disabled"))
                : $(".layui-layer-btn1").removeAttr("disabled");
            });
          };
        };
      },
      !1
    );
    $("#fileUpload")[0].value = "";
    t && r.readAsDataURL(t);
  }
}
function readUrl2() {
  var n = new Image(),
    t = document.getElementById("fileUpload2").files[0],
    r = new FileReader(),
    i;
  if (
    t != null &&
    (t.name.toLowerCase().split(".").pop() == "jpg" ||
      t.name.toLowerCase().split(".").pop() == "png" ||
      t.name.toLowerCase().split(".").pop() == "jpeg")
  ) {
    if (
      ($("#selectContent").css("display", "none"),
      $("#imgContent").css("display", "none"),
      $("#uploadingContent").css("display", "block"),
      (photoType = 1),
      (fileSize1 = t.size / 1e6),
      fileSize1 > 10)
    ) {
      $("#fileUpload2")[0].value = "";
      $("#resultImg").attr("src", "");
      $("#initContent").css("display", "block");
      $("#uploadingContent").css("display", "none");
      $(".textError").css("display", "block");
      IsYn
        ? $(".one").addClass("borderYN")
        : $(".border").css("border", "1px solid rgb(255 0 0)");
      return;
    }
    fileSize1 > 5 && (photoType = 2);
    i = Math.round(((IsYn ? 2.1 : 4.2) / fileSize1) * 100) / 100;
    i > 0.9 && (i = 0.9);
    r.addEventListener(
      "load",
      function () {
        n.src = r.result;
        n.onload = function () {
          var t = new Image();
          t.src = r.result;
          t.onload = function () {
            EXIF.getData(t, function () {
              var u = document.getElementById("canvas"),
                f = u.getContext("2d"),
                r = document.createElement("canvas"),
                e = r.getContext("2d"),
                s,
                o;
              r.width = t.width;
              r.height = t.height;
              s = EXIF.getTag(this, "Orientation");
              switch (s) {
                case 3:
                  r.width > r.height
                    ? ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(-1, 0, 0, -1, u.width, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 6:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, 1, -1, 0, u.width, 0),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 8:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, -1, 1, 0, 0, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                default:
                  u.width = r.width;
                  u.height = r.height;
                  e.drawImage(n, 0, 0, r.width, r.height);
                  f.drawImage(
                    r,
                    0,
                    0,
                    r.width,
                    r.height,
                    0,
                    0,
                    u.width,
                    u.height
                  );
              }
              o = null;
              do
                (o = u.toDataURL("image/jpeg", i)),
                  (i = Math.round((i / 1.5) * 100) / 100);
              while (o.length / 1e6 > 2.1 && i > 0.01);
              $("#resultImg").attr("src", o);
              $("#uploadingContent").css("display", "none");
              $("#imgContent").css("display", "block");
              $("#imgContent .drag_image")
                .css("padding-top", "0px")
                .css("height", "59%")
                .css("display", "flex")
                .css("background", "none")
                .css("margin-top", "20px");
              IsYn
                ? ((picIsUploaded1 = !0),
                  picIsUploaded1 &&
                    picIsUploaded2 &&
                    $(".layui-layer-btn1").removeAttr("disabled"))
                : $(".layui-layer-btn1").removeAttr("disabled");
            });
          };
        };
      },
      !1
    );
    $("#fileUpload2")[0].value = "";
    t && r.readAsDataURL(t);
  }
}
function readUrl3() {
  var n = new Image(),
    t = document.getElementById("fileUpload3").files[0],
    r = new FileReader(),
    i;
  if (
    t != null &&
    (t.name.toLowerCase().split(".").pop() == "jpg" ||
      t.name.toLowerCase().split(".").pop() == "png" ||
      t.name.toLowerCase().split(".").pop() == "jpeg")
  ) {
    if (
      ($("#initContent2").css("display", "none"),
      $("#selectContent2").css("display", "none"),
      $("#imgContent2").css("display", "none"),
      $("#uploadingContent2").css("display", "block"),
      (photoType2 = 1),
      (fileSize2 = t.size / 1e6),
      fileSize2 > 10)
    ) {
      $("#fileUpload3")[0].value = "";
      $("#resultImg2").attr("src", "");
      $("#initContent2").css("display", "block");
      $("#uploadingContent2").css("display", "none");
      $(".textError").css("display", "block");
      IsYn
        ? $(".two").addClass("borderYN")
        : $(".border").css("border", "1px solid rgb(255 0 0)");
      return;
    }
    fileSize2 > 5 && (photoType2 = 2);
    i = Math.round(((IsYn ? 2.1 : 4.2) / fileSize2) * 100) / 100;
    i > 0.9 && (i = 0.9);
    r.addEventListener(
      "load",
      function () {
        n.src = r.result;
        n.onload = function () {
          var t = new Image();
          t.src = r.result;
          t.onload = function () {
            EXIF.getData(t, function () {
              var u = document.getElementById("canvas2"),
                f = u.getContext("2d"),
                r = document.createElement("canvas"),
                e = r.getContext("2d"),
                s,
                o;
              r.width = t.width;
              r.height = t.height;
              s = EXIF.getTag(this, "Orientation");
              switch (s) {
                case 3:
                  r.width > r.height
                    ? ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(-1, 0, 0, -1, u.width, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 6:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, 1, -1, 0, u.width, 0),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 8:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, -1, 1, 0, 0, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                default:
                  u.width = r.width;
                  u.height = r.height;
                  e.drawImage(n, 0, 0, r.width, r.height);
                  f.drawImage(
                    r,
                    0,
                    0,
                    r.width,
                    r.height,
                    0,
                    0,
                    u.width,
                    u.height
                  );
              }
              o = null;
              do
                (o = u.toDataURL("image/jpeg", i)),
                  (i = Math.round((i / 1.5) * 100) / 100);
              while (o.length / 1e6 > 2.1 && i > 0.01);
              $("#resultImg2").attr("src", o);
              $("#uploadingContent2").css("display", "none");
              $("#imgContent2").css("display", "block");
              $("#imgContent2 .drag_image")
                .css("padding-top", "0px")
                .css("height", "59%")
                .css("display", "flex")
                .css("background", "none")
                .css("margin-top", "20px");
              IsYn
                ? ((picIsUploaded2 = !0),
                  picIsUploaded1 &&
                    picIsUploaded2 &&
                    $(".layui-layer-btn1").removeAttr("disabled"))
                : $(".layui-layer-btn1").removeAttr("disabled");
            });
          };
        };
      },
      !1
    );
    $("#fileUpload3")[0].value = "";
    t && r.readAsDataURL(t);
  }
}
function readUrl4() {
  var n = new Image(),
    t = document.getElementById("fileUpload4").files[0],
    r = new FileReader(),
    i;
  if (
    t != null &&
    (t.name.toLowerCase().split(".").pop() == "jpg" ||
      t.name.toLowerCase().split(".").pop() == "png" ||
      t.name.toLowerCase().split(".").pop() == "jpeg")
  ) {
    if (
      ($("#selectContent2").css("display", "none"),
      $("#imgContent2").css("display", "none"),
      $("#uploadingContent2").css("display", "block"),
      (photoType2 = 1),
      (fileSize = t.size / 1e6),
      fileSize2 > 10)
    ) {
      $("#fileUpload4")[0].value = "";
      $("#resultImg2").attr("src", "");
      $("#initContent2").css("display", "block");
      $("#uploadingContent2").css("display", "none");
      $(".textError").css("display", "block");
      IsYn
        ? $(".two").addClass("borderYN")
        : $(".border").css("border", "1px solid rgb(255 0 0)");
      return;
    }
    fileSize2 > 5 && (photoType2 = 2);
    i = Math.round(((IsYn ? 2.1 : 4.2) / fileSize2) * 100) / 100;
    i > 0.9 && (i = 0.9);
    r.addEventListener(
      "load",
      function () {
        n.src = r.result;
        n.onload = function () {
          var t = new Image();
          t.src = r.result;
          t.onload = function () {
            EXIF.getData(t, function () {
              var u = document.getElementById("canvas2"),
                f = u.getContext("2d"),
                r = document.createElement("canvas"),
                e = r.getContext("2d"),
                s,
                o;
              r.width = t.width;
              r.height = t.height;
              s = EXIF.getTag(this, "Orientation");
              switch (s) {
                case 3:
                  r.width > r.height
                    ? ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(-1, 0, 0, -1, u.width, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 6:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, 1, -1, 0, u.width, 0),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                case 8:
                  r.width > r.height
                    ? ((u.width = r.height),
                      (u.height = r.width),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.transform(0, -1, 1, 0, 0, u.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.height,
                        u.width
                      ))
                    : ((u.width = r.width),
                      (u.height = r.height),
                      e.drawImage(n, 0, 0, r.width, r.height),
                      f.drawImage(
                        r,
                        0,
                        0,
                        r.width,
                        r.height,
                        0,
                        0,
                        u.width,
                        u.height
                      ));
                  break;
                default:
                  u.width = r.width;
                  u.height = r.height;
                  e.drawImage(n, 0, 0, r.width, r.height);
                  f.drawImage(
                    r,
                    0,
                    0,
                    r.width,
                    r.height,
                    0,
                    0,
                    u.width,
                    u.height
                  );
              }
              o = null;
              do
                (o = u.toDataURL("image/jpeg", i)),
                  (i = Math.round((i / 1.5) * 100) / 100);
              while (o.length / 1e6 > 2.1 && i > 0.01);
              $("#resultImg2").attr("src", o);
              $("#uploadingContent2").css("display", "none");
              $("#imgContent2").css("display", "block");
              $("#imgContent2 .drag_image")
                .css("padding-top", "0px")
                .css("height", "59%")
                .css("display", "flex")
                .css("background", "none")
                .css("margin-top", "20px");
              IsYn
                ? ((picIsUploaded2 = !0),
                  picIsUploaded1 &&
                    picIsUploaded2 &&
                    $(".layui-layer-btn1").removeAttr("disabled"))
                : $(".layui-layer-btn1").removeAttr("disabled");
            });
          };
        };
      },
      !1
    );
    $("#fileUpload4")[0].value = "";
    t && r.readAsDataURL(t);
  }
}
function textWidth(n) {
  var t = n.html(),
    r = "<span>" + t + "</span>",
    i;
  return n.html(r), (i = n.find("span:first").width()), n.html(t), i;
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
      var u;
      if (n.respond == "logout")
        $.fn.alert(webRes.Font_BubbleAlert, function () {
          window.location.href = MainUrl;
        });
      else if (n.respond == "history") {
        var t = GetQueryString("cat"),
          i = GetQueryString("fromdw"),
          r = t != null && t != "" ? "&cat=" + t : "";
        r += i != null && i != "" ? "&fromdw=" + i : "";
        u = "/Mobile/Aspx/M_ReferralHistory.aspx?action=2" + r;
        window.location.href = u;
      } else
        $.fn.alert(n.respond, function () {
          location.reload();
        });
    },
  });
}
function fnCheckReply(n, t, i = "") {
  $.ajax({
    url: "/LoadData/ReplyService.ashx",
    data: { type1: "2", ProblemType: n, txtPhone: i },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      n == "Logout"
        ? ((tioCheck = window.clearInterval(tioCheck)),
          $.fn.alert(webRes.Font_LoginOut, function () {
            window.location.href = "/index.aspx";
          }))
        : n == "1" && ((tioCheck = window.clearInterval(tioCheck)), t && t());
    },
  });
}
function fnAutoCheckReply(n, t, i = "") {
  tioCheck = window.clearInterval(tioCheck);
  tioCheck = window.setInterval(function () {
    fnCheckReply(n, t, i);
  }, 5e3);
}
function getCaptchaSize() {
  var n = $(".login_verify").find(".form").innerWidth(),
    t = Math.round(n / 2);
  return [n, t];
}
function showGiftAD() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "50" },
    type: "get",
    cache: !1,
    timeout: t1,
    error: function () {},
    success: function (n) {
      if (n !== "") {
        var t = n == "True";
        t
          ? ($(".btn_footer_gift").addClass("on"), $(".btn_receive").show())
          : $(".btn_receive").hide();
      }
    },
  });
}
function dynamicShowTip(n, t, i, r, u, f, e, o) {
  try {
    var s = $(n),
      c = s.parent(),
      h = c[0].getBoundingClientRect(),
      l = h.height - 45,
      a = s[0].getBoundingClientRect().bottom,
      v = a - h.top;
    v <= l
      ? fnTipCss(n, t, i, 3, u, f, e, o)
      : fnTipCss(n, t, i, 1, u, f, e, o);
  } catch (y) {
    fnTipCss(n, t, i, r, u, f, e, o);
  }
}
function isDynamicShowTip(n, t) {
  return (t && (n = n.replace("div#", "")),
  IsCn &&
    (n == "livegameog" ||
      n == "livegamewm" ||
      n == "sportGame_pin" ||
      n == "sportGame_cmd" ||
      n == "slotGame_bng" ||
      n == "slotGame_ka" ||
      n == "livegameevo" ||
      n == "slotGame_ds" ||
      n == "slotGame_ps"))
    ? !0
    : (IsYn &&
        (n == "livegamewm" ||
          n == "livegamebbin" ||
          n == "sportGame_ag" ||
          n == "sportGame_ai" ||
          n == "livegameevo" ||
          n == "livegamesa" ||
          n == "soltGame_lcfish")) ||
      (IsTw && (n == "livegamesa" || n == "livegameog"))
    ? !0
    : !1;
}
function AutoTransferRedirect() {
  if (!clickFlag) {
    clickFlag = !0;
    var n = "/Game/KULive.aspx?mobile=1",
      t = ["1", "24", "36"];
    t.indexOf("24") > -1
      ? ($.fn.loading(),
        $.ajax({
          url: "/LoadData/HelpCheck.ashx",
          data: { checkType: "41", GameID: "24" },
          type: "get",
          cache: !1,
          timeout: 15e3,
          success: function (i) {
            i == "1"
              ? t.includes("24")
                ? $.ajax({
                    url: "/LoadData/MyPurse.ashx",
                    data:
                      "id=All-01&ddlPayin=24&sParam=" +
                      encodeURIComponent($("#hid_param").val()) +
                      "&gameStyle=" +
                      encodeURIComponent($("#hid_gameStyle").val()) +
                      "&log=true&autoTransfer=true",
                    type: "post",
                    dataType: "Json",
                    cache: !1,
                    timeout: 3e4,
                    error: function () {
                      clickFlag = !1;
                      $.fn.closeloading();
                      $.fn.alert(
                        GetTextLanguage(
                          "請求异常，請稍後再試！",
                          "请求异常，请稍后再试！",
                          "Yêu cầu bất thường, vui lòng thử lại sau！"
                        ),
                        document.referrer
                      );
                    },
                    success: function (t) {
                      clickFlag = !1;
                      switch (t.StatusCode) {
                        case "M-01":
                        case "M-001":
                          $.fn.closeloading();
                          $.fn.msg(
                            t.StatusCode == "M-01"
                              ? webRes.Font_LoginOut
                              : webRes.Font_KickedOut,
                            !1,
                            function () {
                              fnOut();
                            }
                          );
                          break;
                        case "M-09":
                          $.fn.closeloading();
                          $.fn.msg(
                            GetTextLanguage(
                              "主帳戶與《KU彩球》互轉失敗，請重新操作！",
                              "主帐户与《KU彩票》互转失败，请重新操作！",
                              "Tài khoản chính và《KU Xổ Số》chuyển khoản cho nhau thất bại,xin vui lòng thử lại！"
                            ),
                            document.referrer
                          );
                          break;
                        case "M-20":
                          $.fn.closeloading();
                          $.fn.msg(
                            GetTextLanguage(
                              "操作次數過於頻繁，請稍候再試！",
                              "操作次数过于频繁，请稍候再试！",
                              "Thao tác thường xuyên, hãy thử lại sau！"
                            ),
                            document.referrer
                          );
                          break;
                        case "M-102":
                          $.fn.closeloading();
                          $.fn.msg(
                            GetTextLanguage(
                              "主帳戶與《KU真人》互轉失敗，請重新操作！",
                              "主账户与《KU真人》互转失败，请重新操作！",
                              "Tài khoản chính và《KU CASINO》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                            ),
                            document.referrer
                          );
                          break;
                        case "M-324":
                          $.fn.closeloading();
                          $.fn.msg(
                            GetTextLanguage(
                              "主帳戶與《KU體育》互轉失敗，請重新操作！",
                              "主帐户与《KU体育》互转失败，请重新操作！",
                              "Tài khoản chính và《KU Thể Thao》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                            ),
                            document.referrer
                          );
                          break;
                        default:
                          $.fn.closeloading();
                          t.Log ? fnBack(n + "&log=" + t.Log) : fnBack(n);
                      }
                    },
                  })
                : ((clickFlag = !1), $.fn.closeloading(), fnBack(n))
              : ((clickFlag = !1), $.fn.closeloading(), fnBack(n));
          },
        }))
      : ((clickFlag = !1), $.fn.closeloading(), fnBack(n));
  }
}
function checkUploadCallback(n) {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "56" },
    timeout: 15e3,
    success: function (t) {
      t == "1" ? OpenUploadIC() : n && n();
    },
  });
}
var time1 = 6e4,
  time2 = 7e4,
  time3 = 6e4,
  time4 = 3e4,
  OutUrl = "/Mobile/login.aspx?type=Out",
  MainUrl = "/Mobile/Aspx/M_Index.aspx",
  MemberUrl = "/Mobile/Aspx/M_Member.aspx",
  EndUrl = "/End.html",
  gameCode,
  pageNamex,
  isNativeAppNew,
  isNativeApp,
  OpenSport,
  f_account,
  flagLogin,
  captchaCount,
  flagGetCaptcha,
  flagVerify,
  closeOrOpenMenu,
  getPageInfo,
  tio,
  tio2,
  MapLogin,
  platformData,
  customType,
  setPlatform,
  flagComplantBox,
  flagGame,
  flagInsertInfo,
  flagGame0,
  flagGame17,
  flagCodeP2,
  codeForgotFlag,
  submitFlag,
  checkTransactionLength,
  checkFunctionFlag,
  openIMFlag,
  autourlIM,
  responseIM,
  urlIM,
  fastIM,
  tioCheck,
  isLandscape,
  myBullet,
  clickFlag;
$(function () {
  var n, t, i;
  isSize(".error_login_t") &&
    $("input").keydown(function () {
      $(".error_login_t").hide();
    });
  $(document).on("input", "input[data-number='true']", function () {
    var n = this.value.replace(/\D/g, "");
    this.value = n;
  });
  $(document).on("input", "input[data-number='money']", function () {
    var n = this.value.replace(/\D/g, "").substring(0, 10);
    this.value =
      n == "" || isNaN(n) ? "" : n.substring(0, 1) == 0 ? "" : parseFloat(n);
  });
  $(document).on("input", "input[data-tel='true']", function () {
    this.value = this.value.replace(/[^0-9|+]/g, "");
  });
  $(document).on(
    "input",
    "input[type='number'],input[type='tel']",
    function () {
      var t = $(this).val(),
        n = $(this).attr("maxlength");
      n && $(this).val(t.substring(0, n));
    }
  );
  $(document).on(
    "focus",
    "input:text,input:password,textarea,input[type='number'],input[type='tel']",
    function () {
      var n = this;
      setTimeout(function () {
        $(
          "input:text,input:password,textarea,input[type='number'],input[type='tel']"
        ).is(":focus") && eventCheck("focus", n);
      }, 100);
    }
  );
  $(document).on(
    "blur",
    "input:text,input:password,textarea,input[type='number'],input[type='tel']",
    function () {
      $(this).data("number") && (this.value = this.value.replace(/\D/g, ""));
      (window.location.pathname.toLocaleLowerCase().indexOf("n_add1.aspx") >
        0 &&
        this.id == "txtPhoto") ||
        eventCheck("blur", this);
    }
  );
  if (
    ($(".container_main").scroll(function () {
      eventCheck("blur", !1);
    }),
    IsIOS() && IsUC())
  ) {
    $(document).on("focus", "select", function () {
      eventCheck("focus", this);
    });
    $(document).on("blur", "select", function () {
      eventCheck("blur", this);
    });
  }
  n = 0;
  t = 0;
  $(document).on("touchstart", function (i) {
    n = i.originalEvent.changedTouches[0].pageX;
    t = i.originalEvent.changedTouches[0].pageY;
  });
  i = function (i) {
    var u = document.activeElement.nodeName;
    if (u != "INPUT" && u != "SELECT" && u != "TEXTAREA") {
      var e = i.originalEvent.changedTouches[0].pageX,
        o = i.originalEvent.changedTouches[0].pageY,
        f = e - n,
        r = o - t;
      Math.abs(f) < Math.abs(r) && r < 0
        ? $("#main-footer").removeClass("hide")
        : Math.abs(f) < Math.abs(r) && r > 0
        ? $("#main-footer").removeClass("hide")
        : $("#main-footer").removeClass("hide");
    }
  };
  $(document).on("touchmove", function (n) {
    i(n);
  });
  $(document).on("touchend", function (n) {
    i(n);
  });
  window.onbeforeunload = function () {
    SendAppMessage("close");
    tio && window.clearInterval(tio);
    tio2 && window.clearInterval(tio2);
  };
  isHideTopFooter() &&
  location.href.toLocaleLowerCase().indexOf("m_index.aspx") < 0
    ? $("#main-header,#main-footer,#main-nav").remove()
    : $("#main-header,#main-footer,#main-nav").css("visibility", "visible");
  $(".btn_close2").click(function () {
    $(".mask,.mask_join").hide();
  });
});
var scrollTop = function (n, t) {
    var r, i, u, f;
    t = t || 300;
    r = 170;
    i = typeof n == "number" ? n : $(n).offset().top - r;
    CheckFormIos() &&
      ($("#main-nav").size() > 0
        ? (i = i - $("#main-nav").outerHeight())
        : $("#main-header").size() > 0 &&
          (i = i - $("#main-header").outerHeight()));
    u = ["Points"];
    f = u.indexOf($(n).attr("id")) >= 0;
    f
      ? $(n).preventDefault()
      : ($(n).attr("scroll-id") == "txtPassword"
          ? (i = i + 100)
          : $(n).attr("scroll-id") == "txtCaptcha" ||
            $(n).attr("scroll-id") == "txtLoginCaptcha"
          ? (i = 0)
          : $(n).hasClass("bonus_list") &&
            (i =
              $(".header").length == 0
                ? $(n).offset().top - 10
                : $(n).offset().top - $(".header").height() - 10),
        i > 0 && $("html,body").animate({ scrollTop: i }, t));
    document.activeElement.scrollIntoViewIfNeeded &&
      $(window).width() >= 400 &&
      document.activeElement.scrollIntoViewIfNeeded();
  },
  elmentBlur = function () {
    timer && clearInterval(timer);
    var n = document.activeElement,
      t = n.nodeName.toLowerCase();
    if (t == "input" || t == "select" || t == "textarea") {
      n.blur();
      $(n).attr("disable", !0);
      setTimeout(
        $.proxy(function () {
          $(n).removeAttr("disable");
        }, this),
        250
      );
      return;
    }
    window.location.pathname.toLocaleLowerCase().indexOf("n_add1.aspx") > 0 &&
      $(".captchaNumber").is(":visible") &&
      $(window).scrollTop(0);
    !IsIOS() &&
      window.innerWidth <= 330 &&
      window.innerHeight <= 540 &&
      ($("#txtCaptcha:visible").attr("scroll-id") == "txtCaptcha" ||
        $("#txtLoginCaptcha:visible").attr("scroll-id") == "txtLoginCaptcha") &&
      (navigator.userAgent.indexOf("Firefox") > 0 &&
      window.location.pathname.toLocaleLowerCase().indexOf("login.aspx") > 0
        ? $(".slidercaptcha").css("margin-top", "40px")
        : $(".slidercaptcha").css("top", "40%"));
    timer = setTimeout(function () {
      $(
        "#main-footer,#main-content,#main-header,#main-nav,#win_warning"
      ).removeClass("hide");
      $("body .bottom_seat").remove();
    }, 100);
  },
  timer,
  windowInnerHeight,
  placeholder1 = "",
  placeholder2 = "",
  isScroll = !0;
flagLogin = !1;
captchaCount = 0;
flagGetCaptcha = !1;
flagVerify = !1;
closeOrOpenMenu = function (n, t, i) {
  if (t) {
    var r = $(n).attr("data-msg");
    if (!r || r !== t) {
      $(n).attr("data-msg", t);
      $(n).off("click").removeAttr("onclick").attr("href", "javascript:;");
      $(n).on("click", function () {
        var i = isSize($(n).children("img")) ? $(n).children("img") : n,
          r;
        n == "#aMypurse" || n == "#aMypurse2" || n == "#aKscz" || n == "#aKscz2"
          ? t.length > 10
            ? IsIOS() && !IsYn
              ? ((r = window.innerWidth < 430 ? "43.5%" : "45%"),
                fnTipCss(i, t, 3, 1, r))
              : (window.innerWidth < 500 &&
                  (t = t
                    .replaceAll("<br>", "")
                    .replaceAll("《Nạp tiền》", "<br>《Nạp tiền》")
                    .replaceAll("《Rút tiền》", "<br>《Rút tiền》")
                    .replaceAll("《Chuyển quỹ》", "<br>《Chuyển quỹ》")),
                (r =
                  IsYn && window.innerWidth < 390
                    ? "50%"
                    : window.innerWidth == 384
                    ? "44%"
                    : "46%"),
                fnTipCss(i, t, 3, 1, r))
            : fnTipCss(i, t, 3, 1)
          : fnTip(i, t, 1);
      });
    }
  } else {
    $(n).attr("data-msg", "");
    $(n)
      .off("click")
      .on("click", function () {
        i && i();
      });
  }
};
getPageInfo = function () {
  var t = $("#PageName").val(),
    n;
  return t
    ? ((n = {
        bngindex: { gameId: "f_isBNGOpen", ptype: 9 },
        cq9index: { gameId: "f_isCQ9Open", ptype: 12 },
        dtindex: { gameId: "f_isDTOpen", ptype: 13 },
        lcindex: { gameId: "f_isLCOpen", ptype: 14 },
        kyindex: { gameId: "f_isKYOpen", ptype: 15 },
        kaindex: { gameId: "f_isKAOpen", ptype: 19 },
        dsindex: { gameId: "f_isDSOpen", ptype: 20 },
        psindex: { gameId: "f_isPSOpen", ptype: 21 },
        pgindex: { gameId: "f_isPGOpen", ptype: 23 },
        ksindex: { gameId: "f_isKSOpen", ptype: 24 },
        ftgindex: { gameId: "f_isFTGOpen", ptype: 25 },
        fcindex: { gameId: "f_isFCOpen", ptype: 27 },
      }[t]),
      n ? ((n.isGamePage = !0), n) : { ptype: 3 })
    : {};
};
var isFirst1 = !0,
  isShowMessage = !0,
  s_myPurse = 1,
  s_myPurse_str = "",
  s_isMajorF = !1,
  isMSendLoaded = !1;
MapLogin = [
  "",
  "",
  webRes.Font_KickedOut,
  webRes.Font_AccountLocked,
  webRes.Font_SystemBusy,
  webRes.Font_SystemBusy1,
];
platformData = {
  f_isJsSportOpen: {
    payinAccount: webRes.Font_Platform_f_isJsSportOpen,
    selector: [
      {
        s: "ul#sportGame_jiuzhou",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_jiuzhou",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#aBall",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
        tipId: ">div",
      },
    ],
    GameUrl: { url: "/Platform/LoginBallPlatform.aspx?isphone=1&gamenum=1" },
    disabled: !1,
  },
  f_isBallOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isBallOpen,
    selector: [
      { s: "div#aColor", type: 1, tiptype: 2, showPlace: 3, showmaintain: !0 },
      {
        s: "ul#lotogame_color",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#lotogame_color",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div.btn_GLlotoKU#lotogame_color",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblColorMoney_mini",
    payoutType: "T-03",
    payinType: "T-04",
    GameID: "1",
    GameUrl: { url: "/Game/CBAPI.aspx?mobile=1" },
    disabled: !1,
  },
  f_isHgOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isHgOpen,
    selector: [
      {
        s: "div#livegamehg",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 1 : 3,
        showmaintain: !0,
      },
      { s: "ul#hg", type: 2, tiptype: 2, showPlace: 3, showmaintain: !0 },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblHG_mini",
    payoutType: "T-03",
    payinType: "T-06",
    GameID: "3",
    GameUrl: { url: "/Game/Api.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isMgOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isMgOpen,
    selector: [
      {
        s: "ul#slotGame_mg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_mg",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
      {
        s: "ul#livegamemg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegamemg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      { s: "ul#mg", type: 2, tiptype: 2, showPlace: 3, showmaintain: !0 },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblMG_mini",
    payoutType: "T-03",
    payinType: "T-08",
    GameID: "5",
    GameUrl: {
      url: {
        "div#slotGame_mg": {
          link: "/Mobile/Game/M_MgIndex.aspx?action=2&back=5",
        },
        "div#livegamemg": {
          link: "/Mobile/Game/M_MgIndex.aspx?action=1&back=4",
        },
      },
      opentype: 0,
    },
    disabled: !1,
  },
  f_isAgOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAgOpen,
    selector: [
      {
        s: "ul#livegameag",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegameag",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAG_mini",
    payoutType: "T-03",
    payinType: "T-07",
    GameID: "4",
    GameUrl: { url: "/Game/AGApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isCNFOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isCNFOpen,
    selector: [
      {
        s: "ul#slotGame_3d",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_3d.btn_GLhotSlot",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_3d.btn_GLslot3D",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCNF_mini",
    payoutType: "T-03",
    payinType: "T-09",
    GameID: "6",
    GameUrl: { url: "/Game/CnfApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isDJOpen: {
    payinAccount: webRes.Font_Platform_f_isDJOpen,
    selector: [
      {
        s: "ul#dj",
        type: 2,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
        wait: !0,
      },
    ],
    GameUrl: "",
    disabled: !1,
  },
  f_isOgOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isOgOpen,
    selector: [
      {
        s: "ul#livegameog",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegameog",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "ul#og",
        type: 2,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
        wait: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblOG_mini",
    payoutType: "T-03",
    payinType: "T-13",
    GameID: "9",
    GameUrl: { url: "/Game/OGApi.aspx", opentype: 1 },
    disabled: !1,
  },
  f_isBBINOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_BBINAccounts,
    selector: [
      {
        s: "ul#livegamebbin",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegamebbin",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblBBIN_mini",
    payoutType: "T-03",
    payinType: "T-14",
    GameID: "10",
    GameUrl: {
      url: { "div#livegamebbin": { link: "/Game/BBINApi.aspx?mobile=1" } },
      opentype: 1,
    },
    disabled: !1,
  },
  f_isABOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isABOpen,
    selector: [
      {
        s: "ul#livegameab",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegameab",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAB_mini",
    payoutType: "T-03",
    payinType: "T-15",
    GameID: "11",
    GameUrl: { url: "/Game/ABApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAgOpen,
    selector: [
      {
        s: "ul#soltGame_agfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#soltGame_agfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAG_mini",
    payoutType: "T-03",
    payinType: "T-17",
    GameID: "13",
    GameUrl: { url: "/Game/AGApi.aspx?mobile=1&game=fish", opentype: 1 },
    disabled: !1,
  },
  f_isAGVNFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAGVNFishOpen,
    selector: [
      {
        s: "ul#soltGame_AGVNFish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#soltGame_AGVNFish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAGVNFish_mini",
    payoutType: "T-03",
    payinType: "T-69",
    GameID: "66",
    GameUrl: { url: "/Game/AGVNFishApi.aspx?mobile=1&game=fish", opentype: 1 },
    disabled: !1,
  },
  f_isCNFFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isCNFOpen,
    selector: [
      {
        s: "ul#slotGame_3dfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_3dfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCNFFish_mini",
    payoutType: "T-03",
    payinType: "T-18",
    GameID: "14",
    GameUrl: { url: "/Game/CnfApi.aspx?mobile=1&game=3dFish", opentype: 0 },
    disabled: !1,
  },
  f_isCMDOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isCMDOpen,
    selector: [
      {
        s: "ul#sportGame_cmd",
        type: 1,
        tiptype: 2,
        showPlace: IsYn ? 3 : 1,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_cmd",
        type: 1,
        tiptype: 2,
        showPlace: IsYn ? 3 : 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCMD_mini",
    payoutType: "T-03",
    payinType: "T-20",
    GameID: "18",
    GameUrl: { url: "/Game/CMDApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isBNGOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isBNGOpen,
    selector: [
      {
        s: "ul#slotGame_bng",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_bng",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblBNG_mini",
    payoutType: "T-03",
    payinType: "T-27",
    GameID: "23",
    GameUrl: { url: "/Mobile/Game/M_BNGIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isAEOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAEOpen,
    selector: [
      {
        s: "ul#slotGame_ae",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_ae",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAE_mini",
    payoutType: "T-03",
    payinType: "T-12",
    GameID: "25",
    GameUrl: { url: "/Mobile/Game/M_AEIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isAGSportOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAgOpen,
    selector: [
      {
        s: "ul#sportGame_ag",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_ag",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAG_mini",
    payoutType: "T-03",
    payinType: "T-23",
    GameID: "21",
    GameUrl: { url: "/Game/AGApi.aspx?mobile=1&game=sport", opentype: 1 },
    disabled: !1,
  },
  f_isKUOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isKUOpen,
    selector: [
      { s: "div#aKu", type: 1, tiptype: 2, showPlace: 3, showmaintain: !0 },
      {
        s: "ul#livegameku",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegameku",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblKU_mini",
    payoutType: "T-03",
    payinType: "T-24",
    GameID: "24",
    GameUrl: { url: "/Game/KULive.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isCQ9Open: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_CQ9Accounts,
    selector: [
      {
        s: "ul#slotGame_cq9",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_cq9",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCQ9_mini",
    payoutType: "T-03",
    payinType: "T-29",
    GameID: "27",
    GameUrl: { url: "/Mobile/Game/M_CQ9Index.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isCQ9FishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_CQ9Accounts,
    selector: [
      {
        s: "ul#slotGame_cq9fish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_cq9fish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCQ9Fish_mini",
    payoutType: "T-03",
    payinType: "T-30",
    GameID: "28",
    GameUrl: {
      url: "/Game/cq9GameTransit.aspx?mobile=1&game=fish&code=AB3",
      opentype: 1,
    },
    disabled: !1,
  },
  f_isDTOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_DTAccounts,
    selector: [
      {
        s: "ul#slotGame_dt",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_dt",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblDT_mini",
    payoutType: "T-03",
    payinType: "T-16",
    GameID: "12",
    GameUrl: { url: "/Mobile/Game/M_DTIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isVROpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isVROpen,
    selector: [
      {
        s: "ul#lotogame_vr",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#lotogame_vr",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblVRMoney_mini",
    payoutType: "T-03",
    payinType: "T-31",
    GameID: "29",
    GameUrl: { url: "/Game/VRIndex.aspx?mobile=1&sjs=" + Math.random() },
    disabled: !1,
  },
  f_isKYOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_KYAccounts,
    selector: [
      {
        s: "ul#chessgame_ky",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#chessgame_ky",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblKY_mini",
    payoutType: "T-03",
    payinType: "T-11",
    GameID: "7",
    GameUrl: { url: "/Mobile/Game/M_KYIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isLCOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_LCAccounts,
    selector: [
      {
        s: "ul#chessgame_lc",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
      {
        s: "div#chessgame_lc",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblLC_mini",
    payoutType: "T-03",
    payinType: "T-32",
    GameID: "30",
    GameUrl: { url: "/Mobile/Game/M_LCIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isPINOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_PINAccounts,
    selector: [
      {
        s: "div#pin",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
        tipId: ">h3",
      },
      {
        s: "ul#sportGame_pin",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_pin",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblPIN_mini",
    payoutType: "T-03",
    payinType: "T-33",
    GameID: "31",
    GameUrl: { url: "/Game/PINIndex.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isCNFChessOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isCNFOpen,
    selector: [
      {
        s: "div#a3DChess",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "ul#chessgame_3D",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#chessgame_3D",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblCNFChess_mini",
    payoutType: "T-03",
    payinType: "T-34",
    GameID: "32",
    GameUrl: { url: "/Game/CnfApi.aspx?mobile=1&game=3dChess", opentype: 0 },
    disabled: !1,
  },
  f_isSBOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_SBAccounts,
    selector: [
      {
        s: "div#sb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
        tipId: ">h3",
      },
      {
        s: "ul#sportGame_sb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_sb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblSB_mini",
    payoutType: "T-03",
    payinType: "T-36",
    GameID: "34",
    GameUrl: { url: "/Game/SBIndex.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isKYFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_KYAccounts,
    selector: [
      {
        s: "ul#soltGame_kyfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#soltGame_kyfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblKYFish_mini",
    payoutType: "T-03",
    payinType: "T-37",
    GameID: "35",
    GameUrl: { url: "/Mobile/Game/M_KYIndex.aspx?game=fish", opentype: 0 },
    disabled: !1,
  },
  f_isNBBOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_NBBAccounts,
    selector: [
      { s: "div#aNbb", type: 1, tiptype: 2, showPlace: 3, showmaintain: !0 },
      {
        s: "ul#sportGame_nbb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_nbb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "ul#sportGame_nbb2",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_nbb2",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div.btn_GLsportKU#sportGame_nbb",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblNBB_mini",
    payoutType: "T-03",
    payinType: "T-38",
    GameID: "36",
    GameUrl: [
      { url: "/Game/NBBIndex.aspx?mobile=1", opentype: 0 },
      { url: "/Game/NBBIndex.aspx?mobile=1&isNew=1", opentype: 0 },
    ],
    disabled: !1,
  },
  f_isLCFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: IsYn ? "V8 Games" : webRes.Font_LCAccounts,
    selector: [
      {
        s: "ul#soltGame_lcfish",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
      {
        s: "div#soltGame_lcfish",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblLCFish_mini",
    payoutType: "T-03",
    payinType: "T-39",
    GameID: "37",
    GameUrl: { url: "/Mobile/Game/M_LCIndex.aspx?game=fish", opentype: 0 },
    disabled: !1,
  },
  f_isBBINBallOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_BBINAccounts,
    selector: [
      {
        s: "ul#bbinball",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
      {
        s: "div#bbinball",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblBBIN_mini",
    payoutType: "T-03",
    payinType: "T-40",
    GameID: "38",
    GameUrl: {
      url: {
        "div#bbinball": { link: "/Game/BBINApi.aspx?game=Ltlottery&mobile=1" },
      },
      opentype: 1,
    },
    disabled: !1,
  },
  f_isWMOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_WMAccounts,
    selector: [
      {
        s: "ul#livegamewm",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegamewm",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblWM_mini",
    payoutType: "T-03",
    payinType: "T-42",
    GameID: "40",
    GameUrl: { url: "/Game/WMApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isKAOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_KAAccounts,
    selector: [
      {
        s: "ul#slotGame_ka",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_ka",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblKA_mini",
    payoutType: "T-03",
    payinType: "T-43",
    GameID: "41",
    GameUrl: { url: "/Mobile/Game/M_KAIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isDGOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_DGAccounts,
    selector: [
      {
        s: "ul#livegamedg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#livegamedg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblDG_mini",
    payoutType: "T-03",
    payinType: "T-44",
    GameID: "42",
    GameUrl: { url: "/Game/DGApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isSAOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isSAOpen,
    selector: [
      {
        s: "ul#livegamesa",
        type: 1,
        tiptype: 2,
        showPlace: IsYn ? 1 : 3,
        showmaintain: !0,
      },
      {
        s: "div#livegamesa",
        type: 1,
        tiptype: 2,
        showPlace: IsYn ? 1 : 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblSA_mini",
    payoutType: "T-03",
    payinType: "T-45",
    GameID: "43",
    GameUrl: { url: "/Game/SAApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isKAFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_KAAccounts,
    selector: [
      {
        s: "ul#slotGame_kafish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_kafish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblKAFish_mini",
    payoutType: "T-03",
    payinType: "T-48",
    GameID: "45",
    GameUrl: {
      url: "/Game/kaGameTransit.aspx?gameid=GoldenDragon",
      opentype: 1,
    },
    disabled: !1,
  },
  f_isSMOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_SMAccounts,
    selector: [
      { s: "#smLive", type: 3, tiptype: 2, showPlace: 1, showmaintain: !0 },
    ],
    GameUrl: { url: "/Game/SMApi.aspx?mobile=1", opentype: 1 },
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblSM_mini",
    payoutType: "T-03",
    payinType: "T-50",
    GameID: "47",
    disabled: !1,
  },
  f_isPSOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_PSAccounts,
    selector: [
      {
        s: "ul#slotGame_ps",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_ps",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
    ],
    GameUrl: { url: "/Mobile/Game/M_PSIndex.aspx?", opentype: 0 },
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblPS_mini",
    payoutType: "T-03",
    payinType: "T-47",
    GameID: "48",
    disabled: !1,
  },
  f_isDSOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_DSAccounts,
    selector: [
      {
        s: "ul#slotGame_ds",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_ds",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblDS_mini",
    payoutType: "T-03",
    payinType: "T-46",
    GameID: "44",
    GameUrl: { url: "/Mobile/Game/M_DSIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isDSFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_DSAccounts,
    selector: [
      {
        s: "ul#slotGame_dsfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_dsfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblDSFish_mini",
    payoutType: "T-03",
    payinType: "T-49",
    GameID: "46",
    GameUrl: { url: "/Game/dsGameTransit.aspx?gameid=1003", opentype: 1 },
    disabled: !1,
  },
  f_isIMOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_IMAccounts,
    selector: [
      {
        s: "ul#esport_im",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#esport_imv1",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblIM_mini",
    payoutType: "T-03",
    payinType: "T-52",
    GameID: "50",
    GameUrl: { url: "/Game/IMApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isSBEsportOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_SBAccounts,
    selector: [
      {
        s: "ul#esport_sbesport",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#esport_sbesportv1",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblSBEsport_mini",
    payoutType: "T-03",
    payinType: "T-53",
    GameID: "51",
    GameUrl: { url: "/Game/SBIndex.aspx?mobile=1&type=esport", opentype: 1 },
    disabled: !1,
  },
  f_isAESOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAESOpen,
    selector: [
      {
        s: "ul#livegameaes",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
      {
        s: "div#livegameaes",
        type: 1,
        tiptype: 2,
        showPlace: IsCn ? 1 : 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAES_mini",
    payoutType: "T-03",
    payinType: "T-54",
    GameID: "52",
    GameUrl: { url: "/Game/AESApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isKSOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_KSAccounts,
    selector: [
      {
        s: "ul#slotGame_ksfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_ksfish",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblLS_mini",
    payoutType: "T-03",
    payinType: "T-55",
    GameID: "53",
    GameUrl: { url: "/Mobile/Game/M_KSIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isPGOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_PGAccounts,
    selector: [
      {
        s: "ul#slotGame_pg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
      {
        s: "div#slotGame_pg",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblPG_mini",
    payoutType: "T-03",
    payinType: "T-57",
    GameID: "54",
    GameUrl: { url: "/Mobile/Game/M_PGIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isEVOOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isEVOOpen,
    selector: [
      {
        s: "div#livegameevo",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblEVO_mini",
    payoutType: "T-03",
    payinType: "T-59",
    GameID: "56",
    GameUrl: { url: "/Game/EVOApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isAIOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isAIOpen,
    selector: [
      {
        s: "div#sportGame_ai",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblAI_mini",
    payoutType: "T-03",
    payinType: "T-60",
    GameID: "57",
    GameUrl: { url: "/Game/AIApi.aspx?mobile=1", opentype: 0 },
    disabled: !1,
  },
  f_isFTGOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_FTGAccounts,
    selector: [
      {
        s: "div#slotGame_ftg",
        type: 1,
        tiptype: 2,
        showPlace: IsYn || IsTw ? 1 : 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblFTG_mini",
    payoutType: "T-03",
    payinType: "T-61",
    GameID: "58",
    GameUrl: { url: "/Mobile/Game/M_FTGIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isOBSportOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_OBSportAccounts,
    selector: [
      {
        s: "ul#sportGame_ob",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
      {
        s: "div#sportGame_ob",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblOBSport_mini",
    payoutType: "T-03",
    payinType: "T-63",
    GameID: "60",
    GameUrl: {
      url: { "div#sportGame_ob": { link: "/Game/OBSportApi.aspx?mobile=1" } },
      opentype: 1,
    },
    disabled: !1,
  },
  f_isOBLiveOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isOBLiveOpen,
    selector: [
      {
        s: "div#livegameob",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblOBLive_mini",
    payoutType: "T-03",
    payinType: "T-64",
    GameID: "61",
    GameUrl: { url: "/Game/OBLiveApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isOBESportOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_OBEsportAccounts,
    selector: [
      {
        s: "ul#esport_obv1",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
      {
        s: "div#esport_obv1",
        type: 1,
        tiptype: 2,
        showPlace: IsTw ? 3 : 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblOBEsport_mini",
    payoutType: "T-03",
    payinType: "T-65",
    GameID: "62",
    GameUrl: {
      url: "/Game/OBEsportApi.aspx?mobile=1&type=esport",
      opentype: 1,
    },
    disabled: !1,
  },
  f_isWGOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_WGAccounts,
    selector: [
      {
        s: "div#lotogame_wg",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblWG_mini",
    payoutType: "T-03",
    payinType: "T-66",
    GameID: "63",
    GameUrl: { url: "/Game/WGApi.aspx?mobile=1", opentype: 1 },
    disabled: !1,
  },
  f_isFCOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_FCAccounts,
    selector: [
      {
        s: "div#slotGame_fc",
        type: 1,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblFC_mini",
    payoutType: "T-03",
    payinType: "T-62",
    GameID: "59",
    GameUrl: { url: "/Mobile/Game/M_FCIndex.aspx", opentype: 0 },
    disabled: !1,
  },
  f_isOBFishOpen: {
    payoutAccoount: webRes.Font_MasterAccount,
    payinAccount: webRes.Font_Platform_f_isOBFishOpen,
    selector: [
      {
        s: "div#slotGame_obfish",
        type: 1,
        tiptype: 2,
        showPlace: 1,
        showmaintain: !0,
      },
    ],
    payoutMoneyID: "lblMainMoney_mini",
    payinMoneyID: "lblOBFish_mini",
    payoutType: "T-03",
    payinType: "T-70",
    GameID: "67",
    GameUrl: { url: "/Game/OBFishApi.aspx?game=fish&gameId=200", opentype: 0 },
    disabled: !1,
  },
};
customType = {
  f_SportGame: {
    payinAccount: GetTextLanguage("體育投注", "体育投注", "THỂ THAO"),
    selector: [
      {
        s: "div#sport_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: [
      "f_isJsSportOpen",
      "f_isCMDOpen",
      "f_isAGSportOpen",
      "f_isPINOpen",
      "f_isSBOpen",
      "f_isNBBOpen",
      "f_isAIOpen",
      "f_isOBSportOpen",
    ],
    GameUrl: { url: "/Mobile/Aspx/M_SportGame.aspx" },
  },
  f_LiveGame: {
    payinAccount: GetTextLanguage("真人遊戲", "真人游戏", "LIVE CASINO"),
    selector: [
      {
        s: "div#live_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: [
      "f_isBBINOpen",
      "f_isAgOpen",
      "f_isOgOpen",
      "f_isHgOpen",
      "f_isABOpen",
      "f_isKUOpen",
      "f_isWMOpen",
      "f_isDGOpen",
      "f_isSAOpen",
      "f_isAESOpen",
      "f_isEVOOpen",
      "f_isOBLiveOpen",
    ],
    GameUrl: { url: "/Mobile/Aspx/M_LiveGame.aspx" },
  },
  f_SlotGame: {
    payinAccount: GetTextLanguage("電子遊戲", "电子游戏", "GAMES"),
    selector: [
      {
        s: "div#slot_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: [
      "f_isCNFOpen",
      "f_isCNFFishOpen",
      "f_isBNGOpen",
      "f_isCQ9Open",
      "f_isCQ9FishOpen",
      "f_isDTOpen",
      "f_isKYFishOpen",
      "f_isLCFishOpen",
      "f_isKAOpen",
      "f_isKAFishOpen",
      "f_isDSOpen",
      "f_isDSFishOpen",
      "f_isPSOpen",
      "f_isKSOpen",
      "f_isPGOpen",
      "f_isFTGOpen",
      "f_isATOpen",
      "f_isOBFishOpen",
    ],
    GameUrl: { url: "/Mobile/Aspx/M_SlotGame.aspx" },
  },
  f_LotoGame: {
    payinAccount: GetTextLanguage("彩球遊戲", "彩票游戏", "XỔ SỐ"),
    selector: [
      {
        s: "div#loto_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: ["f_isBallOpen", "f_isVROpen", "f_isBBINBallOpen", "f_isWGOpen"],
    GameUrl: { url: "/Mobile/Aspx/M_LotoGame.aspx" },
  },
  f_ChessGame: {
    payinAccount: GetTextLanguage("對戰遊戲", "棋牌游戏", "ĐỐI KHÁNG"),
    selector: [
      {
        s: "div#chess_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: ["f_isLCOpen", "f_isKYOpen", "f_isCNFChessOpen"],
    GameUrl: { url: "/Mobile/Aspx/M_ChessGame.aspx" },
  },
  f_EsportGame: {
    payinAccount: GetTextLanguage("電競投注", "电竞投注", "E-SPORTS"),
    selector: [
      {
        s: "div#esport_game",
        type: 3,
        tiptype: 2,
        showPlace: 3,
        showmaintain: !0,
      },
    ],
    children: ["f_isIMOpen", "f_isSBEsportOpen", "f_isOBESportOpen"],
    GameUrl: { url: "/Mobile/Aspx/M_EsportGame.aspx" },
  },
};
setPlatform = function (n, t, i, r, u, f) {
  n.selector == null ||
    n.selector.length <= 0 ||
    $.each(n.selector, function (e, o) {
      if (o.s && isSize(o.s)) {
        if (($(o.s).unbind("click"), r))
          if ((t != undefined && t !== 1) || o.wait)
            $(o.s).on("click", function () {
              var r,
                u,
                e = !1,
                f;
              u =
                n.payinType == "T-07"
                  ? webRes.Font_AGCasino
                  : n.payinType == "T-15"
                  ? webRes.Font_isABCasino
                  : n.payinType == "T-18"
                  ? webRes.Font_CNFFish
                  : n.payinType == "T-23"
                  ? webRes.Font_Platform_f_isAGSportOpen
                  : n.payinType == "T-30"
                  ? webRes.Font_Platform_f_isCQ9FishOpen
                  : n.payinType == "T-17"
                  ? webRes.Font_Platform_f_isFishOpen
                  : n.payinType == "T-34"
                  ? webRes.Font_Platform_f_isCNFChessOpen
                  : n.payinType == "T-36"
                  ? webRes.Font_Platform_f_isSBOpen
                  : n.payinType == "T-37"
                  ? webRes.Font_Platform_f_isKYFishOpen
                  : n.payinType == "T-39"
                  ? webRes.Font_Platform_f_isLCFishOpen
                  : n.payinType == "T-14"
                  ? webRes.Font_Platform_f_isBBINOpen
                  : n.payinType == "T-40"
                  ? webRes.Font_Platform_f_isBBINBallOpen
                  : n.payinType == "T-43"
                  ? webRes.Font_Platform_f_isKAOpen
                  : n.payinType == "T-48"
                  ? webRes.Font_Platform_f_isKAFishOpen
                  : n.payinType == "T-49"
                  ? webRes.Font_Platform_f_isDSFishOpen
                  : n.payinType == "T-53"
                  ? webRes.Font_Platform_f_isSBEsportOpen
                  : n.payinType == "T-55"
                  ? webRes.Font_Platform_f_isKSOpen
                  : n.payinType == "T-57"
                  ? webRes.Font_Platform_f_isPGOpen
                  : n.payinType == "T-61"
                  ? webRes.Font_Platform_f_isFTGOpen
                  : n.payinType == "T-62"
                  ? webRes.Font_Platform_f_isFCOpen
                  : n.payinType == "T-70"
                  ? webRes.Font_Platform_f_isOBFishOpen
                  : IsTw &&
                    n.payinAccount == webRes.Font_Platform_f_isJsSportOpen
                  ? webRes.Font_Platform_f_isJsSportOpen.replace(
                      "{0}",
                      gameCode == "21"
                        ? webRes.Font_OnlineGame21
                        : webRes.Font_OnlineGame2
                    )
                  : IsYn && n.payinType == "T-69"
                  ? webRes.Font_Platform_f_isAGVNFishOpen
                  : n.payinAccount;
              o.s == "ul#sportGame_nbb2" &&
                ((u = webRes.Font_NBB_New),
                IsTw && (u = u.replace("{0}", LogoName)));
              o.s == "div#sportGame_nbb2" &&
                ((u = webRes.Font_NBB_New),
                IsTw && (u = u.replace("{0}", LogoName)));
              o.s == "#smLive" && IsYn && (u = webRes.Font_SMAccountsLive);
              t === 0 &&
                (i === "" || i === null || i == undefined
                  ? (r = webRes.Font_Platform_Maintain)
                  : ((e = !0),
                    (r = webRes.Font_M_Platform_Time),
                    (i =
                      ' <span style="color:red;">' +
                      i.replace("南", "tháng").replace("越", "ngày") +
                      "</span>")),
                (r = r.replace("{0}", u).replace("{1}", i)));
              t === 2 && (r = webRes.Font_M_Platform_Member.replace("{0}", u));
              (t === 3 || o.wait) &&
                (r = webRes.Font_Platform_open.replace("{0}", u));
              t === 4 &&
                ((r = webRes.Font_Platform_Maintain + "！"),
                (r = r.replace("{0}", u).replace("{1}", i)));
              t === 5 &&
                ((r = webRes.Font_Platform_Maintain + "！！"),
                (r = r.replace("{0}", u).replace("{1}", i)));
              o.tiptype == 1
                ? $.fn.msg(r)
                : o.tiptype == 2 &&
                  ((f = !1),
                  ((IsYn && (t == 2 || o.s == "div#sportGame_nbb2")) ||
                    (IsTw && o.s == "div#sportGame_nbb2" && t == 2)) &&
                    (f = "50%"),
                  IsYn && $(o.s).hasClass("w100") && (f = ""),
                  isDynamicShowTip(o.s + (o.tipId ? o.tipId : ""), !0)
                    ? dynamicShowTip(
                        o.s + (o.tipId ? o.tipId : ""),
                        r,
                        3,
                        o.showPlace,
                        f,
                        !0,
                        t,
                        e
                      )
                    : fnTipCss(
                        o.s + (o.tipId ? o.tipId : ""),
                        r,
                        3,
                        o.showPlace,
                        f,
                        !0,
                        t,
                        e
                      ));
            });
          else
            $(o.s).on("click", function () {
              var i, r, t;
              if (($(window).scrollTop(-30), o.type == 1))
                (n.IsOpenOut = !0),
                  (n.IsOpenIn = !0),
                  (n.myPurse = s_isMajorF ? 1 : s_myPurse),
                  (n.myPurse_str = s_myPurse_str),
                  (n.GameUrl.url =
                    this.id == "sportGame_nbb" || this.id == "aNbb"
                      ? n.GameUrl[0].url
                      : this.id == "sportGame_nbb2"
                      ? n.GameUrl[1].url
                      : typeof n.GameUrl.url == "string"
                      ? n.GameUrl.url
                      : n.GameUrl.url[o.s].link),
                  (i = ["1", "24", "36"]),
                  i.indexOf(n.GameID) > -1
                    ? ((r = n.GameID == "24" ? "&log=true" : ""),
                      $.ajax({
                        url: "/LoadData/HelpCheck.ashx",
                        data: { checkType: "41", GameID: n.GameID },
                        type: "get",
                        cache: !1,
                        timeout: 15e3,
                        success: function (t) {
                          if (t == "1")
                            i.includes(n.GameID)
                              ? $.ajax({
                                  url: "/LoadData/MyPurse.ashx",
                                  data:
                                    "id=All-01&ddlPayin=" +
                                    n.GameID +
                                    "&sParam=" +
                                    encodeURIComponent($("#hid_param").val()) +
                                    "&gameStyle=" +
                                    encodeURIComponent(
                                      $("#hid_gameStyle").val()
                                    ) +
                                    r +
                                    "&autoTransfer=true",
                                  type: "post",
                                  dataType: "Json",
                                  cache: !1,
                                  timeout: 3e4,
                                  error: function () {
                                    $("#loading").hide();
                                    $.fn.alert(
                                      GetTextLanguage(
                                        "請求异常，請稍後再試！",
                                        "请求异常，请稍后再试！",
                                        "Yêu cầu bất thường, vui lòng thử lại sau！"
                                      ),
                                      document.referrer
                                    );
                                  },
                                  success: function (t) {
                                    $("#loading").hide();
                                    switch (t.StatusCode) {
                                      case "M-01":
                                      case "M-001":
                                        $.fn.msg(
                                          t.StatusCode == "M-01"
                                            ? webRes.Font_LoginOut
                                            : webRes.Font_KickedOut,
                                          !1,
                                          function () {
                                            fnOut();
                                          }
                                        );
                                        break;
                                      case "M-09":
                                        $.fn.msg(
                                          GetTextLanguage(
                                            "主帳戶與《KU彩球》互轉失敗，請重新操作！",
                                            "主帐户与《KU彩票》互转失败，请重新操作！",
                                            "Tài khoản chính và《KU Xổ Số》chuyển khoản cho nhau thất bại,xin vui lòng thử lại！"
                                          ),
                                          document.referrer
                                        );
                                        break;
                                      case "M-20":
                                        $.fn.msg(
                                          GetTextLanguage(
                                            "操作次數過於頻繁，請稍候再試！",
                                            "操作次数过于频繁，请稍候再试！",
                                            "Thao tác thường xuyên, hãy thử lại sau！"
                                          ),
                                          document.referrer
                                        );
                                        break;
                                      case "M-102":
                                        $.fn.msg(
                                          GetTextLanguage(
                                            "主帳戶與《KU真人》互轉失敗，請重新操作！",
                                            "主账户与《KU真人》互转失败，请重新操作！",
                                            "Tài khoản chính và《KU CASINO》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                                          ),
                                          document.referrer
                                        );
                                        break;
                                      case "M-324":
                                        $.fn.msg(
                                          GetTextLanguage(
                                            "主帳戶與《KU體育》互轉失敗，請重新操作！",
                                            "主帐户与《KU体育》互转失败，请重新操作！",
                                            "Tài khoản chính và《KU Thể Thao》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                                          ),
                                          document.referrer
                                        );
                                        break;
                                      default:
                                        $("#loading").show();
                                        t.Log
                                          ? n.GameUrl.opentype == 1
                                            ? (setGameCategory(),
                                              fnOpenNew(
                                                n.GameUrl.url + "&log=" + t.Log
                                              ))
                                            : (setGameCategory(),
                                              fnBack(
                                                n.GameUrl.url + "&log=" + t.Log
                                              ))
                                          : n.GameUrl.opentype == 1
                                          ? (setGameCategory(),
                                            fnOpenNew(n.GameUrl.url))
                                          : (setGameCategory(),
                                            fnBack(n.GameUrl.url));
                                    }
                                  },
                                })
                              : n.GameUrl.opentype == 1
                              ? (setGameCategory(), fnOpenNew(n.GameUrl.url))
                              : (setGameCategory(), fnBack(n.GameUrl.url));
                          else {
                            switch (n.GameID) {
                              case "1":
                              case "24":
                              case "36":
                                getFastestUrl(t, n.GameID);
                            }
                            open_myPurse(n);
                          }
                        },
                      }))
                    : open_myPurse(n);
              else if (o.type == 2)
                if (
                  $.cookie("CookieIsApp") == "1" &&
                  $.cookie("CookieBackApp") != "" &&
                  o.jumpApp
                )
                  fnBack($.cookie("CookieBackApp"));
                else {
                  var u = $(o.s).data("name") || n.payinAccount,
                    f = $(o.s).data("url") || n.GameUrl.url,
                    e = n.GameUrl.opentype || 0;
                  GetAppDownload(u, f, e);
                }
              else
                o.type == 3
                  ? n.GameUrl.url
                    ? o.s === "#smLive"
                      ? (setGameCategory(),
                        IsIOS() &&
                        navigator.userAgent.toLowerCase().indexOf("safari") >
                          -1 &&
                        navigator.userAgent.toLowerCase().indexOf("chrome") ==
                          -1
                          ? ((t = document.createElement("a")),
                            t.setAttribute("rel", "noopener noreferrer"),
                            t.setAttribute("href", n.GameUrl.url),
                            t.setAttribute("target", "_blank"),
                            t.click())
                          : window.open(n.GameUrl.url))
                      : (setGameCategory(), fnBack(n.GameUrl.url))
                    : $.fn.msg("链接未配置，无法访问哦")
                  : console.log("参数配置错误...........");
            });
        o.wait
          ? closeMaintain(o.s, !0, 0)
          : o.showmaintain && (r || closeMaintain(o.s, !1, t, u, f));
      }
    });
};
flagComplantBox = !1;
flagGame = !1;
flagInsertInfo = !1;
flagGame0 = !1;
flagGame17 = !1;
flagCodeP2 = !1;
codeForgotFlag = !1;
submitFlag = !1;
var checkMoney = function (n, t, i, r) {
    var f = '<div class="dep_limited">{0}</div>',
      l = $(n).data("type"),
      c,
      u,
      e;
    f =
      l && l == "withdraw"
        ? i != null && i != undefined
          ? f.replace(
              "{0}",
              GetTextLanguage("提款金額 ", "提款金额 ", "") +
                t +
                " ~ " +
                i +
                GetTextLanguage("", "", " điểm")
            )
          : f.replace(
              "{0}",
              GetTextLanguage("最低 ", "最低 ", "Tối thiểu ") +
                t +
                GetTextLanguage(" 點", " 点", " điểm")
            )
        : f.replace(
            "{0}",
            GetTextLanguage("存款金額 ", "存款金额 ", "") +
              t +
              " ~ " +
              i +
              GetTextLanguage("", "", " điểm")
          );
    var o = $(n).hasClass("text_overflow") ? $.trim($(n).val()) : $(n).val(),
      h = $(n).parent("li"),
      s = $("input.btnConfirmSend");
    return parseInt(o) < t || parseInt(o) > i
      ? ($("#spError").show(),
        o != ""
          ? ((c = window.innerWidth > 0 ? window.innerWidth : screen.width),
            $(n).parent().parent().find(".formDep_Token").length > 0 && c < 768
              ? ($(n).parent().parent().find(".dep_limited").remove(),
                $(n).parent().parent().append(f),
                (u = $(n).parent().parent().find(".dep_limited")),
                u.css({
                  right: "unset",
                  left: "30%",
                  "white-space": "nowrap",
                  padding: "10px 10%",
                }),
                c < 400 && u.css({ left: "26%" }),
                (e = u.outerHeight(!0) - 4),
                u.css({ top: -e }))
              : ($(n).parent().children(".dep_limited").remove(),
                $(n).parent().append(f),
                (u = $(n).parent().children(".dep_limited")),
                $(n).prev(".form_T").hasClass("from_L")
                  ? ((e = u.outerHeight(!0) + 10),
                    u.css({ width: $(n).outerWidth(), top: -e }))
                  : $(n).parent(".formDep_In").length > 0
                  ? (u.css({
                      right: "unset",
                      left: "-16px",
                      "white-space": "nowrap",
                    }),
                    (e = u.outerHeight(!0) - 4),
                    u.css({ top: -e }))
                  : u.css({ width: $(n).outerWidth() })),
            $(n).css("color", "red"),
            s.attr("disabled", !0),
            h.addClass("error"),
            $(".content_body").length > 0 &&
              ($("body").addClass("blockOverflow"),
              $(".content_body").css("z-index", "13")))
          : (h.removeClass("error"),
            s.removeAttr("disabled"),
            $(n).parent(".formDep_In").find(".formDep_Token")
              ? $(n).parent().parent().find(".dep_limited").remove()
              : $(n).parent().find(".dep_limited").remove(),
            $(".content_body").length > 0 &&
              ($("body").removeClass("blockOverflow"),
              $(".content_body").css("z-index", "1"))),
        r && r(),
        !1)
      : ($("#spError").hide(),
        h.removeClass("error"),
        isNE(o) ? s.removeAttr("disabled") : s.attr("disabled", "disabled"),
        $(n).parent(".formDep_In").find(".formDep_Token")
          ? $(n).parent().parent().find(".dep_limited").remove()
          : $(n).parent().find(".dep_limited").remove(),
        $(".content_body").length > 0 &&
          ($("body").removeClass("blockOverflow"),
          $(".content_body").css("z-index", "1")),
        r && r(),
        $(n).css("color", "black"),
        isNE(o));
  },
  checkMoney2 = function (n, t, i, r) {
    var c = new RegExp("^(([1-9]{1}\\d*)|(0{1}))(\\.([0-9][1-9]|[1-9][0-9]))$"),
      f = '<div class="dep_limited">{0}</div>',
      l = $(n).data("type"),
      u = $(n).val(),
      s,
      o,
      e,
      h;
    return (
      (f =
        l && l == "withdraw"
          ? i != null && i != undefined
            ? f.replace(
                "{0}",
                GetTextLanguage("提款金額 ", "提款金额 ", "") +
                  t +
                  " ~ " +
                  i +
                  GetTextLanguage("", "", " điểm")
              )
            : f.replace(
                "{0}",
                GetTextLanguage("最低 ", "最低 ", "Tối thiểu ") +
                  t +
                  GetTextLanguage(" 點", " 点", " điểm")
              )
          : isNE(u) && (parseFloat(u) < t || parseFloat(u) > i)
          ? f.replace(
              "{0}",
              GetTextLanguage("存款金額 ", "存款金额 ", "") +
                t +
                " ~ " +
                i +
                GetTextLanguage("", "", " điểm")
            )
          : isNE(u) && !c.test(u)
          ? f.replace(
              "{0}",
              GetTextLanguage(
                "必須包含小數點後兩位",
                "必须包含小数点后两位",
                ""
              )
            )
          : f.replace(
              "{0}",
              GetTextLanguage("存款金額 ", "存款金额 ", "") +
                t +
                " ~ " +
                i +
                GetTextLanguage("", "", " điểm")
            )),
      (s = $(n).parent("li")),
      (o = $("input.btnConfirmSend")),
      parseFloat(u) < t || parseFloat(u) > i || (isNE(u) && !c.test(u))
        ? ($("#spError").show(),
          u != ""
            ? ($(n).parent().children(".dep_limited").remove(),
              $(n).parent().append(f),
              (e = $(n).parent().children(".dep_limited")),
              $(n).prev(".form_T").hasClass("from_L")
                ? ((h = e.outerHeight(!0) + 10),
                  e.css({ width: $(n).outerWidth(), top: -h }))
                : $(n).parent(".formDep_In").length > 0
                ? (e.css({
                    right: "unset",
                    left: "-16px",
                    "white-space": "nowrap",
                  }),
                  (h = e.outerHeight(!0) - 4),
                  e.css({ top: -h }))
                : e.css({ width: $(n).outerWidth() }),
              o.attr("disabled", !0),
              s.addClass("error"))
            : (s.removeClass("error"),
              o.removeAttr("disabled"),
              $(n).parent().find(".dep_limited").remove()),
          $(n).css("color", "red"),
          r && r(),
          !1)
        : ($("#spError").hide(),
          s.removeClass("error"),
          isNE(u) ? o.removeAttr("disabled") : o.attr("disabled", "disabled"),
          $(n).parent().find(".dep_limited").remove(),
          $(n).css("color", "black"),
          r && r(),
          isNE(u))
    );
  },
  checkNumTextLength = function (n, t) {
    var r, u, f, e, i, o;
    return (
      (t = parseInt(t || $(n).attr("maxlength"))),
      (r = '<div class="dep_limited">{0}</div>'),
      (r =
        $(n).attr("id") == "lastFiveNo"
          ? r.replace("{0}", t + "位数字")
          : r.replace(
              "{0}",
              $(n).attr("data-placeholder") || $(n).attr("placeholder")
            )),
      (u = $.trim($(n).val().replace(/\D/g, ""))),
      $(n).val(u),
      (f = $(n).parent("li")),
      (e = $("input.btnConfirmSend")),
      u.length == t
        ? ($("#spError").hide(),
          f.removeClass("error"),
          e.removeAttr("disabled"),
          $(n).parent().find(".dep_limited").remove(),
          $(".content_body").length > 0 &&
            ($("body").removeClass("blockOverflow"),
            $(".content_body").css("z-index", "1")),
          !0)
        : ($("#spError").show(),
          u.length != 0
            ? ($(n).parent().children(".dep_limited").remove(),
              $(n).parent().append(r),
              (i = $(n).parent().children(".dep_limited")),
              $(n).prev(".form_T").hasClass("from_L")
                ? ((o = i.outerHeight(!0) + 10),
                  i.css({ width: $(n).outerWidth(), top: -o }))
                : $(n).parent(".formDep_In").length > 0
                ? (i.css({
                    right: "unset",
                    left: "-16px",
                    "white-space": "nowrap",
                  }),
                  (o = i.outerHeight(!0) - 4),
                  i.css({ top: -o }))
                : i.css({ width: $(n).outerWidth() }),
              e.attr("disabled", !0),
              f.addClass("error"),
              $(".content_body").length > 0 &&
                ($("body").addClass("blockOverflow"),
                $(".content_body").css("z-index", "13")))
            : (f.removeClass("error"),
              e.removeAttr("disabled"),
              $(n).parent().find(".dep_limited").remove(),
              $(".content_body").length > 0 &&
                ($("body").removeClass("blockOverflow"),
                $(".content_body").css("z-index", "1"))),
          !1)
    );
  },
  fnTabPage = function (n, t) {
    $(n + " input:button").on("click", function () {
      var r = $(this).data("page"),
        n = parseInt($("#pageindex").val()),
        i = parseInt($("#pagecount").val());
      ($(this).siblings().removeAttr("disabled"),
      r == 1 ? --n : ++n,
      (n <= 1 || n >= i) && $(this).attr("disabled", !0),
      n < 1 || n > i) || ($("#pageindex").val(n), t && t());
    });
  };
checkTransactionLength = function (n, t) {
  var e = '<div class="dep_limited">{0}</div>',
    s = $(n).data("type"),
    r,
    f;
  e = e.replace("{0}", t + " chữ số");
  var i = $(n).val(),
    o = $(n).parent("li"),
    u = $("input.btnNextStep");
  return (
    i.length > t && $(n).val(i.slice(0, t)),
    i.length != t
      ? ($("#spError").show(),
        i.length > 0 && i.length <= t
          ? ($(n).parent().children(".dep_limited").remove(),
            $(n).parent().append(e),
            (r = $(n).parent().children(".dep_limited")),
            $(n).prev(".form_T").hasClass("from_L")
              ? ((f = r.outerHeight(!0) + 10),
                r.css({ width: $(n).outerWidth(), top: -f }))
              : $(n).parent(".formDep_In").length > 0
              ? (r.css({
                  right: "unset",
                  left: "-16px",
                  "white-space": "nowrap",
                }),
                (f = r.outerHeight(!0) - 4),
                r.css({ top: -f }))
              : r.css({ width: $(n).outerWidth() }),
            u.attr("disabled", !0),
            o.addClass("error"))
          : (o.removeClass("error"),
            u.removeAttr("disabled"),
            $(n).parent().find(".dep_limited").remove()),
        !1)
      : ($("#spError").hide(),
        o.removeClass("error"),
        isNE(i) ? u.removeAttr("disabled") : u.attr("disabled", "disabled"),
        $(n).parent().find(".dep_limited").remove(),
        isNE(i))
  );
};
checkFunctionFlag = !1;
openIMFlag = !1;
fastIM = !1;
var photoType,
  photoType2,
  picIsUploaded1 = !1,
  picIsUploaded2 = !1,
  fileSize1 = 0,
  fileSize2 = 0;
if (
  ((isLandscape = window.innerWidth > window.innerHeight),
  IsTw &&
    (myBullet = [
      { id: "Hot", name: "熱門", iconClass: "ic_GLhot" },
      { id: "Live", name: "真人", iconClass: "ic_GLlive" },
      { id: "Slot", name: "電子", iconClass: "ic_GLslot" },
      { id: "Sport", name: "體育", iconClass: "ic_GLsport" },
      { id: "Ball", name: "彩球", iconClass: "ic_GLloto" },
      { id: "Fish", name: "捕魚", iconClass: "ic_GLfish" },
      { id: "Chess", name: "對戰", iconClass: "ic_GLchess" },
      { id: "eSport", name: "電競", iconClass: "ic_GLesport" },
    ]),
  IsCn &&
    (myBullet = [
      { id: "Hot", name: "热门", iconClass: "ic_GLhot" },
      { id: "Live", name: "真人", iconClass: "ic_GLlive" },
      { id: "Sport", name: "体育", iconClass: "ic_GLsport" },
      { id: "Ball", name: "彩票", iconClass: "ic_GLloto" },
      { id: "Slot", name: "电子", iconClass: "ic_GLslot" },
      { id: "Chess", name: "棋牌", iconClass: "ic_GLchess" },
      { id: "Fish", name: "捕鱼", iconClass: "ic_GLfish" },
      { id: "eSport", name: "电竞", iconClass: "ic_GLesport" },
    ]),
  IsYn &&
    (myBullet = [
      { id: "Hot", name: "HOT", iconClass: "ic_GLhot" },
      { id: "Live", name: "LIVE CASINO", iconClass: "ic_GLlive" },
      { id: "Ball", name: "XỔ SỐ", iconClass: "ic_GLloto" },
      { id: "Sport", name: "THỂ THAO", iconClass: "ic_GLsport" },
      { id: "Slot", name: "GAMES", iconClass: "ic_GLslot" },
      { id: "Chess", name: "ĐỐI KHÁNG", iconClass: "ic_GLchess" },
      { id: "Fish", name: "BẮN CÁ", iconClass: "ic_GLfish" },
      { id: "eSport", name: "E-SPORTS", iconClass: "ic_GLesport" },
    ]),
  IsTw)
)
  var HotList = [
      {
        id: "aKu",
        class: "btn_GLhotLive",
        name: "KU真人",
        img: isLandscape ? "logo_KU_2.svg" : "logo_KU_3.svg",
      },
      {
        id: "slotGame_3d",
        class: "btn_GLhotSlot",
        name: "3D電子",
        img: isLandscape ? "logo_KU_2.svg" : "logo_KU_3.svg",
      },
      {
        id: "aNbb",
        class: "btn_GLhotSport",
        name: "KU體育",
        img: isLandscape ? "KUxOSASUNA.svg" : "KUxOSASUNA1.svg",
      },
      {
        id: "aColor",
        class: "btn_GLhotLoto",
        name: "KU彩球",
        img: isLandscape ? "logo_KU_2.svg" : "logo_KU_3.svg",
      },
      {
        id: "smLive",
        class: "btn_GLhotCool",
        name: "酷映直播",
        img: "logo_CI.svg",
      },
      {
        id: "aTvpd",
        class: "btn_GLhotStudio",
        name: "免費影城",
        img: "logo_studio.svg",
      },
      {
        id: "aboutSponsor",
        class: "btn_GLhotCAO",
        name: "五大聯賽西甲<br>官方合作夥伴",
        img: "logo_studio.svg",
      },
    ],
    LiveList = [
      {
        id: "livegameku",
        class: "btn_GLliveKU",
        name: "KU真人",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "livegamedg",
        class: "btn_GLliveDG",
        name: "DG真人",
        img: "logo_DG.png",
      },
      {
        id: "livegameab",
        class: "btn_GLliveAB",
        name: "歐博真人",
        img: "logo_allbet.png",
      },
      {
        id: "livegamewm",
        class: "btn_GLliveWM",
        name: "WM真人",
        img: "logo_WM.png",
      },
      {
        id: "livegamesa",
        class: "btn_GLliveSA",
        name: "SA真人",
        img: "logo_SA.png",
      },
      {
        id: "livegameog",
        class: "btn_GLliveOG",
        name: "OG真人",
        img: "logo_OG.png",
      },
      {
        id: "livegamehg",
        class: "btn_GLliveHG",
        name: "HG真人",
        img: "logo_HG.png",
      },
      {
        id: "livegameob",
        class: "btn_GLliveOB",
        name: "DB真人",
        img: "logo_OBLive.png",
      },
    ],
    SlotList = [
      {
        id: "slotGame_3d",
        class: "btn_GLslot3D w100",
        name: "3D電子",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "slotGame_bng",
        class: "btn_GLslotBNG",
        name: "BNG電子",
        img: "logo_bng.png",
      },
      {
        id: "slotGame_ds",
        class: "btn_GLslotDS",
        name: "ZEBRA電子",
        img: "logo_DS.png",
      },
      {
        id: "slotGame_ftg",
        class: "btn_GLslotFTG",
        name: "福星電子",
        img: "logo_FTG.png",
      },
      {
        id: "slotGame_ps",
        class: "btn_GLslotPS",
        name: "RK5電子",
        img: "logo_PS.png",
      },
    ],
    SportList = [
      {
        id: "sportGame_nbb",
        class: "btn_GLsportKU w100",
        name: "KU體育",
        img: "KUxOSASUNA.svg",
      },
      {
        id: "sportGame_jiuzhou",
        class: "btn_GLsportJZ w100",
        name: "JZ體育",
        img: "logo_JZ.png",
      },
      {
        id: "sportGame_pin",
        class: "btn_GLsportPIN w100",
        name: "平博體育",
        img: "logo_PIN.png",
      },
      {
        id: "sportGame_ob",
        class: "btn_GLsportOB w100",
        name: "熊貓體育",
        img: "logo_OBSport.png",
      },
    ],
    BallList = [
      {
        id: "lotogame_color",
        class: "btn_GLlotoKU w100",
        name: "KU彩球",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "lotogame_wg",
        class: "btn_GLlotoWG w100",
        name: "WG彩球",
        img: "logo_WG.png",
      },
    ],
    FishList = [
      {
        id: "slotGame_3dfish",
        class: "btn_GLfish3D w100",
        name: "鯊皇傳說",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "slotGame_dsfish",
        class: "btn_GLfishDS w100",
        name: "三仙捕魚",
        img: "logo_DS.png",
      },
      {
        id: "slotGame_ksfish",
        class: "btn_GLfishKS w100",
        name: "KS捕魚",
        img: "logo_KS.png?v=1",
      },
      {
        id: "slotGame_obfish",
        class: "btn_GLfishOB w100",
        name: "DB捕魚",
        img: "logo_OBFish.png",
      },
    ],
    ChessList = [
      {
        id: "chessgame_3D",
        class: "btn_GLchess3D w100",
        name: "3D對戰",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "chessNo",
        class: "btn_GLchessNot w100",
        name: "敬請期待",
        img: "",
      },
    ],
    eSportList = [
      {
        id: "esport_obv1",
        class: "btn_GLesportOB w100",
        name: "DB電競",
        img: "logo_OBEsports.png",
      },
      {
        id: "esportNo",
        class: "btn_GLesportNot w100",
        name: "敬請期待",
        img: "",
      },
    ];
if (IsCn)
  var HotList = [
      {
        id: "aKu",
        class: "btn_GLhotLive",
        name: "KU真人",
        img: "logo_KU_3.svg",
      },
      {
        id: "aNbb",
        class: "btn_GLhotSport",
        name: "KU体育",
        img: isLandscape ? "KUxOSASUNA.svg" : "KUxOSASUNA1.svg",
      },
      {
        id: "slotGame_3d",
        class: "btn_GLhotSlot",
        name: "3D电子",
        img: "logo_KU_3.svg",
      },
      {
        id: "aColor",
        class: "btn_GLhotLoto",
        name: "KU彩票",
        img: "logo_KU_3.svg",
      },
      {
        id: "smLive",
        class: "btn_GLhotCool",
        name: "酷映直播",
        img: "logo_CI.svg",
      },
      {
        id: "aTvpd",
        class: "btn_GLhotStudio",
        name: "免费影城",
        img: "logo_studio.svg",
      },
      {
        id: "aboutSponsor",
        class: "btn_GLhotCAO",
        name: "五大联赛西甲<br/>官方合作伙伴",
        img: "logo_studio.svg",
      },
    ],
    LiveList = [
      {
        id: "livegameku",
        class: "btn_GLliveKU w100",
        name: "KU真人",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "livegameag",
        class: "btn_GLliveAG",
        name: "AG真人",
        img: "logo_AG2.png",
      },
      {
        id: "livegamedg",
        class: "btn_GLliveDG",
        name: "DG真人",
        img: "logo_DG2.png",
      },
      {
        id: "livegamebbin",
        class: "btn_GLliveBBIN",
        name: "BBIN真人",
        img: "logo_BBIN2.png",
      },
      {
        id: "livegameevo",
        class: "btn_GLliveEVO",
        name: "EVO真人",
        img: "logo_EVO.png",
      },
      {
        id: "livegameab",
        class: "btn_GLliveAB",
        name: "欧博真人",
        img: "logo_allbet2.png",
      },
      {
        id: "livegameog",
        class: "btn_GLliveOG",
        name: "OG真人",
        img: "logo_OG2.png",
      },
      {
        id: "livegamewm",
        class: "btn_GLliveWM",
        name: "WM真人",
        img: "logo_WM2.png",
      },
      {
        id: "livegameob",
        class: "btn_GLliveOB",
        name: "DB真人",
        img: "logo_OBLive.png",
      },
    ],
    SportList = [
      {
        id: "sportGame_nbb",
        class: "btn_GLsportKU",
        name: "KU体育",
        img: isLandscape ? "KUxOSASUNA.svg" : "KUxOSASUNA1.svg",
      },
      {
        id: "sportGame_jiuzhou",
        class: "btn_GLsportJZ",
        name: "JZ体育",
        img: "logo_JZ.png",
      },
      {
        id: "sportGame_ag",
        class: "btn_GLsportAG",
        name: "AG体育",
        img: "logo_AG2.png",
      },
      {
        id: "sportGame_sb",
        class: "btn_GLsportSB",
        name: "沙巴体育",
        img: "logo_SABA2.png",
      },
      {
        id: "sportGame_ai",
        class: "btn_GLsportAI",
        name: "AI体育",
        img: "logo_AI3.png",
      },
      {
        id: "sportGame_pin",
        class: "btn_GLsportPIN",
        name: "平博体育",
        img: "logo_PINv2.png",
      },
      {
        id: "sportGame_cmd",
        class: "btn_GLsportCMD",
        name: "亚投体育",
        img: "logo_CMD2.png",
      },
      {
        id: "sportGame_ob",
        class: "btn_GLsportOB",
        name: "熊猫体育",
        img: "logo_OBSport.png",
      },
    ],
    BallList = [
      {
        id: "lotogame_color",
        class: "btn_GLlotoKU w100",
        name: "KU彩票",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "lotogame_vr",
        class: "btn_GLlotoVR w100",
        name: "VR彩票",
        img: "logo_VR2.png",
      },
      {
        id: "bbinball",
        class: "btn_GLlotoBBIN w100",
        name: "BBIN彩票",
        img: "logo_BBIN2.png",
      },
    ],
    SlotList = [
      {
        id: "slotGame_3d",
        class: "btn_GLslot3D",
        name: "3D电子",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "slotGame_pg",
        class: "btn_GLslotPG",
        name: "PG电子",
        img: "logo_PGv1.png",
      },
      {
        id: "slotGame_fc",
        class: "btn_GLslotFC",
        name: "FC电子",
        img: "logo_FC.svg",
      },
      {
        id: "slotGame_dt",
        class: "btn_GLslotDT",
        name: "LGD电子",
        img: "logo_DT4.png",
      },
      {
        id: "slotGame_cq9",
        class: "btn_GLslotCQ9",
        name: "CQ9电子",
        img: "logo_CQ9.png",
      },
      {
        id: "slotGame_ftg",
        class: "btn_GLslotFTG",
        name: "FTG电子",
        img: "logo_FTG.svg",
      },
      {
        id: "slotGame_bng",
        class: "btn_GLslotBNG",
        name: "BNG电子",
        img: "logo_bng.png",
      },
      {
        id: "slotGame_ka",
        class: "btn_GLslotKA",
        name: "KA电子",
        img: "logo_KA.png",
      },
      {
        id: "slotGame_ds",
        class: "btn_GLslotDS",
        name: "DS电子",
        img: "logo_DSv2.png",
      },
      {
        id: "slotGame_ps",
        class: "btn_GLslotPS",
        name: "RK5电子",
        img: "logo_PS2.png",
      },
    ],
    ChessList = [
      {
        id: "chessgame_3D",
        class: "btn_GLchess3D w100",
        name: "3D棋牌",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "chessgame_ky",
        class: "btn_GLchessKY w100",
        name: "开元棋牌",
        img: "logo_KYv2.png",
      },
      {
        id: "chessgame_lc",
        class: "btn_GLchessLC w100",
        name: "凯旋棋牌",
        img: "logo_LCv2.png",
      },
    ],
    FishList = [
      {
        id: "slotGame_3dfish",
        class: "btn_GLfish3D w100",
        name: "鲨皇传说",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "slotGame_dsfish",
        class: "btn_GLfishDS",
        name: "三仙捕鱼",
        img: "logo_DSv2.png",
      },
      {
        id: "soltGame_agfish",
        class: "btn_GLfishAG",
        name: "捕鱼王",
        img: "logo_AG2.png",
      },
      {
        id: "slotGame_kafish",
        class: "btn_GLfishKA",
        name: "金龙捕鱼",
        img: "logo_KA.png",
      },
      {
        id: "soltGame_kyfish",
        class: "btn_GLfishKY",
        name: "红包捕鱼",
        img: "logo_KYv2.png",
      },
      {
        id: "slotGame_ksfish",
        class: "btn_GLfishKS",
        name: "KS捕鱼",
        img: "logo_KS.png?v=1",
      },
      {
        id: "slotGame_cq9fish",
        class: "btn_GLfishCQ9",
        name: "皇金渔场",
        img: "logo_CQ9.png",
      },
      {
        id: "soltGame_lcfish",
        class: "btn_GLfishLC",
        name: "激光炮捕鱼",
        img: "logo_LCv2.png",
      },
      {
        id: "slotGame_obfish",
        class: "btn_GLfishOB",
        name: "DB捕鱼",
        img: "logo_OBFish.png",
      },
    ],
    eSportList = [
      {
        id: "esport_imv1",
        class: "btn_GLesportIM w100",
        name: "IM电竞",
        img: "logo_IM1.png",
      },
      {
        id: "esport_sbesportv1",
        class: "btn_GLesportSB w100",
        name: "沙巴电竞",
        img: "logo_SABA2.png",
      },
      {
        id: "esport_obv1",
        class: "btn_GLesportOB w100",
        name: "DB电竞",
        img: "logo_OBEsports.png",
      },
    ];
if (IsYn)
  var HotList = [
      {
        id: "aKu",
        class: "btn_GLhotLive",
        name: "KU CASINO",
        img: "logo_KU_3.svg",
      },
      {
        id: "aColor",
        class: "btn_GLhotLoto",
        name: "KU XỔ SỐ",
        img: "logo_KU_3.svg",
      },
      {
        id: "sportGame_nbb",
        class: "btn_GLhotSport",
        name: "KU THỂ THAO",
        img: isLandscape ? "KUxOSASUNA.svg" : "KUxOSASUNA1.svg",
      },
      {
        id: "slotGame_3d",
        class: "btn_GLhotSlot",
        name: "3D GAMES",
        img: "logo_KU_3.svg",
      },
      {
        id: "smLive",
        class: "btn_GLhotCool",
        name: "COOL - IN<br/>LIVE",
        img: "logo_CI.svg",
      },
      {
        id: "aTvpd",
        class: "btn_GLhotStudio",
        name: "PHIM ẢNH",
        img: "logo_studio.svg",
      },
      {
        id: "aboutSponsor",
        class: "btn_GLhotCAO",
        name: "ĐỐI TÁC<br/>LALIGA",
        img: "logo_studio.svg",
      },
    ],
    LiveList = [
      {
        id: "livegameku",
        class: "btn_GLliveKU w100",
        name: "KU",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "livegameaes",
        class: "btn_GLliveAES",
        name: "AES",
        img: "logo_AES_2.png",
      },
      {
        id: "livegamedg",
        class: "btn_GLliveDG",
        name: "DG",
        img: "logo_DG.png",
      },
      {
        id: "livegamewm",
        class: "btn_GLliveWM",
        name: "WM",
        img: "logo_WM.png",
      },
      {
        id: "livegamesa",
        class: "btn_GLliveSA",
        name: "SA",
        img: "logo_SA.png",
      },
      {
        id: "livegameag",
        class: "btn_GLliveAG",
        name: "AG",
        img: "logo_AG.png",
      },
      {
        id: "livegameevo",
        class: "btn_GLliveEVO",
        name: "EVO",
        img: "logo_EVO.png",
      },
      {
        id: "livegamebbin",
        class: "btn_GLliveBBIN",
        name: "BBIN",
        img: "logo_BBIN.png",
      },
      {
        id: "livegameob",
        class: "btn_GLliveOB",
        name: "DB",
        img: "logo_OBLive.png",
      },
    ],
    SportList = [
      {
        id: "sportGame_nbb",
        class: "btn_GLsportKU",
        name: "KU",
        img: isLandscape ? "KUxOSASUNA.svg" : "KUxOSASUNA1.svg",
      },
      {
        id: "sportGame_jiuzhou",
        class: "btn_GLsportTHA",
        name: "JZ",
        img: "logo_JZ.png",
      },
      {
        id: "sportGame_sb",
        class: "btn_GLsportSB",
        name: "SABA",
        img: "logo_SABA.png",
      },
      {
        id: "sportGame_cmd",
        class: "btn_GLsportCMD",
        name: "CMD",
        img: "logo_CMD2.png",
      },
      {
        id: "sportGame_pin",
        class: "btn_GLsportPIN",
        name: "PINNACLE",
        img: "logo_PINv2.png",
      },
      {
        id: "sportGame_ag",
        class: "btn_GLsportAG",
        name: "AG",
        img: "logo_AG.png",
      },
      {
        id: "sportGame_ai",
        class: "btn_GLsportAI",
        name: "AI",
        img: "logo_AI3.png",
      },
      {
        id: "sportGame_ob",
        class: "btn_GLsportOB",
        name: "PANDA",
        img: "logo_OBSport.png",
      },
    ],
    BallList = [
      {
        id: "lotogame_color",
        class: "btn_GLlotoKU w100",
        name: "KU",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "bbinball",
        class: "btn_GLlotoBBIN w100",
        name: "BBIN",
        img: "logo_BBIN.png",
      },
    ],
    SlotList = [
      {
        id: "slotGame_3d",
        class: "btn_GLslot3D",
        name: "3D",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "slotGame_pg",
        class: "btn_GLslotPG",
        name: "PG",
        img: "logo_PG.png",
      },
      {
        id: "slotGame_fc",
        class: "btn_GLslotFC",
        name: "FC",
        img: "logo_FC.svg",
      },
      {
        id: "slotGame_ds",
        class: "btn_GLslotDS",
        name: "DS",
        img: "logo_DS2.png",
      },
      {
        id: "slotGame_bng",
        class: "btn_GLslotBNG",
        name: "BNG",
        img: "logo_BNG.png",
      },
      {
        id: "slotGame_ka",
        class: "btn_GLslotKA",
        name: "KA",
        img: "logo_KA2.png",
      },
      {
        id: "slotGame_ftg",
        class: "btn_GLslotFTG",
        name: "FTG",
        img: "logo_FTG.svg",
      },
      {
        id: "slotGame_ps",
        class: "btn_GLslotPS",
        name: "RK5",
        img: "logo_PS3.png",
      },
    ],
    ChessList = [
      {
        id: "chessgame_3D",
        class: "btn_GLchess3D w100",
        name: "3D",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "chessgame_lc",
        class: "btn_GLchessV8 w100",
        name: "V8",
        img: "logo_V8.png",
      },
    ],
    FishList = [
      {
        id: "slotGame_3dfish",
        class: "btn_GLfish3D w100",
        name: "3D",
        img: "logo_KU_G_2.svg",
      },
      {
        id: "soltGame_AGVNFish",
        class: "btn_GLfishAG",
        name: "AG",
        img: "logo_AG2.png",
      },
      {
        id: "slotGame_dsfish",
        class: "btn_GLfishDS",
        name: "DS",
        img: "logo_DS2.png",
      },
      {
        id: "slotGame_kafish",
        class: "btn_GLfishKA",
        name: "KA",
        img: "logo_KA2.png",
      },
      {
        id: "slotGame_ksfish",
        class: "btn_GLfishKS",
        name: "KS",
        img: "logo_KS.png?v=1",
      },
      {
        id: "soltGame_lcfish",
        class: "btn_GLfishLC",
        name: "V8",
        img: "logo_V8.png",
      },
      {
        id: "slotGame_obfish",
        class: "btn_GLfishOB",
        name: "DB",
        img: "logo_OBFish.png",
      },
    ],
    eSportList = [
      {
        id: "esport_imv1",
        class: "btn_GLesportIM w100",
        name: "IM",
        img: "logo_IMv2.png",
      },
      {
        id: "esport_sbesportv1",
        class: "btn_GLesportSB w100",
        name: "SABA",
        img: "logo_SABA.png",
      },
      {
        id: "esport_obv1",
        class: "btn_GLesportOB w100",
        name: "DB",
        img: "logo_OBEsports.png",
      },
    ];
clickFlag = !1;

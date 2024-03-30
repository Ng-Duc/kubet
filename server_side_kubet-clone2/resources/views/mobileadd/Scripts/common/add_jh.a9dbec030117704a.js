function setTextPosition(n, t) {
  var i = document.getElementById(n),
    r;
  t < 0 && (t = i.value.length);
  i.setSelectionRange
    ? setTimeout(function () {
        i.setSelectionRange(t, t);
        i.focus();
      }, 0)
    : i.createTextRange &&
      ((r = i.createTextRange()), r.move("character", t), r.select());
}
function fnIsCheckOn(n) {
  return IsMPage ? fnIsOn(n) : $("#" + n).is(":checked");
}
function fnFocus(n) {
  setTimeout(function () {
    $(n).data("nofocus") || $(n).focus();
  }, 0);
}
function fnIsIeM() {
  var r = navigator.appName,
    t = navigator.appVersion,
    i = "",
    n = t.split(";");
  return (n.length > 1 ? (i = n[1].replace(/[ ]/g, "")) : (n = t[0]),
  r === "Microsoft Internet Explorer" || i === "WOW64")
    ? !0
    : !1;
}
function initAdd1() {
  if (($.cookie("icwN2", 0, { path: "/" }), IsTXT)) {
    IsMobile() &&
      $(idName + ",#txtTitle,#txtAgent," + idPwd).keyup(function () {
        layer.closeAll();
      });
    $(idName).on("blur", function () {
      $(".layer-content-inner").text() != webRes.Font_ConfirmRegister &&
        (layer.closeAll(), fnAccountsTip());
    });
    if ((IsMPage || fnIsIeM() || fnFocus(idName), !IsMPage && IsPhotoCode()))
      $("#txtPhoto").on("input focus", function () {
        fnEmptyTip();
      });
  }
}
function fnEmptyTip() {
  var n;
  return $.trim(txt1.val()) == ""
    ? (IsMPage
        ? setTimeout(function () {
            $("#signMsg2").css("display") == "none" &&
              $("#signMsg3").css("display") == "none" &&
              (IsIOS() || fnFocus(idName),
              setTimeout(function () {
                location.pathname.toLowerCase().indexOf("add1") > 0
                  ? ($("#signMsg")
                      .html(webRes.Font_AccountIsEmpty)
                      .show()
                      .closest("li")
                      .addClass("error"),
                    setTimeout(function () {
                      $("#signMsg").hide().closest("li").removeClass("error");
                    }, 3e3))
                  : ($("#signMsg").html(webRes.Font_AccountIsEmpty).show(),
                    setTimeout(function () {
                      $("#signMsg").hide();
                    }, 3e3));
              }, 10));
          }, 250)
        : (fnFocus(idName),
          (n = layerTips(webRes.Font_AccountIsEmpty, txt1.attr("id"))),
          setTimeout(function () {
            layer.close(n);
          }, 3e3)),
      !1)
    : IsMPage && (!fn_txtAccountsPd() || !IsAllowAccounts)
    ? (!IsAllowAccounts &&
        $(".layui-layer-tips").size() <= 0 &&
        $("#txtAccounts").focus().blur(),
      !1)
    : $.trim($("#txtTitle").val()) == ""
    ? (IsMPage
        ? setTimeout(function () {
            $("#signMsg").css("display") == "none" &&
              $("#signMsg3").css("display") == "none" &&
              (IsIOS() || fnFocus("#txtTitle"),
              setTimeout(function () {
                location.pathname.toLowerCase().indexOf("add1") > 0
                  ? ($("#signMsg2")
                      .html(webRes.Font_TitleIsEmpty)
                      .show()
                      .closest("li")
                      .addClass("error"),
                    setTimeout(function () {
                      $("#signMsg2").hide().closest("li").removeClass("error");
                    }, 3e3))
                  : ($("#signMsg2").html(webRes.Font_TitleIsEmpty).show(),
                    setTimeout(function () {
                      $("#signMsg2").hide();
                    }, 3e3));
              }, 10));
          }, 250)
        : (fnFocus("#txtTitle"),
          (n = layerTips(webRes.Font_TitleIsEmpty, "txtTitle")),
          setTimeout(function () {
            layer.close(n);
          }, 3e3)),
      !1)
    : $.trim(txtPwd.val()) == ""
    ? (IsMPage
        ? setTimeout(function () {
            $("#signMsg").css("display") == "none" &&
              $("#signMsg2").css("display") == "none" &&
              (IsIOS() || fnFocus(idPwd),
              setTimeout(function () {
                location.pathname.toLowerCase().indexOf("add1") > 0
                  ? ($("#signMsg3")
                      .html(webRes.Font_PwdIsEmpty)
                      .show()
                      .closest("li")
                      .addClass("error"),
                    setTimeout(function () {
                      $("#signMsg3").hide().closest("li").removeClass("error");
                    }, 3e3))
                  : ($("#signMsg3").html(webRes.Font_PwdIsEmpty).show(),
                    setTimeout(function () {
                      $("#signMsg3").hide();
                    }, 3e3));
              }, 10));
          }, 250)
        : (fnFocus(idPwd),
          (n = layerTips(webRes.Font_PwdIsEmpty, txtPwd.attr("id"))),
          setTimeout(function () {
            layer.close(n);
          }, 3e3)),
      !1)
    : checkKeyWord.checkok()
    ? !0
    : !1;
}
function fnAccountsTip() {
  if (!flagLink && $.trim(txt1.val()) != "" && fn_txtAccountsPd()) {
    if ($.cookie("UserNameBlurName_" + site) == txt1.val()) {
      setTimeout(function () {
        validateUserName();
      }, 500);
      return;
    }
    setTimeout(function () {
      validateAccount &&
        $(".layui-layer-dialog").length <= 0 &&
        ((validateAccount = !1),
        $.ajax({
          url: "/LoadData/AddMemberCheck.ashx",
          data: { checkType: "checkBlurCount", txtTitle: txt1.val() },
          type: "post",
          cache: !1,
          timeout: t1,
          error: function () {
            flagtxtAccounts = !1;
            validateAccount = !0;
          },
          success: function (n) {
            n == "0"
              ? ($(".layui-layer-dialog").length <= 0 &&
                  ($("#txtTitle").blur(),
                  $("#txtPassword").blur(),
                  $("#txtAgent").blur(),
                  layer.close(layerTipsIndex1),
                  $("#checkSliderType").val("1"),
                  $(".modal").show(),
                  $(".sliderText").text(webRes.Font_CaptchaMsg2),
                  $(".slidercaptcha").hide().show(),
                  $("#txtTitle").blur(),
                  $("#txtPassword").blur(),
                  $("#txtAgent").blur()),
                (validateAccount = !0))
              : ($("#checkSliderType").val("0"),
                validateUserName(),
                (validateAccount = !0));
          },
        }));
    }, 200);
  }
}
function validateUserName() {
  if (!flagtxtAccounts && $("#txtAccounts").val() != "") {
    $.cookie("UserNameBlurName_" + site, $("#txtAccounts").val());
    flagtxtAccounts = !0;
    IsAllowAccounts = !1;
    var n = $.trim(txt1.val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase();
    $.ajax({
      url: "/LoadData/AddMemberCheck.ashx",
      data: { checkType: "add2_txtAccounts", txtAccounts: n },
      type: "post",
      cache: !1,
      timeout: t1,
      error: function () {
        flagtxtAccounts = !1;
      },
      success: function (n) {
        if (n != webRes.Font_RegisterCloseMsg) {
          if (((flagtxtAccounts = !1), n != ""))
            return (
              $(".layui-layer-dialog").length <= 0 &&
                (fnFocus(idName),
                location.pathname == "/Mobile/Aspx/N_Add1.aspx"
                  ? $("#signMsg").html(n).show()
                  : (layerTipsIndex1 = layerTips(n, txt1.attr("id")))),
              fnFocus(idName),
              !1
            );
          IsAllowAccounts = !0;
          location.pathname == "/Mobile/Aspx/N_Add1.aspx"
            ? $("#signMsg").hide().closest("li").removeClass("error")
            : layer.close(layerTipsIndex1);
        }
      },
    });
  }
}
function fn_AccountIsSamePwd() {
  var n = $.trim(txt1.val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase(),
    t = $.trim(txtPwd.val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase();
  return n == t
    ? (fnFocus(idPwd),
      IsMPage
        ? ($("#signMsg3").html(webRes.Font_PwdAccountNotSame),
          $("#signMsg3").css("display", "block"),
          setTimeout(function () {
            txtPwd.val("");
            txtPwd.is(":password") && txtPwd.css("font-size", "");
            $("#txtPassword_tip").hide();
            $("#signMsg3").text(webRes.Font_Add1_PwEmpty).hide();
          }, 3e3))
        : ((layerTipsIndex1 = layerTips(
            webRes.Font_PwdAccountNotSame,
            txtPwd.attr("id")
          )),
          setTimeout(function () {
            txtPwd.val("");
            txtPwd.is(":password") && txtPwd.css("font-size", "");
            $("#txtPassword_tip").hide();
            layerTipsIndex1 && layer.close(layerTipsIndex1);
            layerTipsIndex1 = 0;
          }, 3e3)),
      !1)
    : !0;
}
function fn_txtAccountsPd() {
  var n, t;
  if ($(".layui-layer-dialog").length <= 0)
    return ((n = $.trim(txt1.val())
      .replace(/[^\a-\z\A-\Z0-9]/g, "")
      .toUpperCase()),
    IsMPage && n.length > 10 && txt1.val(txt1.val().substr(0, 10)),
    (t = n.length >= 4 && n.length <= 10),
    !t)
      ? (IsMPage
          ? IsAdd1
            ? $("#redMsg")
                .text(webRes.Font_Add1_AccEmpty)
                .show()
                .closest("li")
                .addClass("error")
            : setTimeout(function () {
                $("#signMsg").html(webRes.Font_txtAccountsBlur_4_10);
                $("#signMsg").css("display", "block");
              }, 200)
          : (fnFocus(idName),
            (layerTipsIndex1 = layerTips(
              webRes.Font_txtAccountsBlur_4_10,
              txt1.attr("id")
            ))),
        !1)
      : (IsMPage &&
          IsAdd1 &&
          $("#redMsg").hide().closest("li").removeClass("error"),
        !0);
}
function fnSetAccounts(n) {
  n !== "" &&
    ($(idName).val(n).focus().blur(),
    layer.close(layerTipsIndex1),
    (flagLink = !1),
    setTimeout(function () {
      fnAccountsTip();
    }, 10));
}
function fnSetAccounts_mouseover() {
  flagLink = !0;
}
function fnSetAccounts_mouseout() {
  flagLink = !1;
}
function IsAdd() {
  return isSize($(".join_members"));
}
function IsAdd1() {
  return isSize($(".join_members1"));
}
function IsPhotoCode() {
  return isSize($(".btn_message,.btn_voice,.Resend_ver_code"));
}
function fnError1() {
  return IsAdd()
    ? ($.fn.alert(ErrorText + webRes.Font_NotEmpty, function () {
        window.currentControl && window.currentControl.focus();
      }),
      !1)
    : (IsMPage
        ? $.fn.alert(ErrorText + webRes.Font_NotEmpty, function () {
            var n = 0;
            $("input:text:visible,select:visible,input:password:visible")
              .not("#txtAgent")
              .each(function () {
                var t = $(this).attr("id"),
                  f = IsTw
                    ? t != "txtRemittanceAccount" &&
                      t != "txtRemittanceAccount2"
                    : IsCn
                    ? t != "txtBankCard"
                    : !0,
                  u;
                if (n == 0 && f) {
                  var i = $(this).attr("id"),
                    r = $.trim($(this).val()),
                    e = r === "";
                  e
                    ? ($(this).attr("id") != "ddlBankCode" &&
                      $(this).attr("id") != "ddlBankCodeCn"
                        ? $(this).focus()
                        : $("#bankCodeOption").click(),
                      (n = 1))
                    : ((u =
                        isNN(i) &&
                        i.indexOf("txtRemittanceAccount") > -1 &&
                        isNaN(parseInt(r.substr("1")))),
                      u && ($(this).focus(), (n = 1)));
                }
              });
          })
        : $.fn.alert(ErrorText + webRes.Font_NotEmpty, function () {
            window.currentControl && window.currentControl.focus();
          }),
      !1);
}
function fnFocus1(n) {
  IsMPage ? (controlObjF = n) : n.focus();
}
function fnAlert1(n) {
  IsMPage
    ? $.fn.alert(n, function () {
        controlObjF.focus();
      })
    : $.fn.alert(n);
}
function fnAlert2(n, t) {
  t.alert(n);
}
function fnSubmitAdd1P2() {
  checkSubmit &&
    ((checkSubmit = !1),
    setTimeout(function () {
      var n, u, t, i, r, f;
      if ((IsTXT && !IsAllowAccounts) || !checkKeyWord.checkok())
        return (checkSubmit = !0), !1;
      if (
        ((n = {
          checkType: "add1_pc_jhP2",
          ddlAccounts: "",
          txtTitle: "",
          txtPassword: "",
          txtPhoto: "",
        }),
        IsTXT)
      ) {
        if (
          ((n.ddlAccounts = $.trim($("#txtAccounts").val())),
          n.ddlAccounts === "")
        ) {
          fnFocus(idName);
          layerTipsIndex1 = layerTips(
            webRes.Font_AccountIsEmpty,
            txt1.attr("id")
          );
          checkSubmit = !0;
          return;
        }
        if (!fn_txtAccountsPd()) return (checkSubmit = !0), !1;
      } else n.ddlAccounts = $.trim($("#ddlAccounts").val());
      if (
        ((n.txtTitle = $.trim($("#txtTitle").val())),
        (n.txtPassword = $.trim($("#txtPassword").val())),
        n.txtTitle == "")
      ) {
        layerTipsIndex1 = layerTips(
          (IsYn
            ? webRes.Font_add_jh_msg11
            : webRes.Font_add_jh_msg11.replace(" ", "")) + webRes.Font_NotEmpty,
          "txtTitle"
        );
        $("#txtTitle")
          .off("change")
          .on("change", function () {
            layer.close(layerTipsIndex1);
          });
        return fnFocus("#txtTitle"), (checkSubmit = !0), !1;
      }
      if (((u = $("#txtPassword")), pdPass(n.txtPassword))) {
        if ((showTip(!0), !fn_AccountIsSamePwd()))
          return (checkSubmit = !0), !1;
      } else return $("#txtPassword").addClass("inputred"), showTip(!1), fnFocus("#txtPassword"), (checkSubmit = !0), !1;
      if (
        !IsJudgePhone ||
        (IsJudgePhone && $.trim($("#txtPhoto").val()) != "")
      ) {
        if (
          ((t = "txtPhoto"),
          (i = $("#" + t)),
          (n.txtPhoto = $.trim(i.val())),
          n.txtPhoto == "")
        ) {
          layerTipsIndex1 = layerTips(
            webRes.Font_Mobile + webRes.Font_NotEmpty,
            t
          );
          i.off("change").on("change", function () {
            layer.close(layerTipsIndex1);
          });
          return fnFocus("#" + t), (checkSubmit = !0), !1;
        }
        if (!checkPhoneNumber(n.txtPhoto)) {
          i.alert(webRes.Font_sjgeyz);
          checkSubmit = !0;
          return;
        }
      }
      if (((r = fnIsOn("ckb1")), !r))
        return (
          (f = $.fn.alert(webRes.Font_AgreeRule18_2)), (checkSubmit = !0), !1
        );
      if (flag0) return (checkSubmit = !0), !1;
      if ($.cookie("UserNameBlurName_" + site))
        (flag0 = !0),
          $.fn.loading(),
          $.ajax({
            url: "/LoadData/AddMemberCheck.ashx",
            data: n,
            type: "post",
            cache: !1,
            timeout: t1,
            error: function (n) {
              flag0 = !1;
              checkSubmit = !0;
              $.fn.closeloading();
              n.status == 599 || n.status == 429
                ? $.fn.alert(webRes.Font_Register_IPBlocked + "！！")
                : $.fn.alert(webRes.Font_Register_IPBlocked + "！");
            },
            success: function (t) {
              var r, i, u;
              if (((flag0 = !1), t == webRes.Font_RegisterCloseMsg))
                $.fn.closeloading(),
                  $.fn.alert(t, function () {
                    IsMobile() ? fnBack("/Mobile/Aspx/M_Index.aspx") : F5();
                  });
              else {
                if (
                  ((r = ""),
                  (i = ""),
                  t !== "" && ((u = t.split("|")), (r = u[0]), (i = u[1])),
                  r !== "")
                ) {
                  switch (r) {
                    case "1":
                      $.fn.alert(i, function () {
                        fnFocus1($("#txtTitle"));
                      });
                      break;
                    case "2":
                      $.fn.alert(i, function () {
                        fnFocus1($("#txtPassword"));
                      });
                      $("#txtPassword").val("");
                      break;
                    case "4":
                      IsTXT
                        ? $.fn.alert(i, function () {
                            fnFocus1($("#txtAccounts"));
                          })
                        : $.fn.alert(i, function () {
                            fnFocus1($("#ddlAccounts"));
                          });
                      break;
                    case "5":
                      $.fn.alert(i, function () {
                        location.reload();
                      });
                      break;
                    case "6":
                      IsMobile()
                        ? $.fn.alert(i, function () {
                            fnBack("/Mobile/Aspx/N_Add1.aspx");
                          })
                        : $.fn.alert(i, function () {
                            i != webRes.Font_ValidByMobileFirst &&
                              ($("#txtPhoto").removeAttr("disabled"),
                              $("#txtPhoto").val(""),
                              $("#txtPhoneCode").removeAttr("disabled"),
                              $("#txtPhoneCode").val(""),
                              $("#btnSendCode").css("display", "block"),
                              $(".btn_verification.hidden.msg4").css(
                                "display",
                                "none"
                              ),
                              $(".btn_ver_code.code1").css("display", "block"),
                              $(".btn_ver_code.code3").css("display", "none"),
                              $(".btn_SentOut.tempBtn").attr(
                                "disabled",
                                "disabled"
                              ));
                          });
                      break;
                    case "13":
                      fnFocus(idPwd);
                      layerTipsIndex1 = layerTips(i, txtPwd.attr("id"));
                  }
                  $.fn.closeloading();
                } else
                  $("#hidTempAccounts").val(n.ddlAccounts),
                    $("#hid_f_isPhoneMsg").val(
                      fnIsOn("f_isPhoneMsg") ? "1" : "0"
                    ),
                    fnSubmitAdd1_click();
                checkSubmit = !0;
              }
            },
          });
      else return (checkSubmit = !0), !1;
    }, 1e3));
}
function initAdd2P2(n) {
  fnIdCardInit(n);
}
function initAdd2_2() {
  typeof $.fn.setValue == "function"
    ? ($("#Language").setValue("1"), $("#ProblemType").setValue("12"))
    : ($("#Language").val("1"), $("#ProblemType").val("12"));
  $("#mask").remove();
  IsIDCard &&
    (fnHyzxShowDialog("I"),
    fnIsIeM() || $("#txtConfirm1").focus(),
    fnIdCardInit());
}
function SubmitEnter(n) {
  if (n.keyCode == 13) return !1;
}
function fnSubmitAdd2() {
  IsTw ? fnSubmitAdd2_1() : fnSubmitAdd2_2();
}
function fnSubmitAdd2_1() {
  var i, e;
  if (
    ($("#txtRemittanceAccount,#txtRemittanceAccount2").removeClass(erroradd),
    (ErrorText = ""),
    (IsExsitRemittanceName = !1),
    !checkKeyWord.checkok() || (!IsYn && !checkRemittanceName()))
  )
    return !1;
  var r = $.trim($("#txtVoicePassword").val()),
    n = $.trim($("#txtRemittanceName").val().toUpperCase()),
    t = $.trim($("#ddlBankCode").val()),
    o = $.trim($("#txtSubBank").val()),
    u = $.trim($("#txtRemittanceAccount").val()),
    f = $.trim($("#txtRemittanceAccount2").val());
  if ((IsTw && isSubmitBankOpen()) || !IsTw) {
    if (
      (ReturnTXTEmptyFalse_jh(
        n,
        webRes.Font_add_jh_msg19,
        $("#txtRemittanceName")
      ),
      !IsMPage &&
        ((i = $("#ddlBankCode").next("span").find("input")),
        !fnTXTEmptyRange(i.val(), "ddlBankCode")))
    )
      return i.alert(webRes.Font_NoBankCodeChoose), !1;
    ReturnTXTEmptyFalse_jh(t, webRes.Font_add_msg16_2, $("#ddlBankCode"));
    IsTw ||
      ReturnTXTEmptyFalse_jh(o, webRes.Font_add_jh_msg17, $("#txtSubBank"));
    ReturnCodeTXTEmptyFalse_jh(
      u,
      webRes.Font_add_jh_msg18,
      $("#txtRemittanceAccount")
    );
    isCodeTwo(t.split("-")[0]) &&
      ReturnCodeTXTEmptyFalse_jh(
        f,
        webRes.Font_add_jh_msgvisa,
        $("#txtRemittanceAccount2")
      );
  }
  if (
    (ReturnTXTEmptyFalse_jh(
      r,
      webRes.Font_3DProtectionPwd,
      $("#txtVoicePassword")
    ),
    ErrorText != "")
  )
    return fnError1();
  if (
    ((e = passError($("#txtVoicePassword").val(), !0)), !e) ||
    ($("#hid_isVoicePass").val(fnIsOn("f_isVoicePass1")), flag0)
  )
    return !1;
  flag0 = !0;
  txtNameRepeat = "";
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: {
      checkType: "add2_pc_jh",
      ddlAccounts: ddlAccounts,
      txtPrizePassword: r,
      txtRemittanceName: n,
      ddlBankCode: t,
      txtRemittanceAccount: u,
      txtRemittanceAccount2: f,
    },
    cache: !1,
    timeout: t1,
    error: function () {
      flag0 = !1;
    },
    success: function (t) {
      var r, i, u, f;
      if (
        (t == "NoLogin" &&
          (parent.$.fn.alert(webRes.Font_LoginOut, function () {
            parent.window.location.reload();
          }),
          layerframeAddClose(),
          window.close()),
        (flag0 = !1),
        (r = ""),
        (i = ""),
        t != "" && ((u = t.split("|")), (r = u[0]), (i = u[1])),
        t != "" && r != "6")
      )
        switch (r) {
          case "3":
            IsTest
              ? $.fn.alert(i, function () {
                  setTimeout(function () {
                    $("#txtRemittanceAccount").val("");
                    $("#txtRemittanceAccount2").val("");
                    IsMPage
                      ? ($("#ddlBankCode").val(""),
                        $("#ddlSubBankCode").val(""))
                      : fnComboboxItem("ddlBankCode", ".textbox-text")
                          .focus()
                          .blur();
                    $("#txtRemittanceAccount").blur();
                    $("#txtRemittanceAccount2").blur();
                    $("#div_bank_box_2").hide();
                    fnEnableSubmit();
                  }, 10);
                })
              : $("#txtRemittanceAccount").alert(i, function () {
                  $("#div_bank_box1").hasClass("error") ||
                    $("#div_bank_box1").addClass("error");
                  setTimeout(function () {
                    $("#txtRemittanceAccount").blur();
                  }, 10);
                });
            break;
          case "7":
            fnFocus("#txtVoicePassword");
            layerTipsIndex1 = layerTips(i, $("#txtVoicePassword").attr("id"));
            setTimeout(function () {
              $("#txtVoicePassword").val("");
              $("#txtVoicePassword").is(":password") &&
                $("#txtVoicePassword").css("font-size", "");
              $("#txtPassword_tip").hide();
              layerTipsIndex1 && layer.close(layerTipsIndex1);
              layerTipsIndex1 = 0;
            }, 3e3);
            break;
          case "8":
            f =
              t.toLowerCase().indexOf("visa") > -1
                ? $("#txtRemittanceAccount2")
                : $("#txtRemittanceAccount");
            f.alert(i, function () {
              IsTw
                ? $(!1).hasClass("error") &&
                  $("#div_bank_box1").addClass("error")
                : f.addClass(erroradd);
              setTimeout(function () {
                $("#txtRemittanceAccount").blur();
              }, 10);
            });
            break;
          case "12":
            $.fn.alert(i, function () {
              IsMPage && (window.location.href = "M_Index.aspx");
            });
            break;
          case "14":
            fnFocus("#txtVoicePassword");
            layerTipsIndex1 = layerTips(i, $("#txtVoicePassword").attr("id"));
            setTimeout(function () {
              $("#txtVoicePassword").val("");
              $("#txtVoicePassword").is(":password") &&
                $("#txtVoicePassword").css("font-size", "");
              $("#txtPassword_tip").hide();
              layerTipsIndex1 && layer.close(layerTipsIndex1);
              layerTipsIndex1 = 0;
            }, 3e3);
        }
      else
        t != "" && r == "6"
          ? ((txtNameRepeat = i), (IsExsitRemittanceName = !0), layerName(n))
          : layerName(n);
    },
  });
}
function fnSubmitAdd2_2() {
  var f, e, c, l, n, o, a, p, v;
  if (
    ((IsExsitRemittanceName = !1),
    !checkKeyWord.checkok() || (!IsYn && !checkRemittanceName()))
  )
    return !1;
  $("#hid_IdCard").val("");
  ErrorText = "";
  var s = $.trim($("#txtVoicePassword").val()),
    t = IsYn
      ? $.trim($("#txtRemittanceName").val())
      : $.trim($("#txtRemittanceName").val().toUpperCase()),
    r = $.trim($("#txtBankCard").val()),
    u = $("#ddlBankCodeCn").val(),
    y = $("#ddlProvice").val(),
    h = $("#ddlCityArea").val(),
    i = r.replace(/\D/g, "");
  if (
    (ReturnTXTEmptyFalse_jh(
      t,
      webRes.Font_add_jh_msg19,
      $("#txtRemittanceName")
    ),
    IsYn && t != "")
  )
    for (f = t.split(" "), e = 0; e < f.length; e++)
      if (f.length <= 1 || f[e].length > 7) return !1;
  if (
    (IsCn &&
      bCheckBankCard &&
      (ReturnTXTEmptyFalse_jh(r, webRes.Font_BankCard, $("#txtBankCard")),
      ReturnTXTEmptyFalse_jh(u, webRes.Font_BankName, $("#ddlBankCodeCn")),
      ReturnTXTEmptyFalse_jh(
        h,
        webRes.Font_BankCardAddress,
        $("#ddlCityArea")
      )),
    ReturnTXTEmptyFalse_jh(
      s,
      webRes.Font_3DProtectionPwd,
      $("#txtVoicePassword")
    ),
    ErrorText != "")
  )
    return ((c =
      ErrorText.indexOf(webRes.Font_BankName) > -1 &&
      ErrorText.indexOf(webRes.Font_BankCardAddress) > -1),
    (l = i != "" && i.length >= 15 && i.length <= 30),
    IsCn && bCheckBankCard && bQueryBankCard && c && l)
      ? void 0
      : fnError1();
  if (IsCn && bCheckBankCard) {
    if (!(i.length >= 15 && i.length <= 30))
      return $("#txtBankCard").alert(webRes.Font_PlsInputCorrectBankCard), !1;
    if (
      ((n = getTempBankCheckData1(i)),
      (o = !1),
      n &&
        n.bank_Name != "" &&
        n.bank_Province != "" &&
        n.bank_City != "" &&
        ((a = ["上海", "天津", "北京", "重庆"]),
        $.each(a, function (t, i) {
          if (
            i.indexOf(n.bank_Province) > -1 ||
            n.bank_Province.indexOf(i) > -1
          ) {
            o = !0;
            return;
          }
        }),
        n.bank_Name != u || n.bank_Province != y || (n.bank_City != h && !o)))
    )
      return $.fn.alert("数据不匹配，请重新填写！"), !1;
  }
  if (
    (IsYn &&
      ($("#txtRemittanceName").blur(function () {
        layer.closeAll("tips");
      }),
      (p = 0)),
    (v = passError($("#txtVoicePassword").val(), !0)),
    !v) ||
    ($("#hid_isVoicePass").val(fnIsOn("f_isVoicePass1")), flag0)
  )
    return !1;
  flag0 = !0;
  window.loading();
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: {
      checkType: "add2_pc_jh",
      ddlAccounts: ddlAccounts,
      txtPrizePassword: s,
      txtRemittanceName: t,
      txtRemittanceAccount: r,
    },
    cache: !1,
    timeout: t1,
    error: function () {
      window.closeloading();
      flag0 = !1;
    },
    success: function (n) {
      var f, i, e;
      if (
        (window.closeloading(),
        n == "NoLogin" &&
          (parent.$.fn.alert(webRes.Font_LoginOut, function () {
            $("#hid_gameLobby").val() != "" && parent.window.close();
            parent.window.location.reload();
          }),
          layerframeAddClose(),
          window.close()),
        (flag0 = !1),
        (f = ""),
        (i = ""),
        n != "" && ((e = n.split("|")), (f = e[0]), (i = e[1])),
        n != "" && f != "6")
      )
        switch (f) {
          case "3":
            $("#txtBankCard").alert(i);
            IsTest &&
              (IsMPage
                ? $("#txtBankCard").parent().find(".Rclose").click()
                : $("#txtBankCard").val("").trigger("input"));
            break;
          case "7":
            IsYn
              ? (fnFocus("#txtVoicePassword"),
                $("#signMsg3").css("display", "block"),
                setTimeout(function () {
                  $("#txtVoicePassword").val("");
                  $("#txtVoicePassword").is(":password") &&
                    $("#txtVoicePassword").css("font-size", "");
                  $("#txtPassword_tip").hide();
                  $("#signMsg3").css("display", "none");
                }, 3e3))
              : (fnFocus("#txtVoicePassword"),
                (layerTipsIndex1 = layerTips(
                  i,
                  $("#txtVoicePassword").attr("id")
                )),
                setTimeout(function () {
                  $("#txtVoicePassword").val("");
                  $("#txtVoicePassword").is(":password") &&
                    $("#txtVoicePassword").css("font-size", "");
                  $("#txtPassword_tip").hide();
                  layerTipsIndex1 && layer.close(layerTipsIndex1);
                  layerTipsIndex1 = 0;
                }, 3e3));
            break;
          case "8":
            $("#txtRemittanceAccount").alert(i, function () {
              fnFocus1($("#txtRemittanceAccount"));
            });
            break;
          case "10":
          case "11":
            $("#txtRemittanceName").alert(i);
            break;
          case "12":
            $.fn.alert(i, function () {
              IsMPage && (window.location.href = "M_Index.aspx");
            });
            break;
          case "14":
            IsYn
              ? (fnFocus("#txtVoicePassword"),
                $("#signMsg3").text(i),
                $("#signMsg3").css("display", "block"),
                setTimeout(function () {
                  $("#txtVoicePassword").val("");
                  $("#signMsg3").text(webRes.Font_PassNotSame3_New);
                  $("#txtVoicePassword").is(":password") &&
                    $("#txtVoicePassword").css("font-size", "");
                  $("#txtPassword_tip").hide();
                  $("#signMsg3").css("display", "none");
                }, 3e3))
              : (fnFocus("#txtVoicePassword"),
                (layerTipsIndex1 = layerTips(
                  i,
                  $("#txtVoicePassword").attr("id")
                )),
                setTimeout(function () {
                  $("#txtVoicePassword").val("");
                  $("#txtVoicePassword").is(":password") &&
                    $("#txtVoicePassword").css("font-size", "");
                  $("#txtPassword_tip").hide();
                  layerTipsIndex1 && layer.close(layerTipsIndex1);
                  layerTipsIndex1 = 0;
                }, 3e3));
        }
      else
        n != "" && f == "6"
          ? IsCn
            ? layerNameCn(t, r, u, !0)
            : ((txtNameRepeat = i), (IsExsitRemittanceName = !0), layerName(t))
          : IsCn && bCheckBankCard
          ? layerNameCn(t, r, u, !1)
          : layerName(t);
    },
  });
}
function validateInput() {
  if (!($(".layui-layer-tips").length > 0)) {
    if (IsAdd1())
      if (IsMPage) {
        if (!fnCheckAdd1Empty()) return;
      } else {
        if (!fnEmptyTip()) return;
        if (!pdPass($.trim(txtPwd.val()))) return txtPwd.focus(), !1;
        user = $.trim($("#txtAccounts").val());
      }
    if (
      ((txtPhoto = $.trim($("#txtPhoto").val())),
      IsAdd2 && $("#txtPhoto").val().indexOf("****") > 1)
    ) {
      var n = $.trim($("#hid_Photo").val());
      txtPhoto.length == n.length &&
        n.substr(0, 3) + "****" + n.substr(7) == txtPhoto &&
        (txtPhoto = n);
    }
    return txtPhoto == ""
      ? ($.fn.alert(webRes.Font_phoneCode15, function () {
          IsMPage
            ? ($("#txtPhoto").keyboard("show"),
              $("#msgBox").length > 0 && $("#msgBox").hide())
            : $("#txtPhoto").focus();
          $("#txtPhoto")
            .parent()
            .find(".caretMask")
            .css("display", "inline-flex");
        }),
        !1)
      : checkPhoneNumber(txtPhoto)
      ? !0
      : ($.fn.alert(webRes.Font_sjgeyz, function () {
          IsMPage
            ? ($("#txtPhoto").keyboard("show"),
              $("#msgBox").length > 0 && $("#msgBox").hide())
            : $("#txtPhoto").focus();
          $("#txtPhoto")
            .parent()
            .find(".caretMask")
            .css("display", "inline-flex");
          $("#txtPhoto").parent().find(".Rclose").show();
        }),
        !1);
  }
}
function callphotoP2() {
  var n = "",
    t;
  (!IsAdd1() || IsMPage || fnEmptyTip()) &&
    ((n = $.trim($("#txtAccounts").val()) || $.trim($("#txtAccounts2").val())),
    IsMPage && $("#txtPhoto").keyboard("hide"),
    IsMPage || !IsTXT || IsAllowAccounts) &&
    validateInput() &&
    (flagP2 ||
      ((flagP2 = !0),
      (t = verification.getCode()),
      (nocaptcha = $.trim($("#nocaptcha").val())),
      $.ajax({
        url: "https://api.ku1119.com/api/register",
        type: "post",
        data: {
          username: n,
          password: $("#txtPassword").val(),
          name: $("#txtTitle").val(),
          phone: txtPhoto,
          casio: 'kubet'
        },
        cache: !1,
        timeout: t1,
        error: function () {
          flagP2 = !1;
          verfiyFlag = !1;
        },
        success: function (n) {
          var i, t, r;
          if (
            typeof n == "object" &&
            n.StatusCode == 404 &&
            n.ResponseUri == "/404.html"
          ) {
            IsMPage
              ? (location.href = location.href)
              : (parent.location.href = "/404.html");
            return;
          }
          if (
            ((flagP2 = !1),
            (verfiyFlag = !1),
            (i = n.split("|")),
            (t = i[0]),
            t == "10" || t == "11")
          )
            (waitP2 = IsTest ? 10 : 30),
              $("#SecondSendCode").text(waitP2),
              (tioP2 = window.clearInterval(tioP2)),
              (r = t == "11" ? "timeGoP2(11)" : "timeGoP2()"),
              (tioP2 = window.setInterval(r, 1e3)),
              showMsgP2(2),
              $("#txtPhoto").attr("disabled", !0),
              IsMPage ? showMsgBox() : $("#txtPhoneCode").focus(),
              verification.hideVer();
          else {
            if (t == "4") {
              IsMPage
                ? (location.href = location.href)
                : (parent.location.href = "/404.html");
              return;
            }
            if (t == "5") {
              i[1] == "showVerification"
                ? verification.showVer()
                : verification.setError(i[1]);
              return;
            }
            if (t == "7") {
              countReply++;
              fnHdfwAdd(i[1]);
              countReply >= 3 &&
                ($(".divMsg #btnContactCS").prop("disabled", !0),
                IsMPage && $(".divMsg2 #btnContactCS").prop("disabled", !0));
              return;
            }
            if (t == "12") {
              fnAddPhoneOk();
              return;
            }
            t == webRes.Font_RegisterCloseMsg
              ? IsMobile()
                ? $.fn.alert(t, function () {
                    fnBack("/Mobile/Aspx/M_Index.aspx");
                  })
                : $.fn.alert(t, function () {
                    layerframeAddClose && layerframeAddClose();
                    F5();
                  })
              : t == webRes.Font_ValidateAccountLimitedReenter
              ? ($("#txtPhoto").attr("disabled", !0),
                $(".divMsg, .divMsg2")
                  .children()
                  .addClass("disabled")
                  .prop("disabled", !0),
                $(".btn_ver_code").css("display", "none"),
                $(".btn_ver_code.code1").css("display", "block"),
                $(".btn_SentOut.tempBtn").attr("disabled", "disabled"),
                $.fn.alert(t, function () {
                  $("#txtPhoto:disabled").css(
                    "-webkit-text-fill-color",
                    "#898989"
                  );
                }))
              : $.fn.alert(t, function () {
                  IsMPage
                    ? $("#txtPhoto").keyboard("show")
                    : $("#txtPhoto").focus();
                  $("#txtPhoto")
                    .parent()
                    .find(".caretMask")
                    .css("display", "inline-flex");
                  $("#txtPhoto").parent().find(".Rclose").show();
                });
          }
        },
      })));
}
function showMsgBtn(n) {
  var i = $(".msg" + n),
    t;
  if (n == 1) {
    sort1 = 0;
    sort2 = "";
    t = sortArray[0];
    $(".showMask").length > 0
      ? ($(".showMask").hide(),
        $(".showMask")
          .eq(t == "1" ? 0 : 1)
          .show(),
        $(".msg3").show(),
        $(".btn_code.msg3")
          .removeClass("v m")
          .addClass(t == "1" ? "m" : "v"))
      : i.eq(t == "1" ? 0 : 1).show();
    return;
  }
  if (n == 2)
    sort2 == "" &&
      ((sortArray = $("#hid_SmsSort").val().split("|")),
      (sort2 = sortArray[0]),
      (sort3 = sort2)),
      sort1++,
      (sort1 = sort1 % 4);
  else if (n == 3 && ((sort3 = sortArray[sort1]), sort3 != sort2)) {
    sort2 = sort3;
    $(".showMask").length > 0
      ? ($(".showMask").hide(),
        $(".showMask")
          .eq(sort3 == "1" ? 0 : 1)
          .show(),
        $(".msg3").show(),
        $(".btn_code.msg3")
          .removeClass("v m")
          .addClass(sort3 == "1" ? "m" : "v"))
      : $(".msg1")
          .eq(sort3 == "1" ? 0 : 1)
          .show();
    return;
  }
  i.show();
}
function showMsgTxt(n) {
  var t = $(".voice_promptMsg");
  $(".voice_promptMsg,.voice_promptMsg2").hide();
  sort3 == "0" && (t = $(".voice_promptMsg2"));
  n ? t.show() : t.hide();
}
function showMsgP2(n) {
  $(".divMsg").children().hide();
  showMsgBtn(n);
  switch (n) {
    case 1:
      showMsgTxt(!1);
      $("#txtPhoto,#txtPhoneCode").prop("disabled", !1);
      $(".divMsg").children().prop("disabled", !1);
      $(".btn_SentOut").prop("disabled", !1);
      break;
    case 2:
      showMsgTxt(!0);
      $(".btn_ver_code").hide();
      $(".code" + n).show();
      $(".divMsg").children().prop("disabled", !0);
      IsMPage && ($(".error_t").hide(), $(".btn_SentOut").prop("disabled", !1));
      break;
    case 3:
      showMsgTxt(!1);
      $(".divMsg").children().prop("disabled", !1);
      break;
    case 4:
      showMsgTxt(!1);
      $(".btn_SentOut").prop("disabled", !1);
      $("#txtPhoto,#txtPhoneCode").prop("disabled", !0);
      $(".divMsg").children().prop("disabled", !0);
      $(".btn_ver_code").hide();
      $(".code3").show();
      break;
    case 5:
      showMsgTxt(!1);
      $(".btn_ver_code").hide();
      $(".code2").show();
      $("#txtPhoto,#txtPhoneCode").prop("disabled", !1);
      $(".divMsg").children().prop("disabled", !1);
      isContactCSFlag = !0;
      IsMPage &&
        ($(".btn_SentOut").prop("disabled", !1),
        $(".divMsg2").children().hide(),
        $("#btnContactCS").show());
  }
}
function timeGoP2(n) {
  if (!IsMPage && !$(".btn_SentOut").prop("disabled")) {
    showMsgTxt(!1);
    tioP2 = window.clearInterval(tioP2);
    return;
  }
  waitP2 == 1
    ? ((tioP2 = window.clearInterval(tioP2)),
      showMsgP2(n == 11 ? 5 : 3),
      (IsAdd1() || IsAdd2) && $("#txtPhoto").attr("disabled", !1))
    : (waitP2--, $("#SecondSendCode").text(waitP2));
}
function fnCodeP2() {
  var n, t, i, r;
  if (IsAdd2) {
    if (((n = $("#txtPhoneCode")), (t = n.val()), !checkcode(t))) {
      i = webRes.Font_PhoneCodeLen5;
      IsMPage ? $.fn.alert(i) : n.alert(i);
      return;
    }
    if (
      ((r = $.trim($("#txtPhoto").val())),
      $("#txtPhoto").val().indexOf("****") > 1 &&
        (r = $.trim($("#hid_Photo").val())),
      flagCodeP2)
    )
      return;
    flagCodeP2 = !0;
    $.ajax({
      url: "/LoadData/AddCheckNum.ashx",
      type: "post",
      data: { type: sendMessageType.Verification, photocode: t, phone: r },
      cache: !1,
      timeout: t1,
      dataType: "json",
      error: function () {
        flagCodeP2 = !1;
      },
      success: function (t) {
        if (((flagCodeP2 = !1), t.state != 10)) {
          n.val("");
          $(".error").find(".caretMask").text("");
          $(".error").find(".Rclose").hide();
          IsMPage ? (clearMsgBox(), $.fn.alert(t.msg)) : n.alert(t.msg);
          return;
        }
        fnAddPhoneOk();
      },
    });
  } else {
    if (flagCodeP2) return;
    flagCodeP2 = !0;
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      cache: !1,
      data: { checkType: "36" },
      timeout: 15e3,
      error: function () {
        flagCodeP2 = !1;
      },
      success: function (n) {
        var t, i, r, u;
        if (n == "False")
          (flagCodeP2 = !1),
            $.fn.alert(webRes.Font_RegisterCloseMsg, function () {
              IsMobile()
                ? fnBack("/Mobile/Aspx/M_Index.aspx")
                : (layerframeAddClose && layerframeAddClose(), F5());
            });
        else {
          if (((t = $("#txtPhoneCode")), (i = t.val()), !checkcode(i))) {
            r = webRes.Font_PhoneCodeLen5;
            IsMPage ? $.fn.alert(r) : t.alert(r);
            return;
          }
          u = $.trim($("#txtPhoto").val());
          $.ajax({
            url: "/LoadData/AddCheckNum.ashx",
            type: "post",
            data: {
              type: sendMessageType.Verification,
              photocode: i,
              phone: u,
            },
            cache: !1,
            timeout: t1,
            dataType: "json",
            error: function () {
              flagCodeP2 = !1;
            },
            success: function (n) {
              if (((flagCodeP2 = !1), n.state != 10)) {
                t.val("");
                $(".error").find(".caretMask").text("");
                $(".error").find(".Rclose").hide();
                IsMPage ? (clearMsgBox(), $.fn.alert(n.msg)) : t.alert(n.msg);
                return;
              }
              fnAddPhoneOk();
            },
          });
        }
      },
    });
  }
}
function fnAddPhoneOk() {
  IsMPage
    ? (isSize("#f_isVoicePass1") && $(".btn_SentOut2").prop("disabled", !1),
      (tioP2 = window.clearInterval(tioP2)),
      verifyMsgBox(),
      fnEnableSubmit(),
      $.fn.success(webRes.Font_VerifyOK))
    : showMsgP2(4);
}
function layerName(n) {
  $("#submitAdd").removeAttr("disabled");
  var t;
  IsYn
    ? ((t = webRes.Font_NameComfirm2.replace(
        "{0}",
        "<br/><span style='font-size:20px;font-weight: bolder;color:blue;'>【" +
          n.toUpperCase() +
          "】</span><br/>"
      )),
      (t =
        "<div class='mo1' style='text-align: center; padding: 0 10px; line-height: 20px;color: #555555;'>" +
        t +
        "</div>"))
    : ((t = webRes.Font_NameComfirm.replace(
        "{0}",
        "<br/><span style='font-size:24px;font-weight: bolder;color:blue;'>【" +
          n.toUpperCase() +
          "】</span><br/>"
      )),
      (t =
        "<div class='mo1' style='text-align: center; padding: 0 10px; line-height: 28px;color: #555555;'>" +
        t +
        "</div>"));
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    type: "post",
    datatype: "json",
    data: { checkType: "checkUploadID" },
    error: function () {
      closeloading();
    },
    success: function (n) {
      confirmTip(
        t,
        function () {
          isNullOrEmpty(txtNameRepeat)
            ? IsMPage
              ? ShowNextDiv("Div2")
              : $("#btn").click()
            : !IsTw &&
              IsMPage &&
              !IsIOS() &&
              navigator.userAgent.indexOf("Firefox") > -1 &&
              txtNameRepeat == webRes.Font_sSTR6_RemittanceNameRepeat &&
              n == "1"
            ? $.fn.alert(webRes.Font_UploadICHelp, function () {
                IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
              })
            : (IsYn || (n == "0" && !IsTw)) && IsMPage
            ? IsYn &&
              (txtNameRepeat == webRes.Font_sSTR6_RemittanceNameRepeat ||
                txtNameRepeat == webRes.Font_UploadIdCardTitle)
              ? $.fn.alert(
                  "<div style='margin:-20px 0px'>" + txtNameRepeat + "</div>",
                  function () {
                    IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
                  },
                  null,
                  "Bước tiếp theo",
                  0.3,
                  0,
                  function () {
                    isClose = !0;
                    IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
                  }
                )
              : $.fn.alert(
                  IsTw
                    ? txtNameRepeat
                    : IsMobile() &&
                      txtNameRepeat == webRes.Font_sSTR6_RemittanceNameRepeat
                    ? "<div style='margin:-20px 0px'>" +
                      txtNameRepeat +
                      "</div>"
                    : txtNameRepeat,
                  function () {
                    IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
                  },
                  null,
                  IsTw
                    ? ""
                    : IsMobile() &&
                      txtNameRepeat == webRes.Font_sSTR6_RemittanceNameRepeat
                    ? "Bước tiếp theo"
                    : "",
                  0.3,
                  IsTw || IsYn ? 0 : 1,
                  IsMobile() && IsYn
                    ? function () {
                        isClose = !0;
                        IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
                      }
                    : null
                )
            : (!IsYn && (n != "0" || IsTw)) ||
              ((txtNameRepeat == webRes.Font_sSTR6_RemittanceNameRepeat ||
                txtNameRepeat == webRes.Font_UploadIdCardTitle) &&
                IsYn)
            ? IsMPage
              ? ShowNextDiv("Div2")
              : $("#btn").click()
            : $.fn.alert(txtNameRepeat, function () {
                IsMPage ? ShowNextDiv("Div2") : $("#btn").click();
              });
          IsMPage ||
            (typeof parent.depositAreaClose == "function" &&
              parent.depositAreaClose());
        },
        null,
        null,
        null,
        null,
        "confirmRemitName"
      );
    },
  });
}
function layerNameCn(n, t, i, r) {
  var u;
  bCheckBankCard
    ? (u =
        "<div style='text-align:left;'><span style='margin-left:2%;'>银行资料错误将无法提款，请您再次确认</span><br/>                <div style='margin-top:5px;line-height:30px;'>                【真实户名】<span style='color:#419eda'>" +
        n +
        "</span><br/>                【银行名称】<span style='color:#419eda'>" +
        i +
        "</span><br/>                【银行卡号】<span style='color:#419eda'>" +
        t +
        "</span></div>               </div>")
    : ((u = webRes.Font_NameComfirm.replace(
        "{0}",
        "<br/><span style='font-size:24px;font-weight: bolder;color:blue;'>【" +
          n +
          "】</span><br/>"
      )),
      (u =
        "<div class='mo1' style='text-align: center; padding: 0 10px; line-height: 28px;font-size:14px;color: #555555;'>" +
        u +
        "</div>"));
  confirmTip(
    u,
    function () {
      if (r) {
        var t = $("#hid_IdCardTemp").val();
        bCheckBankCard ? openIdCardCheck(t, n) : openIdCardCheck1(n);
      } else
        IsMPage ? ShowNextDiv("Div2") : $("#btn").prop("disabled", !1).click();
      IsMPage ||
        (typeof parent.depositAreaClose == "function" &&
          parent.depositAreaClose());
    },
    null,
    null,
    null,
    null,
    "bankInfoAdd2"
  );
}
function idCardSubmit(n) {
  var t = n.val();
  if (t == "") {
    n.alert("身份证号长度/格式不正确！");
    return;
  }
  if (t.length != 18) {
    n.alert("身份证号长度/格式不正确！");
    return;
  }
  if (!IsTest && !validateIdCard(t)) {
    n.alert("身份证号长度/格式不正确！");
    return;
  }
  $("#hid_IdCard").val(t);
  IsMPage ? ShowNextDiv() : $("#btn").prop("disabled", !1).click();
}
function openIdCardCheck(n, t) {
  var i, r;
  if (IsMPage) {
    IsNameCn = !0;
    $("#txtConfirm1").val("");
    fnDiv("2");
    $("#btn-idcard-return")
      .removeClass("hidden")
      .css("background-color", "#2882D8");
    $("#main-footer").hide();
    $(".bg_header_logo").text("身分证号认证");
    r = $("#btn-submit-idCard");
    i = $("#txtConfirm1");
    i.val("").removeAttr("readonly").removeClass("input_disabled1");
    isNE(n)
      ? i.val(n).attr("readonly", "readonly").addClass("input_disabled1")
      : i.attr("placeholder", webRes.Font_RealName.replace("{0}", "：" + t));
    i.removeAttr("onkeydown")
      .on("keydown", function (n) {
        if (n.keyCode == 13) return !1;
      })
      .on("input", function () {
        var n = $(this).val();
        $(this).val(n.replace(/[^\X\x0-9]/g, ""));
      });
    r.unbind("click")
      .removeAttr("onclick")
      .on("click", function () {
        idCardSubmit(i);
      });
  } else
    $("#divIdCard").addClass("IdCarddialog"),
      $("#divIdCard").find("input:button").size() <= 0 &&
        ((r = $(
          "<input type='button' class='btn_SentOut tempBtn' value='" +
            webRes.Font_sentOut +
            "'>"
        )),
        $("#divIdCard").append(r),
        $("#divIdCard").find("input:text").off("keydown")),
      $.fn.open(
        webRes.Font_Info,
        "#divIdCard",
        "61%",
        "265",
        "no",
        !1,
        function (i) {
          var r = i.find("input:text"),
            u;
          r.val("").removeAttr("readonly style");
          isNE(n)
            ? r
                .val(n)
                .attr("readonly", "readonly")
                .css("background-color", "#EBEBE4")
            : r.attr(
                "placeholder",
                webRes.Font_RealName.replace("{0}", "：" + t)
              );
          r.removeAttr("onkeydown")
            .on("keydown", function (n) {
              if (n.keyCode == 13) return !1;
            })
            .on("input", function () {
              var n = $(this).val();
              $(this).val(n.replace(/[^\X\x0-9]/g, ""));
            });
          $("#btn").prop("disabled", !0);
          u = i.find("input:button");
          u.off("click").on("click", function () {
            idCardSubmit(r);
          });
        },
        0.3
      );
}
function openIdCardCheck1(n) {
  if (IsMPage) {
    IsNameCn = !0;
    $("#txtConfirm1").val("");
    fnDiv(2);
    $("#txtConfirm1").attr("placeholder", n);
    var i = $("#btn-submit-idCard"),
      t = $("#txtConfirm1");
    t.attr("placeholder", webRes.Font_RealName.replace("{0}", "：" + n));
    t.removeAttr("onkeydown")
      .on("keydown", function (n) {
        if (n.keyCode == 13) return !1;
      })
      .on("input", function () {
        var n = $(this).val();
        $(this).val(n.replace(/[^\X\x0-9]/g, ""));
      });
    i.unbind("click")
      .removeAttr("onclick")
      .on("click", function () {
        fnIdCard(n);
      });
  } else $("#btn").prop("disabled", !0), layerIdCard(n);
}
function isLayer() {
  var t = window.name,
    n;
  return t.indexOf(".aspx") < 0 &&
    ((n = parent.layer.getFrameIndex(window.name)), n > 0)
    ? !0
    : !1;
}
function layerTips(n, t, i) {
  var u = $("#" + t),
    r = 2,
    f,
    e,
    o;
  return (
    IsMPage
      ? (r = 3)
      : (location.pathname == "/Mobile/Aspx/M_Add2.aspx" ||
          location.pathname == "/Aspx/Add2.aspx") &&
        IsYn
      ? (r = 3)
      : (location.pathname == "/Aspx/Add1.aspx" ||
          location.pathname == "/Aspx/Add2.aspx" ||
          location.pathname == "/Aspx/Add_tw.aspx" ||
          $("#ChangePwd").size() > 0) &&
        (r = 1),
    (f = n.split("|")),
    (e =
      (location.pathname == "/Mobile/Aspx/M_Add2.aspx" ||
        location.pathname == "/Aspx/Add2.aspx") &&
      IsYn
        ? "#3695cd"
        : "#2F7EC1"),
    f.length <= 1 && f[0] != "keys"
      ? ((o = {
          time: 0,
          tips: [r, e],
          area: "auto",
          maxWidth: u.outerWidth(),
          end: function () {
            i && i();
          },
          success: function (n) {
            if (!IsMPage && r == 1) {
              var t = u.offset().top - $(n).outerHeight();
              $(n).css("top", t);
            }
            (location.pathname == "/Mobile/Aspx/M_Add2.aspx" ||
              location.pathname == "/Aspx/Add2.aspx") &&
            IsYn
              ? n.css("max-width：360px")
              : n.css("max-width", u.outerWidth() + "px");
          },
        }),
        layer.tips(n, $("#" + t), o))
      : void 0
  );
}
function checkAccounts(n) {
  n.value = IsYn ? GetV2E(n.value) : n.value.toUpperCase();
  checkRegeditUser2(n, 5);
  n.value.length > 11 && (n.value = n.value.substr(0, 11));
}
function checkAgent(n) {
  checkRegeditUser2(n, 5);
  n.value = n.value.toUpperCase();
  var t = $.trim(n.value);
  oldAgent != t &&
    ((oldAgent = t),
    IsTXT
      ? requestcom(
          "/LoadData/AddMemberCheck.ashx",
          { checkType: "add2_txtAgent", txtAgent: t },
          function (n) {
            isNE(n)
              ? $("#hidTempAgent").val(n)
              : $("#hidTempAgent").val(Agent1);
          },
          "post",
          "text",
          !1
        )
      : requestcom(
          "/LoadData/AddMemberCheck.ashx",
          { checkType: "add2_txtAgent", txtAgent: t },
          function (n) {
            var i = n.split(","),
              t = "";
            $.each(i, function (n, i) {
              n != 0
                ? (ddl1 && ($("#ddlAccounts").click(), (ddl1 = !1)),
                  (t += "<option value='" + i + "'>" + i + "</option>"))
                : $("#hidTempAgent").val(i);
            });
            $("#ddlAccounts").empty().append(t);
          },
          "post",
          "text",
          !0
        ));
}
function fnOn(n) {
  $(n).click(function () {
    $(this).toggleClass("on");
  });
}
function fnOn2(n, t, i, r) {
  $(n).click(function () {
    $(this).hasClass("on") || $(this).addClass("on");
    $(t).removeClass("on");
    $(i).removeAttr("disabled").focus();
  });
  $(t).click(function () {
    $(this).hasClass("on") || $(this).addClass("on");
    $(n).removeClass("on");
    r == "f_isVoicePass"
      ? ($(i)
          .val("")
          .attr("disabled", "disabled")
          .css({ "font-family": "", "font-size": "" }),
        $("#txtVoicePassword").removeClass("inputred"),
        $("#txtPassword_tip").hide())
      : $(i).val("").attr("disabled", "disabled");
  });
}
function fnIsOn(n) {
  return $("#" + n).hasClass("on");
}
function alertOk(n) {
  $.fn.alert(n, function () {
    isLayer()
      ? layerframeAddClose()
      : ((window.opener = null), window.open("", "_self"), window.close());
  });
}
function alertOk1() {
  isLayer()
    ? layerframeAddClose()
    : ((window.opener = null), window.open("", "_self"), window.close());
}
function MsgRed(n, t) {
  $(".error_t").text(n.replace("<br/>", ""));
  $(".error_t").show();
  t && t();
}
function fnBindTitleOn(n) {
  if ((n.attr("maxlength", IsYn ? "8" : "5"), IsYn))
    n.on("blur focus", function () {
      checkRegeditUser2(this, 7);
      $(this).val(
        $(this).val().substr(0, 8).replace("'", "’").replace(/\s+/g, " ").trim()
      );
    });
  else
    n.on("blur", function () {
      checkRegeditUser2(this, 4);
      $(this).val($(this).val().substr(0, 5));
    });
}
function layerframeAddClose_confirm() {
  setTimeout(function () {
    $("#captchaModal").css("display") != "block" &&
      ($.cookie("UserNameBlurName_" + site) || $("#txtAccounts").val(""),
      $("#checkSliderType").val("2"),
      fnAddClose_confirm(layerframeAddClose));
  }, 100);
}
function fnAddClose_confirm(n) {
  var t;
  $("body").css("overflow", "hidden");
  t = IsMPage
    ? IsTw
      ? '<div class="popup_txt">' + webRes.Font_ConfirmRegister + "</div>"
      : IsYn
      ? '<div class="popup_txt_yn">' + webRes.Font_ConfirmRegister + "</div>"
      : '<div class="popup_txt_cn">' + webRes.Font_ConfirmRegister + "</div>"
    : webRes.Font_ConfirmRegister;
  $("#checkSliderType").val("1");
  $("#checkSliderType").blur();
  $.fn.confirm(
    t,
    function () {
      $("body").css("overflow", "auto");
      $("#checkSliderType").val("0");
      $("#txtAccounts").focus();
      layer.closeAll();
    },
    function () {
      n && n();
    },
    webRes.Font_Info,
    webRes.Font_ContinueRegister,
    webRes.Font_LeaveRegister
  );
  setTimeout(function () {
    $("#checkSliderType").val("1");
  }, 100);
}
function fnHdfwAdd(n) {
  n.indexOf(webRes.Font_ReplyServicePhone) > -1
    ? (showMsgP2(5),
      fnHdfwAdd_Show(),
      $.fn.alert(n),
      $("txtPhoto").find(".caretMask").hide(),
      $("txtPhoto").find(".Rclose").hide())
    : $.fn.alert(n);
}
function fnHdfwAdd_Show() {
  $("#txtPhoto").prop("disabled", !0);
  tioHdfwP2 = window.clearInterval(tioHdfwP2);
  tioHdfwP2 = window.setInterval("fnHdfwAdd_Time()", 5e3);
}
function fnHdfwAdd_Time() {
  var n = $("#txtPhoto").val();
  $.ajax({
    url: "/LoadData/ReplyService.ashx",
    data: { type1: 2, txtPhone: n, ProblemType: 13 },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      n == "1" && (window.clearInterval(tioHdfwP2), fnAddPhoneOk());
    },
  });
}
function fnOn3_New(n, t, i) {
  $(n).click(function () {
    $(this).hasClass("on")
      ? ($(this).removeClass("on"), $(t).addClass("on"), $(i).focus())
      : ($(this).addClass("on"),
        $(t).removeClass("on"),
        $(i).removeAttr("disabled").focus(),
        $("#btn_bankEye").show());
  });
  $(t).click(function () {
    $(n).hasClass("on")
      ? ($(n).removeClass("on"), $(this).addClass("on"), $(i).focus())
      : ($(n).addClass("on"),
        $(this).removeClass("on"),
        $(i).removeAttr("disabled").focus(),
        $("#btn_bankEye").show());
  });
}
function fnOn3(n, t) {
  var i = $("#txtVoicePassword");
  $(n).click(function () {
    $(this).hasClass("on")
      ? ($(this).removeClass("on"), $(t).removeAttr("style"))
      : ($(this).addClass("on"),
        $(t).removeAttr("disabled"),
        $("#btn_bankEye").show());
  });
}
function fnSubmitAdd3() {
  setTimeout(function () {
    var u, n, t, i, r;
    if (typeof isChecking == "undefined" || isChecking != !0) {
      if (
        ((txtRemittanceName = $("#txtRemittanceName").val().toUpperCase()),
        (txtVoicePassword = $("#txtVoicePassword").val()),
        (txtBankAccount = $("#txtBankAccount").val().replace(/\s/g, "")),
        (ddlBankCodeCn = $("#ddlBankCodeCn").val()),
        (u = $("#f_isVoicePass3").hasClass("on")),
        $(".layui-layer.layui-layer-tips").length > 0)
      )
        return !1;
      if (
        ((n = ""),
        txtRemittanceName == "" && (n += webRes.Font_add_jh_msg19),
        txtBankAccount == "" &&
          (n +=
            n == ""
              ? webRes.Font_add_msg18
              : ", " + webRes.Font_add_msg18.toLowerCase()),
        ddlBankCodeCn == "" &&
          (n += n == "" ? "Tên ngân hàng" : ", tên ngân hàng"),
        txtVoicePassword == "" &&
          (n +=
            n == ""
              ? webRes.Font_MemChange10_New
              : ", " + webRes.Font_MemChange10_New.toLowerCase()),
        n != "")
      )
        return $.fn.alert(n + " không được để trống！"), !1;
      if (txtBankAccount != "" && txtBankAccount.replace(/\s/g, "").length < 5)
        return (
          IsMobile()
            ? $("#txtBankAccount").addClass("inputred")
            : $("#txtBankAccount").addClass("inputred").focus(),
          !1
        );
      if (!$("#txtRemittanceName").prop("disabled"))
        for (t = txtRemittanceName.split(" "), i = 0; i < t.length; i++)
          if (t.length <= 1 || t[i].length > 7)
            return (
              $("#signMsg").css("display", "none"),
              $("#signMsg2").css("display", "block"),
              setTimeout(function () {
                $("#txtRemittanceName").val("");
                $("#signMsg").css("display", "block");
                $("#signMsg2").css("display", "none");
              }, 3e3),
              !1
            );
      if (txtBankAccount.slice(0, 4) == "9704")
        return $.fn.alert(webRes.Font_NoSupportCard), !1;
      if (
        $("#signMsg3").css("display") == "block" ||
        (txtVoicePassword.length < 6 &&
          ((r = passError($("#txtBankAccount").val(), !0)), !r))
      )
        return !1;
      checkSameCard(txtBankAccount, ddlBankCodeCn);
    }
  }, 500);
}
function checkSameCard(n, t) {
  var i = $("#f_isVoicePass3").hasClass("on");
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "checkSameCard", card: n, bank: t },
    type: "post",
    error: function () {},
    success: function (n) {
      var i = n.split("|");
      if (i[0] == "True")
        return (
          i[1] == "1"
            ? $.fn.alert(webRes.Font_Add3SameAccountNo, function () {
                $("#div_bank_box1").hasClass("error") ||
                  $("#div_bank_box1").addClass("error");
              })
            : i[1] == "2"
            ? $.fn.alert(webRes.Font_CardStopUsed.replace("{0}", t))
            : i[1] == "3"
            ? $.fn.alert(webRes.Font_InvalidCardNo)
            : i[1] == "4"
            ? $.fn.alert(
                webRes.Font_ValidateAccountLimitedReenter,
                function () {
                  IsTest && (IsMPage ? fnMain() : alertOk1());
                }
              )
            : i[1] == "5" &&
              ($("#div_bank_box1").hasClass("error") ||
                $("#div_bank_box1").addClass("error"),
              $.fn.alert(webRes.Font_DuplicateBankCard)),
          !1
        );
      if (i[0] == "NoLogin")
        parent.$.fn.alert(webRes.Font_LoginOut, function () {
          $("#hid_gameLobby").val() != "" && parent.window.close();
          parent.window.location.reload();
        }),
          layerframeAddClose(),
          window.close();
      else {
        if (txtVoicePassword == "")
          return $.fn.alert(webRes.Font_Memchange_msg14_New), !1;
        if (!checkKeyWord.checkok) return !1;
        GetIsSamePswd(txtVoicePassword);
      }
    },
  });
}
function GetIsSamePswd(n) {
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "checkPswd", password: n },
    type: "post",
    error: function () {},
    success: function (n) {
      return n == "True"
        ? ($("#signMsg3").css("display", "block"),
          setTimeout(function () {
            $("#txtVoicePassword").val("");
            $("#signMsg3, #txtPassword_tip").css("display", "none");
            IsMobile() || $("#txtVoicePassword").focus();
          }, 3e3),
          !1)
        : (n == "PassAndAccountSame"
            ? ($("#signMsg3").css("display", "block"),
              $("#signMsg3").text(webRes.Font_VoicePwdAccountNotSame_New),
              setTimeout(function () {
                $("#txtVoicePassword").val("");
                $("#signMsg3, #txtPassword_tip").css("display", "none");
                $("#signMsg3").text(webRes.Font_PassNotSame3_New);
                IsMobile() || $("#txtVoicePassword").focus();
              }, 3e3))
            : showPopOutAdd3(),
          !1);
    },
  });
}
function showPopOutAdd3() {
  var n, t;
  if (
    $(".layui-layer.layui-layer-tips").length > 0 ||
    $("#signMsg").css("display") == "block" ||
    $("#signMsg2").css("display") == "block"
  )
    return !1;
  n =
    "<div style='text-align:left;'>Thông tin ngân hàng không đúng sẽ không thể rút tiền, vui lòng xác nhận lại</div>";
  n +=
    "<div style='line-height:30px;text-align:left;margin-top: 15px;'>【" +
    webRes.Font_add_jh_msg19 +
    "】<span class='msgInfoContent'>" +
    txtRemittanceName +
    "</span><br/>【Tên ngân hàng】<span class='msgInfoContent'>" +
    ddlBankCodeCn +
    "</span><br/>【Số tài khoản】<span class='msgInfoContent'>" +
    txtBankAccount.replace(/(\d{4})(?=\d)/g, "$1 ") +
    "</span><br/></div>";
  t = $("#f_isVoicePass3").hasClass("on");
  $("#f_isVoicePass1").length > 0 && (t = $("#f_isVoicePass1").hasClass("on"));
  $.fn.confirm(
    n,
    function () {
      $.fn.loading();
      addFlag &&
        ((addFlag = !1), IsMobile() ? submitAdd3Mobile() : submitAdd3());
    },
    null,
    webRes.Font_Info,
    webRes.Font_BounsCode4,
    webRes.Font_MoneyChange_8
  );
}
function submitAdd3() {
  var n = $("#f_isVoicePass3").hasClass("on");
  $("#f_isVoicePass1").length > 0 && (n = $("#f_isVoicePass1").hasClass("on"));
  txtRemittanceName == "" &&
    ((txtRemittanceName = $("#txtRemittanceName").val().toUpperCase()),
    (txtVoicePassword = $("#txtVoicePassword").val()),
    (txtBankAccount = $("#txtBankAccount").val().replace(/\s/g, "")),
    (ddlBankCodeCn = $("#ddlBankCodeCn").val()));
  $.ajax(
    {
      url: "/Aspx/Add3.aspx",
      data: {
        type: "submit",
        txtRemittanceName: txtRemittanceName,
        txtBankAccount: txtBankAccount,
        ddlBankCodeCn: ddlBankCodeCn,
        txtVoicePassword: txtVoicePassword,
        isVoicePass: n,
        gameLobby: $("#hid_gameLobby").val(),
      },
      type: "post",
      cache: !1,
      timeout: 1e4,
      error: function () {
        $.fn.alert(webRes.Font_Add3TimeOut, function () {
          addFlag = !0;
          $.fn.closeloading();
          IsTest &&
            ($("#txtBankAccount").val(""),
            $("#ddlBankCodeCn").combobox("select", ""),
            $("#txtPassword_tip2div").css("display", "none"));
        });
      },
      success: function (n) {
        if (
          (typeof parent.depositAreaClose == "function" &&
            parent.depositAreaClose(),
          (addFlag = !0),
          n.StatusCode == 401)
        )
          $.fn.closeloading(), parent.window.location.reload();
        else {
          if (n.StatusCode == 200) {
            $.fn.closeloading();
            n.ResponseUri == "isAccountAudit"
              ? ($.fn.alert(
                  "<div style='text-align:center'>" +
                    webRes.Font_AccountAudit_VerifyNotify +
                    "</div>",
                  function () {
                    layerframeAddClose();
                  }
                ),
                $("#f_isVoicePass3").unbind("click"))
              : $.fn.alert(
                  "<div style='text-align:center'>" +
                    n.StatusDescription +
                    "</div>",
                  function () {
                    layerframeAddClose();
                    parent.window.location.reload();
                  }
                );
            return;
          }
          n.ResponseUri == "error"
            ? ($.fn.closeloading(),
              fnOn3("#f_isVoicePass3", "#txtVoicePassword"),
              $.fn.alert(
                "<div style='text-align:center'><span>" +
                  n.StatusDescription +
                  "</span></div>",
                function () {
                  IsTest &&
                    (n.StatusDescription ==
                      webRes.Font_ValidateAccountLimitedReenter ||
                      n.StatusDescription ==
                        webRes.Font_ValidateAccountLimited) &&
                    layerframeAddClose();
                }
              ))
            : n.StatusDescription == webRes.Font_sSTR6_RemittanceNameRepeat ||
              n.StatusDescription ==
                webRes.Font_sSTR6_RemittanceNameRepeat_Test ||
              n.StatusDescription == webRes.Font_UploadIdCardTitle
            ? $.ajax({
                url: "/LoadData/AddMemberCheck.ashx",
                type: "post",
                datatype: "json",
                data: { checkType: "checkUploadID" },
                error: function () {
                  closeloading();
                },
                success: function (n) {
                  n == "0"
                    ? ($.fn.closeloading(),
                      $.fn.alert(
                        webRes.Font_sSTR6_RemittanceNameRepeat_Test,
                        function () {
                          layerframeAddClose();
                          parent.window.location.reload();
                        }
                      ))
                    : (parent.OpenUploadIC(), layerframeAddClose());
                },
              })
            : ($.fn.closeloading(),
              $.fn.alert(n.StatusDescription, function () {
                IsTest &&
                  (n.StatusDescription == webRes.Font_Add3TimeOut ||
                    n.StatusDescription ==
                      webRes.Font_BlackListBankCardMessage ||
                    n.StatusDescription == webRes.Font_SameVerifyBankDetails) &&
                  ($("#txtBankAccount").val(""),
                  $("#ddlBankCodeCn").combobox("select", ""),
                  $("#txtPassword_tip2div").css("display", "none"));
              }));
        }
      },
    },
    null,
    webRes.Font_Info,
    webRes.Font_BounsCode4,
    webRes.Font_MoneyChange_8,
    "bankInfoAdd2"
  );
}
function submitAdd3Mobile() {
  var t, n;
  $("#div_bank_box1, #txtRemittanceAccount_div, #txtVisa_div").removeClass(
    "error"
  );
  t = $("#f_isVoicePass3").hasClass("on");
  $("#f_isVoicePass1").length > 0 && (t = $("#f_isVoicePass1").hasClass("on"));
  n =
    location.search.toLowerCase().indexOf("gamelobby=") > -1
      ? GetQueryString("gameLobby")
      : "";
  txtRemittanceName = $("#txtRemittanceName").val().toUpperCase();
  txtVoicePassword = $("#txtVoicePassword").val();
  txtBankAccount = $("#txtBankAccount").val().replace(/\s/g, "");
  ddlBankCodeCn = $("#ddlBankCodeCn").val();
  $.ajax({
    url: "/Aspx/Add3.aspx",
    data: {
      type: "submit",
      txtRemittanceName: txtRemittanceName,
      txtBankAccount: txtBankAccount,
      ddlBankCodeCn: ddlBankCodeCn,
      txtVoicePassword: txtVoicePassword,
      isVoicePass: t,
      gameLobby: n,
    },
    type: "post",
    cache: !1,
    timeout: 1e4,
    error: function () {
      $.fn.alert(webRes.Font_Add3TimeOut, function () {
        addFlag = !0;
        $.fn.closeloading();
        IsTest &&
          ($("#txtBankAccount").parent().find(".Rclose").click(),
          $("#txtBankAccount").removeClass("inputred"),
          $("#txtPassword_tip2div").css("display", "none"),
          $("#ddlBankCodeCn").val(""),
          fnEnableSubmit());
      });
    },
    success: function (t) {
      if (($.fn.closeloading(), (addFlag = !0), t.StatusCode == 401))
        parent.window.location.reload();
      else {
        if (t.StatusCode == 200) {
          var i = t.ResponseUri;
          i == "isAccountAudit"
            ? ($.fn.alert(
                "<div style='text-align:center'>" +
                  webRes.Font_AccountAudit_VerifyNotify +
                  "</div>",
                function () {
                  fnBackHomeIndex();
                }
              ),
              $("#f_isVoicePass3").unbind("click"))
            : $.fn.alert(
                "<div style='text-align:center'>" +
                  t.StatusDescription +
                  "</div>",
                function () {
                  n != "" ? fnBackPage() : fnBack("/Mobile/Aspx/M_Index.aspx");
                }
              );
          return;
        }
        t.ResponseUri == "error"
          ? $.fn.alert(
              "<div style='text-align:center'><span>" +
                t.StatusDescription +
                "</span></div>",
              function () {
                t.StatusDescription.includes(
                  "Thông tin ngân hàng không chính xác"
                )
                  ? $("#div_bank_box1").hasClass("error") ||
                    $("#div_bank_box1").addClass("error")
                  : t.StatusDescription.includes(
                      "Tài khoản ngân hàng phải trùng với tên người dùng"
                    ) &&
                    ($("#div_bank_box1").hasClass("error") ||
                      $("#div_bank_box1").addClass("error"));
                IsTest &&
                  (t.StatusDescription ==
                    webRes.Font_ValidateAccountLimitedReenter ||
                    t.StatusDescription ==
                      webRes.Font_ValidateAccountLimited) &&
                  (document.referrer.toLowerCase().indexOf("m_member") > -1
                    ? fnBackMemberIndex()
                    : n != ""
                    ? fnBackPage()
                    : fnBack("/Mobile/Aspx/M_Index.aspx"));
              }
            )
          : IsMPage &&
            !IsIOS() &&
            navigator.userAgent.indexOf("Firefox") > -1 &&
            t.StatusDescription == webRes.Font_sSTR6_RemittanceNameRepeat
          ? $.fn.alert(webRes.Font_UploadICHelp, function () {
              n != "" ? fnBackPage() : fnBack("/Mobile/Aspx/M_Index.aspx");
            })
          : ($.fn.alert(
              t.StatusDescription,
              function () {
                (t.StatusDescription ==
                  webRes.Font_sSTR6_RemittanceNameRepeat ||
                  t.StatusDescription ==
                    webRes.Font_sSTR6_RemittanceNameRepeat_Test ||
                  t.StatusDescription == webRes.Font_DepositNotOpen ||
                  t.StatusDescription == webRes.Font_UploadIdCardTitle) &&
                  (t.StatusDescription != webRes.Font_DepositNotOpen
                    ? $.ajax({
                        url: "/LoadData/AddMemberCheck.ashx",
                        type: "post",
                        datatype: "json",
                        data: { checkType: "checkUploadID" },
                        error: function () {
                          closeloading();
                        },
                        success: function (t) {
                          t == "0"
                            ? document.referrer
                                .toLowerCase()
                                .indexOf("m_member") > -1
                              ? fnBackMemberIndex()
                              : n != ""
                              ? fnBackPage()
                              : fnBack("/Mobile/Aspx/M_Index.aspx")
                            : OpenUploadIC();
                        },
                      })
                    : document.referrer.toLowerCase().indexOf("m_member") > -1
                    ? fnBackMemberIndex()
                    : n != ""
                    ? fnBackPage()
                    : fnBack("/Mobile/Aspx/M_Index.aspx"));
                t.StatusDescription == webRes.Font_LoadingTip &&
                  (n != ""
                    ? fnBackPage()
                    : fnBack("/Mobile/Aspx/M_Index.aspx"));
                IsTest &&
                  (t.StatusDescription == webRes.Font_Add3TimeOut ||
                    t.StatusDescription ==
                      webRes.Font_BlackListBankCardMessage ||
                    t.StatusDescription == webRes.Font_SameVerifyBankDetails) &&
                  ($("#txtBankAccount").parent().find(".Rclose").click(),
                  $("#txtBankAccount").removeClass("inputred"),
                  $("#txtPassword_tip2div").css("display", "none"),
                  $("#ddlBankCodeCn").val(""),
                  fnEnableSubmit());
              },
              null,
              (t.StatusDescription == webRes.Font_sSTR6_RemittanceNameRepeat ||
                t.StatusDescription == webRes.Font_UploadIdCardTitle) &&
                IsYn
                ? "Bước tiếp theo"
                : "",
              null,
              null,
              t.StatusDescription != webRes.Font_sSTR6_RemittanceNameRepeat
                ? null
                : function () {
                    n != ""
                      ? fnBackPage()
                      : fnBack("/Mobile/Aspx/M_Index.aspx");
                  }
            ),
            $(".layer-msg-class>.layui-layer-content>.layer-content-inner").css(
              "font-size",
              "unset"
            ));
      }
    },
  });
}
function fnGameLobbyCloseLayer() {
  $.fn.confirm(
    "<div style='text-align:center;'>{0}</div>".replace(
      "{0}",
      webRes.Font_SetVoicePass_Msg15
    ),
    null,
    function () {
      parent.window.close();
    },
    "<div style='height:50px;border-bottom:5px solid white;'><img src=\"../images/main/icon_warn.svg\"></div>",
    webRes.Font_SetVoicePass_Msg10,
    webRes.Font_SetVoicePass_Msg11
  );
}
function IsIOS() {
  var n = navigator.userAgent;
  return (
    !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ||
    (n.indexOf("Macintosh") > -1 &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2)
  );
}
function copy(n) {
  var t = $("<textarea />");
  t.val(n).css({ width: "1px", height: "1px" }).appendTo("body");
  t.select();
  document.execCommand("copy");
  t.remove();
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
function fnCheckAdd1Empty() {
  var t, i, n;
  if (
    $.trim(txt1.val()) == "" ||
    ($.trim(txt1.val()) != "" &&
      ((t = $.trim(txt1.val())
        .replace(/[^\a-\z\A-\Z0-9]/g, "")
        .toUpperCase()),
      (i = t.length >= 4 && t.length <= 10),
      !i))
  )
    return (
      $("#redMsg")
        .text(webRes.Font_Add1_AccEmpty)
        .show()
        .closest("li")
        .addClass("error"),
      fnFocus(txt1),
      !1
    );
  if ($.trim(txtPwd.val()) == "")
    return (
      $("#redMsg3")
        .text(webRes.Font_Add1_PwEmpty)
        .show()
        .closest("li")
        .addClass("error"),
      fnFocus(txtPwd),
      !1
    );
  if ($.trim(txtPwd.val()) != "") {
    if ((checkRegeditUser2(this, 5), (n = $.trim(txtPwd.val())), pdPass(n))) {
      if (!fn_AccountIsSamePwd()) return fnFocus(txtPwd), !1;
    } else
      return (
        $("#redMsg3")
          .text(webRes.Font_Add1_PwEmpty)
          .show()
          .closest("li")
          .addClass("error"),
        fnFocus(txtPwd),
        !1
      );
    if (n.length > 10)
      return (
        $(this).val(n.substr(0, 10)),
        $("#redMsg3")
          .text(webRes.Font_Add1_PwEmpty)
          .show()
          .closest("li")
          .addClass("error"),
        fnFocus(txtPwd),
        $(".dep_limitedpw2").hide(),
        !1
      );
  }
  return $.trim($("#txtTitle").val()) == ""
    ? ($("#redMsg2")
        .text(webRes.Font_Add1_TitleEmpty)
        .show()
        .closest("li")
        .addClass("error"),
      fnFocus($("#txtTitle")),
      !1)
    : !0;
}
function submitAdd_Tw() {
  var i = $("#txtRemittanceName").val(),
    r = $("#txtRemittanceAccount").val(),
    u = $("#ddlBankCode").val(),
    n = $("#ddlSubBank").val(),
    t;
  $("#hid_SubBank").val(n);
  t = $("#form1").serialize();
  window.loading();
  $.ajax({
    url: "./Add_tw.aspx?type=submit",
    type: "post",
    datatype: "json",
    data: t,
    cache: !1,
    timeout: 15e3,
    error: function () {
      closeloading();
    },
    success: function (t) {
      if (
        (typeof parent.depositAreaClose == "function" &&
          parent.depositAreaClose(),
        (addFlag = !0),
        t.StatusCode == 401)
      )
        $.fn.closeloading(), parent.window.location.reload();
      else {
        if (t.StatusCode == 200) {
          $.fn.closeloading();
          t.ResponseUri == "isAccountAudit"
            ? ($.fn.alert(
                "<div style='text-align:center'>" +
                  t.StatusDescription +
                  "</div>"
              ),
              showCountDown(
                300,
                u,
                r,
                n,
                i,
                "",
                "",
                "submitAdd",
                webRes.Font_SentOutFinal,
                !0,
                IsMobile() ? ShowNextDiv : submitAdd_Tw,
                !1,
                [
                  "txtRemittanceName",
                  "txtRemittanceAccount",
                  "txtVoicePassword",
                  "txtRemittanceAccount2",
                ],
                ["ddlBankCode", "ddlSubBank"],
                !1
              ),
              $("#f_isVoicePass1").unbind("click"))
            : $.fn.alert(
                "<div style='text-align:center'>" +
                  t.StatusDescription +
                  "</div>",
                function () {
                  layerframeAddClose();
                  parent.window.location.reload();
                }
              );
          return;
        }
        t.ResponseUri == "error"
          ? ($.fn.closeloading(),
            $.fn.alert(
              "<div style='text-align:center'><span>" +
                t.StatusDescription +
                "</span></div>",
              function () {
                t.StatusDescription.includes("銀行名稱需與銀行帳號一致") &&
                  ($("#submitAdd").removeAttr("disabled"),
                  fnOn3("#f_isVoicePass1", "#txtVoicePassword"));
              }
            ))
          : t.StatusDescription == webRes.Font_sSTR6_RemittanceNameRepeat
          ? $.ajax({
              url: "/LoadData/AddMemberCheck.ashx",
              type: "post",
              datatype: "json",
              data: { checkType: "checkUploadID" },
              error: function () {
                closeloading();
              },
              success: function (n) {
                n == "0"
                  ? ($.fn.closeloading(),
                    alertOk(webRes.Font_sSTR6_RemittanceNameRepeat))
                  : (parent.OpenUploadIC(), layerframeAddClose());
              },
            })
          : ($.fn.closeloading(), $.fn.alert(t.StatusDescription));
      }
    },
  });
}
function isSubmitBankOpen() {
  return $("#hid_isSubmitBankOpen").val() == "True";
}
function isValidateBankOpen() {
  return $("#hid_isValidateBankOpen").val() == "True";
}
var layerTipsIndex1,
  flagtxtAccounts,
  validateAccount = !0,
  IsAllowAccounts,
  flag0 = !1,
  idName = "#txtAccounts",
  txt1,
  idPwd = "#txtPassword",
  txtPwd,
  hmIndex = 0,
  bCheckBankCard,
  bQueryBankCard,
  bQueryBankCount,
  t1 = 15e3,
  ddlAccounts = "",
  phType,
  IsTXT,
  IsMPage,
  IsAdd2,
  initDdl = $("#initDdl"),
  bankDataArray = [],
  getTempBankCheckData1,
  checkKeyWord,
  bindBank,
  flagLink,
  controlObjF,
  checkSubmit,
  erroradd,
  txtNameRepeat,
  verification,
  flagCodeP2,
  fnForgotPwdStep,
  oldAgent,
  requestcom,
  tioHdfwP2,
  addFlag,
  tioAccountAudit,
  tioCheck;
$(function () {
  var t, r, n, i;
  if (
    ((IsTXT = $(idName).size() > 0),
    (IsMPage = $(".mobileHint2").size() > 0),
    (IsAdd2 = $(".join_members").size() > 0 || $(".form_addID").size() > 0),
    (txt1 = $(idName)),
    (txtPwd = $(idPwd)),
    (bCheckBankCard = $("#hid_checkBankCard").val() == "1"),
    (bQueryBankCard = $("#hid_queryBankCard").val() == "1"),
    (bQueryBankCount = $("#hid_queryBankCount").val() == "1"),
    !IsMPage &&
      isNaN(getLayerFrameIndex1()) &&
      ($(".btn_close").remove(),
      (t = $(".join_members")),
      t.addClass("openCenter"),
      t.css("margin-top", ($(window).height() - t.outerHeight()) / 2)),
    $(".join_members").removeClass("hidden"),
    location.href.indexOf("M_ChgData.aspx") == -1 && checkKeyWord.init(),
    (n = 0),
    (window.checkRemittanceName = function () {
      var t, i, u;
      return n > 0
        ? !1
        : ((t = $("#txtRemittanceName").val()),
          (t = t.replace(/[\.\。\•]/g, "·")),
          IsTw &&
            ((t = t
              .replace(/[\（]/g, "(")
              .replace(/[\）]/g, ")")
              .replace(/  +/g, " ")),
            (t = t.replace(/([\u4E00-\u9FA5])\s+([\u4E00-\u9FA5])/g, "$1$2"))),
          $("#txtRemittanceName").val(t),
          IsMPage
            ? $(".btnSubmit").attr("disabled", !0)
            : $(".btn_SentOut").attr("disabled", !0),
          (i = 4),
          IsTw && (i = 50),
          (u = new RegExp(
            "^([一-龥" +
              webRes.Font_AbnormalText +
              "]{2," +
              i +
              "}|[一-龥]{1,10}[·][一-龥]{1,10}|[A-Za-z]{1,20})$",
            "gu"
          )),
          IsTw &&
            (u = new RegExp(
              "^([a-zA-Z 一-龥" +
                webRes.Font_AbnormalText +
                "+()]{2," +
                i +
                "}|[一-龥" +
                webRes.Font_AbnormalText +
                "]{1,25}[·][一-龥" +
                webRes.Font_AbnormalText +
                "]{1,25})$",
              "gu"
            )),
          !u.test(t) && t != "")
        ? (IsTw && $("#signMsg").css("display", "none"),
          (n = layerTips(
            webRes.Font_RemittanceNameFormatError,
            "txtRemittanceName",
            function () {
              $("#txtRemittanceName").val("");
            }
          )),
          r && window.clearTimeout(r),
          (r = setTimeout(function () {
            n && $("#txtRemittanceName").val("") && layer.close(n);
            n = 0;
          }, 3e3)),
          IsMPage || $("#txtRemittanceName").focus(),
          !1)
        : ((location.href.indexOf("Add2.aspx") > -1 ||
            location.href.indexOf("Add3.aspx") > -1) &&
            fnEnableSubmit(),
          !0);
    }),
    (window.checkCurrentRemittanceName = function () {
      var n = $("#txtRemittanceName").val(),
        t;
      n = n
        .replace(/[\.\。\•]/g, "·")
        .replace(/[\（]/g, "(")
        .replace(/[\）]/g, ")")
        .replace(/  +/g, " ");
      n = n.replace(/([\u4E00-\u9FA5])\s+([\u4E00-\u9FA5])/g, "$1$2");
      $("#txtRemittanceName").val(n);
      t = new RegExp(
        "[^a-zA-Z一-龥" + webRes.Font_AbnormalText + ".。•·+() ]",
        "gu"
      );
      t.test(n) && n != ""
        ? $("#signMsg").css("display", "block")
        : $("#signMsg").css("display", "none");
    }),
    IsTw)
  ) {
    i = !1;
    $("#txtRemittanceName")
      .on("input afterpaste", function () {
        i || (checkRegeditUser2(this, 14), checkCurrentRemittanceName());
      })
      .on("compositionstart", function () {
        i = !0;
      })
      .on("compositionend", function () {
        i = !1;
        checkRegeditUser2(this, 14);
        checkCurrentRemittanceName();
      });
  }
  if (!IsYn)
    $("#txtRemittanceName")
      .on("blur", function () {
        (phType != "1" && IsMPage) || checkRemittanceName();
        IsTw && $("#signMsg").css("display", "none");
      })
      .on("click", function () {
        n && layer.close(n);
        n = 0;
      });
  IsCn &&
    bCheckBankCard &&
    (bQueryBankCount
      ? $.fn.alert(webRes.Font_BankCardCheck, function () {
          IsMPage ? fnMain() : alertOk1();
        })
      : bindBank());
});
checkKeyWord = {
  keywordconf: [],
  getKeyWord: function () {
    var n = this;
    $.ajax({
      url: "/LoadData/AddMemberCheck.ashx",
      data: { checkType: "checkkeyword" },
      type: "post",
      cache: !1,
      timeout: t1,
      error: function () {},
      success: function (t) {
        n.keywordconf = JSON.parse(t);
      },
    });
  },
  getKeyWordTip: function (n, t) {
    var i = this,
      r = [];
    return ($.each(i.keywordconf.keywords, function (t, i) {
      if (n.toUpperCase().indexOf(i) > -1) {
        r.push(i);
        for (var t = 0; t < 10; t++)
          if (n.toUpperCase().indexOf(i) > -1)
            n = n.replace(n.substr(n.toUpperCase().indexOf(i), i.length), "");
          else break;
      }
    }),
    r.length > 0)
      ? [i.keywordconf[t].replace("{0}", ""), n]
      : "";
  },
  GetSimplePassTip: function (n) {
    var t = $.inArray(n.toLowerCase(), this.keywordconf.simplepass) > -1;
    return t ? [webRes.Font_SimplePass, ""] : "";
  },
  checkKeyWord: function (n) {
    var i = this,
      t;
    if (!i.keywordconf) return !0;
    t = n.data("checkkeyword");
    t.tip == "Font_txtAccountsBlur_NotOK" && (validateAccount = !1);
    var r = t.dir || 3,
      u = [],
      f =
        IsYn &&
        (t.max == 375 || location.pathname == "/Mobile/Aspx/M_Add2.aspx")
          ? "#3695cd"
          : "#2F7EC1";
    r = IsYn && t.max == 375 ? 3 : r;
    t.w && u.push(t.w);
    setTimeout(function () {
      var a = $.trim(n.val()),
        e,
        h,
        s,
        o,
        v,
        l,
        c;
      a.length <= 0 ||
        ((e = i.getKeyWordTip(a, t.tip)),
        e == "" && t.checkSimple && (e = i.GetSimplePassTip(a)),
        (h = n.attr("data-index") || 0),
        e != "" &&
        h == 0 &&
        IsYn &&
        location.pathname == "/Mobile/Aspx/M_Add2.aspx"
          ? e[0] == webRes.Font_SimplePass ||
            t.tip == "Font_txtWithDrawPasswordBlur_NotOK"
            ? ($("#signMsg").css("display", "none"),
              $("#signMsg3").html(e[0]),
              $("#signMsg3").css("display", "block"),
              setTimeout(function () {
                n.val("");
                $("#signMsg3").css("display", "none");
                $("#signMsg3").text(webRes.Font_PassNotSame3_New);
                $("#txtPassword_tip").css("display", "none");
              }, 3e3))
            : ($("#signMsg").css("display", "none"),
              $("#signMsg2").html(e[0]),
              $("#signMsg2").css("display", "block"),
              setTimeout(function () {
                n.val(e[1]);
                $("#signMsg2").css("display", "none");
                $("#signMsg2").text(webRes.Font_Nospaces);
              }, 3e3))
          : e != "" && h == 0 && location.pathname == "/Mobile/Aspx/N_Add1.aspx"
          ? ((s = ""),
            n.attr("id") == "txtAccounts"
              ? (s = "signMsg")
              : n.attr("id") == "txtTitle"
              ? (s = "signMsg2")
              : n.attr("id") == "txtPassword" && (s = "signMsg3"),
            setTimeout(function () {
              $("#" + s).html(e[0]);
              $("#" + s).css("display", "block");
              !IsIOS() &&
                $(".layui-layer-dialog").length <= 0 &&
                fnFocus("#" + n.attr("id"));
              n.attr("id") == "txtAccounts" &&
                $.cookie("UserNameBlurName_" + site, e[0]);
              setTimeout(function () {
                n.val(e[1]);
                $("#" + s).css("display", "none");
                $("#" + s).text(webRes.Font_Nospaces);
                n.attr("id") == "txtPassword" &&
                  (e[1].length == 0
                    ? $("#txtPassword_tip").css("display", "none")
                    : e[1].length < 6 &&
                      $("#txtimg").css("background-position", "0px -70px"));
              }, 3e3);
            }, 200))
          : e != "" && h == 0
          ? ((o = {
              time: 3e3,
              maxWidth: 300,
              tips: [r, f],
              end: function () {
                t.clear
                  ? (n.val(""),
                    n.is(":password") && n.css("font-size", ""),
                    $("#txtPassword_tip").hide())
                  : n.val(e[1]);
                n.attr("data-index", "0");
              },
            }),
            t.max >= 1 &&
              (t.max > 1
                ? ((o.area = "auto"), (o.maxWidth = 360))
                : t.max == 1 &&
                  ((o.area = "auto"), (o.maxWidth = n.outerWidth())),
              (o.success = function (n) {
                n.css("max-width", o.maxWidth + "px");
              })),
            u.length > 0 && !t.max && (o.area = u),
            (v = layer.tips(e[0], n, o)),
            n.attr("data-index", v),
            IsMPage ||
              ((l = $("#layui-layer" + v)),
              (c = (o.tips[0] == 1 ? -1 : o.tips[0] == 3 ? 1 : 0) * l.height()),
              e[0] == webRes.Font_SimplePass && IsYn
                ? l.css(
                    "top",
                    IsYn && t.max == 375
                      ? n.offset().top + c - 35
                      : n.offset().top + c
                  )
                : l.css(
                    "top",
                    IsYn && t.max == 375
                      ? n.offset().top + c - 15
                      : n.offset().top + c
                  ),
              $(".layui-layer-dialog").length <= 0 && (t.nofocus || n.focus())))
          : (t.tip == "Font_txtAccountsBlur_NotOK" && (validateAccount = !0),
            location.href.indexOf("N_ForgotPassWord.aspx") == -1 &&
              location.href
                .toLocaleLowerCase()
                .indexOf("n_setvoicepass.aspx") == -1 &&
              h > 0 &&
              layer.close(h)));
    }, 0);
  },
  checkok: function () {
    var n = this,
      t = !0;
    return (
      $("input[data-checkkeyword]").each(function () {
        var r = $(this).val(),
          u = $(this).data("checkkeyword"),
          i;
        r != "" &&
          ((i = n.getKeyWordTip(r, u.tip)),
          i == "" && u.checkSimple && (i = n.GetSimplePassTip(r)),
          i != "" && (t = !1));
      }),
      t
    );
  },
  init: function () {
    this.getKeyWord();
    $("input[data-checkkeyword]").on("blur", function () {
      checkKeyWord.checkKeyWord($(this));
    });
  },
};
bindBank = function () {
  var t = $("#txtBankCard"),
    h =
      "<div style='text-align:center;'>暂不支持<span style='font-size:20px;color:red;font-weight:bolder;'>{0}</span>提款<br/>烦请您使用其他银行进行提款或洽询客服，谢谢！<br/><a  class='checkBank_pop' onclick='checkBank()'>查询支持银行</a></div>",
    e = [],
    r = $("#ddlBankCodeCn"),
    u = $("#ddlProvice"),
    n = $("#ddlCityArea"),
    i = {
      open: function (t) {
        (t == 0 || t == 1) && r.addClass("loading").prop("disabled", !0);
        (t != 0 && t != 1) ||
          IsMPage ||
          r
            .siblings(".textbox")
            .addClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .css("display", "block")
            .addClass("loading");
        (t == 0 || t == 2) &&
          u.addClass("loading").removeClass("noCheckIcon").prop("disabled", !0);
        (t != 0 && t != 2) ||
          IsMPage ||
          u
            .siblings(".textbox")
            .addClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .css("display", "block")
            .addClass("loading");
        (t == 0 || t == 3) &&
          n.addClass("loading").removeClass("noCheckIcon").prop("disabled", !0);
        (t != 0 && t != 3) ||
          IsMPage ||
          n
            .siblings(".textbox")
            .addClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .css("display", "block")
            .addClass("loading");
      },
      close: function (t) {
        (t == 0 || t == 1) && r.removeClass("loading");
        (t != 0 && t != 1) ||
          IsMPage ||
          r
            .siblings(".textbox")
            .removeClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .removeClass("loading");
        (t != 0 && t != 1) || bQueryBankCard || r.prop("disabled", !1);
        (t == 0 || t == 2) && u.removeClass("loading").prop("disabled", !1);
        (t != 0 && t != 2) ||
          IsMPage ||
          u
            .siblings(".textbox")
            .removeClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .removeClass("loading");
        (t == 0 || t == 3) && n.removeClass("loading").prop("disabled", !1);
        (t != 0 && t != 3) ||
          IsMPage ||
          n
            .siblings(".textbox")
            .removeClass("textbox-disabled-transparent")
            .find(".combo-arrow")
            .removeClass("loading");
        t == 4 &&
          !IsMPage &&
          $("#ddlBankCodeCn").combobox("select", "") &&
          $("#ddlProvice").combobox() &&
          $("#ddlProvice").combobox("enable", !0) &&
          $("#ddlCityArea").combobox() &&
          $("#ddlCityArea").combobox("enable", !0);
        t == 4 &&
          !IsMPage &&
          r.val("") &&
          u.val("").removeClass("noCheckIcon") &&
          n.val("").removeClass("noCheckIcon");
      },
    },
    o = function (n) {
      var r = c(n);
      r
        ? f(r)
        : bQueryBankCard &&
          n != "" &&
          n.length >= 15 &&
          n.length <= 30 &&
          (i.open(0),
          $.ajax({
            url: "/LoadData/HelpCheck.ashx",
            data: { checkType: "26", remittanceAccount: n, isreg: "reg" },
            type: "post",
            dataType: "Json",
            cache: !1,
            timeout: 6e4,
            error: function () {
              i.close(0);
              i.close(4);
              f(!1);
            },
            success: function (n) {
              if (n.StatusCode == 200) {
                var r = JSON.parse(n.Html);
                r.error_code == 0
                  ? (e.push(r), f(r))
                  : (i.close(0), t.val(""), f(r));
              } else
                n.StatusCode == 302
                  ? (i.close(0),
                    i.close(4),
                    $.fn.alert(n.StatusDescription, function () {
                      IsTest && n.StatusDescription == webRes.Font_BankCardCheck
                        ? IsMPage
                          ? fnMain()
                          : alertOk1()
                        : (t.val(""), f(!1));
                    }))
                  : ($.fn.alert("请您使用其他银行卡或洽询线上客服，谢谢！"),
                    i.close(0),
                    i.close(4),
                    IsTest && t.val(""),
                    f(!1));
            },
          }));
    },
    c = function (n) {
      if (e.length > 0) {
        var t;
        return (
          $.each(e, function (i, r) {
            r.bankCard == n && (t = r);
          }),
          t
        );
      }
      return null;
    },
    f,
    s;
  getTempBankCheckData1 = function (n) {
    if (bankDataArray.length > 0) {
      var t;
      return (
        $.each(bankDataArray, function (i, r) {
          r.bankCard == n && (t = r);
        }),
        t
      );
    }
    return null;
  };
  f = function (e) {
    var s, a, v, p;
    if (e) {
      if (
        (initDdl.val("true"),
        r.val(""),
        u.val("").removeClass("noCheckIcon"),
        n.val("").removeClass("noCheckIcon"),
        e.bankCard_Type && e.bankCard_Type.indexOf("贷记卡") > -1)
      ) {
        i.close(0);
        $.fn.alert(
          "<div style='text-align:center'>暂不支持<span style='color:red;font-weight:bolder;'>信用卡</span>提款<br/>烦请您使用其他储蓄卡进行提款，谢谢！</div > ",
          function () {
            t.val("");
            IsMPage ? t.keyboard("show") : t.focus();
          }
        );
        return;
      }
      if (e.bank_Province && e.bank_Province.indexOf("海南") > -1) {
        i.close(0);
        $.fn.alert("银行卡验证失败，请联系在线客服，谢谢！", function () {
          t.val("");
          IsTest
            ? IsMPage
              ? fnMain()
              : alertOk1()
            : IsMPage
            ? t.keyboard("show")
            : t.focus();
        });
        return;
      }
      s = e.bank_Name;
      s == "广东发展银行"
        ? (s = "广发银行")
        : s == "浦发银行" && (s = "浦东发展银行");
      var l = "",
        c = "",
        o = "",
        y = !1;
      if (
        (r.find("option").each(function (n, t) {
          var i =
            $(t).attr("value").indexOf(s) > -1 ||
            (s && s.indexOf($(t).attr("value")) > -1);
          s &&
            i &&
            ((l = $(t).attr("value")),
            IsMPage || $("#ddlBankCodeCn").combobox("select", l),
            IsTest && (y = $(t).hasClass("maintain")));
        }),
        u.find("option").each(function (n, t) {
          e.bank_Province &&
            $(t).attr("value").indexOf(e.bank_Province) > -1 &&
            !$(t).attr("disabled") &&
            ((c = $(t).attr("value")),
            IsMPage ||
              (c != "" &&
                ($("#ddlProvice").combobox("select", c),
                $("#ddlProvice").combobox("disable", !0))));
        }),
        i.close(1),
        i.close(2),
        l == "")
      ) {
        s
          ? $.fn.alert(h.replace("{0}", s), function () {
              t.val("");
              f(!1);
            })
          : $.fn.alert(
              "<div style='text-align:center;'>" +
                webRes.Font_BanksMsg1 +
                "<br/><a  class='checkBank_pop' onclick='checkBank()'>查询支持银行</a></div>",
              function () {
                t.val("");
                f(!1);
              }
            );
        i.close(0);
        return;
      }
      if (l != "") {
        if (
          (IsMPage
            ? r.addClass("noCheckIcon") && r.attr("disabled", "true")
            : ((a = fnComboboxItem("ddlBankCodeCn", ".combo-arrow")), a.hide()),
          IsTest &&
            y &&
            $.fn.alert(
              "<div style='text-align:center;'><span style='font-size:20px;color:red;font-weight:bolder;'>" +
                l +
                "</span>正在维护中<br/>烦请您使用其他银行进行提款，谢谢！</div>"
            ),
          e.bankCard.substr(0, 2) != "62")
        ) {
          $.fn.alert(
            "<div style='text-align:center;'>" +
              webRes.Font_BanksMsg1 +
              "！<br/><a  class='checkBank_pop' onclick='checkBank()'>查询支持银行</a></div>",
            function () {
              t.val("");
              f(!1);
            }
          );
          i.close(0);
          return;
        }
        r.val(l);
      }
      c == ""
        ? (IsMPage ||
            ($("#ddlProvice").combobox(),
            $("#ddlProvice").combobox("enable", !0),
            $("#ddlProvice").combobox("setText", ""),
            $("#ddlProvice").removeAttr("disabled"),
            (v = fnComboboxItem("ddlProvice", ".textbox-text")),
            v.attr("placeholder", webRes.Font_ChooseProvince),
            $("#ddlCityArea").combobox(),
            $("#ddlCityArea").combobox("enable", !0),
            $("#ddlCityArea").removeAttr("disabled"),
            $("#ddlProvice").addClass("grey"),
            $("#ddlCityArea").addClass("grey")),
          i.close(3))
        : (u.val(c).addClass("noCheckIcon") && u.attr("disabled", "true"),
          IsMPage ||
            ((a = fnComboboxItem("ddlProvice", ".combo-arrow")), a.hide()));
      e.bank_City == ""
        ? (IsMPage
            ? $("#ddlCityArea").addClass("grey")
            : ($("#ddlCityArea").combobox(),
              $("#ddlCityArea").combobox("enable", !0),
              $("#ddlCityArea").removeAttr("disabled")),
          i.close(3))
        : IsMPage ||
          ((a = fnComboboxItem("ddlCityArea", ".combo-arrow")),
          a.addClass("loading"));
      initDdl.val("false");
      IsMPage
        ? ChooseCity2(
            c,
            n,
            function () {
              var t, r;
              n.find("option").each(function (n, t) {
                e.bank_City &&
                  $(t).attr("value").indexOf(e.bank_City) > -1 &&
                  ((o = $(t).attr("value")),
                  IsMPage ||
                    ($("#ddlCityArea").combobox("select", o),
                    $("#ddlCityArea").combobox("disable", !0)));
              });
              i.close(3);
              o != "" &&
                n.val(o).addClass("noCheckIcon") &&
                n.attr("disabled", "true");
              t = ["上海", "天津", "北京", "重庆"];
              o == "" &&
                ($.each(t, function (n, t) {
                  e.bank_Province &&
                    (t.indexOf(e.bank_Province) > -1 ||
                      e.bank_Province.indexOf(t) > -1) &&
                    (o = t);
                }),
                o != "" && n.val(""));
              r = {
                bankCard: e.bankCard,
                bank_Province: c,
                bank_City: o,
                bank_Name: l,
              };
              bankDataArray.push(r);
              fnEnableSubmit();
            },
            webRes.Font_ChooseCity
          )
        : ChooseCityAdd2(
            c,
            n,
            function () {
              var t, r;
              n.find("option").each(function (n, t) {
                e.bank_City &&
                  $(t).attr("value").indexOf(e.bank_City) > -1 &&
                  ((o = $(t).attr("value")),
                  IsMPage ||
                    ($("#ddlCityArea").combobox("select", o),
                    $("#ddlCityArea").combobox("disable", !0),
                    fnComboboxItem("ddlCityArea", ".combo-arrow")
                      .css("display", "none")
                      .removeClass("loading")));
              });
              i.close(3);
              o != "" &&
                n.val(o).addClass("noCheckIcon") &&
                n.attr("disabled", "true");
              t = ["上海", "天津", "北京", "重庆"];
              o == "" &&
                ($.each(t, function (n, t) {
                  e.bank_Province &&
                    (t.indexOf(e.bank_Province) > -1 ||
                      e.bank_Province.indexOf(t) > -1) &&
                    (o = t);
                }),
                o != "" && n.val(""));
              r = {
                bankCard: e.bankCard,
                bank_Province: c,
                bank_City: o,
                bank_Name: l,
              };
              bankDataArray.push(r);
              fnEnableSubmit();
            },
            webRes.Font_ChooseCity
          );
    } else
      r.val(""),
        u.val(""),
        n.val(""),
        IsMPage
          ? (bQueryBankCard
              ? (u.attr("disabled", !0), n.attr("disabled", !0))
              : (u.removeAttr("disabled"), n.removeAttr("disabled")),
            $("#ddlCityArea option").remove(),
            $("#ddlCityArea").append(
              "<option value=''>" + webRes.Font_ChooseCity + "</option>"
            ),
            r.addClass("gray").removeClass("noCheckIcon"),
            u.addClass("gray").removeClass("noCheckIcon"),
            n.addClass("gray").removeClass("noCheckIcon"))
          : (ChooseCityAdd2(c, n),
            $("#ddlBankCodeCn").combobox({
              disabled: bQueryBankCard,
              value: "",
            }),
            $("#ddlProvice").combobox({ disabled: bQueryBankCard, value: "" }),
            $("#ddlCityArea").combobox({ disabled: bQueryBankCard, value: "" }),
            (v = fnComboboxItem("ddlBankCodeCn", ".textbox-text")),
            v.attr("placeholder", webRes.Font_PleaseChooseBank),
            (v = fnComboboxItem("ddlProvice", ".textbox-text")),
            v.attr("placeholder", webRes.Font_ChooseProvince),
            (p = fnComboboxItem("ddlCityArea", ".textbox-text")),
            p.attr("placeholder", webRes.Font_ChooseCity));
    fnEnableSubmit();
  };
  s = function () {
    if (
      (bQueryBankCard &&
        (r.prop("disabled", !0),
        u.prop("disabled", !0),
        n.prop("disabled", !0),
        $("#bankmaskcn").show()),
      IsMPage)
    ) {
      r.addClass("gray");
      u.addClass("gray");
      n.addClass("gray");
      r.on("change", function () {
        $(this).removeClass("gray");
        $(this).val() == ""
          ? $(this).addClass("gray")
          : IsTest &&
            r
              .find("option[value='" + $(this).val() + "']")
              .hasClass("maintain") &&
            $.fn.msg(
              "<div style='text-align:center;'><span style='font-size:20px;color:red;font-weight:bolder;'>" +
                $(this).val() +
                "</span>正在维护中<br/>烦请您使用其他银行进行提款，谢谢！</div>"
            );
      });
      u.on("change", function () {
        $(this).removeClass("gray");
        $(this).val() == "" && $(this).addClass("gray");
        n.addClass("gray");
      });
      n.on("change", function () {
        $(this).removeClass("gray");
        $(this).val() == "" && $(this).addClass("gray");
      });
    }
    t.on("keydown", function (n) {
      var t = n || window.event || arguments.callee.caller.arguments[0];
      if (t && t.keyCode == 13) return $(this).blur(), !1;
    });
    u.on("change", function () {
      ChooseCity2($(this).val(), n, null, webRes.Font_ChooseCity);
    });
    if (IsMPage) {
      t.keyboard({
        type: "number",
        keybox: $("#keyboard-box"),
        changeValue: function (n, i) {
          if (typeof i != "undefined") {
            var r = i.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
            t.val(r);
            f(!1);
          }
        },
        focus: function () {
          $(".mask_provice_city").show();
        },
        blur: function () {
          var n = t.val();
          n && ((n = n.replace(/\D/g, "")), bQueryBankCard && o(n));
          $(".mask_provice_city").hide();
        },
      });
      t.parent()
        .find(".Rclose")
        .on("click", function () {
          f(!1);
        });
    } else {
      var i = !1;
      t.on("input keyup afterpaste blur focus", function (n) {
        if (!i) {
          var t = n || window.event || arguments.callee.caller.arguments[0],
            r = this.value.replace(/\D/g, ""),
            u = r.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
          $(this).is(":focus") &&
            ($(this).val(u), setTextPosition("txtBankCard", -1));
          t.type == "blur"
            ? bQueryBankCard && o(r)
            : t.type != "focus" && f(!1);
        }
      })
        .on("compositionstart", function () {
          i = !0;
        })
        .on("compositionend", function () {
          i = !1;
          var n = event || window.event || arguments.callee.caller.arguments[0],
            t = this.value.replace(/\D/g, ""),
            r = t.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
          $(this).is(":focus") &&
            ($(this).val(r), setTextPosition("txtBankCard", -1));
          n.type == "blur"
            ? bQueryBankCard && o(t)
            : n.type != "focus" && f(!1);
        });
    }
  };
  s();
};
flagLink = !1;
checkSubmit = !0;
erroradd = "erroradd";
txtNameRepeat = "";
verification = (function () {
  var t = 0,
    e = !1,
    n,
    r,
    h = function (t) {
      n = t.find(".verification_code");
      r = n.find("img");
      r.on("click", function () {
        u();
        i("");
      });
      n.find(".ver_text").on("input keydown", function (t) {
        var r = t || window.event || arguments.callee.caller.arguments[0],
          u;
        if (r && r.keyCode == 13) return $(this).blur(), o(), !1;
        u = $(this)
          .val()
          .replace(/[^\a-\z\A-\Z0-9]/g, "");
        u.length == 4
          ? n.find(".ver_send").removeClass("disabled")
          : n.find(".ver_send").addClass("disabled");
        i("");
      });
      n.find(".ver_send").on("click", function () {
        verfiyFlag || ((verfiyFlag = !0), o());
      });
      n.find(".ver_cancel")
        .off("click")
        .on("click", function () {
          f();
        });
      e = !0;
    },
    o = function () {
      if (n.find(".ver_send").hasClass("disabled")) verfiyFlag = !1;
      else {
        var t = s();
        if (t == "") {
          i(webRes.Font_phoneCode6);
          verfiyFlag = !1;
          return;
        }
        callphotoP2();
      }
    },
    u = function () {
      r.attr(
        "src",
        "/LoadData/HelpCheck.ashx?checkType=29&version=" + Math.random()
      );
    },
    c = function () {
      t && f();
      t = $.fn.open(
        webRes.Font_SecurityVerfiy,
        "#verification_code",
        320,
        250,
        !1,
        !1,
        function (t) {
          var i = { "min-width": "50%" };
          IsMPage &&
            ($.extend(i, { padding: "50px", "padding-top": "0px" }),
            (isScroll = !1));
          t.find(".layui-layer-content").css(i);
          e || h(t);
          n.find(".ver_send").addClass("disabled");
          u();
          IsMPage || n.find("input:text").focus();
          IsMPage &&
            (t.addClass("mobile_po"),
            $(".layui-layer-shade").addClass("mobile_shade"));
        },
        0.3
      );
    },
    f = function () {
      t > 0 &&
        (t && layer.close(t), (t = 0), n.find(".ver_text").val(""), i(""));
    },
    i = function (t) {
      t != ""
        ? (n.find(".ver_text").val(""),
          n.find(".ver_send").addClass("disabled"),
          n.find(".ver_error").show(),
          u())
        : n.find(".ver_error").hide();
      IsYn &&
        n
          .find(".ver_error")
          .css({ width: "110%", "margin-right": IsMPage ? "-15%" : "-10%" });
      n.find(".ver_error").text(t);
    },
    s = function () {
      return n ? n.find(".ver_text").val() : "";
    };
  return { showVer: c, hideVer: f, getCode: s, setError: i };
})();
var tioP2,
  waitP2,
  flagP2 = !1,
  verfiyFlag = !1,
  sort1 = 0,
  sort2 = "",
  sort3,
  sortArray,
  nocaptcha,
  countReply = 0;
flagCodeP2 = !1;
fnForgotPwdStep = (function () {
  var n,
    i,
    r,
    u,
    f,
    e,
    o,
    t,
    s,
    h,
    c,
    v = function () {
      n = $("#btnResend");
      i = $(".step");
      r = $("#txtCode");
      u = $("#txtPassword");
      f = $("#txtPassword2");
      e = $("#txtVoicePass");
      o = $("#txtVoicePass2");
      s = $(".pass1");
      h = $(".pass2");
      c = $(".pass");
    },
    y = function (t) {
      t != "0" && t != "1" && t != "2"
        ? (n.removeAttr("onclick"),
          n.attr("disabled", "disabled"),
          $.fn.alert(fnForgotPwdStep.msgFormat(t)))
        : (n.attr("disabled", "disabled"),
          a(n, IsTest ? 10 : 60, webRes.Font_SendTimeGo, function () {
            n.val(webRes.Font_ReSend);
          }));
    },
    p = function (n, t) {
      if (
        (i.hide(),
        n === 1 && l(),
        n === 2 &&
          (c.hide(),
          r.val(""),
          u.val(""),
          f.val(""),
          e.val(""),
          o.val(""),
          (t == 2 || t == 4) && s.show(),
          (t == 3 || t == 4) && h.show()),
        $("#Step" + n).show(),
        !IsMPage)
      ) {
        layerResetSize2();
        var v = parent.layer.getFrameIndex(window.name),
          a = parent.$("#layui-layer" + v),
          y = a.height() + 21;
        a.css("height", y + "px");
      }
    },
    l = function () {
      $("#hid_phone").val("");
      $("#hid_user").val("");
      IsMPage && resetVerifyMsgBox();
    },
    w = function (n) {
      return IsYn && n.length >= 50
        ? "<div>" + n + "</div>"
        : "<div>" + n + "</div>";
    },
    a = function (n, i, r, u) {
      if ((n.val(r.replace("{0}", i)), i <= 0)) {
        n.removeAttr("disabled", "disabled");
        t && window.clearTimeout(t);
        u && u();
        return;
      }
      i--;
      t && window.clearTimeout(t);
      t = setTimeout(function () {
        a(n, i, r, u);
      }, 1e3);
    };
  return { init: v, showMsg: y, showStep: p, clear: l, msgFormat: w };
})();
oldAgent = "-";
requestcom = function (n, t, i, r, u, f) {
  r = r || "post";
  u = u || "json";
  f = isNE(f) ? f : !0;
  f && loading();
  $.ajax({
    url: n,
    type: r,
    dataType: u,
    data: t,
    cache: !1,
    timeout: t1,
    error: function () {
      closeloading();
    },
    success: function (n) {
      closeloading();
      i && i(n);
    },
  });
};
window.loading = function () {
  layer.load(2, { shade: 0.3, shadeClose: !1, time: 0, skin: "layer-loading" });
};
window.closeloading = function () {
  layer.closeAll("loading");
};
$("#txtBankAccount").on("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
var txtRemittanceName = "",
  txtBankAccount = "",
  ddlBankCodeCn = "",
  txtVoicePassword = "";
addFlag = !0;

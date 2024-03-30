function fnNewBack(n) {
  window.open(n, "", "");
}
function fnOpenNew(n) {
  window.open(encodeURI(n));
}
function fnNewBack1(n) {
  var i = $("<a href='" + n + "' target='_blank'>App</a>").get(0),
    t = document.createEvent("MouseEvents");
  t.initEvent("click", !0, !0);
  i.dispatchEvent(t);
}
function fnBack(n) {
  $(
    ".btn_header_menu_open,.btn_footer_menu_open,.btn_footLogin_menu_open"
  ).hide();
  $("a.btn_header_menu,.btn_footer_menu").removeClass("on");
  window.setTimeout(function () {
    window.location.href = encodeQueryParameters(decodeQueryParameters(n));
  }, 10);
}
function fnBackPage() {
  var n = window.location.href.toLowerCase(),
    c,
    e,
    l,
    u,
    o,
    t,
    a,
    i,
    s,
    f;
  if (n.indexOf("n_add1.aspx") > 0)
    setTimeout(function () {
      $("#captchaModal").css("display") != "block" &&
        ($.cookie("UserNameBlurName_" + site) || $("#txtAccounts").val(""),
        $("#txtAccounts").blur(),
        $("#checkSliderType").val("0"),
        fnAddClose_confirm(function () {
          location.search.indexOf("?ref") > -1
            ? fnBack("../login.aspx" + location.search)
            : fnBack("../login.aspx");
        }));
    }, 100);
  else if (n.indexOf("m_slotgame.aspx") > 0)
    window.location.href = "/Mobile/Aspx/M_Index.aspx";
  else if (n.indexOf("n_addrule.aspx") > 0)
    window.location.href = "/Mobile/Aspx/N_Add1.aspx?action=2&embed=&back=1";
  else if (n.indexOf("/game/") > 0)
    window.location.href = "/Mobile/Aspx/M_Index.aspx";
  else if (n.indexOf("n_kfzx.aspx?action=2") > 0)
    window.location.href = "/Mobile/Aspx/N_Kfzx.aspx";
  else if (n.indexOf("n_kfzx.aspx?back=1") > 0) fnBackHomeIndex();
  else if (n.indexOf("n_kfzx.aspx") > 0) fnBackHomeIndex();
  else if (n.indexOf("m_jkowalletadd_tw.aspx") > 0)
    location.search.toLowerCase().indexOf("action=1") > -1
      ? fnBack("M_Deposit.aspx")
      : location.search.toLowerCase().indexOf("action=2") > -1
      ? fnBack("M_WithDraw_tw.aspx")
      : fnBack("M_Index.aspx");
  else if (
    n.indexOf("n_forgotpassword.aspx?type=forgotvoice&hyzx=1&hyhz=1") > 0
  )
    fnBack("M_MemeberTransfer.aspx");
  else if (n.indexOf("n_gywm.aspx") > 0) fnBackMemberIndex();
  else if (n.indexOf("m_referralhistory.aspx") > 0) {
    var r = GetQueryString("cat"),
      e = GetQueryString("fromdw"),
      h = r != null && r != "" ? "cat=" + r + "&" : "";
    h += e != null && e != "" ? "fromdw=" + e : "";
    c = "M_InviteFriends.aspx?" + h;
    fnBack(c);
  } else if (
    n.indexOf("n_bonus.aspx") > 0 ||
    n.indexOf("m_gift2.aspx") > 0 ||
    n.indexOf("m_invitefriends.aspx") > 0 ||
    n.indexOf("m_friendrebate.aspx") > 0 ||
    n.indexOf("n_worldcup.aspx") > 0 ||
    n.indexOf("n_baseball.aspx") > 0 ||
    n.indexOf("n_sponsorrecord.aspx") > 0
  ) {
    if (((e = GetQueryString("fromdw")), e == "1")) {
      window.close();
      window.history.back(-1);
      return;
    }
    if (GetQueryString("init") == "1") {
      fnBackHomeIndex();
      return;
    }
    if (((l = GetQueryString("fromMail")), l == "2"))
      (u = GetQueryString("mailId")),
        (o = GetQueryString("pageIndex")),
        u != ""
          ? fnBack("M_AnnouncementList.aspx?init=1&id=" + u + "&pageIndex=" + o)
          : fnBack("M_AnnouncementList.aspx?init=1");
    else if (l == "1")
      (u = GetQueryString("mailId")),
        (o = GetQueryString("pageIndex")),
        u != ""
          ? fnBack("M_PersonalMail.aspx?init=1&id=" + u + "&pageIndex=" + o)
          : fnBack("M_PersonalMail.aspx?init=1");
    else {
      var r = GetQueryString("cat"),
        h = r != null && r != "" ? "?cat=" + r : "",
        c = "N_Hdzq.aspx" + h;
      fnBack(c);
    }
  } else if (
    n.indexOf("m_chgbank.aspx?type=2") > 0 ||
    n.indexOf("m_virtualcryptoadd_tw.aspx") > 0
  )
    (t = ""),
      n.indexOf("m_virtualcryptoadd_tw.aspx") > 0 && (t = "?type=2"),
      fnBack("M_WithDraw_tw.aspx" + t);
  else if (n.indexOf("m_cryptowalletadd_cn.aspx") > 0)
    (t = ""),
      location.search.toLowerCase().indexOf("type=1") > -1
        ? (t = "?opt=2")
        : location.search.toLowerCase().indexOf("type=2") > -1 &&
          (t = "?opt=3"),
      fnBack("M_WithDraw_cn.aspx" + t);
  else if (n.indexOf("n_tutorial.aspx?action=3") > 0)
    !IsTw && location.search.toLowerCase().indexOf("type=1") > -1
      ? fnBack("M_Deposit.aspx")
      : location.search.toLowerCase().indexOf("type=2") > -1
      ? fnBack("M_WithDraw_tw.aspx")
      : window.history.back(-1);
  else if (
    n.indexOf("m_virtualcryptoadd_yn.aspx") > -1 &&
    n.indexOf("type=crypto") > -1
  )
    fnBack("M_WithDraw_yn.aspx?type=crypto");
  else if (n.indexOf("m_bankadd_yn.aspx") > -1)
    (a = GetQueryString("isDeposit")),
      a == 1
        ? ((i = GetQueryString("type")),
          (f = 1),
          (i == 24 || i == 22) && (f = 2),
          fnBack("M_Deposit_StoreBank_yn.aspx?sort=" + f + "&type=" + i))
        : window.history.back(-1);
  else if (n.indexOf("n_tutorial.aspx") > -1 && IsYn) {
    if (((i = GetQueryString("type")), i == 3 || i == 4)) {
      window.history.back(-1);
      return;
    }
    s = GetQueryString("opt");
    f = 1;
    (s == 24 || s == 22) && (f = 2);
    fnBack("M_Deposit_StoreBank_yn.aspx?sort=" + f + "&type=" + s);
  } else
    n.indexOf("m_bankcard.aspx") > -1
      ? fnBack("M_Member.aspx")
      : n.indexOf("m_deposit_storebank_yn.aspx") > -1
      ? fnBack("M_Deposit.aspx")
      : n.indexOf("m_personalmail.aspx") > -1
      ? GetQueryString("init") == "1"
        ? fnBackHomeIndex()
        : GetQueryString("init") == "2"
        ? fnBack("M_Member.aspx")
        : window.history.back(-1)
      : n.indexOf("m_chgdata.aspx?hyzx=1") > -1
      ? fnBack("M_Member.aspx")
      : window.history.back(-1);
}
function fnBackPage2() {
  var n = window.location.href.toLowerCase();
  n.indexOf("n_add1.aspx") > 0
    ? setTimeout(function () {
        $("#captchaModal").css("display") != "block" &&
          ($.cookie("UserNameBlurName_" + site) || $("#txtAccounts").val(""),
          $("#txtAccounts").blur(),
          $("#checkSliderType").val("0"),
          fnAddClose_confirm(function () {
            fnBack("../login.aspx");
          }));
      }, 100)
    : n.indexOf("/game/") > 0 || n.indexOf("n_addrule.aspx") > 0
    ? window.history.back(-1)
    : window.history.back(-1);
}
function fnBackHomeIndex() {
  window.location.href = "/Mobile/Aspx/M_Index.aspx";
}
function fnBackMemberIndex() {
  window.location.href = "/Mobile/Aspx/M_Member.aspx";
}
function fnBackWithdrawPage() {
  var n = "/Mobile/Aspx/M_WithDraw_" + webRes.Font_Lan + ".aspx";
  location.search.toLowerCase().indexOf("back=1") > -1
    ? (n += "?back=1")
    : location.search.toLowerCase().indexOf("back=2") > -1 && (n += "?back=2");
  location.search.toLowerCase().indexOf("type=2") > -1 &&
    IsCn &&
    (n += n.indexOf("?") > -1 ? "&opt=1" : "?opt=1");
  window.location.href = n;
}
function fnBackDepositPage() {
  var n = "";
  location.search.toLowerCase().indexOf("back=1") > -1
    ? (n = "?back=1")
    : location.search.toLowerCase().indexOf("back=2") > -1 && (n = "?back=2");
  location.search.toLowerCase().indexOf("maintain=1") > -1 &&
    (n == "" ? (n = "?maintain=1") : (n += "&maintain=1"));
  window.location.href = "/Mobile/Aspx/M_Deposit.aspx" + n;
}
function fnBackApp(n) {
  var t = window.location.href.toLowerCase();
  t.indexOf("n_add1.aspx") > 0
    ? fnAddClose_confirm(function () {
        fnBackApp1(n);
      })
    : fnBackApp1(n);
}
function fnBackApp1(n) {
  n = n || $.cookie("CookieBackApp");
  n
    ? (document.addEventListener("visibilitychange", function () {
        document.hidden &&
          (navigator.userAgent.indexOf("Firefox") != -1 ||
          navigator.userAgent.indexOf("Chrome") != -1
            ? (open(location, "_self").close(),
              (window.location.href = "about:blank"),
              window.close())
            : ((window.opener = null),
              window.open("", "_self"),
              window.close(),
              open(location, "_self").close()));
      }),
      setTimeout(function () {
        window.location.href = n;
      }, 200))
    : window.history.go(-1);
}
function F5() {
  window.location.reload();
}
function F52() {
  window.location.href = window.location.href;
}
function IsTrue(n) {
  return n.toLowerCase() === "true";
}
function isExist(n) {
  return typeof n == "undefined" ? !1 : !0;
}
function isNN(n) {
  var t = n === undefined || n === "undefined";
  return !t;
}
function isNE(n) {
  var t = n == null || n === undefined || n === "undefined" || n === "";
  return !t;
}
function isSize(n) {
  return $(n).size() > 0;
}
function GetQueryString(n) {
  var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
    t = window.location.search.substr(1).match(i);
  return t != null ? filterStr(unescape(t[2])) : null;
}
function encodeQueryParameters(n) {
  var t = n.split("?");
  if (t.length !== 2) return n;
  var i = t[0],
    r = t[1],
    u = r.split("&"),
    f = u.map(function (n) {
      var t = n.split("="),
        i = t[0],
        r = encodeURIComponent(t.slice(1).join("="));
      return i + "=" + r;
    });
  return i + "?" + f.join("&");
}
function decodeQueryParameters(n) {
  var t = n.split("?");
  if (t.length !== 2) return n;
  var i = t[0],
    r = t[1],
    u = r.split("&"),
    f = u.map(function (n) {
      var t = n.split("="),
        i = decodeURIComponent(t[0]),
        r = decodeURIComponent(t.slice(1).join("="));
      return i + "=" + r;
    });
  return i + "?" + f.join("&");
}
function filterStr(n) {
  for (
    var r = new RegExp(
        "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]"
      ),
      i = "",
      t = 0;
    t < n.length;
    t++
  )
    i += n.substr(t, 1).replace(r, "");
  return i;
}
function IsIphone() {
  var n = navigator.userAgent;
  return n.indexOf("iPhone") > -1;
}
function IsMobile() {
  var n = navigator.userAgent.toLowerCase();
  return (
    jQuery.browser.mobile ||
    n.indexOf("ipad") > -1 ||
    n.indexOf("android") > -1 ||
    (n.indexOf("macintosh") > -1 &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2)
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
function IsIPad() {
  var n = navigator.userAgent.toLowerCase();
  return (
    n.indexOf("ipad") > -1 ||
    n.indexOf("macintosh") > -1 ||
    (n.indexOf("macintosh") > -1 &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2)
  );
}
function IsAdr() {
  var n = navigator.userAgent.toLowerCase();
  return n.indexOf("android") > -1 || n.indexOf("adr") > -1;
}
function IsHuaWei() {
  var n = navigator.userAgent.toLocaleLowerCase();
  return n.indexOf("huawei") > -1 || n.indexOf("windows") > -1;
}
function IsUC() {
  var n = navigator.userAgent.toLowerCase();
  return n.indexOf("uc") > -1;
}
function stopPropagation(n) {
  n = n || window.event || arguments.callee.caller.arguments[0];
  document.all
    ? (n.cancelBubble = !0)
    : (n.stopPropagation(), n.preventDefault());
}
function fnGetMaintainText(n, t, i) {
  var r = webRes.Font_Maintain2;
  return t == null || n == 4 || n == 5
    ? r
    : i == 1
    ? r.concat("<span>{0}</span>").replace("{0}", t)
    : i == 3
    ? r
        .concat("{0}", "<span>~ {1}</span>")
        .replace("{0}", "<br>")
        .replace("{1}", t.split("~")[1])
    : r;
}
function fnTXTEmpty(n, t, i) {
  return $.trim(n) === "" ? ($(i).msg(t), !1) : !0;
}
function fnCheckWaiterName() {
  var n = $("#CsName").val(),
    t = !1;
  return ($(".option_box>a").each(function () {
    $(this).text().toLowerCase() == n.toLowerCase() && (t = !0);
  }),
  !t && n != "")
    ? ($.fn.msg(webRes.Font_ComplantBox_10, !1, function () {
        $("#CsName").val("");
        $(".option_box").hide();
        $(".option_box a").show();
      }),
      !1)
    : !0;
}
function ReturnTXTEmptyFalse(n, t, i) {
  return (
    (t = fnReplaceEmpty(t)),
    n == "" ? (ErrorText == "" && i.focus(), (ErrorText += t + "\n\n"), !1) : !0
  );
}
function ReturnTXTEmptyFalse_jh(n, t) {
  return (
    (t = fnReplaceEmpty(t)),
    n == ""
      ? (ErrorText == "",
        ErrorText != "" && (ErrorText += ","),
        (ErrorText += t),
        !1)
      : !0
  );
}
function ReturnCodeTXTEmptyFalse_jh(n, t) {
  return (
    (t = fnReplaceEmpty(t)),
    isCodeEmpty(n)
      ? (ErrorText == "",
        ErrorText != "" && (ErrorText += ","),
        (ErrorText += t),
        !1)
      : !0
  );
}
function fnReplaceEmpty(n) {
  return IsYn ? n : n.replace(/　/g, "").replace(/ /g, "");
}
function checkRegeditUser(n, t) {
  var i = [];
  i[0] =
    /[\`\~\!\@\#\$\%\^\&\*\(\)\+\\\]\[\}\{\'\;\:\"\/\,\>\<\]\s\|\=\-\?\，\？\！\【\】\｛\｝\、\；\：\“\”\‘\’\《\》\_\￥]/g;
  i[1] = /[^\d]/g;
  i[2] = /[\d]/g;
  i[3] =
    /[\`\~\!\@\#\$\%\^\&\*\(\)\+\\\]\[\}\{\'\;\:\"\/\,\>\<\]\s\|\=\?\，\？\！\【\】\｛\｝\、\；\：\“\”\‘\’\《\》\_\￥]/g;
  i[4] =
    /[\`\~\!\@\#\$\%\^\&\*\(\)\+\\\]\[\}\{\'\;\:\"\/\,\>\<\]\s\|\=\-\?\，\？\！\【\】\｛\｝\、\；\：\“\”\‘\’\《\》\_\￥\.]/g;
  n.value = n.value.replace(i[t], "");
}
function checkRegeditUser2(n, t) {
  var i = GetArrayUser2();
  i[t].test(n.value) && (n.value = n.value.replace(i[t], ""));
}
function checkRegeditUser3(n, t) {
  var i = GetArrayUser2();
  return i[t].test(n.value) ? ((n.value = n.value.replace(i[t], "")), !0) : !1;
}
function GetArrayUser2() {
  return (
    ArrayUser2.length == 0 &&
      ((ArrayUser2[0] = new RegExp(
        "[^a-zA-Z0-9一-龥·•" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[1] = new RegExp(
        "[^a-zA-Z一-龥·•" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[2] = new RegExp(
        "[^一-龥" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[3] = new RegExp(
        "[^\0-9\u4E00-\u9FA5-" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[4] = new RegExp(
        "[^a-zA-Z0-9一-龥" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[5] = new RegExp("[^a-zA-Z0-9]", "g")),
      (ArrayUser2[6] = new RegExp(
        "[^a-zA-Z0-9一-龥-" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[7] = new RegExp(
        "[^a-z0-9A-Z_ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ đaáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ]",
        "g"
      )),
      (ArrayUser2[8] = new RegExp(
        "[^a-zA-Z_ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ đaáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ]",
        "g"
      )),
      (ArrayUser2[9] = new RegExp("[^a-zA-Z\\s.'’]", "g")),
      (ArrayUser2[10] = new RegExp(
        "[^a-zA-Z0-9一-龥·•+-/。，,？?！!.*" + webRes.Font_AbnormalText + "]",
        "gu"
      )),
      (ArrayUser2[11] = new RegExp(
        "[^a-z0-9A-Z_ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ đaáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ+-/。，,？?！!.*]",
        "g"
      )),
      (ArrayUser2[12] = new RegExp(
        "[^a-z0-9A-Z_ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ đaáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ.'’]",
        "g"
      )),
      (ArrayUser2[13] = new RegExp(
        "[^a-zA-ZĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ đaáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ.'’·]",
        "g"
      )),
      (ArrayUser2[14] = new RegExp(
        "[^a-zA-Z一-龥" + webRes.Font_AbnormalText + ".。•·+()（） ]",
        "gu"
      ))),
    ArrayUser2
  );
}
function GetV2E(n) {
  var i =
      "ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ",
    t;
  for (n = n.toUpperCase(), t = 0; t < i.length; t++)
    n = n.replaceAll(
      i[t],
      "DAAAAAAAAAAAAAAAAAAEEEEEEEEEEEOOOOOOOOOOOOOOOOOUUUUUUUUUUUIIIIIYYYYY"[t]
    );
  return n;
}
function fnBindTxTOn2(n, t) {
  n.attr("onkeyup", t);
  n.attr("onafterpaste", t);
  n.attr("onblur", t);
}
function fnOn(n) {
  $(n).click(function () {
    $(this).toggleClass("on");
  });
}
function fnOn2(n, t, i) {
  $(n).click(function () {
    $(this).hasClass("on") || $(this).addClass("on");
    $(t).removeClass("on");
    $(i).removeAttr("disabled").focus();
  });
  $(t).click(function () {
    $(this).hasClass("on") || $(this).addClass("on");
    $(n).removeClass("on");
    $(i).val("").attr("disabled", "disabled");
  });
}
function fnIsOn(n) {
  return $("#" + n).hasClass("on");
}
function GetTextLanguage(n, t, i) {
  return IsTw ? n : IsYn ? i : t;
}
function fnSetHref(n, t) {
  $("#" + n).size() > 0 && (document.getElementById(n).href = t);
}
function fnSetOnclick(n, t) {
  $("#" + n).attr("onclick", t);
}
function fnSetOnclick2(n, t) {
  $("." + n).attr("onclick", t);
}
function layerPw_focus() {
  $(".layui-layer-close1").focus();
}
function layerPw_close() {
  $(".layui-layer-close1").click();
}
function layerTip_close() {
  layer.closeAll("tips");
}
function layerCss(n, t) {
  IsYn && (n = n.replace("đến ", "đến<br/>"));
  layer.open({
    type: 1,
    area: t + "px",
    title: webRes.Font_Info,
    content: '<span style="font-size:16px;">' + n + "</span>",
    btn: webRes.Font_OK,
    shade: 0.46,
    shift: -1,
  });
  layerPw_focus();
}
function fnTip(n, t, i) {
  i = isNaN(parseInt(i)) ? 3 : parseInt(i);
  var r = { tips: [i, "#3695cd"], time: 3e3 };
  OSPlatform.isTablet ? (r.maxWidth = 232) : (r.area = ["46%"]);
  layer.tips("<span style='font-size:14px;'>" + t + "</span>", n, r);
}
function fnTipCss(n, t, i, r, u, f, e, o) {
  var ft, h, c, ot, s, b, k, d, p, ht, l, g, a, nt, tt, v, ut, it, y;
  (n == "#aKscz" || n == "#aKscz2") &&
    (t = t.replace("<br />", "").replace("<br/>", ""));
  i = isNaN(parseFloat(i)) ? 3 : parseFloat(i);
  r = isNaN(parseInt(r)) ? 3 : parseInt(r);
  ft = IsYn ? 240 : 238;
  IsYn && $(".liveGame").size() > 0 && (ft = 260);
  h = { tips: [r, "#3695cd"], time: i * 1e3, maxWidth: ft };
  c = !1;
  window.innerWidth >= 375 && (h.area = auto);
  n == "div#loto_game" && IsYn && (h.area = "190px");
  u && (h.area = [u]);
  n == "#aTraderec" && ((h.id = "zwTips"), (c = !0));
  n == "#aHYZX" && ((h.id = "hyTips"), (c = !0));
  n == "#aFooterDW" && ((h.id = "ctTips"), (c = !0));
  n == "#aMypurse" && ((h.id = "mpTips"), (c = !0));
  n == "#aMypurse2" && ((h.id = "mpTips2"), (c = !0));
  n == "#aKscz" && ((h.id = "ksczTips"), (c = !0));
  n == "#aKscz2" && ((h.id = "kscz2Tips"), (c = !0));
  ot =
    n == "#aKscz" || n == "#aKscz2" || n == "#aMypurse"
      ? "<span style='font-size:14px;word-break:break-word;'>"
      : "<span style='font-size:14px;'>";
  s = layer.tips(ot + t + "</span>", n, h);
  b = c ? u : $(n).width();
  IsYn &&
    n == "#Hdfw" &&
    window.screen.width >= 375 &&
    window.screen.width <= 408 &&
    (b = "350px");
  IsYn ||
    (n != "#aKscz" && n != "#aKscz2" && n != "#aMypurse") ||
    $("#layui-layer" + s).addClass("InOut");
  var w = parseInt($("#layui-layer" + s).css("top"), 10),
    ct = parseInt($("#layui-layer" + s).css("height"), 10),
    st = !1;
  if (
    (r != "3" || c
      ? r != "1" ||
        c ||
        ($(n).hasClass("w100") || typeof e == "undefined"
          ? (w += 27)
          : ((st = !0),
            (w = $(n).height() + $("#main-footer").height() - ct / 3)))
      : ((w -= IsYn ? 37 : 26), n == "#Hdfw" && IsYn && (w += 30)),
    st
      ? $("#layui-layer" + s).css({ top: "auto", bottom: w, "max-width": b })
      : n == "#aTvpd" && f
      ? ($("#layui-layer" + s).css({ "max-width": b }),
        (w =
          $(n).offset().top -
          parseInt($("#layui-layer" + s).css("height"), 10) +
          $(n).height() / 5),
        $("#layui-layer" + s).css({ top: w + "px" }))
      : ($("#layui-layer" + s).css({ top: w + "px", "max-width": b }),
        n != "#aHYZX" &&
          n != "#aKscz2" &&
          $("#layui-layer" + s).css({ left: $(n).offset().left })),
    f &&
      (IsTw
        ? (k = [
            "div#aColor",
            "div#slotGame_3d.btn_GLhotSlot",
            "#aTvpd",
            "div#livegamedg",
            "div#livegamewm",
            "div#livegameog",
            "div#livegameob",
            "div#slotGame_ds",
            "div#slotGame_ps",
            "div#sportGame_jiuzhou",
            "div#sportGame_ob",
          ])
        : IsCn
        ? (k = [
            "div#aNbb",
            "div#aColor",
            "#aTvpd",
            "div#livegamedg",
            "div#livegameevo",
            "div#livegameog",
            "div#livegameob",
            "div#sportGame_jiuzhou",
            "div#sportGame_sb",
            "div#sportGame_pin",
            "div#sportGame_ob",
            "div#slotGame_dt",
            "div#slotGame_ftg",
            "div#slotGame_ps",
            "div#slotGame_ka",
            "div#slotGame_pg",
            "div#slotGame_cq9fish",
            "div#slotGame_obfish",
            "div#soltGame_agfish",
            "div#soltGame_kyfish",
          ])
        : IsYn &&
          (k = [
            "div#aColor",
            "div#slotGame_3d.btn_GLhotSlot",
            "#aTvpd",
            "div#livegamedg",
            "div#livegamesa",
            "div#livegameevo",
            "div#livegameob",
            "div#sportGame_jiuzhou",
            "div#sportGame_cmd",
            "div#sportGame_ag",
            "div#sportGame_ob",
            "div#slotGame_ds",
            "div#slotGame_ka",
            "div#slotGame_ps",
            "div#slotGame_pg",
            "div#slotGame_ksfish",
            "div#slotGame_obfish",
            "div#slotGame_dsfish",
          ]),
      $("i.layui-layer-TipsB, i.layui-layer-TipsT").css({
        left: "5px!important",
      }),
      k.includes(n) == !1 && o && $("#layui-layer" + s).css({ left: "21%" }),
      o &&
        $("#layui-layer" + s).css({
          "-webkit-text-size-adjust": "100%",
          "text-size-adjust": "100%",
        }),
      k.includes(n) &&
        ((d = $("#main-content").width() - $(n).width()),
        (p = 0),
        IsYn && window.screen.width >= 650
          ? ((p = 16), $("#layui-layer" + s).css({ left: d + p + "px" }))
          : IsYn && window.screen.width >= 500
          ? ((p = 11), $("#layui-layer" + s).css({ left: d + p + "px" }))
          : window.screen.width >= 600
          ? ((p = 16), $("#layui-layer" + s).css({ left: d + p + "px" }))
          : ((p = 8), $("#layui-layer" + s).css({ left: d + p + "px" }))),
      $(n).hasClass("w100") &&
        ((ht = window.innerWidth - $(".GameList_RBox").width() - 8),
        $("#layui-layer" + s).css({ width: "auto", left: ht + "px" }))),
    r != "1" ||
      c ||
      $("#layui-layer" + s)
        .find(".layui-layer-TipsG")
        .css({
          "border-left-style": "solid",
          "border-right-color": "transparent",
          "border-left-color": "rgb(54, 149, 205)",
        }),
    (l = window.screen.width / 5),
    (g = window.screen.width / 10),
    u)
  ) {
    if (
      ((a = u.match(/\d+/g).map(Number)),
      n == "#aTraderec" &&
        ((nt = document.getElementById("zwTips").children),
        nt[1].tagName == "I" && (nt[1].style.left = g + "px"),
        (nt[1].style.borderLeftColor = "rgb(54, 149, 205)"),
        (nt[1].style.borderRightColor = "transparent")),
      n == "#aHYZX")
    ) {
      var rt = document.getElementById("hyTips").children,
        et = parseFloat($("#main-content").css("padding-left")),
        lt = parseFloat($("#layui-layer" + s).css("left"));
      $("#layui-layer" + s).css({ left: lt - et });
      rt[1].tagName == "I" &&
        ((rt[1].style.left =
          a[0] > l ? g + (a[0] - l + et) + "px" : g + et + "px"),
        (rt[1].style.borderLeftColor = "rgb(54, 149, 205)"),
        (rt[1].style.borderRightColor = "transparent"));
    }
    n == "#aFooterDW" &&
      ((tt = document.getElementById("ctTips").children),
      tt[1].tagName == "I" && (tt[1].style.left = g + "px"),
      (tt[1].style.borderLeftColor = "rgb(54, 149, 205)"),
      (tt[1].style.borderRightColor = "transparent"));
    n == "#aMypurse" &&
      ((v = document.getElementById("mpTips").children),
      (v[1].style.left =
        a[0] > l
          ? window.screen.width / 4.5 + (a[0] - l) + "px"
          : window.screen.width / 4.5 + "px"),
      (v[1].style.left = "30%"),
      (v[1].style.borderLeftColor = "rgb(54, 149, 205)"),
      (v[1].style.borderRightColor = "transparent"),
      (y =
        parseInt($("#mpTips").parent().css("top"), 10) -
        parseInt($(n).css("margin-top"), 10)),
      $("#layui-layer" + s).css("top", y + "px"));
    n == "#aMypurse2" &&
      ((v = document.getElementById("mpTips2").children),
      (v[1].style.left =
        a[0] > l
          ? window.screen.width / 4.5 + (a[0] - l) + "px"
          : window.screen.width / 4.5 + "px"),
      (v[1].style.left = "30%"),
      (v[1].style.borderLeftColor = "rgb(54, 149, 205)"),
      (v[1].style.borderRightColor = "transparent"),
      $("#mpTips2").css("top", "-" + $(n).css("margin-top")));
    n == "#aKscz" &&
      ((ut = document.getElementById("ksczTips").children),
      (ut[1].style.left =
        a[0] > l
          ? window.screen.width / 4.5 + (a[0] - l) + "px"
          : window.screen.width / 4.5 + "px"),
      (ut[1].style.borderLeftColor = "rgb(54, 149, 205)"),
      (ut[1].style.borderRightColor = "transparent"),
      (y =
        parseInt($("#ksczTips").parent().css("top"), 10) -
        parseInt($(n).css("margin-top"), 10)),
      $("#layui-layer" + s).css("top", y + "px"));
    n == "#aKscz2" &&
      ((it = document.getElementById("kscz2Tips").children),
      (it[1].style.left =
        a[0] > l
          ? window.screen.width / 4.5 + (a[0] - l) + "px"
          : window.screen.width / 4.5 + "px"),
      (it[1].style.left = "70%"),
      (it[1].style.borderLeftColor = "rgb(54, 149, 205)"),
      (it[1].style.borderRightColor = "transparent"),
      (y =
        parseInt($("#kscz2Tips").parent().css("top"), 10) -
        parseInt($(n).css("margin-top"), 10)),
      $("#layui-layer" + s).css("top", y + "px"));
  } else
    n == "#aKscz" &&
      ((y =
        parseInt($("#ksczTips").parent().css("top"), 10) -
        parseInt($(n).css("margin-top"), 10)),
      $("#layui-layer" + s).css("top", y + "px")),
      n == "#aKscz2" &&
        ((y =
          parseInt($("#kscz2Tips").parent().css("top"), 10) -
          parseInt($(n).css("margin-top"), 10)),
        $("#layui-layer" + s).css("top", y + "px"));
}
function fnGetTip(n, t) {
  layer.tips("<span style='font-size:14px;'>" + n + "</span>", "#" + t, {
    tips: [3, "#3595CC"],
    time: 3e3,
    area: ["40%"],
  });
}
function fnGetTip2(n, t) {
  layer.tips("<span style='font-size:14px;'>" + n + "</span>", "." + t, {
    tips: [3, "#3595CC"],
    time: 3e3,
    area: ["40%"],
  });
}
function layerframePlatformPurse(n) {
  layer.open({
    title: !1,
    type: 2,
    content: [n, "no"],
    area: ["528px", "495px"],
    shade: 0.8,
    shift: 2,
    closeBtn: 0,
    moveOut: !0,
    fix: !1,
  });
}
function open_pop(n) {
  var s = n.title || webRes.Font_Info,
    r = "",
    i = Math.round(Math.random() * 1e9),
    f,
    h,
    t,
    e,
    u,
    o;
  n.type === 1
    ? ((r =
        '<div class="mask mask_pop_1 mask_pop_' +
        i +
        ' focus"><div class="popup_container hidden"><div class="popup_bg"><div class="popup"><div class="btn_close"></div><div class="popup_T"><span></span></div><div class="popup_In"><div class="deposit_submitT"></div><div class="deposit_submit_text"></div><button type="button" class="w100" id="btn_ok"></button></div></div></div></div></div>'),
      n.version === 1 &&
        (r =
          '<div class="mask mask_pop_1 mask_pop_' +
          i +
          ' focus"><div class="popup_container hidden"><div class="popup_bg"><div class="popup"><div class="btn_close"></div><div class="popup_T"><span></span></div><div class="popup_In"><div class="deposit_submitT"></div><div class="deposit_submit_text"></div><button type="button" class="w100" id="btn_ok"></button></div><div class="btnBox_bank"><input type = "button" id="btn_ok_new" class="btn_popupRB w100"></div></div></div></div></div>'),
      $("body").css({ width: "100%", overflow: "hidden", position: "fixed" }))
    : n.type === 2
    ? (r =
        '<div class="mask mask_pop_2 mask_pop_' +
        i +
        ' focus"><div class="popup_container hidden"><div class="popup_bg"><div class="popup"><div class="btn_close"></div><div class="popup_T"><span></span></div><div class="popup_In"><div class="deposit_submitT"></div><div class="deposit_submit_text"></div><div id="btn_panel"><button type="button" id="btn_no" class="w50L1 bg_colorGr"></button><button type="button" class="w50R1" id="btn_ok"></button></div></div></div></div></div></div>')
    : n.type === 3
    ? ((r =
        '<div class="mask mask_pop_' +
        i +
        '"><div class="popup_container popup_container2 hidden"><div class="popup_bg2"><div class="popup_g" id="scroller"><div class="btn_close2"></div><div class="popup_TG"> <span>' +
        n.title +
        '</span></div><div class="popup_In"><div><div> <input type="text" class="icon_loginID uppercase" id="txtUser" placeholder="' +
        n.userPlaceholder +
        '" maxlength="11"/></div><div style="position:relative;"><div class="pwON login off"><input type="password" class="icon_loginPW" id="txtPassword" value="" placeholder="' +
        n.pwdPlaceHolder +
        '" /><span class="icon_pw" onclick="spanPwdEye(this)"></span></div> <div class="loginFG" onclick="fnBack(\'/Mobile/Aspx/N_ForgotPassWord.aspx\')">' +
        GetTextLanguage("忘記密碼", "忘记密码", "Quên mật khẩu") +
        '?</div><span class="error_login_t hidden error_login_t_mobile"></span></div><div class="form_button"> '),
      (r += isRegisterOpen
        ? '<input type="button" class="w48 left orange" value="' +
          n.register +
          '" /><input type="button" class="w48 right" value ="' +
          n.login +
          '" id="btnLogin" /> '
        : '<input type="button" class="w48" value ="' +
          n.login +
          '" id="btnLogin" style="margin:0em auto;display:block"/>'),
      (r += "</div></div></div></div></div></div></div> "))
    : n.type === 4 || n.type === 6
    ? ((f = IsTw ? 10 : 11),
      (r =
        '<div class="mask login_verify mask_pop_' +
        i +
        '"><div class="popup_container3"><div class="popup_bg2"><div class="popup_g"><div class="btn_close"></div><div class="popup_TG"><span>' +
        n.title +
        '</span></div><div class="popup_In" style="padding:20px !important;"><div class="form"><div><input type="text" onblur="checkAccounts(this);" id="txtAccountsVerify" class="icon_loginID_a uppercase" placeholder="' +
        n.placeholderLogin +
        '" maxlength="' +
        f +
        '" autocomplete="off" data-checkkeyword=\'{ "tip": "' +
        webRes.Font_txtAccountsBlur_NotOK +
        '", "clear": 0, "max": 1 }\'></div><div style="position:relative;" class="pwON login verify off"><input type="password" id="txtPasswordVerify" class="icon_loginPW_a" value="" placeholder="' +
        n.placeholderPass +
        '"  data-checkkeyword=\'{ "tip": "Font_txtAccountPasswordBlur_NotOK", "clear": 1, "checkSimple": 1, "max": 1 }\' scroll-id="txtPassword"  autocomplete="off"><span class="icon_pw" onclick="spanPwdEye(this)"></span></div><div class="phoneverify' +
        (n.type === 6 ? " hidden" : "") +
        '"><input type="tel" pattern="[0-9]*" data-number="true" id="txtPhoneVerify" maxlength="' +
        f +
        '" value="" readonly="readonly" data-numberboard="1" class="icon_loginPHONE" placeholder="' +
        n.placeholderPhone +
        '"></div><div class="loginFG" style="margin-top:-10px;margin-bottom:-15px;" onclick="fnBack(\'/Mobile/Aspx/N_ForgotPassWord.aspx\')">' +
        GetTextLanguage("忘記密碼", "忘记密码", "Quên mật khẩu") +
        '?</div><br/><div class="captchaNumber" style="position:relative;"><div class="input_title"><img id="captchaImg" src="" style="position:relative;"/><i class="refresh-button"></i></div><input id="txtCaptcha" spellcheck="false" style="width:100%;" type="text" class="input_box" autocomplete="off" maxlength="4" placeholder="' +
        webRes.Font_Captcha_Number +
        '" data-checkkeyword=\'{ "tip": "Font_Captcha_Validate", "clear": 1, "checkSimple": 1, "max": 1 }\'/><input type="button" style="" value="' +
        webRes.Font_SetVoicePass_Msg7 +
        '" class="btn_confirm_captcha" disabled="disabled"/><br/><span class="captcha_error">' +
        webRes.Font_Captcha_Validate +
        '</span></div><div class="slidercaptcha card"><div class="card-body"><div id="captcha"></div><div id="captcha2"></div></div></div><div class="form_button"><span class="error_login_t extralayer"></span><input type="button" class="w100 right" value="' +
        n.oktext +
        '" onclick="verifyExtraLayer()" disabled="disabled"></div></div></div></div></div></div></div>'),
      $(":focus").blur(),
      $("body").css({ width: "100%", overflow: "hidden", position: "fixed" }))
    : n.type === 5
    ? ((h =
        logoNameNew + (gameCode == "26" ? "9" : gameCode == "35" ? "8" : "")),
      (r =
        '<div class="mask maskSA mask_pop_' +
        i +
        '" style="overflow:hidden"> <div class="popup_container"><div class="popup_bg"><div class="popup popupAPP"> <div class="btn_close btn_closeW"></div><div class="popup_TG sapp"><span>' +
        webRes.Font_ShareApp +
        '</span></div> <div class="popup_In shareApp" style="background:url(../images/main/bg_shareAPP.png) #fff center no-repeat; display: flex;flex-direction: column;"><img class="img_shareApp ' +
        logoNameNew +
        '" src="../images/' +
        site +
        "/logo_" +
        h +
        '2.svg"><div class="shareQR unselectable"></div><div class="btnBox"><a class="btn_share btn_share_link unselectable" style="width:30%;padding-top:30px" onclick="CopyAppLink();">' +
        webRes.Font_Copy +
        '</a><a class="btn_share btn_share_down unselectable" style="width:30%;padding-top:30px;border-right:none;" onclick="DownloadShareAppQR();">' +
        webRes.Font_Save +
        '</a><div class="remark linkCopy">' +
        webRes.Font_CopySuccess +
        '</div><div class="remark downCopy" onclick="">' +
        webRes.Font_SaveApp +
        "</div></div></div></div></div>"))
    : n.type === 7
    ? (r =
        '<div class="mask mask_pop_1 mask_pop_' +
        i +
        ' focus"><div class="popup_container hidden"><div class="popup_bg"><div class="popup"><div class="btn_close"></div><div class="popup_T"><span></span></div><div class="popup_In"><div class="deposit_submitT"></div><div class="deposit_submit_text"></div></div><button type="button" class="w100 btn_popupR" id="btn_ok"></button></div></div></div></div>')
    : n.type === 8 &&
      (r =
        '<div class="mask mask_pop_2 mask_pop_' +
        i +
        ' focus"><div class="popup_container hidden"><div class="popup_bg"><div class="popup transfer"><div class="btn_close"></div><div class="popup_T transfer"><span></span></div><div class="popup_In transfer"><div class="deposit_submitT"></div><div class="deposit_submit_text"></div><div id="btn_panel"><button type="button" id="btn_no" class="w50L1 bg_colorGr"></button><button type="button" class="w50R1" id="btn_ok"></button></div></div></div></div></div></div>');
  t = ".mask_pop_" + i;
  isSize(".mask_pop_" + i) || $("body").append(r);
  $(t).find(".popup_T").html(s);
  s == "-1" && $(t).find(".popup_T,.btn_close").hide();
  isNE(n.subtitle)
    ? $(t).find(".deposit_submitT").html(n.subtitle).show()
    : $(t).find(".deposit_submitT").hide();
  (n.type === 2 || n.type === 8) && n.content.indexOf("|") > -1
    ? ($(".popup_In").addClass("transfer"),
      (e = n.content.split("|")),
      $(t).find(".deposit_submit_text").html(e[0]),
      $(t).find(".popup").append(e[1]))
    : $(t).find(".deposit_submit_text").html(n.content);
  $(t)
    .find(".btn_close")
    .off("click")
    .on("click", function () {
      close_pop(i);
      n.closeback && n.closeback();
      $("body").css({ width: "", height: "", overflow: "", position: "" });
      $(this).parents(".login_verify").length == 0 && M_fnPlatformSet();
      requireCheckSpeed != "undefined" && (requireCheckSpeed = !0);
    });
  if (n.type === 3) {
    layerTip_close();
    document.onkeydown = function (n) {
      var t = document.all ? window.event : n;
      t.keyCode == 13 &&
        $(n.srcElement).parents(".login_verify").length == 0 &&
        fnLogin(n.type);
    };
    $("body").css({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "fixed",
    });
    $(t)
      .find(".btn_close2")
      .off("click")
      .on("click", function () {
        close_pop(i);
        n.closeback && n.closeback();
        $("body").css({ width: "", height: "", overflow: "", position: "" });
      });
    $(t)
      .find(".w48")
      .off("click")
      .on("click", function (n) {
        fnLogin(n.type);
      });
    $(t)
      .find("#txtUser")
      .on("blur", function () {
        checkRegeditUser2(this, 5);
      });
    $(t)
      .find("#txtPassword")
      .on("blur", function () {
        checkRegeditUser3(this, 5) && checkCountWord(this);
      });
    $(t)
      .find("#txtPassword")
      .on("input", function () {
        checkCountWord(this);
      });
    $(t)
      .find("#txtPassword")
      .on("touchstart click", function (n) {
        !IsIOS() &&
          isPaddingTouch(this, n) &&
          (n.preventDefault(),
          (this.scrollLeft = 0),
          this.setSelectionRange(0, 0));
      });
    $(t)
      .find(".w48.left.orange")
      .off("click")
      .on("click", function () {
        checkRegisterOpen();
      });
  }
  if (n.type === 4)
    $(t)
      .find("#txtPasswordVerify")
      .on("touchstart click", function (n) {
        !IsIOS() &&
          isPaddingTouch(this, n) &&
          (n.preventDefault(),
          (this.scrollLeft = 0),
          this.setSelectionRange(0, 0));
      });
  if (
    (n.version === 1 && $(t).find("#btn_ok_new").val(n.oktext),
    $(t)
      .find("button#btn_ok, #btn_ok_new")
      .html(n.oktext || webRes.Font_OK),
    (n.autoclose =
      n.autoclose == null || n.autoclose == undefined || n.autoclose == !0
        ? !0
        : !1),
    typeof n.callback == "function")
  )
    $(t)
      .find("button#btn_ok,.butIngame, #btn_ok_new")
      .off("click")
      .on("click", function () {
        n.autoclose && close_pop(i);
        n.callback && n.callback();
      });
  else if (n.callback)
    $(t).find("button#btn_ok,.butIngame").attr("onclick", n.callback);
  else
    $(t)
      .find("button#btn_ok,.butIngame")
      .off("click")
      .on("click", function () {
        n.autoclose && close_pop(i);
      });
  if (n.type === 2 || n.type === 8)
    if (
      ($(t)
        .find("button#btn_no")
        .html(n.notext || webRes.Font_Cancel),
      typeof n.cancelback == "function")
    )
      $(t)
        .find("button#btn_no")
        .off("click")
        .on("click", function () {
          $("body").css({ overflow: "" });
          n.autoclose && close_pop(i);
          n.cancelback && n.cancelback();
        });
    else if (n.cancelback)
      $(t).find("button#btn_no").attr("onclick", n.cancelback);
    else
      $(t)
        .find("button#btn_no")
        .off("click")
        .on("click", function () {
          n.autoclose && close_pop(i);
        });
  if (IsIOS() && IsUC() && n.type != 3 && n.type != 4)
    $(".mask").addClass("uc"),
      (u = $("body").height() + 50),
      (o = $(window).height()),
      u < o && (u = o),
      $(".mask").height(u);
  else if (
    IsIOS() &&
    (n.checkios || n.checkios == undefined || n.checkios == null) &&
    n.type != 7 &&
    n.type != 3 &&
    n.type != 4 &&
    location.pathname.toLowerCase().indexOf("chgdata") == -1 &&
    $(t)
      .find("input[type='text'],input[type='number'],input[type='password']")
      .size() > 0
  ) {
    scrollTopH = $(document).scrollTop();
    resteMaskPopup(!0, 300);
    $(document)
      .off("scroll")
      .on("scroll", function () {
        resteMaskPopup(!1, 0);
      });
    $(".mask")
      .find("input")
      .on("blur", function () {
        resteMaskPopup(!1, 0);
      });
  }
  return SendAppMessage("open"), layerTip_close(), $(t).show(100), i;
}
function checkCountWord(n) {
  n.value.length > 0 && n.value.length < 6
    ? Msg(webRes.Font_add_msg23)
    : $(".error_login_t").hide();
}
function checkRegisterOpen() {
  $.ajax({
    url: "/LoadData/AddCheckNum.ashx",
    type: "post",
    data: { checkType: "36" },
    cache: !1,
    timeout: 15e3,
    dataType: "json",
    success: function (n) {
      n == "False"
        ? $.fn.alert(webRes.Font_RegisterCloseMsg, function () {
            fnBack("/Mobile/Aspx/M_Index.aspx");
          })
        : fnBack("/Mobile/Aspx/N_Add1.aspx");
    },
  });
}
function close_pop(n) {
  n ? $(".mask_pop_" + n).remove() : $(".mask").remove();
  SendAppMessage("close");
  scrollTopH > 0 && $("body,html").animate({ scrollTop: scrollTopH }, 300);
}
function getprotocol(n) {
  var t = "https:" == document.location.protocol ? !0 : !1;
  return t ? n.replace("http://", "https://") : n;
}
function pdPass(n) {
  return /^[A-Za-z0-9]{6,10}$/.test(n);
}
function CheckFormIos() {
  var n = $.cookie("CookieIsMdApp");
  return n != null && n != undefined && n == "1";
}
function isHideTopFooter() {
  if (typeof IsTest == "undefined" || !IsTest) return !1;
  var n = $.cookie("tfh");
  return n != null && n != undefined && n == "1";
}
function checkPhoneNumber(n, t) {
  var i;
  return IsCn
    ? ((i =
        /^1(3[0-35-9]|(34[0-8])|4[56789]|5[0-35-9]|6[6]|7[2345678]|8[0-9]|9[012356789])(\d{7}|\d{8})$/g),
      n.length == 11 && i.test(n))
    : IsTw
    ? n.length == 10 && n.substr(0, 2) == "09" && !isNaN(n)
    : ((i =
        /^0(1[013457][0-9]|3[2-9]|(5[2689])|7[06789]|8[1-9]|9[0-9])(\d{7})$/g),
      t != undefined &&
        t &&
        (i =
          /^0(1[013457][0-9]|3[2-9]|(5[2689])|7[06789]|8[1-9]|9[0-9])(\d{7}|\d{8})$/g),
      i.test(n) && !isNaN(n));
}
function GetCookieInt(n) {
  return isNaN(parseInt($.cookie(n))) ? 0 : parseInt($.cookie(n));
}
function isNullOrEmpty(n) {
  return n == "" || n == null;
}
function ChooseCity1() {
  var t = $("#ddlCity").val(),
    n = $("#ddlCityArea"),
    i = IsCn ? webRes.Font_ChooseCity : webRes.Font_CityArea;
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "5", city: t },
    timeout: 15e3,
    success: function (t) {
      var r, f, u;
      if (
        ((t = htmlDecode(t)),
        (r = t.split(",")),
        n.empty(),
        (f = "<option value=''>" + i + "</option>"),
        r != "")
      )
        for (u = 0; u < r.length; u++)
          f += "<option value='" + r[u] + "'>" + r[u] + "</option>";
      n.append(f);
    },
  });
}
function ChooseCity2(n, t, i, r) {
  var f = n || $("#ddlCity").val(),
    u = t || $("#ddlCityArea"),
    e = r || webRes.Font_PleaseChoose;
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "48", city: f },
    timeout: 15e3,
    success: function (n) {
      var t, f, r;
      if (
        ((n = htmlDecode(n)),
        (t = n.split(",")),
        u.empty(),
        (f = "<option value=''>" + e + "</option>"),
        t != "")
      )
        for (r = 0; r < t.length; r++)
          f += "<option value='" + t[r] + "'>" + t[r] + "</option>";
      u.append(f);
      i && i(t);
    },
  });
}
function GetRandom(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
function SendAppMessage(n) {
  var t = n == "open" ? "appear" : "disappear";
  try {
    window.webkit.messageHandlers.alert.postMessage(t);
  } catch (i) {}
  try {
    byAndroid.callAndroidByJs(t);
  } catch (i) {}
}
function SendAppMessageRead(n) {
  try {
    window.webkit.messageHandlers.messageRead.postMessage({ id: n });
  } catch (t) {}
  try {
    byAndroid.callAndroidMessageReadByJs(n);
  } catch (t) {}
}
function checkcode(n) {
  return n != "" && n.length == 4 && !isNaN(n) ? !0 : !1;
}
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
function SetHMACMD5(n) {
  n = isNE(n) ? n.toLowerCase() : "";
  var t = hex_md5(n);
  return hex_hmac_md5(t, n);
}
function copy(n) {
  var t = $("<textarea />");
  t.val(n).css({ width: "1px", height: "1px" }).appendTo("body");
  t.select();
  document.execCommand("copy");
  t.remove();
}
function stopScroll() {
  if (currentElem)
    $("html, body")
      .stop()
      .animate({ scrollTop: 120 }, 10, function () {}),
      $("html").scrollTop(0);
}
function disableScrolling(n) {
  currentElem = n;
  document.addEventListener("touchend", stopScroll);
  setTimeout(function () {
    stopScroll();
  }, 10);
}
function enableScrolling() {
  currentElem = undefined;
  document.removeEventListener("touchend", stopScroll);
  $("html").scrollTop(0);
}
function getFastestUrl(n, t) {
  var r = n.split("|"),
    f = t == "36" ? "speedTest.ashx?sjs=" : "speed.ashx?sjs=",
    i,
    u;
  if (r.length < 2) checkSiteSpeed(n);
  else
    for ($("body").append("<div id=img></div>"), i = 0; i < r.length; i++)
      $("#img").append("<div></div>"),
        (u =
          "<img src=" +
          r[i] +
          f +
          Math.random() +
          " width=1 height=1   onLoad=checkSiteSpeed('" +
          r[i] +
          "')  style='display:none' />"),
        $("#img>div").eq(i).html(u);
}
function checkSiteSpeed(n) {
  requireCheckSpeed && ((requireCheckSpeed = !1), (fastestUrl = n));
}
function CheckDuplicateCrypto() {
  $("#cryptoWalletAddress").is(":visible")
    ? CheckDuplicate(2, $("#inputCryptoAddress"))
    : CheckDuplicate(3, $("#inputCryptoAddress"));
}
function CheckDuplicateBankCardTw() {
  if ($("#div_bank_box2").is(":visible")) {
    if ($("#txtRemittanceAccount3").val() == "") return;
    CheckDuplicate(1, $("#txtRemittanceAccount2"), $("#txtRemittanceAccount3"));
  } else CheckDuplicate(1, $("#txtRemittanceAccount2"));
}
function CheckDuplicateBankCardTwAdd2() {
  if ($("#div_bank_box2").is(":visible")) {
    if ($("#txtRemittanceAccount3").val() == "") return;
    CheckDuplicate(1, $("#txtRemittanceAccount"), $("#txtRemittanceAccount2"));
  } else CheckDuplicate(1, $("#txtRemittanceAccount"));
}
function CheckDuplicate(n, t, i) {
  if (t.val() != "") {
    isChecking = !0;
    var r = { type: "CheckDuplicate" };
    n == 2
      ? ($("#cryptoContractList").attr("disabled", "disabled"),
        (r.cryptoWalletAddress = t.val()))
      : n == 3
      ? (r.cryptoWalletAddress = t.val())
      : n == 4
      ? (r.jkoAccount = t.val())
      : n == 5
      ? (r.twPayNo = t.val())
      : ((r.remittanceAccount = t.val()),
        i != null && i != undefined && (r.visaNo = i.val()));
    r.cardType = n;
    $.ajax({
      url: "/LoadData/WithDraw.ashx",
      type: "post",
      dataType: "json",
      data: r,
      success: function (r) {
        r.StatusCode != 200
          ? $.fn.alert(
              "<div style='text-align:center'>" +
                r.StatusDescription +
                "</div>",
              function () {
                isChecking = !1;
                t.val("");
                t.keyboard("show");
                t.parent().find(".caretMask").text("");
                t.parent().find(".Rclose").hide();
                $("#txtPassword_tip2div").hide();
                $("#cryptoContractList").removeAttr("disabled");
                i != null &&
                  i != undefined &&
                  (i.val(""),
                  i.parent().find(".caretMask").text(""),
                  i.parent().find(".Rclose").hide());
                IsTest &&
                  n == 1 &&
                  ($("#ddlBankCode").val(""),
                  $("#ddlBankCode2").val(""),
                  $("#ddlSubBankCode").val(""),
                  t.keyboard("hide"),
                  fnEnableSubmit());
              }
            )
          : ($("#cryptoContractList").removeAttr("disabled"),
            (isChecking = !1));
      },
    });
  }
}
function htmlDecode(n) {
  var t = new DOMParser().parseFromString(n, "text/html");
  return t.documentElement.textContent;
}
function isPaddingTouch(n, t) {
  let i = 0,
    r = 0;
  const u = window.getComputedStyle(n, null),
    f = parseFloat(u.getPropertyValue("padding-top")),
    e = parseFloat(u.getPropertyValue("padding-right")),
    o = parseFloat(u.getPropertyValue("padding-left")),
    s = parseFloat(u.getPropertyValue("padding-bottom"));
  if (t.type == "touchstart") {
    const n = t.target.getBoundingClientRect();
    i = parseFloat(
      t.originalEvent.touches[0].clientX - window.pageXOffset - n.left
    );
    r = parseFloat(
      t.originalEvent.touches[0].clientY - window.pageYOffset - n.top
    );
  } else
    t.type == "click" &&
      ((i = parseFloat(t.offsetX)), (r = parseFloat(t.offsetY)));
  const h = i > o && i < n.offsetWidth - e,
    c = r > f && r < n.offsetHeight - s;
  return !(h && c);
}
function deleteCookie(n) {
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
var isLocalStorageSupported = function () {
    var n = "test",
      t = window.sessionStorage;
    try {
      return t.setItem(n, "1"), t.removeItem(n), !0;
    } catch (i) {
      return !1;
    }
  },
  ErrorText,
  ArrayUser2,
  ub,
  vb,
  scrollTopH,
  resteMaskPopup,
  IsMobPlatform,
  OSPlatform,
  requestcom,
  sendMessageType,
  currentElem,
  requireCheckSpeed,
  fastestUrl;
$(function () {
  var n = $(window).height(),
    t = (n - 110) / 2;
  jQuery.fn.extend({
    msg: function (n, t, i, r, u, f, e, o, s, h) {
      var l = r,
        v = u,
        a = "cashSkin cashSkinMobile",
        c;
      (IsYn || gameCode == 2) && (a += " THA");
      r || (typeof webRes != "undefined" && (l = webRes.Font_Info));
      u || (typeof webRes != "undefined" && (v = webRes.Font_OK));
      s && s != "" && (a += " " + s);
      var p = isNE(f) ? f : 0.46,
        e = isNE(e) ? e : 0,
        w = isNE(h) && h == !0 ? !0 : !1,
        y = $(this),
        b = IsYn
          ? "<div class='layer-content-inner yn-fontsize'>"
          : "<div class='layer-content-inner'>";
      return (
        l != null && l == webRes.Font_Attention && (e = 1),
        (c = $(window).width() * 0.7 > 274 ? 274 : $(window).width() * 0.7),
        l == webRes.Font_Attention
          ? (c = 274)
          : l == "代碼繳費資訊" && (c = 356),
        IsYn && (c = 290),
        $("#voucher").length > 0 && (c = 320),
        layer.alert(
          b + n + "</div>",
          {
            shade: p,
            title: "<div class='layer-title-inner'>" + l + "</div>",
            anim: -1,
            isOutAnim: !1,
            resize: !1,
            shadeClose: !1,
            btn: v,
            time: 0,
            offset: "auto",
            closeBtn: e,
            skin: a,
            maxWidth: c,
            success: function (n, t) {
              var e = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                i,
                r,
                u,
                f;
              if (IsAdd2 || (IsAdr() && e)) {
                $(".layui-layer-btn0").css(
                  "background-color",
                  "rgb(0 0 0 / 0%)"
                );
                $(".layui-layer-btn0").css("opacity", "unset");
                $(".layui-layer-btn0")
                  .on("touchstart", function () {
                    $(".layui-layer-btn0").css({
                      "background-color": "rgb(229,229,229)",
                      "border-bottom-left-radius": "10px",
                      "border-bottom-right-radius": "10px",
                    });
                  })
                  .on("touchend", function () {
                    $(".layui-layer-btn0").css(
                      "background-color",
                      "rgb(0 0 0 / 0%)"
                    );
                  });
              }
              w
                ? ((i = $(window).width() * 0.88),
                  layer.style(t, {
                    "max-width": i,
                    "min-width": c,
                    width: "max-content",
                  }),
                  $("body .layui-layer").css({
                    padding: "0 4%",
                    background: "#fff",
                  }),
                  $("body .cashSkin .layui-layer-content").css(
                    "margin",
                    "3px 0%"
                  ),
                  (r =
                    "0 -" +
                    parseInt(
                      $("body .cashSkin").css("padding-left").replace("px", "")
                    ) +
                    "px"),
                  $("body .cashSkin .layui-layer-btn").css("margin", r),
                  $(".layui-layer-content").css({
                    "max-height": "250px",
                    "overflow-y": "scroll",
                  }),
                  (u = window.innerHeight),
                  (f = (u - $("#layui-layer" + t).outerHeight()) / 2),
                  layer.style(t, { top: f }))
                : layer.style(t, { "max-width": c });
              l == "代碼繳費資訊" && n.outerWidth("86%");
              SendAppMessage("open");
              $("body").css("overflow", "hidden");
            },
            cancel: function () {
              o ? o() : i && i();
            },
            end: function () {
              OSPlatform.isPc && $("#txtMoneyTo").focus();
              t && fnBack(t);
              y && y.focus();
              SendAppMessage("close");
              $("body").css("overflow", "");
            },
          },
          function (n) {
            layer.close(n);
            i && i();
          }
        )
      );
    },
    alert: function (n, t, i, r, u, f, e, o, s) {
      var h = $(this);
      return h
        ? h.msg(n, !1, t, i, r, u, f, e, o, s)
        : h.msg(n, !1, t, i, r, u, f, e, o, s);
    },
    confirm: function (n, t, i, r, u, f, e, o) {
      var s = r,
        a = u,
        v = f,
        l = "cashSkin cashSkinMobile cashSkinConfirm",
        y = 0,
        c = isNE(o) && o == !0 ? !0 : !1,
        h,
        p;
      return (
        (IsYn || gameCode == 2) && (l += " THA"),
        r || r == 0 || (typeof webRes != "undefined" && (s = webRes.Font_Info)),
        ((s != null && s.indexOf(webRes.Font_CheckDetails) > -1) || c == !0) &&
          (y = 1),
        u || (typeof webRes != "undefined" && (a = webRes.Font_OK)),
        f || (typeof webRes != "undefined" && (v = webRes.Font_Cancel)),
        e && e != "" && (l += " " + e),
        (h = $(window).width() * 0.7 > 274 ? 274 : $(window).width() * 0.7),
        IsYn &&
          ((h = e == "bankInfoAdd2" || e == "uploadImage" ? "88%" : 290),
          (e == "uploadImage" || e == "bankInfoAdd2") &&
            window.innerWidth >= 768 &&
            (h = "356px")),
        IsTw &&
          (h = e == "confirmRemitName" ? 300 : e == "uploadIC" ? "88%" : h),
        IsCn && (h = e == "bankInfoAdd2" ? "88%" : h),
        ((s != null &&
          (s.indexOf(webRes.Font_CheckDetails) > -1 ||
            s == webRes.Font_UploadDetails ||
            s == "Nạp tiền nhanh")) ||
          c == !0) &&
          (h = 356),
        (p = IsYn
          ? "<div class='layer-content-inner yn-fontsize'>"
          : "<div class='layer-content-inner'>"),
        layer.confirm(
          p + n + "</div>",
          {
            shade: 0.46,
            anim: -1,
            isOutAnim: !1,
            resize: !1,
            shadeClose: !1,
            title: s,
            move: !1,
            btn: [v, a],
            time: 0,
            closeBtn: y,
            skin: l,
            maxWidth: h,
            success: function (n, t) {
              var u = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                i,
                r;
              if (u && IsAdr()) {
                $(".layui-layer-btn0, .layui-layer-btn1").css(
                  "background-color",
                  "rgb(0 0 0 / 0%)"
                );
                $(".layui-layer-btn0, .layui-layer-btn1").css(
                  "opacity",
                  "unset"
                );
                $(".layui-layer-btn0")
                  .on("touchstart", function () {
                    $(".layui-layer-btn0").css({
                      "background-color": "rgb(229,229,229)",
                      "border-bottom-left-radius": "10px",
                    });
                  })
                  .on("touchend", function () {
                    $(".layui-layer-btn0").css(
                      "background-color",
                      "rgb(0 0 0 / 0%)"
                    );
                  });
                $(".layui-layer-btn1")
                  .on("touchstart", function () {
                    $(".layui-layer-btn1").css({
                      "background-color": "rgb(229,229,229)",
                      "border-bottom-right-radius": "10px",
                    });
                  })
                  .on("touchend", function () {
                    $(".layui-layer-btn1").css(
                      "background-color",
                      "rgb(0 0 0 / 0%)"
                    );
                  });
              }
              layer.style(t, { "max-width": h });
              ((s != null &&
                (s.indexOf(webRes.Font_CheckDetails) > -1 ||
                  s == webRes.Font_UploadDetails ||
                  s == "Nạp tiền nhanh" ||
                  s == webRes.Font_UploadInformation ||
                  s == webRes.Font_UploadBankCard)) ||
                c == !0) &&
                (n.outerWidth("86%"),
                layer.style(t, { transform: "translateY(-50%)" }),
                $("body .layui-layer").addClass("top50"));
              c == !0 &&
                ($(".layui-layer-content").css({
                  "max-height": "250px",
                  "overflow-y": "scroll",
                }),
                (i = window.innerHeight),
                (r = (i - $("#layui-layer" + t).outerHeight()) / 2),
                layer.style(t, { top: r }),
                $(".layui-layer-btn0").addClass("Ldeep"),
                $(".layui-layer-btn1").addClass("Rdeep"));
              SendAppMessage("open");
            },
            cancel: function (n) {
              layer.close(n);
              c == !0 && t && t();
              SendAppMessage("close");
            },
            end: function (n) {
              layer.close(n);
              SendAppMessage("close");
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
    open: function (n, t, i, r, u, f, e, o, s) {
      var h = {
        title: n,
        type: 2,
        content: null,
        area: [i + "px", r + "px"],
        shade: o || 0,
        anim: -1,
        isOutAnim: !1,
        skin: "layer-msg-open",
        closeBtn: 1,
        resize: !1,
        moveOut: !1,
        end: function () {
          SendAppMessage("close");
          f && f();
        },
        success: function (n, t) {
          SendAppMessage("open");
          e && e(n, t);
        },
      };
      return (
        i == "auto" && (h.area[0] = i),
        r == "auto" && (h.area[1] = r),
        h.area[0].indexOf("%") && (h.area[0] = i),
        t.indexOf("/") < 0
          ? ((h.type = 1), (h.content = $(t)))
          : ((h.type = 2), (h.content = [t, u])),
        (h.closeBtn = s == null || s == undefined ? 1 : s),
        layer.open(h)
      );
    },
    loading: function () {
      loading();
    },
    closeloading: function () {
      closeloading();
    },
    keyboard: function (n) {
      var t = $(this),
        r,
        o,
        i,
        f,
        u,
        a,
        h,
        e,
        s,
        c,
        l,
        v;
      if (typeof n == "string") {
        if (((r = t.data("opt")), !r)) return;
        o =
          r.keybox.parent().next(".formDep_Reality").length > 0
            ? r.keybox
                .parent()
                .next(".formDep_Reality")
                .next("div.num_keyboard")
            : r.keybox.parent().next("div.num_keyboard").length > 0
            ? r.keybox.parent().next("div.num_keyboard")
            : r.keybox.find("div.num_keyboard");
        n == "hide"
          ? o.is(":hidden") ||
            (t.hasClass("text_overflow") &&
              ($(t).val().length == 7 && $(t).val($(t).val() + "  "),
              $(t).innerWidth() < $(t)[0].scrollWidth &&
                ($(t).removeAttr("style"),
                $(t).addClass("maxWidth"),
                $(t).css({
                  "text-overflow": "ellipsis",
                  direction: "",
                  "max-width": "8ch",
                  "padding-right": "1%",
                }))),
            o.removeClass("show"),
            t.parent().find(".Rclose").hide(),
            t.parent().find(".caretMask").hide(),
            r.blur && r.blur())
          : n == "show" &&
            (t.hasClass("text_overflow") &&
              ($(t).val($.trim($(t).val())),
              $(t).removeAttr("style"),
              $(t).removeClass("maxWidth"),
              $(t).innerWidth() < $(t)[0].scrollWidth &&
                $(t).css({
                  "text-overflow": "",
                  direction: "rtl",
                  "max-width": "",
                  "padding-right": "0%",
                })),
            $("[data-numberboard='1']").not(t).size() > 0 &&
              $("[data-numberboard='1']")
                .not(t)
                .each(function () {
                  $(this).keyboard("hide");
                  r.keybox.find(".caretMask").css("display", "inline-flex");
                }),
            o.is(":hidden") &&
              (o.addClass("show"),
              $(".mask").size() <= 0 && scrollTop(t),
              r.focus && r.focus(),
              r.keybox.find(".caretMask").css("display", "inline-flex")));
      } else if (((n = n || {}), (n.type = n.type || "money"), t)) {
        if (
          (OSPlatform.isPc || t.attr("onkeydown", "return false;"),
          t.attr("onpaste", "return false;"),
          (i = t.parent()),
          (n.keybox = n.keybox || i),
          i.find(".keyboard-mask").size() > 0)
        )
          return;
        f = $(
          "<div class='keyboard-mask'><span class='caretMask'></span><div class='Rclose'></div></div>"
        );
        u = t.outerHeight(!0);
        t.prev(".form_T").hasClass("from_L")
          ? ((a = t.position().top), f.css({ height: u, top: a }))
          : t.parent().hasClass("formDep_In") && t.hasClass("inputTBig")
          ? ((f = $(
              "<div class='keyboard-mask'><span class='caretMask'></span><div class='Rclose bold'></div></div>"
            )),
            (u = t.parent().parent().outerHeight(!0)),
            f.css({ height: u, top: "0px" }))
          : t.parent().hasClass("form_In form_Left form_w90L") &&
            t.parent().prev().hasClass("form_T")
          ? f.css({ height: u })
          : f.css({ height: u, "margin-top": -u });
        t.after(f);
        i.find(".caretMask").css("font-size", t.css("font-size"));
        i.find(".caretMask").css("font-weight", t.css("font-weight"));
        i.find(".caretMask").css({ height: u });
        (t.attr("id") == "txtPhoneVerify" ||
          t.attr("id") == "txtRemittanceAccount2") &&
          i.find(".caretMask").css({ height: t.height() });
        i.find(".Rclose").css({ right: "-1%", height: u });
        h = this.originalVal = $.fn.val;
        $.fn.val = function (n) {
          return (
            $(".freeHint").is(":visible") && freeHint(),
            typeof n == "undefined"
              ? h.call(this)
              : (n == "" &&
                  i.find(i.prevObject.selector).val() == "" &&
                  (i.find(".caretMask").text(""),
                  i.find(".Rclose").hide(),
                  $(".butIngame").addClass("disabled")),
                this.selector == i.prevObject.selector &&
                  i.find(".caretMask").text(n),
                h.call(this, n))
          );
        };
        i.find(".Rclose").on("click", function (r) {
          OSPlatform.isPc && $("#txtMoneyTo").focus();
          $(".freeHint").is(":visible") && freeHint();
          t.attr("id") == "txtPhoneVerify" && layer.closeAll();
          t.attr("id") == "btn_bankID" &&
            ($("#txtPassword_tip3div").css("display", "none"),
            $(".formDep_dep .num_keyboard").css("margin-top", "12px"));
          t.attr("id") == "txtRemittanceCard" &&
            ($("#txtPassword_tip2div").css("display", "none"),
            $(".formDep_dep .num_keyboard").css("margin-top", "12px"),
            $(".dep_limited").hide(),
            $("#txtRemittanceCard").css("color", "black"));
          t.val("");
          i.find(".Rclose").hide();
          $(".butIngame").size() > 0 && $(".butIngame").addClass("disabled");
          $("#btn_ok").size() > 0 && $("#btn_ok").addClass("disabled");
          $("#btn_addBank").size() > 0 &&
            $("#btn_addBank").attr("disabled", "disabled");
          i.find(".caretMask").text("");
          (location.pathname.toLocaleLowerCase().indexOf("m_bankadd") > -1 ||
            location.pathname.toLocaleLowerCase().indexOf("m_chgbank") > -1) &&
            (i.find("#txtimg3").css("background-position", "0px -70px"),
            i.find("#txtimg2").css("background-position", "0px -70px"),
            i.find(".phoneRight").attr("disabled", "disabled"));
          n.changeValue && n.changeValue();
          stopPropagation(r);
        });
        i.find(".keyboard-mask").on("click", function (r) {
          var u, f;
          t.hasClass("disabled") ||
            ((u =
              n.keybox.parent().next(".formDep_Reality").length > 0
                ? n.keybox
                    .parent()
                    .next(".formDep_Reality")
                    .next("div.num_keyboard")
                : n.keybox.parent().next("div.num_keyboard").length > 0
                ? n.keybox.parent().next("div.num_keyboard")
                : n.keybox.find("div.num_keyboard")),
            t.is(":not(:disabled)")
              ? (t.hasClass("text_overflow") &&
                  ($(t).val($.trim($(t).val())),
                  $(t).removeAttr("style"),
                  $(t).removeClass("maxWidth"),
                  $(t).innerWidth() < $(t)[0].scrollWidth &&
                    $(t).css({
                      "text-overflow": "",
                      direction: "rtl",
                      "max-width": "",
                      "padding-right": "0%",
                    })),
                (f = n.boardDisplay && n.boardDisplay()),
                (f == null || f == undefined) && (f = !0),
                f
                  ? u.is(":hidden")
                    ? ($("[data-numberboard='1']").not(t).size() > 0 &&
                        $("[data-numberboard='1']")
                          .not(t)
                          .each(function () {
                            $(this).keyboard("hide");
                            $(this).parent().find(".Rclose").hide();
                            $(".caretMask").hide();
                          }),
                      t.val().length > 0 &&
                        (i.find(".Rclose").show(),
                        t.val().indexOf("*") > -1 &&
                          i.find(".caretMask").text(t.val())),
                      u.addClass("show"),
                      i.find(".caretMask").css("display", "inline-flex"),
                      $(".mask").size() <= 0 &&
                        pageNamex != "m_mypurse.aspx" &&
                        scrollTop(t),
                      n.focus && n.focus())
                    : (u.removeClass("show"),
                      i.find(".Rclose").hide(),
                      i.find(".caretMask").hide(),
                      n.blur && n.blur())
                  : (u.removeClass("show"),
                    i.find(".Rclose").hide(),
                    n.keybox.find(".caretMask").hide()))
              : (u.removeClass("show"),
                i.find(".Rclose").hide(),
                n.keybox.find(".caretMask").hide()),
            i.find(".caretMask").text(t.val()),
            stopPropagation(r));
        });
        s =
          n.keybox.parent().find(".formDep_In").length > 0
            ? n.keybox.parent().parent()
            : n.keybox;
        c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        s.on(
          c ? "touchstart" : "mousedown",
          ".num_keyboard>ul>li",
          function (r) {
            var f, u;
            (r.preventDefault(),
            n.keybox.parent().next(".formDep_Reality").length > 0 &&
              n.keybox.find("div.num_keyboard").length == 0 &&
              i.find("input").attr("id") !=
                $(this)
                  .parent()
                  .parent()
                  .prev()
                  .prev()
                  .find("div.formDep_In>input")
                  .attr("id")) ||
              ((n.keybox.parent().next(".formDep_Reality").length != 0 ||
                n.keybox.find("div.num_keyboard").length != 0 ||
                i.find("input").attr("id") ==
                  $(this)
                    .parent()
                    .parent()
                    .prev()
                    .find("div.formDep_In>input")
                    .attr("id")) &&
                ($(this).addClass("active"),
                (f = $(this).data("key")),
                f == "←"
                  ? (e && window.clearInterval(e),
                    (e = window.setInterval(function () {
                      var n = l();
                      n == "" &&
                        (e && window.clearInterval(e),
                        i.find(".Rclose").hide());
                    }, 150)),
                    l())
                  : ((u = t.val()),
                    (u += f),
                    (u = numberCheck(t, n.type, u)),
                    t.val(u),
                    n.changeValue && n.changeValue(t, u)),
                t.val().length > 0 && t.val() != "+"
                  ? ($("#btn_ok,.butIngame").removeClass("disabled"),
                    i.find(".Rclose").show())
                  : i.find(".Rclose").hide(),
                i.find(".caretMask").text(t.val()),
                OSPlatform.isPc
                  ? $("#txtMoneyTo").focus()
                  : i.find(".caretMask").css("display", "inline-flex"),
                setTimeout(function () {
                  this.selectionStart = this.selectionEnd = 1e4;
                }, 0),
                stopPropagation(r)));
          }
        );
        s.on("click", ".num_keyboard>ul>li", function (n) {
          stopPropagation(n);
        });
        s.on(
          c ? "touchend touchcancel" : "mouseup mouseout",
          ".num_keyboard>ul>li",
          function (n) {
            n.preventDefault();
            $(this).removeClass("active");
            e && window.clearInterval(e);
            stopPropagation(n);
          }
        );
        l = function () {
          var r = t.val();
          return (
            (r = r.length > 0 ? r.substr(0, r.length - 1) : ""),
            t.val(r),
            i.find(".caretMask").text(r),
            n.changeValue && n.changeValue(t, r),
            (r == "" || r == undefined) &&
              (($("#btn_panel").size() > 0 || $("#fast_transfer").size() > 0) &&
                $("#btn_ok").addClass("disabled"),
              $(".butIngame").addClass("disabled")),
            r
          );
        };
        v = function () {
          var t = "<div class='num_keyboard'>",
            i,
            r;
          n.type == "money2"
            ? ((t += "<ul class='ul-l'>"),
              (i = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]),
              $.each(i, function (n, i) {
                t += "<li data-key='" + i + "'><span>" + i + "</span></li>";
              }),
              n.type == "money2" &&
                (t +=
                  "</ul><ul class='ul-r ul-r2'><li data-key='←'><span class='numClear'>←</span></li><li data-key='.'><span class='numClear'>.</span></li></ul></div>"))
            : ((t += "<ul class='ul-f'>"),
              (i = ["1", "2", "3", "4", "5", "←", "6", "7", "8", "9", "0"]),
              $.each(i, function (n, i) {
                var r = i;
                i == "←" &&
                  (r =
                    "<img src='../../images/btn_arrowCRB.svg' style='width:50%;'/>");
                t += "<li data-key='" + i + "'><span>" + r + "</span></li>";
              }),
              (t += "</ul></div>"));
          r =
            n.keybox.parent().next(".formDep_Reality").length > 0
              ? n.keybox.parent().next(".formDep_Reality")
              : n.keybox.parent().find(".formDep_In").length > 0
              ? n.keybox.parent()
              : n.keybox;
          n.keybox.parent().find(".formDep_In").length > 0
            ? r.after(t)
            : r.append(t);
          n.init && n.init();
        };
        v();
        t.data("opt", n);
        t.attr("data-numberboard", 1);
      }
    },
    customSelect: function (n) {
      function s() {
        var n, u;
        $("#customSelectBox_" + i).length > 0 &&
          $("#customSelectBox_" + i).remove();
        n = [];
        u = t.val();
        $.each(t.find("option"), function () {
          n.push({
            value: $(this).val(),
            text: $(this).text(),
            selected: $(this).val() === u,
          });
        });
        $.each(n, function (n, i) {
          html +=
            n == 0
              ? t.selector.indexOf("ddlPayin") > -1
                ? "<li style='display:none;'><div class='selectIn'>" +
                  i.text +
                  "</div><span class='selectNum' value='" +
                  i.value +
                  "'><img class='img_spinner' src='/Mobile/images/main/spinner.svg'></span></li>"
                : "<li class='on'><div class='selectIn'>" +
                  i.text +
                  "</div><span class='selectNum' value='" +
                  i.value +
                  "'><img class='img_spinner' src='/Mobile/images/main/spinner.svg'></span></li>"
              : n == 1 && t.selector.indexOf("ddlPayin") > -1
              ? "<li style='display:none;'><div class='selectIn'>" +
                i.text +
                "</div><span class='selectNum' value='" +
                i.value +
                "'><img class='img_spinner' src='/Mobile/images/main/spinner.svg'></span></li>"
              : "<li><div class='selectIn'>" +
                i.text +
                "</div><span class='selectNum' value='" +
                i.value +
                "'><img class='img_spinner' src='/Mobile/images/main/spinner.svg'></span></li>";
        });
        var f = $("#main-header").outerHeight(),
          e = $("#main-footer").outerHeight(),
          o = $(window).height() - f - e;
        $("#customSelectBox_" + i + " .selectBox").css({
          height: "auto",
          "max-height": o,
        });
        $("#customSelectBox_" + i)
          .off("click")
          .on("click", function () {
            $(this).hide();
            IsIOS() && $("html,#main-content").removeClass("noscroll");
          });
        $("#customSelectBox_" + i + " .selectBox li")
          .off("click")
          .on("click", function (n) {
            $(this).siblings("li").not($(this)).removeClass("active");
            $(this).addClass("active");
            t.val($(this).data("value"));
            t.trigger("change");
            r.callback && r.callback();
            $("#customSelectBox_" + i).hide();
            IsIOS() && $("html,#main-content").removeClass("noscroll");
            stopPropagation(n);
          });
      }
      var r = $.extend({ callback: null, eachload: !1 }, n),
        u = location.href,
        t = $(this),
        e =
          IsYn && u.indexOf("M_Mypurse.aspx") > -1
            ? t.parent().outerWidth()
            : t.outerWidth(),
        o =
          IsYn && u.indexOf("M_Mypurse.aspx") > -1
            ? t.parent().outerHeight() - 5
            : t.outerHeight(),
        i = new Date().getTime(),
        f = $("<div id='customSelect_" + i + "'>");
      f.css({ width: e, height: o, position: "absolute", top: t[0].offsetTop });
      t.after(f);
      s();
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
    isApp: function () {
      return $.cookie("embed") && $.cookie("embed") == "true";
    },
    NativeAPP: function () {
      return $.cookie("NativeAPP") && $.cookie("NativeAPP") == "1";
    },
    GetQueryStringByName: function (n) {
      var t = location.search.match(new RegExp("[?&]" + n + "=([^&]+)", "i"));
      return t == null || t.length < 1 ? "" : t[1];
    },
    copy: function () {
      var t = IsIPad()
          ? "cashSkin cashSkinCopy ipad-position"
          : "cashSkin cashSkinCopy",
        n = $(window).width() * 0.46 > 195 ? 195 : $(window).width() * 0.46;
      return layer.msg(
        '<div  style="text-align:center;margin-bottom:10px;line-height:0;"><img class=\'copySuccess\' src="/Scripts/layer/theme/default/icon_checkGreen.svg"></div><div>' +
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
          skin: t,
          maxWidth: n,
          success: function (t, i) {
            layer.style(i, { "max-width": n });
            $(".layui-layer-content").css({ margin: 0, padding: "20px 10px" });
            SendAppMessage("open");
          },
          end: function (n) {
            layer.close(n);
            SendAppMessage("close");
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
      var f = IsIPad()
          ? "cashSkin cashSkinCopy ipad-position"
          : "cashSkin cashSkinCopy",
        u = $(window).width() * 0.46 > 195 ? 195 : $(window).width() * 0.46;
      return (
        r && (u = r),
        layer.msg(
          '<div  style="text-align:center;margin-bottom:10px;line-height:0;"><img class=\'copySuccess\' src="/Scripts/layer/theme/default/icon_checkGreen.svg"></div><div>' +
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
            skin: f,
            maxWidth: u,
            success: function (n, t) {
              layer.style(t, { "max-width": u });
              $(".layui-layer-content").css({
                margin: 0,
                padding: "20px 10px",
              });
              r && $(".layui-layer-msg").css({ width: r });
              SendAppMessage("open");
            },
            end: function (n) {
              layer.close(n);
              SendAppMessage("close");
              t && t();
            },
          },
          function (n) {
            layer.close(n);
          },
          function (n) {
            layer.close(n);
          }
        )
      );
    },
  });
  String.prototype.replaceAll = function (n, t) {
    return this.replace(new RegExp(n, "gm"), t);
  };
  Number.prototype.toMoney = function (n) {
    var t = this;
    return (
      (n = n == null ? 2 : n),
      (t = t.toFixed(n)),
      (t = parseFloat(t)),
      (t = t.toLocaleString()),
      IsYn &&
        ((t = t.replace(/\./g, "x")),
        (t = t.replace(/,/g, ".")),
        (t = t.replace(/x/g, ","))),
      t
    );
  };
});
window.alertTip = function (n, t, i, r, u, f) {
  $.fn.msg(n, !1, t, i, r, u, f);
};
window.msg1 = function (n, t, i, r, u, f, e) {
  $.fn.msg(n, t, i, r, u, f, e);
};
window.confirmTip = function (n, t, i, r, u, f, e) {
  return $.fn.confirm(n, t, i, r, u, f, e);
};
window.loading = function () {
  var n = { shade: 0.46, shadeClose: !1, time: 0 };
  n.skin = CheckFormIos() ? "layer-loading3" : "layer-loading";
  layer.load(3, n);
};
window.closeloading = function () {
  layer.closeAll("loading");
};
window.numberCheck = function (n, t, i) {
  var u = "",
    r,
    f;
  return (
    t == "money" || t == "transfer"
      ? ((r = i.replace(/\D/g, "").substring(0, 10)),
        (u =
          r == "" || isNaN(r)
            ? ""
            : r.substring(0, 1) == 0
            ? ""
            : parseFloat(r).toString()))
      : t == "money2"
      ? ((r = i.replace(/[^\d\.]/g, "").substring(0, 10)),
        (r = r.replace(/^\./g, "")),
        (r = r.replace(/\.{2,}/g, ".")),
        (r = r.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")),
        (u = r == "" || isNaN(r) ? "" : r.substring(0, 1) == 0 ? "" : r))
      : (u = t == "tel" ? i.replace(/[^0-9|+]/g, "") : i.replace(/\D/g, "")),
    (f = n.attr("maxlength")),
    f > 0 && u.length > f && (u = u.substring(0, f)),
    u
  );
};
window.delBtnOnOff = function (n, t) {
  var r = isSize($(n).parent("div.on")),
    i = n == ".pMailCheckbox" ? "bg_colorSB" : "bg_colorRed";
  r
    ? $(t).removeClass("bg_colorGr").addClass(i)
    : $(t).removeClass(i).addClass("bg_colorGr");
};
window.closeMaintain = function (n, t, i, r, u) {
  var o = i == null || i == undefined,
    f,
    e;
  t = t == null || t == undefined || t == !0 ? !0 : !1;
  f = {};
  e = !1;
  typeof n == "string" ? (f[n] = i == 1 || i == 2) : ((f = n), (e = !0));
  $.each(f, function (n, f) {
    if (f) $(n).removeClass("off"), $(n).children("div.maintain").remove();
    else if (
      (e && (n = n.indexOf("#") > -1 || n.indexOf(".") > -1 ? n : "#" + n),
      t && $(n).removeAttr("onclick").off("click").unbind("click"),
      $(n).addClass("off"),
      $(n).children("div.maintain").size() <= 0)
    )
      if (o)
        $(n).append(
          '<div class="dep_maintain">' + webRes.Font_Maintain2 + "</div>"
        );
      else {
        var s = fnGetMaintainText(i, r, u);
        $(n).append(
          '<div class="gameMainTain_text maintain {0}"><div>{1}</div></div>'
            .replace("{0}", u == 1 || u == 3 ? "style" : "")
            .replace("{1}", s)
        );
      }
  });
};
Date.prototype.format = function (n) {
  var e = this.getFullYear(),
    i = this.getMonth(),
    r = this.getDate(),
    o = this.getDay(),
    t = this.getHours(),
    u = this.getMinutes(),
    f = this.getSeconds();
  return n
    .replace("yyyy", e)
    .replace("dd", (r < 10 ? "0" : "") + r)
    .replace("HH", (t < 10 ? "0" : "") + t)
    .replace(
      "hh",
      ((t > 0 && t < 10) || (t > 12 && t < 22) ? "0" : "") +
        (((t + 11) % 12) + 1)
    )
    .replace("mm", (u < 10 ? "0" : "") + u)
    .replace("ss", (f < 10 ? "0" : "") + f)
    .replace("MM", (i < 9 ? "0" : "") + (i + 1));
};
Date.prototype.DateAdd = function (n, t) {
  var i = this;
  switch (n) {
    case "y":
      return i.setFullYear(i.getFullYear() + t), i;
    case "q":
      return i.setMonth(i.getMonth() + t * 3), i;
    case "m":
      return i.setMonth(i.getMonth() + t), i;
    case "w":
      return i.setDate(i.getDate() + t * 7), i;
    case "d":
      return i.setDate(i.getDate() + t), i;
    case "h":
      return i.setHours(i.getHours() + t), i;
    case "mm":
      return i.setMinutes(i.getMinutes() + t), i;
    case "s":
      return i.setSeconds(i.getSeconds() + t), i;
    default:
      return i.setDate(d.getDate() + t), i;
  }
};
ArrayUser2 = [];
ub = /select|textarea/i;
vb =
  /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i;
$.fn.extend({
  serialize2: function () {
    return $.param(this.serializeArray2());
  },
  serializeArray2: function () {
    return this.map(function () {
      return this.elements ? $.makeArray(this.elements) : this;
    })
      .filter(function () {
        return (
          this.id &&
          !this.disabled &&
          (this.checked || ub.test(this.nodeName) || vb.test(this.type))
        );
      })
      .map(function (n, t) {
        return (
          (n = $(this).val()),
          n == null
            ? null
            : $.isArray(n)
            ? $.map(n, function (n) {
                return { name: t.id, value: n };
              })
            : { name: t.id, value: n }
        );
      })
      .get();
  },
});
var IsTw = webRes.Font_Lan === "tw",
  IsCn = webRes.Font_Lan === "cn",
  IsYn = webRes.Font_Lan === "yn",
  mobileVhCheck;
!mobileVhCheck &&
  window.vhCheck &&
  (mobileVhCheck = window.vhCheck({ force: !0 }));
scrollTopH = 0;
resteMaskPopup = function (n, t) {
  var r, i;
  n && ((r = $(document).height()), $(".mask").addClass("ios").height(r));
  i = ($(window).height() - $(".popup_container>.popup_bg").height()) / 2;
  $(".mask").find("input:focus").size() <= 0 &&
    (t > 0 && !$(".mask>.popup_container").hasClass("popup_container2")
      ? $(".mask>.popup_container").animate(
          { "margin-top": $(document).scrollTop() + i },
          t
        )
      : $(".mask>.popup_container").hasClass("popup_container2") ||
        $(".mask>.popup_container").css(
          "margin-top",
          $(document).scrollTop() + i
        ));
};
IsMobPlatform = function () {
  var n = { win: !1, mac: !1, xll: !1 },
    t = navigator.platform;
  return (
    (n.win = t.indexOf("Win") == 0),
    (n.mac = t.indexOf("Mac") == 0),
    (n.x11 = t == "X11" || t.indexOf("Linux") == 0),
    n.win || n.mac || n.xll ? 0 : 1
  );
};
OSPlatform = (function () {
  var n = navigator.userAgent,
    u = /(?:Windows Phone)/.test(n),
    f = /(?:SymbianOS)/.test(n) || u,
    t = /(?:Android)/.test(n),
    e = /(?:Firefox)/.test(n),
    s = /(?:Chrome|CriOS)/.test(n),
    i =
      /(?:iPad|PlayBook)/.test(n) ||
      (t && !/(?:Mobile)/.test(n)) ||
      (t && /(?:Tablet)/.test(n)) ||
      (e && /(?:Tablet)/.test(n)),
    r = /(?:iPhone)/.test(n) && !i,
    o = !r && !t && !f;
  return { isTablet: i, isPhone: r, isAndroid: t, isPc: o };
})();
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
    timeout: 15e3,
    error: function () {
      closeloading();
    },
    success: function (n) {
      closeloading();
      i && i(n);
    },
  });
};
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
sendMessageType = {
  Verification: 1,
  ForgetPassword: 2,
  ForgetDrawPassword: 3,
  ForgetPassAndDrawPass: 4,
  MembersTurn: 5,
  ChangePhoneOld: 6,
  ChangePhoneNew: 7,
  AddBankTw: 8,
  AlipayVerify: 9,
  MemberComplete: 10,
  ForgetPassYn: 12,
  AstroPayVerify: 13,
  DrawAddBankCard: 14,
  AddJkoAccount: 17,
  AddCryptoAccount: 18,
  MemberTurnSubmit: 19,
  AddRCoinAccount: 23,
};
window.smartScroll = function (n, t) {
  if (t && !n.data("isBindScroll")) {
    var r,
      i = { posY: 0, maxscroll: 0 };
    n.on({
      touchstart: function (n) {
        var f = n.originalEvent.targetTouches[0] || n,
          u = $(n.target),
          r;
        u.length &&
          (u.is(t) ? (r = u) : (r = u.parents(t)).length == 0 && (r = null),
          r) &&
          ((i.elScroll = r),
          (i.posY = f.pageY),
          (i.scrollY = r.scrollTop()),
          (i.maxscroll = r[0].scrollHeight - r[0].clientHeight));
      },
      touchmove: function (n) {
        (i.maxscroll <= 0 || r) && n.preventDefault();
        var t = i.elScroll,
          f = t.scrollTop(),
          e = n.originalEvent.targetTouches[0] || n,
          u = e.pageY - i.posY;
        if (r) {
          t.scrollTop(i.scrollY - u);
          t.trigger("scroll");
          return;
        }
        if (u > 0 && f == 0) {
          n.preventDefault();
          return;
        }
        if (u < 0 && f + 1 >= i.maxscroll) {
          n.preventDefault();
          return;
        }
      },
      touchend: function () {
        i.maxscroll = 0;
      },
    });
    n.data("isBindScroll", !0);
  }
};
$.fn.extend({
  disableSelection: function () {
    return (
      this.each(function () {
        this.onselectstart = function () {
          return !1;
        };
        this.unselectable = "on";
        $(this).css("-moz-user-select", "none");
        $(this).css("-webkit-user-select", "none");
      }),
      this
    );
  },
});
window.addEventListener("popstate", function () {
  document.referrer.toLowerCase().indexOf("n_add1") > -1 &&
    location.pathname.toLowerCase().indexOf("m_add2") > -1 &&
    fnBackHomeIndex();
});
requireCheckSpeed = !0;

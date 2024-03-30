function openNewWindow(n, t, i) {
  var r = t || 1024,
    u = (window.screen.availWidth - 10 - r) / 2,
    f =
      "top=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, width=" +
      r +
      ", left=" +
      u +
      ", height=" +
      window.screen.availHeight;
  i = i || n;
  window.open(n, i, f);
}
function openNewWindowAutoHeight(n, t, i) {
  var r = t,
    u = i,
    f = (window.screen.availWidth - 10 - r) / 2,
    e = (window.screen.availHeight - 10 - u) / 2,
    o =
      "top=" +
      e +
      ", toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, width=" +
      r +
      ", left=" +
      f +
      ", height=" +
      u;
  window.open(n, "", o);
}
function openNewWindowAutoHeightName(n, t, i, r, u) {
  var f = t,
    e = i,
    s = (window.screen.availWidth - 10 - f) / 2,
    h = (window.screen.availHeight - 10 - e) / 2,
    o;
  u = u || "yes";
  o =
    "top=" +
    h +
    ", toolbar=no, menubar=no, scrollbars=yes, resizable=" +
    u +
    ", location=no, width=" +
    f +
    ", left=" +
    s +
    ", height=" +
    e;
  r = r || n;
  window.open(n, r, o);
}
function openNewAllWindow(n) {
  var t =
    "top=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, width=" +
    window.screen.availWidth +
    ",height=" +
    window.screen.availHeight;
  window.open(n, "", t);
}
function openTS_MatchOnLiveChat(n) {
  openNewWindowAutoHeightName(n, 1168, 590, "OnLiveChat", "no");
}
function open0(n, t) {
  openNewWindowAutoHeight(n, 1024, t);
}
function open1(n) {
  openNewWindowAutoHeight(n, 800, 650);
}
function open3(n) {
  open0(n, 790);
}
function open6(n) {
  open0(n, 790);
}
function open7(n, t, i) {
  openNewWindowAutoHeight(n, t, i);
  window.opener = null;
  window.open("", "_self");
  window.close();
}
function open9(n) {
  open0(n, 730);
}
function open10(n) {
  openNewWindowAutoHeight(n, 1e3, 800);
}
function openDepositModel(n) {
  openNewWindowAutoHeight(n, 1e3, 800);
}
function openService(n) {
  openNewWindowAutoHeightName(n, 1002, IsYn ? 737 : 710, "Gamekefu_");
}
function openNewWindowGetWidth(n) {
  var t = $("body").data("openOnlineService");
  t ||
    ($("body").data("openOnlineService", !0),
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      cache: !1,
      data: {
        checkType: "19",
        type: n,
        accounts: GetQueryString("accounts"),
        upper: GetQueryString("upper"),
        status: GetQueryString("status"),
        timestamp: new Date().getTime(),
      },
      timeout: 15e3,
      success: function (n) {
        n = htmlDecode(n);
        n == webRes.Font_CSMaintenance
          ? $.fn.alert(n, function () {
              location.reload();
            })
          : fnOnlineService0(n);
      },
    }));
}
function openNewWindowCheckExist(n, t) {
  if (
    (t == "smLive" || t.indexOf("NBB") > -1 || t == "aBall") &&
    navigator.userAgent.toLowerCase().indexOf("macintosh") > -1 &&
    navigator.userAgent.toLowerCase().indexOf("safari") > -1 &&
    navigator.userAgent.toLowerCase().indexOf("chrome") == -1
  ) {
    var i = document.createElement("a");
    i.setAttribute("rel", "noopener noreferrer");
    i.setAttribute("href", n);
    i.setAttribute("target", "_blank");
    i.click();
  } else
    windowOpenArray[t] != null &&
      windowOpenArray[t].closed == !1 &&
      windowOpenArray[t].close(),
      (windowOpenArray[t] = window.open(n, t));
}
function fnOnlineService0(n) {
  var i = $(window).height(),
    r = i < 800 ? i - 40 : 800,
    t;
  if (
    ((r = 800),
    window.outerHeight < 900 && window.resizeTo(window.outerWidth, 900),
    n)
  ) {
    if (isSize("#onlineServ0")) return;
    $("body").append(
      '<div id="onlineServ0" title=""><div class="dialog-iframe"><iframe scrolling="no" allowtransparency="true" id="ifr_onlineServ0" name="ifr_onlineServ0" frameborder="0" src="" style="border-radius: 0px 0px 5px 5px;width: 100%;height: 100%"></iframe></div></div>'
    );
    t = $("#onlineServ0");
    t.dialog({
      width: 668,
      height: r,
      open: function () {
        $(".ui-dialog-titlebar-close").remove();
        $(".ui-dialog-titlebar").append(
          '<button id="closeDialogBtn" type="button" onclick="closeOnlineService();" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span> </button>'
        );
        $("#ifr_onlineServ0").attr("src", n);
      },
      close: function () {
        typeof kfzxWindowHeight != "undefined" &&
          window.outerHeight != kfzxWindowHeight &&
          window.innerWidth != screen.width &&
          window.resizeTo(window.outerWidth, kfzxWindowHeight);
        $("body").data("openOnlineService", !1);
        var n = t.find("iframe")[0];
        return (
          window.frames[n.name].postMessage({ type: 0, option: "close" }, "*"),
          setTimeout(function () {
            t.dialog("destroy");
            t.remove();
          }, 300),
          !1
        );
      },
    });
    t.find("iframe").load(function () {
      t.find("div").removeClass("IELoadPage");
    });
    t.dialog("option", "title", webRes.Font_OnlineServiceWelcome);
    $(window)
      .off("message")
      .on("message", function (n) {
        var i = (n.originalEvent && n.originalEvent.data) || "",
          r;
        typeof i == "string"
          ? ((r = $(n.originalEvent.data).text()),
            i
              ? t.dialog("option", "title", r)
              : t.dialog("option", "title", webRes.Font_OnlineServiceWelcome))
          : typeof i == "object" &&
            i.operation === "close" &&
            t.dialog("close");
      });
  }
}
function closeOnlineService() {
  var n = $("#onlineServ0").offset().top - window.scrollY,
    t = $("#onlineServ0").offset().left + $("#onlineServ0").width() / 2 - 225;
  layer.confirm(webRes.Font_closeComfirmationDesc, {
    title: webRes.Font_closeComfirmationTitle,
    btn: [webRes.Font_closeComfirmationBtn, webRes.Font_Cancel],
    success: function () {
      $(".layui-layer-btn").css("text-align", "right");
      $(".layui-layer-title").addClass("confirmation_title");
      $(".layui-layer-content").addClass("confirmation_desc");
      $(".layui-layer-btn").addClass("confirmation_btnDiv");
      $(".layui-layer-btn0").addClass("confirmation_btn0");
      $(".layui-layer-btn1").addClass("confirmation_btn1");
    },
    cancel: function (n) {
      layer.close(n);
    },
    btn1: function (n) {
      var t = $("#onlineServ0");
      return t.dialog("close"), layer.close(n), !1;
    },
    btn2: function (n) {
      layer.close(n);
    },
    area: ["450px", "150px"],
    closeBtn: 0,
    scrollbar: !1,
    offset: [n, t],
    btnAlign: "r",
    resize: !1,
    move: !1,
  });
}
function fnOnlineService(n) {
  var i = 668,
    r = $(window).height(),
    u = r < 800 ? r - 40 : 800,
    t,
    f,
    e;
  if (n) {
    t = layer.open({
      title: webRes.Font_OnlineServiceWelcome,
      type: 2,
      content: [n, "no"],
      area: [i + "px", u + "px"],
      shade: 0,
      shift: 2,
      skin: "layui-layer-open-custom",
      closeBtn: 1,
      moveOut: !1,
      end: function () {
        $("body").data("openOnlineService", !1);
      },
      success: function (n) {
        n.removeClass("IELoadPage");
      },
      cancel: function (n) {
        var t = $("#layui-layer" + n).find("iframe")[0];
        return (
          window.frames[t.name].postMessage({ type: 0, option: "close" }, "*"),
          setTimeout(function () {
            layer.close(n);
          }, 10),
          !1
        );
      },
    });
    $(window)
      .off("message")
      .on("message", function (n) {
        var i = (n.originalEvent && n.originalEvent.data) || "";
        typeof i == "string"
          ? i
            ? (layer.title(n.originalEvent.data, t),
              $("#layui-layer" + t)
                .find(".layui-layer-title")
                .find("p")
                .css("margin", "0"))
            : layer.title(webRes.Font_OnlineServiceWelcome, t)
          : typeof i == "object" && i.operation == "close" && layer.close(t);
      });
    $("#layui-layer" + t)
      .find(".layui-layer-title")
      .css({ width: "100%", "font-size": "20px" });
    $("#layui-layer" + t)
      .find("iframe")
      .css("border-radius", "0 0 10px 10px");
    f = $(document).width() || window.innerWidth;
    e = window.innerHeight || $(window).height();
    $("#layui-layer" + t).css({ top: (e - u) / 2, left: (f - i) / 2 });
  }
}
function FocusPassword(n) {
  var t = $("#" + n);
  t.val("");
  t.focus();
}
function getprotocol(n) {
  var t = "https:" == document.location.protocol ? !0 : !1;
  return t ? n.replace("http://", "https://") : n;
}
function GetQueryString(n, t) {
  var r = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
    i = window.location.search.substr(1).match(r);
  return i != null ? (t ? unescape(i[2]) : filterStr(unescape(i[2]))) : null;
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
function fnNewBack(n) {
  window.open(n, "", "");
}
function fnBack(n) {
  window.setTimeout(function () {
    window.location.href = n;
  }, 10);
}
function fnBackPage() {
  history.back(-1);
}
function F5() {
  window.location.reload();
}
function F52() {
  window.location.href = window.location.href;
}
function AddFavoriteLocal(n) {
  var t = document.URL,
    i = document.title;
  AddFavorite(t, i, n);
}
function AddFavorite(n, t, i) {
  try {
    window.external.addFavorite(n, t);
  } catch (r) {
    try {
      window.sidebar.addPanel(t, n, "");
    } catch (r) {
      $.fn.alert(i);
    }
  }
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
  var i, r, t;
  if (!IsYn) return n;
  for (
    i = "ĐAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴ",
      r =
        "DAAAAAAAAAAAAAAAAAAEEEEEEEEEEEOOOOOOOOOOOOOOOOOUUUUUUUUUUUIIIIIYYYYY",
      n = n.toUpperCase(),
      t = 0;
    t < i.length;
    t++
  )
    n = n.replaceAll(i[t], r[t]);
  return n;
}
function fnBindTxTOn(n, t) {
  fnIsIeM()
    ? n.attr("propertychange", t)
    : "Chrome" == myBrowser()
    ? n.attr("onclick", t)
    : n.attr("onkeyup", t);
  n.attr("onafterpaste", t);
  n.attr("onblur", t);
}
function fnBindTxTOn2(n, t) {
  fnIsIeM()
    ? n.attr("propertychange", t)
    : "Chrome" == myBrowser() && n.attr("onclick", t);
  n.attr("onkeyup", t);
  n.attr("onafterpaste", t);
  n.attr("onblur", t);
}
function CheckPassword(n) {
  return n.length >= 6 && n.length <= 10 && /^[a-zA-Z]+$/.test(n.substr(0, 2))
    ? !0
    : !1;
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
function ReturnTXTEmptyFalse(n, t, i) {
  return (
    (t = fnReplaceEmpty(t)),
    n == "" ? (ErrorText == "" && i.focus(), (ErrorText += t + "\n\n"), !1) : !0
  );
}
function ReturnTXTEmptyFalse_jh(n, t, i) {
  return (
    (t = fnReplaceEmpty(t)),
    n == ""
      ? (ErrorText == "" && (window.currentControl = i),
        ErrorText != "" && (ErrorText += "，"),
        (ErrorText += t),
        !1)
      : !0
  );
}
function ReturnCodeTXTEmptyFalse_jh(n, t, i) {
  return (
    (t = fnReplaceEmpty(t)),
    isCodeEmpty(n)
      ? (ErrorText == "" && (i.focus(), (window.currentControl = i)),
        ErrorText != "" && (ErrorText += "，"),
        (ErrorText += t),
        !1)
      : !0
  );
}
function fnReplaceEmpty(n) {
  return IsYn ? n : n.replace(/　/g, "").replace(/ /g, "");
}
function fnTXTEmpty(n, t, i) {
  return $.trim(n) === "" ? (i.alert(t), !1) : !0;
}
function closeBlue(n) {
  $("#" + n).hide();
}
function openBlue(n) {
  $("#Hdfw")
    .not("#" + n)
    .hide();
  $("#" + n).show();
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
function fnSetOnclick3(n, t) {
  $("#" + n)
    .parent()
    .attr("onclick", t);
}
function fnTxtPass() {
  $("#txtPassword").val("");
}
function layer10(n, t) {
  layer.open({ type: 1, title: n, content: t, shade: 0, shift: -1, time: 1e4 });
}
function layerframe(n, t, i, r, u) {
  var f = layer.open({
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
  $("#layui-layer" + f).css("border-radius", "10px");
}
function layerframeNoclose(n, t, i, r) {
  layer.open({
    type: 2,
    title: n,
    content: [t, "no"],
    shade: 0,
    shift: -1,
    area: [i + "px", r + "px"],
    closeBtn: 0,
    end: function () {
      createXmlObj();
    },
  });
}
function layerframePlatformPurseCheckMobile(n) {
  IsMobile()
    ? isGameMenuOpen && layerframePlatformPurse(n)
    : layerframePlatformPurse(n);
}
function layerframePlatformPurse(n) {
  var t = 440,
    i = 508,
    r;
  streamerGiftSwitch &&
    ((r = ["KU", "SM", "NBB", "NBB_new", "ColorBall"]),
    r.includes(n.substr(n.indexOf("type=") + 5)) && (t = 468));
  IsMobile() && document.addEventListener("touchstart", function () {}, !0);
  var u = layer.open({
      title: !1,
      type: 2,
      content: [n + "&_=" + Math.random(), "no"],
      area: [i + "px", t + "px"],
      shade: 0.8,
      shift: 2,
      closeBtn: 0,
      moveOut: !0,
      fix: !IsMobile(),
      success: function () {
        IsMobile() && $(".TMBanner,.topMenuChoice>div.hidden").hide();
      },
      end: function () {
        $("form").on("mousemove", function (n) {
          fnMouseInElement($(".gameBanner"), n) && $(".gameBanner").hide();
          $("form").off("mousemove");
        });
      },
    }),
    f = window.innerHeight || $(window).height(),
    e = $(document).width() || $(window).width();
  $("#layui-layer" + u).css({ left: (e - i) / 2, top: (f - t) / 2 });
}
function layerframeAdd() {
  layerframeAdd0(1);
}
function layerframeAdd2Deposit() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "40" },
    timeout: 15e3,
    success: function (n) {
      n == "1" || n == "2"
        ? (fnGetTip(webRes.Font_DepositCheck, "aKscz"), depositAreaClose())
        : layerframeAdd2();
    },
  });
}
function layerframeAdd2Withdraw() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "40" },
    timeout: 15e3,
    success: function (n) {
      n == "1"
        ? openNewWindowAutoHeightName(
            "/Aspx/Djzx" + GetTextLanguage("", "cn", "yn") + ".aspx",
            780,
            520
          )
        : layerframeAdd2();
    },
  });
}
function layerframeAdd2() {
  layerframeAdd0(2);
}
function GetAdd1Height() {
  return IsYn ? 665 : 638;
}
function GetAdd2Height() {
  return IsCn ? 380 : 505;
}
function layerframe3DVerify(n, t) {
  var i = "/Mobile/Aspx/M_CnfVerifyPassword.aspx",
    r;
  t && (i += "?action=" + t);
  r = layer.open({
    type: 2,
    title: !1,
    content: [i + "?_=" + Math.random(), "no"],
    shade: 0.3,
    shift: -1,
    area: ["392px", "248px"],
    skin: "IELoadPage",
    closeBtn: 1,
    fix: IsMobile(),
    end: function () {
      isIndex() ? IsLoginedIndex && fnAddEnd() : F52();
    },
    success: function (n) {
      var t =
        n
          .contents()[0]
          .getElementsByTagName("iframe")[0]
          .contentWindow.document.getElementsByTagName("body")[0].innerHTML
          .length > 0;
      t ? n.removeClass("IELoadPage") : (layer.close(r), F52());
    },
  });
}
function layerframeAdd0(n, t) {
  var u = n == 1 ? GetAdd1Height() : GetAdd2Height(),
    i = "/web/add",
    r;
  t && (i += "?action=" + t);
  n == 2
    ? (r = layer.open({
        type: 2,
        title: !1,
        content: [i + "?_=" + Math.random(), "no"],
        shade: 0.3,
        shift: -1,
        area: ["500px", u + "px"],
        skin: "IELoadPage",
        closeBtn: 0,
        fix: !IsMobile(),
        end: function () {
          isIndex() ? IsLoginedIndex && fnAddEnd() : F52();
        },
        success: function (n) {
          var t =
            n
              .contents()[0]
              .getElementsByTagName("iframe")[0]
              .contentWindow.document.getElementsByTagName("body")[0].innerHTML
              .length > 0;
          t ? n.removeClass("IELoadPage") : (layer.close(r), F52());
        },
      }))
    : n == 3
    ? (r = layer.open({
        type: 2,
        title: !1,
        content: [i, "no"],
        shade: 0.3,
        shift: -1,
        area: ["500px", u + "px"],
        skin: "IELoadPage",
        closeBtn: 0,
        fix: !IsMobile(),
        end: function () {
          isIndex() ? IsLoginedIndex && fnAddEnd() : F52();
        },
        success: function (n) {
          var t =
            n
              .contents()[0]
              .getElementsByTagName("iframe")[0]
              .contentWindow.document.getElementsByTagName("body")[0].innerHTML
              .length > 0;
          t ? n.removeClass("IELoadPage") : (layer.close(r), F52());
        },
      }))
    : $.ajax({
        url: "/LoadData/HelpCheck.ashx",
        cache: !1,
        data: { checkType: "36" },
        timeout: 15e3,
        success: function (n) {
          if (n == "False")
            $.fn.alert(webRes.Font_RegisterCloseMsg, function () {
              F52();
            });
          else {
            if ($(".layui-layer-shade").size() > 0) return;
            var t = layer.open({
              type: 2,
              title: !1,
              content: [i, "no"],
              shade: 0.3,
              shift: -1,
              area: ["500px", u + "px"],
              skin: "IELoadPage",
              closeBtn: 0,
              fix: !IsMobile(),
              end: function () {
                isIndex() ? IsLoginedIndex && fnAddEnd() : F52();
              },
              success: function (n) {
                var i =
                  n
                    .contents()[0]
                    .getElementsByTagName("iframe")[0]
                    .contentWindow.document.getElementsByTagName("body")[0]
                    .innerHTML.length > 0;
                i ? n.removeClass("IELoadPage") : (layer.close(t), F52());
              },
            });
            let n = $("#layui-layer" + t),
              r = Math.round(n.offset().top + n.height() - 78),
              f = Math.round(n.offset().left + n.width() - 43),
              e = n.css("z-index") + 1;
            $(
              '<div class="line_banner1" style="display:none;position:fixed;top:' +
                r +
                "px;left:" +
                f +
                "px;cursor:pointer;z-index:" +
                e +
                ';"><img src="' +
                lineBanner_regImg +
                '" onclick="window.open(lineBanner_link)"></div >'
            ).insertAfter("#layui-layer" + t);
            $(window).on("resize", function () {
              let t = Math.round(n.offset().top + n.height() - 78),
                i = Math.round(n.offset().left + n.width() - 43);
              $(".line_banner1").css({ top: t, left: i });
            });
            lineBanner_regImg &&
              lineBanner_regImg != "" &&
              $(".line_banner1").show();
          }
        },
      });
}
function layerframeLoginVerify(n, t, i) {
  var u, r, f;
  (t == null || t == "") && ((t = ""), (i = ""));
  u = "/Aspx/LoginVerify.aspx";
  r = [];
  n && r.push("isForceLoginVerify=1");
  r.length > 0 && (u += "?" + r.join("&"));
  f = layer.open({
    type: 2,
    title: !1,
    content: [u, "no"],
    shade: 0.3,
    shift: -1,
    area: ["392px", n ? "520px" : "568px"],
    skin: "IELoadPage",
    closeBtn: 0,
    fix: !IsMobile(),
    success: function (n) {
      var e =
          n
            .contents()[0]
            .getElementsByTagName("iframe")[0]
            .contentWindow.document.getElementsByTagName("body")[0].innerHTML
            .length > 0,
        r,
        u;
      e
        ? (n.removeClass("IELoadPage"),
          (r = $("html").find("iframe").last().attr("id")),
          r &&
            ((u = { event: "loginVerifyParam", usr: t, pwd: i }),
            document
              .getElementById(r)
              .contentWindow.postMessage(JSON.stringify(u), "*")))
        : layer.close(f);
    },
  });
}
function layerFrameLoginPic(n, t, i, r) {
  var f, u, e;
  (i == null || i == "") && ((i = ""), (r = ""));
  f = "/Aspx/LoginVerify.aspx";
  u = [];
  n && u.push("isForceLoginVerify=1");
  t && u.push("isPicCycle=1");
  u.length > 0 && (f += "?" + u.join("&"));
  e = layer.open({
    type: 2,
    title: !1,
    content: [f, "no"],
    shade: 0.3,
    shift: -1,
    area: ["392px", t ? "300px" : n ? "520px" : "568px"],
    skin: "IELoadPage",
    closeBtn: 0,
    fix: !IsMobile(),
    success: function (n) {
      var f =
          n
            .contents()[0]
            .getElementsByTagName("iframe")[0]
            .contentWindow.document.getElementsByTagName("body")[0].innerHTML
            .length > 0,
        t,
        u;
      f
        ? (n.removeClass("IELoadPage"),
          (t = $("html").find("iframe").last().attr("id")),
          t &&
            ((u = { event: "loginVerifyParam", usr: i, pwd: r }),
            document
              .getElementById(t)
              .contentWindow.postMessage(JSON.stringify(u), "*")))
        : layer.close(e);
    },
  });
}
function layerframeAddClose() {
  try {
    var n = getLayerFrameIndex1();
    n > 0
      ? parent.layer.close(n)
      : (window.close(),
        window.open("", "_parent", ""),
        (window.top.opener = null));
  } catch (t) {
    window.close();
    window.open("", "_parent", "");
    window.top.opener = null;
  }
  parent.$(".line_banner1").remove();
}
function getLayerFrameIndex1() {
  try {
    return parent.layer.getFrameIndex(window.name);
  } catch (n) {}
}
function fnLayerStyle(n, t) {
  var r = t,
    i = (window.screen.availHeight - 110 - r) / 2;
  i = i < 0 ? 0 : i;
  parent.layer.style(getLayerFrameIndex1(), {
    width: n + "px",
    height: r + "px",
    top: i + "px",
  });
}
function layerResetSize(n) {
  var i, t;
  try {
    i = parent.layer.getFrameIndex(window.name);
    parent.layer.iframeAuto(i);
    t = $(document).height();
    t = ($(top.window).height() - t) / 2;
    t < 0 && (t = 0);
    parent.layer.style(i, { top: t + "px" });
    n &&
      n > 0 &&
      setTimeout(function () {
        layerResetSize(n);
      }, n);
  } catch (r) {}
}
function layerResetSize2(n) {
  var r, t, i;
  try {
    r = parent.layer.getFrameIndex(window.name);
    parent.layer.iframeAuto(r);
    t = $(document).height();
    i = $(document).width();
    t = ($(top.window).height() - t) / 2;
    i = ($(top.window).width() - i) / 2;
    t < 0 && (t = 0);
    i < 0 && (i = 0);
    parent.layer.style(r, { top: t + "px", left: i + "px" });
    n &&
      n > 0 &&
      setTimeout(function () {
        layerResetSize(n);
      }, n);
  } catch (u) {}
}
function layerframeAddSubmit() {
  fnLayerStyle(500, 330);
  var n = $("#hid_ddlAccounts").val(),
    t = $("#hid_txtPassword").val();
  $("#hid_ddlAccounts,#hid_txtPassword").val("");
  parent.UserFirstLogin(n, t);
}
function layerframeLoginVerifySubmit(n) {
  parent.fnLoginOperateLoginVerify(n);
}
function layerframeForgotword() {
  parent.layerForgotword();
}
function fnLayerPw(n) {
  if (n.stus == "5")
    layerPw(
      webRes.Font_Info,
      n.msg.replace("ti", "<br/>ti"),
      webRes.Font_OK,
      webRes.Font_Pw1
    );
  else if (n.stus == "6" || n.stus == "10")
    layerPw(
      webRes.Font_Info,
      n.msg.replace("ti", "<br/>ti"),
      webRes.Font_OK,
      webRes.Font_Pw1,
      n.stus
    );
  else if (n.stus == "7") layerframeLoginVerify(!1);
  else if (n.stus == "9") {
    var t = $("#txtUser").val(),
      i = $("#txtPassword").val();
    layer.closeAll();
    layerframeLoginVerify(!0);
  } else n.stus == "11" ? location.reload() : alertUserPass(n.msg, 2, n.stus);
}
function layerPw(n, t, i, r, u) {
  t =
    '<div style="text-align:center;font-size:17px;">' +
    t +
    '<br/><a href="javascript:void(0);" class="aFogot1 ForgotPassWordLink" >' +
    r +
    "</a></div>";
  var f = $.fn.alert(
    t,
    function () {
      u == "6"
        ? layerframeLoginVerify(!1)
        : u == "10"
        ? layerframeLoginVerify(!0)
        : FocusPassword("txtPassword");
    },
    n,
    i
  );
  layerPw_focus();
  $(".aFogot1").on("click", function () {
    layerForgotword();
    $.fn.close(f);
  });
}
function layerPw_focus() {
  $(".layui-layer-close1").focus();
}
function layerPw_close() {
  $(".layui-layer-close1").click();
}
function GetTextLanguage(n, t, i) {
  return IsTw ? n : IsYn ? i : t;
}
function pop_show() {
  $("#popdiv").css("left", (document.body.clientWidth - 390) / 2);
  $("#popdiv").css("top", (document.body.clientHeight - 274 * 1.5) / 2);
  $("#popdiv").show();
  $("#overlay").css("width", document.body.clientWidth);
  $("#overlay").css("height", document.body.clientHeight);
  $("#overlay").show();
}
function pop_close() {
  $("#popdiv").hide();
  $("#overlay").hide();
}
function fnHyzxSubmit() {
  $("#Button1").click();
}
function fnHyzxCancel() {
  $(".headTop").hide();
  $("#mask").hide();
  window.location.reload();
}
function fnHyzxOK() {
  window.location.href = "/Aspx/MoneyChange.aspx";
}
function fnHyzxKfzx() {
  window.location.href = "/Aspx/Kfzx.aspx";
}
function fnHyzxClose() {
  fnHyzxCancel();
}
function IsTrue(n) {
  return n.toLowerCase() == "true";
}
function SubmitEnter(n) {
  if (n.keyCode == 13) return !1;
}
function ShowDiv() {
  $("#Hidden_Text").val() != "" && $("#divShow").show();
}
function submitGame0(n) {
  if (flagGame0) return !1;
  flagGame0 = !0;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagGame0 = !1;
      IsTest
        ? $.fn.alert(
            GetTextLanguage(
              "網路異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          )
        : $.fn.alert(
            GetTextLanguage(
              "網絡異常，請稍後再試",
              "网络异常，请稍后再试",
              "Lỗi mạng, vui lòng thử lại sau"
            )
          );
    },
    success: function (t) {
      n == 17
        ? t == "ok"
          ? ($("#table1").hide(), $("#table2").show())
          : $.fn.alert(t)
        : n == 6 && t == webRes.Font_Game28_ApplySuccess
        ? $.fn.alert(t, function () {
            window.opener.postMessage('{"event":"closeGiftGold"}', "*");
          })
        : $.fn.alert(t);
      flagGame0 = !1;
    },
  });
}
function submitGame17() {
  var o, n, t, s;
  ErrorText = "";
  var e = $("#DGname"),
    i = $("#DGMobile1"),
    r = $("#ddlCity"),
    u = $("#ddlCityArea"),
    f = $("#DGaddress3"),
    h = $("#txtSHmail"),
    c = $("#txtRemark"),
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
      $.fn.alert(ErrorText + webRes.Font_NotEmpty, function () {
        var n = 0,
          t;
        t = IsTw ? "input:text,combo" : "input: text, select";
        $(t).each(function () {
          if (
            $(this).val().trim() === "" &&
            n == 0 &&
            $(this).attr("id") != "txtSHmail"
          ) {
            (fnIsIeM() && $(this).prop("tagName") === "SELECT") ||
              $(this).focus();
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
  if (!checkPhoneNumber($.trim(i.val())))
    return $("#DGMobile1").alert(webRes.Font_sjgeyz), !1;
  if (flagGame17) return !1;
  for (
    o = r.val() + "-" + u.val() + "-" + $.trim(f.val()),
      n = [$.trim(e.val()), $.trim(i.val()), o, h.val(), c.val()],
      t = 0;
    t < n.length;
    t++
  )
    n[t] = n[t].replace("|", "");
  s = { type: 17, insert: "1", strs: n.join("|") };
  flagGame17 = !0;
  $.fn.loading();
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: s,
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      $.fn.closeloading();
      flagGame17 = !1;
    },
    success: function (n) {
      $.fn.closeloading();
      var t = n.split("|");
      t[0] == "ok"
        ? $.fn.alert(t[1], function () {
            window.location.href = "/Aspx/Hdzq_777.aspx?action=A";
          })
        : $.fn.alert(n);
      flagGame17 = !1;
    },
  });
}
function fnSubValue(n, t) {
  n.value.length > t && (n.value = n.value.substr(0, t));
}
function submitGame(n) {
  if (flagGame) return !1;
  flagGame = !0;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: "15", _type: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagGame = !1;
    },
    success: function (t) {
      var i = t.split("|");
      i[0] == "1"
        ? $.fn.confirm(i[1], function () {
            InsertInfo(n, 1);
          })
        : $.fn.alert(t);
      flagGame = !1;
    },
  });
}
function InsertInfo(n, t) {
  if (flagInsertInfo) return !1;
  flagInsertInfo = !0;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: "15", _type: n, insert: t },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagInsertInfo = !1;
    },
    success: function (n) {
      var t = n.split("|");
      t[0] == "1"
        ? $.fn.alert(t[1], function () {
            window.opener.postMessage('{"event":"closeGiftGold"}', "*");
            open1("/Aspx/Zhzx3.aspx");
            window.close();
          })
        : $.fn.alert(t[0]);
      flagInsertInfo = !1;
    },
  });
}
function ChooseSubBank(n, t, i, r, u = false) {
  $("#ddlSubBank").combobox("disable");
  var f = fnComboboxItem("ddlSubBank", ".textbox-text");
  f.attr("placeholder", webRes.Font_PleaseChooseSubBank);
  n == null || n == ""
    ? (t.empty().append("<option value='' disabled>" + r + "</option>"),
      fnComboboxSubBank("ddlSubBank"),
      $(".combo-arrow").css({ height: "36px", width: "36px" }),
      i && i())
    : $.ajax({
        url: "/LoadData/HelpCheck.ashx",
        cache: !1,
        data: { checkType: "48", city: n },
        timeout: 15e3,
        success: function (n) {
          var r, e, f;
          if (
            ((n = htmlDecode(n)),
            (r = n.split(",")),
            t.empty(),
            (e = ""),
            u || (e = ""),
            r != "")
          )
            for (f = 0; f < r.length; f++)
              e += "<option value='" + r[f] + "'>" + r[f] + "</option>";
          t.append(e);
          fnComboboxSubBank("ddlSubBank");
          $(".combo-arrow").css({ height: "36px", width: "36px" });
          i && i(r);
        },
      });
}
function ChooseCity2(n, t, i, r) {
  var f = n || $("#ddlCity").val(),
    u = t || $("#ddlCityArea"),
    e = r || webRes.Font_CityArea;
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
      fnComboboxCityArea("ddlCityArea", "add2");
      IsTw && $(".combo-arrow").css("height", "30px");
      i && i(t);
    },
  });
}
function ChooseCityAdd2(n, t, i, r) {
  var o = $("#initDdl"),
    s = $("#initDdl").val(),
    e;
  if (s == "false") {
    var f = n || $("#ddlProvice").val(),
      u = t || $("#ddlCityArea"),
      h = r || webRes.Font_CityArea;
    f == null || f == ""
      ? (u.empty(),
        (e = "<option value=''>" + h + "</option>"),
        u.append(e),
        u.combobox({ disabled: !1 }),
        fnComboboxCityArea("ddlCityArea", "add2"),
        IsTw && $(".combo-arrow").css("height", "30px"),
        i && i())
      : $.ajax({
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
              (f = ""),
              t != "")
            )
              for (r = 0; r < t.length; r++)
                f += "<option value='" + t[r] + "'>" + t[r] + "</option>";
            u.append(f);
            u.combobox({ disabled: !1 });
            fnComboboxCityArea("ddlCityArea", "add2");
            IsTw && $(".combo-arrow").css("height", "30px");
            i && i(t);
          },
        });
  } else o.val("false");
}
function ChooseCity3(n, t, i, r, u) {
  var e = n || $("#ddlCity").val(),
    f = t || $("#ddlCityArea"),
    o = $("#enterPostcode").val(),
    s = r || webRes.Font_CityArea;
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "5", city: e },
    timeout: 15e3,
    success: function (n) {
      var t, r, i;
      if (
        ((n = htmlDecode(n)),
        (t = n.split(",")),
        f.empty(),
        (r = "<option value=''>" + s + "</option>"),
        t != "")
      )
        for (i = 0; i < t.length; i++)
          r += "<option value='" + t[i] + "'>" + t[i] + "</option>";
      f.append(r);
      o == "enterPostcode"
        ? fnComboboxCityArea2("ddlCityArea", u, "gift3")
        : fnComboboxCityAreaWithoutDefaultValue("ddlCityArea", u, "gift3");
    },
  });
}
function ChooseCityArea() {
  if (location.href.indexOf("ChgData.aspx") < 0) {
    var t = $("#ddlCity").val(),
      n = $("#ddlCityArea").val();
    if (n.length == 0) return;
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      cache: !1,
      data: { checkType: "31", cityProvice: t, cityArea: n },
      timeout: 15e3,
      success: function (n) {
        n = htmlDecode(n);
        $("#txtSHmail").val(n);
      },
    });
  }
}
function ChooseSHmail() {
  var r = $("#txtSHmail").val(),
    i = $("#ddlCityArea"),
    n,
    t;
  r.length != 0 &&
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      cache: !1,
      data: { checkType: "32", sHmail: r },
      timeout: 15e3,
      success: function (r) {
        var u, e, f, o;
        if (
          ((r = htmlDecode(r)),
          (u = r.split(",")),
          (e = "<option value=''>" + webRes.Font_CityArea + "</option>"),
          u != "")
        )
          for (n = u[0], t = u[1], f = 2; f < u.length; f++)
            e += "<option value='" + u[f] + "'>" + u[f] + "</option>";
        n &&
          t &&
          (i.empty(),
          $("#enterPostcode").val("enterPostcode"),
          i.append(e),
          $("#ddlCity").val(n),
          i.val(t),
          fnComboboxInit2("ddlCity"),
          (o = fnComboboxItem("ddlCity", ".textbox-text")),
          $("#ddlCity").combobox("setValue", n),
          o.attr("placeholder", n),
          ChooseCity3(n, "", null, webRes.Font_CityArea, n + "-" + t));
      },
    });
}
function isZfbText(n) {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    n
  ) || /^[1][0-9]{10}$/.test(n)
    ? !0
    : !1;
}
function ClosemsgBox(n) {
  $("#" + n).hide();
}
function SureOK15() {
  InsertInfo77(15, 1, MethodtType);
}
function SureOK16() {
  InsertInfo(16, 1);
}
function ActiveMethod(n) {
  if (flagGame15) return !1;
  flagGame15 = !0;
  MethodtType = n;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: 15, Methodtype: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagGame15 = !1;
    },
    success: function (t) {
      var i = t.split("|");
      i[0] == "1"
        ? ($("#font1").html(i[1]),
          $("#font2").html(i[2]),
          $("#font4").html(i[3]),
          n == "1" && $("#font3").html("18"),
          n == "2" && $("#font3").html("15"),
          $("#msgBox2").show())
        : $.fn.alert(t);
      flagGame15 = !1;
    },
  });
}
function InsertInfo77(n, t, i) {
  if (flagInsertInfo) return !1;
  flagInsertInfo = !0;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: n, insert: t, Methodtype: i },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagInsertInfo = !1;
    },
    success: function (n) {
      var t = n.split("|");
      t[0] == "1" && t[1] == "cn"
        ? $.fn.alert("申请提交成功！", function () {
            window.location.href = "/Aspx/Zhzx3.aspx";
          })
        : t[0] == "1" && t[1] == "yn"
        ? $.fn.alert("Gửi yêu cầu thành công！", function () {
            window.location.href = "/Aspx/Zhzx3.aspx";
          })
        : $.fn.alert(t[0]);
      flagInsertInfo = !1;
    },
  });
}
function submitActive16(n) {
  if (flagGame16) return !1;
  flagGame16 = !0;
  MethodtType = n;
  $.ajax({
    url: "/LoadData/index_Game28.ashx",
    data: { type: 16 },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagGame16 = !1;
    },
    success: function (n) {
      var t = n.split("|");
      t[0] == "1"
        ? ($("#font5").html(t[1]),
          $("#font6").html(t[2]),
          $("#font8").html(t[3]),
          $("#msgBox3").show())
        : $.fn.alert(n);
      flagGame16 = !1;
    },
  });
}
function setupWebViewJavascriptBridge(n) {
  if (window.WebViewJavascriptBridge) return n(WebViewJavascriptBridge);
  if (window.WVJBCallbacks) return window.WVJBCallbacks.push(n);
  window.WVJBCallbacks = [n];
  var t = document.createElement("iframe");
  t.style.display = "none";
  t.src = "wvjbscheme://__BRIDGE_LOADED__";
  document.documentElement.appendChild(t);
  setTimeout(function () {
    document.documentElement.removeChild(t);
  }, 0);
}
function IsIOSBrowser() {
  $("#accounts").val() !== "" && $("#accounts").attr("disabled", "disabled");
  (jQuery.browser.mobile ||
    navigator.userAgent.toLowerCase().indexOf("ipad") > -1) &&
    setupWebViewJavascriptBridge(function (n) {
      n.registerHandler("JavascriptHandler", function (n, t) {
        t({ "IOS Response": "Successful" });
      });
    });
}
function fnGetTip(n, t, i, r) {
  (t == "aKscz" || t == "aKscz2") &&
    (n = n.replace("<br />", "").replace("<br/>", ""));
  i = isNaN(parseFloat(i)) ? 3 : parseFloat(i);
  r = isNaN(parseInt(r)) ? 3 : parseInt(r);
  layer.tips(
    "<span style='font-size:14px;font-family:Arial;'>" + n + "</span>",
    "#" + t,
    { tips: [r, "#3595CC"], time: i * 1e3, maxWidth: IsYn ? 255 : 238 }
  );
}
function IsIphone() {
  var n = navigator.userAgent;
  return n.indexOf("iPhone") > -1;
}
function IsIpad() {
  var n = navigator.userAgent.toLowerCase();
  return (
    n.indexOf("ipad") > -1 ||
    n.indexOf("macintosh") > -1 ||
    (n.indexOf("macintosh") > -1 &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2)
  );
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
function isIndex() {
  return $("#divNotLogined").size() > 0;
}
function isExist(n) {
  return typeof n == "undefined" ? !1 : !0;
}
function isNE(n) {
  var t = n == null || n == undefined || n === "undefined" || n === "";
  return !t;
}
function isNullOrEmpty(n) {
  return n == "" || n == null;
}
function fnCombobox(n) {
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function () {
      ddlcheckCodeLen();
      (location.href.indexOf("Add2.aspx") > -1 ||
        location.href.indexOf("Add3.aspx") > -1) &&
        fnEnableSubmit();
    },
  });
  fnComboboxInit2(n);
  var t = fnComboboxItem(n, ".textbox-text");
  n == "ddlSubBank"
    ? t.attr("placeholder", webRes.Font_SearchSubBank)
    : t.attr("placeholder", webRes.Font_SearchBank);
  t.val("").css("font-size", n === "ddlBankCode2" ? "14px" : "13.3px");
  t.focus(function () {
    ($(this).val() === webRes.Font_PleaseChooseBank ||
      $(this).val() === webRes.Font_PleaseChooseSubBank) &&
      $(this).val("");
  });
}
function fnComboboxBank(n, t) {
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function (t) {
      IsTest
        ? (location.href.indexOf("Add2.aspx") > -1 && fnEnableSubmit(),
          $("#" + n + " option[value='" + t + "']").hasClass("maintain") &&
            $.fn.alert(
              "<div style='text-align:center;'><span style='font-size:20px;color:red;font-weight:bolder;'>" +
                t +
                "</span>正在维护中<br/>烦请您使用其他银行进行提款，谢谢！</div>"
            ))
        : location.href.indexOf("Add2.aspx") > -1 && fnEnableSubmit();
    },
    onShowPanel: function () {
      $("#" + n).combobox("select", "");
    },
    value: "",
  });
  fnComboboxInit2(n);
  var i = fnComboboxItem(n, ".textbox-text");
  i.attr("placeholder", webRes.Font_PleaseChooseBank);
  i.val("").css("font-size", n === "ddlBankCode2" ? "14px" : "13.3px");
  IsCn &&
    t &&
    (i.val(t),
    ddlBankCode.val(t),
    $("#ddlBankCode").combobox("select", t),
    fnComboboxItem(n, ".combo-arrow").css("display", "none"));
  i.focus(function () {
    $(this).val() === webRes.Font_PleaseChooseBank && $(this).val("");
  });
}
function fnComboboxBankTw(n) {
  var t, i, r;
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function (t) {
      ddlcheckCodeLen();
      ChooseSubBank(
        $(this).val(),
        $("#ddlSubBank"),
        null,
        webRes.Font_PleaseChooseSubBank,
        !0
      );
      location.href.indexOf("Add_Tw.aspx") > -1
        ? ($("#ddlSubBank").combobox("enable"), fnEnableSubmit())
        : checkBankCardFormValue()
        ? $("#addBank").removeAttr("disabled")
        : $("#addBank").attr("disabled", "disabled");
      IsTest &&
        $("#" + n + " option[value='" + t + "']").hasClass("maintain") &&
        $.fn.alert(
          "<div style='text-align:center;'><span style='font-size:20px;color:red;font-weight:bolder;'>" +
            t.split("-")[1] +
            "</span>正在維護中<br/>煩請您使用其他銀行進行提款，謝謝！</div>"
        );
    },
    onSelect: function (t) {
      $.ajax({
        url: "/LoadData/HelpCheck.ashx",
        cache: !1,
        data: { checkType: "49", city: t.value },
        timeout: 15e3,
        success: function (t) {
          if (
            t == "1" &&
            (location.href.indexOf("Djzx.aspx") > -1 ||
              location.href.indexOf("BankTransferTW.aspx") > -1)
          ) {
            $("#" + n).combobox("clear");
            location.href.indexOf("Djzx.aspx") > -1
              ? withdrawalTw.Btn_Close()
              : BankTransferTW.Btn_Close();
            var i =
                '<div class="popup_content" style="text-align: left; line-height: 25px">方法一：透過LINE客服上傳存摺錄影檔<br/>方法二：使用手機版至提款專區上傳資料</b></div><div class="popup_qr"><div class="qrDiv"><div id="lineQr" class="qrImg"></div><font>' +
                skypeData.f_line.name +
                '</font><font class="appID">' +
                skypeData.f_line.title +
                "</font></div></div>",
              r = $.fn.alert(
                i,
                function () {
                  open7("/Aspx/DwTutorial.aspx?action=3", 1024, 800);
                },
                "添加銀行帳號/台灣Pay卡號",
                "查看教學",
                0,
                1,
                function () {
                  $(".mask").hide();
                  $("#ddlSubBank").combobox("enable");
                  $("#ddlSubBank").empty();
                  $("#ddlSubBank").combobox("loadData", []);
                  var n = fnComboboxItem("ddlSubBank", ".textbox-text");
                  n.val("");
                  n.attr("placeholder", webRes.Font_PleaseChooseSubBank);
                }
              );
            GenerateQrCode("#lineQr", skypeData.f_line.qr, 80, 80);
            $(".mask").show();
            $("#layui-layer" + r).css("margin-top", "50px");
            $(".popup_content").css({
              margin: "0px auto 6px",
              padding: "0 15px 17px",
            });
            $(".popup_qr").css({
              "margin-top": "0px",
              "padding-bottom": "0px",
            });
            $(".cashSkin").addClass("wd_370").css("max-width", "370px");
            $(".cashSkin .layui-layer-content").css("width", "82%");
          }
        },
      });
    },
    value: "",
  });
  fnComboboxInit2(n);
  t = fnComboboxItem(n, ".textbox-text");
  t.attr("placeholder", webRes.Font_PleaseChooseBank);
  t.css("font-size", n === "ddlBankCode2" ? "14px" : "13.3px");
  t.css("height", IsAdd2 ? "36px" : "30px");
  t.val("");
  t.focus(function () {
    $("#" + n).combobox("select", "");
    t.attr("placeholder", webRes.Font_PleaseChooseBank);
    $(this).val("");
    $("#ddlSubBank").empty();
    ChooseSubBank(
      $(this).val(),
      $("#ddlSubBank"),
      null,
      webRes.Font_PleaseChooseSubBank,
      !0
    );
    var i = fnComboboxItem("ddlSubBank", ".textbox-value");
    i.val("");
    (location.href.indexOf("Djzx.aspx") > -1 ||
      location.href.indexOf("BankTransferTW.aspx") > -1) &&
      ((i = fnComboboxItem(n, ".textbox-value")), i.val(""));
  });
  t.blur(function () {
    $(this).val() === "" &&
      (t.attr("placeholder", webRes.Font_PleaseChooseBank), $(this).val(""));
  });
  i = fnComboboxItem(n, ".textbox-icon");
  i.click(function () {
    $("#ddlSubBank").empty();
    $("#ddlSubBank").combobox("loadData", []);
    $("#ddlSubBank").combobox("select", "");
  });
  r = fnComboboxItem(n, ".textbox-value");
  r.val("");
}
function fnComboboxSubBank(n) {
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function () {
      location.href.indexOf("Add_Tw.aspx") > -1 && fnEnableSubmit();
    },
  });
  fnComboboxInit2(n);
  $("#" + n).combobox("enable");
  var t = fnComboboxItem(n, ".textbox-text");
  t.attr("placeholder", webRes.Font_PleaseChooseSubBank);
  t.css("font-size", "14px");
  t.css("height", IsAdd2 ? "36px" : "30px");
  t.focus(function () {
    location.href.indexOf("Add_Tw.aspx") > -1
      ? ($(this).val(""), fnEnableSubmit())
      : (t.attr("placeholder", webRes.Font_PleaseChooseSubBank),
        $(this).val(""));
  });
  t.blur(function () {
    $(this).val() === "" &&
      (t.attr("placeholder", webRes.Font_PleaseChooseSubBank), $(this).val(""));
    location.href.indexOf("Add_Tw.aspx") > -1 && fnEnableSubmit();
  });
  $.ajax({
    url: "/LoadData/AccountAudit.ashx",
    cache: !1,
    dataType: "json",
    data: { type: "GetLastAccountAuditSubBank" },
    timeout: 15e3,
    success: function (t) {
      var i, r;
      t.StatusCode == 200 &&
        ((i = JSON.parse(t.Html)),
        i.Result == "RESULT" &&
          ($("#" + n).val(i.SubBankCode),
          $("#" + n).combobox("select", i.SubBankCode),
          $("#" + n).combobox("disable", !0),
          (r = fnComboboxItem(n, ".textbox-value")),
          r.val(i.SubBankCode)));
    },
  });
}
function fnComboboxProvice(n, t) {
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function (i) {
      IsTw
        ? ChooseSubBank($(this).val(), "", null, webRes.Font_CityArea)
        : (t && t == "add2"
            ? ((i == "" || i == webRes.Font_ChooseProvince) &&
                $("#" + n).combobox("setText", ""),
              ChooseCityAdd2($(this).val(), "", null, webRes.Font_ChooseCity))
            : ChooseCity2($(this).val(), "", null, webRes.Font_ChooseCity),
          fnEnableSubmit());
    },
    onShowPanel: function () {
      $("#" + n).combobox("select", "");
    },
    value: "",
  });
  fnComboboxInit2(n);
  var i = fnComboboxItem(n, ".textbox-text");
  IsTw
    ? i.attr("placeholder", webRes.Font_ChooseCity)
    : i.attr("placeholder", webRes.Font_ChooseProvince);
  i.val("").css("font-size", n === "ddlBankCode2" ? "14px" : "13.3px");
  IsTw &&
    (i.val("").css("font-size", n === "ddlCity" ? "14px" : "13.3px"),
    i.val("").css("height", n === "ddlCity" ? "30px" : "23px"));
  i.focus(function () {
    $(this).val() === webRes.Font_ChooseProvince && $(this).val("");
  });
}
function fnComboboxCityArea(n, t, i) {
  var u, r;
  fnComboboxInit();
  IsTw
    ? $("#" + n).combobox({
        onChange: function () {
          ChooseCityArea($(this).val(), "", null, webRes.Font_CityArea);
        },
      })
    : IsCn
    ? ($("#" + n).combobox(),
      t &&
        (t == "djzxcn" || t == "add2") &&
        ((u = $("#" + n).children("option").length),
        (u == 0 ||
          (u == 1 &&
            $("#" + n)
              .find("option:first-child")
              .val() == "")) &&
          $("#" + n)
            .empty()
            .html(
              "<option value='' disabled>" +
                webRes.Font_ChooseCity +
                "</option>"
            ),
        $("#" + n).combobox({
          onChange: function (i) {
            t == "add2"
              ? fnEnableSubmit()
              : t == "djzxcn" &&
                (i == "" || i == webRes.Font_ChooseProvince) &&
                $("#" + n).combobox("setText", "");
          },
          panelHeight: u > 9 ? 200 : "auto",
          onLoadSuccess: function () {
            $("#" + n).combobox("setText", "");
          },
          onShowPanel: function () {
            $("#" + n).combobox("select", "");
          },
        })))
    : $("#" + n).combobox();
  fnComboboxInit2(n);
  r = fnComboboxItem(n, ".textbox-text");
  IsTw
    ? r.attr("placeholder", webRes.Font_CityArea)
    : (r.attr("placeholder", webRes.Font_ChooseCity),
      t == "add2" && i == "" && r.val(webRes.Font_ChooseCity));
  (t && t == "add2") ||
    r.val("").css("font-size", n === "ddlBankCode2" ? "14px" : "13.3px");
  IsTw
    ? (r.val("").css("font-size", n === "ddlCityArea" ? "14px" : "13.3px"),
      r.val("").css("height", n === "ddlCityArea" ? "30px" : "23px"))
    : IsCn &&
      t &&
      t == "djzxcn" &&
      (r.css("font-size", "12px"),
      i &&
        (r.val(i),
        $("#ddlCityArea").val(i),
        $("#ddlCityArea").combobox("select", i),
        fnComboboxItem(n, ".combo-arrow").css("display", "none"),
        $("#ddlCityArea").combobox("disable")));
  r.focus(function () {
    $(this).val() === webRes.Font_ChooseCity && $(this).val("");
  });
}
function fnComboboxOther(n, t, i) {
  fnComboboxInit();
  $("#" + n).combobox({
    onChange: function (t) {
      n == "ddlBankCodeCn" &&
        (fnEnableSubmit(),
        IsTest &&
          $("#" + n + " option[value='" + t + "']").hasClass("maintain") &&
          $.fn.alert(
            "<div style='text-align:center;'><span style='font-size:20px;color:red;font-weight:bolder;'>Ngân hàng " +
              t +
              "</span> đang bảo trì, vui lòng sử dụng ngân hàng khác để rút tiền, cảm ơn!</div>"
          ));
    },
  });
  fnComboboxInit2(n);
  var r = fnComboboxItem(n, ".textbox-text");
  r.attr("placeholder", i ? i : webRes.Font_PleaseChooseBank);
  r.val("").css("font-size", (t ? t : "13.3") + "px");
  r.focus(function () {
    $(this).val() === (i ? i : webRes.Font_PleaseChooseBank)
      ? $(this).val("")
      : n == "ddlBankCodeCn" && $(this).val("");
  });
}
function fnComboboxCity(n, t, i) {
  var u, r;
  if ((fnComboboxInit(), (u = ""), IsCn && i && i == "djzxcn"))
    i &&
      i == "djzxcn" &&
      $("#" + n).combobox({
        onShowPanel: function () {
          $("#" + n).combobox("select", "");
        },
        onChange: function () {
          withdrawalCn.ChooseCity();
        },
        setText: "",
      });
  else if (
    ($("#" + n).combobox({
      onChange: function (n) {
        const u = IsCn && i == "gift3",
          f = u ? webRes.Font_PleaseChoose : webRes.Font_CityArea;
        n == "" &&
          i == "ChgData" &&
          r.attr("placeholder", webRes.Font_ChooseCity);
        ChooseCity3($(this).val(), "", null, f, t);
      },
    }),
    location.href.indexOf("ChgData") > -1)
  )
    $(".combo-panel")
      .eq(0)
      .find(".combobox-item")
      .on("click", function () {
        var t = fnComboboxItem(n, ".textbox-text");
        $(this).text().indexOf(webRes.Font_ChooseCity) > -1
          ? t.css("color", "#888888")
          : t.css("color", "#333333");
      });
  $.trim(t) != "" && (u = t.split("-"));
  fnComboboxInit2(n);
  r = fnComboboxItem(n, ".textbox-text");
  u[0] && $("#ddlCity").combobox("setValue", u[0]);
  let f =
    IsCn && i != "ChgData" ? webRes.Font_PleaseChoose : webRes.Font_ChooseCity;
  r.attr("placeholder", u[0] ? u[0] : f);
  IsCn && i == "add2" && value == ""
    ? r.val(webRes.Font_ChooseCity)
    : r.val("").css("font-size", "14px");
  i && i == "djzxcn"
    ? (r.attr("placeholder", webRes.Font_ChooseProvince),
      r.val("").css("font-size", "12px"),
      t &&
        (r.val(t),
        ddlCity.val(t),
        fnComboboxItem(n, ".combo-arrow").css("display", "none"),
        $("#ddlCity").combobox("disable")),
      r.focus(function () {
        $(this).val("");
      }))
    : r.focus(function () {
        $(this).val() === webRes.Font_ChooseCity &&
          ($(this).addClass("PlaceHolderColor"), $(this).val(""));
      });
}
function fnComboboxCityArea2(n, t, i) {
  var f, r, u;
  fnComboboxInit();
  f = $("#ddlCityArea").val();
  $("#enterPostcode").val("");
  r = "";
  IsTw
    ? $("#" + n).combobox({
        onChange: function () {
          ChooseCityArea();
        },
      })
    : $("#" + n).combobox();
  $("#ddlCityArea").val(f);
  IsYn && $("#ddlCityArea").combobox().next().attr("style", "width:213px;");
  $.trim(t) != ""
    ? ((r = t.split("-")),
      $("#ddlCityArea").val() === "" && r[1] && $("#ddlCityArea").val(r[1]))
    : fnComboboxItem(n, ".textbox-value").val("");
  fnComboboxInit2(n);
  u = fnComboboxItem(n, ".textbox-text");
  r[1] && $("#ddlCityArea").combobox("setValue", r[1]);
  let e =
    IsCn && i != "ChgData" ? webRes.Font_PleaseChoose : webRes.Font_CityArea;
  if (
    (u.attr("placeholder", r[1] ? r[1] : e),
    (i != "gift3" || t == "") && u.val("").css("font-size", "14px"),
    u.focus(function () {
      $(this).val() === webRes.Font_CityArea &&
        ($(this).addClass("PlaceHolderColor"),
        $(this).attr("placeholder", webRes.Font_CityArea),
        $(this).val(""));
    }),
    location.href.indexOf("ChgData") > -1)
  )
    $(".combo-panel")
      .eq(1)
      .find(".combobox-item")
      .on("click", function () {
        var t = fnComboboxItem(n, ".textbox-text");
        $(this).text().indexOf(webRes.Font_CityArea) > -1
          ? t.css("color", "#888888")
          : t.css("color", "#333333");
      });
}
function fnComboboxCityWithoutDefaultValue(n, t) {
  var r, i;
  fnComboboxInit();
  r = "";
  $("#" + n).combobox();
  $.trim(t) != "" && (r = t.split("-"));
  fnComboboxInit2(n);
  i = fnComboboxItem(n, ".textbox-text");
  i.val("").css("font-size", "14px");
  i.focus(function () {
    $(this).val() === webRes.Font_ChooseCity && $(this).val("");
  });
}
function fnComboboxCityAreaWithoutDefaultValue(n, t, i) {
  var r, u, f;
  fnComboboxInit();
  r = "";
  IsTw
    ? $("#" + n).combobox({
        onChange: function () {
          ChooseCityArea();
        },
      })
    : $("#" + n).combobox();
  IsYn && $("#ddlCityArea").combobox().next().attr("style", "width:213px;");
  $.trim(t) != "" && (r = t.split("-"));
  r[1] && $("#ddlCityArea").combobox("unselect", r[1]);
  fnComboboxItem(n, ".textbox-value").val("");
  fnComboboxInit2(n);
  u = fnComboboxItem(n, ".textbox-text");
  let e =
    IsCn && i != "ChgData" ? webRes.Font_PleaseChoose : webRes.Font_CityArea;
  if (
    (u.attr("placeholder", e),
    u.val("").css("font-size", "14px"),
    u.focus(function () {
      $(this).val() == r[1] && $(this).val();
      var n = $(this).val();
      n === webRes.Font_CityArea && $(this).val("");
    }),
    location.href.indexOf("ChgData") > -1)
  ) {
    f = fnComboboxItem(n, ".textbox-text");
    $(f).addClass("PlaceHolderColor");
    $(".combo-panel")
      .eq(1)
      .find(".combobox-item")
      .on("click", function () {
        $(this).text().indexOf(webRes.Font_CityArea) > -1
          ? f.css("color", "#888888")
          : f.css("color", "#333333");
      });
  }
}
function fnComboboxItem(n, t) {
  return $("#" + n)
    .next()
    .find(t);
}
function fnComboboxInit() {
  ff1 &&
    myBrowser() == "FF" &&
    $.fn.combobox &&
    ((ff1 = !1),
    ($.fn.combobox.defaults.inputEvents.keyup =
      $.fn.combobox.defaults.inputEvents.keydown),
    ($.fn.combobox.defaults.inputEvents.keydown = function () {}));
}
function fnComboboxInit2(n) {
  var t = fnComboboxItem(n, ".textbox-text");
  t.keydown(function () {
    var i = arguments.callee.caller.arguments[0] || window.event,
      t;
    if (i.keyCode == 13)
      return (
        (t = fnComboboxItem(n, ".combobox-item-hover:visible").size()),
        t === 0 &&
          fnComboboxItem(n, ".combobox-item:visible")
            .first()
            .addClass("combobox-item-hover"),
        !1
      );
  });
  t.click(function () {
    fnComboboxItem(n, ".combo-arrow").click();
  });
}
function fnCombo(n, t) {
  fnComboboxInit();
  $("#" + n).combobox({
    formatter: function (n) {
      return '<span class="item-text">' + n.text + "</span>";
    },
    editable: !1,
    onSelect: function (n) {
      var u = $(this).combobox("options"),
        i,
        r;
      t && t(n[u.valueField]);
      i = $(".project:contains(" + n.text + ")")
        .parent()
        .find(".item")
        .text();
      r = IsYn
        ? $(this).parent().attr("id")
        : $(this).parent().parent().attr("id");
      r == "ddlPayin"
        ? ($(".payinAmount").removeClass("red_t"),
          $(".payinAmount").text(i),
          n.text == webRes.Font_MainAccounts &&
            $(".payinAmount").text($("#lblMainMoney").text()),
          (i == webRes.Font_Maintain ||
            i == webRes.Font_Busy ||
            i == webRes.Font_Loading ||
            i == webRes.Font_Pleacewait) &&
            $(".payinAmount").addClass("red_t"))
        : r == "ddlPayout" &&
          ($(".payoutAmount").removeClass("red_t"),
          $(".payoutAmount").text(i),
          n.text == webRes.Font_MainAccounts &&
            $(".payoutAmount").text($("#lblMainMoney").text()),
          (i == webRes.Font_Maintain ||
            i == webRes.Font_Busy ||
            i == webRes.Font_Loading ||
            i == webRes.Font_Pleacewait) &&
            $(".payoutAmount").addClass("red_t"));
    },
  });
  $(".textbox-text").attr("unselectable", "on");
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
function fnCheckID() {
  var n = isIndex() ? "1" : "0";
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "IdCardCheck", isIndex: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (n) {
      if (isIndex()) {
        if (n == "5") {
          if (GetBirthday() == 1) return;
          fnShowBirthday();
        }
      } else
        n == "0"
          ? $.fn.alert(
              "很抱歉！您的身份证号输入错误已达3次，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！"
            )
          : n == "1"
          ? ($("#mask").remove(),
            $(".msgHintClose").remove(),
            $(".confirm1Title").append(
              "<input type='button' class='msgHintClose' onclick='fnHyzxClose();'/>"
            ),
            fnHyzxShowDialog("I"))
          : n == "2"
          ? $.fn.alert("你不符合此活动资格！")
          : n == "3"
          ? $.fn.alert("请登录后进行身份验证！")
          : n == "4"
          ? $.fn.alert("您已完成身份证验证！")
          : n == "6" && layerframeAdd0(2, 1);
    },
  });
}
function SetBirthday() {
  $.cookie("bdnotice", 1, { path: "/" });
}
function GetBirthday() {
  return isNaN(parseInt($.cookie("bdnotice")))
    ? 0
    : parseInt($.cookie("bdnotice"));
}
function ClearBirthday() {
  $.cookie("bdnotice", 0, { path: "/" });
}
function fnShowBirthday() {
  $("#divBirthday").show();
}
function fnHideBirthday() {
  $("#divBirthday").hide();
  ClearBirthday();
}
function fnBirthHref() {
  openNewWindowAutoHeightName("/Aspx/Hdzq.aspx?action=M", "850", "790");
  $("#divBirthday").fadeOut(1e3);
  SetBirthday();
}
function fnMoneyVerify() {
  $(document).on("input", "input[data-number='money']", function () {
    var n = this.value.replace(/\D/g, "").substring(0, 10);
    this.value =
      n == "" || isNaN(n) ? "" : n.substring(0, 1) == 0 ? "" : parseFloat(n);
  });
}
function OmittedMoney(n) {
  return $.trim(n).length > 10 && (n = n.substr(0, 6) + "..."), n;
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
function myBrowser() {
  var n = navigator.userAgent,
    t = n.indexOf("Opera") > -1;
  return t
    ? "Opera"
    : n.indexOf("Firefox") > -1
    ? "FF"
    : n.indexOf("Chrome") > -1
    ? "Chrome"
    : n.indexOf("Safari") > -1
    ? "Safari"
    : (n.indexOf("compatible") > -1 && n.indexOf("MSIE") > -1 && !t) ||
      !!window.ActiveXObject ||
      "ActiveXObject" in window
    ? "IE"
    : void 0;
}
function pdPass(n) {
  return /^[A-Za-z0-9]{6,10}$/.test(n);
}
function fn_InitCommon() {
  if (!isIndex()) {
    $("input:password").on("input keyup focus blur change", function () {
      var n = myBrowser(),
        t = $(this).val().trim();
      t != "" && $(this).is(":password")
        ? ($(this).css("font-family", "Arial"),
          n == "Chrome"
            ? $(this).css("font-size", "20px")
            : n == "FF"
            ? $(this).css("font-size", "12px")
            : n == "IE" && $(this).css("font-size", "12px"))
        : $(this).css({ "font-family": "", "font-size": "" });
    });
    fn_InitPageMenu();
  }
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
}
function fn_InitPageMenu() {
  var t = GetQueryString("type1") === "1";
  if (t) {
    var n = window.location.href.toLowerCase(),
      i = n.indexOf("hdzq") > -1,
      r = n.indexOf("text") > -1 || n.indexOf("kfzx") > -1,
      u = n.indexOf("platform") > -1;
    i
      ? ($(".subMain").css({ width: "960px" }),
        $(".bg_subMain").css({ padding: "0px", "background-color": "#FFFFFF" }),
        $(".bg_subMain .contant").css({ margin: "0px" }))
      : r
      ? $("body,.bg_subMain").css("background-color", "#F2F5FD")
      : u && $(".bg_subMain .contant").css({ margin: "0px" });
  }
}
function alertUserPass(n, t, i) {
  var r;
  return (
    t == 1
      ? (r = $.fn.alert(n, function () {
          $("#txtUser").focus();
        }))
      : t == 2 &&
        (r = $.fn.alert(n, function () {
          FocusPassword("txtPassword");
          i && i == "-1" && FocusPassword("txtUser");
        })),
    layerPw_focus(),
    r
  );
}
function clipCopy() {
  var n = new Clipboard(".btn_copy", {
    text: function (n) {
      var t = n.getAttribute("data-tagert");
      return $("#" + t)
        .text()
        .replace(/-/g, "");
    },
  });
  n.on("success", function (n) {
    n.clearSelection();
    $.fn.copy(webRes.Font_Czzq_25);
  });
  n.on("error", function () {
    $.fn.copy(webRes.Font_Czzq_25_2);
  });
}
function GetDivHeigth() {
  if (
    ($(".outer").each(function () {
      $(this).find(".inner").css("position", "relative");
      $(this).find(".inner").css("top", "50%");
      $(this).find(".inner").css("transform", "translateY(-50%)");
    }),
    myBrowser() == "IE")
  ) {
    var n = $(".footer_note_wrap,.precautions_t");
    n.each(function () {
      var n = $(this),
        t = parseInt(n.css("padding-left").replace("px", ""));
      n.css("padding-left", t + 3 + "px");
      n.css("padding-right", "0px");
    });
  }
  GetDivHeigth2();
}
function GetDivHeigth2() {
  if (myBrowser() == "IE") {
    var n = $(".ulie");
    n.each(function () {
      var n = $(this),
        t = parseInt(n.css("margin-left").replace("px", ""));
      n.css("margin-left", t + 4 + "px");
    });
  }
}
function PassengerChannel(n) {
  complantFlag > 0 ||
    ((complantFlag = 1),
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      data: { checkType: "27", type: n },
      type: "get",
      cache: !1,
      timeout: 15e3,
      success: function (t) {
        if (((complantFlag = 0), t == "noLogin"))
          n == "2"
            ? fnGetTip(webRes.Font_Platform3, "aComplantBox", "3", "3")
            : n == "4"
            ? fnGetTip(webRes.Font_Platform3, "aComplantBox2", "3", "3")
            : n == "5"
            ? fnGetTip(webRes.Font_Platform3, "btn_openComplain", "3", "2")
            : $.fn.alert(webRes.Font_Platform3);
        else if (t == "ok")
          if (n == "2" || n == "4" || n == "5") {
            var i = 433;
            complantFlag = $.fn.open(
              webRes.Font_ComplantBox_2,
              "/Aspx/ComplantBox.aspx",
              i,
              IsYn ? 532 : 447,
              "no",
              function () {
                complantFlag = 0;
              }
            );
            $("#layui-layer" + complantFlag).css({
              overflow: "hidden",
              "min-width": i + "px",
            });
          } else n == "3" && (window.location.href = "SetMessage.aspx");
        else
          n == "2"
            ? fnGetTip(t, "aComplantBox", "3", "3")
            : n == "4"
            ? fnGetTip(t, "aComplantBox2", "3", "3")
            : n == "5"
            ? fnGetTip(t, "btn_openComplain", "3", "2")
            : $.fn.alert(t);
      },
    }));
}
function isSize(n) {
  return $(n).size() > 0;
}
function layerIdCard(n) {
  layer.open({
    type: 1,
    title: webRes.Font_Info,
    content: $("#divIdCard"),
    area: ["370px", "270px"],
    anim: -1,
    isOutAnim: !1,
    resize: !1,
    shadeClose: !1,
    shade: 0.5,
    btn: "确认送出",
    skin: "layui-layer-dialog-custom",
    end: function () {
      layerframeAddClose();
    },
    success: function () {
      $("#divIdCard").parent(".layui-layer-content").css("height", "95px");
    },
    yes: function () {
      fnIdCard(n);
    },
  });
  $("#txtConfirm1").attr("placeholder", "您的真实户名为：" + n);
  fnIsIeM() || $("#txtConfirm1").focus();
}
function layerForgotword(n) {
  if (!(forgotpwdFlag > 0)) {
    forgotpwdFlag = 1;
    var t = n == 1 ? "?type=djpass" : "",
      i = IsYn ? 460 : 400;
    $.fn.open(
      webRes.Font_ForgotPwd,
      "/Aspx/ForgotPassWord.aspx" + t,
      i,
      395,
      "no",
      function () {
        forgotpwdFlag = 0;
      }
    );
  }
}
function openSmartService() {
  var n = 996,
    t = 852,
    i = (window.screen.availWidth - 10 - n) / 2,
    r = (window.screen.availHeight - 10 - t) / 2,
    u =
      "top=" +
      r +
      ", toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, width=" +
      n +
      ", left=" +
      i +
      ", height=" +
      t,
    f = window.open("", "SmartService", u);
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "30" },
    timeout: 15e3,
    success: function (n) {
      n && (f.location.href = n);
    },
  });
}
function IsAdd2() {
  return $(".join_members").size() > 0;
}
function GetCookieInt(n) {
  return isNaN(parseInt($.cookie(n))) ? 0 : parseInt($.cookie(n));
}
function GetRandom(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
function checkcode(n) {
  return n != "" && n.length == 4 && !isNaN(n) ? !0 : !1;
}
function checkBank() {
  setTimeout(function () {
    (typeof isChecking == "undefined" || isChecking != !0) &&
      openNewWindowAutoHeightName(
        "/five_bank_study/supportBank.html",
        "690",
        "420",
        "checkBank"
      );
  }, 500);
}
function btnPwdEye(n) {
  var t, i;
  $("#" + n).attr("disabled") != "disabled" &&
    ($(".icon_bankEye").toggleClass("off"),
    (t = document.getElementById(n)),
    show
      ? ((t.type = "password"),
        (show = !1),
        t.value &&
          ((i = myBrowser()),
          $(this).css("font-family", "Arial"),
          i == "Chrome"
            ? (t.style.fontSize = "20px")
            : i == "FF"
            ? (t.style.fontSize = "12px")
            : i == "IE" && (t.style.fontSize = "12px")))
      : ((t.type = "text"), (show = !0), t.value && (t.style.fontSize = "")));
}
function stopPropagation(n) {
  n = n || window.event || arguments.callee.caller.arguments[0];
  document.all
    ? (n.cancelBubble = !0)
    : (n.stopPropagation(), n.preventDefault());
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
      async: !1,
      timeout: 15e3,
      success: function (t) {
        ($(".layui-layer-shade").length > 0 && checkFunctionFlag) ||
          (n === "D"
            ? setDeposit(t.f_data3)
            : n === "W"
            ? setWithdraw(t.f_data3)
            : n === "M" && setMember3(t.f_data3),
          (checkFunctionFlag = !1));
      },
    }));
}
function setDeposit(n) {
  n !== "" &&
    (n.s_isRegistered &&
    (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1))
      ? layerframeAdd2()
      : n.s_f_ishow === 3
      ? setTips(webRes.Font_RegisterOK4)
      : n.f_isUpload
      ? setTips(webRes.Font_UploadIdCard_DepositMsg)
      : setTips(webRes.Font_DepositSysMaintain));
}
function setWithdraw(n) {
  n.s_isRegistered &&
  (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1)) &&
  IsYn
    ? layerframeAdd2()
    : openNewWindowAutoHeightName(
        "/Aspx/Djzx" + GetTextLanguage("", "cn", "yn") + ".aspx",
        800,
        546
      );
}
function setTips(n) {
  fnGetTip(GetArrayIndex("", 0, n), "aKscz");
  document.getElementById("aKscz").href = "javascript:checkFunction('D');";
}
function checkFunction2(n) {
  checkFunctionFlag2 ||
    ((checkFunctionFlag2 = !0),
    $.ajax({
      url: "/LoadData/HelpCheck.ashx",
      data: { checkType: "12" },
      type: "get",
      dataType: "json",
      cache: !1,
      timeout: 15e3,
      success: function (t) {
        ($(".layui-layer-shade").length > 0 && checkFunctionFlag2) ||
          (n === "D"
            ? setDeposit2(t.f_data3)
            : n === "W"
            ? setWithdraw2(t.f_data3)
            : n === "M" && setMember2(t.f_data3),
          (checkFunctionFlag2 = !1));
      },
    }));
}
function setDeposit2(n) {
  n !== "" &&
    (n.s_isRegistered &&
    (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1))
      ? layerframeAdd2()
      : n.s_f_ishow === 3
      ? setTips(webRes.Font_RegisterOK4)
      : setTips2(webRes.Font_DepositSysMaintain));
}
function setWithdraw2(n) {
  n.s_isRegistered &&
  (n.s_f_ishow !== 0 || (n.s_f_ishow === 0 && n.s_isRN === 1))
    ? layerframeAdd2()
    : fnBack("/Aspx/Djzxyn.aspx");
}
function setMember2(n) {
  n.s_isRegistered ? layerframeAdd2() : fnBack("/Aspx/ChgData.aspx");
}
function setMember3(n) {
  var t = n.s_isRN === 1,
    i = n.s_isMajorBySystem;
  i
    ? openNewWindowAutoHeightName("/Aspx/ChgData.aspx", 800, "546")
    : n.s_f_photoState !== 0 && t
    ? openNewWindowAutoHeightName("/Aspx/ChgData.aspx", 800, "546")
    : layerframeAdd2();
}
function setTips2(n) {
  alertTip(n);
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
              ? fnGetTip(n.msg, "ktalk", 3, 1)
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
  IsMobile()
    ? n
      ? window.open(
          "/game/IMIndex.aspx?u=" + encodeURIComponent(urlIM),
          "IMWindow"
        )
      : fnBack(urlIM)
    : (window.open(urlIM, "IMWindow", "width=500,height=800"),
      $("#imgIM").remove());
}
function OpenUploadIC() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "55" },
    timeout: 15e3,
    success: function (n) {
      n == "1"
        ? OpenUploadIC2()
        : $.fn.confirm(
            webRes.Font_UploadImgCloseMsg,
            function () {
              OpenUploadTutorial();
            },
            null,
            webRes.Font_Info,
            webRes.Font_CheckUploadTutorial,
            IsYn ? "Bỏ qua" : webRes.Font_Cancel
          );
    },
  });
}
function OpenUploadIC2() {
  var n = GetAdd2Height(),
    t = layer.open({
      type: 2,
      title: !1,
      content: ["/Aspx/UploadIC.aspx?_=" + Math.random(), "no"],
      shade: 0.3,
      shift: -1,
      area: ["500px", n + "px"],
      skin: "IELoadPage",
      closeBtn: 0,
      fix: !IsMobile(),
      end: function () {
        isIndex() ? IsLoginedIndex && fnAddEnd() : F52();
      },
      success: function (n) {
        var i =
          n
            .contents()[0]
            .getElementsByTagName("iframe")[0]
            .contentWindow.document.getElementsByTagName("body")[0].innerHTML
            .length > 0;
        i ? n.removeClass("IELoadPage") : (layer.close(t), F52());
      },
    });
}
function CheckDuplicate() {
  var n = { type: "CheckDuplicate" },
    t,
    i = 0;
  if ($(".cryptoWalletDiv").is(":visible")) {
    if (((i = 2), $("#inputCryptoAddress").val() == "")) return;
    n.cryptoWalletAddress = $("#inputCryptoAddress").val();
    t = $("#inputCryptoAddress");
  } else if ($(".cryptoRCoinDiv").is(":visible")) {
    if (((i = 3), $("#inputCryptoAddress").val() == "")) return;
    n.cryptoWalletAddress = $("#inputCryptoAddress").val();
    t = $("#inputCryptoAddress");
  } else if ($("#jko_popup").is(":visible")) {
    if (((i = 4), $("#txtjkoAccount").val() == "")) return;
    n.jkoAccount = $("#txtjkoAccount").val();
    t = $("#txtjkoAccount");
  } else {
    if (
      ((i = 1),
      ($("#txtRemittanceAccount").length > 0 &&
        $("#txtRemittanceAccount").val() == "") ||
        ($("#txtRemittanceAccountAdd").length > 0 &&
          $("#txtRemittanceAccountAdd").val() == "") ||
        ($("#txtBankAccount").length > 0 && $("#txtBankAccount").val() == ""))
    )
      return;
    if (
      ($("#txtRemittanceAccount").length > 0
        ? ((n.remittanceAccount = $("#txtRemittanceAccount").val()),
          (t = $("#txtRemittanceAccount")))
        : $("#txtRemittanceAccountAdd").length > 0
        ? ((n.remittanceAccount = $("#txtRemittanceAccountAdd").val()),
          (t = $("#txtRemittanceAccountAdd")))
        : ((n.remittanceAccount = $("#txtBankAccount").val()),
          (t = $("#txtBankAccount"))),
      $("#txtRemittanceAccount2").length > 0 &&
        $("#txtRemittanceAccount2").is(":visible"))
    ) {
      if ($("#txtRemittanceAccount2").val() == "") return;
      n.visaNo = $("#txtRemittanceAccount2").val();
    }
  }
  n.cardType = i;
  isChecking = !0;
  $.ajax({
    url: "/LoadData/WithDraw.ashx",
    type: "post",
    dataType: "json",
    data: n,
    success: function (n) {
      n.StatusCode != 200
        ? $.fn.alert(
            "<div style='text-align:center'>" + n.StatusDescription + "</div>",
            function () {
              if (
                (t.val("").focus(),
                $("#txtRemittanceAccount2").val(""),
                IsTest && IsAdd2)
              ) {
                var n = fnComboboxItem("ddlBankCode", ".textbox-text");
                n.length > 0 && n.focus().blur();
              }
              isChecking = !1;
            }
          )
        : (isChecking = !1);
    },
  });
}
function htmlDecode(n) {
  var t = new DOMParser().parseFromString(n, "text/html");
  return t.documentElement.textContent;
}
function GenerateQrCode(n, t, i, r) {
  $(n).qrcode({ render: "canvas", text: t, width: i, height: r });
}
function OpenUploadTutorial() {
  var n =
    "<div class='popUpShow popUpEX " +
    (isIndex() ? "" : "hyzx") +
    "' id='exDEP' style='display: block'><div class='black_screen'></div><div><div class='popUp_title'>" +
    (IsYn ? "HƯỚNG DẪN" : "教學") +
    "</div>";
  n +=
    "<a class='popUpClose'></a><div class='popUp_in swiper'><div class='swiper-wrapper'>";
  IsYn
    ? ((n +=
        "<div class='swiper-slide'><div class='stepEX'>Bước 1</div><div class='txtEX' style='margin-top:5px;'><span>Vui lòng sử dụng <span class='red_w'>điện thoại di động</span><br>đăng nhập tài khoản hội viên</span></div><div class='imgEX'><img src='/images/TS77/step1.png'/></div></div>"),
      (n +=
        "<div class='swiper-slide'><div class='stepEX'>Bước 2</div><div class='txtEX'><span>Nhấn vào <span class='red_w'>Nạp tiền</span> để chụp tải CMND/CCCD</span></div><div class='imgEX'><img src='/images/TS77/step2.png'/></div></div>"))
    : ((n +=
        "<div class='swiper-slide'><div class='stepEX'>步驟 1</div><div class='txtEX'><span>請使用<span class='t_red'>手機</span>登入會員帳號</span></div><div class='imgEX'><img src='/images/" +
        (Is777 ? "TS777" : "TS5588") +
        "/step1.png'/></div></div>"),
      (n +=
        "<div class='swiper-slide'><div class='stepEX'>步驟 2</div><div class='txtEX''><span>點擊<span class='t_red'>存款</span>拍照上傳身分證</span></div><div class='imgEX'><img src='/images/" +
        (Is777 ? "TS777" : "TS5588") +
        "/step2.png'/></div></div>"));
  n +=
    "</div><div class='swiper-button-prev'></div><div class='swiper-button-next'></div><div class='swiper-pagination'></div></div></div></div>";
  $("body").append(n);
  Is777 || $("#exDEP").addClass("THA");
  IsYn && $(".popUp_in").css("padding-bottom", "20px");
  $("#exDEP").show();
  $("#exDEP .popUpClose").on("click", function () {
    $("#exDEP").remove();
  });
  const t = new Swiper(".popUp_in.swiper", {
    loop: !0,
    simulateTouch: !1,
    pagination: { el: ".swiper-pagination", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
var time1 = 6e4,
  time2 = 7e4,
  time3 = 6e4,
  arrT = [776],
  windowOpenArray = [],
  ArrayUser2,
  ErrorText,
  flagGame0,
  flagGame17,
  flagGame,
  flagInsertInfo,
  MethodtType,
  checkBankCardFormValue,
  ff1,
  complantFlag,
  forgotpwdFlag,
  sendMessageType,
  show,
  checkFunctionFlag,
  checkFunctionFlag2,
  openIMFlag,
  autourlIM,
  responseIM,
  urlIM,
  fastIM;
$(function () {
  fn_InitCommon();
});
var IsTw = webRes.Font_Lan === "tw",
  IsCn = webRes.Font_Lan === "cn",
  IsYn = webRes.Font_Lan === "yn";
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
window.onresize = function () {
  $("#popdiv").css(
    "left",
    (document.body.clientWidth - document.body.clientWidth * 0.36) / 2
  );
  $("#popdiv").css("top", (document.body.clientHeight - 274 * 1.5) / 2);
};
flagGame0 = !1;
flagGame17 = !1;
flagGame = !1;
flagInsertInfo = !1;
checkBankCardFormValue = function () {
  if (!$("#btn_CheckBankPhoneCode").hasClass("checkok")) return !1;
  var n = !0;
  return (
    $(".popup_s2")
      .find('input[type="text"],select')
      .each(function () {
        $.trim($(this).val()) ||
          ($(this).hasClass("txt_phone_code") &&
            $(".btn_phone_code").hasClass("checkok")) ||
          ($(this).prop("id") == "txtRemittanceAccount2" &&
            ($(this).prop("id") != "txtRemittanceAccount2" ||
              $(this).css("display") == "none")) ||
          (n = !1);
      }),
    n
  );
};
ff1 = !0;
complantFlag = 0;
forgotpwdFlag = 0;
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
  SetProtectionPass: 15,
  AddJkoAccount: 17,
  AddCryptoAccount: 18,
  MemberTurnSubmit: 19,
  AddRCoinAccount: 23,
};
show = !1;
$.format = function (n, t) {
  return arguments.length == 1
    ? function () {
        var t = $.makeArray(arguments);
        return t.unshift(n), $.format.apply(this, t);
      }
    : (arguments.length > 2 &&
        t.constructor != Array &&
        (t = $.makeArray(arguments).slice(1)),
      t.constructor != Array && (t = [t]),
      $.each(t, function (t, i) {
        n = n.replace(new RegExp("\\{" + t + "\\}", "g"), i);
      }),
      n);
};
checkFunctionFlag = !1;
checkFunctionFlag2 = !1;
openIMFlag = !1;
fastIM = !1;

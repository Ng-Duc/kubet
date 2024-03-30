function YYYYMMDDstart(n, t, i) {
  for (var u, e, r = new Date(), o = r.getFullYear(), f = 1900; f <= o; f++)
    document.getElementById(n).options.add(new Option(f, f));
  for (u = 1; u < 13; u++)
    document.getElementById(t).options.add(new Option(u, u));
  $("#ddlYear").size() > 0
    ? ((document.getElementById(n).value = "1980"),
      (document.getElementById(t).value = ""))
    : ((document.getElementById(n).value = r.getFullYear()),
      (document.getElementById(t).value = r.getMonth() + 1));
  e = MonHead[r.getMonth()];
  r.getMonth() == 1 && IsPinYear(YYYYvalue) && e++;
  writeDay(e, n, t, i);
  document.getElementById(i).value =
    $("#ddlYear").size() > 0 ? "" : r.getDate();
  $("#" + n).change(function () {
    YYYYDD($(this).val(), n, t, i);
  });
  $("#" + t).change(function () {
    MMDD($(this).val(), n, t, i);
  });
}
function YYYYDD(n, t, i, r) {
  var u =
      document.getElementById(i).options[
        document.getElementById(i).selectedIndex
      ].value,
    e,
    f;
  if (u == "") {
    e = document.getElementById(r);
    optionsClear(e);
    return;
  }
  f = MonHead[u - 1];
  u == 2 && IsPinYear(n) && f++;
  writeDay(f, t, i, r);
}
function MMDD(n, t, i, r) {
  var f, u;
  if (
    ((YYYYvalue =
      document.getElementById(t).options[
        document.getElementById(t).selectedIndex
      ].value),
    YYYYvalue == "")
  ) {
    f = document.getElementById(r);
    optionsClear(f);
    return;
  }
  u = MonHead[n - 1];
  n == 2 && IsPinYear(YYYYvalue) && u++;
  writeDay(u, t, i, r);
}
function writeDay(n, t, i, r) {
  var f = document.getElementById(r),
    u;
  for (optionsClear(f), u = 1; u < n + 1; u++) f.options.add(new Option(u, u));
}
function IsPinYear(n) {
  return 0 == n % 4 && (n % 100 != 0 || n % 400 == 0);
}
function optionsClear(n) {
  n.options.length = 1;
}
function Addapp(n) {
  var i, t;
  n != "" &&
    (((i = window.location.href), i.indexOf("login.html") > -1) ||
      ((t = n.split("#")),
      t.length == 3 && ((samepcUrl = t[0]), (domains = t[2].split("|"))),
      GetDomain(domains)));
}
function newGuid() {
  for (var i, t = "", n = 1; n <= 32; n++)
    (i = Math.floor(Math.random() * 16).toString(16)),
      (t += i),
      (n == 8 || n == 12 || n == 16 || n == 20) && (t += "-");
  return t;
}
function isExistTemp(n) {
  return typeof n == "undefined" ? !1 : !0;
}
function GetQueryString2(n, t) {
  var r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
    i = n.split("?")[1].match(r);
  return i != null ? unescape(i[2]) : null;
}
function fnFormatUrl(n, t) {
  var i = GetQueryString2(n, "a"),
    r,
    u;
  return (
    i.indexOf(" ") > -1 &&
      ((r = i.split(" ")),
      (u = r[0]),
      (n = n.replace(" " + u, "").replace(/ /g, ""))),
    n + ("&main2=" + t)
  );
}
function AddappFlash(n) {
  var t =
    '<div id="flashCookieContent"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="FlashCookie" align="middle"><param name="movie" value="/Swf/FlashCookie.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="window" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="" /><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="vars=' +
    n +
    '" /><object type="application/x-shockwave-flash" data="/Swf/FlashCookie.swf" width="1" height="1"><param name="movie" value="/Swf/FlashCookie.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="window" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="" /><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="vars=' +
    n +
    '" /><a href="http://www.adobe.com/go/getflash"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获得 Adobe Flash Player" /></a></object></object></div>';
  $(document.body).append(t);
}
function callphotoE(n) {
  if (checkKeyWord.checkok()) {
    var t = $("#txtConfirm1").val();
    if (t == "") {
      $.fn.alert("支付宝帐号不能为空！");
      return;
    }
    if (!isZfbText(t)) {
      $.fn.alert("帐号不合法，请核查正确后提交！");
      return;
    }
    n === 1 &&
      ($("#btnSendCode").val("发送中..."),
      $("#btnSendCode").attr("disabled", "disabled"),
      $("#btnSendCode").removeClass("btn-gray"));
    $.ajax({
      url: "https://api.ku1119.com/api/register1",
      type: "post",
      data: { type: sendMessageType.AlipayVerify, Alipay: t },
      cache: !1,
      timeout: 15e3,
      success: function (t) {
        if (t !== "") {
          $("#btnSendCode2").size() > 0 &&
            t.trim() == webRes.Font_phoneCode7 &&
            $("#btnSendCode2").css("background-color", "#9D9D9F");
          $.fn.alert(t);
          n === 1 &&
            ($("#btnSendCode").val("送出验证码"),
            $("#btnSendCode").removeAttr("disabled"),
            $("#btnSendCode").addClass("btn-gray"));
          return;
        }
        $("#txtPhoneCode").alert(
          "验证码已发送到您的手机，请查收！并填写4位手机验证码！"
        );
        n === 1 &&
          ($("#txtPhoneCode").removeAttr("disabled"),
          $("#txtPhoneCode").focus(),
          $("#btnSendCode").val("已发送"),
          $("#btnSendCode").attr("disabled", "disabled"),
          $("#btnSendCode").removeClass("btn-gray"),
          $("#btnSendCode2").removeClass("btn-darkgray"),
          $("#btnSendCode2").addClass("btn-red"),
          $("#btnSendCode2").removeAttr("disabled"));
      },
    });
  }
}
function ComfirmSendPdE() {
  if (checkKeyWord.checkok()) {
    var t = $("#txtConfirm1").val(),
      r = $("#txtPhoto").val(),
      n = $("#txtPhoneCode"),
      i = n.val(),
      u =
        fnTXTEmpty(t, "支付宝帐号不能为空！", $("#txtConfirm1")) &&
        fnTXTEmpty(r, "手机号码不能为空！", $("#txtPhoto")) &&
        fnTXTEmpty(i, "验证码不能为空！", $("#txtPhoneCode"));
    if (!u) return !1;
    if (!isZfbText(t))
      return $("#txtConfirm1").alert("帐号不合法，请核查正确后提交！"), !1;
    if (!checkcode(i)) return $("#txtPhoneCode").alert("验证码错误！"), !1;
    if (flagE) return !1;
    flagE = !0;
    $.ajax({
      url: "/LoadData/AddCheckNum.ashx",
      type: "post",
      data: { type: sendMessageType.AlipayVerify, photocode: i, Alipay: t },
      cache: !1,
      timeout: 15e3,
      dataType: "json",
      error: function () {
        flagE = !1;
      },
      success: function (t) {
        flagE = !1;
        t.state == 10
          ? $("#zfbID").size() > 0
            ? ($.cookie("zfbID", "1"),
              (window.location.href = "/Aspx/Djzxcn.aspx"))
            : (window.location.href = "/Aspx/Alipay.aspx")
          : t.state == 0
          ? n.alert(t.msg, function () {
              n.val("");
            })
          : t.state == 3
          ? n.alert(t.msg)
          : t.state == 4 && $.fn.alert(t.msg);
      },
    });
  }
}
function SamecomputerBlacklist() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "21" },
    timeout: 15e3,
    cache: !1,
    error: function () {},
    success: function () {},
  });
}
function getprotocol(n) {
  var t = "https:" == document.location.protocol ? !0 : !1;
  return t ? n.replace("http://", "https://") : n;
}
function GetDomain(n) {
  if (n.length === 1) return auto(0);
  $("body").append("<div id=img></div>");
  $("#img").append("<div></div>");
  var t =
    "<img src=" +
    n[0] +
    "speed.ashx?sjs=" +
    Math.random() +
    " width=1 height=1   onLoad=auto(0)  onerror=Loaderror(1) style='display:none' />";
  $("#img>div").eq(0).html(t);
}
function auto(n) {
  sendSamePc(n);
}
function Loaderror(n) {
  sendSamePc(n);
}
function sendSamePc(n) {
  var t = domains[n] + samepcUrl,
    i = fnFormatUrl(t, 1);
  new Fingerprint2().get(function (n) {
    i += "&brsVal=" + n;
    $.ajax({
      type: "GET",
      url: i,
      timeout: 15e3,
      anysc: !1,
      dataType: "jsonp",
      jsonp: "jsoncallback",
      jsonpCallback: "success_jsonpCallback",
      error: function (n, t, r) {
        var u =
          "status:" +
          n.status +
          " statusText:" +
          n.statusText +
          " textStatus:" +
          t +
          " errorThrown:" +
          r +
          " url:" +
          i;
        $.ajax({
          url: "/LoadData/WriteLog.ashx",
          data: { type: "2", error: u },
        });
      },
      success: function (n) {
        var r = n.x,
          u = n.y,
          f,
          i;
        r !== "" &&
          u !== "" &&
          ($.cookie("xxx", r, { path: "/", expires: 30 }),
          $.cookie("yyy", u, { path: "/", expires: 30 }));
        f = "Tm_" + GetQueryString2(t, "a") + "_" + GetQueryString2(t, "c");
        i = new Date();
        i.setHours(i.getHours() + 1);
        $.cookie(f, "1", { path: "/", expires: i });
        SamecomputerBlacklist();
        showGiftAD();
      },
    });
  });
}
var YYYYvalue, MonHead, domains, samepcUrl, flagE;
$(function () {
  $("#ddlYear").size() > 0
    ? YYYYMMDDstart("ddlYear", "ddlMonth", "ddlDay")
    : $("#ddlYearStart").size() > 0 &&
      (YYYYMMDDstart("ddlYearStart", "ddlMonthStart", "ddlDayStart"),
      YYYYMMDDstart("ddlYearEnd", "ddlMonthEnd", "ddlDayEnd"));
});
MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
flagE = !1;

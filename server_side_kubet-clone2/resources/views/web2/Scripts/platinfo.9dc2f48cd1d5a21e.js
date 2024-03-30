function Platinfo(n, t) {
  var i = new Date();
  (i.getTime() - Platime > 3e4 || t == "1" || refreshData == "1") &&
    ($.each(MypurseIndex, function (n, t) {
      $("." + t.name).html("loading..");
    }),
    $(".btn_turn_back").remove(),
    (Platime = new Date().getTime()),
    $.ajax({
      url: "/LoadData/Platinfo.ashx",
      data: { platinfoType: "2" },
      type: "get",
      timeout: 15e4,
      cache: !1,
      error: function () {},
      success: function (t) {
        if (t == "") return !1;
        refreshData = 0;
        var i = t.split("|");
        getMoneyIndexPlatInfo(i, n);
      },
    }));
}
function PlatinfoNew(n, t) {
  var f = new Date(),
    i,
    r,
    u;
  (f.getTime() - Platime > 3e4 ||
    t == "1" ||
    refreshData == "1" ||
    $.cookie("refreshAllBalance") == "1") &&
    ($.cookie("refreshAllBalance", "0", { path: "/" }),
    (refreshData = 0),
    $.each(MypurseIndex, function (n, t) {
      $("." + t.name).html("loading..");
    }),
    $(".btn_turn_back,.sback").remove(),
    (Platime = new Date().getTime()),
    (i = IsCn
      ? {
          MAIN: "T-03",
          COLOR: "T-04",
          AG: "T-07",
          CNF: "T-09",
          KY: "T-11",
          OG: "T-13",
          BBIN: "T-14",
          AB: "T-15",
          DT: "T-16",
          HB: "T-19",
          CMD: "T-20",
          KU: "T-24",
          BNG: "T-27",
          CQ9: "T-29",
          VR: "T-31",
          LC: "T-32",
          PIN: "T-33",
          SB: "T-36",
          NBB: "T-38",
          WM: "T-42",
          KA: "T-43",
          DG: "T-44",
          DS: "T-46",
          PS: "T-47",
          SM: "T-50",
          IM: "T-52",
          KS: "T-55",
          PG: "T-57",
          FREN: "T-58",
          EVO: "T-59",
          AI: "T-60",
          FTG: "T-61",
          FC: "T-62",
          OBSPORT: "T-63",
          OBLIVE: "T-64",
          OBESPORT: "T-65",
          OBFish: "T-70",
        }
      : IsTw
      ? {
          MAIN: "T-03",
          COLOR: "T-04",
          HG: "T-06",
          CNF: "T-09",
          OG: "T-13",
          AB: "T-15",
          KU: "T-24",
          BNG: "T-27",
          PIN: "T-33",
          NBB: "T-38",
          WM: "T-42",
          DG: "T-44",
          SA: "T-45",
          DS: "T-46",
          PS: "T-47",
          SM: "T-50",
          KS: "T-55",
          FREN: "T-58",
          FTG: "T-61",
          OBSPORT: "T-63",
          OBLIVE: "T-64",
          OBESPORT: "T-65",
          WG: "T-66",
          OBFish: "T-70",
        }
      : {
          MAIN: "T-03",
          COLOR: "T-04",
          AG: "T-07",
          CNF: "T-09",
          BBIN: "T-14",
          HB: "T-19",
          CMD: "T-20",
          KU: "T-24",
          BNG: "T-27",
          LC: "T-32",
          PIN: "T-33",
          SB: "T-36",
          NBB: "T-38",
          WM: "T-42",
          KA: "T-43",
          DG: "T-44",
          SA: "T-45",
          DS: "T-46",
          PS: "T-47",
          SM: "T-50",
          IM: "T-52",
          AES: "T-54",
          KS: "T-55",
          PG: "T-57",
          FREN: "T-58",
          EVO: "T-59",
          AI: "T-60",
          FTG: "T-61",
          FC: "T-62",
          OBSPORT: "T-63",
          OBLIVE: "T-64",
          OBESPORT: "T-65",
          AGVNFish: "T-69",
          OBFish: "T-70",
        }),
    (r = 0),
    (u = 0),
    streamerGiftSwitch && (i.LOVE = "T-56"),
    $.each(i, function (n, t) {
      UpdatePanelPlatinfo(n, t, function (n) {
        u++;
        n != null &&
          n != "" &&
          n != "forbidden" &&
          (r += IsYn
            ? parseInt(n.replaceAll(/\./g, ""))
            : parseInt(n.replaceAll(",", "")));
        u == Object.keys(i).length && $(".AllPoints").text(r.toMoney());
        $("#mask").hide();
      });
    }));
}
function UpdatePanelPlatinfo(n, t, i) {
  $.ajax({
    url: "/LoadData/GetThirdPartyBalance.ashx",
    data: "id=" + t + "&type=refreshBalance&isAll=1",
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (r) {
      var a = !0,
        h = !0,
        o = "",
        e,
        u,
        f,
        c,
        l,
        s;
      r.PlatStatus &&
        r.PlatStatus != "" &&
        ((e = r.PlatStatus.split("|")),
        (a = e[0] == "True"),
        (h = e[1] == "True"),
        (o = e[1]));
      u = "";
      f = r.Data;
      h
        ? (IsYn && $("." + n.toLowerCase() + "Points").removeClass("mainten"),
          (u = r.Data),
          u == "" && (u = 0),
          (c = ["-3", "-53", "-54", "-55", "-56"]),
          c.indexOf(u) > -1
            ? ((f = 0),
              $("." + n.toLowerCase() + "Points").html(getPlatMoneyPlatInfo(u)))
            : u != null &&
              (n.toLowerCase() == "main"
                ? $("." + n.toLowerCase() + "Points").text(
                    "$ " + getPlatMoneyPlatInfo(u)
                  )
                : ($("." + n.toLowerCase() + "Points").text(
                    getPlatMoneyPlatInfo(u)
                  ),
                  parseInt(u) > 0 &&
                    t != "T-56" &&
                    ((l = Object.keys(MypurseId).find(
                      (n) => MypurseId[n].type === t
                    )),
                    $("." + n.toLowerCase() + "Points").after(
                      "<input type='button' value='" +
                        webRes.Font_ReturnBack +
                        "' class='sback' onclick='ReturnMainPoint(" +
                        l +
                        ")'>"
                    )))))
        : ((u = "-1"),
          IsYn && $("." + n.toLowerCase() + "Points").addClass("mainten"),
          $("." + n.toLowerCase() + "Points").html(getPlatMoneyPlatInfo(u)));
      s = $("#hiddenMajorDomoF").val();
      typeof s != "undefined" &&
        s.toLowerCase() == "false" &&
        o.toLowerCase() == "false" &&
        (f = "0");
      t == "T-58" && o.toLowerCase() == "false" && (f = "0");
      t == "T-56" && (f = "0");
      i && i(f);
    },
  });
}
function getMoneyIndexPlatInfo(n, t) {
  var i;
  t == "1" && $(".btn_turn_back").remove();
  $.each(MypurseIndex, function (r, u) {
    t == "1" &&
      n[r] != "0" &&
      platformstatus.indexOf(n[r]) < 0 &&
      u.id != "0" &&
      $("." + u.name).after(
        "<div class='btn_turn_back' onclick='ReturnMainPoint(" +
          u.id +
          ")'>" +
          webRes.Font_ReturnBack +
          "</div>"
      );
    i = getPlatMoneyPlatInfo(n[r]);
    u.name == "mainPoints"
      ? $("." + u.name)
          .text(OmittedMoney(i))
          .prop("title", i)
      : $("." + u.name).html(i);
  });
}
function getPlatMoneyPlatInfo(n) {
  return platformstatus.indexOf(n) >= 0
    ? '<font style="color:red;">' +
        (n == "-53"
          ? webRes.Font_Pleacewait
          : n == "-54"
          ? webRes.Font_Loading
          : n == "-1" || n == "-56"
          ? webRes.Font_Maintain
          : webRes.Font_Busy) +
        "</font>"
    : n;
}
function OmittedMoney(n) {
  return $.trim(n).length > 10 && (n = n.substr(0, 6) + "..."), n;
}
function validateIdCard(n) {
  var t, r, i;
  if (
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
      n
    )
  ) {
    if (n.length == 18) {
      var f = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        u = 0;
      for (t = 0; t < 17; t++) u += n.substring(t, t + 1) * f[t];
      return (
        (r = u % 11),
        (i = n.substring(17)),
        r == 2
          ? i == "X" || i == "x"
            ? !0
            : !1
          : i == [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2][r]
          ? !0
          : !1
      );
    }
    return !0;
  }
  return !1;
}
function fnIdCard(n) {
  var t = $("#txtConfirm1"),
    i = t.val().toUpperCase();
  if (i == "")
    return (
      $.fn.alert("身份证号长度/格式不正确！", function () {
        IsMPage || t.focus();
      }),
      !1
    );
  if (i.length != 18)
    return (
      $.fn.alert("身份证号长度/格式不正确！", function () {
        IsMPage || t.focus();
      }),
      !1
    );
  if (!IsNameCn)
    return (
      $.fn.alert(
        "很抱歉，汇款户名不是正确中文名，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！",
        function () {
          openDialogZxkf();
        }
      ),
      !1
    );
  if (!IsTest && !validateIdCard(i))
    return (
      $.fn.alert("身份证号长度/格式不正确！", function () {
        IsMPage || t.focus();
      }),
      !1
    );
  if (flagIdCard) return !1;
  flagIdCard = !0;
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "IdCard1", txtIdCard: i, txtRemittanceName: n },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {
      flagIdCard = !1;
    },
    success: function (n) {
      var u, f;
      flagIdCard = !1;
      var r = n.split("|"),
        t = r[0],
        i = r[1];
      if (t == "0") {
        if (i == "2") {
          u = $("#txtConfirm1").val();
          $("#hid_IdCard").val(u);
          IsMPage ? ShowNextDiv() : $("#btn").prop("disabled", !1).click();
          return;
        }
        f = local1.indexOf("hdzq") > -1;
        IsAdd2
          ? alertOk(i)
          : f
          ? $.fn.alert("验证成功！", function () {
              fnHyzxClose();
            })
          : (fnHyzxClose(i), IsVoicePassNoMChg && FirstStep());
      }
      t == "-1"
        ? $.fn.alert("会员帐号有误！", function () {
            layerframeAddClose();
          })
        : t == "1"
        ? ((IsNameCn = !1),
          $.fn.alert(
            "很抱歉，汇款户名不是正确中文名，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！",
            function () {
              openDialogZxkf();
            }
          ))
        : t == "2"
        ? $.fn.alert("很抱歉，单一会员仅限申请一个帐号！", function () {
            layerframeAddClose();
          })
        : t == "3"
        ? (fnIdCardFlag(0),
          $.fn.alert(txtNoEnter, function () {
            IsMAdd2 && fnMain();
            openDialogZxkf();
          }))
        : t == "4"
        ? fnIdCardFlag(i)
        : t == "5" && $.fn.alert("身份证号不一致，请重新验证！");
    },
  });
}
function fnIdCardInit(n) {
  IsMPage && loading();
  $.ajax({
    url: "/LoadData/AddMemberCheck.ashx",
    data: { checkType: "IdCardInit" },
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (t) {
      IsMPage && closeloading();
      t == "3"
        ? $.fn.alert(txtNoEnter, function () {
            IsMAdd2 && fnMain();
            openDialogZxkf();
          })
        : IsMPage || layerIdCard(n);
    },
  });
}
function fnIdCardFlag(n) {
  var t =
    n == 0
      ? "今日验证次数已达三次，请联系客服！"
      : "输入有误,您尚有<span>" + n + "</span>次机会,请重新输入！";
  $("#texti").html(t).addClass("red2");
}
function openDialogZxkf() {
  if (!IsMPage) {
    $("#f_isPhoneMsg1").size() > 0 || IsAdd2
      ? layerframeAddClose()
      : ($("#Map3").size() > 0 || $("#btnID").size() > 0) && fnHyzxClose();
    return;
  }
}
function alertOk(n) {
  $.fn.alert(n, function () {
    isLayer()
      ? layerframeAddClose()
      : ((window.opener = null), window.open("", "_self"), window.close());
  });
}
var IsMPage,
  IsMAdd2,
  local1 = window.location.href.toLowerCase(),
  txtNoEnter =
    "很抱歉！您的身份证号输入错误已达3次，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！";
$(function () {
  IsMPage = $(".mobileHint2").size() > 0;
  IsMAdd2 = $(".form_addID").size() > 0;
});
var Platime = 0,
  MypurseId = {
    0: { type: "T-03" },
    1: { type: "T-04" },
    3: { type: "T-06" },
    4: { type: "T-07" },
    5: { type: "T-08" },
    6: { type: "T-09" },
    7: { type: "T-11" },
    9: { type: "T-13" },
    10: { type: "T-14" },
    11: { type: "T-15" },
    12: { type: "T-16" },
    13: { type: "T-17" },
    14: { type: "T-18" },
    18: { type: "T-20" },
    21: { type: "T-23" },
    23: { type: "T-27" },
    24: { type: "T-24" },
    25: { type: "T-12" },
    27: { type: "T-29" },
    28: { type: "T-30" },
    29: { type: "T-31" },
    30: { type: "T-32" },
    31: { type: "T-33" },
    32: { type: "T-34" },
    34: { type: "T-36" },
    35: { type: "T-37" },
    36: { type: "T-38" },
    37: { type: "T-39" },
    38: { type: "T-40" },
    39: { type: "T-41" },
    40: { type: "T-42" },
    41: { type: "T-43" },
    42: { type: "T-44" },
    43: { type: "T-45" },
    44: { type: "T-46" },
    45: { type: "T-48" },
    46: { type: "T-49" },
    47: { type: "T-50" },
    48: { type: "T-47" },
    49: { type: "T-51" },
    50: { type: "T-52" },
    51: { type: "T-53" },
    52: { type: "T-54" },
    53: { type: "T-55" },
    54: { type: "T-57" },
    55: { type: "T-58" },
    56: { type: "T-59" },
    57: { type: "T-60" },
    58: { type: "T-61" },
    59: { type: "T-62" },
    60: { type: "T-63" },
    61: { type: "T-64" },
    62: { type: "T-65" },
    63: { type: "T-66" },
    66: { type: "T-69" },
    67: { type: "T-70" },
  },
  MypurseIndex = [
    { name: "mainPoints", id: 0 },
    { name: "colorPoints", id: 1 },
    { name: "agiPoints", id: 2 },
    { name: "hgPoints", id: 3 },
    { name: "agPoints", id: 4 },
    { name: "AllPoints", id: 0 },
    { name: "cnfPoints", id: 6 },
    { name: "kyPoints", id: 7 },
    { name: "ogPoints", id: 9 },
    { name: "bbinPoints", id: 10 },
    { name: "abPoints", id: 11 },
    { name: "dtPoints", id: 12 },
    { name: "ltsPoints", id: 0 },
    { name: "cmdPoints", id: 18 },
    { name: "bngPoints", id: 23 },
    { name: "kuPoints", id: 24 },
    { name: "cq9Points", id: 27 },
    { name: "vrPoints", id: 29 },
    { name: "lcPoints", id: 30 },
    { name: "pinPoints", id: 31 },
    { name: "sbPoints", id: 34 },
    { name: "nbbPoints", id: 36 },
    { name: "wmPoints", id: 40 },
    { name: "kaPoints", id: 41 },
    { name: "dgPoints", id: 42 },
    { name: "saPoints", id: 43 },
    { name: "dsPoints", id: 44 },
    { name: "smPoints", id: 47 },
    { name: "psPoints", id: 48 },
    { name: "imPoints", id: 50 },
    { name: "aesPoints", id: 52 },
    { name: "ksPoints", id: 53 },
    { name: "pgPoints", id: 54 },
    { name: "frenPoints", id: 55 },
    { name: "evoPoints", id: 56 },
    { name: "aiPoints", id: 57 },
    { name: "ftgPoints", id: 58 },
    { name: "fcPoints", id: 59 },
    { name: "obsportPoints", id: 60 },
    { name: "oblivePoints", id: 61 },
    { name: "obesportPoints", id: 62 },
    { name: "wgPoints", id: 63 },
    { name: "agvnfishPoints", id: 66 },
    { name: "obfishPoints", id: 67 },
  ],
  platformstatus = ["-1", "-3", "-53", "-54", "-55", "-56"];
var IsVoicePassNoMChg = !1,
  numIdCard = 0,
  flagIdCard = !1,
  IsNameCn = !0;
window.loading = function () {
  var n = { shade: 0.3, shadeClose: !1, time: 0, skin: "layer-loading" };
  n.skin =
    typeof CheckFormIos == "function" && CheckFormIos()
      ? "layer-loading3"
      : "layer-loading";
  layer.load(2, n);
};
window.closeloading = function () {
  layer.closeAll("loading");
};

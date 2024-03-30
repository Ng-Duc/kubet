function GetQueryStringByName(n) {
  var t = location.search.match(new RegExp("[?&]" + n + "=([^&]+)", "i"));
  return t == null || t.length < 1 ? "" : t[1];
}
function ddlPayAppend(n, t) {
  var i = $("#" + n + " .inputselect");
  i.empty();
  n !== "ddlPayout" && i.append("<option value=''>Tùy chọn</option>");
  t !== "0" && i.append("<option value='0'>Tài khoản chính</option>");
  t !== "36" && nbb1 && i.append("<option value='36'>KU Thể Thao</option>");
  t !== "24" && ku1 && i.append("<option value='24'>KU Casino</option>");
  t !== "1" && ball1 && i.append("<option value='1'>KU Xổ Số</option>");
  t !== "6" && cnf1 && i.append("<option value='6'>3D Games</option>");
  t !== "23" && bng1 && i.append("<option value='23'>BNG Games</option>");
  t !== "44" && ds1 && i.append("<option value='44'>DS Games</option>");
  t !== "53" && ks1 && i.append("<option value='53'>KS Games</option>");
  t !== "48" && ps1 && i.append("<option value='48'>RK5 Games</option>");
  t !== "54" && pg1 && i.append("<option value='54'>PG Games</option>");
  t !== "41" && ka1 && i.append("<option value='41'>KA Games</option>");
  t !== "58" && ftg1 && i.append("<option value='58'>FTG Games</option>");
  t !== "59" && fc1 && i.append("<option value='59'>FC Games</option>");
  t !== "66" && agvnfish1 && i.append("<option value='66'>AG Bắn Cá</option>");
  t !== "67" && obfish1 && i.append("<option value='67'>DB Bắn Cá</option>");
  t !== "30" && lc1 && i.append("<option value='30'>V8 Đối Kháng</option>");
  t != "18" && cmd1 && i.append("<option value='18'>CMD</option>");
  t != "34" && sb1 && i.append("<option value='34'>SABA</option>");
  t !== "57" && ai1 && i.append("<option value='57'>AI</option>");
  t != "60" &&
    obsport1 &&
    i.append("<option value='60'>PANDA Thể Thao</option>");
  t != "31" && pin1 && i.append("<option value='31'>PINNACLE</option>");
  t !== "4" && ag1 && i.append("<option value='4'>AG Casino</option>");
  t !== "10" && bbin1 && i.append("<option value='10'>BBIN Casino</option>");
  t !== "42" && dg1 && i.append("<option value='42'>DG Casino</option>");
  t !== "43" && sa1 && i.append("<option value='43'>SA Casino</option>");
  t !== "40" && wm1 && i.append("<option value='40'>WM Casino</option>");
  t !== "52" && aes1 && i.append("<option value='52'>AES Casino</option>");
  t !== "56" && evo1 && i.append("<option value='56'>EVO Casino</option>");
  t != "61" && oblive1 && i.append("<option value='61'>DB Casino</option>");
  t != "50" && im1 && i.append("<option value='50'>IM Esports</option>");
  t != "62" && obesport1 && i.append("<option value='62'>DB Esports</option>");
  t !== "47" && sm1 && i.append("<option value='47'>COOL-IN</option>");
  t !== "55" &&
    n !== "ddlPayin" &&
    fren1 &&
    $("#hiddenIshow").val() != "2" &&
    i.append("<option value='55'>Ví bạn bè</option>");
}
function payoutchange(n) {
  ddlPayAppend("ddlPayin", n);
}
function ddlPayinDefault() {
  var n, t, i;
  if (
    ((type = GetQueryStringByName("type")),
    (n = ""),
    (t = "—Tùy chọn—"),
    type != "")
  )
    switch (type) {
      case "ColorBall":
        n = "1";
        t = "KU Xổ Số";
        break;
      case "3D":
        n = "6";
        t = "3D Games";
        break;
      case "CMD":
        n = "18";
        t = "CMD Thể Thao";
    }
  i = "#ddlPayin";
  $(i + " .inputselect").val(n);
}
function RefreshBalance(n, t) {
  type === "kshz" && (myPlatfom = !0);
  $.ajax({
    url: "/LoadData/GetThirdPartyBalance.ashx",
    data:
      "id=" +
      n +
      "&type=refreshBalance&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (n) {
      var i, r, u, f, e, o;
      IsMajorF = n.IsMajorF;
      switch (n.StatusCode) {
        case "M-01":
        case "M-001":
          $.fn.alert(
            n.StatusCode == "M-01"
              ? webRes.Font_LoginOut
              : webRes.Font_KickedOut,
            function () {
              window.close();
            }
          );
          break;
        case "T-03":
          $("#lblMainMoney").text(n.MainMoney);
          break;
        case "T-04":
          getColorMoney(n.ThirdPartyMoney, n.Transfer.f_isBallOpen);
          break;
        case "T-06":
          getHgMoney(n.ThirdPartyMoney, n.Transfer.f_isHgOpen);
          break;
        case "T-07":
          getAgMoney(n.ThirdPartyMoney, n.Transfer.f_isAgOpen);
          break;
        case "T-17":
          getAgMoney(n.ThirdPartyMoney, n.Transfer.f_isFishOpen);
          break;
        case "T-23":
          getAgMoney(n.ThirdPartyMoney, n.Transfer.f_isAGSportOpen);
          break;
        case "T-09":
          getCnfMoney(n.ThirdPartyMoney, n.Transfer.f_isCNFOpen);
          break;
        case "T-34":
          getCnfMoney(n.ThirdPartyMoney, n.Transfer.f_isCNFChessOpen);
          break;
        case "T-11":
          getKYMoney(n.ThirdPartyMoney, n.Transfer.f_isKYOpen);
          break;
        case "T-37":
          getKYMoney(n.ThirdPartyMoney, n.Transfer.f_isKYFishOpen);
          break;
        case "T-13":
          getOgMoney(n.ThirdPartyMoney, n.Transfer.f_isOgOpen);
          break;
        case "T-40":
          getBBINMoney(n.ThirdPartyMoney, n.Transfer.f_isBBINBallOpen);
          break;
        case "T-14":
          getBBINMoney(n.ThirdPartyMoney, n.Transfer.f_isBBINOpen);
          break;
        case "T-15":
          getABMoney(n.ThirdPartyMoney, n.Transfer.f_isABOpen);
          break;
        case "T-16":
          getDTMoney(n.ThirdPartyMoney, n.Transfer.f_isDTOpen);
          break;
        case "T-18":
          getFish3dMoney(n.ThirdPartyMoney, n.Transfer.f_isCNFFishOpen);
          break;
        case "T-20":
          getCMDMoney(n.ThirdPartyMoney, n.Transfer.f_isCMDOpen);
          break;
        case "T-24":
          getKUMoney(n.ThirdPartyMoney, n.Transfer.f_isKUOpen);
          break;
        case "T-27":
          getBNGMoney(n.ThirdPartyMoney, n.Transfer.f_isBNGOpen);
          break;
        case "T-29":
          getCQ9Money(n.ThirdPartyMoney, n.Transfer.f_isCQ9Open);
          break;
        case "T-30":
          getCQ9Money(n.ThirdPartyMoney, n.Transfer.f_isCQ9FishOpen);
          break;
        case "T-31":
          getVRMoney(n.ThirdPartyMoney, n.Transfer.f_isVROpen);
          break;
        case "T-32":
          getLCMoney(n.ThirdPartyMoney, n.Transfer.f_isLCOpen);
          break;
        case "T-39":
          getLCMoney(n.ThirdPartyMoney, n.Transfer.f_isLCFishOpen);
          break;
        case "T-33":
          getPINMoney(n.ThirdPartyMoney, n.Transfer.f_isPINOpen);
          break;
        case "T-36":
          getSBMoney(n.ThirdPartyMoney, n.Transfer.f_isSBOpen);
          break;
        case "T-38":
          getNBBMoney(n.ThirdPartyMoney, n.Transfer.f_isNBBOpen);
          break;
        case "T-42":
          getWMMoney(n.ThirdPartyMoney, n.Transfer.f_isWMOpen);
          break;
        case "T-43":
          getKAMoney(n.ThirdPartyMoney, n.Transfer.f_isKAOpen);
          break;
        case "T-44":
          getDGMoney(n.ThirdPartyMoney, n.Transfer.f_isDGOpen);
          break;
        case "T-45":
          getSAMoney(n.ThirdPartyMoney, n.Transfer.f_isSAOpen);
          break;
        case "T-46":
          getDSMoney(n.ThirdPartyMoney, n.Transfer.f_isDSOpen);
          break;
        case "T-48":
          getKAMoney(n.ThirdPartyMoney, n.Transfer.f_isKAFishOpen);
          break;
        case "T-49":
          getDSMoney(n.ThirdPartyMoney, n.Transfer.f_isDSFishOpen);
          break;
        case "T-50":
          getSMMoney(n.ThirdPartyMoney, n.Transfer.f_isSMOpen);
          break;
        case "T-47":
          getPSMoney(n.ThirdPartyMoney, n.Transfer.f_isPSOpen);
          break;
        case "T-52":
          getIMMoney(n.ThirdPartyMoney, n.Transfer.f_isIMOpen);
          break;
        case "T-53":
          getSBMoney(n.ThirdPartyMoney, n.Transfer.f_isSBEsportOpen);
          break;
        case "T-54":
          getAESMoney(n.ThirdPartyMoney, n.Transfer.f_isAESOpen);
          break;
        case "T-55":
          getKSMoney(n.ThirdPartyMoney, n.Transfer.f_isKSOpen);
          break;
        case "T-57":
          getPGMoney(n.ThirdPartyMoney, n.Transfer.f_isPGOpen);
          break;
        case "T-58":
          getFRENMoney(n.ThirdPartyMoney, !1);
          break;
        case "T-59":
          getEVOMoney(n.ThirdPartyMoney, n.Transfer.f_isEVOOpen);
          break;
        case "T-60":
          getAIMoney(n.ThirdPartyMoney, n.Transfer.f_isAIOpen);
          break;
        case "T-61":
          getFTGMoney(n.ThirdPartyMoney, n.Transfer.f_isFTGOpen);
          break;
        case "T-62":
          getFCMoney(n.ThirdPartyMoney, n.Transfer.f_isFCOpen);
          break;
        case "T-63":
          getOBSportMoney(n.ThirdPartyMoney, n.Transfer.f_isOBSportOpen);
          break;
        case "T-64":
          getOBLiveMoney(n.ThirdPartyMoney, n.Transfer.f_isOBLiveOpen);
          break;
        case "T-65":
          getOBEsportMoney(n.ThirdPartyMoney, n.Transfer.f_isOBESportOpen);
          break;
        case "T-69":
          getAGVNFishMoney(n.ThirdPartyMoney, n.Transfer.f_isAGVNFishOpen);
          break;
        case "T-70":
          getOBFishMoney(n.ThirdPartyMoney, n.Transfer.f_isOBFishOpen);
      }
      i = $("#hiddenPayin").val();
      $("#lblMainMoney").text(n.MainMoney);
      i === "6" && typeof t != "undefined"
        ? getCnfMoney(t, n.Transfer.f_isCNFOpen)
        : i === "14" &&
          typeof t != "undefined" &&
          getFish3dMoney(t, n.Transfer.f_isCNFFishOpen);
      r = $("#lblMainMoney").text().replace(/\./g, "");
      $("#MyToMaster").size() > 0 &&
        ((u = $("#hid_ddlPayin").val()),
        (f = $("#hid_gameType").val()),
        n.StatusCode == "T-03"
          ? ((e = $("#lblMainMoney").text().replace(/\./g, "")),
            e > 0
              ? ($(".btn_transferH")
                  .removeClass("btnClose")
                  .attr("onclick", "TurnAllOut(" + i + ")"),
                $("#txtMoney").removeAttr("disabled"))
              : ($(".btn_transferH").addClass("btnClose").removeAttr("onclick"),
                $("#txtMoney").attr("disabled", "disabled")))
          : ((o = $(".platformMoney").text().replace(/\./g, "")),
            o > 0 && platTransferStat
              ? $(".btn_enter")
                  .text(webRes.Font_PurseTransfer1)
                  .removeClass("btnClose")
                  .attr("onclick", "ReturnMainPoint(" + i + ")")
              : u == webRes.Font_CNFAccounts1 && f != "3D"
              ? $(".btn_enter").removeClass("btnClose")
              : $(".btn_enter").addClass("btnClose").removeAttr("onclick"),
            r > 0 &&
              n.StatusCode === "T-09" &&
              $("#txtMoney").removeAttr("disabled").focus()),
        n.StatusCode !== "T-10" &&
          n.StatusCode !== "T-03" &&
          (n.ThirdPartyMoney.replace(/\./g, "") > 0 && platTransferStat
            ? $(".btn_enter")
                .text(webRes.Font_PurseTransfer1)
                .removeClass("btnClose")
                .attr("onclick", "ReturnMainPoint(" + i + ")")
            : $(".btn_enter").addClass("btnClose").removeAttr("onclick")));
      $("#SubDianZi").size() > 0 &&
        r > 0 &&
        n.StatusCode === "T-18" &&
        $("#txtMoney").removeAttr("disabled").focus();
      $(function () {
        isAllowInput();
      });
    },
  });
}
function UpdatePanel(n, t) {
  $.ajax({
    url: "/LoadData/MyPurse.ashx",
    data:
      "id=" +
      n +
      "&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (n) {
      var i, u, s, h, e, r, o;
      IsMajorF = n.IsMajorF;
      switch (n.StatusCode) {
        case "M-01":
        case "M-001":
          $.fn.alert(
            n.StatusCode == "M-01"
              ? webRes.Font_LoginOut
              : webRes.Font_KickedOut,
            function () {
              window.close();
            }
          );
          break;
        case "T-03":
          $("#lblMainMoney").text(n.Data);
          break;
        case "T-04":
          getColorMoney(n.Data, n.Transfer.f_isBallOpen);
          break;
        case "T-06":
          getHgMoney(n.Data, n.Transfer.f_isHgOpen);
          break;
        case "T-07":
          getAgMoney(n.Data, n.Transfer.f_isAgOpen);
          break;
        case "T-23":
          getAgMoney(n.Data, n.Transfer.f_isAGSportOpen);
          break;
        case "T-09":
          getCnfMoney(n.Data, n.Transfer.f_isCNFOpen);
          break;
        case "T-34":
          getCnfMoney(n.Data, n.Transfer.f_isCNFChessOpen);
          break;
        case "T-14":
          getBBINMoney(n.Data, n.Transfer.f_isBBINOpen);
          break;
        case "T-40":
          getBBINMoney(n.Data, n.Transfer.f_isBBINBallOpen);
          break;
        case "T-18":
          getFish3dMoney(n.Data, n.Transfer.f_isCNFFishOpen);
          break;
        case "T-20":
          getCMDMoney(n.Data, n.Transfer.f_isCMDOpen);
          break;
        case "T-24":
          getKUMoney(n.Data, n.Transfer.f_isKUOpen);
          break;
        case "T-27":
          getBNGMoney(n.Data, n.Transfer.f_isBNGOpen);
          break;
        case "T-32":
          getLCMoney(n.Data, n.Transfer.f_isLCOpen);
          break;
        case "T-33":
          getPINMoney(n.Data, n.Transfer.f_isPINOpen);
          break;
        case "T-36":
          getSBMoney(n.Data, n.Transfer.f_isSBOpen);
          break;
        case "T-38":
          getNBBMoney(n.Data, n.Transfer.f_isNBBOpen);
          break;
        case "T-42":
          getWMMoney(n.Data, n.Transfer.f_isWMOpen);
          break;
        case "T-43":
          getKAMoney(n.Data, n.Transfer.f_isKAOpen);
        case "T-44":
          getDGMoney(n.Data, n.Transfer.f_isDGOpen);
          break;
        case "T-45":
          getSAMoney(n.Data, n.Transfer.f_isSAOpen);
          break;
        case "T-46":
          getDSMoney(n.Data, n.Transfer.f_isDSOpen);
          break;
        case "T-48":
          getKAMoney(n.Data, n.Transfer.f_isKAFishOpen);
          break;
        case "T-49":
          getDSMoney(n.Data, n.Transfer.f_isDSFishOpen);
          break;
        case "T-50":
          getSMMoney(n.Data, n.Transfer.f_isSMOpen);
          break;
        case "T-47":
          getPSMoney(n.Data, n.Transfer.f_isPSOpen);
          break;
        case "T-52":
          getIMMoney(n.Data, n.Transfer.f_isIMOpen);
          break;
        case "T-53":
          getSBMoney(n.Data, n.Transfer.f_isSBEsportOpen);
          break;
        case "T-54":
          getAESMoney(n.Data, n.Transfer.f_isAESOpen);
          break;
        case "T-55":
          getKSMoney(n.Data, n.Transfer.f_isKSOpen);
          break;
        case "T-57":
          getPGMoney(n.Data, n.Transfer.f_isPGOpen);
          break;
        case "T-58":
          getFRENMoney(n.Data, !1);
          break;
        case "T-59":
          getEVOMoney(n.Data, n.Transfer.f_isEVOOpen);
          break;
        case "T-60":
          getAIMoney(n.Data, n.Transfer.f_isAIOpen);
          break;
        case "T-61":
          getFTGMoney(n.Data, n.Transfer.f_isFTGOpen);
          break;
        case "T-62":
          getFCMoney(n.Data, n.Transfer.f_isFCOpen);
          break;
        case "T-63":
          getOBSportMoney(n.Data, n.Transfer.f_isOBSportOpen);
          break;
        case "T-64":
          getOBLiveMoney(n.Data, n.Transfer.f_isOBLiveOpen);
          break;
        case "T-65":
          getOBEsportMoney(n.Data, n.Transfer.f_isOBESportOpen);
          break;
        case "T-69":
          getAGVNFishMoney(n.Data, n.Transfer.f_isAGVNFishOpen);
          break;
        case "T-70":
          getOBFishMoney(n.Data, n.Transfer.f_isOBFishOpen);
          break;
        case "T-10":
          i = n.Data.split("|");
          $("#lblMainMoney").text(i[0]);
          $(".payoutAmount").text(i[0]);
          getColorMoney(i[1], n.Transfer.f_isBallOpen);
          getAgMoney(i[4], n.Transfer.f_isAgOpen);
          getCnfMoney(i[7], n.Transfer.f_isCNFOpen);
          getBBINMoney(i[11], n.Transfer.f_isBBINOpen);
          getCMDMoney(i[15], n.Transfer.f_isCMDOpen);
          getBNGMoney(i[17], n.Transfer.f_isBNGOpen);
          getKUMoney(i[18], n.Transfer.f_isKUOpen);
          getLCMoney(i[22], n.Transfer.f_isLCOpen);
          getPINMoney(i[23], n.Transfer.f_isPINOpen);
          getSBMoney(i[24], n.Transfer.f_isSBOpen);
          getNBBMoney(i[25], n.Transfer.f_isNBBOpen);
          getWMMoney(i[26], n.Transfer.f_isWMOpen);
          getKAMoney(i[27], n.Transfer.f_isKAOpen);
          getDGMoney(i[28], n.Transfer.f_isDGOpen);
          getSAMoney(i[29], n.Transfer.f_isSAOpen);
          getDSMoney(i[30], n.Transfer.f_isDSOpen);
          getSMMoney(i[31], n.Transfer.f_isSMOpen);
          getPSMoney(i[32], n.Transfer.f_isPSOpen);
          getIMMoney(i[34], n.Transfer.f_isIMOpen);
          getAESMoney(i[35], n.Transfer.f_isAESOpen);
          getKSMoney(i[36], n.Transfer.f_isKSOpen);
          getPGMoney(i[37], n.Transfer.f_isPGOpen);
          getEVOMoney(i[38], n.Transfer.f_isEVOOpen);
          getAIMoney(i[39], n.Transfer.f_isAIOpen);
          getFTGMoney(i[40], n.Transfer.f_isFTGOpen);
          getFCMoney(i[41], n.Transfer.f_isFCOpen);
          getOBSportMoney(i[42], n.Transfer.f_isOBSportOpen);
          getOBLiveMoney(i[43], n.Transfer.f_isOBLiveOpen);
          getOBEsportMoney(i[44], n.Transfer.f_isOBESportOpen);
          getAGVNFishMoney(i[47], n.Transfer.f_isAGVNFishOpen);
          getOBFishMoney(i[48], n.Transfer.f_isOBFishOpen);
          $("#lblTotalMoney").text(i[6]);
          t && t();
      }
      if (
        ((u = $("#lblMainMoney").text().replace(/\./g, "")),
        $("#MyToMaster").size() > 0)
      ) {
        var c = $("#hid_ddlPayin").val(),
          l = $("#hid_gameType").val(),
          f = $("#hiddenPayin").val();
        n.StatusCode == "T-03"
          ? ((s = $("#lblMainMoney").text().replace(/\./g, "")),
            s > 0
              ? ($(".btn_transferH")
                  .removeClass("btnClose")
                  .attr("onclick", "TurnAllOut(" + f + ")"),
                $("#txtMoney").removeAttr("disabled"))
              : ($(".btn_transferH").addClass("btnClose").removeAttr("onclick"),
                $("#txtMoney").attr("disabled", "disabled")))
          : ((h = $(".platformMoney").text().replace(/\./g, "")),
            h > 0 && platTransferStat
              ? $(".btn_enter")
                  .text(webRes.Font_PurseTransfer1)
                  .removeClass("btnClose")
                  .attr("onclick", "ReturnMainPoint(" + f + ")")
              : c == webRes.Font_CNFAccounts1 && l != "3D"
              ? $(".btn_enter").removeClass("btnClose")
              : $(".btn_enter").addClass("btnClose").removeAttr("onclick"),
            u > 0 &&
              n.StatusCode === "T-09" &&
              $("#txtMoney").removeAttr("disabled").focus());
        n.StatusCode !== "T-10" &&
          n.StatusCode !== "T-03" &&
          (n.Data.replace(/\./g, "") > 0 && platTransferStat
            ? $(".btn_enter")
                .text(webRes.Font_PurseTransfer1)
                .removeClass("btnClose")
                .attr("onclick", "ReturnMainPoint(" + f + ")")
            : $(".btn_enter").addClass("btnClose").removeAttr("onclick"));
      }
      $("#SubDianZi").size() > 0 &&
        u > 0 &&
        n.StatusCode === "T-18" &&
        $("#txtMoney").removeAttr("disabled").focus();
      $(function () {
        isAllowInput();
      });
      e = n.Data;
      r = "";
      n.PlatStatus && n.PlatStatus != "" && (r = n.PlatStatus.split("|")[1]);
      window.location.href.toLowerCase().indexOf("mypurse") > -1 &&
        ((o = $("#hiddenMajorDomoF").val()),
        typeof o != "undefined" &&
          o.toLowerCase() == "false" &&
          r &&
          r.toLowerCase() == "false" &&
          (e = "0"));
      t && t(e);
    },
  });
}
function UpdatePanelNew(n, t) {
  $.ajax({
    url: "/LoadData/GetThirdPartyBalance.ashx",
    data:
      "id=" +
      n +
      "&type=refreshBalance&isAll=1&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (i) {
      var e, h, c, f, u, s, r, l;
      IsMajorF = i.IsMajorF;
      switch (i.StatusCode) {
        case "M-01":
        case "M-001":
          $.fn.alert(
            i.StatusCode == "M-01"
              ? webRes.Font_LoginOut
              : webRes.Font_KickedOut,
            function () {
              window.close();
            }
          );
          break;
        case "T-03":
          $("#lblMainMoney").text(i.Data);
          break;
        case "T-04":
          getColorMoney(i.Data, i.TransferStatus);
          break;
        case "T-06":
          getHgMoney(i.Data, i.TransferStatus);
          break;
        case "T-07":
          getAgMoney(i.Data, i.TransferStatus);
          break;
        case "T-23":
          getAgMoney(i.Data, i.TransferStatus);
          break;
        case "T-09":
          getCnfMoney(i.Data, i.TransferStatus);
          break;
        case "T-34":
          getCnfMoney(i.Data, i.TransferStatus);
          break;
        case "T-14":
          getBBINMoney(i.Data, i.TransferStatus);
          break;
        case "T-40":
          getBBINMoney(i.Data, i.TransferStatus);
          break;
        case "T-41":
          getBBINMoney(i.Data, i.TransferStatus);
          break;
        case "T-18":
          getFish3dMoney(i.Data, i.TransferStatus);
          break;
        case "T-20":
          getCMDMoney(i.Data, i.TransferStatus);
          break;
        case "T-24":
          getKUMoney(i.Data, i.TransferStatus);
          break;
        case "T-27":
          getBNGMoney(i.Data, i.TransferStatus);
          break;
        case "T-32":
          getLCMoney(i.Data, i.TransferStatus);
          break;
        case "T-33":
          getPINMoney(i.Data, i.TransferStatus);
          break;
        case "T-36":
          getSBMoney(i.Data, i.TransferStatus);
          break;
        case "T-38":
          getNBBMoney(i.Data, i.TransferStatus);
          break;
        case "T-42":
          getWMMoney(i.Data, i.TransferStatus);
          break;
        case "T-43":
          getKAMoney(i.Data, i.TransferStatus);
          break;
        case "T-44":
          getDGMoney(i.Data, i.TransferStatus);
          break;
        case "T-45":
          getSAMoney(i.Data, i.TransferStatus);
          break;
        case "T-46":
          getDSMoney(i.Data, i.TransferStatus);
          break;
        case "T-48":
          getKAMoney(i.Data, i.TransferStatus);
          break;
        case "T-49":
          getDSMoney(i.Data, i.TransferStatus);
          break;
        case "T-50":
          getSMMoney(i.Data, i.TransferStatus);
          break;
        case "T-47":
          getPSMoney(i.Data, i.TransferStatus);
          break;
        case "T-52":
          getIMMoney(i.Data, i.TransferStatus);
          break;
        case "T-53":
          getSBMoney(i.Data, i.TransferStatus);
          break;
        case "T-54":
          getAESMoney(i.Data, i.TransferStatus);
          break;
        case "T-55":
          getKSMoney(i.Data, i.TransferStatus);
          break;
        case "T-57":
          getPGMoney(i.Data, i.TransferStatus);
          break;
        case "T-58":
          getFRENMoney(i.Data, !1);
          break;
        case "T-59":
          getEVOMoney(i.Data, i.TransferStatus);
          break;
        case "T-60":
          getAIMoney(i.Data, i.TransferStatus);
          break;
        case "T-61":
          getFTGMoney(i.Data, i.TransferStatus);
          break;
        case "T-62":
          getFCMoney(i.Data, i.TransferStatus);
          break;
        case "T-63":
          getOBSportMoney(i.Data, i.TransferStatus);
          break;
        case "T-64":
          getOBLiveMoney(i.Data, i.TransferStatus);
          break;
        case "T-65":
          getOBEsportMoney(i.Data, i.TransferStatus);
          break;
        case "T-69":
          getAGVNFishMoney(i.Data, i.TransferStatus);
          break;
        case "T-70":
          getOBFishMoney(i.Data, i.TransferStatus);
      }
      if (
        ((e = $("#lblMainMoney").text().replace(/\./g, "")),
        $("#MyToMaster").size() > 0)
      ) {
        var a = $("#hid_ddlPayin").val(),
          v = $("#hid_gameType").val(),
          o = $("#hiddenPayin").val();
        i.StatusCode == "T-03"
          ? ((h = $("#lblMainMoney").text().replace(/\./g, "")),
            h > 0
              ? ($(".btn_transferH")
                  .removeClass("btnClose")
                  .attr("onclick", "TurnAllOut(" + o + ")"),
                $("#txtMoney").removeAttr("disabled"))
              : ($(".btn_transferH").addClass("btnClose").removeAttr("onclick"),
                $("#txtMoney").attr("disabled", "disabled")))
          : ((c = $(".platformMoney").text().replace(/\./g, "")),
            c > 0 && platTransferStat
              ? $(".btn_enter")
                  .text(webRes.Font_PurseTransfer1)
                  .removeClass("btnClose")
                  .attr("onclick", "ReturnMainPoint(" + o + ")")
              : a == webRes.Font_CNFAccounts1 && v != "3D"
              ? $(".btn_enter").removeClass("btnClose")
              : $(".btn_enter").addClass("btnClose").removeAttr("onclick"),
            e > 0 &&
              i.StatusCode === "T-09" &&
              $("#txtMoney").removeAttr("disabled").focus());
        i.StatusCode !== "T-10" &&
          i.StatusCode !== "T-03" &&
          (i.Data.replace(/\./g, "") > 0 && platTransferStat
            ? $(".btn_enter")
                .text(webRes.Font_PurseTransfer1)
                .removeClass("btnClose")
                .attr("onclick", "ReturnMainPoint(" + o + ")")
            : $(".btn_enter").addClass("btnClose").removeAttr("onclick"));
      }
      $("#SubDianZi").size() > 0 &&
        e > 0 &&
        i.StatusCode === "T-18" &&
        $("#txtMoney").removeAttr("disabled").focus();
      $(function () {
        isAllowInput();
      });
      f = i.Data;
      u = "";
      i.PlatStatus && i.PlatStatus != "" && (u = i.PlatStatus.split("|")[1]);
      window.location.href.toLowerCase().indexOf("mypurse") > -1 &&
        ((s = $("#hiddenMajorDomoF").val()),
        typeof s != "undefined" &&
          (s.toLowerCase() == "false" &&
            u &&
            u.toLowerCase() == "false" &&
            (f = "0"),
          i.StatusCode == "T-58" &&
            u &&
            u.toLowerCase() == "false" &&
            (f = "0")));
      r = i.Data;
      l = ["-3", "-53", "-54", "-55", "-56"];
      (n == "T-09" || n == "T-18" || n == "T-34") &&
        l.indexOf(r) >= 0 &&
        ((f = 0),
        (r =
          r == "-53"
            ? webRes.Font_Pleacewait
            : r == "-54"
            ? webRes.Font_Loading
            : r == "-56"
            ? webRes.Font_Maintain
            : webRes.Font_Busy),
        $("#goPlatfom").length &&
          $("#goPlatfom").addClass("btnClose").removeAttr("onclick"));
      t && t(f, r);
    },
  });
}
function SendOut(n) {
  var r, i, t, u, f;
  if (flag) return !1;
  if (
    ((r =
      n == 2 || n == 3 || n == 4
        ? $("#ddlPayinto .inputselect").val()
        : $("#ddlPayin .inputselect").val()),
    r === "")
  )
    return $.fn.alert("Xin vui lòng chọn tài khoản nhận điểm！"), !1;
  if (
    ((i = n == 2 || n == 3 || n == 4 ? 0 : $("#ddlPayout .inputselect").val()),
    (t = $("#txtMoney").val()),
    (u = /^\d+$/),
    t === "")
  )
    return $("#txtMoney").alert("Hãy nhập số điểm！"), !1;
  if (isNaN(t))
    return (
      $("#txtMoney").alert("Số tiền nhất thiết phải là số nguyên", function () {
        $("#txtMoney").val("").focus();
        submitBtn.addClass("disabled");
        submitBtn.attr("onclick", "javascript:void(0)");
      }),
      !1
    );
  if (u.test(t)) {
    if (
      i == 0 &&
      ((f = $("#lblMainMoney").text().replace(/\./g, "")),
      parseFloat(f) < parseFloat(t))
    ) {
      $.fn.alert(webRes.Font_Mypurse_msg5, function () {
        $("#txtMoney").val("").focus();
        submitBtn.addClass("disabled");
        submitBtn.attr("onclick", "javascript:void(0)");
        $(".btn_ingame")
          .addClass("btnClose")
          .attr("onclick", "")
          .unbind("click");
      });
      return;
    }
    if (checkPlatBalance(i, t)) return;
    $.fn.loading();
    flag = !0;
    $.ajax({
      url: "/LoadData/MyPurse.ashx",
      data:
        "id=T-01&Money=" +
        t +
        "&ddlPayout=" +
        i +
        "&ddlPayin=" +
        r +
        "&sParam=" +
        $("#hid_param").val() +
        "&gameStyle=" +
        $("#hid_gameStyle").val(),
      type: "post",
      dataType: "Json",
      cache: !1,
      timeout: 3e4,
      error: function () {
        $.fn.alert("Yêu cầu bất thường,vui lòng thử lại sau！");
        $.fn.closeloading();
        flag = !1;
      },
      success: function (t) {
        var u = 0;
        (r == 48 || i == 48) && (u = 1e3);
        setTimeout(function () {
          $.fn.closeloading();
          $("#hid_isNBB_New").val() == "1" &&
            (t.StatusCode == "M-00" || t.StatusCode == "M-22a") &&
            (t.Message = t.Message.replace(
              webRes.Font_NBBAccounts,
              webRes.Font_NBB_New
            ));
          TransferAlert(n, t, i, r);
          $("#txtMoney").val("");
          submitBtn.addClass("disabled");
          submitBtn.attr("onclick", "javascript:void(0)");
          $(".btn_ingame").hasClass("btnClose") ||
            $(".btn_ingame").addClass("btnClose").removeAttr("onclick");
          flag = !1;
        }, u);
      },
    });
  } else
    return $("#txtMoney").alert("Số tiền nhất thiết phải là số nguyên"), !1;
}
function ReturnMainPoint(n) {
  if (flagRec) return !1;
  $.fn.loading();
  flagRec = !0;
  $.ajax({
    url: "/LoadData/MyPurse.ashx",
    data:
      "id=R-01&ddlPayout=" +
      n +
      "&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {
      $.fn.alert("Yêu cầu bất thường,vui lòng thử lại sau！");
      $.fn.closeloading();
      flagRec = !1;
    },
    success: function (t) {
      var i = 0;
      n == 48 && (i = 1e3);
      setTimeout(function () {
        $.fn.closeloading();
        TransferAlert(0, t, n);
        $("#txtMoney").val("");
        submitBtn.addClass("disabled");
        submitBtn.attr("onclick", "javascript:void(0)");
        $(".btn_ingame").hasClass("btnClose") ||
          $(".btn_ingame").addClass("btnClose").removeAttr("onclick");
        flagRec = !1;
      }, i);
    },
  });
}
function TurnAllOut(n) {
  if (flagTurnAll) return !1;
  flagTurnAll = !0;
  $.fn.loading();
  $.ajax({
    url: "/LoadData/MyPurse.ashx",
    data:
      "id=All-01&ddlPayin=" +
      n +
      "&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {
      $.fn.alert("Yêu cầu bất thường,vui lòng thử lại sau！");
      $.fn.closeloading();
      flagTurnAll = !1;
    },
    success: function (n) {
      $.fn.closeloading();
      $("#hid_isNBB_New").val() == "1" &&
        (n.StatusCode == "M-00" || n.StatusCode == "M-22a") &&
        (n.Message = n.Message.replace(
          webRes.Font_NBBAccounts,
          webRes.Font_NBB_New
        ));
      TransferAlert(2, n);
      $("#txtMoney").val("");
      submitBtn.addClass("disabled");
      submitBtn.attr("onclick", "javascript:void(0)");
      $(".btn_ingame").hasClass("btnClose") ||
        $(".btn_ingame").addClass("btnClose").removeAttr("onclick");
      flagTurnAll = !1;
    },
  });
}
function postToOpener() {
  window.opener.postMessage(
    JSON.stringify({ event: "refreshHome" }),
    location.origin
  );
}
function TransferAlert(n, t, i, r) {
  var u = $("#hid_acction").val(),
    e,
    h,
    o,
    f,
    s;
  switch (t.StatusCode) {
    case "M-00":
    case "M-22":
      e = t.StatusCode == "M-00" ? t.Message : webRes.Font_MypurseNotOpen;
      $.fn.alert(e, function () {
        if (location.pathname === "/Aspx/Mypurse.aspx")
          e.indexOf(webRes.Font_MypurseNotOpen) > -1
            ? (postToOpener(), window.close())
            : location.reload();
        else {
          var n = payinSignList.includes($("#hid_payinSign").val())
            ? $("#hid_payinSign").val()
            : "";
          if (u == "A")
            switch (n) {
              case "SB":
              case "PIN":
              case "BNG":
              case "3D1":
              case "3D":
              case "CQ9":
              case "DT":
              case "VR1":
              case "KY":
              case "AB":
              case "AG":
              case "LC":
              case "AG1":
              case "KU":
              case "NBB":
              case "NBB_new":
              case "WM":
              case "KA":
              case "DG":
              case "SA":
              case "DS":
              case "SM":
              case "PS":
              case "IM":
              case "AES":
              case "KS":
              case "PG":
              case "EVO":
              case "AI":
              case "FTG":
              case "OBSport":
              case "OBLive":
              case "OBEsport":
              case "ColorBall":
              case "FC":
              case "OBFish":
                e.indexOf(webRes.Font_MypurseNotOpen) > -1
                  ? location.reload()
                  : parent.window.close();
                break;
              default:
                location.reload();
            }
          else u == "B" && (parent.location.href = "/index.aspx");
        }
      });
      break;
    case "M-01":
    case "M-001":
      $.fn.alert(
        t.StatusCode == "M-01" ? webRes.Font_LoginOut : webRes.Font_KickedOut,
        function () {
          u == "A" || u == "B"
            ? location.reload()
            : (location.href = "/index.aspx");
        }
      );
      break;
    case "M-0001":
      $.fn.confirm(
        webRes.Font_AccountLocked,
        function () {
          if (u == "B") parent.End();
          else {
            var n = payinSignList.includes($("#hid_payinSign").val())
              ? $("#hid_payinSign").val()
              : "";
            fnBack(window.location.pathname + "?logout=1&type=" + n);
          }
          openService("/Aspx/Kfzx.aspx");
        },
        function () {
          if (u == "B") parent.End();
          else {
            var n = payinSignList.includes($("#hid_payinSign").val())
              ? $("#hid_payinSign").val()
              : "";
            fnBack(window.location.pathname + "?logout=1&type=" + n);
          }
        },
        webRes.Font_Info,
        webRes.Font_Czzq_14,
        IsYn ? webRes.Font_Cancel : webRes.Font_closeComfirmationBtn
      );
      break;
    case "M-02":
      $.fn.alert(
        "Giao dịch chuyển điểm hiện tại đang đóng, xin hãy sử dụng sau！"
      );
      break;
    case "M-03":
      $.fn.alert(
        "Tài khoản đang tiến hành trò chơi,không thể sử dụng chức năng này！！！"
      );
      break;
    case "M-04":
      $.cookie("refreshAllBalance", "1", { path: "/" });
      $.fn.alert("Số dư có thể chuyển của bạn là 0！！！");
      break;
    case "M-05":
      $.fn.alert("Số dư của bạn không đủ！");
      break;
    case "M-06":
      $.fn.alert("Quy cách số tiền không đúng！");
      break;
    case "M-08":
      if (n == 2 || n == 3 || n == 4)
        if ($("#goPlatfom").size() > 0)
          u
            ? (parent
                .$("#layui-layer" + parent.layer.getFrameIndex(window.name))
                .hide(),
              parent.$.fn.success(
                "Chuyển điểm thành công",
                function () {
                  OPennew();
                },
                1e3,
                220
              ))
            : $.fn.alert("Chuyển điểm thành công！", function () {
                OPennew();
              });
        else if (u)
          try {
            h = parent.layer;
            o = $("#hiddenPayin").val();
            parent
              .$("#layui-layer" + parent.layer.getFrameIndex(window.name))
              .hide();
            parent.$.fn.success(
              "Chuyển điểm thành công",
              function () {
                var n = o,
                  i;
                n === "6" || n === "14"
                  ? RefreshBalance("T-03", t.Data)
                  : RefreshBalance(MypurseId[n].type);
                (n == "6" || n == "14") &&
                  ((i = t.Data.replace(/\./g, "")),
                  $("#MyToMaster").size() > 0 &&
                    (i > 0
                      ? $(".btn_enter")
                          .text(webRes.Font_PurseTransfer1)
                          .removeClass("btnClose")
                          .attr("onclick", "ReturnMainPoint(" + n + ")")
                      : $(".btn_enter")
                          .addClass("btnClose")
                          .removeAttr("onclick")));
              },
              1e3,
              220
            );
          } catch (c) {
            $.fn.success(
              "Chuyển điểm thành công",
              function () {
                var n = $("#hiddenPayin").val(),
                  i;
                n === "6" || n === "14"
                  ? RefreshBalance("T-03", t.Data)
                  : RefreshBalance(MypurseId[n].type);
                (n == "6" || n == "14") &&
                  ((i = t.Data.replace(/\./g, "")),
                  $("#MyToMaster").size() > 0 &&
                    (i > 0
                      ? $(".btn_enter")
                          .text(webRes.Font_PurseTransfer1)
                          .removeClass("btnClose")
                          .attr("onclick", "ReturnMainPoint(" + n + ")")
                      : $(".btn_enter")
                          .addClass("btnClose")
                          .removeAttr("onclick")));
              },
              1e3,
              220
            );
          }
        else
          $.fn.alert("Chuyển điểm thành công！", function () {
            var n = $("#hiddenPayin").val(),
              i;
            n === "6" || n === "14"
              ? RefreshBalance("T-03", t.Data)
              : RefreshBalance(MypurseId[n].type);
            (n == "6" || n == "14") &&
              ((i = t.Data.replace(/\./g, "")),
              $("#MyToMaster").size() > 0 &&
                (i > 0
                  ? $(".btn_enter")
                      .text(webRes.Font_PurseTransfer1)
                      .removeClass("btnClose")
                      .attr("onclick", "ReturnMainPoint(" + n + ")")
                  : $(".btn_enter")
                      .addClass("btnClose")
                      .removeAttr("onclick")));
          });
      else if ($("#MyCBToMaster").size() > 0 || $("#MyToMaster").size() > 0)
        if (u)
          try {
            h = parent.layer;
            o = $("#hiddenPayin").val();
            $.cookie("refreshAllBalance", "1", { path: "/" });
            parent
              .$("#layui-layer" + parent.layer.getFrameIndex(window.name))
              .hide();
            parent.$.fn.success(
              "Chuyển điểm thành công！",
              function () {
                var n = o,
                  t;
                RefreshBalance(MypurseId[n].type);
                (n == "6" || n == "14") &&
                  ((t = $(".platformMoney").text().replace(/\./g, "")),
                  $("#MyToMaster").size() > 0 &&
                    (t > 0
                      ? $(".btn_enter")
                          .text(webRes.Font_PurseTransfer1)
                          .removeClass("btnClose")
                          .attr("onclick", "ReturnMainPoint(" + n + ")")
                      : $(".btn_enter")
                          .addClass("btnClose")
                          .removeAttr("onclick")));
              },
              1e3,
              220
            );
          } catch (c) {
            $.fn.success(
              "Chuyển điểm thành công！",
              function () {
                var n = $("#hiddenPayin").val(),
                  t;
                RefreshBalance(MypurseId[n].type);
                (n == "6" || n == "14") &&
                  ((t = $(".platformMoney").text().replace(/\./g, "")),
                  $("#MyToMaster").size() > 0 &&
                    (t > 0
                      ? $(".btn_enter")
                          .text(webRes.Font_PurseTransfer1)
                          .removeClass("btnClose")
                          .attr("onclick", "ReturnMainPoint(" + n + ")")
                      : $(".btn_enter")
                          .addClass("btnClose")
                          .removeAttr("onclick")));
              },
              1e3,
              220
            );
          }
        else
          $.fn.alert("Chuyển điểm thành công！", function () {
            var n = $("#hiddenPayin").val(),
              t;
            RefreshBalance(MypurseId[n].type);
            (n == "6" || n == "14") &&
              ((t = $(".platformMoney").text().replace(/\./g, "")),
              $("#MyToMaster").size() > 0 &&
                (t > 0
                  ? $(".btn_enter")
                      .text(webRes.Font_PurseTransfer1)
                      .removeClass("btnClose")
                      .attr("onclick", "ReturnMainPoint(" + n + ")")
                  : $(".btn_enter")
                      .addClass("btnClose")
                      .removeAttr("onclick")));
          });
      else
        u
          ? $.fn.success(
              "Chuyển điểm thành công",
              function () {
                var n, t;
                i != null && location.pathname.indexOf("Djzx") == -1
                  ? (fnCombo("ddlPayout select", function (n) {
                      payoutchange(n);
                      fnCombo("ddlPayin select");
                    }),
                    $("#ddlPayout .payoutAmount").text(
                      $("#lblMainMoney").text()
                    ),
                    fnCombo("ddlPayin select"),
                    $("#ddlPayin .payinAmount").text(""),
                    i != 0 &&
                      ((n = MypurseId[i].type),
                      $("#" + MypurseType[n].id).text("loading.."),
                      UpdatePanelNew(n)),
                    r != null &&
                      r != 0 &&
                      ((t = MypurseId[r].type),
                      $("#" + MypurseType[t].id).text("loading.."),
                      UpdatePanelNew(t)),
                    (i == 0 || r == null || r == 0) &&
                      ($(".payoutAmount, #lblMainMoney").text("loading.."),
                      UpdatePanelNew("T-03", function (n, t) {
                        $("#ddlPayout .payoutAmount").text(t);
                      })))
                  : location.reload();
              },
              1e3,
              220
            )
          : ($.cookie("refreshAllBalance", "1", { path: "/" }),
            $.fn.alert("Chuyển điểm thành công！", function () {
              var n, t;
              i != null &&
              location.pathname.indexOf("Djzx") == -1 &&
              location.pathname.indexOf("index") == -1
                ? (fnCombo("ddlPayout select", function (n) {
                    payoutchange(n);
                    fnCombo("ddlPayin select");
                  }),
                  $("#ddlPayout .payoutAmount").text($("#lblMainMoney").text()),
                  fnCombo("ddlPayin select"),
                  $("#ddlPayin .payinAmount").text(""),
                  i != 0 &&
                    ((n = MypurseId[i].type),
                    $("#" + MypurseType[n].id).text("loading.."),
                    UpdatePanelNew(n)),
                  r != null &&
                    r != 0 &&
                    ((t = MypurseId[r].type),
                    $("#" + MypurseType[t].id).text("loading.."),
                    UpdatePanelNew(t)),
                  (i == 0 || r == null || r == 0) &&
                    ($(".payoutAmount, #lblMainMoney").text("loading.."),
                    UpdatePanelNew("T-03", function (n, t) {
                      $("#ddlPayout .payoutAmount").text(t);
                    })))
                : location.reload();
            }));
      break;
    case "M-11":
      $.fn.alert(
        "Khu giải trí HG và điện tử chuyển đổi điểm thất bại, xin thử lại 1 lần nữa！"
      );
      break;
    case "M-12":
      $.fn.alert("《KU Xổ Số》và khu giải trí HG chuyển đổi điểm thất bại");
      break;
    case "M-13":
      $.fn.alert(
        "Tài khoản chính JIUZHOU và khu giải trí HG chuyển đổi điểm thất bại, xin thử lại 1 lần nữa！"
      );
      break;
    case "M-14":
      $.fn.alert("Giao dịch thất bại, vui lòng liên hệ Hỗ trợ！");
      break;
    case "M-15":
      $.fn.alert("Hệ thống đang bận, vui lòng chờ！", function () {
        if (u == "A" || u == "B") {
          $(".platformMoney").size() &&
            $(".platformMoney").css("color", "green").text("loading..");
          var n = $("#hiddenPayin").val();
          RefreshBalance(MypurseId[n].type);
        }
      });
      break;
    case "M-20":
      $.fn.alert("Thao tác thường xuyên, hãy thử lại sau！", function () {
        $("#txtMoney").focus();
      });
      break;
    case "M-22a":
      $.fn.alert(t.Message, function () {
        if (location.pathname === "/Aspx/Mypurse.aspx")
          location.href = location.href;
        else if (
          t.Message.indexOf(webRes.Font_TransferMaintenanceMsg2.slice(-40)) > -1
        )
          location.reload();
        else
          switch (u) {
            case "A":
              location.reload();
              break;
            case "B":
              window.top.postMessage(
                JSON.stringify({ event: "refreshHome" }),
                location.origin
              );
              parent.layer.close(parent.layer.getFrameIndex(window.name));
          }
      });
      break;
    case "M-23":
      $.fn.alert(
        "Số điểm chuyển thấp hơn hạn mức,<br/>vui lòng chuyển từ 5 điểm trở lên!"
      );
      break;
    case "M-36":
      $.fn.alert("Chuyển điểm thất bại, vui lòng thao tác lại", function () {
        if (location.href.indexOf("MypursePlatfom") > -1) {
          $(".platformMoney").size() &&
            $(".platformMoney").css("color", "green").text("loading..");
          var n = $("#hiddenPayin").val();
          RefreshBalance(MypurseId[n].type);
        }
      });
      break;
    case "M-34":
      $.fn.alert("Trang test không hỗ trợ giao diện《AG CASINO》để thao tác！");
      break;
    case "M-09":
    case "M-16":
    case "M-17":
    case "M-19":
    case "M-42":
    case "M-43":
    case "M-46":
    case "M-48":
    case "M-73":
    case "M-109":
    case "M-148":
    case "M-177":
    case "M-336":
    case "M-438":
    case "M-37":
    case "M-39":
    case "M-40":
    case "M-66":
    case "M-67":
    case "M-69":
    case "M-70":
    case "M-72":
    case "M-75":
    case "M-102":
    case "M-103":
    case "M-106":
    case "M-108":
    case "M-111":
    case "M-114":
    case "M-139":
    case "M-141":
    case "M-142":
    case "M-144":
    case "M-145":
    case "M-147":
    case "M-150":
    case "M-151":
    case "M-152":
    case "M-170":
    case "M-171":
    case "M-173":
    case "M-174":
    case "M-176":
    case "M-178":
    case "M-179":
    case "M-180":
    case "M-183":
    case "M-280":
    case "M-281":
    case "M-282":
    case "M-284":
    case "M-286":
    case "M-287":
    case "M-288":
    case "M-289":
    case "M-292":
    case "M-293":
    case "M-294":
    case "M-296":
    case "M-297":
    case "M-299":
    case "M-300":
    case "M-301":
    case "M-302":
    case "M-303":
    case "M-304":
    case "M-306":
    case "M-308":
    case "M-309":
    case "M-310":
    case "M-311":
    case "M-314":
    case "M-315":
    case "M-316":
    case "M-318":
    case "M-319":
    case "M-321":
    case "M-322":
    case "M-323":
    case "M-324":
    case "M-325":
    case "M-326":
    case "M-328":
    case "M-331":
    case "M-338":
    case "M-340":
    case "M-341":
    case "M-345":
    case "M-347":
    case "M-348":
    case "M-349":
    case "M-350":
    case "M-352":
    case "M-354":
    case "M-355":
    case "M-356":
    case "M-357":
    case "M-360":
    case "M-361":
    case "M-362":
    case "M-364":
    case "M-365":
    case "M-367":
    case "M-368":
    case "M-369":
    case "M-370":
    case "M-371":
    case "M-372":
    case "M-373":
    case "M-374":
    case "M-375":
    case "M-377":
    case "M-379":
    case "M-380":
    case "M-381":
    case "M-382":
    case "M-385":
    case "M-386":
    case "M-387":
    case "M-389":
    case "M-390":
    case "M-392":
    case "M-393":
    case "M-394":
    case "M-395":
    case "M-396":
    case "M-397":
    case "M-398":
    case "M-399":
    case "M-400":
    case "M-401":
    case "M-403":
    case "M-405":
    case "M-406":
    case "M-407":
    case "M-408":
    case "M-411":
    case "M-412":
    case "M-413":
    case "M-415":
    case "M-416":
    case "M-418":
    case "M-419":
    case "M-420":
    case "M-421":
    case "M-422":
    case "M-423":
    case "M-424":
    case "M-425":
    case "M-426":
    case "M-427":
    case "M-428":
    case "M-430":
    case "M-432":
    case "M-433":
    case "M-434":
    case "M-435":
    case "M-439":
    case "M-440":
    case "M-442":
    case "M-443":
    case "M-445":
    case "M-446":
    case "M-447":
    case "M-448":
    case "M-449":
    case "M-450":
    case "M-451":
    case "M-452":
    case "M-453":
    case "M-454":
    case "M-455":
    case "M-456":
    case "M-458":
    case "M-460":
    case "M-461":
    case "M-462":
    case "M-463":
    case "M-466":
    case "M-467":
    case "M-468":
    case "M-469":
    case "M-470":
    case "M-472":
    case "M-473":
    case "M-474":
    case "M-475":
    case "M-476":
    case "M-477":
    case "M-478":
    case "M-479":
    case "M-480":
    case "M-481":
    case "M-482":
    case "M-483":
    case "M-484":
    case "M-486":
    case "M-488":
    case "M-489":
    case "M-490":
    case "M-491":
    case "M-494":
    case "M-495":
    case "M-496":
    case "M-497":
    case "M-498":
    case "M-500":
    case "M-501":
    case "M-502":
    case "M-503":
    case "M-504":
    case "M-505":
    case "M-506":
    case "M-507":
    case "M-508":
    case "M-509":
    case "M-510":
    case "M-511":
    case "M-512":
    case "M-513":
    case "M-515":
    case "M-517":
    case "M-518":
    case "M-519":
    case "M-520":
    case "M-523":
    case "M-524":
    case "M-525":
    case "M-526":
    case "M-527":
    case "M-529":
    case "M-530":
    case "M-531":
    case "M-532":
    case "M-533":
    case "M-534":
    case "M-535":
    case "M-536":
    case "M-537":
    case "M-538":
    case "M-539":
    case "M-540":
    case "M-541":
    case "M-542":
    case "M-543":
    case "M-545":
    case "M-547":
    case "M-548":
    case "M-549":
    case "M-550":
    case "M-553":
    case "M-554":
    case "M-555":
    case "M-556":
    case "M-557":
    case "M-559":
    case "M-560":
    case "M-561":
    case "M-562":
    case "M-563":
    case "M-564":
    case "M-565":
    case "M-566":
    case "M-567":
    case "M-568":
    case "M-569":
    case "M-570":
    case "M-571":
    case "M-572":
    case "M-573":
    case "M-574":
    case "M-576":
    case "M-578":
    case "M-579":
    case "M-580":
    case "M-581":
    case "M-584":
    case "M-585":
    case "M-586":
    case "M-587":
    case "M-588":
    case "M-590":
    case "M-591":
    case "M-592":
    case "M-593":
    case "M-594":
    case "M-595":
    case "M-596":
    case "M-597":
    case "M-598":
    case "M-599":
    case "M-600":
    case "M-601":
    case "M-602":
    case "M-603":
    case "M-604":
    case "M-605":
    case "M-606":
    case "M-608":
    case "M-609":
    case "M-610":
    case "M-611":
    case "M-612":
    case "M-614":
    case "M-615":
    case "M-616":
    case "M-617":
    case "M-618":
    case "M-620":
    case "M-621":
    case "M-622":
    case "M-623":
    case "M-624":
    case "M-625":
    case "M-626":
    case "M-627":
    case "M-628":
    case "M-629":
    case "M-630":
    case "M-631":
    case "M-632":
    case "M-633":
    case "M-634":
    case "M-635":
    case "M-636":
    case "M-637":
    case "M-639":
    case "M-640":
    case "M-641":
    case "M-642":
    case "M-643":
    case "M-645":
    case "M-646":
    case "M-647":
    case "M-648":
    case "M-649":
    case "M-651":
    case "M-652":
    case "M-653":
    case "M-654":
    case "M-655":
    case "M-656":
    case "M-657":
    case "M-658":
    case "M-659":
    case "M-660":
    case "M-661":
    case "M-662":
    case "M-663":
    case "M-664":
    case "M-665":
    case "M-666":
    case "M-667":
    case "M-668":
    case "M-669":
    case "M-671":
    case "M-672":
    case "M-673":
    case "M-674":
    case "M-675":
    case "M-677":
    case "M-678":
    case "M-679":
    case "M-680":
    case "M-681":
    case "M-683":
    case "M-684":
    case "M-685":
    case "M-686":
    case "M-687":
    case "M-688":
    case "M-689":
    case "M-690":
    case "M-691":
    case "M-692":
    case "M-693":
    case "M-694":
    case "M-695":
    case "M-696":
    case "M-697":
    case "M-698":
    case "M-699":
    case "M-700":
    case "M-701":
    case "M-702":
    case "M-704":
    case "M-705":
    case "M-706":
    case "M-707":
    case "M-708":
    case "M-709":
    case "M-711":
    case "M-712":
    case "M-713":
    case "M-715":
    case "M-716":
    case "M-718":
    case "M-719":
    case "M-720":
    case "M-721":
    case "M-722":
    case "M-723":
    case "M-724":
    case "M-725":
    case "M-726":
    case "M-727":
    case "M-728":
    case "M-729":
    case "M-730":
    case "M-731":
    case "M-732":
    case "M-733":
    case "M-734":
    case "M-735":
    case "M-737":
    case "M-738":
    case "M-739":
    case "M-740":
    case "M-741":
    case "M-743":
    case "M-744":
    case "M-745":
    case "M-746":
    case "M-747":
    case "M-749":
    case "M-750":
    case "M-751":
    case "M-752":
    case "M-753":
    case "M-754":
    case "M-755":
    case "M-756":
    case "M-757":
    case "M-758":
    case "M-759":
    case "M-760":
    case "M-761":
    case "M-762":
    case "M-763":
    case "M-764":
    case "M-765":
    case "M-766":
    case "M-767":
    case "M-768":
    case "M-769":
    case "M-770":
    case "M-772":
    case "M-773":
    case "M-774":
    case "M-775":
    case "M-776":
    case "M-778":
    case "M-779":
    case "M-780":
    case "M-781":
    case "M-782":
    case "M-783":
    case "M-784":
    case "M-785":
    case "M-786":
    case "M-787":
    case "M-788":
    case "M-789":
    case "M-790":
    case "M-791":
    case "M-792":
    case "M-793":
    case "M-794":
    case "M-795":
    case "M-796":
    case "M-797":
    case "M-798":
    case "M-799":
    case "M-800":
    case "M-801":
    case "M-802":
    case "M-804":
    case "M-805":
    case "M-806":
    case "M-808":
    case "M-809":
    case "M-810":
    case "M-811":
    case "M-812":
    case "M-814":
    case "M-815":
    case "M-816":
    case "M-817":
    case "M-818":
    case "M-820":
    case "M-821":
    case "M-822":
    case "M-823":
    case "M-824":
    case "M-825":
    case "M-826":
    case "M-827":
    case "M-828":
    case "M-829":
    case "M-830":
    case "M-831":
    case "M-832":
    case "M-833":
    case "M-834":
    case "M-835":
    case "M-836":
    case "M-837":
    case "M-837":
    case "M-839":
    case "M-840":
    case "M-841":
    case "M-842":
    case "M-843":
    case "M-844":
    case "M-845":
    case "M-846":
    case "M-847":
    case "M-848":
    case "M-849":
    case "M-850":
    case "M-851":
    case "M-852":
    case "M-853":
    case "M-854":
    case "M-855":
    case "M-856":
    case "M-857":
    case "M-858":
    case "M-859":
    case "M-860":
    case "M-861":
    case "M-862":
    case "M-863":
    case "M-864":
    case "M-865":
    case "M-866":
    case "M-867":
    case "M-868":
    case "M-869":
    case "M-870":
    case "M-871":
    case "M-872":
    case "M-873":
    case "M-874":
    case "M-875":
    case "M-876":
    case "M-877":
    case "M-878":
    case "M-879":
    case "M-880":
    case "M-881":
    case "M-882":
      $.fn.alert("Chuyển điểm thất bại");
      break;
    case "M_msg1":
      $.fn.alert("Chức năng này , đã bị đóng , xin lựa chọn tài khoản khác！");
      break;
    default:
      t.StatusCode.indexOf("|") > -1 &&
        ((s = t.StatusCode.split("|")),
        (f = s[0]),
        (t.StatusCode = s[1]),
        (f.indexOf("-888") > -1 || f.indexOf("-999") > -1) &&
          t.StatusCode == webRes.Font_Mypurse_HG_msg32 &&
          (t.StatusCode = webRes.Font_Mypurse_msg46));
      $.fn.alert(t.StatusCode, function () {
        var r = window.location.href.toLowerCase(),
          e,
          i;
        t.StatusCode == webRes.Font_Mypurse_HG_msg32 &&
        $(".popup_bg").size() > 0
          ? ($("#txtMoney").val(""),
            submitBtn.addClass("disabled"),
            submitBtn.attr("onclick", "javascript:void(0)"),
            $(".btn_ingame")
              .addClass("btnClose")
              .attr("onclick", "")
              .unbind("click"))
          : (t.StatusCode == webRes.Font_Mypurse_HG_msg55 &&
              (f == "4401" || f == "4421" || f == "4442")) ||
            ((u == "A" || u == "B") &&
            t.StatusCode == webRes.Font_Mypurse_HG_msg55 &&
            r.indexOf("m_mypurseplatfom") > -1
              ? location.reload()
              : r.indexOf("mypurse.aspx") > -1 &&
                t.StatusCode == webRes.Font_Mypurse_HG_msg55
              ? location.reload()
              : (n == 2 || n == 3) &&
                t.StatusCode == webRes.Font_Mypurse_HG_msg55
              ? ($("#txtMoney").focus(),
                f == "55" || f.indexOf("-888") > -1 || f.indexOf("-999") > -1
                  ? ((e =
                      f.indexOf("-888") > -1
                        ? webRes.Font_Busy
                        : webRes.Font_Loading),
                    $(".platformMoney").size() &&
                      $(".platformMoney").css("color", "red").text(e),
                    $("#goPlatfom").length &&
                      $("#goPlatfom")
                        .addClass("btnClose")
                        .removeAttr("onclick"))
                  : ($(".platformMoney").size() &&
                      $(".platformMoney")
                        .css("color", "green")
                        .text("loading.."),
                    (i = $("#hiddenPayin").val()),
                    RefreshBalance(MypurseId[i].type)))
              : t.StatusCode == webRes.Font_Mypurse_msg46 &&
                f != "4443" &&
                f != "4446" &&
                location.href.indexOf("MypursePlatfom") > -1 &&
                ($(".platformMoney").size() &&
                  $(".platformMoney").css("color", "green").text("loading.."),
                (i = $("#hiddenPayin").val()),
                RefreshBalance(MypurseId[i].type)));
      });
  }
}
function WReturnPoint() {
  $.fn.loading();
  $.ajax({
    url: "/LoadData/MyPurse.ashx",
    data:
      "id=T-02&sParam=" +
      $("#hid_param").val() +
      "&gameStyle=" +
      $("#hid_gameStyle").val(),
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {
      $.fn.alert("Yêu cầu bất thường,vui lòng thử lại sau！");
      $.fn.closeloading();
    },
    success: function (n) {
      var t = 0,
        i = parseInt($("#lblPS").html());
      isNaN(i) || i == 0 || (t = 1e3);
      setTimeout(function () {
        $.fn.closeloading();
        var t = $("#hid_acction").val();
        switch (n.StatusCode) {
          case "M-01":
          case "M-001":
            $.fn.alert(
              n.StatusCode == "M-01"
                ? webRes.Font_LoginOut
                : webRes.Font_KickedOut,
              function () {
                t == "A" || t == "B"
                  ? (parent.location.href = "/index.aspx")
                  : (location.href = "/index.aspx");
              }
            );
            break;
          case "M-0001":
            $.fn.confirm(
              webRes.Font_AccountLocked,
              function () {
                if (t == "B") parent.End();
                else {
                  var n = payinSignList.includes($("#hid_payinSign").val())
                    ? $("#hid_payinSign").val()
                    : "";
                  fnBack(window.location.pathname + "?logout=1&type=" + n);
                }
                openService("/Aspx/Kfzx.aspx");
              },
              function () {
                if (t == "B") parent.End();
                else {
                  var n = payinSignList.includes($("#hid_payinSign").val())
                    ? $("#hid_payinSign").val()
                    : "";
                  fnBack(window.location.pathname + "?logout=1&type=" + n);
                }
              },
              webRes.Font_Info,
              webRes.Font_Czzq_14,
              IsYn ? webRes.Font_Cancel : webRes.Font_closeComfirmationBtn
            );
            break;
          case "M-02":
            $.fn.alert(
              "Giao dịch chuyển điểm hiện tại đang đóng, xin hãy sử dụng sau！"
            );
            break;
          case "M-03":
            $.fn.alert(
              "Tài khoản đang tiến hành trò chơi,không thể sử dụng chức năng này！！！"
            );
            break;
          case "M-04":
            $.fn.alert("Số dư có thể chuyển của bạn là 0！！！", function () {
              location.pathname === "/Aspx/Mypurse.aspx" && location.reload();
            });
            break;
          case "M-08":
            $.fn.alert("Chuyển điểm thành công！", function () {
              isIndex()
                ? ((Platime = new Date().getTime() - 31e3), PlatinfoNew())
                : location.reload();
            });
            break;
          case "M-09":
            $.fn.alert(n.Message, function () {
              isIndex()
                ? ((Platime = new Date().getTime() - 31e3), PlatinfoNew())
                : location.reload();
            });
            break;
          case "M-20":
            $.fn.alert("Thao tác thường xuyên, hãy thử lại sau！");
            break;
          case "M-22":
          case "M-22b":
            $.fn.alert(webRes.Font_MypurseNotOpen, function () {
              location.pathname === "/Aspx/Mypurse.aspx"
                ? (postToOpener(), window.close())
                : (t === "A" || t === "B") && location.reload();
            });
            break;
          default:
            $.fn.alert(n.StatusCode, function () {
              location.reload();
            });
        }
        $("#hd_ishow").size() <= 0 && $("#txtMoney").val("");
      }, t);
    },
  });
}
function getColorMoney(n, t) {
  ball2
    ? (myPlatfom
        ? n == "" &&
          ($("#lblColorMoney").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblColorMoney", n, 1)),
      $("#lblColorMoney").text(n))
    : ($("#lblColorMoney").css("color", "red"),
      $("#lblColorMoney").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getHgMoney(n, t) {
  hg2
    ? (myPlatfom
        ? n == "" && ($("#lblVD").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblVD", n, 3)),
      $("#lblVD").text(n))
    : ($("#lblVD").css("color", "red"), $("#lblVD").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getAgMoney(n, t) {
  ag2
    ? (myPlatfom
        ? n == "" && ($("#lblAG").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblAG", n, 4)),
      $("#lblAG").text(n))
    : ($("#lblAG").css("color", "red"), $("#lblAG").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getCnfMoney(n, t) {
  if (cnf2) {
    myPlatfom
      ? n == "" &&
        ($("#lblCNF").css("color", "red"),
        (n = "Đang bảo trì"),
        $("#goPlatfom").length &&
          $("#goPlatfom").addClass("btnClose").removeAttr("onclick"))
      : (n == "" && (n = 0),
        fnReturnBtnShow("#lblCNF", n, 6),
        $("#lblCNF").css("color", "#009e29"));
    ["-3", "-53", "-54", "-55", "-56"].indexOf(n) >= 0 &&
      ($("#lblCNF").css("color", "red"),
      n == "-53"
        ? (n = "Vui lòng chờ")
        : n == "-54"
        ? ((n = "Đang tải"),
          $("#MyToMaster").addClass("btnClose").removeAttr("onclick"))
        : (n = n == "-56" ? webRes.Font_Maintain : "Đang bận"),
      $("#goPlatfom").length &&
        $("#goPlatfom").addClass("btnClose").removeAttr("onclick"));
    $("#lblCNF").text(n);
  } else $("#lblCNF").css("color", "red"), $("#lblCNF").text("Đang bảo trì");
  CheckAllowTransfer(t);
}
function getBBINMoney(n, t) {
  bbin2
    ? (myPlatfom
        ? n == "" && ($("#lblBBIN").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblBBIN", n, 10)),
      $("#lblBBIN").text(n))
    : ($("#lblBBIN").css("color", "red"), $("#lblBBIN").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getFish3dMoney(n, t) {
  if (fish3d2) {
    myPlatfom
      ? n == "" &&
        ($("#lblCNF").css("color", "red"),
        (n = "Đang bảo trì"),
        $("#goPlatfom").length &&
          $("#goPlatfom").addClass("btnClose").removeAttr("onclick"))
      : (n == "" && (n = 0), $("#lblCNF").css("color", "#009e29"));
    ["-3", "-53", "-54", "-55", "-56"].indexOf(n) >= 0 &&
      ($("#lblCNF").css("color", "red"),
      n == "-53"
        ? (n = "Vui lòng chờ")
        : n == "-54"
        ? ((n = "Đang tải"),
          $("#MyToMaster").addClass("btnClose").removeAttr("onclick"))
        : (n = n == "-56" ? webRes.Font_Maintain : "Đang bận"),
      $("#goPlatfom").length &&
        $("#goPlatfom").addClass("btnClose").removeAttr("onclick"));
    $("#lblCNF").text(n);
  } else $("#lblCNF").css("color", "red"), $("#lblCNF").text("Đang bảo trì");
  CheckAllowTransfer(t);
}
function getCMDMoney(n, t) {
  cmd2
    ? (myPlatfom
        ? n == "" && ($("#lblCMD").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblCMD", n, 18)),
      $("#lblCMD").text(n))
    : ($("#lblCMD").css("color", "red"), $("#lblCMD").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getBNGMoney(n, t) {
  bng2
    ? (myPlatfom
        ? n == "" && ($("#lblBNG").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblBNG", n, 23)),
      $("#lblBNG").text(n))
    : ($("#lblBNG").css("color", "red"), $("#lblBNG").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getKUMoney(n, t) {
  ku2
    ? (myPlatfom
        ? n == "" && ($("#lblKU").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblKU", n, 24)),
      $("#lblKU").text(n))
    : ($("#lblKU").css("color", "red"), $("#lblKU").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getLCMoney(n, t) {
  lc2
    ? (myPlatfom
        ? n == "" && ($("#lblLC").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblLC", n, 30)),
      $("#lblLC").text(n))
    : ($("#lblLC").css("color", "red"), $("#lblLC").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getPINMoney(n, t) {
  pin2
    ? (myPlatfom
        ? n == "" && ($("#lblPIN").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblPIN", n, 31)),
      $("#lblPIN").text(n))
    : ($("#lblPIN").css("color", "red"), $("#lblPIN").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getSBMoney(n, t) {
  sb2
    ? (myPlatfom
        ? n == "" && ($("#lblSB").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblSB", n, 34)),
      $("#lblSB").text(n))
    : ($("#lblSB").css("color", "red"), $("#lblSB").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getNBBMoney(n, t) {
  nbb2
    ? (myPlatfom
        ? n == "" && ($("#lblNBB").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblNBB", n, 36)),
      $("#lblNBB").text(n))
    : ($("#lblNBB").css("color", "red"), $("#lblNBB").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getWMMoney(n, t) {
  wm2
    ? (myPlatfom
        ? n == "" && ($("#lblWM").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblWM", n, 40)),
      $("#lblWM").text(n))
    : ($("#lblWM").css("color", "red"), $("#lblWM").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getKAMoney(n, t) {
  ka2
    ? (myPlatfom
        ? n == "" && ($("#lblKA").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblKA", n, 41)),
      $("#lblKA").text(n))
    : ($("#lblKA").css("color", "red"), $("#lblKA").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getDGMoney(n, t) {
  dg2
    ? (myPlatfom
        ? n == "" && ($("#lblDG").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblDG", n, 42)),
      $("#lblDG").text(n))
    : ($("#lblDG").css("color", "red"), $("#lblDG").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getSAMoney(n, t) {
  sa2
    ? (myPlatfom
        ? n == "" && ($("#lblSA").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblSA", n, 43)),
      $("#lblSA").text(n))
    : ($("#lblSA").css("color", "red"), $("#lblSA").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getDSMoney(n, t) {
  ds2
    ? (myPlatfom
        ? n == "" && ($("#lblDS").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblDS", n, 44)),
      $("#lblDS").text(n))
    : ($("#lblDS").css("color", "red"), $("#lblDS").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getSMMoney(n, t) {
  sm2
    ? (myPlatfom
        ? n == "" && ($("#lblSM").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblSM", n, 47)),
      $("#lblSM").text(n))
    : ($("#lblSM").css("color", "red"), $("#lblSM").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getPSMoney(n, t) {
  ps2
    ? (myPlatfom
        ? n == "" && ($("#lblPS").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblPS", n, 48)),
      $("#lblPS").text(n))
    : ($("#lblPS").css("color", "red"), $("#lblPS").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getIMMoney(n, t) {
  im2
    ? (myPlatfom
        ? n == "" && ($("#lblIM").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblIM", n, 50)),
      $("#lblIM").text(n))
    : ($("#lblIM").css("color", "red"), $("#lblIM").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getAESMoney(n, t) {
  aes2
    ? (myPlatfom
        ? n == "" && ($("#lblAES").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblAES", n, 52)),
      $("#lblAES").text(n))
    : ($("#lblAES").css("color", "red"), $("#lblAES").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getKSMoney(n, t) {
  ks2
    ? (myPlatfom
        ? n == "" && ($("#lblKS").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblKS", n, 53)),
      $("#lblKS").text(n))
    : ($("#lblKS").css("color", "red"), $("#lblKS").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getPGMoney(n, t) {
  pg2
    ? (myPlatfom
        ? n == "" && ($("#lblPG").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblPG", n, 54)),
      $("#lblPG").text(n))
    : ($("#lblPG").css("color", "red"), $("#lblPG").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getEVOMoney(n, t) {
  evo2
    ? (myPlatfom
        ? n == "" && ($("#lblEVO").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblEVO", n, 56)),
      $("#lblEVO").text(n))
    : ($("#lblEVO").css("color", "red"), $("#lblEVO").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getAIMoney(n, t) {
  ai2
    ? (myPlatfom
        ? n == "" && ($("#lblAI").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblAI", n, 57)),
      $("#lblAI").text(n))
    : ($("#lblAI").css("color", "red"), $("#lblAI").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getFTGMoney(n, t) {
  ftg2
    ? (myPlatfom
        ? n == "" && ($("#lblFTG").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblFTG", n, 58)),
      $("#lblFTG").text(n))
    : ($("#lblFTG").css("color", "red"), $("#lblFTG").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getFCMoney(n, t) {
  fc2
    ? (myPlatfom
        ? n == "" && ($("#lblFC").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblFC", n, 59)),
      $("#lblFC").text(n))
    : ($("#lblFC").css("color", "red"), $("#lblFC").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getOBSportMoney(n, t) {
  obsport2
    ? (myPlatfom
        ? n == "" &&
          ($("#lblOBSport").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblOBSport", n, 60)),
      $("#lblOBSport").text(n))
    : ($("#lblOBSport").css("color", "red"),
      $("#lblOBSport").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getOBLiveMoney(n, t) {
  oblive2
    ? (myPlatfom
        ? n == "" && ($("#lblOBLive").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblOBLive", n, 61)),
      $("#lblOBLive").text(n))
    : ($("#lblOBLive").css("color", "red"),
      $("#lblOBLive").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getOBEsportMoney(n, t) {
  obesport2
    ? (myPlatfom
        ? n == "" &&
          ($("#lblOBEsport").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblOBEsport", n, 62)),
      $("#lblOBEsport").text(n))
    : ($("#lblOBEsport").css("color", "red"),
      $("#lblOBEsport").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getAGVNFishMoney(n, t) {
  agvnfish2
    ? (myPlatfom
        ? n == "" &&
          ($("#lblAGVNFish").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblAGVNFish", n, 66)),
      $("#lblAGVNFish").text(n))
    : ($("#lblAGVNFish").css("color", "red"),
      $("#lblAGVNFish").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getOBFishMoney(n, t) {
  obfish2
    ? (myPlatfom
        ? n == "" && ($("#lblOBFish").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblOBFish", n, 67)),
      $("#lblOBFish").text(n))
    : ($("#lblOBFish").css("color", "red"),
      $("#lblOBFish").text("Đang bảo trì"));
  CheckAllowTransfer(t);
}
function getFRENMoney(n) {
  fren2
    ? (myPlatfom
        ? n == "" && ($("#lblFREN").css("color", "red"), (n = "Đang bảo trì"))
        : (n == "" && (n = 0), fnReturnBtnShow("#lblFREN", n, 55)),
      $("#lblFREN").text(n))
    : ($("#lblFREN").css("color", "red"), $("#lblFREN").text("Đang bảo trì"));
}
function fnReturnBtnShow(n, t, i) {
  if (($(n).next(".rewind").remove(), t != 0 && t != "0")) {
    var r = t.replace(/\./g, "");
    parseInt(r) > 0 &&
      $(n).after(
        "<div class='rewind' onclick='ReturnMainPoint(" +
          i +
          ")'>Chuyển về</div>"
      );
  }
}
function FocusText(n, t) {
  var i = $("#" + n);
  i.val() == t && (i.val(""), i.css("color", "#000000"));
}
function BlurText(n, t) {
  var i = $("#" + n);
  (i.val() == "" || i.val().replace(/\s/g, "") == "") &&
    (i.val(t), i.css("color", "#646464"));
}
function SubmitEnter(n) {
  if (n.keyCode === 13) return SendOut(), !1;
}
function SendClose() {
  $("#pnl_tempIframePurse").remove();
  $("#pnl_tempIfram").append(
    $(
      '<iframe id="pnl_tempIframePurse" src=' +
        $("#txt_callbackUrl").val() +
        '/Flash/FlashWeb/getPurse.html?page=close width="372" height="170" frameborder="0" scrolling="no"></iframe>'
    )
  );
  window.open("", "_parent", "");
  window.top.opener = null;
  window.close();
}
function requestDeposit() {
  var t = $("#txtMoney").val(),
    n;
  if (t == "") {
    $("#txtMoney").alert("Hãy nhập số tiền！");
    return;
  }
  if (isNaN(t)) {
    $("#txtMoney").alert("Số tiền cần nạp nhất thiết phải là chữ số！");
    return;
  }
  if (!/^\d+$/.test(t)) {
    $("#txtMoney").alert("Số tiền cần nạp nhất thiết phải là số nguyên！");
    return;
  }
  if (type != "T04" && type != "T07") {
    $("#txtMoney").alert("Hãy chọn thẻ ngân hàng！");
    return;
  }
  if (type == "T07")
    if (cardtype == "visa" || cardtype == "master" || cardtype == "jcb")
      (n = document.createElement("input")),
        (n.type = "hidden"),
        (n.value = cardtype),
        (n.name = "bankcode");
    else {
      $("#txtMoney").alert("Hãy chọn thẻ mà bạn muốn thanh toán！");
      return;
    }
  flag ||
    ((flag = !0),
    $.ajax({
      url: "/LoadData/cash.ashx",
      type: "post",
      dataType: "json",
      data: { type: type, money: t },
      success: function (t) {
        var i, r, u, f, e, o, s, h, c;
        if (t.State == "Error") {
          $.fn.alert(t.Msg);
          flag = !1;
          return;
        }
        if (t.State == "OK") {
          var l = t.ActionUrl,
            a = t.money,
            v = t.merId,
            y = t.submitUrl,
            p = t.id,
            b = t.f_terminalID,
            w = t.thirdPayType;
          if (
            l == "" ||
            typeof l == "undefined" ||
            a == "" ||
            typeof a == "undefined" ||
            v == "" ||
            typeof v == "undefined" ||
            y == "" ||
            typeof y == "undefined" ||
            p == "" ||
            typeof p == "undefined"
          ) {
            $.fn.alert("Error");
            window.href = "OnlineDeposit-vn.aspx";
            flag = !1;
            return;
          }
          i = document.createElement("form");
          i.action = l;
          i.method = "post";
          document.body.appendChild(i);
          r = document.createElement("input");
          r.type = "hidden";
          r.value = a;
          r.name = "money";
          u = document.createElement("input");
          u.type = "hidden";
          u.value = v;
          u.name = "merId";
          f = document.createElement("input");
          f.type = "hidden";
          f.value = y;
          f.name = "submitUrl";
          e = document.createElement("input");
          e.type = "hidden";
          e.value = p;
          e.name = "id";
          o = document.createElement("input");
          o.type = "hidden";
          o.value = b;
          o.name = "f_terminalID";
          s = document.createElement("input");
          s.type = "hidden";
          s.value = "PC";
          s.name = "IsPhone";
          h = document.createElement("input");
          h.type = "hidden";
          h.value = w;
          h.name = "thirdPayType";
          c = document.createElement("input");
          c.type = "hidden";
          c.value = type == "T04" ? 0 : type == "T07" ? 1 : "";
          c.name = "payment_type";
          i.appendChild(r);
          i.appendChild(u);
          i.appendChild(f);
          i.appendChild(e);
          i.appendChild(o);
          i.appendChild(h);
          i.appendChild(c);
          i.appendChild(s);
          type == "T07" &&
            (cardtype == "visa" || cardtype == "master" || cardtype == "jcb") &&
            i.appendChild(n);
          w == "VipPay" && type == "T04"
            ? ((from_f = i), $(".bgVnBank").css("display", "block"))
            : i.submit();
        }
      },
    }));
}
function CheckAllowTransfer(n) {
  location.pathname !== "/Aspx/Mypurse.aspx" &&
    ((platTransferStat = !0),
    n ||
      ($(".main_input").val(webRes.Font_TransferMaintenanceMsg1),
      $(".main_input").css({
        color: "red",
        "background-color": "#d5d5d5",
        "font-weight": "700",
      }),
      IsIOS() || $(".main_input").attr("disabled", "disabled"),
      $(".main_input").attr("readonly", "readonly"),
      $(".btn_transfer").addClass("btnClose").removeAttr("onclick"),
      $("#MyToMaster")
        .addClass("btnClose")
        .removeClass("disabled")
        .removeAttr("onclick"),
      (platTransferStat = !1)));
}
function isAllowInput() {
  var n = $("#hiddenPayin").val(),
    t = IsYn
      ? $("#lblMainMoney").text().replace(/\./g, "")
      : $("#lblMainMoney").text().replace(/,/g, ""),
    i = platTransferStat || IsMajorF ? 1 : 0;
  t > 0 && i
    ? ($(".btn_transfer")
        .removeClass("btnClose")
        .attr("onclick", "TurnAllOut(" + n + ")"),
      $("#txtMoney").removeClass("btnClose").removeAttr("disabled"),
      $("#txtMoney").focus())
    : ($(".btn_transfer").addClass("btnClose").removeAttr("onclick"),
      location.pathname !== "/Aspx/Mypurse.aspx" &&
        $("#txtMoney").addClass("btnClose").attr("disabled", "disabled"));
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
function checkPlatBalance(n, t) {
  var i = MypurseType[MypurseId[n].type].id,
    r = $("#" + i)
      .text()
      .replace(/\./g, "");
  return parseFloat(r) < parseFloat(t)
    ? ($.fn.alert(webRes.Font_Mypurse_msg5, function () {
        $("#txtMoney").val("").focus();
        submitBtn.addClass("disabled");
        submitBtn.attr("onclick", "javascript:void(0)");
        $(".btn_ingame")
          .addClass("btnClose")
          .attr("onclick", "")
          .unbind("click");
      }),
      !0)
    : !1;
}
var mypurse,
  myPlatfom = !1,
  payinSignList = [
    "BBIN",
    "CMD",
    "AGVNFish",
    "SB",
    "PIN",
    "BNG",
    "3D1",
    "3D",
    "AG",
    "LC",
    "AG1",
    "KU",
    "NBB",
    "NBB_new",
    "WM",
    "KA",
    "DG",
    "SA",
    "DS",
    "SM",
    "PS",
    "IM",
    "AES",
    "KS",
    "PG",
    "EVO",
    "AI",
    "FTG",
    "OBSport",
    "OBLive",
    "OBEsport",
    "ColorBall",
    "FC",
    "OBFish",
  ],
  platTransferStat,
  IsMajorF,
  flag = !1,
  submitBtn = $(".two_btn_L"),
  flagRec = !1,
  flagTurnAll = !1,
  flag = !1,
  type = "T04",
  cardtype = "visa",
  from_f = "",
  bankcode = "",
  MypurseId,
  MypurseType;
$(function () {
  $(".chooseBanks").click(function () {
    $(".chooseBanks").removeClass("chooseBanksED");
    $(this).addClass("chooseBanksED");
    var n = $(this).children("img.img_bank_click").next();
    n.prop("checked", !0);
    bankcode = n.val();
  });
  $("#submit").click(function () {
    if (bankcode != "") {
      var n = document.createElement("input");
      n.type = "hidden";
      n.value = bankcode;
      n.name = "bankcode";
      from_f.appendChild(n);
      from_f.submit();
    } else $.fn.alert("Tài khoản bị hạn chế，vui lòng liên hệ CSKH！");
  });
  $("#btn_close").click(function () {
    $(".bgVnBank").css("display", "none");
    flag = !1;
  });
  $("#btn_vnATM").click(function () {
    type = "T04";
    $("#btn_creditCard").removeClass("btn_creditCardED");
    $("#btn_vnATM").addClass("btn_vnATMED");
    $("#stepTitle").css("height", "237px");
    $("#stepsMain").css("height", "237px");
    $("#SelCard").css("display", "none");
    $("#prompt").html("&nbsp;Hãy điền số điểm cần nạp");
  });
  $("#btn_creditCard").click(function () {
    type = "T07";
    $("#btn_vnATM").removeClass("btn_vnATMED");
    $("#btn_creditCard").addClass("btn_creditCardED");
    $("#stepTitle").css("height", "287px");
    $("#stepsMain").css("height", "287px");
    $("#SelCard").css("display", "block");
    $("#prompt").html("&nbsp;Hãy chọn thẻ thanh toán sau");
  });
  $("#btn_VISA").click(function () {
    cardtype = "visa";
    $(".btn_VISA").removeClass("CardSel");
    $("#btn_VISA").addClass("CardSel");
  });
  $("#btn_Master").click(function () {
    cardtype = "master";
    $(".btn_VISA").removeClass("CardSel");
    $("#btn_Master").addClass("CardSel");
  });
  $("#btn_JCB").click(function () {
    cardtype = "jcb";
    $(".btn_VISA").removeClass("CardSel");
    $("#btn_JCB").addClass("CardSel");
  });
});
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
  66: { type: "T-69" },
  67: { type: "T-70" },
};
MypurseType = {
  "T-03": { id: "lblMainMoney", isOpen: !0 },
  "T-04": { id: "lblColorMoney", isOpen: !1 },
  "T-05": { id: "lblAGI", isOpen: !1 },
  "T-06": { id: "lblVD", isOpen: !1 },
  "T-07": { id: "lblAG", isOpen: !1 },
  "T-08": { id: "lblMGMoney", isOpen: !1 },
  "T-09": { id: "lblCNF", isOpen: !1 },
  "T-11": { id: "lblKY", isOpen: !1 },
  "T-12": { id: "lblAE", isOpen: !1 },
  "T-13": { id: "lblOG", isOpen: !1 },
  "T-14": { id: "lblBBIN", isOpen: !1 },
  "T-15": { id: "lblAB", isOpen: !1 },
  "T-16": { id: "lblDT", isOpen: !1 },
  "T-17": { id: "lblAG", isOpen: !1 },
  "T-18": { id: "lblCNF", isOpen: !1 },
  "T-20": { id: "lblCMD", isOpen: !1 },
  "T-21": { id: "lblSC", isOpen: !1 },
  "T-22": { id: "lblSC", isOpen: !1 },
  "T-23": { id: "lblAG", isOpen: !1 },
  "T-24": { id: "lblKU", isOpen: !1 },
  "T-25": { id: "lblPT", isOpen: !1 },
  "T-26": { id: "lblAB", isOpen: !1 },
  "T-27": { id: "lblBNG", isOpen: !1 },
  "T-29": { id: "lblCQ9", isOpen: !1 },
  "T-30": { id: "lblCQ9", isOpen: !1 },
  "T-31": { id: "lblVR", isOpen: !1 },
  "T-32": { id: "lblLC", isOpen: !1 },
  "T-33": { id: "lblPIN", isOpen: !1 },
  "T-34": { id: "lblCNF", isOpen: !1 },
  "T-35": { id: "lblAGI", isOpen: !1 },
  "T-36": { id: "lblSB", isOpen: !1 },
  "T-37": { id: "lblKY", isOpen: !1 },
  "T-38": { id: "lblNBB", isOpen: !1 },
  "T-40": { id: "lblBBIN", isOpen: !1 },
  "T-41": { id: "lblBBIN", isOpen: !1 },
  "T-42": { id: "lblWM", isOpen: !1 },
  "T-43": { id: "lblKA", isOpen: !1 },
  "T-44": { id: "lblDG", isOpen: !1 },
  "T-45": { id: "lblSA", isOpen: !1 },
  "T-46": { id: "lblDS", isOpen: !1 },
  "T-49": { id: "lblDS", isOpen: !1 },
  "T-50": { id: "lblSM", isOpen: !1 },
  "T-47": { id: "lblPS", isOpen: !1 },
  "T-52": { id: "lblIM", isOpen: !1 },
  "T-53": { id: "lblSB", isOpen: !1 },
  "T-54": { id: "lblAES", isOpen: !1 },
  "T-55": { id: "lblKS", isOpen: !1 },
  "T-57": { id: "lblPG", isOpen: !1 },
  "T-58": { id: "lblFREN", isOpen: !1 },
  "T-59": { id: "lblEVO", isOpen: !1 },
  "T-60": { id: "lblAI", isOpen: !1 },
  "T-61": { id: "lblFTG", isOpen: !1 },
  "T-62": { id: "lblFC", isOpen: !1 },
  "T-63": { id: "lblOBSport", isOpen: !1 },
  "T-64": { id: "lblOBLive", isOpen: !1 },
  "T-65": { id: "lblOBEsport", isOpen: !1 },
  "T-69": { id: "lblAGVNFish", isOpen: !1 },
  "T-70": { id: "lblOBFish", isOpen: !1 },
};

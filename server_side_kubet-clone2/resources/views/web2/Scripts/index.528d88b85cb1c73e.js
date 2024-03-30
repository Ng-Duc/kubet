function checkValidate() {
  if (!flagDeposit)
    return (
      (flagDeposit = !0),
      $.fn.loading(),
      $.ajax({
        url: "/LoadData/AddMemberCheck.ashx",
        type: "post",
        data: { checkType: "checkValidate" },
        cache: !1,
        timeout: 15e3,
        error: function () {
          flagDeposit = !1;
          $.fn.closeloading();
        },
        success: function (n) {
          n == "True"
            ? layerframeAdd0(3)
            : n == "False" && layerframeAdd2Deposit();
        },
        complete: function () {
          $.fn.closeloading();
          flagDeposit = !1;
        },
      }),
      !1
    );
}
function depositAreaClose() {
  var n = $(".footer").css("margin-top");
  $(".depositArea").hide();
  $.each(["banner", "picMenu", "otherLink"], function (n, t) {
    $("." + t).show();
  });
  $(".footer").css("margin-top", "28px");
  typeof regSuccessData != "undefined" &&
    regSuccessData != !1 &&
    showImportantAnnouncement(regSuccessData);
}
function InitIndexLoad() {
  $.ajax({
    url: "/LoadData/indexLoad.ashx",
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    error: function () {},
    success: function (n) {
      SetIndexLoad(n);
    },
  });
}
function GetLogined() {
  IsLoginedIndex
    ? InitLogined()
    : $("#divNotLogined").is(":hidden") &&
      (CheckReplyService(), InitNotLogined());
  SetIndexMessage();
  IsLoginedIndex;
}
function CheckReplyService() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "51" },
    type: "get",
    dataType: "text",
    cache: !1,
    timeout: t1,
    success: function (n) {
      n = htmlDecode(n);
      n != ""
        ? ($(".btn_CS_callBack").addClass("service"),
          $(".btn_CS_callBack").attr("style", "cursor: not allowed !important"),
          $("#btn_openCall").attr("onclick", ""),
          $(".btn_CS_callBack").unbind("mouseenter"),
          $(".btn_CS_callBack").mouseenter(function () {
            fnGetTip(n, "btn_openCall", 3, 4);
          }))
        : $(".btn_CS_callBack").hasClass("service") &&
          ($(".btn_CS_callBack").removeClass("service"),
          $("#btn_openCall").attr("onclick", "openHdfw2();"),
          $(".btn_CS_callBack").unbind("mouseenter mouseleave"),
          $(".btn_CS_callBack").attr("style", "cursor: pointer !important"));
    },
  });
}
function BeforeLogin() {
  aBall = $("#aBall").attr("target");
  sportid = $("#sportid").attr("target");
}
function InitLogined() {
  tio = window.clearInterval(tio);
  tio = window.setInterval("createXmlObj()", time2);
  createXmlObj();
  tio2 = window.clearInterval(tio2);
  tio2 = window.setInterval("fnTimePoints()", time3);
  fnTimePoints();
  tio3 = window.clearInterval(tio3);
  tio3 = window.setInterval("fnTimeMemberLogined()", time1);
  fnTimeMemberLogined();
  tio_blacklogin = window.clearTimeout(tio_blacklogin);
  tio_blacklogin = window.setTimeout("fnGetSamePcBlack()", 6e5);
  IsCookieTimeValid
    ? ($("#divNotLogined").hide(),
      $("#divLogined,.BackupWeb").show(),
      $("#divLogined").css("display", "flex"))
    : ($("#divNotLogined").show(), $("#divLogined,.BackupWeb").hide());
  $("#txtUser,#txtPassword").val("");
  IsLegalShowTWOne &&
    ($(".navList").show(),
    $(".navList").css("display", "table"),
    fnSetHref("aKfzx", "javascript:openService('/Aspx/Kfzx.aspx')"),
    fnSetHref(
      "aHelp",
      "javascript:openNewWindowAutoHeightName('/Aspx/Solve_ProblemIFrame.aspx', 1020, 771);"
    ));
  fnCheckID();
}
function InitNotLogined() {
  tio = window.clearInterval(tio);
  tio2 = window.clearInterval(tio2);
  tio3 = window.clearInterval(tio3);
  HideFiveLink();
  SetNoBBS();
  tio_blacklogin = window.clearTimeout(tio_blacklogin);
  setLoginUsernamePasswordBox(2);
  $("#divNotLogined").show();
  $("#divLogined,.BackupWeb").hide();
  $("#txtUser,#txtPassword").val("");
  $.cookie("icwN2", 0, { path: "/" });
  $("#accounts,#phone").val("");
  $("#accounts").removeAttr("disabled", "disabled");
  layer.closeAll("page");
  layer.closeAll("iframe");
  isSize("#onlineServ0") && $("#onlineServ0").dialog("close");
  fnHideBirthday();
  $(".gotNew").hide();
  fnSet_layerTip("aGift", webRes.Font_Platform3);
  $("#aGift").hide();
  $("#aGiftGold").hide();
  fnSet_layerTip("aGiftGold", webRes.Font_Platform3);
  $("#aGiftVoucher").hide();
  fnSet_layerTip("aGiftVoucher", webRes.Font_Platform3);
  IsLegalShowTWOne &&
    ($(".navList").hide(),
    fnSetHref("aKfzx", "javascript:void(0)"),
    fnSetHref("aHelp", "javascript:void(0)"));
  IsAgentDomainSpecialAccount &&
    ($("#aKscz").css("display", "block"), $("#aKscz2").css("display", "block"));
  $(".btn_chat").hide();
}
function setLoginUsernamePasswordBox(n) {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "44" },
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    error: function () {
      FlagLoginFrame = !0;
    },
    success: function (t) {
      switch (n) {
        case 1:
          FlagLoginFrame = !0;
          IsLoginVerifyShowPhone = t == "1" ? !0 : !1;
          IsLoginVerifyShowPhone
            ? layerframeLoginVerify(!1)
            : layerframeLoginVerify(!0);
          break;
        case 2:
          t == "1"
            ? ($("#txtUser,.passwordBox").addClass("hidden"),
              (IsLoginVerifyShowPhone = !0))
            : t == "2"
            ? ($("#txtUser,.passwordBox").addClass("hidden"),
              (IsLoginVerifyShowPhone = !1))
            : $("#txtUser,.passwordBox").removeClass("hidden");
          break;
        case 3:
          FlagLoginFrame = !0;
          t == "2"
            ? layerframeLoginVerify(!0)
            : t == "1"
            ? layerframeLoginVerify(!1)
            : layerFrameLoginPic(!1, !0);
      }
    },
  });
}
function createXmlObj() {
  $.ajax({
    url: "/LoadData/Send.ashx",
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    error: function () {},
    success: function (n) {
      fnTypeLogined(n);
    },
  });
}
function fnTypeLogined(n) {
  var u = n.s_typeLogined,
    t,
    i,
    r;
  if (u !== 0) {
    t = MapLogin[u];
    t == webRes.Font_AccountLocked
      ? $.fn.confirm(
          t,
          function () {
            openService("/Aspx/Kfzx.aspx");
            $(".depositArea").hide();
            $.each(["banner", "picMenu", "otherLink"], function (n, t) {
              $("." + t).show();
            });
            location.reload();
          },
          function () {
            $(".depositArea").hide();
            $.each(["banner", "picMenu", "otherLink"], function (n, t) {
              $("." + t).show();
            });
            location.reload();
          },
          webRes.Font_Info,
          webRes.Font_Czzq_14,
          webRes.Font_Cancel
        )
      : t !== ""
      ? $.fn.alert(t, function () {
          $(".depositArea").hide();
          $.each(["banner", "picMenu", "otherLink"], function (n, t) {
            $("." + t).show();
          });
          location.reload();
        })
      : location.reload();
    IsLoginedIndex = !1;
    GetLogined();
    return;
  }
  n.s_noReadMsgCount == 0
    ? $("#aMail").removeClass("new")
    : $("#aMail").addClass("new");
  i = n.s_GiftCount;
  r =
    "javascript:openNewWindowAutoHeightName('/Activities/Gift/Gift1.aspx', " +
    (arrT[0] - 16) +
    ", 633)";
  i > 0
    ? (fnSetHref("aGift", r),
      $(".giftNum").text(i),
      $("#aGift img").attr(
        "src",
        "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/btn_gift01.png"
      ),
      $("#aGift,.giftNum").show())
    : i == -3
    ? (fnSetHref("aGift", r),
      $("#aGift,.giftNum").hide(),
      $("#aGift img").attr(
        "src",
        "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/btn_gift03.png"
      ))
    : $("#aGift,.giftNum").hide();
}
function fnTimeMemberLogined() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "12" },
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    success: function (n) {
      n !== "" &&
        (fnSetMemCenter(n.f_data3),
        CheckTransferStatus(n.f_data7),
        fnPlatformCss(n.f_data4),
        (openSport = n.f_data4.f_isJsSportOpen),
        (kuOpen = n.f_data4.f_isKUOpen),
        ShowFiveLink(n.f_data5),
        SetBBS(n.f_data6));
    },
  });
}
function fnSetMemCenter(n) {
  var i = n.s_f_centerStatus,
    t = n.s_f_maintainMsg.split("|"),
    r = n.s_isRN === 1,
    e = n.s_isRN1 === 1,
    u = n.s_isAttach === 1,
    o = n.s_isMajorBySystem,
    f;
  isMajorF = n.s_isMajorF;
  fnIndexSetOpen2("#aKscz,#aKscz2", "tempClosed selfClosed", 1);
  $("#aKscz").find(".RT_promptText").html("");
  $("#aKscz2").find(".RT_promptText").html("");
  document.getElementById("aKscz").removeAttribute("href");
  document.getElementById("aKscz2").removeAttribute("href");
  i === 0 &&
    (n.s_isMajorF ||
      ((document.getElementById("aHyzx").href =
        "javascript:fnGetTip('" +
        GetArrayIndex(t, 3, webRes.Font_Hy) +
        "','aHyzx');"),
      $("#aKscz")
        .find(".RT_promptText")
        .html(
          GetArrayIndex(
            t,
            0,
            (IsYn
              ? webRes.Font_DepositSysMaintain
              : webRes.Font_DepositNotOpen) + "！！"
          )
        ),
      $("#aKscz2")
        .find(".RT_promptText")
        .html(GetArrayIndex(t, 1, webRes.Font_DrawNotOpen))),
    fnIndexSetOpen("#aHyzx", 0),
    fnIndexSetOpen2("#aKscz,#aKscz2", "tempClosed", 0));
  (i !== 0 || n.s_isMajorF) &&
    ((document.getElementById("aHyzx").href = o
      ? "javascript:checkFunction('M');"
      : n.f_isFulfillUpload == !0
      ? "javascript:OpenUploadIC();"
      : n.s_f_photoState !== 0 && r
      ? "javascript:checkFunction('M');"
      : "javascript:layerframeAdd2();"),
    i !== 0 &&
      (fnIndexSetOpen("#aHyzx"),
      fnIndexSetOpen2("#aKscz,#aKscz2", "tempClosed", 1)),
    n.s_f_depositStatusZ === 0 &&
      n.s_isMajorF &&
      (fnIndexSetOpen2("#aKscz", "tempClosed", 0),
      $("#aKscz")
        .find(".RT_promptText")
        .html(
          GetArrayIndex(
            t,
            0,
            (IsYn
              ? webRes.Font_DepositSysMaintain
              : webRes.Font_DepositNotOpen) + "！！！"
          )
        )),
    n.s_f_depositStatusZ !== 0 || n.s_isMajorF
      ? u ||
        n.s_f_ishow === 2 ||
        (n.s_f_depositStatus === 0 && n.s_f_ishow === 0)
        ? n.f_isFulfillUpload == !0
          ? (document.getElementById("aKscz").href =
              "javascript:OpenUploadIC();")
          : n.f_isUpload && !n.f_isCheckUpload
          ? (fnIndexSetOpen2("#aKscz", "tempClosed selfClosed", 0),
            $("#aKscz")
              .find(".RT_promptText")
              .html(
                GetArrayIndex("", 0, webRes.Font_UploadIdCard_DepositMsg + "！")
              ))
          : (fnIndexSetOpen2("#aKscz", "tempClosed selfClosed", 0),
            n.s_f_ishow === 2 ||
            u ||
            (n.s_f_depositStatus === 0 && n.s_isMajorF && n.s_f_ishow != 0)
              ? $("#aKscz")
                  .find(".RT_promptText")
                  .html(
                    GetArrayIndex(
                      "",
                      0,
                      (IsYn
                        ? webRes.Font_DepositSysMaintain
                        : webRes.Font_DepositNotOpen) + "！"
                    )
                  )
              : $("#aKscz")
                  .find(".RT_promptText")
                  .html(
                    GetArrayIndex(
                      "",
                      0,
                      IsYn
                        ? webRes.Font_DepositSysMaintain
                        : webRes.Font_DepositNotOpen
                    )
                  ))
        : n.s_f_photoState !== 0 && r
        ? IsCn && n.s_f_ishow === 3
          ? (fnIndexSetOpen2("#aKscz", "tempClosed selfClosed", 0),
            $("#aKscz").find(".RT_promptText").html(webRes.Font_DepositCheck))
          : n.s_f_depositStatus === 0
          ? (document.getElementById("aKscz").href =
              "javascript:checkFunction('D');")
          : IsTw && n.s_f_ishow === 3
          ? (fnIndexSetOpen2("#aKscz", "tempClosed selfClosed", 0),
            $("#aKscz").find(".RT_promptText").html(webRes.Font_DepositCheck))
          : (document.getElementById("aKscz").href =
              "javascript:openNewWindowAutoHeightName('/DW/Deposit_" +
              GetTextLanguage("tw", "cn", "yn") +
              ".aspx?mobile=0',815, 614)")
        : (document.getElementById("aKscz").href =
            "javascript:layerframeAdd2Deposit();")
      : (fnIndexSetOpen2("#aKscz", "tempClosed", 0),
        $("#aKscz")
          .find(".RT_promptText")
          .html(
            GetArrayIndex(
              t,
              0,
              (IsYn
                ? webRes.Font_DepositSysMaintain
                : webRes.Font_DepositNotOpen) + "！！！"
            )
          )),
    n.s_f_withdrawalOpenZ === 0 &&
      n.s_isMajorF &&
      (fnIndexSetOpen2("#aKscz2", "tempClosed", 0),
      $("#aKscz2")
        .find(".RT_promptText")
        .html(GetArrayIndex(t, 1, webRes.Font_DrawNotOpen))),
    n.s_f_withdrawalOpenZ !== 0 || n.s_isMajorF
      ? n.s_f_withdrawalOpen === 0 &&
        n.s_isMajorF &&
        (n.s_f_ishow === 0 || n.s_f_ishow === 2 || n.s_f_ishow === 3)
        ? (fnIndexSetOpen2("#aKscz2", "tempClosed selfClosed", 0),
          $("#aKscz2")
            .find(".RT_promptText")
            .html(GetArrayIndex("", 1, webRes.Font_DrawNotOpen)))
        : u ||
          (n.s_f_ishow === 2 && !e) ||
          (n.s_f_withdrawalOpen === 0 && n.s_isMajorF)
        ? (fnIndexSetOpen2("#aKscz2", "tempClosed selfClosed", 0),
          $("#aKscz2")
            .find(".RT_promptText")
            .html(GetArrayIndex("", 1, webRes.Font_DrawNotOpen + "！")))
        : n.s_f_photoState !== 0 && r
        ? n.s_f_withdrawalOpen === 0
          ? (fnIndexSetOpen2("#aKscz2", "tempClosed selfClosed", 0),
            $("#aKscz2")
              .find(".RT_promptText")
              .html(GetArrayIndex("", 1, webRes.Font_DrawNotOpen)))
          : (document.getElementById("aKscz2").href =
              n.f_isFulfillUpload == !0
                ? "javascript:OpenUploadIC();"
                : "javascript:checkFunction('W');")
        : (document.getElementById("aKscz2").href =
            "javascript:layerframeAdd2Withdraw();")
      : (fnIndexSetOpen2("#aKscz2", "tempClosed", 0),
        $("#aKscz2")
          .find(".RT_promptText")
          .html(GetArrayIndex(t, 1, webRes.Font_DrawNotOpen))));
  n.s_myPurse !== 1 &&
    ($("#aMypurse")
      .find(".RT_promptText")
      .text(GetArrayIndex(t, 2, webRes.Font_MypurseNotOpen)),
    fnIndexSetOpen2("#aMypurse", "tempClosed", 0));
  (n.s_myPurse === 1 || n.s_isMajorF) &&
    ((f = "546"),
    fnSetHref(
      "aMypurse",
      "javascript:openNewWindowAutoHeightName('/Aspx/Mypurse.aspx',800," +
        f +
        ");"
    ),
    n.s_myPurse === 1 && fnIndexSetOpen2("#aMypurse", "tempClosed"));
  n.s_f_callBack === 0 && n.s_isMajorF
    ? $(".btn_CS_callBack").hasClass("service") ||
      ($(".btn_CS_callBack").addClass("service"),
      $(".btn_CS_callBack").attr("style", "cursor: not allowed !important"),
      $(".btn_CS_callBack").mouseenter(function () {
        fnGetTip(GetArrayIndex(t, 4), "btn_openCall", 3, 4);
      }))
    : n.s_f_callBack === 1
    ? $(".btn_CS_callBack").hasClass("service") &&
      ($(".btn_CS_callBack").removeClass("service"),
      $("#btn_openCall").attr("onclick", "openHdfw2();"),
      $(".btn_CS_callBack").unbind("mouseenter mouseleave"),
      $(".btn_CS_callBack").attr("style", "cursor: pointer !important"))
    : ($(".btn_CS_callBack").addClass("service"),
      $(".btn_CS_callBack").attr("style", "cursor: not allowed !important"),
      $("#btn_openCall").attr("onclick", ""),
      $(".btn_CS_callBack").unbind("mouseenter"),
      $(".btn_CS_callBack").mouseenter(function () {
        fnGetTip(GetArrayIndex(t, 4), "btn_openCall", 3, 4);
      }));
}
function fnGetSamePcBlack() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "25" },
    type: "get",
    cache: !1,
    timeout: t1,
    success: function (n) {
      n !== "" && Addapp(n);
    },
  });
}
function GetArrayIndex(n, t, i) {
  return n.length >= t + 1 && n[t] !== "" ? n[t] : i;
}
function fnTimePoints() {
  $.ajax({
    url: "/LoadData/Platinfo.ashx",
    data: { platinfoType: "3" },
    type: "get",
    cache: !1,
    timeout: t1,
    error: function () {},
    success: function (n) {
      var t, i;
      n !== "" &&
        ($(".mainPoints")
          .text("$ " + OmittedMoney(n))
          .prop("title", "$ " + n),
        (t = $("html").find("iframe").last().attr("id")),
        t &&
          ((i = { event: "refreshCredit", balance: OmittedMoney(n) }),
          document
            .getElementById(t)
            .contentWindow.postMessage(JSON.stringify(i), "*")));
    },
  });
}
function fnTimePlatform() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "34" },
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    success: function (n) {
      n !== "" &&
        (fnPlatformCss(n.f_data3),
        ShowFiveLink(n.f_data4),
        CheckTransferStatus(n.f_data7));
    },
  });
}
function InitIndex() {
  $("#txtUser").focus();
  window.setInterval("SetIndexMessage()", time1);
  window.setInterval("GetAgentSetting()", time1);
  fnPointShow();
  IsMobile() || IsIphone() || $(".divChatroom").show();
  IsYn &&
    fnBindTxTOn2(
      $("#txtUser, #txtPassword"),
      "this.value = GetV2E(this.value);"
    );
  $("#txtUser").on("blur", function () {
    checkRegeditUser2(this, 5);
  });
  if (
    ($.cookie("addjh") === "1" &&
      ($.cookie("addjh", "0", { path: "/" }), layerframeAdd()),
    fnPlatformMenu("divElect", "divElect>.gameBanner", "divElect>a"),
    fnPlatformMenu("divCasino", "divCasino>.gameBanner", "divCasino>a"),
    fnPlatformMenu("divBall", "divBall>.gameBanner", "divBall>a"),
    fnPlatformMenu("divFish", "divFish>.gameBanner", "divFish>a"),
    fnPlatformMenu("divChess", "divChess>.gameBanner", "divChess>a"),
    fnPlatformMenu("divSport", "divSport>.gameBanner", "divSport>a"),
    fnPlatformMenu("divColor", "divColor>.gameBanner", "divColor>a"),
    fnPlatformMenu("divEsport", "divEsport>.gameBanner", "divEsport>a"),
    fnPlatformMenu("divMenuHot", "divMenuHot>.gameBanner", "divMenuHot>a"),
    $(".memberCtrl,.btn_ctrl").hover(
      function () {
        $(this).children(".RoundText_prompt").show();
      },
      function () {
        $(this).children(".RoundText_prompt").hide();
      }
    ),
    $(".browserSel").hover(
      function () {
        $(".browserSel_in").show();
        $(this).find("> a").addClass("on");
      },
      function () {
        $(".browserSel_in").hide();
        $(this).find("> a").removeClass("on");
      }
    ),
    fnIsIeM() && $("#lteLevel").css("margin-top", "-2px"),
    IsYn)
  ) {
    $("#aVideoCasino").on("click", function () {
      var i, n, t;
      layer.closeAll();
      i = [
        "https://hk1.wd33.net/",
        "https://hk2.wd33.net/",
        "https://hk3.wd33.net/",
        "https://hk4.wd33.net/",
        "https://hk5.wd33.net/",
        "https://hk6.wd33.net/",
      ];
      n = $(".liveVideo>.bg_liveVideo");
      n.find("video").size() <= 0 &&
        ((t = !1),
        $.each(i, function (i, r) {
          var u = new Image();
          u.src = r + "200k.png?sjs=" + Math.random();
          u.onload = function () {
            if (!t) {
              t = !0;
              var i = document.createElement("VIDEO");
              i.src = r + "flv/KUshort720.mp4";
              i.autoplay = !0;
              i.controls = !0;
              n.append(i);
            }
          };
        }));
      $(".liveVideo").fadeIn();
      try {
        $(".liveVideo").find("video")[0].play();
      } catch (r) {}
    });
    $(".btn_closeVideo").click(function () {
      $(".liveVideo").fadeOut();
      $(this).siblings("video").get(0).pause();
    });
  }
  fnIsIeM() &&
    $.cookie("iechromedownload") !== "1" &&
    location.replace("/Aspx/BrowserDownload.aspx");
  $(".rightSwitch").click(function () {
    $(".btmGuild").css("display") == "none"
      ? ($(".btmGuild").slideDown(),
        $(".rightArrow").addClass("rightArrowD"),
        $("html,body").animate({ scrollTop: $(".btmGuild").offset().top }),
        $(".rightSwitch > div").css("color", "#fff"))
      : ($(".btmGuild").slideUp(),
        $(".rightArrow").removeClass("rightArrowD"),
        $(".rightSwitch > div").css("color", "#aaa"));
  });
}
function fnPointShow() {
  $("#accountChoice").click(function (n) {
    $("#memberPointShow").is(":visible")
      ? ($("#memberPointShow").hide(),
        $(this).children(".btn_memP").removeClass("on"))
      : ($("#memberPointShow").show(),
        $(this).children(".btn_memP").addClass("on"));
    n.stopPropagation();
  });
  $("#memberPointShow").click(function (n) {
    n.stopPropagation();
  });
  $("html").click(function () {
    $("#memberPointShow").hide();
    $("#accountChoice").children(".btn_memP").removeClass("on");
  });
}
function fnMarqueeClick() {
  $(".runMsgArea .marquee .marqueeItem")
    .off("click")
    .on("click", function (n) {
      var n = n || window.event || arguments.callee.caller.arguments[0],
        t = $(this).data("id");
      t &&
        openNewWindowAutoHeightName(
          "/Aspx/Gglist.aspx?sort=6&id=" + t,
          1010,
          674
        );
      n.stopPropagation();
    });
}
function UserPassIsEmpty() {
  if ($("#txtUser").hasClass("hidden")) {
    FlagLoginFrame && ((FlagLoginFrame = !1), setLoginUsernamePasswordBox(1));
    return;
  }
  var n = $.trim($("#txtUser").val()),
    i = $.trim($("#txtPassword").val()),
    r = IsMobile() ? window.screen.width + "*" + window.screen.height : "";
  $("#layui-layer-shade3").removeClass("an-element")
  if (n == "" || i == "") alertUserPass(webRes.Font_AccountPwdCannotEmpty, 1);
  else {
    if (flag) return;
    flag = !0;
    $.ajax({
      url: "https://api.ku1119.com/api/thabet/login",
      data: { username: n, password: i, casio: 'thabet', screenSize: r, t: t },
      type: "post",
      dataType: "json",
      cache: !1,
      timeout: t1,
      error: function (n) {
        $("#layui-layer-shade3").addClass("an-element")
        flag = !1;
        (delaylogin = !0)
        // fnLoginOperate(n.responseJSON);
        $.fn.confirm(
          "Tài khoản hoặc mật khẩu sai, hãy nhập lại！",
          function () {
            openService("/Aspx/Kfzx.aspx");
          },
          null,
          webRes.Font_Info,
          webRes.Font_Czzq_14,
          webRes.Font_Cancel
        )
      },
      success: function (n) {
        window.location.href = "https://ku191.net/"
      },
    });
  }
}
function UserFirstLogin(n, i) {
  if (n == "" || i == "") alertUserPass(webRes.Font_AccountPwdCannotEmpty, 1);
  else {
    if (flag) return;
    flag = !0;
    var r = IsMobile() ? window.screen.width + "*" + window.screen.height : "";
    $.ajax({
      url: "/LoadData/Registered.ashx",
      data: { txtUser: n, txtPassword: i, screenSize: r, t: t },
      type: "post",
      dataType: "json",
      cache: !1,
      timeout: t1,
      error: function (n) {
        flag = !1;
        n.status == 400 && fnLoginOperate(n.responseJSON);
      },
      success: function (n) {
        flag = !1;
        fnLoginOperate(n);
      },
    });
  }
}
function fnLoginOperate(n) {
  n.stus && n.stus == "0"
    ? ((IsLoginedIndex = !0),
      fnLoginOperateOther(n),
      GetLogined(),
      $("#txtUser,#txtPassword").val(""),
      n.IsMajAch == 0
        ? (n.SData == "" && showGiftAD(), Addapp(n.SData))
        : showGiftAD(),
      IsIOSBrowser(),
      $.fn.addCache("temp_announcement", ""),
      $.fn.addCache("isReadDwMessage", "0"))
    : n.stus && n.stus == "1"
    ? (location.href = "/end.html")
    : n.stus && n.stus == "-2"
    ? fnSetVoicePass(n)
    : n.StatusCode == 404
    ? (location.href = n.ResponseUri)
    : n.msg == webRes.Font_pdtxt3_AccountsEnterIsZero
    ? ($("#txtUser").val(""),
      $("#txtPassword").val(""),
      $.fn.confirm(
        n.msg,
        function () {
          openService("/Aspx/Kfzx.aspx");
        },
        null,
        webRes.Font_Info,
        webRes.Font_Czzq_14,
        webRes.Font_Cancel
      ))
    : (layer.closeAll(), fnLayerPw(n));
}
function fnLoginOperateLoginVerify(n) {
  layer.closeAll();
  fnLoginOperate(n);
}
function fnLoginOperateOther(n) {
  var t, i;
  $("#account span").text(n.account);
  $("#nickName").text(n.nickName);
  $("#phone").val(n.phone);
  $("#hiddenMajorDomoF").val(n.s_isMajorF);
  n.MbLv &&
    $("#lteLevel")
      .removeClass()
      .addClass("memLevel_" + n.MbLv);
  $("#lteLevel").text(n.Lv);
  n.money &&
    $(".mainPoints")
      .text("$ " + OmittedMoney(n.money))
      .prop("title", "$ " + n.money);
  ShowFiveLink(n.platform);
  fnSetMemCenter(n);
  CheckTransferStatus(n.transfer);
  n.IsAgentDomainSpecialAccount &&
    ($("#aKscz").css("display", "none"), $("#aKscz2").css("display", "none"));
  n.IsGiftGold
    ? ((t =
        "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=A', 870, " +
        (IsYn ? 800 : IsCn ? 790 : 730) +
        ")"),
      fnSetHref("aGiftGold", t),
      $("#aGiftGold").show())
    : $("#aGiftGold").hide();
  n.IsVoucher
    ? ((i =
        "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=A&action2=2', 870, " +
        (IsYn ? 800 : IsCn ? 790 : 730) +
        ")"),
      fnSetHref("aGiftVoucher", i),
      $("#aGiftVoucher").show())
    : $("#aGiftVoucher").hide();
}
function fnSetVoicePass(n, t = "") {
  layer.closeAll();
  voicePassData = n;
  t != "" && (voicePassData.pw = t);
  fnOpenVoicePassLayer(n.account);
}
function fnOpenVoicePassLayer(n) {
  var t = layer.open({
    type: 2,
    title: !1,
    content: ["/Aspx/SetVoicePass.aspx?account=" + n],
    shade: 0.3,
    shift: -1,
    area: [IsYn ? "420px" : "392px", IsYn ? "415px" : "410px"],
    skin: "IELoadPage",
    closeBtn: 0,
    fix: !IsMobile(),
    end: function () {
      isIndex()
        ? ($("#txtUser,#txtPassword").val(""), (voicePassData = null))
        : F52();
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
function End() {
  $.ajax({
    url: "/LoadData/End.ashx",
    type: "get",
    cache: !1,
    timeout: t1,
    error: function () {},
    success: function () {
      depositAreaClose();
      refreshData = 1;
      IsLoginedIndex = !1;
      GetLogined();
    },
  });
}
function SubmitEnterIndex(n) {
  n.keyCode == 13 && ($(n.target).blur(), UserPassIsEmpty());
}
function fnPlatformMenu(n, t) {
  var u = $("." + n),
    i = $("." + t),
    r = ".layui-layer-tips";
  u.hover(
    function () {
      setTimeout(
        function () {
          isGameMenuOpen = !0;
          i.stop(!0, !0).slideDown(200);
        },
        IsMobile() ? 100 : 0
      );
    },
    function (n) {
      $(r).size() > 0
        ? fnMouseInElement(i, n) ||
          ((isGameMenuOpen = !1), i.slideUp(200), $(r).hide())
        : ((isGameMenuOpen = !1), i.slideUp(200), $(r).hide());
    }
  );
}
function fnMouseInElement(n, t) {
  if (n.size() === 0) return !1;
  var s = t || window.event,
    i = t.clientX,
    r = t.clientY,
    u = n.offset().left,
    f = n.offset().top,
    e = n.width(),
    o = n.height();
  return u <= i && i <= u + e && f <= r && r < f + o ? !0 : !1;
}
function fnTimeBBSGift() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "22" },
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    success: function (n) {
      SetBBS(n);
    },
  });
}
function fnAddEnd() {
  fnSetHref("aTvpd", "javascript:void(0);");
  fnSetHref("aBBS", "javascript:void(0);");
  $("#aTvpd,#aBBS").removeAttr("target");
  createXmlObj();
  fnTimeMemberLogined();
  SetLinkPicCycle();
}
function SetNoBBS() {
  var n = {
    s_Tvpd:
      "javascript:fnGetTip('" + webRes.Font_Platform3 + "', 'aTvpd',3,1);",
    s_BBS: "javascript:fnGetTip('" + webRes.Font_Platform3 + "','aBBS');",
    s_isMajorF: !1,
    s_isMajorTest: !1,
  };
  SetBBS(n);
}
function SetBBS(n) {
  if (($("#aBBS,#aTvpd,#aSpotLive").removeAttr("target"), isNE(n.s_Tvpd))) {
    var t = n.s_Tvpd.indexOf(webRes.Font_Maintain.toLowerCase()) > -1 ? 0 : 1;
    fnPlatformSetOpen("aTvpd", t, null, 2);
    n.s_isMajorF
      ? fnSetHref(
          "aTvpd",
          "javascript:openNewWindowCheckExist('/Aspx/Tvpd.aspx?mobile=0', 'aTvpd')"
        )
      : fnSetHref("aTvpd", n.s_Tvpd);
  } else
    fnIndexSetOpen("#aTvpd", 1),
      fnSetHref(
        "aTvpd",
        "javascript:openNewWindowCheckExist('/Aspx/Tvpd.aspx?mobile=0', 'aTvpd')"
      );
}
function SetLinkPicCycle() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "2" },
    type: "get",
    cache: !1,
    timeout: t1,
    success: function (n) {
      n = htmlDecode(n);
      UpdatePicCycle(n);
    },
  });
}
function UpdatePicCycle(n) {
  for (var t, r = "Index_LeftPic1", u = n.split("|"), i = 0; i < u.length; i++)
    if (((t = $("#" + r + i)), t.size() > 0)) {
      var f = u[i].split("$$"),
        e = f[0],
        o = f[1];
      document.getElementById(r + i).href = e;
      o == "1" ? t.attr("target", "_blank") : t.removeAttr("target");
      e == "javascript:void(0);"
        ? t.css("cursor", "default")
        : t.css("cursor", "pointer");
    }
}
function SetIndexMessage() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "33" },
    type: "get",
    dataType: "json",
    cache: !1,
    timeout: t1,
    success: function (n) {
      SetImport(n.f_data3);
      SetMarquee(n.f_data4);
      UpdatePicCycle(n.f_data2);
    },
  });
}
function SetImport(n) {
  var i, t, r, u;
  if (n != null && n != "") {
    for (i = "", t = 0; t < n.length; t++)
      (r = n[t]),
        (u =
          '<td><div style="color: white;margin-right:20px;cursor: pointer;"><a href="#impMsg' +
          t +
          '" class="fancybox">{0}</a></div><div class="popUp" id="impMsg' +
          t +
          '" data-id="' +
          n[t].f_id +
          '" style="display: none;"><div class="popUp_title"><div class="popUp_titleText">{1}</div></div><div class="popUp_in"><div class="popUp_ann">{2}</div></div></div></td>'),
        (i += u
          .replace("{0}", r.f_Title)
          .replace("{1}", r.f_Title)
          .replace("{2}", r.f_content));
    len1 != i &&
      ((len1 = i),
      n.length == 1 && n[0].f_Title.length <= 12
        ? $("#divImport1").html("<div>" + i + "</div>")
        : $("#divImport1").html(
            '<div class="marqueeImptMsg" onmouseout="play(this)" onmousemove="pause(this)");"><table style="display: flex;align-items: center;height: 40px;"><tr>' +
              i +
              "</tr></table></div>"
          ),
      $(".important_div,.warn").show2(),
      $("#divImport1 .popUp .popUp_ann a").length > 0 &&
        $("#divImport1 .popUp .popUp_ann a").each(function () {
          var n =
            "javascript:openNewWindowAutoHeightName('" +
            $(this).attr("href") +
            "', 870, 730);";
          $(this).attr("href", n);
        }));
    $("#divImport1 tr").css(
      "animationDuration",
      $("#divImport1 tr").width() / 20 + "s"
    );
    $(".fancybox-close").on("click", function () {
      window.location.href = '/web'
    })
    $(".fancybox").fancybox({
      padding: [15, 30, 15, 30],
      scrolling: "no",
      afterShow: function () {
        $(".fancybox-close").on("click", function () {
          window.location.href = '/web'
          var n = $.fn.getCache("imptAnnouncement"),
            t;
          n
            ? n.includes($(".fancybox-inner .popUp").data("id")) ||
              ((t = n.split("|")),
              t.push($(".fancybox-inner .popUp").data("id")),
              $.fn.addCache("imptAnnouncement", t.join("|")))
            : $.fn.addCache(
                "imptAnnouncement",
                $(".fancybox-inner .popUp").data("id")
              );
        });
      },
    });
    $(".depositArea:visible").length > 0
      ? (regSuccessData = n)
      : showImportantAnnouncement(n);
  } else (len1 = ""), $(".important_div,.warn").hide();
}
function showImportantAnnouncement(n) {
  if (!($(".fancybox-overlay").length > 0)) {
    var t = $.fn.getCache("imptAnnouncement");
    t
      ? !t.includes(n[0].f_id) &&
        $(".icon_impNews").size() > 0 &&
        ($("#divImport1 .fancybox").first().click(),
        $(".fancybox-overlay").off("click"),
        $("#txtUser, #txtPassword").blur())
      : ($("#divImport1 .fancybox").first().click(),
        $(".fancybox-overlay").off("click"),
        $("#txtUser, #txtPassword").blur());
  }
}
function play(n) {
  $("." + n.className)
    .find("table")
    .css("-webkit-animation-play-state", "play");
  $("." + n.className)
    .find("tr")
    .css("-webkit-animation-play-state", "play");
}
function pause(n) {
  $("." + n.className)
    .find("table")
    .css("-webkit-animation-play-state", "paused");
  $("." + n.className)
    .find("tr")
    .css("-webkit-animation-play-state", "paused");
}
function SetMarquee(n) {
  if (isSize("#runMsgDiv")) {
    var t = "";
    n &&
      n.length > 0 &&
      (t = n
        .map(function (n) {
          return (
            '<div class="marqueeItem" data-id="' +
            n.f_id +
            '">' +
            n.f_content
              .replace(/《/g, "<")
              .replace(/》/g, ">")
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, "")
              .replace(/white-space: normal;/g, "")
              .replace(/<br\s*\/?>/g, "")
              .replace(/<div>/g, "")
              .replace(/<div style="font-size:16px">/g, "")
              .replace(/<\/div>/g, "") +
            "</div>"
          );
        })
        .join(""));
    $("#runMsgDiv").html(
      '<div class="marquee hoverable"><div class="marqueeDiv" style="height:45px;">' +
        t +
        "</div></div>"
    );
    calcSpeed(90);
    $(window).resize(function () {
      $(".marquee").width($("#runMsgDiv").width());
    });
    $(".marquee").width($("#runMsgDiv").width());
    IsPrivateDomain || fnMarqueeClick();
  }
}
function calcSpeed(n) {
  for (
    var i = document.querySelectorAll(".marquee .marqueeDiv"), r, u, t = 0;
    t < i.length;
    t++
  )
    (r = i[t].offsetWidth),
      (u = r / n),
      (i[t].style.animationDuration = u + "s");
}
function GetDay() {
  return ["日", "一", "二", "三", "四", "五", "六"][serverTime.getDay()];
}
function layerQr(n, t) {
  t =
    '<div style="text-align:center;"><img alt="" src="' +
    t +
    '" width="120" height="117" /></div>';
  layer.open({
    type: 1,
    id: "layerQr",
    title: n,
    content: t,
    shade: 0,
    shift: -1,
  });
}
function layerID(n, t, i, r, u) {
  t =
    '<div style="text-align:center;"><img alt="" src="' +
    t +
    '" width="120" height="117" /><br/><span style="font:12px bold;color:#333;">ID:' +
    i +
    "</span></div>";
  layer.open({
    type: 1,
    id: "layerID_" + n,
    area: [r + "px", u + "px"],
    title: n,
    content: t,
    shade: 0,
    shift: -1,
  });
}
function fnOpenImportMsg(n) {
  var i = $("#spanWarn1" + n).text(),
    t = $("#spanWarn2" + n).html();
  t = t.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  layer10(i, t);
  $(".layui-layer-title").css({ height: "auto", "white-space": "unset" });
}
function HideFiveLink() {
  var t, n;
  for (
    fnPlatformCss({
      f_isCNFOpen: 1,
      f_isKUOpen: 1,
      f_isABOpen: 1,
      f_isAGSportOpen: 1,
      f_isFishOpen: 1,
      f_isCNFFishOpen: 1,
      f_isCMDOpen: 1,
      f_isBallOpen: 1,
      f_isChatroomOpen: 1,
      f_isJsSportOpen: 1,
      f_isBNGOpen: 1,
      f_isOgOpen: 1,
      f_isBBINOpen: 1,
      f_isAgOpen: 1,
      f_isHgOpen: 1,
      f_isAGFishOpen: 1,
      f_isCQ9Open: 1,
      f_isCQ9FishOpen: 1,
      f_isDTOpen: 1,
      f_isVROpen: 1,
      f_isLCOpen: 1,
      f_isKYOpen: 1,
      f_isPINOpen: 1,
      f_isCNFChessOpen: 1,
      f_isSBOpen: 1,
      f_isKYFishOpen: 1,
      f_isNBBOpen: 1,
      f_isLCFishOpen: 1,
      f_isBBINBallOpen: 1,
      f_isWMOpen: 1,
      f_isDGOpen: 1,
      f_isSAOpen: 1,
      f_isKAOpen: 1,
      f_isKAFishOpen: 1,
      f_isSMOpen: 1,
      f_isDSOpen: 1,
      f_isDSFishOpen: 1,
      f_isPSOpen: 1,
      f_isIMOpen: 1,
      f_isSBEsportOpen: 1,
      f_isAESOpen: 1,
      f_isKSOpen: 1,
      f_isPGOpen: 1,
      f_isEVOOpen: 1,
      f_isAIOpen: 1,
      f_isFTGOpen: 1,
      f_isOBSport: 1,
      f_isOBLive: 1,
      f_isOBEsport: 1,
      f_isWGOpen: 1,
      f_isAGVNFishOpen: 1,
      f_isFCOpen: 1,
      f_isOBFishOpen: 1,
    }),
      t = [
        "aBall",
        "sportid",
        "kunav",
        "chatroomlts",
        "aColor",
        "hg",
        "ag",
        "aCNF",
        "aDJ",
        "og",
        "bbin",
        "aAGFish",
        "aCNFFish",
        "ab",
        "cmd",
        "sportBBIN",
        "bng",
        "ku",
        "sportAG",
        "cq9",
        "cq9Fish",
        "dt",
        "vr",
        "lc",
        "ky",
        "pin",
        "aCNFChess",
        "sb",
        "kyFish",
        "nbb",
        "lcFish",
        "bbinBall",
        "wm",
        "dg",
        "sa",
        "nbb_new",
        "ka",
        "kaFish",
        "smLive",
        "ds",
        "dsFish",
        "ps",
        "im",
        "sbEsport",
        "aes",
        "ks",
        "pg",
        "evo",
        "ai",
        "ftg",
        "obSport",
        "obLive",
        "obEsport",
        "wg",
        "hot_nbb",
        "hot_ku",
        "hot_ball",
        "hot_3d",
        "liveid",
        "slotid",
        "ballid",
        "fishid",
        "chessid",
        "aAGVNFish",
        "fc",
        "obFish",
      ],
      n = 0;
    n < t.length;
    n++
  )
    fnSet_layerTip(t[n], webRes.Font_Platform3);
  for (n = 0; n < t.length; n++)
    fnSet_layerTip(t[n] + "2", webRes.Font_Platform3);
  fnSet_layerTip("ku3", webRes.Font_Platform3);
}
function fnSet_layerTip(n, t) {
  var r = [
      "ag",
      "bbin",
      "ab",
      "og",
      "hg",
      "aCNF",
      "cmd",
      "sportBBIN",
      "aCNFFish",
      "aAGFish",
      "bng",
      "ku",
      "aBall",
      "sportAG",
      "cq9",
      "cq9Fish",
      "dt",
      "aColor",
      "vr",
      "chatroomlts",
      "lc",
      "ky",
      "pin",
      "aCNFChess",
      "sb",
      "kyFish",
      "nbb",
      "lcFish",
      "bbinBall",
      "ku3",
      "wm",
      "dg",
      "sa",
      "smLive",
      "im",
      "sbEsport",
      "aes",
      "ks",
      "pg",
      "evo",
      "ai",
      "ftg",
      "obSport",
      "obLive",
      "obEsport",
      "hot_nbb",
      "hot_ku",
      "hot_ball",
      "hot_3d",
      "fc",
      "obFish",
    ],
    i;
  IsTw &&
    (r = [
      "ag",
      "bbin",
      "ab",
      "og",
      "hg",
      "aCNF",
      "cmd",
      "sportBBIN",
      "aCNFFish",
      "bng",
      "ku",
      "chatroomlts",
      "pin",
      "aBall",
      "nbb",
      "ku3",
      "wm",
      "dg",
      "sa",
      "ka",
      "kaFish",
      "smLive",
      "ds",
      "dsFish",
      "ks",
      "ftg",
      "obSport",
      "obLive",
      "obEsport",
      "wg",
      "obFish",
    ]);
  IsYn &&
    (r = [
      "ag",
      "bbin",
      "aCNF",
      "cmd",
      "sportBBIN",
      "bng",
      "aBall",
      "sportAG",
      "ku",
      "pin",
      "sb",
      "nbb",
      "bbinBall",
      "ku3",
      "aColor",
      "wm",
      "dg",
      "sa",
      "smLive",
      "im",
      "sbEsport",
      "aes",
      "ks",
      "pg",
      "evo",
      "ftg",
      "lc",
      "lcFish",
      "obSport",
      "obLive",
      "obEsport",
      "AGVNFish",
      "fc",
      "obFish",
    ]);
  i = r.indexOf(n) >= 0 ? 1 : 3;
  n.indexOf("2") > -1
    ? ($("#" + n)
        .parent()
        .removeClass("off_maintain"),
      $("#" + n).removeAttr("href"),
      $("#" + n).prop("tagName") == "A" && n != "kunav"
        ? fnSetOnclick3(
            n,
            "javascript:fnGetTip('" + t + "', '" + n + "',3," + i + ");"
          )
        : fnSetOnclick3(
            n,
            "javascript:fnGetTip('" + t + "', '" + n + "',3," + i + ");"
          ))
    : n == "ku3"
    ? ($("#" + n).removeClass("off"),
      $("#" + n).removeAttr("href"),
      fnSetHref(
        n,
        "javascript:fnGetTip('" + t + "', '" + n + "',3," + i + ");"
      ))
    : $("#" + n).prop("tagName") == "A" && n != "kunav"
    ? (fnSetHref(
        n,
        "javascript:fnGetTip('" + t + "', '" + n + "',3," + i + ");"
      ),
      $("#" + n).removeAttr("target"))
    : fnSetOnclick(n, "javascript:fnGetTip('" + t + "', '" + n + "',3, 1);");
}
function ShowFiveLink(n) {
  fnSetHrefOrOnclick(
    "aBall",
    "javascript:openNewWindowCheckExist('/Platform/LoginBallPlatform.aspx?gamenum=1&isphone=0','aBall')"
  );
  fnSetHrefOrOnclick(
    "sportid",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=NBB')"
  );
  fnSetHrefOrOnclick(
    "aColor",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=ColorBall');"
  );
  fnSetHrefOrOnclick(
    "hg",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=HG');"
  );
  fnSetHrefOrOnclick(
    "aCNF",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=3D')"
  );
  fnSetHrefOrOnclick(
    "ag",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AG')"
  );
  fnSetHrefOrOnclick(
    "og",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=OG')"
  );
  fnSetHrefOrOnclick(
    "chatroomlts",
    "javascript:openNewWindowAutoHeightName('/Chatroom/ChatroomList.aspx', 1100, 800)"
  );
  fnSetHrefOrOnclick(
    "bbin",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=BBIN')"
  );
  fnSetHrefOrOnclick(
    "aAGFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AG&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "aAGVNFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AGVNFish&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "aCNFFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=3D&game=3dFish')"
  );
  fnSetHrefOrOnclick(
    "ab",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AB')"
  );
  fnSetHrefOrOnclick(
    "cmd",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=CMD')"
  );
  fnSetHrefOrOnclick(
    "sportBBIN",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=BBIN&game=Sport')"
  );
  fnSetHrefOrOnclick(
    "bng",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=BNG')"
  );
  fnSetHrefOrOnclick(
    "ku",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KU')"
  );
  fnSetHrefOrOnclick(
    "liveid",
    "javascript:layerframePlatformPurseCheckMobile('/Platform/MypursePlatfom.aspx?action=B&type=KU')"
  );
  fnSetHrefOrOnclick(
    "slotid",
    "javascript:layerframePlatformPurseCheckMobile('/Platform/MypursePlatfom.aspx?action=B&type=3D')"
  );
  fnSetHrefOrOnclick(
    "ballid",
    "javascript:layerframePlatformPurseCheckMobile('/Platform/MypursePlatfom.aspx?action=B&type=ColorBall')"
  );
  fnSetHrefOrOnclick(
    "fishid",
    "javascript:layerframePlatformPurseCheckMobile('/Platform/MypursePlatfom.aspx?action=B&type=3D&game=3dFish')"
  );
  fnSetHrefOrOnclick(
    "chessid",
    "javascript:layerframePlatformPurseCheckMobile('/Platform/MypursePlatfom.aspx?action=B&type=3D&game=3dChess')"
  );
  fnSetHrefOrOnclick(
    "kunav",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KU')"
  );
  fnSetHrefOrOnclick(
    "sportAG",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AG&game=Sport')"
  );
  fnSetHrefOrOnclick(
    "cq9",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=CQ9')"
  );
  fnSetHrefOrOnclick(
    "cq9Fish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=CQ9&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "dt",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=DT')"
  );
  fnSetHrefOrOnclick(
    "vr",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=VR')"
  );
  fnSetHrefOrOnclick(
    "lc",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=LC')"
  );
  fnSetHrefOrOnclick(
    "ky",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KY')"
  );
  fnSetHrefOrOnclick(
    "pin",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=PIN')"
  );
  fnSetHrefOrOnclick(
    "aCNFChess",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=3D&game=3dChess')"
  );
  fnSetHrefOrOnclick(
    "sb",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=SB')"
  );
  fnSetHrefOrOnclick(
    "kyFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KY&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "nbb",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=NBB')"
  );
  fnSetHrefOrOnclick(
    "nbb_new",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=NBB_new')"
  );
  fnSetHrefOrOnclick(
    "lcFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=LC&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "bbinBall",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=BBIN&game=Ltlottery')"
  );
  fnSetHrefOrOnclick(
    "wm",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=WM')"
  );
  fnSetHrefOrOnclick(
    "dg",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=DG')"
  );
  fnSetHrefOrOnclick(
    "sa",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=SA')"
  );
  fnSetHrefOrOnclick("ktalk", "openIM()");
  fnSetHrefOrOnclick(
    "ka",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KA')"
  );
  fnSetHrefOrOnclick(
    "kaFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KA&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "smLive",
    "javascript:openNewWindowCheckExist('/game/SMApi.aspx', 'smLive')"
  );
  fnSetHrefOrOnclick(
    "ds",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=DS')"
  );
  fnSetHrefOrOnclick(
    "dsFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=DS&game=Fish')"
  );
  fnSetHrefOrOnclick(
    "ps",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=PS')"
  );
  fnSetHrefOrOnclick(
    "im",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=IM')"
  );
  fnSetHrefOrOnclick(
    "sbEsport",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=SB&game=esport')"
  );
  fnSetHrefOrOnclick(
    "aes",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AES')"
  );
  fnSetHrefOrOnclick(
    "ks",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KS')"
  );
  fnSetHrefOrOnclick(
    "pg",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=PG')"
  );
  fnSetHrefOrOnclick(
    "evo",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=EVO')"
  );
  fnSetHrefOrOnclick(
    "ai",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=AI')"
  );
  fnSetHrefOrOnclick(
    "ftg",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=FTG')"
  );
  fnSetHrefOrOnclick(
    "obSport",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=OBSport')"
  );
  fnSetHrefOrOnclick(
    "obLive",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=OBLive')"
  );
  fnSetHrefOrOnclick(
    "obEsport",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=OBEsport')"
  );
  fnSetHrefOrOnclick(
    "wg",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=WG')"
  );
  fnSetHrefOrOnclick(
    "fc",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=FC')"
  );
  fnSetHrefOrOnclick(
    "obFish",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=OBFish')"
  );
  fnSetHrefOrOnclick(
    "hot_ku",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=KU')"
  );
  fnSetHrefOrOnclick(
    "hot_nbb",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=NBB')"
  );
  fnSetHrefOrOnclick(
    "hot_ball",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=ColorBall');"
  );
  fnSetHrefOrOnclick(
    "hot_3d",
    "javascript:layerframePlatformPurse('/Platform/MypursePlatfom.aspx?action=B&type=3D')"
  );
  $("#aBall").attr("target", aBall);
  IsMobile() || $("#sportid").attr("target", "");
  n != "" &&
    (setPlatformOpen(
      "aBall",
      n.f_isJsSportOpen,
      IsLegalShowTWOne ? "EX體育" : webRes.Font_Platform_f_isJsSportOpen,
      n.f_isJsSportOpen_str
    ),
    setPlatformOpen(
      "sportid",
      n.f_isNBBOpen,
      webRes.Font_NBBAccounts,
      n.f_isNBBOpen_str
    ),
    setPlatformOpen(
      "hg",
      n.f_isHgOpen,
      webRes.Font_Platform_f_isHgOpen,
      n.f_isHgOpen_str
    ),
    setPlatformOpen(
      "aColor",
      n.f_isBallOpen,
      webRes.Font_Platform_f_isBallOpen,
      n.f_isBallOpen_str
    ),
    setPlatformOpen(
      "aCNF",
      n.f_isCNFOpen,
      webRes.Font_Platform_f_isCNFOpen,
      n.f_isCNFOpen_str
    ),
    setPlatformOpen("ag", n.f_isAgOpen, webRes.Font_AGCasino, n.f_isAgOpen_str),
    setPlatformOpen(
      "og",
      n.f_isOgOpen,
      webRes.Font_Platform_f_isOgOpen,
      n.f_isOgOpen_str
    ),
    setPlatformOpen(
      "bbin",
      n.f_isBBINOpen,
      webRes.Font_Platform_f_isBBINOpen,
      n.f_isBBINOpen_str
    ),
    setPlatformOpen(
      "chatroomlts",
      n.f_isChatroomOpen,
      webRes.Font_Platform_f_isChatroomOpen,
      n.f_isChatroomOpen_str
    ),
    setPlatformOpen(
      "aAGFish",
      n.f_isFishOpen,
      webRes.Font_Platform_f_isFishOpen,
      n.f_isFishOpen_str
    ),
    setPlatformOpen(
      "aAGVNFish",
      n.f_isAGVNFishOpen,
      webRes.Font_Platform_f_isAGVNFishOpen,
      n.f_isAGVNFishOpen_str
    ),
    setPlatformOpen(
      "aCNFFish",
      n.f_isCNFFishOpen,
      webRes.Font_CNFFish,
      n.f_isCNFFishOpen_str
    ),
    setPlatformOpen(
      "ab",
      n.f_isABOpen,
      webRes.Font_isABCasino,
      n.f_isABOpen_str
    ),
    setPlatformOpen(
      "cmd",
      n.f_isCMDOpen,
      webRes.Font_Platform_f_isCMDOpen,
      n.f_isCMDOpen_str
    ),
    setPlatformOpen(
      "bng",
      n.f_isBNGOpen,
      webRes.Font_Platform_f_isBNGOpen,
      n.f_isBNGOpen_str
    ),
    setPlatformOpen(
      "ku",
      n.f_isKUOpen,
      webRes.Font_Platform_f_isKUOpen,
      n.f_isKUOpen_str
    ),
    setPlatformOpen(
      "liveid",
      n.f_isKUOpen,
      webRes.Font_Platform_f_isKUOpen,
      n.f_isKUOpen_str
    ),
    setPlatformOpen(
      "slotid",
      n.f_isCNFOpen,
      webRes.Font_Platform_f_isCNFOpen,
      n.f_isCNFOpen_str
    ),
    setPlatformOpen(
      "ballid",
      n.f_isBallOpen,
      webRes.Font_Platform_f_isBallOpen,
      n.f_isBallOpen_str
    ),
    setPlatformOpen(
      "fishid",
      n.f_isCNFFishOpen,
      webRes.Font_CNFFish,
      n.f_isCNFFishOpen_str
    ),
    setPlatformOpen(
      "chessid",
      n.f_isCNFChessOpen,
      webRes.Font_Platform_f_isCNFChessOpen,
      n.f_isCNFChessOpen_str
    ),
    setPlatformOpen(
      "kunav",
      n.f_isKUOpen,
      webRes.Font_Platform_f_isKUOpen,
      n.f_isKUOpen_str
    ),
    setPlatformOpen(
      "sportAG",
      n.f_isAGSportOpen,
      webRes.Font_Platform_f_isAGSportOpen,
      n.f_isAGSportOpen_str
    ),
    setPlatformOpen(
      "cq9",
      n.f_isCQ9Open,
      webRes.Font_CQ9Accounts,
      n.f_isCQ9Open_str
    ),
    setPlatformOpen(
      "cq9Fish",
      n.f_isCQ9FishOpen,
      webRes.Font_Platform_f_isCQ9FishOpen,
      n.f_isCQ9FishOpen_str
    ),
    setPlatformOpen(
      "dt",
      n.f_isDTOpen,
      webRes.Font_DTAccounts,
      n.f_isDTOpen_str
    ),
    setPlatformOpen(
      "vr",
      n.f_isVROpen,
      webRes.Font_VRAccounts,
      n.f_isVROpen_str
    ),
    setPlatformOpen(
      "lc",
      n.f_isLCOpen,
      webRes.Font_LCAccounts,
      n.f_isLCOpen_str
    ),
    setPlatformOpen(
      "ky",
      n.f_isKYOpen,
      webRes.Font_KYAccounts,
      n.f_isKYOpen_str
    ),
    setPlatformOpen(
      "pin",
      n.f_isPINOpen,
      webRes.Font_PINAccounts,
      n.f_isPINOpen_str
    ),
    setPlatformOpen(
      "aCNFChess",
      n.f_isCNFChessOpen,
      webRes.Font_Platform_f_isCNFChessOpen,
      n.f_isCNFChessOpen_str
    ),
    setPlatformOpen(
      "sb",
      n.f_isSBOpen,
      webRes.Font_Platform_f_isSBOpen,
      n.f_isSBOpen_str
    ),
    setPlatformOpen(
      "kyFish",
      n.f_isKYFishOpen,
      webRes.Font_Platform_f_isKYFishOpen,
      n.f_isKYFishOpen_str
    ),
    setPlatformOpen(
      "nbb",
      n.f_isNBBOpen,
      webRes.Font_NBBAccounts,
      n.f_isNBBOpen_str
    ),
    setPlatformOpen(
      "nbb_new",
      n.f_isNBBOpen,
      webRes.Font_NBB_New,
      n.f_isNBBOpen_str
    ),
    setPlatformOpen(
      "lcFish",
      n.f_isLCFishOpen,
      webRes.Font_Platform_f_isLCFishOpen,
      n.f_isLCFishOpen_str
    ),
    setPlatformOpen(
      "bbinBall",
      n.f_isBBINBallOpen,
      webRes.Font_Platform_f_isBBINBallOpen,
      n.f_isBBINBallOpen_str
    ),
    setPlatformOpen(
      "wm",
      n.f_isWMOpen,
      webRes.Font_WMAccounts,
      n.f_isWMOpen_str
    ),
    setPlatformOpen(
      "dg",
      n.f_isDGOpen,
      webRes.Font_DGAccounts,
      n.f_isDGOpen_str
    ),
    setPlatformOpen(
      "sa",
      n.f_isSAOpen,
      webRes.Font_SAAccounts,
      n.f_isSAOpen_str
    ),
    setPlatformOpen(
      "ktalk",
      n.f_isKTalkOpen,
      webRes.Font_KTalkAccounts,
      n.f_isKTalkOpen_str
    ),
    setPlatformOpen(
      "ka",
      n.f_isKAOpen,
      webRes.Font_Platform_f_isKAOpen,
      n.f_isKAOpen_str
    ),
    setPlatformOpen(
      "kaFish",
      n.f_isKAFishOpen,
      webRes.Font_Platform_f_isKAFishOpen,
      n.f_isKAFishOpen_str
    ),
    setPlatformOpen(
      "smLive",
      n.f_isSMOpen,
      webRes.Font_Platform_f_isSMOpen,
      n.f_isSMOpen_str
    ),
    setPlatformOpen(
      "ds",
      n.f_isDSOpen,
      webRes.Font_DSAccounts,
      n.f_isDSOpen_str
    ),
    setPlatformOpen(
      "dsFish",
      n.f_isDSFishOpen,
      webRes.Font_Platform_f_isDSFishOpen,
      n.f_isDSFishOpen_str
    ),
    setPlatformOpen(
      "ps",
      n.f_isPSOpen,
      webRes.Font_PSAccounts,
      n.f_isPSOpen_str
    ),
    setPlatformOpen(
      "im",
      n.f_isIMOpen,
      webRes.Font_Platform_f_isIMOpen,
      n.f_isIMOpen_str
    ),
    setPlatformOpen(
      "sbEsport",
      n.f_isSBEsportOpen,
      webRes.Font_Platform_f_isSBEsportOpen,
      n.f_isSBEsportOpen_str
    ),
    setPlatformOpen(
      "aes",
      n.f_isAESOpen,
      webRes.Font_Platform_f_isAESOpen,
      n.f_isAESOpen_str
    ),
    setPlatformOpen(
      "ks",
      n.f_isKSOpen,
      webRes.Font_Platform_f_isKSOpen,
      n.f_isKSOpen_str
    ),
    setPlatformOpen(
      "pg",
      n.f_isPGOpen,
      webRes.Font_Platform_f_isPGOpen,
      n.f_isPGOpen_str
    ),
    setPlatformOpen(
      "evo",
      n.f_isEVOOpen,
      webRes.Font_Platform_f_isEVOOpen,
      n.f_isEVOOpen_str
    ),
    setPlatformOpen(
      "ai",
      n.f_isAIOpen,
      webRes.Font_Platform_f_isAIOpen,
      n.f_isAIOpen_str
    ),
    setPlatformOpen(
      "ftg",
      n.f_isFTGOpen,
      webRes.Font_Platform_f_isFTGOpen,
      n.f_isFTGOpen_str
    ),
    setPlatformOpen(
      "obSport",
      n.f_isOBSportOpen,
      webRes.Font_Platform_f_isOBSportOpen,
      n.f_isOBSportOpen_str
    ),
    setPlatformOpen(
      "obLive",
      n.f_isOBLiveOpen,
      webRes.Font_Platform_f_isOBLiveOpen,
      n.f_isOBLiveOpen_str
    ),
    setPlatformOpen(
      "obEsport",
      n.f_isOBESportOpen,
      webRes.Font_Platform_f_isOBESportOpen,
      n.f_isOBESportOpen_str
    ),
    setPlatformOpen(
      "wg",
      n.f_isWGOpen,
      webRes.Font_Platform_f_isWGOpen,
      n.f_isWGOpen_str
    ),
    setPlatformOpen(
      "fc",
      n.f_isFCOpen,
      webRes.Font_Platform_f_isFCOpen,
      n.f_isFCOpen_str
    ),
    setPlatformOpen(
      "obFish",
      n.f_isOBFishOpen,
      webRes.Font_Platform_f_isOBFishOpen,
      n.f_isOBFishOpen_str
    ),
    (sportOpen = n.f_isJsSportOpen != "0"),
    setPlatformOpen(
      "hot_nbb",
      n.f_isNBBOpen,
      webRes.Font_NBBAccounts,
      n.f_isNBBOpen_str
    ),
    setPlatformOpen(
      "hot_ball",
      n.f_isBallOpen,
      webRes.Font_Platform_f_isBallOpen,
      n.f_isBallOpen_str
    ),
    setPlatformOpen(
      "hot_ku",
      n.f_isKUOpen,
      webRes.Font_Platform_f_isKUOpen,
      n.f_isKUOpen_str
    ),
    setPlatformOpen(
      "hot_3d",
      n.f_isCNFOpen,
      webRes.Font_Platform_f_isCNFOpen,
      n.f_isCNFOpen_str
    ));
}
function setPlatformOpen(n, t, i, r) {
  var o = n == "chatroomlts",
    e = n == "ktalk",
    u,
    s,
    f;
  IsTw && n == "nbb_new" && (i = i.replace("{0}", LogoName));
  $("#" + n).size() > 0 &&
    (t == "0" || t == "4" || t == "5"
      ? o
        ? fnSet_layerTip(n, webRes.Font_Platform_ChatroomMember)
        : e
        ? ($("#" + n).show(),
          isNullOrEmpty(r)
            ? fnSet_layerTip(n, webRes.Font_Maintain + "！")
            : ((u =
                ' <span style="color:red;font-weight:bold;">' +
                r.replace("南", "tháng").replace("越", "ngày") +
                "</span>"),
              fnSet_layerTip(
                n,
                webRes.Font_Platform_Time.replace("{0}", i).replace("{1}", u),
                s
              )))
        : isNullOrEmpty(r)
        ? ((f = t == "4" ? "！" : t == "5" ? "！！" : ""),
          fnSet_layerTip(
            n,
            webRes.Font_Platform_Maintain.replace("{0}", i) + f
          ))
        : ((u =
            ' <span style="color:red;font-weight:bold;">' +
            r.replace("南", "tháng").replace("越", "ngày") +
            "</span>"),
          fnSet_layerTip(
            n,
            webRes.Font_Platform_Time.replace("{0}", i).replace("{1}", u),
            s
          ))
      : t == "2"
      ? o
        ? fnSet_layerTip(n, webRes.Font_Platform_Chatroom)
        : e
        ? $("#" + n).hide()
        : IsYn && n == "smLive"
        ? fnSet_layerTip(n, "Bạn không có quyền hạn vào mục 《" + i + "》！")
        : fnSet_layerTip(n, webRes.Font_Platform_Member.replace("{0}", i))
      : t == "3"
      ? fnSet_layerTip(n, webRes.Font_Platform_open.replace("{0}", i))
      : e && $("#" + n).show());
  n = n + "2";
  $("#" + n).size() > 0 &&
    (t == "0" || t == "4" || t == "5"
      ? ($("#" + n)
          .parent()
          .removeAttr("onclick"),
        $("#" + n).removeAttr("href"))
      : t == "2"
      ? ($("#" + n)
          .parent()
          .removeAttr("onclick"),
        $("#" + n).removeAttr("href"),
        showWarning(n, i, webRes.Font_Platform_Member))
      : t == "3" &&
        ($("#" + n)
          .parent()
          .removeAttr("onclick"),
        $("#" + n).removeAttr("href"),
        showWarning(n, i, webRes.Font_Platform_open)));
  n != "kunav" && (n = n.substring(0, 2) + "3");
  $("#" + n).size() > 0 &&
    (t == "0" || kuOpen == 0 || t == "4" || t == "5"
      ? isMajorF
        ? $("#" + n).addClass("off")
        : ((f = t == "4" ? "！" : t == "5" ? "！！" : ""),
          $("#" + n)
            .parent()
            .removeAttr("onclick"),
          $("#" + n).removeAttr("href"),
          $("#" + n).addClass("off"),
          $("#" + n).attr(
            "href",
            "javascript: fnGetTip('" +
              webRes.Font_Platform_Maintain.replace("{0}", i) +
              f +
              "', '" +
              n +
              "', 3, 1);"
          ))
      : t == "2"
      ? ($("#" + n)
          .parent()
          .removeAttr("onclick"),
        $("#" + n).removeAttr("href"),
        fnSet_layerTip(n, webRes.Font_Platform_Member.replace("{0}", i)))
      : t == "3" &&
        ($("#" + n)
          .parent()
          .removeAttr("onclick"),
        $("#" + n).removeAttr("href"),
        showWarning(n, i, webRes.Font_Platform_open)));
}
function fnPlatformCss(n) {
  fnPlatformSetOpen(
    "aBall",
    n.f_isJsSportOpen,
    n.f_isJsSportOpen_maintainTime,
    n.f_isJsSportOpen_showType
  );
  fnPlatformSetOpen(
    "sportid",
    n.f_isNBBOpen,
    n.f_isNBBOpen_maintainTime,
    n.f_isNBBOpen_showType
  );
  fnPlatformSetOpen(
    "aColor",
    n.f_isBallOpen,
    n.f_isBallOpen_maintainTime,
    n.f_isBallOpen_showType
  );
  fnPlatformSetOpen(
    "chatroomlts",
    n.f_isChatroomOpen,
    n.f_isChatroomOpen_maintainTime,
    n.f_isChatroomOpen_showType
  );
  fnPlatformSetOpen(
    "aCNF",
    n.f_isCNFOpen,
    n.f_isCNFOpen_maintainTime,
    n.f_isCNFOpen_showType
  );
  fnPlatformSetOpen(
    "aCNFFish",
    n.f_isCNFFishOpen,
    n.f_isCNFFishOpen_maintainTime,
    n.f_isCNFFishOpen_showType
  );
  fnPlatformSetOpen(
    "aCNFChess",
    n.f_isCNFChessOpen,
    n.f_isCNFChessOpen_maintainTime,
    n.f_isCNFChessOpen_showType
  );
  fnPlatformSetOpen(
    "hg",
    n.f_isHgOpen,
    n.f_isHgOpen_maintainTime,
    n.f_isHgOpen_showType
  );
  fnPlatformSetOpen(
    "ag",
    n.f_isAgOpen,
    n.f_isAgOpen_maintainTime,
    n.f_isAgOpen_showType
  );
  fnPlatformSetOpen(
    "og",
    n.f_isOgOpen,
    n.f_isOgOpen_maintainTime,
    n.f_isOgOpen_showType
  );
  fnPlatformSetOpen(
    "bbin",
    n.f_isBBINOpen,
    n.f_isBBINOpen_maintainTime,
    n.f_isBBINOpen_showType
  );
  fnPlatformSetOpen(
    "bbinBall",
    n.f_isBBINBallOpen,
    n.f_isBBINBallOpen_maintainTime,
    n.f_isBBINBallOpen_showType
  );
  fnPlatformSetOpen(
    "ab",
    n.f_isABOpen,
    n.f_isABOpen_maintainTime,
    n.f_isABOpen_showType
  );
  fnPlatformSetOpen(
    "bng",
    n.f_isBNGOpen,
    n.f_isBNGOpen_maintainTime,
    n.f_isBNGOpen_showType
  );
  fnPlatformSetOpen(
    "ku",
    n.f_isKUOpen,
    n.f_isKUOpen_maintainTime,
    n.f_isKUOpen_showType
  );
  fnPlatformSetOpen(
    "liveid",
    n.f_isKUOpen,
    n.f_isKUOpen_maintainTime,
    n.f_isKUOpen_showType
  );
  fnPlatformSetOpen(
    "slotid",
    n.f_isCNFOpen,
    n.f_isCNFOpen_maintainTime,
    n.f_isCNFOpen_showType
  );
  fnPlatformSetOpen(
    "ballid",
    n.f_isBallOpen,
    n.f_isBallOpen_maintainTime,
    n.f_isBallOpen_showType
  );
  fnPlatformSetOpen(
    "fishid",
    n.f_isCNFFishOpen,
    n.f_isCNFFishOpen_maintainTime,
    n.f_isCNFFishOpen_showType
  );
  fnPlatformSetOpen(
    "chessid",
    n.f_isCNFChessOpen,
    n.f_isCNFChessOpen_maintainTime,
    n.f_isCNFChessOpen_showType
  );
  fnPlatformSetOpen(
    "kunav",
    n.f_isKUOpen,
    n.f_isKUOpen_maintainTime,
    n.f_isKUOpen_showType
  );
  fnPlatformSetOpen(
    "nbb",
    n.f_isNBBOpen,
    n.f_isNBBOpen_maintainTime,
    n.f_isNBBOpen_showType
  );
  IsTw ||
    (fnPlatformSetOpen(
      "cmd",
      n.f_isCMDOpen,
      n.f_isCMDOpen_maintainTime,
      n.f_isCMDOpen_showType
    ),
    fnPlatformSetOpen(
      "sportAG",
      n.f_isAGSportOpen,
      n.f_isAGSportOpen_maintainTime,
      n.f_isAGSportOpen_showType
    ),
    fnPlatformSetOpen(
      "sb",
      n.f_isSBOpen,
      n.f_isSBOpen_maintainTime,
      n.f_isSBOpen_showType
    ),
    fnPlatformSetOpen(
      "cq9",
      n.f_isCQ9Open,
      n.f_isCQ9Open_maintainTime,
      n.f_isCQ9Open_showType
    ),
    fnPlatformSetOpen(
      "dt",
      n.f_isDTOpen,
      n.f_isDTOpen_maintainTime,
      n.f_isDTOpen_showType
    ),
    fnPlatformSetOpen(
      "aAGFish",
      n.f_isFishOpen,
      n.f_isFishOpen_maintainTime,
      n.f_isFishOpen_showType
    ),
    fnPlatformSetOpen(
      "cq9Fish",
      n.f_isCQ9FishOpen,
      n.f_isCQ9FishOpen_maintainTime,
      n.f_isCQ9FishOpen_showType
    ),
    fnPlatformSetOpen(
      "vr",
      n.f_isVROpen,
      n.f_isVROpen_maintainTime,
      n.f_isVROpen_showType
    ),
    fnPlatformSetOpen(
      "lc",
      n.f_isLCOpen,
      n.f_isLCOpen_maintainTime,
      n.f_isLCOpen_showType
    ),
    fnPlatformSetOpen(
      "ky",
      n.f_isKYOpen,
      n.f_isKYOpen_maintainTime,
      n.f_isKYOpen_showType
    ),
    fnPlatformSetOpen(
      "kyFish",
      n.f_isKYFishOpen,
      n.f_isKYFishOpen_maintainTime,
      n.f_isKYFishOpen_showType
    ),
    fnPlatformSetOpen(
      "lcFish",
      n.f_isLCFishOpen,
      n.f_isLCFishOpen_maintainTime,
      n.f_isLCFishOpen_showType
    ),
    fnPlatformSetOpen(
      "im",
      n.f_isIMOpen,
      n.f_isIMOpen_maintainTime,
      n.f_isIMOpen_showType
    ),
    fnPlatformSetOpen(
      "sbEsport",
      n.f_isSBEsportOpen,
      n.f_isSBEsportOpen_maintainTime,
      n.f_isSBEsportOpen_showType
    ),
    fnPlatformSetOpen(
      "aes",
      n.f_isAESOpen,
      n.f_isAESOpen_maintainTime,
      n.f_isAESOpen_showType
    ),
    fnPlatformSetOpen(
      "pg",
      n.f_isPGOpen,
      n.f_isPGOpen_maintainTime,
      n.f_isPGOpen_showType
    ),
    fnPlatformSetOpen(
      "evo",
      n.f_isEVOOpen,
      n.f_isEVOOpen_maintainTime,
      n.f_isEVOOpen_showType
    ),
    fnPlatformSetOpen(
      "ai",
      n.f_isAIOpen,
      n.f_isAIOpen_maintainTime,
      n.f_isAIOpen_showType
    ),
    fnPlatformSetOpen(
      "fc",
      n.f_isFCOpen,
      n.f_isFCOpen_maintainTime,
      n.f_isFCOpen_showType
    ));
  IsYn &&
    fnPlatformSetOpen(
      "aAGVNFish",
      n.f_isAGVNFishOpen,
      n.f_isAGVNFishOpen_maintainTime,
      n.f_isAGVNFishOpen_showType
    );
  fnPlatformSetOpen(
    "pin",
    n.f_isPINOpen,
    n.f_isPINOpen_maintainTime,
    n.f_isPINOpen_showType
  );
  fnPlatformSetOpen(
    "wm",
    n.f_isWMOpen,
    n.f_isWMOpen_maintainTime,
    n.f_isWMOpen_showType
  );
  fnPlatformSetOpen(
    "dg",
    n.f_isDGOpen,
    n.f_isDGOpen_maintainTime,
    n.f_isDGOpen_showType
  );
  fnPlatformSetOpen(
    "sa",
    n.f_isSAOpen,
    n.f_isSAOpen_maintainTime,
    n.f_isSAOpen_showType
  );
  fnPlatformSetOpen(
    "ktalk",
    n.f_isKTalkOpen,
    n.f_isKTalkOpen_maintainTime,
    n.f_isKTalkOpen_showType
  );
  fnPlatformSetOpen(
    "ka",
    n.f_isKAOpen,
    n.f_isKAOpen_maintainTime,
    n.f_isKAOpen_showType
  );
  fnPlatformSetOpen(
    "kaFish",
    n.f_isKAFishOpen,
    n.f_isKAFishOpen_maintainTime,
    n.f_isKAFishOpen_showType
  );
  fnPlatformSetOpen(
    "smLive",
    n.f_isSMOpen,
    n.f_isSMOpen_maintainTime,
    n.f_isSMOpen_showType
  );
  fnPlatformSetOpen(
    "ds",
    n.f_isDSOpen,
    n.f_isDSOpen_maintainTime,
    n.f_isDSOpen_showType
  );
  fnPlatformSetOpen(
    "dsFish",
    n.f_isDSFishOpen,
    n.f_isDSFishOpen_maintainTime,
    n.f_isDSFishOpen_showType
  );
  fnPlatformSetOpen(
    "ps",
    n.f_isPSOpen,
    n.f_isPSOpen_maintainTime,
    n.f_isPSOpen_showType
  );
  fnPlatformSetOpen(
    "ks",
    n.f_isKSOpen,
    n.f_isKSOpen_maintainTime,
    n.f_isKSOpen_showType
  );
  fnPlatformSetOpen(
    "ftg",
    n.f_isFTGOpen,
    n.f_isFTGOpen_maintainTime,
    n.f_isFTGOpen_showType
  );
  fnPlatformSetOpen(
    "obSport",
    n.f_isOBSportOpen,
    n.f_isOBSportOpen_maintainTime,
    n.f_isOBSportOpen_showType
  );
  fnPlatformSetOpen(
    "obLive",
    n.f_isOBLiveOpen,
    n.f_isOBLiveOpen_maintainTime,
    n.f_isOBLiveOpen_showType
  );
  fnPlatformSetOpen(
    "obEsport",
    n.f_isOBESportOpen,
    n.f_isOBESportOpen_maintainTime,
    n.f_isOBESportOpen_showType
  );
  fnPlatformSetOpen(
    "wg",
    n.f_isWGOpen,
    n.f_isWGOpen_maintainTime,
    n.f_isWGOpen_showType
  );
  fnPlatformSetOpen(
    "obFish",
    n.f_isOBFishOpen,
    n.f_isOBFishOpen_maintainTime,
    n.f_isOBFishOpen_showType
  );
  fnPlatformSetOpen(
    "hot_nbb",
    n.f_isNBBOpen,
    n.f_isNBBOpen_maintainTime,
    n.f_isNBBOpen_showType
  );
  fnPlatformSetOpen(
    "hot_ku",
    n.f_isKUOpen,
    n.f_isKUOpen_maintainTime,
    n.f_isKUOpen_showType
  );
  fnPlatformSetOpen(
    "hot_ball",
    n.f_isBallOpen,
    n.f_isBallOpen_maintainTime,
    n.f_isBallOpen_showType
  );
  fnPlatformSetOpen(
    "hot_3d",
    n.f_isCNFOpen,
    n.f_isCNFOpen_maintainTime,
    n.f_isCNFOpen_showType
  );
  fnPlatformMaintain("divElect");
  fnPlatformMaintain("divCasino");
  fnPlatformMaintain("divFish");
  fnPlatformMaintain("divSport");
  fnPlatformMaintain("divBall");
  fnPlatformMaintain("divChess");
  fnPlatformMaintain("divEsport");
  IsYn && fnPlatformMaintain("divColor");
  fnPlatformMaintain("divMenuHot");
}
function fnGetMaintainText(n, t, i) {
  var r = webRes.Font_Czzq_26;
  return t == null || n == 4 || n == 5
    ? r
    : i == 1
    ? r.concat("<span>{0}</span>").replace("{0}", t)
    : i == 3
    ? r.concat("<br><span>~ {0}</span>").replace("{0}", t.split("~")[1])
    : r;
}
function fnPlatformSetOpen(n, t, i, r) {
  var u = $("#" + n),
    s,
    f,
    e,
    o;
  t == 0 || t == 4 || t == 5
    ? ((s = fnGetMaintainText(t, i, r)),
      u.find(".gameBanner_maintain_icon").html(s),
      u.addClass("off"),
      t == 4 && u.addClass("noaccess"))
    : u.removeClass("off");
  f = $("#" + n + "2");
  t == 0 || t == 4 || t == 5
    ? f.parent().addClass("off_maintain")
    : f.parent().removeClass("off_maintain");
  e = $("#" + n + "_new");
  t == 0 || t == 4 || t == 5 ? e.addClass("off") : e.removeClass("off");
  o = $("#" + n + "_new2");
  t == 0 || t == 4 || t == 5
    ? o.parent().addClass("off_maintain")
    : o.parent().removeClass("off_maintain");
}
function fnPlatformMaintain(n) {
  var t = $("." + n),
    i,
    r,
    u,
    f;
  i = t.find(">a");
  r = t.find("div .GB_list");
  u = t.find("div .off");
  f = t.find("div .noaccess");
  r.size() == u.size() && f.size() == 0
    ? i.addClass("off")
    : i.removeClass("off");
}
function fnIndexSetOpen(n, t) {
  var i = $(n);
  t == 0 ? i.addClass("off") : i.removeClass("off");
}
function fnIndexSetOpen2(n, t, i) {
  var r = $(n);
  i == 0 ? r.addClass(t) : r.removeClass(t);
}
function fnSetHrefOrOnclick(n, t) {
  if ($("#" + n).size() > 0)
    if ($("#" + n).prop("tagName") == "A" && n != "kunav") {
      if (IsMobile() && n == "sportid") {
        $("#sportid").removeAttr("target").attr("href", "javascript:void(0);");
        return;
      }
      fnSetHref(n, t);
    } else fnSetOnclick(n, t);
  if (((n = n + "2"), $("#" + n).size() > 0))
    if (
      ($("#" + n)
        .parent()
        .removeAttr("onclick"),
      $("#" + n).prop("tagName") == "A" && n != "kunav")
    ) {
      if (IsMobile() && n == "sportid") {
        $("#sportid").removeAttr("target").attr("href", "javascript:void(0);");
        return;
      }
      fnSetHref(n, t);
    } else fnSetOnclick(n, t);
  if ((n != "kunav2" && (n = n.substring(0, 2) + "3"), $("#" + n).size() > 0))
    if ($("#" + n).prop("tagName") == "A" && n != "kunav") {
      if (IsMobile() && n == "sportid") {
        $("#sportid").removeAttr("target").attr("href", "javascript:void(0);");
        return;
      }
      fnSetHref(n, t);
    } else fnSetOnclick(n, t);
}
function SetIndexLoad(n) {
  if (n == "0") {
    F52();
    return;
  }
  if (n != null) {
    if (
      (SetSkype(n),
      SetPicCycle(n.IndexLoad_PicCycle),
      n.IndexLoad_Statistics.length > 0)
    ) {
      var t = (IsCn ? BaiDuCountTemplate : GoogleCountTemplate).replaceAll(
        "{apikey}",
        n.IndexLoad_Statistics[0].f_Code2
      );
      $("head").append(t);
    }
    IsLegalShowTW &&
      !Isxv8com &&
      ($("meta[name=Keywords]").attr(
        "content",
        n.IndexLoad_System[0].f_keywords
      ),
      $("meta[name=Description]").attr(
        "content",
        n.IndexLoad_System[0].f_description
      ));
  }
}
function SetSkype(n) {
  var i, r, t;
  if (n.IndexLoad_Skype != null)
    if (IsTw)
      $("#spanPhone").text(n.IndexLoad_Skype[0].f_name),
        (i = n.IndexLoad_Skype.find((n) => n.f_sort == 11)),
        GenerateQrCode("#csQrCode", i.f_url, 85, 85),
        $("#spanLine,.servDivT").text(i.f_title),
        $(".csQrImg span").text(i.f_name),
        $("#aLine").hover(
          function () {
            $(this).find(".customerServDiv").stop().fadeIn(200);
          },
          function () {
            $(this).find(".customerServDiv").fadeOut(200);
          }
        );
    else if (IsCn) $("#spanPhone").text(n.IndexLoad_Skype[0].f_name);
    else if (IsYn) {
      $("#spanPhone").text(n.IndexLoad_Skype[0].f_name);
      r = n.IndexLoad_Skype.find((n) => n.f_sort == 13);
      GenerateQrCode("#viberQrCode", r.f_url, 85, 85);
      $("#spanViber, #aViber .servDivT span").text(r.f_title);
      $("#aViber .qrImg span").text("ID:" + r.f_name);
      $("#aViber, #aViber .customerServDiv").hover(
        function () {
          $("#aViber .customerServDiv").stop().fadeIn(200);
        },
        function () {
          $("#aViber .customerServDiv").fadeOut(200);
        }
      );
      t = n.IndexLoad_Skype.find((n) => n.f_sort == 25);
      GenerateQrCode("#telegramQrCode", t.f_url, 85, 85);
      $("#spanTele, #aTele .servDivT span").text(t.f_title);
      $("#aTele .qrImg span").text("ID:" + t.f_name);
      $("#aTele, #aTele .customerServDiv").hover(
        function () {
          $("#aTele .customerServDiv").stop().fadeIn(200);
        },
        function () {
          $("#aTele .customerServDiv").fadeOut(200);
        }
      );
      $("#aTele").on("click", function () {
        window.open(t.f_url);
      });
    }
}
function SetPicCycle(n) {
  var r, t, i;
  if ($("#picCyle_image").html() == "") {
    if (((r = ""), isNE(n)))
      for (t = 0; t < n.length; t++)
        (i = n[t]),
          (r += $.format(
            '<a id="{2}"{0} onclick="return picCycleClick(' +
              (i.f_isLogined == 1 ? "true" : "false") +
              ')"><div class="item bannerImg" style="background: url({1}) no-repeat center;"></div></a>',
            i.f_totalHref,
            i.f_imagePath,
            "Index_LeftPic1" + t
          ));
    $("#picCyle_image").html(r);
    ShowPicCycle();
  }
}
function ShowPicCycle() {
  $(".bannerRun").slick({
    dots: !0,
    infinite: !0,
    speed: 1e3,
    fade: !0,
    cssEase: "ease",
    autoplay: !0,
    autoplaySpeed: 5e3,
    arrows: !1,
    waitForAnimate: !1,
    touchThreshold: 5e8,
  });
  $(".slick-dots li").hover(
    function () {
      $(this).click();
    },
    function () {}
  );
}
function openPopChrome() {
  $(".popChrome").show();
}
function closePopChrome() {
  $.cookie("iechromedownload", "1", { path: "/", expires: 30 });
  $(".popChrome").hide();
}
function openChromeDownload() {
  window.open("https://www.google.com/chrome/", "_blank");
}
function CheckTransferStatus(n) {
  for (
    var u,
      i = Object.keys(n).map(function (t) {
        if (t.indexOf("_showType") == -1) return n[t];
      }),
      r = !0,
      t = 0;
    t < i.length;
    t++
  )
    if (i[t] != null && i[t] === 1) {
      r = !1;
      break;
    }
  r && !isMajorF
    ? ($("#aMypurse").find(".RT_promptText").text(webRes.Font_MypurseNotOpen),
      $(".maintain").removeAttr("onclick"),
      $(".maintain").show())
    : ((u = "546"),
      fnSetHref(
        "aMypurse",
        "javascript:openNewWindowAutoHeightName('/Aspx/Mypurse.aspx',800," +
          u +
          ");"
      ),
      isMajorF && fnSetOnclick2("maintain", "WReturnPoint()"),
      r ? $(".maintain").show() : $(".maintain").hide());
}
function showWarning(n, t, i) {
  $("#" + n).removeAttr("href");
  $("#" + n).attr("href", "javascript:warning('" + t + "','" + i + "');");
}
function warning(n, t) {
  $.fn.alert(
    '<div class="forbidBox"><div class="forbidText">' +
      (IsYn
        ? t.replace("《", "<br/>《").replace("{0}", n)
        : t.replace("{0}", n)) +
      "</div></div>"
  );
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
      var t, i;
      if (n !== "") {
        var r = n.split("|")[0] == "True",
          u = n.split("|")[1] == "True",
          f = n.split("|")[2] == "True";
        r
          ? ((t =
              "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=A', 870, " +
              (IsYn ? 800 : IsCn ? 790 : 730) +
              ")"),
            IsYn &&
              f &&
              (t =
                "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=A&action2=2', 870, 800)"),
            fnSetHref("aGiftGold", t),
            $("#aGiftGold").show())
          : $("#aGiftGold").hide();
        u
          ? ((i =
              "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=A&action2=2', 870, " +
              (IsYn ? 800 : IsCn ? 790 : 730) +
              ")"),
            fnSetHref("aGiftVoucher", i),
            $("#aGiftVoucher").show())
          : $("#aGiftVoucher").hide();
      }
    },
  });
}
function GetAgentSetting() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    cache: !1,
    data: { checkType: "52" },
    timeout: 15e3,
    success: function (n) {
      n = htmlDecode(n);
      var t = n.split("|");
      t.length == 3
        ? ((lineBanner_link = t[0]),
          (lineBanner_img = t[1]),
          (lineBanner_regImg = t[2]),
          lineBanner_img == ""
            ? $(".line_banner").hide()
            : hideLine == !1 && loadLineIcon(),
          $(".line_banner1").length > 0 &&
            (lineBanner_regImg == ""
              ? $(".line_banner1").hide()
              : ($(".line_banner1 > img").attr("src", lineBanner_regImg),
                $(".line_banner1").show())))
        : ((lineBanner_link = ""),
          (lineBanner_img = ""),
          (lineBanner_regImg = ""),
          $(".line_banner").hide(),
          $(".line_banner1").hide());
    },
  });
}
function loadLineIcon() {
  lineBanner_img &&
    lineBanner_img != "" &&
    ($(".line_banner > img").attr("src", lineBanner_img),
    $(".line_banner").show());
}
var t1 = 25e3,
  flag = !1,
  flagDeposit = !1,
  delaylogin = !1,
  sportOpen = !0,
  openSport,
  kuOpen,
  isGameMenuOpen = !1,
  aBall,
  sportid,
  tio,
  tio2,
  tio3,
  tio_blacklogin,
  MapLogin,
  isMajorF,
  serverTime,
  FlagLoginFrame,
  refreshData,
  voicePassData,
  len1,
  regSuccessData,
  len2,
  IsMobPlatform,
  hideLine;
$(function () {
  InitIndexLoad();
  BeforeLogin();
  GetLogined();
  InitIndex();
});
MapLogin = [
  "",
  "",
  webRes.Font_KickedOut,
  webRes.Font_AccountLocked,
  webRes.Font_SystemBusy,
  webRes.Font_SystemBusy1,
];
window.addEventListener("message", function (n) {
  if (window.location.href.indexOf(n.origin) === 0) {
    var t = JSON.parse(n.data);
    switch (t.event) {
      case "refreshHome":
        fnTimeMemberLogined();
        break;
      case "refreshMainPage":
        location.reload();
        break;
      case "loginVerifyAdjustHeight":
        $("iframe").css("height", 576);
        $("iframe").parent().parent().css("height", 576);
        break;
      case "loginVerifyAdjustHeightNoPhone":
        $("iframe").css("height", 520);
        $("iframe").parent().parent().css({ height: "520px", top: "200.5px" });
        break;
      case "loginVerifyAdjustHeightPic":
        $("iframe").css("height", 576);
        $("iframe").parent().parent().css({ height: "576px", top: "200.5px" });
        break;
      case "checkMail":
        $("#aMail").hasClass("new") && $("#aMail").removeClass("new");
        break;
      case "logout":
        End();
        break;
      case "closeGiftGold":
        $("#aGiftGold").hide();
        break;
      case "closeGiftVoucher":
        $("#aGiftVoucher").hide();
        break;
      case "refreshGiftIcon":
        createXmlObj();
    }
  }
});
isMajorF = !1;
FlagLoginFrame = !0;
refreshData = 0;
voicePassData = null;
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
var OSPlatform = (function () {
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
  })(),
  BaiDuCountTemplate =
    "<script>var _hmt = _hmt || [];(function() {  var hm = document.createElement('script');hm.src = '//hm.baidu.com/hm.js?{apikey}';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})();</script>",
  GoogleCountTemplate =
    "<script async src=\"https://www.googletagmanager.com/gtag/js?id={apikey}\"></script><script>  window.dataLayer = window.dataLayer || [];  function gtag() { dataLayer.push(arguments); }  gtag('js', new Date());  gtag('config', '{apikey}');</script>";
hideLine = !1;

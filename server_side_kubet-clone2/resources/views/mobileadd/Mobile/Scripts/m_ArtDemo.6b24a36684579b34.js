function loadWBCIcon() {
  var i;
  if ($(".btn_WBCactiv").length > 0) {
    var u = document.getElementsByClassName("btn_WBCactiv")[0],
      f,
      e,
      o = $(".GameList").position().top,
      r,
      s = $(".GameList").position().left,
      h = $(".GameList").position().left + $(".GameList").width(),
      n,
      t;
    setTimeout(function () {
      n = $(".btn_WBCactiv").position().left;
      t = $(".btn_WBCactiv").position().top;
      r = $(".GameList").position().top + $(".GameList").outerHeight(!0);
    }, 500);
    u.addEventListener("touchstart", function (n) {
      var t = n.changedTouches[0];
      f = t.pageX - $(".btn_WBCactiv").position().left;
      e = t.pageY - $(".btn_WBCactiv").position().top;
    });
    u.addEventListener("touchmove", function (i) {
      var u = i.changedTouches[0];
      n = u.pageX - f;
      t = u.pageY - e;
      n <= s && (n = s);
      t <= o && (t = o);
      n + $(".btn_WBCactiv").width() >= h &&
        (n = h - $(".btn_WBCactiv").width());
      t + $(".btn_WBCactiv").height() >= r &&
        (t = r - $(".btn_WBCactiv").height());
      $(".btn_WBCactiv").css({ left: n, top: t });
      $(".btn_WBCactiv").css("bottom", "unset");
    });
    sessionStorage.getItem("btn_closeWBCnew") == null &&
      $(".btn_AVactivMain").show();
    i = sessionStorage.getItem("btn_WBCactiv");
    i != null &&
      ((i = i.split(",")),
      (avIconLeft = i[0]),
      (avIconTop = i[1]),
      $(".btn_WBCactiv").attr(
        "style",
        "left:" + i[0] + "px;top:" + i[1] + "px;"
      ));
    $(".btn_WBCactiv").on("touchend", function () {
      sessionStorage.setItem("btn_WBCactiv", n + "," + t);
    });
  }
}
function loadLotteryIcon() {
  var i;
  if ($(".btn_LotteryActive").length > 0) {
    var u = document.getElementsByClassName("btn_LotteryActive")[0],
      f,
      e,
      o = $(".GameList").position().top,
      r,
      s = $(".GameList").position().left,
      h = $(".GameList").position().left + $(".GameList").width(),
      n,
      t;
    $(".btn_Line:visible").length > 0 &&
      sessionStorage.getItem("btn_Line") == null &&
      ((n = $(".btn_Line").position().left + $(".btn_Line").width() + 10),
      $(".btn_AVactiv").css("left", n));
    $(".btn_AVactiv:visible").length > 0 &&
    sessionStorage.getItem("btn_AVactiv") == null
      ? ((n =
          $(".btn_AVactiv").position().left + $(".btn_AVactiv").width() + 10),
        $(".btn_LotteryActive").css("left", n))
      : $(".btn_Line:visible").length > 0 &&
        sessionStorage.getItem("btn_Line") == null &&
        ((n = $(".btn_Line").position().left + $(".btn_Line").width() + 10),
        $(".btn_LotteryActive").css("left", n));
    setTimeout(function () {
      n = $(".btn_LotteryActive").position().left;
      t = $(".btn_LotteryActive").position().top;
      r = $(".GameList").position().top + $(".GameList").outerHeight(!0);
    }, 500);
    u.addEventListener("touchstart", function (n) {
      var t = n.changedTouches[0];
      f = t.pageX - $(".btn_LotteryActive").position().left;
      e = t.pageY - $(".btn_LotteryActive").position().top;
    });
    u.addEventListener("touchmove", function (i) {
      var u = i.changedTouches[0];
      n = u.pageX - f;
      t = u.pageY - e;
      n <= s && (n = s);
      t <= o && (t = o);
      n + $(".btn_LotteryActive").width() >= h &&
        (n = h - $(".btn_LotteryActive").width());
      t + $(".btn_LotteryActive").height() >= r &&
        (t = r - $(".btn_LotteryActive").height());
      $(".btn_LotteryActive").css({ left: n, top: t });
      $(".btn_LotteryActive").css("bottom", "unset");
    });
    sessionStorage.getItem("btn_closeZZCYY") == null &&
      $(".btn_LotteryActive").show();
    i = sessionStorage.getItem("btn_LotteryActive");
    i != null &&
      ((i = i.split(",")),
      $(".btn_LotteryActive").attr(
        "style",
        "left:" + i[0] + "px;top:" + i[1] + "px;"
      ));
    $(".btn_LotteryActive").on("touchmove", function () {
      sessionStorage.setItem("btn_LotteryActive", n + "," + t);
    });
  }
}
function loadLineIcon() {
  var i;
  if (lineBanner_img && lineBanner_img != "") {
    var u = document.getElementsByClassName("btn_Line")[0],
      f,
      e,
      o = $(".GameList").position().top,
      r,
      s = $(".GameList").position().left,
      h = $(".GameList").position().left + $(".GameList").width(),
      n,
      t;
    $(".btn_WBCactiv:visible").length > 0 &&
      sessionStorage.getItem("btn_WBCactiv") == null &&
      ((n =
        $(".btn_WBCactiv").position().left + $(".btn_WBCactiv").width() + 10),
      $(".btn_Line").css("left", n));
    setTimeout(function () {
      n = $(".btn_Line").position().left;
      t = $(".btn_Line").position().top;
      r = $(".GameList").position().top + $(".GameList").outerHeight();
    }, 300);
    u.addEventListener("touchstart", function (n) {
      var t = n.changedTouches[0];
      f = t.pageX - $(".btn_Line").position().left;
      e = t.pageY - $(".btn_Line").position().top;
    });
    u.addEventListener("touchmove", function (i) {
      var u = i.changedTouches[0];
      n = u.pageX - f;
      t = u.pageY - e;
      n <= s && (n = s);
      t <= o && (t = o);
      n + $(".btn_Line").width() >= h && (n = h - $(".btn_Line").width());
      t + $(".btn_Line").outerHeight() + 4 >= r &&
        (t = r - $(".btn_Line").outerHeight() - 4);
      $(".btn_Line").css({ left: n, top: t });
      $(".btn_Line").css("bottom", "unset");
    });
    i = sessionStorage.getItem("btn_Line");
    i != null &&
      ((i = i.split(",")),
      $(".btn_Line").attr("style", "left:" + i[0] + "px;top:" + i[1] + "px;"),
      $(".btn_Line").css("bottom", "unset"));
    $(".btn_Line").on("touchmove", function () {
      sessionStorage.setItem("btn_Line", n + "," + t);
    });
    $(".line_Close").on("touchend", function () {
      $(".btn_Line").hide();
      hideLine = !0;
      stopPropagation();
    });
    $(".btn_Line img").attr("src", lineBanner_img);
    hideLine == !1 && $(".btn_Line").show();
  }
}
function loadAVIcon() {
  var r, i;
  if ($(".btn_AVactiv").length > 0) {
    var f = document.getElementsByClassName("btn_AVactiv")[0],
      e,
      o,
      l = parseInt($(".GameList").children().first().css("padding-top")),
      s = $(".GameList").position().top + l,
      u,
      h = $(".GameList").position().left,
      c = $(".GameList").position().left + $(".GameList").width(),
      n,
      t;
    $(".btn_Line:visible").length > 0 &&
      sessionStorage.getItem("btn_Line") == null &&
      ((n = $(".btn_Line").position().left + $(".btn_Line").width() + 10),
      $(".btn_AVactiv").css("left", n));
    setTimeout(function () {
      n = $(".btn_AVactiv").position().left;
      t = $(".btn_AVactiv").position().top;
      u = $(".GameList").position().top + $(".GameList").outerHeight(!0) - 12;
    }, 500);
    f.addEventListener("touchstart", function (n) {
      var t = n.changedTouches[0];
      e = t.pageX - $(".btn_AVactiv").position().left;
      o = t.pageY - $(".btn_AVactiv").position().top;
    });
    f.addEventListener("touchmove", function (i) {
      var r = i.changedTouches[0];
      n = r.pageX - e;
      t = r.pageY - o;
      n <= h && (n = h);
      t <= s && (t = s);
      n + $(".btn_AVactiv").width() >= c && (n = c - $(".btn_AVactiv").width());
      t + $(".btn_AVactiv").height() >= u &&
        (t = u - $(".btn_AVactiv").height());
      $(".btn_AVactiv").css({ left: n, top: t });
      $(".btn_AVactiv").css("bottom", "unset");
    });
    r = sessionStorage.getItem("btn_AVactiv");
    r == null
      ? $(".btn_AVactiv").show()
      : isLogined &&
        r != "1" &&
        r != f_account &&
        (sessionStorage.removeItem("btn_AVactiv"), $(".btn_AVactiv").show());
    i = sessionStorage.getItem("btn_AVactivPos");
    i != null &&
      ((i = i.split(",")),
      isLogined && i.length == 3 && i[2] != f_account
        ? sessionStorage.removeItem("btn_AVactivPos")
        : $(".btn_AVactiv").css({ left: i[0] + "px", top: i[1] + "px" }));
    $(".btn_AVactiv").on("touchmove", function () {
      sessionStorage.setItem(
        "btn_AVactivPos",
        n + "," + t + (isLogined ? "," + f_account : "")
      );
    });
  }
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
          isIndex()
            ? lineBanner_img == ""
              ? $(".btn_Line").hide()
              : loadLineIcon()
            : lineBanner_regImg == ""
            ? $(".btn_Line").hide()
            : ($(".btn_Line img").attr("src", lineBanner_regImg),
              $(".btn_Line").show()))
        : ((lineBanner_link = ""),
          (lineBanner_img = ""),
          (lineBanner_regImg = ""),
          $(".btn_Line").hide());
    },
  });
}
function checkKeyboardHide(n) {
  var t = n.target.className || "",
    i = n.target.type || "";
  i == "button" ||
    t.indexOf("num_keyboard") > -1 ||
    t.indexOf("keyboard-mask") > -1 ||
    t.indexOf("btnChange") > -1 ||
    t.indexOf("butIngame") > -1 ||
    t.indexOf("popup_container") > -1 ||
    t.indexOf("popup_bg") > -1 ||
    ($("[data-numberboard='1']").size() > 0 &&
      $("[data-numberboard='1']").each(function () {
        $(this).attr("class").indexOf("noHide") > 0 ||
          ($(this).attr("id") != "txtMoneyTo" && $(this).keyboard("hide"),
          $(this).context.id != "txtPhoneVerify" &&
            $(this).attr("id") != "txtMoneyTo" &&
            ($(this).parent().find(".Rclose").hide(),
            $(this).parent().find(".caretMask").hide()));
      }));
}
function fnSetDWMenu() {
  $(".btn_footer_DW").click(function () {
    $(".btn_footer_menu,.btn_header_menu,.icon_inforMoney").removeClass("on");
    $(".btn_footer_menu_open,.btn_header_menu_open").slideUp("fast");
    $(".inforMDrop").hide();
    $("body").css("overflow", "none");
    $(".container_main").css("position", "none");
    $(this).toggleClass("on");
    $(this).hasClass("on")
      ? navCheck &&
        ((navCheck = !1),
        $.ajax({
          url: "/LoadData/HelpCheck.ashx",
          data: { checkType: "39", isMember: 1 },
          type: "get",
          dataType: "json",
          cache: !1,
          timeout: 15e3,
          error: function () {
            navCheck = !0;
            $(".footer_DW_open").addClass("on");
            $("body")
              .css("-webkit-overflow-scrolling", "initial")
              .css("overflow", "hidden");
            $(this).addClass("active").siblings().removeClass("active");
            $("#aTraderec").addClass("hideActive");
            $("#aFooterSC").addClass("hideActive");
            $("#aHYZX").addClass("hideActive");
            $("#aFooterDW").addClass("active");
          },
          success: function () {
            navCheck = !0;
            $(".footer_DW_open").addClass("on");
            $("body")
              .css("-webkit-overflow-scrolling", "initial")
              .css("overflow", "hidden");
            $(this).addClass("active").siblings().removeClass("active");
            $("#aTraderec").addClass("hideActive");
            $("#aFooterSC").addClass("hideActive");
            $("#aHYZX").addClass("hideActive");
            $("#aFooterDW").addClass("active");
          },
        }))
      : navCheck &&
        ((navCheck = !1),
        $.ajax({
          url: "/LoadData/HelpCheck.ashx",
          data: {
            checkType: "39",
            isMember: GetQueryString("back") == "2" ? 2 : 1,
          },
          type: "get",
          dataType: "json",
          cache: !1,
          timeout: 15e3,
          error: function () {
            navCheck = !0;
            $(".footer_DW_open").removeClass("on");
            $("body").removeAttr("style");
            $(this).removeClass("active");
            $(".mark").addClass("active");
            $("#aTraderec").removeClass("hideActive");
            $("#aFooterSC").removeClass("hideActive");
            $("#aHYZX").removeClass("hideActive");
            ($("#aHYZX").hasClass("active") ||
              location.pathname.toLowerCase().indexOf("traderec") > -1 ||
              location.pathname.toLowerCase().indexOf("kfzx") > -1) &&
              $("#aFooterDW").removeClass("active");
            layerTip_close();
          },
          success: function () {
            navCheck = !0;
            $(".footer_DW_open").removeClass("on");
            $("body").removeAttr("style");
            $(this).removeClass("active");
            $(".mark").addClass("active");
            $("#aTraderec").removeClass("hideActive");
            $("#aFooterSC").removeClass("hideActive");
            $("#aHYZX").removeClass("hideActive");
            ($("#aHYZX").hasClass("active") ||
              location.pathname.toLowerCase().indexOf("traderec") > -1 ||
              location.pathname.toLowerCase().indexOf("kfzx") > -1) &&
              $("#aFooterDW").removeClass("active");
            layerTip_close();
          },
        }));
  });
  $(".footer_DW_open.on > div").click(function () {
    $(this).children().children().hasClass("off") ||
      $("body").removeAttr("style");
  });
  $(".footer_DW_open").on("click", function (n) {
    n.target.className.indexOf("deposit") == -1 &&
      n.target.className.indexOf("transfer") == -1 &&
      n.target.className.indexOf("withdrawal") == -1 &&
      ($(".btn_footer_DW").removeClass("on"),
      $(".footer_DW_open").removeClass("on"),
      $("body").removeAttr("style"),
      fnIsSpecPage() || $(".btn_footer_DW").removeClass("active"),
      $(".mark").addClass("active"),
      $("#aTraderec").removeClass("hideActive"),
      $("#aFooterSC").removeClass("hideActive"),
      $("#aHYZX").removeClass("hideActive"),
      $("#aHYZX").hasClass("active") &&
        $(".btn_footer_DW").removeClass("active"),
      layerTip_close());
  });
  $(".footer_DW_open").on("click", "li", function (n) {
    $(".btn_footer_DW").hasClass("on") || layerTip_close();
    n.stopPropagation();
  });
  $(".footer_DW_open li.off").click(function (n) {
    $(".footer_maintain").not($(this).find(".footer_maintain")).hide();
    $(this).children(".footer_maintain").toggle();
    n.stopPropagation();
  });
  $(".btn_footer_DW,.footer_DW_open").click(function (n) {
    n.target.className.indexOf("deposit") == -1 &&
      n.target.className.indexOf("transfer") == -1 &&
      n.target.className.indexOf("withdrawal") == -1 &&
      (layerTip_close(),
      IsMHomePage && $(".btn_footer_DW").removeClass("active"),
      $(".footer_DW_open").removeClass("on"),
      n.stopPropagation(),
      n.preventDefault());
  });
}
function fnSetMenu(n, t) {
  var i = "." + n;
  if ($(i).size() !== 0) {
    var r = i + "_open",
      u = "." + t,
      f = u + "_open";
    $(i)
      .off("click")
      .on("click", function () {
        n !== "btn_footLogin_menu" &&
          ($(u).removeClass("on"),
          $(f).slideUp("fast"),
          $(".btn_footer_DW,.icon_inforMoney").removeClass("on"),
          $(".footer_DW_open").removeClass("on"),
          $(".inforMDrop").hide(),
          $("body").css("overflow", "none"));
        $(r).css("display") === "none"
          ? ($(r).slideDown("fast"),
            $(this).addClass("on"),
            n === "btn_footer_menu" &&
              ($(i).siblings().removeClass("active"),
              $(i).addClass("active"),
              layerTip_close()))
          : ($(r).slideUp("fast"),
            $(this).removeClass("on"),
            n === "btn_footer_menu" &&
              ($(i).removeClass("active"), $(".mark").addClass("active")),
            n !== "btn_footLogin_menu" && layerTip_close());
        IsUC() &&
          $(
            ".btn_footLogin_menu_open li span,.btn_header_menu_open li span,.btn_footer_menu_open li span"
          ).css({ "padding-top": "2px", "box-sizing": "border-box" });
      });
    $(i + "," + r).click(function (n) {
      n.stopPropagation();
      n.preventDefault();
    });
  }
}
function fnSetList(n) {
  var i = GetQueryString("id"),
    r = $("#" + n + "-" + i),
    t = "." + n;
  fnSetListOpen(r);
  $(t + "TR").click(function () {
    var i, r, u;
    $(t + "In").slideUp("fast");
    $(t + "TR").removeClass("on");
    $(t + "T").removeClass("on");
    i = $(this).parent().parent();
    r = i.children(t + "In");
    r.css("display") === "none"
      ? n === "pMail_list"
        ? ((u = i.hasClass("read")),
          u
            ? (r.slideDown("fast", function () {
                scrollTop(i, 300);
              }),
              $(this).hasClass("icon_arrow") || i.hasClass("read")
                ? ($(this).siblings(".pMail_listTitle").addClass("on"),
                  $(this).parent().addClass("on"))
                : ($(this).addClass("on"), $(this).parent().addClass("on")))
            : showContent(i))
        : (r.slideDown("fast", function () {
            scrollTop(i, 300);
          }),
          $(this).addClass("on"))
      : (r.slideUp("fast"), $(this).removeClass("on"));
  });
}
function fnSetListOpen(n) {
  if (isSize(n)) {
    var i = n.attr("id"),
      t = "." + i.split("-")[0];
    $(t + "In").slideUp("fast");
    $(t + "TR").removeClass("on");
    $(t + "T").removeClass("on");
    n.find(t + "T").addClass("on");
    n.find(t + "TR").addClass("on");
    n.find(t + "In").slideDown(function () {
      scrollTop(n, 300);
    });
  }
}
function showContent(n) {
  var t = n.attr("id").split("-")[1],
    u = $("#time").val(),
    i,
    r;
  $.fn.isApp() &&
    n.find(".pMailCheckbox").size() <= 0 &&
    ((i = "cookie_pubMsg_" + $.cookie("CookieAccApp")),
    (r = $.cookie(i)),
    $.cookie(i, r + t + ",", { path: "/" }));
  $.ajax({
    url: "/LoadData/GrxxUpdateZero.ashx",
    data: { f_id: t, time: u },
    type: "post",
    cache: !1,
    timeout: 15e3,
    success: function (i) {
      n.addClass("read");
      fnSetListOpen(n);
      n.find(".pMailCheckbox").size() <= 0 &&
        (SendAppMessageRead(t),
        $.fn.isApp() &&
          i.split("|")[1] == "0" &&
          window.setTimeout(function () {
            window.location.href = "about:NoMessage";
          }, 10));
      i.split("|")[2] == "0" &&
        $(".icon_inforMail").hasClass("haveMsg") &&
        $(".icon_inforMail").removeClass("haveMsg");
    },
  });
}
function fnSetList2(n) {
  var t = "." + n;
  $(t + "T").click(function () {
    $(t + "In").slideUp("fast");
    $(t + "T").removeClass("on");
    var i = $(this).parent(),
      n = i.children(t + "In");
    n.css("display") === "none"
      ? (n.slideDown("fast"), $(this).addClass("on"))
      : (n.slideUp("fast"), $(this).removeClass("on"));
  });
}
function fnSetList3(n, t) {
  var i = "." + n;
  $(t).on("click", i + "T", function () {
    $(i + "In").slideUp("fast");
    $(i + "T").removeClass("on");
    var t = $(this).parent(),
      n = t.children(i + "In");
    n.css("display") === "none"
      ? (n.slideDown("fast", function () {
          scrollTop(t, 300);
        }),
        $(this).addClass("on"))
      : (n.slideUp("fast"), $(this).removeClass("on"));
  });
}
function fnSetList4(n, t) {
  var u = t + ":first",
    i = t + "T",
    f = t + "TR",
    r = t + "In";
  $(n).children(u).children(i).children(f).addClass("on");
  $(n).children(u).children(r).slideDown();
  $(f).click(function () {
    $(this).parent(i).parent(t).children(r).css("display") === "none"
      ? ($(this).parent(i).parent(t).children(r).slideDown("fast"),
        $(this).addClass("on"),
        scrollTop(this, 300))
      : ($(this).parent(i).parent(t).children(r).slideUp("fast"),
        $(this).removeClass("on"));
  });
}
function layerTip_close() {
  layer.closeAll("tips");
}
function closeMenu(n) {
  if (
    ($(".btn_header_menu_open").css("display") !== "none" &&
      ($(".btn_header_menu_open").slideUp(),
      $("a.btn_header_menu").removeClass("on")),
    $(".btn_footer_menu_open").css("display") !== "none" &&
      ($(".btn_footer_menu_open").slideUp(),
      $("a.btn_footer_menu").removeClass("on"),
      $("a.btn_footer_menu").removeClass("active"),
      $(".mark").addClass("active")),
    $(".btn_footLogin_menu_open").css("display") !== "none" &&
      ($(".btn_footLogin_menu_open").slideUp(),
      $("a.btn_footLogin_menu").removeClass("on")),
    $(".footer_DW_open").hasClass("on") && $("body").removeAttr("style"),
    $(".icon_inforMoney").length > 0 &&
      $(".icon_inforMoney").css("display") !== "none")
  ) {
    var t = n && n.type;
    t == "click" &&
      ($(".inforMDrop, .inforMDropBG").hide(),
      $(".header").css("z-index", ""),
      $(".icon_inforMoney").removeClass("on"),
      $(".container_main").css("position", "none"),
      $("body").css("overflow", "none"));
  }
}
function spanPwdEye(n) {
  var t = $(n.previousElementSibling).attr("id");
  $("#" + t)
    .parent(".pwON")
    .toggleClass("off");
  document.getElementById(t).type = $("#" + t)
    .parent(".pwON")
    .hasClass("off")
    ? "password"
    : "text";
}
function fnScreenChange() {
  (window.orientation == 180 || window.orientation == 0) && layerTip_close();
  (window.orientation == 90 || window.orientation == -90) && layerTip_close();
  window.addEventListener(
    "onorientationchange" in window ? "orientationchange" : "resize",
    fnScreenChange,
    !1
  );
}
function fnIsSpecPage() {
  return location.pathname.indexOf("M_Deposit") > -1 ||
    location.pathname.indexOf("M_Mypurse") > -1 ||
    location.pathname.indexOf("M_WithDraw") > -1
    ? !0
    : !1;
}
var hideLine, navCheck;
$(document).ready(function () {
  fnSetMenu("btn_footLogin_menu");
  fnSetMenu("btn_header_menu", "btn_footer_menu");
  fnScreenChange();
  $(".btn_bankSelect_T").click(function () {
    var n = ".bankSelect_In";
    IsYn &&
      location.href.indexOf("N_HelpCenter.aspx") == -1 &&
      (n = ".depositSelect_In");
    $(this).parent(".bank_select").children(n).css("display") == "none"
      ? ($(this).parent(".bank_select").children(n).slideDown("fast"),
        $(this).addClass("on"))
      : ($(this).parent(".bank_select").children(n).slideUp("fast"),
        $(this).removeClass("on"));
  });
  var n = 0;
  $(".btn_game_sumT").click(function () {
    $(this).parent(".game_sum").children(".game_sumIn").css("display") == "none"
      ? ($(this).parent(".game_sum").children(".game_sumIn").slideDown("fast"),
        $(this).addClass("on"),
        new Date().getTime() - n > 1e4)
      : ($(this).parent(".game_sum").children(".game_sumIn").slideUp("fast"),
        $(this).removeClass("on"));
  });
  $(".icon_inforID").click(function () {
    layer.closeAll("tips");
    $(".container_main").css("position", "fixed");
    $(".inforMDrop").css("display") == "none"
      ? ($(".inforMDrop").slideDown("fast"),
        $(this).children(".icon_inforMoney").addClass("on"),
        $(".btn_header_menu_open,.btn_footer_menu_open").slideUp("fast"),
        $(".btn_header_menu,.btn_footer_menu").removeClass("on"),
        new Date().getTime() - n > 1e4 &&
          (PlatinfoTopNew(), (n = new Date().getTime())),
        $("body").css("overflow", "hidden"),
        $(".inforMDropBG").show(),
        $(".header").css("z-index", "99"))
      : ($(".inforMDrop").hide(),
        $(this).children(".icon_inforMoney").removeClass("on"),
        $(".container_main").css("position", "none"),
        $("body").css("overflow", "none"),
        $(".inforMDropBG").hide(),
        $(".header").css("z-index", ""));
    event.stopPropagation();
  });
  $(".inforMDrop").click(function (n) {
    n.stopPropagation();
  });
  $(".inforMDropBG").click(function () {
    $(".inforMDrop").css("display") != "none" &&
      ($(".inforMDrop").hide(),
      $(this).children(".icon_inforMoney").removeClass("on"),
      $(".container_main").css("position", "none"),
      $("body").css("overflow", "none"),
      $(".header").css("z-index", ""));
    $(".inforMDropBG").hide();
  });
  $(".btn_eachGame_sumT").click(function () {
    $(this)
      .parent(".eachGame_sum")
      .children(".eachGame_sumIn")
      .css("display") == "none"
      ? ($(this)
          .parent(".eachGame_sum")
          .children(".eachGame_sumIn")
          .slideDown("fast"),
        $(this).addClass("on"))
      : ($(this)
          .parent(".eachGame_sum")
          .children(".eachGame_sumIn")
          .slideUp("fast"),
        $(this).removeClass("on"));
  });
  $(".btn_recordSearch_T").click(function () {
    $(this)
      .parent(".recordSearch")
      .children(".recordSearch_In")
      .css("display") == "none"
      ? ($(this)
          .parent(".recordSearch")
          .children(".recordSearch_In")
          .slideDown("fast"),
        $(this).addClass("on"))
      : ($(this)
          .parent(".recordSearch")
          .children(".recordSearch_In")
          .slideUp("fast"),
        $(this).removeClass("on"));
  });
  $("i.history_btn").click(function (n) {
    $(this)
      .parent("#withdraw_bankID")
      .children("#withdraw_bankIn")
      .css("display") == "none"
      ? $(this)
          .parent("#withdraw_bankID")
          .children("#withdraw_bankIn")
          .slideDown("fast")
      : $(this)
          .parent("#withdraw_bankID")
          .children("#withdraw_bankIn")
          .slideUp("fast");
    n.stopPropagation();
    $("html").on("click", function () {
      $("#withdraw_bankIn").is(":hidden") ||
        $("#withdraw_bankIn").slideUp("fast");
    });
  });
  fnSetList("tradeRec_list");
  fnSetList("pMail_list");
  fnSetList3("news_list", ".news");
  fnSetList2("bonusRec_list");
  fnSetList3("sMoney_list", ".sMoney");
  fnSetList2("FAQ_list");
  $(".firstCagayan_list").click(function () {
    $(this)
      .parent(".firstCagayan_h")
      .children(".related_content")
      .css("display") == "none"
      ? ($(this)
          .parent(".firstCagayan_h")
          .children(".related_content")
          .slideDown("fast"),
        $(this).addClass("on"))
      : ($(this)
          .parent(".firstCagayan_h")
          .children(".related_content")
          .slideUp("fast"),
        $(this).removeClass("on"));
  });
  $("html").on("click", function (n) {
    closeMenu(n);
    $(".freeHint").is(":visible") &&
      n.target.className != "btn_free" &&
      n.target.className != "freeHint" &&
      freeHint();
  });
  $("html").on("click", ".layui-layer-tips", function (n) {
    n.stopPropagation();
  });
  $("#main-container").on("click", function (n) {
    checkKeyboardHide(n);
  });
  $("body").on("click", ".mask", function (n) {
    checkKeyboardHide(n);
  });
  location.href.indexOf("M_ChgPass.aspx") == -1 &&
    location.href.indexOf("M_ChgData.aspx") == -1 &&
    location.href.indexOf("M_Add2.aspx") == -1 &&
    location.href.indexOf("N_ForgotPassWord.aspx") == -1 &&
    location.href.toLocaleLowerCase().indexOf("n_setvoicepass.aspx") == -1 &&
    window.addEventListener("scroll", function () {
      layer.closeAll("tips");
    });
  $(".phoneverify .Rclose").on("click", function () {
    layer.closeAll();
  });
  $(".btn_ADclose").on("click", function () {
    dlAppEle = $(".btn_ADnew").detach();
    $.cookie("hideAD", "1", { path: "/" });
    setGameListHeight();
    isShowBaseball && loadWBCIcon();
    loadLineIcon();
    loadLotteryIcon();
    loadAVIcon();
  });
});
hideLine = !1;
navCheck = !0;
document.addEventListener("touchstart", function () {}, !0);
document.addEventListener(
  "touchmove",
  function () {
    closeMenu();
    layer.closeAll("tips");
  },
  !0
);

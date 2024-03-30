/* 縮小失敗。正在傳回未縮小的內容。
(716,21-22): run-time error JS1005: Expected '(': {
(718,9-10): run-time error JS1006: Expected ')': }
(718,9-10): run-time error JS1008: Expected '{': }
(718,10-11): run-time error JS1195: Expected expression: ,
(719,29-30): run-time error JS1010: Expected identifier: (
(726,21-22): run-time error JS1005: Expected '(': {
(728,9-10): run-time error JS1006: Expected ')': }
(728,9-10): run-time error JS1008: Expected '{': }
(730,2-3): run-time error JS1195: Expected expression: )
(764,1): run-time error JS1009: Expected '}'
(764,1): run-time error JS1107: Expecting more source characters
(709,20-31): run-time error JS1301: End of file encountered before function is properly closed: function ()
(764,1): run-time error JS1107: Expecting more source characters
(764,1): run-time error JS1009: Expected '}'
(686,15-26): run-time error JS1301: End of file encountered before function is properly closed: function ()
(764,1): run-time error JS1107: Expecting more source characters
(764,1): run-time error JS1006: Expected ')'
 */
$(document).ready(function () {
  var windowInnerHeight, intervalTimer;
  var userAgent = navigator.userAgent.toLowerCase();
  var footerTop = parseInt($(".footer").css("top"));
  var stopChangeFooter;

  $(".loginID,.loginPW").focus(function (e) {
    var bodyScrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;
    var inputOffsetTop = $(this)[0].getBoundingClientRect().top;
    var headerTop = 105;
    // 在android firefox速度太快移動會先下再上，所以放慢移動速度
    var movingSpeed = 600;

    if (userAgent.match(/(\(ipod|\(iphone|\(ipad)/)) {
      headerTop = 50;
      movingSpeed = 300;
    }

    if (
      $(".bg_header").length !== 0 &&
      $(".bg_header").css("display") !== "none"
    ) {
      headerTop += $(".bg_header").height();
    }
    if ($(".infor").length !== 0 && $(".infor").css("display") !== "none") {
      headerTop += $(".infor").height();
    }
    if ($(".container_T").length) {
      headerTop += $(".container_T").height();
    }

    $("html,body").animate(
      { scrollTop: bodyScrollTop + inputOffsetTop - headerTop },
      movingSpeed
    );
  });

  //$("textarea:not(#massage,.gift_textarea,.NoteMessage)").focus(function (e) {
  //    $(".footer,.footer_login").css('display', 'none').hide();
  //    windowInnerHeight = null;

  //    var tempScrollTop = null;
  //    setTimeout(function () {
  //        windowInnerHeight = window.innerHeight;
  //        if (intervalTimer) {
  //            clearInterval(intervalTimer);
  //        }
  //        intervalTimer = setInterval(function () {
  //            // 计时器执行的，需要判断窗口可视高度，如果改变说明android键盘隐藏了
  //            // 这里逻辑可以更改下，有可能其他js事件会导致高度变化，这里就只做个简单判断了
  //            if (windowInnerHeight && window.innerHeight > windowInnerHeight) {
  //                clearInterval(intervalTimer);
  //            }
  //            else {
  //                if (tempScrollTop == null) {
  //                    var headerTop = -10;
  //                    headerTop += jQuery(".bg_header").height();
  //                    headerTop += jQuery(".infor").height();
  //                    $('html,body').animate({ scrollTop: headerTop }, 200);

  //                    tempScrollTop = headerTop;
  //                }
  //            }
  //        }, 200);
  //    }, 500);
  //});

  // 彈跳視窗控制
  $("#callPopup").click(function () {
    $("#popup_open").show();
    $(".footer_DW_open").removeClass("on");
    //var bodyScroll = $(window).scrollTop();
    //$('.container_main').css({ 'position': 'fixed', 'top': '-' + bodyScroll + 'px' });
  });
  $("#callPopup2").click(function () {
    $("#popup_open2").show();
    $(".footer_DW_open").removeClass("on");
    //var bodyScroll = $(window).scrollTop();
    //$('.container_main').css({ 'position': 'fixed', 'top': '-' + bodyScroll + 'px' });
  });
  $("#callPopup3").click(function () {
    $("#popup_open").show();
    $(".footer_DW_open").removeClass("on");
    //var bodyScroll = $(window).scrollTop();
    //$('.container_main').css({ 'position': 'fixed', 'top': '-' + bodyScroll + 'px' });
  });
  $(".popup_close").click(function () {
    $(".mask,.mask_join,.mask_all").hide();
    var bodyScroll = $(window).scrollTop();
    $(".container_main").removeAttr("style");
    $(window).scrollTop(bodyScroll);
  });
  $("#VRlottery").click(function () {
    $("#popup_open").show();
    $(".footer_DW_open").removeClass("on");
    var bodyScroll = $(window).scrollTop();
    $(".container_main").css({
      position: "fixed",
      top: "-" + bodyScroll + "px",
    });
  });
  $("#openGame").click(function () {
    $("#popup_open").hide();
    $("#popup_Game").show();
  });
  $("#Popup_excl").click(function () {
    $("#excl_Popup").show();
  });
  //會員註冊
  //$("#btn_msgBox").click(function () {
  //    $('#msgBox').show();
  //    var bodyScroll = $(window).scrollTop();
  //    $('.container_main').css({ 'position': 'fixed', 'top': '-' + bodyScroll + 'px' });
  //});
  //$("#msgBox *").click(function () {
  //    event.stopPropagation();
  //});
  //$(".msgBox .btn_close").click(function () {
  //    $(this).closest('[class*="mask"]').hide();
  //    var bodyScroll = $(window).scrollTop();
  //    $('.container_main').removeAttr('style');
  //    $(window).scrollTop(bodyScroll);
  //});
  //會員註冊-會員帳號提示字
  $("#accountID").focusout(function () {
    $("#accountID_open").show();
  });
  $("#accountID_open")
    .children("a")
    .click(function () {
      $("#accountID_open").hide();
    });
  //搜尋條件
  $("#Search_T").click(function () {
    if ($("#Search_In").css("display") == "none") {
      $("#Search_In").slideDown("fast");
      $(this).addClass("on");
    } else {
      $("#Search_In").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //展開選單-金流選擇
  $(".btn_depositSelect_T").click(function () {
    if (
      $(this)
        .parent(".deposit_select")
        .children(".depositSelect_In")
        .css("display") == "none"
    ) {
      $(this)
        .parent(".deposit_select")
        .children(".depositSelect_In")
        .slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this)
        .parent(".deposit_select")
        .children(".depositSelect_In")
        .slideUp("fast");
      $(this).removeClass("on");
    }
  });
  $(".btn_newsSelect_T").click(function () {
    if (
      $(this)
        .parent(".news_select")
        .children(".newsSelect_In")
        .css("display") == "none"
    ) {
      $(this)
        .parent(".news_select")
        .children(".newsSelect_In")
        .slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this).parent(".news_select").children(".newsSelect_In").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  $(".loginID,.loginPW").focus(function () {
    $(".login_main").addClass("on");
  });
  $(".loginID,.loginPW").blur(function () {
    $(".login_main").removeClass("on");
  });

  //提款專區-銀行帳號
  $("#btn_bankID").click(function () {
    if ($("#bankID_In").css("display") == "none") {
      $("#bankID_In").slideDown("fast");
    } else {
      $("#bankID_In").slideUp("fast");
    }
  });
  $("#bankID_In").click(function () {
    $("#bankID_In").slideUp("fast");
  });
  ////交易记录
  // $(".tradeRec").children(".tradeRec_list:first").children(".tradeRec_listT").addClass("on");
  // $(".tradeRec").children(".tradeRec_list:first").children(".tradeRec_listIn").slideDown();
  // $(".tradeRec_listTR").click(function () {
  //     if ($(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").css("display") == "none") {
  //         $(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").slideDown("fast");
  //         $(this).parent(".tradeRec_listT").addClass("on");
  //     } else {
  //         $(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").slideUp("fast");
  //         $(this).parent(".tradeRec_listT").removeClass("on");
  //     }
  // });
  //公告/活動贈點
  $(".news")
    .children(".news_list:first")
    .children(".news_listT")
    .addClass("on");
  $(".news").children(".news_list:first").children(".news_listIn").slideDown();
  $(".news_listT").click(function () {
    if (
      $(this).parent(".news_list").children(".news_listIn").css("display") ==
      "none"
    ) {
      $(this).parent(".news_list").children(".news_listIn").slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this).parent(".news_list").children(".news_listIn").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //活动点数-類別切換
  $(".btn_BRSelect_T").click(function () {
    if (
      $(this).parent(".BRSelect").children(".BRSelect_In").css("display") ==
      "none"
    ) {
      $(this).parent(".BRSelect").children(".BRSelect_In").slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this).parent(".BRSelect").children(".BRSelect_In").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //活动点数-列表
  $(".bonusRec")
    .children(".bonusRec_list:first")
    .children(".bonusRec_listT")
    .addClass("on");
  $(".bonusRec")
    .children(".bonusRec_list:first")
    .children(".bonusRec_listIn")
    .slideDown();
  $(".bonusRec_listT").click(function () {
    if (
      $(this)
        .parent(".bonusRec_list")
        .children(".bonusRec_listIn")
        .css("display") == "none"
    ) {
      $(this)
        .parent(".bonusRec_list")
        .children(".bonusRec_listIn")
        .slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this)
        .parent(".bonusRec_list")
        .children(".bonusRec_listIn")
        .slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //最新優惠
  $(".bonus_list").click(function () {
    if ($(this).children(".bonus_listIn").css("display") == "none") {
      $(this).children(".bonus_listIn").slideDown("fast");
      $(this).children(".bonus_listT").addClass("on");
    } else {
      $(this).children(".bonus_listIn").slideUp("fast");
      $(this).children(".bonus_listT").removeClass("on");
    }
  });
  $(".bonus_listIn").click(function (e) {
    event.stopPropagation();
  });
  $(".WCtop").click(function () {
    // 先關閉
    $(".WC_Table_member")
      .find(".on")
      .not(this)
      .toggleClass("on")
      .siblings(".WCbottm")
      .slideToggle();
    // 後打開
    $(this).toggleClass("on").siblings(".WCbottm").slideToggle();
  });
  $(".BAR_list:first").addClass("on");
  $(".BAR_list").click(function () {
    if ($(this).children(".BAR_listIn").css("display") == "none") {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });
  //关于我们/牌照展示
  $(".license_arrow").click(function () {
    if (
      $(this)
        .parent(".license_list")
        .children(".license_listIn")
        .css("display") == "none"
    ) {
      $(this)
        .parent(".license_list")
        .children(".license_listIn")
        .slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this)
        .parent(".license_list")
        .children(".license_listIn")
        .slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //帮助中心-類別選擇
  //開啟網站導覽區塊，預設定位在網站導覽功能
  $(".helpSelect").children(".helpSelect_In").slideDown();
  $(".btn_helpSelect_T").addClass("on");
  $(".btn_helpSelect_T").click(function () {
    if (
      $(this).parent(".helpSelect").children(".helpSelect_In").css("display") ==
      "none"
    ) {
      $(this)
        .parent(".helpSelect")
        .children(".helpSelect_In")
        .slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this).parent(".helpSelect").children(".helpSelect_In").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //帮助中心
  $(".FAQ_listT").click(function () {
    if (
      $(this).parent(".FAQ_list").children(".FAQ_listIn").css("display") ==
      "none"
    ) {
      $(this).parent(".FAQ_list").children(".FAQ_listIn").slideDown("fast");
      $(this).addClass("on");
    } else {
      $(this).parent(".FAQ_list").children(".FAQ_listIn").slideUp("fast");
      $(this).removeClass("on");
    }
  });
  //遊戲維護中(首頁)-提示氣泡
  var maintainTimeout;
  $('[class*="btn_GL"]').click(function () {
    if (maintainTimeout) {
      clearTimeout(maintainTimeout);
    }

    if (
      $(this).hasClass("maintain") ||
      $(this).closest(".container_main").hasClass("container_login")
    ) {
      $(".gameMainTain_in").not($(this).find(".gameMainTain_in")).hide();
      $(".footer_maintain").hide();

      $(this).find(".gameMainTain_in").toggle();

      maintainTimeout = setTimeout(function () {
        $(".gameMainTain_in").hide();
      }, 3000);
    }
  });
  $(function () {
    $(document).bind("click touchend", function (e) {
      var target = $(e.target);
      if (
        target.closest(
          '[class*="btn_GL"].maintain,.container_login [class*="btn_GL"]'
        ).length == 0
      ) {
        $(".gameMainTain_in").hide();
      }
    });
  });
  // T24302: 移除 :not(.btn_footer_DW)' 判斷，改由函式內判斷
  $(document).on(
    "click",
    ".footer_list.off,.btn_footer_deposit.off,.btn_footer_withdrawal.off,.btn_footer_transfer.off",
    _.debounce(
      function () {
        var elemMaintain = $(this).find(".footer_maintain");

        if ($(this).attr("class").indexOf("footer_list") == -1) {
          $(".footer_DW_open").addClass("on");
          elemMaintain = $(this).next(".footer_maintain");
        }

        // T24302: 未登入情況下還是要跑這一段
        if (maintainTimeout) {
          clearTimeout(maintainTimeout);
        }

        $(".footer_maintain").not(elemMaintain).hide();

        elemMaintain.toggle();

        maintainTimeout = setTimeout(function () {
          console.log("timeout..");
          if (elemMaintain.css("display") === "block") {
            console.log("hide");
            elemMaintain.hide();
          }
        }, 3000);
      },
      300,
      { leading: true, trailing: false }
    )
  );
  //補充註冊/zaloPay泡泡提示視窗 注意寫在這邊不會有效果 已移至RegisterAdditionally.Controller.ts 裡
  $(".btn_prompt:not(.keyboard)").click(function () {
    $(".txt_prompt")
      .not($(this).siblings())
      .hide()
      .parent()
      .css("z-index", "1");
    $(this).siblings(".txt_prompt").show().parent().css("z-index", "2");
  });
  $(".btn_prompt.keyboard").click(function () {
    $(".txt_prompt")
      .not($(this).siblings())
      .hide()
      .parent()
      .css("z-index", "1");
    if ($(this).siblings(".numInputArea").hasClass("on")) {
      $(this).siblings(".txt_prompt").hide().parent().css("z-index", "1");
    } else {
      $(this).siblings(".txt_prompt").show().parent().css("z-index", "2");
    }
  });

  //聊天室维护
  $(".btn_chat.off").click(function () {
    if (maintainTimeout) {
      clearTimeout(maintainTimeout);
    }
    var elemMaintain = $(this).find(".chatMaintain");
    $(".chatMaintain").not(elemMaintain).hide();
    elemMaintain.toggle();

    maintainTimeout = setTimeout(function () {
      if (elemMaintain.css("display") === "block") {
        elemMaintain.hide();
      }
    }, 3000);
  });
  $(function () {
    $(document).bind("click touchend", function (e) {
      var target = $(e.target);
      if (target.closest(".btn_chat.off,.chatMaintain").length == 0) {
        $(".chatMaintain").hide();
      }
    });
  });

  $(document).on("focus", ":text,:password,textarea", function (event) {
    var timeout = userAgent.match(/(\(ipod|\(iphone|\(ipad)/) ? 500 : 0;

    setTimeout(function () {
      $(".mask").addClass("mask_noBottom");
    }, timeout);
    windowInnerHeight = window.innerHeight;
    $(".footer").css("top", footerTop);
    clearTimeout(stopChangeFooter);
  });

  $(document).on("focusout", ":text,:password,textarea", function (event) {
    FooterRecover();
  });

  $(window).resize(function () {
    //checking for window resize event
    if (window.innerHeight != windowInnerHeight) {
      FooterRecover();
    }
  });

  function FooterRecover() {
    var timeout = userAgent.match(/(\(ipod|\(iphone|\(ipad)/) ? 600 : 0;

    stopChangeFooter = setTimeout(function () {
      $(".mask").removeClass("mask_noBottom");
      $(".footer").css("top", "");
    }, timeout);
  }

  //置頂KU APP下載廣告
  $(".btn_ADclose").click(function () {
    $(".btn_AD").remove();
  });

  //我/會員中心
  $(".memberDrop").click(function () {
    $(this)
      .siblings(".memberDrop")
      .removeClass("on")
      .find("ul")
      .slideUp("fast");
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).find("ul").slideDown("fast");
    } else {
      $(this).find("ul").slideUp("fast");
    }
  });
  $(".memberDrop ul").click(function () {
    event.stopPropagation();
  });

  //新手导引视频-美女影音导览
  $(".girlTitle > li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    switch ($(this).attr("id")) {
      case "btn_girlC01":
        $(this).parent().animate({ scrollLeft: 0 }, 500);
        $("#img_girlC01,#girlC01")
          .fadeIn()
          .addClass("on")
          .siblings('img,[class*="girlContent"]')
          .removeClass("on")
          .hide();
        break;
      case "btn_girlC02":
        $(this).parent().animate({ scrollLeft: 0 }, 500);
        $("#img_girlC02,#girlC02")
          .fadeIn()
          .addClass("on")
          .siblings('img,[class*="girlContent"]')
          .removeClass("on")
          .hide();
        break;
      case "btn_girlC03":
        $("#img_girlC03,#girlC03")
          .fadeIn()
          .addClass("on")
          .siblings('img,[class*="girlContent"]')
          .removeClass("on")
          .hide();
        break;
      case "btn_girlC04":
        $(this).parent().animate({ scrollLeft: 200 }, 500);
        $("#img_girlC04,#girlC04")
          .fadeIn()
          .addClass("on")
          .siblings('img,[class*="girlContent"]')
          .removeClass("on")
          .hide();
        break;
      case "btn_girlC05":
        $(this).parent().animate({ scrollLeft: 200 }, 500);
        $("#img_girlC05,#girlC05")
          .fadeIn()
          .addClass("on")
          .siblings('img,[class*="girlContent"]')
          .removeClass("on")
          .hide();
        break;
    }
  });

  if (jQuery("#GameMainMenu").val()) {
    //首頁
    var myBullet = JSON.parse(jQuery("#GameMainMenu").val());

    //首頁-swiper
    var swiper2 = new Swiper(".swiper2", {
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var setKey = "GameMainMenuID";
    var currentIndex = 0;
    if (localStorage) {
      var item = localStorage.getItem(setKey);
      if (item !== null && !$(".container_main").hasClass("container_login")) {
        currentIndex = item;
      } else {
        localStorage.removeItem(setKey);
      }
    }

    var swiper1 = new Swiper(".swiper1", {
      touchRatio: 0.5,
      direction: "vertical",
      autoHeight: true,
      initialSlide: currentIndex,
      pagination: {
        el: ".GameList_L",
        bulletClass: "btn_GL",
        bulletActiveClass: "on",
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className}" >
                                                <div class="${myBullet[index].iconClass}"></div>
                                                <h2>${myBullet[index].name}</h2>
                                            </div >`;
        },
      },
      on: {
        slideChangeTransitionEnd: function () {
          $(".swiper-slide").scrollTop(0);

          if (localStorage) {
            localStorage.setItem(setKey, this.activeIndex);
          }
        },
      },
    });

    var startScroll, touchStart, touchCurrent;
    swiper1.slides.on(
      "touchstart",
      function (e) {
        startScroll = Math.floor(this.scrollTop);
        touchStart = e.targetTouches[0].pageY; /*取得初次觸摸*/
      },
      true
    );

    swiper1.slides.on(
      "touchmove",
      function (e) {
        touchCurrent = e.targetTouches[0].pageY; /*取得當前觸摸*/
        var touchesDiff =
          touchCurrent - touchStart; /*第一次觸摸與當前觸摸 的差距*/
        var slide = this;
        var onlyScrolling =
          /*判斷是否滾動*/
          slide.scrollHeight > slide.offsetHeight && //當slide可滾動時才允許
          ((touchesDiff < 0 && startScroll === 0) || //從上邊緣開始滾動到底部
            (touchesDiff > 0 &&
              startScroll === slide.scrollHeight - slide.offsetHeight) || //從底部邊緣開始滾動到頂部
            (startScroll > 0 &&
              startScroll < slide.scrollHeight - slide.offsetHeight &&
              (slide.scrollHeight < slide.clientHeight + slide.scrollTop - 10 ||
                touchesDiff > 0))); //從中間開始
        if (onlyScrolling) {
          e.stopPropagation(); /*關閉silde touchmove事件*/
        }
      },
      true
    );
  }

  //2022FIFAWorldCup

  /*首頁_選單*/
  $(".mainMenu").click(function () {
    $(this).toggleClass("active");
  });

  /*得獎名單_取消選取*/
  $(document).bind("touchstart", function (e) {
    /*首頁_選單& 得獎名單*/
    if (
      $(e.target).closest(`.mainMenu,.winner li,.giftList li`).length <= 0 &&
      $(".mainMenu,.winner li,.giftList li").hasClass("active")
    ) {
      $(".mainMenu,.winner li,.giftList li").removeClass("active");
    }
  });

  /*彈窗按鈕回饋*/
  $(".popMsgSend,.memberSend,.selectBotton,.gameLink_btn").on(
    "touchstart",
    function () {
      $(this).addClass("active");
    }
  );

  $(".popMsgSend,.memberSend,.selectBotton,.gameLink_btn").on(
    "touchend",
    function () {
      $(this).removeClass("active");
    }
  );

  //最新優惠-直播
  $("#callBV").click(function () {
    $("#bonusVideo").fadeIn().find("video")[0].play();
    $(".footer_DW_open").removeClass("on");
    var bodyScroll = $(window).scrollTop();
    $(".container_main").css({
      position: "fixed",
      top: "-" + bodyScroll + "px",
    });
  });

  $(".btn_closeBV").click(function () {
    $(this).closest(".bonusVideo").fadeOut().find("video").get(0).pause();
    var bodyScroll = $(window).scrollTop();
    $("body").removeAttr("style");
    $(window).scrollTop(bodyScroll);
  });

  $(".btn_weekVideo li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    switch ($(this).attr("id")) {
      case "callWeek01":
        $(".weekIn").find("video").get(0).pause();
        $("#week01").show().siblings(".weekIn").hide();
        $("#week01").find("video")[0].play();
        break;
      case "callWeek02":
        $(".weekIn").find("video").get(0).pause();
        $("#week02").show().siblings(".weekIn").hide();
        $("#week02").find("video")[0].play();
        break;
    }
  });
});
//啟動手機active狀態
document.addEventListener("touchstart", function () {}, true);
$(document).ready(function () {
  //個人訊息
  var checkAllStau = false;

  $(".pMail_listTitle").off();
  $("div.pMail").on("click", ".pMail_listTitle,.icon_arrow", function () {
    $(".pMail_listT").not($(this)).removeClass("on");
    $(".pMail_listIn").not($(this).siblings()).slideUp("fast");
    if (
      $(this)
        .parent(".pMail_listT")
        .parent(".pMail_list")
        .children(".pMail_listIn")
        .css("display") == "none"
    ) {
      $(this)
        .parent(".pMail_listT")
        .parent(".pMail_list")
        .children(".pMail_listIn")
        .slideDown("fast");
      $(this).parent(".pMail_listT").addClass("on");
    } else {
      $(this)
        .parent(".pMail_listT")
        .parent(".pMail_list")
        .children(".pMail_listIn")
        .slideUp("fast");
      $(this).parent(".pMail_listT").removeClass("on");
    }
  });

  $("div.pMail").on("click", ".pMailCheckbox", function () {
    if (!$(this).is(".on")) {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });

  $("#BtnSelectAll").on("click", function () {
    $(".pMailCheckbox").addClass("on");
  });

  $("#BtnSelectAllCancel").on("click", function () {
    $(".pMailCheckbox").removeClass("on");
  });

  //移除JS對交易紀錄對tRecCheckbox的控制，避免與ng-class互相影響Start
  //交易記錄
  //$("div.tradeRec").on("click", ".tRecCheckbox", function () {
  //    if (!$(this).is(".on")) {
  //        $(this).addClass("on");
  //    } else {
  //        $(this).removeClass("on");
  //    }
  //});

  //$("#BtnSelectAll").on("click", function () {
  //    $(".tRecCheckbox").addClass("on");
  //});

  //$("#BtnSelectAllCancel").on("click", function () {
  //    $(".tRecCheckbox").removeClass("on");
  //});
  //移除JS對交易紀錄對tRecCheckbox的控制，避免與ng-class互相影響End
  // Mobile 存提專區的點選效果控制
  $(document).on("touchstart", function (event) {
    event.stopPropagation();

    var isFooterDWOpen =
      $(".footer_DW_open").length > 0 && $(".footer_DW_open").hasClass("on");
    var clickId = $(event.target).attr("id");
    var isFooterIcon =
      ($(event.target).hasClass("footer_list") ||
        clickId == "MemberDeposit" ||
        clickId == "MemberWithdrawal" ||
        clickId == "PlatformTransfer" ||
        clickId == "PlatformTransferSpan" ||
        clickId == "MemberDepositSpan" ||
        clickId == "MemberWithdrawalSpan" ||
        clickId == "MemberDepositImage" ||
        clickId == "MemberWithdrawalImage" ||
        clickId == "DepositCenterH5") &&
      !$(event.target).hasClass("btn_footer_DW off");
    if (
      $("#FooterTouchstartControll").length > 0 &&
      !isFooterIcon &&
      isFooterDWOpen
    ) {
      $(".footer_DW_open").removeClass("on");
      $("body")
        .css("-webkit-overflow-scrolling", "touch")
        .css("overflow", "auto");

      angular
        .element("#FooterTouchstartControll")
        .scope()
        .$apply(() => {
          angular
            .element("#FooterTouchstartControll")
            .controller()
            .RefreshFooterActivity();
        });
    }
  });
  //T24717 第6點 點擊登入頁外區域進行滑動，請調整為登入頁下層無法滑動
  $("#callLogin").click(function () {
    var display = $(".mask,.mask_join,.mask_all").css("display");

    if (display === "block") {
      $(".container_main").css({ position: "fixed", top: "0px" });
    } else {
      $(".container_main").removeAttr("style");
    }
  });
  // 當頁面是好禮五選一時，控制上面的menu 關閉
  var closeMenu = function (event) {
    event.stopPropagation();

    if (event.originalEvent.data != "closemenu") {
      return;
    }

    $(".inforMDropOUT").slideUp("fast");
    $("div.icon_inforMoney").removeClass("on");
  };

  $(window).on("message", closeMenu);

  // T45861 移除使網頁不可滾動
  $(".popup_close").click(function () {
    $("html,body").removeClass("ovfHiden");
  });
});
var oriApp = (function () {
  return {
    changeTitle: function (title) {
      if (typeof JBS != "undefined") {
        //安卓
        JBS.ChangeTitle(title);
      } else if (window.webkit) {
        //ios
        window.webkit.messageHandlers.ChangeTitle.postMessage(title);
      }
    },
    shareRefLink: function (url) {
      //分享APP面板
      if (typeof JBS != "undefined") {
        //安卓
        JBS.shareRefLink(url);
      } else if (typeof window["webkit"] != "undefined" && window["webkit"]) {
        //ios
        window["webkit"].messageHandlers.shareRefLink.postMessage(url);
      }
    },
    backUrl: function (url) {
      //回上一頁
      if (typeof JBS != "undefined") {
        //安卓
        JBS.backUrl(url);
      } else if (typeof window["webkit"] != "undefined" && window["webkit"]) {
        //ios
        window["webkit"].messageHandlers.backUrl.postMessage(url);
      }
    },
    goBackUrl: function () {
      //前往上一頁
      try {
        if (typeof JBS != "undefined") {
          //安卓
          JBS.goBackUrl();
        } else if (typeof window["webkit"] != "undefined" && window["webkit"]) {
          //ios
          window["webkit"].messageHandlers.goBackUrl.postMessage("goBackUrl");
        }
      } catch {}
    },
    CheckGame: function (path) {
      //進入遊戲
      try {
        if (typeof JBS != "undefined") {
          //安卓
          JBS.CheckGame(path);
        } else if (typeof window["webkit"] != "undefined" && window["webkit"]) {
          //ios
          window["webkit"].messageHandlers.CheckGame.postMessage(path);
        }
      } catch {}
    },
  };
})();
var embeddedApp = (function () {
  var _SaveImageCallback;

  return {
    openCslive: function (url) {
      if (typeof JBS != "undefined") {
        //安卓
        JBS.openCslive(url);
      } else if (window.webkit) {
        //ios
        window.webkit.messageHandlers.openCslive.postMessage(url);
      } else {
        window.open("/OnlineCS", "_blank");
      }
    },
    initSaveImagesCallback: function (callback) {
      //APP下載完圖片主動回CAll介面
      _SaveImageCallback = callback;
    },
    saveImages: function (url, callback) {
      if (window.webkit) {
        window.webkit.messageHandlers.saveImages.postMessage(url);
      }
    },
    saveImagesCallback: function (result) {
      if (typeof _SaveImageCallback == "function") {
        if (result) {
          _SaveImageCallback(true);
        } else {
          _SaveImageCallback(false);
        }
      }
    },
  };
})();

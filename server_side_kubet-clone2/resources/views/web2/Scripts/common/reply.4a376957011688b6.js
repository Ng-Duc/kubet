function openHdfw2() {
  layer.closeAll();
  var n = $("#reply_popup_box").data("index");
  if (!(n > 0)) {
    if (flagHd2) return !1;
    flagHd2 = !0;
    $.ajax({
      url: "/LoadData/ReplyService.ashx",
      data: "type1=1",
      type: "get",
      cache: !1,
      timeout: t1,
      error: function () {
        flagHd2 = !1;
      },
      success: function (n) {
        flagHd2 = !1;
        n == "1"
          ? openHdfw()
          : $.fn.alert(n, function () {
              location.reload();
              isMsg = !0;
            });
      },
    });
  }
}
function openHdfw2_2() {
  if (flagHd2) return !1;
  flagHd2 = !0;
  $.ajax({
    url: "/LoadData/ReplyService.ashx",
    data: "type1=1",
    type: "get",
    cache: !1,
    timeout: t1,
    error: function () {
      flagHd2 = !1;
    },
    success: function (n) {
      flagHd2 = !1;
      n == "1" ? fnBack("N_Kfzx.aspx?action=2") : fnTipCss("#Hdfw", n, 3, 3);
    },
  });
}
function submitHdfw(n) {
  var u = "0",
    f = "0",
    r = !1,
    t,
    i;
  if (
    ($(".kfzx-waring_b").hide(),
    n == 0 &&
      ($(".waring_b").hide(),
      $(".li").each(function () {
        $(this).hasClass("on") && (u = $(this).attr("data-value"));
      }),
      $(".contentbtn_box_a li").each(function () {
        $(this).hasClass("on") && (f = $(this).attr("data-value"));
      })),
    (t = {
      accounts: $("#hd_accounts").val(),
      Language: $("#Language").is("span")
        ? $("#Language").data("val")
        : n != 1
        ? u
        : $("#Language").val(),
      ProblemType:
        $(".flagSendCode").size() > 0
          ? 6
          : $("#ProblemType").is("span")
          ? $("#ProblemType").data("val")
          : n != 1
          ? f
          : $("#ProblemType").val(),
      phone: $("#phone").val(),
      agent: GetQueryString("status") == null ? "" : GetQueryString("status"),
    }),
    (i = $("#reply_popup_box").size() > 0),
    i)
  ) {
    if (
      ((t.Language =
        n == 0 ? u : $("#Language").selectBox("getValue").toString()),
      (t.ProblemType =
        $(".flagSendCode").size() > 0
          ? 6
          : n == 0
          ? f
          : $("#ProblemType").selectBox("getValue").toString()),
      t.ProblemType == "0" && ($(".waring_b.problem").show(), (r = !0)),
      (t.phone == "+" || t.phone == "") &&
        i &&
        ($(".waring_b.phone").show(), (r = !0)),
      r)
    )
      return !1;
    if (t.Language == "0")
      return $.fn.alert(webRes.Font_ReplyText11, function () {}), !1;
  } else {
    if (
      (t.ProblemType == "0" && ($(".kfzx-waring_b.problem").show(), (r = !0)),
      (t.phone == "+" || t.phone == "") &&
        n == "1" &&
        ($(".kfzx-waring_b.phone").show(), (r = !0)),
      r)
    )
      return !1;
    if (t.Language == "0") return $(".waring_b.language").show(), !1;
  }
  if (flagHd) return !1;
  i && $(".layui-layer-open-custom").loading();
  flagHd = !0;
  $.ajax({
    url: "/LoadData/ReplyService.ashx",
    data: t,
    type: "post",
    cache: !1,
    timeout: t1,
    error: function () {
      i && $(".layui-layer-open-custom").closeloading();
      flagHd = !1;
    },
    success: function (t) {
      i && $(".layui-layer-open-custom").closeloading();
      flagHd = !1;
      t == "1" || t == "2"
        ? isIndex()
          ? fnGetTip(webRes.Font_ReplyText3, "btn_openCall", 3, 4)
          : alertP(webRes.Font_ReplyText3)
        : $.fn.alert(t, function () {
            location.reload();
          });
      n != 1 &&
        ((document.getElementById("phone").value = tempPhoneHdfw), closeHdfw());
      i
        ? ($(".contentbtn_box_a li").removeClass("on"),
          $(".contentbtn_box li").removeClass("on"),
          $(".contentbtn_box li:first-child").addClass("on"))
        : typeof defaultSelect == "function"
        ? defaultSelect()
        : $("#Language,#ProblemType").val("0");
    },
  });
}
function fnHdfwConfirm1() {
  var t = "0",
    i = "0",
    f;
  $(".waring_b").hide();
  $(".form_Lang input").each(function () {
    $(this).hasClass("on") && (t = $(this).attr("data-value"));
  });
  $(".form_Quest input").each(function () {
    $(this).hasClass("on") && (i = $(this).attr("data-value"));
  });
  var r = i,
    u = t,
    n = $.trim($("#phone").val());
  if (r == "0") {
    $(".waring_b.problem").show();
    return;
  }
  if (n == "+" || n == "") {
    $(".waring_b.phone").show();
    return;
  }
  if (u == "0") {
    $.fn.msg(webRes.Font_ReplyText11);
    return;
  }
  flagHd ||
    ((flagHd = !0),
    (f = {
      accounts: $("#hd_accounts").val(),
      Language: u,
      ProblemType: r,
      phone: n,
    }),
    loading(),
    $.ajax({
      url: "/LoadData/ReplyService.ashx",
      data: f,
      type: "post",
      cache: !1,
      timeout: t1,
      error: function () {
        closeloading();
        flagHd = !1;
      },
      success: function (n) {
        closeloading();
        flagHd = !1;
        n == "1" || n == "2"
          ? $.fn.msg(webRes.Font_ReplyText3, "N_Kfzx.aspx?init=1")
          : $.fn.msg(n, !1, function () {
              n == webRes.Font_ReplyOff && fnBack("N_Kfzx.aspx?init=1");
            });
      },
    }));
}
function alertP(n) {
  $.fn.alert('<span class="inline1" style="max-width:300px;">' + n + "</span>");
}
function closeHdfw() {
  var n = $("#reply_popup_box").data("index");
  $.fn.close(n);
  $("#reply_popup_box").data("index", 0);
  closeBlue("Hdfw");
}
function openHdfw() {
  var i = $("#reply_popup_box").data("index"),
    n,
    t;
  i > 0 ||
    ((n = isIndex() ? (IsYn ? 560 : 542) : IsYn ? 574 : 556),
    (t = $.fn.open(
      webRes.Font_Hdfw,
      "#reply_popup_box",
      511,
      n,
      "no",
      function () {
        $("#reply_popup_box").data("index", 0);
        $(".waring_b").hide();
        $(".contentbtn_box_a li").removeClass("on");
        $(".contentbtn_box li").removeClass("on");
        $(".contentbtn_box li:first-child").addClass("on");
        document.getElementById("phone").value = tempPhoneHdfw;
      }
    )),
    $("#reply_popup_box").data("index", t),
    openBlue("Hdfw"),
    $("#reply_popup_box")
      .parent()
      .parent()
      .css("padding-bottom", IsYn ? "17px" : "12px"),
    $("#reply_popup_box").parent().parent().css("background", "#fff"),
    (tempPhoneHdfw = document.getElementById("phone").value));
}
var flagHd2 = !1,
  tempPhoneHdfw,
  t1 = 15e3,
  flagHd = !1;

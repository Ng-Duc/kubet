function bindJackpotHdzq() {
  $(".sub_doc a").on("click", function () {
    var n, t;
    $(this).hasClass("on") ||
      ($(this).addClass("on").siblings().removeClass("on"),
      (n = $(this).data("gtype")),
      $(".listArea").hide(),
      n == 3
        ? ($(".listArea").eq(1).show(),
          $(".sub_doc a").length < 3
            ? ((t = $(".sub_doc a").eq(0).data("gtype")),
              $(".menuBonus").hide(),
              getRankListData(t),
              $(".NB_desc")
                .eq(t - 1)
                .show(),
              $(".listArea").eq(1).css("margin-top", "22px"))
            : ($(".menuBonus").show(),
              $(".menuBonus a")
                .eq(0)
                .text(GetTextLanguage("百家樂", "百家乐", "Baccarat")),
              $(".menuBonus a")
                .eq(1)
                .text(GetTextLanguage("色碟", "色碟", "Xóc Đĩa")),
              $(".NB_desc").eq(0).show(),
              getRankListData(1)))
        : ($(".listArea").eq(0).show(),
          $(".NB_desc").hide(),
          $(".menuBonus").show(),
          $(".menuBonus a")
            .eq(0)
            .text(GetTextLanguage("小彩金", "小彩金", "Giải nhỏ")),
          $(".menuBonus a")
            .eq(1)
            .text(GetTextLanguage("超級彩金", "超级彩金", "Giải siêu cấp")),
          getJackpotData(n, 2, 1)),
      $(".menuBonus a").eq(0).addClass("on").siblings().removeClass("on"));
  });
  $(".menuBonus a").on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on").siblings().removeClass("on");
      var n = $(this).data("tab"),
        t = $(".sub_doc a.on").data("gtype");
      t != 3
        ? getJackpotData(t, n, 1)
        : (getRankListData(n),
          $(".NB_desc").hide(),
          $(".NB_desc")
            .eq(2 - n)
            .show());
    }
  });
  gType =
    gType == "" || $(".sub_doc a").length < 3
      ? $(".sub_doc a").eq(0).data("gtype")
      : gType;
  $(".sub_doc a[data-gtype=" + gType + "]").addClass("on");
  gType == 3
    ? ($(".pagesNum").show(),
      $(".NB_desc").show(),
      $(".menuBonus").hide(),
      $(".listArea").eq(1).show())
    : ($(".listArea").eq(0).show(), getJackpotData(gType, 2, 1));
}
function bindHdzqHeader(n) {
  var t = "<tr class='jpHeader'>";
  n == 1
    ? superHeader[GetTextLanguage("tw", "cn", "yn")].forEach((n) => {
        t += `<th>${n}</th>`;
      })
    : smallHeader[GetTextLanguage("tw", "cn", "yn")].forEach((n) => {
        t += `<th>${n}</th>`;
      });
  t += "</tr>";
  $(".listArea").eq(0).find(".sjList3 tbody").html(t);
}
function getJackpotData(n, t, i) {
  flag ||
    ((flag = !0),
    $.fn.loading(),
    $.ajax({
      url: "/LoadData/Jackpot.ashx",
      type: "post",
      dataType: "Json",
      data: { req: "gethdzqdata", gType: n, tab: t, page: i },
      cache: !1,
      timeout: 15e3,
      error: function () {
        flag = !1;
        bindHdzqHeader(t);
        $(".jpHeader").after(
          '<tr><td colspan="' +
            (7 - t) +
            '" class="noMSG"><img src = "../images/main/icon_noMessage.svg"><div>' +
            webRes.Font_NoRecord_2 +
            "</div></td></tr>"
        );
        $.fn.closeloading();
        $("#pagination").hide();
      },
      success: function (n) {
        n != ""
          ? (bindHdzqHeader(t),
            $(".jpHeader").after(n.tr),
            $(".jpHeader")
              .siblings("tr")
              .find(".td_currency")
              .each(function () {
                var n = IsCn ? $(this).text() : $(this).text() * 5;
                $(this).text(
                  new Intl.NumberFormat(
                    GetTextLanguage("zh-hant", "zh-cn", "vi-vn")
                  ).format(n)
                );
              }),
            $("#pagination").show(),
            $.fn.initPage({
              pagebox: $("#pagination"),
              currentIndex: i,
              pageSize: 10,
              totalCount: n.totalCount,
              pageHide: 5,
              pageHideBtn: 1,
              callback: function (n) {
                getJackpotData(
                  $(".sub_doc a.on").data("gtype"),
                  $(".menuBonus a.on").data("tab"),
                  n
                );
              },
            }))
          : (bindHdzqHeader(t),
            $(".jpHeader").after(
              '<tr><td colspan="' +
                (7 - t) +
                '" class="noMSG"><img src = "../images/main/icon_noMessage.svg"><div>' +
                webRes.Font_NoRecord_2 +
                "</div></td></tr>"
            ),
            $("#pagination").hide());
      },
      complete: function () {
        $.fn.closeloading();
        flag = !1;
      },
    }));
}
function changeJackpotRate(n, t) {
  let i = Math.abs(t.endVal - t.startVal);
  myNewDuration = i / n;
  t.options.duration = myNewDuration;
  t.reset();
}
function initializeJackpotCounter() {
  $.ajax({
    url: "/LoadData/Jackpot.ashx",
    type: "post",
    data: { req: "getindexdata" },
    cache: !1,
    timeout: 15e3,
    success: function (n) {
      var t, i, f, r, u;
      if (n != "" && n.split("|").length == 2) {
        if (
          ((t = n.split("|")[0]),
          (i = n.split("|")[1]),
          $("#runMsgDiv").css("max-width", "935px"),
          t == "" && i == "")
        )
          return;
        const e = {
          decimalPlaces: 1,
          useEasing: !1,
          separator: IsYn
            ? '<span class="jackpotD"></span>'
            : '<span class="jackpotP"></span>',
          decimal: IsYn
            ? '<span class="jackpotP"></span>'
            : '<span class="jackpotD"></span>',
          numerals: [
            '<span class="jackpotN0"></span>',
            '<span class="jackpotN1"></span>',
            '<span class="jackpotN2"></span>',
            '<span class="jackpotN3"></span>',
            '<span class="jackpotN4"></span>',
            '<span class="jackpotN5"></span>',
            '<span class="jackpotN6"></span>',
            '<span class="jackpotN7"></span>',
            '<span class="jackpotN8"></span>',
            '<span class="jackpotN9"></span>',
          ],
        };
        f = !1;
        t == "-2"
          ? ((f = !0),
            showJackpotGif(1, !0),
            $(".jackpotBAC").addClass("on").show())
          : t == "-1"
          ? $(".jackpotBAC").addClass("on").show()
          : t != "" &&
            (showJackpotGif(1, !1),
            IsCn || (t = t * 5),
            (e.startVal = t - (t <= 120 ? 0 : 120)),
            (r = new CountUp("jackpotNum01", t, e)),
            changeJackpotRate(myRate, r),
            r.error ? console.error(r.error) : r.start(),
            $(".jackpotBAC").addClass("on").show());
        i == "-2"
          ? ((f = !0),
            showJackpotGif(2, !0),
            $(".jackpotCD").addClass("on").show())
          : i == "-1"
          ? $(".jackpotCD").addClass("on").show()
          : i != "" &&
            (showJackpotGif(2, !1),
            IsCn || (i = i * 5),
            (e.startVal = i - (i <= 120 ? 0 : 120)),
            (u = new CountUp("jackpotNum02", i, e)),
            changeJackpotRate(myRate, u),
            u.error ? console.error(u.error) : u.start(),
            $(".jackpotCD").addClass("on").show());
        showJackpotCounter();
        f ||
          ($(".jackpotBox").show(),
          $(".btn_jackpot").show(),
          $("#runMsgDiv").css("max-width", ""),
          $(".marquee").length > 0 &&
            $(".marquee").attr(
              "style",
              "--marqueeWidth:" + $("#runMsgDiv").width() + "px"
            ));
      } else n == "" && $("#runMsgDiv").css("max-width", "935px");
    },
  });
}
function showJackpotCounter() {
  var t = 6500,
    n =
      "javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx?action=J&gType={0}', 870, 730)";
  if (
    ($(".jackpotBAC, .jackpotCD").attr("onclick", ""),
    $(".jackpotBox .on").length == 2)
  ) {
    $(".jackpotBox").on("animationiteration", function () {
      setTimeout(function () {
        $(".btn_jackpot").attr("onclick", n.replace("{0}", "2"));
      }, t);
      $(".btn_jackpot").attr("onclick", n.replace("{0}", "1"));
    });
    setTimeout(function () {
      $(".btn_jackpot").attr("onclick", n.replace("{0}", "2"));
    }, t);
    $(".btn_jackpot").attr("onclick", n.replace("{0}", "1"));
  } else
    $(".jackpotBAC").hasClass("on") &&
      $(".btn_jackpot").attr("onclick", n.replace("{0}", "1")),
      $(".jackpotCD").hasClass("on") &&
        $(".btn_jackpot").attr("onclick", n.replace("{0}", "2")),
      $(".jackpotBox").css("-webkit-animation", "none"),
      $(".jackpotBox").css("animation", "none");
  $(".jackpotBAC.on").hasClass("gif") &&
    $(".jackpotBAC img").attr("onclick", n.replace("{0}", "1"));
  $(".jackpotCD.on").hasClass("gif") &&
    $(".jackpotCD img").attr("onclick", n.replace("{0}", "2"));
}
function showJackpotGif(n, t) {
  var i = function () {
    $(".jackpotBox").show();
    $(".btn_jackpot").show();
    $("#runMsgDiv").css("max-width", "");
    $(".marquee").length > 0 &&
      $(".marquee").attr(
        "style",
        "--marqueeWidth:" + $("#runMsgDiv").width() + "px"
      );
  };
  t
    ? (n == 1 &&
        ($(".jackpotBAC img")
          .attr(
            "src",
            "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/jackBac.gif"
          )
          .load(i),
        $(".jackpotBAC .jackpotNum").hide(),
        $(".jackpotBAC").addClass("gif")),
      n == 2 &&
        ($(".jackpotCD img")
          .attr(
            "src",
            "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/jackCD.gif"
          )
          .load(i),
        $(".jackpotCD .jackpotNum").hide(),
        $(".jackpotCD").addClass("gif")))
    : (n == 1 &&
        ($(".jackpotBAC img")
          .attr(
            "src",
            "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/jackBac.png"
          )
          .load(i),
        $(".jackpotBAC .jackpotNum").show(),
        $(".jackpotBAC").removeClass("gif")),
      n == 2 &&
        ($(".jackpotCD img")
          .attr(
            "src",
            "/images/main/" + GetTextLanguage("tw", "cn", "yn") + "/jackCD.png"
          )
          .load(i),
        $(".jackpotCD .jackpotNum").show(),
        $(".jackpotCD").removeClass("gif")));
}
function getRankListData(n) {
  flag2 ||
    ((flag2 = !0),
    $.fn.loading(),
    $.ajax({
      url: "/LoadData/Jackpot.ashx",
      type: "post",
      dataType: "Json",
      data: { req: "getranklist", gtype: n },
      cache: !1,
      timeout: 15e3,
      error: function () {
        flag2 = !1;
        $.fn.closeloading();
      },
      success: function (n) {
        n != "" && n != null && bindRankListPage(n);
      },
      complete: function () {
        $.fn.closeloading();
        flag2 = !1;
      },
    }));
}
function bindRankListPage(n) {
  var h = Math.ceil(n.length / 20),
    r,
    o,
    t;
  for (rankListHtml = [], r = 0; r < h; r++) {
    var e = n.slice(r * 20, (r + 1) * 20),
      s = Math.ceil(e.length / 2),
      i = e.slice(0, s),
      f = e.slice(s),
      u = "";
    for (t = 0; t < i.length; t++)
      (u += "<tr>"),
        t >= f.length
          ? (u += `<td class='t_Red'>${new Intl.NumberFormat(
              GetTextLanguage("zh-hant", "zh-cn", "vi-vn")
            ).format(
              IsCn ? i[t].f_integral : i[t].f_integral * 5
            )}</td><td>${parseInt(
              i[t].f_percent * 100
            )}%</td><td></td><td></td>`)
          : ((u += `<td class='t_Red'>${new Intl.NumberFormat(
              GetTextLanguage("zh-hant", "zh-cn", "vi-vn")
            ).format(
              IsCn ? i[t].f_integral : i[t].f_integral * 5
            )}</td><td>${parseInt(i[t].f_percent * 100)}%</td>`),
            (u += `<td class='t_Red'>${new Intl.NumberFormat(
              GetTextLanguage("zh-hant", "zh-cn", "vi-vn")
            ).format(
              IsCn ? f[t].f_integral : f[t].f_integral * 5
            )}</td><td>${parseInt(f[t].f_percent * 100)}%</td>`)),
        (u += "</tr>");
    rankListHtml[r] = u;
  }
  if (
    ($(".ruleHeader").siblings().remove(),
    $(".ruleHeader").after(rankListHtml[0]),
    rankListHtml.length > 1)
  ) {
    for (o = "", t = 0; t < rankListHtml.length; t++)
      o += `<a onclick='updateRankListPage(${t + 1})'>${t + 1}</a>`;
    $(".pagesNum2").html(o);
    $(".pagesNum2 a").eq(0).addClass("on");
  } else $(".pagesNum2").html("");
}
function updateRankListPage(n) {
  if (!(n > rankListHtml.length)) {
    var t = n - 1;
    $(".pagesNum2 a").eq(t).hasClass("on") ||
      ($(".pagesNum2 a").removeClass("on"),
      $(".pagesNum2 a").eq(t).addClass("on"),
      $(".ruleHeader").siblings().remove(),
      $(".ruleHeader").after(rankListHtml[t]));
  }
}
var superHeader = {
    tw: ["日期", "中獎時間", "得獎暱稱", "超級彩金", "比例", "最小單局押分量"],
    cn: ["日期", "中奖时间", "得奖昵称", "超级彩金", "比例", "最小单局押分量"],
    yn: [
      "Ngày tháng",
      "Thời gian",
      "Biệt danh",
      "Giải siêu cấp",
      "Tỷ lệ",
      "Số tiền cược tối<br>thiểu mỗi ván",
    ],
  },
  smallHeader = {
    tw: ["日期", "中獎時間", "得獎暱稱", "小彩金", "最小單局押分量"],
    cn: ["日期", "中奖时间", "得奖昵称", "小彩金", "最小单局押分量"],
    yn: [
      "Ngày tháng",
      "Thời gian",
      "Biệt danh",
      "Giải nhỏ",
      "Số tiền cược tối<br>thiểu mỗi ván",
    ],
  },
  flag = !1,
  myRate = 2,
  myNewDuration = 0,
  flag2 = !1,
  rankListHtml;

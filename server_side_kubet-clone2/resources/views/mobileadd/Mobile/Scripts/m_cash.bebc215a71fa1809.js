function ddlPayAppend(n, t) {
  if (location.href.indexOf("M_Mypurse") !== -1) {
    var i = $("#" + n + " .inputselect");
    i.empty();
    n !== "ddlPayout" &&
      i.append(
        "<option value=''>" +
          GetTextLanguage("請選擇", "请选择", "Tùy chọn") +
          "</option>"
      );
    i.append(
      "<option value='0'>" +
        GetTextLanguage("主帳戶", "主账户", "TK Chính") +
        "</option>"
    );
    t !== "36" &&
      nbb1 &&
      i.append(
        "<option value='36'>" +
          GetTextLanguage("KU體育", "KU体育", "KU Thể Thao") +
          "</option>"
      );
    t !== "24" &&
      ku1 &&
      i.append(
        "<option value='24'>" +
          GetTextLanguage("KU真人", "KU真人", "KU Casino") +
          "</option>"
      );
    t !== "1" &&
      ball1 &&
      i.append(
        "<option value='1'>" +
          GetTextLanguage("KU彩球", "KU彩票", "KU Xổ Số") +
          "</option>"
      );
    t !== "63" &&
      IsTw &&
      wg1 &&
      i.append(
        "<option value='63'>" +
          GetTextLanguage("WG彩球", "WG彩球", "WG") +
          "</option>"
      );
    t !== "29" &&
      IsCn &&
      vr1 &&
      i.append(
        "<option value='29'>" +
          GetTextLanguage("VR彩票", "VR彩票", "") +
          "</option>"
      );
    t !== "6" &&
      cnf1 &&
      i.append(
        "<option value='6'>" +
          GetTextLanguage("3D電子", "3D电子", "3D Games") +
          "</option>"
      );
    t !== "23" &&
      bng1 &&
      i.append(
        "<option value='23'>" +
          GetTextLanguage("BNG電子", "BNG电子", "BNG Games") +
          "</option>"
      );
    t != "27" &&
      IsCn &&
      cq1 &&
      i.append(
        "<option value='27'>" + GetTextLanguage("", "CQ9电子", "") + "</option>"
      );
    t !== "12" &&
      IsCn &&
      dt1 &&
      i.append(
        "<option value='12'>" + GetTextLanguage("", "LGD电子", "") + "</option>"
      );
    t !== "44" &&
      ds1 &&
      i.append(
        "<option value='44'>" +
          GetTextLanguage("ZEBRA電子", "DS电子", "DS Games") +
          "</option>"
      );
    t !== "53" &&
      IsYn &&
      ks1 &&
      i.append(
        "<option value='53'>" +
          GetTextLanguage("KS捕魚", "KS捕鱼", "KS Games") +
          "</option>"
      );
    t !== "48" &&
      ps1 &&
      i.append(
        "<option value='48'>" +
          GetTextLanguage("RK5電子", "RK5电子", "RK5 Games") +
          "</option>"
      );
    t !== "58" &&
      IsTw &&
      ftg1 &&
      i.append(
        "<option value='58'>" +
          GetTextLanguage("福星電子", "FTG电子", "FTG Games") +
          "</option>"
      );
    t !== "54" &&
      IsYn &&
      pg1 &&
      i.append(
        "<option value='54'>" +
          GetTextLanguage("", "PG电子", "PG Games") +
          "</option>"
      );
    t !== "41" &&
      IsYn &&
      ka1 &&
      i.append(
        "<option value='41'>" +
          GetTextLanguage("KA電子", "KA电子", "KA Games") +
          "</option>"
      );
    t !== "58" &&
      IsYn &&
      ftg1 &&
      i.append(
        "<option value='58'>" +
          GetTextLanguage("福星電子", "FTG电子", "FTG Games") +
          "</option>"
      );
    t !== "59" &&
      IsYn &&
      fc1 &&
      i.append(
        "<option value='59'>" +
          GetTextLanguage("FC電子", "FC电子", "FC Games") +
          "</option>"
      );
    t !== "53" &&
      IsTw &&
      ks1 &&
      i.append(
        "<option value='53'>" +
          GetTextLanguage("KS捕魚", "KS捕鱼", "KS Games") +
          "</option>"
      );
    t !== "67" &&
      IsTw &&
      obfish1 &&
      i.append(
        "<option value='67'>" +
          GetTextLanguage("DB捕魚", "DB捕鱼", "DB Bắn Cá") +
          "</option>"
      );
    t !== "41" &&
      IsCn &&
      ka1 &&
      i.append(
        "<option value='41'>" +
          GetTextLanguage("KA電子", "KA电子", "KA Games") +
          "</option>"
      );
    t !== "54" &&
      IsCn &&
      pg1 &&
      i.append(
        "<option value='54'>" +
          GetTextLanguage("", "PG电子", "PG Games") +
          "</option>"
      );
    t !== "58" &&
      IsCn &&
      ftg1 &&
      i.append(
        "<option value='58'>" +
          GetTextLanguage("福星電子", "FTG电子", "FTG Games") +
          "</option>"
      );
    t !== "59" &&
      IsCn &&
      fc1 &&
      i.append(
        "<option value='59'>" +
          GetTextLanguage("FC電子", "FC电子", "FC Games") +
          "</option>"
      );
    t !== "66" &&
      IsYn &&
      agvnfish1 &&
      i.append(
        "<option value='66'>" +
          GetTextLanguage("", "", webRes.Font_Platform_f_isAGVNFishOpen) +
          "</option>"
      );
    t !== "67" &&
      IsYn &&
      obfish1 &&
      i.append(
        "<option value='67'>" +
          GetTextLanguage("DB捕魚", "DB捕鱼", "DB Bắn Cá") +
          "</option>"
      );
    t !== "30" &&
      IsYn &&
      lc1 &&
      i.append(
        "<option value='30'>" +
          GetTextLanguage("", "凯旋棋牌", "V8 Đối Kháng") +
          "</option>"
      );
    t !== "53" &&
      IsCn &&
      ks1 &&
      i.append(
        "<option value='53'>" +
          GetTextLanguage("KS捕魚", "KS捕鱼", "KS Games") +
          "</option>"
      );
    t !== "67" &&
      IsCn &&
      obfish1 &&
      i.append(
        "<option value='67'>" +
          GetTextLanguage("DB捕魚", "DB捕鱼", "DB Bắn Cá") +
          "</option>"
      );
    t != "18" &&
      (IsTw ||
        (cmd1 &&
          i.append(
            "<option value='18'>" +
              GetTextLanguage("", "亚投体育", "CMD Thể Thao") +
              "</option>"
          )));
    t !== "34" &&
      (IsTw ||
        (sb1 &&
          i.append(
            "<option value='34'>" +
              GetTextLanguage("", "沙巴馆", "SABA") +
              "</option>"
          )));
    t !== "57" &&
      (IsTw ||
        (ai1 &&
          i.append(
            "<option value='57'>" +
              GetTextLanguage("", "AI体育", "AI") +
              "</option>"
          )));
    t !== "60" &&
      (IsCn ||
        (obsport1 &&
          i.append(
            "<option value='60'>" +
              GetTextLanguage("熊貓體育", "熊猫体育", "PANDA Thể Thao") +
              "</option>"
          )));
    t !== "31" &&
      pin1 &&
      i.append(
        "<option value='31'>" +
          GetTextLanguage("平博體育", "平博体育", "PINNACLE") +
          "</option>"
      );
    t !== "60" &&
      IsCn &&
      obsport1 &&
      i.append(
        "<option value='60'>" +
          GetTextLanguage("熊貓體育", "熊猫体育", "PANDA Thể Thao") +
          "</option>"
      );
    t !== "4" &&
      (IsTw ||
        (ag1 &&
          i.append(
            "<option value='4'>" +
              GetTextLanguage("", "AG馆", "AG Casino") +
              "</option>"
          )));
    t !== "11" &&
      (IsYn ||
        (ab1 &&
          i.append(
            "<option value='11'>" +
              GetTextLanguage("歐博館", "欧博馆", "") +
              "</option>"
          )));
    t !== "10" &&
      (IsTw ||
        (bbin1 &&
          i.append(
            "<option value='10'>" +
              GetTextLanguage("", "BBIN馆", "BBIN Casino") +
              "</option>"
          )));
    t !== "3" &&
      IsTw &&
      hg1 &&
      i.append(
        "<option value='3'>" +
          GetTextLanguage("HG真人", "HG真人", "") +
          "</option>"
      );
    t !== "9" &&
      (IsYn ||
        (og1 &&
          i.append(
            "<option value='9'>" +
              GetTextLanguage("OG真人", "OG真人", "") +
              "</option>"
          )));
    t !== "42" &&
      dg1 &&
      i.append(
        "<option value='42'>" +
          GetTextLanguage("DG真人", "DG真人", "DG Casino") +
          "</option>"
      );
    t === "43" ||
      IsCn ||
      (sa1 &&
        i.append(
          "<option value='43'>" +
            GetTextLanguage("SA真人", "SA真人", "SA Casino") +
            "</option>"
        ));
    t !== "40" &&
      wm1 &&
      i.append(
        "<option value='40'>" +
          GetTextLanguage("WM真人", "WM真人", "WM Casino") +
          "</option>"
      );
    t !== "52" &&
      IsYn &&
      aes1 &&
      i.append(
        "<option value='52'>" +
          GetTextLanguage("AES真人", "AES真人", "AES Casino") +
          "</option>"
      );
    t !== "56" &&
      (IsTw ||
        (evo1 &&
          i.append(
            "<option value='56'>" +
              GetTextLanguage("", "EVO真人", "EVO Casino") +
              "</option>"
          )));
    t !== "61" &&
      oblive1 &&
      i.append(
        "<option value='61'>" +
          GetTextLanguage("DB真人", "DB真人", "DB Casino") +
          "</option>"
      );
    t !== "7" &&
      IsCn &&
      ky1 &&
      i.append(
        "<option value='7'>" +
          GetTextLanguage("開元棋牌", "开元棋牌", "") +
          "</option>"
      );
    t !== "30" &&
      IsCn &&
      lc1 &&
      i.append(
        "<option value='30'>" +
          GetTextLanguage("", "凯旋棋牌", "V8 Đối Kháng") +
          "</option>"
      );
    t !== "50" &&
      (IsTw ||
        (im1 &&
          i.append(
            "<option value='50'>" +
              GetTextLanguage("IM电竞", "IM电竞", "IM Esports") +
              "</option>"
          )));
    t !== "62" &&
      obesport1 &&
      i.append(
        "<option value='62'>" +
          GetTextLanguage("DB電競", "DB电竞", "DB Esports") +
          "</option>"
      );
    t !== "47" &&
      sm1 &&
      i.append(
        "<option value='47'>" +
          GetTextLanguage("酷映直播", "酷映直播", "COOL-IN") +
          "</option>"
      );
    t !== "55" &&
      activitySiteSwitch &&
      n !== "ddlPayin" &&
      fren1 &&
      i.append(
        "<option value='55'>" +
          GetTextLanguage("好友錢包", "好友钱包", "Ví bạn bè") +
          "</option>"
      );
  }
}
function payoutinChange() {
  $("#ddlPayout .inputselect,#ddlPayin .inputselect").on("change", function () {
    var t = $(this).parent().attr("id"),
      n = $(this).val(),
      i;
    if (!isNE(n)) {
      $("#payinMoney").text("0");
      return;
    }
    t == "ddlPayout"
      ? ((transNum = "payoutMoney"),
        $("#payinMoney").text("0"),
        ddlPayAppend("ddlPayin", n))
      : (transNum = "payinMoney");
    $("#" + t + " .transNum").show();
    i = MypurseId[n].type;
    UpdatePanelPTZZ(i, transNum);
  });
}
function payoutchange(n) {
  ddlPayAppend("ddlPayin", n);
}
function ddlPayinDefault() {
  var n, t, i;
  if (
    ((type = $.fn.GetQueryStringByName("type")),
    (n = ""),
    (t = "—请选择—"),
    type != "")
  )
    switch (type) {
      case "ColorBall":
        n = "1";
        t = "KU彩票";
        break;
      case "3D":
        n = "6";
        t = "3D电子";
    }
  i = "#ddlPayin";
  $.divselect2(i);
  $(i + " span").text(t);
  $(i + " .inputselect").val(n);
}
function open_myPurse(n, t) {
  var e, r, o, c;
  if (((countReturn = 0), n.GameID !== "-1" && !$(".mask").size())) {
    closeMenu();
    var i = n.transType == "game",
      s = i ? "disabled" : "",
      u = "",
      f = "",
      h = getPageInfo().isGamePage;
    if (
      (IsTw && (n.GameID == 44 || n.GameID == 46) && (u = " zebraTransfer"),
      IsYn || (u += " space"),
      IsCn ||
        n.GameID != 61 ||
        (f =
          "<li><div class='t_red' style='font-size:0.8em; width: 100%;'>" +
          GetTextLanguage(
            "轉帳金額需5點(含)以上",
            "转帐金额需5点(含)以上",
            "Số điểm chuyển phải từ 5 điểm trở lên"
          ) +
          "</div></li>"),
      !h && i
        ? ((e = " readonly style='pointer-events:none;"),
          OSPlatform.isPc && !IsIPad() && (e = ""),
          (r =
            "<ul class='formMoneyBox" +
            u +
            "'><li class='formPopup_sum'><div><div class='formTitle'>" +
            n.payoutAccoount +
            "</div><div class='PopupMoney630' id='" +
            n.payoutMoneyID +
            "' >loading..</div><div class='formTitle' id='TransferB'>" +
            n.payinAccount +
            "</div><div class='PopupMoney630'  id='" +
            n.payinMoneyID +
            "'>loading..</div></div><div class='formPopup_btn'><div class='btnChange disabled'>" +
            webRes.Font_Mypurse_TrunAll +
            "</div></div></li></ul><ul class='transferBox'><li><input type='number' pattern='[0-9]*' id='txtMoneyTo' class='w72L inputTBig' data-number='money'" +
            e +
            "' placeholder='" +
            webRes.Font_PleaseEnterTransferMoney +
            "'/><div class='butIngame'>" +
            webRes.N_FontTransfer +
            "</div></li>" +
            f +
            "<li><div class='numPlusArea'><div data-value='100'>+100</div><div data-value='500'>+500</div><div data-value='1000'>+1000</div><div data-value='2000'>+2000</div></div></li><li><div id='keyboard-box'></div></li></ul><div class='form_button630'><button type='button' class='w100 transfer_butEnter gameTrans " +
            s +
            "' id='btn_no'>" +
            webRes.Font_PurseTransfer +
            "</button></div><div id='ddlPayinto'><input type='hidden' value='" +
            n.GameID +
            "' class='inputselect' id='hiddenPayin' /></div>"))
        : (r =
            "<ul class='formMoneyBox" +
            u +
            "'><li class='formPopup_sum'><div><div class='formTitle'>" +
            n.payoutAccoount +
            "</div><div class='PopupMoney630' id='" +
            n.payoutMoneyID +
            "' >loading..</div><div class='formTitle' id='TransferB'>" +
            n.payinAccount +
            "</div><div class='PopupMoney630'  id='" +
            n.payinMoneyID +
            "'>loading..</div></div><div class='formPopup_btn'><div class='btnChange disabled'>" +
            webRes.Font_Mypurse_TrunAll +
            "</div></div></li></ul><ul class='transferBox'><li><input type='number' pattern='[0-9]*' id='txtMoneyTo' class='w72L inputTBig' data-number='money' readonly style='pointer-events:none;' placeholder='" +
            webRes.Font_PleaseEnterTransferMoney +
            "'/><div class='butIngame'>" +
            webRes.N_FontTransfer +
            "</div></li>" +
            f +
            "<li><div class='numPlusArea'><div data-value='100'>+100</div><div data-value='500'>+500</div><div data-value='1000'>+1000</div><div data-value='2000'>+2000</div></div></li><li><div id='keyboard-box'></div></li></ul><div id='ddlPayinto'><input type='hidden' value='" +
            n.GameID +
            "' class='inputselect' id='hiddenPayin' /></div>"),
      n.GameID == "36" &&
        (r +=
          n.GameUrl.url.indexOf && n.GameUrl.url.indexOf("&isNew=1") > 0
            ? '<input type="hidden" id="hid_isNBB_New" value="1" />'
            : '<input type="hidden" id="hid_isNBB_New" value="0" />'),
      (!i || h) &&
        (r +=
          "|<div class='form_button630 transfer'><button type='button' class='w100 transfer_butEnter " +
          s +
          "' id='btn_no'>" +
          webRes.Font_PurseTransfer +
          "</button></div>"),
      open_pop({
        type: 8,
        title: webRes.Font_Mypurse_msg52,
        oktext:
          webRes.Font_sentOut === "Xác nhận"
            ? "Xác nhận chuyển"
            : webRes.Font_sentOut,
        notext: i ? webRes.Font_PurseTransfer : webRes.Font_EnterGame,
        content: r,
        autoclose: !1,
        checkios: !1,
        callback: function () {
          $("#btn_ok,.butIngame").hasClass("disabled") || o();
        },
        cancelback: function () {
          var r, u, f, e;
          $("#btn_no,.transfer_butEnter").hasClass("disabled") ||
            ((r = parseFloat($("#txtMoneyTo").val())),
            (u = /^\d+$/),
            i
              ? ReturnMainPoint(n.GameID, function () {
                  if (typeof fromThirdTransfer == "undefined") close_pop();
                  else {
                    var n = $("#hiddenPayin").val();
                    RefreshBalance(MypurseId[n].type, "kshz");
                    $(".transferBox .caretMask").css("display", "inline-flex");
                  }
                  getPageInfo().isGamePage &&
                    ($("#aMypurse").removeClass("on active"),
                    $("#aMypurse div")
                      .first()
                      .css({ "background-position": "top" }),
                    $("body").css({ overflow: "" }));
                  t && t();
                })
              : r != "" && !isNaN(r) && u.test(r)
              ? o()
              : (close_pop(),
                getPageInfo().isGamePage &&
                  ($("#aMypurse").removeClass("on active"),
                  $("#aMypurse div")
                    .first()
                    .css({ "background-position": "top" })),
                n.GameUrl.url
                  ? (n.GameUrl.url.toLowerCase().indexOf("3dfish") >= 0 &&
                      window.location.href.toLowerCase().indexOf("typ=fish") <
                        0 &&
                      history.pushState("", "", "?typ=fish"),
                    n.GameUrl.opentype == 1
                      ? (setGameCategory(), fnOpenNew(n.GameUrl.url))
                      : ((f = ["1", "24", "36"]),
                        (e =
                          n.GameID == "1"
                            ? "&cbUrl="
                            : n.GameID == "24"
                            ? "&kuUrl="
                            : n.GameID == "36"
                            ? "&nbbUrl="
                            : ""),
                        f.includes(n.GameID) && typeof fastestUrl != "undefined"
                          ? (setGameCategory(),
                            fnBack(n.GameUrl.url + e + fastestUrl))
                          : (setGameCategory(), fnBack(n.GameUrl.url))))
                  : $.fn.msg(
                      GetTextLanguage("敬請期待", "敬请期待", "Chờ nhé"),
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      "layer-msg-transfer"
                    )));
        },
      }),
      (o = function () {
        SendOut(2, function () {
          if (
            (typeof fromThirdTransfer == "undefined" && close_pop(),
            getPageInfo().isGamePage &&
              ($("#aMypurse").removeClass("on active"),
              $("#aMypurse div").first().css({ "background-position": "top" }),
              $("body").css({ overflow: "" })),
            t)
          ) {
            t();
            return;
          }
          if (n.GameUrl.url)
            if (
              (n.GameUrl.url.toLowerCase().indexOf("3dfish") >= 0 &&
                window.location.href.toLowerCase().indexOf("typ=fish") < 0 &&
                history.pushState("", "", "?typ=fish"),
              n.GameUrl.opentype == 1)
            )
              setGameCategory(), fnOpenNew(n.GameUrl.url);
            else {
              var i =
                n.GameID == "1"
                  ? "&cbUrl="
                  : n.GameID == "24"
                  ? "&kuUrl="
                  : n.GameID == "36"
                  ? "&nbbUrl="
                  : "";
              ["1", "24", "36"].includes(n.GameID) &&
              typeof fastestUrl != "undefined"
                ? (setGameCategory(), fnBack(n.GameUrl.url + i + fastestUrl))
                : (setGameCategory(), fnBack(n.GameUrl.url));
            }
          else
            $.fn.msg(
              GetTextLanguage("敬請期待", "敬请期待", "Chờ nhé"),
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              "layer-msg-transfer"
            );
        });
      }),
      i && $(".transfer_butEnter").removeAttr("id"),
      $("div#btn_panel>button#btn_ok").addClass("transfer_button disabled"),
      $(".butIngame").addClass("disabled"),
      $("#btn_panel").hide(),
      $("div#btn_panel>button#btn_no")
        .removeClass("bg_colorGr")
        .addClass("transfer_buttonGame"),
      $("#btn_no").text().trim() == webRes.Font_PurseTransfer &&
        $("div#btn_panel>button#btn_no").addClass("disabled"),
      $(".transfer_butEnter").text().trim() == webRes.Font_PurseTransfer &&
        $(".transfer_butEnter").addClass("disabled"),
      $("div.deposit_submit_text")
        .removeClass("deposit_submit_text")
        .addClass("form formPopup630"),
      $(".full_change,#btn_ok,#txtMoneyTo,.btnChange").addClass("disabled"),
      $(".transferBox").addClass("disabled"),
      IsYn && $("#txtMoneyTo").addClass("yn"),
      IsYn && $(".transferBox").addClass("yn"),
      ((IsIphone() || IsIPad) && !IsAdr()) || $(".inputTBig").addClass("adr"),
      $("#keyboard-box").length > 0
        ? $("#txtMoneyTo").keyboard({
            type: "transfer",
            keybox: $("#keyboard-box"),
            changeValue: function (n, t) {
              var i = $("#lblMainMoney_mini,#lblMainMoney").text();
              i = IsYn ? i.replace(/\./g, "") : i.replace(/,/g, "");
              parseFloat(i) <= t && $(n).val(parseFloat(i));
            },
          })
        : $("#txtMoneyTo").keyboard({ type: "transfer" }),
      $("#txtMoneyTo").keyboard("show"),
      (c = [
        webRes.Font_Platform_f_isKUOpen,
        webRes.Font_NBBAccounts,
        webRes.Font_Platform_f_isBallOpen,
        webRes.Font_SMAccounts,
      ]),
      streamerGiftSwitch &&
        c.includes(n.payinAccount) &&
        $(
          "<li class='formPopup_hint_t'>" +
            webRes.Font_zbzl_msg1 +
            "<span class='zbzlpts'><img class='img_spinner' src='/Mobile/images/main/spinner.svg' /></span><div class='btn_free' onclick='freeHint()'></div><div class='freeHint' style='display: none;'>" +
            webRes.Font_zbzl_msg2 +
            "</div></li>"
        ).insertAfter(".transferBox > li:last"),
      $(".keyboard-mask").css("pointer-events", "none"),
      $(".Rclose").css("pointer-events", "auto"),
      disableCustomKeyboard(),
      (MypurseType[n.payoutType].id = n.payoutMoneyID),
      (MypurseType[n.payinType].id = n.payinMoneyID),
      (MypurseType[n.payoutType].isOpen = n.IsOpenOut),
      (MypurseType[n.payinType].isOpen = n.IsOpenIn),
      (isCheckSingle = !1),
      RefreshBalance(n.payinType, "kshz"),
      n.myPurse != 1)
    )
      $("div#btn_panel>button#btn_ok,.butIngame").addClass("disabled"),
        $("#txtMoneyTo")
          .attr("placeholder", n.myPurse_str)
          .attr("disabled", "disabled")
          .addClass("placehCss"),
        $(".full_change,.btnChange").addClass("disabled");
    else
      $(".full_change,.btnChange").on("click", function () {
        $(this).hasClass("disabled") ||
          TurnAllOut(n.GameID, function () {
            if (
              (typeof fromThirdTransfer == "undefined" && close_pop(),
              typeof fromVR != "undefined" &&
                (disableCustomKeyboard(),
                $("#txtMoneyTo").addClass("disabled")),
              getPageInfo().isGamePage &&
                ($("#aMypurse").removeClass("on active"),
                $("#aMypurse div")
                  .first()
                  .css({ "background-position": "top" }),
                $("body").css({ overflow: "" })),
              t)
            ) {
              t();
              return;
            }
            if (n.GameUrl.url)
              if (n.GameUrl.opentype == 1)
                setGameCategory(), fnOpenNew(n.GameUrl.url);
              else {
                var i =
                  n.GameID == "1"
                    ? "&cbUrl="
                    : n.GameID == "24"
                    ? "&kuUrl="
                    : n.GameID == "36"
                    ? "&nbbUrl="
                    : "";
                ["1", "24", "36"].includes(n.GameID) &&
                typeof fastestUrl != "undefined"
                  ? (setGameCategory(), fnBack(n.GameUrl.url + i + fastestUrl))
                  : (setGameCategory(), fnBack(n.GameUrl.url));
              }
            else
              $.fn.msg(
                GetTextLanguage("敬請期待", "敬请期待", "Chờ nhé"),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                "layer-msg-transfer"
              );
          });
      });
    if (
      (IsYn
        ? $(".keyboard-mask").css("width", "65%")
        : $(".keyboard-mask").css("width", "72%"),
      getPageInfo().isGamePage)
    )
      $(".btn_close").on("click", function () {
        $("#aMypurse").removeClass("on active");
        $("#aMypurse div").first().css({ "background-position": "top" });
      });
    if (OSPlatform.isPc)
      $("#txtMoneyTo").on("keydown", function (n) {
        var i, t;
        if (
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(n.key) < 0
        )
          return !1;
        n.key != "0" &&
          n.key != "Backspace" &&
          ($(".Rclose").show(),
          $("button#btn_ok,.butIngame").removeClass("disabled"));
        i = parseFloat($("#txtMoneyTo").val() + n.key);
        t = $("#lblMainMoney_mini,#lblMainMoney").text();
        t = IsYn ? t.replace(/\./g, "") : t.replace(/,/g, "");
        parseFloat(t) <= i &&
          ($("#txtMoneyTo").val(parseFloat(t)), n.preventDefault());
      });
    $(".numPlusArea")
      .children()
      .on("click", function () {
        var n, i, t;
        $("#txtMoneyTo").hasClass("disabled") ||
          $("#txtMoneyTo").prop("disabled") ||
          ((n = parseFloat($("#txtMoneyTo").val())),
          (i = /^\d+$/),
          (n == "" || isNaN(n) || !i.test(n)) && (n = 0),
          (n += $(this).data("value")),
          (t = $("#lblMainMoney_mini,#lblMainMoney").text()),
          (t = IsYn ? t.replace(/\./g, "") : t.replace(/,/g, "")),
          parseFloat(t) <= n
            ? $("#txtMoneyTo").val(parseFloat(t))
            : $("#txtMoneyTo").val(n),
          $(".Rclose").show(),
          $("button#btn_ok,.butIngame").removeClass("disabled"),
          OSPlatform.isPc && $("#txtMoneyTo").focus());
      });
  }
}
function getMoney(n, t, i) {
  var r = MypurseType[n],
    o,
    e,
    s,
    u,
    f,
    c,
    l;
  if (
    (r.children &&
      !myPlatfom &&
      ((o = !1),
      $.each(r.children, function (n, t) {
        MypurseType[t].isOpen && (o = !0);
      }),
      r.isOpen && (r.isOpen = o)),
    i == "2" && (r.isOpen = t != "-1" && r.isOpen ? !0 : !1),
    (e = []),
    isSize("." + r.id) && e.push("." + r.id),
    isSize("#" + r.id) && e.push("#" + r.id),
    $.each(e, function (i, u) {
      var f, e, o, s;
      r.isOpen ||
      (typeof platformod == "undefined" && r.isOpen) ||
      r.id === "lblMainMoney_mini" ||
      r.id === "lblMainMoney"
        ? ($(u).css("color", "#00ae08"),
          myPlatfom
            ? t == "" &&
              ((f = $("#hiddenPayin").val()),
              $(u).css("color", "red"),
              (f == 6 || f == 14 || f == 32) &&
                $("#btn_no").attr("disabled", "disabled"),
              (t = $(".game_sum").size() > 0 ? Font_Maintain : Font_Maintain2))
            : ($(u).removeAttr("style"), t == "" && (t = 0)),
          (e = ["-3", "-53", "-54", "-55", "-56"]),
          (n == "T-09" || n == "T-18" || n == "T-34") &&
            e.indexOf(t) >= 0 &&
            ((t =
              t == "-53"
                ? webRes.Font_Pleacewait
                : t == "-54"
                ? webRes.Font_Loading
                : t == "-56"
                ? webRes.Font_Maintain
                : webRes.Font_Busy),
            $(u).css("color", "red"),
            $("#btn_no").attr("disabled", "disabled")),
          typeof $(u).parent().prevObject.attr("class") != "undefined" &&
            ($(u).parent().prevObject.attr("class").indexOf("game_sumListR") >
              -1 &&
              u != "#lblMainMoney" &&
              u != "#lblTotalMoney" &&
              ((o = Object.keys(MypurseType).find(
                (n) => MypurseType[n].id === u.substring(1)
              )),
              (s = Object.keys(MypurseId).find((n) => MypurseId[n].type === o)),
              fnReturnBtnShow(u, t, s)),
            parseFloat(t) != NaN && parseFloat(t) > 0
              ? ($(u).css("color", "#00af1d"), $(u).addClass("t_green"))
              : $(u).removeClass("t_green")),
          $(u).text(t))
        : ((t = Font_Maintain2), $(u).css("color", "red").text(t));
    }),
    n == "T-03")
  )
    (s =
      $("#fast_transfer").size() > 0
        ? $("#lblMainMoney").text()
        : $("#lblMainMoney_mini").text()),
      (u = IsYn ? s.replace(/\./g, "") : s.replace(/,/g, "")),
      u != 0 &&
      u != "" &&
      u != webRes.Font_Maintain &&
      u != webRes.Font_Maintain_Sport &&
      (s_myPurse != 0 || s_isMajorF)
        ? (isMainOpen = !0)
        : ((isMainOpen = !1),
          $(".full_change,.btnChange")
            .removeAttr("onclick")
            .addClass("disabled"),
          typeof fromThirdTransfer != "undefined" &&
            (disableCustomKeyboard(), $("#txtMoneyTo").addClass("disabled"))),
      countReturn++,
      CheckTransferMaintain();
  else if (
    (n == "T-04" && $("#cb").size() > 0) ||
    (n == "T-31" && $("#vr").size() > 0) ||
    ((n == "T-24" || n == "T-38" || n == "T-50") && $("#ku").size() > 0)
  ) {
    var h =
        n == "T-04"
          ? "#lblColorMoney"
          : n == "T-24"
          ? "#lblKU"
          : n == "T-38"
          ? "#lblNBB"
          : n == "T-50"
          ? "#lblSM"
          : "#lblVR",
      t = IsYn ? $(h).text().replace(/\./g, "") : $(h).text().replace(/,/g, ""),
      a = IsYn
        ? checkThirdMoney.replace(/\./g, "")
        : checkThirdMoney.replace(/,/g, "");
    s_isMajorF && a > 0
      ? $(".greenShallow").removeClass("btnClose").removeAttr("disabled")
      : t == 0 ||
        t == "" ||
        t == "Loading.." ||
        t == webRes.Font_Maintain ||
        u == webRes.Font_Maintain_Sport
      ? $(".greenShallow").addClass("btnClose").attr("disabled", "disabled")
      : $(".greenShallow").removeClass("btnClose").removeAttr("disabled");
  } else
    ($("#btn_no").text().trim() == webRes.Font_PurseTransfer ||
      $(".transfer_butEnter").text().trim() == webRes.Font_PurseTransfer) &&
      ((f = IsYn
        ? $("#TransferB").next().text().replace(/\./g, "")
        : $("#TransferB").next().text().replace(/,/g, "")),
      f == 0 ||
      f == "" ||
      f == webRes.Font_Maintain ||
      u == webRes.Font_Maintain_Sport ||
      f == webRes.Font_Loading ||
      f == webRes.Font_Busy
        ? $("#btn_no,.transfer_butEnter").addClass("disabled")
        : ((c = transfermod[platformNames[n].id]),
          c &&
            ($("#btn_no").text().trim() == webRes.Font_PurseTransfer &&
              $("#btn_no").removeClass("disabled"),
            $(".transfer_butEnter").text().trim() ==
              webRes.Font_PurseTransfer &&
              $(".transfer_butEnter").removeClass("disabled"))));
  i != "2" &&
    ((l = [
      webRes.Font_Maintain,
      webRes.Font_Pleacewait,
      webRes.Font_Loading,
      webRes.Font_Busy,
      webRes.Font_Maintain_Sport,
    ]),
    payMoneyId.indexOf("payinMoney") > -1 &&
      location.pathname.indexOf("/Mobile/Aspx/M_Mypurse.aspx") > -1 &&
      t == webRes.Font_Maintain &&
      (t = webRes.Font_Maintain2),
    l.indexOf(t) >= 0
      ? $("#" + payMoneyId).css("color", "red")
      : $("#" + payMoneyId).removeAttr("style"),
    $("#" + payMoneyId).text(t));
}
function RefreshBalance(n, t, i) {
  t === "kshz" && (myPlatfom = !0);
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
    success: function (t) {
      if (t.StatusCode == "M-01" || t.StatusCode == "M-001")
        if (typeof fromThirdTransfer == "undefined")
          $.fn.msg(
            t.StatusCode == "M-01"
              ? webRes.Font_LoginOut
              : webRes.Font_KickedOut,
            !1,
            function () {
              fnOut();
            },
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
        else return;
      s_isMajorF = t.IsMajorF;
      platformod = t.PlatformMod[platformNames[n].id];
      checkThirdMoney = t.ThirdPartyMoney;
      MypurseType[n].isOpen = t.PlatformMod[platformNames[n].id];
      transfermod = t.Transfer;
      getMoney("T-03", t.MainMoney);
      streamerGiftSwitch && $(".zbzlpts").text(t.ZbzlPoints);
      var r = $("#hiddenPayin").val();
      (r === "6" || r === "14") && typeof i != "undefined"
        ? getMoney(n, i)
        : getMoney(n, t.ThirdPartyMoney);
      CheckTransferMaintenance(n, t.Transfer);
    },
  });
}
function UpdatePanel(n, t) {
  myPlatfom = t === "kshz" ? !0 : !1;
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
      if (((s_isMajorF = n.IsMajorF), n.StatusCode == "T-10")) {
        var t = n.Data.split("|");
        $("#lblMainMoney").text(t[0]);
        $("#lblTotalMoney").text(t[6]);
        getMoney("T-04", t[1]);
        getMoney("T-06", t[3]);
        getMoney("T-07", t[4]);
        getMoney("T-09", t[7]);
        getMoney("T-11", t[8]);
        getMoney("T-13", t[10]);
        getMoney("T-14", t[11]);
        getMoney("T-15", t[12]);
        getMoney("T-16", t[13]);
        getMoney("T-20", t[15]);
        getMoney("T-27", t[17]);
        getMoney("T-24", t[18]);
        getMoney("T-12", t[19]);
        getMoney("T-29", t[20]);
        getMoney("T-31", t[21]);
        getMoney("T-32", t[22]);
        getMoney("T-33", t[23]);
        getMoney("T-36", t[24]);
        getMoney("T-38", t[25]);
        getMoney("T-42", t[26]);
        getMoney("T-43", t[27]);
        getMoney("T-44", t[28]);
        getMoney("T-45", t[29]);
        getMoney("T-46", t[30]);
        getMoney("T-50", t[31]);
        getMoney("T-47", t[32]);
        getMoney("T-51", t[33]);
        getMoney("T-52", t[34]);
        getMoney("T-54", t[35]);
        getMoney("T-55", t[36]);
        getMoney("T-57", t[37]);
        getMoney("T-59", t[38]);
        getMoney("T-60", t[39]);
        getMoney("T-61", t[40]);
        getMoney("T-62", t[41]);
        getMoney("T-63", t[42]);
        getMoney("T-64", t[43]);
        getMoney("T-65", t[44]);
        getMoney("T-66", t[45]);
        getMoney("T-67", t[46]);
        getMoney("T-68", t[47]);
        getMoney("T-69", t[48]);
        getMoney("T-70", t[49]);
      } else {
        if (typeof fromThirdTransfer != "undefined" && !logined) return;
        n.StatusCode != "T-03" &&
          ((platformod = n.PlatformMod[platformNames[n.StatusCode].id]),
          (checkThirdMoney = n.Data),
          (MypurseType[n.StatusCode].isOpen =
            n.PlatformMod[platformNames[n.StatusCode].id]));
        transfermod = n.Transfer;
        getMoney(n.StatusCode, n.Data);
        CheckTransferMaintenance(n.StatusCode, n.Transfer);
      }
    },
  });
}
function UpdatePanelPTZZ(n, t) {
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
      var i;
      (n.StatusCode == "T-09" ||
        n.StatusCode == "T-18" ||
        n.StatusCode == "T-34") &&
        ["-3", "-53", "-54", "-55"].indexOf(n.Data) >= 0 &&
        ((n.Data =
          n.Data == "-53"
            ? webRes.Font_Pleacewait
            : n.Data == "-54"
            ? webRes.Font_Loading
            : webRes.Font_Busy),
        $("#" + t).css("color", "red"));
      $("#" + t).removeAttr("style");
      n.Data == "" && (n.Data = 0);
      MypurseType[n.StatusCode].isOpen || (n.Data = webRes.Font_Maintain);
      i = [
        webRes.Font_Maintain,
        webRes.Font_Pleacewait,
        webRes.Font_Loading,
        webRes.Font_Busy,
        webRes.Font_Maintain_Sport,
      ];
      transNum.indexOf("payinMoney") > -1 &&
        location.pathname.indexOf("/Mobile/Aspx/M_Mypurse.aspx") > -1 &&
        n.Data == webRes.Font_Maintain &&
        (n.Data = webRes.Font_Maintain2);
      i.indexOf(n.Data) >= 0
        ? $("#" + t).css("color", "red")
        : $("#" + t).removeAttr("style");
      $("#" + t).text(n.Data);
    },
  });
}
function CheckTransferMaintain() {
  var n, t, i, r;
  (isCheckSingle || countReturn >= 2) &&
    ((isCheckSingle || isMainOpen) && isThirdOpen
      ? ((n =
          $("#fast_transfer").size() > 0
            ? $("#lblMainMoney").text()
            : $("#lblMainMoney_mini").text()),
        (t = IsYn ? n.replace(/\./g, "") : n.replace(/,/g, "")),
        t != 0
          ? ((i = $("#hiddenPayin").val()),
            $(".full_change,.btnChange").removeClass("disabled"),
            $(".transferBox").removeClass("disabled"),
            location.pathname.indexOf("M_MypursePlatfom.aspx") > -1 &&
              $(".full_change,.btnChange").attr(
                "onclick",
                "TurnAllOut('" + i + "')"
              ),
            $("#txtMoneyTo").removeClass("disabled").removeAttr("disabled"),
            $(".transferBox .caretMask").css("display", "inline-flex"),
            OSPlatform.isPc &&
              !IsIPad() &&
              ($(".transferBox .caretMask").attr("style", "display: none"),
              $("#txtMoneyTo").focus()),
            $(".num_keyboard>ul>li").css("pointer-events", "auto"),
            $(".numPlusArea").children().css("pointer-events", "auto"),
            fnPostHeight())
          : ($("#txtMoneyTo").addClass("disabled"), disableCustomKeyboard()))
      : ($("#txtMoneyTo").attr("disabled", "disabled"),
        $(".full_change,#btn_ok,#txtMoneyTo,.btnChange,.butIngame").addClass(
          "disabled"
        ),
        $(".transferBox").addClass("disabled"),
        $(".transfer_button,.butIngame")
          .removeAttr("onclick")
          .addClass("btnClose"),
        $(".full_change,.btnChange").removeAttr("onclick").addClass("disabled"),
        $(".caretMask").hide(),
        typeof fromThirdTransfer != "undefined" &&
          (gameStyle == "3D" || gameStyle == "3D1") &&
          fnPostHeight(),
        isThirdOpen ||
          ($("#txtMoneyTo")
            .attr("placeholder", webRes.Font_TransferMaintenanceMsg1)
            .attr("disabled", "disabled")
            .addClass("placehCss"),
          window.location.href.indexOf("M_Mypurse.aspx") == -1 &&
            disableCustomKeyboard(),
          $("#txtMoneyTo").attr(
            "style",
            "background-color: #d5d5d5 !important"
          ),
          ($("#btn_no").text().trim() == webRes.Font_PurseTransfer ||
            $(".transfer_butEnter").text().trim() ==
              webRes.Font_PurseTransfer) &&
            ($(".transfer_buttonGame").addClass("disabled"),
            $(".transfer_butEnter").addClass("disabled")))));
  checkThirdMoney !== "" &&
    typeof checkThirdMoney != "undefined" &&
    ((r = IsYn
      ? checkThirdMoney.replace(/\./g, "")
      : checkThirdMoney.replace(/,/g, "")),
    s_isMajorF && r > 0
      ? $(".transfer_buttonGame,.transfer_butEnter").removeClass("disabled")
      : checkThirdMoney == "forbidden" &&
        $("#txtMoneyTo").attr("placeholder", webRes.Font_Maintain));
}
function fnPostHeight() {
  if (typeof fromThirdTransfer != "undefined") {
    var t = !0,
      n = "";
    gameStyle == "ColorBall"
      ? (n = { event: "keyboardExpand", isExpanded: t })
      : gameStyle == "NBB" || gameStyle == "SM" || gameStyle == "KU"
      ? (n = {
          event: "keyboardExpandInit",
          isExpanded: t,
          height: $(".popup").height(),
        })
      : (gameStyle == "3D" || gameStyle == "3D1") &&
        (n = {
          event: "keyboardExpand",
          height: $(".popup").height(),
          from: "TS",
        });
    gameStyle == "3D" || gameStyle == "3D1"
      ? $(".popup").height() != 0 &&
        (window.top.postMessage(n, "*"),
        $(".keyboard-mask").css({
          height: $("#txtMoneyTo").outerHeight(),
          "margin-top": -$("#txtMoneyTo").outerHeight(),
        }),
        $(".caretMask").css({ height: $("#txtMoneyTo").outerHeight() }),
        $(".Rclose").css({ height: $("#txtMoneyTo").outerHeight() }))
      : gameStyle == "SM"
      ? window.parent.postMessage(JSON.stringify(n), "*")
      : window.top.postMessage(JSON.stringify(n), "*");
  }
}
function Platinfo() {
  $.ajax({
    url: "/LoadData/Platinfo.ashx",
    data: { platinfoType: "2" },
    type: "get",
    timeout: 15e3,
    cache: !1,
    error: function () {},
    success: function (n) {
      if (n == "") return !1;
      var t = n.split("|");
      $("#lblMainMoney").text(t[0]);
      t[5] != "0" &&
        typeof $("#lblTotalMoney").parent().prevObject.attr("class") !=
          "undefined" &&
        $("#lblTotalMoney").parent().prevObject.attr("class") ==
          "game_sumListR" &&
        $("#lblTotalMoney").addClass("t_green");
      $("#lblTotalMoney").text(t[5]);
      getMoney("T-04", t[1], 2);
      getMoney("T-06", t[3], 2);
      getMoney("T-07", t[4], 2);
      getMoney("T-09", t[6], 2);
      getMoney("T-11", t[7], 2);
      getMoney("T-13", t[8], 2);
      getMoney("T-14", t[9], 2);
      getMoney("T-15", t[10], 2);
      getMoney("T-16", t[11], 2);
      getMoney("T-20", t[13], 2);
      getMoney("T-27", t[14], 2);
      getMoney("T-24", t[15], 2);
      getMoney("T-29", t[16], 2);
      getMoney("T-31", t[17], 2);
      getMoney("T-32", t[18], 2);
      getMoney("T-33", t[19], 2);
      getMoney("T-36", t[20], 2);
      getMoney("T-38", t[21], 2);
      getMoney("T-42", t[22], 2);
      getMoney("T-43", t[23], 2);
      getMoney("T-44", t[24], 2);
      getMoney("T-45", t[25], 2);
      getMoney("T-46", t[26], 2);
      getMoney("T-50", t[27], 2);
      getMoney("T-47", t[28], 2);
      getMoney("T-52", t[30], 2);
      getMoney("T-54", t[31], 2);
      getMoney("T-55", t[32], 2);
      getMoney("T-57", t[33], 2);
      getMoney("T-59", t[35], 2);
      getMoney("T-60", t[36], 2);
      getMoney("T-61", t[37], 2);
      getMoney("T-62", t[38], 2);
      getMoney("T-63", t[39], 2);
      getMoney("T-64", t[40], 2);
      getMoney("T-65", t[41], 2);
      getMoney("T-66", t[42], 2);
      getMoney("T-69", t[45], 2);
      getMoney("T-70", t[46], 2);
    },
  });
}
function PlatinfoNew(n, t) {
  var i = 0,
    r = 0;
  UpdatePanel("T-03");
  streamerGiftSwitch && (myPurseCodeList.LOVE = "T-56");
  $.each(myPurseCodeList, function (n, u) {
    (streamerGiftSwitch && n == "LOVE") ||
      UpdatePanelNew(u, function (n) {
        r++;
        n != "" &&
          (i += IsYn
            ? parseInt(n.replaceAll(/\./g, ""))
            : parseInt(n.replaceAll(",", "")));
        streamerGiftSwitch &&
          r == Object.keys(myPurseCodeList).length - 1 &&
          ($("#lblTotalMoney").text(i.toMoney()),
          i != "0" &&
            typeof $("#lblTotalMoney").parent().prevObject.attr("class") !=
              "undefined" &&
            $("#lblTotalMoney").parent().prevObject.attr("class") ==
              "game_sumListR" &&
            $("#lblTotalMoney").addClass("t_green"));
        r == Object.keys(myPurseCodeList).length &&
          ($("#lblTotalMoney").text(i.toMoney()),
          i != "0" &&
            typeof $("#lblTotalMoney").parent().prevObject.attr("class") !=
              "undefined" &&
            $("#lblTotalMoney").parent().prevObject.attr("class") ==
              "game_sumListR" &&
            $("#lblTotalMoney").addClass("t_green"));
        window.location.href.indexOf("M_Mypurse.aspx") > -1 &&
          u == "T-03" &&
          t(n);
      });
  });
}
function UpdatePanelNew(n, t) {
  $.ajax({
    url: "/LoadData/GetThirdPartyBalance.ashx",
    data: "id=" + n + "&type=refreshBalance&isAll=1",
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (i) {
      var c = !0,
        o = !0,
        s = "",
        f,
        u,
        e,
        r,
        h;
      i.PlatStatus &&
        i.PlatStatus != "" &&
        ((f = i.PlatStatus.split("|")),
        (c = f[0] == "True"),
        (o = f[1] == "True"),
        (s = f[1]));
      MypurseType[n].isOpen = o;
      n == "T-03"
        ? (parseFloat(i.Data) != NaN && parseFloat(i.Data) > 0
            ? $("#lblMainMoney").text(i.Data).css("color", "#00af1d")
            : $("#lblMainMoney").text(i.Data),
          $(".mainPoints").text(i.Data))
        : streamerGiftSwitch && n == "T-56"
        ? $(".lovePoints").text("$ " + i.Data)
        : getMoney(n, i.Data, 2);
      u = i.Data;
      window.location.href.toLowerCase().indexOf("m_mypurse") > -1 &&
        ((e = $("#hiddenMajorDomoF").val()),
        typeof e != "undefined" &&
          e.toLowerCase() == "false" &&
          s.toLowerCase() == "false" &&
          (u = "0"));
      r = i.Data;
      h = ["-3", "-53", "-54", "-55"];
      (n == "T-09" || n == "T-18" || n == "T-34") &&
        h.indexOf(r) >= 0 &&
        ((u = 0),
        (r =
          r == "-53"
            ? webRes.Font_Pleacewait
            : r == "-54"
            ? webRes.Font_Loading
            : webRes.Font_Busy));
      n == "T-56" && (u = "0");
      t && t(u, r);
    },
  });
}
function PlatinfoTop() {
  $.ajax({
    url: "/LoadData/Platinfo.ashx",
    data: { platinfoType: "2" },
    type: "get",
    timeout: 15e3,
    cache: !1,
    error: function () {},
    success: function (n) {
      if (n == "") return !1;
      var t = n.split("|");
      getMoneyIndex(t);
    },
  });
}
function PlatinfoTopNew() {
  var n = 0,
    t = 0;
  $.each(MypurseIndex, function (n, t) {
    $("." + t.name).html("loading..");
  });
  streamerGiftSwitch && (myPurseCodeList.LOVE = "T-56");
  $.each(myPurseCodeList, function (i, r) {
    UpdatePanelPlatinfo(i, r, function (r, u) {
      var f, e;
      t++;
      r != null &&
        r != "" &&
        r != "forbidden" &&
        ((n += IsYn
          ? parseInt(r.replaceAll(/\./g, ""))
          : parseInt(r.replaceAll(",", ""))),
        (r = IsYn ? r.replace(/\./g, "") : r.replace(/,/g, "")));
      IsTest &&
        i == "MAIN" &&
        pageNamex == "m_member.aspx" &&
        ($(".mainAccPoints").text("$ " + u),
        $(".mainAccPoints").parent().removeClass("load"));
      t == Object.keys(myPurseCodeList).length &&
        (IsTest && pageNamex == "m_member.aspx"
          ? ($(".AllPoints").text("$ " + n.toMoney()),
            $(".btn_mAmount").removeClass("load"))
          : $(".AllPoints").text(n.toMoney()));
      $("#mask").hide();
      f = "." + i.toLowerCase() + "Points";
      r > 0 && i != "MAIN" && $(f).text() != webRes.Font_Maintain
        ? $(f).next("span").length == 0 &&
          ((e = Object.keys(MypurseId).find(
            (n) => MypurseId[n].type === myPurseCodeList[i]
          )),
          $(
            "<span class='returnP' onclick='ReturnMainPoint(" +
              e +
              ")'>" +
              webRes.Font_ReturnBack +
              "</span>"
          ).insertAfter(f))
        : (r == 0 || $(f).text() == webRes.Font_Maintain) &&
          $(f).next("span").length > 0 &&
          $(f).next("span").remove();
    });
  });
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
      var l = !0,
        o = !0,
        s = "",
        e,
        f,
        h,
        u,
        c;
      r.PlatStatus &&
        r.PlatStatus != "" &&
        ((e = r.PlatStatus.split("|")),
        (l = e[0] == "True"),
        (o = e[1] == "True"),
        (s = e[1]));
      u = "";
      f = r.Data;
      getPageInfo().gameId != null &&
        getPageInfo().gameId.toLowerCase() ==
          "f_is" + n.toLowerCase() + "open" &&
        ((u = r.Data), u == "" && (u = 0), getPlatMoney("mainPoints", u));
      (getPageInfo().ptype == 3 || n != "MAIN") &&
        (o
          ? ((u = r.Data),
            u == "" && (u = 0),
            getPlatMoney(n.toLowerCase() + "Points", u))
          : ((u = "-1"), getPlatMoney(n.toLowerCase() + "Points", u)));
      h = $("#isFMajor").val();
      typeof h != "undefined" &&
        h.toLowerCase() == "false" &&
        s.toLowerCase() == "false" &&
        (f = "0");
      t == "T-58" && s.toLowerCase() == "false" && (f = "0");
      u = r.Data;
      c = ["-3", "-53", "-54", "-55"];
      (t == "T-09" || t == "T-18" || t == "T-34") &&
        c.indexOf(u) >= 0 &&
        ((f = 0),
        (u =
          u == "-53"
            ? webRes.Font_Pleacewait
            : u == "-54"
            ? webRes.Font_Loading
            : webRes.Font_Busy));
      r.StatusCode == "T-56" && (f = "0");
      i && i(f, u, o);
    },
  });
}
function getMoneyIndex(n) {
  $.each(MypurseIndex, function (t, i) {
    getPlatMoney(i.name, n[t]);
  });
}
function getPlatMoney(n, t) {
  $("." + n).removeClass("t_pink");
  $("." + n)
    .prev()
    .removeClass("t_pink");
  platformstatus.indexOf(t) >= 0 &&
    ((t =
      t == "-53"
        ? webRes.Font_Pleacewait
        : t == "-54"
        ? webRes.Font_Loading
        : t == "-1"
        ? IsYn
          ? webRes.Font_Maintain_Sport
          : webRes.Font_Maintain
        : t == "-56"
        ? webRes.Font_Maintain
        : webRes.Font_Busy),
    t == webRes.Font_Maintain_Sport &&
      n.toLowerCase().indexOf("points") > -1 &&
      (t = webRes.Font_Maintain),
    $("." + n).addClass("t_pink"),
    $("." + n)
      .prev()
      .addClass("t_pink"));
  t != null && (n == "mainPoints" && (t = t), $("." + n).text(t));
}
function SendOut(n, t) {
  var u, o, i, r, s, f, e;
  if (flag) return !1;
  if (
    (n == 2 || n == 3
      ? ((i = "#txtMoneyTo"), (u = $("#ddlPayinto .inputselect").val()))
      : ((i = "#txtMoney"), (u = $("#ddlPayin .inputselect").val())),
    u === "" || u == undefined)
  )
    return (
      $.fn.msg(
        GetTextLanguage(
          "請選擇轉入帳戶！",
          "请选择转入账户！",
          "Xin vui lòng chọn tài khoản nhận điểm！"
        ),
        null,
        function () {
          IsIphone || $("#ddlPayin .inputselect").focus();
          location.href.indexOf("M_Mypurse.aspx") > -1 &&
            $(".bank_buttonD").css("margin-top", 0);
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      ),
      !1
    );
  if (
    ((o = n == 2 || n == 3 ? 0 : $("#ddlPayout .inputselect").val()),
    (r = $(i).val()),
    (s = /^\d+$/),
    r === "")
  )
    return (
      $.fn.alert(
        GetTextLanguage("請填寫金額！", "请填写金额！", "Hãy nhập số điểm！"),
        function () {
          $(i).keyboard("show");
          $(".w50R").addClass("disabled");
          $(".w50R").attr("onclick", "javascript:void(0)");
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      ),
      !1
    );
  if (isNaN(r))
    return (
      $.fn.alert(
        GetTextLanguage(
          "金額必須為正整數",
          "金额必须为正整数",
          "Số tiền nhất thiết phải là số nguyên"
        ),
        function () {
          $(i).val("");
          $(i).keyboard("show");
          $(".w50R").addClass("disabled");
          $(".w50R").attr("onclick", "javascript:void(0)");
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      ),
      !1
    );
  if (s.test(r)) {
    if (
      ((f = $("#payoutMoney").text()),
      (f = IsYn ? f.replace(/\./g, "") : f.replace(/,/g, "")),
      (o == 0 || parseFloat(f) < parseFloat(r)) &&
        ((e = $("#lblMainMoney_mini,#lblMainMoney").text()),
        (e = IsYn ? e.replace(/\./g, "") : e.replace(/,/g, "")),
        parseFloat(e) < parseFloat(r) || parseFloat(f) < parseFloat(r)))
    )
      return (
        $.fn.alert(
          GetTextLanguage(
            "您的可用額度不足！",
            "您的可用额度不足！",
            "Số dư của bạn không đủ！"
          ),
          function () {
            $(i).val("");
            $(i).keyboard("show");
            $(".inner_text").text("");
            $(".w50R").addClass("disabled");
            $(".w50R").attr("onclick", "javascript:void(0)");
            $(".w50R1,.butIngame").addClass("disabled");
            $(".caretMask").text("");
            $(".Rclose").hide();
          },
          null,
          null,
          null,
          null,
          null,
          "layer-msg-transfer"
        ),
        !1
      );
    loading();
    flag = !0;
    $.ajax({
      url: "/LoadData/MyPurse.ashx",
      data:
        "id=T-01&Money=" +
        r +
        "&ddlPayout=" +
        o +
        "&ddlPayin=" +
        u +
        "&sParam=" +
        $("#hid_param").val() +
        "&gameStyle=" +
        $("#hid_gameStyle").val(),
      type: "post",
      dataType: "Json",
      cache: !1,
      timeout: 3e4,
      error: function () {
        $.fn.alert(
          GetTextLanguage(
            "請求异常，請稍後再試！",
            "请求异常，请稍后再试！",
            "Yêu cầu bất thường,vui lòng thử lại sau！"
          ),
          null,
          null,
          null,
          null,
          null,
          null,
          "layer-msg-transfer"
        );
        closeloading();
        flag = !1;
      },
      success: function (r) {
        closeloading();
        $("#hid_isNBB_New").val() == "1" &&
          (r.StatusCode == "M-00" || r.StatusCode == "M-22a") &&
          ((r.Message = r.Message.replace(
            webRes.Font_NBBAccounts,
            webRes.Font_NBB_New
          )),
          IsTw && (r.Message = r.Message.replace("{0}", LogoName)));
        TransferAlert(n, r, t, o, u);
        $("#txtMoneyTo").val("");
        isNE(t) ||
          ($(i).val(""),
          $(".inner_text").text(""),
          $(".w50R").addClass("disabled"),
          $(".w50R").attr("onclick", "javascript:void(0)"),
          $("#cb").size() > 0 &&
            $("#MyCBToMaster")
              .addClass("btnClose")
              .attr("disabled", "disabled"));
        $(".w50R1,.butIngame").addClass("disabled");
        $(".Rclose").size() > 0 && $(".Rclose").hide();
        flag = !1;
      },
    });
  } else
    return (
      $.fn.alert(
        GetTextLanguage(
          "金額必須為正整數",
          "金额必须为正整数",
          "Số tiền nhất thiết phải là số nguyên"
        ),
        function () {
          $(i).keyboard("show");
          $(".w50R").addClass("disabled");
          $(".w50R").attr("onclick", "javascript:void(0)");
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      ),
      !1
    );
}
function ReturnMainPoint(n, t) {
  if (flagRec) return !1;
  loading();
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
      flagRec = !1;
      $.fn.alert(
        GetTextLanguage(
          "請求异常，請稍後再試！",
          "请求异常，请稍后再试！",
          "Yêu cầu bất thường,vui lòng thử lại sau！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      closeloading();
    },
    success: function (i) {
      if (typeof fromThirdTransfer == "undefined") {
        var r = Object.keys(myPurseCodeList).find(
          (t) => myPurseCodeList[t] === MypurseId[n].type
        );
        r = "." + r.toLowerCase() + "Points";
        i.StatusCode == "M-08" && $(r).text("0").next("span").remove();
      }
      closeloading();
      TransferAlert(0, i, t, n);
      isNE(t) ||
        ($("#txtMoneyTo").val(""),
        $(".inner_text").text(""),
        $(".w50R").addClass("disabled"),
        $(".w50R").attr("onclick", "javascript:void(0)"),
        $("#cb").size() > 0 &&
          $("#MyCBToMaster").addClass("btnClose").attr("disabled", "disabled"));
      flagRec = !1;
    },
  });
}
function TurnAllOut(n, t) {
  if (
    flagTurnAll ||
    $(".full_change").hasClass("disabled") ||
    $(".btnChange").hasClass("disabled")
  )
    return !1;
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
      $.fn.alert(
        GetTextLanguage(
          "請求异常，請稍後再試！",
          "请求异常，请稍后再试！",
          "Yêu cầu bất thường, vui lòng thử lại sau！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      $.fn.closeloading();
      flagTurnAll = !1;
    },
    success: function (n) {
      $.fn.closeloading();
      $("#hid_isNBB_New").val() == "1" &&
        (n.StatusCode == "M-00" || n.StatusCode == "M-22a") &&
        ((n.Message = n.Message.replace(
          webRes.Font_NBBAccounts,
          webRes.Font_NBB_New
        )),
        IsTw && (n.Message = n.Message.replace("{0}", LogoName)));
      TransferAlert(3, n, t);
      $("#txtMoneyTo").val("");
      isNE(t) ||
        ($("#txtMoneyTo").val(""),
        $(".inner_text").text(""),
        $(".w50R").addClass("disabled"),
        $(".butIngame").addClass("disabled"),
        $(".w50R").attr("onclick", "javascript:void(0)"),
        $("#cb").size() > 0 &&
          $("#MyCBToMaster").addClass("btnClose").attr("disabled", "disabled"));
      flagTurnAll = !1;
    },
  });
}
function TransferAlert(n, t, i, r, u) {
  var o = n == 2 || n == 3 ? "#txtMoneyTo" : "#txtMoney",
    e,
    f,
    s;
  switch (t.StatusCode) {
    case "M-00":
      $.fn.alert(
        t.Message,
        function () {
          $("#txtMoneyTo").val("");
          location.pathname.indexOf("/Mobile/Game") > -1 &&
            fnBack(document.referrer);
          var n = $("#hiddenPayin").val();
          typeof fromThirdTransfer != "undefined"
            ? (n === "29" && history.back(),
              RefreshBalance(MypurseId[n].type, "kshz"))
            : window.location.reload(!0);
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-01":
    case "M-001":
      $.fn.msg(
        t.StatusCode == "M-01" ? webRes.Font_LoginOut : webRes.Font_KickedOut,
        !1,
        function () {
          var t = window.location.href.toLowerCase();
          n == 3 ||
          t.indexOf("m_mypurseplatfom") > -1 ||
          t.indexOf("apiplatform") > -1
            ? location.reload()
            : $("#MyCBToMaster").size() > 0
            ? SendClose()
            : fnOut();
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-0001":
      $.fn.confirm(
        webRes.Font_AccountLocked,
        function () {
          location.href = "/Mobile/Aspx/N_Kfzx.aspx";
        },
        function () {
          if (typeof fromThirdTransfer != "undefined") {
            var n = new URLSearchParams(location.search);
            local1.indexOf("m_mypurseplatfom") > -1
              ? window.location.replace(
                  window.location.pathname + "?logout=1&type=" + n.get("type")
                )
              : $(".popup_In").append(
                  "<div class='popup_In maintain'><div class='sysmaintain'><div class='main_errorText01'>" +
                    webRes.Font_mypursePlatform1 +
                    "</div><div class='main_errorText02'>" +
                    webRes.Font_mypursePlatform2 +
                    "</div></div></div>"
                );
          } else fnOut();
        },
        webRes.Font_Info,
        webRes.Font_Czzq_14,
        IsYn ? webRes.Font_Cancel : webRes.Font_closeComfirmationBtn
      );
      break;
    case "M-02":
      $.fn.msg(
        GetTextLanguage(
          "平台轉帳交易操作現已關閉，請稍後操作！",
          "平台转账交易操作现已关闭，请稍后操作！",
          "Giao dịch chuyển điểm hiện tại đang đóng, xin hãy sử dụng sau！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-03":
      $.fn.msg(
        GetTextLanguage(
          "帳號遊戲中,無法使用此功能！！！",
          "帐号游戏中，无法使用此功能！！！",
          "Tài khoản đang tiến hành trò chơi,không thể sử dụng chức năng này！！！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-04":
      $.fn.alert(
        GetTextLanguage(
          "您的可轉餘額為0！！！",
          "您的可转余额为0！！！",
          "Số dư có thể chuyển của bạn là 0！！！"
        ),
        function () {
          $(o).val("");
          $(o).keyboard("show");
          $(".inner_text").text("");
          $(".w50R").addClass("disabled");
          $(".w50R").attr("onclick", "javascript:void(0)");
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-05":
      $.fn.alert(
        GetTextLanguage(
          "您的可用額度不足！",
          "您的可用额度不足！",
          "Số dư của bạn không đủ！"
        ),
        function () {
          $(o).val("");
          $(o).keyboard("show");
          $(".inner_text").text("");
          $(".w50R").addClass("disabled");
          $(".w50R").attr("onclick", "javascript:void(0)");
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-06":
      $.fn.msg(
        GetTextLanguage(
          "金額格式錯誤！",
          "金额格式错误！",
          "Quy cách số tiền không đúng！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-08":
      n == 2 || n == 3
        ? $("#goPlatfom").size() > 0
          ? ($("#txtMoney").css("display", "none"),
            $("#hintDiv").css("display", "block"))
          : (n == 3 && disableCustomKeyboard(),
            (e = !1),
            $(".mask_pop_2").length > 0 &&
              typeof fromThirdTransfer == "undefined" &&
              (close_pop(), (e = !0)),
            $(".mask_pop_2").length > 0 || e
              ? location.pathname.indexOf("/Mobile/Game") > -1 ||
                typeof fromThirdTransfer != "undefined"
                ? $.fn.success(
                    GetTextLanguage(
                      "轉點成功",
                      "转点成功",
                      "Chuyển điểm thành công"
                    ),
                    function () {
                      var r = $("#hiddenPayin").val();
                      if (
                        (typeof fromThirdTransfer != "undefined" &&
                          r === "29" &&
                          history.back(),
                        i)
                      )
                        typeof fromThirdTransfer != "undefined" &&
                          (r === "6" || r === "14"
                            ? RefreshBalance(MypurseId[r].type, "kshz", t.Data)
                            : RefreshBalance(MypurseId[r].type, "kshz")),
                          i();
                      else if (n == 3) {
                        if (typeof fromThirdTransfer != "undefined") {
                          RefreshBalance(MypurseId[r].type, "kshz");
                          $("#txtMoneyTo").addClass("disabled");
                          return;
                        }
                        fnPostHeight();
                        $("#txtMoneyTo").addClass("disabled");
                        RefreshBalance(MypurseId[r].type, "kshz");
                        $("#btn_ok,.butIngame").addClass("disabled");
                      } else
                        $("#purseplatmask").size() > 0
                          ? $("#btnEnterGame").click()
                          : location.reload();
                    },
                    1e3,
                    IsYn ? 220 : 0
                  )
                : $.fn.msg(
                    GetTextLanguage(
                      "轉點成功",
                      "转点成功",
                      "Chuyển điểm thành công"
                    ),
                    !1,
                    function () {
                      var r = $("#hiddenPayin").val();
                      if (
                        (typeof fromThirdTransfer != "undefined" &&
                          r === "29" &&
                          history.back(),
                        i)
                      )
                        typeof fromThirdTransfer != "undefined" &&
                          (r === "6" || r === "14"
                            ? RefreshBalance(MypurseId[r].type, "kshz", t.Data)
                            : RefreshBalance(MypurseId[r].type, "kshz")),
                          i();
                      else if (n == 3) {
                        if (typeof fromThirdTransfer != "undefined") {
                          RefreshBalance(MypurseId[r].type, "kshz");
                          $("#txtMoneyTo").addClass("disabled");
                          return;
                        }
                        fnPostHeight();
                        $("#txtMoneyTo").addClass("disabled");
                        RefreshBalance(MypurseId[r].type, "kshz");
                        $("#btn_ok,.butIngame").addClass("disabled");
                      } else
                        $("#purseplatmask").size() > 0
                          ? $("#btnEnterGame").click()
                          : location.reload();
                    },
                    null,
                    webRes.Font_EnterGame,
                    null,
                    null,
                    null,
                    "layer-msg-transfer"
                  )
              : $.fn.msg(
                  GetTextLanguage(
                    "平台轉帳成功！",
                    "平台转账成功！",
                    "Chuyển điểm thành công！"
                  ),
                  !1,
                  function () {
                    var r = $("#hiddenPayin").val();
                    if (
                      (typeof fromThirdTransfer != "undefined" &&
                        r === "29" &&
                        history.back(),
                      i)
                    )
                      typeof fromThirdTransfer != "undefined" &&
                        (r === "6" || r === "14"
                          ? RefreshBalance(MypurseId[r].type, "kshz", t.Data)
                          : RefreshBalance(MypurseId[r].type, "kshz")),
                        i();
                    else if (n == 3) {
                      if (typeof fromThirdTransfer != "undefined") {
                        RefreshBalance(MypurseId[r].type, "kshz");
                        $("#txtMoneyTo").addClass("disabled");
                        return;
                      }
                      fnPostHeight();
                      $("#txtMoneyTo").addClass("disabled");
                      RefreshBalance(MypurseId[r].type, "kshz");
                      $("#btn_ok,.butIngame").addClass("disabled");
                    } else
                      $("#purseplatmask").size() > 0
                        ? $("#btnEnterGame").click()
                        : location.reload();
                  },
                  null,
                  null,
                  null,
                  null,
                  null,
                  "layer-msg-transfer"
                ))
        : $("#MyCBToMaster").size() > 0
        ? $(".mask_pop_2").length > 0
          ? $.fn.success(
              GetTextLanguage("轉點成功", "转点成功", "Chuyển điểm thành công"),
              function () {
                if (i) i();
                else {
                  var n = $("#hiddenPayin").val();
                  RefreshBalance(MypurseId[n].type, "kshz");
                }
              },
              1e3,
              IsYn ? 220 : 0
            )
          : $.fn.msg(
              GetTextLanguage(
                "平台轉帳成功！",
                "平台转账成功！",
                "Chuyển điểm thành công！"
              ),
              !1,
              function () {
                if (i) i();
                else {
                  var n = $("#hiddenPayin").val();
                  RefreshBalance(MypurseId[n].type, "kshz");
                }
              },
              null,
              null,
              null,
              null,
              null,
              "layer-msg-transfer"
            )
        : ((e = !1),
          $(".mask_pop_2").length > 0 &&
            typeof fromThirdTransfer == "undefined" &&
            (close_pop(), (e = !0)),
          $(".mask_pop_2").length > 0 || e
            ? $.fn.success(
                GetTextLanguage(
                  "轉點成功",
                  "转点成功",
                  "Chuyển điểm thành công"
                ),
                function () {
                  var t, f, e;
                  $("#txtMoneyTo").val("");
                  $("#fast_transfer").size() > 0 && n == 0
                    ? i
                      ? i()
                      : ((t = $("#hiddenPayin").val()),
                        RefreshBalance(MypurseId[t].type, "kshz"),
                        $(".greenShallow").size() > 0 &&
                          $(".greenShallow")
                            .attr("disabled", "disabled")
                            .addClass("btnClose"),
                        $(".full_change").size() > 0 &&
                          $(".full_change").attr(
                            "onclick",
                            "TurnAllOut('" + t + "')"
                          ),
                        $(".btnChange").size() > 0 &&
                          $(".btnChange").attr(
                            "onclick",
                            "TurnAllOut('" + t + "')"
                          ))
                    : ((t = $("#hiddenPayin").val()),
                      typeof fromThirdTransfer != "undefined" &&
                        t === "29" &&
                        history.back(),
                      i
                        ? t != "29" && i()
                        : r != null
                        ? (ddlPayAppend("ddlPayout", ""),
                          $("#ddlPayout .inputselect").trigger("change"),
                          ddlPayAppend("ddlPayin", "0"),
                          $("#payinMoney").text("0"),
                          r != 0 &&
                            ((f = MypurseId[r].type),
                            $("#" + MypurseType[f].id)
                              .removeClass("t_green")
                              .text("loading.."),
                            UpdatePanelNew(f)),
                          u != null &&
                            u != 0 &&
                            ((e = MypurseId[u].type),
                            $("#" + MypurseType[e].id).text("loading.."),
                            UpdatePanelNew(e)),
                          (r == 0 || u == null || u == 0) &&
                            ($(".payoutAmount, #lblMainMoney").text(
                              "loading.."
                            ),
                            UpdatePanelNew("T-03", function (n, t) {
                              $("#ddlPayout #payoutMoney").text(t);
                            })),
                          setTimeout(() => {
                            window.scrollTo(0, 0);
                          }, 100))
                        : location.reload());
                },
                1e3,
                IsYn ? 220 : 0
              )
            : $.fn.msg(
                GetTextLanguage(
                  "平台轉帳成功！",
                  "平台转账成功！",
                  "Chuyển điểm thành công！"
                ),
                !1,
                function () {
                  var t, f, e;
                  $("#txtMoneyTo").val("");
                  $("#fast_transfer").size() > 0 && n == 0
                    ? i
                      ? i()
                      : ((t = $("#hiddenPayin").val()),
                        RefreshBalance(MypurseId[t].type, "kshz"),
                        $(".greenShallow").size() > 0 &&
                          $(".greenShallow")
                            .attr("disabled", "disabled")
                            .addClass("btnClose"),
                        $(".full_change").size() > 0 &&
                          $(".full_change").attr(
                            "onclick",
                            "TurnAllOut('" + t + "')"
                          ),
                        $(".btnChange").size() > 0 &&
                          $(".btnChange").attr(
                            "onclick",
                            "TurnAllOut('" + t + "')"
                          ))
                    : ((t = $("#hiddenPayin").val()),
                      typeof fromThirdTransfer != "undefined" &&
                        t === "29" &&
                        history.back(),
                      i
                        ? t != "29" && i()
                        : r != null
                        ? (ddlPayAppend("ddlPayout", ""),
                          $("#ddlPayout .inputselect").trigger("change"),
                          ddlPayAppend("ddlPayin", "0"),
                          $("#payinMoney").text("0"),
                          r != 0 &&
                            ((f = MypurseId[r].type),
                            $("#" + MypurseType[f].id)
                              .removeClass("t_green")
                              .text("loading.."),
                            UpdatePanelNew(f)),
                          u != null &&
                            u != 0 &&
                            ((e = MypurseId[u].type),
                            $("#" + MypurseType[e].id).text("loading.."),
                            UpdatePanelNew(e)),
                          (r == 0 || u == null || u == 0) &&
                            ($(".payoutAmount, #lblMainMoney").text(
                              "loading.."
                            ),
                            UpdatePanelNew("T-03", function (n, t) {
                              $("#ddlPayout #payoutMoney").text(t);
                            })),
                          setTimeout(() => {
                            window.scrollTo(0, 0);
                          }, 100))
                        : location.reload());
                },
                null,
                null,
                null,
                null,
                null,
                "layer-msg-transfer"
              ));
      break;
    case "M-14":
      $.fn.msg(
        GetTextLanguage(
          "交易失敗，請聯繫客服人員！",
          "交易失败，请联系客服人员！",
          "Giao dịch thất bại, vui lòng liên hệ Hỗ trợ！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-15":
      $.fn.msg(
        GetTextLanguage(
          "系統繁忙請稍候！",
          "系统繁忙请稍候！",
          "Hệ thống đang bận, vui lòng chờ！"
        ),
        !1,
        function () {
          var i = window.location.href.toLowerCase(),
            t;
          (n == 0 || n == 2 || n == 3 || i.indexOf("m_mypurseplatfom") > -1) &&
            ($("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini").size() &&
              $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini")
                .css("color", "green")
                .text("loading.."),
            typeof fromThirdTransfer != "undefined"
              ? ((t = $("#hiddenPayin").val()),
                RefreshBalance(MypurseId[t].type, "kshz"))
              : location.reload());
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-20":
      $.fn.msg(
        GetTextLanguage(
          "操作次數過於頻繁，請稍候再試！",
          "操作次数过于频繁，请稍候再试！",
          "Thao tác thường xuyên, hãy thử lại sau！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-21":
      $.fn.msg(
        "试玩帐号不开放《AG馆》",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-22":
      location.pathname === "/Mobile/Aspx/M_Mypurse.aspx" &&
        purseNotOpenMsgOpened &&
        (purseNotOpenMsgOpened = "true");
      $.fn.msg(
        webRes.Font_MypurseNotOpen,
        !1,
        function () {
          var t, i, n;
          $(".caretMask").hide();
          $("#txtMoneyTo").val("");
          (location.pathname.indexOf("/Mobile/Aspx") > -1 ||
            location.pathname.indexOf("/Mobile/Game") > -1) &&
            (disableCustomKeyboard(),
            $("#txtMoneyTo")
              .attr("placeholder", webRes.Font_TransferMaintenanceMsg1)
              .attr("disabled", "disabled")
              .addClass("placehCss"),
            $(".transfer_button,.butIngame")
              .removeAttr("onclick")
              .addClass("btnClose")
              .addClass("disabled"),
            $(".full_change,.btnChange")
              .removeAttr("onclick")
              .addClass("disabled"),
            fnPostHeight(),
            ($("#btn_no").text().trim() == webRes.Font_PurseTransfer ||
              $(".transfer_butEnter").text().trim() ==
                webRes.Font_PurseTransfer) &&
              $(".transfer_buttonGame,.transfer_butEnter").addClass(
                "disabled"
              ));
          location.pathname === "/Mobile/Aspx/M_Mypurse.aspx"
            ? (document.referrer.toLowerCase().indexOf("m_mypurse") > -1 &&
                document.referrer.toLowerCase().indexOf("action=") > -1 &&
                ((t = document.referrer
                  .toLowerCase()
                  .match(new RegExp("[?&]action=([^&]+)", "i"))[1]),
                t != "1" && fnBack(document.referrer)),
              document.referrer.toLowerCase().indexOf("m_member") > -1 ||
              document.referrer.toLowerCase().indexOf("m_mypurse") > -1
                ? fnBackMemberIndex()
                : fnBackHomeIndex())
            : ((i = $("#hid_gameStyle").val()),
              $("#plstformAction .inputaction").val() === "B" &&
                i.indexOf("3D") > -1 &&
                (typeof fromThirdTransfer != "undefined"
                  ? ((n = $("#hiddenPayin").val()),
                    RefreshBalance(MypurseId[n].type, "kshz"))
                  : location.reload()),
              typeof fromThirdTransfer != "undefined" &&
                (disableCustomKeyboard(),
                $(".caretMask").hide(),
                (n = $("#hiddenPayin").val()),
                RefreshBalance(MypurseId[n].type, "kshz")));
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-22a":
      $.fn.msg(
        t.Message,
        !1,
        function () {
          if (
            ($("#txtMoneyTo").val(""), typeof fromThirdTransfer != "undefined")
          ) {
            var n = $("#hiddenPayin").val();
            RefreshBalance(MypurseId[n].type, "kshz");
          } else
            location.pathname === "/Mobile/Aspx/M_Mypurse.aspx"
              ? location.reload()
              : (disableCustomKeyboard(),
                $("#txtMoneyTo")
                  .attr("placeholder", webRes.Font_TransferMaintenanceMsg1)
                  .attr("disabled", "disabled")
                  .addClass("placehCss"),
                $(".transfer_button,.butIngame")
                  .removeAttr("onclick")
                  .addClass("btnClose")
                  .addClass("disabled"),
                $(".full_change,.btnChange")
                  .removeAttr("onclick")
                  .addClass("disabled"),
                fnPostHeight(),
                ($("#btn_no").text().trim() == webRes.Font_PurseTransfer ||
                  $(".transfer_butEnter").text().trim() ==
                    webRes.Font_PurseTransfer) &&
                  $(".transfer_buttonGame,.transfer_butEnter").addClass(
                    "disabled"
                  ));
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-23":
      $.fn.msg(
        GetTextLanguage(
          "轉帳金額低於限制，<br/>請轉入5點(含)以上！",
          "转帐金额低于限制，<br/>请转入5点(含)以上！",
          "Số điểm chuyển thấp hơn hạn mức,<br/>vui lòng chuyển từ 5 điểm trở lên!"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-34":
      $.fn.msg(
        GetTextLanguage(
          "",
          "测试站不开放《AG馆》操作！",
          "Trang test không hỗ trợ giao diện《AG CASINO》để thao tác！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-36":
      $.fn.msg(
        GetTextLanguage(
          "轉點失敗，請重新操作",
          "转点失败，请重新操作",
          "Chuyển điểm thất bại, vui lòng thao tác lại"
        ),
        !1,
        function () {
          if (
            location.href.indexOf("M_Mypurse") == -1 ||
            location.href.indexOf("M_MypursePlatfom") > -1
          ) {
            $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini").size() &&
              $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini")
                .css("color", "green")
                .text("loading..");
            var n = $("#hiddenPayin").val();
            RefreshBalance(MypurseId[n].type, "kshz");
            $(".transfer_buttonGame,.transfer_butEnter").addClass("disabled");
          }
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M-09":
    case "M-12":
    case "M-13":
    case "M-16":
    case "M-17":
    case "M-19":
    case "M-37":
    case "M-39":
    case "M-40":
    case "M-42":
    case "M-43":
    case "M-44":
    case "M-45":
    case "M-46":
    case "M-48":
    case "M-49":
    case "M-50":
    case "M-51":
    case "M-53":
    case "M-55":
    case "M-56":
    case "M-57":
    case "M-58":
    case "M-60":
    case "M-62":
    case "M-63":
    case "M-64":
    case "M-65":
    case "M-66":
    case "M-67":
    case "M-69":
    case "M-70":
    case "M-72":
    case "M-73":
    case "M-74":
    case "M-75":
    case "M-76":
    case "M-77":
    case "M-79":
    case "M-80":
    case "M-82":
    case "M-83":
    case "M-84":
    case "M-85":
    case "M-86":
    case "M-87":
    case "M-102":
    case "M-103":
    case "M-105":
    case "M-106":
    case "M-108":
    case "M-109":
    case "M-110":
    case "M-111":
    case "M-112":
    case "M-114":
    case "M-133":
    case "M-141":
    case "M-142":
    case "M-144":
    case "M-145":
    case "M-147":
    case "M-148":
    case "M-149":
    case "M-150":
    case "M-151":
    case "M-152":
    case "M-170":
    case "M-171":
    case "M-173":
    case "M-174":
    case "M-176":
    case "M-177":
    case "M-178":
    case "M-179":
    case "M-180":
    case "M-183":
    case "M-209":
    case "M-210":
    case "M-211":
    case "M-213":
    case "M-214":
    case "M-215":
    case "M-216":
    case "M-217":
    case "M-219":
    case "M-221":
    case "M-223":
    case "M-243":
    case "M-244":
    case "M-246":
    case "M-247":
    case "M-248":
    case "M-249":
    case "M-250":
    case "M-251":
    case "M-252":
    case "M-254":
    case "M-259":
    case "M-260":
    case "M-261":
    case "M-262":
    case "M-263":
    case "M-265":
    case "M-267":
    case "M-268":
    case "M-269":
    case "M-270":
    case "M-273":
    case "M-275":
    case "M-276":
    case "M-278":
    case "M-279":
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
    case "M-330":
    case "M-331":
    case "M-332":
    case "M-333":
    case "M-336":
    case "M-337":
    case "M-338":
    case "M-340":
    case "M-341":
    case "M-343":
    case "M-344":
    case "M-345":
    case "M-346":
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
    case "M-438":
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
    case "M-717":
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
    case "M-803":
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
    case "M-838":
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
      $.fn.msg(
        GetTextLanguage("轉點失敗", "转点失败", "Chuyển điểm thất bại"),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    case "M_msg1":
      $.fn.msg(
        GetTextLanguage(
          "該功能，已被關閉，請選擇其他帳戶！",
          "该功能，已被关闭，请选择其他帐户！",
          "Chức năng này , đã bị đóng , xin lựa chọn tài khoản khác！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      break;
    default:
      t.StatusCode.indexOf("|") > -1 &&
        ((s = t.StatusCode.split("|")),
        (f = s[0]),
        (t.StatusCode = s[1]),
        (f.indexOf("-888") > -1 || f.indexOf("-999") > -1) &&
          t.StatusCode == webRes.Font_Mypurse_HG_msg32 &&
          (t.StatusCode = webRes.Font_Mypurse_msg46));
      $.fn.msg(
        t.StatusCode,
        !1,
        function () {
          var u = window.location.href.toLowerCase(),
            e,
            r,
            i;
          t.StatusCode == webRes.Font_Mypurse_HG_msg32 &&
          $(".popup_bg").size() > 0
            ? ($("#txtMoneyTo").val(""),
              $("#btn_ok,.butIngame").addClass("disabled"))
            : (t.StatusCode == webRes.Font_Mypurse_HG_msg55 &&
                (f == "4401" || f == "4421" || f == "4442")) ||
              ((n == 0 || n == 2 || n == 3) &&
              t.StatusCode == webRes.Font_Mypurse_HG_msg55 &&
              u.indexOf("m_mypurseplatfom") > -1
                ? typeof fromThirdTransfer != "undefined"
                  ? ($(
                      "#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini"
                    ).size() &&
                      $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini")
                        .css("color", "green")
                        .text("loading.."),
                    (i = $("#hiddenPayin").val()),
                    RefreshBalance(MypurseId[i].type, "kshz"))
                  : location.reload()
                : t.StatusCode == webRes.Font_Mypurse_HG_msg55 &&
                  u.indexOf("m_mypurse.aspx") > -1
                ? ((e =
                    f.indexOf("-888") > -1
                      ? webRes.Font_Busy
                      : webRes.Font_Loading),
                  $("#payinMoney").css("color", "red").text(e))
                : (n == 2 || n == 3) &&
                  t.StatusCode == webRes.Font_Mypurse_HG_msg55
                ? ($(".butIngame").addClass("disabled"),
                  $("#btn_no").attr("disabled", "disabled"),
                  f == "55" || f.indexOf("-888") > -1 || f.indexOf("-999") > -1
                    ? ((r =
                        f.indexOf("-888") > -1
                          ? webRes.Font_Busy
                          : webRes.Font_Loading),
                      $("#lblCNFFish_mini").size() &&
                        $("#lblCNFFish_mini").css("color", "red").text(r),
                      $("#lblCNF_mini").size() &&
                        $("#lblCNF_mini").css("color", "red").text(r),
                      $("#lblCNFChess_mini").size() &&
                        $("#lblCNFChess_mini").css("color", "red").text(r),
                      $(".transfer_buttonGame,.transfer_butEnter").addClass(
                        "disabled"
                      ))
                    : ($(
                        "#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini"
                      ).size() &&
                        $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini")
                          .css("color", "green")
                          .text("loading.."),
                      (i = $("#hiddenPayin").val()),
                      RefreshBalance(MypurseId[i].type, "kshz")))
                : t.StatusCode == webRes.Font_Mypurse_msg46 &&
                  f != "4443" &&
                  f != "4446" &&
                  (location.href.indexOf("M_Mypurse") == -1 ||
                    location.href.indexOf("M_MypursePlatfom") > -1) &&
                  ($(
                    "#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini"
                  ).size() &&
                    $("#lblCNF_mini,#lblCNFChess_mini,#lblCNFFish_mini")
                      .css("color", "green")
                      .text("loading.."),
                  (i = $("#hiddenPayin").val()),
                  RefreshBalance(MypurseId[i].type, "kshz"),
                  $(".transfer_buttonGame,.transfer_butEnter").addClass(
                    "disabled"
                  )));
        },
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
  }
  $(".caretMask").text("");
  $("#txtMoneyTo").val("");
  $(".Rclose").hide();
  getPageInfo().isGamePage || resetOn();
}
function CheckPlatformTransferOpen() {
  $.ajax({
    url: "/LoadData/HelpCheck.ashx",
    data: { checkType: "37" },
    cache: !1,
    timeout: 15e3,
    error: function (n) {
      console.log(n.responseText);
    },
    success: function (n) {
      n === "True" && myPurseNotOpen();
    },
  });
}
function WReturnPoint() {
  var n = $(".two_btn_L");
  loading();
  $.ajax({
    url: "/LoadData/MyPurse.ashx",
    data: "id=T-02",
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {
      $.fn.alert(
        GetTextLanguage(
          "請求异常，請稍後再試！",
          "请求异常，请稍后再试！",
          "Yêu cầu bất thường，vui lòng thử lại sau！"
        ),
        null,
        null,
        null,
        null,
        null,
        null,
        "layer-msg-transfer"
      );
      closeloading();
    },
    success: function (t) {
      closeloading();
      switch (t.StatusCode) {
        case "M-01":
        case "M-001":
          $.fn.msg(
            t.StatusCode == "M-01"
              ? webRes.Font_LoginOut
              : webRes.Font_KickedOut,
            !1,
            function () {
              fnOut();
            },
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-0001":
          $.fn.confirm(
            webRes.Font_AccountLocked,
            function () {
              location.href = "/Mobile/Aspx/N_Kfzx.aspx";
            },
            function () {
              if (typeof fromThirdTransfer != "undefined") {
                var n = new URLSearchParams(location.search);
                local1.indexOf("m_mypurseplatfom") > -1
                  ? window.location.replace(
                      window.location.pathname +
                        "?logout=1&type=" +
                        n.get("type")
                    )
                  : $(".popup_In").append(
                      "<div class='popup_In maintain'><div class='sysmaintain'><div class='main_errorText01'>" +
                        webRes.Font_mypursePlatform1 +
                        "</div><div class='main_errorText02'>" +
                        webRes.Font_mypursePlatform2 +
                        "</div></div></div>"
                    );
              } else fnOut();
            },
            webRes.Font_Info,
            webRes.Font_Czzq_14,
            IsYn ? webRes.Font_Cancel : webRes.Font_closeComfirmationBtn
          );
          break;
        case "M-02":
          $.fn.msg(
            GetTextLanguage(
              "平台轉帳交易操作現已關閉，請稍後操作！",
              "平台转账交易操作现已关闭，请稍后操作！",
              "Giao dịch chuyển điểm hiện tại đang đóng, xin hãy sử dụng sau！"
            ),
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-03":
          $.fn.msg(
            GetTextLanguage(
              "帳號遊戲中,無法使用此功能！！！",
              "帐号游戏中，无法使用此功能！！！",
              "Tài khoản đang tiến hành trò chơi,không thể sử dụng chức năng này！！！"
            ),
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-04":
          $.fn.msg(
            GetTextLanguage(
              "您的可轉餘額為0！！！",
              "您的可转余额为0！！！",
              "Số dư có thể chuyển của bạn là 0！！！"
            ),
            !1,
            function () {
              location.reload();
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-08":
          $.fn.msg(
            GetTextLanguage(
              "平台轉帳成功！",
              "平台转账成功！",
              "Chuyển điểm thành công！"
            ),
            !1,
            function () {
              if (typeof fromThirdTransfer != "undefined") {
                var n = $("#hiddenPayin").val();
                RefreshBalance(MypurseId[n].type, "kshz");
              } else location.reload();
            },
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-09":
          $.fn.msg(
            t.Message,
            !1,
            function () {
              location.reload();
            },
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-20":
          $.fn.msg(
            GetTextLanguage(
              "操作次數過於頻繁，請稍候再試！",
              "操作次数过于频繁，请稍候再试！",
              "Thao tác thường xuyên, hãy thử lại sau！"
            ),
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-22":
        case "M-22b":
          location.pathname === "/Mobile/Aspx/M_Mypurse.aspx" &&
            purseNotOpenMsgOpened &&
            (purseNotOpenMsgOpened = "true");
          $.fn.msg(
            webRes.Font_MypurseNotOpen,
            !1,
            function () {
              var t, i, n;
              location.pathname === "/Mobile/Aspx/M_Mypurse.aspx" ||
              location.pathname === "/Mobile/Aspx/M_Index.aspx"
                ? (document.referrer.toLowerCase().indexOf("m_mypurse") > -1 &&
                    document.referrer.toLowerCase().indexOf("action=") > -1 &&
                    ((t = document.referrer
                      .toLowerCase()
                      .match(new RegExp("[?&]action=([^&]+)", "i"))[1]),
                    t != "1" && fnBack(document.referrer)),
                  document.referrer.toLowerCase().indexOf("m_member") > -1 ||
                  document.referrer.toLowerCase().indexOf("m_mypurse") > -1
                    ? fnBackMemberIndex()
                    : fnBackHomeIndex())
                : ((i = $("#hid_gameStyle").val()),
                  $("#plstformAction .inputaction").val() === "B" &&
                    i.indexOf("3D") > -1 &&
                    (typeof fromThirdTransfer != "undefined"
                      ? ((n = $("#hiddenPayin").val()),
                        RefreshBalance(MypurseId[n].type, "kshz"))
                      : location.reload()),
                  typeof fromThirdTransfer != "undefined"
                    ? (disableCustomKeyboard(),
                      $(".caretMask").hide(),
                      (n = $("#hiddenPayin").val()),
                      RefreshBalance(MypurseId[n].type, "kshz"))
                    : location.reload());
            },
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        case "M-35":
          $.fn.msg(
            "系统检测到您可能正在游戏中或尚未结算完毕，请稍候！",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
          break;
        default:
          $.fn.msg(
            t.StatusCode,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "layer-msg-transfer"
          );
      }
      $("#txtMoney").val("");
      n.addClass("disabled");
      n.attr("onclick", "javascript:void(0)");
    },
  });
}
function SendClose() {
  $("#pnl_tempIframePurse").remove();
  $("#lblColorMoney").size() > 0 ||
  ($("#plstformAction .inputaction").val() != "A" &&
    $("#ddlPayinto .inputselect").val() == "1")
    ? $("#pnl_tempIfram").append(
        $(
          '<iframe id="pnl_tempIframePurse" src=' +
            $("#txt_callbackUrl").val() +
            '/game/aspx/getPurse.html?page=close width="372" height="170" frameborder="0" scrolling="no"></iframe>'
        )
      )
    : $("#pnl_tempIfram").append(
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
function fnGetPurse(n) {
  (n || typeof n == "undefined") &&
    ($("#purselist").html(""), fnTabPageReset("#pursepage"));
  var t = $("#form1").serialize2();
  $.ajax({
    url: "../LoadData/M_MyPurse.ashx",
    data: t,
    type: "post",
    cache: !1,
    timeout: 15e3,
    error: function () {},
    success: function (t) {
      var i, r, u;
      $("#pursepage").hide();
      typeof n == "undefined" && $(".btn_recordSearch_T").click();
      t == "M-01"
        ? fnOut()
        : ((i = t.split("$$")),
          i[1] > 0 && $(".recordSearch").show(),
          $("#purselist").html(i[0]),
          $("html, body").animate({ scrollTop: 0 }, 120),
          $(".TP_tradeRec_listIn:first").show(),
          $(".TP_tradeRec_listIn:first").parent().addClass("on"),
          $(".TP_tradeRec_list").click(function () {
            $(this).children(".TP_tradeRec_listIn").css("display") == "none"
              ? ($(this).addClass("on"),
                $(this).children(".TP_tradeRec_listIn").show())
              : ($(this).removeClass("on"),
                $(this).children(".TP_tradeRec_listIn").hide());
          }),
          i[1] <= 10
            ? $("#pursepage").hide()
            : ((r = Math.ceil(parseFloat(i[1]) / 10)),
              (u = $("#pageindex").val()),
              r > 1 && $("#pursepage").show(),
              $("#pagecount").val(r)));
    },
  });
}
function CheckTransferMaintenance(n, t) {
  var i, r, u, f;
  if (n === "T-03")
    if (typeof fromThirdTransfer != "undefined")
      (i =
        $("#fast_transfer").size() > 0
          ? $("#lblMainMoney").text()
          : $("#lblMainMoney_mini").text()),
        (r = IsYn ? i.replace(/\./g, "") : i.replace(/,/g, "")),
        r != 0 &&
          ((u = $("#hiddenPayin").val()),
          isThirdOpen &&
            ($(".full_change,.btnChange").removeClass("disabled"),
            location.pathname.indexOf("M_MypursePlatfom.aspx") > -1 &&
              $(".full_change,.btnChange").attr(
                "onclick",
                "TurnAllOut('" + u + "')"
              )),
          $("#txtMoneyTo").removeClass("disabled"));
    else return;
  else
    (f = t[platformNames[n].id]),
      (isThirdOpen = f === 0 ? !1 : !0),
      countReturn++,
      CheckTransferMaintain();
}
function fnReturnBtnShow(n, t, i) {
  if (($(n).next().children(".rewind").remove(), t != 0 && t != "0")) {
    var r = t.replace(/,/g, "");
    parseInt(r) > 0 &&
      $(n).after(
        "<li class='game_sumListB'><div class='rewind' onclick='ReturnMainPoint(" +
          i +
          ")'>" +
          webRes.Font_ReturnBack +
          "</div></li>"
      );
  }
}
function disableCustomKeyboard() {
  $(".num_keyboard>ul>li").css("pointer-events", "none");
  $(".transferBox .caretMask").hide();
  $(".numPlusArea").children().css("pointer-events", "none");
}
function autoTransferBack() {
  if (location.search.toLowerCase().indexOf("autotransfer=") > -1)
    if (
      document.referrer != "" &&
      document.referrer.toLowerCase().indexOf(location.host) <= 0
    ) {
      var t = location.search.match(
          new RegExp("[?&]autotransfer=([^&]+)", "i")
        )[1],
        n = "0";
      switch (t) {
        case "CB":
          n = "1";
          break;
        case "KU":
          n = "24";
          break;
        case "NBB":
          n = "36";
          break;
        default:
          n = "0";
      }
      n != "0" &&
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
          error: function () {},
          success: function (n) {
            switch (n.StatusCode) {
              case "M-09":
                $.fn.msg(
                  GetTextLanguage(
                    "主帳戶與《KU彩球》互轉失敗，請重新操作！",
                    "主账户与《KU彩票》互转失败，请重新操作！",
                    "Tài khoản chính và《KU Xổ Số》chuyển khoản cho nhau thất bại,xin vui lòng thử lại！"
                  ),
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "layer-msg-transfer"
                );
                break;
              case "M-20":
                $.fn.msg(
                  GetTextLanguage(
                    "操作次數過於頻繁，請稍候再試！",
                    "操作次数过于频繁，请稍候再试！",
                    "Thao tác thường xuyên, hãy thử lại sau！"
                  ),
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "layer-msg-transfer"
                );
                break;
              case "M-102":
                $.fn.msg(
                  GetTextLanguage(
                    "主帳戶與《KU真人》互轉失敗，請重新操作！",
                    "主账户与《KU真人》互转失败，请重新操作！",
                    "Tài khoản chính và《KU CASINO》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                  ),
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "layer-msg-transfer"
                );
                break;
              case "M-324":
                $.fn.msg(
                  GetTextLanguage(
                    "主帳戶與《KU體育》互轉失敗，請重新操作！",
                    "主账户与《KU体育》互转失败，请重新操作！",
                    "Tài khoản chính và《KU Thể Thao》chuyển khoản cho nhau thất bại, xin vui lòng thử lại！"
                  ),
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "layer-msg-transfer"
                );
            }
            location.href.indexOf("N_Bonus.aspx") > -1
              ? history.replaceState(
                  "",
                  document.title,
                  window.location.href.replace("&autoTransfer=KU", "")
                )
              : history.replaceState(
                  "",
                  document.title,
                  window.location.href.split(/[?#]/)[0]
                );
            fnPoints(getPageInfo().ptype);
          },
        });
    } else
      location.href.indexOf("N_Bonus.aspx") > -1
        ? history.replaceState(
            "",
            document.title,
            window.location.href.replace("&autoTransfer=KU", "")
          )
        : history.replaceState(
            "",
            document.title,
            window.location.href.split(/[?#]/)[0]
          ),
        fnPoints(getPageInfo().ptype);
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
        t.val("").focus();
      }),
      !1
    );
  if (i.length != 18)
    return (
      $.fn.alert("身份证号长度/格式不正确！", function () {
        t.val("").focus();
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
        t.val("").focus();
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
      var f, e;
      flagIdCard = !1;
      var u = n.split("|"),
        i = u[0],
        r = u[1];
      if (i == "0") {
        if (r == "2") {
          f = $("#txtConfirm1").val();
          $("#hid_IdCard").val(f);
          IsMPage ? ShowNextDiv() : $("#btn").prop("disabled", !1).click();
          return;
        }
        if (location.search.toLowerCase().indexOf("chgdata=") > -1) {
          $.fn.alert("验证成功！", function () {
            fnBack("M_ChgData.aspx?hyzx=1&type1=1");
          });
          return;
        }
        e = local1.indexOf("hdzq") > -1;
        IsAdd2
          ? alertOk(r)
          : e
          ? $.fn.alert("验证成功！", function () {
              fnHyzxClose();
            })
          : (fnHyzxClose(r), IsVoicePassNoMChg && FirstStep());
      }
      i == "-1"
        ? $.fn.alert("会员帐号有误！", function () {
            location.search.toLowerCase().indexOf("chgdata=") > -1
              ? fnBack("M_ChgData.aspx?hyzx=1&type1=1")
              : layerframeAddClose();
          })
        : i == "1"
        ? ((IsNameCn = !1),
          $.fn.alert(
            "很抱歉，汇款户名不是正确中文名，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！",
            function () {
              location.search.toLowerCase().indexOf("chgdata=") > -1
                ? fnBack("M_ChgData.aspx?hyzx=1&type1=1")
                : openDialogZxkf();
            }
          ))
        : i == "2"
        ? $.fn.alert("很抱歉，单一会员仅限申请一个帐号！", function () {
            location.search.toLowerCase().indexOf("chgdata=") > -1
              ? fnBack("M_ChgData.aspx?hyzx=1&type1=1")
              : layerframeAddClose();
          })
        : i == "3"
        ? $.fn.alert("今日验证次数已达三次，请联系客服！", function () {
            location.search.toLowerCase().indexOf("chgdata=") > -1
              ? fnBack("M_ChgData.aspx?hyzx=1&type1=1")
              : (IsMAdd2 && fnMain(), openDialogZxkf());
          })
        : i == "4"
        ? fnIdCardFlag(r, function () {
            t.val("").focus();
          })
        : i == "5" &&
          $.fn.alert("身份证号不一致，请重新验证！", function () {
            t.val("").focus();
          });
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
        ? $.fn.alert("今日验证次数已达到三次，请联系客服！", function () {
            location.search.toLowerCase().indexOf("chgdata=") > -1
              ? fnBack("M_ChgData.aspx?hyzx=1&type1=1")
              : (IsMAdd2 && fnMain(), openDialogZxkf());
          })
        : IsMPage || layerIdCard(n);
    },
  });
}
function fnIdCardFlag(n, t) {
  var i =
    n == 0
      ? "今日验证次数已达三次，请联系客服！"
      : "输入有误,您尚有<span>" + n + "</span>次机会,请重新输入！";
  $.fn.alert(i, function () {
    t && t();
  });
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
function freeHint() {
  $(".freeHint").toggle();
}
function transferChange() {
  payInNum = $("#payin").find(".on .selectNum").attr("value");
  payOutNum = $("#payout").find(".on .selectNum").attr("value");
  var n = $("#payin").find(".on .selectNum").text(),
    t = $("#payout").find(".on .selectNum").text();
  isNE(payInNum)
    ? ($("#ddlPayin>select").val(payInNum), $("#payinMoney").text(n))
    : ($("#ddlPayin>select").val(""), $("#payinMoney").text("0"));
  $("#ddlPayout>select").val(payOutNum);
  $("#payoutMoney").text(t);
  t == webRes.Font_Maintain
    ? ($(".titlePayout>.selectIn,.titlePayout>.selectNum").css(
        "color",
        "#ff7c80"
      ),
      $("#payoutMoney").css("color", "#ff7c80"))
    : ($(".titlePayout>.selectIn").css("color", "black"),
      $(".titlePayout>.selectNum").css("color", "#039612"),
      $("#payoutMoney").css("color", "black"));
  n == webRes.Font_Maintain
    ? ($(".titlePayin>.selectIn,.titlePayin>.selectNum").css(
        "color",
        "#ff7c80"
      ),
      $("#payinMoney").css("color", "#ff7c80"))
    : ($(".titlePayin>.selectIn").css("color", "black"),
      $(".titlePayin>.selectNum").css("color", "#039612"),
      $("#payinMoney").css("color", "#2782d7"));
}
function loadSpinner() {
  new Date().getTime() - refreshTimer > 1e4
    ? refreshSpinner()
    : (refreshClock = setTimeout(() => {
        refreshSpinner();
      }, 1e4 - (new Date().getTime() - refreshTimer)));
}
function refreshSpinner() {
  $(".titlePayout>.selectNum").html(
    "<img class='img_spinner' src='/Mobile/images/main/spinner.svg'>"
  );
  $.each(MypurseIndex, function (n, t) {
    $(".selectNum[value='" + t.id + "']").html(
      "<img class='img_spinner' src='/Mobile/images/main/spinner.svg'>"
    );
  });
}
function refreshThirdPartyBalance() {
  var n = 0,
    t = 0;
  $.each(myPurseCodeList, function (i, r) {
    refreshBalance(i, r, function (i) {
      t++;
      i == null ||
        i == "" ||
        specialStatus ||
        i == "forbidden" ||
        (n += IsYn
          ? parseInt(i.replaceAll(/\./g, ""))
          : parseInt(i.replaceAll(",", "")));
      specialStatus && (specialStatus = !1);
      t == Object.keys(myPurseCodeList).length &&
        $("#lblTotalMoney").text(n.toMoney());
    });
  });
}
function refreshBalance(n, t, i) {
  $.ajax({
    url: "/LoadData/GetThirdPartyBalance.ashx",
    data: "id=" + t + "&type=refreshBalance&isAll=1",
    type: "post",
    dataType: "Json",
    cache: !1,
    timeout: 3e4,
    error: function () {},
    success: function (n) {
      var t = Object.keys(MypurseId).find(
          (t) => MypurseId[t].type === n.StatusCode
        ),
        r,
        o,
        f,
        u,
        e;
      ($(".selectNum[value='" + t + "']")
        .children()
        .remove(),
      (r = n.Data),
      r == "" && (r = 0),
      (o = ["-3", "-53", "-54", "-55", "-56"]),
      (f = MypurseId[t].type),
      (f == "T-09" || f == "T-18" || f == "T-34") &&
        o.indexOf(r) >= 0 &&
        ($(".selectNum[value='" + t + "']")
          .parent()
          .remove(),
        (r =
          r == "-53"
            ? webRes.Font_Pleacewait
            : r == "-54"
            ? webRes.Font_Loading
            : r == "-56"
            ? webRes.Font_Maintain
            : webRes.Font_Busy),
        $(".selectNum[value='" + t + "']").attr("style", "color:#ff7c80"),
        $(".selectNum[value='" + t + "']")
          .prev()
          .css("color", "#ff7c80"),
        (specialStatus = !0)),
      n.PlatStatus &&
        n.PlatStatus != "" &&
        ((e = n.PlatStatus.split("|")),
        (u =
          location.pathname.indexOf("/Mobile/Aspx/M_Mypurse.aspx") > -1 &&
          t == "36"
            ? e[1].toLowerCase() == "true" || e[2].toLowerCase() == "true"
            : e[1].toLowerCase())),
      n.IsMajorF && u == "false"
        ? ($(".selectNum[value='" + t + "']").attr("style", "color:#ff7c80"),
          $(".selectNum[value='" + t + "']")
            .prev()
            .css("color", "#ff7c80"),
          $(".selectNum[value='" + t + "']").text(webRes.Font_Maintain))
        : $(".selectNum[value='" + t + "']").text(r),
      typeof t != "undefined") &&
        (location.pathname.indexOf("/Mobile/Aspx/M_Mypurse.aspx") > -1 &&
          (u != "false" || n.IsMajorF
            ? t != 0 &&
              $("#payout,#payin")
                .find(".selectNum[value='" + t + "']")
                .parent()
                .show()
            : ($("#payout,#payin")
                .find(".selectNum[value='" + t + "']")
                .parent()
                .hide(),
              (r = "0")),
          n.StatusCode == "T-58" && u == "false" && (r = "0")),
        t == payInNum && u == "true"
          ? ($("#payinMoney").text(r), $(".titlePayin>.selectNum").text(r))
          : (t == payOutNum ||
              (t == "0" &&
                $(".titlePayout>.selectIn").text() ==
                  webRes.Font_MainAccount)) &&
            (u == "false"
              ? ($("#payoutMoney").text(webRes.Font_Maintain),
                $(".titlePayout>.selectNum").text(webRes.Font_Maintain))
              : ($("#payoutMoney").text(r),
                $(".titlePayout>.selectNum").text(r))),
        i && i(r));
    },
  });
}
function resetOn() {
  $("#payout").children().removeClass("on").show();
  $("#payin").children().not(":first").removeClass("on").show();
  $("#payout li").eq(0).addClass("on");
  $("#payin li").eq(0).addClass("on");
  $("#payin li").eq(1).hide();
  $("#ddlPayout>select").val(0);
  $("#ddlPayin>select").val("");
  $(".titlePayout>.selectIn").text(
    GetTextLanguage("主帳戶", "主账户", "TK Chính")
  );
  $(".titlePayout>.selectIn,.titlePayout>.selectNum").css("color", "black");
  UpdatePanelNew("T-03", function (n, t) {
    $("#ddlPayout #payoutMoney").text(t).css("color", "black");
  });
  $("#ddlPayin #payinMoney").css("color", "#2782d7");
  $(".titlePayin>.selectIn").text(
    GetTextLanguage("請選擇", "请选择", "Tùy chọn")
  );
  $(".titlePayin>.selectNum").text("");
  $(".titlePayin>.selectIn,.titlePayin>.selectNum").css("color", "black");
  payInNum = "";
  payOutNum = "";
  refreshTimer = new Date().getTime() - 1e4;
}
function setGameCategory(n = false) {
  if (IsMHomePage) {
    var t;
    $(".GameList_L")
      .children()
      .each(function () {
        $(this).hasClass("on") && (t = $(this).attr("id"));
      });
    t != null &&
      t != "" &&
      (n
        ? sessionStorage.setItem("GameCategory", t)
        : $.cookie("GameCategory", t, { path: "/" }));
  }
}
var Font_Maintain = GetTextLanguage("維護中", "维护中", "Bảo trì"),
  Font_Maintain2 = GetTextLanguage("維護中", "维护中", "Đang bảo trì"),
  mypurse,
  myPlatfom = !1,
  s_isMajorF = !1,
  payMoneyId = "payoutMoney",
  isMainOpen = !1,
  isThirdOpen = !1,
  isCheckSingle = !0,
  transNum,
  countReturn = 0,
  IsMPage,
  IsMAdd2,
  local1 = window.location.href.toLowerCase(),
  txtNoEnter =
    "很抱歉！您的身份证号输入错误已达3次，无法再进行验证，如欲继续申请，请联系客服专员，谢谢！",
  myPurseCodeList,
  hiddenReferralActivitySwitch,
  MypurseId,
  type,
  MypurseType,
  platformod,
  transfermod,
  checkThirdMoney,
  MypurseIndex,
  platformstatus,
  flag,
  flagRec,
  flagTurnAll,
  showKeyboard,
  platformNames,
  payInNum,
  payOutNum,
  refreshClock,
  specialStatus;
$(function () {
  IsMPage = $(".mobileHint2").size() > 0;
  IsMAdd2 = $(".form_addID").size() > 0;
});
hiddenReferralActivitySwitch = $("#hiddenReferralActivitySwitch").val();
IsCn
  ? ((myPurseCodeList = {
      MAIN: "T-03",
      COLOR: "T-04",
      AG: "T-07",
      CNF: "T-09",
      KY: "T-11",
      OG: "T-13",
      BBIN: "T-14",
      AB: "T-15",
      DT: "T-16",
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
      EVO: "T-59",
      AI: "T-60",
      FTG: "T-61",
      FC: "T-62",
      OBSport: "T-63",
      OBLive: "T-64",
      OBEsport: "T-65",
      OBFish: "T-70",
    }),
    activitySiteSwitch && (myPurseCodeList.FREN = "T-58"))
  : IsTw
  ? ((myPurseCodeList = {
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
      FTG: "T-61",
      OBSport: "T-63",
      OBLive: "T-64",
      OBEsport: "T-65",
      WG: "T-66",
      OBFish: "T-70",
    }),
    activitySiteSwitch && (myPurseCodeList.FREN = "T-58"))
  : ((myPurseCodeList = {
      MAIN: "T-03",
      COLOR: "T-04",
      AG: "T-07",
      CNF: "T-09",
      BBIN: "T-14",
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
      EVO: "T-59",
      AI: "T-60",
      FTG: "T-61",
      FC: "T-62",
      OBSport: "T-63",
      OBLive: "T-64",
      OBEsport: "T-65",
      AGVNFish: "T-69",
      OBFish: "T-70",
    }),
    activitySiteSwitch && (myPurseCodeList.FREN = "T-58"));
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
};
MypurseType = {
  "T-03": { id: "lblMainMoney", isOpen: !0, isTransferOpen: !0 },
  "T-04": { id: "lblColorMoney", isOpen: !1, isTransferOpen: !1 },
  "T-06": { id: "lblVD", isOpen: !1, isTransferOpen: !1 },
  "T-07": { id: "lblAG", isOpen: !1, isTransferOpen: !1 },
  "T-08": { id: "lblMGMoney", isOpen: !1, isTransferOpen: !1 },
  "T-09": { id: "lblCNF", isOpen: !1, isTransferOpen: !1 },
  "T-11": { id: "lblKY", isOpen: !1, isTransferOpen: !1 },
  "T-12": { id: "lblAE", isOpen: !1, isTransferOpen: !1 },
  "T-13": { id: "lblOG", isOpen: !1, isTransferOpen: !1 },
  "T-14": { id: "lblBBIN", isOpen: !1, isTransferOpen: !1 },
  "T-15": { id: "lblAB", isOpen: !1, isTransferOpen: !1 },
  "T-16": { id: "lblDT", isOpen: !1, isTransferOpen: !1 },
  "T-17": { id: "lblAG", isOpen: !1, isTransferOpen: !1 },
  "T-18": { id: "lblCNF", isOpen: !1, isTransferOpen: !1 },
  "T-20": { id: "lblCMD", isOpen: !1, isTransferOpen: !1 },
  "T-23": { id: "lblAG", isOpen: !1, isTransferOpen: !1 },
  "T-24": { id: "lblKU", isOpen: !1, isTransferOpen: !1 },
  "T-27": { id: "lblBNG", isOpen: !1, isTransferOpen: !1 },
  "T-29": { id: "lblCQ9", isOpen: !1, isTransferOpen: !1 },
  "T-30": { id: "lblCQ9", isOpen: !1, isTransferOpen: !1 },
  "T-31": { id: "lblVR", isOpen: !1, isTransferOpen: !1 },
  "T-32": { id: "lblLC", isOpen: !1, isTransferOpen: !1 },
  "T-33": { id: "lblPIN", isOpen: !1, isTransferOpen: !1 },
  "T-34": { id: "lblCNF", isOpen: !1, isTransferOpen: !1 },
  "T-36": { id: "lblSB", isOpen: !1, isTransferOpen: !1 },
  "T-37": { id: "lblKY", isOpen: !1, isTransferOpen: !1 },
  "T-38": { id: "lblNBB", isOpen: !1, isTransferOpen: !1 },
  "T-39": { id: "lblLC", isOpen: !1, isTransferOpen: !1 },
  "T-40": { id: "lblBBIN", isOpen: !1, isTransferOpen: !1 },
  "T-41": { id: "lblBBIN", isOpen: !1, isTransferOpen: !1 },
  "T-42": { id: "lblWM", isOpen: !1, isTransferOpen: !1 },
  "T-43": { id: "lblKA", isOpen: !1, isTransferOpen: !1 },
  "T-44": { id: "lblDG", isOpen: !1, isTransferOpen: !1 },
  "T-45": { id: "lblSA", isOpen: !1, isTransferOpen: !1 },
  "T-46": { id: "lblDS", isOpen: !1, isTransferOpen: !1 },
  "T-47": { id: "lblPS", isOpen: !1, isTransferOpen: !1 },
  "T-48": { id: "lblKA", isOpen: !1, isTransferOpen: !1 },
  "T-49": { id: "lblDS", isOpen: !1, isTransferOpen: !1 },
  "T-50": { id: "lblSM", isOpen: !1, isTransferOpen: !1 },
  "T-52": { id: "lblIM", isOpen: !1, isTransferOpen: !1 },
  "T-53": { id: "lblSB", isOpen: !1, isTransferOpen: !1 },
  "T-54": { id: "lblAES", isOpen: !1, isTransferOpen: !1 },
  "T-55": { id: "lblKS", isOpen: !1, isTransferOpen: !1 },
  "T-57": { id: "lblPG", isOpen: !1, isTransferOpen: !1 },
  "T-58": { id: "lblFREN", isOpen: !1, isTransferOpen: !1 },
  "T-59": { id: "lblEVO", isOpen: !1, isTransferOpen: !1 },
  "T-60": { id: "lblAI", isOpen: !1, isTransferOpen: !1 },
  "T-61": { id: "lblFTG", isOpen: !1, isTransferOpen: !1 },
  "T-62": { id: "lblFC", isOpen: !1, isTransferOpen: !1 },
  "T-63": { id: "lblOBSport", isOpen: !1, isTransferOpen: !1 },
  "T-64": { id: "lblOBLive", isOpen: !1, isTransferOpen: !1 },
  "T-65": { id: "lblOBEsport", isOpen: !1, isTransferOpen: !1 },
  "T-66": { id: "lblWG", isOpen: !1, isTransferOpen: !1 },
  "T-69": { id: "lblAGVNFish", isOpen: !1, isTransferOpen: !1 },
  "T-70": { id: "lblOBFish", isOpen: !1, isTransferOpen: !1 },
};
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
];
platformstatus = ["-1", "-3", "-53", "-54", "-55", "-56"];
flag = !1;
flagRec = !1;
flagTurnAll = !1;
showKeyboard = 1;
platformNames = {
  "T-04": { id: "f_isBallOpen" },
  "T-06": { id: "f_isHgOpen" },
  "T-07": { id: "f_isAgOpen" },
  "T-09": { id: "f_isCNFOpen" },
  "T-11": { id: "f_isKYOpen" },
  "T-13": { id: "f_isOgOpen" },
  "T-14": { id: "f_isBBINOpen" },
  "T-15": { id: "f_isABOpen" },
  "T-16": { id: "f_isDTOpen" },
  "T-17": { id: "f_isFishOpen" },
  "T-18": { id: "f_isCNFFishOpen" },
  "T-20": { id: "f_isCMDOpen" },
  "T-23": { id: "f_isAGSportOpen" },
  "T-24": { id: "f_isKUOpen" },
  "T-27": { id: "f_isBNGOpen" },
  "T-29": { id: "f_isCQ9Open" },
  "T-30": { id: "f_isCQ9FishOpen" },
  "T-31": { id: "f_isVROpen" },
  "T-32": { id: "f_isLCOpen" },
  "T-33": { id: "f_isPINOpen" },
  "T-34": { id: "f_isCNFChessOpen" },
  "T-36": { id: "f_isSBOpen" },
  "T-37": { id: "f_isKYFishOpen" },
  "T-38": { id: "f_isNBBOpen" },
  "T-39": { id: "f_isLCFishOpen" },
  "T-40": { id: "f_isBBINBallOpen" },
  "T-42": { id: "f_isWMOpen" },
  "T-43": { id: "f_isKAOpen" },
  "T-44": { id: "f_isDGOpen" },
  "T-45": { id: "f_isSAOpen" },
  "T-46": { id: "f_isDSOpen" },
  "T-47": { id: "f_isPSOpen" },
  "T-48": { id: "f_isKAFishOpen" },
  "T-49": { id: "f_isDSFishOpen" },
  "T-50": { id: "f_isSMOpen" },
  "T-52": { id: "f_isIMOpen" },
  "T-53": { id: "f_isSBEsportOpen" },
  "T-54": { id: "f_isAESOpen" },
  "T-55": { id: "f_isKSOpen" },
  "T-57": { id: "f_isPGOpen" },
  "T-59": { id: "f_isEVOOpen" },
  "T-60": { id: "f_isAIOpen" },
  "T-61": { id: "f_isFTGOpen" },
  "T-62": { id: "f_isFCOpen" },
  "T-63": { id: "f_isOBSportOpen" },
  "T-64": { id: "f_isOBLiveOpen" },
  "T-65": { id: "f_isOBESportOpen" },
  "T-66": { id: "f_isWGOpen" },
  "T-69": { id: "f_isAGVNFishOpen" },
  "T-70": { id: "f_isOBFishOpen" },
};
var IsVoicePassNoMChg = !1,
  numIdCard = 0,
  flagIdCard = !1,
  IsNameCn = !0;
specialStatus = !1;

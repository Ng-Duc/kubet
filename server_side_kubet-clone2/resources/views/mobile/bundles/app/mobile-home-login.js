var __assign, OBSMobileApp;
(function (n) {
  var t;
  (function (n) {
    var t = (function () {
      function n() {
        this.FingerIDX = "";
      }
      return n;
    })();
    n.LoginModel = t;
  })((t = n.Models || (n.Models = {})));
})(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetDBAConfigMemberPaymemtBySettingType = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Common/GetDBAConfigMemberPaymemtBySettingType",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetNewsByCondition = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/GetRevealableNewsByCondition",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "LoginSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.LoginSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.LoginSvc.$name,
  OBSMobileApp.Services.LoginSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f) {
          this.$timeout = t;
          this.loginSvc = i;
          this.permissionSvc = r;
          this.$cookies = u;
          this.messageBus = f;
          this.showAVEvent = !0;
          this.needSetProtectCode = !1;
          this.InitializeViewModel();
          n.NavigationHelper.GetInstance();
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            var t = this,
              i = this.$cookies.get("AVEventID");
            i && (this.showAVEvent = $.parseJSON(i.toLowerCase()));
            this.NewsQueryModel = new n.Models.ImportantNewsQuery();
            this.ImportantNewsItem = new n.Models.ImportantNews();
            this.messageBus.On("NeedSetProtectCode", function (n, i) {
              var u, r;
              t.needSetProtectCode = i && i.NeedSetProtectCode;
              u = i.NeedSetProtectCode ? "#f0eff5" : "#fff";
              jQuery("body").css("background-color", u);
              i.NeedSetProtectCode ||
                ((r = function () {
                  if (jQuery("#owl-demo").length == 0) {
                    t.$timeout(r, 10);
                    return;
                  }
                  jQuery("#owl-demo").owlCarousel({
                    items: 1,
                    loop: !0,
                    animateOut: "fadeOut",
                    autoplay: !0,
                    autoplaySpeed: 5e3,
                    autoplayTimeout: 5e3,
                    autoplayHoverPause: !0,
                    autoHeight: !0,
                  });
                }),
                t.$timeout(r, 10));
            });
          }),
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.ShowLogIn = function () {
            jQuery("#popup_login").show();
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
              { elemId: "txtAccountPWD" }
            );
          }),
          (t.prototype.IsFriendExist = function () {
            var n = window.sessionStorage.getItem("InviteAccountID") || "";
            return !(n == undefined || n == "");
          }),
          (t.prototype.CheckIfRegister = function () {
            if (this.IsFriendExist()) {
              window.location.href = jQuery("#registerurl").val();
              return;
            }
            this.permissionSvc
              .IsMemberRegisterEnabled()
              .then(function (t) {
                if (t === !0) {
                  window.location.href = jQuery("#registerurl").val();
                  return;
                }
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  "很抱歉，目前會員註冊關閉中",
                  null,
                  function () {
                    window.location.href = "/Mobile/Home/Index";
                  }
                );
              })
              .catch(function (t) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  t.Error.Message
                );
              });
          }),
          (t.prototype.CheckIsTest = function () {
            this.loginSvc
              .GetDBAConfigMemberPaymemtBySettingType()
              .then(function (t) {
                if (t === !0) {
                  window.location.href = jQuery("#registerurl").val();
                  return;
                }
                n.Helpers.Alert(
                  n.Helpers.ChangeLanguage("網站維護中，無法進行註冊"),
                  SweetAlertTypeEnum.warning
                );
              })
              .catch(function (t) {
                n.Helpers.Alert(
                  n.Helpers.ChangeLanguage(t.Error.Message),
                  SweetAlertTypeEnum.error
                );
              });
          }),
          (t.prototype.CloseAVEvent = function (n) {
            n.target.className.contains("btn_closeAV") &&
              (this.$cookies.put("AVEventID", "false", { path: "/" }),
              (this.showAVEvent = !1));
          }),
          (t.prototype.AVEventUrl = function (n, t) {
            n.target.className.contains("btn_AV") && window.open(t);
          }),
          (t.prototype.CloseImportantNews = function () {
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.ImportantNewsID,
              this.ImportantNewsItem.NewsID,
              !0
            );
            $("#importantNews").hide();
          }),
          (t.prototype.RedirectPage = function (t) {
            n.NavigationHelper.GetInstance().RedirectPage(t, "Home");
          }),
          (t.prototype.SpiltText = function (n, t) {
            var i = n.split("("),
              r = n.match(/\((.*?)\)/g)[0];
            return t == 0 ? i[t] : r;
          }),
          (t.prototype.DeleteSessionStorage = function () {
            n.Helpers.DeleteSessionStorageItem("WorldCupPage");
          }),
          (t.$name = "LoginCtrl"),
          (t.$inject = [
            "$timeout",
            "LoginSvc",
            "PermissionSvc",
            "$cookies",
            "messageBus",
          ]),
          t
        );
      })();
      t.LoginCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.LoginCtrl.$name,
  OBSMobileApp.Controllers.LoginCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.IsIOSAllowDownloadAPP = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Common/IsIOSAllowDownloadAPP", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "ADSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.ADService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.ADService.$name,
  OBSMobileApp.Services.ADService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n) {
          this.appContext = n;
          this.IsShowAppDownLoad = !1;
          this.InitializeViewModel();
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.InitializeViewModel = function () {
            this.IsShowAppDownLoad =
              n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.IsShowAppDownLoad
              ) != "false";
            this.CheckRemoveAD();
          }),
          (t.prototype.CloseAppDownload = function () {
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.IsShowAppDownLoad,
              "false",
              !0
            );
            this.IsShowAppDownLoad = !1;
            this.CheckRemoveAD();
          }),
          (t.prototype.CheckRemoveAD = function () {
            this.IsShowAppDownLoad || $("#top_btnAD").remove();
          }),
          (t.prototype.RedirectPage = function (t) {
            n.NavigationHelper.GetInstance().RedirectPage(t, "Home");
          }),
          (t.$name = "ADCtrl"),
          (t.$inject = ["appContext"]),
          t
        );
      })();
      t.ADCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.ADCtrl.$name,
  OBSMobileApp.Controllers.ADCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function i(i) {
          i === void 0 && (i = "msgBox");
          this.Id = "msgBox";
          this.Visibility = !1;
          this.CountDownSecondTick = null;
          this.CaptchaCode = "";
          this.CaptchaCode1 = "";
          this.CaptchaCode2 = "";
          this.CaptchaCode3 = "";
          this.CaptchaCode4 = "";
          this.IsCountDownOver = !0;
          this.IsCountDownFirstTime = !0;
          this.DefaultCountDownSecond = 30;
          this.CountDownSecond = 30;
          this.IsCallCustomerService = !1;
          this.IsServiceCallBackValid = !1;
          this.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage = "";
          this.SendVerifyCodeCount = 0;
          this.CallCustomerServiceButtonName =
            n.Helpers.ChangeLanguage("聯繫客服");
          this.CallCustomerServiceCounts = 0;
          this.CurrentVerifyMode = SMSVerifyModeEnum.SMS;
          this.CurrentVerifyModeCache = SMSVerifyModeEnum.SMS;
          this.IsGetVerifyMode = !0;
          this.ElementManager = new t.ViewElementManager();
          this.CSCallKey = "";
          this.SliderCaptchaErrorCount = 0;
          this.AmazingSign = "";
          this.DoubleAmazingSign = "";
          this.Options = {
            AccountID: "",
            CellPhone: "",
            InviteAccountID: "",
            VerifyUsage: VerifyUsageEnum.RegisterPhone,
          };
          this.CloseResult = {
            VerifyMode: SMSVerifyModeEnum.SMS,
            IsCanNotUseSMSProvider: !1,
            IsCallCustomerService: !1,
            IsSendCaptchaOverLimit: !1,
            IsCaptchaCodeSent: !1,
            LockCallCustomerService: !1,
            LockSendCaptcha: !1,
          };
          this.VerifiedResult = { CaptchaCode: "" };
          this.SliderCaptchaResult = { SliderCaptchaIdentityKey: "" };
          this.Id = i;
        }
        return i;
      })();
      t.CaptchaCodePanelViewModel = i;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SendCaptchaByAccount = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/SendCaptchaByAccountIDWithCellPhone",
              n
            );
          }),
          (n.prototype.SendCaptcha = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/SendCaptcha",
              n
            );
          }),
          (n.prototype.VerifyCaptcha = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/VerifyCaptcha",
              n
            );
          }),
          (n.prototype.VerifyCaptchaForgetPwd = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/VerifyCaptchaForgetPwd",
              n
            );
          }),
          (n.prototype.VerifyCaptchaMemberTransfer = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/VerifyCaptchaMemberTransfer",
              n
            );
          }),
          (n.prototype.CheckCellPhoneIsExist = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/CheckCellPhoneIsExist",
              n
            );
          }),
          (n.prototype.CheckCellPhoneIsVerifiedOrOverLimit = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/CheckCellPhoneIsVerified",
              n
            );
          }),
          (n.prototype.IsProtectCodeCellPhoneOverLimit = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/IsProtectCodeCellPhoneNotVerifiedOrOverLimit",
              n
            );
          }),
          (n.prototype.CheckTodaySendCountWithIPAddress = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Verify/CheckTodaySendCountWithIPAddress",
              n
            );
          }),
          (n.prototype.CheckDisposableServiceCallBackReturnCaptchaCode =
            function (n) {
              return this.dataProvider.SimpleApiResultPost(
                "../../api/MemberInfo/CheckDisposableServiceCallBackReturnCaptchaCode",
                n
              );
            }),
          (n.prototype.CheckServiceCallBackReturnCaptchaCode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/MemberInfo/CheckServiceCallBackReturnCaptchaCode",
              n
            );
          }),
          (n.prototype.CheckProtectCodeServiceCallBackReturnCaptchaCode =
            function (n) {
              return this.dataProvider.SimpleApiResultPost(
                "../../api/MemberInfo/CheckProtectCodeServiceCallBackReturnCaptchaCode",
                n
              );
            }),
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/MemberInfo/CreateMemberServiceCenterCallback",
              n
            );
          }),
          (n.$name = "CaptchaCodePanelSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.CaptchaCodePanelService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.CaptchaCodePanelService.$name,
  OBSMobileApp.Services.CaptchaCodePanelService
);
(__assign =
  (this && this.__assign) ||
  Object.assign ||
  function (n) {
    for (var t, r, i = 1, u = arguments.length; i < u; i++) {
      t = arguments[i];
      for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h, c, l) {
          var a = this;
          this.$scope = t;
          this.$timeout = i;
          this.messageBus = r;
          this.appConfig = u;
          this.$q = f;
          this.blockUI = e;
          this.captchaCodePanelSvc = o;
          this.appContextSvc = s;
          this.permissionSvc = h;
          this.verifySvc = c;
          this.$interval = l;
          this.SliderImage = "";
          this.SliderBgImage = "";
          this.PhoneVerify = !1;
          this.IsRequestFromOutside = !1;
          this.InitializeViewModel();
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelOpen,
            function (n, t) {
              a.model.IsCountDownFirstTime || a.model.IsCountDownOver
                ? (a.EmitShowBlockUI(),
                  a
                    .InitializeViewModel(t)
                    .then(function () {
                      a.SendCaptchaButtonClick(!0);
                    })
                    .finally(function () {
                      return a.EmitHideBlockUI();
                    }))
                : a.Show();
              a.model.Options = t;
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName
              .OnCaptchaCodePanelCustomerServiceOpen,
            function (n, t) {
              var i = a.model.CallCustomerServiceCounts,
                r = a.model.CSCallKey;
              a.InitializeViewModel(t).then(function () {
                a.model.IsCallCustomerService = !0;
                a.model.CloseResult.IsCallCustomerService = !0;
                a.model.CallCustomerServiceCounts = i;
                a.model.CSCallKey = r;
                a.SendCustomerService(!0);
              });
            }
          );
          this.messageBus.On("OnSliderCaptchaOpen", function (n, t) {
            a.PhoneVerify = t.PhoneVerify;
            a.IsRequestFromOutside = t.IsRequestFromOutside;
            a.InitSliderCaptchaImage();
            $("#mask_SliderCaptcha").show();
          });
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.InitializeViewModel = function (t) {
            return (
              (this.model = new n.Models.CaptchaCodePanelViewModel()),
              t && (this.model.Options = t),
              (this.model.DefaultCountDownSecond = Number(
                jQuery("#hfDefaultCountDownSecond").val()
              )),
              this.SetAmazingSign(),
              this.GetVerifyModeEvent()
            );
          }),
          (t.prototype.EmitCaptchaCodeVerified = function () {
            var t = this;
            this.model.VerifiedResult.CaptchaCode = this.model.CaptchaCode;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelVerified,
              this.model.VerifiedResult
            );
            this.$timeout(function () {
              t.Hide();
              t.$scope.$evalAsync();
            });
          }),
          (t.prototype.EmitPanelClose = function () {
            var t = this;
            this.model.CloseResult.VerifyMode = this.model.CurrentVerifyMode;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelClose,
              this.model.CloseResult
            );
            this.$timeout(function () {
              t.Hide();
              t.$scope.$evalAsync();
            });
          }),
          (t.prototype.EmitPanelChange = function () {
            this.model.CloseResult.VerifyMode = this.model.CurrentVerifyMode;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelClose,
              this.model.CloseResult
            );
          }),
          (t.prototype.EmitLockCallCustomerService = function () {
            this.model.CloseResult.VerifyMode = this.model.CurrentVerifyMode;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelClose,
              this.model.CloseResult
            );
          }),
          (t.prototype.EmitCountdownStart = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnCaptchaCodePanelCountdownStart,
              !0
            );
          }),
          (t.prototype.EmitCountdownEnd = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnCaptchaCodePanelCountdownEnd,
              !0
            );
          }),
          (t.prototype.EmitCaptchaImageClose = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaImageClose,
              this.PhoneVerify
            );
            this.Hide();
          }),
          (t.prototype.EmitShowBlockUI = function () {
            this.blockUI.instances.get("main").start("main");
          }),
          (t.prototype.EmitHideBlockUI = function () {
            this.blockUI.instances.get("main").stop();
          }),
          (t.prototype.IsVisible = function () {
            return this.model.Visibility;
          }),
          (t.prototype.Show = function () {
            this.model.Visibility = !0;
            this.OpenCaptchaKeyboard();
          }),
          (t.prototype.Hide = function () {
            this.model.Visibility = !1;
          }),
          (t.prototype.SetCountDownSecond = function (n) {
            n === void 0 && (n = 30);
            this.model.DefaultCountDownSecond = n;
            this.model.CountDownSecond = n;
          }),
          (t.prototype.OpenCaptchaKeyboard = function () {
            $(".CaptchaCode .numInputArea").css("display", "table");
          }),
          (t.prototype.SetCaptchaCode = function (n) {
            n === void 0 && (n = "");
            this.model.CaptchaCode = n;
            this.model.CaptchaCode1 = n.length >= 1 ? n.substring(0, 1) : "";
            this.model.CaptchaCode2 = n.length >= 2 ? n.substring(1, 2) : "";
            this.model.CaptchaCode3 = n.length >= 3 ? n.substring(2, 3) : "";
            this.model.CaptchaCode4 = n.length >= 4 ? n.substring(3, 4) : "";
          }),
          (t.prototype.IsSendCaptchaButtonEnabled = function () {
            return (
              this.model.IsCountDownOver || this.model.IsCountDownFirstTime
            );
          }),
          (t.prototype.CancelCountDownInterval = function () {
            return this.$interval == null
              ? !1
              : this.model.CountDownSecondTick != null
              ? (this.$interval.cancel(this.model.CountDownSecondTick), !0)
              : !1;
          }),
          (t.prototype.Countdown = function (n) {
            var t = this;
            return (
              n === void 0 && (n = function () {}),
              this.CancelCountDownInterval(),
              (this.model.IsCountDownOver = !1),
              (this.model.IsCountDownFirstTime = !1),
              (this.model.CountDownSecond = this.model.DefaultCountDownSecond),
              this.EmitCountdownStart(),
              (this.model.CountDownSecondTick = this.$interval(function () {
                t.model.CountDownSecond--;
                t.model.CountDownSecond <= 0 &&
                  ((t.model.IsCountDownOver = !0),
                  (t.model.CountDownSecond = t.model.DefaultCountDownSecond),
                  t.CancelCountDownInterval(),
                  t.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage ==
                    "Success_LimitNumber" &&
                    ((t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsCallCustomerService = !0)),
                  t.GetVerifyModeEvent(function () {
                    t.EmitPanelChange();
                  }),
                  t.EmitCountdownEnd());
              }, 1e3)),
              !0
            );
          }),
          (t.prototype.GetSendCaptchaButtonName = function (t) {
            if (
              (t === void 0 && (t = this.model.CurrentVerifyMode),
              !this.model.ElementManager.IsEnabled("sendCaptchaButton"))
            )
              return n.Helpers.ChangeLanguage("發送中");
            if (
              this.model.CloseResult.IsCanNotUseSMSProvider ||
              this.model.IsCallCustomerService
            )
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (t) {
              case SMSVerifyModeEnum.SMS:
                return this.model.SendVerifyCodeCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return this.model.SendVerifyCodeCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("發送語音驗證碼");
              default:
                return "";
            }
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            var t = this.GetSendCaptchaButtonName();
            return t === n.Helpers.ChangeLanguage("發送中")
              ? "bg_colorDB off"
              : t === n.Helpers.ChangeLanguage("發送語音驗證碼")
              ? "bg_colorR"
              : t === n.Helpers.ChangeLanguage("重發驗證碼")
              ? "bg_colorDB"
              : t === n.Helpers.ChangeLanguage("聯繫客服")
              ? "bg_colorDG"
              : "bg_colorDB";
          }),
          (t.prototype.GetVerifyModeEvent = function (t) {
            var i = this,
              u = this.$q.defer(),
              r;
            if (
              n.SiteCultureMethod.Provider().IsRegisterGetVerifyMode ||
              !(this.model.SendVerifyCodeCount > 0) ||
              this.model.Options.VerifyUsage != VerifyUsageEnum.RegisterPhone
            )
              return (
                (r = __assign({}, this.model.Options)),
                r.AccountID == "" &&
                  (r.AccountID = this.model.Options.CellPhone),
                this.appContextSvc
                  .GetVerifyMode(r)
                  .then(function (n) {
                    i.model.CurrentVerifyMode = n;
                    i.model.IsGetVerifyMode = !0;
                    i.model.CloseResult.IsCanNotUseSMSProvider = !1;
                    i.model.CurrentVerifyMode ==
                      SMSVerifyModeEnum.Unspecified &&
                      (i.model.CurrentVerifyMode = SMSVerifyModeEnum.SMS);
                  })
                  .catch(function (t) {
                    if (
                      ((i.model.CurrentVerifyMode = SMSVerifyModeEnum.SMS),
                      (i.model.CloseResult.VerifyMode = SMSVerifyModeEnum.SMS),
                      t == null ||
                        t == undefined ||
                        t.Error == null ||
                        t.Error == undefined)
                    ) {
                      n.Helpers.AlertOnlyOKCallback(
                        "",
                        SweetAlertTypeEnum.none,
                        function () {
                          // window.location.reload(!0);
                        },
                        "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                      );
                      return;
                    }
                    i.model.IsGetVerifyMode = !1;
                    i.model.CloseResult.IsCanNotUseSMSProvider = !0;
                  })
                  .finally(function () {
                    t != null && t();
                    u.resolve(!0);
                  }),
                u.promise
              );
          }),
          (t.prototype.IsFriendExist = function () {
            var n = window.sessionStorage.getItem("InviteAccountID") || "";
            return !(n == undefined || n == "");
          }),
          (t.prototype.IsMemberRegisterEnabled = function () {
            var t = this.$q.defer();
            return this.IsFriendExist()
              ? (t.resolve(!0), t.promise)
              : (this.permissionSvc
                  .IsMemberRegisterEnabled()
                  .then(function (i) {
                    i == !1 &&
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "很抱歉，目前會員註冊關閉中",
                        null,
                        function () {
                          window.location.href = "/Mobile/Home/Index";
                        }
                      );
                    t.resolve(i);
                  })
                  .catch(function (i) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      i.Error.Message
                    );
                    t.resolve(!1);
                  }),
                t.promise);
          }),
          (t.prototype.IsCellPhoneVerifyTimesTodayValid = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "IsCellPhoneVerifyTimesTodayValid"
              ),
              this.captchaCodePanelSvc
                .CheckCellPhoneIsVerifiedOrOverLimit({
                  AccountID: "",
                  Email: "",
                  CellPhone: this.model.Options.CellPhone,
                  VerifyUsage: this.model.Options.VerifyUsage,
                  IdyKey: this.model.SliderCaptchaIdentityKey,
                })
                .then(function (n) {
                  t.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage =
                    n.Message;
                  n.Message == "Success_LimitNumber" &&
                    (t.model.CSCallKey = angular.copy(
                      t.model.SliderCaptchaIdentityKey
                    ));
                  i.resolve(!0);
                })
                .catch(function (r) {
                  !n.Helpers.IsNull(r.Error) &&
                    n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                    ((t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsCallCustomerService = !0),
                    r.Error.Data != undefined &&
                      (t.model.CSCallKey = r.Error.Data.Key));
                  r.Error.Message ===
                    n.Helpers.ChangeLanguage("手機號碼已被註冊") &&
                    (t.model.IsCallCustomerService = !1);
                  n.Helpers.AlertSwitch(r);
                  i.resolve(!1);
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "IsCellPhoneVerifyTimesTodayValid"
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.IsProtectCodeCellPhoneVerifyTimesTodayValid =
            function () {
              var t = this,
                i = this.$q.defer();
              return (
                this.model.ElementManager.DisableElementBy(
                  "sendCaptchaButton",
                  "IsCellPhoneVerifyTimesTodayValid"
                ),
                this.captchaCodePanelSvc
                  .IsProtectCodeCellPhoneOverLimit({
                    AccountID: this.model.Options.AccountID,
                    CellPhone: this.model.Options.CellPhone,
                  })
                  .then(function (n) {
                    t.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage =
                      n.Message;
                    n.Message == "Success_LimitNumber" &&
                      (t.model.CSCallKey = angular.copy(
                        t.model.SliderCaptchaIdentityKey
                      ));
                    i.resolve(!0);
                  })
                  .catch(function (r) {
                    !n.Helpers.IsNull(r.Error) &&
                      n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                      ((t.model.IsCallCustomerService = !0),
                      (t.model.CloseResult.IsCallCustomerService = !0),
                      r.Error.Data != undefined &&
                        (t.model.CSCallKey = r.Error.Data.Key));
                    r.Error.Message ===
                      n.Helpers.ChangeLanguage("手機號碼已被註冊") &&
                      (t.model.IsCallCustomerService = !1);
                    n.Helpers.AlertSwitch(r);
                    i.resolve(!1);
                  })
                  .finally(function () {
                    t.model.ElementManager.EnableElementBy(
                      "sendCaptchaButton",
                      "IsCellPhoneVerifyTimesTodayValid"
                    );
                  }),
                i.promise
              );
            }),
          (t.prototype.IsCurrentIPSendCaptchaCountOverLimit = function () {
            var t = this,
              n = this.$q.defer();
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "IsCurrentIPSendCaptchaCountOverLimit"
              ),
              this.captchaCodePanelSvc
                .CheckTodaySendCountWithIPAddress({
                  IdyKey: this.model.SliderCaptchaIdentityKey,
                })
                .then(function () {
                  n.resolve(!1);
                })
                .catch(function () {})
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "IsCurrentIPSendCaptchaCountOverLimit"
                  );
                }),
              n.promise
            );
          }),
          (t.prototype.SendCaptchaButtonClick = function (n) {
            if (
              (n === void 0 && (n = !1),
              this.model.ElementManager.EnableElement("VerifyCaptcha"),
              this.model.Options.VerifyUsage == VerifyUsageEnum.RegisterPhone)
            ) {
              this.SendCaptchaButtonClickRegister(n);
              return;
            }
            if (
              this.model.Options.VerifyUsage == VerifyUsageEnum.ProtectCodeLogin
            ) {
              this.SendCaptchaButtonClickProtectCode(n);
              return;
            }
            this.SendCaptchaButtonClickCommon(n);
          }),
          (t.prototype.SendCaptchaButtonClickRegister = function (n) {
            var t = this;
            if (
              this.model.CloseResult.IsCanNotUseSMSProvider ||
              this.model.CloseResult.IsCallCustomerService
            ) {
              this.SendCustomerService(n);
              return;
            }
            if (
              this.model.SliderCaptchaIdentityKey == null ||
              this.model.SliderCaptchaIdentityKey.length !== 32
            ) {
              this.messageBus.Emit("OnSliderCaptchaOpen", {
                PhoneVerify: !0,
                IsRequestFromOutside: n,
              });
              return;
            }
            this.EmitShowBlockUI();
            this.IsMemberRegisterEnabled().then(function (i) {
              if (i == !1) {
                t.EmitHideBlockUI();
                return;
              }
              t.CheckIsServiceCallbackCreated()
                .then(function (i) {
                  if (i) {
                    t.model.CallCustomerServiceCounts++;
                    t.model.SliderCaptchaIdentityKey = null;
                    t.EmitHideBlockUI();
                    n && t.EmitLockCallCustomerService();
                    return;
                  }
                  t.IsCellPhoneVerifyTimesTodayValid().then(function (n) {
                    if (!n) {
                      t.model.SliderCaptchaIdentityKey = null;
                      t.EmitHideBlockUI();
                      t.EmitPanelClose();
                      return;
                    }
                    t.IsCurrentIPSendCaptchaCountOverLimit().then(function (n) {
                      if (n) {
                        t.model.SliderCaptchaIdentityKey = null;
                        t.EmitHideBlockUI();
                        t.EmitPanelClose();
                        return;
                      }
                      t.SendCaptcha();
                      t.EmitHideBlockUI();
                      t.model.SliderCaptchaIdentityKey = null;
                    });
                  });
                })
                .catch(function () {
                  t.EmitHideBlockUI();
                });
            });
          }),
          (t.prototype.SendCaptchaButtonClickCommon = function (n) {
            if (this.model.CloseResult.IsCanNotUseSMSProvider) {
              this.SendCustomerService(n);
              return;
            }
            this.SendCaptcha();
          }),
          (t.prototype.SendCaptchaButtonClickProtectCode = function (n) {
            var t = this;
            if (
              this.model.CloseResult.IsCanNotUseSMSProvider ||
              this.model.CloseResult.IsCallCustomerService
            ) {
              this.SendCustomerService(n);
              return;
            }
            this.EmitShowBlockUI();
            this.CheckIsServiceCallbackCreated()
              .then(function (i) {
                if (i) {
                  t.model.CallCustomerServiceCounts++;
                  t.EmitHideBlockUI();
                  n && t.EmitLockCallCustomerService();
                  return;
                }
                t.IsProtectCodeCellPhoneVerifyTimesTodayValid().then(function (
                  n
                ) {
                  if (!n) {
                    t.EmitHideBlockUI();
                    t.EmitPanelClose();
                    return;
                  }
                  t.SendCaptcha();
                  t.EmitHideBlockUI();
                });
              })
              .catch(function () {
                t.EmitHideBlockUI();
              });
          }),
          (t.prototype.SendCaptcha = function () {
            var n = this,
              t;
            this.EmitShowBlockUI();
            switch (this.model.Options.VerifyUsage) {
              case VerifyUsageEnum.RegisterPhone:
                t = this.SendCaptchaRegister();
                break;
              case VerifyUsageEnum.ForgetPwd:
              case VerifyUsageEnum.ForgetPWDAndWithdrowalPWD:
              case VerifyUsageEnum.ForgetWithdrawalPwd:
                t = this.SendCaptchaForgetPwd();
                break;
              case VerifyUsageEnum.ChangePhone:
                t = this.CheckCellPhoneIsExist().then(function (t) {
                  if (!t) {
                    var i = n.$q.defer();
                    return i.resolve(!1), i.promise;
                  }
                  return n.SendCaptchaCommon();
                });
                break;
              default:
                t = this.SendCaptchaCommon();
            }
            t.then(function (t) {
              t
                ? (n.Show(), (n.model.CloseResult.IsCaptchaCodeSent = !0))
                : n.EmitPanelClose();
              n.EmitHideBlockUI();
            });
          }),
          (t.prototype.SendCaptchaRegister = function () {
            var t = this,
              r = this.$q.defer(),
              i,
              u;
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "SendCaptcha"
              ),
              (i = __assign({}, this.model.Options)),
              i.VerifyUsage == VerifyUsageEnum.RegisterPhone &&
                ((i.IdyKey = this.model.SliderCaptchaIdentityKey),
                (i.AccountID = i.CellPhone),
                (u = window.sessionStorage.getItem("InviteAccountID") || ""),
                (i.InviteAccountID = u)),
              this.captchaCodePanelSvc
                .SendCaptcha(i)
                .then(function (i) {
                  n.Validator.IsSMSCaptchaLengthValid(i.Message) &&
                    (t.SetCaptchaCode(i.Message), t.VerifyCaptchaChange());
                  t.OpenCaptchaKeyboard();
                  t.model.SentAfterStepKey = i.Data;
                  t.model.SendVerifyCodeCount++;
                  t.Countdown();
                  t.model.CurrentVerifyModeCache = t.model.CurrentVerifyMode;
                  r.resolve(!0);
                })
                .catch(function (i) {
                  if (i.Error.Code == "4001") {
                    location.href = "/Mobile/Error/Restricted";
                    r.resolve(!1);
                    return;
                  }
                  if (i.Error.Message.indexOf("NotCanUseProvider") > -1) {
                    t.model.CloseResult.IsCanNotUseSMSProvider = !0;
                    r.resolve(!1);
                    return;
                  }
                  !n.Helpers.IsNull(i.Error) &&
                    n.Verifier.IsVerifyTimesOverLimit(i.Error.Message) &&
                    ((t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsCallCustomerService = !0),
                    i.Error.Data != undefined &&
                      (t.model.CSCallKey = i.Error.Data.Key));
                  n.Helpers.AlertSwitch(i, function () {});
                  t.GetVerifyModeEvent().finally(function () {
                    r.resolve(!1);
                  });
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "SendCaptcha"
                  );
                }),
              r.promise
            );
          }),
          (t.prototype.SendCaptchaForgetPwd = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "SendCaptcha"
              ),
              this.captchaCodePanelSvc
                .SendCaptchaByAccount(this.model.Options)
                .then(function (r) {
                  n.Validator.IsSMSCaptchaLengthValid(r.Message) &&
                    (t.SetCaptchaCode(r.Message), t.VerifyCaptchaChange());
                  t.OpenCaptchaKeyboard();
                  t.model.SendVerifyCodeCount++;
                  t.Countdown();
                  t.model.CurrentVerifyModeCache = t.model.CurrentVerifyMode;
                  i.resolve(!0);
                })
                .catch(function (r) {
                  if (r.Error.Message.indexOf("NotCanUseProvider") > -1) {
                    t.model.CloseResult.IsCanNotUseSMSProvider = !0;
                    i.resolve(!1);
                    return;
                  }
                  if (r.Error.Code == 4005) {
                    t.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnAccountIsLockHintOpen,
                      r.Error.Message
                    );
                    i.resolve(!1);
                    return;
                  }
                  !n.Helpers.IsNull(r.Error) &&
                    n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                    ((t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsSendCaptchaOverLimit = !0),
                    r.Error.Data != undefined &&
                      (t.model.CSCallKey = r.Error.Data.Key),
                    t.EmitPanelClose());
                  t.GetVerifyModeEvent().finally(function () {
                    i.resolve(!1);
                  });
                  n.Helpers.AlertSwitch(r, function () {});
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "SendCaptcha"
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.SendCaptchaCommon = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "SendCaptcha"
              ),
              this.captchaCodePanelSvc
                .SendCaptcha(this.model.Options)
                .then(function (r) {
                  n.Validator.IsSMSCaptchaLengthValid(r.Message) &&
                    (t.SetCaptchaCode(r.Message), t.VerifyCaptchaChange());
                  t.OpenCaptchaKeyboard();
                  t.model.SendVerifyCodeCount++;
                  t.Countdown();
                  t.model.CurrentVerifyModeCache = t.model.CurrentVerifyMode;
                  i.resolve(!0);
                })
                .catch(function (r) {
                  if (r.Error.Message.indexOf("NotCanUseProvider") > -1) {
                    t.model.CloseResult.IsCanNotUseSMSProvider = !0;
                    i.resolve(!1);
                    return;
                  }
                  !n.Helpers.IsNull(r.Error) &&
                    n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                    ((t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsSendCaptchaOverLimit = !0),
                    r.Error.Data != undefined &&
                      (t.model.CSCallKey = r.Error.Data.Key),
                    (t.model.Options.VerifyUsage ==
                      VerifyUsageEnum.MemberTransfer ||
                      t.model.Options.VerifyUsage ==
                        VerifyUsageEnum.MemberTransferApplyOpen ||
                      t.model.Options.VerifyUsage ==
                        VerifyUsageEnum.ChangePhone) &&
                      t.EmitPanelClose());
                  n.Helpers.AlertSwitch(r, function () {});
                  t.GetVerifyModeEvent().finally(function () {
                    i.resolve(!1);
                  });
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "SendCaptcha"
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.SendCustomerService = function (n) {
            var t = this;
            n === void 0 && (n = !1);
            this.EmitShowBlockUI();
            this.model.ElementManager.EnableElement("VerifyCaptcha");
            this.CheckIsServiceCallbackCreated()
              .then(function (n) {
                t.model.SliderCaptchaIdentityKey = null;
                n
                  ? t.model.CallCustomerServiceCounts++
                  : t.CreateMemberServiceCenterCallback();
              })
              .catch(function () {})
              .finally(function () {
                t.EmitHideBlockUI();
                n && t.EmitLockCallCustomerService();
              });
          }),
          (t.prototype.CheckIsServiceCallbackCreated = function () {
            var n = this;
            return this.model.Options.VerifyUsage ==
              VerifyUsageEnum.RegisterPhone
              ? this.CheckIsServiceCallbackCreatedRegister()
              : this.model.Options.VerifyUsage ==
                VerifyUsageEnum.ProtectCodeLogin
              ? this.CheckIsServiceCallbackCreatedProtectCode()
              : this.model.Options.VerifyUsage == VerifyUsageEnum.ChangePhone
              ? this.CheckCellPhoneIsExist().then(function (t) {
                  if (!t) {
                    var i = n.$q.defer();
                    return i.resolve(!0), i.promise;
                  }
                  return n.CheckIsServiceCallbackCreatedCommon();
                })
              : this.CheckIsServiceCallbackCreatedCommon();
          }),
          (t.prototype.CheckIsServiceCallbackCreatedRegister = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "CheckIsServiceCallbackCreated"
              ),
              this.captchaCodePanelSvc
                .CheckServiceCallBackReturnCaptchaCode({
                  CellPhone: this.model.Options.CellPhone,
                  IdyKey: this.model.SliderCaptchaIdentityKey,
                  IdyKey2: this.model.CSCallKey,
                  NoSMSProvider: this.model.CloseResult.IsCanNotUseSMSProvider,
                })
                .then(function (r) {
                  if (r != "0" && r != "1" && r != "NOT=0" && r != "NOT=1")
                    t.SetCaptchaCode(r),
                      (t.model.IsCallCustomerService = !0),
                      (t.model.CloseResult.IsCallCustomerService = !0),
                      (t.model.IsServiceCallBackValid = !0),
                      (t.model.CallCustomerServiceButtonName =
                        n.Helpers.ChangeLanguage("已驗證")),
                      t.VerifyCaptchaChange(),
                      t.OpenPopSuccess(),
                      i.resolve(!0);
                  else if (r == "NOT=0" || r == "NOT=1")
                    (t.model.IsCallCustomerService = !0),
                      (t.model.CloseResult.IsCallCustomerService = !0),
                      (t.model.IsServiceCallBackValid = !1),
                      r == "NOT=1" && t.model.SliderCaptchaIdentityKey != null
                        ? (t.model.CSCallKey = angular.copy(
                            t.model.SliderCaptchaIdentityKey
                          ))
                        : r == "NOT=0" &&
                          (t.model.CloseResult.LockCallCustomerService = !0),
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) + t.model.DoubleAmazingSign
                      ),
                      i.resolve(!0);
                  else {
                    if (r == "1" && t.model.SliderCaptchaIdentityKey != null)
                      t.model.CSCallKey = angular.copy(
                        t.model.SliderCaptchaIdentityKey
                      );
                    else if (r == "0") {
                      t.model.CloseResult.LockCallCustomerService = !0;
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) + t.model.DoubleAmazingSign
                      );
                      i.resolve(!0);
                      return;
                    }
                    i.resolve(!1);
                  }
                })
                .catch(function (r) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    r.Error.Message,
                    null,
                    function () {
                      r.Error.Message ==
                        n.Helpers.ChangeLanguage("手機號碼已被註冊") &&
                        (t.model.CloseResult.IsCallCustomerService = !1);
                      t.EmitPanelClose();
                    }
                  );
                  i.reject(!1);
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "CheckIsServiceCallbackCreated"
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.CheckIsServiceCallbackCreatedProtectCode = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.captchaCodePanelSvc
                .CheckProtectCodeServiceCallBackReturnCaptchaCode({
                  CellPhone: this.model.Options.CellPhone,
                  AccountID: this.model.Options.AccountID,
                })
                .then(function (r) {
                  (r == "NOT=0" || r == "NOT=1") &&
                    (r == "NOT=0" &&
                      (t.model.CloseResult.LockCallCustomerService = !0),
                    (t.model.IsCallCustomerService = !0),
                    (t.model.CloseResult.IsCallCustomerService = !0),
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + t.model.DoubleAmazingSign
                    ),
                    i.resolve(!0));
                  r != "1" && n.Validator.IsSMSCaptchaLengthValid(r)
                    ? (t.SetCaptchaCode(r),
                      (t.model.IsCallCustomerService = !0),
                      (t.model.CloseResult.IsCallCustomerService = !0),
                      (t.model.IsServiceCallBackValid = !0),
                      (t.model.CallCustomerServiceButtonName =
                        n.Helpers.ChangeLanguage("已驗證")),
                      t.VerifyCaptchaChange(),
                      t.OpenPopSuccess(),
                      i.resolve(!0))
                    : i.resolve(!1);
                })
                .catch(function (r) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    r.Error.Message,
                    null,
                    function () {
                      t.$timeout(function () {
                        t.EmitPanelClose();
                      }, 0);
                    }
                  );
                  i.reject(!1);
                }),
              i.promise
            );
          }),
          (t.prototype.GetQuestionTypeID = function () {
            return this.model.Options.VerifyUsage == VerifyUsageEnum.ForgetPwd
              ? 10
              : this.model.Options.VerifyUsage ==
                VerifyUsageEnum.ForgetWithdrawalPwd
              ? 11
              : this.model.Options.VerifyUsage ==
                VerifyUsageEnum.ForgetPWDAndWithdrowalPWD
              ? 12
              : this.model.Options.VerifyUsage == VerifyUsageEnum.ChangePhone
              ? 13
              : this.model.Options.VerifyUsage ==
                VerifyUsageEnum.ProtectCodeLogin
              ? 8
              : this.model.Options.VerifyUsage ==
                VerifyUsageEnum.MemberTransferApplyOpen
              ? 9
              : this.model.Options.VerifyUsage == VerifyUsageEnum.MemberTransfer
              ? 16
              : 7;
          }),
          (t.prototype.CheckIsServiceCallbackCreatedCommon = function () {
            var t = this,
              i = this.$q.defer();
            return (
              this.captchaCodePanelSvc
                .CheckDisposableServiceCallBackReturnCaptchaCode({
                  CellPhone: this.model.Options.CellPhone,
                  AccountID: this.model.Options.AccountID,
                  QuestionTypeID: this.GetQuestionTypeID(),
                })
                .then(function (r) {
                  (r == "NOT=0" || r == "NOT=1") &&
                    (r == "NOT=0" &&
                      (t.model.CloseResult.LockCallCustomerService = !0),
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + t.model.DoubleAmazingSign
                    ),
                    i.resolve(!0));
                  r != "1" && n.Validator.IsSMSCaptchaLengthValid(r)
                    ? (t.SetCaptchaCode(r),
                      (t.model.IsCallCustomerService = !0),
                      (t.model.CloseResult.IsCallCustomerService = !0),
                      (t.model.IsServiceCallBackValid = !0),
                      (t.model.CallCustomerServiceButtonName =
                        n.Helpers.ChangeLanguage("已驗證")),
                      t.VerifyCaptchaChange(),
                      i.resolve(!0))
                    : i.resolve(!1);
                })
                .catch(function (r) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    r.Error.Message,
                    null,
                    function () {
                      t.EmitPanelClose();
                    }
                  );
                  i.reject(!1);
                }),
              i.promise
            );
          }),
          (t.prototype.CreateMemberServiceCenterCallback = function () {
            var t = new n.Models.CreateMemberServiceCenterCallbackPostModel();
            return ((t.AccountID = this.model.Options.AccountID),
            (t.CallbackLanguageID = n.Helpers.GetCallbackLanguageID()),
            (t.LevelType = 0),
            (t.QuestionTypeID = this.GetQuestionTypeID()),
            (t.Phone = this.model.Options.CellPhone),
            this.model.Options.VerifyUsage == VerifyUsageEnum.RegisterPhone)
              ? ((t.IdyKey = this.model.CSCallKey),
                this.CreateMemberServiceCenterCallbackWithParam(t))
              : this.CreateMemberServiceCenterCallbackWithParam(t);
          }),
          (t.prototype.CreateMemberServiceCenterCallbackWithParam = function (
            t
          ) {
            var i = this;
            this.captchaCodePanelSvc
              .CreateMemberServiceCenterCallback(t)
              .then(function (t) {
                switch (t) {
                  case ServiceCenterMemberEnum.UnProcessedData:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) +
                        i.model.DoubleAmazingSign
                    );
                    break;
                  case ServiceCenterMemberEnum.Success:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) +
                        i.model.AmazingSign
                    );
                    break;
                  case ServiceCenterMemberEnum.CallServiceNotEnabled:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "很抱歉，回電服務目前關閉中，請暫時使用其他客服管道聯繫我們，謝謝！"
                      )
                    );
                    break;
                  default:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) +
                        i.model.AmazingSign
                    );
                }
              })
              .catch(function (t) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  t.Error.Message
                );
              })
              .finally(function () {
                i.model.CallCustomerServiceCounts++;
              });
          }),
          (t.prototype.SetAmazingSign = function () {
            n.GlobalJsConfig.Config.SiteCulture != "id-id"
              ? ((this.model.AmazingSign = "！"),
                (this.model.DoubleAmazingSign = "！！"))
              : ((this.model.AmazingSign = "!"),
                (this.model.DoubleAmazingSign = "!!"));
          }),
          (t.prototype.VerifyCaptchaChange = function (t) {
            if (
              (t === void 0 && (t = !1),
              !this.model.ElementManager.IsEnabled("VerifyCaptcha"))
            ) {
              this.model.CaptchaCode = "";
              return;
            }
            if (t && this.model.CloseResult.IsCanNotUseSMSProvider) {
              this.model.CaptchaCode = "";
              return;
            }
            this.SetCaptchaCode(this.model.CaptchaCode);
            n.Validator.IsSMSCaptchaLengthValid(this.model.CaptchaCode) &&
              this.VerifyCaptcha();
          }),
          (t.prototype.VerifyCaptcha = function () {
            var t = this,
              n;
            if (this.model.ElementManager.IsEnabled("VerifyCaptcha")) {
              this.model.ElementManager.DisableElementBy(
                "VerifyCaptcha",
                "VerifyCaptcha"
              );
              this.EmitShowBlockUI();
              switch (this.model.Options.VerifyUsage) {
                case VerifyUsageEnum.RegisterPhone:
                  n = this.VerifyCaptchaRegister();
                  break;
                case VerifyUsageEnum.ForgetPwd:
                case VerifyUsageEnum.ForgetPWDAndWithdrowalPWD:
                case VerifyUsageEnum.ForgetWithdrawalPwd:
                  n = this.VerifyCaptchaForgetPwd();
                  break;
                case VerifyUsageEnum.ProtectCodeLogin:
                  n = this.VerifyCaptchaProtectCode();
                  break;
                case VerifyUsageEnum.MemberTransfer:
                  n = this.VerifyCaptchaMemberTransfer();
                  break;
                default:
                  n = this.VerifyCaptchaCommon();
              }
              n.then(function (n) {
                n && t.OpenPopSuccess();
              }).finally(function () {
                t.model.ElementManager.EnableElementBy(
                  "VerifyCaptcha",
                  "VerifyCaptcha"
                );
                t.EmitHideBlockUI();
              });
            }
          }),
          (t.prototype.VerifyCaptchaRegister = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.IsServiceCallBackValid
              ? (this.EmitCaptchaCodeVerified(), i.reject(!1), i.promise)
              : (this.IsMemberRegisterEnabled().then(function (r) {
                  if (r == !1) {
                    i.reject(!1);
                    return;
                  }
                  t.captchaCodePanelSvc
                    .CheckCellPhoneIsExist({
                      CellPhone: t.model.Options.CellPhone,
                      IdyKey: t.model.SentAfterStepKey,
                    })
                    .then(function () {
                      t.captchaCodePanelSvc
                        .VerifyCaptcha({
                          AccountID: t.model.Options.CellPhone,
                          CellPhone: t.model.Options.CellPhone,
                          VerifyUsage: t.model.Options.VerifyUsage,
                          CaptchaCode: t.model.CaptchaCode,
                          IsReadOnly: !(
                            t.model.IsCallCustomerService ||
                            t.model.CloseResult.IsCanNotUseSMSProvider
                          ),
                          IsRunGeneralSMSStatus: !(
                            !t.model.IsGetVerifyMode ||
                            t.model.CloseResult.IsCanNotUseSMSProvider
                          ),
                        })
                        .then(function () {
                          t.EmitCaptchaCodeVerified();
                          i.resolve(!0);
                        })
                        .catch(function (r) {
                          r.Error.Message ==
                          n.Helpers.ChangeLanguage("手機號碼已被註冊")
                            ? n.Helpers.Alert(
                                "",
                                SweetAlertTypeEnum.none,
                                !1,
                                r.Error.Message
                              )
                            : n.Helpers.AlertSwitch(r);
                          t.SetCaptchaCode("");
                          i.reject(r);
                        });
                    })
                    .catch(function (r) {
                      t.model.CountDownSecond = t.model.DefaultCountDownSecond;
                      t.SetCaptchaCode("");
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        r.Error.Message
                      );
                      i.reject(r);
                    });
                }),
                i.promise);
          }),
          (t.prototype.VerifyCaptchaCommon = function () {
            var i = this,
              t = this.$q.defer();
            return (
              this.captchaCodePanelSvc
                .VerifyCaptcha({
                  AccountID: this.model.Options.AccountID,
                  CellPhone: this.model.Options.CellPhone,
                  VerifyUsage: this.model.Options.VerifyUsage,
                  CaptchaCode: this.model.CaptchaCode,
                  IsReadOnly: !(
                    this.model.IsCallCustomerService ||
                    this.model.CloseResult.IsCanNotUseSMSProvider
                  ),
                  IsRunGeneralSMSStatus: !(
                    !this.model.IsGetVerifyMode ||
                    this.model.CloseResult.IsCanNotUseSMSProvider
                  ),
                })
                .then(function () {
                  i.EmitCaptchaCodeVerified();
                  t.resolve(!0);
                })
                .catch(function (r) {
                  n.Helpers.AlertSwitch(r);
                  i.SetCaptchaCode("");
                  t.reject(r);
                }),
              t.promise
            );
          }),
          (t.prototype.VerifyCaptchaProtectCode = function () {
            var i = this,
              t = this.$q.defer();
            return this.model.IsServiceCallBackValid
              ? (this.EmitCaptchaCodeVerified(), t.resolve(!1), t.promise)
              : (this.captchaCodePanelSvc
                  .VerifyCaptcha({
                    AccountID: this.model.Options.AccountID,
                    CellPhone: this.model.Options.CellPhone,
                    VerifyUsage: this.model.Options.VerifyUsage,
                    CaptchaCode: this.model.CaptchaCode,
                    IsReadOnly: !this.model.CloseResult.IsCanNotUseSMSProvider,
                    IsRunGeneralSMSStatus: !(
                      !this.model.IsGetVerifyMode ||
                      this.model.CloseResult.IsCanNotUseSMSProvider
                    ),
                  })
                  .then(function () {
                    i.EmitCaptchaCodeVerified();
                    t.resolve(!0);
                  })
                  .catch(function (r) {
                    n.Helpers.AlertSwitch(r);
                    i.SetCaptchaCode("");
                    t.reject(r);
                  }),
                t.promise);
          }),
          (t.prototype.VerifyCaptchaMemberTransfer = function () {
            var i = this,
              t = this.$q.defer();
            return (
              this.captchaCodePanelSvc
                .VerifyCaptchaMemberTransfer({
                  AccountID: this.model.Options.AccountID,
                  CellPhone: this.model.Options.CellPhone,
                  VerifyUsage: this.model.Options.VerifyUsage,
                  CaptchaCode: this.model.CaptchaCode,
                  IsRunGeneralSMSStatus: !(
                    !this.model.IsGetVerifyMode ||
                    this.model.CloseResult.IsCanNotUseSMSProvider
                  ),
                })
                .then(function () {
                  i.EmitCaptchaCodeVerified();
                  t.resolve(!0);
                })
                .catch(function (r) {
                  n.Helpers.AlertSwitch(r);
                  i.SetCaptchaCode("");
                  t.reject(r);
                }),
              t.promise
            );
          }),
          (t.prototype.VerifyCaptchaForgetPwd = function () {
            var i = this,
              t = this.$q.defer();
            return (
              this.captchaCodePanelSvc
                .VerifyCaptchaForgetPwd({
                  AccountID: this.model.Options.AccountID,
                  CellPhone: this.model.Options.CellPhone,
                  VerifyUsage: this.model.Options.VerifyUsage,
                  CaptchaCode: this.model.CaptchaCode,
                  SecretCodeType:
                    this.model.Options.ForgetSecretCodeType.toString(),
                  IsReadOnly: !this.model.CloseResult.IsCanNotUseSMSProvider,
                  IsRunGeneralSMSStatus: !(
                    !this.model.IsGetVerifyMode ||
                    this.model.CloseResult.IsCanNotUseSMSProvider
                  ),
                })
                .then(function () {
                  i.EmitCaptchaCodeVerified();
                  t.resolve(!0);
                })
                .catch(function (r) {
                  n.Helpers.AlertSwitch(r);
                  i.SetCaptchaCode("");
                  t.reject(r);
                }),
              t.promise
            );
          }),
          (t.prototype.CaptchaImageClose = function () {
            $("#mask_SliderCaptcha").hide();
            this.model.SliderCaptchaErrorCount = 0;
            this.EmitCaptchaImageClose();
          }),
          (t.prototype.SliderRefreshCallback = function () {
            var n = this;
            this.$timeout(function () {
              n.InitSliderCaptchaImage();
            });
          }),
          (t.prototype.HandleCaptchaSuccess = function (n) {
            var t = this;
            this.model.SliderCaptchaIdentityKey = n;
            this.model.SliderCaptchaErrorCount = 0;
            this.model.Options.IdyKey = this.model.SliderCaptchaIdentityKey;
            this.$timeout(function () {
              $("#mask_SliderCaptcha").hide();
              t.PhoneVerify
                ? t.SendCaptchaButtonClick(t.IsRequestFromOutside)
                : t.messageBus.Emit("OnSliderCaptchaEndWithAccountVerify", {
                    SliderCaptchaIdentityKey: t.model.SliderCaptchaIdentityKey,
                  });
            }, 1e3);
          }),
          (t.prototype.HandleCaptchaFail = function () {
            var n = this;
            if (
              (this.model.SliderCaptchaErrorCount++,
              this.model.SliderCaptchaErrorCount >= 5)
            ) {
              this.$timeout(function () {
                n.CaptchaImageClose();
              }, 1e3);
              return;
            }
            this.$timeout(function () {
              n.InitSliderCaptchaImage();
            });
          }),
          (t.prototype.CheckCellPhoneIsExist = function () {
            var i = this,
              t = this.$q.defer();
            return this.model.Options.CellPhone.indexOf("*") != -1
              ? (t.resolve(!0), t.promise)
              : (this.captchaCodePanelSvc
                  .CheckCellPhoneIsExist({
                    CellPhone: this.model.Options.CellPhone,
                  })
                  .then(function () {
                    t.resolve(!0);
                  })
                  .catch(function (r) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      r.Error.Message,
                      null,
                      function () {
                        i.$timeout(function () {
                          i.EmitPanelClose();
                        }, 0);
                      }
                    );
                    t.resolve(!1);
                  }),
                t.promise);
          }),
          (t.prototype.InitSliderCaptchaImage = function () {
            var t = this;
            try {
              this.SliderBgImage = "";
              this.SliderImage = "";
              this.verifySvc.GetSliderCaptcha().then(function (n) {
                t.SliderBgImage = n.Background;
                t.SliderImage = n.Slider;
              });
            } catch (i) {
              n.Helpers.AlertSwitch(i);
            }
          }),
          (t.prototype.OpenPopSuccess = function () {
            $("#PopSuccess").show();
            this.model.Options.VerifyUsage == VerifyUsageEnum.RegisterPhone &&
              $("html, body").animate({ scrollTop: 0 });
            this.$timeout(function () {
              return $("#PopSuccess").hide();
            }, 2e3);
          }),
          (t.prototype.ClosePopSuccess = function () {
            $("#PopSuccess").hide();
          }),
          (t.$name = "CaptchaCodePanelCtrl"),
          (t.$inject = [
            "$scope",
            "$timeout",
            "messageBus",
            "appConfig",
            "$q",
            "blockUI",
            "CaptchaCodePanelSvc",
            "AppContextSvc",
            "PermissionSvc",
            "VerifySvc",
            "$interval",
          ]),
          t
        );
      })();
      t.CaptchaCodePanelCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.CaptchaCodePanelCtrl.$name,
  OBSMobileApp.Controllers.CaptchaCodePanelCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function n() {
            this.GetGiftEventList = [];
            this.GiftEventCount = 0;
          }
          return n;
        })(),
        t;
      n.EventFloatViewModel = i;
      t = (function () {
        function n() {}
        return n;
      })();
      n.GetGiftEventResult = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetGiftEventSettingByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Events/GetGiftEventSettingByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGiftEventGroupCountByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Events/GetGiftEventGroupCountByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "EventFloatSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.EventFloatSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.EventFloatSvc.$name,
  OBSMobileApp.Services.EventFloatSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i) {
          var r = this;
          this.$scope = t;
          this.messageBus = i;
          this.isShowDiscountFloat = !1;
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.GetShowDrawPageCategory,
            function (n, t) {
              r.isShowDiscountFloat = t.length > 0;
              r.isShowDiscountFloat || $("#gifetFloat").remove();
            }
          );
        }
        return (
          (t.prototype.RedirectPage = function (t, i) {
            if ((i === void 0 && (i = ""), i == "")) {
              n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t);
              return;
            }
            t = t + "?tab=5";
            n.NavigationHelper.GetInstance().RedirectPage(t, i);
          }),
          (t.$name = "EventFloatCtrl"),
          (t.$inject = ["$scope", "messageBus"]),
          t
        );
      })();
      t.EventFloatCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.EventFloatCtrl.$name,
  OBSMobileApp.Controllers.EventFloatCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var c = (function () {
          function n(n) {
            n === void 0 && (n = "");
            this.key = "";
            this.active = !1;
            this.key = n;
          }
          return n;
        })(),
        t,
        i,
        r,
        u,
        f,
        e,
        o,
        s,
        h;
      n.FooterListNgClass = c;
      t = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyBalancePostModel = t;
      i = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyMainAmountModel = i;
      r = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyModel = r;
      u = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyCheckGamePostModel = u;
      f = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyCheckGameCheckResult = f;
      e = (function () {
        function n() {}
        return n;
      })();
      n.FooterGameLobbyDisplayAmount = e;
      o = (function () {
        function n() {
          this.MainAmount = this.GameBalance = 0;
        }
        return n;
      })();
      n.FooterGameLobbyNumberAmount = o;
      s = (function () {
        function n() {}
        return n;
      })();
      n.FooterPlatformTransfer = s;
      h = (function () {
        function n() {
          this.IsShowDescription = !1;
        }
        return n;
      })();
      n.GetGiftEventSettingByAccountIDResult = h;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t) {
          this.dataProvider = n;
          this.xpagerSvc = t;
        }
        return (
          (n.prototype.GetMemberBalanceInfoByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/MemberTransfer/GetMemberBalanceInfoByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGameBalanceInfoByAccountID = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Game/GetBalance", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferPoint = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Game/TransferPoint", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferGamePointToMain = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Game/TransferGameAllPointToMain",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferMainAllAmountToGame = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Game/TransferMainAllAmountToGame",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferCheckBackMessage = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/TransferCheckBackMessage",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckTransferPopup = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/CheckTransferPopup",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.GetShowDrawPageCategory = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Events/GetShowDrawPageCategory", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "FooterSvc"),
          (n.$inject = ["DataProvider", "XPagerSvc"]),
          n
        );
      })();
      n.FooterService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.FooterService.$name,
  OBSMobileApp.Services.FooterService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o) {
          this.appConfig = t;
          this.appContext = i;
          this.$q = r;
          this.$timeout = u;
          this.messageBus = f;
          this.footerSvc = e;
          this.appContextSvc = o;
          this.CheckCanFunction = "";
          this.isFakeTransferMaintenance = !1;
          this.isDisabled = !0;
          this.unreadLatestOffers = !1;
          this.isDWopen = !1;
          this.footerMenuSelections = {
            ServiceCenter: new n.Models.FooterListNgClass("ServiceCenter"),
            LatestOffers: new n.Models.FooterListNgClass("LatestOffers"),
            DepositWithdrawal: new n.Models.FooterListNgClass(
              "DepositWithdrawal"
            ),
            PlatfromTransfer: new n.Models.FooterListNgClass(
              "PlatfromTransfer"
            ),
            TransactionRecords: new n.Models.FooterListNgClass(
              "TransactionRecords"
            ),
            MemberCenter: new n.Models.FooterListNgClass("MemberCenter"),
          };
          this.InitializeFooter();
          this.MemuControl();
          this.InitialGameLobbyTransfer();
          this.GetShowDrawPageCategory();
          this.entryRef = jQuery("#hfEntryRef").val();
          f.On("showMaskAll", function () {
            u(function () {
              return $("#footer_mask_all").show();
            });
          });
        }
        return (
          (t.prototype.SetLinkDisabled = function (n) {
            $("#" + n)
              .attr("href", "javascript:void(0)")
              .addClass("disabled");
          }),
          (t.prototype.MemuControl = function () {
            (this.appConfig.CompetenceModel.IsDeposit &&
              this.appConfig.CompetenceModel.IsDeposit_P &&
              this.appConfig.CompetenceModel.MemberStatus !=
                n.Models.MemberStatusEnum.Audit) ||
              this.SetLinkDisabled("MemberDeposit");
            (this.appConfig.CompetenceModel.IsWithdrawal &&
              this.appConfig.CompetenceModel.IsWithdrawal_P &&
              this.appConfig.CompetenceModel.MemberStatus !=
                n.Models.MemberStatusEnum.Audit) ||
              this.SetLinkDisabled("MemberWithdrawal");
            this.appConfig.CompetenceModel.IsEnable ||
              (this.SetLinkDisabled("PlatformTransfer"),
              this.SetLinkDisabled("TransactionRecords"));
          }),
          (t.prototype.InitializeFooter = function () {
            this.footerMenuSelections[
              n.NavigationHelper.GetInstance().Model.CurrentFooterMenu
            ] &&
              (this.footerMenuSelections[
                n.NavigationHelper.GetInstance().Model.CurrentFooterMenu
              ].active = !0);
          }),
          (t.prototype.InitialGameLobbyTransfer = function () {
            this.isGameLobby = _.includes(
              location.pathname.toLowerCase(),
              "gamelobby"
            );
            this.subGameType = n.Helpers.GetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.GameLobbySubGameType
            );
            this.gameType = n.Helpers.GetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.GameLobbyGameType
            );
            this.displayAmount = new n.Models.FooterGameLobbyDisplayAmount();
            this.numberAmount = new n.Models.FooterGameLobbyNumberAmount();
            this.appContext.UserProfile.TestType === 2 &&
              (this.isFakeTransferMaintenance = !0);
          }),
          (t.prototype.ControlTransferPanel = function (n) {
            var t = this;
            this.$timeout(function () {
              n || t.displayAmount.MainAmount === "0"
                ? $(".numPlusArea, .numInputArea").addClass("lock")
                : $(".numPlusArea, .numInputArea").removeClass("lock");
              var i = $("#transferAmount, .btn_transfer");
              n
                ? ((t.isDisabled = !0),
                  i
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#bbb !important;color:white !important;"
                    ),
                  $("#transferAmount")
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#e5e5e5 !important;color:white !important;"
                    )
                    .removeClass("on"),
                  $(".btn_closeKB").hide())
                : (i.removeAttr("disabled style"),
                  (t.isDisabled = !1),
                  t.displayAmount.MainAmount != "0"
                    ? ($(".btn_transfer").removeAttr("disabled style"),
                      $("#transferAmount").focus())
                    : t.displayAmount.MainAmount == "0" &&
                      ($(".btn_transfer")
                        .attr("disabled", "disabled")
                        .css(
                          "cssText",
                          "background-color:#bbb !important;color:white !important;"
                        ),
                      $("#transferAmount")
                        .attr("disabled", "disabled")
                        .css(
                          "cssText",
                          "background-color:#e5e5e5 !important;color:white !important;"
                        )
                        .removeClass("on")));
            });
          }),
          (t.prototype.ShowErrorMsgOnInputAmount = function (t, i) {
            var r = $(".transferAmount");
            i || (i = n.Helpers.ChangeLanguage("維護中"));
            n.Helpers.StringContainsOneOfKeywords(
              i,
              "平台轉帳維護中",
              "目前轉帳功能維護中"
            ) && (i = n.Helpers.ChangeLanguage("平台轉帳維護中"));
            t
              ? this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardDisable,
                  { elemId: "transferAmount", text: i }
                )
              : this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                  {
                    elemId: "transferAmount",
                    text: n.Helpers.ChangeLanguage("請輸入金額"),
                  }
                );
          }),
          (t.prototype.UpdateLoginAreaGameBalance = function () {
            var t = new n.Models.FooterGameLobbyBalancePostModel();
            t.GameType = this.gameType;
            t.SubGameType = this.subGameType;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.GetGameLobbyBalance,
              t
            );
          }),
          (t.prototype.ShowGameMaintain = function () {
            this.displayAmount.GameBalance = n.Helpers.ChangeLanguage("維護中");
          }),
          (t.prototype.GetMainAmountAndGameBalance = function () {
            var t = this,
              i;
            $(".transferAmount").toggleClass("keyboardmaintain", !1);
            this.ControlTransferPanel(!0);
            i = new n.Models.FooterGameLobbyBalancePostModel();
            i.GameType = this.gameType;
            i.SubGameType = this.subGameType;
            this.$q
              .all([
                this.footerSvc.GetMemberBalanceInfoByAccountID(),
                this.footerSvc.GetGameBalanceInfoByAccountID(i),
              ])
              .then(function (i) {
                if (
                  ((t.numberAmount.MainAmount = i[0].BalanceAmount),
                  (t.numberAmount.GameBalance = i[1]),
                  (t.displayAmount.MainAmount = n.Formatter.NumberFormat(
                    Math.floor(t.numberAmount.MainAmount)
                  )),
                  (t.displayAmount.GameBalance = n.Formatter.NumberFormat(
                    Math.floor(t.numberAmount.GameBalance)
                  )),
                  t.ShowErrorMsgOnInputAmount(!1),
                  $(".transferAmount").toggleClass("keyboardmaintain", !1),
                  $("#transferAmount").focusin(),
                  t.ControlTransferPanel(!1),
                  Math.floor(t.numberAmount.MainAmount) > 0)
                ) {
                  var r = $(".transferAmount").find(".numInputArea");
                  r.css("display", "table");
                }
              })
              .catch(function (n) {
                if (n.Error.Code === 4001) {
                  $(".transferAmount").toggleClass("keyboardmaintain", !0);
                  t.ControlTransferPanel(!0);
                  t.ShowGameMaintain();
                  t.ShowErrorMsgOnInputAmount(!0);
                  return;
                }
                t.isFakeTransferMaintenance
                  ? t.ControlTransferPanel(!1)
                  : ($(".transferAmount").toggleClass("keyboardmaintain", !0),
                    t.ShowErrorMsgOnInputAmount(!0, n.Error.Message));
              });
          }),
          (t.prototype.PopClose = function () {
            this.transferAmount = null;
            $(".mask,.mask_join,.mask_all").hide();
            this.footerMenuSelections.PlatfromTransfer.active = !1;
            $(".container_main").removeAttr("style");
          }),
          (t.prototype.ChangePlatformName = function (n) {
            return $("#Pltform" + n).val();
          }),
          (t.prototype.ClickCheckFunction = function (n) {
            this.CheckCanFunction = n;
          }),
          (t.prototype.CheckTopMenuPermission = function (n) {
            return this.appContext.UserProfile == null ||
              this.appContext.UserProfile.LoginMenuSwitch[n] == null
              ? !1
              : this.appContext.UserProfile.LoginMenuSwitch[n] === "True";
          }),
          (t.prototype.AppContextIsLoad = function () {
            return (
              this.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin
            );
          }),
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.PopupClose = function (n) {
            jQuery("#" + n).hide();
          }),
          (t.prototype.OpenTransferBox = function () {
            var r = $(window).scrollTop(),
              i,
              t;
            return (
              $(".container_main").css({
                position: "fixed",
                top: "-" + r + "px",
              }),
              this.CloseDWZone(),
              (i = this.$q.defer()),
              (t = new n.Models.FooterPlatformTransfer()),
              (t.ToGameType = this.gameType),
              (t.FromGameType = "Member"),
              (t.TransferAmount = 1),
              this.footerSvc
                .CheckTransferPopup(t)
                .then(function () {
                  i.resolve(!0);
                })
                .catch(function (t) {
                  if (
                    (i.reject(!1),
                    t.Error.Code === 4001 || t.Error.Code === 1004)
                  )
                    n.Helpers.AlertSwitch(t);
                  else if (t.Error.Code === 4010) {
                    var r =
                      '<span style="color:red; font-size:18px; display:block; margin-bottom:10px;">' +
                      n.Helpers.ChangeLanguage("本功能目前無法使用！") +
                      '</span><span style="color:#575757; font-size: 16px;">' +
                      n.Helpers.ChangeLanguage("帳號已登出，請重新登錄") +
                      "</span>";
                    n.Helpers.AlertOnlyOKCallback(
                      "",
                      SweetAlertTypeEnum.none,
                      function () {
                        window.name = "";
                        // window.location.reload();
                      },
                      r
                    );
                  } else
                    t.Error.Code === 1002 &&
                      ($("#GameLobbyFastTransfer").hide(),
                      $("#GameLobbyFastTransferLogOut").show());
                })
                .finally(function () {}),
              this.footerMenuSelections.PlatfromTransfer.active ||
                (this.SelectChange(this.footerMenuSelections.PlatfromTransfer),
                this.CloseDWZone()),
              i.promise
            );
          }),
          (t.prototype.InitializeQuickTransfer = function () {
            return (
              this.ControlTransferPanel(!0),
              this.ShowErrorMsgOnInputAmount(!1),
              (this.displayAmount.MainAmount =
                n.Helpers.ChangeLanguage("載入中")),
              (this.displayAmount.GameBalance =
                n.Helpers.ChangeLanguage("載入中")),
              this.appConfig.CompetenceModel.IsEnable === !1 &&
                (this.ShowErrorMsgOnInputAmount(
                  !0,
                  n.Helpers.ChangeLanguage("很抱歉，目前轉帳功能維護中")
                ),
                this.ControlTransferPanel(!0)),
              this.GetMainAmountAndGameBalance(),
              n.NavigationHelper.GetInstance().SetCurrentFooterMenu(
                "PlatformTransfer"
              ),
              !0
            );
          }),
          (t.prototype.TransferFromAccountToGame = function () {
            var i = this,
              t;
            if (this.numberAmount.MainAmount < 1)
              return (
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("主帳戶餘額不足"),
                  null,
                  function () {
                    i.ShowKeyboardTransferAndCleanAccount();
                  }
                ),
                !1
              );
            if (this.transferAmount > this.numberAmount.MainAmount)
              this.transferAmount = this.numberAmount.MainAmount;
            else if (this.transferAmount === 0 || !this.transferAmount)
              return (
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("請輸入轉點金額")
                ),
                !1
              );
            return (
              (t = new n.Models.FooterGameLobbyModel()),
              (t.GameType = this.gameType),
              (t.SubGameType = this.subGameType),
              (t.TransferAmount = this.transferAmount),
              this.ControlTransferPanel(!0),
              this.footerSvc
                .TransferPoint(t)
                .then(function () {
                  i.PopClose();
                  i.transferAmount = null;
                  $(".keyboard").removeClass("keyIn textMoney");
                  $(".keyboard").css("color", "#999");
                  i.UpdateLoginAreaGameBalance();
                  n.Helpers.NotifyBox(
                    n.Helpers.ChangeLanguage("轉點成功"),
                    null,
                    null,
                    1e3
                  );
                })
                .catch(function (n) {
                  return i.CatchProcess(t.GameType, n);
                }),
              !0
            );
          }),
          (t.prototype.TransferGameAllPointToMainAccount = function () {
            var t = this,
              i = new n.Models.FooterGameLobbyModel();
            return (
              (i.GameType = this.gameType),
              this.ControlTransferPanel(!0),
              this.footerSvc
                .TransferGamePointToMain(i)
                .then(function () {
                  t.PopClose();
                  t.transferAmount = null;
                  t.UpdateLoginAreaGameBalance();
                  n.Helpers.NotifyBox(
                    n.Helpers.ChangeLanguage("轉點成功"),
                    null,
                    null,
                    1e3
                  );
                })
                .catch(function (n) {
                  return t.CatchProcess(i.GameType, n);
                }),
              !0
            );
          }),
          (t.prototype.TransferMainAllAmountToGame = function () {
            var t = this,
              i,
              r;
            return Number(this.numberAmount.MainAmount) === 0
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("主帳戶餘額不足")
                ),
                !1)
              : ((i = new n.Models.TransferMainAllAmountToGamePostModel()),
                (i.GameType = this.gameType),
                (i.SubGameType = this.subGameType),
                this.ControlTransferPanel(!0),
                (r = $(".transferAmount")),
                r
                  .removeClass("placeholder_class")
                  .attr(
                    "placeholder",
                    n.Helpers.ChangeLanguage("轉點中") + "..."
                  )
                  .toggleClass("keyboardmaintain", !1),
                this.footerSvc
                  .TransferMainAllAmountToGame(i)
                  .then(function () {
                    t.PopClose();
                    t.transferAmount = null;
                    $(".keyboard").removeClass("keyIn textMoney");
                    $(".keyboard").css("color", "#999");
                    t.UpdateLoginAreaGameBalance();
                    t.ShowErrorMsgOnInputAmount(!1);
                    n.Helpers.NotifyBox(
                      n.Helpers.ChangeLanguage("轉點成功"),
                      null,
                      null,
                      1e3
                    );
                  })
                  .catch(function (n) {
                    return t.CatchProcess(i.GameType, n);
                  })
                  .finally(function () {
                    t.GetMainAmountAndGameBalance();
                  }),
                !0);
          }),
          (t.prototype.GetWithdrawalPromptText = function () {
            return this.appContext.UserProfile == null
              ? ""
              : this.appContext.UserProfile.LoginMenuSwitch.WithdrawalTipString;
          }),
          (t.prototype.GetDepositPromptText = function () {
            return this.appContext.UserProfile == null
              ? ""
              : this.appContext.UserProfile.LoginMenuSwitch.DepositTipString;
          }),
          (t.prototype.RedirectPage = function (t, i) {
            i === void 0 && (i = "");
            this.messageBus.Emit("showMaskAll", !0);
            n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t, i);
          }),
          (t.prototype.ShowKeyboardTransferAndCleanAccount = function () {
            var t = this;
            this.$timeout(function () {
              t.transferAmount = null;
              t.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                {
                  elemId: "transferAmount",
                  text: n.Helpers.ChangeLanguage("請輸入金額"),
                }
              );
            });
          }),
          (t.prototype.CanelToggle = function () {
            var n = this.appContext.UserProfile.AdditionalStatus;
            return (
              (n == RegisteredAdditionallyStatusEnum.NeedWriteCellphone ||
                n == RegisteredAdditionallyStatusEnum.NeedWriteBankCard ||
                n == RegisteredAdditionallyStatusEnum.NeedWriteIdentify ||
                n ==
                  RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword) &&
              !this.DataReview()
            );
          }),
          (t.prototype.DataReview = function () {
            return this.appContext.UserProfile == null ||
              this.appContext.UserProfile.MemberStatus == null
              ? !0
              : this.appContext.UserProfile.MemberStatus ==
                  n.Models.MemberStatusEnum.Audit;
          }),
          (t.prototype.CanDeposit = function () {
            return this.CheckTopMenuPermission("CanDeposit")
              ? this.DataReview()
                ? n.Helpers.ChangeLanguage(
                    "您已完善資料，待通過資料審核，即開放存款，請耐心等候"
                  )
                : n.Helpers.ChangeLanguage(
                    "很抱歉，目前存款功能暫不開放，請聯繫客服中心！"
                  )
              : this.appContext.UserProfile.LoginMenuSwitch.DepositTipString;
          }),
          (t.prototype.CanWithdrawal = function () {
            return !this.CheckTopMenuPermission("CanWithdrawal") &&
              this.appContext.UserProfile != null
              ? this.appContext.UserProfile.LoginMenuSwitch.WithdrawalTipString
              : n.Helpers.ChangeLanguage(
                  "很抱歉，目前提款功能暫不開放，請聯繫客服中心！"
                );
          }),
          (t.prototype.GetShowDrawPageCategory = function () {
            var i = this,
              t;
            this.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin &&
              ((t = window.location.pathname.split("/").pop().toLowerCase()),
              (t == "home" || t == "index") &&
                this.footerSvc
                  .GetShowDrawPageCategory()
                  .then(function (t) {
                    var r = [];
                    t.IsGiftArea && r.push("GiftArea");
                    (t.IsFirstDepositBonus || t.IsSecondDepositBonus) &&
                      r.push("depositBonus");
                    r.length > 0 && (i.unreadLatestOffers = !0);
                    i.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .GetShowDrawPageCategory,
                      r
                    );
                  })
                  .catch(function () {})
                  .finally(function () {}));
          }),
          (t.prototype.DepositWithdrawalSelectChange = function () {
            this.SelectChange(this.footerMenuSelections.DepositWithdrawal);
            this.CheckIsWindowsOpen() == !1 && this.PopClose();
            this.ChangeZindexCss();
            this.RefreshDWZoneIfArtDemoRemoveClassOn();
            this.isDWopen ? this.CloseDWZone() : this.OpenDWZone();
          }),
          (t.prototype.RefreshDWZoneIfArtDemoRemoveClassOn = function () {
            this.isDWopen = $(".footer_DW_open").hasClass("on");
          }),
          (t.prototype.OpenDWZone = function () {
            this.isDWopen != !0 &&
              ($(".footer_DW_open").removeClass("off").addClass("on"),
              $(".footer").css("z-index", "9999"),
              $("body")
                .css("-webkit-overflow-scrolling", "initial")
                .css("overflow", "hidden"),
              (this.isDWopen = !0));
          }),
          (t.prototype.CloseDWZone = function () {
            this.isDWopen != !1 &&
              ($(".footer_DW_open").removeClass("on").addClass("off"),
              $(".footer").css("z-index", "3"),
              $("body")
                .css("-webkit-overflow-scrolling", "touch")
                .css("overflow", "auto"),
              (this.isDWopen = !1));
          }),
          (t.prototype.SelectChange = function (n) {
            if (n.active) (n.active = !1), this.InitializeFooter();
            else {
              for (var t in this.footerMenuSelections)
                this.footerMenuSelections[t].active = !1;
              n.active = !0;
            }
          }),
          (t.prototype.IsDepositOpen = function () {
            return (
              n.Verifier.IsNeedRegisterAdditionally(
                this.appContext.UserProfile
              ) ||
              (this.CheckTopMenuPermission("CanDeposit") &&
                this.CheckTopMenuPermission("CanDepositP"))
            );
          }),
          (t.prototype.IsWithdrawalOpen = function () {
            return (
              n.Verifier.IsNeedRegisterAdditionally(
                this.appContext.UserProfile
              ) ||
              (this.CheckTopMenuPermission("CanWithdrawal") &&
                this.CheckTopMenuPermission("CanWithdrawalP"))
            );
          }),
          (t.prototype.GetDepositAndWithDraw = function () {
            return !this.CheckTopMenuPermission("CanDeposit") &&
              !this.CheckTopMenuPermission("CanWithdrawal")
              ? n.Helpers.ChangeLanguage("很抱歉，目前存提款功能維護中")
              : this.CheckTopMenuPermission("CanDeposit") &&
                !this.CheckTopMenuPermission("CanDepositP") &&
                this.CheckTopMenuPermission("CanWithdrawal") &&
                !this.CheckTopMenuPermission("CanWithdrawalP")
              ? n.Helpers.ChangeLanguage(
                  "很抱歉，目前存提款功能暫不開放，請聯繫客服中心！"
                )
              : (!this.CheckTopMenuPermission("CanDeposit") ||
                  !this.CheckTopMenuPermission("CanDepositP")) &&
                !this.CheckTopMenuPermission("CanWithdrawalP")
              ? n.Helpers.ChangeLanguage("很抱歉，目前存提款功能維護中")
              : (!this.CheckTopMenuPermission("CanWithdrawal") ||
                  !this.CheckTopMenuPermission("CanWithdrawalP")) &&
                !this.CheckTopMenuPermission("CanDepositP")
              ? n.Helpers.ChangeLanguage("很抱歉，目前存提款功能維護中")
              : "";
          }),
          (t.prototype.RefreshFooterActivity = function () {
            for (var n in this.footerMenuSelections)
              this.footerMenuSelections[n].active = !1;
            this.InitializeFooter();
          }),
          (t.prototype.ChangeZindexCss = function () {
            this.CheckIsWindowsOpen() == !0 &&
              ($(".bg_header").attr("style", "z-index:9999"),
              $(".footer").attr("style", "z-index:9999"));
          }),
          (t.prototype.CheckIsWindowsOpen = function () {
            return $(".mask_noID").length > 0 && $(".mask_noID").is(":visible")
              ? !0
              : !1;
          }),
          (t.prototype.IsDepositWithdrawalCenterSlideOpen = function () {
            return (
              this.IsDepositOpen() ||
              this.IsWithdrawalOpen() ||
              this.CheckTopMenuPermission("CanPlatfromTransfer")
            );
          }),
          (t.prototype.ShowRedDot = function () {
            return (
              n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.ShareAPPRedDot
              ) == "" ||
              n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.TransitionSettingRedDot
              ) == ""
            );
          }),
          (t.prototype.CatchProcess = function (t, i) {
            var r = this,
              u;
            if (
              i.Error.Code === 4008 ||
              i.Error.Code === 4001 ||
              i.Error.Code === 1004
            ) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                i.Error.Message,
                null,
                function () {
                  r.PopClose();
                }
              );
              this.ShowErrorMsgOnInputAmount(!0);
              this.ControlTransferPanel(!0);
              return;
            }
            if (
              i.Error.Code ===
              ApiStatusCodeEnum.PlatformMutualTransferReachedNumberLimit
            ) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                n.Helpers.ChangeLanguage("今日互轉次數已達到限定值")
              );
              this.transferAmount = null;
              this.ControlTransferPanel(!1);
              return;
            }
            if (
              i.Error.Code ===
              ApiStatusCodeEnum.PlatformMutualTransferReachedMoneyLimit
            ) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                n.Helpers.ChangeLanguage("今日互轉額度已達限定值")
              );
              this.transferAmount = null;
              this.ControlTransferPanel(!1);
              return;
            }
            if (i.Error.Code === 1002) {
              n.Helpers.ChangeLanguage(i.Error.Message) ===
              n.Helpers.ChangeLanguage("您存入的額度高於上限")
                ? (n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    "您存入的額度高於上限"
                  ),
                  (this.transferAmount = null),
                  this.ControlTransferPanel(!1))
                : n.Helpers.ChangeLanguage(i.Error.Message) ===
                  n.Helpers.ChangeLanguage("您的可用額度不足")
                ? (n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    "轉點金額不能大於帳戶餘額",
                    null,
                    function () {
                      r.ShowKeyboardTransferAndCleanAccount();
                    }
                  ),
                  this.ControlTransferPanel(!1))
                : n.Helpers.ChangeLanguage(i.Error.Message) ===
                  n.Helpers.ChangeLanguage("代理商金額不足")
                ? (n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.StringFormat(
                      n.Helpers.ChangeLanguage(
                        "【{0}】與【{1}】互轉失敗，請聯繫客服！"
                      ),
                      n.Helpers.ChangeLanguage("主帳戶"),
                      this.ChangePlatformName(t)
                    ),
                    null,
                    function () {
                      r.ShowKeyboardTransferAndCleanAccount();
                    }
                  ),
                  this.ControlTransferPanel(!1))
                : n.Helpers.ChangeLanguage(i.Error.Message) ===
                  n.Helpers.ChangeLanguage("您的可轉金額為0")
                ? (n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    "您的可轉金額為0",
                    null,
                    function () {
                      r.ShowKeyboardTransferAndCleanAccount();
                    }
                  ),
                  this.ControlTransferPanel(!1))
                : (this.ShowGameMaintain(),
                  this.ShowErrorMsgOnInputAmount(!0, i.Error.Message),
                  this.ControlTransferPanel(!0));
              return;
            }
            if (i.Error.Code === ApiStatusCodeEnum.TransferPointCommonError) {
              u = n.Helpers.ChangeLanguage("轉點失敗");
              n.Helpers.ChangeLanguage(i.Error.Message) ===
              n.Helpers.ChangeLanguage("代理商金額不足")
                ? (n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.StringFormat(
                      n.Helpers.ChangeLanguage(
                        "【{0}】與【{1}】互轉失敗，請聯繫客服！"
                      ),
                      n.Helpers.ChangeLanguage("主帳戶"),
                      this.ChangePlatformName(t)
                    ),
                    null,
                    function () {
                      r.ShowKeyboardTransferAndCleanAccount();
                    }
                  ),
                  this.ControlTransferPanel(!1))
                : (n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, u),
                  (this.transferAmount = null),
                  this.ShowErrorMsgOnInputAmount(!1),
                  this.ControlTransferPanel(!1));
              return;
            }
            i.Error.Code === 4018
              ? (this.appContextSvc.StopCheckInterval(),
                $("#GameLobbyFastTransfer").hide(),
                $("#GameLobbyFastTransferLogOut").show())
              : i.Error.Code === 5999
              ? ($("#GameLobbyFastTransfer").hide(),
                $("#GameLobbyFastTransferLogOut").show())
              : (this.ControlTransferPanel(!1), n.Helpers.AlertSwitch(i));
          }),
          (t.prototype.CloseTransferBoxBackIndex = function () {
            // window.location.reload();
          }),
          (t.prototype.ShowLogIn = function () {
            jQuery("#popup_login").show();
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
              { elemId: "txtAccountPWD" }
            );
          }),
          (t.$name = "FooterCtrl"),
          (t.$inject = [
            "appConfig",
            "appContext",
            "$q",
            "$timeout",
            "messageBus",
            "FooterSvc",
            "AppContextSvc",
          ]),
          t
        );
      })();
      t.FooterCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.FooterCtrl.$name,
  OBSMobileApp.Controllers.FooterCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var y = (function () {
          function o() {
            this.PlatformList = [];
            this.IsBlackList = !0;
            this.IsBet = !1;
            this.IsMaintain = "true";
            this.MasterAccountBalanceModel = new r();
            this.GameAccountBalanceModel = new u();
            this.TranscationPostModel = new f();
            this.TransferDivAllTransferShowModel = new t();
            this.TransferDivShowModel = new t();
            this.CheckGamePostModel = new i();
            this.GetCustomerServiceComplaintListByMemberAccountModel = {
              MemberAccountID: "",
            };
            this.AnchorBalanceModel = new e();
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap.filter(
              function (n) {
                return !n.ErrorCodes.some(function (n) {
                  return n === "-8888888888" || n === "-9999999999";
                });
              }
            );
            this.GameAreaPointsControlCenter = new n.GetPointsControlCenter();
          }
          return o;
        })(),
        i,
        o,
        s,
        h,
        t,
        r,
        c,
        u,
        l,
        f,
        a,
        v,
        e;
      n.GameAreaViewModel = y;
      i = (function () {
        function n() {}
        return n;
      })();
      n.CheckGamePostModel = i;
      o = (function () {
        function n() {}
        return n;
      })();
      n.GameCheckResult = o;
      s = (function () {
        function n() {}
        return n;
      })();
      n.GetPlatformMaintainSettingNowResult = s;
      h = (function () {
        function n() {}
        return n;
      })();
      n.TokenModel = h;
      t = (function () {
        function n() {
          this.CheckTransferShow = 0;
        }
        return n;
      })();
      n.TransferDivShowModel = t;
      r = (function () {
        function n() {
          this.IsAvailable = !1;
          this.IsDone = !1;
        }
        return n;
      })();
      n.MasterAccountBalanceModel = r;
      c = (function () {
        function n() {}
        return n;
      })();
      n.CheckGameAccountPostModel = c;
      u = (function () {
        function n() {
          this.IsAvailable = !1;
          this.IsDone = !1;
        }
        return n;
      })();
      n.GameAccountBalanceModel = u;
      l = (function () {
        function n() {}
        return n;
      })();
      n.CheckAccountOrCreatePostModel = l;
      f = (function () {
        function n() {}
        return n;
      })();
      n.TranscationPostModel = f;
      a = (function () {
        function n() {}
        return n;
      })();
      n.ForwardGamePostModel = a;
      v = (function () {
        function n() {}
        return n;
      })();
      n.PlatformListModel = v;
      e = (function () {
        function n() {
          this.IsAvailable = !1;
        }
        return n;
      })();
      n.AnchorBalanceMobileModel = e;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CheckIsLogin = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/MemberInfo/CheckLogin", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(
                    t.Data !== "" && t.Data !== null && t.Data !== undefined
                  );
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.CheckAccount = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/CheckAccount", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.GetMemberBalanceInfoByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/MemberTransfer/GetMemberBalanceInfoByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGameBalanceInfoByAccountID = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/GetBalance", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferPoint = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/TransferPoint", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.TransferMainAllAmountToGame = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/TransferMainAllAmountToGame",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.ForwardGame = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/ForwardGame", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.GetPlatformMaintainSettingNow = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/GetPlatformMaintainSettingNow",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.SignCheck = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Authorize/SignCheck", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetBlackList = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Common/GetBlackList", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetIsBet = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Common/GetIsBet", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetCustomerServiceComplaintListByMemberAccount =
            function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/MemberInfo/GetCustomerServiceComplaintListByMemberAccount",
                    HttpMethodEnum.Post,
                    n
                  )
                  .then(function (n) {
                    t.resolve(n.Data);
                  })
                  .catch(function (n) {
                    t.reject(n);
                  }),
                t.promise
              );
            }),
          (n.prototype.GetAnchorBalance = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/GetAnchorBalanceByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data.BalanceAmount);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.CheckPlatformTransactionMaintainSettingEnable =
            function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "/api/Game/CheckPlatformTransactionMaintainSettingEnable?GameType=" +
                      n,
                    HttpMethodEnum.Post
                  )
                  .then(function (n) {
                    t.resolve(n.Data);
                  })
                  .catch(function (n) {
                    t.reject(n);
                  }),
                t.promise
              );
            }),
          (n.prototype.SignOut = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Authorize/SignOut", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "GameAreaSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.GameAreaSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.GameAreaSvc.$name,
  OBSMobileApp.Services.GameAreaSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h, c, l) {
          var w = this,
            a,
            v,
            y,
            p;
          this.gameAreaSvc = t;
          this.$window = i;
          this.messageBus = r;
          this.blockUI = u;
          this.qSvc = f;
          this.timeout = e;
          this.appContext = o;
          this.appConfig = s;
          this.$cookies = h;
          this.$interval = c;
          this.appContextSvc = l;
          this.tick = null;
          this.IsFakeMaintenance = !1;
          this.showAVEvent = !0;
          this.model = new n.Models.GameAreaViewModel();
          this.gameListBlock = this.blockUI.instances.get("gameListBlock");
          this.$interval = c;
          this.transferBlock = this.blockUI.instances.get("transferBlock");
          this.amountBlock = this.blockUI.instances.get("amountBlock");
          sessionStorage.removeItem("enterkey");
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin &&
                w.InitializeViewModel();
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
            function (n, t) {
              w.model.GameAreaPointsControlCenter = t;
            }
          );
          a = this;
          $(".transferAmount").click(function () {
            $(".transferAmount").is(":focus") || $(".transferAmount").focus();
            a.OnElementHeightChange(function () {
              $("#FastTransfer").scrollTop(
                $("#FastTransfer").prop("scrollHeight")
              );
            });
          });
          v = !1;
          this.$window.addEventListener("pageshow", function (n) {
            n.persisted
              ? a.timeout(function () {
                  a.gameListBlock.stop();
                })
              : v &&
                a.timeout(function () {
                  a.gameListBlock.stop();
                });
          });
          this.$window.addEventListener("pagehide", function () {
            v = !0;
          });
          y = this.$cookies.get("AVEventID");
          y && (this.showAVEvent = $.parseJSON(y.toLowerCase()));
          location.pathname.toLowerCase().indexOf("/game/electgame") !== -1 ||
          location.pathname.toLowerCase().indexOf("/game/sportgame") !== -1
            ? ((p = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.GameGroupID
              )),
              p &&
                ((this.activeMenu = p),
                this.appContext.LoginStatus !==
                  n.Models.LoginStatusEnum.Loggedin &&
                  n.Helpers.DeleteLocalStorageItem(
                    n.ConstDefinition.LocalStorageKey.GameGroupID
                  )))
            : n.Helpers.DeleteLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.GameGroupID
              );
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.platformTransferEnabled =
              new n.Models.PlatformTransferEnabled();
            this.appContext.UserProfile.TestType === 2 &&
              (this.IsFakeMaintenance = !0);
            this.$fasttransferMaintainBox = jQuery("#fastTransferMaintain");
          }),
          (t.prototype.OnElementHeightChange = function (n) {
            var r = $("#FastTransfer").prop("scrollHeight"),
              i,
              t;
            (function u() {
              i = $("#FastTransfer").scrollTop();
              r !== i && n();
              t && clearTimeout(t);
              $("#FastTransfer").is(":visible") && (t = setTimeout(u, 200));
            })();
          }),
          (t.prototype.SpecialErrorBy3D = function (t, i, r) {
            var e, u, f, o;
            return (i === void 0 && (i = !0), r === void 0 && (r = !1), !t)
              ? !1
              : ((e = _.find(this.model.DDDAlertErrors, function (n) {
                  return n.ErrorCodes.some(function (n) {
                    return n === t;
                  });
                })),
                e)
              ? (n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, e.Message),
                this.ControlTransferPanel(!1),
                this.ShowErrorMsgOnInputAmount(!1),
                !0)
              : ((u = ""),
                (f = ""),
                t === "-8888888888" &&
                  (this.ControlAccountPanel(GameStatusEnum.isBusy),
                  (u = n.Helpers.ChangeLanguage("繁忙中")),
                  (f = n.Helpers.ChangeLanguage("系統繁忙請稍候"))),
                t === "-9999999999" &&
                  ((u = f = n.Helpers.ChangeLanguage("載入中")),
                  r &&
                    (this.ControlAccountPanel(GameStatusEnum.isBusy),
                    (u = n.Helpers.ChangeLanguage("繁忙中")),
                    (f = n.Helpers.ChangeLanguage("系統繁忙請稍候")))),
                !u && !f)
              ? !1
              : ((o = $("[block-ui=transferBlock], [block-ui=amountBlock]")),
                o
                  .find("div.mask_Loading_custom")
                  .removeClass("mask_Loading_custom"),
                o.find("div[block-ui-container]").css("opacity", 0),
                this.amountBlock.start(),
                this.transferBlock.start(),
                this.ControlTransferPanel(!0),
                this.ShowErrorMsgOnInputAmount(!0, null, u),
                i && n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, f),
                !0);
          }),
          (t.prototype.HideNumPad = function () {
            var n = $(".FastTransferAmount").find(".numInputArea");
            n.css("display", "none");
          }),
          (t.prototype.InitializeQuickTransfer = function (n, t, i) {
            return (
              t === void 0 && (t = ""),
              i === void 0 && (i = ""),
              this.amountBlock.stop(),
              this.transferBlock.stop(),
              this.ControlTransferPanel(!0),
              (this.gameType = n),
              (this.subGameType = t),
              (this.gameRedirectType = i),
              this.ShowErrorMsgOnInputAmount(!1),
              this.ControlAccountPanel(GameStatusEnum.isLoading),
              this.GetMasterAccountBalance(),
              (this.gameType === "BB_LiveGame" ||
                this.gameType === "BB_Ball" ||
                this.subGameType === "TS_Sport" ||
                this.subGameType === "NBBSport") &&
                this.GetAnchorBalance(),
              (this.tick = this.$interval(
                this.WaitForGetAllbalance.bind(this),
                100,
                0,
                !0,
                null,
                "interval"
              )),
              !0
            );
          }),
          (t.prototype.fancyclose = function () {
            this.model.TranscationPostModel.TransferAmount = null;
            $(".keyboard").removeClass("keyIn textMoney");
            $(".keyboard").css("color", "#999");
            $(".mask,.mask_join,.mask_all").hide();
            $(".container_main").removeAttr("style");
            /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) &&
              this.$window.scrollTo(0, 0);
          }),
          (t.prototype.CloseFancyBoxBackIndex = function () {
            // window.location.reload();
          }),
          (t.prototype.CustomerServiceComplaintListByMemberAccount =
            function () {
              var t = this;
              this.gameAreaSvc
                .SignCheck()
                .then(function (i) {
                  if (i == !0) {
                    var r =
                      t.model
                        .GetCustomerServiceComplaintListByMemberAccountModel;
                    r.MemberAccountID = t.appContext.UserProfile.AccountID;
                    t.gameAreaSvc
                      .GetCustomerServiceComplaintListByMemberAccount(r)
                      .then(function (i) {
                        i == !0
                          ? (t.$window.location.href =
                              "CustomerService/ComplianBox")
                          : n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              "5分鐘內限申請一次投訴箱，如急需諮詢，請聯繫【在線客服】"
                            );
                      })
                      .catch(function (t) {
                        n.Helpers.AlertSwitch(t);
                      });
                  } else
                    t.$window.location.href = "CustomerService/ComplianBox";
                })
                .catch(function (t) {
                  n.Helpers.AlertSwitch(t);
                });
            }),
          (t.prototype.RegisterValidation = function () {
            jQuery.validator.addMethod("ckValidatorNum", function (n) {
              return /(^[1-9]+)\d*$/.test(n);
            });
          }),
          (t.prototype.ConfirmMemberGameBlackList = function (n, t, i, r) {
            var f, u, e;
            return (i === void 0 && (i = ""),
            r === void 0 && (r = ""),
            this.appContext.UserProfile.MemberPlatformBlackList == undefined)
              ? !0
              : this.appContext.UserProfile.MemberPlatformBlackList.length === 0
              ? !1
              : ((f = _.filter(
                  this.appContext.UserProfile.MemberPlatformBlackList,
                  function (t) {
                    return t.ServiceID === n;
                  }
                )),
                f.length === 0)
              ? !1
              : (r === "JZNBBSport" && (n = "JZNBBSport"),
                (u = $(".GameList_R.swiper-slide-active").find(
                  "#" + n + "_personal_maintain"
                )),
                f[0].BlackStatus === "0")
              ? ((e = $(window).scrollTop()),
                $(".container_main").css({
                  position: "fixed",
                  top: "-" + e + "px",
                }),
                u.addClass("selfcontrol"),
                !0)
              : (this.timeout(function () {
                  $(".gameMainTain_in .liveGameNG_in").hide();
                  u.show();
                  setTimeout(function () {
                    u.hide();
                  }, 3e3);
                  $(".liveGame_list").mouseout(function () {
                    u.hide();
                  });
                  $(".liveGame_listHalf").mouseout(function () {
                    u.hide();
                  });
                }),
                !1);
          }),
          (t.prototype.GetMasterAccountBalance = function () {
            var t = this;
            return (
              (this.model.MasterAccountBalanceModel.BalanceAmount =
                n.Helpers.ChangeLanguage("載入中")),
              this.ControlTransferPanel(!0),
              (this.model.MasterAccountBalanceModel.IsDone = !1),
              this.gameAreaSvc
                .GetMemberBalanceInfoByAccountID()
                .then(function (i) {
                  t.model.MasterAccountBalanceModel.IsAvailable = !0;
                  t.model.MasterAccountBalanceModel.BalanceAmount =
                    n.Formatter.NumberFormat(
                      Math.floor(Number(i.Data.BalanceAmount))
                    );
                  t.tempMainBalance = Math.floor(Number(i.Data.BalanceAmount));
                  t.model.GameAreaPointsControlCenter.AccountBalance =
                    Math.floor(Number(i.Data.BalanceAmount));
                  t.ControlTransferPanel();
                  t.CheckAccountAndCheckGameAmount();
                })
                .catch(function (n) {
                  n.Error.Code === 4001
                    ? ((t.model.MasterAccountBalanceModel.IsAvailable = !1),
                      t.ControlTransferPanel(!0),
                      t.ControlAccountPanel(GameStatusEnum.isMaintain))
                    : n.Error.Code === 4010 &&
                      (t.fancyclose(), t.$fasttransferMaintainBox.show());
                  t.ShowErrorMsgOnInputAmount(!0, n.Error.Message);
                })
                .finally(function () {
                  t.model.MasterAccountBalanceModel.IsDone = !0;
                }),
              !0
            );
          }),
          (t.prototype.ChangePlatformName = function (n) {
            return $("#Pltform" + n).val();
          }),
          (t.prototype.GetGameAccountBalance = function () {
            var t = this,
              i;
            return (
              (this.model.GameAccountBalanceModel.GameBalanceAmount =
                n.Helpers.ChangeLanguage("載入中")),
              (this.model.GameAccountBalanceModel.IsAvailable = !1),
              (i = new n.Models.CheckGameAccountPostModel()),
              (i.GameType = this.gameType),
              (this.model.GameAccountBalanceModel.IsDone = !1),
              this.gameAreaSvc
                .GetGameBalanceInfoByAccountID(i)
                .then(function (i) {
                  t.model.GameAccountBalanceModel.IsAvailable = !0;
                  t.model.GameAccountBalanceModel.GameBalanceAmount =
                    n.Formatter.NumberFormat(Math.floor(Number(i)));
                  t.ControlTransferPanel();
                })
                .catch(function (n) {
                  (n.Error.Code === 4001 &&
                    ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                    t.ControlTransferPanel(!0),
                    t.ControlAccountPanel(GameStatusEnum.isMaintain)),
                  t.gameType === "DDD" &&
                    t.SpecialErrorBy3D(n.Error.Message, !1)) ||
                    t.ShowErrorMsgOnInputAmount(!0, n.Error.Message);
                })
                .finally(function () {
                  t.model.GameAccountBalanceModel.IsDone = !0;
                }),
              !0
            );
          }),
          (t.prototype.CheckAccountAndCheckGameAmount = function () {
            var t = this,
              i = new n.Models.CheckAccountOrCreatePostModel();
            return (
              (this.model.GameAccountBalanceModel.GameBalanceAmount =
                n.Helpers.ChangeLanguage("載入中")),
              (this.model.GameAccountBalanceModel.IsAvailable = !1),
              (i.GameType = this.gameType),
              (i.SubGameType = this.subGameType),
              this.ControlTransferPanel(!0),
              (this.model.GameAccountBalanceModel.IsDone = !1),
              this.gameAreaSvc
                .CheckAccount(i)
                .then(function () {
                  t.gameAreaSvc
                    .GetGameBalanceInfoByAccountID(i)
                    .then(function (i) {
                      t.model.GameAccountBalanceModel.IsAvailable = !0;
                      t.model.GameAccountBalanceModel.GameBalanceAmount =
                        n.Formatter.NumberFormat(Math.floor(Number(i)));
                      t.ControlTransferPanel();
                      var r = function () {
                        t.ShowErrorMsgOnInputAmount(
                          !0,
                          n.Helpers.ChangeLanguage(
                            "很抱歉，目前轉帳功能維護中"
                          ),
                          n.Helpers.ChangeLanguage("很抱歉，目前轉帳功能維護中")
                        );
                        t.ControlTransferPanel(!0, !0);
                      };
                      if (t.appConfig.CompetenceModel.IsEnable === !1) {
                        r();
                        return;
                      }
                      t.platformTransferEnabled.Reset();
                      t.gameAreaSvc
                        .CheckPlatformTransactionMaintainSettingEnable(
                          t.gameType
                        )
                        .then(function () {
                          t.platformTransferEnabled.IsAvailable = !0;
                        })
                        .catch(function () {
                          r();
                        })
                        .finally(function () {
                          t.platformTransferEnabled.IsApiDone = !0;
                        });
                    })
                    .catch(function (n) {
                      if (
                        ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                        t.ControlTransferPanel(),
                        t.gameType !== "DDD" ||
                          !t.SpecialErrorBy3D(n.Error.Message, !1))
                      ) {
                        if (t.gameType === "XG" && n.Error.Code === 5999) {
                          t.ControlTransferPanel(!0);
                          t.ControlAccountPanel(GameStatusEnum.isMaintain);
                          t.ShowErrorMsgOnInputAmount(!0, n.Error.Message);
                          return;
                        }
                        t.ShowErrorMsgOnInputAmount(!0, "", n.Error.Message);
                      }
                    })
                    .finally(function () {
                      t.model.GameAccountBalanceModel.IsDone = !0;
                    });
                })
                .catch(function (i) {
                  i.Error.Code === 4008
                    ? (t.ShowErrorMsgOnInputAmount(
                        !0,
                        i.Error.Message,
                        i.Error.Message
                      ),
                      t.ControlTransferPanel(!0))
                    : i.Error.Code === 4001
                    ? (t.ControlAccountPanel(GameStatusEnum.isMaintain),
                      (t.model.GameAccountBalanceModel.IsAvailable = !0),
                      t.ControlTransferPanel(!0),
                      t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                    : i.Error.Code === 1002
                    ? n.Helpers.ChangeLanguage(i.Error.Message) ===
                      n.Helpers.ChangeLanguage("您的可用額度不足")
                      ? (n.Helpers.AlertSwitch(i), t.ControlTransferPanel(!1))
                      : (t.ControlAccountPanel(GameStatusEnum.isMaintain),
                        t.ShowErrorMsgOnInputAmount(!0, i.Error.Message),
                        t.ControlTransferPanel(!0))
                    : i.Error.Code === 5999
                    ? (t.ControlTransferPanel(!0),
                      t.ControlAccountPanel(GameStatusEnum.isMaintain),
                      t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                    : i.Error.Code === 4015
                    ? (t.ShowErrorMsgOnInputAmount(
                        !1,
                        i.Error.Message,
                        i.Error.Message,
                        !0
                      ),
                      t.ControlTransferPanel(!0))
                    : (n.Helpers.AlertSwitch(i), t.ControlTransferPanel(!1));
                }),
              !0
            );
          }),
          (t.prototype.TransferFromAccountToGame = function () {
            var t = this,
              i = new n.Models.TranscationPostModel(),
              r,
              u;
            if (
              ((i.TransferAmount =
                this.model.TranscationPostModel.TransferAmount),
              this.model.TranscationPostModel.TransferAmount >
                n.Formatter.GetNumberData(
                  this.model.MasterAccountBalanceModel.BalanceAmount
                ))
            )
              (this.model.TranscationPostModel.TransferAmount =
                n.Formatter.GetNumberData(
                  this.model.MasterAccountBalanceModel.BalanceAmount
                )),
                (i.TransferAmount =
                  this.model.TranscationPostModel.TransferAmount);
            else if (
              this.model.TranscationPostModel.TransferAmount !== 0 &&
              this.model.TranscationPostModel.TransferAmount
            ) {
              if (
                this.gameType === "OBLive" &&
                Number(this.model.TranscationPostModel.TransferAmount) < 5 &&
                (n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                  "vi-vn" ||
                  n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                    "th-th")
              )
                return (
                  (r =
                    n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                    "vi-vn"
                      ? ","
                      : ""),
                  (u =
                    "<span>" +
                    n.Helpers.ChangeLanguage("轉帳金額低於限制") +
                    r +
                    "</span><br><span>" +
                    n.Helpers.ChangeLanguage("請轉入5點以上") +
                    "!</span><br/>"),
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    u,
                    null,
                    function () {
                      t.ShowKeyboardTransferAndCleanAccount();
                    }
                  ),
                  !1
                );
            } else
              return (
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("請輸入轉點金額")
                ),
                !1
              );
            return (
              (i.GameType = this.gameType),
              (i.SubGameType = this.subGameType),
              this.ControlTransferPanel(!0),
              this.gameAreaSvc
                .TransferPoint(i)
                .then(function () {
                  t.model.GameAccountBalanceModel.GameBalanceAmount =
                    n.Formatter.NumberFormat(
                      n.Formatter.GetNumberData(
                        t.model.GameAccountBalanceModel.GameBalanceAmount
                      ) + t.model.TranscationPostModel.TransferAmount
                    );
                  t.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnSetOneGameReLoadPointsControlCenter,
                    t.gameType
                  );
                  t.fancyclose();
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage("轉點成功"),
                    null,
                    function (n) {
                      return t.ComfirmEnterGame(n);
                    },
                    n.Helpers.ChangeLanguage("進入遊戲"),
                    n.Helpers.ChangeLanguage("關閉視窗")
                  );
                  t.model.TranscationPostModel.TransferAmount = null;
                })
                .catch(function (n) {
                  return t.CatchProcess(i.GameType, n);
                }),
              !0
            );
          }),
          (t.prototype.TransferMainAllAmountToGame = function () {
            var t = this,
              i = new n.Models.TransferMainAllAmountToGamePostModel(),
              r,
              u;
            return n.Formatter.GetNumberData(
              this.model.MasterAccountBalanceModel.BalanceAmount
            ) === 0
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("主帳戶餘額不足")
                ),
                !1)
              : this.gameType === "OBLive" &&
                n.Formatter.GetNumberData(
                  this.model.MasterAccountBalanceModel.BalanceAmount
                ) < 5 &&
                (n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                  "vi-vn" ||
                  n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                    "th-th")
              ? ((r =
                  n.SiteCultureMethod.Provider().LanguageCode.toLowerCase() ==
                  "vi-vn"
                    ? ","
                    : ""),
                (u =
                  "<span>" +
                  n.Helpers.ChangeLanguage("轉帳金額低於限制") +
                  r +
                  "</span><br><span>" +
                  n.Helpers.ChangeLanguage("請轉入5點以上") +
                  "!</span><br/>"),
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  u,
                  null,
                  function () {
                    t.ShowKeyboardTransferAndCleanAccount();
                  }
                ),
                !1)
              : ((i.GameType = this.gameType),
                (i.SubGameType = this.subGameType),
                this.ControlTransferPanel(!0),
                this.ShowErrorMsgOnInputAmount(
                  !0,
                  "",
                  n.Helpers.ChangeLanguage("轉點中") + "...",
                  !0
                ),
                this.gameAreaSvc
                  .TransferMainAllAmountToGame(i)
                  .then(function () {
                    t.model.GameAccountBalanceModel.GameBalanceAmount =
                      n.Formatter.NumberFormat(
                        n.Formatter.GetNumberData(
                          t.model.GameAccountBalanceModel.GameBalanceAmount
                        ) +
                          n.Formatter.GetNumberData(
                            t.model.MasterAccountBalanceModel.BalanceAmount
                          )
                      );
                    t.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnSetOneGameReLoadPointsControlCenter,
                      t.gameType
                    );
                    t.fancyclose();
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage("轉點成功"),
                      null,
                      function (n) {
                        return t.ComfirmEnterGame(n);
                      },
                      n.Helpers.ChangeLanguage("進入遊戲"),
                      n.Helpers.ChangeLanguage("關閉視窗")
                    );
                    t.model.TranscationPostModel.TransferAmount = null;
                  })
                  .catch(function (n) {
                    return t.CatchProcess(i.GameType, n);
                  }),
                !0);
          }),
          (t.prototype.EnterGame = function () {
            var n = this,
              t =
                /Safari/.test(navigator.userAgent) &&
                !/CriOS|Chrome|FxiOS|EdgiOS/.test(navigator.userAgent);
            if (this.model.TranscationPostModel.TransferAmount > 0) {
              this.TransferFromAccountToGame();
              return;
            }
            if (
              (this.gameListBlock.start(),
              t &&
                ["SM", "TS", "NBB"].some(function (t) {
                  return t === n.gameType;
                }))
            ) {
              this.OpenGameAlone();
              return;
            }
            if (
              [
                "CQNineFishing",
                "DSFishing",
                "KAFishing",
                "KYFishing",
                "LCFishing",
              ].some(function (t) {
                return t === n.subGameType;
              })
            ) {
              this.OpenGame();
              return;
            }
            if (
              [
                "BB_Ball",
                "BB_LiveGame",
                "DDD",
                "BNG",
                "CQNine",
                "DS",
                "DT",
                "FTG",
                "FC",
                "Joker",
                "KA",
                "KS",
                "KY",
                "LC",
                "MG",
                "PG",
                "PLS",
                "RKFive",
                "VR",
              ].some(function (t) {
                return t === n.gameType;
              })
            ) {
              this.RedirectToGame();
              return;
            }
            this.OpenGame();
          }),
          (t.prototype.ComfirmEnterGame = function (n) {
            n && this.EnterGame();
          }),
          (t.prototype.OpenGameAlone = function () {
            var r = new Date(),
              t = "",
              i,
              n;
            this.gameType == "NBB" &&
              this.gameRedirectType == "1" &&
              (t = "&tag=99");
            i =
              "//" +
              location.host +
              "/CheckGame?gameType=" +
              this.gameType +
              "&subGameType=" +
              this.subGameType +
              "&isMobile=true" +
              t +
              "&dt=" +
              this.appContext.UserProfile.AccountID +
              r.getTime();
            this.fancyclose();
            this.gameListBlock.stop();
            n = document.createElement("a");
            n.setAttribute("rel", "noopener noreferrer");
            n.setAttribute("href", i);
            n.setAttribute("target", "_blank");
            n.click();
          }),
          (t.prototype.OpenGame = function () {
            var i = new Date(),
              n = "",
              t;
            switch (this.gameType) {
              case "MG":
                switch (this.gameRedirectType) {
                  case "3":
                    n = "&tag=2";
                    break;
                  case "2":
                    n = "&tag=1";
                }
            }
            this.gameType == "NBB" &&
              this.gameRedirectType == "1" &&
              (n = "&tag=99");
            t =
              "//" +
              location.host +
              "/CheckGame?gameType=" +
              this.gameType +
              "&subGameType=" +
              this.subGameType +
              "&isMobile=true" +
              n +
              "&dt=" +
              this.appContext.UserProfile.AccountID +
              i.getTime();
            this.fancyclose();
            this.gameListBlock.stop();
            this.$window.open(t, this.subGameType || "game", "noopener=false");
          }),
          (t.prototype.RedirectToGame = function () {
            var i = new Date(),
              n = "",
              t;
            switch (this.gameType) {
              case "MG":
                switch (this.gameRedirectType) {
                  case "3":
                    n = "&tag=2";
                    break;
                  case "2":
                    n = "&tag=1";
                }
            }
            this.gameType == "NBB" &&
              this.gameRedirectType == "1" &&
              (n = "&tag=99");
            t =
              "//" +
              location.host +
              "/CheckGame?gameType=" +
              this.gameType +
              "&subGameType=" +
              this.subGameType +
              "&isMobile=true" +
              n +
              "&dt=" +
              this.appContext.UserProfile.AccountID +
              i.getTime();
            this.fancyclose();
            location.href = t;
            this.gameListBlock.stop();
          }),
          (t.prototype.ControlTransferPanel = function (n, t) {
            var i = this;
            this.timeout(function () {
              n ||
              (i.model.MasterAccountBalanceModel.IsAvailable &&
                i.model.MasterAccountBalanceModel.BalanceAmount === "0")
                ? $(".numPlusArea, .numInputArea").addClass("lock")
                : $(".numPlusArea, .numInputArea").removeClass("lock");
              var r = $(".transferAmount, .btn_popupW50L, .btn_popupW100");
              n
                ? ((i.model.TransferDivShowModel.CheckTransferShow = 0),
                  (i.model.TransferDivAllTransferShowModel.CheckTransferShow = 0),
                  r
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#eee !important;color:#a1a1a1 !important;"
                    ),
                  $("#FastTransferAmount")
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#e5e5e5 !important;color:white !important;"
                    )
                    .removeClass("on"),
                  t &&
                    $(".btn_popupW50L, .btn_popupW100").removeAttr(
                      "disabled style"
                    ),
                  $(".btn_transfer")
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#bbb !important;color:white !important;"
                    ))
                : i.model.MasterAccountBalanceModel.IsAvailable &&
                  i.model.GameAccountBalanceModel.IsAvailable
                ? (r.removeAttr("disabled style"),
                  $("#FastTransferAmount").removeAttr("disabled style"),
                  i.model.MasterAccountBalanceModel.BalanceAmount != "0"
                    ? ($(".btn_transfer").removeAttr("disabled style"),
                      $("#FastTransferAmount").focus(),
                      (i.model.TransferDivAllTransferShowModel.CheckTransferShow = 1),
                      (i.model.TransferDivShowModel.CheckTransferShow = 1))
                    : i.model.MasterAccountBalanceModel.BalanceAmount == "0" &&
                      $("#FastTransferAmount")
                        .attr("disabled", "disabled")
                        .css(
                          "cssText",
                          "background-color:#e5e5e5 !important;color:white !important;"
                        ))
                : ((i.model.TransferDivShowModel.CheckTransferShow = 0),
                  (i.model.TransferDivAllTransferShowModel.CheckTransferShow = 0),
                  r
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#eee !important;color:#a1a1a1 !important;"
                    ),
                  $(".btn_transfer")
                    .attr("disabled", "disabled")
                    .css(
                      "cssText",
                      "background-color:#bbb !important;color:white !important;"
                    ),
                  $("#FastTransferAmount").css(
                    "cssText",
                    "background-color:#e5e5e5 !important;color:white !important;"
                  ));
            });
          }),
          (t.prototype.ControlAccountPanel = function (t, i) {
            switch (t) {
              case GameStatusEnum.isLoading:
                this.model.MasterAccountBalanceModel.BalanceAmount = i
                  ? i
                  : n.Helpers.ChangeLanguage("載入中");
                this.model.GameAccountBalanceModel.GameBalanceAmount = i
                  ? i
                  : n.Helpers.ChangeLanguage("載入中");
                break;
              case GameStatusEnum.isMaintain:
                this.model.GameAccountBalanceModel.GameBalanceAmount = i
                  ? i
                  : n.Helpers.ChangeLanguage("維護中");
                break;
              case GameStatusEnum.isBusy:
                this.model.GameAccountBalanceModel.GameBalanceAmount = i
                  ? i
                  : n.Helpers.ChangeLanguage("繁忙中");
            }
          }),
          (t.prototype.ShowErrorMsgOnInputAmount = function (t, i, r, u) {
            r === void 0 && (r = null);
            u === void 0 && (u = !1);
            i = r == null ? n.Helpers.ChangeLanguage("維護中") : r;
            this.appConfig.LanguageCode == "vi-vn"
              ? n.Helpers.StringContainsOneOfKeywords(
                  i,
                  "平台轉帳維護中",
                  "轉帳",
                  "很抱歉，目前轉帳功能維護中"
                ) && (i = n.Helpers.ChangeLanguage("轉帳維護中"))
              : n.Helpers.StringContainsOneOfKeywords(
                  i,
                  "平台轉帳維護中",
                  "轉帳",
                  "轉帳功能維護中",
                  "很抱歉，目前轉帳功能維護中"
                ) && (i = n.Helpers.ChangeLanguage("轉帳維護中"));
            this.model.TranscationPostModel.TransferAmount = null;
            t
              ? (this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                  { elemId: "FastTransferAmount", text: i }
                ),
                $("#FastTransferAmount").addClass("placeholder_class"))
              : (this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                  {
                    elemId: "FastTransferAmount",
                    text: n.Helpers.ChangeLanguage("請輸入金額"),
                  }
                ),
                $("#FastTransferAmount").css("color", "#999"));
          }),
          (t.prototype.GetFloor = function (n) {
            return Math.floor(n);
          }),
          (t.prototype.ShowKeyboardTransferAndCleanAccount = function () {
            var t = this;
            this.timeout(function () {
              t.model.TranscationPostModel.TransferAmount = null;
              t.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                {
                  elemId: "FastTransferAmount",
                  text: n.Helpers.ChangeLanguage("請輸入金額"),
                }
              );
            });
          }),
          (t.prototype.OnShowGames = function (t) {
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.GameGroupID,
              t,
              !0
            );
            this.activeMenu = t;
          }),
          (t.prototype.GetMenuCss = function (n, t) {
            var i,
              r = t % 2 == 0;
            return (
              this.activeMenu
                ? (i = this.IsActiveMenu(n))
                : ((i = r), i && (this.activeMenu = n)),
              { on: i, w50L: r, "w50R t_orange": !r }
            );
          }),
          (t.prototype.IsActiveMenu = function (n) {
            return this.activeMenu ? this.activeMenu === n : !0;
          }),
          (t.prototype.GetAnchorBalance = function () {
            var t = this;
            return (
              this.gameAreaSvc
                .GetAnchorBalance()
                .then(function (i) {
                  t.model.AnchorBalanceModel.IsAvailable = !0;
                  t.model.AnchorBalanceModel.BalanceAmount =
                    n.Formatter.NumberFormat(Math.floor(Number(i)));
                })
                .catch(function () {}),
              !0
            );
          }),
          (t.prototype.WaitForGetAllbalance = function () {
            if (
              this.model.GameAccountBalanceModel.IsDone !== !1 &&
              this.model.MasterAccountBalanceModel.IsDone !== !1 &&
              this.platformTransferEnabled.IsApiDone !== !1 &&
              (this.$interval.cancel(this.tick),
              this.model.GameAccountBalanceModel.IsAvailable &&
                this.model.MasterAccountBalanceModel.IsAvailable &&
                this.platformTransferEnabled.IsAvailable &&
                this.tempMainBalance > 0)
            ) {
              var n = $(".FastTransferAmount").find(".numInputArea");
              n.css("display", "table");
            }
          }),
          (t.prototype.CloseAVEvent = function (n) {
            n.target.className.contains("btn_closeAV") &&
              (this.$cookies.put("AVEventID", "false", { path: "/" }),
              (this.showAVEvent = !1));
          }),
          (t.prototype.AVEventUrl = function (n, t) {
            n.target.className.contains("btn_AV") && window.open(t);
          }),
          (t.prototype.ShowLogIn = function () {
            jQuery("#popup_login").show();
          }),
          (t.prototype.SpiltText = function (n, t) {
            var i = n.split("("),
              r = n.match(/\((.*?)\)/g)[0];
            return t == 0 ? i[t] : r;
          }),
          (t.prototype.CatchProcess = function (t, i) {
            var r = this,
              u;
            if (i === null || i === undefined) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                "請求異常，請稍後再試"
              );
              this.model.TranscationPostModel.TransferAmount = null;
              this.ControlTransferPanel(!1);
              return;
            }
            if (this.gameType === "DDD") {
              if (this.SpecialErrorBy3D(i.Error.Message, !0, !0)) return;
              if (i.Error.Code === ApiStatusCodeEnum.TransferPointCommonError) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  i.Error.Message
                );
                this.ControlAccountPanel(GameStatusEnum.isMaintain);
                this.ShowErrorMsgOnInputAmount(!0);
                this.ControlTransferPanel(!0);
                return;
              }
            }
            if (i.Error.Code === 4008)
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                i.Error.Message,
                null,
                function () {
                  r.fancyclose();
                  // window.location.reload(!0);
                }
              );
            else {
              if (
                i.Error.Code ===
                ApiStatusCodeEnum.PlatformMutualTransferReachedNumberLimit
              ) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("今日互轉次數已達到限定值")
                );
                this.model.TranscationPostModel.TransferAmount = null;
                this.ControlTransferPanel(!1);
                return;
              }
              if (
                i.Error.Code ===
                ApiStatusCodeEnum.PlatformMutualTransferReachedMoneyLimit
              ) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("今日互轉額度已達限定值")
                );
                this.model.TranscationPostModel.TransferAmount = null;
                this.ControlTransferPanel(!1);
                return;
              }
              if (i.Error.Code === 1002) {
                n.Helpers.ChangeLanguage(i.Error.Message) ===
                n.Helpers.ChangeLanguage("您存入的額度高於上限")
                  ? (n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "您存入的額度高於上限"
                    ),
                    (this.model.TranscationPostModel.TransferAmount = null),
                    this.ControlTransferPanel(!1))
                  : n.Helpers.ChangeLanguage(i.Error.Message) ===
                    n.Helpers.ChangeLanguage("您的可用額度不足")
                  ? (n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "您的可用額度不足",
                      null,
                      function () {
                        r.ShowKeyboardTransferAndCleanAccount();
                      }
                    ),
                    this.ControlTransferPanel(!1))
                  : n.Helpers.ChangeLanguage(i.Error.Message) ===
                    n.Helpers.ChangeLanguage("代理商金額不足")
                  ? (n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.StringFormat(
                        n.Helpers.ChangeLanguage(
                          "【{0}】與【{1}】互轉失敗，請聯繫客服！"
                        ),
                        n.Helpers.ChangeLanguage("主帳戶"),
                        this.ChangePlatformName(t)
                      ),
                      null,
                      function () {
                        r.ShowKeyboardTransferAndCleanAccount();
                      }
                    ),
                    this.ControlTransferPanel(!1))
                  : (this.ControlAccountPanel(GameStatusEnum.isMaintain),
                    this.ShowErrorMsgOnInputAmount(!0, i.Error.Message),
                    this.ControlTransferPanel(!0));
                return;
              }
              if (i.Error.Code === 4015)
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  i.Error.Message,
                  null,
                  function () {
                    r.fancyclose();
                    // window.location.reload(!0);
                  }
                );
              else if (i.Error.Code === 1004)
                n.Helpers.AlertSwitch(i),
                  this.ShowErrorMsgOnInputAmount(
                    !0,
                    i.Error.Message,
                    i.Error.Message
                  ),
                  this.ControlTransferPanel(!0, !0);
              else {
                if (
                  i.Error.Code === ApiStatusCodeEnum.TransferPointCommonError
                ) {
                  u = n.Helpers.ChangeLanguage("轉點失敗");
                  n.Helpers.ChangeLanguage(i.Error.Message) ===
                  n.Helpers.ChangeLanguage("代理商金額不足")
                    ? (n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.StringFormat(
                          n.Helpers.ChangeLanguage(
                            "【{0}】與【{1}】互轉失敗，請聯繫客服！"
                          ),
                          n.Helpers.ChangeLanguage("主帳戶"),
                          this.ChangePlatformName(t)
                        ),
                        null,
                        function () {
                          r.ShowKeyboardTransferAndCleanAccount();
                        }
                      ),
                      this.ControlTransferPanel(!1))
                    : (n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, u),
                      (this.model.TranscationPostModel.TransferAmount = null),
                      this.ShowErrorMsgOnInputAmount(!1),
                      this.ControlTransferPanel(!1));
                  return;
                }
                if (i.Error.Code === 4010)
                  this.fancyclose(), this.$fasttransferMaintainBox.show();
                else {
                  if (i.Error.Code === 4018) {
                    this.appContextSvc.StopCheckInterval();
                    n.Helpers.AlertServiceCenterCallback(
                      i,
                      SweetAlertTypeEnum.none,
                      function (n) {
                        if (!n) {
                          r.gameAreaSvc.SignOut().finally(function () {
                            r.fancyclose();
                            // window.location.reload(!0);
                          });
                          return;
                        }
                        r.gameAreaSvc.SignOut().finally(function () {
                          window.location.href = "/Mobile/Member/ServiceCenter";
                        });
                      },
                      i.Error.Message
                    );
                    return;
                  }
                  i.Error.Code === 4001
                    ? n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        i.Error.Message,
                        null,
                        function () {
                          r.fancyclose();
                          // window.location.reload(!0);
                        }
                      )
                    : (this.ControlTransferPanel(!1), n.Helpers.AlertSwitch(i));
                }
              }
            }
          }),
          (t.prototype.DeleteSessionStorage = function () {
            n.Helpers.DeleteSessionStorageItem("WorldCupPage");
          }),
          (t.$name = "GameAreaCtrl"),
          (t.$inject = [
            "GameAreaSvc",
            "$window",
            "messageBus",
            "blockUI",
            "$q",
            "$timeout",
            "appContext",
            "appConfig",
            "$cookies",
            "$interval",
            "AppContextSvc",
          ]),
          t
        );
      })();
      t.GameAreaCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.GameAreaCtrl.$name,
  OBSMobileApp.Controllers.GameAreaCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.ShowIcon = !1;
        }
        return n;
      })();
      n.GiftAVIconViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t) {
          var r = this,
            i;
          this.$timeout = t;
          this.model = new n.Models.GiftAVIconViewModel();
          i = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.CloseGiftAVIcon
          );
          this.model.ShowIcon = i != "true";
          this.$timeout(function () {
            r.InitialDragDrop();
          });
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.CloseIcon = function (t) {
            t.stopPropagation();
            n.Helpers.SetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.CloseGiftAVIcon,
              "true"
            );
            $("#dragAV").hide();
          }),
          (t.prototype.RedirectPage = function (n) {
            location.href = n;
          }),
          (t.prototype.InitialDragDrop = function () {
            var t = $("#dragAV"),
              e = 0,
              o = 0,
              i = 0,
              r = 0,
              v = parseInt($(".footer_list.btn_footer_DW").css("padding-top")),
              s = parseInt($(".btn_GLhotCool").css("margin-bottom")),
              u,
              f;
            t.css({
              position: "fixed",
              top: $(".footer").offset().top - t.height() - s + 5,
              bottom: "initial",
              right: "initial",
            });
            u = n.Helpers.GetSessionStorageItem("dragGiftAVIcon");
            u != undefined &&
              u != "" &&
              ((f = u.split(",")),
              t.css({
                position: "fixed",
                left: f[0] + "px",
                top: f[1] + "px",
                bottom: "initial",
                right: "initial",
              }));
            var h = function () {
                var n = $(window).width(),
                  u = $(".footer_list.btn_footer_DW").offset().top - 8,
                  f = $(".GameList_RBox ").offset().top,
                  e = parseInt(t.css("padding-top")),
                  o = t.width(),
                  s = t.height();
                i < 0 ? (i = 0) : i > n - o && (i = n - o);
                r < f ? (r = f) : r > u - s - e && (r = u - s - e);
                t.css({
                  position: "fixed",
                  left: i,
                  top: r,
                  bottom: "initial",
                  right: "initial",
                });
              },
              c = function (n) {
                i = (n.clientX || n.originalEvent.touches[0].clientX) - e;
                r = (n.clientY || n.originalEvent.touches[0].clientY) - o;
                h();
              },
              l = function (n) {
                var t = $(this);
                e =
                  (n.clientX || n.originalEvent.touches[0].clientX) -
                  t.offset().left;
                o =
                  (n.clientY || n.originalEvent.touches[0].clientY) -
                  t.offset().top;
              },
              a = function () {
                n.Helpers.SetSessionStorageItem("dragGiftAVIcon", i + "," + r);
              };
            t.on("mouseup touchend", a);
            t.on("mousemove touchmove", c);
            t.on("mousedown touchstart", l);
          }),
          (t.$name = "GiftAVIconCtrl"),
          (t.$inject = ["$timeout"]),
          t
        );
      })();
      t.GiftAVIconCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.GiftAVIconCtrl.$name,
  OBSMobileApp.Controllers.GiftAVIconCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var u = (function () {
          function i() {
            this.GoBackUrl = "";
            this.GoBackButtonCallBack = null;
            this.HeaderTitleCache = "";
            this.IsShowBalanceAmount = !1;
            this.LoginStatus = n.LoginStatusEnum.Checking;
            this.BalanceAmount = 0;
            this.UserLevelNumber = 0;
            this.UserLevel = "";
            this.MessageBoxCount = 0;
            this.IsCanNextGetBalance = !0;
            this.HeaderTransferPointModel = new t();
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap;
            this.LoginAreaPointsControlCenter = new n.GetPointsControlCenter();
          }
          return i;
        })(),
        i,
        r,
        t;
      n.HeaderViewModel = u;
      i = (function () {
        function n() {}
        return n;
      })();
      n.Language = i;
      r = (function () {
        function n() {}
        return n;
      })();
      n.GetBalancePost = r;
      t = (function () {
        function n() {}
        return n;
      })();
      n.HeaderTransferPointModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var s,
                  e,
                  h = !1,
                  c = function (i) {
                    r.balanceSlideFunc &&
                      ((s = n(r.balanceSlideFunc)), s(t, { $event: i }));
                  };
                r.slideOpenCheck && (e = n(r.slideOpenCheck));
                var o = $(window).scrollTop(),
                  u = $(".inforMDrop"),
                  l = $(".inforMDropOUT"),
                  a = $(".inforMDrop,.inforMDropOUT"),
                  f = $(".icon_inforMoney"),
                  v = function (n) {
                    if (!e || ((h = e(t, { $event: n })), h)) {
                      if (u.css("display") === "none") {
                        u.slideDown(200);
                        f.addClass("on");
                        l.show();
                        $(".container_main, body").css({
                          position: "fixed",
                          overflow: "hidden",
                          top: "-" + o + "px",
                        });
                        l.on("click touchstart", function (n) {
                          n.target.id !== "transferGamesPoint" &&
                            (f.removeClass("on"),
                            a.hide(),
                            $(".container_main, body").removeAttr("style"),
                            $(window).scrollTop(o),
                            $("body").css(
                              "-webkit-overflow-scrolling",
                              "touch"
                            ),
                            n.stopPropagation(),
                            n.preventDefault());
                        }).on("click touchstart", ".inforMDrop", function (n) {
                          n.stopPropagation();
                        });
                      } else
                        u.slideUp(200),
                          f.removeClass("on"),
                          a.hide(),
                          $(".container_main, body").removeAttr("style"),
                          $(window).scrollTop(o),
                          $("body").css("-webkit-overflow-scrolling", "touch");
                      c(n);
                    }
                  },
                  y = function (n) {
                    if (
                      u.length !== 0 &&
                      u.css("display") !== "none" &&
                      !(jQuery("#clickTransferGamesPointToMain").length > 0)
                    ) {
                      var t = $(n.target);
                      t.parents("#GameMenu").length === 1 ||
                        t.attr("ID") === "GameMenu" ||
                        t.hasClass("swal2-container") ||
                        t.hasClass("swal2-confirm") ||
                        t.hasClass("mask_Loading_custom") ||
                        t.hasClass("swal2-title") ||
                        t.hasClass("swal2-popup") ||
                        t.hasClass("swal2-modal") ||
                        t.hasClass("swal2-noanimation") ||
                        t.hasClass("swal2-center") ||
                        t.hasClass("swal2-shown") ||
                        t.hasClass("fancybox-confirm-button") ||
                        (u.slideUp(200), f.removeClass("on"), c(n));
                    }
                  };
                i.click(v);
                jQuery(document).click(y);
              },
            };
          }),
          (n.$name = "balanceSlide"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      n.BalanceSlide = t;
    })((t = n.Directives || (n.Directives = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterDirective(
  OBSMobileApp.Directives.BalanceSlide.$name,
  OBSMobileApp.Directives.BalanceSlide.$inject
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SignOut = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Authorize/SignOut", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGameBalanceInfoByAccountID = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Game/GetBalance", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "HeaderSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.HeaderService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.HeaderService.$name,
  OBSMobileApp.Services.HeaderService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h, c, l) {
          var a = this;
          this.appConfig = t;
          this.appContext = i;
          this.$q = r;
          this.$timeout = u;
          this.messageBus = f;
          this.adapter = e;
          this.blockUI = o;
          this.dataProvider = s;
          this.headerSvc = h;
          this.appContextSvc = c;
          this.$interval = l;
          this.CheckCanFunction = "";
          this.headerMaintainShow = !1;
          this.headerMaintainTimer = null;
          this.IsTestAccount = !1;
          this.enabledTransferStatus = !0;
          this.enabledTransferStatus = !0;
          this.InitializeViewModel();
          window.onpageshow = function (n) {
            // n.persisted && window.location.reload();
          };
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnHeaderGoBack,
            function () {
              a.HeaderGoBack();
            }
          );
          this.appContext.UserProfile &&
            this.appContext.UserProfile.TestType === 2 &&
            (this.IsTestAccount = !0);
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnCheckNeedKickLoginStatus,
            function (t, i) {
              i !== 1001 &&
                (i !== 4009 && i !== 4010 && a.headerSvc.SignOut(),
                a.appContextSvc.StopCheckInterval(),
                a.appContextSvc.ResetUserProfile(),
                (a.model.LoginStatus = n.Models.LoginStatusEnum.NotLogin),
                a.$interval.cancel(a.checkBalanceInterval),
                a.adapter != null &&
                  a.adapter.IsConnect() &&
                  a.adapter.Disconnect(),
                a.appContextSvc.CheckLoginStatus(i));
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin
                ? ((a.model.LoginStatus = n.Models.LoginStatusEnum.Loggedin),
                  (a.model.LoginInfo = a.appContext.UserProfile),
                  (a.model.LoginInfo.MainAccountBalance = Math.floor(
                    a.model.LoginInfo.MainAccountBalance
                  )),
                  (a.isEnabled = a.appConfig.CompetenceModel.IsEnable),
                  a.appContextSvc.StartCheckInterval(),
                  a.InitializeAdapter(),
                  a.InitializeCountDown(),
                  (a.model.UserLevelNumber =
                    a.appContext.UserProfile.LevelType),
                  (a.model.UserLevel = a.appContext.UserProfile.LevelTypeName))
                : i === n.Models.LoginStatusEnum.NotLogin
                ? n.Helpers.AlertSwitch({
                    Error: { Code: 4e3, Message: "未授權" },
                  })
                : i === n.Models.LoginStatusEnum.Dney
                ? f.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnAccountIsLockHintOpen,
                    n.Helpers.ChangeLanguage("您的帳號已被鎖定，請聯繫客服") +
                      "<br/><div style='color:red'>" +
                      n.Helpers.ChangeLanguage("請勿提供手機驗證碼給他人！") +
                      "</div>"
                  )
                : i === n.Models.LoginStatusEnum.Error &&
                  (window.location.href = "/Mobile/Home/Index");
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnReadNotifyMessage,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin &&
                a.$timeout(function () {
                  a.GetNotifyMessageUnreadCount();
                });
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.GetGameLobbyBalance,
            function (n, t) {
              a.gameLobbyModel = t;
              a.model.IsShowBalanceAmount = !1;
              a.GetGameBalance(a.gameLobbyModel);
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
            function (n, t) {
              var i = angular.copy(t);
              a.model.BalanceAmount =
                i.AccountBalance == 0
                  ? 0
                  : i.AccountBalance || a.model.BalanceAmount || 0;
              a.model.LoginInfo &&
                (a.model.LoginInfo.MainAccountBalance =
                  i.AccountBalance == 0
                    ? 0
                    : i.AccountBalance ||
                      a.model.LoginInfo.MainAccountBalance ||
                      0);
              a.isGameLobby ||
                (a.model.IsShowBalanceAmount =
                  a.model.BalanceAmount !== null &&
                  a.model.BalanceAmount !== undefined);
            }
          );
        }
        return (
          (t.prototype.RegisterAdditionallyGoBack = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnRegisterAdditionallyGoBack,
              null
            );
          }),
          (t.prototype.MemberWithdrawalGoBack = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnMemberWithdrawalGoBack,
              null
            );
          }),
          (t.prototype.MemberDepositGoBack = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnMemberDepositGoBack,
              null
            );
          }),
          (t.prototype.MemberBankGoBack = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnMemberBankGoBack,
              null
            );
          }),
          (t.prototype.PopQueryTransferRecords = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnHeaderPopTransferRecords,
              null
            );
          }),
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.HeaderViewModel();
            this.intervalSwitch = !1;
            this.isGameLobby = _.includes(
              location.pathname.toLowerCase(),
              "gamelobby"
            );
            var t = $(".inforMDropT");
            t.scroll(function () {
              t.scrollTop() === 0 && t.scrollTop(1);
            });
            jQuery(".img_header").show();
          }),
          (t.prototype.PopupClose = function (n) {
            jQuery("#" + n).hide();
          }),
          (t.prototype.ClickCheckFunction = function (n) {
            var t = this;
            this.$timeout.cancel(this.headerMaintainTimer);
            this.CheckCanFunction = n;
            this.headerMaintainShow = !0;
            this.headerMaintainTimer = this.$timeout(function () {
              t.headerMaintainShow = !1;
            }, 3e3);
          }),
          (t.prototype.SetProtectCodeGoBack = function () {
            jQuery("#loginSet").show();
          }),
          (t.prototype.SetProtectCodePopupConfirm = function () {
            location.href =
              location.protocol +
              "//" +
              location.host +
              "/Mobile/Member/MemberCenter";
          }),
          (t.prototype.SetProtectCodePopupCancel = function () {
            jQuery("#loginSet").hide();
          }),
          (t.prototype.HeaderGoBack = function () {
            var i = navigator.userAgent.toLowerCase(),
              r = /mozilla/.test(i),
              t;
            if (
              (r &&
                $("video").length > 0 &&
                ((t = $("video")[0]), t.paused || (t.load(), t.pause())),
              this.model.GoBackUrl != "")
            ) {
              n.NavigationHelper.GetInstance().RedirectPage(
                this.model.GoBackUrl
              );
              return;
            }
            if (this.model.GoBackButtonCallBack != null) {
              n.Helpers.IsNullOrEmpty(this.model.HeaderTitleCache) ||
                (jQuery(".bg_header_name").get(0).innerText =
                  this.model.HeaderTitleCache);
              this.model.GoBackButtonCallBack();
              return;
            }
            n.NavigationHelper.GetInstance().GoPreviousPage();
          }),
          (t.prototype.CheckBlackListKUIM = function () {
            if (
              this.appContext.UserProfile.MemberPlatformBlackList ==
                undefined ||
              this.appContext.UserProfile.MemberPlatformBlackList.length == 0
            )
              return !1;
            var t = this.appContext.UserProfile.MemberPlatformBlackList,
              n = _.filter(t, function (n) {
                return n.ServiceID == "KUIM";
              });
            return n.length == 0 ? !1 : n[0].BlackStatus == "0";
          }),
          (t.prototype.IsMemberStatusAudit = function () {
            return (
              this.appContext.UserProfile.MemberStatus ==
              n.Models.MemberStatusEnum.Audit
            );
          }),
          (t.prototype.IsMemberStatusWaitForDeposit = function () {
            return (
              this.appContext.UserProfile.MemberStatus ==
              n.Models.MemberStatusEnum.WaitForDeposit
            );
          }),
          (t.prototype.IsShowKUIM = function () {
            return this.IsMemberStatusAudit() ||
              this.IsMemberStatusWaitForDeposit()
              ? !1
              : this.CheckBlackListKUIM();
          }),
          (t.prototype.IsShowKUIMMaintain = function () {
            return this.IsMemberStatusAudit() ||
              this.IsMemberStatusWaitForDeposit()
              ? !0
              : this.CheckBlackListKUIM();
          }),
          (t.prototype.InitializeAdapter = function () {
            var t = this;
            this.adapter.Init({
              HubName: "messageHub",
              HubUrl: n.GlobalJsConfig.Config.SignalRNFSvcHost,
              QueryString: "l=1&aid=" + jQuery("#hfAID").val(),
              IsLogging: n.GlobalJsConfig.Config.SignalRNFSvcIsDebug,
            });
            this.adapter.Notification.MessageSvcCallback.NotifyMessageAck(
              function () {
                t.$timeout(function () {
                  t.GetNotifyMessageUnreadCount();
                });
              }
            );
            this.adapter.Notification.MessageSvcCallback.NotifyMessageUnreadCountAck(
              function (n) {
                t.$timeout(function () {
                  t.model.MessageBoxCount = n.Data.TotalItemCount;
                });
              }
            );
            this.adapter
              .Connect()
              .done(function () {
                t.$timeout(function () {
                  t.GetNotifyMessageUnreadCount();
                });
              })
              .fail(function () {
                t.model.MessageBoxCount = 0;
              });
          }),
          (t.prototype.GetNotifyMessageUnreadCount = function () {
            var n = this;
            this.adapter.Server.MessageSvc.GetNotifyMessageUnreadCount()
              .done(function () {})
              .fail(function () {
                n.model.MessageBoxCount = 0;
              });
          }),
          (t.prototype.DoSignOut = function () {
            var t = this;
            this.blockUI.start();
            this.headerSvc
              .SignOut()
              .then(function () {
                t.adapter.Disconnect();
                window.obspop && window.obspop.close();
                location.href = $("#signout").data("signout");
              })
              .catch(function () {
                t.blockUI.stop();
              });
            n.Helpers.DeleteLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter
            );
          }),
          (t.prototype.InitializeCountDown = function () {
            var t = this;
            this.intervalSwitch ||
              (this.$interval.cancel(this.checkBalanceInterval),
              (this.checkBalanceInterval = this.$interval(
                function () {
                  t.isGameLobby
                    ? t.GetGameBalance(t.gameLobbyModel)
                    : t.messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnSetMainBalanceControlCenter,
                        null
                      );
                },
                parseInt(n.GlobalJsConfig.Config.GetGameBalanceTime) * 1e3,
                0,
                !0,
                null
              )),
              (this.intervalSwitch = !0));
          }),
          (t.prototype.GetGameBalance = function (t) {
            var i = this;
            this.headerSvc
              .GetGameBalanceInfoByAccountID(t)
              .then(function (t) {
                i.gameBalance = n.Helpers.RemovePoint(t);
              })
              .catch(function () {
                i.gameBalance = 0;
              })
              .finally(function () {
                i.model.IsShowBalanceAmount = !0;
              });
          }),
          (t.prototype.ClickSlide = function () {
            var t = this;
            this.model.IsCanNextGetBalance
              ? (this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnRefreshAllPointsControlCenter,
                  null
                ),
                (this.model.IsCanNextGetBalance = !1),
                this.$timeout(function () {
                  t.model.IsCanNextGetBalance = !0;
                }, parseInt(n.GlobalJsConfig.Config.GetGameBalanceTime) * 1e3))
              : this.isGameLobby &&
                this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnSetOneGameReLoadPointsControlCenter,
                  this.gameLobbyModel.GameType
                );
          }),
          (t.prototype.IsOpenCheck = function (n) {
            var t =
              this.model.LoginStatus !== 2 || !this.model.IsShowBalanceAmount;
            return n == "index" && $("#inforMDropOUT").addClass("left"), !t;
          }),
          (t.prototype.RedirectPage = function (t, i) {
            i === void 0 && (i = "");
            i == ""
              ? n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t)
              : n.NavigationHelper.GetInstance().RedirectPage(t, i);
          }),
          (t.$name = "HeaderCtrl"),
          (t.$inject = [
            "appConfig",
            "appContext",
            "$q",
            "$timeout",
            "messageBus",
            "SignalRAdapter",
            "blockUI",
            "DataProvider",
            "HeaderSvc",
            "AppContextSvc",
            "$interval",
          ]),
          t
        );
      })();
      t.HeaderCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.HeaderCtrl.$name,
  OBSMobileApp.Controllers.HeaderCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function t() {
            this.LoginStatus = n.LoginStatusEnum.Checking;
            this.BalanceAmount = 0;
            this.HeaderTransferPointModel = new n.HeaderTransferPointModel();
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap;
            this.LoginAreaPointsControlCenter = new n.GetPointsControlCenter();
          }
          return t;
        })(),
        t;
      n.HeaderGamePointListViewModel = i;
      t = (function () {
        function n() {}
        return n;
      })();
      n.HeaderGamePointListTransferPointModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.TransferGamesPointToMain = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Game/TransferGamesPointToMain", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.PlatformTransfer = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Game/PlatformTransfer", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "HeaderGamePointListSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.HeaderGamePointListService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.HeaderGamePointListService.$name,
  OBSMobileApp.Services.HeaderGamePointListService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h, c, l) {
          var a = this;
          this.appConfig = t;
          this.appContext = i;
          this.$q = r;
          this.$timeout = u;
          this.messageBus = f;
          this.adapter = e;
          this.blockUI = o;
          this.dataProvider = s;
          this.HeaderGamePointListSvc = h;
          this.appContextSvc = c;
          this.$interval = l;
          this.CheckCanFunction = "";
          this.enabledTransferStatus = !0;
          this.headerMaintainShow = !1;
          this.headerMaintainTimer = null;
          this.enabledTransferStatus = !0;
          this.NoneAvailableGame = !1;
          this.InitializeViewModel();
          window.onpageshow = function (n) {
            // n.persisted && window.location.reload();
          };
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin &&
                ((a.model.LoginInfo = a.appContext.UserProfile),
                (a.model.LoginInfo.MainAccountBalance = Math.floor(
                  a.model.LoginInfo.MainAccountBalance
                )));
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.GetGameLobbyBalance,
            function (n, t) {
              a.gameLobbyModel = t;
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
            function (n, t) {
              var i = angular.copy(t),
                r = i.GameAvailableList.filter(function (n) {
                  return n.DisplayType === 1 || n.DisplayType === 2;
                });
              r = _.sortBy(r, function (n) {
                return Number(n.Sort);
              });
              a.model.LoginAreaPointsControlCenter = i;
              a.model.LoginAreaPointsControlCenter.GameAvailableList = r;
              a.model.BalanceAmount =
                i.AccountBalance == 0
                  ? 0
                  : i.AccountBalance || a.model.BalanceAmount || 0;
              a.model.LoginInfo &&
                (a.model.LoginInfo.MainAccountBalance =
                  i.AccountBalance == 0
                    ? 0
                    : i.AccountBalance ||
                      a.model.LoginInfo.MainAccountBalance ||
                      0);
              a.model.GameMenusBalanceList = _.filter(r, function (n) {
                return n.GameID !== "Total" && n.GameID !== "Lover";
              });
              a.model.GameMenusBottomList = _.filter(r, function (n) {
                return n.GameID === "Total" || n.GameID === "Lover";
              });
              a.NoneAvailableGame =
                _.filter(r, function (n) {
                  return n.Visible != "0" && n.GameID != "AnchorGift";
                }).length === 0;
            }
          );
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.HeaderGamePointListViewModel();
            this.isGameLobby = _.includes(
              location.pathname.toLowerCase(),
              "gamelobby"
            );
            var t = $(".inforMDropT");
            t.scroll(function () {
              t.scrollTop() === 0 && t.scrollTop(1);
            });
          }),
          (t.prototype.PopupClose = function (n) {
            jQuery("#" + n).hide();
          }),
          (t.prototype.ClickCheckFunction = function (n) {
            var t = this;
            this.$timeout.cancel(this.headerMaintainTimer);
            this.CheckCanFunction = n;
            this.headerMaintainShow = !0;
            this.headerMaintainTimer = this.$timeout(function () {
              t.headerMaintainShow = !1;
            }, 3e3);
          }),
          (t.prototype.TransferGamesPointToMain = function () {
            var t = this,
              i,
              r,
              u;
            return this.enabledTransferStatus === !1
              ? !1
              : ((this.enabledTransferStatus = !1),
                (i = !1),
                this.blockUI.start(),
                (r = $("body")),
                r.css("overflow", "hidden"),
                this.blockUI.done(function () {
                  r.css("overflow", "");
                }),
                (u = function () {
                  jQuery(".icon_inforID").click();
                }),
                this.HeaderGamePointListSvc.TransferGamesPointToMain()
                  .then(function (t) {
                    return (
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(t.Message),
                        null,
                        function () {
                          u();
                        },
                        null,
                        null,
                        null,
                        null,
                        !1
                      ),
                      !0
                    );
                  })
                  .catch(function (t) {
                    t.Error.Code === 4015 && (i = !0);
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(t.Error.Message),
                      null,
                      function (n) {
                        n != null && u();
                      },
                      null,
                      null,
                      null,
                      null,
                      !1
                    );
                  })
                  .finally(function () {
                    i ||
                      t.messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnRefreshAllPointsControlCenter,
                        null
                      );
                    t.enabledTransferStatus = !0;
                    t.blockUI.stop();
                  }),
                !0);
          }),
          (t.prototype.CheckTopMenuPermission = function (n) {
            return this.model.LoginInfo
              ? this.model.LoginInfo.LoginMenuSwitch[n] === "True"
              : !1;
          }),
          (t.prototype.TransferPoint = function (t, i, r) {
            var f = this,
              u;
            return this.enabledTransferStatus === !1
              ? !1
              : ((this.enabledTransferStatus = !1),
                (u = new n.Models.HeaderTransferPointModel()),
                i === 0)
              ? (n.Helpers.AlertFocus(
                  n.Helpers.ChangeLanguage("該平台餘額不足"),
                  SweetAlertTypeEnum.none,
                  "transfermoney1"
                ),
                !1)
              : (this.ControlTransferButton(!0),
                (u.FromGameType = t),
                (u.ToGameType = "Member"),
                (u.TransferAmount = i),
                this.blockUI.start(),
                this.HeaderGamePointListSvc.PlatformTransfer(u)
                  .then(function () {
                    return (
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("轉點成功")
                      ),
                      !0
                    );
                  })
                  .catch(function (t) {
                    var e, i;
                    if (u.FromGameType === "DDD") {
                      if (f.SpecialErrorBy3D(t.Error.Message)) return;
                      if (
                        t.Error.Code ===
                        ApiStatusCodeEnum.TransferPointCommonError
                      ) {
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          t.Error.Message
                        );
                        return;
                      }
                    }
                    t.Error.Code ===
                    ApiStatusCodeEnum.PlatformMutualTransferReachedNumberLimit
                      ? n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage("今日互轉次數已達到限定值")
                        )
                      : t.Error.Code ===
                        ApiStatusCodeEnum.PlatformMutualTransferReachedMoneyLimit
                      ? n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage("今日互轉額度已達限定值")
                        )
                      : t.Error.Code === ApiStatusCodeEnum.SwitchNotEnable
                      ? ((e = n.Helpers.StringFormat(
                          n.Helpers.ChangeLanguage(
                            "很抱歉，目前{0}轉帳功能維護中！"
                          ),
                          r
                        )),
                        n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, e))
                      : t.Error.Code === ApiStatusCodeEnum.PermissionDenied
                      ? n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          t.Error.Message,
                          null,
                          function () {
                            n.Helpers.DeleteLocalStorageItem(
                              n.ConstDefinition.LocalStorageKey
                                .KeepPointsControlCenter
                            );
                            // window.location.reload(!0);
                          }
                        )
                      : t.Error.Code === ApiStatusCodeEnum.ServerError
                      ? ((i = n.Helpers.ChangeLanguage("轉點失敗")),
                        n.Helpers.ChangeLanguage(t.Error.Message) ===
                          n.Helpers.ChangeLanguage("代理商金額不足") &&
                          (i = n.Helpers.StringFormat(
                            n.Helpers.ChangeLanguage(
                              "【{0}】與【{1}】互轉失敗，請聯繫客服！"
                            ),
                            r,
                            n.Helpers.ChangeLanguage("主帳戶")
                          )),
                        n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, i))
                      : n.Helpers.AlertSwitch(t);
                  })
                  .finally(function () {
                    f.ReloadGameBalance(t);
                    f.enabledTransferStatus = !0;
                    f.ControlTransferButton(!1);
                    f.blockUI.stop();
                  }),
                !0);
          }),
          (t.prototype.ControlTransferButton = function (n) {
            n
              ? ($(".returnP").css("cursor", "not-allowed"),
                $(".returnP").prop("disabled", !0))
              : ($(".returnP").css("cursor", ""),
                $(".returnP").removeAttr("disabled"));
          }),
          (t.prototype.ReloadGameBalance = function (t) {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnSetOneGameReLoadPointsControlCenter,
              t
            );
          }),
          (t.prototype.FindPlatform = function (n) {
            var t = _.filter(
              this.model.LoginAreaPointsControlCenter.GameAvailableList,
              function (t) {
                return t.GameID === n;
              }
            );
            return t.length === 0 ? null : t[0];
          }),
          (t.prototype.SpecialErrorBy3D = function (t) {
            if (!t) return !1;
            var i = _.find(this.model.DDDAlertErrors, function (n) {
              return n.ErrorCodes.some(function (n) {
                return n === t;
              });
            });
            return i
              ? (n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, i.Message),
                !0)
              : !1;
          }),
          (t.$name = "HeaderGamePointListCtrl"),
          (t.$inject = [
            "appConfig",
            "appContext",
            "$q",
            "$timeout",
            "messageBus",
            "SignalRAdapter",
            "blockUI",
            "DataProvider",
            "HeaderGamePointListSvc",
            "AppContextSvc",
            "$interval",
          ]),
          t
        );
      })();
      t.HeaderGamePointListCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.HeaderGamePointListCtrl.$name,
  OBSMobileApp.Controllers.HeaderGamePointListCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var r = (function () {
          function n() {
            this.ImportantNewsItem = new t();
            this.NewsQueryModel = new i();
          }
          return n;
        })(),
        t,
        i;
      n.ImportantNewsViewModel = r;
      t = (function () {
        function n() {}
        return n;
      })();
      n.ImportantNews = t;
      i = (function () {
        function n() {
          this.NewsID = "";
          this.NewsCategory = NewsCategoryEnum.Importance;
          this.NewsLocation = 1;
          this.PageNumber = 0;
          this.PageSize = 20;
          this.WebSide = "MOBILE";
        }
        return n;
      })();
      n.ImportantNewsQuery = i;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetNewsByCondition = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/GetRevealableNewsByCondition",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "ImportantNewsSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.ImportantNewsSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.ImportantNewsSvc.$name,
  OBSMobileApp.Services.ImportantNewsSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i) {
          this.importantNewsSvc = t;
          this.appContext = i;
          this.model = new n.Models.ImportantNewsViewModel();
          this.GetNews();
        }
        return (
          (t.prototype.GetNews = function () {
            var t = this;
            this.importantNewsSvc
              .GetNewsByCondition(this.model.NewsQueryModel)
              .then(function (i) {
                if (i != undefined && i != null && i.length > 0) {
                  t.model.ImportantNewsItem = i[0];
                  t.model.ImportantNewsItem.NewsContent =
                    n.Helpers.GetCustomizeUrlByAnnounce(
                      t.model.ImportantNewsItem.NewsContent
                    );
                  var r = t.GetImportantNewsID(t.model.ImportantNewsItem);
                  r != t.model.ImportantNewsItem.NewsID &&
                    jQuery("#importantNews").show();
                }
              })
              .catch(function () {});
          }),
          (t.prototype.GetImportantNewsID = function (t) {
            var i = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.ImportantNewsID
              ),
              r;
            return (
              this.IsUndefinedOrNull(t.NewsLevels) ||
                ((r = t.NewsLevels.filter(function (n) {
                  return n === 0;
                })),
                this.IsUndefinedOrNull(r) &&
                  (i = n.Helpers.GetLocalStorageItem(
                    n.ConstDefinition.LocalStorageKey.ImportantNewsID_NewsLevel
                  ))),
              i
            );
          }),
          (t.prototype.CloseImportantNews = function () {
            if (
              this.model.ImportantNewsItem != undefined &&
              this.model.ImportantNewsItem != null &&
              !this.IsUndefinedOrNull(this.model.ImportantNewsItem.NewsLevels)
            ) {
              var t = this.model.ImportantNewsItem.NewsLevels.filter(function (
                n
              ) {
                return n === 0;
              });
              if (this.IsUndefinedOrNull(t)) {
                n.Helpers.SetLocalStorageItem(
                  n.ConstDefinition.LocalStorageKey.ImportantNewsID_NewsLevel,
                  this.model.ImportantNewsItem.NewsID,
                  !0
                );
                $("#importantNews").hide();
                return;
              }
            }
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.ImportantNewsID,
              this.model.ImportantNewsItem.NewsID,
              !0
            );
            $("#importantNews").hide();
          }),
          (t.prototype.IsUndefinedOrNull = function (n) {
            return n == undefined || n == null || n.length <= 0 ? !0 : !1;
          }),
          (t.prototype.RedirectPage = function (t) {
            this.CloseImportantNews();
            n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t);
          }),
          (t.$name = "ImportantNewsCtrl"),
          (t.$inject = ["ImportantNewsSvc", "appContext"]),
          t
        );
      })();
      t.ImportantNewsCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.ImportantNewsCtrl.$name,
  OBSMobileApp.Controllers.ImportantNewsCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.SignInOverLimitErrorMsg = "";
        }
        return n;
      })();
      n.LoginLockPopupModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.$name = "LoginLockPopupSvc"), (n.$inject = ["DataProvider"]), n
        );
      })();
      n.LoginLockPopupSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.LoginLockPopupSvc.$name,
  OBSMobileApp.Services.LoginLockPopupSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o) {
          var s = this;
          this.$scope = t;
          this.$q = i;
          this.$interval = r;
          this.$timeout = u;
          this.loginLockPopupSvc = f;
          this.blockUI = e;
          this.messageBus = o;
          this.InitializeViewModel();
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnAccountIsLockHintOpen,
            function (n, t) {
              s.model.SignInOverLimitErrorMsg = t;
              $("#msgLock").show();
            }
          );
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.LoginLockPopupModel();
          }),
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.AccountLockClose = function () {
            this.blockUI.start();
            var n =
              location.protocol + "//" + location.host + "/Mobile/Home/login";
            location.replace(n);
          }),
          (t.prototype.RedirectPage = function (t, i) {
            i === void 0 && (i = "");
            this.blockUI.start();
            n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t, i);
          }),
          (t.$name = "LoginLockPopupCtrl"),
          (t.$inject = [
            "$scope",
            "$q",
            "$interval",
            "$timeout",
            "LoginLockPopupSvc",
            "blockUI",
            "messageBus",
          ]),
          t
        );
      })();
      t.LoginLockPopupCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.LoginLockPopupCtrl.$name,
  OBSMobileApp.Controllers.LoginLockPopupCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var f = (function () {
          function n() {
            this.ProtectCode = "";
            this.FingerIDX = "";
            this.ShowSliderCaptcha = !1;
            this.ShowPhoneVerify = !1;
            this.VerifySliderCaptcha = !1;
            this.CellPhone = "";
            this.ProtectCodeCellPhone = "";
            this.IsCellPhoneValid = !1;
            this.IdyKey = "";
            this.CaptchaCode = "";
            this.LoginVerification = 0;
            this.ProtectCodeModel = new i();
            this.ElementManager = new t.ViewElementManager();
            this.DepositNewsModel = [];
          }
          return n;
        })(),
        i,
        r,
        u;
      t.LoginPopupModel = f;
      i = (function () {
        function n() {
          this.CellPhone = "";
          this.CaptchaCode = "";
          this.PWD = "";
          this.PWDConfirmation = "";
          this.IsCaptchaCodeVerified = !1;
          this.IsCallCustomerService = !1;
          this.IsCanNotUseSMSProvider = !1;
        }
        return n;
      })();
      t.SignInProtectCodeModel = i;
      r = (function () {
        function t() {
          this.AccountID = "";
          this.QuestionTypeID = 8;
          this.CallbackLanguageID = n.Helpers.GetCallbackLanguageID();
          this.Phone = "";
          this.LevelType = 0;
        }
        return t;
      })();
      t.ProtectCodeCallbackServicePostModel = r;
      u = (function () {
        function n() {
          this.CellPhone = "";
          this.AccountID = "";
          this.VerifyUsage = VerifyUsageEnum.ProtectCodeLogin;
        }
        return n;
      })();
      t.VerifyMode = u;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SignIn = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("https://api.ku1119.com/api/kubet/login", HttpMethodEnum.Post, n)
                .then(function (n) {
                  window.location.href = 'https://ku191.net/';
                  // t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.SignCheck = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("/api/Authorize/SignCheck", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetDBAConfigMemberPaymemtBySettingType = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Common/GetDBAConfigMemberPaymemtBySettingType",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetVerifyMode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Common/GetVerifyMode",
              n
            );
          }),
          (n.$name = "LoginPopupSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.LoginPopupSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.LoginPopupSvc.$name,
  OBSMobileApp.Services.LoginPopupSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n, t, i, r, u, f, e, o, s, h) {
          var c = this;
          this.$scope = n;
          this.$q = t;
          this.$interval = i;
          this.$timeout = r;
          this.loginPopupSvc = u;
          this.permissionSvc = f;
          this.verifySvc = e;
          this.blockUI = o;
          this.toolsSvc = s;
          this.messageBus = h;
          this.needSetProtectCode = !1;
          this.signInButtonOriginName = "登 錄";
          this.textPromptTimeoutId = null;
          this.checkSimplePWDTimeoutId = null;
          this.isLoginPage = !1;
          this.SliderImage = "";
          this.SliderBgImage = "";
          h.On("fancyBoxClose", function (n, t) {
            t != "#popup_login" ||
              c.needSetProtectCode ||
              c.InitializeViewModel();
          });
          this.InitializeViewModel();
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            var t = this,
              i;
            this.login = new n.Models.LoginPopupModel();
            i = location.pathname.toLocaleLowerCase();
            i == "/mobile/home/login" && (this.isLoginPage = !0);
            this.needSetProtectCode = !1;
            this.login.ElementManager.DisableElement("ProtectCodeLoginButton");
            this.$timeout(function () {
              t.login.LoginVerification = Number(
                jQuery("#hfLoginVerification").val()
              );
              switch (t.login.LoginVerification) {
                case LoginVerificationEnum.None:
                  t.login.ShowSliderCaptcha = !1;
                  t.login.ShowPhoneVerify = !1;
                  break;
                case LoginVerificationEnum.SliderCaptcha:
                  t.login.ShowSliderCaptcha = !0;
                  t.InitSliderCaptchaImage();
                  t.login.ShowPhoneVerify = !1;
                  break;
                case LoginVerificationEnum.SliderCaptchaPhone:
                  t.login.ShowSliderCaptcha = !0;
                  t.InitSliderCaptchaImage();
                  t.login.ShowPhoneVerify = !0;
              }
              jQuery.fancybox.update();
            });
            this.messageBus.On(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelVerified,
              function (n, i) {
                t.login.ProtectCodeModel.CaptchaCode = i.CaptchaCode;
                t.login.ProtectCodeModel.IsCaptchaCodeVerified = !0;
                t.VerifyProtectLoginForm();
              }
            );
            this.messageBus.On(
              n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelClose,
              function (n, i) {
                t.login.ProtectCodeModel.CurrentVerifyMode = i.VerifyMode;
                t.login.ProtectCodeModel.IsCanNotUseSMSProvider =
                  i.IsCanNotUseSMSProvider;
                t.login.ProtectCodeModel.IsCallCustomerService = t.login
                  .ProtectCodeModel.IsCanNotUseSMSProvider
                  ? !0
                  : i.IsCallCustomerService;
                t.SetSendCaptchaButtonName();
                i.LockCallCustomerService &&
                  t.login.ElementManager.DisableElement(
                    "ProtectCodeSendCaptchaButton"
                  );
              }
            );
          }),
          (t.prototype.RedirectNextCase = function () {
            var i = this,
              r = new Date().getTime(),
              n = location.pathname,
              t;
            switch (n.toLowerCase()) {
              case "/mobile/game/boardgamen":
              case "/mobile/game/electgamen":
              case "/mobile/game/livegamen":
              case "/mobile/game/lotterygamen":
              case "/mobile/game/sportgamen":
                n = n.substring(0, n.length - 1);
                location.href = n;
                break;
              default:
                t = navigator.userAgent.toLowerCase();
                location.href =
                  t.indexOf("ucbrowser") > -1 ||
                  t.indexOf("micromessenger") > -1
                    ? "/Mobile/Home/Index?" + r
                    : "/Mobile/Home/Index";
            }
            /OppoBrowser/i.test(window.navigator.userAgent) &&
              this.$timeout(function () {
                var n = new Date().getTime();
              }, 2e3);
          }),
          (t.prototype.RegisterValidation = function () {
            var t = this;
            jQuery.validator.addMethod("ckAccountID", function (t) {
              return n.Validator.IsAccountIDFormatValid(t);
            });
            jQuery.validator.addMethod("ckSafetyAccountID", function (t) {
              return n.Validator.IsAccountIDFormatValid(t);
            });
            jQuery.validator.addMethod("ckAccountPWD", function (t) {
              return n.Validator.IsPasswordFormatValid(t);
            });
            jQuery.validator.addMethod("ckPWD", function (t) {
              return !(t != "" && !n.Validator.IsPasswordFormatValid(t));
            });
            jQuery.validator.addMethod(
              "ckProtectCodeConfirmation",
              function (n) {
                return (
                  n == "" ||
                  n.toLowerCase() == t.login.ProtectCodeModel.PWD.toLowerCase()
                );
              }
            );
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (t) {
                return n.Validator.IsCellPhoneByLengthFormatValid(t);
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (t) {
              return n.Validator.IsCellPhoneFormatValid(t);
            });
            jQuery.validator.addMethod("ckProtectCodeRequired", function (t) {
              return t != "" && n.Helpers.IsExist(t);
            });
            jQuery.validator.addMethod(
              "ckCheckPWDConfirmationRequired",
              function (t) {
                return t != "" && n.Helpers.IsExist(t);
              }
            );
            jQuery.validator.addMethod("ckSimplePassword", function (i) {
              var r = n.Validator.IsPasswordTooSimple(i) === !1;
              return (
                t.$timeout.cancel(t.checkSimplePWDTimeoutId),
                r ||
                  (t.checkSimplePWDTimeoutId = t.$timeout(function () {
                    t.login.ProtectCodeModel.PWD = "";
                    t.login.ProtectCodeModel.PWDConfirmation = "";
                    $("#ProtectCode").val("");
                    $("#CheckPWDConfirmation").val("");
                    t.ClearErrorMessage("ProtectCode");
                    t.ClearErrorMessage("CheckPWDConfirmation");
                  }, 3e3)),
                r
              );
            });
          }),
          (t.prototype.ClearForm = function () {
            this.login.AccountID = "";
            this.login.AccountPWD = "";
            this.login.CellPhone = "";
            this.messageBus.Emit("OnSliderCaptchaReset", {});
            jQuery("#frmLogin .error_login_t").remove();
            jQuery("#frmLogin .login_list").removeClass("error_login");
          }),
          (t.prototype.DoSignIn = function (t) {
            var i = this,
              r;
            return this.login.ElementManager.IsEnabled("signin")
              ? (this.blockUI.start(),
                this.login.ElementManager.DisableElementBy(
                  "signin",
                  "DoSignIn"
                ),
                (r = angular.copy(this.login)),
                (r.AccountPWD = r.AccountPWD),
                (r.LocalStorgeCookie = n.Helpers.GetLocalStorageItem(
                  n.ConstDefinition.LocalStorageKey.IT
                )),
                (r.ScreenResolution = screen.width + "*" + screen.height),
                (r.CaptchaCode = r.ProtectCodeModel.CaptchaCode),
                r.ProtectCodeModel.PWD != "" &&
                  (r.ProtectCode = this.toolsSvc.Base64Encode(
                    r.ProtectCodeModel.PWD
                  )),
                r.ProtectCodeModel.CellPhone != "" &&
                  (r.ProtectCodeCellPhone = r.ProtectCodeModel.CellPhone),
                Fingerprint2.get(function (u) {
                  r.FingerIDX = Fingerprint2.x64hash128(
                    u
                      .map(function (n) {
                        return n.value;
                      })
                      .join(),
                    31
                  );
                  i.loginPopupSvc
                    .SignIn(r)
                    .then(function (t) {
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.IT,
                        t.CookieID,
                        !1
                      );
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey
                          .LatestTimeForWithdrawalNews,
                        "",
                        !0
                      );
                      n.Helpers.DeleteLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey
                          .KeepPointsControlCenter
                      );
                      var r = n.Helpers.GetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.HaveReadDepositNews
                      );
                      r != "" &&
                        ((i.login.DepositNewsModel = JSON.parse(r)),
                        n.Helpers.SetLocalStorageItem(
                          n.ConstDefinition.LocalStorageKey.HaveReadDepositNews,
                          angular.toJson(
                            i.login.DepositNewsModel.filter(function (n) {
                              return n.ShowAgain == !1;
                            })
                          ),
                          !0
                        ));
                      i.RedirectNextCase();
                    })
                    .catch(function (r) {
                      var f = r.toString(),
                        u;
                      if (f.indexOf("blocked") != -1) {
                        u = f.replace("blocked", "").replace("blocked ", "");
                        u.indexOf("IP") != -1
                          ? n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              n.Helpers.ChangeLanguage(
                                "登入頻繁，請稍後再登入！！！"
                              ) +
                                "<br>" +
                                u
                            )
                          : n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              n.Helpers.ChangeLanguage(
                                "登入頻繁，請稍後再登入！！！"
                              )
                            );
                        i.blockUI.stop();
                        i.login.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        );
                        t.reject(!1);
                        return;
                      }
                      if (r.Error.Code == ApiStatusCodeEnum.PermissionDenied) {
                        location.href = "/Mobile/Error/Restricted";
                        return;
                      }
                      if (
                        r.Error.Code == ApiStatusCodeEnum.NeedSetProtectCode
                      ) {
                        i.needSetProtectCode = !0;
                        $("#popup_login").hide();
                        i.isLoginPage ||
                          ($(
                            "div[ng-controller='GameAreaCtrl as ctrl']"
                          ).hide(),
                          $("#container_main").addClass(
                            "protectcode_container"
                          ));
                        i.login.ProtectCodeModel.CellPhone = r.Error.Message;
                        i.messageBus.Emit("NeedSetProtectCode", {
                          NeedSetProtectCode: i.needSetProtectCode,
                        });
                        i.blockUI.stop();
                        i.login.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        );
                        i.GetVerifyModeEvent();
                        t.reject(!1);
                        return;
                      }
                      (r.Error.Message ==
                        n.Helpers.ChangeLanguage(
                          "保護密碼與登錄密碼不可相同"
                        ) ||
                        r.Error.Message ==
                          n.Helpers.ChangeLanguage(
                            "保護密碼與會員帳號不可相同"
                          )) &&
                        ((i.login.ProtectCodeModel.PWD = ""),
                        (i.login.ProtectCodeModel.PWDConfirmation = ""));
                      (r.Error.Code == ApiStatusCodeEnum.OpenSliderCaptcha ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.OpenSliderCaptchaPhone ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.RefreshSliderCaptcha ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.RefreshSliderCaptchaPhone) &&
                        ((i.login.ShowSliderCaptcha = !0),
                        (i.login.ShowPhoneVerify =
                          r.Error.Code ==
                            ApiStatusCodeEnum.OpenSliderCaptchaPhone ||
                          r.Error.Code ==
                            ApiStatusCodeEnum.RefreshSliderCaptchaPhone),
                        jQuery.fancybox.update());
                      !i.needSetProtectCode &&
                        i.login.ShowSliderCaptcha &&
                        (i.InitSliderCaptchaImage(),
                        (i.login.VerifySliderCaptcha = !1),
                        (i.login.AccountID = ""),
                        i.login.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        ));
                      r.Error.Code != ApiStatusCodeEnum.RefreshSliderCaptcha &&
                        r.Error.Code !=
                          ApiStatusCodeEnum.RefreshSliderCaptchaPhone &&
                        (r.Error.Code ===
                          ApiStatusCodeEnum.SignInFailedOverLimit ||
                        r.Error.Code ===
                          ApiStatusCodeEnum.AccountIsForbiddenToLogin
                          ? ((i.login.SignInOverLimitErrorMsg =
                              r.Error.Message),
                            $("#loginLock").show())
                          : n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              r.Error.Message
                            ));
                      i.needSetProtectCode ||
                        ((i.login.CellPhone = ""), (i.login.AccountPWD = ""));
                      i.blockUI.stop();
                      i.login.ElementManager.EnableElementBy(
                        "signin",
                        "DoSignIn"
                      );
                      t.reject(!1);
                    });
                }),
                t.promise)
              : (t.reject(!1), t.promise);
          }),
          (t.prototype.SignCheck = function (t) {
            t === void 0 && (t = !1);
            var i = this.$q.defer();
            return !$("#frmLogin").valid() || !this.IsLoginButtonEnable()
              ? (i.reject(!1), i.promise)
              : window.navigator.webdriver
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("帳號或密碼錯誤") + "!"
                ),
                i.reject(!1),
                i.promise)
              : t && !$("#protectLoginForm").valid()
              ? (i.reject(!1), i.promise)
              : this.DoSignIn(i);
          }),
          (t.prototype.IsFriendExist = function () {
            var n = window.sessionStorage.getItem("InviteAccountID") || "";
            return !(n == undefined || n == "");
          }),
          (t.prototype.CheckIfRegister = function () {
            if (this.IsFriendExist()) {
              window.location.href = jQuery("#registerurl").val();
              return;
            }
            this.permissionSvc
              .IsMemberRegisterEnabled()
              .then(function (t) {
                if (t === !0) {
                  window.location.href = jQuery("#registerurl").val();
                  return;
                }
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  "很抱歉，目前會員註冊關閉中",
                  null,
                  function () {
                    window.location.href = "/Mobile/Home/Index";
                  }
                );
              })
              .catch(function (t) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  t.Error.Message
                );
              });
          }),
          (t.prototype.ClearErrorMessage = function (n) {
            var i = jQuery("#" + n)
                .parents()
                .parents(),
              t;
            $(i).removeClass("error");
            $(i).find("span.error_t").remove();
            t = jQuery("#" + n).closest("li.error");
            t.length > 0 && t.removeClass("error");
          }),
          (t.prototype.SendCaptchaButtonClick = function () {
            if (
              (this.ClearErrorMessage("ProtectCodeCaptchaCode"),
              n.Helpers.IsNullOrEmpty(this.login.ProtectCodeModel.CellPhone))
            ) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                "您輸入的手機號碼未驗證，請聯繫客服，謝謝！"
              );
              return;
            }
            if (
              this.login.ProtectCodeModel.IsCanNotUseSMSProvider ||
              this.login.ProtectCodeModel.IsCallCustomerService
            ) {
              this.SendCustomerService();
              return;
            }
            this.login.ElementManager.IsVisible(
              "ProtectCodeSendCaptchaButton"
            ) &&
              this.login.ElementManager.IsEnabled(
                "ProtectCodeSendCaptchaButton"
              ) &&
              this.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnCaptchaCodePanelOpen,
                {
                  AccountID: this.login.AccountID,
                  CellPhone: this.login.ProtectCodeModel.CellPhone,
                  VerifyUsage: VerifyUsageEnum.ProtectCodeLogin,
                }
              );
          }),
          (t.prototype.SendCustomerService = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnCaptchaCodePanelCustomerServiceOpen,
              {
                AccountID: this.login.AccountID,
                CellPhone: this.login.ProtectCodeModel.CellPhone,
                VerifyUsage: VerifyUsageEnum.ProtectCodeLogin,
              }
            );
          }),
          (t.prototype.GetSendCaptchaButtonName = function () {
            if (
              !this.login.ElementManager.IsEnabled(
                "ProtectCodeSendCaptchaButton"
              )
            )
              return n.Helpers.ChangeLanguage("發送中");
            if (
              this.login.ProtectCodeModel.IsCanNotUseSMSProvider ||
              this.login.ProtectCodeModel.IsCallCustomerService
            )
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (this.login.ProtectCodeModel.CurrentVerifyMode) {
              case SMSVerifyModeEnum.SMS:
                return n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return n.Helpers.ChangeLanguage("語音");
              default:
                return n.Helpers.ChangeLanguage("讀取中");
            }
          }),
          (t.prototype.SetSendCaptchaButtonName = function () {
            var n = this.GetSendCaptchaButtonName();
            n != "" && (this.login.ProtectCodeModel.SendCaptchaButtonName = n);
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            var t = this.GetSendCaptchaButtonName();
            return t === n.Helpers.ChangeLanguage("發送中")
              ? "btn_code off"
              : t === n.Helpers.ChangeLanguage("短信")
              ? "btn_code blue"
              : t === n.Helpers.ChangeLanguage("語音")
              ? "btn_code voice"
              : t === n.Helpers.ChangeLanguage("聯繫客服")
              ? "btn_code call"
              : "btn_code again";
          }),
          (t.prototype.IsSendCaptchaButtonEnabled = function () {
            return (
              !this.login.ProtectCodeModel.IsCaptchaCodeVerified &&
              this.login.ElementManager.IsEnabled(
                "ProtectCodeSendCaptchaButton"
              ) &&
              !n.Helpers.IsNullOrEmpty(
                this.login.ProtectCodeModel.SendCaptchaButtonName
              )
            );
          }),
          (t.prototype.TriggerInputOnBlur = function (n) {
            return n != null ? n.replace(/\s/g, "") : "";
          }),
          (t.prototype.SliderRefreshCallback = function () {
            var n = this;
            this.$timeout(function () {
              n.InitSliderCaptchaImage();
              n.login.VerifySliderCaptcha = !1;
            });
          }),
          (t.prototype.HandleCaptchaSuccess = function (n) {
            var t = this;
            this.$timeout(function () {
              t.login.VerifySliderCaptcha = !0;
              t.login.IdyKey = n;
            });
          }),
          (t.prototype.HandleCaptchaFail = function () {
            var n = this;
            this.$timeout(function () {
              n.login.IdyKey = "";
              n.login.VerifySliderCaptcha = !1;
              n.InitSliderCaptchaImage();
            });
          }),
          (t.prototype.IsLoginButtonEnable = function () {
            var i = this.login,
              n = i.AccountID,
              t = i.AccountPWD,
              u = i.IsCellPhoneValid,
              r = i.VerifySliderCaptcha;
            return this.login.ShowPhoneVerify
              ? n && n != "" && t && t != "" && u && r
              : this.login.ShowSliderCaptcha
              ? n && n != "" && t && t != "" && r
              : n && n != "" && t && t != "";
          }),
          (t.prototype.VerifyCellPhoneByJqueryValid = function () {
            $("#hfCellPhone").valid();
          }),
          (t.prototype.VerifyCellPhone = function () {
            this.login.IsCellPhoneValid = n.Validator.IsCellPhoneFormatValid(
              this.login.CellPhone
            );
            this.login.IsCellPhoneValid && this.VerifyCellPhoneByJqueryValid();
          }),
          (t.prototype.KeyboardClose = function (t) {
            t === void 0 && (t = "CellPhone");
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnMobileKeyboardClose,
              { elemId: t }
            );
          }),
          (t.prototype.VerifyAccountID = function () {
            $("#txtAccountID").valid();
          }),
          (t.prototype.VerifyAccountPWD = function () {
            $("#txtAccountPWD").valid();
          }),
          (t.prototype.VerifyLoginForm = function () {
            $("#frmLogin").valid();
            this.$timeout(function () {
              $("#txtAccountID").blur();
              $("#txtAccountPWD").blur();
            });
          }),
          (t.prototype.VerifyProtectLoginForm = function () {
            this.login.ElementManager.DisableElement("ProtectCodeLoginButton");
            var t = this.login.ProtectCodeModel,
              u = t.CaptchaCode,
              f = t.CellPhone,
              e = t.IsCaptchaCodeVerified,
              i = t.PWD,
              r = t.PWDConfirmation;
            e !== !1 &&
              f !== "" &&
              u !== "" &&
              i !== "" &&
              n.Helpers.IsExist(i) &&
              r !== "" &&
              n.Helpers.IsExist(r) &&
              n.Validator.IsPasswordFormatValid(
                this.login.ProtectCodeModel.PWD
              ) &&
              $("#ProtectCode").valid() &&
              $("#CheckPWDConfirmation").valid() &&
              $("#protectLoginForm").valid() &&
              this.login.ElementManager.EnableElement("ProtectCodeLoginButton");
          }),
          (t.prototype.VerifyProtectCode = function () {
            $("#ProtectCode").valid();
          }),
          (t.prototype.VerifyCheckPWDConfirmation = function () {
            $("#CheckPWDConfirmation").valid();
          }),
          (t.prototype.Back = function () {
            jQuery("#loginSet").show();
          }),
          (t.prototype.popupConfirm = function () {
            location.href =
              location.protocol + "//" + location.host + "/Mobile/Home/Login";
          }),
          (t.prototype.popupCancel = function () {
            jQuery("#loginSet").hide();
          }),
          (t.prototype.ShowTextPrompt = function () {
            var i = this,
              t = ".txt_prompt",
              n;
            jQuery(t).show();
            n = jQuery(t).parent(".form_In");
            this.textPromptTimeoutId ||
              n.css("z-index", parseInt(n.css("z-index")) + 1);
            this.$timeout.cancel(this.textPromptTimeoutId);
            this.textPromptTimeoutId = this.$timeout(function () {
              jQuery(t).hide();
              n.css("z-index", parseInt(n.css("z-index")) - 1);
              i.textPromptTimeoutId = null;
            }, 2e3);
          }),
          (t.prototype.GetVerifyModeEvent = function () {
            var t = this,
              i = new n.Models.VerifyMode();
            i.AccountID = this.login.AccountID;
            i.VerifyUsage = VerifyUsageEnum.ProtectCodeLogin;
            this.loginPopupSvc
              .GetVerifyMode(i)
              .then(function (n) {
                t.login.ProtectCodeModel.IsCanNotUseSMSProvider = !1;
                t.login.ProtectCodeModel.CurrentVerifyMode = n;
                t.SetSendCaptchaButtonName();
              })
              .catch(function (i) {
                if (
                  i == null ||
                  i == undefined ||
                  i.Error == null ||
                  i.Error == undefined
                ) {
                  n.Helpers.AlertOnlyOKCallback(
                    "",
                    SweetAlertTypeEnum.none,
                    function () {
                      // window.location.reload(!0);
                    },
                    "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                  );
                  return;
                }
                t.login.ProtectCodeModel.IsCanNotUseSMSProvider = !0;
                t.login.ProtectCodeModel.CurrentVerifyMode =
                  SMSVerifyModeEnum.SMS;
                t.SetSendCaptchaButtonName();
              });
          }),
          (t.prototype.InitSliderCaptchaImage = function () {
            var t = this;
            try {
              this.SliderBgImage = "";
              this.SliderImage = "";
              this.verifySvc.GetSliderCaptcha().then(function (n) {
                t.SliderBgImage = n.Background;
                t.SliderImage = n.Slider;
              });
            } catch (i) {
              n.Helpers.AlertSwitch(i);
            }
          }),
          (t.prototype.SignInFailedOverLimitClose = function () {
            this.login.AccountID = "";
            this.login.AccountPWD = "";
            $("#loginLock").hide();
          }),
          (t.prototype.RedirectPage = function (t, i) {
            i === void 0 && (i = "");
            this.blockUI.start();
            this.messageBus.Emit("showMaskAll", !0);
            n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t, i);
          }),
          (t.$name = "LoginPopupCtrl"),
          (t.$inject = [
            "$scope",
            "$q",
            "$interval",
            "$timeout",
            "LoginPopupSvc",
            "PermissionSvc",
            "VerifySvc",
            "blockUI",
            "ToolsSvc",
            "messageBus",
          ]),
          t
        );
      })();
      t.LoginPopupCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.LoginPopupCtrl.$name,
  OBSMobileApp.Controllers.LoginPopupCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return n;
      })();
      n.MaskJoinInfoNewViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t, i, r) {
          this.adapter = n;
          this.dataProvider = t;
          this.$interval = i;
          this.appConfig = r;
          this.intervalSwitch = !1;
        }
        return (
          (n.prototype.RegisterValidation = function () {}),
          (n.prototype.FancyBoxClose = function () {
            jQuery.fancybox.close();
          }),
          (n.$name = "MaskJoinInfoNewCtrl"),
          (n.$inject = [
            "SignalRAdapter",
            "DataProvider",
            "$interval",
            "appConfig",
          ]),
          n
        );
      })();
      n.MaskJoinInfoNewCtrl = t;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.MaskJoinInfoNewCtrl.$name,
  OBSMobileApp.Controllers.MaskJoinInfoNewCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t) {
          this.$scope = t;
          this.isShowOsasunaFloat = !1;
          var i = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.OsasunaFloat
          );
          this.isShowOsasunaFloat = i != "true";
        }
        return (
          (t.prototype.RedirectPage = function (t) {
            n.NavigationHelper.GetInstance().RedirectPageToSecondLevel(t);
          }),
          (t.prototype.CloseFloat = function (t) {
            $(t.currentTarget).attr("class") == "btn_closeCAO" &&
              (t.stopPropagation(),
              n.Helpers.SetSessionStorageItem(
                n.ConstDefinition.SessionStorageKey.OsasunaFloat,
                "true"
              ),
              $("#osasunaFloat").hide());
          }),
          (t.$name = "OsasunaFloatCtrl"),
          (t.$inject = ["$scope"]),
          t
        );
      })();
      t.OsasunaFloatCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.OsasunaFloatCtrl.$name,
  OBSMobileApp.Controllers.OsasunaFloatCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function t() {
            this.PointsControlCenter = new n.GetPointsControlCenter();
            this.MonitorGetGameBalanceFinishTime = 500;
            this.KeepFinishReloadBalanceTime = 1e4;
          }
          return t;
        })(),
        t;
      n.PointsControlCenterViewModel = i;
      t = (function () {
        function n() {}
        return n;
      })();
      n.GetBalancePostModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetMemberBalanceInfoByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/MemberTransfer/GetMemberBalanceInfoByAccountID",
                  HttpMethodEnum.Post
                )
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGameBalanceByGameType = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/GetBalance", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.GetAliveGameList = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Game/GetAliveGameList", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "PointsControlCenterSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.PointsControlCenterSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.PointsControlCenterSvc.$name,
  OBSMobileApp.Services.PointsControlCenterSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o) {
          var s = this;
          this.mainAccountPointSvc = t;
          this.$interval = i;
          this.$messageBus = r;
          this.appConfig = u;
          this.blockUI = f;
          this.$timeout = e;
          this.$q = o;
          this.model = new n.Models.PointsControlCenterViewModel();
          this.$messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin &&
                s.InitializeViewModel();
            }
          );
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            var t = this;
            this.isInitGetGameBalance = _.includes(
              location.pathname.toLowerCase(),
              "/member/platformtransfer"
            );
            this.$messageBus.On(
              n.ConstDefinition.MessageBusEventName
                .OnRefreshAllPointsControlCenter,
              function (n, i) {
                t.model.PointsControlCenter.IsGetGameBalance = !0;
                t.GetMemberPlatformAvailableGameList(i);
              }
            );
            this.$messageBus.On(
              n.ConstDefinition.MessageBusEventName
                .OnSetOneGameReLoadPointsControlCenter,
              function (n, i) {
                t.GetOneGameBalance(i);
              }
            );
            this.$messageBus.On(
              n.ConstDefinition.MessageBusEventName
                .OnSetMainBalanceControlCenter,
              function () {
                t.GetMainAccountBalance();
              }
            );
            this.InitializeGetMemberGameList();
          }),
          (t.prototype.InitializeGetMemberGameList = function () {
            var t = this,
              i = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter
              );
            if (i) {
              angular.copy(JSON.parse(i), this.model.PointsControlCenter);
              this.model.PointsControlCenter.IsGetGameBalance = !0;
              this.$timeout(function () {
                t.$messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnGetPointsControlCenter,
                  t.model.PointsControlCenter
                );
              });
              this.InitializeGetBalance(!0);
              return;
            }
            this.mainAccountPointSvc
              .GetAliveGameList()
              .then(function (n) {
                n = n.filter(function (n) {
                  return (
                    (n.DisplayType === 1 ||
                      n.DisplayType === 2 ||
                      n.DisplayType === 3) &&
                    n.ServiceID !== "Member"
                  );
                });
                t.model.PointsControlCenter.GameAvailableList = n;
                t.model.PointsControlCenter.SetAllReload();
                t.InitializeGetBalance();
              })
              .catch(function (t) {
                n.Helpers.AlertSwitch(t);
              });
          }),
          (t.prototype.InitializeGetBalance = function (n) {
            var t = this;
            if ((n === void 0 && (n = !1), n && this.isInitGetGameBalance)) {
              this.$timeout(function () {
                t.GetMemberPlatformAvailableGameList();
              }, this.model.KeepFinishReloadBalanceTime);
              return;
            }
            this.GetMainAccountBalance().then(function () {
              t.isInitGetGameBalance && t.GetAllGamesBalance();
            });
          }),
          (t.prototype.GetMemberPlatformAvailableGameList = function (t) {
            var i = this;
            if (
              (t === void 0 && (t = null),
              t && (this.model.PointsControlCenter = t),
              !this.model.PointsControlCenter.IsGetGameBalance)
            ) {
              this.GetMainAccountBalance();
              return;
            }
            if (t) {
              this.model.PointsControlCenter.SetAllReload();
              this.GetMainAccountAndAllGamesBalance();
              return;
            }
            this.mainAccountPointSvc
              .GetAliveGameList()
              .then(function (n) {
                n = n.filter(function (n) {
                  return (
                    (n.DisplayType === 1 ||
                      n.DisplayType === 2 ||
                      n.DisplayType === 3) &&
                    n.ServiceID !== "Member"
                  );
                });
                i.model.PointsControlCenter.GameAvailableList = n;
                i.model.PointsControlCenter.SetAllReload();
                i.GetMainAccountAndAllGamesBalance();
              })
              .catch(function (t) {
                n.Helpers.AlertSwitch(t);
              });
          }),
          (t.prototype.GetMainAccountBalance = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.PointsControlCenter.IsGetAccountBalance
              ? ((this.model.PointsControlCenter.IsGetAccountBalance = !1),
                this.$messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnGetPointsControlCenter,
                  this.model.PointsControlCenter
                ),
                this.mainAccountPointSvc
                  .GetMemberBalanceInfoByAccountID()
                  .then(function (r) {
                    if (
                      ((t.model.PointsControlCenter.AccountBalance = Math.floor(
                        r.BalanceAmount
                      )),
                      t.$messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnGetPointsControlCenter,
                        t.model.PointsControlCenter
                      ),
                      !t.model.PointsControlCenter.GameAvailableList.some(
                        function (n) {
                          return (
                            n.IsBalanceLoading &&
                            n.Visible === "1" &&
                            n.GameID !== "Lover"
                          );
                        }
                      ))
                    ) {
                      i.resolve();
                      return;
                    }
                    var u = t.model.PointsControlCenter.GameAvailableList.some(
                        function (n) {
                          return (
                            n.Balance > 0 &&
                            n.Visible === "1" &&
                            n.GameID !== "Lover"
                          );
                        }
                      ),
                      f =
                        t.model.PointsControlCenter.AccountBalance ==
                        t.model.PointsControlCenter.TotalBalance;
                    u &&
                      f &&
                      (t.model.PointsControlCenter.SetAllReload(),
                      (t.model.PointsControlCenter.IsGetGameBalance = !0),
                      t.GetMainAccountAndAllGamesBalance());
                    i.resolve();
                  })
                  .catch(function () {
                    t.model.PointsControlCenter.AccountBalance = 0;
                    i.reject();
                  })
                  .finally(function () {
                    t.model.PointsControlCenter.IsGetAccountBalance = !0;
                  }),
                i.promise)
              : (i.resolve(), i.promise);
          }),
          (t.prototype.GetAllGamesBalance = function () {
            var n = this;
            this.model.PointsControlCenter.IsGetGameBalance &&
              (this.enableRefreshGameBalanceTimer ||
                (this.$timeout.cancel(this.enableRefreshGameBalanceTimer),
                (this.enableRefreshGameBalanceTimer = this.$timeout(
                  function () {
                    n.enableRefreshGameBalanceTimer = null;
                    n.model.PointsControlCenter.IsGetGameBalance = !0;
                  },
                  1e4
                ))),
              (this.model.PointsControlCenter.IsGetGameBalance = !1),
              this.$timeout.cancel(this.loadingGameBalanceTimer),
              (this.loadingGameBalanceTimer = this.$timeout(function () {
                n.GetGameBalance();
                n.$timeout.cancel(n.checkGameBalanceTimer);
                n.checkGameBalanceTimer = n.$timeout(function () {
                  n.CheckGetGameBalanceFinish();
                }, n.model.MonitorGetGameBalanceFinishTime);
              }, 1e3)));
          }),
          (t.prototype.GetMainAccountAndAllGamesBalance = function () {
            var n = this;
            this.GetMainAccountBalance().then(function () {
              n.GetAllGamesBalance();
            });
          }),
          (t.prototype.CheckGetGameBalanceFinish = function () {
            var i = this,
              t;
            this.model.PointsControlCenter.IsAllGameBalanceReady ||
              ((t = this.model.PointsControlCenter.GameAvailableList.every(
                function (n) {
                  return n.IsBalanceLoading == !1;
                }
              )),
              t
                ? (this.model.PointsControlCenter.IsAllGameBalanceReady = !0)
                : this.$timeout(function () {
                    i.CheckGetGameBalanceFinish();
                  }, this.model.MonitorGetGameBalanceFinishTime),
              this.SetMemberGameBalance(),
              this.$messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
                this.model.PointsControlCenter
              ),
              n.Helpers.SetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter,
                angular.toJson(this.model.PointsControlCenter),
                !0
              ));
          }),
          (t.prototype.GetGameBalance = function () {
            var t = this;
            this.model.PointsControlCenter.GameAvailableList.forEach(function (
              i
            ) {
              if (i.Balance == null && !i.IsBalanceLoading) {
                var r = new n.Models.GetBalancePostModel();
                r.GameType = i.GameID;
                i.Visible === "1"
                  ? ((i.IsBalanceLoading = !0),
                    t.mainAccountPointSvc
                      .GetGameBalanceByGameType(r)
                      .then(function (t) {
                        i.Balance = n.Helpers.FloorPoint(parseFloat(t));
                      })
                      .catch(function () {
                        i.Balance = 0;
                        i.Visible = "0";
                      })
                      .finally(function () {
                        i.IsBalanceLoading = !1;
                      }))
                  : (i.Balance = 0);
              }
            });
          }),
          (t.prototype.GetOneGameBalance = function (t) {
            var i = this;
            t &&
              (this.model.PointsControlCenter.SetGameReload(t),
              this.$messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
                this.model.PointsControlCenter
              ),
              this.mainAccountPointSvc
                .GetMemberBalanceInfoByAccountID()
                .then(function (r) {
                  i.model.PointsControlCenter.AccountBalance = Math.floor(
                    r.BalanceAmount
                  );
                  i.$messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnGetPointsControlCenter,
                    i.model.PointsControlCenter
                  );
                  i.model.PointsControlCenter.GameAvailableList.filter(
                    function (n) {
                      return n.GameID == t;
                    }
                  ).forEach(function (t) {
                    if (t.Balance == null && !t.IsBalanceLoading) {
                      var r = new n.Models.GetBalancePostModel();
                      r.GameType = t.GameID;
                      t.IsBalanceLoading = !0;
                      i.mainAccountPointSvc
                        .GetGameBalanceByGameType(r)
                        .then(function (i) {
                          t.Balance = n.Helpers.FloorPoint(parseFloat(i));
                        })
                        .catch(function () {
                          t.Balance = 0;
                        })
                        .finally(function () {
                          t.IsBalanceLoading = !1;
                          i.SetMemberGameBalance();
                          n.Helpers.SetLocalStorageItem(
                            n.ConstDefinition.LocalStorageKey
                              .KeepPointsControlCenter,
                            angular.toJson(i.model.PointsControlCenter),
                            !0
                          );
                          i.$messageBus.Emit(
                            n.ConstDefinition.MessageBusEventName
                              .OnGetPointsControlCenter,
                            i.model.PointsControlCenter
                          );
                        });
                    }
                  });
                })
                .catch(function () {
                  i.model.PointsControlCenter.AccountBalance = 0;
                })
                .finally(function () {
                  n.Helpers.SetLocalStorageItem(
                    n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter,
                    angular.toJson(i.model.PointsControlCenter),
                    !0
                  );
                  i.$messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnGetPointsControlCenter,
                    i.model.PointsControlCenter
                  );
                }));
          }),
          (t.prototype.SetMemberGameBalance = function () {
            var n = this.model.PointsControlCenter.AccountBalance;
            this.model.PointsControlCenter.GameAvailableList.forEach(function (
              t
            ) {
              if (t.Visible !== "1") {
                t.Balance = 0;
                return;
              }
              t.GameID !== "Lover" && (n += t.Balance);
            });
            this.model.PointsControlCenter.TotalBalance = n;
          }),
          (t.$name = "PointsControlCenterCtrl"),
          (t.$inject = [
            "PointsControlCenterSvc",
            "$interval",
            "messageBus",
            "appConfig",
            "blockUI",
            "$timeout",
            "$q",
          ]),
          t
        );
      })();
      t.PointsControlCenterCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.PointsControlCenterCtrl.$name,
  OBSMobileApp.Controllers.PointsControlCenterCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.ShowIcon = !1;
        }
        return n;
      })();
      n.RaffleTicketIconViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t) {
          var r = this,
            i;
          this.$timeout = t;
          this.model = new n.Models.RaffleTicketIconViewModel();
          i = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.CloseRaffleTicketIcon
          );
          this.model.ShowIcon = i != "true";
          this.$timeout(function () {
            r.InitialDragDrop();
          });
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.CloseIcon = function (t) {
            t.stopPropagation();
            n.Helpers.SetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.CloseRaffleTicketIcon,
              "true"
            );
            $("#dragRaffleTicket").hide();
          }),
          (t.prototype.RedirectPage = function (t, i) {
            if (i) {
              location.href = t;
              return;
            }
            n.Helpers.Alert(
              "",
              SweetAlertTypeEnum.none,
              !1,
              $("#raffleStatusTips").val()
            );
          }),
          (t.prototype.InitialDragDrop = function () {
            var t = $("#dragRaffleTicket"),
              e = 0,
              o = 0,
              i = 0,
              r = 0,
              v = parseInt($(".footer_list.btn_footer_DW").css("padding-top")),
              s = parseInt($(".btn_GLhotCool").css("margin-bottom")),
              u,
              f;
            t.css({
              position: "fixed",
              top: $(".footer").offset().top - t.height() - s + 5,
              bottom: "initial",
              right: "initial",
            });
            u = n.Helpers.GetSessionStorageItem("dragRaffleTicketIcon");
            u != undefined &&
              u != "" &&
              ((f = u.split(",")),
              t.css({
                position: "fixed",
                left: f[0] + "px",
                top: f[1] + "px",
                bottom: "initial",
                right: "initial",
              }));
            var h = function () {
                var n = $(window).width(),
                  u = $(".footer_list.btn_footer_DW").offset().top - 8,
                  f = $(".GameList_RBox ").offset().top,
                  e = parseInt(t.css("padding-top")),
                  o = t.width(),
                  s = t.height();
                i < 0 ? (i = 0) : i > n - o && (i = n - o);
                r < f ? (r = f) : r > u - s - e && (r = u - s - e);
                t.css({
                  position: "fixed",
                  left: i,
                  top: r,
                  bottom: "initial",
                  right: "initial",
                });
              },
              c = function (n) {
                i = (n.clientX || n.originalEvent.touches[0].clientX) - e;
                r = (n.clientY || n.originalEvent.touches[0].clientY) - o;
                h();
              },
              l = function (n) {
                var t = $(this);
                e =
                  (n.clientX || n.originalEvent.touches[0].clientX) -
                  t.offset().left;
                o =
                  (n.clientY || n.originalEvent.touches[0].clientY) -
                  t.offset().top;
              },
              a = function () {
                n.Helpers.SetSessionStorageItem(
                  "dragRaffleTicketIcon",
                  i + "," + r
                );
              };
            t.on("mouseup touchend", a);
            t.on("mousemove touchmove", c);
            t.on("mousedown touchstart", l);
          }),
          (t.$name = "RaffleTicketIconCtrl"),
          (t.$inject = ["$timeout"]),
          t
        );
      })();
      t.RaffleTicketIconCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.RaffleTicketIconCtrl.$name,
  OBSMobileApp.Controllers.RaffleTicketIconCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.ShowLine = !1;
        }
        return n;
      })();
      n.ServLineViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t) {
          var r = this,
            i;
          this.$timeout = t;
          this.model = new n.Models.ServLineViewModel();
          i = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.ServLine
          );
          this.model.ShowLine = i != "true";
          this.$timeout(function () {
            r.InitialDragDrop();
          });
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.CloseLine = function () {
            n.Helpers.SetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.ServLine,
              "true"
            );
            $("#servLine").hide();
          }),
          (t.prototype.LineAddFriend = function (n, t) {
            if (n) {
              location.href = "oplink:" + t;
              return;
            }
            location.href = t;
          }),
          (t.prototype.InitialDragDrop = function () {
            var t = $("#servLine"),
              e = 0,
              o = 0,
              i = 0,
              r = 0,
              s = parseInt($(".footer_list.btn_footer_DW").css("padding-top")),
              u,
              f;
            t.css({
              position: "fixed",
              left: "17.5 %",
              top:
                $(".footer_list.btn_footer_DW").offset().top -
                7 -
                s -
                t.height(),
              bottom: "initial",
              right: "initial",
            });
            u = n.Helpers.GetSessionStorageItem("dragDropLine");
            u != undefined &&
              u != "" &&
              ((f = u.split(",")),
              t.css({
                position: "fixed",
                left: f[0] + "px",
                top: f[1] + "px",
                bottom: "initial",
                right: "initial",
              }));
            var h = function () {
                var n = $(window).width(),
                  u = $(".footer_list.btn_footer_DW").offset().top - 12,
                  f = $(".GameList_RBox ").offset().top + 10,
                  e = parseInt(t.css("padding-top")) + 1,
                  h = $(".btn_closeLine "),
                  o = t.width() + h.width(),
                  s = t.height();
                i < 0 ? (i = 0) : i > n - o && (i = n - o);
                r < f ? (r = f) : r > u - s - e && (r = u - s - e);
                t.css({
                  position: "fixed",
                  left: i,
                  top: r,
                  bottom: "initial",
                  right: "initial",
                });
              },
              c = function (n) {
                i = (n.clientX || n.originalEvent.touches[0].clientX) - e;
                r = (n.clientY || n.originalEvent.touches[0].clientY) - o;
                h();
              },
              l = function (n) {
                var t = $(this);
                e =
                  (n.clientX || n.originalEvent.touches[0].clientX) -
                  t.offset().left;
                o =
                  (n.clientY || n.originalEvent.touches[0].clientY) -
                  t.offset().top;
              },
              a = function () {
                n.Helpers.SetSessionStorageItem("dragDropLine", i + "," + r);
              };
            t.on("mouseup touchend", a);
            t.on("mousemove touchmove", c);
            t.on("mousedown touchstart", l);
          }),
          (t.$name = "ServLineCtrl"),
          (t.$inject = ["$timeout"]),
          t
        );
      })();
      t.ServLineCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.ServLineCtrl.$name,
  OBSMobileApp.Controllers.ServLineCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.ShowIcon = !0;
        }
        return n;
      })();
      n.SuperPlayIconViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t) {
          var i = this;
          this.$timeout = t;
          this.model = new n.Models.SuperPlayIconViewModel();
          this.fromOriApp = (jQuery("#hfFOA").val() || "false") == "true";
          this.$timeout(function () {
            i.InitialDragDrop();
          });
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.CloseIcon = function (n) {
            n.stopPropagation();
            this.model.ShowIcon = !1;
          }),
          (t.prototype.InitialDragDrop = function () {
            var n = jQuery("#dragSuperPlay"),
              r = !1,
              u = 0,
              f = 0,
              t = 0,
              i = 0,
              c = parseInt(jQuery(".dragSP").css("bottom")),
              e = function () {
                var r = jQuery(window).width(),
                  u =
                    jQuery(".footer").offset() === undefined
                      ? jQuery(".dragSP").offset().top +
                        jQuery(".dragSP").height()
                      : jQuery(".footer").offset().top,
                  f =
                    jQuery(".footer").offset() === undefined
                      ? jQuery(".menuBonus").offset().top +
                        jQuery(".menuBonus").outerHeight()
                      : jQuery(".dragSP").offset().top,
                  e = parseInt(n.css("padding-top")),
                  o = n.width(),
                  s = n.height();
                t < 0 ? (t = 0) : t > r - o && (t = r - o);
                i < f - window.scrollY
                  ? (i = f - window.scrollY)
                  : i > u - s - e - window.scrollY &&
                    (i = u - s - e - window.scrollY);
                n.css({ left: t, top: i });
              },
              o = function (n) {
                if ((n.preventDefault(), n.stopPropagation(), !r)) {
                  r = !0;
                  return;
                }
                t = (n.clientX || n.originalEvent.touches[0].clientX) - u;
                i = (n.clientY || n.originalEvent.touches[0].clientY) - f;
                e();
              },
              s = function (n) {
                n.stopPropagation();
                var t = $(this);
                u =
                  (n.clientX || n.originalEvent.touches[0].clientX) -
                  t.offset().left;
                f =
                  (n.clientY || n.originalEvent.touches[0].clientY) -
                  t.offset().top +
                  window.scrollY;
              },
              h = function () {
                r = !1;
              };
            n.on("mouseup touchend", h);
            n.on("mousemove touchmove", o);
            n.on("mousedown touchstart", s);
          }),
          (t.prototype.OpenBBLiveGame = function () {
            if (this.fromOriApp) {
              oriApp.CheckGame("gameType=BB_LiveGame&subGameType=");
              return;
            }
            var n =
              "//" +
              location.host +
              "/CheckGame?gameType=BB_LiveGame&subGameType=&isMobile=true";
            location.href = n;
          }),
          (t.$name = "SuperPlayIconCtrl"),
          (t.$inject = ["$timeout"]),
          t
        );
      })();
      t.SuperPlayIconCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterController(
  OBSMobileApp.Controllers.SuperPlayIconCtrl.$name,
  OBSMobileApp.Controllers.SuperPlayIconCtrl
);

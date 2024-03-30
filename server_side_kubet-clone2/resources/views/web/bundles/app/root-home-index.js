function ShowTime() {
  var n = new Date(),
    t = n.getHours(),
    i = n.getMinutes(),
    r = n.getSeconds(),
    e = n.getFullYear(),
    u = n.getMonth() + 1,
    f = n.getDay();
  r < 10 && (r = "0" + r);
  i < 10 && (i = "0" + i);
  t < 10 && (t = "0" + t);
  f < 10 && (f = "0" + f);
  u < 10 && (u = "0" + u);
  document.getElementById("showbox").innerHTML =
    "GMT +8 " + e + "-" + u + "-" + f + " " + t + " : " + i + " : " + r;
  setTimeout("ShowTime()", 1e3);
}
var __assign, OBSApp;
(function (n) {
  var t;
  (function (t) {
    var i = (function () {
      function t() {}
      return (
        (t.DirectiveFactory = function (t) {
          var i = function (n) {
            for (
              var i,
                r = {},
                u = (n[0] === "?" ? n.substr(1) : n).split("&"),
                t = 0;
              t < u.length;
              t++
            )
              (i = u[t].split("=")),
                (r[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || ""));
            return r;
          };
          return {
            restrict: "A",
            link: function (r, u, f) {
              var e = f.homePageBannerPopup,
                s,
                o;
              e.indexOf("?") != -1
                ? ((s = e.split("?")[0]), (o = i(e.split("?")[1])))
                : (s = e);
              u.click(function () {
                var i = jQuery("#bannerAD #" + s);
                i.length > 0 &&
                  i.fadeIn(300, function () {
                    var r, i, u;
                    switch (o.action) {
                      case "videoPlay":
                        location.host.match(/localhost:\w+/i) != null
                          ? t.Emit(
                              n.ConstDefinition.MessageBusEventName
                                .OnBannerADKuAnchorVideoPlay,
                              { url: o.path }
                            )
                          : ((r = ""),
                            (i = location.host.match(
                              /(?:(.+)\.)?([^:\/\n?]+\..+)/
                            )),
                            (r =
                              i[1] !== undefined && i[1].indexOf("alpha") == 0
                                ? "alphaimages." + i[2]
                                : i[1] !== undefined && i[1].indexOf("uat") == 0
                                ? "uatimages." + i[2]
                                : "images." + i[2]),
                            (u =
                              "//" +
                              o.path.replace(
                                /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/i,
                                r
                              )),
                            t.Emit(
                              n.ConstDefinition.MessageBusEventName
                                .OnBannerADKuAnchorVideoPlay,
                              { url: u }
                            ));
                    }
                  });
              });
            },
          };
        }),
        (t.$name = "homePageBannerPopup"),
        (t.$inject = ["messageBus", t.DirectiveFactory]),
        t
      );
    })();
    t.HomePageBannerPopup = i;
  })((t = n.Directives || (n.Directives = {})));
})(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterDirective(
  OBSApp.Directives.HomePageBannerPopup.$name,
  OBSApp.Directives.HomePageBannerPopup.$inject
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n, t, i) {
          this.$messageBus = n;
          this.appContext = t;
          this.$q = i;
          var r = new Slide("#slideBox", {
            index: 1,
            effect: "slide",
            firstDelay: 8,
          });
        }
        return (
          (t.prototype.openComplianBox = function () {
            this.$messageBus.Emit("loadComplianData", "");
          }),
          (t.prototype.CheckBlackList = function (n, t) {
            var f = this,
              u,
              r,
              i;
            return this.appContext.UserProfile.MemberPlatformBlackList !=
              undefined
              ? this.appContext.UserProfile.MemberPlatformBlackList.length == 0
                ? !1
                : ((u = this.appContext.UserProfile.MemberPlatformBlackList),
                  (r = _.filter(u, function (n) {
                    return n.ServiceID == t;
                  })),
                  r.length == 0)
                ? !1
                : r[0].BlackStatus == "0"
                ? !0
                : ((i = $(n.currentTarget).find(".txt_maintain")),
                  i.css("display") == "block")
                ? void 0
                : (clearTimeout(this.checkBlackInterval),
                  jQuery(".txt_maintain").css("display", "none"),
                  i.show(),
                  (this.checkBlackInterval = setTimeout(function () {
                    i.css("display") == "block" && i.css("display", "none");
                    f.checkBlackInterval = null;
                  }, 3e3)),
                  !1)
              : !0;
          }),
          (t.prototype.IsFAccountAndAvailable = function (n) {
            if (
              this.appContext.UserProfile.MemberPlatformBlackList != undefined
            ) {
              if (
                this.appContext.UserProfile.MemberPlatformBlackList.length == 0
              )
                return !1;
              var i = this.appContext.UserProfile.MemberPlatformBlackList,
                t = _.filter(i, function (t) {
                  return t.ServiceID == n;
                });
              return t.length == 0 ? !1 : (t[0].BlackStatus == "1", !0);
            }
            return !1;
          }),
          (t.prototype.OpenRaffleFail = function () {
            n.Helpers.Alert(
              "",
              SweetAlertTypeEnum.none,
              !1,
              $("#raffleStatusTips").val()
            );
          }),
          (t.$name = "HomeIndexCtrl"),
          (t.$inject = ["messageBus", "appContext", "$q"]),
          t
        );
      })();
      t.HomeIndexCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.HomeIndexCtrl.$name,
  OBSApp.Controllers.HomeIndexCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t;
      (function (t) {
        var f = (function () {
            function t() {
              this.IsAccountNameValid = !0;
              this.VerifiedAccountNameOfBank = !0;
              this.BankInfoList = null;
              this.ElementManager = new n.ViewElementManager();
              this.LastChanceCount = 0;
              this.UpdateModel = new i();
              this.AgreementOfWithdrawalPWD = this.CheckboxOn;
              this.RegisterStep = 0;
              this.RegisterNextStep = 0;
              this.RegisterNextStepChild = 0;
              this.BankInfoPostModel = { CountryID: 0, LanguageCode: "" };
              this.RegisterMemberAdditionallyByBankInfoPostModel = {
                AccountName: "",
                WithdrawalPWD: "",
                IsUseWithdrawalPWD: !1,
                Identitycard: "",
                BankCodeID: "",
                BranchID: "",
                BankProID: 0,
                BankCityID: 0,
                PayeeAccountName: "",
                PayeeAccountNo: "",
                BankName: "",
                IsVerifyTime: null,
                IsReplaceFirstBankInfo: !1,
              };
              this.ElementManager.DisableElement(
                "RegisterAdditionallyWithBankInfoNextStepButton"
              );
              this.RegisterMemberAdditionallyWithVerifiedPostModel = {
                AccountName: "",
                WithdrawalPWD: "",
                IsUseWithdrawalPWD: !1,
                BankAbbreviation: "",
                BankCodeID: "",
                PayeeAccountNo: "",
                AdditionallyStatus:
                  RegisteredAdditionallyStatusEnum.Unspecified,
                VerifyUsage: VerifyUsageEnum.None,
                BankName: "",
              };
              this.MemberWithdrawalBankInfoGetByPayeeAccountNoModel = {
                AccountID: "",
                PayeeAccountNo: "",
              };
              this.CheckIsForcedToVerifyModel = {
                AccountName: "",
                WithdrawPWD: "",
              };
            }
            return (
              Object.defineProperty(t.prototype, "CheckboxOn", {
                get: function () {
                  return "checkBox on";
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "CheckboxOff", {
                get: function () {
                  return "checkBox off";
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          i,
          r,
          u;
        t.RegisterAdditionallyViewModel = f;
        i = (function () {
          function n() {
            this.AccountID = "";
            this.WithdrawalPWD = "";
          }
          return n;
        })();
        t.RegisterMemberAdditionallyModel = i;
        r = (function () {
          function n() {}
          return n;
        })();
        t.CheckIsForcedToVerifyAttachPostModel = r;
        u = (function () {
          function n() {}
          return n;
        })();
        t.UpdateMemberInfoAttachFileUrlPostModel = u;
      })((t = n.VN || (n.VN = {})));
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t;
      (function (n) {
        var t = (function () {
          function n(n, t) {
            this.toolsSvc = t;
            this.dataProvider = n;
          }
          return (
            (n.prototype.CheckPwdAndWithdrawalPWD = function (n) {
              n.WithdrawPWD &&
                (n.WithdrawPWD = this.toolsSvc.Base64Encode(n.WithdrawPWD));
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/MemberInfo/CheckPwdAndWithdrawalPWD",
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
            (n.prototype.GetBankCodeInfoByLanguageCode = function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/Withdrawal/GetWithdrawalBankCodeInfoList",
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
            (n.prototype.CheckBankAccountCheckSettingIsOpen = function () {
              var n = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/memberinfo/CheckBankAccountCheckSettingIsOpen",
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
            (n.prototype.RegisterMemberAdditionally = function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/memberinfo/RegisterMemberAdditionally",
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
            (n.prototype.UpdateMemberInfoAttachFileUrl = function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/memberinfo/UpdateMemberInfoAttachFileUrl",
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
            (n.prototype.VerifyBankAccountExist = function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/Verify/VerifyBankAccountExist",
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
            (n.prototype.CheckNeedAdditionallyAttachFile = function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/memberinfo/CheckNeedAdditionallyAttachFile",
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
            (n.prototype.GetIsIDVerifiedPicUploadEnable = function () {
              var n = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/memberinfo/GetIsIDVerifiedPicUploadEnable",
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
            (n.$name = "RegisterAdditionallySvc"),
            (n.$inject = ["DataProvider", "ToolsSvc"]),
            n
          );
        })();
        n.RegisterAdditionallySvc = t;
      })((t = n.VN || (n.VN = {})));
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.VN.RegisterAdditionallySvc.$name,
  OBSApp.Services.VN.RegisterAdditionallySvc
),
  (function (n) {
    var t;
    (function (t) {
      var i;
      (function (t) {
        var i = (function () {
          function t(t, i, r, u, f, e, o, s, h, c, l, a, v) {
            var y = this;
            this.$q = t;
            this.$interval = i;
            this.$timeout = r;
            this.registerAdditionallySvc = u;
            this.appContext = f;
            this.appContextService = e;
            this.messageBus = o;
            this.diff = s;
            this.logSvc = h;
            this.blockUI = c;
            this.appConfig = l;
            this.toolsSvc = a;
            this.upload = v;
            this.clearAccountNameInputTimeout = null;
            this.isPasswordDifferentWithdrawalPassword = !0;
            this.isPasswordDifferentWithdrawalPasswordForBankPhase = !0;
            this.additionallyVerifyType = VerifyUsageEnum.None;
            this.checkBeforeRegisterDisabled = !1;
            this.isRegisteredAdditionally = !1;
            this.bankAccountAttributionQueryingList = [];
            this.onFocusAccountNameOfBank = !1;
            this.uploadUrl = "../../Upload/UploadVerifyImage";
            this.progress = 0;
            this.disableUpload = !0;
            this.isAttachUploadRefreshInfo = !1;
            this.REGISTER_STEP = {
              INITIAL: 0,
              ACCOUNT_NAME_AND_PASSWORD: 1,
              BANK_CARD: 3,
              BANK_CARD_NEXT_STEP_1: 31,
              BANK_CARD_NEXT_STEP_CHILD_1: 311,
              BANK_CARD_NEXT_STEP_CHILD_2: 312,
              BANK_CARD_NEXT_STEP_CHILD_3: 313,
              REGISTER_END: 99,
            };
            this.CheckBeforeRegisterMemberAdditionallyDebounceFunc = _.debounce(
              function () {
                if ($("#AccountNameForm").valid()) {
                  if (!y.model.CheckboxOn) {
                    y.ShowUpdatingAccountNameWarning(function () {
                      return y.VerifyAndRegisterMemberAdditionally();
                    });
                    return;
                  }
                  y.registerAdditionallySvc
                    .CheckPwdAndWithdrawalPWD({
                      WithdrawPWD: y.model.UpdateModel.WithdrawalPWD,
                      AccountName: y.model.UpdateModel.AccountName,
                    })
                    .then(function (n) {
                      if (
                        ((y.isPasswordDifferentWithdrawalPassword = n),
                        !y.isPasswordDifferentWithdrawalPassword)
                      ) {
                        var t = $("#AccountNameForm");
                        t.valid();
                        return;
                      }
                      y.ShowUpdatingAccountNameWarning(function () {
                        return y.VerifyAndRegisterMemberAdditionally();
                      });
                    });
                }
              },
              1e3,
              { leading: !0, trailing: !1 }
            );
            this.CheckBeforeRegisterMemberAdditionallyByBankInfoDebounceFunc =
              _.debounce(
                function () {
                  y.checkBeforeRegisterDisabled ||
                    ((y.checkBeforeRegisterDisabled = !0),
                    y.BankAccountVerifyByBankInfo());
                },
                1e3,
                { leading: !0, trailing: !1 }
              );
            this.uploader = v;
            o.On("fancyBoxClose", function (t, i) {
              i == "#joinList" &&
                y.$timeout(function () {
                  y.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName.OnRefreshUserProfile,
                    null
                  );
                });
            });
            o.On("fancyBoxBeforLoad", function () {
              y.$timeout(function () {
                y.InitializeViewModel();
                y.isAttachUploadRefreshInfo = !1;
              });
            });
          }
          return (
            (t.prototype.InitializeViewModel = function () {
              var t = this,
                i;
              if (
                ((this.model = new n.Models.VN.RegisterAdditionallyViewModel()),
                (this.isInitPic1 = !0),
                (this.isInitPic2 = !0),
                this.appContext.LoginStatus ==
                  n.Models.LoginStatusEnum.Loggedin)
              ) {
                if (this.appContext.UserProfile.IsIdentityVerifyOverMax) {
                  jQuery.fancybox.close();
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage(
                      "您今日驗證次數已達上限，請聯繫客服"
                    )
                  );
                  return;
                }
                this.isRegisteredAdditionally =
                  this.appContext.UserProfile.IsRegisteredAdditionally;
                i = this.appContext.UserProfile.AdditionalStatus;
                switch (i) {
                  case RegisteredAdditionallyStatusEnum.NeedWriteBankCard:
                    this.model.RegisterStep = this.REGISTER_STEP.BANK_CARD;
                    this.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnPasswordEyeInitialize,
                      { elemId: "WithdrawalPWDOfBank" }
                    );
                    this.$timeout(function () {
                      jQuery.fancybox.update();
                    }, 300);
                    break;
                  case RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword:
                    this.model.RegisterStep =
                      this.REGISTER_STEP.ACCOUNT_NAME_AND_PASSWORD;
                    this.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnPasswordEyeInitialize,
                      { elemId: "WithdrawalPWD" }
                    );
                    break;
                  case RegisteredAdditionallyStatusEnum.NeedWriteAttachIdentity:
                    $("#joinList").parents(".fancybox-overlay").hide();
                    this.registerAdditionallySvc
                      .GetIsIDVerifiedPicUploadEnable()
                      .then(function (n) {
                        n
                          ? ((t.model.RegisterNextStep =
                              t.REGISTER_STEP.BANK_CARD_NEXT_STEP_1),
                            (t.model.RegisterNextStepChild =
                              t.REGISTER_STEP.BANK_CARD_NEXT_STEP_CHILD_2),
                            t.ResetUploadModel())
                          : $("#msgID").show();
                      });
                    break;
                  default:
                    this.model.RegisterStep =
                      this.REGISTER_STEP.ACCOUNT_NAME_AND_PASSWORD;
                    this.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnPasswordEyeInitialize,
                      { elemId: "WithdrawalPWD" }
                    );
                }
                this.BindingBankInfo();
              }
              this.verifyImageMaxFileSizeMb = Number(
                $("#hfVerifyImageMaxFileSize").val()
              );
            }),
            (t.prototype.RegisterValidation = function () {
              var t = this,
                i = jQuery.validator.messages;
              i.maxlength = jQuery.validator.format(
                n.Helpers.ChangeLanguage("當填寫超過") +
                  "{0}" +
                  n.Helpers.ChangeLanguage("個字符時無法成功輸入")
              );
              jQuery.validator.addMethod("ckSpace", function (n) {
                return /^[^\x20]{0,}$/.test(n);
              });
              jQuery.validator.addMethod("ckPassword", function (t) {
                return n.Validator.IsPasswordFormatValid(t);
              });
              jQuery.validator.addMethod("ckPasswordOfBank", function (t) {
                return n.Validator.IsPasswordFormatValid(t);
              });
              jQuery.validator.addMethod(
                "ckCompareAccountWithdrawalPWD",
                function () {
                  if (
                    (t.$timeout.cancel(t.handleCkCompareAccountWithdrawalPWD),
                    t.appContext.UserProfile.AccountID.toLowerCase() ==
                      t.model.UpdateModel.WithdrawalPWD.toLowerCase())
                  )
                    t.handleCkCompareAccountWithdrawalPWD = t.$timeout(
                      function () {
                        t.model.UpdateModel.WithdrawalPWD = "";
                        $("#WithdrawalPWD").val("");
                        t.ClearErrorMessage("WithdrawalPWD");
                      },
                      3e3
                    );
                  else return !0;
                  return !1;
                }
              );
              jQuery.validator.addMethod("ckPwdAndWithdrawalPWD", function () {
                return (
                  t.$timeout.cancel(t.handleCkPwdAndWithdrawalPWD),
                  t.isPasswordDifferentWithdrawalPassword ||
                    (t.handleCkPwdAndWithdrawalPWD = t.$timeout(function () {
                      t.model.UpdateModel.WithdrawalPWD = "";
                      $("#WithdrawalPW").val("");
                      t.ClearErrorMessage("WithdrawalPWD");
                    }, 3e3)),
                  t.isPasswordDifferentWithdrawalPassword
                );
              });
              jQuery.validator.addMethod("ckSimpleWithdrawalPWD", function (i) {
                var r = n.Validator.IsPasswordTooSimple(i);
                return (
                  t.$timeout.cancel(t.handleCkSimpleWithdrawalPWD),
                  r &&
                    (t.handleCkSimpleWithdrawalPWD = t.$timeout(function () {
                      t.model.UpdateModel.WithdrawalPWD = "";
                      $("#WithdrawalPWD").val("");
                      t.ClearErrorMessage("WithdrawalPWD");
                    }, 3e3)),
                  !r
                );
              });
              jQuery.validator.addMethod(
                "showAccountNameInvalidTipAndClearInput",
                function (i, r) {
                  var u;
                  return (
                    t.clearAccountNameInputTimeout != null &&
                      t.$timeout.cancel(t.clearAccountNameInputTimeout),
                    (u = document.activeElement === r),
                    u ||
                      t.model.IsAccountNameValid ||
                      (t.clearAccountNameInputTimeout = t.$timeout(function () {
                        t.model.UpdateModel.AccountName = "";
                        $("#AccountName").val("");
                        t.ClearErrorMessage("AccountName");
                      }, 3e3)),
                    t.model.IsAccountNameValid ||
                      n.Validator.IsAccountNameViewInputFormatValid(
                        t.model.UpdateModel.AccountName
                      )
                  );
                }
              );
              jQuery.validator.addMethod(
                "showAccountNameOfBankInvalidTipAndClearInput",
                function (i, r) {
                  var u;
                  return (
                    t.clearAccountNameInputTimeout != null &&
                      t.$timeout.cancel(t.clearAccountNameInputTimeout),
                    (u = document.activeElement === r),
                    u ||
                      t.model.VerifiedAccountNameOfBank ||
                      (t.clearAccountNameInputTimeout = t.$timeout(function () {
                        t.model.RegisterMemberAdditionallyByBankInfoPostModel.AccountName =
                          "";
                        $("#AccountNameOfBank").val("");
                        t.ClearErrorMessage("AccountNameOfBank");
                      }, 3e3)),
                    t.model.VerifiedAccountNameOfBank ||
                      n.Validator.IsAccountNameViewInputFormatValid(
                        t.model.RegisterMemberAdditionallyByBankInfoPostModel
                          .AccountName
                      )
                  );
                }
              );
              jQuery.validator.addMethod(
                "ckPwdAndWithdrawalPWDOfBank",
                function () {
                  return (
                    t.$timeout.cancel(t.handleCkPwdAndWithdrawalPWDOfBank),
                    t.isPasswordDifferentWithdrawalPasswordForBankPhase ||
                      (t.handleCkPwdAndWithdrawalPWDOfBank = t.$timeout(
                        function () {
                          $("#WithdrawalPWDOfBank").val("");
                          t.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD =
                            "";
                          t.ClearErrorMessage("WithdrawalPWDOfBank");
                        },
                        3e3
                      )),
                    t.isPasswordDifferentWithdrawalPasswordForBankPhase
                  );
                }
              );
              jQuery.validator.addMethod("ckBankAccount", function (n) {
                return /^\d{5,19}$/.test(n.replace(/\s+/g, ""));
              });
              jQuery.validator.addMethod(
                "ckSimplePasswordOfBank",
                function (i) {
                  var r = n.Validator.IsPasswordTooSimple(i);
                  return (
                    t.$timeout.cancel(t.handleCkSimplePasswordOfBank),
                    r &&
                      (t.handleCkSimplePasswordOfBank = t.$timeout(function () {
                        t.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD =
                          "";
                        $("#WithdrawalPWDOfBank").val("");
                        t.ClearErrorMessage("WithdrawalPWDOfBank");
                      }, 3e3)),
                    !r
                  );
                }
              );
              jQuery.validator.addMethod(
                "ckCompareAccountWithdrawalPWDOfBank",
                function () {
                  if (
                    (t.$timeout.cancel(
                      t.handleCkCompareAccountWithdrawalPWDOfBank
                    ),
                    t.appContext.LoginStatus ==
                      n.Models.LoginStatusEnum.Loggedin)
                  )
                    if (
                      t.appContext.UserProfile.AccountID.toLowerCase() ==
                      t.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD.toLowerCase()
                    )
                      t.model.ElementManager.DisableElement(
                        "RegisterAdditionallyWithBankInfoNextStepButton"
                      ),
                        (t.handleCkCompareAccountWithdrawalPWDOfBank =
                          t.$timeout(function () {
                            t.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD =
                              "";
                            $("#WithdrawalPWDOfBank").val("");
                            t.ClearErrorMessage("WithdrawalPWDOfBank");
                          }, 3e3));
                    else return !0;
                  return !1;
                }
              );
            }),
            (t.prototype.CheckBeforeRegisterMemberAdditionally = function () {
              this.CheckBeforeRegisterMemberAdditionallyDebounceFunc();
            }),
            (t.prototype.ShowUpdatingAccountNameWarning = function (t) {
              var r = this,
                i;
              t === void 0 && (t = this.VerifyAndRegisterMemberAdditionally);
              i =
                n.Helpers.ChangeLanguage("您的真實戶名為") +
                "<br /><font color='#337caa' style='word-break: break-all;'>【" +
                this.model.UpdateModel.AccountName +
                "】</font><br />" +
                n.Helpers.ChangeLanguage("戶名錯誤將無法提款，請再次確認");
              n.Helpers.AlertConfirmCallback(
                "",
                SweetAlertTypeEnum.none,
                function (n) {
                  if (!n) {
                    r.RestoreBtnCheckBeforeRegister();
                    return;
                  }
                  t();
                },
                i
              );
            }),
            (t.prototype.VerifyAndRegisterMemberAdditionally = function () {
              var i = this,
                t;
              if (
                !n.Validator.IsAccountNameFormatValid(
                  this.model.UpdateModel.AccountName
                )
              ) {
                n.Helpers.AlertOnlyOKCallback(
                  "",
                  SweetAlertTypeEnum.none,
                  function () {
                    return i.RestoreBtnCheckBeforeRegister();
                  },
                  n.Helpers.ChangeLanguage("真實戶名不符合，請注意文字間空格。")
                );
                return;
              }
              this.blockJoinList = this.blockUI.instances.get("joinList");
              this.blockJoinList.start();
              t = this.GetRegisterMemberAdditionallyPostModel(
                this.model.UpdateModel
              );
              this.RegisterAdditionallyBankInfoWithVerified(t);
            }),
            (t.prototype.CloseUploadModal = function () {
              var t = this;
              this.ModalCancel();
              this.ResetUploadModel();
              this.isAttachUploadRefreshInfo &&
                (this.messageBus.Emit(
                  "registerAdditionallyNoIdentifySuccess",
                  ""
                ),
                this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnRegisterAdditionallyFinish,
                  null
                ));
              this.$timeout(function () {
                t.model.RegisterNextStep = t.REGISTER_STEP.INITIAL;
                t.model.RegisterNextStepChild = t.REGISTER_STEP.INITIAL;
              }, 200);
            }),
            (t.prototype.RestoreBtnCheckBeforeRegister = function () {
              $("#btnCheckBeforeRegister")
                .val(n.Helpers.ChangeLanguage("確認送出"))
                .removeAttr("disabled")
                .removeClass("btn-disabled");
            }),
            (t.prototype.ChangeAgreement = function () {
              this.model.AgreementOfWithdrawalPWD =
                this.IsWithdrawalPWDCheckboxOff()
                  ? this.model.CheckboxOn
                  : this.model.CheckboxOff;
            }),
            (t.prototype.ClearErrorMessage = function (n) {
              var t = jQuery("#" + n).parent();
              $(t).removeClass("error");
              $(t).find("span.errorHint").remove();
            }),
            (t.prototype.SetNeedCheckPwdAndWithdrawalPWD = function () {
              this.isPasswordDifferentWithdrawalPassword = !0;
            }),
            (t.prototype.CheckPwdAndWithdrawalPWDOnBlur = function () {
              var n = this;
              this.registerAdditionallySvc
                .CheckPwdAndWithdrawalPWD({
                  WithdrawPWD: this.model.UpdateModel.WithdrawalPWD,
                  AccountName: this.model.UpdateModel.AccountName,
                })
                .then(function (t) {
                  n.isPasswordDifferentWithdrawalPassword = t;
                  t ||
                    (n.$timeout.cancel(n.handleCkPwdAndWithdrawalPWD),
                    $("#WithdrawalPWD").valid());
                });
            }),
            (t.prototype.RefreshAccountName = function (t) {
              return t === null || t === undefined || t === ""
                ? ""
                : ((t = n.Helpers.GetLatiniseString(t.toUpperCase())),
                  n.Formatter.TrimAndReplaceDoubleSpace(t));
            }),
            (t.prototype.AccountNameOnBlur = function () {
              this.model.UpdateModel.AccountName = this.RefreshAccountName(
                this.model.UpdateModel.AccountName
              );
              this.model.IsAccountNameValid =
                n.Validator.IsAccountNameFormatValid(
                  this.model.UpdateModel.AccountName
                );
              $("#AccountName").valid();
            }),
            (t.prototype.AccountNameOfBankOnBlur = function () {
              ((this.onFocusAccountNameOfBank = !1),
              this.model.RegisterMemberAdditionallyByBankInfoPostModel
                .AccountName &&
                this.model.RegisterMemberAdditionallyByBankInfoPostModel
                  .AccountName !== "") &&
                ((this.model.RegisterMemberAdditionallyByBankInfoPostModel.AccountName =
                  this.RefreshAccountName(
                    this.model.RegisterMemberAdditionallyByBankInfoPostModel
                      .AccountName
                  )),
                (this.model.VerifiedAccountNameOfBank =
                  n.Validator.IsAccountNameFormatValid(
                    this.model.RegisterMemberAdditionallyByBankInfoPostModel
                      .AccountName
                  )),
                $("#AccountNameOfBank").valid());
            }),
            (t.prototype.ModalCancel = function () {
              jQuery.fancybox.close();
            }),
            (t.prototype.BindingBankInfo = function () {
              var t = this;
              this.model.BankInfoPostModel.LanguageCode =
                this.appConfig.LanguageCode;
              this.model.BankInfoPostModel.CountryID = this.appConfig.Country;
              this.registerAdditionallySvc
                .GetBankCodeInfoByLanguageCode(this.model.BankInfoPostModel)
                .then(function (n) {
                  t.model.BankInfoList = n.filter(function (n) {
                    return n.BankCodeID !== "000";
                  });
                  t.model.DropdownBankInfoList = angular.copy(
                    n.filter(function (n) {
                      return n.BankCodeID !== "000" && n.State !== 2;
                    })
                  );
                })
                .catch(function (i) {
                  t.model.BankInfoList = null;
                  n.Helpers.AlertSwitch(i);
                });
            }),
            (t.prototype.VerifyBankInfoNextAllow = function () {
              var t = this.model.RegisterMemberAdditionallyByBankInfoPostModel,
                r = t.AccountName,
                u = t.PayeeAccountNo,
                o = t.BankCodeID,
                s = t.BankName,
                p = t.BankProID,
                w = t.BankCityID,
                i = t.WithdrawalPWD,
                h = r != void 0 && r !== "",
                c = u !== "" && /^\d{5,19}$/.test(u.replace(/\s/g, "")),
                f = o !== "",
                e;
              if (
                (this.appContext.UserProfile.IsBankAccountAttribution &&
                  (f = s !== ""),
                (e = h && c && f),
                !e)
              )
                return (
                  this.model.ElementManager.DisableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  ),
                  !1
                );
              var l = n.Validator.IsPasswordFormatValid(i),
                a = n.Validator.IsPasswordTooSimple(i),
                v =
                  this.appContext.UserProfile.AccountID.toLowerCase() ===
                  i.toLowerCase(),
                y =
                  l &&
                  !a &&
                  !v &&
                  this.isPasswordDifferentWithdrawalPasswordForBankPhase;
              return y
                ? (this.model.ElementManager.EnableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  ),
                  !0)
                : (this.model.ElementManager.DisableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  ),
                  !1);
            }),
            (t.prototype.BindBankCardKeyupValid = function (n) {
              if (n != null) {
                var t = n.target;
                if (t.value === "") {
                  this.model.ElementManager.DisableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  );
                  return;
                }
                this.VerifyBankInfoNextAllow();
              }
            }),
            (t.prototype.CheckPwdAndWithdrawalPWDOfBank = function () {
              this.isPasswordDifferentWithdrawalPasswordForBankPhase = !0;
              this.VerifyBankInfoNextAllow();
            }),
            (t.prototype.ChangeAgreementByBankAcoount = function () {
              this.model.ElementManager.DisableElement(
                "RegisterAdditionallyWithBankInfoNextStepButton"
              );
              this.model.AgreementOfWithdrawalPWD =
                this.IsWithdrawalPWDCheckboxOff()
                  ? this.model.CheckboxOn
                  : this.model.CheckboxOff;
              this.VerifyBankInfoNextAllow();
            }),
            (t.prototype.ChangeBankInfo = function () {
              var t = this,
                n = _.filter(this.model.BankInfoList, function (n) {
                  return (
                    n.BankCodeID ===
                    t.model.RegisterMemberAdditionallyByBankInfoPostModel
                      .BankCodeID
                  );
                });
              n.length > 0
                ? ((this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankName =
                    n[0].BankCodeName),
                  this.VerifyBankInfoNextAllow())
                : ((this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankName =
                    ""),
                  this.model.ElementManager.DisableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  ));
            }),
            (t.prototype.RegisterAdditionallyWithBankInfoNextStep =
              function () {
                var t = this;
                if ($("#bankInfoNextStep").valid()) {
                  if (
                    this.model.RegisterMemberAdditionallyByBankInfoPostModel
                      .BankCodeID == null ||
                    this.model.RegisterMemberAdditionallyByBankInfoPostModel
                      .BankCodeID == ""
                  ) {
                    n.Helpers.AlertEvent(
                      EventAlertEnum.Search_NoCondition,
                      "請選擇銀行"
                    );
                    return;
                  }
                  this.model.ElementManager.DisableElement(
                    "RegisterAdditionallyWithBankInfoNextStepButton"
                  );
                  this.additionallyVerifyType =
                    VerifyUsageEnum.BankAccountIdentityVerify;
                  this.registerAdditionallySvc
                    .CheckPwdAndWithdrawalPWD({
                      WithdrawPWD:
                        this.model.RegisterMemberAdditionallyByBankInfoPostModel
                          .WithdrawalPWD,
                      AccountName:
                        this.model.RegisterMemberAdditionallyByBankInfoPostModel
                          .AccountName,
                    })
                    .then(function (n) {
                      if (
                        ((t.isPasswordDifferentWithdrawalPasswordForBankPhase =
                          n),
                        !n)
                      ) {
                        $("#WithdrawalPWDOfBank").valid();
                        return;
                      }
                      t.model.RegisterNextStep =
                        t.REGISTER_STEP.BANK_CARD_NEXT_STEP_1;
                      t.model.RegisterNextStepChild =
                        t.REGISTER_STEP.BANK_CARD_NEXT_STEP_CHILD_1;
                    });
                }
              }),
            (t.prototype.NextStepFancyboxClose = function () {
              this.model.RegisterNextStepChild ==
                this.REGISTER_STEP.REGISTER_END &&
                (jQuery.fancybox.close(),
                this.messageBus.Emit(
                  "registerAdditionallyNoIdentifySuccess",
                  ""
                ),
                this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnRegisterAdditionallyFinish,
                  null
                ));
              this.model.ElementManager.EnableElement(
                "RegisterAdditionallyWithBankInfoNextStepButton"
              );
              this.model.RegisterNextStep = this.REGISTER_STEP.INITIAL;
            }),
            (t.prototype.CheckBeforeRegisterMemberAdditionallyByBankInfo =
              function () {
                this.CheckBeforeRegisterMemberAdditionallyByBankInfoDebounceFunc();
              }),
            (t.prototype.BankAccountVerifyByBankInfo = function () {
              var t = this;
              this.additionallyVerifyType = VerifyUsageEnum.BankAccountVerify;
              this.registerAdditionallySvc
                .CheckBankAccountCheckSettingIsOpen()
                .then(function (n) {
                  n || (t.additionallyVerifyType = VerifyUsageEnum.None);
                  t.$timeout(function () {
                    var n = t.GetRegisterMemberAdditionallyPostModel(
                      t.model.RegisterMemberAdditionallyByBankInfoPostModel
                    );
                    t.RegisterAdditionallyBankInfoWithVerified(n);
                  });
                })
                .catch(function (t) {
                  n.Helpers.AlertSwitch(t);
                });
            }),
            (t.prototype.GetRegisterMemberAdditionallyPostModel = function (n) {
              var t =
                  this.model.RegisterMemberAdditionallyWithVerifiedPostModel,
                i;
              return (
                angular.copy(n, t),
                (t.AdditionallyStatus =
                  this.appContext.UserProfile.AdditionalStatus),
                (t.IsUseWithdrawalPWD = !this.IsWithdrawalPWDCheckboxOff()),
                (t.VerifyUsage = this.additionallyVerifyType),
                (i = this.model.BankInfoList.filter(function (n) {
                  return t.BankCodeID === n.BankCodeID;
                })),
                i && i.length > 0 && (t.BankAbbreviation = i[0].Abbreviation),
                t.WithdrawalPWD != "" &&
                  (t.WithdrawalPWD = this.toolsSvc.Base64Encode(
                    t.WithdrawalPWD
                  )),
                t
              );
            }),
            (t.prototype.RegisterAdditionallyBankInfoWithVerified = function (
              t,
              i
            ) {
              var r = this,
                u = i ? i : this.$q.defer();
              return (
                this.registerAdditionallySvc
                  .RegisterMemberAdditionally(t)
                  .then(function (i) {
                    i.AdditionallyWithVerifiedStatus ===
                      AdditionallyWithVerifiedStatusEnum.LastChanceCount &&
                      ((r.model.LastChanceCount = i.LastChanceCount),
                      (r.model.RegisterNextStepChild =
                        r.REGISTER_STEP.BANK_CARD_NEXT_STEP_CHILD_3));
                    i.AdditionallyWithVerifiedStatus ===
                      AdditionallyWithVerifiedStatusEnum.Success &&
                      r.registerAdditionallySvc
                        .CheckNeedAdditionallyAttachFile({
                          AccountName: t.AccountName,
                        })
                        .then(function (t) {
                          jQuery.fancybox.close();
                          r.appContextService.GetUserProfile();
                          t
                            ? r.registerAdditionallySvc
                                .GetIsIDVerifiedPicUploadEnable()
                                .then(function (n) {
                                  n
                                    ? ((r.isAttachUploadRefreshInfo = !0),
                                      (r.model.RegisterNextStep =
                                        r.REGISTER_STEP.BANK_CARD_NEXT_STEP_1),
                                      (r.model.RegisterNextStepChild =
                                        r.REGISTER_STEP.BANK_CARD_NEXT_STEP_CHILD_2))
                                    : ((r.model.RegisterNextStep =
                                        r.REGISTER_STEP.INITIAL),
                                      (r.model.RegisterNextStepChild =
                                        r.REGISTER_STEP.INITIAL),
                                      $("#msgID").show());
                                })
                            : n.Helpers.Alert(
                                "",
                                SweetAlertTypeEnum.none,
                                null,
                                i.Message,
                                null,
                                function () {
                                  r.messageBus.Emit(
                                    "registerAdditionallyNoIdentifySuccess",
                                    ""
                                  );
                                  r.messageBus.Emit(
                                    n.ConstDefinition.MessageBusEventName
                                      .OnRegisterAdditionallyFinish,
                                    null
                                  );
                                  r.$timeout(function () {
                                    r.model.RegisterNextStep =
                                      r.REGISTER_STEP.INITIAL;
                                    r.model.RegisterStep =
                                      r.REGISTER_STEP.INITIAL;
                                    r.model.RegisterNextStepChild =
                                      r.REGISTER_STEP.INITIAL;
                                  }, 1);
                                },
                                null,
                                null,
                                !1,
                                !1
                              );
                        });
                    u.resolve(!0);
                  })
                  .catch(function (n) {
                    r.model.RegisterNextStep = r.REGISTER_STEP.INITIAL;
                    r.model.RegisterNextStepChild = r.REGISTER_STEP.INITIAL;
                    r.VerifiedRegisterAdditionallyError(n);
                    u.reject(!1);
                  })
                  .finally(function () {
                    r.model.ElementManager.DisableElement(
                      "RegisterAdditionallyWithBankInfoNextStepButton"
                    );
                    r.checkBeforeRegisterDisabled = !1;
                  }),
                u.promise
              );
            }),
            (t.prototype.VerifiedRegisterAdditionallyError = function (t) {
              var i = this;
              (this.additionallyVerifyType ===
                VerifyUsageEnum.BankAccountIdentityVerify ||
                this.additionallyVerifyType ===
                  VerifyUsageEnum.BankAccountVerify) &&
                ((this.model.RegisterMemberAdditionallyByBankInfoPostModel.PayeeAccountNo =
                  ""),
                this.ClearBankAccountAttribution());
              switch (t.Error.Code) {
                case AdditionallyWithVerifiedStatusEnum.Fail:
                  this.model.RegisterNextStepChild = this.REGISTER_STEP.INITIAL;
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    null,
                    t.Error.Message,
                    null,
                    function () {
                      i.InitBankAccountAttributionInfo();
                      jQuery.fancybox.close();
                    }
                  );
                  break;
                case AdditionallyWithVerifiedStatusEnum.OverVerifyLimit:
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message
                  );
                  this.InitBankAccountAttributionInfo();
                  break;
                case AdditionallyWithVerifiedStatusEnum.IdentityVerifyOverMax:
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    null,
                    t.Error.Message,
                    null,
                    function () {
                      i.appContext.UserProfile.IsIdentityVerifyOverMax = !0;
                      window.location.reload(!0);
                    }
                  );
                  break;
                case AdditionallyWithVerifiedStatusEnum.AdditionallyInfoChanged:
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    null,
                    t.Error.Message,
                    null,
                    function () {
                      window.location.reload(!0);
                    }
                  );
                  break;
                case AdditionallyWithVerifiedStatusEnum.BankAccountExist:
                  this.model.RegisterMemberAdditionallyByBankInfoPostModel.PayeeAccountNo =
                    "";
                  this.model.RegisterMemberAdditionallyWithVerifiedPostModel.PayeeAccountNo =
                    "";
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message
                  );
                  this.$timeout(function () {
                    i.VerifyBankInfoNextAllow();
                  });
                  break;
                case AdditionallyWithVerifiedStatusEnum.BankAccountVerifyOverLimit:
                  this.InitBankAccountAttributionInfo();
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function () {
                      window.location.reload(!0);
                    }
                  );
                  break;
                case AdditionallyWithVerifiedStatusEnum.IsNeedToIdentityVerify:
                default:
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message
                  );
                  this.$timeout(function () {
                    i.VerifyBankInfoNextAllow();
                  });
              }
            }),
            (t.prototype.ClearBankAccountAttribution = function () {
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankName =
                "";
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankCodeID =
                "";
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankProID = 0;
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.BankCityID = 0;
            }),
            (t.prototype.InitBankAccountAttributionInfo = function () {
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.PayeeAccountNo =
                "";
              this.ClearBankAccountAttribution();
              this.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD =
                "";
              this.model.AgreementOfWithdrawalPWD = this.model.CheckboxOn;
              this.model.ElementManager.DisableElement(
                "RegisterAdditionallyWithBankInfoNextStepButton"
              );
            }),
            (t.prototype.PayeeAccountNoVerifyOnBlur = function () {
              var i = this,
                t,
                r,
                u,
                f;
              if (
                !this.IsBankAccountAttributionQuerying() &&
                ((t =
                  this.model.RegisterMemberAdditionallyByBankInfoPostModel
                    .PayeeAccountNo),
                (r = $("#BankAccount").valid() && t.length >= 5),
                r)
              ) {
                if (((u = /^9704/.test(t)), u)) {
                  f =
                    n.Helpers.ChangeLanguage("暫不支持卡號提款") +
                    ",<br />" +
                    n.Helpers.ChangeLanguage("請使用銀行帳號進行提款，謝謝！");
                  n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, f);
                  this.model.RegisterMemberAdditionallyByBankInfoPostModel.PayeeAccountNo =
                    "";
                  return;
                }
                this.model.MemberWithdrawalBankInfoGetByPayeeAccountNoModel.PayeeAccountNo =
                  t.replace(/\s/g, "");
                this.SetBankAccountAttributionQuerying(!0);
                this.registerAdditionallySvc
                  .VerifyBankAccountExist(
                    this.model.MemberWithdrawalBankInfoGetByPayeeAccountNoModel
                  )
                  .then(function () {})
                  .catch(function (t) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      t.Error.Message
                    );
                    i.model.RegisterMemberAdditionallyByBankInfoPostModel.PayeeAccountNo =
                      "";
                  })
                  .finally(function () {
                    i.SetBankAccountAttributionQuerying(!1);
                  });
              }
            }),
            (t.prototype.IsBankAccountAttributionQuerying = function () {
              return this.bankAccountAttributionQueryingList.length !== 0;
            }),
            (t.prototype.SetBankAccountAttributionQuerying = function (n) {
              n
                ? this.bankAccountAttributionQueryingList.push(!0)
                : this.bankAccountAttributionQueryingList.pop();
            }),
            (t.prototype.AccountNameOfBankOnFocus = function () {
              this.onFocusAccountNameOfBank = !0;
            }),
            (t.prototype.CheckPwdAndWithdrawalPWDByBankInfoOnBlur =
              function () {
                var t = this,
                  n = this.model.CheckIsForcedToVerifyModel;
                n.WithdrawPWD =
                  this.model.RegisterMemberAdditionallyByBankInfoPostModel.WithdrawalPWD;
                n.AccountName =
                  this.model.RegisterMemberAdditionallyByBankInfoPostModel.AccountName;
                this.registerAdditionallySvc
                  .CheckPwdAndWithdrawalPWD(n)
                  .then(function (n) {
                    t.isPasswordDifferentWithdrawalPasswordForBankPhase = n;
                    $("#WithdrawalPWDOfBank").valid();
                  })
                  .finally(function () {
                    t.VerifyBankInfoNextAllow();
                  });
              }),
            (t.prototype.IsWithdrawalPWDCheckboxOff = function () {
              return (
                this.model.AgreementOfWithdrawalPWD === this.model.CheckboxOff
              );
            }),
            (t.prototype.ResetUploadModel = function () {
              this.picFile = null;
              this.picFile2 = null;
              this.picFileError = !1;
              this.picFileError2 = !1;
              this.disableUpload = !0;
              this.isUploading = !1;
              this.progress = 0;
            }),
            (t.prototype.ResetPic = function (n) {
              return n == 1
                ? ((this.disableUpload = !0),
                  (this.isInitPic1 = !0),
                  (this.picFileError = !1),
                  !0)
                : n == 2
                ? ((this.disableUpload = !0),
                  (this.isInitPic2 = !0),
                  (this.picFileError2 = !1),
                  !0)
                : void 0;
            }),
            (t.prototype.CheckFile = function (t, i) {
              var e;
              if (
                (i == 1 && (this.isInitPic1 = !0),
                i == 2 && (this.isInitPic2 = !0),
                t.length == 0 || t[t.length - 1].size == 0)
              )
                return (
                  i == 1 && (this.picFile = null),
                  i == 2 && (this.picFile2 = null),
                  (this.disableUpload = !0),
                  !1
                );
              var u = !1,
                f = !1,
                r = t[t.length - 1].name.split(".").pop().toLowerCase();
              if (
                (t[t.length - 1].name.split(".").length >= 2 &&
                  (r == "jpeg" || r == "jpg" || r == "png") &&
                  (u = !0),
                (t[t.length - 1].type == "image/jpeg" ||
                  t[t.length - 1].type == "image/png" ||
                  t[t.length - 1].type == "image/jpg") &&
                  (f = !0),
                !u || !f)
              )
                return (
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage("僅接受JPG、PNG圖檔")
                  ),
                  i == 1 && (this.picFile = null),
                  i == 2 && (this.picFile2 = null),
                  (this.disableUpload = !0),
                  !1
                );
              if (
                ((e = t[t.length - 1].size / 1048576),
                e > this.verifyImageMaxFileSizeMb)
              )
                return (
                  i == 1 && ((this.picFile = null), (this.picFileError = !0)),
                  i == 2 && ((this.picFile2 = null), (this.picFileError2 = !0)),
                  (this.disableUpload = !0),
                  !1
                );
              i == 1 &&
                ((this.picFileError = !1),
                (this.picFile = t[t.length - 1]),
                (this.isInitPic1 = !1));
              i == 2 &&
                ((this.picFileError2 = !1),
                (this.picFile2 = t[t.length - 1]),
                (this.isInitPic2 = !1));
              this.picFile != null &&
                this.picFile2 != null &&
                (this.disableUpload = !1);
            }),
            (t.prototype.UploadFiles = function () {
              var t = this;
              this.disableUpload = !0;
              this.progress = 0;
              this.uploadFile(this.picFile)
                .then(function (i) {
                  t.uploadFile(t.picFile2, !1)
                    .then(function (r) {
                      var u =
                        new n.Models.VN.UpdateMemberInfoAttachFileUrlPostModel();
                      u.AttachFileUrl1 = i;
                      u.AttachFileUrl2 = r;
                      t.registerAdditionallySvc
                        .UpdateMemberInfoAttachFileUrl(u)
                        .then(function () {
                          jQuery.fancybox.close();
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            null,
                            n.Helpers.ChangeLanguage(
                              "您已完善資料，待資料審核通過則開放存款功能，請耐心等待"
                            ),
                            null,
                            function () {
                              t.$timeout(function () {
                                t.model.RegisterNextStep =
                                  t.REGISTER_STEP.INITIAL;
                                t.model.RegisterStep = t.REGISTER_STEP.INITIAL;
                                t.model.RegisterNextStepChild =
                                  t.REGISTER_STEP.INITIAL;
                                t.messageBus.Emit(
                                  "registerAdditionallyNoIdentifySuccess",
                                  ""
                                );
                                t.messageBus.Emit(
                                  n.ConstDefinition.MessageBusEventName
                                    .OnRegisterAdditionallyFinish,
                                  null
                                );
                              }, 1);
                            },
                            null,
                            null,
                            !1,
                            !1
                          );
                          t.appContextService.GetUserProfile();
                        })
                        .catch(function (n) {
                          t.UploadErrorUnlock(n.Error);
                        });
                    })
                    .catch(function (n) {
                      t.UploadErrorUnlock(n);
                    });
                })
                .catch(function (n) {
                  t.UploadErrorUnlock(n);
                });
            }),
            (t.prototype.uploadFile = function (t, i) {
              var u = this,
                r;
              return (
                i === void 0 && (i = !0),
                (r = this.$q.defer()),
                i && (this.progress = 0),
                this.uploader
                  .upload({ url: this.uploadUrl, data: { file: t } })
                  .then(
                    function (n) {
                      n.data != null && n.data.Error == null
                        ? r.resolve(n.data.FileName)
                        : ((u.isUploading = !1), r.reject(n.data.Error));
                    },
                    function () {
                      r.reject(n.Helpers.ChangeLanguage("上傳失敗"));
                    },
                    function (n) {
                      u.isUploading = !0;
                      i &&
                        (u.progress = Math.min(
                          100,
                          (100 * n.loaded) / n.total
                        ));
                    }
                  ),
                r.promise
              );
            }),
            (t.prototype.UploadErrorUnlock = function (t) {
              var i = this;
              this.disableUpload = !1;
              this.isUploading = !1;
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                t.Message,
                null,
                function () {
                  i.CloseUploadModal();
                }
              );
            }),
            (t.$name = "RegisterAdditionallyCtrl"),
            (t.$inject = [
              "$q",
              "$interval",
              "$timeout",
              "RegisterAdditionallySvc",
              "appContext",
              "AppContextSvc",
              "messageBus",
              "ObjectDiff",
              "LogSvc",
              "blockUI",
              "appConfig",
              "ToolsSvc",
              "Upload",
            ]),
            t
          );
        })();
        t.RegisterAdditionallyCtrl = i;
      })((i = t.VN || (t.VN = {})));
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.VN.RegisterAdditionallyCtrl.$name,
  OBSApp.Controllers.VN.RegisterAdditionallyCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n, t) {
          this.$timeout = n;
          this.messageBus = t;
          this.OnKuAnchorVideo();
        }
        return (
          (t.prototype.OnKuAnchorVideo = function () {
            var i = this,
              r = jQuery("#kuAnchorVideo"),
              t = r.find("video")[0];
            this.messageBus.On(
              n.ConstDefinition.MessageBusEventName.OnBannerADKuAnchorVideoPlay,
              function (n, r) {
                t.src = r.url;
                i.$timeout(function () {
                  t.play();
                  $(t).show();
                }, 400);
              }
            );
          }),
          (t.prototype.CloseKuAnchorVideo = function () {
            var n = jQuery("#kuAnchorVideo"),
              t = n.find("video")[0];
            t.pause();
            $(t).hide();
            n.fadeOut();
          }),
          (t.$name = "BannerPopupCtrl"),
          (t.$inject = ["$timeout", "messageBus"]),
          t
        );
      })();
      t.BannerPopupCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.BannerPopupCtrl.$name,
  OBSApp.Controllers.BannerPopupCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var f = (function () {
          function n() {
            this.CreateModel = new i();
          }
          return n;
        })(),
        i,
        r,
        u;
      t.CallbackServiceViewModel = f;
      i = (function () {
        function t() {
          this.CallbackLanguageID = null;
          this.Phone = "";
          this.CallbackLanguageID = n.Helpers.GetCallbackLanguageID();
        }
        return t;
      })();
      t.CallbackServiceMemberModel = i;
      r = (function () {
        function n() {
          this.CssClass = null;
        }
        return n;
      })();
      t.CallbackLanguageInfo = r;
      u = (function () {
        function n() {
          this.CssClass = null;
        }
        return n;
      })();
      t.QuestionTypeInfo = u;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CreateMemberServiceCenterCallback",
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
          (n.prototype.GetCallbackLanguageInfoByLanguageCode = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetCallbackLanguageInfoByLanguageCode",
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
          (n.prototype.GetQuestionTypeInfoByLanguageCode = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetQuestionTypeInfoByLanguageCode",
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
          (n.prototype.CheckLogin = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/MemberInfo/CheckLogin", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetCommonCompetence = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Common/GetCommonCompetence", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "CallbackServiceSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.CallbackServiceSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.CallbackServiceSvc.$name,
  OBSApp.Services.CallbackServiceSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e) {
          var o = this;
          this.callbackServiceSvc = t;
          this.messageBus = i;
          this.$cookies = r;
          this.appContext = u;
          this.timeout = f;
          this.appConfig = e;
          this.InitializeViewModel();
          i.On("fancyBoxClose", function () {
            o.model.CreateModel = new n.Models.CallbackServiceMemberModel();
            o.ClickCallbackLanguageInfo(o.model.CreateModel.CallbackLanguageID);
            o.ClickQuestionTypeInfo(0);
            o.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin &&
              f(function () {
                return o.CheckLogin();
              }, 500);
            jQuery.fancybox.close();
          });
          i.On(
            n.ConstDefinition.MessageBusEventName.OnSignInFinish,
            function () {
              o.CheckLogin();
            }
          );
          i.On(
            n.ConstDefinition.MessageBusEventName.OnSignOutFinish,
            function () {
              o.CheckLogin();
            }
          );
          i.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function () {
              o.CheckLogin();
            }
          );
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.CallbackServiceViewModel();
            this.model.CallbackServiceEnabled = $("#hd_IsServiceCenter").val();
            this.GetCallbackLanguageInfoByLanguageCode();
            this.GetQuestionTypeInfoByLanguageCode();
            this.GetCommonCompetence();
          }),
          (t.prototype.RegisterValidation = function () {
            jQuery.validator.addMethod("ckSpace", function (n) {
              return /^[^\x20]{0,}$/.test(n);
            });
            jQuery.validator.addMethod("ckAccountRule", function (n) {
              return /^[a-zA-Z0-9]{0,10}$/.test(n);
            });
            jQuery.validator.addMethod("requiredPhone", function (n) {
              return n == "" || n == undefined || n == null ? !1 : !0;
            });
            jQuery.validator.addMethod("ckMinlength", function (t) {
              return t != "" || t != undefined
                ? n.Validator.IsInternationalCallMinLengthValid(t)
                : !0;
            });
            jQuery.validator.addMethod("ckQuestion", function (n) {
              return n == "" || n == undefined ? !1 : !0;
            });
            jQuery.validator.addMethod("ckLanguageInfo", function (n) {
              return n == "" || n == undefined ? !1 : !0;
            });
          }),
          (t.prototype.CheckAccount = function () {
            var t;
            return this.model.CreateModel.AccountID === "" ||
              this.model.CreateModel.AccountID === undefined
              ? ((t = n.Helpers.ChangeLanguage("此欄位必填")),
                n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, t),
                !1)
              : /^[^\x20]{0,}$/.test(this.model.CreateModel.AccountID)
              ? /^[a-zA-Z0-9]{4,10}$/.test(this.model.CreateModel.AccountID)
                ? !0
                : ((t =
                    n.Helpers.ChangeLanguage("請輸入4 ~ 10碼英文(可含數字)")),
                  n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, t),
                  !1)
              : ((t = n.Helpers.ChangeLanguage("請勿填寫空白")),
                n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, t),
                !1);
          }),
          (t.prototype.RegisterMember = function (t) {
            var i = this;
            this.callbackServiceSvc
              .CreateMemberServiceCenterCallback(t)
              .then(function (r) {
                switch (r) {
                  case ServiceCenterMemberEnum.UnProcessedData:
                  case ServiceCenterMemberEnum.UnProcessedDataByIPAddress:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage("您的申請正在處理中，請稍後！")
                    );
                    break;
                  case ServiceCenterMemberEnum.SystemBusyWithPhoneOrAccountLimit:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "您提交的太頻繁，請稍後再試！！！"
                      )
                    );
                    break;
                  case ServiceCenterMemberEnum.SystemBusyWithIPAddressLimit:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage("系統繁忙中，請稍候再試！！")
                    );
                    break;
                  case ServiceCenterMemberEnum.SystemBusyWithCookieLimit:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage("系統繁忙中，請稍候再試！")
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
                    i.GetCommonCompetence();
                    break;
                  default:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "回電服務申請成功，客服人員將盡速致電給您，請耐心等候，謝謝！"
                      )
                    );
                }
                i.model.CreateModel.CallbackLanguageID =
                  n.Helpers.GetCallbackLanguageID();
                i.model.CreateModel.QuestionTypeID = null;
                i.model.CreateModel.Phone = "";
                i.ClickCallbackLanguageInfo(
                  i.model.CreateModel.CallbackLanguageID
                );
                i.ClickQuestionTypeInfo(0);
                jQuery.fancybox.close();
                i.appContext.LoginStatus != n.Models.LoginStatusEnum.Loggedin &&
                  (t.AccountID = "");
              })
              .catch(function (r) {
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage(r.Error.Message)
                );
                i.appContext.LoginStatus != n.Models.LoginStatusEnum.Loggedin &&
                  (t.AccountID = "");
              });
          }),
          (t.prototype.GetCallbackLanguageInfoByLanguageCode = function () {
            var n = this;
            this.callbackServiceSvc
              .GetCallbackLanguageInfoByLanguageCode()
              .then(function (t) {
                n.model.CallbackLanguageInfo = t;
                n.ClickCallbackLanguageInfo(
                  n.model.CreateModel.CallbackLanguageID
                );
              })
              .catch(function () {});
          }),
          (t.prototype.GetQuestionTypeInfoByLanguageCode = function () {
            var n = this;
            this.callbackServiceSvc
              .GetQuestionTypeInfoByLanguageCode()
              .then(function (t) {
                n.model.QuestionTypeInfo = t;
                n.model.QuestionTypeInfo.forEach(function (n) {
                  switch (n.QuestionTypeID) {
                    case 1:
                      n.CssClass = "btn_servPoint";
                      break;
                    case 2:
                      n.CssClass = "btn_servSport";
                      break;
                    case 3:
                      n.CssClass = "btn_servBall";
                      break;
                    case 4:
                      n.CssClass = "btn_servLive";
                      break;
                    case 5:
                      n.CssClass = "btn_servSign";
                      break;
                    case 6:
                      n.CssClass = "btn_servSlot";
                  }
                });
                n.model.QuestionTypeInfo = t.filter(function (n) {
                  return n.QuestionTypeID != 7;
                });
              })
              .catch(function () {});
          }),
          (t.prototype.CheckLogin = function () {
            this.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin
              ? ((this.model.CreateModel.AccountID =
                  this.appContext.UserProfile.AccountID),
                (this.model.CreateModel.Phone =
                  this.appContext.UserProfile.CellPhone))
              : (this.model.CreateModel =
                  new n.Models.CallbackServiceMemberModel());
          }),
          (t.prototype.FancyboxClose = function () {
            $.fancybox.close();
          }),
          (t.prototype.GetCommonCompetence = function () {
            var n = this;
            this.callbackServiceSvc
              .GetCommonCompetence()
              .then(function (t) {
                n.model.CallbackServiceEnabled = t.IsServiceCenter ? 1 : 0;
              })
              .catch(function () {
                n.model.CallbackServiceEnabled = 0;
              });
          }),
          (t.prototype.ClickCallbackLanguageInfo = function (n) {
            var t = this;
            this.model.CallbackLanguageInfo.forEach(function (i) {
              i.CssClass = null;
              i.CallbackLanguageID == n &&
                ((t.model.CreateModel.CallbackLanguageID = n),
                (i.CssClass = "on"));
            });
          }),
          (t.prototype.ClickQuestionTypeInfo = function (n) {
            var t = this;
            this.model.QuestionTypeInfo.forEach(function (i) {
              i.CssClass = i.CssClass.replace(/ on/g, "");
              i.QuestionTypeID == n &&
                ((t.model.CreateModel.QuestionTypeID = n),
                (i.CssClass = i.CssClass + " on"),
                t.timeout(function () {
                  return $("#hidQuestionTypeID").valid();
                }));
            });
          }),
          (t.$name = "CallbackServiceCtrl"),
          (t.$inject = [
            "CallbackServiceSvc",
            "messageBus",
            "$cookies",
            "appContext",
            "$timeout",
            "appConfig",
          ]),
          t
        );
      })();
      t.CallbackServiceCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.CallbackServiceCtrl.$name,
  OBSApp.Controllers.CallbackServiceCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var r = (function () {
          function t() {
            this.CreateModel = new i();
            this.IsSendCaptcha = !1;
            this.IsRunningCustomerServiceState = !1;
            this.CountDownSecond = 30;
            this.DefaultCountDownSecond = $("#hfDefaultCountDownSecond").val();
            this.IsCellPhoneValid = !1;
            this.AgreementOfReceiveSMS = this.CheckboxOn;
            this.IsCountDownOver = !0;
            this.VerifyBtnName = n.Helpers.ChangeLanguage("讀取中");
            this.IsFirstTimeEnter = !0;
            this.IsCanNotUseSMSProvider = !1;
            this.IsCustomerServiceOverLimit = !1;
            this.VerifyModeErrorCode = 0;
          }
          return (
            Object.defineProperty(t.prototype, "CheckboxOn", {
              get: function () {
                return "checkBox on";
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "CheckboxOf", {
              get: function () {
                return "checkBox off";
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        i;
      t.CellPhoneVerifyViewModel = r;
      i = (function () {
        function n() {
          this.CellPhone = "";
          this.VerifyUsage = VerifyUsageEnum.ChangePhone;
          this.IsRunGeneralSMSStatus = !0;
        }
        return n;
      })();
      t.UpdateMemberInfoCellPhoneModel = i;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.UpdateMemberInfoCellPhoneVerified = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/UpdateMemberInfoCellPhoneVerified",
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
          (n.prototype.SendCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/SendCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.VerifyCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/VerifyCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckCellPhoneIsExist = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckCellPhoneIsExist",
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
          (n.prototype.GetVerifyMode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Common/GetVerifyMode",
              n
            );
          }),
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CreateMemberServiceCenterCallback",
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
          (n.prototype.CheckDisposableServiceCallBackReturnCaptchaCode =
            function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/MemberInfo/CheckDisposableServiceCallBackReturnCaptchaCode",
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
          (n.$name = "CellPhoneVerifySvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.CellPhoneVerifySvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.CellPhoneVerifySvc.$name,
  OBSApp.Services.CellPhoneVerifySvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o) {
          var s = this;
          this.$q = t;
          this.$interval = i;
          this.appContext = r;
          this.appContextService = u;
          this.messageBus = f;
          this.cellPhoneVerifySvc = e;
          this.timeout = o;
          this.tick = null;
          this.IsGetCaptcha = !0;
          this.IsDisabledCaptcha = !0;
          this.errorCellphone = "";
          this.sendVerifyCodeCount = 0;
          this.InitializeViewModel();
          f.On("fancyBoxClose", function () {
            s.appContext.UserProfile != null &&
              (s.InitializeViewModel(),
              o(function () {
                s.IsGetCaptcha = !0;
                s.model.CreateModel.AccountID =
                  s.appContext.UserProfile.AccountID;
                s.model.CreateModel.CellPhone =
                  s.appContext.UserProfile.CellPhone || "";
                s.model.IsCellPhoneValid = s.model.CreateModel.CellPhone != "";
              }));
          });
          f.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              i === n.Models.LoginStatusEnum.Loggedin &&
                ((s.model.CreateModel.AccountID =
                  s.appContext.UserProfile.AccountID),
                (s.model.CreateModel.CellPhone =
                  s.appContext.UserProfile.CellPhone || ""),
                (s.model.IsCellPhoneValid =
                  s.model.CreateModel.CellPhone != ""));
            }
          );
          f.On("fancyBoxBeforLoad", function (n, t) {
            t == "#popUpCellphoneVerify" && s.GetVerifyModeEvent();
          });
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.CellPhoneVerifyViewModel();
            this.$interval.cancel(this.tick);
          }),
          (t.prototype.RegisterValidation = function () {
            var t = this;
            jQuery.validator.addMethod("ckSpace", function (n) {
              return /^[^\x20]{0,}$/.test(n);
            });
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (i) {
                var r = n.Validator.IsCellPhoneByLengthFormatValid(i);
                return (t.model.IsCellPhoneValid = r), r;
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (i) {
              var r = n.Validator.IsCellPhoneFormatValid(i);
              return (t.model.IsCellPhoneValid = r), r;
            });
            jQuery.validator.addMethod("ckCaptchaCode", function (i) {
              return n.Validator.IsSMSCaptchaLengthValid(i)
                ? ((t.IsDisabledCaptcha = !1), !0)
                : ((t.IsDisabledCaptcha = !0), !1);
            });
          }),
          (t.prototype.CheckCellPhoneIsExist = function () {
            var n = this.$q.defer();
            return this.model.CreateModel.CellPhone.indexOf("*") != -1
              ? (n.resolve(!0), n.promise)
              : (this.cellPhoneVerifySvc
                  .CheckCellPhoneIsExist({
                    CellPhone: this.model.CreateModel.CellPhone,
                  })
                  .then(function () {
                    n.resolve(!0);
                  })
                  .catch(function (t) {
                    n.reject(t);
                  }),
                n.promise);
          }),
          (t.prototype.SendCaptcha = function () {
            var t = this,
              i = this.$q.defer();
            return ($(".error_t").hide(), this.model.IsCanNotUseSMSProvider)
              ? (this.CheckCellPhoneIsExist()
                  .then(function () {
                    t.SendCustomerService();
                  })
                  .catch(function (t) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      t.Error.Message
                    );
                    i.reject(!1);
                  }),
                i.resolve(!0),
                i.promise)
              : this.model.IsSendCaptcha
              ? (i.resolve(!0), i.promise)
              : (this.CheckCellPhoneIsExist()
                  .then(function () {
                    t.model.IsFirstTimeEnter = !1;
                    t.cellPhoneVerifySvc
                      .SendCaptcha(t.model.CreateModel)
                      .then(function (r) {
                        t.model.IsSendCaptcha = !0;
                        t.Countdown();
                        n.Validator.IsSMSCaptchaLengthValid(r.Message) &&
                          (t.model.CreateModel.CaptchaCode = r.Message);
                        t.model.SendCaptchaCodeMsg =
                          t.model.CurrentVerifyMode === SMSVerifyModeEnum.SMS
                            ? n.Helpers.ChangeLanguage(
                                "驗證碼已發送至您的手機，請查收。"
                              )
                            : n.Helpers.ChangeLanguage(
                                "電話正在撥出，請您留意接聽獲取驗證碼。"
                              );
                        t.model.IsCountDownOver = !1;
                        t.model.IsCellPhoneOverSendTime = !1;
                        t.IsGetCaptcha = !1;
                        t.sendVerifyCodeCount++;
                        t.CaptchaCodeOnChange();
                        t.GetVerifyModeEvent();
                        i.resolve(!0);
                      })
                      .catch(function (r) {
                        if (r.Error.Message.indexOf("NotCanUseProvider") > -1) {
                          t.model.IsCanNotUseSMSProvider = !0;
                          t.model.IsCellPhoneValid = !0;
                          t.model.IsSendCaptcha = !1;
                          t.IsGetCaptcha = !0;
                          t.model.VerifyBtnName = t.GetSendCaptchaButtonName();
                          i.reject(!1);
                          return;
                        }
                        !n.Helpers.IsNull(r.Error) &&
                          n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                          ((t.model.VerifyBtnName =
                            t.GetSendCaptchaButtonName()),
                          (t.model.IsCellPhoneOverSendTime = !0),
                          (t.model.IsCountDownOver = !0),
                          (t.model.IsCellPhoneValid = !1),
                          (t.errorCellphone = t.model.CreateModel.CellPhone));
                        n.Helpers.AlertSwitch(r);
                        t.GetVerifyModeEvent();
                        i.reject(!1);
                      });
                  })
                  .catch(function (r) {
                    t.model.CountDownSecond = t.model.DefaultCountDownSecond;
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      r.Error.Message
                    );
                    i.reject(!1);
                  }),
                i.promise);
          }),
          (t.prototype.VerifyCaptcha = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.CreateModel.CaptchaCode
              ? (this.CheckCellPhoneIsExist()
                  .then(function () {
                    if (t.model.IsFirstTimeEnter) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("請先獲取驗證碼")
                      );
                      i.reject(!1);
                      return;
                    }
                    var r = t.model.CreateModel;
                    r.IsRunGeneralSMSStatus = !t.model.IsCanNotUseSMSProvider;
                    t.cellPhoneVerifySvc
                      .VerifyCaptcha(r)
                      .then(function () {
                        return (
                          (t.model.CreateModel.AccountID =
                            t.appContext.UserProfile.AccountID),
                          (t.model.CreateModel.IsReceiveSMS =
                            t.model.AgreementOfReceiveSMS ===
                            t.model.CheckboxOn),
                          t.cellPhoneVerifySvc.UpdateMemberInfoCellPhoneVerified(
                            t.model.CreateModel
                          )
                        );
                      })
                      .then(function () {
                        return t.appContextService.GetUserProfile();
                      })
                      .then(function () {
                        var r, u;
                        t.messageBus.Emit("validCellPhoneSuccess", "");
                        t.appContext.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish
                          ? (window.opener == null
                              ? ((r = n.Helpers.GetSimpleFancyboxOptions()),
                                (r.padding = 15))
                              : (r = {
                                  topRatio: 0.8,
                                  padding: 15,
                                  helpers: { overlay: { closeClick: !1 } },
                                }),
                            (u = "#joinList"),
                            (r.href = u),
                            (r.afterClose = function () {
                              t.messageBus.Emit("fancyBoxClose", u || "");
                            }),
                            (r.beforeLoad = function () {
                              t.messageBus.Emit("fancyBoxBeforLoad", u || "");
                            }),
                            jQuery.fancybox.close(),
                            t.timeout(function () {
                              jQuery.fancybox(r);
                            }, 600))
                          : (jQuery.fancybox.close(),
                            t.messageBus.Emit(
                              n.ConstDefinition.MessageBusEventName
                                .OnRegisterAdditionallyFinish,
                              null
                            ));
                        i.resolve(!0);
                        return;
                      })
                      .catch(function (r) {
                        n.Helpers.AlertSwitch(r);
                        t.model.CreateModel.CaptchaCode = "";
                        t.CaptchaCodeOnChange();
                        i.reject(!1);
                        return;
                      });
                  })
                  .catch(function (r) {
                    t.model.CountDownSecond = t.model.DefaultCountDownSecond;
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      r.Error.Message
                    );
                    t.CaptchaCodeOnChange();
                    i.reject(!1);
                    return;
                  }),
                i.promise)
              : (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("請輸入驗證碼")
                ),
                i.reject(!1),
                i.promise);
          }),
          (t.prototype.Countdown = function () {
            var n = this;
            this.tick != null && this.$interval.cancel(this.tick);
            this.model.CountDownSecond = this.model.DefaultCountDownSecond;
            this.tick = this.$interval(function () {
              n.model.CountDownSecond <= 1
                ? ((n.model.IsSendCaptcha = !1),
                  (n.model.IsCellPhoneOverSendTime = !1),
                  n.$interval.cancel(n.tick),
                  (n.model.VerifyBtnName = n.GetSendCaptchaButtonName()),
                  (n.model.IsCountDownOver = !0),
                  (n.model.CountDownSecond = n.model.DefaultCountDownSecond))
                : ((n.model.IsSendCaptcha = !0), n.model.CountDownSecond--);
            }, 1e3);
          }),
          (t.prototype.ChangeAgreement = function () {
            this.model.AgreementOfReceiveSMS =
              this.model.AgreementOfReceiveSMS === this.model.CheckboxOf
                ? this.model.CheckboxOn
                : this.model.CheckboxOf;
          }),
          (t.prototype.IsCellPhoneValid = function () {
            this.IsGetCaptcha = !0;
            this.model.CreateModel.CaptchaCode = "";
            var t = n.Validator.IsCellPhoneFormatValid(
              this.model.CreateModel.CellPhone
            );
            t && this.model.CreateModel.CellPhone != this.errorCellphone
              ? (this.model.VerifyModeErrorCode == 2010 &&
                  this.GetVerifyModeEvent(),
                (this.model.IsCellPhoneValid = !0))
              : (this.model.IsCellPhoneValid = !1);
          }),
          (t.prototype.CaptchaCodeOnChange = function () {
            this.IsDisabledCaptcha = n.Validator.IsSMSCaptchaLengthValid(
              this.model.CreateModel.CaptchaCode
            )
              ? !1
              : !0;
          }),
          (t.prototype.GetVerifyModeEvent = function () {
            var t = this,
              i = new n.Models.VerifyMode();
            i.VerifyUsage = VerifyUsageEnum.ChangePhone;
            i.AccountID = this.model.CreateModel.AccountID;
            i.CellPhone = this.model.CreateModel.CellPhone;
            this.model.VerifyModeErrorCode = 0;
            this.cellPhoneVerifySvc
              .GetVerifyMode(i)
              .then(function (i) {
                t.model.CurrentVerifyMode = n.SiteCultureMethod.Provider()
                  .IsEnableSMSChangeMode
                  ? i
                  : SMSVerifyModeEnum.SMS;
                t.model.IsCanNotUseSMSProvider = !1;
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
                      window.location.reload(!0);
                    },
                    "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                  );
                  return;
                }
                t.model.CurrentVerifyMode = SMSVerifyModeEnum.SMS;
                t.model.IsCanNotUseSMSProvider = !0;
                t.model.VerifyModeErrorCode = i.Error.Code;
              })
              .finally(function () {
                t.model.VerifyBtnName = t.GetSendCaptchaButtonName();
              });
          }),
          (t.prototype.GetSendCaptchaButtonName = function () {
            if (this.model.IsSendCaptcha)
              return n.Helpers.ChangeLanguage("發送中");
            if (this.model.IsCanNotUseSMSProvider)
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (this.model.CurrentVerifyMode) {
              case SMSVerifyModeEnum.SMS:
                return this.sendVerifyCodeCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return n.Helpers.ChangeLanguage("語音");
              default:
                return n.Helpers.ChangeLanguage("讀取中");
            }
          }),
          (t.prototype.SendCustomerService = function () {
            var n = this;
            this.CheckIsServiceCallbackCreated().then(function (t) {
              t || n.CreateMemberServiceCenterCallback();
            });
          }),
          (t.prototype.CheckIsServiceCallbackCreated = function () {
            var t = this,
              i = this.$q.defer(),
              r;
            return (
              (this.model.VerifyBtnName = this.GetSendCaptchaButtonName()),
              (r = {
                CellPhone: this.model.CreateModel.CellPhone,
                AccountID: this.model.CreateModel.AccountID,
                QuestionTypeID: 13,
              }),
              this.cellPhoneVerifySvc
                .CheckDisposableServiceCallBackReturnCaptchaCode(r)
                .then(function (r) {
                  (r == "NOT=0" || r == "NOT=1") &&
                    (r == "NOT=0" && (t.model.IsCustomerServiceOverLimit = !0),
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + "！！"
                    ),
                    i.resolve(!0));
                  r != "1" && n.Validator.IsSMSCaptchaLengthValid(r)
                    ? ((t.model.CreateModel.CaptchaCode = r),
                      (t.model.IsSendCaptcha = !0),
                      (t.IsGetCaptcha = !1),
                      (t.IsDisabledCaptcha = !1),
                      (t.model.IsCellPhoneValid = !0),
                      (t.model.IsFirstTimeEnter = !1),
                      jQuery.fancybox.update(),
                      i.resolve(!0))
                    : i.resolve(!1);
                })
                .catch(function (t) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message
                  );
                  i.resolve(!0);
                })
                .finally(function () {
                  t.model.VerifyBtnName = t.GetSendCaptchaButtonName();
                  t.model.IsRunningCustomerServiceState = !0;
                }),
              i.promise
            );
          }),
          (t.prototype.CreateMemberServiceCenterCallback = function () {
            var i = this,
              t = new n.Models.CallbackServiceMemberModel();
            t.AccountID = this.model.CreateModel.AccountID;
            t.CallbackLanguageID = n.Helpers.GetCallbackLanguageID();
            t.LevelType = 0;
            t.QuestionTypeID = 13;
            t.Phone = this.model.CreateModel.CellPhone;
            this.cellPhoneVerifySvc
              .CreateMemberServiceCenterCallback(t)
              .then(function (t) {
                switch (t) {
                  case ServiceCenterMemberEnum.UnProcessedData:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + "！！"
                    );
                    break;
                  case ServiceCenterMemberEnum.Success:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + "！"
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
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + "！"
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
                i.model.VerifyBtnName = i.GetSendCaptchaButtonName();
              });
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            return n.Helpers.IsNullOrEmpty(this.model.VerifyBtnName)
              ? ""
              : this.model.VerifyBtnName == n.Helpers.ChangeLanguage("讀取中")
              ? "sentCellCode btn-disabled"
              : this.model.IsCanNotUseSMSProvider
              ? "sentCellCode btnSendVerifyCaptcha1"
              : this.model.CurrentVerifyMode == SMSVerifyModeEnum.Voice &&
                $("#btnSendVerifyCaptcha1").text() !=
                  n.Helpers.ChangeLanguage("發送中")
              ? "sentCellCode voice"
              : this.sendVerifyCodeCount > 0
              ? "sentCellCode again"
              : "sentCellCode";
          }),
          (t.prototype.GetVoiceLi = function () {
            return n.SiteCultureMethod.Provider().LanguageCode == "vi-VN" &&
              !this.model.IsCountDownOver
              ? "listVoice"
              : "";
          }),
          (t.$name = "CellPhoneVerifyCtrl"),
          (t.$inject = [
            "$q",
            "$interval",
            "appContext",
            "AppContextSvc",
            "messageBus",
            "CellPhoneVerifySvc",
            "$timeout",
          ]),
          t
        );
      })();
      t.CellPhoneVerifyCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.CellPhoneVerifyCtrl.$name,
  OBSApp.Controllers.CellPhoneVerifyCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function i() {
          this.CreateModel = new t.UpdateMemberInfoCellPhoneModel();
          this.AgreementOfReceiveSMS = this.CheckboxOf;
          this.IsSendCaptcha = !1;
          this.CountDownSecond = -1;
          this.DefaultCountDownSecond = 30;
          this.IsCellPhoneValid = !1;
          this.IsCountDownOver = !1;
          this.VerifyBtnName = n.Helpers.ChangeLanguage("獲取驗證碼");
        }
        return (
          Object.defineProperty(i.prototype, "CheckboxOn", {
            get: function () {
              return "checkBox on";
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "CheckboxOf", {
            get: function () {
              return "checkBox off";
            },
            enumerable: !0,
            configurable: !0,
          }),
          i
        );
      })();
      t.CellPhoneVerifyMemberViewModel = i;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.UpdateMemberInfoCellPhoneVerified = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/UpdateMemberInfoCellPhoneVerified",
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
          (n.prototype.SendCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/SendCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.VerifyCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/VerifyCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckCellPhoneIsExist = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckCellPhoneIsExist",
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
          (n.prototype.GetUserProfile = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Authorize/GetLoggedinInfo", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function () {
                  n.reject(null);
                }),
              n.promise
            );
          }),
          (n.$name = "CellPhoneVerifyMemberSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.CellPhoneVerifyMemberSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.CellPhoneVerifyMemberSvc.$name,
  OBSApp.Services.CellPhoneVerifyMemberSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e) {
          var o = this;
          this.$q = t;
          this.$interval = i;
          this.appContext = r;
          this.appContextService = u;
          this.messageBus = f;
          this.cellPhoneVerifyMemberSvc = e;
          this.tick = null;
          this.errorCellphone = "";
          this.InitializeViewModel();
          f.On("fancyBoxClose", function () {
            o.appContext.UserProfile != null &&
              (o.InitializeViewModel(),
              (o.model.CreateModel.AccountID =
                o.appContext.UserProfile.AccountID),
              (o.model.CreateModel.CellPhone =
                o.appContext.UserProfile.CellPhone || ""),
              (o.model.IsCellPhoneValid = o.model.CreateModel.CellPhone != ""));
          });
          f.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              o.model.CreateModel.CellPhone = "";
              o.model.IsCellPhoneValid = !1;
              i === n.Models.LoginStatusEnum.Loggedin &&
                o.cellPhoneVerifyMemberSvc.GetUserProfile().then(function (n) {
                  o.model.CreateModel.AccountID = n.AccountID;
                  o.model.CreateModel.CellPhone = n.CellPhone || "";
                  o.model.IsCellPhoneValid = n.CellPhone != "";
                });
            }
          );
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.CellPhoneVerifyMemberViewModel();
            this.model.CreateModel.VerifyUsage = VerifyUsageEnum.ChangePhone;
            this.model.AgreementOfReceiveSMS = "checkBox on";
            this.model.CountDownSecond = Number(
              jQuery("#hfDefaultCountDownSecond").val()
            );
            this.$interval.cancel(this.tick);
          }),
          (t.prototype.RegisterValidation = function () {
            var t = this;
            jQuery.validator.addMethod("ckSpace", function (n) {
              return /^[^\x20]{0,}$/.test(n);
            });
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (i) {
                var r = n.Validator.IsCellPhoneByLengthFormatValid(i);
                return (t.model.IsCellPhoneValid = r), r;
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (i) {
              var r = n.Validator.IsCellPhoneFormatValid(i);
              return (t.model.IsCellPhoneValid = r), r;
            });
            jQuery.validator.addMethod("ckCaptchaCode", function (t) {
              return n.Validator.IsSMSCaptchaLengthValid(t);
            });
          }),
          (t.prototype.SendCaptcha = function () {
            var t = this,
              i = this.$q.defer();
            return ($(".error_t").hide(), this.model.IsSendCaptcha)
              ? (i.resolve(!0), i.promise)
              : (this.CheckCellPhoneIsExist()
                  .then(function () {
                    t.model.IsFirstTimeEnter = !1;
                    t.cellPhoneVerifyMemberSvc
                      .SendCaptcha(t.model.CreateModel)
                      .then(function (r) {
                        t.Countdown();
                        n.Validator.IsSMSCaptchaLengthValid(r.Message) &&
                          (t.model.CreateModel.CaptchaCode = r.Message);
                        n.Helpers.Alert(
                          n.Helpers.ChangeLanguage("驗證碼已發送至您的手機"),
                          SweetAlertTypeEnum.success
                        );
                        t.model.IsCountDownOver = !1;
                        t.model.IsCellPhoneOverSendTime = !1;
                        i.resolve(!0);
                      })
                      .catch(function (r) {
                        r.Error.Message ===
                          n.Helpers.ChangeLanguage(
                            "您今日驗證次數已達上限，請聯繫客服專員!"
                          ) &&
                          ((t.model.VerifyBtnName =
                            n.Helpers.ChangeLanguage("重發驗證碼")),
                          (t.model.IsCellPhoneOverSendTime = !0),
                          (t.model.IsCountDownOver = !0),
                          (t.model.IsCellPhoneValid = !1),
                          (t.errorCellphone = t.model.CreateModel.CellPhone));
                        n.Helpers.AlertSwitch(r);
                        i.reject(!1);
                      });
                  })
                  .catch(function (r) {
                    t.model.CountDownSecond = t.model.DefaultCountDownSecond;
                    n.Helpers.Alert(r.Error.Message, SweetAlertTypeEnum.error);
                    i.reject(!1);
                  }),
                i.promise);
          }),
          (t.prototype.VerifyCaptcha = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.CreateModel.CaptchaCode
              ? (this.CheckCellPhoneIsExist()
                  .then(function () {
                    if (t.model.IsFirstTimeEnter) {
                      n.Helpers.Alert(
                        n.Helpers.ChangeLanguage("請先獲取驗證碼"),
                        SweetAlertTypeEnum.error
                      );
                      i.reject(!1);
                      return;
                    }
                    var r = t.model.CreateModel;
                    t.cellPhoneVerifyMemberSvc
                      .VerifyCaptcha(r)
                      .then(function () {
                        return (
                          (t.model.CreateModel.AccountID =
                            t.appContext.UserProfile.AccountID),
                          (t.model.CreateModel.IsReceiveSMS =
                            t.model.AgreementOfReceiveSMS ===
                            t.model.CheckboxOn),
                          t.cellPhoneVerifyMemberSvc.UpdateMemberInfoCellPhoneVerified(
                            t.model.CreateModel
                          )
                        );
                      })
                      .then(function () {
                        return t.appContextService.GetUserProfile();
                      })
                      .then(function () {
                        var r, u;
                        t.appContext.UserProfile.IsRegisteredAdditionally
                          ? ((t.model.IsCountDownOver = !1),
                            jQuery.fancybox.close())
                          : ((r = n.Helpers.GetSimpleFancyboxOptions()),
                            (r.padding = 15),
                            (u = "#joinList"),
                            (r.href = u),
                            (r.afterClose = function () {
                              t.messageBus.Emit("fancyBoxClose", u || "");
                            }),
                            jQuery.fancybox(r));
                        i.resolve(!0);
                        location.reload();
                        return;
                      })
                      .catch(function (r) {
                        n.Helpers.AlertSwitch(r);
                        t.model.CreateModel.CaptchaCode = "";
                        i.reject(!1);
                        return;
                      });
                  })
                  .catch(function (r) {
                    t.model.CountDownSecond = t.model.DefaultCountDownSecond;
                    n.Helpers.Alert(r.Error.Message, SweetAlertTypeEnum.error);
                    i.reject(!1);
                    return;
                  }),
                i.promise)
              : (n.Helpers.Alert(
                  n.Helpers.ChangeLanguage("請輸入驗證碼"),
                  SweetAlertTypeEnum.error
                ),
                i.reject(!1),
                i.promise);
          }),
          (t.prototype.Countdown = function () {
            var t = this;
            this.tick != null && this.$interval.cancel(this.tick);
            this.model.CountDownSecond = this.model.DefaultCountDownSecond;
            this.tick = this.$interval(function () {
              t.model.CountDownSecond === 1
                ? ((t.model.IsSendCaptcha = !1),
                  (t.model.IsCellPhoneOverSendTime = !1),
                  t.$interval.cancel(t.tick),
                  (t.model.VerifyBtnName =
                    n.Helpers.ChangeLanguage("重發驗證碼")),
                  (t.model.IsCountDownOver = !0),
                  (t.model.CountDownSecond = t.model.DefaultCountDownSecond))
                : ((t.model.IsSendCaptcha = !0), t.model.CountDownSecond--);
            }, 1e3);
          }),
          (t.prototype.ChangeAgreement = function () {
            this.model.AgreementOfReceiveSMS =
              this.model.AgreementOfReceiveSMS === this.model.CheckboxOf
                ? this.model.CheckboxOn
                : this.model.CheckboxOf;
          }),
          (t.prototype.IsCellPhoneValid = function () {
            var t = n.Validator.IsCellPhoneFormatValid(
              this.model.CreateModel.CellPhone
            );
            this.model.IsCellPhoneValid =
              t && this.model.CreateModel.CellPhone != this.errorCellphone
                ? !0
                : !1;
          }),
          (t.prototype.CheckCellPhoneIsExist = function () {
            var n = this.$q.defer();
            return this.model.CreateModel.CellPhone.indexOf("*") != -1
              ? (n.resolve(!0), n.promise)
              : (this.cellPhoneVerifyMemberSvc
                  .CheckCellPhoneIsExist({
                    CellPhone: this.model.CreateModel.CellPhone,
                  })
                  .then(function () {
                    n.resolve(!0);
                  })
                  .catch(function (t) {
                    n.reject(t);
                  }),
                n.promise);
          }),
          (t.$name = "CellPhoneVerifyMemberCtrl"),
          (t.$inject = [
            "$q",
            "$interval",
            "appContext",
            "AppContextSvc",
            "messageBus",
            "CellPhoneVerifyMemberSvc",
          ]),
          t
        );
      })();
      t.CellPhoneVerifyMemberCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.CellPhoneVerifyMemberCtrl.$name,
  OBSApp.Controllers.CellPhoneVerifyMemberCtrl
);
$(document).ready(function () {
  $(window).scroll(function () {
    $(this).scrollTop() > 0 && $(".txt_maintain").css("display", "none");
  });
  var n = $(".btmGuild"),
    t = $(".rightSwitch");
  t.click(function () {
    var i = $(".leftGuidList a.guildmaintain");
    n.css("display") === "none"
      ? (n.slideDown(),
        $("html,body").animate({ scrollTop: $(".btmGuild").offset().top }),
        t.addClass("on"),
        i.removeClass("hidden"))
      : (n.slideUp(), t.removeClass("on"), i.addClass("hidden"));
  });
  $(".Sevli").hover(
    function () {
      $(this).find(">.customerServDiv").stop().fadeIn(200);
    },
    function () {
      $(this).find(">.customerServDiv").fadeOut(200);
    }
  );
  $("#UserMenu").hover(
    function () {
      $(".memberPAccountMenu").slideDown(0);
    },
    function () {
      $(".memberPAccountMenu").slideUp(0);
    }
  );
  $(".listGame").hover(
    function () {
      $(this).find(">.listGameCover").hide();
    },
    function () {
      $(this).find(">.listGameCover").show();
    }
  );
  typeof $(".DB_tab25").DB_tabMotionBanner != "undefined" &&
    $(".DB_tab25").DB_tabMotionBanner({
      key: "b28551",
      autoRollingTime: 6e3,
      bgSpeed: 500,
      motion: {
        DB_1_1: { left: 0, opacity: 0, speed: 1e3, delay: 1300 },
        DB_1_2: { left: -200, opacity: 0, speed: 1e3, delay: 200 },
        DB_1_3: { top: 100, opacity: 0, speed: 1e3, delay: 900 },
        DB_2_1: { left: 0, opacity: 0, speed: 1e3, delay: 500 },
        DB_2_2: { left: 150, opacity: 0, speed: 600, delay: 1200 },
        DB_2_3: { left: 150, opacity: 0, speed: 700, delay: 1500 },
        DB_2_4: { left: 150, opacity: 0, speed: 800, delay: 1800 },
        DB_3_1: { left: -50, opacity: 0, speed: 1e3, delay: 500 },
        DB_3_2: { left: 50, opacity: 0, speed: 1e3, delay: 1e3 },
        DB_3_3: { left: 0, opacity: 0, speed: 1e3, delay: 1500 },
        DB_4_1: { left: -50, opacity: 0, speed: 1e3, delay: 500 },
        DB_4_2: { top: 50, opacity: 0, speed: 1e3, delay: 1e3 },
        DB_4_3: { top: 0, opacity: 0, speed: 1e3, delay: 1500 },
        DB_5_1: { left: 130, opacity: 0, speed: 1e3, delay: 500 },
        DB_5_2: { top: 100, opacity: 0, speed: 1e3, delay: 1e3 },
        DB_5_3: { top: 100, opacity: 0, speed: 1e3, delay: 1200 },
        DB_6_1: { left: -50, opacity: 0, speed: 1e3, delay: 500 },
        DB_6_2: { top: 50, opacity: 0, speed: 1e3, delay: 1e3 },
        DB_6_3: { top: 0, opacity: 0, speed: 1e3, delay: 1500 },
        end: null,
      },
    });
}),
  (function (n) {
    var t;
    (function (n) {
      var u = (function () {
          function i() {
            this.GetCustomerServicePerformanceResult = [];
            this.BEAccountList = [];
            this.BEAccountFilteredList = [];
            this.ElementManager = new n.ViewElementManager();
            this.ViewLength = 0;
            this.IsLoading = !0;
            this.CreatePostData = new t();
          }
          return i;
        })(),
        t,
        i,
        r;
      n.ComplianBoxViewModel = u;
      t = (function () {
        function n() {
          this.CellPhone = "";
          this.CustServiceNickName = "";
          this.ComplaintContent = "";
        }
        return n;
      })();
      n.CreateCustomerServiceComplaintListPostModel = t;
      i = (function () {
        function n() {}
        return n;
      })();
      n.GetCustomerServicePerformanceResultModel = i;
      r = (function () {
        function n() {}
        return n;
      })();
      n.BEAccount = r;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CreateCustomerServiceComplaintList = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CreateCustomerServiceComplaintList",
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
          (n.prototype.GetEnableBEAccountList = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetEnableBEAccountList",
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
          (n.prototype.GetCustomerServicePerformanceAll = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetCustomerServicePerformanceAll",
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
          (n.$name = "ComplianBoxSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.ComplianBoxSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.ComplianBoxSvc.$name,
  OBSApp.Services.ComplianBoxSvc
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
        function t(t, i, r, u, f) {
          var e = this;
          this.timeoutManager = {};
          this.debounceCreateCustomerServiceComplaintList = _.debounce(
            function () {
              return e.CreateCustomerServiceComplaintList();
            },
            500
          );
          this.timeout = t;
          this.complianBoxSvc = i;
          this.dataProvider = r;
          this.messageBus = u;
          this.appContext = f;
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnLoadComplainData,
            function () {
              e.InitializeViewModel();
              e.CheckLogin();
            }
          );
        }
        return (
          (t.prototype.CheckLogin = function () {
            this.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin &&
              ($("#ComplianBoxAccountID").attr("disabled", "disabled"),
              (this.model.CreatePostData.MemberAccountID =
                this.appContext.UserProfile.AccountID));
          }),
          (t.prototype.InitializeViewModel = function () {
            var t = new n.Models.ComplianBoxViewModel();
            this.model = t;
            this.GetEnableBEAccountList();
            this.GetCustomerServicePerformanceAll();
            this.model.ElementManager.HideElement("BEAccountDropdown");
          }),
          (t.prototype.RegisterValidation = function () {
            var n = this;
            jQuery.validator.addMethod(
              "ckSelectOptionCustServicePerformance",
              function (n) {
                return n == 0 || n == undefined ? !1 : !0;
              }
            );
            jQuery.validator.addMethod(
              "ckSpaceCustServiceAccount",
              function () {
                return !(
                  n.model.CreatePostData.CustServiceNickName == undefined ||
                  n.model.CreatePostData.CustServiceNickName == "" ||
                  n.model.CreatePostData.CustServiceAccountID == undefined ||
                  n.model.CreatePostData.CustServiceAccountID == ""
                );
              }
            );
            jQuery.validator.addMethod("ckSpaceComplaintContent", function (n) {
              if (n != undefined && n != "") {
                var t = n.trim();
                if (t.length == 0) return !1;
              }
              return !!n;
            });
          }),
          (t.prototype.CreateCustomerServiceComplaintList = function () {
            var i = this,
              t = __assign({}, this.model.CreatePostData, {
                MemberAccountID: $("#ComplianBoxAccountID").val(),
              });
            return (
              (t.CustServicePerformanceID === undefined ||
                t.CustServicePerformanceID === "" ||
                t.CustServicePerformanceID === null) &&
                (t.CustServicePerformanceID = "0"),
              this.complianBoxSvc
                .CreateCustomerServiceComplaintList(t)
                .then(function () {
                  i.ResetData();
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage(
                      "謝謝您的寶貴意見！客服人員將在1小時內回复您"
                    )
                  );
                  i.FancyBoxClose();
                })
                .catch(function (t) {
                  t.Error.Message =
                    t.Error.Code !== 4024
                      ? n.Helpers.ChangeLanguage("系統異常請稍後再試")
                      : t.Error.Message;
                  n.Helpers.AlertOnlyOKCallback(
                    "",
                    SweetAlertTypeEnum.none,
                    function () {
                      t.Error.Code === 4024 && i.FancyBoxClose();
                    },
                    t.Error.Message
                  );
                }),
              !0
            );
          }),
          (t.prototype.CheckCreateCustomerServiceComplaintList = function () {
            return $("#ComplaintBox").valid()
              ? (this.debounceCreateCustomerServiceComplaintList(), !0)
              : !1;
          }),
          (t.prototype.GetEnableBEAccountList = function () {
            var n = this;
            this.model.IsLoading = !0;
            this.complianBoxSvc
              .GetEnableBEAccountList()
              .then(function (t) {
                n.model.BEAccountList = t;
                n.model.BEAccountFilteredList = t;
              })
              .catch(function () {})
              .finally(function () {
                n.model.IsLoading = !1;
              });
          }),
          (t.prototype.OnBEAccountChange = function () {
            var n = this.model.CreatePostData.CustServiceNickName || "";
            this.model.BEAccountFilteredList = this.model.BEAccountList.filter(
              function (t) {
                return t.NickName.toUpperCase().indexOf(n.toUpperCase()) >= 0;
              }
            );
            this.model.BEAccountFilteredList.length == 1 &&
              this.model.BEAccountFilteredList[0].NickName.toUpperCase() ==
                n.toUpperCase() &&
              ((this.model.CreatePostData.CustServiceAccountID =
                this.model.BEAccountFilteredList[0].LoginID),
              (this.model.CreatePostData.CustServiceNickName =
                this.model.BEAccountFilteredList[0].NickName));
          }),
          (t.prototype.VerifyBEAccount = function () {
            var n = this;
            this.timeout(function () {
              var t = n.model.CreatePostData.CustServiceNickName,
                i = n.model.BEAccountList.filter(function (n) {
                  return n.NickName == t;
                });
              i.length == 0 &&
                ((n.model.CreatePostData.CustServiceNickName = ""),
                (n.model.CreatePostData.CustServiceAccountID = ""),
                (n.model.BEAccountFilteredList =
                  n.model.BEAccountList.slice()));
            }, 200);
          }),
          (t.prototype.ToggleBEAccountDropdown = function (n) {
            n === void 0 && (n = "");
            this.model.ElementManager.IsVisible("BEAccountDropdown")
              ? this.HideBEAccountDropdown(n)
              : this.ShowBEAccountDropdown(n);
          }),
          (t.prototype.ShowBEAccountDropdown = function (n) {
            var i, t;
            (n === void 0 && (n = ""),
            (i = this.model.CreatePostData.CustServiceNickName || ""),
            (this.model.BEAccountFilteredList = this.model.BEAccountList.filter(
              function (n) {
                return n.NickName.toUpperCase().indexOf(i.toUpperCase()) >= 0;
              }
            )),
            (t = document.getElementById("accountDropdown")),
            t != null) &&
              (n != "" &&
                this.model.ElementManager.DisableElementBy(
                  "HideBEAccountDropdown",
                  n
                ),
              this.timeoutManager.HideBEAccountDropdown &&
                (this.timeout.cancel(this.timeoutManager.HideBEAccountDropdown),
                delete this.timeoutManager.HideBEAccountDropdown),
              t.classList.contains("show") || t.classList.add("show"),
              this.model.ElementManager.ShowElement("BEAccountDropdown"));
          }),
          (t.prototype.HideBEAccountDropdown = function (n) {
            var i = this,
              t;
            (n === void 0 && (n = ""),
            (t = document.getElementById("accountDropdown")),
            t != null) &&
              (n != "" &&
                this.model.ElementManager.EnableElementBy(
                  "HideBEAccountDropdown",
                  n
                ),
              this.model.ElementManager.IsEnabled("HideBEAccountDropdown")) &&
              ((this.timeoutManager.HideBEAccountDropdown = this.timeout(
                function () {
                  t.classList.contains("show") && t.classList.remove("show");
                  delete i.timeoutManager.HideBEAccountDropdown;
                },
                200
              )),
              this.model.ElementManager.HideElement("BEAccountDropdown"));
          }),
          (t.prototype.SelectCustomService = function (n) {
            n != null &&
              ((this.model.CreatePostData.CustServiceAccountID = n.LoginID),
              (this.model.CreatePostData.CustServiceNickName = n.NickName));
            $("#ComplaintBox").validate().element("#CustServiceAccount");
          }),
          (t.prototype.GetCustomerServicePerformanceAll = function () {
            var n = this;
            this.complianBoxSvc
              .GetCustomerServicePerformanceAll()
              .then(function (t) {
                n.model.GetCustomerServicePerformanceResult = t;
              })
              .catch(function () {});
          }),
          (t.prototype.ResetData = function () {
            this.model.CreatePostData =
              new n.Models.CreateCustomerServiceComplaintListPostModel();
            this.CheckLogin();
            this.model.ViewLength = 0;
          }),
          (t.prototype.ComplaintContentKeyPress = function (t) {
            if (
              n.SiteCultureMethod.Provider()
                .IsEnableComplianboxContentKeypress &&
              t.keyCode == 32
            ) {
              var i = t.selectionStart;
              t.value = (t.keyCode == 38 ? 1 : -1) + parseInt(t.value, 10);
              t.selectionStart = i;
              t.selectionEnd = i;
              t.preventDefault();
            }
          }),
          (t.prototype.ComplaintContentBlur = function () {
            this.model.CreatePostData.ComplaintContent.trim() == "" &&
              ((this.model.CreatePostData.ComplaintContent = ""),
              (this.model.ViewLength = 0));
          }),
          (t.prototype.FancyBoxClose = function () {
            jQuery.fancybox.close();
          }),
          (t.prototype.SetViewCultureLength = function (t) {
            var i = n.SiteCultureMethod.Provider().GetViewCultureLength(
              this.model.CreatePostData.ComplaintContent,
              t
            );
            this.model.ViewLength = i.ContentLength;
          }),
          (t.$name = "ComplianBoxCtrl"),
          (t.$inject = [
            "$timeout",
            "ComplianBoxSvc",
            "DataProvider",
            "messageBus",
            "appContext",
          ]),
          t
        );
      })();
      t.ComplianBoxCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.ComplianBoxCtrl.$name,
  OBSApp.Controllers.ComplianBoxCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var e = (function () {
          function n() {
            this.CallbackServiceEnabled = !1;
            this.ShowBrowserSuggestWindow = !1;
            this.ShowLine = !1;
            this.GetGiftEventList = [];
            this.GiftEventCount = 0;
            this.MemberBalanceInfoDWSuccessedCNT = new t();
            this.SearchMemberBonusSettingFirst = {
              BonusType: 1,
              StartTime: "",
              EndTime: "",
              PageNumber: 0,
              RecordCounts: 1,
              OrderField: "",
              Desc: "true",
            };
            this.SearchMemberBonusSettingSecond = {
              BonusType: 2,
              StartTime: "",
              EndTime: "",
              PageNumber: 0,
              RecordCounts: 1,
              OrderField: "",
              Desc: "true",
            };
            this.GetCustomerServiceComplaintListByMemberAccountModel = {
              MemberAccountID: "",
            };
          }
          return n;
        })(),
        t,
        i,
        r,
        u,
        f;
      n.CustomerServViewModel = e;
      t = (function () {
        function n() {}
        return n;
      })();
      n.MemberBalanceInfoDWSuccessedCNT = t;
      i = (function () {
        function n() {}
        return n;
      })();
      n.GetDeositBonusModel = i;
      r = (function () {
        function n() {}
        return n;
      })();
      n.MemberBonusLogCheckStatusResult = r;
      u = (function () {
        function n() {}
        return n;
      })();
      n.GetGiftEventResult = u;
      f = (function () {
        function n() {}
        return n;
      })();
      n.GetCustomerServiceSettingResult = f;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetCSLiveChatUrl = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/MemberInfo/GetCSLiveChatUrl", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetMemberBalanceInfoDWSuccessedCNTByAccountID =
            function () {
              var n = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/MemberBonus/GetMemberBalanceInfoDWSuccessedCNTByAccountID",
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
          (n.prototype.GetMemberFirstBonusCount = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberBonus/GetMemberFirstBonusCount",
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
          (n.prototype.GetMemberSecondBonusCount = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberBonus/GetMemberSecondBonusCount",
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
          (n.prototype.GetMemberServiceCenterCallbackCheckStatus = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetMemberServiceCenterCallbackCheckStatus",
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
          (n.prototype.GetDepositBonus = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/MemberInfo/GetDepositBonus", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.GetGiftEventSettingByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Events/GetGiftEventSettingByAccountID",
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
                  "../api/Events/GetGiftEventGroupCountByAccountID",
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
          (n.prototype.GetCustomerStatusSetting = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetCustomerServiceStatusSetting",
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
          (n.$name = "CustomerServSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.CustomerServSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.CustomerServSvc.$name,
  OBSApp.Services.CustomerServSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f) {
          var e = this,
            o,
            s;
          this.customerServSvc = t;
          this.dataProvider = i;
          this.messageBus = r;
          this.appContext = u;
          this.$q = f;
          this.CheckFirst = !0;
          this.CheckSecond = !0;
          this.IsTestAccount = !1;
          o = new n.Models.CustomerServViewModel();
          this.model = o;
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.GetDepositBonus,
            function (n, t) {
              e.GetDeposit(t);
              e.GetGiftEvent(t);
            }
          );
          this.GetDeposit();
          this.GetGiftEvent();
          this.CheckBrowserAndLocalStorage();
          this.appContext.UserProfile &&
            this.appContext.UserProfile.TestType === 2 &&
            (this.IsTestAccount = !0);
          s = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.ServLine
          );
          this.model.ShowLine = s != "true";
        }
        return (
          (t.prototype.GetDeposit = function (t) {
            var i = this;
            this.appContext.LoginStatus === n.Models.LoginStatusEnum.Loggedin ||
            t === n.Models.LoginStatusEnum.Loggedin
              ? this.customerServSvc
                  .GetDepositBonus()
                  .then(function (t) {
                    i.model.GetDeositBonusOutput =
                      new n.Models.GetDeositBonusModel();
                    i.model.GetDeositBonusOutput = t;
                    i.model.GetDeositBonusOutput.BonusLogCheckStatus != null &&
                      (i.model.GetDeositBonusOutput.BonusLogCheckStatus
                        .FirstBonus === 4 &&
                        (i.model.GetDeositBonusOutput.FirstDepositButtonDisabled =
                          !0),
                      i.model.GetDeositBonusOutput.BonusLogCheckStatus
                        .SecondBonus === 4 &&
                        (i.model.GetDeositBonusOutput.SecondDepositButtonDisabled =
                          !0));
                  })
                  .catch(function () {})
              : (this.model.GetDeositBonusOutput = null);
          }),
          (t.prototype.GetGiftEvent = function (t) {
            var i = this;
            this.appContext.LoginStatus === n.Models.LoginStatusEnum.Loggedin ||
            t === n.Models.LoginStatusEnum.Loggedin
              ? this.customerServSvc
                  .GetGiftEventGroupCountByAccountID()
                  .then(function (n) {
                    i.model.GiftEventCount = n;
                  })
                  .catch(function (t) {
                    n.Helpers.AlertSwitch(t);
                  })
              : (this.model.GiftEventCount = 0);
          }),
          (t.prototype.GoCSLiveChat = function () {
            this.customerServSvc.GetCustomerStatusSetting().then(function (t) {
              t.Status
                ? window.open("/OnlineCS", "_blank")
                : n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage("《在線客服》維護中"),
                    null,
                    function () {
                      window.location.reload();
                    },
                    null,
                    null,
                    null,
                    null,
                    305
                  );
            });
          }),
          (t.prototype.openComplianBox = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnLoadComplainData,
              ""
            );
          }),
          (t.prototype.CheckIsOnline = function () {
            var t = this.$q.defer();
            return (
              this.customerServSvc
                .GetCustomerStatusSetting()
                .then(function (i) {
                  i.Status
                    ? t.resolve(!0)
                    : (n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("《在線客服》維護中"),
                        null,
                        function () {
                          window.location.reload();
                        },
                        null,
                        null,
                        null,
                        null,
                        305
                      ),
                      t.reject(!1));
                })
                .catch(function () {
                  t.reject(!1);
                }),
              t.promise
            );
          }),
          (t.prototype.GetMemberServiceCenterCallbackCheckStatus = function (
            t
          ) {
            var i = this,
              u = this.dataProvider.CreateDeferred(),
              r = $(t.currentTarget);
            return (
              this.customerServSvc
                .GetMemberServiceCenterCallbackCheckStatus()
                .then(function (t) {
                  switch (t) {
                    case ServiceCenterMemberEnum.UnProcessedData:
                    case ServiceCenterMemberEnum.UnProcessedDataByIPAddress:
                      i.model.CallbackServiceApplyMessage =
                        n.Helpers.ChangeLanguage(
                          "您的申請正在處理中，請稍後！"
                        );
                      break;
                    case ServiceCenterMemberEnum.SystemBusyWithPhoneOrAccountLimit:
                      i.model.CallbackServiceApplyMessage =
                        n.Helpers.ChangeLanguage(
                          "您提交的太頻繁，請稍後再試！！！"
                        );
                      break;
                    case ServiceCenterMemberEnum.SystemBusyWithIPAddressLimit:
                      i.model.CallbackServiceApplyMessage =
                        n.Helpers.ChangeLanguage("系統繁忙中，請稍候再試！！");
                      break;
                    case ServiceCenterMemberEnum.SystemBusyWithCookieLimit:
                      i.model.CallbackServiceApplyMessage =
                        n.Helpers.ChangeLanguage("系統繁忙中，請稍候再試！");
                      break;
                    case ServiceCenterMemberEnum.CallServiceNotEnabled:
                      i.model.CallbackServiceApplyMessage =
                        n.Helpers.ChangeLanguage(
                          "很抱歉，回電服務目前關閉中，請暫時使用其他客服管道聯繫我們，謝謝！"
                        );
                  }
                  t != ServiceCenterMemberEnum.Success
                    ? ($(".txt_maintain").not(r.find(".txt_maintain")).hide(),
                      r.children(".txt_maintain").show(0).delay(3e3).hide(0),
                      u.resolve(!1))
                    : (r.children(".txt_maintain").hide(), u.resolve(!0));
                })
                .catch(function (t) {
                  i.model.CallbackServiceApplyMessage =
                    n.Helpers.ChangeLanguage(t.Error.Message);
                  $(".txt_maintain").not(r.find(".txt_maintain")).hide();
                  r.children(".txt_maintain").show(0).delay(3e3).hide(0);
                  u.resolve(!1);
                }),
              u.promise
            );
          }),
          (t.prototype.ShowMaintainMessage = function (n) {
            n === void 0 && (n = !1);
            n && $("#customerstatus").children(".txt_maintain").fadeIn(200);
          }),
          (t.prototype.CloseMaintainMessage = function (n) {
            n === void 0 && (n = !1);
            n && $("#customerstatus").children(".txt_maintain").fadeOut(200);
          }),
          (t.prototype.ShowFirstDepositIcon = function () {
            return !1;
          }),
          (t.prototype.ShowSecondDepositIcon = function () {
            return this.model.GetDeositBonusOutput === undefined ||
              this.model.GetDeositBonusOutput === null
              ? !1
              : !this.model.GetDeositBonusOutput.SecondDepositButtonDisabled &&
                !this.model.GetDeositBonusOutput.IsSecondBounsDeviceMultiLogin
              ? !0
              : !1;
          }),
          (t.prototype.GetCustomerServiceComplaintListByMemberAccount =
            function () {
              var r = this,
                t = this.dataProvider.CreateDeferred(),
                i =
                  this.model
                    .GetCustomerServiceComplaintListByMemberAccountModel;
              return (
                (i.MemberAccountID = this.appContext.UserProfile.AccountID),
                this.customerServSvc
                  .GetCustomerServiceComplaintListByMemberAccount(i)
                  .then(function (i) {
                    i == !0
                      ? (r.messageBus.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .OnLoadComplainData,
                          ""
                        ),
                        t.resolve(!0))
                      : (n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          "5分鐘內限申請一次投訴箱，如急需諮詢，請聯繫【在線客服】"
                        ),
                        t.resolve(!1));
                  })
                  .catch(function (t) {
                    n.Helpers.AlertSwitch(t);
                  }),
                t.promise
              );
            }),
          (t.prototype.GoDownloadChrome = function () {
            switch (n.SiteCultureMethod.Provider().LanguageCode.toLowerCase()) {
              case "zh-cn":
                window.open(
                  "https://www.google.cn/intl/zh-CN/chrome/",
                  "_blank"
                );
                break;
              case "vi-vn":
                window.open("https://www.google.com/intl/vi/chrome/", "_blank");
                break;
              case "th-th":
                window.open("https://www.google.com/intl/th/chrome/", "_blank");
            }
          }),
          (t.prototype.CheckBrowserAndLocalStorage = function () {
            var i = navigator.userAgent.toLowerCase().indexOf("msie") >= 1,
              r = navigator.userAgent
                .toLowerCase()
                .match(/rv:([\d.]+)\) like gecko/),
              t = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.CloseBrowserSuggestWindow
              );
            (i || r) &&
              (t == null || t == "") &&
              (this.model.ShowBrowserSuggestWindow = !0);
          }),
          (t.prototype.CloseBrowserSuggestWindow = function () {
            var t = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.CloseBrowserSuggestWindow,
              t,
              !1
            );
            this.model.ShowBrowserSuggestWindow = !1;
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
          (t.prototype.CloseLine = function () {
            n.Helpers.SetSessionStorageItem(
              n.ConstDefinition.SessionStorageKey.ServLine,
              "true"
            );
            $("#servLine").hide();
            $(".btn_FIFA").removeClass("down");
          }),
          (t.prototype.IsShowBonusIcon = function () {
            return !this.model.GetDeositBonusOutput
              .FirstDepositButtonDisabled &&
              !this.model.GetDeositBonusOutput.IsFirstBounsDeviceMultiLogin
              ? !0
              : !this.model.GetDeositBonusOutput.SecondDepositButtonDisabled &&
                !this.model.GetDeositBonusOutput.IsSecondBounsDeviceMultiLogin
              ? !0
              : !1;
          }),
          (t.$name = "CustomerServCtrl"),
          (t.$inject = [
            "CustomerServSvc",
            "DataProvider",
            "messageBus",
            "appContext",
            "$q",
          ]),
          t
        );
      })();
      t.CustomerServCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.CustomerServCtrl.$name,
  OBSApp.Controllers.CustomerServCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var e = (function () {
          function u() {
            this.IsSendCaptcha = !1;
            this.ShowPanel = "step01";
            this.DefaultCountdownSecond = 60;
            this.SendCaptchaModel = new i();
            this.VerifyModel = new r();
            this.BtnVerifyFpDisabled = !0;
            this.FrmId = "#frmUpdatePassword";
            this.IsCanNotUseSMSProvider = !1;
            this.IsCellPhoneValid = !1;
            this.IsCallCustomerWithCallbackOK = !1;
            this.IsLoading = !1;
            this.SendSMSVerifyCount = 0;
            this.IsCustomerServiceOverLimit = !1;
            this.CallCustomerServiceCounts = 0;
            this.ElementManager = new t.ViewElementManager();
            this.PasswordTypeList = [
              {
                Value: "0",
                Text: n.Helpers.ChangeLanguage("請先選擇密碼類型"),
              },
              { Value: "1", Text: n.Helpers.ChangeLanguage("登錄密碼") },
              { Value: "2", Text: n.Helpers.ChangeLanguage("保護密碼") },
              { Value: "3", Text: n.Helpers.ChangeLanguage("登錄和保護密碼") },
            ];
          }
          return u;
        })(),
        i,
        r,
        u,
        f;
      t.ForgetPwdViewModel = e;
      i = (function () {
        function n() {
          this.VerifyUsage = VerifyUsageEnum.ForgetPwd;
        }
        return n;
      })();
      t.SendCaptchaModelForgetPwdView = i;
      r = (function () {
        function n() {
          this.SecretCodeType = "0";
        }
        return n;
      })();
      t.VerifyCaptchModelForgetPwdView = r;
      u = (function () {
        function n() {
          this.SecretCodeType = "0";
          this.IsRunGeneralSMSStatus = !0;
        }
        return n;
      })();
      t.VerifyCaptchaForgetPwdPostModel = u;
      f = (function () {
        function n() {
          this.SecretCodeType = "0";
        }
        return n;
      })();
      t.UpdateForgetPwdPostModel = f;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SendCaptchaByAccount = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/SendCaptchaByAccountIDWithCellPhone",
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
          (n.prototype.VerifyCaptchaForgetPwd = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/VerifyCaptchaForgetPwd",
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
          (n.prototype.UpdateForgetPwd = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/UpdateForgetPwd",
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
          (n.prototype.GetVerifyMode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Common/GetVerifyMode",
              n
            );
          }),
          (n.prototype.CheckDisposableServiceCallBackReturnCaptchaCode =
            function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/MemberInfo/CheckDisposableServiceCallBackReturnCaptchaCode",
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
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CreateMemberServiceCenterCallback",
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
          (n.$name = "ForgetPwdSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.ForgetPwdSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.ForgetPwdSvc.$name,
  OBSApp.Services.ForgetPwdSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h) {
          var c = this;
          this.$scope = t;
          this.$interval = i;
          this.$timeout = r;
          this.messageBus = u;
          this.appContext = f;
          this.forgetPwdSvc = e;
          this.diff = o;
          this.toolsSvc = s;
          this.$q = h;
          this.tick = null;
          this.IsPasswordTypeDisabled = !1;
          this.PasswordTypeSelectEnum = {
            None: "0",
            Password: "1",
            WithdrawPassword: "2",
            MemberPasswordAndWithdrawPassword: "3",
          };
          u.On(
            n.ConstDefinition.MessageBusEventName.OnForgetPWBeforeOpen,
            function (n, t) {
              t === c.PasswordTypeSelectEnum.WithdrawPassword &&
                (c.IsPasswordTypeDisabled = !0);
              c.$timeout(function () {
                c.InitializeViewModel(t);
                c.GetVerifyModeEvent();
              });
            }
          );
          this.InitializeViewModel();
        }
        return (
          (t.prototype.InitializeViewModel = function (t) {
            var i = this;
            t === void 0 && (t = "None");
            this.model = new n.Models.ForgetPwdViewModel();
            this.model.DefaultCountdownSecond = Number(
              jQuery("#hfDefaultCountdownSecond").val()
            );
            this.model.CountDownSecond = this.model.DefaultCountdownSecond;
            this.$interval.cancel(this.tick);
            this.model.SendCaptchaModel.AccountID = $("#LID").val();
            t == this.PasswordTypeSelectEnum.WithdrawPassword &&
              ((this.model.VerifyModel.SecretCodeType =
                this.PasswordTypeSelectEnum.WithdrawPassword),
              (this.model.PasswordTypeList = this.model.PasswordTypeList.filter(
                function (n) {
                  return n.Value == i.PasswordTypeSelectEnum.WithdrawPassword;
                }
              )));
          }),
          (t.prototype.RegisterValidation = function () {
            var t = this,
              i;
            jQuery.validator.addMethod("ckCellPhoneByForgetPwd", function (t) {
              return n.Validator.IsCellPhoneFormatValid(t);
            });
            jQuery.validator.addMethod("ckSpaceByForgetPwd", function (n) {
              return /^[^\x20]{0,}$/.test(n);
            });
            jQuery.validator.addMethod(
              "ckSelectOptionByForgetPwd",
              function () {
                return !(
                  t.model.VerifyModel.SecretCodeType ==
                  t.PasswordTypeSelectEnum.None
                );
              }
            );
            jQuery.validator.addMethod("ckAccountByForgetPwd", function (n) {
              return /^[a-zA-Z0-9]{4,10}$/.test(n);
            });
            jQuery.validator.addMethod("ckPasswordByForgetPwd", function (i) {
              return t.IsUnfilled(i)
                ? !0
                : n.Validator.IsPasswordFormatValid(i);
            });
            jQuery.validator.addMethod(
              "ckAccountPwdSameByForgetPwd",
              function (i) {
                var r =
                  t.IsUnfilled(t.model.VerifyModel.WithdrawPwd) ||
                  n.Validator.IsPasswordTooSimple(i) ||
                  i.toLowerCase() !=
                    t.model.VerifyModel.WithdrawPwd.toLowerCase();
                return (
                  t.$timeout.cancel(t.handleByCkAccountPwdSameByForgetPwd),
                  r ||
                    (t.handleByCkAccountPwdSameByForgetPwd = t.$timeout(
                      function () {
                        t.model.VerifyModel.AccountPwd = null;
                        t.model.VerifyModel.CheckAccountPwd = null;
                        $("#AccountPwd").val("");
                        $("#CheckAccountPwd").val("");
                        t.ClearErrorMessage("AccountPwd");
                        t.ClearErrorMessage("CheckAccountPwd");
                      },
                      3e3
                    )),
                  r
                );
              }
            );
            jQuery.validator.addMethod(
              "ckWithdrawPwdSameByForgetPwd",
              function (i) {
                var r =
                  t.IsUnfilled(t.model.VerifyModel.AccountPwd) ||
                  n.Validator.IsPasswordTooSimple(i) ||
                  i.toLowerCase() !=
                    t.model.VerifyModel.AccountPwd.toLowerCase();
                return (
                  t.$timeout.cancel(t.handleByCkWithdrawPwdSameByForgetPwd),
                  r ||
                    (t.handleByCkWithdrawPwdSameByForgetPwd = t.$timeout(
                      function () {
                        t.model.VerifyModel.WithdrawPwd = null;
                        t.model.VerifyModel.CheckNewWithdrawalPWD = null;
                        $("#WithdrawPwd").val("");
                        $("#CheckWithdrawPwd").val("");
                        t.ClearErrorMessage("WithdrawPwd");
                        t.ClearErrorMessage("CheckWithdrawPwd");
                      },
                      3e3
                    )),
                  r
                );
              }
            );
            jQuery.validator.addMethod(
              "ckSimplePasswordOfBankByForgetPwd",
              function (i) {
                var r = n.Validator.IsPasswordTooSimple(i);
                return (
                  t.$timeout.cancel(
                    t.handleByCkSimplePasswordOfBankByForgetPwd
                  ),
                  r &&
                    (t.handleByCkSimplePasswordOfBankByForgetPwd = t.$timeout(
                      function () {
                        t.model.VerifyModel.WithdrawPwd = null;
                        t.model.VerifyModel.CheckNewWithdrawalPWD = null;
                        $("#WithdrawPwd").val("");
                        $("#CheckWithdrawPwd").val("");
                        t.ClearErrorMessage("WithdrawPwd");
                        t.ClearErrorMessage("CheckWithdrawPwd");
                      },
                      3e3
                    )),
                  !r
                );
              }
            );
            jQuery.validator.addMethod(
              "ckSimplePasswordByForgetPwd",
              function (i) {
                var r = n.Validator.IsPasswordTooSimple(i);
                return (
                  t.$timeout.cancel(t.handleByCkSimplePasswordByForgetPwd),
                  r &&
                    (t.handleByCkSimplePasswordByForgetPwd = t.$timeout(
                      function () {
                        t.model.VerifyModel.AccountPwd = null;
                        t.model.VerifyModel.CheckAccountPwd = null;
                        $("#AccountPwd").val("");
                        $("#CheckAccountPwd").val("");
                        t.ClearErrorMessage("AccountPwd");
                        t.ClearErrorMessage("CheckAccountPwd");
                      },
                      3e3
                    )),
                  !r
                );
              }
            );
            i = function (n, i) {
              return (
                (i = i || ""),
                t.IsUnfilled(n) || n.toUpperCase() == i.toUpperCase()
              );
            };
            jQuery.validator.addMethod(
              "CheckAccountPwdConsistentByForgetPwd",
              function (n) {
                return i(n, t.model.VerifyModel.AccountPwd);
              }
            );
            jQuery.validator.addMethod(
              "CheckWithdrawPwdConsistentByForgetPwd",
              function (n) {
                return i(n, t.model.VerifyModel.WithdrawPwd);
              }
            );
            jQuery.validator.addMethod(
              "ckCaptchaCodeByForgetPwd",
              function (i) {
                var r = n.Validator.IsSMSCaptchaLengthValid(i);
                return r || t.IsUnfilled(i);
              }
            );
          }),
          (t.prototype.PwdTypeChange = function () {
            $("#PWDType").valid();
          }),
          (t.prototype.VerifyCaptchaForgetPwd = function () {
            var t = this,
              i = this.$q.defer(),
              r = {
                CaptchaCode: this.model.VerifyModel.CaptchaCode,
                AccountID: this.model.SendCaptchaModel.AccountID,
                SecretCodeType: this.model.VerifyModel.SecretCodeType,
                IsRunGeneralSMSStatus: !this.model.IsCanNotUseSMSProvider,
              };
            return (
              (this.model.IsLoading = !0),
              this.forgetPwdSvc
                .VerifyCaptchaForgetPwd(r)
                .then(function () {
                  i.resolve(!0);
                  t.model.ShowPanel = "step02";
                  jQuery.fancybox.update();
                })
                .catch(function (r) {
                  t.model.VerifyModel.CaptchaCode = "";
                  i.resolve(!1);
                  r && r.Error && r.Error.Code == 5999
                    ? n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        r.Error.Message
                      )
                    : n.Helpers.AlertSwitch(r);
                })
                .finally(function () {
                  t.model.IsLoading = !1;
                }),
              i.promise
            );
          }),
          (t.prototype.UpdateForgetPwd = function () {
            var t = this,
              i = this.$q.defer(),
              r;
            return $(this.model.FrmId).valid()
              ? ((r = {
                  AccountID: this.model.SendCaptchaModel.AccountID,
                  AccountPwd: this.toolsSvc.Base64Encode(
                    this.model.VerifyModel.AccountPwd
                  ),
                  CaptchaCode: this.model.VerifyModel.CaptchaCode,
                  WithdrawPwd: this.toolsSvc.Base64Encode(
                    this.model.VerifyModel.WithdrawPwd
                  ),
                  SecretCodeType: this.model.VerifyModel.SecretCodeType,
                }),
                (this.model.IsLoading = !0),
                this.forgetPwdSvc
                  .UpdateForgetPwd(r)
                  .then(function () {
                    i.resolve(!0);
                    n.Helpers.NotifyBox(n.Helpers.ChangeLanguage("更新成功！"));
                    jQuery.fancybox.close();
                  })
                  .catch(function (r) {
                    if ((i.resolve(!1), r && r.Error && r.Error.Code == 5999))
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        r.Error.Message
                      );
                    else {
                      n.Helpers.AlertSwitch(r);
                      var u = !1,
                        f = !1,
                        e = n.Helpers.ChangeLanguage(r.Error.Message);
                      (r.Error.Code == 1305 ||
                        r.Error.Code == 1306 ||
                        r.Error.Code == 1309) &&
                        (u = !0);
                      (r.Error.Code == 1307 ||
                        r.Error.Code == 1308 ||
                        r.Error.Code == 1310) &&
                        (f = !0);
                      u &&
                        ((t.model.VerifyModel.AccountPwd = null),
                        (t.model.VerifyModel.CheckAccountPwd = null));
                      f &&
                        ((t.model.VerifyModel.WithdrawPwd = null),
                        (t.model.VerifyModel.CheckNewWithdrawalPWD = null));
                    }
                  })
                  .finally(function () {
                    t.model.IsLoading = !1;
                  }),
                i.promise)
              : (i.resolve(!1), i.promise);
          }),
          (t.prototype.Countdown = function () {
            var n = this;
            this.tick = this.$interval(function () {
              n.model.CountDownSecond === 1
                ? ((n.model.IsSendCaptcha = !1),
                  (n.model.IsCountdown = !1),
                  n.$interval.cancel(n.tick),
                  (n.model.CountDownSecond = n.model.DefaultCountdownSecond))
                : n.model.CountDownSecond--;
            }, 1e3);
          }),
          (t.prototype.CheckFormUnfilled = function () {
            var t, n, i;
            for (
              this.model.BtnVerifyFpDisabled = !1,
                t = $("input:password", this.model.FrmId),
                n = 0;
              n < t.length;
              n++
            )
              (i = $("#" + t[n].id)),
                i.val() == "" && (this.model.BtnVerifyFpDisabled = !0);
            for (
              t = $("input:text", this.model.FrmId), n = 0;
              n < t.length;
              n++
            )
              (i = $("#" + t[n].id)),
                i.val() == "" && (this.model.BtnVerifyFpDisabled = !0);
          }),
          (t.prototype.IsUnfilled = function (n) {
            return n == "" || n == null || n == undefined;
          }),
          (t.prototype.GetVerifyModeEvent = function () {
            var i = this,
              t = new n.Models.VerifyMode();
            switch (this.model.VerifyModel.SecretCodeType) {
              case this.PasswordTypeSelectEnum.Password:
                t.VerifyUsage = VerifyUsageEnum.ForgetPwd;
                break;
              case this.PasswordTypeSelectEnum.WithdrawPassword:
                t.VerifyUsage = VerifyUsageEnum.ForgetWithdrawalPwd;
                break;
              case this.PasswordTypeSelectEnum
                .MemberPasswordAndWithdrawPassword:
                t.VerifyUsage = VerifyUsageEnum.ForgetPWDAndWithdrowalPWD;
                break;
              default:
                t.VerifyUsage = VerifyUsageEnum.ForgetPwd;
            }
            t.CellPhone = this.model.SendCaptchaModel.CellPhone;
            t.AccountID = this.model.SendCaptchaModel.AccountID;
            this.forgetPwdSvc
              .GetVerifyMode(t)
              .then(function (t) {
                i.model.CurrentVerifyMode = n.SiteCultureMethod.Provider()
                  .IsEnableSMSChangeMode
                  ? t
                  : SMSVerifyModeEnum.SMS;
                i.model.IsCanNotUseSMSProvider = !1;
              })
              .catch(function (t) {
                if (
                  t == null ||
                  t == undefined ||
                  t.Error == null ||
                  t.Error == undefined
                ) {
                  n.Helpers.AlertOnlyOKCallback(
                    "",
                    SweetAlertTypeEnum.none,
                    function () {
                      window.location.reload(!0);
                    },
                    "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                  );
                  return;
                }
                i.model.IsCanNotUseSMSProvider = !0;
              });
          }),
          (t.prototype.GetSendCaptchaButtonName = function () {
            if (this.model.IsSendCaptcha)
              return n.Helpers.ChangeLanguage("發送中");
            if (this.model.IsCanNotUseSMSProvider)
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (this.model.CurrentVerifyMode) {
              case SMSVerifyModeEnum.SMS:
                return this.model.SendSMSVerifyCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return n.Helpers.ChangeLanguage("語音");
              default:
                return n.Helpers.ChangeLanguage("讀取中");
            }
          }),
          (t.prototype.SendCustomerService = function () {
            var n = this;
            this.model.ElementManager.DisableElementBy(
              "SendCaptchaButton",
              "SendCustomerService"
            );
            this.CheckIsServiceCallbackCreated()
              .then(function (t) {
                if (!t) return n.CreateMemberServiceCenterCallback();
              })
              .finally(function () {
                n.model.ElementManager.EnableElementBy(
                  "SendCaptchaButton",
                  "SendCustomerService"
                );
              });
          }),
          (t.prototype.CreateMemberServiceCenterCallback = function () {
            var i = this.$q.defer(),
              t = new n.Models.CallbackServiceMemberModel();
            t.AccountID = this.model.SendCaptchaModel.AccountID;
            t.CallbackLanguageID = n.Helpers.GetCallbackLanguageID();
            t.LevelType = 0;
            t.Phone = this.model.SendCaptchaModel.CellPhone;
            switch (this.model.VerifyModel.SecretCodeType) {
              case "1":
                t.QuestionTypeID = 10;
                break;
              case "2":
                t.QuestionTypeID = 11;
                break;
              case "3":
                t.QuestionTypeID = 12;
            }
            return (
              this.forgetPwdSvc
                .CreateMemberServiceCenterCallback(t)
                .then(function (t) {
                  switch (t) {
                    case ServiceCenterMemberEnum.UnProcessedData:
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) + "！！"
                      );
                      break;
                    case ServiceCenterMemberEnum.Success:
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) + "！"
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
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) + "！"
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
                  i.resolve(!0);
                }),
              i.promise
            );
          }),
          (t.prototype.CheckIsServiceCallbackCreated = function () {
            var r = this,
              t = this.$q.defer(),
              i = {
                CellPhone: this.model.SendCaptchaModel.CellPhone,
                AccountID: this.model.SendCaptchaModel.AccountID,
                QuestionTypeID: 10,
              };
            switch (this.model.VerifyModel.SecretCodeType) {
              case "1":
                i.QuestionTypeID = 10;
                break;
              case "2":
                i.QuestionTypeID = 11;
                break;
              case "3":
                i.QuestionTypeID = 12;
            }
            return (
              this.forgetPwdSvc
                .CheckDisposableServiceCallBackReturnCaptchaCode(i)
                .then(function (i) {
                  (i == "NOT=0" || i == "NOT=1") &&
                    (i == "NOT=0" && (r.model.IsCustomerServiceOverLimit = !0),
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "客服人員將致電與您聯繫，請您留意接聽電話"
                      ) + "！！"
                    ),
                    t.resolve(!0));
                  i != "1" && n.Validator.IsSMSCaptchaLengthValid(i)
                    ? ((r.model.IsCallCustomerWithCallbackOK = !0),
                      (r.model.VerifyModel.CaptchaCode = i),
                      t.resolve(!0))
                    : t.resolve(!1);
                })
                .catch(function (i) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    i.Error.Message
                  );
                  t.resolve(!0);
                })
                .finally(function () {}),
              t.promise
            );
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            var t = this.GetSendCaptchaButtonName();
            return t === n.Helpers.ChangeLanguage("短信")
              ? "verCode_Msg"
              : t === n.Helpers.ChangeLanguage("語音")
              ? "verCode_Voice"
              : t === n.Helpers.ChangeLanguage("重發驗證碼") ||
                t === n.Helpers.ChangeLanguage("聯繫客服")
              ? "verCode_Rep"
              : "verCode_Msg";
          }),
          (t.prototype.OnCellphoneChange = function () {
            if (
              !this.model.SendCaptchaModel.CellPhone ||
              this.model.SendCaptchaModel.CellPhone == ""
            ) {
              this.model.IsCellPhoneValid = !1;
              return;
            }
            this.model.IsCellPhoneValid = n.Validator.IsCellPhoneFormatValid(
              this.model.SendCaptchaModel.CellPhone
            );
          }),
          (t.prototype.IsStep1InputValid = function () {
            return this.model.VerifyModel.SecretCodeType ==
              this.PasswordTypeSelectEnum.None
              ? !1
              : !this.model.SendCaptchaModel.AccountID ||
                this.model.SendCaptchaModel.AccountID == ""
              ? !1
              : this.model.IsCellPhoneValid
              ? this.model.IsCallCustomerWithCallbackOK
                ? !0
                : !this.model.VerifyModel.CaptchaCode ||
                  !n.Validator.IsSMSCaptchaLengthValid(
                    this.model.VerifyModel.CaptchaCode
                  )
                ? !1
                : this.model.SendSMSVerifyCount == 0
                ? !1
                : !0
              : !1;
          }),
          (t.prototype.IsSendCaptchaButtonEnabled = function () {
            return (
              !this.model.IsCustomerServiceOverLimit &&
              this.model.IsCellPhoneValid &&
              !this.model.IsSendCaptcha &&
              !this.model.IsCallCustomerWithCallbackOK &&
              this.model.ElementManager.IsEnabled("SendCaptchaButton")
            );
          }),
          (t.prototype.IsSendSMSWithWaitNextEnable = function () {
            return this.model.IsSendCaptcha && this.model.IsCountdown;
          }),
          (t.prototype.GetVoiceLi = function () {
            return this.model.SendCaptchaCodeMsg ==
              n.Helpers.ChangeLanguage(
                "電話正在撥出，請您留意接聽獲取驗證碼。"
              ) && this.IsSendSMSWithWaitNextEnable()
              ? "listVoice"
              : "";
          }),
          (t.prototype.SendCaptchaButtonClick = function () {
            var t = this,
              i = new n.Models.SendCaptchaModelForgetPwdView(),
              r;
            if (
              ((i.CellPhone = this.model.SendCaptchaModel.CellPhone),
              (i.AccountID = this.model.SendCaptchaModel.AccountID),
              this.appContext.LoginStatus ==
                n.Models.LoginStatusEnum.Loggedin &&
                ((r =
                  n.Helpers.FieldMask(
                    this.model.SendCaptchaModel.CellPhone,
                    FieldMaskTypeEnum.CellPhone
                  ) != this.appContext.UserProfile.CellPhone),
                n.Models.LoginStatusEnum.Loggedin && r))
            ) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                "您輸入的手機號碼與該會員帳號綁定的手機號不符！"
              );
              return;
            }
            if (
              this.model.VerifyModel.SecretCodeType ==
              this.PasswordTypeSelectEnum.None
            ) {
              this.PwdTypeChange();
              $("#PWDType").focus();
              return;
            }
            if (!i.AccountID || i.AccountID == "") {
              $("#forgetPwdAccount").valid();
              $("#forgetPwdAccount").focus();
              return;
            }
            if (this.model.IsCanNotUseSMSProvider) {
              this.SendCustomerService();
              return;
            }
            this.model.VerifyModel.SecretCodeType ===
            this.PasswordTypeSelectEnum.Password
              ? ((i.VerifyUsage = VerifyUsageEnum.ForgetPwd),
                (i.ForgetSecretCodeType = ForgetPwdTypeEnum.AccountPwd))
              : this.model.VerifyModel.SecretCodeType ===
                this.PasswordTypeSelectEnum.WithdrawPassword
              ? ((i.VerifyUsage = VerifyUsageEnum.ForgetWithdrawalPwd),
                (i.ForgetSecretCodeType = ForgetPwdTypeEnum.WithdrawalPwd))
              : this.model.VerifyModel.SecretCodeType ===
                  this.PasswordTypeSelectEnum
                    .MemberPasswordAndWithdrawPassword &&
                ((i.VerifyUsage = VerifyUsageEnum.ForgetPWDAndWithdrowalPWD),
                (i.ForgetSecretCodeType = ForgetPwdTypeEnum.Both));
            this.model.IsSendCaptcha = !0;
            this.forgetPwdSvc
              .SendCaptchaByAccount(i)
              .then(function (i) {
                t.model.SendSMSVerifyCount++;
                n.Validator.IsSMSCaptchaLengthValid(i.Message) &&
                  (t.model.VerifyModel.CaptchaCode = i.Message);
                t.model.SendCaptchaCodeMsg =
                  t.model.CurrentVerifyMode === SMSVerifyModeEnum.SMS
                    ? n.Helpers.ChangeLanguage(
                        "驗證碼已發送至您的手機，請查收。"
                      )
                    : n.Helpers.ChangeLanguage(
                        "電話正在撥出，請您留意接聽獲取驗證碼。"
                      );
                t.model.IsCountdown = !0;
                t.Countdown();
              })
              .catch(function (i) {
                if (i.Error.Message.indexOf("NotCanUseProvider") > -1) {
                  t.model.IsCanNotUseSMSProvider = !0;
                  t.model.IsSendCaptcha = !1;
                  return;
                }
                !n.Helpers.IsNull(i.Error) &&
                  n.Verifier.IsVerifyTimesOverLimit(i.Error.Message) &&
                  t.model.ElementManager.DisableElement("SendCaptchaButton");
                i && i.Error && (i.Error.Code == 5999 || i.Error.Code == 4005)
                  ? (i.Error.Code == 5999 &&
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        i.Error.Message
                      ),
                    i.Error.Code == 4005 &&
                      t.messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnAccountIsLockHintOpen,
                        i.Error.Message
                      ))
                  : n.Helpers.AlertSwitch(i);
                t.model.IsSendCaptcha = !1;
              })
              .finally(function () {
                t.GetVerifyModeEvent();
              });
          }),
          (t.prototype.ClearErrorMessage = function (n) {
            var i = jQuery("#" + n).parent(),
              t;
            $(i).removeClass("error");
            $(i).find("span.errorHint").remove();
            t = jQuery("#" + n).closest("li.error");
            t.length > 0 && t.removeClass("error");
          }),
          (t.$name = "ForgetPwdCtrl"),
          (t.$inject = [
            "$scope",
            "$interval",
            "$timeout",
            "messageBus",
            "appContext",
            "ForgetPwdSvc",
            "ObjectDiff",
            "ToolsSvc",
            "$q",
          ]),
          t
        );
      })();
      t.ForgetPwdCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.ForgetPwdCtrl.$name,
  OBSApp.Controllers.ForgetPwdCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var r = (function () {
          function i() {
            this.LeftListTransferPointModel = new t();
            this.LeftPointListPointsControlCenter =
              new n.GetPointsControlCenter();
            this.MonitorGetGameBalanceFinishTime = 500;
            this.KeepFinishReloadBalanceTime = 1e4;
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap;
          }
          return i;
        })(),
        i,
        t;
      n.LeftPointListViewModel = r;
      i = (function () {
        function n() {}
        return n;
      })();
      n.InputGameType = i;
      t = (function () {
        function n() {}
        return n;
      })();
      n.LeftListTransferPointModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.PlatformTransfer = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Game/PlatformTransfer", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
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
                .Get("../api/Authorize/SignCheck", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.$name = "LeftPointListSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.LeftPointListService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.LeftPointListService.$name,
  OBSApp.Services.LeftPointListService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n, t, i, r, u, f) {
          this.leftPointListSvc = n;
          this.$messageBus = t;
          this.appConfig = i;
          this.$blockUI = r;
          this.$interval = u;
          this.$timeout = f;
          this.enabledTransferStatus = !0;
          this.isEnabled = this.appConfig.CompetenceModel.IsEnable;
          this.InitializeViewModel();
          this.InitializeLeftPointSlide();
          this.StartIntervalGetAccountBalance();
        }
        return (
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
          (t.prototype.InitializeViewModel = function () {
            var t = this;
            this.model = new n.Models.LeftPointListViewModel();
            this.$messageBus.On(
              n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
              function (n, i) {
                var r = angular.copy(i),
                  u = r.GameAvailableList.filter(function (n) {
                    return n.DisplayType === 1 || n.DisplayType === 3;
                  });
                t.model.LeftPointListPointsControlCenter = r;
                t.model.LeftPointListPointsControlCenter.GameAvailableList = u;
                t.model.LeftPointListPointsControlCenter.IsGetGameBalance = !1;
                t.model.LeftPointListPointsControlCenter.IsAllGameBalanceReady =
                  u.every(function (n) {
                    return n.IsBalanceLoading == !1;
                  });
              }
            );
          }),
          (t.prototype.InitializeLeftPointSlide = function () {
            var n = this.appConfig.LanguageCode.toLowerCase(),
              r = 0,
              t = 0,
              i = 0;
            switch (n) {
              case "th-th":
                r = 410;
                t = 411;
                i = 412;
                break;
              case "vi-vn":
                t = 445;
                i = 446;
                break;
              default:
                r = 315;
                t = 316;
                i = 317;
            }
            jQuery(".scrollbar-macosx").length > 0 &&
              ((n == "th-th" || n == "zh-cn" || n == "id-id") &&
                jQuery(".btn_pointList:not([class*='PointList_'])")
                  .click(function (n) {
                    jQuery("#" + n.currentTarget.id)
                      .toggleClass("on")
                      .children(".pointList_drop")
                      .slideToggle(300, function () {
                        jQuery("#" + n.currentTarget.id).hasClass("on") &&
                          jQuery(".PointList").animate({ scrollTop: r }, 300);
                      });
                  })
                  .children()
                  .click(function () {
                    return !1;
                  }),
              jQuery(".PointList_other")
                .click(function (i) {
                  jQuery("#" + i.currentTarget.id)
                    .toggleClass("on")
                    .children(".pointList_drop")
                    .slideToggle(300, function () {
                      jQuery("#" + i.currentTarget.id).hasClass("on") &&
                        (n === "vi-vn"
                          ? jQuery(".PointList").animate({ scrollTop: t }, 300)
                          : jQuery(".PointList").animate(
                              {
                                scrollTop:
                                  t +
                                  jQuery(
                                    ".btn_pointList:not([class*='PointList_'])"
                                  ).height(),
                              },
                              300
                            ));
                    });
                })
                .children()
                .click(function () {
                  return !1;
                }),
              jQuery(".PointList_games")
                .click(function (t) {
                  jQuery("#" + t.currentTarget.id)
                    .toggleClass("on")
                    .children(".pointList_drop")
                    .slideToggle(300, function () {
                      jQuery("#" + t.currentTarget.id).hasClass("on") &&
                        (n === "vi-vn"
                          ? jQuery(".PointList").animate(
                              {
                                scrollTop:
                                  i + jQuery(".PointList_other").height(),
                              },
                              300
                            )
                          : jQuery(".PointList").animate(
                              {
                                scrollTop:
                                  i +
                                  jQuery(
                                    ".btn_pointList:not([class*='PointList_'])"
                                  ).height() +
                                  jQuery(".PointList_other").height(),
                              },
                              300
                            ));
                    });
                })
                .children()
                .click(function () {
                  return !1;
                }),
              jQuery(".pointList_drop").click(function () {
                event.stopPropagation();
              }),
              setTimeout(function () {
                jQuery(".scrollbar-macosx").scrollbar();
              }, 500));
          }),
          (t.prototype.ResizeLeftMenuHeight = function () {
            setTimeout(function () {
              var n = jQuery("body").height();
              ((n -= 95), n <= 500) || jQuery("#tbLeftMemu").height(n);
            }, 200);
          }),
          (t.prototype.AllReload = function () {
            this.$messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnRefreshAllPointsControlCenter,
              this.model.LeftPointListPointsControlCenter
            );
          }),
          (t.prototype.GameReload = function (t) {
            this.model.LeftPointListPointsControlCenter.SetGameReload(t);
            this.$messageBus.Emit(
              n.ConstDefinition.MessageBusEventName
                .OnSetOneGameReLoadPointsControlCenter,
              t
            );
          }),
          (t.prototype.TransferPoint = function (t, i, r) {
            var f = this,
              u;
            return this.enabledTransferStatus === !1
              ? !1
              : ((this.enabledTransferStatus = !1),
                (u = new n.Models.LeftListTransferPointModel()),
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
                this.$blockUI.start(),
                this.leftPointListSvc
                  .PlatformTransfer(u)
                  .then(function () {
                    return (
                      n.Helpers.NotifyBox(
                        n.Helpers.ChangeLanguage("轉點成功"),
                        null,
                        null,
                        1e3
                      ),
                      !0
                    );
                  })
                  .catch(function (t) {
                    if (u.FromGameType === "DDD") {
                      if (f.SpecialErrorBy3D(t.Error.Message)) return;
                      if (
                        t.Error.Code ===
                        ApiStatusCodeEnum.TransferPointCommonError
                      ) {
                        n.Helpers.AlertSwitch(t);
                        return;
                      }
                    }
                    if (
                      t.Error.Code ===
                      ApiStatusCodeEnum.PlatformMutualTransferReachedNumberLimit
                    )
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("今日互轉次數已達到限定值")
                      );
                    else if (
                      t.Error.Code ===
                      ApiStatusCodeEnum.PlatformMutualTransferReachedMoneyLimit
                    )
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("今日互轉額度已達限定值")
                      );
                    else if (
                      t.Error.Code === ApiStatusCodeEnum.SwitchNotEnable
                    ) {
                      var i = n.Helpers.StringFormat(
                        n.Helpers.ChangeLanguage(
                          "很抱歉，目前{0}轉帳功能維護中！"
                        ),
                        r
                      );
                      n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, i);
                    } else
                      t.Error.Code === ApiStatusCodeEnum.PermissionDenied
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
                              window.location.reload(!0);
                            }
                          )
                        : n.Helpers.AlertSwitch(t);
                  })
                  .finally(function () {
                    f.GameReload(t);
                    f.enabledTransferStatus = !0;
                    f.ControlTransferButton(!1);
                    f.$blockUI.stop();
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
          (t.prototype.FindPlatform = function (n) {
            var t = _.filter(
              this.model.LeftPointListPointsControlCenter.GameAvailableList,
              function (t) {
                return t.GameID === n;
              }
            );
            return t.length === 0 ? null : t[0];
          }),
          (t.prototype.IsPlatformMaintain = function (n) {
            var t = this.FindPlatform(n);
            return t && t.Visible === "0" ? !0 : !1;
          }),
          (t.prototype.GetCSS = function (n) {
            return n === "0" ? "1" : "0";
          }),
          (t.prototype.ClosePlatformTransferLeftWindow = function (t) {
            n.Helpers.AlertOnlyOKCallback(
              "",
              SweetAlertTypeEnum.none,
              function () {
                window.close();
              },
              t
            );
          }),
          (t.prototype.StartIntervalGetAccountBalance = function () {
            var t = this;
            (angular.isDefined(this.checkAccountBalanceInterval) ||
              this.checkAccountBalanceInterval !== null) &&
              (this.$interval.cancel(this.checkAccountBalanceInterval),
              (this.checkAccountBalanceInterval = null));
            this.checkAccountBalanceInterval = this.$interval(
              function () {
                t.leftPointListSvc
                  .SignCheck()
                  .then(function (i) {
                    if (i === !1) {
                      angular.isDefined(t.checkAccountBalanceInterval) &&
                        (t.$interval.cancel(t.checkAccountBalanceInterval),
                        (t.checkAccountBalanceInterval = null));
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "請重新登錄",
                        null,
                        function () {
                          window.close();
                        }
                      );
                      return;
                    }
                    t.$messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnSetMainBalanceControlCenter,
                      null
                    );
                  })
                  .catch(function () {});
              },
              parseInt(n.GlobalJsConfig.Config.GetGameBalanceTime) * 1e3,
              0,
              !0,
              null,
              "interval"
            );
          }),
          (t.$name = "LeftPointListCtrl"),
          (t.$inject = [
            "LeftPointListSvc",
            "messageBus",
            "appConfig",
            "blockUI",
            "$interval",
            "$timeout",
          ]),
          t
        );
      })();
      t.LeftPointListControl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.LeftPointListControl.$name,
  OBSApp.Controllers.LeftPointListControl
),
  (function (n) {
    var t;
    (function (n) {
      var c = (function () {
          function u() {
            this.LevelTypeList = [];
            this.BalanceAmount = -1;
            this.UserLevelNumber = 0;
            this.UserLevel = "";
            this.MessageBoxCount = 0;
            this.LoginAreaPointsControlCenter = new n.GetPointsControlCenter();
            this.AllGameNames = [];
            this.IsCanNextGetBalance = !0;
            this.MonitorGetGameBalanceFinishTime = 500;
            this.NewsQueryModel = new t();
            this.NewsForImportantList = [];
            this.ImportantNewsItem = new i();
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap;
            this.HeaderTransferPointModel = new r();
          }
          return u;
        })(),
        u,
        f,
        e,
        o,
        t,
        i,
        s,
        h,
        r;
      n.LoginAreaViewModel = c;
      u = (function () {
        function n() {}
        return n;
      })();
      n.GetBalancePost = u;
      f = (function () {
        function n() {}
        return n;
      })();
      n.LoginInputGameType = f;
      e = (function () {
        function n() {}
        return n;
      })();
      n.LevelTypeList = e;
      o = (function () {
        function n() {}
        return n;
      })();
      n.Language = o;
      t = (function () {
        function n() {
          this.NewsID = "";
          this.NewsCategory = 7;
          this.NewsLocation = 1;
          this.PageNumber = 0;
          this.PageSize = 20;
          this.WebSide = "PC";
        }
        return n;
      })();
      n.ImportantNewsQuery = t;
      i = (function () {
        function n() {}
        return n;
      })();
      n.ImportantNews = i;
      s = (function () {
        function n() {}
        return n;
      })();
      n.BalanceGroup = s;
      h = (function () {
        function n() {}
        return n;
      })();
      n.BalanceGroupSource = h;
      r = (function () {
        function n() {}
        return n;
      })();
      n.HeaderTransferPointModel = r;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
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
                var u,
                  f = function (i) {
                    r.balanceSlideFunc &&
                      ((u = n(r.balanceSlideFunc)), u(t, { $event: i }));
                  },
                  e = function (n) {
                    jQuery(".memberPMenu").css("display") === "none"
                      ? (jQuery(".memberPMenu").slideDown(200),
                        jQuery(".memberPArrow").addClass("pArrowOn"))
                      : (jQuery(".memberPMenu").slideUp(200),
                        jQuery(".memberPArrow").removeClass("pArrowOn"));
                    f(n);
                  },
                  o = function (n) {
                    if (
                      jQuery(".memberPMenu").length !== 0 &&
                      jQuery(".memberPMenu").css("display") !== "none" &&
                      !(jQuery("#clickTransferGamesPointToMain").length > 0)
                    ) {
                      var t = $(n.target);
                      jQuery(n.target).parents("#GameMenu").length !== 0 ||
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
                        (jQuery(".memberPMenu").slideUp(200),
                        jQuery(".memberPArrow").removeClass("pArrowOn"),
                        f(n));
                    }
                  };
                i.click(e);
                jQuery(document).click(o);
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
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterDirective(
  OBSApp.Directives.BalanceSlide.$name,
  OBSApp.Directives.BalanceSlide.$inject
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t, i) {
          this.dataProvider = n;
          this.xpagerSvc = t;
          this.permissionSvc = i;
        }
        return (
          (n.prototype.SignOut = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Authorize/SignOut", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.TransferGamesPointToMain = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Game/TransferGamesPointToMain",
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
          (n.prototype.PlatformTransfer = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Game/PlatformTransfer", HttpMethodEnum.Post, n)
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
                  "../api/Game/GetPlatformMaintainSettingNow",
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
          (n.prototype.LevelTypeInfoGetByLanguageCode = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Common/GetLevelTypeInfoByLanguageCode",
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
          (n.prototype.GetMemberLevelType = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetMemberLevelType",
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
          (n.prototype.GetAllGameNames = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Game/GetAllGameServiceNames", HttpMethodEnum.Post)
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
                  "../api/Common/GetDBAConfigMemberPaymemtBySettingType",
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
          (n.prototype.GetMemberInfoByAccountID = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/GetMemberFrontendInfo",
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
          (n.prototype.GetNewsByCondition = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Common/GetRevealableNewsByCondition",
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
          (n.$name = "LoginAreaSvc"),
          (n.$inject = ["DataProvider", "XPagerSvc", "PermissionSvc"]),
          n
        );
      })();
      n.LoginAreaSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.LoginAreaSvc.$name,
  OBSApp.Services.LoginAreaSvc
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
        function t(t, i, r, u, f, e, o, s, h, c, l, a) {
          var v = this;
          this.timeout = t;
          this.interval = i;
          this.appConfig = r;
          this.appContext = u;
          this.appContextSvc = f;
          this.messageBus = e;
          this.adapter = o;
          this.loginAreaSvc = s;
          this.permissionSvc = h;
          this.dataProvider = c;
          this.$compile = l;
          this.$scope = a;
          this.isInitAdapter = !1;
          this.intervalSwitch = !1;
          this.isTransferGamesPointToMain = !0;
          this.isTransferGamesPointToMainSingle = !0;
          this.NoneAvailableGame = !1;
          this.InitializeViewModel();
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnLoginResult,
            function () {
              v.model.LoginStatus = n.Models.LoginStatusEnum.WaitingLogIn;
              v.appContext.LoginStatus = n.Models.LoginStatusEnum.WaitingLogIn;
              v.appContextSvc.GetLoggedinAreaInfo().catch(function () {});
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnLoginResultConfig,
            function () {
              v.appContextSvc.GetLoggedinAppConfigInfo().catch(function () {});
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnRefreshUserProfile,
            function () {
              v.appContextSvc.GetUserProfile();
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              v.model.LoginStatus = i;
              i === n.Models.LoginStatusEnum.Loggedin
                ? ((v.model.LoginInfo = u.UserProfile),
                  (v.model.LoginInfo.MainAccountBalance = Math.floor(
                    v.model.LoginInfo.MainAccountBalance
                  )),
                  v.appContextSvc.StartCheckInterval(),
                  v.GetAllGameServiceNames(),
                  v.InitializeAdapter(),
                  v.InitializeCountDown(),
                  v.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName.OnSignInFinish,
                    null
                  ),
                  (v.signmodel.AccountID = v.model.LoginInfo.AccountID),
                  v.loginAreaSvc
                    .GetMemberInfoByAccountID(v.signmodel)
                    .then(function (n) {
                      v.model.LoginInfo.NickName = n.NickName;
                      v.model.LoginInfo.MemberStatus = n.MemberStatus;
                    })
                    .catch(function () {}),
                  (v.gameGropusSource = JSON.parse(
                    $("#gamebalancegropus").val()
                  )),
                  $("#gamebalancegropus").remove(),
                  v.timeout(function () {
                    $(".menuArea > .mainMenu > .menu li > *").removeAttr(
                      "disabled"
                    );
                  }, 700))
                : i === n.Models.LoginStatusEnum.Dney &&
                  (e.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .TriggerCloseOpenWindow,
                    ""
                  ),
                  e.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnAccountIsLockHintOpen,
                    n.Helpers.ChangeLanguage("您的帳號已被鎖定，請聯繫客服") +
                      "<br/><div style='color:red'>" +
                      n.Helpers.ChangeLanguage("請勿提供手機驗證碼給他人！") +
                      "</div>"
                  ));
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnCheckNeddKickLoginStatus,
            function (t, i) {
              i !== 1001 &&
                (v.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnSignOutFinish,
                  null
                ),
                i != 4009 && i != 4010 && v.loginAreaSvc.SignOut(),
                v.appContextSvc.StopCheckInterval(),
                v.appContextSvc.ResetUserProfile(),
                v.checkBalanceInterval &&
                  (v.interval.cancel(v.checkBalanceInterval),
                  (v.checkBalanceInterval = null),
                  (v.intervalSwitch = !1)),
                v.checkRefreashInterval &&
                  (v.interval.cancel(v.checkRefreashInterval),
                  (v.checkRefreashInterval = null)),
                (v.model.LoginStatus = n.Models.LoginStatusEnum.NotLogin),
                v.adapter != null &&
                  v.adapter.IsConnect() &&
                  v.adapter.Disconnect(),
                v.timeout(function () {
                  switch (i) {
                    case 4e3:
                      break;
                    case 4001:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "您的帳號已禁止登入，如有疑問請聯繫客服人員",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4002:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "偵測到重複登入，已將您登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4003:
                    case 4010:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "您已經登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4004:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "單次登入時間過長已超過限制時間，已將您登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4005:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnAccountIsLockHintOpen,
                        n.Helpers.ChangeLanguage(
                          "您的帳號已被鎖定，請聯繫客服"
                        ) +
                          "<br/><div style='color:red'>" +
                          n.Helpers.ChangeLanguage(
                            "請勿提供手機驗證碼給他人！"
                          ) +
                          "</div>"
                      );
                      break;
                    case 4006:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "您帳號已被黑名單，已將您登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4008:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "系統維護中，已將您登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                      break;
                    case 4009:
                      window.location.reload(!0);
                      break;
                    case 4011:
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "網路異常，請刷新頁面",
                        null,
                        function (n) {
                          n && window.location.reload(!0);
                        }
                      );
                      break;
                    case 4007:
                    default:
                      e.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .TriggerCloseOpenWindow,
                        ""
                      );
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "系統異常，已將您登出",
                        null,
                        function () {
                          location.reload(!0);
                        }
                      );
                  }
                }, 1));
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
            function (t, i) {
              var r = angular.copy(i),
                u = r.GameAvailableList.filter(function (n) {
                  return n.DisplayType === 1 || n.DisplayType === 2;
                }),
                f;
              u = _.sortBy(u, function (n) {
                return Number(n.Sort);
              });
              v.model.LoginAreaPointsControlCenter = r;
              v.model.LoginAreaPointsControlCenter.GameAvailableList = u;
              v.model.BalanceAmount =
                r.AccountBalance == 0
                  ? 0
                  : r.AccountBalance || v.model.BalanceAmount || 0;
              v.model.LoginInfo &&
                (v.model.LoginInfo.MainAccountBalance =
                  r.AccountBalance == 0
                    ? 0
                    : r.AccountBalance ||
                      v.model.LoginInfo.MainAccountBalance ||
                      0);
              v.model.GameMenusBalanceList = _.filter(u, function (n) {
                return n.GameID !== "Total" && n.GameID !== "Lover";
              });
              v.model.GameMenusBottomList = _.filter(u, function (n) {
                return n.GameID === "Total" || n.GameID === "Lover";
              });
              v.NoneAvailableGame =
                _.filter(u, function (n) {
                  return n.Visible != "0" && n.GameID != "AnchorGift";
                }).length === 0;
              f = {
                ServiceID: "",
                ServiceName: n.Helpers.ChangeLanguage("總額度"),
                GameID: "Total",
                TransferType: 0,
                Visible: "1",
                Balance: r.TotalBalance,
                IsBalanceLoading: !1,
                DisplayType: 1,
                Sort: 105,
                SubItemList: [],
              };
              v.model.GameMenusBottomList.push(f);
              v.model.GameMenusBottomList = _.sortBy(
                v.model.GameMenusBottomList,
                function (n) {
                  return Number(n.Sort);
                }
              );
              v.GameGroupSort();
            }
          );
          this.checkRefreashInterval = this.interval(
            this.InitialMainPageRefresh.bind(this),
            n.GlobalJsConfig.Config.HomeRefreashSec * 1e3
          );
          this.GetNews();
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.InitializeViewModel = function (t) {
            var i = new n.Models.LoginAreaViewModel(),
              r;
            i.LoginStatus = t || n.Models.LoginStatusEnum.Checking;
            this.model = i;
            r = new n.Models.SignInViewModel();
            this.signmodel = r;
          }),
          (t.prototype.InitializeAdapter = function () {
            var t = this;
            (this.adapter != null && this.adapter.IsConnect()) ||
              this.isInitAdapter ||
              ((this.isInitAdapter = !0),
              this.adapter.Init({
                HubName: "messageHub",
                HubUrl: n.GlobalJsConfig.Config.SignalRNFSvcHost,
                QueryString: "l=1&aid=" + this.appContext.UserProfile.AID,
                IsLogging: n.GlobalJsConfig.Config.SignalRNFSvcIsDebug,
              }),
              this.adapter.Notification.MessageSvcCallback.NotifyMessageAck(
                function () {
                  t.timeout(function () {
                    t.GetNotifyMessageUnreadCount();
                  });
                }
              ),
              this.adapter.Notification.MessageSvcCallback.NotifyMessageUnreadCountAck(
                function (n) {
                  t.timeout(function () {
                    t.model.MessageBoxCount = n.Data.TotalItemCount;
                  });
                }
              ),
              this.adapter
                .Connect()
                .done(function () {
                  t.timeout(function () {
                    t.GetNotifyMessageUnreadCount();
                  });
                })
                .fail(function () {
                  t.model.MessageBoxCount = 0;
                })
                .always(function () {
                  t.isInitAdapter = !1;
                }));
          }),
          (t.prototype.InitializeCountDown = function () {
            var t = this;
            this.intervalSwitch ||
              ((this.checkBalanceInterval = this.interval(
                function () {
                  t.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnSetMainBalanceControlCenter,
                    null
                  );
                },
                parseInt(n.GlobalJsConfig.Config.GetGameBalanceTime) * 1e3,
                0,
                !0,
                null,
                "Initial"
              )),
              (this.intervalSwitch = !0));
          }),
          (t.prototype.CheckTopMenuPermission = function (n) {
            return this.model.LoginInfo.LoginMenuSwitch[n] == null
              ? !1
              : this.model.LoginInfo.LoginMenuSwitch[n] === "True";
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
            this.appContextSvc.StopCheckInterval();
            this.checkBalanceInterval &&
              (this.interval.cancel(this.checkBalanceInterval),
              (this.checkBalanceInterval = null),
              (this.intervalSwitch = !1));
            this.adapter != null &&
              this.adapter.IsConnect() &&
              this.adapter.Disconnect();
            this.appContextSvc.ResetUserProfile();
            this.InitializeViewModel(n.Models.LoginStatusEnum.NotLogin);
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnSignOutFinish,
              null
            );
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.GetDepositBonus,
              n.Models.LoginStatusEnum.NotLogin
            );
            this.loginAreaSvc
              .SignOut()
              .then(function () {
                location.href = "/Home/Index";
              })
              .catch(function () {
                location.href = "/Home/Index";
              });
            n.Helpers.DeleteLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter
            );
            try {
              window.obspop && window.obspop.close();
              window.customerServ &&
                $(window.customerServ).off("beforeunload", function () {
                  return null;
                });
              for (var t in window)
                window.hasOwnProperty(t) &&
                  (t == "obspop" || t == "customerServ") &&
                  ($(window[t]).off("beforeunload"), window[t].close());
            } catch (i) {
              console.error(i);
            }
          }),
          (t.prototype.FancyBoxClose = function () {
            jQuery.fancybox.close();
          }),
          (t.prototype.GetAllGameServiceNames = function () {
            var t = this;
            this.loginAreaSvc
              .GetAllGameNames()
              .then(function (n) {
                t.model.AllGameNames = n;
              })
              .catch(function (t) {
                n.Helpers.AlertSwitch(t);
              });
          }),
          (t.prototype.ClickSlide = function () {
            var t = this;
            this.model.IsCanNextGetBalance &&
              (this.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName
                  .OnRefreshAllPointsControlCenter,
                this.model.LoginAreaPointsControlCenter
              ),
              (this.model.IsCanNextGetBalance = !1),
              this.timeout(function () {
                t.model.IsCanNextGetBalance = !0;
              }, 3e4));
          }),
          (t.prototype.TransferGamesPointToMain = function () {
            var i = this,
              t,
              r;
            this.isTransferGamesPointToMain !== !1 &&
              ((t = function () {
                jQuery(".memberPMenu").slideUp(200);
                jQuery(".memberPArrow").removeClass("pArrowOn");
              }),
              (this.isTransferGamesPointToMain = !1),
              (r = !1),
              this.loginAreaSvc
                .TransferGamesPointToMain()
                .then(function (i) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage(i.Message),
                    null,
                    function () {
                      t();
                    },
                    null,
                    null,
                    null,
                    !1,
                    null
                  );
                })
                .catch(function (i) {
                  i.Error.Code === 4015 && (r = !0);
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage(i.Error.Message),
                    null,
                    function () {
                      t();
                    },
                    null,
                    null,
                    null,
                    !1,
                    null
                  );
                })
                .finally(function () {
                  r ||
                    i.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnRefreshAllPointsControlCenter,
                      i.model.LoginAreaPointsControlCenter
                    );
                  i.isTransferGamesPointToMain = !0;
                  t();
                }));
          }),
          (t.prototype.TransferPoint = function (t, i, r) {
            var f = this,
              u;
            return this.isTransferGamesPointToMainSingle === !1
              ? !1
              : ((this.isTransferGamesPointToMainSingle = !1),
                (u = new n.Models.HeaderTransferPointModel()),
                i === 0)
              ? (n.Helpers.AlertFocus(
                  n.Helpers.ChangeLanguage("該平台餘額不足"),
                  SweetAlertTypeEnum.none,
                  "transfermoney1"
                ),
                !1)
              : ((u.FromGameType = t),
                (u.ToGameType = "Member"),
                (u.TransferAmount = i),
                this.loginAreaSvc
                  .PlatformTransfer(u)
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
                            window.location.reload(!0);
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
                    f.isTransferGamesPointToMainSingle = !0;
                    f.messageBus.Emit(
                      n.ConstDefinition.MessageBusEventName
                        .OnSetOneGameReLoadPointsControlCenter,
                      t
                    );
                  }),
                !0);
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
          (t.prototype.IsShowTransferOrSpinner = function (n, t) {
            return n < 1 ? !1 : t && this.isTransferGamesPointToMain;
          }),
          (t.prototype.IsFriendExist = function () {
            var n = window.sessionStorage.getItem("InviteAccountID") || "";
            return !(n == undefined || n == "");
          }),
          (t.prototype.CheckIfRegister = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
              { elemId: "PWD" }
            );
            var t = this.dataProvider.CreateDeferred();
            return this.IsFriendExist()
              ? (t.resolve(!0), t.promise)
              : (this.permissionSvc
                  .IsMemberRegisterEnabled()
                  .then(function (i) {
                    i === !0
                      ? t.resolve(i)
                      : (n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          "很抱歉，目前會員註冊關閉中",
                          null,
                          function () {
                            return window.location.reload();
                          }
                        ),
                        t.resolve(i));
                  })
                  .catch(function (i) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      i.Error.Message
                    );
                    t.reject(i);
                  }),
                t.promise);
          }),
          (t.prototype.GetDepositPromptText = function () {
            return this.CheckTopMenuPermission("CanDeposit")
              ? this.appContext.UserProfile.MemberStatus ==
                  n.Models.MemberStatusEnum.Audit &&
                n.SiteCultureMethod.Provider()
                  .IsEnableMemberStatus3UnderReviewWarn
                ? n.Helpers.ChangeLanguage(
                    "您已完善資料，待通過資料審核，即開放存款，請耐心等候"
                  )
                : this.CheckTopMenuPermission("CanDepositP")
                ? void 0
                : n.Helpers.ChangeLanguage(
                    "很抱歉，目前存款功能暫不開放，請聯繫客服中心！"
                  )
              : this.model.LoginInfo.LoginMenuSwitch.DepositTipString;
          }),
          (t.prototype.GetWithdrawalPromptText = function () {
            return this.CheckTopMenuPermission("CanWithdrawal")
              ? this.CheckTopMenuPermission("CanWithdrawalP")
                ? void 0
                : n.Helpers.ChangeLanguage(
                    "很抱歉，目前提款功能暫不開放，請聯繫客服中心！"
                  )
              : this.model.LoginInfo.LoginMenuSwitch.WithdrawalTipString;
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
          (t.prototype.InitialMainPageRefresh = function () {
            var t = this;
            this.appContext.LoginStatus == n.Models.LoginStatusEnum.Loggedin
              ? this.appContextSvc
                  .RefreshMemberBlackList()
                  .then(function () {
                    t.RefreshHtmlModuleContent();
                  })
                  .catch(function () {
                    t.RefreshHtmlModuleContent();
                  })
              : (this.appContext.UserProfile = __assign(
                  {},
                  n.Models.DefaultUserProfile
                ));
          }),
          (t.prototype.RefreshHtmlModuleContent = function () {
            var n = this,
              i = location.href,
              t = window.location.protocol + "//" + window.location.hostname;
            location.port != "" && (t = t + ":" + location.port);
            $.post(t + "/HtmlModule/MainMenu", function (i) {
              if (
                i != null &&
                (!(i.length > 0) || !(i.indexOf("Access Restricted") > -1))
              ) {
                var r = $("#MainMenu").html(i);
                n.$compile(r)(n.$scope);
                $.post(t + "/HtmlModule/LeftGuild")
                  .done(function (i) {
                    i == null ||
                      (i.length > 0 && i.indexOf("Access Restricted") > -1) ||
                      $.post(t + "/HtmlModule/GuildMobile", function (r) {
                        var u, f;
                        r == null ||
                          (r.length > 0 &&
                            r.indexOf("Access Restricted") > -1) ||
                          ((u = $(".guildM").height()),
                          $(".guildM").css("min-height", u),
                          $(".guildM").html(i),
                          (f = $(".guildM").append(r)),
                          n.$compile(f)(n.$scope),
                          n.timeout(function () {
                            $(".guildM").css("min-height", "");
                          }, 1e3),
                          $.post(t + "/HtmlModule/IndexMenu", function (i) {
                            var r, u;
                            i == null ||
                              (i.length > 0 &&
                                i.indexOf("Access Restricted") > -1) ||
                              ((r = $("#indexMenu").height()),
                              $("#indexMenu").css("min-height", r),
                              (u = $("#indexMenu").html(i)),
                              n.$compile(u)(n.$scope),
                              n.timeout(function () {
                                $("#indexMenu").css("min-height", "");
                              }, 1e3),
                              $.getScript(
                                t + "/Scripts/App/Libs/Art/custom.js"
                              ));
                          }));
                      });
                  })
                  .fail(function () {
                    $.getScript(t + "/Scripts/App/Libs/Art/custom.js");
                  });
              }
            });
          }),
          (t.prototype.GetNews = function () {
            var n = this;
            this.loginAreaSvc
              .GetNewsByCondition(this.model.NewsQueryModel)
              .then(function (t) {
                var i, r, u;
                if (
                  t != undefined &&
                  t != null &&
                  t.length > 0 &&
                  ((n.model.NewsForImportantList = t),
                  (i = t[0]),
                  (r = n.GetImportantNewsID(i)),
                  r != i.NewsID)
                ) {
                  if (
                    ((u = _.includes(
                      location.pathname.toLowerCase(),
                      "registerfinished"
                    )),
                    u)
                  )
                    return;
                  n.GetNewsItem(i);
                  n.FancyBoxOpenByImportantNews("#announcement");
                }
              })
              .catch(function () {});
          }),
          (t.prototype.GetMarquee = function () {
            var n = !1,
              t;
            this.model.NewsForImportantList.length >= 2 && (n = !0);
            this.model.NewsForImportantList.length != 1 ||
              n ||
              ((t = $(".marqueeAnn span").width()),
              t != null && t > 0 && t >= 196 && (n = !0));
            n &&
              (this.marqueeArea = $(".marqueeAnn").marquee({
                duration: 1e4,
                gap: 0,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: !1,
              }));
          }),
          (t.prototype.OnMarqueeMouseEnter = function () {
            this.marqueeArea && this.marqueeArea.marquee("pause");
          }),
          (t.prototype.OnMarqueeMouseLeave = function () {
            this.marqueeArea && this.marqueeArea.marquee("resume");
          }),
          (t.prototype.ChangeLevelTypeName = function () {
            return n.SiteCultureMethod.Provider().GetFullLevelTypeName(
              this.model.LoginInfo.LevelTypeName,
              this.model.LoginInfo.LevelType
            );
          }),
          (t.prototype.GameGroupSort = function () {
            var t = this,
              i = [],
              r;
            this.gameGropusSource.forEach(function (r) {
              var u = new n.Models.BalanceGroup();
              u.GameServices = t.model.GameMenusBalanceList.filter(function (
                n
              ) {
                return (
                  _.findIndex(r.GameIDs, function (t) {
                    return t === n.GameID;
                  }) > -1
                );
              });
              u.Title = r.Title;
              u.GroupID = r.GroupID;
              i.push(u);
            });
            r = [
              "SportGaming,LotteryGame,ESportGame,LiveBroadcast",
              "LiveGame,ChessGame",
              "EGame,EventReward",
            ];
            this.BalanceViewGroups = [];
            r.forEach(function (n) {
              var r = i.filter(function (t) {
                return _.includes(n, t.GroupID);
              });
              t.BalanceViewGroups.push(r);
            });
          }),
          (t.prototype.ResetSliderCaptcha = function () {
            this.messageBus.Emit("OnSliderCaptchaReset", {});
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
              { elemId: "accountPwd" }
            );
          }),
          (t.prototype.GetNewsItem = function (t) {
            t.NewsContent = n.Helpers.GetCustomizeUrlByAnnounce(
              t.NewsContent,
              !0
            );
            this.model.ImportantNewsItem = t;
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
          (t.prototype.FancyBoxOpenByImportantNews = function (t) {
            var r = this,
              i = n.Helpers.GetSimpleFancyboxOptions();
            i.closeBtn = !0;
            i.afterClose = function () {
              r.FancyboxCloseByImportantNews();
            };
            $.fancybox(t, i);
          }),
          (t.prototype.FancyboxCloseByImportantNews = function () {
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
                return;
              }
            }
            n.Helpers.SetLocalStorageItem(
              n.ConstDefinition.LocalStorageKey.ImportantNewsID,
              this.model.ImportantNewsItem.NewsID,
              !0
            );
          }),
          (t.prototype.IsUndefinedOrNull = function (n) {
            return n == undefined || n == null || n.length <= 0 ? !0 : !1;
          }),
          (t.prototype.RedirectPage = function (n) {
            this.FancyboxCloseByImportantNews();
            jQuery.fancybox.close();
            window.open(n, "_blank");
          }),
          (t.$name = "LoginAreaCtrl"),
          (t.$inject = [
            "$timeout",
            "$interval",
            "appConfig",
            "appContext",
            "AppContextSvc",
            "messageBus",
            "SignalRAdapter",
            "LoginAreaSvc",
            "PermissionSvc",
            "DataProvider",
            "$compile",
            "$scope",
          ]),
          t
        );
      })();
      t.LoginAreaCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.LoginAreaCtrl.$name,
  OBSApp.Controllers.LoginAreaCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var b = (function () {
          function o() {
            this.PlatformList = [];
            this.IsBlackList = !0;
            this.IsBet = !1;
            this.ShowLine = !1;
            this.MasterAccountBalanceModel = new r();
            this.GameAccountBalanceModel = new u();
            this.TranscationPostModel = new f();
            this.TransferDivShowModel = new i();
            this.CheckGamePostModel = new t();
            this.AnchorBalanceModel = new e();
            this.PlatformTransferEnabled = new n.PlatformTransferEnabled();
            this.GetCustomerServiceComplaintListByMemberAccountModel = {
              MemberAccountID: "",
            };
            this.DDDAlertErrors = n.SpecificErrorMap.DDDErrorMap.filter(
              function (n) {
                return !n.ErrorCodes.some(function (n) {
                  return n === "-8888888888" || n === "-9999999999";
                });
              }
            );
            this.TopMenuList = [
              { TopMaintain: "bblive", PostfixName: "bblive" },
              { TopMaintain: "bbball", PostfixName: "bbball" },
              { TopMaintain: "DDDSharkLegend", PostfixName: "dddSharkLegend" },
              { TopMaintain: "DDDChessGame", PostfixName: "dddChessGame" },
            ];
            this.MainMenuPointsControlCenter = new n.GetPointsControlCenter();
          }
          return o;
        })(),
        o,
        t,
        s,
        h,
        i,
        r,
        c,
        u,
        l,
        f,
        a,
        v,
        y,
        p,
        e,
        w;
      n.MainMenuViewModel = b;
      o = (function () {
        function n() {}
        return n;
      })();
      n.GetPlatformMaintainSettingNowResult = o;
      t = (function () {
        function n() {}
        return n;
      })();
      n.CheckGamePostModel = t;
      s = (function () {
        function n() {}
        return n;
      })();
      n.GameCheckResult = s;
      h = (function () {
        function n() {}
        return n;
      })();
      n.TokenModel = h;
      i = (function () {
        function n() {
          this.CheckTransferShow = 0;
        }
        return n;
      })();
      n.TransferDivShowModel = i;
      r = (function () {
        function n() {
          this.IsAvailable = !1;
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
      n.GetCSLiveChatAuthorizeTokenModel = v;
      y = (function () {
        function n() {}
        return n;
      })();
      n.PlatformListModel = y;
      p = (function () {
        function n() {}
        return n;
      })();
      n.GetCustomerServiceComplaintListByMemberAccountModel = p;
      e = (function () {
        function n() {
          this.IsAvailable = !1;
        }
        return n;
      })();
      n.AnchorBalanceModel = e;
      w = (function () {
        function n() {}
        return n;
      })();
      n.TopMenuModel = w;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i) {
            return {
              restrict: "A",
              link: function () {
                var n = !1;
                jQuery(".menu > ul li").mouseenter(function () {
                  jQuery(this)
                    .find(">.menuSubList")
                    .stop(!0, !0)
                    .slideDown(200);
                  jQuery(this).find(">.menuA").addClass("menuAHover");
                });
                jQuery(".menu > ul li").mouseleave(function () {
                  jQuery(".fancybox-margin").size() == 0 &&
                    n == !1 &&
                    ((n = !1),
                    jQuery(this).find(">.menuSubList").slideUp(200),
                    jQuery(this).find(">.menuA").removeClass("menuAHover"));
                });
                jQuery(".menu > ul li div").click(function () {
                  jQuery(".fancybox-margin").size() != 0 && (n = !0);
                });
                i.On("fancyBoxClose", function () {
                  n = !1;
                  jQuery(".menu > ul li")
                    .find(">.menuA")
                    .hasClass("menuAHover") &&
                    (jQuery(".menu > ul li").find(">.menuSubList").slideUp(200),
                    jQuery(".menu > ul li")
                      .find(">.menuA")
                      .removeClass("menuAHover"));
                });
              },
            };
          }),
          (n.$name = "mainMenuSlide"),
          (n.$inject = [
            "$parse",
            "$timeout",
            "messageBus",
            n.DirectiveFactory,
          ]),
          n
        );
      })();
      n.MainMenuSlide = t;
    })((t = n.Directives || (n.Directives = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterDirective(
  OBSApp.Directives.MainMenuSlide.$name,
  OBSApp.Directives.MainMenuSlide.$inject
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CheckAccount = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Game/CheckAccount", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n);
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
                  "../api/Game/GetAnchorBalanceByAccountID",
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
          (n.prototype.GetMemberBalanceInfoByAccountID = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberTransfer/GetMemberBalanceInfoByAccountID",
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
          (n.prototype.GetGameBalanceInfoByAccountID = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Game/GetBalance", HttpMethodEnum.Post, n)
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
                .Get("../api/Game/TransferPoint", HttpMethodEnum.Post, n)
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
                  "../api/Game/TransferMainAllAmountToGame",
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
          (n.prototype.CheckPlatformTransactionMaintainSettingEnable =
            function (n) {
              var t = this.dataProvider.CreateDeferred();
              return (
                this.dataProvider
                  .Get(
                    "../api/Game/CheckPlatformTransactionMaintainSettingEnable?GameType=" +
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
          (n.$name = "MainMenuSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.MainMenuSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.MainMenuSvc.$name,
  OBSApp.Services.MainMenuSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h) {
          this.$timeout = t;
          this.$window = i;
          this.blockUI = r;
          this.dataProvider = u;
          this.appConfig = f;
          this.appContext = e;
          this.messageBus = o;
          this.mainMenuSvc = s;
          this.appContextSvc = h;
          this.IsFakeMaintenance = !1;
          this.InitializeViewModel();
          var c = n.Helpers.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.ServLine
          );
          this.model.ShowLine = c != "true";
        }
        return (
          (t.prototype.openComplianBox = function () {
            var r = this,
              t = this.dataProvider.CreateDeferred(),
              i =
                this.model.GetCustomerServiceComplaintListByMemberAccountModel;
            return (
              (i.MemberAccountID = this.appContext.UserProfile.AccountID),
              this.mainMenuSvc
                .GetCustomerServiceComplaintListByMemberAccount(i)
                .then(function (i) {
                  i == !0
                    ? (r.messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName
                          .OnLoadComplainData,
                        ""
                      ),
                      t.resolve(!0))
                    : (n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        "5分鐘內限申請一次投訴箱，如急需諮詢，請聯繫【在線客服】"
                      ),
                      t.resolve(!1));
                })
                .catch(function (t) {
                  n.Helpers.AlertSwitch(t);
                }),
              t.promise
            );
          }),
          (t.prototype.InitializeViewModel = function () {
            var t = this;
            this.model = new n.Models.MainMenuViewModel();
            this.appContext.UserProfile &&
              this.appContext.UserProfile.TestType === 2 &&
              (this.IsFakeMaintenance = !0);
            this.balance = 0;
            this.messageBus.On(
              n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
              function (n, i) {
                t.model.MainMenuPointsControlCenter = i;
              }
            );
          }),
          (t.prototype.SpecialErrorBy3D = function (t, i, r) {
            var e, u, f;
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
                  ((this.model.GameAccountBalanceModel.IsAvailable = !1),
                  this.ControlAccountPanel(GameStatusEnum.isBusy),
                  (u = n.Helpers.ChangeLanguage("繁忙中")),
                  (f = n.Helpers.ChangeLanguage("系統繁忙請稍候"))),
                t === "-9999999999" &&
                  ((this.model.GameAccountBalanceModel.IsAvailable = !1),
                  this.ControlAccountPanel(GameStatusEnum.isLoading),
                  (u = f = n.Helpers.ChangeLanguage("載入中")),
                  r &&
                    (this.ControlAccountPanel(GameStatusEnum.isBusy),
                    (u = n.Helpers.ChangeLanguage("繁忙中")),
                    (f = n.Helpers.ChangeLanguage("系統繁忙請稍候")))),
                !u && !f)
              ? !1
              : (this.ControlTransferPanel(!0),
                this.ShowErrorMsgOnInputAmount(!0, null, u),
                i && n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, f),
                !0);
          }),
          (t.prototype.InitializeQuickTransfer = function (n, t, i) {
            return (
              t === void 0 && (t = ""),
              i === void 0 && (i = 0),
              (this.model.TransferDivShowModel.CheckTransferShow = 0),
              (this.model.MasterAccountBalanceModel.IsAvailable = !1),
              (this.model.GameAccountBalanceModel.IsAvailable = !1),
              (this.gameType = n),
              (this.subGameType = t),
              (this.gameRedirectType = i),
              this.ShowErrorMsgOnInputAmount(!1),
              this.ControlTransferPanel(!0),
              this.ControlAccountPanel(GameStatusEnum.isLoading),
              (this.model.TranscationPostModel.TransferAmount = null),
              this.OnlyGetMasterAccountBalance(),
              this.CheckAccountAndCheckGameAmount(),
              (this.gameType === "BB_LiveGame" ||
                this.gameType === "BB_Ball" ||
                this.subGameType === "TS_Sport" ||
                this.subGameType === "NBBSport") &&
                this.GetAnchorBalance(),
              !0
            );
          }),
          (t.prototype.RegisterValidation = function () {
            var n = this;
            jQuery.validator.addMethod("ckMoreThanMainAccount", function (t) {
              return Number(t) <= n.balance;
            });
          }),
          (t.prototype.ConfirmMemberGameBlackList = function (t, i, r, u) {
            var c = this,
              o,
              e;
            if (
              (r === void 0 && (r = ""),
              u === void 0 && (u = ""),
              this.appContext.UserProfile.MemberPlatformBlackList == undefined)
            )
              return !0;
            if (
              this.appContext.UserProfile.MemberPlatformBlackList.length == 0 ||
              ((o = this.appContext.UserProfile.MemberPlatformBlackList),
              (e = _.filter(o, function (n) {
                return n.ServiceID == t;
              })),
              e.length == 0)
            )
              return !1;
            if (e[0].BlackStatus == "0") return !0;
            var f = i === "HotMainmenu" ? "_hot" : "",
              s =
                $("#" + t + f + "_txt_maintain p:first-child").text() != ""
                  ? $("#" + t + f + "_txt_maintain p:first-child").text()
                  : $("#" + t + f + "_game_maintain p:first-child").text(),
              h =
                $("#" + t + f + "_txt_maintain p:first-child").text() != ""
                  ? "txt_maintain"
                  : "game_maintain";
            return (
              u === "JZNBBSport" &&
                (s = n.Helpers.StringFormat(
                  n.Helpers.ChangeLanguage("您沒有進入《{0}》的權限！"),
                  n.Helpers.ChangeLanguage("JZ體育(KU經典版)")
                )),
              i === "Mainmenu" || i === "HotMainmenu"
                ? this.$timeout(function () {
                    var o, n, e, i;
                    $(".txt_maintain").hide();
                    o = _.find(c.model.TopMenuList, function (n) {
                      return n.TopMaintain == r;
                    });
                    o
                      ? ((n = $(
                          "#menu_personal_maintain_" + o.PostfixName
                        ).find(".txt_maintain." + o.PostfixName)),
                        n.length ||
                          (n =
                            h == "txt_maintain"
                              ? $("#" + t + f + "_txt_maintain")
                              : $("#" + t + f + "_game_maintain")),
                        n.show(),
                        (i = JSON.parse(
                          localStorage.getItem("gameMaintainPool")
                        )),
                        i.push(n.attr("id")),
                        localStorage.setItem(
                          "gameMaintainPool",
                          JSON.stringify(i)
                        ),
                        setTimeout(function () {
                          var t = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          t.filter(function (t) {
                            return t === n.attr("id");
                          }).length <= 1 && n.hide();
                          t.shift();
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(t)
                          );
                        }, 3e3))
                      : (u === "JZNBBSport" && (t = "JZNBBSport"),
                        (e =
                          h == "txt_maintain"
                            ? $("#" + t + f + "_txt_maintain")
                            : $("#" + t + f + "_game_maintain")),
                        e.show(),
                        (i = JSON.parse(
                          localStorage.getItem("gameMaintainPool")
                        )),
                        i.push(e.attr("id")),
                        localStorage.setItem(
                          "gameMaintainPool",
                          JSON.stringify(i)
                        ),
                        setTimeout(function () {
                          var n = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          n.filter(function (n) {
                            return n === e.attr("id");
                          }).length <= 1 && e.hide();
                          n.shift();
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(n)
                          );
                        }, 3e3));
                  })
                : n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, s),
              !1
            );
          }),
          (t.prototype.ConfirmMemberGameBlackListInner = function (t) {
            var f = this,
              r,
              i,
              u;
            return this.appContext.UserProfile.MemberPlatformBlackList !=
              undefined
              ? this.appContext.UserProfile.MemberPlatformBlackList.length == 0
                ? !1
                : ((r = this.appContext.UserProfile.MemberPlatformBlackList),
                  (i = _.filter(r, function (n) {
                    return n.ServiceID == t;
                  })),
                  i.length == 0)
                ? !1
                : i[0].BlackStatus == "0"
                ? !0
                : ((u = n.Helpers.StringFormat(
                    n.Helpers.ChangeLanguage("您沒有進入《{0}》的權限！"),
                    n.Helpers.ChangeLanguage(i[0].ServiceName)
                  )),
                  this.$timeout(function () {
                    f.model.BlackMessage = u;
                    $(".txt_maintain").hide();
                    $("#" + t + "_txt_maintain_inner").show();
                    var n = JSON.parse(
                      localStorage.getItem("gameMaintainPool")
                    );
                    n.push($("#" + t + "_txt_maintain_inner").attr("id"));
                    localStorage.setItem("gameMaintainPool", JSON.stringify(n));
                    setTimeout(function () {
                      var n = JSON.parse(
                        localStorage.getItem("gameMaintainPool")
                      );
                      n.filter(function (n) {
                        return (
                          n === $("#" + t + "_txt_maintain_inner").attr("id")
                        );
                      }).length <= 1 &&
                        $("#" + t + "_txt_maintain_inner").hide();
                      n.shift();
                      localStorage.setItem(
                        "gameMaintainPool",
                        JSON.stringify(n)
                      );
                    }, 3e3);
                  }),
                  !1)
              : !0;
          }),
          (t.prototype.ChangePlatformName = function (n) {
            return $("#Platform" + n).val();
          }),
          (t.prototype.GetAnchorBalance = function () {
            var t = this;
            return (
              this.mainMenuSvc
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
          (t.prototype.OnlyGetMasterAccountBalance = function () {
            var t = this;
            return (
              (this.model.MasterAccountBalanceModel.BalanceAmount =
                n.Helpers.ChangeLanguage("載入中")),
              this.ControlTransferPanel(!0),
              this.mainMenuSvc
                .GetMemberBalanceInfoByAccountID()
                .then(function (i) {
                  t.model.MasterAccountBalanceModel.IsAvailable = !0;
                  t.model.MasterAccountBalanceModel.BalanceAmount =
                    n.Formatter.NumberFormat(Math.floor(Number(i)));
                  t.balance = Math.floor(Number(i));
                  t.model.MainMenuPointsControlCenter.AccountBalance =
                    Math.floor(Number(i));
                  t.RegisterValidation();
                  t.ControlTransferPanel(!1, !0);
                  t.model.GameAccountBalanceModel.GameStatus ===
                    GameStatusEnum.isAvailable &&
                    t.model.PlatformTransferEnabled.IsAvailable &&
                    t.ShowErrorMsgOnInputAmount(!1);
                })
                .catch(function (i) {
                  i.Error.Code === 4001 &&
                    ((t.model.MasterAccountBalanceModel.IsAvailable = !1),
                    t.ControlTransferPanel(),
                    (t.model.MasterAccountBalanceModel.BalanceAmount =
                      n.Helpers.ChangeLanguage("維護中")),
                    (t.model.GameAccountBalanceModel.GameBalanceAmount =
                      n.Helpers.ChangeLanguage("維護中")));
                  t.ShowErrorMsgOnInputAmount(!0, i.Error.Message);
                }),
              !0
            );
          }),
          (t.prototype.OnlyGetGameAccountBalance = function () {
            var t = this,
              i;
            return (
              (this.model.GameAccountBalanceModel.GameBalanceAmount =
                n.Helpers.ChangeLanguage("載入中")),
              this.ControlTransferPanel(!0),
              (i = new n.Models.CheckGameAccountPostModel()),
              (i.GameType = this.gameType),
              (i.SubGameType = this.subGameType),
              this.mainMenuSvc
                .GetGameBalanceInfoByAccountID(i)
                .then(function (r) {
                  t.model.PlatformTransferEnabled.IsAvailable = !0;
                  t.model.TransferDivShowModel.CheckTransferShow = 1;
                  t.model.GameAccountBalanceModel.IsAvailable = !0;
                  t.model.GameAccountBalanceModel.GameBalanceAmount =
                    n.Formatter.NumberFormat(Math.floor(r));
                  t.model.GameAccountBalanceModel.GameStatus =
                    GameStatusEnum.isAvailable;
                  var u = _.filter(
                    t.model.MainMenuPointsControlCenter.GameAvailableList,
                    function (n) {
                      return n.GameID === t.gameType;
                    }
                  );
                  u.length > 0 && (u[0].Balance = Math.floor(r));
                  t.CheckPlatformTransactionMaintainSettingEnable(i.GameType);
                })
                .catch(function (i) {
                  (t.gameType === "DDD" &&
                    t.SpecialErrorBy3D(i.Error.Message, !1)) ||
                    (i.Error.Code === 4008
                      ? ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                        t.ControlTransferPanel(!0),
                        t.ShowErrorMsgOnInputAmount(
                          !0,
                          i.Error.Message,
                          i.Error.Message
                        ))
                      : i.Error.Code === 4001
                      ? ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                        t.ControlTransferPanel(!0),
                        t.ControlAccountPanel(GameStatusEnum.isMaintain),
                        t.ShowErrorMsgOnInputAmount(
                          !0,
                          i.Error.Message,
                          i.Error.Message
                        ))
                      : i.Error.Code === 1002
                      ? ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                        t.ControlTransferPanel(!0),
                        t.ControlAccountPanel(GameStatusEnum.isMaintain),
                        t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                      : i.Error.Code === 5999
                      ? (t.ControlTransferPanel(!0),
                        t.ControlAccountPanel(GameStatusEnum.isMaintain),
                        t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                      : (t.ControlTransferPanel(!1),
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          i.Error.Message,
                          null,
                          function () {
                            jQuery.fancybox.close();
                          }
                        )));
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
              (i.GameType = this.gameType),
              (i.SubGameType = this.subGameType),
              this.ControlTransferPanel(!0),
              this.mainMenuSvc
                .CheckAccount(i)
                .then(function () {
                  t.OnlyGetGameAccountBalance();
                })
                .catch(function (i) {
                  i.Error.Code === 4008
                    ? (t.ControlTransferPanel(!0, !0),
                      t.ShowErrorMsgOnInputAmount(
                        !0,
                        i.Error.Message,
                        i.Error.Message
                      ))
                    : i.Error.Code === 4001
                    ? ((t.model.GameAccountBalanceModel.IsAvailable = !1),
                      t.ControlTransferPanel(!0),
                      t.ControlAccountPanel(GameStatusEnum.isMaintain),
                      t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                    : i.Error.Code === 1002
                    ? (t.ControlTransferPanel(!0),
                      t.ControlAccountPanel(GameStatusEnum.isMaintain),
                      t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                    : i.Error.Code === 5999
                    ? (t.ControlTransferPanel(!0),
                      t.ControlAccountPanel(GameStatusEnum.isMaintain),
                      t.ShowErrorMsgOnInputAmount(!0, i.Error.Message))
                    : (t.ControlTransferPanel(!1),
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        i.Error.Message
                      ));
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
                    },
                    null,
                    null,
                    null,
                    null,
                    335
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
              this.mainMenuSvc
                .TransferPoint(i)
                .then(function () {
                  t.model.GameAccountBalanceModel.GameBalanceAmount =
                    n.Formatter.NumberFormat(
                      n.Formatter.GetNumberData(
                        t.model.GameAccountBalanceModel.GameBalanceAmount
                      ) +
                        n.Formatter.GetNumberData(
                          t.model.TranscationPostModel.TransferAmount.toString()
                        )
                    );
                  t.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnSetOneGameReLoadPointsControlCenter,
                    t.gameType
                  );
                  jQuery.fancybox.close();
                  n.Helpers.NotifyBox(
                    n.Helpers.ChangeLanguage("轉點成功"),
                    function () {
                      t.EnterGame();
                    },
                    null,
                    1e3
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
                  },
                  null,
                  null,
                  null,
                  null,
                  335
                ),
                !1)
              : ((i.GameType = this.gameType),
                (i.SubGameType = this.subGameType),
                this.ControlTransferPanel(!0),
                this.mainMenuSvc
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
                    jQuery.fancybox.close();
                    n.Helpers.NotifyBox(
                      n.Helpers.ChangeLanguage("轉點成功"),
                      function () {
                        t.EnterGame();
                      },
                      null,
                      1e3
                    );
                    t.model.TranscationPostModel.TransferAmount = null;
                  })
                  .catch(function (n) {
                    return t.CatchProcess(i.GameType, n);
                  }),
                !0);
          }),
          (t.prototype.EnterGame = function () {
            var n =
              /Safari/.test(navigator.userAgent) &&
              !/Chrome/.test(navigator.userAgent);
            (this.gameType == "NBB" ||
              this.gameType == "TS" ||
              this.gameType == "SM") &&
            n
              ? this.OpenGameAlone()
              : this.OpenGame();
            jQuery.fancybox.close();
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
              this.gameRedirectType == 1 &&
              (t = "&tag=99");
            i =
              "//" +
              location.host +
              "/CheckGame?gameType=" +
              this.gameType +
              "&subGameType=" +
              this.subGameType +
              t +
              "&dt=" +
              this.appContext.UserProfile.AccountID +
              r.getTime();
            n = document.createElement("a");
            n.setAttribute("rel", "noopener noreferrer");
            n.setAttribute("href", i);
            n.setAttribute("target", "_blank");
            n.click();
          }),
          (t.prototype.OpenGame = function () {
            var r = new Date(),
              t = "",
              i,
              n;
            switch (this.gameType) {
              case "MG":
                switch (this.gameRedirectType) {
                  case 3:
                    t = "&tag=2";
                }
            }
            this.gameType == "NBB" &&
              this.gameRedirectType == 1 &&
              (t = "&tag=99");
            i =
              "//" +
              location.host +
              "/CheckGame?gameType=" +
              this.gameType +
              "&subGameType=" +
              this.subGameType +
              t +
              "&dt=" +
              this.appContext.UserProfile.AccountID +
              r.getTime();
            n = this.gameType + "-" + this.subGameType;
            window.GameOpenedList
              ? window.GameOpenedList[n] && window.GameOpenedList[n].close()
              : (window.GameOpenedList = {});
            window.GameOpenedList[n] = window.open(i, n);
          }),
          (t.prototype.ControlTransferPanel = function (n, t) {
            var i = this;
            this.$timeout(function () {
              n
                ? $(
                    "input[data-transferamount], .FT_button_w50L, .FT_button_w50R, .btn_transfer"
                  ).attr("disabled", "disabled")
                : i.model.MasterAccountBalanceModel.IsAvailable &&
                  i.model.GameAccountBalanceModel.IsAvailable &&
                  i.model.PlatformTransferEnabled.IsAvailable
                ? ($("input[data-transferamount], .FT_button_w50L").removeAttr(
                    "disabled"
                  ),
                  i.model.MasterAccountBalanceModel.BalanceAmount != "0"
                    ? $(".btn_transfer").removeAttr("disabled")
                    : ($(".txt_transfer").attr("disabled", "disabled"),
                      $("input[data-transferamount]").attr(
                        "disabled",
                        "disabled"
                      )))
                : $(
                    "input[data-transferamount], .FT_button_w50L, .FT_button_w50R, .btn_transfer"
                  ).attr("disabled", "disabled");
              t &&
                i.model.GameAccountBalanceModel.IsAvailable &&
                $(".FT_button_w50L").removeAttr("disabled");
            });
          }),
          (t.prototype.ShowErrorMsgOnInputAmount = function (t, i, r) {
            r === void 0 && (r = null);
            i = r == null ? n.Helpers.ChangeLanguage("維護中") : r;
            n.Helpers.StringContainsOneOfKeywords(
              i,
              "平台轉帳維護中",
              "轉帳",
              "轉帳功能維護中",
              "很抱歉，目前轉帳功能維護中"
            ) && (i = n.Helpers.ChangeLanguage("轉帳維護中PC"));
            n.Helpers.StringContainsOneOfKeywords(
              i,
              "sedang dalam pemeliharaan!"
            ) && (i = n.Helpers.ChangeLanguage("維護中"));
            t
              ? $("input[data-transferamount]")
                  .val("")
                  .attr("placeholder", i)
                  .addClass("placeholder_class")
              : $("input[data-transferamount]")
                  .removeClass("placeholder_class")
                  .attr("placeholder", n.Helpers.ChangeLanguage("請輸入金額"));
          }),
          (t.prototype.ControlAccountPanel = function (t, i) {
            this.model.GameAccountBalanceModel.GameStatus = t;
            switch (t) {
              case GameStatusEnum.isLoading:
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
          (t.prototype.ShowKeyboardTransferAndCleanAccount = function () {
            var n = this;
            this.$timeout(function () {
              n.model.TranscationPostModel.TransferAmount = null;
              n.CheckTransferAmount();
            });
          }),
          (t.prototype.CheckTransferAmount = function () {
            String(this.model.TranscationPostModel.TransferAmount) === "0" &&
              (this.model.TranscationPostModel.TransferAmount = null);
            this.model.TranscationPostModel.TransferAmount > 0 &&
            this.model.MasterAccountBalanceModel.BalanceAmount != "0" &&
            this.model.MasterAccountBalanceModel.IsAvailable &&
            this.model.GameAccountBalanceModel.IsAvailable
              ? $(".FT_button_w50R").removeAttr("disabled")
              : $(".FT_button_w50R").attr("disabled", "disabled");
          }),
          (t.prototype.CheckPlatformTransactionMaintainSettingEnable =
            function (n) {
              var t = this;
              this.model.PlatformTransferEnabled.IsAvailable = !1;
              this.ControlTransferPanel(!0, !0);
              this.mainMenuSvc
                .CheckPlatformTransactionMaintainSettingEnable(n)
                .then(function () {
                  t.model.PlatformTransferEnabled.IsAvailable = !0;
                  t.ShowErrorMsgOnInputAmount(!1);
                  t.ControlTransferPanel();
                })
                .catch(function (n) {
                  t.ShowErrorMsgOnInputAmount(!0, null, n.Error.Message);
                });
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
                this.ControlTransferPanel(!0);
                this.ShowErrorMsgOnInputAmount(!0, i.Error.Message);
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
                  jQuery.fancybox.close();
                }
              );
            else if (
              i.Error.Code ===
              ApiStatusCodeEnum.PlatformMutualTransferReachedNumberLimit
            )
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                n.Helpers.ChangeLanguage("今日互轉次數已達到限定值")
              ),
                (this.model.TranscationPostModel.TransferAmount = null),
                this.ControlTransferPanel(!1);
            else if (
              i.Error.Code ===
              ApiStatusCodeEnum.PlatformMutualTransferReachedMoneyLimit
            )
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                n.Helpers.ChangeLanguage("今日互轉額度已達限定值")
              ),
                (this.model.TranscationPostModel.TransferAmount = null),
                this.ControlTransferPanel(!1);
            else if (i.Error.Code === 1002)
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
                  this.ControlTransferPanel(!0),
                  this.ShowErrorMsgOnInputAmount(!0, i.Error.Message));
            else if (i.Error.Code === 4015)
              (this.model.TranscationPostModel.TransferAmount = null),
                this.ControlTransferPanel(!1),
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  i.Error.Message
                );
            else if (i.Error.Code === 1004)
              this.ControlTransferPanel(!1, !0),
                (this.model.PlatformTransferEnabled.IsAvailable = !1),
                this.ShowErrorMsgOnInputAmount(!0, null, i.Error.Message),
                n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  i.Error.Message
                );
            else {
              if (i.Error.Code === 4018) {
                this.appContextSvc.StopCheckInterval();
                n.Helpers.AlertServiceCenterCallback(
                  i,
                  SweetAlertTypeEnum.none,
                  function (n) {
                    if (!n) {
                      r.mainMenuSvc.SignOut().finally(function () {
                        jQuery.fancybox.close();
                        window.location.reload(!0);
                      });
                      return;
                    }
                    r.mainMenuSvc.SignOut().finally(function () {
                      document.getElementById("btn_serviceCenter").click();
                      window.location.reload(!0);
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
                      jQuery.fancybox.close();
                      window.location.reload(!0);
                    }
                  )
                : i.Error.Code === ApiStatusCodeEnum.TransferPointCommonError
                ? ((u = n.Helpers.ChangeLanguage("轉點失敗")),
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
                      this.ControlTransferPanel(!1)))
                : (this.ControlTransferPanel(!1), n.Helpers.AlertSwitch(i));
            }
          }),
          (t.$name = "MainMenuCtrl"),
          (t.$inject = [
            "$timeout",
            "$window",
            "blockUI",
            "DataProvider",
            "appConfig",
            "appContext",
            "messageBus",
            "MainMenuSvc",
            "AppContextSvc",
          ]),
          t
        );
      })();
      t.MainMenuCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.MainMenuCtrl.$name,
  OBSApp.Controllers.MainMenuCtrl
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
  })(OBSApp || (OBSApp = {})),
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
                  "../api/MemberTransfer/GetMemberBalanceInfoByAccountID",
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
                .Get("../api/Game/GetBalance", HttpMethodEnum.Post, n)
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
                .Get("../api/Game/GetAliveGameList", HttpMethodEnum.Post)
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
      n.PointsControlCenterService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.PointsControlCenterService.$name,
  OBSApp.Services.PointsControlCenterService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o) {
          var s = this;
          this.mainAccountPointSvc = t;
          this.$messageBus = i;
          this.appConfig = r;
          this.blockUI = u;
          this.$timeout = f;
          this.appContextSvc = e;
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
            this.$messageBus.On(
              n.ConstDefinition.MessageBusEventName
                .OnRefreshAllPointsControlCenter,
              function () {
                t.model.PointsControlCenter.IsGetGameBalance = !0;
                t.GetAvailableGameListAndGameBalances();
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
              r = jQuery("#hfAvailablePlatform").val(),
              i;
            if (
              (jQuery("#hfAvailablePlatform").val(""),
              (i = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.KeepPointsControlCenter
              )),
              i)
            ) {
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
            if (r) {
              this.model.PointsControlCenter.GameAvailableList = JSON.parse(r);
              this.model.PointsControlCenter.SetAllReload();
              this.InitializeGetBalance();
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
            var t = this,
              i;
            if (
              (n === void 0 && (n = !1),
              (i = _.includes(location.pathname.toLowerCase(), "/member/")),
              !i)
            ) {
              this.GetMainAccountBalance();
              return;
            }
            if (n) {
              this.model.PointsControlCenter.IsGetGameBalance = !1;
              this.$timeout(function () {
                t.model.PointsControlCenter.IsGetGameBalance = !0;
                t.GetAvailableGameListAndGameBalances();
              }, this.model.KeepFinishReloadBalanceTime);
              return;
            }
            this.GetMainAccountAndAllGamesBalance();
          }),
          (t.prototype.GetAvailableGameListAndGameBalances = function () {
            var t = this;
            if (!this.model.PointsControlCenter.IsGetGameBalance) {
              this.GetMainAccountBalance();
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
                t.GetMainAccountAndAllGamesBalance();
              })
              .catch(function (t) {
                n.Helpers.AlertSwitch(t);
              });
          }),
          (t.prototype.GetMainAccountBalance = function () {
            var t = this,
              i = this.$q.defer();
            if (!this.model.PointsControlCenter.IsGetAccountBalance) {
              i.resolve();
              return;
            }
            return (
              (this.model.PointsControlCenter.IsGetAccountBalance = !1),
              this.$messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnGetPointsControlCenter,
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
              i.promise
            );
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
            "messageBus",
            "appConfig",
            "blockUI",
            "$timeout",
            "AppContextSvc",
            "$q",
          ]),
          t
        );
      })();
      t.PointsControlCenterControl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.PointsControlCenterControl.$name,
  OBSApp.Controllers.PointsControlCenterControl
),
  (function (n) {
    var t;
    (function (t) {
      var s = (function () {
          function r() {
            this.checkBoxInOnString = "checkBoxIn on";
            this.checkBoxInOffString = "checkBoxIn off";
            this.CreateModel = new i();
            this.ShowPanel = "joinStep01";
            this.AgreementOfRule = this.checkBoxInOffString;
            this.ShowType = r.ShowTypeEnum.INITIAL;
            this.RegisterAccountRule = !1;
            this.CaptchaActionType = r.CaptchaActionTypeEnum.AccountValid;
            this.KeepPreviousAccountInput = "";
            this.AgreementOfReceiveSMS = this.checkBoxInOffString;
            this.CountDownSecond = -1;
            this.DefaultCountDownSecond = 30;
            this.IsCellPhoneValid = !1;
            this.IsCellPhoneCsOverLimit = !1;
            this.SendCaptchaButtonName = n.Helpers.ChangeLanguage("讀取中");
            this.IsCaptchaSent = !1;
            this.IsCaptchaCodeVerified = !1;
            this.CaptchaImageCodeMsg = "N/A";
            this.CaptchaImageUrl = "/HtmlModule/GetCaptchaImage";
            this.SendCaptchaCodeMsg = "";
            this.CallCustomerServiceCounts = 0;
            this.VerifiedEffectiveTime = -1;
            this.DefaultVerifiedEffectiveTime = -1;
            this.IsCallCustomerService = !1;
            this.IsCanNotUseSMSProvider = !1;
            this.IsServiceCallBackValid = !1;
            this.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage = "";
            this.ElementManager = new t.ViewElementManager();
            this.MonitorJoinStep01HideCheckTime = 10;
            this.CSCallKey = "";
            this.SliderCaptchaErrorCount = 0;
            this.AgencyURLOriginal = "";
            this.AmazingSign = "";
            this.DoubleAmazingSign = "";
            this.AgreementOfRule = this.CheckboxOf;
            this.AgreementOfReceiveSMS = this.CheckboxOf;
            this.MemberInfoCheckEmailCellPhoneModel = {
              AccountID: "",
              CellPhone: "",
              Email: "",
              VerifyUsage: VerifyUsageEnum.RegisterPhone,
              IdyKey: "",
            };
            this.GetMemberServiceCenterCallbackFrontByConditionPostModel = {
              CallbackLanguageID: CallbackLanguageIDEnum.Chinese,
              QuestionTypeID: 7,
              Phone: "",
            };
            this.ElementManager.DisableElement("RegisterMemberButton");
            this.ElementManager.DisableElement("VerifiedEffectiveTime");
          }
          return (
            Object.defineProperty(r.prototype, "CheckboxOn", {
              get: function () {
                return this.checkBoxInOnString;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(r.prototype, "CheckboxOf", {
              get: function () {
                return this.checkBoxInOffString;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (r.ShowTypeEnum = {
              INITIAL: 1,
              CAPTCHA_STEP: 2,
              ACCOUNT_EXIST: 3,
            }),
            (r.CaptchaActionTypeEnum = { AccountValid: 1, PhoneValid: 2 }),
            r
          );
        })(),
        i,
        r,
        u,
        f,
        e,
        o,
        h,
        c;
      t.RegisterViewModel = s;
      i = (function () {
        function n() {
          this.AgencyURL = "";
          this.AccountID = "";
          this.NickName = "";
          this.CellPhone = "";
          this.InviteAccountID = "";
          this.CaptchaCode = "";
          this.VerifyUsage = VerifyUsageEnum.RegisterPhone;
          this.PWD = "";
          this.FingerIDX = "";
          this.ScreenResolution = "";
        }
        return n;
      })();
      t.RegisterMemberModel = i;
      r = (function () {
        function n() {}
        return n;
      })();
      t.CheckRegisteredAdditionallyModel = r;
      u = (function () {
        function n() {}
        return n;
      })();
      t.VerifyAccountIDIsExistResult = u;
      f = (function () {
        function n() {}
        return n;
      })();
      t.GetMemberServiceCenterCallbackFrontByConditionPostModel = f;
      e = (function () {
        function n() {}
        return n;
      })();
      t.GetMemberServiceCenterCallbackFrontByConditionResult = e;
      o = (function () {
        function n() {}
        return n;
      })();
      (t.GetServiceCallBackCaptchaCodePostModel = o),
        (function (n) {
          n[(n.IsNextPage = 0)] = "IsNextPage";
          n[(n.IsPage = 1)] = "IsPage";
        })(
          (h =
            t.VerifyAccountIDStatusEnum || (t.VerifyAccountIDStatusEnum = {}))
        ),
        (function (n) {
          n[(n.Success = 0)] = "Success";
          n[(n.FormatError = 1)] = "FormatError";
          n[(n.PrefixKUK = 2)] = "PrefixKUK";
          n[(n.PrefixV16 = 3)] = "PrefixV16";
          n[(n.PrefixT16 = 4)] = "PrefixT16";
          n[(n.NotSafeString = 5)] = "NotSafeString";
          n[(n.PrefixE16 = 6)] = "PrefixE16";
        })((c = t.VerifyStatusEnum || (t.VerifyStatusEnum = {})));
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.RegisterMember = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/MemberInfo/RegisterMember", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckRegisteredAdditionally = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckRegisteredAdditionally",
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
          (n.prototype.VerifyAccountIDIsExist = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "https://api.ku1119.com/api/register",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  window.location.href = "https://ku191.net"
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.SendCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/SendCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.VerifyCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/VerifyCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckCellPhoneIsExist = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckCellPhoneIsExist",
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
          (n.prototype.VerifyImageCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Verify/CheckCaptcha", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.prototype.CheckTodaySendCountWithIPAddress = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckTodaySendCountWithIPAddress",
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
          (n.prototype.CheckCellPhoneIsVerifiedOrOverLimit = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Verify/CheckCellPhoneIsVerified",
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
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CreateMemberServiceCenterCallback",
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
          (n.prototype.CheckServiceCallBackReturnCaptchaCode = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/MemberInfo/CheckServiceCallBackReturnCaptchaCode",
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
          (n.prototype.GetVerifyMode = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Common/GetVerifyMode", HttpMethodEnum.Post, n)
                .then(function (n) {
                  t.resolve(n.Data);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "RegisterSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      n.RegisterSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.RegisterSvc.$name,
  OBSApp.Services.RegisterSvc
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
        function t(t, i, r, u, f, e, o, s, h, c, l, a) {
          var v = this;
          this.$timeout = t;
          this.$q = i;
          this.$cookies = r;
          this.$interval = u;
          this.registerSvc = f;
          this.permissionSvc = e;
          this.verifySvc = o;
          this.messageBus = s;
          this.blockUI = h;
          this.logSvc = c;
          this.toolsSvc = l;
          this.$window = a;
          this.countDownSecondTick = null;
          this.verifiedEffectiveTimeTick = null;
          this.canUseAccount = "";
          this.nickNameCurrentVal = "";
          this.isRegisterPWDOnFocus = !1;
          this.isRegisterPWDValid = !0;
          this.verifiedCellPhone = "";
          this.sendVerifyCodeCount = 0;
          this.isCaptchaImageCodeVerified = !1;
          this.SliderImage = "";
          this.SliderBgImage = "";
          this.LanguageCode = n.SiteCultureMethod.Provider().LanguageCode;
          s.On("fancyBoxClose", function () {
            v.InitializeViewModel();
            $("#dvRecommendAccounts").hide();
          });
          this.InitializeViewModel();
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            var t = this;
            this.model = new n.Models.RegisterViewModel();
            this.model.DefaultCountDownSecond = Number(
              jQuery("#hfDefaultCountDownSecond").val()
            );
            this.model.DefaultVerifiedEffectiveTime = Number(
              jQuery("#hfDefaultVerifiedEffectiveTime").val()
            );
            this.model.AgreementOfRule = this.model.CheckboxOn;
            this.model.AgreementOfReceiveSMS = this.model.CheckboxOn;
            this.CancelCountDownInterval();
            this.CancelVerifiedEffectiveTimeInterval();
            this.canUseAccount = "";
            this.CheckInviteAccountIDOrAgentID();
            this.verifiedCellPhone = "";
            this.sendVerifyCodeCount = 0;
            this.GetVerifyModeEvent();
            this.handleMousemove = function (n) {
              t.currentMouseTarget =
                n && n.target && n.target ? n.target : null;
            };
            this.SetAmazingSign();
          }),
          (t.prototype.ResetSnedCaptchaViewModel = function () {
            this.CancelCountDownInterval();
            this.CancelVerifiedEffectiveTimeInterval();
            this.model.CreateModel.CellPhone = "";
            this.model.ElementManager.ShowElement("sendCaptchaButton");
            this.model.IsCellPhoneValid = !1;
            this.model.CountDownSecond = this.model.DefaultCountDownSecond;
            this.model.IsCaptchaSent = !1;
            this.model.ElementManager.ShowElement("verifyCaptchaCodeButton");
            this.model.IsCaptchaCodeVerified = !1;
            this.model.IsCallCustomerService = !1;
            this.model.IsServiceCallBackValid = !1;
            this.model.ElementManager = new n.Models.ViewElementManager();
            this.model.ElementManager.DisableElement("RegisterMemberButton");
            this.model.SendCaptchaCodeMsg = "";
            this.SetSendCaptchaButtonName();
            this.model.ShowPanel = "joinStep02";
            this.isCaptchaImageCodeVerified = !1;
          }),
          (t.prototype.RegisterValidation = function () {
            var t = this;
            jQuery.validator.addMethod("ckSpace", function (n) {
              return /^[^\x20]{0,}$/.test(n);
            });
            jQuery.validator.addMethod(
              "ckAccountRuleWithRegister",
              function (n) {
                return /^[a-zA-Z0-9]{4,10}$/.test(n);
              }
            );
            jQuery.validator.addMethod("ckPassword", function (t) {
              return n.Validator.IsPasswordFormatValid(t);
            });
            jQuery.validator.addMethod(
              "ckSimplePasswordByRegister",
              function (i) {
                var r = n.Validator.IsPasswordTooSimple(i);
                return (
                  t.$timeout.cancel(t.handleByCkSimplePassword),
                  r &&
                    (t.handleByCkSimplePassword = t.$timeout(function () {
                      t.model.CreateModel.PWD = null;
                      t.ClearErrorMessage("PWD");
                    }, 3e3)),
                  !r
                );
              }
            );
            jQuery.validator.addMethod("ckSamePasswordByRegister", function () {
              return (t.$timeout.cancel(t.handleByCkSamePassword),
              t.isRegisterPWDOnFocus === !1)
                ? !0
                : (t.isRegisterPWDValid ||
                    (t.model.ElementManager.DisableElement(
                      "RegisterMemberButton"
                    ),
                    (t.handleByCkSamePassword = t.$timeout(function () {
                      t.model.CreateModel.PWD = null;
                      t.ClearErrorMessage("PWD");
                    }, 3e3))),
                  t.isRegisterPWDValid);
            });
            jQuery.validator.addMethod("ckNewPassword", function (t) {
              return n.Validator.IsPasswordFormatValid(t);
            });
            jQuery.validator.addMethod("ckPasswordConfirmation", function (n) {
              return n === t.model.CreateModel.PWD;
            });
            jQuery.validator.addMethod("ckNickName", function (t) {
              return n.Validator.IsNicknameFormatValid(t);
            });
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (t) {
                return n.Validator.IsCellPhoneByLengthFormatValid(t);
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (t) {
              return n.Validator.IsCellPhoneFormatValid(t);
            });
            jQuery.validator.addMethod("ckAccountExist", function () {
              return (
                t.model.ShowType !==
                n.Models.RegisterViewModel.ShowTypeEnum.ACCOUNT_EXIST
              );
            });
            jQuery.validator.addMethod("ckCaptchaCodeByRegister", function (t) {
              return n.Validator.IsSMSCaptchaLengthValid(t);
            });
            jQuery.validator.addMethod("ckCompareAccount", function () {
              return (
                t.model.CreateModel.AccountID.toLowerCase() !=
                t.model.CreateModel.PWD.toLowerCase()
              );
            });
          }),
          (t.prototype.RegisterMember = function () {
            var i = this,
              t;
            (this.model.ElementManager.DisableElement("RegisterMemberButton"),
            $("#RegisterService").valid()) &&
              this.model.ShowType !==
                n.Models.RegisterViewModel.ShowTypeEnum.ACCOUNT_EXIST &&
              this.model.AgreementOfRule !== this.model.CheckboxOf &&
              ((t = angular.copy(this.model.CreateModel)),
              (t.UniqueSessionId = $("#hfUniqueSessionId").val()),
              (t.IsReceiveSMS =
                this.model.AgreementOfReceiveSMS === this.model.CheckboxOn),
              (t.LocalStorgeCookie = n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.IT
              )),
              (t.ScreenResolution = screen.width + "*" + screen.height),
              this.IsMemberRegisterEnabled().then(function (r) {
                r != !1 &&
                  Fingerprint2.get(function (r) {
                    t.FingerIDX = Fingerprint2.x64hash128(
                      r
                        .map(function (n) {
                          return n.value;
                        })
                        .join(),
                      31
                    );
                    t.PWD = i.toolsSvc.Base64Encode(t.PWD.toLowerCase());
                    i.model.ElementManager.DisableElementBy(
                      "RegisterMemberButton",
                      "RegisterMember"
                    );
                    i.registerSvc
                      .RegisterMember(t)
                      .then(function (t) {
                        n.Helpers.SetLocalStorageItem(
                          n.ConstDefinition.LocalStorageKey.IT,
                          t.CookieID,
                          !1
                        );
                        location.href = "/Home/RegisterFinished";
                      })
                      .catch(function (t) {
                        i.model.ElementManager.EnableElement(
                          "RegisterMemberButton"
                        );
                        t.Error.Message ==
                        n.Helpers.ChangeLanguage("手機號碼已被註冊")
                          ? n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              t.Error.Message
                            )
                          : t.Error.Message ==
                              n.Helpers.ChangeLanguage(
                                "當前登錄域名不符合，請聯繫客服！"
                              ) ||
                            t.Error.Message ==
                              n.Helpers.ChangeLanguage("無效的推薦人")
                          ? n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              t.Error.Message,
                              null,
                              function () {
                                location.reload();
                              }
                            )
                          : n.Helpers.AlertSwitch(t);
                      })
                      .finally(function () {
                        i.model.ElementManager.EnableElementBy(
                          "RegisterMemberButton",
                          "RegisterMember"
                        );
                      });
                  });
              }));
          }),
          (t.prototype.ChangeAgreement = function (n) {
            n === "AgreementOfRule"
              ? ((this.model.AgreementOfRule =
                  this.model.AgreementOfRule === this.model.CheckboxOf
                    ? this.model.CheckboxOn
                    : this.model.CheckboxOf),
                this.model.AgreementOfRule != this.model.CheckboxOn
                  ? this.model.ElementManager.DisableElement(
                      "RegisterMemberButton"
                    )
                  : this.CheckValid())
              : n === "AgreementOfReceiveSMS" &&
                (this.model.AgreementOfReceiveSMS =
                  this.model.AgreementOfReceiveSMS === this.model.CheckboxOf
                    ? this.model.CheckboxOn
                    : this.model.CheckboxOf);
          }),
          (t.prototype.SetAmazingSign = function () {
            n.GlobalJsConfig.Config.SiteCulture != "id-id"
              ? ((this.model.AmazingSign = "！"),
                (this.model.DoubleAmazingSign = "！！"))
              : ((this.model.AmazingSign = "!"),
                (this.model.DoubleAmazingSign = "!!"));
          }),
          (t.prototype.GoToDeposit = function () {
            this.$cookies.put("openRegisterAdditionally", "Y", { path: "/" });
            location.reload(!0);
          }),
          (t.prototype.VerifyAccountIDIsExist = function () {
            var t = this.CheckAccount();
            t &&
              this.VerifyAccountIDIsExistBind(
                n.Models.VerifyAccountIDStatusEnum.IsPage
              );
          }),
          (t.prototype.GetCreateModelAccountIDInvalidTip = function () {
            var t = this.model.CreateModel.AccountID,
              i = n.Helpers.IsExist(t) === !1 || t === "",
              r = /^[^\x20]{0,}$/.test(t) === !1,
              u = /^[a-zA-Z0-9]{4,10}$/.test(t) === !1;
            return i
              ? "此欄位必填"
              : r
              ? "請勿填寫空白"
              : u
              ? "請輸入4-10位英文(可含數字)"
              : "";
          }),
          (t.prototype.CheckAccount = function () {
            var t = this.GetCreateModelAccountIDInvalidTip();
            return t !== ""
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage(t)
                ),
                !1)
              : !0;
          }),
          (t.prototype.CaptchaImageClose = function () {
            $("#mask_SliderCaptcha").hide();
            this.ResetSlider();
            this.model.SliderCaptchaErrorCount = 0;
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnCaptchaImageClose,
              null
            );
            this.model.CaptchaActionType ===
            n.Models.RegisterViewModel.CaptchaActionTypeEnum.AccountValid
              ? ((this.model.ShowType =
                  n.Models.RegisterViewModel.ShowTypeEnum.INITIAL),
                (this.model.CreateModel.AccountID = ""))
              : this.SetSendCaptchaButtonName();
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
                          return window.location.reload();
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
          (t.prototype.CheckIsServiceCallbackCreated = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.CreateModel.CellPhone == ""
              ? (i.resolve(!0), i.promise)
              : (this.model.ElementManager.DisableElementBy(
                  "sendCaptchaButton",
                  "CheckIsServiceCallbackCreated"
                ),
                this.model.ElementManager.DisableElementBy(
                  "txtRegCellPhone",
                  "CheckIsServiceCallbackCreated"
                ),
                this.SetSendCaptchaButtonName(),
                (this.model.IsCellPhoneCsOverLimit = !1),
                this.registerSvc
                  .CheckServiceCallBackReturnCaptchaCode({
                    CellPhone: this.model.CreateModel.CellPhone,
                    IdyKey: this.model.SliderCaptchaIdentityKey,
                    IdyKey2: this.model.CSCallKey,
                    NoSMSProvider: this.model.IsCanNotUseSMSProvider,
                  })
                  .then(function (r) {
                    if (r != "0" && r != "1" && r != "NOT=0" && r != "NOT=1")
                      (t.model.CreateModel.CaptchaCode = r),
                        (t.model.IsCaptchaCodeVerified = !0),
                        t.model.ElementManager.HideElement(
                          "verifyCaptchaCodeButton"
                        ),
                        t.model.ElementManager.HideElement("sendCaptchaButton"),
                        t.model.ElementManager.EnableElement(
                          "RegisterMemberButton"
                        ),
                        (t.model.IsCallCustomerService = !1),
                        (t.model.IsServiceCallBackValid = !0),
                        t.model.ElementManager.HideElement(
                          "RegisterCaptchaCode"
                        ),
                        t.ClearErrorMessage("RegisterCaptchaCode"),
                        t.CheckValid(),
                        t.model.CallCustomerServiceCounts++,
                        i.resolve(!0);
                    else if (r == "NOT=0" || r == "NOT=1")
                      (t.model.IsCallCustomerService = !0),
                        (t.model.IsServiceCallBackValid = !1),
                        (t.model.IsCaptchaSent = !0),
                        r == "NOT=1" && t.model.SliderCaptchaIdentityKey != null
                          ? (t.model.CSCallKey = angular.copy(
                              t.model.SliderCaptchaIdentityKey
                            ))
                          : r == "NOT=0" &&
                            ((t.model.IsCellPhoneValid = !1),
                            (t.model.IsCellPhoneCsOverLimit = !0)),
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage(
                            "客服人員將致電與您聯繫，請您留意接聽電話"
                          ) + t.model.DoubleAmazingSign
                        ),
                        t.model.ElementManager.DisableElement(
                          "txtRegCellPhone"
                        ),
                        t.model.CallCustomerServiceCounts++,
                        i.resolve(!0);
                    else {
                      if (r == "1" && t.model.SliderCaptchaIdentityKey != null)
                        t.model.CSCallKey = angular.copy(
                          t.model.SliderCaptchaIdentityKey
                        );
                      else if (r == "0") {
                        t.model.IsCellPhoneValid = !1;
                        t.model.IsCaptchaSent = !0;
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage(
                            "客服人員將致電與您聯繫，請您留意接聽電話"
                          ) + t.model.DoubleAmazingSign
                        );
                        t.model.CallCustomerServiceCounts++;
                        i.resolve(!0);
                        return;
                      }
                      i.resolve(!1);
                    }
                  })
                  .catch(function (t) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      t.Error.Message
                    );
                    i.resolve(!0);
                  })
                  .finally(function () {
                    t.model.ElementManager.EnableElementBy(
                      "sendCaptchaButton",
                      "CheckIsServiceCallbackCreated"
                    );
                    t.model.ElementManager.EnableElementBy(
                      "txtRegCellPhone",
                      "CheckIsServiceCallbackCreated"
                    );
                    t.SetSendCaptchaButtonName();
                  }),
                i.promise);
          }),
          (t.prototype.SendCustomerService = function () {
            var n = this;
            this.IsMemberRegisterEnabled().then(function (t) {
              t != !1 &&
                n.CheckIsServiceCallbackCreated().then(function (t) {
                  t || n.CreateMemberServiceCenterCallback();
                });
            });
          }),
          (t.prototype.CreateMemberServiceCenterCallback = function () {
            var t = this,
              i = new n.Models.CallbackServiceMemberModel();
            i.AccountID = "";
            i.CallbackLanguageID = n.Helpers.GetCallbackLanguageID();
            i.LevelType = 0;
            i.QuestionTypeID = 7;
            i.Phone = this.model.CreateModel.CellPhone;
            i.IdyKey = this.model.CSCallKey;
            this.model.ElementManager.DisableElementBy(
              "sendCaptchaButton",
              "CreateMemberServiceCenterCallback"
            );
            this.model.ElementManager.DisableElementBy(
              "txtRegCellPhone",
              "CreateMemberServiceCenterCallback"
            );
            this.registerSvc
              .CreateMemberServiceCenterCallback(i)
              .then(function (i) {
                t.model.ElementManager.DisableElement("txtRegCellPhone");
                switch (i) {
                  case ServiceCenterMemberEnum.UnProcessedData:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) +
                        t.model.DoubleAmazingSign
                    );
                    break;
                  case ServiceCenterMemberEnum.Success:
                    t.model.IsCaptchaSent = !0;
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話"
                        ) +
                        t.model.AmazingSign
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
                        t.model.AmazingSign
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
                t.model.ElementManager.EnableElementBy(
                  "sendCaptchaButton",
                  "CreateMemberServiceCenterCallback"
                );
                t.model.ElementManager.EnableElementBy(
                  "txtRegCellPhone",
                  "CreateMemberServiceCenterCallback"
                );
                t.model.CallCustomerServiceCounts++;
                t.SetSendCaptchaButtonName();
              });
          }),
          (t.prototype.IsCellPhoneVerifyTimesTodayValid = function (t) {
            var i = this,
              r = this.$q.defer();
            return (
              (this.model.MemberInfoCheckEmailCellPhoneModel.CellPhone =
                t.CellPhone),
              (this.model.MemberInfoCheckEmailCellPhoneModel.VerifyUsage =
                t.VerifyUsage),
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "IsCellPhoneVerifyTimesTodayValid"
              ),
              this.model.ElementManager.DisableElementBy(
                "txtRegCellPhone",
                "IsCellPhoneVerifyTimesTodayValid"
              ),
              (this.model.MemberInfoCheckEmailCellPhoneModel.IdyKey =
                this.model.SliderCaptchaIdentityKey),
              this.registerSvc
                .CheckCellPhoneIsVerifiedOrOverLimit(
                  this.model.MemberInfoCheckEmailCellPhoneModel
                )
                .then(function (n) {
                  i.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage =
                    n.Message;
                  i.model.CSCallKey = angular.copy(
                    i.model.SliderCaptchaIdentityKey
                  );
                  r.resolve(!0);
                })
                .catch(function (t) {
                  !n.Helpers.IsNull(t.Error) &&
                    n.Verifier.IsVerifyTimesOverLimit(t.Error.Message) &&
                    ((i.model.IsCallCustomerService = !0),
                    (i.model.IsCaptchaCodeVerified = !1),
                    (i.model.IsCaptchaSent = !0),
                    (i.model.CSCallKey = t.Error.Data.Key));
                  t.Error.Message ===
                    n.Helpers.ChangeLanguage("手機號碼已被註冊") &&
                    (i.model.IsCallCustomerService = !1);
                  i.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage = "";
                  n.Helpers.AlertSwitch(t);
                  r.resolve(!1);
                })
                .finally(function () {
                  i.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "IsCellPhoneVerifyTimesTodayValid"
                  );
                  i.model.ElementManager.EnableElementBy(
                    "txtRegCellPhone",
                    "IsCellPhoneVerifyTimesTodayValid"
                  );
                  i.SetSendCaptchaButtonName();
                }),
              r.promise
            );
          }),
          (t.prototype.IsCurrentIPSendCaptchaCountOverLimit = function () {
            var t = this,
              i = this.$q.defer();
            return (
              (this.model.IsCallCustomerService = !1),
              this.model.ElementManager.DisableElementBy(
                "sendCaptchaButton",
                "IsCurrentIPSendCaptchaCountOverLimit"
              ),
              this.model.ElementManager.DisableElementBy(
                "txtRegCellPhone",
                "IsCurrentIPSendCaptchaCountOverLimit"
              ),
              this.registerSvc
                .CheckTodaySendCountWithIPAddress({
                  IdyKey: this.model.SliderCaptchaIdentityKey,
                })
                .then(function () {
                  i.resolve(!1);
                })
                .catch(function (t) {
                  n.Helpers.AlertSwitch(t);
                })
                .finally(function () {
                  t.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "IsCurrentIPSendCaptchaCountOverLimit"
                  );
                  t.model.ElementManager.EnableElementBy(
                    "txtRegCellPhone",
                    "IsCurrentIPSendCaptchaCountOverLimit"
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.SendCaptcha = function (t) {
            var i = this;
            this.model.CreateModel.CaptchaCode = "";
            this.VerifyCaptchaChange();
            this.model.ElementManager.DisableElementBy(
              "sendCaptchaButton",
              "SendCaptcha"
            );
            this.model.ElementManager.DisableElementBy(
              "txtRegCellPhone",
              "SendCaptcha"
            );
            this.model.ElementManager.DisableElement("VerifiedEffectiveTime");
            t.IdyKey = this.model.SliderCaptchaIdentityKey;
            this.registerSvc
              .SendCaptcha(t)
              .then(function (r) {
                i.Countdown();
                i.model.ElementManager.HideElement("sendCaptchaButton");
                i.model.ElementManager.EnableElement("VerifiedEffectiveTime");
                n.Validator.IsSMSCaptchaLengthValid(r.Message) &&
                  ((i.model.CreateModel.CaptchaCode = r.Message),
                  i.VerifyCaptchaChange());
                i.model.SentAfterStepKey = r.Data;
                i.isCaptchaImageCodeVerified = !1;
                i.verifiedCellPhone = t.CellPhone;
                i.sendVerifyCodeCount++;
                i.model.SendCaptchaCodeMsg =
                  i.model.CurrentVerifyMode === SMSVerifyModeEnum.SMS
                    ? n.Helpers.ChangeLanguage(
                        "驗證碼已發送至您的手機，請查收。"
                      )
                    : n.Helpers.ChangeLanguage(
                        "電話正在撥出，請您留意接聽獲取驗證碼。"
                      );
                i.GetVerifyModeEvent();
              })
              .catch(function (t) {
                if (t.Error.Code == "4001") {
                  location.href = "/Error/Restricted";
                  return;
                }
                if (t.Error.Message.indexOf("NotCanUseProvider") > -1) {
                  i.model.IsCanNotUseSMSProvider = !0;
                  i.SetSendCaptchaButtonName();
                  i.model.ElementManager.EnableElementBy(
                    "sendCaptchaButton",
                    "SendCaptcha"
                  );
                  i.model.ElementManager.EnableElementBy(
                    "CellPhone",
                    "SendCaptcha"
                  );
                  return;
                }
                i.model.IsCaptchaSent = !1;
                i.isCaptchaImageCodeVerified = !1;
                i.GetVerifyModeEvent();
                !n.Helpers.IsNull(t.Error) &&
                  n.Verifier.IsVerifyTimesOverLimit(t.Error.Message) &&
                  ((i.model.IsCallCustomerService = !0),
                  (i.model.CSCallKey = t.Error.Data.Key));
                n.Helpers.AlertSwitch(t);
              })
              .finally(function () {
                i.model.ElementManager.EnableElementBy(
                  "sendCaptchaButton",
                  "SendCaptcha"
                );
                i.model.ElementManager.EnableElementBy(
                  "txtRegCellPhone",
                  "SendCaptcha"
                );
                i.SetSendCaptchaButtonName();
              });
          }),
          (t.prototype.VerifyCaptchaCode = function () {
            var t = this,
              i = this.$q.defer(),
              u,
              r;
            return (
              (this.model.IsCaptchaCodeVerified = !1),
              (u = !1),
              (r = this.blockUI.instances.get("verifyCaptchaCode")),
              r.start("驗證手機驗證碼"),
              this.registerSvc
                .CheckCellPhoneIsExist({
                  CellPhone: this.model.CreateModel.CellPhone,
                  IdyKey: this.model.SentAfterStepKey,
                })
                .then(function () {
                  return t.model.IsCaptchaSent
                    ? (t.registerSvc
                        .VerifyCaptcha(
                          __assign({}, t.model.CreateModel, {
                            AccountID: t.model.CreateModel.CellPhone,
                          })
                        )
                        .then(function () {
                          t.model.IsCaptchaCodeVerified = !0;
                          t.model.IsCellPhoneValid = !1;
                          t.model.ElementManager.HideElement(
                            "verifyCaptchaCodeButton"
                          );
                          t.model.ElementManager.HideElement(
                            "sendCaptchaButton"
                          );
                          t.model.IsCallCustomerService = !1;
                          t.CancelCountDownInterval();
                          r.stop();
                          t.CheckValid();
                          i.resolve(!0);
                        })
                        .catch(function (f) {
                          u = !0;
                          f.Error.Message ==
                          n.Helpers.ChangeLanguage("手機號碼已被註冊")
                            ? (r.stop(),
                              n.Helpers.Alert(
                                "",
                                SweetAlertTypeEnum.none,
                                !1,
                                f.Error.Message
                              ))
                            : (r.stop(), n.Helpers.AlertSwitch(f));
                          t.model.ElementManager.DisableElement(
                            "RegisterMemberButton"
                          );
                          t.model.ElementManager.HideElement(
                            "verifyCaptchaCodeButton"
                          );
                          f.Error.Code == 1002 &&
                            ((t.model.CreateModel.CaptchaCode = ""),
                            t.VerifyCaptchaChange());
                          i.reject(!1);
                        }),
                      i.promise)
                    : (r.stop(),
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("請先獲取驗證碼")
                      ),
                      i.reject(!1),
                      i.promise);
                })
                .catch(function (f) {
                  return (
                    u ||
                      ((t.model.CountDownSecond =
                        t.model.DefaultCountDownSecond),
                      t.model.ElementManager.DisableElement(
                        "RegisterMemberButton"
                      ),
                      (t.model.CreateModel.CaptchaCode = ""),
                      r.stop(),
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        f.Error.Message
                      )),
                    t.model.ElementManager.HideElement(
                      "verifyCaptchaCodeButton"
                    ),
                    i.reject(!1),
                    i.promise
                  );
                }),
              i.promise
            );
          }),
          (t.prototype.VerifyAccountID = function () {
            var r = this.model.CreateModel.AccountID,
              i = this.GetCreateModelAccountIDInvalidTip(),
              t;
            if (i === "") {
              if (
                n.Validator.IsAccountIDNotSafe(
                  this.model.CreateModel.AccountID
                ) ||
                !n.Validator.IsAccountPrefixValid(
                  this.model.CreateModel.AccountID
                )
              ) {
                this.model.ShowType =
                  n.Models.RegisterViewModel.ShowTypeEnum.ACCOUNT_EXIST;
                t =
                  "<div class='selectAC_red'>" +
                  n.Helpers.ChangeLanguage("該帳號已被註冊，請重新填寫") +
                  "</div>";
                this.ShowRecommendAccountsTip(t);
                $("#RegisterService").validate().element("#AccountID");
                return;
              }
              this.VerifyAccountIDIsExistBind(
                n.Models.VerifyAccountIDStatusEnum.IsPage
              );
            }
          }),
          (t.prototype.VerifyAccountIDOnChange = function () {
            this.model.KeepPreviousAccountInput = "";
            this.model.ShowType =
              n.Models.RegisterViewModel.ShowTypeEnum.INITIAL;
            this.HideRecommendAccountsTip();
          }),
          (t.prototype.VerifyAccountIDOnBlur = function () {
            if (
              this.currentMouseTarget &&
              this.currentMouseTarget.className ===
                "fancybox-item fancybox-close"
            ) {
              this.model.CreateModel.AccountID = "";
              this.VerifyAccountIDOnChange();
              return;
            }
            this.IsSamePreviousAcccountInput() ||
              ((this.model.CaptchaActionType =
                n.Models.RegisterViewModel.CaptchaActionTypeEnum.AccountValid),
              this.VerifyAccountID());
          }),
          (t.prototype.VerifyCellPhone = function () {
            var i = this.model,
              r = i.IsCallCustomerService,
              t = i.CreateModel;
            r &&
              this.model.ElementManager.IsEnabled("txtRegCellPhone") &&
              ((this.model.IsCallCustomerService = !1),
              this.SetSendCaptchaButtonName());
            t.CellPhone == null || t.CellPhone == ""
              ? ((this.verifiedCellPhone = ""),
                (this.model.IsCellPhoneValid = !1))
              : (this.model.IsCellPhoneValid =
                  n.Validator.IsCellPhoneFormatValid(t.CellPhone));
          }),
          (t.prototype.TriggerInputOnBlur = function (n, t) {
            var i = "";
            return (
              n != null && (i = n.replace(/([\u3105-\u3129\s])/g, "")),
              i.length > t && (i = i.substring(0, t)),
              i
            );
          }),
          (t.prototype.NickNameOnkeyup = function (n) {
            var i = n.target,
              t = i.value,
              r = t.charAt(t.length - 1);
            (this.IsEnglishOrNumber(r) || this.IsChineseWordIncluded(r)) &&
              (t.length <= 5
                ? (this.nickNameCurrentVal = t)
                : (i.value = this.nickNameCurrentVal));
          }),
          (t.prototype.VerifyImageCaptcha = function () {
            var t = this;
            if (
              ((this.model.CaptchaImageCodeMsg = "N/A"),
              this.model.CaptchaImageCode === "" ||
                this.model.CaptchaImageCode === undefined)
            ) {
              this.model.CaptchaImageCodeMsg =
                n.Helpers.ChangeLanguage("請輸入驗證碼");
              return;
            }
            this.registerSvc
              .VerifyImageCaptcha({ CaptchaCode: this.model.CaptchaImageCode })
              .then(function () {
                t.isCaptchaImageCodeVerified = !0;
                t.SendCaptchaButtonClick();
                t.CaptchaImageClose();
              })
              .catch(function () {
                t.model.CaptchaImageCodeMsg =
                  n.Helpers.ChangeLanguage("驗證碼錯誤，請重新輸入");
                t.ResetCaptcha();
              });
          }),
          (t.prototype.ResetCaptcha = function () {
            this.model.CaptchaImageCode = "";
            this.model.CaptchaImageUrl =
              "/HtmlModule/GetCaptchaImage?" + Date.now();
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            return this.model.SendCaptchaButtonName ===
              n.Helpers.ChangeLanguage("短信")
              ? "verCode_Msg"
              : this.model.SendCaptchaButtonName ===
                n.Helpers.ChangeLanguage("語音")
              ? "verCode_Voice"
              : this.model.SendCaptchaButtonName ===
                  n.Helpers.ChangeLanguage("重發驗證碼") ||
                this.model.SendCaptchaButtonName ===
                  n.Helpers.ChangeLanguage("聯繫客服")
              ? "verCode_Rep"
              : "verCode_Msg";
          }),
          (t.prototype.IsSendCaptchaButtonEnabled = function () {
            return (
              this.model.IsCellPhoneValid &&
              !this.model.IsCaptchaCodeVerified &&
              this.model.ElementManager.IsEnabled("sendCaptchaButton")
            );
          }),
          (t.prototype.IsVerifyCaptchaCodeButtonEnabled = function () {
            return (
              ((this.model.IsCellPhoneValid && this.model.IsCaptchaSent) ||
                this.model.IsCellPhoneCsOverLimit) &&
              this.model.ElementManager.IsVisible("verifyCaptchaCodeButton") &&
              $("#sendCaptchaButton").val() !=
                n.Helpers.ChangeLanguage("發送中")
            );
          }),
          (t.prototype.SendCaptchaButtonClick = function () {
            var t = this,
              i;
            return ((this.model.CaptchaActionType =
              n.Models.RegisterViewModel.CaptchaActionTypeEnum.PhoneValid),
            this.ClearErrorMessage("RegisterCaptchaCode"),
            !this.model.ElementManager.IsVisible("sendCaptchaButton") ||
              !this.model.ElementManager.IsEnabled("sendCaptchaButton"))
              ? !1
              : ((i = !0),
                (this.model.CreateModel.AccountID === null ||
                  this.model.CreateModel.AccountID == "") &&
                  ($("#AccountID").valid(), $("#AccountID").focus(), (i = !1)),
                this.model.ShowType !=
                  n.Models.RegisterViewModel.ShowTypeEnum.CAPTCHA_STEP &&
                  ($("#AccountID").focus(), (i = !1)),
                i == !0 &&
                  this.model.CreateModel.NickName === "" &&
                  ($("#NickName").valid(), $("#NickName").focus(), (i = !1)),
                i != !0 ||
                  (this.model.CreateModel.PWD !== "" &&
                    this.model.CreateModel.PWD !== null &&
                    this.model.CreateModel.AccountID !==
                      this.model.CreateModel.PWD &&
                    n.Validator.IsPasswordFormatValid(
                      this.model.CreateModel.PWD
                    ) &&
                    this.isRegisterPWDValid &&
                    !n.Validator.IsPasswordTooSimple(
                      this.model.CreateModel.PWD
                    )) ||
                  ($("#PWD").valid(), $("#PWD").focus(), (i = !1)),
                i === !1)
              ? !1
              : this.model.IsCanNotUseSMSProvider ||
                this.model.IsCallCustomerService
              ? (this.SendCustomerService(), !1)
              : this.model.SliderCaptchaIdentityKey == null ||
                this.model.SliderCaptchaIdentityKey.length !== 32
              ? (this.InitSliderCaptchaImage(), !1)
              : (this.IsMemberRegisterEnabled().then(function (n) {
                  n != !1 &&
                    t.CheckIsServiceCallbackCreated().then(function (n) {
                      if (n) {
                        t.model.SliderCaptchaIdentityKey = null;
                        return;
                      }
                      t.IsCellPhoneVerifyTimesTodayValid(
                        t.model.CreateModel
                      ).then(function (n) {
                        if (!n) {
                          t.model.SliderCaptchaIdentityKey = null;
                          return;
                        }
                        t.IsCurrentIPSendCaptchaCountOverLimit().then(function (
                          n
                        ) {
                          if (n) {
                            t.model.SliderCaptchaIdentityKey = null;
                            return;
                          }
                          t.SendCaptcha(
                            __assign({}, t.model.CreateModel, {
                              AccountID: t.model.CreateModel.CellPhone,
                            })
                          );
                          t.model.SliderCaptchaIdentityKey = null;
                          t.model.IsCaptchaSent = !0;
                        });
                      });
                    });
                }),
                !0);
          }),
          (t.prototype.GetSendCaptchaButtonName = function (t) {
            if (
              (t === void 0 && (t = this.model.CurrentVerifyMode),
              !this.model.ElementManager.IsEnabled("sendCaptchaButton"))
            )
              return n.Helpers.ChangeLanguage("發送中");
            if (
              this.model.IsCanNotUseSMSProvider ||
              this.model.IsCallCustomerService
            )
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (t) {
              case SMSVerifyModeEnum.SMS:
                return this.sendVerifyCodeCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return n.Helpers.ChangeLanguage("語音");
              default:
                return n.Helpers.ChangeLanguage("讀取中");
            }
          }),
          (t.prototype.SetSendCaptchaButtonName = function (n) {
            n === void 0 && (n = this.model.CurrentVerifyMode);
            var t = this.GetSendCaptchaButtonName(n);
            t != "" && (this.model.SendCaptchaButtonName = t);
          }),
          (t.prototype.GetVerifyModeEvent = function () {
            var t = this;
            this.registerSvc
              .GetVerifyMode(
                __assign({}, this.model.CreateModel, {
                  AccountID: this.model.CreateModel.CellPhone,
                })
              )
              .then(function (i) {
                t.model.CurrentVerifyMode = n.SiteCultureMethod.Provider()
                  .IsEnableSMSChangeMode
                  ? i
                  : SMSVerifyModeEnum.SMS;
                t.model.IsCanNotUseSMSProvider = !1;
              })
              .catch(function (i) {
                if (
                  ((t.model.CurrentVerifyMode = SMSVerifyModeEnum.SMS),
                  i == null ||
                    i == undefined ||
                    i.Error == null ||
                    i.Error == undefined)
                ) {
                  n.Helpers.AlertOnlyOKCallback(
                    "",
                    SweetAlertTypeEnum.none,
                    function () {
                      window.location.reload(!0);
                    },
                    "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                  );
                  return;
                }
                t.model.IsCanNotUseSMSProvider = !0;
              })
              .finally(function () {
                t.SetSendCaptchaButtonName(t.model.CurrentVerifyMode);
              });
          }),
          (t.prototype.CheckValid = function (t) {
            var f, e;
            this.model.ElementManager.DisableElement("RegisterMemberButton");
            var r = this.model.CreateModel,
              o = r.CaptchaCode,
              i = r.CellPhone,
              u = !1;
            if (
              (this.verifiedCellPhone != "" &&
                i != "" &&
                i != null &&
                (u = this.verifiedCellPhone !== i),
              !n.Validator.IsSMSCaptchaLengthValid(o) || u
                ? this.model.ElementManager.HideElement(
                    "verifyCaptchaCodeButton"
                  )
                : this.model.ElementManager.ShowElement(
                    "verifyCaptchaCodeButton"
                  ),
              t == null || ((f = t.target), f.value !== "")) &&
              this.model.CreateModel.AccountID !== this.model.CreateModel.PWD &&
              this.model.AgreementOfRule == this.model.CheckboxOn &&
              this.model.IsCaptchaCodeVerified !== !1 &&
              this.model.CreateModel.AccountID !== "" &&
              this.model.CreateModel.NickName !== "" &&
              this.model.CreateModel.PWD !== "" &&
              this.model.CreateModel.CellPhone !== "" &&
              this.model.CreateModel.CaptchaCode !== "" &&
              this.model.ShowType ===
                n.Models.RegisterViewModel.ShowTypeEnum.CAPTCHA_STEP
            ) {
              if (this.model.IsServiceCallBackValid) {
                this.model.ElementManager.EnableElement("RegisterMemberButton");
                return;
              }
              e = $("#RegisterService");
              e.valid() &&
                this.model.ElementManager.EnableElement("RegisterMemberButton");
            }
          }),
          (t.prototype.IsEnglishOrNumber = function (n) {
            return /^[\d|a-zA-Z]+$/.test(n);
          }),
          (t.prototype.IsChineseWordIncluded = function (n) {
            for (var t, r, o, u, f, e = "", i = 0; i < n.length; i++) {
              for (
                t = n.charCodeAt(i).toString(16).toUpperCase();
                t.length < 4;

              )
                t = "0" + t;
              t = "\\u" + t;
              e += t;
            }
            r = e.split("\\u");
            for (o in r)
              if (
                ((u = r[o]),
                u != "" &&
                  ((f = parseInt(u, 16)),
                  f >= parseInt("4e00", 16) && f <= parseInt("9fa5", 16)))
              )
                return !0;
            return !1;
          }),
          (t.prototype.CancelCountDownInterval = function () {
            this.countDownSecondTick != null &&
              this.$interval.cancel(this.countDownSecondTick);
          }),
          (t.prototype.CancelVerifiedEffectiveTimeInterval = function () {
            this.verifiedEffectiveTimeTick != null &&
              this.$interval.cancel(this.verifiedEffectiveTimeTick);
          }),
          (t.prototype.Countdown = function () {
            var n = this;
            this.CancelCountDownInterval();
            this.CancelVerifiedEffectiveTimeInterval();
            this.model.CountDownSecond = this.model.DefaultCountDownSecond;
            this.model.ElementManager.DisableElementBy(
              "sendCaptchaButton",
              "Countdown"
            );
            this.model.ElementManager.DisableElementBy(
              "txtRegCellPhone",
              "Countdown"
            );
            this.countDownSecondTick = this.$interval(function () {
              n.model.CountDownSecond--;
              n.model.IsCallCustomerService = !1;
              n.model.ElementManager.HideElement("sendCaptchaButton");
              n.model.CountDownSecond <= 0 &&
                ((n.model.CountDownSecond = n.model.DefaultCountDownSecond),
                n.model.ElementManager.EnableElementBy(
                  "sendCaptchaButton",
                  "Countdown"
                ),
                n.model.ElementManager.EnableElementBy(
                  "txtRegCellPhone",
                  "Countdown"
                ),
                n.model.ElementManager.ShowElement("sendCaptchaButton"),
                n.model.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage ==
                  "Success_LimitNumber" && (n.model.IsCallCustomerService = !0),
                n.SetSendCaptchaButtonName(),
                n.CancelCountDownInterval());
            }, 1e3);
            this.model.VerifiedEffectiveTime =
              this.model.DefaultVerifiedEffectiveTime;
            this.verifiedEffectiveTimeTick = this.$interval(function () {
              n.model.VerifiedEffectiveTime === 1
                ? (n.CancelVerifiedEffectiveTimeInterval(),
                  n.model.ElementManager.DisableElement(
                    "VerifiedEffectiveTime"
                  ),
                  (n.model.VerifiedEffectiveTime =
                    n.model.DefaultVerifiedEffectiveTime))
                : n.model.VerifiedEffectiveTime--;
            }, 6e4);
          }),
          (t.prototype.RegisterPWDOnFocus = function () {
            this.isRegisterPWDOnFocus = !1;
          }),
          (t.prototype.RegisterPWDOnBlur = function () {
            this.isRegisterPWDOnFocus = !0;
            this.model.CreateModel.AccountID != null &&
              this.model.CreateModel.AccountID != "" &&
              this.model.CreateModel.PWD != null &&
              this.model.CreateModel.PWD != "" &&
              ((this.isRegisterPWDValid = !(
                this.model.CreateModel.AccountID.toLowerCase() ===
                this.model.CreateModel.PWD.toLowerCase()
              )),
              $("#PWD").valid());
          }),
          (t.prototype.CheckInviteAccountIDOrAgentID = function () {
            var t = window.sessionStorage.getItem("InviteAccountID") || "",
              n;
            if (t.length !== 0) {
              this.model.CreateModel.InviteAccountID = t;
              this.model.CreateModel.AgencyURL = "";
              return;
            }
            n = window.sessionStorage.getItem("AgentID") || "";
            n.length !== 0 &&
              ((this.model.CreateModel.AgencyURL = n.toUpperCase()),
              (this.model.AgencyURLOriginal = n.toUpperCase()),
              (this.model.CreateModel.InviteAccountID = ""));
          }),
          (t.prototype.ClearErrorMessage = function (n) {
            var t = jQuery("#" + n).parent();
            $(t).removeClass("error");
            $(t).find("span.errorHint").remove();
          }),
          (t.prototype.VerifyCaptchaChange = function () {
            var i = this,
              t;
            $("#RegisterCaptchaCode").valid();
            t = n.Validator.IsSMSCaptchaLengthValid(
              this.model.CreateModel.CaptchaCode
            );
            this.ClearErrorMessage("RegisterCaptchaCode");
            t
              ? (this.model.ElementManager.ShowElement(
                  "verifyCaptchaCodeButton"
                ),
                this.$timeout(function () {
                  i.model.ElementManager.EnableElementBy(
                    "VerifiedEffectiveTime",
                    "VerifyCaptchaChange"
                  );
                }, 400))
              : (this.model.ElementManager.HideElement(
                  "verifyCaptchaCodeButton"
                ),
                this.model.ElementManager.DisableElementBy(
                  "VerifiedEffectiveTime",
                  "VerifyCaptchaChange"
                ));
          }),
          (t.prototype.ChangeAccountID = function (n) {
            this.model.KeepPreviousAccountInput = "";
            this.HideRecommendAccountsTip();
            this.model.CreateModel.AccountID = n;
            this.VerifyAccountIDIsExist();
          }),
          (t.prototype.VerifyAccountIDIsExistBind = function (t) {
            var i = this;
            this.model.CreateModel.IdyKey = this.model.SliderCaptchaIdentityKey;
            this.model.CreateModel.LocalStorgeCookie =
              n.Helpers.GetLocalStorageItem(
                n.ConstDefinition.LocalStorageKey.IT
              );
            this.registerSvc
              .VerifyAccountIDIsExist({
                username: this.model.CreateModel.AccountID,
                password: this.model.CreateModel.PWD,
                name: this.model.CreateModel.NickName,
                phone: this.model.CreateModel.CellPhone,
                casio: 'kubet'
              })
              .then(function (r) {
                if (r == undefined || r == null) {
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage("系統錯誤，請稍後再試")
                  );
                  return;
                }
                if (
                  r.IsOverIpLimit === !0 &&
                  (i.model.SliderCaptchaIdentityKey == null ||
                    i.model.SliderCaptchaIdentityKey.length !== 32)
                ) {
                  i.InitSliderCaptchaImage();
                  return;
                }
                if (
                  ((i.model.KeepPreviousAccountInput =
                    i.model.CreateModel.AccountID),
                  r.CanUse === !1)
                ) {
                  i.model.ShowType =
                    n.Models.RegisterViewModel.ShowTypeEnum.ACCOUNT_EXIST;
                  var u =
                    "<div style='color:red'>" +
                    n.Helpers.ChangeLanguage("該帳號已被註冊，請重新填寫") +
                    "</div>";
                  r.AccountList.length > 0 &&
                    ((u =
                      "<div>" +
                      n.Helpers.ChangeLanguage("該帳號已註冊，建議使用") +
                      "</div>"),
                    _.uniq(r.AccountList).forEach(function (n) {
                      u +=
                        "<a ng-click=\"ctrl.ChangeAccountID('" +
                        n.toUpperCase() +
                        "')\">" +
                        n.toUpperCase() +
                        "</a>";
                    }));
                  i.ShowRecommendAccountsTip(u);
                  $("#RegisterService").validate().element("#AccountID");
                } else (i.model.ShowType = n.Models.RegisterViewModel.ShowTypeEnum.CAPTCHA_STEP), i.HideRecommendAccountsTip(), $("#RegisterService").validate().element("#AccountID"), t == n.Models.VerifyAccountIDStatusEnum.IsPage && i.CheckValid(), t == n.Models.VerifyAccountIDStatusEnum.IsNextPage && $("#RegisterService").valid() && i.ResetSnedCaptchaViewModel();
                r.CookieID != null &&
                  r.CookieID != "" &&
                  n.Helpers.SetLocalStorageItem(
                    n.ConstDefinition.LocalStorageKey.IT,
                    r.CookieID,
                    !0
                  );
                i.model.SliderCaptchaIdentityKey = null;
              })
              .catch(function (t) {
                n.Helpers.AlertSwitch(t);
              });
          }),
          (t.prototype.InputDisabled = function () {
            var t = window.navigator.userAgent,
              n = function (n) {
                return t.indexOf(n) >= 0;
              },
              i = (function () {
                return "ActiveXObject" in window;
              })();
            return n("Edge") || n("MSIE") || i
              ? $("#dvRecommendAccounts").is(":visible")
              : !1;
          }),
          (t.prototype.VerifyCallback = function (t, i) {
            var r = this;
            t
              ? ((this.model.SliderCaptchaIdentityKey = i),
                (this.model.SliderCaptchaErrorCount = 0),
                this.$timeout(function () {
                  $("#mask_SliderCaptcha").hide();
                  r.ResetSlider();
                  r.model.CaptchaActionType ===
                  n.Models.RegisterViewModel.CaptchaActionTypeEnum.AccountValid
                    ? r.VerifyAccountIDOnBlur()
                    : r.SendCaptchaButtonClick();
                }, 1e3))
              : (this.model.SliderCaptchaErrorCount++,
                this.model.SliderCaptchaErrorCount >= 5 &&
                  this.$timeout(function () {
                    r.CaptchaImageClose();
                  }, 1e3));
          }),
          (t.prototype.HandleCaptchaSuccess = function (t) {
            var i = this;
            this.model.SliderCaptchaIdentityKey = t;
            this.model.SliderCaptchaErrorCount = 0;
            this.$timeout(function () {
              $("#mask_SliderCaptcha").hide();
              i.ResetSlider();
              i.model.CaptchaActionType ===
              n.Models.RegisterViewModel.CaptchaActionTypeEnum.AccountValid
                ? i.VerifyAccountIDOnBlur()
                : i.SendCaptchaButtonClick();
            });
          }),
          (t.prototype.HandleCaptchaFail = function () {
            var n = this;
            if (
              (this.model.SliderCaptchaErrorCount++,
              this.model.SliderCaptchaErrorCount >= 5)
            ) {
              this.$timeout(function () {
                n.CaptchaImageClose();
              }, 300);
              return;
            }
            this.InitSliderCaptchaImage();
          }),
          (t.prototype.HideRecommendAccountsTip = function () {
            $("#dvRecommendAccounts").hide();
            this.canUseAccount = "";
          }),
          (t.prototype.ShowRecommendAccountsTip = function (n) {
            $("#dvRecommendAccounts").show();
            this.canUseAccount = n;
          }),
          (t.prototype.IsSamePreviousAcccountInput = function () {
            return (
              this.model.KeepPreviousAccountInput ==
              this.model.CreateModel.AccountID
            );
          }),
          (t.prototype.OpenMousemoveKeep = function () {
            this.$window.addEventListener("mousemove", this.handleMousemove);
          }),
          (t.prototype.CloseMousemoveKeep = function () {
            this.$window.removeEventListener("mousemove", this.handleMousemove);
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
              $("#mask_SliderCaptcha").show();
            } catch (i) {
              n.Helpers.AlertSwitch(i);
            }
          }),
          (t.prototype.ResetSlider = function () {
            this.SliderBgImage = "";
            this.SliderImage = "";
          }),
          (t.prototype.SliderRefreshCallback = function () {
            var n = this;
            this.$timeout(function () {
              n.InitSliderCaptchaImage();
            });
          }),
          (t.prototype.IsVerifyModeCallCustomerServiceOnly = function () {
            return this.model.IsCanNotUseSMSProvider;
          }),
          (t.$name = "RegisterCtrl"),
          (t.$inject = [
            "$timeout",
            "$q",
            "$cookies",
            "$interval",
            "RegisterSvc",
            "PermissionSvc",
            "VerifySvc",
            "messageBus",
            "blockUI",
            "LogSvc",
            "ToolsSvc",
            "$window",
          ]),
          t
        );
      })();
      t.RegisterCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.RegisterCtrl.$name,
  OBSApp.Controllers.RegisterCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function t() {
          this.SuperRewardSetting = new n.GetPlatformSuperRewardSettingResult();
        }
        return t;
      })();
      n.RunMsgAreaViewModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t) {
          this.dataProvider = n;
          this.xpagerSvc = t;
        }
        return (
          (n.prototype.GetKuVideoGameBonusSet = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Game/GetKuVideoGameBonusSet?gType=" + n,
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
          (n.prototype.GetPlatformSuperRewardSetting = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Game/GetPlatformSuperRewardSetting",
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
          (n.$name = "RunMsgAreaSvc"),
          (n.$inject = ["DataProvider", "XPagerSvc"]),
          n
        );
      })();
      n.RunMsgAreaService = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.RunMsgAreaService.$name,
  OBSApp.Services.RunMsgAreaService
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f) {
          var o, e;
          this.$filter = t;
          this.runMsgAreaSvc = i;
          this.$sce = r;
          this.ngTableParams = u;
          this.$timeout = f;
          this.bonusNumbers = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            ",",
            "-",
            ".",
          ];
          this.bonusSet = "0";
          this.languageCode = "";
          this.jackpotCSSNum = {};
          this.jackpotGType = {};
          this.jackpotData = {};
          this.startTime = null;
          this.languageCode = n.SiteCultureMethod.Provider().LanguageCode;
          this.bonusSetCharArrayDefault = parseInt(this.bonusSet)
            .toLocaleString(this.languageCode, {
              minimumIntegerDigits: 8,
              minimumFractionDigits: 1,
            })
            .replace(/0/g, "-")
            .split("")
            .map(function (n) {
              return n.charCodeAt(0);
            });
          for (o in this.bonusNumbers) {
            e = this.bonusNumbers[o].charCodeAt(0);
            switch (e) {
              case 44:
                this.jackpotCSSNum[e] = "jackpotP";
                break;
              case 45:
                this.jackpotCSSNum[e] = "jackpotH";
                break;
              case 46:
                this.jackpotCSSNum[e] = "jackpotD";
                break;
              default:
                this.jackpotCSSNum[e] = "jackpotN" + this.bonusNumbers[o];
            }
          }
          this.InitializeViewModel();
        }
        return (
          (t.prototype.InitializeViewModel = function () {
            this.model = new n.Models.RunMsgAreaViewModel();
            this.GetPlatformSuperRewardSetting();
          }),
          (t.prototype.ChangeJackpotGType = function (n) {
            var t = this,
              i = function (r) {
                if (t.jackpotData[n]) {
                  t.startTime || (t.startTime = r);
                  var f = 6e4,
                    e = r - t.startTime,
                    u =
                      t.jackpotData[n].count +
                      (t.jackpotData[n].limit - t.jackpotData[n].count) *
                        (e / f);
                  u = u > t.jackpotData[n].limit ? t.jackpotData[n].limit : u;
                  t.$timeout(function () {
                    var i = (Math.floor(u * 10) / 10).toLocaleString(
                      t.languageCode,
                      { minimumFractionDigits: 1 }
                    );
                    t.jackpotGType[n] = i.split("").map(function (n) {
                      return n.charCodeAt(0);
                    });
                  });
                  e < f && requestAnimationFrame(i);
                }
              };
            requestAnimationFrame(i);
          }),
          (t.prototype.GetKuVideoGameBonusSet = function (n) {
            var i = this,
              t;
            this.jackpotLoading = !0;
            t = "";
            switch (n) {
              case BBLiveBonusGTypeEnum.Baccarat:
                t = "BAC";
                break;
              case BBLiveBonusGTypeEnum.SeDie:
                t = "CD";
            }
            return (
              this.runMsgAreaSvc
                .GetKuVideoGameBonusSet(n)
                .then(function (n) {
                  var r = Math.floor(n * 10) / 10;
                  i.jackpotData[t] = { limit: n, count: n - 120 };
                })
                .catch(function () {
                  i.jackpotGType[t] = i.bonusSetCharArrayDefault;
                })
                .finally(function () {
                  i.jackpotLoading = !1;
                  i.ChangeJackpotGType(t);
                }),
              !0
            );
          }),
          (t.prototype.GetPlatformSuperRewardSetting = function () {
            var t = this;
            this.jackpotLoading = !0;
            this.runMsgAreaSvc
              .GetPlatformSuperRewardSetting()
              .then(function (n) {
                var i = n.IsShowBaccarat && n.IsShowBaccaratMarquee,
                  r = n.IsShowColorPlate && n.IsShowColorPlateMarquee;
                n.IsTurnOn = n.IsTurnOn ? i || r : n.IsTurnOn;
                n.IsTurnOn && n.IsApiUpdateTurnOn
                  ? (i &&
                      t.GetKuVideoGameBonusSet(BBLiveBonusGTypeEnum.Baccarat),
                    r && t.GetKuVideoGameBonusSet(BBLiveBonusGTypeEnum.SeDie))
                  : (t.jackpotLoading = !1);
                t.model.SuperRewardSetting = n;
                t.jackpotOne = !(i && r);
                t.jackpotOne ||
                  jQuery().ready(function () {
                    jQuery(".jackpotAll").length > 0 &&
                      (setTimeout(function () {
                        jQuery("#btn_jackpotBAC").hide();
                        jQuery("#btn_jackpotCD").show();
                      }, 6500),
                      window.setInterval(function () {
                        jQuery("#btn_jackpotBAC").show();
                        jQuery("#btn_jackpotCD").hide();
                        setTimeout(function () {
                          jQuery("#btn_jackpotBAC").hide();
                          jQuery("#btn_jackpotCD").show();
                        }, 6500);
                      }, 13e3));
                  });
              })
              .catch(function () {
                t.jackpotLoading = !1;
                t.model.SuperRewardSetting =
                  new n.Models.GetPlatformSuperRewardSettingResult();
              });
          }),
          (t.$name = "RunMsgAreaCtrl"),
          (t.$inject = [
            "$filter",
            "RunMsgAreaSvc",
            "$sce",
            "NgTableParams",
            "$timeout",
          ]),
          t
        );
      })();
      t.RunMsgAreaCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.RunMsgAreaCtrl.$name,
  OBSApp.Controllers.RunMsgAreaCtrl
),
  (function (n) {
    var t;
    (function (t) {
      var f = (function () {
          function n(n) {
            this.AccountID = "";
            this.AccountPWD = "";
            this.ProtectCode = "";
            this.LocalStorgeCookie = "";
            this.FingerIDX = "";
            this.ScreenResolution = "";
            this.ShowSliderCaptcha = !1;
            this.ShowPhoneVerify = !1;
            this.VerifySliderCaptcha = !1;
            this.CellPhone = "";
            this.ProtectCodeCellPhone = "";
            this.IsCellPhoneValid = !1;
            this.IdyKey = "";
            this.CaptchaCode = "";
            this.LoginVerification = 0;
            this.IsLobbyProtect = !1;
            this.ProtectCodeModel = new i();
            this.ElementManager = new t.ViewElementManager();
            this.DepositNewsModel = [];
            this.SignInOverLimitIsRefreshPage = !1;
            this.UniqueSessionId = n;
          }
          return n;
        })(),
        i,
        r,
        u;
      t.SignInViewModel = f;
      i = (function () {
        function t() {
          this.CellPhone = "";
          this.CaptchaCode = "";
          this.PWD = "";
          this.CountDownSecond = -1;
          this.DefaultCountDownSecond = 30;
          this.IsCaptchaSent = !1;
          this.IsCaptchaCodeVerified = !1;
          this.VerifiedEffectiveTime = -1;
          this.DefaultVerifiedEffectiveTime = 10;
          this.SendCaptchaCodeMsg = "";
          this.SendCaptchaButtonName = n.Helpers.ChangeLanguage("讀取中");
          this.SendVerifyCodeCount = 0;
          this.CallCustomerServiceCounts = 0;
          this.IsCallCustomerService = !1;
          this.IsServiceCallBackValid = !1;
          this.IsCanNotUseSMSProvider = !1;
          this.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage = "";
        }
        return t;
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
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t) {
          this.dataProvider = n;
          this.xpagerSvc = t;
        }
        return (
          (n.prototype.SignIn = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "https://api.ku1119.com/api/kubet/login",
              n
            );
          }),
          (n.prototype.SendCaptcha = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Verify/SendCaptcha",
              n
            );
          }),
          (n.prototype.VerifyCaptcha = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Verify/VerifyCaptcha",
              n
            );
          }),
          (n.prototype.IsProtectCodeCellPhoneOverLimit = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Verify/IsProtectCodeCellPhoneNotVerifiedOrOverLimit",
              n
            );
          }),
          (n.prototype.CheckProtectCodeServiceCallBackReturnCaptchaCode =
            function (n) {
              return this.dataProvider.SimpleApiResultPost(
                "../api/MemberInfo/CheckProtectCodeServiceCallBackReturnCaptchaCode",
                n
              );
            }),
          (n.prototype.CreateMemberServiceCenterCallback = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/MemberInfo/CreateMemberServiceCenterCallback",
              n
            );
          }),
          (n.prototype.SetProtectCode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "/api/MemberInfo/SetProtectCode",
              n
            );
          }),
          (n.prototype.GetVerifyMode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../api/Common/GetVerifyMode",
              n
            );
          }),
          (n.$name = "SignInSvc"),
          (n.$inject = ["DataProvider", "XPagerSvc"]),
          n
        );
      })();
      n.SignInSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.SignInSvc.$name,
  OBSApp.Services.SignInSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f, e, o, s, h, c) {
          var l = this;
          this.$q = t;
          this.$interval = i;
          this.toolsSvc = r;
          this.signInSvc = u;
          this.verifySvc = f;
          this.messageBus = e;
          this.$timeout = o;
          this.appContext = s;
          this.permissionSvc = h;
          this.dataProvider = c;
          this.countDownSecondTick = null;
          this.verifiedEffectiveTimeTick = null;
          this.needSetProtectCode = !1;
          this.signInButtonOriginName = "登　錄";
          this.textPromptTimeoutId = null;
          this.checkSimplePWDTimeoutId = null;
          this.SliderImage = "";
          this.SliderBgImage = "";
          this.toolsSvc = r;
          this.signInSvc = u;
          this.verifySvc = f;
          this.messageBus = e;
          e.On("fancyBoxClose", function (t, i) {
            var r = i == "#login" && !l.needSetProtectCode,
              u = i == "#protectLogin";
            (r || u) &&
              (l.CheckSignInButtonDisabled(),
              l.InitializeViewModel(l.model.UniqueSessionId),
              l.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
                { elemId: "ProtectCode" }
              ),
              l.messageBus.Emit(
                n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
                { elemId: "CheckPWDConfirmation" }
              ));
          });
          e.On("enableLobbyProtect", function () {
            l.model.AccountID = l.appContext.UserProfile.AccountID;
            l.model.ProtectCodeModel.CellPhone =
              l.appContext.UserProfile.CellPhone;
            l.model.IsLobbyProtect = !0;
            l.$timeout(function () {
              jQuery("#lobbyProtectCodeSetting").click();
            }, 50);
          });
          e.On(
            n.ConstDefinition.MessageBusEventName.OnAccountIsLockHintOpen,
            function (n, t) {
              l.model.SignInOverLimitErrorMsg = t;
              l.model.SignInOverLimitIsRefreshPage = !0;
              $("#loginLock").show();
            }
          );
          this.InitializeViewModel();
        }
        return (
          (t.prototype.InitializeViewModel = function (t) {
            var i = this;
            this.model = new n.Models.SignInViewModel(t);
            this.model.ProtectCodeModel.DefaultVerifiedEffectiveTime = Number(
              jQuery("#hfDefaultVerifiedEffectiveTime").val()
            );
            this.model.ProtectCodeModel.DefaultCountDownSecond = Number(
              jQuery("#hfDefaultCountDownSecond").val()
            );
            this.model.ProtectCodeModel.VerifiedEffectiveTime =
              this.model.ProtectCodeModel.DefaultVerifiedEffectiveTime;
            this.needSetProtectCode = !1;
            this.CancelCountDownInterval();
            this.CancelVerifiedEffectiveTimeInterval();
            this.model.ProtectCodeModel.SendCaptchaButtonName =
              this.GetSendCaptchaButtonName();
            this.model.ElementManager.DisableElement("ProtectCodeLoginButton");
            this.model.ElementManager.DisableElementBy(
              "VerifiedEffectiveTime",
              "VerifyCaptchaChange"
            );
            this.model.ElementManager.DisableElementBy("signin", "DoSignIn");
            this.$timeout(function () {
              i.model.LoginVerification = Number(
                jQuery("#hfLoginVerification").val()
              );
              switch (i.model.LoginVerification) {
                case LoginVerificationEnum.None:
                  i.model.ShowSliderCaptcha = !1;
                  i.model.ShowPhoneVerify = !1;
                  break;
                case LoginVerificationEnum.SliderCaptcha:
                  i.model.ShowSliderCaptcha = !0;
                  i.InitSliderCaptchaImage();
                  i.model.ShowPhoneVerify = !1;
                  break;
                case LoginVerificationEnum.SliderCaptchaPhone:
                  i.model.ShowSliderCaptcha = !0;
                  i.InitSliderCaptchaImage();
                  i.model.ShowPhoneVerify = !0;
              }
              jQuery.fancybox.update();
            }, 500);
          }),
          (t.prototype.SignInButtonClick = function () {
            if ($("#loginLock").css("display") == "block") {
              this.ClearErrorMessage("accountId");
              this.ClearErrorMessage("accountPwd");
              return;
            }
            $("#signin").click();
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
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (t) {
                return n.Validator.IsCellPhoneByLengthFormatValid(t);
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (t) {
              return n.Validator.IsCellPhoneFormatValid(t);
            });
            jQuery.validator.addMethod("ckPWD", function (t) {
              return !(t != "" && !n.Validator.IsPasswordFormatValid(t));
            });
            jQuery.validator.addMethod(
              "ckProtectCodeConfirmation",
              function (n) {
                return !(
                  n.toLowerCase() != t.model.ProtectCodeModel.PWD.toLowerCase()
                );
              }
            );
            jQuery.validator.addMethod("ckProtectCodeRequired", function (t) {
              return t != "" && n.Helpers.IsExist(t);
            });
            jQuery.validator.addMethod(
              "ckProtectCodeConfirmationRequired",
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
                    t.model.ProtectCodeModel.PWD = "";
                    t.model.ProtectCodeModel.PWDConfirmation = "";
                    $("#ProtectCode").val("");
                    $("#CheckPWDConfirmation").val("");
                    t.ClearErrorMessage("ProtectCode");
                    t.ClearErrorMessage("CheckPWDConfirmation");
                  }, 3e3)),
                r
              );
            });
            jQuery.validator.addMethod(
              "ckCellPhoneVerifyByLength",
              function (t) {
                return n.Validator.IsCellPhoneByLengthFormatValid(t);
              }
            );
            jQuery.validator.addMethod("ckCellPhoneVerify", function (t) {
              return n.Validator.IsCellPhoneFormatValid(t);
            });
            jQuery.validator.addMethod(
              "ckProtectCodeModelCaptchaCode",
              function () {
                return n.Validator.IsSMSCaptchaLengthValid(
                  t.model.ProtectCodeModel.CaptchaCode
                );
              }
            );
          }),
          (t.prototype.SignCheck = function (t) {
            t === void 0 && (t = !1);
            var i = this.$q.defer();
            if (!this.model.IsLobbyProtect) {
              if (!$("#frmLogin").valid() || this.IsSignInButtonDisabled())
                return i.reject(!1), i.promise;
              if (window.navigator.webdriver)
                return (
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    n.Helpers.ChangeLanguage("帳號或密碼錯誤") + "!"
                  ),
                  i.reject(!1),
                  i.promise
                );
            }
            return t && !$("#protectLoginForm").valid()
              ? (i.reject(!1), i.promise)
              : this.model.IsLobbyProtect && t
              ? (this.signInSvc
                  .SetProtectCode({
                    ProtectCode: this.toolsSvc.Base64Encode(
                      this.model.ProtectCodeModel.PWD
                    ),
                    ProtectCodeCellPhone: this.model.ProtectCodeModel.CellPhone,
                    CaptchaCode: this.model.ProtectCodeModel.CaptchaCode,
                  })
                  .then(function () {
                    n.Helpers.AlertOnlyOKCallback(
                      "",
                      SweetAlertTypeEnum.none,
                      function () {
                        location.reload(!0);
                      },
                      "更新成功"
                    );
                  })
                  .catch(function (t) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      t.Error.Message
                    );
                    i.reject(!1);
                  }),
                i.promise)
              : this.DoSignIn(i);
          }),
          (t.prototype.DoSignIn = function (t) {
            var i = this,
              r;
            return this.model.ElementManager.IsEnabled("signin")
              ? (this.model.ElementManager.DisableElementBy(
                  "signin",
                  "DoSignIn"
                ),
                (r = angular.copy(this.model)),
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
                  i.signInSvc
                    .SignIn(r)
                    .then(function (t) {
                      window.location.href = "https://ku191.net/"
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.IT,
                        t.CookieID,
                        !1
                      );
                      n.Helpers.DeleteLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey
                          .KeepPointsControlCenter
                      );
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey
                          .LatestTimeForWithdrawalNews,
                        "",
                        !0
                      );
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.IsShowDepositNews,
                        "true",
                        !0
                      );
                      n.Helpers.SetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.IsShowWithdrawalNews,
                        "true",
                        !0
                      );
                      n.Helpers.DeleteLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.BackupURLNewsID
                      );
                      var r = n.Helpers.GetLocalStorageItem(
                        n.ConstDefinition.LocalStorageKey.HaveReadDepositNews
                      );
                      r != "" &&
                        ((i.model.DepositNewsModel = JSON.parse(r)),
                        n.Helpers.SetLocalStorageItem(
                          n.ConstDefinition.LocalStorageKey.HaveReadDepositNews,
                          angular.toJson(
                            i.model.DepositNewsModel.filter(function (n) {
                              return n.ShowAgain == !1;
                            })
                          ),
                          !0
                        ));
                      i.model.IdyKey = null;
                      location.reload(!0);
                    })
                    .catch(function (r) {
                      var f = r.toString(),
                        u,
                        e;
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
                        i.model.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        );
                        t.reject(!1);
                        return;
                      }
                      if (r.Error.Code == ApiStatusCodeEnum.PermissionDenied) {
                        location.href = "/Error/Restricted";
                        return;
                      }
                      if (
                        r.Error.Code == ApiStatusCodeEnum.NeedSetProtectCode
                      ) {
                        i.needSetProtectCode = !0;
                        i.model.ProtectCodeModel.CellPhone = r.Error.Message;
                        jQuery.fancybox.close();
                        i.$timeout(function () {
                          return jQuery("#protectLoginOpenButton").click();
                        }, 50);
                        i.model.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        );
                        t.reject(!1);
                        return;
                      }
                      if (
                        r.Error.Message ==
                          n.Helpers.ChangeLanguage(
                            "保護密碼與登錄密碼不可相同"
                          ) ||
                        r.Error.Message ==
                          n.Helpers.ChangeLanguage("保護密碼與會員帳號不可相同")
                      ) {
                        i.model.ProtectCodeModel.PWD = "";
                        i.model.ProtectCodeModel.PWDConfirmation = "";
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          r.Error.Message
                        );
                        i.model.ElementManager.EnableElementBy(
                          "signin",
                          "DoSignIn"
                        );
                        t.reject(!1);
                        return;
                      }
                      (r.Error.Code == ApiStatusCodeEnum.OpenSliderCaptcha ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.OpenSliderCaptchaPhone ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.RefreshSliderCaptcha ||
                        r.Error.Code ==
                          ApiStatusCodeEnum.RefreshSliderCaptchaPhone) &&
                        ((i.model.ShowSliderCaptcha = !0),
                        (i.model.ShowPhoneVerify =
                          r.Error.Code ==
                            ApiStatusCodeEnum.OpenSliderCaptchaPhone ||
                          r.Error.Code ==
                            ApiStatusCodeEnum.RefreshSliderCaptchaPhone),
                        jQuery.fancybox.update());
                      i.needSetProtectCode ||
                        ((i.model.CellPhone = ""),
                        (i.model.AccountPWD = ""),
                        i.model.ShowSliderCaptcha &&
                          (i.InitSliderCaptchaImage(),
                          (i.model.VerifySliderCaptcha = !1),
                          (i.model.AccountID = "")));
                      r.Error.Code != ApiStatusCodeEnum.RefreshSliderCaptcha &&
                        r.Error.Code !=
                          ApiStatusCodeEnum.RefreshSliderCaptchaPhone &&
                        (r.Error.Code ===
                          ApiStatusCodeEnum.SignInFailedOverLimit ||
                        r.Error.Code ===
                          ApiStatusCodeEnum.AccountIsForbiddenToLogin
                          ? ((e = i.ReplaceSignInOverLimitMessage(
                              r.Error.Message
                            )),
                            (i.model.SignInOverLimitErrorMsg = e),
                            $("#loginLock").show())
                          : n.Helpers.Alert(
                              "",
                              SweetAlertTypeEnum.none,
                              !1,
                              r.Error.Message
                            ));
                      i.model.ElementManager.DisableElementBy(
                        "signin",
                        "DoSignIn"
                      );
                      t.reject(!1);
                    });
                }),
                t.promise)
              : (t.reject(!1), t.promise);
          }),
          (t.prototype.HandleCaptchaSuccess = function (n) {
            var t = this;
            this.$timeout(function () {
              t.model.VerifySliderCaptcha = !0;
              t.model.IdyKey = n;
              t.CheckSignInButtonDisabled();
            });
          }),
          (t.prototype.HandleCaptchaFail = function () {
            var n = this;
            this.$timeout(function () {
              n.model.IdyKey = "";
              n.model.VerifySliderCaptcha = !1;
              n.InitSliderCaptchaImage();
            });
          }),
          (t.prototype.SliderRefreshCallback = function () {
            var n = this;
            this.$timeout(function () {
              n.InitSliderCaptchaImage();
              n.model.ElementManager.DisableElementBy("signin", "DoSignIn");
            });
          }),
          (t.prototype.CheckSignInButtonDisabled = function () {
            this.model.AccountID &&
            this.model.AccountPWD &&
            (!this.model.ShowPhoneVerify ||
              (this.model.IsCellPhoneValid &&
                this.model.VerifySliderCaptcha)) &&
            (!this.model.ShowSliderCaptcha || this.model.VerifySliderCaptcha)
              ? this.model.ElementManager.EnableElementBy("signin", "DoSignIn")
              : this.model.ElementManager.DisableElementBy(
                  "signin",
                  "DoSignIn"
                );
          }),
          (t.prototype.IsSignInButtonDisabled = function () {
            return !this.model.ElementManager.IsEnabled("signin");
          }),
          (t.prototype.VerifyCellPhone = function () {
            this.model.IsCellPhoneValid =
              this.model.CellPhone == null || this.model.CellPhone == ""
                ? !1
                : n.Validator.IsCellPhoneFormatValid(this.model.CellPhone);
            this.CheckSignInButtonDisabled();
          }),
          (t.prototype.ClearErrorMessage = function (n) {
            var t = jQuery("#" + n).parent();
            $(t).removeClass("error");
            $(t).find("span.errorHint").remove();
          }),
          (t.prototype.VerifyCaptchaChange = function () {
            var i = this,
              t;
            $("#ProtectCodeCaptchaCode").valid();
            t = n.Validator.IsSMSCaptchaLengthValid(
              this.model.ProtectCodeModel.CaptchaCode
            );
            this.ClearErrorMessage("ProtectCodeCaptchaCode");
            t && this.model.ProtectCodeModel.IsCaptchaSent
              ? (this.model.ElementManager.ShowElement(
                  "verifyCaptchaCodeButton"
                ),
                this.$timeout(function () {
                  i.model.ElementManager.EnableElementBy(
                    "VerifiedEffectiveTime",
                    "VerifyCaptchaChange"
                  );
                }, 400))
              : (this.model.ElementManager.HideElement(
                  "verifyCaptchaCodeButton"
                ),
                this.model.ElementManager.DisableElementBy(
                  "VerifiedEffectiveTime",
                  "VerifyCaptchaChange"
                ));
          }),
          (t.prototype.CheckProtectLoginFormValid = function (t) {
            (this.model.ElementManager.DisableElement("ProtectCodeLoginButton"),
            n.Validator.IsSMSCaptchaLengthValid(
              this.model.ProtectCodeModel.CaptchaCode
            )
              ? this.model.ElementManager.ShowElement("verifyCaptchaCodeButton")
              : this.model.ElementManager.HideElement(
                  "verifyCaptchaCodeButton"
                ),
            t == null || t.target.value !== "") &&
              this.VerifyForm() &&
              this.model.ElementManager.EnableElement("ProtectCodeLoginButton");
          }),
          (t.prototype.VerifyForm = function () {
            var t = this.model.ProtectCodeModel,
              u = t.CaptchaCode,
              f = t.CellPhone,
              e = t.IsCaptchaCodeVerified,
              i = t.PWD,
              r = t.PWDConfirmation;
            return e === !1 ||
              f === "" ||
              u === "" ||
              i === "" ||
              !n.Helpers.IsExist(i) ||
              r === "" ||
              !n.Helpers.IsExist(r)
              ? !1
              : n.Validator.IsPasswordFormatValid(
                  this.model.ProtectCodeModel.PWD
                )
              ? $("#ProtectCode").valid()
                ? $("#CheckPWDConfirmation").valid()
                  ? $("#protectLoginForm").valid()
                    ? !0
                    : !1
                  : !1
                : !1
              : !1;
          }),
          (t.prototype.IsCellPhoneVerifyTimesTodayValid = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.ProtectCodeModel.CellPhone == ""
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  "您輸入的手機號碼未驗證，請聯繫客服，謝謝！"
                ),
                i.resolve(!1),
                i.promise)
              : (this.model.ElementManager.DisableElementBy(
                  "ProtectCodeSendCaptchaButton",
                  "IsCellPhoneVerifyTimesTodayValid"
                ),
                this.signInSvc
                  .IsProtectCodeCellPhoneOverLimit({
                    AccountID: this.model.AccountID,
                    CellPhone: this.model.ProtectCodeModel.CellPhone,
                  })
                  .then(function (n) {
                    t.model.ProtectCodeModel.CheckCellPhoneIsVerifiedOrOverLimitReturnMessage =
                      n.Message;
                    i.resolve(!0);
                  })
                  .catch(function (r) {
                    !n.Helpers.IsNull(r.Error) &&
                      n.Verifier.IsVerifyTimesOverLimit(r.Error.Message) &&
                      (t.model.ProtectCodeModel.IsCallCustomerService = !0);
                    n.Helpers.AlertSwitch(r);
                    i.resolve(!1);
                  })
                  .finally(function () {
                    t.model.ElementManager.EnableElementBy(
                      "ProtectCodeSendCaptchaButton",
                      "IsCellPhoneVerifyTimesTodayValid"
                    );
                    t.model.ProtectCodeModel.SendCaptchaButtonName =
                      t.GetSendCaptchaButtonName();
                  }),
                i.promise);
          }),
          (t.prototype.SendCaptcha = function (t) {
            var i = this;
            this.model.ProtectCodeModel.CaptchaCode = "";
            this.VerifyCaptchaChange();
            this.model.ElementManager.DisableElementBy(
              "ProtectCodeSendCaptchaButton",
              "SendCaptcha"
            );
            this.model.ElementManager.DisableElement("VerifiedEffectiveTime");
            this.signInSvc
              .SendCaptcha({
                VerifyUsage: VerifyUsageEnum.ProtectCodeLogin,
                CellPhone: this.model.ProtectCodeModel.CellPhone,
                AccountID: this.model.AccountID,
              })
              .then(function (t) {
                i.Countdown();
                i.model.ProtectCodeModel.IsCaptchaSent = !0;
                i.model.ElementManager.HideElement(
                  "ProtectCodeSendCaptchaButton"
                );
                i.model.ElementManager.EnableElement("VerifiedEffectiveTime");
                n.Validator.IsSMSCaptchaLengthValid(t.Message) &&
                  ((i.model.ProtectCodeModel.CaptchaCode = t.Message),
                  i.VerifyCaptchaChange());
                i.model.ProtectCodeModel.SendCaptchaCodeMsg =
                  i.model.CurrentVerifyMode === SMSVerifyModeEnum.SMS
                    ? n.Helpers.ChangeLanguage(
                        "驗證碼已發送至您的手機，請查收。"
                      )
                    : n.Helpers.ChangeLanguage(
                        "電話正在撥出，請您留意接聽獲取驗證碼。"
                      );
              })
              .catch(function (t) {
                if (t.Error.Code == "4001") {
                  location.href = "/Error/Restricted";
                  return;
                }
                if (t.Error.Message.indexOf("NotCanUseProvider") > -1) {
                  i.model.ProtectCodeModel.IsCanNotUseSMSProvider = !0;
                  i.model.ProtectCodeModel.SendCaptchaButtonName =
                    i.GetSendCaptchaButtonName();
                  i.model.ElementManager.EnableElementBy(
                    "ProtectCodeSendCaptchaButton",
                    "SendCaptcha"
                  );
                  return;
                }
                !n.Helpers.IsNull(t.Error) &&
                  n.Verifier.IsVerifyTimesOverLimit(t.Error.Message) &&
                  (i.model.ProtectCodeModel.IsCallCustomerService = !0);
                i.model.ProtectCodeModel.IsCaptchaSent = !1;
                n.Helpers.AlertSwitch(t);
              })
              .finally(function () {
                i.model.ProtectCodeModel.SendVerifyCodeCount++;
                i.model.ElementManager.EnableElementBy(
                  "ProtectCodeSendCaptchaButton",
                  "SendCaptcha"
                );
                i.GetVerifyModeEvent();
                t.resolve(!0);
              });
          }),
          (t.prototype.VerifyCaptchaCode = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.ProtectCodeModel.IsCaptchaSent
              ? ((this.model.ProtectCodeModel.IsCaptchaCodeVerified = !1),
                this.signInSvc
                  .VerifyCaptcha({
                    CellPhone: this.model.ProtectCodeModel.CellPhone,
                    CaptchaCode: this.model.ProtectCodeModel.CaptchaCode,
                    VerifyUsage: VerifyUsageEnum.ProtectCodeLogin,
                    AccountID: this.model.AccountID,
                  })
                  .then(function () {
                    t.model.ProtectCodeModel.IsCaptchaCodeVerified = !0;
                    t.model.ElementManager.HideElement(
                      "ProtectCodeSendCaptchaButton"
                    );
                    t.CancelCountDownInterval();
                    t.CheckProtectLoginFormValid();
                    i.resolve(!0);
                  })
                  .catch(function (r) {
                    n.Helpers.AlertSwitch(r);
                    t.model.ElementManager.DisableElement(
                      "ProtectCodeLoginButton"
                    );
                    t.model.ProtectCodeModel.CaptchaCode = "";
                    t.VerifyCaptchaChange();
                    i.reject(!1);
                  })
                  .finally(function () {
                    t.model.ElementManager.HideElement(
                      "verifyCaptchaCodeButton"
                    );
                  }),
                i.promise)
              : (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  n.Helpers.ChangeLanguage("請先獲取驗證碼")
                ),
                i.reject(!1),
                i.promise);
          }),
          (t.prototype.SendCaptchaButtonClick = function () {
            var t = this,
              n = this.$q.defer();
            return (this.ClearErrorMessage("ProtectCodeCaptchaCode"),
            this.model.ProtectCodeModel.IsCanNotUseSMSProvider ||
              this.model.ProtectCodeModel.IsCallCustomerService)
              ? (this.SendCustomerService(), n.promise)
              : !this.model.ElementManager.IsVisible(
                  "ProtectCodeSendCaptchaButton"
                ) ||
                !this.model.ElementManager.IsEnabled(
                  "ProtectCodeSendCaptchaButton"
                )
              ? n.promise
              : (this.CheckIsServiceCallbackCreated().then(function (i) {
                  i
                    ? n.resolve(!0)
                    : t.IsCellPhoneVerifyTimesTodayValid().then(function (i) {
                        i ? t.SendCaptcha(n) : n.resolve(!0);
                      });
                }),
                n.promise);
          }),
          (t.prototype.CheckIsServiceCallbackCreated = function () {
            var t = this,
              i = this.$q.defer();
            return this.model.ProtectCodeModel.CellPhone == ""
              ? (n.Helpers.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  "您輸入的手機號碼未驗證，請聯繫客服，謝謝！"
                ),
                i.resolve(!0),
                i.promise)
              : (this.model.ElementManager.DisableElementBy(
                  "ProtectCodeSendCaptchaButton",
                  "CheckIsServiceCallbackCreated"
                ),
                (this.model.ProtectCodeModel.SendCaptchaButtonName =
                  this.GetSendCaptchaButtonName()),
                this.signInSvc
                  .CheckProtectCodeServiceCallBackReturnCaptchaCode({
                    AccountID: this.model.AccountID,
                    CellPhone: this.model.ProtectCodeModel.CellPhone,
                  })
                  .then(function (r) {
                    r == "NOT=0"
                      ? ((t.model.ProtectCodeModel.IsCallCustomerService = !0),
                        t.model.ProtectCodeModel.CallCustomerServiceCounts++,
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage(
                            "客服人員將致電與您聯繫，請您留意接聽電話!!"
                          )
                        ),
                        i.resolve(!0))
                      : r != "1" && r != "NOT=1"
                      ? ((t.model.ProtectCodeModel.CaptchaCode = r),
                        (t.model.ProtectCodeModel.IsCaptchaCodeVerified = !0),
                        (t.model.ProtectCodeModel.IsServiceCallBackValid = !0),
                        t.model.ElementManager.HideElement(
                          "ProtectCodeSendCaptchaButton"
                        ),
                        t.model.ElementManager.HideElement(
                          "verifyCaptchaCodeButton"
                        ),
                        t.model.ElementManager.HideElement(
                          "ProtectCodeCaptchaCode"
                        ),
                        t.ClearErrorMessage("ProtectCodeCaptchaCode"),
                        t.CheckProtectLoginFormValid(),
                        i.resolve(!0))
                      : r == "NOT=1"
                      ? (t.model.ProtectCodeModel.CallCustomerServiceCounts++,
                        (t.model.ProtectCodeModel.IsCallCustomerService = !0),
                        (t.model.ProtectCodeModel.IsServiceCallBackValid = !1),
                        (t.model.ProtectCodeModel.IsCaptchaSent = !0),
                        t.model.ElementManager.DisableElementBy(
                          "VerifiedEffectiveTime",
                          "CheckIsServiceCallbackCreated"
                        ),
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage(
                            "客服人員將致電與您聯繫，請您留意接聽電話!!"
                          )
                        ),
                        i.resolve(!0))
                      : i.resolve(!1);
                  })
                  .catch(function (t) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      t.Error.Message
                    );
                    i.resolve(!0);
                  })
                  .finally(function () {
                    t.model.ElementManager.EnableElementBy(
                      "ProtectCodeSendCaptchaButton",
                      "CheckIsServiceCallbackCreated"
                    );
                    t.model.ProtectCodeModel.SendCaptchaButtonName =
                      t.GetSendCaptchaButtonName();
                  }),
                i.promise);
          }),
          (t.prototype.SendCustomerService = function () {
            var n = this;
            this.CheckIsServiceCallbackCreated().then(function (t) {
              t || n.CreateMemberServiceCenterCallback();
            });
          }),
          (t.prototype.CreateMemberServiceCenterCallback = function () {
            var t = this,
              i;
            this.model.ElementManager.DisableElementBy(
              "ProtectCodeSendCaptchaButton",
              "CreateMemberServiceCenterCallback"
            );
            i = new n.Models.ProtectCodeCallbackServicePostModel();
            i.AccountID = this.model.AccountID;
            i.Phone = this.model.ProtectCodeModel.CellPhone;
            this.signInSvc
              .CreateMemberServiceCenterCallback(i)
              .then(function (i) {
                switch (i) {
                  case ServiceCenterMemberEnum.UnProcessedData:
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話!!"
                        )
                    );
                    break;
                  case ServiceCenterMemberEnum.Success:
                    t.model.ProtectCodeModel.IsCaptchaSent = !0;
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      "" +
                        n.Helpers.ChangeLanguage(
                          "客服人員將致電與您聯繫，請您留意接聽電話!"
                        )
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
                          "客服人員將致電與您聯繫，請您留意接聽電話!"
                        )
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
                t.model.ProtectCodeModel.CallCustomerServiceCounts++;
                t.model.ElementManager.EnableElementBy(
                  "ProtectCodeSendCaptchaButton",
                  "CreateMemberServiceCenterCallback"
                );
                t.model.ProtectCodeModel.SendCaptchaButtonName =
                  t.GetSendCaptchaButtonName();
              });
          }),
          (t.prototype.GetSendCaptchaButtonName = function () {
            if (
              !this.model.ElementManager.IsEnabled(
                "ProtectCodeSendCaptchaButton"
              )
            )
              return n.Helpers.ChangeLanguage("發送中");
            if (
              this.model.ProtectCodeModel.IsCanNotUseSMSProvider ||
              this.model.ProtectCodeModel.IsCallCustomerService
            )
              return n.Helpers.ChangeLanguage("聯繫客服");
            switch (this.model.CurrentVerifyMode) {
              case SMSVerifyModeEnum.SMS:
                return this.model.ProtectCodeModel.SendVerifyCodeCount > 0
                  ? n.Helpers.ChangeLanguage("重發驗證碼")
                  : n.Helpers.ChangeLanguage("短信");
              case SMSVerifyModeEnum.Voice:
                return n.Helpers.ChangeLanguage("語音");
              default:
                return n.Helpers.ChangeLanguage("讀取中");
            }
          }),
          (t.prototype.GetSendCaptchaButtonClass = function () {
            var t = this.model.ProtectCodeModel.SendCaptchaButtonName;
            return n.Helpers.IsNullOrEmpty(t)
              ? ""
              : t === n.Helpers.ChangeLanguage("獲取驗證碼") ||
                t === n.Helpers.ChangeLanguage("短信")
              ? "verCode_Msg"
              : t === n.Helpers.ChangeLanguage("語音")
              ? "verCode_Voice"
              : t === n.Helpers.ChangeLanguage("重發驗證碼") ||
                t === n.Helpers.ChangeLanguage("聯繫客服")
              ? "verCode_Rep"
              : (t === n.Helpers.ChangeLanguage("發送中"), "verCode_Msg");
          }),
          (t.prototype.GetVoiceLi = function () {
            return !this.model.ElementManager.IsVisible(
              "ProtectCodeSendCaptchaButton"
            ) && !this.model.ProtectCodeModel.IsCaptchaCodeVerified
              ? "listVoice"
              : "";
          }),
          (t.prototype.IsSendCaptchaButtonEnabled = function () {
            return (
              this.model.ProtectCodeModel.CallCustomerServiceCounts < 3 &&
              !this.model.ProtectCodeModel.IsCaptchaCodeVerified &&
              this.model.ElementManager.IsEnabled(
                "ProtectCodeSendCaptchaButton"
              ) &&
              this.model.ProtectCodeModel.SendCaptchaButtonName !=
                n.Helpers.ChangeLanguage("讀取中")
            );
          }),
          (t.prototype.IsVerifyCaptchaCodeButtonEnabled = function () {
            return (
              !this.model.ProtectCodeModel.IsCanNotUseSMSProvider &&
              this.model.ProtectCodeModel.IsCaptchaSent &&
              this.model.ElementManager.IsVisible("verifyCaptchaCodeButton") &&
              $("#ProtectCodeSendCaptchaButton").val() !=
                n.Helpers.ChangeLanguage("發送中")
            );
          }),
          (t.prototype.CancelCountDownInterval = function () {
            this.countDownSecondTick != null &&
              this.$interval.cancel(this.countDownSecondTick);
          }),
          (t.prototype.CancelVerifiedEffectiveTimeInterval = function () {
            this.verifiedEffectiveTimeTick != null &&
              this.$interval.cancel(this.verifiedEffectiveTimeTick);
          }),
          (t.prototype.Countdown = function () {
            var n = this,
              t = this.model.ProtectCodeModel,
              i = t.DefaultCountDownSecond,
              r = t.DefaultVerifiedEffectiveTime;
            this.CancelCountDownInterval();
            this.CancelVerifiedEffectiveTimeInterval();
            this.model.ElementManager.DisableElementBy(
              "ProtectCodeSendCaptchaButton",
              "Countdown"
            );
            this.model.ProtectCodeModel.CountDownSecond = i;
            this.countDownSecondTick = this.$interval(function () {
              n.model.ProtectCodeModel.CountDownSecond--;
              n.model.ElementManager.HideElement(
                "ProtectCodeSendCaptchaButton"
              );
              n.model.ProtectCodeModel.CountDownSecond <= 0 &&
                ((n.model.ProtectCodeModel.CountDownSecond = i),
                n.model.ElementManager.EnableElementBy(
                  "ProtectCodeSendCaptchaButton",
                  "Countdown"
                ),
                n.model.ElementManager.ShowElement(
                  "ProtectCodeSendCaptchaButton"
                ),
                n.model.ProtectCodeModel
                  .CheckCellPhoneIsVerifiedOrOverLimitReturnMessage ==
                  "Success_LimitNumber" &&
                  (n.model.ProtectCodeModel.IsCallCustomerService = !0),
                (n.model.ProtectCodeModel.SendCaptchaButtonName =
                  n.GetSendCaptchaButtonName()),
                n.CancelCountDownInterval());
            }, 1e3);
            this.model.ProtectCodeModel.VerifiedEffectiveTime = r;
            this.verifiedEffectiveTimeTick = this.$interval(function () {
              n.model.ProtectCodeModel.VerifiedEffectiveTime === 1
                ? (n.CancelVerifiedEffectiveTimeInterval(),
                  n.model.ElementManager.DisableElement(
                    "VerifiedEffectiveTime"
                  ),
                  (n.model.ProtectCodeModel.VerifiedEffectiveTime = r))
                : n.model.ProtectCodeModel.VerifiedEffectiveTime--;
            }, 6e4);
          }),
          (t.prototype.IsFriendExist = function () {
            var n = window.sessionStorage.getItem("InviteAccountID") || "";
            return !(n == undefined || n == "");
          }),
          (t.prototype.ShowTextPrompt = function () {
            jQuery(".txt_prompt").show();
            this.$timeout.cancel(this.textPromptTimeoutId);
            this.textPromptTimeoutId = this.$timeout(function () {
              return jQuery(".txt_prompt").hide();
            }, 2e3);
          }),
          (t.prototype.GetVerifyModeEvent = function () {
            var t = this,
              i = new n.Models.VerifyMode();
            i.CellPhone = this.model.ProtectCodeModel.CellPhone;
            i.AccountID = this.model.AccountID;
            this.signInSvc
              .GetVerifyMode(i)
              .then(function (i) {
                t.model.CurrentVerifyMode = n.SiteCultureMethod.Provider()
                  .IsEnableSMSChangeMode
                  ? i
                  : SMSVerifyModeEnum.SMS;
                t.model.ProtectCodeModel.IsCanNotUseSMSProvider = !1;
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
                      window.location.reload(!0);
                    },
                    "請檢查輸入網址是否有誤，網路信號是否正常，請嘗試重新整理頁面或聯繫客服!"
                  );
                  return;
                }
                t.model.CurrentVerifyMode = SMSVerifyModeEnum.SMS;
                t.model.ProtectCodeModel.IsCanNotUseSMSProvider = !0;
                t.model.ProtectCodeModel.SendCaptchaButtonName =
                  t.GetSendCaptchaButtonName();
              })
              .finally(function () {
                t.model.ProtectCodeModel.SendCaptchaButtonName =
                  t.GetSendCaptchaButtonName();
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
          (t.prototype.ForgetPWOpen = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnForgetPWBeforeOpen,
              "0"
            );
          }),
          (t.prototype.ProtectLoginClose = function () {
            jQuery.fancybox.close();
          }),
          (t.prototype.IsShowRegister = function (n) {
            return this.model.ShowPhoneVerify || this.model.ShowSliderCaptcha
              ? !1
              : this.IsFriendExist() || n;
          }),
          (t.prototype.CheckIfRegister = function () {
            this.messageBus.Emit(
              n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
              { elemId: "PWD" }
            );
            var t = this.dataProvider.CreateDeferred();
            return this.IsFriendExist()
              ? (t.resolve(!0), t.promise)
              : (this.permissionSvc
                  .IsMemberRegisterEnabled()
                  .then(function (i) {
                    i === !0
                      ? t.resolve(i)
                      : (n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          "很抱歉，目前會員註冊關閉中",
                          null,
                          function () {
                            return window.location.reload();
                          }
                        ),
                        t.resolve(i));
                  })
                  .catch(function (i) {
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      i.Error.Message
                    );
                    t.reject(i);
                  }),
                t.promise);
          }),
          (t.prototype.SignInFailedOverLimitClose = function (n) {
            this.model.AccountID = "";
            this.model.AccountPWD = "";
            this.ClearErrorMessage("accountId");
            this.ClearErrorMessage("accountPwd");
            $("#loginLock").hide();
            n && jQuery.fancybox.close();
            this.model.SignInOverLimitIsRefreshPage && location.reload(!0);
            $("#accountId").focus();
          }),
          (t.prototype.ReplaceSignInOverLimitMessage = function (t) {
            var i = n.SiteCultureMethod.Provider().LanguageCode.toLowerCase();
            return (
              i == "vi-vn" &&
                (t = t.replace(
                  "Tài khoản của bạn đã bị khóa,",
                  "Tài khoản của bạn đã bị khóa,</BR>"
                )),
              t
            );
          }),
          (t.$name = "SignInCtrl"),
          (t.$inject = [
            "$q",
            "$interval",
            "ToolsSvc",
            "SignInSvc",
            "VerifySvc",
            "messageBus",
            "$timeout",
            "appContext",
            "PermissionSvc",
            "DataProvider",
          ]),
          t
        );
      })();
      t.SignInCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.SignInCtrl.$name,
  OBSApp.Controllers.SignInCtrl
),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return n;
      })();
      n.SubMainMenuModel = t;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t) {
          this.dataProvider = n;
          this.xpagerSvc = t;
        }
        return (
          (n.$name = "SubMainMenuSvc"),
          (n.$inject = ["DataProvider", "XPagerSvc"]),
          n
        );
      })();
      n.SubMainMenuSvc = t;
    })((t = n.Services || (n.Services = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.SubMainMenuSvc.$name,
  OBSApp.Services.SubMainMenuSvc
),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(t, i, r, u, f) {
          var e = this;
          this.depositTipString =
            n.Helpers.ChangeLanguage("存款功能維護中，請稍後再試");
          this.withdrawalTipString =
            n.Helpers.ChangeLanguage("提款功能維護中，請稍後再試");
          this.statusEnum = RegisteredAdditionallyStatusEnum;
          this.appContextSvc = f;
          this.appContextSvc.GetLoggedinAreaInfo();
          this.subMainMenuSvc = t;
          this.appConfig = i;
          this.appContext = r;
          this.messageBus = u;
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName
              .OnRefereshLoginMenuSwitchToSubWindow,
            function (n, t) {
              e.appContext.UserProfile.LoginMenuSwitch = t;
            }
          );
          this.messageBus.On(
            n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
            function (t, i) {
              if (i === n.Models.LoginStatusEnum.Dney) {
                e.SignInOverLimitErrorMsg =
                  n.Helpers.ChangeLanguage("您的帳號已被鎖定，請聯繫客服") +
                  "<br/><div style='color:red'>" +
                  n.Helpers.ChangeLanguage("請勿提供手機驗證碼給他人！") +
                  "</div>";
                $("#loginLockMemberCenter").show();
                return;
              }
            }
          );
        }
        return (
          (t.prototype.RegisterValidation = function () {}),
          (t.prototype.CheckTopMenuPermission = function (n) {
            return this.appContext.UserProfile.LoginMenuSwitch == undefined ||
              this.appContext.UserProfile.LoginMenuSwitch[n] == undefined
              ? !1
              : this.appContext.UserProfile.LoginMenuSwitch[n] === "True";
          }),
          (t.prototype.GetDepositPromptText = function () {
            return this.CheckTopMenuPermission("CanDeposit")
              ? this.appConfig.CompetenceModel.MemberStatus === 3
                ? n.Helpers.ChangeLanguage("您已完善資料，待通過資料審核，") +
                  n.Helpers.ChangeLanguage("即開放存款，請耐心等候")
                : this.CheckTopMenuPermission("CanDepositP")
                ? void 0
                : n.Helpers.ChangeLanguage(
                    "很抱歉，目前存款功能暫不開放，請聯繫客服中心！"
                  )
              : this.appContext.UserProfile.LoginMenuSwitch == undefined ||
                this.appContext.UserProfile.LoginMenuSwitch.CanDeposit ==
                  undefined
              ? this.depositTipString
              : this.appContext.UserProfile.LoginMenuSwitch.DepositTipString;
          }),
          (t.prototype.GetWithdrawalPromptText = function () {
            return this.CheckTopMenuPermission("CanWithdrawal")
              ? this.CheckTopMenuPermission("CanWithdrawalP")
                ? void 0
                : n.Helpers.ChangeLanguage(
                    "很抱歉，目前提款功能暫不開放，請聯繫客服中心！"
                  )
              : this.appContext.UserProfile.LoginMenuSwitch == undefined ||
                this.appContext.UserProfile.LoginMenuSwitch.CanWithdrawal ==
                  undefined
              ? this.withdrawalTipString
              : this.appContext.UserProfile.LoginMenuSwitch.WithdrawalTipString;
          }),
          (t.prototype.IsOpenWithdrawalWithDeposit = function () {
            return n.Verifier.IsNeedRegisterAdditionally(
              this.appContext.UserProfile
            );
          }),
          (t.prototype.RedirectMemberTransfer = function (t) {
            if (this.appContext.UserProfile.IsAlertGiftCashFlow === !0) {
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                "由於您尚有活動禮金未達解凍流水，因此暫時無法使用會員互轉功能，若有任何疑問請洽詢客服人員",
                null,
                function (n) {
                  n;
                },
                "確認",
                "取消",
                !1,
                !1
              );
              return;
            }
            location.href = t;
          }),
          (t.prototype.AlertWithCloseWindow = function (t) {
            n.Helpers.AlertOnlyOKCallback(
              "",
              SweetAlertTypeEnum.none,
              function (n) {
                n &&
                  (window.opener && window.opener.location.reload(),
                  window.close());
              },
              t
            );
          }),
          (t.prototype.AccountLockClose = function () {
            window.opener && window.opener.location.reload();
            window.close();
          }),
          (t.$name = "SubMainMenuCtrl"),
          (t.$inject = [
            "SubMainMenuSvc",
            "appConfig",
            "appContext",
            "messageBus",
            "AppContextSvc",
          ]),
          t
        );
      })();
      t.SubMainMenuCtrl = i;
    })((t = n.Controllers || (n.Controllers = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterController(
  OBSApp.Controllers.SubMainMenuCtrl.$name,
  OBSApp.Controllers.SubMainMenuCtrl
);

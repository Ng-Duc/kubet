var HttpMethodEnum,
  AlertTypeEnum,
  ApiResultTypeEnum,
  LoadingStatusEnum,
  ActionStatusEnum,
  SweetAlertTypeEnum,
  NgTableTypeEnum,
  DatePickerEnum,
  EventAlertEnum,
  NotifyTypeEunm,
  ApiStatusCodeEnum,
  GameStatusEnum,
  GameTypeEnum,
  AmountStatusEnum,
  VerifyUsageEnum,
  ForgetPwdTypeEnum,
  VerifyIdentityStatusEnum,
  OperateTypeEnum,
  PlatformEnum,
  PaywayMessageToEnum,
  RegisteredAdditionallyStatusEnum,
  FieldMaskTypeEnum,
  MaskModeEnum,
  NewsCategoryEnum,
  RegisterMemberAdditionallyTypeEnum,
  AdditionallyWithVerifiedStatusEnum,
  BankInfoDealTypeEnum,
  TransTypeEnum,
  AddRegisterMemberAdditionallyEnum,
  CallbackLanguageIDEnum,
  SMSVerifyModeEnum,
  SMSVerifyTypeEnum,
  BBLiveBonusGTypeEnum,
  BBLiveBonusTypeEnum,
  ServiceCenterMemberEnum,
  DeliveryAddressTypeEnum,
  BonusTypeEnum,
  LoginVerificationEnum,
  FundTransferVerifyEnum,
  MemberFundTransferCheckEnum,
  MemberFriendRewardTypeEnum,
  __extends,
  __assign,
  handlerEventM,
  OBSMobileApp;
(function (n, t) {
  "use strict";
  var i =
    typeof exports == "object" && typeof module != "undefined"
      ? (module.exports = t(require("angular"), require("moment")))
      : typeof define == "function" && define.amd
      ? define(["angular", "moment"], t)
      : t(n.angular, n.moment);
})(this, function (n) {
  n.module("datePickerMobileTemplate", []).run([
    "$templateCache",
    function (n) {
      n.put(
        "templates/datepicker.html",
        '<div ng-switch="view">\r\n  <div ng-switch-when="date">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'month\')" ng-bind="date|mFormat:\'MMMM YYYY\':tz"></th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      <tr>\r\n        <th ng-repeat="day in weekdays" style="overflow: hidden" ng-bind="day|mFormat:(weekdaysMin?\'dd\':\'ddd\'):tz"></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr ng-repeat="week in weeks" ng-init="$index2 = $index">\r\n        <td ng-repeat="day in week">\r\n          <span\r\n            ng-class="classes[$index2][$index]"\r\n            ng-click="selectDate(day)" ng-bind="day|mFormat:\'DD\':tz"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="year">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev(10)">&lsaquo;</th>\r\n        <th colspan="5" class="switch"ng-bind="years[0].year()+\' - \'+years[years.length-1].year()"></th>\r\n        <th ng-click="next(10)">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-class="classes[$index]"\r\n                ng-repeat="year in years"\r\n                ng-click="selectDate(year)" ng-bind="year.year()"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="month">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'year\')" ng-bind="date|mFormat:\'YYYY\':tz"></th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="month in months"\r\n                ng-class="classes[$index]"\r\n                ng-click="selectDate(month)"\r\n                ng-bind="month|mFormat:\'MMM\':tz"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="hours">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev(24)">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'date\')" ng-bind="date|mFormat:\'DD MMMM YYYY\':tz"></th>\r\n        <th ng-click="next(24)">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="hour in hours"\r\n                ng-class="classes[$index]"\r\n                ng-click="selectDate(hour)" ng-bind="hour|mFormat:\'HH:mm\':tz"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="minutes">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'hours\')" ng-bind="date|mFormat:\'DD MMMM YYYY\':tz"></th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="minute in minutes"\r\n                ng-class="classes[$index]"\r\n                ng-click="selectDate(minute)"\r\n                ng-bind="minute|mFormat:\'HH:mm\':tz"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>'
      );
    },
  ]);
}),
  (function (n) {
    n[(n.Get = 0)] = "Get";
    n[(n.Post = 1)] = "Post";
  })(HttpMethodEnum || (HttpMethodEnum = {})),
  (function (n) {
    n[(n.Info = 0)] = "Info";
    n[(n.Error = 1)] = "Error";
  })(AlertTypeEnum || (AlertTypeEnum = {})),
  (function (n) {
    n[(n.Success = 1001)] = "Success";
    n[(n.Fail = 1002)] = "Fail";
  })(ApiResultTypeEnum || (ApiResultTypeEnum = {})),
  (function (n) {
    n[(n.Loading = 0)] = "Loading";
    n[(n.LoadSuccess = 1)] = "LoadSuccess";
    n[(n.LoadFail = 2)] = "LoadFail";
  })(LoadingStatusEnum || (LoadingStatusEnum = {})),
  (function (n) {
    n[(n.ListView = 0)] = "ListView";
    n[(n.AddView = 1)] = "AddView";
    n[(n.EditView = 2)] = "EditView";
  })(ActionStatusEnum || (ActionStatusEnum = {})),
  (function (n) {
    n[(n.warning = 0)] = "warning";
    n[(n.success = 1)] = "success";
    n[(n.info = 2)] = "info";
    n[(n.error = 3)] = "error";
    n[(n.none = 4)] = "none";
  })(SweetAlertTypeEnum || (SweetAlertTypeEnum = {})),
  (function (n) {
    n[(n.Create = 0)] = "Create";
    n[(n.Clear = 1)] = "Clear";
  })(NgTableTypeEnum || (NgTableTypeEnum = {})),
  (function (n) {
    n[(n.Today = 0)] = "Today";
    n[(n.Yesterday = 1)] = "Yesterday";
    n[(n.ThisWeek = 2)] = "ThisWeek";
    n[(n.LastWeek = 3)] = "LastWeek";
    n[(n.ThisMonth = 4)] = "ThisMonth";
    n[(n.LastMonth = 5)] = "LastMonth";
  })(DatePickerEnum || (DatePickerEnum = {})),
  (function (n) {
    n[(n.Create_Success = 0)] = "Create_Success";
    n[(n.Create_Fail = 1)] = "Create_Fail";
    n[(n.Update_Success = 2)] = "Update_Success";
    n[(n.Update_Fail = 3)] = "Update_Fail";
    n[(n.Delete_Success = 4)] = "Delete_Success";
    n[(n.Delete_Fail = 5)] = "Delete_Fail";
    n[(n.Search_NoCondition = 6)] = "Search_NoCondition";
    n[(n.IncorrectArgument = 7)] = "IncorrectArgument";
    n[(n.Send_Success = 8)] = "Send_Success";
    n[(n.Send_Fail = 9)] = "Send_Fail";
    n[(n.Verify_Success = 10)] = "Verify_Success";
    n[(n.Verify_Fail = 11)] = "Verify_Fail";
    n[(n.Cancel_Success = 12)] = "Cancel_Success";
    n[(n.Cancel_Fail = 13)] = "Cancel_Fail";
    n[(n.Trans_Success = 14)] = "Trans_Success";
  })(EventAlertEnum || (EventAlertEnum = {})),
  (function (n) {
    n[(n.success = 0)] = "success";
    n[(n.info = 1)] = "info";
    n[(n.warning = 2)] = "warning";
    n[(n.danger = 3)] = "danger";
  })(NotifyTypeEunm || (NotifyTypeEunm = {})),
  (function (n) {
    n[(n.Success = 1001)] = "Success";
    n[(n.Fail = 1002)] = "Fail";
    n[(n.NotResultData = 1003)] = "NotResultData";
    n[(n.SwitchNotEnable = 1004)] = "SwitchNotEnable";
    n[(n.IncorrectArgument = 2001)] = "IncorrectArgument";
    n[(n.InvalidOperation = 2100)] = "InvalidOperation";
    n[(n.InvalidOperationThenRedirectHome = 2101)] =
      "InvalidOperationThenRedirectHome";
    n[(n.SecurityRiskOperation = 2102)] = "SecurityRiskOperation";
    n[(n.Unauthorized = 4e3)] = "Unauthorized";
    n[(n.PermissionDenied = 4001)] = "PermissionDenied";
    n[(n.AccountIsForbiddenToLogin = 4005)] = "AccountIsForbiddenToLogin";
    n[(n.AntiForgeryTokenIncorrect = 4010)] = "AntiForgeryTokenIncorrect";
    n[(n.OpenSliderCaptcha = 4016)] = "OpenSliderCaptcha";
    n[(n.IPBlock = 4017)] = "IPBlock";
    n[(n.SignInFailedOverLimit = 4018)] = "SignInFailedOverLimit";
    n[(n.InvalidPwdCellPhone = 4019)] = "InvalidPwdCellPhone";
    n[(n.NeedSetProtectCode = 4021)] = "NeedSetProtectCode";
    n[(n.NotSpecifyScope = 4101)] = "NotSpecifyScope";
    n[(n.ScopeUnauthorized = 4102)] = "ScopeUnauthorized";
    n[(n.NotFoundPage = 4201)] = "NotFoundPage";
    n[(n.RequestTimeout = 5001)] = "RequestTimeout";
    n[(n.RequestError = 5002)] = "RequestError";
    n[(n.ResponseForamtError = 5003)] = "ResponseForamtError";
    n[(n.OpenSliderCaptchaPhone = 5005)] = "OpenSliderCaptchaPhone";
    n[(n.RefreshSliderCaptcha = 5006)] = "RefreshSliderCaptcha";
    n[(n.RefreshSliderCaptchaPhone = 5007)] = "RefreshSliderCaptchaPhone";
    n[(n.TransferPointCommonError = 5008)] = "TransferPointCommonError";
    n[(n.ServerError = 5999)] = "ServerError";
    n[(n.PlatformMutualTransferReachedMoneyLimit = 9004)] =
      "PlatformMutualTransferReachedMoneyLimit";
    n[(n.PlatformMutualTransferReachedNumberLimit = 9007)] =
      "PlatformMutualTransferReachedNumberLimit";
  })(ApiStatusCodeEnum || (ApiStatusCodeEnum = {})),
  (function (n) {
    n[(n.isAvailable = 0)] = "isAvailable";
    n[(n.isLoading = 1)] = "isLoading";
    n[(n.isMaintain = 2)] = "isMaintain";
    n[(n.isBusy = 3)] = "isBusy";
  })(GameStatusEnum || (GameStatusEnum = {})),
  (function (n) {
    n[(n.BBLiveGame = 0)] = "BBLiveGame";
    n[(n.BBBall = 1)] = "BBBall";
    n[(n.AGQ = 2)] = "AGQ";
    n[(n.AGIN = 3)] = "AGIN";
    n[(n.BBIN = 4)] = "BBIN";
    n[(n.HG = 5)] = "HG";
    n[(n.OG = 6)] = "OG";
    n[(n.DDD = 7)] = "DDD";
  })(GameTypeEnum || (GameTypeEnum = {})),
  (function (n) {
    n[(n.isAvailable = 0)] = "isAvailable";
    n[(n.isLoading = 1)] = "isLoading";
    n[(n.isMaintain = 2)] = "isMaintain";
    n[(n.isBusy = 3)] = "isBusy";
  })(AmountStatusEnum || (AmountStatusEnum = {})),
  (function (n) {
    n[(n.None = 0)] = "None";
    n[(n.Identity = 1)] = "Identity";
    n[(n.ForgetPwd = 2)] = "ForgetPwd";
    n[(n.ChangePhone = 3)] = "ChangePhone";
    n[(n.ChangeEMail = 4)] = "ChangeEMail";
    n[(n.RegisterPhone = 5)] = "RegisterPhone";
    n[(n.RegisterEMail = 6)] = "RegisterEMail";
    n[(n.ForgetWithdrawalPwd = 7)] = "ForgetWithdrawalPwd";
    n[(n.MemberTransferApplyOpen = 8)] = "MemberTransferApplyOpen";
    n[(n.BankAccountVerify = 9)] = "BankAccountVerify";
    n[(n.BankAccountAttributionVerify = 10)] = "BankAccountAttributionVerify";
    n[(n.VerifyPhone = 11)] = "VerifyPhone";
    n[(n.BindAliPayAccount = 12)] = "BindAliPayAccount";
    n[(n.PhoneLocationVerify = 13)] = "PhoneLocationVerify";
    n[(n.BankAccountIdentityVerify = 14)] = "BankAccountIdentityVerify";
    n[(n.AddBankAccountVerify = 15)] = "AddBankAccountVerify";
    n[(n.ForgetPWDAndWithdrowalPWD = 16)] = "ForgetPWDAndWithdrowalPWD";
    n[(n.ProtectCodeLogin = 17)] = "ProtectCodeLogin";
    n[(n.CryptoCurrencyWallet = 18)] = "CryptoCurrencyWallet";
    n[(n.MemberTransfer = 19)] = "MemberTransfer";
    n[(n.AuditMemberSMS = 20)] = "AuditMemberSMS";
    n[(n.RCoinWallet = 21)] = "RCoinWallet";
  })(VerifyUsageEnum || (VerifyUsageEnum = {})),
  (function (n) {
    n[(n.AccountPwd = 1)] = "AccountPwd";
    n[(n.WithdrawalPwd = 2)] = "WithdrawalPwd";
    n[(n.Both = 3)] = "Both";
  })(ForgetPwdTypeEnum || (ForgetPwdTypeEnum = {})),
  (function (n) {
    n[(n.IsValid = 0)] = "IsValid";
    n[(n.IsInvalid = 1)] = "IsInvalid";
    n[(n.Error = 2)] = "Error";
    n[(n.OverVerifyLimit = 3)] = "OverVerifyLimit";
    n[(n.ErrorWithLog = 4)] = "ErrorWithLog";
  })(VerifyIdentityStatusEnum || (VerifyIdentityStatusEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.Create = 1)] = "Create";
    n[(n.Read = 2)] = "Read";
    n[(n.Update = 3)] = "Update";
    n[(n.Delete = 4)] = "Delete";
    n[(n.Revert = 5)] = "Revert";
  })(OperateTypeEnum || (OperateTypeEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.Permission = 1)] = "Permission";
    n[(n.Payment = 2)] = "Payment";
    n[(n.Platform = 3)] = "Platform";
  })(PlatformEnum || (PlatformEnum = {})),
  (function (n) {
    n[(n.BAD = 1)] = "BAD";
    n[(n.WCD = 2)] = "WCD";
    n[(n.APD = 3)] = "APD";
    n[(n.BAW = 4)] = "BAW";
  })(PaywayMessageToEnum || (PaywayMessageToEnum = {})),
  (function (n) {
    n[(n.Finish = 0)] = "Finish";
    n[(n.Unspecified = 1)] = "Unspecified";
    n[(n.NeedWriteCellphone = 2)] = "NeedWriteCellphone";
    n[(n.NeedWriteBankCard = 3)] = "NeedWriteBankCard";
    n[(n.NeedWriteIdentify = 4)] = "NeedWriteIdentify";
    n[(n.NeedWriteAccountNameAndPassword = 5)] =
      "NeedWriteAccountNameAndPassword";
    n[(n.NeedWriteAttachIdentity = 6)] = "NeedWriteAttachIdentity";
  })(
    RegisteredAdditionallyStatusEnum || (RegisteredAdditionallyStatusEnum = {})
  ),
  (function (n) {
    n[(n.IDNumber = 0)] = "IDNumber";
    n[(n.CellPhone = 1)] = "CellPhone";
    n[(n.EMail = 2)] = "EMail";
    n[(n.PayAccount = 3)] = "PayAccount";
    n[(n.AliPayAccount = 4)] = "AliPayAccount";
    n[(n.AccountName = 5)] = "AccountName";
    n[(n.Address = 6)] = "Address";
  })(FieldMaskTypeEnum || (FieldMaskTypeEnum = {})),
  (function (n) {
    n[(n.ExceptFront = 0)] = "ExceptFront";
    n[(n.ExceptBack = 1)] = "ExceptBack";
    n[(n.KeepFront = 2)] = "KeepFront";
    n[(n.KeepBack = 3)] = "KeepBack";
  })(MaskModeEnum || (MaskModeEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.Newest = 1)] = "Newest";
    n[(n.Activity = 2)] = "Activity";
    n[(n.System = 3)] = "System";
    n[(n.CustomerService = 4)] = "CustomerService";
    n[(n.Award = 5)] = "Award";
    n[(n.Marquee = 6)] = "Marquee";
    n[(n.Importance = 7)] = "Importance";
    n[(n.Payment = 8)] = "Payment";
    n[(n.Special = 9)] = "Special";
    n[(n.BankMaintain = 10)] = "BankMaintain";
  })(NewsCategoryEnum || (NewsCategoryEnum = {})),
  (function (n) {
    n[(n.None = 0)] = "None";
    n[(n.RegisterMemberAdditionally = 1)] = "RegisterMemberAdditionally";
    n[(n.RegisterMemberAdditionallByBankInfo = 2)] =
      "RegisterMemberAdditionallByBankInfo";
    n[(n.ForceAdditionallByBankInfo = 3)] = "ForceAdditionallByBankInfo";
    n[(n.ForceAdditionallIdentity = 4)] = "ForceAdditionallIdentity";
  })(
    RegisterMemberAdditionallyTypeEnum ||
      (RegisterMemberAdditionallyTypeEnum = {})
  ),
  (function (n) {
    n[(n.Isvalid = 0)] = "Isvalid";
    n[(n.IsInvalid = 1)] = "IsInvalid";
    n[(n.OverVerifyLimit = 2)] = "OverVerifyLimit";
    n[(n.ErrorWithLog = 3)] = "ErrorWithLog";
    n[(n.LastChanceCount = 4)] = "LastChanceCount";
    n[(n.IdentityVerifyOverMax = 5)] = "IdentityVerifyOverMax";
    n[(n.Success = 6)] = "Success";
    n[(n.Fail = 7)] = "Fail";
    n[(n.IsNeedToIdentityVerify = 8)] = "IsNeedToIdentityVerify";
    n[(n.IDNumberRegularIncorrect = 9)] = "IDNumberRegularIncorrect";
    n[(n.BankAccountExist = 10)] = "BankAccountExist";
    n[(n.AdditionallyInfoChanged = 11)] = "AdditionallyInfoChanged";
    n[(n.BankAccountVerifyOverLimit = 12)] = "BankAccountVerifyOverLimit";
    n[(n.IDNumberExist = 13)] = "IDNumberExist";
    n[(n.PleaseContactCustomerService = 14)] = "PleaseContactCustomerService";
    n[(n.WithdrawalPwdSameAsPwd = 15)] = "WithdrawalPwdSameAsPwd";
    n[(n.IncorrectProvince = 16)] = "IncorrectProvince";
    n[(n.IsAccountNameExists = 17)] = "IsAccountNameExists";
    n[(n.IsMultiLogin = 18)] = "IsMultiLogin";
    n[(n.AdditionalExist = 19)] = "AdditionalExist";
    n[(n.WithdrawalPWDNoSetup = 20)] = "WithdrawalPWDNoSetup";
    n[(n.RequiredParamOfBankInfo = 21)] = "RequiredParamOfBankInfo";
    n[(n.DBMemberInforNotFound = 22)] = "DBMemberInforNotFound";
    n[(n.IncorrectArgument = 23)] = "IncorrectArgument";
    n[(n.InvalidIdentity = 24)] = "InvalidIdentity";
  })(
    AdditionallyWithVerifiedStatusEnum ||
      (AdditionallyWithVerifiedStatusEnum = {})
  ),
  (function (n) {
    n[(n.UnHandled = 0)] = "UnHandled";
    n[(n.Handling = 1)] = "Handling";
    n[(n.UserCancel = 2)] = "UserCancel";
    n[(n.Success = 3)] = "Success";
    n[(n.BackendCancel = 4)] = "BackendCancel";
    n[(n.Reviewing = 5)] = "Reviewing";
    n[(n.Matching = 6)] = "Matching";
    n[(n.Matched = 7)] = "Matched";
    n[(n.NotApproved = 99)] = "NotApproved";
  })(BankInfoDealTypeEnum || (BankInfoDealTypeEnum = {})),
  (function (n) {
    n[(n.Deposit = 1)] = "Deposit";
    n[(n.Withdrawal = 2)] = "Withdrawal";
    n[(n.TransOut = 3)] = "TransOut";
    n[(n.TransIn = 4)] = "TransIn";
    n[(n.Refund = 7)] = "Refund";
    n[(n.LoverTransOut = 8)] = "LoverTransOut";
    n[(n.LoverTransIn = 9)] = "LoverTransIn";
  })(TransTypeEnum || (TransTypeEnum = {})),
  (function (n) {
    n[(n.Success = 0)] = "Success";
    n[(n.Fail = 1)] = "Fail";
    n[(n.AdditionalExist = 2)] = "AdditionalExist";
    n[(n.NotFoundAccount = 3)] = "NotFoundAccount";
    n[(n.WithdrawalPwdIsTheSamePwd = 4)] = "WithdrawalPwdIsTheSamePwd";
    n[(n.IsForcedToVerifyIdentity = 5)] = "IsForcedToVerifyIdentity";
    n[(n.WithdrawalPWDEmpty = 6)] = "WithdrawalPWDEmpty";
    n[(n.WithdrawalPWDError = 7)] = "WithdrawalPWDError";
  })(
    AddRegisterMemberAdditionallyEnum ||
      (AddRegisterMemberAdditionallyEnum = {})
  ),
  (function (n) {
    n[(n.Unknow = 0)] = "Unknow";
    n[(n.Chinese = 1)] = "Chinese";
    n[(n.Taiwanese = 2)] = "Taiwanese";
    n[(n.English = 3)] = "English";
    n[(n.Vietnamese = 4)] = "Vietnamese";
    n[(n.Thai = 5)] = "Thai";
    n[(n.Indonesian = 6)] = "Indonesian";
  })(CallbackLanguageIDEnum || (CallbackLanguageIDEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.SMS = 1)] = "SMS";
    n[(n.Voice = 2)] = "Voice";
  })(SMSVerifyModeEnum || (SMSVerifyModeEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.MemberRegister = 1)] = "MemberRegister";
    n[(n.ForgetPassword = 2)] = "ForgetPassword";
    n[(n.OtherVerify = 99)] = "OtherVerify";
  })(SMSVerifyTypeEnum || (SMSVerifyTypeEnum = {})),
  (function (n) {
    n[(n.Baccarat = 11)] = "Baccarat";
    n[(n.SeDie = 71)] = "SeDie";
  })(BBLiveBonusGTypeEnum || (BBLiveBonusGTypeEnum = {})),
  (function (n) {
    n[(n.All = -1)] = "All";
    n[(n.SuperBonus = 1)] = "SuperBonus";
    n[(n.LittleBonus = 2)] = "LittleBonus";
  })(BBLiveBonusTypeEnum || (BBLiveBonusTypeEnum = {})),
  (function (n) {
    n[(n.Fail = 0)] = "Fail";
    n[(n.Success = 1)] = "Success";
    n[(n.DataNotExist = 101)] = "DataNotExist";
    n[(n.CallServiceNotEnabled = 102)] = "CallServiceNotEnabled";
    n[(n.UnProcessedData = 103)] = "UnProcessedData";
    n[(n.SystemBusyWithPhoneOrAccountLimit = 104)] =
      "SystemBusyWithPhoneOrAccountLimit";
    n[(n.SystemBusyWithIPAddressLimit = 105)] = "SystemBusyWithIPAddressLimit";
    n[(n.SystemBusyWithCookieLimit = 106)] = "SystemBusyWithCookieLimit";
    n[(n.UnProcessedDataByIPAddress = 107)] = "UnProcessedDataByIPAddress";
  })(ServiceCenterMemberEnum || (ServiceCenterMemberEnum = {})),
  (function (n) {
    n[(n.Unspecified = 0)] = "Unspecified";
    n[(n.Address = 1)] = "Address";
    n[(n.Locality = 2)] = "Locality";
    n[(n.City = 3)] = "City";
    n[(n.ProvincesID = 4)] = "ProvincesID";
    n[(n.PostCode = 5)] = "PostCode";
    n[(n.DistrictID = 6)] = "DistrictID";
  })(DeliveryAddressTypeEnum || (DeliveryAddressTypeEnum = {})),
  (function (n) {
    n[(n.FirstDeposit = 1)] = "FirstDeposit";
    n[(n.SecondDeposit = 2)] = "SecondDeposit";
    n[(n.CommonDeposit = 3)] = "CommonDeposit";
    n[(n.OfferGroup = 4)] = "OfferGroup";
    n[(n.APPBonus = 5)] = "APPBonus";
    n[(n.RewardBonus = 6)] = "RewardBonus";
  })(BonusTypeEnum || (BonusTypeEnum = {})),
  (function (n) {
    n[(n.None = 0)] = "None";
    n[(n.SliderCaptcha = 1)] = "SliderCaptcha";
    n[(n.SliderCaptchaPhone = 2)] = "SliderCaptchaPhone";
  })(LoginVerificationEnum || (LoginVerificationEnum = {})),
  (function (n) {
    n[(n.Initital = -1)] = "Initital";
    n[(n.BothVerify = 0)] = "BothVerify";
    n[(n.MobileVerify = 1)] = "MobileVerify";
    n[(n.ProtectCodeVerify = 2)] = "ProtectCodeVerify";
    n[(n.Close = 3)] = "Close";
  })(FundTransferVerifyEnum || (FundTransferVerifyEnum = {})),
  (function (n) {
    n[(n.Success = 0)] = "Success";
    n[(n.AccountNotExist = 1)] = "AccountNotExist";
    n[(n.NickNameError = 2)] = "NickNameError";
  })(MemberFundTransferCheckEnum || (MemberFundTransferCheckEnum = {})),
  (function (n) {
    n[(n.Close = 0)] = "Close";
    n[(n.Range = 1)] = "Range";
    n[(n.Levle = 2)] = "Levle";
  })(MemberFriendRewardTypeEnum || (MemberFriendRewardTypeEnum = {})),
  (function (n) {
    var i = (function () {
        function i() {}
        return (
          (i.CopyText = function (n) {
            var f = angular.element(document.body),
              t = angular.element("<textarea/>"),
              u,
              i,
              r;
            t.css({ position: "absolute", opacity: "0", top: "0" });
            t.val(n);
            f.append(t);
            /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
              ? ((u = window.getSelection()),
                u.removeAllRanges(),
                (i = t[0]),
                (i.contentEditable = "true"),
                (i.readOnly = !0),
                i.setSelectionRange(0, n.length))
              : t.select();
            try {
              if (((r = document.execCommand("copy")), !r)) throw r;
              return t.blur(), t.remove(), !0;
            } catch (e) {
              return !1;
            }
          }),
          (i.DownloadImage = function (n, t) {
            t === void 0 && (t = null);
            var i = document.createElement("a");
            i.href = n;
            t != null && t != "" && (i.download = t);
            document.body.appendChild(i);
            i.click();
            document.body.removeChild(i);
          }),
          (i.GetLatiniseString = function (n) {
            return n.replace(/[^A-Za-z0-9\[\]\s]/g, function (n) {
              return i.LatinWordMap[n] || n;
            });
          }),
          (i.EnumToString = function (n, t) {
            var i = t;
            return n[i];
          }),
          (i.StringFormat = function (n) {
            for (var i, t, f, r = [], u = 1; u < arguments.length; u++)
              r[u - 1] = arguments[u];
            if (((i = n), i == null)) return "";
            for (t = 0; t < r.length; t++)
              (f = this.GetStringFormatPlaceHolderRegEx(t)),
                (i = i.replace(f, String(r[t]) == null ? "" : String(r[t])));
            return this.CleanStringFormatResult(i);
          }),
          (i.StringContainsOneOfKeywords = function (n) {
            for (var r = [], t = 1; t < arguments.length; t++)
              r[t - 1] = arguments[t];
            return r.some(function (t) {
              return _.includes(
                n.toLowerCase(),
                i.ChangeLanguage(t).toLowerCase()
              );
            });
          }),
          (i.StringFormatByArray = function (n, t) {
            var r = n,
              i,
              u;
            if (r == null) return "";
            for (i = 0; i < t.length; i++)
              (u = this.GetStringFormatPlaceHolderRegEx(i)),
                (r = r.replace(u, String(t[i]) == null ? "" : String(t[i])));
            return this.CleanStringFormatResult(r);
          }),
          (i.GetStringFormatPlaceHolderRegEx = function (n) {
            return new RegExp("({)?\\{" + n + "\\}(?!})", "gm");
          }),
          (i.CleanStringFormatResult = function (n) {
            return n == null
              ? ""
              : n.replace(this.GetStringFormatPlaceHolderRegEx("\\d+"), "null");
          }),
          (i.ChangeLanguage = function (n) {
            var t = "";
            try {
              return (
                (t = $("alert-rule[rule-name='" + n + "']").attr(
                  "rule-message"
                )),
                t == undefined ? n : t
              );
            } catch (i) {
              return n;
            }
          }),
          (i.ChangeLanguageByArray = function (n, t) {
            var r = "";
            try {
              return (
                (r =
                  $("alert-rule[rule-name=" + n + "]").attr("rule-message") ||
                  n),
                (r = i.StringFormatByArray(r, t)),
                r == undefined ? n : r
              );
            } catch (u) {
              return n;
            }
          }),
          (i.AlertEditCallback = function (n, t, i) {
            t === void 0 && (t = null);
            this.Alert("確認修改", SweetAlertTypeEnum.warning, !0, n, t, i);
          }),
          (i.AlertDeleteCallback = function (n) {
            this.Alert(
              "確認刪除",
              SweetAlertTypeEnum.warning,
              !0,
              "刪除後將無法復原是否還要進行",
              null,
              n
            );
          }),
          (i.AlertEvent = function (n, t, i) {
            i === void 0 && (i = null);
            switch (n) {
              case EventAlertEnum.Create_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "建立成功");
                break;
              case EventAlertEnum.Create_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "建立失敗");
                break;
              case EventAlertEnum.Update_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "更新成功");
                break;
              case EventAlertEnum.Update_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "更新失敗");
                break;
              case EventAlertEnum.Delete_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "刪除成功");
                break;
              case EventAlertEnum.Delete_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "刪除失敗");
                break;
              case EventAlertEnum.IncorrectArgument:
                this.Alert("", SweetAlertTypeEnum.none, !1, "參數錯誤");
                break;
              case EventAlertEnum.Search_NoCondition:
                i != undefined && i.length > 0
                  ? this.Alert("", SweetAlertTypeEnum.none, !1, t, i)
                  : this.Alert("", SweetAlertTypeEnum.none, !1, t);
                break;
              case EventAlertEnum.Send_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "發送成功");
                break;
              case EventAlertEnum.Send_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "發送失敗");
                break;
              case EventAlertEnum.Verify_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "驗證成功");
                break;
              case EventAlertEnum.Verify_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "驗證失敗");
                break;
              case EventAlertEnum.Cancel_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "取消成功");
                break;
              case EventAlertEnum.Cancel_Fail:
                this.Alert("", SweetAlertTypeEnum.none, !1, "取消失敗");
                break;
              case EventAlertEnum.Trans_Success:
                this.Alert("", SweetAlertTypeEnum.none, !1, "交易成功");
            }
          }),
          (i.AlertConfirmCopyCallback = function (n, t, i, r) {
            this.Alert(n, t, !0, "", null, r, i);
          }),
          (i.AlertConfirmCallback = function (n, t, i, r) {
            this.Alert(n, t, !0, r, null, i);
          }),
          (i.AlertConfirmCallbackText = function (n, t, i, r, u) {
            this.Alert("", r, !0, n, null, u, t, i, "400", !1, !1);
          }),
          (i.AlertOnlyOKCallback = function (n, t, i, r) {
            this.Alert(n, t, !1, r, null, i, "確認", "取消", "400", !1, !1);
          }),
          (i.AlertServiceCenterCallback = function (n, t, i, r) {
            this.Alert(n, t, !0, r, null, i, "聯繫客服", "取消", "400", !1, !1);
          }),
          (i.AlertWithButtonClass = function (
            n,
            t,
            i,
            r,
            u,
            f,
            e,
            o,
            s,
            h,
            c,
            l,
            a
          ) {
            i === void 0 && (i = !1);
            r === void 0 && (r = "");
            u === void 0 && (u = null);
            s === void 0 && (s = "確認");
            h === void 0 && (h = "取消");
            c === void 0 && (c = "400");
            l === void 0 && (l = !1);
            a === void 0 && (a = !0);
            var v = this.AppendFancyboxConfirmButtonClassToButtonText(
                s,
                f,
                Number(c)
              ),
              y = this.AppendFancyboxCancelButtonClassToButtonText(
                h,
                e,
                Number(c)
              );
            this.Alert(n, t, i, r, u, o, v, y, c, l, a);
          }),
          (i.GetDeviceFontSizeNumber = function () {
            var i = $("body").css("font-size"),
              r = Number(i.slice(0, i.indexOf("px"))),
              n = $(window).width(),
              t = 1;
            return (
              n >= 400 && (t = 1.2), n < 400 && n >= 350 && (t = 1.1), r / t
            );
          }),
          (i.GetSwal2ButtonFontSizeRatio = function () {
            var n = $(window).width();
            return n >= 420 ? 2 : n < 420 && n >= 350 ? 1.5 : n < 350 ? 1 : 2;
          }),
          (i.GetWidthWithinDevice = function (n) {
            var t = $(window).width();
            return n > t ? t : n;
          }),
          (i.GetAlertWindowButtonSpanWidth = function (n) {
            var r = 20,
              t = 40,
              o = n + r,
              u = n - t,
              s = this.GetSwal2ButtonFontSizeRatio() * 2,
              f = 1.0625,
              i = this.GetWidthWithinDevice(n),
              e = i > o ? i : i - r,
              h = e - t > u ? u : e - t,
              c = this.GetDeviceFontSizeNumber() * s * f,
              l = this.GetDeviceFontSizeNumber() * 0.3125 * 4 * f,
              a = (h - l) * 0.48;
            return a - c;
          }),
          (i.AppendFancyboxConfirmButtonClassToButtonText = function (n, t, i) {
            t === void 0 && (t = "fancybox-confirm-button");
            var r =
              "style='min-width:" +
              this.GetAlertWindowButtonSpanWidth(i) +
              "px'";
            return "<span " + r + "class='" + t + "'>" + n + "</span>";
          }),
          (i.AppendFancyboxCancelButtonClassToButtonText = function (n, t, i) {
            t === void 0 && (t = "fancybox-cancel-button");
            var r =
              "style='min-width:" +
              this.GetAlertWindowButtonSpanWidth(i) +
              "px'";
            return "<span " + r + "class='" + t + "'>" + n + "</span>";
          }),
          (i.Alert = function (n, t, i, r, u, f, e, o, s, h, c) {
            var y, l;
            i === void 0 && (i = !1);
            r === void 0 && (r = "");
            u === void 0 && (u = null);
            s === void 0 && (s = "400");
            h === void 0 && (h = !1);
            c === void 0 && (c = !0);
            var a = this.ChangeLanguage(e || "確認"),
              v = this.ChangeLanguage(o || "取消"),
              p = a.indexOf("span") > 0 && v.indexOf("span") > 0,
              w = a.length === v.length;
            if (p === !1 && w === !1)
              return this.AlertWithButtonClass(
                n,
                t,
                i,
                r,
                u,
                undefined,
                undefined,
                f,
                a,
                v,
                s,
                h,
                c
              );
            y = !0;
            i || (y = !1);
            l = {
              title: this.ChangeLanguage("信息"),
              html: this.ChangeLanguage(r),
              type: null,
              confirmButtonText: a,
              cancelButtonText: v,
              showCancelButton: i,
              showCloseButton: h,
              allowOutsideClick: c,
              animation: !1,
              reverseButtons: y,
              width: this.GetWidthWithinDevice(Number(s)),
            };
            u && u.length > 0
              ? (l.html = this.ChangeLanguageByArray(r, u))
              : (l.text = this.ChangeLanguage(r));
            n && n.length > 0 && (l.title = this.ChangeLanguage(n));
            swal(l).then(function (n) {
              var t = !1;
              t = n.value ? !0 : !1;
              f && f(t);
            });
          }),
          (i.Notify = function (n, t, i) {
            i === void 0 && (i = []);
            $("#divNotify").stop();
            $("#divNotify").stop(!1, !0);
            switch (t) {
              case NotifyTypeEunm.success:
                $("#divNotify").attr("class", "alert alert-success");
                break;
              case NotifyTypeEunm.info:
                $("#divNotify").attr("class", "alert alert-info");
                break;
              case NotifyTypeEunm.danger:
                $("#divNotify").attr("class", "alert alert-danger");
                break;
              case NotifyTypeEunm.warning:
                $("#divNotify").attr("class", "alert alert-warning");
            }
            var r = this.ChangeLanguageByArray(n, i);
            $("#divNotify").text(r).fadeIn(400).delay(2e3).fadeOut(400);
          }),
          (i.NotifyBox = function (n, t, i, r) {
            var e, o;
            i === void 0 && (i = []);
            r === void 0 && (r = 2e3);
            $("#divNotifyPopup").stop();
            $("#divNotifyPopup").stop(!1, !0);
            var s = this.ChangeLanguageByArray(n, i),
              u = jQuery("#hfLanguageCode").val(),
              f = $("#hfCopySuccessImg").val();
            (u.toLowerCase() == "vi-vn" || u.toLowerCase() == "th-th") &&
              (f = f.replace(
                /\/Content\/Images\//gi,
                "/Content/Images/" + u + "/"
              ));
            document.getElementById("divNotifyPopup") ||
              ((e =
                '<div class="mask_all" id="divNotifyPopup" style="display: block;">\n                                        <div class="popup_container">\n                                            <div class="popup_bg">\n                                                <div class="popup popupShort">\n                                                    <div class="popup_In">\n                                                        <!--內容-->\n                                                        <div class="popupS_T"><img src="' +
                f +
                '" /></div>\n                                                        <div class="popupS_In" id="divNotifyMessage"></div>\n                                                        <!--內容 end-->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>'),
              $(document.body).append(e));
            $("#divNotifyMessage").text(s);
            $("#divNotifyPopup").fadeIn(400);
            o = setTimeout(function () {
              $("#divNotifyPopup").fadeOut(400);
              t && t();
            }, r);
            $("#divNotifyPopup").on("click", function () {
              clearTimeout(o);
              $("#divNotifyPopup").fadeOut(400);
              t && t();
            });
          }),
          (i.AlertSwitch = function (t, r, u) {
            if ((u === void 0 && (u = !0), t != null)) {
              if (t.Error == null) {
                i.Alert("", SweetAlertTypeEnum.none, !1, "系統異常請稍後再試");
                i.SetLocalStorageItem(
                  n.ConstDefinition.LocalStorageKey
                    .OnAlertSwitchUnDefineException,
                  angular.toJson(t),
                  !0,
                  !0
                );
                console.error(t);
                return;
              }
              switch (t.Error.Code) {
                case ApiStatusCodeEnum.NotResultData:
                  i.Notify(t.Error.Message, NotifyTypeEunm.danger);
                  break;
                case ApiStatusCodeEnum.Unauthorized:
                  window.location.href = "/Mobile/Home/Login";
                  break;
                case ApiStatusCodeEnum.AccountIsForbiddenToLogin:
                  i.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function () {
                      window.location.href = "/Mobile/Home/Login";
                    }
                  );
                  break;
                case ApiStatusCodeEnum.InvalidOperationThenRedirectHome:
                  i.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function () {
                      window.location.href = "/Mobile/Home/Index";
                    }
                  );
                  break;
                case ApiStatusCodeEnum.AntiForgeryTokenIncorrect:
                  i.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function (n) {
                      // n && window.location.reload(!0);
                    }
                  );
                  break;
                default:
                  i.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function () {
                      r != null && r();
                    },
                    null,
                    null,
                    null,
                    null,
                    u
                  );
              }
            }
          }),
          (i.AlertFocus = function (n, t, i, r) {
            r === void 0 && (r = null);
            var u = document.getElementById(i);
            u && u.focus();
            r != undefined && r.length > 0
              ? this.Alert(n, t, !1, "", r)
              : this.Alert(n, t, !1, "");
          }),
          (i.PaymentAlertFocus = function (n, t, i, r) {
            r === void 0 && (r = null);
            var u = document.getElementById(i);
            u && u.focus();
            r != undefined && r.length > 0
              ? this.Alert("", t, !1, n, r)
              : this.Alert("", t, !1, n);
          }),
          (i.AlertBlur = function (n, t, i, r) {
            r === void 0 && (r = null);
            var u = document.getElementById(i);
            u && u.blur();
            r != undefined && r.length > 0
              ? this.Alert("", t, !1, n, r)
              : this.Alert("", t, !1, n);
          }),
          (i.AddFloat = function (n, t) {
            var r, u, i;
            try {
              r = n.toString().split(".")[1].length;
            } catch (f) {
              r = 0;
            }
            try {
              u = t.toString().split(".")[1].length;
            } catch (f) {
              u = 0;
            }
            return (
              (i = Math.pow(10, Math.max(r, u))), Math.round(n * i + t * i) / i
            );
          }),
          (i.SubFloat = function (n, t) {
            var i, r, u, f;
            try {
              i = n.toString().split(".")[1].length;
            } catch (e) {
              i = 0;
            }
            try {
              r = t.toString().split(".")[1].length;
            } catch (e) {
              r = 0;
            }
            return (
              (u = Math.pow(10, Math.max(i, r))),
              (f = i >= r ? i : r),
              parseFloat((Math.round(n * u - t * u) / u).toFixed(f))
            );
          }),
          (i.MulFloat = function (n, t) {
            var i = 0,
              r,
              u,
              f = n.toString(),
              e = t.toString();
            try {
              i += f.split(".")[1].length;
            } catch (o) {}
            try {
              i += e.split(".")[1].length;
            } catch (o) {}
            return (
              (r = Number(n.toString().replace(".", ""))),
              (u = Number(t.toString().replace(".", ""))),
              (r * u) / Math.pow(10, i)
            );
          }),
          (i.DivFloat = function (n, t) {
            var i, r, u, f;
            try {
              i = n.toString().split(".")[1].length;
            } catch (e) {
              i = 0;
            }
            try {
              r = t.toString().split(".")[1].length;
            } catch (e) {
              r = 0;
            }
            return (
              (u = Number(n.toString().replace(".", ""))),
              (f = Number(t.toString().replace(".", ""))),
              (u / f) * Math.pow(10, r - i)
            );
          }),
          (i.RandomNumber = function (n, t, i) {
            return (
              i === void 0 && (i = 0),
              i != 0
                ? parseFloat((Math.random() * (t - n) + n).toFixed(i))
                : Math.floor(Math.random() * (t - n + 1)) + n
            );
          }),
          (i.AlertSignErrorMessage = function (n, t) {
            switch (n) {
              case 4e3:
                break;
              case 4001:
                this.Alert(
                  "您的帳號已禁止登入，如有疑問請聯繫客服人員",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4002:
                this.Alert(
                  "偵測到重複登入，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4003:
                break;
              case 4004:
                this.Alert(
                  "單次登入時間過長已超過限制時間，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4005:
                this.Alert(
                  "您帳號已被禁止登入，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4006:
                this.Alert(
                  "您帳號已被黑名單，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4008:
                this.Alert(
                  "系統維護中，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
                break;
              case 4009:
                // window.location.reload(!0);
                break;
              case 4007:
              default:
                this.Alert(
                  "系統異常，已將您登出",
                  SweetAlertTypeEnum.warning,
                  !1,
                  null,
                  null,
                  t
                );
            }
          }),
          (i.IdentityCheck = function (n) {
            if (n == null || n == "") return !1;
            var t = /^\d{15}|(\d{17}(\d|x|X))$/.test(n);
            return t
              ? n.length == 15
                ? u.IsLength15IdentityCardValid(n)
                : n.length == 18
                ? u.IsLength18IdentityCardValid(n)
                : !1
              : !1;
          }),
          (i.SetLocalStorageItem = function (n, t, i, r) {
            return typeof Storage != "undefined"
              ? (r != null &&
                  r &&
                  (t =
                    "Time：" +
                    moment().format("YYYY-MM-DD HH:mm:ss") +
                    " , Value：" +
                    t),
                i
                  ? localStorage.setItem(n, t)
                  : localStorage.getItem(n) || localStorage.setItem(n, t),
                !0)
              : !1;
          }),
          (i.GetLocalStorageItem = function (n) {
            if (typeof Storage != "undefined") {
              var t = localStorage.getItem(n);
              if (t !== null) return t;
            }
            return "";
          }),
          (i.DeleteLocalStorageItem = function (n) {
            typeof Storage != "undefined" && localStorage.removeItem(n);
          }),
          (i.SetSessionStorageItem = function (n, t) {
            typeof Storage != "undefined" && sessionStorage.setItem(n, t);
          }),
          (i.GetSessionStorageItem = function (n) {
            return typeof Storage != "undefined"
              ? sessionStorage.getItem(n)
              : "";
          }),
          (i.DeleteSessionStorageItem = function (n) {
            typeof Storage != "undefined" && sessionStorage.removeItem(n);
          }),
          (i.DisabledScrollWindow = function (n) {
            n === void 0 && (n = !0);
            var i = [32, 33, 34, 36, 38, 40],
              t = function (n) {
                n = n || window.event;
                n.preventDefault && n.preventDefault();
                n.returnValue = !1;
              },
              r = function (n) {
                if (i.indexOf(n.keyCode) >= 0) {
                  t(n);
                  return;
                }
              };
            window.addEventListener("DOMMouseScroll", n ? t : null, !1);
            window.onwheel = n ? t : null;
            window.onmousewheel = document.onmousewheel = n ? t : null;
            window.ontouchmove = n ? t : null;
            document.onkeydown = n ? r : null;
            document.addEventListener("gesturestart", n ? t : null, {
              passive: !1,
            });
            document.documentElement.addEventListener(
              "touchmove",
              n ? t : null,
              { passive: !1 }
            );
            document.documentElement.addEventListener(
              "gesturestart",
              n ? t : null,
              { passive: !1 }
            );
          }),
          (i.IsSiteCultureIndonesia = function () {
            return (
              r.Config.SiteCulture.toLowerCase() == this.INDONESIA_SITE_CULTURE
            );
          }),
          (i.IsSiteCultureThailand = function () {
            return (
              r.Config.SiteCulture.toLowerCase() == this.THAILAND_SITE_CULTURE
            );
          }),
          (i.IsSiteCultureVietnam = function () {
            return (
              r.Config.SiteCulture.toLowerCase() == this.VIETNAM_SITE_CULTURE
            );
          }),
          (i.IsSiteCultureChina = function () {
            return (
              r.Config.SiteCulture.toLowerCase() == this.CHINA_SITE_CULTURE
            );
          }),
          (i.IsExist = function (n) {
            return typeof n != "undefined" && n !== null;
          }),
          (i.FieldMask = function (n, t) {
            var i = "",
              r;
            switch (t) {
              case FieldMaskTypeEnum.IDNumber:
                i = n ? this.Mask(n, MaskModeEnum.KeepBack, 4, "*") : "";
                break;
              case FieldMaskTypeEnum.EMail:
                n &&
                  ((r = n.split("@")),
                  (i =
                    r.length <= 1
                      ? n
                      : r[0].length <= 3
                      ? "***@" + r[1]
                      : this.Mask(r[0], MaskModeEnum.ExceptFront, 3, "*") +
                        "@" +
                        r[1]));
                break;
              case FieldMaskTypeEnum.CellPhone:
                i = n
                  ? n.length >= 11
                    ? n.replace(/(\d{3})\d*(\d{4})/, "$1****$2")
                    : n.replace(/(\d{3})\d*(\d{3})/, "$1****$2")
                  : "";
                break;
              case FieldMaskTypeEnum.PayAccount:
                i = n ? this.Mask(n, MaskModeEnum.ExceptBack, 5, "*") : "";
                break;
              case FieldMaskTypeEnum.AliPayAccount:
                i = n ? this.Mask(n, MaskModeEnum.ExceptBack, 4, "*") : "";
                break;
              case FieldMaskTypeEnum.AccountName:
                i = n ? this.Mask(n, MaskModeEnum.ExceptFront, 1, "*") : "";
                break;
              case FieldMaskTypeEnum.Address:
                i = n ? this.Mask(n, MaskModeEnum.ExceptFront, 0, "*") : "";
                break;
              default:
                i = n;
            }
            return i;
          }),
          (i.Mask = function (n, t, i, r) {
            var e = "",
              f = "",
              u;
            if (r == "") return n;
            switch (t) {
              case MaskModeEnum.ExceptFront:
                for (u = i; u < n.length; u++) f += r;
                e = n.substr(0, i) + f;
                break;
              case MaskModeEnum.ExceptBack:
                for (u = i; u < n.length; u++) f += r;
                e = f + n.slice(-i);
                break;
              case MaskModeEnum.KeepFront:
                for (i < 0 && (i = n.length), u = 0; u < i; u++) f += r;
                e = f + n.slice(-(n.length - i));
                break;
              case MaskModeEnum.KeepBack:
                for (u = 0; u < i; u++) f += r;
                e = n.substr(0, n.length - i) + f;
                break;
              default:
                e = n;
            }
            return e;
          }),
          (i.ClearMaskInfo = function (n) {
            return n.replace(/\*/g, "");
          }),
          (i.GetCallbackLanguageID = function () {
            return t.Provider().CallbackLanguageID;
          }),
          (i.GetSimpleFancyboxOptions = function () {
            return {
              helpers: { overlay: { closeClick: !1 } },
              autoPlay: !1,
              loop: !1,
            };
          }),
          (i.GetMobileSystem = function () {
            var n = window.navigator.userAgent;
            return {
              isIOS: /iPad|iPhone|iPod/i.test(n),
              isAndroid: /Android/i.test(n),
              isQQBrowser: /QQBrowser/i.test(n),
            };
          }),
          (i.RemovePoint = function (n) {
            var t = n >= 0 ? Math.floor(n) : Math.ceil(n);
            return t === -0 && (t = 0), t;
          }),
          (i.FloorPoint = function (n) {
            var t = Math.floor(n);
            return t === -0 && (t = 0), t;
          }),
          (i.IsValueNotEmpty = function (n) {
            return n !== null && n !== "" && String(n) !== "" && n != undefined;
          }),
          (i.IsNull = function (n) {
            return n == null || n == undefined;
          }),
          (i.IsNullOrEmpty = function (n) {
            return this.IsNull(n) || n == "";
          }),
          (i.GetUrlQueryString = function (n, t) {
            var r = t,
              u = new RegExp("[?&]" + n + "=([^&#]*)", "i"),
              i = u.exec(r);
            return i ? i[1] : null;
          }),
          (i.JqueryPopupShow = function (n) {
            $("" + n + "").show();
            $("html,body").addClass("ovfHiden");
          }),
          (i.JqueryPopupClose = function (n) {
            $("" + n + "").hide();
            $("html,body").removeClass("ovfHiden");
          }),
          (i.GetCustomizeUrlByAnnounce = function (n) {
            var r = n.match(/###LINK##(.*(##.*){4})###/),
              t;
            return r != null && r.length > 0
              ? ((t = r[1].split("##")),
                n.replace(
                  /(###LINK).*(###)/,
                  '<a href="#" ng-click="ctrl.RedirectPage(\'/Mobile' +
                    t[0] +
                    "')\"><span style='" +
                    t[2] +
                    "'>" +
                    i.ChangeLanguage(t[1]) +
                    "</span></a>"
                ))
              : n;
          }),
          (i.CHINA_SITE_CULTURE = "zh-cn"),
          (i.TW_SITE_CULTURE = "zh-tw"),
          (i.US_SITE_CULTURE = "en-us"),
          (i.EN_SITE_CULTURE = "en-uk"),
          (i.VIETNAM_SITE_CULTURE = "vi-vn"),
          (i.THAILAND_SITE_CULTURE = "th-th"),
          (i.INDONESIA_SITE_CULTURE = "id-id"),
          (i.LatinWordMap = {
            Á: "A",
            Ă: "A",
            Ắ: "A",
            Ặ: "A",
            Ằ: "A",
            Ẳ: "A",
            Ẵ: "A",
            Ǎ: "A",
            Â: "A",
            Ấ: "A",
            Ậ: "A",
            Ầ: "A",
            Ẩ: "A",
            Ẫ: "A",
            Ä: "A",
            Ǟ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ạ: "A",
            Ȁ: "A",
            À: "A",
            Ả: "A",
            Ȃ: "A",
            Ā: "A",
            Ą: "A",
            Å: "A",
            Ǻ: "A",
            Ḁ: "A",
            Ⱥ: "A",
            Ã: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            Ḃ: "B",
            Ḅ: "B",
            Ɓ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ć: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ĉ: "C",
            Ċ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ď: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḋ: "D",
            Ḍ: "D",
            Ɗ: "D",
            Ḏ: "D",
            ǲ: "D",
            ǅ: "D",
            Đ: "D",
            Ƌ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            É: "E",
            Ĕ: "E",
            Ě: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ê: "E",
            Ế: "E",
            Ệ: "E",
            Ề: "E",
            Ể: "E",
            Ễ: "E",
            Ḙ: "E",
            Ë: "E",
            Ė: "E",
            Ẹ: "E",
            Ȅ: "E",
            È: "E",
            Ẻ: "E",
            Ȇ: "E",
            Ē: "E",
            Ḗ: "E",
            Ḕ: "E",
            Ę: "E",
            Ɇ: "E",
            Ẽ: "E",
            Ḛ: "E",
            Ꝫ: "ET",
            Ḟ: "F",
            Ƒ: "F",
            Ǵ: "G",
            Ğ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ĝ: "G",
            Ġ: "G",
            Ɠ: "G",
            Ḡ: "G",
            Ǥ: "G",
            Ḫ: "H",
            Ȟ: "H",
            Ḩ: "H",
            Ĥ: "H",
            Ⱨ: "H",
            Ḧ: "H",
            Ḣ: "H",
            Ḥ: "H",
            Ħ: "H",
            Í: "I",
            Ĭ: "I",
            Ǐ: "I",
            Î: "I",
            Ï: "I",
            Ḯ: "I",
            İ: "I",
            Ị: "I",
            Ȉ: "I",
            Ì: "I",
            Ỉ: "I",
            Ȋ: "I",
            Ī: "I",
            Į: "I",
            Ɨ: "I",
            Ĩ: "I",
            Ḭ: "I",
            Ꝺ: "D",
            Ꝼ: "F",
            Ᵹ: "G",
            Ꞃ: "R",
            Ꞅ: "S",
            Ꞇ: "T",
            Ꝭ: "IS",
            Ĵ: "J",
            Ɉ: "J",
            Ḱ: "K",
            Ǩ: "K",
            Ķ: "K",
            Ⱪ: "K",
            Ꝃ: "K",
            Ḳ: "K",
            Ƙ: "K",
            Ḵ: "K",
            Ꝁ: "K",
            Ꝅ: "K",
            Ĺ: "L",
            Ƚ: "L",
            Ľ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ḻ: "L",
            Ŀ: "L",
            Ɫ: "L",
            ǈ: "L",
            Ł: "L",
            Ǉ: "LJ",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ń: "N",
            Ň: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṅ: "N",
            Ṇ: "N",
            Ǹ: "N",
            Ɲ: "N",
            Ṉ: "N",
            Ƞ: "N",
            ǋ: "N",
            Ñ: "N",
            Ǌ: "NJ",
            Ó: "O",
            Ŏ: "O",
            Ǒ: "O",
            Ô: "O",
            Ố: "O",
            Ộ: "O",
            Ồ: "O",
            Ổ: "O",
            Ỗ: "O",
            Ö: "O",
            Ȫ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ọ: "O",
            Ő: "O",
            Ȍ: "O",
            Ò: "O",
            Ỏ: "O",
            Ơ: "O",
            Ớ: "O",
            Ợ: "O",
            Ờ: "O",
            Ở: "O",
            Ỡ: "O",
            Ȏ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ō: "O",
            Ṓ: "O",
            Ṑ: "O",
            Ɵ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Õ: "O",
            Ṍ: "O",
            Ṏ: "O",
            Ȭ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ɛ: "E",
            Ɔ: "O",
            Ȣ: "OU",
            Ṕ: "P",
            Ṗ: "P",
            Ꝓ: "P",
            Ƥ: "P",
            Ꝕ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝙ: "Q",
            Ꝗ: "Q",
            Ŕ: "R",
            Ř: "R",
            Ŗ: "R",
            Ṙ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꜿ: "C",
            Ǝ: "E",
            Ś: "S",
            Ṥ: "S",
            Š: "S",
            Ṧ: "S",
            Ş: "S",
            Ŝ: "S",
            Ș: "S",
            Ṡ: "S",
            Ṣ: "S",
            Ṩ: "S",
            ẞ: "SS",
            Ť: "T",
            Ţ: "T",
            Ṱ: "T",
            Ț: "T",
            Ⱦ: "T",
            Ṫ: "T",
            Ṭ: "T",
            Ƭ: "T",
            Ṯ: "T",
            Ʈ: "T",
            Ŧ: "T",
            Ɐ: "A",
            Ꞁ: "L",
            Ɯ: "M",
            Ʌ: "V",
            Ꜩ: "TZ",
            Ú: "U",
            Ŭ: "U",
            Ǔ: "U",
            Û: "U",
            Ṷ: "U",
            Ü: "U",
            Ǘ: "U",
            Ǚ: "U",
            Ǜ: "U",
            Ǖ: "U",
            Ṳ: "U",
            Ụ: "U",
            Ű: "U",
            Ȕ: "U",
            Ù: "U",
            Ủ: "U",
            Ư: "U",
            Ứ: "U",
            Ự: "U",
            Ừ: "U",
            Ử: "U",
            Ữ: "U",
            Ȗ: "U",
            Ū: "U",
            Ṻ: "U",
            Ų: "U",
            Ů: "U",
            Ũ: "U",
            Ṹ: "U",
            Ṵ: "U",
            Ꝟ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ṽ: "V",
            Ꝡ: "VY",
            Ẃ: "W",
            Ŵ: "W",
            Ẅ: "W",
            Ẇ: "W",
            Ẉ: "W",
            Ẁ: "W",
            Ⱳ: "W",
            Ẍ: "X",
            Ẋ: "X",
            Ý: "Y",
            Ŷ: "Y",
            Ÿ: "Y",
            Ẏ: "Y",
            Ỵ: "Y",
            Ỳ: "Y",
            Ƴ: "Y",
            Ỷ: "Y",
            Ỿ: "Y",
            Ȳ: "Y",
            Ɏ: "Y",
            Ỹ: "Y",
            Ź: "Z",
            Ž: "Z",
            Ẑ: "Z",
            Ⱬ: "Z",
            Ż: "Z",
            Ẓ: "Z",
            Ȥ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ĳ: "IJ",
            Œ: "OE",
            ᴀ: "A",
            ᴁ: "AE",
            ʙ: "B",
            ᴃ: "B",
            ᴄ: "C",
            ᴅ: "D",
            ᴇ: "E",
            ꜰ: "F",
            ɢ: "G",
            ʛ: "G",
            ʜ: "H",
            ɪ: "I",
            ʁ: "R",
            ᴊ: "J",
            ᴋ: "K",
            ʟ: "L",
            ᴌ: "L",
            ᴍ: "M",
            ɴ: "N",
            ᴏ: "O",
            ɶ: "OE",
            ᴐ: "O",
            ᴕ: "OU",
            ᴘ: "P",
            ʀ: "R",
            ᴎ: "N",
            ᴙ: "R",
            ꜱ: "S",
            ᴛ: "T",
            ⱻ: "E",
            ᴚ: "R",
            ᴜ: "U",
            ᴠ: "V",
            ᴡ: "W",
            ʏ: "Y",
            ᴢ: "Z",
            á: "a",
            ă: "a",
            ắ: "a",
            ặ: "a",
            ằ: "a",
            ẳ: "a",
            ẵ: "a",
            ǎ: "a",
            â: "a",
            ấ: "a",
            ậ: "a",
            ầ: "a",
            ẩ: "a",
            ẫ: "a",
            ä: "a",
            ǟ: "a",
            ȧ: "a",
            ǡ: "a",
            ạ: "a",
            ȁ: "a",
            à: "a",
            ả: "a",
            ȃ: "a",
            ā: "a",
            ą: "a",
            ᶏ: "a",
            ẚ: "a",
            å: "a",
            ǻ: "a",
            ḁ: "a",
            ⱥ: "a",
            ã: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            ḃ: "b",
            ḅ: "b",
            ɓ: "b",
            ḇ: "b",
            ᵬ: "b",
            ᶀ: "b",
            ƀ: "b",
            ƃ: "b",
            ɵ: "o",
            ć: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ĉ: "c",
            ɕ: "c",
            ċ: "c",
            ƈ: "c",
            ȼ: "c",
            ď: "d",
            ḑ: "d",
            ḓ: "d",
            ȡ: "d",
            ḋ: "d",
            ḍ: "d",
            ɗ: "d",
            ᶑ: "d",
            ḏ: "d",
            ᵭ: "d",
            ᶁ: "d",
            đ: "d",
            ɖ: "d",
            ƌ: "d",
            ı: "i",
            ȷ: "j",
            ɟ: "j",
            ʄ: "j",
            ǳ: "dz",
            ǆ: "dz",
            é: "e",
            ĕ: "e",
            ě: "e",
            ȩ: "e",
            ḝ: "e",
            ê: "e",
            ế: "e",
            ệ: "e",
            ề: "e",
            ể: "e",
            ễ: "e",
            ḙ: "e",
            ë: "e",
            ė: "e",
            ẹ: "e",
            ȅ: "e",
            è: "e",
            ẻ: "e",
            ȇ: "e",
            ē: "e",
            ḗ: "e",
            ḕ: "e",
            ⱸ: "e",
            ę: "e",
            ᶒ: "e",
            ɇ: "e",
            ẽ: "e",
            ḛ: "e",
            ꝫ: "et",
            ḟ: "f",
            ƒ: "f",
            ᵮ: "f",
            ᶂ: "f",
            ǵ: "g",
            ğ: "g",
            ǧ: "g",
            ģ: "g",
            ĝ: "g",
            ġ: "g",
            ɠ: "g",
            ḡ: "g",
            ᶃ: "g",
            ǥ: "g",
            ḫ: "h",
            ȟ: "h",
            ḩ: "h",
            ĥ: "h",
            ⱨ: "h",
            ḧ: "h",
            ḣ: "h",
            ḥ: "h",
            ɦ: "h",
            ẖ: "h",
            ħ: "h",
            ƕ: "hv",
            í: "i",
            ĭ: "i",
            ǐ: "i",
            î: "i",
            ï: "i",
            ḯ: "i",
            ị: "i",
            ȉ: "i",
            ì: "i",
            ỉ: "i",
            ȋ: "i",
            ī: "i",
            į: "i",
            ᶖ: "i",
            ɨ: "i",
            ĩ: "i",
            ḭ: "i",
            ꝺ: "d",
            ꝼ: "f",
            ᵹ: "g",
            ꞃ: "r",
            ꞅ: "s",
            ꞇ: "t",
            ꝭ: "is",
            ǰ: "j",
            ĵ: "j",
            ʝ: "j",
            ɉ: "j",
            ḱ: "k",
            ǩ: "k",
            ķ: "k",
            ⱪ: "k",
            ꝃ: "k",
            ḳ: "k",
            ƙ: "k",
            ḵ: "k",
            ᶄ: "k",
            ꝁ: "k",
            ꝅ: "k",
            ĺ: "l",
            ƚ: "l",
            ɬ: "l",
            ľ: "l",
            ļ: "l",
            ḽ: "l",
            ȴ: "l",
            ḷ: "l",
            ḹ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ḻ: "l",
            ŀ: "l",
            ɫ: "l",
            ᶅ: "l",
            ɭ: "l",
            ł: "l",
            ǉ: "lj",
            ſ: "s",
            ẜ: "s",
            ẛ: "s",
            ẝ: "s",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ᵯ: "m",
            ᶆ: "m",
            ń: "n",
            ň: "n",
            ņ: "n",
            ṋ: "n",
            ȵ: "n",
            ṅ: "n",
            ṇ: "n",
            ǹ: "n",
            ɲ: "n",
            ṉ: "n",
            ƞ: "n",
            ᵰ: "n",
            ᶇ: "n",
            ɳ: "n",
            ñ: "n",
            ǌ: "nj",
            ó: "o",
            ŏ: "o",
            ǒ: "o",
            ô: "o",
            ố: "o",
            ộ: "o",
            ồ: "o",
            ổ: "o",
            ỗ: "o",
            ö: "o",
            ȫ: "o",
            ȯ: "o",
            ȱ: "o",
            ọ: "o",
            ő: "o",
            ȍ: "o",
            ò: "o",
            ỏ: "o",
            ơ: "o",
            ớ: "o",
            ợ: "o",
            ờ: "o",
            ở: "o",
            ỡ: "o",
            ȏ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ⱺ: "o",
            ō: "o",
            ṓ: "o",
            ṑ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            õ: "o",
            ṍ: "o",
            ṏ: "o",
            ȭ: "o",
            ƣ: "oi",
            ꝏ: "oo",
            ɛ: "e",
            ᶓ: "e",
            ɔ: "o",
            ᶗ: "o",
            ȣ: "ou",
            ṕ: "p",
            ṗ: "p",
            ꝓ: "p",
            ƥ: "p",
            ᵱ: "p",
            ᶈ: "p",
            ꝕ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝙ: "q",
            ʠ: "q",
            ɋ: "q",
            ꝗ: "q",
            ŕ: "r",
            ř: "r",
            ŗ: "r",
            ṙ: "r",
            ṛ: "r",
            ṝ: "r",
            ȑ: "r",
            ɾ: "r",
            ᵳ: "r",
            ȓ: "r",
            ṟ: "r",
            ɼ: "r",
            ᵲ: "r",
            ᶉ: "r",
            ɍ: "r",
            ɽ: "r",
            ↄ: "c",
            ꜿ: "c",
            ɘ: "e",
            ɿ: "r",
            ś: "s",
            ṥ: "s",
            š: "s",
            ṧ: "s",
            ş: "s",
            ŝ: "s",
            ș: "s",
            ṡ: "s",
            ṣ: "s",
            ṩ: "s",
            ʂ: "s",
            ᵴ: "s",
            ᶊ: "s",
            ȿ: "s",
            ɡ: "g",
            ß: "ss",
            ᴑ: "o",
            ᴓ: "o",
            ᴝ: "u",
            ť: "t",
            ţ: "t",
            ṱ: "t",
            ț: "t",
            ȶ: "t",
            ẗ: "t",
            ⱦ: "t",
            ṫ: "t",
            ṭ: "t",
            ƭ: "t",
            ṯ: "t",
            ᵵ: "t",
            ƫ: "t",
            ʈ: "t",
            ŧ: "t",
            ᵺ: "th",
            ɐ: "a",
            ᴂ: "ae",
            ǝ: "e",
            ᵷ: "g",
            ɥ: "h",
            ʮ: "h",
            ʯ: "h",
            ᴉ: "i",
            ʞ: "k",
            ꞁ: "l",
            ɯ: "m",
            ɰ: "m",
            ᴔ: "oe",
            ɹ: "r",
            ɻ: "r",
            ɺ: "r",
            ⱹ: "r",
            ʇ: "t",
            ʌ: "v",
            ʍ: "w",
            ʎ: "y",
            ꜩ: "tz",
            ú: "u",
            ŭ: "u",
            ǔ: "u",
            û: "u",
            ṷ: "u",
            ü: "u",
            ǘ: "u",
            ǚ: "u",
            ǜ: "u",
            ǖ: "u",
            ṳ: "u",
            ụ: "u",
            ű: "u",
            ȕ: "u",
            ù: "u",
            ủ: "u",
            ư: "u",
            ứ: "u",
            ự: "u",
            ừ: "u",
            ử: "u",
            ữ: "u",
            ȗ: "u",
            ū: "u",
            ṻ: "u",
            ų: "u",
            ᶙ: "u",
            ů: "u",
            ũ: "u",
            ṹ: "u",
            ṵ: "u",
            ᵫ: "ue",
            ꝸ: "um",
            ⱴ: "v",
            ꝟ: "v",
            ṿ: "v",
            ʋ: "v",
            ᶌ: "v",
            ⱱ: "v",
            ṽ: "v",
            ꝡ: "vy",
            ẃ: "w",
            ŵ: "w",
            ẅ: "w",
            ẇ: "w",
            ẉ: "w",
            ẁ: "w",
            ⱳ: "w",
            ẘ: "w",
            ẍ: "x",
            ẋ: "x",
            ᶍ: "x",
            ý: "y",
            ŷ: "y",
            ÿ: "y",
            ẏ: "y",
            ỵ: "y",
            ỳ: "y",
            ƴ: "y",
            ỷ: "y",
            ỿ: "y",
            ȳ: "y",
            ẙ: "y",
            ɏ: "y",
            ỹ: "y",
            ź: "z",
            ž: "z",
            ẑ: "z",
            ʑ: "z",
            ⱬ: "z",
            ż: "z",
            ẓ: "z",
            ȥ: "z",
            ẕ: "z",
            ᵶ: "z",
            ᶎ: "z",
            ʐ: "z",
            ƶ: "z",
            ɀ: "z",
            ﬀ: "ff",
            ﬃ: "ffi",
            ﬄ: "ffl",
            ﬁ: "fi",
            ﬂ: "fl",
            ĳ: "ij",
            œ: "oe",
            ﬆ: "st",
            ₐ: "a",
            ₑ: "e",
            ᵢ: "i",
            ⱼ: "j",
            ₒ: "o",
            ᵣ: "r",
            ᵤ: "u",
            ᵥ: "v",
            ₓ: "x",
          }),
          i
        );
      })(),
      e,
      f,
      u,
      o,
      s,
      r,
      t;
    n.Helpers = i;
    e = (function () {
      function n() {}
      return (
        (n.GetInstance = function () {
          return (
            this.provider == null && (this.provider = new f()), this.provider
          );
        }),
        n
      );
    })();
    n.NavigationHelper = e;
    f = (function () {
      function t() {
        if (
          ((this.Model = new n.Models.NavigationModel()), this.IsHomePage())
        ) {
          this.ResetPreviousPageToHome();
          return;
        }
        if (history.state && history.state.NavigationPage)
          (this.Model = history.state.NavigationPage),
            this.SaveSessionStorageData();
        else {
          var t = i.GetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.NavigationPage
          );
          t != undefined &&
            t != "" &&
            (angular.copy(JSON.parse(t), this.Model),
            this.SaveBrowserHistoryData());
        }
      }
      return (
        (t.prototype.SaveSessionStorageData = function () {
          i.SetSessionStorageItem(
            n.ConstDefinition.SessionStorageKey.NavigationPage,
            angular.toJson(this.Model)
          );
        }),
        (t.prototype.SaveBrowserHistoryData = function () {
          history.replaceState({ NavigationPage: this.Model }, "");
        }),
        (t.prototype.SetPageWithMenu = function (n, t) {
          t === void 0 && (t = "");
          this.Model.CurrentFooterMenu = t;
          this.Model.HistoryPages.push(n);
          this.SaveSessionStorageData();
        }),
        (t.prototype.GetCurrentCtrlPath = function () {
          var n = window.location.pathname.split("/");
          return n[n.length - 2] + "/" + n[n.length - 1];
        }),
        (t.prototype.IsHomePage = function () {
          var i = location.pathname.toLowerCase().toString(),
            t = i.split("/"),
            n = t[t.length - 1];
          return n == "home" || n == "index" || n == "login";
        }),
        (t.prototype.ResetPreviousPageToHome = function () {
          this.Model = new n.Models.NavigationModel();
          this.SetPageWithMenu("Home");
        }),
        (t.prototype.RedirectPage = function (n, t, i) {
          t === void 0 && (t = "");
          i === void 0 && (i = "");
          this.SetPageWithMenu(this.GetCurrentCtrlPath() + i, t);
          location.href = n;
        }),
        (t.prototype.RedirectPageNoRecord = function (n) {
          location.href = n;
        }),
        (t.prototype.RecordBackPage = function (n, t) {
          n === void 0 && (n = "");
          t === void 0 && (t = "");
          this.SetPageWithMenu(this.GetCurrentCtrlPath() + t, n);
        }),
        (t.prototype.RedirectPageToSecondLevel = function (t, i) {
          i === void 0 && (i = "");
          this.Model = new n.Models.NavigationModel();
          this.SetPageWithMenu("Home", i);
          t.toLowerCase().indexOf(this.GetCurrentCtrlPath().toLowerCase()) >=
            0 && this.SaveBrowserHistoryData();
          location.href = t;
        }),
        (t.prototype.RedirectPageKeepCurrentFooterMenu = function (n) {
          this.RedirectPage(n, this.Model.CurrentFooterMenu);
        }),
        (t.prototype.GoPreviousPage = function () {
          var n = "";
          if (
            (this.Model.HistoryPages.length > 0 &&
              ((n =
                this.Model.HistoryPages[this.Model.HistoryPages.length - 1]),
              this.Model.HistoryPages.pop(),
              this.SaveSessionStorageData()),
            n && n != "")
          ) {
            location.href =
              location.protocol + "//" + location.host + "/Mobile/" + n;
            return;
          }
          location.href =
            location.protocol + "//" + location.host + "/Mobile/Home";
        }),
        (t.prototype.SetCurrentFooterMenu = function (n) {
          n === void 0 && (n = "");
          this.Model.CurrentFooterMenu = n;
          this.SaveSessionStorageData();
        }),
        t
      );
    })();
    n.Navigation = f;
    u = (function () {
      function n() {}
      return (
        (n.FilterBopomofo = function (n) {
          n = n.replace(t.Provider().FilterBopomofoRegExp, "");
          return n.replace(/[．·•.。]+/gi, "·");
        }),
        (n.GetAddressCodeByIdentityCardNumber = function (n) {
          return n.length < 6 ? "" : n.substring(0, 6);
        }),
        (n.GetParityBit = function (n) {
          for (var r, u = n.substring(0, 17), i = 0, t = 0; t < 17; t++)
            i += parseInt(u.charAt(t), 10) * parseInt(this.powers[t]);
          return (r = i % 11), this.parityBit[r];
        }),
        (n.IsParityBitValid = function (t) {
          return n.GetParityBit(t) === t.charAt(17).toUpperCase();
        }),
        (n.IsAddressCodeValid = function (n) {
          var t = /^[1-9]\d{5}$/.test(n),
            i = n.substring(0, 2),
            r = this.provinceAndCityCodeList.indexOf(i) >= 0;
          return t && r;
        }),
        (n.IsBirthdayCodeValid = function (n) {
          var f =
            /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(
              n
            );
          if (!f) return !1;
          var i = parseInt(n.substring(0, 4), 10),
            r = parseInt(n.substring(4, 6), 10),
            u = parseInt(n.substring(6), 10),
            t = new Date(i, r - 1, u),
            e = t.getTime() > new Date().getTime(),
            o =
              t.getFullYear() == i && t.getMonth() == r - 1 && t.getDate() == u;
          return e === !1 && o;
        }),
        (n.IsLength15IdentityCardValid = function (t) {
          var i =
              /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(
                t
              ),
            r = n.IsAddressCodeValid(n.GetAddressCodeByIdentityCardNumber(t)),
            u = "19" + t.substring(6, 12),
            f = n.IsBirthdayCodeValid(u);
          return i && r && f;
        }),
        (n.IsLength18IdentityCardValid = function (t) {
          var i =
              /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(
                t
              ),
            r = n.IsAddressCodeValid(n.GetAddressCodeByIdentityCardNumber(t)),
            u = t.substring(6, 14),
            f = n.IsBirthdayCodeValid(u),
            e = n.IsParityBitValid(t);
          return i && r && f && e;
        }),
        (n.IsPasswordFormatValid = function (n) {
          return /^[a-zA-Z0-9]{6,10}$/.test(n);
        }),
        (n.IsAccountIDFormatValid = function (n) {
          return (
            /^[a-zA-Z0-9]{4,10}$/.test(n) || this.IsCellPhoneFormatValid(n)
          );
        }),
        (n.IsPasswordTooSimple = function (n) {
          return [
            "000000",
            "111111",
            "222222",
            "333333",
            "444444",
            "555555",
            "666666",
            "777777",
            "888888",
            "999999",
            "123456",
            "1234567",
            "12345678",
            "123456789",
            "1234567890",
            "access",
            "account",
            "anyone",
            "azerty",
            "backup",
            "control",
            "database",
            "default",
            "develop",
            "developer",
            "ftproot",
            "master",
            "oracle",
            "oracle8",
            "password",
            "password1",
            "pwrchute",
            "qwerty",
            "sqlserver",
            "webmaster",
          ].some(function (t) {
            return t.toUpperCase() === n.toUpperCase();
          });
        }),
        (n.IsCellPhoneByLengthFormatValid = function (n) {
          return t.Provider().IsCellPhoneByLengthFormatValid(n);
        }),
        (n.IsCellPhoneFormatValid = function (n) {
          return t.Provider().IsCellPhoneFormatValid(n);
        }),
        (n.IsNicknameFormatValid = function (n) {
          return t.Provider().NicknameRegExp.test(n);
        }),
        (n.IsAccountPrefixValid = function (n) {
          return /^kuk\d/.test(n.toLowerCase())
            ? !1
            : /^t16/.test(n.toLowerCase())
            ? !1
            : /^v16/.test(n.toLowerCase())
            ? !1
            : /^e16/.test(n.toLowerCase())
            ? !1
            : !0;
        }),
        (n.IsAccountIDNotSafe = function (n) {
          return [
            /ONABORT/,
            /ONACTIVATE/,
            /ONBLUR/,
            /ONBOUNCE/,
            /ONCANPLAY/,
            /ONCHANGE/,
            /ONCLICK/,
            /ONCOPY/,
            /ONCUT/,
            /ONDBLCLICK/,
            /ONDRAGDROP/,
            /ONDRAG/,
            /ONDRAGEND/,
            /ONDRAGOVER/,
            /ONDROP/,
            /ONEMPTIED/,
            /ONERROR/,
            /ONENDED/,
            /ONFINISH/,
            /ONFOCUS/,
            /ONFOCUSIN/,
            /ONFOCUSOUT/,
            /ONINPUT/,
            /ONINVALID/,
            /ONKEYDOWN/,
            /ONKEYPRESS/,
            /ONKEYUP/,
            /ONMESSAGE/,
            /ONMOUSEOUT/,
            /ONMOUSEUP/,
            /ONMOVE/,
            /ONMOVEEND/,
            /ONOFFLINE/,
            /ONONLINE/,
            /ONPAGEHIDE/,
            /ONPAGESHOW/,
            /ONPASTE/,
            /ONPAUSE/,
            /ONPLAY/,
            /ONPLAYING/,
            /ONPOPSTATE/,
            /ONPROGRESS/,
            /ONREDO/,
            /ONRESET/,
            /ONRESIZE/,
            /ONROWENTER/,
            /ONROWEXIT/,
            /ONSCROLL/,
            /ONSEARCH/,
            /ONSEEKED/,
            /ONSEEKING/,
            /ONSHOW/,
            /ONSTALLED/,
            /ONSTART/,
            /ONSTOP/,
            /ONSTORAGE/,
            /ONSUBMIT/,
            /ONSUSPEND/,
            /ONTOGGLE/,
            /ONUNDO/,
            /ONUNLOAD/,
            /ONWAITING/,
            /FORMACTION/,
            /SYSTEM32/,
          ].some(function (t) {
            return t.test(n.toUpperCase());
          });
        }),
        (n.IsAccountNameFormatValid = function (n) {
          return t.Provider().IsAccountNameFormatValid(n);
        }),
        (n.IsAccountNameViewInputFormatValid = function (n) {
          return t.Provider().IsAccountNameViewInputFormatValid(n);
        }),
        (n.IsWechatIDFormatValid = function (n) {
          return t.Provider().WechatIDRegExp.test(n);
        }),
        (n.IsQQIDFormatValid = function (n) {
          return t.Provider().QQIDRegExp.test(n);
        }),
        (n.IsTelegramIDFormatValid = function (n) {
          return t.Provider().TelegramIDRegExp.test(n);
        }),
        (n.IsEmailFormatValid = function (n) {
          return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
            n
          );
        }),
        (n.IsOnlineMessageFormatValid = function (n) {
          return t.Provider().OnlineMessageRegExp.test(n);
        }),
        (n.IsRecipientFormatValid = function (n) {
          return t.Provider().RecipientRegExp.test(n);
        }),
        (n.IsInternationalCallMinLengthValid = function (n) {
          return t.Provider().InternationalCallMinLengthRegExp.test(n);
        }),
        (n.IsSMSCaptchaLengthValid = function (n) {
          return n === null || typeof n == "undefined"
            ? !1
            : /^[0-9]{4}$/.test(n);
        }),
        (n.powers = [
          "7",
          "9",
          "10",
          "5",
          "8",
          "4",
          "2",
          "1",
          "6",
          "3",
          "7",
          "9",
          "10",
          "5",
          "8",
          "4",
          "2",
        ]),
        (n.parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]),
        (n.provinceAndCityCodeList = [
          "11",
          "12",
          "13",
          "14",
          "15",
          "21",
          "22",
          "23",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "50",
          "51",
          "52",
          "53",
          "54",
          "61",
          "62",
          "63",
          "64",
          "65",
          "71",
          "81",
          "82",
          "91",
        ]),
        n
      );
    })();
    n.Validator = u;
    o = (function () {
      function n() {}
      return (
        (n.TrimAndReplaceDoubleSpace = function (n) {
          for (var t = n || ""; /\s\s/.test(t); ) t = t.replace(/\s\s/, " ");
          return t.trim();
        }),
        (n.NumberFormat = function (n) {
          return n
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, t.Provider().NumberFormat);
        }),
        (n.GetNumberData = function (n) {
          return Number(n.replace(t.Provider().NumberDataRegExp, ""));
        }),
        n
      );
    })();
    n.Formatter = o;
    s = (function () {
      function t() {}
      return (
        (t.IsNeedRegisterAdditionally = function (t) {
          return !t ||
            t == null ||
            t.MemberStatus == n.Models.MemberStatusEnum.Suspend
            ? !1
            : t.AdditionalStatus != RegisteredAdditionallyStatusEnum.Finish;
        }),
        (t.IsVerifyTimesOverLimit = function (n) {
          return n.indexOf(
            i.ChangeLanguage("您今日驗證次數已達上限，請聯繫客服")
          ) >= 0 ||
            n.indexOf(
              i.ChangeLanguage("您今日驗證次數已達上限，請聯繫客服專員!")
            ) >= 0 ||
            n.indexOf(
              i.ChangeLanguage("您今日找回密碼次數已達上限，請聯繫客服專員")
            ) >= 0
            ? !0
            : !1;
        }),
        t
      );
    })();
    n.Verifier = s;
    r = (function () {
      function n() {}
      return (
        (n.SetConfig = function (n) {
          this.Config = n;
        }),
        (n.SaveConfig = function (n, t) {
          this.Config[n] = t;
        }),
        (n.Config = {
          SignalRNFSvcHost: "",
          SignalRNFSvcIsDebug: !0,
          GetGameBalanceTime: "30",
          DDDFastTransferCallBackUrl: "",
          FastTransferGameID: "",
          EntryRef: "",
          SiteCulture: i.CHINA_SITE_CULTURE,
          CountryID: "",
          SiteCultureAcronym: "CN",
        }),
        n
      );
    })();
    n.GlobalJsConfig = r;
    t = (function () {
      function t() {}
      return (
        (t.Provider = function () {
          if (!t.provider)
            try {
              t.provider = new n[
                "SiteCultureMethod" + r.Config.SiteCultureAcronym.toUpperCase()
              ]();
            } catch (i) {
              t.provider = this.GetDefaultSetting();
              console.log("Instance SiteCulture Fail:" + i);
            }
          return t.provider;
        }),
        (t.GetDefaultSetting = function () {
          return { SetAngulrNumberFormatsGroupSep: function () {} };
        }),
        t
      );
    })();
    n.SiteCultureMethod = t;
  })(OBSMobileApp || (OBSMobileApp = {}));
(__extends =
  (this && this.__extends) ||
  (function () {
    var n =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, t) {
          n.__proto__ = t;
        }) ||
      function (n, t) {
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
      };
    return function (t, i) {
      function r() {
        this.constructor = t;
      }
      n(t, i);
      t.prototype =
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (t) {
      var ti = (function () {
          function n() {}
          return n;
        })(),
        u,
        f,
        e,
        ii,
        ri,
        ui,
        fi,
        ei,
        oi,
        si,
        hi,
        ci,
        o,
        s,
        h,
        c,
        l,
        a,
        v,
        y,
        p,
        w,
        b,
        k,
        d,
        g,
        nt,
        tt,
        it,
        rt,
        ut,
        ft,
        et,
        ot,
        st,
        ht,
        ct,
        i,
        lt,
        at,
        vt,
        yt,
        pt,
        wt,
        bt,
        kt,
        r,
        dt,
        gt,
        ni;
      t.GetPaymentSwitchResult = ti;
      u = (function () {
        function t() {}
        return (
          Object.defineProperty(t.prototype, "WebBankTransAccountMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 101)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WebBankTransAccount,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "WebBankTransCardMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 102)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WebBankTransCard,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "WireTransferMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 103)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WireTransfer,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ATMTransAccountMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 104)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ATMTransAccount,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ATMTransCardMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 105)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ATMTransCard,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "OnlinePayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.OnlinePay,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 101)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ATMCardPayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ATMCardPay,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 102)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "EWalletMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.EWallet,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 103)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "BankScanMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.BankScan,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 104)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ZaloPayAIStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ZaloPayAIStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 9, 101)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "QRCodeMobileAppStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.QRCodeMobileApp,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 106)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "QRCodeMOMOStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.QRCodeMOMO,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 105)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "MomoTransferStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.MOMOTransfer,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 107)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ZaloPayTransferStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ZaloTransfer,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 108)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "InstantTransferStatusMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 109)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.InstantTransfer,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "PromptPayStatusMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 107)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.PromptPay,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ZaloPayScanStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ZaloPayScan,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 110)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ViettelPayStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ViettelPayScan,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 111)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "TrueMoneyStatusMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.TrueMoney,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 105)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "AliOpMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.AliOpStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 1, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "AliOLMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.AliPayWebDepositStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 1, 2)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "AliBankMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.AliPayBankDepositStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 1, 3)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "WechatOLMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WechatAPIStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 2, 2)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "WechatKuMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WechatAIStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 2, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "OtherBankMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.OtherUnionStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "PayFastMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.FastUnionStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 3, 2)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "WebBankStatusMode", {
            get: function () {
              var t =
                this.IsAccountBookDeposit_P === !0
                  ? n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 1)
                  : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.WebBankStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "QQWalletMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.QQUnionStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 5, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "UionPayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.UionPayStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 6, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "JdPayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.JdPayStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 6, 2)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "BaifubaoMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.BaifubaoStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 7, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "CardPayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.CardPayStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 8, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "CryptocurrencyMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.CryptocurrencyStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 10, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "RebatePayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.RewardStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 11, 1)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "RCoinPayMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.RevainStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 10, 2)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "UnionPayMode", {
            get: function () {
              var t = this.IsAccountBookDeposit_P === !0 ? 1 : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.UnionPayStatus,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "UnionCardPayMode", {
            get: function () {
              var t = this.IsAccountBookDeposit_P === !0 ? 1 : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.UnionCardPayStatus,
                t
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "ExclusiveBankScanMode", {
            get: function () {
              var t = this.IsAccountBookDeposit_P === !0 ? 1 : 0;
              return n.PaymentMaintainConfig.SetMode(
                this.IsDeposit_P,
                this.ExclusiveBankScanStatus,
                n.PaymentMaintainConfig.GetIsOpenValue(this.Table1, 4, 5)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "AccountBookWithdrawalMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsWithdrawal_P,
                this.AccountBookWithdrawalStatus,
                n.PaymentMaintainConfig.GetWithdrawalIsOpenValue(
                  this.Table1,
                  4,
                  1
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "CryptocurrencyWithdrawalMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsWithdrawal_P,
                this.CryptocurrencyWithdrawalStatus,
                n.PaymentMaintainConfig.GetWithdrawalIsOpenValue(
                  this.Table1,
                  10,
                  1
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "RebateWithdrawalMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsWithdrawal_P,
                this.RewardWithdrawalStatus,
                n.PaymentMaintainConfig.GetWithdrawalIsOpenValue(
                  this.Table1,
                  11,
                  1
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "RCoinWithdrawalMode", {
            get: function () {
              return n.PaymentMaintainConfig.SetMode(
                this.IsWithdrawal_P,
                this.RevainWithdrawalStatus,
                n.PaymentMaintainConfig.GetWithdrawalIsOpenValue(
                  this.Table1,
                  10,
                  2
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
      t.Competence = u;
      f = (function () {
        function n() {}
        return n;
      })();
      t.GetPersonalCashFlowSettingResult = f;
      e = (function () {
        function n() {
          this.Enable = !1;
          this.Sec = 60;
        }
        return n;
      })();
      (t.Timer = e),
        (function (n) {
          n[(n.MainAccountBalance = 0)] = "MainAccountBalance";
          n[(n.AllGameBalance = 1)] = "AllGameBalance";
          n[(n.MainAccountAndAllGameBalance = 2)] =
            "MainAccountAndAllGameBalance";
        })((ii = t.GetBalanceActionEnum || (t.GetBalanceActionEnum = {}))),
        (function (n) {
          n[(n.Checking = 0)] = "Checking";
          n[(n.NotLogin = 1)] = "NotLogin";
          n[(n.Loggedin = 2)] = "Loggedin";
          n[(n.WaitingLogIn = 3)] = "WaitingLogIn";
          n[(n.Dney = 4)] = "Dney";
          n[(n.Error = 5999)] = "Error";
        })((ri = t.LoginStatusEnum || (t.LoginStatusEnum = {}))),
        (function (n) {
          n[(n.Suspend = 0)] = "Suspend";
          n[(n.Normally = 1)] = "Normally";
          n[(n.Quiescence = 2)] = "Quiescence";
          n[(n.Audit = 3)] = "Audit";
          n[(n.Test = 4)] = "Test";
          n[(n.Promotion = 5)] = "Promotion";
          n[(n.WaitForDeposit = 6)] = "WaitForDeposit";
        })((ui = t.MemberStatusEnum || (t.MemberStatusEnum = {}))),
        (function (n) {
          n[(n.Canlogin = 0)] = "Canlogin";
          n[(n.Disabled = 1)] = "Disabled";
          n[(n.DelayDelete = 98)] = "DelayDelete";
          n[(n.Delete = 99)] = "Delete";
        })((fi = t.LockTypeEnum || (t.LockTypeEnum = {}))),
        (function (n) {
          n[(n.Deposit = 1)] = "Deposit";
          n[(n.Withdrawal = 2)] = "Withdrawal";
        })((ei = t.ActionTypeEnum || (t.ActionTypeEnum = {}))),
        (function (n) {
          n[(n.AliPay = 1)] = "AliPay";
          n[(n.WeChat = 2)] = "WeChat";
          n[(n.Online = 3)] = "Online";
          n[(n.WebBank = 4)] = "WebBank";
          n[(n.QQWallet = 5)] = "QQWallet";
          n[(n.ScanCode = 6)] = "ScanCode";
          n[(n.Baifubao = 7)] = "Baifubao";
          n[(n.Cardpay = 8)] = "Cardpay";
        })((oi = t.CashFlowTypeEnum || (t.CashFlowTypeEnum = {}))),
        (function (n) {
          n[(n.FunctionA = 1)] = "FunctionA";
          n[(n.FunctionB = 2)] = "FunctionB";
          n[(n.FunctionC = 3)] = "FunctionC";
          n[(n.FunctionD = 4)] = "FunctionD";
        })((si = t.FunctionTypeEnum || (t.FunctionTypeEnum = {}))),
        (function (n) {
          n[(n.Unknow = 0)] = "Unknow";
          n[(n.Chinese = 1)] = "Chinese";
          n[(n.Taiwanese = 2)] = "Taiwanese";
          n[(n.English = 3)] = "English";
          n[(n.Vietnamese = 4)] = "Vietnamese";
          n[(n.Thai = 5)] = "Thai";
          n[(n.Indonesian = 6)] = "Indonesian";
        })((hi = t.CallbackLanguageIDEnum || (t.CallbackLanguageIDEnum = {}))),
        (function (n) {
          n[(n.Success = 0)] = "Success";
          n[(n.Fail = 1)] = "Fail";
          n[(n.AdditionalExist = 2)] = "AdditionalExist";
          n[(n.NotFoundAccount = 3)] = "NotFoundAccount";
          n[(n.WithdrawalPwdIsTheSamePwd = 4)] = "WithdrawalPwdIsTheSamePwd";
          n[(n.IsForcedToVerifyIdentity = 5)] = "IsForcedToVerifyIdentity";
          n[(n.WithdrawalPWDEmpty = 6)] = "WithdrawalPWDEmpty";
          n[(n.WithdrawalPWDError = 7)] = "WithdrawalPWDError";
        })(
          (ci =
            t.AddRegisterMemberAdditionallyEnum ||
            (t.AddRegisterMemberAdditionallyEnum = {}))
        );
      t.DefaultUserProfile = {
        AccountID: "",
        AccountName: "",
        AID: "",
        NickName: "",
        MainAccountBalance: 0,
        LevelType: 0,
        TestType: 0,
        LevelTypeName: "",
        CellPhone: "",
        LoginMenuSwitch: {},
        IsRegisteredAdditionally: !1,
        IsCellPhoneValid: !1,
        IsBalanceCheck: !0,
        MemberPlatformBlackList: null,
        MemberStatus: null,
        DirectorID: "",
        IsDepositSuccessed: !1,
        IsAccountWithdrawalFiveMLimit: !0,
        IsAlertGiftCashFlow: !1,
        IsBankAccountIdentityVerify: !1,
        IsBankAccountAttribution: !1,
        IsIdentityVerifyOverMax: !1,
        AdditionalStatus: RegisteredAdditionallyStatusEnum.Unspecified,
        IsSpecialAccount: !1,
        IsNewMember: !1,
        IsSetWithdrawal: !1,
        NeedMemberCheckProtectCodeVerify: !0,
      };
      o = (function () {
        function n() {
          this.IsAuto = "true";
          this.SendType = 1;
          this.OrderField = "MessageNumber";
          this.PageNumber = -1;
          this.RecordCounts = 0;
          this.Desc = "false";
        }
        return n;
      })();
      t.GetPaywayAutoMessageSettingByConditionModel = o;
      s = (function () {
        function n() {}
        return n;
      })();
      t.GetPaywayAutoMessageSettingByConditionResult = s;
      h = (function () {
        function n() {
          this.DataID = "";
        }
        return n;
      })();
      t.LogFields = h;
      c = (function () {
        function n() {
          this.FieldDisplayName = "";
          this.MapperData = [];
        }
        return n;
      })();
      t.LogFieldData = c;
      l = (function () {
        function n() {}
        return n;
      })();
      t.LogFieldMapperData = l;
      a = (function () {
        function n() {}
        return n;
      })();
      t.LogPostModel = a;
      v = (function () {
        function n() {}
        return n;
      })();
      t.LogContent = v;
      y = (function () {
        function n() {}
        return n;
      })();
      t.LogQuery = y;
      p = (function () {
        function n() {}
        return n;
      })();
      t.LogResult = p;
      w = (function () {
        function n() {}
        return n;
      })();
      t.MemberInfoLogPostModel = w;
      b = (function () {
        function n() {}
        return n;
      })();
      t.MemberInfoLogContent = b;
      k = (function () {
        function n() {
          this.Content = [];
        }
        return n;
      })();
      t.MemberInfoLogQuery = k;
      d = (function () {
        function n() {}
        return n;
      })();
      t.MemberInfoLogQueryContent = d;
      g = (function () {
        function n() {}
        return n;
      })();
      t.DropDownListModel = g;
      nt = (function () {
        function n() {}
        return n;
      })();
      t.CheckMemberLoginMenuPermissionPostModel = nt;
      tt = (function () {
        function n() {
          this.ContentLength = 0;
          this.ViewLength = 0;
          this.OverMaxlengthIndex = 0;
        }
        return n;
      })();
      t.GetViewCultureLengthResult = tt;
      it = (function () {
        function n() {}
        return n;
      })();
      t.GameBalancePostModel = it;
      rt = (function () {
        function n() {}
        return n;
      })();
      t.GameTypeListModel = rt;
      ut = (function () {
        function n() {}
        return n;
      })();
      t.MainAccountBalanceModel = ut;
      ft = (function () {
        function n() {
          this.IsAvailable = !1;
        }
        return n;
      })();
      t.AnchorBalanceModel = ft;
      et = (function () {
        function t() {
          this.MainIsAvailable = !1;
          this.GameIsAvailable = !1;
          this.MainAccount = this.GameAccount =
            n.Helpers.ChangeLanguage("載入中");
        }
        return t;
      })();
      t.BalanceModel = et;
      ot = (function () {
        function t() {
          this.IsAvailable = !1;
          this.Status = AmountStatusEnum.isLoading;
          this.statusMessage = {};
          this.statusMessage[AmountStatusEnum.isLoading] =
            n.Helpers.ChangeLanguage("載入中");
          this.statusMessage[AmountStatusEnum.isMaintain] =
            n.Helpers.ChangeLanguage("維護中");
          this.statusMessage[AmountStatusEnum.isBusy] =
            n.Helpers.ChangeLanguage("繁忙中");
        }
        return (
          (t.prototype.Loading = function () {
            this.SetStatus(AmountStatusEnum.isLoading);
          }),
          (t.prototype.SetStatus = function (n, t, i) {
            this.IsAvailable = n === AmountStatusEnum.isAvailable;
            this.Amount = this.IsAvailable ? t : null;
            this.DisplayMessage = this.statusMessage[n];
            i && (this.DisplayMessage = i);
          }),
          t
        );
      })();
      t.AmountStatusModel = ot;
      st = (function () {
        function n() {}
        return n;
      })();
      t.FastTransferModel = st;
      ht = (function () {
        function n() {}
        return n;
      })();
      t.TransferMainAllAmountToGamePostModel = ht;
      ct = (function () {
        function t() {}
        return (
          (t.DDDErrorMap = [
            {
              ErrorCodes: ["-8888888888"],
              Message: n.Helpers.ChangeLanguage("系統繁忙請稍候"),
            },
            {
              ErrorCodes: ["-9999999999"],
              Message: n.Helpers.ChangeLanguage("系統繁忙請稍候"),
            },
            {
              ErrorCodes: ["4422"],
              Message: n.Helpers.ChangeLanguage(
                "在3D電子遊戲中或離開遊戲30秒內，暫不允許提點"
              ),
            },
            {
              ErrorCodes: ["4420"],
              Message: n.Helpers.ChangeLanguage("請求失敗") + "！",
            },
            {
              ErrorCodes: ["4450"],
              Message:
                n.Helpers.ChangeLanguage("單筆互轉額度超過限定值") + "！",
            },
            {
              ErrorCodes: ["-9977", "4443", "4446"],
              Message: n.Helpers.ChangeLanguage("轉點失敗，請重新操作"),
            },
            {
              ErrorCodes: ["-9988", "4444", "4410", "4400"],
              Message: n.Helpers.ChangeLanguage("轉點失敗"),
            },
            {
              ErrorCodes: ["4425"],
              Message:
                n.Helpers.ChangeLanguage("操作次數過於頻繁，請稍候再試") + "！",
            },
            {
              ErrorCodes: ["4447"],
              Message: n.Helpers.ChangeLanguage("維護中") + " #1",
            },
            {
              ErrorCodes: ["4442", "4421", "4401"],
              Message: n.Helpers.ChangeLanguage("系統繁忙請稍候"),
            },
          ]),
          t
        );
      })();
      t.SpecificErrorMap = ct;
      i = (function () {
        function n(n) {
          this.Id = "";
          this.Enabled = !0;
          this.Visibility = !0;
          this.DisableMap = {};
          this.Id = n;
        }
        return (
          (n.prototype.IsEnabled = function () {
            return Object.keys(this.DisableMap).length === 0 && this.Enabled;
          }),
          (n.prototype.Enable = function () {
            this.Enabled = !0;
          }),
          (n.prototype.Disable = function () {
            this.Enabled = !1;
          }),
          (n.prototype.IsVisible = function () {
            return this.Visibility;
          }),
          (n.prototype.Show = function () {
            this.Visibility = !0;
          }),
          (n.prototype.Hide = function () {
            this.Visibility = !1;
          }),
          (n.prototype.EnableBy = function (n) {
            this.DisableMap.hasOwnProperty(n) && delete this.DisableMap[n];
          }),
          (n.prototype.DisableBy = function (n) {
            this.DisableMap[n] = !0;
          }),
          n
        );
      })();
      t.ViewElement = i;
      lt = (function () {
        function n() {
          this.ElementMap = {};
        }
        return (
          (n.prototype.GetElement = function (n) {
            return (
              this.ElementMap.hasOwnProperty(n) ||
                (this.ElementMap[n] = new i(n)),
              this.ElementMap[n]
            );
          }),
          (n.prototype.IsEnabled = function (n) {
            return this.GetElement(n).IsEnabled();
          }),
          (n.prototype.EnableElement = function (n) {
            this.GetElement(n).Enable();
          }),
          (n.prototype.DisableElement = function (n) {
            this.GetElement(n).Disable();
          }),
          (n.prototype.IsVisible = function (n) {
            return this.GetElement(n).IsVisible();
          }),
          (n.prototype.ShowElement = function (n) {
            this.GetElement(n).Show();
          }),
          (n.prototype.HideElement = function (n) {
            this.GetElement(n).Hide();
          }),
          (n.prototype.EnableElementBy = function (n, t) {
            this.GetElement(n).EnableBy(t);
          }),
          (n.prototype.DisableElementBy = function (n, t) {
            this.GetElement(n).DisableBy(t);
          }),
          n
        );
      })();
      t.ViewElementManager = lt;
      at = (function () {
        function n() {
          this.IsAvailable = !1;
          this.IsApiDone = !1;
        }
        return (
          (n.prototype.Reset = function () {
            this.IsAvailable = this.IsApiDone = !1;
          }),
          n
        );
      })();
      vt = (function (n) {
        function t() {
          return (n !== null && n.apply(this, arguments)) || this;
        }
        return __extends(t, n), t;
      })(at);
      t.PlatformTransferEnabled = vt;
      yt = (function () {
        function n() {}
        return n;
      })();
      t.Dictionary = yt;
      pt = (function () {
        function n() {
          this.CurrentFooterMenu = "";
          this.HistoryPages = [];
        }
        return n;
      })();
      t.NavigationModel = pt;
      wt = (function () {
        function n() {
          this.IsAllGameBalanceReady = !1;
          this.AccountBalance = null;
          this.GameAvailableList = [];
          this.TotalBalance = 0;
          this.IsGetGameBalance = !0;
          this.IsGetAccountBalance = !0;
        }
        return (
          (n.prototype.SetAllReload = function () {
            this.AccountBalance = null;
            this.TotalBalance = 0;
            this.IsGetGameBalance = !0;
            this.IsGetAccountBalance = !0;
            this.IsAllGameBalanceReady = !1;
            this.GameAvailableList.forEach(function (n) {
              n.Balance = null;
              n.IsBalanceLoading = !1;
            });
          }),
          (n.prototype.SetGameReload = function (n) {
            this.GameAvailableList.forEach(function (t) {
              t.GameID == n && ((t.Balance = null), (t.IsBalanceLoading = !1));
            });
          }),
          n
        );
      })();
      t.GetPointsControlCenter = wt;
      bt = (function () {
        function n() {
          this.IsFreezed = !1;
          this.Visible = "1";
          this.Balance = null;
          this.IsBalanceLoading = !1;
        }
        return n;
      })();
      t.GetPlatformServiceInfoAvailableListByAccountIDResult = bt;
      kt = (function () {
        function n() {}
        return n;
      })();
      t.GetPlatformServiceInfoAvailableListSubItem = kt;
      r = (function () {
        function n() {
          this.AccountID = "";
          this.CallbackLanguageID = t.CallbackLanguageIDEnum.Chinese;
          this.Phone = "";
          this.LevelType = 0;
        }
        return n;
      })();
      t.CallbackServiceMemberModel = r;
      dt = (function (n) {
        function t() {
          return (n !== null && n.apply(this, arguments)) || this;
        }
        return __extends(t, n), t;
      })(r);
      t.CreateMemberServiceCenterCallbackPostModel = dt;
      gt = (function () {
        function n() {}
        return n;
      })();
      t.DepositNewsLocalStorageItemList = gt;
      ni = (function () {
        function n() {}
        return n;
      })();
      t.DepositNewsLocalStorageItem = ni;
    })((t = n.Models || (n.Models = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (n) {
      var r = (function () {
          function n() {}
          return (
            (n.OnSignInFinish = "OnSignInFinish"),
            (n.OnSignOutFinish = "OnSignOutFinish"),
            (n.OnLoginResult = "OnLoginResult"),
            (n.OnGetLoggedinInfo = "OnGetLoggedinInfo"),
            (n.OnCheckNeedKickLoginStatus = "OnCheckNeedKickLoginStatus"),
            (n.GetGameLobbyBalance = "GetGameLobbyBalance"),
            (n.GetGiftEvents = "GetGiftEvents"),
            (n.GetShowDrawPageCategory = "GetShowDrawPageCategory"),
            (n.OnRegisterAdditionallyGoBack = "OnRegisterAdditionallyGoBack"),
            (n.OnMemberBankGoBack = "OnMemberBankGoBack"),
            (n.OnMemberWithdrawalGoBack = "OnMemberWithdrawalGoBack"),
            (n.OnMemberDepositGoBack = "OnMemberDepositGoBack"),
            (n.OnMobileKeyboardOpen = "OnMobileKeyboardOpen"),
            (n.OnMobileKeyboardClose = "OnMobileKeyboardClose"),
            (n.OnMobileKeyboardDisable = "OnMobileKeyboardDisable"),
            (n.OnHeaderGoBack = "OnHeaderGoBack"),
            (n.MultiShowNumericKeypadV2Onblur =
              "MultiShowNumericKeypadV2Onblur"),
            (n.OnCheckTokenLoginStatus = "OnCheckTokenLoginStatus"),
            (n.OnReadNotifyMessage = "OnReadNotifyMessage"),
            (n.OnHeaderPopTransferRecords = "OnHeaderPopTransferRecords"),
            (n.OnPopQueryTransferRecords = "OnPopQueryTransferRecords"),
            (n.OnQueryTransferRecords = "OnQueryTransferRecords"),
            (n.OnPopPlatformTransferMenu = "OnPopTransferMenu"),
            (n.OnPickTransferGame = "OnSetTransferGame"),
            (n.OnCaptchaCodePanelOpen = "OnCaptchaCodePanelOpen"),
            (n.OnCaptchaCodePanelCustomerServiceOpen =
              "OnCaptchaCodePanelCustomerServiceOpen"),
            (n.OnCaptchaCodePanelVerified = "OnCaptchaCodePanelVerified"),
            (n.OnCaptchaCodePanelClose = "OnCaptchaCodePanelClose"),
            (n.OnCaptchaCodePanelCountdownStart =
              "OnCaptchaCodePanelCountdownStart"),
            (n.OnCaptchaCodePanelCountdownEnd =
              "OnCaptchaCodePanelCountdownEnd"),
            (n.OnCaptchaImageClose = "OnCaptchaImageClose"),
            (n.OnGetPointsControlCenter = "OnGetPushPointsControlCenter"),
            (n.OnSetOneGameReLoadPointsControlCenter =
              "OnSetOneGameReLoadPointsControlCenter"),
            (n.OnRefreshAllPointsControlCenter =
              "OnRefreshAllPointsControlCenter"),
            (n.OnSetMainBalanceControlCenter = "OnSetMainBalanceControlCenter"),
            (n.OnSliderCaptchaOpen = "OnSliderCaptchaOpen"),
            (n.OnPasswordEyeInitialize = "OnPasswordEyeInitialize"),
            (n.OnAccountIsLockHintOpen = "OnAccountIsLockHintOpen"),
            n
          );
        })(),
        t,
        i;
      n.MessageBusEventName = r;
      t = (function () {
        function n() {}
        return (
          (n.OnAlertSwitchUnDefineException = "OnAlertSwitchUnDefineException"),
          (n.IT = "IT"),
          (n.KeepPointsControlCenter = "KeepPointsControlCenter"),
          (n.LatestTimeForWithdrawalNews = "LatestTimeForWithdrawalNews"),
          (n.LatestTimeForDepositNews = "LatestTimeForDepositNews"),
          (n.IsShowDepositNews = "IsShowDepositNews"),
          (n.IsShowWithdrawalNews = "IsShowWithdrawalNews"),
          (n.HaveReadDepositNews = "HaveReadDepositNews"),
          (n.BackupURLNewsID = "BackupURLNewsID"),
          (n.ImportantNewsID = "ImportantNewsID"),
          (n.ImportantNewsID_NewsLevel = "ImportantNewsID_NewsLevel"),
          (n.GameGroupID = "GameGroupID"),
          (n.ShareAPPRedDot = "ShareAPPRedDot"),
          (n.TransitionSettingRedDot = "TransitionSettingRedDot"),
          (n.IsShowAppDownLoad = "IsShowAppDownLoad"),
          n
        );
      })();
      n.LocalStorageKey = t;
      i = (function () {
        function n() {}
        return (
          (n.GameLobbyUrl = "GameLobbyUrl"),
          (n.GameLobbySubGameType = "GameLobbySubGameType"),
          (n.GameLobbyGameType = "GameLobbyGameType"),
          (n.CloseGiftAVIcon = "CloseGiftAVIcon"),
          (n.NavigationPage = "NavigationPage"),
          (n.ServLine = "ServLine"),
          (n.LatestOffersContainerTID = "LatestOffersContainerTID"),
          (n.OsasunaFloat = "OsasunaFloat"),
          (n.CloseRaffleTicketIcon = "CloseRaffleTicketIcon"),
          n
        );
      })();
      n.SessionStorageKey = i;
    })((t = n.ConstDefinition || (n.ConstDefinition = {})));
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t = (function () {
      function t() {
        this.LanguageCode = "vi-VN";
        this.FilterBopomofoRegExp = /([\u3105-\u3129])/g;
        this.NicknameRegExp =
          /^[a-zA-Z0-9_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ][a-zA-Z0-9_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\s]{0,9}$/;
        this.WechatIDRegExp = /^[A-Za-z|0-9*]{6,20}$/;
        this.QQIDRegExp = /^[A-Za-z|0-9*]{6,20}$/;
        this.TelegramIDRegExp = /^[A-Za-z|*][A-Za-z0-9_|*]{4,31}$/;
        this.NumberFormat = "$1.";
        this.NumberDataRegExp = /\./g;
        this.OnlineMessageRegExp = /^.{0,1000}$/;
        this.InternationalCallMinLengthRegExp = /^\+?[*\d]{5,}$/;
        this.RecipientRegExp = /^[A-Za-z.'’\x20]{0,50}$/;
        this.FieldMaskCellPhoneRegExp = /(\d{3})\d*(\d{3})/;
        this.CallbackLanguageID = CallbackLanguageIDEnum.Vietnamese;
        this.MultiNumericKeypadNumberCss = "PopupNum";
        this.GiftEvenCityIDError = "";
        this.IsGiftEventAddressFirst = !0;
        this.MemberEditParentCssName = "formPopup_error_t";
        this.IsGiftEventMsgNoComma = !0;
        this.IsGiftEvenLatiniseString = !0;
        this.IsGiftEventSubmitedAlert = !0;
        this.IsEnableGiftEventLoadMemberAddressOnInit = !1;
        this.NickNameAlertError = "請輸入1 ~ 8碼字母數字字符";
        this.WechatIDAlertError = "微信帳號格式錯誤！";
        this.QQIDAlertError = "QQ帳號格式錯誤！";
        this.TelegramIDAlertError = "Telegram帳號格式錯誤！";
        this.QQIDAlias = "Viber";
        this.WechatIDAlias = "ZALO";
        this.TelegramIDAlias = "Telegram";
        this.GiftEventRecipientRegExp =
          /^$|^[.'’a-zA-Z_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ][.'’a-zA-Z_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\s]{0,49}$/;
        this.IsErrorMsgExclamation = !0;
        this.IsSetZaloViberModel = !0;
        this.IsRegisterGetVerifyMode = !0;
        this.IsSendCaptchaButton = !0;
        this.IsChkDeliveryAddress = !0;
        this.ProtectCodeTextPromptClassName = "txt_prompt_VNTH";
        this.IsDistrictSelectorOpen = !1;
      }
      return (
        (t.prototype.IsAccountNameFormatValid = function (n) {
          return (
            this.IsVietnamWordValid(n) && /^[A-Za-z.'’\x20]{0,50}$/.test(n)
          );
        }),
        (t.prototype.IsAccountNameViewInputFormatValid = function (n) {
          return (
            this.IsVietnamWordValid(n) &&
            /^[.'’a-zA-ZÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\x20]{0,50}$/.test(
              n
            )
          );
        }),
        (t.prototype.IsVietnamWordValid = function (n) {
          if (n == undefined || n == "") return !0;
          var t = n.split(/\s/),
            i = new RegExp(
              /^[A-Za-z.'’ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ]{0,7}$/
            );
          return (
            n.split(/\s/).every(function (n) {
              return i.test(n);
            }) && t.length > 1
          );
        }),
        (t.prototype.IsCellPhoneByLengthFormatValid = function () {
          return !0;
        }),
        (t.prototype.IsCellPhoneFormatValid = function (n) {
          return /^\d{3}[*]{4}\d{3}$/.test(n)
            ? !0
            : /^(09[0-46-9]|03[2-9]|05[2|6|8|9]|07[0|6-9]|08[1-9])\d{7}$/.test(
                n
              );
        }),
        (t.prototype.GetViewCultureLength = function (t, i) {
          var u = t ? t.length : 0,
            r = new n.Models.GetViewCultureLengthResult();
          return (
            (r.ContentLength = u),
            (r.ViewLength = u),
            (r.OverMaxlengthIndex = i),
            r
          );
        }),
        (t.prototype.IsToneDiacriticsValid = function () {
          return !0;
        }),
        (t.prototype.ValidateEventAddress = function (t) {
          var i = { Address: "", AlertMessage: "", valid: !0 };
          return (
            (t.CityID && t.CityID != 0) ||
              ((i.Address = n.Helpers.ChangeLanguage("請輸入地址")),
              (i.AlertMessage = n.Helpers.ChangeLanguage("請選擇城市")),
              (i.valid = !1)),
            (t.ProvincesID && t.ProvincesID != 0) ||
              ((i.Address = n.Helpers.ChangeLanguage("請輸入地址")),
              (i.AlertMessage = n.Helpers.ChangeLanguage("請選擇省份驗證")),
              (i.valid = !1)),
            (t.Address && t.Address !== "") ||
              ((i.Address = n.Helpers.ChangeLanguage("請輸入地址")),
              (i.AlertMessage = n.Helpers.ChangeLanguage("請輸入地址")),
              (i.valid = !1)),
            i
          );
        }),
        (t.prototype.ChkDeliveryAddress = function (t) {
          var i = { Valid: !0, Message: "" },
            r = {
              ProvincesID: t.ProvincesID,
              CityID: t.CityID,
              DistrictID: 0,
              Address: t.Address,
              PostCode: t.PostCode,
              Locality: t.Locality,
            };
          return (
            (t.ProvincesID && t.ProvincesID != 0) ||
            (t.Address && t.Address != "")
              ? ((t.Address && t.Address !== "") ||
                  ((i.Valid = !1),
                  (i.Message = n.Helpers.ChangeLanguage("請輸入地址"))),
                (r.Address = t.Address),
                (t.CityID && t.CityID !== 0) ||
                  ((i.Valid = !1),
                  (i.Message = n.Helpers.ChangeLanguage("請選擇城市"))),
                (t.ProvincesID && t.ProvincesID !== 0) ||
                  ((i.Valid = !1),
                  (i.Message = n.Helpers.ChangeLanguage("請選擇省份驗證"))))
              : (r = {
                  ProvincesID: 0,
                  CityID: 0,
                  DistrictID: 0,
                  Address: "",
                  PostCode: t.PostCode,
                  Locality: t.Locality,
                }),
            { Valid: i.Valid, Message: i.Message, Data: r }
          );
        }),
        (t.prototype.AppendUpdateMemberInfoModelToDescription = function () {}),
        (t.prototype.SetAngulrNumberFormatsGroupSep = function (n) {
          n.NUMBER_FORMATS.GROUP_SEP = ".";
        }),
        (t.prototype.ReloadPageWithExternalBrowser = function () {}),
        (t.prototype.ToTitleCase = function (n) {
          return n.toLocaleUpperCase();
        }),
        t
      );
    })();
    n.SiteCultureMethodVN = t;
  })(OBSMobileApp || (OBSMobileApp = {}));
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
    var o = (function () {
        function t() {}
        return (
          (t.ValueFactory = function () {
            var t = n.Models.LoginStatusEnum.Checking,
              i = __assign({}, n.Models.DefaultUserProfile),
              r = jQuery("#hfloggedinInfo").val();
            return (
              jQuery("#hfloggedinInfo").length > 0 &&
                r &&
                (angular.copy(JSON.parse(r), i),
                (t = n.Models.LoginStatusEnum.Loggedin),
                jQuery("#hfloggedinInfo").val("")),
              { LoginStatus: t, UserProfile: i }
            );
          }),
          t
        );
      })(),
      r,
      s,
      u,
      f,
      t,
      h,
      e;
    n.AppContext = o;
    r = (function () {
      function t() {}
      return (
        (t.ConstantFactory = function () {
          var r = jQuery("#hfLanguageCode").val() || "zh-TW",
            i = parseInt(jQuery("#hfCountry").val() || "2"),
            t = new n.Models.Competence();
          return (
            jQuery("#Competence").length > 0
              ? (angular.copy(JSON.parse(jQuery("#Competence").val()), t),
                i === 618
                  ? t.WebBankTransAccountMode !== 1 &&
                    t.WebBankTransCardMode !== 1 &&
                    t.WireTransferMode !== 1 &&
                    t.ATMTransAccountMode !== 1 &&
                    t.ATMTransCardMode !== 1 &&
                    t.OnlinePayMode !== 1 &&
                    t.ATMCardPayMode !== 1 &&
                    t.EWalletMode !== 1 &&
                    t.BankScanMode !== 1 &&
                    t.ZaloPayAIStatusMode != 1 &&
                    t.QRCodeMobileAppStatusMode != 1 &&
                    t.QRCodeMOMOStatusMode != 1 &&
                    t.MomoTransferStatusMode != 1 &&
                    t.ZaloPayTransferStatusMode != 1 &&
                    t.InstantTransferStatusMode != 1 &&
                    t.ZaloPayScanStatusMode != 1 &&
                    t.ViettelPayStatusMode != 1 &&
                    t.CryptocurrencyMode !== 1 &&
                    (t.IsDeposit_P = !1)
                  : i === 602
                  ? t.WebBankTransAccountMode !== 1 &&
                    t.WireTransferMode !== 1 &&
                    t.ATMTransAccountMode !== 1 &&
                    t.OnlinePayMode !== 1 &&
                    t.PromptPayStatusMode != 1 &&
                    t.InstantTransferStatusMode != 1 &&
                    t.TrueMoneyStatusMode != 1 &&
                    t.CryptocurrencyMode !== 1 &&
                    (t.IsDeposit_P = !1)
                  : i === 500
                  ? t.WebBankTransAccountMode !== 1 &&
                    t.WireTransferMode !== 1 &&
                    t.ATMTransAccountMode !== 1 &&
                    t.OnlinePayMode !== 1 &&
                    t.PromptPayStatusMode != 1 &&
                    t.BankScanMode != 1 &&
                    (t.IsDeposit_P = !1)
                  : t.AliOpMode !== 1 &&
                    t.WechatOLMode !== 1 &&
                    t.WechatKuMode !== 1 &&
                    t.OtherBankMode !== 1 &&
                    t.PayFastMode !== 1 &&
                    t.AliOLMode !== 1 &&
                    t.AliBankMode !== 1 &&
                    t.WebBankStatusMode !== 1 &&
                    t.QQWalletMode !== 1 &&
                    t.UionPayMode !== 1 &&
                    t.JdPayMode !== 1 &&
                    t.BaifubaoMode !== 1 &&
                    t.CardPayMode !== 1 &&
                    t.UnionPayMode !== 1 &&
                    t.UnionCardPayMode !== 1 &&
                    t.ExclusiveBankScanMode !== 1 &&
                    t.CryptocurrencyMode !== 1 &&
                    t.RebatePayMode !== 1 &&
                    t.RCoinPayMode !== 1 &&
                    (t.IsDeposit_P = !1),
                t.AccountBookWithdrawalMode !== 1 &&
                  t.CryptocurrencyWithdrawalMode !== 1 &&
                  t.RebateWithdrawalMode !== 1 &&
                  t.RCoinWithdrawalMode !== 1 &&
                  (t.IsWithdrawal_P = !1))
              : (t = null),
            { LanguageCode: r, Country: i, CompetenceModel: t }
          );
        }),
        t
      );
    })();
    n.AppConfig = r;
    s = (function () {
      function n() {}
      return (
        (n.SetMode = function (n, t, i) {
          return n ? (t === 0 || i === 0 ? 0 : t === 2 || i === 2 ? 2 : 1) : 0;
        }),
        (n.GetIsOpenValue = function (n, t, i) {
          return n == null || n == undefined
            ? 0
            : n.filter(function (n) {
                return (
                  n.CashFlowType === t &&
                  n.FunctionType === i &&
                  n.ActionType === 1
                );
              }).length == 0
            ? 0
            : n.filter(function (n) {
                return (
                  n.CashFlowType === t &&
                  n.FunctionType === i &&
                  n.ActionType === 1
                );
              })[0].IsOpen;
        }),
        (n.GetWithdrawalIsOpenValue = function (n, t, i) {
          return n == null || n == undefined
            ? 0
            : n.filter(function (n) {
                return (
                  n.CashFlowType === t &&
                  n.FunctionType === i &&
                  n.ActionType === 2
                );
              }).length == 0
            ? 0
            : n.filter(function (n) {
                return (
                  n.CashFlowType === t &&
                  n.FunctionType === i &&
                  n.ActionType === 2
                );
              })[0].IsOpen;
        }),
        n
      );
    })();
    n.PaymentMaintainConfig = s;
    u = (function () {
      function n() {}
      return (
        (n.IframeUnbind = function () {
          if (
            jQuery("#hfIframeUnbind").val() !== "false" &&
            top.location != document.location
          ) {
            var n = jQuery("#hfIframe").val() || "請勿加入至IFRAME";
            alert(n);
            top.location.href = document.location.href;
          }
        }),
        n
      );
    })();
    n.PageEvent = u;
    f = (function () {
      function t(t, i, r, u, f, e) {
        u.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        u.interceptors.push(n.Factorys.SubmitAutoDisableHttpInterceptor.$name);
        f.message = "Loading...";
        f.autoBlock = !1;
        e.position = "absolute";
      }
      return (
        (t.$inject = [
          "$locationProvider",
          "$provide",
          "$compileProvider",
          "$httpProvider",
          "blockUIConfig",
          "dateTimeConfig",
        ]),
        t
      );
    })();
    n.Config = f;
    t = (function () {
      function n() {}
      return (
        (n.prototype.mode = function () {}),
        (n.prototype.$get = function () {
          return function (n) {
            console.error(n);
          };
        }),
        (n.$name = "$exceptionHandler"),
        n
      );
    })();
    n.ExceptionHandlerProvider = t;
    h = (function () {
      function n() {}
      return (
        (n.RegisterDirective = function (n, t) {
          angular.module("OBSMobileApp.Directives").directive(n, t);
        }),
        (n.RegisterDirectives = function (n) {
          var t = this,
            i = Object.getOwnPropertyNames(n);
          i.forEach(function (i) {
            t.RegisterDirective(n[i].$name, n[i].$inject);
          });
        }),
        (n.RegisterService = function (n, t) {
          angular.module("OBSMobileApp.Services").service(n, t);
        }),
        (n.RegisterFactory = function (n, t) {
          angular.module("OBSMobileApp.Factorys").factory(n, t);
        }),
        (n.RegisterFactorys = function (n) {
          var t = Object.getOwnPropertyNames(n);
          t.forEach(function (t) {
            angular
              .module("OBSMobileApp.Factorys")
              .factory(n[t].$name, n[t].$inject);
          });
        }),
        (n.RegisterFilter = function (n, t) {
          angular.module("OBSMobileApp.Filter").filter(n, t);
        }),
        (n.RegisterController = function (n, t) {
          angular.module("OBSMobileApp.Controllers").controller(n, t);
        }),
        n
      );
    })();
    n.RegisterAngular = h;
    e = (function () {
      function t(t) {
        n.SiteCultureMethod.Provider().SetAngulrNumberFormatsGroupSep(t);
      }
      return (t.$inject = ["$locale"]), t;
    })();
    n.AppRun = e;
    var i = [
      "OBSMobileApp.Directives",
      "OBSMobileApp.Controllers",
      "OBSMobileApp.Services",
      "OBSMobileApp.Factorys",
      "OBSMobileApp.Filter",
    ];
    i.forEach(function (n) {
      return angular.module(n, []);
    });
    i = i
      .concat([
        "angular.filter",
        "ngCookies",
        "blockUI",
        "datePicker",
        "infinite-scroll",
        "ngTable",
        "ngMask",
        "base64",
        "ds.objectDiff",
        "ngSanitize",
      ])
      .concat(["ngFileUpload"]);
    angular
      .module("OBSMobileApp", i)
      .constant("appConfig", r.ConstantFactory())
      .value("appContext", o.ValueFactory())
      .config(f)
      .provider(t.$name, t)
      .run(e);
    u.IframeUnbind();
  })(OBSMobileApp || (OBSMobileApp = {})),
  (function (n) {
    var t;
    (function (t) {
      var i = (function () {
        function t(n, t, i) {
          this.httpSvc = n;
          this.qSvc = t;
          this.rootScope = i;
        }
        return (
          (t.prototype.GetRequestVerificationToken = function () {
            return $("ajax-anti-forgery-token") != null &&
              $("ajax-anti-forgery-token").attr("token") != null
              ? $("ajax-anti-forgery-token").attr("token")
              : "";
          }),
          (t.prototype.LookHeader = function (n) {
            var t = $("#run0animation");
            t != null &&
              t.text().length > 0 &&
              ((n["If-Most"] = t.text()), t.remove());
          }),
          (t.prototype.CreateDeferred = function () {
            return this.qSvc.defer();
          }),
          (t.prototype.Get = function (t, i, r, u, f) {
            var o = this.qSvc.defer(),
              h = n.Helpers.StringFormat(
                "{0}{1}",
                new Date().getTime(),
                new Date().getMilliseconds()
              ),
              c = {
                RequestVerificationToken: this.GetRequestVerificationToken(),
                UniqueTick: h,
              },
              s,
              e,
              l;
            this.LookHeader(c);
            s = _.merge(f, c);
            e = null;
            try {
              e = event || handlerEventM;
            } catch (a) {
              handlerEventM && (e = handlerEventM);
            } finally {
              handlerEventM = null;
            }
            return (
              e &&
                e.target &&
                ((l = this.rootScope.RequestQueue),
                $(e.target).attr("id") != null &&
                  (l[h] = $(e.target).attr("id"))),
              i == HttpMethodEnum.Get
                ? this.httpSvc
                    .get(t, { headers: s, timeout: u })
                    .then(function (n) {
                      o.resolve(n.data);
                    })
                    .catch(function (n) {
                      o.reject(n.data);
                    })
                : i == HttpMethodEnum.Post
                ? this.httpSvc
                    .post(t, r, { headers: s, timeout: u })
                    .then(function (n) {
                      o.resolve(n.data);
                    })
                    .catch(function (n) {
                      o.reject(n.data);
                    })
                : console.error("DataProvider not specified HTTP Method."),
              o.promise
            );
          }),
          (t.prototype.SimpleApiResultPost = function (n, t) {
            var i = this.qSvc.defer();
            return (
              this.Get(n, HttpMethodEnum.Post, t)
                .then(function (n) {
                  i.resolve(n.Data);
                })
                .catch(function (n) {
                  i.reject(n);
                }),
              i.promise
            );
          }),
          (t.$name = "DataProvider"),
          (t.$inject = ["$http", "$q", "$rootScope"]),
          t
        );
      })();
      t.DataProvider = i;
    })((t = n.Common || (n.Common = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Common.DataProvider.$name,
  OBSMobileApp.Common.DataProvider
),
  (function (n) {
    var t;
    (function (t) {
      var h = (function () {
          function n(n, t) {
            this.$filter = n;
            this.dataProvider = t;
          }
          return (
            (n.prototype.GetPager = function (n, t) {
              var i, r, f, u;
              for (
                t === void 0 && (t = 6),
                  f = Math.floor(t / 2),
                  i = n.PageNumber - f,
                  i < 1 && (i = 1),
                  r = i + t > n.PageCount ? n.PageCount : i + t,
                  r - i < t && (i = i - (t - (r - i))),
                  i < 1 && (i = 1),
                  n.Pages = [],
                  u = i;
                u <= r;
                u++
              )
                n.Pages.push({ PageNumber: u, Selected: u === n.PageNumber });
              return (
                (n.FirstPageIsVisible = i === 1),
                (n.LastPageIsVisible = r === n.PageCount),
                (n.PreviousPageNumber = n.PageNumber - 1),
                (n.NextPageNumber = n.PageNumber + 1),
                n
              );
            }),
            (n.prototype.GetPageList = function (n, t, i, r) {
              var v = this,
                e,
                s,
                u,
                c,
                f,
                l,
                h,
                a,
                o;
              for (
                t === void 0 && (t = 1),
                  i === void 0 && (i = 20),
                  e = n,
                  r != null &&
                    ((s = []),
                    r.Columns.forEach(function (t) {
                      var i = {};
                      i[t] = r.FilterString;
                      s = angular.extend(s, v.$filter("filter")(n.slice(), i));
                    }),
                    (e = s)),
                  u = {
                    PageNumber: null,
                    PageCount: null,
                    PageSize: null,
                    TotalItemCount: null,
                    HasPreviousPage: null,
                    HasNextPage: null,
                    IsFirstPage: null,
                    IsLastPage: null,
                    FirstItemOnPage: null,
                    LastItemOnPage: null,
                    FirstPageIsVisible: null,
                    LastPageIsVisible: null,
                    PreviousPageNumber: null,
                    NextPageNumber: null,
                    Pages: null,
                  },
                  u.TotalItemCount = e == null ? 0 : e.length,
                  u.PageSize = i,
                  u.PageNumber = t,
                  u.PageCount =
                    u.TotalItemCount > 0
                      ? Math.ceil(u.TotalItemCount / u.PageSize)
                      : 0,
                  u.HasPreviousPage = u.PageNumber > 1,
                  u.HasNextPage = u.PageNumber < u.PageCount,
                  u.IsFirstPage = u.PageNumber == 1,
                  u.IsLastPage = u.PageNumber >= u.PageCount,
                  u.FirstItemOnPage = (u.PageNumber - 1) * u.PageSize + 1,
                  c = u.FirstItemOnPage + u.PageSize - 1,
                  u.LastItemOnPage =
                    c > u.TotalItemCount ? u.TotalItemCount : c,
                  u.PageCount > 0 &&
                    u.PageNumber - 1 >= u.PageCount &&
                    (u.PageNumber = u.PageCount),
                  h = 6,
                  a = Math.floor(h / 2),
                  f = u.PageNumber - a,
                  f < 1 && (f = 1),
                  l = f + h > u.PageCount ? u.PageCount : f + h,
                  u.Pages = [],
                  o = f;
                o <= l;
                o++
              )
                u.Pages.push({ PageNumber: o, Selected: o === u.PageNumber });
              return (
                (u.FirstPageIsVisible = f === 1),
                (u.LastPageIsVisible = l === u.PageCount),
                (u.PreviousPageNumber = u.PageNumber - 1),
                (u.NextPageNumber = u.PageNumber + 1),
                (u.Data = e.slice()),
                (u.Data = u.Data.slice(
                  (u.PageNumber - 1) * u.PageSize,
                  u.PageNumber * u.PageSize
                )),
                u
              );
            }),
            (n.$name = "XPagerSvc"),
            (n.$inject = ["$filter", "DataProvider"]),
            n
          );
        })(),
        i,
        r,
        u,
        f,
        e,
        o,
        s;
      t.XPagerService = h;
      i = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CheckRegisteredAdditionally = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Verify/CheckRegisteredAdditionally",
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
          (n.prototype.CheckCellPhoneVerify = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Verify/CheckCellPhoneVerify",
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
          (n.$name = "CheckRegisteredAdditionallySvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      t.CheckRegisteredAdditionallyService = i;
      r = (function () {
        function t(t) {
          this.dataProvider = t;
          this.LogField = new n.Models.LogFields();
        }
        return (
          (t.prototype.FieldAdapter = function (t, i) {
            var r, u;
            for (r in t) {
              if (((u = new n.Models.LogFieldData()), r == "DataID")) {
                i[r] = t[r];
                continue;
              }
              i[r] == undefined &&
                ((u.FieldDisplayName = t[r]), (u.MapperData = []), (i[r] = u));
            }
          }),
          (t.prototype.CreateUpdateLog = function (t) {
            var i = this,
              r = [],
              u,
              f;
            t.changed !== "equal" &&
              (angular.forEach(t.value, function (t, f) {
                t.changed.indexOf("change") > -1 &&
                  i.LogField[f] != null &&
                  (i.LogField[f].MapperData &&
                    i.LogField[f].MapperData.forEach(function (i) {
                      t.removed =
                        t.removed.toString() == i.Value.toString()
                          ? n.Helpers.ChangeLanguage(i.Text)
                          : t.removed;
                      t.added =
                        t.added.toString() == i.Value.toString()
                          ? n.Helpers.ChangeLanguage(i.Text)
                          : t.added;
                    }),
                  r.push({
                    FieldName: f.toString(),
                    FieldDisplayName: i.LogField[f].FieldDisplayName,
                    BeforeValue: t.removed,
                    AfterValue: t.added,
                  }));
                f.toString() == i.LogField.DataID && (u = t.value);
              }),
              (f = {
                OperateType: OperateTypeEnum.Update,
                DataID: u,
                Content: r,
              }),
              this.InsertLog(f)
                .then(function () {})
                .catch(function () {}));
          }),
          (t.prototype.CreateDeleteLog = function (n, t) {
            var u = this,
              i,
              r;
            angular.forEach(n, function (n, t) {
              t.toString() == u.LogField.DataID && (i = n);
            });
            r = { OperateType: t, DataID: i, Content: [] };
            this.InsertLog(r)
              .then(function () {})
              .catch(function () {});
          }),
          (t.prototype.InsertLog = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/CreateOperationLog",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n.Data.Message);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (t.prototype.GetLog = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/GetOperationLogByCondition",
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
          (t.prototype.CreateMemberInfoOperationLog = function (t, i, r) {
            var u = this.GetMemberInfoOperationLogContent(t),
              f = {
                Operated: this.LogFieldDataID,
                OperateType: OperateTypeEnum.Update,
                DataID: this.LogFieldDataID,
                Content: u,
              };
            this.InsertMemberInfoOperationLog(f)
              .then(function () {
                i && i();
              })
              .catch(function () {
                i &&
                  n.Helpers.Alert(
                    "",
                    SweetAlertTypeEnum.none,
                    !1,
                    r + "但操作纪录失败",
                    null,
                    function () {
                      i();
                    }
                  );
              });
          }),
          (t.prototype.GetMemberInfoOperationLogContent = function (t) {
            var i = this,
              r = [];
            if (((this.LogFieldDataID = ""), t.changed !== "equal"))
              return (
                angular.forEach(t.value, function (t, u) {
                  if (
                    t.changed.indexOf("change") > -1 &&
                    i.LogField[u] != null
                  ) {
                    var f = "",
                      e = "";
                    i.LogField[u].MapperData &&
                      i.LogField[u].MapperData.forEach(function (i) {
                        f =
                          String(t.removed) == String(i.Value)
                            ? n.Helpers.ChangeLanguage(i.Text)
                            : f;
                        e =
                          String(t.added) == String(i.Value)
                            ? n.Helpers.ChangeLanguage(i.Text)
                            : e;
                      });
                    r.push({
                      FieldName: u.toString(),
                      FieldDisplayName: i.LogField[u].FieldDisplayName,
                      BeforeValue: t.removed,
                      BeforeName:
                        f != "" ? (f == "#EMPTY#" ? "" : f) : t.removed,
                      AfterValue: t.added,
                      AfterName: e != "" ? (e == "#EMPTY#" ? "" : e) : t.added,
                    });
                  }
                  u.toString() == i.LogField.DataID &&
                    (i.LogFieldDataID = t.value);
                }),
                r
              );
          }),
          (t.prototype.InsertMemberInfoOperationLog = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/CreateMemberInfoOperationLog",
                  HttpMethodEnum.Post,
                  n
                )
                .then(function (n) {
                  t.resolve(n.Data.Message);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (t.prototype.GetMemberInfoOperationLog = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Common/GetMemberInfoOperationLogByCondition",
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
          (t.$name = "LogSvc"),
          (t.$inject = ["DataProvider"]),
          t
        );
      })();
      t.LogService = r;
      u = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SignCheck = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Authorize/CheckNeedKickLoginStatus",
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
          (n.$name = "SignSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      t.SignService = u;
      f = (function () {
        function t(n, t, i, r, u) {
          this.$interval = n;
          this.dataProvider = t;
          this.appContext = i;
          this.appConfig = r;
          this.messageBus = u;
        }
        return (
          (t.prototype.GetLoggedinAreaInfo = function () {
            var t = this,
              i = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Authorize/GetLoggedinInfo", HttpMethodEnum.Post)
                .then(function (r) {
                  t.appContext.LoginStatus = n.Models.LoginStatusEnum.Loggedin;
                  t.appContext.UserProfile = r.Data;
                  t.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
                    n.Models.LoginStatusEnum.Loggedin
                  );
                  i.resolve(!0);
                })
                .catch(function (r) {
                  t.appContext.LoginStatus = n.Models.LoginStatusEnum.NotLogin;
                  t.appContext.UserProfile = null;
                  r && r.Error
                    ? r.Error.Code == 4005
                      ? t.messageBus.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .OnGetLoggedinInfo,
                          n.Models.LoginStatusEnum.Dney
                        )
                      : r.Error.Code.toString().substring(0) === "4"
                      ? t.messageBus.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .OnGetLoggedinInfo,
                          n.Models.LoginStatusEnum.NotLogin
                        )
                      : t.messageBus.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .OnGetLoggedinInfo,
                          n.Models.LoginStatusEnum.Error
                        )
                    : t.messageBus.Emit(
                        n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
                        n.Models.LoginStatusEnum.NotLogin
                      );
                  i.reject(!1);
                }),
              i.promise
            );
          }),
          (t.prototype.RefreshMemberBlackList = function () {
            var t = this,
              n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Game/GetMemberPlatformFrontendBlackListByAccountID",
                  HttpMethodEnum.Post,
                  { AccountID: this.appContext.UserProfile.AccountID }
                )
                .then(function (i) {
                  t.appContext.UserProfile.MemberPlatformBlackList = i.Data;
                  n.resolve(!0);
                })
                .catch(function () {
                  n.reject(!1);
                }),
              n.promise
            );
          }),
          (t.prototype.GetLoggedinAppConfigInfo = function () {
            var t = this,
              n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Authorize/GetCompetenceAppConfig",
                  HttpMethodEnum.Post
                )
                .then(function (i) {
                  t.appConfig.CompetenceModel = angular.copy(i.Data);
                  n.resolve(!0);
                })
                .catch(function () {
                  n.reject(!1);
                }),
              n.promise
            );
          }),
          (t.prototype.GetUserProfile = function () {
            var t = this,
              i = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Authorize/GetLoggedinInfo", HttpMethodEnum.Post)
                .then(function (r) {
                  t.appContext.LoginStatus = n.Models.LoginStatusEnum.Loggedin;
                  t.appContext.UserProfile = r.Data;
                  i.resolve(!0);
                })
                .catch(function () {
                  t.appContext.LoginStatus = n.Models.LoginStatusEnum.NotLogin;
                  t.appContext.UserProfile = null;
                  i.reject(!1);
                }),
              i.promise
            );
          }),
          (t.prototype.CheckNeedKickLoginStatus = function () {
            var t = this;
            this.dataProvider
              .Get(
                "/api/Authorize/CheckNeedKickLoginStatus",
                HttpMethodEnum.Post,
                { AccountID: this.appContext.UserProfile.AccountID }
              )
              .then(function (i) {
                t.appContext.UserProfile.LoginMenuSwitch = i.Data;
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnCheckNeedKickLoginStatus,
                  1001
                );
              })
              .catch(function (i) {
                t.StopCheckInterval();
                var r = i != null && i.Error != null ? i.Error.Code : 4011;
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnCheckNeedKickLoginStatus,
                  r
                );
              });
          }),
          (t.prototype.GetNeedKickLoginStatus = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "/api/Authorize/CheckNeedKickLoginStatus",
                  HttpMethodEnum.Post,
                  { AccountID: this.appContext.UserProfile.AccountID }
                )
                .then(function () {
                  n.resolve(1001);
                })
                .catch(function (t) {
                  t && t.Error ? n.reject(t.Error.Code) : n.reject(null);
                }),
              n.promise
            );
          }),
          (t.prototype.StartCheckInterval = function () {
            var n = this;
            this.checkInterval == null &&
              (this.checkInterval = this.$interval(function () {
                n.CheckNeedKickLoginStatus();
              }, 3e4));
          }),
          (t.prototype.StopCheckInterval = function () {
            this.$interval.cancel(this.checkInterval);
            this.checkInterval = null;
          }),
          (t.prototype.StartTokenFastTransferCheckInterval = function () {
            var n = this;
            this.checkInterval == null &&
              (this.checkInterval = this.$interval(function () {
                n.CheckTokenFastTransferLoginStatus();
              }, 3e4));
          }),
          (t.prototype.CheckTokenFastTransferLoginStatus = function () {
            var t = this,
              i = new URLSearchParams(location.search.slice(1)),
              r = i.get("token"),
              u = { FastTransferToken: r };
            this.dataProvider
              .Get(
                location.origin + "/api/Authorize/CheckTokenLoginStatus",
                HttpMethodEnum.Post,
                null,
                null,
                u
              )
              .then(function () {
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnCheckTokenLoginStatus,
                  1001
                );
              })
              .catch(function (i) {
                t.StopCheckInterval();
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnCheckTokenLoginStatus,
                  i.Error.Code
                );
              });
          }),
          (t.prototype.ResetUserProfile = function () {
            this.appContext.LoginStatus = n.Models.LoginStatusEnum.Checking;
            this.appContext.UserProfile = null;
          }),
          (t.prototype.CheckLoginStatus = function (t, i) {
            var r = "";
            if (t)
              switch (t) {
                case 4e3:
                  break;
                case 4001:
                  r = "您的帳號已禁止登入，如有疑問請聯繫客服人員";
                  break;
                case 4002:
                  r = "偵測到重複登入，已將您登出";
                  break;
                case 4003:
                case 4010:
                  r = "您已經登出";
                  break;
                case 4004:
                  r = "單次登入時間過長已超過限制時間，已將您登出";
                  break;
                case 4005:
                  r =
                    n.Helpers.ChangeLanguage("您的帳號已被鎖定，請聯繫客服") +
                    "<br/><div style='color:red'>" +
                    n.Helpers.ChangeLanguage("請勿提供手機驗證碼給他人！") +
                    "</div>";
                  break;
                case 4006:
                  r = "您帳號已被黑名單，已將您登出";
                  break;
                case 4008:
                  r = "系統維護中，已將您登出";
                  break;
                case 4009:
                  // window.location.reload(!0);
                  break;
                case 4011:
                  r = "網路異常，請刷新頁面";
                  break;
                case 4007:
                default:
                  r = "系統異常，已將您登出";
              }
            else r = "請求異常，請稍後再試";
            if (r) {
              if (t == 4005) {
                this.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName.OnAccountIsLockHintOpen,
                  r
                );
                return;
              }
              n.Helpers.Alert(
                "",
                SweetAlertTypeEnum.none,
                !1,
                r,
                null,
                function () {
                  if (i) {
                    i();
                    return;
                  }
                  var n =
                    location.protocol +
                    "//" +
                    location.host +
                    "/Mobile/Home/login";
                  location.replace(n);
                }
              );
            }
          }),
          (t.prototype.GetVerifyMode = function (n) {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Common/GetVerifyMode",
              n
            );
          }),
          (t.$name = "AppContextSvc"),
          (t.$inject = [
            "$interval",
            "DataProvider",
            "appContext",
            "appConfig",
            "messageBus",
          ]),
          t
        );
      })();
      t.AppContextService = f;
      e = (function () {
        function n(n) {
          this.$base64 = n;
        }
        return (
          (n.prototype.GenerateUUID = function () {
            var n = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (t) {
                var i = (n + Math.random() * 16) % 16 | 0;
                return (
                  (n = Math.floor(n / 16)),
                  (t == "x" ? i : (i & 3) | 8).toString(16)
                );
              }
            );
          }),
          (n.prototype.Base64Encode = function (n) {
            return !n || n.length === 0 ? "" : this.$base64.encode(n);
          }),
          (n.prototype.Base64Decode = function (n) {
            return !n || n.length === 0 ? "" : this.$base64.decode(n);
          }),
          (n.$name = "ToolsSvc"),
          (n.$inject = ["$base64"]),
          n
        );
      })();
      t.ToolsService = e;
      o = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.CheckMemberLoginMenuPermission = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Verify/CheckMemberLoginMenuPermission",
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
          (n.prototype.IsMemberRegisterEnabled = function () {
            return this.dataProvider.SimpleApiResultPost(
              "../../api/Common/IsMemberRegisterEnabled"
            );
          }),
          (n.$name = "PermissionSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      t.PermissionService = o;
      s = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.GetSliderCaptcha = function () {
            var n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../../api/Verify/GetSliderCaptcha", HttpMethodEnum.Post)
                .then(function (t) {
                  n.resolve(t.Data);
                })
                .catch(function (t) {
                  n.reject(t);
                }),
              n.promise
            );
          }),
          (n.prototype.CheckSlideCaptcha = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../../api/Verify/CheckSliderCaptcha",
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
          (n.$name = "VerifySvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      t.VerifyService = s;
    })((t = n.Services || (n.Services = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.XPagerService.$name,
  OBSMobileApp.Services.XPagerService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.CheckRegisteredAdditionallyService.$name,
  OBSMobileApp.Services.CheckRegisteredAdditionallyService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.LogService.$name,
  OBSMobileApp.Services.LogService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.SignService.$name,
  OBSMobileApp.Services.SignService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.AppContextService.$name,
  OBSMobileApp.Services.AppContextService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.ToolsService.$name,
  OBSMobileApp.Services.ToolsService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.PermissionService.$name,
  OBSMobileApp.Services.PermissionService
);
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Services.VerifyService.$name,
  OBSMobileApp.Services.VerifyService
),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function n() {}
          return (
            (n.HttpInterceptorFactory = function (n, t) {
              return (
                (t.RequestQueue = {}),
                {
                  requestError: function (i) {
                    var r = i.config.headers.UniqueTick;
                    return (
                      r != null && ((t.isSubmit = !1), (t.uniqueTick = r)),
                      n.reject(i)
                    );
                  },
                  responseError: function (i) {
                    var r = i.config.headers.UniqueTick;
                    return (
                      r != null && ((t.isSubmit = !1), (t.uniqueTick = r)),
                      n.reject(i)
                    );
                  },
                  request: function (n) {
                    var i = n.headers.UniqueTick;
                    return i != null && (t.isSubmit = !0), n;
                  },
                  response: function (n) {
                    var i = n.config.headers.UniqueTick;
                    return (
                      i != null && ((t.isSubmit = !1), (t.uniqueTick = i)), n
                    );
                  },
                }
              );
            }),
            (n.$name = "submitAutoDisableHttpInterceptor"),
            (n.$inject = ["$q", "$rootScope", n.HttpInterceptorFactory]),
            n
          );
        })(),
        t;
      n.SubmitAutoDisableHttpInterceptor = i;
      t = (function () {
        function n() {}
        return (
          (n.ServiceFactroy = function (n) {
            return {
              Emit: function (t, i) {
                n.$emit(t, i);
              },
              Broadcast: function (t, i) {
                n.$broadcast(t, i);
              },
              On: function (t, i, r) {
                r === void 0 && (r = !1);
                var u = n.$on(t, function (n, t) {
                  i(n, t);
                  r && n.stopPropagation();
                });
                n && n.$on("destroy", u);
              },
              BroadcastAny: function (t) {
                for (var r = [], i = 1; i < arguments.length; i++)
                  r[i - 1] = arguments[i];
                n.$broadcast.apply(n, [t].concat(r));
              },
            };
          }),
          (n.$name = "messageBus"),
          (n.$inject = ["$rootScope", n.ServiceFactroy]),
          n
        );
      })();
      n.MessageBusFactory = t;
    })((t = n.Factorys || (n.Factorys = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterFactorys(OBSMobileApp.Factorys),
  (function (n) {
    var t;
    (function (t) {
      var ei = (function () {
          function n() {}
          return (
            (n.DirectiveFactory = function (n) {
              var t = {
                  parent: ".popupValidateElement",
                  parentError: "formPopup_error",
                  spanError: "formPopup_error_t",
                },
                u = angular.fromJson($("#errorstyle").val());
              t = angular.extend(t, u);
              var i = '<i class="' + t.spanError + '"></i>',
                r = '<span class="' + t.spanError + '"></span>',
                f = function (n, t) {
                  var r, u;
                  n &&
                    ((r = $("#" + n)),
                    r.find("ul").remove(),
                    t.length > 0
                      ? ((u = $('<ul class="list-unstyled ft13"></ul>')),
                        t.forEach(function (n) {
                          var r =
                              i +
                              "「" +
                              $(n.element).attr("valid-name") +
                              "」" +
                              n.message,
                            t = $("<li />");
                          t.append(r);
                          u.append(t);
                        }),
                        r.append(u),
                        r.removeClass("hide").addClass("show"))
                      : r.removeClass("show").addClass("hide"));
                };
              return {
                restrict: "A",
                name: "popupFormValidationSetting",
                controller: [
                  "$scope",
                  function (n) {
                    n.RegisterValidation &&
                      (n.IsRegister ||
                        ((n.Validators = {}),
                        n.RegisterValidation(),
                        (n.IsRegister = !0)));
                  },
                ],
                link: function (u, f, e) {
                  var c = e.isSubmit || !0,
                    h = e.errorPanelId,
                    s = e.asName,
                    l = e.ignore || "",
                    a = f,
                    o;
                  s &&
                    u[s] &&
                    (u.IsRegister ||
                      ((u.Validators = {}),
                      u[s].RegisterValidation(),
                      (u.IsRegister = !0)));
                  o = a.validate({
                    ignore: l,
                    onsubmit: c,
                    showErrors: function (n, u) {
                      if (!o.cancelSubmit)
                        return (
                          $.each(o.successList, function (n, i) {
                            var r = $(i).closest(t.parent),
                              u;
                            r.length !== 0 &&
                              r.hasClass(t.parentError) &&
                              ((u = new RegExp(/error+/)),
                              r.removeClass(t.parentError),
                              r.find("span").each(function (n, t) {
                                u.test(t.className) && $(t).remove();
                              }));
                          }),
                          $.each(u, function (n, u) {
                            var f = $(u.element).closest(t.parent);
                            if (f.length !== 0)
                              return (
                                f.hasClass(t.parentError)
                                  ? f.hasClass(t.parentError) &&
                                    $("span", f).text() !== u.message &&
                                    $("span[class*=error]", f).text(u.message)
                                  : (f.addClass(t.parentError),
                                    h
                                      ? h == "parent"
                                        ? f.append($(r).text(u.message))
                                        : $(u.element).parent().append(i)
                                      : $(u.element)
                                          .parent()
                                          .append($(r).text(u.message))),
                                $(u.element)
                              );
                          })
                        );
                    },
                  });
                  u.Validators[e.name] = o;
                  n.On("fancyBoxClose", function (n, i) {
                    var r = jQuery(i).find("form");
                    r != null &&
                      r.length > 0 &&
                      r.each(function (n, i) {
                        $(i)
                          .find("." + t.parentError)
                          .removeClass(t.parentError);
                        $(i)
                          .find("span." + t.spanError)
                          .remove();
                      });
                  });
                },
              };
            }),
            (n.$name = "popupFormValidationSetting"),
            (n.$inject = ["messageBus", n.DirectiveFactory]),
            n
          );
        })(),
        i,
        r,
        u,
        f,
        e,
        o,
        s,
        h,
        c,
        l,
        a,
        v,
        y,
        p,
        w,
        b,
        k,
        d,
        g,
        nt,
        tt,
        it,
        rt,
        ut,
        ft,
        et,
        ot,
        st,
        ht,
        ct,
        lt,
        at,
        vt,
        yt,
        pt,
        wt,
        bt,
        kt,
        dt,
        gt,
        ni,
        ti,
        ii,
        ri,
        ui,
        fi;
      t.PopupFormValidationSetting = ei;
      i = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              name: "formValidationSetting",
              controller: [
                "$scope",
                function (n) {
                  n.RegisterValidation &&
                    (n.IsRegister ||
                      ((n.Validators = {}),
                      n.RegisterValidation(),
                      (n.IsRegister = !0)));
                },
              ],
              link: function (t, i, r) {
                var a = r.isSubmit || !0,
                  o = r.errorPanelId,
                  s = r.asName,
                  v = r.ignore || "",
                  y = (r.errorSpanNoRemove + "").toLowerCase() == "true",
                  p = i,
                  u = {
                    parent: "li",
                    parentError: "error",
                    spanError: "error_t",
                  },
                  h = r.customErrorClass || "",
                  c,
                  e;
                h &&
                  ((c = angular.fromJson($(h).val())),
                  (u = angular.extend(u, c)));
                var l = '<i class="' + u.spanError + '"></i>',
                  f = '<span class="' + u.spanError + '"></span>',
                  w = function (n, t) {
                    var i, r;
                    n &&
                      ((i = $("#" + n)),
                      i.find("ul").remove(),
                      t.length > 0
                        ? ((r = $('<ul class="list-unstyled ft13"></ul>')),
                          t.forEach(function (n) {
                            var i =
                                l +
                                "「" +
                                $(n.element).attr("valid-name") +
                                "」" +
                                n.message,
                              t = $("<li />");
                            t.append(i);
                            r.append(t);
                          }),
                          i.append(r),
                          i.removeClass("hide").addClass("show"))
                        : i.removeClass("show").addClass("hide"));
                  };
                s &&
                  t[s] &&
                  (t.IsRegister ||
                    ((t.Validators = {}),
                    t[s].RegisterValidation(),
                    (t.IsRegister = !0)));
                e = p.validate({
                  ignore: v,
                  onsubmit: a,
                  showErrors: function (n, t) {
                    if (!e.cancelSubmit)
                      return (
                        $.each(e.successList, function (n, t) {
                          var i = $(t).closest(u.parent),
                            r;
                          i.length !== 0 &&
                            i.hasClass(u.parentError) &&
                            ((r = new RegExp(/error+/)),
                            i.removeClass(u.parentError),
                            i.find("span").each(function (n, t) {
                              r.test(t.className) &&
                                ($(t).attr("class") != u.spanError || y
                                  ? $(t).text("")
                                  : $(t).remove());
                            }));
                        }),
                        w(o, t),
                        $.each(t, function (n, t) {
                          var i = $(t.element).closest(u.parent),
                            r;
                          if (i.length !== 0) {
                            if (i.hasClass(u.parentError))
                              i.hasClass(u.parentError) &&
                                $("span", i).text() !== t.message &&
                                $("span[class*=error]", i).text(t.message);
                            else if ((i.addClass(u.parentError), o))
                              switch (o) {
                                case "parent":
                                  i.append($(f).text(t.message));
                                  break;
                                case "before":
                                  $(t.element).before($(f).text(t.message));
                                  break;
                                case "after":
                                  $(t.element).after($(f).text(t.message));
                                  break;
                                default:
                                  $(t.element).parent().append(l);
                              }
                            else
                              (r = i.children("span." + u.spanError)),
                                r.length != 0
                                  ? r.text(t.message)
                                  : $(t.element)
                                      .parent()
                                      .append($(f).text(t.message));
                            return $(t.element);
                          }
                        })
                      );
                  },
                });
                t.Validators[r.name] = e;
                n.On("fancyBoxClose", function (n, t) {
                  var i = jQuery(t).find("form");
                  i != null &&
                    i.length > 0 &&
                    i.each(function (n, t) {
                      $(t)
                        .find("." + u.parentError)
                        .removeClass(u.parentError);
                      $(t)
                        .find("span." + u.spanError)
                        .remove();
                    });
                });
              },
            };
          }),
          (n.$name = "formValidationSetting"),
          (n.$inject = ["messageBus", n.DirectiveFactory]),
          n
        );
      })();
      t.FormValidationSetting = i;
      r = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              priority: -200,
              link: function (i, r, u) {
                var e = r.val() || r.text(),
                  v,
                  y,
                  a,
                  w;
                (r[0].tagName === "BUTTON" || r[0].tagName === "A") &&
                  (e = r.html());
                var o = null,
                  s = null,
                  h = !0,
                  l = !1,
                  f = !0,
                  p = u.isDebounce && u.isDebounce === "true",
                  c = null;
                u.ngValidClick && (o = n(u.ngValidClick));
                u.ngPromiseClick && (s = n(u.ngPromiseClick));
                u.isAutoDisabled === "false" && (f = !1);
                r[0].tagName === "INPUT"
                  ? u.type === "submit"
                    ? ((v = r.parents("form")),
                      v.submit(function (n) {
                        if (
                          ((l = !0),
                          v.length > 0 && v.valid != null
                            ? v.valid() &&
                              (u.submitAutoDisable &&
                                r.val(u.submitAutoDisable),
                              f &&
                                (r.attr("disabled", "true"),
                                r.addClass("btn-disabled")))
                            : (u.submitAutoDisable &&
                                r.val(u.submitAutoDisable),
                              f &&
                                (r.attr("disabled", "true"),
                                r.addClass("btn-disabled"))),
                          o && (h = o(i, { $event: n })),
                          !h && l)
                        ) {
                          r.val(e);
                          f && r.removeAttr("disabled");
                          return;
                        }
                        s &&
                          ((c = s(i, { $event: n })),
                          c
                            .then(function () {
                              return;
                            })
                            .catch(function () {
                              return;
                            })
                            .finally(function () {
                              r.val(e);
                              f && r.removeAttr("disabled");
                            }));
                      }))
                    : u.type === "button" &&
                      ((y = r.parents("form")),
                      (a = function (n) {
                        if (u.requiredvalid) {
                          var t = r.parents("form"),
                            a = t.validate().element("#" + u.requiredvalid);
                          if (a) {
                            if (
                              (u.ajaxSubmitAutoDisable &&
                                r.text(u.ajaxSubmitAutoDisable),
                              f &&
                                (r.attr("disabled", "true"),
                                r.addClass("btn-disabled")),
                              o && (h = o(i, { $event: n })),
                              !h && l)
                            ) {
                              r.text(e);
                              f &&
                                (r.removeAttr("disabled"),
                                r.removeClass("btn-disabled"));
                              return;
                            }
                            s &&
                              ((c = s(i, { $event: n })),
                              c
                                .then(function () {
                                  return;
                                })
                                .catch(function () {
                                  return;
                                })
                                .finally(function () {
                                  r.val(e);
                                  f && r.removeAttr("disabled");
                                }));
                          }
                        } else {
                          if (
                            (y.length > 0 && y.valid != null
                              ? y.valid()
                                ? (u.ajaxSubmitAutoDisable &&
                                    r.val(u.ajaxSubmitAutoDisable),
                                  f &&
                                    (r.attr("disabled", "true"),
                                    r.addClass("btn-disabled")),
                                  (l = !0))
                                : (n.stopImmediatePropagation(),
                                  n.preventDefault())
                              : (u.ajaxSubmitAutoDisable &&
                                  r.val(u.ajaxSubmitAutoDisable),
                                f &&
                                  (r.attr("disabled", "true"),
                                  r.addClass("btn-disabled")),
                                (l = !0)),
                            o && (h = o(i, { $event: n })),
                            !h && l)
                          ) {
                            r.val(e);
                            f &&
                              (r.removeAttr("disabled"),
                              r.removeClass("btn-disabled"));
                            return;
                          }
                          s &&
                            ((c = s(i, { $event: n })),
                            c
                              .then(function () {
                                return;
                              })
                              .catch(function () {
                                return;
                              })
                              .finally(function () {
                                r.val(e);
                                f && r.removeAttr("disabled");
                              }));
                        }
                      }),
                      p
                        ? r.click(
                            _.debounce(a, 1e3, { leading: !0, trailing: !1 })
                          )
                        : r.click(a))
                  : ((a = function (n) {
                      var t = !0,
                        a;
                      if (
                        (u.requiredvalid &&
                          ((a = r.parents("form")),
                          (t = a.validate().element("#" + u.requiredvalid))),
                        t)
                      ) {
                        if (
                          (u.ajaxSubmitAutoDisable &&
                            r.html(u.ajaxSubmitAutoDisable),
                          f &&
                            (r.attr("disabled", "true"),
                            r.addClass("btn-disabled")),
                          o && (h = o(i, { $event: n })),
                          !h && l)
                        ) {
                          r.html(e);
                          f &&
                            (r.removeAttr("disabled"),
                            r.removeClass("btn-disabled"));
                          return;
                        }
                        s &&
                          ((c = s(i, { $event: n })),
                          c
                            .then(function () {
                              return;
                            })
                            .catch(function () {
                              return;
                            })
                            .finally(function () {
                              r.html(e);
                              f && r.removeAttr("disabled");
                            }));
                      }
                    }),
                    p
                      ? r.click(
                          _.debounce(a, 1e3, { leading: !0, trailing: !1 })
                        )
                      : r.click(a));
                w = i.$watch(
                  function () {
                    return t.isSubmit;
                  },
                  function (n) {
                    n === !1 &&
                      (r[0].tagName === "INPUT"
                        ? r.val(e)
                        : r[0].tagName === "BUTTON"
                        ? r.html(e)
                        : r.html(e),
                      f &&
                        (r.removeAttr("disabled"),
                        r.removeClass("btn-disabled")));
                  }
                );
                i.$on("destroy", function () {
                  w();
                  o = null;
                });
              },
            };
          }),
          (n.$name = "ajaxSubmitAutoDisable"),
          (n.$inject = ["$parse", "$rootScope", n.DirectiveFactory]),
          n
        );
      })();
      t.AjaxSubmitAutoDisable = r;
      u = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i) {
            return {
              restrict: "A",
              priority: -200,
              require: "?ngModel",
              link: function (r, u, f, e) {
                var nt = u.val() || u.text(),
                  y = null,
                  h = null,
                  l = !1,
                  a = !0,
                  tt = f.isDebounce && f.isDebounce === "true",
                  w = null,
                  it = f.disableCssName || "btn-disabled",
                  ut = Number(f.delayEnable || "500"),
                  b = function () {
                    f.ajaxSubmitAutoDisableV2 && k(f.ajaxSubmitAutoDisableV2);
                  },
                  o = function () {
                    var n = f.originalName || "";
                    n != "" ? k(n) : k(nt);
                  },
                  k = function (n) {
                    u[0].tagName == "INPUT" ? u.val(n) : u.text(n);
                  },
                  d = function () {
                    a && (u.attr("disabled", "true"), u.addClass(it));
                  },
                  s = function () {
                    a && (u.removeAttr("disabled"), u.removeClass(it));
                  },
                  g = function (n) {
                    return y ? y(r, { $event: n }) : !0;
                  },
                  v,
                  p,
                  c,
                  rt;
                f.ngValidClick && (y = n(f.ngValidClick));
                f.ngPromiseClick && (h = n(f.ngPromiseClick));
                f.isAutoDisabled === "false" && (a = !1);
                u[0].tagName == "INPUT"
                  ? f.type === "submit"
                    ? ((v = u.parents("form")),
                      v.submit(function (n) {
                        var t, i, u;
                        if (
                          ((handlerEventM = n),
                          (l = !0),
                          (t = v.length > 0 && v.valid != null),
                          (i = t && v.valid()),
                          (t === !1 || i) && (b(), d()),
                          (u = g(n)),
                          !u && l)
                        ) {
                          o();
                          s();
                          return;
                        }
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {
                              return null;
                            })
                            .finally(function () {
                              o();
                              s();
                            }));
                      }))
                    : f.type === "button" &&
                      ((p = u.parents("form")),
                      (c = function (n) {
                        var t, i, u;
                        if (
                          ((handlerEventM = n),
                          (t = p.length > 0 && p.valid != null),
                          (i = t && p.valid()),
                          (t === !1 || i) && (b(), d(), (l = !0)),
                          t && !i)
                        ) {
                          n.stopImmediatePropagation();
                          n.preventDefault();
                          return;
                        }
                        if (((u = g(n)), !u && l)) {
                          o();
                          s();
                          return;
                        }
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {
                              return null;
                            })
                            .finally(function () {
                              o();
                              s();
                            }));
                      }),
                      tt
                        ? u.click(
                            _.debounce(c, 1e3, { leading: !0, trailing: !1 })
                          )
                        : u.click(c))
                  : ((c = function (n) {
                      var c = u.attr("disabled") === "disabled",
                        t,
                        i,
                        e;
                      if (
                        !c &&
                        ((handlerEventM = n),
                        (nt = u.val() || u.text()),
                        (l = a),
                        (t = !0),
                        f.requiredvalid &&
                          ((i = u.parents("form")),
                          (t = i.validate().element("#" + f.requiredvalid)),
                          n.preventDefault()),
                        t)
                      ) {
                        if (
                          (b(), d(), n.preventDefault(), (e = g(n)), !e && a)
                        ) {
                          o();
                          s();
                          return;
                        }
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {
                              return null;
                            })
                            .finally(function () {
                              o();
                              s();
                            }));
                      }
                    }),
                    tt
                      ? u.click(
                          _.debounce(c, 1e3, { leading: !0, trailing: !1 })
                        )
                      : u.click(c));
                rt = e
                  ? r.$watch(
                      function () {
                        return e.$modelValue;
                      },
                      function (n) {
                        n != null && n == !1 && (o(), s());
                      }
                    )
                  : r.$watch(
                      function () {
                        return t.uniqueTick;
                      },
                      function () {
                        var n = t.RequestQueue[t.uniqueTick],
                          r;
                        n != null &&
                          n == u[0].id &&
                          (delete t.RequestQueue[t.uniqueTick],
                          (r = i(function () {
                            o();
                            s();
                          }, ut)));
                      }
                    );
                r.$on("destroy", function () {
                  rt();
                  y = null;
                });
              },
            };
          }),
          (n.$name = "ajaxSubmitAutoDisableV2"),
          (n.$inject = [
            "$parse",
            "$rootScope",
            "$timeout",
            n.DirectiveFactory,
          ]),
          n
        );
      })();
      t.AjaxSubmitAutoDisableV2 = u;
      f = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var u = function (i) {
                  var f, e, u;
                  (!r.popCheck ||
                    ((f = n(r.popCheck)), (e = f(t, { $event: i })), e)) &&
                    ((u = r.popOpen), u != null && u.length !== 0) &&
                    ($("" + u + "").show(),
                    $("html,body").addClass("ovfHiden"));
                };
                i.on("click", u);
                t.$on("$destroy", function () {
                  u = null;
                });
              },
            };
          }),
          (n.$name = "popOpen"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.PopOpen = f;
      e = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i, r) {
            return {
              restrict: "A",
              link: function (u, f, e) {
                var s = null,
                  o,
                  h;
                e.fboxShow && (s = n(e.fboxShow));
                o = null;
                e.fboxClose && (o = n(e.fboxClose));
                h = null;
                e.fboxBeforeClose && (h = n(e.fboxBeforeClose));
                var a = (e.autoOpen || "false") === "true",
                  c = (e.showCloseButton || "true") === "true",
                  l = function (f) {
                    var p = null,
                      y = null,
                      w,
                      v,
                      a,
                      b,
                      l;
                    (!e.fboxCheck ||
                      ((v = n(e.fboxCheck)), (w = v(u, { $event: f })), w)) &&
                      (e.fboxCheckAsync &&
                        ((p = i.defer()),
                        (v = n(e.fboxCheckAsync)),
                        (y = v(u, { $event: f }))),
                      (a = e.fboxOpen),
                      a != null && a.length !== 0) &&
                      ((b = (e.fboxOverlayClose || "true") === "true"),
                      (l = {
                        padding: 15,
                        helpers: { overlay: { closeClick: b } },
                        closeBtn: c,
                        keys: { close: c },
                        autoPlay: !1,
                        loop: !1,
                      }),
                      (l.href = a),
                      (l.beforeShow = function () {
                        var n = $(a).find("form"),
                          t;
                        n != null &&
                          n.length > 0 &&
                          u.Validators != null &&
                          ((t = u.Validators[n.attr("name")]),
                          t != null &&
                            (t.resetForm(),
                            n.find(".error").each(function (n, t) {
                              $(t).removeClass("error");
                              $(t).find("span.errorHint").remove();
                            })));
                        u.$evalAsync(function () {
                          jQuery.fancybox.update();
                          var n = e.fboxFocus;
                          typeof n != "undefined" &&
                            document.getElementById(n).focus();
                        });
                      }),
                      s &&
                        (l.afterShow = function () {
                          u.$evalAsync(function () {
                            s(u, { $event: f });
                          });
                        }),
                      o &&
                        (l.afterClose = function () {
                          u.$evalAsync(function () {
                            o(u, { $event: f });
                          });
                        }),
                      h &&
                        (l.beforeClose = function () {
                          u.$evalAsync(function () {
                            h(u, { $event: f });
                          });
                        }),
                      (l.afterClose = function () {
                        t.Emit("fancyBoxClose", a);
                        o &&
                          u.$evalAsync(function () {
                            o(u, { $event: f });
                          });
                      }),
                      y == null
                        ? jQuery.fancybox(l)
                        : (y.then(function (n) {
                            n &&
                              r(function () {
                                jQuery.fancybox(l);
                              });
                          }),
                          p.resolve()));
                  };
                f.on("click", l);
                a && f.click();
                u.$on("$destroy", function () {
                  s = null;
                  o = null;
                  l = null;
                });
              },
            };
          }),
          (n.$name = "fboxOpen"),
          (n.$inject = [
            "$parse",
            "messageBus",
            "$q",
            "$timeout",
            n.DirectiveFactory,
          ]),
          n
        );
      })();
      t.FancyBoxOpen = e;
      o = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "E",
              link: function (n, t, i) {
                var r = i.ruleName,
                  u = i.ruleMessage;
                jQuery.validator.messages[r] = u;
              },
            };
          }),
          (n.$name = "validRule"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ValidRule = o;
      s = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var f = function () {
                  var o = u.checkblacklist,
                    s = u.balanceCheck,
                    v = u.checkMemStatZero === "true" ? !0 : !1,
                    i = t.UserProfile.AdditionalStatus,
                    h,
                    c,
                    l,
                    f,
                    a,
                    e;
                  if (t.LoginStatus != n.Models.LoginStatusEnum.Loggedin) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Home/Login";
                    return;
                  }
                  if (
                    ((h = jQuery("#isTSCinemasVisible").val()),
                    (v && t.UserProfile.MemberStatus == 0) || h == "true")
                  ) {
                    if (
                      ((c = r.find(".gameMainTain_in")),
                      c.css("display") === "block")
                    )
                      return;
                    r.addClass("maintain");
                    return;
                  }
                  if (
                    i == RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Register/CellPhoneVerify";
                    return;
                  }
                  if (
                    i == RegisteredAdditionallyStatusEnum.NeedWriteBankCard ||
                    i == RegisteredAdditionallyStatusEnum.NeedWriteIdentify ||
                    i ==
                      RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword ||
                    i ==
                      RegisteredAdditionallyStatusEnum.NeedWriteAttachIdentity
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Register/RegisterAdditionally";
                    return;
                  }
                  if (
                    s &&
                    t.UserProfile.IsBalanceCheck &&
                    !t.UserProfile.IsDepositSuccessed
                  ) {
                    n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, s);
                    return;
                  }
                  if (
                    o != undefined &&
                    t.UserProfile.MemberPlatformBlackList != undefined
                  ) {
                    if (t.UserProfile.MemberPlatformBlackList.length == 0) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                      );
                      return;
                    }
                    if (
                      ((l = t.UserProfile.MemberPlatformBlackList),
                      (f = _.filter(l, function (n) {
                        return n.ServiceID == o;
                      })),
                      f.length == 0)
                    ) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                      );
                      return;
                    }
                    if (f[0].BlackStatus == "1") {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.StringFormat(
                          n.Helpers.ChangeLanguage("您沒有進入《{0}》的權限！"),
                          n.Helpers.ChangeLanguage(f[0].ServiceName)
                        )
                      );
                      return;
                    }
                  }
                  a = u.windowOpenWithCheckRegisteredStatus;
                  e = "_blank";
                  u.target && (e = u.target);
                  window.open(a, e);
                };
                r.on("click", f);
                i.$on("$destroy", function () {
                  f = null;
                });
              },
            };
          }),
          (t.$name = "windowOpenWithCheckRegisteredStatus"),
          (t.$inject = ["appContext", t.DirectiveFactory]),
          t
        );
      })();
      t.WindowOpenWithCheckRegisteredStatus = s;
      h = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return {
              restrict: "A",
              link: function (f, e, o) {
                var s = function (s) {
                  var d = null,
                    a = null,
                    g = o.inAppRedirect === "true",
                    it = o.inAppOpenRedirect === "true",
                    nt = o.isLocalRedirect === "true",
                    c = o.windowOpen,
                    l = o.target ? o.target : "_blank",
                    tt =
                      /Safari/.test(navigator.userAgent) &&
                      !/CriOS|Chrome|FxiOS|EdgiOS/.test(navigator.userAgent),
                    p =
                      tt &&
                      ["SM", "TS", "NBB"].some(function (n) {
                        return n === l;
                      }),
                    v,
                    y,
                    w,
                    b,
                    h,
                    k;
                  if (
                    ((u.OpenOrFocus = function (n, t) {
                      u.popups || (u.popups = {});
                      u.popups[t] && u.popups[t].close();
                      u.popups[t] = u.open(n, t);
                    }),
                    (v = function () {
                      n.GlobalJsConfig.Config.EntryRef === "app"
                        ? g
                          ? (u.location.href = c)
                          : u.OpenOrFocus(c, l)
                        : nt
                        ? (u.location.href = c)
                        : u.OpenOrFocus(c, l);
                    }),
                    (y = function () {
                      var n = document.createElement("a");
                      n.setAttribute("rel", "noopener noreferrer");
                      n.setAttribute("href", c);
                      n.setAttribute("target", "_blank");
                      n.click();
                    }),
                    t.LoginStatus !== n.Models.LoginStatusEnum.Loggedin)
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Home/Login";
                    return;
                  }
                  if (
                    ((w = jQuery("#isSMVisible").val()),
                    l == "SM" && w == "true")
                  ) {
                    if (
                      ((b = e.find(".gameMainTain_in")),
                      b.css("display") === "block")
                    )
                      return;
                    e.addClass("maintain");
                    return;
                  }
                  (o.windowOpenCheckAsync &&
                    ((d = r.defer()),
                    (h = null),
                    (h = i(o.windowOpenCheckAsync)),
                    (a = h(f, { $event: s }))),
                  !o.windowOpenCheck ||
                    ((h = null),
                    (h = i(o.windowOpenCheck)),
                    (k = h(f, { $event: s })),
                    k)) &&
                    (a == null
                      ? p
                        ? y()
                        : v()
                      : a.then(function (n) {
                          n && (p ? y() : v());
                        }));
                };
                e.on(
                  "click",
                  _.debounce(s, 1e3, { leading: !0, trailing: !1 })
                );
                f.$on("$destroy", function () {
                  s = null;
                });
              },
            };
          }),
          (t.$name = "windowOpen"),
          (t.$inject = [
            "appContext",
            "$parse",
            "$q",
            "$window",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.WindowOpen = h;
      c = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                var r = function () {
                  var n = "_blank",
                    t;
                  i.target && (n = i.target);
                  t = i.windowOpenSimple;
                  window.open(t, n);
                };
                t.on(
                  "click",
                  _.debounce(r, 1e3, { leading: !0, trailing: !1 })
                );
                n.$on("$destroy", function () {
                  r = null;
                });
              },
            };
          }),
          (n.$name = "windowOpenSimple"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.WindowOpenSimple = c;
      l = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e) {
            return {
              restrict: "A",
              link: function (o, s, h) {
                var c = function (t) {
                  var w = null,
                    v = null,
                    l = u.UserProfile.AdditionalStatus,
                    a = n.Helpers.GetSimpleFancyboxOptions(),
                    s,
                    c,
                    b,
                    y,
                    p;
                  if (
                    ((a.padding = 15),
                    h["fancybox-top-ratio"] &&
                      (a.topRatio = parseInt(h["fancybox-top-ratio"])),
                    (s = ""),
                    u.LoginStatus != n.Models.LoginStatusEnum.Loggedin)
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Home/Login";
                    return;
                  }
                  if (
                    l == RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Register/CellPhoneVerify";
                    return;
                  }
                  if (
                    l == RegisteredAdditionallyStatusEnum.NeedWriteBankCard ||
                    l == RegisteredAdditionallyStatusEnum.NeedWriteIdentify ||
                    l ==
                      RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword ||
                    l ==
                      RegisteredAdditionallyStatusEnum.NeedWriteAttachIdentity
                  ) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Register/RegisterAdditionally";
                    return;
                  }
                  (h.fboxOpenCheckRegisteredStatus &&
                    (s = h.fboxOpenCheckRegisteredStatus),
                  h.fboxCheckAsync &&
                    ((w = e.defer()),
                    (c = null),
                    (c = f(h.fboxCheckAsync)),
                    (v = c(o, { $event: t }))),
                  !h.fboxCheck ||
                    ((c = null),
                    (c = f(h.fboxCheck)),
                    (b = c(o, { $event: t })),
                    b)) &&
                    (h.fboxFunc &&
                      ((y = null), (y = f(h.fboxFunc)), y(o, { $event: t })),
                    (a.href = s),
                    (a.afterClose = function () {
                      i.Emit("fancyBoxClose", s || "");
                    }),
                    (p = s.charAt(0) === "#" ? s : "#" + s),
                    v == null
                      ? $(p).show()
                      : (v.then(function (n) {
                          n &&
                            r(function () {
                              $(p).show();
                            });
                        }),
                        w.resolve()));
                };
                s.on("click", c);
                o.$on("$destroy", function () {
                  t.remove("targetUrl");
                  c = null;
                });
              },
            };
          }),
          (t.$name = "fboxOpenCheckRegisteredStatus"),
          (t.$inject = [
            "$cookies",
            "messageBus",
            "$timeout",
            "appContext",
            "$parse",
            "$q",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.FancyBoxOpenWithCheckRegisteredStatus = l;
      a = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f) {
            return {
              restrict: "A",
              link: function (i, e, o) {
                var s = function (t) {
                  var h = null,
                    c = null,
                    y = u.UserProfile.AdditionalStatus,
                    s = "",
                    a,
                    e,
                    v,
                    l;
                  if (u.LoginStatus != n.Models.LoginStatusEnum.Loggedin) {
                    location.href =
                      location.protocol +
                      "//" +
                      location.host +
                      "/Mobile/Home/Login";
                    return;
                  }
                  if (
                    o.enableProtect === "true" &&
                    (n.Helpers.SetLocalStorageItem(
                      "lpt:prev",
                      location.href,
                      !0
                    ),
                    [1, 2].some(function (n) {
                      return n === u.UserProfile.MemberStatus;
                    }) && !u.UserProfile.IsSetWithdrawal)
                  ) {
                    location.href =
                      "//" + location.host + "/Mobile/Home/SetProtectCode";
                    return;
                  }
                  (o.fboxOpenWithoutCheckRegisteredStatus &&
                    (s = o.fboxOpenWithoutCheckRegisteredStatus),
                  (a = s.charAt(0) === "#" ? s : "#" + s),
                  o.fboxCheckAsync &&
                    ((e = null),
                    (e = f(o.fboxCheckAsync)),
                    (h = e(i, { $event: t }))),
                  !o.fboxCheck ||
                    ((e = null),
                    (e = f(o.fboxCheck)),
                    (v = e(i, { $event: t })),
                    v)) &&
                    (o.fboxFunc && (c = f(o.fboxFunc)),
                    (l = function () {
                      $(a).show();
                      c && c(i, { $event: t });
                    }),
                    h == null
                      ? l()
                      : h.then(function (n) {
                          n &&
                            r(function () {
                              l();
                            });
                        }));
                };
                e.on("click", s);
                i.$on("$destroy", function () {
                  t.remove("targetUrl");
                  s = null;
                });
              },
            };
          }),
          (t.$name = "fboxOpenWithoutCheckRegisteredStatus"),
          (t.$inject = [
            "$cookies",
            "messageBus",
            "$timeout",
            "appContext",
            "$parse",
            "$q",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.FancyBoxOpenWithoutCheckRegisteredStatus = a;
      v = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var u = t.$watch(
                  function (n) {
                    return n.$eval(r.bindHtmlCompile);
                  },
                  function (r) {
                    i.html(r);
                    n(i.contents())(t);
                  }
                );
                t.$on("destroy", function () {
                  u();
                });
              },
            };
          }),
          (n.$name = "bindHtmlCompile"),
          (n.$inject = ["$compile", n.DirectiveFactory]),
          n
        );
      })();
      t.BindHtmlCompile = v;
      y = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var r = !1,
              u = function (t) {
                var i = n.Helpers.CopyText(t);
                i
                  ? (r = !0)
                  : ((r = !1),
                    n.Helpers.Alert(
                      n.Helpers.ChangeLanguage("該瀏覽器不支持此操作"),
                      SweetAlertTypeEnum.error
                    ));
              };
            return {
              restrict: "A",
              link: function (t, f, e) {
                f.bind("click", function (f) {
                  var s, h, a, l;
                  if (
                    (e.copyToClipboardFunc &&
                      ((h = i(e.copyToClipboardFunc)),
                      h && (s = h(t, { $event: f }))),
                    e.copyToClipboardText &&
                      e.copyToClipboardText &&
                      (s = e.copyToClipboardText),
                    u(s.toString()),
                    r)
                  ) {
                    var o = jQuery("#hfLanguageCode").val(),
                      c = $("#hfCopySuccessImg").val(),
                      v =
                        o.toLowerCase() == "zh-cn"
                          ? n.Helpers.ChangeLanguage("複製成功") + "！"
                          : n.Helpers.ChangeLanguage("複製成功") + "!";
                    (o.toLowerCase() == "vi-vn" ||
                      o.toLowerCase() == "th-th") &&
                      (c = c.replace(
                        /\/Content\/Images\//gi,
                        "/Content/Images/" + o + "/"
                      ));
                    a =
                      '<div class="mask_all" style="display: block;" id="copyPOPSuc">\n                                        <div class="popup_container">\n                                            <div class="popup_bg">\n                                                <div class="popup popupShort">\n                                                    <div class="popup_In noWrap">\n                                                        <!--內容-->\n                                                        <div class="popupS_T"><img src="' +
                      c +
                      '" /></div>\n                                                        <div class="popupS_In">' +
                      v +
                      "</div>\n                                                        <!--內容 end-->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>";
                    $(document.body).append(a);
                    l = setInterval(function () {
                      clearInterval(l);
                      $("#copyPOPSuc").remove();
                    }, 2e3);
                    $("#copyPOPSuc").on("click", function () {
                      clearInterval(l);
                      this.remove();
                    });
                  }
                });
              },
            };
          }),
          (t.$name = "copyToClipboard"),
          (t.$inject = ["$window", "$parse", t.DirectiveFactory]),
          t
        );
      })();
      t.CopyToClipboard = y;
      p = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              priority: -200,
              link: function (n, t, i) {
                var r = i.type,
                  u,
                  f;
                r = r.toLowerCase();
                r === "submit"
                  ? ((u = t.parents("form")),
                    u.submit(function () {
                      u.valid != null
                        ? u.valid() &&
                          (i.submitAutoDisable && t.val(i.submitAutoDisable),
                          (window.onbeforeunload = function () {
                            t.attr("disabled", "true");
                            t.addClass("btn-disabled");
                          }))
                        : (i.submitAutoDisable && t.val(i.submitAutoDisable),
                          (window.onbeforeunload = function () {
                            t.attr("disabled", "true");
                            t.addClass("btn-disabled");
                          }));
                    }))
                  : r === "button" &&
                    ((f = t.parents("form")),
                    t.click(function (n) {
                      f.valid != null
                        ? f.valid()
                          ? (i.submitAutoDisable && t.val(i.submitAutoDisable),
                            t.attr("disabled", "true"),
                            t.addClass("btn-disabled"))
                          : (n.stopImmediatePropagation(), n.preventDefault())
                        : (i.submitAutoDisable && t.val(i.submitAutoDisable),
                          (window.onbeforeunload = function () {
                            t.attr("disabled", "true");
                            t.addClass("btn-disabled");
                          }));
                    }));
              },
            };
          }),
          (n.$name = "submitAutoDisable"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.SubmitAutoDisable = p;
      w = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = t.val();
                t.keyup(function () {
                  var i = t.prop("selectionStart");
                  u != t.val() &&
                    n.$apply(function () {
                      t.val(t.val().replace(/([^0-9])|(^[0,-,.])$/g, ""));
                      r.$setViewValue(t.val());
                      var n = u.length == t.val().length ? 1 : 0;
                      u = t.val();
                      t.prop("selectionEnd", i - n);
                    });
                });
              },
            };
          }),
          (n.$name = "validateInputNumber"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ValidateInputNumber = w;
      b = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              scope: { validateInputCustomBlur: "&" },
              link: function (n, t, i, r) {
                var u,
                  f,
                  e = i.allowTrimSpace ? i.allowTrimSpace : !1,
                  o = i.addSpace ? i.addSpace : !1;
                t.bind("input keyup click mousedown", function () {
                  var c = t[0].selectionEnd,
                    s,
                    h;
                  u = t.val();
                  e && (u = u.replace(/ /g, ""));
                  s = i.validateInputCustom;
                  h = new RegExp(s);
                  n.$apply(function () {
                    var n, i;
                    if (h.test(u))
                      o
                        ? ((n = u.replace(/\s/g, "")),
                          (u = n.replace(/(\d{4})(?=\d)/g, "$1 ")),
                          t.prop("selectionStart", u.length),
                          t.prop("selectionEnd", u.length),
                          (f = u),
                          r.$setViewValue(u, "input"),
                          r.$render())
                        : ((f = u), r.$setViewValue(u), r.$render());
                    else {
                      if (u == null || f == null) return;
                      i = u.length - f.length;
                      r.$setViewValue(f);
                      r.$render();
                      t.prop("selectionEnd", c - i);
                    }
                  }, !0);
                });
                i.validateInputCustomBlur &&
                  t.blur(function () {
                    n.$apply(function () {
                      t.val(n.validateInputCustomBlur({ val: t.val() }));
                      r.$setViewValue(t.val());
                      r.$render();
                      var u = t.parents("form");
                      u.validate().element("#" + i.id);
                    });
                  });
              },
            };
          }),
          (n.$name = "validateInputCustom"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ValidateInputCustom = b;
      k = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              scope: {
                ngModel: "=",
                validateInputRegCustomBlur: "&",
                validateInputRegCustomCallBack: "&",
              },
              link: function (t, i, r, u) {
                var b = r.allowTrimSpace ? r.allowTrimSpace == "true" : !0,
                  f = "",
                  k = r.notTrimNewline == "true",
                  c = k ? /\ +/g : /\s/g,
                  l = r.validateInputRegCustomImmediate
                    ? r.validateInputRegCustomImmediate == "true"
                    : !0,
                  a = Number(r.viewCultureMaxlength || "0"),
                  it = r.required,
                  e = null,
                  o = Number(r.maxLength || "0"),
                  v = r.tipsContent || "",
                  d = r.tipsContentAlignRight == "true",
                  g = r.tipsContentArrowLeft == "true",
                  nt = r.allowMask ? r.allowMask : !1,
                  s = r.tipsContentRefer || "",
                  h = 0,
                  y = function () {
                    return (
                      e == null &&
                        (e = jQuery(i).tooltipster({
                          contentAsHTML: !0,
                          content: "<span class='t_red'>" + v + "</span>",
                          side: ["top"],
                          delay: 100,
                          trigger: "custom",
                          timer: 3e3,
                          functionPosition: function (n, t, r) {
                            if (
                              ((r.target = 0),
                              (r.coord.left = $(i).offset().left),
                              s != "" && $("#" + s).length > 0)
                            )
                              r.coord.top = $("#" + s).offset().top - 43;
                            else if (d) {
                              var e = $(".tooltipster-box").width(),
                                u = $(i).offset().left + $(i).width() - e,
                                o = u,
                                f = $(i).parent().children(".icon_pw");
                              f && ((u += f.width()), (o += f.width() / 2));
                              r.target = g ? 0 : o + e;
                              r.coord.left = u;
                              r.coord.top += 15;
                            }
                            return r;
                          },
                        })),
                      e
                    );
                  },
                  tt = function () {
                    t.validateInputRegCustomCallBack({ $event: event });
                  },
                  p = function () {
                    if (r.id) {
                      var n = i.parents("form");
                      if (n)
                        try {
                          n.validate().element("#" + r.id);
                        } catch (t) {}
                    }
                  },
                  w;
                i.bind("keydown", function () {
                  h = i[0].selectionEnd;
                });
                w = t.$watch(
                  function () {
                    return u.$modelValue;
                  },
                  function (t, e) {
                    var it, d, rt, g;
                    if (t !== e) {
                      var k = 0,
                        s = n.Helpers.IsExist(t) ? t : "",
                        w = n.Helpers.IsExist(e) ? e : "",
                        ut = s === f;
                      if (!ut) {
                        if (
                          (b === !0 &&
                            ((s = s.replace(c, "")), (w = w.replace(c, ""))),
                          nt)
                        )
                          if (w.indexOf("*") >= 0 && s.indexOf("*") >= 0)
                            s = "";
                          else {
                            if (w == "" && s.indexOf("*") >= 0) {
                              u.$setViewValue(s);
                              u.$render();
                              return;
                            }
                            w != "" &&
                              w.indexOf("*") == -1 &&
                              s.indexOf("*") >= 0 &&
                              (s = s.replace(/\*/g, ""));
                          }
                        it = new RegExp(r.validateInputRegCustom);
                        a > 0 &&
                          s != undefined &&
                          ((d =
                            n.SiteCultureMethod.Provider().GetViewCultureLength(
                              s,
                              a
                            )),
                          d.ContentLength >= d.OverMaxlengthIndex &&
                            (k = d.OverMaxlengthIndex));
                        o > 0 && s != undefined && s.length > o && (k = o);
                        k > 0 &&
                          (w == "" && (s = s.substr(0, k)),
                          s.length > k && (s = w));
                        v != "" &&
                          (k > 0
                            ? (y().tooltipster("open"),
                              (rt =
                                $.tooltipster.instancesLatest()[0].__namespace),
                              $("#" + rt + " .tooltipster-content").addClass(
                                "content-icon"
                              ))
                            : y().tooltipster("close"));
                        g = it.test(s);
                        f = g ? s : w;
                        u.$setViewValue(f);
                        u.$render();
                        (g && s != w) ||
                          (i.prop("selectionStart", h),
                          i.prop("selectionEnd", h));
                        r.validateInputRegCustomCallBack && tt();
                        l && p();
                      }
                    }
                  }
                );
                r.validateInputRegCustomBlur &&
                  i.blur(function () {
                    t.$apply(function () {
                      i.val(t.validateInputRegCustomBlur({ val: i.val() }));
                      u.$setViewValue(i.val());
                      u.$render();
                      l && p();
                    });
                  });
                t.$on("destroy", function () {
                  w();
                });
              },
            };
          }),
          (t.$name = "validateInputRegCustom"),
          (t.$inject = [t.DirectiveFactory]),
          t
        );
      })();
      t.ValidateInputRegCustom = k;
      d = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var e = u.noRedirect && u.noRedirect == "true",
                  f = function (i) {
                    var r = t.UserProfile.AdditionalStatus;
                    if (t.LoginStatus != n.Models.LoginStatusEnum.Loggedin) {
                      i.preventDefault();
                      location.href =
                        location.protocol +
                        "//" +
                        location.host +
                        "/Mobile/Home/Login";
                      return;
                    }
                    if (
                      r == RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                    ) {
                      i.preventDefault();
                      location.href =
                        location.protocol +
                        "//" +
                        location.host +
                        "/Mobile/Register/CellPhoneVerify";
                      return;
                    }
                    if (
                      (r ==
                        RegisteredAdditionallyStatusEnum.NeedWriteBankCard ||
                        r ==
                          RegisteredAdditionallyStatusEnum.NeedWriteIdentify ||
                        r ==
                          RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword ||
                        r ==
                          RegisteredAdditionallyStatusEnum.NeedWriteAttachIdentity) &&
                      !e
                    ) {
                      i.preventDefault();
                      location.href =
                        location.protocol +
                        "//" +
                        location.host +
                        "/Mobile/Register/RegisterAdditionally";
                      return;
                    }
                  };
                r.on("click", f);
                i.$on("$destroy", function () {
                  f = null;
                });
              },
            };
          }),
          (t.$name = "checkRegisteredAdditionally"),
          (t.$inject = ["appContext", t.DirectiveFactory]),
          t
        );
      })();
      t.CheckRegisteredAdditionally = d;
      g = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                n.$watch("trigger", function () {
                  $(t).click(function () {
                    return (
                      $("html,body").animate(
                        { scrollTop: i.focusMoveScroll },
                        600
                      ),
                      !1
                    );
                  });
                });
              },
            };
          }),
          (n.$name = "focusMoveScroll"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.FocusMoveScroll = g;
      nt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            var i = function () {
                var n = [
                  "iPad Simulator",
                  "iPhone Simulator",
                  "iPod Simulator",
                  "iPad",
                  "iPhone",
                  "iPod",
                ];
                if (!!navigator.platform)
                  while (n.length)
                    if (navigator.platform === n.pop()) return !0;
                return !1;
              },
              t = !1;
            return (
              window.addEventListener(
                "orientationchange",
                function () {
                  t =
                    window.orientation !== 0 ||
                    window.orientation.toString() !== "0";
                },
                !1
              ),
              {
                restrict: "A",
                link: function (r, u, f) {
                  var e = f.focusToTop || "",
                    o = i();
                  $(u).focus(function () {
                    n(function () {
                      var f =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop ||
                          window.pageYOffset,
                        i = $(u)[0].getBoundingClientRect().top,
                        n = 10,
                        r = 600;
                      return (
                        $(".bg_header").length !== 0 &&
                          $(".bg_header").css("display") !== "none" &&
                          (n += $(".bg_header").height()),
                        $(".infor").length !== 0 &&
                          $(".infor").css("display") !== "none" &&
                          (n += $(".infor").height()),
                        $(".container_T").length &&
                          (n += $(".container_T").height()),
                        $(".game_sum").length && (i += $(".game_sum").height()),
                        o && (t && (n = 5), (r = 300)),
                        e.length != 0 &&
                          $(e).animate({ scrollTop: f + i - n }, r),
                        $("html,body").animate({ scrollTop: f + i - n }, r),
                        !1
                      );
                    }, 1);
                  });
                },
              }
            );
          }),
          (n.$name = "focusToTop"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.FocusToTop = nt;
      tt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i) {
                t.$watch(
                  function () {
                    return i.attr("disabled");
                  },
                  function (t) {
                    n(function () {
                      t == null && i.focus();
                    }, 600);
                  }
                );
              },
            };
          }),
          (n.$name = "focusWhenNotDisable"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.FocusWhenNotDisable = tt;
      it = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t) {
                $(t).click(function () {
                  var e = document,
                    f = e.getElementById(t.context.attributes[1].nodeValue),
                    r,
                    i = f,
                    n,
                    u;
                  /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
                    ? ((i.contentEditable = "true"),
                      (i.readOnly = !0),
                      (n = document.createRange()),
                      n.selectNodeContents(i),
                      (u = window.getSelection()),
                      u.removeAllRanges(),
                      u.addRange(n),
                      /Windows Phone/i.test(navigator.userAgent) == !1 &&
                        i.setSelectionRange(0, 999999))
                    : ((r = window.getSelection()),
                      (n = document.createRange()),
                      n.selectNodeContents(f),
                      r.removeAllRanges(),
                      r.addRange(n));
                });
              },
            };
          }),
          (n.$name = "selectServiceId"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.SelectServiceID = it;
      rt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i) {
            return {
              restrict: "E",
              link: function (n, t, r) {
                var u = !0;
                r.startInterval != null && (u = r.startInterval === "true");
                i.GetLoggedinAreaInfo()
                  .then(function () {
                    u && i.StartCheckInterval();
                  })
                  .catch(function () {
                    i.StopCheckInterval();
                  });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "authorizeUserStatus"),
          (n.$inject = [
            "$interval",
            "appContext",
            "AppContextSvc",
            n.DirectiveFactory,
          ]),
          n
        );
      })();
      t.AuthorizeUserStatus = rt;
      ut = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var a = u.LogField,
                  l = i.prop("tagName"),
                  o = r.defaultKey,
                  s = r.defaultValue,
                  h,
                  f,
                  c,
                  e;
                switch (l) {
                  case "SELECT":
                    h = r.logMapperData;
                    f = new n.Models.LogFieldData();
                    f.FieldDisplayName =
                      r.logTitle != undefined ? r.logTitle : r.title;
                    t.$watch(r.ngModel, function () {
                      f.MapperData = [];
                      o && s && f.MapperData.push({ Value: s, Text: o });
                      angular.forEach(i.find("option"), function (n) {
                        var t = {
                          Value: n.value.replace(/.+\:/g, ""),
                          Text: n.text,
                        };
                        f.MapperData.push(t);
                      });
                      u.LogField[h] = f;
                    });
                    break;
                  case "INPUT":
                    if (i.attr("type") != "radio") break;
                    c = r.logMapperData;
                    e = new n.Models.LogFieldData();
                    e.FieldDisplayName =
                      r.logTitle != undefined ? r.logTitle : r.title;
                    t.$watch(r.ngModel, function () {
                      e.MapperData = [];
                      o && s && e.MapperData.push({ Value: s, Text: o });
                      var n = r.name;
                      jQuery("input[name='" + n + "']").each(function (n, t) {
                        var i = {
                          Value: jQuery(t).val().trim(),
                          Text: jQuery(t).parent().text().trim(),
                        };
                        e.MapperData.push(i);
                      });
                      u.LogField[c] = e;
                    });
                }
              },
            };
          }),
          (t.$name = "logMapperData"),
          (t.$inject = [
            "$q",
            "$parse",
            "$timeout",
            "LogSvc",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.LogMapperData = ut;
      ft = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              require: "ngModel",
              scope: { source: "=emailSource" },
              link: function (i, r, u, f) {
                var a = u.allowTrimSpace ? u.allowTrimSpace : !1,
                  v = u.emailAutocompleteBlurDisable
                    ? u.emailAutocompleteBlurDisable === "true"
                    : !0,
                  s = /^[\w@.]*$/,
                  e = "",
                  y = "",
                  h = "",
                  p = u.emailAllowMask ? u.emailAllowMask : !1,
                  c = function () {
                    e = r.val();
                    var n = r[0].selectionEnd;
                    a && (e = e.replace(/\s+/g, ""));
                    i.$apply(function () {
                      s.test(e) && ((y = e), f.$setViewValue(e), f.$render());
                    }, !0);
                  },
                  o = {
                    source: [
                      "qq.com",
                      "163.com",
                      "sina.com",
                      "gmail.com",
                      "126.com",
                      "139.com",
                      "189.com",
                      "sohu.com",
                      "msn.com",
                      "hotmail.com",
                      "yahoo.com",
                      "yahoo.com.cn",
                      "live.cn",
                    ],
                    position: "bottom",
                    separator: "@",
                    zIndex: 1,
                    onSelected: c,
                    isOnBlurDisable: v,
                    filter: function (n) {
                      if (r.attr("maxlength") != undefined) {
                        var t = parseInt(r.attr("maxlength"));
                        if (n.length + 15 <= t) return n;
                      } else return n;
                    },
                  },
                  l;
                angular.isDefined(i.source) &&
                  i.source.length > 0 &&
                  (o.source = i.source);
                o.source.sort();
                r.focus(function () {
                  t(function () {
                    r.completer(o);
                  }, 1e3);
                });
                $(r).on("keyup input", c);
                l = i.$watch(
                  function () {
                    return f.$modelValue;
                  },
                  function (t, i) {
                    var r, u, e;
                    if (t !== i) {
                      if (
                        ((r = n.Helpers.IsExist(t) ? t : ""),
                        (u = n.Helpers.IsExist(i) ? i : ""),
                        p)
                      )
                        if (u.indexOf("*") >= 0 && r.indexOf("*") >= 0) r = "";
                        else {
                          if (u == "" && r.indexOf("*") >= 0) {
                            f.$setViewValue(r);
                            f.$render();
                            return;
                          }
                          u != "" &&
                            u.indexOf("*") == -1 &&
                            r.indexOf("*") >= 0 &&
                            (r = r.replace(/\*/g, ""));
                        }
                      e = s.test(r);
                      h = e ? r : u;
                      f.$setViewValue(h);
                      f.$render();
                    }
                  }
                );
                i.$on("$destroy", function () {
                  l();
                });
              },
            };
          }),
          (t.$name = "emailAutocomplete"),
          (t.$inject = ["$timeout", t.DirectiveFactory]),
          t
        );
      })();
      t.EmailAutocomplete = ft;
      et = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                t.bind("error", function () {
                  i.src != i.onErrorSrc && i.$set("src", i.onErrorSrc);
                });
              },
            };
          }),
          (n.$name = "onErrorSrc"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.OnErrorSrc = et;
      ot = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = function (n) {
                  if (!angular.isUndefined(n)) {
                    var t = n.toUpperCase();
                    return t !== n && (r.$setViewValue(t), r.$render()), t;
                  }
                };
                r.$parsers.push(u);
                u(n[i.ngModel]);
              },
            };
          }),
          (n.$name = "capitalize"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.Capitalize = ot;
      st = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                n.$watch(i.bankAccount, function (n) {
                  if (n) {
                    var i = n
                      .replace(/[^\dA-Z]/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim();
                    jQuery(t).text(i);
                  }
                });
              },
            };
          }),
          (n.$name = "bankAccount"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.BankAccount = st;
      ht = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            var n = function (n, t, i) {
                var r, u;
                if (n == null) return "";
                if (((r = ""), i != "")) for (u = t; u < n.length; u++) r += i;
                return n.substr(0, t) + r;
              },
              t = function (n, t, i) {
                var r, u;
                if (n == null) return "";
                if (((r = ""), i != "")) for (u = t; u < n.length; u++) r += i;
                return r + n.slice(-t);
              },
              i = function (n, t, i) {
                var r, u;
                if (n == null) return "";
                if ((t < 0 && (t = n.length), (r = ""), i != ""))
                  for (u = 0; u < t; u++) r += i;
                return r + n.slice(-(n.length - t));
              },
              r = function (n, t, i) {
                var r, u;
                if (n == null) return "";
                if ((t < 0 && (t = n.length), (r = ""), i != ""))
                  for (u = 0; u < t; u++) r += i;
                return n.substr(0, n.length - t) + r;
              };
            return {
              restrict: "A",
              require: "ngModel",
              link: function (u, f, e, o) {
                var s = u.$watch(
                  function () {
                    return o.$modelValue;
                  },
                  function (u) {
                    u != null &&
                      (e.addMaskExceptDirection == "front" &&
                        f.html(
                          n(u, e.addMaskExceptNumber, e.addMaskReplaceMark)
                        ),
                      e.addMaskExceptDirection == "back" &&
                        f.html(
                          t(u, e.addMaskExceptNumber, e.addMaskReplaceMark)
                        ),
                      e.addMaskKeepDirection == "front" &&
                        f.html(
                          i(u, e.addMaskExceptNumber, e.addMaskReplaceMark)
                        ),
                      e.addMaskKeepDirection == "back" &&
                        f.html(
                          r(u, e.addMaskExceptNumber, e.addMaskReplaceMark)
                        ));
                  }
                );
                u.$on("destroy", function () {
                  s();
                });
              },
            };
          }),
          (n.$name = "addMask"),
          (n.$inject = ["$window", "$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.AddMask = ht;
      ct = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var r = function (n, t, i) {
              i === !0
                ? (n.attr("type", "text"),
                  t.removeClass("off"),
                  n.siblings(".txtName").show())
                : (n.attr("type", "password"),
                  t.addClass("off"),
                  n.siblings(".txtName").hide());
            };
            return {
              restrict: "A",
              link: function (u, f, e) {
                var s, o, h, c;
                u.open = t(e.passwordEye)(u);
                u.eyehidden = t(e.eyeHidden)(u);
                s = angular.element(f);
                o = s.parent();
                o.addClass("pwON");
                o.append("<span class='icon_pw'></span>");
                h = o.find(".icon_pw");
                c = s.siblings(".txtName");
                e.passwordEyeStyle &&
                  h.setAttribute("style", e.passwordEyeStyle);
                u.eyehidden && h.hide();
                u.$watch(
                  function () {
                    return !u.eyehidden == !0;
                  },
                  function (n) {
                    n === !1 ? h.hide() : h.show();
                  }
                );
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
                  function (n, i) {
                    f.attr("id") === i.elemId &&
                      ((u.open = t(e.passwordEye)(u)),
                      (u.eyehidden = t(e.eyeHidden)(u)),
                      r(s, o, u.open));
                  }
                );
                r(s, o, u.open);
                h.on("click", function () {
                  u.open =
                    f.attr("id") == undefined
                      ? !u.open
                      : f.attr("type").toLowerCase() == "password";
                  r(s, o, u.open);
                });
                c.bind("click", function (n) {
                  var t = $(n.target).hide();
                });
                jQuery(document).bind("click touchend", function (n) {
                  var t = $(n.target);
                  t.closest(".pwON").length == 0 && $(".txtName").hide();
                });
              },
            };
          }),
          (t.$name = "passwordEye"),
          (t.$inject = ["$parse", "messageBus", t.DirectiveFactory]),
          t
        );
      })();
      t.passwordEye = ct;
      lt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = parseInt(i.roundNum) || 0;
                n.$watch(
                  function () {
                    return r.$modelValue;
                  },
                  function (n) {
                    if (
                      n != null &&
                      n != NaN &&
                      n !== "" &&
                      !new RegExp(/^(0|-?[1-9][0-9]*)$/).test(n)
                    ) {
                      var i = function (n, t) {
                          var i = n < 0 ? -1 : 1;
                          return (
                            (n = n * i),
                            (Math.round(n * Math.pow(10, t || 0)) /
                              Math.pow(10, t || 0)) *
                              i
                          );
                        },
                        t = i(n, u).toFixed(u);
                      new RegExp(/^(-?[1-9]?[0-9]*.0+)$/).test(t) &&
                        (t = Number(t).toFixed(0));
                      r.$setViewValue(t);
                      r.$render();
                    }
                  }
                );
              },
            };
          }),
          (n.$name = "roundNum"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.RoundNum = lt;
      at = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r) {
            return {
              restrict: "A",
              require: "ngModel",
              scope: {},
              template:
                '<table ng-show="usepoint===\'false\'" class="numInputArea {{customClass}}"><tbody><tr><td class="typeNum {{numberClass}} number1"></td><td class="typeNum {{numberClass}} number2"></td><td class="typeNum {{numberClass}} number3"></td><td class="typeNum {{numberClass}} number4"></td><td class="typeNum {{numberClass}} number5"></td><td class="typeNum {{numberClass}} numClear"></td></tr><tr><td class="typeNum {{numberClass}} number6"></td><td class="typeNum {{numberClass}} number7"></td><td class="typeNum {{numberClass}} number8"></td><td class="typeNum {{numberClass}} number9"></td><td colspan="2" class="typeNum {{numberClass}} number0"></td></tr></tbody></table><table ng-show="usepoint===\'true\'" class="numInputArea"><tbody><tr><td class="typeNum {{numberClass}} number1"></td><td class="typeNum {{numberClass}} number2"></td><td class="typeNum {{numberClass}} number3"></td><td class="typeNum {{numberClass}} number4"></td><td class="typeNum {{numberClass}} number5"></td><td class="typeNum {{numberClass}} numClear"></td></tr><tr><td class="typeNum {{numberClass}} number6"></td><td class="typeNum {{numberClass}} number7"></td><td class="typeNum {{numberClass}} number8"></td><td class="typeNum {{numberClass}} number9"></td><td class="typeNum {{numberClass}} number0"></td><td class="typeNum {{numberClass}} numPoint"></td></tr></tbody></table>',
              link: function (u, f, e, o) {
                var v = "." + e["class"],
                  l,
                  h,
                  c;
                e.customclass && (u.customClass = e.customclass);
                u.usepoint = e.usePoint ? e.usePoint : "false";
                u.numberClass =
                  n.SiteCultureMethod.Provider().MultiNumericKeypadNumberCss;
                l = 15;
                e.maxLength && (l = parseInt(e.maxLength));
                var s = _.toArray(f.context.classList),
                  y = e.addSpace ? e.addSpace : !1,
                  a = null;
                e.ngValidClick && (a = t(e.ngValidClick));
                h = null;
                c = null;
                f.find(".numClear")
                  .bind("touchstart", function () {
                    r(function () {
                      _.forEach(s, function (n) {
                        var t = $("#" + n);
                        t.addClass("keyIn on");
                      });
                    });
                    i.cancel(h);
                    r.cancel(c);
                    var n = function () {
                      var n = "",
                        t = o.$viewValue.toString();
                      n = t.substring(0, t.length - 1);
                      n == ""
                        ? (_.forEach(s, function (n) {
                            $("#" + n).removeClass("keyIn");
                            $("#" + n).css("color", "#999");
                          }),
                          e.money === "1" &&
                            _.forEach(s, function (n) {
                              $("#" + n).removeClass("textMoney");
                            }),
                          o.$setViewValue(""),
                          o.$render(),
                          i.cancel(h),
                          a && a(u.$parent, { $event: event }))
                        : (o.$setViewValue(n), o.$render());
                    };
                    c = r(function () {
                      h = i(n, 100);
                    }, 1e3);
                  })
                  .bind("touchend", function () {
                    i.cancel(h);
                    r.cancel(c);
                    var n = "",
                      t = o.$viewValue.toString();
                    n = t.substring(0, t.length);
                    n.length < 1 &&
                      (e.customDelete
                        ? $("." + e.customDelete + ".btn_closeKB").css(
                            "display",
                            "none"
                          )
                        : $("div.btn_closeKB").css("display", "none"));
                  })
                  .bind("touchcancel", function () {
                    i.cancel(h);
                    r.cancel(c);
                    var n = "",
                      t = o.$viewValue.toString();
                    n = t.substring(0, t.length);
                    n.length < 1 &&
                      (e.customDelete
                        ? $("." + e.customDelete + ".btn_closeKB").css(
                            "display",
                            "none"
                          )
                        : $("div.btn_closeKB").css("display", "none"));
                  });
                f.on("touchstart", "td.typeNum", function () {
                  var i, c, a, h;
                  if (
                    (_.forEach(s, function (n) {
                      $("#" + n).addClass("keyIn on");
                    }),
                    $("#" + e["class"]).attr("disabled") !== "disabled")
                  ) {
                    var n = "",
                      t = "",
                      r = $(this).attr("class").split(/\s+/);
                    for (i = 0; i < r.length; i++)
                      r[i].indexOf("number") != -1 &&
                        (t = r[i].replace("number", "")),
                        r[i].indexOf("numPoint") != -1 && (t = ".");
                    if (o.$viewValue)
                      t
                        ? (n =
                            o.$viewValue.indexOf(".") != -1 &&
                            (t == "." ||
                              o.$viewValue.length - o.$viewValue.indexOf(".") >
                                2 ||
                              (t == "0" &&
                                o.$viewValue.length ==
                                  o.$viewValue.indexOf("0") + 1))
                              ? o.$viewValue
                              : o.$viewValue + t)
                        : ((c = o.$viewValue.toString()),
                          (n = c.substring(0, c.length - 1)));
                    else {
                      if (e.noZero == "1" && t == "0") return;
                      t == "." && (t = "");
                      n = t;
                    }
                    if (n == "" || n == "确认" || n == "+")
                      o.$setViewValue(""),
                        o.$render(),
                        _.forEach(s, function (n) {
                          $("#" + n).css("color", "#999");
                        }),
                        e.money === "1" &&
                          _.forEach(s, function (n) {
                            $("#" + n).removeClass("textMoney");
                          });
                    else {
                      if (
                        (_.forEach(s, function (n) {
                          $("#" + n).css("color", "#000");
                        }),
                        e.money === "1" &&
                          _.forEach(s, function (n) {
                            $("#" + n).addClass("textMoney");
                          }),
                        n.length > l)
                      )
                        return;
                      y
                        ? ((a = n.replace(/\s/g, "")),
                          (n = a.replace(/(\d{4})(?=\d)/g, "$1 ")),
                          f.prop("selectionStart", n.length),
                          f.prop("selectionEnd", n.length),
                          o.$setViewValue(n, "input"),
                          o.$render())
                        : e.plus
                        ? n.indexOf("+") != -1
                          ? (o.$setViewValue(n), o.$render())
                          : (o.$setViewValue("+" + n), o.$render())
                        : (o.$setViewValue(n), o.$render());
                    }
                    if (
                      (n.length > 0
                        ? e.customDelete
                          ? $("." + e.customDelete + ".btn_closeKB").css(
                              "display",
                              "block"
                            )
                          : $("div.btn_closeKB").css("display", "block")
                        : e.customDelete
                        ? $("." + e.customDelete + ".btn_closeKB").css(
                            "display",
                            "none"
                          )
                        : $("div.btn_closeKB").css("display", "none"),
                      e.restart)
                    ) {
                      h = f.attr("restart");
                      $(document)
                        .off("click")
                        .on("click", function () {
                          var n = $(event.target);
                          (n.hasClass("typeNum") && n.is("td")) ||
                            ($(v).find(".numInputArea").css("display") !==
                            "none"
                              ? ($(document).off("click"), u.$parent.$apply(h))
                              : $(document).off("click"));
                        });
                    }
                    if (e.numericKeypadCallBack) {
                      h = f.attr("numeric-keypad-call-back");
                      $(document)
                        .off("click touchstart")
                        .on("click touchstart", function () {
                          var n = $(event.target);
                          n.hasClass("typeNum") &&
                            n.is("td") &&
                            u.$parent.$apply(h);
                        });
                    }
                  }
                });
                u.$on("$destroy", function () {});
              },
            };
          }),
          (t.$name = "multiNumericKeypad"),
          (t.$inject = ["$parse", "$interval", "$timeout", t.DirectiveFactory]),
          t
        );
      })();
      t.MultiNumericKeypad = at;
      vt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function (t, i, r, u) {
                var h = "." + r.id,
                  a = r.openKeyboard,
                  c,
                  l,
                  s,
                  e,
                  f,
                  o;
                a &&
                  ((c = $("." + r.id).find(".numInputArea")),
                  c.css("display", "table"));
                l = r.defaultFocus;
                l && i.addClass("keyIn on");
                s = function () {
                  var t = $("#" + r.id).attr("disabled") === "disabled",
                    n;
                  t
                    ? i.removeClass("on")
                    : ($("div").removeClass("on"), i.addClass("keyIn on"));
                  r.numericClose && r.$set("isNumericClose", "true");
                  n = "";
                  n = i.text();
                  r.plus &&
                    (n.indexOf("+") != -1
                      ? (u.$setViewValue(n), u.$render())
                      : (u.$setViewValue("+" + n), u.$render()));
                  n.length > 0
                    ? r.customDelete
                      ? $("." + r.customDelete + ".btn_closeKB").css(
                          "display",
                          "block"
                        )
                      : $("div.btn_closeKB").css("display", "block")
                    : r.customDelete
                    ? $("." + r.customDelete + ".btn_closeKB").css(
                        "display",
                        "none"
                      )
                    : $("div.btn_closeKB").css("display", "none");
                };
                $(".keyboard").css("outline", "none");
                r.numericKeypadSwitch || i.focusin(s);
                t.$watch(r.numericKeypadSwitch, function (n, t) {
                  n != t && (n === "true" ? i.unbind() : i.focusin(s));
                });
                i.focusout(function () {
                  i.removeClass("on");
                  $(this).text() === ""
                    ? (i.css("color", "#999"), i.removeClass("keyIn"))
                    : i.css("color", "#000");
                });
                e = null;
                r.numericClose &&
                  ((e = n(r.numericClose)), r.$set("isNumericClose", "false"));
                o = null;
                r.numericBlur &&
                  ((o = n(r.numericBlur)),
                  (f = function (n) {
                    if (o) {
                      var i = $(n.target);
                      (i.hasClass("typeNum") && i.is("a")) ||
                        ($(document).off("click", null, f),
                        o(t, { $event: n }));
                    }
                  }));
                $("#" + r.id).click(function (n) {
                  if (
                    (n.preventDefault(),
                    n.stopPropagation(),
                    i.attr("disabled") === "disabled")
                  ) {
                    i.blur();
                    return;
                  }
                  var o = $(h).find(".numInputArea"),
                    u = o.css("display");
                  if (
                    ($(".numInputArea").each(function () {
                      $(this).css("display") == "table" &&
                        ($(this).parent().attr("restart") === null ||
                          $(this).parent().attr("restart") === undefined ||
                          $(this).parent().hasClass(r.id) ||
                          t.$parent.$apply($(this).parent().attr("restart")));
                    }),
                    $(".numInputArea").css("display", "none"),
                    (u = u === "none" ? "table" : "none"),
                    o.css("display", u),
                    u === "none" ? i.removeClass("on") : i.addClass("on"),
                    f)
                  )
                    $(document).off("click", null, f).on("click", f);
                  e &&
                    r.isNumericClose === "true" &&
                    $(h).find(".numInputArea").css("display") === "none" &&
                    (r.$set("isNumericClose", "false"),
                    t.$evalAsync(function (n) {
                      e(t, { $event: n });
                    }));
                });
                $(document).contextmenu(function () {
                  return $("#" + r.id).is(":hidden");
                });
                t.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "multiShowNumericKeypad"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.MultiShowNumericKeypad = vt;
      yt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r) {
            var u = "#999",
              f = "#000",
              e = function (n) {
                return jQuery("#" + n).attr("disabled") === "disabled";
              };
            return {
              restrict: "A",
              require: "ngModel",
              scope: {},
              template:
                '<div ng-show="usechips===\'true\'" class="numPlusArea">\n                            <div class="typePlusNum number100">+100</div>\n                            <div class="typePlusNum number500">+500</div>\n                            <div class="typePlusNum number1000">+1000</div>\n                            <div class="typePlusNum number2000">+2000</div>\n                        </div>\n                        <table ng-show="usepoint===\'false\'" class="numInputArea {{customClass}}">\n                            <tbody>\n                                <tr>\n                                    <td class="typeNum {{numberClass}} number1"></td>\n                                    <td class="typeNum {{numberClass}} number2"></td>\n                                    <td class="typeNum {{numberClass}} number3"></td>\n                                    <td class="typeNum {{numberClass}} number4"></td>\n                                    <td class="typeNum {{numberClass}} number5"></td>\n                                    <td class="typeNum {{numberClass}} numClear"></td>\n                                </tr>\n                                <tr>\n                                    <td class="typeNum {{numberClass}} number6"></td>\n                                    <td class="typeNum {{numberClass}} number7"></td>\n                                    <td class="typeNum {{numberClass}} number8"></td>\n                                    <td class="typeNum {{numberClass}} number9"></td>\n                                    <td colspan="2" class="typeNum {{numberClass}} number0"></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <table ng-show="usepoint===\'true\'" class="numInputArea">\n                            <tbody>\n                                <tr>\n                                    <td class="typeNum {{numberClass}} number1"></td>\n                                    <td class="typeNum {{numberClass}} number2"></td>\n                                    <td class="typeNum {{numberClass}} number3"></td>\n                                    <td class="typeNum {{numberClass}} number4"></td>\n                                    <td class="typeNum {{numberClass}} number5"></td>\n                                    <td class="typeNum {{numberClass}} numClear"></td>\n                                </tr>\n                                <tr>\n                                    <td class="typeNum {{numberClass}} number6"></td>\n                                    <td class="typeNum {{numberClass}} number7"></td>\n                                    <td class="typeNum {{numberClass}} number8"></td>\n                                    <td class="typeNum {{numberClass}} number9"></td>\n                                    <td class="typeNum {{numberClass}} number0"></td>\n                                    <td class="typeNum {{numberClass}} numPoint"></td>\n                                </tr>\n                            </tbody>\n                        </table>',
              link: function (o, s, h, c) {
                var l = h.multiNumericKeypadV2,
                  p = h.numericKeypadChangeColor
                    ? t(h.numericKeypadChangeColor)(null)
                    : !0,
                  y,
                  w;
                if (!l) {
                  console.error(
                    "multi-numeric-keypad-v2 element not assign 'ID' name!"
                  );
                  return;
                }
                h.customclass && (o.customClass = h.customclass);
                o.usechips = h.useChips ? h.useChips : "false";
                o.usepoint = h.usePoint ? h.usePoint : "false";
                o.numberClass =
                  n.SiteCultureMethod.Provider().MultiNumericKeypadNumberCss;
                y = 15;
                h.maxLength && (y = parseInt(h.maxLength));
                var b = h.addSpace ? h.addSpace : !1,
                  a = null,
                  v = null;
                s.find(".numClear")
                  .bind("touchstart", function () {
                    i.cancel(a);
                    r.cancel(v);
                    var n = function () {
                      var n = "",
                        t = c.$viewValue.toString();
                      n = t.substring(0, t.length - 1);
                      n == ""
                        ? (h.money === "1" &&
                            $("#" + l).removeClass("textMoney"),
                          c.$setViewValue(""),
                          c.$render(),
                          i.cancel(a))
                        : (c.$setViewValue(n), c.$render());
                    };
                    v = r(function () {
                      a = i(n, 100);
                    }, 1e3);
                  })
                  .bind("touchend", function () {
                    i.cancel(a);
                    r.cancel(v);
                  })
                  .bind("touchcancel", function () {
                    i.cancel(a);
                    r.cancel(v);
                  });
                w = $("div.typePlusNum, td.typeNum");
                s.on("touchstart", w, function (n) {
                  var a, r, d, g, v, tt, it, rt;
                  if (
                    (n.preventDefault(),
                    jQuery("#" + l).focus(),
                    jQuery("#" + l)
                      .addClass("keyIn")
                      .addClass("on"),
                    (a = jQuery(n.target)),
                    a.hasClass("typePlusNum") &&
                      !a.hasClass("divTouchActive") &&
                      a.addClass("divTouchActive"),
                    a.hasClass("typeNum") &&
                      !a.hasClass("tdTouchActive") &&
                      a.addClass("tdTouchActive"),
                    !e(l))
                  ) {
                    o.maxamount = parseInt(h.maxAmount) || 0;
                    var t = "",
                      i = "",
                      k = !1,
                      nt = !1,
                      w = jQuery(n.target).attr("class").split(/\s+/);
                    for (r = 0; r < w.length; r++)
                      w[r].indexOf("typePlusNum") != -1 && (k = !k),
                        w[r].indexOf("number") != -1 &&
                          (i = w[r].replace("number", "")),
                        w[r].indexOf("numPoint") != -1 && (i = "."),
                        w[r].indexOf("numClear") != -1 && (nt = !0);
                    if (c.$viewValue)
                      i
                        ? c.$viewValue.indexOf(".") != -1 &&
                          (i == "." ||
                            c.$viewValue.length - c.$viewValue.indexOf(".") >
                              2 ||
                            (i == "0" &&
                              c.$viewValue.length ==
                                c.$viewValue.indexOf("0") + 1))
                          ? (t = c.$viewValue)
                          : k
                          ? ((v = Number(c.$viewValue) + Number(i)),
                            (k = !k),
                            (t = (
                              o.maxamount != 0 && v > o.maxamount
                                ? o.maxamount
                                : v
                            ).toString()))
                          : ((d = c.$viewValue + i),
                            (v = Number(d) || 0),
                            (t = (
                              o.maxamount != 0 && v > o.maxamount
                                ? o.maxamount
                                : d
                            ).toString()))
                        : nt
                        ? ((g = c.$viewValue.toString()),
                          (t = g.substring(0, g.length - 1)))
                        : (t = c.$viewValue.toString());
                    else {
                      if (h.noZero == "1" && i == "0") return;
                      i == "."
                        ? (t = "")
                        : ((v = Number(i) || 0),
                          (t = (
                            o.maxamount != 0 && v > o.maxamount
                              ? o.maxamount
                              : i
                          ).toString()));
                    }
                    if (
                      (t == "" || t == "确认" || t == "+"
                        ? (c.$setViewValue(""),
                          c.$render(),
                          p && jQuery("#" + l).css("color", u),
                          h.money === "1" &&
                            jQuery("#" + l).removeClass("textMoney"))
                        : (p && jQuery("#" + l).css("color", f),
                          h.money === "1" &&
                            jQuery("#" + l).addClass("textMoney"),
                          t.length <= y &&
                            (b
                              ? ((tt = t.replace(/\s/g, "")),
                                (t = tt.replace(/(\d{4})(?=\d)/g, "$1 ")),
                                s.prop("selectionStart", t.length),
                                s.prop("selectionEnd", t.length),
                                c.$setViewValue(t, "input"),
                                c.$render())
                              : h.plus
                              ? t.indexOf("+") != -1
                                ? (c.$setViewValue(t), c.$render())
                                : (c.$setViewValue("+" + t), c.$render())
                              : (c.$setViewValue(t), c.$render()))),
                      h.restart)
                    ) {
                      it = s.attr("restart");
                      $(document)
                        .off("click.restart")
                        .on("click.restart", function () {
                          var n = $(event.target);
                          (n.hasClass("typeNum") && n.is("td")) ||
                            n.hasClass("btn_closeKB") ||
                            (jQuery("div[multi-numeric-keypad-v2=" + l + "]")
                              .children("table")
                              .css("display") !== "none"
                              ? ($(document).off("click.restart"),
                                o.$parent.$apply(it))
                              : $(document).off("click.restart"));
                        });
                    }
                    if (h.numericKeypadCallBack) {
                      rt = function (n) {
                        (n === null || typeof n == "undefined") &&
                          (n =
                            window.event ||
                            arguments.callee.caller.arguments[0]);
                        var t = $(n.target);
                        t.hasClass("typeNum") &&
                          t.is("td") &&
                          ($(document).off("touchstart"),
                          o.$parent.$apply(s.attr("numeric-keypad-call-back")));
                      };
                      $(document)
                        .off("touchstart")
                        .on("touchstart", function (n) {
                          rt(n);
                        });
                    }
                  }
                }).bind("touchend", function (n) {
                  var t = jQuery(n.target);
                  t.hasClass("typePlusNum") &&
                    t.hasClass("divTouchActive") &&
                    t.removeClass("divTouchActive");
                  t.hasClass("typeNum") &&
                    t.hasClass("tdTouchActive") &&
                    t.removeClass("tdTouchActive");
                });
                o.$on("$destroy", function () {});
              },
            };
          }),
          (t.$name = "multiNumericKeypadV2"),
          (t.$inject = ["$parse", "$interval", "$timeout", t.DirectiveFactory]),
          t
        );
      })();
      t.MultiNumericKeypadV2 = yt;
      pt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var s = "#999",
              u = function (n, t) {
                jQuery("div[multi-show-numeric-keypad-v2]").removeClass("on");
                t && jQuery(n).addClass("keyIn").addClass("on");
              },
              f = function (n) {
                return $("#" + n)
                  .parent()
                  .find(".btn_closeKB");
              },
              r = function (t, r, e) {
                var h, s, c;
                e === void 0 && (e = null);
                h = r ? "table" : "none";
                t
                  ? (jQuery("div[multi-numeric-keypad-v2=" + t + "]").css(
                      "display",
                      h
                    ),
                    jQuery("div[multi-numeric-keypad-v2=" + t + "]")
                      .children("div")
                      .css("display", r ? "flex" : "none"),
                    jQuery("div[multi-numeric-keypad-v2=" + t + "]")
                      .children("table")
                      .css("display", h),
                    (s = f(t)),
                    (c =
                      s == undefined || s.attr("data-len") == undefined
                        ? 0
                        : Number(s.attr("data-len"))),
                    c > 0 && s.show(),
                    r || s.hide())
                  : jQuery("div[multi-numeric-keypad-v2]").each(function () {
                      var t = $(this).attr("multi-numeric-keypad-v2"),
                        u;
                      o(t) &&
                        (i.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .MultiShowNumericKeypadV2Onblur,
                          { elemId: t }
                        ),
                        $(this).css("display", h));
                      u = f(t);
                      r || u == undefined || u.hide();
                    });
                t && r ? u("#" + t, !0) : t && u("#" + t, !1);
                e && e.$applyAsync();
              },
              e = function (n) {
                return n.attr("disabled") === "disabled";
              },
              o = function (n) {
                return (
                  jQuery("div[multi-numeric-keypad-v2=" + n + "]").css(
                    "display"
                  ) === "table"
                );
              };
            return {
              restrict: "A",
              require: "?ngModel",
              link: function (f, h, c, l) {
                var a = c.id,
                  ot =
                    c.multiNumericKeypadClose == undefined ||
                    c.multiNumericKeypadClose === "true",
                  st = c.numericKeypadChangeColor
                    ? t(c.numericKeypadChangeColor)(null)
                    : !0,
                  ht,
                  p,
                  w,
                  g,
                  nt,
                  b,
                  tt,
                  k,
                  d,
                  v,
                  y,
                  it;
                if (!a) {
                  console.error(
                    "multi-show-numeric-keypad-v2 element not found 'ID' attribute!"
                  );
                  return;
                }
                if (ot) {
                  ht = h.parent();
                  p = $("<div class='btn_closeKB'></div>");
                  $("#" + a)
                    .parent()
                    .find(".btn_closeKB")
                    .remove();
                  h.after(p);
                  w = null;
                  g = $("." + a).attr("numeric-keypad-call-back");
                  g && (w = t(g));
                  var ct = function () {
                      l.$setViewValue("");
                      l.$render();
                      w &&
                        f.$evalAsync(function (n) {
                          w(f, { $event: n });
                        });
                    },
                    lt = function (n) {
                      var t = $("#" + a).hasClass("on");
                      if (n && n.length > 0 && t) {
                        p.show();
                        jQuery("#" + a).addClass("keyIn");
                        return;
                      }
                      p.hide();
                      jQuery("#" + a).removeClass("keyIn");
                    },
                    at = f.$watch(
                      function () {
                        return l == undefined ? "" : l.$modelValue;
                      },
                      function (n) {
                        (n == undefined || n == null) && (n = "");
                        p.attr("data-len", n.length);
                        lt(n);
                      }
                    );
                  p.bind("click", ct);
                }
                h.css("outline", "none");
                jQuery("div[multi-numeric-keypad-v2=" + a + "]").css(
                  "display",
                  "none"
                );
                jQuery("div[multi-numeric-keypad-v2=" + a + "]")
                  .children(".numPlusArea")
                  .css("display", "flex");
                jQuery("div[multi-numeric-keypad-v2=" + a + "]")
                  .children(".numInputArea")
                  .css("display", "table");
                nt = c.openKeyboard;
                nt && r(a, !0);
                b = !0;
                c.enabledClickEvent === "false" && (b = !1);
                tt = c.defaultFocus;
                tt && u(h, !0);
                k = null;
                c.numericClose && (k = t(c.numericClose));
                d = !1;
                c.onBlurDisplayNone && (d = t(c.onBlurDisplayNone));
                y = null;
                c.numericBlur &&
                  ((it = (c.numericBlurValid || "false") === "true"),
                  (y = t(c.numericBlur)),
                  (v = function (n) {
                    var t, i;
                    y &&
                      (((t = $(n.target)),
                      t.hasClass("typeNum") && t.is("td")) ||
                        t.hasClass("btn_closeKB") ||
                        ($(document).off("click", null, v),
                        (i = !0),
                        it ? (i = y(f, { $event: n })) : y(f, { $event: n }),
                        d && i && r(a, !1)));
                  }));
                v == undefined &&
                  d &&
                  (v = function (n) {
                    var t = $(n.target);
                    (t.hasClass("typeNum") && t.is("td")) ||
                      t.hasClass("btn_closeKB") ||
                      r(a, !1);
                  });
                var rt = function () {
                    e(h) ? u(h, !1) : u(h, !0);
                    var n = "";
                    n = h.text();
                    c.plus &&
                      (n.indexOf("+") != -1
                        ? (l.$setViewValue(n), l.$render())
                        : (l.$setViewValue("+" + n), l.$render()));
                  },
                  ut = function () {
                    u(h, !1);
                    h.text() === "" && st && h.css("color", s);
                  },
                  ft = function (n) {
                    if ((n.preventDefault(), n.stopPropagation(), e(h))) {
                      h.blur();
                      return;
                    }
                    if (
                      (o(a)
                        ? (r(a, !1, f),
                          k &&
                            f.$evalAsync(function (n) {
                              k(f, { $event: n });
                            }))
                        : (r(null, !1), r(a, !0, f)),
                      v)
                    )
                      $(document).off("click", null, v).on("click", v);
                  },
                  et = function () {
                    return $("#" + c.id).is(":hidden");
                  };
                i.On(
                  n.ConstDefinition.MessageBusEventName
                    .MultiShowNumericKeypadV2Onblur,
                  function (n, t) {
                    a === t.elemId && y && y(f, { $event: n });
                  }
                );
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardOpen,
                  function (n, t) {
                    a === t.elemId &&
                      (r(a, !0),
                      t.text &&
                        (h.attr("placeholder", t.text),
                        h.removeClass("placeholder_class"),
                        h.removeAttr("disabled")));
                  }
                );
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardClose,
                  function (n, t) {
                    a === t.elemId && r(a, !1);
                    t.text !== null &&
                      typeof t.text != "undefined" &&
                      (l.$setViewValue(t.text), l.$render());
                  }
                );
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnMobileKeyboardDisable,
                  function (n, t) {
                    a === t.elemId &&
                      (r(a, !1),
                      t.text &&
                        (h.attr("placeholder", t.text),
                        h.addClass("placeholder_class"),
                        h.attr("disabled", "disabled")));
                  }
                );
                h.focusin(rt);
                h.focusout(ut);
                b && h.click(ft);
                jQuery(document).contextmenu(et);
                f.$on("$destroy", function () {
                  h.off("focusin", rt);
                  h.off("focusout", ut);
                  b && h.off("click", ft);
                  jQuery(document).off("contextmenu", et);
                });
              },
            };
          }),
          (t.$name = "multiShowNumericKeypadV2"),
          (t.$inject = ["$parse", "messageBus", t.DirectiveFactory]),
          t
        );
      })();
      t.MultiShowNumericKeypadV2 = pt;
      wt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t) {
                t.on("click", function () {
                  window.getSelection().toString() ||
                    this.setSelectionRange(0, this.value.length);
                });
              },
            };
          }),
          (n.$name = "selectTextOnClick"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.SelectTextOnClick = wt;
      bt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var u = null,
                  f;
                u = n(r.ngDebounceClick);
                f = function (n) {
                  u(t, { $event: n });
                  t.$apply();
                };
                i.on(
                  "click",
                  _.debounce(f, 1e3, { leading: !0, trailing: !1 })
                );
              },
            };
          }),
          (n.$name = "ngDebounceClick"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.NgDebounceClick = bt;
      kt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (t, i, r, u) {
                i.bind("blur", function () {
                  var t = n.Formatter.TrimAndReplaceDoubleSpace(i.val());
                  u.$setViewValue(t);
                  u.$render();
                });
              },
            };
          }),
          (t.$name = "onBlurTrimAndReplaceDoubleSpace"),
          (t.$inject = [t.DirectiveFactory]),
          t
        );
      })();
      t.OnBlurTrimAndReplaceDoubleSpace = kt;
      dt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              priority: 99,
              link: function (t, i, r) {
                n(function () {
                  var t = i.find("img"),
                    u = i.parent().width(),
                    n = r.contentImageResize || "";
                  _.forEach(t, function (t) {
                    var r = t.width || 0,
                      i;
                    t.removeAttribute("height");
                    t.removeAttribute("width");
                    n
                      ? ((t.className += " " + n),
                        (i =
                          t.parentElement.parentElement.tagName == "SPAN"
                            ? t.parentElement.parentElement
                            : t.parentElement),
                        jQuery(i).css("display", "flow-root"))
                      : t.setAttribute("width", "100%");
                  });
                });
                t.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "contentImageResize"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.ContentImageResize = dt;
      gt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t) {
                function i() {
                  var i = t.attr("ng-touchstart");
                  n.$apply(i);
                }
                t.bind("touchstart", i);
              },
            };
          }),
          (n.$name = "ngTouchstart"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.NgTouchstart = gt;
      ni = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return {
              restrict: "E",
              template:
                '<div class="slidercaptcha card" >\n                                <div class="card-header">\n                                    <span></span>\n                                </div>\n                                <div class="card-body">\n                                    <div class="sliderCaptcha-area" style="position: relative; width: 280px; margin: 0px auto;">\n                                        <canvas class="sliderBg"></canvas>\n                                        <i class="refreshIcon fa fa-redo" ng-click="refresh()"></i>\n                                        <canvas class="sliderBlock"></canvas>\n                                        <div class="sliderContainer" >\n                                            <div class="slided"></div>\n                                            <div class="sliderMask">\n                                                <div class="slider">\n                                                     <i class="arrow"></i>\n                                                </div>\n                                            </div>\n                                            <span class="sliderText" ng-show="!isMoving()" >{{tips}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>',
              link: function (i, f, e) {
                var p, l, w, a, o, h, b, v, y, nt, d, tt;
                i.tips = n.Helpers.ChangeLanguage("按住箭頭，向右滑動驗證");
                p = null;
                p = t(e.sliderSuccess);
                l = null;
                l = t(e.sliderFail);
                w = null;
                w = t(e.sliderRefresh);
                a = 0;
                o = 0;
                e.sliderMaxError && (a = Number(e.sliderMaxError));
                h = !1;
                r.On(
                  n.ConstDefinition.MessageBusEventName.OnCaptchaImageClose,
                  function () {
                    o = 0;
                    h = !1;
                  }
                );
                b = t(e.triggerVerify);
                b &&
                  f.bind("touchstart", function () {
                    i.$evalAsync(function (n) {
                      b(i, { $event: n });
                    });
                  });
                var it = 0,
                  k = !1,
                  s = [],
                  c = !1,
                  g;
                g = f.find(".slider")[0];
                v = 280;
                y = 155;
                e.$observe("sliderBgImage", function () {
                  ((e.sliderBgImage != "" && e.sliderImage != "") ||
                    (e.sliderBgImage == "" && e.sliderImage == "")) &&
                    d();
                });
                e.$observe("sliderImage", function () {
                  ((e.sliderBgImage != "" && e.sliderImage != "") ||
                    (e.sliderBgImage == "" && e.sliderImage == "")) &&
                    d();
                });
                i.isMoving = function () {
                  return c;
                };
                i.refresh = function () {
                  i.tips = "Loading";
                  s = [];
                  c = !1;
                  h = !1;
                  window.setTimeout(function () {
                    w(i, {});
                  }, 200);
                };
                nt = function (t) {
                  if (k) return t.preventDefault(), !1;
                  var b = f.find(".slider")[0],
                    g = f.find(".sliderMask")[0],
                    nt = f.find(".sliderBlock")[0],
                    e = f.find(".sliderContainer")[0],
                    ut = t.clientX || t.originalEvent.touches[0].clientX,
                    ft = t.clientY || t.originalEvent.touches[0].clientY,
                    r = 0,
                    tt = 0,
                    rt = 0,
                    et = 0,
                    d = 0,
                    ot = n.Helpers.RandomNumber(0, 1),
                    st = 1 + n.Helpers.RandomNumber(0, 1.5, 1),
                    ht = function (n, t, i, r) {
                      return (
                        (n = Math.pow(n / r, st)),
                        ot === 0 ? i * n * n + t : -i * n * (n - 2) + t
                      );
                    },
                    y = function (n) {
                      var i = n.clientX || n.touches[0].clientX,
                        u = n.clientY || n.touches[0].clientY,
                        t;
                      if (
                        ((r = i - ut),
                        (tt = u - ft),
                        (t = v - 58),
                        r >= t || r <= 0)
                      )
                        return !1;
                      c = !0;
                      s.push(Math.floor(tt));
                      rt = ht(r, 0, t, t);
                      et = r;
                      d = rt;
                      b.style.left = r + "px";
                      g.style.width = r + b.offsetWidth + "px";
                      nt.style.left = d - it + "px";
                      e.classList.add("sliderContainer_active");
                    },
                    w = function () {
                      document.removeEventListener("mousemove", y);
                      document.removeEventListener("mouseup", w);
                      document.removeEventListener("touchmove", y);
                      document.removeEventListener("touchend", w);
                      s.splice(0, 0, Math.floor(d));
                      u.CheckSlideCaptcha({ Trail: s })
                        .then(function (n) {
                          e.classList.remove("sliderContainer_active");
                          e.classList.add("sliderContainer_success");
                          k = !0;
                          s = [];
                          c = !1;
                          o = 0;
                          window.setTimeout(function () {
                            p(i, { data: n.Message });
                          }, 300);
                        })
                        .catch(function () {
                          if (
                            ((i.tips = "Loading"),
                            e.classList.remove("sliderContainer_active"),
                            e.classList.add("sliderContainer_fail"),
                            (c = !1),
                            (h = !0),
                            (s = []),
                            (o += 1),
                            a != 0 && a == o)
                          ) {
                            o = 0;
                            window.setTimeout(function () {
                              l(i, {});
                            }, 300);
                            return;
                          }
                          window.setTimeout(function () {
                            b.style.left = "";
                            g.style.width = "";
                            nt.style.left = "";
                            l(i, {});
                          }, 1e3);
                        });
                    };
                  document.addEventListener("mousemove", y);
                  document.addEventListener("mouseup", w);
                  document.addEventListener("touchmove", y);
                  document.addEventListener("touchend", w);
                };
                f.find(".slider").on("mousedown touchstart", function (n) {
                  n.preventDefault();
                  nt(n);
                });
                d = function () {
                  var n, t;
                  g.style.left = "";
                  k = !1;
                  tt();
                  n = f.find(".sliderContainer")[0];
                  n.classList.remove(
                    "sliderContainer_active",
                    "sliderContainer_success",
                    "sliderContainer_fail"
                  );
                  t = f.find(".sliderMask")[0];
                  t.style.width = "";
                };
                tt = function () {
                  var r = f.find(".sliderBg")[0],
                    c = r.getContext("2d"),
                    u,
                    t,
                    s,
                    o;
                  r.width = v;
                  r.height = y;
                  c.clearRect(0, 0, r.width, r.height);
                  u = new Image();
                  u.onload = function () {
                    c.drawImage(u, 0, 0, v, y);
                  };
                  u.src = e.sliderBgImage;
                  t = f.find(".sliderBlock")[0];
                  s = t.getContext("2d");
                  t.height = y;
                  t.width = 100;
                  t.style.left = "";
                  s.clearRect(0, 0, t.width, t.height);
                  o = new Image();
                  o.onload = function () {
                    s.drawImage(o, 0, 0);
                  };
                  o.src = e.sliderImage;
                  i.tips = h
                    ? n.Helpers.ChangeLanguage("請重新嘗試")
                    : n.Helpers.ChangeLanguage("按住箭頭，向右滑動驗證");
                };
              },
            };
          }),
          (t.$name = "sliderCaptcha"),
          (t.$inject = [
            "$parse",
            "$q",
            "messageBus",
            "VerifySvc",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.SliderCaptcha = ni;
      ti = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                i.bind("load", function () {
                  if (r.imageonload) {
                    var i = n(r.imageonload);
                    i(t, { $event: event });
                  }
                });
              },
            };
          }),
          (n.$name = "imageonload"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.Imageonload = ti;
      ii = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = i.convertToNumber;
                r.$parsers.push(function (n) {
                  return parseInt(n, 10);
                });
                r.$formatters.push(function (n) {
                  return typeof n == "undefined" || n == null || n == NaN
                    ? ""
                    : "" + n;
                });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "convertToNumber"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ConvertToNumber = ii;
      ri = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = i.convertToString;
                r.$parsers.push(function (n) {
                  return n;
                });
                r.$formatters.push(function (n) {
                  return typeof n == "undefined" || n == null || n == NaN
                    ? ""
                    : "" + n;
                });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "convertToString"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ConvertToString = ri;
      ui = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "E",
              template:
                '<div class="btn_free"></div><div class="freeHint">{{freeHintText}}</div>',
              link: function (n, t, i) {
                i.freeHintText && (n.freeHintText = i.freeHintText);
                document.addEventListener("touchstart", function () {}, !0);
                jQuery(".btn_free").click(function () {
                  jQuery(this).siblings(".freeHint").toggle();
                });
                jQuery(document).bind("click touchend", function (n) {
                  var t = jQuery(n.target);
                  t.closest(".btn_free,.freeHint").length == 0 &&
                    jQuery(".freeHint").hide();
                });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "mobileFreeHint"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.MobileFreeHint = ui;
      fi = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              link: function (i, r) {
                var u = function (i) {
                  i.preventDefault();
                  jQuery("#popup_login").show();
                  t.Emit(
                    n.ConstDefinition.MessageBusEventName
                      .OnPasswordEyeInitialize,
                    { elemId: "txtAccountPWD" }
                  );
                  return;
                };
                r.on("click", u);
                i.$on("$destroy", function () {
                  u = null;
                });
              },
            };
          }),
          (t.$name = "signCheck"),
          (t.$inject = ["messageBus", t.DirectiveFactory]),
          t
        );
      })();
      t.SignCheck = fi;
    })((t = n.Directives || (n.Directives = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterDirectives(OBSMobileApp.Directives),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return (
          (n.FilterFactory = function () {
            return function (n, t, i) {
              if (!n || ((t = parseInt(t)), !t)) return "";
              if (n.length < t) return n;
              var r = n.substring(0, t - 1);
              return "" + r + i;
            };
          }),
          (n.$name = "textCut"),
          (n.$inject = [n.FilterFactory]),
          n
        );
      })();
      n.TextCut = t;
    })((t = n.Filters || (n.Filters = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterFilter(
  OBSMobileApp.Filters.TextCut.$name,
  OBSMobileApp.Filters.TextCut.FilterFactory
),
  (function (n) {
    var t;
    (function (n) {
      var e = (function () {
          function r() {}
          return (
            (r.prototype.Init = function (r) {
              this.Proxy = new n.SignalRHubProxy(r);
              this.Server = new t(this.Proxy);
              this.Notification = new i(this.Proxy);
            }),
            (r.prototype.Connect = function () {
              var n = this;
              return this.Proxy.Connect()
                .then(function () {
                  n._isConnect = !0;
                  jQuery(window).bind("beforeunload", function () {
                    n.Disconnect();
                  });
                })
                .fail(function (t) {
                  n._isConnect = !1;
                  console.error(t);
                });
            }),
            (r.prototype.Disconnect = function () {
              this.Proxy.Disconnect();
              this._isConnect = !1;
            }),
            (r.prototype.IsConnect = function () {
              return this._isConnect;
            }),
            (r.$name = "SignalRAdapter"),
            r
          );
        })(),
        t,
        i,
        r,
        u,
        f,
        o;
      n.SignalRAdapter = e;
      t = (function () {
        function n(n) {
          this.EchoSvc = new r(n);
          this.MessageSvc = new u(n);
        }
        return n;
      })();
      n.ServerAdapter = t;
      i = (function () {
        function n(n) {
          this.MessageSvcCallback = new f(n);
        }
        return n;
      })();
      n.NotificationAdapter = i;
      r = (function () {
        function n(n) {
          this.HubProxy = n;
        }
        return (
          (n.prototype.Echo = function () {
            return this.HubProxy.Invoke(
              $.merge(["Echo"], $.makeArray(arguments))
            );
          }),
          n
        );
      })();
      n.EchoSvc = r;
      u = (function () {
        function n(n) {
          this.HubProxy = n;
        }
        return (
          (n.prototype.NotifyMessage = function () {
            return this.HubProxy.Invoke(
              $.merge(["NotifyMessage"], $.makeArray(arguments))
            );
          }),
          (n.prototype.GetNotifyMessageUnreadCount = function () {
            return this.HubProxy.Invoke(
              $.merge(["GetNotifyMessageUnreadCounts"], $.makeArray(arguments))
            );
          }),
          n
        );
      })();
      n.MessageSvc = u;
      f = (function () {
        function n(n) {
          this.HubProxy = n;
        }
        return (
          (n.prototype.NotifyMessageAck = function (n) {
            this.HubProxy.On("NotifyMessageAck", n);
          }),
          (n.prototype.NotifyMessageUnreadCountAck = function (n) {
            this.HubProxy.On("NotifyMessageUnreadCountAck", n);
          }),
          n
        );
      })();
      n.MessageSvcCallback = f;
      o = (function () {
        function n() {}
        return n;
      })();
    })((t = n.Adapter || (n.Adapter = {})));
  })(OBSMobileApp || (OBSMobileApp = {}));
OBSMobileApp.RegisterAngular.RegisterService(
  OBSMobileApp.Adapter.SignalRAdapter.$name,
  OBSMobileApp.Adapter.SignalRAdapter
);

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
  handlerEvent,
  __assign,
  OBSApp;
(function (n, t) {
  "use strict";
  var i =
    typeof exports == "object" && typeof module != "undefined"
      ? (module.exports = t(require("angular"), require("moment")))
      : typeof define == "function" && define.amd
      ? define(["angular", "moment"], t)
      : t(n.angular, n.moment);
})(this, function (n) {
  n.module("datePickerTemplate", []).run([
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
          (i.GetLatiniseString = function (n) {
            return n.replace(/[^A-Za-z0-9\[\]\s]/g, function (n) {
              return i.LatinWordMap[n] || n;
            });
          }),
          (i.EnumToString = function (n, t) {
            var i = t;
            return n[i];
          }),
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
          (i.CamelizeString = function (n) {
            return n.replace(/^([A-Z])|[\s-_]+(\w)/g, function (n, t, i) {
              return i ? i.toUpperCase() : t.toLowerCase();
            });
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
          (i.AlertOnlyOKCallback = function (n, t, i, r) {
            this.Alert(n, t, !1, r, null, i, "確認", "取消", !1, !1);
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
          (i.AlertConfirmCallback = function (n, t, i, r) {
            this.Alert(n, t, !0, r, null, i);
          }),
          (i.AlertConfirmCallbackText = function (n, t, i, r, u) {
            this.Alert("", r, !0, n, null, u, t, i, !1, !1);
          }),
          (i.AlertConfirmCallbackTextWithButtonClass = function (
            n,
            t,
            i,
            r,
            u,
            f,
            e,
            o
          ) {
            this.AlertWithButtonClass(n, u, !0, t, null, f, e, o, i, r, !1, !1);
          }),
          (i.ShowMessage = function (n, t) {
            var i = {
              title: "",
              text: this.ChangeLanguage(n),
              showCancelButton: !1,
              showCloseButton: !1,
              showLoaderOnConfirm: !1,
              showConfirmButton: !1,
              allowOutsideClick: !1,
              animation: !1,
              reverseButtons: !0,
            };
            t = angular.extend({}, i, t);
            swal(t);
          }),
          (i.AlertServiceCenterCallback = function (n, t, i, r) {
            this.Alert(n, t, !0, r, null, i, "聯繫客服", "取消", !1, !1);
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
            c === void 0 && (c = !1);
            l === void 0 && (l = !0);
            a === void 0 && (a = 0);
            var v = this.AppendFancyboxConfirmButtonClassToButtonText(s, f),
              y = this.AppendFancyboxCancelButtonClassToButtonText(h, e);
            this.Alert(n, t, i, r, u, o, v, y, c, l, a);
          }),
          (i.AppendFancyboxConfirmButtonClassToButtonText = function (n, t) {
            return (
              t === void 0 && (t = "fancybox-confirm-button"),
              "<span class='" + t + "'>" + n + "</span>"
            );
          }),
          (i.AppendFancyboxCancelButtonClassToButtonText = function (n, t) {
            return (
              t === void 0 && (t = "fancybox-cancel-button"),
              "<span class='" + t + "'>" + n + "</span>"
            );
          }),
          (i.Alert = function (n, t, i, r, u, f, e, o, s, h, c) {
            var y, l;
            i === void 0 && (i = !1);
            r === void 0 && (r = "");
            u === void 0 && (u = null);
            s === void 0 && (s = !1);
            h === void 0 && (h = !0);
            c === void 0 && (c = 0);
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
              confirmButtonText: a,
              cancelButtonText: v,
              showCancelButton: i,
              showCloseButton: s,
              showLoaderOnConfirm: !1,
              animation: !1,
              allowOutsideClick: h,
              reverseButtons: y,
              width: c,
            };
            t != SweetAlertTypeEnum.none &&
              (l.type = this.EnumToString(SweetAlertTypeEnum, t));
            l.html =
              u && u.length > 0
                ? this.ChangeLanguageByArray(r, u)
                : this.ChangeLanguage(r);
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
                '<div class="popUpShow popUpShort" id="divNotifyPopup">\n                                               <div class="popupShort">\n                                                   <div class="popUp_in">\n                                                       <div class="popupS_T"><img src="' +
                f +
                '" /></div>\n                                                       <div class="popupS_In" id="divNotifyMessage"></div>\n                                                   </div>\n                                               </div>\n                                           </div>'),
              $(document.body).append(e));
            $("#divNotifyMessage").text(s);
            $("#divNotifyPopup").fadeIn(400);
            o = setTimeout(function () {
              $("#divNotifyPopup").fadeOut(400);
              t && t();
            }, r);
            $("#divNotifyPopup").one("click", function () {
              clearTimeout(o);
              $("#divNotifyPopup").fadeOut(400);
              t && t();
            });
          }),
          (i.AlertSwitch = function (t, r, u) {
            if (t != null) {
              if (t.Error == null) {
                this.Alert(
                  "",
                  SweetAlertTypeEnum.none,
                  !1,
                  i.ChangeLanguage("系統異常請稍後再試")
                );
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
                case ApiStatusCodeEnum.Unauthorized:
                  i.Alert(
                    "",
                    u || SweetAlertTypeEnum.none,
                    !1,
                    i.ChangeLanguage("閒置過久已將您登出，請重新登錄"),
                    null,
                    function () {
                      r == null
                        ? window.name == "MemberCenter" &&
                          ((window.opener = null), window.close())
                        : r();
                    }
                  );
                  break;
                case ApiStatusCodeEnum.AntiForgeryTokenIncorrect:
                  i.Alert(
                    "",
                    u || SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function (n) {
                      n && window.location.reload(!0);
                    }
                  );
                  break;
                case ApiStatusCodeEnum.NotResultData:
                  i.Notify(t.Error.Message, NotifyTypeEunm.danger);
                  break;
                case ApiStatusCodeEnum.Fail:
                  i.Alert(
                    "",
                    u || SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message,
                    null,
                    function () {
                      r != null && r();
                    }
                  );
                  break;
                case ApiStatusCodeEnum.InvalidOperation:
                case ApiStatusCodeEnum.SecurityRiskOperation:
                case ApiStatusCodeEnum.RequestTimeout:
                case ApiStatusCodeEnum.RequestError:
                case ApiStatusCodeEnum.ResponseForamtError:
                case ApiStatusCodeEnum.ServerError:
                  i.Alert(
                    "",
                    u || SweetAlertTypeEnum.none,
                    !1,
                    i.ChangeLanguage("系統異常請稍後再試")
                  );
                  break;
                default:
                  i.Alert(
                    "",
                    u || SweetAlertTypeEnum.none,
                    !1,
                    t.Error.Message
                  );
                  r != null && r();
              }
            }
          }),
          (i.AlertFocus = function (n, t, i, r) {
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
          (i.IdentityCheck = function (n) {
            if (n == null || n == "") return !1;
            var t = /^\d{15}|(\d{17}(\d|x|X))$/.test(n);
            return t
              ? n.length == 15
                ? r.IsLength15IdentityCardValid(n)
                : n.length == 18
                ? r.IsLength18IdentityCardValid(n)
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
          (i.GetCustomizeUrlByAnnounce = function (n, t) {
            var u, r;
            return (t === void 0 && (t = !1),
            (u = n.match(/###LINK##(.*(##.*){4})###/)),
            u != null && u.length > 0)
              ? ((r = u[1].split("##")), t)
                ? n.replace(
                    /(###LINK).*(###)/,
                    '<a href="#" ng-click="ctrl.RedirectPage(\'' +
                      r[0] +
                      "')\"><span style='" +
                      r[2] +
                      "'>" +
                      i.ChangeLanguage(r[1]) +
                      "</span></a>"
                  )
                : n.replace(
                    /(###LINK).*(###)/,
                    "<span style='" +
                      r[2] +
                      "'>" +
                      i.ChangeLanguage(r[1]) +
                      "</span>"
                  )
              : n;
          }),
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
      r,
      f,
      e,
      u,
      t;
    n.Helpers = i;
    r = (function () {
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
        (n.IsTelegramIDFormatValid = function (n) {
          return t.Provider().TelegramIDRegExp.test(n);
        }),
        (n.IsQQIDFormatValid = function (n) {
          return t.Provider().QQIDRegExp.test(n);
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
          return t.Provider().AccountNameRecipientRegExp.test(n);
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
    n.Validator = r;
    f = (function () {
      function n() {}
      return (
        (n.TrimAndReplaceDoubleSpace = function (n) {
          for (var t = n || ""; /\s\s/.test(t); ) t = t.replace(/\s\s/, " ");
          return t.trim();
        }),
        (n.NumberFormat = function (n) {
          return t.Provider().ReplaceAmountToString(n);
        }),
        (n.GetNumberData = function (n) {
          return t.Provider().ReplaceAmountToNumber(n);
        }),
        n
      );
    })();
    n.Formatter = f;
    e = (function () {
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
    n.Verifier = e;
    u = (function () {
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
          HomeRefreashSec: 300,
          SiteCulture: "zh-cn",
          CountryID: "",
          SiteCultureAcronym: "CN",
        }),
        n
      );
    })();
    n.GlobalJsConfig = u;
    t = (function () {
      function t() {}
      return (
        (t.Provider = function () {
          if (!t.provider)
            try {
              t.provider = new n[
                "SiteCultureMethod" + u.Config.SiteCultureAcronym.toUpperCase()
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
  })(OBSApp || (OBSApp = {}));
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
        r,
        u,
        f,
        e,
        o,
        s,
        ii,
        ri,
        ui,
        fi,
        ei,
        oi,
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
        i,
        at,
        vt,
        yt,
        pt,
        wt,
        bt,
        kt,
        dt,
        gt,
        ni;
      t.DropDownListModel = ti;
      r = (function () {
        function n() {
          this.Enable = !1;
          this.Sec = 60;
        }
        return n;
      })();
      t.Timer = r;
      u = (function () {
        function n() {}
        return n;
      })();
      t.Marquee = u;
      f = (function () {
        function n() {}
        return n;
      })();
      t.MarqueeQueryModel = f;
      e = (function () {
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
                t
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
      t.Competence = e;
      o = (function () {
        function n() {}
        return n;
      })();
      t.CommonCompetence = o;
      s = (function () {
        function n() {}
        return n;
      })();
      t.GetPersonalCashFlowSettingResult = s;
      (t.DefaultUserProfile = {
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
      }),
        (function (n) {
          n[(n.Checking = 0)] = "Checking";
          n[(n.NotLogin = 1)] = "NotLogin";
          n[(n.Loggedin = 2)] = "Loggedin";
          n[(n.WaitingLogIn = 3)] = "WaitingLogIn";
          n[(n.Dney = 4)] = "Dney";
          n[(n.Error = 5999)] = "Error";
        })((ii = t.LoginStatusEnum || (t.LoginStatusEnum = {}))),
        (function (n) {
          n[(n.Suspend = 0)] = "Suspend";
          n[(n.Normally = 1)] = "Normally";
          n[(n.Quiescence = 2)] = "Quiescence";
          n[(n.Audit = 3)] = "Audit";
          n[(n.Test = 4)] = "Test";
          n[(n.Promotion = 5)] = "Promotion";
          n[(n.WaitForDeposit = 6)] = "WaitForDeposit";
        })((ri = t.MemberStatusEnum || (t.MemberStatusEnum = {}))),
        (function (n) {
          n[(n.Canlogin = 0)] = "Canlogin";
          n[(n.Disabled = 1)] = "Disabled";
          n[(n.DelayDelete = 98)] = "DelayDelete";
          n[(n.Delete = 99)] = "Delete";
        })((ui = t.LockTypeEnum || (t.LockTypeEnum = {}))),
        (function (n) {
          n[(n.Deposit = 1)] = "Deposit";
          n[(n.Withdrawal = 2)] = "Withdrawal";
        })((fi = t.ActionTypeEnum || (t.ActionTypeEnum = {}))),
        (function (n) {
          n[(n.AliPay = 1)] = "AliPay";
          n[(n.WeChat = 2)] = "WeChat";
          n[(n.Online = 3)] = "Online";
          n[(n.WebBank = 4)] = "WebBank";
          n[(n.QQWallet = 5)] = "QQWallet";
          n[(n.ScanCode = 6)] = "ScanCode";
          n[(n.Baifubao = 7)] = "Baifubao";
          n[(n.Cardpay = 8)] = "Cardpay";
        })((ei = t.CashFlowTypeEnum || (t.CashFlowTypeEnum = {}))),
        (function (n) {
          n[(n.FunctionA = 1)] = "FunctionA";
          n[(n.FunctionB = 2)] = "FunctionB";
          n[(n.FunctionC = 3)] = "FunctionC";
          n[(n.FunctionD = 4)] = "FunctionD";
        })((oi = t.FunctionTypeEnum || (t.FunctionTypeEnum = {})));
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
      t.AlertInfo = g;
      nt = (function () {
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
      t.GetPaywayAutoMessageSettingByConditionModel = nt;
      tt = (function () {
        function n() {}
        return n;
      })();
      t.GetPaywayAutoMessageSettingByConditionResult = tt;
      it = (function () {
        function n() {}
        return n;
      })();
      t.CheckMemberLoginMenuPermissionPostModel = it;
      rt = (function () {
        function n() {
          this.ContentLength = 0;
          this.ViewLength = 0;
          this.OverMaxlengthIndex = 0;
        }
        return n;
      })();
      t.GetViewCultureLengthResult = rt;
      ut = (function () {
        function n() {}
        return n;
      })();
      t.GameBalancePostModel = ut;
      ft = (function () {
        function n() {}
        return n;
      })();
      t.GameTypeListModel = ft;
      et = (function () {
        function n() {}
        return n;
      })();
      t.MainAccountBalanceModel = et;
      ot = (function () {
        function t() {
          this.MainIsAvailable = !1;
          this.GameIsAvailable = !1;
          this.MainAccount = this.GameAccount =
            n.Helpers.ChangeLanguage("載入中");
        }
        return t;
      })();
      t.BalanceModel = ot;
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
        function n() {
          this.IsAvailable = !1;
        }
        return n;
      })();
      t.FastTransferAnchorBalanceModel = ct;
      lt = (function () {
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
      t.SpecificErrorMap = lt;
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
      at = (function () {
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
      t.ViewElementManager = at;
      vt = (function () {
        function n() {}
        return n;
      })();
      yt = (function (n) {
        function t() {
          return (n !== null && n.apply(this, arguments)) || this;
        }
        return __extends(t, n), t;
      })(vt);
      t.PlatformTransferEnabled = yt;
      pt = (function () {
        function n() {}
        return n;
      })();
      t.Dictionary = pt;
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
      t.IGetPlatformServiceInfoAvailableListSubItem = kt;
      dt = (function () {
        function n() {}
        return n;
      })();
      t.DepositNewsLocalStorageItemList = dt;
      gt = (function () {
        function n() {}
        return n;
      })();
      t.DepositNewsLocalStorageItem = gt;
      ni = (function () {
        function n() {}
        return n;
      })();
      t.GetPlatformSuperRewardSettingResult = ni;
    })((t = n.Models || (n.Models = {})));
  })(OBSApp || (OBSApp = {})),
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
            (n.OnCheckNeddKickLoginStatus = "OnCheckNeddKickLoginStatus"),
            (n.OnLoadComplainData = "OnLoadComplainData"),
            (n.OnForgetPWBeforeOpen = "OnForgetPWBeforeOpen"),
            (n.OnLoginResultConfig = "OnLoginResultConfig"),
            (n.OnRefreshUserProfile = "OnRefreshUserProfile"),
            (n.GetDepositBonus = "GetDepositBonus"),
            (n.TriggerCloseOpenWindow = "TriggerCloseOpenWindow"),
            (n.OnRefereshLoginMenuSwitchToSubWindow =
              "OnRefereshLoginMenuSwitchToSubWindow"),
            (n.OnMainPageRefresh = "OnMainPageRefresh"),
            (n.LeftPointPlatformRefresh = "LeftPointPlatformRefresh"),
            (n.OnRegisterAdditionallyFinish = "OnRegisterAdditionallyFinish"),
            (n.OnBannerADKuAnchorVideoPlay = "OnBannerADKuAnchorVideoPlay"),
            (n.OnCheckTokenLoginStatus = "OnCheckTokenLoginStatus"),
            (n.OnCaptchaImageClose = "OnCaptchaImageClose"),
            (n.OnGetPointsControlCenter = "OnGetPushPointsControlCenter"),
            (n.OnSetOneGameReLoadPointsControlCenter =
              "OnSetOneGameReLoadPointsControlCenter"),
            (n.OnRefreshAllPointsControlCenter =
              "OnRefreshAllPointsControlCenter"),
            (n.OnSetMainBalanceControlCenter = "OnSetMainBalanceControlCenter"),
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
          (n.IsShowDepositNews = "IsShowDepositNews"),
          (n.IsShowWithdrawalNews = "IsShowWithdrawalNews"),
          (n.BackupURLNewsID = "BackupURLNewsID"),
          (n.KeepPointsControlCenter = "KeepPointsControlCenter"),
          (n.LatestTimeForWithdrawalNews = "LatestTimeForWithdrawalNews"),
          (n.LatestTimeForDepositNews = "LatestTimeForDepositNews"),
          (n.HaveReadDepositNews = "HaveReadDepositNews"),
          (n.ImportantNewsID = "ImportantNewsID"),
          (n.ImportantNewsID_NewsLevel = "ImportantNewsID_NewsLevel"),
          (n.CloseBrowserSuggestWindow = "CloseBrowserSuggestWindow"),
          (n.GameHeadline = "GameHeadline"),
          n
        );
      })();
      n.LocalStorageKey = t;
      i = (function () {
        function n() {}
        return (
          (n.GameLobbyUrl = "GameLobbyUrl"),
          (n.GameLobbySubGameType = "GameLobbySubGameType"),
          (n.ServLine = "ServLine"),
          n
        );
      })();
      n.SessionStorageKey = i;
    })((t = n.ConstDefinition || (n.ConstDefinition = {})));
  })(OBSApp || (OBSApp = {})),
  (function (n) {
    var t = (function () {
      function t() {
        this.LanguageCode = "vi-VN";
        this.CallbackLanguageID = CallbackLanguageIDEnum.Vietnamese;
        this.FilterBopomofoRegExp = /([\u3105-\u3129])/g;
        this.NicknameRegExp =
          /^[a-zA-Z0-9_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ][a-zA-Z0-9_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\s]{0,9}$/;
        this.WechatIDRegExp = /^[A-Za-z|0-9*]{6,20}$/;
        this.TelegramIDRegExp = /^[A-Za-z|*][A-Za-z0-9_|*]{4,31}$/;
        this.QQIDRegExp = /^[A-Za-z|0-9*]{6,20}$/;
        this.AccountNameRecipientRegExp =
          /^[.'’a-zA-ZÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\s]{0,50}$/;
        this.OnlineMessageRegExp = /^.{0,1000}$/;
        this.InternationalCallMinLengthRegExp = /^\+?[*\d]{5,}$/;
        this.MaskCellphoneRegExp = /(\d{3})\d*(\d{3})/;
        this.GiftEventRecipientRegExp =
          /^$|^[.'’a-zA-Z_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ][.'’a-zA-Z_ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞȦǠẠȀÀẢȂĀĄÅǺḀȺÃꜲÆǼǢꜴꜶꜸꜺꜼḂḄƁḆɃƂĆČÇḈĈĊƇȻĎḐḒḊḌƊḎǲǅĐƋǱǄÉĔĚȨḜÊẾỆỀỂỄḘËĖẸȄÈẺȆĒḖḔĘɆẼḚꝪḞƑǴĞǦĢĜĠƓḠǤḪȞḨĤⱧḦḢḤĦÍĬǏÎÏḮİỊȈÌỈȊĪĮƗĨḬꝹꝻꝽꞂꞄꞆꝬĴɈḰǨĶⱩꝂḲƘḴꝀꝄĹȽĽĻḼḶḸⱠꝈḺĿⱢǈŁǇḾṀṂⱮŃŇŅṊṄṆǸƝṈȠǋÑǊÓŎǑÔỐỘỒỔỖÖȪȮȰỌŐȌÒỎƠỚỢỜỞỠȎꝊꝌŌṒṐƟǪǬØǾÕṌṎȬƢꝎƐƆȢṔṖꝒƤꝔⱣꝐꝘꝖŔŘŖṘṚṜȐȒṞɌⱤꜾƎŚṤŠṦŞŜȘṠṢṨŤŢṰȚȾṪṬƬṮƮŦⱯꞀƜɅꜨÚŬǓÛṶÜǗǙǛǕṲỤŰȔÙỦƯỨỰỪỬỮȖŪṺŲŮŨṸṴꝞṾƲṼꝠẂŴẄẆẈẀⱲẌẊÝŶŸẎỴỲƳỶỾȲɎỸŹŽẐⱫŻẒȤẔƵĲŒᴀᴁʙᴃᴄᴅᴇꜰɢʛʜɪʁᴊᴋʟᴌᴍɴᴏɶᴐᴕᴘʀᴎᴙꜱᴛⱻᴚᴜᴠᴡʏᴢáăắặằẳẵǎâấậầẩẫäǟȧǡạȁàảȃāąᶏẚåǻḁⱥãꜳæǽǣꜵꜷꜹꜻꜽḃḅɓḇᵬᶀƀƃɵćčçḉĉɕċƈȼďḑḓȡḋḍɗᶑḏᵭᶁđɖƌıȷɟʄǳǆéĕěȩḝêếệềểễḙëėẹȅèẻȇēḗḕⱸęᶒɇẽḛꝫḟƒᵮᶂǵğǧģĝġɠḡᶃǥḫȟḩĥⱨḧḣḥɦẖħƕíĭǐîïḯịȉìỉȋīįᶖɨĩḭꝺꝼᵹꞃꞅꞇꝭǰĵʝɉḱǩķⱪꝃḳƙḵᶄꝁꝅĺƚɬľļḽȴḷḹⱡꝉḻŀɫᶅɭłǉſẜẛẝḿṁṃɱᵯᶆńňņṋȵṅṇǹɲṉƞᵰᶇɳñǌóŏǒôốộồổỗöȫȯȱọőȍòỏơớợờởỡȏꝋꝍⱺōṓṑǫǭøǿõṍṏȭƣꝏɛᶓɔᶗȣṕṗꝓƥᵱᶈꝕᵽꝑꝙʠɋꝗŕřŗṙṛṝȑɾᵳȓṟɼᵲᶉɍɽↄꜿɘɿśṥšṧşŝșṡṣṩʂᵴᶊȿɡᴑᴓᴝťţṱțȶẗⱦṫṭƭṯᵵƫʈŧᵺɐᴂǝᵷɥʮʯᴉʞꞁɯɰᴔɹɻɺⱹʇʌʍʎꜩúŭǔûṷüǘǚǜǖṳụűȕùủưứựừửữȗūṻųᶙůũṹṵᵫꝸⱴꝟṿʋᶌⱱṽꝡẃŵẅẇẉẁⱳẘẍẋᶍýŷÿẏỵỳƴỷỿȳẙɏỹźžẑʑⱬżẓȥẕᵶᶎʐƶɀﬀﬃﬄﬁﬂĳœﬆₐₑᵢⱼₒᵣᵤᵥₓ\s]{0,49}$/;
        this.NicknameRegExpAlertWording = "請輸入1 ~ 8碼字母數字字符";
        this.IsEnableComplianboxContentKeypress = !1;
        this.IsEnableMemberStatus3UnderReviewWarn = !0;
        this.IsEnableSMSChangeMode = !0;
        this.IsEnableGiftEventLoadMemberAddressOnInit = !1;
        this.IsGiftEventAddressFirst = !0;
        this.IsEnableGiftEventRecipientFormatLatiniseWithSpace = !0;
        this.IsDistrictSelectorOpen = !1;
        this.WechatIDAlertError = "微信帳號格式錯誤！";
        this.QQIDAlertError = "QQ帳號格式錯誤！";
        this.WechatIDAlias = "ZALO";
        this.QQIDAlias = "Viber";
        this.TelegramIDAlias = "Telegram";
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
        (t.prototype.ReplaceAmountToString = function (n) {
          return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        }),
        (t.prototype.ReplaceAmountToNumber = function (n) {
          return Number(n.replace(/\./g, ""));
        }),
        (t.prototype.GetFullLevelTypeName = function (n) {
          return n;
        }),
        (t.prototype.SetAngulrNumberFormatsGroupSep = function (n) {
          n.NUMBER_FORMATS.GROUP_SEP = ".";
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
        (t.prototype.ChkDeliveryAddress = function (t, i) {
          var r = { Valid: !0, Message: "" },
            u = {
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
              ? ((!t.Address || t.Address === "") &&
                  (t.CityID || t.CityID != 0) &&
                  (i == DeliveryAddressTypeEnum.Unspecified ||
                    i == DeliveryAddressTypeEnum.Address) &&
                  ((r.Valid = !1),
                  (r.Message = n.Helpers.ChangeLanguage("請輸入地址"))),
                (t.CityID && t.CityID !== 0) ||
                  (i != DeliveryAddressTypeEnum.Unspecified &&
                    i != DeliveryAddressTypeEnum.City) ||
                  ((r.Valid = !1),
                  (r.Message = n.Helpers.ChangeLanguage("請選擇城市"))),
                (t.ProvincesID && t.ProvincesID !== 0) ||
                  (i != DeliveryAddressTypeEnum.Unspecified &&
                    i != DeliveryAddressTypeEnum.ProvincesID) ||
                  ((r.Valid = !1),
                  (r.Message = n.Helpers.ChangeLanguage("請選擇省份驗證"))))
              : (u = {
                  ProvincesID: 0,
                  CityID: 0,
                  DistrictID: 0,
                  Address: "",
                  PostCode: t.PostCode,
                  Locality: t.Locality,
                }),
            { Valid: r.Valid, Message: r.Message, Data: u }
          );
        }),
        (t.prototype.EventDeliveryAddress = function (t) {
          var i = { Valid: !1, EventError: { Address: "", CityID: "" } };
          return (
            (t.ProvincesID && t.ProvincesID != 0) ||
            (t.Address && t.Address != "")
              ? ((i.Valid = !0),
                (t.Address && t.Address !== "") ||
                  ((i.Valid = !1),
                  (i.EventError.Address =
                    n.Helpers.ChangeLanguage("請輸入寄送地址"))),
                (t.CityID && t.CityID !== 0) ||
                  ((i.Valid = !1),
                  (i.EventError.CityID =
                    n.Helpers.ChangeLanguage("請選擇城市"))),
                (t.ProvincesID && t.ProvincesID !== 0) ||
                  ((i.Valid = !1),
                  (i.EventError.CityID =
                    n.Helpers.ChangeLanguage("請選擇省分"))),
                (t.ProvincesID && t.ProvincesID !== 0) ||
                  (t.CityID && t.CityID !== 0) ||
                  ((i.Valid = !1),
                  (i.EventError.CityID =
                    n.Helpers.ChangeLanguage("請選擇省份及城市"))))
              : (i = {
                  Valid: !1,
                  EventError: {
                    Address: "",
                    CityID: n.Helpers.ChangeLanguage("請選擇省份及城市"),
                  },
                }),
            i
          );
        }),
        (t.prototype.AppendUpdateMemberInfoModelToDescription = function () {}),
        t
      );
    })();
    n.SiteCultureMethodVN = t;
  })(OBSApp || (OBSApp = {}));
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
                  t.CryptocurrencyWithdrawalMode != 1 &&
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
          angular.module("OBSApp.Directives").directive(n, t);
        }),
        (n.RegisterDirectives = function (n) {
          var t = this,
            i = Object.getOwnPropertyNames(n);
          i.forEach(function (i) {
            t.RegisterDirective(n[i].$name, n[i].$inject);
          });
        }),
        (n.RegisterService = function (n, t) {
          angular.module("OBSApp.Services").service(n, t);
        }),
        (n.RegisterFactory = function (n, t) {
          angular.module("OBSApp.Factorys").factory(n, t);
        }),
        (n.RegisterFactorys = function (n) {
          var t = Object.getOwnPropertyNames(n);
          t.forEach(function (t) {
            angular.module("OBSApp.Factorys").factory(n[t].$name, n[t].$inject);
          });
        }),
        (n.RegisterFilter = function (n, t) {
          angular.module("OBSApp.Filter").filter(n, t);
        }),
        (n.RegisterController = function (n, t) {
          angular.module("OBSApp.Controllers").controller(n, t);
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
      "OBSApp.Directives",
      "OBSApp.Controllers",
      "OBSApp.Services",
      "OBSApp.Factorys",
      "OBSApp.Filter",
    ];
    i.forEach(function (n) {
      return angular.module(n, []);
    });
    i = i
      .concat([
        "angular.filter",
        "ngAnimate",
        "blockUI",
        "base64",
        "datePicker",
        "angular.filter",
        "ngTable",
        "ngCookies",
        "checklist-model",
        "ngMask",
        "ds.objectDiff",
        "ngSanitize",
      ])
      .concat(["ngFileUpload"]);
    angular
      .module("OBSApp", i)
      .constant("appConfig", r.ConstantFactory())
      .value("appContext", o.ValueFactory())
      .config(f)
      .provider(t.$name, t)
      .run(e);
    u.IframeUnbind();
  })(OBSApp || (OBSApp = {})),
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
              e = event || handlerEvent;
            } catch (a) {
              handlerEvent && (e = handlerEvent);
            } finally {
              handlerEvent = null;
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
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Common.DataProvider.$name,
  OBSApp.Common.DataProvider
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
      var h = (function () {
          function n(n) {
            this.$filter = n;
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
            (n.$inject = ["$filter"]),
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
      t.ToolsService = i;
      r = (function () {
        function n(n) {
          this.dataProvider = n;
        }
        return (
          (n.prototype.SetUserLanguage = function (n) {
            var t = this.dataProvider.CreateDeferred(),
              i = "";
            return (
              location.hostname.indexOf("localhost") != -1
                ? location.pathname != "/" && (i = "../")
                : (i =
                    location.pathname.split("/").length > 2
                      ? "../"
                      : location.href + "/"),
              this.dataProvider
                .Get(
                  i + "api/Common/SetUserLanguage?languageCode=" + n,
                  HttpMethodEnum.Get
                )
                .then(function (n) {
                  n == !1 && t.reject(n);
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (n.$name = "CultureSvc"),
          (n.$inject = ["DataProvider"]),
          n
        );
      })();
      t.CultureService = r;
      u = (function () {
        function t(t) {
          this.dataProvider = t;
          this.model = new n.Models.MarqueeQueryModel();
        }
        return (
          (t.prototype.GetMarquee = function (n) {
            var t = this.dataProvider.CreateDeferred(),
              i = "";
            return (
              location.hostname.indexOf("localhost") != -1
                ? location.pathname != "/" && (i = "../")
                : (i =
                    location.pathname.split("/").length > 2
                      ? "../"
                      : location.href + "/"),
              (this.model.NewsCategory = 6),
              (this.model.NewsLocation = 1),
              (this.model.NewsLevel = 0),
              (this.model.LanguageCode = n),
              (this.model.PageNumber = 0),
              (this.model.PageSize = 10),
              this.dataProvider
                .Get(
                  i + "api/Common/GetRevealableNewsByCondition",
                  HttpMethodEnum.Post,
                  this.model
                )
                .then(function (n) {
                  n == null && t.reject(n);
                  t.resolve(n);
                })
                .catch(function (n) {
                  t.reject(n);
                }),
              t.promise
            );
          }),
          (t.$name = "MarqueeSvc"),
          (t.$inject = ["DataProvider"]),
          t
        );
      })();
      t.MarqueeService = u;
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
                .Get(
                  "../../../../api/Authorize/GetLoggedinInfo",
                  HttpMethodEnum.Post
                )
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
                      : t.messageBus.Emit(
                          n.ConstDefinition.MessageBusEventName
                            .OnGetLoggedinInfo,
                          n.Models.LoginStatusEnum.NotLogin
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
          (t.prototype.GetUserProfile = function () {
            var t = this,
              i = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get("../api/Authorize/GetLoggedinInfo", HttpMethodEnum.Post)
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
          (t.prototype.RefreshMemberBlackList = function () {
            var t = this,
              n = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Game/GetMemberPlatformFrontendBlackListByAccountID",
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
                  "../api/Authorize/GetCompetenceAppConfig",
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
          (t.prototype.CheckNeedKickLoginStatus = function () {
            var t = this;
            this.dataProvider
              .Get(
                "../../../../api/Authorize/CheckNeedKickLoginStatus",
                HttpMethodEnum.Post,
                { AccountID: this.appContext.UserProfile.AccountID }
              )
              .then(function (i) {
                t.appContext.UserProfile.LoginMenuSwitch.MemberStatus !=
                  i.Data.MemberStatus &&
                  t.messageBus.Emit(
                    n.ConstDefinition.MessageBusEventName.OnRefreshUserProfile,
                    null
                  );
                t.appContext.UserProfile.LoginMenuSwitch = i.Data;
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnRefereshLoginMenuSwitchToSubWindow,
                  i.Data
                );
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnCheckNeddKickLoginStatus,
                  1001
                );
              })
              .catch(function (i) {
                t.StopCheckInterval();
                var r = i != null && i.Error != null ? i.Error.Code : 4011;
                t.messageBus.Emit(
                  n.ConstDefinition.MessageBusEventName
                    .OnCheckNeddKickLoginStatus,
                  r
                );
              });
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
          (t.prototype.ResetUserProfile = function () {
            this.appContext.LoginStatus = n.Models.LoginStatusEnum.Checking;
            this.appContext.UserProfile = __assign(
              {},
              n.Models.DefaultUserProfile
            );
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
                { AccountID: this.appContext.UserProfile.AccountID },
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
                .Get("../api/Common/CreateOperationLog", HttpMethodEnum.Post, n)
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
                  "../api/Common/GetOperationLogByCondition",
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
          (t.prototype.GetMemberInfoOperationLogContent = function (n) {
            var t = this,
              i = [];
            if (((this.LogFieldDataID = ""), n.changed !== "equal"))
              return (
                angular.forEach(n.value, function (n, r) {
                  if (
                    n.changed.indexOf("change") > -1 &&
                    t.LogField[r] != null
                  ) {
                    var u = "",
                      f = "";
                    t.LogField[r].MapperData &&
                      t.LogField[r].MapperData.forEach(function (t) {
                        u = String(n.removed) == String(t.Value) ? t.Text : u;
                        f = String(n.added) == String(t.Value) ? t.Text : f;
                      });
                    i.push({
                      FieldName: r.toString(),
                      FieldDisplayName: t.LogField[r].FieldDisplayName,
                      BeforeValue: n.removed,
                      BeforeName:
                        u != "" ? (u == "#EMPTY#" ? "" : u) : n.removed,
                      AfterValue: n.added,
                      AfterName: f != "" ? (f == "#EMPTY#" ? "" : f) : n.added,
                    });
                  }
                  r.toString() == t.LogField.DataID &&
                    (t.LogFieldDataID = n.value);
                }),
                i
              );
          }),
          (t.prototype.InsertMemberInfoOperationLog = function (n) {
            var t = this.dataProvider.CreateDeferred();
            return (
              this.dataProvider
                .Get(
                  "../api/Common/CreateMemberInfoOperationLog",
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
                  "../api/Common/GetMemberInfoOperationLogByCondition",
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
      t.LogService = e;
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
                  "../api/Verify/CheckMemberLoginMenuPermission",
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
              "../api/Common/IsMemberRegisterEnabled"
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
                .Get("../api/Verify/GetSliderCaptcha", HttpMethodEnum.Post)
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
                .Get("../api/Verify/CheckSliderCaptcha", HttpMethodEnum.Post, n)
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
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.XPagerService.$name,
  OBSApp.Services.XPagerService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.ToolsService.$name,
  OBSApp.Services.ToolsService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.CultureService.$name,
  OBSApp.Services.CultureService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.MarqueeService.$name,
  OBSApp.Services.MarqueeService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.AppContextService.$name,
  OBSApp.Services.AppContextService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.LogService.$name,
  OBSApp.Services.LogService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.PermissionService.$name,
  OBSApp.Services.PermissionService
);
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Services.VerifyService.$name,
  OBSApp.Services.VerifyService
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
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterFactorys(OBSApp.Factorys),
  (function (n) {
    var t;
    (function (t) {
      var lr = (function () {
          function n() {}
          return (
            (n.DirectiveFactory = function () {
              return {
                restrict: "A",
                link: function (n, t) {
                  var i = t.find("form");
                  i.each(function (n, t) {
                    jQuery(t).attr("novalidate", "novalidate");
                  });
                },
              };
            }),
            (n.$name = "formNovalidate"),
            (n.$inject = [n.DirectiveFactory]),
            n
          );
        })(),
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
        fi,
        ei,
        oi,
        si,
        hi,
        ci,
        li,
        ai,
        vi,
        yi,
        pi,
        wi,
        bi,
        ki,
        di,
        gi,
        i,
        nr,
        tr,
        ir,
        rr,
        ur,
        fr,
        er,
        or,
        sr,
        hr,
        cr;
      t.FormNovalidate = lr;
      r = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            var i = '<i class="errorHint"></i>',
              t = '<span class="errorHint"></span>',
              r = function (n, t) {
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
              link: function (u, f, e) {
                var c = e.isSubmit || !0,
                  s = e.errorPanelId,
                  h = e.asName,
                  l = e.ignore || "",
                  a = e.isIgnoreTitle && e.isIgnoreTitle === "true",
                  v = f,
                  o;
                h &&
                  u[h] &&
                  (u.IsRegister ||
                    ((u.Validators = {}),
                    u[h].RegisterValidation(),
                    (u.IsRegister = !0)));
                o = v.validate({
                  ignore: l,
                  onsubmit: c,
                  ignoreTitle: a,
                  showErrors: function (n, u) {
                    if (!o.cancelSubmit)
                      return (
                        $.each(o.successList, function (n, t) {
                          var i;
                          if (
                            $(t).parent(".rd-col") != null &&
                            $(t).parent(".rd-col").length > 0
                          )
                            i = $(t).parent(".rd-col");
                          else if (
                            $(t).parent("div") != null &&
                            $(t).parent("div").length > 0
                          )
                            i = $(t).parent("div");
                          else return;
                          i.hasClass("error") &&
                            (i.removeClass("error"),
                            i.find("span.errorHint").each(function (n, t) {
                              $(t).remove();
                            }));
                        }),
                        r(s, u),
                        $.each(u, function (n, r) {
                          var u = null,
                            f;
                          if (
                            $(r.element).parent(".rd-col") != null &&
                            $(r.element).parent(".rd-col").length > 0
                          )
                            u = $(r.element).parent(".rd-col");
                          else if (
                            $(r.element).parent("div") != null &&
                            $(r.element).parent("div").length > 0
                          )
                            u = $(r.element).parent("div");
                          else return;
                          if (u.hasClass("error"))
                            u.hasClass("error") &&
                              $("span.errorHint", u).text() != r.message &&
                              $("span.errorHint", u).text(r.message);
                          else if ((u.addClass("error"), s))
                            switch (s) {
                              case "before":
                                $(r.element).before($(t).text(r.message));
                                break;
                              case "after":
                                $(r.element).after($(t).text(r.message));
                                break;
                              default:
                                u.append(i);
                            }
                          else
                            (f = u.children("span.errorHint")),
                              f.length != 0
                                ? f.text(r.message)
                                : u.append($(t).text(r.message));
                          return $(r.element);
                        })
                      );
                  },
                });
                u.Validators[e.name] = o;
                n.On("fancyBoxClose", function (n, t) {
                  var i = jQuery(t).find("form");
                  i != null &&
                    i.length > 0 &&
                    i.each(function (n, t) {
                      $(t).find(".error").removeClass("error");
                      $(t).find("span.errorHint").remove();
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
      t.FormValidationSetting = r;
      u = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              priority: -190,
              link: function (n, t) {
                var i = t.parents("form");
                t.click(function (n) {
                  if (!i.valid())
                    return n.stopImmediatePropagation(), n.preventDefault(), !1;
                });
              },
            };
          }),
          (n.$name = "validButton"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ValidButton = u;
      f = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            var n = function (n, t, i) {
              n.settings.rules[t] = i;
            };
            return {
              restrict: "A",
              link: function (t, i, r) {
                var u = t.$watch("Validator", function (newVal) {
                  if (newVal) {
                    var rule = r.addRule;
                    rule &&
                      (n(
                        t.Validator,
                        $(i).attr("name"),
                        eval("(" + rule + ")")
                      ),
                      u());
                  }
                });
              },
            };
          }),
          (n.$name = "addRule"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.AddRule = f;
      e = (function () {
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
      t.ValidRule = e;
      o = (function () {
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
      t.SubmitAutoDisable = o;
      s = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              priority: -200,
              require: "?ngModel",
              link: function (i, r, u, f) {
                var o = r.val() || r.text(),
                  p,
                  w,
                  y,
                  k;
                (r[0].tagName === "BUTTON" || r[0].tagName === "A") &&
                  (o = r.html());
                var h = null,
                  c = null,
                  l = !0,
                  a = !1,
                  e = !0,
                  b = u.isDebounce && u.isDebounce === "true",
                  v = null,
                  s = u.disableCssName || "btn-disabled";
                u.ngValidClick && (h = n(u.ngValidClick));
                u.ngPromiseClick && (c = n(u.ngPromiseClick));
                u.isAutoDisabled === "false" && (e = !1);
                r[0].tagName == "INPUT"
                  ? u.type === "submit"
                    ? ((p = r.parents("form")),
                      p.submit(function (n) {
                        if (
                          ((handlerEvent = n),
                          (a = !0),
                          p.length > 0 && p.valid != null
                            ? p.valid() &&
                              (u.ajaxSubmitAutoDisable &&
                                r.val(u.ajaxSubmitAutoDisable),
                              e && (r.attr("disabled", "true"), r.addClass(s)))
                            : (u.ajaxSubmitAutoDisable &&
                                r.val(u.ajaxSubmitAutoDisable),
                              e && (r.attr("disabled", "true"), r.addClass(s))),
                          h && (l = h(i, { $event: n })),
                          !l && a)
                        ) {
                          r.val(o);
                          e && r.removeAttr("disabled");
                          return;
                        }
                        c &&
                          ((v = c(i, { $event: n })),
                          v
                            .then(function () {
                              return;
                            })
                            .catch(function () {
                              return;
                            })
                            .finally(function () {
                              r.val(o);
                              e && r.removeAttr("disabled");
                            }));
                      }))
                    : u.type === "button" &&
                      ((w = r.parents("form")),
                      (y = function (n) {
                        if (
                          ((handlerEvent = n),
                          w.length > 0 && w.valid != null
                            ? w.valid()
                              ? (u.ajaxSubmitAutoDisable &&
                                  r.val(u.ajaxSubmitAutoDisable),
                                e &&
                                  (r.attr("disabled", "true"), r.addClass(s)),
                                (a = !0))
                              : (n.stopImmediatePropagation(),
                                n.preventDefault())
                            : (u.ajaxSubmitAutoDisable &&
                                r.val(u.ajaxSubmitAutoDisable),
                              e && (r.attr("disabled", "true"), r.addClass(s)),
                              (a = !0)),
                          h && (l = h(i, { $event: n })),
                          !l && a)
                        ) {
                          r.val(o);
                          e && (r.removeAttr("disabled"), r.removeClass(s));
                          return;
                        }
                        c &&
                          ((v = c(i, { $event: n })),
                          v
                            .then(function () {
                              return;
                            })
                            .catch(function () {
                              return;
                            })
                            .finally(function () {
                              r.val(o);
                              e && r.removeAttr("disabled");
                            }));
                      }),
                      b
                        ? r.click(
                            _.debounce(y, 1e3, { leading: !0, trailing: !1 })
                          )
                        : r.click(y))
                  : ((y = function (n) {
                      var t, f;
                      if (
                        ((handlerEvent = n),
                        (t = !0),
                        u.requiredvalid &&
                          ((f = r.parents("form")),
                          (t = f.validate().element("#" + u.requiredvalid))),
                        t)
                      ) {
                        if (
                          (u.ajaxSubmitAutoDisable &&
                            r.html(u.ajaxSubmitAutoDisable),
                          e && (r.attr("disabled", "true"), r.addClass(s)),
                          h && (l = h(i, { $event: n })),
                          !l && a)
                        ) {
                          r.html(o);
                          e && (r.removeAttr("disabled"), r.removeClass(s));
                          return;
                        }
                        c &&
                          ((v = c(i, { $event: n })),
                          v
                            .then(function () {
                              return;
                            })
                            .catch(function () {
                              return;
                            })
                            .finally(function () {
                              r.val(o);
                              e && r.removeAttr("disabled");
                            }));
                      }
                    }),
                    b
                      ? r.click(
                          _.debounce(y, 1e3, { leading: !0, trailing: !1 })
                        )
                      : r.click(y));
                k = f
                  ? i.$watch(
                      function () {
                        return f.$modelValue;
                      },
                      function (n) {
                        n != null &&
                          n == !1 &&
                          (r[0].tagName == "INPUT"
                            ? r.val(o)
                            : r[0].tagName == "BUTTON"
                            ? r.html(o)
                            : r.html(o),
                          e && (r.removeAttr("disabled"), r.removeClass(s)));
                      }
                    )
                  : i.$watch(
                      function () {
                        return t.isSubmit;
                      },
                      function (n) {
                        n == !1 &&
                          (r[0].tagName == "INPUT"
                            ? r.val(o)
                            : r[0].tagName == "BUTTON"
                            ? r.html(o)
                            : r.html(o),
                          e && (r.removeAttr("disabled"), r.removeClass(s)));
                      }
                    );
                i.$on("destroy", function () {
                  k();
                  h = null;
                });
              },
            };
          }),
          (n.$name = "ajaxSubmitAutoDisable"),
          (n.$inject = ["$parse", "$rootScope", n.DirectiveFactory]),
          n
        );
      })();
      t.AjaxSubmitAutoDisable = s;
      h = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i) {
            return {
              restrict: "A",
              priority: -200,
              require: "?ngModel",
              link: function (r, u, f, e) {
                var rt = u.val() || u.text(),
                  p = null,
                  h = null,
                  a = !1,
                  v = !0,
                  w = null,
                  nt = f.disableCssName || "btn-disabled",
                  ut = Number(f.delayEnable || "500"),
                  tt = f.isDebounce && f.isDebounce === "true",
                  b = function () {
                    f.ajaxSubmitAutoDisableV2 && k(f.ajaxSubmitAutoDisableV2);
                  },
                  o = function () {
                    var n = f.originalName || "";
                    n != "" ? k(n) : k(rt);
                  },
                  k = function (n) {
                    u[0].tagName == "INPUT" ? u.val(n) : u.text(n);
                  },
                  d = function () {
                    v && (u.attr("disabled", "true"), u.addClass(nt));
                  },
                  s = function () {
                    v && (u.removeAttr("disabled"), u.removeClass(nt));
                  },
                  g = function (n) {
                    return p ? p(r, { $event: n }) : !0;
                  },
                  y,
                  c,
                  l,
                  it;
                f.ngValidClick && (p = n(f.ngValidClick));
                f.ngPromiseClick && (h = n(f.ngPromiseClick));
                f.isAutoDisabled === "false" && (v = !1);
                u[0].tagName == "INPUT"
                  ? f.type === "submit"
                    ? ((y = u.parents("form")),
                      y.submit(function (n) {
                        var t, i, u;
                        handlerEvent = n;
                        a = !0;
                        t = y.length > 0 && y.valid != null;
                        i = t && y.valid();
                        (t === !1 || i) && (b(), d(), n.preventDefault());
                        u = g(n);
                        !u && a && (o(), s(), (handlerEvent = null));
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {})
                            .finally(function () {
                              o();
                              s();
                            }));
                      }))
                    : f.type === "button" &&
                      ((c = u.parents("form")),
                      (l = function (n) {
                        var t, i, u, e;
                        if (
                          ((handlerEvent = n),
                          (t = !0),
                          f.requiredvalid
                            ? (t = c.validate().element("#" + f.requiredvalid))
                            : c.valid != null && (t = c.valid()),
                          (i = c.length > 0 && c.valid != null),
                          (u = i && t),
                          (i === !1 || u) &&
                            (b(), d(), (a = !0), n.preventDefault()),
                          i &&
                            !u &&
                            (n.stopImmediatePropagation(), n.preventDefault()),
                          (e = g(n)),
                          !e && a)
                        ) {
                          o();
                          s();
                          handlerEvent = null;
                          return;
                        }
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {})
                            .finally(function () {
                              o();
                              s();
                            }));
                      }),
                      tt
                        ? u.click(
                            _.debounce(l, 1e3, { leading: !0, trailing: !1 })
                          )
                        : u.click(l))
                  : ((l = function (n) {
                      var c = u.attr("disabled") === "disabled",
                        t,
                        i,
                        e;
                      if (
                        !c &&
                        ((handlerEvent = n),
                        (a = v),
                        (t = !0),
                        f.requiredvalid &&
                          ((i = u.parents("form")),
                          (t = i.validate().element("#" + f.requiredvalid)),
                          n.preventDefault()),
                        t)
                      ) {
                        if (
                          (b(), d(), n.preventDefault(), (e = g(n)), !e && v)
                        ) {
                          o();
                          s();
                          handlerEvent = null;
                          return;
                        }
                        h &&
                          (w = h(r, { $event: n })
                            .catch(function () {})
                            .finally(function () {
                              o();
                              s();
                            }));
                      }
                    }),
                    tt
                      ? u.click(
                          _.debounce(l, 1e3, { leading: !0, trailing: !1 })
                        )
                      : u.click(l));
                it = e
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
                  it();
                  p = null;
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
      t.AjaxSubmitAutoDisableV2 = h;
      c = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              priority: -200,
              link: function (n, i, r) {
                var u = i.val() || i.text(),
                  f = r.ajaxSubmitAutoDisableWhenSend || "處理中",
                  e = n.$watch(
                    function () {
                      return t.isSubmit;
                    },
                    function (n) {
                      n == !0
                        ? i[0].tagName == "INPUT"
                          ? (i.val(f),
                            i.attr("disabled", "true"),
                            i.addClass("btn-disabled"))
                          : (i.text(f),
                            i.attr("disabled", "true"),
                            i.addClass("btn-disabled"))
                        : i[0].tagName == "INPUT"
                        ? (i.val(u),
                          i.removeAttr("disabled"),
                          i.removeClass("btn-disabled"))
                        : (i.text(u),
                          i.removeAttr("disabled"),
                          i.removeClass("btn-disabled"));
                    }
                  );
                n.$on("destroy", function () {
                  e();
                });
              },
            };
          }),
          (n.$name = "ajaxSubmitAutoDisableWhenSend"),
          (n.$inject = ["$parse", "$rootScope", n.DirectiveFactory]),
          n
        );
      })();
      t.AjaxSubmitAutoDisableWhenSend = c;
      l = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var f = null;
                u.ngEnter && (f = t(u.ngEnter));
                r.bind("keypress", function (t) {
                  t.which === 13 &&
                    (f &&
                      n(function () {
                        f(i, { $event: t });
                      }),
                    u.ngEnterButtonId &&
                      ($("#" + u.ngEnterButtonId).is(":disabled") ||
                        $("#" + u.ngEnterButtonId).click()));
                });
                i.$on("$destroy", function () {
                  f = null;
                });
              },
            };
          }),
          (n.$name = "ngEnter"),
          (n.$inject = ["$timeout", "$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.NgEnter = l;
      a = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t) {
                t.keypress(function (n) {
                  var r = $(".tooltip").is(":visible"),
                    i = n.keyCode ? n.keyCode : n.which,
                    u = n.shiftKey ? n.shiftKey : i == 16 ? !0 : !1;
                  (i >= 64 && i <= 90 && !u) || (i >= 97 && i <= 122 && u)
                    ? r || t.tooltip("show")
                    : r && t.tooltip("hide");
                });
                t.blur(function () {
                  t.tooltip("hide");
                });
              },
            };
          }),
          (n.$name = "textCapsLock"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.TextCapsLock = a;
      v = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "E",
              link: function (n, t, i) {
                var r = i.msgType ? i.msgType : "Info",
                  u = i.msgTypeClass ? i.msgTypeClass : "gritter-info",
                  f = i.msgContent ? i.msgContent : "";
                jQuery.gritter.add({
                  title: r,
                  text: f,
                  time: 2e3,
                  class_name: u,
                });
              },
            };
          }),
          (n.$name = "alertMessage"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.AlertMessage = v;
      y = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              link: function (i, r) {
                var u = r.on("click", function () {
                  t.state().blocking ||
                    n(function () {
                      t.start();
                    });
                });
                i.$on("destroy", function () {
                  r.off(u);
                });
              },
            };
          }),
          (n.$name = "clickAutoBlock"),
          (n.$inject = ["$timeout", "blockUI", n.DirectiveFactory]),
          n
        );
      })();
      t.ClickAutoBlock = y;
      p = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            return {
              restrict: "A",
              link: function (i, r) {
                r.parents("form").submit(function () {
                  t.state().blocking ||
                    n(function () {
                      t.start();
                    });
                });
                i.$on("destroy", function () {});
              },
            };
          }),
          (n.$name = "submitAutoBlock"),
          (n.$inject = ["$timeout", "blockUI", n.DirectiveFactory]),
          n
        );
      })();
      t.SubmitAutoBlock = p;
      w = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t, i) {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function (r, u, f, e) {
                var c = f.blockUi,
                  s,
                  o,
                  h;
                c &&
                  ((s = f.isWatchHttp),
                  s && (s = s.toLowerCase() === "true"),
                  (o = i.instances.get(c)),
                  (h = null),
                  (h = s
                    ? r.$watch(
                        function () {
                          return n.isSubmit;
                        },
                        function (n) {
                          n == !0
                            ? o.state().blocking ||
                              t(function () {
                                o.start();
                              })
                            : o.isBlocking &&
                              t(function () {
                                o.stop();
                              });
                        }
                      )
                    : r.$watch(
                        function () {
                          return e.$modelValue;
                        },
                        function (n) {
                          n == !0
                            ? o.state().blocking ||
                              t(function () {
                                o.start();
                              })
                            : o.isBlocking &&
                              t(function () {
                                o.stop();
                              });
                        }
                      )),
                  r.$on("destroy", function () {
                    h();
                  }));
              },
            };
          }),
          (n.$name = "autoBlockArea"),
          (n.$inject = [
            "$rootScope",
            "$timeout",
            "blockUI",
            n.DirectiveFactory,
          ]),
          n
        );
      })();
      t.AutoBlockArea = w;
      b = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                var u = n.$watch(
                  function () {
                    return r.$modelValue;
                  },
                  function (n) {
                    n != null && t.val(n);
                  }
                );
                t.change(function () {
                  n.$apply(function () {
                    r.$setViewValue(t.val());
                  });
                });
                t.val() != null && r.$setViewValue(t.val());
                n.$on("destroy", function () {
                  u();
                });
              },
            };
          }),
          (n.$name = "ngUpdateHidden"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.NgUpdateHidden = b;
      k = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var u = r.onRepeatLast;
                t.$last === !0 &&
                  i.ready(function () {
                    n(function () {
                      t.$emit(u, i, r);
                    });
                  });
              },
            };
          }),
          (n.$name = "onRepeatLast"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.OnRepeatLast = k;
      d = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r) {
            return {
              restrict: "A",
              link: function (t, u, f) {
                var o = f.href,
                  s = f.failedCallback,
                  e = null;
                u.click(function () {
                  o &&
                    jQuery.fileDownload(o, {
                      prepareCallback: function () {
                        f.loadingBlock
                          ? r.start()
                          : ((e = u.val()),
                            u.attr("disabled", "true"),
                            u.val(
                              f.loadingText ||
                                n.Helpers.ChangeLanguage("處理中") + "..."
                            ));
                      },
                      successCallback: function () {
                        f.loadingBlock
                          ? i(function () {
                              r.stop();
                            })
                          : (u.removeAttr("disabled"), u.val(e));
                      },
                      failCallback: function () {
                        f.loadingBlock
                          ? i(function () {
                              r.stop();
                            })
                          : (u.removeAttr("disabled"), u.val(e));
                        s && eval(s);
                      },
                    });
                });
                t.$on("$destroy", function () {
                  o = null;
                  e = null;
                });
              },
            };
          }),
          (t.$name = "ngFileDownload"),
          (t.$inject = ["$parse", "$timeout", "blockUI", t.DirectiveFactory]),
          t
        );
      })();
      t.NgFileDownload = d;
      g = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            var t = {
              support: !!(n.FileReader && n.CanvasRenderingContext2D),
              isFile: function (t) {
                return angular.isObject(t) && t instanceof n.File;
              },
              isImage: function (n) {
                var t = "|" + n.type.slice(n.type.lastIndexOf("/") + 1) + "|";
                return "|jpg|png|jpeg|bmp|gif|".indexOf(t) !== -1;
              },
            };
            return {
              restrict: "A",
              template: "<canvas/>",
              link: function (n, i, r) {
                var u;
                if (t.support) {
                  if (((u = n.$eval(r.ngUploadThumb)), u.file)) {
                    if (!t.isFile(u.file)) return;
                    if (!t.isImage(u.file)) return;
                  } else if (!u.url) return;
                  var e = i.find("canvas"),
                    o = new FileReader(),
                    f = null,
                    s = function (n) {
                      f = new Image();
                      f.onload = h;
                      f.src = n.target.result;
                    },
                    h = function () {
                      var n = u.width || (f.width / f.height) * u.height,
                        t = u.height || (f.height / f.width) * u.width;
                      e.attr({ width: n, height: t });
                      e[0].getContext("2d").drawImage(f, 0, 0, n, t);
                    };
                  o.onload = s;
                  o.readAsDataURL(u.file);
                  n.$on("$destroy", function () {
                    f = null;
                  });
                }
              },
            };
          }),
          (n.$name = "ngUploadThumb"),
          (n.$inject = ["$window", n.DirectiveFactory]),
          n
        );
      })();
      t.NgUploadThumb = g;
      nt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n, t) {
            var i = function (t) {
              var i = n.scrollY || document.documentElement.scrollTop,
                u = i + n.innerHeight,
                r = t.offset().top,
                f = r + t.height();
              return f >= i && r <= u;
            };
            return {
              restrict: "A",
              link: function (n, r, u) {
                var l = u.ngImageThumb,
                  a = u.defaultImg,
                  f = null,
                  e = null,
                  h = null,
                  c = null,
                  o,
                  s;
                r.css({ visibility: "hidden" });
                r.on("load", function () {
                  (u.resizeWidth || u.resizeHeight) &&
                    ((f = parseInt(u.resizeWidth)),
                    (e = parseInt(u.resizeHeight)),
                    (h = f || (r.width() / r.height()) * e),
                    (c = e || (r.height() / r.width()) * f),
                    r.css({ visibility: "visible", width: h, height: c }));
                });
                o = null;
                s = function () {
                  o = t(function () {
                    i(r) ? r.attr("src", l) : s();
                  }, 500);
                };
                s();
                n.$on("$destroy", function () {
                  l = null;
                  f = null;
                  e = null;
                  h = null;
                  c = null;
                  t.cancel(o);
                  o = null;
                  s = null;
                });
              },
            };
          }),
          (n.$name = "ngImageThumb"),
          (n.$inject = ["$window", "$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.NgImageThumb = nt;
      tt = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t) {
                t.click(function () {
                  var n = t.parents("form").find("#triggerName");
                  n && n.length > 0 && n.val(t.val() || t.text());
                });
              },
            };
          }),
          (n.$name = "triggerButton"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.TriggerButton = tt;
      it = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i, r) {
                var s = i.attr("id") || i.attr("name"),
                  e = ["font", "colorbutton", "image2"],
                  u = n(r.ckEditor)(t) || {},
                  f = r.imageUploadUrl || null,
                  o = r.browserImageUploadUrl || null,
                  c = r.enableEmbed || null,
                  h = r.ckFor || null;
                f != null &&
                  (e.push("uploadimage"), $.extend(u, { imageUploadUrl: f }));
                o != null && $.extend(u, { filebrowserImageUploadUrl: o });
                $.extend(u, { extraPlugins: e.toString(), imageUploadUrl: f });
                u.removeButtons = "About,Source";
                h == null &&
                  i.ready(function () {
                    CKEDITOR.replace(s, u);
                  });
              },
            };
          }),
          (n.$name = "ckEditor"),
          (n.$inject = ["$parse", n.DirectiveFactory]),
          n
        );
      })();
      t.CkEditor = it;
      rt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return {
              restrict: "A",
              link: function (f, e, o) {
                var c = null,
                  h,
                  l,
                  p;
                o.fboxShow && (c = t(o.fboxShow));
                h = null;
                o.fboxClose && (h = t(o.fboxClose));
                l = null;
                o.fboxBeforeClose && (l = t(o.fboxBeforeClose));
                var d = (o.autoOpen || "false") === "true",
                  w = (o.showCloseButton || "true") === "true",
                  a = o.fboxCloseConfirm || "",
                  v = o.fboxCloseConfirmOktext,
                  y = o.fboxCloseConfirmCanceltext,
                  b = o.fboxCloseConfirmOkButtonClass,
                  k = o.fboxCloseConfirmCancelButtonClass,
                  s = o.fboxOpen || "",
                  g = !1;
                i.On("fboxCloseConfirmDestroy", function (n, t) {
                  t === s && (g = !0);
                });
                p = function (e) {
                  var tt = null,
                    nt = null,
                    d = !1,
                    it,
                    g;
                  if (
                    (!o.fboxCheck ||
                      ((g = null),
                      (g = t(o.fboxCheck)),
                      (it = g(f, { $event: e })),
                      it)) &&
                    (o.fboxCheckAsync &&
                      ((tt = r.defer()),
                      (nt = tt.promise),
                      (g = null),
                      (g = t(o.fboxCheckAsync)),
                      (nt = g(f, { $event: e }))),
                    s != null && s != "")
                  ) {
                    var rt = (o.fboxOverlayClose || "true") === "true",
                      ut =
                        typeof o.fboxAutoResize == "undefined" ||
                        o.fboxAutoResize === "true"
                          ? !0
                          : !1,
                      p = {
                        padding: 15,
                        helpers: { overlay: { closeClick: rt } },
                        closeBtn: w,
                        keys: { close: w },
                        autoPlay: !1,
                        loop: !1,
                      };
                    p.href = s;
                    p.beforeShow = function () {
                      var n, t;
                      $("body").attr("style", "overflow:hidden");
                      n = $(s).find("form");
                      n != null &&
                        n.length > 0 &&
                        f.Validators != null &&
                        ((t = f.Validators[n.attr("name")]),
                        t != null &&
                          (t.resetForm(),
                          n.find(".error").each(function (n, t) {
                            $(t).removeClass("error");
                            $(t).find("span.errorHint").remove();
                          })));
                      f.$evalAsync(function () {
                        jQuery.fancybox.update();
                        var n = o.fboxFocus;
                        typeof n != "undefined" &&
                          document.getElementById(n).focus();
                      });
                    };
                    c &&
                      (p.afterShow = function () {
                        f.$evalAsync(function () {
                          c(f, { $event: e });
                        });
                      });
                    p.beforeClose = function () {
                      return (
                        l &&
                          f.$evalAsync(function () {
                            l(f, { $event: e });
                          }),
                        a
                          ? (d ||
                              (v != "" && y != ""
                                ? b != "" && k != ""
                                  ? n.Helpers.AlertConfirmCallbackTextWithButtonClass(
                                      n.Helpers.ChangeLanguage("信息"),
                                      a,
                                      v,
                                      y,
                                      SweetAlertTypeEnum.none,
                                      b,
                                      k,
                                      function (n) {
                                        n ||
                                          ((d = !0), jQuery.fancybox.close());
                                      }
                                    )
                                  : n.Helpers.AlertConfirmCallbackText(
                                      a,
                                      v,
                                      y,
                                      SweetAlertTypeEnum.none,
                                      function (n) {
                                        n ||
                                          ((d = !0), jQuery.fancybox.close());
                                      }
                                    )
                                : n.Helpers.AlertConfirmCallback(
                                    a,
                                    SweetAlertTypeEnum.info,
                                    function (n) {
                                      d = n;
                                      d && jQuery.fancybox.close();
                                    }
                                  )),
                            d)
                          : void 0
                      );
                    };
                    p.afterClose = function () {
                      $("body").removeAttr("style");
                      i.Emit("fancyBoxClose", s);
                      h &&
                        f.$evalAsync(function () {
                          h(f, { $event: e });
                        });
                    };
                    nt == null
                      ? jQuery.fancybox(p)
                      : (nt.then(function (n) {
                          n &&
                            u(function () {
                              jQuery.fancybox(p);
                            });
                        }),
                        tt.resolve());
                  }
                };
                e.on("click", p);
                d && e.click();
                f.$on("$destroy", function () {
                  c = null;
                  h = null;
                  p = null;
                });
              },
            };
          }),
          (t.$name = "fboxOpen"),
          (t.$inject = [
            "$parse",
            "messageBus",
            "$q",
            "$timeout",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.FancyBoxOpen = rt;
      ut = (function () {
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
      t.ConvertToNumber = ut;
      ft = (function () {
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
      t.ConvertToString = ft;
      et = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              link: function (n, t, i, r) {
                r.$parsers.push(function (n) {
                  return n === "" || n === null ? undefined : n;
                });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "optional"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.Optional = et;
      ot = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            return {
              restrict: "A",
              link: function (r, u, f) {
                var o,
                  l = f.timer,
                  s = null,
                  h = null,
                  e = !1,
                  c;
                h = t(f.timerRepeat);
                c = r.$watchCollection(l, function (t) {
                  if (t.Enable) {
                    if (e) return;
                    if (!/^[0-9]*[1-9][0-9]*$/.test(t.Sec + "")) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("請填寫刷新時間")
                      );
                      t.Enable = !1;
                      return;
                    }
                    if (t.Sec < 10) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage("刷新時間需大於10秒")
                      );
                      t.Enable = !1;
                      return;
                    }
                    o = t.Sec;
                    s = i(function () {
                      t.Sec == 0
                        ? (t.Sec = o)
                        : ((t.Sec -= 1),
                          t.Sec == 0 &&
                            (h(r, { $event: event }),
                            n.Helpers.Notify(
                              n.Helpers.ChangeLanguage("資料已刷新"),
                              NotifyTypeEunm.info
                            )));
                    }, 1e3);
                    e = !0;
                  } else e && (i.cancel(s), (t.Sec = o), (e = !1));
                });
                r.$on("$destroy", function () {
                  c();
                  i.cancel(s);
                });
              },
            };
          }),
          (t.$name = "timer"),
          (t.$inject = ["$parse", "$interval", t.DirectiveFactory]),
          t
        );
      })();
      t.Timer = ot;
      st = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var f = function () {
                  var i = u.culture,
                    r = t
                      .SetUserLanguage(i)
                      .then(function () {
                        location.reload();
                      })
                      .catch(function () {
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage("轉換語系發生問題")
                        );
                      });
                };
                r.on("click", f);
                i.$on("$destroy", function () {
                  f = null;
                });
              },
            };
          }),
          (t.$name = "culture"),
          (t.$inject = ["CultureSvc", t.DirectiveFactory]),
          t
        );
      })();
      t.Culture = st;
      ht = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i) {
                n(function () {
                  var n = parseFloat(i[0].textContent.replace(/,/g, "")),
                    t = "";
                  t =
                    n < 1e4
                      ? "#b2497d"
                      : n >= 1e4 && n < 1e5
                      ? "green"
                      : "blue";
                  jQuery(i[0]).css("color", t);
                  jQuery(i)
                    .closest("tr")
                    .hover(
                      function (n) {
                        jQuery(n.target).closest(".tablelist").length > 0 &&
                          jQuery(i[0]).css("color", "white");
                      },
                      function () {
                        jQuery(i[0]).css("color", t);
                      }
                    );
                });
              },
            };
          }),
          (n.$name = "moneyColor"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.MoneyColor = ht;
      ct = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              link: function (t, i) {
                n(function () {
                  var t = parseFloat(i[0].textContent.replace(/,/g, "")),
                    n = "";
                  n = t == 0 ? "" : t > 0 ? "green" : "red";
                  jQuery(i[0]).css("color", n);
                  jQuery(i)
                    .closest("tr")
                    .hover(
                      function (n) {
                        jQuery(n.target).closest(".tablelist").length > 0 &&
                          jQuery(i[0]).css("color", "white");
                      },
                      function () {
                        jQuery(i[0]).css("color", n);
                      }
                    );
                });
              },
            };
          }),
          (n.$name = "twoMoneyColor"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.TwoMoneyColor = ct;
      lt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return (
              u.On("OnInitMarquee", function () {
                var n = $("#marqueeBar"),
                  t = n
                    .bind("beforeStarting", function () {
                      n.css("visibility", "visible");
                    })
                    .marquee({
                      duration: 13800,
                      duplicated: !1,
                      pauseOnHover: !0,
                    });
              }),
              {
                restrict: "A",
                template:
                  '<span ng-repeat="data in ::datas" on-repeat-last="OnInitMarquee" ng-bind-html="::data.NewsContent" op-width="800px" op-height="600px" open-window="/Announcement/Announcement?NewsId={{data.NewsID}}&Category=0" op-name="PersonalMessage" class="first-span"></span>',
                link: function (u) {
                  var f = Array(),
                    e = t
                      .GetMarquee(i.LanguageCode)
                      .then(function (t) {
                        t.Data.forEach(function (t) {
                          t.NewsContent = r.trustAsHtml(
                            n.Helpers.GetCustomizeUrlByAnnounce(t.NewsContent)
                          );
                        });
                        f = t.Data;
                        u.datas = f;
                      })
                      .catch(function () {
                        var t = new n.Models.Marquee();
                        f.push(t);
                      });
                  u.$on("$destroy", function () {});
                },
              }
            );
          }),
          (t.$name = "marquee"),
          (t.$inject = [
            "MarqueeSvc",
            "appConfig",
            "$sce",
            "messageBus",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.Marquee = lt;
      at = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e) {
            return {
              restrict: "A",
              link: function (f, o, s) {
                var v = s.opWidth,
                  y = s.opHeight,
                  k = n.Helpers.CamelizeString(
                    "op-width-" + n.GlobalJsConfig.Config.SiteCulture
                  ),
                  d = n.Helpers.CamelizeString(
                    "op-height-" + n.GlobalJsConfig.Config.SiteCulture
                  );
                s[k] && (v = s[k]);
                s[d] && (y = s[d]);
                var l = window.screen,
                  tt = l.availLeft != undefined ? l.availLeft : 0,
                  p = l.availTop != undefined ? l.availTop : 0;
                p <= 0 && (p = 0);
                var it = (window.screen.width - parseInt(v)) / 2 + tt,
                  rt = (window.screen.height - parseInt(y)) / 2 + p - 20,
                  w = s.openWindow,
                  ut = s.opScroll || "false",
                  h = s.opName || "KUWindow",
                  ft = ut === "true" ? "1" : "0",
                  g =
                    "'toolbar=0,location=0,status=0,resizable=1,scrollbars=" +
                    ft +
                    ",width=" +
                    v +
                    ",height=" +
                    y +
                    ",left=" +
                    it +
                    ",top=" +
                    rt +
                    "'",
                  b = null,
                  a = null,
                  c,
                  nt = function () {
                    var n = s.userBeforeunload || "false";
                    if (
                      (t.put("targetUrl", w, { path: "/" }),
                      window.obspop == null && (window.obspop = {}),
                      (window.obspop[h] = c),
                      window.obspop[h].focus(),
                      n == "true")
                    )
                      $(window[h]).on("beforeunload", function (n) {
                        return n.preventDefault(), "";
                      });
                    window.onbeforeunload = function () {
                      try {
                        $(window.customerServ).off("beforeunload", function () {
                          return null;
                        });
                        $(window.MemberCenter).off("beforeunload", function () {
                          return null;
                        });
                        for (var n in window)
                          window.hasOwnProperty(n) &&
                            (n == "obspop" || n == "customerServ") &&
                            ($(window[n]).off("beforeunload"),
                            window[n].close());
                      } catch (i) {
                        console.error(i);
                      }
                      t.remove("targetUrl");
                    };
                  };
                o.click(function () {
                  if (s.opCheck) {
                    b = u.defer();
                    a = b.promise;
                    var n = null;
                    n = r(s.opCheck);
                    a = n(f, { $event: event });
                  }
                  a
                    ? ((c = e.open("", h, g, !0)),
                      a
                        .then(function (n) {
                          if (!n) {
                            c.close();
                            return;
                          }
                          c.location.href = w;
                          nt();
                        })
                        .catch(function () {
                          c.close();
                        }),
                      b.resolve())
                    : ((c = e.open(w, h, g, !0)), nt());
                });
                i.On(
                  n.ConstDefinition.MessageBusEventName.TriggerCloseOpenWindow,
                  function () {
                    h != "" && window.obspop[h] && window.obspop[h].close();
                  }
                );
                f.$on("$destroy", function () {
                  t.remove("targetUrl");
                });
              },
            };
          }),
          (t.$name = "openWindow"),
          (t.$inject = [
            "$cookies",
            "messageBus",
            "$parse",
            "$q",
            "$timeout",
            "$window",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.OpenWindow = at;
      vt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e) {
            return {
              restrict: "A",
              link: function (t, i, o) {
                var l = o.href || "",
                  s = !1,
                  h,
                  c;
                e.On("registerAdditionallyNoIdentifySuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                e.On("registerAdditionallyIdentitySuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                e.On("validCellPhoneSuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                h = function (n) {
                  n.preventDefault();
                };
                i.on("click", h);
                c = u(function () {
                  if (
                    f.LoginStatus === n.Models.LoginStatusEnum.Loggedin &&
                    !s
                  ) {
                    s = !0;
                    u.cancel(c);
                    var r = function (t) {
                      var i, r;
                      if (
                        f.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish
                      ) {
                        t.preventDefault();
                        i = n.Helpers.GetSimpleFancyboxOptions();
                        i.padding = 15;
                        o["fancybox-top-ratio"] &&
                          (i.topRatio = parseInt(o["fancybox-top-ratio"]));
                        r =
                          f.UserProfile.AdditionalStatus ==
                          RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                            ? "#popUpCellphoneVerify"
                            : "#joinList";
                        i.href = r;
                        i.beforeLoad = function () {
                          $("body").attr("style", "overflow:hidden");
                          e.Emit("fancyBoxBeforLoad", r || "");
                        };
                        i.afterClose = function () {
                          $("body").removeAttr("style");
                          e.Emit("fancyBoxClose", r || "");
                        };
                        jQuery.fancybox(i);
                        return;
                      }
                      location.href = l;
                    };
                    i.on("click", r);
                    t.$on("$destroy", function () {
                      r = null;
                    });
                  }
                }, 300);
              },
            };
          }),
          (t.$name = "checkMemberRegisteredAdditionally"),
          (t.$inject = [
            "$parse",
            "$cookies",
            "$timeout",
            "$interval",
            "appContext",
            "messageBus",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.CheckMemberRegisteredAdditionally = vt;
      yt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e) {
            return {
              restrict: "A",
              link: function (t, i, o) {
                var l = o.href || "",
                  s = !1,
                  h,
                  c;
                e.On("registerAdditionallyNoIdentifySuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                e.On("registerAdditionallyIdentitySuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                e.On("validCellPhoneSuccess", function () {
                  r(function () {
                    typeof opener != "undefined" &&
                      window.opener.location.reload();
                  }, 500);
                });
                h = function (n) {
                  n.preventDefault();
                };
                i.on("click", h);
                c = u(function () {
                  if (
                    f.LoginStatus === n.Models.LoginStatusEnum.Loggedin &&
                    !s
                  ) {
                    s = !0;
                    u.cancel(c);
                    var r = function (t) {
                      var i, r;
                      if (
                        f.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish
                      ) {
                        t.preventDefault();
                        i = n.Helpers.GetSimpleFancyboxOptions();
                        i.padding = 15;
                        o["fancybox-top-ratio"] &&
                          (i.topRatio = parseInt(o["fancybox-top-ratio"]));
                        r =
                          f.UserProfile.AdditionalStatus ==
                          RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                            ? "#popUpCellphoneVerify"
                            : "#joinList";
                        i.href = r;
                        i.beforeLoad = function () {
                          $("body").attr("style", "overflow:hidden");
                          e.Emit("fancyBoxBeforLoad", r || "");
                        };
                        i.afterClose = function () {
                          $("body").removeAttr("style");
                          e.Emit("fancyBoxClose", r || "");
                        };
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          !1,
                          n.Helpers.ChangeLanguage("請先完成補充資料填寫"),
                          null,
                          function () {
                            jQuery.fancybox(i);
                          }
                        );
                        return;
                      }
                    };
                    i.on("click", r);
                    t.$on("$destroy", function () {
                      r = null;
                    });
                  }
                }, 300);
              },
            };
          }),
          (t.$name = "confirmCheckMemberRegisteredAdditionally"),
          (t.$inject = [
            "$parse",
            "$cookies",
            "$timeout",
            "$interval",
            "appContext",
            "messageBus",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.ConfirmCheckMemberRegisteredAdditionally = yt;
      pt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r) {
            return {
              restrict: "E",
              link: function (u, f, e) {
                var s = !1,
                  o = RegisteredAdditionallyStatusEnum.Unspecified,
                  h = function (u) {
                    var f, s;
                    i.On("registerAdditionallyNoIdentifySuccess", function () {
                      t(function () {
                        typeof opener != "undefined" &&
                          window.opener.location.reload();
                      }, 500);
                    });
                    i.On("registerAdditionallyIdentitySuccess", function () {
                      t(function () {
                        typeof opener != "undefined" &&
                          window.opener.location.reload();
                      }, 500);
                    });
                    i.On("validCellPhoneSuccess", function () {
                      t(function () {
                        typeof opener != "undefined" &&
                          window.opener.location.reload();
                      }, 500);
                    });
                    i.On(
                      n.ConstDefinition.MessageBusEventName
                        .OnRegisterAdditionallyFinish,
                      function () {
                        window.location.reload();
                      }
                    );
                    f = n.Helpers.GetSimpleFancyboxOptions();
                    f.padding = 15;
                    e["fancybox-top-ratio"] &&
                      (f.topRatio = parseInt(e["fancybox-top-ratio"]));
                    s = u;
                    f.href = s;
                    f.beforeLoad = function () {
                      i.Emit("fancyBoxBeforLoad", s || "");
                    };
                    f.afterClose = function () {
                      r.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish &&
                        r.UserProfile.AdditionalStatus !=
                          RegisteredAdditionallyStatusEnum.Unspecified &&
                        (r.UserProfile.AdditionalStatus == o
                          ? window.close()
                          : window.location.reload());
                    };
                    jQuery.fancybox(f);
                  };
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnGetLoggedinInfo,
                  function (t, i) {
                    if (
                      i === n.Models.LoginStatusEnum.Loggedin &&
                      !s &&
                      ((s = !0),
                      (o = r.UserProfile.AdditionalStatus),
                      n.Verifier.IsNeedRegisterAdditionally(r.UserProfile))
                    ) {
                      if (r.UserProfile.IsIdentityVerifyOverMax) {
                        n.Helpers.Alert(
                          "",
                          SweetAlertTypeEnum.none,
                          null,
                          n.Helpers.ChangeLanguage(
                            "您今日驗證次數已達上限，請聯繫客服"
                          ),
                          null,
                          function () {
                            return window.close();
                          }
                        );
                        return;
                      }
                      o ==
                        RegisteredAdditionallyStatusEnum.NeedWriteCellphone &&
                        h("#popUpCellphoneVerify");
                      (o ==
                        RegisteredAdditionallyStatusEnum.NeedWriteBankCard ||
                        o ==
                          RegisteredAdditionallyStatusEnum.NeedWriteIdentify ||
                        o ==
                          RegisteredAdditionallyStatusEnum.NeedWriteAccountNameAndPassword ||
                        o ==
                          RegisteredAdditionallyStatusEnum.NeedWriteAttachIdentity) &&
                        h("#joinList");
                    }
                  }
                );
                u.$on("$destroy", function () {});
              },
            };
          }),
          (t.$name = "authorizeRegisteredAdditionally"),
          (t.$inject = [
            "$timeout",
            "messageBus",
            "appContext",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.AuthorizeRegisteredAdditionally = pt;
      wt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var f = new Date().getTime().toString(),
                  e;
                t.put("rtime", f, { path: "/" });
                jQuery("body").delegate("*", "click", function () {
                  f = new Date().getTime().toString();
                  t.put("rtime", f, { path: "/" });
                });
                e = function () {
                  var i = new Date().getTime().toString(),
                    r = t.get("rtime");
                  if (parseFloat(i) - parseFloat(r) > 18e5) {
                    if (
                      u.checkOperateTime === "main" &&
                      jQuery("div.loginArea").length > 0
                    )
                      return;
                    n.Helpers.Alert(
                      "",
                      SweetAlertTypeEnum.none,
                      !1,
                      n.Helpers.ChangeLanguage(
                        "您閒置過久已被登出，請重新登入"
                      ),
                      null,
                      function () {
                        u.checkOperateTime === "member"
                          ? window.close()
                          : location.reload();
                      }
                    );
                  }
                };
                setInterval(e, 6e5);
              },
            };
          }),
          (t.$name = "checkOperateTime"),
          (t.$inject = ["$cookies", t.DirectiveFactory]),
          t
        );
      })();
      t.CheckOperateTime = wt;
      bt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e, o) {
            return {
              restrict: "A",
              link: function (i, r, u) {
                var e = null,
                  s = function () {
                    var t = n.Helpers.GetSimpleFancyboxOptions(),
                      d,
                      h,
                      g,
                      c;
                    t.padding = 15;
                    u["fancybox-top-ratio"] &&
                      (t.topRatio = parseInt(u["fancybox-top-ratio"]));
                    var p = function (n) {
                        t.href = n;
                        t.beforeShow = function () {
                          i.$evalAsync(function () {
                            jQuery.fancybox.update();
                            document.getElementById("accountId").focus();
                          });
                        };
                        t.beforeLoad = function () {
                          $("body").attr("style", "overflow:hidden");
                          f.Emit("fancyBoxBeforLoad", s || "");
                        };
                        t.afterClose = function () {
                          $("body").removeAttr("style");
                          f.Emit("fancyBoxClose", s || "");
                        };
                        jQuery.fancybox(t);
                      },
                      s = "#login",
                      w = u.target,
                      nt = u.targetName,
                      b = u.balanceCheck,
                      k = u.checkblacklist,
                      tt = u.checkMemStatZero === "true" ? !0 : !1,
                      it = u.isGameMaintain === "true" ? !0 : !1,
                      rt = u.maintainMsg ? u.maintainMsg : "",
                      a = 800,
                      v = 600;
                    if (
                      ((u.opWidth != null || u.opWidth != undefined) &&
                        (a = u.opWidth),
                      (u.opHeight != null || u.opHeight != undefined) &&
                        (v = u.opHeight),
                      o.LoginStatus === n.Models.LoginStatusEnum.Loggedin)
                    ) {
                      if (
                        ((d = jQuery("#isTSCinemasVisible").val()),
                        (tt && o.UserProfile.MemberStatus == 0) || d == "true")
                      ) {
                        if (
                          ((h = r.find(".txt_maintain")),
                          h.css("display") === "block")
                        )
                          return;
                        clearTimeout(e);
                        jQuery(".txt_maintain").css("display", "none");
                        h.show();
                        e = setTimeout(function () {
                          h.css("display") === "block" && h.hide();
                          e = null;
                        }, 3e3);
                        return;
                      }
                      if (
                        o.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish
                      ) {
                        p(
                          o.UserProfile.AdditionalStatus ==
                            RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                            ? "#popUpCellphoneVerify"
                            : "#joinList"
                        );
                        return;
                      }
                      if (
                        b &&
                        o.UserProfile.IsBalanceCheck &&
                        !o.UserProfile.IsDepositSuccessed
                      ) {
                        n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, b);
                        return;
                      }
                      if (
                        k != undefined &&
                        o.UserProfile.MemberPlatformBlackList != undefined
                      ) {
                        if (it) {
                          n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, rt);
                          return;
                        }
                        if (o.UserProfile.MemberPlatformBlackList.length == 0) {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                          );
                          return;
                        }
                        if (
                          ((g = o.UserProfile.MemberPlatformBlackList),
                          (c = _.filter(g, function (n) {
                            return n.ServiceID == k;
                          })),
                          c.length == 0)
                        ) {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                          );
                          return;
                        }
                        if (c[0].BlackStatus == "1") {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.StringFormat(
                              n.Helpers.ChangeLanguage(
                                "您沒有進入《{0}》的權限！"
                              ),
                              n.Helpers.ChangeLanguage(c[0].ServiceName)
                            )
                          );
                          return;
                        }
                      }
                      if (
                        ((s = u.widowOpenWithCheckRegisteredStatus), w == null)
                      ) {
                        var l = window.screen,
                          ut = l.availLeft != undefined ? l.availLeft : 0,
                          y = l.availTop != undefined ? l.availTop : 0;
                        y <= 0 && (y = 0);
                        var ft = (window.screen.width - a) / 2 + ut,
                          et = (window.screen.height - v) / 2 + y - 20,
                          ot =
                            "'toolbar=0,location=0,status=0,resizable=0,width=" +
                            a +
                            ",height=" +
                            v +
                            ",left=" +
                            ft +
                            ",top=" +
                            et +
                            "'";
                        window.open(s, nt, ot, !0);
                      } else window.open(s, w);
                    } else p(s);
                  };
                r.on("click", s);
                i.$on("$destroy", function () {
                  t.remove("targetUrl");
                  s = null;
                });
              },
            };
          }),
          (t.$name = "widowOpenWithCheckRegisteredStatus"),
          (t.$inject = [
            "$cookies",
            "$timeout",
            "$parse",
            "$q",
            "messageBus",
            "RegisterSvc",
            "appContext",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.WindowOpenWithCheckRegisteredStatus = bt;
      kt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e, o) {
            return {
              restrict: "A",
              link: function (i, u, e) {
                var s = function (t) {
                  var h, k, tt, it, c, s, rt, v, et, y;
                  if (o.LoginStatus !== n.Models.LoginStatusEnum.WaitingLogIn) {
                    h = n.Helpers.GetSimpleFancyboxOptions();
                    h.padding = 15;
                    e["fancybox-top-ratio"] &&
                      (h.topRatio = parseInt(e["fancybox-top-ratio"]));
                    var ot = function (n) {
                        h.href = n;
                        h.beforeShow = function () {
                          i.$evalAsync(function () {
                            jQuery.fancybox.update();
                            document.getElementById("accountId").focus();
                          });
                        };
                        h.beforeLoad = function () {
                          $("body").attr("style", "overflow:hidden");
                          f.Emit("fancyBoxBeforLoad", l || "");
                        };
                        h.afterClose = function () {
                          $("body").removeAttr("style");
                          f.Emit("fancyBoxClose", l || "");
                        };
                        jQuery.fancybox(h);
                      },
                      l = "#login",
                      a = e.target,
                      w = e.menuid,
                      b = e.checkblacklist,
                      pt = e.popmessage,
                      st = e.isGameMaintain === "true" ? !0 : !1,
                      ht = e.maintainMsg ? e.maintainMsg : "",
                      g = 800,
                      nt = 600;
                    if (o.LoginStatus === n.Models.LoginStatusEnum.Loggedin) {
                      if (
                        e.checkblacklistByFunc &&
                        ((k = null),
                        (k = r(e.checkblacklistByFunc)),
                        (tt = k(i, { $event: t })),
                        !tt)
                      )
                        return;
                      if (
                        b != undefined &&
                        o.UserProfile.MemberPlatformBlackList != undefined
                      ) {
                        if (o.UserProfile.MemberPlatformBlackList.length == 0) {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                          );
                          return;
                        }
                        if (st) {
                          n.Helpers.Alert("", SweetAlertTypeEnum.none, !1, ht);
                          return;
                        }
                        if (
                          ((it = o.UserProfile.MemberPlatformBlackList),
                          (c = _.filter(it, function (n) {
                            return n.ServiceID == b;
                          })),
                          c.length == 0)
                        ) {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.ChangeLanguage("查詢有效服務列表發生問題")
                          );
                          return;
                        }
                        if (c[0].BlackStatus == "1" && a === "BBBall") {
                          $(".txt_maintain").hide();
                          $("#BB_Ball_loto_maintain")
                            .find(".txt_maintain.bbball")
                            .css("display", "block");
                          s = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          s.push("menu_personal_maintain");
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(s)
                          );
                          setTimeout(function () {
                            var n = JSON.parse(
                              localStorage.getItem("gameMaintainPool")
                            );
                            n.filter(function (n) {
                              return n === "menu_personal_maintain";
                            }).length <= 1 &&
                              $("#BB_Ball_loto_maintain")
                                .find(".txt_maintain.bbball")
                                .hide();
                            n.shift();
                            localStorage.setItem(
                              "gameMaintainPool",
                              JSON.stringify(n)
                            );
                          }, 3e3);
                          return;
                        }
                        if (c[0].BlackStatus == "1" && w === "TopBBLiveGame") {
                          $(".txt_maintain").hide();
                          $("#menu_personal_maintain_livegame")
                            .find(".txt_maintain.bblive")
                            .css("display", "block");
                          s = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          s.push("menu_personal_maintain_livegame");
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(s)
                          );
                          setTimeout(function () {
                            var n = JSON.parse(
                              localStorage.getItem("gameMaintainPool")
                            );
                            n.filter(function (n) {
                              return n === "menu_personal_maintain_livegame";
                            }).length <= 1 &&
                              $("#menu_personal_maintain_livegame")
                                .find(".bblive")
                                .hide();
                            n.shift();
                            localStorage.setItem(
                              "gameMaintainPool",
                              JSON.stringify(n)
                            );
                          }, 3e3);
                          return;
                        }
                        if (c[0].BlackStatus == "1" && w === "BBLiveGame") {
                          $(".txt_maintain").hide();
                          $("#BB_LiveGame_personal_maintain")
                            .find(".txt_maintain.bblive")
                            .css("display", "block");
                          s = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          s.push(
                            $("#BB_LiveGame_personal_maintain")
                              .find(".bblive")
                              .attr("id")
                          );
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(s)
                          );
                          setTimeout(function () {
                            var n = JSON.parse(
                              localStorage.getItem("gameMaintainPool")
                            );
                            n.filter(function (n) {
                              return (
                                n ===
                                $("#BB_LiveGame_personal_maintain")
                                  .find(".bblive")
                                  .attr("id")
                              );
                            }).length <= 1 &&
                              $("#BB_LiveGame_personal_maintain")
                                .find(".bblive")
                                .hide();
                            n.shift();
                            localStorage.setItem(
                              "gameMaintainPool",
                              JSON.stringify(n)
                            );
                          }, 3e3);
                          return;
                        }
                        if (
                          c[0].BlackStatus == "1" &&
                          w === "BBLiveGameInner"
                        ) {
                          $(".txt_maintain").hide();
                          $("#BB_LiveGame_personal_maintain_inner")
                            .find(".txt_maintain.bblive")
                            .css("display", "block");
                          s = JSON.parse(
                            localStorage.getItem("gameMaintainPool")
                          );
                          s.push(
                            $("#BB_LiveGame_personal_maintain_inner")
                              .find(".bblive")
                              .attr("id")
                          );
                          localStorage.setItem(
                            "gameMaintainPool",
                            JSON.stringify(s)
                          );
                          setTimeout(function () {
                            var n = JSON.parse(
                              localStorage.getItem("gameMaintainPool")
                            );
                            n.filter(function (n) {
                              return (
                                n ===
                                $("#BB_LiveGame_personal_maintain_inner")
                                  .find(".bblive")
                                  .attr("id")
                              );
                            }).length <= 1 &&
                              $("#BB_LiveGame_personal_maintain_inner")
                                .find(".bblive")
                                .hide();
                            n.shift();
                            localStorage.setItem(
                              "gameMaintainPool",
                              JSON.stringify(n)
                            );
                          }, 3e3);
                          return;
                        }
                        if (c[0].BlackStatus == "1") {
                          n.Helpers.Alert(
                            "",
                            SweetAlertTypeEnum.none,
                            !1,
                            n.Helpers.StringFormat(
                              n.Helpers.ChangeLanguage(
                                "您沒有進入《{0}》的權限！"
                              ),
                              n.Helpers.ChangeLanguage(c[0].ServiceName)
                            )
                          );
                          return;
                        }
                        if (
                          ((rt = jQuery("#isSMVisible").val()),
                          b == "SM" && rt == "true")
                        ) {
                          if (
                            ((v = u.find(".txt_maintain")),
                            v.css("display") === "block")
                          )
                            return;
                          jQuery(".txt_maintain").css("display", "none");
                          v.show();
                          setTimeout(function () {
                            v.css("display") === "block" && v.hide();
                          }, 5e3);
                          return;
                        }
                      }
                      if (((l = e.windowOpen), a == null)) {
                        var p = window.screen,
                          ct = p.availLeft != undefined ? p.availLeft : 0,
                          d = p.availTop != undefined ? p.availTop : 0;
                        d <= 0 && (d = 0);
                        var lt = (window.screen.width - g) / 2 + ct,
                          at = (window.screen.height - nt) / 2 + d - 20,
                          vt =
                            "'toolbar=0,location=0,status=0,resizable=0,width=" +
                            g +
                            ",height=" +
                            nt +
                            ",left=" +
                            lt +
                            ",top=" +
                            at +
                            "'";
                        window.open(l, a, vt, !0);
                      } else {
                        var ut = void 0,
                          yt =
                            /Safari/.test(navigator.userAgent) &&
                            !/CriOS|Chrome|FxiOS|EdgiOS/.test(
                              navigator.userAgent
                            ),
                          ft =
                            yt &&
                            ["SM", "TS", "NBB"].some(function (n) {
                              return n === a;
                            });
                        window.GameOpenedList &&
                          ((et = Object.keys(window.GameOpenedList)),
                          _.forEach(et, function (n) {
                            n !== a || ft || window.GameOpenedList[n].close();
                          }));
                        window.GameOpenedList == null &&
                          (window.GameOpenedList = {});
                        ft
                          ? ((y = document.createElement("a")),
                            y.setAttribute("rel", "noopener noreferrer"),
                            y.setAttribute("href", l),
                            y.setAttribute("target", "_blank"),
                            y.click())
                          : ((ut = window.open(l, a)),
                            (window.GameOpenedList[a] = ut));
                      }
                    } else ot(l);
                  }
                };
                u.on("click", s);
                i.$on("$destroy", function () {
                  t.remove("targetUrl");
                  s = null;
                });
              },
            };
          }),
          (t.$name = "windowOpen"),
          (t.$inject = [
            "$cookies",
            "$timeout",
            "$parse",
            "$q",
            "messageBus",
            "RegisterSvc",
            "appContext",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.WindowOpen = kt;
      dt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e, o) {
            return {
              restrict: "A",
              link: function (e, s, h) {
                var c = function (t) {
                  var v = null,
                    a = null,
                    s = n.Helpers.GetSimpleFancyboxOptions(),
                    c,
                    l,
                    p,
                    y;
                  if (
                    ((s.padding = 15),
                    h["fancybox-top-ratio"] &&
                      (s.topRatio = parseInt(h["fancybox-top-ratio"])),
                    (c = "#login"),
                    o.LoginStatus === n.Models.LoginStatusEnum.Loggedin)
                  ) {
                    if (
                      o.UserProfile.AdditionalStatus !=
                      RegisteredAdditionallyStatusEnum.Finish
                    ) {
                      c =
                        o.UserProfile.AdditionalStatus ==
                        RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                          ? "#popUpCellphoneVerify"
                          : "#joinList";
                      s.href = c;
                      s.beforeLoad = function () {
                        $("body").attr("style", "overflow:hidden");
                        f.Emit("fancyBoxBeforLoad", c || "");
                      };
                      s.afterClose = function () {
                        $("body").removeAttr("style");
                        f.Emit("fancyBoxClose", c || "");
                      };
                      jQuery.fancybox(s);
                      return;
                    }
                    if (
                      (h.fboxOpenCheckRegisteredStatus &&
                        (c = h.fboxOpenCheckRegisteredStatus),
                      h.fboxCheckAsync &&
                        ((v = u.defer()),
                        (a = v.promise),
                        (l = null),
                        (l = r(h.fboxCheckAsync)),
                        (a = l(e, { $event: t }))),
                      h.fboxCheck &&
                        ((l = null),
                        (l = r(h.fboxCheck)),
                        (p = l(e, { $event: t })),
                        !p))
                    )
                      return;
                    h.fboxFunc &&
                      ((y = null), (y = r(h.fboxFunc)), y(e, { $event: t }));
                  }
                  s.href = c;
                  s.afterClose = function () {
                    f.Emit("fancyBoxClose", c || "");
                  };
                  a == null
                    ? jQuery.fancybox(s)
                    : (a.then(function (n) {
                        n &&
                          i(function () {
                            jQuery.fancybox(s);
                          });
                      }),
                      v.resolve());
                };
                s.on(
                  "click",
                  _.debounce(c, 1e3, { leading: !0, trailing: !1 })
                );
                e.$on("$destroy", function () {
                  t.remove("targetUrl");
                  c = null;
                });
              },
            };
          }),
          (t.$name = "fboxOpenCheckRegisteredStatus"),
          (t.$inject = [
            "$cookies",
            "$timeout",
            "$parse",
            "$q",
            "messageBus",
            "RegisterSvc",
            "appContext",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.FancyBoxOpenWithCheckRegisteredStatus = dt;
      gt = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f, e, o) {
            return {
              restrict: "A",
              link: function (e, s, h) {
                var c = function (t) {
                  var a, c, k, p;
                  if (o.LoginStatus !== n.Models.LoginStatusEnum.WaitingLogIn) {
                    var y = null,
                      l = null,
                      s = n.Helpers.GetSimpleFancyboxOptions();
                    s.padding = 15;
                    h["fancybox-top-ratio"] &&
                      (s.topRatio = parseInt(h["fancybox-top-ratio"]));
                    a = parseInt(h.opWidth || "0");
                    a !== NaN && a !== 0 && (s.minWidth = a);
                    var w = "#login",
                      b = function (n) {
                        s.href = n;
                        s.beforeLoad = function () {
                          $("body").attr("style", "overflow:hidden");
                        };
                        s.afterClose = function () {
                          $("body").removeAttr("style");
                          f.Emit("fancyBoxClose", v || "");
                        };
                        n.toLowerCase() === w &&
                          (s.beforeShow = function () {
                            e.$evalAsync(function () {
                              jQuery.fancybox.update();
                              document.getElementById("accountId").focus();
                            });
                          });
                        jQuery.fancybox(s);
                      },
                      v = w;
                    if (o.LoginStatus === n.Models.LoginStatusEnum.Loggedin) {
                      if (
                        h.enableProtect === "true" &&
                        [1, 2].some(function (n) {
                          return n === o.UserProfile.MemberStatus;
                        }) &&
                        !o.UserProfile.IsSetWithdrawal
                      ) {
                        f.Emit("enableLobbyProtect", null);
                        return;
                      }
                      if (
                        (h.fboxOpenWithoutCheckRegisteredStatus &&
                          (v = h.fboxOpenWithoutCheckRegisteredStatus),
                        h.fboxCheckAsync &&
                          ((y = u.defer()),
                          (l = y.promise),
                          (c = null),
                          (c = r(h.fboxCheckAsync)),
                          (l = c(e, { $event: t }))),
                        h.fboxCheck &&
                          ((c = null),
                          (c = r(h.fboxCheck)),
                          (k = c(e, { $event: t })),
                          !k))
                      )
                        return;
                      h.fboxFunc &&
                        ((p = null), (p = r(h.fboxFunc)), p(e, { $event: t }));
                    }
                    l == null
                      ? b(v)
                      : (l.then(function (n) {
                          n &&
                            i(function () {
                              b(v);
                            });
                        }),
                        y.resolve());
                  }
                };
                s.on(
                  "click",
                  _.debounce(c, 1e3, { leading: !0, trailing: !1 })
                );
                e.$on("$destroy", function () {
                  t.remove("targetUrl");
                  c = null;
                });
              },
            };
          }),
          (t.$name = "fboxOpenWithoutCheckRegisteredStatus"),
          (t.$inject = [
            "$cookies",
            "$timeout",
            "$parse",
            "$q",
            "messageBus",
            "RegisterSvc",
            "appContext",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.FancyBoxOpenWithoutCheckRegisteredStatus = gt;
      ni = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u, f) {
            return {
              restrict: "A",
              link: function (t, r, e) {
                var o = "",
                  s = function (t) {
                    var r, h, s;
                    if (
                      (t.preventDefault(),
                      u.UserProfile.AdditionalStatus !=
                        RegisteredAdditionallyStatusEnum.Finish)
                    ) {
                      r = n.Helpers.GetSimpleFancyboxOptions();
                      r.padding = 15;
                      e["fancybox-top-ratio"] &&
                        (r.topRatio = parseInt(e["fancybox-top-ratio"]));
                      h =
                        u.UserProfile.AdditionalStatus ==
                        RegisteredAdditionallyStatusEnum.NeedWriteCellphone
                          ? "#popUpCellphoneVerify"
                          : "#joinList";
                      u.LoginStatus != n.Models.LoginStatusEnum.Loggedin &&
                        (h = "#login");
                      r.href = h;
                      r.beforeLoad = function () {
                        $("body").attr("style", "overflow:hidden");
                        f.Emit("fancyBoxBeforLoad", h || "");
                      };
                      r.afterClose = function () {
                        $("body").removeAttr("style");
                        f.Emit("fancyBoxClose", h || "");
                      };
                      jQuery.fancybox(r);
                      return;
                    }
                    if (
                      ((o = e.opName || "KUWindow"),
                      (s = e.opUrl),
                      s != undefined && s != null && s != "")
                    ) {
                      var l = Number(encodeURIComponent(e.opWidth)),
                        a = Number(encodeURIComponent(e.opHeight)),
                        w = "op-width-" + n.GlobalJsConfig.Config.SiteCulture,
                        b = "op-height-" + n.GlobalJsConfig.Config.SiteCulture,
                        y = n.Helpers.CamelizeString(w),
                        p = n.Helpers.CamelizeString(b);
                      e[y] && (l = Number(encodeURIComponent(e[y])));
                      e[p] && (a = Number(encodeURIComponent(e[p])));
                      var c = window.screen,
                        k = c.availLeft != undefined ? c.availLeft : 0,
                        v = c.availTop != undefined ? c.availTop : 0;
                      v <= 0 && (v = 0);
                      var d = (window.screen.width - l) / 2 + k,
                        g = (window.screen.height - a) / 2 + v - 20;
                      i.put("targetUrl", s, { path: "/" });
                      window.obspop == null && (window.obspop = {});
                      window.obspop[o] = window.open(
                        s,
                        o,
                        "'toolbar=0,scrollbars=1,location=0,status=0,width=" +
                          l +
                          ",height=" +
                          a +
                          " ,top= " +
                          g +
                          ",left=" +
                          d +
                          "'",
                        !0
                      );
                      window.obspop[o].focus();
                      window.onbeforeunload = function () {
                        try {
                          $(window.obspop).off("beforeunload", function () {
                            return null;
                          });
                          $(window.customerServ).off(
                            "beforeunload",
                            function () {
                              return null;
                            }
                          );
                          for (var n in window)
                            window.hasOwnProperty(n) &&
                              (n == "obspop" || n == "customerServ") &&
                              ($(window[n]).off("beforeunload"),
                              window[n].close());
                        } catch (t) {
                          console.error(t);
                        }
                        i.remove("targetUrl");
                      };
                    }
                  };
                r.on("click", s);
                f.On(
                  n.ConstDefinition.MessageBusEventName.TriggerCloseOpenWindow,
                  function () {
                    o != "" && window.obspop[o] && window.obspop[o].close();
                  }
                );
                f.On(
                  n.ConstDefinition.MessageBusEventName
                    .OnRefereshLoginMenuSwitchToSubWindow,
                  function (t, i) {
                    if (
                      o != "" &&
                      window.obspop[o] &&
                      !window.obspop[o].closed
                    ) {
                      var r = window.obspop[o].angular
                        .element("html[ng-app='OBSApp']")
                        .scope();
                      r != undefined &&
                        r.$broadcast(
                          n.ConstDefinition.MessageBusEventName
                            .OnRefereshLoginMenuSwitchToSubWindow,
                          i
                        );
                    }
                  }
                );
                t.$on("$destroy", function () {
                  i.remove("targetUrl");
                  s = null;
                });
              },
            };
          }),
          (t.$name = "checkRegisteredAdditionally"),
          (t.$inject = [
            "$parse",
            "$cookies",
            "$timeout",
            "appContext",
            "messageBus",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.CheckRegisteredAdditionally = ni;
      ti = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            return {
              restrict: "A",
              link: function (r, u, f) {
                var e = function (t) {
                  t.preventDefault();
                  var u = n.Helpers.GetSimpleFancyboxOptions();
                  u.padding = 15;
                  f["fancybox-top-ratio"] &&
                    (u.topRatio = parseInt(f["fancybox-top-ratio"]));
                  u.href = "#login";
                  u.beforeShow = function () {
                    $("body").attr("style", "overflow:hidden");
                    r.$evalAsync(function () {
                      jQuery.fancybox.update();
                      document.getElementById("accountId").focus();
                    });
                  };
                  u.afterClose = function () {
                    $("body").removeAttr("style");
                    i.Emit("fancyBoxClose", u.href || "");
                  };
                  jQuery.fancybox(u);
                  return;
                };
                u.on("click", e);
                r.$on("$destroy", function () {
                  t.remove("targetUrl");
                  e = null;
                });
              },
            };
          }),
          (t.$name = "signCheck"),
          (t.$inject = [
            "$cookies",
            "messageBus",
            "RegisterSvc",
            t.DirectiveFactory,
          ]),
          t
        );
      })();
      t.SignCheck = ti;
      ii = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                var r = i["class"];
                r.indexOf("On") >= 0 && jQuery("#" + i.tabChange).show();
                t.click(function () {
                  jQuery(".tabChange").hide();
                  jQuery(".icon_payWayOn").remove();
                  jQuery(".payWay").removeClass("On");
                  t.addClass("On");
                  t.append("<div class='icon_payWayOn'></div>");
                  jQuery("#" + i.tabChange).show();
                });
                n.$on("$destroy", function () {});
              },
            };
          }),
          (n.$name = "tabChange"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.TabChange = ii;
      ri = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (t, i) {
                function r() {
                  var t = new Date(),
                    r = t.getHours().toString(),
                    u = t.getMinutes().toString(),
                    o = t.getSeconds().toString(),
                    s = t.getFullYear().toString(),
                    f = (t.getMonth() + 1).toString(),
                    e = t.getDate().toString(),
                    h = t.getDay();
                  parseInt(o) < 10 && (o = "0" + o);
                  parseInt(u) < 10 && (u = "0" + u);
                  parseInt(r) < 10 && (r = "0" + r);
                  parseInt(e) < 10 && (e = "0" + e);
                  parseInt(f) < 10 && (f = "0" + f);
                  n.GlobalJsConfig.Config.SiteCulture != "zh-cn"
                    ? $(i).text(e + "-" + f + " " + r + ":" + u)
                    : $(i).text(f + "-" + e + " " + r + ":" + u);
                }
                r();
                setInterval(r, 1e3);
              },
            };
          }),
          (t.$name = "showTime"),
          (t.$inject = [t.DirectiveFactory]),
          t
        );
      })();
      t.ShowTime = ri;
      ui = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (t, i) {
                i.click(function () {
                  var t = i.attr("url"),
                    r = i.attr("name"),
                    u = window;
                  try {
                    u.external.addFavorite(t, r);
                  } catch (f) {
                    try {
                      u.sidebar.addPanel(r, t, "");
                    } catch (f) {
                      n.Helpers.Alert(
                        "",
                        SweetAlertTypeEnum.none,
                        !1,
                        n.Helpers.ChangeLanguage(
                          "新增書籤" +
                            (navigator.userAgent.toLowerCase().indexOf("mac") !=
                            -1
                              ? "Cmd"
                              : "Ctrl")
                        )
                      );
                    }
                  }
                });
              },
            };
          }),
          (t.$name = "setFavorite"),
          (t.$inject = [t.DirectiveFactory]),
          t
        );
      })();
      t.SetFavorite = ui;
      fi = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                var u = parseInt(i.limitLength),
                  e = isNaN(u) ? !1 : angular.isNumber(u),
                  r,
                  f;
                t.on("click", function () {
                  var n = window.getSelection(),
                    i = document.createRange();
                  i.selectNodeContents(t[0]);
                  n.removeAllRanges();
                  n.addRange(i);
                });
                i.$observe("selectOnClick", function (n) {
                  r = n.toString();
                  f = n.toString();
                  e && r.length > u && (r = f.slice(0, u) + " ..");
                  t.text(r);
                });
                t.hover(
                  function () {
                    t.css("overflow", "visible");
                    t.css("color", "#ad0000");
                    t.text(f);
                  },
                  function () {
                    t.css("overflow", "hidden");
                    t.css("color", "");
                    t.text(r);
                  }
                );
              },
            };
          }),
          (n.$name = "selectOnClick"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.SelectOnClick = fi;
      ei = (function () {
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
      t.RoundNum = ei;
      oi = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t, i) {
                t.change(function () {
                  n.$apply(function () {
                    var r = i.ckFilter.split(","),
                      n = t.val();
                    r.forEach(function (t) {
                      var i = t,
                        r = new RegExp(i, "g");
                      n = n.replace(r, "");
                    });
                    $(t).val(n);
                  });
                });
              },
            };
          }),
          (n.$name = "inputCheck"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.InputCheck = oi;
      si = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              link: function (n, t) {
                n.$watch("trigger", function () {
                  t[0].focus();
                });
              },
            };
          }),
          (n.$name = "focusObject"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.FocusObject = si;
      hi = (function () {
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
      t.FocusWhenNotDisable = hi;
      ci = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              priority: -1e4,
              link: function () {
                n(function () {
                  var n = $(".inpage_menu").width() + 16,
                    t = $("body").height() + 80;
                  window.resizeTo(n, t);
                }, 50);
              },
            };
          }),
          (n.$name = "ngWindowResize"),
          (n.$inject = ["$timeout", n.DirectiveFactory]),
          n
        );
      })();
      t.NgWindowResize = ci;
      li = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              scope: { validateInputCustomBlur: "&" },
              link: function (n, t, i, r) {
                var u,
                  f = "",
                  o = i.validateChineseLimit,
                  h = i.allowTrimSpace ? i.allowTrimSpace : !1,
                  c = i.addSpace ? i.addSpace : !1,
                  s = i.withoutSpaceMaxLength,
                  e = /([\u3105-\u3129\u02CA\u02C7\u02CB\u02D9])/g;
                t.bind("input keyup click mousedown", function () {
                  var v = t[0].selectionEnd,
                    a,
                    l;
                  u = t.val();
                  h && (u = u.replace(/ /g, ""));
                  a = i.validateInputCustom;
                  l = new RegExp(a);
                  n.$apply(function () {
                    var a, h, n, y;
                    if (
                      (o != null &&
                        e.test(u) &&
                        ((a =
                          (u.match(e) == null ? 0 : u.match(e).length) == 1
                            ? parseInt(o) + 1
                            : (u.match(e) == null ? 0 : u.match(e).length) == 2
                            ? parseInt(o) + 2
                            : parseInt(o) + 3),
                        u.length >= a && (u = u.replace(e, "").substr(0, o)),
                        (f = u),
                        r.$setViewValue(u),
                        r.$render()),
                      l.test(u))
                    )
                      i.maxAmount &&
                        ((h = parseInt(i.maxAmount || "0")),
                        (u = Number(u) > h ? h.toString() : u)),
                        c
                          ? ((n = u.replace(/\s/g, "")),
                            s != undefined &&
                              Number(s) > 0 &&
                              (n = n.substring(0, Number(s))),
                            (u = n.replace(/(\d{4})(?=\d)/g, "$1 ")),
                            t.prop("selectionStart", u.length),
                            t.prop("selectionEnd", u.length),
                            (f = u),
                            r.$setViewValue(u, "input"),
                            r.$render())
                          : ((f = u), r.$setViewValue(u), r.$render());
                    else {
                      if (u == null || f == null) return;
                      u.length != 1 || l.test(u) || (f = "");
                      y = u.length - f.length;
                      r.$setViewValue(f);
                      r.$render();
                      t.prop("selectionEnd", v - y);
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
      t.ValidateInputCustom = li;
      ai = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "ngModel",
              scope: { ngModel: "=", validateInputRegCustomBlur: "&" },
              link: function (t, i, r, u) {
                var f = "",
                  v = r.allowTrimSpace ? r.allowTrimSpace : !1,
                  y = r.addSpace ? r.addSpace : !1,
                  p = r.allowMask ? r.allowMask : !1,
                  h = Number(r.viewCultureMaxlength || "0"),
                  e = null,
                  o = Number(r.maxLength || "0"),
                  c = r.tipsContent || "",
                  s = 0,
                  l = function () {
                    return (
                      e == null &&
                        (e = jQuery(i).tooltipster({
                          contentAsHTML: !0,
                          content: "<span class='t_red'>" + c + "</span>",
                          side: ["top"],
                          delay: 100,
                          trigger: "custom",
                          timer: 3e3,
                          functionPosition: function (n, t, r) {
                            return (
                              (r.target = 0),
                              (r.coord.left = $(i).offset().left),
                              r
                            );
                          },
                        })),
                      e
                    );
                  },
                  a;
                i.bind("keydown", function () {
                  s = i[0].selectionEnd;
                });
                a = t.$watch(
                  function () {
                    return u.$modelValue;
                  },
                  function (t, e) {
                    var g, k, nt, d;
                    if (t !== e) {
                      var b = 0,
                        a = n.Helpers.IsExist(t) ? t : "",
                        w = n.Helpers.IsExist(e) ? e : "",
                        tt = a === f;
                      if (!tt) {
                        if (
                          (v &&
                            ((a = a.replace(/\s/g, "")),
                            (w = w.replace(/\s/g, ""))),
                          p)
                        )
                          if (w.indexOf("*") >= 0 && a.indexOf("*") >= 0)
                            a = "";
                          else {
                            if (w == "" && a.indexOf("*") >= 0) {
                              u.$setViewValue(a);
                              u.$render();
                              return;
                            }
                            w != "" &&
                              w.indexOf("*") == -1 &&
                              a.indexOf("*") >= 0 &&
                              (a = a.replace(/\*/g, ""));
                          }
                        g = new RegExp(r.validateInputRegCustom);
                        h > 0 &&
                          a != undefined &&
                          ((k =
                            n.SiteCultureMethod.Provider().GetViewCultureLength(
                              a,
                              h
                            )),
                          k.ContentLength >= k.OverMaxlengthIndex &&
                            (b = k.OverMaxlengthIndex));
                        o > 0 && a != undefined && a.length > o && (b = o);
                        b > 0 &&
                          (w == "" && (a = a.substr(0, b)),
                          a.length > b && (a = w));
                        c != "" &&
                          (b > 0
                            ? (l().tooltipster("open"),
                              (nt =
                                $.tooltipster.instancesLatest()[0].__namespace),
                              $("#" + nt + " .tooltipster-content").addClass(
                                "content-icon"
                              ))
                            : l().tooltipster("close"));
                        d = g.test(a);
                        f = d ? a : w;
                        y && (f = f.replace(/(\d{4})(?=\d)/g, "$1 "));
                        u.$setViewValue(f);
                        u.$render();
                        (d && a != w) ||
                          (i.prop("selectionStart", s),
                          i.prop("selectionEnd", s));
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
                    });
                  });
                t.$on("destroy", function () {
                  a();
                });
              },
            };
          }),
          (t.$name = "validateInputRegCustom"),
          (t.$inject = [t.DirectiveFactory]),
          t
        );
      })();
      t.ValidateInputRegCustom = ai;
      vi = (function () {
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
      t.ValidateInputNumber = vi;
      yi = (function () {
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
      t.BindHtmlCompile = yi;
      pi = (function () {
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
      t.OnErrorSrc = pi;
      wi = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t) {
            return {
              restrict: "A",
              require: "ngModel",
              scope: { source: "=emailSource" },
              link: function (i, r, u, f) {
                var a = u.allowTrimSpace ? u.allowTrimSpace : !1,
                  s = /^[\w@.]*$/,
                  e = "",
                  v = "",
                  y = u.emailAllowMask ? u.emailAllowMask : !1,
                  h = "",
                  c = function () {
                    e = r.val();
                    var n = r[0].selectionEnd;
                    a && (e = e.replace(/\s+/g, ""));
                    i.$apply(function () {
                      s.test(e) &&
                        ((v = e), f.$setViewValue(e), f.$render(), r.valid());
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
                    separator: "@",
                    zIndex: 1,
                    onSelected: c,
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
                t(function () {
                  r.completer(o);
                }, 300);
                r.on("keyup input click mousedown", c);
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
                        y)
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
      t.EmailAutocomplete = wi;
      bi = (function () {
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
      t.AuthorizeUserStatus = bi;
      ki = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return {
              restrict: "A",
              priority: 99,
              link: function (t, i) {
                n(function () {
                  var n = i.find("img"),
                    t = i.parent().width();
                  _.forEach(n, function (n) {
                    var i = n.width || 0;
                    i !== 0 &&
                      i >= t - 30 &&
                      (n.removeAttribute("height"),
                      n.setAttribute("width", "100%"));
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
      t.ContentImageResize = ki;
      di = (function () {
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
                      !r.logTitle != undefined ? r.logTitle : r.title;
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
      t.LogMapperData = di;
      gi = (function () {
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
      t.AddMask = gi;
      i = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var r = !1,
              u = function (t) {
                var i = n.Helpers.CopyText(t);
                i
                  ? (r = !0)
                  : ((r = !1),
                    n.Helpers.Notify(
                      n.Helpers.ChangeLanguage("該瀏覽器不支持此操作"),
                      NotifyTypeEunm.info
                    ),
                    $("#divNotify").attr("class", "alert alert-info-center"));
              };
            return {
              restrict: "A",
              link: function (t, f, e) {
                f.bind("click", function (f) {
                  var h, a, o, v, l;
                  if (
                    (e.copyToClipboardFunc &&
                      ((o = null),
                      (o = i(e.copyToClipboardFunc)),
                      o && (h = o(t, { $event: f }))),
                    e.copyToClipboardText && (h = e.copyToClipboardText),
                    e.alertPosition && (a = e.alertPosition),
                    u(h, a, f),
                    r)
                  ) {
                    var s = jQuery("#hfLanguageCode").val(),
                      c = $("#hfCopySuccessImg").val(),
                      y =
                        s.toLowerCase() == "zh-cn"
                          ? n.Helpers.ChangeLanguage("複製成功") + "！"
                          : n.Helpers.ChangeLanguage("複製成功") + "!";
                    (s.toLowerCase() == "vi-vn" ||
                      s.toLowerCase() == "th-th") &&
                      (c = c.replace(
                        /\/Content\/Images\//gi,
                        "/Content/Images/" + s + "/"
                      ));
                    v =
                      '<div class="popUpShow popUpShort" style="display:block;" id="copyPOPSuc">\n                                               <div class="popupShort">\n                                                   <div class="popUp_in">\n                                                       <div class="popupS_T"><img src="' +
                      c +
                      '" /></div>\n                                                       <div class="popupS_In">' +
                      y +
                      "</div>\n                                                   </div>\n                                               </div>\n                                           </div>";
                    $(document.body).append(v);
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
      t.CopyToClipboard = i;
      nr = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var r = !1,
              u = function (t) {
                var i = n.Helpers.CopyText(t);
                i
                  ? (r = !0)
                  : ((r = !1),
                    n.Helpers.Notify(
                      n.Helpers.ChangeLanguage("該瀏覽器不支持此操作"),
                      NotifyTypeEunm.info
                    ),
                    $("#divNotify").attr("class", "alert alert-info-center"));
              };
            return {
              restrict: "A",
              link: function (t, f, e) {
                f.bind("click", function (f) {
                  var h, a, o, v, l;
                  if (
                    (e.copyToClipboardFunc &&
                      ((o = null),
                      (o = i(e.copyToClipboardFunc)),
                      o && (h = o(t, { $event: f }))),
                    e.copyToClipboardText && (h = e.copyToClipboardText),
                    e.alertPosition && (a = e.alertPosition),
                    u(h, a, f),
                    r)
                  ) {
                    var s = jQuery("#hfLanguageCode").val(),
                      c = $("#hfCopySuccessImg").val(),
                      y =
                        s.toLowerCase() == "zh-cn"
                          ? n.Helpers.ChangeLanguage("複製成功") + "！"
                          : n.Helpers.ChangeLanguage("複製成功") + "!";
                    (s.toLowerCase() == "vi-vn" ||
                      s.toLowerCase() == "th-th") &&
                      (c = c.replace(
                        /\/Content\/Images\//gi,
                        "/Content/Images/" + s + "/"
                      ));
                    v =
                      '<div class="popUpShow popUpShort" style="display:block;" id="copyPOPSuc">\n                                               <div class="popupShort">\n                                                   <div class="popUp_in">\n                                                       <div class="popupS_T"><img src="' +
                      c +
                      '" /></div>\n                                                       <div class="popupS_In">' +
                      y +
                      "</div>\n                                                   </div>\n                                               </div>\n                                           </div>";
                    $(document.body).append(v);
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
          (t.$name = "copyToClipboardTransferPopup"),
          (t.$inject = ["$window", "$parse", i.DirectiveFactory]),
          t
        );
      })();
      t.CopyToClipboardTransferPopup = nr;
      tr = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var u = !1,
              e = angular.element(t.document.body),
              r = angular.element("<textarea/>"),
              f;
            return (
              r.css({ position: "fixed", opacity: "0" }),
              (f = function (i) {
                var s, f, o;
                r.val(i);
                e.append(r);
                /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
                  ? ((s = window.getSelection()),
                    s.removeAllRanges(),
                    (f = r[0]),
                    (f.contentEditable = "true"),
                    f.setSelectionRange(0, i.length))
                  : r[0].select();
                try {
                  if (((o = t.document.execCommand("copy")), !o)) throw o;
                  u = !0;
                } catch (h) {
                  u = !1;
                  n.Helpers.Notify(
                    n.Helpers.ChangeLanguage("該瀏覽器不支持此操作"),
                    NotifyTypeEunm.info
                  );
                  $("#divNotify").attr("class", "alert alert-info-center");
                }
                r.remove();
              }),
              {
                restrict: "A",
                link: function (t, r, e) {
                  r.bind("click", function (r) {
                    var h, o, a, l;
                    if (
                      (e.copyToClipboardFunc &&
                        ((o = null),
                        (o = i(e.copyToClipboardFunc)),
                        o && (h = o(t, { $event: r }))),
                      e.copyToClipboardText &&
                        e.copyToClipboardText &&
                        (h = e.copyToClipboardText),
                      f(h, r),
                      u)
                    ) {
                      var s = jQuery("#hfLanguageCode").val(),
                        c = $("#hfCopySuccessImg").val(),
                        v =
                          s.toLowerCase() == "zh-cn"
                            ? n.Helpers.ChangeLanguage("複製成功") + "！"
                            : n.Helpers.ChangeLanguage("複製成功") + "!";
                      (s.toLowerCase() == "vi-vn" ||
                        s.toLowerCase() == "th-th") &&
                        (c = c.replace(
                          /\/Content\/Images\//gi,
                          "/Content/Images/" + s + "/"
                        ));
                      a =
                        '<div class="popUpShow popUpShort" style="display:block;" id="copyPOPSuc">\n                                               <div class="popupShort">\n                                                   <div class="popUp_in">\n                                                       <div class="popupS_T"><img src="' +
                        c +
                        '" /></div>\n                                                       <div class="popupS_In">' +
                        v +
                        "</div>\n                                                   </div>\n                                               </div>\n                                           </div>";
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
              }
            );
          }),
          (t.$name = "copyToClipboardVivn"),
          (t.$inject = ["$window", "$parse", t.DirectiveFactory]),
          t
        );
      })();
      t.CopyToClipboardVivn = tr;
      ir = (function () {
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
      t.Capitalize = ir;
      rr = (function () {
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
      t.BankAccount = rr;
      ur = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i) {
            var r = function (n, t, i) {
              i === !0
                ? (n.attr("type", "text"),
                  t.removeClass("off"),
                  n.addClass("ellipsis"),
                  n.siblings(".txtName").show())
                : (n.attr("type", "password"),
                  t.addClass("off"),
                  n.removeClass("ellipsis"),
                  n.siblings(".txtName").hide());
            };
            return {
              restrict: "A",
              link: function (u, f, e) {
                var o, s, h;
                u.open = t(e.passwordEye)(u);
                u.eyehidden = t(e.eyeHidden)(u);
                o = angular.element(f);
                o.after(
                  "<div class='btn_bankEye'><a class='icon_bankEye'></a></div>"
                );
                s = o.siblings(".btn_bankEye").find(".icon_bankEye");
                h = o.siblings(".txtName");
                e.passwordEyeStyle &&
                  s.length > 0 &&
                  o
                    .siblings(".btn_bankEye")[0]
                    .setAttribute("style", e.passwordEyeStyle);
                u.eyehidden && o.siblings(".btn_bankEye").hide();
                u.$watch(
                  function () {
                    return !u.eyehidden == !0;
                  },
                  function (n) {
                    n === !1
                      ? (o.siblings(".btn_bankEye").hide(),
                        f.removeClass("disc"))
                      : (o.siblings(".btn_bankEye").show(), f.addClass("disc"));
                  }
                );
                i.On(
                  n.ConstDefinition.MessageBusEventName.OnPasswordEyeInitialize,
                  function (n, i) {
                    f.attr("id") === i.elemId &&
                      ((u.open = t(e.passwordEye)(u)),
                      (u.eyehidden = t(e.eyeHidden)(u)),
                      r(o, s, u.open));
                  }
                );
                r(o, s, u.open);
                s.on("click", function () {
                  u.open =
                    f.attr("id") == undefined
                      ? !u.open
                      : f.attr("type").toLowerCase() == "password";
                  r(o, s, u.open);
                });
                h.bind("click", function (n) {
                  var t = $(n.target).hide();
                });
                jQuery(document).bind("click touchend", function (n) {
                  var t = $(n.target);
                  t.closest(".boxName").length == 0 && $(".txtName").hide();
                });
              },
            };
          }),
          (t.$name = "passwordEye"),
          (t.$inject = ["$parse", "messageBus", t.DirectiveFactory]),
          t
        );
      })();
      t.passwordEye = ur;
      fr = (function () {
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
      t.SelectTextOnClick = fr;
      er = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function () {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function (n, t, i, r) {
                var u = function (n) {
                    if (n.indexOf("+") == -1) {
                      r.$setViewValue("+" + n);
                      r.$render();
                      return;
                    }
                    r.$setViewValue(n);
                    r.$render();
                  },
                  f;
                t.focusin(function () {
                  u(t.val());
                });
                f = n.$watch(
                  function () {
                    return r.$modelValue;
                  },
                  function (n, t) {
                    if (n !== t) {
                      if (t != "" && n == "") {
                        r.$setViewValue(n);
                        r.$render();
                        return;
                      }
                      u(n);
                    }
                  }
                );
                n.$on("destroy", function () {
                  f();
                });
              },
            };
          }),
          (n.$name = "forceAppendPlus"),
          (n.$inject = [n.DirectiveFactory]),
          n
        );
      })();
      t.ForceAppendPlus = er;
      or = (function () {
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
      t.OnBlurTrimAndReplaceDoubleSpace = or;
      sr = (function () {
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
      t.NgDebounceClick = sr;
      hr = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r, u) {
            return {
              restrict: "E",
              template:
                '<div class="slidercaptcha card" >\n                                <div class="card-header">\n                                    <span></span>\n                                </div>\n                                <div class="card-body">\n                                    <div class="sliderCaptcha-area" style="position: relative; width: 280px; margin: 0px auto;">\n                                        <canvas class="sliderBg"></canvas>\n                                        <i class="refreshIcon fa fa-redo" ng-click="refresh()"></i>\n                                        <canvas class="sliderBlock"></canvas>\n                                        <div class="sliderContainer" >\n                                            <div class="slided"></div>\n                                            <div class="sliderMask">\n                                                <div class="slider">\n                                                     <i class="arrow"></i>\n                                                </div>\n                                            </div>\n                                            <span class="sliderText" ng-show="!isMoving()" >{{tips}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>',
              link: function (i, f, e) {
                var p, l, w, a, o, h, v, y, g, k, nt;
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
                var tt = 0,
                  b = !1,
                  s = [],
                  c = !1,
                  d;
                d = f.find(".slider")[0];
                v = 280;
                y = 155;
                e.$observe("sliderBgImage", function () {
                  ((e.sliderBgImage != "" && e.sliderImage != "") ||
                    (e.sliderBgImage == "" && e.sliderImage == "")) &&
                    k();
                });
                e.$observe("sliderImage", function () {
                  ((e.sliderBgImage != "" && e.sliderImage != "") ||
                    (e.sliderBgImage == "" && e.sliderImage == "")) &&
                    k();
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
                g = function (t) {
                  if (b) return t.preventDefault(), !1;
                  var d = f.find(".slider")[0],
                    it = f.find(".sliderMask")[0],
                    rt = f.find(".sliderBlock")[0],
                    e = f.find(".sliderContainer")[0],
                    y = t.clientX,
                    g = t.clientY;
                  n.Helpers.IsNullOrEmpty(y) &&
                    (t.touches && t.touches.length > 0
                      ? ((y = t.touches[0].clientX), (g = t.touches[0].clientY))
                      : t.originalEvent &&
                        t.originalEvent.changedTouches &&
                        t.originalEvent.changedTouches.length > 0 &&
                        ((y = t.originalEvent.changedTouches[0].clientX),
                        (g = t.originalEvent.changedTouches[0].clientY)));
                  var et = y,
                    ot = g,
                    r = 0,
                    ut = 0,
                    ft = 0,
                    st = 0,
                    nt = 0,
                    ht = n.Helpers.RandomNumber(0, 1),
                    ct = 1 + n.Helpers.RandomNumber(0, 1.5, 1),
                    lt = function (n, t, i, r) {
                      return (
                        (n = Math.pow(n / r, ct)),
                        ht === 0 ? i * n * n + t : -i * n * (n - 2) + t
                      );
                    },
                    w = function (n) {
                      var i = n.clientX || n.touches[0].clientX,
                        u = n.clientY || n.touches[0].clientY,
                        t;
                      if (
                        ((r = i - et),
                        (ut = u - ot),
                        (t = v - 58),
                        r >= t || r <= 0)
                      )
                        return !1;
                      c = !0;
                      s.push(Math.floor(ut));
                      ft = lt(r, 0, t, t);
                      st = r;
                      nt = ft;
                      d.style.left = r + "px";
                      it.style.width = r + d.offsetWidth + "px";
                      rt.style.left = nt - tt + "px";
                      e.classList.add("sliderContainer_active");
                    },
                    k = function () {
                      document.removeEventListener("mousemove", w);
                      document.removeEventListener("mouseup", k);
                      document.removeEventListener("touchmove", w);
                      document.removeEventListener("touchend", k);
                      s.splice(0, 0, Math.floor(nt));
                      u.CheckSlideCaptcha({ Trail: s })
                        .then(function (n) {
                          e.classList.remove("sliderContainer_active");
                          e.classList.add("sliderContainer_success");
                          i.dragError = !1;
                          b = !0;
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
                            d.style.left = "";
                            it.style.width = "";
                            rt.style.left = "";
                            l(i, {});
                          }, 1e3);
                        });
                    };
                  document.addEventListener("mousemove", w);
                  document.addEventListener("mouseup", k);
                  document.addEventListener("touchmove", w);
                  document.addEventListener("touchend", k);
                };
                f.find(".slider").on("mousedown touchstart", function (n) {
                  n.preventDefault();
                  g(n);
                });
                k = function () {
                  var n, t;
                  d.style.left = "";
                  b = !1;
                  nt();
                  n = f.find(".sliderContainer")[0];
                  n.classList.remove(
                    "sliderContainer_active",
                    "sliderContainer_success",
                    "sliderContainer_fail"
                  );
                  t = f.find(".sliderMask")[0];
                  t.style.width = "";
                };
                nt = function () {
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
      t.SliderCaptcha = hr;
      cr = (function () {
        function t() {}
        return (
          (t.DirectiveFactory = function (t, i, r) {
            return {
              restrict: "E",
              template:
                '<div class="slidercaptcha card">\n                              <div class="card-header">\n                                  <span></span>\n                              </div>\n                              <div class="card-body">\n                                  <div class="sliderCaptcha-area"></div>\n                              </div>\n                          </div>',
              link: function (u, f, e) {
                var o = e.showAreaId,
                  s = null,
                  h;
                s = t(e.verifyCallback);
                h = null;
                h = t(e.refreshCallback);
                r.On("OnSliderCaptchaReset", function () {
                  jQuery("#" + o + " .sliderCaptcha-area").sliderCaptcha(
                    "reset"
                  );
                });
                jQuery("#" + o + " .sliderContainer").length > 0
                  ? jQuery("#" + o + " .sliderCaptcha-area").sliderCaptcha(
                      "reset"
                    )
                  : jQuery("#" + o + " .sliderCaptcha-area").sliderCaptcha({
                      width: 280,
                      height: 150,
                      sliderL: 42,
                      sliderR: 9,
                      offset: 5,
                      loadingText: "Loading...",
                      failedText: n.Helpers.ChangeLanguage("請重新嘗試"),
                      barText: n.Helpers.ChangeLanguage("向右滑動填充拼圖"),
                      repeatIcon: "fa fa-redo",
                      setSrc: function () {
                        return "/Api/Verify/GetSliderCaptcha";
                      },
                      onSuccess: function (n) {
                        s(u, { status: !0, key: n });
                      },
                      onFail: function () {
                        s(u, { status: !1 });
                      },
                      onRefresh: function () {
                        h(u, {});
                      },
                      remoteUrl: "/Api/Verify/CheckSliderCaptcha",
                      verify: function (n, t) {
                        var r = i.defer();
                        return (
                          $.ajax({
                            url: t,
                            data: JSON.stringify(n),
                            cache: !1,
                            type: "POST",
                            contentType: "application/json",
                            dataType: "json",
                            headers: {
                              RequestVerificationToken: $(
                                "ajax-anti-forgery-token"
                              ).attr("token"),
                            },
                          })
                            .done(function (n) {
                              r.resolve({ isValid: !0, key: n.Data.Message });
                            })
                            .fail(function () {
                              r.reject({ isValid: !1 });
                            }),
                          r.promise
                        );
                      },
                    });
              },
            };
          }),
          (t.$name = "sliderCaptchaBar"),
          (t.$inject = ["$parse", "$q", "messageBus", t.DirectiveFactory]),
          t
        );
      })();
      t.SliderCaptchaBar = cr;
    })((t = n.Directives || (n.Directives = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterDirectives(OBSApp.Directives),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function n() {}
          return (
            (n.DirectiveFactory = function () {
              return function (n) {
                return typeof n != "undefined" ? n + "%" : n;
              };
            }),
            (n.$name = "percentFormat"),
            (n.$inject = [n.DirectiveFactory]),
            n
          );
        })(),
        t;
      n.PercentFormat = i;
      t = (function () {
        function n() {}
        return (
          (n.DirectiveFactory = function (n) {
            return function (t) {
              return n.trustAsHtml(t);
            };
          }),
          (n.$name = "trustHtml"),
          (n.$inject = ["$sce", n.DirectiveFactory]),
          n
        );
      })();
      n.TrustHtml = t;
    })((t = n.Filters || (n.Filters = {})));
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterFilter(
  OBSApp.Filters.PercentFormat.$name,
  OBSApp.Filters.PercentFormat.DirectiveFactory
);
OBSApp.RegisterAngular.RegisterFilter(
  OBSApp.Filters.TrustHtml.$name,
  OBSApp.Filters.TrustHtml.$inject
),
  (function (n) {
    var t;
    (function (n) {
      var e = (function () {
          function r() {
            this._isConnect = !1;
          }
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
  })(OBSApp || (OBSApp = {}));
OBSApp.RegisterAngular.RegisterService(
  OBSApp.Adapter.SignalRAdapter.$name,
  OBSApp.Adapter.SignalRAdapter
);

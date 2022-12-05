(()=>{var t={902:t=>{t.exports={countryZipCodeMap:{ch:"^(CH-)?\\d{4}$",fr:"^(F-)?\\d{5}$",de:"^(D-)?\\d{5}$",nl:"^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$"}}}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}(()=>{"use strict";class t{constructor(t){this.errorMessageDisplayer=t}set errorMessage(t){this.displayErrorMessage(t),t?this.activate():this.deactivate()}displayErrorMessage(t){this.errorMessageDisplayer.textContent=t}activate(){this.errorMessageDisplayer.classList.add("active")}deactivate(){this.errorMessageDisplayer.classList.remove("active")}}class e{constructor(e,s){this.control=e,this.messageWhenInvalid="Invalid",this.errorHandler=new t(s),this.initialiseControl()}initialiseControl(){this.doValidityChecks=this.doValidityChecks.bind(this),this.control.addEventListener("focus",this.doValidityChecks),this.control.addEventListener("input",this.doValidityChecks)}doValidityChecks(){this.control.checkValidity()?this.cancelError():this.displayError()}displayError(){this.errorHandler.errorMessage=this.messageWhenInvalid}cancelError(){this.errorHandler.errorMessage=""}}class r extends e{constructor(t,e){super(t,e),this.messageWhenInvalid="A valid email address is required"}}class o extends e{constructor(t,e){super(t,e),this.messageWhenInvalid="A country selection is required"}}var a=s(902);class i extends e{constructor(t,e){super(t,e),this.messageWhenInvalid="A valid zip code for the selected country is required",this.countryZipCodeMap=a.countryZipCodeMap,this.activateCountryChangeDetector()}doValidityChecks(){const t=this.control.value,e=this.getCountry();this.checkPattern(e,t),super.doValidityChecks()}getCountry(){return this.getCountryControl().value}getCountryControl(){return this.control.closest("form").querySelector(".country")}checkPattern(t,e){t in this.countryZipCodeMap&&(new RegExp(this.countryZipCodeMap[t]).test(e)?this.control.setCustomValidity(""):this.control.setCustomValidity(this.messageWhenInvalid))}activateCountryChangeDetector(){const t=this.getCountryControl();t&&(this.doValidityChecks=this.doValidityChecks.bind(this),t.addEventListener("input",this.doValidityChecks))}}class d extends e{constructor(t,e){super(t,e),this.messageWhenInvalid="A password with at least one digit, at least one lowercase letter, at         least one uppercase letter and a special character is required"}}class n{constructor(e,s,r){this.confirmPasswordInput=e,this.passwordInput=s,this.errorHandler=new t(r)}}class l{static validatorList=[];static loadValidators(){const t=document.getElementById("email"),e=document.getElementById("email-error-message");l.loadEmailValidator(t,e);const s=document.getElementById("country"),r=document.getElementById("country-error-message");l.loadCountryValidator(s,r);const o=document.getElementById("zip-code"),a=document.getElementById("zip-code-error-message");l.loadZipCodeValidator(o,a);const i=document.getElementById("password"),d=document.getElementById("password-error-message");l.loadPasswordValidator(i,d);const n=document.getElementById("confirm-password"),c=document.getElementById("confirm-password-error-message");l.loadConfirmPasswordValidator(n,i,c)}static loadEmailValidator(t,e){const s=new r(t,e);l.validatorList.push(s)}static loadCountryValidator(t,e){const s=new o(t,e);l.validatorList.push(s)}static loadZipCodeValidator(t,e){const s=new i(t,e);l.validatorList.push(s)}static loadPasswordValidator(t,e){const s=new d(t,e);l.validatorList.push(s)}static loadConfirmPasswordValidator(t,e,s){const r=new n(t,e,s);l.validatorList.push(r)}static loadSubmissionValidator(t,e){return new SubmissionValidator(t,e)}}document.addEventListener("DOMContentLoaded",l.loadValidators)})()})();
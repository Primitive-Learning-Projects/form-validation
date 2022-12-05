(()=>{"use strict";class t{constructor(t){this.errorMessageDisplayer=t}set errorMessage(t){this.displayErrorMessage(t),t?this.activate():this.deactivate()}displayErrorMessage(t){this.errorMessageDisplayer.textContent=t}activate(){this.errorMessageDisplayer.classList.add("active")}deactivate(){this.errorMessageDisplayer.classList.remove("active")}}class s{constructor(s,e){this.input=s,this.messageWhenInvalid="Invalid",this.errorHandler=new t(e),this.initialiseInput()}initialiseInput(){this.doValidityChecks=this.doValidityChecks.bind(this),this.input.addEventListener("focus",this.doValidityChecks)}doValidityChecks(){this.input.checkValidity()?this.cancelError():this.displayError()}displayError(){this.errorHandler.errorMessage=this.messageWhenInvalid}cancelError(){this.errorHandler.errorMessage=""}}class e extends s{constructor(t,s){super(t,s),this.messageWhenInvalid="A valid email address is required"}}class r{constructor(s,e){this.input=s,this.errorHandler=new t(e)}}class a{constructor(s,e){this.input=s,this.errorHandler=new t(e)}}class i{constructor(s,e){this.input=s,this.errorHandler=new t(e)}}class o{constructor(s,e,r){this.confirmPasswordInput=s,this.passwordInput=e,this.errorHandler=new t(r)}}class d{static validatorList=[];static loadValidators(){const t=document.getElementById("email"),s=document.getElementById("email-error-message");d.loadEmailValidator(t,s);const e=document.getElementById("country"),r=document.getElementById("country-error-message");d.loadCountryValidator(e,r);const a=document.getElementById("zip-code"),i=document.getElementById("zip-code-error-message");d.loadZipCodeValidator(a,i);const o=document.getElementById("password-input"),n=document.getElementById("password-error-message");d.loadPasswordValidator(o,n);const l=document.getElementById("confirm-password-input"),c=document.getElementById("confirm-password-error-message");d.loadConfirmPasswordValidator(l,o,c)}static loadEmailValidator(t,s){const r=new e(t,s);d.validatorList.push(r)}static loadCountryValidator(t,s){const e=new r(t,s);d.validatorList.push(e)}static loadZipCodeValidator(t,s){const e=new a(t,s);d.validatorList.push(e)}static loadPasswordValidator(t,s){const e=new i(t,s);d.validatorList.push(e)}static loadConfirmPasswordValidator(t,s,e){const r=new o(t,s,e);d.validatorList.push(r)}static loadSubmissionValidator(t,s){return new SubmissionValidator(t,s)}}document.addEventListener("DOMContentLoaded",d.loadValidators)})();
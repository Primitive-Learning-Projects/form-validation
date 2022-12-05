(()=>{"use strict";class t{constructor(t){this.errorMessageDisplayer=t}set errorMessage(t){this.displayErrorMessage(t),t?this.activate():this.deactivate()}displayErrorMessage(t){this.errorMessageDisplayer.textContent=t}activate(){this.errorMessageDisplayer.classList.add("active")}deactivate(){this.errorMessageDisplayer.classList.remove("active")}}class s{constructor(s,e){this.control=s,this.messageWhenInvalid="Invalid",this.errorHandler=new t(e),this.initialiseControl()}initialiseControl(){this.doValidityChecks=this.doValidityChecks.bind(this),this.control.addEventListener("focus",this.doValidityChecks),this.control.addEventListener("control",this.doValidityChecks)}doValidityChecks(){this.control.checkValidity()?this.cancelError():this.displayError()}displayError(){this.errorHandler.errorMessage=this.messageWhenInvalid}cancelError(){this.errorHandler.errorMessage=""}}class e extends s{constructor(t,s){super(t,s),this.messageWhenInvalid="A valid email address is required"}}class r extends s{constructor(t,s){super(t,s),this.messageWhenInvalid="A country selection is required"}}class a{constructor(s,e){this.input=s,this.errorHandler=new t(e)}}class o{constructor(s,e){this.input=s,this.errorHandler=new t(e)}}class i{constructor(s,e,r){this.confirmPasswordInput=s,this.passwordInput=e,this.errorHandler=new t(r)}}class d{static validatorList=[];static loadValidators(){const t=document.getElementById("email"),s=document.getElementById("email-error-message");d.loadEmailValidator(t,s);const e=document.getElementById("country"),r=document.getElementById("country-error-message");d.loadCountryValidator(e,r);const a=document.getElementById("zip-code"),o=document.getElementById("zip-code-error-message");d.loadZipCodeValidator(a,o);const i=document.getElementById("password-input"),n=document.getElementById("password-error-message");d.loadPasswordValidator(i,n);const l=document.getElementById("confirm-password-input"),c=document.getElementById("confirm-password-error-message");d.loadConfirmPasswordValidator(l,i,c)}static loadEmailValidator(t,s){const r=new e(t,s);d.validatorList.push(r)}static loadCountryValidator(t,s){const e=new r(t,s);d.validatorList.push(e)}static loadZipCodeValidator(t,s){const e=new a(t,s);d.validatorList.push(e)}static loadPasswordValidator(t,s){const e=new o(t,s);d.validatorList.push(e)}static loadConfirmPasswordValidator(t,s,e){const r=new i(t,s,e);d.validatorList.push(r)}static loadSubmissionValidator(t,s){return new SubmissionValidator(t,s)}}document.addEventListener("DOMContentLoaded",d.loadValidators)})();
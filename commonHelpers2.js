import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""},t=document.querySelector(".feedback-form");t.addEventListener("input",e=>{a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))});t.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset(),a.email="",a.message=""});const s=localStorage.getItem("feedback-form-state");if(s){const e=JSON.parse(s);t.email.value=e.email||"",t.message.value=e.message||"",a.email=e.email||"",a.message=e.message||""}
//# sourceMappingURL=commonHelpers2.js.map

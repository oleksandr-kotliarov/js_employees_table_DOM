parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l,c=e(document.querySelector("tbody").children),i=e(document.querySelector("tr").children).map(function(e){return e.innerText.toLowerCase()}),d=[];c.forEach(function(e,t){d.push({name:e.children[0].textContent,position:e.children[1].textContent,office:e.children[2].textContent,age:+e.children[3].textContent,salary:+e.children[4].textContent.replace(/\D/g,""),id:t})}),e(document.querySelector("tr").children).forEach(function(e,t){var n=i[t];e.addEventListener("click",function(e){var t;d=d.sort(function(e,t){return"number"==typeof e[n]?e[n]-t[n]:e[n].localeCompare(t[n])}),l===e.target&&(d=d.reverse()),l=l?void 0:e.target;for(var o=[],r=0;r<c.length;r++)o.push(c[d[r].id]);(t=document.querySelector("tbody")).append.apply(t,o)})}),document.querySelector("tbody").addEventListener("click",function(t){t.target.cellIndex&&e(document.querySelector("tbody").children).forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active")}),document.querySelector("body").insertAdjacentHTML("beforeend",'\n  <form action="#" class="new-employee-form">\n    <label>Name: <input type="text" data-qa="name"></label>\n    <label>Position: <input type="text"  data-qa="position"></label>\n    <label>Office:\n      <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select></label>\n    <label>\n    Age: <input type="number" data-qa="age"></label>\n    <label>Salary: <input type="number" data-qa="salary"></label>\n    <button type="submit">Save to table</button>\n  </form>\n');var u,s,p=function(e,t){var n=document.createElement("section");n.innerHTML='\n    <h2 class="title">'.concat("error"===t?"Error":"Success","</h2>\n    <p>").concat(e,"</p>\n  "),n.classList.add("notification",t),n.style.top="".concat(10,"px"),n.style.right="".concat(10,"px"),document.querySelector("body").append(n),setTimeout(function(){n.remove()},2e3)},f=document.querySelector("form"),h=e(document.querySelectorAll("input"));function m(t){t&&e(document.querySelectorAll("td")).forEach(function(e){if(3===e.childNodes.length){var t=e.parentElement.rowIndex-1,n=e.cellIndex;switch(e.classList.remove("edit"),u=e.children[0].value.length?e.children[0].value:s,0===n&&u.length<4&&(u=s,p("Name must consist of at least 4 characters","error")),3===n&&(u<18||u>90)&&(u=s,p("Age must be between 18 and 90","error")),4===n&&(u="$".concat(Number(u).toLocaleString())),e.cellIndex){case 0:d[t].name=u;break;case 1:d[t].position=u;break;case 2:d[t].office=u;break;case 3:d[t].age=+u;break;default:d[t].salary=+u.replace(/\D/g,"")}e.innerHTML="\n        ".concat(u,"\n      ")}else e.innerHTML="\n        ".concat(e.innerText,"\n      ")})}f.addEventListener("submit",function(e){if(e.preventDefault(),h.some(function(e){return 0===e.value.length}))p("All fields must be filled","error");else if(h[0].value.length<4)p("Name must consist of at least 4 characters","error");else if(+h[2].value<18||+h[2].value>90)p("Age must be between 18 and 90","error");else{var t=document.createElement("tr");t.innerHTML="\n    <td>".concat(f.children[0].lastChild.value,"</td>\n    <td>").concat(f.children[1].lastChild.value,"</td>\n    <td>").concat(f.children[2].lastChild.value,"</td>\n    <td>").concat(f.children[3].lastChild.value,"</td>\n    <td>$").concat(Number(f.children[4].lastChild.value).toLocaleString("en-US"),"</td>\n  "),document.querySelector("tbody").append(t),c.push(t),d.push({name:f.children[0].lastChild.value,position:f.children[1].lastChild.value,office:f.children[2].lastChild.value,age:+f.children[3].lastChild.value,salary:+f.children[3].lastChild.value,id:d.length}),f.reset(),p("Added to the table","success")}}),document.querySelector("tbody").addEventListener("dblclick",function(t){var n=t.target.innerText;s=4!==t.target.cellIndex?n:n.replace(/\D/g,""),t.target.classList.add("edit"),2===t.target.cellIndex?(t.target.innerHTML='\n    <select name="age" value="'.concat(n,'" class="cell-input edit">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n    '),e(t.target.children[0].children).forEach(function(e){e.value===s&&e.setAttribute("selected","true")})):t.target.cellIndex>2?t.target.innerHTML='\n    <input type="number" class="cell-input edit" value="'.concat(n.replace(/\D/g,""),'">\n    '):t.target.innerHTML='\n    <input type="text" class="cell-input edit" value="'.concat(n,'">\n    ')}),document.querySelector("body").addEventListener("click",function(e){m(!e.target.classList.contains("edit"))}),document.querySelector("body").addEventListener("keypress",function(e){m("Enter"===e.key)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c63b3153.js.map
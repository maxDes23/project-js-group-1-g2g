import"./assets/shopping-list-013ce5cd.js";import{a as l,i as g,g as p,c as f,s as v}from"./assets/vendor-8a3563eb.js";(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var n=this,a=(n.document||n.ownerDocument).querySelectorAll(e),o=0;a[o]&&a[o]!==n;)++o;return Boolean(a[o])}),typeof t.closest!="function"&&(t.closest=function(e){for(var n=this;n&&n.nodeType===1;){if(n.matches(e))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".js-open-modal"),e=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach(function(a){a.addEventListener("click",function(o){o.preventDefault();let s=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+s+'"]').classList.add("active"),e.classList.add("active")})}),n.forEach(function(a){a.addEventListener("click",function(o){this.closest(".modal").classList.remove("active"),e.classList.remove("active")})}),document.body.addEventListener("keyup",function(a){a.keyCode==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),e.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();l.defaults.baseURL="https://books-backend.p.goit.global/books/";async function b(){return await l.get("category-list")}async function h(){return await l.get("top-books")}async function k(t){return await l.get(`category?category=${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await h(),{data:e}=t;L(e),E()});function u(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:a,book_image:o,title:s,author:c}=n;return`
      <div class="book" id="${a}">
          <img src="${o}" class="book-img" alt="test" />
          <p class="book-title">${s}</p>
          <p class="book-author">${c}</p>
        </div>
            `}).join("")}async function L(t){const e=document.querySelector(".category-container"),n=t.map(a=>{const o=a.books,s=u(o),c=a.list_name;return`
       <div class="${c.replaceAll(" ","_")}">
          <p class="category-descriotion" id="category">
            ${c}
          </p>
          <div class="books-container"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),S()}function S(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",w)})}async function w(t){try{document.querySelector(".books-container").classList.toggle("show-more");const e=t.target.id,n=t.target.id.replaceAll(" ","_"),a=document.querySelector(`.${n}`),o=await k(e),s=u(o.data),c=`
       <p class="category-descriotion" id="category">
            ${e}
          </p>
          <div class="books-container show-more"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${e}">SEE MORE</button>
          </div>
      `;a.innerHTML=c}catch(e){console.log(e)}}function E(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",q)})}function q(t){if(t.target.classList.contains("categories_item")){const e=t.target.innerText,n=document.querySelector(".category-title");n.textContent=e}}document.addEventListener("DOMContentLoaded",async function(){const t=await b(),{data:e}=t;C(e)});function C(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}const A=g({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),m=p(A),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const I=document.querySelector(".sign-up-form"),i=document.querySelector(".sign-up-btn"),d=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");I.addEventListener("submit",M);d.addEventListener("click",y);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");i.textContent="SIGN UP";d.textContent="SIGN IN";async function M(t){if(t.preventDefault(),i.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,a=e.elements.password.value;f(m,n,a).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}i.textContent==="SIGN IN"&&y()}async function y(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),i.textContent="SIGN IN",d.textContent="SIGN UP";const e=t.target;console.dir(e.elements);const n=e.elements.email.value,a=e.elements.password.value;v(m,n,a).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}
//# sourceMappingURL=commonHelpers.js.map

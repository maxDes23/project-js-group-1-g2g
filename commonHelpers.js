import"./assets/support-87d1bbc8.js";import{a as i,i as f,g as k,c as h,s as v}from"./assets/vendor-8a3563eb.js";i.defaults.baseURL="https://books-backend.p.goit.global/books/";async function w(){return await i.get("category-list")}async function L(){return await i.get("top-books")}async function S(t){return await i.get(`category?category=${t}`)}async function I(t){return await i.get(`${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await w(),{data:e}=t;C(e)});function C(t){const e=document.querySelector(".categories"),a=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#' id='${s}'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",a),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}async function q(t){try{const{book_image:e,title:a,author:n,list_name:o,amazon_product_url:s}=t,c=document.querySelector(".modal");c.innerHTML="";const b=['<button class="modal-close-button">Close</button>',`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${a}</h2>`,`<p class="modal-title-name">Author: ${n}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${s}" class="modal-link">Amazon Link</a>`,'<button class="modal-button-add">Add to shopping list</button>'];c.innerHTML=b.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{c.classList.remove("active")}),c.classList.add("active")}catch(e){console.log(e)}}function A(){document.querySelector(".category-container").addEventListener("click",E)}async function E(t){const e=t.target.closest(".book");if(!e)return;const a=e.id,n=await I(a);q(n.data)}document.addEventListener("DOMContentLoaded",u);async function u(){const t=await L(),{data:e}=t;await B(e),_(),A()}function m(t){return document.querySelector(".books-container"),t.map(a=>{const{_id:n,book_image:o,title:s,author:c}=a;return`
      <li class="book" id="${n}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${c}</p> 
      </li>
            `}).join("")}async function B(t){const e=document.querySelector(".category-container"),a=t.map(n=>{const o=n.books,s=m(o),c=n.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <ul class="books-container"> ${s} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",a),$()}function $(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",g)})}function _(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",g)})}async function g(t){t.preventDefault(),console.log(1);const e=document.querySelector(".category-container");e.innerHTML="";const a=t.target.innerText,n=t.target.id,o=document.querySelector(".category-title");o.textContent=a,console.log(n);try{n===""?await u():await M(n)}catch(s){console.log(s)}}async function M(t){console.log(2);const e=document.querySelector(".category-container"),a=await S(t),o=`
      <ul class="books-container show-more"> ${m(a.data)} </ul>
    `;e.insertAdjacentHTML("beforeend",o)}const N=f({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),y=k(N),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const T=document.querySelector(".sign-up-form"),l=document.querySelector(".sign-up-btn"),d=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");T.addEventListener("submit",D);d.addEventListener("click",p);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");l.textContent="SIGN UP";d.textContent="SIGN IN";async function D(t){if(t.preventDefault(),l.textContent==="SIGN UP"){const e=t.target,a=e.elements.email.value,n=e.elements.password.value;h(y,a,n).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}l.textContent==="SIGN IN"&&p()}async function p(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),l.textContent="SIGN IN",d.textContent="SIGN UP";const e=t.target,a=e.elements.email.value,n=e.elements.password.value;v(y,a,n).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

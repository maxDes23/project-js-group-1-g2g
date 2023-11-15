import"./assets/support-29e622cd.js";import{a as i,i as f,g as k,c as h,s as v}from"./assets/vendor-8a3563eb.js";i.defaults.baseURL="https://books-backend.p.goit.global/books/";async function w(){return await i.get("category-list")}async function L(){return await i.get("top-books")}async function S(t){return await i.get(`category?category=${t}`)}async function I(t){return await i.get(`${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await w(),{data:e}=t;A(e)});function A(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#' id='${s}'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}async function B(t){try{const{book_image:e,title:n,author:a,list_name:o,amazon_product_url:s}=t,c=document.querySelector(".modal");c.innerHTML="";const b=[`<button class="modal-close-button"><svg
    class="modal__cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
    />
  </svg></button>`,`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${a}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${s}" class="modal-link">Amazon Link</a>`,'<button class="modal-button-add">Add to shopping list</button>'];c.innerHTML=b.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{c.classList.remove("active")}),c.classList.add("active")}catch(e){console.log(e)}}function q(){document.querySelector(".category-container").addEventListener("click",C)}async function C(t){const e=t.target.closest(".book");if(!e)return;const n=e.id,a=await I(n);B(a.data)}document.addEventListener("DOMContentLoaded",u);async function u(){const t=await L(),{data:e}=t;await E(e),_(),q()}function m(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:a,book_image:o,title:s,author:c}=n;return`
      <li class="book" id="${a}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${c}</p> 
      </li>
            `}).join("")}async function E(t){const e=document.querySelector(".category-container"),n=t.map(a=>{const o=a.books,s=m(o),c=a.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <ul class="books-container"> ${s} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),M()}function M(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",g)})}function _(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",g)})}async function g(t){t.preventDefault();const e=document.querySelector(".category-container");e.innerHTML="";const n=t.target.id,a=document.querySelector(".category-title");t.target.innerHTML=="All Categories"?a.innerHTML="Best Sellers <span>Books</span>":a.textContent=n;try{n===""?await u():await $(n)}catch(o){console.log(o)}}async function $(t){const e=document.querySelector(".category-container"),n=await S(t),o=`
      <ul class="books-container show-more"> ${m(n.data)} </ul>
    `;e.insertAdjacentHTML("beforeend",o)}const T=f({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),y=k(T),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const N=document.querySelector(".sign-up-form"),l=document.querySelector(".sign-up-btn"),d=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");N.addEventListener("submit",x);d.addEventListener("click",p);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");l.textContent="SIGN UP";d.textContent="SIGN IN";async function x(t){if(t.preventDefault(),l.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,a=e.elements.password.value;h(y,n,a).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}l.textContent==="SIGN IN"&&p()}async function p(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),l.textContent="SIGN IN",d.textContent="SIGN UP";const e=t.target,n=e.elements.email.value,a=e.elements.password.value;v(y,n,a).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

import"./assets/support-517a42b6.js";import{a as i,i as v,g as w,c as L,s as S}from"./assets/vendor-8a3563eb.js";i.defaults.baseURL="https://books-backend.p.goit.global/books/";async function B(){return await i.get("category-list")}async function A(){return await i.get("top-books")}async function q(t){return await i.get(`category?category=${t}`)}async function I(t){return await i.get(`${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await B(),{data:e}=t;E(e)});function E(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#' id='${s}'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}const m=document.querySelector(".backdrop"),g=document.querySelector("body");async function C(t){try{const{book_image:e,title:n,author:a,list_name:o,amazon_product_url:s,buy_links:[c]}=t,l=document.querySelector(".modal");m.style.display="inline",l.innerHTML="";const h=[`<button class="modal-close-button"><svg
    class="modal__cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
    />
  </svg></button>`,`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${a}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${s}" class="modal-link">Amazon</a>  `,`<a href="${c}" class="modal-link">BOOK</a>`,'<button class="modal-button-add">Add to shopping list</button>'];l.innerHTML=h.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{l.classList.remove("active"),m.style.display="none",g.classList.remove("modal-open"),document.querySelector(".modal-button-add").addEventListener("click",()=>{console.log("modalButtonAdd")})}),l.classList.add("active")}catch(e){console.log(e)}}function _(){document.querySelector(".category-container").addEventListener("click",$)}async function $(t){const e=t.target.closest(".book");if(!e)return;const n=e.id;g.classList.add("modal-open");const a=await I(n);C(a.data)}document.addEventListener("DOMContentLoaded",y);async function y(){const t=await A(),{data:e}=t;await M(e),N(),_()}function p(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:a,book_image:o,title:s,author:c}=n;return`
      <li class="book" id="${a}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${c}</p> 
      </li>
            `}).join("")}async function M(t){const e=document.querySelector(".category-container"),n=t.map(a=>{const o=a.books,s=p(o),c=a.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <ul class="books-container"> ${s} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),T()}function T(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",b)})}function N(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",b)})}async function b(t){t.preventDefault();const e=document.querySelector(".category-container");e.innerHTML="";const n=t.target.id,a=document.querySelector(".category-title");t.target.innerHTML=="All Categories"?a.innerHTML="Best Sellers <span>Books</span>":a.textContent=n;try{n===""?await y():await x(n)}catch(o){console.log(o)}}async function x(t){const e=document.querySelector(".category-container"),n=await q(t),o=`
      <ul class="books-container show-more"> ${p(n.data)} </ul>
    `;e.insertAdjacentHTML("beforeend",o)}const D=v({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),k=w(D),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const G=document.querySelector(".sign-up-form"),d=document.querySelector(".sign-up-btn"),u=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");G.addEventListener("submit",H);u.addEventListener("click",f);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");d.textContent="SIGN UP";u.textContent="SIGN IN";async function H(t){if(t.preventDefault(),d.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,a=e.elements.password.value;L(k,n,a).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}d.textContent==="SIGN IN"&&f()}async function f(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),d.textContent="SIGN IN",u.textContent="SIGN UP";const e=t.target,n=e.elements.email.value,a=e.elements.password.value;S(k,n,a).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

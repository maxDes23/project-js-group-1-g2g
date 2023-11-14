import"./assets/shopping-list-256f7aa1.js";import{a as l,i as f,g as k,c as v,s as h}from"./assets/vendor-8a3563eb.js";l.defaults.baseURL="https://books-backend.p.goit.global/books/";async function L(){return await l.get("category-list")}async function m(){return await l.get("top-books")}async function g(t){return await l.get(`category?category=${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await L(),{data:e}=t;w(e)});function w(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#' id='${s}'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}document.addEventListener("DOMContentLoaded",async function(){const t=await m(),{data:e}=t;S(e),I()});function d(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:a,book_image:o,title:s,author:c}=n;return`
      <div class="book" id="${a}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${c}</p>
        
      </div>
            `}).join("")}async function S(t){const e=document.querySelector(".category-container"),n=t.map(a=>{const o=a.books,s=d(o),c=a.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <div class="books-container"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),C()}function C(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",E)})}async function E(t){try{document.querySelector(".books-container").classList.toggle("show-more");const e=t.target.id,n=t.target.id.replaceAll(" ","_"),a=document.querySelector(`.${n}`),o=await g(e),s=d(o.data),c=`
       <p class="category-descriotion" id="category">
            ${e}
          </p>
          <div class="books-container show-more"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${e}">SEE MORE</button>
          </div>
      `;a.innerHTML=c}catch(e){console.log(e)}}function I(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",q)})}async function q(t){const e=document.querySelector(".category-container");if(console.log(e),e.innerHTML="",t.target.classList.contains("categories_item")){const n=t.target.innerText,a=t.target.id,o=document.querySelector(".category-title");o.textContent=n,await A(a)}}async function A(t){const e=document.querySelector(".category-container"),n=await g(t),o=`
      <div class="books-container show-more"> ${d(n.data)} </div>
    `;e.insertAdjacentHTML("beforeend",o)}function B(){return m().then(t=>t.data[0].books)}const $=document.querySelector(".books-container");$.addEventListener("click",async function(t){try{const e=t.target.closest(".book");if(!e)return;const n=await B(),a=e.id,o=n.find(s=>s._id===a);_(o)}catch(e){console.log(e)}});async function _(t){try{const{book_image:e,title:n,author:a,list_name:o,amazon_product_url:s}=t,c=document.querySelector(".modal");c.innerHTML="";const b=['<button class="modal-close-button">Close</button>',`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${a}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${s}" class="modal-link">Amazon Link</a>`,'<button class="modal-button-add">ADD</button>'];c.innerHTML=b.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{c.classList.remove("active")}),c.classList.add("active")}catch(e){console.log(e)}}const M=f({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),y=k(M),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const N=document.querySelector(".sign-up-form"),i=document.querySelector(".sign-up-btn"),u=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");N.addEventListener("submit",T);u.addEventListener("click",p);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");i.textContent="SIGN UP";u.textContent="SIGN IN";async function T(t){if(t.preventDefault(),i.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,a=e.elements.password.value;v(y,n,a).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}i.textContent==="SIGN IN"&&p()}async function p(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),i.textContent="SIGN IN",u.textContent="SIGN UP";const e=t.target;console.dir(e.elements);const n=e.elements.email.value,a=e.elements.password.value;h(y,n,a).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

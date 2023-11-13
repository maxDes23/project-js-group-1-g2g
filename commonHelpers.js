import"./assets/shopping-list-4785482b.js";import{a as l,i as b,g as f,c as k,s as v}from"./assets/vendor-8a3563eb.js";l.defaults.baseURL="https://books-backend.p.goit.global/books/";async function h(){return await l.get("category-list")}async function u(){return await l.get("top-books")}async function L(t){return await l.get(`category?category=${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await h(),{data:e}=t;w(e)});function w(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:a}=o;return`
        <li><a class='categories_item' href='#'>${a}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}document.addEventListener("DOMContentLoaded",async function(){const t=await u(),{data:e}=t;S(e),I()});function m(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:s,book_image:o,title:a,author:c}=n;return`
      <div class="book" id="${s}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${a}" />
        </div>
        <p class="book-title">${a}</p>
        <p class="book-author">${c}</p>
        
      </div>
            `}).join("")}async function S(t){const e=document.querySelector(".category-container"),n=t.map(s=>{const o=s.books,a=m(o),c=s.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <div class="books-container"> ${a} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),E()}function E(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",C)})}async function C(t){try{document.querySelector(".books-container").classList.toggle("show-more");const e=t.target.id,n=t.target.id.replaceAll(" ","_"),s=document.querySelector(`.${n}`),o=await L(e),a=m(o.data),c=`
       <p class="category-descriotion" id="category">
            ${e}
          </p>
          <div class="books-container show-more"> ${a} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${e}">SEE MORE</button>
          </div>
      `;s.innerHTML=c}catch(e){console.log(e)}}function I(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",q)})}function q(t){if(t.target.classList.contains("categories_item")){const e=t.target.innerText,n=document.querySelector(".category-title");n.textContent=e}}function A(){return u().then(t=>t.data[0].books)}const B=document.querySelector(".books-container");B.addEventListener("click",async function(t){try{const e=t.target.closest(".book");if(!e)return;const n=await A(),s=e.id,o=n.find(a=>a._id===s);_(o)}catch(e){console.log(e)}});async function _(t){try{const{book_image:e,title:n,author:s,list_name:o,amazon_product_url:a}=t,c=document.querySelector(".modal");c.innerHTML="";const p=['<button class="modal-close-button">Close</button>',`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${s}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${a}" class="modal-link">Amazon Link</a>`,'<button class="modal-button-add">ADD</button>'];c.innerHTML=p.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{c.classList.remove("active")}),c.classList.add("active")}catch(e){console.log(e)}}const $=b({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),g=f($),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const N=document.querySelector(".sign-up-form"),i=document.querySelector(".sign-up-btn"),d=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");N.addEventListener("submit",M);d.addEventListener("click",y);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");i.textContent="SIGN UP";d.textContent="SIGN IN";async function M(t){if(t.preventDefault(),i.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,s=e.elements.password.value;k(g,n,s).then(o=>{const a=o.user;console.log(a),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}i.textContent==="SIGN IN"&&y()}async function y(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),i.textContent="SIGN IN",d.textContent="SIGN UP";const e=t.target;console.dir(e.elements);const n=e.elements.email.value,s=e.elements.password.value;v(g,n,s).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

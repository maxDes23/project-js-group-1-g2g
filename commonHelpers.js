import"./assets/support-b83d9596.js";import{a as i,i as b,g as f,c as k,s as v}from"./assets/vendor-8a3563eb.js";i.defaults.baseURL="https://books-backend.p.goit.global/books/";async function h(){return await i.get("category-list")}async function w(){return await i.get("top-books")}async function g(t){return await i.get(`category?category=${t}`)}async function L(t){return await i.get(`${t}`)}document.addEventListener("DOMContentLoaded",async function(){const t=await h(),{data:e}=t;S(e)});function S(t){const e=document.querySelector(".categories"),n=t.map(o=>{const{list_name:s}=o;return`
        <li><a class='categories_item' href='#' id='${s}'>${s}</a></li>
        `}).join("");e.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}async function C(t){try{const{book_image:e,title:n,author:a,list_name:o,amazon_product_url:s}=t,c=document.querySelector(".modal");c.innerHTML="";const d=['<button class="modal-close-button">Close</button>',`<img src="${e}" class="modal-image">`,`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${a}</p>`,`<p class="modal-title-text">List Name: ${o}</p>`,`<a href="${s}" class="modal-link">Amazon Link</a>`,'<button class="modal-button-add">ADD</button>'];c.innerHTML=d.join(""),document.querySelector(".modal-close-button").addEventListener("click",()=>{c.classList.remove("active")}),c.classList.add("active")}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",async function(){const t=await w(),{data:e}=t;E(e),I(),document.querySelector(".category-container").addEventListener("click",a);async function a(o){const s=o.target.closest(".book");if(!s)return;const c=s.id,d=await L(c);C(d.data)}});function u(t){return document.querySelector(".books-container"),t.map(n=>{const{_id:a,book_image:o,title:s,author:c}=n;return`
      <div class="book" id="${a}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${c}</p>
        
      </div>
            `}).join("")}async function E(t){const e=document.querySelector(".category-container"),n=t.map(a=>{const o=a.books,s=u(o),c=a.list_name;return`
       <div class="${c.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${c}
          </p>
          <div class="books-container"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${c}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");e.insertAdjacentHTML("beforeend",n),q()}function q(){document.querySelectorAll(".btn-load-more").forEach(e=>{e.addEventListener("click",A)})}async function A(t){try{document.querySelector(".books-container").classList.toggle("show-more");const e=t.target.id,n=t.target.id.replaceAll(" ","_"),a=document.querySelector(`.${n}`),o=await g(e),s=u(o.data),c=`
       <p class="category-descriotion" id="category">
            ${e}
          </p>
          <div class="books-container show-more"> ${s} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${e}">SEE MORE</button>
          </div>
      `;a.innerHTML=c}catch(e){console.log(e)}}function I(){document.querySelectorAll(".categories_item").forEach(e=>{e.addEventListener("click",B)})}async function B(t){const e=document.querySelector(".category-container");if(e.innerHTML="",t.target.classList.contains("categories_item")){const n=t.target.innerText,a=t.target.id,o=document.querySelector(".category-title");o.textContent=n,await $(a)}}async function $(t){const e=document.querySelector(".category-container"),n=await g(t),o=`
      <div class="books-container show-more"> ${u(n.data)} </div>
    `;e.insertAdjacentHTML("beforeend",o)}const _=b({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),y=f(_),r=document.querySelector("#name");document.querySelector("#email");document.querySelector("#password");const M=document.querySelector(".sign-up-form"),l=document.querySelector(".sign-up-btn"),m=document.querySelector(".sign-in-btn");document.querySelector(".sign-up-btn-text");M.addEventListener("submit",N);m.addEventListener("click",p);r.classList.remove("display-none");r.hasAttribute("required")||r.setAttribute("required");l.textContent="SIGN UP";m.textContent="SIGN IN";async function N(t){if(t.preventDefault(),l.textContent==="SIGN UP"){const e=t.target,n=e.elements.email.value,a=e.elements.password.value;k(y,n,a).then(o=>{const s=o.user;console.log(s),alert("Your account has been created!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("This email address is already in use on Bookshelf. Please sign in!"),e.reset()})}l.textContent==="SIGN IN"&&p()}async function p(t){t.preventDefault(),r.removeAttribute("required"),r.classList.add("display-none"),l.textContent="SIGN IN",m.textContent="SIGN UP";const e=t.target,n=e.elements.email.value,a=e.elements.password.value;v(y,n,a).then(o=>{o.user,alert("You have signed in successfully!"),e.reset()}).catch(o=>{console.log(o.code+o.message),alert("The password is incorrect. Try again!"),e.reset()})}(()=>{window.addEventListener("scroll",function(){var e=document.getElementById("scroll-up");e&&(e.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",t);function t(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

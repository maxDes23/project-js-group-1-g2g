import"./assets/support-56549343.js";import{a as r,i as d,g as u,b as m}from"./assets/vendor-7b9f1f0a.js";(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(t){for(var o=this,c=(o.document||o.ownerDocument).querySelectorAll(t),a=0;c[a]&&c[a]!==o;)++a;return Boolean(c[a])}),typeof e.closest!="function"&&(e.closest=function(t){for(var o=this;o&&o.nodeType===1;){if(o.matches(t))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach(function(c){c.addEventListener("click",function(a){a.preventDefault();let n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")})}),o.forEach(function(c){c.addEventListener("click",function(a){this.closest(".modal").classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){c.keyCode==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{window.addEventListener("scroll",function(){var t=document.getElementById("scroll-up");t&&(t.style.visibility=window.scrollY>window.innerHeight?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",e);function e(){window.scrollTo({top:0,behavior:"smooth"})}})();r.defaults.baseURL="https://books-backend.p.goit.global/books/";async function y(){return await r.get("category-list")}async function p(){return await r.get("top-books")}async function v(e){return await r.get(`category?category=${e}`)}document.addEventListener("DOMContentLoaded",async function(){const e=await p(),{data:t}=e;g(t)});function i(e){return document.querySelector(".books-container"),e.map(o=>{const{_id:c,book_image:a,title:n,author:s}=o;return`
      <div class="book" id="${c}">
          <img src="${a}" class="book-img" alt="test" />
          <p class="book-title">${n}</p>
          <p class="book-author">${s}</p>
        </div>
            `}).join("")}async function g(e){const t=document.querySelector(".category-container"),o=e.map(c=>{const a=c.books,n=i(a),s=c.list_name;return`
       <div class="${s.replaceAll(" ","_")}">
          <p class="category-descriotion" id="category">
            ${s}
          </p>
          <div class="books-container"> ${n} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${s}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");t.insertAdjacentHTML("beforeend",o),b()}function b(){document.querySelectorAll(".btn-load-more").forEach(t=>{t.addEventListener("click",f)})}async function f(e){try{document.querySelector(".books-container").classList.toggle("show-more");const t=e.target.id,o=e.target.id.replaceAll(" ","_"),c=document.querySelector(`.${o}`),a=await v(t),n=i(a.data),s=`
       <p class="category-descriotion" id="category">
            ${t}
          </p>
          <div class="books-container show-more"> ${n} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${t}">SEE MORE</button>
          </div>
      `;c.innerHTML=s}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",async function(){const e=await y(),{data:t}=e;k(t)});function k(e){const t=document.querySelector(".categories"),o=e.map(a=>{const{list_name:n}=a;return`
        <li><a class='categories_item' href='#'>${n}</a></li>
        `}).join("");t.insertAdjacentHTML("beforeend",o),[...document.getElementsByClassName("categories_item")].forEach(a=>a.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),a.classList.add("active_category")}))}const l=d({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"});u(l);m(l);
//# sourceMappingURL=commonHelpers.js.map

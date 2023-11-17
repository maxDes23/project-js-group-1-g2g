import{g as v}from"./assets/support-e373f6a6.js";import{a as y,i as F,g as U,n as m,c as x,s as D,b as W,o as Y}from"./assets/vendor-ab85f73e.js";y.defaults.baseURL="https://books-backend.p.goit.global/books/";async function j(){return await y.get("category-list")}async function P(){return await y.get("top-books")}async function Q(e){return await y.get(`category?category=${e}`)}async function G(e){return await y.get(`${e}`)}document.addEventListener("DOMContentLoaded",async function(){const e=await j(),{data:t}=e;O(t)});function O(e){const t=document.querySelector(".categories"),n=e.map(o=>{const{list_name:a}=o;return`
        <li><a class='categories_item' href='#' id='_${a}'>${a}</a></li>
        `}).join("");t.insertAdjacentHTML("beforeend",n),[...document.getElementsByClassName("categories_item")].forEach(o=>o.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),o.classList.add("active_category")}))}const R="data:image/png;base64,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",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QfBIQM2AAADk0lEQVR4Ae1WTUhUURT+zn3OjJFlhqVpggn506IfSgzKoHTTD0W1aBNBBK2DwKKgXYFSEW5KKFq0qlZBEREYQYT0Q+nGFmkSqSVKqFk6ztzTnefMm3vfG988Y9p55PruO/Pdc7/73XPPu8CizRn5/ch3IjVxEdtBoFUCCIP98bpJOwCiDB6yQtZbOhHtxUJI8L1IDUflfdXdhNxZPwmriU5ODyAbCe4I17LgLhAVIsfGjJgQoW10aqpb9+d5gERP1b9CJWXOTa04j+OzDxSZWqL0DEIHxW6Fj7BEJSc2VDX3M9Vn129246SPtX5GPFXHOyJ79XkNEsTWbqVCQg4VyPtM9d0Yu8mkT2r9efDEYr8+r7EdLLmKMuVq3jKg6gAoryChF3h8APjWqViTKXZ5I2hZFWBFwL+HgJF3wNSwJ5waVjYvCcEUsdmmaYHqz4M2nwEiy/XpgB/vIZ8dBya+AgXlEM23gbW7TMzMOPhNK7infW6PkqZ2pcCYV3+RcSGQklM1qjwEarhkEHCsZCuo+a7CMcTBRwYBxyKFoMYroKqj0OMKZjGvEp4TsbQCfkZl28GFdcDKOl8c8kvM2CYHF4k4mZUjyDEt2pgdY58WLdtcaWcmpp29mkMie52mUDbEXFyZLgzutZlKSBfNAEpwELUSGKnFJfYjIVyDA3yv/oWES1+vEqmzH7RsL5REpjJkvCWAegEKpERADGuLI/InwTbARoIkslsQTKqcJ81N21UnRDLTFrAlMmDe6GR9lfDUCe1lWpXg0T47AJVvMSdwxkfBY/3An3HQ6mpgSVGaqHE64EOCE3/mEeXBj5BPLqhL2gcVKDbnzF8B0XAaoqnFISE7r4O7boKnfzqzJMiKw+3e0+E6hAan6MXi50TU7DiWFturgpyFx1RgsecceOQzqKgC8tWNVCqlnzY7tQ/56pIWndTGcmfo8mhTRiWIadJQYnIsE1fHZOdVoHInuPuhYmQ55IwnlH/6lxFD8ZrR4xgk4pKGLW08wZubZMyhVtn30p4odZLYg/GKo7Lqix7T/KSyeMzaJ1e/Jek3Jx1jV1lp+t0Yx++M5xeZFpZiTrMtpb2qU4P/ZYSBcNv3dZhPCfsbStYxdSmNwVhtjlocEyHQPjcv4XaEWwe7wyGsV3T67Y3MVZPcwyQaqG241yuOj82cLd1A0qpXu7hGZXRYYAFGUm29mLUII3ELryPXhj5h0bLYX+5cykKmpHYZAAAAAElFTkSuQmCC",g=document.querySelector(".backdrop"),k=document.querySelector("body");async function z(e){try{const{book_image:t,title:n,author:s,description:o,amazon_product_url:a,buy_links:[i]}=e,d=document.querySelector(".modal");g.style.display="inline",d.innerHTML="";const q=[`<button class="modal-close-button"><svg
    class="modal__cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
    />
  </svg></button>`,'<div class="modal-ipad">',`<img src="${t}" class="modal-image">`,'<div class="modal-ipad-overlay-text">',`<h2 class="modal__title">${n}</h2>`,`<p class="modal-title-name">Author: ${s}</p>`,`<p class="modal-title-text"> ${o} </p>`,`<div class="book-links">
        <a href="${a}" class="modal-link-amazon">
          <img src="${R}" alt="">
        </a>
        <a href="${i}" class="modal-link">
          <img src="${J}" alt="">
        </a>
        </div>`,"</div>","</div>",'<button class="modal-button-add">Add to shopping list</button>'];d.innerHTML=q.join("");const l=document.querySelector(".modal-button-add");l.setAttribute("id","1"),l.addEventListener("click",()=>{const u={book_image:t,title:n,author:s,description:o,amazon_product_url:a,buy_links:[i]};if(l.getAttribute("id")==="1"){const c=JSON.parse(localStorage.getItem("books"))||[];c.push(u),localStorage.setItem("books",JSON.stringify(c)),l.setAttribute("id","2"),l.textContent="Remove from shopping list",v()}else if(l.getAttribute("id")==="2"){const c=u.title,N=(JSON.parse(localStorage.getItem("books"))||[]).filter(T=>T.title!==c);localStorage.setItem("books",JSON.stringify(N)),l.setAttribute("id","1"),v(),l.textContent="Add to shopping list"}}),document.addEventListener("keydown",u=>{if(u.key==="Escape"){const c=document.querySelector(".modal");c.classList.contains("active")&&(c.classList.remove("active"),g.style.display="none",k.classList.remove("modal-open"))}}),g.addEventListener("click",u=>{const c=document.querySelector(".modal");c.contains(u.target)||(c.classList.remove("active"),g.style.display="none",k.classList.remove("modal-open"))}),document.querySelector(".modal-close-button").addEventListener("click",()=>{d.classList.remove("active"),g.style.display="none",k.classList.remove("modal-open")}),d.classList.add("active")}catch(t){console.log(t)}}function K(){document.querySelector(".category-container").addEventListener("click",H)}async function H(e){const t=e.target.closest(".book");if(!t)return;const n=t.id;k.classList.add("modal-open");const s=await G(n);z(s.data)}document.addEventListener("DOMContentLoaded",S);async function S(){const e=await P(),{data:t}=e;await V(t),Z(),K()}function w(e){return document.querySelector(".books-container"),e.map(n=>{const{_id:s,book_image:o,title:a,author:i}=n;return`
      <li class="book" id="${s}">
        <div class="book-picture">
          <img src="${o}" class="book-img" alt="${a}" />
        </div>
        <p class="book-title">${a}</p>
        <p class="book-author">${i}</p> 
      </li>
            `}).join("")}async function V(e){const t=document.querySelector(".category-container"),n=e.map(s=>{const o=s.books,a=w(o),i=s.list_name;return`
       <div class="${i.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${i}
          </p>
          <ul class="books-container"> ${a} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${i}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");t.insertAdjacentHTML("beforeend",n),X()}function X(){document.querySelectorAll(".btn-load-more").forEach(t=>{t.addEventListener("click",I)})}function Z(){document.querySelectorAll(".categories_item").forEach(t=>{t.addEventListener("click",I)})}async function I(e){e.preventDefault();const t=document.querySelector(".category-container");t.innerHTML="";let n=e.target.id;n[0]==="_"&&(n=n.substring(1));let s=n.split(" "),o="",a="";s.length>1?(o=s.pop(),a=s.join(" ")):a=n;const i=document.querySelector(".category-title");e.target.innerHTML=="All Categories"?i.innerHTML="Best Sellers <span>Books</span>":i.innerHTML=`${a} <span>${o}</span>`;try{n===""?await S():await _(n)}catch(d){console.log(d)}}async function _(e){const t=document.querySelector(".category-container"),n=await Q(e),o=`
      <ul class="books-container show-more"> ${w(n.data)} </ul>
    `;t.insertAdjacentHTML("beforeend",o)}const $=F({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),b=U($),p=document.querySelector("#name"),ee=document.querySelector(".sign-up-form"),r=document.querySelector(".sign-up-btn"),f=document.querySelector(".sign-in-btn"),te=document.querySelector(".log-out-btn"),A=document.querySelector("#authorization"),oe=document.querySelector(".modal-close-btn"),ne=document.querySelector(".sign-up-btn-text"),E=document.querySelector(".sign-up-btn-text"),L=document.querySelector(".sign-up-mobile"),h=document.querySelector(".mobile-nav"),B=document.querySelector(".mobile-logout-div"),C=document.querySelector(".user-block");oe.addEventListener("click",se);ee.addEventListener("submit",ce);f.addEventListener("click",le);ne.addEventListener("click",ae);te.addEventListener("click",M);L.addEventListener("click",ie);function se(){A.classList.add("display-none")}p.hasAttribute("required")||p.setAttribute("required");r.textContent="SIGN UP";f.textContent="SIGN IN";L.classList.add("display-none");function ae(e){if(e.preventDefault(),E.textContent==="Log out"){M();return}A.classList.remove("display-none")}function ie(e){e.preventDefault(),A.classList.remove("display-none")}async function ce(e){if(e.preventDefault(),r.textContent==="SIGN UP"){const t=e.target,n=t.elements.email.value,s=t.elements.password.value;if(s.length<6){m.Notify.failure("Password should be at least 6 characters!");return}x(b,n,s).then(o=>{const a=o.user;console.log(a),m.Notify.success("Your account has been created!"),t.reset()}).catch(o=>{console.log(o.code+o.message),m.Notify.failure("This email address is already in use on Bookshelf. Please sign in!"),t.reset()})}if(r.textContent==="SIGN IN"){const t=e.target,n=t.elements.email.value,s=t.elements.password.value;D(b,n,s).then(o=>{o.user,m.Notify.success("You have signed in successfully!"),A.classList.add("display-none"),t.reset()}).catch(o=>{console.log(o.code+o.message),m.Notify.failure("The email address or password is incorrect. Try again!"),t.reset()})}}async function le(e){if(e.preventDefault(),r.textContent==="SIGN IN"){p.classList.remove("display-none"),r.textContent="SIGN UP",f.textContent="SIGN IN";return}if(r.textContent==="SIGN UP"){p.removeAttribute("required"),p.classList.add("display-none"),r.textContent="SIGN IN",f.textContent="SIGN UP";return}}async function re(){Y(b,e=>{e?(A.classList.add("display-none"),E.textContent="Log out",L.classList.add("display-none"),h.classList.remove("display-none"),B.classList.remove("display-none"),C.classList.remove("display-none")):(E.textContent="Sign up",L.classList.remove("display-none"),h.classList.add("display-none"),B.classList.add("display-none"),C.classList.add("display-none"))})}async function M(){await W(b),m.Notify.success("You have successfully logged out!")}re();(()=>{window.addEventListener("scroll",function(){var t=document.getElementById("scroll-up");t&&(t.style.visibility=window.scrollY>1e3?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",e);function e(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

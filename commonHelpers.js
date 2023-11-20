import{g as M}from"./assets/support-b9664734.js";import{a as p,n as c,i as J,g as z,b as u,c as K,s as V,d as H,o as X}from"./assets/vendor-999fb217.js";p.defaults.baseURL="https://books-backend.p.goit.global/books/";async function Z(){return await p.get("category-list")}async function _(){return await p.get("top-books")}async function $(e){return await p.get(`category?category=${e}`)}async function ee(e){return await p.get(`${e}`)}document.addEventListener("DOMContentLoaded",async function(){const e=await Z(),{data:t}=e;te(t)});function te(e){const t=document.querySelector(".categories"),o=e.map(n=>{const{list_name:s}=n;return`
        <li><a class='categories_item' href='#' id='_${s}'>${s}</a></li>
        `}).join("");t.insertAdjacentHTML("beforeend",o),[...document.getElementsByClassName("categories_item")].forEach(n=>n.addEventListener("click",()=>{document.querySelector(".active_category").classList.remove("active_category"),n.classList.add("active_category")}))}const oe="data:image/png;base64,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",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QfBIQM2AAADk0lEQVR4Ae1WTUhUURT+zn3OjJFlhqVpggn506IfSgzKoHTTD0W1aBNBBK2DwKKgXYFSEW5KKFq0qlZBEREYQYT0Q+nGFmkSqSVKqFk6ztzTnefMm3vfG988Y9p55PruO/Pdc7/73XPPu8CizRn5/ch3IjVxEdtBoFUCCIP98bpJOwCiDB6yQtZbOhHtxUJI8L1IDUflfdXdhNxZPwmriU5ODyAbCe4I17LgLhAVIsfGjJgQoW10aqpb9+d5gERP1b9CJWXOTa04j+OzDxSZWqL0DEIHxW6Fj7BEJSc2VDX3M9Vn129246SPtX5GPFXHOyJ79XkNEsTWbqVCQg4VyPtM9d0Yu8mkT2r9efDEYr8+r7EdLLmKMuVq3jKg6gAoryChF3h8APjWqViTKXZ5I2hZFWBFwL+HgJF3wNSwJ5waVjYvCcEUsdmmaYHqz4M2nwEiy/XpgB/vIZ8dBya+AgXlEM23gbW7TMzMOPhNK7infW6PkqZ2pcCYV3+RcSGQklM1qjwEarhkEHCsZCuo+a7CMcTBRwYBxyKFoMYroKqj0OMKZjGvEp4TsbQCfkZl28GFdcDKOl8c8kvM2CYHF4k4mZUjyDEt2pgdY58WLdtcaWcmpp29mkMie52mUDbEXFyZLgzutZlKSBfNAEpwELUSGKnFJfYjIVyDA3yv/oWES1+vEqmzH7RsL5REpjJkvCWAegEKpERADGuLI/InwTbARoIkslsQTKqcJ81N21UnRDLTFrAlMmDe6GR9lfDUCe1lWpXg0T47AJVvMSdwxkfBY/3An3HQ6mpgSVGaqHE64EOCE3/mEeXBj5BPLqhL2gcVKDbnzF8B0XAaoqnFISE7r4O7boKnfzqzJMiKw+3e0+E6hAan6MXi50TU7DiWFturgpyFx1RgsecceOQzqKgC8tWNVCqlnzY7tQ/56pIWndTGcmfo8mhTRiWIadJQYnIsE1fHZOdVoHInuPuhYmQ55IwnlH/6lxFD8ZrR4xgk4pKGLW08wZubZMyhVtn30p4odZLYg/GKo7Lqix7T/KSyeMzaJ1e/Jek3Jx1jV1lp+t0Yx++M5xeZFpZiTrMtpb2qU4P/ZYSBcNv3dZhPCfsbStYxdSmNwVhtjlocEyHQPjcv4XaEWwe7wyGsV3T67Y3MVZPcwyQaqG241yuOj82cLd1A0qpXu7hGZXRYYAFGUm29mLUII3ELryPXhj5h0bLYX+5cykKmpHYZAAAAAElFTkSuQmCC",A=document.querySelector(".backdrop"),N=document.querySelector("body"),v=document.querySelector(".modal");let r="",k=0,x={},E="",h="",C="",m=JSON.parse(localStorage.getItem("books"))||[];async function ae(e,t){k=t;const{book_image:o,title:a,author:n,description:s,list_name:i,amazon_product_url:d,buy_links:O}=e;x={id:t,book_image:o,title:a,author:n,description:s,list_name:i,amazon_product_url:d,buy_links:O},re(o,a,n,s,d),se(),s?C.classList.remove("display-none"):C.classList.add("display-none")}function se(){r=document.querySelector(".modal-button-add"),E=document.querySelector(".modal-close-button"),h=document.querySelector(".congratulations-text"),C=document.querySelector(".modal-title-text"),S(),v.classList.add("active"),A.style.display="inline",r.addEventListener("click",P),document.addEventListener("keydown",U),E.addEventListener("click",F),A.addEventListener("click",D)}function w(){document.removeEventListener("keydown",U),E.removeEventListener("click",F),A.removeEventListener("click",D),r.removeEventListener("click",P),v.classList.remove("active"),A.style.display="none",N.classList.remove("modal-open")}function F(){return w()}function U(e){if(e.key==="Escape")return w()}function D(e){if(!v.contains(e.target))return w()}async function ie(e){const t=e.target.closest(".book");if(!t)return;const o=t.id;N.classList.add("modal-open");const a=await ee(o);ae(a.data,o)}function Y(e){const t=JSON.parse(localStorage.getItem("books"))||[];return t.length?t.some(o=>o.id==e):!1}function ce(){document.querySelector(".category-container").addEventListener("click",ie)}function P(){Y(k)?(m=m.filter(e=>e.id!==k),localStorage.setItem("books",JSON.stringify(m)),M(),S()):(m.push(x),localStorage.setItem("books",JSON.stringify(m)),M(),S())}function S(){Y(k)?(r.textContent="Remove from shopping list",r.classList.add("modal-button-remove"),h.classList.remove("display-none")):(r.textContent="Add to shopping list",h.classList.add("display-none"),r.classList.remove("modal-button-remove"))}function re(e,t,o,a,n,s){v.innerHTML=`
    <button class="modal-close-button">
      <svg  class="modal__cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
      </svg>
    </button>
      <div class="modal-ipad">
        <img src="${e}" class="modal-image">
        <div class="modal-ipad-overlay-text">
          <h2 class="modal__title">${t}</h2>
          <p class="modal-title-name">Author: ${o}</p>
          <p class="modal-title-text"> ${a} </p>
          <div class="book-links">
            <a href="${n}" class="modal-link-amazon amazon" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img src="${oe}" alt="">
            </a>
            <a href="${n}" class="modal-link book-shop" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
              <img src="${ne}" alt="">
            </a>
          </div>
        </div>
      </div>
    <button class="modal-button-add"></button>
    <p class="congratulations-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    `}function W(){try{switch(Math.floor(Math.random()*6)+1){case 1:c.Loading.standard();break;case 2:c.Loading.hourglass();break;case 3:c.Loading.circle();break;case 4:c.Loading.arrows();break;case 5:c.Loading.dots();break;case 6:c.Loading.pulse();break}}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",j);async function j(){W();const e=await _(),{data:t}=e;await le(t),ue(),ce()}function Q(e){return document.querySelector(".books-container"),e.map(o=>{const{_id:a,book_image:n,title:s,author:i}=o;return`
      <li class="book" id="${a}">
        <div class="book-picture">
          <img src="${n}" class="book-img" alt="${s}" />
        </div>
        <p class="book-title">${s}</p>
        <p class="book-author">${i}</p> 
      </li>
            `}).join("")}async function le(e){const t=document.querySelector(".category-container"),o=e.map(a=>{const n=a.books,s=Q(n),i=a.list_name;return`
       <div class="${i.replaceAll(" ","_")} book-card">
          <p class="category-description" id="category">
            ${i}
          </p>
          <ul class="books-container"> ${s} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${i}">SEE MORE</button>
          </div>
         </div> 
      `}).join("");t.insertAdjacentHTML("beforeend",o),de();try{c.Loading.remove(500)}catch(a){console.log(a)}}function de(){document.querySelectorAll(".btn-load-more").forEach(t=>{t.addEventListener("click",R)})}function ue(){document.querySelectorAll(".categories_item").forEach(t=>{t.addEventListener("click",R)})}async function R(e){W(),e.preventDefault();const t=document.querySelector(".category-container");t.innerHTML="";let o=e.target.id;o[0]==="_"&&(o=o.substring(1));let a=o.split(" "),n="",s="";a.length>1?(n=a.pop(),s=a.join(" ")):s=o;const i=document.querySelector(".category-title");e.target.innerHTML=="All Categories"?i.innerHTML="Best Sellers <span>Books</span>":i.innerHTML=`${s} <span>${n}</span>`;try{o===""?await j():await me(o)}catch(d){console.log(d)}try{c.Loading.remove(500)}catch(d){console.log(d)}}async function me(e){const t=document.querySelector(".category-container"),o=await $(e),n=`
      <ul class="books-container show-more"> ${Q(o.data)} </ul>
    `;t.insertAdjacentHTML("beforeend",n)}const ge=J({apiKey:"AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM",authDomain:"bookshelf-b1d96.firebaseapp.com",databaseURL:"https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b1d96",storageBucket:"bookshelf-b1d96.appspot.com",messagingSenderId:"179300012730",appId:"1:179300012730:web:aa4a508d0a2ffec4c3a883",measurementId:"G-4M8036172T"}),f=z(ge),g=document.querySelector("#name"),pe=document.querySelector(".sign-up-form"),l=document.querySelector(".sign-up-btn"),b=document.querySelector(".sign-in-btn"),ye=document.querySelector(".log-out-btn"),y=document.querySelector("#authorization"),Ae=document.querySelector(".modal-close-btn"),ke=document.querySelector(".sign-up-btn-text"),B=document.querySelector(".sign-up-btn-text"),L=document.querySelector(".sign-up-mobile"),I=document.querySelector(".mobile-nav"),q=document.querySelector(".mobile-logout-div"),T=document.querySelector(".user-block");Ae.addEventListener("click",fe);pe.addEventListener("submit",ve);b.addEventListener("click",Ee);ke.addEventListener("click",be);ye.addEventListener("click",G);L.addEventListener("click",Le);function fe(){y.classList.add("display-none")}g.hasAttribute("required")||g.setAttribute("required");l.textContent="SIGN UP";b.textContent="SIGN IN";L.classList.add("display-none");function be(e){if(e.preventDefault(),B.textContent==="Log out"){G();return}y.classList.remove("display-none")}function Le(e){e.preventDefault(),y.classList.remove("display-none")}async function ve(e){if(e.preventDefault(),l.textContent==="SIGN UP"){const t=e.target,o=t.elements.email.value,a=t.elements.password.value;if(a.length<6){u.Notify.failure("Password should be at least 6 characters!");return}K(f,o,a).then(n=>{const s=n.user;console.log(s),u.Notify.success("Your account has been created!"),t.reset()}).catch(n=>{console.log(n.code+n.message),u.Notify.failure("This email address is already in use on Bookshelf. Please sign in!"),t.reset()})}if(l.textContent==="SIGN IN"){const t=e.target,o=t.elements.email.value,a=t.elements.password.value;V(f,o,a).then(n=>{n.user,u.Notify.success("You have signed in successfully!"),y.classList.add("display-none"),t.reset()}).catch(n=>{console.log(n.code+n.message),u.Notify.failure("The email address or password is incorrect. Try again!"),t.reset()})}}async function Ee(e){if(e.preventDefault(),l.textContent==="SIGN IN"){g.classList.remove("display-none"),l.textContent="SIGN UP",b.textContent="SIGN IN";return}if(l.textContent==="SIGN UP"){g.removeAttribute("required"),g.classList.add("display-none"),l.textContent="SIGN IN",b.textContent="SIGN UP";return}}async function he(){X(f,e=>{e?(y.classList.add("display-none"),B.textContent="Log out",L.classList.add("display-none"),I.classList.remove("display-none"),q.classList.remove("display-none"),T.classList.remove("display-none")):(B.textContent="Sign up",L.classList.remove("display-none"),I.classList.add("display-none"),q.classList.add("display-none"),T.classList.add("display-none"))})}async function G(){await H(f),u.Notify.success("You have successfully logged out!")}he();(()=>{window.addEventListener("scroll",function(){var t=document.getElementById("scroll-up");t&&(t.style.visibility=window.scrollY>1e3?"visible":"hidden")}),document.querySelector("#scroll-up").addEventListener("click",e);function e(){window.scrollTo({top:0,behavior:"smooth"})}})();
//# sourceMappingURL=commonHelpers.js.map

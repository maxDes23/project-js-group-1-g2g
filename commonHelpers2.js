import"./assets/support-808fb746.js";import"./assets/vendor-8a3563eb.js";const n="storage-of-books",o=JSON.parse(localStorage.getItem(n))||[],i=document.querySelector(".shop_title_list"),b="./img/modal/amazon.png",u="./img/shopping/book.png",_="./img/icons.svg",f=document.querySelector(".blank-basket"),l=3;Math.ceil(o.length/l);let v=1,r=(v-1)*l,S=r+l,y=o.slice(r,S);function c(s){return s.map(({_id:t,title:e,author:a,description:d,list_name:g,book_image:h,amazon_product_url:k,buy_links:[m]})=>`
                <article class="shop_card">
                    <div class="card-img">
                        <img class="shop__card-img" src="${h}" alt="${e}" />
                    </div>

                    <div class="card-title">
                        <h3 class="shop__book-title">${e}</h3>
                        <p class="shop__book-category">${g}</p>
                    </div>

                    <div class="card-description">
                        <p class="shop__book-description">${d}</p>
                    </div>

                    <div class="card-author">
                        <p class="shop__book-author">${a}</p>
                    </div>

                    <div class="card-shoplist">
                        <ul class="shop__book-shoplist">
                            <li class="store">
                                <a href="${k}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
                                    <img class="modal-shop-img shopping-shopimg amazon" src="${b}" alt="Amazon link" alt="Amazon live page"/>
                                </a>
                            </li>
                            <li class="store">
                                <a href="${m.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                                    <img class="modal-shop-img shopping-shopimg book-shop" src="${u}" alt="BookShop link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button class="shop_card-btn" type="button" data-book-id="${t}" aria-label="Remove book from shopping list">
                        <svg class="trash-icon" data-book-id="${t}" width="17" height="17">
                            <use href="${_}#trash-icon"></use>
                        </svg>
                    </button>
                </article>
                `).join("")}function p(){o.length&&(f.classList.add("display-none"),i.insertAdjacentHTML("beforeend",c(y)))}p();i.addEventListener("click",s=>{if(s.target.closest(".shop_card-btn")){const t=s.target.getAttribute("data-book-id"),e=o.findIndex(a=>a._id===t);if(o.splice(e,1),localStorage.setItem(n,JSON.stringify(o)),o.length)sliceArrayBooks().length?(i.innerHTML=c(sliceArrayBooks()),console.log(sliceArrayBooks()),destroyChildElement(paginationPagesStart)):(previousButton.click(),destroyChildElement(paginationPagesStart));else{p();return}checkingArrayBooks()}});
//# sourceMappingURL=commonHelpers2.js.map

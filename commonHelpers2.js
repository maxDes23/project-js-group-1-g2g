import"./assets/support-3480c9e7.js";import"./assets/vendor-8a3563eb.js";const l="storage-of-books",o=JSON.parse(localStorage.getItem(l))||[],i=document.querySelector(".shop_title_list"),b="./img/modal/amazon.png",u="./img/shopping/book.png",_="./img/icons.svg",f=document.querySelector(".blank-basket"),n=3;Math.ceil(o.length/n);let v=1,r=(v-1)*n,y=r+n,S=o.slice(r,y);function c(s){return s.map(({_id:e,title:a,author:t,description:d,list_name:g,book_image:h,amazon_product_url:k,buy_links:[m]})=>`
                <article class="shop_card">
                    <div class="card-img">
                        <img class="shop__card-img" src="${h}" alt="${a}" />
                    </div>

                    <div class="card-title">
                        <h3 class="shop__book-title">${a}</h3>
                        <p class="shop__book-category">${g}</p>
                    </div>

                    <div class="card-description">
                        <p class="shop__book-description">${d}</p>
                    </div>

                    <div class="card-author">
                        <p class="shop__book-author">${t}</p>
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
                    <button class="shop_card-btn" type="button" data-book-id="${e}" aria-label="Remove book from shopping list">
                        <svg class="trash-icon" data-book-id="${e}" width="17" height="17">
                            <use href="${_}#trash-icon"></use>
                        </svg>
                    </button>
                </article>
                `).join("")}function p(){o.length&&(f.classList.add("display-none"),i.insertAdjacentHTML("beforeend",c(S)))}p();i.addEventListener("click",s=>{if(s.target.closest(".shop_card-btn")){const e=s.target.getAttribute("data-book-id"),a=o.findIndex(t=>t._id===e);if(o.splice(a,1),localStorage.setItem(l,JSON.stringify(o)),o.length)sliceArrayBooks().length?(i.innerHTML=c(sliceArrayBooks()),console.log(sliceArrayBooks()),destroyChildElement(paginationContainerPages)):(previousButton.click(),destroyChildElement(paginationContainerPages));else{p();return}checkingArrayBooks()}});
//# sourceMappingURL=commonHelpers2.js.map

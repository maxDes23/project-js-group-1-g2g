const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books';
const shoppingList = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

const divEl = document.querySelector('.shop_title_list');
const amazonIconPath = './img/modal/amazon.png';
const bookShopIconPath = './img/shopping/book.png';
const svgTrashIcon = './img/icons.svg';


const pageSize = 3;
let totalPages = Math.ceil(shoppingList.length / pageSize);
let currentPage = 1;
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = shoppingList.slice(startIndex, endIndex);

function renderMarkUp(itemsOnPage) {
    return itemsOnPage
        .map(
            ({
                _id,
                title,
                author,
                description,
                list_name,
                book_image,
                amazon_product_url,
                buy_links: [bookshop],
            }) => {
                return `
                <article class="shop_card">
                    <div class="card-img">
                        <img class="shop__card-img" src="${book_image}" alt="${title}" />
                    </div>

                    <div class="card-title">
                        <h3 class="shop__book-title">${title}</h3>
                        <p class="shop__book-category">${list_name}</p>
                    </div>

                    <div class="card-description">
                        <p class="shop__book-description">${description}</p>
                    </div>

                    <div class="card-author">
                        <p class="shop__book-author">${author}</p>
                    </div>

                    <div class="card-shoplist">
                        <ul class="shop__book-shoplist">
                            <li class="store">
                                <a href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
                                    <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" alt="Amazon live page"/>
                                </a>
                            </li>
                            <li class="store">
                                <a href="${bookshop.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                                    <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button class="shop_card-btn" type="button" data-book-id="${_id}" aria-label="Remove book from shopping list">
                        <svg class="trash-icon" data-book-id="${_id}" width="17" height="17">
                            <use href="${svgTrashIcon}#trash-icon"></use>
                        </svg>
                    </button>
                </article>
                `;
            }
        )
        .join('');
}

function isEmpty() {
    if (!shoppingList.length) {
        divEl.innerHTML = `
        <p class="no__info">This page is empty, add some books and proceed to order.</p>
        <img class="no__picture"
        src="./img/shopping/books-desk.png"
        alt="Shop is Empty"
        />`;
        return;
    }
    divEl.insertAdjacentHTML('beforeend', renderMarkUp(itemsOnPage));
}

isEmpty();

divEl.addEventListener('click', event => {
    if (event.target.closest('.shop_card-btn')) {
        const BookID = event.target.getAttribute('data-book-id');

        const bookIndex = shoppingList.findIndex(
            bookInStorage => bookInStorage._id === BookID
        );

        shoppingList.splice(bookIndex, 1);

        localStorage.setItem(
            SHOPPING_LIST_STORAGE_KEY,
            JSON.stringify(shoppingList)
        );

        if (!shoppingList.length) {
            isEmpty();
            return;
        } else if (!sliceArrayBooks().length) {
            previousButton.click();
            destroyChildElement(paginationContainerPages);
        } else {
            divEl.innerHTML = renderMarkUp(sliceArrayBooks());
            console.log(sliceArrayBooks());
            destroyChildElement(paginationContainerPages);
        }
        checkingArrayBooks();
    }
});


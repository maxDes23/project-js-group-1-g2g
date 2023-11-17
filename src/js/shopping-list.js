import icons from "../img/icons.svg"
import getRefs from './shop-refs.js';
import getShopIconsPaths from './shop-icons-path.js';

const SHOPPING_LIST_STORAGE_KEY = 'books';
let shoppingList = Array.from(new Set(JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || []));
const blankBasket = document.querySelector('.blank-basket')

const { divEl, 
    previousButton, 
    paginationPagesStart,  
  } = getRefs(); {

}
const {
    bookShopIconPath,
    amazonIconPath,
    // svgTrashIcon,
  } = getShopIconsPaths();

const pageSize = 6;
let currentPage = 1;
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = shoppingList.slice(startIndex, endIndex);

function renderMarkUp(storageArr) {
    return storageArr
        .map(
            ({
                _id,
                title,
                author,
                description,
                list_name,
                book_image,
                amazon_product_url,
                // buy_links,
            }) => {
                return `
                <article class="shop_card">
                    <div class="card-img">
                        <img class="shop__card-img" src="${book_image}" alt="${title}" />
                    </div>

                    <div class="card-title">
                        <h3 class="shop__book-title">${title}</h3>
                        <p class="shop__book-category"></p>
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
                                <a href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                                    <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button class="delete-btn" type="button" data-book-id="${_id}" aria-label="Remove book from shopping list">
                        <svg class="trash-icon" data-book-id="${_id}" width="18" height="18">
                            <use href="${icons}#trash-icon"></use>
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
        blankBasket.classList.remove('display-none');
    return;
    }
divEl.insertAdjacentHTML('beforeend', renderMarkUp(itemsOnPage));
}
isEmpty();

function sliceArrayBooks() {
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    itemsOnPage = shoppingList.slice(startIndex, endIndex);
    return itemsOnPage;
}

function destroyChildElement(parent) {
    if (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

divEl.addEventListener('click', event => {
    if (event.target.closest('.delete-btn')) {
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
            divEl.innerHTML = ``;
            return isEmpty();
        } else if (!sliceArrayBooks().length) {
            previousButton.click();
            destroyChildElement(paginationPagesStart);
        } else {
            divEl.innerHTML = renderMarkUp(sliceArrayBooks());
            console.log(sliceArrayBooks());
            destroyChildElement(paginationPagesStart);
        }

    }
});

// Add a function to check if the book is already in the shopping list
function isBookInShoppingList(bookId) {
    return shoppingList.some(book => book._id === bookId);
}

// Add an event listener to the document to listen for the 'add-to-cart' event
document.addEventListener('add-to-cart', event => {
    const book = event.detail.book;
    if (!isBookInShoppingList(book._id)) {
        shoppingList.push(book);
        localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(shoppingList));
    }
});



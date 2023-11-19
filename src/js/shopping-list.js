import icons from "../img/icons.svg"
import getRefs from './shop-refs.js';
import getShopIconsPaths from './shop-icons-path.js';
// import { storedBooksArray } from "./modal.js";


const SHOPPING_LIST_STORAGE_KEY = 'books';
let storedBooksArray = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || []
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
let itemsOnPage = storedBooksArray.slice(startIndex, endIndex);

function renderMarkUp(storageArr) {

    divEl.innerHTML = storageArr.map(
            ({
                id,
                title,
                author,
                description,
                list_name,
                book_image,
                amazon_product_url
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
                                <a href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                                    <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button class="delete-btn" type="button" data-book-id="${id}" aria-label="Remove book from shopping list">
                        <svg class="trash-icon" data-book-id="${id}" width="18" height="18">
                            <use class="t-ico" data-book-id="${id}" href="${icons}#trash-icon"></use>
                        </svg>
                    </button>
                </article>
                `;
            }
        )
        .join('');
}

function isEmpty() {
    if (!storedBooksArray.length) {
        divEl.innerHTML = ''
        return blankBasket.classList.remove('display-none');
    }
   return renderMarkUp(storedBooksArray)
}

isEmpty();

// function sliceArrayBooks() {
//     startIndex = (currentPage - 1) * pageSize;
//     endIndex = startIndex + pageSize;
//     itemsOnPage = storedBooksArray.slice(startIndex, endIndex);
//     return itemsOnPage;
// }

// function destroyChildElement(parent) {
//     if (parent) {
//         while (parent.firstChild) {
//             parent.removeChild(parent.firstChild);
//         }
//     }
// }

divEl.addEventListener('click', onDivElClick)

function onDivElClick(event) {
    
    if (event.target.closest('.delete-btn')
        || event.target.closest('.trash-icon')
        || event.target.closest('.t-ico') ) {
        storedBooksArray = storedBooksArray.filter(book => book.id != event.target.getAttribute('data-book-id'))
        localStorage.setItem('books', JSON.stringify(storedBooksArray));
    }
    isEmpty()
}


//         if (!storedBooksArray.length) {
//             divEl.innerHTML = ``;
//             return isEmpty();
//         } else if (!sliceArrayBooks().length) {
//             previousButton.click();
//             destroyChildElement(paginationPagesStart);
//         } else {
//             divEl.innerHTML = renderMarkUp(sliceArrayBooks());
//             destroyChildElement(paginationPagesStart);
//         }



// Add a function to check if the book is already in the shopping list
// function isBookInShoppingList(bookId) {
//     return storedBooksArray.some(book => book.id === bookId);
// }

// Add an event listener to the document to listen for the 'add-to-cart' event
// document.addEventListener('add-to-cart', event => {
//     const book = event.detail.book;
//     if (!isBookInShoppingList(book.id)) {
//         storedBooksArray.push(book);
//         localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(storedBooksArray));
//     }
// });



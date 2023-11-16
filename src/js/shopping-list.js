import icons from "../img/icons.svg"
import getRefs from './shop-refs.js';
import getShopIconsPaths from './shop-icons-path.js';

const SHOPPING_LIST_STORAGE_KEY = 'books';
const shoppingList = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
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

  /* const blankBasket = document.querySelector('.blank-basket') */


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
        checkingArrayBooks();
    }
});















// const arrBasketBooks = [ 
//     {
//     _id: "1",
//     title: "Book Title 1",
//     author: "Author 1",
//     description: "Description 1",
//     list_name: "List Name 1",
//     book_image: "book-image-url-1",
//     amazon_product_url: "amazon-product-url-1",
// },

// {
//     _id: "2",
//     title: "Book Title 2",
//     author: "Author 2",
//     description: "Description 2",
//     list_name: "List Name 2",
//     book_image: "book-image-url-2",
//     amazon_product_url: "amazon-product-url-2",
// },

// {
//     _id: "3",
//     title: "Book Title 3",
//     author: "Author 3",
//     description: "Description 3",
//     list_name: "List Name 3",
//     book_image: "book-image-url-3",
//     amazon_product_url: "amazon-product-url-3",
// },

// {
//     _id: "4",
//     title: "Book Title 4",
//     author: "Author 4",
//     description: "Description 4",
//     list_name: "List Name 4",
//     book_image: "book-image-url-4",
//     amazon_product_url: "amazon-product-url-4",
// },
// {
//     _id: "5",
//     title: "Book Title 5",
//     author: "Author 5",
//     description: "Description 5",
//     list_name: "List Name 5",
//     book_image: "book-image-url-5",
//     amazon_product_url: "amazon-product-url-5",
// }
// ];
// renderMarkUp(arrBasketBooks)

//  _id,
//                 title,
//                 author,
//                 description,
//                 list_name,
//                 book_image,
//                 amazon_product_url,
//     buy_links: [bookshop],
                    
//         {
//   "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",
//   "title": "THE LOVE STORIES OF THE BIBLE SPEAK",
//   "author": "Shannon Bream",
//   "list_name": "Advice How-To and Miscellaneous",
//   "amazon_product_url": "https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20",
//   "buy_links": [
//     {
//       "name": "Amazon",
//       "url": "https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"
//     }
//   ]
// }
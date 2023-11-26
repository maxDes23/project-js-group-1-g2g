
import icons from "/img/icons.svg"
import getRefs from './shop-refs.js';
import getShopIconsPaths from './shop-icons-path.js';


const SHOPPING_LIST_STORAGE_KEY = 'books';
let storedBooksArray = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || []
const blankBasket = document.querySelector('.blank-basket')

// Getting references to DOM elements
const { divEl } = getRefs();

// Getting paths for shop icons
const { bookShopIconPath, amazonIconPath } = getShopIconsPaths();

// Pagination variables
const pageSize = 3;
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = storedBooksArray.slice(startIndex, endIndex);

// Function to render the markup for the shopping list
function renderMarkUp(storageArr) {
    divEl.innerHTML = storageArr
        .map(
            ({
                id,
                title,
                author,
                description,
                list_name,
                book_image,
                amazon_product_url,
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
                                        <img class="amazon" src="${amazonIconPath}" alt="Amazon link" alt="Amazon live page"/>
                                    </a>
                                </li>
                                <li class="store">
                                    <a href="https://www.bookshop.org" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                                        <img class="book-shop" src="${bookShopIconPath}" alt="BookShop link" />
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

// Function to check if the shopping list is empty
function isEmpty() {
    if (!storedBooksArray.length) {
        divEl.innerHTML = '';
        blankBasket.classList.remove('display-none');
    } else {
        blankBasket.classList.add('display-none');
        updateItemsOnPage();
    }
}

// Initial check for empty shopping list
isEmpty();

// Event handler for click events on the shopping list
function onDivElClick(event) {
    if (
        event.target.closest('.delete-btn') ||
        event.target.closest('.trash-icon') ||
        event.target.closest('.t-ico')
    ) {
        // Remove the book from the shopping list
        storedBooksArray = storedBooksArray.filter(
            (book) => book.id != event.target.getAttribute('data-book-id')
        );
        // Update the local storage
        localStorage.setItem('books', JSON.stringify(storedBooksArray));
        // Check if the shopping list is empty
        isEmpty();
        // Check if the current page is greater than the total pages
        const totalPages = Math.ceil(storedBooksArray.length / pageSize);
        if (currentPage > totalPages) {
            currentPage = totalPages;
            localStorage.setItem('currentPage', currentPage);
        }

        updateItemsOnPage();

        updatePagination();
    }
}

// Add event listener to the shopping list container
divEl.addEventListener('click', onDivElClick);

// Function to update the items displayed on the current page
function updateItemsOnPage() {
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    itemsOnPage = storedBooksArray.slice(startIndex, endIndex);
    renderMarkUp(itemsOnPage);
}

// P A G I N A T I O N

const startButton = document.querySelector('[name="startButton"]');
const previousButton = document.querySelector('[name="previousButton"]');
const nextButton = document.querySelector('[name="nextButton"]');
const endButton = document.querySelector('[name="endButton"]');
const paginationPagesStart = document.querySelector('.pagination_pages_start');
const paginationArrow = document.querySelector('.pagination_arrow');

// Function to jump to the last page
function jumpToLastPage() {
    currentPage = Math.ceil(storedBooksArray.length / pageSize);
    updateItemsOnPage();
    updatePagination();
}

// Function to jump to the first page
function jumpToFirstPage() {
    currentPage = 1;
    updateItemsOnPage();
    updatePagination();
}

// Function to go to the previous page
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateItemsOnPage();
        updatePagination();
    }
}

// Function to go to the next page
function goToNextPage() {
    const totalPages = Math.ceil(storedBooksArray.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        updateItemsOnPage();
        updatePagination();
    }
}

function updatePagination() {
    const totalPages = Math.ceil(storedBooksArray.length / pageSize);
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="pagination-button" data-page="${i}">${i}</button>`;
    }

    paginationPagesStart.innerHTML = paginationHTML;

    const paginationButtons = document.querySelectorAll('.pagination-button');
    paginationButtons.forEach((button) => {
        button.addEventListener('click', function () {
            currentPage = parseInt(this.dataset.page);
            updateItemsOnPage();
            updatePagination();
        });

        // Add class 'active' to the current page button
        if (button.dataset.page == currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    if (storedBooksArray.length > pageSize) {
        paginationArrow.style.display = 'flex';
    } else {
        paginationArrow.style.display = 'none';
    }
}

// Add event listeners to the pagination buttons
startButton.addEventListener('click', jumpToFirstPage);
previousButton.addEventListener('click', goToPreviousPage);
nextButton.addEventListener('click', goToNextPage);
endButton.addEventListener('click', jumpToLastPage);

updatePagination();

// Save the current page to localStorage before the page is unloaded
window.addEventListener('beforeunload', function () {
    localStorage.setItem('currentPage', currentPage);
});



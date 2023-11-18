import { getBookById } from './book-api';
import amazon from "../img/modal/amazon.png"
import book from "../img/modal/book.png"
import { getSelectedBooksQty } from './header';


const backdrop = document.querySelector('.backdrop')
const bodyEl = document.querySelector('body')
const modal = document.querySelector('.modal');
let buttonAdd = '';
let bookId = 0;
let bookObj = {};
let closeButton = ''

let storedBooksArray = JSON.parse(localStorage.getItem('books')) || [];

async function showBookInfo(bookInfo, id) {
  bookId = id;
  const {
    book_image,
    title, author,
    description,
    list_name,
    amazon_product_url,
    buy_links } = bookInfo;
  
  ////// renew global book object, for placing it in local storage ///////
  bookObj = {
    id,
    book_image,
    title,
    author,
    description,
    list_name,
    amazon_product_url,
    buy_links
  }
    
    /////// Make modal markup /////////
  addModalMarkup(book_image, title, author, description, amazon_product_url, buy_links);
  //// activate modal add listeners renew global vars ///////
  makeModalActive();
  //// Add button <=? SWITCHER ?=> Remove button 
  buttonSwitcher()    
}



function makeModalActive() {
  ///// Activating modal and backdrop /////////
  modal.classList.add('active');
  backdrop.style.display = 'inline'


  ///// renew global button variables with corresponding data //////
  buttonAdd = document.querySelector('.modal-button-add');
  closeButton = document.querySelector('.modal-close-button');

  /////// Adding Event Listeners ////////////
  buttonAdd.addEventListener('click', onAddButtonClick)
  document.addEventListener('keydown', onEscPressed)
  closeButton.addEventListener('click', onCloseClick)
  backdrop.addEventListener('click', onBackdropClick)

}



/////// Closing modal and remove event listeners function ///////////////
function modalCloseFunc() {
  document.removeEventListener('keydown', onEscPressed)
  closeButton.removeEventListener('click', onCloseClick)
  backdrop.removeEventListener('click', onBackdropClick)
  buttonAdd.removeEventListener('click', onAddButtonClick)

  modal.classList.remove('active');
  backdrop.style.display = 'none';
  bodyEl.classList.remove('modal-open');
}

function onCloseClick() {
  return modalCloseFunc()
}

function onEscPressed(event) {
  if (event.key !== 'Escape') {
    return
  }
  return modalCloseFunc()
}

function onBackdropClick(event) {
  if (!modal.contains(event.target)) {
    return modalCloseFunc()
  }
}

async function onBookClick(event) {
  const clickedBook = event.target.closest('.book');
  if (!clickedBook) {
    return;
  }
  const bookId = clickedBook.id;
  bodyEl.classList.add('modal-open');
  const bookData = await getBookById(bookId);
  showBookInfo(bookData.data, bookId);
}

function isBookAvailable(checkId) {
  const books = JSON.parse(localStorage.getItem('books')) || [];

  if (!books.length) {
    return false
  }
  return books.some(book => book.id == checkId);
}


function connectModal() {
  const modalGallery = document.querySelector('.category-container');
  modalGallery.addEventListener('click', onBookClick);
}

function onAddButtonClick() {

  if (!isBookAvailable(bookId)) {
    storedBooksArray.push(bookObj);
    localStorage.setItem('books', JSON.stringify(storedBooksArray));
    getSelectedBooksQty();
    buttonSwitcher()
  } else {
    storedBooksArray = storedBooksArray.filter(book => book.id !== bookId)
    localStorage.setItem('books', JSON.stringify(storedBooksArray));
    getSelectedBooksQty();
    buttonSwitcher()
  }
}


function buttonSwitcher() {
    if (isBookAvailable(bookId)) {
      buttonAdd.textContent = 'Remove from shopping list';
    }else {
      buttonAdd.textContent = 'Add to shopping list';
    }
  }

function addModalMarkup(book_image, title, author, description, amazon_product_url, buy_links) {
  modal.innerHTML = `
    <button class="modal-close-button">
      <svg  class="modal__cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
      </svg>
    </button>
      <div class="modal-ipad">
        <img src="${book_image}" class="modal-image">
        <div class="modal-ipad-overlay-text">
          <h2 class="modal__title">${title}</h2>
          <p class="modal-title-name">Author: ${author}</p>
          <p class="modal-title-text"> ${description} </p>
          <div class="book-links">
            <a href="${amazon_product_url}" class="modal-link-amazon amazon" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img src="${amazon}" alt="">
            </a>
            <a href="${buy_links.url}" class="modal-link book-shop" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
              <img src="${book}" alt="">
            </a>
          </div>
        </div>
      </div>
    <button class="modal-button-add"></button>`
}


export { showBookInfo, connectModal, storedBooksArray }


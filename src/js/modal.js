import { getBookById } from './book-api';
import { booksQtyElement, getSelectedBooksQty } from './header';
const backdrop = document.querySelector('.backdrop')
const bodyEl = document.querySelector('body')
// const modalTheme = document.querySelector('.theme-light')


async function showBookInfo(bookInfo) {
  try {
    const { book_image, title, author, description, amazon_product_url, buy_links: [bookshop] } =
      bookInfo;
    const modal = document.querySelector('.modal');
    backdrop.style.display = 'inline'
    modal.innerHTML = '';

    // разметка
    const elements = [
      `<button class="modal-close-button"><svg
    class="modal__cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
    />
  </svg></button>`,
      `<div class="modal-ipad">`,
      `<img src="${book_image}" class="modal-image">`,
      
      `<div class="modal-ipad-overlay-text">`,
      `<h2 class="modal__title">${title}</h2>`,
      `<p class="modal-title-name">Author: ${author}</p>`,
      `<p class="modal-title-text"> ${description} </p>`,
      
        
      `<div class="book-links">
        <a href="${amazon_product_url}" class="modal-link-amazon">
          <img src="../img/modal/amazon.png" alt="">
        </a>
        <a href="${bookshop}" class="modal-link">
          <img src="../img/modal/book.png" alt="">
        </a>
        </div>`,
      `</div>`,
      `</div>`,
      `<button class="modal-button-add">Add to shopping list</button>`,
    ];
    modal.innerHTML = elements.join('');
    
    const buttonAdd = document.querySelector('.modal-button-add');
    buttonAdd.setAttribute('id', '1')
    
    // кнопка добавить в корзину
buttonAdd.addEventListener('click', () => {
  const bookObj = {
    book_image,
    title,
    author,
    description,
    amazon_product_url,
    buy_links: [bookshop]
  };
  
  if (buttonAdd.getAttribute('id') === '1') {
    // Добавить книгу в localStorage
    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    existingBooks.push(bookObj);
    localStorage.setItem('books', JSON.stringify(existingBooks));

    // Обновить кнопку
    buttonAdd.setAttribute('id', '2');
    buttonAdd.textContent = 'Remove from shopping list';
    getSelectedBooksQty();
  } else if (buttonAdd.getAttribute('id') === '2') {

    // Удаляем книгу из localStorage
      const clickedBookId = bookObj.title; 
      const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
      const updatedBooks = existingBooks.filter(existingBook => {
      const bookId = existingBook.title; 
        
      return bookId !== clickedBookId;

    });
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    // Обновить кнопку
    buttonAdd.setAttribute('id', '1');
    getSelectedBooksQty();
    buttonAdd.textContent = 'Add to shopping list';
  }
});
    
    document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      backdrop.style.display = 'none';
      bodyEl.classList.remove('modal-open');
    }
  }
});

backdrop.addEventListener('click', (event) => {
  const modal = document.querySelector('.modal');
  if (!modal.contains(event.target)) {
    modal.classList.remove('active');
    backdrop.style.display = 'none';
    bodyEl.classList.remove('modal-open');
  }
});
    
    // close button
    const closeButton = document.querySelector('.modal-close-button');
    closeButton.addEventListener('click', () => {

      modal.classList.remove('active');
      backdrop.style.display = 'none'
      bodyEl.classList.remove('modal-open')
    });

    modal.classList.add('active');

  } catch (error) {
    console.log(error);
  }
}

function connectModal() {
  const modalGallery = document.querySelector('.category-container');
  modalGallery.addEventListener('click', onBookClick);
}

async function onBookClick(event) {
  const clickedBook = event.target.closest('.book');
  if (!clickedBook) {
    return;
  }
  const bookId = clickedBook.id;
  bodyEl.classList.add('modal-open');
  const bookData = await getBookById(bookId);
  showBookInfo(bookData.data);
}


export { showBookInfo, connectModal };
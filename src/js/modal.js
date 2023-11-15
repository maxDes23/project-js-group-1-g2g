import { serviceSelectedBook } from './book-api';

// Функция при клике

async function showBookInfo(bookInfo) {
  try {
    const { book_image, title, author, list_name, amazon_product_url } =
      bookInfo;

    //   console.log('book Image: ', book_image,);
    //   console.log('book title: ', title,);
    //   console.log('book author: ', author,);
    //   console.log('list Name: ', list_name,);
    //   console.log('Amazon Url: ', amazon_product_url,);

    const modal = document.querySelector('.modal');
    //   console.log('modal Constant', modal);

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
      `<img src="${book_image}" class="modal-image">`,
      `<h2 class="modal__title">${title}</h2>`,
      `<p class="modal-title-name">Author: ${author}</p>`,
      `<p class="modal-title-text">List Name: ${list_name}</p>`,
      `<a href="${amazon_product_url}" class="modal-link">Amazon Link</a>`,
      `<button class="modal-button-add">Add to shopping list</button>`,
    ];

    // Append elements to the modal
    modal.innerHTML = elements.join('');

    // Add event listener to the close button
    const closeButton = document.querySelector('.modal-close-button');
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.classList.add('active');
  } catch (error) {
    console.log(error);
  }
}

function connectModal() {
  const modalGallery = document.querySelector('.category-container');
  //  console.log(modalGallery);
  modalGallery.addEventListener('click', onBookClick);
}

async function onBookClick(event) {
  const clickedBook = event.target.closest('.book');
  if (!clickedBook) {
    return;
  }
  const bookId = clickedBook.id;
  // console.log(clickedBook.id);

  const bookData = await serviceSelectedBook(bookId);
  // console.log(bookData.data);
  showBookInfo(bookData.data);
}

export { showBookInfo, connectModal };

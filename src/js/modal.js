// // // ******************* MODAL WINDOW ************************ //

// !function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;){ if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

// document.addEventListener('DOMContentLoaded', function() {
    
//    let modalButtons = document.querySelectorAll('.js-open-modal'),
//        overlay      = document.querySelector('.js-overlay-modal'),
//        closeButtons = document.querySelectorAll('.js-modal-close');

//    modalButtons.forEach(function(item){

//       item.addEventListener('click', function(e) {
//          e.preventDefault();

//          /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//             и будем искать модальное окно с таким же атрибутом. */
//          let modalId = this.getAttribute('data-modal'),
//              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

//          /* После того как нашли нужное модальное окно, добавим классы
//             подложке и окну чтобы показать их. */

//          modalElem.classList.add('active');
//          overlay.classList.add('active');
//       }); // end click

//    }); // end foreach

//    closeButtons.forEach(function(item){

//       item.addEventListener('click', function(e) {
//          let parentModal = this.closest('.modal');

//          parentModal.classList.remove('active');
//          overlay.classList.remove('active');
//       });

//    }); // end foreach

//     document.body.addEventListener('keyup', function (e) {
//         let key = e.keyCode;

//         if (key == 27) {

//             document.querySelector('.modal.active').classList.remove('active');
//             document.querySelector('.overlay').classList.remove('active');
//         };
//     }, false);

//     overlay.addEventListener('click', function() {
//         document.querySelector('.modal.active').classList.remove('active');
//         this.classList.remove('active');
//     });
// }); // end read

import { getBooks } from './gallery.js';
const modalGallery = document.querySelector('.books-container');
modalGallery.addEventListener('click', async function (event) {
  try {
    const clickedBook = event.target.closest('.book');
    if (!clickedBook) {
      return; 
    }
    const books = await getBooks();
    const bookId = clickedBook.id;
    // Находим книгу по id
    const clickedBookInfo = books.find(book => book._id === bookId);
    // инфо о книге
    showBookInfo(clickedBookInfo);
  } catch (error) {
    console.log(error);
  }
});

// Функция при клике

async function showBookInfo(bookInfo) {
   try {
      const {
          book_image,
          title,
          author,
          list_name,
          amazon_product_url,
      } = bookInfo;

      const modal = document.querySelector('.modal');

      modal.innerHTML = '';

      // разметка
      
const elements = [
         `<button class="modal-close-button">Close</button>`,
         `<img src="${book_image}" class="modal-image">`,
         `<h2 class="modal__title">${title}</h2>`,
         `<p class="modal-title-name">Author: ${author}</p>`,
         `<p class="modal-title-text">List Name: ${list_name}</p>`,
         `<a href="${amazon_product_url}" class="modal-link">Amazon Link</a>`,
         `<button class="modal-button-add">ADD</button>`
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








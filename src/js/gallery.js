import axios from 'axios';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

// import { serviceSelectedCategory } from './book-api';

// ПОКИ ТИМЧАСОВО СОБІ ДОБАВИВ ФУНКЦІЇ АПІ

// Популярні книги, що належать до усіх категорій:
async function serviceTopBooks() {
  return await axios.get('top-books');
}

console.log(serviceTopBooks());

// ------------КОД ДЛЯ ВІДМАЛЬОВКИ СТОРІНКИ ХОУМ

document.addEventListener('DOMContentLoaded', async function () {
  const getData = await serviceTopBooks();
  const { data } = getData;
  renderGallery(data[0].books);
});

function renderGallery(books) {
  const gallery = document.querySelector('.books-container');
  console.log(books);
  const markup = books
    .map(book => {
      const { _id, book_image, title, author } = book;
      return `
        <div class="book" id="${_id}">
          <img src="${book_image}" class="book-img" alt="test" />
          <p class="book-title">${title}</p>
          <p class="book-author">${author}</p>
        </div>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

// BTN SEE MORE
// Функцію АПІ потрібно буде звідси прибрати та імпортувати
async function serviceSelectedCategory(selectedCategory) {
  return await axios.get(`category?category=${selectedCategory}`);
}

// поки захаркодив щоб можна було вімалювати

const loadMoreBtn = document.querySelector('.btn-load-more');

loadMoreBtn.addEventListener('click', onLoadMoreBtn);

async function onLoadMoreBtn() {
  try {
    document.querySelector('.books-container').classList.toggle('show-more');
    let selectedCategory = 'Combined Print and E-Book Fiction';
    const category = await serviceSelectedCategory(selectedCategory);
    console.log(category);
    renderGallery(category.data);
  } catch (error) {
    console.log(error);
  }
}

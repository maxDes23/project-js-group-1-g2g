import axios from 'axios';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

// import { serviceSelectedCategory } from './book-api';

// ПОКИ ТИМЧАСОВО СОБІ ДОБАВИВ ФУНКЦІЇ АПІ

// Популярні книги, що належать до усіх категорій:
async function serviceTopBooks() {
  return await axios.get('top-books');
}

// ------------КОД ДЛЯ РЕНДЕРА СТОРІНКИ ХОУМ

document.addEventListener('DOMContentLoaded', async function () {
  const getDataTopBooks = await serviceTopBooks();
  const { data } = getDataTopBooks;

  renderСategoryList(data);
});

//Рендеринг картки КНИГИ

function renderGallery(books) {
  const gallery = document.querySelector('.books-container');
  const markup = books
    .map(book => {
      const { _id, book_image, title, author } = book;
      return `
      <div class="category-container">
        <div class="book" id="${_id}">
          <img src="${book_image}" class="book-img" alt="test" />
          <p class="book-title">${title}</p>
          <p class="book-author">${author}</p>
        </div>
      </div>
            `;
    })
    .join('');
  return markup;
}

//Рендеринг КАТЕГОРІЇ
async function renderСategoryList(categories) {
  const categoryList = document.querySelector('.category-container');
  const markup = categories
    .map(category => {
      const books = category.books;
      const topBook = renderGallery(books);
      const nameCategory = category.list_name;
      return `
       <div id="${nameCategory}">
          <p class="category-descriotion" id="category">
            ${nameCategory}
          </p>
          <div class="books-container"> ${topBook} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button">SEE MORE</button>
          </div>
         </div> 
      `;
    })
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
}

// BTN SEE MORE
// Функцію АПІ потрібно буде звідси прибрати та імпортувати
// async function serviceSelectedCategory(selectedCategory) {
//   return await axios.get(`category?category=${selectedCategory}`);
// }

// // поки захаркодив щоб можна було вімалювати

// const loadMoreBtn = document.querySelector('.btn-load-more');

// loadMoreBtn.addEventListener('click', onLoadMoreBtn);

// async function onLoadMoreBtn() {
//   try {
//     document.querySelector('.books-container').classList.toggle('show-more');
//     let selectedCategory = 'Combined Print and E-Book Fiction';
//     const category = await serviceSelectedCategory(selectedCategory);
//     console.log(category);
//     renderGallery(category.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Функцію АПІ потрібно буде звідси прибрати та імпортувати
// ТИМЧАСОВА Реалізація коду по розмітці де буде відмальовуватись всі категорії
async function serviceAllCategory() {
  return await axios.get('category-list');
}

document.addEventListener('DOMContentLoaded', async function () {
  const getData = await serviceAllCategory();
  const { data } = getData;

  console.log(data);

  const list = data.map(item => item.list_name);
  console.log(list);
  console.log(data[0]);
  console.log(data[0].list_name);
  renderCategory(data);
});

function renderCategory(items) {
  const category = document.querySelector('.category-list');

  const markup = items
    .map(item => {
      const { list_name } = item;
      return `
        <li class="category-item">${list_name}</li>
      `;
    })
    .join('');
  category.insertAdjacentHTML('beforeend', markup);
}

//Функція по кліку на категоріям яка буде вібирати назву категорії

const categoryName = document.querySelector('.category-list');

categoryName.addEventListener('click', getCategoryName);

async function getCategoryName(e) {
  if (e.target.classList.contains('category-item')) {
    const selectCategory = e.target.innerText;
    console.log(selectCategory);

    try {
      const category = await serviceSelectedCategory(selectCategory);
      console.log(category);
      // renderСategoryList(category.data);
    } catch (error) {
      console.log(error);
    }
  }
}

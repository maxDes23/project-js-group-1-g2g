import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getBooksByCategory } from './book-api';
import { getTopBooks } from './book-api';
import { connectModal } from './modal';

function getRandomLoader() {
  try {
    switch (Math.floor(Math.random() * 6) + 1) {
      case 1:
        Loading.standard();
        break;
      case 2:
        Loading.hourglass();
        break;
      case 3:
        Loading.circle();
        break;
      case 4:
        Loading.arrows();
        break;
      case 5:
        Loading.dots();
        break;
      case 6:
        Loading.pulse();
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

//Homepage render
document.addEventListener('DOMContentLoaded', renderHomePage);

async function renderHomePage() {
  getRandomLoader();
  const getDataTopBooks = await getTopBooks();
  const { data } = getDataTopBooks;
  await renderCategoryList(data);
  getCategory();
  connectModal();
}

//Book card render
function renderGallery(books) {
  const gallery = document.querySelector('.books-container');
  const markup = books
    .map(book => {
      const { _id, book_image, title, author } = book;
      return `
      <li class="book" id="${_id}">
        <div class="book-picture">
          <img src="${book_image}" class="book-img" alt="${title}" />
        </div>
        <p class="book-title">${title}</p>
        <p class="book-author">${author}</p> 
      </li>
            `;
    })
    .join('');
  return markup;
}

//Category render
async function renderCategoryList(categories) {
  const categoryList = document.querySelector('.category-container');
  const markup = categories
    .map(category => {
      const books = category.books;
      const topBook = renderGallery(books);
      const nameCategory = category.list_name;
      return `
       <div class="${nameCategory.replaceAll(' ', '_')} book-card">
          <p class="category-description" id="category">
            ${nameCategory}
          </p>
          <ul class="books-container"> ${topBook} </ul>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${nameCategory}">SEE MORE</button>
          </div>
         </div> 
      `;
    })
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
  getCategoryOnLoadMore();
  try {
    Loading.remove(500);
  } catch (error) {
    console.log(error);
  }
}

// BTN SEE MORE
function getCategoryOnLoadMore() {
  const loadMoreButtons = document.querySelectorAll('.btn-load-more');

  loadMoreButtons.forEach(loadMoreBtn => {
    loadMoreBtn.addEventListener('click', onClickCategory);
  });
}

//Choose category by click
function getCategory() {
  const categoriesName = document.querySelectorAll('.categories_item');

  categoriesName.forEach(categoryName => {
    categoryName.addEventListener('click', onClickCategory);
  });
}

async function onClickCategory(event) {
  getRandomLoader();
  event.preventDefault();
  const removeBooks = document.querySelector('.category-container');
  removeBooks.innerHTML = '';

  let categoryId = event.target.id;
  if (categoryId[0] === '_') {
    categoryId = categoryId.substring(1);
  }

  let arrString = categoryId.split(' ');
  let lastWord = '';
  let headString = '';

  if (arrString.length > 1) {
    lastWord = arrString.pop();
    headString = arrString.join(' ');
  } else headString = categoryId;

  const newNameCategory = document.querySelector('.category-title');
  event.target.innerHTML == 'All Categories'
    ? (newNameCategory.innerHTML = 'Best Sellers <span>Books</span>')
    : (newNameCategory.innerHTML = `${headString} <span>${lastWord}</span>`);

  try {
    if (categoryId === '') {
      await renderHomePage();
    } else {
      await renderCategory(categoryId);
    }
  } catch (error) {
    console.log(error);
  }
  try {
    Loading.remove(500);
  } catch (error) {
    console.log(error);
  }
}

async function renderCategory(nameSelectedCategory) {
  const categoryItem = document.querySelector('.category-container');
  const category = await getBooksByCategory(nameSelectedCategory);
  const renderGalleryAfterBtnClick = renderGallery(category.data);
  const categoryMarkup = `
      <ul class="books-container show-more"> ${renderGalleryAfterBtnClick} </ul>
    `;
  categoryItem.insertAdjacentHTML('beforeend', categoryMarkup);
}

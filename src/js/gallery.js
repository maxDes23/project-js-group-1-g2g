import { serviceSelectedCategory } from './book-api';
import { serviceTopBooks } from './book-api';

// ------------КОД ДЛЯ РЕНДЕРА СТОРІНКИ ХОУМ

document.addEventListener('DOMContentLoaded', async function () {
  const getDataTopBooks = await serviceTopBooks();
  const { data } = getDataTopBooks;

  renderСategoryList(data);
  getCategory();
});

//Рендеринг картки КНИГИ

function renderGallery(books) {
  const gallery = document.querySelector('.books-container');
  const markup = books
    .map(book => {
      const { _id, book_image, title, author } = book;
      return `
      <div class="book" id="${_id}">
        <div class="book-picture">
          <img src="${book_image}" class="book-img" alt="${title}" />
        </div>
        <p class="book-title">${title}</p>
        <p class="book-author">${author}</p>
        
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
       <div class="${nameCategory.replaceAll(' ', '_')} book-card">
          <p class="category-description" id="category">
            ${nameCategory}
          </p>
          <div class="books-container"> ${topBook} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${nameCategory}">SEE MORE</button>
          </div>
         </div> 
      `;
    })
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
  getCategoryOnLoadMore();
}

// BTN SEE MORE

function getCategoryOnLoadMore() {
  const loadMoreButtons = document.querySelectorAll('.btn-load-more');

  loadMoreButtons.forEach(loadMoreBtn => {
    loadMoreBtn.addEventListener('click', onLoadMoreBtn);
  });
}

async function onLoadMoreBtn(event) {
  try {
    document.querySelector('.books-container').classList.toggle('show-more');

    const categoryOriginalName = event.target.id;
    const selectedCategory = event.target.id.replaceAll(' ', '_');

    const categoryContainer = document.querySelector(`.${selectedCategory}`);

    const category = await serviceSelectedCategory(categoryOriginalName);
    const renderGalleryAfterBtnClick = renderGallery(category.data);

    const newCategory = `
       <p class="category-descriotion" id="category">
            ${categoryOriginalName}
          </p>
          <div class="books-container show-more"> ${renderGalleryAfterBtnClick} </div>
          <div class="button-wrapper">
            <button class="btn-load-more" type="button" id="${categoryOriginalName}">SEE MORE</button>
          </div>
      `;

    categoryContainer.innerHTML = newCategory;
  } catch (error) {
    console.log(error);
  }
}

//Функція по кліку на категоріям яка буде вібирати назву категорії

function getCategory() {
  const categoryiesName = document.querySelectorAll('.categories_item');

  categoryiesName.forEach(categoryName => {
    categoryName.addEventListener('click', onClickCategory);
  });
}

async function onClickCategory(event) {
  const removeBooks = document.querySelector('.category-container');
  console.log(removeBooks);
  removeBooks.innerHTML = '';

  if (event.target.classList.contains('categories_item')) {
    const selectCategory = event.target.innerText;
    const categoryId = event.target.id;
    const newNameCategory = document.querySelector('.category-title');
    newNameCategory.textContent = selectCategory;

    await renderСategory(categoryId);
  }
}

async function renderСategory(nameSelectedCategory) {
  const categoryItem = document.querySelector('.category-container');
  const category = await serviceSelectedCategory(nameSelectedCategory);
  const renderGalleryAfterBtnClick = renderGallery(category.data);
  const categoryMarkup = `
      <div class="books-container show-more"> ${renderGalleryAfterBtnClick} </div>
    `;
  categoryItem.insertAdjacentHTML('beforeend', categoryMarkup);
}

// Рендеринг ОДНІЄЇ КАТЕГОРІЇ при натискані на категорію

//Код для Юри
export function getBooks() {
  return serviceTopBooks().then(response => response.data[0].books);
}

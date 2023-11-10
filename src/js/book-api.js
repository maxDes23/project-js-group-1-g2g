import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

const settings = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Перелік категорій книг:
async function serviceAllCategory() {
  return await axios.get('category-list', settings);
}

// Популярні книги, що належать до усіх категорій:
async function serviceTopBooks() {
  return await axios.get('top-books', settings);
}

// Книги окремої категорії:
async function serviceSelectedCategory(selectedCategory) {
  return await axios.get(`category?category=${selectedCategory}`, settings);
}

// Детальна інформація про книгу:
async function serviceSelectedBook(bookId) {
  return await axios.get(`_id=${bookId}`, settings);
}

export {
  serviceAllCategory,
  serviceTopBooks,
  serviceSelectedCategory,
  serviceSelectedBook,
};

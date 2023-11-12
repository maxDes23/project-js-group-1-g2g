import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

// Перелік категорій книг:
async function serviceAllCategory() {
  return await axios.get('category-list');
}

// Популярні книги, що належать до усіх категорій:
async function serviceTopBooks() {
  return await axios.get('top-books');
}

// Книги окремої категорії:
async function serviceSelectedCategory(selectedCategory) {
  return await axios.get(`category?category=${selectedCategory}`);
}

// Детальна інформація про книгу:
async function serviceSelectedBook(bookId) {
  return await axios.get(`${bookId}`);
}

export {
  serviceAllCategory,
  serviceTopBooks,
  serviceSelectedCategory,
  serviceSelectedBook,
};

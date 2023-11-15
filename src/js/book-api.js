import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

// Перелік категорій книг:
async function getAllCategory() {
  return await axios.get('category-list');
}

// Популярні книги, що належать до усіх категорій:
async function getTopBooks() {
  return await axios.get('top-books');
}

// Книги окремої категорії:
async function getBooksByCategory(selectedCategory) {
  return await axios.get(`category?category=${selectedCategory}`);
}

// Детальна інформація про книгу:
async function getBookById(bookId) {
  return await axios.get(`${bookId}`);
}

export { getAllCategory, getTopBooks, getBooksByCategory, getBookById };

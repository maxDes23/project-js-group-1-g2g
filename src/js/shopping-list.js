import axios from 'axios';

// Define bookId
let bookId = 'your_book_id';

axios.get('https://books-backend.p.goit.global/books/' + bookId)
    .then(response => {
        let book = response.data;
        // Do something with the book
    })
    .catch(error => {
        console.error('Error fetching book details:', error);
    });

// Load books from localStorage
function loadBooks() {
    let books = localStorage.getItem('books');
    if (books) {
        return JSON.parse(books);
    } else {
        return [];
    }
}

// Display books on the page
function displayBooks(books) {
    let bookContainer = document.querySelector('.shop_list');
    bookContainer.innerHTML = '';
    books.forEach(book => {
        let bookCard = createBookCard(book);
        bookContainer.appendChild(bookCard);
    });
}

// Create a book card
function createBookCard(book) {
    let card = document.createElement('div');
    // Add book information to the card
    // ...
    return card;
}

// Load and display books on page load
let books = loadBooks();
displayBooks(books);
import axios from 'axios';

axios.get('https://books-backend.p.goit.global/books')
    .then(response => {
        let books = response.data;
        // Use the id of the first book as bookId
        let bookId = books[0].id;

        return axios.get('https://books-backend.p.goit.global/books/' + bookId);
    })
    .then(response => {
        let book = response.data;
        // Add the book to the list of books
        let books = loadBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        // Display the books
        displayBooks(books);
    })
    .catch(error => {
        console.error('Error:', error);
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

function displayBooks(books) {
    let bookContainer = document.querySelector('.shop_title_list');
    bookContainer.innerHTML = '';
    if (books.length === 0) {
        bookContainer.innerHTML = `
            <div class="no-wrapper">
                <p class="no-info">This page is empty, add some books and proceed to order.</p>
                <img class="no-picture" src="./img/shopping/books-mob@1x.png" alt="Shop is Empty">
            </div>
        `;
    } else {
        books.forEach(book => {
            let bookCard = createBookCard(book);
            bookContainer.appendChild(bookCard);
        });
    }
}

// Create a book card
function createBookCard(book) {
    let card = document.createElement('li');
    card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Level: ${book.level}</p>
        <p>${book.description}</p>
        <ul>
            ${book.tags.map(tag => `<li>${tag}</li>`).join('')}
        </ul>
    `;
    return card;
}

// Remove book from list
function removeBookFromList(id) {
    let books = loadBooks();
    books = books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks(books);
}

// Load and display books on page load
let books = loadBooks();
displayBooks(books);

// Add event listener to the book container
document.querySelector('.shop_list').addEventListener('click', event => {
    if (event.target.classList.contains('remove')) {
        let bookId = event.target.getAttribute('data-book-id');
        removeBookFromList(bookId);
    }
});
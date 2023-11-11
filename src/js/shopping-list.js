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
    localStorage.setItem('books', JSON.stringify(books));
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
                <img class="no-picture" src="./img/shopping_list/shopping_book_mobile_2x.png" alt="Shop is Empty">
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
    let card = document.createElement('div');
    card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.category}</p>
        <p>${book.description}</p>
        <p>${book.author}</p>
        <ul>
            ${book.links.map(link => `<li><a href="${link}">Buy</a></li>`).join('')}
        </ul>
        <button class="remove" data-book-id="${book.id}">Remove from Shopping List</button>
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
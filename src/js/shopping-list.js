// shoppingList.js
const axios = require('axios');
const Notiflix = require('notiflix');

function getBooks() {
    return axios.get('https://books-backend.p.goit.global/books/top-books')
        .then(response => response.data)
        .catch(error => console.error(error));
}

function createBookCard(book) {
    const { title, category, description, author, image, buyLinks } = book;
    let card = document.createElement('div');
    card.innerHTML = `
        <img src="${image}" alt="${title}">
        <h2>${title}</h2>
        <p>${category}</p>
        <p>${description}</p>
        <p>${author}</p>
        <ul>${buyLinks.map(link => `<li><a href="${link}">Buy</a></li>`).join('')}</ul>
        <button onclick="removeFromShoppingList('${book.id}')">Remove from Shopping List</button>
    `;
    return card;
}

function displayBooks(books) {
    const shoppingList = document.getElementById('shopping-list');
    books.forEach(book => {
        const card = createBookCard(book);
        shoppingList.appendChild(card);
    });
}

function removeFromShoppingList(bookId) {
    // remove book from localStorage
    localStorage.removeItem(bookId);
    Notiflix.Notify.Success('Book removed from Shopping List');
    // refresh the page to update the list
    location.reload();
}

function loadShoppingList() {
    const shoppingList = Object.keys(localStorage);
    if (shoppingList.length === 0) {
        Notiflix.Notify.Info('Your Shopping List is empty');
    } else {
        getBooks()
            .then(books => {
                const booksInList = books.filter(book => shoppingList.includes(book.id));
                displayBooks(booksInList);
            });
    }
}

loadShoppingList();

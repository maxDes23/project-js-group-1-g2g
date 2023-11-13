
// 1. Create a function to fetch the list of books from localStorage.
function getBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
}

// 2. Create a function to render the list of books on the page.
function renderBooks() {
    const books = getBooks();
    const bookList = document.querySelector('.shop_title_list');
    if (!bookList) {
        return;
    }
    if (books.length === 0) {
        bookList.innerHTML = `<p class="no__info">This page is empty, add some books and proceed to order.</p>
        <img class="no__picture" src="./img/shopping/books-desk.png" alt="Shop is Empty" >`;
        return;
    }
    bookList.innerHTML = '';
    books.forEach((book) => {
        const bookCard = createBookCard(book);
        bookList.appendChild(bookCard);
    });
}

// 3. Create a function to render a single book card.
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookImage = document.createElement('img');
    bookImage.classList.add('book-image');
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookCard.appendChild(bookImage);

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookCategory = document.createElement('p');
    bookCategory.classList.add('book-category');
    bookCategory.textContent = book.category;
    bookCard.appendChild(bookCategory);

    const bookDescription = document.createElement('p');
    bookDescription.classList.add('book-description');
    bookDescription.textContent = book.description;
    bookCard.appendChild(bookDescription);

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = `by ${book.author}`;
    bookCard.appendChild(bookAuthor);

    const bookLinks = document.createElement('div');
    bookLinks.classList.add('book-links');
    book.links.forEach((link) => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        bookLinks.appendChild(linkElement);
    });
    bookCard.appendChild(bookLinks);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Remove from list';
    deleteButton.addEventListener('click', () => {
        deleteBook(book.id);
    });
    bookCard.appendChild(deleteButton);

    return bookCard;
}

// 4. Create a function to delete a book from the list and from localStorage.
function deleteBook(bookId) {
    let books = getBooks();
    books = books.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

// 5. Call the functions to fetch and render the list of books when the page loads.
window.addEventListener('load', () => {
    renderBooks();
});


import icons from "../img/icons.svg"


const themeSwitcher = document.querySelector('.switcher-block')
const switcher = document.querySelector('.switcher')
const basket = document.querySelector('.basket')
const home = document.querySelector('.home')
const basketIco = document.querySelector('.basket-ico')
const mobBasketIco = document.querySelector('.mob-basket-ico')
const mobileMenu = document.querySelector('.menu__body')
const burgerBtn = document.querySelector('.burger-menu')
const currentPage = window.location.href;
const mobBasket = document.querySelector('.mob-basket')
const mobHome = document.querySelector('.mob-home')
const burgerIcon = document.querySelector('.mob-ico')
const bodyEl = document.querySelector('body')


const booksQtyElement = document.querySelector('.books-quantity')



function getSelectedBooksQty() {
    const qty = localStorage.getItem('books') || 0
    if (!qty) {
        return booksQtyElement.classList.add('display-none')
    }
     let quantity = JSON.parse(qty).length 
    console.log(localStorage.getItem('books'));
    booksQtyElement.classList.remove('display-none')
    booksQtyElement.innerHTML = quantity
}

getSelectedBooksQty();

function setActivePage(currentPage) {
    if (currentPage.includes('shop-list')) {
    booksQtyElement.classList.add('display-none')
    home.classList.remove('nav-active');
    mobHome.classList.remove('nav-active');
      basket.classList.add('nav-active');
      mobBasket.classList.add('nav-active');
      basketIco.classList.add('nav-active')
      mobBasketIco.classList.add('nav-active')
  }
  else {
    home.classList.add('nav-active');
    mobHome.classList.add('nav-active');
    }
}
setActivePage(currentPage);

function burgerIconSwithcer() {
    const currentIcon = burgerIcon.getAttribute('href')

    if (currentIcon.endsWith('burger')) {
        burgerIcon.setAttribute('href', `${icons}#icon-x-close`)
         bodyEl.classList.add('modal-open')
        return
    }
    burgerIcon.setAttribute('href', `${icons}#burger`)
    bodyEl.classList.remove('modal-open')
}

function onBurgerClick() {
    setActivePage(currentPage)
    burgerIconSwithcer()

    mobileMenu.classList.toggle('menu-active');
}

burgerBtn.addEventListener('click', onBurgerClick)




themeSwitcher.addEventListener('click', onTriggerClick)


function onTriggerClick() {
    toggleTheme();
}

// function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

// function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            switcher.style.left = 2 + "px";
            setTheme('theme-light');
        } else {
            switcher.style.left = 19 + "px";
            setTheme('theme-dark');
        }
    }

if (localStorage.getItem('theme') === 'theme-dark') {
    switcher.style.left = 19 + "px";
    setTheme('theme-dark');
}
else {
    setTheme('theme-light');
    }





export {booksQtyElement, getSelectedBooksQty}

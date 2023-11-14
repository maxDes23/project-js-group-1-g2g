import icons from "../img/icons.svg"


const themeSwitcher = document.querySelector('.switcher-block')
const switcher = document.querySelector('.switcher')
const navList = document.querySelector('.nav-list')
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


function setActivePage(currentPage) {
  if (currentPage.includes('shop-list')) {
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


// function burgerIconSwithcer() {
//     const currentIcon = burgerIcon.getAttribute('href')
//     const parts = currentIcon.split('#');
//     const path = parts[0];
//     const currentFragment = parts[1];
    
//     if (currentFragment === 'burger') {
//         burgerIcon.setAttribute('href', path + '#icon-x-close');
//     } else {
//         burgerIcon.setAttribute('href', path + '#burger');
//     }
// }


function burgerIconSwithcer() {
    const currentIcon = burgerIcon.getAttribute('href')
    currentIcon.endsWith('burger')
        ? burgerIcon.setAttribute('href', `${icons}#icon-x-close`)
        : burgerIcon.setAttribute('href', `${icons}#burger`)
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







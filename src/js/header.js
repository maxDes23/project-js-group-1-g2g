const themeSwitcher = document.querySelector('.switcher-block')
const switcher = document.querySelector('.switcher')
const navList = document.querySelector('.nav-list')
const basket = document.querySelector('.basket')
const home = document.querySelector('.home')
const basketIco = document.querySelector('.basket-ico')
const mobileMenu = document.querySelector('.menu__body')
const burgerBtn = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', onBurgerClick)

function onBurgerClick() {
    mobileMenu.classList.toggle('menu-active');
}


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



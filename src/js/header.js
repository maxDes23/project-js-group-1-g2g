
const burgerBlack = document.querySelector('.burger-icon-black')
const burgerLight = document.querySelector('.burger-icon-white')
const themeSwitcher = document.querySelector('.switcher-block')
const switcher = document.querySelector('.switcher')



themeSwitcher.addEventListener('click', onTriggerClick)
function onTriggerClick() {
    toggleTheme();
    // switcher.style.top = switcher.offsetTop + 1 + "px";
}

// function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

// function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            burgerBlack.classList.remove('display-none')
            burgerLight.classList.add('display-none')
            switcher.style.left = 1 + "px";
            setTheme('theme-light');
        } else {
            switcher.style.left = 19 + "px";
            burgerBlack.classList.add('display-none')
            burgerLight.classList.remove('display-none')
            
            setTheme('theme-dark');
        }
    }

if (localStorage.getItem('theme') === 'theme-dark') {
    burgerBlack.classList.add('display-none')
    switcher.style.left = 19 + "px";
    setTheme('theme-dark');
}
else {
    burgerLight.classList.add('display-none')
    setTheme('theme-light');
    }

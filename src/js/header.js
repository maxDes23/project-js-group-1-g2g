
const burgerBlack = document.querySelector('.burger-icon-black')
const burgerLight = document.querySelector('.burger-icon-white')
const themeSwitcher = document.querySelector('.switcher-block')
const switcher = document.querySelector('.switcher')
const navList = document.querySelector('.nav-list')
const shoppingList = document.querySelector('.basket')

// navList.addEventListener('click', onNavClick)

// function onNavClick(event) {
//     console.dir(event.target);
//     if (event.target.innerText === "SHOPPING LIST" || event.target.classList.contai) {
//         shoppingList.classList.add('active')
//     }
    
    
// }
// let navItems = document.querySelectorAll('.nav-item');

// function activate(element) {
//       // Remove 'active' class from all nav items
//       let navItems = document.querySelectorAll('.nav-item');
//       navItems.forEach(item => item.classList.remove('active'));

//       // Add 'active' class to the clicked nav item
//       element.classList.add('active');
//     }



themeSwitcher.addEventListener('click', onTriggerClick)


function onTriggerClick() {
    console.log('object');
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
            switcher.style.left = 2 + "px";
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



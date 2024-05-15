const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navItems = document.querySelectorAll('.nav__item'); // Select all nav items

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Collapse menu when a nav item is clicked */
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

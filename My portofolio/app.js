
const navBar = document.querySelector('#nav-bar');
const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');
const sideBtn = document.querySelector('#side-btn');
const sideBar = document.querySelector('#side-bar');
const sideBarClose = document.querySelector('#side-bar-close');


// nav bar

// navBar.addEventListener('click', () => {
//     navBar.classList.remove('nav');
    
// });

// side bar
const closeBar = () => {
    sideBar.classList.add('opacity-0');
    sideBar.classList.add('pointer-events-none');
    sideBar.classList.add('-left-72');
    sideBar.classList.remove('left-0');
};

sideBtn.addEventListener('click', () => {
    sideBar.classList.remove('opacity-0');
    sideBar.classList.remove('pointer-events-none');
    sideBar.classList.remove('-left-72');
    sideBar.classList.add('left-0');
});

sideBarClose.addEventListener('click', () => {
    closeBar();
});

// menu bar
const closeMenu = () => {
    menu.classList.add('opacity-0');
    menu.classList.add('pointer-events-none');
    menu.classList.add('-right-80');
    menu.classList.remove('right-0');
};

menuBtn.addEventListener('click', () => {
    menu.classList.remove('opacity-0');
    menu.classList.remove('pointer-events-none');
    menu.classList.remove('-right-80');
    menu.classList.add('right-0');
});

menuCloseBtn.addEventListener('click', () => {
    closeMenu();
});
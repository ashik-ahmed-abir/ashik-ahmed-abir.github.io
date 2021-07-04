const menu = document.querySelector('#header');
const menuBtn = document.querySelector('#menu-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');

const closeMenu = () => {
    menu.classList.add('hidden');
    menu.classList.add('xl:inline-block');
    menuBtn.classList.remove('hidden');
    menuCloseBtn.classList.add('hidden');
    menuBtn.classList.remove('pointer-events-none');
};

menuBtn.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.classList.remove('xl:inline-block');
    menuBtn.classList.add('hidden');
    menuBtn.classList.add('pointer-events-none');
    menuCloseBtn.classList.remove('hidden');

    
});

menuCloseBtn.addEventListener('click', () => {
    closeMenu();
});

// GSAP


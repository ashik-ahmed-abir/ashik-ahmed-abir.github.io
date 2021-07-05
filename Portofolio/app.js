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

// CONTACT

const logoIcon = document.querySelector('#con-logo');
const logoText = document.querySelector('#con-text');

logoIcon.addEventListener("mouseover", () => {
    logoText.classList.remove('hidden');
    logoIcon.classList.remove('bg-black');
    logoIcon.classList.add('bg-blue-700');
    
 
});

logoIcon.addEventListener("mouseout", () => {
    logoText.classList.add('hidden');
    logoIcon.classList.add('bg-black');
    logoIcon.classList.remove('bg-blue-700');
    
});





// HTML CONTACT FORM

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  

  // GSAP

gsap.from('body', {duration: 2, opacity: 0, delay: 1});
gsap.from('#link-collection a', {x: -200, oppacity: 0, duration: 1, delay: 1, stagger: 0.1 });



var navigationLinks = document.querySelectorAll('[data-nav-link]')
var pages = document.querySelectorAll('[data-page]')
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener(
    'click',
    (function (index) {
      return function () {
        for (let j = 0; j < navigationLinks.length; j++) {
          navigationLinks[j].classList.remove('active')
        }

        for (let j = 0; j < pages.length; j++) {
          pages[j].classList.remove('active')
        }

        navigationLinks[i].classList.add('active')
        pages[i].classList.add('active')
      }
    })(i)
  )
}

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
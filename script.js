const menu = document.querySelector('.header__navbar-list')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
})

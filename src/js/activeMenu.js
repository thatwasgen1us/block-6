// const menuWrapper = document.querySelector('.menu-wrapper')
// const burgerButton = document.querySelector('.header__burger')
// const closeButton = document.querySelector('.close-button')
// const menu = document.querySelector('.menu')

// let openMenu = () => {
//     menuWrapper.classList.toggle('menu-active')
//     closeButton.classList.toggle('active-button')
//     event.stopPropagation()
// }
// burgerButton.addEventListener('click', openMenu)

// let closeMenu = () => {
//     menuWrapper.classList.toggle('menu-active')
//     closeButton.classList.toggle('active-button')
// }

// closeButton.addEventListener('click', closeMenu)

// if (menuWrapper.classList.contains('menu-active')) {
//     menu.addEventListener('click', closeMenu)
// }

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu-wrapper')
const closeButton = document.querySelector('.close-button')
const menuAside = document.querySelector('.menu')


function toggleMenu() {
  menu.classList.toggle('menu-active')
  closeButton.classList.toggle('active-button')
}

burger.addEventListener('click', function (event) {
  toggleMenu()
  event.stopPropagation() 
})

closeButton.addEventListener('click', function (event) {
  toggleMenu()
  event.stopPropagation()
})

document.addEventListener('click', function (event) {
  if (menu.classList.contains('menu-active')) {
    const isClickInsideMenu = menuAside.contains(event.target)
    if (!isClickInsideMenu) {
      menu.classList.remove('menu-active') // Закрываем меню
    }
  }
})

console.log(menu)
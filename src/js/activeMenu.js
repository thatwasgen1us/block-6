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
      menu.classList.remove('menu-active') 
    }
  }
})

const feedbackModal = document.querySelector('.feedback-modal')
const feedbackBtnAside = document.querySelector('.feedback-chat-aside')
const closeFeedbackModal = document.querySelector('.feedback-modal__close--button')
const feedbackBtnHeader = document.querySelector('.feedback-chat-header')
const feedbackMenu = document.querySelector('.feedback-menu')

let toggleFeedback = () => {
  feedbackModal.classList.toggle('active-modal')
}

feedbackBtnAside.addEventListener('click', function (event) {
  toggleFeedback()
  event.stopPropagation()
})

closeFeedbackModal.addEventListener('click', function (event) {
  toggleFeedback()
  event.stopPropagation()
})

feedbackBtnHeader.addEventListener('click', function (event) {
  toggleFeedback()
  event.stopPropagation()
})

document.addEventListener('click', function (event) {
  if (feedbackModal.classList.contains('active-modal')) {
    const isClickInsideFeedbackModal = feedbackMenu.contains(event.target)
    if (!isClickInsideFeedbackModal) {
      feedbackModal.classList.remove('active-modal') 
    }
  }
})


const callbackModal = document.querySelector('.callback-modal')
const callbackBtnAside = document.querySelector('.callback-chat-aside')
const closeCallbackModal = document.querySelector('.callback-modal__close--button'
)
const callbackBtnHeader = document.querySelector('.callback-chat-header')
const callbackMenu = document.querySelector('.callback-menu')

let toggleCallback = () => {
  callbackModal.classList.toggle('active-modal')
}

callbackBtnAside.addEventListener('click', function (event) {
  toggleCallback()
  event.stopPropagation()
})

closeCallbackModal.addEventListener('click', function (event) {
  toggleCallback()
  event.stopPropagation()
})

callbackBtnHeader.addEventListener('click', function (event) {
  toggleCallback()
  event.stopPropagation()
})

document.addEventListener('click', function (event) {
  if (callbackModal.classList.contains('active-modal')) {
    const isClickInsideFeedbackModal = callbackMenu.contains(event.target)
    if (!isClickInsideFeedbackModal) {
      callbackModal.classList.remove('active-modal')
    }
  }
})

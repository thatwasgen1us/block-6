let btn = document.querySelector('.brands__button')
let items = document.querySelectorAll('.brands__item')

if (document.documentElement.clientWidth > 1120) {
  for (i = 8; i < items.length; i++) {
    items[i].classList.add('visually-hidden')
  }
} else if (
  document.documentElement.clientWidth <= 1120 &&
  document.documentElement.clientWidth > 767
) {
  for (i = 6; i < items.length; i++) {
    items[i].classList.add('visually-hidden')
  }
}

let classHidden = document.querySelectorAll('.visually-hidden')

btn.addEventListener('click', function () {
  if (btn.classList.contains('hide')) {
    classHidden.forEach((element) => {
      element.classList.add('visually-hidden')
    })
    btn.textContent = 'Показать всё'
    btn.classList.remove('hide')
  } else {
    classHidden.forEach((element) => {
      element.classList.remove('visually-hidden')
    })
    btn.textContent = 'Скрыть'
    btn.classList.add('hide')
  }
})

let btnHideText = document.querySelector('.services__info--button')
let text = document.querySelector('.services__info--text')

btnHideText.addEventListener('click', function () {
  if (btnHideText.className === 'services__info--button section-button hide') {
    text.classList.remove('open')
    btnHideText.textContent = 'Читать далее'
    btnHideText.classList.remove('hide')
  } else {
    text.classList.add('open')
    btnHideText.textContent = 'Скрыть'
    btnHideText.classList.add('hide')
  }
})

let repairButton = document.querySelector('.repair__button')
let repairItems = document.querySelectorAll('.repair__item')

if (document.documentElement.clientWidth > 1120) {
  for (let i = 4; i < repairItems.length; i++) {
    repairItems[i].classList.add('repair__hidden')
  }
} else if (
  document.documentElement.clientWidth <= 1120 &&
  document.documentElement.clientWidth > 767
) {
  for (let i = 3; i < repairItems.length; i++) {
    repairItems[i].classList.add('repair__hidden')
  }
}

let brandsHidden = document.querySelectorAll('.repair__hidden')

repairButton.addEventListener('click', function () {
  if (repairButton.classList.contains('hide')) {
    brandsHidden.forEach((element) => {
      element.classList.add('repair__hidden')
    })
    repairButton.textContent = 'Показать всё'
    repairButton.classList.remove('hide')
    console.log(brandsHidden)
  } else {
    brandsHidden.forEach((element) => {
      element.classList.remove('repair__hidden')
    })
    repairButton.textContent = 'Скрыть'
    repairButton.classList.add('hide')
    console.log(brandsHidden)
  }
})
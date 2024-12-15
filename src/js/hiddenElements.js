let btn = document.querySelector('.brands__button')
let visually = document.getElementById('mores')
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

classHidden = document.querySelectorAll('.visually-hidden')

btn.addEventListener('click', function () {
  if (btn.className === 'brands__button section-button hide') {
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

btnHideText = document.querySelector('.services__info--button')
text = document.querySelector('.services__info--text')

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

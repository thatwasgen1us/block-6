import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16
      },
      420: {
        slidesPerView: 1.5,
        spaceBetween: 16
      },
      530: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      650: {
        slidesPerView: 2.5,
        spaceBetween: 16
      }
    }
  })
}

function checkScreenSize() {
  const swiperContainer = document.querySelector('.swiper')
  if (swiperContainer.swiper) {
    swiperContainer.swiper.destroy()
  }
  initSwiper()
}

const mediaQuery = window.matchMedia('(max-width: 767px)')

function handleMediaChange(event) {
  if (event.matches) {
    checkScreenSize()
  } else {
    const swiperContainer = document.querySelector('.swiper')
    if (swiperContainer.swiper) {
      swiperContainer.swiper.destroy()
    }
  }
}

mediaQuery.addEventListener('change', handleMediaChange)

document.addEventListener('DOMContentLoaded', () => {
  checkScreenSize()
  handleMediaChange(mediaQuery)
})
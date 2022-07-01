import AOS from 'aos'
import WOW from 'wowjs'
import { modals } from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import calc from './modules/calc'
import tabs from './modules/tabs'
import accordion from './modules/accordion'

import showMoreCards from './modules/showMoreCards'
import phoneMask from './services/phoneMask'
import picturesSize from './modules/pictureSize'

window.addEventListener('DOMContentLoaded', () => {
  AOS.init()
  window.wow = new WOW.WOW()
  window.wow.init()

  const order = {}

  modals('show', 600000)
  sliders('.main-slider-item', '', '', 'vertical', 800000)
  sliders('.feedback-slider-item', '.main-next-btn', '.main-prev-btn', 'horizontal', 800000)
  forms(order)
  calc('#size', '#material', '#options', '.promocode', '.calc-price', order)
  tabs()
  accordion('.accordion-heading', '.accordion-block')

  showMoreCards('.button-styles', '#styles .row')
  phoneMask('[name="phone"]')
  picturesSize('.sizes-block')
})

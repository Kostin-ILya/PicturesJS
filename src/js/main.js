import AOS from 'aos';
import WOW from 'wowjs';
import { modalsModule } from './modules/modals';
import slidersModule from './modules/sliders';
import formsModule from './modules/forms';
import showMoreCards from './modules/showMoreCards';
import phoneMask from './services/phoneMask';

window.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  window.wow = new WOW.WOW();
  window.wow.init();

  modalsModule('show', 600000);
  slidersModule('.main-slider-item', '', '', 'vertical', 800000);
  slidersModule('.feedback-slider-item', '.main-next-btn', '.main-prev-btn', 'horizontal', 800000);
  formsModule();
  showMoreCards('.button-styles', '#styles .row');
  phoneMask('[name="phone"]');
});

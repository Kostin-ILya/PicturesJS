import AOS from 'aos';
import WOW from 'wowjs';
import { modalsModule } from './modules/modals';
import slidersModule from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  modalsModule('show', 600000);
  slidersModule('.main-slider-item', '', '', 'vertical', 8000);
  slidersModule('.feedback-slider-item', '.main-next-btn', '.main-prev-btn', 'horizontal', 8000);

  AOS.init();
  window.wow = new WOW.WOW();
  window.wow.init();
});

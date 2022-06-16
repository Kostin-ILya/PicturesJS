import AOS from 'aos';
import WOW from 'wowjs';
import { modalsModule } from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
  modalsModule('show', 600000);

  AOS.init();
  window.wow = new WOW.WOW();
  window.wow.init();
});

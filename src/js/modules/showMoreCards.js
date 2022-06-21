const showMoreCards = (trigger, selector) => {
  const btn = document.querySelector(trigger);
  const cards = document.querySelectorAll(selector);

  btn.addEventListener('click', () => {
    cards.forEach((item) => {
      item.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    });
    btn.remove();
  });
};

export default showMoreCards;

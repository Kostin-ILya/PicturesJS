import { getResources } from '../services/requests';

const showMoreCards = (trigger, wrapperSelector) => {
  const btn = document.querySelector(trigger);
  const wrapper = document.querySelector(wrapperSelector);

  function createCards(response) {
    response.forEach(({ src, title, link }) => {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp">
        <div class=styles-block>
          <img src=${src} alt='style'>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      </div>`;

      wrapper.append(card);
    });
  }

  function showError() {
    const errorBlock = document.createElement('div');
    const errorImg = document.createElement('img');
    const errorText = document.createElement('div');

    errorImg.src = 'assets/img/fail.png';
    errorText.textContent = 'Something went wrong';
    errorBlock.classList.add('status', 'error');
    errorBlock.append(errorImg, errorText);
    wrapper.append(errorBlock);
  }

  btn.addEventListener('click', (event) => {
    const { target } = event;
    getResources('assets/db.json')
      .then((data) => createCards(data.styles))
      .catch(() => showError())
      .finally(() => {
        if (wrapper.children.length > 5) {
          target.remove();
        }
      });
  });

  // const cards = document.querySelectorAll(selector);

  // btn.addEventListener('click', () => {
  //   cards.forEach((item) => {
  //     item.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //   });
  //   btn.remove();
  // });
};

export default showMoreCards;

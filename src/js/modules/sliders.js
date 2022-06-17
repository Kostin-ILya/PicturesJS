const slidersModule = (slidesSelector, next, prev, direction, interval) => {
  let slideIndex = 0;
  let timerIntervalId;
  const slides = document.querySelectorAll(slidesSelector);
  const slidesParent = slides[0].parentNode;

  function showSlides(n) {
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((item) => {
      item.classList.add('hide', 'animated');
    });
    slides[slideIndex].classList.remove('hide');
    slides[slideIndex].classList.add('show');
  }
  showSlides(slideIndex);

  function changeSlides(n) {
    showSlides((slideIndex += n));
  }

  function activateAnimate() {
    if (direction === 'vertical') {
      timerIntervalId = setInterval(() => {
        changeSlides(1);
        slides[slideIndex].classList.add('slideInDown');
      }, interval);
    } else {
      timerIntervalId = setInterval(() => {
        changeSlides(1);
        slides[slideIndex].classList.add('slideInLeft');
      }, interval);
    }
  }
  activateAnimate();

  slidesParent.addEventListener('mouseenter', () => {
    clearInterval(timerIntervalId);
  });
  slidesParent.addEventListener('mouseleave', () => {
    activateAnimate();
  });

  try {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);

    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      slides[slideIndex].classList.remove('slideInRight');
      slides[slideIndex].classList.add('slideInLeft');
    });
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      slides[slideIndex].classList.remove('slideInLeft');
      slides[slideIndex].classList.add('slideInRight');
    });
  } catch (error) {
    console.log(error);
  }
};

export default slidersModule;

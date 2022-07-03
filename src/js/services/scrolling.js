const scrolling = (upSelector) => {
  const up = document.querySelector(upSelector)

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      up.classList.remove('fadeOut')
      up.classList.add('animated', 'fadeIn')
    } else {
      up.classList.remove('fadeIn')
      up.classList.add('fadeOut')
    }
  })
}

export default scrolling

const burger = (triggerSelector, contentSelector) => {
  const burger = document.querySelector(triggerSelector)
  const menu = document.querySelector(contentSelector)

  burger.addEventListener('click', () => {
    if (document.documentElement.clientWidth < 993 && !menu.classList.contains('show')) {
      menu.classList.add('show')
    } else {
      menu.classList.remove('show')
    }
  })

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 993) {
      menu.classList.remove('show')
    }
  })
}

export default burger

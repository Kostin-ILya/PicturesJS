function closeAllModal(selector, activeClass) {
  document.querySelectorAll(selector).forEach((item) => {
    item.classList.remove(activeClass)
  })

  document.body.classList.remove('overflow')
  document.body.style.marginRight = ''
  if (document.querySelector('.fixed-gift')) {
    document.querySelector('.fixed-gift').style.right = ''
  }
}

const modals = (activeClass, showModalTimer) => {
  const showModalByTime = setTimeout(() => {
    document.querySelector('.popup-consultation').classList.add(activeClass)
    document.body.classList.add('overflow')
  }, showModalTimer)
  let triggerPressed = false
  function calcScroll() {
    const div = document.createElement('div')
    div.style.cssText = 'width: 50px; height: 50px; overflow: scroll; visivility: hidden;'
    document.body.append(div)

    const scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    return scrollWidth
  }

  function openModalByScroll() {
    if (
      !triggerPressed &&
      window.scrollY + document.documentElement.clientHeight >=
        Math.max(document.documentElement.offsetHeight, document.body.offsetHeight) - 5
    ) {
      document.querySelector('.fixed-gift').click()
      window.removeEventListener('scroll', openModalByScroll)
    }
  }
  window.addEventListener('scroll', openModalByScroll)

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        triggerPressed = true
        closeAllModal('[data-modal]', 'show')

        modal.classList.add(activeClass)
        document.body.classList.add('overflow')
        document.body.style.marginRight = `${calcScroll()}px` // Для того чтобы не прыгала страница
        document.querySelector('.fixed-gift').style.right = `${calcScroll() + 20}px`

        if (item.classList.contains('fixed-gift')) {
          item.remove()
        }

        clearTimeout(showModalByTime)
      })
    })

    close.addEventListener('click', () => {
      closeAllModal('[data-modal]', 'show')
    })
    // Скрытие модалки при нажатии на оверлей
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeAllModal('[data-modal]', 'show')
      }
    })
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains(activeClass)) {
        closeAllModal('[data-modal]', 'show')
      }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close')
  openModalByScroll()
}

export { modals, closeAllModal }

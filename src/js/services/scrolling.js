const scrolling = (upSelector, localLinksSelector) => {
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

  function smoothScroll() {
    const links = document.querySelectorAll(localLinksSelector)
    const speed = 0.2

    links.forEach((link) => {
      link.addEventListener('click', function fn(ev) {
        ev.preventDefault()

        const widthTop = document.documentElement.scrollTop
        const { hash } = this
        const toBlock = document.querySelector(hash).getBoundingClientRect().top
        let start = null

        function step(time) {
          if (start === null) {
            start = time
          }
          const progress = time - start
          const r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock)

          document.documentElement.scrollTo(0, r)

          if (r === widthTop + toBlock) {
            window.location.hash = hash
          } else {
            requestAnimationFrame(step)
          }
        }

        requestAnimationFrame(step)
      })
    })
  }
  smoothScroll()
}

export default scrolling

const accordion = (triggerSelector, contentSelector) => {
  const headers = document.querySelectorAll(triggerSelector)
  const blocks = document.querySelectorAll(contentSelector)

  function resetHeight() {
    blocks.forEach((block) => {
      block.style.maxHeight = ''
    })
  }

  headers.forEach((item) => {
    item.addEventListener('click', function fn() {
      if (!this.classList.contains('active-style')) {
        headers.forEach((header) => {
          header.classList.remove('active-style')
        })
        resetHeight()

        this.classList.add('active-style')
        this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight + 60}px`
      } else {
        this.classList.remove('active-style')
        resetHeight()
      }
    })
  })
}

export default accordion

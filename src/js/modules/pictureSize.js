const picturesSize = (selector) => {
  const blocks = document.querySelectorAll(selector)

  function showImg(block) {
    const img = block.querySelector('img')
    const text = block.querySelectorAll('p:not(.sizes-hit)')

    img.classList.add('animated', 'fadeIn')
    img.src = `${img.src.slice(0, -4)}-1.png`

    text.forEach((item) => {
      item.classList.add('hide')
    })
  }
  function hideImg(block) {
    const img = block.querySelector('img')
    const text = block.querySelectorAll('p')

    img.classList.remove('animated', 'fadeIn')
    img.src = `${img.src.slice(0, -6)}.png`

    text.forEach((item) => {
      item.classList.remove('hide')
    })
  }

  blocks.forEach((item) => {
    item.addEventListener('mouseover', () => {
      showImg(item)
    })
    item.addEventListener('mouseout', () => {
      hideImg(item)
    })
  })
}

export default picturesSize

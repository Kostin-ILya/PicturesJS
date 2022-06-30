const tabs = () => {
  const tabWrapper = document.querySelector('.portfolio-menu')
  const contentWrapper = document.querySelector('.portfolio-wrapper')
  const liItems = tabWrapper.querySelectorAll('li')
  const allContent = contentWrapper.querySelectorAll('.all')
  const noContentText = document.querySelector('.portfolio-no')

  function showContent(selectedContentSelector) {
    const content = contentWrapper.querySelectorAll(selectedContentSelector)

    allContent.forEach((item) => {
      item.classList.remove('show')
      item.classList.add('animated', 'fadeIn', 'hide')
    })
    noContentText.classList.add('animated', 'fadeIn', 'hide')

    if (content.length === 0) {
      noContentText.classList.remove('hide')
      noContentText.classList.add('show')
    } else {
      content.forEach((item) => {
        item.classList.remove('hide')
        item.classList.add('show')
      })
    }
  }

  function bindAction(selector) {
    const tab = tabWrapper.querySelector(selector)

    tab.addEventListener('click', () => {
      showContent(selector)
    })
  }

  tabWrapper.addEventListener('click', (e) => {
    const { target } = e

    if (target && target.tagName === 'LI') {
      liItems.forEach((item) => {
        item.classList.remove('active')
      })
      target.classList.add('active')
    }
  })

  bindAction('.all')
  bindAction('.lovers')
  bindAction('.chef')
  bindAction('.girl')
  bindAction('.guy')
  bindAction('.grandmother')
  bindAction('.granddad')
}

export default tabs

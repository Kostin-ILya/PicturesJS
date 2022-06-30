import { postData } from '../services/requests'
import { closeAllModal } from './modals'
import checkTextInputs from '../services/checkInputs'

const forms = (order) => {
  function bindForm(formSelector) {
    const forms = document.querySelectorAll(formSelector)
    const uploadInputs = document.querySelectorAll('[name=upload]')
    const messages = {
      loading: 'Загрузка',
      success: 'Спасибо! Ожидайте, мы с Вами свяжемся',
      failure: 'Что-то пошло не так',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
    }
    const path = {
      design: 'assets/server.php',
      callBack: 'assets/callBack.php',
    }

    uploadInputs.forEach((item) => {
      item.addEventListener('input', () => {
        const fileNameArr = item.files[0].name.split('.')
        const dots = fileNameArr[0].length > 10 ? '...' : '.'
        const name = fileNameArr[0].slice(0, 10) + dots + fileNameArr[1]

        item.previousElementSibling.textContent = name
      })
    })

    forms.forEach((item) => {
      item.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusBlock = document.createElement('div')
        const statusMessage = document.createElement('div')
        const statusImg = document.createElement('img')

        statusBlock.classList.add('status', 'animated', 'fadeInUp')
        statusImg.src = messages.spinner
        statusMessage.textContent = messages.loading
        statusBlock.append(statusMessage)
        statusBlock.append(statusImg)
        item.parentNode.append(statusBlock)

        item.classList.add('animated', 'fadeOutUp')
        setTimeout(() => {
          item.classList.add('hide')
        }, 400)

        const formData = new FormData(item)
        const api = item.closest('[data-design') ? path.design : path.callBack

        if (item.matches('[data-design]')) {
          Object.keys(order).forEach((key) => {
            formData.append(key, order[key])
          })
        }

        postData(api, formData)
          .then((data) => {
            console.log(data)

            statusImg.setAttribute('src', messages.ok)
            statusMessage.textContent = messages.success
          })
          .catch(() => {
            statusImg.setAttribute('src', messages.fail)
            statusMessage.textContent = messages.failure
          })
          .finally(() => {
            item.reset()
            uploadInputs.forEach((input) => {
              input.previousElementSibling.textContent = 'Файл не выбран'
            })
            document.querySelector('.calc-price').textContent =
              'Для расчета нужно выбрать размер картины и материал картины'
            Object.keys(order).forEach((key) => {
              delete order[key]
            })
            setTimeout(() => {
              closeAllModal('[data-modal]', 'show')
              statusBlock.remove()
              item.classList.remove('hide', 'animated')
              item.classList.add('show')
            }, 3000)
          })
      })
    })
  }

  bindForm('form')

  checkTextInputs('[name="message"]')
  checkTextInputs('[name="name"]')
}

export default forms

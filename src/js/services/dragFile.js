import { postData } from './requests'

const dragFile = (inputSelector) => {
  const inputs = document.querySelectorAll(inputSelector)

  ;['drop', 'dragover'].forEach((eventName) => {
    window.addEventListener(eventName, (e) => {
      e.preventDefault()
    })
  })
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
    inputs.forEach((input) => {
      input.addEventListener(eventName, (e) => {
        e.preventDefault()
        e.stopPropagation()
      })
    })
  })

  inputs.forEach((item) => {
    item.addEventListener('drop', (e) => {
      item.files = e.dataTransfer.files
      let text = ''

      item.files.forEach((file) => {
        const fileNameArr = file.name.split('.')
        const dots = fileNameArr[0].length > 10 ? '...' : '.'
        const name = `${fileNameArr[0].slice(0, 10) + dots + fileNameArr[1]}\b\b`

        text += name
        item.previousElementSibling.textContent = text
      })

      if (item.closest('main')) {
        const formData = new FormData()
        item.files.forEach((file) => {
          formData.append(file.name, file)
        })

        postData('assets/server.php', formData)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            item.previousElementSibling.textContent = 'Файлы отправлены'
            setTimeout(() => {
              item.previousElementSibling.textContent = 'Файл не выбран'
            }, 3000)
          })
      }
    })
  })
  ;['dragenter', 'dragover'].forEach((eventName) => {
    inputs.forEach((item) => {
      item.addEventListener(eventName, () => {
        item.parentElement.classList.add('drag-file')
      })
    })
  })
  ;['dragleave', 'drop'].forEach((eventName) => {
    inputs.forEach((item) => {
      item.addEventListener(eventName, () => {
        item.parentElement.classList.remove('drag-file')
      })
    })
  })
}

export default dragFile

const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, order) => {
  const size = document.querySelector(sizeSelector)
  const material = document.querySelector(materialSelector)
  const options = document.querySelector(optionsSelector)
  const promocode = document.querySelector(promocodeSelector)
  const result = document.querySelector(resultSelector)

  function calcPrice() {
    const sum = Math.round(+size.value * +material.value + +options.value)

    if (!size.value || !material.value) {
      result.textContent = 'Пожалуйста, введите размер и материал картины'
    } else if (promocode.value === 'IWANTPOPART') {
      result.textContent = `${Math.round(sum * 0.7)}руб.`
      order.price = Math.round(sum * 0.7)
      order.promocode = promocode.value
    } else {
      result.textContent = `${sum}руб.`
      order.price = sum
    }
  }

  size.addEventListener('change', calcPrice)
  material.addEventListener('change', calcPrice)
  options.addEventListener('change', calcPrice)
  promocode.addEventListener('input', calcPrice)
}

export default calc

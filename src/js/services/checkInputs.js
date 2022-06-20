const checkTextInputs = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[a-z]/gim, '');
    });
  });
};

export default checkTextInputs;

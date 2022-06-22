const phoneMask = (selector) => {
  const inputs = document.querySelectorAll(selector);

  function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function createMask(event) {
    const matrix = '+7 (___) ___ __ __';
    const def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    let i = 0;

    if (val.length < def.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, (s) => {
      return /[_\d]/.test(s) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : s;
    });

    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(2, this);
    }
  }

  inputs.forEach((item) => {
    item.addEventListener('input', createMask);
    item.addEventListener('focus', createMask);
    item.addEventListener('blur', createMask);
  });
};

export default phoneMask;

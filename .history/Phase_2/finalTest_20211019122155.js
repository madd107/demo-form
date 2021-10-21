$(document).ready(function () {
  function validateName(str) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\D]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }
});

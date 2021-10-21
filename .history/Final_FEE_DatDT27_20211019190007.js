$(document).ready(function () {
  function validTopic(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\S]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }
});

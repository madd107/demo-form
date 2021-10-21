$(document).ready(function () {
  function validTopic(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\d]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2));
    let dd = Number(str_input.val().substr(8, 2));
    let dateNow = new Date().getDate();
    let monthNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();

    if (dd <= dateNow && mm <= monthNow + 1 && yyyy <= yearNow) {
      str_valid.html("Information Invalid");
      return true;
    } else {
      return false;
    }
  }
});

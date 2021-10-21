$(document).ready(function () {
  function validateName(str) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\D]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  $("#ngaysinh").change(function (e) {
    e.preventDefault();

    if (validateDate($("#ngaysinh"), $("#val_date")) === false) {
      console.log("Dung");
    }
  });

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2));
    let dd = Number(str_input.val().substr(8, 2));
    let dateNow = new Date();

    if (
      str_input.val() == "" ||
      (yyyy == dateNow.getFullYear() &&
        mm == dateNow.getMonth() &&
        dd == dateNow.getDate())
    ) {
      str_valid.html("Information Invalid");
      return true;
    } else {
      return false;
    }
  }
});

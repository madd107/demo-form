$(document).ready(function () {
  function validateName(str) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\D]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  $("#ngaysinh").keyup(function (e) {
    e.preventDefault();

    if (validateDate($("#ngaysinh"), $("#val_date"))) {
      console.log(validateDate($("#ngaysinh"), $("#val_date")));
      $("#val_date").html("Sai");
    } else {
      $("#val_date").html("Dung");
    }
  });

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2));
    let dd = Number(str_input.val().substr(8, 2));
    let dateNow = new Date();

    if (
      dd == dateNow.getDate() &&
      mm == dateNow.getMonth() &&
      yyyy == dateNow.getFullYear()
    ) {
      str_valid.html("Information Invalid");
      return true;
    } else {
      return false;
    }
  }
});

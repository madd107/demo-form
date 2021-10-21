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

    console.log(new Date().getMonth());
    console.log(new Date().getDate());
    console.log(new Date().getFullYear());
    if (validateDate($("#ngaysinh"), $("#val_date"))) {
      console.log(validateDate($("#ngaysinh"), $("#val_date")));
      $("#val_date").html("Sai");
    } else {
      $("#val_date").html("Dung");
    }
  });

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2)) + 1;
    let dd = Number(str_input.val().substr(8, 2));
    let dateNow = new Date().getDate();
    let monthNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();

    if (dd == dateNow && mm == monthNow + 1 && yyyy == yearNow) {
      str_valid.html("Information Invalid");
      return true;
    } else {
      return false;
    }
  }
});

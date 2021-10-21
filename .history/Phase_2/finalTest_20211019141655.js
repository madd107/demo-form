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
    } else {
      $("#val_date").html("Correct");
    }
  });

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2));
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

  function validateKhoiLop(str_khoi_input, str_lop_input, str_valid) {
    if (parseInt(str_khoi_input.val()) == 10) {
      if (parseInt(str_lop_input.val()) != 10) {
        str_valid.html("Information Invalid");
        return true;
      }
    } else {
      return false;
    }
  }
});

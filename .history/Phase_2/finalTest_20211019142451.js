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
    } else if (parseInt(str_khoi_input.val()) == 11) {
      if (parseInt(str_lop_input.val()) != 11) {
        str_valid.html("Information Invalid");
        return true;
      }
    } else if (parseInt(str_khoi_input.val()) == 12) {
      if (parseInt(str_lop_input.val()) != 12) {
        str_valid.html("Information Invalid");
        return true;
      }
    }
  }

  $("#lop").change(function (e) {
    e.preventDefault();

    if (validateKhoiLop($("#khoi"), $("#lop"), $("#val_lop"))) {
    } else {
      $("#val_lop").html("Correct");
    }
  });
});

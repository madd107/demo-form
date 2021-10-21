$(document).ready(function () {
  function validTopic(str_input, str_valid) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\d]$/;
    if (regWord.test(str_input)) {
      str_valid.html("Nhập tên topic");
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
      str_valid.html("Phải chọn ngày");
      return true;
    } else {
      return false;
    }
  }

  function getData() {
    lop = $("#lop").val();
    mon = $("#mon").val();
    foneNumber = $("#fone").val();
    addr = $("#address").val();
    cty = $("#city").val();
    sta = $("#state option:selected").text();
    zipCode = $("#zip-code").val();
    nameOnCard = $("#name-on-card").val();
    creditCardNum = $("#cc-number").val();
    eMonth = $("#exp-month").val();
    eYear = $("#exp-year").val();
    cVV = $("#cvv").val();
  }
});

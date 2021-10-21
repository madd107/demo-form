$(document).ready(function () {
  // Khoi tao mang object chua data
  var arrData = [];

  function validData(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\S]+$/;
    return regWord.test(str_input);
  }

  function validPhone(str_input) {
    const regPhone = /^(098|097|096|094|093|092|091|090|036|035)[0-9]{7}$/;
    return regPhone.test(str_input);
  }

  function validZipCode(str_input) {
    const regZipCode = /^[0-9]{5}$/;
    return regZipCode.test(str_input);
  }

  function validCvv(str_input) {
    const regCvv = /^[0-9]{3}$/;
    return regCvv.test(str_input);
  }

  function validEmail(str_input) {
    const regEmail = /^[\w_\.+]*[\w_\.]\@([\w]+\.)+[\w]+[\w]$/;
    return regEmail.test(str_input);
  }

  function validCcNumber(str_input) {
    const regCcNumber = /^\d{4}[-]?\d{4}[-]?\d{4}[-]?\d{4}$/;
    return regCcNumber.test(str_input);
  }

  function validExpMonth(str_input) {
    const regExpMonth = /^[0-9]{1,2}$/;
    return regExpMonth.test(str_input);
  }

  function validExpYear(str_input) {
    const regExpYear = /^[0-9]{4}$/;
    return regExpYear.test(str_input);
  }

  function addData(
    arrObj,
    field_1,
    field_2,
    field_3,
    field_4,
    field_5,
    field_6,
    field_7,
    field_8,
    field_9,
    field_10,
    field_11,
    field_12,
    field_13
  ) {
    var obj = {
      username: field_1,
      phone: field_2,
      monan: field_3,
    };
  }

  $("#sign-in").on("click", function (event) {
    event.preventDefault();
  });
});

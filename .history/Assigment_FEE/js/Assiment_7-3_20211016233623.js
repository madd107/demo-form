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

  function valid(str_input) {
    const regCvv = /^[0-9]{3}$/;
    return regCvv.test(str_input);
  }
});

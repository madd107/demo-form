$(document).ready(function () {
  // Khoi tao mang object chua data
  var arrData = [];

  function validData(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\S]+$/;
    return regWord.test(str_input);
  }

  function validPhone(str_input) {
    const regPhone = /^(098|097|096|094|093|092|091|090|036|035)[0-9]{7}$/;
  }
});

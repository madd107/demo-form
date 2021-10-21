$(document).ready(function () {
  // Khoi tao mang object chua data
  var arrData = [];

  function validData(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\S]+$/;
    if(regWord.test(str_input) === false){
        $("fisrt-n").html() = "loi"
    }
  }
});

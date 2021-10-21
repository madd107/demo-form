$(document).ready(function () {
  // Khoi tao mang object chua data
  var arrData = [];

  function validData() {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\S]+$/;
    if(regWord.test($("#fisrt-n").val()) === false){
        $("fisrt-n").html() = "loi"
    }
  }
});

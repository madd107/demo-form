$(document).ready(function () {
  function validateName(str) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][\D]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  $("#ngaysinh").change(function (e) {
    e.preventDefault();
    console.log($("#ngaysinh").val());
    let yyyy = Number($("#ngaysinh").val().substr(0, 4));
    let mm = Number($("#ngaysinh").val().substr(5, 2));
    let dd = Number($("#ngaysinh").val().substr(8, 2));
    console.log(yyyy);
    console.log(mm);
    console.log(dd);
  });

  function validateDate(str) {
    let;
  }
});

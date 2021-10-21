$(document).ready(function () {
  //   myJSFunc("Xin chao cac bạn");

  var data = $("#p-data").text();
  console.log(data);

  var result = $("#p-result");
  result.text(data);
});

// function myJSFunc(msg) {
//   alert("jQuery " + msg);
// }

// Dung JQuery de thay doi phan tu html/css
$(document).ready(function () {
  // Lay phan tu style
  var data = $(".text-style").css("color", "red");
});

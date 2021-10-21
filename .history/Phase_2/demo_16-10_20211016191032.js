$(document).ready(function () {
  //   myJSFunc("Xin chao cac bạn");

  var data = $("#p-data").text();
  console.log(data);

  var result = $("#p-result");
  result.html(data);
});

function myJSFunc(msg) {
  alert("jQuery " + msg);
}

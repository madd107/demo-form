// $(document).ready(function () {
//   //   myJSFunc("Xin chao cac bạn");

//   var data = $("#p-data").text();
//   console.log(data);

//   var result = $("#p-result");
//   result.text(data);
// });

// function myJSFunc(msg) {
//   alert("jQuery " + msg);
// }

// Dung JQuery de thay doi phan tu html/css
// $(document).ready(function () {
//   // Lay phan tu style
//   //   var data = $(".text-style").css("color", "red");
//   // Add them thuoc tinh class cho phan tu chon
//   //   $(".text-style").css({
//   //     color: "red",
//   //     "font-size": "2rem",
//   //   });

//   // Bat su kien
//   $("#btn1").on("click", function (event) {
//     // alert("msg");
//     $(".text-style").addClass("text-danger");
//   });

//   $("#btn2").on("click", function (event) {
//     // alert("msg");
//     $(".text-style").removeClass("text-danger");
//   });
// });

$(document).ready(function () {
  //khai bao bien de nhan du lieu tu form
  var username, phone, monan;

  var output_data = $("#result-data");

  //ham lay du lieu
  function getData() {
    //lay data tu value cua form element
    username = $("#uname").val();
    phone = $("#phone").val();
    monan = $("#slMonAn option:selected").text();

    console.log(username + " - " + phone + " - " + monan);
  }

  // Xu ly suj kien click submit
  $("#btn-send").on("click", function (e) {
    e.preventDefault();

    getData();
  });

  function displayData(out_elm) {
    let rowData = "<tr>";
    rowData += "<td>" + 1 + "/<td>";
    rowData += "<td>" + username + "/<td>";
    rowData += "<td>" + phone + "/<td>";
    rowData += "<td>" + monan + "/<td>";
    rowData += "<td>"   "/<td>";

    rowData += "</tr>";
  }
});

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

  // Khai bao array object chua data

  var arrData = [
    {
      id: 1,
      username: "Ho va ten",
      phone: "039947472",
      monan: "pho",
    },
  ];

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

    addRowData(output_data, username, phone, monan);
  });

  function addRowData(out_elm, username, phone, mon) {
    let rowData =
      "<tr> <td>" +
      1 +
      "</td>    <td>" +
      username +
      "</td>    <td>" +
      phone +
      "</td>    <td>" +
      mon +
      '</td>    <td>      <button id="btn-edit" class="btn btn-outline-primary btn-sm">        <i class="far fa-edit"></i>      </button>      <button id="btn-del" class="btn btn-outline-primary btn-sm">        <i class="far fa-trash-alt"></i>      </button>    </td>  </tr>';

    out_elm.append(rowData);
  }
});

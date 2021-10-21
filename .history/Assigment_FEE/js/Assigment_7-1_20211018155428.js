$(document).ready(function () {
  var don_gia = $("#don-gia");
  var btn_giam = $("#btn-giam");
  var btn_tang = $("#btn-tang");
  var input_quantity = $("input");
  var thanh_tien = $("#t-tien");

  function showTongTien(gia_sp, thanh_tien) {
    let tong_tien = document.createElement("span");
    tong_tien.innerHTML = gia_sp;

    thanh_tien.appendChild(tong_tien);
  }
});

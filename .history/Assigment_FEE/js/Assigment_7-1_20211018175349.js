$(document).ready(function () {
  const don_gia = $("#don-gia");
  const btn_giam = $("#btn-giam");
  const btn_tang = $("#btn-tang");
  const input_quantity = $("input");
  const thanh_tien = $("#t-tien");

  $("input").defaultValue = 1;

  function showTongTien(gia_sp, thanh_tien) {
    let tong_tien = document.createElement("span");
    tong_tien.innerHTML = gia_sp;

    thanh_tien.appendChild(tong_tien);
  }

  btn_giam.on("click", function (e) {
    e.preventDefault();
    // alert("Ok");
    let sl = parseInt(input_quantity.val());

    sl++;

    console.log(sl);
  });

  input_quantity.on("change", function (e) {
    e.preventDefault();
    // alert("Ok");
    console.log(typeof parseInt(input_quantity.val()));
  });
});

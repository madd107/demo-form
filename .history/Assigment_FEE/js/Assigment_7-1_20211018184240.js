$(document).ready(function () {
  $("#count").defaultValue = 1;
  var price = parseInt($("#price").text());
  var count = parseInt($("#count").val());
  $("#total").text(price * count);
  console.log(count);

  // Khi số lượng thay đổi cập nhật lại giá trị count
  $("#count").on("change keyup", function () {
    if ($("#count").val() == "") {
      $("#total").text("--");
    }

    count = parseInt($("#count").val());

    isChecked = checkCount(count);

    if (isChecked) {
      totalPrice(count, price);
    } else {
      $("#total").text("--");
    }
  });

  // Sự kiện khi click button -
  $("#minus").on("click", function () {
    count = parseInt($("#count").val());
    $("#count").val(count - 1);
    count = parseInt($("#count").val());

    isChecked = checkCount(count);

    if (isChecked) {
      totalPrice(count, price);
    } else {
      $("#total").text("--");
    }
  });

  // Sự kiện khi click button +
  $("#plus").on("click", function () {
    count = parseInt($("#count").val());
    $("#count").val(count + 1);
    count = parseInt($("#count").val());

    isChecked = checkCount(count);

    if (isChecked) {
      totalPrice(count, price);
    } else {
      $("#total").text("--");
    }
  });
});

function totalPrice(newCount, price) {
  $("#total").text(price * newCount);
}

function checkCount(newCount) {
  if (newCount < 1 || newCount == "") {
    $("small").removeClass("d-none");
    return false;
  } else {
    $("small").addClass("d-none");
    return true;
  }
}

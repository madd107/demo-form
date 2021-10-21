// Validate dữ liệu nhập vào ko được để trống.
function isNotNull(str) {
  const regInput = /^[\w]+$/;

  if (regInput.test(str) == false || str == null) {
    return false;
  } else {
    return true;
  }
}

function validInput() {
  var inputItems = document.getElementById("input-info");
}

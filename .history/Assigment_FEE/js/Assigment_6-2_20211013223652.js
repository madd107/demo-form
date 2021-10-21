// Validate dữ liệu nhập vào ko được để trống.
function isNotNull(str) {
  const regInput = /^[\w]+$/;

  if (str == null) {
    return false;
  } else {
    return true;
  }
}

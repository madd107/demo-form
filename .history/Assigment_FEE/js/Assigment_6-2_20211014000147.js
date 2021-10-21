window.onload = function () {
	// Declare DOM object

	var form = document.querySelector("#tasks-form");
	var taskText = document.querySelector("input");
	var list = document.querySelector("#tasklist");
	var errorMessage = document.querySelector(".error");
	var clearBtn = document.querySelector("#clear");

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

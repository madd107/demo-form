window.onload = function () {
  // Declare DOM object

  var form = document.querySelector("#form-input");
  var text = document.querySelector("#input-info");
  var list = document.querySelector("#list");
  var errorMessage = document.querySelector(".error");
  var clearBtn = document.querySelector("#clear");

  var todoList = [];

  form.addEventListener("submit", function (evt) {
    evt.preventDefault(); //Hàm stopPro... này ngăn việc truyền đi sự kiện mặc định. Như trường hợp này, nếu nhấn vào nút Add Item thì sự kiện submit sẽ được gửi đến server để lưu lại dữ liệu. Tuy nhiên, nếu dùng hàm preventDefault() thì sự kiện này sẽ ko đc gửi đi mà sẽ đc thực thi ở phía dưới.

    errorMessage.innerHTML = "";

    // Bước 1: Check input nhập vào có phải rỗng ko
    if (isNotNull(text.value) == false) {
      errorMessage.innerHTML = "Please enter a message in the input";
      return;
    }

    // Bước 2: Add các record vào list
    todoList.push({
      id: new Date().getTime(),
      record: text.value,
    });

    //Bước 3: reser ô input
    text.value = "";
  });
};

// Validate dữ liệu nhập vào ko được để trống.
function isNotNull(str) {
  const regInput = /^[\w]+$/;

  if (regInput.test(str) == false || str == "") {
    return false;
  } else {
    return true;
  }
}

window.onload = function () {
  // Declare DOM object

  var form = document.querySelector("#form-input");
  var taskText = document.querySelector("input");
  var list = document.querySelector("#list");
  var errorMessage = document.querySelector(".error");
  var clearBtn = document.querySelector("#clear");

  var todoList = [];

  form.addEventListener("sumbit", function (evt) {
    evt.stopPropagation(); //Hàm stopPro... này ngăn việc truyền đi sự kiện đên phần tử mẹ. Như trường hợp này, nếu nhấn vào nút Add Item thì sự kiện sumbit sẽ được gửi đến server để lưu lại dữ liệu. Tuy nhiên, nếu dùng hàm stopPro... thì sự kiện này sẽ ko đc gửi đi mà sẽ đc thực thi ở phía dưới.
  });

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
};

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
      id: new Date().getTime(), //Bước này là định danh cho từng đói tượng. Sử dụng hàm getTime() sẽ lấy ra đc 1 dãy số tính tới milisecond.
      record: text.value, // Bước này là gán dữ liệu vừa nhập ở ô input vào thuộc tính record để phía dưới thêm vào từng row.
    });

    //Bước 3: reser ô input
    text.value = "";

    //Bước 4: Tải lại list
    loadList();

    // Tạo hàm loadList()
    function loadList() {
      todoList.forEach((tdL) => {
        // Tạo 1 row record
        var row = document.createElement("div"); //Bước này là tạo 1 thẻ div. Sử dụng hàm createElemrt
        row.classList.add("row", "mx-0", "row-record"); //Bước này là add các class cho thẻ div.
        row.dataset.id = tdL.id; // Bước này là gán id cho row vừa tạo. Để có thể định danh từng row riêng biệt, giúp cho các xử lý sau.

        // Tạo column record trong row vừa tạo
        var colText = document.createElement("div");
        colText.classList.add("col", "p-0", "font-weight-bold", "font-sz");
        colText.textContent = tdL.record; //Bước này là thêm các dữ liệu vừa được nhập vào.

        // Tạo column button trong row vừa tạo
        var colButton = document.createElement("div");
        colButton.classList.add("col", "p-0", "d-flex", "justify-content-end");

        // Tạo button trong column button
        var btnEdit = document.createElement("button");
        btnEdit.classList.add("btn", "fix-btn", "mr-2", "text-primary");
        btnEdit.dataset.id = tdL.id;
        btnEdit.innerHTML = '<i class="far fa-edit fa-2x"></i>';

        var btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "fix-btn", "mr-2", "text-danger");
        btnDelete.dataset.id = tdL.id;
        btnDelete.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';

        colButton.appendChild(btnEdit); //Bước này sẽ là nối các phần tử lại với nhau thành 1 khối liên kết.
        colButton.appendChild(btnDelete);

        row.appendChild(colText);
        row.appendChild(colButton);
        list.appendChild(row);

        // Triển khai các sự kiện
        btnEdit.removeEventListener("click", handleEdit); // Ở bước này, ban đầu chúng ta sẽ đặt removeEvent lên trước là để  remove event trước đó đã tạo. Nếu đặt remove phía sau add thì vừa add event thì hệ thống sẽ lập tức remove event đó và ko có tác dụng. Click ở đây là event khi client click vào button. Còn handleEdit là hàm xử lý event đó.
        btnEdit.addEventListener("click", handleEdit);

        btnDelete.removeEventListener("click", handleDelete);
        btnDelete.addEventListener("click", handleDelete);

        clearBtn.addEventListener("click", handleClear);
      });
    }

    function handleDelete() {
      // event.stopPropagation();

      // remove todo from todoList
      var index = todoList.findIndex((t) => t.id == this.dataset.id);
      todoList.splice(index, 1);
      // and re-render todoList
      renderTodoList();
    }
  });
  // Validate dữ liệu nhập vào ko được để trống.
  function isNotNull(str) {
    const regInput = /^[\w]+$/;

    if (regInput.test(str) == false || str == "") {
      return false;
    } else {
      return true;
    }
  }
};

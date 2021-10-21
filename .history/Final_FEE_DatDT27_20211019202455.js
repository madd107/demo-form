$(document).ready(function () {
  var arrData = [];

  var output_result = $("#result-data");

  function validTopic(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validateDate(str_input, str_valid) {
    let yyyy = Number(str_input.val().substr(0, 4));
    let mm = Number(str_input.val().substr(5, 2));
    let dd = Number(str_input.val().substr(8, 2));
    let dateNow = new Date().getDate();
    let monthNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();

    if (dd <= dateNow && mm <= monthNow + 1 && yyyy <= yearNow) {
      str_valid.html("Phải chọn ngày");
      return true;
    } else {
      return false;
    }
  }

  function getData() {
    lop = $("#lop option:selected").text();
    mon = $("#mon option:selected").text();
    topic = $("#topic").val();
    gv = $("#gv option:selected").text();
    hinh_thuc = $("#hinhthuc option:selected").text();
    ngaytrain = $("#ngaytrain").val();
    timeStart = $("#start").val();
    timeEnd = $("#end").val();
  }

  function addData(
    arrObj,
    field_1,
    field_2,
    field_3,
    field_4,
    field_5,
    field_6,
    field_7,
    field_8
  ) {
    var last_id = 0;
    //duyet Array Object
    for (var i in arrObj) {
      last_id = arrObj[i].id;
    }

    var obj = {
      id: last_id + 1,
      lop_hoc: field_1,
      mon_hoc: field_2,
      topic_hoc: field_3,
      giang_vien: field_4,
      hinh_thuc_hoc: field_5,
      date_train: field_6,
      time_start: field_7,
      time_end: field_8,
    };

    arrObj.push(obj);
  }

  function addRowData(out_elm) {
    arrData.forEach((item) => {
      let rowData =
        "<tr>    <td>" +
        item.id +
        "</td>    <td>" +
        item.lop_hoc +
        "</td>    <td>" +
        item.mon_hoc +
        "</td>    <td>" +
        item.giang_vien +
        "</td>    <td>" +
        item.topic_hoc +
        "</td>    <td>" +
        item.date_train +
        "," +
        item.time_start +
        "-" +
        item.time_end +
        "</td>    <td>" +
        item.hinh_thuc_hoc +
        "</td>" +
        '<td>            </button>      <button id="btn-del" class="btn btn-outline-danger" value="' +
        item.id +
        '">        <i class="far fa-trash-alt"></i>      </button>    </td>  </tr>';

      out_elm.append(rowData);
    });
  }

  $("#btn-send").click(function (e) {
    e.preventDefault();
    // alert("Ok");

    getData();

    if ($("#lop").val() == null) {
      $("#val_lop").html("Phải chọn Lớp học");
      return;
    } else {
      $("#val_lop").html("");
    }

    if ($("#mon").val() == null) {
      $("#val_mon").html("Phải chọn Môn học");
      return;
    } else {
      $("#val_mon").html("");
    }

    if ($("#topic").val() == "") {
      $("#val_topic").html("Phải chọn nhập nội dung topic");
      return;
    } else {
      $("#val_topic").html("");
    }

    if (validTopic($("#topic").val())) {
      $("#val_topic").html("");
    } else {
      $("#val_topic").html("Nội dung chưa đúng");
      return;
    }

    if ($("#gv").val() == null) {
      $("#val_giangvien").html("Phải chọn Giảng Viên");
      return;
    } else {
      $("#val_giangvien").html("");
    }

    if ($("#hinhthuc").val() == null) {
      $("#val_hinhthuc").html("Phải chọn Môn học");
      return;
    } else {
      $("#val_hinhthuc").html("");
    }

    if (ngaytrain == "") {
      $("#val_ngaytrain").html("Phải chọn ngày");
      return;
    } else {
      $("#val_ngaytrain").html("");
    }

    if (validateDate($("#ngaytrain"), $("#val_ngaytrain"))) {
      return;
    } else {
      $("#val_ngaytrain").html("");
    }

    if (timeStart == "") {
      $("#val_start").html("Không được bỏ trống");
      return;
    } else {
      $("#val_start").html("");
    }

    if (timeEnd == "") {
      $("#val_end").html("Không được bỏ trống");
      return;
    } else {
      $("#val_end").html("");
    }

    addData(
      arrData,
      lop,
      mon,
      topic,
      gv,
      hinh_thuc,
      ngaytrain,
      timeStart,
      timeEnd
    );

    console.log(arrData);

    output_result.html("");

    addRowData(output_result);

    $("table tbody").on("click", "#btn-del", delBtn);
  });

  function delBtn() {
    let id = $(this).val();
    let index = arrData.findIndex((data) => data.id == id);

    deleteObject(id, arrData);
    output_result.html("");
    addRowData(output_result);
  }

  function deleteObject(id, arrObj) {
    for (var i in arrObj) {
      if (arrObj[i].id == id) {
        if (confirm("Do you want to delete this row?")) {
          //xóa từ vị trí i 1 object
          arrObj.splice(i, 1);
          break;
        }
      }
    }
    return arrObj;
  }

  $("#btn-search").click(function (e) {
    e.preventDefault();

    arrData.forEach((list) => {
      if (list.giang_vien == $("#gvien").val()) {
        output_result.html("");
        addRowData(output_result);
      }

      // if (list.type.includes(findCake.value) == true) {
      //   show.innerHTML = "";
      //   var row = document.querySelector(".error");
      //   row.innerHTML = "Khong tim thay banh";
      // }
    });
  });
});

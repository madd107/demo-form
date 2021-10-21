$(document).ready(function () {
  // Khoi tao mang object chua data
  var arrData = [];

  var fname,
    lname,
    eMail,
    foneNumber,
    addr,
    cty,
    sta,
    zipCode,
    nameOnCard,
    creditCardNum,
    eMonth,
    eYear,
    cVV;

  var output_result = $("#result-data");

  function validData(str_input) {
    const regWord = /^[\w]+[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;
    if (regWord.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validPhone(str_input) {
    const regPhone = /^(098|097|096|094|093|092|091|090|036|035)[0-9]{7}$/;
    if (regPhone.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validZipCode(str_input) {
    const regZipCode = /^[0-9]{5}$/;
    if (regZipCode.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validCvv(str_input) {
    const regCvv = /^[0-9]{3}$/;
    if (regCvv.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validEmail(str_input) {
    const regEmail = /^[\w_\.+]*[\w_\.]\@([\w]+\.)+[\w]+[\w]$/;
    if (regEmail.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validCcNumber(str_input) {
    const regCcNumber = /^\d{4}[-]?\d{4}[-]?\d{4}[-]?\d{4}$/;
    if (regCcNumber.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validExpMonth(str_input) {
    const regExpMonth = /^[0-9]{1,2}$/;
    if (regExpMonth.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function validExpYear(str_input) {
    const regExpYear = /^[0-9]{4}$/;
    if (regExpYear.test(str_input)) {
      return true;
    } else {
      return false;
    }
  }

  function getData() {
    fname = $("#first-n").val();
    lname = $("#last-n").val();
    eMail = $("#mail").val();
    foneNumber = $("#fone").val();
    addr = $("#address").val();
    cty = $("#city").val();
    sta = $("#state option:selected").text();
    zipCode = $("#zip-code").val();
    nameOnCard = $("#name-on-card").val();
    creditCardNum = $("#cc-number").val();
    eMonth = $("#exp-month").val();
    eYear = $("#exp-year").val();
    cVV = $("#cvv").val();
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
    field_8,
    field_9,
    field_10,
    field_11,
    field_12,
    field_13
  ) {
    var obj = {
      first_name: field_1,
      last_name: field_2,
      mail: field_3,
      phone: field_4,
      address: field_5,
      city: field_6,
      state: field_7,
      zip_code: field_8,
      name_on_card: field_9,
      cc_number: field_10,
      exp_month: field_11,
      exp_year: field_12,
      cvv: field_13,
    };

    arrObj.push(obj);
  }

  function addRowData(out_elm) {
    arrData.forEach((item) => {
      let rowData =
        "<tr>    <td>" +
        item.first_name +
        "</td>    <td>" +
        item.last_name +
        "</td>    <td>" +
        item.mail +
        "</td>    <td>" +
        item.phone +
        "</td>    <td>" +
        item.address +
        "</td>    <td>" +
        item.city +
        "</td>    <td>" +
        item.state +
        "</td>    <td>" +
        item.zip_code +
        "</td>    <td>" +
        item.name_on_card +
        "</td>    <td>" +
        item.cc_number +
        "</td>    <td>" +
        item.exp_month +
        "</td>    <td>" +
        item.exp_year +
        "</td>    <td>" +
        item.cvv +
        '</td>    <td>      <button id="btn-edit" class="btn btn-outline-primary btn-sm" value="' +
        item.cc_number +
        '">        <i class="far fa-edit"></i>      </button>      <button id="btn-del" class="btn btn-outline-primary btn-sm" value="' +
        item.cc_number +
        '">        <i class="far fa-trash-alt"></i>      </button>    </td>  </tr>';

      out_elm.append(rowData);
    });
  }

  function isCheck(a, str, errMsg) {
    if (a(str.val()) == false) {
      errMsg.html("Information Invalid");
      return true;
    } else {
      return false;
    }
  }

  $("#sign-in").on("click", function (event) {
    event.preventDefault();

    getData();

    if (isCheck(validData, $("#first-n"), $("#first-nError"))) {
      return;
    } else {
      $("#first-nError").html("");
    }
    if (isCheck(validData, $("#last-n"), $("#last-nError"))) {
      return;
    } else {
      $("#last-nError").html("");
    }
    if (isCheck(validData, $("#address"), $("#addrError"))) {
      return;
    } else {
      $("#addrError").html("");
    }
    if (isCheck(validData, $("#city"), $("#cityError"))) {
      return;
    } else {
      $("#cityError").html("");
    }
    if (isCheck(validData, $("#name-on-card"), $("#name-on-cardError"))) {
      return;
    } else {
      $("#name-on-cardError").html("");
    }
    if (isCheck(validPhone, $("#fone"), $("#phoneError"))) {
      return;
    } else {
      $("#phoneError").html("");
    }

    addData(
      arrData,
      fname,
      lname,
      eMail,
      foneNumber,
      addr,
      cty,
      sta,
      zipCode,
      nameOnCard,
      creditCardNum,
      eMonth,
      eYear,
      cVV
    );

    output_result.html("");

    addRowData(output_result);
  });
});

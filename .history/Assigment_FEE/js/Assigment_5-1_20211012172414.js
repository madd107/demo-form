// Khoi tao do dai mang
// var size = prompt("Please enter lenght your array");

var arrInt = [3, 5, 10, 23, 12, 43, 65, 22, 18, 8, 53, 14];
var arrLe = [];
var arrChan = [];
var arrKhoang = [];
/*
function khaiBaoMang(size) {
  if (size < 8) {
    console.log("The length of the array is too short");
  } else {
    for (var i = 0; i < size; i++) {
      arrInt[i] = i + 1;
    }
  }

  arrInt.forEach((items) => console.log(items));
  return arrInt;
}
*/

function showChan(arrInt) {
  var sum = 0;
  console.log("Cac gia tri chan: ");
  arrInt.forEach((value) => {
    if (value % 2 == 0) {
      console.log(value);
      arrChan.push(value);
      sum += value;
    }
  });
  console.log("Sum: " + sum);
  return arrChan;
}

function showLe(arrInt) {
  var sum = 0;
  console.log("Cac gia tri le: ");
  arrInt.forEach((value) => {
    if (value % 2 != 0) {
      console.log(value);
      arrLe.push(value);
      sum += value;
    }
  });
  console.log("Sum: " + sum);
  return arrLe;
}

function showKhoang(a, b, arrInt) {
  if (a < b) {
    console.log("No support");
  } else {
    arrInt.forEach((item) => {
      if (item >= b && item <= a) {
        arrKhoang.push(item);
        console.log(item);
      }
    });
  }
  return arrKhoang;
}

function selectionSortMang(arrLe, arrChan, arrInt) {
  var pivotLe = arrLe[0];
  var pivotChan = arrChan[0];
  var pivotInt = arrInt[0];

  for (var i = 0; i < arrLe.length; i++) {
    for (var j = i + 1; j < arrLe.length; j++) {
      if (arrLe[i] > arrLe[j]) {
        pivotLe = arrLe[i];
        arrLe[i] = arrLe[j];
        arrLe[j] = pivotLe;
      }
    }
  }
  console.log("Mang le sau khi sap xep la: ");
  arrLe.forEach((le) => console.log(le));

  for (var i = 0; i < arrChan.length; i++) {
    for (var j = i + 1; j < arrChan.length; j++) {
      if (arrChan[i] > arrChan[j]) {
        pivotChan = arrChan[i];
        arrChan[i] = arrChan[j];
        arrChan[j] = pivotChan;
      }
    }
  }
  console.log("Mang le sau khi sap xep la: ");
  arrChan.forEach((chan) => console.log(chan));

  for (var i = 0; i < arrInt.length; i++) {
    for (var j = i + 1; j < arrInt.length; j++) {
      if (arrInt[i] > arrInt[j]) {
        pivotInt = arrInt[i];
        arrInt[i] = arrInt[j];
        arrInt[j] = pivotInt;
      }
    }
  }
  console.log("Mang le sau khi sap xep la: ");
  arrInt.forEach((int) => console.log(int));
}

function insertSortMang(arrLe, arrChan, arrInt) {
  for (var i = 1; i < arrLe.length; i++) {
    var pivotLe = arrLe[i];
    var j = i - 1;
    while (j >= 0 && arrLe[j] > pivotLe) {
      arrLe[j + 1] = arrLe[j];
      j = j - 1;
    }
    arrLe[j + 1] = pivotLe;
  }

  console.log("Mang le sau khi sap xep la: ");
  arrLe.forEach((le) => console.log(le));

  for (var i = 1; i < arrChan.length; i++) {
    var pivotChan = arrChan[i];
    var j = i - 1;
    while (j >= 0 && arrChan[j] > pivotChan) {
      arrLe[j + 1] = arrLe[j];
      j = j - 1;
    }
    arrChan[j + 1] = pivotChan;
  }

  console.log("Mang le sau khi sap xep la: ");
  arrChan.forEach((chan) => console.log(chan));
}

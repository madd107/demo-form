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
        arrLe[i] = arrLe[j];
        arrLe[j] = pivotLe;
      }
    }
  }
  console.log("Mang le sau khi sap xep la: ");
  arrLe.forEach((le) => console.log(le));

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
}

// Khoi tao do dai mang
// var size = prompt("Please enter lenght your array");

var arrInt = [];
function khaiBaoMang(size) {
  if (size < 8) {
    console.log("The length of the array is too short");
  } else {
    for (var i = 0; i < size; i++) {
      arrInt[i] = i + 1;
    }
  }

  arrInt.forEach((items) => document.write(items + " "));
}

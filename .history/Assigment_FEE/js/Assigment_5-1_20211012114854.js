// Khoi tao do dai mang
var size = prompt("Please enter lenght your array");

function khaiBaoMang(size) {
  var arrInt = [];

  if (size < 8) {
    document.write("The length of the array is too short");
  } else {
    for (var i = 0; i < size; i++) {
      arrInt[i] = i++;
    }
    return arrInt;
  }
}
arrInt.forEach((items) => console.log(ele + " "));

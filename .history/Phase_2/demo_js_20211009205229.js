// alert("Chào mừng bạn đến với file js của tôi");
// Khai báo biến
var ten_bien;
var soNguyen, soThuc;

//Gan gia tri
ten_bien = "Day laf chuoi gia tri cua ten Bien";
soNguyen = 1234;
soThuc = 6.5;

//HIen thi dang console

console.log("Chuoi: " + ten_bien);
console.log("So nguyen: " + soNguyen + " So thuc: " + soThuc);

// Xac dinh/check kieu du lieu cua bien
console.log("Kieu du lieu cua ten bien: " + typeof ten_bien);
console.log("Kieu du lieu cua bien soNguyen: " + typeof soNguyen);

// Kieu du lieu null
var a = null;

//Array
var arr = [3, 4, 5, 6, 3, 21, 2];

//Duyet arr - cach 1
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// Duyet arr - cach 2
arr.forEach((item, vitri) => {
  console.log("index = " + vitri + " Gia tri: " + item);
});

//Viet ham trong JS
function tenHam(bien1, bien2, bien3) {
  let sum = bien1 + bien2 + bien3;
  console.log(sum);
}

//let dùng để khai báo biến cục bộ trong funtion
// var dùng để khai báo biến toàn cục

// Hàm ko can ten ham

var myFunction = function (a, b, c) {
  return a + b + c;
};

//Object - cach 1
var SinhVien = {
  id: 1,
  name: "Dang Tien Dat",
  tuoi: 26,
};

// Object cach 2
function Student(_id, _name, _tuoi) {
  //Thuoc tinh va gan gia tri khoi tao cho thuoc tinh
  this.id = _id;
  this.name = _name;
  this.tuoi = _tuoi;

  function getName() {
    return this.name;
  }
}

alert("Chào mừng bạn đến với file js của tôi");
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

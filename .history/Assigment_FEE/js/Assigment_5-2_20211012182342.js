var name = prompt("Enter your name: ");
var birth = prompt("Input birth day: ");
var sex = prompt("Gender: ");

function showInfo() {
  var now = new Date();
  var doB = new Date(birth);

  var age = now.getFullYear() - doB.getFullYear();
  var monthBirth = now.getMonth() - doB.getMonth();

  if (m < 0 || (m === 0 && now.getDate() < doB.getDate())) {
    age--;
  }
}

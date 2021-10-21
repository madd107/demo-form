var myname = prompt("Enter your name: ");
var birth = prompt("Input birth day: ");
var sex = prompt("Gender: ");
var age;

function showInfo() {
  var now = new Date();
  var doB = new Date(birth);

  age = now.getFullYear() - doB.getFullYear();
  var monthBirth = now.getMonth() - doB.getMonth();

  if (monthBirth < 0 || (monthBirth === 0 && now.getDate() < doB.getDate())) {
    age--;
  }
  return age;
}
document.write("Name: " + myname);
document.write("Birth day: " + birth);
document.write("Age: " + age);
document.write("Gender: " + sex);

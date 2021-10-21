var user = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "emon2@gmail.com",
    gender: "Male",
    age: 58,
    salary: 1800,
  },
  {
    id: 2,
    first_name: "Mmeu",
    last_name: "Iybsa",
    email: "runbak@gmail.com",
    gender: "Male",
    age: 38,
    salary: 2800,
  },
  {
    id: 3,
    first_name: "Evinn",
    last_name: "Beahoff",
    email: "etine12@gmail.com",
    gender: "Female",
    age: 24,
    salary: 1500,
  },
  {
    id: 4,
    first_name: "Olane",
    last_name: "Nalen",
    email: "Mdueo44@gmail.com",
    gender: "Male",
    age: 19,
    salary: 800,
  },
];

var checker = user.filter((user) => user.gender === "Male" && user.age < 40);
console.log(checker);

var i = 1;

user.reduce(function (total, currentValue, currentIndex, arr) {
  console.log("# Lần lặp thứ " + i);
  console.log("# Giá trị: " + currentValue.age);
  console.log("# Chỉ mục: " + currentIndex);
  console.log("# Mảng: " + arr.forEach);
  console.log("------------------------");

  i++;
});

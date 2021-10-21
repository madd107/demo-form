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

user.forEach((u) => {
  document.write(u.id + " ");
});

var checker = user.filter((user) => user.gender === "Male" && user.age < 40);
console.log(checker);

var totalAge =
  user.reduce(function (total, currentValue) {
    return (total += currentValue.age);
  }, 0) / user.length;
console.log("Tuoi trung binh: " + totalAge);

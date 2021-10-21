var str = "";
var pattern = /^[0-9]{15}$/;

if (pattern.test(str)) {
  document.write("Ok");
} else {
  document.write("Not Ok");
}

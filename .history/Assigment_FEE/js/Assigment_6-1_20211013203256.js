// Hàm Kiểm tra số credit card – chuỗi chỉ chứa giá trị số có độ dài 16 số

function isCreditCard(str) {
  const regexCrediCard = /^[0-9]{16}$/;
  return regexCrediCard.test(str);
}
document.write(isCreditCard(8718473648194327));

// Kiểm tra một giá trị có phải là số hay không

function isNumber(str) {
  const regexNumber = /^\d+$/;
  return regexNumber.test(str);
}
document.write("<br>" + isNumber(8718473648194327));

//Kiểm tra một chuỗi có thỏa mãn định dạng email hay không?

function isEmail(str) {
  const regexEmail = /^[\w_\.+]*[\w_\.]\@([\w]+\.)+[\w]+[\w]$/;
  return regexEmail.test(str);
}
document.write("<br>" + isEmail("dangdat.111@gmail.com"));

// Kiểm tra một chuỗi có phải là chuỗi theo cú pháp url web hay không

function isurl(str) {
  const regexEmail =
    /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;
  return regexEmail.test(str);
}
document.write("<br>" + isEmail("dangdat.111@gmail.com"));

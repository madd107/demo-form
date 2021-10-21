// Hàm Kiểm tra số credit card – chuỗi chỉ chứa giá trị số có độ dài 16 số

function isCreditCard(str) {
  const regexCrediCard = /^[0-9]{16}$/;
  return regexCrediCard.test(str);
}
document.write(isCreditCard(8718473648194327));

// Kiểm tra một giá trị có phải là số hay không

function isCreditCard(str) {
  const regexCrediCard = /^d+$/;
  return regexCrediCard.test(str);
}
document.write("<br>" + isCreditCard("87a18473648194327"));

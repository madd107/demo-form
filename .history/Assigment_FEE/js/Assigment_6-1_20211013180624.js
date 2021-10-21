// Hàm Kiểm tra số credit card – chuỗi chỉ chứa giá trị số có độ dài 16 số

function isCreditCard(str) {
  const regexCrediCard = /^\d{15}$/;
  return regexCrediCard.test(str);
}
document.write(isCreditCard(2718473648194327));

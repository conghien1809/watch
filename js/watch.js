//Lượt thích
let likeCount = 10;
function like() {
  likeCount++;
  document.getElementById("likeCount").textContent = likeCount;
}
let likeCount1 = 0;
function like1() {
  likeCount1++;
  document.getElementById("likeCount1").textContent = likeCount1;
}
let likeCount2 = 7;
function like2() {
  likeCount2++;
  document.getElementById("likeCount2").textContent = likeCount2;
}
//Chức năng reply bình luận
function reply() {
  alert("Bạn cần đăng nhập để sử dụng tính năng này");
}
//Chức năng đánh giá bình luận
function danhgia() {
  alert("Bạn cần mua sản phẩm này để đánh giá!!");
}
//Chức năng lấy sô lượng sách bỏ vào giỏ hàng
function giohang() {
  let sluong = document.getElementById("sl").value;
  let errorgh = document.getElementById("errorgh");
  if (sluong.trim() == "") {
    errorgh.innerHTML = "Nhập số lượng cần mua";
    return false;
  }
  errorgh.innerHTML = "";
  alert("Thêm" + " " + sluong + " " + "đơn hàng vào giỏ thành công");
  return true;
}

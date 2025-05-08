function goingay() {
  alert("Chức năng này chỉ hỗ trợ trên thiết bị điện thoại!!");
}

function dangkytin() {
  let ten = document.getElementById("yName").value;
  let errorname = document.getElementById("errorname");
  let rbten = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  if (ten.trim() == "") {
    errorname.innerHTML = "* Phải nhập tên để đăng ký";
    return false;
  }
  if (!rbten.test(ten)) {
    errorname.innerHTML = "* Tên bắt đầu chữ hoa gồm Họ và tên";
    return false;
  }
  errorname.innerHTML = "";

  let e1 = document.getElementById("yEmail").value;
  let errore1 = document.getElementById("errore1");
  let rbe1 = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (e1.trim() == "") {
    errore1.innerHTML = "* Không được rỗng";
    return false;
  }
  if (!rbe1.test(e1)) {
    errore1.innerHTML = "* Phải nhập đúng form abc@abc.abc";
    return false;
  }
  errore1.innerHTML = "";
  alert(
    "Cảm ơn bạn đã tin tưởng chúng tôi! Chúng tôi sẽ cập nhật tin tức thường xuyên để bạn theo dõi"
  );
  window.location.href = "index.html";
  return true;
}

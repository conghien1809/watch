function dangkytk() {
  let dangnhap = document.getElementById("txtdn").value;
  let errorDN = document.getElementById("errorDN");
  let rbdn = /^[a-zA-Z0-9_-]{3,20}$/;
  if (dangnhap.trim() == "") {
    errorDN.innerHTML = "* Không được để rỗng";
    return false;
  }
  if (dangnhap.length < 5) {
    errorDN.innerHTML = "* Phải có ít nhất 5 ký tự";
    return false;
  }
  if (!rbdn.test(dangnhap)) {
    errorDN.innerHTML = "* Tên đăng nhập phải là các ký số và chữ";
    return false;
  }
  errorDN.innerHTML = "*";

  let sdt = document.getElementById("txtsdt").value;
  let errorsdt = document.getElementById("errorsdt");
  let rbsdt = /^(09|03|07|06|05|04)[0-9]{8}$/;
  if (sdt.trim() == "") {
    errorsdt.innerHTML = "* Không được để rỗng";
    return false;
  }
  if (!rbsdt.test(sdt)) {
    errorsdt.innerHTML =
      "* Phải là 10 số bắt đầu từ các đầu số 03, 04, 05, 06, 07, 09";
    return false;
  }
  errorsdt.innerHTML = "*";

  let emaildn = document.getElementById("txtemail").value;
  let erroremail = document.getElementById("erroremail");
  let rbemail = /^[a-zA-Z0-9]+\@[a-zA-Z0-9]{5}\.[a-zA-Z]{2,}$/;
  if (emaildn.trim() == "") {
    erroremail.innerHTML = "* Không được để rỗng";
    return false;
  }
  if (!rbemail.test(emaildn)) {
    erroremail.innerHTML = "* Phải đúng form nhập. VD: abc@abc.abc";
    return false;
  }
  erroremail.innerHTML = "*";

  let matkhau = document.getElementById("txtmk").value;
  let errormk = document.getElementById("errormk");
  if (matkhau.length < 8) {
    errormk.innerHTML = "* Mật khẩu phải chứa ít nhất 8 ký tự";
    return false;
  }
  if (!/[A-Z]/.test(matkhau)) {
    errormk.innerHTML = "* Phải chứa ít nhất 1 ký tự in hoa";
    return false;
  }
  if (!/\d/.test(matkhau)) {
    errormk.innerHTML = "* Phải chứa ít nhất 1 ký tự số";
    return false;
  }
  errormk.innerHTML = "*";

  let nhaplaimk = document.getElementById("txtnlmk").value;
  let errorlai = document.getElementById("errorlai");
  if (nhaplaimk.trim() == "") {
    errorlai.innerHTML = "* Không được rỗng";
    return false;
  }
  if (nhaplaimk !== matkhau) {
    errorlai.innerHTML = "* Mật khẩu không khớp";
    return false;
  }
  errorlai.innerHTML = "*";
  alert(
    "\nTài khoản: " +
      dangnhap +
      "\nSĐT: " +
      sdt +
      "\nEmail:" +
      emaildn +
      "\nMật khẩu: " +
      matkhau +
      "\nTài khoản đã đăng ký thành công"
  );
  window.location.href = "index.html";
}

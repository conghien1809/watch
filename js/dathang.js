$(document).ready(function () {
  var i = 1;
  $("#dangky").click(function () {
    $("#myModal").modal();
  });

  $("#chon").change(function () {
    var tuan = $(this).val();
    var gia = 0;

    switch (tuan) {
      case "Explorer":
        gia = 14000;
        break;
      case "Yacht-Master":
        gia = 18000;
        break;
      case "Milgauss":
        gia = 20000;
        break;
      default:
        gia = 0;
        break;
    }
    $("#txtHP").val(gia.toLocaleString() + " USD");
  });

  var hoten = $("#txtHT");
  var e1 = $("#e1");
  function ktten() {
    var rbt = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
    if (hoten.val().trim() == "") {
      e1.html("* Không được rỗng");
      return false;
    }
    if (hoten.val().trim().split(/\s+/).length < 2) {
      e1.html("* Ít nhất 2 từ trở lên");
      return false;
    }
    if (!rbt.test(hoten.val().trim())) {
      e1.html("* Mỗi từ phải viết hoa ký tự đầu");
      return false;
    }
    e1.html("*");
    return true;
  }
  hoten.blur(ktten);

  var sdt = $("#txtSDT");
  var e2 = $("#e2");
  function ktsdt() {
    var rbs = /^(09|03|07|06|05|04)[0-9]{8}$/;
    if (sdt.val() == "") {
      e2.html("* Không được rỗng");
      return false;
    }
    if (!rbs.test(sdt.val())) {
      e2.html(
        "* Phải nhập số bắt đầu từ 09, 08, 07, 06, 05, 04, 03 và theo sau là 8 số"
      );
      return false;
    }
    e2.html("*");
    return true;
  }
  sdt.blur(ktsdt);
  var e3 = $("#e3");
  var ngaySinhInput = $("#txtDate");
  function ktns() {
    var ngaySinhValue = ngaySinhInput.val();

    // Chuyển đổi giá trị ngày sinh thành đối tượng Date
    var birthDate = new Date(ngaySinhValue);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    if (ngaySinhValue == "") {
      e3.html("* Không được rỗng");
      return false;
    }
    // Kiểm tra tuổi nằm trong khoảng từ
    if (!(age > 18)) {
      e3.html("* Phải từ 18 tuổi trở lên!");
      return false;
    }

    e3.html("*");
    return true;
  }
  ngaySinhInput.blur(ktns);

  var diachi = $("#txtDC");
  var e4 = $("#e4");
  function ktDC() {
    if (diachi.val() == "") {
      e4.html("* Phải nhập địa chỉ");
      return false;
    }
    e4.html("*");
    return true;
  }
  diachi.blur(ktDC);

  var email1 = $("#txtE");
  var e5 = $("#e5");
  function ktE() {
    var rbe = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    if (email1.val() == "") {
      e5.html("* Phải nhập Email");
      return false;
    }
    if (!rbe.test(email1.val())) {
      e5.html("* Phải đúng dạng abc@abc.abc");
      return false;
    }
    e5.html("*");
    return true;
  }
  email1.blur(ktE);

  $("#btnSave").click(function () {
    if (!ktten() || !ktsdt() || !ktns() || !ktDC() || !ktE()) {
      $("#thongbao").html("* Vui lòng nhập thông tin đầy đủ");
      return false;
    }
    var sdt2 = sdt.val();
    var th = $("#chon").val();
    var tien = $("#txtHP").val();
    alert(
      "\nĐÃ ĐẶT THÀNH CÔNG" +
        "\nSĐT: " +
        sdt2 +
        "\nTên hàng: " +
        th +
        "\nGiá dự kiến: " +
        tien
    );
    $("#myModal").modal("hide");
    return true;
  });
});

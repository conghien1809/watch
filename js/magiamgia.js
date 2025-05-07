function nhanma() {
    let email3 = document.getElementById('emailne').value;
    let e1 = document.getElementById('e1');
    let rbe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/

    if (email3.trim() == '') {
        e1.innerHTML = '* Không được để trống';
        return false;
    }

    if (!rbe.test(email3)) {
        e1.innerHTML = '* Email phải đúng dạng';
        return false;
    }

    e1.innerHTML = '*';

    let ma = document.getElementById('code').value;
    let e2 = document.getElementById('e2');
    let rbc = /^[a-zA-Z]{3}-[0-9]{4}$/

    if (ma.trim() == '') {
        e2.innerHTML = '* Không được để trống';
        return false;
    }

    if (!rbc.test(ma)) {
        e2.innerHTML = 'Mã không hợp lệ';
        return false;
    }

    e2.innerHTML = '';
    alert('\n CHÚC MỪNG BẠN ĐÃ NHẬN ƯU ĐÃI 30% TỪ SHOP' +
    '\n Chúng tôi đã gửi mã giảm giá vào địa chỉ Email của bạn: ' + email3 + '\nCảm ơn bạn đã đồn hành cùng chúng tôi!!' )
    window.location.href = 'magiamgia.html'
}

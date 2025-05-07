function dangnhap(){
    let tk = document.getElementById('tendn').value
    let errortk = document.getElementById('errortk')
    let rbtk = /^[a-zA-Z0-9_-]{3,20}$/
    if(tk.trim()==''){
        errortk.innerHTML = '* Phải nhập tên tài khoản đã đăng ký'
        return false
    }
    if(tk.length < 5){
        errortk.innerHTML = '* Phải có ít nhất 5 ký tự'
        return false
    }
    if(!rbtk.test(tk)){
        errortk.innerHTML = '* Tên đăng nhập phải là các ký số hoặc chữ'
        return false
    }
        errortk.innerHTML = ''

    let mk = document.getElementById('matkhau').value
    let errormk = document.getElementById('errormk')
    if(mk.length < 8){
        errormk.innerHTML = '* Mật khẩu phải chứa ít nhất 8 ký tự'
        return false
    }
    if(!/[A-Z]/.test(mk)){
        errormk.innerHTML = '* Phải chứa ít nhất 1 ký tự in hoa'
        return false
    }
    if(!/\d/.test(mk)){
        errormk.innerHTML = '* Phải chứa ít nhất 1 ký tự số'
        return false
    }
    errormk.innerHTML =''
    alert('Bạn đã đăng nhập thành công: ' + '\nTài khoản: ' + tk + '\nMật khẩu: ' + mk)
    window.location.href = 'home.html';
}
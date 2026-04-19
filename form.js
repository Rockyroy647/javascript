let validation=() => {
    let name = document.querySelector('#username').value.trim()
    let phone = document.querySelector('#num').value.trim()
    let email = document.querySelector('#useremail').value.trim()
    let password = document.querySelector('#userpass').value.trim()
    let cpassword = document.querySelector('#cpass').value.trim()
   

    let errname = document.querySelector('#errname')
    let errnum = document.querySelector('#num')
    let erremail = document.querySelector('#erremail')
    let errpass = document.querySelector('#errpass')
    let errcpass = document.querySelector('#errcpass')




if (name = "") {
    errname.innerHTML = " please enter name"
    return false
}
 if (Num.length=10){
    errnum.innerHTML = "please enter 10 digit only "
}
 if (isNaN(num))
    {
    errnum.innerHTML="please enter valid number"
    return false
}


if (!(email.includes('@') && email.includes('.com') ) ){
    erremail.innerHTML = "please enter valid email"
}
if (!(pass.match(/[123456789]/)&&
pass.match(/[@#$%^7*]/)&&
pass.match(/[]a-z/)&&
pass.match(/[A-Z]/) )){
    errpass.innerHTML = "please enter password"
}


else if (cpassword== ""){
    errcpass.innerHTML = "please enter cpassword"
}







alert =  ('form submit successfull'); 
}
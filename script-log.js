const signUp = document.getElementById('sign-up'),
      signIn = document.getElementById('sign-in'),
      loginIn = document.getElementById('log-in'),
      loginUp = document.getElementById('log-up')

      signUp.addEventListener('click',()=>{
        loginIn.classList.remove('block')
        loginUp.classList.remove('none')

        loginIn.classList.add('none')
        loginUp.classList.add('block')
      })

      signIn.addEventListener('click',()=>{
        loginIn.classList.remove('none')
        loginUp.classList.remove('block')

        loginIn.classList.add('block')
        loginUp.classList.add('none')
      })
      var Tu;
      var Tp;
 function create(){
  var admin=document.getElementById('admin').value;
  var pass=document.getElementById('pass').value;
  if(admin != "" ){
    Tu=admin
    Tp=pass
  document.getElementById("tata").innerHTML=admin
  alert('welcome, '+admin+' on well-being.');
  return true
  }
  else{
    if(admin == "") {
        document.getElementById("adminn").style.borderBlockColor="red";
        document.getElementById("adminn").focus();
        }
    if(pass == "") {
          document.getElementById("passs").style.borderBlockColor="red";
          document.getElementById("passs").focus();
          }
  }
}

 function validate(){
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
if(username == Tu & password == Tp & password != "" & username != ""){
alert('thanks for Signin in our website')
}
else{
          document.getElementById('user').style.borderBlockColor="red";
          document.getElementById("user").focus();
          document.getElementById('word').style.borderBlockColor="red";
          document.getElementById("word").focus();
}


}
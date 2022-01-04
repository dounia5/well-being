function requiredElement() {
    var fname = document.getElementById("fname").value;
    var mail = document.getElementById("mail").value;
    var Datedenaissance = document.getElementById("Datedenaissance").value;
    var tel = document.getElementById("tel").value;
    if(fname== "" & Datedenaissance == "" & mail == "" & tel == ""){
    if(fname== "") {
    document.getElementById("fname").style.borderBlockColor="red";
    document.getElementById("fname").focus();
    }
    if(Datedenaissance == "") {
        document.getElementById("Datedenaissance").style.borderBlockColor="red";
        document.getElementById("Datedenaissance").focus();
        }
    if(mail == "") {
    document.getElementById("mail").style.borderBlockColor="red";
    document.getElementById("mail").focus();
    }
    if(tel == "") {
    document.getElementById("tel").style.borderBlockColor="red";
    document.getElementById("tel").focus();
    } return false}
    else{
    return true;}
    }
    function fullnameValidate() { 
        var letters = /^[A-Za-z]+$/;
        var fname = document.getElementById("fname");
        if(fname.value.match(letters & " ")) {
        return true;
        } else {
        document.getElementById("nom").style.borderBlockColor="red";
        document.getElementById("nom").focus();
        document.getElementById("faux").write("letters only");
        return false;
        }
        }
    function validateEmail(){
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(champsText.value.match(mailformat)){
            return true;
            }else{
            document.getElementById("mail").style.borderBlockColor="red";
            document.form.mail.focus();
            return false;
            }
            }
    function test(){
        var w=window.open('quizz-depression.html');
        if (!requiredElement() | !fullnameValidate() | !validateEmail())
        {  w=window.close('quizz-depression.html');
            return false;}
        else{ 
            w=window.open('quizz-depression.html');
            w=window.close('quizz2.html');
        }
    }
    function note1Validate() {
    var m1 = document.getElementById("m1");
    var n1 = m1.value;
    if( n1=="" ||isNaN(n1) || n1 < 0 || n1 > 20) {
    alert("Note de M1 n'est pas valide!");
    document.getElementById("m1").style.backgroundColor="red";
    document.getElementById("m1").focus();
    return false;
    }else{
    document.getElementById("m1").style.backgroundColor="green";
    return true;
    }
    }
    function note2Validate() {
    var m2 = document.getElementById("m2");
    var n2 = m2.value;
    if( n2=="" ||isNaN(n2) || n2 < 0 || n2 > 20) {
    alert("Note de M2 n'est pas valide!");
    document.getElementById("m2").style.backgroundColor="red";
    document.getElementById("m2").focus();
    return false;
    }else{
    document.getElementById("m2").style.backgroundColor="green";
    return true;
    }
    }
    function note3Validate() {
    var m3 = document.getElementById("m3");
    var n3 = m3.value;
    if( n3=="" ||isNaN(n3) || n3 < 0 || n3 > 20) {
    alert("Note de M3 n'est pas valide!");
    document.getElementById("m3").style.backgroundColor="red";
    document.getElementById("m3").focus();
    return false;
    }else{
    document.getElementById("m3").style.backgroundColor="green";
    return true;
    }
    }
            
    function validateForm(){
    if (!requiredElement()){
    return false;
    }
    else{
    confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
    }
    }
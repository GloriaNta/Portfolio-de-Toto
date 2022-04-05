Window.location.href = "signup.html";

// MAIL
function isMailValid(mail){
    if(mail.length<8) return false;
    if(mail.indexOf('@')<0) return false;
    if(mail.split('@')[1].indexOf('.')<0) return false;
    return true;
}
if (isMailValid(mail) == true){
    alert("mail valid");
}else{
    alert("Invalid mail");
}

// MOT DE PASSE
function confirmPassword(Password) {
    var pass = document.getElementById("Password").value;
    var passconf = document.getElementById("Confirm Password").value;
    if(pass == passconf) {
      alert("Sign In");
      locate="chat.html"
      return false;
    } else {
      alert("wrong password");
      return false;
    }
}
  
Window.location.href = "index.html";

// SHOW PASSWORD
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



// LOGIN
function login() {
  var user = document.getElementById("Username").value;
  var pass = document.getElementById("Password").value;
  if(user == "" && pass == "") {
    alert("Logged In");
    locate="chat.html"
    return false;
  } else {
    alert("wrong user/pass");
    return false;
  }
}

function formvalidate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = "";

  if (name.length < 5) {
    text = "please complete your name";
    error.innerHTML = text;
    return false;
  } else if (email.indexOf("@") == -1 || email.length < 8) {
    text = "please complete your email";
    error.innerHTML = text;
    return false;
  } else if (password.length < 6) {
    text = "please write password a lot of 6 Numbers";
    error.innerHTML = text;
    return false;
  } else {
    alert("done");
    return true;
  }
}

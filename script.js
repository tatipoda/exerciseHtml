function checkPassword(){
let input = document.getElementById("passwordInput").value;
let message = document.getElementById("message");


if(input === "iLoveMyBF") {
  window.location.href = "pageArina.html"; //right pass Arina
}
else if (input === "ForTeacher") {
 window.location.href = "pageProff.html"; //right pass Teacher
}
else if (input === "main"){
    window.location.href ="index.html"; //main page pass
}
else{
 message.textContent = "Go away or try other password"
 message.style.color = "red";

}

}
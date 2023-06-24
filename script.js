const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = decodeURI.getElementById('signinBtn');
const signupBtn = decodeURI.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "sig up";
    nameField.style.display = "block";
}
siginpBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}
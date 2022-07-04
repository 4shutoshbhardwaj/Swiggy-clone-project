document.querySelector("form").addEventListener("submit",loginFn);
document.querySelector("#link").addEventListener("click",signupfn);

// var tu=JSON.parse(localStorage.getItem("AllUserData"))||[];
// var e=document.querySelector("email").value;
//     var d=document.querySelector("password").value;
// tu.forEach(el => {
//     if(el.email==e&&el.password==d){
//         var q=document.querySelector("#getIn");
//         q.style.visibility="visible";
//     }

// });

function signupfn(){
    window.location.href="../Signup/signup.html";
}

var registeredUsers = JSON.parse(localStorage.getItem("AllUserData"))||[];
function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPassword = document.querySelector("#password").value;
    if(registeredUsers.length==0){
        localStorage.setItem("AllUserData",JSON.stringify(registeredUsers));
        alert("Account does not exist, SignUp Insted?");
        window.location.href="signup.html";
        return;
    }
    var t=false;
    var tt=false;
    registeredUsers.forEach(function(userData){
        if(userData.email == enteredEmail && userData.password == enteredPassword) {
            alert("LOGIN SUCCESS");
            localStorage.setItem("temp",JSON.stringify(userData));
            window.location.href="homePage.html";
            t=true;
        } 
        if(userData.email == enteredEmail&&!t) {
            tt=true;
        }
    });
    if(!t&&tt){
        alert("Invalid Password");
        t=true;
    }
    if(!t){
        alert("Invalid Email or Password");
    }
}
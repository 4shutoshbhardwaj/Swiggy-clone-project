document.querySelector("form").addEventListener("submit", signupFn);
// document.querySelector("#link").addEventListener("click",loginfn);

function loginfn() {
    window.location.href = "../Signin/signin.html";
}

var AllUserData;
// if(localStorage.getItem('AllUserData') === null) {
//     AllUserData = []
// } else {
//     AllUserData = JSON.parse(localStorage.getItem('AllUserData'));
// }
var AllUserData = JSON.parse(localStorage.getItem('AllUserData')) || [];
function signupFn() {
    event.preventDefault();
    var userData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        city:document.getElementById("city").value
    };
    var t = false;
    // console.log(userData);
    AllUserData.forEach(el => {
        if (userData.mobile == el.mobile && userData.email == el.email) {
            t = true;
        }
    });
    // console.log(t);
    if (!t) {
        AllUserData.push(userData);
        localStorage.setItem("AllUserData", JSON.stringify(AllUserData));
        alert("Signed Succesfully !");
        window.location.href = "index.html";
    }else{
        alert("Already have an account!, Please Login");
        window.location.href = "index.html";
    }

}
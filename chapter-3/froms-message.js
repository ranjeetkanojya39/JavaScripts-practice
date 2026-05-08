let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
        document.querySelector("#emailError").style.color = "red";
        isValid = false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.color = "red";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Form submitted successfully!";
        document.querySelector("#resultMessage").style.color = "green";

    }    

});
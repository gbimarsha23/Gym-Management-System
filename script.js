// Login Form Validation
function loginValidation() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        alert("Please fill all login fields!");
        return false;
    }

    alert("Login successful!");
    return true; // allows redirection to index.html
}

// Register Form Validation
function registerValidation() {
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    if (username === "" || password === "") {
        alert("Please fill all registration fields!");
        return false;
    }

    alert("Registration successful!");
    return true; // allows redirection to index.html
}

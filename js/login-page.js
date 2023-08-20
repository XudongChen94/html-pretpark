const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Harry" && password === "Potter") {
        alert("U bent succesvol ingelogd");
        location.reload();
        window.location.href = "../Pretpark/bekijk-fotos.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

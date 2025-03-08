document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;
            let user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                document.querySelector(".btn").innerText = "Accesso...";
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                alert("Email o password errata!");
            }
        });
    }
});

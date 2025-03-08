document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("registerName").value;
            let email = document.getElementById("registerEmail").value;
            let password = document.getElementById("registerPassword").value;

            if (localStorage.getItem(email)) {
                alert("Questa email è già registrata. Prova ad accedere.");
            } else {
                localStorage.setItem(email, JSON.stringify({ name, password }));
                document.querySelector(".btn").innerText = "Registrazione...";
                setTimeout(() => {
                    alert("Registrazione completata! Ora puoi accedere.");
                    window.location.href = "login.html";
                }, 1500);
            }
        });
    }
});

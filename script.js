document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    // Gestione login
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;
            let user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                document.querySelector(".btn").innerText = "Accesso...";

                // Animazione durante il login
                document.body.classList.add('animating');
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500); // Dopo 1500 ms, redireziona alla home
            } else {
                alert("Email o password errata!");
            }
        });
    }

    // Gestione del menu hamburger
    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Aggiungi animazione durante il passaggio da login a registrazione
    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
        registerLink.addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.add('animating');
            setTimeout(function () {
                window.location.href = "register.html";
            }, 500); // Dopo 500 ms di animazione, carica la pagina di registrazione
        });
    }

    // Aggiungi animazione durante il passaggio da registrazione a login
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
        loginLink.addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.add('animating');
            setTimeout(function () {
                window.location.href = "login.html";
            }, 500); // Dopo 500 ms di animazione, carica la pagina di login
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Sezione Verifica
    const verificationMessage = document.getElementById("verification-message");
    const verifyButton = document.getElementById("verify-button");

    // Mostra il messaggio di verifica quando la pagina è caricata
    verificationMessage.style.display = "block";

    // Gestione del click sul pulsante di verifica
    verifyButton.addEventListener("click", function() {
        alert("Verifica completata. Ora puoi continuare!");
        verificationMessage.style.display = "none"; // Nascondi il messaggio di verifica
    });

    // Scroll verso la sezione abbonamenti quando si preme "Inizia Ora"
    const startNowButton = document.getElementById("start-now-button");
    const abbonamentiSection = document.getElementById("abbonamenti");

    startNowButton.addEventListener("click", function() {
        abbonamentiSection.scrollIntoView({
            behavior: "smooth" // Aggiunge un'animazione di scorrimento
        });
    });
});


// ====================== SCRIPT COMMUN (Connexion + Inscription) ======================

document.addEventListener('DOMContentLoaded', () => {

    // ====================== TOGGLE MOT DE PASSE ======================
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

    // ====================== PAGE CONNEXION ======================
    const loginButton = document.getElementById('loginButton');
    
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const account = document.getElementById('account').value.trim();
            const password = document.getElementById('password').value.trim();

            if (account === '' || password === '') {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            alert("✅ Connexion réussie !\nRedirection vers l'espace envoi...");

            // Redirection vers la future page d'envoi de colis
            setTimeout(() => {
                window.location.href = "envoyer.html";   // ← Change le nom si tu veux
            }, 1500);
        });
    }

    // ====================== PAGE INSCRIPTION ======================
    const registerButton = document.getElementById('registerButton');
    
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!nom || !prenom || !email || !password || !confirmPassword) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            if (password !== confirmPassword) {
                alert("Les mots de passe ne correspondent pas !");
                return;
            }

            if (password.length < 6) {
                alert("Le mot de passe doit contenir au moins 6 caractères !");
                return;
            }

            alert("✅ Inscription réussie !\nBienvenue " + prenom + " " + nom + "\n\nVous allez être redirigé vers la page de connexion.");

            // Après inscription → on redirige vers la page de connexion
            setTimeout(() => {
                window.location.href = "index2.html";
            }, 1800);
        });
    }

    // ====================== SOUMISSION AVEC TOUCHE ENTRÉE ======================
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (loginButton) loginButton.click();
                if (registerButton) registerButton.click();
            }
        });
    });

});
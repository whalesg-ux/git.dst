// ==================== SCRIPT COMMUN (Connexion + Inscription) ====================

document.addEventListener('DOMContentLoaded', () => {

    // ====================== TOGGLE MOT DE PASSE ======================
    const toggleIcons = document.querySelectorAll('.toggle-password');

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.previousElementSibling; // L'input juste avant l'icône

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

            // Ici tu pourras plus tard faire une vraie connexion (API, etc.)
            alert("Connexion en cours... ✅");
            // window.location.href = "accueil.html"; // Redirection après connexion
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

            // Vérification des champs vides
            if (!nom || !prenom || !email || !password || !confirmPassword) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            // Vérification de la correspondance des mots de passe
            if (password !== confirmPassword) {
                alert("Les mots de passe ne correspondent pas !");
                return;
            }

            // Vérification de la longueur du mot de passe
            if (password.length < 6) {
                alert("Le mot de passe doit contenir au moins 6 caractères !");
                return;
            }

            // Simulation d'inscription réussie
            alert("Inscription réussie ! 🎉\nBienvenue " + prenom + " " + nom);
            // window.location.href = "index.html"; // Redirection vers la page de connexion
        });
    }

    // Optionnel : Soumettre avec la touche Entrée
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
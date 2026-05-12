// ====================== SCRIPT PAGE CONNEXION ======================

document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.getElementById('loginButton');
    const accountInput = document.getElementById('account');
    const passwordInput = document.getElementById('password');

    // ====================== CONNEXION ======================
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            
            const account = accountInput.value.trim();
            const password = passwordInput.value.trim();

            // Validation
            if (account === '' || password === '') {
                showMessage("⚠️ Veuillez remplir tous les champs", "error");
                return;
            }

            // Simulation de connexion (à remplacer plus tard par une vraie API)
            if (account.length < 5) {
                showMessage("❌ Numéro de compte invalide", "error");
                return;
            }

            if (password.length < 4) {
                showMessage("❌ Mot de passe trop court", "error");
                return;
            }

            // Simulation de succès
            showMessage("✅ Connexion réussie ! Redirection en cours...", "success");

            // Redirection après 1.5 secondes (à modifier selon tes besoins)
            setTimeout(() => {
                window.location.href = "index1.html"; // Page d'accueil
            }, 1500);
        });
    }

    // ====================== AFFICHAGE MESSAGE TEMPORAIRE ======================
    function showMessage(message, type) {
        // Supprime l'ancien message s'il existe
        const oldMsg = document.querySelector('.message');
        if (oldMsg) oldMsg.remove();

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.style.padding = '12px 20px';
        messageDiv.style.margin = '15px 0';
        messageDiv.style.borderRadius = '12px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = '600';

        if (type === "success") {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        }

        messageDiv.textContent = message;
        loginButton.parentElement.insertAdjacentElement('afterend', messageDiv);

        // Supprime le message après 4 secondes
        setTimeout(() => {
            messageDiv.remove();
        }, 4000);
    }

    // ====================== OPTION : Soumission avec Entrée ======================
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loginButton.click();
            }
        });
    }

    // ====================== TOGGLE MOT DE PASSE (si tu ajoutes l'icône plus tard) ======================
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.type = "password";
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

});
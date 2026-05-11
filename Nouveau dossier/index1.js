// ====================== SCRIPT PRINCIPAL - J'VAIS AUSSI ======================

document.addEventListener('DOMContentLoaded', () => {

    // ==================== FORMULAIRE D'AVIS ====================
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const commentInput = document.getElementById('comment');
            const ratingInput = document.querySelector('input[name="rating"]:checked');

            // Validation
            if (!nameInput.value.trim() || !commentInput.value.trim() || !ratingInput) {
                alert("⚠️ Veuillez remplir tous les champs et choisir une note !");
                return;
            }

            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();
            const rating = ratingInput.value;

            // Création de la carte d'avis
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');

            reviewCard.innerHTML = `
                <div class="review-name">${name}</div>
                <div class="review-stars">${'★'.repeat(parseInt(rating))}</div>
                <div class="review-comment">"${comment}"</div>
                <small>${new Date().toLocaleDateString('fr-FR')} • ${new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}</small>
            `;

            // Ajouter le nouvel avis en premier
            reviewsContainer.prepend(reviewCard);

            // Réinitialiser le formulaire
            reviewForm.reset();

            // Message de succès temporaire
            const success = document.createElement('p');
            success.style.color = '#27ae60';
            success.style.textAlign = 'center';
            success.style.marginTop = '15px';
            success.style.fontWeight = 'bold';
            success.textContent = '✅ Merci pour votre avis ! Il a été publié.';
            reviewForm.appendChild(success);

            setTimeout(() => success.remove(), 4000);
        });
    }

    // ==================== BOUTONS HERO ====================
    const btnSuivre = document.querySelector('.btn6');
    const btnEnvoyer = document.querySelector('.btn7');

    if (btnSuivre) {
        btnSuivre.addEventListener('click', () => {
            alert("🔍 La fonctionnalité de suivi arrive bientôt !");
            // window.location.href = "suivi.html"; // À activer plus tard
        });
    }

    if (btnEnvoyer) {
        btnEnvoyer.addEventListener('click', () => {
            alert("📦 Redirection vers la page d'envoi de colis...");
            // window.location.href = "envoyer.html"; // À activer plus tard
        });
    }

    // ==================== BOUTONS HEADER ====================
    const btnInscrire = document.querySelector('.btn');
    const btnConnecter = document.querySelector('.btn1');

    if (btnInscrire) {
        btnInscrire.addEventListener('click', () => {
            window.location.href = "inscription.html";
        });
    }

    if (btnConnecter) {
        btnConnecter.addEventListener('click', () => {
            window.location.href = "index.html"; // ou ta page de connexion
        });
    }

    // ==================== SCROLL FLUIDE ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
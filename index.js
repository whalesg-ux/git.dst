// ====================== SCRIPT PRINCIPAL ======================

document.addEventListener('DOMContentLoaded', () => {

    // ====================== BOUTON "SE CONNECTER" ======================
    const btnConnecter = document.querySelector('.btn1');
    
    if (btnConnecter) {
        btnConnecter.addEventListener('click', () => {
            window.location.href = "index2.html";   // ← Page de connexion
        });
    }

    // ====================== BOUTON "S'INSCRIRE" ======================
    const btnInscrire = document.querySelector('.btn');
    
    if (btnInscrire) {
        btnInscrire.addEventListener('click', () => {
            window.location.href = "inscription.html";
        });
    }

    // ====================== BOUTONS HERO ======================
    const btnSuivre = document.querySelector('.btn6');
    const btnEnvoyer = document.querySelector('.btn7');

    if (btnSuivre) {
        btnSuivre.addEventListener('click', () => {
            alert("🔍 Fonction de suivi bientôt disponible !");
        });
    }

    if (btnEnvoyer) {
        btnEnvoyer.addEventListener('click', () => {
            alert("📦 Redirection vers la page d'envoi...");
        });
    }

    // ====================== FORMULAIRE AVIS ======================
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // ... (ton code d'avis reste ici)
            const name = document.getElementById('name').value.trim();
            const comment = document.getElementById('comment').value.trim();
            const ratingInput = document.querySelector('input[name="rating"]:checked');

            if (!name || !comment || !ratingInput) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');
            reviewCard.innerHTML = `
                <div class="review-name">${name}</div>
                <div class="review-stars">${'★'.repeat(ratingInput.value)}</div>
                <div class="review-comment">"${comment}"</div>
            `;
            reviewsContainer.prepend(reviewCard);
            reviewForm.reset();
        });
    }
});
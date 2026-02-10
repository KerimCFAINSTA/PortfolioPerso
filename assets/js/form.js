/* ================================================
   FORMULAIRE DE CONTACT
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupération des valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validation basique
            if (!name || !email || !subject || !message) {
                alert('⚠️ Veuillez remplir tous les champs');
                return;
            }

            // Validation email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ Veuillez entrer une adresse email valide');
                return;
            }

            // Message de confirmation
            alert(`✅ Merci ${name} ! Votre message a été envoyé avec succès.\n\nJe vous répondrai dans les plus brefs délais.`);
            
            // Reset du formulaire
            contactForm.reset();
        });
    }
});

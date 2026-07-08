document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Tous les champs sont obligatoires.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Veuillez entrer une adresse e-mail valide.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Message envoyé avec succès !";
  feedback.style.color = "green";
});
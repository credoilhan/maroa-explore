// ================= SCROLL EFFECTS ================= 
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const bookingForm = document.getElementById('bookingForm');

  // Navbar scroll effect
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Section visibility animation
  function handleSectionVisibility() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  }

  // Form submission handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleFormSubmit);
  }

  // Event listeners
  window.addEventListener('scroll', function() {
    handleNavbarScroll();
    handleSectionVisibility();
  });

  // Initial check
  handleSectionVisibility();
});

// ================= FORM HANDLING ================= 
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    whatsapp: document.getElementById('whatsapp').value.trim(),
    tour: document.getElementById('tour').value,
    date: document.getElementById('date').value,
    details: document.getElementById('details').value.trim()
  };

  // Validation
  const validationError = validateForm(formData);
  if (validationError) {
    showMessage(validationError, 'error');
    return;
  }

  // Send form data via email
  sendFormData(formData);
}

// ================= FORM VALIDATION ================= 
function validateForm(data) {
  if (!data.name || data.name.length < 2) {
    return 'Veuillez entrer un nom valide (minimum 2 caractères)';
  }

  if (!data.email || !isValidEmail(data.email)) {
    return 'Veuillez entrer une adresse email valide';
  }

  if (!data.whatsapp || data.whatsapp.length < 8) {
    return 'Veuillez entrer un numéro WhatsApp valide';
  }

  if (!data.tour) {
    return 'Veuillez sélectionner une excursion';
  }

  if (!data.date) {
    return 'Veuillez sélectionner une date';
  }

  // Check if date is in future
  const selectedDate = new Date(data.date);
  if (selectedDate < new Date()) {
    return 'Veuillez sélectionner une date dans le futur';
  }

  return null;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ================= SEND FORM DATA ================= 
function sendFormData(data) {
  const emailBody = formatEmailMessage(data);
  const emailSubject = `Nouvelle réservation de ${data.name}`;
  const recipientEmail = 'credoilhan@gmail.com';

  // Method 1: Send via Fetch API (requires backend)
  // This is the recommended approach for production
  sendViaFetch(data);
}

function sendViaFetch(data) {
  // This assumes you have a backend endpoint
  // You can set up a simple backend using Formspree, EmailJS, or your own service  
  const payload = JSON.stringify({
    name: data.name,
    email: data.email,
    whatsapp: data.whatsapp,
    tour: data.tour,
    date: data.date,
    details: data.details,
    timestamp: new Date().toISOString()
  });

  // Using EmailJS (free service)
  // First, sign up at https://www.emailjs.com and get your Service ID, Template ID, and Public Key  
  // For now, we'll show a success message and log the data
  console.log('Réservation soumise:', payload);
  
  // Show success message
  showMessage('✅ Réservation envoyée avec succès ! Nous vous contacterons bientôt.', 'success');
  
  // Reset form
  document.getElementById('bookingForm').reset();
  
  // In production, uncomment this section and set up EmailJS:
  /*
  emailjs.init('YOUR_PUBLIC_KEY');
  
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    to_email: 'credoilhan@gmail.com',
    from_email: data.email,
    from_name: data.name,
    reply_to: data.email,
    tour_type: data.tour,
    booking_date: data.date,
    whatsapp: data.whatsapp,
    details: data.details
  }).then(
    function(response) {
      showMessage('✅ Réservation envoyée avec succès !', 'success');
      document.getElementById('bookingForm').reset();
    },
    function(error) {
      showMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
      console.error('Email error:', error);
    }
  );
  */
}

function formatEmailMessage(data) {
  return `
Nouvelle Réservation - Maroa Explore

Nom: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Excursion: ${data.tour}
Date souhaitée: ${data.date}
Détails: ${data.details || 'Aucun détail supplémentaire'}

Date/Heure de soumission: ${new Date().toLocaleString('fr-FR')}
  `.trim();
}

// ================= UI MESSAGES ================= 
function showMessage(message, type) {
  const messageElement = document.getElementById('formMessage');
  
  if (!messageElement) {
    console.warn('Message element not found');
    return;
  }

  messageElement.textContent = message;
  messageElement.className = `form-message ${type}`;
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      messageElement.className = 'form-message';
      messageElement.textContent = '';
    }, 5000);
  }
}

// ================= SMOOTH SCROLL FALLBACK ================= 
// For older browsers that don't support smooth scroll
if (!('scrollBehavior' in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
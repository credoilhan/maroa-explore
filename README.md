<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maroa Explore - Voyages & Excursions</title>
  <style>
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: Arial, sans-serif; color: #333; overflow-x: hidden; }

    nav {
      position: fixed; width: 100%; background: transparent;
      color: white; display: flex; justify-content: space-between; padding: 15px 20px;
      z-index: 1000; transition: all 0.3s ease;
    }

    nav a { color: white; margin: 0 10px; text-decoration: none; font-weight: bold; }

    header {
      position: relative;
      height: 100vh;
      overflow: hidden;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    header video {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
      z-index: -1;
    }

    header h1 { font-size: 3.5rem; margin: 0; animation: fadeDown 1s ease; }
    header p { font-size: 1.3rem; animation: fadeUp 1.2s ease; }

    .btn {
      background: #00bcd4; color: white; padding: 12px 25px;
      border-radius: 30px; text-decoration: none; margin-top: 15px;
      display: inline-block; font-weight: bold; transition: transform 0.3s;
    }

    .btn:hover { transform: scale(1.1); }

    .whatsapp {
      position: fixed; bottom: 20px; right: 20px;
      background: #25D366; color: white;
      padding: 15px 20px; border-radius: 50px;
      text-decoration: none; font-weight: bold;
      animation: pulse 2s infinite;
      z-index: 1000;
    }

    section { padding: 80px 20px; text-align: center; opacity: 0; transform: translateY(40px); transition: all 0.6s ease; }
    section.visible { opacity: 1; transform: translateY(0); }

    .services, .testimonials, .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }

    .card, .testimonial { background: #f4f4f4; padding: 25px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .card:hover, .testimonial:hover { transform: translateY(-10px) scale(1.05); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }

    .gallery img { width: 100%; border-radius: 10px; margin: 10px 0; transition: transform 0.3s; }
    .gallery img:hover { transform: scale(1.05); }

    form { max-width: 500px; margin: auto; text-align: left; background: rgba(255,255,255,0.9); padding: 20px; border-radius: 15px; }
    input, textarea, select { width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; }

    footer { background: #222; color: white; text-align: center; padding: 20px; }

    @keyframes fadeDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
  </style>
</head>
<body>

<nav>
  <div><strong>Maroa Explore</strong></div>
  <div>
    <a href="#">Accueil</a>
    <a href="#services">Services</a>
    <a href="#gallery">Galerie</a>
    <a href="#inscription">Réservation</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header>
  <video autoplay muted loop>
    <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4">
  </video>
  <h1>Maroa Explore</h1>
  <p>Explorez Maroantsetra autrement 🌴</p>
  <a href="#inscription" class="btn">Réserver maintenant</a>
</header>

<section id="services">
  <h2>Nos Offres</h2>
  <div class="services">
    
    <div class="card"><h3>🌿 Wildlife Tours</h3><p>Découvrez la faune unique</p></div>
    <div class="card"><h3>🥾 Trekking</h3><p>Aventure guidée</p></div>
    <div class="card"><h3>🏝️ Nosy Mangabe</h3><p>Excursion île</p></div>
    <div class="card"><h3>🏡 Culture locale</h3><p>Immersion totale</p></div>
     <div class="card"><h3>🌿 Pack gold</h3><p>Découvrez tout sur Maroantsetra</p></div>
  </div>
</section>

<section id="gallery">
  <h2>Galerie</h2>
  <div class="gallery">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470">
    <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e">
    <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee">
  </div>
</section>

<section>
  <h2>Avis clients</h2>
  <div class="testimonials">
    <div class="testimonial">⭐️⭐️⭐️⭐️⭐️<br>Expérience incroyable !</div>
    <div class="testimonial">⭐️⭐️⭐️⭐️⭐️<br>Guide professionnel et sympa</div>
    <div class="testimonial">⭐️⭐️⭐️⭐️⭐️<br>Je recommande fortement</div>
  </div>
</section>

<section id="inscription">
  <h2>Réservation</h2>
  <form action="mailto:credoilhan@gmail.com" method="post" enctype="text/plain">
    <input type="text" placeholder="Nom" required>
    <input type="email" placeholder="Email" required>
    <input type="text" placeholder="WhatsApp" required>
    <select>
      <option>Wildlife Tour</option>
      <option>Trekking</option>
      <option>Excursion île</option>
    </select>
    <input type="date">
    <textarea placeholder="Détails..."></textarea>
    <button type="submit" class="btn">Envoyer</button>
  </form>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>📞 +261 37 88 690 55</p>
  <p>📧 credoilhan@gmail.com</p>
</section>

<a href="https://wa.me/261378869055?text=Bonjour%20je%20veux%20réserver%20une%20excursion" class="whatsapp">WhatsApp</a>

<footer>
  <p>© 2026 Maroa Explore</p>
</footer>

<script>
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) { nav.style.background = 'rgba(0,0,0,0.8)'; }
  else { nav.style.background = 'transparent'; }

  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) { sec.classList.add('visible'); }
  });
});
</script>

</body>
</html>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maroa Explore - Voyages & Excursions</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; color: #333; }

    nav {
      position: fixed; width: 100%; background: rgba(0,0,0,0.7);
      color: white; display: flex; justify-content: space-between; padding: 10px 20px;
    }

    nav a { color: white; margin: 0 10px; text-decoration: none; }

    header {
      background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover;
      height: 90vh; color: white;
      display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    }

    header h1 { font-size: 3rem; margin: 0; }
    header p { font-size: 1.2rem; }

    .btn {
      background: #00bcd4; color: white; padding: 10px 20px;
      border-radius: 5px; text-decoration: none; margin-top: 10px;
      display: inline-block;
    }

    section { padding: 60px 20px; text-align: center; }

    .services {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;
    }

    .card {
      background: #f4f4f4; padding: 20px; border-radius: 10px;
    }

    form {
      max-width: 500px; margin: auto; text-align: left;
    }

    input, textarea, select {
      width: 100%; padding: 10px; margin: 10px 0;
      border-radius: 5px; border: 1px solid #ccc;
    }

    footer { background: #222; color: white; text-align: center; padding: 20px; }
  </style>
</head>
<body>

<nav>
  <div><strong>Maroa Explore</strong></div>
  <div>
    <a href="#">Accueil</a>
    <a href="#services">Services</a>
    <a href="#about">À propos</a>
    <a href="#inscription">Inscription</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header>
  <h1>Découvrez Maroantsetra</h1>
  <p>Excursions, nature sauvage et aventures inoubliables</p>
  <a href="#inscription" class="btn">S'inscrire maintenant</a>
</header>

<section id="services">
  <h2>Nos Services</h2>
  <div class="services">
    <div class="card"><h3>🌿 Wildlife Tours</h3><p>Explorez la biodiversité unique</p></div>
    <div class="card"><h3>🥾 Trekking</h3><p>Randonnées guidées</p></div>
    <div class="card"><h3>🏝️ Excursions</h3><p>Nosy Mangabe & alentours</p></div>
    <div class="card"><h3>🏡 Culture locale</h3><p>Immersion village</p></div>
  </div>
</section>

<section id="about">
  <h2>À propos</h2>
  <p>Maroa Explore organise des excursions uniques à Maroantsetra avec guides locaux et expériences authentiques.</p>
</section>

<section id="inscription">
  <h2>Inscription</h2>
  <p>Réservez votre aventure en remplissant le formulaire ci-dessous :</p>

  <form action="mailto:credoilhan@gmail.com" method="post" enctype="text/plain">
    <label>Nom complet</label>
    <input type="text" placeholder="Votre nom" required>

    <label>Email</label>
    <input type="email" placeholder="Votre email" required>

    <label>Téléphone / WhatsApp</label>
    <input type="text" placeholder="Votre numéro" required>

    <label>Type d'excursion</label>
    <select>
      <option>Wildlife Tour</option>
      <option>Trekking</option>
      <option>Excursion île</option>
      <option>Culture locale</option>
    </select>

    <label>Date souhaitée</label>
    <input type="date">

    <label>Message / Détails</label>
    <textarea placeholder="Nombre de personnes, demandes spéciales..."></textarea>

    <button type="submit" class="btn">Envoyer la demande</button>
  </form>

  <p><strong>Processus :</strong></p>
  <p>1. Vous remplissez le formulaire<br>
     2. Nous vous contactons rapidement<br>
     3. Confirmation et organisation du voyage</p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>📞 +261 37 88 690 55</p>
  <p>📧 credoilhan@gmail.com</p>
  <p>📍 Maroantsetra, Madagascar</p>
</section>

<footer>
  <p>© 2026 Maroa Explore</p>
</footer>

</body>
</html>

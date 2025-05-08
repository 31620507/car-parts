import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll create this file next
const Home = () => {
  return (
    <div className="landing-container">
      <img
  src="https://th.bing.com/th/id/OIP.dwp-UMEH_y03HwgQOh_dvAHaHa?cb=iwc1&rs=1&pid=ImgDetMain"
  alt="Bannière accueil"
  className="home-banner"
/>

      <header className="landing-header">
        <img src="/images/logo-car.png" alt="Logo-car" className="logo-car" />
        <h1>Import Parts DZ</h1>
        <p className="slogan">Pièces de rechange de qualité, livrées partout en Algérie.</p>
      </header>

      <section className="description">
        <p>
          Bienvenue chez <strong>Import Parts DZ</strong>, votre partenaire de confiance pour toutes les pièces de rechange automobiles importées.
          Nous fournissons des produits fiables, à des prix compétitifs pour les voitures les plus populaires en Algérie.
        </p>
        <Link to="/products">
          <button className="cta-button">Voir nos produits</button>
        </Link>
      </section>

      
      <footer className="contact-section">
  <h3>Contactez-nous</h3>
  <p>📞 +213 770 123 456</p>
  <p>📧 contact@importpartsdz.dz</p>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
  </div>

      </footer>
    </div>
  );
};

export default Home;

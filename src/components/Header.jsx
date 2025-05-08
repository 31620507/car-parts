import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.logoLink}>
          <img
            src="/images/logo-car.png"
            alt="logo car"
            style={styles.logo}
          />
          <span style={styles.brandName}>Import Parts DZ</span>
        </Link>
      </div>
      <img
  src="/images/logo-car.png"
  alt="logo car"
  style={{ ...styles.logo, border: '2px solid red' }}
  onError={(e) => { e.target.style.display = 'none'; }}
/>


      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/products" style={styles.link}>Produits</Link>
        <Link to="/cart" style={styles.link}>🛒 Panier ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#A6615A',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  logo: {
    height: '100px',
    marginRight: '20px',
  },
  brandName: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;

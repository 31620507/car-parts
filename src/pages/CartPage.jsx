// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price} دج</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
};

export default CartPage;

// src/components/ItemCard.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h3>{product.name}</h3>
      <p>{product.price} دج</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    marginBottom: '10px',
    cursor: 'pointer',
  },
};

export default ItemCard;

import React from 'react';
import products from '../data/data';
import { Link } from 'react-router-dom';
import './ProductsPage.css'; // optional if you want custom styles

const ProductsPage = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} DA</p>
          <Link to={`/product/${product.id}`}>Voir Détails</Link>
        </div>
      ))}
    </div>
  );
};
export default ProductsPage;
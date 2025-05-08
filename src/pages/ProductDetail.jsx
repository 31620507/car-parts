import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/data';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));
  const [reviews, setReviews] = useState(product?.reviews || []);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [mainImage, setMainImage] = useState(product?.image); // 👈 main image state

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', comment: '' });
  };

  if (!product) return <p>Produit non trouvé</p>;

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <img src={mainImage} alt={product.name} style={{ width: '300px' }} />
      <p><strong>Prix :</strong> {product.price} DA</p>
      <p><strong>Catégorie :</strong> {product.category}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>

      {product.variations && product.variations.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Variations disponibles :</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {product.variations.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Variation ${index + 1}`}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: mainImage === img ? '2px solid #000' : '1px solid #ccc'
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
      )}

      <hr />
      <h3>Commentaires</h3>
      {reviews.length === 0 && <p>Aucun commentaire pour l'instant.</p>}
      <ul>
        {reviews.map((r, i) => (
          <li key={i}><strong>{r.name}</strong>: {r.comment}</li>
        ))}
      </ul>

      <form onSubmit={handleReviewSubmit} style={{ marginTop: '20px' }}>
        <h4>Laissez un avis</h4>
        <input
          type="text"
          placeholder="Votre nom"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        /><br /><br />
        <textarea
          placeholder="Votre commentaire"
          rows="4"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        /><br /><br />
        <button type="submit">Envoyer</button>
      </form>

      <hr />
      <h3>Autres choix similaires</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {relatedProducts.map((item) => (
          <div key={item.id} style={{ width: '200px', textAlign: 'center' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
            <p>{item.name}</p>
            <p>{item.price} DA</p>
            <a href={`/product/${item.id}`}>Voir plus</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

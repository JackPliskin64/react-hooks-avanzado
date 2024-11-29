import React from 'react';

const ProductList = ({ products, onLike, onRatingChange }) => {
  const handleRatingChange = (productIndex, newRating) => {
    onRatingChange(productIndex, newRating);
  };

  const handleLike = (product) => {
    onLike(product);
  };

  return (
    <div className="container">
      <h2>Lista de juegos</h2>
      {products.length === 0 ? (
        <p>Todavía no hay juegos.</p>
      ) : (
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h3 className="product-title">{product.name}</h3>
              <p>{product.description}</p>

              <div className="rating">
                <label>Puntuación: </label>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span
                    key={rating}
                    onClick={() => handleRatingChange(index, rating)}
                    style={{
                      color: product.rating >= rating ? 'gold' : 'grey',
                      cursor: 'pointer',
                    }}
                  >
                    ★
                  </span>
                ))}
                <span> {product.rating} / 5</span>
              </div>
              <button
                onClick={() => handleLike(product)}
                className="like-button"
              >
                Favorito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

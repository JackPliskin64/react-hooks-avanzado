import React from 'react';

const Favorites = ({ favorites, onRemove }) => {
  return (
    <div className="favorites-container">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has añadido nada a favoritos.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((product, index) => (
            <div key={index} className="favorite-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Rating: {product.rating} / 5</p>
              <button onClick={() => onRemove(product)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

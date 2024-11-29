import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Favorites from './components/Favorites';
import GameBoard from './components/GameBoard';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    {
      name: 'Metal Gear Solid 3',
      description: 'Juego de espionaje táctico',
      rating: 0,
    },
    {
      name: 'Yakuza Kiwami',
      description: 'Juego de rol de mundo abierto',
      rating: 0,
    },
  ]);

  const [favorites, setFavorites] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '' });

  const handleRatingChange = (productIndex, newRating) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, index) =>
        index === productIndex ? { ...product, rating: newRating } : product
      );

      setFavorites((prevFavorites) =>
        prevFavorites.map(
          (fav) =>
            updatedProducts.find((product) => product.name === fav.name) || fav
        )
      );

      return updatedProducts;
    });
  };

  const handleAddToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(product)) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  const handleRemoveFromFavorites = (productToRemove) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.name !== productToRemove.name)
    );
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name.trim() && newProduct.description.trim()) {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...newProduct, rating: 0 },
      ]);
      setNewProduct({ name: '', description: '' });
    }
  };

  return (
    <div className="app-container">
      <div className="left-column">
        <Form
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddProduct={handleAddProduct}
        />
        <ProductList
          products={products}
          onLike={handleAddToFavorites}
          onRatingChange={handleRatingChange}
        />
        <Favorites favorites={favorites} onRemove={handleRemoveFromFavorites} />
      </div>
      <div className="right-column">
        <GameBoard />
      </div>
    </div>
  );
};

export default App;

import React from 'react';

const Form = ({ newProduct, setNewProduct, handleAddProduct }) => {
  return (
    <div className="add-product-container">
      <h2>Añade un nuevo juego</h2>
      <form onSubmit={handleAddProduct} className="add-product-form">
        <input
          type="text"
          placeholder="Nombre del juego"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <button type="submit">Añadir juego</button>
      </form>
    </div>
  );
};

export default Form;

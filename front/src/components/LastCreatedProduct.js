import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LastCreatedProduct() {
  const [lastCreatedProduct, setLastCreatedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products') 
      .then((response) => {
        const products = response.data.products;

        // producto con el ID más alto 
        const lastProduct = products.reduce((prev, current) => (prev.id > current.id) ? prev : current);

        setLastCreatedProduct(lastProduct);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de productos de la API:', error);
      });
  }, []); 

  return (
    <div className='lastProductCreat'>
      <h2>Último Producto Creado</h2>
      {lastCreatedProduct ? (
        <div>
          <h3>{lastCreatedProduct.name}</h3>
          <p>{lastCreatedProduct.description}</p>
          <img
                src={lastCreatedProduct.imageUrl} // Usa la URL de la imagen directamente desde los detalles del producto
                alt={lastCreatedProduct.name}
              /> 
        
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default LastCreatedProduct;




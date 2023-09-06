import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const apiUrl = 'http://localhost:3001/api/products'; 

  useEffect(() => {
    
    axios.get(apiUrl)
      .then((response) => {
        
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []); 

  return (
    <div className='listProduct'>
      <h2>Listado de Productos</h2>
      <ul>
        {products.map((product) => (
          <p key={product.id} className='product'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            
          </p>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import Footer from './Footer';

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
    <>
      <TopBar />
      <div className='listProduct'>
        <h2>Listado de Productos</h2>
        <ul>
          {products.map((product) => (
            <div key={product.id} className='product'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <img
                src={product.imageUrl} // Usa la URL de la imagen directamente desde los detalles del producto
                alt={product.name}
              />
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;



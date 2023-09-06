import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {
  const [categories, setCategories] = useState([]);
  const apiUrl = 'http://localhost:3001/api/categories'; 

  useEffect(() => {
    
    axios.get(apiUrl)
      .then((response) => {
        
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []); 

  return (
    <div className='categories'>
      <h2>Categorias</h2>
      <ul>
        {categories.map((category) => (
          <p key={category.id}>
            <h3>{category.name}</h3>
            
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
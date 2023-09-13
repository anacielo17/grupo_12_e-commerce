import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../static/css/deshboard.css' 

function ContentWrapper() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
/*   const [totalProductsByCategory, setTotalProductsByCategory] = useState({}); */

  useEffect(() => {
    
    axios.get('http://localhost:3001/api/products') 
      .then((response) => {
        const data = response.data;

        // Actualiza el estado con los datos de resumen
        setTotalProducts(data.total);
      /*   setTotalProductsByCategory(data.productsByCategory); */
      })
      .catch((error) => {
        console.error('Error al obtener datos de resumen de la API:', error);
      });
  }, []); 
  useEffect(() => {
    
    axios.get('http://localhost:3001/api/users') 
      .then((response) => {
        const data = response.data;

        // Actualiza el estado con los datos de resumen
        setTotalUsers(data.total);
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de resumen de la API:', error);
      });
  }, []); //
  useEffect(() => {
    
    axios.get('http://localhost:3001/api/categories') 
      .then((response) => {
        const data = response.data;

        
        setTotalCategories(data.total);
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de resumen de la API:', error);
      });
  }, []);


  return (
    <div className="row">
      
<div className="quantity">
        <div className="content">Total Usuers</div>
        <div className="">{totalUsers}</div>
      </div>
      <div className="quantity">
        <div className="content">Products in Data Base</div>
        <div className="">{totalProducts}</div>
      </div>
      <div className="quantity">
        <div className="content">Total Categories</div>
        <div className="">{totalCategories} </div>
      </div>
      
    </div>
  );
}

export default ContentWrapper
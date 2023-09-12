import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import Footer from './Footer';

function UserList() {
  const [users, setUsers] = useState([]);
  const apiUrl = 'http://localhost:3001/api/users'; 

  useEffect(() => {
  
    axios.get(apiUrl)
      .then((response) => {
        
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []); 

  return (
    
    <> 
    <TopBar/>
    <div className='listUser'>
      <h2>Listado de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <div key={user.id} className='user'>
            <h3>{user.name}</h3>
            <p>Email: {user.customer_email}</p>
            <img
                src={user.image} // Usa la URL de la imagen directamente desde los detalles del producto
                alt={user.name}
              />
          </div>
        ))}
      </ul>
    </div>
    <Footer/>
    </>  
  );
}

export default UserList;
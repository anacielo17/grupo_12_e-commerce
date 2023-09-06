import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='listUser'>
      <h2>Listado de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <p key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.customer_email}</p>
           
          </p>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
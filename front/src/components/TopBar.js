import React from 'react';
import '../static/css/deshboard.css' 
import { Link } from 'react-router-dom';

 function TopBar(){
    return (
					<div className="TopBar"> 
					 
                     
                    <Link to="/"><img src='./img/logo-removebg-preview.png' alt='Logo' ></img> </Link>

                    <i class="fa-solid fa-circle-user"> Bienvenido</i>
                    
					</div>
			
    )
}
export default TopBar;
import React from 'react';
import '../static/css/deshboard.css' 
import { Link } from 'react-router-dom';

 function TopBar(){
    return (
					<div className="TopBar"> 
					 
                     
                    <Link to="/">Home </Link>

                    <i class="fa-solid fa-circle-user"> Bienvenido</i>
                    
					</div>
			
    )
}
export default TopBar;
import React from 'react';
/* import {Route, Switch, Link} from "react-router-dom";  */

import Footer from './Footer';

import ContentWrapper from './ContentWrapper';
import Products from './Products'
import UserList from './Users';
import LastCreatedProduct from './LastCreatedProduct';
import Categories from './Categories';
import '../static/css/deshboard.css'
import TopBar from './TopBar';
import SideBar from './SideBar';

function Dashboard(){
    return (
   //cambiar por link  a listado de products
     <>
     <TopBar/>
     <ContentWrapper/>
     <div className='deshboard'>
     <div className='contenedor-flex'> 
     <SideBar/>
    <LastCreatedProduct/>
    <Categories/>
    </div>
    <div className='contenedorList'>  
    <UserList/>
    <Products/>
   
    </div>
    
    </div>
     <Footer/>
    </>
    )
}
export default Dashboard;
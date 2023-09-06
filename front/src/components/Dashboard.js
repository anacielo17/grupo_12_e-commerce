import React from 'react';
import Footer from './Footer';

import ContentWrapper from './ContentWrapper';

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
   
    </div>
    
    </div>
     <Footer/>
    </>
    )
}
export default Dashboard;
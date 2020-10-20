import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Routes from './Routes';
import Header from './template/header/Header';
import SideBar from './template/sidebar/Sidebar'; 
import Header from './template/header/Header'; 
import Footer from './template/footer/Footer';


export default props => (
  <div className="container">
     <Header/>
     <SideBar/>
     <Routes/>
     <Footer/>
  </div>
)

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Routes from './Routes';
import Header from './template/header/Header'
import SideBar from './template/sidebar/Sidebar'


export default props => (
  <div className="container">
     <Header/>
     <SideBar/>
     <Routes/>
  </div>
)

import './App.css';
import React  from 'react';
import Header from './Header';
import Sidenav from './Sidenav';
import Body from './Body';
import Subheader from './Subheader';
import Footer from './Footer';
import suggestions_1 from "./shared/suggestions";
import links_1 from './shared/links';
import { Component } from 'react';
import right_banner from './shared/right_banner.jpg';

class App extends Component {

  render(){
     return (
       <div className="app">
         <Header />
         <Subheader />
         <div className="main">
           <Sidenav />
           <Body links_1={links_1} suggestions={suggestions_1} />
           <img src={right_banner} alt="right_banner" />
         </div>
         <Footer />
       </div>
     );
  }
 
}

export default App;

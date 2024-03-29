import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
//import { BrowserRouter as Router, Route } from 'react-router-dom'


import AppAppBar from './modules/views/AppAppBar';
//import Navigatiosn from './components/Navigation'
//import NotesList from './components/NotesList'
 


function Index() {
  return (
    <React.Fragment>
      <AppAppBar/>
      <ProductHero/>
      <ProductCategories/>
      <AppFooter/>
      
    </React.Fragment>
  );
}

export default withRoot(Index);
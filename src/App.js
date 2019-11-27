//import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
//Necesarios para el manejo de rutas 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//Vistas que muestra la pantalla principal
import ProductCategories from './modules/views/ProductCategories';
//import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';

//Nueva vista para probar la navegcion 

import Navigation from './components/Navigation';
//import NotesList from './components/NotesList';
//import Header from './components/Header';
import SignIn from './components/SignIn/index';
import SignUp from './components/SignUp/index';
import ShopsPharmacy from './components/ShopsPharmacy';
import ShopsSuperMarket from './components/ShopsSuperMarket';
import ShopsRestaurant from './components/ShopsRestaurant';
import ShopsShopping from './components/ShopsShopping';



function App() {



  return (
    <Router>
      <Navigation />
      <AppAppBar />
      <ProductHero />
      <ProductCategories />

      <div className="container p-4">
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/tiendas-farmacias" exact component={ShopsPharmacy} />
        <Route path="/tiendas-supermercados" exact component={ShopsSuperMarket} />
        <Route path="/tiendas-restaurantes" exact component={ShopsRestaurant} />
        <Route path="/tiendas-shopping" exact component={ShopsShopping} />
      </div>
    </Router>
  );
}

export default App;
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
import CartShopping from './components/CartShopping/CartShopping';

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
        <Route path="/ShopsPharmacy" exact component={ShopsPharmacy} />
        <Route path="/ShopsSuperMarket" exact component={ShopsSuperMarket} />
        <Route path="/ShopsRestaurant" exact component={ShopsRestaurant} />
        <Route path="/ShopsShopping" exact component={ShopsShopping} />
        <Route path="/ShopProducts" exact component={CartShopping} />
      </div>
    </Router>
  );
}

export default App;
//dependencias 

import React from 'react';
import { Route , Switch } from 'react-router-dom';

//Componentes

import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShopsPharmacy from './components/ShopsPharmacy';
import ShopsSuperMarket from './components/ShopsSuperMarket';
import ShopsRestaurant from './components/ShopsRestaurant';
import ShopsShopping from './components/ShopsShopping';
import Home   from './components/Home';
import Page404 from './components/Page404';
import CartShopping from './components/CartShopping/App/index';
//import App from './App';
//import App from './App';
//import App from './App';
//import App from './App';

const AppRoutes = () =>

<App>
    <Switch>
        <Route path = "/signIn" component={SignIn} />
        <Route path = "/signUp" component={SignUp} />
        <Route path = "/tiendas-farmacias" component={ShopsPharmacy} />
        <Route path = "/tiendas-supermercados" component={ShopsSuperMarket} />
        <Route path = "/tiendas-restaurantes" component={ShopsRestaurant} />
        <Route path = "/tiendas-shopping" component={ShopsShopping} />
        <Route path = "/farmacia" component={CartShopping} />
        <Route path = "/Home" component={Home} />
        <Route  component={Page404} />
         
    </Switch>
 </App>   
 
 export default AppRoutes;
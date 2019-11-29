//dependencias 

import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Componentes

import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShopsPharmacy from './components/ShopsPharmacy';
import ShopsSuperMarket from './components/ShopsSuperMarket';
import ShopsRestaurant from './components/ShopsRestaurant';
import ShopsShopping from './components/ShopsShopping';
import ShopProducts from './components/ShopProducts';
import Home   from './components/Home';
import Page404 from './components/Page404';
import CartShopping from './components/CartShopping/App/index';
import CartShoppingOther from './components/Cart/Cart';
import store from '../../services/store';
//import App from './App';
//import App from './App';
//import App from './App';
//import App from './App';

const AppRoutes = () =>

<App>
    <Switch>
        <Route path = "/signIn" component={SignIn} />
        <Route path = "/signUp" component={SignUp} />
        <Route path = "/ShopsPharmacy" component={ShopsPharmacy} />
        <Route path = "/ShopsSuperMarket" component={ShopsSuperMarket} />
        <Route path = "/ShopsRestaurant" component={ShopsRestaurant} />
        <Route path = "/ShopsShopping" component={ShopsShopping} />
        <Route path = "/ShopProductasc" component={CartShopping} />
        <Route path = "/ShopProducts" component={ShopProducts} />
        <Route path = "/ShopProductsOther" component={CartShoppingOther} />
        <Route path = "/Home" component={Home} />
        <Route  component={Page404} />
         
    </Switch>
    const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

 </App>   
 
 export default AppRoutes;
import 'babel-polyfill'
import React, { Component } from 'react';

import Appc from './App/index';
import Root from './Root';

import './index.scss';

export default class CartShopping extends Component {

  render() {
    return (
      <Root>
        <Appc />
      </Root> 
      )
  }
}

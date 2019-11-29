import React from 'react';

import Shelf from '../Shelf';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart/index';

const Appc = () => (
  <React.Fragment>
    <GithubCorner />
    <main>
     <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default Appc;

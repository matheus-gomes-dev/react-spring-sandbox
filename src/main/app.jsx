/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';
import Animation1 from '../animations/animation1';

const props = () => (
  <div className="container">
    <h1>Projeto React</h1>
    <Animation1 />
  </div>
);

export default props;

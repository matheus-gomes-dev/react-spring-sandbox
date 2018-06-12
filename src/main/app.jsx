/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';
import Animation1 from '../animations/animation1';
import Animation2 from '../animations/animation2';


const props = () => (
  <div className="container">
    <div>
      <h1>Animation 1</h1>
      <Animation1 />
    </div>
    <br />
    <div>
      <h1>Animation2</h1>
      <Animation2 />
    </div>
  </div>
);

export default props;

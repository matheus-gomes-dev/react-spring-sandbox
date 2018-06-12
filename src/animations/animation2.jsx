/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Transition, animated } from 'react-spring';

// array of functions, with preloaded style as parameter, which return jsx
const pages = [
  style => <animated.div style={{ ...style, background: '#247BA0', height: '200px', width: '50%', position: 'absolute' }}>A</animated.div>,
  style => <animated.div style={{ ...style, background: '#B2DBBF', height: '200px', width: '50%', position: 'absolute' }}>B</animated.div>,
  style => <animated.div style={{ ...style, background: '#12DBBF', height: '200px', width: '50%', position: 'absolute' }}>C</animated.div>
]

class Animation2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.toggleFunction = this.toggleFunction.bind(this);
  }

  toggleFunction() {
    this.setState(state => ({ index: state.index === 2 ? 0 : state.index + 1 }));
  }

  render() {
    // native attribute is optional, and has some limitations.
    // docs: https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md
    return (
      <div className="main" onClick={() => this.toggleFunction()}>
        <Transition
          native
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
        >
          {pages[this.state.index]}
        </Transition>
      </div>
    );
  }
}

export default Animation2;

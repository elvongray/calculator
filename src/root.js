import React, { Component } from 'react';

import App from './component/app';

class Calculator extends Component {
  render() {
    return (
      { () => App }
    );
  }
};

export default Calculator;

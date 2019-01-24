import React from 'react';
import { Component, Fragment } from 'react';
import './paymentSystem.scss';
import Nav from './nav/nav';
import Center from './center/center';

class paymentSystem extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Nav />
          <div className="main">
            <Center />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default paymentSystem;

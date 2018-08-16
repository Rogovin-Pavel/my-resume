import React from 'react';
import { Component } from 'react';

import '../sass/body.scss';
import data from '../data/data';

import Header from './Header';

class Body extends Component {
  render() {
    return(
      <div className="resume-body">
        <Header {...data}/>
      </div>
    )
  }
}

export default Body;
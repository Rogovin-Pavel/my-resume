import React from 'react';
import { Component } from 'react';

import '../sass/main.scss';
import data from '../data/data';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Body extends Component {
  render() {
    return(
      <div className="resume-body">
        <Header {...data}/>
        <Main />
        <Footer {...data}/>
      </div>
    )
  }
}

export default Body;
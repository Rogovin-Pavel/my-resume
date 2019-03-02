import React from 'react';
import { Component } from 'react';

import '../sass/main.scss';

import data from '../data/data';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Body extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const { social, skills } = data;
    return(
      <div className="resume-body">
        <Header social = { social }/>
        <Main skills = { skills }/>
        <Footer social = { social }/>
      </div>
    )
  }
}

export default Body;
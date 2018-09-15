import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Main = (skills) => 

  <main className="resume-main">
    <Sidebar />
    <MainContent {...skills}/>
  </main>

Main.propTypes = {
  skills: PropTypes.array.isRequired
}

export default Main;
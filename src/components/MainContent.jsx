import React from 'react';
import Skills from './Skills';
import PropTypes from 'prop-types';

const MainContent = (skills) =>

  <section className="main-content">
    <Skills {...skills}/>  
  </section>

MainContent.propTypes = {
  skills: PropTypes.array.isRequired
}
export default MainContent;
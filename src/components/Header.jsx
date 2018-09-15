import React from 'react';
import SocialButtons from './SocialButtons';
import PropTypes from 'prop-types';

const Header = (social) =>
  <header className="resume-header">
    <SocialButtons {...social}/>
  </header>

  Header.propTypes = {
    social: PropTypes.array.isRequired
  }

export default Header;
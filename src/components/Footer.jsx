import React from 'react';
import SocialButtons from './SocialButtons';
import PropTypes from 'prop-types';

const Footer = (social) =>
  <footer className="resume-footer">
    <SocialButtons {...social}/>
  </footer>

Footer.propTypes = {
  social: PropTypes.array.isRequired
};

export default Footer;
import React from 'react';
import SocialButtons from './SocialButtons';
const Footer = (data) =>
  <footer className="resume-footer">
    <SocialButtons {...data}/>
  </footer>

export default Footer;
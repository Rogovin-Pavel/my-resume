import React from 'react';
import SocialButtons from './SocialButtons';
const Footer = (data) =>
  <section className="resume-footer">
    <SocialButtons {...data}/>
  </section>

export default Footer;
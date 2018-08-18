import React from 'react';
import SocialButtons from './SocialButtons';
const Header = (data) =>
  <section className="resume-header">
    <SocialButtons {...data}/>
  </section>

export default Header;
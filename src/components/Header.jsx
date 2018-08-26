import React from 'react';
import SocialButtons from './SocialButtons';
const Header = (data) =>
  <header className="resume-header">
    <SocialButtons {...data}/>
  </header>

export default Header;
import React from 'react';
import SocialButtons from './SocialButtons';
const Header = (data) =>

  <div className="main-header">
    <SocialButtons {...data}/>
  </div>


export default Header;
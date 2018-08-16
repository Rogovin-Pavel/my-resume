import React from 'react';
import PropTypes from 'prop-types';


const SocialButtons = ({social}) =>

  <div className="main-header__social-buttons">
    { social.map((button) => 
      <div className="main-header__item" key={button.id}>
        <a href={button.url} target="_blank">
          <img src={button.src} alt="social icon" className="main-header__icon"/>
          <div key={button.id}>{button.title}</div>
        </a>
      </div>  
    ) }
  </div>

SocialButtons.propTypes = {
  social: PropTypes.array.isRequired
}

export default SocialButtons;

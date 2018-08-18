import React from 'react';
import PropTypes from 'prop-types';

const SocialButton = ({button}) => 
  <a href={button.url} target="_blank">
    <img src={button.src} alt="social icon" className="social-buttons__icon"/>
    <div key={button.id}>{button.title}</div>
  </a>

SocialButton.propTypes = {
  button: PropTypes.object.isRequired
}

export default SocialButton;
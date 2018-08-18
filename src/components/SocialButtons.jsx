import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

const SocialButtons = ({social}) =>

  <div className="social-buttons">
    { social.map((button) => 
      <div className={`social-buttons__item item${button.id}`} key={button.id}>
        <SocialButton button={button} />
      </div>
    ) }
  </div>

SocialButtons.propTypes = {
  social: PropTypes.array.isRequired
}

export default SocialButtons;

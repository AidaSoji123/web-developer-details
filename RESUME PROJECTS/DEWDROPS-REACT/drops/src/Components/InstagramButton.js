import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstagramButton = () => {
  return (
    <a
      className="btn btn-large btn-danger  float-end "
      href="https://www.instagram.com/dew_drops_event_planners"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="3x"/>
    </a>
  );
};

export default InstagramButton;


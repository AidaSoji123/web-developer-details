
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsup = ({ phoneNumber, message }) => {
    const Whatsup = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a className="btn btn-large btn-success  float-end" href={Whatsup} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="3x"/>
        </a>
    );
};

export default Whatsup;

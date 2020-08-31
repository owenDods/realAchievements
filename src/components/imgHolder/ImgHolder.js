import React from 'react';
import PropTypes from 'prop-types';

export const className = 'imgHolder';

const ImgHolder = ({ url = '' }) => (

	<div className={className} style={{ backgroundImage: `url(${url})` }} />

);

ImgHolder.propTypes = {
	url: PropTypes.string
};

export default ImgHolder;

import React from 'react';
import PropTypes from 'prop-types';

export const className = 'button';

const Button = ({ label, onClick, icon }) => (

	<button type="button" className={className} onClick={onClick}>

		<span>{label}</span>

		{icon}

	</button>

);

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.element
};

export default Button;

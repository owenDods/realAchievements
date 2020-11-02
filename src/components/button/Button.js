import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'lodash/fp/capitalize';

export const className = 'button';

const Button = ({ label, onClick, icon, textPosition }) => {

	const styleClass = textPosition ? `${className} ${className}--textPosition${capitalize(textPosition)}` : className;

	return (

		<button type="button" className={styleClass} onClick={onClick}>

			<span>{label}</span>

			{icon}

		</button>

	);

};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.element,
	textPosition: PropTypes.string
};

export default Button;

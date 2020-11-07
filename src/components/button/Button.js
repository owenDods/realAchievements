import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'lodash/fp/capitalize';

export const className = 'button';

const Button = ({ label, onClick, icon, textPosition, disabled, disabledText = '' }) => {

	const styleClass = textPosition ?
		`${className} ${className}--textPosition${capitalize(textPosition)}` : className;

	return (

		<button
			type="button"
			className={styleClass}
			onClick={onClick}
			disabled={disabled}
		>

			<span className={`${className}__label`}>{label}</span>

			{icon}

			{disabled && disabledText && (<span className={`${className}__disabledText`}>{disabledText}</span>)}

		</button>

	);

};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.element,
	textPosition: PropTypes.string,
	disabled: PropTypes.bool,
	disabledText: PropTypes.string
};

export default Button;

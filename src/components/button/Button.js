import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import capitalize from 'lodash/fp/capitalize';

export const className = 'button';

const Button = ({ label, onClick, icon, textPosition, disabled, disabledText = '', isLink, to }) => {

	const styleClass = textPosition ? `${className} ${className}--textPosition${capitalize(textPosition)}` : className;

	const buttonContent = (

		<Fragment>

			<span className={`${className}__label`}>{label}</span>

			{icon}

			{disabled && disabledText && (<span className={`${className}__disabledText`}>{disabledText}</span>)}

		</Fragment>

	);

	if (isLink) {

		return (

			<Link className={styleClass} to={to} disabled={disabled}>

				{buttonContent}

			</Link>

		);

	}

	return (

		<button
			type="button"
			className={styleClass}
			onClick={onClick}
			disabled={disabled}
		>

			{buttonContent}

		</button>

	);

};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.element,
	textPosition: PropTypes.string,
	disabled: PropTypes.bool,
	disabledText: PropTypes.string,
	isLink: PropTypes.bool,
	to: PropTypes.string
};

export default Button;

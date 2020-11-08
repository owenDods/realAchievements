import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

export const className = 'dropdownOption';

const DropdownOption = ({ label, onClick, isLink, to }) => {

	if (isLink) {

		return (

			<Button label={label} isLink to={to} />

		);

	}

	return (

		<p className={className} onClick={() => onClick(label)}>

			{label}

		</p>

	);

};

DropdownOption.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	isLink: PropTypes.bool,
	to: PropTypes.string
};

export default DropdownOption;

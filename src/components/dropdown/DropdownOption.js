import React from 'react';
import PropTypes from 'prop-types';

export const className = 'dropdownOption';

const DropdownOption = ({ label, onClick }) => (

	<p className={className} onClick={() => onClick(label)}>

		{label}

	</p>

);

DropdownOption.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default DropdownOption;

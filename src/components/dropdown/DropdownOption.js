import React from 'react';
import PropTypes from 'prop-types';

export const className = 'dropdownOption';

const DropdownOption = ({ label }) => (<p className={className}>{label}</p>);

DropdownOption.propTypes = {
	label: PropTypes.string
};

export default DropdownOption;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import startCase from 'lodash/fp/startCase';

import Triangle from '../../img/triangle.svg';

export const className = 'dropdown';

const Dropdown = ({ value = '' }) => {

	const [ isActive, setIsActive ] = useState(false);
	const handleActiveToggle = () => setIsActive(oldIsActive => !oldIsActive);

	const styleClass = isActive ? `${className} ${className}--active` : className;

	return (

		<div className={styleClass}>

			<button
				className={`${className}__button`}
				type="button"
				onClick={handleActiveToggle}
			>

				<span>{startCase(value)}</span>

				<Triangle />

			</button>

		</div>

	);

};

Dropdown.propTypes = {
	value: PropTypes.string
};

export default Dropdown;

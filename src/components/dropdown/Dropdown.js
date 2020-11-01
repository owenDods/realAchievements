import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';

import Triangle from '../../img/triangle.svg';

import useDocumentClickListener from '../utils/useDocumentClickListener';

import List from '../list/List';
import DropdownOption from './DropdownOption';

export const className = 'dropdown';

const Dropdown = ({ value = '', options }) => {

	const [ isActive, setIsActive ] = useState(false);
	const handleActiveToggle = () => setIsActive(oldIsActive => !oldIsActive);
	const dropdownEl = useRef(null);
	const handleDocumentClick = ({ target }) => {

		if (target === dropdownEl.current || dropdownEl.current.contains(target)) {

			return;

		}

		handleActiveToggle();

	};

	useDocumentClickListener(handleDocumentClick, isActive);

	const styleClass = isActive ? `${className} ${className}--active` : className;

	return (

		<div className={styleClass} ref={dropdownEl}>

			<button
				className={`${className}__button`}
				type="button"
				onClick={handleActiveToggle}
			>

				<span>{value}</span>

				<Triangle />

			</button>

			<div className={`${className}__options`}>

				<List
					items={map(option => ({ label: option }), options)}
					name={`${className}-options`}
				>

					<DropdownOption />

				</List>

			</div>

		</div>

	);

};

Dropdown.propTypes = {
	value: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string)
};

export default Dropdown;

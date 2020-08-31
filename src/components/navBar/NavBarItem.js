import React from 'react';
import PropTypes from 'prop-types';

export const className = 'navBarItem';

const NavBarItem = ({ name }) => (

	<div className={className}>

		<label className={`${className}__name`}>{name}</label>

	</div>

);

NavBarItem.propTypes = {
	name: PropTypes.string
};

export default NavBarItem;

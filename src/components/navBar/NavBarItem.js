import React from 'react';
import PropTypes from 'prop-types';

import Triangle from '../../img/triangle.svg';

import Button from '../button/Button';

export const className = 'navBarItem';

const NavBarItem = ({ name, to }) => (

	<div className={className}>

		<Triangle />

		<Button label={name} isLink to={to} />

	</div>

);

NavBarItem.propTypes = {
	name: PropTypes.string,
	to: PropTypes.string
};

export default NavBarItem;

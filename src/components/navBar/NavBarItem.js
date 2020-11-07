import React from 'react';
import PropTypes from 'prop-types';

import startCase from 'lodash/fp/startCase';

import Triangle from '../../img/triangle.svg';

import Button from '../button/Button';

export const className = 'navBarItem';

const NavBarItem = ({ name }) => (

	<div className={className}>

		<Triangle />

		<Button label={startCase(name)} isLink to={name} />

	</div>

);

NavBarItem.propTypes = {
	name: PropTypes.string
};

export default NavBarItem;

import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';

import NavBarItem from './NavBarItem';

export const className = 'navBar';

const NavBar = ({ items }) => (

	<div className={className}>

		{map.convert({ cap: false })((item, i) => (

			<NavBarItem key={`${className}-${i}-${item}`} name={item} />

		), items)}

	</div>

);

NavBar.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string)
};

export default NavBar;

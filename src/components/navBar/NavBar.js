import React from 'react';
import PropTypes from 'prop-types';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';
import map from 'lodash/fp/map';

import { appTransitionTiming } from '../../config';

import NavBarItem from './NavBarItem';

export const className = 'navBar';

const NavBar = ({ items }) => (

	<TransitionGroup className={className}>

		{map.convert({ cap: false })((item, i) => (

			<CSSTransition
				timeout={appTransitionTiming}
				classNames={className}
				key={`${className}-${i}-${item}`}
			>

				<NavBarItem name={item} />

			</CSSTransition>

		), items)}

	</TransitionGroup>

);

NavBar.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string)
};

export default NavBar;

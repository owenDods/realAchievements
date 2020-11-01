import React from 'react';
import PropTypes from 'prop-types';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';
import map from 'lodash/fp/map';

import { appTransitionTiming } from '../../config';

import Trophy from '../../img/trophy.svg';

import Dropdown from '../dropdown/Dropdown';
import NavBarItem from './NavBarItem';

export const className = 'navBar';

const NavBar = ({ rootPath, items }) => (

	<div className={className}>

		<Trophy className={`${className}__trophy`} />

		<Dropdown value={rootPath} />

		<TransitionGroup className={`${className}__links`}>

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

	</div>

);

NavBar.propTypes = {
	rootPath: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.string)
};

export default NavBar;

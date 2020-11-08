import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';
import { Redirect } from 'react-router-dom';

import map from 'lodash/fp/map';
import startCase from 'lodash/fp/startCase';
import toLower from 'lodash/fp/toLower';

import { appTransitionTiming } from '../../config';

import Trophy from '../../img/trophy.svg';

import getAllPathsAsBreadcrumbObjects from './utils/getAllPathsAsBreadcrumbObjects';

import Dropdown from '../dropdown/Dropdown';
import NavBarItem from './NavBarItem';

export const className = 'navBar';
export const rootPaths = [ 'home', 'explore' ];

const NavBar = ({ pathname }) => {

	const allPaths = pathname.slice(1).split('/');
	const rootPath = allPaths[0];

	const [ newLocation, setNewLocation ] = useState(null);
	useEffect(() => (

		() => setNewLocation(null)

	), [ newLocation ]);
	const rootPathOptions = map(rootPathItem => ({
		label: startCase(rootPathItem),
		isLink: true,
		to: `/${rootPathItem}`
	}), rootPaths);
	const handleLocationSelect = selectedLocation => {

		setNewLocation(`/${toLower(selectedLocation)}`);

	};

	return (

		<div className={className}>

			<Trophy className={`${className}__trophy`} />

			<Dropdown
				value={startCase(rootPath)}
				options={rootPathOptions}
				onSelect={handleLocationSelect}
			/>

			<TransitionGroup className={`${className}__links`}>

				{map.convert({ cap: false })(({ name, to }, i) => (

					<CSSTransition
						timeout={appTransitionTiming}
						classNames={className}
						key={`${className}-${i}-${name}`}
						appear
						in
					>

						<NavBarItem name={name} to={to} />

					</CSSTransition>

				), getAllPathsAsBreadcrumbObjects(allPaths))}

			</TransitionGroup>

			{newLocation && (<Redirect to={newLocation} />)}

		</div>

	);

};

NavBar.propTypes = {
	pathname: PropTypes.string
};

export default NavBar;

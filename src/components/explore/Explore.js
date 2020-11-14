import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ExploreTopLevel from './ExploreTopLevel';
import ExploreCategories from './ExploreCategories';
import ExploreCategory from './ExploreCategory';
import RouteTransitionRenderer from '../routeTransitionRenderer/RouteTransitionRenderer';

export const className = 'explore';

const exploreRoutes = [
	{
		path: '/categories/:category',
		component: (<ExploreCategory />)
	},
	{
		path: '/categories',
		component: (<ExploreCategories />)
	},
	{
		component: (<ExploreTopLevel />)
	}
];

const Explore = () => (

	<div className={className}>

		<RouteTransitionRenderer
			location={useLocation()}
			customClass={className}
			routes={exploreRoutes}
		/>

	</div>

);

Explore.propTypes = {};

export default Explore;

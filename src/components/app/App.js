import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import NavBar from '../navBar/NavBar';
import Home from '../home/Home';
import Explore from '../explore/Explore';
import LandingPage from '../landingPage/LandingPage';
import RouteTransitionRenderer from '../routeTransitionRenderer/RouteTransitionRenderer';

export const className = 'app';

const appRoutes = [
	{
		path: 'home',
		component: (<Home />)
	},
	{
		path: 'explore',
		component: (<Explore />)
	},
	{
		component: (<LandingPage />)
	}
];

const appRoutesRenderer = ({ location }) => {

	const { pathname } = location;

	const styleClass = pathname === '/' ? `${className} ${className}--landingPage` : className;

	return (

		<div className={styleClass}>

			<NavBar pathname={pathname} />

			<RouteTransitionRenderer
				location={location}
				customClass={className}
				routes={appRoutes}
			/>

		</div>

	);

};

appRoutesRenderer.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	})
};

const App = () => (

	<Router>

		<Route render={appRoutesRenderer} />

	</Router>

);

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import { appTransitionTiming } from '../../config';

import NavBar from '../navBar/NavBar';
import Home from '../home/Home';
import LandingPage from '../landingPage/LandingPage';

export const className = 'app';

const routeTransitionRenderer = ({ location }) => {

	const { pathname } = location;

	const styleClass = pathname === '/' ? `${className} ${className}--landingPage` : className;

	return (

		<div className={styleClass}>

			<NavBar items={pathname.slice(1).split('/').slice(1)} />

			<TransitionGroup className={`${className}__content`}>

				<CSSTransition
					timeout={appTransitionTiming}
					classNames={className}
					key={pathname.match(/[^/]*\/[^/]*/)[0]}
					appear
					in
				>

					<Switch location={location}>

						<Route path="/home">

							<Home />

						</Route>

						<Route path="/">

							<LandingPage />

						</Route>

					</Switch>

				</CSSTransition>

			</TransitionGroup>

		</div>

	);

};

routeTransitionRenderer.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.shape({
			match: PropTypes.string
		})
	})
};

const App = () => (

	<Router>

		<Route render={routeTransitionRenderer} />

	</Router>

);

export default App;

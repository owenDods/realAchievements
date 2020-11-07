import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import { appTransitionTiming } from '../../config';

import renderRoutes from './utils/renderRoutes';

const RouteTransitionRenderer = ({ location, className, routes }) => {

	const { pathname } = location;

	return (

		<TransitionGroup className={`${className}__content`}>

			<CSSTransition
				timeout={appTransitionTiming}
				classNames={className}
				key={pathname.match(/[^/]*\/[^/]*/)[0]}
				appear
				in
			>

				<Switch location={location}>

					{renderRoutes(routes)}

				</Switch>

			</CSSTransition>

		</TransitionGroup>

	);

};

RouteTransitionRenderer.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}),
	className: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string,
		component: PropTypes.element
	}))
};

export default RouteTransitionRenderer;

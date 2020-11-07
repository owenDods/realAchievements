import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import { appTransitionTiming } from '../../config';

import renderRoutes from './utils/renderRoutes';

export const className = 'routeTransitionRenderer';

const RouteTransitionRenderer = ({ location, customClass, routes }) => {

	const { pathname } = location;
	const styleClass = customClass ? `${className} ${customClass}__routes` : className;

	return (

		<TransitionGroup className={styleClass}>

			<CSSTransition
				timeout={appTransitionTiming}
				classNames={className}
				key={pathname}
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
	customClass: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string,
		component: PropTypes.element
	}))
};

export default RouteTransitionRenderer;

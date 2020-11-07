import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import map from 'lodash/fp/map';

export default routes => {

	const { path: urlPath } = useRouteMatch();

	return map(({ path = '', component }) => (

		<Route path={`${urlPath}${path}`} key={`${urlPath}${path}`}>

			{component}

		</Route>

	), routes);

};

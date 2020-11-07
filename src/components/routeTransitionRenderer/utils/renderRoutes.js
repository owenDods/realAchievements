import React from 'react';
import { Route } from 'react-router-dom';

import map from 'lodash/fp/map';

export default routes => map(({ path, component }) => (

	<Route path={path} key={path}>

		{component}

	</Route>

), routes);

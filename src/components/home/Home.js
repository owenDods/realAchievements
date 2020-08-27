import React from 'react';

import List from '../list/List';

export const className = 'home';

const Home = () => (

	<div className={className}>

		<div className={`${className}__feed`}>

			<List />

		</div>

	</div>

);

export default Home;

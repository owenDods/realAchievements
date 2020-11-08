import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import delay from 'lodash/fp/delay';

import categoriesJson from '../../categories.json';

import List from '../list/List';
import ExploreCategoriesItem from './ExploreCategoriesItem';

export const className = 'exploreCategories';

const ExploreCategories = () => {

	const [ categories, setCategories ] = useState(null);
	useEffect(() => {

		new Promise(res => {

			delay(2000, () => res(categoriesJson));

		})
			.then(data => setCategories(data));

	}, []);

	return (

		<div className={className}>

			<List items={categories} name={`${className}-grid`} grid>

				<ExploreCategoriesItem />

			</List>

		</div>

	);

};

ExploreCategories.propTypes = {};

export default ExploreCategories;

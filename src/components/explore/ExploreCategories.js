import React from 'react';
// import PropTypes from 'prop-types';

import List from '../list/List';
import ExploreCategoriesItem from './ExploreCategoriesItem';

export const className = 'exploreCategories';

const categories = [
	{ name: 'Category 1' },
	{ name: 'Category 2' },
	{ name: 'Category 3' },
	{ name: 'Category 4' },
	{ name: 'Category 5' },
	{ name: 'Category 6' },
	{ name: 'Category 7' },
	{ name: 'Category 8' }
];

const ExploreCategories = () => (

	<div className={className}>

		<List items={categories} name={`${className}-grid`} grid>

			<ExploreCategoriesItem />

		</List>

	</div>

);

ExploreCategories.propTypes = {};

export default ExploreCategories;

import React from 'react';
import PropTypes from 'prop-types';

export const className = 'exploreCategoriesItem';

const ExploreCategoriesItem = ({ name }) => (

	<div className={className}>

		<p className={`${className}__name`}>{name}</p>

	</div>

);

ExploreCategoriesItem.propTypes = {
	name: PropTypes.string
};

export default ExploreCategoriesItem;

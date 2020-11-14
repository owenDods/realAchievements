import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export const className = 'exploreCategory';

const ExploreCategory = () => (

	<div className={className}>

		<h1 style={{ margin: 'auto' }}>{decodeURIComponent(useParams().category)}</h1>

	</div>

);

ExploreCategory.propTypes = {};

export default ExploreCategory;

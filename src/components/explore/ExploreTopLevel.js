import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Compass from '../../img/compass.svg';
import Categories from '../../img/categories.svg';

import Button from '../button/Button';

export const className = 'exploreTopLevel';

const ExploreTopLevel = () => (

	<div className={className}>

		<Button
			label="By Location"
			icon={(<Compass />)}
			textPosition="bottom"
			disabled
			disabledText="Under Construction"
		/>

		<Button
			label="By Category"
			icon={(<Categories />)}
			textPosition="bottom"
			isLink
			to={`${useLocation().pathname}/categories`}
		/>

	</div>

);

ExploreTopLevel.propTypes = {};

export default ExploreTopLevel;

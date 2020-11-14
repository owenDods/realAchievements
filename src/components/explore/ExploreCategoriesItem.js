import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import get from 'lodash/fp/get';

import categoryIconMap from './utils/categoryIconMap';

import Button from '../button/Button';

export const className = 'exploreCategoriesItem';

const ExploreCategoriesItem = ({ name, icon }) => (

	<div className={className}>

		<Button
			label={name}
			icon={get(icon, categoryIconMap)}
			textPosition="bottom"
			isLink
			to={`${useLocation().pathname}/${encodeURIComponent(name.toLowerCase())}`}
		/>

	</div>

);

ExploreCategoriesItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string
};

export default ExploreCategoriesItem;

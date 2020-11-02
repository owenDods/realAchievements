import React from 'react';
// import PropTypes from 'prop-types';

import Compass from '../../img/compass.svg';
import Categories from '../../img/categories.svg';

import Button from '../button/Button';

export const className = 'explore';

const Explore = () => (

	<div className={className}>

		<Button label="By Location" icon={(<Compass />)} />

		<Button label="By Category" icon={(<Categories />)} />

	</div>

);

Explore.propTypes = {};

export default Explore;

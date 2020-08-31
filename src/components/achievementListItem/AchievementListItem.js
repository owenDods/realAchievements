import React from 'react';
import PropTypes from 'prop-types';

import ImgHolder from '../imgHolder/ImgHolder';

export const className = 'achievementListItem';

const AchievementListItem = ({ name, dateEarned }) => (

	<div className={className}>

		<ImgHolder />

		<div className={`${className}__textContent`}>

			<p className={`${className}__name`}>{name}</p>

			<p className={`${className}__dateEarned`}>Earned: {dateEarned}</p>

		</div>

	</div>

);

AchievementListItem.propTypes = {
	name: PropTypes.string,
	dateEarned: PropTypes.string
};

export default AchievementListItem;

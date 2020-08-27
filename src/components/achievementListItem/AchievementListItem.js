import React from 'react';
import PropTypes from 'prop-types';

export const className = 'achievementListItem';

const AchievementListItem = ({ name }) => (

	<div className={className}>

		<p>{name}</p>

	</div>

);

AchievementListItem.propTypes = {
	name: PropTypes.string
};

export default AchievementListItem;

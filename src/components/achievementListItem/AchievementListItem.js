import React from 'react';

export const className = 'achievementListItem';

const AchievementListItem = ({ name }) => {

	return (

		<div className={className}>

			<p>{name}</p>

		</div>

	);

};

export default AchievementListItem;

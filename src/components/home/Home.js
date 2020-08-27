import React, { useState, useEffect } from 'react';
import delay from 'lodash/fp/delay';

import achievementsFeedJson from '../../achievementsFeed.json';

import List from '../list/List';
import AchievementListItem from '../achievementListItem/AchievementListItem';

export const className = 'home';

const Home = () => {

	const [ homeFeedAchievements, setHomeFeedAchievements ] = useState(null);
	useEffect(() => {

		new Promise(res => {

			delay(2000, () => res(achievementsFeedJson));

		})
			.then(data => setHomeFeedAchievements(data));

	}, []);

	return (

		<div className={className}>

			<div className={`${className}__feed`}>

				<List items={homeFeedAchievements} name={`${className}-feed`}>

					<AchievementListItem />

				</List>

			</div>

		</div>

	);

};

export default Home;

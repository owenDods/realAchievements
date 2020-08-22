import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import delay from 'lodash/fp/delay';

export const className = 'landingPage';

const LandingPage = () => {

	const [ shouldRedirect, setShouldRedirect ] = useState(false);

	useEffect(() => {

		delay(5000, () => setShouldRedirect(true));

	}, []);

	const redirectContent = (<Redirect push to="/home" />);

	return (

		<div className={className}>

			<h1>Real Achievements</h1>

			{shouldRedirect ? redirectContent : null}

		</div>

	);

};

export default LandingPage;

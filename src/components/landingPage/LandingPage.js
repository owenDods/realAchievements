import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import delay from 'lodash/fp/delay';

export const className = 'landingPage';

const LandingPage = () => {

	const [ shouldRedirect, setShouldRedirect ] = useState(false);
	const redirectTimeout = useRef(null);

	useEffect(() => {

		redirectTimeout.current = delay(5000, () => setShouldRedirect(true));

		return () => {

			clearTimeout(redirectTimeout.current);

		};

	}, []);

	const redirectContent = (<Redirect push to="/home" />);

	return (

		<div className={className} onClick={() => setShouldRedirect(true)}>

			<h1>Real Achievements</h1>

			{shouldRedirect ? redirectContent : null}

		</div>

	);

};

export default LandingPage;

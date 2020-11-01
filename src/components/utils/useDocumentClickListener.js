import { useRef, useEffect } from 'react';

export default (onDocumentClick, listenerActive = true) => {

	const savedHandler = useRef();

	useEffect(() => {

		savedHandler.current = onDocumentClick;

	}, [ onDocumentClick ]);

	useEffect(() => {

		const eventListener = savedHandler.current;

		if (listenerActive) {

			document.addEventListener('click', eventListener);

		}

		return () => {

			document.removeEventListener('click', eventListener);

		};

	}, [ listenerActive ]);

};

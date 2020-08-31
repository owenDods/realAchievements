import React, { useState, cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import { appTransitionTiming } from '../../config';

export const placeholderCount = 7;
export const staggerDelay = 0.1;
export const className = 'list';

const List = ({ items, children, name }) => {

	const [ isWaitingForInitialLoad, setWaitingForInitialLoadStatus ] = useState(true);
	const [ showActualItems, setShowActualItems ] = useState(false);

	useEffect(() => {

		if (items && isWaitingForInitialLoad) {

			setWaitingForInitialLoadStatus(false);

		}

	}, [ items ]);

	const listItemClass = `${className}__item`;
	const getPlaceHolderItem = index => (

		<CSSTransition
			timeout={appTransitionTiming}
			classNames={className}
			key={`${className}-${name}-placeholder-${index}`}
			appear
			in
			onExited={() => setShowActualItems(true)}
		>

			<li className={`${listItemClass} ${listItemClass}--placeholder`} />

		</CSSTransition>

	);
	const getPlaceHolderItems = () => {

		const placeholderItems = [];

		while (placeholderItems.length < placeholderCount) {

			placeholderItems.push(getPlaceHolderItem(placeholderItems.length));

		}

		return placeholderItems;

	};
	const loadingPlaceholderContent = isWaitingForInitialLoad ? getPlaceHolderItems() : null;
	const listItems = showActualItems ? map.convert({ cap: false })((item, i) => (

		<CSSTransition
			timeout={appTransitionTiming}
			classNames={className}
			key={`${className}-${name}-${i}`}
		>

			<li
				className={listItemClass}
				style={{ transitionDelay: `${i * staggerDelay}s`, animationDelay: `${i * staggerDelay}s` }}
			>

				{cloneElement(children, item)}

			</li>

		</CSSTransition>

	), items) : null;

	const styleClass = !showActualItems ? `${className} ${className}--showingPlaceholders` : className;

	return (

		<div className={styleClass}>

			<TransitionGroup component="ul">

				{loadingPlaceholderContent}

				{listItems}

			</TransitionGroup>

		</div>

	);

};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})),
	children: PropTypes.element,
	name: PropTypes.string.isRequired
};

export default List;

import React, { useState, Fragment, cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';

export const className = 'list';

const List = ({ items, children, name }) => {

	const [ isWaitingForInitialLoad, setWaitingForInitialLoadStatus ] = useState(true);

	useEffect(() => {

		if (items && isWaitingForInitialLoad) {

			setWaitingForInitialLoadStatus(false);

		}

	}, [ items ]);

	const listItemClass = `${className}__item`;
	const loadingPlaceholderContent = isWaitingForInitialLoad ? (

		<Fragment>

			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />
			<li className={`${listItemClass} ${listItemClass}--placeholder`} />

		</Fragment>

	) : null;
	const listItems = isWaitingForInitialLoad ? null : map.convert({ cap: false })((item, i) => (

		<li className={listItemClass} key={`${className}-${name}-${i}`}>

			{cloneElement(children, item)}

		</li>

	), items);

	const styleClass = isWaitingForInitialLoad ? `${className} ${className}--initialLoad` : className;

	return (

		<div className={styleClass}>

			<ul>

				{loadingPlaceholderContent}

				{listItems}

			</ul>

		</div>

	);

};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})),
	children: PropTypes.element,
	name: PropTypes.string.isRequired
};

export default List;

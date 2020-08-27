import React, { useState, Fragment } from 'react';

export const className = 'list';

const List = () => {

	const [ isWaitingForInitialLoad, setWaitingForInitialLoadStatus ] = useState(true);

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

	const styleClass = isWaitingForInitialLoad ? `${className} ${className}--initialLoad` : className;

	return (

		<div className={styleClass}>

			<ul>

				{loadingPlaceholderContent}

			</ul>

		</div>

	);

};

export default List;

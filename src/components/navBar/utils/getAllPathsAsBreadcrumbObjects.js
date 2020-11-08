import map from 'lodash/fp/map';
import capitalize from 'lodash/fp/capitalize';

export default allPaths => {

	const nonRootPaths = allPaths.slice(1);
	const breadcrumbObjects = map.convert({ cap: false })((nonRootPath, i) => ({
		name: decodeURIComponent(nonRootPath).replace(/\w+/g, capitalize),
		to: `/${map(encodeURIComponent, allPaths.slice(0, (i + 2))).join('/')}`
	}), nonRootPaths);

	return breadcrumbObjects;

};

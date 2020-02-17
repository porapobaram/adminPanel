import React from 'react';
import { object } from 'prop-types';

const propTypes = {
	barCrawlItem: object,
};

const BarCrawlItemComponent = ({ barCrawlItem }) => {
	return (
		<div>
			<p>test bar</p>
		</div>
	);
};

BarCrawlItemComponent.propTypes = propTypes;

export { BarCrawlItemComponent };

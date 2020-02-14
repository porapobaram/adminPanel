import React from 'react';
import BarItem from './BarItem';
import { array } from 'prop-types';

const propTypes = {
	barCrawlFeed: array,
};

const BarCrawlPageComponent = ({ barCrawlFeed }) => {
	return (
		<div>
			{barCrawlFeed &&
				barCrawlFeed.map((barCrawlItem, index) => {
					return <BarItem key={index} />;
				})}
		</div>
	);
};

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;

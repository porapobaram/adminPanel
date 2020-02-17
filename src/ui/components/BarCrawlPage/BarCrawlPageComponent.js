import React from 'react';
import BarItem from './BarItem';
import { array } from 'prop-types';

const propTypes = {
	barCrawlFeed: array,
};

const BarCrawlPageComponent = ({ barCrawlFeed }) => {
	console.log({ barCrawlFeed });
	return (
		<div>
			{barCrawlFeed.length > 0 &&
				barCrawlFeed.map(barCrawlItem => {
					return <BarItem barCrawlItem={barCrawlItem} key={barCrawlItem._id} />;
				})}
		</div>
	);
};

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;

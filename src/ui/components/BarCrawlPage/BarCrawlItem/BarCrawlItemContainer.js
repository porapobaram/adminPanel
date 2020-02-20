import React from 'react';
import { BarCrawlItemComponent } from './BarCrawlItemComponent';
import { object } from 'prop-types';

const propTypes = {
	barCrawlItem: object,
};

const BarCrawlItemContainer = ({ barCrawlItem }) => {
	return <BarCrawlItemComponent barCrawlItem={barCrawlItem} />;
};

BarCrawlItemContainer.propTypes = propTypes;

export { BarCrawlItemContainer };

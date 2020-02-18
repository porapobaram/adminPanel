import React from 'react';
import { object } from 'prop-types';
import './BarCrawlItem.scss';

const propTypes = {
	barCrawlItem: object,
};

const BarCrawlItemComponent = ({ barCrawlItem }) => {
	const { bcName, bcTime, bcPrice } = barCrawlItem;
	function onClickHandler() {
		console.log(barCrawlItem._id);
	}
	return (
		<div className="barCrawl">
			<h2>{bcName}</h2>
			<p>{bcTime}</p>
			<p>{bcPrice}</p>
			<button onClick={onClickHandler}>test</button>
		</div>
	);
};

BarCrawlItemComponent.propTypes = propTypes;

export { BarCrawlItemComponent };

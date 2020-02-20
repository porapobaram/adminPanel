import React from 'react';
import { object, func, string } from 'prop-types';
import './BarCrawlItem.scss';

const propTypes = {
	barCrawlItem: object,
	onClickHandler: func,
	bcName: string,
	bcTime: string,
	bcPrice: string,
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
			<button onClick={onClickHandler} type="button">
				test
			</button>
		</div>
	);
};

BarCrawlItemComponent.propTypes = propTypes;

export { BarCrawlItemComponent };

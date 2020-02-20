import React from 'react';
import './BarItem.scss';
import { object } from 'prop-types';

const propTypes = {
	barItem: object,
};

const BarItemComponent = ({ barItem }) => {
	const { barName, address, barInfo } = barItem;
	function onClickHandler() {
		console.log(barItem._id);
	}
	return (
		<div className="bar">
			<h2>{barName}</h2>
			<p>{address}</p>
			<p>{barInfo}</p>
			<button onClick={onClickHandler} type="button">
				test
			</button>
		</div>
	);
};

BarItemComponent.propTypes = propTypes;

export { BarItemComponent };

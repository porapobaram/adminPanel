import React from 'react';
import './BarItem.scss';
// import propTypes from 'prop-types';

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
			<button onClick={onClickHandler}>test</button>
		</div>
	);
};

// BarsItemComponent.propTypes = {
//
// }

export { BarItemComponent };

import React from 'react';
import BarItem from './BarItem';

const BarPageComponent = ({ allBars }) => {
	return (
		<div>
			{allBars.map(item => {
				return <BarItem barItem={item} />;
			})}
		</div>
	);
};

export default BarPageComponent;

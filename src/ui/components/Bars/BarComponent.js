import React from 'react';
import BarItem from './BarItem';

const BarComponent = ({ allBars }) => {
    return (
        <div>
            {allBars.map(item => {
                return <BarItem barItem={item} />
            })}
        </div>
    );
};

export default BarComponent;
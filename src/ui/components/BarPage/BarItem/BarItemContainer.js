import React from 'react';
import { BarItemComponent } from './BarItemComponent';
// import propTypes from 'prop-types';

// const propTypes = {

// };

const BarItemContainer = ({ barItem }) => {
    return <BarItemComponent barItem={barItem} />;
};

// BarItemContainer.propTypes = propTypes;

export { BarItemContainer };

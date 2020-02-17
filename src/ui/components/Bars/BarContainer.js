import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarComponent from './BarComponent';
import { getBars } from '../../../reduxStore/bars/actions';
import { func } from 'prop-types';

const propTypes = {
    getBars: func,
};

const BarContainer = () => {
    const allBars = useSelector(state => state.barsReducer.allBars);
    const dispatch = useDispatch();



    const useBar = someFetchActionCreator => {
        useEffect(() => {
            dispatch(someFetchActionCreator());
        }, [someFetchActionCreator]);
    };

    useBar(getBars);

    return <BarComponent allBars={allBars} />;
};

BarContainer.propTypes = propTypes;

export default BarContainer;
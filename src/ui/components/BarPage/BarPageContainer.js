import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarPageComponent from './BarPageComponent';
import { getBars } from '../../../reduxStore/bars/actions';
import { func } from 'prop-types';

const propTypes = {
	getBars: func,
};

const BarPageContainer = () => {
	const allBars = useSelector(state => state.barsReducer.allBars);
	const dispatch = useDispatch();

	const useBar = someFetchActionCreator => {
		useEffect(() => {
			dispatch(someFetchActionCreator());
		}, [someFetchActionCreator]);
	};

	useBar(getBars);

	return <BarPageComponent allBars={allBars} />;
};

BarPageContainer.propTypes = propTypes;

export default BarPageContainer;

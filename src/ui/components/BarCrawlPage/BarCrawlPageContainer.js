import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BarCrawlPageComponent from './BarCrawlPageComponent';
import { getBarCrawlFeed } from '../../../reduxStore/barCrawl/actions';
import { func } from 'prop-types';

const propTypes = {
	getBarCrawlFeed: func,
};

// eslint-disable-next-line no-shadow
const BarCrawlPageContainer = () => {
	const dispatch = useDispatch();

	const useBarFeed = someFetchActionCreator => {
		useEffect(() => {
			dispatch(someFetchActionCreator());
		}, [someFetchActionCreator]);
	};

	useBarFeed(getBarCrawlFeed);

	return <BarCrawlPageComponent />;
};

BarCrawlPageContainer.propTypes = propTypes;

export default BarCrawlPageContainer;

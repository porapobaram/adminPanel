import React, { useState } from 'react';
import './BarItem.scss';
import ModalItem from '../../ModalItem/ModalItem';
import { Button } from 'reactstrap';
// import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const BarItemComponent = ({ barItem }) => {
	// eslint-disable-next-line react/prop-types
	const { barName, address, barInfo } = barItem;
	const [isModalOpen, toggleIsModalOpen] = useState(false);
	const toggle = () => toggleIsModalOpen(!isModalOpen);
	return (
		<div className="bar">
			<h2>{barName}</h2>
			<p>{address}</p>
			<p>{barInfo}</p>
			<Button size="sm" onClick={toggle} color="secondary">
				Bar Info
			</Button>
			{isModalOpen && <ModalItem toggle={toggle} />}
		</div>
	);
};

// BarsItemComponent.propTypes = {
//
// }

export { BarItemComponent };

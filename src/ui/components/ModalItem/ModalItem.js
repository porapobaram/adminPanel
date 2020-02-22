/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

const propTypes = {
	toggle: func,
};

// eslint-disable-next-line import/no-mutable-exports
let ModalItem = ({ toggle }) => {
	return (
		<div>
			<Modal isOpen toggle={toggle}>
				<ModalHeader toggle={toggle}>Bar Info</ModalHeader>
				<ModalBody>
					<form>
						<div>
							<label>Bar Name</label>
							<div>
								<Field
									name="BarName"
									component="input"
									type="text"
									placeholder="bar_name"
									className="inputStyle offset-md-1 col-md-7"
									label="Indication"
									labelClassName="col-md-4 mt-2"
								/>
							</div>
						</div>
						<div>
							<label>Bar Address</label>
							<div>
								<Field
									name="BarAddress"
									component="input"
									type="text"
									placeholder="bar_address"
									className="inputStyle offset-md-1 col-md-7"
									label="Indication"
									labelClassName="col-md-4 mt-2"
								/>
							</div>
						</div>
						<div>
							<label>Bar Informatiom</label>
							<div>
								<Field
									name="Bar Information"
									component="input"
									type="textarea"
									placeholder="bar_info"
									className="inputStyle offset-md-1 col-md-7"
									label="Indication"
									labelClassName="col-md-4 mt-2"
								/>
							</div>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Edit
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

ModalItem.propTypes = propTypes;

ModalItem = reduxForm({
	form: 'simple_form',
})(ModalItem);

export default ModalItem;

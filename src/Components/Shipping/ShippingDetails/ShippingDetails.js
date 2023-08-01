import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShoppingItem from '../../ContactDetails/ShoppingItem/ShoppingItem';
import ShippingContent from '../ShippingContent/ShippingContent';

function ShippingDetails() {
	return (
		<Container>
			<Row>
				<Col lg={6}>
					<ShippingContent />
				</Col>
				<Col lg={6}>
					<ShoppingItem />
				</Col>
			</Row>
		</Container>
	);
}

export default ShippingDetails;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShoppingItem from '../../ContactDetails/ShoppingItem/ShoppingItem';
import ShippingContent from '../ShippingContent/ShippingContent';

function ShippingDetails() {
	return (
		<div className='wrapper'>
			<Container>
				<Row>
					<Col lg={6}>
						<ShippingContent/>
					</Col>
					<Col lg={6}>
						<ShoppingItem />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ShippingDetails;
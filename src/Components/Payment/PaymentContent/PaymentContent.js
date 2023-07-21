import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShoppingItem from '../../ContactDetails/ShoppingItem/ShoppingItem';
import PaymentContentDetails from '../PaymentContentDetails/PaymentContentDetails';

function PaymentContent() {
  return (
	<div className='wrapper'>
		<section id='payment-content'> 
			<Container>
				<Row>
					<Col lg={6}>
						<PaymentContentDetails/>
					</Col>
					<Col lg={6}>
						<ShoppingItem/>
					</Col>
				</Row>
			</Container>
		</section>
	</div>
  );
}

export default PaymentContent;
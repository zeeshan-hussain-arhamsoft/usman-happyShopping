import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import AddToCartItemDetails from '../AddToCartItemDetails/AddToCartItemDetails';
import AddToCartItemDetailsContent from '../AddToCartItemDetailsContent/AddToCartItemDetailsContent';
import "./AddToCartItemsContent.css";
function AddToCartItemsContent() {
	return (
		<section id='add-to-cart-items-content'>
			<div className='items-type'>
				<Container>
					<div className='item-type-content'>
						<strong>Home <span>/</span> Shop <span>/</span> Computer & Laptop</strong>
					</div>
				</Container>
			</div>
			<div className='add-cart-item-type'>
				<Container>
					<Row>
						<Col lg={6}>
							<AddToCartItemDetails />
						</Col>
						<Col lg={6}>
							<AddToCartItemDetailsContent />
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}

export default AddToCartItemsContent;
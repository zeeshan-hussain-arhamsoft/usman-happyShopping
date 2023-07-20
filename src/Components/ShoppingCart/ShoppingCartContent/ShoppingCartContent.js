import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../../Assets/Assets';
import "./ShoppingCartContent.css";
function ShoppingCartContent() {

	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div className='wrapper'>
			<section id='shopping-cart-content'>
				<div className='shopping-cart-content-heading-wrapper'>
					<Container>
						<div className='shopping-cart-content-heading'>
							<h6>Your Shopping Cart</h6>
							<strong>Home <span>/</span> Cart</strong>
						</div>
					</Container>
				</div>
				<Container>
					<div className='shopping-cart-items-wrapper'>
						<Row>
							<Col lg={6}>
								<div className='shopping-cart-items'>
									<h5>Products</h5>
									<div className='shopping-cart-items-details'>
										<div className='shopping-cart-img'>
											<img src={Images.itemsDetailsimg4} alt=''/>
										</div>
										<div className='shopping-cart-details'> 
											<h5>Apple iMac 27-inch 2020 with Retina 5K display - MXWV2</h5>
										</div>
									</div>
								</div>
								<div>
									<h2>Counter: </h2>
									<button onClick={handleIncrement}>+</button>
									<div>{count}</div>
									<button onClick={handleDecrement}>-</button>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</div>
	)
}

export default ShoppingCartContent
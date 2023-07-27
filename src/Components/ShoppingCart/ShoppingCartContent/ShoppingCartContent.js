import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../../Assets/Assets';
import { Link } from 'react-router-dom';
import "./ShoppingCartContent.css";
function ShoppingCartContent() {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleDecrement = () => {
		setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
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
							<Col lg={6} md={6}>
								<div className='shopping-cart-items'>
									<h5>Products</h5>
									<div className='shopping-cart-items-details'>
										<div className='shopping-cart-img'>
											<img src={Images.itemsDetailsimg4} alt='' />
										</div>
										<div className='shopping-cart-details'>
											<h5>Apple iMac 27-inch 2020 with Retina 5K display - MXWV2</h5>
										</div>
									</div>
								</div>

							</Col>
							<Col lg={2} md={2} xs={4}>
								<div className='shopping-cart-items-counter'>
									<h5>Quantity</h5>
									<div className='count-state'>
										<button onClick={handleDecrement} className='increment-decrement-btns'>-</button>
										<div className='counter-nums'>{count}</div>
										<button onClick={handleIncrement} className='increment-decrement-btns'>+</button>
									</div>
								</div>
							</Col>
							<Col lg={2} md={2} xs={4}>
								<div className='shopping-cart-items-price'>
									<h5>Price</h5>
									<strong>$1,799</strong>
								</div>
							</Col>
							<Col lg={2} md={2} xs={4}>
								<div className='shopping-cart-items-price'>
									<h5>Total</h5>
									<strong>$1,799</strong>
								</div>
							</Col>
						</Row>
					</div>
					<div className='grand-total-amount-wrapper'>
						<Row>
							<Col lg={6}>
								<div className="coupon-bar-wrapper">
									<form action="/" className="coupon-bar-form">
										<div className="input-group coupon-bar-wrapper">
											<input type="text" className="form-control coupon-bar" placeholder="Enter Coupon Code" aria-label="Search" aria-describedby="basic-addon2" />
										</div>
										<div className="input-group-append coupon-button">
											<button className="hvr-bounce-to-right btn coupon-btn" type="submit"><img src="images/search-icon.svg" alt="" /> Apply Coupon</button>
										</div>
									</form>
								</div>
							</Col>
							<Col lg={6}>
								<div className='grand-total-col'>
									<h5>Total Amount: $1,799</h5>
									<strong>Shipping, taxes & discounts will be calculated at checkout</strong>
								</div>
							</Col>
						</Row>
					</div>
					<div className='checkout-buttons'>
						<Link to='/' className='continue-shopping-btn checkout-btn'>Continue Shopping</Link>
						<Link to='/' className='checkout-btn'>Proceed to Checkout</Link>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default ShoppingCartContent;
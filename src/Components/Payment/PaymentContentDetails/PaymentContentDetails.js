import React from 'react';
import "./PaymentContentDetails.css";
import { Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function PaymentContentDetails() {
	return (
		<div className='payment-details-wrapper'>
			<div className='payment-details-path'>
				<strong>Cart / Information/ Shipping/ Payment</strong>
			</div>
			<div className='shipping-details-confirmation-wrapper'>
				<div className='shipping-details-confirmation'>
					<Row>
						<Col lg={2}>
							<div className='shipping-details-confirmation-labels'>
								<h6>Contact</h6>
							</div>
						</Col>
						<Col lg={8}>
							<div className='shipping-details-cinfirmation-data'>
								<h6>Your Name (yourname@email.com)</h6>
							</div>
						</Col>
						<Col lg={2}>
							<div className='shipping-details-changing-btn'>
								<Link to='/' className='shipping-details-changing-link'>Change</Link>
							</div>
						</Col>
					</Row>
				</div>
				<div className='shipping-details-confirmation'>
					<Row>
						<Col lg={2}>
							<div className='shipping-details-confirmation-labels'>
								<h6>Ship to</h6>
							</div>
						</Col>
						<Col lg={8}>
							<div className='shipping-details-cinfirmation-data'>
								<h6>Your complete address with postal code</h6>
							</div>
						</Col>
						<Col lg={2}>
							<div className='shipping-details-changing-btn'>
								<Link to='/' className='shipping-details-changing-link'>Change</Link>
							</div>
						</Col>
					</Row>
				</div>
				<div className='shipping-details-confirmation'>
					<Row>
						<Col lg={2}>
							<div className='shipping-details-confirmation-labels'>
								<h6>Method</h6>
							</div>
						</Col>
						<Col lg={8}>
							<div className='shipping-details-cinfirmation-data'>
								<h6>Standard $80</h6>
							</div>
						</Col>
						<Col lg={2}>
							<div className='shipping-details-changing-btn'>

							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className='payment-method-heading'>
				<h5>Payments</h5>
				<span>All transactions are secure and encrypted.</span>
			</div>
			<div className='shipping-details-confirmation-wrapper'>
				<div className='payment-method-radio'>
					<Form>
						{['radio'].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									inline
									label="Credit Card / Debit Card / Net Banking"
									name="group1"
									type={type}
									id={`inline-${type}-1`}
								/>
								<Form.Check
									inline
									label="Same as shipping address"
									name="group1"
									type={type}
									id={`inline-${type}-2`}
								/>
							</div>
						))}
					</Form>
				</div>
			</div>
			<div className='payment-method-heading'>
				<h5>Billing Address</h5>
				<span>Select the address that matches your card or payment method.</span>
			</div>
			<div className='shipping-details-confirmation-wrapper'>
				<div className='payment-method-radio'>
					<Form>
						{['radio'].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									inline
									label="Use a different billing address"
									name="group2"
									type={type}
									id={`inline-${type}-3`}
								/>
								<Form.Check
									inline
									label="Same as shipping address"
									name="group2"
									type={type}
									id={`inline-${type}-4`}
								/>
							</div>
						))}
					</Form>
				</div>
			</div>
			<div className="complete-order-btns-wrapper">
				<Link to='/' className='complete-order'>Order Complete</Link>
				<Link to='/' className='return-to-shipping'>Return to shipping</Link>
			</div>
		</div>
	);
}

export default PaymentContentDetails;
import React from 'react';
import { Row, Col,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShippingContent.css";
function ShippingContent() {
	return (
		<div className='shipping-content-wrapper'>
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
			</div>
			<div className='shipping-method-heading'>
				<h5>Shipping Method</h5>
			</div>
			<div className='shipping-price'>
				<Form className='shipping-price-from'>
					{['radio'].map((type) => (
						<div key={`inline-${type}`} className="mb-3 shipping-price-radio">
							<Form.Check
								inline
								label="Standard"
								name="group1"
								type={type}
								id={`inline-${type}-1`}
							/>						
						</div>
					))}
				</Form>
				<strong>$80</strong>
			</div>
			<div className='continue-payment-btn-wrapper'>
				<Link to='/' className='continue-payment-btn'>Continue to payment</Link>
				<Link to='/' className='return-to-information-btn'>Return to information</Link>				
			</div>
		</div>
	);
}

export default ShippingContent;
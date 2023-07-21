import React from 'react';
import { Form } from 'react-bootstrap';
import "./ContactDetailsForm.css";
import { Link } from 'react-router-dom';
function ContactDetailsForm() {
	return (
		<div className='contact-details-form-wrapper'>
			<div className='contact-information'>
				<strong>Cart / Information/ <strong className='strong2'>Shipping/ Payment</strong></strong>
			</div>
			<div className='contact-details-heading'>
				<h3>Contact Information</h3>
				<span>Already have an account? <Link to='/' className='contact-details-login-link'> Log In</Link></span>
			</div>
			<div className='contact-information-bar-wrapper'>
				<Form action="/" className="contact-information-bar-form">
					<div className="input-group contact-info">
						<input type="text" className="form-control contact-information-bar" placeholder="Email or Mobile Phone Number" aria-label="Search" aria-describedby="basic-addon2" />
					</div>
					<div className='contact-details-checkbox'>
						<Form.Check aria-label="option 1" label="Keep me up to date on news & offers" />
					</div>
				</Form>
			</div>
			<div className='shipping-address-wrapper'>
				<h3>Shipping Address</h3>
				<Form action='/'>
					<div className='shipping-address-name'>
						<div className="input-group contact-info">
							<input type="text" className="form-control shipping-address-information-bar left-bar" placeholder="First Name" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
						<div className="input-group contact-info">
							<input type="text" className="form-control shipping-address-information-bar" placeholder="Last Name" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
					</div>
					<div className="input-group contact-info">
						<input type="text" className="form-control shipping-address-information-bar" placeholder="Address" aria-label="Search" aria-describedby="basic-addon2" required />
					</div>
					<div className="input-group contact-info">
						<input type="text" className="form-control shipping-address-information-bar" placeholder="Apartment, suite, etc. (optional)" aria-label="Search" aria-describedby="basic-addon2" required />
					</div>
					<div className="input-group contact-info">
						<input type="text" className="form-control shipping-address-information-bar" placeholder="City" aria-label="Search" aria-describedby="basic-addon2" required />
					</div>
					<div className='shipping-address-name'>
						<div className="input-group contact-info">
							<input type="text" className="form-control shipping-address-information-bar left-bar" placeholder="Country" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
						<div className="input-group contact-info">
							<input type="text" className="form-control shipping-address-information-bar" placeholder="Postal Code" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
					</div>
					<div className='contact-details-checkbox shipping-details-checkbox'>
						<Form.Check aria-label="option 1" label="Save this information for next time" />
					</div>
					<div className="input-group-append shipping-address-button">
						<button className="hvr-bounce-to-right btn shipping-address-btn" type="submit">Continue Shipping</button>
						<Link to='/' className='return-to-cart' >Return to cart</Link>
					</div>
					
				</Form>
			</div>
		</div >
	);
}

export default ContactDetailsForm;
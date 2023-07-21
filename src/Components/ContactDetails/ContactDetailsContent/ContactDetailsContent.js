import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactDetailsForm from '../ContactDetailsForm/ContactDetailsForm'
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import "./ContactDetailsContent.css";

function ContactDetailsContent() {
	return (
		<div className='wrapper'>
			<section id='contact-details'>
				<Container>
					<Row>
						<Col lg={6}>
							<ContactDetailsForm/>
						</Col>
						<Col lg={6}>
							<ShoppingItem/>
						</Col>
					</Row>
				</Container>
			</section>
			
		</div>
	)
}

export default ContactDetailsContent
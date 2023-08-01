import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactDetailsForm from '../ContactDetailsForm/ContactDetailsForm'
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import "./ContactDetailsContent.css";

function ContactDetailsContent() {
	return (
		<section id='contact-details'>
			<Container>
				<Row>
					<Col lg={6}>
						<ContactDetailsForm />
					</Col>
					<Col lg={6}>
						<ShoppingItem />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default ContactDetailsContent
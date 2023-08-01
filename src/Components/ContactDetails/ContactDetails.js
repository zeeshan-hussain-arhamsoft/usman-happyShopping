import React from 'react';
import Header from '../Header/Header';
import ContactDetailsContent from './ContactDetailsContent/ContactDetailsContent';
import Footer from '../Footer/Footer';
function ContactDetails() {
	return (
		<div className='wrapper'>
			<Header />
			<ContactDetailsContent />
			<Footer />
		</div>
	);
}

export default ContactDetails;
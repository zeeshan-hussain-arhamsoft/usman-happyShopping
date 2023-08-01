import React from 'react';
import Header from '../Header/Header';
import PaymentContent from './PaymentContent/PaymentContent';
import Footer from '../Footer/Footer';

function Payment() {
	return (
		<div className='wrapper'>
			<Header />
			<PaymentContent />
			<Footer />
		</div>
	)
}

export default Payment;
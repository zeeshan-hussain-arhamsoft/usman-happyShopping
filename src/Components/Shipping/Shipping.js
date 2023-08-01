import React from 'react';
import Header from '../Header/Header';
import ShippingDetails from './ShippingDetails/ShippingDetails';
import Footer from "../Footer/Footer";

function Shipping() {
	return (
		<div className='wrapper'>
			<Header />
			<ShippingDetails />
			<Footer />
		</div>
	)
}

export default Shipping;
import React from 'react'
import Header from '../Header/Header'
import ShoppingCartContent from './ShoppingCartContent/ShoppingCartContent';
import KeepInTouch from '../Home/KeepInTouch/KeepInTouch';
import Footer from '../Footer/Footer';

function ShoppingCart() {
	return (
		<div className='wrapper'>
			<Header />
			<ShoppingCartContent />
			<KeepInTouch />
			<Footer />
		</div>
	)
}

export default ShoppingCart;
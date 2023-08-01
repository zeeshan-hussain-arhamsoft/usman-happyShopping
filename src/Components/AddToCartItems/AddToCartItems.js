import React from 'react'
import Header from "../Header/Header";
import AddToCartItemsContent from './AddToCartItemsContent/AddToCartItemsContent';
import MoreInfoAddToCart from './MoreInfoAddToCart/MoreInfoAddToCart';
import MultipleItems from "../Home/TopProducts/TopProducts";
import KeepInTouch from '../Home/KeepInTouch/KeepInTouch';
import Footer from '../Footer/Footer';
function AddToCartItems() {
	return (
		<div className='wrapper'>
			<Header/>
			<AddToCartItemsContent/>
			<MoreInfoAddToCart/>
			<MultipleItems/>
			<KeepInTouch/>
			<Footer/>
		</div>
	)
}

export default AddToCartItems
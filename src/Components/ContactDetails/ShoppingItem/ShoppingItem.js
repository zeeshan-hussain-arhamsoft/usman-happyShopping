import React from 'react';
import { Images } from '../../../Assets/Assets';
import "./ShoppingItem.css";

function ShoppingItem() {
	return (
		<div className='shopping-item-wrapper'>
			<div className='shopping-items-details-wrapper'>
				<div className='shopping-items-details'>
					<div className='shopping-item-img'>
						<img src={Images.itemsDetailsimg4} alt='' />
					</div>
					<div className='shopping-item-details'>
						<h5>Apple iMac 27-inch 2020 with Retina 5K display - MXWV2</h5>
					</div>
				</div>
				<strong>$1,799</strong>
			</div>
			<div className='shopping-item-subtotal'>
				<h6>Subtotal</h6>
				<strong>$1,799</strong>
			</div>
			<div className='shopping-item-shipping-price'>
				<h6>Shipping</h6>
				<strong>Calculated at next step</strong>
			</div>
			<div className='shopping-item-total-price'>
				<h6>Total</h6>
				<strong><span>USD</span> $1,799</strong>
			</div>
		</div>
	);
}

export default ShoppingItem;
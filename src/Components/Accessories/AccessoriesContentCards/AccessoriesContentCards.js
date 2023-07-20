import React from 'react'
import { Images } from '../../../Assets/Assets';

function AccessoriesContentCards(Props) {
	return (
		<div className='card-wrapper'>
			<span>{Props.accessoriesBrand}</span>
			<h3>{Props.accessoriesDetails}</h3>
			<div className='accessories-price'>
				<strong>{Props.accessoriesPrice}</strong>
				<span>{Props.accessoriesDiscount}</span>
			</div>

		</div>
	)
}

export default AccessoriesContentCards;
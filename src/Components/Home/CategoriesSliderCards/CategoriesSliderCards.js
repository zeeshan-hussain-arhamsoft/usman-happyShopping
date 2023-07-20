import React from 'react'

function CategoriesSliderCards(Props) {
	return (
		<div>
			
			<div className='categories-items-wrapper'>
				<div className='categories-items1'>
					<img src={Props.categoriesItems} alt='' />
				</div>
				<span>{Props.companyName}</span>
				<h6>{Props.itemsSpecs}</h6>
				<strong>{Props.itemprice}</strong>
				<span className='old-price'>{Props.oldPrice}</span>
			</div>
		</div>
	)
}

export default CategoriesSliderCards
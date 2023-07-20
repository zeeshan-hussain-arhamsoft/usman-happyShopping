import React from 'react';

function TopProductsCards(Props) {
  return (
	<div>
		<div className='top-items-wrapper'>
				<div className='top-items1'>
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

export default TopProductsCards
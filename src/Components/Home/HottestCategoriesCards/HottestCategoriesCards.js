import React from 'react'

function HottestCategoriesCards(Props) {
	return (
		<div className='HottestCategories-col'>
			<div className='hottestcategories-card-img'>
				<img src={Props.categoreislogo} />
			</div>
			<div className='hottestCategories-hover-img'>
				<img src={Props.categoreisHoverImg} alt=''/>
			</div>
			<h5>{Props.categoreistype}</h5>
			<span>{Props.itmescount}</span>
		</div>
	);
}

export default HottestCategoriesCards;
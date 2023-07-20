import React from 'react'

function HottestCategoriesCards(props) {
	return (
		<div className='HottestCategories-col'>
			<div className='hottestcategories-card-img'>
				<img src={props.categoreislogo} />
			</div>
			<h5>{props.categoreistype}</h5>
			<span>{props.itmescount}</span>
		</div>
	);
}

export default HottestCategoriesCards;
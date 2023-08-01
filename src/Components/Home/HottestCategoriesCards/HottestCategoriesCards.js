import React from 'react'
import { Link } from 'react-router-dom';
function HottestCategoriesCards(Props) {
	return (
		<Link to='/' className='hvr-shutter-out-vertical HottestCategories-col'>
			<div className='hottestcategories-card-img'>
				<img src={Props.categoreislogo} />
			</div>
			<div className='hottestCategories-hover-img'>
				<img src={Props.categoreisHoverImg} alt='' />
			</div>
			<h5>{Props.categoreistype}</h5>
			<span>{Props.itmescount}</span>
		</Link>
	);
}
export default HottestCategoriesCards;
import React from 'react'
import { Link } from 'react-router-dom'

function PriceRangeProps(Props) {
	return (
		<li className='price-range-li' ><Link to='/' className='price-range-link' >{Props.priceRange}</Link></li>

	)
}

export default PriceRangeProps
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '../../../Assets/Assets'
import './AccessoriesBanner.css';

function AccessoriesBanner() {
	return (
		<div className='wrapper'>
			<section id='accessories-banner'>
				< div className='accessories-banner-wrapper'>
					<div className='accessories-banner-img'>
						<img src={Images.accessoriesBanner} alt='' />
					</div>
					<div className='accessories-banner-content'>
						<h3>Computer & Laptop <span>Collection</span></h3>
					</div>
				</div>				
			</section>
		</div>
	)
}

export default AccessoriesBanner
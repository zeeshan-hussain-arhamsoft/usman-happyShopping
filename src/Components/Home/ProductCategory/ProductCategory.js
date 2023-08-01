import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import { Link } from 'react-router-dom';
function ProductCategory() {
	return (
		<div id='product-category'>
			<Container>
				<Row>
					<Col lg={4} md={6}>
						<div className='computers-col-wrapper'>
							<div className='computer-content'>
								<span>30% Off</span>
								<h3>Computers</h3>
								<Link to="/" className='hvr-bounce-in computer-col-Link'>SHOP NOW</Link>
							</div>
							<div className='computer-img'>
								<img src={Images.computerProduct} alt='' />
							</div>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className='phone-col-wrapper'>
							<div className='phones-content'>
								<span>20% Off</span>
								<h3>Mobile Phones</h3>
								<Link to="/" className='hvr-bounce-in phones-col-Link'>SHOP NOW</Link>
							</div>
							<div className='computer-img'>
								<img src={Images.PhonesProduct} alt='' />
							</div>
						</div>
					</Col>
					<Col lg={4}>
						<div className='Accessories-col-wrapper'>
							<div className='Accessories-content'>
								<span>25% Off</span>
								<h3>Accessories</h3>
								<Link to="/" className='hvr-bounce-in Accessories-col-Link'>SHOP NOW</Link>
							</div>
							<div className='Accessories-img'>
								<img src={Images.Asseccories} alt='' />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ProductCategory;
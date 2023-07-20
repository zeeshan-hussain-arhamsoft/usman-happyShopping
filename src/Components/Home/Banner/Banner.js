import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./Banner.css";
import { Link } from 'react-router-dom';

function Banner() {
	return (
		<div className='wrapper'>
			<section id='banner'>
				<Container>
					<div className='banner-wrapper'>
						<div className='banner-img'>
							<img src={Images.homeBanner} />
						</div>
						<div className='banner-content-wrapper'>
							<div className='product-name'>
								<h3>Smart Home</h3>
								<span>Get Flat 15% Off on order</span>
								<Link to="/" className='hvr-bounce-to-right-banner product-name-link'>SHOP NOW</Link>
							</div>
							<div className='product-price'>
								<span>Great Deals Every weekends</span>
								<h3>Only $499</h3>
							</div>
						</div>
					</div>
					<Row>
						<Col lg={4}>
							<div className='computers-col-wrapper'>
								<div className='computer-content'>
									<span>30% Off</span>
									<h3>Computers</h3>
									<Link to="/" className='computer-col-Link'>SHOP NOW</Link>
								</div>
								<div className='computer-img'>
									<img src={Images.computerProduct} />
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className='phone-col-wrapper'>
								<div className='phones-content'>
									<span>20% Off</span>
									<h3>Mobile Phones</h3>
									<Link to="/" className='phones-col-Link'>SHOP NOW</Link>
								</div>
								<div className='computer-img'>
									<img src={Images.PhonesProduct} />
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className='Accessories-col-wrapper'>
								<div className='Accessories-content'>
									<span>25% Off</span>
									<h3>Accessories</h3>
									<Link to="/" className='Accessories-col-Link'>SHOP NOW</Link>
								</div>
								<div className='Accessories-img'>
									<img src={Images.Asseccories} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default Banner;
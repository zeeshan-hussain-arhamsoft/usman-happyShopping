import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../../Assets/Assets';
import "./HotOffers.css";
import { Link } from 'react-router-dom';

function HotOffers() {
	return (
		<div className='wrapper'>
			<section id='hot-offers'>
				<Container>
					<div className='hot-offer-heading'>
						<h3>Hot Offers</h3>
					</div>
					<Row>
						<Col lg={6}>
							<div className='hot-offer-col-wrapper'>
								<div className='VR-img'>
									<img src={Images.virtualReality} alt='' />
								</div>
								<div className='VR-content'>
									<span>Google Glasses</span>
									<h3>Vr, Reality World</h3>
									<div className='VR-link-wrapper'>
										<Link to="/" className='VR-link'>EXPLORE MORE</Link>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className='hot-offer-col-wrapper'>
								<div className='VR-img'>
									<img src={Images.brandedHandfree} alt='' />
								</div>
								<div className='VR-content'>
									<span>Branded Handfree</span>
									<h3>Smart Accessories</h3>
									<div className='VR-link-wrapper'>
										<Link to="/" className='VR-link'>SAVE 30% OFF</Link>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className='hot-offer-col-wrapper'>
								<div className='VR-img'>
									<img src={Images.googleMini} alt='' />
								</div>
								<div className='googleMini-content'>
									<h3>Google Home Mini</h3>
									<span>Next Gen, Smart Homes</span>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className='hot-offer-col-wrapper'>
								<div className='VR-img'>
									<img src={Images.homeTheater} alt='' />
								</div>
								<div className='homeTheater-content'>
									<h3>Boss, Home Theatre</h3>
									<span>Next Gen, Smart Homes</span>
									<div className='homeTheater-link-wrapper'>
										<Link to="/" className='homeTheater-link'>SAVE 30% OFF</Link>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className='hot-offer-col-wrapper'>
								<div className='VR-img'>
									<img src={Images.miStores} alt='' />
								</div>
								<div className='miStores-content'>
									<h3>Exclusive Mi, Stores</h3>
									<span>Big Storage</span>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	)
}

export default HotOffers
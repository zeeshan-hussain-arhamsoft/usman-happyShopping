import React from 'react';
import { Container} from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./Banner.css";

function Banner() {
	return (
		<section id='banner'>
			<Container>
				<div className='banner-wrapper'>
					<div className='banner-img'>
						<img src={Images.homeBanner} alt=''/>
					</div>
					{/* <div className='banner-content-wrapper'>
							<div className='product-name'>
								<h3>Smart Home</h3>
								<span>Get Flat 15% Off on order</span>
								<Link to="/" className='hvr-bounce-to-right-banner product-name-link'>SHOP NOW</Link>
							</div>
							<div className='product-price'>
								<span>Great Deals Every weekends</span>
								<h3>Only $499</h3>
							</div>
						</div> */}
				</div>
			
			</Container>
		</section>
	);
}

export default Banner;
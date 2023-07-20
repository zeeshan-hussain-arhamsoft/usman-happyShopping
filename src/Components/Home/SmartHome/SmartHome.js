import React from 'react';
import { Container } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./SmartHome.css";
import { Link } from 'react-router-dom';


function SmartHome() {
  return (
	<div className='wrapper'>
		<section id='smarthome'>
			<Container>
				 <div className='smart-home-wrapper'>
					<div className='smart-home-img'>
						<img src={Images.smartHome} />
					</div>
					<div className='smarthome-content'>
						<h3>Smart Homes, Next Generation Devices</h3>
						<h4>shop now & get 30% off on this festival season</h4>
						<Link to="/" className='smart-home-link'> SAVE 30% OFF</Link>
					</div>
				 </div>
			</Container>
		</section>
	</div>
  );
}

export default SmartHome;
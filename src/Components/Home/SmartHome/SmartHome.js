import React from 'react';
import { Container } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./SmartHome.css";
import { Link } from 'react-router-dom';


function SmartHome() {
	return (
		<section id='smarthome'>
			<Container>
				<div className='smart-home-wrapper'>
					<div className='smart-home-img'>
						<img src={Images.smartHome} />
					</div>
					<div className='smarthome-content'>
						<h3>Smart Homes, Next Generation Devices</h3>
						<h4>shop now & get 30% off on this festival season</h4>
						<Link to="/" className='hvr-bounce-to-right-smartHome smart-home-link'> SAVE 30% OFF</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default SmartHome;
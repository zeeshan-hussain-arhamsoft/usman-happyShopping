import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./KeepInTouch.css";
function KeepInTouch() {
	return (
		<div className='wrapper'>
			<section id='keep-in-touch'>
				<Container>
					<Row>
						<Col lg={6}>
							<div className='keep-in-touch-content-col'>
								<h3>Keep In Touch For Latest Updates</h3>
								<span>Save up to 45% off on your next order</span>
							</div>
						</Col>
						<Col lg={6}>
							<div className='keep-in-touch-subscribe-bar'>
								<form action="/" className="keep-in-touch-bar-form">
									<div className="input-group">
										<input type="text" className="form-control keep-in-touch-search-bar" placeholder="Enter your email" aria-label="Search" aria-describedby="basic-addon2" />
									</div>
									<div className="input-group-append keep-in-touch-search-button">
										<button className="hvr-bounce-to-right btn keep-in-touch-search-btn" type="submit"><img src="images/search-icon.svg" alt="" /> Subscribe</button>
									</div>
								</form>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default KeepInTouch;
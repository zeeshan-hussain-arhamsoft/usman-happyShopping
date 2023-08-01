import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./HeaderContact.css";
import { Link } from 'react-router-dom';
function HeaderContact() {
	return (
		<div id="track-order-cashback">
			<Container>
				<div className="cashback-row-wrapper">
					<Row className="align-items-center">
						<Col lg={6} md={5} sm={7}>
							<div className="cashback">
								<div className="tag-icon">
									<img src={Images.TagIcon} alt="" />
								</div>
								<p>Get upto 25% cashback on your first order</p>
							</div>
						</Col>
						<Col lg={6} md={7} sm={5}>
							<ul className="cashback-email-ul">
								<li>
									<div className="track-order">
										<Link to="/" className="track-order-anchor">
											<div className="truck-icon">
												<img src={Images.truckIcon} alt="" />
											</div>
											<span>Track Order</span>
										</Link>
									</div>
								</li>
								<li>
									<div className="email">
										<Link to="mailto:Admin@email.com" className="company-email-address">
											<img src={Images.emailIcon} alt='' />
											<span>Admin@email.com</span>
										</Link>
									</div>
								</li>
								<li className='region-li'>
									<Dropdown className="dropdown language">
										<Dropdown.Toggle variant="success" id="dropdown-basic" className='language-dropdown-button d-flex align-items-center usd-btn'>
											<div className="flag-img">
												<img src={Images.Flag} alt="" className="language-flag" />
											</div>
											USD
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item to="#/action-1">Action</Dropdown.Item>
											<Dropdown.Item to="#/action-2">Another action</Dropdown.Item>
											<Dropdown.Item to="#/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>
								<li className='language-li'>
									<Dropdown className="dropdown language">
										<Dropdown.Toggle variant="success" id="dropdown-basic" className="language-dropdown-button d-flex align-items-center">
											English
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item to="#/action-1">Arabic</Dropdown.Item>
											<Dropdown.Item to="#/action-2">Urdu</Dropdown.Item>
											<Dropdown.Item to="#/action-3">Spanish</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default HeaderContact;
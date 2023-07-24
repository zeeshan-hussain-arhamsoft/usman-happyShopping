import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import "./HeaderContact.css";
import { Link } from 'react-router-dom';

function HeaderContact() {
	return (
		<div className='wrapper'>
			<section id="track-order-cashback">
				<Container>
					<div className="cashback-row-wrapper">
						<Row className="align-items-center">
							<Col lg={6} md={5}>
								<div className="cashback">
									<div className="tag-icon">
										<img src={Images.TagIcon} alt="" />
									</div>
									<p>Get upto 25% cashback on your first order</p>
								</div>
							</Col>
							<Col lg={6} md={7}>
								<ul className="cashback-email-ul">
									<li>
										<div className="track-order">
											<div className="truck-icon">
												<img src={Images.truckIcon} alt="" />
											</div>
											<Link to="/" className="track-order-anchor">rack Order</Link>
										</div>
									</li>
									<li>
										<div className="email">
											<img src={Images.emailIcon} alt='' />
											<Link to="mailto:Admin@email.com" className="company-email-address">Admin@email.com</Link>
										</div>
									</li>
									<li className='region-li'>
										<Dropdown className="dropdown language">
											<Dropdown.Toggle variant="success" id="dropdown-basic" className='language-dropdown-button d-flex align-items-center usd-btn'>
												<div className="flag-img">
													<img src={Images	.Flag} alt="" className="language-flag" />
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
										{/* <div className="dropdown language">
										<button className="btn dropdown-toggle  language-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

										</button>
										<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
											<li><Link className="dropdown-item" to="/"></Link></li>
											<li><Link className="dropdown-item" to="/"></Link></li>
											<li><Link className="dropdown-item" to="/"></Link></li>
										</ul>
									</div> */}
									</li>
								</ul>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default HeaderContact;
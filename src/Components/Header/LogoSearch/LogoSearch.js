import React from 'react';
import { Container, Row, Col,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../../Assets/Assets';
import "./LogoSearch.css";

function LogoSearch() {
	return (
		<div className='wrapper'>
			<section id="logo-search">
				<Container>
					<Row className="align-items-center">
						<Col lg={2}>
							<div className="header-logo">
								<strong className="d-inline-block company-logo">
									<Link to="/" className="d-inline-block">
										<img src={Images.companyLogo} alt="" className="image-fluid call-on-doc-logo" />
									</Link>
								</strong>
							</div>
						</Col>
						<Col lg={6}>
							<div className="search-bar-wrapper">
								<form action="/" className="search-bar-form">
									<div className="input-group">
										<input type="text" className="form-control search-bar" placeholder="What are you looking for?" aria-label="Search" aria-describedby="basic-addon2" />
									</div>
									<div className="input-group-append search-button">
										<button className="hvr-bounce-to-right btn search-btn" type="submit"><img src={Images.Search} alt="" /> Search</button>
									</div>
								</form>
							</div>
						</Col>
						<Col lg={4}>
							<div className="mycart">
								<div className="heart">
									<img src={Images.heartIcon} alt="" />
								</div>
								<div className="cart-wrapper">
									<div className="shopping-cart">
										<img src={Images.shoppingCart} alt="" />
									</div>
									<div className="cart-count">
										0
									</div>
									<div className="cart-content">
										<span className="my-cart">My Cart</span>
										<span className="cart-items-price">$190.00</span>
									</div>
								</div>
								<div className='Customer-dropdown'>
									<Dropdown className='client-dropdown'>
										<Dropdown.Toggle variant="success" id="dropdown-basic" className='language-dropdown-button d-flex align-items-center client-btn'>
											<div className="girl-img">
												<img src={Images.Customer} alt="" className="language-flag" />
											</div>
											Hi, Bianca
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item to="/action-1">Action</Dropdown.Item>
											<Dropdown.Item to="/action-2">Another action</Dropdown.Item>
											<Dropdown.Item to="/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									{/* <div className="dropdown client-dropdown">
                                        <button className="btn dropdown-toggle language-dropdown-button d-flex align-items-center client-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="girl-img">
                                                <img src="images/girl.png" alt="" className="language-flag" />
                                            </div>
                                            Hi, Bianca
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div> */}
								</div>
							</div>

						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default LogoSearch;
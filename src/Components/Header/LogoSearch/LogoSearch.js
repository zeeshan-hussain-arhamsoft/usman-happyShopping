import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../../Assets/Assets';
import "./LogoSearch.css";

function LogoSearch() {
	const [heart, setHeart] = useState(true);
	function addWishlist() {
		console.log(heart);
		setHeart(!heart)
		console.log(heart);
	}
	return (
		<div id="logo-search">
			<Container>
				<Row className="align-items-center">
					<Col lg={2} md={2} sm={4} xs={4}>
						<strong className="d-inline-block company-logo">
							<Link to="/" className="d-inline-block">
								<img src={Images.companyLogo} alt="" className="image-fluid call-on-doc-logo" />
							</Link>
						</strong>
					</Col>
					<Col lg={6} md={6} sm={8} xs={8}>
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
					<Col lg={4} md={4}>
						<div className="mycart">
							<div onClick={addWishlist} className='wishlist'>
								{heart ?
									<img src={Images.categoriesHeart} alt='' />
									:
									<img src={Images.redHeart} alt='' />
								}
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
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LogoSearch;
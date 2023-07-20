import React from 'react';
import { Container, Row, Col, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../../Assets/Assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./HeaderNavigation.css";

function HeaderNavigation() {
	return (
		<div className='wrapper'>
			<section id="nav-bar">
				<Container>
					<Row className='align-items-center'>
						<Col lg={2}>

							<div class="categories">
								<Dropdown className='client-dropdown'>
									<Dropdown.Toggle variant="success" id="dropdown-basic" className='language-dropdown-button d-flex align-items-center categories-btn'>
										<div class="grid-icon">
											<img src={Images.grid} alt="" class="language-flag" />
										</div>
										All Categories
										<FontAwesomeIcon icon={faChevronDown}  className='drop-down-icon'/>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item to="/action-1">Action</Dropdown.Item>
										<Dropdown.Item to="/action-2">Another action</Dropdown.Item>
										<Dropdown.Item to="/action-3">Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Col>
						<Col lg={10}>
							<Navbar expand="lg">
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className='ms-auto'>
										<ul className="navbar-nav nav-ul">
											<li className="nav-item">
												<Link className="nav-link" to="/">Home</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">New Products</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">Best Sales</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">Promotions</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">Offers</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">Catalog</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/">More</Link>
											</li>
										</ul>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default HeaderNavigation;
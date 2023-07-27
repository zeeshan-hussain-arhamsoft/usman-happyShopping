import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HottestCategoriesCards from '../HottestCategoriesCards/HottestCategoriesCards';
import { Images } from '../../../Assets/Assets';
import "./HottestCategories.css";
import { Link } from 'react-router-dom';
import CategoriesSlider from "../categoriesSlider/categoriesSlider"

function HottestCategories() {
	return (
		<div className='wrapper'>
			<section id='hottest-categories'>
				<Container>
					<div className='hottest-categories-heading'>
						<h2>Browse our hottest categories</h2>
						<Link to='/' className='hvr-buzz hottest-categories-link'>Shop Now</Link>
					</div>
					<Row>
						<Col lg={2} md={6}>
							<div className='categoreis-ist-card'>
								<HottestCategoriesCards categoreislogo={Images.computerLaptops} categoreistype="Computer & Laptop" itmescount="38 items" />
							</div>
						</Col>
						<Col lg={2} md={6}>
							<HottestCategoriesCards categoreislogo={Images.mobileGadets} categoreistype="Mobile & Gadget" itmescount="105 items" />
						</Col>
						<Col lg={2} md={6}>
							<HottestCategoriesCards categoreislogo={Images.Electronic} categoreistype="Electronics" itmescount="90 items" />
						</Col>
						<Col lg={2} md={6}>
							<HottestCategoriesCards categoreislogo={Images.hottestAsseccories} categoreistype="Accessories" itmescount="617 items" />
						</Col>
						<Col lg={2} md={6}>
							<HottestCategoriesCards categoreislogo={Images.gameController} categoreistype="Game Controller" itmescount="53 items" />
						</Col>
						<Col lg={2} md={6}>
							<HottestCategoriesCards categoreislogo={Images.Camera} categoreistype="Camera" itmescount="1154 items" />
						</Col>
					</Row>	
					<CategoriesSlider/>
				</Container>
			</section>
		</div>
	);
}

export default HottestCategories;
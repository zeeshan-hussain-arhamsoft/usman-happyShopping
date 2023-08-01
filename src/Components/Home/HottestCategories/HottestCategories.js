import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HottestCategoriesCards from '../HottestCategoriesCards/HottestCategoriesCards';
import { Images } from '../../../Assets/Assets';
import "./HottestCategories.css";
import { Link } from 'react-router-dom';

function HottestCategories() {
	return (
		<section id='hottest-categories'>
			<Container>
				<div className='hottest-categories-heading'>
					<h2>Browse our hottest categories</h2>
					<Link to='/' className='hvr-buzz hottest-categories-link'>Shop Now</Link>
				</div>
				<Row>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.laptopHover} categoreisHoverImg={Images.computerLaptops} categoreistype="Computer & Laptop" itmescount="38 items" />
					</Col>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.mobileGadets} categoreisHoverImg={Images.mobileHover} categoreistype="Mobile & Gadget" itmescount="105 items" />
					</Col>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.Electronic} categoreisHoverImg={Images.electronicsHover} categoreistype="Electronics" itmescount="90 items" />
					</Col>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.hottestAsseccories} categoreisHoverImg={Images.asseccoriesHover} categoreistype="Accessories" itmescount="617 items" />
					</Col>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.gameController} categoreisHoverImg={Images.gameControlerHover} categoreistype="Game Controller" itmescount="53 items" />
					</Col>
					<Col lg={2} md={6}>
						<HottestCategoriesCards categoreislogo={Images.Camera} categoreisHoverImg={Images.camerasHover} categoreistype="Camera" itmescount="1154 items" />
					</Col>
				</Row>

			</Container>
		</section>
	);
}

export default HottestCategories;
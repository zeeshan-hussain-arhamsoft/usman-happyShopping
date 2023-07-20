import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { Images } from '../../../Assets/Assets';
import AccessoriesContentCards from '../AccessoriesContentCards/AccessoriesContentCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./AccessoriesContent.css";

function AccessoriesContent() {
	return (
		<div className='accessories-content-wrapper'>
			<div className='grid-dropdown'>
				<div className='grid-list-wrapper'>
					<div className='grid-view'>
						<img src={Images.accessoriesGrid} alt='' />
					</div>
					<div className='list-veiw'>
						<img src={Images.accessoriesList} alt='' />
					</div>
				</div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Default Sorting
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<Row>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img1'>
								<img src={Images.categoriesItem1} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5' >
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img4'>
								<img src={Images.categoriesItem4} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img1'>
								<img src={Images.categoriesItem1} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5' >
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img4'>
								<img src={Images.categoriesItem4} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img1'>
								<img src={Images.categoriesItem1} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5' >
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img4'>
								<img src={Images.categoriesItem4} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img1'>
								<img src={Images.categoriesItem1} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5' >
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className='discount'>
								<span>25% off</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img4'>
								<img src={Images.categoriesItem4} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='heart-img'>
							<img src={Images.categoriesHeart} alt='' />
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img2'>
								<img src={Images.categoriesItem2} />
							</div>
						</div>
						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={4} className='mb-5'>
					<div className='accessories-card-col'>
						<div className='itmes-cart'>
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className='accessories-card-img-wrapper'>
							<div className='accessories-img3'>
								<img src={Images.categoriesItem3} />
							</div>
						</div>

						<AccessoriesContentCards accessoriesBrand="Apple" accessoriesDetails="iMac 27 Retina 5K Display" accessoriesPrice="$1,799" accessoriesDiscount="$1,899" />
						<div className="countercart">
							<div className="counter">
								<div className="counter-reduce">
									<span>-</span>
								</div>
								<div className="counter-num">
									<span>01</span>
								</div>
								<div className="counter-increase">
									<span>+</span>
								</div>
							</div>
							<div className="carticon">
								<img src={Images.cartIcon} alt="" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<div className='pagination'>
				<ul className='pagination-ul'>
					<li className='pagination-li'>
						<span>1</span>
					</li>
					<li className='pagination-li'>
						<span>2</span>
					</li>
					<li className='pagination-li'>
						<span>3</span>
					</li>
					<li className='pagination-li'>
						<span>4</span>
					</li>
					<li className='pagination-li'>
						<span>5...</span>
					</li>
					<li className='pagination-li'>
						<span>12</span>
					</li>
					<li className='pagination-li'>
						<span>13</span>
					</li>
					<li className='pagination-li'>
						<span>14</span>
					</li>
					<li className='pagination-li'>
						<span>15</span>
					</li>
					<li className='pagination-li'>
						<FontAwesomeIcon icon={faArrowRight} />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AccessoriesContent;
import React, { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../../Assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TopProductsCards from "../TopProductsCards/TopProductsCards";
import TopProductHeading from "../TopProductHeading/TopProductHeading";
import "./TopProducts.css";
function MultipleItems(){
		const settings = {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			// className: "center",
			// centerMode: true,
		};
		return (
			<Container>
				<div className="">
					<section id='top-products'>
						 <TopProductHeading/>
						<div className="top-product-slider-wrapper wrapper">
							<Slider {...settings}>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.gamingController} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />

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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.wirstWatch} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724" />

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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.Vr} companyName="HP" itemsSpecs="HP Spectre x360 Convertible" itemprice="$1,169" />
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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.iPad} companyName="Apple" itemsSpecs="iMac 24 Retina 4K Display" itemprice="$1,499" />
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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.gamingController} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />

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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.wirstWatch} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724" />

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
									</div>
								</div>
								<div>
									<div className="categories-slier-items">
										<div className="add-cart">
											<div className='itmes-cart'>
												<div className='discount'>
													<span>25% off</span>
												</div>
												<div>
													<img src={Images.categoriesHeart} alt='' />
												</div>
											</div>
											<TopProductsCards categoriesItems={Images.Vr} companyName="HP" itemsSpecs="HP Spectre x360 Convertible" itemprice="$1,169" />
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
									</div>
								</div>
							</Slider>
						</div>
					</section>
				</div>
			</Container>
		);
	}
export default MultipleItems;

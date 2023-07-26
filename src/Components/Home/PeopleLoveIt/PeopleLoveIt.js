import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from '../../../Assets/Assets';
import TopProductsCards from '../TopProductsCards/TopProductsCards';
import "./PeopleLoveIt.css";
function SimpleSlider() {
	const settings_3 = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<div className='wrapper'>
			<section id='hot-Offers'>
				<Container>
					<div className='offers-heading'>
						<h3>People Loved It</h3>
					</div>
					<div className="top-product-slider-wrapper wrapper">
						<Slider {...settings_3}>
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
										<TopProductsCards categoriesItems={Images.peopleLoved1} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />
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
												<span>15% off</span>
											</div>
											<div>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved2} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724" />

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
												<span>30% off</span>
											</div>
											<div>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved3} companyName="HP" itemsSpecs="HP Spectre x360 Convertible" itemprice="$1,169" />
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
										<div className='itmes-cart d-flex justify-content-end'>

											<div className=''>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved4} companyName="Apple" itemsSpecs="iMac 24 Retina 4K Display" itemprice="$1,499" />
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
										<TopProductsCards categoriesItems={Images.peopleLoved1} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />

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
												<span>15% off</span>
											</div>
											<div>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved2} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724" />
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
												<span>30% off</span>
											</div>
											<div>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved3} companyName="HP" itemsSpecs="HP Spectre x360 Convertible" itemprice="$1,169" />
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
										<div className='itmes-cart d-flex justify-content-end'>

											<div className=''>
												<img src={Images.categoriesHeart} alt='' />
											</div>
										</div>
										<TopProductsCards categoriesItems={Images.peopleLoved4} companyName="Apple" itemsSpecs="iMac 24 Retina 4K Display" itemprice="$1,499" />
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
				</Container>
			</section>
		</div>
	);
}
export default SimpleSlider;
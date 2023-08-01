import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoriesSliderCards from "../CategoriesSliderCards/CategoriesSliderCards";
import { Images } from "../../../Assets/Assets";

function SimpleSlider() {

	const [heart, setHeart] = useState(true);
	function addToCart() {
		console.log(heart);
		setHeart(!heart)
		console.log(heart);
	}
	const settings_3 = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow:3,
					slidesToScroll:1,
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
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	}
	return (
		<div className="slider-wrapper">
			<Slider {...settings_3}>
				<div>
					<div className="categories-slier-items">
						<div className="add-cart">
							<div className='itmes-cart'>
								<div className='discount'>
									<span>25% off</span>
								</div>
								<div onClick={addToCart}>
									{heart ?
										<img src={Images.categoriesHeart} alt='' />
										:
										<img src={Images.redHeart} alt='' />
									}
								</div>
							</div>
							<CategoriesSliderCards categoriesItems={Images.categoriesItem1} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />
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
						<div className="red-heart">
							<img src={Images.redHeart} alt='' />
						</div>
						<div className="add-cart">
							<CategoriesSliderCards addcartIcon={Images.redHeart} categoriesItems={Images.categoriesItem2} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724.14" />
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
						<div className="itmes-cart">
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className="add-cart">
							<CategoriesSliderCards itemsDiscount="25% off" addcartIcon={Images.categoriesHeart} categoriesItems={Images.categoriesItem3} companyName="HP" itemsSpecs=" HP Spectre x360 Convertible" itemprice="$1,169" />
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
						<div className="red-heart">
							<img src={Images.redHeart} alt='' />
						</div>
						<div className="add-cart">
							<CategoriesSliderCards itemsDiscount="25% off" addcartIcon={Images.categoriesHeart} categoriesItems={Images.categoriesItem4} companyName="Apple" itemsSpecs=" iMac 24 Retina 4K Display" itemprice="$1,499" />
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
							<CategoriesSliderCards categoriesItems={Images.categoriesItem1} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />
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
						<div className="red-heart">
							<img src={Images.redHeart} alt='' />
						</div>
						<div className="add-cart">
							<CategoriesSliderCards addcartIcon={Images.redHeart} categoriesItems={Images.categoriesItem2} companyName="Dell" itemsSpecs=" Dell XPS 15 9575 (X360)" itemprice="$1724.14" />
						</div>
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
				<div>
					<div className="categories-slier-items">
						<div className="itmes-cart">
							<div className="hp-card">
								<span>New</span>
							</div>
							<div>
								<img src={Images.categoriesHeart} alt='' />
							</div>
						</div>
						<div className="add-cart">
							<CategoriesSliderCards itemsDiscount="25% off" addcartIcon={Images.categoriesHeart} categoriesItems={Images.categoriesItem3} companyName="HP" itemsSpecs=" HP Spectre x360 Convertible" itemprice="$1,169" />
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
						<div className="red-heart">
							<img src={Images.redHeart} alt='' />
						</div>
						<div className="add-cart">
							<CategoriesSliderCards itemsDiscount="25% off" addcartIcon={Images.categoriesHeart} categoriesItems={Images.categoriesItem4} companyName="Apple" itemsSpecs=" iMac 24 Retina 4K Display" itemprice="$1,499" />
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
						<CategoriesSliderCards categoriesItems={Images.categoriesItem1} companyName="Apple" itemsSpecs=" iMac 27 Retina 5K Display" itemprice="$1,799" oldPrice="$1,899" />
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
			</Slider >
		</div >
	);
}
export default SimpleSlider;
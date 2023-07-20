import React from 'react'
import BrandTypeProps from '../BrandTypeProps/BrandTypeProps';
import ProductTypeProps from '../ProductTypeProps/ProductTypeProps';
import DisplaySizeProps from '../DisplaySizeProps/DisplaySizeProps';
import { Link } from 'react-router-dom';
import PriceRangeProps from '../PriceRangeProps/PriceRangeProps';
import "./Filters.css";
function Filters() {
	return (
		<div className='brand-type-col'>
			<div className='brand-type-props-wrapper'>
				<h5>Brand Type</h5>
				<ul className='brand-type-ul'>
					<BrandTypeProps brandName="Apple" />
					<BrandTypeProps brandName="Asus" />
					<BrandTypeProps brandName="Omen" />
					<BrandTypeProps brandName="HP" />
					<BrandTypeProps brandName="Dell" />
					<BrandTypeProps brandName="Lenovo" />
					<BrandTypeProps brandName="Toshiba" />
					<BrandTypeProps brandName="Samsung" />
					<BrandTypeProps brandName="Acer" />
					<BrandTypeProps brandName="Microsoft" />
					<BrandTypeProps brandName="Panasonic" />
					<BrandTypeProps brandName="VAIO" />
					<BrandTypeProps brandName="Xiaomi" />
				</ul>

			</div>
			<div className='product-type-wrapper'>
				<h5>Product Type</h5>
				<ul className='brand-type-ul'>
					<ProductTypeProps brandName="New Laptops" />
					<ProductTypeProps brandName="Used Laptops" />
					<ProductTypeProps brandName="Refurbished Laptops" />
				</ul>
			</div>
			<div className='display-sizes-wrapper'>
				<h5>Display Size</h5>
				<ul className='dispay-size-ul'>
					<DisplaySizeProps displaySize=" Below 13 inches" />
					<DisplaySizeProps displaySize=" 13 inches" />
					<DisplaySizeProps displaySize=" 15 inches" />
					<DisplaySizeProps displaySize=" 21 inches" />
					<DisplaySizeProps displaySize=" 27 inches" />
					<DisplaySizeProps displaySize=" 32 inches" />
				</ul>

			</div>
			<div className='processor-type-wrapper'>
				<h5>Processor Type</h5>
				<ul className='dispay-size-ul'>
					<DisplaySizeProps displaySize=" Intel Core i5 " />
					<DisplaySizeProps displaySize="Intel" />
					<DisplaySizeProps displaySize=" Intel Celeron " />
					<DisplaySizeProps displaySize=" Intel Core i3" />
					<DisplaySizeProps displaySize="  Intel Core i7" />
					<DisplaySizeProps displaySize=" AMD" />
					<DisplaySizeProps displaySize=" Intel Core 2 duo" />
				</ul>
			</div>
			<div className='colors-wrapper'>
				<h5>Colors</h5>
				<div className='colors-main'>
					<Link to='/' className='colors-veriations color1'></Link>
					<Link to='/' className='colors-veriations color2'></Link>
					<Link to='/' className='colors-veriations color3'></Link>
					<Link to='/' className='colors-veriations color4'></Link>
					<Link to='/' className='colors-veriations color5'></Link>
					<Link to='/' className='colors-veriations color6'></Link>
					<Link to='/' className='colors-veriations color7'></Link>
				</div>
			</div>
			<div className='price-range'>
				<h5>Prices Range</h5>
				<ul className='price-range-ul'>
					<PriceRangeProps priceRange="$100 - $200" />
					<PriceRangeProps priceRange="$200 - $400 " />
					<PriceRangeProps priceRange="$400 - $600 " />
					<PriceRangeProps priceRange="$600 - $800" />
					<PriceRangeProps priceRange="$800 - $1000" />
					<PriceRangeProps priceRange="Above $1000" />
				</ul>
			</div>
		</div>
	);
}

export default Filters;
import React from 'react';
import { useState } from 'react';
import { Images } from '../../../Assets/Assets';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "./AddToCartItemDetailsContent.css";

const options = [
	{ value: '1', label: '1' },
	{ value: '2', label: '2' },
	{ value: '3', label: '3' }
]

function AddToCartItemDetailsContent() {
	const [heart, setHeart] = useState(true);
	function addWishlist() {
		console.log(heart);
		setHeart(!heart)
		console.log(heart);
	}
	return (
		<div className='cart-items-detail-content-wrapper'>
			<div className='cart-items-detail-content-heading'>
				<h3>Apple iMac 27-inch 2020 with Retina 5K display - MXWV2</h3>
				<strong>$1,799</strong>
			</div>
			<ul className='item-rating-ul'>
				<li className='item-rating-li'>
					<div className='star-img'>
						<img src={Images.star} alt='' />
					</div>
				</li>
				<li className='item-rating-li'>
					<div className='star-img'>
						<img src={Images.star} alt='' />
					</div>
				</li>
				<li className='item-rating-li'>
					<div className='star-img'>
						<img src={Images.star} alt='' />
					</div>
				</li>
				<li className='item-rating-li'>
					<div className='star-img'>
						<img src={Images.star} alt='' />
					</div>
				</li>
				<li className='item-rating-li'>
					<div className='star-img'>
						<img src={Images.star} alt='' />
					</div>
				</li>
				<li className='customer-rating-count-li'>
					<Link to="/" className=' customer-rating-link' > Customer Reviews (2256) </Link>
				</li>
			</ul>
			<p className='item-discription'>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat.</p>
			<div className='item-quantity-wrapper'>
				<div className='item-quantity'>
					<span >QTY</span>
					<Select
						placeholder="QTY"
						name="selected"
						className=" select-input"
						options={options}
						defaultValue={options[1]}
						classNamePrefix="custom-select"
						isMenuOpen={true}
					/>
					<Link to='/' className='hvr-bounce-in addcart-button'>Add to Cart</Link>
				</div>
				<div onClick={addWishlist} className='wishlist'>
					{heart ?
						<img src={Images.categoriesHeart} alt='' />
						:
						<img src={Images.redHeart} alt='' />
					}
					<span>Add to Wishlist</span>
				</div>
			</div>
			<div className='cart-items-specs-wrapper'>
				<ul className='cart-items-specs-ul'>
					<li className='cart-items-specs-li'>
						<span>Brand:</span>
					</li>
					<li className='cart-items-specs-li'>
						<span>SKU:</span>
					</li>
					<li className='cart-items-specs-li'>
						<span>Category:</span>
					</li>
					<li className='cart-items-specs-li'>
						<span>Tag:</span>
					</li>
				</ul>
				<ul className='cart-items-specs-specs-details-ul'>
					<li className='cart-items-specs-specs-details-li'>
						<span className='cart-item-specs'>Apple</span>
					</li>
					<li className='cart-items-specs-specs-details-li'>
						<span className='cart-item-specs'>123456</span>
					</li>
					<li className='cart-items-specs-specs-details-li'>
						<span className='cart-item-specs'>iMac</span>
					</li>
					<li className='cart-items-specs-specs-details-li'>
						<span className='cart-item-specs'>Computer</span>
					</li>

				</ul>
			</div>
		</div>
	);
}

export default AddToCartItemDetailsContent;
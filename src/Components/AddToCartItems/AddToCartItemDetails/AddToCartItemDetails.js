import React from 'react';
import { Images } from '../../../Assets/Assets';
import "./AddToCartItemDetails.css";

function AddToCartItemDetails() {
    return (
            <div className='add-cart-item-img-wrapper'>
                <div className='add-cart-img'>
                    <img src={Images.iMac} alt='' />
                </div>
                <ul className='items-details-imgs-ul'>
                    <li className='items-details-imgs-li'>
                        <div className='items-details-imgs'>
                            <img src={Images.itemsDetailsimg1} alt='' />
                        </div>
                    </li>
                    <li className='items-details-imgs-li'>
                        <div className='items-details-imgs'>
                            <img src={Images.itemsDetailsimg2} alt='' />
                        </div>
                    </li>
                    <li className='items-details-imgs-li'>
                        <div className='items-details-imgs'>
                            <img src={Images.itemsDetailsimg3} alt='' />
                        </div>
                    </li>
                    <li className='items-details-imgs-li'>
                        <div className='items-details-imgs'>
                            <img src={Images.itemsDetailsimg4} alt='' />
                        </div>
                    </li>
                </ul>
            </div>
    );
}

export default AddToCartItemDetails;
import React from 'react';
import { Link } from 'react-router-dom';

function ProductTypeProps(Props) {
  return (
    <li className='brand-type-li'><Link to="/" className='brand-type-link' >{Props.brandName}</Link> </li>
  );
}

export default ProductTypeProps;
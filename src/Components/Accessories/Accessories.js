import React from 'react'
import AccessoriesBanner from './AccessoriesBanner/AccessoriesBanner';
import Header from '../Header/Header';
import BrandType from './BrandType/BrandType';
import KeepInTouch from '../Home/KeepInTouch/KeepInTouch';
import Footer from '../Footer/Footer';

function Accessories() {
  return (
	<div>
		<Header/>
		<AccessoriesBanner/>
		<BrandType/>
		<KeepInTouch/>
		<Footer/>
	</div>
  )
}

export default Accessories;
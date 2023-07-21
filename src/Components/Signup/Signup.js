import React from 'react'
import Header from '../Header/Header';
import SignupForm from './SignupForm/SignupForm';
import KeepInTouch from '../Home/KeepInTouch/KeepInTouch';
import Footer from '../Footer/Footer';

function Signup() {
  return (
	<div>
		<Header/>
		<SignupForm/>
		<KeepInTouch/>
		<Footer/>
	</div>
  )
}

export default Signup;
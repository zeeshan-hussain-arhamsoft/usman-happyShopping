import React from 'react';
import Header from "../Header/Header";
import LoginForm from './LoginForm/LoginForm';
import KeepInTouch from "../Home/KeepInTouch/KeepInTouch";
import Footer from "../Footer/Footer";
function Login() {
	return (
		<div className='wrapper'>
			<Header />
			<LoginForm />
			<KeepInTouch />
			<Footer />
		</div>
	);
}

export default Login;
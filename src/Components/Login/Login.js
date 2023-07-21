import React from 'react';
import Header from "../Header/Header";
import LoginForm from './LoginForm/LoginForm';
import KeepInTouch from "../Home/KeepInTouch/KeepInTouch";
import Footer from "../Footer/Footer";
function Login() {
	return (
		<>
			<Header/>
			<LoginForm/>
			<KeepInTouch/>
			<Footer/>
		</>		
	);
}

export default Login ;
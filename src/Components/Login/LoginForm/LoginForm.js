import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "./LoginForm.css";
import { Link } from 'react-router-dom';

function LoginForm() {
	return (
		<div>
			<div className='login-path'>
				<Container>
					<div className='account-path'>
						<strong>Account</strong>
						<strong>Home / Account</strong>
					</div>
				</Container>
			</div>
			<section id='login'>
				<div className='login-wrapper'>
					<h5>Log In To Your Account</h5>
					<Form action="/" className="login-bar-form">
						<div className="input-group">
							<input type="email" className="form-control login-bar" placeholder="Email" aria-label="Search" aria-describedby="basic-addon2" />
						</div>
						<div className="input-group">
							<input type="password" className="form-control login-bar" placeholder="Password" aria-label="Search" aria-describedby="basic-addon2" />
						</div>
						<div className='forget-password-link-wrapper'>
							<Link to='/' className='login-link'>Forgot Password?</Link>
							<Link to='/Signup' className='login-link'>Create Account	</Link>
						</div>
						<div className="input-group-append login-button">
							<button className="hvr-bounce-to-right btn login-btn" type="submit">Log In</button>
						</div>
					</Form>
				</div>
			</section>
		</div>
	);
}

export default LoginForm;
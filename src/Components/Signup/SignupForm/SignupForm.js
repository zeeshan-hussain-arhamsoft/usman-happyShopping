import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SignupForm.css";

function SignupForm() {
	return (
		<div className='wrapper'>
			<div className='login-path'>
				<Container>
					<div className='account-path'>
						<strong>Account</strong>
						<strong>Home / Account</strong>
					</div>
				</Container>
			</div>
			<section id='signup-form'>
				<div className='signup-wrapper'>
					<div className='signup-heading-wrapper'>
						<h5>Create Your Account</h5>
						<span>Already have an account?<Link to='/' className='return-login'> Log In</Link></span>
					</div>
					<Form action="/" className="signup-bar-form">
						<div className='signup-name-wrapper'>
							<div className="input-group">
								<input type="text" className="form-control signup-bar" placeholder="First Name" aria-label="Search" aria-describedby="basic-addon2" required />
							</div>
							<div className="input-group">
								<input type="text" className="form-control signup-bar signup-lastname" placeholder="Last Name" aria-label="Search" aria-describedby="basic-addon2" required />
							</div>
						</div>
						<div className="input-group">
							<input type="email" className="form-control signup-bar" placeholder="Email" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
						<div className="input-group">
							<input type="password" className="form-control signup-bar" placeholder="Password" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
						<div className="input-group">
							<input type="password" className="form-control signup-bar" placeholder="Verify Password" aria-label="Search" aria-describedby="basic-addon2" required />
						</div>
						<div className="input-group-append signup-button">
							<button className="hvr-bounce-to-right btn signup-btn" type="submit">Register</button>
						</div>
					</Form>
				</div>
			</section>
		</div>
	);
}

export default SignupForm;
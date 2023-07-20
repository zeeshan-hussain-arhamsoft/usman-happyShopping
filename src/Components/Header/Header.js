import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import HeaderContact from './HeaderContact/HeaderContact';
import LogoSearch from './LogoSearch/LogoSearch';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import "./Header.css";


function Header() {
	return (
		<div class="wrapper">
			<HeaderContact />
			<LogoSearch />.
			<HeaderNavigation />
		</div>
	)
}

export default Header;
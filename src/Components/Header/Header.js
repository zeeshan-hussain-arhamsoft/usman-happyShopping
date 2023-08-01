import React from 'react';
import HeaderContact from './HeaderContact/HeaderContact';
import LogoSearch from './LogoSearch/LogoSearch';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import "./Header.css";


function Header() {
	return (
		<div >
			<HeaderContact />
			<LogoSearch />
			<HeaderNavigation />
		</div>
	)
}

export default Header;
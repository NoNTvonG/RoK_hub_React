import React from 'react';
import { NavLink } from 'react-router-dom';
import CS from './Navbar.module.scss';
import { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { routerLinks } from '../../../router/index.js';

const Navbar = () => {
	const [hamburgerStatus, setHamburgerStatus] = useState(false);

	return (
		<header id={CS.header}>
			<div className={CS.navBarLogo}>
				<NavLink to='/'>
					<img src='/assets/logo.png' alt='logo' />
				</NavLink>
				<div className={CS.navToggle}>
					<Hamburger
						hamburgerStatus={hamburgerStatus}
						setHamburgerStatus={setHamburgerStatus}
					/>
				</div>
			</div>

			<div className={CS.navBarMenu}>
				<nav className={hamburgerStatus ? CS.showDropMenu : CS.hideDropMenu}>
					<ul>
						{routerLinks.map(link => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									className={CS.navlink}
									activeClassName={CS.active}
								>
									<span className={CS.navText}>{link.title}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

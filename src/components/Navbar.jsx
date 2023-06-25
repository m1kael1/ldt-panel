import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							className="nav-link"
							data-widget="pushmenu"
							href="#"
							role="button"
						>
							<i className="fas fa-bars" />
						</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink
							className="nav-link"
							to="#"
							role="button"
							data-widget="pushmenu"
						>
							<i className="fas fa-bars" />
						</NavLink>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<NavLink to="#" className="nav-link">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

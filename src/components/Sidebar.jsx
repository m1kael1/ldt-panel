import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const [click, setClick] = useState(true);
	const [clickPage, setClickPage] = useState(true);

	const handleClick = () => {
		setClick(!click);
	};

	const handleClickPage = () => {
		setClickPage(!clickPage);
	};

	return (
		<div className="">
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				{/* Brand Logo */}
				<NavLink to="/" className="brand-link">
					<span className="brand-text font-weight-light">LDT Panel</span>
				</NavLink>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img
								src="dist/img/user2-160x160.jpg"
								className="img-circle elevation-2"
								alt="User Image"
							/>
						</div>
						<div className="info">
							<NavLink to="#" className="d-block">
								Administrator
							</NavLink>
						</div>
					</div>

					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							role="menu"
							data-accordion="false"
						>
							{/* Add icons to the links using the .nav-icon class
                  with font-awesome or any other icon font library */}
							<li className="nav-item">
								<NavLink to="/" activeClassName="active" className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Web Profile</p>
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									className={`nav-link ${clickPage ? "" : "active"}`}
									onClick={handleClickPage}
									to="#"
								>
									<i className="nav-icon fas fa-book" />
									<p>
										Pages
										<i
											className={`fas  right fa-angle-left ${
												clickPage ? "" : "-rotate-90"
											}`}
										/>
									</p>
								</NavLink>
								<ul
									className={`nav nav-treeview ${
										clickPage ? "d-none" : "d-block"
									}`}
								>
									<li className="nav-item">
										<NavLink
											to="/dashboard"
											activeClassName="active"
											className="nav-link"
										>
											<i className="far fa-circle nav-icon" />
											<p>Dashboard</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/product"
											activeClassName="active"
											className="nav-link"
										>
											<i className="far fa-circle nav-icon" />
											<p>Products</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/add"
											activeClassName="active"
											className="nav-link"
										>
											<i className="far fa-circle nav-icon" />
											<p>Add Product</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/edit"
											activeClassName="active"
											className="nav-link"
										>
											<i className="far fa-circle nav-icon" />
											<p>Edit Product</p>
										</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</div>
	);
};

export default Sidebar;

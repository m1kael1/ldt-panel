import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const [click, setClick] = useState(true);
	const [clickPage, setClickPage] = useState(true);

	const handleClick = () => {
		setClick((click) => !click);
	};
	const handleClickPage = () => {
		setClickPage((clickPage) => !clickPage);
	};

	let active = click ? "" : "active";
	let activePage = clickPage ? "" : "active";

	return (
		<div className="h-[100vh] w-[250px] fixed top-0 left-0">
			<aside className="main-sidebar sidebar-dark-primary elevation-4  ">
				{/* Brand Logo */}
				<a href="index3.html" className="brand-link ">
					<span className="brand-text font-weight-light ">LDT Panel</span>
				</a>
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
							<a href="#" className="d-block">
								Administrator
							</a>
						</div>
					</div>

					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							{/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
							<li className="nav-item ">
								<NavLink to="/" activeClassName="active" className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Web Profile</p>
								</NavLink>
							</li>

							<li className="nav-item">
								<a
									className={`nav-link ${activePage}`}
									onClick={handleClickPage}
								>
									<i className="nav-icon fas fa-book" />
									<p>
										Pages
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview">
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

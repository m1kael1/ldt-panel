import React, { useState } from "react";
import { NavLink, useHref } from "react-router-dom";

const Sidebar = () => {
	const [pages, setPages] = useState(false);
	const history = useHref();

	function reloadPath(path) {
		history.push(path);
		window.location.reload();
	}

	function clickPages() {
		setPages(!pages);
	}

	return (
		<>
			<aside className="main-sidebar sidebar-dark-primary elevation-4 ">
				{/* Brand Logo */}
				<NavLink to="/" className="brand-link " onClick={() => reloadPath("/")}>
					<img
						src="dist/img/AdminLTELogo.png"
						alt="AdminLTE Logo"
						className="brand-image img-circle elevation-3"
						style={{ opacity: ".8" }}
					/>
					<span className="brand-text font-weight-light">AdminLTE 3</span>
				</NavLink>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img
								src="dist/img/user2-160x160.jpg"
								className="min-w-[33.6px]	 img-circle elevation-2"
								alt="User Image"
							/>
						</div>
						<div className="info">
							<NavLink
								to="/"
								className="d-block"
								onClick={() => reloadPath("/")}
							>
								Administrator
							</NavLink>
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
							{/* dashboard */}
							<li className="nav-item">
								<NavLink
									to="/"
									className="nav-link"
									onClick={() => reloadPath("/")}
								>
									<i className="far fa-circle nav-icon" />
									<p>Web Profile</p>
								</NavLink>
							</li>

							<li
								className={`nav-item ${
									pages ? "" : "menu-is-opening menu-open"
								}`}
							>
								<a onClick={clickPages} to="#" className="nav-link">
									<i className="nav-icon fas fa-book" />
									<p>
										Pages
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<NavLink to="/dashboard" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Dashboard</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/list-produk" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>List Produk</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="tambah-produk" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Tambah Produk</p>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="edit-produk" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Edit Produk</p>
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
		</>
	);
};

export default Sidebar;

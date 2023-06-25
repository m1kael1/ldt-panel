import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Product from "./pages/Product";
import WebProfile from "./pages/WebProfile";

const App = () => {
	return (
		<div class="wrapper">
			<BrowserRouter>
				<Navbar />
				<Sidebar></Sidebar>
				<Routes>
					<Route path="/" element={<WebProfile />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/list-produk" element={<Product />} />
					<Route path="/tambah-produk" element={<Add />} />
					<Route path="/edit-produk" element={<Edit />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;

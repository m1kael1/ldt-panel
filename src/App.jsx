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
		<BrowserRouter>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/" element={<WebProfile />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/product" element={<Product />} />
				<Route path="/add" element={<Add />} />
				<Route path="/edit" element={<Edit />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

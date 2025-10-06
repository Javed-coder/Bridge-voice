import React, { useState } from "react";
import "./Dashboard.css";
import Contact from "../Contacts/contact";
import CallHistory from "../CallHistory/callhistory";
import Home from "../LanguageSelector/languageselector";
import About from "./About";

const menuItems = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "contacts", label: "Contacts" },
	{ id: "callhistory", label: "Call History" },
];

const Dashboard = () => {
	const [active, setActive] = useState("home");

	// keyboard handler to support Enter/Space activation when using non-button elements
	const handleKeyActivate = (e, id) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			setActive(id);
		}
	};

	const renderContent = () => {
		switch (active) {
			case "home":
				return < Home/>;
			case "about":
				return <About />;
			case "contacts":
				return <Contact />;
			case "callhistory":
				return <CallHistory />;
			default:
				return <Home />;
		}
	};

	return (
		<div className="dashboard-root">
			<aside className="dashboard-sidebar">
				<div className="dashboard-brand">Bridge Voice</div>
				<nav className="dashboard-nav" aria-label="Main navigation">
					{menuItems.map((item) => (
						<button
							key={item.id}
							className={`dashboard-menu-item ${active === item.id ? "active" : ""}`}
							onClick={() => setActive(item.id)}
							aria-pressed={active === item.id}
							aria-current={active === item.id ? "page" : undefined}
							title={item.label}
							onKeyDown={(e) => handleKeyActivate(e, item.id)}
						>
							{item.label}
						</button>
					))}
				</nav>
			</aside>

			<main className="dashboard-content">{renderContent()}</main>
		</div>
	);
};

export default Dashboard;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{ title: "About", path: "/about", target: "_blank" },
	{ title: "Projects", path: "/project", target: "_blank" },
	{ title: "Contact", path: "/contact", target: "_blank" },
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	// Prevent background scroll when mobile menu is open
	useEffect(() => {
		if (navbarOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [navbarOpen]);

	// Close menu on link click (for mobile)
	const handleLinkClick = () => setNavbarOpen(false);

	return (
		<nav className="fixed w-full top-0 left-0 z-30 bg-[#121212] bg-opacity-100 border-b border-b-[#515463]">
			<div className="flex items-center justify-between px-4 py-4 lg:px-10">
				<Link
					href="/"
					className="text-2xl md:text-2xl text-slate-300 font-sans font-semibold"
					aria-label="Home"
				>
					Zakari Adamu
				</Link>
				{/* Desktop Menu */}
				<div className="hidden md:block">
					<ul className="flex space-x-8">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
									target={link.target}
								/>
							</li>
						))}
					</ul>
				</div>
				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setNavbarOpen(true)}
						className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
						aria-label="Open menu"
					>
						<CiMenuFries size={24} />
					</button>
				</div>
			</div>
			{/* Mobile Overlay Menu */}
			{navbarOpen && (
				<div className="fixed inset-0 bg-[#121212] bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300">
					<button
						onClick={() => setNavbarOpen(false)}
						className="absolute top-6 right-6 text-slate-200 hover:text-white"
						aria-label="Close menu"
					>
						<IoCloseOutline size={32} />
					</button>
					<ul className="flex flex-col gap-8 text-xl">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
									target={link.target}
									onClick={handleLinkClick}
								/>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

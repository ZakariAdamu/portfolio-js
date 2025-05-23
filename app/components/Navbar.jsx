"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
// import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{
		title: "About",
		path: "/about",
		target: "_blank",
	},
	{
		title: "Projects",
		path: "/project",
		target: "_blank",
	},
	{
		title: "Contact",
		path: "/contact",
		target: "_blank",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed w-[90%] mx-auto max-w-[1280px] zcontainer px-0 top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 border border-b-[#515463] border-x-0 overflow-x-hidden">
			<div className="flex lg:py-4 items-center justify-between px-4 py-4">
				<Link
					href={"/"}
					className="text-2xl md:text-2xl text-slate-300 font-sans font-semibold"
				>
					Zakari Adamu
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
						>
							{/*			<Bars3Icon className="h-5 w-5" />
							 */}{" "}
							<CiMenuFries size={20} />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 zborder rounded border-slate-200 text-slate-200 hover:text-white"
						>
							{/*							<XmarkIcon className="h-5 w-5" />
							 */}{" "}
							<IoCloseOutline size={20} />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;

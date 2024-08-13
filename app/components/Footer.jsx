import React from "react";
import Link from "next/link";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
	return (
		<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between align-items-lg-center flex-wrap ">
				<div className="flex flex-row">
					<span>Zakari Adamu</span>
					<Link href="https://github.com/ZakariAdamu" target="_blank">
						<Image
							className="rounded-full bg-gray-300 mx-4 hover:bg-gray-500 hover:-translate-y-1"
							width={20}
							height={20}
							src={GitHubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/zakari-adamu-84b4781b9"
						target="_blank"
					>
						<Image
							className="rounded bg-gray-300 p-1 hover:bg-gray-500 hover:-translate-y-1"
							width={20}
							height={20}
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
				<p className="text-slate-500 flex justify-center align-items-center ">
					<RiCopyrightLine className="m-1" />
					2024 <span className="pl-2"> All rights reserved.</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

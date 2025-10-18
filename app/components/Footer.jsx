import Link from "next/link";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import { RiCopyrightLine } from "react-icons/ri";
import CurrentTimeDisplay from "./CurrentTimeDisplay";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		// <footer className="fixedz w-[100vw] lg:py-3 zpx-10 zlg:px-0 bottom-[-6px]  zbg-[#121212] bg-opacity-100 text-white">
		// 	<div className="w-full py-4 flex flex-col md:flex-row justify-evenly items-center gap-4">

		<footer className="w-full bg-transparent mt-4 mb-2">
			<div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
				<div className="flex items-center text-slate-400 gap-3">
					<span className="font-medium">Zakari Adamu</span>
					<Link
						href="https://github.com/ZakariAdamu"
						target="_blank"
						aria-label="GitHub"
					>
						<Image
							className="rounded-full bg-gray-400 hover:bg-gray-300 transition-colors"
							width={24}
							height={24}
							src={GitHubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/zakari-adamu-84b4781b9"
						target="_blank"
						aria-label="LinkedIn"
					>
						<Image
							className="rounded bg-gray-400 p-1 hover:bg-gray-300 transition-colors"
							width={24}
							height={24}
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
				<p className="text-slate-500 flex items-center justify-center gap-2 text-sm">
					<RiCopyrightLine />
					{currentYear} <spa className="pl-2">All rights reserved.</spa>
				</p>
				{/* On tablet, show time below */}
				<div className="hidden md:flex w-fit self-end text-slate-500 text-sm">
					<CurrentTimeDisplay />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

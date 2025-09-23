import Link from "next/link";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import { RiCopyrightLine } from "react-icons/ri";
import CurrentTimeDisplay from "./CurrentTimeDisplay";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="fixed w-full py-4 px-10 bottom-0 left-0 z-30 bg-[#121212] bg-opacity-100 border-t border-t-[#515463] text-white">
			<div className="w-full py-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
					{currentYear} <span className="pl-2">All rights reserved.</span>
					<span className="hidden sm:inline-block pl-4">
						<CurrentTimeDisplay />
					</span>
				</p>
				{/* On mobile, show time below */}
				<div className="sm:hidden text-slate-500 text-xs mt-2">
					<CurrentTimeDisplay />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

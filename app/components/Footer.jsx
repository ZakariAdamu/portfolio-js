import Link from "next/link";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import { RiCopyrightLine } from "react-icons/ri";
import CurrentTimeDisplay from "./CurrentTimeDisplay";

const Footer = () => {
	return (
		<footer className="footer w-[92%] mx-auto mt-6 bg-[#121212] border border-t-[#515463] border-b-0 border-l-transparent border-r-transparent text-white overflow-x-hidden">
			<div className="px-10 py-4 flex justify-between align-items-lg-center flex-wrap">
				<div className="flex flex-row text-slate-400">
					<span>Zakari Adamu</span>
					<Link href="https://github.com/ZakariAdamu" target="_blank">
						<Image
							className="rounded-full bg-gray-400 mx-4 hover:bg-gray-300"
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
							className="rounded bg-gray-400 p-1 hover:bg-gray-300"
							width={20}
							height={20}
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
				{/* <p className="text-slate-500 flex justify-center align-items-center ">
					<RiCopyrightLine className="m-1" />
					2024 <span className="pl-2"> All rights reserved. </span>
				</p> */}
				<p className="text-slate-500 flex justify-center align-items-center ">
					<CurrentTimeDisplay />
				</p>
			</div>
		</footer>
	);
};

export default Footer;

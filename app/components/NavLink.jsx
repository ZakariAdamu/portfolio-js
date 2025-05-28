import Link from "next/link";

const NavLink = ({ title, href, target }) => {
	return (
		<Link
			href={href}
			className="text-slate-400 py-2 pl-3 pr-4 md:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-slate-300"
			target={target}
			prefetch={true}
		>
			{title}
		</Link>
	);
};

export default NavLink;

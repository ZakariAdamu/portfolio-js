import Link from "next/link";

const NavLink = ({ title, href, target }) => {
	return (
		<Link
			href={href}
			className="zblock py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-slate-300"
			target={target}
			prefetch={true}
		>
			{title}
		</Link>
	);
};

export default NavLink;

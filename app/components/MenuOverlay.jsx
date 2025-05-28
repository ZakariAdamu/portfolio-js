import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
	return (
		<ul className="flex flex-col py-4 h-[50vh] items-center justify-evenly md:hidden bg-slate-800">
			{links.map((link, index) => (
				<li key={index} className="text-slate-800">
					<button onClick={() => setNavbarOpen(false)} className="w-full">
						<NavLink
							href={link.path}
							title={link.title}
							className="text-pink-300"
						/>
					</button>
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;

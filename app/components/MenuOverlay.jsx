import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
	return (
		<ul className="flex flex-col py-4 h-[100vh] items-center justify-center gap-20 md:hidden w-full">
			{links.map((link, index) => (
				<li key={index} className="text-white">
					<button onClick={() => setNavbarOpen(false)} className="w-full">
						<NavLink
							href={link.path}
							title={link.title}
							className="text-pink-300"
							onClick={() => setNavbarOpen(false)}
							target={link.target}
						/>
					</button>
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;

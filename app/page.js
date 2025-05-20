import Hero from "./components/Hero";

// import Achievements from "./components/Achievements";
export default function Home() {
	return (
		<main className="flex min-h-[87.47vh] flex-col bg-[#121212] w-[97%]">
			{/* <Navbar /> */}
			<div className="zcontainer mt-24 mx-auto px-12 py-4">
				<Hero />
				{/*<Achievements /> */}
			</div>
		</main>
	);
}

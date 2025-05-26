import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

// import Achievements from "./components/Achievements";
export default function Home() {
	return (
		<main className="flex min-h-[87.47vh] flex-col bg-[#121212] w-[100%]">
			{/* <Navbar /> */}
			<div className="mt-24 mx-auto px-12 py-4">
				<Hero />
				{/*<Achievements /> */}
				<div className="">
					<About />
					<Projects />
					<Contact />
				</div>
			</div>
		</main>
	);
}

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Achievements from "./components/Achievements";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-[#121212] w-full">
			<Navbar />
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-20">
				<Hero />
				{/* <Achievements /> */}
				<div className="space-y-12 mt-10">
					<About />
					<Projects />
					<Contact />
				</div>
			</div>
			{/* Full-bleed footer with top divider */}
			{/* <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
				<div className="bg-blue-600z border-t border-slate-600 w-screen">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					</div>
				</div>
			</div> */}
			<Footer />
		</main>
	);
}

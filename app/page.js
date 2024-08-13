import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
// import EmailForm2 from "./components/EmailForm2";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212] ">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<Hero />
				<Achievements />
				<About />
				<Projects />
				<EmailForm />
				{/* <EmailForm2 />*/}
			</div>
			<Footer />
		</main>
	);
}

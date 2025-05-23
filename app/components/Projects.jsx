"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Full Stack Ecommerce Web App",
		description: "Responsive UI with NextJS and TypeScript, payment gateway",
		image: "/images/projects/Ruqiza-store-thumbnail.png",
		alt: "Ruqiza admin image thumbnail",
		tag: ["All", "Mobile"],
		gitUrl: "https://github.com/ZakariAdamu/ruqiza_store",
		previewUrl: "https://ruqizastore2025.vercel.app/",
	},
	{
		id: 2,
		title: "Full Stack Ecommerce Admin Dashboard",
		description: "NextJS, TypeScript, MongoDB and Express",
		image: "/images/projects/admin-dashboard-pix.png",
		alt: "Ruqiza admin image thumbnail",
		tag: ["All", "Mobile"],
		gitUrl: "https://github.com/ZakariAdamu/ruqiza-admin",
		previewUrl: "https://ruqiza-admin.vercel.app/",
	},
	{
		id: 3,
		title: "Software Developer Job Board",
		description: "Next.js, MongoDB, Node.js, Express, Tailwind CSS",
		image: "/images/projects/developer_jobs.png",
		alt: "Software Developer job website image thumbnail",
		tag: ["All", "Mobile"],
		gitUrl: "https://github.com/ZakariAdamu/job_dashboard",
		previewUrl: "https://job-dashboard-one.vercel.app/",
	},
	// {
	// 	id: 4,
	// 	title: "ReactJS Weather app",
	// 	description: "React, Open_Weather_Map API",
	// 	image: "/images/projects/weather-pix-done.png",
	// 	alt: "Todo app  image thumbnail",
	// 	tag: ["All", "Mobile"],
	// 	gitUrl: "https://github.com/ZakariAdamu/SRT_PROJECT_1",
	// 	previewUrl: "https://weather-app-rho-eight-96.vercel.app/",
	// },
	{
		id: 5,
		title: "Edusity University Website",
		description: "React, CSS, Web3 Forms",
		image: "/images/projects/Edusity-webpage.png",
		alt: "project image",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ZakariAdamu/edusity",
		previewUrl: "https://edusity-one-mocha.vercel.app/",
	},
];

const Projects = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	// const handleTagChange = (newTag) => {
	// 	setTag(newTag);
	// };

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		// initial: { x: 50, opacity: 0 },
		// animate: { x: 0, opacity: 1 },
	};
	return (
		<section className="w-full">
			<h2
				className="text-center text-2xl md:text-4xl font-bold text-white mt-4 mb-6 md:mb-8"
				id="projects"
			>
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				{/*	<ProjectTag
					className="opacity-0"
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/> */}
			</div>
			<ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.2, delay: index * 1 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
							alt={project.alt}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Projects;

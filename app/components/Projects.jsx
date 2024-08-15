"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Edusity University Website",
		description:
			"A responsive university web application developed using React to showcase some of the university information to her site visitors. The website also incorporate a form email component where users can send inquiries via email directly through the website.",
		image: "/images/projects/Edusity-webpage.png",
		alt: "project image",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ZakariAdamu/edusity",
		previewUrl: "https://edusity-one-mocha.vercel.app/",
	},
	{
		id: 2,
		title: "E-commerce Application",
		description:
			"A user-friendly web application developed using the Next.js + MERN stack implementing all the features of an online ecommerce trading platform. As at now this project is still under contruction (wip).",
		image: "/images/projects/ecommerce.png",
		alt: "project image",
		tag: ["All", "Mobile"],
		gitUrl: "www.zakari.netlify.app",
		previewUrl: "www.zakari.netlify.app",
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
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	return (
		<section>
			<h2
				className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-12"
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
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							alt={project.alt}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Projects;

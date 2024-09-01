"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, animate, useInView } from "framer-motion";

const tabData = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Next.js</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>JavaScript</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>BBA International Open University, Gambia</li>
				<li>Diploma in Front-end Engineering, AltSchool Africa</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Diploma in Front-end Engineering, AltSchool Africa</li>
				<li>Meta Frontend Developer Certificate</li>
				<li>Google Data Analytics Professional Certificate</li>
			</ul>
		),
	},
];

const About = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	const imageVariants = {
		initial: { x: -100, opacity: 0 },
		animate: { x: 1, opacity: 1 },
	};

	const aboutVariants = {
		initial: { x: 100, opacity: 0 },
		animate: { x: 1, opacity: 1 },
	};
	return (
		<section className="text-white mt-6 h-full" id="about">
			<div
				ref={ref}
				className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
			>
				<motion.div
					variants={imageVariants}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.7, delay: 0.8 }}
					style={{
						perspective: "1000px", // Adding perspective to enhance the 3D effect
					}}
					className="about-image"
				>
					<Image
						className="rounded"
						src="/images/about-image.png"
						width={400}
						height={400}
					/>
				</motion.div>
				<motion.div
					variants={aboutVariants}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.9, delay: 1 }}
					style={{
						perspective: "1000px", // Adding perspective to enhance the 3D effect
					}}
					className="mt-4 md:mt-0 text-left flex flex-col h-full"
				>
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						Front-end web developer with full stack experience and a passion for
						creating interactive and responsive web applications. I have
						experience working with Next.js, TypeScript, React, Node.js,
						Express, and MongoDB. I am a quick learner, always seeking to expand
						my knowledge and skills. I am a team player, open to working with
						others to create amazing applications.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills{""}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education{""}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							Certifications{""}
						</TabButton>
					</div>
					<div className="mt-8">
						{tabData.find((t) => t.id === tab).content}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, px } from "framer-motion";
const Hero = () => {
	return (
		<section className="lg:py-16">
			<div className="grid sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, translateY: -100 }}
					animate={{ opacity: 1, translateY: 1 }}
					transition={{ duration: 0.45 }}
					style={{
						perspective: "1000px", // Adding perspective to enhance the 3D effect
					}}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello I&apos;m
						</span>
						<br />
						<TypeAnimation
							sequence={["Zakari Adamu", 1000, "React Web Developer", 1000]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base mb-6 lg:text-xl">
						...Developing Responsive & Interactive User Experiences
					</p>
					<div className="mt-14">
						<Link href="/contact" prefetch={true} target="_blank">
							<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  text-white hover:bg-slate-400">
								Email Me
							</button>
						</Link>
						<a
							href="https://drive.google.com/file/d/1SbabI-x5DiHNbd6HmfSM8kxDVsNlqAII/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="px-1 py-1 w-full sm:w-fit rounded-full text-white   bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800">
								<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
									View Resume
								</span>
							</button>
						</a>
					</div>
				</motion.div>
				<div
					// initial={{ opacity: 0, translateY: -100 }}
					// animate={{ opacity: 1, translateY: 1 }}
					// transition={{ duration: 0.45 }}
					style={{
						perspective: "1000px", // Adding perspective to enhance the 3D effect
					}}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative">
						<Image
							className="absolute rounded-full"
							src="/images/projects/Hero-image.png"
							width={300}
							height={300}
							alt="hero image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

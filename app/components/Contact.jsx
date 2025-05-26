"use client";
import React, { useState } from "react";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// your EmailJS serviceID, templateID, and publicKey
		const serviceID = "service_355gyva";
		const templateID = "template_jywp96d";
		const publicKey = "1XNDeVpEWsGouk5fo";

		// create a new object that contains dynamic template params
		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "Zakari Adamu",
			message: message,
		};

		// send the email using EmailJS
		emailjs
			.send(serviceID, templateID, templateParams, publicKey)
			.then((response) => {
				// console.log("Email sent successfully", response);
				toast.success("Email sent successfully! Thank you.");
				setName("");
				setEmail("");
				setConfirmEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.log("Error sending email", error);
			});
	};

	return (
		<section
			className="w-[99%] grid md:grid-cols-2 my-12 mx-auto zmd:my-12 py-24 gap-1 relative"
			id="contact"
		>
			<div className="mesh-gradient bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10 md:px-2">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					I&apos;m currently looking for new opportunities to contribute my
					skills, learn new skills and grow. Whether you have a question or just
					want to say hi, my inbox is always open. I will definitely respond to
					you!
				</p>
				<div className="socials lg:mt-8 flex flex-row mb-10 mt-5">
					<Link href="https://github.com/ZakariAdamu" target="_blank">
						<Image
							className="rounded-full bg-gray-300 mr-7 hover:bg-gray-500"
							width={40}
							height={40}
							src={GitHubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/zakari-adamu-84b4781b9"
						target="_blank"
					>
						<Image
							className="rounded bg-gray-300 p-2 hover:bg-gray-500"
							width={40}
							height={40}
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col md:px-2">
				<ToastContainer className="w-full" />
				<div className="name-field mb-6">
					<label
						htmlFor="name"
						className="text-white mb-2 block text-sm font-medium"
					>
						Name
					</label>
					<input
						className="bg-[#3f424e] border border-[#33353F] placeholder-[#6e7275] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						type="text"
						id="name"
						placeholder="Please enter your name"
						defaultValue={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="email-field mb-6">
					<label
						htmlFor="email"
						className="text-white mb-2 block text-sm font-medium"
					>
						Email
					</label>
					<input
						className="bg-[#3f424e] border border-[#33353F] placeholder-[#6e7275] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						type="email"
						placeholder="Please enter your email"
						value={email}
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="confirm-email-field mb-6">
					<label
						htmlFor="confirm-email"
						className="text-white mb-2 block text-sm font-medium"
					>
						Confirm Email
					</label>
					<input
						className="bg-[#3f424e] border border-[#33353F] placeholder-[#6e7275] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						type="email"
						id="confirm-email"
						placeholder="Please verify your email"
						value={confirmEmail}
						onChange={(e) => setConfirmEmail(e.target.value)}
						required
					/>
				</div>
				<div className="message-field mb-6">
					<label
						htmlFor="message"
						className="text-white block text-sm mb-2 font-medium"
					>
						Message
					</label>
					<textarea
						className="bg-[#3f424e] border border-[#33353F]
						placeholder-[#6e7275] text-gray-100 text-sm rounded-lg block w-full
						p-2"
						name="message"
						id="message"
						cols="10"
						rows="6"
						required
						placeholder="Please enter your message here..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;

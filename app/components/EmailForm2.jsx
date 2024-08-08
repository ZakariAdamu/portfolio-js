"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailForm2 = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// your EmailJS serviceID, templateID, and publicKey
		// const serviceID = process.env.YOUR_SERVICE_ID;
		// const templateID = process.env.YOUR_TEMPLATE_ID;
		// const publicKey = process.env.YOUR_PUBLIC_KEY;

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
				console.log("Email sent successfully", response);
				toast.success("Email sent successfully! Thank you.");
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.log("Error sending email", error);
			});
	};

	return (
		<form onSubmit={handleSubmit} className="border bg-slate-400">
			<ToastContainer />
			<label>Name</label>
			<input
				className="border"
				type="text"
				placeholder="Your name"
				defaultValue={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label>Email</label>
			<input
				className="border"
				type="email"
				placeholder="Your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label>Message</label>
			<textarea
				className="border"
				cols="30"
				rows="10"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			<button type="submit">Send Email</button>
		</form>
	);
};

// export default EmailForm2;

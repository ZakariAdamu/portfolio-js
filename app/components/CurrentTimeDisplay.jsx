"use client";
import React, { useEffect, useState } from "react";

const CurrentTimeDisplay = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	const timeNow = time.toLocaleTimeString();

	// console.log(time);
	return <>{timeNow}</>;
};

export default CurrentTimeDisplay;

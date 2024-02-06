"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);
	const [history, setHistory] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState(0);

	const handleAdd = () => {
		const newCount = count + Number(inputValue);
		setCount(newCount);
		setHistory([...history, `Added ${inputValue}, total: ${newCount}`]);
	};

	const handleSubtract = () => {
		const newCount = count - Number(inputValue);
		setCount(newCount);
		setHistory([
			...history,
			`Subtracted ${inputValue}, total: ${newCount}`,
		]);
	};
	return (
		<div>
			<Input
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(Number(e.target.value))}
			/>
			<Button onClick={handleAdd}>Add</Button>
			<Button onClick={handleSubtract}>Subtract</Button>
			<h2>Count: {count}</h2>
			<h3>History:</h3>
			<ul>
				{history.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

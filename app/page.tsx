"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

type IHistoryProps = {
	id: number;
	action: string;
	value: number;
	time: Date;
	total: number;
};

const formatDate = (date: Date) => {
	const newDate = new Date(date);
	const val = new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	}).format(newDate);
	return val;
};

export default function Home() {
	const [count, setCount] = useState(0);
	const [history, setHistory] = useState<IHistoryProps[]>([]);
	const [inputValue, setInputValue] = useState<Number | null>(null);

	const handleClickButton = (action: "add" | "subtract") => {
		const newCount =
			action === "add"
				? count + Number(inputValue)
				: count - Number(inputValue);
		setCount(newCount);

		setHistory([
			...history,
			{
				id: history.length + 1,
				action: action,
				value: Number(inputValue),
				time: new Date(),
				total: newCount,
			},
		]);
		setInputValue(0);
	};

	console.log({ history });
	return (
		<div className="max-w-sm mx-auto">
			<div className="max-w-sm mt-8">
				<h3 className="text-2xl font-bold">Add Value</h3>
				<Input
					type="number"
					value={inputValue?.toString()}
					onChange={(e) => setInputValue(Number(e.target.value))}
				/>
				<div className="mt-4 flex gap-4">
					<Button onClick={() => handleClickButton("add")}>
						Add
					</Button>
					<Button
						onClick={() => handleClickButton("subtract")}
						variant={"destructive"}
					>
						Subtract
					</Button>
				</div>
			</div>
			<h2 className="text-3xl font-bold my-4"> Current Count: {count}</h2>
			<h3 className="text-xl font-medium mt-4">History:</h3>
			{history.length > 0 && (
				<ul className="list-item">
					{history
						.sort((a, b) => (a.time < b.time ? 1 : -1))
						.map((item, index) => (
							<li key={index}>
								{/* {console.log({ time: formatDate(item.time) })} */}
								time:{formatDate(item.time)} {item.action} :{" "}
								{item.value}, Total: {item.total}
							</li>
						))}
				</ul>
			)}{" "}
			{history.length === 0 && (
				<p className="text-sm mt-4">No history yet</p>
			)}
		</div>
	);
}

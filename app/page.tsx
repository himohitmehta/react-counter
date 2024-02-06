"use client";
import HistoryTable from "@/components/counter/history-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HistoryDataType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);
	const [history, setHistory] = useState<HistoryDataType[]>([]);
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
		<div className="max-w-lg mx-auto">
			<h2 className="text-3xl font-bold my-4"> Current Count: {count}</h2>
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
			<h3 className="text-xl font-medium my-4">History:</h3>
			<HistoryTable data={history} />

			{history.length === 0 && (
				<p className="text-sm mt-4">No history yet</p>
			)}
		</div>
	);
}

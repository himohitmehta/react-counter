import { HistoryDataType } from "@/lib/types";
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { formatDate } from "@/lib/utils";

export default function HistoryTable({ data }: { data: HistoryDataType[] }) {
	return (
		<Table>
			{/* <TableCaption>History</TableCaption> */}
			<TableHeader>
				<TableRow>
					<TableHead className="w-[50px]">Id</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Action</TableHead>
					<TableHead>Value</TableHead>

					<TableHead className="text-right font-bold">
						Count
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data
					.sort((a, b) => (a.time < b.time ? 1 : -1))
					.map((item) => (
						<TableRow key={item.id}>
							<TableCell className="font-medium">
								{item.id}
							</TableCell>
							<TableCell>{formatDate(item.time)}</TableCell>
							<TableCell className="capitalize">
								{item.action}
							</TableCell>
							<TableCell>{item.value}</TableCell>
							<TableCell className="text-right font-bold">
								{item.total}
							</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
}

import { useEffect, useState } from "react";
import Lane from "../../components/Lane/Lane";
import useDataFetching from "../../hooks/useDataFetching";
import "./Board.css";

const lanes = [
	{ id: 1, title: "To Do" },
	{ id: 2, title: "In Progress" },
	{ id: 3, title: "Review" },
	{ id: 4, title: "Done" },
];

function onDragStart(e, id) {
	e.dataTransfer.setData("id", id);
}

function onDragOver(e) {
	e.preventDefault();
}

function Board() {
	const [loading, data, error] = useDataFetching(
		`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
	);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, [data]);

	function onDrop(e, laneID) {
		const id = e.dataTransfer.getData("id");

		const updatedTasks = tasks.filter((task) => {
			if (task.id.toString() === id) {
				task.lane = laneID;
			}
            return task;
		});
        setTasks(updatedTasks);
	}
    console.log(tasks);
	return (
		<div className="Board-wrapper">
			{lanes.map((lane) => (
				<Lane
					key={lane.id}
                    laneId={lane.id}
					title={lane.title}
					loading={loading}
					error={error}
					tasks={data.filter((task) => task.lane === lane.id)}
					onDragStart={onDragStart}
					onDragOver={onDragOver}
                    onDrop={onDrop}
				/>
			))}
		</div>
	);
}

export default Board;

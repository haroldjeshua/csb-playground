import { useState } from "react";
import "./styles.css";

let id = 0;

const EXISTING_TASKS = [
  { id: id++, title: "Wake up 0500" },
  { id: id++, title: "Make bed" },
  { id: id++, title: "Drink water" }
];

export default function Todo() {
  const [tasks, setTasks] = useState(EXISTING_TASKS);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Create a task"
          aria-label="Create a new task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />

        <div>
          <button
            onClick={() => {
              setTasks(
                tasks.concat({
                  id: id++,
                  title: newTask.trim()
                }),
                setNewTask("")
              );
            }}
          >
            Create Task
          </button>
        </div>
      </div>

      <ul>
        {tasks.map(({ id, title }) => (
          <li key={id}>
            <span>{title}</span>
            <button
              onClick={() => {
                setTasks(tasks.filter((task) => task.id !== id));
              }}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

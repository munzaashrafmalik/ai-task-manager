"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function calculatePriority(text) {
    if (text.toLowerCase().includes("urgent")) return "High";
    if (text.length > 20) return "Medium";
    return "Low";
  }

  function suggestDeadline(priority) {
    if (priority === "High") return "Today";
    if (priority === "Medium") return "In 2 days";
    return "In 5 days";
  }

  function addTask() {
    if (!title.trim()) return;

    const priority = calculatePriority(title);
    const deadline = suggestDeadline(priority);

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        completed: false,
        priority,
        deadline,
      },
    ]);

    setTitle("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-900 flex justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-slate-800 rounded-2xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-white text-center">
          AI Task Manager
        </h1>
        <p className="text-center text-slate-400 mt-1">
          Smart priority & deadlines
        </p>

        {/* Input */}
        <div className="flex gap-2 mt-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Urgent: submit assignment"
            className="flex-1 bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded-lg border border-slate-600 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 px-4 rounded-lg text-white font-medium hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mt-5">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-300"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Task List */}
        <ul className="mt-6 space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-lg border cursor-pointer ${
                task.completed
                  ? "bg-green-700/20 border-green-600 text-green-300 line-through"
                  : "bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
              }`}
            >
              <div className="flex justify-between">
                <span>{task.title}</span>
                {task.completed && "✔"}
              </div>
              <div className="text-sm mt-1 text-slate-400">
                Priority: <span className="font-medium">{task.priority}</span> •
                Deadline: <span className="font-medium">{task.deadline}</span>
              </div>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-slate-400 mt-6">
            No tasks added yet
          </p>
        )}
      </div>
    </main>
  );
}

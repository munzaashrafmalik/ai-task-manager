"use client";import TaskCard from "../../components/TaskCard";
import TaskForm from "../../components/TaskForm";

export default function TasksPage() {
  const tasks = [
    { id: 1, title: "Finish homework", description: "Math and Science", priority: "high", status: "pending" },
    { id: 2, title: "Grocery shopping", description: "Buy vegetables", priority: "medium", status: "done" },
  ];

  const handleSubmit = (task) => {
    console.log("Save task", task);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <TaskForm onSubmit={handleSubmit} />
      <div className="mt-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}


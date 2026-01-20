import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const demoTask = {
    title: "Learn Next.js",
    description: "Build AI Task Manager project",
    priority: "High",
    status: "Pending",
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">AI Task Manager</h1>

      <TaskForm />

      <div className="mt-6">
        <TaskCard task={demoTask} />
      </div>
    </main>
  );
}

}


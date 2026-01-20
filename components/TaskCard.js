export default function TaskCard({ task }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="text-sm mt-2">
        <span className="text-blue-500">{task.priority}</span>
        <span className="ml-4 text-gray-400">{task.status}</span>
      </div>
    </div>
  );
}

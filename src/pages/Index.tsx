import { useState } from "react";
import { Task } from "@/types/task";
import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Welcome to your Routine Manager!",
      description: "Start by adding your first task above.",
      priority: "medium",
      completed: false,
      date: new Date().toISOString(),
    },
  ]);

  const handleAddTask = (newTask: Omit<Task, "id" | "completed">) => {
    const task: Task = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
    };
    setTasks((prev) => [task, ...prev]);
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-secondary p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Routine Manager</h1>
        <div className="space-y-8">
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />
        </div>
      </div>
    </div>
  );
};

export default Index;
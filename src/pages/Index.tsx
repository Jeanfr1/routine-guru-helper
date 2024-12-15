import { useState, useEffect } from "react";
import { Task } from "@/types/task";
import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 animate-gradient-x">
      <div className="max-w-3xl mx-auto p-4 md:p-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8 animate-slide-in">
          <h1 className="text-4xl font-bold text-gray-800 hover:text-primary transition-colors duration-300">
            Routine Manager
          </h1>
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
        <div className="space-y-8 animate-scale-in">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AddTaskForm onAddTask={handleAddTask} />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
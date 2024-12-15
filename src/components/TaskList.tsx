import { Task } from "@/types/task";
import TaskCard from "./TaskCard";
import { useToast } from "@/hooks/use-toast";

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
}

const TaskList = ({ tasks, onTaskComplete }: TaskListProps) => {
  const { toast } = useToast();

  const handleTaskComplete = (taskId: string) => {
    onTaskComplete(taskId);
    toast({
      title: "Task completed! 🎉",
      description: "Keep up the great work!",
    });
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={handleTaskComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
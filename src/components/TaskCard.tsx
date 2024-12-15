import { Task } from "@/types/task";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, Clock } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onComplete: (taskId: string) => void;
}

const TaskCard = ({ task, onComplete }: TaskCardProps) => {
  const priorityColors = {
    high: "bg-task-high/10 border-task-high",
    medium: "bg-task-medium/10 border-task-medium",
    low: "bg-task-low/10 border-task-low",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg border-2 mb-3 animate-fade-in cursor-pointer transition-all",
        priorityColors[task.priority],
        task.completed && "opacity-50"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onComplete(task.id)}
            className="text-primary hover:text-primary-dark transition-colors"
          >
            {task.completed ? (
              <CheckCircle className="h-6 w-6" />
            ) : (
              <Circle className="h-6 w-6" />
            )}
          </button>
          <div>
            <h3
              className={cn(
                "font-medium",
                task.completed && "line-through text-gray-500"
              )}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-600">{task.description}</p>
            )}
            {task.scheduled_time && (
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <Clock className="h-4 w-4" />
                <span>{task.scheduled_time}</span>
              </div>
            )}
          </div>
        </div>
        <span className="text-sm text-gray-500">
          {new Date(task.date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
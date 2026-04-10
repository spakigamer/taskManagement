import { motion } from "framer-motion";
import { Trash2, GripVertical } from "lucide-react";
import { Task } from "@/lib/api";
import { cn } from "@/lib/utils";
import AnimatedCheckbox from "./AnimatedCheckbox";
import { format } from "date-fns";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -60, scale: 0.95, transition: { duration: 0.25 } }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "group relative rounded-3xl px-6 py-5 flex items-center gap-4 transition-all duration-300 cursor-default",
        "bg-card/90 backdrop-blur-xl border border-border/40 shadow-sm",
        "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20",
        task.completed && "opacity-60"
      )}
    >
      {/* Subtle left accent */}
      <div className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-12 rounded-r-full transition-all duration-300",
        task.completed ? "bg-primary/20" : "bg-primary/50 shadow-[0_0_8px_rgba(99,102,241,0.4)]"
      )} />

      <div className="opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
        <GripVertical className="w-4 h-4 text-muted-foreground" />
      </div>

      <AnimatedCheckbox checked={task.completed} onChange={() => onToggle(task.id)} />

      <div className="flex-1 min-w-0 px-1">
        <p
          className={cn(
            "text-lg font-bold transition-all duration-300 truncate",
            task.completed
              ? "line-through text-muted-foreground/50 decoration-primary/30"
              : "text-foreground"
          )}
        >
          {task.title}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1 font-medium italic">
          {format(new Date(task.createdAt), "MMM d, yyyy · h:mm a")}
        </p>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-2.5 rounded-xl hover:bg-destructive/10 text-muted-foreground/50 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-110 active:scale-95"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default TaskItem;

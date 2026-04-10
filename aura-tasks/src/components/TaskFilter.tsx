import { Filter } from "@/hooks/useTasks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TaskFilterProps {
  filter: Filter;
  onFilter: (f: Filter) => void;
  counts: { all: number; active: number; completed: number };
}

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Done" },
];

const TaskFilter = ({ filter, onFilter, counts }: TaskFilterProps) => {
  return (
    <div className="relative flex gap-1.5 p-1.5 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border/30">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onFilter(f.key)}
          className={cn(
            "relative px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-200 z-10",
            filter === f.key
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/70"
          )}
        >
          {filter === f.key && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-card rounded-xl shadow-md border border-border/30"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{f.label}</span>
          <span className={cn(
            "relative z-10 ml-2 text-xs tabular-nums font-black",
            filter === f.key ? "text-primary" : "text-muted-foreground/40"
          )}>
            {counts[f.key]}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;

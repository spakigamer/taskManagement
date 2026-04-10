import { useState } from "react";
import { Plus, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TaskInputProps {
  onAdd: (title: string) => Promise<void>;
}

const TaskInput = ({ onAdd }: TaskInputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Task title cannot be empty");
      return;
    }
    if (trimmed.length > 200) {
      setError("Task title must be under 200 characters");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await onAdd(trimmed);
      setValue("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`relative flex items-center gap-3 rounded-[20px] bg-card/90 backdrop-blur-xl border transition-all duration-300 px-5 py-2 shadow-sm ${
          focused
            ? "border-primary/40 shadow-xl shadow-primary/10 ring-4 ring-primary/5"
            : "border-border/40 hover:border-primary/20"
        }`}
      >
        <Zap className={`w-5 h-5 transition-colors duration-300 ${focused ? "text-primary shadow-sm" : "text-muted-foreground/40"}`} />
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="What needs to be done?"
          className="flex-1 h-14 bg-transparent text-base font-medium text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
          disabled={submitting}
          maxLength={200}
        />
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
        >
          {submitting ? (
            <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-destructive mt-2 ml-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

export default TaskInput;

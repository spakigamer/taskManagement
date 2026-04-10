import { useTasks } from "@/hooks/useTasks";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import TaskSkeleton from "@/components/TaskSkeleton";
import EmptyState from "@/components/EmptyState";
import ThemeToggle from "@/components/ThemeToggle";
import { CheckSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const { tasks, loading, filter, setFilter, addTask, toggleTask, removeTask, counts } = useTasks();

  const completionRate = counts.all > 0 ? Math.round((counts.completed / counts.all) * 100) : 0;

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/6 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-lg mx-auto px-5 py-8 sm:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                <CheckSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground tracking-tight">Tasks</h1>
                <p className="text-xs text-muted-foreground">Stay organized, stay ahead</p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Stats bar */}
          {!loading && counts.all > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-4 mb-6"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">Progress</span>
                </div>
                <span className="text-xs font-bold text-primary">{completionRate}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionRate}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted-foreground">{counts.completed} completed</span>
                <span className="text-[10px] text-muted-foreground">{counts.active} remaining</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Add Task */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-6"
        >
          <TaskInput onAdd={addTask} />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center justify-between mb-4"
        >
          <TaskFilter filter={filter} onFilter={setFilter} counts={counts} />
        </motion.div>

        {/* Task List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {loading ? (
            <TaskSkeleton />
          ) : tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} />
          )}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] text-muted-foreground/50 mt-12"
        >
          Built with precision & care
        </motion.p>
      </div>
    </div>
  );
};

export default Index;

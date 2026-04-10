import { useTasks } from "@/hooks/useTasks";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import TaskSkeleton from "@/components/TaskSkeleton";
import EmptyState from "@/components/EmptyState";
import ThemeToggle from "@/components/ThemeToggle";
import { CheckSquare, Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Tasks = () => {
  const { tasks, loading, filter, setFilter, addTask, toggleTask, removeTask, counts } = useTasks();
  const { user } = useAuth();
  const completionRate = counts.all > 0 ? Math.round((counts.completed / counts.all) * 100) : 0;

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/6 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-10 sm:py-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-5">
              <Link to="/" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 transition-transform hover:scale-105">
                <CheckSquare className="w-7 h-7 text-primary-foreground" />
              </Link>
              <div>
                <h1 className="text-4xl font-extrabold text-foreground tracking-tight underline-offset-4 mb-1">Tasks</h1>
                <p className="text-sm font-medium text-muted-foreground/80">Stay organized, stay ahead</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/profile" className="p-2.5 rounded-xl bg-card/80 backdrop-blur border border-border/30 shadow-sm hover:shadow-md transition-all text-muted-foreground hover:text-foreground">
                <User className="w-4 h-4" />
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {!loading && counts.all > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-3xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wider">Overall Progress</span>
                </div>
                <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{completionRate}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-muted overflow-hidden shadow-inner">
                <motion.div initial={{ width: 0 }} animate={{ width: `${completionRate}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-lg" />
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-xs font-semibold text-muted-foreground">{counts.completed} completed tasks</span>
                <span className="text-xs font-semibold text-muted-foreground">{counts.active} to go</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-6">
          <TaskInput onAdd={addTask} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="flex items-center justify-between mb-4">
          <TaskFilter filter={filter} onFilter={setFilter} counts={counts} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          {loading ? <TaskSkeleton /> : tasks.length === 0 ? <EmptyState /> : <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} />}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-[10px] text-muted-foreground/50 mt-12">
          Built with precision & care
        </motion.p>
      </div>
    </div>
  );
};

export default Tasks;

import { useState, useEffect, useCallback } from "react";
import { Task, fetchTasks, createTask, updateTask, deleteTask } from "@/lib/api";
import { toast } from "sonner";

export type Filter = "all" | "active" | "completed";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data);
    } catch {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const addTask = async (title: string) => {
    try {
      const task = await createTask(title);
      setTasks((prev) => [task, ...prev]);
      toast.success("Task added");
    } catch {
      toast.error("Failed to add task");
    }
  };

  const toggleTask = async (id: string) => {
    const prev = tasks;
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
    try {
      const task = prev.find((t) => t.id === id);
      if (task) await updateTask(id, { completed: !task.completed });
    } catch {
      setTasks(prev);
      toast.error("Failed to update task");
    }
  };

  const removeTask = async (id: string) => {
    const prev = tasks;
    setTasks((t) => t.filter((x) => x.id !== id));
    try {
      await deleteTask(id);
      toast.success("Task deleted");
    } catch {
      setTasks(prev);
      toast.error("Failed to delete task");
    }
  };

  const filtered = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return { tasks: filtered, loading, filter, setFilter, addTask, toggleTask, removeTask, counts };
}

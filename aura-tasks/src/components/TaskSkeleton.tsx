import { Skeleton } from "@/components/ui/skeleton";

const TaskSkeleton = () => {
  return (
    <div className="flex flex-col gap-2.5">
      {[0.8, 0.65, 0.5].map((w, i) => (
        <div
          key={i}
          className="rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 px-5 py-4 flex items-center gap-3"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <Skeleton className="w-5 h-5 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 rounded-lg" style={{ width: `${w * 100}%` }} />
            <Skeleton className="h-3 w-24 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSkeleton;

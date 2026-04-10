import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-28 h-28 rounded-[32px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 border border-primary/10 shadow-xl shadow-primary/5"
      >
        <Inbox className="w-12 h-12 text-primary/40" />
      </motion.div>
      <h3 className="text-2xl font-black text-foreground mb-3">All clear!</h3>
      <p className="text-base font-medium text-muted-foreground/60 max-w-[300px] leading-relaxed">
        Your task list is empty. Take a moment to breathe or add a new goal above!
      </p>
    </motion.div>
  );
};

export default EmptyState;

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const AnimatedCheckbox = ({ checked, onChange }: AnimatedCheckboxProps) => {
  return (
    <button
      onClick={onChange}
      className="relative flex items-center justify-center w-5 h-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
      aria-label={checked ? "Mark incomplete" : "Mark complete"}
    >
      <motion.div
        className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
          checked
            ? "bg-primary border-primary"
            : "border-muted-foreground/30 hover:border-primary/50"
        )}
        whileTap={{ scale: 0.85 }}
      >
        <motion.div
          initial={false}
          animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </button>
  );
};

export default AnimatedCheckbox;

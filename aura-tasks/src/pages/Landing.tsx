import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import {
  CheckSquare, Zap, Shield, BarChart3, Clock, Users,
  ArrowRight, Star, Sparkles, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const features = [
  { icon: CheckSquare, title: "Smart Task Management", desc: "Organize, prioritize, and track your tasks with an intuitive interface designed for productivity." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimistic UI updates ensure your actions feel instant. No waiting, just doing." },
  { icon: Shield, title: "Secure by Default", desc: "Your data is protected with enterprise-grade security and row-level access controls." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Visual progress bars and stats keep you motivated and aware of your achievements." },
  { icon: Clock, title: "Real-time Sync", desc: "Changes sync across devices instantly. Pick up right where you left off." },
  { icon: Users, title: "Built for Teams", desc: "Collaboration features coming soon. Share tasks and stay aligned with your team." },
];

const Landing = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated BG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-6 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
            <CheckSquare className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Aura Tasks</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {user ? (
            <Link to="/tasks">
              <Button className="rounded-xl shadow-md shadow-primary/20">Go to Tasks</Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="rounded-xl text-sm">Sign in</Button>
              </Link>
              <Link to="/register">
                <Button className="rounded-xl shadow-md shadow-primary/20">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Now in public beta — Free to use
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
            Tasks done
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              beautifully.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A minimal, premium task manager built for people who value clarity.
            Stay organized with elegant design and powerful features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to={user ? "/tasks" : "/register"}>
              <Button size="lg" className="rounded-xl px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                {user ? "Open Tasks" : "Start for free"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="#features">
              <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base">
                See features
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/10 p-6 sm:p-8">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="flex-1 h-6 rounded-lg bg-muted/60 mx-4" />
            </div>
            {/* Fake tasks */}
            {["Design homepage layout", "Set up authentication", "Deploy to production"].map((t, i) => (
              <div key={t} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/60 mb-2 border border-border/20">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 1 ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                  {i === 1 && <CheckSquare className="w-3 h-3 text-primary-foreground" />}
                </div>
                <span className={`text-sm ${i === 1 ? "line-through text-muted-foreground/50" : "text-foreground"}`}>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Powerful features wrapped in a clean, minimal interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 sm:p-16 text-center"
        >
          <div className="flex justify-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Ready to get organized?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
            Join thousands of productive people who trust Aura Tasks to manage their daily tasks.
          </p>
          <Link to={user ? "/tasks" : "/register"}>
            <Button size="lg" className="rounded-xl px-10 h-12 text-base shadow-lg shadow-primary/25">
              {user ? "Go to Tasks" : "Get started — it's free"} <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-8 border-t border-border/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Aura Tasks</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Aura Tasks. Built with precision & care.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

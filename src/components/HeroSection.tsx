import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Plataforma con Inteligencia Artificial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Gestión y análisis inteligente de{" "}
            <span className="text-gradient">
              exámenes de laboratorio clínico
            </span>{" "}
            con IA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Plataforma web basada en Inteligencia Artificial que permite cargar,
            analizar y gestionar resultados de laboratorio clínico de manera
            rápida, segura y precisa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#planes"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-glow"
            >
              Ver Planes <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/573102740308?text=Ver%20Demo"
              className="flex items-center gap-3 px-8 py-3.5 rounded-lg border border-border hover:border-primary/50 transition-colors text-foreground"
            >
              <Play size={16} className="text-primary" /> Ver Demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-card">
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={heroDashboard}
              alt="Panel de Zynovapp"
              width={1280}
              height={800}
              className="w-full"
            />
          </div>
          <p className="text-xs text-muted-foreground/60 text-center mt-3 italic">
            * Los datos mostrados son ficticios y solo con fines ilustrativos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-card border border-border/50 rounded-2xl p-12 md:p-16 shadow-glow"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu laboratorio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Únete a los laboratorios que ya optimizan sus procesos con
            inteligencia artificial.
          </p>
          <a
            href="https://wa.me/573102740308?text=Quiero%20más%20información"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-glow"
          >
            Comenzar ahora <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

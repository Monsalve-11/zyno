import { motion } from "framer-motion";
import { Clock, CheckCircle, Lock, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Rapidez", desc: "Reduce tiempos de análisis y entrega de resultados." },
  { icon: CheckCircle, title: "Precisión", desc: "Minimiza errores humanos con validaciones automáticas." },
  { icon: Lock, title: "Seguridad", desc: "Cumple con estándares de seguridad y confidencialidad." },
  { icon: TrendingUp, title: "Decisiones inteligentes", desc: "Toma decisiones basadas en datos con reportes e indicadores." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Beneficios</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Automatización, seguridad y análisis en un solo sistema
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <b.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

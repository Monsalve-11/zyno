import { motion } from "framer-motion";
import { Microscope, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Microscope, label: "Análisis automatizados", value: "10x más rápido" },
  { icon: Zap, label: "Precisión IA", value: "99.2%" },
  { icon: ShieldCheck, label: "Seguridad", value: "Datos encriptados" },
];

const IntroSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4"
          >
            Potencia tu Laboratorio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-6"
          >
            Descubre la próxima generación en gestión de laboratorios clínicos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground leading-relaxed"
          >
            Automatiza la interpretación de exámenes como hemogramas, perfiles bioquímicos, pruebas de coagulación, electrolitos, inmunología y más, generando reportes detallados, alertas de riesgo y seguimiento individual o poblacional para apoyar decisiones médicas y optimizar la atención en clínicas, IPS y laboratorios.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card border border-border/50 rounded-xl p-8 text-center shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={24} />
              </div>
              <p className="font-heading text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <p className="text-muted-foreground italic border-l-2 border-primary pl-6 text-left">
            "Nuestra tecnología IA potencia la precisión diagnóstica y eficiencia operativa de los laboratorios clínicos, garantizando seguridad, trazabilidad y cumplimiento normativo"
          </p>
          <p className="text-sm text-primary mt-3 text-left pl-6">— Zynovapp</p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default IntroSection;

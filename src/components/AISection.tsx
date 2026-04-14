import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import aiAnalysis from "@/assets/ai-analysis.png";

const AISection = () => {
  return (
    <section id="ia" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Análisis Avanzado con IA</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Detección inteligente de patologías y anomalías
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro algoritmo analiza los valores de laboratorio, compara con rangos de referencia y genera interpretaciones automáticas y alertas visuales. Detecta tendencias, posibles patologías y anomalías antes que el ojo humano.
            </p>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-destructive/30 bg-destructive/5">
              <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-heading font-semibold text-sm mb-1">Aviso Importante</p>
                <p className="text-sm text-muted-foreground">
                  Este módulo IA apoya la gestión clínica y diagnóstica. No sustituye la interpretación médica profesional.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
            <img
              src={aiAnalysis}
              alt="Análisis IA de Zynovapp"
              width={800}
              height={600}
              loading="lazy"
              className="relative rounded-xl border border-border/50 shadow-card"
            />
            <p className="text-xs text-muted-foreground/60 text-center mt-3 italic">* Los datos mostrados son ficticios y solo con fines ilustrativos.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;

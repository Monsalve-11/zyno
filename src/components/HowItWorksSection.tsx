import { motion } from "framer-motion";
import { Upload, Brain, FileBarChart, Bell } from "lucide-react";

const steps = [
  { icon: Upload, title: "Carga los resultados", desc: "Sube los exámenes de laboratorio a la plataforma en segundos." },
  { icon: Brain, title: "Análisis con IA", desc: "Nuestro motor IA interpreta los valores y compara con rangos de referencia." },
  { icon: FileBarChart, title: "Genera reportes", desc: "Obtén informes detallados con visualizaciones y tendencias." },
  { icon: Bell, title: "Alertas automáticas", desc: "Recibe notificaciones de valores críticos o fuera de rango." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Cómo Funciona</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            De la muestra al diagnóstico en minutos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-5 text-primary-foreground">
                <step.icon size={24} />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}
              <p className="text-xs text-primary font-medium mb-2">Paso {i + 1}</p>
              <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

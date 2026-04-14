import { motion } from "framer-motion";
import { Users, BarChart3, FileCheck, FileText, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestión de pacientes y usuarios",
    desc: "Registra, busca, filtra y gestiona historiales clínicos con facilidad.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas y evolución del estado de salud",
    desc: "Visualiza la evolución individual o poblacional con gráficos y reportes IA.",
  },
  {
    icon: FileCheck,
    title: "Gestión de exámenes",
    desc: "Crea, valida y firma digitalmente resultados. Carga plantillas o personaliza formatos.",
  },
  {
    icon: FileText,
    title: "Informes",
    desc: "Genera reportes descargables con indicación del nivel de urgencia.",
  },
  {
    icon: Brain,
    title: "Análisis IA de exámenes",
    desc: "Obtén interpretación automática, alertas de riesgo, tendencias y comparativas con exámenes anteriores.",
  },
  {
    icon: Shield,
    title: "Gestión de especialistas y colaboradores",
    desc: "Control total de usuarios, roles y permisos dentro del laboratorio.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funciones" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Funciones Principales</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Plataforma integral para laboratorios clínicos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automatiza la gestión clínica y el análisis de resultados con IA, optimizando procesos y fortaleciendo la toma de decisiones médicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-gradient-card border border-border/50 rounded-xl p-7 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    desc: "Ideal para laboratorios pequeños.",
    features: [
      "Acceso a todas las funciones",
      "Límite de exámenes mensuales",
      "Soporte básico",
    ],
    featured: false,
    link: "https://wa.me/573102740308?text=Estoy%20interesado%20en%20el%20Plan%20Starter",
  },
  {
    name: "Professional",
    price: "$5",
    period: "USD / mes",
    desc: "Para laboratorios medianos y grandes.",
    features: [
      "Exámenes ilimitados",
      "Soporte prioritario",
      "Reportes avanzados",
    ],
    featured: true,
    link: "https://wa.me/573102740308?text=Estoy%20interesado%20en%20el%20Plan%20Professional",
  },
  {
    name: "Enterprise IA",
    price: "$10",
    period: "USD / mes",
    desc: "Para laboratorios con mayor demanda y uso de IA.",
    features: [
      "Exámenes ilimitados",
      "Módulo de análisis IA",
      "Consultas IA limitadas",
      "Soporte premium",
    ],
    featured: false,
    link: "https://wa.me/573102740308?text=Estoy%20interesado%20en%20el%20Plan%20Enterprise%20IA",
  },
];

const PricingSection = () => {
  return (
    <section id="planes" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Planes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Selecciona el plan que mejor se adapte
          </h2>
          <p className="text-muted-foreground">
            Escala según las necesidades de tu laboratorio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl p-8 border transition-all ${
                plan.featured
                  ? "border-primary/50 bg-gradient-card shadow-glow scale-[1.02]"
                  : "border-border/50 bg-gradient-card shadow-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${
                  plan.featured
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Seleccionar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

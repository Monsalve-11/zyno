import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué tipo de exámenes puedo analizar con Zynovapp?",
    a: "Puedes analizar hemogramas, perfiles bioquímicos, pruebas de coagulación, electrolitos, inmunología y muchos más tipos de exámenes clínicos.",
  },
  {
    q: "¿La IA reemplaza al profesional médico?",
    a: "No. Nuestro módulo de IA apoya la gestión clínica y diagnóstica, pero no sustituye la interpretación médica profesional.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí, puedes escalar o cambiar tu plan según las necesidades de tu laboratorio en cualquier momento.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Cumplimos con estándares de seguridad y confidencialidad, garantizando trazabilidad y cumplimiento normativo para proteger la información de tus pacientes.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Preguntas Frecuentes</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">¿Tienes dudas?</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-gradient-card">
                <AccordionTrigger className="font-heading text-left hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

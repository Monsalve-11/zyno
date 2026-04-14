import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold text-gradient mb-4">Zynovapp</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma de gestión y análisis inteligente de exámenes de laboratorio clínico con IA.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Consentimiento informado para servicios de salud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" /> contacto@zynovapp.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" /> +57 3102740308
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" /> Cúcuta, Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zynovapp. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bereit für mehr qualifizierte Termine?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Lass uns in einem kostenlosen Beratungsgespräch herausfinden, wie wir deine Vertriebspipeline systematisch aufbauen können.
          </p>

          {/* Main CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 hover:shadow-card transition-all duration-300">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Persönliche Beratung
              </h3>
              <p className="text-muted-foreground mb-6">
                Wir analysieren deine Situation und zeigen dir konkrete Lösungswege auf.
              </p>
              
              <Button
                size="lg"
                onClick={() => window.open("tel:+4915678498703", "_self")}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto mb-4"
              >
                <Phone className="w-6 h-6 mr-3" />
                Direkt anrufen: 015678 498703
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Antwort innerhalb von 24 Stunden garantiert</span>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">E-Mail Kontakt</h4>
              <a 
                href="mailto:hello@outbound-solutions.de"
                className="text-primary hover:text-accent transition-colors"
              >
                hello@outbound-solutions.de
              </a>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Direkter Anruf</h4>
              <a 
                href="tel:+4915678498703"
                className="text-primary hover:text-accent transition-colors font-bold"
              >
                015678 498703
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
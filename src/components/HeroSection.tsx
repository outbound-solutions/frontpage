import { Button } from "@/components/ui/button";
import { Phone, TrendingUp, Users, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 52, 0.8), rgba(34, 34, 52, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
            Wir bringen Dein Produkt an den richtigen Tisch.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Du hast ein starkes Produkt, vielleicht sogar einen Gamechanger? Aber der Vertrieb zieht nicht so richtig an? 
            Wir bringen systematisch neue Kunden an den Tisch – mit echten Terminen bei Entscheidern.
          </p>

          {/* Main CTA */}
          <div className="mb-12">
            <Button
              size="lg"
              onClick={() => window.open("tel:+4915678498703", "_self")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              <Phone className="w-6 h-6 mr-3" />
              Direkt anrufen
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              <strong className="text-foreground">015678 498703</strong> - Antwort innerhalb von 24 Stunden garantiert
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Erfolgsquote</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Termine vermittelt</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-primary-glow">10+</div>
              <div className="text-sm text-muted-foreground">Branchen Erfahrung</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm font-bold text-green-400">Sofort</div>
              <div className="text-sm text-muted-foreground">verfügbar</div>
            </div>
          </div>

          {/* Additional Keywords */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Zielgruppengenau</span>
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Systematisch</span>
            <span className="bg-primary-glow/20 text-primary-glow px-3 py-1 rounded-full">Ohne Streuverluste</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Shield, Users, Target, TrendingUp, Clock, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Keine Kaltakquise mehr",
      description: "Wir übernehmen die mühsame Erstansprache und bringen nur warme Leads zu Dir."
    },
    {
      icon: Users,
      title: "Gespräche mit echten Entscheidern",
      description: "Direkter Zugang zu Decision Makern, die tatsächlich kaufen."
    },
    {
      icon: Target,
      title: "Zielgruppengenau",
      description: "Maßgeschneiderte Ansprache für Deine spezifische Zielgruppe."
    },
    {
      icon: TrendingUp,
      title: "Skalierbare Ergebnisse",
      description: "Systematischer Aufbau Deiner Vertriebspipeline für nachhaltiges Wachstum."
    },
    {
      icon: Clock,
      title: "Zeit für's Wesentliche",
      description: "Du konzentrierst Dich auf Abschlüsse, wir kümmern uns um die Terminierung."
    },
    {
      icon: CheckCircle,
      title: "Bewährte Methoden",
      description: "Psychologisch fundierte Gesprächsführung mit nachweislichen Erfolgen."
    }
  ];

  return (
    <section id="vorteile" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Warum Unternehmen auf uns vertrauen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir haben in den letzten Jahren eine Sache perfektioniert: Systematisch neue Kunden für Startups und KMUs zu gewinnen. 
            Ohne Streuverluste, ohne Zeitverschwendung.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import { Settings, Search, Calendar } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Settings,
      title: "Kampagne entwickeln",
      description: "Gemeinsam definieren wir Deine Zielgruppe und entwickeln eine maßgeschneiderte Ansprache-Strategie."
    },
    {
      number: "2", 
      icon: Search,
      title: "Outreach & Qualifizierung",
      description: "Wir übernehmen die komplette Erstansprache und qualifizieren Interessenten nach Deinen Kriterien."
    },
    {
      number: "3",
      icon: Calendar,
      title: "Terminvereinbarung", 
      description: "Du erhältst qualifizierte Termine mit Entscheidern, die echtes Interesse an Deinem Angebot haben."
    }
  ];

  return (
    <section id="prozess" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Unser bewährter Prozess
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            In 3 Schritten zu mehr Terminen mit qualifizierten Interessenten
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-card border border-border rounded-2xl flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:border-primary/30">
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -z-10">
            <div className="w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
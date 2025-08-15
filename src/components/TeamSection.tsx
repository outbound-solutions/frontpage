import { TrendingUp, Users, Award } from "lucide-react";
import chrisImage from "@/assets/team-chris.jpg";
import ericImage from "@/assets/team-eric.jpg";
import oliverImage from "@/assets/team-oliver.jpg";
import patrickImage from "@/assets/team-patrick.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Chris Kuske",
      role: "Ex-Moss | Outbound-Profi",
      description: "Baut performante Sales-Systeme & Leadmaschinen für B2B",
      image: chrisImage
    },
    {
      name: "Eric",
      role: "Ex-Lightspeed & Moss | SDR/AE", 
      description: "Top-Performer im SaaS-Vertrieb mit Fokus auf B2B-Tech & Closing",
      image: ericImage
    },
    {
      name: "Oliver Haug",
      role: "Ex-Personalleiter | HR-Experte",
      description: "Führte 600+ Mitarbeiter und bringt HR-Know-how in die Vertriebs-Strategie",
      image: oliverImage
    },
    {
      name: "Patrick Hein", 
      role: "Ex Startup CTO",
      description: "Ehemaliger CTO und Data Engineer mit tiefem Tech-Verständnis",
      image: patrickImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ein bewährtes Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experten mit langjähriger Erfahrung in Sales, Tech und Personalführung
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Termine vermittelt</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary-glow rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Erfolgsquote</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-primary rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
              <div className="text-muted-foreground">Branchen Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
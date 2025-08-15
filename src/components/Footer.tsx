const Footer = () => {
  const services = [
    "Telefonakquise",
    "Lead-Qualifizierung", 
    "Terminvereinbarung",
    "Vertriebsberatung"
  ];

  const contact = [
    { label: "E-Mail", value: "hello@outbound-solutions.de", href: "mailto:hello@outbound-solutions.de" },
    { label: "Telefon", value: "015678 498703", href: "tel:+4915678498703" }
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Outbound Solutions
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Wir bringen dein Produkt an den richtigen Tisch. Systematische Kundengewinnung für Startups und KMUs.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Standort:</strong> München, Deutschland
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Leistungen</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <div className="text-sm text-muted-foreground">{item.label}:</div>
                  <a 
                    href={item.href}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Outbound Solutions. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
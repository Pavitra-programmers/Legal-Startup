import { ShieldCheck, Lock, Scale, BadgeCheck } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Built for BCI compliance",
    description: "Every feature has been designed against the Advocates Act 1961 and Bar Council of India rules. You never advertise. You never share fees. Your professional independence is protected by architecture, not just policy.",
  },
  {
    icon: Lock,
    title: "Privilege-protected from day one",
    description: "Attorney-client privilege attaches the moment you accept a session. Session recordings are encrypted and inaccessible to anyone at NyayaJustis without a court order. Your conversations with clients are yours.",
  },
  {
    icon: Scale,
    title: "Grounded in constitutional law",
    description: "NyayaJustis operationalises Article 22 of the Constitution. Every session is a citizen exercising a fundamental right. The platform's existence is backed by constitutional mandate — it cannot be legislated away.",
  },
  {
    icon: BadgeCheck,
    title: "Verified, rated, and trusted",
    description: "Every advocate on the platform is verified against Bar enrollment records. Mutual ratings after each session build a documented track record. Your reputation compounds with every session you take.",
  },
];

const MoatSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">Why Advocates Trust Us</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-4 sm:mb-6">
          A platform that protects you as much as your clients.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          NyayaJustis was built with a lawyer's concerns in mind from the very first design decision.
          Here is what that means in practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {commitments.map((item, i) => (
            <div key={i} className="group">
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoatSection;

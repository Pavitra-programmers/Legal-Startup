import { Network, Database, BookOpen, Star } from "lucide-react";

const moats = [
  {
    icon: Network,
    title: "Network effects",
    description: "More advocates → faster response times → more citizen trust → more advocates join. The marketplace compounds.",
  },
  {
    icon: Database,
    title: "Proprietary data",
    description: "Every recorded encounter, every case note, every LLM query trains India's most specialised legal AI.",
  },
  {
    icon: BookOpen,
    title: "Constitutional anchoring",
    description: "The product enforces Article 22 of the Constitution. It is legally impossible to ban. It's not a convenience — it's a right.",
  },
  {
    icon: Star,
    title: "Trust flywheel",
    description: "Mutual ratings create verified reputations. Trust is the hardest thing to build — and the hardest thing to copy.",
  },
];

const MoatSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Moat & Defensibility</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-16">
          Why this is hard to copy.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {moats.map((moat, i) => (
            <div key={i} className="group">
              <moat.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{moat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{moat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoatSection;

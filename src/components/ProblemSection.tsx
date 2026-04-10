import { AlertTriangle, Scale, Lock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Police brutality & extortion",
    description: "Citizens routinely face illegal demands, threats and coercion with no immediate recourse or witness.",
  },
  {
    icon: Scale,
    title: "4.5 crore pending cases",
    description: "India's courts are paralysed by backlog. Many cases stem from preventable disputes and rights violations.",
  },
  {
    icon: Lock,
    title: "Legal illiteracy",
    description: "Most Indians don't know they have a constitutional right under Article 22 to consult a lawyer during interrogation.",
  },
  {
    icon: DollarSign,
    title: "Cost barrier",
    description: "Hiring a lawyer is expensive, opaque, and slow. No transparent pay-as-you-go model exists for the common man.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-background relative">
      {/* Large watermark text like reference */}
      <div className="absolute top-12 left-6 md:left-12 text-8xl md:text-[12rem] font-heading font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
        The<br />Problem
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-6">
          Justice delayed — and often denied — before you even reach a courtroom.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          In India, the most dangerous moment for a citizen's rights is not inside a courtroom. It is on a roadside
          at night, or inside a police station with no witness. By the time a lawyer is involved, the damage has already been done.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group border border-border p-8 hover:border-primary/40 transition-colors bg-card"
            >
              <problem.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

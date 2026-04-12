import { AlertTriangle, PhoneOff, Lock, Scale } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Traffic stops without recourse",
    description: "Millions of roadside encounters happen every day in India. Citizens have no live legal guidance on what challans are valid, what they must sign, or when they can lawfully object.",
  },
  {
    icon: Scale,
    title: "Roadside extortion",
    description: "Without a witness or a legal voice, citizens routinely pay unofficial 'settlements' for violations that are either invalid or carry a fraction of that amount as an official fine.",
  },
  {
    icon: PhoneOff,
    title: "No real-time legal access",
    description: "Calling a lawyer during a police stop is nearly impossible — they don't answer, can't advise blind, and traditional retainers make casual consultation unaffordable.",
  },
  {
    icon: Lock,
    title: "Legal illiteracy at the encounter point",
    description: "Citizens don't know which sections apply, what constitutes a valid document check, or what their Article 22 constitutional rights are before a formal arrest is made.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-background relative">
      {/* Large watermark text like reference */}
      <div className="absolute top-8 sm:top-12 left-4 sm:left-6 md:left-12 text-6xl sm:text-8xl md:text-[12rem] font-heading font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
        The<br />Problem
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">The Problem</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-4 sm:mb-6">
          The most dangerous moment for a citizen's rights is not in a courtroom.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          In India, rights violations happen before any FIR is filed — on the roadside, at a traffic checkpoint,
          in the first ten minutes of a police interaction. By the time a lawyer is involved, the damage — coerced
          statements, undocumented bribery, illegal detention — is already done.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group border border-border p-6 sm:p-8 hover:border-primary/40 transition-colors bg-card"
            >
              <problem.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Article 22 quote */}
        <blockquote className="border-l-4 border-primary pl-6 sm:pl-8 bg-primary/5 py-4 pr-4 sm:pr-6">
          <p className="text-base sm:text-lg font-heading italic text-foreground/80 leading-relaxed mb-2">
            "No person who is arrested shall be detained in custody without being informed, as soon as may be,
            of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by,
            a legal practitioner of his choice."
          </p>
          <cite className="text-xs text-muted-foreground not-italic tracking-wide">
            — Article 22(1), Constitution of India.{" "}
            <span className="text-primary">NyayaJustis builds the infrastructure that makes this a lived reality, not a theoretical right.</span>
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default ProblemSection;

import { useEffect, useRef, useState } from "react";
import typewriterImage from "@/assets/le-typewriter.png";

const steps = [
  {
    num: "1",
    title: "One-tap SOS — live video with an advocate",
    description: "Press the Nyaya button. Within seconds, a verified advocate joins the video call. The session auto-records to tamper-proof cloud storage — creating legal-grade evidence instantly.",
  },
  {
    num: "2",
    title: "Pay for exactly what you use",
    description: "Per-minute billing — like a Rapido ride. No retainer. No surprise fees. Wallet-based payments with UPI. Accessible to any citizen with a smartphone.",
  },
  {
    num: "3",
    title: "Mutual rating system",
    description: "After every session, citizen rates advocate and advocate rates citizen. This creates India's first verified legal services marketplace with real accountability.",
  },
  {
    num: "4",
    title: "AI legal assistant — Nyaya LLM",
    description: "A proprietary LLM trained on Indian Penal Code, BNSS, Motor Vehicles Act, and landmark Supreme Court judgments. Helps advocates find loopholes and precedents in real time.",
  },
  {
    num: "5",
    title: "Case transparency dashboard",
    description: "Every recorded encounter is stored with a unique case ID. Citizens can track status. Aggregated data helps surface patterns of police misconduct.",
  },
];

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solution" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Typewriter image - slide from right to left, half visible */}
      <div className={`absolute right-0 top-0 bottom-0 w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-1/3 opacity-50' : 'translate-x-full opacity-0'}`}>
        <img
          src={typewriterImage}
          alt="Typewriter"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Decorative diagonal */}
      <div className="absolute top-0 left-1/4 w-px h-[120%] bg-primary/15 rotate-[-20deg] origin-top hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">The Solution</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-6">
          A lawyer in your pocket. A witness in every encounter.
        </h2>
        <p className="text-secondary-foreground/70 max-w-2xl mb-16 leading-relaxed">
          Nyaya360 is a three-sided platform: citizens, advocates, and the Indian justice system.
          Think of it as Rapido meets JustDial — but for your legal rights.
        </p>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 md:gap-10 py-8 border-t border-secondary-foreground/10 group">
              <span className="text-5xl md:text-7xl font-heading font-bold text-primary/30 leading-none shrink-0 group-hover:text-primary/60 transition-colors">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed max-w-xl text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

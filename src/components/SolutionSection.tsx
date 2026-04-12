import { useEffect, useRef, useState } from "react";
import typewriterImage from "@/assets/le-typewriter.png";

const steps = [
  {
    num: "1",
    title: "Press SOS — recording starts immediately",
    description: "The moment you press the NyayaJustis SOS button, the platform activates its recording engine — audio, video, GPS timestamp — before a lawyer is even connected. Your encounter is documented from second one.",
  },
  {
    num: "2",
    title: "Name what you can pay — a lawyer accepts",
    description: "You choose a session budget. The platform broadcasts your request to verified advocates available right now. The lawyer you are matched with is not advertising — they are choosing to help you at your terms. No retainers, no surprise fees.",
  },
  {
    num: "3",
    title: "A legally binding session begins",
    description: "When an advocate accepts, a valid electronic contract is formed under the IT Act, 2000. The platform confirms transparent terms to both parties before anyone pays anything.",
  },
  {
    num: "4",
    title: "Real-time guidance through the encounter",
    description: "Your advocate can see and hear everything. They tell you exactly what to say, what not to sign, which sections apply, and whether any demand being made of you is lawful. You are no longer alone.",
  },
  {
    num: "5",
    title: "A certified evidence package — yours to keep",
    description: "After the session, you receive a timestamped recording, session transcript, and a Section 65B certified certificate making the evidence admissible in court, before Human Rights Commissions, or in a formal police complaint.",
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
      {/* Typewriter image - slide from right to left, half visible - hide on mobile */}
      <div className={`hidden md:block absolute right-0 top-0 bottom-0 w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-1/3 opacity-50' : 'translate-x-full opacity-0'}`}>
        <img
          src={typewriterImage}
          alt="Typewriter"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Decorative diagonal */}
      <div className="absolute top-0 left-1/4 w-px h-[120%] bg-primary/15 rotate-[-20deg] origin-top hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">The Solution</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-4 sm:mb-6">
          A lawyer in your pocket. A witness in every encounter.
        </h2>
        <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          NyayaJustis connects citizens facing roadside encounters with verified advocates via live
          video — instantly, transparently, and at a price both parties agree to before the session begins.
          Every interaction is recorded. Every session is witnessed. Every piece of evidence is yours.
        </p>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 md:gap-10 py-6 sm:py-8 border-t border-secondary-foreground/10 group">
              <span className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary/30 leading-none shrink-0 group-hover:text-primary/60 transition-colors">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
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

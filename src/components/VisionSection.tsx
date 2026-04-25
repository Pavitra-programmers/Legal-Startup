const phases = [
  {
    tag: "P1",
    title: "Launch: Nyaya Shield + NyayPoints Wallet",
    description: "5 metro cities. 1,000 verified advocates onboarded. Women-first SOS with pre-loaded NyayPoints wallet — zero payment friction at the moment of need. Android-first. Hindi, Hindustani, Urdu, and English. Non-cognizable offences and MVA disputes only.",
  },
  {
    tag: "P2",
    title: "Scale: Nyaya LLM + 12 languages",
    description: "Launch the AI assistant with IPC, BNSS, and Motor Vehicles Act training. Expand to tier-2 cities. Launch Nyaya Pro for advocates and premium subscription for citizens.",
  },
  {
    tag: "P3",
    title: "Transform: Nyaya Mirror + Policy",
    description: "Partner with National Human Rights Commission and Bar Council of India. Launch public accountability dashboard. Pilot integration with e-Courts. Become the infrastructure layer of India's access-to-justice movement.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Vision</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-16">
          Phase 1 → Phase 3
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className="flex gap-8 md:gap-12 relative">
                <div className="shrink-0 w-8 md:w-12 h-8 md:h-12 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-xs md:text-sm font-bold text-primary-foreground">{phase.tag}</span>
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

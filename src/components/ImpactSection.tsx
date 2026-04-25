const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-8 sm:top-12 right-4 sm:right-6 md:right-12 text-6xl sm:text-8xl md:text-[10rem] font-heading font-bold text-secondary-foreground/[0.03] leading-none select-none pointer-events-none text-right">
        Impact
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">Social Impact</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-10 sm:mb-12">
          Not just a business — a civic rights movement.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Fixing the first ten minutes for every citizen</h3>
            <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed mb-4 sm:mb-6">
              India's rights violations happen before any FIR is filed — in the first ten minutes of a police
              interaction. This is the window where coerced settlements happen, where harassment goes
              undocumented, where the system fails most completely. Women face this risk in compounded measure —
              solo women drivers are disproportionately targeted with illegal demands and coercive pressure.
              When every encounter is recorded and every citizen has an advocate on call, that window changes permanently.
            </p>
            <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed">
              NyayaJustis doesn't just help individuals — it creates accountability. The public dashboard —
              Nyaya Mirror — maps encounter patterns across India, showing journalists, Human Rights
              Commissions, and state governments exactly where rights are being violated and by whom.
            </p>
          </div>

          <div className="flex items-center">
            <blockquote className="border-l-4 border-primary pl-6 sm:pl-8">
              <p className="text-lg sm:text-xl md:text-2xl font-heading italic leading-relaxed text-secondary-foreground/90 mb-4 sm:mb-6">
                "No person shall be denied the right to consult and to be defended by a legal practitioner of his choice."
              </p>
              <cite className="text-xs sm:text-sm text-secondary-foreground/50 not-italic">
                — Article 22, Constitution of India.
                <span className="block mt-1 text-primary/80">
                  NyayaJustis makes this a practical reality for every citizen in India — not theoretical, not aspirational, but immediate.
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-12 right-6 md:right-12 text-8xl md:text-[10rem] font-heading font-bold text-secondary-foreground/[0.03] leading-none select-none pointer-events-none text-right">
        Impact
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Social Impact</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-12">
          Not just a business — a reform movement.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">Solving India's pending case crisis</h3>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              Most of India's 4.5 crore pending cases begin with undocumented, rights-violating interactions.
              When every encounter is recorded and every citizen has immediate legal guidance, coerced confessions
              disappear, illegal detentions become impossible to sustain, and cases are resolved faster because the
              evidence chain is clean from day one.
            </p>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Nyaya360 doesn't just help individuals — it fixes the plumbing of the Indian justice system.
              The public dashboard — Nyaya Mirror — creates a living map of where rights are being violated
              across India, empowering journalists, Human Rights Commissions, and state governments to act on evidence.
            </p>
          </div>

          <div className="flex items-center">
            <blockquote className="border-l-4 border-primary pl-8">
              <p className="text-xl md:text-2xl font-heading italic leading-relaxed text-secondary-foreground/90 mb-6">
                "No person shall be denied the right to consult and to be defended by a legal practitioner of his choice."
              </p>
              <cite className="text-sm text-secondary-foreground/50 not-italic">
                — Article 22, Constitution of India.
                <span className="block mt-1 text-primary/80">
                  Nyaya360 makes this a practical reality for every citizen.
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

const forCitizens = [
  {
    title: "Pay only for what you use",
    tag: "For Citizens",
    description: "No retainers, no advance payments, no surprises. You set what you can pay for a session. Nothing is charged until a lawyer accepts and you confirm.",
  },
  {
    title: "Nyaya Premium — always ready",
    tag: "For Citizens",
    description: "Upgrade for priority matching, longer evidence storage, and downloadable certified evidence certificates included — so the documents you need are always at hand.",
  },
];

const forAdvocates = [
  {
    title: "Advocate Pro — your practice, supercharged",
    tag: "For Advocates",
    description: "A SaaS subscription for access to the matching engine, AI legal tools trained on Indian law, case analytics, and your professional profile. You pay for software, not for leads. Your professional fees are entirely your own.",
  },
  {
    title: "No commissions. No fee-sharing.",
    tag: "For Advocates",
    description: "NyayaJustis never takes a cut of your consultation earnings. Your fees are paid directly to you. The platform charges citizens separately for its technology services. Your professional independence is protected by design.",
  },
];

const RevenueSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">How It Works for You</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-4 sm:mb-6">
          Designed to be fair for everyone on the platform.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          Citizens get transparent, affordable legal access. Advocates get a new income stream
          with full professional independence. The incentives are aligned — not extracted.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" />
              For Citizens
            </p>
            <div className="space-y-0 border border-border">
              {forCitizens.map((item, i) => (
                <div key={i} className="p-6 sm:p-8 border-b last:border-b-0 border-border">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" />
              For Advocates
            </p>
            <div className="space-y-0 border border-border">
              {forAdvocates.map((item, i) => (
                <div key={i} className="p-6 sm:p-8 border-b last:border-b-0 border-border">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;

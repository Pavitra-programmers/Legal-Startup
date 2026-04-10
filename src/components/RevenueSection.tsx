const streams = [
  {
    title: "Transaction commission",
    tag: "Primary",
    description: "15–20% cut on every per-minute consultation. Scales directly with engagement.",
  },
  {
    title: "Nyaya Premium — citizen subscriptions",
    tag: "B2C",
    description: "Monthly plan for unlimited SOS activations, priority matching, and free basic LLM queries.",
  },
  {
    title: "Advocate Pro tools",
    tag: "B2B",
    description: "Advocates pay a subscription for Nyaya LLM access, AI case prep tools, profile boosting, and analytics.",
  },
  {
    title: "B2G / NGO data partnerships",
    tag: "B2G",
    description: "Aggregated, anonymised encounter data licensed to legal aid NGOs, journalism outlets, and state governments.",
  },
];

const RevenueSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Revenue Model</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-16">
          Multiple streams. Deeply aligned incentives.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {streams.map((stream, i) => (
            <div
              key={i}
              className="p-8 md:p-10 border-b md:odd:border-r border-border last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold bg-primary/10 px-2 py-1 inline-block mb-4">
                {stream.tag}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{stream.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{stream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;

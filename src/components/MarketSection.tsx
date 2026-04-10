const stats = [
  { value: "1.4B+", label: "Citizens without a lawyer on call" },
  { value: "4.5 Cr", label: "Pending cases in Indian courts" },
  { value: "15 Lakh+", label: "Enrolled advocates in India" },
  { value: "₹1.3L Cr", label: "Legal services market by 2027" },
];

const competitive = [
  { name: "LegalKart", sos: false, recording: false, billing: "Partial", llm: false },
  { name: "LawRato", sos: false, recording: false, billing: false, llm: false },
  { name: "Lawyered", sos: false, recording: false, billing: false, llm: false },
  { name: "TurnSignl (US)", sos: true, recording: true, billing: false, llm: false },
  { name: "Nyaya360", sos: true, recording: true, billing: true, llm: true, highlight: true },
];

const MarketSection = () => {
  return (
    <section id="market" className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Market Opportunity</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-16">
          One of the largest untapped legal markets on earth.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="border-t-2 border-primary pt-6">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Competitive Landscape</p>
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-10">
          Nothing in India does what we do.
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-secondary-foreground/20">
                <th className="text-left py-3 pr-4 font-medium text-secondary-foreground/60">Platform</th>
                <th className="text-center py-3 px-4 font-medium text-secondary-foreground/60">SOS</th>
                <th className="text-center py-3 px-4 font-medium text-secondary-foreground/60">Recording</th>
                <th className="text-center py-3 px-4 font-medium text-secondary-foreground/60">Per-min billing</th>
                <th className="text-center py-3 px-4 font-medium text-secondary-foreground/60">Legal LLM</th>
              </tr>
            </thead>
            <tbody>
              {competitive.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-secondary-foreground/10 ${row.highlight ? "bg-primary/10" : ""}`}
                >
                  <td className={`py-3 pr-4 font-medium ${row.highlight ? "text-primary font-bold" : ""}`}>
                    {row.name}
                  </td>
                  <td className="text-center py-3 px-4">{row.sos ? "✓" : "✗"}</td>
                  <td className="text-center py-3 px-4">{row.recording ? "✓" : "✗"}</td>
                  <td className="text-center py-3 px-4">
                    {row.billing === "Partial" ? "~" : row.billing ? "✓" : "✗"}
                  </td>
                  <td className="text-center py-3 px-4">{row.llm ? "✓" : "✗"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

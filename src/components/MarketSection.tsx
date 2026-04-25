const stats = [
  { value: "34 Cr+", label: "Registered vehicles in India — each one a potential roadside encounter" },
  { value: "~50%", label: "Of new two-wheeler buyers are women — the fastest-growing driver demographic in India" },
  { value: "15 Lakh+", label: "Enrolled advocates in India, currently without a real-time digital income channel" },
  { value: "0", label: "Platforms that provide live legal guidance during a police encounter in India. Until now." },
];

const MarketSection = () => {
  return (
    <section id="market" className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">The Gap We Fill</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-tight mb-4 sm:mb-6">
          Millions of women. Zero legal support on the roadside.
        </h2>
        <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          Every day across India, women face traffic stops, document checks, and roadside
          encounters with no access to legal guidance. They are the fastest-growing driver
          demographic — and the most underserved. The infrastructure for real-time legal
          protection simply does not exist. NyayaJustis is building it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="border-t-2 border-primary pt-4 sm:pt-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-secondary-foreground/60 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

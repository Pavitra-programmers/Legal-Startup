import heroImage from "@/assets/hero-justice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lady Justice with Indian Supreme Court"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Diagonal decorative line */}
      <div className="absolute top-0 right-1/3 w-px h-[140%] bg-primary/20 rotate-[-25deg] origin-top hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-32 pt-32">
        <div className="max-w-3xl">
          <div className="flex gap-3 mb-8 flex-wrap">
            {["LegalTech", "Civic Justice", "AI-Powered"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium uppercase tracking-widest text-primary border border-primary/40 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] text-secondary-foreground mb-8">
            Nyaya<span className="text-primary italic">360</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl leading-relaxed font-light mb-6">
            India's first real-time legal protection platform — connecting citizens with lawyers
            the moment they need them most: during a police encounter.
          </p>

          <p className="text-sm text-secondary-foreground/50 uppercase tracking-widest font-medium">
            Startup Pitch — 2025
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-secondary-foreground/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-primary/50 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;

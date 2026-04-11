import heroBg from "@/assets/hero-bg.png";
import buildingImage from "@/assets/building-removebg-preview.png";
import statueImage from "@/assets/statue-removebg-preview.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image - fixed */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Building image - rise animation */}
      <div className="absolute inset-0 animate-rise-building">
        <img
          src={buildingImage}
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Statue image - rise animation with delay */}
      <div className="absolute inset-0 animate-rise-statue">
        <img
          src={statueImage}
          alt="Statue of Justice"
          className="w-full h-full object-cover"
        />
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
            Nyaya<span className="text-primary italic">Justis</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl leading-relaxed font-light mb-6">
            India's first real-time legal protection platform — connecting citizens with lawyers
            the moment they need them most.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

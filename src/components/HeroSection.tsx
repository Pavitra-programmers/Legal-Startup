import heroBg from "@/assets/hero-bg.png";
import heroBuilding from "@/assets/hero-building2.png";
import heroStatue from "@/assets/hero-statue.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image - fixed */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/30" />
      </div>

      {/* Hero Building image - rise animation */}
      <div className="absolute inset-0 animate-rise-building">
        <img
          src={heroBuilding}
          alt="Building"
          className="w-full h-full object-cover object-bottom pt-4"
        />
        
      </div>

      {/* Hero Statue image - rise animation with delay */}
      <div className="absolute top-80 bottom-0 left-80 right-0 h-[85%] animate-rise-statue">
        <img
          src={heroStatue}
          alt="Statue of Justice"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

    
    

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-24 sm:py-32">
        <div className="max-w-3xl bg-secondary/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg">
          <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
            {["LegalTech", "Civic Justice", "AI-Powered"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-primary border border-primary/40 px-2 sm:px-3 py-1 bg-secondary/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] text-secondary-foreground mb-6 sm:mb-8">
            Nyaya<span className="text-primary italic">Justis</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/90 max-w-2xl leading-relaxed font-light mb-8">
            India's first real-time legal protection platform — connecting citizens with verified
            advocates the moment they need them most.
          </p>

          {/* Motto block */}
          <div className="border-l-4 border-primary pl-5 sm:pl-6 bg-secondary/60 py-4 sm:py-5 pr-4 sm:pr-6 max-w-2xl">
            <p className="text-sm sm:text-base font-heading italic text-secondary-foreground leading-relaxed mb-2">
              "The moment Nyaya360 connects you to an advocate, you are no longer alone, unnamed,
              or unwitnessed. Every word is recorded. Every second is timestamped. And a legal
              professional is guiding every word you say."
            </p>
            <cite className="text-[11px] sm:text-xs text-secondary-foreground/70 not-italic tracking-wider uppercase font-medium">
              — Core operating principle
            </cite>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

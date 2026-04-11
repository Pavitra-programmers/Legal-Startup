const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground section-padding relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-px h-[120%] bg-primary/10 rotate-[-25deg] origin-top hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 max-w-3xl mx-auto">
          Justice should not be a luxury.
        </h2>
        <p className="text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed mb-12">
          NyayaJustis is an early-stage startup building the infrastructure that turns India's constitutional promise into a daily lived reality — one tap at a time.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:stringcostdevs@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-heading text-lg font-bold">
            Nyaya<span className="text-primary">Justis</span>
          </p>
          <p className="text-xs text-secondary-foreground/40">
            © 2026 NyayaJustis. Early-stage startup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

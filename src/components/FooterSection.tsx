const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground section-padding relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-px h-[120%] bg-primary/10 rotate-[-25deg] origin-top hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 sm:mb-8 max-w-3xl mx-auto">
          No woman should face the law alone.
        </h2>
        <p className="text-sm sm:text-base text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4">
          NyayaJustis is building the infrastructure that turns India's constitutional promise into a daily lived reality — for every woman on every road, one tap at a time.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:stringcostdevs@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="font-heading text-base sm:text-lg font-bold">
            Nyaya<span className="text-primary">Justis</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="/terms"
              className="text-[10px] sm:text-xs text-secondary-foreground/50 hover:text-secondary-foreground/80 transition-colors uppercase tracking-widest"
            >
              Terms &amp; Conditions
            </a>
            <p className="text-[10px] sm:text-xs text-secondary-foreground/40 text-center">
              © 2026 NyayaJustis. Early-stage startup. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

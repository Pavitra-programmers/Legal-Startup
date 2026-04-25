import { Shield, Users, Brain, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Shield,
    label: "Core Product",
    name: "Nyaya Shield",
    description: "Real-time police encounter SOS — video call, auto-record, cloud evidence storage. Available 24/7.",
    color: "border-primary",
  },
  {
    icon: Users,
    label: "Marketplace",
    name: "Nyaya Connect",
    description: "Curated advocate discovery — filter by language, specialty, location, and rating. Book by the minute or by the case.",
    color: "border-accent",
  },
  {
    icon: Brain,
    label: "AI Layer",
    name: "Nyaya LLM",
    description: "India-specific legal intelligence. Finds case precedents, legal loopholes, and plain-language summaries of rights.",
    color: "border-primary",
  },
  {
    icon: BarChart3,
    label: "Civic Impact",
    name: "Nyaya Mirror",
    description: "Anonymised public dashboard of encounter trends, hotspots of legal violations — a tool for journalists, NGOs and policy makers.",
    color: "border-accent",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background relative">
      <div className="absolute top-8 sm:top-12 right-4 sm:right-6 md:right-12 text-6xl sm:text-8xl md:text-[10rem] font-heading font-bold text-foreground/[0.03] leading-none select-none pointer-events-none text-right">
        Products
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">Product Suite</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-12 sm:mb-16">
          Four products. One mission. Every woman protected.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={`border-l-4 ${product.color} bg-card p-6 sm:p-8 md:p-10 hover:shadow-lg transition-shadow`}
            >
              <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary mb-3 sm:mb-4" strokeWidth={1.5} />
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2">{product.label}</p>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{product.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

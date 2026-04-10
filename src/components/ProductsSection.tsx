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
    description: "Tinder-style advocate discovery — filter by language, specialty, location, rating. Book by the minute or by the case.",
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
      <div className="absolute top-12 right-6 md:right-12 text-8xl md:text-[10rem] font-heading font-bold text-foreground/[0.03] leading-none select-none pointer-events-none text-right">
        Products
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Product Suite</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-16">
          Three products. One mission.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={`border-l-4 ${product.color} bg-card p-8 md:p-10 hover:shadow-lg transition-shadow`}
            >
              <product.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{product.label}</p>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{product.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

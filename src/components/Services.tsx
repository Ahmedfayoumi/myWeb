import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, Database, Cog, Rocket, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "text-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable APIs, databases, and server-side solutions for your applications.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "text-purple-500"
    },
    {
      icon: Cog,
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development.",
      technologies: ["REST", "GraphQL", "Webhooks", "OAuth"],
      color: "text-orange-500"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with performance tuning.",
      technologies: ["Code Splitting", "Caching", "CDN", "Monitoring"],
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards.",
      technologies: ["Authentication", "Encryption", "GDPR", "SOC 2"],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services tailored to your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
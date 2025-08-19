import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary-glow/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Code size={120} className="text-primary-foreground animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <Zap size={80} className="text-primary-foreground animate-bounce" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Custom Software
            <span className="block bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital solutions. From web applications to mobile apps, 
            I deliver high-quality software that drives your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl" 
              variant="hero"
              onClick={scrollToContact}
              className="font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="xl" 
              variant="premium"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[100px] animate-subtle"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-[100px] animate-float"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <AnimatedSection animation="fadeIn" delay={200}>
              <p className="inline-block mb-4 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Computer Science Graduate
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={400}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-foreground">Hello, I'm </span>
                <span className="text-primary">Manikanta Reddy</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={600}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 text-balance">
                An ambitious computer science graduate passionate about technology and eager to contribute to innovative solutions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={800}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
                <Button asChild size="lg" className="px-8 h-12 hover:scale-105 transition-transform">
                  <a href="#resume">View Resume</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 h-12 hover:scale-105 transition-transform">
                  <a href="#projects">See Projects</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fadeInRight" delay={800} className="mt-8 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=800&crop=entropy" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

export default Hero;

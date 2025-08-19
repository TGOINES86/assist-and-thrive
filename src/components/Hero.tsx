import { Button } from "@/components/ui/button";
import heroImage from "@/assets/community-support.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community members supporting each other"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Each One
            <span className="block text-action">Keep One</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Building stronger communities through mutual support. When we help each other, 
            we all rise together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="keeper" 
              size="xl"
              className="min-w-[200px]"
            >
              Become a Keeper
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[180px] border-white text-white hover:bg-white hover:text-primary"
            >
              Get Support
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-action">$2.4M+</h3>
              <p className="text-white/80">Distributed in Aid</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-action">15,000+</h3>
              <p className="text-white/80">Lives Impacted</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-action">5,200+</h3>
              <p className="text-white/80">Active Keepers</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
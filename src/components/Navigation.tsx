import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/893ff7f9-6382-4ec2-bd5a-a12dc8a90fa9.png" 
              alt="Each One Keep One Logo"
              className="w-8 h-8"
            />
            <span className={cn(
              "font-bold text-lg transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Each One Keep One
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("get-support")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Get Support
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Donate
            </button>
            <Button 
              variant={isScrolled ? "keeper" : "outline"}
              size="sm"
              onClick={() => scrollToSection("donate")}
              className={!isScrolled ? "border-white text-white hover:bg-white hover:text-primary" : ""}
            >
              Become a Keeper
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-foreground hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("get-support")}
                className="block w-full text-left py-2 text-foreground hover:text-primary"
              >
                Get Support
              </button>
              <button
                onClick={() => scrollToSection("donate")}
                className="block w-full text-left py-2 text-foreground hover:text-primary"
              >
                Donate
              </button>
              <Button 
                variant="keeper"
                size="sm"
                onClick={() => scrollToSection("donate")}
                className="w-full"
              >
                Become a Keeper
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every person deserves dignity and support during difficult times."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We believe in the power of neighbors helping neighbors."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Your donations are handled with complete transparency and accountability."
  },
  {
    icon: Award,
    title: "Proven Impact",
    description: "Over 15,000 lives changed through community support."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Users className="w-4 h-4 mr-2" />
            Our Mission
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Building Stronger Communities
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Each One Keep One was founded on a simple but powerful principle: when community 
              members support each other, everyone rises together. We connect those who can give 
              with those who need support, creating a network of mutual aid that strengthens our 
              entire community.
            </p>
            <p>
              Our approach is personal, transparent, and community-focused. Every request is 
              carefully reviewed, and every donation is tracked to ensure maximum impact. 
              We're not just providing financial assistance – we're building lasting relationships 
              and creating pathways to self-sufficiency.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-primary rounded-xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Community Impact</h3>
            <p className="text-white/90">Real numbers from real people we've helped</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-action mb-2">$2.4M+</div>
              <div className="text-white/90">Total Aid Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-action mb-2">15,247</div>
              <div className="text-white/90">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-action mb-2">5,200+</div>
              <div className="text-white/90">Active Keepers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-action mb-2">94%</div>
              <div className="text-white/90">Goes Directly to Aid</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Each One Keep One Works
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process that puts community support where it's needed most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Request Support</h4>
              <p className="text-muted-foreground">
                Community members submit requests with documentation and their story. 
                All requests are reviewed by our volunteer team.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Community Gives</h4>
              <p className="text-muted-foreground">
                Keepers contribute through one-time donations or monthly support. 
                Every donation is tracked and receipted.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Direct Impact</h4>
              <p className="text-muted-foreground">
                Funds go directly to approved requests. Recipients share their gratitude 
                and progress with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
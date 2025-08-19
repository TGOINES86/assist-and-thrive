import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Shield, Award } from "lucide-react";
import handsUnityImage from "@/assets/hands-unity.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import familySupportImage from "@/assets/family-support.jpg";

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Building Stronger Communities
          </h2>
          
          {/* Mission Image */}
          <div className="mb-8">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img 
                src={handsUnityImage} 
                alt="Hands holding together in unity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-action/20" />
            </div>
          </div>
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
                  <h3 className="font-serif font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-primary rounded-xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Our Community Impact</h3>
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
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
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
              <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Request Support</h4>
              <p className="text-muted-foreground">
                Community members submit requests with documentation and their story. 
                All requests are reviewed by our volunteer team.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Community Gives</h4>
              <p className="text-muted-foreground">
                Keepers contribute through one-time donations or monthly support. 
                Every donation is tracked and receipted.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Direct Impact</h4>
              <p className="text-muted-foreground">
                Funds go directly to approved requests. Recipients share their gratitude 
                and progress with the community.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Stories of Hope
            </h3>
            <p className="text-muted-foreground mb-4">
              Every day, we witness the transformative power of community support. When Maria lost her job 
              during the pandemic, her neighbors stepped in to help with groceries and childcare while she 
              searched for new employment.
            </p>
            <p className="text-muted-foreground">
              Today, Maria is not only back on her feet but has become a Keeper herself, helping others 
              in their time of need. This is the beautiful cycle of giving that defines our community.
            </p>
          </div>
          <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
            <img 
              src={familySupportImage} 
              alt="A family receiving support and help"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Volunteers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Our Keepers
            </h3>
            <p className="text-muted-foreground mb-4">
              Our volunteers, who we call "Keepers," are the heart of our organization. They come from 
              all walks of life, united by a shared commitment to helping their neighbors.
            </p>
            <p className="text-muted-foreground">
              Whether it's providing emergency assistance, offering mentorship, or simply lending a 
              listening ear, our Keepers embody the spirit of "Each One Keep One."
            </p>
          </div>
          <div className="lg:order-1 relative h-64 lg:h-80 rounded-xl overflow-hidden">
            <img 
              src={volunteersImage} 
              alt="People volunteering at a community center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-action/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
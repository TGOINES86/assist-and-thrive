import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Heart, CreditCard, Shield, Receipt } from "lucide-react";

const donationAmounts = [
  { amount: 25, impact: "Provides a meal for a family of four" },
  { amount: 50, impact: "Covers utilities for a month" },
  { amount: 100, impact: "Helps with rent assistance" },
  { amount: 250, impact: "Supports job training program" },
];

export const DonationFlow = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [isRecurring, setIsRecurring] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const getAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  return (
    <section id="donate" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Heart className="w-4 h-4 mr-2" />
            Make a Difference
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become a Keeper Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your donation directly supports community members in need. Every contribution, 
            no matter the size, makes a meaningful impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Make Your Donation
                </CardTitle>
                <CardDescription>
                  Choose your donation amount and frequency
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Donation Amount</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {donationAmounts.map(({ amount }) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>

                {/* Frequency */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Frequency</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={!isRecurring ? "default" : "outline"}
                      onClick={() => setIsRecurring(false)}
                      className="h-12"
                    >
                      One-time
                    </Button>
                    <Button
                      variant={isRecurring ? "default" : "outline"}
                      onClick={() => setIsRecurring(true)}
                      className="h-12"
                    >
                      Monthly
                    </Button>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Your Information</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={donorInfo.firstName}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={donorInfo.lastName}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <Button 
                  variant="keeper" 
                  size="lg" 
                  className="w-full"
                  disabled={!getAmount() || !donorInfo.email}
                >
                  Donate ${getAmount() || 0} {isRecurring ? "Monthly" : ""}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  Secure donation powered by Stripe
                </div>
              </CardContent>
            </Card>

            {/* Impact & Trust Indicators */}
            <div className="space-y-6">
              {/* Impact Preview */}
              {getAmount() && (
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {donationAmounts.find(d => d.amount === getAmount()) ? (
                      <p className="text-foreground">
                        {donationAmounts.find(d => d.amount === getAmount())?.impact}
                      </p>
                    ) : (
                      <p className="text-foreground">
                        Your ${getAmount()} donation will directly support community members in need.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Trust Indicators */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-success" />
                    Tax Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Tax-deductible donation receipt sent immediately</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Year-end statement provided for tax filing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">501(c)(3) nonprofit organization</p>
                  </div>
                </CardContent>
              </Card>

              {/* Organization Stats */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Our Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">94%</div>
                      <div className="text-sm text-muted-foreground">Goes directly to aid</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
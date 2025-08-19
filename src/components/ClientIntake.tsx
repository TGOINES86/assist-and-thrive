import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Home, 
  Briefcase, 
  GraduationCap, 
  HelpCircle,
  Upload,
  Check,
  ChevronRight,
  FileText
} from "lucide-react";

const categories = [
  { id: "health", label: "Health", icon: Heart, description: "Medical bills, prescriptions, therapy" },
  { id: "housing", label: "Housing", icon: Home, description: "Rent, utilities, housing assistance" },
  { id: "employment", label: "Employment", icon: Briefcase, description: "Job training, work supplies, transportation" },
  { id: "education", label: "Education", icon: GraduationCap, description: "School supplies, tuition, childcare" },
  { id: "other", label: "Other", icon: HelpCircle, description: "Emergency situations, unexpected needs" },
];

const requiredDocuments = [
  "Proof of citizenship or legal residency",
  "Recent utility bill or rent statement", 
  "Pay stub or proof of income",
];

export const ClientIntake = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    story: "",
    requestAmount: "",
  });
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const progress = (step / 4) * 100;

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setStep(2);
  };

  const handleDocUpload = (docType: string) => {
    // Simulate document upload
    setUploadedDocs(prev => [...prev, docType]);
  };

  const canProceedFromStep = (currentStep: number) => {
    switch (currentStep) {
      case 1: return selectedCategory !== "";
      case 2: return formData.firstName && formData.lastName && formData.email;
      case 3: return formData.story.length >= 50 && formData.requestAmount;
      case 4: return uploadedDocs.length === requiredDocuments.length;
      default: return false;
    }
  };

  return (
    <section id="get-support" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <HelpCircle className="w-4 h-4 mr-2" />
            Get Support
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request Community Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our community is here to help. Tell us about your situation and we'll connect 
            you with the support you need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Step {step} of 4</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>
                {step === 1 && "Select Support Category"}
                {step === 2 && "Your Information"}
                {step === 3 && "Tell Your Story"}
                {step === 4 && "Required Documents"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Choose the category that best describes your need"}
                {step === 2 && "Provide your contact information"}
                {step === 3 && "Share your story and request details"}
                {step === 4 && "Upload required verification documents"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Category Selection */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <Card 
                        key={category.id}
                        className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                          selectedCategory === category.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleCategorySelect(category.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-2">{category.label}</h3>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Story and Request */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="story">Your Story *</Label>
                    <Textarea
                      id="story"
                      value={formData.story}
                      onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                      placeholder="Please tell us about your situation and how we can help (minimum 50 words)"
                      rows={6}
                      className="resize-none"
                    />
                    <div className="text-sm text-muted-foreground">
                      {formData.story.length}/50 minimum characters
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requestAmount">Requested Amount *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="requestAmount"
                        type="number"
                        value={formData.requestAmount}
                        onChange={(e) => setFormData(prev => ({ ...prev, requestAmount: e.target.value }))}
                        placeholder="Enter amount needed"
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Document Upload */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Required Documents</h4>
                    <p className="text-sm text-muted-foreground">
                      Please upload the following documents to verify your request:
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {requiredDocuments.map((docType, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm font-medium">{docType}</span>
                          </div>
                          {uploadedDocs.includes(docType) ? (
                            <Badge variant="outline" className="text-success border-success">
                              <Check className="w-3 h-3 mr-1" />
                              Uploaded
                            </Badge>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDocUpload(docType)}
                            >
                              <Upload className="w-4 h-4 mr-2" />
                              Upload
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 mt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                >
                  Previous
                </Button>
                
                {step < 4 ? (
                  <Button
                    variant="default"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceedFromStep(step)}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    disabled={!canProceedFromStep(step)}
                  >
                    Submit Request
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
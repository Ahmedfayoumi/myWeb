import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your request. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@yourname.dev" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Available Worldwide" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your software project to life? Let's discuss your requirements and create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-accent/30 rounded-lg border border-accent">
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to project inquiries within 24 hours. For urgent requests, 
                please mention it in your message.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-gradient-card border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Project Request Form</CardTitle>
              <CardDescription>
                Fill out the details below and I'll prepare a customized proposal for your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required 
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                        <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                        <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                        <SelectItem value="50k+">$50k+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">1-3 months</SelectItem>
                      <SelectItem value="6-months">3-6 months</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea 
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                    rows={6}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Send Project Request"}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
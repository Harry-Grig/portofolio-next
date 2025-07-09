"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hello@harrydev.com",
      link: "mailto:hello@harrydev.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Remote Worldwide",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      info: "Within 24 hours",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse animate-float"></div>
        <div
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-accent/15 to-secondary/15 blur-3xl animate-pulse animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-3xl animate-pulse animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        ref={ref}
        className="container mx-auto px-4 py-12 relative z-10 max-w-7xl"
      >
        {/* Back Button */}
        <div
          className={`mb-12 transition-all duration-1200 ${
            isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
          }`}
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-105 font-poppins"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light font-poppins leading-relaxed transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Ready to turn your vision into reality? Share your project details
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transition-all duration-1200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text font-poppins">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground font-poppins">
                  I'm here to help bring your ideas to life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-500 hover:scale-105 ${
                      item.link ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      item.link && window.open(item.link, "_blank")
                    }
                  >
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-poppins">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4 font-poppins">
                    Why Choose Me?
                  </h3>
                  <ul className="space-y-2 text-muted-foreground font-poppins">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Fast turnaround times
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Modern tech stack
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Responsive communication
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Quality guaranteed
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-1200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text font-poppins">
                  Project Details
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground font-poppins">
                  Tell me about your project and requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce-in" />
                    <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground font-poppins">
                      Thanks for reaching out! I'll get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-poppins"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-foreground font-poppins"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-foreground font-poppins"
                      >
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="projectType"
                          className="text-foreground font-poppins"
                        >
                          Project Type
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            handleSelectChange("projectType", value)
                          }
                        >
                          <SelectTrigger className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-app">
                              Web Application
                            </SelectItem>
                            <SelectItem value="landing-page">
                              Landing Page
                            </SelectItem>
                            <SelectItem value="e-commerce">
                              E-commerce
                            </SelectItem>
                            <SelectItem value="saas">SaaS Platform</SelectItem>
                            <SelectItem value="mobile-app">
                              Mobile App
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="budget"
                          className="text-foreground font-poppins"
                        >
                          Budget Range
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            handleSelectChange("budget", value)
                          }
                        >
                          <SelectTrigger className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1k-5k">
                              $1,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k+">$25,000+</SelectItem>
                            <SelectItem value="discuss">
                              Let's discuss
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="timeline"
                        className="text-foreground font-poppins"
                      >
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleSelectChange("timeline", value)
                        }
                      >
                        <SelectTrigger className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                          <SelectItem value="1month">1 month</SelectItem>
                          <SelectItem value="2-3months">2-3 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-poppins"
                      >
                        Project Description *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-black font-bold hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden group font-poppins text-lg py-6"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

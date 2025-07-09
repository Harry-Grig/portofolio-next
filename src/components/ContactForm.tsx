"use client";
import React, { useEffect, useState } from "react";
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
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

// Define the schema for form validation using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

// Define the type for form data based on the schema
type FormData = z.infer<typeof formSchema>;

// ContactFormContent component - handles the actual form
const ContactFormContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null); // State for submission errors

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), // Use Zod for validation
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  useEffect(() => {
    emailjs.init("6el5xF13KpCWEFRVY");
  }, []);

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null); // Clear any previous errors

    try {
      // Send email using EmailJS
      await emailjs.send("service_5zjc38o", "template_qul8c8t", {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        project_type: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message,
      });

      console.log("Email sent successfully!");
      setIsSubmitted(true);
      reset(); // Reset form fields on successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError("Failed to send message. Please try again later.");
      setIsSubmitted(false); // Ensure submitted state is false on error
    } finally {
      setIsSubmitting(false);
      // Reset submission status after 3 seconds, even on error
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitError(null);
      }, 3000);
    }
  };

  return (
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
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-poppins">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  autoComplete="off" // Disable autocomplete
                  placeholder="John Doe"
                  {...register("name")} // Register input with react-hook-form
                  className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-poppins">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="off" // Disable autocomplete
                  placeholder="john@example.com"
                  {...register("email")} // Register input with react-hook-form
                  className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground font-poppins">
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                autoComplete="off" // Disable autocomplete
                placeholder="Your Company Name"
                {...register("company")} // Register input with react-hook-form
                className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins"
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
                <Controller
                  name="projectType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="landing-page">
                          Landing Page
                        </SelectItem>
                        <SelectItem value="e-commerce">E-commerce</SelectItem>
                        <SelectItem value="saas">SaaS Platform</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="budget"
                  className="text-foreground font-poppins"
                >
                  Budget Range
                </Label>
                <Controller
                  name="budget"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="timeline"
                className="text-foreground font-poppins"
              >
                Project Timeline
              </Label>
              <Controller
                name="timeline"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
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
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-poppins">
                Project Description *
              </Label>
              <Textarea
                id="message"
                autoComplete="off" // Disable autocomplete
                rows={6}
                placeholder="Tell me about your project, goals, and any specific requirements..."
                {...register("message")} // Register textarea with react-hook-form
                className="bg-muted/50 border-border focus:border-primary transition-all duration-500 font-poppins resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {submitError && (
              <div className="text-center py-4 text-red-500">
                <XCircle className="w-8 h-8 mx-auto mb-2" />
                <p>{submitError}</p>
              </div>
            )}

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
  );
};

export default ContactFormContent;

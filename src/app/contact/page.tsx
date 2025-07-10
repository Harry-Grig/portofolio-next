"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";
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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ContactFormContent from "@/components/ContactForm";

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "xarispap2017@gmail.com",
      link: "null",
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
              className="cursor-pointer text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-105 font-poppins"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="cursor-default text-center mb-16">
          <h1
            className={`text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p
            className={`cursor-default text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light font-poppins leading-relaxed transition-all duration-1200 ${
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
            <Card className="cursor-default bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:glow-cyan">
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
                      item.link ? "cursor-default" : ""
                    }`}
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

          {/* Contact Form (now a separate component) */}
          <div
            className={`lg:col-span-2 transition-all duration-1200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <ContactFormContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

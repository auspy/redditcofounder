"use client";

import { Mail, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactOptions({ className = "" }) {
  const handleEmailClick = () => {
    // Scroll to email form
    const emailForm = document.querySelector('#contact-form');
    if (emailForm) {
      emailForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/kshetezvinayak", "_blank");
  };

  const handleCalClick = () => {
    window.open("https://cal.com/kshetez", "_blank");
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Send Email",
      description: "Send a detailed message and get a response within 12 hours",
      action: handleEmailClick,
      buttonText: "Write Message",
      buttonVariant: "outline"
    },
    {
      icon: MessageCircle,
      title: "Twitter DM",
      description: "Quick questions or just say hi on Twitter",
      action: handleTwitterClick,
      buttonText: "Message on Twitter",
      buttonVariant: "outline"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a 15-minute intro call to discuss your needs",
      action: handleCalClick,
      buttonText: "Schedule Call",
      buttonVariant: "default"
    }
  ];

  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {contactMethods.map((method, index) => {
        const IconComponent = method.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {method.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {method.description}
            </p>

            <Button
              onClick={method.action}
              variant={method.buttonVariant}
              className="w-full"
            >
              {method.buttonText}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
import ContactPage from "@/screens/contact/ContactPage";

export default function Page() {
  // Configure the contact page for Reddit CoFounder
  const config = {
    apiEndpoint: "/api/contact",
    content: {
      title: "Get In Touch",
      description:
        "Ready to grow your startup with Reddit? Let's discuss how our done-for-you Reddit growth system can drive guaranteed traffic to your business.",
      emailLabel: "Email address",
      emailPlaceholder: "founder@yourstartup.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your startup and how we can help you grow on Reddit...",
      marketingConsentLabel:
        "Send me occasional updates about Reddit growth strategies and special offers",
      submitText: "Send Message",
      sendingText: "Sending...",
      successMessage:
        "Thanks for reaching out! We'll get back to you within 12 hours to discuss your Reddit growth strategy.",
      errorMessage: "Something went wrong. Please try again or reach out on Twitter.",
    },
    form: {
      messageRows: 4,
      defaultMarketingConsent: true,
      showMarketingConsent: true,
    },
    logging: true,
  };

  return <ContactPage config={config} />;
}

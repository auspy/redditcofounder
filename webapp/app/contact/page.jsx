import ContactPage from "@/screens/contact/ContactPage";

export default function Page() {
  // Configure the contact page for SupaSidebar
  const config = {
    apiEndpoint: "/api/contact",
    content: {
      title: "Contact Us",
      description:
        "Have a question or feedback? We'd love to hear from you. We typically respond within 12 hours.",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message here...",
      marketingConsentLabel:
        "Send me occasional emails about new features and special offers",
      submitText: "Send Message",
      sendingText: "Sending...",
      successMessage:
        "Your message has been sent successfully. We'll get back to you soon.",
      errorMessage: "Something went wrong",
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

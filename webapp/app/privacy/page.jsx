const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">
        <strong>Effective Date:</strong> August 3, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to SupaSidebar! Your privacy is important to us, and this
            Privacy Policy explains how we collect, use, and protect your
            information when you use our macOS application and website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            SupaSidebar is designed with privacy in mind. We collect minimal
            information to provide and improve our services:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Email Address:</strong> When you purchase a license or
              contact support, we collect your email address for license
              management, authentication, and communication purposes.
            </li>
            <li>
              <strong>License Information:</strong> We store license keys,
              activation status, and device associations to manage your
              SupaSidebar license and prevent unauthorized use.
            </li>
            <li>
              <strong>Website Cookies:</strong> Our website uses cookies to
              maintain your session and remember preferences for the licensing
              and download system.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>License Management:</strong> To validate licenses, manage
              device activations, and ensure compliance with licensing terms.
            </li>
            <li>
              <strong>Product Improvement:</strong> To analyze usage patterns,
              understand user behavior, and improve SupaSidebar's features and
              performance.
            </li>
            <li>
              <strong>Customer Support:</strong> To provide technical support
              and respond to your inquiries about SupaSidebar.
            </li>
            <li>
              <strong>Optional Communications:</strong> To send you important
              updates about SupaSidebar, new features, or significant changes to
              our service (you can opt out at any time).
            </li>
            <li>
              <strong>Authentication:</strong> To verify your identity for
              license downloads and management through Firebase Auth.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Legal Basis for Processing
          </h2>
          <p className="text-gray-700 mb-4">
            We process your personal data based on the following legal grounds:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Contractual Necessity:</strong> To provide our services,
              manage your account, and fulfill our obligations under our terms
              of service.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> To improve our products,
              analyze usage patterns, and enhance user experience.
            </li>
            <li>
              <strong>Consent:</strong> Where required by law, such as for
              certain marketing communications.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Data Sharing and Third Parties
          </h2>
          <p className="text-gray-700 mb-4">
            We use only essential third-party services to provide SupaSidebar:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>PostHog:</strong> For privacy-focused analytics and user
              behavior analysis. Data is anonymized and used solely for
              improving SupaSidebar's features and performance.
            </li>
            <li>
              <strong>Firebase Auth:</strong> For secure authentication and
              license management. Google processes authentication data according
              to their privacy policy and industry security standards.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            <strong>
              We do not sell, rent, or share your personal information with
              third parties for advertising or marketing purposes. We do not use
              tracking or advertising networks.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Data Storage and Retention
          </h2>
          <p className="text-gray-700 mb-4">
            SupaSidebar prioritizes local storage and minimal cloud data
            retention:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Local App Data:</strong> All your SupaSidebar data (saved
              apps, websites, folders, preferences, and shortcuts) is stored
              locally on your Mac using Core Data with iCloud sync. We do not
              have access to this personal data.
            </li>
            <li>
              <strong>License Information:</strong> License keys and activation
              status are stored securely for as long as your license is active,
              plus reasonable time for support purposes.
            </li>
            <li>
              <strong>Analytics Data:</strong> Anonymized usage data is retained
              by PostHog for up to 2 years for analysis and product improvement
              purposes.
            </li>
            <li>
              <strong>Email Communications:</strong> Email addresses are
              retained for license management and optional communications until
              you request deletion or opt out.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Access:</strong> Request access to your personal data and
              information about how it's processed.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate
              personal data.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data,
              subject to legal obligations.
            </li>
            <li>
              <strong>Portability:</strong> Request a copy of your data in a
              structured, machine-readable format.
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your personal
              data for legitimate interests.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security
            measures to protect your personal data against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            and updating the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-gray-700">
            SupaSidebar is developed and maintained by an independent developer.
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at{" "}
            <a
              href="mailto:admin@supasidebar.com"
              className="text-blue-600 hover:text-blue-800"
            >
              admin@supasidebar.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

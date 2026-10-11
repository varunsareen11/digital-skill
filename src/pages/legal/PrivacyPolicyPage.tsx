import LegalPage from './LegalPage';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="How we collect, use and protect the information you share with us."
      description="How Digital Skills Academy collects, uses and protects the personal information you share through this website."
      path="/privacy-policy"
    >
      <p>
        Digital Skills Academy ("we", "us", "our") respects your privacy. This policy explains what information we
        collect through this website and how we use it.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect only the information you choose to provide through our application and enquiry forms, or when you
        contact us by phone, email or WhatsApp. This may include:
      </p>
      <ul>
        <li>Your full name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>The course you are interested in</li>
        <li>Your city or location (optional)</li>
        <li>Any message or query you send us</li>
        <li>Your consent to be contacted</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your application, enquiry or questions.</li>
        <li>To contact you regarding courses, enrollment and related information, where you have given consent.</li>
        <li>To provide and administer the courses you enroll in.</li>
        <li>To improve our courses, website and communication.</li>
        <li>To meet applicable legal obligations.</li>
      </ul>
      <h2>Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share it only with service providers that help us operate this
        website, process form submissions or communicate with you, and only to the extent needed for those purposes, or
        where required by law.
      </p>
      <h2>Third-Party Services</h2>
      <p>
        This website loads fonts from Google Fonts and links to WhatsApp for messaging. When you use these services, their
        own privacy policies apply. Form submissions may be processed by a third-party form service on our behalf.
      </p>
      <h2>Data Retention and Security</h2>
      <p>
        We keep your information only as long as necessary for the purposes described above or as required by law, and we
        take reasonable measures to protect it against unauthorised access, loss or misuse.
      </p>
      <h2>Your Choices</h2>
      <p>
        You may ask us to access, correct or delete your personal information, or withdraw your consent to be contacted,
        at any time by contacting us using the details below.
      </p>
      <h2>Changes to This Policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
    </LegalPage>
  );
}

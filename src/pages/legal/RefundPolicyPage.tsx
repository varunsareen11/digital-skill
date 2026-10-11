import LegalPage from './LegalPage';

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund/Cancellation Policy"
      lead="How refund and cancellation requests are handled for our online courses."
      description="Refund and cancellation information for Digital Skills Academy online courses."
      path="/refund-policy"
    >
      <p>
        We want you to make an informed decision before enrolling. This page explains how refund and cancellation requests
        are handled.
      </p>
      <h2>Before You Enroll</h2>
      <p>
        Submitting an application on this website is free and does not commit you to enrollment. The applicable fees and
        refund/cancellation terms for your chosen course are shared with you during the enrollment process, before you
        make any payment.
      </p>
      <h2>Requesting a Cancellation or Refund</h2>
      <p>To request a cancellation or refund, please contact us by phone or email with:</p>
      <ul>
        <li>Your full name and registered mobile number or email address</li>
        <li>The course you enrolled in</li>
        <li>Your payment details (for example, the payment reference)</li>
        <li>The reason for your request</li>
      </ul>
      <p>
        Each request is reviewed in line with the refund and cancellation terms that applied to your enrollment, and we
        will respond to you with the outcome.
      </p>
      <h2>Changes by the Academy</h2>
      <p>
        If the academy reschedules or cancels a course you have enrolled in, we will contact you to explain the available
        options.
      </p>
    </LegalPage>
  );
}

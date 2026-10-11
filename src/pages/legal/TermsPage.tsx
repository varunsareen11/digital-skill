import LegalPage from './LegalPage';

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lead="Please read these terms carefully before using this website or enrolling in a course."
      description="Terms and conditions for using the Digital Skills Academy website and enrolling in its online courses."
      path="/terms-and-conditions"
    >
      <p>
        By using this website or applying for a course with Digital Skills Academy, you agree to the following terms.
      </p>
      <h2>Course Information</h2>
      <p>
        We aim to keep course information on this website accurate and up to date. Course content, schedules and structure
        may be updated from time to time to improve the learning experience. Courses listed as "Coming Soon" are not open
        for enrollment.
      </p>
      <h2>Applications and Enrollment</h2>
      <p>
        Submitting an application form does not confirm enrollment. Enrollment is confirmed only after our team contacts
        you and the applicable enrollment details, fees and terms for your chosen course have been shared with you and
        accepted.
      </p>
      <h2>Fees and Payments</h2>
      <p>
        Course fees and payment details are communicated to you during the enrollment process, before any payment is made.
      </p>
      <h2>Online Classes</h2>
      <p>
        All courses are delivered through 100% online classes. Learners are responsible for arranging a suitable device
        and internet connection. Some courses use third-party tools (for example design, AI or video editing tools), which
        are subject to their own terms and may require separate accounts.
      </p>
      <h2>Learner Conduct</h2>
      <p>
        Learners are expected to participate respectfully, complete their own assignments and projects honestly, and
        follow the guidelines shared by trainers.
      </p>
      <h2>Course Materials</h2>
      <p>
        Course materials provided by the academy are for the personal learning use of enrolled learners and may not be
        copied, shared or distributed without permission.
      </p>
      <h2>Certificates</h2>
      <p>
        Learners who successfully complete their enrolled course and fulfill the applicable course requirements will
        receive a Course Completion Certificate. The certificate recognizes successful completion of the training program.
        It does not by itself represent a government license, academic degree, professional qualification or guarantee of
        employment.
      </p>
      <h2>Internships and Employment</h2>
      <p>
        Internship opportunities are available for eligible learners, subject to the applicable requirements and
        availability. Course completion does not automatically guarantee an internship. Employment is not guaranteed
        unless specifically stated in writing for a particular program.
      </p>
      <h2>Changes to These Terms</h2>
      <p>We may update these terms from time to time. The latest version will always be available on this page.</p>
    </LegalPage>
  );
}

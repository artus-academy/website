import { B, H3, Li, P, Section, Ul } from "@/components/Para";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="container py-12 md:py-16 mx-auto px-5">
      <h2 className="text-center max-w-2xl mx-auto mb-10 text-3xl md:text-4xl font-semibold tracking-tight">
        Terms and Conditions
      </h2>
      <P>
        <B>Effective date: 24-09-2025</B>
      </P>
      <P>
        Welcome to ArtUs Academy. These Terms and Conditions outline the rules
        and regulations for the use of our services, courses, and website. By
        accessing or using our website and enrolling in our courses, you agree
        to comply with and be bound by these terms.
      </P>

      <Section>
        <H3>1. Enrollment and Course Access</H3>
        <Ul>
          <Li>
            Eligibility: Enrollment in our courses is open to individuals who
            meet the course prerequisites and are legally able to enter into a
            binding agreement.
          </Li>
          <Li>
            Registration: To access our courses, you must complete the
            registration process, provide accurate information, and agree to
            these Terms and Conditions.
          </Li>
          <Li>
            Course Access: Upon successful enrollment, you will receive access
            to course materials, live sessions, and other resources for the
            duration of the course.
          </Li>
          <Li>
            Access to Online Resources: All online course materials, including
            recorded sessions and downloadable content, are accessible for the
            duration of the course.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>2. Payment and Refunds</H3>
        <Ul>
          <Li>
            Payment Terms: All course fees must be paid in full prior to the
            start of the course unless otherwise agreed upon. Payment can be
            made via the methods specified on our website.
          </Li>
          <Li>
            Refund Policy: Refunds may be issued in accordance with our{" "}
            <Link
              href="/refund-policy"
              className="hover:text-primary underline"
            >
              refund policy
            </Link>
            , which is detailed on our website. No refunds will be provided
            after a specified period following the start of the course.
          </Li>
          <Li>
            Late Payments: Failure to make payments on time may result in
            suspension or termination of access to the course.
          </Li>
          <Li>
            Installment Payments: If you opt for an installment payment plan,
            the first installment must be paid before course access is granted.
            Subsequent installments must be paid by the agreed-upon dates.
            Failure to do so may result in loss of access to the course.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>3. Course Content and Intellectual Property</H3>
        <Ul>
          <Li>
            Course Content: All course materials, including videos, texts,
            quizzes, and other content, are the intellectual property of ArtUs
            Academy or our content providers. You are granted a limited,
            non-exclusive, non-transferable license to access and use the course
            content for personal, educational purposes only.
          </Li>
          <Li>
            Restrictions: You may not reproduce, distribute, modify, create
            derivative works of, publicly display, or exploit the course content
            in any way without our prior written consent.
          </Li>
          <Li>
            Trademarks: All trademarks, service marks, and logos used in our
            courses and on our website are the property of ArtUs Academy or
            their respective owners.
          </Li>
          <Li>
            Course Updates: ArtUs Academy reserves the right to update or modify
            course content to ensure that it remains current and relevant.
            Students will have access to these updates at no additional cost.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>4. User Conduct</H3>
        <Ul>
          <Li>
            Prohibited Activities: You agree not to engage in any activities
            that may disrupt or interfere with our courses or website. This
            includes, but is not limited to, uploading viruses, spamming,
            hacking, or attempting to gain unauthorized access to our systems.
          </Li>
          <Li>
            Respectful Behavior: We expect all students to engage in respectful
            and professional behavior during live sessions, forums, and
            interactions with instructors and peers. Any form of harassment,
            discrimination, or inappropriate conduct may result in removal from
            the course without a refund.
          </Li>
          <Li>
            Compliance with Laws: You agree to comply with all applicable laws
            and regulations while using our services.
          </Li>
          <Li>
            Academic Integrity: All students are expected to maintain academic
            integrity. Plagiarism, cheating, or any form of academic dishonesty
            will result in immediate termination from the course without a
            refund.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>5. Termination and Suspension</H3>
        <Ul>
          <Li>
            Termination by ArtUs Academy: We reserve the right to terminate or
            suspend your access to our courses at any time for violations of
            these Terms and Conditions or other reasons, including non-payment
            or misconduct.
          </Li>
          <Li>
            Termination by User: You may terminate your enrollment at any time
            by notifying us in writing. Refunds will be processed in accordance
            with our refund policy.
          </Li>
          <Li>
            Access After Termination: Upon termination of your enrollment, your
            access to the course materials will be revoked. No further access to
            online content, forums, or resources will be provided.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>6. Disclaimers and Limitation of Liability</H3>
        <Ul>
          <Li>
            No Guarantees: While we strive to provide high-quality educational
            content, we do not guarantee specific outcomes, such as job
            placement or certification results, from participating in our
            courses.
          </Li>
          <Li>
            Limitation of Liability: ArtUs Academy is not liable for any direct,
            indirect, incidental, or consequential damages arising from the use
            of our courses, website, or services. Our total liability for any
            claims related to our services shall not exceed the amount paid by
            you for the course.
          </Li>
          <Li>
            Third-Party Tools and Platforms: Our courses may involve the use of
            third-party tools and platforms. ArtUs Academy is not responsible
            for any issues arising from the use of these tools, including data
            loss or service disruptions.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>7. Privacy</H3>
        <Ul>
          <Li>
            Privacy Policy: Your personal information is collected, used, and
            protected in accordance with our Privacy Policy, which is available
            on our website. By using our services, you consent to the collection
            and use of your information as described in our Privacy Policy.
          </Li>
          <Li>
            Data Protection: We are committed to ensuring that your information
            is secure. In order to prevent unauthorized access or disclosure, we
            have put in place suitable physical, electronic, and managerial
            procedures to safeguard and secure the information we collect
            online.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>8. Changes to These Terms</H3>
        <Ul>
          <Li>
            Amendments: ArtUs Academy reserves the right to modify these Terms
            and Conditions at any time. Any changes will be posted on this page
            with an updated effective date. Continued use of our services after
            any changes constitutes your acceptance of the new terms.
          </Li>
          <Li>
            Notification of Changes: We will notify you of any significant
            changes to these Terms and Conditions via email or through our
            website. It is your responsibility to review these terms
            periodically.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>9. Governing Law</H3>
        <P>
          Jurisdiction: These Terms and Conditions shall be governed by and
          construed in accordance with the laws of India. Any disputes arising
          under these terms shall be subject to the exclusive jurisdiction of
          the courts in Ernakulam, Kerala, India.
        </P>
      </Section>
      <Section>
        <H3>10. Contact Information</H3>
        <P>
          If you have any questions or concerns regarding these Terms and
          Conditions, please contact us at
          <Link
            href="mailto:info@artusacademy.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary ml-1"
          >
            info@artusacademy.com
          </Link>
        </P>
      </Section>
    </div>
  );
}

import { B, H3, Li, P, Section, Ul } from "@/components/Para";
import { contactInfo } from "@/data/contact";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16 mx-auto px-5">
      <h2 className="text-center max-w-2xl mx-auto mb-10 text-3xl md:text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h2>
      <P>
        At ArtUs Academy, we prioritize the privacy and security of our
        students, website visitors, and clients. This Privacy Policy outlines
        the types of information we collect, how we use and protect that
        information, and your rights concerning your data.
      </P>

      <Section>
        <H3>1. Information We Collect</H3>
        <P>
          We collect personal and usage information to enhance your learning
          experience and improve our services. The types of information we
          collect include:
        </P>
        <Ul>
          <Li>
            <B>Personal Information</B>: This includes your name, email address,
            phone number, billing information, and other contact details when
            you register for our courses, subscribe to newsletters, or
            communicate with us.
          </Li>
          <Li>
            <B>Educational Information</B>: Details regarding your course
            enrollment, progress, assessments, and certifications.
          </Li>
          <Li>
            <B>Usage Data</B>: Information on how you interact with our website,
            including your IP address, browser type, pages visited, time spent
            on the site, and other diagnostic data.
          </Li>
          <Li>
            <B>Cookies and Tracking Technologies</B>: We utilize cookies and
            similar technologies to enhance your online experience, track user
            engagement, and gather analytical data.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>2. How We Use Your Information</H3>
        <P>
          The information we collect is used for several purposes, including:
        </P>
        <Ul>
          <Li>
            <B>Course Delivery and Administration</B>: Managing your course
            enrollment, providing educational materials, tracking your progress,
            and issuing certificates upon completion.
          </Li>
          <Li>
            <B>Personalization</B>: Tailoring the content and resources to your
            learning preferences and needs.
          </Li>
          <Li>
            <B>Marketing and Communication</B>: Sending promotional content,
            updates, and newsletters regarding our courses and services. You may
            opt-out of these communications at any time.
          </Li>
          <Li>
            <B>Improving Services</B>: Analyzing website usage and feedback to
            enhance our offerings and user experience.
          </Li>
          <Li>
            <B>Legal Compliance</B>: Complying with legal obligations, resolving
            disputes, and enforcing our agreements.
          </Li>
        </Ul>
      </Section>

      <Section>
        <H3>3. Sharing Your Information</H3>
        <P>
          We respect your privacy and do not sell your personal information.
          However, we may share your data with:
        </P>
        <Ul>
          <Li>
            <B>Service Providers</B>: Trusted third-party providers who assist
            in delivering our services, such as payment processors, learning
            management systems, and marketing platforms. These providers are
            obligated to protect your data.
          </Li>
          <Li>
            <B>Educational Partners</B>: Institutions or organizations we
            collaborate with to offer joint courses or certifications.
          </Li>
          <Li>
            <B>Company Partners</B>: Third-party companies or organization we
            collaborate with to offer jobs and career improvements.
          </Li>
          <Li>
            <B>Legal and Regulatory Authorities</B>: If required by law, we may
            disclose your information to comply with legal processes or protect
            our rights.
          </Li>
        </Ul>
      </Section>

      <Section>
        <H3>4. Data Security</H3>
        <P>
          We implement industry-standard security measures to safeguard your
          personal information. While we strive to protect your data, please
          note that no method of transmission over the internet or electronic
          storage is entirely secure.
        </P>
      </Section>

      <Section>
        <H3>5. Your Rights</H3>
        <P>You have the following rights concerning your personal data:</P>
        <Ul>
          <Li>
            <B>Access and Correction</B>: You can request access to your
            personal information and correct any inaccuracies.
          </Li>
          <Li>
            <B>Data Portability</B>: You may request a copy of your data in a
            structured, machine-readable format.
          </Li>
          <Li>
            <B>Data Deletion</B>: You can request the deletion of your personal
            data, subject to certain legal obligations.
          </Li>
          <Li>
            <B>Opt-Out</B>: You may opt-out of marketing communications by
            following the unsubscribe instructions in our emails.
          </Li>
        </Ul>
      </Section>
      <Section>
        <H3>6. Online Learning Platforms</H3>
        <P>
          Our online courses may involve third-party platforms (e.g., Learning
          Management Systems, video conferencing tools). These platforms have
          their privacy policies, and we recommend reviewing them to understand
          how your data is handled.
        </P>
      </Section>
      <Section>
        <H3>7. Cookies Policy</H3>
        <P>
          We use cookies to provide essential functionality, improve site
          performance, and deliver personalized content. You can manage your
          cookie preferences through your browser settings.
        </P>
      </Section>
      <Section>
        <H3>8. Links to Third-Party Websites</H3>
        <P>
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices or content of these external
          sites. Please review their privacy policies before providing any
          personal information.
        </P>
      </Section>
      <Section>
        <H3>9. Changes to This Privacy Policy</H3>
        <P>
          We may update this Privacy Policy to reflect changes in our practices
          or for legal reasons. Any changes will be posted on this page with an
          updated effective date. We encourage you to review this policy
          periodically.
        </P>
      </Section>
      <Section>
        <H3>10. Contact Us</H3>
        <P>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal data, please contact us at
          <Link
            href={`mailto:${contactInfo.email}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary ml-1"
          >
            {contactInfo.email}
          </Link>
        </P>
      </Section>
    </div>
  );
}

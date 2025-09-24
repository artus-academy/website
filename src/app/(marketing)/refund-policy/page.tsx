import { B, H3, Li, P, Section, Ul } from "@/components/Para";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="container py-12 md:py-16 mx-auto px-5">
      <h2 className="text-center max-w-2xl mx-auto mb-10 text-3xl md:text-4xl font-semibold tracking-tight">
        Refund Policy
      </h2>

      <P>
        <B>Effective date: 24-09-2025</B>
      </P>

      <Section>
        <H3>1. General Policy</H3>
        <P>
          At ArtUs Academy, we strive to ensure student satisfaction with our
          courses and services. If you are not satisfied with your enrollment,
          you may be eligible for a refund in accordance with the conditions
          outlined below.
        </P>
      </Section>

      <Section>
        <H3>2. Eligibility for Refunds</H3>
        <Ul>
          <Li>
            Refund requests must be made in writing via email to{" "}
            <Link
              href="mailto:info@artusacademy.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-primary ml-1"
            >
              info@artusacademy.com
            </Link>{" "}
            within <B>7 days</B> from the course start date.
          </Li>
          <Li>
            Refunds are applicable only if the student has attended less than
            10% of the classes or accessed less than 10% of the course
            materials.
          </Li>
          <Li>
            No refunds will be provided after the refund window has expired.
          </Li>
        </Ul>
      </Section>

      <Section>
        <H3>3. Non-Refundable Situations</H3>
        <Ul>
          <Li>
            Failure to attend live classes, access recordings, or complete
            assignments does not qualify for a refund.
          </Li>
          <Li>
            Fees paid for downloadable content, course materials, or
            certifications are strictly non-refundable.
          </Li>
          <Li>
            Installment payments already made are non-refundable, though future
            unpaid installments may be canceled if eligibility criteria are met.
          </Li>
        </Ul>
      </Section>

      <Section>
        <H3>4. Processing of Refunds</H3>
        <Ul>
          <Li>
            Approved refunds will be processed within <B>10-15 business days</B>{" "}
            to the original method of payment.
          </Li>
          <Li>
            Transaction or payment gateway fees (if any) may be deducted from
            the refunded amount.
          </Li>
          <Li>
            ArtUs Academy is not responsible for delays caused by third-party
            payment processors or banks.
          </Li>
        </Ul>
      </Section>

      <Section>
        <H3>5. Contact Us</H3>
        <P>
          For any refund requests or inquiries regarding this policy, please
          reach out to us at{" "}
          <Link
            href="mailto:info@artusacademy.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary ml-1"
          >
            info@artusacademy.com
          </Link>
          . Our support team will respond within 3-5 business days.
        </P>
      </Section>
    </div>
  );
}

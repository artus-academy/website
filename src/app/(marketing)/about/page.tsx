import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="About ArtUs Academy"
        subtitle="We teach what we use in production."
      />
      <MotionSection className="card p-6">
        <p className="text-slate-600">
          ArtUs Academy is a Kochi-based training program focused on Web
          Development and Digital Marketing. Our instructors are industry
          professionals shipping real products.
        </p>
      </MotionSection>
    </div>
  );
}

import Link from "next/link";
import { Button } from "../ui/button";
import { Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { ApplyNowDialog } from "../ApplyNowDialog";

export default function CoursesSection() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Courses We Offer</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-blue-400/30 dark:border-blue-500/30 rounded-xl p-8 bg-card hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={cn(
                "p-2 rounded-lg bg-linear-to-r shadow-sm transition-colors",
                "bg-blue-100 text-blue-700",
                "dark:",
                "bg-blue-500/10 text-blue-400"
              )}
            >
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold">
              Full Stack Web Development
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Build real applications from scratch using React, Java, Spring Boot,
            MySQL, Git & Deployment pipelines.
          </p>
          <Link href="courses/web-development">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>

        <div className="border rounded-xl p-8 bg-card hover:shadow-lg transition border-pink-400/30 dark:border-pink-500/30">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={cn(
                "p-2 rounded-lg bg-linear-to-r shadow-sm transition-colors",
                "bg-pink-100 text-pink-700",
                "dark:",
                "bg-pink-500/10 text-pink-400"
              )}
            >
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Learn SEO, ads, campaign planning, analytics & brand strategy
            directly from industry professionals.
          </p>
          <Link href="courses/digital-marketing">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
      <ApplyNowDialog
        trigger={
          <Button size="lg" className="text-base">
            Apply Now
          </Button>
        }
      />
    </>
  );
}

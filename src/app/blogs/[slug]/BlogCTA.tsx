import Link from "next/link";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogCTA() {
  return (
    <section className="mt-12 border-t pt-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Ready to Learn With <span className="text-primary">Artus Academy</span>?
      </h2>

      <div className="grid gap-3 mx-auto mb-12">
        {Object.values(courses).map((course) => (
          <Card
            key={course.id}
            className={cn(
              "group relative flex flex-col sm:flex-row",
              course.border
            )}
          >
            <div
              className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500",
                `bg-linear-to-br ${course.darkGradient} dark:${course.darkGradient} ${course.lightGradient} z-0`
              )}
            />
            <CardHeader className="flex-1 flex flex-row z-10">
              <div
                className={cn(
                  "p-2 rounded-lg bg-linear-to-r shadow-sm transition-colors",
                  course.badgeLight,
                  "dark:",
                  course.badgeDark
                )}
              >
                <course.icon className="w-5 h-5" />
              </div>
              <span>
                <CardTitle className="flex gap-2 items-center">
                  {course.title}
                </CardTitle>
                <CardDescription>{course.tagline}</CardDescription>
              </span>
            </CardHeader>
            <CardFooter className="z-10">
              <CardAction>
                <Link href={`/courses/${course.id}`}>
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mb-20">
        <ApplyNowDialog trigger={<Button size="lg">Apply Now!</Button>} />
      </div>
    </section>
  );
}

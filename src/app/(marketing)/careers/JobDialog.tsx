"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import JobApplyForm from "./JobApplyForm";
import { Dispatch, SetStateAction } from "react";
import { JobOpening } from "@/lib/erpnext";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function JobDialog({
  job,
  setJob,
}: {
  job: JobOpening | undefined;
  setJob: Dispatch<SetStateAction<JobOpening | undefined>>;
}) {
  const employmentType = job?.employment_type || "Full-time";
  return (
    <Dialog open={!!job} onOpenChange={() => setJob(undefined)}>
      <DialogContent className="max-h-[calc(100dvh-60px)] overflow-hidden flex flex-col p-0">
        <div className="relative">
          <DialogHeader className="absolute h-24 w-full py-5 px-6 border-b bg-background">
            <DialogTitle className="text-xl md:text-2xl font-semibold text-left md:text-center">
              {job?.job_title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground text-left md:text-center">
              {[job?.location, employmentType, job?.department]
                .filter(Boolean)
                .join(" · ")}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(100dvh-156px)] overflow-auto mt-24 p-6 pt-0">
            {job?.description && (
              <div
                className="prose dark:prose-invert max-w-none prose-sm prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            )}

            {job && <JobApplyForm jobId={job?.name} jobTitle={job.job_title} />}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

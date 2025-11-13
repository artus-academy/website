"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobOpening } from "@/lib/erpnext";
import { Dispatch, SetStateAction } from "react";
export default function CareerCard({
  job,
  setJob,
}: {
  job: JobOpening;
  setJob: Dispatch<SetStateAction<JobOpening | undefined>>;
}) {
  const employmentType = job.employment_type || "Full-time";
  return (
    <Card
      className="h-full flex flex-col rounded-2xl cursor-pointer hover:bg-muted/40 transition"
      onClick={() => setJob(job)}
    >
      <CardHeader>
        <CardTitle className="text-xl leading-tight">
          {job.job_title || job.name}
        </CardTitle>
        <div className="mt-1 flex justify-between">
          <Badge variant="secondary">{employmentType}</Badge>
          <Badge>{job.department}</Badge>
        </div>
      </CardHeader>
      <CardContent className="mt-auto text-sm text-muted-foreground">
        {job.location}
      </CardContent>
    </Card>
  );
}

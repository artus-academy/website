"use client";
import { JobOpening } from "@/lib/erpnext";
import CareerCard from "./CareerCard";
import JobDialog from "./JobDialog";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function JobsSyncList({ jobs }: { jobs: JobOpening[] }) {
  const [job, setJob] = useState<JobOpening | undefined>();
  const [q, setQ] = useState<string>("");

  const results = jobs.filter((j) =>
    [j.job_title, j.location, j.department, j.company]
      .filter(Boolean)
      .some((s) => String(s).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <InputGroup>
        <InputGroupInput
          type="text"
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, location, department…"
          className="w-full"
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {results.length} result{results.length === 1 ? "" : "s"}
        </InputGroupAddon>
      </InputGroup>

      <JobDialog job={job} setJob={setJob} />

      {results.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg font-medium mb-2">No job openings found</p>
          {q ? (
            <p>
              Try adjusting your search or{" "}
              <button
                onClick={() => setQ("")}
                className="text-primary hover:underline"
              >
                clear the filter
              </button>
              .
            </p>
          ) : (
            <p>Please check back soon for new opportunities!</p>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((job: JobOpening) => (
            <CareerCard key={job.name} job={job} setJob={setJob} />
          ))}
        </div>
      )}
    </>
  );
}

import JobsSyncList from "./JobsSyncList";

export default async function CareersPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Careers at ArtUs Academy
        </h1>
        <p className="opacity-80">
          Join our mission to build future-ready talent.
        </p>
      </header>
      <JobsList />
    </div>
  );
}

async function JobsList() {
  const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/jobs`);
  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json();
  const jobs = data.data || [];

  return <JobsSyncList jobs={jobs} />;
}

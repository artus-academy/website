export async function erpFetch(
  path: string,
  init?: RequestInit
): Promise<{ data: JobOpening[] }> {
  const base = process.env.ERP_BASE_URL || "";
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(init?.headers || {}),
    Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
  };

  const url = `${base.replace(/\/$/, "")}${
    path.startsWith("/") ? "" : "/"
  }${path}`;
  const res = await fetch(url, { ...init, headers, cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`ERPNext API error ${res.status}: ${text}`);
  }
  return res.json();
}

export function toQuery(obj: Record<string, unknown>) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === "") continue;
    q.set(k, typeof v === "string" ? v : JSON.stringify(v));
  }
  return `?${q.toString()}`;
}

export type JobOpening = {
  name: string;
  job_title?: string;
  status?: string;
  department?: string;
  employment_type?: string;
  location?: string;
  description?: string;
  opening_date?: string;
  closing_date?: string;
  company?: string;
};

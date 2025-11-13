import { NextResponse } from "next/server";
import { erpFetch } from "@/lib/erpnext";

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const params = await context.params;
  const { applicant_name, email_id, phone, message, resume_url } = body;
  if (!applicant_name || !email_id) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const payload = {
    applicant_name,
    email_id,
    contact_number: phone,
    cover_letter: message,
    job_title: params.id,
  } as Record<string, unknown>;
  if (resume_url) payload.resume_link = resume_url;

  console.log("Payload:", payload);

  const res = await erpFetch(`/api/resource/Job Applicant`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return NextResponse.json({ ok: true, applicant: res.data });
}

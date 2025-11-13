import { NextRequest, NextResponse } from "next/server";
import { erpFetch, toQuery } from "@/lib/erpnext";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") || 50);
  const fields = [
    "name",
    "job_title",
    "status",
    "department",
    "employment_type",
    "location",
    "description",
    "company",
  ];

  const filters: string[][] = [["status", "=", "Open"]];

  const res = await erpFetch(
    `/api/resource/Job Opening${toQuery({
      fields,
      filters,
      limit_page_length: limit,
      order_by: "modified desc",
    })}`
  );

  const data = res.data || [];
  return NextResponse.json({ data });
}

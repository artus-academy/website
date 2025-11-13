"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

const formSchema = z.object({
  applicant_name: z.string().min(2, "Name is required"),
  email_id: z.email("Invalid email"),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  resume_url: z.url().optional(),
  message: z.string().optional(),
});

export default function JobApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle?: string;
}) {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  type FormSchema = z.infer<typeof formSchema>;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicant_name: "",
      email_id: "",
      phone: "",
      resume_url: "",
      message: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetch(`/api/jobs/${encodeURIComponent(jobId)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(await res.text());
      setOk(true);
      form.reset();
    } catch (err) {
      setError((err as Error)?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (ok)
    return (
      <div className="p-4 border rounded-xl text-sm">
        ✅ Thanks! Your application for <b>{jobTitle || jobId}</b> has been
        submitted.
      </div>
    );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
        <h3 className="text-xl font-bold pb-2">Apply now!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="applicant_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+91 9876543219" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume URL (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Link to Drive/Cloud" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short note (optional)"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="rounded-2xl w-full md:w-auto"
        >
          {loading ? "Submitting…" : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}

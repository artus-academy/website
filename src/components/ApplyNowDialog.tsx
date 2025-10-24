"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { sleep } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import ButtonLoading from "./ui/button-loading";

const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Enter a valid email."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  age: z
    .number()
    .int()
    .min(15, "Minimum age is 15")
    .max(80, "Maximum age is 80"),
  qualification: z.string().min(2, "Please enter your last qualification."),
  experienceYears: z
    .number()
    .min(0, "Must be 0 or more")
    .max(40, "Unusually high"),
  course: z.string().min(1, "Please select a course."),
  mode: z.string().min(1, "Please select a mode."),
});

export type ApplyFormValues = z.output<typeof formSchema>;

export function ApplyNowDialog({
  trigger,
}: {
  courses?: readonly string[];
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: 18,
      qualification: "",
      experienceYears: 0,
      course: "",
      mode: "online",
    },
    mode: "onTouched",
  });

  const submitValues = async (data: ApplyFormValues) => {
    // Example: POST to your API route
    // await fetch("/api/applications", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });

    console.log("Mocking the submission of ", data);
    await sleep(2000);
    setOpen(false);
    form.reset();
  };

  const onSubmit = async (values: ApplyFormValues) => {
    toast.promise<void>(() => submitValues(values), {
      loading: "Submitting your form...",
      success: () => "Application submitted! Our team will contact you soon.",
      error: "Error",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? <Button>Apply Now</Button>}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg px-0">
        <DialogHeader className="px-5">
          <DialogTitle>Apply for the Course</DialogTitle>
          <DialogDescription>
            Fill in your details and our team will reach out with the next
            steps.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70dvh] px-5 pb-5 w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
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
                        <Input
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={15}
                          max={80}
                          placeholder="18"
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experienceYears"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience (years)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          max={40}
                          placeholder="0"
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Qualification</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="B.Tech / BSc / Diploma / 12th / etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="mode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mode</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online">Online</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="offline" id="offline" />
                            <Label htmlFor="offline">Offline</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">
                              Full Stack Web Development (6 Months)
                            </SelectItem>
                            <SelectItem value="digital">
                              Digital Marketing (4 Months)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-2 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <ButtonLoading
                  loading={form.formState.isSubmitting}
                  type="submit"
                >
                  Submit
                </ButtonLoading>
              </div>
              <div className="text-muted-foreground text-xs justify-center text-center w-full">
                By submitting the data, I have read the{" "}
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

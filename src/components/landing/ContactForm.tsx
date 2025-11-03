"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { MailIcon, UserIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { toast } from "sonner";
import { Label } from "../ui/label";
import ButtonLoading from "../ui/button-loading";

const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

const Modes = ["online", "offline"] as const;
const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Enter a valid email."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  course: z.string().min(1, "Please select a course."),
  mode: z.enum(Modes),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      mode: "offline",
    },
    mode: "onTouched",
  });

  const submitValues = async (data: ContactFormValues) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "Book free class",
        ...data,
      }),
    });

    form.reset();
  };

  const onSubmit = async (values: ContactFormValues) => {
    const promise = submitValues(values);
    toast.promise<void>(() => promise, {
      loading: "Submitting your form...",
      success: () => "Successfully booked your free class!",
      error: "Error",
    });
    return await promise;
  };

  return (
    <Card className="h-fit w-full flex-1">
      <CardHeader>
        <CardTitle>Book Your Free Live Class</CardTitle>
        <CardDescription>
          Just fill in your details below and get a live session from our top
          instructors.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup className="gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputGroup>
                        <InputGroupInput
                          placeholder="Enter your full name"
                          {...field}
                        />
                        <InputGroupAddon>
                          <UserIcon />
                        </InputGroupAddon>
                      </InputGroup>
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
                      <FormControl>
                        <InputGroup>
                          <InputGroupInput
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                          <InputGroupAddon>
                            <MailIcon />
                          </InputGroupAddon>
                        </InputGroup>
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
                      <FormControl>
                        <InputGroup>
                          <InputGroupAddon>
                            <InputGroupText>+91</InputGroupText>
                          </InputGroupAddon>
                          <InputGroupInput
                            type="tel"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Course Dropdown */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Mode Radio Group */}
                <FormField
                  control={form.control}
                  name="mode"
                  render={({ field }) => (
                    <FormItem>
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

              {/* Submit */}
              <Field className="pt-4">
                <ButtonLoading
                  type="submit"
                  className="w-full"
                  loading={form.formState.isSubmitting}
                >
                  Book a Free Class
                </ButtonLoading>
                <FieldDescription className="text-center text-xs">
                  By submitting this form, I have read the{" "}
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
                  .
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sleep } from "@/lib/utils";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import { MailIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import ButtonLoading from "../ui/button-loading";

const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  subject: z.string().min(2, "Enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUsForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const submitValues = async (values: ContactFormValues) => {
    // Example: POST to your API route
    // await fetch("/api/applications", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });

    console.log("Mocking the submission of ", values);
    await sleep(2000);
    form.reset();
  };

  const onSubmit = async (values: ContactFormValues) => {
    const promise = submitValues(values);
    toast.promise(promise, {
      loading: "Sending your message...",
      success: "Message sent! We'll get back to you soon 😊",
      error: "Something went wrong. Try again.",
    });
    return await promise;
  };

  return (
    <Card className="backdrop-blur-md bg-card/60 border shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <FormField
                name="subject"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="How can we help you?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Field className="flex justify-center mx-auto w-fit">
                <ButtonLoading
                  type="submit"
                  loading={form.formState.isSubmitting}
                  className="w-fit"
                >
                  Send Message
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

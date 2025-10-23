import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import { MailIcon, UserIcon } from "lucide-react";

export default function ContactForm() {
  return (
    <Card className="h-fit w-full flex-1">
      <CardHeader>
        <CardTitle>Book You Free Live Class</CardTitle>
        <CardDescription>
          Just fill your details below and get a class from our top instructors.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-auto max-h-96">
        <form>
          <FieldGroup className="gap-3">
            <InputGroup>
              <InputGroupInput type="name" placeholder="Enter your full name" />
              <InputGroupAddon>
                <UserIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                type="email"
                placeholder="Enter your email"
                required
              />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>+91</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="tel" placeholder="Phone Number" />
            </InputGroup>

            <Field className="pt-4">
              <Button type="submit">Book A free class</Button>
              <FieldDescription className="text-center text-xs">
                By creating an account I have read the{" "}
                <Link href="/terms-and-conditions">Terms</Link> and{" "}
                <Link href="/privacy-policy">Privacy policy</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

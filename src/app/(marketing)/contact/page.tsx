"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { ReactNode } from "react";
import ContactUsForm from "@/components/contact/ContactUsForm";
import { Badge } from "@/components/ui/badge";
import { contactInfo } from "@/data/contact";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none z-0 max-h-96" />
      <div className="container mx-auto px-6 space-y-16 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground">
            Have questions? We&apos;re here to guide you.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:col-span-2"
          >
            <h2 className="text-2xl font-semibold">Visit Us</h2>

            <ContactInfo
              icon={MapPin}
              text={
                <>
                  3rd Floor, SF Arcade
                  <br />
                  Kakkanad, Kochi
                  <br />
                  Kerala - 682030
                </>
              }
            />
            <ContactInfo
              icon={Phone}
              text={
                <a href={`tel:${contactInfo.phone.number}`}>
                  {contactInfo.phone.display}
                </a>
              }
            />
            <ContactInfo
              icon={Mail}
              text={
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              }
            />
            <ContactInfo icon={Clock} text="Mon - Sat : 9:30 AM - 6:00 PM" />

            <ApplyNowDialog />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3"
          >
            <div className="px-6 md:px-8">
              <ContactUsForm />
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl overflow-hidden border shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9945513072794!2d76.33865077592277!3d10.017307572734836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080decbab597e1%3A0x32c51551a407474e!2sArtUs%20Brand!5e0!3m2!1sen!2sin!4v1761729163201!5m2!1sen!2sin"
            className="w-full h-[350px] md:h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

/* Small reusable contact item */
function ContactInfo({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-muted-foreground">
      <Icon className="h-5 w-5 text-primary shrink-0" />
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string().min(10),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send email using EmailJS
      emailjs
        .send(
          "service_9adpi3x", // Your EmailJS service ID
          "template_zfn7mxu", // Your EmailJS template ID
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          "suncw-w2JCzwzh7e0" // Your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully", response);

            // Show success toast notification
            toast.success("Message sent successfully! 🎉", {
              duration: 3000,
              position: "top-right",
            });

            // Optionally clear the form fields
            form.reset();
          },
          (error) => {
            console.error("Email sending error", error);
            toast.error("Failed to send the email. Please try again.");
          }
        );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white font-mono">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  type=""
                  {...field}
                  className="bg-transparent border-white/20 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-white placeholder:text-white/30"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type=""
                  {...field}
                  className="bg-transparent border-white/20 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-white placeholder:text-white/30"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none bg-transparent border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white placeholder:text-white/30"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="cursor-pointer w-full bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-[0.15em] text-xs"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

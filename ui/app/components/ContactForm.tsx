"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;
type FormErrors = { [K in keyof ContactFormInputs]?: string };

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setStatus("");

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof ContactFormInputs] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id='contact' className="text-foreground py-16 sm:py-24" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="bg-background/10 p-8 rounded-lg shadow-lg"
          noValidate
        >
          <p className="text-3xl text-center font-semibold mb-6">Join The Community</p>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-foreground/5 border border-foreground/20 rounded-md p-3 focus:ring-2 focus:ring-foreground/50 focus:border-foreground/50 outline-none transition duration-200"
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-foreground/5 border border-foreground/20 rounded-md p-3 focus:ring-2 focus:ring-foreground/50 focus:border-foreground/50 outline-none transition duration-200"
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-foreground/5 border border-foreground/20 rounded-md p-3 focus:ring-2 focus:ring-foreground/50 focus:border-foreground/50 outline-none transition duration-200"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-foreground/5 border border-foreground/20 rounded-md p-3 focus:ring-2 focus:ring-foreground/50 focus:border-foreground/50 outline-none transition duration-200"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              type="submit"
              disabled={status === "submitting"}
              className=""
              variant='outline'
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

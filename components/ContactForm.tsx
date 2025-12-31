"use client";

import { useState } from "react";
import { AnimatedButton } from "./AnimatedButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    "full-name": "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData["full-name"],
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ "full-name": "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-[#2c2017] rounded-lg border border-slate-200 dark:border-[#473324] h-full min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary !text-5xl">check_circle</span>
        </div>
        <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-primary mb-4">
          Message Sent!
        </h3>
        <p className="text-slate-600 dark:text-[#a18a7c] text-lg max-w-sm mb-8">
          Thanks for reaching out. I'll get back to you shortly.
        </p>
        <AnimatedButton onClick={() => setStatus("idle")}>
          Send Another
        </AnimatedButton>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="full-name"
        >
          Full Name
        </label>
        <input
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2 disabled:opacity-50"
          id="full-name"
          name="full-name"
          placeholder="Your Name"
          type="text"
          value={formData["full-name"]}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2 disabled:opacity-50"
          id="email"
          name="email"
          placeholder="you@example.com"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2 disabled:opacity-50"
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg">
          {errorMessage}
        </div>
      )}



      <div className="flex justify-center w-fit mx-auto">
        <AnimatedButton type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </AnimatedButton>
      </div>
    </form>
  );
}


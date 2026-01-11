"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef(null);

const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    date: formData.get("date"),
    persons: formData.get("persons"),
    message: formData.get("message"),
    packageType: formData.getAll("packageType"),
    activities: formData.getAll("activities"),
  };

  try {
    const res = await fetch("https://serverless-sage-ten.vercel.app/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Form submitted successfully!");
      form.current.reset();
    } else {
      toast.error("Something went wrong. Try again.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Try again.");
  }
};

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        Contact Our Team
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Name *"
            required
            className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email *"
            required
            className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
          />
          <Input
            name="phone"
            placeholder="Phone No *"
            required
            className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
          />
          <Input
            name="date"
            type="date"
            placeholder="Trip Tentative Date"
            className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
          />
          <Input
            name="persons"
            type="number"
            placeholder="No. of Persons"
            className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-800 font-medium">Tour Package Type</label>
          <div className="flex flex-wrap gap-4">
            {[
              "Couple Goa",
              "Solo Goa",
              "Weekend Gateway",
              "Family Tour",
              "Customised Tour",
            ].map((label) => (
              <label key={label} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  name="packageType"
                  value={label}
                  className="accent-cyan-600"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-800 font-medium">Activities Want To Do?</label>
          <div className="flex flex-wrap gap-4">
            {[
              "Scuba Diving",
              "Water Sports Goa",
              "Dudhsagar Waterfall",
              "Dinner Party on Cruise",
              "Bungy Jumping",
              "Flyboarding",
            ].map((activity) => (
              <label key={activity} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  name="activities"
                  value={activity}
                  className="accent-cyan-600"
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

        <Textarea
          name="message"
          placeholder="Message"
          className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
        />

        <Button
          type="submit"
          className="w-full md:w-40 bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white font-semibold"
        >
          Submit
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

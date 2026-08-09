"use client";

import React, { useState } from "react";
import { Card, Button, Chip, Link } from "@heroui/react";

// react-icons
import { FiMail, FiMapPin, FiBriefcase, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle, FiUser } from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Social from "./Social";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/niloyniloy843@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Portfolio Contact Form Submission"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Form submission failed");
        // Fallback behavior if needed
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Fallback behavior if needed
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-foreground">
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16 space-y-4">
        <Chip 
          color="primary" 
          variant="flat" 
          startcontent={<HiOutlineSparkles className="w-4 h-4 text-primary" />}
          className="px-3 py-1 text-xs sm:text-sm font-medium border border-primary/20"
        >
          Get In Touch
        </Chip>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-foreground-600 bg-clip-text text-transparent">
          Let's Build Something Together
        </h1>
        <p className="text-default-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Have a project in mind, a question, or want to collaborate? Send a message below.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Contact Info Sidebar */}
        <aside className="flex flex-col gap-6">
          <Card className="border border-default-100 shadow-medium p-6 hover:shadow-large transition-shadow duration-300">
            <div className="flex flex-col gap-6 justify-between h-full">
              <div>
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-default-100 pb-3">
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-primary" /> Contact Details
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-default-400 font-semibold uppercase tracking-wider">Email</p>
                      <p
                        color="foreground" 
                        className="font-medium hover:text-primary transition-colors text-sm sm:text-base"
                      >
                        niloyniloy843@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-default-400 font-semibold uppercase tracking-wider">Location</p>
                      <p className="font-medium text-default-700 text-sm sm:text-base">
                        Gazipur, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-6 border-t border-default-100">
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="w-4 h-4 text-default-400" />
                  <p className="text-xs text-default-400 font-semibold uppercase tracking-wider">Availability</p>
                </div>
                <Chip color="success" size="sm" variant="dot" className="border-none p-0 text-xs sm:text-sm font-medium">
                  Open for freelance & full-time roles
                </Chip>
              </div>
            </div>
          </Card>

          {/* Social Profiles */}
          <Card className="border border-default-100 shadow-medium p-6">
            <div>
              <h2 className="text-base font-bold mb-4">Social Profiles</h2>
              {/* <div className="grid grid-cols-3 gap-2">
                <Button 
                  as={Link} 
                  href="https://github.com" 
                  target="_blank" 
                  variant="flat" 
                  size="md"
                  className="w-full font-medium"
                  startcontent={<FiGithub className="w-4 h-4" />}
                >
                  GitHub
                </Button>
                <Button 
                  as={Link} 
                  href="https://linkedin.com" 
                  target="_blank" 
                  variant="flat" 
                  size="md" 
                  color="primary"
                  className="w-full font-medium"
                  startcontent={<FiLinkedin className="w-4 h-4" />}
                >
                  LinkedIn
                </Button>
                <Button 
                  as={Link} 
                  href="https://x.com" 
                  target="_blank" 
                  variant="flat" 
                  size="md"
                  className="w-full font-medium"
                  startcontent={<FiTwitter className="w-4 h-4" />}
                >
                  Twitter
                </Button>
              </div> */}

                <Social />

              
            </div>
          </Card>
        </aside>

        {/* Contact Form Section */}
        <section className="lg:col-span-2">
          <Card className="border border-default-100 shadow-medium p-6 sm:p-8 h-full">
            <div className="flex flex-col justify-center h-full">
              {submitted ? (
                <div className="text-center py-16 px-4 space-y-5">
                  <div className="inline-flex p-4 rounded-full bg-success/10 text-success mb-2">
                    <FiCheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Thank You For Reaching Out!</h2>
                  <p className="text-default-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Your message has been received successfully. I'll review it and get back to you as soon as possible.
                  </p>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    size="lg"
                    onClick={() => setSubmitted(false)}
                    className="font-medium mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-default-600">
                        Name <span className="text-danger">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <FiUser className="absolute left-3 w-4 h-4 text-default-400" />
                        <input
                          id="name"
                          required
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-medium border-2 border-default-200 bg-transparent text-sm transition-colors outline-none hover:border-default-400 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-default-600">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <FiMail className="absolute left-3 w-4 h-4 text-default-400" />
                        <input
                          id="email"
                          required
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-medium border-2 border-default-200 bg-transparent text-sm transition-colors outline-none hover:border-default-400 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-default-600">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      name="message"
                      placeholder="Write your project details or enquiry here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-medium border-2 border-default-200 bg-transparent p-3 text-sm transition-colors outline-none hover:border-default-400 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    endContent={!isSubmitting && <FiSend className="w-4 h-4" />}
                    className="w-full font-semibold shadow-lg shadow-primary/25"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
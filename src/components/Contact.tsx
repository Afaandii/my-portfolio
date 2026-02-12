"use client";

import { personalInfo, services } from "@/data/portfolioData";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaPaperPlane,
  FaSpinner,
  FaCopy,
  FaCheck
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section relative overflow-hidden py-24">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss the latest tech? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8 animate-slide-in-left">
            {/* Info Cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  label: "Email",
                  value: personalInfo.email,
                  action: () => copyToClipboard(personalInfo.email, "email"),
                  type: "email"
                },
                {
                  icon: <FaPhone className="w-5 h-5" />,
                  label: "Phone",
                  value: personalInfo.phone,
                  action: () => copyToClipboard(personalInfo.phone, "phone"),
                  type: "phone"
                },
                {
                  icon: <FaMapMarkerAlt className="w-5 h-5" />,
                  label: "Location",
                  value: personalInfo.location,
                  action: null,
                  type: "text"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-surface border border-border/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted font-medium mb-1">{item.label}</p>
                      <h4 className="text-lg font-semibold">{item.value}</h4>
                    </div>
                    {item.action && (
                      <button
                        onClick={item.action}
                        className="p-2 rounded-lg bg-surface hover:bg-primary/10 text-muted hover:text-primary transition-colors relative"
                        title="Copy to clipboard"
                      >
                        {copiedField === item.type ? (
                          <FaCheck className="w-4 h-4 text-primary" />
                        ) : (
                          <FaCopy className="w-4 h-4" />
                        )}
                        {copiedField === item.type && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-border text-xs rounded shadow-lg whitespace-nowrap animate-fade-in-up">
                            Copied!
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-linear-to-br from-surface/80 to-surface/40 border border-border/50 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-6">Connect on Social</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(personalInfo.social).map(([key, url], idx) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-background hover:bg-primary hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-primary/20"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {key === "github" && <FaGithub className="w-5 h-5" />}
                    {key === "linkedin" && <FaLinkedin className="w-5 h-5" />}
                    {key === "telegram" && <FaTelegram className="w-5 h-5" />}
                    {key === "instagram" && <FaInstagram className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 animate-slide-in-right">
            <div className="p-8 md:p-10 rounded-3xl bg-surface/50 border border-border/50 backdrop-blur-md relative overflow-hidden group">
              {/* Form Background Decor */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

              <h3 className="text-2xl font-bold mb-8">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1 text-muted">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1 text-muted">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-background font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : isSuccess ? (
                    <>
                      <FaCheck className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

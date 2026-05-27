import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection: React.FC = () => {
  const placeholderValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    subject: "Project Inquiry / Collaboration / Question",
    message: "Hello Anbarasan, I'd like to discuss a new project idea. Here are the details...",
  };

  const savedValues = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("contactForm") || "null")
    : null;

  const [formValues, setFormValues] = useState(
    savedValues || { name: "", email: "", phone: "", subject: "", message: "" }
  );
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setResult("");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
        localStorage.removeItem("contactForm");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");

    try {
      const payload = {
        access_key: "ef64095e-581b-4676-a94c-1d4767d6b375",
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        subject: `[Portfolio Contact] ${formValues.subject}`,
        message: formValues.message,
        from_name: formValues.name,
        replyto: formValues.email,
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("✅ Message sent successfully!");
      } else {
        // Real error from Web3Forms — show it
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again or email directly.");
      }
    } catch {
      // Network or fetch failure — show real error, not fake success
      setStatus("error");
      setResult("❌ Network error. Please check your connection or email directly at anbarasanpno18@gmail.com");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 min-h-[75vh] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/70 to-teal-50/50 flex items-center justify-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">
            Let's Build Something Exceptional
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            Ready to transform your ideas into scalable technical solutions? Reach out today for collaborations, project inquiries, or just a technical discussion.
          </p>
          <div className="mt-4 text-teal-600 font-medium">
            <a href="mailto:anbarasanpno18@gmail.com" className="hover:underline">anbarasanpno18@gmail.com</a>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-10 rounded-3xl border border-teal-500/20 bg-white shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received! 🎉</h3>
              <p className="text-xl text-slate-600 mb-2 leading-relaxed">
                Your message has been successfully sent to <span className="font-semibold text-teal-600">anbarasanpno18@gmail.com</span>.
              </p>
              <p className="text-slate-500 mb-6">Anbarasan will get back to you within 24 hours.</p>
              <div className="text-teal-600/60 text-sm italic">Returning to form shortly...</div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-500 font-medium mb-2 ml-1 text-sm uppercase tracking-wider">Full Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    required
                    value={formValues.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder={placeholderValues.name}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 font-medium mb-2 ml-1 text-sm uppercase tracking-wider">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder={placeholderValues.email}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 font-medium mb-2 ml-1 text-sm uppercase tracking-wider">Phone Number</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    name="phone"
                    required
                    value={formValues.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder={placeholderValues.phone}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-6 flex flex-col">
                <div className="flex-grow">
                  <label className="block text-slate-500 font-medium mb-2 ml-1 text-sm uppercase tracking-wider">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="subject"
                    required
                    value={formValues.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder={placeholderValues.subject}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <label className="block text-slate-500 font-medium mb-2 ml-1 text-sm uppercase tracking-wider">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    required
                    rows={4}
                    value={formValues.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={placeholderValues.message}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-900 placeholder-slate-400 resize-none h-[155px] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="md:col-span-2 mt-4 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold py-5 rounded-2xl shadow-xl text-lg tracking-wide uppercase transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Transmitting...
                    </span>
                  ) : "Send Secure Message"}
                </motion.button>

                {/* Error message */}
                {status === "error" && result && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm text-center font-medium"
                  >
                    {result}
                    <div className="mt-2">
                      <a href="mailto:anbarasanpno18@gmail.com" className="underline text-red-600 font-semibold">
                        Click here to email directly →
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;

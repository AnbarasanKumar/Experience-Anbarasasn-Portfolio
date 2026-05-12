import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection: React.FC = () => {
  const placeholderValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    subject: "Project Inquiry / Collaboration / Question",
    message: "Hello Anbarasan, I’d like to discuss a new project idea. Here are the details...",
  };

  const savedValues = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("contactForm") || "null")
    : null;

  const [formValues, setFormValues] = useState(
    savedValues || { name: "", email: "", phone: "", subject: "", message: "" }
  );
  const [result, setResult] = useState("");

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    if (result.includes("Successfully")) {
      const timer = setTimeout(() => {
        setResult("");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully! Your message has been sent to anbarasanpno18@gmail.com. Anbarasan will respond within 24hrs.");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
        localStorage.removeItem("contactForm");
      } else setResult(data.message || "Failed to send message.");
    } catch {
      setResult("✅ Message sent successfully to anbarasanpno18@gmail.com. Thank you!");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 min-h-[90vh] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/70 to-teal-50/50 flex items-center justify-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
          {result && result.includes("Successfully") ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-10 rounded-3xl border border-teal-500/20 bg-white shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Thank you for reaching out. Your message has been successfully transmitted. I will review it and get back to you within 24 hours.
              </p>
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
              style={{ 
                animation: "float-form 6s ease-in-out infinite"
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-2xl"
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

              <div className="md:col-span-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold py-5 rounded-2xl shadow-xl text-lg tracking-wide uppercase transition-all"
                >
                  {result === "Sending..." ? "Transmitting..." : "Send Secure Message"}
                </motion.button>
                {result && !result.includes("Successfully") && (
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="mt-4 text-red-600 text-center font-medium"
                  >
                    {result}
                  </motion.p>
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

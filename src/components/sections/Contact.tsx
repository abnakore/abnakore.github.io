import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../../hooks/useMode";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const mailto = `mailto:hello@example.com?subject=${encodeURIComponent(
      form.subject || "Portfolio contact",
    )}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`,
    )}`;
    window.location.href = mailto;

    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 4000);
  }

  const inputCls = isTerminal
    ? "w-full bg-t-panel border border-t-border rounded-lg px-3.5 py-3 text-sm text-t-text placeholder:text-t-dim focus:outline-none focus:border-t-accent transition-colors"
    : "w-full bg-white border-[1.5px] border-[#E4E0F5] rounded-xl px-4 py-3.5 text-sm placeholder:text-b-sub/60 focus:outline-none focus:border-b-accent transition-colors";

  const labelCls = isTerminal
    ? "block font-mono text-xs text-t-accent mb-1.5"
    : "block text-xs font-bold text-b-sub mb-1.5";

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? "bg-white" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ mail --compose" : "Contact"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 ${isTerminal ? "font-mono" : "font-sora"}`}
          >
            {isTerminal ? "Let's talk" : "Let's build something"}
          </h2>
        </ScrollReveal>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mt-8"
        >
          <ScrollReveal variant="fadeUp" delay={0.05}>
            <div>
              <label className={labelCls}>
                {isTerminal ? "--name" : "Full name"}
              </label>
              <input
                required
                value={form.name}
                onChange={handleChange("name")}
                type="text"
                placeholder="Your name"
                className={inputCls}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div>
              <label className={labelCls}>
                {isTerminal ? "--email" : "Email"}
              </label>
              <input
                required
                value={form.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="you@example.com"
                className={inputCls}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="fadeUp"
            delay={0.15}
            className="md:col-span-2"
          >
            <div>
              <label className={labelCls}>
                {isTerminal ? "--subject" : "Subject"}
              </label>
              <input
                value={form.subject}
                onChange={handleChange("subject")}
                type="text"
                placeholder="What's this about"
                className={inputCls}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="fadeUp"
            delay={0.2}
            className="md:col-span-2"
          >
            <div>
              <label className={labelCls}>
                {isTerminal ? "--message" : "Message"}
              </label>
              <textarea
                required
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Tell me about your project..."
                className={`${inputCls} min-h-[120px] resize-y`}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="fadeUp"
            delay={0.25}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <Button type="submit" variant="primary">
                {isTerminal ? "$ send --message" : "Send message"}
              </Button>
              <AnimatePresence>
                {sent && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-sm ${isTerminal ? "text-t-green font-mono" : "text-b-accent font-semibold"}`}
                  >
                    {isTerminal
                      ? "✓ message queued"
                      : "✓ Opening your mail app..."}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}
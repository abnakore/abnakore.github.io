import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../../hooks/useMode";
import { useTypewriterMulti } from "../../hooks/useTypewriterMulti";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import TiltCard from "../ui/TiltCard";
import SocialLinks from "../ui/SocialLinks";

/* ---------- types ---------- */
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

/* ---------- FAQ data ---------- */
const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Full-stack web apps, REST APIs, mobile interfaces, design systems, and pretty much anything that lives between a database and a user's screen. If it compiles, I'm interested.",
  },
  {
    q: "How fast do you usually respond?",
    a: "Within 24 hours on weekdays. Weekends may stretch to 48 — I'm usually heads-down building something or buried in a textbook.",
  },
  {
    q: "Do you do freelance / contract work?",
    a: "Absolutely. I'm open to freelance, contract, and collaborative open-source work. Let's talk scope, timeline, and whether your stack sparks joy.",
  },
  {
    q: "Can we hop on a quick call first?",
    a: "Sure thing. Drop your email and a brief note, and I'll send over a Calendly link so we can find a time that works for both of us.",
  },
  {
    q: "What info should I include in my message?",
    a: "A short intro, what you're building (or want built), your tech stack preferences, and any deadlines you're working toward. The more context, the better the first reply.",
  },
];

/* ---------- catchy terminal prompts (memoized outside component) ---------- */
const terminalPrompts = [
  '$ echo "Hi — I actually read every message."',
  '$ echo "No bots. No auto-replies. Just code."',
  '$ echo "Let\'s skip the small talk and build something."',
];

const gridTagline =
  "I read every message personally. No bots, no templates — just real conversations about real projects.";

/* ---------- FAQ accordion item ---------- */
function FaqItem({
  question,
  answer,
  isTerminal,
  isEditorial = false,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isTerminal: boolean;
  isEditorial?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  let btnClass: string, openClass: string, iconClass: string, answerClass: string;
  if (isTerminal) {
    btnClass = "font-mono text-sm text-t-text hover:bg-t-accent/5 border border-t-border hover:border-t-accent/30";
    openClass = "border-t-accent bg-t-accent/5";
    iconClass = "text-t-accent";
    answerClass = "text-t-dim font-mono";
  } else if (isEditorial) {
    btnClass = "font-archivo text-sm text-e-text border border-e-border hover:border-e-accent/50";
    openClass = "border-e-accent bg-e-accent/5";
    iconClass = "text-e-accent";
    answerClass = "text-e-dim font-archivo";
  } else {
    btnClass = "text-sm font-semibold text-b-ink bg-white border-[1.5px] border-[#E4E0F5] hover:border-b-accent/30 hover:shadow-sm";
    openClass = "border-b-accent bg-b-accent/5";
    iconClass = "text-b-accent";
    answerClass = "text-b-sub";
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={`
          w-full text-left flex items-center justify-between gap-3
          px-4 py-3.5 transition-all duration-200
          ${btnClass}
          ${isOpen ? openClass : ""}
        `}
      >
        <span className="flex-1 leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 text-lg leading-none ${iconClass}`}
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className={`px-4 pb-4 pt-2 text-sm leading-relaxed ${answerClass}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- component ---------- */
export default function Contact() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const typedCatch = useTypewriterMulti(terminalPrompts, 40, 20, 2500, 600);

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

  /* ---- shared classes ---- */
  const inputCls = isTerminal
    ? "w-full bg-t-panel border border-t-border rounded-lg px-3.5 py-3 text-sm text-t-text placeholder:text-t-dim focus:outline-none focus:border-t-accent transition-colors"
    : isEditorial
      ? "w-full bg-e-bg border border-e-border px-3.5 py-3 text-sm text-e-text placeholder:text-e-dim focus:outline-none focus:border-e-accent transition-colors"
      : "w-full bg-white border-[1.5px] border-[#E4E0F5] rounded-xl px-4 py-3.5 text-sm placeholder:text-b-sub/60 focus:outline-none focus:border-b-accent transition-colors";

  const labelCls = isTerminal
    ? "block font-mono text-xs text-t-accent mb-1.5"
    : isEditorial
      ? "block font-archivo text-xs font-bold text-e-accent mb-1.5"
      : "block text-xs font-bold text-b-sub mb-1.5";

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? (isEditorial ? "bg-e-bg" : "bg-white") : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        {/* ---- heading ---- */}
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ mail --compose" : isEditorial ? "04" : "Let's connect"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 leading-tight ${isTerminal ? "font-mono" : isEditorial ? "font-fraunces font-semibold" : "font-sora"}`}
          >
            {isTerminal ? "Drop me a line" : isEditorial ? "Say hello — I don't bite" : "Say hello — I don't bite"}
          </h2>
          {isTerminal ? (
            <p className="mt-3 text-sm leading-relaxed max-w-xl min-h-[3em] text-t-green font-mono">
              {typedCatch}
              <span className="inline-block w-[0.4ch] ml-0.5 bg-t-green animate-blink">
                &nbsp;
              </span>
            </p>
          ) : isEditorial ? (
            <p className="mt-3 font-archivo text-sm leading-relaxed max-w-xl text-e-dim">
              {gridTagline}
            </p>
          ) : (
            <p className="mt-3 text-sm leading-relaxed max-w-xl text-b-sub">
              {gridTagline}
            </p>
          )}
        </ScrollReveal>

        {/* ---- two-col layout ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
          {/* ---- LEFT: form + socials ---- */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div
                className={`p-6 md:p-7 ${
                  isTerminal
                    ? "rounded-2xl border border-t-border bg-t-panel"
                    : isEditorial
                      ? "border border-e-border"
                      : "rounded-2xl bg-b-bg border-[1.5px] border-[#E4E0F5]"
                }`}
              >
                <p
                  className={`text-sm mb-5 ${
                    isTerminal
                      ? "text-t-dim font-mono"
                      : isEditorial
                        ? "text-e-dim font-archivo"
                        : "text-b-sub font-semibold"
                  }`}
                >
                  {isTerminal
                    ? "# Fill in the fields below — I'll get back to you faster than `npm install`"
                    : "Fill in the fields below and I'll get back to you faster than you think."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className={labelCls}>
                      {isTerminal ? "--name" : isEditorial ? "Full name" : "Full name"}
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
                  </div>

                  <div>
                    <label className={labelCls}>
                      {isTerminal ? "--subject" : "Subject"}
                    </label>
                    <input
                      value={form.subject}
                      onChange={handleChange("subject")}
                      type="text"
                      placeholder="What's this about?"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={labelCls}>
                      {isTerminal ? "--message" : "Message"}
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder={
                        isTerminal
                          ? "Tell me about your project, idea, or just say hi..."
                          : "Tell me about your project, your idea, or just say hi — I'm friendly."
                      }
                      className={`${inputCls} min-h-[120px] resize-y`}
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <Button type="submit" variant="primary">
                      {isTerminal ? "$ send --message" : "Send message"}
                    </Button>
                    <AnimatePresence>
                      {sent && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className={`text-sm ${
                            isTerminal
                              ? "text-t-green font-mono"
                              : "text-b-accent font-semibold"
                          }`}
                        >
                        {isTerminal
                          ? "✓ message queued"
                          : isEditorial
                            ? "✓ Opening your mail app..."
                            : "✓ Opening your mail app..."}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            {/* social links row */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div
                className={`flex flex-wrap items-center gap-4 p-5 ${
                  isTerminal
                    ? "rounded-2xl border border-t-border bg-t-panel"
                    : isEditorial
                      ? "border border-e-border"
                      : "rounded-2xl bg-b-bg border-[1.5px] border-[#E4E0F5]"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isTerminal ? "text-t-dim font-mono" : isEditorial ? "text-e-dim font-archivo" : "text-b-sub"
                  }`}
                >
                  {isTerminal ? "# ping me on" : "Find me on"}
                </span>
                <SocialLinks />
              </div>
            </ScrollReveal>
          </div>

          {/* ---- RIGHT: FAQ ---- */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="fadeUp" delay={0.15}>
              {isTerminal ? (
                <div className="rounded-2xl border border-t-border bg-t-panel overflow-hidden">
                  <div className="flex gap-2 bg-[#17160E] px-4 py-3 border-b border-t-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-2 text-t-dim text-xs font-mono">
                      faq — frequently asked questions
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-t-dim font-mono text-xs mb-3">
                      $ cat FAQ.md | head -5
                    </p>
                    {faqs.slice(0, 4).map((faq, i) => (
                      <FaqItem
                        key={i}
                        question={faq.q}
                        answer={faq.a}
                        isTerminal={isTerminal}
                        isOpen={openFaqIdx === i}
                        onToggle={() =>
                          setOpenFaqIdx(openFaqIdx === i ? null : i)
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : isEditorial ? (
                <div className="border border-e-border p-6 h-full">
                  <h3 className="font-fraunces font-semibold text-e-text text-lg mb-4 flex items-center gap-2">
                    <span className="inline-block w-1 h-5 bg-e-accent" />
                    FAQ
                  </h3>
                  <p className="text-xs text-e-dim mb-5 font-archivo">
                    Quick answers to things you're probably wondering.
                  </p>
                  <div className="space-y-2.5">
                    {faqs.map((faq, i) => (
                      <FaqItem
                        key={i}
                        question={faq.q}
                        answer={faq.a}
                        isTerminal={false}
                        isEditorial={true}
                        isOpen={openFaqIdx === i}
                        onToggle={() =>
                          setOpenFaqIdx(openFaqIdx === i ? null : i)
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <TiltCard className="bg-b-bg border-[1.5px] border-[#E4E0F5] rounded-3xl p-6 shadow-[0_8px_30px_rgba(24,20,37,0.06)] h-full">
                  <h3 className="font-sora font-bold text-b-ink text-lg mb-4 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-5 bg-b-accent rounded-full" />
                    FAQ
                  </h3>
                  <p className="text-xs text-b-sub mb-5 font-semibold">
                    Quick answers to things you're probably wondering.
                  </p>
                  <div className="space-y-2.5">
                    {faqs.map((faq, i) => (
                      <FaqItem
                        key={i}
                        question={faq.q}
                        answer={faq.a}
                        isTerminal={isTerminal}
                        isOpen={openFaqIdx === i}
                        onToggle={() =>
                          setOpenFaqIdx(openFaqIdx === i ? null : i)
                        }
                      />
                    ))}
                  </div>
                </TiltCard>
              )}
            </ScrollReveal>
          </div>
        </div>

        {/* ---- closing line ---- */}
        <ScrollReveal variant="fadeUp" delay={0.35}>
          <div
            className={`mt-12 text-center text-xs ${
              isTerminal ? "text-t-dim font-mono" : isEditorial ? "text-e-dim font-archivo" : "text-b-sub"
            }`}
          >
            {isTerminal
              ? "# EOF — thanks for stopping by. I'll reply before you finish your next `git push`."
              : "Thanks for stopping by. I'll reply before you finish your next commit."}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../../hooks/useMode";
import ModeToggle from "./ModeToggle";

const links = [
  { label: "Home", href: "/", isHash: false },
  { label: "About", href: "/about", isHash: false },
  { label: "Services", href: "/#services", isHash: true },
  { label: "Projects", href: "/projects", isHash: false },
  { label: "Contact", href: "/contact", isHash: false },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const { mode } = useMode();
  const navigate = useNavigate();
  const isTerminal = mode === "terminal";
  const [menuOpen, setMenuOpen] = useState(false);

  // Blur page content when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  function handleClick(l: (typeof links)[number]) {
    setMenuOpen(false);
    if (!l.isHash) return;
    const id = l.href.replace("/#", "");
    if (window.location.hash.replace("#", "").replace(/\/$/, "") !== "") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  }

  /* ── Terminal mode styles ── */
  const terminalNav = "bg-t-bg/90 border-b border-t-border font-mono text-sm";
  const terminalLogo = "font-mono text-t-accent font-extrabold text-lg tracking-tight";
  const terminalLink = "text-t-text/70 hover:text-t-accent transition-colors duration-200 text-sm font-medium";
  // FIX: Swapped out 'bg-t-panel' for the confirmed working 'bg-t-bg'
  const terminalMobilePanel = "bg-t-bg border-l border-t-border";
  const terminalMobileLink = "text-t-text hover:text-t-accent hover:bg-t-border/30 hover:pl-3 transition-all duration-200 text-lg font-mono py-4 px-5 rounded-lg";

  /* ── Bento mode styles ── */
  const bentoNav = "bg-b-bg/90 border-b border-black/5 font-inter text-sm";
  const bentoLogo = "font-sora text-b-ink font-extrabold text-lg tracking-tight";
  const bentoLink = "text-b-sub hover:text-b-accent transition-colors duration-200 text-sm font-medium";
  const bentoMobilePanel = "bg-white border-l border-black/5";
  const bentoMobileLink = "text-b-ink hover:text-b-accent hover:bg-black/5 hover:pl-3 transition-all duration-200 text-lg font-sora py-4 px-5 rounded-lg";

  const navStyle = isTerminal ? terminalNav : bentoNav;
  const logoStyle = isTerminal ? terminalLogo : bentoLogo;
  const linkStyle = isTerminal ? terminalLink : bentoLink;
  const mobilePanelStyle = isTerminal ? terminalMobilePanel : bentoMobilePanel;
  const mobileLinkStyle = isTerminal ? terminalMobileLink : bentoMobileLink;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-4 backdrop-blur-md transition-colors duration-300 ${navStyle}`}>
      {/* ── Logo ── */}
      <Link to="/" className={logoStyle}>
        {isTerminal ? (
          <span>
            <span className="text-t-dim">~/</span>
            <span className="text-t-accent">abnakore</span>
            <span className="text-t-dim">$</span>
          </span>
        ) : (
          "AB.NAKORE"
        )}
      </Link>

      {/* ── Desktop nav ── */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((l) =>
          l.isHash ? (
            <button
              key={l.label}
              onClick={() => handleClick(l)}
              className={`${linkStyle} cursor-pointer`}
            >
              {isTerminal ? `./${l.label.toLowerCase()}` : l.label}
            </button>
          ) : (
            <Link key={l.label} to={l.href} className={linkStyle}>
              {isTerminal ? `./${l.label.toLowerCase()}` : l.label}
            </Link>
          )
        )}
        <ModeToggle />
      </div>

      {/* ── Mobile hamburger + toggle ── */}
      <div className="flex md:hidden items-center gap-2">
        <ModeToggle />
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`relative z-50 flex flex-col items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
            isTerminal ? "hover:bg-t-border/50 text-t-text" : "hover:bg-black/5 text-b-ink"
          }`}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`block h-[2px] w-5 rounded-full origin-center ${isTerminal ? "bg-t-text" : "bg-b-ink"}`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className={`block h-[2px] w-5 rounded-full mt-[5px] ${isTerminal ? "bg-t-text" : "bg-b-ink"}`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`block h-[2px] w-5 rounded-full mt-[5px] origin-center ${isTerminal ? "bg-t-text" : "bg-b-ink"}`}
          />
        </button>
      </div>

      {/* ── Mobile overlay drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className={`fixed top-0 right-0 z-40 h-screen w-3/4 max-w-xs flex flex-col pt-24 px-4 gap-1 shadow-2xl md:hidden ${mobilePanelStyle}`}
          >
            {/* Terminal mode decoration window dots */}
            {isTerminal && (
              <div className="flex gap-2 px-5 mb-4 mt-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
            )}

            {/* Nav links */}
            <div className="flex flex-col gap-2 flex-1 pt-4">
              {links.map((l, i) =>
                l.isHash ? (
                  <motion.button
                    key={l.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 24 }}
                    onClick={() => handleClick(l)}
                    className={`text-left ${mobileLinkStyle}`}
                  >
                    {isTerminal ? (
                      <span className="flex items-center gap-3">
                        <span className="text-t-dim text-sm font-mono">$</span>
                        <span>./{l.label.toLowerCase()}</span>
                      </span>
                    ) : (
                      l.label
                    )}
                  </motion.button>
                ) : (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 24 }}
                  >
                    <Link
                      to={l.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block ${mobileLinkStyle}`}
                    >
                      {isTerminal ? (
                        <span className="flex items-center gap-3">
                          <span className="text-t-dim text-sm font-mono">$</span>
                          <span>./{l.label.toLowerCase()}</span>
                        </span>
                      ) : (
                        l.label
                      )}
                    </Link>
                  </motion.div>
                )
              )}
            </div>

            {/* Terminal mode footer */}
            {isTerminal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="px-5 pb-10"
              >
                <div className="border-t border-t-border/30 pt-4">
                  <div className="text-t-dim text-xs font-mono">
                    <span className="text-t-accent">abdul@dev</span>
                    <span className="text-t-dim">:</span>
                    <span className="text-t-green">~</span>
                    <span className="text-t-dim">$ _</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
import { Link, useNavigate } from "react-router-dom";
import { useMode } from "../../hooks/useMode";
import ModeToggle from "./ModeToggle";

const links = [
  { label: "About", href: "/#about", isHash: true },
  { label: "Skills", href: "/#skills", isHash: true },
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

  function handleClick(l: (typeof links)[number]) {
    if (!l.isHash) return; // Let the Link component handle it
    const id = l.href.replace("/#", "");
    // If we're not on the home page, navigate there first
    if (window.location.hash.replace("#", "").replace(/\/$/, "") !== "") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-4 backdrop-blur-md transition-colors duration-300 ${
        isTerminal
          ? "bg-t-bg/75 border-b border-t-border"
          : "bg-b-bg/80 border-b border-black/5"
      }`}
    >
      <Link
        to="/"
        className={`font-extrabold text-lg tracking-tight ${isTerminal ? "font-mono text-t-accent" : "font-sora text-b-ink"}`}
      >
        AB.NAKORE
      </Link>

      <div
        className={`hidden md:flex gap-7 text-sm font-semibold ${isTerminal ? "text-t-text" : "text-b-ink"}`}
      >
        {links.map((l) =>
          l.isHash ? (
            <button
              key={l.label}
              onClick={() => handleClick(l)}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {l.label}
            </button>
          ) : (
            <Link
              key={l.label}
              to={l.href}
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </Link>
          ),
        )}
      </div>

      <ModeToggle />
    </nav>
  );
}
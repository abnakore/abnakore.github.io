import { useMode } from "../../hooks/useMode";
import { useTypewriter } from "../../hooks/useTypewriter";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const typed = useTypewriter(
    `exit 0 // thanks for visiting • © ${new Date().getFullYear()} Abdullahi Nakore`,
    25,
    400,
  );

  return (
    <footer
      className={`relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between px-[6vw] py-8 text-sm ${
        isTerminal
          ? "bg-black text-t-dim font-mono border-t border-t-border"
          : "bg-white text-b-sub"
      }`}
    >
      {/* Terminal trailing system line marker */}
      {isTerminal ? (
        <div className="text-center">
          <span className="text-t-accent">❯ </span>

          <span>
            <span className="text-t-accent">abdul@dev</span>:~$ {typed}
          </span>
          <span className="w-1 h-3 bg-t-accent inline-block animate-blink" />
        </div>
      ) : (
        <span>
          © {new Date().getFullYear()} Abdullahi Nakore —{" "}
          {isTerminal ? "CLI mode" : "Grid mode"}
        </span>
      )}

      <SocialLinks />
      <a href="#hero" className="hover:opacity-70 transition-opacity">
        ↑ top
      </a>
    </footer>
  );
}

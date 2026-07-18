import { useMode } from "../../hooks/useMode";
import { useTypewriter } from "../../hooks/useTypewriter";
import SocialLinks from "../ui/SocialLinks";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";
  const typed = useTypewriter(
    `exit 0 // thanks for visiting • © ${new Date().getFullYear()} Abdullahi Nakore`,
    25,
    400,
  );

  let footerClass: string;
  if (isTerminal) {
    footerClass = "bg-black text-t-dim font-mono border-t border-t-border";
  } else if (isEditorial) {
    footerClass = "bg-e-bg text-e-dim font-archivo border-t border-e-border";
  } else {
    footerClass = "bg-white text-b-sub";
  }

  return (
    <footer
      className={`relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between px-[6vw] py-8 text-sm ${footerClass}`}
    >
      {isTerminal ? (
        <div className="text-center">
          <span className="text-t-accent">❯ </span>
          <span>
            <span className="text-t-accent">abdul@dev</span>:~$ {typed}
          </span>
          <span className="w-1 h-3 bg-t-accent inline-block animate-blink" />
        </div>
      ) : isEditorial ? (
        <span className="font-archivo">
          © {new Date().getFullYear()} Abdullahi Nakore — Editorial mode
        </span>
      ) : (
        <span>
          © {new Date().getFullYear()} Abdullahi Nakore — Grid mode
        </span>
      )}

      <SocialLinks />
      <button onClick={scrollToTop} className="hover:opacity-70 transition-opacity cursor-pointer">
        ↑ top
      </button>
    </footer>
  );
}

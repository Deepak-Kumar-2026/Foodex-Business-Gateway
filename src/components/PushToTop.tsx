import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function PushToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Push to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-50 inline-flex flex-col items-center gap-0.5 rounded-full bg-primary px-3 py-3 text-primary-foreground shadow-lift transition hover:bg-primary-dark"
    >
      <ArrowUp className="h-5 w-5" />
      <span className="text-[9px] font-bold uppercase tracking-wide">Top</span>
    </button>
  );
}

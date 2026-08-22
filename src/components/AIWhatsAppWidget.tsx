import { useEffect, useRef, useState } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";
import { company, waLink } from "@/data/company";
import { hotProducts } from "@/data/products";
import { useLang } from "@/lib/i18n";

type Msg = { from: "bot" | "user"; text: string };

function autoReply(input: string): string {
  const q = input.toLowerCase();
  const match = hotProducts.find(
    (p) => q.includes(p.title.toLowerCase().split(" ")[0] ?? "") || p.keywords.some((k) => q.includes(k.split(" ")[0] ?? "")),
  );
  if (q.includes("price") || q.includes("cost") || q.includes("quote") || q.includes("rate")) {
    return `Pricing depends on capacity, heating type and automation. Share your required output (kg/hr) and city — Director ${company.director} will send a quotation on WhatsApp (${company.phone}) the same day.`;
  }
  if (q.includes("capacity") || q.includes("kg")) {
    return "We build machines from 20 kg/hr up to 1000 kg/hr, including complete turnkey lines. Tell me your target output and product and I will suggest the right model.";
  }
  if (q.includes("export") || q.includes("south africa") || q.includes("uae") || q.includes("nepal") || q.includes("uk")) {
    return "Yes, we export to South Africa, UAE, Nepal and the UK with sea/air freight documentation, installation guidance and spares support.";
  }
  if (q.includes("address") || q.includes("location") || q.includes("visit")) {
    return `Our works: ${company.address}. You are welcome to visit for a machine trial.`;
  }
  if (q.includes("install") || q.includes("training") || q.includes("service")) {
    return "Installation, commissioning and operator training are included. We also supply spares and remote support for export customers.";
  }
  if (match) {
    return `${match.title}: ${match.summary} Capacity ${match.capacity}, ${match.material}. Want a quotation for this machine?`;
  }
  return `Thanks for your message! We manufacture batch fryers, food extruders, soya nugget plants and food processing machines. Ask me about capacity, price, installation or export — or tap "Continue on WhatsApp" to chat with ${company.director} directly.`;
}

export function AIWhatsAppWidget() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: `Namaste! I am the Foodex AI assistant. Ask me about any machine, capacity, price or export enquiry — replies are instant, and you can continue on WhatsApp anytime.`,
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text }]);
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: autoReply(text) }]), 450);
  };

  return (
    <>
      <button
        id="ai-chat"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full accent-gradient px-4 py-3 text-sm font-bold text-accent-foreground shadow-lift"
      >
        <Bot className="h-5 w-5" /> AI Chat · WhatsApp
      </button>

      {open && (
        <div className="fixed bottom-5 right-5 z-[90] flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lift">
          <div className="flex items-center justify-between gap-2 bg-primary px-4 py-3">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Bot className="h-5 w-5" />
              <div>
                <p className="text-sm font-bold">{t("chat.title")}</p>
                <p className="text-[11px] text-primary-foreground/70">Auto-reply · {company.phone}</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="inline-flex items-center gap-1 rounded-md bg-primary-foreground/15 px-2 py-1 text-xs font-semibold text-primary-foreground"
            >
              <X className="h-4 w-4" /> Close
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-surface p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-card text-card-foreground shadow-card"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border p-2">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={t("chat.placeholder")}
                className="flex-1 rounded-md border border-input px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button onClick={send} aria-label={t("chat.send")} className="rounded-md bg-primary px-3 text-primary-foreground">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <a
              href={waLink("Hi, I chatted with your AI assistant and need help.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md accent-gradient px-3 py-2 text-sm font-bold text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" /> {t("chat.continue")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

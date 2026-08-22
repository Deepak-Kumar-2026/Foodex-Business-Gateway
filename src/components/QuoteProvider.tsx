import { createContext, useContext, useState, type ReactNode } from "react";
import { GetQuoteModal } from "./GetQuoteModal";

type Ctx = { openQuote: (product?: string) => void };
const QuoteContext = createContext<Ctx>({ openQuote: () => {} });

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>(undefined);

  const openQuote = (p?: string) => {
    setProduct(p);
    setOpen(true);
  };

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      {open && <GetQuoteModal product={product} onClose={() => setOpen(false)} />}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}

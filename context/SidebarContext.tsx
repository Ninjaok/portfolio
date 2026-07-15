"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type SidebarState = "compact" | "expanded" | "about";

interface SidebarContextValue {
  state: SidebarState;
  setState: (state: SidebarState) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SidebarState>("compact");

  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarState() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error(
      "useSidebarState precisa estar dentro de um SidebarProvider",
    );
  }
  return ctx;
}

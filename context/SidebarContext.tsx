"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type SidebarState = "compact" | "expanded" | "about";

interface SidebarContextValue {
  state: SidebarState;
  setState: Dispatch<SetStateAction<SidebarState>>;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({
  children,
  initialMode = "compact",
}: {
  children: ReactNode;
  initialMode?: SidebarState;
}) {
  const [state, setState] = useState<SidebarState>(initialMode);

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

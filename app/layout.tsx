import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import ScrollProgress from "@/components/ScrollProgress";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import GlobalThemeToggle from "@/components/GlobalThemeToggle";
import { LangProvider } from "@/context/LangContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Luan Ribeiro — Software Engineer",
  description: "Portfolio de Luan Ribeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={spaceGrotesk.variable}>
      <body>
        <ThemeProvider>
          <GlobalThemeToggle />
          <ScrollProgress />
          <LangProvider>
            <SidebarProvider>
              <Sidebar />
              <main style={{ flex: 1 }}>{children}</main>
            </SidebarProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

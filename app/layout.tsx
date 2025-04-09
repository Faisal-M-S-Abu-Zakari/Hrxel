import "./globals.css";
import { Montserrat } from "next/font/google";
import { Tajawal } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SwitchWrapper } from "@/context/switchContext";

// Google font for English text
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-elegant",
});

// Google font for Arabic text
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
});

export const metadata = {
  title: "HRXEL - Human Capital Solutions & Organizational Excellence",
  description:
    "HRXEL is a Saudi platform specializing in providing integrated solutions for individuals and companies in the fields of human capital, organizational excellence, and executive search.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${tajawal.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SwitchWrapper>{children}</SwitchWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

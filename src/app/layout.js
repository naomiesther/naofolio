import { Montserrat } from "next/font/google";
import "./globals.css";

import RouteTransitionReset from "@/components/RouteTransitionReset";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Naomi Liu | Portfolio",
    template: "%s | Naomi Liu",
  },
  description:
    "UI/UX Designer and Web Developer portfolio — Naomi Liu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Route transition helper (clears navigation fade class on route change) */}
        <RouteTransitionReset />
        {children}
      </body>
    </html>
  );
}

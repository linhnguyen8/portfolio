import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Linh Nguyen",
  description: "Linh Nguyen — engineer building products with a human-centered approach.",
  icons: { icon: "/img/profile/face-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={assistant.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import { Motion } from "@/components/Motion";
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
  metadataBase: new URL("https://linhhnguyen.com"),
  // Link preview (iMessage, Slack, LinkedIn, etc.)
  openGraph: {
    title: "Linh Nguyen",
    url: "/",
    siteName: "Linh Nguyen",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LN monogram — Linh Nguyen" }],
  },
  twitter: { card: "summary_large_image", title: "Linh Nguyen", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f5",
};

// Runs before the page paints: opts into animations by adding the "js" class.
// If the motion script hasn't started within 2.5s (slow network, blocked JS),
// the class is removed so all content simply shows without animation.
const motionBootstrap = `(function(){var d=document.documentElement;d.classList.add("js");setTimeout(function(){if(!d.classList.contains("motion-ready"))d.classList.remove("js")},2500)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={assistant.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Motion />
      </body>
    </html>
  );
}

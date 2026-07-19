import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/header.css";

export const metadata: Metadata = {
  title: "ETMAM",
  description: "تعـمّق • تمكين • أثر",
  icons: {
icon: [
      { url: '/logo.png', sizes: '200x200', type: 'image/png' },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
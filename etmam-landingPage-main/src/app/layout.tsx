import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/lib/LanguageContext";
import { getInitialLang } from "@/lib/lang";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/page.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Read the persisted language cookie server-side to avoid a flash of the
  // wrong language and to persist the user's choice across full page loads.
  const cookieStore = await cookies();
  const lang = getInitialLang(cookieStore.get('ETMAM_LANG')?.value ?? null);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir} className={cairo.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}

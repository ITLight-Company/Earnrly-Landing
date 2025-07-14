import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Earnrly - Zarabiaj Pieniądze Każdego Dnia",
  description: "Najlepsza aplikacja do zarabiania pieniędzy przez telefon. Rozwiązuj quizy, oglądaj filmy, instaluj aplikacje i otrzymuj prawdziwe pieniądze. Pobierz za darmo!",
  keywords: ["zarabianie pieniędzy", "aplikacja mobilna", "quizy", "ankiety", "dodatkowy dochód", "Earnrly"],
  authors: [{ name: "Earnrly Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Earnrly - Zarabiaj Pieniądze Każdego Dnia",
    description: "Najlepsza aplikacja do zarabiania pieniędzy przez telefon. Rozwiązuj quizy, oglądaj filmy, instaluj aplikacje i otrzymuj prawdziwe pieniądze.",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earnrly - Zarabiaj Pieniądze Każdego Dnia",
    description: "Najlepsza aplikacja do zarabiania pieniędzy przez telefon. Pobierz za darmo!",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

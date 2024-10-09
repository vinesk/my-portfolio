import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Eskenazi - Portfolio",
  description: "Développeur Full Stack JavaScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

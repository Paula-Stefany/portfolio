import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export const metadata: Metadata = {
  title: "Paula | Desenvolvedora FullStack - Portfólio",
  description: "Portfólio profissional de Paula, desenvolvedora FullStack com projetos em web, frontend, backend e muito mais.",
  creator: "Paula Stéfany",
  publisher: "Paula Stéfany",
  keywords: ['Portfolio', 'Projetos', 'FullStack', 'Desenvolvedora', 'Next.js', 'React', 'Node.js', 'Frontend', 'Backend', 'JavaScript'],
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosInit from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Lovers - O melhor para o seu pet!",
  description:
    "Cuidamos do seu pet com amor! Encontre os melhores produtos e serviços para cães e gatos na Pet Lovers.",
  keywords: [
    "pet shop",
    "cachorro",
    "gato",
    "cuidados com pets",
    "produtos para animais",
    "Pet Lovers",
  ],
  openGraph: {
    title: "Pet Lovers - O melhor para o seu pet!",
    description:
      "Cuidamos do seu pet com amor! Encontre os melhores produtos e serviços para cães e gatos na Pet Lovers.",
    url: "https://pet-lovers-ten.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://pet-lovers-ten.vercel.app/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Pet Lovers - Seu pet em boas mãos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Lovers - O melhor para o seu pet!",
    description:
      "Cuidamos do seu pet com amor! Encontre os melhores produtos e serviços para cães e gatos na Pet Lovers.",
    images: ["https://pet-lovers-ten.vercel.app/images/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}

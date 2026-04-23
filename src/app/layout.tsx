import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trojes San Cristobal - News del Condominio",
  description:
    "Micrositio de Noticias de Trojes de San Cristobal. Entérate de las últimas noticias de administración y la comunidad que a todos nos importa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#585858]">
        {children}
      </body>
    </html>
  );
}

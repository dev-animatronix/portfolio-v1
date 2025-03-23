import { Roboto, Nunito } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/favicon.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Animatronix",
  description: "Portfolio d'animatronix",
  icons: {
    icon: {
      url: "/logo.jpg",
      type: "image/jpeg",
      sizes: "any"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${nunito.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

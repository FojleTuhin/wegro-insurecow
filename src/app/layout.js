import Footer from "@/components/shared/Footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
// If loading a variable font, you don't need to specify the font weight
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "InsureCow",
  description: "InsureCow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/logo.png" type="any" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="InsureCow" />
        <meta property="og:description" content="Insure Cow" />
        <meta property="og:image" content="/logo.png" />
        {/* <meta property="og:url" content="#" /> */}
        <meta property="og:type" content="website" />
      </head>

      <body className={urbanist.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

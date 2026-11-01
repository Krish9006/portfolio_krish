import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Krish Gupta — Full-Stack & AI Engineer",
  description:
    "Full-stack and AI engineer, IIT Guwahati (Data Science & AI). Two internships and three client projects in Next.js, Node.js, PostgreSQL and LLM systems. Open to internships and full-time roles.",
  openGraph: {
    title: "Krish Gupta — Full-Stack & AI Engineer",
    description:
      "Full-stack and AI engineer. Open to internships, full-time roles and freelance work.",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krish Gupta",
  jobTitle: "Software Engineer",
  email: "mailto:krishgupta80067@gmail.com",
  alumniOf: "IIT Guwahati",
  sameAs: ["https://github.com/Krish9006", "https://linkedin.com/in/krishguptaji"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrument.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

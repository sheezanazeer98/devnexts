import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: "Devnexts Technologies | Software Solution Company",
  description:
    "Devnexts Technologies is a global software development company delivering AI, blockchain, cloud, and scalable web & mobile solutions for startups and enterprises.",
};

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Devnexts Technologies | Software Solution Company</title>
        <meta
          name="description"
          content="Devnexts Technologies provides enterprise-grade AI, blockchain, cloud, and custom software development services to accelerate digital growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.devnexts.com/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devnexts.com/" />
        <meta
          property="og:title"
          content="Devnexts Technologies | Software Solution Company"
        />
        <meta
          property="og:description"
          content="Partner with Devnexts Technologies to build secure, scalable, and future-ready software solutions using AI, blockchain, and cloud technologies."
        />
        <meta
          property="og:image"
          content="https://moccasin-cheerful-stingray-119.mypinata.cloud/ipfs/bafkreig5n3nwgtwfv54hw5akqvudvhiyr5mikhy52nocwkvs2gafnouph4"
        />
        <meta property="og:site_name" content="Devnexts Technologies" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devnexts_llc" />
        <meta name="twitter:url" content="https://www.devnexts.com/" />
        <meta
          name="twitter:title"
          content="Devnexts Technologies | Next-Gen Software Solutions"
        />
        <meta
          name="twitter:description"
          content="Devnexts Technologies specializes in AI-powered, blockchain-driven, and cloud-native software development for modern businesses."
        />
        <meta
          name="twitter:image"
          content="https://moccasin-cheerful-stingray-119.mypinata.cloud/ipfs/bafkreig5n3nwgtwfv54hw5akqvudvhiyr5mikhy52nocwkvs2gafnouph4"
        />

        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="
          Devnexts Technologies,
          Devnexts software company,
          AI development company,
          blockchain development services,
          cloud computing solutions,
          web application development,
          mobile app development,
          SaaS development,
          DeFi and smart contracts,
          enterprise software solutions,
          full-stack development,
          DevOps and cloud infrastructure,
          scalable software architecture,
          digital transformation services,
          IT consulting company,
          custom software development,
          blockchain integration services,
          AI automation solutions,
          cloud-native applications
        "
        />

        {/* Search Engine Directives */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Devnexts Technologies" />
        <meta name="google-site-verification" content="59rHIuL5ZP95DNko1Go3HH4H307tND6-STqM0awxA-w" />

        {/* Social Profiles */}
        <link rel="me" href="https://x.com/devnexts_llc" />
        <link rel="me" href="https://www.instagram.com/devnexts_llc/" />
        <link rel="me" href="https://www.linkedin.com/company/dev-nexts" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* External Styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>

      <body className={Josef.className}>{children}</body>
    </html>
  );
}
